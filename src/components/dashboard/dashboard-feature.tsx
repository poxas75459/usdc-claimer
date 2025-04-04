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
    "pARGw9ezxy2omjPfChcLvEaMH1buRoa5Z1aA6QdRy5BBpY9twFSBfgZ8WMPrF6avnygPc68fD32kQe4RrwvuLoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtweLfPry2cY7Tx2QqPzCdfRVk1NUxUSBr9FGFRm98kx1ZrW2RnYMiHfmucoEtYGd2wZgVYPrn3UFPvF5Fkfb1E",
  "key1": "2DQfLt4mHJGWXpQgPU3JZmfLf3SAa9Jb2MfE7fvMthURVUfiS3vSBP98JrnhzATLdX7uszChoQNbWoYKAxeizy9z",
  "key2": "5xs6guobqxTCwt1KmvnukwRrgLdAAtTAKpw8op5XpWegmQvjQ5dnrUffkKzergDgE8iRuMvoWdwRypcb6nqGxovk",
  "key3": "5MGLEGnZ5gR4MSqG2DqEXuTw91XdP5w4zzX1eQK7eKddV2ugfLFBFEfenuPYKbkZGi3DJX3issUXhyyUVQmzQ6zm",
  "key4": "5Kw1teLteQ68r2foeSHzdat4QhKUvXB5zcF5xHDxDxanDDDMyknZXAYrYavSBxwPfpZPM9RHYYWQSMakrchAAAzr",
  "key5": "4ukc4iEzK9B9NEW8XA3tgYeCLZNVSRaQaCNmUUzzGZUn8SPc1WWBA8CYgkvjQR6jP5DqeAzHybdZszFSqm161jU1",
  "key6": "52hbS5JHwSf9Yr2SusN9voWdb5u9mXm7MZ8PyiUEENrbj7e8aVFqLHPeXfgiR4rf2VAetkGoVtbfEyApYeQGfZNF",
  "key7": "2CWCC6BL3romjsZ4A6cbv52DjvYNhhz1U6vHVpytPWfcFumaUYCG5eGjL51MCxTFKETG4L4rBRJRGYMPsrVVQLDp",
  "key8": "5xCHZFPX1YPDCss29tNit68wimMZ819aLkd32XoLKUy1KvPijyQ6g2qXbCAJCRf6yqBhX8ejLnwSrJBVCpqBm22z",
  "key9": "498VfTX19BDN9xzpWgVbm6jFLRZe3QyLqjD9caLvrxmxmzCVrftLpPnHzvrMuepBt23TuUm1MgbwZzy4XND5m6bU",
  "key10": "2wpeDcXkyLAAMTLrxnJa88JyxkTQecQE6Dw7DWJo4v5tznGMu12Gq8U8KRgYGRApsXxNLAxzuBxkVs4W3ajVehLa",
  "key11": "22ZU9JFSyiB7nU4kzpFwwA2zKeigwHhw7QoTQ2Jm3K6rGxx1MVfCezVPNBg7Lfg7yKKxFVaLwyZybqmMr9Kp8Mej",
  "key12": "v2CeSW32Wc8Twrfsw8EvWnH6mWyuCzdMTFSwYW5Qvmtucu7JfKbEmkWxgDEzeSNc3iUqUFSeL7Mu63HjEqXsYH6",
  "key13": "4m1FvHbXNnBisUVyZXmdXcfRRDEvPhcTt8unoBmShKmaLM4uDQrg7FQZ9AW4TKTAC3SsSAZyTe84Zcka5QdCgVjz",
  "key14": "4FWpZLAN3LHhqbeCb3WyTviJEecprHKmX4VWdWRCwTLzrsdCboUAMS9oPitcThPNuLW2mYnUerC8CQb1AmqR6oSc",
  "key15": "2aGJHxgfzvCdbym7jKQHKaasAsmoB54bJfH87AiY3fMDUihyc6gUt2oktKWJf2aZCYzz9aJagVctfBVjUrmoYbZ8",
  "key16": "rWTtE8ce2BGCkyFmTPDMcpUsjqCVvD3hA3fpLBrQ6a4riQSCUEQm1JrD92dXDWTSdr3BubM9KDr9uHCANS4fp6U",
  "key17": "3fEZou6L4LY81bLYbxsJMEAxWgFcPxjkPSqdvcif1GzDNA6Rcmw3bJzXCQY7mz2idHSBwdWAwLhvDfZFQdBVzpYW",
  "key18": "5SG2Jwk3TnTeZ8rnS16giiNubjgQr6T5NbPzsesjfda9LaHij4qaAWgvfWVr9Xa44fzrw1ActhGK1Jkk534emeBa",
  "key19": "51AMjJYztsMb5KCbbJU3Z3zjnd4hSDiAGNeWtfEbKgS4Ea1CSdL39BFSQTP59BMfHQWBUpvyuh4ZWfsr9Sca5b12",
  "key20": "5SDoLns86xY4VqfYSswDuhjv87ABk8GCtW94Rd67rcdxF5wYF27ioZ2vPYxor4TYBLr8YB2kQ2S14PpWAVg69eVg",
  "key21": "23LaXhkzEBfTnDNKrc8f1UGVLt2c9CQtCj98mWuoDzHVHkh1n2u5VGgeXuSAoSa1XxZLqKHP2wXHyPEa1nZrMa3F",
  "key22": "56Ap3HVEhqJXCNj9j3DP6BQ7QxrZgmUhAYG7CJ14hhzbTpF97hpGvTL6QMWZRc23X5Zxnvt3Bm3zgZsiPS8HeGK4",
  "key23": "45sSptf1erm5ZdSN6jYtKQ6un2HvUUKAriNVQ4WyL3E31NijPekp46LNvrjs3pw6z26wyfuwv3qZKyQfp6fa7ZUi",
  "key24": "jGBPeD8sGr37M8zy3eQNYR9PusCrMtWSPFexKsx7GL2EsVB2T5jouhaTvjHMPcXVEvUkAPPV1syY9EfF52pWXjx",
  "key25": "2z4rrrQfbgmkUs82cSQvxvGUcQSq2YVyvXdTrrBPgs7BGmueavEAxYW6fqZdaB5etco6ZBK3jfek8X7Dy15up9b6",
  "key26": "5rKWLqWN4KwC1M6oDPdCbaoNn2YQVyBAqSEP9h6EoX24yhvN47J5y4b9r8HBV3jEu9DWs8TooPQ9yRA4hhx13efK",
  "key27": "54eyEutVgz1sr2PGVCBJxJ6eK6Ksvs6yzpTGfKxsxbF8AGHWqfKakaSt1QP6Cc1m7nG9x4NFAAuKAPn8kQaHgrBD",
  "key28": "bn6j3xkMNpWL1js6ir1na5xnN8NsneRK4P7xBYFG6XrRKyhQadc9rRmGtXYYpP9oRqu1c7BUvjutXHhhDyvoFo8",
  "key29": "2LjUpWAu64kPudL4CkGxPotxC4f2aT33C1yEtXyoj1oEz52UhNVkkfAKqbivxrWfwNkh2WXBXpcYRRLkWbT8yGU8",
  "key30": "63HeD48rN5dmFKsjj742U5PRqaVAj48AKHvctc14DZSvFimxpozJdbceAaYvknVWtRf1S7YvC6ZMDuirkioUuNS3",
  "key31": "5WMNXEjFYkABavey83VGAQ8wXmuf1qfxsw3SM8hTZ3YM5qaEibxGB1yp8VJh5RoCJGrjzQeBXHqsiq5JvCL5hXA4",
  "key32": "2CAdCByuKoL3u8t67tAfJBTxZkRFJM4fp6yHdLp8FgsU4W9HwHKhMhP8uNRfA23m1yzreeQerUjt8qREF1KifHAN",
  "key33": "566Xf3hDKb95HRcuwgZVFesiaYrFfxujwSWyMxDYE9ExNCUMf1hLXSGTjYcejcUFZt9oudW2kv5bM5WwW1eeHr1b",
  "key34": "5MSDVqosrRjaqZi739mYziJruuWAXuuwuN3FNtejPDCM9YVT6JsidghgioSXUq3z63zt82mp6MWkQEFJE2Lb4u3c",
  "key35": "5wE3EFopupaTWea7YANCAU1UGNgiRNwJ3TXsD6kpde2ydWfFDjyNu9ZxnAWTWhzFwDwnPbRbueN9Zuceho49vbuN",
  "key36": "3yKfSAzwfSDRYpK5pMvGKsBpk8UW9RWrgBYK4Yt9K9nzwVMeRC4WRFVe2PHt7EazDNn9vuAorQESeuoo6ZFNXcLX",
  "key37": "2USpBJB7LwBEsjJkU7A6zTrZGqKoE5bEHoP2t2sj5uxHLDqiPpLa5GSyJuf6byQfmFpCa2UvrV1WWpU8kW9yLMhq"
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
