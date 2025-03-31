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
    "4wCE6pPvZwPdotebruN2YxgJbJKE8QY1SexoJtRcsmDhq8C1Yo2zWYvRGNbXFQ7tB6bqAEh5H6hiZsJnK61FSpd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yds7q4JbFN7VfybGhKGHozCzVyF7AUDw9DFadxT5crtZ9GvyV1e4iNKGGsoJ33K7F4Kf4i9v6HSAUarSfDU83ka",
  "key1": "2iMym4jTL3xmNR8Amx56wr3knTXd9cs6G7iw4xfFzo5zPSV6EFNUnrX7kSwT3DQWFTJgpVwKcqLDfToPCmdwHHcV",
  "key2": "3N2pViJ1ktwuUabTBhkPKHEVQTsomP6Aec66oDAwbJ6FounwBoam4RBd7uzKsP4CR9URyL4gaJjHLKfeBcyXhbR2",
  "key3": "3t3koacHe16hfFVjM42exekS4WobtwDQSbaQmAjjvmz7rKU96mS5FaSs8gCt1AVn8dJ1AuW1JRrDwAVigNCaEa1A",
  "key4": "3gHUYzi5LCCXsMfjRPHyW2UqEoFUSMkcWkSCgi8xEN74BwCPSmc3o3XvS2ipV6GaXBpM2j1Pr8wXquUvgJf3ftg",
  "key5": "urTmt2bHnxF5R4WeAzhCJmGhunVCbMw1EfDy2ULrELWUocgoti2qfEr2nrnPQV5syWBX4g394cPmhnWB78owdZq",
  "key6": "48xuxaPuTHxhJECrvFLHgyzH7kfAbieBipoN67GhqeCpaEsHDe3hucNRSZ9rxMZdz38kYLfC6bvqNb9jomBZQkZ9",
  "key7": "4Q1Te8uLXUPLL7RgHarzGSyYCz6zAkz7EMkAXwK3LscPaGYxNAC7uox3tnMWtoJF8jDxDkP1zNnLEq3pZUwbCxub",
  "key8": "AsTrdipGAbjssTMc5DAbgJ6PCVF48zT2NeiWDne8h5CNrfyzydiQikEfLGxN2imVuw3ShLGydjgL5pr5pufxJkC",
  "key9": "4rXdL4LRhMKRNcuJKopTzRdehWoZhp3q9Z7EbyWj1zfLRyBYhPshkZ2LvJMZu6LDJppw7HQ1BCm1FRH5YJn5T7iB",
  "key10": "44p4aW1188ekFt7fcq27S53EuuCpDMm6ZAK4h2CY4Z2yxkZSZNq1cNxf5eg1iKe6NxPLqNWU4gY9RKFQTnb1g4vr",
  "key11": "5HdxdfPJH75RcKB2xFXt1XL5SemeMukyPzL3QmkUQxwfkwNJQRj1UxnJG5xfJKC2FzdoRmq69PbKsfHZxYoekfg3",
  "key12": "7gQW3MK2ch6qrgYVBAJ3GxNz7LtUn5PbEjBu22s2eBeuVBrtCc6mvx4udU1jg5recMsWQjvqL46Q93XpBLzqmiz",
  "key13": "3KG7o3ACdbCYG66owzrNQTSzs4Qwf3YrwiEzuF2XNsXDHp1on2Po5wjozwnDPgmKFMkEErz3TdZoHrvwu3aTnF1i",
  "key14": "3LJsjV7y1soq9X5H4qfEUFJ3bhbprdDzMLpBGzxF5HdwZ68EGcD6boYDjfazo2kVe43SxYJ3T3muoSeW7D4cz7AL",
  "key15": "5HW3zSj2eyrwbte8vBqSXehjREMdsfovxCTarYkBrhC2moDKFJ1Z9FMtqNsMKSdMKhtx72epF4WAPbeP3DhbwT2W",
  "key16": "wiG3RWoKRhSD5kESXpdbafqnhypDyEw29gqBtdBJpg5EYfRiczFXMSkRasaUbfkpCDuZezLnybhYe2AYJdG9S4d",
  "key17": "5C8oU2f3vpN86gZQ7ZzGRjyew98qnCmdjzGrpCkXg4h4FKy6CPDodSt8mRkdTWmm11NLbQYDBWdm8XTZEnBG56XR",
  "key18": "2sw4AT9xyJC5LPLyojsx5dWCYbxdE1RqHBojTNqJMbyAb3CpdfFNfA5UXXhn2mxpWChGHg6r2Kt3RtTE6qgaRUn1",
  "key19": "3zoWw4PUpYZqiXYqjr9JvbcXyN6fzxPtQBEn8NqYc9sL2QVBcRWuXYmrTbm1uQFU3Gfk1AigxREFokkayqGEASXW",
  "key20": "2yFEvHHNs99SaasKNYqXVsg4GGzsqZNX8t9eNTQ5aptyExFBWek5tahLuVDsV8uSUuKP3xcYAjimwhveJUAqaJd",
  "key21": "3cxhZqTskgSVanQN4v64VoAoPp3aa2ShztvWhEDHuDNsvojkXYUYX8Xd1gSFZvmGq9t8pck86FRKrojFTSsA3dZn",
  "key22": "5fA1aXT6TvvAuqvoB7GHQWD34n94Lto24goGgcLW6tCfmfK755Ptb9h5uLn85xGbpy3FL1N8GMZBZ8ypMex4wAFo",
  "key23": "5eLnwQfZKHcu4GhJQLh9v3StFWXcsLxB3rTiBWafV1F14V9Ci8NwUPmikzMfXBds8gvFT6XWRUbwCohSdHzWcAiH",
  "key24": "45ofBAa4C6CwBMJvqgHGq8PPdiS6qniSUaPecYp5qn9j7bC5VKr52Bp6CFH6Zz2Y9pfCfquCMyWkaC5Qr9cquC7u"
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
