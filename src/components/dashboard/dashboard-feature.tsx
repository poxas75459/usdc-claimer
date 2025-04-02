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
    "21GbA1phzemeGABkZGE2WKaDKd9Du4pkyeW6uAwsiVkqHcY7GWsKPEPJCDXhXiq1PAhBe5h9nfjSuV47Jb5huAAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xvGNs9PW6KrwC55Fw2PzeC6i8m3h8rBx6YPzfQXyX4bQijY3CiohAcrCZQ664aUxnUQptacZiXMuJKge7Q98s3m",
  "key1": "22zkD66XWeLw6NWXyThksC9bLPcyWYoAefe9QJh6P8C49ZA3MAafM282MhvFDujkiVhPffZ9Pn6x4DWTu22mB1sR",
  "key2": "2GV4LaeUi1xkbQPmLhyPhfKk6mZM14L9W75STrm6XN16t539LyiMn5wuJaf27TxDn7AJ8tmrK9MQe4J37WhUkVHc",
  "key3": "2w5W4FLhMbJz5ydozQot3sDo3MhfzFoUgjjLZrSLpi1cq13B36E84YEsPgaxBfcdrV166PwPq728bafr8fz1ispU",
  "key4": "WEwGzuiyea9gVTCGguvfgjxYN5tZPuCYz6kyLErny3jhiVYhpZmKS3NAWY4xipLmCb2BDR4MwwitmGJWcbBzQhi",
  "key5": "4A9UERxLyLHqniquDVZGaytepCQ4uRiN2usouZHR6FfwXWGURiWPi3xx5omRdHbvbACbcZQ16zViFV3mbonSGQ9n",
  "key6": "2KEdHoNtweVmPZqwvxLmiAQo9jTucjVo1ZExNaDtKiUpuQ79egCj2uWzv6TvNP5CPbCaLzcTFvBjax5b6cSLinh9",
  "key7": "5pcmi4dtjj8wkLqj96yKiEGQhNnYTDMzseh9Lsp8776J6jPe5ybL6LXiXRbqQscYUGLzBGbxUhg859X5m736YDfH",
  "key8": "5LCroDhzuP3PyzVYaRNGZfy5HYneRz1RCvTV3dkb35KqY1wt3DbwxsC8SnYpYnFt4BNnHExiqN2i5Mq9hsLndzq7",
  "key9": "38f1hgRiNNkfG85aoM1wq63M2koUCaEviqydBNFHXNDBoTFo2GFuQub9XyJTyqpu6fBANcdYaCYH43ZSrSoyivvj",
  "key10": "53y4DoFt6CLrohYhWEaV2q8LeiM4ueSxzxYytoDgi1rb96iSTZfViM83JBKsu3UNDSVC44skcT4ydzqTPgHY6rfA",
  "key11": "3rSSiVNKq3BWAhMovTEtYaBLcZyX4BBBxB7jZB5goxZD72PZwyqM5EA1aFSPwE5yNA5R5LW9wYUzRshWf8vsiAs1",
  "key12": "Du5r5t9XrEPCFrFXc62DKYo5R1YxM7s3GpNVLSVhwgD92wvF7C3UCjJ98d4yQQuiHbTENAGGSSDiW7gdGiFK6xr",
  "key13": "2KBz4qbPA4eSkumFKnyStoD2NUSDygrwsHrNtv3gCEFtXKsHYHSPgDbkcN19TSA6rDM4HueHq8RdcTzPCzPaXfuy",
  "key14": "hRZtwuT8AfeWuv5bQvK76jZphgSaJMYn6sNSeUHNxcZNsmuVfjx5D9dMLh659MG7b7eFHn1DjZGioBoPnYaXcZw",
  "key15": "4kvMtQc6oxYpxKyYfgamMjv2hqHgRsqXiEfPQMQW6vMyd384V9r6byKVDUaLVtieRDbom3sdA1p9XzvSEBNK65EW",
  "key16": "D6TnGKpi5UerERNnSyh95LKUoCoDsbnW7fvgQX2ZMdd4fmZ5dbSdXJ8kgvYp9jRubeuG773VEyw5DCNnU8zmV3Y",
  "key17": "2MxK7eMfkkuNfRRkgpxtJtHP5zwWNHd2gkbtcgDRq4WDFjDEC195qYMAU9HEGwmAYt72Rh5nMRUCWeRA7S3Z5FU",
  "key18": "5UKEa5ReY7z1kXbwau9RosWZFF2RXmQf3K568B8MLGHXWDeYgWmWsjMZ4Sjaf3ATDYCv9gmxMi4Autpjkku1798j",
  "key19": "4sGmiPMQNpjKBdHjp3Eet2yg9hS5QrCe3G2aBAPr6po2cuWTZ3zzNcNBDvVeH8g1CzLmdNzESd4m4mCjwrnfNjnF",
  "key20": "42RyKe2T6WsTGaLEfPzZAaiQgr7ta7C7wNynyGn5KYb7iwmWwscewPrnPrFDspv4xbreZPBEqx1ETZyPbmsAdRDb",
  "key21": "5LyYsGhWqyZiQrwFAQ2BCFFV49aY3cmbzdWTijpCAt2YptV433geg2F9QnneyvYqKY5gYNf5e3ZkAu4rd2q4oXsx",
  "key22": "2pVXwZFukRmpcuUBQg7j96NwL8RCReJokhiRYByGbTrpNfCdLNdhs8rogoeWbNV2PETWogtMzYF1SwEoPEzu2p8W",
  "key23": "4EnRJb6rkuqackEQnyvsMCfimZSP2KhtJdEq6pzHkNHhZkbpjYSPL9DLijFe9BLnLKYf3GGVSj7uHXQ6EhCZvXNF",
  "key24": "36wsgB8ugqwTpN3stLN6ixeUGWL1YvbA7x5UfMyBsopSzuWLxNdfNiEhxQX43K3JH6WRqF9JSn9yvGWUxequMeZT",
  "key25": "2kohKUsbomaP3aBjNjvNrNzBj6j98fAgeZyNhYzew8MsMrXA2A41YFr1wXFTb8pJ4Dk2f6XjCKyCiBbQmNRtuZKp",
  "key26": "5TizRZesrXQA6qq98E1h9ZHKe1AzLGteJoYEbYjxK4tubdhSWqf7eizbVqsQthsfgbRdfuPWd31Y9fX54BrGMfMW",
  "key27": "2kfsfGy12a7MDTA1jP7f2mRxVm7URSTuZ28tfYVrZXv8K5uZ1PqjshjCpHYguW7fRKDVcohUCVnGYiyAd1MWpfW5",
  "key28": "4a9cWVAoi7bjw1EcqQ6SjmZvrboK37Rbmvzwmrn8C9jzTBW4oZ5JjQzyRJZLNa6feRPsGtTXgBFyvEkv9zR8QtMx",
  "key29": "3anwR9Es3jM8o2oGsAcHmMxLvVGVnHcjwHsNni6pYyRZxwPttSEg9HP2j73Xoi8Hnpt6qKTKx32wxgRUzzrSJSYN",
  "key30": "54PSdXnhiMn3PC9AenfA39tPPhfvxsCicAFs7ugVqXBgrWgAwhgNnMfuYtiorN4kv3o3zjEXkji7kpeKeU3Pr9pz",
  "key31": "5jexyiGwnoQHgHkeDUSv2CTmFuAyj7g44z3PjvvukUdK7ZsH9kQRF7Jw37EHSpcWNP8pQZB8z7c15pk98rkfGh3w",
  "key32": "2CozZiTLNk7NW7cXxhQrwgHFnTL3YP3yFVPemZTzTBEQ85W4G31YkaCG2QvFcQAXKiXDDapbT1Ra6zsKyPdfZb4M",
  "key33": "5wappEHWGV7dv23q7kGXQdqxvjdPsqihTFAaxPonpebjzgKcxkWSwrMSTBtEQNsFoVtYjxfijYAd4QGenRX3rgZw",
  "key34": "5GaroipcebP2XchU6MggVTynqoM2h491U29pmVVAjYRNvXr5MsuKFG6ficyBMTYhZKuCzYNfCXbHaMQowCXoWoyG",
  "key35": "2WNKPDAXUYM2P26S9Md47XqwXyA7yfKHa6EYNSFdptKPxeqwfAaX2idddE19SdrPcUerMK94C2ikN1XdiXUFU4yx",
  "key36": "4e77EAa2PrRBES2cAFVnbVQc81KA2io9zdpxSKb3of6KwEdmvszsZ11Aje8RGrnng2iwMcBXzWY8LNFgzJj4NxZA"
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
