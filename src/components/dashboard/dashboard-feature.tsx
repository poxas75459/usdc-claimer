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
    "5NHHu7JL7wCNYL7yBD115BFD3BzR8BQkQiyWeCuR2BLwfrWx6U4XzBdDHFf7j12x6MbkhAZP7bC7wSh8b9SjrEuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdhbprmmcQ7PG2gzCGCpHVsqm1a1rSCygVfe68c6VEgow1kfYkAiTVvfCJtDRrSoc76UWiMpdbjASG3XawcCKrn",
  "key1": "5yCFenHxARe2unLfDCk9C4UKgKrAbZB8mJw9PsQU3xtK3AqtmjYBWSyUsmCWP1AEN4EiQKGdBd43SgDnKZ7uNzZf",
  "key2": "43Le8g9tAghkWwL5eaEUqLYdZsEsgLemFmctrHQkfcNrLddPLqdekrd5qMjU4gZfBsTY1uNyBmWhWqmJmLw3BCGg",
  "key3": "2crG69M9WTGzpDdB1uQUk8cwTxVnrFy75DEpSE9oG45MJaF4xU13hoRXr3bWcWfGp4GhLdGXnE9rr8EFcTw4VA6",
  "key4": "3Z7NLt7Y7zMmDRAt7vBKJqrtLSRXMeqzMYu7tm6WUxpQBeUzp95pkGGfMhvax2NVhuRp9kBFYXRFikx7TYVonqjn",
  "key5": "58oDL9iNKD1MXKxEXpwVhzWTq2sMdcTMM5S2rpTVfTfZ1sYcVrKxo9PuuUnitTwwp7Y7Cbjq9ygAPDuJNk7e3Q9c",
  "key6": "4pDCvZBHG77MvVaYafzgcV9BEn4cFvVurANUS5U2vRU6G3P48UJ8p1tgdje4jR2BZ1oEBLgeERZfPEgnDq84KG11",
  "key7": "3g5KN42V1ziK3cKGMqYwBVZceyepK8TnnBRer3f8DzfWxeycm2LTPRKEJk37NsJQrccgjVZaYhSUkRVfpugK24EE",
  "key8": "3NpkPDqZzA5QHAPmdxvgtNUixBmw8LEEw6z1qzLfBbwQTbtCMYetUnuc28o6U9wtbeaCuu5CYQZWK9tKTSKophXa",
  "key9": "4bFy4yCTSsRntKiUYnMdQ5Ld3CUo6qTxRtzmLLFqUieiVNgn4gRMVo3FcRz3MrBjXPg18svCtUkUyCvGUj5iGZ4N",
  "key10": "kx2g5qY8145UoKEn6e9GdWLoSMmrtK6UjbU22tQy1VQcXTWRngsraBBFg3LaqgzrsWGqscx8nxraBG4pXFAMnLF",
  "key11": "HxYEWnxz6HoWm6Vjo49qeJ4o5WZK8gTkbdc6Srqa6b3geBJtgUUtTG89XvdSKTdzJ3Z36Km4ho9VH2hJgHx6KRh",
  "key12": "598d8914npPG5tEHtCeboM3xXpmyDcfKoWrenSwGjJy4T2asbQBznt7hGqiHpZiwVB9Gqzz3hfJhTPMZZaxMz7S6",
  "key13": "3cXhCH2ZmsCRkc3sD2oTLCfnESh8j9aqiHVRtEVZGcxE56LaX4gSg7syKNDDe7JvrKgkkgLbdiL9FEuoXhiV13Sx",
  "key14": "5tBSkL1PMZ7H4kmuUksYA4uvuAS4oYJHjiXn7woJnfNrH8nNiGALXMzsp9segqVgvXNfbp7BfnbFitn8HdGobaZf",
  "key15": "UgD7knFoTzJr61KpcPDQyfowJoAyPcU19tRekEgLCcMgTvXYdhVMP91ftQfjwFibC16KUrsquBD1H9SEQo9PuJJ",
  "key16": "5ThFUcQqpdmn8iAenCGvz2Fu7Nbb5segRhZD4VYQzcUAKGPmrZ7cbtcxZuBR75j44ztVUjadrfRk7mRSrHUHf5wk",
  "key17": "3WdhhL7SQb8QBM1CvrjrWfZt4aewAQH6Ce2PLFosCtfeYCfGfm494K54JU3Q3QNF2khMqvBBfDvowQP5aRvBaNAj",
  "key18": "8dWABz3eWFoa6sMQkmFzJJt2AuLtZ3TqB1rtpDf8pdfKHaLbnwDMbT5sTc9MdGLW3daziEj6rStS2P3y9fU4HHw",
  "key19": "4wbgyrFdNHaZqhAjjt18c7jLV26NHifwjnngaBbMcv43NVogVnHG3ULEVxHEmRxMnHfs4KbcFkn2kktAcVZr1rrd",
  "key20": "2QZtYuXEdGHBEZqq4f7bkHgQGU34xzrT345raGjtPSQUMDuiw9UCcodepxHYd9rhA8ACMwgb4Tyi6NrKfj4sPJuQ",
  "key21": "4SzDk158vpHetmYFT8z6FesGPB92Uyaa5m2FuKL3X4jDFwXxiZKTcJPqUnt2ELLiPweQGsTE78qtn2BnErZsSk5t",
  "key22": "5UUjwbrbh728KzS7GdRMgD9HmahGkw6Yysi1xnxSXyu14NnkdzMjGg6Ta8gBM8tMp8kwmTYJyo7h37gSDUrHYw9U",
  "key23": "32YCGWnwXXSdTpsayPpk8WcnXdeabGwmBX1J2T8jPpr8mi11eCMQprmpE4YJuq6FXcs4uMLfqbZ7WdzFyEmSrrta",
  "key24": "4JMQtyQkn2bZfpSSKxBJ7sY699nRknyb7AHeWJDunBaA3sdjyuy6MZp2VsPQKj7NvRSzRkM2CEGxiTirnGnZZvxm",
  "key25": "264vznFE6VhcDmwNkR7TBQcuMH14vRNoRvJTHbNNctNrW67a2yB4eB5PXULWHLqLdaEK2yebpjuq7HSrEAoCbnHS",
  "key26": "31NfKKeKiTyBgkDRRssKrZRfEi4eR7SzyV5KvV6xmdmeAF3XQnSkbSQ2X5AX9mVvuKorgxtMfyaYGyaKDVugaucD",
  "key27": "2TLzyRVq4GoiWp3RTDVvgnBmog4cscXL6weXN6VEXpsjYjEMhRJT5Sfjis8ypYvmJEAKbT2xeNzufxwqS9kn6fnY",
  "key28": "2R9EkZiYE8JZnimiUQfve5i72n2hBjfBdFRtviaY3iVRhw4wrVYyKmNhrZfr7zqHbwWNpg3rQuyYLF9SnvSERyyD",
  "key29": "5VYy8225sZG4ZHxeTrmG59DBD1QtPtdVSFWkDsfcLnUnnycaAkuVC9fHSkPdwGvCT52bv6vTKo5XLN1xiNf5wpds",
  "key30": "44umzvU5jWXNYUah2kPoiX6r5CvpyQ28dQmwwqGaFhn5u8Qb5DXrbZDYjT3Md1vPxKKwUcdXodjWvvUxk4i5FVah",
  "key31": "32CggeZqAAejSekM79b3NCYYJCBshYLZV6bsJAxAj5N3e8Sd6zetFSB3LrMXrBsBNiWfe8tjTbT126izswnRaX9j",
  "key32": "ynyEGkPMD2bjfqRfjDY1CS79jM9gswes3KMQz2xH41tZAoPNWN7gYbe9Li4PLUubv3LVV5ayhxhbFQMNRqT4jpp",
  "key33": "34gHuXRyfRc8VtApeEUzEVdV46ALWsqXustbbDUHZWA5xZssEivMrCedrDE9k2i9FBWw5tT36TzkUQKTDVi2DXsy",
  "key34": "5Xit3BTn2W1ij9NgKEfMAM8XGAkTxEGdwgajJkWFRU2WY2zgxYfrKEgyqbujhBdkFzcjzHuNtrz2FjqpsWDRqoFJ",
  "key35": "5E5khgxSCeabJiujmBTHtq7pMrkS4rRcwA5SQbkj6qmhN6yxBc8AQo3J4VcxkQXvDB7kBbMsSrhFmSx8EAJMMhrh",
  "key36": "2LANvTCGazi1X23toQW8xxH2EqPnhmK1hwYK9EEKmWcsom7fvRhioh2NSmGLmEUb6tdWRwnTpSx4WhPTjE7wf1EV",
  "key37": "3UJMw1J2khjyrhfyWZJUk4S6B6rmF4kpKqWfqVwkRrhErnwxK7cQuQaLqc5KApgSS4B1Xrh6W19bCMxyCHeiz7du",
  "key38": "4hrZ5JBZtt2EqFQq59nTutDydSFhjnnHs6SUWkQaHYa4pJAnVy3uQMfKdBhSRoBTYvZgAgBDpJ72qRTSjCCdrv3G",
  "key39": "49HCDEtbdCGtXE6JT66crDdTAqAvop5zDAd92PZpHQu8FPCsGJssYUYr3EBSCCebmpCbQuhZf33ExiHgRQxErG7X",
  "key40": "3hBmNKvTzZfRQNBVph19k1GNyn56EZkxqaDfjzDMHnNArNLcRyc7oPCRp4BZVgWDHQ8na2efbhtJ4jc1kdwtcXj2",
  "key41": "XTeqZYKRCcFrHjT6C3s3Tpfn3m6oJh3o7PTU83eGY96U2kAcBACEsr9vRaQh51zZC5G2vY5r1UKHSCYVBKXARGy",
  "key42": "5xmQuHr7ocvyp9oZCVfWpbCcHBJsEDJTxxBVuipKrN5VDRrg1GfedNkHonHjJFqeB18oASh5HBTWCQmra1YPXLep",
  "key43": "2SXsujAvGABXooP7gLycmxRpAy9ex7q8JBrv4uvn9MHyGHQ8P5kM4TR2bGvDTGABmiLioH4TMitr1iBmYjaAFkKt",
  "key44": "j6iLhF2YmEh7i83vdmYDqqbZEbSyzXYh6ThYweSGAvNrCE4ViWSxdRptYjPC9hz6VjjCGEAX8r99CmsweE2jcot",
  "key45": "45TZx8tnAzoAm2vD9UDFYK4ABsM1Xx7pHFto2B2kDxbpa9nSvCLAB7dDXXiGUHcmgTGqSNwnmgm1s1rdSwkELwJg",
  "key46": "56YjLdUZcFf1hJA1boFT72YcUPcFdGXwSF6LraGai7mw3RpdXVXqKmr9BfzQbVJyZ5EZH3iQoVCAYbF6VL5RMms",
  "key47": "24VLmmq7xUhxXnwHKqnZx2sM9yJcTPRpMhj8FbZm5eTXquddnmPcV2Um83T7p4VnuyLw5muqBJ7PhmWBzbH2KfYS",
  "key48": "3h5L8aSuiaykYge1K9iqX25y7dmNq6VDZaY6hworiSy83eCSGfoQakpFV4wuK927QHF4Hz1EbvLkHNBPzopG8dQr",
  "key49": "3Mrn6fyXGVXEMjbh5fRwybTtKB1BxXDibqbb8rPFRXgaXivNfQNLDLe7GUTEt59ooacjnykqEgsJZ5tjmXVG1nP"
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
