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
    "46vgV4c3hpmiji1N4Gjn9hiwgQu8f8TKQwE3zTJLg4gZnrMfCmjBgRRVmRAprrt9BLYDvn99bZo3AHPnTMXohCC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gk5osp3hL4FGT5gMJgnZBPtBaZBm23VfBaGkbC1wnEahJFHJv7Xq9mrsBKGMMB1kj5JxapujazSaPD2XQsmPWsM",
  "key1": "4TYZHvhx5nee5PFaFS7bcHhM5djWE4zwtMibH6tSZ9uAzGYw523L2x4Q39T9VDvW4zT9r6CxcmxiJ9wqrXsbVCsw",
  "key2": "4CXoNhrGU7KyphtKhPUKCv2UnUNkFNMarhFu6o87dcGW2P7fzYFXid9ni7QbxN34JCk4ZnAUHwug3kPxfd2NB13b",
  "key3": "2GmjsTk8D6J61r3bNzn9Nh7faASbKseVY5h6XNCPvmAqv24cs5r7C4xr67LEwoRJr23Znk8pdNDo5cQW4frHKarJ",
  "key4": "3oWZKaHF1zqysA5A3mnP6vygM8fYKC6ws6pU9ixAh1K9D77yLa62erAXCTct8CvzP9BQTpQbN4vWSvqJ6AHzPkWg",
  "key5": "282k42UNJN9SekFrpddCigSqFBNCrRUu5bS5kswUFA84xU84KCNqfk4GHYVDjaXiAEzaDSQVKE55zx3dMxDz2jnV",
  "key6": "XyeWATP6rhVEQoFvdTti2P16D7t7yFCZi8VR9awBEd5fxwcDb7q239CTAWBbB9y9LRmz5JNTvuSrXKTfjA7Gb6i",
  "key7": "BLQGQZn9Zi4mXD1qcsJEsMzBeT9zichHEgEDuzBq1hqt23ParfdjjMwyE1uqRA7NANGfLJ3GTcBKEc65qJhtYMk",
  "key8": "bTE1Jo17ZqJLxmV2WAyPifKe5gAEjkv5XnaaE4KgCWKeaNSVZ2xrgbtBhi1ttyBgancUaKVrgsqUcsQaKMDa4eg",
  "key9": "22WbBve9V9aoW2ReVCjKXqChNBextcCV2mQrFzmkkx4eA7Vv1LCFpQT2ED4u8dBJ6MjPhRSfYti2CrqaZmkPNnJY",
  "key10": "3ef6rNNaXt9w889DWfWkB8E5kMHUVthJF8jECfwNHRokJNRiusUNBCbjQJC5USfrPPGvRxKUfz3gJPHZnjB8vaVe",
  "key11": "2T7QvzmBHJU1owqbtCRXXAYcQtci6CXXPyvcSL4ckEVY7HU9qJjhojyPvv4ZBb8hGZkq3NQsQEFeqnnTKe31NtXj",
  "key12": "iJN7rJdjcwE4WvQw6Ffx9K3WpPb2Na3PrAsy848UCakYK12GbfHtSQRnpkHDvzBq3mvxnUcG4g2hUrkGTFEu3ss",
  "key13": "5E6ZRr3kpCVSrjvcY589saWRJYeGcggP8Hv38Hu5S2ruY5PbxTHyw9MBmnD6YKkvqh9wVY66f4EfvHZKTzMHdr3c",
  "key14": "3xXh11QyjZgm38Dg3Eibh7LHTxLKp6gpyJLA9UGnFBXF8f9KNH73KD5WD9BqEerTZoWngY1D7j2F21B5d1G5A8Bb",
  "key15": "4iLfY1rpZXJHjoQpSDKzcvb2MVrtXf9iU3eu7gutfwsafHAkEMQjtkQekEWLMs5SoD7nJo2G781GmhY9SbZfR8aJ",
  "key16": "4ALTGbqj8APjDdtuQM9XRyhuERSvqZZ6XbyDqXJcRg8Xn9rNrLypFBV3NXsncjLLuL8r5qeCijwiRcLHHxm2LBXs",
  "key17": "ox8hKsS7KEXuxbc62BqDAfhiqdJj9MUUPhCekyDVLKGKsWkvjL9YdrK93m3DXCAAszZHNZsjAjR5gqnzxF4vWkC",
  "key18": "3k1BNjLK3TWBstQHxc3AZ5RZZtVbTF8nCHyju3ZFF62nzGV934mVGdt4jiGEwzRFf4PbnUAd4j5SMup2BCGJsWsS",
  "key19": "2vxo2iNKg73f4zedbL3Mg7KZ5zz9wa81EQwrqYDmsqTiGtNKpt57QDiom7huRtL3yJLM8w8fBUSvwcjeegfFkg39",
  "key20": "9cqpP6FhayS69HXVQKRoMiS84rCW1qhbjEYN9miYVhwRhNQdhXHoPFvm2dnY3cxLijTXncS9yCo8M4c4wSJEAke",
  "key21": "2Z9wTZ7SDL3rDzpRPdHcSxJCSMzSo9dVNoqadzhofdyywwg1Yiqqye7bQ6AAR4EzkArysta4jTiAo7nJkvGbN4st",
  "key22": "wLnKFLh7nRMC6TG2Pn73E5bfNfkxVFEedRf2HGExkb6G1steZK6nhVkwofTv6uhJeT4EXyYMwxMpo2wDYVm1gwJ",
  "key23": "13ZKDrU3pPEDA7keNSZDrDUStdbcS9aGuGoHoPMWGALndjaoy9QWfjgjNHP2MbQWYVf6P13Zjqf8b6a2e6tRjJv",
  "key24": "FfzhEhb7WwKJZqD5HYYUq5zYyAA9G3HvwzqrjTTY8HKuYh2a8eLfpcnNXtmo3UfUpzZ1VXxdgyWxTKYDkhysByW",
  "key25": "4gWGsprdACtJRzVPW3E96CCXLcToVuobi7HJLZxsgWLSbgLLTYTHKRUnqDNmbEzEFxJCip5Ae5WwUg6NMiLAB1sU",
  "key26": "gu6ccCXFy62RLA1qqgve9tKMf7QH9zzuDqAhv1cVrG2x3xBBP6rgjzwmqeWZzBuuFzwxCYYBmk2C36k3nEzKbBG",
  "key27": "2uCg3ZByPMUXztUf2r41XbaZCcb3mHxZbymYC9eqapRba4aW7aG9y179jMTy8pfsiaA5WW6vChguUoAC4gw57feF",
  "key28": "2eV4faebG3WoPixYPEbpz4h4A7AknBb2k9GUbycjFii9UQHnREqBFCccARyft1489aGv3JvgzSPQG8r3VnXt4FXM",
  "key29": "2GQMrRqwdnmJ5NsWdzFC8MkgjUWckUVoGhb4pR4A2zzEENfdqekQxbC1WwH6nzudTVx9TgEsYS34kuYoZEaqUg67",
  "key30": "4y43jLtCCnXEF1PsUAzVRBc8p7BEtMDWTwv26JpR4oGvfscz7pd1HJ2YFdpoKog1haRMyhAdshZfuQaa7dKuxHzr",
  "key31": "2tsJsQGXjin9mSPriXhmN2Ht96tHdWpUTfQmLj5WQR8xdBQNRKbRmZ43vnnFb1mZLkRKV3zCZ5EJqd1oQpzDFEaR"
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
