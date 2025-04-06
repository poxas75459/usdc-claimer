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
    "3apx9sfGomDMq5oN8LafY6VRmSiSH9L2GN6z4BRN3pcoNjJ5DBRRmoCjNyFEAMnqCdT7ccoMVswN7k4eViMVEAbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbXtAP9BbXji8MnFydteiU4J8MfjKoRKwdhTyL7gw3sd5EdZiTndY1G69QByWyCHRrhdRsXo1AitpPnBC6gmdX3",
  "key1": "2vyttj8LncHgJ4D28heV61fgBo87FcR8r8z9zpyKKYYnsxai3Pr5Nc4huL4yr1QRN9fsvabdBDNJfesEFFTe68wj",
  "key2": "5mxijXgtRPm6pPTk2qoSXT2qS6Lhg6VEaD5jmi8bWzhRLMotLaptULX3DrbqxQXHxmRgeB4KpMzdpL7HbixfoTE6",
  "key3": "4NmyiZn1wKDCaJXUL4JNWNLckTn9frMBuNiDL5eDLiQK6rjcZEJY175dcjaDbZDyVearQFQ5vT8ttgfKbXWdBeJE",
  "key4": "4971mviNzE8TQUm4dC4qLUgr5UTKdTNVKULx9iPpCQoKjj9SuQvAoFTKKiXLqLG7yGDZM4tSfoxQTjQDDieXoEru",
  "key5": "46a3ke3FhDFKtAfUBEBjFvYzGaHqbYEKZexJf1BqYeyP2scCjPxggf8Aa3ZuSAHnaC91eacYtDSQYHcncHw9uA6G",
  "key6": "3L2rpmQnyopjsU7BSRf4853q3Xos42zeCdDDM5ugvJYY7mnwGGLye1XdBqVbk8UMzcgA9pNzrrfZ7mYkjrkj8PAZ",
  "key7": "5sudkGuBLdmMWPUPPy8dx6juqmHkbvs1CSSwTT9MtWe1QXS6YpmZBhrNJDtPCQCPms7amGcAKZvnwyj7WQXG6y5G",
  "key8": "rdJmxWryhPme2gG5szC6YkM9iniAav9isRVNEUH4LG3r86aiHz3P56qGpntpnPV2bfw67eRK496FWpU6QkQG8t3",
  "key9": "B1VsxfVfpJMj1uCi4aUej9ELjcs2KXAkpAETvUoYTQRDwWGfzYZciDK3afzyNa9S3SGt2shKe2nPaXRyrQT25VC",
  "key10": "2GWwjQuAoT6Rgx9QQ72hDiXEgwVouBdSK1q51AsZ676eqa9EyTAxkRjWuWE3wsQTYbzUpx3NEcEYcM19x8k4oaWk",
  "key11": "5fRFS7mULrMHZEtmzHTbHu7eXusJSJcQMqNF2cZykJevN6nSzgH8uUN2MAvUhqHTYDCtUtQFbd8P2cuHzcGXazMe",
  "key12": "4Db7iywTKsi2ehNcAgZuAgFCSdQjULqcMs5yfpCvCfaCrJFzVYT8iiwt52urZCNc6eEeYEvitmYBZ4FNdyvYHQj8",
  "key13": "5X95vLf84kx9YxSrGNcXpHonugUsDV3ymTBQNKQGSegVta8Fgkyi1MX44mbAvvScUSGpo3XtE7Mkt5oBXaCXayCa",
  "key14": "4W9YSLCPNGmFmpLhRr8Z7GHNRPJBms8C3dFTDzSgU6UgMQoy6EaMWomM3q43RGwX5aT5aD7DRpJhyh5bcVfWQPTz",
  "key15": "5nVEs3ZGtvtQappGUH3XqwAHYtmxfLEG4rtRySiGapdAeDd16mg1iDiUvHRR2ZsYy38zmQhhRzmXG1UgcPBHaMN1",
  "key16": "65qYqvfbPujFhWWRK9wyznyrb3uZcwrndD6gzywFfyxBGFE62eYvLjLQu84R7E158LrCv9hFQhVjTMfzxFPjRV4w",
  "key17": "4jpcb9oF1qmkUAj7DYqevFhGNjPA16KSYK4hkd19r72GVsr46FEYeZBnU6szeDGeq1PcPdYpNvp33t3Hg747faYH",
  "key18": "eQ8SGtUV5Uk9Hkk97iJhKfu3LfXWC6M5y4CjdhTtEzk3bJkxKSh69YbrQ6grRoZZxSzK2Qa4cL6TUxWXEu1w3w7",
  "key19": "2SPtrNch9ReSB2Y5B96cvcKK6yrKpZrjusp8qy1razR2hEQ7CVqtgia6CdXrhgQtn2aH5GcyuUc7zDiG7pvYstDv",
  "key20": "2ZXQ2GYNj9a2eXwQGFYSJ7QgXVVeMKtZKR1emfwmNxCQaK1SmQTQDGzbBABR3d4kjksQ6Lxiz9vDWy4eM6pKWAVY",
  "key21": "4Y6GVnxThawBSGHbAG7r3uks6FTGJimGpSaDmmXqn4mCyh2KmJ6GJYosbY85NAESjGfyQhBzQ5DQLbL9pe5sEatZ",
  "key22": "5wEPG6uaftqQ7wXWP27KGjp4rSVvT3JQ1smRNWHT9qqeVq2fwpei9AmE8F3jXDGQ2r7NmQB3vEwhY68fKG5DFpQL",
  "key23": "4TPofGqdgBK8DdvtJAD7d7NXdXCKwAQPzWxxNXMTvLGWsnh4kC3gdQtt8R2YExYJPBwYsqetSGhDRiQKfAisqMcx",
  "key24": "4mxaDnw9aCR8aa4hFwuDMBpjPzedpGkRrLSvC7DQyuerG5GBCL6yQ3n2R6LMxwPdeLfYAz62J7htFMcAsXZ5Nagq",
  "key25": "3dqYAHRriZAphNFPath8votFGcXppD2WjEKQucyt7fTZonikByRUTURvPUwjfiQyX4vaHjkJbrncK5WzEWAFYC6t",
  "key26": "4xKjnbYgbJJyDcPg3XdWAxGAZqoC6v3tBSNqY8o8FoWB7HrFf2FPJXr391AUoqqjUa4YSJJnWSH9HQUujKkzwqNm",
  "key27": "4kPGHNuEM96HATEjBABNUzMah2Rqv4JYCHrT25pHJMbZTQKbwyGjA1wjhy479nUFv1JD6eaEwZYzN1E2SXrX3dUo",
  "key28": "56wv6SLhjDFSmVLfbonCGWPt9t5VaB4zmrhZhN7nwYagMsqc2HY3RnxRnvCEwuRJpwu8ZNwoHfpe3jrMyhDz84Uw",
  "key29": "onF1XGv6qK8U4PcaXbQ2D2HSRgSD1qsQT45xSEBvLkyvqUvk5XYbh4hdckpkHTYBuuRRArVDzRRAzwSNEYis6sh",
  "key30": "4zfbBUyLmjB4qKwUY6KX7L4SwpyFss27BgkGJAErp3t7wYVz5bHwDTDotLjNj9SABm3zjYEtCNfUmzXm9C9z65Df",
  "key31": "4cwmmyF49QsNvu4DL5xRNVL3mYrJgfQZz7BPPYF29CjYTqabZmhSSYp1T5DvthXNQ65xq9z9dnsowh1KHrgjoMHs",
  "key32": "2nzQzDa2AL29u5hrRGvzGFnR1iTcdMn9EejVedmYoeB1XiN6PNwXdZYer3ijt393JFor8NEkz33ecUUzLteERsu8",
  "key33": "4APDebRpLKLu6ScqGoymV5y79ZgRb624LCwEdAJvrnrgDgHhgVx7LkxhzuxQ7VjdzJfZev8KgQ5QLwLREh7cqLa",
  "key34": "5CRqQczYN3bbSEXD25mt2zK2J8sVWfNktuSUdvRnZR3N4HFga7trYix2iBmXzDtkotmH7nErVFJZhySoYFzamr8M",
  "key35": "61dvcTBojzjB5JwvcU9SFTg7uHMidW3BXJUgkHGcHg9v5euwv4pww4AkyTLyae2YGmSSX2M4rpptSRXSdQxZn4XJ",
  "key36": "3eDFLSgvNCoNqpSepzkJr5tt5Zh6wqg26B9R4swpE1V6KuWYgdwBLqsgJy9TH1NiNDgVbGJkTjudqpbFxso9SU7X",
  "key37": "4tWvKpnbUTj1nZbRLTnWKhrEskcmrpzDDVe4eWq64fZDvqWB42QasZxAkDdP9YjAdRMwxocX59Yiuo5j2T6tJbCt",
  "key38": "4j2hqTVktn6WzLBox68fkuuUUVhtQTExS3aiUyP1FtMnA3bJM2zWFqg8SjcKpeMw8UdLSqxc4L63NuUmfch7KGCQ",
  "key39": "63zikQmk9Bsby1oeP5maXsb5H3C5h5vPoYWybbeXjio1zdKB2gBJe9HwF2S9V5VzUu3QJpDrip1Ay33ykcLiTaGV",
  "key40": "4Vj1EGjUJmRxvQGczLAP7RsA8oEMjPQvhm7GP9GiAdsPfKxNAWJA8H7bMcgwHahkrwmr1iZEA4PPPCXmJ2js8YV1",
  "key41": "6UHx6kYm9jpdTyyyW1ZH7Ng7N5EZQyVQobpvs7GzU7Ppp28ffMYkdUgquPasRHtJdwEt3rN7y8iGKomyw7h4CXU",
  "key42": "5swifTDDWgHLtjiPmiJnfSDTi2rut37Y9FdbSHsBiu8UXoJDUbwpWVb7RRRHLonGYxY91n1Y9BByGRb9sdBmQeTj"
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
