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
    "2aWezQ8Qgwk1s9yE8QEEpvNe8uysf1uWD2vLHcJb9SSmqS5SssetxNLC3qknQqqt584KYFz6ZmvB6LWFQVdtc1yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfQtbEJ5ktG38FZDRXGCgpp58iRecvo7Xoz3FuauFqKy1YF1jR8XiN3vmkSw8ewnK2qvAoaoZGZoxzGV7CwvqK5",
  "key1": "3o3YczXFQerCCbTZEABox1jHojvEABfPxGNUoiNobE9TgFcbptysgEqdkzpSLMs3X48p4VmMLQCGn6z17w3481de",
  "key2": "4HQNxEK2MoWqnbKYtp1YqdDzipEUfCVuFhGUseqr7kpXyHqxmuKxAXZAzWGiUHCevLia9XuyVLX7hgDT5NnZnEjU",
  "key3": "4T8X9j33FKjbRhSmqrj5CZzxia4c7XY2WceapcuMtbJxUAKozCTmZ8zPnLfymDgUdJBfKif9mxh1zydfswb4ujCk",
  "key4": "2bjd7kRdWh7MmgwjWLTGJFLZKVrnCUSPmxrBJT42uGWwQMg17LxA6NdGNAusUTwfzUM5rEWxsiFw8SYFou9fDLka",
  "key5": "2LiymAJ5WBHM9cF8YikjaJXP5uVDxKug42anL3SWJzZhFNREbL39c1HkwpwbLYPPALD4NoL479T8KhxkctCGP4YS",
  "key6": "2uAzmDzNZu35AA523AQRGyMhCfyUVSNTEacdbrYFVSEQ7sHDJ8gvYG6cDNJWMCtvucUmY8nBQaoCmHQefrzQKC1F",
  "key7": "FUi6NKa1G9xgHB1Uhn6odt4Cqx5wiyDNkAzmTPeF7NDHkkkFS2dRbrH76aMY3XK3VEfiL7pfYPq7j9Crzt2YVjW",
  "key8": "28vTu3MYaccqis4t6bwx6sdY8DwtAQkGKBfjBvcpRXvHjwn4UqzsKsJHKjXAAmCZD2jA9ExW4NLYUJwnSQJqeMxz",
  "key9": "5gejxqJEnZYmJebuurt48Eyzv1LpnUZXuunjQPRsfoKanDdf91WE5con5K25JL3p8UWV5RWUvqyqFXjKF4ojBntL",
  "key10": "2SLQfmYEuLnhPF82tNfGSGCD1KpbYNbjh2mmRxu5psncr3Lgf8y3wqNz5PG2WboLyD9AwRj9ag2LcpMEPyEzqKin",
  "key11": "5i2WBq8c3f3rvZj1TMgUHQqA2GtKG7MLRnuv8DFyaXkrhn7ttKx6jfcztG3zSmCGVaFu6vPj9iAjo5qE9Qh2FFjq",
  "key12": "2XMzb8yBsDBbGvS718deqdRFZuhpJE3WqkPcim371KsHTLxiJRyKc6q9RWV8dHjJd4bmja72jXYhfCanUQRba1ji",
  "key13": "3icYogTsmSpdx3AGwmJuYCA8QuCavZdxwbyzesFmbAfGQ2gqfNxdpt31QM8dRdQ93rskRHXa7jJ8nYU5eVMU3nyC",
  "key14": "4GnUn78PrGpWouHwNAfRcV8DWJXqDtFGcGtXZcZ22xQzXyZsMRM1cv3jJJXb7EJF7KJSNHxM8SXJYi9YrSjC1RC2",
  "key15": "4hSRCyXG1yZiDcozYsk28BxGcU7ryWYjFfVhMEXLi8iEtWQ3Humxah3c85i7GdjbG7SUtqRPp8HfnRnuDK7aiEWr",
  "key16": "2dMfHnxKwqUHqqQ5t4CtKT6obfAQsKSPVddJnMCYT3eUDVYpYdHDVPyZ9UNbzcsPhWxmFNhcy7ffaSAJV99pejXh",
  "key17": "24MjCC3Y7D16PR3eDL2WEhtsEV3UuQGhPjsbr6JcfZYAPX7zWjZAdbHi9JudtMzLJymNWggodmcyfE3me1vAdhEA",
  "key18": "43F3sDD7Q2Ld6Vg9hmFa435UHAsazmndp1ep7aK5UoZLCWDvDqTrohJUnebSXWT4Beexetr6SrKect17UWr2aifp",
  "key19": "LBr57ERRekwWQdD3uThApnXvZ4taYZ6FMoMVQJ2mjxdddAV9Bt1uyfxf2W3VY68Xu1DsoceM8qs5ientbmX9f3q",
  "key20": "47bME35dPbZRDsXYjYoNcGj8h28RkLJY9MuVHCJyy1svUy6oAp6mRXMy87vfEvBP8hiovVWL9Nmjn34C5hi2fsjP",
  "key21": "3vu9MGFXRoENA8b2H3Ksfw4fXfGk1j26XsCNYw238Ts8DkZSXzm3qvGPA1kVahhvZYDDbbXhtPAZz5DHJ9ehL4Ej",
  "key22": "5GJ15mmzCTxfPyM1NWnFfg4B7qLmnhjf3pu2BvR6Efivyzau2swn5JArN9pACYLudHuyaeoWZsV4nHaoQfvzw4MJ",
  "key23": "4D9upqWoBb5S2hLP5dZUwBGbt9TyYEf3ShBKP2pWav2jY9M9roVMf69N8DnTNbNq2CMcmatsFJL2eHXXAmELcQqd",
  "key24": "32HszbPru3Jfrdey9cX5uzUMaToHUyVGT31i3TxkrSweVCF4xL5fbUYhg2a4b2gdXLVSamYwMBby43pa8BFER2RZ"
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
