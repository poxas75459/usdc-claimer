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
    "567LrA6NTbWtp2aii6csTVYhqjP6YPPoXKDgGdJTQddsVv5ogk8JvYvnZUpD6ZNqo27EgAKzao6aBzpdaTq7URZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MuxHzAoiH4x4JcpkBwWejd6gCrQjSPfdr7A8ZmAM24YE99kGSbVnkszS8xdgjBxGmhqcn28DJUys9Q7w7opvNbV",
  "key1": "2wMjtqY8NmVxXRtpwL2MGrQkJkeWeSENpbFpefKPhC3ebrAS3MePj5Dirju9oLPJvwaCRCcMKSwE6AyV4o5JVztW",
  "key2": "5C3dvezE18GFQd9E7SZGtVarcoSfGqpfGgWLbcaeWAghoUCmN7pKdu2UU53njnwMsXV3vVSomHTw13e874qgioHe",
  "key3": "4W9jQKv15ZmULY6iKRnWZs7B8KHnBD71FMs7kahwtssdeeYdNYN5BwvGnH7eKbKZB63S4kNwAGb2BoGjgHfVaSo1",
  "key4": "5pN8DgeAwt1pjn9ejXicx7zHnwjX8ypadmZws9rbENNrihi6rTVFozd2Ek7Qc1NG7jpB5QR8UYdCssmzu4GnCtsu",
  "key5": "5S2ybELfUKRYd8MpRFZZisS3hZyGxDK3xLGEHMnLjCyqcfa5bBmhXFeEB2kubhPbE6YMhagRBTXPfGwHnn2eesBQ",
  "key6": "3E8KJ7HA7y5vEXTPixhTrmyeXcwo7eBRx6D3kb5PEPRW4oqHarxSuqQA84yhehpgHzzF3DHm7oqyWtTZN5TXMdFF",
  "key7": "2jpu6EvFW7p3EdYMwEAofgCw2piirSZ2AQF9pGC3usg3ibRdoXWdcHitnhVe9YA13ySfnEY18xqAn2EC1hsYDBXw",
  "key8": "65piVmozgajKFVsYdaqqmV9SPGnntf5MX36qE8ynrubznDcAhzRhYuHfVkC52RyJcPncQmXu3LoJZnWUBSbWXwFx",
  "key9": "3dDJPNMiLtXSTUqn9bKKzA9PEED47WChKSBh8qh79SBsvohPc2umUTDuJND2vknCfm7YqtaZSZqx3uTK2j3rYdXv",
  "key10": "2X325U6qQStpzvwAeZekUadjYNHmRZPddfr4xhH2amq9TC2qkeCb57qE9k7FygungHkUBM7TZu77KmGakYq9e4wn",
  "key11": "hdbdLLyM3ixC6zj8yFLCWbpJybaANjY6A1NbirArdLZR7npp8n9xf3fhs27iZFdwpF5Wyr1Gdc5Sau49coKFegj",
  "key12": "44PuPWfy9BMfN9jAaJfutjLmq1Sz9APsZj6k29mi2fXYYnbQZdnFjxz6zAoLmTX8W7avGJXcpAk2j9L9PbFd61EY",
  "key13": "28LmLTSsMz9YroKySv9Xo9gWoEnTfbUPJwkEd8Vnhvy7koLR9Nc9XwwtBCdVQhrBNV78tRbweybGL2hRBFmppRLY",
  "key14": "5cjryVfCnkCZxT12UAL7yeYbAayFZwvsRUQPAKNHs9ZcQNCLkRiZbm34Ai3QiTCKbTW8CJSoEkwFCjBxGtPBBJCd",
  "key15": "xdk2T65cUg5mqVF2EmuZtac2MYAPzvsz1P1LsCSkG73cMRWJP5HvzVELgXbzCXQweUt8DzxmsKoiXXxwevUQFkX",
  "key16": "VchpHiDbRW7oLyEghCvMqkZ9tqhyZDgj5AsTwmaRvWAgmjhXAqzkWKcw4qybVajrNUjoCKGyHrA8edANERyC2By",
  "key17": "3Vb8UvPTzXeE6T3veDuMFvgxBfTv1nbQ7dTfRSrwDkKmyqbHmZWsNnDoJuZ4hJM2QChy429jVdRPu4x5Pfbcz7Fx",
  "key18": "3p3LDuV17QPJiugkqGJbdfy9fXcqcZvSs6vt1ZUqF8iLeusjjFHJ1ikJJ3VMFXN3ZhtqvXDHXs8w9S5Y6hBmSFC4",
  "key19": "5tJ3Zjzo4NwLWk73XPwFAroquQRGjtyYguTfPuMAAggQjn1xRu4hbXny1HRCiy4Mhi42bKBYDjby39cXP6efA4mk",
  "key20": "33kBsuTQZ8Y8KsBwcEKJ99zqzyLuCRrq2w71yJJGyqeecTEobgMDUCGKYoPbwqxWsM4noyWW258Uq8SdbCLRHzxL",
  "key21": "4sBY5hQW9sGy8bxpK5ttpr2xE7GcAScbG7qW6UUC7is4SR3jRRSJn2MpxznTMYARUi9P2r5suMNPD8D3ettBvKUp",
  "key22": "2A4qqovMrZpB8YDfgqYnWdLrkyddLr1avefnAmUERktUshbWKbyepnkZqW36W4h5gix4wD2E3N7Z69Z8NJKFuZFq",
  "key23": "3tUVo3xW6GQhnomwLNWumoMULEAfYBDcmRWsfYkeq2P67LZJJmt9JrkAV8HwbDNxFUnyDYGViTZqKnby9BujAr6x",
  "key24": "562zQRGGE2R8k7ZuMjzodZXMKit9o5i2KzWQCc9toX1f7fGUCBCBAAJrdRwhh6FcWYVByVJffcW2mAth4mc5nuNC",
  "key25": "5bFcsxzsvUKbCtiqYrsn5MEXXxzRNk3Dab3wdJDnRMwqhCNHCbLuUVBYPo3T3JL6mLUxPftKdiZhdXptuThN7nEX",
  "key26": "4GAp8we7BEdTDL8rDYS4e1VRqCwu8wubLqb9Bh1nMEQWkrCza7E2EZG7i2ZfcPTQfuiU8teo3kj52bHcU5Rh8iGg",
  "key27": "63Fyxtfv7gaU5JEhWqqxeRjV3eu2VYoUTTn1ubvBLEhci5hGHjour6V7vm56uuoyv4ZFAWFCmQYyrQJx1YC3c5j6",
  "key28": "4BSfd9nTKQ7VajrnVQ4KJWbeBi2CHZ1w58za7YcC5S9wE5f1p928S6ZHRQGYK3svynxghyie7vHozwoDGyTgEW3D",
  "key29": "4N82Nv3SYX87PHXfaYaxsQs2UPpTwP9wR6TEJcfcw8qKwFtx12VKwFC92ZqUo5Y6QpuXU6pMk2aA3QGHBidecvdR",
  "key30": "4qFdUcGzVwJfGaXLkqWXDoBQmozf33hgt4ywhDad2uQ1c87bafPrKWsYXxR2EpT5Ne2sCQMvB53JF8iSiegvwwm8"
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
