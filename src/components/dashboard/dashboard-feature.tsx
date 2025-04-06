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
    "ZvTSUtn1RtyqjJYg2W5VKCeBmZJhHGqWjQQZdBq3eXfjJDYW5YXmFw2v6actuHNtE71UvLmV6yhFdwe9B2rV6fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzncGApAybhQn48s6FUrJ5D3vHFPZSuD5abCNALeNrWfVdfa5ENdX8MXC5us1mjzFYbi7za5AdqeQTRtZRE15Pb",
  "key1": "2EUZPAG9CBuad8cc7C4SAFAV1gXcoNDzMZmZGeALGFqoqXT1ni8XrMcVAqDTAMe4vKZwgBV4LBson4Jpk22gEm2a",
  "key2": "EN8fMDCS8h2Er6CuAqBTniiPa6nVNHR6kKoh48eA5EtN8My4647o2tiMfp7FSVJuvc5eXynnVS9kLSpSnZCvmeN",
  "key3": "7y1rzWzoX8G38piXC1QHCYsa7oUtpaKDgS76WQhRQVRbymtUcddyz2D7iFJSgwovE7wEwfasjjjsaLMWyEQCLDB",
  "key4": "5hY8U8etuKmotYHoURLr1GVqTSBhYcW3Yg59PZsFz4cefCTEUiyXAmtmgP4NS6Bz5CNPLEAaUe9MJHea3YyTNtfY",
  "key5": "2DmkztX2rxpDvvbySr27yZKztFC91ZeY5jdeZrqE7g7o7msSTY9SaxjYxizaEKhZNFsc8KX2WDbAnshZWzSAbLu1",
  "key6": "4A5ngnFMH5xuccu3ovZxjgxNjmVRT2eiuZMnQDZHnMB16WhF9uD6nne8XQiJqQsR1EzKHubJM5tKoYQtGBoZodfy",
  "key7": "WbZ4fdDz1jZU2oSSHrQKubqPcVHJvQ1ht5HBNVfu6gsvic7AMProHuPV6NxjUeSBbQD61u4q5x1uboWsZfLMr22",
  "key8": "3yMfd6SDKQMXfKdWFUiyWEirtZEfXiQKdThy5AQf9TfDcCPU2gz8TnQkB34H3tgHyKPBduGTs6do79ksEi4h6rht",
  "key9": "3fwb7hTNeU4wRSizoMyQRHe17pRZDbRTi8w8BoPSMJnugj1oG1Hn5mMWg15sZqehTGzptzjrE31gA6UErNENYADs",
  "key10": "7N9fc8poLT4TAsGEQzMsJCEc2hXXcz16f6usAYTtVQyMTSCTiURWUtSCKTTjzPLA5JuvxL7qsP8obpWbCeMQCkH",
  "key11": "39Gbsb6fYyHqmVKXbRVmgTF2DsC4JKizQjumX3VqvZwvq7oKdERBJeJKp4cwPS4DT726RoSbbxUwpJMb7C4cXJTm",
  "key12": "2F1QoZHfcGUcr6j1hYj6wC5LZ5hJvEdhRFARnLKVhUgt2FpgRZNncNseHJBfXGFQBKwpc7vrUMDPMSQiyTx8itek",
  "key13": "4Ja7C3Ya2CLdtsPxzCCMRZrAHYrFnENq2PznBTrWW2jakisfL2DPW6DkUN9AefsQmw8QzfWGMeh3JR2ic6xZn3um",
  "key14": "5ET5Z1w3vK35ac8nZhCX7ghYtxFyHV71Z8DMxFekmkDhPKqdSLTzW7z5LDQVUbQQ93Xpt2sEfTjzwys4eXmbNDfZ",
  "key15": "2YC41onkZE3aGARCG4kbM9aSaEf8NZXbQ4q8DqfWHNjr7514vS9hV8gG6rjF7TSKMY7G76W4ZDF7qsmjDGiajeRw",
  "key16": "3w5ZCJfhrirxCB4QKNZBf8yv51uaThVntD8m9KuzRGVLmPc6vYZHpZqysYAxLq478V1khqC6M7kRHrkSXa4Bh7em",
  "key17": "4PkWktpPGgQnC7ZqNqFXGGWezooSF37DRKTxJScaA9zaRWZ1yBbbURddne8o2dnrLWZV5CwpJ6yuVxnN1UmSvWB4",
  "key18": "5Kt3L9RBGh3CEnawZhrWW9G6hB5Bj8tc1DzEsaHmw2oHs9i9WKAHc7GMm9bCTN6bhmX7hkdx6sfJsHMPRRNFZzyC",
  "key19": "JuB2usvADrS6fa8YJC4FnGeZCS2K5dfkPv8nd3MDipDMrLGX21gmBApoa3pV9htgu3iJxwAPeoD7FTb8mVwtzPx",
  "key20": "e3M1cMNYiwe8HeN8CBK4bzJK5TFDTuR5oLbHZRenLGt28Tr1QprUzLe7NnsonmCfGnPnTc5uWen6oP8zfRsmCYR",
  "key21": "9tLxHmjf6oghCMXCJP5YAL8Y8zAcjoDHBoDFnSrokYNYC8P5HFBpMz1MLeros99RGVbnJnNnQ2e7mv1R85JmskM",
  "key22": "ggwTLCqvKtNNzrbDf8ctmsSpvxhGpQWNsui3GnjRhKrYnjZ14Hf1PRG7XDspV3hjw3cWzPsHuejHFhQ7CnNqGhA",
  "key23": "3CnjAxwkim1CvKtFwNWgU5tYgt4oP969cWWBcVzpnVSUuZEv8C6XxJuCT1fBTthcPTMLqhZv3fjQ2RyHFpu4hNfW",
  "key24": "48n5UzpBRDNmyUsmtgrMTP2NuivhxMiiWDYT7o96Ensz2YfwTK6gnhs4eLR16xQzBKppRGUxicXsmk9HNeUUeiFD",
  "key25": "2VuTCdtgzztEbJDv31jZdtys4LpJKwiahgskt6oZffMaqK4EsyUmj9wCfbj8dUQDQLP3pZoYF4YD9A2xjD12jeyn",
  "key26": "GFndCfdZm1QHYU4uSu2w2j8mtRoJpn1wtTvKVR9cxnsBsEEA5EUrfehiUm5Ac7p4ngtBmumUr7TVjS6zW2u3eQp",
  "key27": "5GTLxmknTLzrNjc3gauKcAD77Qi7y2bLYSyMektvogASgcc5o48cXbN4Fe9njufVjVJz2TY5UtBEDs72wdMn6rk",
  "key28": "3beUFKjf4rVX68w1cBLMfHuDH8JsWquV2dcJVSy6qj8qdL9iGydMR3MyCVTeX6dd1oghKvhGeBc1kjkaMMxPJbr2",
  "key29": "EP6AGFdvpj2BXz3fJTvcC3YsXpqrgakXKhpZ3yqPXC9MDjfWTnk4FTjeunUWbMAAXsbF3fXXVyWZUrmvg7Zui7o",
  "key30": "4auZhPWKAvpaBBobZmYWBusLyBiQMYwp5xMTEnd9XJB6LfR1n23RQLnu89WJZbU3YzYbB9XvETbbnmEt9EYjDe1f",
  "key31": "5kQLohYYScsKuQTrNXLehGjBDiUshrr8Y152431JJPvsy8iYvTBEoGrk3WnqJiviX2odXFAsj5UbrvKrm1V7419m"
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
