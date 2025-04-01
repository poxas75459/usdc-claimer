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
    "3P6Dgt7TbgYeyU93fw57SSCGkLawPTkGEMzz8tcs2bUk8TCiEssKeMFnsfTJ8uyPd7PZyh6MewzEoymYn9wtDgjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rJsuhsXMvYNEE4sFq8oRW2zWw2YokDv4GbtR4YLoVzuqFbEpYywhaEs63RUmB4ZyHwFe68aXDnMnujt7Yt1myw",
  "key1": "58FwHQHSYB7WCSKDqQm99mRAx9B1nmpNpgUbjsWCRd5TbhufMp1rEcbxmLcKsASVNbYufofQqFKszBD7iviePPK7",
  "key2": "3ZoSuSU4ffbmUhJPWm9VKoMB7QJNRP2ysBFAqx8SEr13b54B4aJTCkdXfoXHQUKsu39jNGXg6vkrK2vnCgstRjpc",
  "key3": "oHqAQrJFxLbKywJ82H6qchA7Hk9L33YvNwMiVe622k9gb7bXWbHnCZK2TqPT7QFdwKsnHbn2axLmEt9Lu32wZyK",
  "key4": "4UVcDYN43xoGUGKKrhf2rkFKr6usJ1uqhnVLqsdnuPi9dvHbFzjiMnZQbP7utXaWbjRo63cCkGXXgnpMeU7R9KnG",
  "key5": "kFVDe6tFQRe7inJPVtPT8SD3Z6eYT38pFV6nZ6dYR3UEg1P2xtCYtkyf9pp4msf7DVrn1kKRJoDHEpEjUyJQ9Bv",
  "key6": "4jUPnc4ZRFHv99gWwGjqGdrMGXkj3haLybFC4bvpvdmWJpvMBxMWX6N23B2jSQNjReBMpXSARKntQjuPeyc5M6Zr",
  "key7": "Qm8xWDCRWSBE1EVsqMoSiden6byHZ33vUiB6PFzzAksqiuwE7E9hw8UAW44uPK4mzVjCso6oC6Cwh2Jdv9r91S3",
  "key8": "29uZa6G3BkfF9oF2vDDY8AVjAAyk594kJFdoMzLnZHKJQCC8hGe9j7Um1sPUSS1RgRp4aWxcGN2MvqFHXM6siXL9",
  "key9": "27xqHM1tdBpiEA73C5dFQKbPwXsVENF2MG9aVpHfQzkVoUYVgjCeiYHM9ohuJCPmuWRL5VWMJtekpRe7oVAoyQSV",
  "key10": "562pcsLTyxFtKStGzgMGt6mNbZtKeNzmc9HxidugMVL7rcRpAMXyArhrL9PuVHjhw2cYaNGxa9ob7SRBMwLifUk9",
  "key11": "2ZDDPATyzey3ifh6fgkeZ9RXww6XYZ83ujorqGV6eHesvate3qXGmePPto2bpf4TqngWzcMHvQNkRTU4qJ8sJd51",
  "key12": "YeeqDCG6asi4hNVmaxjGcNnekCUgj41Z8jNyZcSFMqUPpWCwy98zQqaoLd8QzXtTrtrJg7eejR3QDnMHyfGqmmQ",
  "key13": "2U8swWV47nkSEVA5ciU5dZ8WsWTYqUWzf63cgZ4YCydZFYRyjmunngMsBvFnAerjj3KFCLse33Zax7k6aZqAke4f",
  "key14": "2Jem91S5nhxmfbYVKAEaJbi4mtwCNKS5hFDkLTsQGm3YUBNCf6aBajuV7v5XtukgtDh4WhuRPFfnRp1yhmosHwq6",
  "key15": "63LALXUg6TCYjJ66ciFyJvoEb1FfcaRkuH4pHRudpe4YTduxFhTNnbGyNeetmxZbtyVVLKfakHFqhGr1LzFvPkAW",
  "key16": "5zRRbvPBG1seB8onprxsngeFyx8X8PSpdxpVScpgsF3Sn3x4EiMsjeBQ6jbNZtg9esUBBTZTPetYwjnZqemWeANt",
  "key17": "2QhAXpGhEg1VbQsUHUkcBboELYEvpz5iNLVq9zNTRU6Q1pLWCy2NnSSQ2bJdZAehrdY6JRPAtajDU18p6r9SuXhR",
  "key18": "5d3SGgHVXZqgz8eKLwKogYgnQvfNbMz2QV6RRpEnoe3yxbhALJtvZbdKryQ4JcCinEr5ZLYuGXPJbSRXocTN5YYt",
  "key19": "2rTGp18XRTNr7fEL3V8VbAy1i73UbuYvQXPoU648HnNCmZbfmQ85fMMdsWNJRh28AgFQpWajjBS8QXLw2b1Sic6R",
  "key20": "2mvqG7A8DvjbwNs6YA57J9h7XG6pUQcKQRHyxyVt5VGBNhMoDBjeqHzFZAzqRUEeMTzNcd2Ft73nMGHsd6n8UXED",
  "key21": "fjPSDraU7LLMNG9AzYTyj2i7GFs32qiCeRxdouorwjpWSt3nBnMeqHsyi1qSeYBou3Ru6zFF7bBCkhY6c3RorcH",
  "key22": "gFXd1QikVwGHHgMpXMPefRXURZZgYmF71JyDbBqsy9LyCzfha26jr1PVpeAQqKRArpCsAF1Ag8aTUWADtrmujot",
  "key23": "7wyhgZNNV6A3qEdnXCeBzbqwfvrDwHdrFPWGxcPaYCPZFy8A1xhuGDfWVxpsPGgCd5z5Vh76dQtsdvxQdwDNEV7",
  "key24": "4jpSn5ed8En2c3aqLyDCYBPZ87A6Z1Hmrzu8tTjsMLP1QNEQqEgE1uwKUwwtsqqauHqFkYqmwav5MzXCsej2wkBy",
  "key25": "hySEYD8mnj8xh7VciLy6QrESEJpiJoP8s6kpsWJTNGa1gADZ8G5tVDtTnP7TqKP5v5AUsPAt5bzU5wcYiYeNuUV",
  "key26": "3LqNviuDYNL2HaQu4o2YvE1EqM2L2bmUuzvKcM4q2CMQpvkVnmuofPnVyAsQdLUe77SpRpTrt29ig8cKGkpmRx9Z",
  "key27": "2wJdsd8idodYa3Sa8iVWdYbb3wHH3nhLugxdfxUBvG1QtQofHsQ9ssTgathsBSp35YjgzoNSRQRVLUfi9uzzBQ3k",
  "key28": "4fUMLavQKDvDwvuuteQPxbx7VVQf5iQvVGZEBghvjyPERTiibNfgCFX7iSvoNCNvozejAxPE6eugDEmLk8ZimD9S",
  "key29": "2PqUhHAqKcjrPvHEtMonBFi4rxmdciYtpKtEawogw6zBVBmUmw9foxYECy8ZR53DC7uH5aDVDUsAjNM1RrmUVKv2",
  "key30": "v7D85s9yjzrmHfrddTPiK1kBRYpZLfT3G2aQ9QDF7cpmMiEJ3PT6fhJB49t2a6YJC6DwH5cZDcXNAWQUF4K8r9W",
  "key31": "5mB2TAEHAnBjwqggX2DFeMixWRzu7b8pT8BSAdfVVdHQe2iGWocwGLxk6okK4WvQ4EpxBnLcrQs5JvDXFY6psfdr",
  "key32": "514gyexmCeHkcMAeDhf4xcDJh4RQHQT6QH6J9W5ZFGZuo3D7gSJYinh2L5KeF7cZJn3uvqRrzafbsapRZuxu1TRu",
  "key33": "2bz8epR4EbZmaHv5azz2LwzQag7bSSmP7vbjLKht1WeKUZKsizdtd9Ek1Wh7XdgCtLjj7gfW7HwNWv3ttXxQcqEj",
  "key34": "ee3hWPpAu3kEVCkbKxSmWKE2oyKYdEeeTpEEHt3NukC6fjgKNj1hzmk9NFPhPqU5fJC5puY1vKBR51k6N4x3ZRP",
  "key35": "49nGUjwRfxjH2WTdS1jgH3hpsEuC7v5hwgb9DsDpyMSypoARxevUcDLdD81HXAMtjCsXvaqAA8Ybq3i7KvH7EZSN",
  "key36": "4DpTeFuLxRjy4kNfsN9GgGvLHLH9GKN8xiw8rVYccjmWBDVmWf2PJyoAN7A1ULeWzG5fXEWksQ87KhhrcmJAF5PL",
  "key37": "4qWf9TccQxfbAuK85AY9mew8pyhXAQWrhG95gATpXBdFsBBtFLAqT4oPHcDLgXyGgiksoajGvDMCm7Gok9Pg3GRA"
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
