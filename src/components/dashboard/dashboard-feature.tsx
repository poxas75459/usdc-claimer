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
    "2RJAzurYAg2XWFTPjzuR7jnyt7MXjhD2UM4KmyTuRdhnRPFWWEFYUv8oNoVggjcGGYG4pTmV67ReDy3fGm3uC1H4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ykiEtVz1syp9etXQbXCfJZJHHpJ1goJ7dsSAqxVQvRBsZrnq43zirGtFe5aTMQ7hppmbh5nHYh5UMfeUmNVV3Cg",
  "key1": "5bLRedV1MYhSVnZS6TAF5DC4fzMYhicBua4PECpockf1ytweLMEyjXsNFbeQHGAoUnG289sdjin85i7iybasn9Zo",
  "key2": "5b76CEE4cj6afBMH6BtBTSYDdWR2gUtG1tLsCzeBnjsGMBddowdkj3gjVRwG5vD2axTh7fTPunZjDKrmjNZbh7sC",
  "key3": "4E3hobDozewi2VaS7AWkeNMnbLWBLs5eHSXHuqKFCqoBpdHfGDoDCHwRAKbbsBrHs4k9uQcR4VY42VY2A3u9tm8X",
  "key4": "XYCMBfHJh1yAX8jc18jxjeG4Ev3R5BFYKV4auCVRjEvDxXifWvVH1XfCyGGchqPYxUuRhwkhfagTs3TBFAM66uA",
  "key5": "5ZzUirHFyqN7tXz1voZDfr1iCqxts25XDGLGCKxNzXFAZWKTLuYBaE112CQFeuA2dHWkmV7wS16MKYCWXdYJJqQV",
  "key6": "2hcytUWo4kTJoHtaRNxMCvs3P3bCGCipjFDh7gGoL8he6YQBdGSUQV4fP8nfC9tyfNUPB2wBroGFy8w2XuutY8nj",
  "key7": "sw7fYwAWz4LqJnF15WoTxixxVtQfauf2PTC4wa9p7TH4pa79B9AkqrvA83nZ84JyVCDWd3ohX1K9i73gsXxeF5G",
  "key8": "2UVWZ8948HGmbsUS1V5GRGURn8NefJbmp3qW4rqHWtPnKXijCGcxZB7GsTdksxUp6B7TgDKHjcjsHuVk7xYRJQcz",
  "key9": "5AweGP5JgZMgAbmbvNHGtXFeyBJimdX6ufCjGCvoJuehoQ17RSfGNPEPLtjxZkPP7ssqFcv6Akwuoqdi7tSwco5Y",
  "key10": "4Lf9URvJVtATUjTHYBLnVCr3G7ustrt9zJ6VBrxQZdMMdkMPoKPZimG28skkzNm3X5rZipF4fHAxGmcPa5RruFuJ",
  "key11": "HjiR9NLzVhg1LX6dwyuQ4KZqjQJ2UD6SLaFhn8GKHVvTq9UGLZx7o4pDXqtzZYYtSBkfBEGPPTJUJfeNzaTdrXW",
  "key12": "4psscmkCkXnn7RvH58tp3jZqghrvq8gNAt7xibZ84nP18zJdsUzmrhyjqjh7CkqUXn31QZej1Zanv25q7E2QV3ez",
  "key13": "27r65oig3qyviC7kxZuqEQbgzqtnuRosbPULJ59UcgzTHvydFjJoYmqy7dfgfUV8JP5VVuxXboajYUhqeGYkUohe",
  "key14": "AASD1cC6AH4oCit4M4UF8tMwTssqHfXkNgrvRtVKi7nU7HsoYJowFLuJP5t26o7kZrkT7WMJXU1Xi86M8gYQErv",
  "key15": "4HZjUJPwBiAbSHperZNrdNiYUnKW7oJA5rEqtDmASDoakUZU2Kr1tUKP1zPwktsrmtBM9CnsmVJgCaa5Rpkmz8Kf",
  "key16": "2BPNdXzYkgNtce8jad1aAUJ5fN3JyGMLhe4dg8PFLiVhP2tyFW4G52N6HsaaLM1PmHsLdwCLPQ9M3t1fyqD7eH3S",
  "key17": "5LTyNMx1Di2fZ1U1vxnGqaJdxVrNgJV28tZFuUZRyY3LWzXvJj5joYCasBbpQgbqZNiAWD5LKgTL7rUzQHUuGQuR",
  "key18": "4HPRqMF9rFK8Kkj9EqajQUfA93PQwX7tg1kDGQQ89wgAzswADTLoQmuzhuvX5bDVUnqTwfmMWkL8BLtC1PbaeFu9",
  "key19": "2y3goPg4vCYfJTPKkmZ25k71wKppJ8wH2y4qvmc1TjFpytiuXtycrwbKytDy4ogA8eDUjJfj9zjkX7vQmH4735hp",
  "key20": "5vzGLhmigyXrHnmm8fnaNeHr6LLa5jngWuPk8QLpvToZgkYtFN9e8efKJXC128c9eAMKPJ5tdNkRNgX1u9uwQi2R",
  "key21": "4eyBSCox5LLpn9d5yYg9sbrqmhR2jC8dMyyuMZyQSHGPBcNmbf5LGzFVQHGGXJmECuGji9pmjMeHs6UHccLRyX3q",
  "key22": "5k2bMLFxPAduyJbvz2Ty2w3aCXKHevc1nUm5uRTyTffK9GSPnjDCCUZP8jLSVSB12z6rvnLSdWHbrZH6sYLUbCRd",
  "key23": "5SbHuRuY8RVLEDc47wrBHm6H8rn4G3ZTBYhsf4zv8JrQxSHmnZqhGmViQZ8HmoQJQtjBwW2cY11YomgbxVzAmW4U",
  "key24": "4VXtCUxcHt9Rv7aFyA7s2sKGpHVgjgzY48XdeT8wG4MmhqxvMTF7wgmkgAxTJJWyMX6WbNw7TfcPLLm35skZv5fS",
  "key25": "27LP9uQnAHUc6WZLdVC2rsD1MhbCcG2Hkioyrddd6irPhGxTbsmDpN7cjb8rrvRA4yVnS3hHon1cM6pBunTzX2oB",
  "key26": "2KBnRbh1FXscoM2m71xEKYbVFojr7ishF6uorj7h2ProVX1NoHKcsh5721mbNye3hc3uAxfHKvpLJDskBLNdK4yd",
  "key27": "3ZgbBbuCiZXVSRJX2dZgeEQv6sBWUYx1fNZspNG6phE236vqND3RP3Do5iMMkw23TGXdzLwMFTfj6PBs4KLTGGDz",
  "key28": "3LdvnSs85y7M9Swfy9PuEHaSQCN9HJACDHLvAQsjSmaeWcgt5piSSEFmxxxM9hcPQfsaESVvSYiPBqQ7b3eRQcPf"
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
