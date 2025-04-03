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
    "2qrAo9YviihjNH6RGR4d1PZqesTry7yuzCXKYjD6rjGUBGTwYz1btmbNAtXkakE9hXSCyb6yGaKtiBwjLtaSXuwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPmAWkv42CVzfFwJNRWLVpMfhKZRfLSLzvoxxuq8gt9XxVDVKjKYGPQfX6DNwZPdb7dzqQvjTz3RDiacwnCvYcr",
  "key1": "G1deG8hYMdxUeq7mzv9moXaXm3dYFgj8EcSSaQkxGMjZ3mJ3JWAFKhvN9YLow2ihZpndC5L3qkqopeeFurdvkKD",
  "key2": "3kyHAPfXXBhRS6HJ36e1ryKjRP2T1kxbmeFVQgCHFTZ6Ga8kDHjWjGLQUnou6QhzYDj6779QB4eVshZSycAWJjbS",
  "key3": "383v4S5DtvWJGrQWC2j6NJU5B3jpf2nuN6a6gAusqf71CczThiG92Uvi6HAbbFRnPSXaJ5n6YgBfGkKDDf3ndKkK",
  "key4": "d597b9A4ZToqnUBPXSbuTeqqQqq5UaQZHWsoypMYFE3GfH5YUA5C2F3Zwc4XCowHahXmksk18YHHUwtvMpYFQJX",
  "key5": "4pzjA7QKN14fpQj2GzxB2XYFS2ifdX92FZGjaawg9YqekgirLUe2Fv65V1A9f4yJC8DL5fVYP7jcCpSzPggHjZEb",
  "key6": "5zQz6emdPZSkxVizLyAbhGtKseKAnxYKR45u5ePnEyYZe47W23XWXfQDUzFwxaaH5v1y5BT1UEngrWf2QQRHhbgN",
  "key7": "655TE5HoirGto142ssAJ8foL94YU1VGjAZgnJ4K8GVn2PaseAsfSp3LHH5TJt8nitSmnbXs8oWXL7PEqDdRVcYcW",
  "key8": "4K6fLAHVTDXAEbPMUjKs6gJz3YD29t2cFycfhRMVKfr47K4weveJ5rgAbcdstmgtwqWfZFyL6mkGwD15Acuzk1zg",
  "key9": "4VJDv5MowWJPbZY1cXEw2xgKKQDeo4rUcGurojZ27LMpUujWEBjGy5LNV6Rvru1DmjttwUGkggE2Fq1ndPmfACnp",
  "key10": "5AEFvj8fDNL6zvfSNspwvpD3EFBAsz6bUWWLWxRRANstVSkiLTDEXCuLqzQjxrFfRuJW8Mvob2eEEDmap319SrzH",
  "key11": "WP2KVpxhrPZNDt3mn9YdnTvBJHcGz2P2Rv22CBgfcvL3e3i2KgUctdSGSui2MscpguP3NuJ2e4UERP7faqzRikr",
  "key12": "3sxGrihFJpJdzQALDCDNKZUMh73Uizd381akNYgZmdESrdoeYXtzKMptNfA45bmLMbZV6pe7zGrA7YjFw9vtZXZ7",
  "key13": "4SVYC7JfkV7JPp7nm3icwcWYKwDjtptTTDXfKVDZ2eumLfRqWw28kgbxCk6LCNLbjVf7W3dxGypYGAgqHDABZnVV",
  "key14": "5MXz81xQyiGJd6YJoiUihWwu7Uwm3paqGa3pTXs6vQFSyB3JSgZDLvf6XC27y4vHBgwRGdkG6Ef1Ce2d3FGQqJ5y",
  "key15": "2SWfoYerAAVZC8wWjTSn3KxUSzQNQzKDd3tTJSwjvBJGZSgkaP5gwnzVBYCvddtipWSXxbE7YNQi6PRiaGnX18xV",
  "key16": "3rudr1jo1HUusNs7pSaBgNoTiDxtB6yvGEkBqptGvPgz87i1Z8ujyPcrNCnT62czNzhPw7oTa2FyVVHUSPsxyi6i",
  "key17": "5gCbH1G9nJoazRMa281DFCR2dCAMzdLMrPPZAZidGg4U8uaCwzpMukiu6rzmtQc7Q2pyoY6hANtk4ReNVC2CFGRo",
  "key18": "2RKvggoW7ff5afpniRJPCSqncGE32Jz54sSwp5RQssQE7P6tunt7yLY6gCik5a9FggK6DPgEzPtp6YtpxyTPLctt",
  "key19": "5kN7Xb5UBsm2XD7Tb4qsn5tpqYL19GXJQyKMn3wVgoRGQ4Sq1cvXTxn5cAqkVJVDTKdfBJ4Y56DQ4XywMyaYusfa",
  "key20": "Ly18SQrEozFzmk1TiskFtDmVzmPpbrFnAaxxnxWPeBpez9m1wqaPG8MufxgQaoNCsh1QTqorGjTD6NLksBebppC",
  "key21": "5xzy8NsCiECQFXs5gGHmxwbFuLrfGuqcJpUn6MuekMHBRVEaE7VNxWLDGX3CxtvDtkqLk42AgQibtJp5RzUFddFi",
  "key22": "22s5xg95GJXp51gpqJ7KvMnDwa8VRqFRGiAm7opAmJ5gyfcjbwA6acwPjC1uBBoQTJ9qrdLhYRrdzHsAkCvttez6",
  "key23": "3oHAVn6xbjzMDZ18Bj4EHLdpPnYCtbQzXDuuiKqnv2GqGajxcEnHS6jxVkuKnTEVAj2WGWDNeuxwp3PygTPfDq3T",
  "key24": "2DAS8vKc9gNQiuH5vmqziBDpZwRZeSVAZGn3xJfviXprRj2V7cATkXhr1xbS6gxySFHJUdBcq1zvq5rkSrv1FZuU",
  "key25": "57HdiWxbodYrrTN8oNLXZVb9bKSksDiVrMjPMVgUtefAzhLrcuXSryHpevp4TWtBTC2F56B78Eqw1DfJ7KvZFbsN",
  "key26": "5cwQEEp2uUM2e2y1vsUn5G7qFYeh1Ak4ktdQvUtGQGLAsMiULsaG7dXnJxQrPPLuWEqhqb9TrF2JmvUN5fwGaFK7",
  "key27": "3Y8eeRiVFLFbNJPQ7oiYheAozWjZbfAMGY8MCEuVmq8HfHYfWbhtAhiRh4mQ61StTGwyFdnQZ763gesHSjCzojuB",
  "key28": "4uDJZ7jrFGmWEsgnrWZtpswR4jaq73cniytAfGqbw7jXHSGR4U5tiXLjZ5NC6QXsBiEHKQyB82iPo1QMQhYstiZE",
  "key29": "3C1tXnaMCs7wLfDmTrt1QsK15dMh44qHK22ZK3aZVHCdX4Mddd1W1w3ZYqL4ieqfvv3qwgfXv7WKh6NrabB3saWZ",
  "key30": "3cxekuxryU9wRAVdPTFK51bYancXGvvQwWWPWNT3rGbTFBaaRMFSAoerXgDSdauxnWJCeaStRm9qBqdsLF1NGAAi",
  "key31": "2yzGJ1MyJbcLuYd3HUajAe4MmTrrgdXV82pcUWkufxCiohuvdmyHmdmTjm9puuthhAnhNjoMNK8Ma9TLiEW5aDJk",
  "key32": "2Qfb7mPrHtAMDkiHeS4hWYGy849aA3BW4xcaWGczfWFALADZngsd7UdkdVudgahAVf6dtVnYL9wGgHQsbARa1a64",
  "key33": "2Y4h8Cm41hUaktCWuFw9WyaAnouZozD3LTQDay23jNfxG2X7zEbQi25u1vUUcpkSRD8gTF5e31rSmGNVuHrqmyP3",
  "key34": "2YSmNCX5uJDgJRE8cfyU5ysQoNPAy1F1cu4QbjZpVYeStcs7RjfFAJ7TTMKxzzXbrU7fpVUDVyLnBhHYRmMv7u3",
  "key35": "5oyP4nzjxhMycX7ntJRnpcZystk7DrM8EsYsEhNGQNJTHLrXcDSuctKoCMGsBVKkY4JBzWV8mdX7w4t2m1pBTiKy",
  "key36": "5wD3gUjZNbe2CnkNqvmpkpxEvELDpxckGRzuXMQBz7w6xMQ5XnFnVyaxc9oo9hacHrmktyf5VjQLZVttqGprfsfJ",
  "key37": "2GC5icArA8AZEE4jRbZc82YbyytmkHRBWuxaAdvMPnYppBgeZfWNzBKAUSgrLuWKFhhDCJ7w4m9RPqvi3jrz2Bu2"
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
