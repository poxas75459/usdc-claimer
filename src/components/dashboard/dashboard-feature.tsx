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
    "5uwSzUheSEgUyJuTakZzdTrifBmMothsmhfX6yMhLqiBGbwTdKJEyDXWYRKEQSyxKdphWWEbHKk1i9ny4di3Ba1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyvKvfXzWFFjr7t8iLSMkyYjHZ4SHLatt18h8RBGRDsGnSFPj4LhKGKYzDSYExMTWD9cCxy3gXK7cByu5WNoTAD",
  "key1": "4kMp63c7jfpkdTGYQiQBJ5Qw8i3rcaYEGXyhixdLtehVFwTkM984J1gRjd5uDT44NAwd5GQcD7JsmtEDsJyEKdpR",
  "key2": "3nsgUiZNGWWpz7LUgZ57mxgYtjtV76pJyAQ9xoJdYkABdXY3ACMGhfkQTBcpPNYX8TjX2N1HfJGYM3e5rcArzCFX",
  "key3": "5LoJW1P8YCAeu3xBJzHoQuaAK6g7peTqivqveYUCDyUf6yxa3Hd5kg5nCBT8A2kzvXUpm1iudqi8gHviN6QyYSC5",
  "key4": "bbzp9nLbKQeQHhReTo9AXEYmaJNLjSp3FDtCmr2kcj5dZycEo18h5xLMwttNwbjmqCz9xo1Y1jLMaj5qwC5ELBA",
  "key5": "3tozbeX9wpyn2UwUfBfZ86fKWW743Yo5WLpsWkBYARGsAQryfB6zYeF7rAjt65gaZoCqhb4C5dAbPjQj7X4h3raf",
  "key6": "3hXtkRufzqnTVtDZYcUgJzvKxFtTxsqpTtf1ZCbHT8N8uAh5BspqJWTVBJ1eHLdR2ZNcaadbrxKYjBHDAKbwfJEy",
  "key7": "5b8kNGNDdwnNUNvmYThCnyLy9qGFFPSNBnG5VgPyFaNmdXgyJaGAnpAaCyEm5xMDXaLaFUCHwLJocuHHD4JnsF78",
  "key8": "2kN5eRoUFh91u7J5kP8N2MqXSXGgvFSNVmYSberfZUNS98FEwX73SJkDhuRXTJAWG2ZLSftnrQK5UJhWagmZ5AyG",
  "key9": "dj7hUBaqW7r7VLBz5t2aG3yjrsuraFTXMFxuYWvm1GSxPMN6uih7YmhuafaB2Voss1aHJmKMKhxPh2hL2Ahmy4e",
  "key10": "3Y4N4YFRj9Jz9pVALJA7F58URDMsQJXxdHhTNnXFE558UQJLEYWjw2fWU6iaoCorFpGnJ5vWqwxypVrSnr2sKad1",
  "key11": "3xyKhSMv4AFVAKJTHxyWcQkfpZSvKjaxuz219VkyUhcJcbrcfytSSmkfiUezudo6RJNQd79hxr5axFJ66AmjJsb2",
  "key12": "dJMiFXxca448sfMrsFwDrF4VV4ajgbPkFppj4mGp15KjH3b1NHfNSGDTngG9gPH2aTM3Bu5pU1idi3VC7zE5tMu",
  "key13": "2UhjWzXCE4wsnWT6juWv3Tga8y9xVT8MyArcKEmLnWvau3psfRuzjyAoxLSf4QMiEqusQYMNZE4VHCq8QcVHyjYR",
  "key14": "4eha7jHJEFBxpTLRTgGF2mB8RMJbwCuRUhV5RNRV6zumGxTCn46KchfdAtQU3LExRzGGKrwyhK3exnoFoSBAFMbC",
  "key15": "44EMLLJHM2pFej15Epxa9mkXx4boCV1ixyF1X53WiLrWEVmPgWasFEAt8jnZoGx197k1vCxfKH2CFdb1VBXhyqqL",
  "key16": "62fHj6mS5V3tJtPC8o6ConfJWFg2kodidLCroKdRhDxQE46YremB6gHCs99Aaw8VMkfkJucQ94WxWMpWScQhw8tq",
  "key17": "5BBL7RzhEbzdxzYQoWMPM9wAf4FTgRjK3bcQVS9HRZaDxaotZXtpuJWZbUEm29TFdnWp6K3oEF1U1FFiqDwzDihi",
  "key18": "4S2jf1BumeKkG1fJ2fpeEbcJNsmFvMfhrKK7rsSUU3M5uvymAmcgyB2ZU7SJBeBapvqUGTieobrtX4XhTSnJ7DCS",
  "key19": "2ydsc8ow57fNS7Eka3NQRe4h7eaUXRgcfh8o6mGDCqeASnNbZtP6FsRSfrtAt4qT6WcD1oX96bqFu42fvcBZ6qFC",
  "key20": "258xTcW29W2Sz4RtM2zRAWtu1487VxeKkEiaaKksADQmnSd5t2MsDGf6pSxJaPEkKn7msDm6pr6fiUziBWwWCcTB",
  "key21": "3A9WH1GRZ7vQcNDBnhnrCLCcdcvq7ucbJWqebLKkfKNVB3pAC3XLXajhvMtFspZxjMctkkRuSdKWETaGRriw3NJx",
  "key22": "RFzBGV9qeMV1TYAKCx4iytQvBbEGfA8MqgoWHpWjuzdvn2twNZ6sAXjRxsejY32q9e93RmpJvQK8sfWvTfvnPox",
  "key23": "28F1FGPjYbpTPTDjo2ubkd91GhTvyZqH6XAV1uitFTKAW8t1K37ZtprLyT1Pn33jSBpLB1PttUgyJnPd64QgcmEs",
  "key24": "4EBiHo1rXbipy9AkidFAHNQkSYnMvMvWF1sDbgx3C9eFMsarrfz5FcaoCpL2dSAmBbeJ3KxX41MmdbZ3oV5yNDUH",
  "key25": "2qa5USo2t4r1hj3gseac6YHv13jDubEfXziNhtoRw9ZhjPuvEehtiZMJkVUZ9JuHxzcxC8ytYoLBAPpZyUmaKta4",
  "key26": "3BZrsuLtMjFfR6BfRzNQvzPR46Lxiz6C2i291HBfmNPrwapw6ZqKGe7o9CA2W6fqdeqXdbTMn8eYQjsfU6pWecyT",
  "key27": "28LagC9xnA5wtsff6SqdHnHX6EbkTgbVcpZa93kCZcJriAp5m2LZisgiSyQaVm12Lud7V6JP73PALBdK7iCS8iSj",
  "key28": "3QqtgRnqHimkbejpkuwopNCSWJK3GYZ9intkNne7vtJXRXFmp29qWfrrbm73Vm8vYC1PjNGxVM9jdBRJV6TpAAmY",
  "key29": "3kTEtqTBD7JxJykw69gCsy5JMBtf1b6fd3qYSLvvPo7Yr7LoXJPShdJ7M6A1ZfxFXiADMJdswfUR6hZdto5Nv3fK",
  "key30": "5BQi2n3xTjEvLNoWzYmDWVcMAvVoaHpmYgC77AutKnQVi13phUbrHoikvCojEyBEAqhfDk6qx4kneXY13dpn53oX",
  "key31": "3PzqdrKyWcZ5KaRtKy5R34EfBYoNDx38MCMkPyEmuYqp3o3z6pFFAmMLCjiBMxoBZmZVKC2958QQ7wVXn8EgnsYo",
  "key32": "bj7SK6r9yYcshvM36Kf7WnhMESgy4W7ZXPh23vexoJmzjzvywZJ3grcP5wxUmbXHM4GAJSH8iqsZibgB6chR9o5",
  "key33": "5vdobBfQ7ksK5Hh9Z3wE12GAnWiPqA7VMcgpxgQYk35huZbMEHFT53gwhJwELGBzeRmghDL9qM5ed41QpuoqhqBQ",
  "key34": "qmnr8b1AAHqURMtRPSoyy4yQ7RQNE5mtHWnR29oUWkuWUTDCNBYup8RiHGimjTc1v5bHcqajvnUuZzFhdfFiwjo",
  "key35": "2U918sRwhZM73oBaHkNwqjAX1tdqwbq3ZDcVidn1we7fuHsmWUDwpGnoDGXpqKAAFBF9zQfVjMoRbBWmDsPYMLvX",
  "key36": "9iTLM6gFEEGiaWsCGpjxVgQjHiVJDn59B6oTpGJcopgsaEuhHus8ukzeLg5f991Ch9iZRTn7zRRRzmAFvfn7GhM"
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
