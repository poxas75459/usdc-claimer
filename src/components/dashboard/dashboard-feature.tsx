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
    "2nQemBPHFq1BiSa1iDLm6ZzxocApxByQRAdHjb6WnaErUa67YhoQMxUYLcrmzWadM6DcikP5KbZYo2ZxpBQhxnnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5id2nffvMT6VyzioTK31iN9z1U7UchtQR6GpEtvTEwLH1RJs9i4C3gwULrJ9SEK8VsoceumC6NPQYSMjF3nNFD51",
  "key1": "2t2ogotoFfLn5UfUE8NM3fXmmSA6sn3T7bKtqLXBhiZexs9pttWA7mb9bF1xftTgybzMFPJziN9qyx1Hobu85V1U",
  "key2": "5G8X3aZZVTJwZifsPMFZs1MdZB9axVtNVoAjTVr38bG29wN9zHiv81hxoHTXHPfKC3Qz6zfeXXDJsoju9kjAnQMy",
  "key3": "534RqBhHZymtshiJEjvY7sntq68sAXf9yn7iVtj9uYG27t3hpzWE7ZMJ5emsyMBbzEYzrQ9SeZKCwkb3FkXUS6p3",
  "key4": "5eBUZRDjNf3jKiJ6F1R2qTijYNRqAsXLE3NoejjxvRyRUkkr8nmAkzdUSjY64U3ncPtZswpmCuHenCEWd11Pea69",
  "key5": "3Fz4KmFcityDkNrRPYnLoPqoQRcMuptvJ2TcEmrrEA3mfYgTJwcqzJwAii2uefNVDf9UQmkWujtgyVYzdN6tJeg",
  "key6": "4BPsJGZzJt1mc64H9xwKVBzkiWUGBf3knzAbSwbcwQfd16iC79iEwE8atKLyu8THQ2MqZ7nin7yuTrQJBuhLd6DE",
  "key7": "5wXFUqh9zR43nbGfvMCveYX4tAiDkoPhwgH8K7ZJ74Gjk91teowcXM9bbY2CQ1BwsYhggav7oL8qyqrtcCvs12Sb",
  "key8": "4csPidUS4D7EkRVT3p2PFunf7ChVdxYvyXhBNVhXrzDQSyXH4t1XubSfGJjJF2PNqqEjSvVAyakVPkaxYf8u5rAP",
  "key9": "5DiLnPAjzeMRMpmv4zS2Jj5vxU5EGNyCRHm58khXxwr6tdwJrwz9cESrfNJ6qhyXy26cQeUgmuQbLwLvxA5xMmEi",
  "key10": "3C2Ptk8ZynAtXBSf4ohR74RLazEQccZrETvCwjY9dkS8XfiR9KyfaFtnvZVB4gqQ6XTCpctzLMWsitRZLmQUSkUM",
  "key11": "4kJxbmWwc1DMj1nWrPDYzvUSFJypJx67xHfj5yuxL3K8pWXt2NP1i1BNfU3w1PuVnvRbqT8FXjpK3fmKAH26Ufnv",
  "key12": "4F3wVueDiY9AMc1wvLJsXp4yq7Guh7kEYVXhQX4vs62suepKCDP45ZS8ru97RWSLZZwVBS3jwCbHXqX1RH5GsZJ9",
  "key13": "3ws7A4QSEJK6woGob8EN52dKf2e9DPXAf46jqkgDXebkoMaz187d4CZpNc39TyMMcQEkSME3c8eV8eJUrHqKC4kB",
  "key14": "5U88ZvswJeZZnqVQeknVjn1jiJpBXMmMHaBLz31xAYEuSkMPTyfx1whvLSCSAmh6LwWFLEtVQ9mQC4aTb5UgzMEi",
  "key15": "5jNFvkgaYdaWLt8gUodZURUyWVVyRgf624wJTsoMSRK3CtZAjB4BoB6sq3LSRjf6B94pfsoU74XGtzutQfxek7xV",
  "key16": "4BCu252KT9NvbH5pVHz5pxgUq8qAhzXyMdbYy7yArAv5DqWXW76oY8tmgLd5HRde54k5sfQ1sCvRPNhoN96kKbjT",
  "key17": "EMLZdHdzFUsrYrqe6RFVZQGkakhauC7rkWgPKCY5LvW122GSARU9wt5tB2B7fyKAvZVxiP9QEYatPJrbbt4tkWF",
  "key18": "3Nw7wzaaYbtFh8W1RuUv2fZ8L13heWh7gtkh6KSiDzN64EUQXaBeKxahniT7b7SapZsEFxrqzUz2tUvYnQhDAGAZ",
  "key19": "2ErWuz7gYHsjhupSHbsq4VMbmfqtkvWhEdKtHMBG9h2ZPjRryWjDt7BAweGAc3rjag3MTrfA31azvEY3hTFdzkyo",
  "key20": "3HyBEcE1SdZv7BVDe1AYMF4TTGoaaywa173zvXvLW4FtaHUkLYLAJzu8YsehNCSgqanEVp2REnmwNr2pd4zpSSWW",
  "key21": "5pyahr8uZBZn31vTQMbz7VFmcuTfCr13NFfjB6S9zQmiD5NJiCrdyEZwDx6VARgbLSDmgmVwZ5v97qsbeYCAa9Ff",
  "key22": "2w348f4UedeQuaQHCeadXHMtFXLP6G7qHQFhsKsxS7AGc24CSZazxvj12pPirFPyA6hCsTdPMqXTTWFtsC9W27su",
  "key23": "26YmkkWSZDGzvMXyHSfGhBFk8St5quh4cjJAZgdxpWTzh7MrVDyNiEAb4dJC2i7P8R55WKrbc255vhXPNFUjgZrd",
  "key24": "PVc98Ge7Y1dWdRRMB6xbBUDNtFc8tUsPmQYuRmxFZd1U14fVNnz4T88AkxKqbDCTSCvbJ7wnPuTCttcgyDUqP2x",
  "key25": "2WVDaymJVjdu7q7KE2DHjiMsyaE415jWsGLJ6PmLw1s3GaLgsXJAnpWkJh2D4XHsg93RT5FW726VVRgZ7APQiLNh",
  "key26": "rpCMiK4yyvhYHxWuKzW5vdLGrLCWupNprF5SsXUKrjqRL15Z5XMLdLM3Dxn2B7hdQaWUB6L6eonB4vMapebkbcK",
  "key27": "58Mw6t4xv4aFvjs15V7hWsbsdjB9djfc7P7jV2JpgH9L85kkxCVQrDoNmb2BhuUtNDkUs2kye57GNijv8gDwkxDv",
  "key28": "5ekXMpsCgDcJZ5s7e1h8dH6Lg43s3nRWZharrGu1gNnNp2bLCPUw8TGMCWy1i5iUwwgznPMjKqYWf1XFsV6Z9WmU",
  "key29": "2xNhUUmRm9anJNPvQc96DhbgkQnmbDmrJ3E7jao3KppVzeLDkyBqxQbVnpr5TRomsCxGTLRTTHnJK9mRVjzZg8qc"
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
