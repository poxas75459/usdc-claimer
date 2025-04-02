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
    "5YihrRXitxmwbvYx4NhrQDupsj1GzZpoMwXkpjssumnicqHiMwKiXUhJePGRujRNh39iW7MSKvwZSgtuYn5oLc2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1rWyGVMKG7KPiy8E6jJDhBhTh27v8or8yF7ZJbvEragZce2KoHpY2omJGhRCtkF17FhqhugEESe5WkpBRrFvjo",
  "key1": "3itdh8aNRaXHvjUYj4tgW9ZnXXX8PpMAz1ar1Pqixjgtcxh3qakRDqPEUhHeq3cqAERBVvKm9YU5hQKzpRiv9EzP",
  "key2": "4hq3Bbhe5Z3kUyba4VHPWVX3vCj2TJVXgcYNDsZAJT4Rcgf79miuRvcgByt4w8KEeTcPRYLRt3HtQEvxefZkz7FT",
  "key3": "amqtQHxuftbBsuZmJtBquvuVP1jUMrwEi1m7dMmBRhKf7Z2yA1hDfHttRrVu8Kgct7ykB691pgSergacwRo71Xj",
  "key4": "2dRrNF9TQUks4sfftk7KMZyKJoSazkuPBJtkoPqWhSgoB7Vr5iWcNn6THuzUafEoDsbLZFwZJaDMwN4CbpY9UjGf",
  "key5": "2kYVR91KP7juANTyi67fYc9b3ogFia7BnQQZP5KZn1AxaqkSAoF48bWU5PxZTYbpDDpRMPUkvhJ6Kih8HA9Ldivv",
  "key6": "53nxMgD99fzMiqQ1AK4URUXB4vtT9gkP5y5xNC9M7iZ4oAhEBwoAxqnoEYDRmUuKVtrGKy3n15vTKUieRxyJCLQd",
  "key7": "4msW1HVtUBfLqygHTveZVQfuW41WqvDoo93VokvXQBQSuW5MtnRRW1bM6pC3riKz9WJvNoU2Cep73AvzLTvrPzBU",
  "key8": "4FmD198k3iAPLEETDxnF11eJdP9XXywsZVaz4t3RLBCutqj99N55CYJpYaU6qxQ7Wn4uZaZYj35tHp7cMGH4X4kp",
  "key9": "5TbjAV9o4UqQjZj4yVsU6uKBUvxBPXyVf2cDkCZ61dKz9NuhFAoH4RG1JDfRgBJ1mPhrJubdHnwY8AAKuwdJ3AcE",
  "key10": "4HGgPuNohY8MmWCCSyrwiVhHAuEVD6VgXtigyYht8ofDREbGpU7as3dJY7fvhhcTH4LyN1ePy3YdnASmjF2UjKMv",
  "key11": "3U1Ycw7zqrZY5dZmszQDr52YcoWHKDfTJUckPCaQyEaAgx52yX5W6wLFdYFscyu5FWc6JeFgHbYcvygykKXD1Vf",
  "key12": "4iWF6DyBK4ghw87YvSknLdm4xcU5XjwFmFJtEEQUHELMCqeuCTztJqHDM4awo35sCLmL9g9Xx9SJfUPBXAKptgrV",
  "key13": "3eUrrqVxM9nN1tnWuqntFi22NZsu7hSsgghZYsrRomru4NvEvUGBNp1FDa774nSy8RU7FZ5FwkSdeujhhDLGX1Xk",
  "key14": "2vsGLQYoP8PbCMeTKYUpvDaw7iKeQsK91pZEKDduTLRBwVi4npYHkqBZpczvYkmRhZaqFXvNeRyy1QR4kMmY8UQB",
  "key15": "4ZUP5CTW4riUD9oV9qnfz25AUbxMivQPVtuELEFkRKTjnEshhJ8VBBVVh8u2iz4NJ9ureds42r2gcerffNnbTUTA",
  "key16": "3Uhfa5F3UP1NmBLN7FBiagmoqKPXNbZM1Xjh1hE96R5jpPS79pw44kSxkXhm3z7PTEnnQ3yWX8jaDP9uGiA2gaG3",
  "key17": "5KGyXAxv5eFEABtwZ1TqqxZmyRqCrw5n8tcFXNMpBUmykWU4uSQQM3hrqRQTeZe3zWP9xpj6wvojUfRavEgTMviW",
  "key18": "rSD58z2HhvWvzJiUyY9wSyhPZssL8F333N3gsHY8ErwS5bfFe5JBUAqsAybMdfa4uVaog4agsgNbiTMFKnFRxNG",
  "key19": "wwRNAC4mXfCthB8bHUo8YipKRUe4Bz8UKjG1D1BhZ5AtBWTQQhEeW1Z9zcdgxrG4cRmr1Pd7QZBjr4cNxSsdEPz",
  "key20": "28od1Gk6Pj4TJih6j1WvNeS6KPTiArJj8UzZFpBndZ5ZKoerjxAon43yYmbaxh2t8o9VcZF7GtDMAVFHBGM7viz2",
  "key21": "3XcJQ6barBA97jY3jBpUKfCL7mLRodBCvtbDj2ssaShDdq3NXELEn8Ls58YhaiBhZSLSfKSQ5GU9BajctWDQN7EX",
  "key22": "3Dijq5PqfGD9dHZNP5gUyBQhwzHdRNoJx1p4Mz7RtAZtNJjiWAiwkgADJZn3rJTpoMoXyoTJRrmRxyuegmNANbTp",
  "key23": "2HirWCopmcYN5BJYvYGenmREQqCsQEEszS5QFvABe3VVPaZ1NrMzYfuWAZdfgDcxNriEossJK2maXgqxwAnyrMfx",
  "key24": "zxmz3NZENQo3uxx6XSeRRAKD4izaMfYBJS3XUVusx6Qy3iyKz6YiyLjPDNJ3knH1nE3bhsss5y8CsPrbAW78o2T",
  "key25": "513R6n5Y1eSAimKS37bpbjQLFTPHazWYFuNkPJQP4bLotRBigq3AYSpS96oz4cfzAuDSsTGNnxBU5fW8gmgPcSgo",
  "key26": "4QNX2ad6rW58xYipBniMZEsu6Ma3Tpu4XP2JDtS7v9MisbigY8kfEfny9msCVFyaNmPCwq3MxbmbFmYhjPWy7FKs"
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
