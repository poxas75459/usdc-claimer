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
    "WVA2h52E5FHo9qEdmotzufx1Q4azPd8XUTAWxSeUqVohvYh4Tn6YArGCVSFjbdb9WJExKEwFt3foBs4Znk9zZVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "219m8RPA5MWmkRtXbwLzJmP8NMhWgg85sPWQ2N86GwbaXp6LtX9FYUoeRQBXPURTt2U5XLr6RYbvUEVspurZwLkQ",
  "key1": "2BSvjJUAKEvjkz2hcMBE6eEtogP2eQceg472jufRvN1RVaezXz7KL2yyfYTisqHpkQRwZrNdiXeNKUNYKjuaJFz5",
  "key2": "2ik1kjTTysN9Rr4nVmRpZvw3Le1qxCbqsbFXf4jPF3sfrQYPzLTm5SVXEtFz5KrJC4GBTikdzsgJXum8r6NyeLf4",
  "key3": "bV9LvmsEvKZ5B1uEYZNkiJ5uXu18v3qry6RmsH4E7fLDW45eVymeA2PYS2bxpmUf6feALZAA9ncU6gZkqLVgYV4",
  "key4": "34DQT8wida5KVjwJsAsyuRh87Z6E3ouHUCETB28JVUutxsLSK1js1VqVjS3DAhYURAfWwrUu8oinCtnY24RJAbQT",
  "key5": "5kcWrz1ciQfrgZJ6Trj2ouAENwrVPMK4sEUs6idzx3Qz2jgLEV58DKsrrLCaMeqMbNPuJvrCKmQ7yWcGy2unQ7gm",
  "key6": "4g7m1787EjXomYHrMeK9YhxUornGvEifBTmohRLCDTwsqvT22xe7QiExUAf6QFi8Q4xB7vRRhn1vrq53DXRgDbW",
  "key7": "MST32GfHf9T9K4v3t2chvrQKpA9irq8UF9JUM8cWxTeLYE6GX49VYFfmb5NC1VYMQnGKvq1GeDyAhMSF2QnYCjm",
  "key8": "4RinKeKUnpkdZPpefzmW3PmJ2wyRzPvQNKu4nq6Rfqz1Gq4NVwAwSdEVSrnTTcpo2FkeFX7U4hQKCrp3NzkgVLBs",
  "key9": "51Ywua1VaaBqe6DjJKpp1puuASHu74oaCnQNDxgFskwYGee67cn1XC42ghh8f7qq17Bmzw27ZTmv7X15vcbtjCuT",
  "key10": "3hQ9ZtBuj9oZHTjZ8F6JyqYYmGhADjpGSXFqrELn9mXeU84eeTMHNYUN632CpK7byy4GPCemwv1ysMnG6Eoxc6rn",
  "key11": "3F45WzjBUDpUvfjKVvKHYgU1D2jG4ywWZtVMRdWYa1khhbTTp6T3UgLbu8xmYFfPGs4jLvLRx8Xe1ebH9KjMJkAx",
  "key12": "3Xqyez3xmUz3XkimKeoCJ29aFd4DMazYJJGpu4qp9axgDDSBa4CQP5iFjtSaXbvCEnwmQ8HkD2BBg4pp8QfoLauJ",
  "key13": "2hriSuU8fAyNv17DL8mdsuZrD8Jaz7si1d2kEmQAUydJs1Bj3dd3jFhNyqjDtMcmicdh2aXLoWm95dtyWVUMrhtS",
  "key14": "22mbTE4Z15xaWewY9YkJEromxF6d2hUkoC9RkyP67wuyFU723r86kPAzjaaSUkaFMW2qpRrumBWwL6mk9egyUSap",
  "key15": "2DbvofibXB2amDwcXxM8schq5xnQzgLRBxFjFSL72avJBcj1YZsRwAvgNJECY7HKcrJzcWLf5TAt2RQxaQKwBSec",
  "key16": "2jzmptnpbt5wwZyiknzj5izRbSQNBYqeTiU1b31Ni7Z5dWPH6WifLGp36QGZXtYBkKFD1J5KjCt183jaPcmMouWD",
  "key17": "5Uv5oDkqpx6dEx6iXoUNs79jLPJPSs2oWAx2Ezuu8KppdZ2MfUHB2KSLtV3jWjGeyzSPZzfbZLDmxrf9y4w6BNay",
  "key18": "4g2uzKQBDNnghD66rEE5fvSfXdKtRBGmHNN3eFeNhbHjdqCyutTAJP3jCb5DTw3QGFHFvHprenNsx9tBGWXwia6P",
  "key19": "SZnhfJ4pHZ9x9KnW1SykEu2HSLod3DY9r7TExmVgYTWzXZYb5GmWxPxz3TNR35QJaDTFEb8mWfBhmRAjGx4bSff",
  "key20": "5dqLiP6oa7UBxb9XjP2BWENNtcLm7XLTiLnturapXGGPWXVnSTT9SVispc1DcFLXc4VZbE6b4CbEY9BmxgME9qfp",
  "key21": "pZbnT6cS2281B2rp7nZ7Y1i1niKNBSYXADD4NTJhr9Hg8FtqZbdFBHJ9NAMctPTPzaJRepCGQxzy2WSiWWr7TUo",
  "key22": "4oKbKfeHHUdisk2UX1xKcrSyn6NKtwWCnsdCdw2PH1M4KFtYZE5tBqPUuWtdgiCQ2C54oC2wbR39dPwo3AUd4Wka",
  "key23": "2ZkmGoxVSCBWpT4Pg7kbBvf3WgPaSNkScoCnyjj6eTraby2DCohdaievuQyJXv2UTB6ccsxUqeTMyax7tA374uWb",
  "key24": "3HfQGmq69FvQ8e7kYe5t7NVXNni1e2KLcTh3zBpgRydPciufmFGBcNvudZJjUane8aogF89CrY6fPy5ntK9HjQE3",
  "key25": "3thwm2yGK7Txc1vacaC99j9N7Wvqa6QqQdGSVELo4eQ7iJtTSmUp6NTavBSssDs3oy88EWYGwFsUd1cj3S2q14zn",
  "key26": "c2dP2A3q2xnFSh3hrxzvq8xP1dZQahbWZYKGuecxi1KBHMnYuUaLGSdwcz3CuavTCrQkFKSXBkn2b4w6yJExxL7",
  "key27": "2bmAykVM95o48bpttTvayDDXkESEHJUSp8Cvg8uHfdmshPL1msXrazth2HymvTCLViisWneHhtgLxDBrpErBhPoh",
  "key28": "5RRhDgjxufzAMGrmWrJJwNpwjuyAZ4DTtbuNQNCxBQFupeK7w5kA2Ym81fMLWHUBehepB7xQ9WiZgJkq73PbYKTL",
  "key29": "GpJdrLR5fUUVcEu8BEPDQqYXQip9iuuF1gCEwmgkoaT44Tf8BnR2hKKkzwhWQWSzWU2Jm1VjaT7M4DQRdtskjDR",
  "key30": "4hSyFbEvrqYKjqYRiEFcBBCB9rMTG2oeV1jR6GVuPr2kMGL8P8VqQtQykQLBvK4Qj9cMPdHGY1uyCdeAH2KyuEUc",
  "key31": "4rMD5WikT4rHLB8Lgio47q3J6RSodJY5TKuohd5aPNzSGDnHUGJY4qqZ8Zd5wypCKJhYb9h9GM4QgN1VUcZjAoG2",
  "key32": "5uoLob6zHumQbAKdpmKKki5vkgWh1wQPnv7rZZSkSTnAzhSuNqkKNi6FG4C2bm1Vcoq3EVZ8iyRx2BvXvLEpYn2M",
  "key33": "66kTfpme89aTA77i62oYgMaAYdXToxozA6mRnXYbKV5hrWz9QKs6HMih34JXAGaB1oZgPYqHDP5L82Aoz76U9FEd",
  "key34": "U1SvH1qx5uGHpNA3tAqyUsPAbbrmKsn8ZbiXNHHoz5n71ndTJc8xNNvQzewGHAhhjMWK8YcdiBDDhwbazmifVrJ",
  "key35": "4fze54UNLbvZtCZshrRaGyBMJdmAhNbH9H1VqVMiZLgtK3wJoBavzmgyznGYryhkwUg5vCJi452ptqQDgUPYTRcH",
  "key36": "2HjTVEgo3YrBDRNLyE1z5GgQJJATjza3iyyeHWXCSm4AzrdCmCygiCTQih15t7k1Ga8jy1KLAuAqsiDAM7XReCbn",
  "key37": "3GQvVuaF6WJZASUbq7Vu2JdyByR2axbqK2Vy2v3j3umy77BxdHuKn3AqSKzup5KpmcG9yDnXdKtMnJoFn8cYaAtv",
  "key38": "fpSdh7u8CVMm9SnRmHhY79bXSKMatcfwnA9SaHJ8jDQd7rJZ7exp6Q1LxTCLqekVinrqgzKskgF1TGB5CbpAQcA"
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
