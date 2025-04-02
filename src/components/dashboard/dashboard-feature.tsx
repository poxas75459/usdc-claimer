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
    "3dDwJK2DN3MvwriUuryNk5PcfpudvwHychHtmvcogF9GRgR7qm5akDi56i8mXqM5FxtVBhV9ggzK5JqpMDwazdrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMcn9qc5DjMV65RbtczVAhzDFi9ypNMAH5DagzkZp3Vhaqjnvhx2gMhbjxyiXr9C2W5VgUF6revio8MJZ14TFZr",
  "key1": "58ambnyky6zshUmux8kLHyTfxTEfaMcPoyfh87zhazya7JQvShZUBAchBJdJcpU39NzWNLTu8s5qDrjJ9cv7eBrt",
  "key2": "4xBaBuRrEzaKso34eLrZ3wpw1S3i3NNvRsWJeqG8vVJhjC8FJnKYBW7J8aUcUKcQqX9vpTxv64QpHay5ZXoDnedE",
  "key3": "24VP4f4K28BDkHub6n8zo7Kd9EHMPTcmyFibR2teFR9NUhLb3yRYFNVHT2UUgZkusyVWP1QAqNKoSBpZ5TfeHFBE",
  "key4": "nBR42fBTwPcdhJhQkZzhLJVKMwoWximB6aLcRqF45BAGH8UyRSaUWzFNwcTDZHCHzsHbbvM5hzuHAao7uKJRFiz",
  "key5": "2jWj4jeesV17E3WxohkJxd5yaCuNy9j41fLWTgMvsCMK7MUf5eVwqGMH5vU4xMo3kc4XmASBXbTWVDaGbWFtRxYd",
  "key6": "2QxrZUMAixfYTWpoe2fJcefMicmXh3iruNY4Kg2doHpsSnq6w1D2VFEBdyDkeDeXi25Zur5qSwt3ayjGDxiNjvMe",
  "key7": "vmrKop6B5hBjqijFkfTQrqrPZcqBxWwb5GG8k4VFQNrUMTDoWKrFFqTxnR62eWpxnoFYWWroVJAuhUdzJbxDjYc",
  "key8": "m3V75EvJ3n5vKARkAynpzrBrb5kdCsumYeJw3VUuo6HQjWiCqqNi2MKQcTRRRie5WXcWS9JY1euCsY3RXBY7pD6",
  "key9": "3k9yoSbyLnw6Fm3pQMZdrcUm38Lsg2PUo8wZJrLU3W9cQgYjXKSYUBbgRqkKFkVsr5S7aHcgfTYrs1EKVfrbndNS",
  "key10": "C94YkSC9Fa4N9XvZWBBHUpFeCjUqBxeMdV6WP78pRv92JZJWJpybtjqvjUjxuZwNjwoJbc5V6KHMh6Frkb5mcwA",
  "key11": "2CFCfxQHrHMmrfxquEPe4oZjLrKvRmfJJC6PzjxeidgEePyLJFBhQR3RwyoGz2sKJ4RxjCH14nkUzQqG7FqpFfZ",
  "key12": "3esbXfQwMRkNfVUZC5uAF1xAoQQEW4Ev6Ucm9ZgzkJKMuAAbBACuFLhsEiDoWnV2AEDmbAyeFL3ajPsfDJJD9yvD",
  "key13": "6FHj8ooGumLh7rYqAuQN8hKatLF6LjhYJZn42DTqjedW4n1eoXKUpknUmM2EgugMY6ahcMTgWTvPTDs4S1ATicN",
  "key14": "2iwvY4mqAij8Ze9NV8NrcenCVZ8t14ciZJfGwmm6KhTpBrZdEMG6A4yT4MaJEHKrQdwfEu6aA6TjQuR2DSwsAbNd",
  "key15": "2pVpXR11yUpf7CM5vCCJqkW7G5QwDsf9ZgZ6Si8n3E8VTGigQU8KPz4rdffy7TwznBbmnuMAciWaA6mKgc5DgJ5d",
  "key16": "ezdEfy3XTg1yxJew5LEZHD3xE7fi5Xichno9Nzkp7DsAfvpVe4uXLGu1GtuYn4sW3gccFHnfkY9Mgp32TN2xJqq",
  "key17": "4SPtXZacohUXg7diGbP6n38CLxEfRGXDTLhEEJTLVveayKTpeKAg2J6oVz3SszJPEvThcGVXvsLwANUkBfM97UqA",
  "key18": "XQrgCLkQ5o1xjZgAkWqx8H4sbWyiV1t7k1BzoJXgP6d3ECTsXQWGJ9tGcHao9aBdRG7DGbv9wL86iuVaEx1DgmE",
  "key19": "3yiXZYeF97RrStSBBYyTTiFjSkrFvuDy75NHwxgY2pRBYtcf8FM9QJChvdns4bUYrMdk3s2BgCDEVYSCx8gXdDqn",
  "key20": "2cJH4krz51wfg9BYAMP9xmHRc2jvMu3PcEuRRV9XovTojPfosT5CjMpPAyBiEH4QL1AHsmcx1CJSbSony8DRFs6P",
  "key21": "3V7fGzccRovVXXBLeH6KdtTnGjBnEVrfPyjMpWqjsuzJyx9vJMM4awv79Pam9mk51ayWf916iBvqvJdZMPD4aSve",
  "key22": "2M1VkqNusAxfC6Sj7TRCFrKj9dXx5vNuKmz43vf8hc8FsAVSa9tX6MWUQKm2SkXmC4AdmJVP1EZAkkgaspngGcQV",
  "key23": "22fb9VqbBwvAeRBAEfjiiTo24cLF4vFv7niWgd8uSSp2EoDELkcqBvYjE1nrkTGLDBAse6z2r6vCaixoMFitVAG5",
  "key24": "QZaTxrg2AiNS5m8weA4ZRda4n6bbqShwbFnnrssJpR63aCqGtu8zyVGWMZANoQ9DTG4hv58vVBAFYua57YnhzNC",
  "key25": "3A6nK96nXEKayugGf3iEBTwxuXX3ucDfg7HUap38EdVuaMZinwUaRAZv4SKoL2LFJnJdLz2sE1YKqcdrpEQs6nsE",
  "key26": "5PiDQStU3rh9EnSDr5sMZGJhRM9hyPqZUYfRo9z2AeqTy54h35vDqQTEZzCmLyuNBEBkN9TwjmFQ394bnnbti4q8",
  "key27": "gUycfXwpy37Z9gw7TDChD8mDMyUnc7tERHWdiXMXP9jzho9sQ11bT8rX9jofLAsbDBX6RHBs8xkXjLpbAZeWjG2",
  "key28": "3qgU4xqAzxv9LWYPPvxAJA4Xp5tBerfAZqDiKE4YB5NxjicAk38yB6qvrtwHhFVaL9oRyg53GJNCCFvfUNyU8XBX",
  "key29": "2szMm8HKWUV7UMANdoZK7M2h8p2cKbXAqWVbKqUUQQNVzWP6JmiBRDkZkMG99if7FKyoD9zSXXXaeTA4S2e1SiGP",
  "key30": "3YRrRorQPKnf5fUeYWECFWZTfMpeVzLkqPCWymV6pv26KkgjJVq1ze7RntCo5QapSbb3hiK5vvhwbAJeGeDwZwst",
  "key31": "Zsg6rbjyBhaarpDruEwbKZkYmoftoBHfhJhi61z65YvAtYWnbT1YagpnmXJTGcZxgpNXHudCGRnrNJeQGBMNMc8",
  "key32": "N9qNkeJ2VmunuXb3iFxt8zehp2CDAqFG4t9bpQDq7F1g1GYJDxnateXcu1wZPmeYvcXmiQHwTge8G2j9BKU2Bot",
  "key33": "4TgqkCUqn7y5BfU4NbDWhJiESeoqRQAw9vvwtT91b7W9xtHtW4PxrFsYVUpJjXaV8vHezjqNh8e3FnD1VCXmwShN",
  "key34": "21PtTBjwPbsLdA4zqsTysDEkhiesiPmGn7Gsem5uvjkvsYSG7Ait7PToTkyaVkn9GrW5begE13G2feoY6XtKK9rY",
  "key35": "3LLdKfoNhD4x42EP6Dc74qar2EzFrJmVUj4qPCmfcg3rZqt8mwQUuftseFtRXjGiU782JUvwJ9sWYGZJYjxdzi88",
  "key36": "4rEzuESWeSoSXhvAQR47s9j2H6Z4fdJbn26MkNGErSeLQVe7jjQ95yHrD8ojfMdqNQQcRgKuWHJdR9kDVFBgbW3F",
  "key37": "4AnTg4LvEQXuk1gBwAiazX3wNS5NyqSzZmbZpJ8N9YYnBw261WtVoqVJkazsUxErrvWbKVsGGSmYeTNHrFhweqSp",
  "key38": "4Y28qJ3c1C8Zs7H7rhW5zSgZyd93GP8je4Jgg5us5QgUxg2owh3df5WRAM2BryVjMQ9ucU19jZHG4zK3gLP5zqNW",
  "key39": "5MjwnyyzsHfUKCd8sKX16myfXfKrfFJQGyDseE9mJdgnt5XPAgE2u4KnhzANiuSB5FbveWeM1fKFuUnS2eHUEUz3",
  "key40": "ovrsii1rVZ7MzSyiws8oqCxJay9ZQ22xVJYJvsRuLdN1RfT64fKRXA83asub2A11KfAEMSzM4Z9AVSfu2Yf8Pmn",
  "key41": "3h5gXGV5nge4YfwspPAcCW6P84e98kJnQX1MatBSbCfwrADrD9FuEiRz3ajXiHBA2b4X81uiKKTXmDPrfvnUcFSw",
  "key42": "2WXymSXqH2f5rBAY2i76sSwY7o5ocFbPjJMfb1YZYsiQdkDwbcs6J3BSGgdRTf81GeCoPfGPS7WyuQtnNvchGenx",
  "key43": "4J4Jt8ChSAs9YD74JTA9pzG5DoVBGa3Uu1UraxgDBAFaQrYmoojBmAWiY6PPVhGEfELnTeYWrmXesbr8MeoMg28Y",
  "key44": "5vkoP51vp9KgLXxUqmZ1hT5igi3C34fV2zgq2FMTV2Ef6eBJ9tXPsyyq3WS3BE2Tz9RkYT89h4aH2kEF2tvp3Ay",
  "key45": "2B9vGcktHVF5ohBTftGLApnKwq4buxdDDRg2fo4ix8oJRbGk9Gqbk7EJXxFMh1DJ6mXaEXDAskPWSNRdBM6BeJre",
  "key46": "52yq1ecwJg5jgGPSFYbvUzbcvChzSuQYHvNPtpgbedQZ9gWt6PY4n9BEsYEy7WwDT4hoo8f3Lf2MZiCyGu4xg8y6"
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
