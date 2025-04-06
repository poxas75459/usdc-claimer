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
    "2pPzWrCB678Y6k5S7AiYAYdZeuVXj5PCsSQEEaRgBqjZ8HcJYWU1S98YWGQfDLN4yobguEpjZi1JDpfrfDgVkeex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYWuAbD9oM9Q6j9Bg7j8oyTaE89b2uvYgpAtzx9S7xLNxmBwECK4PQGqgyN4gKfFT6b6FUykdCJnQME67MsEwCv",
  "key1": "67hWboAXCR5CAXymMJghdiR8tQ6fjC7KM8q6kBxj2dYKCZp5k3ru1E56tWhWLCER1GDrnYwpCKxX1TccMXhKasT4",
  "key2": "2kYp9okw9u4NvGWXrCgsAYMA2rxLNvMwWjzSZg3zwF7NNoTat4WKXbS75gry7qCLoun5KGyGRD4K3VvrbdWnPY9P",
  "key3": "2x97UR4Sc69UUHJyKjoNtpobPZt1Lfcb3tFchSLLLKg4xAyVjjq4NqG1D5Fuzmk6Wzf7e1hKgkEUEejj9dpw9oE9",
  "key4": "3Hio5J667PR9jafNEgZq8X6JqPfzH4155Cx6KT5vWvae4XithK6D3AHxhBNpmkHU3MKbm5Xd1iAgX9yen6HhRpPM",
  "key5": "3jjkTPAFNwJpJtXnywxeWT9TANYUVJVSb9aPhBXqMm43C3x5vmEYVg6wMCKx3V5eAecp9bY9vCeEaZ58UTRSv8Nd",
  "key6": "yrLvgfoU53SWPm9zL53g7jh4gtTi2yXTyQj9zMWCrbKLFhvHnggaCb7YPoX5HjAoSsAJdGV3qZGHiG2vDKDgr8W",
  "key7": "h5UscBypiyvo6LwGfNSabH5ZWM3CQdKZGL7x3ATYnNiTRWDeNnJmqo2FFKTpds1S36UvRthcTf8k5sZ1Kbe55c8",
  "key8": "biQLJ89kVZ8e6uXQqFm2vaAPSDUMp6MCyMVNLEkMyXdP8zKP6Y1M4QFtsiuxm15aTfFbU4EKkrS2vJT5H94Z8oD",
  "key9": "tKdDwU6WTPfLXPhJ6XPjL89DaFqqu9htyeUdpiBnyiT4K1Cm5ZDfrNmwjhzxqcKWohQs5WvuA7wcqt7xXV2pUXz",
  "key10": "4Bc2KLday3VTj97QEvSsweJRtkJeK5h7jstj1hAqXbwY6N8dGwayhYYsE6N9DaK8STws1ErbrTCCkbShJ8AgPyiV",
  "key11": "5xp3EjXs8uUer7aFvnLLP7VPsaq8GzA498sMjmL1RDbWLm1Njm8c5X3TZxMPSwg7jkW8GwqKJMsGUSYibtjCcLVu",
  "key12": "b3HLi7RDUS4GtBwtsKcxLKosbdTdTuqKcvui542DH56dydkTTBMmZj8qgB42jwo1X9QMuKtyvZ8MTzbPMNwLFWr",
  "key13": "34DqvReS5qCfapMvsg6JueJqcrjNSxCSwiXEqHxzBdPGpDVX41gAy7hPm48BydMmtU3fumbzXufUCN1MsaG9dMcS",
  "key14": "5wwShPGvvN2Hg91JcST5rZsJhCbFZGHX6uemAT1fkZxXtsa72vhgMztjEw6Vp72QCDtEcXb3UAScgodbLRLyATvd",
  "key15": "2hxvoCRNbyNX8Rrwh2LRmYVguteX8FXzoo2pJSircimXf9M6uFxAw7Y6x8hBmivHjPfK5tX2Eda9PAx8q7Z36nLq",
  "key16": "31yFx5bbSCFkArHWbfr23YJ8jD7DY8ZuyeYKigtXjdu3eC8W66UF2kRbY6dgmeS5Cckn34fZw1XXk4yoxxUUo6sS",
  "key17": "LxMu9vnp7ugztyXfht5n2ET1bHTSpkBbwY1vkxedNMjZrmwpfCduG1ymxDLMrU36NaUHZ8WXNQVWRZjHAUWWuKJ",
  "key18": "4M8benTihh3JQPboKPedLC9FWZsfp5nFGT3eVxpucjDiEJiu5M3yMMqHKvUcZhXUjE1UwgCVZysirJfhpKgnQLMm",
  "key19": "bm9tHNosiXVAmpDz4JkUHjuM39k6qtDvxexFysECAhVTTXs6NiFbGy4UKWkManyroB2Vvx8zLEYTQZa583igP2x",
  "key20": "24VfVRUxmX7R2FygVzam1Cek7EvrE13MR1AK2bfownHUuZGrcEZ7cPRFXDW7ESY8LhZ1pXmJvabwFkzxYTNwM6Dm",
  "key21": "26GSgcxPjhnDdjkg4HcbxhPA8YkocvLbsY4feDaL3kXirM4Hs7WR7dvn7d5z1V2E88obWbMLZNwg8uGC4aYp2fkY",
  "key22": "sLn5antXCbS5ixeXAVdveKHsDbPCruVPsrzqFfjoAFV1y5TrtLtBMkFiC7MTHK1aTZNAjzc3ASBdLJsKQt4J81a",
  "key23": "4T3zkXcU2ACQidkt5L7HP8eC8tQgcqWNsLwG76i1KGEKPnFfPxv4xZ916QdTsqJKGprg6jqwSdRrTaqXAAMVgNTB",
  "key24": "59ZbHNEwXc9hSDJqJtmZ7yMPXwmchyWYLPWqQ7nTAnnmcEAwMC6kKFqnnQNBEPiUMyxhK7YzZFqvPQ1fhj6W7H3B",
  "key25": "3qYhqGbVzJ67neUgTbzQN4dUZm8yQtnsRpqcHQvq41VX9awa1AhejAtPFZcNova3jzkUR12XzJnUPqmXPAwsX1vv",
  "key26": "53qZhLqmjQEeYWbPa8wgpDLW2k1f8YcDnzbH9nMcjcgkg8NLLWohJjg4GUs3NPjtKKwXKbXfzsgJtmg76TtwgQag",
  "key27": "kjmHdLTiN2ARbWuEcuyGtxZTuzCUK2h2MGwibCMrMUSkUpK8Vgfv6TCyFRmKKQkw3iqjKGB4Li2YS6bW1GyWFm8",
  "key28": "3aUGvQmw2QCfQgGhUMoYRhyTCAGwcneEPdLs9Skk6sKbrf5X5ZmW4MhQp9MQfd6tq1D6RZ2q5u1gNKEtVYUmXewc",
  "key29": "3dDNEL4PmQFXeQb36oMP54gs2sdsGsrqXBZ6MZ8AuFqUS562caVATw53Cmt4vyGG4cNc1GY2DJyVurtRFmw3W9a3",
  "key30": "NP7GdioDvK9MRD6Cg8LbEd7w7TX2f4GznKpKYuyDSAfJzX2SBE7q2B71eRB4jdpPvpCH5neD4HaGRpg71k2jJP3",
  "key31": "4tLz7X4iVQcrHb8SUW1rmgyfGb9vevvcZKuMbbUK9zD1ZrYgjH1JRuQZWyEKisJArWEGfEGHi7NUGZeea3dsVE3j",
  "key32": "2kv97gPxkJqXD98cv93xsDiW8XzDjXQCUuwuhqiyQR4EAiGEwGoQzq5qGALUtbu8kR3d9nsQaBfkRkpbJP4DamhC",
  "key33": "5SAwPr1PBFvaMoU5e5PvtXU9kF642CA6he5cNfUoShD44Xor5WYu9QvfAZqH11YtM8eRmR94Gks2sPDpfQuHeXeK",
  "key34": "dCcCdjazwiPcKFrJPUSduUu3SBmy8W5r5v97yJaGWBQQVqPTLTERxQF6YMJ6vzCYL1vSV27kCLdwsGDZb5Yi6uG",
  "key35": "2jvhtcRAvr8vFfaZXp91smkZzXLvAiggAjoXuP5p9aEoGkTRBGpM29rQNxedywsCbDG5jne9aW4V35jNzL5TzWG1",
  "key36": "5dkD1uBVrRyVt8pS17VPZoWR4gKuNUkQjpPbN13j84VMbYWQ6Sf9strasqd7h97xddEoo12dHqa2bef5Wh56rKTe",
  "key37": "4UxMnGKoL9qXfdpkTUvqnZBwHhs7RQxfScckunUeErQtymbNXu8JaGWms8ZAMpicaxULEkxibeyGv75w3DYbjgR8",
  "key38": "2hR5vQbbPpewt3eSZSHDwRDZuC1SZhVcZCMBZpUGnwJRkqMAjLK3AVrgmZjBavHr2wwxPkmaoWhuR5kCmsYgK2GJ"
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
