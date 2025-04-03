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
    "4jmwYC95omQnvxaCZGkyqgWdmdSBqB3CMpo1K9kLMHBYuLdNcf33kyw6YckRA9Crt4cAaY1Lo3pKW1Z8u5QLxi9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYghp7MotS9NvjjZNUKRs1NFw1aCYYVWPT8AgFBfcEBpGhFHgVgwQsSGjyrgaHVSJJWPfPmK9fvmKEqQBK4Vd95",
  "key1": "5caC6bSpnSw3mMMXNvoEXVK9XpSJRHX3MRj2ufjh2hnnhE3mpEc68Srfic8VG6Qa2jcZPvWjXNgpEtRidnBKkNcX",
  "key2": "3cTx8DjmU5Fq4sLJMuUcJKRjqMKDQhVUZZs85ayJRkDAfyyR4cf3wmwuEmboNU8b9oLhLhRSwiEydzCYLTyKncH5",
  "key3": "fY72x4kHkypN4YQj9hsn8fYsRCYR2AuLyhqnPWH3MJVqXGgNRQiSgmebEubyYziW7kjxUcXPatGFXqZXtpdzbeS",
  "key4": "2nZqXkjYJ8RHnCaR1sgckyg3opggEqzTo2WFo2wdhN7d7phB51hAEpbEgx5k8JujYa6SiUxu3q93X4RBni3V6ECX",
  "key5": "4zJEvRiqD1SqeyfcwkxfW5ahHbAdbTnqxcmFhHULgH5tkwVuecx2oh74dTm369bKwNn6wtG4618jn2YJ2MKEGLM8",
  "key6": "38mw62k29YicfPv8xYg4Y3g5RT2RyEevT6txdncZKEj1w6wEBwWZvbJT8ZLY3uXFNmoAiWxJyx3C4AhDxmrUAxeG",
  "key7": "2dgHCNd5L4BsaXsUsqsszzp4veSCzgpxQSmPT6qBDzNj63RT5LAAXwuXSNe91oG3BeSoJoVTsGrXWbjw55dgxrkC",
  "key8": "4QvfrackYdE9NeMbXhkpBJZzoVvw9o8BEkYe5CJzG6Xa7TYTX8M9NyuanKW3618cjsXgeVtKLXKpDMPGvR2gnGsF",
  "key9": "237XWunF2QWbu7GAd7B8w79hn4vAytaGnzJXFSHFCgDFKq2j3pJFQex119FoqgVfMipfSNXTUba2MLdKnLX8LNPG",
  "key10": "2KZ1tP6LBPsdBEL1EeYk6H5TTQfmXiw27VSKi6x2heLFsomNWChiXiqVL8o6ASLvCtfT3NsZKUrHCjk86sPvdrG9",
  "key11": "498d1zi9MoPiJHK8MsZf1wMymfvUYJhCT8ahTa1d2QmEX5czhz2n1RP9HDU4VsmxTeofCZAMT729tu4Zwq1aP2xQ",
  "key12": "2MDLVi5kahCsbBTxnnueatKq1i83d7nH32sbJ1ugw9auVMsMzPPkL5M1aSxP2vzKmi6Vqf9hp5PA662egVTLmkMJ",
  "key13": "3PhEdRwaGBwo79ZVQruShDFGUB3m5yN8UdAoEdhP6MeUrz7uUViNFKrh4SaZup5phLvVVjbydzxJdhhzGFn3VKAK",
  "key14": "2iGUeuFzkizysKjuXfMvb24NHjn8nDithwcyf3HVyB77GTo5ecFWWkYbZEhZRTgBnxnBDzLXQjvdy6k2B9WbCJup",
  "key15": "MP91JUpiqa3m5oyxB9mFS5qjTuwBRd5CXMQRhbWoMiusLd74VgYHZMTh8VvPQbVPUfnHsyMr4vweyFk1m1bRZFt",
  "key16": "4MpNiwTjQNCPHPfkC97NnJC5W3aacjVGVRgM8eMj1g4JCfTEjnJ8qbVqUdkzCpP15u84tFs8G7jhLxHRLSeUd7pW",
  "key17": "2uPU55A5AY8xEGtNCGJ6YxiNQFUEXQrYYT1t9Roeu4QsaWpEGuMthpdu7DAEbW7JwkrCiTz6M2o2fnGq8nYRyLTY",
  "key18": "4nEZ73jepaqq3PQmQi17xnkcTdVv8xZy7sUnNViQxfq98mD4z727FaJ1JP3bBJdkPVjUhFifNrBK3JzKJuBXA89H",
  "key19": "ufns9nocFc4MJsn6KnzvXF9j3CW2R9Uj2YBMcWnqLu5hiPLPcGD8RvSBp5Pz9kJD9ZixTxqZzMtt7XdasSQymDj",
  "key20": "5EzAjeQMGCHnVBZL1E8PG6L1ZZ9yTqAHWjSY6moMyTpK9j4fjXddNFbkZwshdZ92wVQPrBdUuetCLEVPSWvMCmYa",
  "key21": "24hCq3qK3kLEKsshduBzW2ccXN7582K1aHbb6hJ6TchyUqfi5UpzNC7PuHbCQDKdAdAKJ4NfQ6mZoMZjkiKGX9uw",
  "key22": "42mzS5S6M5D9a6J7M3pkmeNPymjd74tJGvU58yZ9g8nTAC2RtS2ypzkxmbm8x968WY8ord4WPmVuQdmyFFYde9nF",
  "key23": "3wDLg34sxJiwzpbVJdcSMJu3HPzPYaw1EtViA1qDXny1iJocmfQxsNvqWipdU7XS8NLUT2WDhRJe3csLrh9646T5",
  "key24": "4Q4mZNDmvqfEQaAbEAvqFUJy2UAjqmRRjAsrSXma9ZXVLWyKPQDU4uExwy5Tk5Bj2qKsVr7EJRfFQ2U5CYP5Mt1J",
  "key25": "EPuG8UWoRbkYSbyGqbqHX5KgLhBMmDxy7kBrfnfJtAB7heVZdK3P9aVxXamkGZVVBdpBLTAFcYcwiJ82Pg3CUv7",
  "key26": "2rjgBRLqnMX8d1bovSHYBijZwdL1BiYcWECugfdCQgnW5rEFjs5UHaszBAsBptwmtnYqLJ2gRJ52V4Ad3i8iZUXZ"
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
