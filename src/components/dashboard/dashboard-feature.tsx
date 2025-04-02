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
    "2ZSzLzHUdZHBFam5QRXqgLACzzNT65HCioV1gamFnconQjSwZLrD4dnS5Lak8pA2ktYAXTrUU2VfZxG9cRf53VqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cx2W9QdTEb5sudD2QuTEAx8x5abxdMcB5qMDVemrpNVD75b3iw57nQVJ7WRXSPT2oDDyDsEyr7wnxWhiRFigiSC",
  "key1": "3C7fH3MXH32KbMFjLqFnXEGNV2L7DdgG62gjf6cHeJi1pNg2uSCzaE9p1AjJovykQvJ1oQxdPyNrqhvp75WT89wL",
  "key2": "2wNBfJk8NH7KhFu6o3PsKyxxNGYDBjCSieTqUqnxaNx6H2igzrs1nR7nk7gfAvxoSp9aujhMdzwRse2iBZfDW6N2",
  "key3": "5LRdp3z2wv3MTLNYzLJyCcn6uawUoztUxjbKrAF3QHTpmFpJeUdSoQYEGN1186BJrwjCU9pqSGoxrpE1DnZkKfvK",
  "key4": "5mET8bp4jKaRKEA1UKqE2p1rkhT9xZXveRWRfB2a8gCXrPScwhC7bm8XpBb63UffZkNDeEDVyDhhYd8HfL1admAh",
  "key5": "5X5Ni4tJCtqYGkwpj3iVG9yTsRK5LHEhRraqXcTJcVNsv32RsyPqWtGcbZMSyHV5htCQ6PZ23h9KRjtkuufQCaxx",
  "key6": "UWaSJgkRqo9Lm928Dp4qaC6uhAwyPfhv4PpvB7EX8RkUCJwQo7BgUq7cNKSZV7ZZdiGVfDJ6bE8aJfUTGr1zmva",
  "key7": "DPV6ycZgbwSYKnhbKL4inYyA7NZGBYiDpBHEGdHK1V941GX61W239xrehQ4W2hVmDZ7YLn8e8AcaDkBQyRxKPVS",
  "key8": "5Ns12NgnLbQiB81dauxhupasbkb8v8DdXhg8xtiB4FjaYdiXuKR3CjEuaezmhHnh2QQo8nubcNJm6tZ4og6r4gCc",
  "key9": "4M9vdCNJoryqzKzt6g9KYrfjDDn3YnJDi2sz8pDkrmfYQ6UDB7Dpt3vGgyPT6ogtU5qeLnZ9f4GXmDZrpDn2V7N",
  "key10": "uA2XDvBHKeZtdeBKnUxNvaseA9Rk5gZb3LzfwDfxJ392wbovmKV8AbBBd8hCq471ecEhp2x5qgxB2c6kg831XzW",
  "key11": "4AwtxgZeEF6mb8oZZgsRxmktcVTCvbndoGbCkkSK5WymdehrrFf3HPg3emfxqBMvk1xoVRhQsPtN28KeuHMXJgxW",
  "key12": "LuBHWz72q5QrHjWhBZUKpACZjpmhg3iRdPGRPwZuwaBgL3exRfrFoQWgYDJhgAEhSU92VReMENqTq6ANrMoAoyC",
  "key13": "27cHfkpXeq5eiJfPThM5CMPGaGtGrbhZSNeoAGwHpzEHeN35Ug4BPUvHRRzMZqFyrAWkqenVF4zVimpqE7x4TtBf",
  "key14": "3fLd5Zsyo3pdMcAn1yBs97NqgTZtPLMJeWE4WdWW1DuqbJMcbwX6UmGnev8kggmdDek3aR19E7w9Jga7y3hB8Bpa",
  "key15": "3xR5cRQQzzkeEFGo7hgivCm1g4BLbrETFhCdKFCsVLDprEV6xEDZEEqHiEKfDUwYfMx7EJuw9eRGNdF1BZwTa4rr",
  "key16": "9N8wUZFfkVHmqNCofajfLAaqauV9nsVBF1FjgWxeFJvQctWDaT91EtXDZ8oRTCupbfQRuQAkdBNpgW7xWo4bD2m",
  "key17": "422Zz8Hz3Cc1esGwyiLAEzD5R8k4ATTsJiiBMh3T7MxFoyrkYCjTojefX8Tf8FqHqWnPoccteQ29nmSYC8abZniz",
  "key18": "2K49jdLgzQm9fFf9Hkzpxo4HYXCobGSB1uJDNbPjVmTibKmCPaHEAt5hChYG7myz7mx4YXSTFkE1i1De7UBdwR6B",
  "key19": "4RBpQvUWZGgY5XV19oXhnkFhnb4TJ3xaSh8K76vQtpYURpy1RiowEbVs2ACv17KrnCgf9UZqUoKGSCAyvQphjR7g",
  "key20": "4DXg5wqYCHnVQRg9XkNxyefKsRfZSXEKgDVea83PpLGhD2DCAEYfLm7Fp2F8PS6G6yMAiE6EbWZXA3pmtfxpsX7H",
  "key21": "8DenUQYdw1cqeVvQeXnsmmoiJHKmD7HfpgSqeaZKDGNoRHjBV5Yp48UXzikvtLprL8kGKXwR1NN34WLJ7ovTJAw",
  "key22": "3P7KDxzXVVBh99WMhmg5RjRGpzsTPwLpQh7YLfDfq1hNkEsm28UcdWPuxNZy5gqQ9NL5Bo67BJ5AM9LxPS2WmPfV",
  "key23": "5zjt1v8Wahf3fSmMTv1zhKWsWMhDCeP86yriGNmAVNoFcFTRsBaWvfJTYWuUhfwer1y2D54mhowMqsndUX1auEEQ",
  "key24": "4ZAAJ9KHPMWkvm6aLWC2SpzMfX5PFdmSGEtCmqSS97xQUoUKRKNq9toWdu4rb3X8GRYwQ9dJEmZUGnAzj2qKbdmZ",
  "key25": "2ixtSAF5AefQMcuBpKtU7P46qtrpSSmCDqsHXKeTuganzS6XHuZ8BPuiMDziA6PBnmL6hfbbfoxzH2fVJRwMLj96",
  "key26": "WomxwtspL2KpRPVicd3aqfqZcHqQYdeqXMRSahUE1UMYUe4oShLQxhqudT59xaNDnyudF3zPMu7ckZjtoEAmpNr",
  "key27": "5o7K4PLP4ZRdqTH5XCTeqcMaBQ1L1BQjDkmSA6bJDa9HjWPsofbMKdTrT6ittwbcMeLLUFtHSZF8DmU34eaKodue",
  "key28": "3SzoiQboPgsEcT9Rb2BjgrnCNFLbTPTqX2T3RdP66UnbuXfuMFXQ1AVshUL5U9fyCiVSNHJHR86P93QMEsYzdhRc",
  "key29": "RnT6Sf64o5WPVFPoeckVTKoJLxauQCwNKPh8sPWzXcD1WhtbVcfnyGbfSTcRXTyXYexsstsq4XitTKFqj873cps",
  "key30": "3yJCqpWEVd67pRsYq3sKkWnHgGx3t4aNcHQU4NN6C6BC2pkEmxLvTFs4tU48D58nv933i9PmR9rksAJK9nLaqLaz"
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
