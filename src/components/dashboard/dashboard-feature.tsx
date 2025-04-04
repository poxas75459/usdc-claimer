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
    "3wsgDKWYdAXEdh1X98FkbjL6iBNbGuqpsMjYLPZVXn951JqG8Wgn8e9ZcooVTozgtasQ5hWw4s8uQyr8HUWVahNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1YjNe2ZNs8dor1SWLafGv53G26XtTwQs4gavLEQNrhCgmhG8ANatt88ao2cH45GBQ8SEP2tZ5FBir4VEpNUMMD",
  "key1": "5XNAebxgCMLtugLA1o92df1qxeJsrnxaEBsR3fswSZeQc9EJEJd93zrDGrR29zphuu6KBfnrFGsscQ5QiCsqQwgg",
  "key2": "4Mys8f96JgmXtKkpjxCwJ6juugNXFBreaYx8BcHDdmziL2uNU7ahYPdyrGAWRwqjdf5XpZWhYP2NBNnJNuynKRVM",
  "key3": "37kb6wQkUFM85GpZQr5qvgqCEPSRrZjg9fSfg2ndXNdvfNgeSVS6rNmU3gtwxAL7LJXzmT47GBYZF7rLRuDqPsop",
  "key4": "3AUu8TKtDJN18iKPK47iu1nus4r42XdXg3YcAK1pT2BDHZFTVxVapuFQ3JaArZkDzt1GNotej3jYvNQ8MVVPcRQj",
  "key5": "2tcMPz5rszgSUYirzDWZpZS22FkLw5NtPJzq8v9Eik6Xa7iiyTJR8obDz3zbRpWA5TtrNEaCMyCHNfN85BRswaxc",
  "key6": "4VXbmotdS29k61j6jL94HAnb8E61j4Ce82X94jcqKHB4F6hX2dgfFd7J92Y2ore64u2RPMgmoBTdJw5EDmRbsuv5",
  "key7": "4ZLyB5SsXcB4j8ukvUDsTjnaNdScmKAeZW3ggy5B7pbrWr1h4rS8eoYb51cBct2GA2C9tVAVdzMHEJrzdcH2d19L",
  "key8": "5X8jpuMGUeAxsabsRpsiQA8VuAVNr3Rzgi1NEvYcHcVjm8YBvYC7dhHYBpDCvujCu2cYTgo4rRUqJ5XbuXzhXMco",
  "key9": "46WU1Xa639jjPTcPP8EXzLiW7vzP3LVsFGQr4KUsGw6U3EEMZ3FXBf1w41a8GzCz265JsYbXmBJN4ivqzfQbV5EF",
  "key10": "5sTRyR26X9kQAnSZpyp8ZPMYCbhSEq49EQFb15wSaP2o9x4pw41zsAagsy55esifsDbWTzbgqvZ25t1DcUvXBmBn",
  "key11": "3VuyMyy1Jzh9zTAZKgfQR1gSzpAnUgEqZLbZbsj2Gxho6eYWJuFF8xgtGUv2W1MKCrF4doTzN7BgVmKXxGWU66Uu",
  "key12": "5HgZ9YTh1sxo9J4K5XUy1PkjTdZCBcG52Lhqp9RnY4BXP3uSEhSwvCAPsRu53wy3t5vBzZEe275uz9wNhPETZQCt",
  "key13": "57r2Ky57SXy53Z1LbDGXSJJkKgFGQk6YSnQn4fjs27STWvPzEnjVwcg8bYQBP4X52RRriDsR525CEQH3QnoNRT7i",
  "key14": "41pEDPswqMrPTJ2YHbx5eJ6sG6jbijWMGCK3P2dE7Zp1EuS42QEzZfCf21vutD5FtuameJ7wVFd37qGYuiRTG4gs",
  "key15": "DATjzfuiemFp8E3ihrW1mvPnXVjK8AidxbkFRZaB7HaZvcSfYBkEL6G3qDToFWJ2eTSaE7MncoQtjsgcSA3j3Mw",
  "key16": "5ep26UWAKz1kjYef7vjhwFWS7W6EPTps1EbprYQ7WhZ23YHtxyCNCLFQDDghq5Thm4j2jwjy9npTHH1CktNeo3NA",
  "key17": "5RXcXrzYuYEbJtpWoTpXjiNnD9FMhauyGEkYS8zrPMQyvnJeUz6APnqmLmpnhpw6gjReFSz4R5GwoHJwAAKrUP3X",
  "key18": "MHbLhuqsjVBw8uUdoWa4xWqJ4WwQaTExKDrz337CqKkBgrZFGDo4wV29GxBeTSHhh6muiBySoUq1TrZii49EUKB",
  "key19": "2Vys4r3bETiVjwnMzCJx5yEvuy7nA86DdR5qY3ssfSvqSubUA7MHBCooZNxQWU1S5ZU1GN65jrHgXVbUMe2pRUma",
  "key20": "2prMfcESKvEdfv9VPZhqq35k9JYTDzUWE9q3NUBTN3zkhDQgRX61b8XonmroM7Pd41ka39Ue7eqd89RLjLSqguzp",
  "key21": "t7Xmnas9MShcwSj4tQxnDJsTRL7bH13SNK8VaWTgtN1pVoLE36wQG9mD1P7vrk1yNEdFikydwRkjRnGveciRcf5",
  "key22": "y1EjJXRTjBvscYQ76zu51CqeN3BANgdi2PoVEuVAr4ixLAcqtPnLkswrtcQpyj87dMT65Zfi1bVs8ANgX1qM2MA",
  "key23": "4rL5DMopua9ghwZut6NX44LF3VtVJiW4DXNfGGWW2FmTLDHrscGE35F4CemC6w95dPUurmKSveYHuD9tfp7ytmv9",
  "key24": "2VepyS7HVvx9WpyBnD8QHTnGJpZatERNq9fzTuSA56SvZk8vUYTRyyzWo7YKJieBieznwhv3fqQKFEYkKPy4P66B",
  "key25": "F9vT8i6n5xCmLKUfik6SkExnHC8ynETvH9hVyi3VyYMrsU91G8M5kY6LTniz2pEu3JzcvRFNiXt2sA974YVWCEk",
  "key26": "4j8GYPtkVWvaHnbUdeYoS7M1KSMr2mrf7emyS1bAcJoyPQZUuXKt8zDrkahQEvRBLyREccQaX2ZBtpNgTyJLBhh",
  "key27": "26iXqEF1h1DybAfczkeoDdGyz2avxG5T6UJASc4mEeKwKoay6UHycTz4EHDYqCKLXEFHqogoLXDKPFJ4hjWdJvn7",
  "key28": "RZGYpxjY5B6HE3E5ukeozZKHEUhgvf85x747M7VjtoRznD8j4MqvDbLYXXi9WDNKCZDXtQPeKVcpfMXeUTBaUWN",
  "key29": "5RHmN9z4bMRhuhGuLEUgHyX8To1Shyz2hYW4L5kii38RL7XcxJDFAXoMD1AchybqjuFF7d6FDW2Nrxkixs7VQuZT",
  "key30": "572QMsbj4bVnM2MhocLCGuBCiHxrQvGM756MwznVPu2SbDWVv4qK7zBAMosy2rvtP34ERMZdhjQJ6XrtKff6yodA",
  "key31": "5xqt2DuHyM3eUPZmbHidWdYwBsFJzgW81egSrmLASJSGrKAhQ91fcYDhib22R27MEKzH6RPsabTq8b2XFwisUDV5",
  "key32": "2AAAe4H8rp36ZumSc4n2rxwbWmYZqZDAkEujnqM61X29TZopFvn2823cD4pNj9XqMbFkqQ4KdXprhsVhdJWjDR6w",
  "key33": "4KJe6YLFfPBT99Fy2mvnKy2QPYUSf239BjBigth4XYr9dvxxmjEvwbm8Pt3VBELjK82fAdUFSVXe4nwR9AywKfTd",
  "key34": "5dfcSoPkf32FNqDxwaKPsPAdBydnaCPzf6cEtatErPmQUvZGW4WySp1SPq8rMkPSKRnPcV3cHpj25SYxx3xyTcbv"
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
