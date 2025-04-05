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
    "4cZ1RQomH96nwhqScTnGP8aWs7wBuSujvvjXPJgWwVkhzCaNrVGuSuBh7nyzU1mrgwBLQDrrCa6ae7FnKJERAg92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5c7Eh2EETte5cTJNXKbpFMu94PEsQq66cKQjN65hb9pk8ZyuFKnopYyRbXFYczMtHpBc2oSMs2py5itdNMzui3",
  "key1": "NpKfuNNiB7u7k2k2fBZJaJrrCb98aLCZ4zoezWCPv6nkcSkfnkyyVSNa2GSUMkYvcpK2wkj4qXHjmG6C8qQHo7b",
  "key2": "2yRphgX9y7RqStyUcv48nGCjsVxkFqSRXfZoxzGqppdwKyJhdDHVCHaYjw8mUSZaz4bJpZ4y337zYkHH4BiXD8iC",
  "key3": "4yeNJZ4nEHAp2pkbUXSKdMzmaQ6YbJ4cidqoof7tv4d6LmM9ZqydYag9mA9KhybYy1WUVKwMfr16MqVHHDexqvTJ",
  "key4": "4GnPrC3YEfwkahRspdxeoaa7r23A6WZqbWWDX7smUyTbNEVR6ardyYLMboH4zRLb1a9RYRnL3pK3a3fhGT8SuAfH",
  "key5": "3rLo5tVagmstW62vLAuuR17o691z8nLc4JDuTeSnqZN2T6uTZ1uwGqLRS2TwKRjCr1CKPwFsAbkm26bUYKwXV6YF",
  "key6": "5frFHRfkgbmkcCLVkKhNA3NSrEp6QaQsaH35oCvPWFVFPwPEYCxScxMV7yhsTV7oW6vth9NtoaMfmr322y1tJrW5",
  "key7": "2TKdTiBKaLCodbEsGh3x1trttFByfYujigGRzK39nQTcddjmQygjAjkWErCirK83sPFCHZkufe35bXRff1Guavz7",
  "key8": "3RumtZiasWksRE4aztxD1wcZpQ6zSeW7UNP49BzxaA2rgVgEMfa5fbQVaYpozio8jEoUbf6F57xSxPeFtTbhXyTp",
  "key9": "43HoUWmZYw8ESTGkLfdXsQwNziMbtdnLW9XAfCsfwCAz9gy7JMk4sAuYbry1QuHoYwd7XAFJbBHxw6qcB5kwXTPM",
  "key10": "4Qt97pVGQyMdmTFzyhEz5uc7C27PobnYFLdwYX3bcrJ8acCZcURcGgZJMuamaDaNkLFnqbZG38UH4G3ma5eZUjL9",
  "key11": "Mtbsq7k2zZ7mCWGrokzDNaFqTFAV5vq6KtfcTmUUF8iJz1PtV5tntF6VunzfcSiUxEb4sezgqcrF4VmUaJD3Kdg",
  "key12": "ArBd2KRZrqtBMKw2vujwQTJZ46q3ZRw2t26EYcYZSnUT5qYGxNPM31ddvaA3x91pXhd4EbZ2CWo7QPtfhto4FK5",
  "key13": "3X5pvuJt4dFvTBLKcTarsj4egP7p134LHf6UFY6p4PcD5W59zCz7BEHzHdXxiJdLHwbQURJTpqekfA3nF7fkogqv",
  "key14": "3nGTMAxSDY1weVeYARNbraNPn8YydWjbrzSqvJ3T4FkQS7MGz8ARgXjcwyfCZKmWwEaU36F5uuj4nejze4TgkXek",
  "key15": "5j1WSrRKgY2WYhtihnXe8DchBjCF5ki9nPHV1L7yU2sGmsaLGPyhg2kp5TvBCfuCdMWfUPKnBX7THTdhGkjgrr6y",
  "key16": "4wqoDGZRtK4kwT2io7c53CZWVr5pMZoNMx3Kj1qd8mL8NLR4bet4UkLSw9w5Pcjtu919xFv2ucTTNtZjwo1StSUn",
  "key17": "PLB8z9Sj6ZcM27pHrBaxsnU3XqTC5hY7kuYXjtfhs2WtaWnM4FrrqYR4LrMjP12y8MTRc3g394CTiecQobWnDoT",
  "key18": "5vWyZfi7mzGPic7Bfk41eKLE8Hzaoah6UF167mynHxYDPmothaGsLf1RsEAo3hreWLjyhq8wX3wSPFeM12Epp6Bv",
  "key19": "4sPQ4HWKbJggJGavoE8cbaFveBG3HdqhNznnSmJoF7rYnHLKiy84Hnc57rM2Tde8UVmyMZqiFHDs9HNFGtbXv3kC",
  "key20": "2Ron2Y4QVkRYwJW97gQdGF6UDSAY88JU6mFQeweweGvQcxrRvZ6iikJmVNnMrmhfCgBcc7BF8SPMWiDFrztNfELu",
  "key21": "Vqhm5eUN4wwngyHJzmRpFRZU3pXGR2MofiDusedLyANujxdEZev5FVSRH8pSVRPzVpd4Zs22QRYfAyui6LqLTjx",
  "key22": "4LhZeA3hWXsbZSTVhteXiwoc92oPTitrEJyFnNq2D6MQCSqEzrE7B9UZCF41FYRxCdaTWg87Q4HWCyDDA2xf7EDs",
  "key23": "pkikHCy421rLb8dEvMF2GT74FiKWHEYhFhJtSHfDzBGcimruHWJP8K7RpHobgZXav3DLKAp1q4jgw1q7ESSFxTH",
  "key24": "4qc4cbmf5zz9sJS9biRakoyj11jxHhJoxTFxQY1T33b7tZnFgJxTnj7XBps3PJt91LJserUSZrCLCpQX9D3PApBh",
  "key25": "2aQ4bBFhLEsWH2q9aP24fV8t2SJNMbQ6ooArYqwP4sUhUPR3vdthfTKtXdRj4RWbNT1joZXBkWS5FyvHdp4d1zBN",
  "key26": "3M7Mp9RRqawSTKRyaZeDBDgdDV2DxpsNB6aNZcqyyeR4hCKdKwLhYLqCnSkAqZPHs84u96sr6KmjtKZEqpAN9qUq",
  "key27": "5pYq4f1Akwcbw4uj8Jj9xCdwUGMEhnzTYji26VrRAgTT2qTYXqF41Y9g8TShPYBDPhxUeTj7HHjzzfP8HGZ7BiVh",
  "key28": "3PVip8dX8XYJ5dFCqfu7eux8HVnLJExWaWE3VCADeVw5T2kA4NvuA3JYG1KWg6Lb3z4o61ib27GzL79D4FpGqG2d",
  "key29": "UZ9uEoAtE1wsFQaWSSGmynoYK15M4pA2Jc1vaSrBny5MBXG3W1Trv7D6aChM5sGMj6i2uSU73oikL2AMnBhQpoP",
  "key30": "4t1kvari5t7JvW3hHaSYUV6yBgtNavzanfPbWB5Jt2Lv7o91Hw7K19kV9Kt9ESzRpFzpE96vTGqofav6Pu7abGYU",
  "key31": "4ocCyRwiJRLeMw1ZjFFiGQqSnmadUHLwo7gQ6FmfopqQQzBh8Kuu7SXR4e8e3dW3vEwT9dgmMKXcCYXYgMwVMch2",
  "key32": "2d4n1KhkDs4nKYMKmHRHwda22y7qjGmQnDjPLjsP2vBw6wA3sVDdjC7ar3Am8f3NdF1EMwCNSHQpGdo2V9PCxqWF",
  "key33": "5RHbkkXJE4gVjBP2NfG6NDBTHmsjgpukstLFdMztMpgVVh4BxwAXzWtFTTtLoVBfiBGg9ZiJYBVEpDFPk1jBjwMQ"
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
