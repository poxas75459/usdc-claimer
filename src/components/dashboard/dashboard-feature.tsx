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
    "sTrXKhrdVxTCz7o5UkpS1Bo1kWLZiguHN95ZNyrk681DfchSftMf1pFWukwe5iy2dLoKQqnafkoHz7pRe2SPqZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhmnztRdu3rbt4VPKmiUsfBTSf9wVh5s8Hyqqa4sQsraKH8sAKjfaAET2B79XtVRuTtVrdjUiJyfgufzxHjmtAL",
  "key1": "2LWS74xfXYrM8xpVgkpXe7x24ACwNtka7MEam2cTRMpZ4ji1WcAKqtDFDDBcTZCaM9CJpGbYkbS9KEjfGFXzgXQK",
  "key2": "dmWwouRyXcRopvwjUhiUB9PuJmi17hpHRbeWgjqYM22T7yvrResffyv56d8boa5eYyKspbc6mBZKc1xZRn1no4x",
  "key3": "4tygkT4x3ULqNM2c5ki6jjs7U82V4LeyC1YyMUhnh6hsG6FXdqMsK7v9L1DCv8pHjWwsLBjY1XT2cyhvsaUo4ZhU",
  "key4": "5gperNbXGwPk2jaSaDPfUPQNtmcA7Hr1BLJNr1mLEo5PAuphe6HjoiXpJDFTnYeSVbXon1VcWanfpT1T5e1qMyMx",
  "key5": "4o76w5PKkEKmzRZURTGNpjta1gaPc68Bp7dxDA5GgzEJV9NYUnVYz9JyWdeuzfqcCXDESkNp9iAnu1Vzjp8ANkhb",
  "key6": "4GwBZrKnWgBZv9CV8hCQF6JGdv9TDqbWubJ86USaWugExW1uht7jVqtrrLjpBV3jLYEutC2m4y3SzeFW18RxxRP8",
  "key7": "4RBtLJgZSdbrmbkEXbpRYxdxnxEdV5hjKxqDno4s9BCd3jWffjNgd3Cg9bJAFvKHNy76LUnAso97DnaYyEK2MAVU",
  "key8": "3YrWbtzXDy3dqEJCaM7mjUMZFnxD4XponRMyEPVkNrVYrBrvhT867hcjAPBMzuYQH2bjsVYopjM4k8avRUCUugx2",
  "key9": "2JTBqxwDsTHuLTQBiHYCEBH8gcax9Lpc9LBAvumpAktdRzSifFyJhcCLh2eEjJ4jWtBZQ8TcZVC8zz92WdtHac9m",
  "key10": "5pQ8jMiKzFtM2n6ThpC4BCLiPYG5LV56tFm5Ki3wjH3JLE6aicaqvwRFnor18N9mmZeUgoiKtFvgTN7Xe98DRsD5",
  "key11": "5MLJQztn858AR13NYmWkoD2C9NUXfFkb3iYAoFEiD6iYLDGZiwDTPn4QChMKwd7z84LG7rUU9kiWNDgnpNRw1GN8",
  "key12": "3v9eLH2vk4SfmjPiLqX5fg7jKfbAL2jFGicqQNrpqjtTFpNH5mRvYqXK8bd9UN363j8FwUSAqy6zkqjWtWTE2dr4",
  "key13": "4FwZpaN2UhyhC2Hcu52KjEXrPKQJc7rdW3WhcCMynhLk7we3DiwXBa24YqSCSSGUFxkSaxErwsG7wNnMYdetFGJT",
  "key14": "226JUspJ6aUf5p4SLXirXccYrQGjtedj9RuXF431EUNdR63onrcBkTZNiQsLmnszB12CeCn4mZ8dYKcfA4ppb3r9",
  "key15": "5sDfVJXxPaZYbEa8T7UfBbcYxYqtJyL9iNgQxmD7yWnQ4mLrKQEbTnoY3nMVLkXQAqbFmAWoahXE7bQbD4fsybK9",
  "key16": "3xvY7fCnvf8Tqua6owhzc1NLZySwnVNGpxS7xSerg1UE2f7bZSDDsBtg15jhafxhqdeavJAQrcZgCKJyNnobRT51",
  "key17": "aCSb8f77jvyvi9oainMhyMa2rxspGafAnX22zCYWT1TedoitX5Y2FffBmLaWwVDSeER2pZQaAyd8YRfMDXDGReU",
  "key18": "i5jStAqT4yKgApUgUQEmwvErqsGZRtY8QexjHVhKNe87WrAYXg7eV1PZAQV4fLyYEzxZnELPfYCUcmiDBXCprjP",
  "key19": "3Y3ebLaoMV3W1gzDhKR7Bk2SSoeEDut57RJaZbGuJ5jEmiYgtX8zvVXNHZNw1wUN1xtD81gA8TnSTYXRg2jGJ6hU",
  "key20": "5CH8h64DTBUisvPiWEkay5tvH8PACoCdSmjbHiyQeje6XciWsr1mE1t5hyDUXw4814KoeGTXdxDi2otapxpKrWJe",
  "key21": "4cKVZsvvhtww1hRoZefhWkwGMmsQfRuMW9ZZhRbFcoDtB5xzbGKqqpNXCj5LWpc8s27x7e8fK62yFd5Tentj9q2f",
  "key22": "2w3pDfzeHyETjTikEssQS6kHbP8zw9cPwVavsuCwCe6pfDbk6r2fQtD2yXkkkt31FdV5XsG8WxcMixjGyzpbmkpB",
  "key23": "3HoLadz1FAMGGJ9aJMi4qLn6wEiKrdsRevWhjAWV4Kbq4C2R1fUeBSJRq2ZS6YMgNoGGLnUeG72YUCkdYMHnabss",
  "key24": "QJXf5vWnKhEnJVuYDMTnEdHUUZFA7KSWZZPr8dWBPkA2FVhH2KJDNxnmJBRLytJd2fD61wcdQUSAm86XT9YEz6M",
  "key25": "2Kq7Zn9DBhQReUx8MSqfc34rqLsHTB1r6gUFTfQB442PTkTHKbM7Z4yb3yiMDxbRf5ME9NP65tbJBhWUKR4pKfKc",
  "key26": "5AeThqVpiutSwSeFumgju7mgH9dssTuTHqL9MuAmzCjktH1GNRAztReqbQb7LyGMzDtYLaeseVErSvoA5ogWo8Cc",
  "key27": "ttP5RkG4GBSUxrU1iqXiJVeratzHSGxFtc3fnNnTuGiRAPZECk3jPxVjzb1S1KSjZ5NXUk9quLpHkznwpMc57WC",
  "key28": "5F1LJ2PAA8y1ZBx3eZdPN6kmvUtAXkKMiNysfPTRe7RdtMymmmmxFC7gksQq7WhNAazwuCXvEwPMS2pfUqMwAVLg",
  "key29": "3TRsneQ3FAW6Y6W55CbWiskGiVkaq7WMY8om8QSgnq5xQWc4EAsthTuZRV9q6xX1Gotf8zQgEBYdKPwkzhMVancT",
  "key30": "4U3x7jQcXQjFVCSbVRDSHfGbyGiAUGw3nPcTes4c9qRQfscBTANio2HFHwNnEdQm738by2Tptrn4ZjVEm6XWySoF",
  "key31": "2y3j2hQrVbbWtifGRnbX5eT7TUhQR2sBqzRynuwQazpUUJMUwAe7ueyGNkqEkAS9FWouarrpL4BPKSEKpamnPEwj",
  "key32": "4Gmu8sujNaUS7DkPFB79gs3KFiXrQ74hewyX6fCsHoobtSLDi5zrpWmshEsgKszLJV7c9xpHRQui68ZS4fnDpeYs",
  "key33": "Aewj7zRBTi6uyKbf7bUfLjJ2pmLbXVMmuz1SL6CsDUHmypddvUZwRv9ESyoStxS3YC9EJhWRKXdAHE9agwusSWR",
  "key34": "5F4cGByWBdzGSRD5sCZd8S46yZGWu4X29HyBz134HMgCs6ekqnj3MGxSaLDs8hFrTHh6WxS2EaWF62fuu4o9odhN",
  "key35": "FvyDapGZB2wASrVyBZADZVK2AB7UsjFJAsHoX2KXNf9KEWgHfFnBeWqb32vCkxb5Kok7dRCWVNEvWHL2GmXxRxk",
  "key36": "5hTcacG3pe196XK9kU9s1mCKhW8XD4uJa8FTMhzEqhdLjrJvvCJQFNYinhAKr34XvQdeNgATmsuzQFZY9qJHJNNd",
  "key37": "31Ac6hHEsp5snFrezgfeoVXiznSeGggdJoou7tbNP5HbJxAW77jRWFiQvVME61mP4R7x58MmXvMuuAah7Pq3K6GC",
  "key38": "3f1LsoBZyuDMXMnDV8JJBiHJDrpLd3x4BfhYggsoynSukSsDZrY2USrD5vFBs9NS552cdDSALYMfd7oYDjuNU3R1",
  "key39": "2zKLF23PWiUWYTogRjiUZUgNHvit6Rk9iv6hbnHbkckxJ7EVEGznA22oaDyoqzuohMktPN7YsxWJ7qGTYYrAhPvc",
  "key40": "5xZFW4HTaXhT4bgb8DaVib2huz9bn7fRpE8NV7dHRcmyY3Vv9MeHyicTURDNhZuPYkAfmv45X5gWSN3nPApuNmQy",
  "key41": "2JsN3VPuUY5T5NhAeG95xV3ED2mV74h4K1iHZoWcbbtuMAgYscMrwLudkL1oqiX3xwJMkY7akAoAzAoKuZaFApGx"
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
