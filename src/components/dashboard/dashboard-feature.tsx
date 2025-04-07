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
    "3FrUKhhujsKtRMbeF2DPx9qcREtBFiLJLeLnyzHLJ4NtghjjXVVKtaKFiBhaoTgbRYgHgKobs6vhDhKBHeXxL3s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auyWVNftEf5VXwqXdQaWxdMg1abqKgWrPembZL5p9oi9vuBT5DsaGTRRnXFhLirjmo1Jc8qM8G2CCp2EkUxWfMJ",
  "key1": "4CL5DDqHnPU6o1bt62rP5UcchTgoE1Ykcxon3nSGoDKDr5K3HMmBRMSUe9rUVzL7NRBHZyigDkWKyz2gYnDNbbNy",
  "key2": "tXbBmiCPSEkhHbN47D6VwvumzE4aPphD4nQyqNxLdAL9wqeVg9UxNrWF1hXrriXx1sEx8wLt2AzFhnLKDvxk4eE",
  "key3": "3EdNfL2g5PeULLonjKSSvVoSCCdvKxdHuNdB7xnuoV7Q2hExke2J3XUPdetCY6o3kT4fpuVnZwtL5k9s5JkhCfDh",
  "key4": "45cWrKb4e3UDsFTHf9A4Nbh1dVA2NiZwjQ1Qqs1ddJkPYynPw4LFZAZz6j9G2AeRByusmFVbgWtNc966mYMPG3dV",
  "key5": "2sAERjfFAn8WMBdqkvALypBctHfrxxxRCCGaGZ7wcMT2k1UCXWDzy1os1cCkfRK94NNRarp3rnkfS1niah3aMsTg",
  "key6": "5vXffZK3nxhyhthLUehGYDN7L3bHtAaARq57Q8sds4dtKBjpmWNeRyr3ktYMH4c9o7PybueRr34ePnP5e1eJHjh3",
  "key7": "4exE4ZRHBetStBqNKprPiL4cAtivtnfKNFtftKZU9rcvySGUUyUqQikpzfr6orgrjHRWqt5U8RwWtL3TGfUwq5p",
  "key8": "4gNBUETcHaRswsJiPUiuM5dZYnsKipLS8MHhh4uKSzRfwtDG5WURacUkLM4K8euZNeg2Wnb4b7LMJnBN8nmAYFBz",
  "key9": "5i3nnoCryeEkqwhmGXuTMEpUBE7PsbhSWPzHFsRia84XcQg1Hr6npcUzqsfh5RuZBRgTuwskx5q8kwnjZPzgod88",
  "key10": "4eEsb3BHsAiGxchUXCdXqX5hADcrb8SuQipv7WAF6Rw1zbBPJSseVsPfxcsbiHYxg4gS9cMsrvdwDpFFgVHuCxSp",
  "key11": "4MZUzzwXHfpu6yAq2uUgxdspMqAfLFWtUnF5LTUkD32cR2ZiVwnY8wFupPMoz61eeykohe394UuSHBseLH7ss9UP",
  "key12": "4tvzLuANUgiMmjKxbeSYRFmXYczvGFjrocrqYwJbPz85Wvrfnxybscjvt7Ci3AJAJS1ctMobvWVhtL8fnU8JN32B",
  "key13": "3ckFGgHtmMZgTcRhZr8qM6xJY36zAiPnmBpz7HKTnPyFsy1DhsaL6VY9FwaRxjpAkCHC1nPdTgfQ5A9KQ7pBPJQF",
  "key14": "582uRZW38aneXC9bwnJ8pXMrS3hZkQMzaDSMzbijjVKbe11hHSJTaQFpH5rXGwrXeHs95AXM5T6CAZeXgh89Jt3g",
  "key15": "3eYhR7kJ1XALQ6YFToRBs2sh7oQ5MFQgttNj8YsfopNwRd6Kh3qaXvi8QJXULdKefpk5mbnJXcyjr9dCS1HgcLxW",
  "key16": "5e2EJxYzUGCxs5pp1ND6mGWDnGTEV8pR3xPwKiuYmuAw4DL33of8HB4RhcozQ3cXaQGWMTJsUWYDyZEVNc7tYAKr",
  "key17": "658LLgCv6kNPZh26bsrXPqBsgTFYBjpgeJbQReVXygMuZc6U8Rqbjdso53MsguPeQkG1FhkA7SJWttGsoVbq3yqu",
  "key18": "5qCVX4huXKUt1rnKeTSEvdLRd1QNbXmtU8mqQVUaSSmu8MNvcdrR9ejb1DNG5taRuLfv3xRhrEHuyBRiBxY6QnpR",
  "key19": "PUpvFad57gxijc2xVK3bgMf1JrAVznPJAFRv8t4xFCLxs2WLEH5NovLtc5TR1ZZ7zM39gdVJd9o72hjxJ7Nqaz9",
  "key20": "52AaVtXQWxGjYxzvDbXY1SJf7GhTi34DKYRkPWStH9wXgkujWSSuQT8BZ6jy1vPRH8eDUobzYkt5PJKEDCJFEJZG",
  "key21": "5JDZy9DUM6MJgtHYmpvLanGoWCeDN4MtUhtNAe3Utvdreh155HcU5hvgTZASYgxMiUTXVNA87QKYHUdVKkQftikn",
  "key22": "436zvdV8iwVMBewHGDHFubX2SqhtS8e2m7ug8Nneay4fjRk8boYHRwFnhLUL5gVB613Qc62MDXJp1TarWEiqfLno",
  "key23": "FJJqxKsdNSi2Kdh8MomUADKwtR6hbFcnUGqmtG9Ti4LBud6C3cGQvTZoaUC364wk4ohMHQvjtojWcPsq1ZzCFee",
  "key24": "3Gm6q2ZFKUFCQJ3YdF3nNczxAVXVi4bxcAfFXbPWD21WBtXgrTVNpiDCQaj9o7yyQ9etpCyqYq8dUQwS2fvxiCQf",
  "key25": "2JRYTye6UiyoBdgW3YpggFpkWszWrstojuuSdZzeCkxBNJBGe7MiAw6mxbPQWy4rayZLARwYADSy2HtxCDPDDn9x",
  "key26": "2f29YCbWKmHyiazFo7JjanLC7rehckQ7Efc4hzZ7L8XYz8Rp8dHhzjcPBMyXtoKhWgC1m8sbU8TEVnG7NJ41vzv2",
  "key27": "5F3BpAnwbwvkaWf2DqJFd9p2kd2zSht5XnMgQ3SAni6vwHi7J5ySbVQSDh4aJVUVRfrdXmWwXA5EfBreQFcrKA5c",
  "key28": "U8igD2Sc31sypTYd4Rq9FPRtbtATphSEWocaQqsxmkf8jTRn6g82Te2JZgG1NLwaV2VU2af5ZWazkHRVGrJiN9j",
  "key29": "2ZJUyzJPXiafgFg8n8Jt2eE4F3qR8e49egkxCTsop1N9hsUbBRxvzxRJhr2quKczcsseUcJTGq8kcfKuzAAbDSvr",
  "key30": "3EjzmtZDwvXfkQoH4XFzE4L6nPHktCSUhHFm83N34nhMk5TCor8DVmGQhzgpf63dZB86CzPufSSECkh7j4pL9GYq",
  "key31": "2LquiN5RhELXPGyVUxwejZXCowN8LuTB4L1k1oU9CvWSG34URV1KWqCSQoR9pjyJ5jLFHtVM5nzf9sxNNsxrASKy",
  "key32": "25WodwkKVteeV2odEVNPhgu5zz9eThFTo5KartBg2fta7DWDWryaCDEUFTCkCxB6RYN6x9Yyi889yjmtPJVf8bHM",
  "key33": "2a93Kj4sao9tgHj6mUZ4h2eQED7AA4LqR4UaTGAuG3C1g1gX7Z865xsiDexobLffs6tKN38KjqNmZXhbszm72ukV",
  "key34": "fLTpuQKKZ72qwkUtYFmthRx9d89TQvyK5Mf3te1PAY7ESajTDyEKJfrQmD3J9omoyfhJ9bg4cmf1kKDi3V6iPjW",
  "key35": "5uWbFSHoy39P9u3BwteVhVxbcLzNL7ZnmdazXzoaed9LtJAGvp7njVcG9oHMxC6zBsAroNfi4ha8zfDZn9JztY7U",
  "key36": "4VVCEQPYxkcNFD1P7PztufsZhLULSKNRDNUS4hMjVbfH63ydZf1dTggTZU3xH8Rf6G9GfufpcJEezjN7dvJ75Qwm",
  "key37": "4ozchZAb6AFiVugPd1C5pfMqektT9YHFFBMF3WsjFTy3TGz1sgXvZVbAArxBdoxZ1yewBEZqAVGAWwYXcg9j3fjP",
  "key38": "3xdtjf3tBC4SKxmb2wtBmkYHTo5UsZJr351NNM2p7EpWcqAjnCkV7zgbnkCBAw7orDudPDgKSnPxJHu3kKWfJ1Um",
  "key39": "jNGRPiKUZ95k6S4jeGjh9x7T56sLrBRkGC7c3wFKPmGk1niWxuFGgs3xzwo5vuiYnKmpeSygDRB7xZvZucCFtyg",
  "key40": "3bLXq5LNEtFuuJ9SdyKfiPnFPXpjFKVKmBd2sdSzT1ycqvomaftKprgnUZN7BVDBr1d26qxppGHPHpMrvC6RK1xQ",
  "key41": "5crvAhFctaELd5bq6Ha2e3ExiTVTYhWNPP189mQxVPMCSustSFZRimEKHDz2DecHUeAHaonjJ5kV8NQRgWzqtZx",
  "key42": "3NhdMyA7Sp2bL8evhKZ9rrLa44B98uYYqNbDGrPGVKivgmM3fkDN7MxDgu4BywvfhWSgc1sttNMZaXe71QzsuWVS",
  "key43": "4hwqEog9E9FxNoJnXUzrkVhzYMyPjxgbTFirKh5voiVEYcZK4hQK9P6eRKpzjVheUY9Er4ek5tztpXmG47BFmgyB",
  "key44": "3EThcssJstf93m3cHq6qBGkXYJZa7cMDfGNfRqPCB2EhggJUXbhQ5daqP7WJnGd2YeYpuMzXcZKM3K5GQk5PG8w4",
  "key45": "2fUZ39A62yfmuY9vR82q7ykkBW1gs96a1ZGuWXzPMVkRBv4ZNgexWVkP1QHbRiBA5um44jprsTM9zqyA65YCnBCk",
  "key46": "3xnZggNH6DBXg8JFoMh3FBfCPMfvq3cG6AA5ttiSR3ueycpGgH1yg3QESeWZ5jwzvDCAFP2hdwSZGRvj6z6nGi5v",
  "key47": "3tH5QSAREtKuSJQwDSyWcSAHeBdYehP9fHpjhHTmNQHyeoTqD6XNKnPDq9Kz8igzRW1KriamDh36JiLvyESyRKpZ",
  "key48": "2U4HjmrGTzunp5WkE68QPoMrzPznAvKiD6m9WtYMMQBTjmPqC2hmmcsquu5c4FszekSMByV3viioPdYNqMVKHg7Z"
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
