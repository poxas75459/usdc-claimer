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
    "3srCZEUhxm52addqzH9hm9qBpob9FYahPd1TGcM3nHzRg5zRiRk5WFVn7MMHTbmZH1wVV9K9qgNXtC2ehgJb8SxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHAZSTQUNE93BMEn5EwgxZDKBvxci6JivLKLkPfJKuSgkdNiF5dUg1YZckRhde2v5AS9mf9ifxt9V7LbyMTcNov",
  "key1": "3fx6jB2Q16CkAvcJahtCHBppkErXnRJshfAwqGrguesQjjHBHmV6Ki74g15YCUn7K6UkephLCxwJsjGaNTg3R5KP",
  "key2": "gykP89jR4VTS7a8db27ayA2xVXo7fFDB1A6Rdv43pZptsraRQ5wx8esg7pRu1SCQ9RzW4kqs6fjyQSc3s5Qv6di",
  "key3": "3sZxyspHfo1yyHyhFqvCrV4c2VCz8PPYeui7G2yfZLMxsBevaw2gf96A6WcFMd1qH8Ae7NZR9597tACtuTJkHvPA",
  "key4": "4aqEKd6PzJgxyngMezS1f5jTWEDRcQjsTqQyj1zoPgfVFUm7M6kTbXHeCuy2oeW4QJGG3z6T69q1QeKXWZVopzXf",
  "key5": "4qMQKtVgjCMxRL9CRJMm9xQKPCCnCE41NMQm7apVK3EkcWZZLi5FNj4iSwdGMNCtDD5Ui6erW32JTY9dx7mXAZZQ",
  "key6": "2xy8ib8ywmoXTfXGVDE9dsGiFywzPCL4AwsvJ3fms5XLCmV2ngPdAcc7W8sTUdCqXfJqKicSKycoKwHG4kJrc9hP",
  "key7": "4hS1XdAhZ39qArXRVme1aQxmAq6udXQ51uMex5Ypnx3ysETLGrx77LEEeGnGQGt6fVcNqpEuNA4dpdLYC4pbXiFE",
  "key8": "3mgKpMwc4G78X3E1tr8J5XYWiaf5Aw9oNSvZBXstrfqo5pgfY6T9N9dAoDcELywL6eNBjmgbwBwK4erYcfbU8ubR",
  "key9": "5obT968aueSp4U9s1ELtJme3UfPLSf1iezWooiugsKHHa3u93KggyZej91vm3rqjr3QPhFnAtd8ASQ5cuq2w6r9W",
  "key10": "5jZ3SYP1vSJ5SAsiXw1tMoU9Bo9XECezpjEaXpz9SmdDan2fm42fvSD2EGiwA9NEy1EN8GLhduXWAEHtG1HBryLd",
  "key11": "5aAgRNZ2vv5dRVunpdnN7iGRTMAnUkmkdxrqmmh75ax1frHvFUGf5tdgDmAyxckvra9j3gFw6kDk19J4eXupiAP9",
  "key12": "3oUoNfxPTgfYwpgP2VWCzUpEBB7dBhy8zgscC9Jwo3M4FUj5bGTEN6VXVFAyf91jEmVGnsFZiyFCqhpMA18NiJma",
  "key13": "45eBaJeKKc9XP1RpeMh4Xq5T51GeBcbYaCUyj9M4f4EUgmU3rb4yCoh5Wa8YwXuJosQp2wioPrKmXSMXcqJ7honZ",
  "key14": "5FPyJbZMvbe3ECEjrD5G7rkYYnRZG4GjzWJoNEfwFhGMqMEPMHWeLnzdBASTbC8ryAfQESnMpAtVBCNuA8L333z1",
  "key15": "41ny5e5mTwQEsv9TvPiYKFP53piG8W9Ln4yCqrBe7Jy42VrXVC3cw2tvMJX7JYnphUMXEvfTaBRE4mVxMqcaX2Vq",
  "key16": "7Y5DWiEwNYpEBzq8jUHWi2PqeY9BAMp35eEiQL8ksVAK964FwdKa3bh4Aemt4hLLP5k6gonEtH82C1hCF1oX37a",
  "key17": "35beQ6QAPa81mjZ2mdCHFce3G1oUSx4YSrsVDmwvT2jHC63Vf1wwy7RXEgHgjgA68XorhchwXzaB72SPp4nvGBwo",
  "key18": "2b1XjSTTrgLCHLfPSn8o2g71eT4YrGogUAUfpv9ssVY4hMyvZTAPvttijFcfC7Xa7kUutAhP3DRQ9rviq6phSueq",
  "key19": "24rBvD5TJJvLFuTzt58vYzR3xz2jM7Yw655dFNbkS43eBuWaYd2xXwbu3wawQg66YxQp6qyTWhuECJbWLWgnbGtE",
  "key20": "4EQb3qGZDpsL9bn5zHV46qvypdESxfgU3eDRvvW9HSLFCdqeUJEsNKPByQwWjfwnFaqpjDWNPWKiSRksN7LPDFue",
  "key21": "HEgkXjdgunarrSV9GYSNkqZ7Xbz2mHy9aK2dEwM9ooQXvdjDRgGRgTNZvn25SdwEctBJkZr1Htn1zVSNXQWCgp8",
  "key22": "4Xiip9R3GtNbxjFriMKjeLucNPNqdB69Ysem8hexPEMaEHkK8tRs5zsxZfmpfDCQvxfUBDmu9ELDSqhTGhmMxmTn",
  "key23": "RDiskW6inj1p24RNjeShA3zd4B55B9EfuiCojDJ64tEWEUfL24nwP2ynVooUh2QMyFUtCa35kEAJV2Hr2EEp8hP",
  "key24": "4sg8TjYCKNuNapWnRiUYDgnPFXhjxcvyD2wuTJdgR7fAcWYnSDwWckbFPHWQaH7x1HotGjEEyAwJvZTZcukoGE5N",
  "key25": "2WHPKnFkmwDVYRKXKdKgE4JrBwhfcs9kYWx9LppyjHEQSADRhMC3A9aDszebf1vPbgxm2wrjX7mSABoeahx1LFaB",
  "key26": "YwyfLHHMkNVPrbZAA1C6mxgs8VLCaRgV1uRsPgfEW3TKGSNHhS7CgKxHFQqUgZr1Vp7D45nLgkpukkpnV31EShq",
  "key27": "5n6vVn2y6HvUqxYmGThvE9yyzBMHQpgdCvifqW5PhNoRgvqrhkBndcL11fKTZB92dXuy4TSUVzGQhcg4TCTpNLzo",
  "key28": "3Ri8orLnRr6jJG9GgB28Zgvvn5rSGFFshUL3BsoA7BnJt68YthsmgfAt9umpL4EELiKv5EsQTn7uYvBkfEBGHi3c",
  "key29": "4vcZpdgV3JBhMy163kmsLQZHz4bqLGqEhYBdZdB4FtyFuFUwAqavjLGPViMYhVFzUXZNBy4juptUjA1WZ3fe4wfQ",
  "key30": "i6ekQYXmNg7TDRq8ALKVo4mLAzZz1jw4tD3J7qHGe5PyXLdwjPbzdTwwe9LDr6G72ZkyGZJ7R2Ex96wgzi3xMfC",
  "key31": "2rLwMzVzmRYbR2Ug5KY2Y3xKw2VJjitcZRzdbq1DvHaZZnjd8D1hpqKTso2J9NAi3UUyanQRXDpFX63dRdp6wZmj",
  "key32": "26qpYv9yqXMDRHaWGKjLvEeo7fUuT5GvZkPiBvNMgbzfvFHcjUsYFjFRwkwyR4ppQdX4rNp331BGm4XpB7nxMfQo",
  "key33": "4rC7pvDDyeqvwMQfYtsajuYRVwvafntfL6r8b2w8yQD8pWZW86e6xTUP76FyDmgXCew21w8vHDyw4YaRaYpAQ1Sz"
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
