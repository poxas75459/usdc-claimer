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
    "5Xb4XbRLAkYGNxGaNTGyUSWqC3TaWWWrjrpY5af2dEUGpn7DmNDBrXM1LtUAoJksAMfWJYc3a7ckTtEUnbrhV5ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42PCQY1h9xv9SzKqan8aEpEGq7rUc1vbR7XRW35g4t3UGy7Fnhby29kRnQpp6THGhQQjy2wRTwZz294MPtZS5V9w",
  "key1": "3Ywtafie2awipqbyaKUjqFeeuxcbH6yCEukNszYcjWRxzLooHnuTSi21rTtubD75qxnszXPwLQKgRY6iKXuAmKbe",
  "key2": "25KvazSzK5F864MQT4TEUGUtiHUZzUJvLr5GCY9zSDDzC964xrnrHFV68CeQrTehErVa873PJ7XW7Jg7FnRnWA26",
  "key3": "5QhqG6RswpV5th8SD5NXDApdsU5MXtkGS9R2rCyvHHGu1gM91E4DFEpA7pMjiWXyA4d4w3C9xJdnYcksz1LFGeii",
  "key4": "5dKPMtLU23MBeRK9YMQJatyEyEEZb7xf3eqf2h4eoRM3fZGVKLtpV9zJ1w9DPqA7znR2pUeRLeQxVQA1mCznUT7D",
  "key5": "4b77kKSnhM37RcvESRjWhMHDNPopxDgtCeLf68fvSkn98Ys9kBBvAZZvWvDHwxHozEHQEierhbs2T9TvwqMG6jk5",
  "key6": "3Rc8Ps99tnnV8ud92R5cUJuhEGUAsgPQczyNr19Tib6FmXat6GkqRrrUwEt4Ah8dkNiSLsnypbQmb2zYdLs1t152",
  "key7": "3pgaVk3iGSvocC1fjDnAdNfEdy2ARUiYq9iDDZF9DFwiArpPuwXHGEcNrmPkGcFxc9wuZ5VRxdDFRkjNMYY1dBFR",
  "key8": "3jSTDwDNoNy7EVzGBskyNwQwHKT6h2MPcWMAvCYPCn1NA7gLGFpdBavj77CwSnpiUtPG9rmzY2mfX15dTBsLsZMb",
  "key9": "4ujnp4FaYrdaZmxCvjwKewgRSoNEtxEBuW97wAXpD3yTfGu8nZr5m26vuTbCW4ZEDPkeDQWuWAkbSdChL6owLXnq",
  "key10": "2T7qHqf2TA9BnaKCgbNhxDHDS7kJ2SKwiXPYcgpasgxt6piZ1CxnELbfPbiAqUMitBs5YaNdrRkAJHdJ9Fhw9jih",
  "key11": "TpSLiFLhxij7fV8pQTcFZ1BR8T5Y958iH1eB2Vz9rKQim3Y69eBcttvSodsdqj4szhZ5tWRekigei27Qp29VPb4",
  "key12": "2b9GAy87K6tw5vCsXv772AY7gfFHpn8MmppJiumVVbQg7hJd2ZD9ME6sYVRjFKmbp2hUaciQs42wEG3tMU2AR9CY",
  "key13": "572kJYmdbnmpdi8pWtTQqqn6o8P9Rcip8AcQRgHgiQUpQ4Aa9j5JdY2172dKKJUW8uxVgdje1a4QY4rQuUxVLTaj",
  "key14": "DFwND6ZQYEnFJRJo9vzC7S6tVLWWJthZy6D82yivkgJoo65DmPpVA1qWx5utZ1GreK7A4YSBKWUNvUAzNY8kgUp",
  "key15": "2CsoTSnqRU1g6Uxgzjuv3FcSQME26y9FGqUesJQ9qqfG3L77cDjmWwH1BDhf3t1makE8yc2y89gLyQHDkM7bnty9",
  "key16": "PNi4HzReJxgxZsDRrVggEuvwCtMBx1gDUzRukXdWEYUarPWAFMBSxeYaziwaZZF8RWaPS41T9xN2Ndz4FHxBPLP",
  "key17": "4Hi2ap1MEqNJ1pZ5pB1EmLkUWo6CYRpar9jtELu37zuHedsjYVZhQ63K7fC8oroMdgwAgqV6caS8t47bHN2WRXp9",
  "key18": "4DEGb6wkASWT7pfRW4ziYjSKJYuir8NmUE6ptpQyJ9ci2iqoKZ4WadYZYb7mpUx9j6yDcEb8MciGnCg51Zi5iPNM",
  "key19": "4tron1oPkLTrChpuu4U71cW4yykpWRdSWeVKqA2HgWofBrK1FsXxhEXNAcz28p5pCnNzScFfNfz7o8x7MdKVKtwf",
  "key20": "4v1mRZ5E1iirtXyR8PtD6G9odwYVwNmvDKPxizEcHbndk4xyninpmaMgpAosFHmrHuKHKUf6JshUL6bx22KTa1CK",
  "key21": "5jcCntx8ozYoX1DUPX7AiHuKMU2pL5WGYy7bTqjc8da5xEWFy6haDCD9Cq34z9vhb3QCGtJx1ye21mpWf5tBj8Cr",
  "key22": "49puZr7sud8YBfLb1Ep2FXCK9WLhdzjjtRr7ffAn8KU3pDet3hFBbF9tYNDNg1Z3bZsvgksGCJVNLR2w65euKzEp",
  "key23": "652NPEhC7tUpyz5Ho6C7cmjyqLEmW1MZoT8MCSLpEv42UmsFVFiDaAtrXgDLpHaEmE2odWbEEtRfZTzbB8zwh3cU",
  "key24": "4cRPuRCEsNz23EnFZ8P7N89xogHsHZXzxfp2qbfHFXCPbiHueMrrkYcybjDh2dAXG4bUB9MxF9XK2X1p2cKGKJYi",
  "key25": "3yiKYQmwGhZXygS6YEVh9YE7S9eVrsyg6QyDjMDRty7Erzc4ampURCftrdGAfGTkBqpuQhnYDc9QccDLxtpCVGb6",
  "key26": "sCzEFYBhK3Fvikx57jzUsoi5Tx1tiJBhq3FR4CWwtY219EtEj9yndSDWrxqFJ9dM1dmRatrGrb7sbiEQNSxkzEa",
  "key27": "2R3BhBRewpjEXhm467rTsL4LoMo86kr42c8m8HXNQxGXLpa7Ma99mnyqHHmakMhoZVZNW9Dt1sB1akDRrSmaaoeU",
  "key28": "3q5S3jtj7sBStoXfH6sLCc5PJoBeLwAAQC7LkfCUCA5GX3Xm9wKLkCqY8b8m55uRZJgm1K5CZ2ALVTkgDwpng2kc",
  "key29": "3wSHyWmr5sFCQVkNy1LA4NhGehin54j6G7Uy1t1Q7oLpu3mXzwDUTtCCjTDNUBNCJM1MR37KdzEkvhYSFeFXzyqG",
  "key30": "3KQAGJUGeynsTSjv1w3vTeA4nxNFcsN7kh2cxJcgh72dXnBmi99BHBSVQfLJV8J2ABA8W8eK2kKdCTV7jzDUtzuQ",
  "key31": "3Tgf8DCCbvRh6t3azoRJHNWk8B5WxLkwEDS4LdZgNMXjShnix2HpihdDQywCej8drYfaZLuMGa54mKLWKeZmPJxp",
  "key32": "3PPkvb6tpm3ZmMLkMasXdXMqQSqcJdDzhAdaVLG4hcTXk5qw1AA2BkDdw6wSd9ygZEhVD2TCptupZEQmVmiS9wus",
  "key33": "2gr7m7CPNDwVmdsx3NrsAMM3KLmCKXtoB1zW2XezowU5HRBvdmHD2BnAhomwzUZ6aAu7jW5hwkfigvLEmt5XgXD3",
  "key34": "4KejMNnwQgSbBkYxb2a7TYb442ST5YMqLYp4v2V4HemYyaGrukH5w287d93tXoKUcLywkEupo2St8jprYYEEL3NA",
  "key35": "4FvX1zEnd8civtEZa38M13PhUYWgUBeNvH6NPjFRP9dyTNXAesP8DXLEyUW8TEYx7J3gR35RxYy8m441FXCazARy",
  "key36": "3xHL5U6gGh4PtDqSZLLN3AoTFeNNdkRLwtQciaE8gGE9WXJsyJdHxYfJUz1d83jnUgRDuGjRZi1nTr3xR8nBz8hm",
  "key37": "56aQYpHvPZCYWwRFA5D1AVcy1uGG7Yj5mMesoZNNocJMH7tqrSUKmz1jbfpF5F2hqXLvpavv9KzgA71uYf6fii7Y",
  "key38": "MshDs9j73CTjCPkdJQSzCi2yfw5YZernsLHTH37ijaKX1WDJkdmxXUGmTqpivUbNQSswLpP1E5a7R3urU53FVdZ",
  "key39": "3DyceAgbieyng5vE4atUMykV6EQXgoP8AcSsvqia6TpFcbp2wHfjG3xpfEWA8ivnUWRm7YPMcyJ7HHKuNosb8KMD",
  "key40": "4YD8iLpG5ybZwH1uhRK8Jza4Gg87hLUFGiQc31MwK8yovWFyhDtPhscAdZuQkJf3AcY4BvtmBg5rAHf32Fp5sF3"
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
