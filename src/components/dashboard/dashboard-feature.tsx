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
    "213TUoi93sxmdQsFygbv1cu5WnoxYCeWtYL5XR5pZNsgRPNfsUSiW2D5irWVqeR2j1aTxHPcQYQgM4miMsgWui4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edsQ3AgkSzDy5w2WEANjcVg3Rc5ndexiMp7qfzvkCazeBZtzGA82g3CGRqRwyLY7tGfYNWqSVoJz4847gCGYimU",
  "key1": "1UqSMn1kTkSyLUkzCEbHHi4dZBMtWEAVpdEgKJgSS8WNzAbU2BiKVdnVb3TM9XFpSmmYxBkP6D4zafsxzqNBoFJ",
  "key2": "49E7Pk6gNnDaaaUM7njHadX9dyxHSv6pQNyvs43KA9PWGaSfm5mW9Y97S2qVmtY5CMYaUvejmYqHciLqZ5uoPrfL",
  "key3": "9aNRnHW9gHGT8K9zrZWQGt7SheSSSTAxGaNUuwe2g1D19cKbxVZpqttPUJpAFkznqjHZb4RmkG1hxLXozYQnqWy",
  "key4": "xtD5E5oYGYnTQfsYjsZdSGiTbVnEonmoDJVzPRbiqBV283jR4vmDn81aWznvkiwHKuABdATsjM3WjzytmkVNnLq",
  "key5": "2vW2EE2Y3E6mdaSzSFwchsiQhhnQmzLfCbLEWdyTTRBANTTFnagX4yNEwpQDKEMJ1LMTGboz8Pubf6u9bgAqb8mj",
  "key6": "4gEbrLtcL7vHKt8h2At2atAQHrMW3YFJQYGAYEgd5WzvVKhfR4ZB37xHqi7TLC7ymxoEedL8qj8ibr22jktcTCdW",
  "key7": "5vwXTmVWp3fsdGK9LEipgctxwAaPhPD8Uf2GnG2bih7TCP4UT6tTP48nqZfy41KWCCG6bwznfhVYmGrNtejgu7Z4",
  "key8": "2FWYAbqWy6fHEfEK75UFttmfnJiV5AHMQx5M2PcBqN48bFQiD7Z2PUTvekZpFkVPptZ82XTNMUbdPqURzRkuBddS",
  "key9": "bHPL6oKYQvE9YeqS5GkqAcixXE18j2wxusBRyRf5dzVZaLVip9hzTNwzLtSAH8LJYjXa1FLa4zn9HEBGganAFjg",
  "key10": "5nKrbbnM8RiuW1D21DJYsokLmPMZH3JmxeVrG7upktcsAHJitEykbWWmH3VfYscbpwbjjtjsxXoBMcHQdDthDGtx",
  "key11": "2himW7MwCU1K96za2ErYDWL26aLRNsxSjSZ6kwXsiR5fficHwuKSEsTmzr9pzGhkqfrYcP4GcLg1xyEYY2NaVJkv",
  "key12": "2omgWfDR8XKKKCH9yy58gSnVinhk4fp8NujcJ2FjyzBGe831VkEhtxYZgZxKg7GFUkEwfigAAKdKdWccmvBimZHQ",
  "key13": "4g9jGGH3VLc68G2AdrwVY6URCcX9VjHs1K4VQmnD5EnevDkmNmZUAsRKoWeaXVJbcT3bPQzcyNP1kc5oXot773R4",
  "key14": "4JqhPDAT16ukiifMWJU2ayPVLSuuS7V3WRx9igGq9UxpkRNkXALj5AwszuXUmNimMd3YArCCE5LRNGiZvt4eq5aQ",
  "key15": "574k3d4x3UVJsPYKsutHkRLpse1HcHmynTgb7SPexpiSofJarin7fdnqcYMyG5R61qPBaTbxHvfaWB1HVFNfXLRo",
  "key16": "27ouhYs58uZfH3ERiDLGxHX6HLhB2chnfvCLTm8dKWWhiPxFUN3N2o8mqdW3S1vXb9vsvyYmaxNDkSfwmjXaZYqv",
  "key17": "3yKGp8YbsiCmTtxyHKJ4bsavUSWmoCQhEnJr3gdWCeLKvSz2VpN1UTHU8vSrt6dWYG53WDrf7oNZYVLKb1QKUa2V",
  "key18": "sqtUxXZE1e49UeWgKL8xiLmWRRDTSwP3e8VSd2n8US19UGvYGTXdYitn8P4DqyVyAas3BwSH1J6pEpv5FZnhZK8",
  "key19": "5LA3iqPLg86qeKBxiWJRYg8ZNYFQTk8gMswMd9d1Wd5ioo8ioevs1yNgS8qL3Ef57D7U8UoMdXu8NVq47rPt4mKy",
  "key20": "Jo6WY3zps5qyKU2r25amDCeswZAhr2xu6HyPaj7eh5iZJgu9bNfZwEQQURdeVtQDpRbrjNgX7p8CqTdtaHks9NN",
  "key21": "44J2TgWzhNwSdhYLXrXFX9ndFNkAVFpaSRzXLVDpw1QJu76CsiEfDQFhMspTSWEyuHpKhPZxAhz5LESTpcMzJx2A",
  "key22": "2pU3ij834WVmUPbXjjHh4f4DRRhqun9hr5Q8cxtaPSkQdbe26srHLxKwNq6cqecxvfQp9DWfKb7oc4LukoJivsYn",
  "key23": "3dFSs7DxtoXWHqXZaKjJrJm4vue2p3F2dR5szixDLuMnPbyFMmj83rciuehjoNMWkDYiYPBvdPAUtzYb2tzjzUEf",
  "key24": "VLCeDKcFLZN7nh38qR4H7QV5eLMNdeAPWBsABBWvLsiWAQKVBimkPnyjfSLm94nSuApWxPmzV67dhjUBztBFNct",
  "key25": "3M59YdX8C2di19EU2JrDMF4977PwEPJjF8c8pevXrt4egDUPA9PQwMR1FEpWFjTfCTLo8G5BKawiZPjrUPTckgNt",
  "key26": "2x8ctZnY6aeAiw4XgBBwoqGDYoLuaSJeqTRQqQvAvNjU9XULHr6fAWxokQJgWFPLiu7h8DNbjTZQKEuEtRG9FX2h",
  "key27": "oAxtYacvTDYRu49bRBBwAyWiwoaiQzNkvkV4f9doqwd4R2XoGqWdX8yRcHszkzNyKXs5YroM1MaCd9tbjy8HZzS",
  "key28": "2nwg7Rp7QQjCrDM3z7P4469ZDFJxFTvQZmxJQGg2Ad3vVqpMjs7xK3SeeTiW8oZmBun4uZj5JwrfiN7eZQr855s4",
  "key29": "3oG59oZpE49TrNHhYDUvaWpip6rBaCdiqgR4VAD1fhGn4LuSFFZAasQ1su6J9Xq8zat3pYzmY7W3dKoT9JZMdj1w",
  "key30": "2TxoKYQhEJN4BnK82PXRxdNqH4YLKNDCekGhDwsxG2hjcmVHkGgddaVg33xjo6GE11s73FAvoyjxC5R2a2zrcgmQ",
  "key31": "2afSHLftPQdRqvaZ7EerinhT2YicR1Yqa4zcFFon6M7LD9KnUnmyPV968yVq78zCpL4uRqwhYxPuwXth4D2Zttdp",
  "key32": "4AURHgNRKXPBz4d5c3oPCLRCC2BKVrbEQXnbQ6XZbYGppSXFohL3XCiwr42mTHVCGmk6mhC5LGeZBGaSp5aUqhmQ",
  "key33": "2gQiWkqCEgbXhKWtvJCXUKWs1mFzKNw1XrUHMXeCFDK9CpcXvVpqdLKT56ibTTdWtbzg4hKMrird257kxF12bvtU",
  "key34": "5TfJkMqYmr4Z3aThCi3XUP38boPVgDssMMSmYcmkbzaxywTmbD5fpFkwJbJXrV7KwXGsT9ViBVoXAiGRXoJgk7sF",
  "key35": "4HrUskBM3opDe3J4wNQdwRA3cMFG1v6wq5MeGSHo3gBrWkq8kzzm6Y3rtVUMZSvQpYe7F5Fa2eEdAHhJBQJgZk4Y",
  "key36": "5uHDhK6qNVExJ3P9eAggnr1n69Pw3FPSVTseA3qLJNyP4QkfkC3auFdmqmdrJqFuJ71nrvCaTmqyD5FiTHL6QEuF",
  "key37": "42so3EmvjUYCMxg9hS6czyihUAboo21jGRXTgm6smzmCAzmKuNjCJJTvH26nHcYGFs3dLQjNrZ6fbgYw1cD11Lmt",
  "key38": "5Jsc1Tt45WwTvuBJTLVRdrU2F4b6i3ed9tyvSNS7Nbx3u6uwu6QtriQQ1fabTrkmwHDJ6U3AZgDKjacqZAFjTTrb",
  "key39": "57xJ1Pg2x6AiabbC9HKvarPTmrZDDoktBBRLJTazk6B8SWhzh5NeXPPAcTt4y8LNVFi3HPYMnh6vKei4mufFgsJC",
  "key40": "5aES7psz2gxZqrhxuAJDcjTLpkS85SUH45ESG3g1A4f8U4v5tQiyvMCLn5QUzhtnb5ABenLUVsaiMc8EChkebtfC",
  "key41": "3Yag7b76dSrmv3UokXoiS4H4iHuqG8SK6AEJXwhVUfGPmxbEfUv1bzHHKDJnr1enzKaVEHBxR5cNuwWaEvYWJabA",
  "key42": "eFu1pNDsooFTABaSN9Qs25pGsZkiw5UpGE11DFJA2MzHriAxpuv3pDr8URtGhEZ4rwNP7nZLRJHAagZcvUTBfVE",
  "key43": "5hQs1z7uWTCMgPBPtugjFDMc61E2vdVGo4BpdKaMBK5XLdzCaL4fopdav6XVMraEpXRJvhHravtTPT9h2pJDkqjn",
  "key44": "rGCmvWBVsjhxTfGBM6L2LHtuPgeRpLnU3i1HnZA8kbJvHJxRAHunEzy3ZUt6xbBimFi53B86WZKh4CF1hifQwee"
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
