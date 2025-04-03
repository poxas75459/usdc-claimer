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
    "5BmGoZFHGSXGTWttFRr7yeh6QCY9DBTNmZvLMrQc8AFkgkLfZ9WXumXZeqMTU7Hp9uTZAFwSijdx9B5vwJeMPovd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGAdhdfiE2MedYivY8NFzfsV5NHrUsDchaSzXSHV39KVMJVQsD4UdH2vRg3MvK9LLsCADhgz5rdWrpkGspV9KTf",
  "key1": "43HU1kKizgH1nu12yZUvxt7spvu2Y3sMBq66k1Tizmm1yGmQ6MSz9qLEF3qZexYtnKMHH38uS2T7Kn8pPQaizyk8",
  "key2": "4oSV5vc4bCteRZuWYtCManQEebpWtqHKAyFUNgRVrpyPvjRwEZu5y74GJwm3ssmNkG4v2iph175Di2urqe4CNTdy",
  "key3": "3wPNyeyo2pk27XCNrwF2PPszTs9MwXMdBmty4Qus9i8mJJ3Fs8BVtgxQyyPWg1nzbPR8hQDxLDtKpBkSfKVwoeo4",
  "key4": "2HSAwi2Ss3f8xwspuSnquPM3ohrbhNWtyrn2tUJc5buBjek56qdF4q6THjrufWtVUggtaFqwN6NKyQBctD6B5gpD",
  "key5": "4SV3PrkRLqigk16o6HL6DkJefu6UZb9smkWZuU7EmvxNs9TJt5ku41W2qkuQbYDmv9MGzceVK1hnxK99HNZqVgKV",
  "key6": "71cihov2TTL9PS8QSHWY389EK8WhH6gjdrVkeT22dT5H2FjjgfJ3HApy61SEetx1hY1sQB2tqS95nRGknTryCVk",
  "key7": "2VjP5hqrFnhAR8BFNygSswRDEyHq66dCAUQXmBAGN2vGwDPAiY2tiswmnUvTqhhDiZF9AxWs3gQeuYNjM7tT8XBJ",
  "key8": "35m7egmTXX7JE6Z9mgw4RKFi9U6p4u6X51EDw9iH9R3V3XReiLYP8mPKVVRE3xkuaCU5oGWCRjs2v1akaDcnHJe7",
  "key9": "51PMEtNuFwYQfHcHyVsNtzNxAENXUrmJaDEaGa3gS4bQMY719yRwZukVWVa4S7NQDhr47xFG9qbSbba1juRLXQPF",
  "key10": "5qVheTomqo2GDvrPkGC9Jevn4SwBVxQh39AK3WDAS1e2gDzXxKGTh5wNgF5T4dimngsipUQuEeUqEL2jqTcVLyky",
  "key11": "vBcQAVMr2MP8eM9TTC2H1VHX7NyVaWpzSDZy1dDw7uTZ5bD7nUMAmeA9rukex6SGLNtgwqpS48pn2F3haEcPXcU",
  "key12": "5oT7zZNyaMBLiWNfaQEoFiwfpPBxx3mHdtdJowgJGQHBWsEQKL5FbxFHoCbAvvtuWEQ8KfUAiQKSXw5Gh7x3Dc27",
  "key13": "52dSZ8D3KWCayK9k4SebVyUH81JWpun7ZsGNh9S7owpnsGoosVG1fPgoYu5qSiZLRXfuSDLuoTH4dLN2HUnBrBCE",
  "key14": "NuEZ2UD5QXYLAENe7Hsz3bZogdHPb2mYchp5AuJ3uUF9FFh33UNMyRRf9vRQTFZzGfgE11L1PWXzT1zxioCypkN",
  "key15": "4LMtr4xgk9nUiGSQKDjNURh1ES3qXWib2JVA5ChdzJ4Q8nrjqomf8q4dT6MtaanayrjbR3fC2TK5k2TpV2FRogvd",
  "key16": "55wTiWCudvDuFWJcxP3cyQjoJsnaWGETxKXQuxQWPizbTxKRLhXN7xrBAeUV872cDyeTjXJM9NatSuoLKkUFeFJg",
  "key17": "2xA9811ykAg8iXoE7oLNrZ62R997msVkbBrfZEFJC9QTARcDYk413zoFsNaEWXcuKtDHkGbF8ixyKVNX6eAWM2b7",
  "key18": "2VJhQydvnWq3J21jb5tJ2aLUj3shPFQh6zECJef928ViaeLHL9Z1bpaoY6JGmXSDj11pdbzjpZ4qb9Wa49XjkDGR",
  "key19": "3uY9m3aegxLU3cFGBJof6zjr8B48LnGdevMrKMdMP1o1weD3U2qQa8NG4akGMgVqDfjumFrAYMSvNPd5pyhRJQQD",
  "key20": "27n64PkmX8dEuh7aVTuAsyXRhrkzhUjSvyjkgXzowqcyuycPGi1bjihFzuetiZeCeF7AWa11ddYR2xLFP37fjfLH",
  "key21": "2J6i2889Cj5xBQXxc1p1Sd3tTyRt9T9HffXb9A6ujkpNuSjhQ9sMXLm48RzSP8s2EaUqAGXUxShoz2rFyWDbu77w",
  "key22": "4ZTCGheC2BJXJxVCjhpEJNDhQofgUnHuoDRyAWmT2ERyi2No43oANbebRSLfofTnXyGX4mdMk1B8pPJuwfNSyneY",
  "key23": "25BodxBGS4bE1hVtyYKZGTcb8J59HPH91SdqEJSUuDo4NaPot897qmHq9ZwFDtDaX14nzmbJuNi7R7KLRtCDkWvA",
  "key24": "5xUFHUrZogoxpcy2f7vgRpuATXRxrMpPJAyZJrHfjwszKstAyhjvrETHuM2Vdxd2Cf7WbqN316EQktLUx1eqrkqB",
  "key25": "4m1GMcRVumB7XyMkm7PBFvLacKfSVdZkci1zzu9FtT3Wah39ekN85XJMu3Nw8FqiRNeGszW9jY4V2TKv1cBACBne",
  "key26": "4bQGPxxV4RYPsPoxEykTUvpqxyMwGnFZtAanQKFAyVQSuiyQm6w2QDn9pvJLi4kGLLwVpbQ1VFZtNoY459vBJbXc",
  "key27": "mTynHMvrNmQutAZm2WAAtEELgxsJxb6dmWFmcchsUZVEuT7uhRT6sFAPZvWaYattrBrAgenUmYe7Eta8jjtsNmf",
  "key28": "4a5fdJwkURyqRhDGhzD3AEqXDkCb6pKktUhFPfxJvxA393DBYMDzm9BAep7vJx5tVmP1qtmt8xf6diSqRTT6dNDZ",
  "key29": "4ZLVGA1wFqbVqpxrz9Dv2mjzFzVpszjHyyZvWscwkdwr91nV4Ry5BJQrDfC2hfnv1ksrWmR7q8STe1W1nT6LmVen",
  "key30": "245Lb7WyRK98Mbw521pPohf6anX3HMM8c1juMw6fTnF6GAo4LX29Bvd7Dxee6D2ekYJ71JYYbq54xc8sBwZoSKXn",
  "key31": "63Ny3wXsvEasep23neGhRCzoQTH6j4ZGvzWRUMkoZkrSofpGXMv7cj6oxG98WoRLAtZHMnqLKFpqy82Z4PDC5DUT",
  "key32": "5JizFC9VNe5yECgLE9dbmw4C4GwPLrFQEyMbMqYytMXwqM4V4mDdj54meGat3Qh3rc4gUHk1CgtmYndBZJqTPy1t",
  "key33": "2AQHnd2ikcdc8HA3e67U1fQJKnhY4KNd7n1eLhdVYVqVCcY37fwyeiDZD8LkHRJXVA6wRuASdQoSzRS1vJXU3zbX",
  "key34": "34XAKpfTHCgt9gmqnheAyw8sHemAJQUb1sVj2Ax8W9dTm38yG1LRecv1HzjX239sSPqkxK3D7UqxmCwn2viqKzsp",
  "key35": "61ZhpKEcN46uveEJcyVn6QGptHsWa7J5WLvS5iY6SLVkhfniDtqfwKCB7ChnDJKurpJsm6mHhk2QvK2hEKeKeyAS"
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
