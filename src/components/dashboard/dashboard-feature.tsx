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
    "2FNH1ShRZXXZ5HKVMZJ21LdDmYL3GPyoMvWDG8e3L6rfzE1hAswzgdwNqzw8827PeUkLKjjB1T5mHtwLNzg3Q2VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QQxkMfURzko27EqComHd98qkmqzvpT2FUzVzA4XDydZBJ2VqMQGZjnVCZmu8tnDvh4LFtQzdZdXtEFG3SqXkqZ",
  "key1": "5d3dUKK8jZAg1dpSYiHMEe8xMo9xUTE7EVJrqgDrDS2HJFR8xWDejxa47gnMhK4mUcwK8zkSDXJL1jaLvuLGQsoQ",
  "key2": "2RCvQTcsYC1v4rFKj1gBKxeMk5NVf4ixFLZnrFt3L4VSEpLL1vus4gKHmMXqcgsk8M5wVQU7AGRiPWd1pRwkvojw",
  "key3": "4gLH4Kky164nm52uXi1smxruL96XV4VQZikx38dJ3twdhoea5vnXuEinoyiDnYzSrjqCmkSu7i3dtbGd89mKjNw5",
  "key4": "7Eoh3CiBG1rFmyUYfq1Kz5BUWFzwR3tPRWUKn722MceQCQHaAL5DqbRuMxKCDP6JmLXtXi3eDPnCPEL8ygz8UAx",
  "key5": "64fxpkBLcAS6xCzNVXoC7Rqe7hdEoDoEdwc6DyXyQa9v8UBscKmqdZeRXq5KMzFz5jWVMaTZDnm58nTD6MZcfAsy",
  "key6": "64fjN5dqdAnCwzNJWgXEinFFe3MTA4e61anGyWzYpdw63gDvqNGou7kVwtho6ncQeDna4wbJiNGjREGhYupAotku",
  "key7": "3Tr4qCUFhsmfdoRtuxU5nKtr3uqr1X6XFtLt41cM6x1avhRcAkQKRtNFTx4vBMnfHXSgnnABV8rRQ238gBFXQWs2",
  "key8": "2xo2cVhPougC2GgEwmV9cYrpEs23EnJdncdNSGyM7PGZHHnDph7vRCBm5zJ1KwGof7b5aEGNJnejfAazDrHUhtGb",
  "key9": "5WfW4ip2dkRutg7XghbXNBo56ArsgxK2s8S7HSTd4BqDCSyGt6PrvBoHVxwWoZKZzwbT7qNcphnH9yYDn5YMaNQR",
  "key10": "ocCsuia6ch88fZ686cGLdJhQLb5hmgk9PBQscWfTAdsbLy3RCPVxbBnq4D1mVZ9s69tmSYB2swVL4Kna2W74RnL",
  "key11": "4k8sR8G55PDXAoaXPiQDzqEG9pBzcCcjBAqHNe97BCc6c318z6HcuBLgRWxTuMUmgEtUNLnp5CgyPttJrDLiGVPW",
  "key12": "5Q1LhrLqZP6g4jQY1RyuFkLHCKz9EkC8tWvpkcj1KcYvwjGjgwsLxL6k2nZvjcnhPoBRRSfcRP48CuvoodGdcuoQ",
  "key13": "4emh3d3xstGh25Rqa7CsFJRdqrGkz76s1LiGkKg5Deua4DQabjix6pkQh8K2K8ahX1TU64umK59E8DVdy39RKipq",
  "key14": "5b4eZPZqihuRwfTeGrBSFZFaMJpcJXdvMZyPZSG61NnhGVRieUW88E77hCg3aLo87UV7sPgWjeeM7aty4Kt6yduq",
  "key15": "3MRT6KpFW2aGDmJPYwwPLYe9cLHgk9ptrfbeuo5J3ankqXi88HykG2qWZAT99WD9HarpNgLkdK4PHVTo5LYGUVGF",
  "key16": "4dyv7TUmxBsQjJmmpT9vDqU45mUL79P9tUK1KmWh9eiukafyauSyondTspHMcBukJeEVxW1FezV2TPHkwZyRra3o",
  "key17": "3nepzKNQ5jvjXRNfFVZ1Sv5PhLBtqwjCvhHrtrN5MX8FEbPQuAGvyAAdskuNAHYvQaM7KbGpb5xdgyeRykCvq7kL",
  "key18": "2KP6CubwEsCPh8koHHHJdsL1mso5Q5r8DjLYHiabEUuDBYupXQrP2zZPsTLTXdcPhgSCwYinkQnjvMvKnJfWfrLS",
  "key19": "5fRYMgRGBkdEq9cWd6s8dcGA9QyRKaBYF3DsmXXvRH8N37JGUpPC4K5ijn5nAcYry59P3PvmXhvF52ggu5Zv2TxY",
  "key20": "vpMd4Zg1YtrrhhEkuCqg6tc5QjtrasgXg2CU8XvNhXMLL1Vswj5vKCjFp85Gq1GMnMdPZc8APzBbucjBXMMY8Ds",
  "key21": "fauaz1GtkhBWnL3nmeVtZ1aG2xWpmQYFskyHN59Y9SbqkcnNDYhGj4Di3N1oh65iJtMyNpi4pvttc1s4Z5h1vjF",
  "key22": "3T6f6Bo6EHYvoqTkrPKJVSeLmG9JBzoACn8hZfMgHRrnrZPndTAUaqttZSsfh3LmwR8WZN9FLpM6k6mR2scYyvpU",
  "key23": "N81iX81LFJVrZDUzU79pc13s8f6fk6BjmXihjFccAe7XP83zvwRpbA3JfDRYQWaNzPxfAn55mZt6rs1Dx3cFFAB",
  "key24": "3XZKAfgNje6KACM3C4MYNPr4QZNDhZ3hrTuKV37YE98kLsUFJPA3fBy2tKcBhgGCdKbsGBBa78d5hB8XpRfLxAaU",
  "key25": "5weQ3nf5fpdQxWpspjTFEbAJGcw3gnV56wusoApaXnNJmvE72hqdgaQNkXvy3Lgerj8XZtcBieP7te1unvSb9ZT1",
  "key26": "3Ekk4A1fFca87e3SG66WkdUcfotkAUxinwNxrLAaVZQC5saw1QsRR13EHMBtBhZxA7b75BsGxVpw7c1SVope7RDe"
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
