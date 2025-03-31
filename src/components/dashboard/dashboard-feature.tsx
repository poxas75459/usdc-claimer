/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Bw7bFf6oBFWw4BuuHC8FSgq4XnELFbFhAbm9KPoQsmZ9Zya9k3QLQhjcDhdkuR1zFNjBYcgcDA1wH8fxZx1sbUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzxfdDvUhXw1t3f9XtJNeymqYpCnuVo3rGgZAG6yUqTdyA9zXA4rHQS2odXygEUXmmniWs5CpTW1oc5YP8hXMMh",
  "key1": "3U2WWrxjZ2CAoNhT1ot1sH2zapgTV72FbBSeL4wGjh1j7b3CZuYvwmQ9tRZG4cPcxgvLH2Kow9EUXziatin8JGRL",
  "key2": "4PN9fpLCd6jn127mwTBPxkWShHC4SsceNEi9UbbGkGgVx76tHRmj9SA6Ews8zazicPLCaLiLVhoTDZUcK81nyC8m",
  "key3": "5CTG6AwP4myUZhb3wnKN5sTrwWDgqXXb8bEytePaLii93J52aRYHBn8uWuqzmHoM3ZkPVMwm7gbBDfDD94CqTX9o",
  "key4": "LRJcTEGgeWEbWp7GpP56J15CcobymmpYcSxnt8Wbn4EDeYXSLyRzBkbB7AJstQUsqTcpFVscmeuCHNy67Lv2z1T",
  "key5": "3raCd99uScZcgyZRAUZkX8scZoH8cJZEYtyF7wnTe65JwxHzykBvPs92GCrrjAhJ92S3k1ckfYxoBnKKd8Rj71k7",
  "key6": "53uCJnzxrXSkKUdKArhfPBs2sjkFHhCNvY4HzmqJhW3fPKu5unE3t7ajSV3wttEy1EWt27eKefVqqgNumQ4gpPFN",
  "key7": "5onuLckDQBRWwVG9riBpez5eKiJjwxRtfzKBcqKhQSNvyeh2dygqZCg1RcUdB9TFDdhCo98aQ4AB29MDQJRi9RUB",
  "key8": "z23rEGc6FbE4nZRB1785LGQUzJqrXWXTNMCeKwR2J4g28GhqVoN6Jx8YpiiwxQRAk8ADiTy66j7ju1WcpCN4Fry",
  "key9": "2ysy1xLAcBxnRuD1VwnPB2gt8WdCkaGNKM28xUrhKKZenNXckJKU5ke5eRUqfJrMYfoHC4Hxyo6aXAsYTwFZfbg8",
  "key10": "67hDXNAYLGqVhbkunzDKhRPWL6EhLF9NkVqQtrNTPr79UZemi9TmuAhepB2PgEcRboLd2CMj2Ys1f1wYwvE2Etd3",
  "key11": "3mFZDkZnpxyc9X9iW4BtN7XmcvTWkJUuTBRnnMNnmMJSSRzgv1ZK3ye5H64jgnxWJLbFKzMRuGvpy9gSMboaw6iV",
  "key12": "5HVKUSP51SuyAAbkQDGJhdahCfjpPSFexZP7qrcaRenp4F2nxAy4WkzQuFug3yEZLgjq77Jd9H7kXaRLj2Zu8uAu",
  "key13": "3nMxTFyKMr5UeDytXW26QhjiJwNdgK73B7oKUBWq2UMUmmmuPvqbbMdyN9H5WfgQtHMCa8hfXhoZiofDGupuqs8r",
  "key14": "5Wnx8AqK5SrQnk3oxVVeW3PYedyYfcsZvukCTcGg4bTrb1ugcuGpBoKcpDWLy57etK4RgYHdZt6iGjEUb7DvEHp5",
  "key15": "36BjixUHxaKJfpb8YzTQnCCH25QFEqEGvjViMLTCuZmX23nxjtozRAm2mPsFojdg9GQisYES5zQT7UKew1kMrGN3",
  "key16": "2PvyvceCXM9n6xevQCxAotT6WzNjzFPfAHtSm1NWAvdrKifTwTJQGCYUPoinN1uubG3mpEnQFsv8Q4AphZkj4KrD",
  "key17": "2YWww8YM88XqGwLqsoAZmQ4X4zhH1p4foGA7PQpa73jBEmWbwnsL5whKDZ71H7VLJEVJ1wc9aAPaJHWsbNA9JfLA",
  "key18": "49K21fo6crgQuDMmDFsZkwaUk6mY2kMdbxCpbakPyTc6e1uyBJ5H12s17yp7p6qWuzLcCE5cnVPy1rtqJV3XXrd7",
  "key19": "3y6JYjbkrf7bTBKGMN8wcyzrbqw5DvKoZg4DcuzLwZREMwajdrfkf1tvSc5dMMBqN1Yc1hW4wA6XgVVowFwX9E2r",
  "key20": "5go1pdxvn1EC6TDUsc3yWGbuVJjwRDuEJrL8jyEAGCjftt4Li8J9h8ako6ugJ1Kn1Xxqi5uKPSquoWM3z6txJQxA",
  "key21": "2eeiaePHFX22BHKNioxxYDbesfnPk2b5gfitknuJBcwu3NxNRNEBHBTQ5a6nnqsFDapAkBXiSUz3d46uSj2hadNx",
  "key22": "5XXznjv9z8vwyM8NCtKKx5yC5HHPfycYrpbPo75VBoqUkTkxvpaYMTAQj3pH8kAQm2z3ccoGzfZq9qbANQQSvne8",
  "key23": "3926pv9UJbSp383urd2njNwqazUz3Y9koX1XoyDxcYnU3TNP7ts1QXa8yFGgxEMt8j1UGcfBuxC5DPxbdo7GBFp7",
  "key24": "3NvhnfGqa47L8CGqVLZ1KXqnXM3MWP9mrrK7FQbVoS7hgDPidwqVgdPDu6bcZY3uBVdnXqzgWvUTUfRL9r4aKmRb",
  "key25": "4nnpQ4djGDrTw6nVpxyBho9BmDzEtNsYLTMWLxxQnbAjaPJUzJ97D5Hav3rqRah7kPo79X93U4Pm574PdFGjV6v9",
  "key26": "4FPVLmiy5Pj4rgF2Geu8aDEbP7PscDsnqeESGuy3QVVD4Vp7boui4m8Rgr3zFT6zG2UcXLNGJ8B4YgJt4Z1C95Da",
  "key27": "4QqeAhkw5PokKSBDv5AdnMCBrQ2zQP3TH9D7vcDZYaryVv2uWpXHY3J9NdhYusa8xfCn5MNuu93kfsJnQa4v9Xwu",
  "key28": "4psQ39xyZWUduhoJaFuMwa7fy5wRRBJppztsAGtSLwiJUVKE9MX4VxTr1CUzgR2qV6trkemf6jUjhbh1RVVknGwY",
  "key29": "4x5rK1gPAXvHvAYdLCLvW7G3bgErBEaQSZqJWA3agd6tp1QGgvgoGaKKVWzzbUaAvmYRWo8HKgESj3zpcKinkx8C",
  "key30": "4evxzivP3VdZdLqPfaAmxAWA8vSkuPgwSKbhNuR5emjRJzmMtPHqtFAsyTL4oUuUrqURid3yiuDGHVoTWTyHNHAv",
  "key31": "3sHF1qJgtRPPSosv2hiVXoujnzm5GwGksGtcDg4o4Uw4pM6qg7WLiNYtKdnwoPC6czYeXq7XyUEHCp5UTE8wyW5J",
  "key32": "4faR1GVrtU1pZDbDe2K6c6R7S9VP4bXkQTQE9jXPR1wrebEnRxXXseBXdnb28mzV1ermMt8ku98phG4YZgEtS9Uw",
  "key33": "3sn4DJfT9LgskCE5YnTzGvdEAi7p4KEQafVtDiU69cEY39daWxmyt31LqVZEX2KfUNod2ipLYjuon2hBoSnGAsQD",
  "key34": "5avSKgpkZ7cHqvunsBaXPyEtX8KGAYTGwsS3jGy3D7VAeTgJ3gRLH3VqFgSh3Wf8W4vimd2F8LvQMMhctYGqHZQv",
  "key35": "639M3XuVwe9Ch6wcRcNatTqbGvQWS9PPV48aD7AXn6sB6j27iUdHPUQmBTW2QhmxRsyews8Y7mg2x5s1tkFPFKpF",
  "key36": "2kUBw8jnFX87tAFb4QVixMcushBePNywZbzadrRUm1brSWmuvGtGuPU2dsTTtnuGmzFGifo68DhyW3R5hfh6tEc",
  "key37": "5S5vRjGCbmE5RaDDobyf7WnyEQmNEwMe1fdMQE8Gt46278tf9dL2ehWqYREy5TBCDzy5kDKaHZkzmhMCaHD22ySD",
  "key38": "2u54NsaPK5bGMpkiUTRWujiSFiUk626L6WAefrbwBJmZuPpiF4hdmx3P3Gki9GqpfjEHcVdfc72jxWcwPfWiFcyx",
  "key39": "4bMks9ykjt4yS6zUGyVE8uu54Qm6s8yeCT1RLoHvDouqdmAh4WPbySXBrqAquwRuYvfhQTh7gJV6ruEk4SQCYe8n",
  "key40": "63FxUaEnhAeEwj6vQENCHDdVPrDzTofUDNHCNhzupAarEjU9aZXmoN1uZmThaWS3Mrv5PuP6d16K9DJWEeHmQLKr",
  "key41": "5ao7jjr2jq5upZ9KNNevmtLTF1iT4QcJmarULyijiehXv4cGAfpUWkoVo9Mq7qBYREZ5GYRnFR8WBo37pnk6gamp",
  "key42": "48WM5TMgCGXZ367MLHB1HVh84cjmc5yMHpyEgZ5L7jpzEsA5vtXnx6sPniUmWMTynrxh9tZfXeqRZTYVNAaroQSu",
  "key43": "oGhGstJa54sWV8H2Taf1s82LNoQVbszvNC3jvQmABS8R9biC9YLtXueM5zMSGWBrbHidmoD3gBAUdxyafe2spYk",
  "key44": "3ff5oCLpdeuYqJrGh4nFVBFEXz6WoTPFZDokGifZuMtMYtxHtSgH5zSNB7iKmhF4mJdkXbKJiE5JRoVUeYzuAGVT",
  "key45": "3K59iPTFtXwJHYFuTfQZoKrKiw3SYdnFfLHDTMV8WbFhi1cJmNYmnGJ3eB1FQUmmakH6gd1Nr5km7D1YQmhpV1kt",
  "key46": "4oEkV1K8NH6dPkpoQpnVhgcKVPqxgWbFfoYcLWRFT9msJjRjUJ3HrGkba161YYtkhHkGJ5TpLhhu7XxGUxSehUoT",
  "key47": "4PsarNwGP3f5KYv4NvdaDG4P6ExE2rZBWRf2AvKSEFckzipa9H9DATWytQnSXBXTnj83sNUUq65uKqqcuBV6Kshc",
  "key48": "GL1NoiQzFQkQsvGr3LHBBEhbyeesimhouojE4gfVTP8WJ8NqzM8Pt6DJnVV2oNLM4sjK97WnVuWWKDBgoehWrcP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
