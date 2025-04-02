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
    "2hJ3af1Q98w4bragwtS7BXHkyMjkxPX16GDedfsLcNgLzh3pRcXrz8NpHFf4bSSFUEWxYNaNvmUN6LdwWJWV9HPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7SewrZmmPxDXBkRxVeUuRnx5VLYqZ6nB3ZKLFKcyYKroLen95RTuETZxdVh6bSovC5kWdvKN8ps5kmcnkYPbzE",
  "key1": "5Dy1J4aB4gSzTuKn9TzVNw6e6kUqrrRztSkZcgTP8JsT9vqMs1PFbmbtsb3CPZgJnKw9YsFtgGvmzvUpiRuE7vP4",
  "key2": "3zdcKxM4xFfHGqoE4cc62inFAkcctGEUbUgJrLYXnmNk4hw6mg2y5wrLL7cWyD9wmNzUczPCebyaTvw7GyuLXFa",
  "key3": "2L7X9KxpP2nFfD9krezx5U6GX6UxhQLkENx187uuVVerEjvdrzJDcd5Vs9zyXNfhConwG9qNWh1VV7EPpae6wPyX",
  "key4": "5oBvkMQfa8qNh44WR81BrKKXhkcRJ9vgVUBLTaixD2z7UqdJsFKuq1xhdj7hiAnydtVkEMxVH9VdRtkuv5tFJYxW",
  "key5": "3SozXfQg9KJb5ZxSpKuTjnTZm1excRPYQAE8jWjMki5AzpKdyFj5Wv3e5SuiRHk7PHjuD9JdmPwr1FYuXMV9RngU",
  "key6": "5U4BnWyZJYo4AgCwdQLDj7bqy2yF5XdnpP3GFnPs4YnMfe3JBA9QSVTPcVT7KAuTL19jFj9NvhpYu4ScxWRuUUgo",
  "key7": "3uekJYaNViGLPi3ZCijhQ8sgrKM2vZgwq4dFtNyd3RJH8hyp9WAsz74yvXwMTRUen6PpHKnDneASjfGUok2oKoMr",
  "key8": "4uEgg2NJtn2ymR4rxcKGGrFb3MiQcjRiQLGRjdFCiq8FGtHbLzNNo3f6ekDWELRX7Bby5tDgcbeKapg6vbmYaQQB",
  "key9": "rS7FArUSVomijfbV21s6F2BtHMbrtwGmkrqgaDEmfE4uPLNWsv2hzUwQZo8hwpEnWL2PCJN6XE8b9pqtZQnZykq",
  "key10": "3535m5RsnZ5cbnBrnvsuUegRWgN5pFATWECrzUmzmyAV36xqDevV5PBZL4Hv1h93zmJ13gMWKbf9xL1SB4gsWtea",
  "key11": "31bF6z5dgZy32v7EZKSHux7YC1ALtwjdKCzZ39LEJPJNqTc4Chne4crybjLLhhxP3ZHNbLNypL2R3F1FBHi8bcms",
  "key12": "42LppRTZK8dbemZaCEQN6YciV6bLkDxiMbX1hovZobmaYMGArjNtuQqq5h4G2dREkcwn1VEMfsrPxHmugrZSPND5",
  "key13": "hLGCqjqYKjNFVmJPVSyxEPTaE84thHRVcSzCgiByEk9hMebb5qQPBNbokv5jJFq235vMCKgGaW7WwxfgFrJitqc",
  "key14": "3DUc2Vjwy63w3MPrFj378JggkUPDKDbhr8UuVc3F3qfbtGkXVJEoiR3jYEKzXSN8oJyE6cey6Kg6YaLCTw91LxqR",
  "key15": "i6DXbvvhjJUPG7WUErWQdcgCAEx7oSkfi7e7tBqJKabJ8wRtedcSHXK4W3aYFq5eUyavkx6YNhkrNpnixGRxTQb",
  "key16": "49CX496zm22Y6ciaqAkdTijvTYtbWA8qzjomwrnCcsip2VDnzHW3Bxa3zqs39KWhnAskHADuJ9zusdPkKhoT3b5N",
  "key17": "4nQt4EyRkzNw9PMGyfpa4VzyVRQthfrNwPBuwvfRGfgXkbNrCnLqvnKBDoVvLmG7F68MpR8iEaCRvcwY3K55JeFV",
  "key18": "Vrn3TvnuhFNv6kYiZHW8oW7YEirpy6rbyy4V52iQVc4shgFn7MFQ7bhy3j22BGdf6D5Rfp7GidJHAHeDvHw8m39",
  "key19": "1MgmXK75TSz6ct5edALLKmGZo8gydWpfErAMBsHy7nypWtrXzYwRDGzpiiKEa2NQsTyQuEB6wJ7pm3G7Uu2oLrk",
  "key20": "2rSMZM5JiquxYCLA4wePekzgC2jthcKw1AySSCu4gGKk5si43F19KWxqMdwmiU8WvyLB4DXHd4SUXrybgkrDH2Sm",
  "key21": "24oyYBMhrTPmKQLCN3uid8UQFKoRKaVbAd8NUmJKZcsdhShZMZ8d4DDiy4UxY1WRdnCFkQzkptUR3uG7zsEW1W9v",
  "key22": "7oCsnLMWSjETd7m9XFpwvk4M2NRf2UKDdvuRpMDbbFMWtPch6kXe57bvEuF7upqYtsxPhfvTYdDrc76hxm4PUx2",
  "key23": "23MXA4fg3yxhw156Tskicm4a4fTzgjPT5mQjsRCZnGn4HYW1Sd77vxQU4RYwd4KaQGLbgBkJZoVJ7DDD33kD6bWG",
  "key24": "pZsNe5PJUAMRyrPTC55vbc9FajGddkxN6r1NpNwuTSBQ7mQKPy6GaABWBcq3wzoxSkUtnsMG6wrHHVYQkK2X5cK",
  "key25": "4pAmjBoYZ2usaWEUVXUNQgudx2iXQ7uJQ2t7mXm4x6dskiiiHn7GkcW738jQpj8efBSfXpWDb9xYL51VbWKKdcHh",
  "key26": "4MHgbNSnkCYD4V5AoxjARh4oAEMo7u1tCUMef7r7DSLs9ETrMug47bk7BkSqfE7rkoVgr8mHWuxEA6TZja1SdVEQ",
  "key27": "4us8sAV8YB9oKko2chtWi4aXMV17ZXTJaPLDo9ioCEEqjSFtVeCgmB1cQMqkfcGtjWXF1V5uEBPAL7qLnbaTK49A",
  "key28": "5fetNPTbzLAJ7RyRhwnvfjTxjxA53qHUomgj7P4edGioJGF8MwNRoDP3Q8nbmuqEaSLHwAw59RGx9yYMVJnWfRYx",
  "key29": "6iQB2rfa6bTwSFVCL1JwjED9Zr9P93Qg4KfzUxfAnhjqotc9ykBvkC5RHLvMg9jip6fJGZC13QaJ7VQd7auuF52",
  "key30": "XGAtdkqtuzyb7D227KhjLWu1h4iHqTEiDpNE9eMZhS5CfxJa6YA1VQ3sNCHDpArzEag7ySTGVhyXCEcP1RjH1kx",
  "key31": "46SfijSBXtcW968wF14msCpXmkMndYEz6rAbeWujpZebs6JeKpP5hJQah7chtZFmrEScN6vUFRpgqutJzp8HLqSY",
  "key32": "4Gz28xDinrhMUkfqiFuAapaAA14A68eLRH83rB2haPmKjXigpw5T46RLsbvrjC4YUwuX7nYeS45qYiim51RrKN9p",
  "key33": "9i8fU3e3P44JfkC8LhhMWdVApfD36e4c5o72EzkGof8x1PaxfF2jdSi7jCSgNoWzF8FHiaAp9fQz4BbBadFRcV6",
  "key34": "5EgQqxerVqzB7wifVmf1a8aR4QqWRJkWPPszdjGohpWyqL11J6gVswGhLBYwbWnbzLkvJabLi227hg2yN5zoZPHk",
  "key35": "3uXpCzfAhzGjB9Kko2nAg5DiGnhEPceDDGssUFyQASp56c9vVQQPuFA4WuXyggbyacz4HzXfNBX5Sg7XRatd5ybS",
  "key36": "3oWYyKr6q9FN3Sc76kwvT58g8ZM71gEYpYeQXjoTKoWWoGRBXSRvYiBGddZGY1pa8XE1SWSQZG8ZEK9KkeCTYEPm",
  "key37": "5ShYGXMC1EXJAAsjRSnTNCHUNERtZ8oE1kFroL3656peWCinqMyakfK4kyTK747DR6tQRF3oS6nncSiJ4gW7Ygw9",
  "key38": "4ZdNy2WTK8vhr8GsZV72d8heEvGR9bsSsTGVgNG5RhwZH1grRteCTPgJyGVMfEMTp18VpmDa9hiaqx7ftzLJTZ3F",
  "key39": "3B8E2kiie86KegqvkqPhSqA9Q9ssJa5SnKAxtCPzqtzUTqXJBBVozHBi2YW9iZbJcnrRLgNRDwTV3vc5TTLcdbZ4",
  "key40": "bFV92849hDiPHVF7C3Z9aPF6NrA7z8Cg2HSk69s2hvq2Y8KkD2Luow8x3zagqMna1YStcP5SjKS2EGfDXdZUdkv",
  "key41": "Rr24PxnVsCMJCREYab6WCrTnaYZoyp4EN6z49wQo97mR4c1NoEZz3VKPigcZhJtcZvbR3t231NHFZd3aw5pfa5K",
  "key42": "3yST9nWUG8KanUwDcfgWTTPL2B2amjr6s5iuZ1DDJezzPBf5NodugmLXoPe9v1euoywsXfVi4h2AkdzykLTaSAmz",
  "key43": "3rbh3WpYNJEGfzzKPjbDjfAvdNskSiXUQjju5d9yGh2hF7WFuVoTTZ6WxaEyKpJg291MS4CXGsSp3G1bSeUbFayB",
  "key44": "3SzdyoSUjMsdso7jGKYxhciJroNJy9Ao8dNPejUZjHPsoX7JJ51xbLPsmYgun8EaPvQ1NzqNpbaQY1TejE8sU235",
  "key45": "3SaciCoNa2cPEnRgnTxFBFeUUuzsAZA6GYUYrxh6atPFfuLDVFV98F87wkZHfd7Sj41xYP7h4ycBYzX13ALw92t7",
  "key46": "h3V8VoP1kxvAWFsTjKdqu1H9yfapi688ARVzMpct8GjSvQTQGS3pXQxVipaKEvcZRQDiYkVi8ZULW7YBKndVfhh"
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
