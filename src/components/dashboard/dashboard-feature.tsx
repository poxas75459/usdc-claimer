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
    "47nGjBRDyijakCoF4JSBVphC5e6T1wM44ipS7aBoTEYeJncmMGgbAben8dfgKESmEyJE2UYw1Cvbm51HeAqc1mLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2c1RW8EXZNp87WDWoTTixYHbwN8QUnFavR5LSZR9CFmkTACCMSSxBsrFbxqEzQB4NbrbYwW8agUUAZdoNZyEmu",
  "key1": "3a9VJCKDMjLATNqmr2esRnDwzht5o5wz9LEL3D89LuT2YE4kQMe63rvmHjH3eBX4K1ZUZG38UfR2AFUqK24iYtXj",
  "key2": "4yc8yArXXL4seWkCW91zmR42noy8StFm9XveTm3aifQgNM9dtD9vJbuCrJf9Msduo6mJc1kN56fPDxAevcwztCSU",
  "key3": "2Ea4W9MtKb7j3bB67TaNvDCPyrNP7AbNfE6FxSrseECGx23vzPyki3rSAVYFXvbjfVH8B2F7WMSvQ7hAimvQvAe7",
  "key4": "1xkZ65dpQgRxr1J5FZpF4qvSRYV542GodL9qBPMJrB3GfUYStxfcbfUxwfask7qTBSXnHbT2gmkjgms4YSSsNzC",
  "key5": "2sLLHAqanvKFYcG6SaJmymPXJxFD3bdnfyiNvJeH4AJV6nTRoYbRCwmyRTG9NBAndoK2iWugDh26DSsSzXxm9CgF",
  "key6": "5zVYeDX1vFA3LPsvUy9MqY5APFVaGCdkDLnDq11a5MsqQejYmeACYCiK6R3iztmWGDBGuhtB2jB6uKJvwD96oNnU",
  "key7": "3AmXp1AvHm2fTPSkNGogqk3zfqVTHLQAYTXkL8bHPvTJrLjYBZR2gDRoi1ooUBrokTyMDdkomKFmnqiSjjHszrLe",
  "key8": "3dHm28UCmDSYY37FK7aSh5zJYrEx7iFyCLVVKeEWY4hLPApgKqLWZPTU5emqL9tbUWkajZ2WWJctSeZzH8Cdftev",
  "key9": "5yJqYR3tdcBiS3J6TW8x5nzxD5nFQeyN478Dg2H68M4NrFzNJnFbhfytqBKn7Xdjn2FGSP1bVm63TBW1P8duFDGZ",
  "key10": "245emKYHGGW9HLoJv7GpUnPDKMf2dAjCkZ9QTjEYqiF8nwrVDrCjzapyvD69WGRXfkkK2PArSD1u7sVqNTFbU44a",
  "key11": "84xXfS96Qturxb1hm6qnMHRnNTpQ78QsxinAsN56pNWrCmMZf3GUmztuqFHrwvpg4dXjEfFHPFT88gEhyVmqZ9t",
  "key12": "2bDsWGwDM8Nr7JpLinBEyEZTPWQowbpKQPLPymXtP65Vx7eLPPaZEpYDnVRvgohCZGNJqVYoCwA4W7cJZdqLqN7L",
  "key13": "5yk5NBq72u2mWf5tyDcbASTShHJtShdTPTNizfhngKgteEx956xBZ9r2KBFLdL6MEx3UeFYJeetQTSZLD1LnpjkH",
  "key14": "2GbdL2XV4qnhDTUdpvg69nX3iTUEwQQcTWy8QLpQA4SmFE6LQsZt7exMyqAXZpF5hrjmKUxaTQcPcw4Jt9Qao6Hm",
  "key15": "2gu6R1BTwxQKw63DNJrcsY7bqTfFbgjB7SgBq4f28Q2UuUNo3cbbF34QaNYs9ZWWdcjTvhbKYL4ukQi2j4eJ4NwF",
  "key16": "5oiwcpSv2h4psSpGj7U36BwX7RxiRwbi4RSDwGNCsKhJZ3Y6YKoyTW5KvxamsiFqhVUg2DUxonKYbxxc4vZLHneB",
  "key17": "2NKjgRsizqiach2g93msAVicPTTsmqkGePumc5wVSCTp18vSQ7PeaLV8PBk8Jm4CmJc1NHNU9NbsWVAxCMEYFRXQ",
  "key18": "4QtHLn55SDeEuKv4ruiGeSX949iLP4rcB141iDY8gAtcjESv1oB9HXrd6Tn5tT7aTGhU4BMMb7wN2xvTFKKpki62",
  "key19": "49xefFy9MJ1QPBwTGBdBuLCHFXw4faEg1uaJfPS48jr5P5BWYUoptqM46kWD9MYYs1zyrSYvXTk5LqpgRT7pu1oR",
  "key20": "3MGuzzLNJykcj1XFL6Lv6WDGabbmJknjnHBGMviLd9U2Rh3WHeh675TRejdcZy2rHSJbiAFDStp9NojgdhtsC1Fe",
  "key21": "3Wn1hpevjFVd6yzPaUZZ4yqBRgHi8cmWBQ3cr6PxazQjZZqh2gwWRb8hLWsye5HMW2zr8v6P3RMxyKnh31jJhbhV",
  "key22": "5Jgmdr1iyrbGAhKC97iBtcFopYeNusomvzbvEZc6RkoaB8NCPjkQfPiESN9yB8ktNi1Vzi8Y74ZWtoJhGrWVzxHu",
  "key23": "43qhSsm99WVCTdcLPeqWykg2EFJ7FLYGDpGescK1EKecDaY7J6CGFnpdGAuDuDvzX3JqLP18D4v35LzmS4rgBZ5z",
  "key24": "5MJ2meW79N4jZvN8JaugpaCtnrypCBAK2weR9P5VqrvnCvu2emeSFBbQmkG2PNUWa9uB6tyouUa3waEfdgTPovL7",
  "key25": "3pTQ3ed6KChX1NDhBgY7ih8vcqWbhi9cQShMoKCqbQHoEE1uMWxgaL5q1cMAim5UrEk4gRukuP3q1MDox3BgjzKF",
  "key26": "2GBcNYerUtGe224TZnrixN1vHu7ChApUW3AjDVS1ND6Ft1Ka6KspuBf2wi1DbufEijqQRGRPDhPpjo9ggAjEWkn",
  "key27": "2haTfhTVebyWAyTZR5DpJDxQohJ7txYvwzekJ97FUU4DqGUTg82QZgKNztsKNfkTVGrjxFQ9Uq2ZTMSeTgXxA554",
  "key28": "44BnRCsi9EGtu9eT9pLCVfxmNdWxDRCqFnyc7PN3SFhxD8KQp78nAVYYyPUiW5s3sAGM9X8mBnPBUpChbRnge865",
  "key29": "ta1rXVkTaDFDyjZcGwb2gFrsXuYAWmF8Z32nTahdA6NhJHFSCMx4dcMZKjVABTFRxMYh6iYUgk9jtoXhwWzqVNC",
  "key30": "3xFHHh5PyVPdMwuwjnwKgzcCV3MMWfXjiGrGvzRc8BP8QjpbQNrdU1mgaAQWbpNd1CnhHAYFYYRzyGLGAeeXy5Jd",
  "key31": "5sPyA7JGfQq1zH9jBWePEtrvCjy1K8Sts65pxysqQVXiwJZ2WypiNwCbhS3tExwzsF3XmycA4Mr9bcSDUH9Qg2fy",
  "key32": "Wq1hASD2DtwULfwP8fBdMWCGPZPC3xgHp6yKzgmrsMjxqPjLoJ6bcxdmXUJXVx1uBFdPw4zFqq9yWVqS3zQRiak",
  "key33": "5dfaw1umCqvgnjiGkaUN9npenA5KkbYaFLsDHNXQPKgmBL5Ki67rnnKGZVdNYTx6cxwksKYRQL8Jgs2WSmfBFf7X",
  "key34": "3GMDwQ5E3ag4zCXmLMatRhwVga3BD7nwFnpozBiNGVN8694LeLw5k3iHLFFp47yssN5uMQPZFUBHuBZrRUomWhXR",
  "key35": "44kpxK8yiD5ia14V9yA3P2AyrrJKdWPt14LXuwjtVDwCLyfo1eV6AdoE4aYtcv9QcwG6khRLrLgXXcgPkDwPscSf",
  "key36": "4yMVCiqtXUgBb4KswxVjKHthYiXQqKXeYXUdANPrRUEf3asEaDqgzdX5pn5MBekwoaGdX3oZWkJEuZFqfkabqmFV",
  "key37": "3YfKmpnUG6zH1c2kyCnbSRn7ZhKJ1XgD26Uo4bzw4RskuTF9YAJrBm4WKcAQEkPfUBCtQGw5bW3bqqcvypMTCr3s"
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
