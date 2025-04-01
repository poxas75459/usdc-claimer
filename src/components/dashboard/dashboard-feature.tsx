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
    "4Agou1qq1VA1ANFGc6pcv7MimHKAeZjgFwfKrDxXWavaS3aC2WZ5oQa8oELyvqMup5mGv3RCNEVj3M1bAYHU2jtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uynJAb2qP9hYDzBEhhu4MXavL3NNB7zwwEE7CNoWrRZvv5VYd57ybux4GXSgjMJkVzUYK12vy4H6Mk1oukzyGtA",
  "key1": "2nSbpokUrFkHsxCC3NkaJNtQYRFH7YSHgPBYy1tmLgYmFM52proWdfU39Nm6yDH5LQBfc9aq2Mij7rrFjR8fEuhi",
  "key2": "4uV5uefP5opbBe5TjteBMi34oyEKdVyLJwTvyr6Bf8E5FmHoMDKVfQaaU6YKqcvnt4ajqAvv1TGbBuuFdaNM5H7f",
  "key3": "3zXmH6UiiaNUAs53VNDfd5fqLJB5gX9RLw1dBmUUWx1sSDXxUsTU2HFiumHjPzmsheefg1LbuxdyUy6khAfgvyqq",
  "key4": "3gAzVnFMELXvWALgkaaBFVHzkZPQrTqrirotdscWDuV3aaxF4tDs2wJjTnvNs1NNt6n6abs964Vrb4ncxS58oyaw",
  "key5": "3yMv24ppxRjxHxPgmK3cC4jRYYQo6KWhW8maHoYJRPBRufgB2CSit5wCc1m5sNtFJkTQJiEjv2gNSMgX131Aszxn",
  "key6": "2HT9dqvmPkQJso4d59rSXvStsrZydrvFPiU2A1gVLmC1HHp4fJui6gXadXvSCWhxiVLsL8S7hJBcjTBAtahVUmvD",
  "key7": "2rRDMMjzFRM6631tSkoQhGM2Vr1N6GqpWuJLtvJVQBrVkgNHy31ct9NRmJKimC8W8bXPMDVwLToQdeqYyjnfeZGb",
  "key8": "5DHMPfURFpqBTRPA2UfHPrRnc2AiJuMT6vc5WZgrw7BaKVtfXaFAbwMyfkYtKzC88Q8EngwDZ9gBvyAcgW9SLSTa",
  "key9": "Ve46m3vTFTf5rk2d5DEUuvEb1BK7UXXupy6VohKSYCbJzZtrKiHfULHPjCaqXo7vHxYSkFCt8hEnu4MyqHGdfR3",
  "key10": "4rH6dnQgBjXoyzKYj6ZNa8AdUHLrTaeufeN4P7PTrhdcpouUtDDryyBJTwb7iPn2Qtm9Tg65DvyQUrz3rfEPqYVb",
  "key11": "2yP1ipN8WnY8gmBTSBQuRV5nnfZMGMxtMP2w4KcDnB32pv1ByyHdnMnKvUU4QBiR4x2pxTfiQoMzjn1BAHdidcm7",
  "key12": "4khuDvPdw8WwYGmgZSUksLakppQZfK5HsvCx9XXfcykhn3M9pyQptWe1848bJm2PVXkFY4zorY34NutQWNSjWp5X",
  "key13": "5eGZnaVvmCcH2d3TXzrBFVejm5bA4sqvjQdVSQgAeGRmHnEQyyZK6csifX2zNiudv5T6ziC5vmPTLTSrFNKYrpJY",
  "key14": "3JwtPGMZf97n3DN9RrGa6WdLZjcNn4nMQCAJ5p4yCo5P92MvjUJ8U7SpkEKxp7cbbLYMMZDGpuTRVdZXWLWYX4NN",
  "key15": "5125ACo3Nus4FZtevu1LQ5Lqe8BcfPL67Cqtoj9FXkjSTY3oZSrPgmws966wYdXCvfdn67jRRkHGySeG2evFgwea",
  "key16": "5JCn9xHRGy6i4ebLoT8tX8V6DKK4vgs9E9PfnZH9y55cxDGnLfGtPDvUSdY47scFQt1gAfgLhVjPTLj1gVtfmPFS",
  "key17": "thmiSeQhPLWNVS7qerXxwknyw6hH4Wt2tJJJrxUoQ3AtNPEqhvXSnEK9whkkWKhNNw5U5wPxPgWDkBofCnD5KDP",
  "key18": "YXTT8wZU4GDCBEPYvHURQbJee5HERhVwJwwMAd1rAzhAX1f6xBQjhDTdfKKerT3iJPSPVdYa5foFGaY3L8adyvj",
  "key19": "5H9MyhkyaQ71ag46hcWPQ4XGjHRpP9fbAjHto5VAF2ABGQc5KyptZyzd6RjnKvaGjnLb3AGcj1wKWs9kFmtopmWz",
  "key20": "2Kz98CYXXdQPEe12XxoccpMH4WYCU1ioULeor87rCBKTEp8V2jbW9VseDTQyCT6n2zKfXnb9tugXkKPp5GGv7K7R",
  "key21": "33mhY8mUnqibLZWpK477qJVKwhQobn9PeJrFN6bjFjofg6VSmczbiqhMzzyDS19BHfenU2QoAroCY4VGJBkz1mhs",
  "key22": "5DyLnn4exJNGtga8STiTwsFPJFiqmM2xdEjXB6VhyLJHHE1cYjJjcyMjz6uWqWnhAHp484ZALEA7k3mZPumdQHnR",
  "key23": "euXbcpUfEnBrf38CZu5bNLDuHC27Z34LdgdgeCvg91URVS1rH7TE398DnCqFFGgK4LPb6ZKxRpzf4LFVAj5eAaP",
  "key24": "LTty4vFVYMHFsFEpMuwybjidGe2QUDc3sHMNQgfYkndzP44ekaY7QiKkGhgx1PFW9SCPiZAvd1JuqciCi51htgB",
  "key25": "GDFWt41if5vVn8sncs8VEYQbL6JJNqF4mp9nWZvLGZ3MQD9GTckGYuPiBJqRhc7iEzA1qd2mumrRuXm7N4gMeaF",
  "key26": "4TaVdNsbRrY1y8ZM3Q4YAcV2CcU1Hsz8HSUkoJgaJxTd4Khx1XkFBeXf2hLbirRLfscwktSR9U2KmWYe38fwYrXt",
  "key27": "4DFbjMBmncoppRSER69XAiyCPjLeSirHqB79JDbvqY8aiAtRwx57tnGxiZpyfKutmjmF6HULrmxQkfXSKP5CAAng",
  "key28": "3CfAns5pWDHdg5nNEu746kTTo1BY9QfMdVciWLpHuTkeko1xA8LADNboNpqiTKZPAAf4WEZsZUW6woDWVLtFTK9G",
  "key29": "2aiVY6k3uCigxQra2kT96S9U3MJgywTakxGG2M4wFYFSsTnmXuBwhwuXxA31mdAa5Sa5cs84ivL9M29oHYfKqkjH",
  "key30": "Uvi8aF8t6kMXzCj1Mqqj8zZNaSYDQNxtdxg3Q2o7bLT3AjdMvtLEHj5cmaZ2fWJfa8f419msaFXjM6RVaFqXYBn",
  "key31": "2vED3bDdmu5Esz87FcH9seBStE9ZDNTLaMw9bdKRm19RYsB5czEqwKa1yEqYC9n7fdQ9BNWBaoH5RqQEWL9sc4vf",
  "key32": "2NFvHC4YCXNo5bdRtxQXuJzCqbU5CGVoYamYA5Hg8z2MreLsYmZfs6TFnLUAcCREtfcSnkQ8CCWzgGxJjJkcRZMg",
  "key33": "ECme22do13PL4czt4vptUXXVUzr83b5yS4Psjo4TqkgzY2jcF2WfVoMTrXWUFPTyox5jz1szfmPwQcyordnvSCA",
  "key34": "3vebojAWMc1EYT16KTuemacczHMYxUMmdMpSrLbFbj7CubpbwncYDi8EEtVw1r3ExF3NVPrG5KBVTrAUkwvgxHkY",
  "key35": "31XudfNth9Sz1S2CZceX3RxVfGkChh4incsgGwQ12dXgNj3NsTLUuYhBCwdsGDgGNfPvNtREYGiqimd76ncL84V1",
  "key36": "2rQwTBE5NnxZ7zcbLMxg4dqbus5zLBpei6S9QEynxyZfMo9xBmwgATuYXJ6XkqYDK4z5mT4GhH4fsqX6Vhh6W961",
  "key37": "25sayzhXrPAoTqLz4ZKpLTdmrBdUREWThZ2F9zSSMdtaJFCrzzo7LZ9i3D4oNatgUbYrJWZtktmJsziBZEKT6kSi",
  "key38": "2Yya2WJNNwTups1DHAi8k9C1FHoTpgNrf7QayrEaG9DgTWNmRhgCN6psB4uQZFR4ZM9tqCuTrKpsJmp3HURgpTj8",
  "key39": "3TyP5vr8SCGAu3ZUbnMD9NgEX9nU8EEZfPuiVTU7NYh2sLzuUaH91Ap151zwZScfpB9QtHijxe4xnpk78KrHWfhj",
  "key40": "21av93ipA5XKBqQRDFKrTam4k2ToCppmzF8UNYFKs2yGx1MbZVGbMVpYkSqAxXFbA1W61zDqq3S2VAznYyxfEoFh",
  "key41": "dXmUwWATedFzvRXkUqqjmG97CBesQdMZpesEqZUKcrdRbKczQopbat5MXYJu6KmuY1QhdeeoTep9h5xynuP4e19",
  "key42": "4Di3e3ERKogGL376UYXtKNru13uybMmhSgXgdmjEVksLWwLcs6A9WtT8MxadumFS9zq65W4v8K35C7CgmDR8AgiC",
  "key43": "22fdNDWTkDXy81PKGZ3xrHexo6pJFkXbdMmYKqWzYJAT63Q5m9yvFY9CBy4tq4NFi2pd4QUWHHriNBSpnPR5Njow",
  "key44": "26LMB3HHLrN8bdwAxtRH8xDQhJZoTtNSfS7NjfSVx1X7yeKjxkMWws4XHscQqkFhdoKKk3YV41Da3tnTN8Qbhrpy"
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
