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
    "4UWvxkeVjp7Go8hoQhX18J58RJ35fsEM7x43crtqpVyK9dWa1v1krcE8mEM4qGp1dQ8uR8KQAAAa93sKBbT6qDXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVocVVpjqnR6oXRHSMMSRFKNb3SgGkh35sBFKxspLEN1h7ByQk5c2Kj5z1ADdfzgjunx5HWNk5Jt58VhEovzfhp",
  "key1": "2nQ1GA9D8EFhrZAUQfVebHAy4Gmr72uMv4J5e32wnmX5DMrRsb3Cu8zRoKLj4qttW6MntcGZao4UukUc4nqLooiP",
  "key2": "3FYMip1cqauGMR89M3jJrmKL1GHNZJZKNWsujG2ckWk8tYx4hsRi44BvFPyLG7HaUg8bo3UR3EvzRQTkeBjEVTBP",
  "key3": "5714Pn6fN8q6BzYaXztfoGXCYS7vrSpUMzJ3wcrek7HHxeKTesgYJZ8e8D3tHV8UyPYyVKGxxiiw5PfxVQfhKJrt",
  "key4": "QFotdafFKsSuEam71AiUAPDEmGvKEGb7pmeeacKBj5ZnuxKUMX2BCbyZJnx87x74b3dQwqxNCAS8cJZBxSnEU4i",
  "key5": "5YQ35GExTtAW9FDJdYWE1rPgXxSSpNbZfpuEC3E68KBkPNozP1H9E86JQouKp8WxoXQxeYjWRG7XK3Hig6VEyPGd",
  "key6": "5rtDRMRBoYS7wwTonmXiyPV4c3qZRZ1bQtuwCCkXUoE5M4zC8CKQhDrR3PTG9WCFcbdSR7fM6Yqa18fAMNc3fYN5",
  "key7": "4h9vwZ7yHBvrFr1hB3RVQMtaGocY8AtVg8hfE48KmNMmqp7jmgs7cZ6dzpsJZEVD9dGqaQbuYmFugMGzzKWfAXZu",
  "key8": "3PPwmdsVjs5HsEfeLVX2KxJbYsYD28C8P91o7odVJPHJy3cAAW1T4b3b1FNFyGjbpqvV4AhNLFsjLFVTrLD65TLn",
  "key9": "4LtdHxoumXSGWb3WvsGoiws3UbriPcoL7faa7VWfL7pVntE3dMPcP2dEsstaJmNE9rRL5NXfRUegsNKzFYFDdnpp",
  "key10": "VTc695DTYU2sPeWhrMx21eJ2s5q7nNuSRxh3vzfgivfQjhvpxe6piBjG8BKYkQNXJtt1gYDkUMQG7P96cVAJxXR",
  "key11": "35yNGcDAw2GBkLgDfmXr8B3WUGhhB1m8wfZvbqaskkjszRiA4GwnTuFh8SJVK9UPjg8o28zWmzK26FeTrwW3h7am",
  "key12": "3xcQE6UTW5W8bJ3UGinskCRLqeBabQKh3NiQD4zr3MfMfQKvA9BQjse57rSoFQVN3fJ22PyY3mJDeNiZJ5mm7QLe",
  "key13": "2eY7SuKqT6dCyRkNiiSUZDHhcp7cT5TvAUEKeNy63bQFETK8sFfs9yncaF7c1o6vNdwJbfoaWdoAj4d52Q3HWoSM",
  "key14": "24BhXhcYQnh8jPpAwkvhjf4xF4YUmvyPjtc2dAzvjK35LdcwrMT6aVRNyxUhKYGfm9vy5ScStUVZF6HZakKC3qwc",
  "key15": "4BsJg1bAmpoBTJ9SgyyRXTLH74sDmoFKL5Cky9j3vaZ8mWCLCBXdvBF5K4XDCmHAUD2qdnz4yZfPLXACeHFqw6K4",
  "key16": "3Wr6sCB9RTuaVhQiLvksiEn2iA2YRqr1D2SqssigP9TTdJjDLDGmY3sucgt17rUJqvQ6osjnkY5xT5FprXRh2Yte",
  "key17": "5x1ypKrqZUFWF4tfgvcY2y9oEeKm6TMmYTqgKQiazg1kXuxgfQXYt1Wb2BCGxFi3VcTLnWjLPviJBBY4JDkPbKSa",
  "key18": "2s8N58kGQnLeJjy8Dbce49cz9gQvPb8uuTBrMCKY7V1M9CBv81EmD7Cvm6aBGas12hW175vWGQjt7knimed3e9Ru",
  "key19": "63FYoMNjUdPXqWckvdQnuncgXqwwLAtLYG8f7KbVe5CnXWRwEHriytXaMB8QyARXTHmG45egBk7Wx54C4EKJGoQ3",
  "key20": "4mUVrEBJCYYrokKLs3NhXoURT1dmUM4sC4ZtfdeJwNiG4gVfQP2YRftYrYLt7MXVgmXf8Nzicgoxmhd3NstYVe7K",
  "key21": "5knVKc5FwBtCkt5v4dEdUwmk6SuFVf5N11soEQCC6Xkzdu38iqLujDszoHVFVVTbWVpSFs3kEzFkeP34MkuEVvWA",
  "key22": "282pRa66MEoMZnBeWRnk7Fb6f9ZC28oye2zZ2r3u9fpQCqgjzAEvzmg3uNbppnNdqfZ3H9PfNcxePqGJ2W3Be2pp",
  "key23": "43cpyAPCrv7gEzbGYmrHi9mmHRhS6NDzsLq1nbt3hHUi7QJi3awjD42T2HpM4SKbu2zkvVtHmJjzdq1dLUwb8SB",
  "key24": "28jKmzUW7r2A4fBGWe9xvFgPSPn9JqnaGCksbJ3P2PZG8My3DxPGLisLqBh8Hm5TdekAhaNjbJGcqQk8T6NyrNf2",
  "key25": "3kVkYw3qegmj3rqLX4iL8kREFanQDTneYBXDTGX5Vmc29qvkYoEoJYxREDJ4SUxg7PbpxGEkyxLpfqpwRR44LySN"
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
