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
    "rSMVrf2Nz8UniQrKF2TZ9qVEPZvQeMCZLjKBJHSDEUpZWTV8k2mWCbG5SBdu9AyGJWKYfnhN5hpoAkzY2vfkFhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228NKDjVUhSTjFapuPrLLqw2nDh6RVn4W2PESyGEYL7s2w83hQVV2NAEvs8EA6MBZ1kPsfG1bhiT45qBVzo8sTCd",
  "key1": "3RLGivmVpintiM3bUMxKgkhUqDSPHYzvQ7b5RU2ghuMQUGuP1svqBk1QrpwikaDtdGpC4cg1rFQXQQykxq5tXsD1",
  "key2": "3umHzAUQTQosMzRFUpV4HjfZGX1gtsiwVUoXD2ekhKNFDGy2aKTbCJduK3tBTbfDyo98RWSahrpurfbJ6WZvdPuH",
  "key3": "ujLQSiZVJbZBybQroDEEg71QbGDhdSxMrMDK4HbnrY5pjpCqnYKatgnFdFFbyqyesLqAX8VLHBhMjFW3dN2uBuv",
  "key4": "3m6jKRacpKj96teQDAMY3q34Qd7RkURiNQDNQmRBnhaQZ7VF5rk6u1d7318o4Fdip16ksSDEJoR9hCzBA2kgGpo3",
  "key5": "3WwAb2Qu2XWzHaHsPDTaKsLfCVBNmQ4dKD7uPhgr9fpSCqszmYssQC2SPGRdR4Zyb7xrpgMrZzER8FYDxq1oeayD",
  "key6": "4KPKt4uB6bxDq3JHJLvM3mwGLJpPEPdkm3iN86j6DU1RioGFqUru9qN3XaGfs11sbDYy4rahqLc3jq5aLeoeHTto",
  "key7": "5qSoBKVhPqaBswZgptsyviyt1SNCXBVLfBPVCQF2qwaYnvR7u1pVQXqK8W1EgD1HUywcdnFQbH6xpCUZN7XxRBjA",
  "key8": "5spLuaumsoUvuJsJJyrtTHNCJFJiGgSuKPmzQGLxYTET6XD4kSkrpNGp9rgdFg2BJbBujm1oitX4sPPS49Deh4Eu",
  "key9": "3Q6Z51yWpf4utZ7Dtdg5J4g47t4VamVYPkcGwLN58i2NdbYEvZu53m34ssrGMEPhKkAdE9gudixxKMwkLukY7fQx",
  "key10": "4KNoG8UZYj4QgmyJEX8JUStUZgGLg8yAdV6CNhdJUgpbv9nNzUMpm9Cj3hypmg68SF6YHXn54wfDcZsQ8pMvfP56",
  "key11": "2wmqxPWhC4pMVrVD2zE7ikwjMe74aJ12x6HEJMsMvnbJiZ4xygMDSJmYJt8Nhm1Ww9bMaAX3vDzZ6F8VQ8Q49k5g",
  "key12": "5b2KMr7SMci77C3P1AakJroABk49kwxcKX976xdbzUp5Qm9GYonMtn5BLPVtUrqcTYyh6pKd7sZoDPnGHZKSEEN2",
  "key13": "4b5zEEufhTzCsuFcjwxZXCpr4UwDFtuExTsQeTDS2D48LT5MSuGeoKxcgycuBQCo8wZgucS9RcFNNpve4kkRDsE5",
  "key14": "2rzQJnbdZd1MueqFbAUWWAWrqrpfDuMr8QrtDoo8tZEtcGsE7a5zsbJFLHswAAHBQxQV795XXZThucdyLCTpyz1x",
  "key15": "458f1CVw8WvkdoB9ZvsjYT2EzFRjTjJHgtVABn7L9smbfs49jHBJxK6gNZV1gXxDb6qok1QXDNnUJf2Bp87EdcSG",
  "key16": "eyAESVnWWCumZU8gavSwQmZyYja5mc6sxF1EkKuUab3weWx3ys9VtYPaEe89BJX5PnvM69fgQLXdAqbhc4VZTWz",
  "key17": "3fhiZtXP2cxrCU9JjsL6ESDcYFBXSQZwYviuojSYPo1QELKonMbbUPgVoKams7G8o1VrgYjBTSJVZHdqwHWu14KC",
  "key18": "QccHgdaYNzsrDQnFMD7sb8jZoKHAo7R4AEkBGFkL1wtQAD2ftg6egxHPbm8zpnafWSR7iQWgwzANm9WF85ky7VE",
  "key19": "3SpqY2gWLjmRCnqu8jXsPvSjobbCANQ2FfYwLetUETACtusUnPHWK9uziMi6ahdbWx4wTSALsuueKVJyNvScx5ed",
  "key20": "4sXY6F8taR4Jx8BT1HScgyqdiEmytma9ZN2bx9USeqdXMqjuPC2Vc8Erg9gGLhtPYZKBxPJ6ujUqtmYZUmGTrsnQ",
  "key21": "4yzKgMQvqzG3R1R9Ssxoembpo4H1YgFfHRNii3jy77oXodsnzUMArmzizG9bsSGQummG9EiP3XwbxquQ5CvCGtWM",
  "key22": "2FPJz4kVXnX1qAQ6iq43HKxYBxZ8b1P5hp5tV3XV2pRQzQXfaWp8btU2Hg5kAWrjyEEJ38b8xGVWsVxCpwAUpdgk",
  "key23": "4fHmKHdhDgsZjjxB6JJTUWMUf2TWWYpWKSxtAu8MTkgm4FEjmF2P351Xk1xtr35yqsC75iqJiEyz9zqXQeQoGXGZ",
  "key24": "3ToT5o3QTKGPopEegFNBPjjsB36aXhmBQ8uc6qsQFhHXHHimxnKevPJTb95fyX8Dw7JMWd5yf1QUCi9fpjnCDTGh",
  "key25": "4USSpTnjksowMyfNLMCwbYkGPfidbcfZuLvJea7gofEiHSJiooViLoYTEP5TPHPkcTgkz8WMKiYnfEAnKdZ8fwJo",
  "key26": "3dB1hDaCdoFYvihM2u9Aiq2at8iVfxE2HQg1p9hUevrMPJWWbX6wV7wNn433P4X71J1ooRJetoW5WyhBo9UF6R8p",
  "key27": "5ppnFfv2YS3ZUZ8QaYY7TAMTtudPMEQNdiC925cbyUBGAx5YkrFeM5kTKv5GGPEJRsCk955R4EgUJGofFJwwzZFm",
  "key28": "5QAh6QVER1U6BrCUuWyE5HXWUEQEpTEkTnxWvwNZ4CxioqCgKSmHuYgrDst8FfM71FHRRh9n6HGmaTj231q1trY6",
  "key29": "24XFeSGrbBCaqRxnB71jp51CVTE7S9VpzAXEDCpY45J21TBRJcDCwvC7zZmDva7TL4CJkFivGxk863uKibaQEZ8b",
  "key30": "3tiWiecvkdt48ZTgm88hTpDzRZJrdT1b96cuc8uGR9dC4qhwWaBXtJdaRKHrYZwfzzADqCLnEjith5WKDuYGcxLm",
  "key31": "3gYZRzwqNkEtccexKxDXQxTJC4TNREaGx4FNGarWJYbcjNN4eJJBKQgVn39ZRQMLRy8uQ7rr5aj1FbaVsTfDKn9s",
  "key32": "5D3V7RQcyGN6SkabzjdDJnMDuLw62rriQZF5zu7Vj5gco1wbNR1jNHt5pSQHkrTnmxPkChkMvKxoPhAiTVYhPTZW",
  "key33": "5Kkj8dfx8hnki6sQgQK1XF2C1C8cfaN59fycJGyzY5Q6UecACE8cLbJGwrXJYY35JN19TDHKZfnaSm3Fr5ZwN5se",
  "key34": "2vJt6zUq31zTCx3L1pDe2qukZ7wL92piSRwoFPhw7aYfJJQBrZhyUCsLeQ3dVw3nkc1dKxGjMTsKFRoq4DyjWXcU"
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
