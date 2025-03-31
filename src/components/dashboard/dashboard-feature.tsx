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
    "5dzbbmFkNimBJdVzryvGjakSoQ4v6hR8E34pfiCTcAa2ih8zDHedpsEhewknRDW4xnzg5vsRYbtmsgxLzBH8n79B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U59fQqjXMvEBJvLtscjPSQUgLGZrwgPXHTkD3Cpb2SSgFV8fPJuUpB2MxH66tyhyx5FMDQTBFzs63MPV57weA8G",
  "key1": "37DPHfVMu4sSFQceqJYWMHk3Pf1MH5eX3qrqxrPGCVg8SipbyfoTm9FSQRq9LCh6XpJkJoA9r3beX7CpFsdMPTR6",
  "key2": "4VzFfgfPYQumbQxLL9yjtdjDJ4aSKyzyzLLzvmkDFZTdiGwMkpS2GbVFm67jww1TNxsngi2gksjczmqHM4iPKgJy",
  "key3": "JoKDnMBekj1kBsUxNAwhEPffifQPa1pZdKed7XpqoNKtnZQtgGNefg7ZD5Hpm2nm3CZHQK9HA6cxov56QS3VgKA",
  "key4": "28BqfTpgdBPMfGY5HVHcPJUY7L7jR8ugozrcFaM2s81ah8asgbXMjYk2mLc7YTnADssXzjbzM639muTFLdwa5NAQ",
  "key5": "4797uyLKg5mHxbF4fK6DUQtkf2qA2kJXzTLofCD4Trh6K8qMoqVUAmC7zuqT6U5xGt1UMgbhHdzVZ5ui41rhSeUW",
  "key6": "5WgJzYCYUCMBMzg81zrxM8TkVUWg1McTiPtiu6miBxfo5R6N354MNW6RLx1L55VzE2Aiezy6rEW3SVGhWD95zA4R",
  "key7": "5jxFt7GBZFraynP6rWCEPYptTimTd7J1kosNGvujPDJu9nSDdSgH2Gjd1Thh4AKkksQ1gkEMeJRDW9GqgtjRRfRV",
  "key8": "2bnMxXCM768unhy6q8R9mDf82vx9UwUVncjSorhQUJayz7JnUrRVGg1XiHmNqmmzAvx6ojNEbTMtftmMfGdJecMz",
  "key9": "AjKres2TXG1b3DdzBC1vJuYXhtnvrUD37fyZQFM9K5Df1cfCfSnFVp6xetV216nrscR2CNn7aTSq4T5xXoCFqaw",
  "key10": "2ALM9Xarx67WYV7LUkrxAQs83g4V7tApo2PNUaK9Z65ByZgNTYqNpBMB7CcPQdDRFFeUBK5ZtFdVzgh4jRKQFVFA",
  "key11": "2fXiK9NUhz2FnHEuZRWhw62FkLdqnsn2RHZxPFwtYEtSqJdagi1wpakHnXTHuCJP3P6FGd9nSZhxdosMYatNhbWU",
  "key12": "2Qy2ScTdLpE5mFK9Gk6H3frB9JhWmZpSV2wj3o5Ueg6Y1tEHW9DNUXYWosHL8EzyCmUqWRS5khEpn65nyVj5Huig",
  "key13": "4Eg6sHRjARabkudBHhpVmK48rvwnwTdmcsEpF2MAgGDbLJSavGvxFuJBCFm1qghHKMEuHNj7QmozgU9Su8cG4zDd",
  "key14": "5qpWctfhhAUujgu7S2R9KtDgcDFgdbLxdpcHcmdBCo1MySExhL1JdTKsEqGf1Fhw2fybJCjpUYSyqWJNHKRsrcdq",
  "key15": "HVJNquxTBthGKVZaAk4f9panAHR3LddWyVJqc5oGycro7A6WzHqhVJeZ95AXzixTcuoaL6NRdUyFoohZhMehVn4",
  "key16": "5MTCKiYMRD7F2jy9fjR5BvRCijNXEhof2okJ8bd6o2xrVbfFwBNunazwnb6o5hY8CcZLQeMH9fWEqZbqgPpKkTb5",
  "key17": "4hi5gbPzyrkLbaarQh2ceZ5Bg2ArWh516Zze5anz1rQR3rVZhdrpVWbc59tsRVFk2UDh4jC7piT1zchJ7oyMNccU",
  "key18": "nRKnTeaMzMJ6zmN8cspULukf517wnh6xvFzQyPMAd9bgPu9V6MKSiE4EPLmjxcA75JMossvZFg14z5Lx9E3T4pc",
  "key19": "53uXY3uqXo6RctqoJMU8DyVAhGeTocy7TZmUbGyvQGEer5bUBAoHam1z8sZi9DmxQmvGZ2xeHjE8YKmn8mdsYvUu",
  "key20": "2uM1TSEYiBwF3SgT5PXyaukR8xKtuxjzTs5a3EjFvCtRjBCnfS74g9ucpGXu89Kpab8m7ct3cNknCbZngowmxioC",
  "key21": "4p7UTdD7fqkuQLjEHeYqPuPHA1TxUrWPSgkqTRTkLqXURr1SRVGc9K6T12MbRaViDmXB32eJmzPGCgsv1uEwBHvh",
  "key22": "G5qa5VVgAwQ99BtxBEQHxwEJ3VxzTcTsuoZUHVhmya615xGfXGYtr5A6KYKBymxUJBaJdPDNESTXEVRVCTFYTBw",
  "key23": "4PBzKeoh8PsvxbCxoDqMnp5D19AESTBef5wGfB3Lr5QHNXxztcBpD1HbAVJvg6FittEq2wBRtmEMUoLzRsnSELgj",
  "key24": "4sxQkdk7umDDXjgYSVo6YaHvEZMGj3eq1BPy9e69Fs9Ak2PkMPwfrDvzm4i6Vbk459LaFza3Aoy9oKSLf8ch1dNj",
  "key25": "2JGd95pxU6fFsK1W53v9y9V9mPWwoWvDTFvDdnDTa83F4Qg6tZiej1iEMfJhZj3C9JM6zxY3B7r41f8ECYKTGDKJ",
  "key26": "3JuFxQFvv3T8kmaWPwV7JC27uDuwYweBPdt4nb12iqK8EaLmPcKbhH2kamNKDpbSqU8KdTZ3rYKAecACS6VdVb5E",
  "key27": "LiE3d9KK7KgwHzN57FHp5ky3dwyhA4etiqVhSeFYw8iEWgMmCwogeSVbhoVGvAvXHH7B5pcPvEU9dXPS8jfaRH6",
  "key28": "5odot1r3QDZmR6neor2EGXLiyteQuuskPDkeAVJhrPKsGGQnTBZpuWbbddPHj4VJRW2wPvWWJLyzsBPKU4zJUN37",
  "key29": "3LFhkDfWSjaH6r6QFUGSHGHaBD55R33JJZeXAaaJUFVM6MFL2cqH9ahqZY2PpfXEXwL5Ke8yuZseZRXRBru4tuBz",
  "key30": "5mrsPTQtgYxNMjmZBHD7py7jEN3ztsJFB95UBan7FeUTYYrv3QrCCpgPLtmeapNbDM5DbRn4KLgFMwmTPpT8iQzM",
  "key31": "2S3RfC2MgASkP32mfHUmTTvtrQTtorRowUfUy88zjVTN3tbiTpVPNWkCddzufQ1fLc7cNioscEXVT6NDaXC4JvKc",
  "key32": "5KVKdeaS8DfFWrLmgxK2L3HhhHeHGZsm5DDPSetzdw9vEhmAUv2PKEwQBxqxJELnmUUsMFziQ2HHCohv2UFkPRS4",
  "key33": "2fqJPwk5v8k2dGHExzbmueo1Mmwbf2xNUXyc4S2bV8o2VWZ8HLn6iaH5qTZUrnVcZissKJoFP8VxzhkD2CDiAgQS",
  "key34": "2w7G8hoWWXbrSt2efKtBWCDwxEpH67sxhtqaf5rSKAMUSWfCuCzpcNmkXgaMa6AqPr9TCGL2YZmJdFJ4H7uEkxn",
  "key35": "64fuE35padiU4NkSimKqwR23bue9cTVN6B7aJCCiiucgPjNLoR7pR7ZhrARteYyR6G2DW9vdppkRCFTcicf1aN57",
  "key36": "4sJsYqkmarGhaWq4GuMQkR8zHfo2Hjt5AyddndYCJaXxj99EvuDKVKgreci9EsUpYFaGgX7AdeBpC7gSP7ftqNvm",
  "key37": "NbMNFUeDsvrqGjEWvD7XGNFnYJRnDL2GDYqYsXpyWyZ1dWVJUSEReqf9XWwnw9ZvxjsanztLRk6KV84BcxHsL4c",
  "key38": "kX1goWjGNhFthUji1tUdESyEvyTGQNccxkBB1SeSju8psZutiwhTLwbGrqSN3KG9uZzAR2Q5CPWuYeoGZHRJnEk"
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
