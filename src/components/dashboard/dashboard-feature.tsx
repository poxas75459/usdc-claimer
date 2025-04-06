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
    "3TPH8h9aYoHTuHhcPWfNQ2YLnviMDCcsRiMXJ1fewM1pABE31VoGfaYGSu6GX7HL4JtrXbCk9dh7vrpZtVJhucRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ykn6spaq3y7F4nesMTpcpnGEBRebv4HQp3sEMnDoJk6wNqYzKpabxLGGKk3Dnhkfm1bDYmyYa7U5in4W4ztXqw6",
  "key1": "2RxBqJ6TzZSzS4UESVt1X7phxYdSQzB9aXn2orxonkB9eXNkPbiEBmX6Ava8XSTm3ZouHCmSkeXAqhCV5DWTsLqM",
  "key2": "3Eo2fYA4REzhPgN4NEtLk66mB7UuapWotb5y96atmteaCpYcbon5w7iAvtPzsjb496Vd3dBRea5T5skCyRBAkQce",
  "key3": "3ufsGTMmwG5NftJHVsL184HV3f8vav2uDPXvjVaqBzRZb7uCYLkbFUwrQc1a7L54wA5uzcufmCx3mb1C7UGRJhZa",
  "key4": "v26qLRQp998JcUJB5iKL3fap2EDBrrJ4STpBmFx3HdLqpV1Bjifu4HpGwS9HfHwuB5X9Cr2DDt1pX4x9mPXAeFm",
  "key5": "NRPv3KfARm4xD4sQJhzoBJakzWgwtqhg5AJBbGeL5CVWsduanKgMgS9Jfig3aocP3kNjawGstvRFYd7cpST9o4H",
  "key6": "3WN1Q1fAYRn9Uu8GPNV289iWAPkLi7JsiSQmasXFAFiCtCPntePFxLgq8YrSYabEJpz86Le5fRtCAFsdTB8SEgrW",
  "key7": "dPmGyPhYJ3ZYkNJvb8x3BbAUTvQaEP7vh4KYyq3Hwneq1wWXx9mBhYvkH5wWdoMzaRFZcWDr27FeashAj2sAKTT",
  "key8": "3773cDRLEecxrEM9WcJhivzkKf2WMu3gvkugK4yGgp176qVPcwc5JKTTyLPCBDTGk3JxSxW1XC5kRViZMQxgYCLq",
  "key9": "QsLa1CLguMpf6TB4epfMPcjUJP1DMFGwCUZMa7HFMzBuSE2GUzHTEoF5a6AeoXhkLeiebERDdRZkR8d9nX4SFET",
  "key10": "zvJM9oUCyrZ6Qg8SwiTcdmgEk9wQ7kr243SvYnc9CTgQTpenFfmSbWPfR5vmGEyvEgsao256z2aRWtghDeHW1iN",
  "key11": "4gxU3SCdvK1y6pVfYzssumDSu4xmj3mcQxmXxPegdZGEcGS6ep9eES1DvmxpYmwvMP5SHhctQMhJkhA8TG466cDk",
  "key12": "3uwisC8CRoB5eN3kQrdp8ksbUqYgY1xLdPwSkueUonYWNjiE7bQFDkujTMWsifUz49eedHec5JiAA912oLGaa2Pj",
  "key13": "5hduywpELn7Lg8ZUN1g8mPZuVKx2iyNp2q7zbrn8tXMqwcWEQdpiRxDpvsKWKN1gXehLyYBznVm7eEDBZy5fFJC2",
  "key14": "2hAi5rjs7acmacYRMwVTaHPN3KjqkUd22hkRM7mvZbJurj6GfLCkbgaTUrftkTkJwL19oRveaAseKvmXcHdQwuVg",
  "key15": "3hmqHqudPVTrihGAredPmCbxmKVeUCKj1RMKBcqe67RhZwCZdauyXuf9eCuJttNFGtXLShjbArr3xguNKsg45S9J",
  "key16": "5wFqb1hsYAu3fHLAKbm2CRoUSfUp9heceN8eEzKNKn8NaTVtGgpAKwBqP1ZEx4jjYEWqV5v7UmoutCRvNYHzYu3i",
  "key17": "3R44Xbz3yZCo1QuHickh2C2GuauUAA3wQRiTEWU8YMtuS5832azDhsMWXtJHkKoAKmq5C3i6r3mBdomUZm4mpFUs",
  "key18": "4wFT72pGXAqqVbugQvVXrku1UDtUmAbxTa8P3BpQ6N3TiLDRu6yqNvEGDsCKU8nYPK1cbV5pVK5jAw4r5Nj5yE2j",
  "key19": "23LARC28jTN2reRyBYxpHGQ53F6TAN8nKejGxW8WQp855sT2VcoGacZtaQdxkfnFrYqz5hdV247PZ5BDBobMx6wt",
  "key20": "3F96gMSSPXAqjBiZVJScGGNiCTQnxTjMcvGNf9oUi2NUaDeo47Bf3GTh1j4GPZ2mftSUksr54GEtdzv8GZTynKrX",
  "key21": "56zLbzpujvn7ZnbUU8zjtsa9xV1L65QtJscjzxvwU1XiGd4zoi6wJJLsSvgSfvuZDCh67M1csLJKg2tfTPVSPn6v",
  "key22": "W6JuUfkePtcYyjwVsqBUTAS89uY9BjorNcWK3JNUKtrNyJPy5R7Ppsgh6C49Yw6TxnwKFFpTUuf1ea7cM5S54hh",
  "key23": "5izBGXVhjBZSW3RsAGMmin5FPEpXw1ykdkDxxmj5KZnrT6JrJYqimqp22iz3qDe6dk6DB6acgy73gXs2pwZ6AgWL",
  "key24": "3y5k2BLAUdiuPoAqFYUSbWemBQNNyHKaNooQLQUnpS8ujG5VUHAmcT2Bhn9NaoyWz1FqUxRwkbBt4YPCFr9Lsw1E",
  "key25": "jyD1p3fV9y4h9EZtLpSBAtbcbG2rn1mT3CpYYqnDEy4L21ZkQjBGZS1mmYd8aYwpGedz29YZ8BaC1Zwj9TxtuTT",
  "key26": "5aKX8VbDnLCo4xFqf96dmNjHmR1NJZB3hfV4R6jW1kvVEpRHatySwVND58UZUUFsZYX9cpr4MQiJ9H7p18U9bBSH",
  "key27": "kEo9j8UYYJqCaYMPFfocYPbnbUVCTbcoSZdSQcpx4ji34UJZGMgGWKFiekQ2ZBTm5yYdF56vjd8q2jVAbPt8sUB",
  "key28": "61WRrXyonbShobK18U2nGzonJuT8Uys33bTaA1uVq1PVRN3K7oLYvSvWy1Q9TV63tXG5xHvnrP9FpsYvTKDUpWst",
  "key29": "mv4LCmDNv1qD5gx8WXEeupk3zCHqLxHnTk6YZeNK8Ws9NwUGhUCm8k6d9NrFEGbZyAyaQX9ZVyByoRqmRLuiycz",
  "key30": "7fn9EGzoypgrMiWUuqMGYJQR4M8o1ftN9z2uvdGra5JL9mkSiBUsEYjMzw9TeTMEBejKX2NHqpgemkEsuEi2q6i",
  "key31": "5y2uqx4pngB6yuGcPhUU1bEzWaX54MwPUSVjXvutkNgPBFW4kmqdakPfDstKArzYEhhk1nKRduyPRBM96xdFzAos",
  "key32": "5g85JrsDqQF3PFvLTBtsBpxC3vaX26MwXEbgTvNwULKyb9UC1WG8WTv97wRwQhhsdeP8tCNsywWEoARf5uLVjsSn",
  "key33": "7EALFgtrtHv3QZrHMvH2qDmrydE857Nqe1iJK9qr5srML6QwUrK9Zxo9PobVv3ud41Z83ZmecXydnKtR7LjqHoo",
  "key34": "4r5isTPdTsERM1LpkRWLFTAhCJPFz49v8KT7YaYJV773F4K2d1QidQZi7YpExad9Swu6YApZ6NyBK3TF6Fvyc2hb",
  "key35": "NQksAcn7xEMZvFNW69i1Bg87aBHhDjq1F6W6Bao4sSfcD3LHyfZxj2ee8f2BGoTvC9GMX1ZUksihKL5YL1shRgC",
  "key36": "4Ef1wDACeqgUtvH6jeKJuuTHd3rmWuABbvyyyFkRe3LUJyZFt1Ehju8GPtaTy4UMfcRtKRQPDttfxQfFk4t6McMi",
  "key37": "3RraQo1BY5oaqKNCNqsW9SQzN1CF49H9jf9fp9GgcyeLFErym1L64Bc7QF7eDcDD5fNfK4DWdRoQfoPfrXk2YfDf",
  "key38": "3DQE2MqXKZrPguEibAzs12jJsZ86YAPg5gS3Mh5nBC881SSXZHRuYe9k6yMha67qgFyPxUuzzZSHEBekgJnGjGEz",
  "key39": "JoxN9gQKuWqLCDmedg7jiCJ7pHWx84XrWacZDoceMVsnmSCiPZuD7NdCuLY5zrpYbRHxseVpEg38R6uM1gy1Bkj"
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
