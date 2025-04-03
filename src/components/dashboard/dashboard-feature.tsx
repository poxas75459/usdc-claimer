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
    "4qPx9p9ZDdkSBab4kdNLfnThrgYxCwYYefFapKGZRdfWhrELYWc6PMYTnnbTpAzrP2bc1nEb1tPuNxu8N2SVRqTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoLvAsenLUHF29ghYZERh7Vrx5Am8VtdYeqCcK7VnvHTXTWBcvpBJvyRCcxq1kpSB3hkaTFrugttKcNupTnFHhb",
  "key1": "5jfeuB4TrKuLF4Ve74XURknWwkpL52Nm6UFC2P1TYqZVk2eC5334iN7RUA7mtMmYzFB67M5Ck9a7ymmsypQZHjnP",
  "key2": "NqnmrXRRJdZCMGYKJMMGPsxLbUJrqdgApiKuWc4QDjBhky5jMZybMNX5pDbrsZo8e9cto6UwJgB27gktWvZtxto",
  "key3": "4q21ZGmbijZReFCxpYVvZDDddXaBFXJT6tk4XQJavUVmpiLCMiN8krrRVNovEsk33zHkTsrSKy3RCCT1KjXLk2p4",
  "key4": "5zVQuerkpHM9KRVT5zacRTztigDpRiuTGdQMXgpmS7SLeX3TmTsxaDhS2EeYwaQoFjwPLKbi5EQffMpXd72mvNQj",
  "key5": "5AYqFBmAz6iU1QHfnKPq6Z9qthUPCNL9Qxqd5w2mxkRJuuT1Rijus7KsjtdVewndtJsqDgVHfMv4UPwxEtyyLA4y",
  "key6": "3gdMG4rMweGWQ6zfh6JtDvzW241m3yumaZY2ECshUUewBBEUHoqCVRiVd5rLX26renLraEnrZoF8KZpQytbvfPAg",
  "key7": "UjR88NCNY3jCtKjyJQ4DrrAENFSaczGqkbav7GF3x4CTFtWDY8fERCqSRKP4GcSFSiRQ8M3k7v116nruySLfGDq",
  "key8": "2ud25YPX9k9214S1WKS4i88seMLUKXWQqqv2yCXApcHRpRkf5k9evbBYQXMp2jB8n6TkLGvLz7LqWSyu6mZ6eKyT",
  "key9": "2EjFbubJzTm3qZQNtk3FB8P5qvbL5iR4usbCXZ6FxTu6ZfJhZyHR4nf9qPiBGqU8Wrqk1h2wKdaf33SZStjGoMeC",
  "key10": "2B4PNP9RCDW2PVJu12Q2jcASiq1RqC6pow58fGA5SBqxA7Nc2SuhKZyeY3hLCVFCX7cpjgDGZmEroSChyvqXL7RG",
  "key11": "63BPBC5g7FKNiMDhKgpFe2kBrmQwe9Vh2kGt6i5PMb4WjUMArQ1CxpWFRvhbLgVCBnSbtNs9nA8RUjeTrMV9y7KG",
  "key12": "o5woxh2NXhJ6qVfczeRkzDxsVGESSYcHoKXe8MpbM8MxVLcnMpYYkM77RJYTWHJzs96L64JoG27pD1uJYzqtGUk",
  "key13": "63Mnm6UnBikPJLD5SAzwAckAEFgE2fcU8RVmxFhzyf5tyEEvJexS2qvmdkaqAHTjtPMjd8viWSdFKMR4NpkfC6wM",
  "key14": "4ge4T56k7wtPQiXLzs7Z2dCXrXQUnwmKRJYgoFcqXKeZAGvQAFa96dS65BB9TR8GiHpEb4PYwXv1S17kr2pP3r68",
  "key15": "4Cbr6upCEYsDfB5hL4zhNG9LtdsZEvwzWgKApXKVEBPhxVsKdfMcDD1EWiTn2NzykHexzR2aM4GwVqZQbFKghNcQ",
  "key16": "3zZgGYetUyMPtPZAfQigbPbfdP9GWNYCSYZZpBN4UGnWdsoV3QsyBAPScBBb1zjZ4asQZrM2PisM5Ue9gFC89NTJ",
  "key17": "2URMsRrW9BKmxrYptdVBEfEkX8hSDp7qDWrvc1wmuXz9s4nhJyXy2C3hUA99A5ByG3DJsghEGz9AN7Lq2CrfVr8w",
  "key18": "5U52StSTaMtwCZ2c1LWigoMQREbe8m6aHc7q6LVSobphTgQ3YtdFfTaoCJ21BvGrp3d8fNPgYK2N2gksFZDGbiDB",
  "key19": "2AP1wHQcHf5exG1b5eNGMtrB5xsHU7U8JN3tTuK7VDkiXmj5t3YJiymbb79Y9eZ9UAHxUtK3rbuXuwny5YMKcRy7",
  "key20": "3cjrfqpXehvjNeY8RhTthXg6Kta29Ze65Goxbe2MdsHAhDASm8pGp5xJniVZSSo5CCaDFQbFRFqgEZcX3j6YxtTi",
  "key21": "49nAHmGof1QfDCacCzhRRe6grPjD2CknFUqrT8Tg4UL9Aa8eFeM1wJdaMqLMTpA5jnC2iok6cL5uoT1hCqSR9E4i",
  "key22": "3cf13mVoJJi9wxmqbHP8UWWBYsvZ5QEvyb2kpgmrrezXVjkpKcTx2y68tnGd5bwS7DumRoHgMZoJaCFF9nqEneWt",
  "key23": "4cMPjtCanUfUHcynMPYjb4uVVomHdxhQSUTm8mEjwEommVLFWCN57ZhUHT4Trdqi8AwV5UwxwpLGg887epyYhNJq",
  "key24": "4NA3BTsC3pCAgkaVf5PjDpzUUWRcgCiCRk45aQkHRdxSDfybJiWtRyYFSF8yN3BN7SvmEveeztZXs444fBTKr7Ko",
  "key25": "2VqRyu5PUA4LwrUU8ZkQEivrDDN27uXc58ALyW52aJrG9Ck81yT4ReG6sMMKStwXKQTj78irro6FHFr9oZu9n5Hy",
  "key26": "kGM8ttJvWEqc2amsjGQLDQeQJmRWar6Vsid425MnHDxvbaH7JcQ7yfvCrsNeyjq7mQTz9Twi2sK48HmR4gGShFG",
  "key27": "Xfcog2GG1LXC1WHr8SU9Ro82NRAFGwk4hyyFjtLR2PjnQWHaQoQret3664WeXzad3Cdi7j46V2wPMbBaQUyZ1cE",
  "key28": "4mU5UiFzeVFdxBReWqDoXLfxJT7RqX2WjLY6qGzXeGFH4TsGuiQEueG2uRnT5DCohZyjgPJY2sFvi24R9vKoDKjd",
  "key29": "2cmu4Z1o3mDyprrAw6BBToAvCSNyQdpvG4rcMDFE2mW1uko92whhN3Wjo1cjYuaQVFUxiej4Cfrs2jvTG2szZnGz",
  "key30": "2CtSbuQMXJ24RQ2kacjLud8juJjGNYXYcrmKUoXSPTEVcde3i5tY58UdzmHAkq6ihKzC4YyTUMYNyTLHjPsF41pc",
  "key31": "5vCZBuRe6byDuJdaLB1cBbybpNxVXGw5EocdA4hUDbM9DNc9YcFLs3sivnBR4FieRvufAkZkYXknUGJ7xodueenC",
  "key32": "vaUfhNgj2ukep1w9z6uktADVF1U2r5PrbTgrDUd6QAbRvfgP6dq8mtBVGgXCVLpXmNsJPydQqkEdKKqqFgYCA7w"
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
