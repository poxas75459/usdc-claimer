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
    "F6epKot55NuFvhX8ebGVGCDedp6heWPc1bfjn7S1CEsXNLHsoLZJ7YhomGaFqWDjbegHuf5B2hZ9HhLnLZ9Y3qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdVyya8m9EfwfbYzGLXzJ6MDru1Ne3m7NApKgCYD4qnne4DEEUeJze24mXqMyqhqxuXNpm14QfL1rMo4Z1WyUfT",
  "key1": "62kSPfEbrKPRNLB8JZTUrxiS9c8PkbZFgVGUZXAn15BUTwfNT8LktUfAwuJEFeFsnTeTKwn2ETGwUSTPwcF7vYLp",
  "key2": "4TfU58PHVeQFK1kLHDZYnXNofVaAvtwCmrEijZF6CQ4vLJhWRCzY11ZKmwwCnSLdZYefmomnamGdZwmRTBNuHVTr",
  "key3": "5iepoHf1nhunBrfawrpbL9Ag8836V8gZzZr2Uz5YkyXrLTYfVVwFswQzc9Aiyz7pd9YSCEScJh8Dgj8JSqTupvbu",
  "key4": "4dmRsuaNQwqU13cLRyheJ7Ci2xXzaVRamZUvgcSSWQGPWEihcYoVcqdbsR6gYTutcYNSckUwxBeVJKP6iu4N4RsM",
  "key5": "5E7K5nAReYAqJyLWZb45ou5BPt1UDZPtk4S8GMqiDchhALhnCvfnn4Wgefq5jVaZt7qxCZkf2utXtj3Bq3wfHCpH",
  "key6": "5RJBueCgLVdz9eqtAN2Dhfo4uvyZxpFwyY1WZjezntfMX8HwVNWdvSDPsirEqFHiocPFuTG5cX9a9AoNYQQGbnfb",
  "key7": "2dQvLNyKqeJ1Vy7cmRmyHrr9EhuVu8XZnaAj4XGnEvKnbPsMSYjtSfeAkxD7rSDmfZR5iPPiPPrbb2r2qUXRABGA",
  "key8": "5GX5FETm2wMN5fjAruKt4s1ZWgvnWpjDmZuJYPn5rS8mQGAc9bYaNbufpU7Y2ZtjShuRFyFF6SaQ5MbwLUSM4swe",
  "key9": "3wq4Q8H9UZ6DirrWrYsaFPbcvos9zYEYT4yQqKMZKBz6YHjBmr4jEtA24SJRt8cHZ2gnLjefyprnThWKKE5dvsr8",
  "key10": "2ctQac2bZFHAJCRAYfi9U31deBYuVtnxcVj9mFFFuvJCr193TzLp4rDiEbX5ipo8V8VGqY1EE2zbhHJRHdbzNaGc",
  "key11": "5Stz4RW3uqeWYgo7whx12at23zjWZCy3c1kjcibaQHsHsoiAhyFAEYRT68zsQHr3Psr29Gu8QLnpnrCDiVY4S6tJ",
  "key12": "3gaGSyVj4tUn2QdcArztQYki6CAKz2JC8UtHwsm4rc9VXiH3wMGXGfysmq2AyQZtoDbKptrwTLeDVH8zQoXtKErn",
  "key13": "3NVvFQ1Z712NvEZqJ64y1SbDoCuaUwKgUdzA74kQYyUKs95sRHxkpmi77NEdkWDEvHWRmVDaAbdG51Fi5xPsvyci",
  "key14": "3rSP61gsLYfyUaUsGYKUxny2oDvmqk4YekCLo2bp1WsRWC4Q9rJv5ooqmAXzWVE4RkzfHt1cGqmQopnQgzyhDSZn",
  "key15": "5qkTeZcwWBNNrKpEwva89to9GXMfEerg3xmTvePpucbtdWeAVFkXr4DEcobWsyW73QkQtM2zH3ysFEuSQVnCG71a",
  "key16": "54cprqtiVCy2qsnSKMxfwb8uqqMXjoQT1Q3ERpyDprsxJs7xbwVikYmrUnPMKaisMwtbwbYUNRjnsQXYDzv4iWF6",
  "key17": "2c555r4KEf8uj8aTLHJSTt5C4RiXLzf2XLZZAXpVox7Y8PEjcrgG9ZrtFvJnZ1qP42TUzCeNpVwa3oCSM5Da26m2",
  "key18": "24rUq2CMD1crS6easv4c9ghubzRGEChXGx6JcSv4Cd9YJbBwAdNenN9xHqr36UtyAPxFSzc94utQr9A4qEocVLTP",
  "key19": "6y94Z9ph3jfpxW3B5xCn5qWVmcEGUAc3vSexfjvjQUkRSjUbk3ctvakBNpCB6VTzfCfKgWPe3pySqtPVJvM6xKx",
  "key20": "Jmr6uf4ArmbNp3FSxQFEt8Q9sRnioUy7yfajXbQSxyCj1Fjxmmn6b5R7w3jbDWs4eL1XGGY3p7qY9cbBXMKXSsr",
  "key21": "2RbDX2JzrnfmAXe5AhWCV8swLYB3rXpAqYLndc7uqscSnrk1fYzTDTdw1Hdh6EmxJ21BPhV7vNurmUjJ4D1gb32j",
  "key22": "GRoLnQFJMCQvYgeHTLNyCjvf2wWKYKzMMhwifKDV88AAu5AHsyBBXozWKKtZXUV8J2nxY3zsgNRX4xe3jUmZ2gu",
  "key23": "dnFZHzpF9QbeaXN59QNKbAcKAuFv2KSx9ybVq9Xm3yvwnkgat1N1j1mp3HavhJbJx3EA5wBzdY37FNEM6S33tXw",
  "key24": "3XDWBKpw1cV3u5W9GXALNfKWuLcTSRBKZ57sC5FGj2zE8ZWSXbSaUkamkGUYfeeseXSntsRooqUxYdz8xtNbq2eL",
  "key25": "21aiycrEi2QFhZzgg1gw7g1Qnz6SoqzHrYEkPXM4qZWb6S7GJK8qSunkezMAgkY5J4rojHYx9UCdYznNsxLhFtk4",
  "key26": "2iN9Jvx9L2tGPykU1ivyb91rauELfvN7GwkUsT8Z2awPudqY8W1kstoSBnRBKTNwCoLmzUY1KT2DrMKfTg91ZwBW"
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
