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
    "5GBPE2ktnSgER8zSAF9aXs76uxLYdZ7K8dviQV98U6n4YjCCakCmWcPznsKwKXQG7Kfh7TtUesVw3Uf91TsmTrRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEY1GjQ27MDcCU2C4oXxooy3Ldt7HpWK8SctHAta49sLY5UxcdqiQtPAHiU6tN5Shng9fvb9bZSvNTXiaqmB7K",
  "key1": "3NBowwaEMzX1cxvtnNuNgHz9fJA3oXWCHxKi49TkUyG3C6T5S8KfjJn7nx73YnuEGtN3eyDhsLExmiF6qei3gajD",
  "key2": "4YJfAQP4Dj5YuaNDapjXyYuRMvKrJtzBPbfLUJBg9HEnXb8xPffGHzwkGqAMergnEn69R2A7zZBf2f1pxtTq7hqV",
  "key3": "tYrK9yK8Cf15o6oRXifnZchHN5TKqwPRHmgnRctgeaZTiscTgi9qfhJQrLcVz4Q5qaRzuUZQ3s9GwVk8KK3cmPa",
  "key4": "3McHj5Wd9Pv4xrnWMZF4wNX6SwqRTt5ZizJ3TRErX4Q4HUERZqS8zNRHGqSa312BTSqmEu9zevrUeQqLnafLSTFn",
  "key5": "4QjHCLZAUoKy8tBfkE7swLVNABnCPXAaFipTWhEc4Z2xSu18kYfySi3P2e9mB4EjxmZRNyt4PKxWbVLAtwhcsnqQ",
  "key6": "3pkNr4LJQUGjfwEeEkwJjb8gHW23QXZWfPKTCCnHprTXdHMCxaEgXnazJjJgmUaSzGzriWX7ZsopBDMWQ3X7EyAf",
  "key7": "3vDnzS9dgYZzpvXFi8GJuD61Kqzz49xnzZJiF94VLjE9L5Ux4F7Q5jxWbridRnafGZmLvf2CRQX9RjGUdEakDEfq",
  "key8": "2LfbgRz5fom9q4TZ3xD2Tsfcpm6yZccMQxpKKjLgGS9m2zefTNT31PwzMHJJ2UUZatvrtTLiHkvJRJdYrDYeZFbS",
  "key9": "2NVGiSeUC1Lr3FyMKUQsT49d4Eus7iDa2vqPsfVM3Eu4RP3YxRhntUysKxePe2AdiyU7Nik1FRNM9xzymychZ9mk",
  "key10": "3fvvHiNE5KV7CoqceESMv2RTq8LoLC1iyrr2MLuMQufA81UdNJhELXK4USDEiqMk8R1d1TT4gXai2pren42CvG6H",
  "key11": "5TmPVMEyh2MCJxTqySdJLRiV5DZeDg69VssfWaYifAQ6AUrXzGABoG6rfuWUVTK6XQM73bsJuFtGqJ24MiAA1Fff",
  "key12": "5LKonPDXAy9onK1qMdszwjnCq7tppRcUYfQL8gnkw2Vuuymq4w2dmMQevM5GEF37mykpg4hFumpvjyYt9EfAxzU7",
  "key13": "eDpjjVdVUNTJ6VybneC3N8f7WqhubdD5QSxKoHRBj28pQfCeTNfQz3XbyPr2cNJuj1u3ZGvitXthU2hzZBaE46S",
  "key14": "5u9bmNGHq2NgvuFgH8FiDK5Wb8FhtjznEm7g6X7JZJAqvxP8ZdkUzbfA9A9MbqKP6z9MJVFkzgWZooQ8QZg7GLSV",
  "key15": "3yZoUaJi9SCaJvW6fexKsL8LSyrmGoJkNBR8F86pue8SmEyGZCEawrLds3rPzamBfK7wtgQHyY11skqUH9s7JLNZ",
  "key16": "4AUqJg4CdQt6pLCuxD1BT2NkPfVEb2yZPgdPKGejQYDQZ3yALMDGyHnD3hqbghTFA8kmgEYeJ49LvRbXTp6wrpZz",
  "key17": "5cC57Mqj5Qv945jfp1UeAvFz35Hh2aGGkZhJXNq44qC4XrdGiWmxxwk5HMQo55L9RwbvSDRGF4co2KrA9jR62KAi",
  "key18": "R52XiDFLLHFdHX7sMvTpaXtpBkZnCBiyaALmtq6ptUqpb5axZsEiXEZWJ4zxcsaPXsvSNEXgpQ3EUfV8vdfKjZC",
  "key19": "47MFZsmiD8w8bVJnRHfXTLfkY4f6W3KYaiAnEV5TSFSSSE2V26PLQT4Jh3ezi2LbTjzuykiTx8fEZS7HXps4UDTH",
  "key20": "3qW7GiajCs2cKWgpJ4q7QWzrusLLE7FZiRRE13L4NV1xydcFFzYRet5N1ccgHWSP6p3ZLKkBKPnsKUmvWMTJ5gnM",
  "key21": "4cWgcJWRmrUokTHsRpmn1gxerDsUFmCkhrR9hP4BWNsXTUEAkMm2dofcVcahUWmp4x5sjBjZKrs2daq4DipxmcdF",
  "key22": "2Z7fKp5zNmr76QmZkZqunEpoAQ4gFXhdJarrVSok6Bv1ukQM9b223zRd3un6ifhDhMXbveQTuufAMELfv81dkicC",
  "key23": "zWMfWZKXsCWuBsdCPCP4AJf9jT8RjeEJVk1hkVMCEVyP5cR6UtFXiN5kdYdyFnGmwrESfYajJL5iQUaxDYhKW7y",
  "key24": "2NYWbrzzfZw1wGP8YcsMd9SGRhrUdfqTQtEPSFB2JHLKvAUb7kSDfeS14Eq6ypr5WvsSvcotv8R2ALgeuLF6qkM7",
  "key25": "4egw8qQ2wpapxFbBio6sr8JZZ8Nc5XXa8svBsPN34ah4EX1scaHgVqMHnBXTxWLVxsp7rGNfYjnSpDBtynDZM1Hy",
  "key26": "4GToQQHW3oMax57H3Vq5fQVRjmz2SMWFzvXtKFQQXwEzxSUQmoyt61zcN6BkDHvWwKfV2UAcTrnvrqfiYAyWfB3N",
  "key27": "3gTAJoL82PFoho9RY9wPodR1fjMZw6XoHXx8rT3GZcdfXSSWQFaUaQLiCUf6cbHtprWs9F3CWaGfvhvCWefKCu52",
  "key28": "CvLYpFq8pLY2PWcafBzRySmFBXKc1HZ6oFo2qzdBKP8XvXsorYy54uY46RzJAc6n1puUQgqV5cV3uMnmFK9uag1",
  "key29": "4GK9vADDiGYqwDQVyb2k57QwYqR4yGnvoDGvdw8dL1uyP5nMhTWAwRSNR9zaZt8aRCfXxomQm9dM2RHExLrL7UhN",
  "key30": "2XGzpDLh4NhMA7dEvn9yK9hNhknsLT3hCdUeP3H6JBPFdqc6jXZw1SDREhwWhV2y8mWWudgDhmNrvWB634s2NHS8",
  "key31": "22gnPvwaqnGvyzgU1t9xiET3VZWMfDAGP393NHw4WFzkJjCFDqoMEprgBNxhgF3vn5C2qLS4ttVoUYGzRLPRugX6",
  "key32": "28riASH1d19yCEMhgmwSey5PZ1hNWh6zZt7iUYkCHvU8q1qh2RpbzfSAQ4b3b2jtnFi3FbWHQCbRr9pNViLEPTeF"
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
