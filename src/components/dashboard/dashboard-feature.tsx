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
    "5Bjv8zUvGNXfCHYUcFTua2BevMS9NHWoqMjdQTZtyojXcmxzvgS5bdbJGTt8J2KEGVKZtQEjghMxWmfiWiDxuK4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQm5DbFKrx417N9VFnGpzdTfn4gyMih4H1QrULpfrcs2Xq3W5t6jV3QmaBcMgGwdSnUGyfnrf85Y3kWH2GFS59w",
  "key1": "56yfn2bMVava7hWNSfGjWTy4CDbV26c9kUKVrGV3svtkJ5nk8niDpCEitQa2TGUcoNQDDMYeCW2Ewj6grhDnkcCC",
  "key2": "ZASuVRxxSAA7ujTDsPRfipjjaRka2T11gGbyV5T7ES5wPaEc6UL1c5vLF387k4DEdqx1eykFKuEaQ55cBUYcVKp",
  "key3": "47GfqjvDsBt8wbe1NM7ZbBZ3Fz7uZg6KQ2EpqndWoUPB6SqFPUR6Ct4RK5ihNLEsucD92mieghLCAu2CbHjzZd4H",
  "key4": "3a6EBFig2sq8vw73cZSyAnpzXroZoCXNgj5hWFgogAKP5yr4ZGz4BD355zZmH95yh5UH2xRB7H6BbZeEwDd1avBs",
  "key5": "32sqYVAW6mB6Vo22hsSg7dvRd96PuuBxXrn6FJCi2dVbqKXfbr8Fbp4a2B79TfroSdNgzP4BWCLy23MjWKxeWdCP",
  "key6": "641VVDUAivcydwu2hxFyY8TsSxCjsVW7xndc8BHJPEQQUN7PFCefP8ZCu5ctKVvP5a6iNPJXKgAiuyCmPAY3TPGj",
  "key7": "3LuAgrSoDbXxEChnbzccX7wQELCYfsr7bkyrqq1bYUAgGRU2fo6QgVFMfWoS4AYpegjWa6zHKN3Q4HZz9WkqFrDZ",
  "key8": "4u33aUUCmveYWz2VWTT6dh8r3TXu26XyBw3y4eXfGVfmBxrmm9DduNfX7CM5rcQjNQ6hJynKeknhyoPs13AJBLxQ",
  "key9": "1xK3SFUxzeCP3VUNcd9XY572ZqwbhKNgu64vmcN6MPygiNGdnuHWAzKHJg4hq2kUwduwSGpj3cg914zTQrViJAV",
  "key10": "4usPpsGxpQAyJLxQ5okThi8XWh17Jr98bNbtjbKpiC4VmmkU31SwTnwZmrxVrS9FmkpgbzxPCbEjaus6EZbSZKhB",
  "key11": "2as7WEXYivDkadPE4WGmhmV8CqaAZdsGNTeiApLw466aB8NGFD5LHwdSFztUCCaCD16FFBvGGQ1PLQKAMdCFWAKQ",
  "key12": "39Wa27dGDQsoxGYhUwFMRqsceAv9TfhexSaMy5ERepy2DJgoZTxRwVt6eH5q8DTPvydCh1FqZHvxHeqFC87dDwZC",
  "key13": "4WjnpMdQCVDAi3BkHKhJuioXuSfcrk4YgSrWxHKz7wL4XN1xxmjKmzXgEzQnZ8fXJCJBU8Em7xM2x3TJSFCTK2BG",
  "key14": "3Gnk1urcUgJnm1jiUHzYyBQNiMXdvs9mG1dbEcHJzW3KFXEwbZQfBJF5GoighaN8omKQ4g9iVyMJM8aunVGwhDnX",
  "key15": "5Lay1rRgjSFbxpGSfxuHgZkh4x6L8phRuNS5zT8bWv7pK3Q3b7XWCBYaB5nJoVbSdS5q6np1meAcprS832398tCo",
  "key16": "GDwLzAZyDEMH3TFEA2ysXEZ57pzRdpfEfBYJ8gHgw2dZM8yoY7vLdyiiWSrKtz8HahLxTbZEjr17sFByNTn3VpB",
  "key17": "5zF4dHnCcWW5M1Zi4rVw78KCip5M2PEqWVqajwye5AwDYqovBeQNh6PeQfWfePSJx92P1ZojvDUPpU13KWJ3WwV4",
  "key18": "4bqEwPahUNC1GjvWvmrwNsBmo5MBL9MC2GKCK9qdVosKUR9fJ3oFeJVa8swBNUbSqgs8gCoxUiLyndxtwMBb7dfd",
  "key19": "bRgKykYpNtjg8KKsgsyptEfYvFuzJiBRRGWsRS5FqBb2Rxg4h7ZHtkvur8sJjBtj7HncJJQxj1hvWKpSCdtE3p7",
  "key20": "3Lbuo1m1Gu25tbXPvzPevDdr7SVr38PUprUHY3tzXQNrKvgGVZ9NB7zmZA8Z1GPBeTH5sbaxgQnCCqC6YmNTex1H",
  "key21": "4jWZNu9ZCVwnnThUzgduSmMoLHLg7d6XNbeB6D9cSRMqYC4tL7udH4nCwAJU9RVJLjKMQ7pTaYrtKH7GMRaSWu9P",
  "key22": "4fXsJSvCJiK6NbCR7m5eDY3qGiJB3Gq6ynvH8FERi1sLhvRcz7BWQrDKpcJg5oa5wupDRYDhb3CxP4zp85ua7p6L",
  "key23": "2XV83ZNhjFsDW2cgivsymwuz9QEsrmYvagSdg6Dog5e9x4eAEMaMLr1CrCbUkwpoYJodhFRak83ZFDKUz9w4JE6P",
  "key24": "CoBDvsjcedLBWDwf8obBUyKnyPNEHh6uaFv8xEKLAUKJ6xhGx8vNjfWJHFSpD6NdT9hLu7D9qJZ425KiGUeKNPM",
  "key25": "3syrbma3ZyfLnYFAkeenw8NWbJz8ciYjUdCqJmnT3sHu3HZycV5ngyycqasMq7VMymzH8StHk49QTGumWuVCYZqj",
  "key26": "5Ais4sHRcySzRQbfyYsxSkaT8grFahYgEQTmozVV8ff8hWe9a1ZZF6kWR3hJ4gGmxjRTzPJKkJmH2oZjFCx3DR7j",
  "key27": "4DsRtoReYckrPEYTkLNKX22ysEcAfEMKezu8Jc18ULnTsnQyyapia3mFqfb7Qsa9myozvamepz1ADHaRMEne31K7",
  "key28": "ej6dNSmRDuxDYHUEHHsf5MwVMXS7u27Z7fwqfyBjRbkYeRAKvgPTtbGFDYxbkWak4yRrtwKkRYh8Lh9RdNbnudk",
  "key29": "8qkDSrGLubaJGQg1dXz8osH8G1jTDSUxVJQFDk6VjhJvWhHttTjvsssVPkUibmooF9Kngn4WoKNg38k84ZnXsLo",
  "key30": "2sCpRuPi4ARugmDVc1Gik4deb6L8otfL8CqumKjnpP7Xgc1hvTJofhaKT9cJfMrH7pPXRkJumQmiRiiFM7xCFqcn",
  "key31": "47ok1wiwVxAh8XNjV5pNS5vBJESDRj88sxqzTjtk2xiS62ZFCUPkwJLF7u1X9RqcXZVNd5ajSbxU4ERhJFDvZ5Lf"
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
