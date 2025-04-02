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
    "2EufAf2HC4afSrkXwvDPC7jTEb385S9ef6DbJAMUPH794XKz4Bc1BaJa1mPj96j4vgxqdph2drTGTCgt7thNhRKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkWYMJGEcdHZCjzMuNfWxeWbUXdyr3WrMAB2GLs4XU6CgXtDvZrKr5ouoLahzZyap4nARWV5b4vjB4NVC1snfoL",
  "key1": "4M1p3sBFW43wV5FimdYVmRKmAzKEFGStuvXFLc68n1UF9mENuYPnefLrAMU4mKBewppN8s8kJsXyHiRVzjyTqUTA",
  "key2": "5WDtTEvgFTNjnE3Q7sKXL6zgg1habq948vZwxAVHCkUYjWcFp2HqgpunzbGFGUednWMPB1KKqNd7u9V5Ew2d6pHZ",
  "key3": "5UBJ49gqx8dVkWJgTSRH2NbkpxSwvoQCLTc7UUfTejSh3FzcNwADF51zP3rjy77uvpSbGFw5iNwxLtrmtRfjb4Wd",
  "key4": "2erNzc4rdNXR1yzVGR3Y9agHznZc7rJEYcBXXCqJbxNnwC8NbvSNWiJccd3Rt77N84nnmm2AYRXKiWRRumqmvBjb",
  "key5": "23kPJJA8qPVEoFe8wKyk1m9xwZSuqN6NFgdeybJzu8fxtKhrt1h3SJxGQbHAyrSdeSNtwxiCcWDJbf6vRPL1ee9G",
  "key6": "32ViMSjteCdyKBBEedteYRXGHJHQKVe6S2x6BxssR1wEcfzianPAxrDzScUkSYAcsUzBSNbk2MDmrvw9yHniTziq",
  "key7": "2QKcLEySJCPntm6KnFMNe9BdWAsD7M3PD1hNFec2FbLyHM8A5MscLomCne5cKPWHqGVHkXcGsva6KUmiELpvXGhn",
  "key8": "WtD64thMEAZVTYHkMMcikgiymiwjiaGxhX6Pr4ubV3FUNN1w3wFKGNTbD14VHhYs2a7kGQ25uQRrHUZKCCTtqoc",
  "key9": "W4CSrn8iK8pT2mb7egKDSiBrVthHbRxG6TS6DQVtPj6NtVhMSThNZ9UJbZZ6ePPBo8oqtVk2mByantNyo4zLXbN",
  "key10": "5W28djGbbdKXSAbGaKg1L5y21FnTArmxcNB91pUrPYVQJjrxPyXBkE4ihJsUSQtMnnRjuoCyaRNgeKQ5vQS683rp",
  "key11": "2QwAUmA36b83UuPnCHnc2VMuL4Xo7Dnzu7zi2ExsWZrynZSVp7RNMMSL2GTrPJHMAN98s2dCd5MFmbh1n8zkV92h",
  "key12": "5jBQQx43gSppsfkCv5tydu5tGsne9ucJ4XGXcmos5QhsrvKmW32ZyhjigQD7tjsigrFzMaAzQ3ys94DE7qxej3VW",
  "key13": "3UBX1gE72KpqythSJGcpcRAGDm8FxWWwSusAW9wMFBV1GCNhWSi26sN2jrrk89VrcgJVUMXCE9WrJat6r13Tjp8M",
  "key14": "31mnXejZqwshGxqoKMNRL1tYZ1eUg6PEhzfWLVGAcohngpkNtAetGZGK2fgQFXuSUECpm9q8vFcB3PEoKenV3dCf",
  "key15": "3XqVvZzqddKJ92PT4mejgNWR5xnrjh6iuPE3ytsiP6Fqt49NTxGTcV2J3zbvevdWFLc19REtADXw8PnVAcm8fn97",
  "key16": "4zJweRXBMAYg1hHLFtVKPqP7D9BbrrDmpkwhorbZSudL5zYkbLVYGoTLGptq5oruLRj8kFPcCUnN4MqMLh23ghPY",
  "key17": "4iTy8bhkdieYcRAqZVPrNN1PcmM7oUEx5M2eXfTB4Y9AkrxRbeLuBhtgThJ9Tc6kY9RHA2hdrbs87zMU1Q4fVKeB",
  "key18": "61oLBJJ6Ss4NzQAPSCUSQw2Q8udMHJQj7J2ZUgJR8BSZpbVW9n7mwxdGJJQx5sbBLgAtA8QvLaoyqVVRZAMgQaqj",
  "key19": "eWcneErgq9fbb7R23FiNXRL8PsqQq8m1n2K35uSaqnPWmdEseyPRjjNXsbHcC22VjSF1JVhcPKTDiPGJPnwVhnA",
  "key20": "xyKdwDRpL6zGuPXrJqPyRQPb1FWU3p6FE9C2ac1DaRo957T9LQ7PT1s9hPyNF9inCxTR3PtkhvvTsevQgNCvVRJ",
  "key21": "5mWa2eR43PRNLVVjerVa1VnQpH2KFKrXmoj1fnQGgfJ7riNBSLH5cT1K9eGPy2xwBL1cVzTzR2kjnvEPS82CHGXH",
  "key22": "oGtAfutBxZirKiYUs2vARWwVq54pNGRwahzPPb3XuphfbHfjuZ4UKaXEhWBY426Y3uh9Jkv1VCdskWDs1efNwip",
  "key23": "4qk7hRQfbyKuE9HFVzveeCfffXYxemnzcxk2UvPTxT5KYi92fhEHjGypoyyntzmLjnBhBhyESb4R8kwSQzg55AzU",
  "key24": "34whQHB8d4VK9YGxfQw6G5DCjEJyCUsbHXdYpNiYf58EJVDf41BYjTe9SYVzwWjr4M14LW7RmfhYkd7pyHjFbtRE",
  "key25": "rw1D1yjG9ffhyuwZSzdyNq7xBYQ9Ji1rmK1zvh6RskKLRf2dwpb9JRx46kHnhncTG1KfWzoUC6vouAJhpR4bHga",
  "key26": "2WMgSh9M2zTZDbqbC35o61YwPgn5PtxJcrPVWEJUtpnnotfhpmmB3yVb4kCaX2wMtu2Jy3WQnveCf4D8zjt4yNqV",
  "key27": "58SAXgEsNjoW7J1zRPqcEjtCZV9MkRrWNJ3jX5hVNKmwqnWLjcA1fULJbvngcDQDydYw7RUc6WVe5fb9hwUu6eaa",
  "key28": "3rmwHtCe9cCPtw6zAcFuy8W9h8YXxi7xesPYDShd1qdVV415igsCq4EfX66UtkZgMV2Aja9FnLLfvCpJMQ4tvCJZ",
  "key29": "4MEp5qq3eCuR4PCLNejQiXYB8GaDQX5EfBgsAtyZDFzhbWB1Ea2jTv7Uu42rSK1hF9q3hmBDp9Rs7CPMK7f5eB1R",
  "key30": "5gCPTqg32nwCRDrgmP2aSixAsQFsLH7CHE7miof1trbSafaTk3VJzW9z7HfQGUewWEHWedfcv7bAgYYErPf5Ntys",
  "key31": "ZyGvx4YqARzwmgr4mp5pxuCVVF6NFARRu82QvP1XfW6c29JAW283UwEmdhPG7Fcd1wRhfDvW1oUAoP5mvatSz2w",
  "key32": "2Me93zFPfmNmSMH5pFRZ9hyBq3iggKZMTZRg23CsutRMnYfZ3r75w9XU98LMpAXCADZ1tgpYmsMN52hsvq9fpZGs",
  "key33": "wQ5f5eEcgdoKDBEwwHu5CC4ZgRu3PLtdA6cmVekKMJTKVhz2uG8phMgS9uhijHVe9ksCFMQqjpYFpWkHVN75BpN",
  "key34": "2J5GmZaGQrm6z4vqDVaaEjcSbTApamJ2fqFFmfAtuJNxJ87Kky2ZeQfciYosSELKtCJwkKnyxHHjqXPoDb2TWRrw",
  "key35": "3rdSFin6CVLnr8izakTx4rUi3XSZ5mecVBV8siSxJYAV4JdcunyEgph7cLKcea3VAh6tQHwgxd7ACS5eNxebqvWB",
  "key36": "3sQYA5q2zsuaL6RAs2ZetZmM11eB4zpPruoX54d8hTVRMnFZbzsQhqw5ihgc8yKPc54ajkyUzwpPuoRb6xCSW1bf",
  "key37": "53JWFKyVaEZN72FXc4qtMadkmxeLTDBt9xZ3UrzBDCmMMqV59CqLa4XZbJaohVcZCVND8gqKR25MUwJE3TqqV12g",
  "key38": "2bSSH3s2pv39wp7Gyf2uDB7Tx9hqJBVheoLFAEyUbF4RjiFAGG1FFJHt79vRyAXasM6EmFnDtKf8VnJK3vEgT8Sv",
  "key39": "2RTM4SGSpyMVbiApAB2ZcKhWrJjKvs4Pibo2ChtXcxoUXWJD3tkaivwzoavoaaCFE62xPV9pPbPPbW3Vx1JXqBqf",
  "key40": "2teKvq7Bhx6P7AgMs9DTFXHwbyqvJD3aWhjJQimo5YvFvp5AEECsVZSDFmo5Xq4oYXsr9PCnu3UmkXknw9HedndW",
  "key41": "64unez5yL1EyeQKNGmjNfk3ehpLn6n5KxQQhv4jvsq4zR3qqQtg8e2vGXUVTV4PrHYaZtLq9aNq2zh7fh7U1xjoa",
  "key42": "rLR3UiqE3KW2rS9RKBFRHiqKmhGCfnHjQEskzCZEf3XYCxjSL12SzywJgY9e9xRXhFYL9W27sKKTDW5cGySRNfn",
  "key43": "4ZpUj85tr1ioznKY94jJTjr5yF3dyeFheJpc1wTAccVg22YVsWxzXfpk8LhneNAR2LVs29bLzkPBjpKW51rHGDX2",
  "key44": "19gJQhJXGB7N1pd8zyL69AUyoKzziGPRLSc5GcUW5FFSkFhU2wudDhFKTDxdEdHzVhBKJatxw2GphFR1AFFpA65",
  "key45": "3xYj6Tw7A92f54a1qS9tLRnRZhpNZbM1zjrm5wcyo8xYXFg9aDJ8nYQnxh2mnmUUGthQZQQtVTin8WfT3LcUECwn"
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
