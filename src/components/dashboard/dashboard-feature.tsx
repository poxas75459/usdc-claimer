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
    "2iXvLLXMWngxM8nwygoKfpQCnChhah3c5Bvww51sbYJ7CLVKs1VKH13NgAmxbijNFEpk8HeeewvMZJDCGB4js7MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pumR9hxSadSce2Hfa6kG9XBdQeewsnVexWRTNn24xaXYwMEzne77zAzPaysNLGBA6df15xFyyohjga8UG8Dryxx",
  "key1": "pYRciE2DX6UQFNsFCDB1kmNVZJjEkpoqnyHWttKJnoakWSHTRXeUs2nWZHLYSNUpbWQ447RzfnwGrzFQ6RZFYNt",
  "key2": "5b7GoGrqFVimqxFCikQr28L3KVewZbLjSk8j5cE2sJNUMTmAY1Uc5jGddmYbfLFQhFAc5kdzwPsDQXnLmEARZKsx",
  "key3": "3rpveEg3BoXfn1Apsnmr4d8YN6eMNYQ3W64PxDhXnC72bzPDGbXbZmaquBcQZMqjufCjmbRMJwFkk39WnhENTk8G",
  "key4": "5nV71nyGqZrY4mpg4c8TbEtrchZutCQr8Rg3VWaLdLdE512kReQ9G7CHiCxHRtd5JWi92MsA3ndUZxH8kYuFsShn",
  "key5": "1BCp3tfyQqoq8PLe8QtBjQJBdmQYxoRS6cZfrAtYvjQUeJsZjy1LBNYzZUjT1JshQWww1SB7rEbWbuCS9KbUN48",
  "key6": "289qUeBtSNpjibwUcuNAzXASVjVNPzHjvyhupmzvwhorEVMk1AYwtagw4YfGbDzTEgtBkYSX46xSHcy7D1zDPaR4",
  "key7": "Kbnag8DtPaBgoZSB4EsSB2r8v8xwjkLdSvEvAxdVqvRXqdZt9CXhJm7ybVg47jqhQjsmCymTdLXqSS5T6GzERhB",
  "key8": "5rEZKJPGBmZ9VuB7hqe5fA7Cfb4pqzMiV9PaLkMbHcb1UpdzNLaYGopbpPkuaTL5sAmJZ2WeCZDBFC23YRLb2FhQ",
  "key9": "5RPEo11cBJ1rxPXzxGzGzeVxEAX5XomHL4FEhkUQdZ8QNfdVxnz7i9VQNB7e7DLYkK9EMcUvfy3YWXhVTNfP9TD2",
  "key10": "QM1wCEugX37GgUXwDH4isbNLtq9eDEbgBzRH7iuayLqWZdyoxnnRWpN1B6cTKRwS51dp7y9RdoEsnEDvevYG2pv",
  "key11": "GdPXpsCcCU8mAgiyFFYPuECVdtLQA5G59M5PXFDPtpna9arGnvvJBV2nPeuy53jxBpMitRiGt9VJKXATAw1rPCm",
  "key12": "3tf5oChxp3EsAMp91MCVBYStYPCmM1h7HM7FpggUNzBjx5APbX1YJv3VgQpBZgbQuT9qpmdgcEWEhtE8Ew2FRgCE",
  "key13": "5gphUPeS1nvJB3JNf1uzvxuGFYM1Djq6wyA2HhPF5vnZAMEd5EHx1jKK8zZnY6k9MyPcRZPNLTZhaHjNFhcwUKDn",
  "key14": "zBeCcUXz8EP3Px9kA3SnDnJ6xxmtGUNyw45715yfozZzNCCfm74n9N9JnErLkGidcgEitmW39feYsTdmEVPecUR",
  "key15": "4X7YRZLsMqmS4visFpGp35oqvnS1YiHsuxdt4dj6DFLxFCEXH3EK6hEng2Bmk3vqtA7k1BCNsuvrKJSdyxGJrymt",
  "key16": "4CpXZBxoJEcyzXiRUX8YzG1YgfdLRGXNamd61aQUVL9EeMDRfTZqditG9hCQ3P3cz7BvZehqzbALtt4F7cZqViiC",
  "key17": "4aVz2zhzYpGSzxiRKkNUX9j3iHP5dVyGXe3AFYu3HAfVWoLFViQkiVwUxk4MTBoNwBSX7ivCWkqR9tN3FXBqodpn",
  "key18": "5JccGhQQsEvnC3nqN2K7EpnTT2pkqZwbqYMMAxvcFtWZndwwuWdc4utPSER9NJXmCYDiGuZ81yST6juU4SfdKjQR",
  "key19": "3f9Jn2FPVAt4u6WeCn5sLyY1smT4AioS9qUL6dv7TRiTrz5tj7nX3znUFhSq3W9KppmbEkvzsFv9vCJnABce3siW",
  "key20": "4QedJ1gcisdYb2c4YZpmBwfLMYmvbekWMsfSRysLYPBpEicsBQMETPr615UXQ4wNcCqnepeYzy8zAAHWzaiEBbv3",
  "key21": "2FayNgax6akiesib3D1JraqNFqVjFxeu2KHrXgtA8Ze2Crt5pB3iRdAQ9g9uMwyHU6FfvReLZU8Fe6wKCdofnHJp",
  "key22": "dgQxKasQEd4cU1GNETS2aU7Ay5XNCL9SrfHCR12kbpeaktmYfB2LHCqQQxeLKULRTsjkQ33EZARdb17mUjoWXmo",
  "key23": "f9NzZcnXuJqzouo7yU2ee9UxCrtGycWqMeqNfjExPo8896AEeuMZAysa4tBKC9MBoAS3zG9hFGzoTQdrG4jNH5A",
  "key24": "yYGFCUFkqYNPvRR7dQ6eRYA6XPjtWa7QfS2iis6mo9LZ28SUx2JKzesx7qrGhXeRRiMthn8bYJ9XpceTcEpUgjV",
  "key25": "vZzaWPLALKGisScvivuDxNQvdbAJPwQkko1jEQ3JUuKAeJ5M8TD92YwB5wEFMs5rexXoR4Acpb4eCZekoaccXMw",
  "key26": "5kbL8sUYswqCHxG87PCnZF2595QcL3aQza3XYsnWZVXBhNX1129jwzYSxM8sYDgfaopcJTwx2ESkaRnFtEwW3pVk",
  "key27": "3VmycLrLH9Bhf1V5vCcW3NognxWEXn5knCAG9Bq1B7r2tpcqsjo2iSjSpB3MQc3AP2eDuN5wFabTEuRiddtn8BgE",
  "key28": "3irvbe9QdDEeExTg9QwCs8ppRXdArs4cRh685RczeofmjBr5fRt1Tp8zgzKpKphhScodLGHUZ989ZVW8aJkG6kwn",
  "key29": "4n41xGcnNBMxzpHQ9eBd2iUTCKepzJDC8e5ZwYLLYvJzqdrrpNd3V2uesfXRE8seD48LheuHHX8q47ftkz3W6yh8",
  "key30": "4ieePuWavbRCDKgkWkcDczJfMfs3jhcEc1tuHgWJLn7wTTCskLKXmWwjFyzhmiHBRw5JmeySndLJHcDYrU9GTkNQ",
  "key31": "2abmVAFbeUqXM3uCqCZ9hfWk4uMLVy8rjofWUL3sGwxf3UBeqerSQM1pbTrdhaCUDCyXrxPzDy6ec9uScZ5iFQ37",
  "key32": "64nMveak9Zo4kaM2XT5r5Uh7rPKvDVk2dEvMZWf6nHSQ2aU7yRXRkcc62rmNK6JAiAbxAMTUDkSmGqiRhfKmGamZ",
  "key33": "42Y33Gvo9x2GPBwebT9nXJAQ4jLqNFPnrVNRueCHVC4GgnaBTkCWj1ShsXMSfW2wU93p8PpuZHyfuNKcApGJTB2R",
  "key34": "5WNE6kEibSMYAwnJom7s7kMgW5upuZBUvrcEgUiT5mPUhe3o9Hn3v4vw6b14fi1hhaQ3GwGqLrURNFahxEwZtVM9",
  "key35": "52ZJUUY7QKUGemgmq72ENvdyzwbCcnRBPcRkHK3gNo1iD2MhUrr7UKJw7tv87dwJ364fjKMZfybBCZ8Uqgf3UHUW",
  "key36": "66EedgBFnsmMsYCxNFyqbaobLta9k3omKwiEARMjswtTK5MiVchHkyKdSARd9RoF26JSZeq5ohJurA1jwGuqf2TU",
  "key37": "4mei5nxRgmwryYqvSGUUeFYGJxZLS79aZVBKoB5jKjKZoKo4WJCjhbVq4L5G1Wrf5PNkdQZQfcn3Ed4MbhTW4NUZ",
  "key38": "5fhDhNqXQGzgWobzRa2YohAkbMbrXKyGiPvjzmm2ShfBAcEEJovF5Ru7yCRZd9GvG9gnocnsado8mQZFTfdWgdmA",
  "key39": "3cFdRGSrHePsgoagqE11NPSqCjGED1DDhVrVo5857RTSDxRxqCWAff3nFMRzMDENL9fMHrE2eC1CYkeZFTZyRV8D",
  "key40": "M8nF3AfqWXpUgYFpVUzDbUr6SWpNxSKxADmB1CF67YuEVSNjqqb8KJRbMZS16YiJs8kvVqT1PFUwsRa4MM4Eo5b",
  "key41": "3Dwv13ho9Hr1RvTAqJbFvuLcne2LaH1LUhnh1FKongPuPK5ZVvzAS5y467V2pChEXY5DYLAa9qGhvGgTXgkcx7Wt"
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
