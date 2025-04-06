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
    "67dij9x7F3YwBYp5puBf5JQw3KiwqNEQbnMiW2RtdKe9HLBwJzYoy5BroZPNazDgwMTdVduFsRyzWKMHcq2d9TjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ffcbYxcZ9kvFf1ekMYjoK6C6856by2nz6yFPJ6NcfobKv5Pt2VTQYxBB6N9cYAENaWgmYaR5ts6dFw6KWrRk6z",
  "key1": "2CekFgx1pWPa7PLyZmotr8EJZtsvq2crrwTgaAK1gFPwtzNssD6aEDKGaq71AYu1BrX2mxJLZwzAAwHkJ2AK84Tr",
  "key2": "614J8PFhqUHiWx4hpkQBf4pwHatG5jeJsXt73oKoQYEB9RnmcSjtVKjuCYSDdnJfzuTJA5hLTJ7hUVHxQizwCYSs",
  "key3": "4qoSQRkqC9LFeHzXkDSpVReB4PKifp9CmcNWPevvBN7GrNk3jABuDWyGFf9ck8ddWerDhq47z52j4RfupU3fyKmm",
  "key4": "44Xr9igWh9iN9b4qpdiq9xh8dAr8YPEn4NeqotLQt6F5VVrdTtYDexLjZk4a44Puyc1WrUqcgEmkuTpMQPmCBFg6",
  "key5": "53WREuJmLyuqM7y2AxhJNuWsKT329e9P6zW6N1QRwVt5Qnyu645bX3nX2pzib16KJ3vfDHDHSzKDb4EdKjo8JTuj",
  "key6": "28fdcXA4mkVwgNXRh4jzxSJDC5hcoXsJS4THP3geupTiaNHwqxS5eADsvvXtSt6Ag8jWyMuci823Jy4HvhUYgRZ2",
  "key7": "4jp8kwsYV6XCCdj2Fs5toQsv8EVLCL8s8nehdjTk29v4wvdE1LinGt6Eh84Fw7G6hoXmrrkjG4CxXJXz8i37S9qh",
  "key8": "3EjG9KWs6Jnv8s9iwk1bv9qJRTx4JCd71HyWrG3hMVeE3x1eubgVTUpYj8LS2y1biRJuF4Je3L6dqsewxE4pcjJo",
  "key9": "5ieoggr77BcGdUuQzRRw6UTo2vUBek2kYXP8a6KHckiKctCryS3KZYy1kqhEiirfdkQY69FAaejkzTekxPpGcSgo",
  "key10": "5XKAzDjMULtLWqUgcYn82uvgSELHmDVBMXEmkvLL3qynopRmhXCQkfYMbPGqxeVPk8nA2CA2cCW5NY1BnagTnCMT",
  "key11": "2krBXqr8CL2zjKAyie83wGvLpkUY3WcFy3dgh6eKF8ZStyzRPy6bFDesHtjUYE8rVt5t1qB1F8AVzmpVhTLzoCMr",
  "key12": "55DHHWL3VRSm5WLuRfLDqd2cp2XPXuZAakf5CMij46Bm94sBM1tJkjktj7dQCQSMzm8x6H4xdGxUJnrhLGySTbBf",
  "key13": "3kmdK9eaGQ8MMQEZxiq7iURcYGDU6tbvqrbZPBN6VuXpPtMkHwnbbF61DssKJ8snfj1pHKPutWutazduGXzFzjP5",
  "key14": "37824ru6nWM7zs7PEPdhC6kwR7sQHv8diNaCg8D7yE7nZTP87EbmAhPwyTA7JjMvN67tzD11h4EPkiLwHdDReWJa",
  "key15": "xqvnVg4xVqy2hPNY33dgfyEjjPiPpLnkx1DJBzqw8N93U44vRYYK7c5fLwKYrCJ9cpeipGioZHGpvMPC39pSmos",
  "key16": "2wGvSbNME7JWc7y9AJprf3vL3VSueWvaYcM6ntKqQWCRgxyoMk8wsxkHyx5eo4PYXTJvNyBb3ukiab5UvyA1yHjZ",
  "key17": "2WsH2W9Xv9QzoEF81ov5ZbCTQAgMh4JiB3n21Udxzn5dg57adaY6ZmdVCy3cxb1C3BdxDdRD1K2e6Z1Tkw5diaE5",
  "key18": "52D8k9BsrUbNGMCvqNjLjo7si9mVibd3AYLpkGtJ1UQ1BnAZaTuSYge5GE9rnrjN3ABK9uuFRnzDjJqvktx71vQC",
  "key19": "4WyXddU4krsJ7VN3iDZL8a5RvV1291bjDdSxkXq7PgqjLbYYgo8NMTgufJUQJhDAsuqrPKiDEMt29XoK8ebCt6k5",
  "key20": "uuie2MKuxPfmSRDefXR51HdryagJadhJcmU6kjfjCpvFrqJYpT5eF3Nb9NpvhGNSZJPL5b3v1PZdnJ5zqBA6hmJ",
  "key21": "2LdkWwg4XAjY31jn2Xy7MTtbgQK7bQ9y25viqiVfWWQesLh3MPmrp8sueEsiPYMXg6tTQRXYNDCUM4U43bb1Znqj",
  "key22": "3aaX5crUVPrKYRJDZvqAgQDttAfFkeMRRG6Yt6nKhwEc9a3StqxFCKdZXCXosXXv1bR1x4L1UA433rbtLoQvS54j",
  "key23": "25uS98JPXuehBZh8CMFTMiNhYQvJxk1jV4QpdqexRu1YaWKLY88wWV35DSgi2GTZMZPHbh3eLNdBYQLjsRHvq9hY",
  "key24": "2CbszqRP9m7S928p4nFLev5QoNLTn8bSisrqxZyghSBiYm4qqP7tqmNFEtjNohaJSVgFWTRtUgGDtdnshWhkYSTp",
  "key25": "4uXboPxjJ7PVbGT5VPXAuGeSDwDkyUgCiyWXkey8G9raQieCCi8Jh8Yti1GVBVGXnkZVHDkEc8DnrqnzednpuwDR",
  "key26": "2ucToHykX9uaP4qDWRsmiRVSGpvCMXPpGJG8RznuHsfY4vQHiHq96fybJTDuT2a7AWuenwUCKMLc4jrAmwDwkzWk",
  "key27": "4fTSCgiD4baUzH9tj3ZdpymWsbTSVt31brEzg2YmbnoHSrpvbP1Y4URNxcc3QS8szq6MeZDfU5WFnwV9vJwzWQMZ",
  "key28": "5QiXyMUD3aguTf43CP9DBoSpy57J6NUSxWFguvoBbQKVrW4hdVS2WRZ2MHSQyh6SeUvg8wxmnqKh5KSophuJfcEB"
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
