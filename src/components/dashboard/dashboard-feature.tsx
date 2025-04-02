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
    "5xbnG7444g8iAzTjpHYUijd6JBreM23y8YskbqcmhjmUeLMmR7Dv54QPqjuUkwykzX5hA8Hzjx3THFkg7iGLEjUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2foWMb5q5E1D1CreVTg6NgnwvMfAVNFbRB91pqUgrcHEVYTsouo3oFCTs8iDycAJPr4pWF8kjBBEVR6bPXr9BDnd",
  "key1": "21yWtReK3Dkxzvurjss5oobFk2fdMP7weNFTWJzUH3bsejEgxWGRnm3EFn9MqddrrXTQE5RnUBAy5MkURCo178gD",
  "key2": "9kYvcMRMaAv9J8vXz8eWu9imuriRquaT8ABL1f2LpoXKcx2f8kAMT6AgvM17ki7ydN6wVvzDjvAHWCpHNQyZDES",
  "key3": "3T7t97bkbk8766So9LBZf6u8JBwThuAuo3Jwe7EWTTdFaez8JR5bjQKoN6Xx5qyMcrTVxvMoLwR92ooKUFvyVosR",
  "key4": "2eFjsMkjpkLiK5RMCUmuVncrzreERVzu8dsXvPxEzaSCyhTzrDSQnYH7MKstZmp7tFBgu7rEfdWvRAfrnyAFeAts",
  "key5": "3RaNSq4th3rk8WrF9j17TPBX2CovFbZhxXYXZBKsdmcAmfcZ43pJtNLZfwc5aCruiYZM48cfAYaxacxpGdxM6qsr",
  "key6": "3xQRmJPwHLa3vKvXVqbjvezGkGNdjStUJsqozTc31a199GJwsP6Q8TwepvCsqTzwF84LbqRqMWq6jVpW7WBEHpGm",
  "key7": "vwBeuc9N4v4VeWKvrT3uNkdHhcz2WCKYN37r9Lq2FaLC86dwghpTYSuqBWgaGfnyyByuuh76ZPWaYXBFnESCCN9",
  "key8": "56PzXMRHyBCGmmB4fHPycBnQRtFVYtts5UX6aD5zoB4gmxi6BnMGZCHRs74oZYSM3GDjzacU4JfyinrJms83qu4u",
  "key9": "4GPPam5iu3tiTfownSLpD19ktsG4x53zyszUKrQaZ6uBdBokxnoWwC2FcjqSz1SiiiFAK6Xa9JSDkm6MmNCJBCNC",
  "key10": "bUFRc2h9M8ZpHgFdfjQiQk6TT6VkJ2mfsqpwgbtnuLJzNWdAkdfkeZP4ZMjTMCJXPa25jCHDGw2LQW4wiwN7PpG",
  "key11": "3T1gZGDUBgSqffEkTpoYDzA8rhwbhdRHvPWW6qRMM1ms4e8hSEwAzkhQ4teK6foGpPhoHsQPf8P6pF7WB18Nw49x",
  "key12": "4CdcjYjDJ539xKMMicvcVe9BKyirD4nGwa9m2hTmpM4P283tCE8eUo6Yb9nXYEkCKK52Fkp6cdW67pd6VfZNysPz",
  "key13": "5xii3BDmNShhZ3QiAFjpGCPcktMEwv6ybSCoVwduHcyhxiWoJWjNnytsveFku8Q5ryMS93X7ZHUw8vNVoX4qGS6e",
  "key14": "9edzXkBoiRX7LdhFcY4Fid4DL1RMkxPf6k3HCgg7dNbsVP3HYk2pvo9MCbqhrEYxQBxEpzewtF1ZeKQHDCnFSdC",
  "key15": "28VqoBW9d8c3Lp4jbP7s5PUcNc3N44fKo6RviD8AGJxzgKsiSJakQR5Sy4N9LmEgA2KAbz8QeUavr8besYUeDeo7",
  "key16": "2kesFDcndeSoYf2zueycMY4MMoFTPmFoZpAh5td5fStcddh1gPKzAaDmeQMAjSgtYW8nnp2zpVCNWVG3ZkhRGBbY",
  "key17": "2shD8WT7qmXXvuJSWnoZ9svWsXwvUKJnhTbzw4Na1J75B4jV4p4UkKiB5ZB3XcSa37yWy2pXvDU682m1XqwXXRZx",
  "key18": "j33yWs6yLXjhA3wBiMsuyG4pBYU5L1GP1Z3BjrJKnALbb3nL6RKE6EGtBYbqCJius6qVCRMfvwVF1gHJdJtQkSD",
  "key19": "46qCDa5a7zPQqRUy1c7TCev6EnPdSdrEoGEqY6B87PWkib5HHRVy4fVpdh4SUnCCCmV5HV2YKHm8sLr2fMMCYGy6",
  "key20": "C1w7jSvvn7eStcyVC824UEZKbDTGHnUTezSBj16NdwewTtHzG1ismRRSCLE1b3d73MsVQZgT1JfPFbqreJzrWrh",
  "key21": "AY2zSP3BAwydThYTmBXYpFW1yU1KTzLV8F7omxKA4euW8vJYBkkbwF1QD4VBS3T1otx9Gai7PFAwrFParXDY7F7",
  "key22": "2oMDHMcUskj9KWS5BLEHeBHuNXaXn4XEETbFCPoAjzApXVmqPYZBo64oDQZ7cQyWKHL5aAhsjaWgUd4ixoXMv1Xy",
  "key23": "3XF3a4h4iexLLGkeem3kpAwgtRD4pynHbVHD2t1maA8xQEcsypPoboh3tzPndM8vwsPbwDfhRj1aGXgmNZHkbd7K",
  "key24": "2wrJWZZjFgqEesS9ar9QksA815o3icsfarkHWgC3AbZkM4czhmExdEpGfwrPHZ7RQ1EizqrsJixVQqBA5iY4CuZM",
  "key25": "37vqtzEGeeKNh6Ay4hUT6GSDSBwzrNYfKVj8mTCZejNd9C7Adx41GejNZgBGw9kbXaPjWKRhZnfHZ8oxjmD4mJb9",
  "key26": "4WM49eTXHghwoCXFMgRJiodLo39oK9egLDjJ55gcyMvYzhRYyg4BppzwCaVadte3jjJZSZQwChwLMAffAt4L5rdM",
  "key27": "phDYkDJxhzWeu7SJH1JZCfm5z8x1QqUNobBRig4Afb4zo8A2NkzGVbtJk5cRELdDkVdh62kM9kTvJUEK7axcv13",
  "key28": "4CUnuVN2fdtXTNFcBrJeuKzfbm2uyq5pZmV4AbgSX5f6J8Ea5zd5CxK4fJiTeuNjx7RTLE8xAuFAyJyvrQbvaeeA",
  "key29": "2LPqmV2TLpfLKZMR2NfEjrmxAT4JDsHvKSRFbwVnRwkn3XLPyhkQUTipcPFWvmqVXPaMcAsK2QJcUmf2vqytxFco",
  "key30": "axZ7gu1LGNki3EgncGasJECKZFx8pxJx8WCJ9fcNrBGyLH71qEt2934VF8NFgwAnzNoz2s6vJBjkydSiALWtLvw",
  "key31": "5RuZnRKekDMDe1GZv9UJzBq3zoAWXGTsrEmuTU5Fi1YYk29HbsuDSy2j26eQUVUVawAagUCocuRroLvcjjumAEUK",
  "key32": "8EvUzohnkw2DywSDxzTdNLnJ8UsUkKMQjmXtLQY6pVMU4vUM6N6zvvLQPQw6gP4yScHBuUuTgPHEFmwtNx6bspM",
  "key33": "3Whr6HGUq18sUMrdYQKK2cZu7r146vqKFs3WA8A3GFy38PZ4vHn67wU47YT45JKjq679vLKWmbaVB4taL8cYKqvh",
  "key34": "63i16XSyuWEpuM6AQwoi8U5uLVFSCW4JJoQm9cC8c4EPt3x7Qa4LywZkNHJf4fi3voCkLz29sDjuJfxkuYJ6MbTs",
  "key35": "75T54YWd62iDwMjZgwwkE5QCvaFSBoACwHLkd7qjqdFCr2gbpz9Bo5wGTD3U3DpKm88giCsyXutpVzQfTtSNfBw",
  "key36": "3s2UVSvs4BSJNUjm69NNAYDHfoR3iiDiPXrU7uzYWJVZfxeCm469TKE9Bjcp7Jmsg8k1ou8eAUyxdLdkwAyKSBWJ",
  "key37": "2mz4Jj4Q8CCAjosSB7dAfChoHeudWfXEkAsNad3c7K7ZLTqrArtVmr1X4LWCDyyp7NJPoYesmy35ZQmNYdfTnKga",
  "key38": "2vJcs7tkAEhSLLWRzs91AQYr8Ypk6HzwikaE5r8CPQTy8fMsJQbFRwpBrzQb316T15FuyGr2uZMWtH79Nn4tw43L",
  "key39": "ewXZRNAjTKVpouoDg59jNbJ6sos18HjXyDCygZFHa2ETeX94Gre5ti8NbzSEqpi7owejKpH7TLQkkCk8AM1jcdo",
  "key40": "2GHnJ7A93c6Wvv9PSqJuAWGXghyGL5RQnWZxNdn1BMGgnUtcG4inoc4Sco1UN8cbpZjZrRsDRwXx4mEi1fKduKXN",
  "key41": "2y9dxjvcGnmLzgg1SywJ1E51JmzZDEXHPDc9AQPiv1fqMweguYYMXgrwxqxPkAWjCnq4J8UzkD2n2z3RX3yTRzNw",
  "key42": "4SgbgjPvYnXnJxnyjifjLUr9jSTyJKXckec8gZd2x8TGwkTLV7Np8FnWK3w14pC7oidd8jVYeRLtRrjhrgWaqLQ3",
  "key43": "dRuGtaCq4iACj9fQ1fKvkfqBFLXu7MWbMDKZ8o8zLWJc5ro8H3w1cip7xSojL624XYRk8JhAsfmh11XHkWeE45T"
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
