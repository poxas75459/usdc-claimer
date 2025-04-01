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
    "4dRPY8DnWFuhdUHkq2PNjyLWUanvLJWERQ1WnRPjES68LVf4xvtjPFpHhuAToFrozgYPDii3NWAVsX1RFXwBucuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9AwCQ1hQ8qvZiTPWbNMsPFdUhdvNoPPPwjAieNbVbHKBHMXx4xxdXvyQmS9HRnkJNeNYTgFEcneZULGpsGsMT2",
  "key1": "RNmNmPmWW3nSYGcGXCfDTi5w7n7DVEzus8MxVHguusRkhKgK4SNzteCeAq5wb5LwSUiEJ4H32BcAGur2w6bUhhT",
  "key2": "mzD22LAqMtTcSnqnJLVLG9yZj1LabTojCNF5zN7AJ8wyPCQbUoLxDWsX19MWPR8iz68BmJqAPEaiob8ixZVvH1k",
  "key3": "3ygmyLKwiD1vrbMQBCr5NHo1n3FTZrxBeiMEfbwxdRCWE9ArD5HPrvFFaDHAkjawZr1SFpvjNwENe4HiQ3Z8zc69",
  "key4": "5JMu5xhJwjEXDXykNLT1TKsELxo2Yop53x4FcR3ozFXg5Y7PRSd7TsE8k7fuuoxkRDqgcLD8LMS8GD6PKzrUSrzw",
  "key5": "2gpgnutjw6K71DhmUjGoy6qxRpgZvXhy6DLfETUKB3qNZeBjWAoeBzLXi2kQBgYuZGcpYZSgXGYrycHEfN8zADgD",
  "key6": "EdLuQrqxh4UDA3yqb5vUgzX2FxzPaWH293B18pS96x3oBunjHVdoLeyCLCGDTiZx3tnyyM6HLPdvXrTZrLtdT28",
  "key7": "4u6ZVFMN8bL11HpbYSzART5Mck1ZJHNDnNJd1ZmS31NxZ3PeuRyTbuSiJPJC4Ec37LGEsuGJvVb4SgoSVKcS6vE6",
  "key8": "5ynWUmJeQAH9qudvgwSdxzCq33SP4XZxhRPVJyR3KzVDsKo5HP7Aq6EczSE4juh69L1mZAXbfGJMHzn2dCUb7F2",
  "key9": "Mk1hoiJxSAEAVYo3hdh1bMhjZLH4DyDsnQXGpnQLWES35NvZxq6j8rBV3SJ8UcyCeN4NMFyc8sDUFdWDDLr4sFF",
  "key10": "3uog6hNoaeudfwdjyyoxLW2nrghAsZpBFXeyphF99GLaC3F5HNH8bvCiJRNa3EracH8MZ3NYfP8Cu5ZApDZiF8Et",
  "key11": "LsBhiLwSEAPniFoXUrBUFnCmNSuBruQDZgQ27MeucxNwmmRLcrjspBFT5uFAcCmdk8GVYD1WAbbPy3XZUqoPEEM",
  "key12": "3njMo59uMtDJUcNLdfr2bxrvGW6K1AT185JsTWWCSEcEFp16fhT5DH9k7kLEnQVU5GMHUsjCcSt7dQYJYkGtsDZL",
  "key13": "QqSbEfck7wPw7281j8d5PcRecMhY8Xpkv5zkPiSJHkkd4xaD35FZQADatmM3EnsAvRWnSZH8QzLeBkcTimrEQBJ",
  "key14": "XiSzCdxAzFQmBrKmzbbMC6FxaNXo9mrRnGhyKSfNg2NRgGhxpaSMcYBVoV5A39S39xbKi217Hvh16khnbWXugNn",
  "key15": "5eRPp15ZFAmXUujtTDfFCK8r2ntK3TDTakFkir14AhFbmLAcRkvkrqUy1eHAiLznemkSRHUfnbVVWuqF4ik9P3pu",
  "key16": "4GxswspFpS36VXqjuG5xag33Wg4WHyC9LGpGVtEWJQBMKKjmq1cNJQWToPhgrnWfpnhWthmn72dpkddzwiukbrJ5",
  "key17": "54vdGGLak5L6U3JHL8LwiWQPiKMUGt6bXj1j4P4sJmog3GcH3iDsvPTjn7MbjFMEK71RatvJdah7c2V6fmMZ94R8",
  "key18": "5xQfP678e8wcPXVZMkJQ8mgzkyUEqxddp6utNJAHaU57cS5nt8wPppxjyimLsdwK2SXaFhQ9Bdyswqz7NHzhC8Vy",
  "key19": "kiK6wA91XNsVNh7P3qBb38qjtJTQSXiwQRPnxrjYbwSC4xEDWdTd6h12xnAbGgWN65mMQDF9FWXtq59t6HFumRC",
  "key20": "4hohwrHpskXYSUKPJmqGXcTJRkXFcBVM72A4UU6NqW6EwriaHSAp7Ma6FjAmXX2JaXeLCBDrzF6UAJkqDDo1te79",
  "key21": "8i4b5Jb93CC1WSBwVTEMsbrFmDyg6vsorWW2ZsfHfKAUHRt74E1B6APMN2msbA5zWmrSgFEnadXxJJGMe5MbTH6",
  "key22": "4nCiiUxg9MHQsuaQJAQgBreTDD1ekkRXCXTAie6M9R5tduF1s46hY3X39aF5uvXYSDKeZyt8WvGMTh22xa9cvwPn",
  "key23": "5kZWkyhD6WQ2uFh4RKabU14KcGznYp5cYJiY6JpLVWt2Xhr6xP7Dxr3toahUEnLg6dyGmRAdk3gEzkmarHoUn13t",
  "key24": "54m7jcNBLqB4D9Me1D2XXgKiJdaToZqEbA7wqJsFYVbAX3Nm8ZmBzaykQCk4NcpMRjudMtWz2r9WXaGvdsRbPP81",
  "key25": "h3g3wKeAhkrYinaVdFZTpVN3UxaMWg2a9CPSSYK5qzMXpsUWopQrxqZFRSv3goDBvvDKDCqyiNLKAmAipK1oV2a",
  "key26": "4LkfEjvq3P5yinMqMkNPa8aLuSaomgdAN5KonQPqxkgeEBc9Vg1kggokPQejWCKgxd2V51H5FcWSvTgSLbEHNNjT",
  "key27": "4dmPo1gEDenTK5bkDxWnftggUTY6kSoUu4djJShE1f1UiQovLRaPw49wBCiTBH8Y28T2NwCffPe8XT5sUFxZdoLD",
  "key28": "3zu9v21hU43nrMkWjamxZsy4v6CFo9NvGJqF8VVD7QAFyZz9Z29KYMPGZsVE4hUb7kWnaWWVWEvsiuZLgaG7SM61",
  "key29": "5qNvHn1rGVJwEz1ymqsn286WFDcCqL5JFd2CeXchZgzSqgvmEJAhWku3zYgtkcE6XC9tJWx1KYEpLM2LozA5ypPi",
  "key30": "4yknZ8vHeXpRvzhHMQBofFoTy3fcumb8bHXWsSQLwtrwLAVA8YoU7CYwKiBBdhTUvsqs1jnhMpivJqpKuxbBQQoE",
  "key31": "3J1nF2LFTHmsKqn3XWBKzXeLGhgs2FEBnu8nKrFJ3xrem49mg6srF1yniQKY9omYoVrcdp7vufA3BFG2UZYFrqdA",
  "key32": "51J2vXdJrdVTVyjX3cVvdJDpk3SsYuTZSZwe4wACXsFwotyfMC6qzemSrjv9sMcKEobGRV3wC29x9zCrSuGi26ZV",
  "key33": "RiATy37ygS48bo7oXPHLZwkM6TojQT3VuQcUWoF1xHdhucsLF6VTC2y4YAMzxxhshpFcaenU62myh3Pfz8XRX6f",
  "key34": "3ZArrpCjaPoBWvDxboV6Anqsu9Qfthsshi3yxcMcCZ3djWke6J9Cvv4m7SzfVzJGH81teoDRvoQ77FbC67fyvnbA"
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
