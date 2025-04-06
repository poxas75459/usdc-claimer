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
    "3tvvTjs1jYgusrhnui8wWNCZJfvwdX5RSPvFhRGM2FdET4XobacHBvvVZzodDjG3DfjTc33miKtrLw7vzqtuYD8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtciKAuPxRdFvsMCi8UTGyGTkQB6nJtLmGRtgCQJ5JwrrCteg3NrYYSzgS9MWUC3x3QjRucjMJs8NYeGLiTkS4E",
  "key1": "4ELds929L2RHxkr6ryzVvKugoYra8hrxScHR8FYEZUpgnBt5HpYc5jevvoJPRwmcNCRwJprjtmtj2YZy1wC3vbgB",
  "key2": "3fRBacAN7SLmBPSEKLU9aQbpk1VdL4EVZ4yCAn1ASdzoRnCo2NW8vchQ4xnKeR2qrmf7sVhrQNLnXtJqbygd6Fqg",
  "key3": "5Wx9uCEXAmHDVWrKy4mASLLkwxQE5SejWq17jwPKm58eGgPctGPYwZysJq5n2t8KTtygLnPyVCzumKHyzonRWqhh",
  "key4": "4p2xHk4vUPZhJaHkfWfzAZoixBaAN8QYW2PWaFAMKt7hoAQN7dzx1oVjT4hxHUpfCoPZNfkGGHY5E5ZarsURZ3Qr",
  "key5": "3DrhT7Zsq8GtxnKMSxjw9qmR8ZsTuv9PVkwawqjZ38vyQ96RiUitwxNPAhQDegF8PoM1hcu5PjgsYYDHfuMBJj4R",
  "key6": "5RseQVVg3PuymJVLu6EW151oj1VXjPd8VWKhgAjSVAY9n5sSwcc4WQNGbvLM8BHQxQB8gT5bRC1kAZUerPAdHzrm",
  "key7": "5brmenQivT7he1PNQu7c4x3CqhKzjNobUMRKxkZYCWRPNtzoKpQLyEBbDd2eAzg1otNJJCGK5Rmi5oRrNSAM7gss",
  "key8": "3s9ZExkzkWyftA3Vg7zcPm6uQxVkhWfUG53Mp352uvpE4xZ6fkbPrATQySbeFVpVWfezrb3Nq7LYrpZVH3Z7NHoy",
  "key9": "39A5e7P1jZvckKJrGXhJC2m94XAusXyE3QajtHe67utfgpxunmfAD4AUxHGzjUZqbcPhT9sHcoZoQ72x5sTn1juC",
  "key10": "k6n9G6B1BrVwJqUq3m6p7DR24yQRhBts1gPHDzsCCdGGeBGBowYtKbyHgVYWm7UkMvonfDHZPjwpdN4h6uhMS4L",
  "key11": "3CGz23Fw86XZ6Hz8EUUmBCcoD2nLDnFkh58UEPFH7euHuiCXf4JkaS4itCU3G2iZR6jmm9RqN2CLp9oMfqCaDRvo",
  "key12": "61zqghY77LW6z4E1Ai9S5BkT3JEkM7Hwd2RBerQe1nWNeLLxcTuroeRdPKmKyXV97jQajnCrC74nWRZGdDgcqdE8",
  "key13": "2eopxzp9WdMYgksSbyzVbhzFNJN6HhCFpxSmYm3kNdFor8j5QV4pAbXjmKfdAKEwvo5PHdiC4pyPt8qy19UAF2oD",
  "key14": "TpNfkUAKBgg3PQ1PFqGbBDv2RSiAQgdPVDEUvceXrPoAgARbPS379f4VUiwm6yZfG7EFCqrerVGr964gVNjvDh6",
  "key15": "63dYYxhbR84N66KrweT3iY1caA3oS4hr6Cqyd5L8o66rJuXLgci236wHeGYnawgHgGgG6kmGfCKFe2TPDheG1k4n",
  "key16": "4f9w5KdJPHrQrVSsX4EqjHwJtLAAbox7aV27ssvh5JxeqyxYpkVZXUm4te8fYmdVVSW1gzwXR4h5cyb49DfrNXzq",
  "key17": "2Gey2fC8iNgN3VrP6gs1puXVXkeYFEREpaG8stvsCDxmg8upWijwt5t8TBXY7VN9FNxaY7s16aqfmtcvD1xYA5q8",
  "key18": "RmQCs8VAPr1kqtNDCrmBMW6rv2jLDvpBCQv8RzNUAqPRM3ZaPchdRCucceRw2YfbLcpFqkrxXYQKGEjSzh7Mpxt",
  "key19": "26g21XRLGvxpV8dgYfFC44i3V1wNbrTzE4rj8JvaMQ9K3ZpNnvLS13C3mB8kw6cKwkzEHVggu1LcQeYnfq43MgUp",
  "key20": "2AfEYzTLnQZkeoG4iGcww6qowcTizMK6JYtfbst3pGGRNd7gNgYjn8THxYxt8YWhZC9fwGkxjn5tM8RRhStvuYtx",
  "key21": "5TLZRD1wSL84LSaL3Emamb3gKzpuVnYx19HtwZ5v8G4nKPJrhezfY4tLtUfpxUXQsjomsd7HjwiHL5xoLsYh9vZo",
  "key22": "5zz8q9bT8z4smqkDToEoih2xA6E3e8Rrh3ZuXT6rmorXa4tTNfxe3W6HPpcLjPFsAhwfi18PZhQEqXRhEgZbzEMQ",
  "key23": "5iwenf33SsEAXUVHGwT3RfmoRXUx58JhuxfnNG5dV8M6SSEFS4t6wAMPHF2PQGdfJZonR88ZcEZ7Kcb5Umu5TKD8",
  "key24": "4ye4kSDkdgVh29Vg1dYaPifcrCzawDszf6VVf3xuV4VBKP98VDRkVLYZFBpL7YP6NMveoEdL9uNpPM5kA9MyoHvf",
  "key25": "3kMzSBkiQwxCasnpHGUEJsmRNqnVJe6N4XECjDLtdamZGyQV3kXvuKAd83d1jw4sAEHB9BGrWGeoF9co5VT4Lj6b",
  "key26": "34Pgt6NLHfBtRvCzKkr2euZmHahjGQkb7LTE2i1mjAF7cZ9r3m6WVcy9dguRE4vLaZxgntWkKpHAGowuKmYMGb6m",
  "key27": "56tPFUSTHQX81FxSsSu8SahGMLETLMGczBiM4frhMFdpDTM5cwvKET8h7kTTMkg8K9zbGzLXZB5DH53Uctefzg7V",
  "key28": "2br6PBvKrwsbqL6SavFzVyLrQuuBcss5iBgwn5BV3m1VPp9kCBee3hbpu5AfUCwL57rcPSioQhtroUUmGgXWr3t9",
  "key29": "mg4Aau3CwQu1WmABYN8sCDZctqhB1yQCt9tMuoqgZwizCURH9MNLm5jZXb739DLnENsCNuApfDF7ZdmxwKs8qbv",
  "key30": "5rHAeVctshQ9P8SFo9fvyH5Ree7Yze3w7nNJCKr8gK8VxYYnDmqugmPT8xs8uEaTWzv5qonr2p7Q1g9LWVLukKAW",
  "key31": "a8HuVVGrZam5EpyqkYXYEETrbjK1N872gdvjNBYDdovwRfM7jNc354eXVzVR8xYGwJ6CwtvgHQ988YureB2DTJq",
  "key32": "2NPCVLFM9ZQFLXMQpJ48RHM7XWtARkLVPvwqMAyQrMsaK9wuM5GePicjYmFbC6zHWkjmRJ9PLwRCsqhqz5wiNc9u",
  "key33": "4pNEj93BCb1xiyQK1DURB54XoxM1ddujhwD7pAT7R1fwdmJtBeyzfispPVm6zrz8anxcihwMC6ZUVarrNmr7R6Ze",
  "key34": "2KPNDvgPsKnoa2JqbiepoN64fVb2B9UEuTHyQ4psknDX3CoMnjDMijBD4bCpzJbfBF3NuRMDX5qNToxUm9XFJqsR",
  "key35": "f9tZVccpR16dRs2ri86LeMPtntaymqPuZjLi9gPud3RGMumZiaWZP7oxvR7D7xDY4yyx2KrdKRkA7JT23iTiNaD",
  "key36": "2YcY3SUvCrWWPz6uqysDRgaG46KrMzLFkhVNEGGkrab3eb8ziEeq9p15bkdy5EnVoQ296wiEWeJngEVHUW5PorUk"
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
