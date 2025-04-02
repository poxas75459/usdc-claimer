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
    "59A6WSf12pTDAy6KfrZgBfdKvNBDEeducyNKxDAVV8FDRq7AYFJRqxGbCsTG6RRCUFmUrvvuDe2A8GrvQzBn1ygc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2wbqQCb2iQvzMYPAcjYWTFK21xCSvTVPhRtaby3jddpHG4HBerBRwuWUDNdmiLTUng6TKpvDCUs2SUtE8mVv1G",
  "key1": "4fHZ9uEPKvcqfDYZPxxAPbbSSAkztrgRkM6Symeaac89bSyHFrRXL1mZ9DCH7cnqsNEet1XfLfVBrPHcxE8PeE8a",
  "key2": "gbHXVtwfVvbEWYpVVd2NfniYK7fJKc5ri6dwoLdBfvYRNfsrk5pet7GTYMS6nLM9eazWUJvbSv3wJR2gbVKZ4Eg",
  "key3": "2Vwzhp1izkvaJpB6UxUmXB563HY6xDaiVrsDqmkGWQddY88GDD8dtDiuLNpp3WCgZCaKNRQPCV5nx1oVqofkV4vh",
  "key4": "5azqt5FL4yaecAnwXXfHxZfyFezoBhErRBbHNPXLG5QdyrXunPDoaSi58qWdm6b574RFnMaVLBWe5CBaztXGaX6f",
  "key5": "3tt4TCUmJ4p9zoSVmEjSJi7ZugN6V57uvupqB68XqtcLSuEWqGskS2JcDoq9wicg72pAYd2v1u4ARUNV3hRjYW7P",
  "key6": "4BPScsgbZn7xuUnJEcYUpf6srhW3WfLqeTCLDYCXGLmMrtjfArWYeUSmAz3wssLUXxW1zx36mypjJz4jvq5Q4Wm2",
  "key7": "2dTHYmaLUKDpBbUqDCif6w3TkYk3W7vktWwoP64A9RPaV9p477hpH7KEgfeaZH1LRjteeQV5uRjzQExksJgvGq74",
  "key8": "8HTaUex6qgpnxHYwmgAE9GuYNpQrU6hPhdaZgsmcZ5ZkL37v1PTHhbev8pHTfYnEMU5KJfpMZxi1vzHB1SNb7zY",
  "key9": "2rBiFYa2XmWaPM4Hf8fPrj2M3TQpPFAEwkMyow7vq27fcFf4jKeu8JL7fq5wCFyPKd9hmfR67w5RzE77NLngArJW",
  "key10": "4FD3gT7QRDMuiEBgUWvbUgAMA5Z2A54AqRgwstrEVdJZrvmeJiMFB7mfFPXN9DxsHAsrjJsQAYUBn4XRKiSBww1H",
  "key11": "2v7NaFHc5BVCb1D3NVmhRtrjQ9npP9bDd6vyFfCkf3i1sXakqtxjzdAZyZXyYmc5Wh23xgmQW5mmnvTy3JR4GYC7",
  "key12": "2uZsuBGxTYByD222JKahhMpSHUJK6no6gBHmCSXr8ex8radyNNp8YEx8J15ipwz1acftD2rcSrFCiMizmdTDSDdC",
  "key13": "3vuYfRbbQDoz5dYhLqS5KQA7w74LY7omivwzak49t8oAr7hmbKrCwEMfHcSUcjqg1VwzekL1dbiwni35jCJwtiZD",
  "key14": "24xa4q9pQpsouz8wwk3dXiXcjY5suaM8tUVWR8xxNzrd8DtHoNyuh21YFK5MWF1huNbf8ovx7oz7HGpZcPPaN9yT",
  "key15": "5ig4fpWQ5oj8RY4Z8bnF61oVHnUmFtJFFb9aRWMihcfUAxU1a4Qs9AfUhUAiTYeoncvKvwCxU3me4UdQcKkuy4k6",
  "key16": "5ojsq6qcmqhv8rq8fBQuuv3uMvhcERwP9Ags6v8w8wXFN47agJTbr2tFkdbfmo2955gNAab2n3bDVfBD7uUiZ1F3",
  "key17": "4dRTJx3UNsLsSGMByfrm8zeSgCQnok8CahcsxUZyNEQXfiCqtja9qtDeyFTrqdjNprbGobtH9yjRmbgihL5NuFdN",
  "key18": "4wM16FcWdCww7JUDxu6X5vH1FYGYx8uArj5HTde4mX5BMN64TSDjvZpSfTbYnT61CnVkgvmfzKPii13WLwCNQcQ6",
  "key19": "4KqDFjjYwVHS6AxTxuqH8A1fSzahshRLRdgQfoAVMADWFJk4CBbPjPykw6uAgfMmv5Z48Sc7rZwUjC52kyL8c3Fv",
  "key20": "3EwVGRh6ep9seZxVqRSBd5Qmj35GLK5kSMoafMioUkaE2nX65F7XFURzrjsSzvuntsg9iUbpRgSosVCedaj4M8px",
  "key21": "5wdfGCqSpQE7tAPzejfGPMNJafWRgSjFXcFN8ZuvJC7PWnLa6YFUnJ3HSuroZXQz9baYRVSBm1QkMc4wuUgkZLsx",
  "key22": "2SDzhEhRKqicXK4GZXUi7aRWtF5zp3xZeGiG8EWMrMa1c4z1tZHNYijQf79MM5bvAunEWWYNVVUtnJbGsKXhw58w",
  "key23": "2Boo2ufTFqcNF1PJBVBuMFZoJNwJ9FEmGLZG3qhTRHH2CxtHaKaMNSsR316zMvYUvt7JcNXZv2YZaoLCSbWUn9L",
  "key24": "51wj7ptH8gSbjovtvN5hEsMTXN1UfcP6X4Au9kHxvG6XTGu6bC6vjR6QTmEWiFfKn5Ax3XMSKcqyVsw3FeLb6jFE",
  "key25": "5snfHh52ZXgShg6FhJwEFV92xjnnfGwbCWLMF4yfAPEhy2ezcbuSMV3FPvL8yYBVeVwfou8F5m9z1ucQ23ZX3XUF",
  "key26": "2EARALSYFQHK6S5fkHGLhxraG7NiE5PbS24DvJfcCYG2uRgTLBqJ5V9ePs7izCPQEHCvujLx8T4GBz6NqW5Sf45m",
  "key27": "4XAqYWPVp2L9jrNPWcB73yku9Mh3AVr3x6JANU1KUCEpZng1aKBaKWeHGgRney9a8dK4XTR21EUfyqQProbBLhCc",
  "key28": "4jnwF2VySzR721hucV3VRUR8GJWbB9wGMxEd2h9BnQkfC7r6pcJUxzZMBuRUPg7iLPJpLGiFGGgc9hoX3Z7sZusy",
  "key29": "2CSq5EYLJ1RY5kbvx7VrH9cxHtfiEeWzkKygKk1KmUbmmdkzwbDPN5afwv3L2zvyjR6JsGMU8monZAFCiKDadiA9",
  "key30": "3w8FWoti1Z7GU3sRmWEu3qNYcG2CyMJ1SyFswosRuSu14WkVaqxazN6fsLsdccjp5XN1JAMjaDNnGNpJwrr4w4nZ",
  "key31": "3Ds9sh9aEh4JKEy3fT9h2qB87D8kqPoPxJvuzVQExCKNihNnAi3DtqAFS3U5fXCEcfq33VzqiKwgWs6KzV9FQQwt",
  "key32": "FQT66Wto1SYABxhLxZbkd8EqJRjj4YLYPabET9bNByQGpPNad8g6bs4S6QJRWJEG8CS8aCUnuegEoUQGMkLrBkc",
  "key33": "369dGkwqcdvUNmnxxAwf4tzsef3g5ATe3YaQNF9SZHpmPvTHLtqc8BkEjYcjQb6pXHMNXkhLNWBhjsMpcHBCBHNY",
  "key34": "3v53Bj5in997jANte58eQ3BvGJhiFDMbEpRu78m5TcEEREq64QSoRwAhSAUfw7moELcSu2nknNsYzvvLVgjBCu61",
  "key35": "3NXRAjD7wJLm4t9HMeiWcyoQTTgcAjLq2vdVuEFhutVg2ZmSJEEQnDVdGFofkPtoEhR2R4XiXSKCL5TxmAbPbnbC",
  "key36": "dnv1QrLVKce6kaAE9sDbC63Dq2LgLNnNWTCie9Rshh8qtSYRfxxRtNyzn3oxHZLhMJbKG5PmyyS4iktRMtPKTMQ",
  "key37": "w1WA6ztp6sE6c5TZqhWfVG9ZidW3NHoDyRqLAYU3ryfs1dd454MRMwtagnXVyy64auQGh6Uz8bnU9bjkhRsrUSt",
  "key38": "5A8HNYdKJAz5nZzmXXCh4aJ1UgU24D7SQf5SJfjYZETuVs3gyqJC3MFsbfTsqDCtcwqNaaMWx8DvzEcX1Q1fkX3t"
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
