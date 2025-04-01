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
    "5BmGdVYqJmeh66ihcKbdGBQFy5p1So4nLiKhHRguGJGiJDJVhvfcbC9ajHV1nYwoBJyiAtfvvQzFh9S4CTziy9k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fTg9cKkucT6jQuYdf1gLZrU81wTZS7yPtqyu69M2pYM45pWE5TDMyC9xpNNhRK5Mxw34zXM1Bd2Et4BxrNF57nk",
  "key1": "g5Na9cJdjJ17dAHD75B6W7UpDCm7HtQg8wTq63VgUmNKxrcgMiswpWmEnJZ7GNH1tRmkFvZJKvQUmLQmr84Ks6g",
  "key2": "EAQ6WtakQA7CXWJDZbBR7FQQPqWzNYBUEgHjYrs6mLYELhiUPg1P5sVT3o1tJoBes5xwdMM2YzCwXSH6C5M7KMx",
  "key3": "5zpUomMfBFhtfWD1a2AVMZ2f5vpk62zis5hDbFaiTtJaNdUAvrfTpE5X6CpgwmkBRuXowZPYDWcg2LivM6BzsB5c",
  "key4": "4Dt58R4pNSuwhT1BLXRFqsnbFse9WvkDCCY3bcQjVdXWqHdQJ7JVpPFQxiJ7vbYARQrVJNHyuULrQwPenpE3BYH2",
  "key5": "4n5SL23hgbPn4UGVyhGXeBCredDGGAcf2BeuNqkxj24j33G7BL3c6qv5B184dmNMQMih246oa2wvUx5S7crSXjMy",
  "key6": "5Sk9nU1tSbN9LxEhUXFvKk4stScxgdyU4y3g8S94bDQxAwZyMQUFJXPDzAECPyP63FKgx8tiS1a1HkwPLCqDvy8C",
  "key7": "uAfPywKe7cuk3jsq42C421rp9RHjdUzvydDz8XjjFUTWWHSWpdms8LU9Wm8LsVFKGv4zG54JpYHTExU6sjbvNub",
  "key8": "4tdys882r8uBRi7KKboVA4FpaJjFXjyPpc9K83VN6wJihJKug6xQFWv6pwPJRHceSTYiqm5jgBP7hdtf442AoyGk",
  "key9": "2sXJSA9VQD4zbFVJ5xgyVedAw9rTntR1PvjHsMTj4wKaFd1HW6TNJrA1qFpo7pZpy8r7wM7BtJYsV4HL1BFJ8yRh",
  "key10": "U4qUL2H9oWugTsbYfMQThgL21hrtyKU9fg2cDNp2YcjJmY1A3rT8yPdFVs182kkbuYxd71PXLVxJXMLUi8hiLXT",
  "key11": "2Mwv4ctPbiUGbbBtmQTaiyfk837r84rxQE6gA54fPSbEbZoqMCZARdTMpTjvftcD7LbENADGdAH7bU2cEFG2vL6K",
  "key12": "5w7F3JSordd6dnJUSroW6K9rF2CGrV7N2ncgpUzUVWk14Gxk6yhcLezQj8ntHGbdPRYmSjdF8BBsWfUEuSmKcxgZ",
  "key13": "yCQbn6u7nm3rkKEb1JU3CJ9QjGstv4N13AZxRDgadWcAArExd4aoV5B6meZk1T1M1nDGBKpA9uPLWruz4FzYL3s",
  "key14": "3wsMCLMzBhexgLHz8usBjuR74o7eZ7G1H2YwSRGYhfRBdQYd3UCivxWtkXR3pfEmeHbdmYjB59W4iro3FL6d4MyX",
  "key15": "5A9PfkDQ2nopcxmemcrboLm5PUnZ4ND5GwXTzH9so84h2BJeJzizoFoKH2UhUuRvAoJpNyh3goW8fMeoUkHEzt2u",
  "key16": "4Basx63D8H6oBsC2dj9XJgFqsdh7RzKCJw3bMEtpFf2WAhTwB8V1nBXmFkkGWFTEFkkKu3FXzccpM6oVAPutk6Wx",
  "key17": "3GGQ2n8Bb4Q9oFB1K5LRMREVhsRzWu21s7Sg8RyEk9E7VfHewp5SKx2R4zoMBw1QS5VjWsUzjhm5RsoHwM5xkc61",
  "key18": "ox5TPPLTVrbpWHaQZUr7F8iVQ2AobgeeupD8KJhecTu2hUEoCWqDvJ1DURAeqnytWb4hCUg9qZuiFa6w9zRBoWb",
  "key19": "224tDsdoHZziZ9dMc5UGbmroxPj39aZftQrgB3mZHiFLVwUA5punJWYpr6d6CD9gYPE3otgckoUo7yckAwaFKs5V",
  "key20": "vmkWWntAJp2bZyaFJ9ujtmsrznDqz74QsLSknDytYbwffAmo5nQaXjMpoGQEvAMeZFzJMAffdDV3fGxvhjYcxyr",
  "key21": "2bPFEDrSrmQpRq2dy1Mhbx1DHAmbX4f69yh21d5LBCZ1SzsW2h3ys7rDnJHV2kKreoY1k2uxW5QY1eZ8qdrQSC1C",
  "key22": "d9Vx87vikbWFxyGREMnhUGeyg1EjpeAHdXaYWtYSXW6XsuCAQuTtRXXTa5STmjM2X4uAcA1iDkn8DmYxJyMfawx",
  "key23": "4BFcvD2w9sJrkuPVDJz2J1jx66muAkd1DbyotKfi1HqkuNWnemP5nVwTSb3JjzsBwg9Be8i3Rw2Yhx29XuTL5WKK",
  "key24": "eXAatwyi8RHsnBQypj3uiC8DcznZYVPjW9d9vaPDLfXRCEt6bKpzN8nehLcuHLHrk6xFEka2GDvMBxRbhjipNBC",
  "key25": "FEysDSfphgaAWnaY5qYcV63CZ99nyM825d8eL26MaWadcLLKsCfc8x2JkrQm715bzid11inzVZ51zGW39mi2UbZ",
  "key26": "48UMWUt3omASMZ3ZC7csx3jjyyCzBNS12kiPqMSLcjKTJBpbiT8zpyBPvUm4QB3BQyWEyM9RWor8Cqi1rBF6vMre",
  "key27": "3vXjh1wiEEi412jnyyoJQW6SHSYuKNTzmuTe8M56SYJ1fXYRqZvBiENWhHCwaf2JYuqPzcGAbRLPwuXzunQqvfgm",
  "key28": "4p6GMSDjK2zpv9sx9eFquoPrZKGgGhwMvn2mwD7B5mVs8TM264ud6P9kSxNBCXLFkwea3YawpJv7TJHokZcuFC7D",
  "key29": "2tbTQP1t3aewX9a3hSGR6ozAAF115ynJF3zUj3f8d1X4Kc584G968kamanUoFJ9VjVYbEc2mDszsNzwThrfggTxT",
  "key30": "5iSp3UJd2xHFCGeHDmiv4xgYoxGJroc6MuYi1UyUPiani7HkCeU8KKWgk9DQmx9zzuLdVFvwqsTbwk6JnuntnW4E",
  "key31": "YRDnSxJaqagrsa8Yihq6cexbBh18eVnCRxJDGbW4A6W9PK45Jpead374os9wVYdqrnpXcdbbQtaWG7cADDxg3hc",
  "key32": "92Xe2Zvy6YDFYAphKWPY21sDFXfLsBXio4gW8wJHX8iu4KrR4NBcYy2AvnVBcgYK4wtENLnrduy4u7fMqdjUpBY",
  "key33": "4uagNJiwp5kgR8s37divTB66W1msZAfyycGipAFuabTjN4kXTaCUq9ggLfuozmtPod1xwJD2p3GRFPkuW4PeboSx",
  "key34": "4n3p9mxQTBC6SHFuke4xiL1vNmc1gZiShLTEqU9hH4SJ7GvR9r7HVHiCpF36V9tnwAjkTAFRGYqHVUFeGG54hHDe",
  "key35": "63J7AGiPAMz1bX99iaMZkYN7GrUtvZ2ErhpNR4sDmbUKt2T8TRy4Sxpax8W33aGacYUP481nTbzxTJXnzDdZgC7H",
  "key36": "5AVRDBG1BeqPAbCMuXVms5soUvmbGdFp5P5py1M2qTPvnBi38X8F2NfC83wAhcALeBApxeYDLHa6d8NmHp6mqma1",
  "key37": "3YveNkoStM5JCRrKkR9sA6TZNuLu1VwSpUg23mfbRaaq8bh3Fmt1dCwvSH1xS1TjQcUjz6LGHQCd7Lz7EaEJxfZV"
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
