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
    "2j4TDh6VNHo6wQ1hcYUJv3uPwjkn1C5hZQXuHMMyouPerQyGiG85TZQAB8rNSJBhSytwgSa1P3mT9rCARyJxMCUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTKFBfaRwsK45qWbMuJHKwbPdTnWc8DEvFPPTSgzGFew4ab2WGgNZs3ZFA9dGgf2dor3pYbndYkYgk8ZitudA1x",
  "key1": "ABgXw8C93WctH8JUfJeLPVNbjyrcFvuUR5m74Y3TRnZ581t5ABWkJZhMJqhCDtrgSNnkyntsmsQWCSoEqdS6PjR",
  "key2": "3jYgdbrMJaTjeTHP49NPQfegGihMUGhue3tTwBUvrC6v2mNAYofiqtLEpRFBYH7LrkXzPXM6xEjWJDBUicoV5x1A",
  "key3": "2HUf4yutq2Xi3j7t5Ng3BG3wSSoMxPKGdz8gASv1GuegpjpW2gL5PcavvPCqGehMKJWfVpogpCodZ3wFVzm2eJ7A",
  "key4": "YBmkTSVgSG23ztSRU3Hz4vo9x8FCWa8snkzzgSARM6tUoJmUpSb9REgkXD4tE2ror1MsdRqcqU6rfSBFycuRKjx",
  "key5": "4X7QfedrwZ68RLhJDSWqTVeAvgdiEzjnm95RMJwpqcb7ysdP9zKWwHzYEyhczJ7xFCnYic8Zoaq2oJ48urnWACWp",
  "key6": "2Ko5FH1FAuFbq4ZTRCKKCRMLtLAhUSVyFm6ZCTrrTyjXEbL95Pk3kJGjopPA39wddbLjFytnA6SFCTTtZ2T5pzgN",
  "key7": "Zo8fHiWHaEusJs9asy4UShPnv58QRq9aB9g6jywdyDfMnqNUbkMpDPmvotHyjzSySbtt2pEW9MwSBXWnfdjT4D9",
  "key8": "7pjp5oJAZ8GRn9ZHCtEvvGZqViKUHRQD19Kzt4TJzDuLqcLyUKxDwhHLBRB69eAYGHCHXhy4b41HDLcBWxfGRJc",
  "key9": "3iFihMQo4r7Vqmy7Ju78NLP4XUvUTw4e9zQJQbRjiGVGQh91ZLDjq44DRevzRvX9jCQ5EekNPXP8bKvtGPpwM6CK",
  "key10": "27HvkMU26baFb4BCjPVQwaA3wd6rDGtvDWegetojkKxPWYf1VHKUomdtNKG1ic8zMQPYZZ2rYafHXNYTY6Y3Gij5",
  "key11": "3GN7ZujxB1CiWVcA4QnUGxDJMDjmKZdM914m2rnaCAQRf4aCsC2vNA2WR5FNqWJvsMA6KhgaJsnCV6BvAcz2Xppn",
  "key12": "4tjLzXaWUYzA3ztjTF9rRzCjAuEhMDFsTEksx8qmG2jut3Kfyi1shukrPmAQgSqr6nF8fcrZzx3Ytt2C1rKLkHCf",
  "key13": "5Tmqi1GkQbP8Ts6tCEnhJYtwxNRVbeKS7egSqF5MkQB1SXhJc5ASRHyieXjMrkgLcFTmyjDsLZg2XCyDkdcHYH1d",
  "key14": "2A3jMRRVn8q251YHdkPnhiyPXs271oSAjCinuRcbZXVACEw799PeXjWzELC1wv4BBt5tF2ysmyMqKKL2yAvD5swm",
  "key15": "2PTv5Kw5ku5enw2uj3Kav4xMYj6nwJwt2y2w5L2yQs93hwgihLkLE2E8yt1d5Uwnn4GPCEH6NDy737JqJTS8SfgA",
  "key16": "AdyrFHBw81uh5F1th5UYQmKb7vGBxE4pbd35J2DhUR2ZNJbsFK9XKfwLFBrNsWQXBecCvPcnnsDodNrKKLJz69S",
  "key17": "5fTwSkb2AWJ75dd5rYnvCWrADkXsUnaPbDGbbdUT1R1kmazM6xRDuAfxfPBxgR1w8h7JXHQbUzWyMdyFNJNKx5g5",
  "key18": "3bzKskVczxiBoY5HZLKfpt6aYngZ8GQgFzHt9saQd5ktPsTdyGG9yDz7Kc4Yat4jNt7MbsrPdYazShP6uZuKNnub",
  "key19": "2SMgXgrjK6CrKBsGXkC7KvkF8qkzLSwgFBQmQPdzVfaqStzqrnFiMnTarQLf5YiBgGX4q6acXUMYe3HpDF9MuyMs",
  "key20": "4rcAvHXkwRdXqF9za9LXepGgvpREN1KWMEnjFsxiGLaf1AxgZv9Vkvs5JKPCQhxTWzfT6CVrKvQFm12VGsn7EohW",
  "key21": "49iuU9Jkhii9QRuydJo35UzkMyXUMbyme2GmnggMfSMRxmqS8Xvs6BKsWZT5C64zz8Ddh82oorgLdfqw7UTkTWJU",
  "key22": "2oHGc4ncqPJmeuxMTwPnjgtyummHR4iirYcVd5TQenvDnf93LExbgTaGUSRQ4oHXVbfRo2CiTdvVKLCpY9DTE5xr",
  "key23": "2b5QfRxS4LY2gRiXBjiyVaYJJ4QVAbzqwL5YM1yPAipxbd2VgLmsBL2zDq2toZKdKq9HDYrGi1dnmrmicu1uvwLP",
  "key24": "2zCsVFftCRKhUQzLEqwRbun1CyJGvpX9DD1nATeQrZHkoHqHxnedNXGKBMoKBUrBiT5mmFY6vhgYDhTgREFccf45",
  "key25": "3fdrs5cbRXRnp1VWTFuSEbc42C81HV8HgDm91JhbAm9BSdKWwUGDdNvYKBR2hrkEZaSUnPVVUnWsuy8oKiapRb4K",
  "key26": "2NPALdvAFbsehYmrWCkN2rpUDk87BXFr4JQHSyH6F6ph3DNk1jYmQnwyKAbnQzois8KjXNEo1hTXWZrhjTLtjeYi",
  "key27": "3iSHzdRNvWRNkquQwkUm1KyxsD43CKvmbhsu4ABm2mDRbmcMkCZgNdUxKqvdpeFSz6XLC8qXpVXYD1x8VDvppXLq",
  "key28": "5C1iNCbKjYMDgkQmubpPzY282t7J14PWadV69yT9sSyg8CUhh3QeiPMdiaKcMRPCmmmj6VnTmT2NahkxyE2yXDF9",
  "key29": "4UQUbnsTww3Mttj73VqwpwFJcjdLsczWFXYEqkdsdteKTMEiDCFrdBXdCrve8jrQfXBqmff71e5B3FhXA8p4JdZ8"
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
