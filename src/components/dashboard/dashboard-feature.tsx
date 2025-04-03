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
    "3BVVTmyZrgDchrfe9HNjRBfH5WJ2yhRDKYqspjRZj64n3iZvLbq6nvHfNYtd1NERhTA9dDFcx9P3cnebFrCp2asf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngV3gjMmPPCP7ZM25u6dunRJ7Acsb6RsNj1HKvPXTcFFeNokGEQ52Do4LcDopFRi5ih9vdiK1xMSPbpkanejT3w",
  "key1": "5rRLhyZZSarZqWtcWnuoTpE8jgb2RLpjR7BM8LsLPN4LdAGa17Uk5bRCuUr1bJNu7XRwZPzC8zugQuy9ZsFdbctV",
  "key2": "5bFeuMTsxGaaPwsh2NXdruBuxyBR7qZfYDwraCKeXVASdw8DJ7cvqBWvfd7dVr5gQSWuYpq9wQRUhUjBkVZK182X",
  "key3": "hPcJaYyU5tq9ezmPdndUYj3esmH9JuoqidB3BFazspVgPmJHPFjsnzayFWmL2WYRVZZNiHzPN4axfE8pUbCT8Rw",
  "key4": "2PNSNWxoN7z1zLadLaUazJYbz9Bm9DWXt8k5Eg6sQD4QyZEJKPTxWQY8VwEsrKPfqKowZAmC6jSLjFt7e8qhnGeb",
  "key5": "oQAP9ARE6fWkpLy2ZkQeteytKnoBmHD1JUyeUmyFQXhimxupgwBv3JcL895e6Teyo8bSKi9Jw9FfjFjRZdgyNNt",
  "key6": "5BLhBEUYSw3Hu6dfadS52L68jUVCFyK9GTEy7JqQCGmMC82KAsW9tirucjUiKiqwDz4oqddb63hYf1BVPzvVobw9",
  "key7": "29gf3KcGGMWhYbR5pir1EKvXy6LDZRApo1wxA42dJtcJ6nnco7sBprjH52whMYv5G4rK4fFdg3vejY81r9eoZcPF",
  "key8": "4jocWUEqWDQ2q9DTFV2pTZnmYXKchKYz4X5wB9rW4S8PvpvXLQrdcyG61qHBYBFgB6RnRojDsswkoUuSUBXfxqxT",
  "key9": "3UwbANxXtjk1L5eA7ZM7fDa9YV16KB99SFTEqdvwVGZv16donSNgVhyyoUVGzb4qiXvkR42ErckUj86YZYELJ81V",
  "key10": "5ZiS3rHwaBt9ZwFpG4rggAmWVoKYYaBHfr3oWfAjqi5wHxX1GMfC99LVNuJxBxpCgMrwgHnwKt3NLo92oyDfvzAf",
  "key11": "5FNKtHFm4w7XXvsyPmisFkSrVRsewD4MwNAHXm8y1rH77dcs1YFHR21MVC1wt3hP142WqVXQUSiY8ZMoLmUtMNYM",
  "key12": "4m8UeCGhUyPg4yLDHenb5kaFCKbKyqNmxTPSMEyHQTXS2ztCyKeStjXhZRyM582zTwgCSTHY2Pu1yQktPT9eUTiN",
  "key13": "5FWtZoBjzYuia7kFf6bVm7yW2ywzc8LRjXLVtoLzhn6YFioFvjTsVcaxLnH5zmhm7BBv5Fwn6pbEt5AZcsunjoa7",
  "key14": "32HU3pTUXeMw6hNxvzjcyjwvJiq5QHkYK7T2s81fosuZ1ty6c8cWvJr5moQWXiTKwKNJnGLizcGmt9ysu4px4hpN",
  "key15": "24UHqDf7xuQdp89MqEF97EKD8j5q2ci7FBNDaTRXkh7eX8bfPj747Ku6Y43VZZ2EmpKGks8tsWwfDXd8oa9biv7U",
  "key16": "5UDUpf7NHTZefXMJsp6a7xzW4vWSgpXHKgyiRWi9HToUpjfyodc19MUwZ2LEVkRTY91aEy87NgcaZU3rmfANmqxs",
  "key17": "2wfkVTTtg1E2vNGtH5EotCEdeh7pbReqAq7ZNk6UiBTT7uhPsVtYeaX3E39itZYpA4X4p4GKKhd1f36AyKanQDTs",
  "key18": "KkFp2EuUqeQJJVw2p5rVTDwuEZjcXnxsupTzQvHwxU7E82JN21JiGegbBYMDCQYsBjP8FmT1mvBodKYJocrpSmd",
  "key19": "xDYR9A47yJDyoQonqRLEamsGirhtcoX7sRgYs5uvZHSe8X51QxqK6ydmSSskVZp6wBcSbrK4Zrq8coHDZQsmx5w",
  "key20": "61ZgJqhb6cewqof6VMxdpZqWdiVVB75QqyfpABz1vN2HkEsx2MymnEeeoygSXKRySdMtXQxFpPtg7JqA7FJHsf87",
  "key21": "3ubJRn4mZ4EeZ7FX6uHkSwgVWGqhk28wo3iCrxtdhfzWPb87hVDUaZGEErYrfMz1Jqd3UsofGBkB589U5Swd7363",
  "key22": "3dYBnsMFNFhDP7zsLwyvdRyJRQ8KfrZ6PCuWS2WhaMizXHWxNmv2tkiZ5SRArmQrZvSJDjY8r97bupF5n9Kw2Fsv",
  "key23": "6uRR1xmsCxZLCNduGUdHzzVpL1XYaey3VZVfMLgGgJXm19o7xtLhK7TXND3F7eWUQy7nhM7QqsvYTonpJLiUJ2q",
  "key24": "3h3WFKoxjmVQAWftz4JUJwq71WY2skBxX8SaD8eHLzSSrKE9UW9mn8wGJJ6LkBqtfDEidjVVrjecKxmWvLDAuFWT",
  "key25": "5DhdpmdAhC7jankTeD1bCMbzckM5fydjpypbm49bx84Zttuic2ztQ83ihUoKuMppQ96hcdWXXcieSAyA9YyHuDfT",
  "key26": "5BHnXSnMhp1rDNoPKJpcwDSvPvfL4dj7akXwcSCebs2SAGExLCRRG3AAMDgdhjvP1SDi7FNM1JUboGVexeZEhdsE",
  "key27": "4V2gpjmLL8fRrbMEQjj8AT4jHpJFzj27uGpAoKiZjw5cvh62XPpB1Y5jqXFTDuDoEFPpkTTH8nZyeGrS8nBEFgUv",
  "key28": "3TZ4MabJaaiXKE5d5wn19W11v2PxEbyQVAXRohvFgXepupxqSLLs9DSwtTnSfKCRyCnTmjudbgv7kwzDSsCcRtLu",
  "key29": "uWp4znUXxkp84Jby1R47DsLtD3bmfkqzz9SVnrbC3YNLdhAoRfvviqCT3zuFgzS4R5MWBmcjcciY1SJb2G1CFCx",
  "key30": "3wGQ811MvXaP65YJz3b2Kdb5QrNWCs9mt7qeQJxs2vhynLXogkdRcN6kfXtMTddWzMwWod5EcFVrpgg2bXgbSoH5",
  "key31": "3cx38domUX57kBakNkiwMTwLib5FtELdSitrkVzgyoLFSLYGX9CpnhN3AcEmsUcv4KqJffY5KwyGPCz1TSipCeBU",
  "key32": "123hnj13jzaSEFLgzorfciKGnxg27WdXnVNVKjPFcesCry6EuBaGJrJnqkyhrvwVsXkgYcikHWPzrWxiVoRqH9Xp",
  "key33": "2LquqQ2DtAKihsag1Q6FQN5h9cweMPzvP8RLcUGZPH6uFQsfVsS93qrJ7x3UH5buWdA7ikpmK6rB4fqjA7c5VVo9",
  "key34": "2Wh9KcAh8cqiGgdVpfNpvNMuqsRjF9rUkpBkBnEdcuHFio1zk4B4L9MqAkQnbejJpRQ6wnnZ4wfDFznJqgzYzSab",
  "key35": "2YHRJZ9wkf8wvSzdNn7B3wfULPeMSZacz5Lv3EDp7YxKVKPN2B4QdLq9Fkc9Mk255tv3pY16AjRivsEmk14rWTEW",
  "key36": "229P17ZcGjjZ2qyD18JYNPqLpe3MdBc8XBV6t5zupabZsyFCjV5kUdtg5jZPiGw7MsgEXENS2aiJhURFfc9zQx87",
  "key37": "37WQGpeU7vexAhgiF97fHwXafNnFYeptbxcCufHz9HfKD3bcAmSWXcmhuvw9ZMCfJibr2DhmsJ8NugdBLEkwGwND",
  "key38": "5qG4JHMRY5wYUv7VnYJCJ1RdraU2r4QyHHd27VsaYyXpU5VPgb9YUitWFGBma3gqaNZZiCmAdveqMWvAwrdMe98g",
  "key39": "4sUC5H5LkUPtebN5H8bdz1gRtJtpcNP5GZ7hvWDwkx2d7vgFJ6fLZ2oiMkrHgCheyGn4j9BKjQsMXAQ6hTKc6MCz",
  "key40": "3XwqT9Cro2972ysEWBoKJZGaW1nfidTBYEPg6Gp8VtoqpF5XdKar7T8GFTRCHPGZkiWg4rEtvx87aota5hCrVyQM",
  "key41": "eMATRJhaWAh2aZwk4sJNgkqQL5rA1v54cZ36EBxt11rhCCVadwSQvZiboRqKSCcbZwFA6KnqcBjb3qWqni9X3Bv",
  "key42": "55J6Z4fTnWEnua3mx67PbxfMgARHUmdEvuGUpiVTP6Myobd1EVFvNrWuFe3uerEixzkqFPXFfKGTQCa3dGqbJcq2",
  "key43": "2eNCHoLest9TXEk8U7nZeQgcpJZMqQVvVJQ5rkonTZHRoPwayVUbbAoHhJGLPLFjdNCyDjN1Tny7a4whx2ijthZB",
  "key44": "5Ho641TWdEHCtnkj3vLNjfNu4Juex7nM9nbtKsQ2anTepxLUrMJwzF8gpA7PSKAxfvwUEkPyinteBVtVYuT7xgLb",
  "key45": "5mtAPm79kNRT9FwsNyWUhqcwXEERGtSY7S9RN4uAEoKTvHKuCaFV6NN2KPBKJDsN1357hDQbFigKbjaNPSPmZc56"
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
