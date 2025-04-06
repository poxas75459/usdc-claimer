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
    "5Ur3jGsB2fytUNciyS35McMr4qVP1b9FBcrDHU8W2bQfHS9rojwQgCAeh53KgzVHsisDDd3juTgeMCsnWvwmHcj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcTbKz5DVeHbF99unfpQ4nJSCP4ojQwDKMDh8wCkXsCFjfUAAHXsNf7mfj4F3dHXi4bsj46hiJ1ttiifHXauvyq",
  "key1": "2qMCiHzKrXhE98NKrgRnp3cHs5ihBkL7zYisqxYTkZv6mJ68r7sjyCvB2rsvXv7Ky9NdFMwJYVKdTYaCiXmUMCUT",
  "key2": "qpqe7xfMfPJmgcwRLDKHwqqYQBrviMJmseHH1yBoSfnhq9o824xEmjdt9wf6n1E8NTodAz3ihZJPktfXSHRioZn",
  "key3": "34xDg5QgZXxLCSqHDJgQweFuStQcTUjZ6MjMzUQQYQPxRU5TCB9S6BtKTCboW6cmwp1QBYUjFNc2jsvTqq4Nv1dD",
  "key4": "4444MTqcSs1m37eQmcJF8Pcw1ESUw6gDEF3VNuzX4UtKt8yRxzcqu756LeMsrxEg86susPHke1Lh7UvhQGJPyppA",
  "key5": "3pUdNkfQLrsh7zmk5wo7bgfoRCTLQ7dGsNsgt8GQjgZUQruYFrWxPQPt7hCFYmDWa6B7CTxzYr6bJpwDYusqCywg",
  "key6": "67Kk15ue28pAACRgvYLXZTkAGMLqAdkEiQP67XxHNcSegK6ZRBkQKzqGBrQ9KJ2H3UVqkYavEybUs1Sfgy7U5HLR",
  "key7": "21FwTrHdXWBUZCPLH3o9e1t8n7gN7bMmcPPAVhNBs2PV5hTppkSj2Hb1K37ynsadye2BneTzh2HjG6e2cR3Fnasa",
  "key8": "6jZGFZEbK2tqEdF4oo7qWL2ewkLiz2ok6PaLeiLMFVsrcwJyFegXsdjfVtjgKzYbDsaGmHY6RvL9Fvez2o3YK5w",
  "key9": "65NoTTZbyJzkaxaCfFMcz9VbPP36Rcx1dEC1gBuv1J1ez4bCZpAB9BLDk2XTBVTigUtcY3ZTyd7X2tyLvUaNoewg",
  "key10": "519egQTtURCdyspYDxsKUwBVysGtUgEzqwx8wBnTGsgB9N7xPKz19h8buaM7f1fFSf1UMDVJY6xggVDAbh433ZKJ",
  "key11": "33ZheGE7HRtzp2YixqTuScR4G6v3ecdx1zoJqT3QBusNiiwBjkGXNoQjNkvQUZBs6qmRTdHSoBj98Uk2YQzstjUy",
  "key12": "4wDy75yZQutspn79uEWQtch7skt5eHhrbHCzqiPUdE8ThMNAPkdZa9ajoWer5YAgq86B4rKU5owDue3Ft6FP5paM",
  "key13": "2mdqvwP9WpVfZ3RgKoV4i5boKAGkHhWdzAYhkrFywxh7abXU9vGweeKksCHjAkVZEZVfUjhvJBGgbHKtereARo8p",
  "key14": "4a1x4ocevzHMJzpgmJqc9C1ptQCyvNJfwVJgPcRfMBHZZzEGbe338y98rmNenRaQ8WDgU2ryjsatkp8qQeArXtFW",
  "key15": "2TcuHDHxTVDrbW5655owM217MDvoGX9L59BovCaFdStXVjFeZ2X44QAauLkbGAmNbnwy7hkCg3QZ5btwxDgCiLb4",
  "key16": "2Y6FxSHeQCnp8GjwD6WzyKTvPxgYnVvH2atPKvso1LUQ7wKUCccxYFMzkdNuvspdkkCTVHQ28W1VFWEVPR56oqjD",
  "key17": "d1C8z3yzGduAFHvgRR4hPNaZLWx2pePKS6635Bd6joBH7UwTMjZSqnSPMWQhAP5fagR6jPcSgQdre9hTdzDkvn2",
  "key18": "3eFLXCTTspuHHyudpU8nYhqNY25saS3V9sRR7dHQj8s5GttvTybn3MFveyTyiTWfmV6DpbBruFLtw2Zu7WNVVcBM",
  "key19": "65Hm7RDG3EnLi14URiDJgkpfXaWHYhSH45ZzQomypQZhMSr51sDY5SuqjjHfoRh1dT7vyg1DGdv9E7wLFRdeU2ao",
  "key20": "5ekqDwhmQFNRxD5cmdjVCAV5EjBrQZt397MRFiLJwXdeqviAt42kqGGxVg6WhFTWTYYENbrTtJNL7zpcVD9hByNN",
  "key21": "kBF84DnmHa1tjzuK1uDEGB4pJBEcfXth1kVG5qDUHUe8wmExkYdgri8aww55gEZQzsT139Tr5HKdSuNv7RgbrUj",
  "key22": "ZPFUKUGQ4vgnxNUbTRpZp91wwfjLmBy3kEK3Mod86BuaQ7VeXVUJzceBs8Gyv3LqCcJf6NSmkwM7APnXnTKHAM5",
  "key23": "QpEZRnXBKoeKFFihWGQEYSTfD3BcstdurQ8sMWBZ3v6CRqcFKXUkdVEpNHDXx8mUAfLTqRbZhgFCy94sJNnJYnG",
  "key24": "3ks61dXkjUjXmr8DVERHFmPFizVuZYnAZA2Fu5J2cuXzv3Q6W5bQu62qU37CL46whtDzAkNtS4xGWBUvcskwRwpz"
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
