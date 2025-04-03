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
    "4S7bcACyrqEAfrJqXhGiGarXMjTCCXE4pjsSZ4qvF46c87RQeUrqVZn1y5ZUFSGJKF8zmA1iAtZa6nQWMmR95RiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpXUbs7Pd32ttq5tCvC55vUGvJhgKToJzFgsSeN7toMomtMRGRe5hz2oXKbAXruBWW9UeV8oHb4pUT5izghLdTS",
  "key1": "44rwEY9rW3wKwHGAZAG5GbQ3sxr3sKhy4q4xE1TyrroXKs1AJbgaDupG5xrTr5eKW9uRnY35LKGiAzDEQuhk5umi",
  "key2": "4RLdLwDW82MaFnXRWJbtQAJzc49gevd8eHq8q28r5tWdAj91W1cA4XXnAwEj3wfDdR3PsvfCpyciaMFaSVZdhCYT",
  "key3": "4GahrA8QjCm11L87a7yuTR7nUZk3KwtvqNjfcf9yeUhJMGrgPbPKcjb8URRXAEJmT4XTi8xQsa4opd88mfxAtWGV",
  "key4": "5wFfZiJXsqM4AbCrJJQk8su35Mn7QTWa4KPsiDDJy48knAT3MVHfCxPgAHEkbaMuHq7NE6uFittTnmGKdEC4r2Qt",
  "key5": "5MkxdVbAQyqa1zkPb9AMXvFkkqeqG7YRcf36K4kdHhf43DqFomGz4cHtHat2zemgSgmzCY1Rda4JyH1krgrWQnAu",
  "key6": "5TGZShwdbQxfK7LWDYHYcxD9Pz67bYfmqe2duSFhZQBSwH8KpYmdmtYbct27ANi7RFmWegRyNRaJLQVuvieTVtzH",
  "key7": "2NNba7fJAsyXUAg5m8u9cii6jjCmrNqBZQE7eSP3LEuMLSBrMBj4moDt2rJWoecnZeNEDm9tw3oD12z2QYd4SRRp",
  "key8": "3BHMwtwwXmL72hU8UXtwRaY6QPdUozCKXYPgrjRzsVJyxYLSUUrn9LHvENtG7k7en9onHcDTjv4rt5QjBP7GjGzn",
  "key9": "4MoWEcw3EB6sn3jqVzK65w5a66igydDHVtvkUgARpSiZHhcb1k8AdotzLY5TyWb9LUSjksEPrUmtYsaBDDUg7p5U",
  "key10": "3XpN29YNf5W41xSnY2srKuEVKenZt3w52sUbm6F8G9wNque9rhb3y4kSQRQrF7KDEBHYaRYKrdrXAea46Hn9zxRP",
  "key11": "VQiJsHcRKBgJycztmSrounTxefpXTZJWatUpKW19g13UDnYzik6YAhw2ecdBAnUQK4nQXUprBfiX5Agj8h73NZV",
  "key12": "9U9SZzcmzfuHMSKajtveof2JVfT21a19eq5NUhtdhucWtMcrZ5es98uxkciaaGSdkqv3TcMqYLRheAM2dn5xGMb",
  "key13": "eLv12EtbtgXwFCqqUehWcbhe7G6btDZnK2ZpbvZh4HUsnwR9G5XiHnBBHV1Q1KidV7bxfUL9UMbRJcpXGLrjxGk",
  "key14": "39xe7wkwUjHW2fLoZjAYDF1MnRKiMfBBWG99y5mWBD9V1pSpHqgUxVuwEwpEnzb7Vw24B4fbvUKU9N53vX7Td2z3",
  "key15": "43z11R6P9eSgfKmXD3zvwwr1sKhD1mrBYy7YQXVLasVDdicdo4zWT27Bcbgdt4NJmS5jUxYS9AJm72ZZ9YCwHTC6",
  "key16": "3dYmwUBkEkDjhfFraH3fyy666Rr1uzvhFeFoTCSswiN8JCAFxovwBC24MckmwrThxWYee9gerXbtYXiBkCuNCnmq",
  "key17": "3JAGyXB2D2e7Y5Zghti3yeqnF2ZGjVV6g5nSSqFTGicwGaNMqNJTmmxT6Qmyf9TTVAHCW2YXm9owrTACeTWYsW4X",
  "key18": "5gomXxNqTi2odqqMEz71PSTb6dBS4NcJoF1preCk6m76rrsipuCpnZX1LBHQN3eMdkuxrXBxKnLhRV8x5i9mSR8a",
  "key19": "3XwsLcZFgZoz4Y8DjkBM43tTvuWTE3EjHijsueXLGsbCDdtH5WJWep2n8NKTj2nC81YZJAFfmpE4eeJac3fqPjVi",
  "key20": "2QUhcSvg4JmbDC1iGHmv4ChTXK8UGvTAroRKFFKfH2383hxAJH7JKWdQLLCKv3VzyCCU5MKKFaK51pvauidrVNV3",
  "key21": "4WwKakZVfsUKjovDmdsYDBpJnQc4xKBSReyPCPvmNgptFFRiB6P6pEMkemdYCZgYK2sJSpKDdjsnJ4m5CUGXZi68",
  "key22": "2ufpfaSprr6hqdP6gH56F5JWzjSr5bnGb6eKJRK6CvwQPV8ijTW9FB8auN6SxnmbJoK8XkLYQVxARpKk1Fjm3Hvw",
  "key23": "3FtXhqzwuTRXAn39TiBsZ9sgUDv4e8FARZa3RUHwfFDrHZiXwXV6EnGADhF48KaAxSBkJjG32BDVk5vjFWJRbgoY",
  "key24": "2kt3862KTQDV12YKLRX2ZF7A3VmDK1WkHDBvVCqQjjdFXrMCv2NmPDGAWmDLLv5Uzv7QfxmVZEJ99MWstEgEmthy",
  "key25": "3qD4jq6evW51T7UeYrLMZxzUXQkmbpS87htwkwjuYKB6Vm77vqxkJyGFXV6e6e8kyf4jxHFDrgzroPw7ZybqLCm7",
  "key26": "5jS7Ry3bkVBEhou6Aaf8ou1S8VmabMBvHZxUc2H75omv7u9WPK7r8AvjCdW98tZLV7F4q3TYkdRyybxT8xENyRpE",
  "key27": "UUTVwLcsvKpcR5dUHPFC9dCh4PRxAkYP6Y7Qq2HGZWiQyL289zhMT8yBRZoj2EyFtTtwQ4VVXNB3myTfDf7MyCM",
  "key28": "3yjWHMBRNPFuo2EZB2WN4sdyTHz5VWC9U5DSUcjekKgfbbbfoNofFZx1QCJD6UaympCm3kK8w9ndKgoSnit4BZKD",
  "key29": "2fcLSssAV2TKa5rz3cZB7pLvuXhYKL78z6dec8bt3b6jZXerWfwTa1g3C214KkxzQjmAv1uMYu9rtkBtFe1ZUkva",
  "key30": "FccUCbksCMtJdGCeZvoGSXHQU3AJYUtkxAeauw5aTCJfgmbSBaF7ULNyhLfVW2TK8sbco7rKfEK6Fd4wL6YQBw1",
  "key31": "4aExRYMf7G5xzaSsbUdoWCyBw4a4AqjRBCo5VzrhW6mpiCS7Jm4EaQPEDVohssHmRn6RXDbGUDiFu5b6L2HdRB2p"
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
