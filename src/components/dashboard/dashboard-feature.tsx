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
    "3qFsWuamBKjQa5VFD4GUyuCZDsCMTEoGswuNC7AkbMJGeiVn5cP6tCjcLF6BEsAaCBw7Zk4Gb2HBdvkDeKbmzVRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1ukAxtitf2YwWdgDLzgaHUvLfwTMWiA1JibBdKZDx2kwvRAvu2hJn7Buy9zCbaQgVMtLVVHFfPu8wC7hjcVuwL",
  "key1": "4JgoRjx7qzUt7pkbURE55R79oedmPvNvdvE8oMyJEWtKygyL8CpTGYfiMWAvqRVZx256Zq4DvQ6V8QGWipVL6mV3",
  "key2": "4kuQRTM79VUsS2fEdS83mfNuWc9YYYeQ5JHW9ZA8THKx4RVkXCf4jrsw6zSxZyUFpZAomj1TEMjEYcjLNWpV5wNM",
  "key3": "2SHBcfmNFe7RdLSoTNFxbNbNEcCbLLTinrqvUHCbS3rJY7MJVofqKYUN9YfSupujcpXDwyqmJgj6i6PXRroPRHsJ",
  "key4": "5mcKEfwtyyvxC1pnQYqh58pqMaxxbc5H8mV99TF1BnSdaKxm7EjajbZTCjXSuMaeZyJFjquyjBgbbzTiJ5wF6qgs",
  "key5": "5bFr3JHVYv1G16JU5Mkj16GhiprFwnDB33m2ANAZTcGrhyUpTdRzqrgAbVguqmPFx2WAf6MACEZW2V4h6Av7sjhS",
  "key6": "3ejeGV82ihESG1PuyUo2gmF4Fy2qArGu8No45LT3XsUwW4gCALPzzyhmiTexn5KcP3SzEApxNH2V8Us8xbcZPBEe",
  "key7": "3P5x1DS93xdUcFNZSKneigaS1MsBF8QLcRTggwdgvFPk19yWjPnqhLj94kCgp2r5G6VUbBppB7W3Wicx2Ekec8L8",
  "key8": "2uBD3zjpXdozz8RXBpnrPYAY3NxM8feUfQPJwAFk9bXujYJGa6AR5BDs3csacKLTuB4aVrq9Kni9XLhej5oBNpE3",
  "key9": "3Uff8vWkJnaCV1VqwTU9MEcRKpPEoLYTtiixzHB4uHYAjug688jP5mv1REQFWC1FqZ3FgV48z4Ad6RD6vi3mNUVe",
  "key10": "wZcscv6SF18MqWMzs2waELigAjQKJvZBaXARULubxsGx9BTfmVhjDVwAwaMgidP7B4SkHi55tYkkWAgGiU9kk2s",
  "key11": "rPBnawPfdzQEygwUAR4nvPeSx7kUxHGP4Gxo2u4XLrWBwYxBAJFjdyzvRfG2V1HMbspnAkpKoRV3P1AspkS7QUe",
  "key12": "2KNZgnLLQGaUSwRaJi8f5GSy9gFEKuKkweXzU1qQjX1VYzadjVLiitjY1e4UZY17KgUstMZb1DjyWXkpPfj6NM5J",
  "key13": "4spRCP6JfDzHdRf9ADyoXGFmXZidWj3b6b8TmYkkvbiDoD49StT24oJ7A5MBE66x3y57Zx5UBSvoQTQmYezYm77d",
  "key14": "44zW9fs3UmQ1NXnekVfHVvz6UVEYZ7ghHF3p8cs6fgfvRHDAfGXiTUZw1F4Neb3oiSmb3gYwuy47MYiGujVUoc8d",
  "key15": "ePyPwUVo7t6hoqGdyBDGFZLW11Ju1hgfceoAWfqSUjsdqWyUwZVk7tbQQcLZu9CjFa9jWsrzFikMHh84VEfCmZr",
  "key16": "4cKPi9i1QcVUV7BhEbsKXHxrqaHyNzZP3B9XTJMVZtLint7vLb3VeCQVHnF7nvzWEWWeow6CuaKDCFo8JkbDMSLu",
  "key17": "4mkHxpycJ2xk8NSqWiNbTQD7wYNjrfX6EiE7moqAyn1ciWv55eMZrZhMbJA9kQUqwhg2MUxyro7DKLu5cdaaQz14",
  "key18": "2P1AvDwX3dDc6tZRMYX9XKSrHeJK55baGkUpbqhse6LWpGmKtJAMaEhdcggt96xBLjBKA2AGagdeuKs5iksEPdcX",
  "key19": "3tSMLqbe9ci66suwKLFZL1QncXNYpUoJpB4ihjQMspBcKDrUgJpKTXboULhM4D8BZqkSZJEk9677wjuWokV8ceGS",
  "key20": "3GsFrBcZJ7W7tfGkxtkNK9wNhEqBxSkQ86pLY7cZezfcvvUQqZCExd3nebtc5UE8uLz3Bugv8Zc2EJRQEZjGiNhF",
  "key21": "4NdBTcm57Zg9fo29Gpmx2UzU1qGDFFWgZ7ezjMVKYxXBAtVBGv13YUVgtCLoXbkmWckVmzfHJiF3yBokXW2i2XuE",
  "key22": "3MowgRyQvKqgbT7opahdk3xCSYuyfcuFZztKceYZQv2g1xjZHkEZg37CgSsLAGq6JcueAYasoukNGUUKVeTeXxg1",
  "key23": "5prmqcvKoWauCnzWCCQxL5UaMv1Jp8uCXg4s4YgQJnSVvZpg9DzGX5Ks7HWmiyhsvtprGf3hgZtpFBd1Rv4dj1zW",
  "key24": "5zCexgifzk5e33PNcYQ4rbA9nL2WwxVckAydAHEovJeRaRvCVA386wrVNagQMS5DwqjdHDgSm5nzDE5YwN7hs1mh",
  "key25": "626HTY3ZTSUgXSkqYPbX7LDJDyKZ6Y5HKVLHKBQEbmyGVSa7V1s7jV7z3PkC13gSm23gP7khAeRu4WM3Qv6uNh67",
  "key26": "2pwVCQRo4jx9bzdoovGgBMEePLNSNfnoADGQUBiDKwk2baUR98gi5qqgT7XduKLRfvnZWgC4CJSZvBNedaKAT7uh",
  "key27": "3C5bdhyunSdEwNFuUwukj95mNQFMc4kqfeFkSYEPSZrS32h5kFFbgxkZrRssqqedFLKAfAvPNHTQAAGFw44UiJWA",
  "key28": "4DMQRLmS4gx7dFQZC9A6TWUCzfAgCwoGkxjWpNsftgAbPGdcxPg532tRWbZPUpQC5RFNkTYh6zz4HLdFmqRJKUNQ",
  "key29": "5nTtJabGZdKornZH2oAgp3CV17SexCzcqHEmWf3MSE3YvP8yS3hg3zaY76ftMedR81pfkhmE9c8z4AvK6FCtyc2S",
  "key30": "2P6crXF7UMChUz1GayMXSWfy2iPuumZGbeopKVh3rTxXJ8VgMGNhTQL4FmAFdhTXciCuXN7BqoKjEALGcSut3D4R",
  "key31": "c2wpeNPxjPFDHm8mvif1wx7UX9TfVEcgoxtkFro9xfZY5aouZSNZ3yTx7BQBPWfaBjsizjBn7pEH3x3y6oYn3Pi",
  "key32": "4QKJGZJb7bMMdvkEnwzXMkFe9LkhpKTfCaRWpX2SRRXihYnyuHDZFFCuAy5BJuTVpUtqc6bHEe21iSMkYjS1gfZE",
  "key33": "4gVHjGwJaykyQhtBpd4Z4MtMBNc58wN7R3tKvWzp5P8or2PkHzaMrzVAVU3yQoCqyZSZUH8k4es1vWEJP1DamDtv",
  "key34": "cZZo2a21oNetNNh2komoxhZUBHshSvDFeKXzh3mgR7kuvukSGiXVMLZUMf8yMJJi5xcAotNaRx4Bz451444ctQP",
  "key35": "5vmDsZCCS6PZWf4shdXBuERjGVD7SbjdkusgNyS5joJX2FjL74GzydEpc9uwN4ALFFM6eNg6Rd87wwNUVqzTg5oY",
  "key36": "3iqW6TcbMfpKCkt4KP7x8vaoYE8yzV9ebCEUgNpuYnBGmFfSYpR4y2V1aGiNjdvu7PZHsp7LFWXn4ifLMAWvdDhf",
  "key37": "26krnVVWMGnBwedHi36xEh1ski6hhomCkyknh39QBJYhXaBdZt6exfMz1EUpc4JpkpCCHFtNAH1Dyon2JmHf3pkA",
  "key38": "Tuxdv4cifzE7BbS4V4T3t6franinH5uQK8tczAhgpAJGVQYbFgCn9G8am9xeHahaDdRkHbzD94HyUnpXRsAwR3t",
  "key39": "4wNR8WMuM642xvwXjP2QUTSawZJCz7JuJ1Spegj3UCkNrd4L7fjL4NxZuqxVyiMaWiY3MPWBnnieq5jL95WoLYva",
  "key40": "5NZbwFtyWLVTKncZL3qZNvhQzQWVWLy1BRPnsZqMNTQbVoMJdXLKrJfUK9x6vsLARBExN42AvQ6vntjvgg8uYZJj",
  "key41": "2sS34ezMXLTM91xvYUFAKJSFypMif219zq1L1rVJxmsMczPfAR3N1tBshgrUA1zeoAH8YbmbuW6e3Y3oBUARjMTJ",
  "key42": "5H7Dtapm5AT8W2bAttEzQAvMYqnsQoZt2vSoVcLNvLJKjc8BCBfBcF25yt48mB1vPgfEXSEBtCL5PP1a7htMwZ8K",
  "key43": "2cdoY2uLAeyyDusZ5egZDb9bVkUyKGZ4wnSVY16Jq4yrHwP3NtDwM619CEE78erBTMykxep9g23iu9LQhfq5aSNz"
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
