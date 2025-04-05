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
    "2vEvvnaAb9rZgTsbGQfG4tSdkdCQt6Nw4QvkQvVAxLkboTsF3h9wnt7Ysv9cQBozxXGEo8oxsJi8qut3VxVPtMp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftzbegqMFvYu26asHWMDNYqujTTSFUXDg3tQhSQu7LDVZRW6YbE62EoibEvYux8NMMLFRq2mxC5GLPWCBRzdExX",
  "key1": "3q3vFhA3345npg5TGc59Y5sCgY9Wyh1k9xw5gMjwKAvQToRmVceMz2Gf5MwALJy4biFx2FWy8yDcUK1aBRst86Yk",
  "key2": "4LgobBbU32ZD5DaZQqwT3L62anLBGgVEmFVnotHC3WHQ5vsEAbeohyskrrZNujygLnKUmA1jEoHvLtDDXMnoJifQ",
  "key3": "hPomLt9tWmztK3tW5sqS5o4aerDdT8KYsBp9AmdE9S4PYtrq5mawErKBmvTCiqsLcSx9vTs6sz7ckgtXnceFV8i",
  "key4": "4ekJW2YPheXajbAVVV28wJUGs9UKxp56XfrwEqxRkMvaFQzfEWCbnADdBX92pFRf4ArQm1Y8xd9nWLbMicC1Hx1m",
  "key5": "4EHkma8poh8RSDw5quvTJ3ULT954XeBKFdejQAcdo8tvdS2nxSGY8HEM91YjHGawdCgciiju9yhbLEhjTjuXQskE",
  "key6": "4EpurYQ3C19Qu2sJvPnvUB1ExHDZegtnx3ZeVahebun4R3KjUotcVHp1WE3toissAcCexSz3JgeaaD53gQFhbRmT",
  "key7": "5fPjXtw5voSkiLM5ZFt3T4k7u3pY5J16LwmEFKq8gtkGg1dCenxbVjazi14o8kqyMQpLPC8MgxoJn2BkJctyLRr2",
  "key8": "5yoqEWBAbw9orLfUwv6wXJNpDFNPJc97KmnNedKbhy9qdW6s7hZnN1MsXxpcsbRnLWuXhHLsSKmrPcjGPBLSYuys",
  "key9": "5AWM27hGFVCry7DJSfukbXKkThL9XUrUhgBMPQA9zKGKeWbt8oUFtgLTuLaQhMkSvbmG2Fw8Nerzim82ZQq2ibgK",
  "key10": "4qYUaAjLpaqAApSaaRJzav4VrUqSRNwsgbriRigZoszYRRHRQquKGSwKEpszNKfb4N4Qa5rtNEPvMMKbtMAokqWq",
  "key11": "3f6FNTpusn2VrS1eVYz1rERUvzgrH89NTrU1YHs7RMrktDgTRVD4GfRp1aEiKtQ8rvHfLEVyfJ2VwJXs7Kduzrn6",
  "key12": "5yEQfKMVvxMwje8673yzE3CEnEYb9smSf7gNYVxT9ZLPWvdY6891MffUmBPBaLPoToGHqL5QnUajBzj9594Pz2aJ",
  "key13": "4Gd4zssVGJ41knJcDKPkbeYHwnTvGJj4864YxrXu9R7wYnAX6yTDAhxUwN26pfpHkkpheLPdVkfLTdqWCFfcTx6q",
  "key14": "4e7UDrwSYvyUSWHbcBKtV2o4AiC7AVjF86tRbDfdjTuzPbqpkeinaFzNq7kictjmXzN77g2vX3uANJ6yjuo5sxfj",
  "key15": "Eh3gf7PczukqGpqAMLVcFhQnTNfVVgLbWHPyJ2kZSctrmjdPjEpAPs9XsASAKio1zsFf62LLjnfffT4THU5BGYy",
  "key16": "o5pPbEJynTg1S9gjyAnr3trYafPvkHigLcNotkkyBufJAq4pZM1WUEvyZBoT7C2pRcVqdeWdGXGHWnChiUPnxym",
  "key17": "2KzuMpCMM2WKLRrXb1uz7cG2Fjhd7M36NLepfPXX7vvfLA3ctnFneNWmEz2ja7WRhUkDC3uLXPQut9ppWp6incuX",
  "key18": "2U8Dx1zQUezjxQwBoPtKXuTGbN6WYs7a9BuPCFgwPMsShQ8stkxz3bhiNpf9j8cchpd3irmSQDzc6x3Ve2xvSkri",
  "key19": "uGLRV17hxyQBpaC9jaMviyEcrjoVRwukii9839k83TjNEXobz1mLUBRZtA3gb1VBrpSjYYDLx93WixtwdKBnEpE",
  "key20": "3AtCc1Aou5Q5XKYg2p6KCxSGHCs2ZDWKxP6FQjgBgfCJXkCpfvx4kPadjWV8ExKYQa9PACinFm9cPFUaMzyPDfjt",
  "key21": "3GBoagJ3s8DVP2pqBruZp9hmMaFty7w3A5JpmgGP9594A2DCLeVCbXrtzvirjGGU4wL57YAYfG2r6SK8WeS3HjeN",
  "key22": "35VjLGfDtDQ5sAR925wGVXN144tqAqUrPjp5A9EpaYjM3WK72dzNf5ExbXkbsBJ9o2cTNw16DGyHnUnqFxhYVk3E",
  "key23": "383swX2vaNEQzCAbBPi3VzUR4h4NtPzzyw83HcUj8vRUfgUbE9TcE6AZrYtTg9pRaWJixvEN5rQLvTZzkzi3AV1m",
  "key24": "4a2zenoX5mhoSXGY55MmbcJBdcxvw3A6wHepzq8zzNJ1uQW69qmmixSdwqXSo5wmXZW7pPHAzZFA8DFVM9qwXZnE",
  "key25": "2LadU5b6UnsRcQSWNnNpfr6SdP34XMdgsuHbkZYnASD7Dz7zgUGL25MDTYKEvtXxqEkmxAWipsZxww58YEvq7nYe",
  "key26": "37f9Eq6u5CEpnTHafDfHFgJZgPcBV8bhVQcjujA3KYYMaTsDPr2m2yb33t3XjxSbcnyFkMiPrTyWWQXxoYTuK7X7",
  "key27": "kpQwe2rh4TwHt42tca8Bw2U2gvB8DF4TnpXctaJc3fYbDUnX6L6wyyf1nszTAvaAu96ZzUbWs5b2Z1AU7ZUi88j",
  "key28": "A39ikkvD4jakqdpsL2ayLuRXS9i59SScPiHiv29gmYzWG7EGd2ehwU3DHm82KtrvuwbnVWdymHyGyWh3zq7Lpvz",
  "key29": "JVjvRcZgRPwC68gwnLNm5ZqaEqfHA254JWoqvgdczDCQHTiyZ2yUKKYqC8ZUwSp6An6h2qxL1RZ5e7ZLFVLpHzy"
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
