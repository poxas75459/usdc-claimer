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
    "3uQ9xQ6DepJvpELJWvujwc9vaP58p27FFHyxsGp73AD9mr9TQY7qdexFVD7VEeywa9mpPCCEhK3VVQzEcjaqDQmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d3LRYSH5ReTKaL4fLEn52iLXKijFpahj3ejkZUofNUjUVRBC8MUUSbobKtGjVVsBmBkz3DbSaRVchSXUiUSXekB",
  "key1": "2obnGaRLsRRj2MDB6L9CK2PGtHMqviAYFhZPixRnwBUMKRERedf9iahHA3yMBrPzskNWrRs5b8XDL8p1xhXPGsVt",
  "key2": "3ta3ZgjYLqCKBddy1UNTK2s3P3wwMx525PzYJ4uSrShNvzU8tPfGhkznXrEUx1bCiEpBzG15vgxSvdYf6MaqAfFM",
  "key3": "5C7BnKX1XL4aSukQ4qyKJ1wi9Ns6nQC2vPhTDide9btcpwbMzyUr6QDTvLoaiUzxaFuaaVjA7mdenctiVRCdmp9U",
  "key4": "5dAHvS4BNkaMH9KWwSF5CnDF6hhf2UiuFLSXnr1RJgwdUCJGJaqt4ncRZKdVwJ4qQCwGy7H4utVg3DVwiopu3nZ4",
  "key5": "2wc1gUH1PG8LWj7PjiPbbQzJTc7FfD7K4PnkfKdMokTh3u1KQLFvFfsZq6qBpRUETR7HBCW8rqusxbcJp7KmW5K",
  "key6": "4N2Ugr6cj1ykn4k4TiokYo38FE7ETZK1NNi4vfH43FCkmgRtmmTeBgqB7bPZ3eybKzfaC95TxyFGuzsJws3JNjhv",
  "key7": "oy8Gj7t3H5wi7iC86HWXattt9As3hQshnjurr2XBpQVFJHBJcN6XsVAJNnmf81dA2Ssxtqrow5kScdpix5roHUA",
  "key8": "5XV7bcS6bRKrE3VHr1VZc2y3wCir39PKjvDnJuZu9wCmQRcygVjosub97pPUfWALkaxttvq36XY1yYpz6tv4MXCa",
  "key9": "4tXVtFW2rUiSJ8GLbYpTeKYGVo1AY9nxXSQJdrNgwJhS7Y4sSxus4mkUnLrbztfwNc928dQHTog5jJ3Sxy16hUxE",
  "key10": "38VJou36n88JuPAFAptoxQvmEwMsCWvH9DSCJ3JGKHmD112VPg4TS7iAdLg853AuyN7DqT5fUCixCrEmCZmH5cbz",
  "key11": "5AWHSSbdTMM1t55JsXX6Qsq2xxbr4qLmrAipEKk2EFLHQBhYLwb9rESYghWo7fZfh234ci2zLFcstUdxd2vSFrFY",
  "key12": "4A2WPeUCvhzu3YVinC93695DC78VTa2NEwQpDp7Ux3Vp1iHEJ4svmrsZt2bkiGRkYJLW4qRHn7YiQJXgnvfD7CZ6",
  "key13": "4zf3dSc4QtsEkz5SHCAPWB7gJmPraoxTivB7ZV74MK4SbXXGDv8o8ukXxTVm6UVNEmeRh3qM8jHW9APeo6dhJcnh",
  "key14": "3VfHtRFCfgdmv26gHijxarW7nDaQh1x4VMgxiwXohM26s3TjgyHmu49kuQAkkjdVuwkZYHKcegr86dgQdfzGyb7W",
  "key15": "3LtmBrriBgoqw6Whfa66PfYNzzCasq9zfHCx1FEvqvci8iT9xkqZatMergzkn82f7cxsxSnDEJ5jF4BiwJugcAZg",
  "key16": "cwoTLW4sFHLfjBW8Vkn1xyj8MHoaDn5K3ktZvi8ZR1yqJzqPscyzTeZZNTPqQwJMpTCRvC7qcCMthxsPWTEPdxm",
  "key17": "ntsEguPCfoxoSchJpzzfimN3uotBeUthJY2FQFaT4VQ3rRWkK6XKJH66iRdmXEmdbcwjnh8hCvQxjfzb2wu2Fj8",
  "key18": "4cWZarkGmj26MqdTSiaqd9CnbSoEFixu8SqSPc1m7mAsh8UQ5YsM8wxf495Q9AJrThVkbUAGUT47Cs8jeZZYgnRz",
  "key19": "2BKY81AESDjE1cMysG368FajtcSYL7zYhcWBpWs2E1zbTEKnTy6dbXZioB7Yx27DdF3k9or1XLa7vARooJsnw4Vb",
  "key20": "2cs88K5PaeVSwUUmRJwrkGfAN4xjbh9ZQYq19DGP1JM88FwUkxqKCqTh5Rtu222mEKrBDasG5G1VexTZbEYdYzK1",
  "key21": "3Z1RgkPJprEtZyyeWaTjJMPyn9WjFRtyRU8uMTHzMt9pEuF6enDjveKzBdGULDL2gYFBTUDxZCjiV8KVG1Pbyqk1",
  "key22": "cM4YhDawDfZGGK9kHcVA44UYCz7u8Mn5yhrP5T9rs7yQbTzShGNMDJkDu4ATqEs5RqxVom8Np5EaVVB9U7zwhY3",
  "key23": "5v6EXnTmkTVgewK1Spx4gckoMPn9NmxoWcymNNGFvfNmD13Ee7S4G8kGRFLryZhLvzUi2bg6NVuz9haXfMRpgEhS",
  "key24": "4YNEKK9XcFdhRGS9ERECMuTFAqBpe3tnRRQEP4rvbAJ3HQmk4GmFbLwH4C7FtXfxV7zceTzwMAKwt4QBZFGt22hC",
  "key25": "5DaJkCwK5dvhWr3JPbh2ZzddmM6t4aFudkFZf99zTCd3xxGiXf8U2KdE2fFS4U7FUVSrv4RD89ZRzwmYJknSkbP8",
  "key26": "5NM5Dg2A1pyYzs6oz4Lhj4P1DxgXBasH985GPU6q6YcStr4SoUNdyojBqyTEMQkStfpUwTQ1BMpoDfq5h16Wwq1v",
  "key27": "49SHwtZrRjjhWmc4oxnhasaggref6sfMERLE1dWrNJFLzyxDivUzLY5y6qA5kiNddTzgjzAiL4ZdFFfjYXUT1YGP",
  "key28": "4e47izq1zEhQUqWqcPk5mfDNPuNrtvwTw8tdo43aD4kg4nZEBzfRVFoPcxpxv1uaGrfdmdYNfGhLE8BMhANDy1BV",
  "key29": "4GVtGRzZ8v2z5BoBdAYZhk4ZvULPorNDoxRLCvnWFLQ7ec2v3TwiNqzXek3qezLaZVw2bbwxCpc1ama7Qgt7hoRE",
  "key30": "5jddaMaCQZvut3wMuYFHisPXZ275XvH71wJw9guj3gk8PmJEYiHRdB9PqVJrUrv1UpQ26xNWGYy2DWEeD7Gh7PAg",
  "key31": "5YdCCi8YK2aLST6Px3ZVVEWFE6GEgYa5kUX9V1Q9d5QEQwT44hjHWTkBoEUm6oYoCqitbfDfkYAjERXHy3GNXbXp",
  "key32": "raBxVVpbSyZuGRBquFRicKmaWADDSmYqB1jv356GDatoien7i7msGVSQMYiFvjMz54tY1KY9DXuWqCerPGBkiMw",
  "key33": "4cPBq1RU6QPiJzQDZaa1VbuFQRZaxsDRtsewpCUwVvSk8KdwpsjozfevPbLDePzPkE7n7cX1voxn87Df6ZzLkJMD",
  "key34": "4DFpDRHMdLed2763eQHu41P4vnnSWwpUqwyj5zFbUFrWGMFrFttF534xGh8EXC8eTQkS4XZyHHDs1yHLkqb9vv8b",
  "key35": "4SNH5PBHvDzudFh9FdarERaF3cW9hujJL3Kergmr9EBvmpm8fJFaMHT21em5nJuC9XGny49kD84R8Xz17tDyqAg2",
  "key36": "4TGErjrGfUC367QNtYJeZ3PH4cwLcY1f2UX8HKqCsTM4abohHGRdsHLEm1imMU7Pg9kUDAjubc63729fG4JyT9pr",
  "key37": "5X1pjHC7DMq4i8GyxPJEDj6YVMoNqnQJ4amiEk5suiryQxJeFot8MEZKQobxLnKGSGgKEBYvzRXoBXzRkKuFQ4M4",
  "key38": "3cqvBQWsUvPR7uwpuJ243vzrea92PwTXfxESktRTXYSnC29BxGk5evBQyCiGbnMvb4ZGCx5KDdtQKxHLCxHYBchc",
  "key39": "66dtFyWAMsuZYnpD5zwEmWkVoxVJaxqn2jjGp2F2huAz9a6RmtvZekXSfDS47sGmTVwY3JftDki7EhqCbCqtk9ZQ"
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
