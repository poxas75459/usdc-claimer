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
    "4FCJV4p6WFr2nMp2cHWKwQpMUrup2n3yeGuFnbcSL8wTBx5UX1vmm27zdp7ocwxbg68R3HPJZZWAMwF1wMuvjD52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWfUQgWYAKGpFsoNQvB8rhjh9nbNcdGn1nbNQbqKz5zq1ZGNBwgzpyeRLuNuDh1uCQx796Tq8MnekKhDJtu2hae",
  "key1": "56C8ibUsG7p5sNdzLCfzoKKbLPM2DLvcih3PtEbPkGsEetRuv8P4WcFLpNcFTYdRktGwS7uq6YFUE9VQLZJUiAqo",
  "key2": "H5BFu3nikTJ8XeMSBF5RYZi3ShXTB8qjm1hATW2NUqnP7e7PjditpWTHrCjSueT8dMB6QFqSXRXwjMBNpLiDWAZ",
  "key3": "3cbRrEY3aT1kmU1c3PuXnfU1krsQB1zM3SwruwrQ4WAeoAF6feqNrAVA5Xwhx5GYF5STmrYDMrbzM3BSzcMVsS2N",
  "key4": "2Kr2jkicbPM31NfL5FGpJS2fj54m6e1p513gb4FF8LoaxwxbH3ZvUC9Zj9eRu7yVvgqstxnAHv2q9PStACXs44uh",
  "key5": "3JULj1itLKY1B4J6nNm8466wePdVKkAh2v8Qd8DsX6JwASaZN7YcD667jSCTem5MQr8W4BCwkK9fEDteYtXvqwaV",
  "key6": "kZfCQFfd6XvvrVnw9NAdXiUouqxzfdseTxdso1vQMCtiGEAQur3zJ2iUE73KameSD3g392ZmxM2hKkxFAHWi2Yz",
  "key7": "371rbBnGDf1zYeYF29L8fiWn9CivCUa3aBgpUjykEekUYi9R3evDYyaiFb2qvx3jvu8ff1DPpyMRZyRfa1LxRzwB",
  "key8": "4ZYrhZG1xszX9p4CzyYkMCbAJfvVKRG2FQtoHr7e5z46cdHmQbxauSpncfHxUXdyvQuVEANmvXGFwbJoGMMGSsTi",
  "key9": "3wSVfFNdFLivRf43iEo7vtzh4TsWykx4JpUqRDuwEEdCF3jxy5YhRW4V2FX4ENeC8j9MxpEtywxGqcF8hiyvyfn5",
  "key10": "49SSasqo1ArA25T1KdoZAf4nGbJw8uMWDRWwSPtFBfeH5HYE2xNPhKxDVLb843wXBRUgfcPyXngKqzFG3ZttvNiD",
  "key11": "5rN5cGo2ryTVri2PpUwedc73oxxWshNwfAhxiY4Ni1yyPSkFzxSUT25MJvReDp8D3JK9j9mRXA6yuxjF5ff4LTqQ",
  "key12": "63kHQcZYj51hwyF1M8o8hYe3obNrVjQK9QWr4B5AvWrbcEQLjj3KA8rVe3dkcrQi7dDk4X3yUSkgaYdrAhECpQL1",
  "key13": "4Zf46CyiAAZ9k35NPMh15BUtj7hzSWgReHVSyRUFwY5MdLJ158ZRhM2ooFMYWhwgc7w439aXrKGAdVUkSNzuqVmH",
  "key14": "25xqWuDWQkGC1En4Tt11TCLL3VUQbiz94dpVy2dyXrD7hUJe6KmBb4UAWCNodm5S35SaLoSnEkqD8zVWtFuzypmL",
  "key15": "i1drL5JadGAZPXxMZpQXnaUWo6mh86FMzwZ18QmLdyCxVnS4GEWDnommERgBk7Bfiv8uSvN8p8oMM6b3gQBezbd",
  "key16": "4xBGEYqbG3bWbJqSYwtRB1UBUhLFCjGiwYyHn6gn4h7bWAh3KoQxd5ejrQPzkbx3J4HWNC4UCbWKs7jA5V8ohyCP",
  "key17": "3MaAXCvY5r1kdXYzv1ow76sEFZJjd2a1iPJv2MCNNj3EH5Fu4zpTPBhMxQeGMGHV8Frkvuddjfsd7spHnJ52ZatJ",
  "key18": "2LvrNHTZEKGoMVAMvjy4Ao3SCH4JJmZ3GxTiZbJzyZeugoyWTRQSuqXRLfyqcNQh632qXxUFiPiUm1d8kpbnRU4L",
  "key19": "5iKqr3TjzeQ6fJoJ7MJbSG8EQ7nDng9GzZfNRidUJ2wDRL5HuHVTVVRP36DFB25zxBCvQy9rc3QvbjC4u1mcDBNT",
  "key20": "58uExrX1mwoWGsjs8fyHupF2uZtWFNTFh9oU2Q25gSs2G2Sz2ieDbsQ15zZaKixSzyNvJarrvwz7aUej5dTu6PgB",
  "key21": "AHmb5Tph8ZBrak9ZP1tveC2kEZewnW7XePwzReC9HfBs6NNaRqPYcM3qLMoS3FvkVqgvMqhSd1xDNm1v9BeFSZE",
  "key22": "5a6TSBHVgkeq1sgfHwdiE1xBTGTU37JUUdkxyMcik2P3G7pG676WK5ue49Apv4SYFx7raX3CZTUHyDVu4KVSEata",
  "key23": "64TRobfv5TiJ1yrqUxqdNV5sSWVr82mfdM9exNuNBQvyFNruEAGgDS8qiswCxVpzMtMytAWGBgRYzeEPmXpzD19G",
  "key24": "3LmjskVnHR1miaAUYbxP6tGx5Jy2SPrNky9uEChDzpKExEVU83VRiTWJjFiGjW6cRuAnrqHm8KbL3137x2sBUmJ3",
  "key25": "4rqmuWf2eLSGWJCQS4SgBrmvxa3QctP55UAWA5MgGjeXxxppxo6cnpovd27owpjjaTC3WtmwSwgHBy7DJ8AE57Rs",
  "key26": "4zQ8JafdJjfrqwJMh7vwKmQfPEDCVCxC5paeu5ksymzzs9nbuKWodkzN1oyLuhYVw3FFubMT2JVuHQrFjCjAqYVw",
  "key27": "HrigzSa16g7RzFwEWwsR5VT3Fe9J6oKbLSJQoJ29gDjRPDjjh47rooj15cbvqTRzkd55YznZQg4FeNkra7fo2sX",
  "key28": "5Ugt8wNsFxSSx4K5wdjXcNUFZ31Wy6aSNChBrNUv2aXTGtmSZ8uyCYtPLhrHPd3KvN8JGaRTRMbHr7RXCZtHMGRt",
  "key29": "24fQeToWfeZH7bMD7WtFe9r6W4osAMvrZhNtUuw24nHhiMvpp4zJedQBFwqe21SmMYvzcctgRMm7bm5rxuDiXcSf",
  "key30": "3TY6ZDTZUiZq8hxymBDMJ2Yys5KjCcn9JPdch6tbKkFZNLwLrXgfF2RFsZ26WkGRa7Trr71qRBZ1m1WHV2MtkewH",
  "key31": "24oN22xmaZvBLBTZwxEFufs3E881SwP3pXp3covWNSJREcRsFTMPuw93xbRsE5mRw4jEG8NT4vUia8CxMNpxearH",
  "key32": "4C9XP8iuFjnfH7gTVdUZVMbRDNkmB4NCMHSpjtSedf17Mqek5vPABNwtiqsdMuC21uuwsF3riffGHYoSQQBGK3VS",
  "key33": "5jXUEgRZRXF29Uqi9pZ9EgBvSF5WSD95GBZ3sCPGW13LETi9bRjcPWNRxrgV3p4QSGVX2yDWaLjYSyVFjcZZhjeF",
  "key34": "4ntTpxH6XSzaSTyE2YxPcxPBP6NrXPxKrPoUxAMQgFZFfVkAqC6MNBFiZrnCobm6Wvbf7BVs4yDhTZPfhzBUZG8Q",
  "key35": "2FmD5n6kngrM83qVAZdsiLC6bP7bkUEXJRFcWvHCs5t7U4kCTDdyqfrT6Sn7jz6eNjh69ZvEbXd5KBakgySEwhLD",
  "key36": "63cj5BAphSDnGfQe5Wre3q5G7eys9Us6Xb988MFbHfTFAQ5xMcdeh7d7fLZP6QzsVdhnuzac4aqhNqqapC1hjphs",
  "key37": "47NxJAShE65V8FotwG3TECdwSX72i9RzKGqKeKM41m6ehDF9fbrtmbLoTZG9ibQiBKq7gYWU1f9pcKEkDJM1Wvsq",
  "key38": "4HqNLyqea29FrgYfdHUoi5C1pg1aHJHe66tbJhuX97SXn9oVGtZKT1StgJ9t61g1AH1kxMYtSDDsui7kiHQfDcWt",
  "key39": "2FUqDM6BJgW2LNFdVxukTKbjyciCGKtyRJiS12XTzkHLJAFwuHQSDiJ6aPFAri5A2LiPqgvBPDPy3pp9n6BLGsgi",
  "key40": "4tqZwwEBe63PuznzJB4Kc8SMzynDopcASn4brPLSNbiGnK2BrZqwhsGzRUCDSJy3wqMXh84fJcQyHNh8mePu334Z",
  "key41": "5zL2xj238R7MMtnsxaMLPaPquwyLDtzmRpqPQwhQ7HCRKWA7verzrNYD2iH7ovzHgxZd8rBXRc4L7wJn6uXXJjHT",
  "key42": "3zYsvAoxStNBdAny911tnmBfbMXG9yibBqDhef9rkUVVzrJixxXWxxLC8s2Qw5ALcTJkhXFQ82CtUGg864WP7WSt",
  "key43": "k5a4gcfJHWJc5XJynEg3Yz2r4SSUS7Yh5PnDSJ4fceq4iK2CJLMn32DSfTDheoc3JU3vUHRPRLxCHS2tx6TNR4p",
  "key44": "5mvD6HML1BoM8djBknDAomBgM2YnAYMBkJAfpiMjg8JZ6ZdzvW1Z8ETkz6e6a55MZzXWAA3WkNnDpB4bLbTQ8B1a"
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
