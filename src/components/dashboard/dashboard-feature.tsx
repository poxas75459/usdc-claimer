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
    "5PP8qvkmeyg7tsVjuw1vrVdenaS6AMnTXGhqbddpnQGGTpyMEzysJ1ueshsa9FCwWrFubfLGiLLiX64B59kBqupG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Dvpr7dqWbWG8Zqqq5aP1mo2WPDz7GWdbhZE8Xi4snw2jJoeBJmCmtD1kx4VdWM48uXZW8HKuHhyYu3zEZjqUVL",
  "key1": "5oGit1UHpXMphGSZbDaeDcgDVTpZrwqap448NNcwww71mSMqAnuv38XVGphiptzTvn6RtrJWuBuwWmSNgXScggnm",
  "key2": "56qdJDhNwmWDmVDVVbPUweNhaWQWRo99PgMGuGFyEWT4rkF7CeZdPdr6kbvgzhx8asfh9VcFfAcpUsCvajpcEJge",
  "key3": "32uQrAkZYTJ4SegFKpeVHafnJRREJTLFUhLQfoDsUJV6FfXjdiDhB8aEKnrAXABUkjW8ksQu99HizH2MCp9UndMJ",
  "key4": "5WTL3VsBpihdJFpJ66wqkwgGPUQGR2W7HrjGHfsGgerKhR6yB7K6riLFbbbMWQ5wPZ7kAFzjruGavszDEmjkwqeh",
  "key5": "5u6RS7ZUF8QpVpeGMXpvuaCjPxaNXHsREGJSZEV344Q4jV1inEA5m8Ne4woeToB3RiX6eNJPQo7MiFYUXXuEbhJB",
  "key6": "5KxYcSFMABv76H3cSrimV8XjtYfhAfA63hjYJtMoiKcFAWTF1mHz2Ga9hnBXwsZidvFwyCBP4YduyYK5rnPERaWH",
  "key7": "4Qc9TX1aHT6jkSJHcN1bWHgrRrKaQSVSyY3JSYnR9FQ8bHk9qBZAqtR5TyD1T7bistrRNFibdhQKxXt1JRN6LXeV",
  "key8": "5VUTdSPemnfoSHGE9nVvj4AsH9596dkVvniccrUakXm1RZ2iF7c2HhznrgagiTr83Rb44kSY1xXBQCP9fNLwfCjC",
  "key9": "4zWgZtwYnsw5WnMhDU6WNCyDN4fNZa1WGPB2orDBDmyL8Zvz7Wbvk3HC57CQD6WvWxTdQcttkAse6ifcLMTqygXh",
  "key10": "5pZ1jXXZhbGbVtcEKfhCmfG9fJ2pLbmHVAy6xHK6y2svoeHcy6AA8jmMJvMgGdzguCQvaF2YCKMPYcfJLx6MzPcY",
  "key11": "DbWXzANj9tfFfbcbmBGf2sZwEe3WodVwX257uAttQdKehx594fDyMoDwfxpNPt2r3D5xjt4DsFAoed1Q9w5Ko24",
  "key12": "5AQG4iTdzJM8vyX2UVvL2GtR14Wgxbf2W7YAF3FcuCu1TKKddEmWDvcTNzR1bXVu2RXCXEpahYJgMXoXfU3EpQWe",
  "key13": "3yxptuTL8R4u5NfNMVb7e97XGu3aQkviTidzisLxvNvgXsJxqAT2W5MHsp1Xqwht1HQtzoNRKDs2JNjweG8khZg",
  "key14": "4xBFyHdda1p3828bTfncBAhwWCBG7gEHWPE7N3n3f9LyEgwbcSkukXpeYAxwhtnhLzAUSd47efyYw3hKxtfJsGQs",
  "key15": "31FUEdBm38a1wFzknzEjLDjVhcoX4N8SVfqruHGDGgqkXVRDmQDfUV5FcgtAaxsv9DnGAjRhcfckgicwM5AjhzAy",
  "key16": "4N455GB1M4DiBxgz6AvUs7KZjbKQ6u2SeAvD8roUBrjdeRJA38RdcXVUwPWHHcStza1BA81Ux4XJJWk5Su6hTDgn",
  "key17": "3rzRESHdhDcthH5YXabdgpdXw8F3umrJc4czi5fdpaqxuMjP4m2Qx5U2GiXXyicQj9EWdjFTUCeKf8qVHRggbWNi",
  "key18": "3Uic67KYijxM78VavAzrU99Rru2AxJkAhrH7JouiLva5Rf3DRjJ9ECzFD83ZejPZv53KXxioob8Bs9ki1sqZ642M",
  "key19": "5cArtkUPG5dTGSWTdJxUJf5aofp9h8SQams8Ni5w5G5XLoEfVFEXadm42oyF8jR7ASr6GjwozdHs4SdBX7rFkFyD",
  "key20": "2gX7G2SYXsVxjeWnYWwdmTnk9N6oScFGWtLyWmWq8ZcZL5FyaVBsGz3pnxS1Ydy7PVizLFtXy8BTroo5chfNCVWD",
  "key21": "3V9xZ4U68FrvJKRnHLhxyCsyK5Gf5RqY7icnwnQwvBQnZ2sJLaVoBsFpaWC1mxxkLR89nhv78VgBabxYgofHhR44",
  "key22": "3E9tWANEeswd2F439gSrpzd6U2TEcPBNtdBpRYdCKX46tVjjhRK9Pc9BLq1vqF6UrD5eqWC6XCdgtLEDgXN89gCJ",
  "key23": "4LwfYGgtiFgmQNg62EMX7vtScp5G9u6Df5NfYk95e46qLHwVNR8yd7Qf52MuUtAPU43Sg1qfQF8vgMBwkndh3Q8v",
  "key24": "59QFarMDBYMLe3GwKe1Jq4qBetj48fBLASB6gen5LLyBdY4HkNC3aLck7Lpyx15F2gVS4Z3kxrZoPsNixNNzViAS",
  "key25": "3GGoNyDnpMif3E799SbVvx3eQRYSQQ5oBobvXATXJFHHqC2NTns1kdYwSqdYxWeWBoKCBRPwi2CoCv4bQZ5YvRLT",
  "key26": "4zjZst7tqSCMqCSBa8NdNyHCJQnV7wwGW4EsYSHDNkSPbBsGb1Wuerm3j9zNSiF8C6uNHLftVgJgZWdXtvgGQxk7",
  "key27": "524pq9LiSUyndAnfNckPjg5GpD1yRG1MX7bFnC24W9dM2EXYpqg8LiGN3HXKhdH2XSC1bmhdvhSFuA3nLAsDAhiX",
  "key28": "AT3VP79D9AByzo8s7RLJn8vy6q4UYED5wRxSmkVvw9snrnN9EJBPFnTZNpgYnysRxn84YqtEuUTPqadAJhNgGoA",
  "key29": "23uTctYMHmLXf9BWxjNy8BYiWPYzNXUGNpu5stMTW2TiT7GXsRXRL94QBAGcKUfpczE3Y4zKLypsm9FAzyFekSvR",
  "key30": "3iyydSbhcrfwnKncuz7r9cPdvmmdmPxCzBf5qrUdHuqFH1aVSTdpJJcR3bRRm858HKEvALFuVUD3J88YUC3k6rNF",
  "key31": "3kHT3g9z5xBGuojB5iJVAXwXpV2cQdxS8qMVAyK917HSPmmZTg4gc89uJN3wYZhYjaw8XW1yEEgKu9KWuYpP6NhP",
  "key32": "3uwf6Jpg2ANGmS8EiJRj4kwLvBdarUFQC8HXSmxXEbJLwuMDEtFVvWzmp3jCHcQUr9qkJYXTsSsBJukLd6WqbUpx",
  "key33": "2bYDaApg5zNhuXmBdVSn4R76c5SmJoFYDWYQe8DVG7UbaLQuyQuiXzHYqjzCSkamRYgySqh8hZJNpsbSACBF4U8",
  "key34": "4b2PBenREDga8Lj9vpJ8X7SCnJX6Ss1cFhr3ZUKmEs5WSXay6gCCxpBfCLxK5TL9M9tc8XFHBgbD1WtJLb4Uckzi",
  "key35": "3cyLba6iu1T5TCXj5nS6FjcCkBhDg7QirpsEqQkKy459qTTo2iqVcbG1naZKwR1tbpJqhRvhfSMAnY8zHeQSExPH",
  "key36": "bCkts6ZNzTs2SPLW4hN9BQaVhxjQUv4L2DxmYXbUAGA4K67y1cEQ5UktXb4rCdvSGPoMUSa2gq7mBhC9R47Ht81",
  "key37": "5cqmHddicNaZunEnSKB456pYUbEXsVHvLWziNRDDngeRUUM2bRgNtRNAiyndKVPbJvzWDheuGMAnou2nBbanmxU6",
  "key38": "2sAjtB83r5XoWnCzhCFrEFa28tYnpyph7afmRaepo1BEtYhjjcrWjZXDBN358u22GRNiKxKXcVfXR7CMMpkdRfBE",
  "key39": "2Z3uXHtqyekf3Mgk95tpksedv6s1zfBwdbTyLv5d8PbM5g6KUUr1CkGRfqC9epwXYTfRPHjPdrc22WkGN5mBhkDj",
  "key40": "4hUtgB8R5gTTLJ4U4X6L9zj6GZurZ2tjyQWDN1isCRP6x5t6aUrFhRNQmuEpkCv7Kgmrg4RzxKuxbd57KzX8wXsV",
  "key41": "dzbzzzvWgd5Y9ri6W4hKctVTpykDzf6ojMVoEErHhVxs2RGfkpqzczTPHJzgCkGpEHeTdSuviwfpbmJ8DD9HFwS",
  "key42": "4th67oz1mJPffV8rv5zhtpZDxLA6z85B9sCGXcE6WJ6GoEF6Yw1paHpcEvX5oxrPvM13ifSqea8ntL2aaCs8ESAU"
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
