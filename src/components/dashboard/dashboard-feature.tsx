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
    "3MBV32bugfPv65Tjx6Fg9SPFr39qdcTF9iFbhagzZNfpJ2XCRY3U9pnq5MVstND9K1RJbZYC4tcM1nfYWELrAezV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59r2GvSA77YtFgqmxxQCgtZdJ6s8pkU88v9Fkamq65mzeCjcrcpETg549cz2dUqLjyo5USvV2qBkuxXKG6PzDwF8",
  "key1": "3Dtkg4E6SGaJXB4e2PwvV3GbAYoVVrX3Q42RmEsszQkRDyUpmNXN6rr3Z6m7MEpVttaqbu2ZdhJNV6Vjsi5hhwax",
  "key2": "5ofh1vbGEky1z5GvymkwFHwXj2wPPN8DRvfFPhgBx6W6fWxPQgoFjZchDvvSF5Rg6URKRVcjSfUNRdKjeLK6UNtx",
  "key3": "3NKKG6946Y42AMqFyuaNAn9VySh8qDNUGR5EVwsQobfPQtQqJpa92wc6YoqP65DREZCFS2Uh8FTt3w8Yccm5b5CR",
  "key4": "3hXYXGtaRodmEMubaTbwqxXQq82mMh4xT6iccGKu99EW4JHdWqCp7wTKgXRKiqBdra7Db5gmtNeN6tb83WPHvErD",
  "key5": "wGJR3DfcXueEcQocnHBUjnYFRUQLfVHmK6eqU6kuL67wvrTrDCvDg2asirPTMXQ7NRrkxDAVq8AcaFNndtn1xqA",
  "key6": "4gv95Mk3hewwrgcCEN52RabLC2y7Y4Lq9mKRFVGN2qkKD4EeoiL8LYTUe9SdYXGPa43nv3GaXorAGfrjkXWPKyAa",
  "key7": "53G38xJnABhG8fwtmHQJfPr45e8QY1UoGZqpVomNv6Pqm7XLDnR3qhR2qkainKZQMcaLZ6jgKJ2UpTipUSryiaH2",
  "key8": "WcBDfEP4QMEn4iqj3fzgYNj5YygAKGhBjuAdoxE61Gs2v2wGmTF7epk5JZkNFPWhawcdhQFtjWKkErsUyYJPQqE",
  "key9": "2EPWmYeXjrGrRfbUZaxPrG9onprcfXRrVLHBQySY79iqfaQ8uRtjJ6onWdjHtPvBg6oR2KXisj2ju25M4YV1isRv",
  "key10": "4pEW5mJSMArVTAPiE8obUiMXRFwGmYp3M5wWXgqKT4JmaZv2cxQJ3LBbyk6hK8nTYtqtSPHysbAY13qTYjXHLusA",
  "key11": "DiH1rW5CGCHWyf5Y7JJQ5Xod29F3DpUFaGyNZGDuggcsJWmCPDCdgmv7q6ui4V97ycbAmT1mMqhaLETxSEaF47G",
  "key12": "35zFxn9zVD4jFsJNnRHPimAmvkuPFWtv2jE97j3sPs9556ps9Ff4JVQFg7WSiK7ECD1u61SkSY2omaYK8sJLkYuY",
  "key13": "64Da92jddZHSW23N5EgEmdGhdRrm9DatemuUrTHqiFP8Xa7TJkJXMx3Jd5CQyVXFwncQowaApVDmaovZKyAst2G4",
  "key14": "5K8tWPsJhvDonToX4NtLkxCpGGg7TcZ3inbDgfgY8qAAwFSokztHD3EP8BovbnJv19Cp8ZZWaWjN5MX4NgxjgGuu",
  "key15": "2A8fsngExWTTtmn9gGGZhjYMhU2uC9nRNRxhQzNSxXooKxviuaiAZPyTjdwwVvksapz1FVD4Q6n4MkX8Wnxhx57R",
  "key16": "2KJMvQ5Zezdzc1SFgcLTUZvdamTeJTigH7RN2UxY88Y5og2EmpYSoU2tyh5uuJ26BMYUNqkV2CW8328zSc1opJg8",
  "key17": "3TkNxJqYrvmifKzvhKKPNuWxn4nodPTQwhNVsp2cNCzbcLzXmBTHuuQ687varBpNnq6QVgux52VvtqX85isetkeq",
  "key18": "5kmPTnxQvako6jZkLqT63MCcppT1dRUgUZq9u8D5VFJ174aDEt4GWfDMzbucs5hgY5Hzu6jQfJtpzdGp4EohUNrF",
  "key19": "32diMhMa5RWGHWQetwsf1ERGVLKZTGGM5pFuHxKCs9paFZ64hJ558P5vbp2966hrUEyS5dFij66fZymzcFzdCXs",
  "key20": "4etioAhXwBxKLffs51SQRAZzPKeqFqzPsxt3H2QkTL6Rq8iWaGvUtrJ5C1juEnjm7JKyV66gv1JLxBEEVzH5WZZZ",
  "key21": "3qdZdKWkLjpZbVPpTjjeUsJbSFbPihHs1cPpsXJzaSk6Xin6mz3j9S6hrNCPH7dJqCjvjWYmbkxr3knEmWam7VDN",
  "key22": "55s6Xz7L9m99nGdMTdhq32jzsBoj1rZKm6k3nqezUZFKD57Yk3STuYuuPF1ouNfQaLsd1HAutjmBe7gMTR1MYTAz",
  "key23": "2mJZvXys4DCvv6uxBhKHyGCf7jdx9SSLz5wbxgKdESYRGaxWcmXd3dLME2GrBDmazmpDWTpdpCEyeks7yWX66wdd",
  "key24": "4pEmGBkabUVRygSQTJpDyrPoG6Ck5BvMzaoedhQgC8ZQZ6wPCgsaXi2fFzkfG5UuydM9aEWWArxR9NbhcVorPuCq",
  "key25": "4oVKY679B4zxPvRggPrW3XMz5pY1EvwKMyKEUmfiprdcN6j4omv2F5dMXrkoCR2qpKYJAesuXMHeWaThsH2Cb9m1",
  "key26": "547MrHpHztzedaqhtjcpH3X7MFoTF7c881xudnLAHkCpN4qyUA3sYUP3QTxPoe5KsK42DrdzsQ136RMurHMVNEcr",
  "key27": "3zJaBueXxyds3T9wiwsPNJ7mztchy3ibm9hPQqdcNAbyk2A6QXgsh3Zn9tYKL9tyEF9FjpTSkMpL3mgfh6aDuaoG",
  "key28": "48fPVqYqXZz87R5WfdQPEc32MsZhiaCua8uUuzCGScJX9LWtwHi5cwxPa8uPjtckp3rVou85oNg9YRTCffHSP9tq",
  "key29": "3oP4wwMKzTdQgjKMRjD1fLCoLgfJ9Pvzc91GbRGDpvZTujzb66qnqJYY4f5YNwXLjoZFwR2bpFfyzgPBj6NeVubv",
  "key30": "4kSw1R6q2P5xsobhzDjPWA3EGujGTmejKJjo9N1BNcs3nn7gJsbLvpxYL4Gn2QRtP8LsiWGofud4FNkSe9cKWPNB",
  "key31": "2hoQyM99vUPxZRPv6B8LCkPHBsBkSZ2MhuGt9Hac4nco8yiLewwyn8U6KszbXfcx3XVrov8jTmU9QvKKe1vFPdw2",
  "key32": "3x7LTtuz95HNrmqbt7z38yYK1WshVvkbn4nuszZN4hM9Ywvnbb5NrPauMn97Mpe26BGpSUHqnKG9fD8dgKVCjxrC"
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
