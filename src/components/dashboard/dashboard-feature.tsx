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
    "2aVt2TKfdvECso2YjdkZmHLghMDKteYFadHa3qeRucLCb1uXDvQFUxDgxCpXVkGytQH18iQQF1LkuE6tUfw2yJpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47R3Btz4Jyt54PWPtrWYj2fGJgye4thnhaZdT4Dy7fhP8GNAzBV4LGPEh7EGqJrwL672BANppDYqZkZmwwEzFMWX",
  "key1": "3PDnKsNmJ5zbFHdhAToME6MN9hojt9nE3axPuPpo6wMK77e3VyD1DfbcrbAPdjkQU5ZAKfnfqybdVdD8q4kKXh2i",
  "key2": "7YQTMw8Dkt7RgZkLbPdt1Jv9htmpLztVVuNGcyZueqfcJW2zRYyHHdC3nJy3ER5dbbbL4TiiKVR75vHaJnAZhm5",
  "key3": "wawvaQ4i2FmzL3a8efVVuKoyJqqf2odjCjbDYhSewf9sg4ZQKDiWiNuCLhbbeGAkunK34UvVDwrBiCizRng9yEv",
  "key4": "3LfsaZos4J1kL4ovaVBw4BEWBcXHZqcJ2HVQE8tfxdTseQR3Ek2qaN294wPuy4S8AeEitsRTHWi7AugYCb4bXbkZ",
  "key5": "2Nnw5qi6Jb6Cyo2NNoMphJXRHxXBtefnB9F6xeUC4wvysf2zURi1xSmboZ25zFcUfQiJTApBDa7kMXvgSGVud632",
  "key6": "5UAGUUXFfXxYehuPPse2w3Md4ndt4aEWWzGVA72Las3NbvMLnEMNdqDhQMixvNPmxtPjaSGn4yhuoT67M34czrFa",
  "key7": "hLyaWd1iK2SWvgthYh382NqdRsUZqZqvxxVsTATZiT41FUTj7f89diY2DfzQv7EwtAR3u38BwAFPdgDQuiCAL2f",
  "key8": "5xCJn33dLGtoQqxn2YnCQYqt7rJrfjBsKPzcWJAQdgBYP946K5o48e4cJh8i18vwkoh5uLuJRJaRZbr9aMcBtMaM",
  "key9": "t3nYX4hLJCYH9hPaDSF5Ujhk965r6kYQmc8YDdLkuGM3vzaPqSZDtxdDteeM4gT951jBNUSpYogH1bv6vg2yjbE",
  "key10": "2PSyncdcbE3KHxyjN9AZSbo7M2TGtTwArQ7aEXLGdinxdhNNmkBFK22jqVkLgjyNsqMRn88KNLbqqvzXcDknSx4Z",
  "key11": "4aVwmbjMkDLRzNB5iKhYDgAdZ5WaGR1V7DErhosxmm8Z6H7UpynTnKLne7WCMavH3RCf16pRiTtHWoxDmnuyLpUG",
  "key12": "3hrtNAt7jTECPCLn6qnMWNuryGcsju8p3cW4NRFt6BhqLQWBs8jaA3N47CofXySuSY4ftMmVV8xgeuLkGBZZbrXQ",
  "key13": "Xj4FhBLCgN6Rts5EtGKoeNowACwTG4Wk4p7XnBk6WagoMjv8uPHY1GDyXdQknCDMNDKqkLXWXQASQbXoKVQGgzn",
  "key14": "GZLstCbk6dSWhx1YrHKkhti4Ky3nmMi1NXG2pq1x5HsGNNnK9zWpe79GvhxxxocvU9V49jnwY4SnSmuVDCeXZaQ",
  "key15": "KErLUZCkfDdQWdA9ynJnJyZJfPKqFiv2JfUL1RjH9xWgNn6PnA5ue59zRskzGgBg9pTSECgKBxtFQYG4GshCMdD",
  "key16": "33qsGeQaYrK7wSJZQMJinLRu1KZ4ZC6R52iGpR2fqX84YCopqzZfma4Cc35px437pZgn6aQny3RmU6EnZbidGXjc",
  "key17": "CVSfZ2RiNpyWLG3vjzma7g1kdyDj9TSVY3SiqAZGfTbLsJBCpRW3QjHw461JfNPCsf3uru3QEiggCskz6PMBWCh",
  "key18": "64WnKX8BofbwZnfAQW6XEohXdgjT2XzDh8xGFRKZmYaFDuiiRNkvuC4Atbxz8WZctbt5BQxXMZeTVe1jtsbXzTfo",
  "key19": "26e6JhcUiZYWA7aco6ZFCh8vWkxE2mGeDyimFeCtuCi7GA5Qt9VmjDpM3rbrPAggUWhbGqhjPpmkevGgptC5uyas",
  "key20": "2ZaUzP47BM1m6Tw3yLCBgwBQdp4wxhFqqnN4QY2eLxBvVxpvSeGjFgo1EeQmji2DuybGbPocGPAfaG4A6vSxt9CW",
  "key21": "3fT3yNUVFgwNnJJttxsjhPYAP1nTwFBTzJFHCWXckyG2N4xbT2LwhFCCy2GbENSTwgVmy6Hhrt3JMiSB2DubN4hB",
  "key22": "4zF2a3BFJBpqKyg74sAYPJ3KeNpV3JXJME7rZJTta6KFTN2xPpvMTkWwATAAtYuUuTxY4LsGYS5SDAoEZkjDLz8e",
  "key23": "5EhKK2NWfkTQS2kNBNs8Ec3qJ2BZ1aPm2FtqGY2Yyw49V8yh3y4mF6ejav6DGkmAZ57JWqb1oA8cG4RnrPoCiCAr",
  "key24": "2XTH5idF3K1LAL7EN3KqmhbQh3ufCq97RXaKdmKcj9gepZf1gY2xPJ8xi8TstpYAuY5RpittNuns6juPcRruJnR7",
  "key25": "5wxsXBG86ahpiQsbMdXNYUM5A9WQo9T1Q68NMLHy8uGX9RYiyU6vGHJkSNSYXr4boxBje28V1cxMkC1apsrQYSM7",
  "key26": "2J1KZ2wpTjCSVNak4oARjykSgkmjLFYPP7YhmhqzM49MuoGeh6ag6mWCipKZH6uA87bnrKHgEjBGPGfCzVWxcJjs",
  "key27": "wrPyPycpFqgHFYFi7JSJXE2zW7n7hn7tvbPPDNW1qDnLJmd7EL8PEWXkb1Piaq2ivcVBvejb95X195bYQbjUJrR",
  "key28": "5jid6iTekBZKPHSYZ4M2YojZgSu9bdREmPiCkA4rCWfF4W8yanhApVSBLmxeydDoBXwWVGV7QArWV6UZWh1pKXAj",
  "key29": "qNW4fHMPcdZMBRgAp5PZvPqY9Kkjp3gEtzQinMpFYLYtsaxFoywNasVFQCn7Smd8qz2FQiZ7YRRStT6cFb7shhb",
  "key30": "46md7QwV9cTya58G6mGvtXM4EtBk6ohJyDdZLrff8MZRnTkXgrrHGCeRbhHkTDHq4rjTfuY121XaRmnZMMSEEWnE",
  "key31": "3aoVQcHhPEsHsoKmesqpTgamyGc7uGDED4sLYBdHYteEEdTk2TfRT8itUMD4mrk8R4VtJ9YCgDBbKYaPU6smg1bP",
  "key32": "5NvrwmrwYoJAM7U6obRR6PFD7GnhSAwtJtb9j9tddsFMx7wYpni55vY7L9t4mzWwb1uCJEpqd6FGwBhHeigXK1H7",
  "key33": "3BNZyAs6z83dc4f98Sg3reEUQrK4p4TUg2YyRypDfJRqogGUvQVCu6wCAuC81HF7k4JWev4zYCX8McjK7nDFgkK6",
  "key34": "4ogfPTGyh38HDAjmGnZ6V3Ji7Mt3Eh2mceQs4oCGmzm5KgXDpNxX9VxSYk5BZhqStncLLwjRsdzxZvtLsUuGUvVH",
  "key35": "m51tVoYVkAhd2qs1HjPmtFMnFzRhCzBqnFjbEJZgcJYeNniM69YF4b27JSDhidtdm8H7GBWiSD4TEN137ggchWa"
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
