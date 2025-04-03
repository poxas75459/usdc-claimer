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
    "428B8A9kw931bcjQ3VHkCW5oWfjz6F5wj6D2da8ogrFzfh1SJYTCFtjizXPhG9uL12HSuvC6g3C8rhofhz2gdLw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLsNLJb1GErQRd8X72LkZxz8qYnrdn53SzZPfo6fbuKYjSr8wF7Wwf4qGkjxut8mxewgeSEZZ2nZkQJeMAEFSBt",
  "key1": "3wNVqKHQfqY9M9GkibJFbzFDv1enaUHe29CT5X9chmZhEribzaLMVhUKjLnChB8JWKK93D8UEfaTFjsaYMTjkGiy",
  "key2": "5wETQXrJA5V5YcT3eD6KsVDDRfmLLNrpF3wdZZeyGceFH6YjxnmKGyCzjfK9s49k8Jwvo6VpiFaJMn9Q8nWoJ9e9",
  "key3": "34FoGcoqy5s2AnnbAMXcCn75Ej73ATfSZFmJpZuBRFBTKsNEi3b2rTCZfwVNnu83vHeihG6CZuDBWFx5gPeQ6AjD",
  "key4": "4GUx7YupAojfqNfhUDMeJ8MoCSPeNxTiPNtbPZ6Ai3UjHBJUmDL28mRN6Jg7mb96iN3QcM9DT9PaW8iDSCR34Era",
  "key5": "4AnftE63VurEgUbzwinm27E7DpmGAKyQxJax579NbKK29QYj2oXGLepTMctV1UMw8cCkrkVJi5sQ9scy2cDSTmkm",
  "key6": "2o7KQHz15jiQBpF4aJNK12ruhsX4md2z3R5LbEeJFpK8bAQpxtcfEjxoh6bhhu5LfYUPst85i52hVrvhPNbpgSTb",
  "key7": "3FHnomesSXmA4BJ3m6LGbqpmAvHJGRXwxVsvSEKRAuuesELz2rAiqnvGqoR3N91kE9GLQK3xP7FXUE7ht4w98Les",
  "key8": "2zwZdFGUK5bZ6UVMoJYMTKDNLqrnqnZmarepeKkD8FU3MNqd4e74TfVUaPYpNNxtFHLagc5fU4sLHT58CWmCyfwM",
  "key9": "YZ2QpzpYLtwYeC8HY4LTz5JdSHP1E9gnVg8xdb6bnVh3xE8FKpQccN6UR9sbKgXamzxj7hDHrZr91p74RNsa4Xr",
  "key10": "4m3Si3HrjTUHwgB7PNU95VVDvv942TUp5n3eUR5TZnPjsoqHvWiMetcHvUTayhBZGLPUktNHExfKuxLVXoPBMJ61",
  "key11": "4U4AkcRSyUddaZ6CHTKHsKHjM4eyYdZzKPMDgGShEzNDdqoruSsC7qqKNK4am5f7JHs6mFitmDVeFMUWmNGXrJLd",
  "key12": "29uYs1pCWsJ898GKq73bGVSNTTWy9qNeWCGrqGYRBN7T6uSXaLd6AFzxZQaBTNzmcSquVwhb135S27Ex9PZbzzLX",
  "key13": "2qkjRGQH4GJHUvgZG1nBjW7fSrnVbaMuCHxVcHxMyTL7cKG1yKaDw3VbUEm7ecDDqMhScVjd9rZjjBjCJQmPE9mY",
  "key14": "4pqjsy86U6ccks79Ai5889r6UAsFCae742o2xPrsHBKjFc5NjwxkcgGbYFuT7dVcxAmJxxoQCK798ztXeDwCCB5d",
  "key15": "2pRETu7scNqBm7iRqrmMLXExeRaq15Nyu3FS7H6HH4JLwFvZdhKY13VK4AqBr5kJ8DokjuzDCRzL9xgPPAzK66RH",
  "key16": "5c2Y6Xuoz8mCYHp7f7TunLmsSSSMuXyBBEqyYN5mqutQRh7dRehf2RZNEHcqnmS3RqemunUZo6CZjyQznK59W3Ah",
  "key17": "23SEZy1uXGX4C3Xw2Lr98hvtqy545PSk9rLYkw4aDwoDSYM1cdFT3xQnnL9dwtLX25uRnN9Cg9h3F9L2SsFj25cC",
  "key18": "3pvVvFV7EgTtcYFwp4d9GzmFhi75C1ic3TF1NpjWHnUq9xNz3xqLMiKpW7EyUs6wiVNab9x6fnpxyiVcnXHy9tqy",
  "key19": "4b9f7Q5gENa5xvaN3YfKLYCpqaJEnMgsnCamZxiwArqd1fddW2gZengRs38LosFAvoBGg2t2Fq9z6w9w91YMp9XD",
  "key20": "5CN1uoxSC469HUu6PUWbCTE22uKiG7NQToESAZ1xoK3eoBuJh8GbpH8BiPyT3mhsMWRYY2HVrmTzUTY2YrsM5VZH",
  "key21": "pyoi4eZ87ZYVq9NdMuAcAJXEtwzg22RwufCxXS3FEhfQm9tdRncwVWtYKm8t332b97jviC59TRyokqHSaiqHgsG",
  "key22": "454VtjSCHQtXiwPZYJndPaZzsrVEwbJfKCtAhTABSmjiT5d9chLbaGPMaVEAez8vNoT1HWjtMfWwBSGjoiYuXJab",
  "key23": "5o1DZBD6xHfRSnc75bgDPs89gbxEMHohybTWRHmAwGovzYtrbWpTVRFqJEjB1Ce8JQaS7VNYWH9xg7wjXCGVw1hT",
  "key24": "cFXruhnDkVAd1QRQaQaYsXv7VoeJSE6S16yiVWXXMbu3oBRnJEBzNgH8CM7DdKFQKRKasav5bTuxVFRJuiXzdNH",
  "key25": "5PoyLLeztKAxn41n9ujoeYWHkwrWjWDqvGTSvgX4sjmry7WxV35fWEGm7zWcwqPWCqkYfUdsbbBvLJRu5h5nndiD",
  "key26": "2ai7MAHTLZhBLPtod38YvLLzeS1YBZgA4q9qAhZHN1dvw5Coja84NxiuAmzfhieCXHCF8fM5qvwaHX81es4owV7m",
  "key27": "5V3yzHwUYaisZQwqot4EygY9nZifQHrvYPXfqzKTcDd8Jupz8p8LRjZ7Mkddj3RYzK3hMKnKxVeuCVMRrA95AK5Z",
  "key28": "3oEAt1enRdn8aTNktLvdyQWEDB7j9eXg9hBfhmQwYg3VAz3qST1tfYhXwffoBmESfzDSkDXd6uWimCZiXLjhkWKZ",
  "key29": "3EBa9exW1Ja8g2SRLDk44bMQBP9FhEU1sngBxy8dSt3YU991f2AFQh7bA9LtEDPd7u9dV25tha8XnGds2S4VWXZ1",
  "key30": "4GzqfNEUigFrcg54fEFu3pymfy7YtrXd7oh2QLeUfLExTSfTUhDyXPfkzniPwgeyhhVNqTx6bZscy8eZnnMyrsc5",
  "key31": "3RtEzkH4DB5DY767JanmfdzUhG6uoFVKYt7uUspanwD8RzDpRjkgD1TVT5ABKxMpRv8gUC8Z1k1vUnzcP8Z7eLfQ",
  "key32": "5M4WZuzR4gbTd4AzgyrrveVBJ92X7NRnhNGPVsXQ5bjLwBHQ2A815oVdJ3aTdy2jSHayWMqJmuFNmyLxkYUrpYn6",
  "key33": "kzEMFDG3t9jLRHQz2WY4GKChEQghJZxoYdYUz6gyhvMer34ix1sHh15V2ZFbxMbFTykRHhap35cdPFVpfhhTXkX",
  "key34": "HeWuqrhPdsV7MKpnoBcWuyyokU7rXNX4huFm9XrFKk9uAZUrZjc6oiBxg8oDKSKov5NgP8EsJ8jGBcG1Am8uojE",
  "key35": "3GapU2KJdEq8g8e4TZFt2Bq3pL2QfnQbbhxTatJmuYavwEDppvs5qJ4zCVanXnK7F8Gu42koRWYEeK4jvveDNrv7",
  "key36": "cGQH9HeLufbJom8Apv3EdL7Ud1bse1yy5Teo1MNWHwiHBWh6RYRAGRzikBps6mE7fjNv4izjWxe5pwBhbfVn2mS",
  "key37": "5jNXqC2BnjHsg31kU1GxLymQuAfcLKV9dPhfaxmt5Q6ZVQufkMLxbYZTPTnZiCNtX5nmyJs6cVKRfwYAUFM2fHDq",
  "key38": "W5c6gEHBCxz5ZgQZryPDmQKpBKStNnMp4hanWnVCT6svadcBmuMVk52xS77Am312gSLq6HKNf6tqVQoJyiqvRMM",
  "key39": "3EREsnmvAK5q2GnF9BMKUHE1qkagFngJ62NTkT9nxCwq2FxyxvVXR4QpsGPqZjxzbHWaakSKXGgZzLHwHoZvj2Zh",
  "key40": "3SXGhXZVfRHCzYtHigsGjhnnoU8UFtePM9N4Jq8S5E7zkLFPYz8X9UX9YK8DYaX2KS4Tvo73ZqyCdxiAnxVYpUCK",
  "key41": "3b19Qc7yt2Lyo75WtgDiGejkbzFWa8Kp5KKG9rbWbVHmiCxzh7mYE25FHVzKFMSVmDF8puB6UCc244PtY9gA2ZQA",
  "key42": "3a2q9AVRk6TS89o8QXPzKrpTMhZexxcjUQSMQiZd67gjPKsKLuBzkPwGAYv6AR8PeqdtdwbGmK5Cumjv8XNg4PxM",
  "key43": "2QbxyMMDd9ufwvssP5TmUym6k8GSin3Sh9PBLHffjs3hXnYcc55CCAswMbXyaGYvyW7bgszysoBueUTQi9Fdyjm7",
  "key44": "24qpbShUu7bsbNrV7qQoUPGqC994sc8HsS8bTAuVymSsKusFgpDHuyDep2yxrUBbeNXiQ1YHJm2RFb7gFj5CcL1z",
  "key45": "2sCp4ZPUzf8FiuYuMS1rA4DGapT6bEGK4UJViiJD3ABirKo5kgWvJAHmnKeutDRTAbqUfcWj2uv2v22fJHwXKew7",
  "key46": "2K3RNwidhoZfPCzs56WwoA14nPp1gAKomB1SemTy5aXY745eCoWrXWnHJoEXxSBQSC9TX8THgsZg9ZqbY5vE3qzP",
  "key47": "4sR22mk7AChVeexUtqcTab1YQrXVZvTEM4SPybbEdR1UjmvJYUUoJ7YGedCkyoZbivUqGPxAzAmDDFnjirhbKF4D",
  "key48": "brtggxpHdLpauZa7rX4RXHwbW1toFUQmS4R37Z26NdKv4WwDb3ujHgDnfAeHmYZUc4gf6dxojCN7vnxJKmSrFyG"
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
