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
    "3Qu7s9CMikQBe73Y2h5mjnCnuHAQBbsnydHexScK5jbrvkrum1ZgfGU3DuPNy8AWd7q5Yfa7H4hjzPtynPdDc49U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1nWUaAgg7mwMotv1cCnGNTpMfVvEi2mKLHAQAdkG2q8TqwiXUDvQcygF5yvKkVa6oWFxDL4V3hj8qL66wxkF3F",
  "key1": "2C6YgWAmqW2ZtwJD1DLEkhKJgdvyi69CsGKdQ2cT5t3SFe6wPZZd4fKpf9B58gggBjRodm92uran1PkjAps37Jzf",
  "key2": "4EcHxjYjPrMU8tf3FB9D3JwXTzqVddxbq37qbhkHJMZu6b6AJAGbd8PYea81U2m28YG3TSXhYD9UBrVLagY26g17",
  "key3": "3ZJUjheBRVv1XxSTN62vYeGuJaVSDwsnNWU3qgXgxJ2AnhzCY5jrvPt8HsRtpTWZpNTbAZCrdXVop6CeKHC8kimb",
  "key4": "2gb7v9W7bxM7GqHxpWBgYznKkiAEjrFbD4eAtJVET9AHroQrWPRXayrZvfBYjoGCpoRtaL3oRAWm9cAsjWEXEBfQ",
  "key5": "5p1oWdWYJou6ZZF1wdpGTVr1coZSapceANNSWtBcm3R36LqvZgXrvUUxJ2ws7LkKQFwvHARY1YLWCH5xZ2x8oVnY",
  "key6": "53s2ajXMivc9AV8ZBiFdE6ofdh7C6N16Dutw1T9b1qePbubHLPiyyTTs2DZwytP7iH4MLT6QJdMPw5aVcLjsv2uY",
  "key7": "fnDpRS8YHukWJo169aUnGyx7AkSS2M8S8ePbooBCdkhgMJbvQzDTYP6ckwTQ2usDRWbU3ttKn5wHU8dRdFDeE86",
  "key8": "1AZiRsYQVh8QAgPjd3UjffJAijBdALBbGx83HA6EhctuhnBC1CY6AXpBwkBNmye5w3iTyghbomnpcM5qnmuLGrm",
  "key9": "43nD7qmFmfFu9GsR3C5KKLYd1Tdbkh9Nyb3aecTkfYutbuVtpUw6pMk1cQ15M8X1MVMiiU6F5bji9pKxoqFrxrn2",
  "key10": "5t3mzLdB4Ad5zXZviEKUmzXdkJLfnXktumouwZkiBjLRk2T44VT5jhVAjCEMbhLu6ecQgZrggeKZp8kg9NrHigBJ",
  "key11": "1fuwjTPX2S5GXmQLmJj3W8V4T6Y3pLYgyYtWw27vsr25tYqEZjTp5C7DyLy1ZwD7KnkCboKCJv5LkxXyM8dYHZ",
  "key12": "2iFhPU6qThN1r2xHkCjxij3sHtWJeoZ8JwRkpFTHGpbi7yu9KZ9ZmjHPtTxQzpdQggyEUTwoVhEsNsi7egKddGSc",
  "key13": "61LTDP4yogbs7yB1nHmEhAGmtvqqUvQ49FBxtqtd2dCpNP5TQhjceACS9vYEAmxEcyMh7LNNdJ45S1fjda5sXSyN",
  "key14": "5XetkRLr4K1FFHjcBVmt5BcgwoXCVKUbboQNVYfSK5mrnDhNqBfv2Db5Jms2uQ3LHbwhjAvhZUjKtqNSYLgcKkgJ",
  "key15": "4Tt8DXBzY1VqpD7PhEyTN1AyKVWtGEKMbCELHqJGFaEtkvcMzKHBWjUZhV8rvTdKxF5Z8nqXdhkTmWwQfHjhML55",
  "key16": "3wizctCrjozFsBJ7WjQMkuoEJjPLXWyfawnMk9aDfyThnVShW24mA8jcCQEvZwAgDUR2dt7rDNt9s7iUq1AkDD1e",
  "key17": "56Kz3nRBYAyRFgbaPoLFw9FqHZMANa8WJw89K5KK8yNQycMyQNFsKRiAYd5JHXatT3rijPV7BpkbeXHP5QFwCnPj",
  "key18": "2T962GfCv25Nk911qNgRHK29h9cHoupcGGhVD9m3DuBpxKf5VMA67Tnb6UY6nuZCPncyfhbDr293MvbyyXghHY5R",
  "key19": "mJ1ZaTpHFwAPEzvL12ipPbTf5Ph5bKsaFGnqRpmHbbXTThpE6sDRu4tJeAN6yH1ZaNxCbSp937VwjmXDC3rSX13",
  "key20": "59troPCLyoi11GJPLaXe1tNgCVdDHWvqY2L729oM5JZzRdWJo7Q6nDidHVuR3Ze8cZ1Kg4SVENfCXDF8TuTtTVc4",
  "key21": "5bbsH5Lkv2wA191KaqkJdMgsrvqL2CnMHB5vX8xpFpEoW2DsJdCnuunCfs3p1MaUyq2QkLTMvb7kUtyHYgbNFYCM",
  "key22": "44cxaRGWkP4KkGFtRnamuEkWZYuEDuBnyqTeVqnhhNmtg5A42iqUXvURrSZTYK94a2crqJxiGcFwcMUFGBnpnf16",
  "key23": "92AQAM3FZbnu5NK8vxXDHv3Z2jAMVnB4NaXZPH9Er3r6rrXrcXkJJuNfyXb2j9ihZ6wsqD4pBtvfZdSxJMMuQFj",
  "key24": "4X4K47nU4mnXyYMrMBDMstinW7Z8AMox8hHKm2oBqxAd5QXgkz6vBP6uxncbA6HJbejJZpiV1ACC49qgvFHVi5CT",
  "key25": "5p3xxUMEci3joJ1sXvLmMpayk9G2ztqUCa1eii4g9wzU6B61ifMDxYKULK1Sri21CqdjpXmQguxn1vA11iHsojgU",
  "key26": "5M1Uxxik3DvUmSFiMdjbfzv5PpNpfd6kwv6cd2nzSJ7oq33mU7h5MfNWqgdnbALJKS6N4BZRBM9uoCbJRJfA2XcS",
  "key27": "524PuifRKh7gRw8BzKrgUgvHKt4fARaGWo1noF9t9nEXPsYfct9L9Cqgv9hDCJpFQGDHSZ8nsKzAeiJm6jEp6KHw",
  "key28": "21nWk783HQQJD8n5W116Z7iQinhoYu9tnT5gP44gtupxtDtU1w274W2EynzyfE6XWE6WP2vcRKEoHwZx3pxpZc4b",
  "key29": "3AT3rroff9C6VKyidUuzvAidq3HCBQJVXkWGL4Nz5emt7Pg88iH97y24tudzuPd4Q1pzEoDuCbpXX9ytUmcguZi4",
  "key30": "33JBhydBtaABWKHADqabmh9fktnmNdaRanKU4YbE3TKdwWoWBxqdU6nykLBqG62A7Rarr9GsafQ1ijmGumuVpunS",
  "key31": "ZFaxeXveD1jR9C3ZtGWktLKzdc5e6gDkU3TYoeMEfHZ8ynxr9T1gCyu6jL6kngLmc3GdPj9rQrqfFVR8sTVWnXq",
  "key32": "2u56RDperv68qJjiyTdaBm6ceY54BFDJsc6nQCNEVz7FNxyGg4mtaGYf2YwfXaMHiP1q5C1rqZRVFaYpH2RxAbNR",
  "key33": "4RLsWdc4KS9x7xmCDHV949kJnCE1pMzGSmEeZRkhfAbGM3uPC13baz61fdkmAPgnoTivaqmrGbiZEFgB3GQ7HNwW",
  "key34": "3ciCeb3FK4SFeCCL76P44e5dDdEvu7RYQFjkH9fFQvQiy9Dx6pgpc5QciArv72zuit4tw9RY1DGk5dGi4Pfrr4Az"
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
