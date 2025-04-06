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
    "4Y5WEs9grzn3yY7qB6Y2kCB1Zv3qgvv9uhKhkv5LVQQ8bJ86kFeRNoYQ1kzHN2JzT9XbNKXtZscCHZV7h8QRvWKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6aPvWr4gWDGduaGG5VudMrvaC9rDZFpYF3jWCvcvDZ8Srs7khJshjD4SVU33VChDATiPFw91bWUsJehUxBPQSk",
  "key1": "5N6PrFABDXFg5enJNHPcDQKunRfH8hhBYMN1MirfiJfYAko89EstWgBZqFeKpHrFti5qScEmEGfpPffLaEqPVqCv",
  "key2": "KRwv4MwePGojF2xyYmMgfRAoknnaBoL5jy4Y36tuhwbkbdYzwZv1i8HrodvB2FnvVhHjyjtjRuFPwPxQ2V2avWz",
  "key3": "2KRHMZWE4L5AtkU4cGpaQDHvkqU7vPPaGJRW1ninrQULEaYG9a9mMPKCFYnPTbZu2QeYJ5ZTKHhR1eUcTTKRHK9i",
  "key4": "442aF8zdpUgqhccS5EKDxCD4CV6gYJbmWiS9QUHyDCUuj6BxHBkG7i9UJbCtPuQyL3UkhHJ3D8pmZNP5CCerGLNh",
  "key5": "5tyxztsfWjzikWdE3R4PC9TF3wLxm7Nj72Ngy74NAzTGmCCN8Vvg1JUHZm3xKfAARw7a4vEcoMqoby7RYXaqZCt2",
  "key6": "48QXjYctdC3tQdBEwW7oWwoCFEwStgkCWEr7XViLVfvPfFkTMjQLPWnmnZJ22GyuaFKLsUwXNQWPWMz7UVDMt1q6",
  "key7": "4u1HaXmPTBaefMTkDHjRaeynepMPncDAhuArMvHaXczdhzt6mLLYZTa5gQQfCqzRYAVnXAQY25Fsr8QYb6E9LAJx",
  "key8": "5qbD2dpMZcS4is6pHus7Mat9m4gM7yXdTAEYGHEZAn7qF4WSxj8QHqKf5JeDCKXHxKR2VQyaDekfrw44DJfZgKix",
  "key9": "3XSKv5AAmx31S2kNobi55JXQqe871413uYDDPNVBrGdagxSuvmsaucRU2Q7o5xbmWdQvSYURNkthtZFhhVqQrKBR",
  "key10": "52cr5ay9iBCAXJjrXY4aMfZRSWDn4RXPbaaFLfYwv83sfR7KbUxBn5DfXka3sHpHuS3AGpYLQeRGLvaD1eEbg5kP",
  "key11": "2FhWUJxzY1cfoUtZ2C3YHeV9zJLuXVgMdASFWfDo1S3ZDTP4j9Uka5tEwztDmx1oKWKrUfhPcqW87fGigHuqxABr",
  "key12": "2DJ8LfFLkQr8xBHATiVsxjw46PVu9wSeAFghoqqvBvhkQg78TJLnTH48YfytQdfNk7jUnepSjLBuSmBXsb3vmkjx",
  "key13": "NxbkwYitkgc5Q4XctAFnwuxtFyhawtZkMGsr6Yv6KMKxkCUxd2VWKB7ZGcctFiFDdjhyFRofZqKUjUMFaaEjBQP",
  "key14": "5JFzD8uVDYgY2AChgSo97QYe89vBQFotk3b24V4TaFxZg2g6JCPbmfyFPx28fhfNGEmDiaiLAMYBUsrojxjBxJ6s",
  "key15": "3ttbSrZS6BQCZL3NSvZhD46MGZqbnTcMLgr559MkjUhBnT6dYGHTxLTR4Fz5riee1VsAryEH8NVTQ3zW6FRG33Xn",
  "key16": "5T8VDawAHU4Hmu48sbVWTiPk27xxPCAYAdz69uWQF4WVo4GL44EwQ7oMG2WZ8jghR6aWHUPD8DAyhkFm3rtqZToP",
  "key17": "4cB6adJpu7EM6FF6SSJP1nu3n3E2UasWioDaZWhmr99UkfuFny2n92HPhqSj2rGL6nAESTWufgZ3UqZYUafgqarG",
  "key18": "37CyJrmkyVrDgUZcW7jSfwGjT4KnwFsJMy6QoNbp7Cja6R4t4LhAaiMFEJGJwHb7p47867CeNz7fHzyQKKQQJ7nZ",
  "key19": "3wZZy8dDab83jgQQ87iT2WNkccfCDm9QjxS1XsfY5KFn8drbw94kceMo8pGGMYFSujVYQbtpPXtYbxAFhNuMSwbM",
  "key20": "49BDVTw8pTmEuri7CKr47TWSms5bWT5zwoPzt8N3V6iD78ksYpoVCKaAdSmFEFUCzb65Mz5FeCqekso448E4ussw",
  "key21": "2b18fzvsHetbmAn79DbJ1m9NkJYBcsjniKXvc1vZMgPj9Gkp7M3fdRGWNDh4Etme1aZjx8jZJ2q7LS3ALGD6cDK1",
  "key22": "4qr5jv7YB4uDUVCwztCDvVYUhgT9KPU51W4SHgtkfBQbp7zzUMoPi2atsVYsX3rkrAYvK6kbmg2i37TJybtzuUE6",
  "key23": "5gjgVazUXk2wYeCMSYXHp9HVvCmx7op9riQBUeoxfZqLBVwdo9aqZLxqArMofyeVgCrbhkKqT5Z2fWG1BLiE52MQ",
  "key24": "3FLRVKPiDnXBkoze78tX15Aq5MfTqxSDFaXoxNkewfPRYRZMMdgoEBEQRvgDYHdMZMhQpGqcQFisFVGb8tXGbaQA"
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
