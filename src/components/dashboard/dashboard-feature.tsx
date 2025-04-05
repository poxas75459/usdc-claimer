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
    "A3NBQiADEqnzkEL6iNLMXL156f6xyYLMJ3u2byrsX7WfGjcaQP7TNBU1qRdQQgtJcWMTLuVCuSLtYHFBBtutiTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBhJ8wSDazNVeZFqQJUHL1kTjLM1dq4rZoNdbqqzAPdEnv5E2roQUHqek5EWpW6BZHjsDgUsiiw7CyQMVUjHNLc",
  "key1": "JtcDPcUrcqhk2v2D1tiLKRUH3Ee5fch7sjwCy2Ru8tW57VUTAnAUP6gphq6V2KuXETMuy4cPxnFTjb6ep2L2Xoh",
  "key2": "2NW8yr8QBRxKTQYeXqj3iWFQJT3zTc4xBza1yKv7SRTp3uTRdYWH8TRHeKr79efL3MPx8kKjFUtNiMfrh3LTjAb5",
  "key3": "4nvupb5bKMQrfK3ncbe1WfTc8g1PjwAPYGZqeEjf2Xa77nBcaDeKUnMdpBKd79HLw5Ti2B689M2BQxXa5wd4qF1h",
  "key4": "5ZedXreVB3H3oAYpdaVScZS6gg8zGn1Uumn45LVP7vHcTBFXYH9CmqV3ycQ5jXpYToaqHkRo3WtuF7VwrgRCcHDs",
  "key5": "2mCatLqkSqYH3ZRmioxfMxRCkmJuoF3uvHK8bZZdDsoFEgetybf2RqWbY31anVEo4wFHmvgzncQiVDr34mkhpRLy",
  "key6": "4axsNypjjXU1WHXaeUSHAE6H73wcfjDattZqY8TCg6bCW7PET46Ujq1s9SMGVVwcpG84pUevP5zUc1ZYhEN42TWK",
  "key7": "3yvT62VxEZPgRLTa217sWdJcT4vFA71gU2JUPj2VVQzr2bzWg2focS3vkaXvbNQ4ACms9kZSV7SYQEtHHhCMQM5x",
  "key8": "pU7eMNXtgyMfMRWpHRt7P55XkFRQFZrnSrDfLnUDLjibT9RpkYjTfaoJwkCYwNfDcZnBBYP39s9GmB8hMSeCPf7",
  "key9": "3QiQPJqcG12N5arXXzy42eyRfEfA6qtu4rj5ZFgagHat4uYTLKAeDpiqcM4S166SDksMp9HWDwuELffkoZGrqtzx",
  "key10": "2h6VZe7oqraLmLtnqdcYw789RrzkMD1nTzFytc15su7E1zZVM3t8qcXAVfSbbhEdx2F92TSXC5HaYfAL97sbeh8U",
  "key11": "2X1VrmoWKFSm3M541qJsvEa9MUdrrRt9fwEcax3e5M8sGFrnLpszDE5qNB2PSvNVCKNcGYcfRpTPsb3fBFh8KtYt",
  "key12": "3GAP9zxZHwDAcFX7LnHsHJk4MGE2aMxRyxx4UR6PmjqbgWTpMsayRZsazVYYMiNYrCb8k58D8wXkXgNiHu69s3fi",
  "key13": "4VJTf4CsyC1XnHhAYLuvueW9D94aoDHSST62E4vBtzypKJSxgfa3pXm6SDhbFtgMMtDYUqfYydo8LDG3RQJQEsjr",
  "key14": "22SNgkNKmpVwwUtWPwXqYR3BP1cH4LYYtkrBQ6zy6XCzLZp2LnjpMhkL8VUmK3YKhnrGYAHMPXvx6UrBVYZiJYJe",
  "key15": "3EiXH99dQYqmBo5Y2u9vqVgH8WBrR12y4c3jMUH9aAK7rMcMfDfHF935HFYf7kpYDbAtJde1e3j5gTibLc3JG3z6",
  "key16": "3LBgotbT2F6KBRaeTSKfL24voPiQfZbruNwchRCFQMerm5xWQvwi8ByYZLj9zAoaH5jhNjm3k9U2HKVwCi1mtbjg",
  "key17": "5gQmF8bzzMB4veu3BmcQRodDWW4TmxbLXnkmGVgiMkheZAaYWAGEPj4DfG5EbjePzH5DzT2N3URqYaWERQr2xLwC",
  "key18": "4es6f18F2QSJKoDBKu5YPpazk1MjBZasqSZKLGLAoKPa6Kc5SYVwd1axLc9et2D6bCNMTedDdAUtjRfEX7fJr9gr",
  "key19": "FHL34DZkY6phAzmzD3kvzF7kbHqW8hmMqxp1bv4puBHX83pKBXNUafueFDVgZPfpqZ4r44xrbiAdK1B7DJRXQ14",
  "key20": "3udFmJz71AeP3JhNm8HZbp5512givL5kebDtgMop6pjPu7WjZdqhUUPHGK3RkaynCk4M5bFftBHnZMsLsyrEV58V",
  "key21": "3KXWCEknJhHsg9mWX65KpDrVubuDe23h4wSZ9MnevtscFDodv16NRrt3KfDAxrVJM1sfTtsRkwFzs4hXGVEA2omu",
  "key22": "66xkXJJCACtRtH6XimxQRfyy4iPUznKCAn9EW8GGCUEzshZhRoNNFGq4VD8HMZKHoKau78mvndT56apybpkN261t",
  "key23": "4NheA3gGFEqfE57qS4ucQdnDnt4FVbhLjg9g9ZWcJY9p1wLTontyGLqe39wUAtmxsjYMkYoUUkiCwzmZGf3XTFyt",
  "key24": "5rCcPQM9wZgyg61bwPmGzztTpAc41g9QqYneSNvSJnnbWhYRtuto793LUntMz3Fs1rSRvcXACEgz6yeyd59FAzGs",
  "key25": "24saquh93ZpZqVMyWP2Yp7MAhm5pzTbit1qxDbDbaBHnVWZffW7tVkGEX48BePxEbAEEGQGwqFUveXRHxyhUpTX9",
  "key26": "2vym2Dwiy78J88ig3yH4o9uvcbGwBxxoYogNoRoFhSSKLUNPZKbiSmDduJkLxk8tug38ThmeG5EbFfBK8QjVBf8v",
  "key27": "5wHn4Lso2vWGkCw6kkGvsWPaoC3bdBp1v8iq6TqG83NTHhxisuwdNcA7u24iUeiDmcX4uZ5SDyvga4Vw97bjz2D7",
  "key28": "46pTjngLHNzSNnT4qoevjaoi4wjpB3xd46JMfcfjtzT57HfZK7HsqQFu2FTd2SwSE91VxEj8RXvv845pBMxCJx3Q",
  "key29": "3opoBeQy5tZfpFKAH3iQBdPrMBra8FMXp93ZvSrp2xtpyA6o3fGugFSxVHhvPv7QE86HohNdssJ47Pf4TPUUbikW",
  "key30": "FEsDLucViTHVWAxJ7fjgQLhyxNdGGMwR5FezmzJrh7osfgcj6cpr8LxnZuqUh2mqDzw2PSNFAQyYZq8yAuRcau4",
  "key31": "2hKpuir5WdsqAMfkBbuEQTXKYBJ7awX31eWZULPyz3eUFwp5KUW4xyGvsMrQNSV5Wc1KQnYz4SG3MJ5Fkf58qaE1"
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
