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
    "22gp2xEgawdp1Z1GqGMi8i9khEWwbDkh8YzGjDCuU68RRLL5xZfPVyFGEkG3SozkCLMG5Sp3y63RSRUTsaWHTECB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FRjZm8QAmEgCPmmUxSLkjeGhj78unccwxDm47pVDWRKsX2XmWm7yVq8E54jRRTzP7exoC6aCN7tPkJHw2mU1JB",
  "key1": "3Jqg2ffzN3zWx1uF9wkxSsCfHWkE62kCTbasMPodDB9vPePQTPsQ4zB8eqVEtKLh2vsGvx4xXY8n1wmRGhWSu63X",
  "key2": "4qGTyhWzdP992yMx3Y5dHg2TvxDZCTZE6t45PYy7tsHXi7xD7aYZEP7wT7jBvnM9bj4569uX9kA3pL76JDB5ij3M",
  "key3": "4JJ6oPpqSwsSbB8mKHEdc2ogmF2cVjyYKfrGVZkcxmEmaxuKEfanNmF7NhGS1chT7rLqyx1MVwm5V5rzcC1orWmT",
  "key4": "5LjfYfHKvpkkkiiTW49KbC5s3DhUExfo3Zh2qBwWyXRbmR4LqdDQrcg5e6XfxyfqJwqtwtKDJK5qShGQb3wPRaTW",
  "key5": "uc26QH5V9esX2SVmSoGtutLn8A7bMP7Lt7bapgvq3HGzV9msfyX5dhpnmW3mEruRnEsvHfYBzhsmFtKi5VBRAZS",
  "key6": "4iypYQ2WZeQkcgS78sW4Crgb3Ew5b6pxpv8KfFFvaChmgV6y1HyuaZX739qNSn8NtM6XqA43X8hTfjAmEJujo1tm",
  "key7": "3G4fhC6SMZD8hGf7R2ZSZ3kaRqcCDE2WxaM5UuKLfzPo58CNQSGoZXg5WD6aNP7KV7vzHwhqwAjyhWKMvuW4hcVb",
  "key8": "2gdTex2JKfvRxZRowT43zf633TDSAPB35gtJeVkXWRFwwJXrz9YN4bqKex22WeqcGc4bi7hHLvWyjiF5WfbavnkB",
  "key9": "uoiakST4T9Sb4iMYy51sze9D6mvnEvbVWuQ3u5ADZkvukKkGnzb2p2JdQ9WJa8mfno1NgcRjhk9grnFFv2ootwg",
  "key10": "4f827bxz2BZrZvjTkdZQBirUiVYLtUUTwtte9iJYe9T2nac44PL7t3U2Q2G4BWUetMSAvDYYGu3WidY2Y8e8F1Zi",
  "key11": "2g5xmwAquiaqtLPZtEDq7PRkq9z42yADsj9GQWourgv3u9g7yYqDDFvkoPPQFcu9k5GyJ3Gz8Tg7YpyzZpiVQHuT",
  "key12": "3z8EiR5jxUyg7dx2dVqXjTetHi2oyfRGZJviyjFUPen2UvFsKvao8wHuTNEg9TuHWPFU9gjrVr8GKuQWTorwmkPQ",
  "key13": "7B4HeSar7NjUtaLHWxz4T5qm9MeW4MZ6FgMVRPjue3hk8rxFaMLbSunnU5rNaBuJgP6BeE5weLPRmEsgafwR39b",
  "key14": "mvhNjSQVfj6Leha924sCvwQoYbfgsbbSdyk9WHXubHHL6qAvZfGFAN14JHBcodrmAVjcCLU5VsL4jB9ggGCBgC5",
  "key15": "d9t7iAi3j16pwi2VGsC4bHpsp5n5ejmmgg1YumXghc1aptmQht8iEAwqJmfX28y1WoFbo1BR7D4wFCi9paZZnA8",
  "key16": "47moEDaH7x3GQCtoetmXKpyo9mLLw9hnUNoJfyCimmQKy68DJY1gZ4uj6KcuSP1WqnaKdz8igAthvsifRp71qoo2",
  "key17": "5GW4JeAFnQ3ReoWbg9C9kyaeFCymP3obCLaSktWaUhEUgv5D881JK2wjgnNWGZHS4di75AjV6RN1WpvkCkiNEew7",
  "key18": "4xLAv2ePuE6dBqNhdWSFWkfkgz6U9FuYtnhvVJgt3NyS7m8fnD5kxxzhsJo5wSLCy57WBu2BepAvvYdL66a9PBfg",
  "key19": "5YMDBjHnSeo9zFVbaof5JdKQBkfcerdSu5uxWjxyD9DCJFFGpNUwasGTT7r8oFNWvcomPGivRNQGAYTCebiHtfVF",
  "key20": "3sGUifktLPCHj8XHu7WLJ8BxCg6X5FvmQ6f7x9FWWF1wMT8gRGPpzhYjYrRQyMnYpaCGEohviG9fn6TZgPJh6BQt",
  "key21": "kou5WWYoT1otMrztS2QYLMKsF8igS89fgLjf4mdCMAzZHZH5BHCoESYoRxYnUdWzdVojfKS9t3bZWkhs5176CCG",
  "key22": "4okkhPhMFqnDrKbhkGLyBmGrHaMaogxPZLN3iAJZTL4mYc8R4PscouSmQsFaGu5H7LnVjqkCnHAc6v6moLZZDMUx",
  "key23": "LhvjopAssAVisL8hNZRFdd4fYt777yQobWQn7RzjueRNL53Zyh7mBZNYCmcQTyyfzsfYnKf5oZiVR367R6Q1BYg",
  "key24": "5YA5LPKincix8gtjdEDiCQAiTkDiibTQqRh6Lg1WuUTwmASyHzxLqiNgcoSC7fhogWdyqDpQ4e7kjdnXxZq5T2QH",
  "key25": "4ZvGSwJmbWAPzGkW3SsRY1eW3poUC3PpxGt8XHgCATbPPZwMEJf3hNDYevbzR5fN2d9icCJMkxgk4N1ogjY8EyFG",
  "key26": "2jFaALaRV6GjJacd6zTuupvW6H4y82u8HFSvJAcLqNfL9dxAPhns38QuY7kq8uwSppkp4n5vRwwj1vKo4mBaX6jV",
  "key27": "4ZsRAZ8i6WXipSB7WVf2r3LekXhrdwzT6qS8njukJbyBb3cozybmZscDQFBhTpdfEbbwmngV3kkksVVAXXfjHLBs",
  "key28": "3QxUJnMLzprfxbf4y4MRBLyPxzh33KKxfvJ27e1pXFBHUoC76sBrHnozHG3JPdVTCNx7tUwnVrXaozDkdiasXtHV"
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
