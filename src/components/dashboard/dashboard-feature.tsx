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
    "4wiZCZrzRRVCRhcCNhvLrcTpAB7LjQoPZARma6dk6ZMRTUVnCfRrRnEoq7XeoebF5m2eXjaGe3BV31W914oabxqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXjq7TYYU8g7rHECQg9vu97XeK9rCgU8NdW9SdE7UC2KBFXDbmwsmNnpoqvpNYbwrXS8Lch7sadgj1qdw6RjxPW",
  "key1": "2zk1NsUkdLSK9fXtWoLXbNhBcWvBTTeQvJUM7wdkuQaGSXmAg2dctNQebuuTP5WHHYZTNGdyVZAk9JREhkPBPXbu",
  "key2": "3sTpnyf8GhNErgWsuMye62XLAJrqZ8mm3MDTkW6f6ajxu7XevRmwaMUfU9HSTBQe5dbLcvvM8Sdb1P1t8iUcASQr",
  "key3": "62JeSaBz6YkfBxTKWBjJ5rRL2FALewL49Kb6uYSnu2qaNEgrs54EY4ZnWG53bT7gSb68jqUJvvojVHUr9RPFyj8C",
  "key4": "5Exw9W2bqiUFsQiMKpMTYVMvTZ4k8UkDgcMjWZ7gdVnvnYxiaaKcPFwsnoMjWXzhKhsSF2gHe5CRT1vtJ1BLTCQJ",
  "key5": "4PEsVbk2Kg7mjXReCLkiCLCpNcR2USQGwPCTteysByjtDvRMSkz4UusfFDairQWymtB6FG4ZqFKzKfRDdqXaSGDR",
  "key6": "2rqJGpZkWYNiRpEHuRQgsyyqRVgzCVM1ku9ZCpsdxYck3KtwXf5d7bbvTJJ3LM6W5B6aQP1pqhqw5v7Y6XWCVUZ6",
  "key7": "4f4p7xcqJHAgj77sACJfnVc9m7Xba9P85kuZv7DuSWJJgx2MxZF8ykwLCEXMk1sVCTaJYhG9oqim8yGou1VMRGnR",
  "key8": "4Qt3aN8WBFDR7JRLU6Eiu2Vi3Dim71JL3odfRd84wYMMZPAJ7Sjp2vYecZVeKPszJ26QEG8YjgoGeB9xNzs6PyY",
  "key9": "PkRvRakpGzujDfqFwq5uL1M5e1PVoV8PaY6HfsCVmPAJLNq18FRF6nb3wmjB9wRzVpEXU6h7eYJqqUggGwpCRtk",
  "key10": "3ugDyvg8x72ab8a3uPyxhDkx5GvtnEhEWhNN879KES5juoT1ce2qQFjRcWjM627Xj9jeTqQPpHxbVzq9u8McDrTp",
  "key11": "eRWr3Z1bbrx8eTsbXBLRCriM6HdM488zJjQAmymeFzrLYP6Mi9VMyBX1WeR8ZAWwY1cyxdh3FUpd76PEYWghpgn",
  "key12": "5pA6BhvWLeLLk4Cnfet7agbeDQvk355eVQ8QsXBJaPBXKAqxrJgcq8iNNUtpxy2o1MCM7hu66sDYXYru1aEmXCKD",
  "key13": "4jFhyDCH7twNr8UJy78y2ttFMPwHDZSebSs2Lau5YXohpU2e3irfcrWdksXLN5oyZ9AGH4kjzxVKAcUbBAFXjfq7",
  "key14": "FSNa5MYuRXkVNvkytxiPsWqgDiJVcahZ4gTbesfyHsFpnGbWso8a4hRoDfZP3EMScv5BBiCYqpYmqKEmqZcfies",
  "key15": "j6Qs6ZhvrXLgRDE15CR3npQURSGDrsF1uUGTBw3VVdHke5kp1JCnnw6gYBBnVW5uVGBqze8nT9a9wPBZeq3eMPz",
  "key16": "62LQNjK6QcCE1MaPPgQ4Dz4qajTcGPKsV4ofAJ4TSKMz6JerXnCa4evVMP4qbpph7EeiqX8QVSrtbjL5gmnY3rMw",
  "key17": "4KJqyYp5qLKCujzAgFKT4VxA9KQBV1R1XLdwqTsVR3zDqfyn9yLqmDBk88LYmVNXb8UZxpWaE8sVKAjXTe6YHCku",
  "key18": "32CJNMX4HKSHLnpnFVNLGonRbomGLZGA7iU6qvYyHioqUQ3gzqt8Nt4YWvWA1kisUzYZvBBrmBnCxP1dbB6sPN5a",
  "key19": "4L8bYyCsFVabwvYysL5WpvgK1WZNoJPiQA4zZsefgGdpKvaJyhyXxE3f2JD3AX6iaE9bVYCbAYY9JgxSWBkQALeB",
  "key20": "5qPzTBNW2cW34PKRBjHC5nLaCBDkZ7diJZTSxDGUdNWv8fyryddmLeVyhujKQskfFBTkWhd8mR7a6Art5YdBrrkk",
  "key21": "Q7xJDa5bWMP5hyKo1zs7PVXaCUV3vBAx1aK7QSCaV7i2vMykiQMNSk83atttTwnj9KPZSCHKMRUKyTW153fhtAT",
  "key22": "3zoT5vKrfPfe6fVLxwLCun2weeXuP6MaDGnUBkH56TMC5PTR7ULzoLzr98svqZ3NgPmgR51zEGPgsHbQyF3nrBqA",
  "key23": "2xTvHv4zWuriPkAU6FwweNUgzib16AUQryvemPds8RK2vbyuuaZeYjM2K4LYzAapC55DG7MDhJ6Y51t44Rbko7yU",
  "key24": "5mAojSiGULwAu1kg9tqadzcLjFUCC3odmdptJ199FLcHzzNoWhKgvQNVdNvX17JXNS5Jo3QoD3S8Uk1PTWSm9fgG",
  "key25": "3F7EBkydRAxeZxDft3DtXySWxTMc3DsX8ikYzdvPRSkSTMzNCUuYVy7HDYH1SjjQcR3fCVrJfVdFUcctKZzQGdcG",
  "key26": "2XgasJLwpjr31KtntvcQcGEuDStYbpfPcTGh1ET3Dk7RudvKEiUbw3yzhQvfLEGXsCcT3QEUDwoukVLuKvHTLWaL",
  "key27": "4kZEV1ySzixWJK4ok1JvthyEBwH53pwhGXwDeqsiyaDvYNPAcYmJL2g65ekAyP7LKadsCsdVM4ppDURTw5E6QH1q",
  "key28": "2mbnYu48oTviaF4V59SWiS6f6c8jb9zjKwVFmNFtApr3tRGV7897WcM7qGmat6Uw8mHVGmd1AKaUCbjpti2wefTx",
  "key29": "DR19RaNZj3q6zpQQK3h5rLw4H4pmS1eTCitvDUYbJDnYtSE5x22oRJ4sW6A116QLpZuGJ3XqjJyt1g3hdSiqXmu",
  "key30": "3Z2Yj7eoZa4oaME6xHE3kMyw4J9kUPCJcVuHu6kMi15MNeqN3AUo24pBJEHwcrmPTNMv7m5dGoJpL3zmAUKM7Mec",
  "key31": "Zs9honuFrX2FVCoWYx64vouSrLMHNyXh8PhyXUywwuaVmu5aTRWFt3TGtZX4prhrfDfcmCjEPxeDWNRzq8RCjY5",
  "key32": "3zfq5KfaJPPt2AuRd8xhwxBoJf2GezFgUuKgzu6N2zgbBHvxDr2U33eQDJ5Fbkco7jw8uPRkK866MRcioRzvraqw",
  "key33": "2FJpRybLagWg85fhFFhaNUKAZ497eBnPqeM5LXZHYJXCAP29tB57go65oWJc7SAejuMDAXuF6ovTPXwAdGHJYDvA",
  "key34": "RC6ccRtRe34YZATieL68tR26twk5DpqiThSMjmhXKU6PJBfYkBenpRyq9BcduDXf1AYG3w3jssuAio1tR2yXG3g",
  "key35": "5LzXf6EitQADrP2PT32NDJujck2nfkEFhyWLeoTtNAzJRG4i9Yjy4LGYdSNpsAnDdsg3Q85aDCPrRUtYuGWSoKcE",
  "key36": "o8dDDiC9zydHkyGougzLPAEhZR6ofqBJTpcKoA8sxv7Yv1xxj5QQpjZQHTLCKjv9swKhtHDqBSEbbnwsKoH63HZ",
  "key37": "8qApu8dmPoqTEvKW4VXGVTYb2UREr1Q4hyaCCgQopqLMBc3eYeHFFuwCZRMALe9ESR3jXx1uLe4eTbpvjgfu47y",
  "key38": "5ro2bYtE4Yb9n1VjRdgYdyyWiZtz7ABKAxvxtrBU2FCxvJ8jsTgDTzurNo82eSDGm18YkBbiNg1gRhZybcAtwYgH",
  "key39": "TM1WTWC3NH3oPHXC52h2ao54jjYNHbWPVFxZE1AuqZ5rsnitZDCPfbELjFXt8HzoqUTiiKFeJK9V14a4RXoGriY",
  "key40": "4k2nKjdWBFo85xBEbKGb5KcP8PgtTLd1ETVYnwHfYMFdeRHp5xyscMx5WWEq9kgvmZPT1boHRNQhhTDch34DEyZV",
  "key41": "ndxeGmAzMqWKwdyLW8YLSg57Gw5RHMLYarqTGa5LPmcS9vLbZGc5RH7t2Z3eHjLd9tgr2zVqa7VScxynNxmxWjz"
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
