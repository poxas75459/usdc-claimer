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
    "4GqnHyuwBeSHNXGsYVyWZLfPqJ1s5Ex1arjHX48GWwMMMH9nyRagksPJwJahxqWd2wAqCLik9y9SVGkjbRhxP7g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2jHuYotBY7eJYBPavPRWbXwuK8KZmePh437K9ZidMjRLHM3smsvnBzxut8uc33vCRf6EvXGz9ddwJ1wFwVKL97",
  "key1": "4WQCSt63YgjRP4XYKBPBrHyT34RZXkUWr48sYciV45giVAV3gsCcdrPu7CaLg1mkXrs8G36aVKJwfHQ1fPcbxNJo",
  "key2": "5Md2n4yd9CbnJHJPUcjtVEZYjxaUu63KNNzQ3eAgdyEk5rjDgJK61EfuGqsd3eZUQ9xhQUkemMkynB9sTbuMt1Y1",
  "key3": "4kL2PgivHTnboWdcYnT8dL3zcDUmd1LqN6b7joVE3jGU3nQjVGgpBKNGjEGSbWn9VEd6EkAwREU5aNg4eSC6ejZi",
  "key4": "4f5YpkeXF4oZAEa2LDNeXBfZEk1Fjs4EyiC8LrQfjNmX2W8N1nULmNJz5wA5tpAWZeKweZ2TC625w4FgZQuCdmXi",
  "key5": "tWsiFqtePHoWN5ZUWxffG1gPWCFAFsBVo7ayjPPzBYWgiKxScBWFGbY7yCaA8Kh8autuxszBAZ1i5RsTgWTs4g6",
  "key6": "5nGpg57hEMi92tiNEyZC9ZugZ3VWEMzS3s4xHbMdigShJoBVmwweUiMA59eZjKsBbyAfwAA34n1GvcBjARv48XNK",
  "key7": "4d1Ug93XtBvfdPFKm1jZ6rfX7gqkZH91FS5Hw4Txf75uXtisuqKi3abdPcusghiD58V6KivDrxnC2f6KrrW6dRKg",
  "key8": "55VsbcgQce2eBKM3D4RBFMkMc8PejUw9XLdds1QZu2yvB5LwRDbKPfakNtBJ6nzjA98Q4nu2nx7Y1Z9ctxCDS1ZH",
  "key9": "Jhj5tPqj4Vk1wHDBcP82Xmw8P99hVfMZNFvfgKRhS98Nh6FAHMv6s56Mb3y26wBU1puCscSC9m45UdUycRtpMve",
  "key10": "49DGB1R2SqXqhFwkvbExpaLnUstXofTD7XNYeDVP5KQqW5HJvHigM1ZyBreK4ZBgFkwpi1dL47quNrAnR2BZowKM",
  "key11": "5wYjUvHff1tGZkDuu89NvEui8j3WSq9q59TDzab8FPVxBbXc1kusymTZu26di9y81mwZC6LR2Q8CPdojAoyUW4yy",
  "key12": "rDGSYZsuPGzwA1EXpdynryfQrKNuRq5XzoJ1hfc3ZsAbZzovNAf5fbwbsnNnMiqYNerbmbex4MZ6LVm5Un927kK",
  "key13": "3cUXdLaHraT5GesmndQM7JrARf8dRmR4A33kuNJx1LZcFhG4xsq1NexRUoMxeiAgL9H3Ys4qQM2n7PZve7zoQhZQ",
  "key14": "3vGzYJiSeW8DWPkaMo951wxhpfX1TPXgbz9JTChhNKBwDzhyWf8B6pQtx2t8EGiasrnpkBZZQiBtTEhjZneJnhXE",
  "key15": "3wpGEHumZsJK89EvhXqD3EpxNiNrMsoTuaxyo4Y8DNiFyksF7t2jn6k2UXh93HYsbpuZXv3eUMnJfknHbxMtJgBz",
  "key16": "62V5XQ9Jpi98EvVQMoqVy9xt5Dupvx1jPaA6G4WA3c4sHzfj5SppABiMw6eefVcuGnBn9V9rFNi7wAGAu3nBDvx1",
  "key17": "2PYMBqFQymVicxdqSdW64LPEAKTsrrm9dHBmR679jXxNKVwT2cFkoHtcmXy9Zp5EguabiJCZsKJVc56xb5Y7iqVD",
  "key18": "4JA8ocMy1yACaW1LgwrYYowq79eSU6dTw5Vk6P2WGaZzJAAQapZPHQhdkTAFhQ4VYXtQf3u5w7SdD7WTZ9dUS4rr",
  "key19": "JJSreSMrfiMi6kbDMoxrtW6Nd1nZ1FUc4DdzJqQWTjSUZ2dQPBPViBJoAvwp9ctQt9UZqH2h6wGeLPpr53GyJKy",
  "key20": "4xds2QLoLWR14FPVDMnLJU5k1r18toAnoFFBZC2cJSXk2UrhsDovZzh6Rd5mBMRqF19GMHANomQ5EADEKksvH1rq",
  "key21": "4nd5jq5bjo9wMKcyVWmHNFJpaQ8BszNqgmEPG9NGcNRSb8jzuT8Cf5jQKWBnCVEXfjCPZggqaP3691cucSzYuS8W",
  "key22": "62sFVSELor9orPPxEgQ2rEsr9MRdLnNFXEZ516SvTHpUHAR1WLEmQC6ho5bUYtjhXDXyFEyY5CymBB4WchzQ1kQi",
  "key23": "qmLMs4YHzPsaKV4FQNf4MDWhxmKXEBRSYPzZViTsdcRbpDaqpoLG7Dk8kWasAjjbk5RB9cHFtsioEfHN5GuDuQF",
  "key24": "5jUHxUwMKygdw6f7496irRQkUjwYHwJ7ahH5MUdhERMQncb8aTDMHjcc9gJScwdLS69YpQmeqQhWYQGbZpzchJsH",
  "key25": "2oHKtoqUPJrySG9pSTXuKuykQiZ4N5QrFrvW3dkwnvqSTV66Uh2MycaUXncEfYnhyDR7tSRbTcMjyfQEm1tA7sSa",
  "key26": "5PMr54nxzTXhVT7HpfdZ4PdLH3rrqT7StKb7J4DpqGVzUSknHdEXAdHGpSwcpxRP984xBXmDrpaC7AKZjvSABxxp",
  "key27": "4yeYsZrJbW7CHKrTC7iSBzZUXPdCJyRPk8u427xvujW48UENUyXXY528y4E3VuEPdyCj88YkmhQDnVqMyyAwCJdZ",
  "key28": "5ct9B4t4t3NSZH2uob5t89xc3DvXnMRPt9oDuitqA2Ffd9XsxvBbZuA3nNbYUQCsQ8B8vR4LQtcffJKpWZBYSFZU",
  "key29": "4Skjiz3LZ9skcqkNpaqa5GWrULHJGukNJphnfMjvV4BFRiatihGDHyo8x7XvhDa483R6AQCKTDL73VFbK1kTzA4G",
  "key30": "4QtLWN4kjEhRzQnij9udcgeEKX3nTT4sUzRTf71noA9BPRC8nAjEZF2qHtZ8q1bhHHp3Eirreisz3oi3jDipeJ8z",
  "key31": "45W5LZB5xJ4anJARtWkHn4Nv226enujsoXm6HjhjThUec14sRxrxm6tR4URm4jRZgkYGhttyeXQKzrwRtRjvpa5A",
  "key32": "hR7fuo2w3CFiEtUmeLJSHUuuSqK7p1bYvArxzB7NkVDQJ5jdYrjWJ8TsJwWxDdB7m5LoWvbXCP1uDXk2gykzo3Q",
  "key33": "2RprRWSztGvZ5QzyBxoMYUHK6C2sP1cctnyXUM8avvV5Ngb1iSQhYyfVG7faDQntJgByPsYEWCmhfXZDE1SmWYoR",
  "key34": "5HewpGWwNTp33TZ4nQaXejo3fnsVYjCQJgP5UGNSuimoi9hevFrqMpwFUREQ6wfHKjY2tNmZtDo8RcXAhJNx5Aq",
  "key35": "kyXimLTQPtBspU8jZtvYMTgwUSzh5DyULd1bFqDFgjPzuczbmrziF2oBfAsJABJkJP7mTVZ7UkbKU9jNbNj83Bp",
  "key36": "3yys9VSRLZA2ZDCjp716wuikeuH4kZ9yRmpWxiD6jGnzo1vt23AUc8vn6i6tUA32GfmLpaCfa67zVgA7PRcoL2Kj",
  "key37": "4nm3YqvPSb6GuHx8Jmq3NLCP2i9kWATC2ucLdvkwSLFYvReshRzBmCh2PqV4uv1myNqcvUAoPer4GjoCDJz2TtCD",
  "key38": "2dmymS4i1mP4JWRH8UvPVgpzobnRkuYjGp8HjNwzJo8Bp1vHA4BnsMPLi8GHNGVC82UKdJSLuku1HN4SVzPhwbYS",
  "key39": "hz96gPihYacy5W8WjK36zj2B5cejobJ1CvNhf3T8wJVn3qACCzWHnLjJp8U9Do76Nq4UskBpxETE7Mp2ZQNTFyu",
  "key40": "Ba76TWSqKS6iDbHTd9awMCoYUQjv34wa9LcQyWs8ZYUijjMEAscPA9C83FsRWAj7hgw3MttP2BrkB4soMfC27qw",
  "key41": "a38gkRB9CY9QCexVco3bm8p3XAaA11WYKb8kvbHoAn1WWoyxFvrpxfGq6Bz7ytDQMjcwn41sb4gjDZVLKSZvThp",
  "key42": "5sY1dZGY5rHHxNaZzsmRAQu78Mg8RBLScoT2pqKkEg4BKMFNcEJQaU2xBrnmpXJPJQrxDgMinS5XJZAPYdbuT23c",
  "key43": "5TNrCs2kJUBKgeEFVfNLFf3QstKUvaQ5EjBLyNH5exkXeSTNGnYT4BZWirikghGYZ2tyfDYiMWBF7jzPiL86RMto",
  "key44": "G6f9wjRBNZ9VgX49MA64prKEsnCiEvS3WMEgUZQuPGnJLGvTABcdv9btx7aR3WgQiqT6Xqo23YPRXT7dPxuivJp",
  "key45": "2gKhwdpY8b7MJDLNF6Df3ZwU8jFRzvLSnNGXbcvvcvdUxZuqQRL3UwUj1JBK1g9Rg1CCn8usGDcUEL9ikSjLxfH1",
  "key46": "4vY1qjYDzTyDyRJiuXT1nefsTUqacCK2FvEGKia2XPkqgWv5n1q2ckon3gFjUPWaP5JN7kHbcMpL6soDjhXm4D2x",
  "key47": "2w9TrXwFo6qcPR3V1ie5bRiSzsZDkGDvWEfoDv366ZJzab111R8CFzvCeE4QLmLKoYaXs6CMxfKNCRbhR9CegfmV",
  "key48": "2AmCV6JD6PrxqiWa98NS2meS72jgaRzW8DrkBsMYU3BzkBNiHMCM9BUob3muwJW7bAinKQMABSU7A2GeRgUw4jiw",
  "key49": "4BH4cbjwXhMYtfBQGed5SjVvyLc3Za4bNtCeLvgCeGjwsoYYRceKz4KUZAMKyb1ZDt1DLvinv6Sxv33nDPuyRq97"
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
