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
    "45W4uCKzT4Jt2CEvfnJhXka4KFGRGp5K486cjo1m3fvFsubhzcZ4gEfSEDnHDAtJDMY7HKV7qEyZ6ssFpd3aGxUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pepoikahZJriVVak2VKFjp79QNT8CcXipYGzovu1KGd1cf6TFDjY3yZPJNhvvBctnhdfKZqaedb3BZhvtjtTFDh",
  "key1": "ZXXJHMK16N8nWauo8WC4MngUWo9E1oirAFwFHkxTwnddB4NSSr4ZxWmyYqVhMPkAvryjLG2nyJGSmDfojwU3kbC",
  "key2": "2jHMUrXzT8pfEY1T6rcyitp69dWjor5d14bWGfGfjHwSSdJFvzXEWzf6cPJsTCPKDY7RWshe8oyU5XwHa3zrVWH3",
  "key3": "PQiNRRe9C4LL1nhfvwChfRYqAZsaQ8fNZxKoT9NdprJgZgNdKb4Tx5F6oE3cxVi8L1mttsnPEjCn32DHiC9xvAb",
  "key4": "YdWBHyaBJPgu37JncehFyB1YqNDyUcCCfcRg4YhDmKdvDLTpawhTSXWjH93vfkKtyeanCCVFv4yE3YhuQZe3Vm7",
  "key5": "Cmu71ahPvBEbN7yAurXpxRffbZsnYAvJKU1qAyK43a4fbKLBmacK5mqEEBCbdcQPFaghvtdvoiddHw7JrKT6WZg",
  "key6": "3Yt8JmNzxH5FoUWayQ9rFToWgKAaw9kagRCsqudnVpkEZaTiJXcmuVSLwKRDjxnWR5xRDALFzSSavj8J135E9X4E",
  "key7": "2gcUQeomRRmFR4NZEACRoEadBd9ByqFcEkwvnSuDomCbBZvwt1oqvv6eP5niMirEXLgpQvof7EvJ3TEun2HNd6uL",
  "key8": "4XcYvirPfnynHSnh769BkYqwqG619MFQdvSfTPFZkeqwaCfH62WcEHsmkKDVJBkweQjrrMsrzFydB1aYxbhnkuyN",
  "key9": "3E5YhbUXC23sKce92dqdaKK9pkuQCBh2bQmjt1Z9dMghkRUwHGFHJtLxse2h9QZr4yHGkJzfMn14y5jUfKjs6pos",
  "key10": "fAbnGKWUtv92XFgMNAW6w5oEBrmrDk6h6UV3NXBv7dVNZK2ApZn9ykzEdpk6LQy36RTyvgns8X7HPMEvXmxta1A",
  "key11": "5x2xJF4z1DoN3iGbNSyyZ5XpctuGH8zPTAguEdXDWhVxorgFktR2WRA7ePaEvmDxYF7fAytLgDUPMs2E2EFEmMvp",
  "key12": "2gC48CNHEQEdwSd8EQRGSVrvuPLJsjUA6eJd2qsLVqKCGGgZ46huzQG4Ejt5iwY7Z7Vwjq8415qjRiP5iTtWwMFg",
  "key13": "4mXg2yYL1R9QeHMhXxKzobJrgaFF3JAE4mU3DpisqhbUs1kwXogcTt9eiYKGATZxDrP3Q8KFhXZxnwRsky6kptJx",
  "key14": "XYLqdWmmpVari6tdoARPRSEDr8526uYxNJR1AKhm3pxFvgzWakcgChYADHWmqhKb6eWoTYyhizVSUm7NXDSzoeG",
  "key15": "3wqXnL72QVmqY53T1sAcPeBvV4GJSUh6hdgRTyuKSkfsKqD4DP94wK8w9boUrKYuMfuC5CHCVcL5atGy2anpvv9u",
  "key16": "4eMSA9TjTcmkhJbBkwHGxirQUcDfFPvoG7CX56B4XCMUZjmpKJBjZkRXgQEtF1GTdh2s1uthWabHQNcinZKss59v",
  "key17": "2QUAs33raDao4YcgWoE99ME3ZUQoZDv1vfTK38n2aTKeZfMzCsdjpsy6FxQJF6oUjDAQTZAtkN4s6mHXaMj6gwRh",
  "key18": "VJwDXog3hN667dSrjoJhZRZAvzYmKBM6qsd9PFN2YF9WgmmJPDTLAxQaM1tt83tRbeJEaTdG1Rah3L4yR39TNaK",
  "key19": "5sJvYS57qJMeZaPVvAqTjTU2Y8XiTbjGzbku4mYJgpAyVgTnyPeFwJuyPBrHUJdrAgBcBFassTJYW2hsNg46MVg9",
  "key20": "4muNd5AwJnqQxpB7kxZ9roaoaamW8aHcmPUpVPjPiDHFxh47XmM3gN18aiMAVfJ72nd1zrFmab2DRfZzm4Lfb9Jq",
  "key21": "2Dqzi9iUrmH18ox9xDmRFquAdJTuL1TKMUUJZod7D2sbZybLEWE8GrRThcYLwtywfW9ywUvHkPYCZqNBVV7zB6UC",
  "key22": "2ebVWMXY38w1Ld9Eo4jdhiZwHukk5A5Dv6xvtzMwieQxnP3NGTyi61aP3ZZAeFor7Dtbo93Q2YJYwin5eJvVP3sv",
  "key23": "2MoEwiZm2Q3g981S6oHJkTTjMi4rDhPMwPyPH5jPZgZT4TL1UiJNWkGFL4qa3y5CFsi9jRx4JdV3D2f85pCQNRvg",
  "key24": "3rqbN9XdanDhzoXBCiCKjEQRmtQMgNKXP5C2hwfnyedxzrkNWx8L5vP4Ggtz8xencKjHiXdyRkRAAyvPeBnjxjyp",
  "key25": "SS5HKLbi5cnUudUgTd4DhegKnCbsReDsiUTZH1utCH7o6A76u7wwMktAaB3Pm5j4LyoNST8c47TT93pB8M8vVTo",
  "key26": "5eYk4FPZaz7tR3s6YsZR5KY4rLUio6PRUC3RikZR4nMuz7giXDPSGdUmAsWZ58rnpaHTfv92dKQdvd1g7cK4TtjX",
  "key27": "3953pA3o3C5wGSBH6fJA9T3x816uq8GAgZmC334VXTKFjGXuoNMRYBgz9oVpQQhQ3tqzR1ULo32Pi4kzZKa4Ko69",
  "key28": "5VAfQuhKxM8g2mqx3VNXr9y9ZWGSa6QgG9j4nRcKN5CcMKFuR5dW2dNEcbxrHJ3h91hAK1vY88CEkJQL3Yb2Ap5A",
  "key29": "cBrro4cSToNRtXYgUG6UvQqzueNQfbWQXQgGQATxKxq9rQMK6qbgRo1xmf5Ys2M5dwBhrXnEeebb9uME22yGUkd",
  "key30": "ifwsJzruiMpSp1cruqU9ZRDn5s9KbJLvb1jejjscwMzpFcHQzFqFuR9LakYAJ6TBofHqSCUSC8iZC2bM4eELF4M",
  "key31": "2DSXwCfmZgoyNUrS5GJ3jVKfK93JSc2a3ZX8Xf6gayikcLYj9EL4iCmh4kp4Asc7bDNDEKJCWqguDVouqsZKruEp",
  "key32": "46CskVgefR4ZVDJXDMUSB8PLw3Vogj5wLaQpgb1pFfrpXtJQiYQpr19DdL6Bi1z3CMdXVhVztqmvshPR24YoFSsm",
  "key33": "3bEwREbFV4HoRVZhzXYKwzfGf74zu8E8XRuShVnCfwaeSRqR64xWEYrfcxKETQA4kaHJoXCCcvHawHRfpRqCYrW5",
  "key34": "3WZ7aWWjw3vhjfXXDf8oZ9bexoUdUZCNF3ouPDHr1FrUHEMDJ9yEEjunE2kGf9TgNsEV83sSY78jfZbL2FDREGcD",
  "key35": "MmZRKDCi4ydtGaMSuEmb3PWck1sKCTMiQ5CV382dR4vZJpFatifKzPvox7qMfSaw5Tpxvzqgz5JNmDsYGB9yDbL",
  "key36": "4gPB9PmbPtzX68CW445ukLiW9KW6emPcwqqKkK2hc4ibt2Nbjx7V6yMK534Pvk8wkKPAxxYm6xe84YAZiKTayXvF",
  "key37": "54uUFbvevGJZQMKDQCC8x6STPgRG5CnLLr7haQJpKYei6AkLoMa3xhJ7dGdXmYSwqezuuan7oonY3mpd9jHGspyq"
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
