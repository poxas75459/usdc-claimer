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
    "5nBTTfsRyUV6pKZZGpdkxmDpBsx6hcSL2xvrW3a28oPJvCMDBKrtxbw3hkWP9ygTPKiYyJRh1uvK5VaZuFSMwHQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAHPDqC7cvvf9v2DVMf7LhCBP8gYaVr5mVqovjsg4M7x3EmyYYChj9p2LuZtWt5o5nRMuaaHTfNDMFQyXvd4nnz",
  "key1": "2QZicQ4zzz6tfHXmeZsFhZVwCxWXEyPjEcX97wgJ8wYEQSBx96oKCj56LVWNYLVQZvYpYWUv5PzANmqFn8uZwrSC",
  "key2": "3r84ucc4Mc6uFELiYN1bEsBm1rNGSYzH6848kp3ppA9yPVGj5FWbztMP4nanqjc4uL3iKgVrnB4f9GDxQvUMXzcG",
  "key3": "5y3Bq953frhL5e5pHrQP287h5eCc2ikmh1pTqP2cJ8VVtoi84D61oVkziAAXf7XMXbQP6B12UaftTN4uPNEsJWM1",
  "key4": "5w6HHL967xo3JLYmvrystCY2iCgov8Bm28zTH445ouhmVRXemTe9MXrhN1jtLFVMquP5zEPTMWS6BoD8PjNaaiwJ",
  "key5": "2R6v8fHA6GEcQG4vMc6n7rYBJGf8S4DR7PSRzaQooVaFK5FntdM45PJ8cS5vpMXr51j8UB3XzPy6PbV2cDxuLimL",
  "key6": "2pXMfxsyeZy9YT4GMGdxxwAymTnMiB8rnyRtmKvzYBheffFDs6LGkPS7N9saiYt8zP4XJFWmf6UBwP6rhTBU1j9C",
  "key7": "ZLym8cp6ZdEagmNSQqEYYEyhcRVQsKSqVza8NAzFDuRC2qbwairY3mA3qKK1KRnXppFQ88XwqFs4mya7HQefCrr",
  "key8": "4EJfBFMEfA2Su88VrHbGxBhJCPwJ6k4Wgyi5oV3dieW2NYHXJNjgu11Z4m1xehEcsUA9p2Wr6Pq12vdJAqfXe55P",
  "key9": "zzWMfLVPwfXzPrD2LBeCo8mTUc2344hCWKwDVemfwAHtPc8YpwQANrHQAsohhswAYiEtHCtTfGWviBauqXCyWGe",
  "key10": "3VrTLMUQ4epp1QErU38BYpwXRv1Dh2fKx2knMUUVAdmrxAhyciwCMiu3yy2GdE8Mg2QZDjfayqAq3vpY7Z6d1KMQ",
  "key11": "4uiYzy8GPxyah8T37WmrnihHQwdxt71YcvE6bZad22nptLciCFpcTRnYCwRmZddmtmGCKuyemsC6DpH9SFfwGvRn",
  "key12": "sTdeN8GeAd5Qd5TtnMyTF73JvfVCBDjFEJ7ZC276mtkxnyDCs1BwgzB8Sv1ZoFSWMDdB1nsZg1A1rq1gwQdgjPU",
  "key13": "57JPhZfybT8dCQagJstz4rLi5moRE3AZTpbVLWwas4LM3RdRVb9uR7HB6iZQcddBxSqoStME5EZEhY7GLTeWsXxh",
  "key14": "5vLi1VjKKwaH47YUGJsXNXz6Ga5zA1nCz7zuqKVnR8QSP6KMq7Fiy2vsG7usWGmmCiAky1qsnCG77p98Jyd2B3Xx",
  "key15": "4JQYPiyWzPkWWeRuX4VegpQoxCAnVYYygCVuDToo8ovaRHeFjxRJhT2mkqQTrEXwQRyQn7XWDNT9wqJXvVxsLera",
  "key16": "5cAmhDVd32EXvr1HcYDPkCdhDKBaDYVTHkS1a6UL2HaZGywHdESRySXJ2oW5MKuX3B2wtFthGtTUASJUCHt1xHFB",
  "key17": "283C5JTv1jxA87f3CqwNK3sZvfKm1A6RuR4dupP2aSkiSs5fmgpjF3NtZPPYtedBXwARKZV5UEi5V4YZnkRWGagd",
  "key18": "3W9VRZUFrFoUtSnjXmFskNdNsnJwYRdpDCJ1zr6sMbrES8nkiydQUFLT5s5yiFD7ad1xaAtZVZ2RUCUu9qGmaZjc",
  "key19": "3jqqNxyDC1KvpszZkowKu9JGeHw67LHBFySdKwGGsaWNU2EiWq9YfHDLrZg3G3f8juS2MTyjqssrfVDGc6FXhYXp",
  "key20": "3EMNGMCQ8GKEU2VHoH3ebxzSpp77UFUeaxfbXpy7nzpX3UCBSEsMLdH5gHFdiY27Yg6HYjEwYSvfT17eG4zHuoEW",
  "key21": "1t9BrxAJEMz8oNCHsYgNAk8wopsGwmngC3dPFLAYAxVQMQPckz1JcJAYA3d9rKe9Qs1Mz1rpmioDKcXC7RG8Utx",
  "key22": "4ZKPZYknvdAX6PCRqa9rb4MkXfdYWj2nmAWDJUyB51ERRYZL2iQjPjf2cXnVi7EBLpXPCKwnUDhLTD7QSbZRcuDK",
  "key23": "5xpVudB4ji2Gn1Med1KgsZwqbr4nanzkrrsnD5KptN1aQx2quogZBktQyTTKjP6NsC8oZHPE3N3DiFhZ9qD2r7We",
  "key24": "3ajtjoCiCAGNpCStQJ5nWMhfcFFBEW1Y8WrESxbtf6EtbLKB3sJDCVJG2hGE9AxWNAtBriQZFUM8vmmSYRde1QHQ",
  "key25": "4USDG7T5KcnDTVUiUYx5Py36sKyeeRPk17MV3PP1rKPMYdsDRSpXJyJrxJnzzKChuR7yay2Y5mzCxQ3DxxfSs9Ty",
  "key26": "2ctaoJ2KnuRfjrcWExf77fw6QqV8dKxdwNbzak8TQssprzWdJ8TmLRya8Vf1N4Y8YRwqzwq5bYpKrpwaw8vW7QZ6",
  "key27": "34sGLX9bDgTJSkAj1zqm23fj86CTB9VpkuwkXVzHwX6y3Bouen3VErgqV4em853enQkX8EcZU5pyKmpuTAHG6zro",
  "key28": "239B7RDPPgbTsEiTb9oRvFvqDwgCiVXXJx1msJRgZaMxoiNYWCxdB47V3wZtELRHyjhJCMSNK9RWDYzrsZL7KKq2"
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
