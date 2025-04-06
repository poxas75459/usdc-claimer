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
    "4sVBtMPU9nLrspM2P5suS3eM82ggSoaUhPWE943BwtE8adSynBaPhG172aFCDvkzsZpXKtVx45ABiV3kLYFWBXZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fJLqXzky7mYoiu4oPijAgRVS6rnstwLTXcEgb1hmFMmXAcdFoFZ8Hfa1pendPkH47zv11d71KY5PtNS5eBfCc7",
  "key1": "24cx8ru82v5kEXCWCA7XRYMioMM81UpBdWske6uoEhiKT81nJ5VEseb7w9ScCoQZF3yL872BzUmDjCyDzWcBZ147",
  "key2": "gqNmY93AP6CbeJYDojx4Tx3qeXSVStvGtzxEkNXXykq7EHNfehhQahF5SFR1zefgyD9DWNRrBFuERN5ik82FBe1",
  "key3": "3D3STDPNDLf3MKLPk5GYQqJDnoqRQ4cbLphD4EN2R4ywYakhecg7x5LRLXnqTfY7uh5QGbEgKgGv8ZAixRAq1UW3",
  "key4": "GbozQMihZM6pcYzqrFpbjn9Py7Z7ukSUb3NMKuzaMBx9BAxsegaDZ9s52Mvafc1phpmhUmCi6ECxW6ifQYqeDbH",
  "key5": "57SXuSmWNtRJQH9LYK9BZ71o271TRANRdhijX5Xm21Z62gbTKJQWvXco1dxJmMCdWgMSiS7vxEG5FWSDTw424Jgn",
  "key6": "f3kqMq1uDQuXHQQeGGsBoc5SjF5xAbCTjGrp45xQLKeq6p7UeDaJWhfht7DFtFos3SNiYzY7tYG8h9MWN3FoEpA",
  "key7": "2tvs2p36HeGYCpJ9w9gX5VS2sevN1u5F3kd8mYUESaEgt1yq4q35zHAb1xu9mTskgxVQCtU82aPMsEravTHFjWqk",
  "key8": "5hrfPrDK5WyXqeuRNiZfjViJ4SrayJap3tB3otFeHgBnFobDb1ZZxed95hAimU9cHbfArYUgW9c8tqDEd3CZ2aYQ",
  "key9": "Nvr8EaPAhoyppnHDprmaWJaH1EvWCwaUWxxpGB2s3gugDEyx2rwuuf72WKJ2H8tNm9wTh3qGrLNdKTa7hcGxsPM",
  "key10": "5Tu6pdBaPPNKTnkhrr1Sv6djX9J2SoW7wAvq2LNXk16fFTEDAsiSv8GwZP6CCJHiYWnSoSpujy55XVuBLCa8VxTX",
  "key11": "665eBx8xNiDrxjyUipAQ66XajocN3LphbmbvfqqPjYqdTmHzN6Gn8o8cGupMKPKRDDicJ1e24asjm5VcnbUTWTHP",
  "key12": "4yocLy1AfUu8qCAev6Qt79Mgaxf9UEeBZsDnJ5g1p85ruyCpMPsELbLKEBf56CejHcLmJ5ngcmCv2CD73jXZKxim",
  "key13": "5Fyi6WPaRiXePhF4mMNzLhsg74PT3faKHJt4RcK5gt9o6uvjFYTxu6mhkHn1KuR6QHaM7pHg8VorESVp7UCpW1NB",
  "key14": "iu51goHSmdYWzfeoPo9igYs8paV9WVxRxGmsdmAKygmX9ieKA4kSPinyw1eSKZBeDgj82RjdBwMa8Rs4rQXCH9F",
  "key15": "5GetLjfN5akvBcsAr7eGXoomBZ7yJTwAyniGsLscyENNh8YXcXUJhud22qivQrhSDwB6Nk29ukehn5qKf46XXkVn",
  "key16": "4ztyJQWW98eUi6sxwvk2UhLZ3N3hrd3hP57CASuEgc75d96s8HTdwY2c722S5ZniDxyosrgYgdJzL19jztKgREbX",
  "key17": "3EsrSzCLW265tLoNnjNyA19hViVihgU61EdYJS9FyiKb2cc2hw1FfYjvBoLxmzUedQM8TqLZTBGNaMMgfSDJiXJh",
  "key18": "2mKBr5xAWH7kyqaZtZ1TBsPRsma1UQAg6AUGfyz7g6kG1ZSQrxNNPf6cUKCWKGLTo4JmKxYFYUrGMejqaPxTCuaX",
  "key19": "yg6daZbZEPdupXg6SRDMmWCVyu2XTuSSP6cquQdWSFPxvZBVXjEedghy5ZzATgGgoXbkaZ2idwm4t2VHJN7pr3H",
  "key20": "A9WSZbpS3dusghjFfcLp6sRe5NvgmVcJbdY2RiFppnpjr3p5nYAwqRoPSGE5avz8XwVUYq2XhBzStXLT396n4hT",
  "key21": "3u74jL8PkqC3hsTZ8rezSr5DSyys5rapkABYtB7vDvSdHG71TzixnaCpbZYJuo6HoyKyYGHAZpXRVXp1gWDGuihg",
  "key22": "5ajQXi1r7mZ8NRTa47Abg3g4p3ctPWAtVthBhsUGU6HERhgoERJ9AZApoXq5XBKvUgDigtkp1gFWA6hhcPj7tj3z",
  "key23": "3UVfhADLBCpthQZSeGwHFjYpLWLiykovjqp6BYqxbwPY3456i6yFmCwc694dvC5HZVjt2nEBXBVkYZbYS87tQ5xS",
  "key24": "56M3URLwUpg9rJejKBT5hgxaoTKa2CKdLr9GxGH3HmyXQmfjDJ71uZorvQFg9BkD4yn9aLFCtRZo2fH3eYNSF3RA",
  "key25": "3fTQrXsVUX9PZwSsaA1RGJuTsqHXUiVvVZFjyKGg4kB7oZpbiwjTjaUwNQ17LWPut5GsCoL1fj7vTnpDfYt2tTCh",
  "key26": "334zHNCdEtRADeTpJY8RbbqS1J73JssRs3AqBM4jFhhFKJce1hUqzH8zJLUXRp4VweGqKAFaDcUZo2GjFWn2RtEe",
  "key27": "gd4EtsLuXNApRBv8eB5VXhoLCPhzMzrnDyVuGKwHk7BFnGYJdaTMDjTqL18zHC46CPSTdfg7Xu5L7DcRsxzvg2q",
  "key28": "44RBAq8cKCmXkwwEn6Kkaj17TC2iAvQNmBLd5vFRa4DaxQo8TVcRv5hE9sjRGWdyfQGnm2DJ3fp2qmeiGgwYZEZg",
  "key29": "8HQMEHey5fqxp1CEndszTB7zShMGJc5zkGSRZsakNCiHJHTDXAiytN8eCNoBkYWbTjqXZ8GVDGdx3b22ywMtTCj",
  "key30": "434z61jz4x2vUMPAZx2qEdw9nnKyt1Sc6ZwBjRbAxtZWpPjWs1Z1xckfa1Qo1kvXHPACuR1NnjSEVzmqkk72UaEf",
  "key31": "4uHmgx4C9iR3oxUbtrjYnF3KZRFmq4gokDWn4YfsxqwWTQJpe5AKuoK5QyQHeYcoN31vM7zGwbA6cH34mtS4yBKw",
  "key32": "4KNMf1io3J1XcLEy9MX1AFfATRcHa4FvTurGxH8iZtoJzQU3S8TVGY2SCRr8sFxTZpStCQEbX86udctQvLzBjBSP",
  "key33": "3p3Uy5Rw8Cat5ANT9NjPBXE3bsdBFh5Pg5wd9PKgBHLkLsATecsJSn2h3P7EY3SnQKM4LRZg7xy2u6dkix4yYyTG",
  "key34": "tPLCD4YWLZeNjx9obDDfNm3amq9P1YuvYSa5GihScpzdecLnLkniUKRgRk1AT2anhasTtJcpoZ2gJU9GUuDdQDf",
  "key35": "5az9t1bWS2eNCHSdZn6DXnJZguoaEcpPZnFo3hRNNFZhhDXtyLGxPsdDym814Gwx7y8YyUEMGvxBQzkYZTaUXBBg",
  "key36": "2fd5sEqpZ2aUNcQTRaQ7nJv7QitEvbTExVY95tisVTB3s2nXNuPdx4Sv9wpxmDTfYKKQJiWSZb8buKeV524FWaUH",
  "key37": "3JvbTAj1CiKuhikhy2CorvLMmBnjv1myHsTK84UVT8tGgWQHUHJWDYT48g11yWAcwdkvRQMBu6YC3kiU7mjYSJNw",
  "key38": "5UVPdoBvSNTmPRpDLvoqAsFfVHUbFUCGM9BFDjSri6d8kmYZqVLaW9Tr5RdzimGWd1mSDiWCZauPcsVENtnLPtqU",
  "key39": "33J9ASf7x6gDCcyGhkpqWw31v1GADzcFzjE3BRsBBbmfPhAjtQiTyr56kiX6SpMyBmDZdH6zp3xRjkDQyJLY2UHg",
  "key40": "5dsh7aqKp1grqYhgBwriJERGytWFG8gP91pCKRK36mUQ8z2vyBRdCT719Qj5m9wBDnNoipWZfzRPcTjP6DWEg2AK",
  "key41": "5DHmFbzhgZAL1nsHcUk8WbETWEeyknFncvFYKQozqDPQf2bEQtVdGHwhBKrSomQ4vvfzakLRVG71Lumg428253XQ",
  "key42": "2tQMMqti6vsPof6o88qten7yR1DPAigsnE2cvDaK66qgKuWzQYGTsPvhyNGUvdvmujLtqJX8EDWsWjibuTeEZNFe"
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
