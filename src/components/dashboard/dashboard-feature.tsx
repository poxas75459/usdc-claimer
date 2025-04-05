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
    "51AF8cHUsFn2RoJHFMNQVzYQnqoWokW5Mo8nrEC31Kut2Af95pppnf8jbcohEUQfY3nzS4CH58XrsuAXkZhLmRxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SemSf1c9sgiMFq3ceamSXcu7i6fdmfvbtVVGHrW8qvrG6Bp4cCoh7ivhZR83S3emm75dBWVR94H7evLCCD7Jaad",
  "key1": "5e6JDYWhRZfvV7JK7EU2pDVsXfJ2Nwct1NeDsQD6VrNGU67TuJDFBe8R5zhpAcEkspfHnwYtCgXhnJtpJqraLUce",
  "key2": "2UXrXmUcBA3PVVagDXmBC64pi8jHe1bCrJovwMTTVKvvXxdyx7DASMjpdLbphAK49q2K5wuiJ7YPJSKu3dHfEQrD",
  "key3": "5qnMYeDSYsNK2EoE7jUPnnDwcSpgh57tT5qTbKu17VEpZzd9M382QsyyHtAZMujnEi2dTxLTgdbyuSHSRzgvB4x",
  "key4": "3iSmJxYR6YkwN4hSTAV22LVmJtPtHDELEarGFPCwjkiBahAquG4nRQVH6KsTMjZhFj7aH53mo3KP3UfjGfHKdKzF",
  "key5": "3ypyfutmfVtJ2sGvxYXFaW3wRZyhd8dau8ifCeQLMGNtKGonB4xCZBvJc7FgFdjQ5jeFPg1D4hDB3p335hKeU2Tq",
  "key6": "3xcbngcBVzjS4YftP1xcJPwmU3h59A2SjX3LdHC9SxRtnvErfzwYYoh7FxjmJQakwXFHJahAx3kQGrrQYZaWKZPX",
  "key7": "2gYsNXFTtaQM3aDnrZu8sQDGd5aVQL9uGuysccQZKmWWpYRcBuiyXF1ihY7VVFLBEHn7CSWaEHQqrk3zx4yE42do",
  "key8": "wzZfNNAdw5nCrLYYWjYParkewyj2L45ooT2zTumTtmiSHex5Vuqk5TKacy59gTjrgvGR4ncM4zqfFLbyB3YvbNy",
  "key9": "ko7E4YYeFDfufR1XESqPJxUddAfQhiAE3pZdBBV3ucNnRt5rosbEbKfiCXHbJuAjBQD5VVHB55SofuFvsUK7o9m",
  "key10": "5JC3A7LcLnWKPmZww55ss8ptZvbnuZrPonnZXtjKeVoGBFYLvXApjDPZrvrEp4AV5eBkJi2P9NyV4kvaG9Xo1et1",
  "key11": "3C9zBJVprWjw7xieAJDJvS6js4Q3LAqXqZnbPxn8HcnJ6d8WQCrCRstR5JEzttvyBUhb8FzpTVovs3q2RMxWuKGB",
  "key12": "TA1jCeVibNcvpNYSoE1P5DfCJg1PrDpzmCqwfNY2F4BMT2kfMHc4g84yssBxdbaUJ1QYtWzKuNtnDXoP2f4Lodj",
  "key13": "4Uuq2s1Jjf786FdcEumstrsmZC5MTNXAcst83yfF321hkk75n9SV8JnketKjdrPAuFbTqaW8ENA5J2AbWcMR5r3g",
  "key14": "4yjwrkx63npH6HvuhKZdTWxc6jVFqRM3bX74fx2VsCx9hfaqJSCxyvNKWDzNtcUwnfoDFq37tK61RJv1TQjm41d1",
  "key15": "5hGqaZQ5iMrnye2NZhphwwmqpMDzDuDQozAHPHg96E2Sf6HJtM7XPDGdX2HWMjigkh9JdCSm6jqFFuHEJLyE2QYu",
  "key16": "4htHosFuhNeZW3LAxQAwEu4xVbraw4U4QYuv5x8Ra6wG7bBiFEspmNFy3kaaQvzLgVLp4cYfzK1XEYeeePSeKE5y",
  "key17": "3W3BNJm9Y3LNtdW5nYBwQZEJoC1hxp9gPGDaxusxHZ3qCymYZqLMF1WYCLVQWjgsYgsQoktRp3j1xENvWypwGQ9S",
  "key18": "4HDGfN5WEd54NmHv6mjHTjNdFdo7UYDgaW9AtVyaheQ3WnnM6imTfP21i47McWZ8q4ov6Rzt5rayx1DB3GbtoJ2a",
  "key19": "tucaaZNnRRgsEFYkCkiVs8KB93jYuL7vFTN4xV8BERmceasMwfPNG38XFca8LcKDLY4T2Ja9cKhpLUbAXc33DnR",
  "key20": "3GEwUrp39PTsUCwjgZUu5LoMQJPb9sxLYmdHJtC8yrSkk53NyYN55qvpLQJXWtHbAsegsA3uTXktM4tT2fYvzUW1",
  "key21": "2MJ2cRzG3bErTWrnLMbRjyaFf642QzJY6gXq6e4UQfn6LAcER8yaiW8qeUcxgcxSgKGaZT6Wq4zsP4eDUnWzFKYy",
  "key22": "53BqFpkraUA6ycsnYx9LCTX7hgP6vjai28PKFs873r77Q6j5D4tndhGVA5AJJDRFfmzxutWPyndZ7ARCwSXns86E",
  "key23": "dgjp4vrm7GTSxNvkJHRbq9Y9qFiDLtVZdWnfbErTMVj832rroSF1GQCwLgLeWfm9d6oua3xLNxYRw6mRBnhMJyA",
  "key24": "5Qnvv7do8KfdkKMNnCRrhhsGKnww31rKjmkS9o5XzCvkuRV6Qkra5harkjpafREMsj72ZAZgqXsSMtLg4dxD3C9D",
  "key25": "Xy9EsSYYeWPqT47TyzMCN3TPkVzxHnWHPz3AxK8x5xpoiRPjvNJTakFodXWk5JUje8AhUH4feE7scKAk4mQzrUP",
  "key26": "Z5E6xMYhNGupEZMmY9E685fdivYt3G2yEjE28spBT4doUMtpRz5HhKeECebwzTdJCE9DF1GKw2Y1Gk3v39XaZcj",
  "key27": "JgjmkckoMDMBS8YDMGQd1PS1fPNmreXSWjY1tvsRLUddmytHHX8TMW9X7EZLij27rwuWrGiBQkbrXRynAZpsUBn",
  "key28": "4MEgC69yhdCYkvGx59W7SYPd2RHkVGLpHVWrUes74BYhWJ1cp5dBZLjj7JmkAtLaUNPYbhgx9Vedua8kzYbyN9gF",
  "key29": "3taYVVqhQsqD7YBBrz5XRvNR48kuZyb33uGArmXpddurK4pQvBvWRYwMeeFwy9LcDt34gQXaDrTxTVd2cYS1hHyK",
  "key30": "4pBYMPXQSMM7bGQesSfMLbBeD7dsMZMiVzqHucoDY5s4sGefW3X8hkmrWeMcHWzaeHEFQNf1GJWfhPajK5pxmTKr",
  "key31": "ctBHmPPbm83epKco9V58FCaiuFZ9zv8J5LcJxjuT1Tr4VXCfeRMEFFPAC2RVb7zBopiNMx15DahFXRBHFsiecYA"
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
