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
    "39dGRLFQHyxeXNiurkGeD15Ax9bEoJgvGmJfSSVQHiQ4oSoPeEsVejytor3kWCCZBdft2CYPzgWczSceoNs1SkXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V35qsaoKkhDBhhDR7Q8VfXD8iLbDhVyL8whPyj7wXwuKKLuxd8XnSxD9SoWx6a3ttCXtwobG9A2DN6WR5g8ph7U",
  "key1": "2izBYWxFAfpiEUxQTwais3FHFAGr9NM6SBbCmLHSEVE8qnjtxx4SeQ217vbpyEPymgdbkhSt5xPyV9zgnoAZzR2D",
  "key2": "wJDTHUSFw8q9f2a5syKM3M3NiPJSAGP7mG4Er6wREGAWqgrutGx4UJ4usnRcLaPbVzePvJPA2csEdmoBPDhJPxL",
  "key3": "mDYVEupxrn5TDTRYPDVZT2prK2uPy1X8mr5yjSaYuYYdhzbbXG1yTCiMxiRqfiv56fKjR4Kvxo3d2eas1Eh3ih4",
  "key4": "4TeaB5LLywwh1hpBDj56bqrh2usgPKNpK9TYQC6nHD8fDNenNFAKsWnKaiDWooD59b1fwU9Nx8vaP9UqohjsXn6C",
  "key5": "AtgVK2RMLduwNqfXGu6XvTBtiL79LmmSEz9Vnp362rGM9AaqjsacLEdSmd7BS2XJvwqN5TGRzyL4kP7AJXsqD86",
  "key6": "26aqwzEG1nhFchxAWJms2mnP1paj6qgQhAxP1SCLEabZZA3y32zniqwPGMuBMBrt8Wvi3JLJ4CNPfNryeCMNyy1s",
  "key7": "5mMDsxh4BQfe5Wrf9YHzAhD54Ki1DbCy934bnnvbEfhKfu75ey4xZMD6TbJYf6meLdenTPDMt7xQXbWJYrW2sUE8",
  "key8": "3LYxWa3wus4vXXVS7jtc6D9p2iuwA9t3yqN9iZ2iQEQBXDfqs5RzNqDc7UKWu4kBjLQu1EVQtrhQWr6ZrfzvT7t4",
  "key9": "5kUaCwsxpAgtJpjSPsrksVZdyJWn4amrvAmNgpdhX9J2MDnfc8Jp3zFjKe4QAQzmDXWCAt784bBbgPHxwZaWYxgB",
  "key10": "4cj3hhraVcJy68FQ9Z4nAAA3ZoX6Mz7imU6jL7q5Y6ZaEvEyqRgx65g47Kj3psC3ivHXs361rA6Xq69WRrnTBqdT",
  "key11": "4dFncd8HhuHCcfrB8Q3KizvyaAoY5bnak52kC4X7RFLhjpFyf7LzeYyndB3b5uwnpX7DHjYaPB4GmSqhTdZio9Qs",
  "key12": "5hpkahie7mWqhT9LkCfXCmYnsr6vWPQ7jBZB2aZAM7LaZ7w8o9gsfAPGR1Wi27WbiCoBrDCZLzX2BMvRFbx1AmrK",
  "key13": "5HLoAXAsq5NHaP14tm1B8dt96TgfvKsuaQffBDdFm7f6PdSdQHQLzTexq9tGtAd1doDtRvxnupztDxUjX55CKJuh",
  "key14": "3bdnYQCgYkhACHSY68Z9hs8Jd7MUmhyAG9ogJkoVxuZmKVryZjHyyDRn9VcqAwsGyt1DmwzNoZewxY26TRYA3YF8",
  "key15": "2snAQD6ic8TErR612cYQBBzS5FVpsziFxS9fscX8m3nz4f5HXF2nDVbwJDWrX16RaeVQxVYRETYufkqyYH3oBWf1",
  "key16": "3NwwKnQw3PP6gLGfAmQZEqYXgreyoZBUurCqMFrCeXTK1fKkeBr2dEoq9vUMCMUWBGrq3QuKia7Y9JigWAUDsFet",
  "key17": "J3QzUdygan9mqycBuerchXqQkcV1FDUtsfY11bekBvsw41FS885VuMXc2J3YRJjDzH8PNA9E4H1EKJYjVGYZgkM",
  "key18": "341CanJB4RHz5UbaabB8xP52DtC7B6goJTJGT4MpCmqtjKmbEweLSkE572Ni4whoHxFTDLKQLvWGvAJTR757A2E8",
  "key19": "3EntMBkxEAZkaEcbejK25QQWPUFgfaDjTo47F66f51PzcDUu9NHQGgtjcqV6p3NG2itDsEKisVQeZzpGGRhRy51W",
  "key20": "3KEr9JsyToDVdnfLLeBh66RCovvgPQxQwj3tM7zA8RnSSpuuN7vZh5YBDTGtPRfsjokL961V3hmiTMeUAfex3u1E",
  "key21": "4maTNP2Jqi5Bq7WE9JEJjQZFmR1m17UgqWfZfCb4kpHJTYKvn9bGLggYi4uFLBs8TtvyxkPoLMuUJpFq3FhiXq2s",
  "key22": "35f8ED5ZaoRmtMVapMttgh5TrXbFBjxAYY2oruhUW85U8xUA1vTMHVJUmCBDuvenW821984N26MethQQoEke1eyS",
  "key23": "5JQHneNB7DPdvcGKCG5dtXHFCARMBNFswpswMddqWf1whd17jfPjvqEFB1xNuDEiZjpYjHviU6ehZ6LN1PH37Meg",
  "key24": "4o94FRPiMUDxuhKReMu5RW6wSFVxHDmLs7KF8oo9FhREHkbfCvkUBzrdMZGJzAGFmoETY3hrGVB3kbue8LbMwg12",
  "key25": "3oxKsLDcGsfwb2XG34URRw1XJQFeggLg4N3Wea5s9HXru32o4KX39FfTY9Hyjj9jHPYFqzytUzZWJwdnGZvb7Ppb",
  "key26": "nrFt9vKLDRZUs8U5qhWuvLaWTyGuSWYAintEBBQXcftQ8yks3bRz7PuhouAkxFKbC6sYv2tWWpPnU6mmgDJ1eFz"
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
