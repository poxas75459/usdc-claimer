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
    "4woj4UYNa1hFaqQPXeNg76vyWb3KYuRLCY7K1rMXcu7YvXXpYvJ7rd9gErmRCqqiMJXJ5N888EQ5T7swqzUsyTuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSmS4kAkukr5dfnwJgNPqE4niUTVv8BEiufY4dUmp6kRKe5wmiA1CpawSAU4sw1Dp7rFCCRzfCC2MNLjtvigr5m",
  "key1": "2zgtdm5K7e5TDKeUgBv8ati79QRZ4MhHaS4N92jBJ9AG7N7zS8cGLkeVgifc5sA9SuSEeY2K2zJ5iKdBZFMbMeLq",
  "key2": "3z9yULXbdGso6uhfmBjytmmuHt4BnAEooybT4YzN6ZVNnuvq5FbkNhomdhfdjSmTxQGxyrzg5CvQZpAcZbt1k3Pj",
  "key3": "5QCve15EZ7nhtRHd4goAqn3pLksgZp9UhbyqbBXVGV6LJT1A448bqgc6rgYksPoCu9baNpKtqMbAhrXLecPd1SpK",
  "key4": "662MdpRmibSFsvHdmqAMpifSSakFNboRx4zu8rQyWEnwxvTqkdKuMAPuUW9AsW5ANcV64wpKkVKYBwh4t78Pfejy",
  "key5": "2rM6HdG2MR1JhLGr2XbVtYh5BnuSuLhydCX6k4ktQXvP7xG7Xg2QDei7avucjQ6d9ZZMNZg8QzycTXSCEthAnzag",
  "key6": "2KHHrnyNxZX9XxRT5KvMWq7Xea35HWiKzUDoNzYTLYAbEah6mwbaaKmE3LeAopuSqCur9o76Ksp4fu91PajNKDjg",
  "key7": "43DymJZdDNkksVnDhZztx91o3aWYwVr6UdLiaHf58MSA5uRmum6bBPD5XeXB3DoCGaPhQMq8itLuKow15KLYFcwx",
  "key8": "27PGcDvNuHCakMaZNCYzWyNmaaCsDYQ7kafg9G3DNjuqxdS8DYzPpvRuNkbb279EDjM4M26ftNs9ZhJsx56rRMHW",
  "key9": "39xfGDkLk7tKxmZV9iDNdoaz3D9fY9xL7vEkMsmUfqmpmGcUfrkwmn4rLUWEZuMEjw8Xbm7G5Grakp89CwrYVmSw",
  "key10": "4pJPxsGDj1cyUamYNgE6xYZcRCoem9Eh54gNDJb5nrnVbzB36TyXRT5iRwc2QvE1f4AeSLfSPps59rHqt6Ette9g",
  "key11": "HDjs9thjrHdZPRKmMasRTpohrzFCGLHsFt3ykVs6td9o6j7ejckVTkhKibgd67ypQbe8uEExP9TJiGcg65m7U7N",
  "key12": "5NkXGKFJ4FSw7uM2pcfCpNRYekaKVCVAJAXyHwpXGuVJfgWv6GA6c27R3K365RVE3CHGfRA6EEEKB54AtNomY2ZW",
  "key13": "4wMhEaTHk6v4TNpKAavZsCz8bT3ZBF9yvqnbG4GoeQQid22RDCK9EdyzhV6wdGo5CYDueZ4uckfbvLCYKTK82cry",
  "key14": "5vUDs3hn98NihHKkLx1hHPoMaYnByUhAsxv3n6xLT3w391ZXvQugQfEc2pDVSUppqmQaYXQ8W9NnS4dn4ZkWpNoS",
  "key15": "29bCLjfBF4n3NxwRxUjkYZ82hrbeMunjxqdTeio62qXUcpinFXUsAS1V7qFYxdn3TJuBBpTsQR6UKe84K5o4kvbP",
  "key16": "2uSMxYkWzBeneEkembr3AV4V95hu7mrbjF779pYYbBbSuq9UYrb2pvTavbLcLNEL9wRUUwQ8xVyyfsp8o5hxSu55",
  "key17": "5fqUQZAcdXRQEqyvKXUhje5M67nQ2tZ2CzQ5ifg9KzH7wEpLgQB1yaS8557DhyJVwTf6AexjEYefwFkjtKJSqLy3",
  "key18": "HsVcVVjc9RNhNX2WN7EhS6WNaKrzevWPBL4RYRMDxWngQ3E5kVAs6JD8PKNZ4M3bwy3rgFTXzMSHKkHcqHwd3Pb",
  "key19": "49bYfCpKnE1LfGcBw5UP4MQSzXQmayMc6s8SpL3vCx7ffkENvcZbfGt8qeReLJvZbZHTgaSpjTvit1XqUeqCJgrX",
  "key20": "5otsQGX7cb5g5GhPJueDVNFWBpZ9Mtvq8F9j4jF7QPSSfqg8EUWdffjmaQT7QzSdMiv6Fm8K8vWL9h33BwFwhfhv",
  "key21": "2yizJNvevwKq4kS799H6C4fXKgTA8n28PwSwGgSALkzBnxun6D1BkWDta18aWuBH2zo8oUapVfibb57iYsXBrCFq",
  "key22": "2scpHGCw4NiBuU7S5nRsifLFG28xtC6k3LX5Qgnmh59bifymRuFYsAJxkNAUtsCyQztVdckBxiJEDN87hPxWZsT6",
  "key23": "2VMvTZFTi39b7EqBTED4rrAKStfdMCcA2RGKE8s6qouoSqLmzM8erifXMdRTmmnYmxPsapZk4D77zxu25bYub8qm",
  "key24": "JrzbD47EiPXFRcEZLEMoXKhsrmHEnj53QKiwn9eGh8YkxF8MDJXyF3hqKKSbLBZH4Uk2Sj3pazikenVpzyh5q2Q",
  "key25": "5zx5dPDH7iW1qTf6Hi1jYcBjXA4rYQ4vBXeLy8Zo74Qmus7EeMrrsFVF7Q2JHRMyrisj17n8ULH5HMfPwaPEVYF1",
  "key26": "2Lu7uxYpwxhN7JCCXrm8TUHRKxWpVbLWPg6eQppkeW9jEudg675hv71mXSvquSX32ncTiGZJ3ztM51xJPKB1yCgm",
  "key27": "5ggLZjkzAYB4qFpzefgs4eZEdDjx1PPsyeRzsgxHU1HVJ76NkyQuE2WZaFzHnscn8JL4hncSCoKd5KzpTP8FMuaG",
  "key28": "2iGSsWLBg4EkjiuKd76Te7zpgWeN75X1nxqjJCKFaQr6vfYn5ChGAhxvcuto6qj5jh5BVJ57fWaPx3ncLYdAafGC"
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
