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
    "5D1e41wc93N2T6jtUMuJXoAdJC2TxFUr5oZDkz5WcFWAK9jrkR9wRLabdapApebxB4kkCh7HbzRjjYXgigB31cwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCdbqkjVroEBioZMVui8wWxsXS2vv4oN3CEkEDDtvqJPDiFoGsf647pCcsHHtH8Rj3rHeNEEGD5SYemxQCcWgQA",
  "key1": "28eCwteUEHCJgTawB1jB433jk8ErfDKCA82WViJTkdP2neJSBC4NUtH7KznWk1SV3gma8CA5xGNBzLmDvgdzg9JF",
  "key2": "3jiWEuKwz62dVnFPApyHg1SN7rmvF6EpLzxpjrHEMUjMzk1HabDoq2cTytWKodBNk8CjkykQ4mHMmNWKTkdcJHPZ",
  "key3": "22SmScBrhNLfzNQCBB6J7tfpMyaTyuRuQV6pyYFXw38FzFSpEK4Xc8FtEJEiXnT8FSXDvZDhh7fJwRMzy5DjXE1V",
  "key4": "pJDK4nrR4B58mPyiMTXMUtS516nRgnL3Bx5Y1kkWPmqkiSS6ciyR1HgHrJBbZdhmSHdHEdfQjVVHHi4CEWC4Ngd",
  "key5": "HRuLPT41SdeC76P3M5Gy27M2QmoQDJA92WUTJMFdsMNFBS7Ev5ydPHqcd1n4rrRUqDLDPf5imW2zH5S73Varqm7",
  "key6": "2CUztyGBH5di5kSCLv84oLwLBEkCzzhbsJcS76pVgjP7p7Z4GWfGro4kSUqw4x6GKf649esUi7bxESznuypoyLJq",
  "key7": "5JrZT4TEEqoh7Ag1pFZzVWb861j41CdxjGVHpdZYhsjP5yoRQJPsWPDURpgpnsk3pfcJNXCuWepT3znBcPp9NG4d",
  "key8": "D1TmRnwCm23Wxp5WBH2jZrzfARoZhDGUw2jXizda6152W453beWB6rGMe7pqiQ39RN2XUHN9sZv4pE3KLJD1XrW",
  "key9": "4nVjrMNoWiAnNi6LnPft318fDGZePgpKEj34Qs3LgoDm9ctmAGfdiU7DJrthkTVvRTteC73MVt13QLMdqCCYQ2Xd",
  "key10": "4WYVcfMQHCXvrxesVR46u4XmJZ6kWck2jpFDvBWmodJp34tM3kDbVR5FgxAKBP7iocjuQTG2SdHitRVnvDj3MJpZ",
  "key11": "5CVu3AorX3xXsLnQef4aeiU75QtL8SuDLBz8VNWhV9uUYnPUVg5fs5q6P2hLRZ9JqEzx95kZPkdzkix7jBRsn2Uu",
  "key12": "3WnY56oZE3WrrTvyqFU6T9fvBpP9hYucMRuJKNP1JXrJogDfGRNhYj9zUMYzq5xHPLwPLkyqUYq8s342abYvgQGQ",
  "key13": "3hdUyVFofEbH8ufYwJEpnHcxUTxKRUSzpsMS7t2m7nf86MgVbcvSGBrtHDQgG6DSUbM2Mt8i5YgYb3bp92wfmG5f",
  "key14": "3GdcjpriG2G8aQw3m2qzcGjrrtu6nuDu8jDR1S5quSdmmMnDdi4iEGbYoqk6HNGtSPNEHGsjs38CvVuFL4L1BJBj",
  "key15": "4Mo3XoQYy5iSKPyvkBEEdFzXEXWhDHPu6yU8tZu7uHxcSrRffgMxsJxWPELCAtnf2R7a92Z5Qz9jGFfTELRYee6n",
  "key16": "5qLL7sqZJC23GeaYZaHABcQsJ4wb9iYedkPo1wWo2R8Hf4vjPJ9zhTQwtQpjsPM1PK1E1Vm4EHC3arTCkiYMf9uM",
  "key17": "3GTrpPk3UWExwyBBNnJrsoztBQXjMeAz19j6zmPCTiZd7uPvCRK3c6Kv73xWy56BmTwGoFzGHZ5cM8tHRjYH2tL9",
  "key18": "5gok5N5UeLRPnqTBfEgVcf9FFaPt36r5cs8mPmqqn4ShAE9hWof3E6qEdgdQ2JDSafSGqngVg7SFgYPNV1Mw4mLD",
  "key19": "3exhpR6AdgPtYYB6vvYNnBKPC2r55ZdgJBVWJddtp9yLcWPcFb8D3wMKYJebh8yXoYwGeWmHn4kPJc2n6cmJgoqM",
  "key20": "5KmwrvcrrVvMFJ9kfWnpqMKE9So2Ujzdk9Fu53d5hAsr5gVM7mr3p4HzJJeYxzf6Fg1veB8kFkJjqGHt17c2LE7A",
  "key21": "21Ftga55aJNYhjETeJFdTWWtqw47eH7dXuTPTkeASiQe1A14dikDgAjVJFpM9NBFHMtjmNAZConhYtgya4LSBGuM",
  "key22": "64Txg7BtkNrxvZ9QqbMXJnX9PRy4JhRFudcKJRjhxQafLGAuPqid5rQj9EWfg7JLeq1sD2mNeByLRJ4fWdUqJpR9",
  "key23": "2RP411LsoJ8JbWyqTeMbkKBkLfedxa4ZWeazYTMb24Bx7kxkzzBN5pJrvm3CZouPAcmijnqDs4BiinSXEzQ2aeYB",
  "key24": "2W4wHatJ2FM3146axHZJ2yg2ek7beVifwK3FQ5S5YFjh2eNRGVbs4sxeLMBmgUqHH4mKai2xW6jqoXVwgQ1kbohp",
  "key25": "5CFrNKLvUh55H4USbicY6pn4bDLGyopQnCvwqAz1YbgB7DDWLnBTSy8kvN7Mib9b9zvgyrLhC73ykh2DSR1yyput",
  "key26": "5c6EEtxaH3SvWP6H31p8oB7qUNtG72BQ4GuTpnFY6jjMTnXB3ixAfoLg7ksuhBzfDRdQ9AiUkhXRyx3fYAoZ2uzQ",
  "key27": "JWkCg8DMQcj7dd8EoDMSgrkY7uBkW3iBCXFfDJws1PE1vBT6FeqW91CkhsNqaH6fLMKwjJB9yFamY746p47wWAd",
  "key28": "3Ln8zekBzPwpeeQukz2LGmxnAaq7LUK41mTzdtTyLTkNSqv2sWQfXx7EqvtdknTqm4NfvStiKwioFEffGfCq3G4a",
  "key29": "iLqao7zo6g1AFY4yGxWsuLpd4rW5sM8mKoBh6DM8uyHAkKHbo8C29N2Bwmm3XhKWtxQkFA2eJC5auueq9XxhgFw",
  "key30": "4LFUPCac7ZxGxuPGhJtaweH3XkfjioHiPc81F2LQmNkvrJ1dcQWi6gpfNnUJKM5F1VsUFq9Xg2W2Qvb11Rris7Zx",
  "key31": "3GuL5jq1CgcfaSdhyndunxGc8vVXM6EUxbijhrKAoAqHznMpfPiUHJc3eozLcbhnc7RuaJpjNw7rqrpWoRCNPF9T",
  "key32": "34gy8qU9Kvtyc5DG7vDPsUdEytbGEm16WqWuo4zRrV2HjafiTbQoAAAnjJBZNJht6mpKt2ZNZVedPwwJU7FhfcUe",
  "key33": "3UK3ajLrbs8F5XcQGKnoQ7e8pLAKNT5wLTej4VjcDniML7sP5qtUetGHtAphETw1WK8mTycPdAgwuSnKwtzC2PST",
  "key34": "3XkMSuyEPLzeoTMwzhDwRyD5rcdp5yjL7ZdYPD8kPegpFmYhwpbTm6o8bzcnaDP3SbSqNeugNESnZHPSTA4rax9V",
  "key35": "25b9n9nvBgZd1nYJAip76wjZ1Cam8HEo6emjgeH2DQb3xFbL7gDVrHLVqppLUrtJpcwkCYd7gcoL9iapijGvfYnB",
  "key36": "2VrJCGLVkvRcTWhPJB195tMm5mdhYnsQtjjwnZoVRfwQ7XnxtL6MoVmpW2uSYtGg1rBmXbVpNPRznTSXg46wx56k",
  "key37": "3Hw4Yb7SNtDXSFxHhKd88qXYNGkqW8i8ijh9Kipuv73fAZotra4wQ8TwmvrYXH9NXG9iz1LBPRKrqW47RZUJa95V",
  "key38": "4kbvrvjrwkwQUgRTWPtRiSJ3GpXSHdusNVmswy7FUmjk6UMzLzQuyLQLHgAyt1Yhm94RLe54JMBprwojNCEafCPP",
  "key39": "58RKy3c5WeHgv99VQLiRZC3YFurzHUwqdqoZkaNSPuvGeyaWDXdBChX8HjaqXkuRbas8J3fDsX4DAcyVS9GpJjUV",
  "key40": "4RkzMmXhiJqeWwzBxrteQfjhzUQbzCmVwHHL6Y4op6VkUU9MhAFuDxePtkUmTiuDYCNpKyP3snvfmuxzcGQvdr9S",
  "key41": "2A7MqZDstBfpv4MEiU7dy5wVFy3DhEXoBQeikeQou3KoYznqa1QVAmiwL7Qzs8cAYdWrCcMhSkebA3nL1Stu6Ci6",
  "key42": "4seGbQ316sYMrWNtJQBnqcNyMEBhpca1txuoHmnsd6ZgyKkJs9hEBxYB5vQuMDrLjUMhwQ9h7eNix7Qa1sqvBTZ7",
  "key43": "5orFxDpqiiSkRShfJG3XNk4wVbhTmh9SiNSPgUjpf2vVVbuSrF1iZNBLm3MAipusgAiAWonLhLSqBpPzrf5991TQ"
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
