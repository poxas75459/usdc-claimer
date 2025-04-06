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
    "3FDkENjvnTUV2mncREQWAc7BETDV2GeKBvHUVm7YgA5CDwoi9vySi8tB5uQtNySktxaWzu5pdA2nfS8vHZZkZLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqsmggSsAGgL72jDo43f32ZV4LubMgJW7oiDosHbaGBPqojLy3rtAk5pxf4i7Trdo3innZhDemgYoiiFjuEHSuq",
  "key1": "2cKFEXMxXBqDLLqFzyVcQb5JrgUPAuSQTUTgWaUEwXPHHwjGkUAoTuR69hScJuZZjdzTtvF5dLLWAGy8MvgWnXaf",
  "key2": "3idzkziUmny6eXg1o9ipzzMpwTnMrwFk3kwTrycSB41NeUuRRuqnrvhrE8P93vYmb9EUtAsfkijAxSquHk9MZ65a",
  "key3": "5wLM47M9EVEyR13Cs5JdgwDCSrNF2Hb1eFg991ZyUpu7B23L98c5QoLM9GojMyoRVveV8Agys1PyS9UGLZq4ye4F",
  "key4": "3Bfi88RERMSEzwH1QcRM43b75hPziz7cNiaUxd3qT1hqnRydSQjcFSNvfk3QKVFt7SFrh7dpq6WAZ8PnHPS8ncAk",
  "key5": "4UVfCMuxVQopEmYAA3DNWfGrkZCHVbFEnpM6xMF71cv8Qn82QuR3YsrM3rCyQMna7iH4kUXdeuUw3RVBtceazDiQ",
  "key6": "3beqaWCs47evGDp43ohfqjMka73MoaMu3rKCSVcyvWSc5v4BPq2XLx4w7UthGndwvtVWqJwJK7GE3WgqDqAiwW1z",
  "key7": "eMAxAm5stTcY6a59bnKg98tmLeGaJHxM6YbZzBKc8fXTjm37SiFnBgQxKyugk7uG9Kxt6JJYmvizUMHkPPeDw2a",
  "key8": "4YMgks4KJohnkcAyTRQd69NpWi3uuZCtfVsFYWpenniKi8SPGNwYk9MSgp7Q9LHgMy52rPYGuwxxfTYgJaNBaiZx",
  "key9": "3GFqBZSZacm3sHfoCp2D6Ju29UNabjEZt8SVs9GbnRoT9qJVrbgFqmvAye4wbG7qfFsbsw4b4nf4LvDDDvT2K5DA",
  "key10": "4yRftFnM9SEfLpSzsKKhnMp3zaeDcAgbCNXJ2E3rwfQSK6kc1u6D8P3WSkDrrJqUG6xy27t5vKMHZemFE1ELAaaw",
  "key11": "26TBiCUteZ3iiwjmUpozZDVTR2nqovkeQbfZGaKJ4gL1Uw7eWG3n9g81MtgfiwXqEpYTqdoE53soNPKuPtDDX8FT",
  "key12": "4zGCyvoyRC5RSa5JxLa9A9RJ4iVe8cME57kaf9rDrz2qZFWYbtPKPfVPy81Xyt55tkimnA9J8eVpRm3JrrcwsrZJ",
  "key13": "4j2VWomyGvtaPqpdDKbeUhx3xxHPweymM5YEDYbScZc6N5rBa5b6o4KwCmfJVj9QuHmGkZLkZw3Gxm6ZWLxkjRLB",
  "key14": "4JUxSEb9u1ihzZr43Y5U39JgDLoSBA9Dgw7842ThhgrTPXNnHe3Ja35DXhA7DDgEhv5yL394xwaNbkfBJbTnkCWD",
  "key15": "5j3aTeqtxRC5PjwrXFmcuk5ci77DGDjzCfEJNVZRn39zWtCY4NSdkznxTuvC9zt5yq7YbcpwnJXzvgJ7paf1VHWD",
  "key16": "TYVVJGyUsdMoGE5fERxu3WCu2Av6CWBiihtDTUoqYyRtEmLC7B44V6de5nQwdAbhaL63fJzUedMfS9vdw4PbpcE",
  "key17": "2AEswissRJUE3gj1nCLyMifL6Z3Fc5nZ332NDcKZ6Mrodw4Ctm3daaHhdVGrndCGpw1eZBoAzpyuSZkYDFCvpJoR",
  "key18": "319FC8i5mpcAP4SdD8qQbiW3M13mxwYSJ1Ytu9aDTQaAnZsDHfTYook48PSBuoBMtnfpXW8jFdjgm1h6Y2FLckuH",
  "key19": "5hQqWwRnwnQk9XoChXiRXRGgwVmm49xBcd17LCJgZxGRDYQ7aXW2QRwkN9mxXTrcYQLeEMxAcnvbEo9FFnyUuofY",
  "key20": "5pMecktSrKExUiMcbt8UhTwzYDh9Un5h29HdAT5Ewwg5D2BPYDvCAwkxyDNvi2LQv6QBpJXzj5MQi1jvyg7hjQER",
  "key21": "4ZVkW42qcoDSXxe8pT11MhUYchKkJCiAwTtDxmW8NwG1ncT9RMWJdn2idwjTtrfUMCbZja8TJyuwJShPL15Am3Pk",
  "key22": "4beXjnxueGY4hreA8iGidcAp4bKFGJC57hrPn68gTMALrPQLGyXdQbR5KYBMjNew36SYkzdz6hXFUzztUPp9cDbH",
  "key23": "57nqMcX7oiyTc6ReHunhq7kg9YuKgwrSj9xScGFWJe7vu2C2HZmJs6HPnASkxFRDyYFwfekzY9bGbEaav5bHubDF",
  "key24": "4haUxkUbu86ix4xCfDkEUc2Ugab3rp8HpxjASXKr3tFnxxPeNSX8RHtQDaBytpSA1dfhYAcsaGJfKgcKLsf82m13",
  "key25": "ZTbjwDZL9S51y2tTtr2RufjpC3viDVmQkFjqJrT6SYzjJHTqrFj4EVaGv9BZ9Hk8LGtb3VYh53R9twxBw351z1a",
  "key26": "3DUuxbL6qNvYPznoJofeDfP5Ebp7gd7Z9JvqXxWWLBbYNBcxgiioFiajW19BLHzDPpMqrq1n4wJWM1L9DR8RJeiC",
  "key27": "93GLQhDkvGw77y9cyBQFquU9LFHsXBuKnWBnamSkUrJe2UyEeR4G4huZTedpxUctWSKXcfS2V7mzozjdyp6ALJr",
  "key28": "2v39vh72sA561qrbLaBqfjSnvDNweLE69HXL5ukEHem5FK5Zm8M2NN6bxQFwoSwFgzTMaREY6CUXWaw88wf4D3H7",
  "key29": "4BnFNSfnL2UB27rHtwcFjtsg6T55f74u7X6BRaSGsX5q9fv2mtqncDDXxCCX7iRaMrMAuLxgSZHHJCDzEaMtwiaq",
  "key30": "U5dhSh1ZntpbgGJKUVJoXNQGr8RPqkDPrVGVXYVpXJJkmcBEU2bK8PwJMB4u5Uifo3jvVkt6NrtXH6qGzpWnWzZ",
  "key31": "4RctEDEaWRvR6CJytY2PgVKsfN6LioJQHuSET6r9XLHMg81DLWH2JyEykdHsLvpBQbCg3QDXdHSMQUbDaAw9wBnR",
  "key32": "2NbBUt9NBwVaoPeQTEAqWmJcmNVLudiJtAknF1onbvaxGCyyEZBkMhXYfQDTHpABAJQ19k88sPBsnACE7VFx9hXp",
  "key33": "3n7XmwrrnakEvGQHib6Q7v2MHRFVRghoD6JFqqLrBSj1TeNDoaR5nMLfrkqs2FMAu88F6pH8XwVUrcLqeC2xn5u9",
  "key34": "4V7vzqZsFghT7Yq5t15u8R9gifprJNzv5Vy3ZPqTgzv5Vy7pHV73T467ph3yzWfyh2Q7CGFT5oWnxt27n5rc2PpB",
  "key35": "3tBnasT3WmUfbHdLNZqL4yyKVQbYV1ASXRchn2JQtZtrD9eiduE3q9LbXniNnz4wG5ByQdjdbXdUzM7k5XkRv9hu"
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
