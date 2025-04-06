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
    "5mjfzi27kqYjv5uSJ2aptjwoKKYup8m86M7S7oKu2H8qgJxRFpQyRwU28waihvE4occFiS3nyQxoS1HXeheCjeLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXd3rybB9MPT9gHYiDCyiMmLEkavtjKpLufA3bAHTPKbjgT9xnbgABHGY1jrTeydjt3PTAsSjeQkGcKpzLiSFWo",
  "key1": "51dGGvyruGmsvbcCZ588ohWue7rLJGbpvEWc3ZNsQykrewKqgtf4uvfF5yjtYtEm7d4C6zVQwrehyVD8CBomGjXT",
  "key2": "3ZVhYyvBMENqHSr13bsQ2S61nxf8bpcoUSDnXFEeyKzsHrUXd55YWjeKQCLumjRxmkbMdijyhHv7HKvhjCozu5r6",
  "key3": "PaCJvXteXbHvkDNcmBJBzXKzBftNFW2yFYyB3asvGevSbZ7kh1TcEHor6JkfJxsAGPp467iftZ1uqLBscwBiZRX",
  "key4": "4nNkySFpGGnXxFoRyGqDtbSgNyLEBA4jHvkUUnPJPL29bBbdVyzrYrwrFeC2oDAvdzF486zYwEChoFAAoR5mQuUD",
  "key5": "45CZHwsK5ugpSKyHEh6MQDpkuU6v9bqPMyenvdyz6BnEhkeUPgsbh4jFyDcvnyWEeD64ntZyY2t1dppSW1ncAKgn",
  "key6": "3QHGypJfKhdc5wLrb4zq1VRCRGT3UhJsdwqxnbQC9K1g76VM6trJBFPoPLBwVh3mAHDvNPA7EPmgx6xYTAos5YLU",
  "key7": "e8E8t9x75WjUo9vFFrST1zMmmAqJGZZgQViXMaXXQPXahHPaSbWD1X4DKNikbtGb5NCbdLGdXJKeqXJ8tsE7GUe",
  "key8": "hH9GHB6wQyHraxyhoWkVJhkrDp8CM9cceMnitpkf5oqUGiAx9aNep16EBoFvrmNttphuHsqgz4xGNNopaFfJ8HU",
  "key9": "4picmZfUN4PHzZ6rFii1sMwRL7PDJVufqXCUBVwo1N79P77xGona423jhz8uuHYk3UyAvwV7HMk5i7hyFRR1ostr",
  "key10": "8z3jqKYnfkC4bt7abfSYSAZu9e6MxyHKSWCSPWPw8AmMu6w5y2fCN4GfkkN7TtfCNg7W1iraYhgwRgbZn8n7AAf",
  "key11": "2kHBRz5dGcE8hHC6EsEnFTyHk5aCrdndaeLA4N8Qqg7QsvigNLdVeKgCgXHbQBASgMTY5rP2AwbsbyCsTdjzX3fn",
  "key12": "47MRMx3FU1LFVGp7cd4BoGowSoYxkPq61WGw6NP1SAh558msCpCh7iqFTmoiGpRu56473HgxorzdGiufxqS1NrH3",
  "key13": "4dKK28xNAEPeYLHpEJaYkG4DwvLwHent5nbzR4M48zUdKt7VXjXVxhSauR7xQ88Fb4CBKqjHgyUEDc8PfXdtKXPb",
  "key14": "3uCfYTg9CpbgvqYZDk6BfBKXNzFj4SL7fNid18B7oPmxUpVtPs49wfnqjAxAKZygQrpuuRoYxhobsza2eAbvkL4p",
  "key15": "46Pp5EnDLS4hm33Npyxatgj2ndsejzZ2N4FMDDNCKT9fLQWXWrm9YfGAgEPq8voFfWVG6vq43Hhfih5rWnvC8AwG",
  "key16": "2TD7jAzYPygV7A98ypgPk7cdN7B1f4gFkxThFBpLCSWgyhppFSwQoZdwBZA24N4PiEHmqNfZR6fykoAMmWWkUgwJ",
  "key17": "3VB4JtbLJZ4ARWdovWjbrJepMD2aP9M8uGbGL1qpmd3bTH6fWq5iNmotcG8NTyXSKD1P24dt4g9VToj41Z7GRiWT",
  "key18": "3jqHVs761xmz59k7LhXUbUSvqHgrh3CpVDhEe5VShVLKXZDRf3kaykX7zRicSwSa3AR9hS39wYjVrNKbx6GHo9si",
  "key19": "66UKgobeaSWL2oxDbg4txLHqJXJcDz9dELg4T3ZVzmAMcgGPLqoH18cW3Gpn4GC6RsEg8L3yYY7ZACDBeEyLxxHm",
  "key20": "LJFrbPi8CU4jEqEYWMcVkjGkYQBUzjLHkkbbZYxFpr7NBBPktmovjoE5ohxddVRyMkNBamZrBbXu5HhXeHkD9Eu",
  "key21": "3mzH8yL2um6MJbCmntChtV7uSr8o4QXvDouiYBVMbHHZwzPgCQBfjuG5UcJdePcjHY5H6MCbr1n1qkGuXrCSLn62",
  "key22": "3L1CdpViwfYDSnw7C47kRdenhWfSkzHSCr8fYdiGvuHg6Sq3fhqiqKkp5SXD8z72tdwpyFQ8tbzcqAcYFQU2FFMx",
  "key23": "5TZQvz85dDhZPpaa8rEfiqatDE8s6UjhnZtM3RcWZYAaZJgAomcjrJPsM3apnNg4gFs8UYswoJnnP3iDjKK6TKv4",
  "key24": "c8BGEeoL2xUv6WsFquTMC2aEkJq29kHi2TKaskhH6QVCZh8Rfdnp6ABp3eUJ64XQ5uVC8eJZ7L6ijkwsK5N2ZT2",
  "key25": "44HyakaptM4SgWf9a8MWAP9gymjgT7LADRkP1j5gnMDTjtbgoELG3NrFSEdbB7kAzqGqYYqCRchyRr5fP52UGRfr",
  "key26": "v2kuvRU7zVmNh1SFoSMUjTr1jeWPZ5JVZmrpQ7opwtuVcsqCA9j7qwPeSE4uNW9YTuno1YN7MHdpGtrjPxSEFvP",
  "key27": "udYGiYCrDpW5Yg5yBzWT78CrqyAQCj8236uftzUVJpp2mwUisKmYj2oVNza9YCpXJHd8bxoveGoFAMJuYHASLZv",
  "key28": "4f1AZ3MzgUuL1J34wPTsku2VcoF92QbUuWGzX3gweQmDTiWbPXCm2gpcBz5R5FPxhPMuX6gWBjEFpY9FJBcqNVeM",
  "key29": "5hKsBzCs6WSuD3NzuqhbwQaQsegfNouBnNNU2VSk9hXjxX5kf6yyUqVRJV2TKTW5P4CkeCQvZa5LDFvy61rNwyA1"
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
