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
    "4a1FcWdNbhmjENdyqiTZUBB6FPb8cFoRpDykJVmAarcwhn9gabEci1VbyKtAsomio94H6RS9VuEgnY2bsxb2Qvbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DD5n7WcdLRDZ1dHna1ZHj2gjV929JuWDDU4sF29wJnpWEP2tV69fWmpym4AzBrSqG5qJRxpZBKg7ViCaekMNprp",
  "key1": "jR5xGCFLJk9dQmApS1z8zTrPbrt7pqSyjUeUvFUNNqHq25iUCQQciUHQ6VVEqP38dU6scaaQ421J5SLSCv8CDy3",
  "key2": "3e9wm7VJoSC2eVFj2fm5vJvYo4T7RqcCLZYaHLPB9YpAR4PFNoqjHVC4d1EBFaJx5QEmZ5V8SSdqwqBTzbFjucgk",
  "key3": "3nTjzQBQHcx7oSRTFsLQvWBEwy76Tnhq2vs1ZtvWhKRituex4UjbbH7LW83gRj1pafVMrPDG3q4QpYZtoeHh4RkA",
  "key4": "4wYkE1VsG6pUSNASJbBfcEne2JBbTdUsunaLb1GW4xFPJStj69SLXyk3DfStVcM2vHmoMpemsUgrVQdbX4NJxvx4",
  "key5": "3Ng4PgjAGvgjEA6zNKsT1AkdFKhKUNbMQasuRwxzhBhVs17D1iAci2RxC6xA1uBCFQjzVyfLNGiZdaY7HwLBUR7p",
  "key6": "3YofuoKm8yRHLajcEgf7CsL8oA8sRLahA6VyMfDMgY47FsdvanBgH3hMyBqRVF29s2hKrMJekCg34YctuxFmN9hi",
  "key7": "2FBazcTo2NmxDDHzFBsSrm1ByFNiKT1KursTpxRQikr9GSqmGxRaAXsx9KpxVhuafsCjq6zfih9YuvDwjxGhKpWY",
  "key8": "d9tSqyBMbPnE1zoT1EWayRVaESkSJd9ZcVPhigDgVgcSsdKGPVmBeFte9Qy7u4MW2JofgUh4tEFwNbQBVw2x5oG",
  "key9": "2KdjsVKnbwJDK7PCVEr3xgmmwMqpBXyjfRbxsnXPMZjstsaPeufFW9jG1Ga7yaJ9NcGvKKSDTjXM7Dag6y1xxYXj",
  "key10": "2sGBaMuAZaZpg6tUk9kwoymdXJU226aNwHD2YzDgRtmVFUKLagRmcD35NezrCey5TZFWcsTSt4uHTfsZ1aXZn26J",
  "key11": "3zUcHmmsTjmy9z8xJrDbQSa77AgE3EH2Jc5BpzZzRG6S4GaLxF2TrDjUWqptdtGc1iLmziUNrxBtxzvvDjmTTK6m",
  "key12": "2ZUU6h84vsBWrRg4pHYH9LEXziWLfewzQHzeWwiM9SNkxWAiQZfHW1qzchLiSivmqRm7CZZv8BY2usKf1EWuwQUu",
  "key13": "3s3cgvwqQ1YmRkBRgsKsNFUzz7Vm8ZZDSrUhm8jZiu15qcmCR9PQxszEjeaKyio1qZvLSN59hjSrDMuWsB5bNRhk",
  "key14": "2H7dnL2gkcmqDYvaYbhBReeh5JNn1HUS1pLzA5X43UDxJAbG6F9xwnXxMfUZhPod1hqrsnrDNMtY14fa1ZZQ8AHn",
  "key15": "2LFbJMvq9bRFd7v265aSYQiwWe6mGTduj198fgtjmEgqik9eSkm5t6AQBxmdePK9UTB63UHr414nRgohQFtG3u9p",
  "key16": "64wk8shnLNMV3RQh9CuhMXWeZe8BrcESUuivtF8ypaUvCq5Jtj4vbC2Xks33ARonb4JGJZ3v2kx92meoqbtNRju1",
  "key17": "2zNr8uZoi9RMHf44z33ezhD7ce3hpDmMksnn6gaMk8JoThK9BfTai69igjhLWCCobWwRmYGigNSPxEujwviBFf1K",
  "key18": "3db1ifEfGbkbDBqbqUE9CYANtVL4HX3pT72x5hcDVK3iwnxckxNqHC46tXrCmYWQG1Nm1HJuArubgC2L3LvZaNmV",
  "key19": "3SqDhrQ17oxa73YnJbxpGRJ9SF9GUpUWbaSoMezNf1KH64HnpeLaA9kYX18st772dMRSwVS5jfcv4Tj76jBBbJiY",
  "key20": "4zNG3SqsgZDwVQXFju4vu3tgYeYn5VYu3t2jHQiTYRfg93XgCUCr53zoCh9xxD8X6CUXmmfh8kgXH6WMbz4PJrCg",
  "key21": "4z84GrY9DDeY3JAGnmV1unzTxB2VKj1x3fvdzE3XanLJwGd7nUNJohfrhsb6UjTzrZvPth65b5AMZb5NjdTMKmtn",
  "key22": "2SRjHhm5yxhdnembiesbfYKoHWrq8THxtXWmQ2tFhaBjgnW4oeTzVzZb8HrecorRGdHkizgzrHTQsf3zxiNz5HoX",
  "key23": "5mAysrfTSHuMDbQTyPRDi6SLkMGv1ZdMsB9jV3t6P3SerpSKVXyeqijqEHP5BGRDgDivjV4T2inj8yvXqGTjsvV3",
  "key24": "53Xd1CgR4gzakGCFon2isBU9v6UFN3gjh7dFJUd4FEtL7EWxBQxdBM48yLes2u7zsjnKfDikWEoeK6Dz3YAxEQ5L",
  "key25": "2PMZPhM92RziuEm2pWNo4DYGp4Gyne7sozqPK6BHbd7d9gXHVbyHo8wQLAwYYmRdtG8HenxLuisq5GQPf7fWKLEf",
  "key26": "5UbMupSRebkzQQgVc77f6ykwkpnvNYz5x4SLejRMNnkfvZtYyr6CredfztyUSvwR4UtA5tpLbUegqAEWnW7oqedA",
  "key27": "5poJxg7bMgeopDDVAXxrTsW5ZKvxp3JHAE9NiyCnbWM4Dm9QQcZK9SSmgy1aYL6BMX2efbF25mdQ33A58saFdi6T",
  "key28": "CdymAEngRZ3XC72BBQoamFuXC5VvfyJa97ssQm8AoJADYbqtRmhEQdvNnRb1AaQMCLW5upc9V2u6qPYecoJQter",
  "key29": "DUmKiENMt7TaABCGPRfQ3PW3Tug6o6LLErp8iTpDhU2YTMfXVJzdnqm3gSE8nvy9tCYGr3D3TGt4atzgmbXGRXY",
  "key30": "23bPCCLpD7D8pFoUheLZ4b1wprNCtznKtj4Kn4N72nkELsnRfdJK7NkoqsfBgf3BTuG6oiijVCici3HzxGGXXPLp",
  "key31": "4HJ7fov8MZzCGJiaQnjDnTNwKkBHPYCwUSHA8DFha3HsFKYfHT329F2Zr2goM59T9RTpDbj58UyQEJAnXFb8yyj2",
  "key32": "ffNYeyFnCfK563zfx9X8R6C9xKczScJNvgnELgnDvanskjCj5ivKLe9kci8HRab2N9HE88HyCsxKSZ99cfa39g2",
  "key33": "5CLcydZRkFeJL6aaZtYxvVnn3EZZfb9kqPoVPuY5KN2zB2JJ492bTjS9DpSUwuc6JDyuJaiFsGhsMmQ2R4ipkkwA",
  "key34": "4FYNavMJxPxue997YowY1Krr6xodWGif84S6f5jcJxyVsfaAor1ca4QKPSbiH2fN3MpC6CJL5RpJCPjtYzR9ZPra",
  "key35": "ungp6TC67WWk1VqktZ2TunEiNwW2R1Mgo84QNyFFg6YNbmwzkae3VeKszQkjAAm8KcC1kKBGiiA7MVhXTi1qMAk",
  "key36": "5rGCqFewPYkHBrnSqoycXHjRtWqprQM8Z78MAd82ecM63aQJWSoUj8WxBmyZWc2sdtodF1UF9DL3vuGM2LPBbJpX"
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
