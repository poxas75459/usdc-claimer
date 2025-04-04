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
    "5S6HhAyuexJ6bzG7KVdBXvzW6QQg258TWDRBYFYz75Dxg8QBoHMNRhT1oPvMTN38puP6wN2iio1S9mGs5zx6bu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u33YUbeKeAAhxSLWp53ETeuVLpyN713vFouHaDxcUqa6akJPJK58xomgctYW67qEppymceKtanpCZCfEpBtV5mV",
  "key1": "3qr2yuSyBxe8vhtTx2aqrsXAbxTDikzP5zfSuk9HB2VWy8FZwe3pzBf9bwdqEdXH5AKfRWaADuL69bGP35iU2F5",
  "key2": "2C1XSNU7HsA1K7PYGFuWn2fNsmExWJKAVAjTusttKn9Pyhr5s9Xf1NymqZpSEFAekWTSfWjYibbXBJLWFXNTpuKJ",
  "key3": "juhSEdGQUzAm6jpnik9MC8qxFEipmY8e8tNMjk9D69HwygrwW9f43Sn7wDa29gUSSvDUMR1AQHtZxGp3j1QbHQJ",
  "key4": "3htfZsJyck8sQZ975G6BHtJ8bprfVPNU7RJQU3zvWhgusfg2ePBovdFWMBjEPmNDyqwiFj2cxhLd5dXBYx2jbRUT",
  "key5": "3yRGPTwCHm7psLq5szBU18sKFXEqdS6We72itHszac2vQPUPC7j1eWpKMTwEX5vC6hKfUUQhCj743vSvufmNbw4f",
  "key6": "33xnLXm7G2g1GDmRwPcsbdSMbC1XbUctRt63raJtMk2yfiZ8tzVULwunjgrgfsJd1UjmrS7sQRhk8ULYa8jbppsY",
  "key7": "2uKyZ4fgtTuhZ8J399FQKWgkzCEMnuRniPxGzgU1Chyg5sJbHcjanLCVb7QHEXHBVk4QfpSC7MPZWdBWFvaw9bKo",
  "key8": "vBifokbF84kJY3rVYkm18wtGziX5FZD1EiTn49xP5DZcLujAPcoryMQy8CFkWuTx7UEZWVN1YZDfxH5rerVVzgg",
  "key9": "AVHhycs6VLbqQKgBbakpoNGfXBcpeVzFPWfAahq35QqZbkN7ee6XSSFVJaLpqrMmQXEvByQqoP2ZvAzEYKve1nb",
  "key10": "5cPZ7AxxhN8WZEkEbUrbro6Se7kdoSjRx719WGciDFe5qNik9Q3Kkb2FNdVmZK1yXrw5TgRcDBVPYVAzr3iswRYm",
  "key11": "4nTLgdV87uAJYqdw5MftcfXA3zvHfFSCJ1Abtja8YYtEZRN7xCngZWB1kt4viyeDCZMhU9hnizJaXv6GGi9YU2XZ",
  "key12": "5KYNERQaKK7eHcN12FwsT5WMZ1g3U3hYajk6okJKxzbQZZBcG2edmzCgx2UbaeKYBn1qefbBfUCbHi7nY8eFLUC8",
  "key13": "D9EDAoUScaAVJB9jXH9qn4BtLwzt5ybDcZFEdjDb1D4KtDk6aZPZBgB7y1Z4AbZFAwtzdh2caDe2gQyGvtnTAzo",
  "key14": "2juDiGS7UbMKAa9dskByZdfShrxj7MCxdoFDZRukupAN95Z5RvY88P8PV7tYSMvkowDwxvx9tMrXNFnF6sRL3Pdq",
  "key15": "3ncMPbQSAUS6pzBbmEQ12G6N4F6aydr3s5cbgeJ62qDDL48CvGhEfrw7kcTKnhfsQopXWzVqP3jsEwBFiP6fXUxf",
  "key16": "23NTMMERqR3h8D5PjmRMoWJNAcJqApZ5qt7JA3n1KUZKNTLb6gZLfFzwcAw794mYTh1LAJvYzsX9tpMo47o51A23",
  "key17": "w8oWKGSYLkSwququtmNqw4G8og2hWtAzW8JPyakuUwt2R5yLTqGXzVEF2YkXmYtyNAgSzUfu7L234GzFXVFjypz",
  "key18": "3JUi6qaZWkisUoAS4wqmGqZ8kf4gfbPWrmGYjcbZzYxXaakhe4NUzihjB4nPfUdchWd37KtLnoPEiTNZMPRNToj3",
  "key19": "W87EnQeJA46LtFWgTYVwprRQxFKxpxEBAXZDabBiMYzpdiGCJyrUbGCAsWmLHaLXKT8piZTXF49hSma2aQX8Hio",
  "key20": "3iWiPcmd3w16YokcFej2TbfCYJvBosJEnHduupN9xE68zcBHRRivWPypQjK6PtemhRruC24N7HANoqqmHDUt3MPH",
  "key21": "kSsgaSjC3KryFMQHypqGXnmnb4T5i5fov43rX7gQWEtmhhw6bLwmzLzU2zDdmNMpoWnzVnERGR6KydyDrWciELi",
  "key22": "4e27cXsKKUmC3kBiigEZhgR5VvkjQsrHGpbyTZ8GZYe92rxUqp1k9PwngogVEdJjHimA17TaMX8xarhEifP6J33",
  "key23": "vk3rznzoD12X2uS4HyoD4LkqxAUQbCcYwNUM3VGN9vQTrWMzgjs3jUhqHCu2W5p83Q99hovqusDRFMKqbvo2cDk",
  "key24": "yNAyzsKFJztmXFVMsCm5ExsSAvkaB734RjsWsu56a8SQNNduWThZ7QLJaRFrpsQcCUFn4EQJyz1C639tCg7JXGr",
  "key25": "etUoPqRnTcGPzmdxLMnCjiMR3zEVo4p24nK6N8ZpwieVLkTXAMDH9Lgy8CpYWZS85jTPiEggBwQm6vTf1HPM1JS",
  "key26": "1qetSkYKsP4xWP1Q9xqPu6GTXNHMNmZNZFLE7B56wHpEbkC6C2Pmb3LGyQrdu4kwUQTdiWamzHAy2wT5T7t38nT",
  "key27": "5ATvKqFJ6bkCBcyJRi8fnfkeggp39ZC4zR1sa14FCbEKqtaJG4J74WTjnDf9MyVZ43fJfDqSFTursRgsJfSWwUzx",
  "key28": "5jLY7VFLxUoRDbjFrPuayxtSwhf8b2foaxAwt9R4Wg7iZ3iF54x8yErdqqJqf94Dcg2iFjLEjbDPfKwoa5bENKtf",
  "key29": "3terVYG7gLZeiTjW16BVvEsyJ2uyLjHcTjKyGANNbb7xdkU1xQtYtqDJUTL8575u2xRooQzjKFNzU94aDUhw4Vdd",
  "key30": "4zVkyLwLMigfEXyUrSQpNtRz8je2war3AuedophmZa7tj3wDbubNtzWE1e2iuMkBeQNpwwz9yqebmEsVN2KP2Rhq",
  "key31": "4atP5pJpnDtj7GJHNxiBRGTUwPkcyNz1BdBAQCqFtz785crq5nDSmi9uMyuMoFjwQ7haCZDMcA4bJ93iPwHtpaJm",
  "key32": "23P7po1W77s9q9smRKRRgjZd6eWHqXsSCcTLaKiX7JPxkyQJctzyMLvBrvmpcpDNmxH4LiL4QD9BJTgmTXz4MU2v",
  "key33": "4ToeudeSARCBytpGiRrZ1pEZhfqv3KiFWyQ7fivTaW8UqA1mTEb5KgdeaCUcM4Roums8KV6mQEKwD7XRo8cVUHKS",
  "key34": "2pYUEZWSaHBZ163AhzeggCiRPgpYXPmYgWXTrhcxT6bB7uxAU7kxmNtagJB2sXsxWhshBzhipjkhgjAPbyowYise",
  "key35": "3i26GDodwTSFwiWNLZmfAc8iVJFkshtDthvTpGfC73KtbWrn5rfAYtebnAMjKoKuFk6EtN3avnGCH8RKh6aEBueg",
  "key36": "3sMG19dd6hdbNsa6oAJX47AfFnnhTeFmJJZx6XTXoRp3SDiMdLCjrPxhDbyujGB9jAyZMMt4e829XBcVS5JyV897",
  "key37": "3uFTwU2uL4BZhUyRqLh8dAeBCd4LHwmwRziA9Xb24nPi9zduF5mbL8b8cq8MTv7mkGYkmgyC3cZBJpDADDPpFpZ7",
  "key38": "4VYx9iZHxZRS1BEhVFjDJEu8m8gLMjbnQjdSFgEPEEJ5tXMP6FVMgkiATMAHHjk5NBu9Etj5QHCv636ieP51PYaH",
  "key39": "2BXBSKXppG2rxUNw5jrvMRYUkSPPm6GaJo53hV7RP7F9N9ra1vshyV5wXGPctY8tLWg2L44aYq1MgdPsDwxkSAu3",
  "key40": "E8j1rixgYqQ8sACLE3qKDRZqgZAb2QFAJVbtJjyzuUTZ8JuU9y4mwQXECfgFvc45SazuixJfDxVnJyQjMQTvSXd",
  "key41": "3AsQRBhyr6kFYJT4YzKDCMygpFRY8dFciraVygwpeLAUwCjHqWx7MSRdDLF17keMTto8hDrTAMKTkJh8WQRmqUQB",
  "key42": "3AHYwDsSuVbV8trLzLMQK9UnTuDZyGAmVwtEqtbA2AVee4PFVtnA4z9TchgvfdL7k3GcVCkqM6sHA5VFxG6iS6vV",
  "key43": "34vgHwxqVqGrCGubhXrS27nE2GjX2h4o76HZg4NbnqExaRQUeLPTF9QE9zM8ybM8A4RP6SmSDWwPGQy1AC8YAgLE"
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
