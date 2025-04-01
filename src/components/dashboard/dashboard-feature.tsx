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
    "55frSwmnPfJFm1Jio78eSpovhdVyoyjLvf64YT4wwp2n1Z2CaxSX477GHKW93U2M4C3B1uKE3Gk4N6iiSqGNT54S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9HP6vXAtfnW1PKhaML72wanDBMqDbyLasusQcEHCWL9V8hrx8m4K9As5fJoqpoVEYVF7i8fWpmHPTZstvPx4A1",
  "key1": "4Bnj3vWwLLwHhzPm8HF72cj52dxWLRFGRboJ62swoRi6fa9fpgfmWqnRK3yXDgP9qd8AeBPfLw2bjnjcVF4TqVaY",
  "key2": "3gJqcy1eQA4mdN39NDnL1fUSWghaVKCM47HQ8ZTUuDpMEZZPniGJN8MsHHFLCoZsoNTvcytEff19yD1mJLti8jBu",
  "key3": "5xFh6y8CN4AmgLgMPFZY1pq6oowTNT6k3TvtnCSr3crGXE8zmtAtUvfvtsxyKEeX4UA7qm5GDo8dkWLogdJHki8m",
  "key4": "3bYbHKAkNMuTpvK8812TpgMPpg6zhS6qDhcY2nbqE2ELbMsmieE87FFBh4ryfGJ4SP8yMdEpksUkmjp3uULLnuwy",
  "key5": "5YaoHX9NNPiw1qBpxn7h3mrQWfz83fKtWWPbeff2X3ePgyX34UvQThPgV83czR9ie37cTkKs3VGxa7xsyogNe9e",
  "key6": "2DtZrtgUzy1EGoZ8D1szZUwfU6PZS2qUacLs5B7KvQpBNeubRjGdF5JQfjEHsoU1bUyjZUtTnHqgqNT8gQnU21Xf",
  "key7": "581VjRzz8RnUeAtE96TTSm4MoFSKDbmiLVXawFXfXgvJzM6L3a7fNriNKhgXByuasAS4uz9Fvay1TSGeNbQbQ3Xz",
  "key8": "vw9Y5JsDjjLRzxQmf7hbtSfFQZPJ7Wq96HitmgdHR3TY2HHfW8Px4iMVU7nf3eboiEgtd8onvj9RMiPfx1tBeCL",
  "key9": "4XLQk7Aap8yFtkzkGLwuQr9atcYXgZAYHXHFCMEL99mZEWJuSvuyXAuJH4ZK19vPDzK5LYhnYy4UTESTw6CdoxhW",
  "key10": "5EpTf84EF23L2SKt2KF6iqjTCWDyQtifPkqzBYo3nvReNUAey7Q5ZRcoHQ3JMekvVi67XqhBLWCEbn4saG9865zy",
  "key11": "5DNEg723NnqmEJpUAA3nS9eLi7R7YevN63EEMgmbJKMkjWyTmMCeoXeMK7k9ZdTJXjCZ5ZQxCy8vt2chxyt7MUt6",
  "key12": "8ir5nNEKr113tcza11oVfP22DXjnaajs2YauxzWj5e1ioNGUpk4SzzjctY1qJUDXAnqTbtk2F9CFFDNNukW7iM3",
  "key13": "zX2nR21vkqwdp1dHBarNs3Kqydg165m49cEgT3PysvDQfZvS3ReGFrJaGCWLv6GdxmWuuXhzEEDJVNUweHdCohP",
  "key14": "2HsDqbCCtAZAEFxFPWtFe2R1r8DKvHRwPLrD77sqZntUQGYMevyog9rj4wVUPiQpe5BGcCB84LzNroEfEpGj2Z6Q",
  "key15": "66ERRkKFu7Zs7GUoHFiZnkXNKLSb4h1iYvs5CYrvXBesWt8JidNZ7f3unuKfPgwJSGxaPKXEH68isyzFrbN89gDa",
  "key16": "5X1CezYwckREnov2huggxSEfZwSpCU1rgjUWK11pZ2Mi2ogJ9fNn5qbAseEByoJn6wZgXcMkizD1hKkGXM4fjtJi",
  "key17": "4446RU5uNU8MXN6F21fg1PLUzc8yS7JWxz35LUe6jZqd7LkZkHKxMFy7mE353vi9EyHGPzRT1yjJBmUUfwePXRY2",
  "key18": "5mVVpGA3bBAoyrS8GCWwXQJGKnruvk84XGhauyUrvA5G1q9ccoVQGjLxffd8RSFKFMLzKqoZpmvnRXfn2eS2Z2vL",
  "key19": "34b7Jkbsa7BRccdU7yhaMvXC5j3JfJcYKJG7AXRNBtynvAj6h4wXtjx6sCeTiLVrYGHQh8Dvt3zxr4qy3PfR1Lp9",
  "key20": "46MF6uPTz5dD4V7dd4skUMx36aN25hxetAFJVqpwcAU5PDytgUZHnTXru7tTJH2C6uMgFFLyzRSSaDBPJYGywXK8",
  "key21": "3uJSspU4pe5yFCoM28KKgwk8YskMrb87DrFuMtybtyDygcTNQjJzwgi17sdSWMxg1m2tjxmmcTXsdxyjpW5CobMG",
  "key22": "2wfF8vU9QNCWqQAVAKvRsbPJBoBdN3QbJTWvBwLEMnkjsidkAVQ4B3PxBqQDzPWUHDDCZG5W9XXHzSr6JVgdFyp8",
  "key23": "5zVEtXztKeuTP4Fg2EmS1GNdePeK6D6HKingPBWdZEuqDYyZV13Bmfr5kk8SXZYWQnXbDkGYkgKJP97gkXvDrZ3N",
  "key24": "4gxRrJ9DLC3dBKNXuGHAhh74QJ7rRCkuZjqbat5K6juggEEKVv2DXhN8wxYTThjjVqPoZ5jNXRcdxFneaN1hxMiB",
  "key25": "ojZn7QtXyV5pqUY6KsTiJXTGeMt5CzkD3EkzbJsAQiNHh41L2P3DPDnzYywUS1K3LeiA88m6rj7tZuoYkRTrTCq",
  "key26": "3AiHG4m63yGuYkuhbjP2RK1AYCnw2t5vaPBeCRYo4BFui7i4e3hkRkmiaHijfsLz9CcErRyRsRS1w8FRRjWhEtPm",
  "key27": "3N5T1mhUh4Cfm4K8rYbPuToAH5JzfT7Gbi7aSBsC8VgpNrvKS6vviganMg8EqhKQGARJjgMSZnT7STHQHU2og7iV",
  "key28": "389wNs2HBohE5qTPzYkftufD81Nq77zrwAj1VygqB2QcSCJWaUZmqXtnP6TmY2fEGdeEcYCwnCunPuRnmuFRDXBa",
  "key29": "2eZy3vw2SruXonnBLy6EDhmVrfBEPPsqT9h4i62aXN4P87YsuaXd5BX6vLXPKrcN7K5inurbKffFWLf8G9E1pj8j"
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
