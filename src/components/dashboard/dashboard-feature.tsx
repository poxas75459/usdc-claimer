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
    "5tcQkQGKxjcNDSVAoJGYSrFGoPZ3UyqA6Lx2iiph664Z5ctKB2JnN4Ls1FptfzZc38xzwdWTTJ1Ab5W87kYjSkZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfsmPo5AcpfnwwywRAfP5hjkg8pJYuTmKwXGEbYiKgxDreUGUVCSXyBZQKsgkynL8PaHyUnYJS5ubPaY55AFMQs",
  "key1": "2fiRByTBR5P9JkMNVNL5HkostncpwTATPoz5qYzdRJv2Xe19Pyvxk6EYHhZjABUP53uMxZm4ChM9g2mY7Dnm8gP7",
  "key2": "5ymF7Twkhcnn6BvUL3HuA1x7ohhLMaDZeydjtXNNmqdQMkp4McAb2ZeJcimwbKTYXxfjiuHg87jE9hiPkagYAaGg",
  "key3": "2pukeK2VCxrgwjCE3AABYdPC4Yjc7HbGjcvJEhQEQnwWj45E6qU8J1iNVzJL5YzahsJBxKcpoy75nBXZgksneyWZ",
  "key4": "QKPja8UB2WkStEeeAH2PshRmpLn3W3LbNFSXtMziScYUBXHdHfUfSQwTyJvb8mDuW3EgJgGNhW9Ppmx7Nf1ixVL",
  "key5": "5qbohQByN6ZsLv6X7SNso9sP7qPZZqjvVAqFHqEZkSXFnBdMKWabxDmjSmCTAANAUhbQGy8kwkktZzduSs5gdXVF",
  "key6": "LPESu7GHdbrzYBeC9haEN12GN54cmAttVqWLiYM9LMxDnXH9m6RLgrP5yEV6zjoajBwHxP8YfvWHFB6d1DSa5V4",
  "key7": "5S4kQUfRT9E8qkJBNvaE5gVdwXxqjkh256XyQgX6Q7q7VjpY2JKqyuP3ni7EjmWjMZ5Zv9mH6GUXakkkPP8vZFGE",
  "key8": "5gtCWsNH5kPasQtMKg3HVFJtsX2qHCQb2dvhFyDY1qca386Txs4Hug9VZ7RMDkndmP9yVfftJ3gCJodxbwU6kWNZ",
  "key9": "4hNqNPxxa3pcP25oufRdk9rvHmCy5oZDALcyKr4F4vMSWpjc6nDPdmrovpmH52EKLnpSuks1GCKFVKhiX6M4Xerb",
  "key10": "4QxWDx84roHWfiay8ys5DaMoy8gR3vCBhzN5V7oQpN1gq8i123WGzho9aoAtVgjz9aD8EXaXN1Xqvo7W73JzmFN4",
  "key11": "23LVui9cuEi5kvkVA4LoDw4u6BV7YyKAxdvygUgfAXnbMzyEU4XaPQuF2zFru4iXSQ2z1Fx9VJSeRkcKs7Q5xD6o",
  "key12": "3FVEDBFgSQyDPkax3RDC3UitV7eqMX99fS57c4j4yUgap6DQFzC8ggQmuBniDx4HVXSMgVMThSkgenRcB4pkh9Nd",
  "key13": "jfecd22CfGuzTx8sp3oUYo2ZcxoXdsrhYb9SfKrN1gycfmqCVtpuaQz8E9jXuBepHAf4MSN5TN9Y4fL4c9qmy6s",
  "key14": "3LGxSzV5bZNLgUUCw3i24vKU6AKddJTM9nxnindKhvtrHwQspJwhsj9nuqYEdVwHp7fRJFBs9p2z7KrVmbZjLLWs",
  "key15": "2Kz8CwvDfGyA9JWTKEJab9Jh65NXHaPJ6vgomAUeyhtc8a9gf93kNEXPBX4WiPpL3J8pWPefdfmbeLRKoob3r1vd",
  "key16": "SD1EU3nUF3cyv2EYYpx1nzSb2P7UPaacXkWVE5qWWNqUXkmijUH166gjMrxdhFQwX5qoPmHkhYa6BfmHq3XVNTb",
  "key17": "1AwTWUJDqvAWifETospTxfAe1o1dQPTZcwnkSb8XPDJVQ7RyRALfbYU1DohiDBGLwy1U1oud1mMsvFSjLibqTMC",
  "key18": "4TUhShhgJHTisXPJCepJXQKVi4cjNpqeG9Sb9EC23ncqc25JEmYsVmjZ61WU2yjGosxWwfnKDYju5PqV8JBerGMR",
  "key19": "YrmRrJaXrNYgUh9tojBaQqtZzgj6rm3zz4dvWFavEsCHeSNL9Q87weuqN2ynrRJHiXV7ktkNHR28tppxhjTCBxx",
  "key20": "2DhZuaocUMQpRGS4qc5MYCNX9tRWTN3E9ubHC7HhaJnZDNRjF1EhaTyWqVzHW8kVwkh84v8JCBX4y2xhy9pnLsgL",
  "key21": "nuYEqsa1dtb3NrdZNDhr1ftCJkwCr2iYxgBgo6MnzfoJFuJ2unZDiRT4cTUkwpmVJTkPXctT63zPxZRdnvTmA6T",
  "key22": "5fsBuybfo4cpB8U3GRWVhpxrY8DKJmMzpJgSSruWTrxviLrAqbacZ4EJ7x2Y8n87PBZWiQZYq1Voxdw2mrHo6Xwy",
  "key23": "5JCo8p9xa4rKPh1nL2bueGFs54q5SthUoiqBwSJkxUJfy623b7Zgwd7YpPhqbgBgbZeKq5d2AzZjatGjFwCN6Rz1",
  "key24": "2SZ2eMGcD4mpFifa2SW16ZL74rx4wHHC21166MNcV71EFEFvD7a8uBGovAnehMYteoqiJtUxPjcA8UxcrmEdpsqd",
  "key25": "5PHf1hvVLwcdToni7GsuWRSvrpeLHKEWqrfwRmQXD5svZTi4pWub51LceNfX28qSNtc5HiYcyX8DY2ckGZh5Bvos",
  "key26": "2kxZNdJbwiXXH6Hc2SHs9FeEycwg4nkHsqf7Pe3CEoS9hjxPXpxfm6KEsxKxiZmdbJsyZZ4yJgMegiDKsucRtnS1",
  "key27": "2Qb1T1JRXt1RuR36yEhoW7hwtBnuh9jNGykPz7H3fiwXcRsdM82UXv4BMKzL676a8nP66TCDdVGTsbkNW4RCmt2D",
  "key28": "4icbvQffwT8xEswDrQVWvbjbHHuNG6UzNAhmXYN9bqi2VeYuVyg89vs4bDnhckNKPMcBnqDDGz6J1HXsuNiGNYJB",
  "key29": "5RqWjZk99wXpyPcuxbkt2FKhyFQiPG1AXpWSPda1Yxx3CUqVkZv7vYtnQQERNon8ZPECwV4pnUG8awpRd1xxpsSK",
  "key30": "29BNTXrCnrGibbmgjnudTNA8PBEy2fbuNr1ywS9HS5Z9g1gAhirBt2q6iFsrDCyKwC6R4n16p7cfGesr2eFtvgBX",
  "key31": "3mYX4YLnLwpLvRYR8MLhEqR3C6W3FaA7sq8jhta34U6kb3xNWRyzpZui5DEqzNGVgaeJKpsaCRHmtyeMLmgbBZax",
  "key32": "sJnoJeACiTo6FCnyAEuZoqGy8Rxx5rVPYS5fQch5UgbNf3j4AxB79V2AGKimZN3NUaFZNqouL63jgjp8kxVk4cS",
  "key33": "2wAzrVCTxNtRp2xEkaHyExivjNFhNVLUG7rU8gT5HtY7Ma5dhncPx8zVqqnnmQgd8X6xkEEzTZrXkMBh5aeZmDnp"
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
