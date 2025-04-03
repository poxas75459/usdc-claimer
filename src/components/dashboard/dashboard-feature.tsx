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
    "R5uaDh6uZUoxoD44gsi65DcaJKoeTzW6PP9gnJCcfbEGjBAPCKmbqQgaGha8Vhm5fNiMx8V6BsLXzNUyMrGB9iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4id513T2nNh1UdK35yxVfLAFp7kVRCc5aRzVYQHZ8Ko5RFquGJtD45poTYXu8ND6pG3rs7RmpBpUtJh7WbDpWSCo",
  "key1": "2bzhoV1xCNxU53hihCh7eHgfdbR3jb2GgybHKaBvJBHFZTKxSTfqJ9cEd3PujWFLrZndoW4tp8i9vdCzvbMT2Fbv",
  "key2": "2G1u2mfxZkvY2SovLg84E4NfRPKp1LSMmkBeQgWVszRUG7S8WESVqjqxg6oSujBbCBF8AjqeEJaoT3vF5CLfvS1T",
  "key3": "ryG6yxRzPXT9b6HWzWZg5qHADKyjdvqxSVxwxDkVFx98n8oe5VeFaCo9QFT2TyBEecz34VUDu1LfVojqmuQ55Tu",
  "key4": "2gxAr74DpL2r5KXWSVUJtwdC6B4g1xM6LcBY3DFY9NHhg9nFiUZWj8M3Fuz5yVmtuw5L5L9X3KfEiddyRHFnXbtq",
  "key5": "3yadHd26ubf48MkiVLPpbz4PXd9zRN2UTBEPmq3GMYzeArm7xX8qHXTA6Lpi68khf33oi9pnWjqEWRwdAxGSnUKj",
  "key6": "5zmZ1B96dMQWjYyaNvWxXKF6SdKmNQpfbMYZw6N56vRK2GukLGtaVkx2rm5rtchs8AKHmaRkTqNRXmwFpXfZ1WZx",
  "key7": "4N3f3i7ngRxbfEot1kZzGzTJaVrHTV1ythA6kyjNaPzQr83t61qkFcri3CLkcdwaunwVL8JBmjvUAMpP5mBmjJ8b",
  "key8": "2Ttb6i4KuKX8bdE9bL4Wav9w3Eu7rTQxGSsx8uyjcDi6S9V4eAeK3FjUK2L5v5bRK479GcCj8oXMA7kZTcPukijE",
  "key9": "5DWm8Lwsj1r5Vu88TVQGvuaCmHo5TfYUWrQwcvGvS2A9ccaYuxXZCSG2r4xN3MdURzoBeBhUfpbcSSzpoRSdKYTm",
  "key10": "5iYEVgLUW46vcgkceEHNoghUZ9X7BKfDaEqfWwCX6U1pe9M6ZanYpzWrqwH4T7Xz3vCQtS3ydLirwLPcoPSZuFxf",
  "key11": "2o1vBuhugKNHyswPvDFkWTidtw7y4BMWAhxDKDFcYitX9jD45MeN44gc3ni8esVfwNntFvbbEt3RK1pZm2ShyYeR",
  "key12": "iBKw57jCX9WV9CsBqKci2cKbQ7Fi5tu5qdQusj42MCHc2QsrCcdKrpWj9XzBhgmzaoGbwc33rgxwixrjGFKcmkL",
  "key13": "3ENVF11yjmQvyR3k6ofyUfd3mmxidt2k7gHGoNYtorH5pnpBR6ZdotM4fQTxCRXaH6ChLbCrFP7jvSa8CTycRtQE",
  "key14": "7pGJnw1fhPBT1c32hQZCMhUrwzD17MDMFnAwWxtbrxkELfgJ1ANMmNPzuUBjtAYun75JwZGqUdW3p6DyomQB7kp",
  "key15": "3fNVrNH5YR57LJ9evQ6Lhgu3pEtthpee7EYs8BokZDoq874MiAQoiaGT5P5qa3GiRoJzxZ2pbRfaPyRzSJGJUKp2",
  "key16": "pumhdZaMc5CbKt41mUgL6GfmnZxB9pBn58sZSw1fJkeVUusnhtDMxCYG12dpMQ1s25NJRUFzeRhf5LUATTxxYod",
  "key17": "5z46GuA1bKzXEcFSYwTsbPZJHVnn5J9UHhLTaPkdGiBjhBr4JK9AwWHpVtKT9pCZKd5aKrepqtu3WSt6VAahYHVH",
  "key18": "2hB7yCCSTcJ8QUFks5G2QntCyfN6BMyBoSvsmwV8rbAx3nG7mirkKPRnhGewaAvKkKWViACfgnkexQzjVj1YVAZm",
  "key19": "613nWbR6gVgY1kGBMfSchSL4MJ5Wn8MV2nTTn7Wo9aKLboNnqi74fxnGHmwuQEwxypXTGhDThuNfS5hA3ERdyKAs",
  "key20": "334TQ28FugANXvm9FdWRWi4c1hKwcjEd1S4duzqLEsnWmhMww9m6gAhVUZPL8aHqzgyoHkj6urbgmxTziX9XCkqH",
  "key21": "6T3Lza4eLVwVhxN71eHAyhsBjou39fJ7nBtpS7BsK6TkiRahLhgLzkJ6XqHbxGoRe2TwXJ3jppcEg15jaVVUNmF",
  "key22": "z9DQEUBMxEnYTYgwPdpDo5PKf6GBxwJa88uPdDuCNDi9XpEj6X3f7GwASEvsERTpVhR2byk6PUF3gcVdvUGWidr",
  "key23": "2WhnFAoEMrjhg3v7yPMkrB16hGK8HxpQES5RTVhqgz9eeaqY4AVRACcs4rY6Dex6fXBfdTQRSBhMXe86PKcQHx1U",
  "key24": "2Bmc25SmUF2GyM1M5vGR9E3u964JAQH7xh6Lwe7eRG5GE1RGGeW56rfffSgmo3LExhE7m7YXC7VtgUezxoqso5Dt"
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
