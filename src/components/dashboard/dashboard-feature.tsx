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
    "2haMLvZFAaybqSJaLzACwprBuoZ9f1EZsLW9H7RbcgciUt3rRcyoYzLhbHxetTFrgpCtGyJCQFRAFMnG4wgDSuyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7iuaEzBzRMiukEDpLFPEpiijw6eCQKpPcNATNxgAQiYsC9uXXLX6L3tfRdz39hrA2TAs7WANVZhs48axPzn7g6",
  "key1": "4TGuCfFUssVRP5b4EvcTseRsmNw3WHz2WLgBYpMMFNEkZAaWRVS7YFg4kBwgh2hWo3X3knadZqawUaawBghSwJGQ",
  "key2": "5m5d6K7wKfmWvLLFrMyceSWbgQqZXF436xis8SWvEvctmYxPe7nG7ZwRaaQg92Nt4u7ucXJTNS8uvFrvsgmMJwLu",
  "key3": "YkZZrU5vP82wxNpGHw815ikP3CcYeRufQ27Wbu4GUV5vo44idE3px7G2xdwZw35zGxZRaVUWHUij3N8mAEDXGud",
  "key4": "25ab1ah9wgXQ6pywbP8zEDXjH6p6qDV4wRNU2DzYLrv227uxLrwkQjzTS5LrkxGVKstohZTZPJCFuTYEDFGfXyyP",
  "key5": "2jbTtXT9GkvS6n75WXVaPWL3A5HzgZdUSqCXvxYniD5Rrscq8ju2fikKe9LFHzZ26J1PNJk1HwMuPxnQmf2wb6ai",
  "key6": "57KFkFa9sERh27VNLVgUUNQdCG9Dmmeb9G1FjfVYffHhxCzotx5G4M2ZxjQTmZZEiYyWZXv8rD7YmerhshE3VFpi",
  "key7": "Q3xzMqjPvuphTCvLVBmGpU17HaVGkD63NkpTqjxVEnsWVJ5Xiw9UezNzN9dwDC5rC3VT3JSG8LZCnYcrLtjc4gD",
  "key8": "2DsJm4QVgFTw95fQzQp9BhhgUEZeLmeTpNYavTLoP4pQboLySJnCYt3FbFvcJKsVAkb4vxoNv9F9468DZULKbo7x",
  "key9": "3nV1NtkyRAtfo1HKQ2LSbk3ATgA9kTP8EqSdryEmm98Z2kfimPc3qmbNw8imPi1ooRYQBFFAmpFZ54KQtkRWLKyZ",
  "key10": "272dNtMQE9o73xgBfU9xovCAMTDVFGMSPSnrFMAdXk6K3z3Uuw15XMTfMD7rTyYae3ydBvvQqnbJEBQ6YwbcKWsH",
  "key11": "3AwxjJqwy3qdYG6t1FKwUAhf8ysTw8GnLxaveYZf7VLvQydGph2fTcnk5KKayxAs11Gt4tZiLtyiaeKMzsVb4k56",
  "key12": "4zGoqbLv1U8b8MMHchByP9dFGjxEYB7dBx76iwtFfqV7gARiA75TnMALWvhuD6RQAAFJvyRuJmxMh8FhkHM2vBC7",
  "key13": "3Mgx8aLyvXaGCRoBPUGmz6FV7oPnvYYSETSomXf2ubuBDnyrkgEyKWqasTsma6bELfUergSerbWxHH8msWKAujdq",
  "key14": "63C8WJrVmaCo7FRsmHxwq41rztSJZaXqBUAzLkLFTvNq714bBDeKLK23Nt4sni153g8JJF4ZvFEjXqmUfFZcKzMt",
  "key15": "47QjQugNvCvXsPkYGEZDGvWEaHavkUwAz5fMrmPaorHLMFkdHpi4v19zn9AcbDXjdj3PmDa2YKZ7Rx5yqnxRLiio",
  "key16": "5znT7dKToZJhFJrdFu9BgQUNeeMGoZtfWMGmvLfPoU9e3EC8txLb3MaRdmjM8dt5mKJBSTdU4kfw3RRv6Jh7xHyR",
  "key17": "3T6qKcgkdDdd2i9LMcSLpWtsGVpHXEi2TVtTU9X5F9EBB2XabzZ1D5XpNygMm1jVcCu86sTvoKEYgrfc75Cg3RMC",
  "key18": "FHm2RSJNHphxx49ZDHZ8vsXhkhpUWm1WL1AzEYCRpnFL6UnfgQPViLZ6B363zhgFro9waAphMqDw9T6aseRCMGN",
  "key19": "Kk86KiZFV3MvjyT5AuG3r7ipMndzABbojT8H58Uy4BXsjKryBJPy2FMnczdm1cDXnUGNJRA3MPm5s6NbHcvT8PJ",
  "key20": "2ucr1K9yD3nsf2DMNHJAfvgjWftQoG2kJPEQ3sf2C7q3kGHPWnfmdomzdtjw3eUKvHTEp1atjfqfpp4ZdvZ2qdm6",
  "key21": "57MLs8Dv8rxHybehy2CgP7iAABuzrF6wUuRNG38K3JXgrXA6gxfMwrAWXcpsddsrXapQgRAMKoW2ecWLrb1CmieL",
  "key22": "2hHnt9oa2im9XcA6fFNwCjHW2b7gZ1koDXw13muAiWL7vL4Vq3m1TBvfKwEPupT8DE8ShJJ5U27Z1CdbPhsPUWfK",
  "key23": "416Xy9qLQZ85FF8GJ5XGHyKe5yz3rQpPxdfmMXmfaaRHpwuWDrsmEmyDEVQm7fc7ZWTkDGc83QHC5yTc39uUYms5",
  "key24": "5EQVnqGYgrCpXBJVoxm7RY6gcnF1hNXLNc8hxn7Au8dNhASsWnT4rzQVBqd4whHMHDqfMEbpHrXneZ5p6UE3jfJY",
  "key25": "5cayARKZJ4UCoPg8zxDkejGmoAG5u9DSRSGw8hvMJUhYJH3n8WStiWCMQiC8Qgb9sQvia5KvZq9KoQSobFVadA93",
  "key26": "5k9Rg8PHrwCmHsrEw6ao21Qiuexyhu4CqnAfYaqdVY4fTAdnbHQZswU1PYqYaHondTEZ14Luo6ZunLLdE8rv3knV",
  "key27": "9yvokiLuRmBAsNiehk2jvzhe2gaj1waRgAkSvKCYpVHA7QFYmLgACivwNfCGxyyqUf2Yn3DMD25vtmYoyiktw5U",
  "key28": "5aP9fXN4je9g2UtU8kJFn2EqnNjuSgQX1ZgL5q4mNtfK1tCSz6gZ8azKpxa3GRJBfL347ZVwiuRkmdpEfHe36Gg5",
  "key29": "3jyN1PLhjv285z3bBSVpbjDmHV9WduSLDWdLdb1v9FXhp9DYhkxcjaLUE7sJvjfHFvHuxbbJEtHDKxqqGS47Svnw",
  "key30": "AEhdFvEAT4ZQXE6aKGE2k24hyCBMDndGvgjNbRKnNncXo7WVz1mj3faqpg5LrikCaGwcqT7RuBHge9LPhmWGkNq",
  "key31": "2BSgbQKbLFf87QBr5Qfi8HRZ3eJCFGyiUx4hWBWZMrkx75MXoRbpUM9C5hD5QU9yNjvWbsmA84BtaF7okoYooByU",
  "key32": "3HFhpcuqaGe7kGcUrbxGAaqKq9LkCArHNxbkygsawigwnUfkWRtbJkuoZvS76zznYN3fahs2SWi1zorE1C5u8mbq",
  "key33": "Ub7QDmGvyWAXjnzCDcZeHpK62hEsfaYiDDWfo9wb5uqaFbt9pePFmUbxfzCn3iLf2eujTFaVH1Ascj1YACYfbZ7",
  "key34": "5DmaxQjUV88XbsvmxLLtqN8sSBp1mBxS2mhdKtcUQ1PMPYFqD3oJRh1xiMXTHaaCTmsDcikAebc8KNmPPFQJvPJD",
  "key35": "4M3kVCTK5j6jkxgLoTripSxmZV4EGT7pvwFGmbskPXPZ3tZ9Xf4DgEnQzN5Wzrg2mXzFdGaaABJAhQeRXz3bfpy",
  "key36": "2uZnDbrP6MEQgwoHCSNFr1bWUCQ9iLq8mroqhoD4XNCtvVgcBLgnfwcqHSrgUpxd6jhCZoABfr1Ao4sdcxKmgCEb",
  "key37": "2EHVdamedao1mvdNvQr5R696UT9oEYMKbGdshft2QA9RB1MShaKTZvjoZHsVwfZLz7uEAeM8qnDncyWmXW7xK1y3",
  "key38": "5nuFobUKBtQtRSazKmihSC7YpHkx1V4V9MUzwid24dnCSYSiQj4RgMcjTdHnSvgCacKqUnE9EUCTHW4RQRG7HD42",
  "key39": "51iheMrQqMXRDDc6DaZHYEsxJHWqu59iJbGqn8fJQFUU19q1CLA7k7MCiriHNu2MqSQf5EA44fSvNfaxs2vxJbeH",
  "key40": "4K4QPcLFuJR8pFGgg1bJRiDpYmDurYFTuvp3uSDxyv32C315ETpcCYaNrV7fW9S21RGxqRcgadCdF6CRgifb5P49"
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
