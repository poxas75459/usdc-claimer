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
    "4qS5BBzetmxS49eJeeiwmFtsvZUn1M8eX4jE7z7SJe2buMRpb6pXWCgAv3F9GPYdVCSFT2rDfQWaBQUzj2qZyAAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BWDvmp7ATiURMViXY6g7jzNieRwiA7NYJWMidvno1hiZFukobxMh1dxizQjBXMmf1MW5XqdLfTsyuW9dhDp6WK",
  "key1": "3z4p8WVE7YqQ8qL96gEyAN4tG9EkMRQrydUqC2pVq5FqYoX7TwqmmviWywgiuGTEaNYhdepgwMJi82Wthazf1qwX",
  "key2": "3pLcJdBbdZMp9ZodvgbMDKaghK4TzEJKufamnM5tcQB6HLaYq3Cd1JFW7vsT1uyHAhkP9ZAnwHGmvPLQGXZcVFr8",
  "key3": "3DwijWGNVtPdjf5cDvgiwtQxP6o4AXHCfHTz7weaHAcBjtZRy2Q7rJXZ1DXPrUrCihPoeaJqS8VWNS3weDmG5Yhb",
  "key4": "4ngX9cqw4jtM4rJS8P4QbMwnjBDw9cJkPaaEJpaT3MwJGButmyvuHj3beeAfzWSmM6RYFAzCE16ZdZP2gSHEzpNC",
  "key5": "5Knop5YsxQH5dAQXBgRCCxXjN4THz2jHwgqiJ3YXjYN29t2wDRWAWVJqrPb5XbKD2Bx927MorWXfZjsDe2hqYPWa",
  "key6": "XD6EjmftqcuiY81eDsaWs7Tc9Qfe7FRUKsUueKsfHiaSMJ1TBzNiiL3SatobEVWgrHUGs5UuVuKhe7RPVdzrqfA",
  "key7": "3bcm7woVem1685ducygSq6DYw3ZPe8wtdaVEQWdRndHnzuUuBN9HzxDvJG29jHRnLcZvgZSyYuaLiynaowfn8x3P",
  "key8": "3JdwdAPWc4Rrba4J8GrtAq2TBD6vjfZbeE9G7SN6gXQ6eyphdvRYwnbitqbaYHcsiVg55Ae9Hi3JP9gvQ8sZ3g9",
  "key9": "2wEjFqoY2sykmsFen39vNQertBcAW3hnhwnvDGQDGmZLVhFqVrPbsskmXwzKB67q6Tjj56svjsYafrWRjbHdEpbh",
  "key10": "5Uh2vAWwBk8iodJbR7aJ5AzstCvrjWTeNM6SnaKVz8JgV6QpethTABK8wMrcRSV4kknnFaDHL1iQQBJQyNwucqy5",
  "key11": "zkixzCZNahgqxLt3vZ3FQDdU96M5QwyEVNGFsxPKyokZKKC8jLHTfrN5L4W13UUrtPPSFUnvVmbofV7bQEMXohs",
  "key12": "4qugkMWTbpiBzLePWYbnnZT32FPkYrx7NipYAPXaWYucWvct5AU6u49Km2dXBqYRVsSXeKvUeLGmPGPCRXNHMP2s",
  "key13": "4EzyQv8DMQ74J5x2SJC2doVjDm3XBUs5SwMx16VeFHYmf7C69trxgDKwhDP1QFnnfFtdJEkDYxSArpKh9sQ3g1E8",
  "key14": "67eS1wZ8VjxvqmMb2BS1Wc2HvVToj9UhvEsibZnEFbySAqeadatgzR94RTaFSYJ9XvNvcSUboGRjD8FfnBhc6n3j",
  "key15": "K89wSaS7kM1pmy2Ezg2swxrZtscC4bzXSpvoFofXRfg2JEnPB5iqeDwCJ8zsVbCNPjJ1ksVB5HQSHpj2WF3b6sS",
  "key16": "5vdE8tgycvsKVR17PNwYh8Nuku6WZWjvEQF1MNwFD4Sso5jY3Ug3rcUdWsTrGMLfKwXxpeRVmmShTgo1JLysjLqR",
  "key17": "32LUKXoZetpv3uZjYU5fJ3ezc61kY5TSurFRnHnWmYVTXDaDn9bDACWHCzQp1A8H7Xhhnd2V4FjX6sW3qbabKTJ3",
  "key18": "2jmpCP2LjQRBpG2bHUTEC2YuiSSQZfkEdR8bfRw7G8ACNy9G86hodGRNBBxVkMmypr8EKdwCze2SsE8krmkEwMZx",
  "key19": "4qzHwGexDidwRGSLEkBVew94UCZzoWiZ3Uht7fwLd4XppjaeQ4QHMAdiLm97aWojC1JCrxRn6uuncjN3A6GqcrPn",
  "key20": "e78GQBzHx415uXioMbNvvnwxpvzjEgLq85APRCeTVzE3CWhC7kDBgHbXj4h2BS2TnYPuZMU2nQDPg7YA2kfaS1t",
  "key21": "3Xno7abe4sCrgAaCK1NcCWa45pZnzBtL9sqBfA96xAmVvosM1en68fhKfmDJmPcS65Z8T4NFtwGSfoX7phWsJ6x5",
  "key22": "5hhMFhMPNSShD6xS47dibLT6yN16KaK9JV5qW5gyiW4baKftqZpktw3pWu74qDHwnNosLkhP3nvMbGvqFWvvAa82",
  "key23": "4UeGbjjK582yUJ9v2KNxNWCXj8p2jyTEb2bW72WDVSobKi8jCCtnjwH8uBC4dxrKvLTnRDPVScUUMjUpi1zySdQg",
  "key24": "3jofVv8DtnaWbKDzqVq8U4LTNwSttNxeKLwddGgnYX9bfgm5cN81Bm792G6uxFkTVYc8JUhrRY1TbnbC2UhssUph",
  "key25": "5PdMiKtNhsXtft9R73EhEQRGdbepoJnsESa8zbRoxtY4XDiyFSyrtmUiDRdM6ZAv4XkSpRPucY47NnxKLWXZDbGD",
  "key26": "3MAKPYgeGRATwXDPnfjefm8hBQVSNys5V1zDkaLXGvakmZVotH5DtVVFZ5kNVLJ7EqDn6p8HQcmqL88SpWnaY4x3",
  "key27": "4ZGd4fob6nWZXA2oH7qRhR9YeNWGpXLrUdHSveJtUuib8ruYH7z85LvBtKE6fx6AhdwRpA2wewNkYqsQPZHRfjVt",
  "key28": "5iahdY7xRuEn8EoHc4DWCgSfYfT4EJ6CgBnTcMu7D6DdzbCRdMTNNvqhhw6Ky5Ftwr6MB3jjhFW5NA1EQ4cLkH2M",
  "key29": "5tLsL4TziwacPv3DBEXCc1ehRoEAMKauoGfV4JLbEzNNppSjJ48ZmUAGx3GkF5LbJBR6Sdw6F47uwmFt85msSHdz"
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
