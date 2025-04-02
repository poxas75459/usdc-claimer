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
    "5z9ygHdghGPJMXLnc69XojfdaDmAwSii8yjjJButEP5D16bT41KDiDFPkkbgKtHXgvnMJY5fR3z5ECyLAvxX1Z22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvrQE8dnLJJZy3R8pteQAZm5kNtLDzUiM8m3cT4ehoYH49Sv7nx5icuFU1jt6U7WhLuXiFDmDraNLrHvxuWzg9N",
  "key1": "2WYK9pVEdwymkG9ZWq6qfbV1rGDc3HjKQQa71X7xYc6Q2NcjQhq9yAB8XDwoJRsA1PEouxp63D8uf5MMqG4sZ5Hp",
  "key2": "2YiRLM2WCdYDwyV7yV9Lp4hABExJ2X1w3aTg46PuXXo4cmwwKwEaoUMVp6uKd9YN2jVtNtoH1YgwBufj6biK7qAf",
  "key3": "5bYuBXBSbE2ikKf2t8fpgZVWQQ1bocTHxgHmJurvtddsDKbPpvFZyZiwZRPKi3rVGBby4LqsvMpXui1TH4Y6FtuN",
  "key4": "5MBmPmNwb9kaAV3pqFP9dUafegiRszhesx4XTCtRKfuHM3paCXFAsaBg9MJqjSRdBRnQspAEao1iAix7NvwFeMWV",
  "key5": "64rUNU7aEJE22P22P3UafUkoFFPsUBsBsfS2CELxir57z8d9mb53bpU7dx5j9AbLGWT4EbDMszk73XiSVQC14BRj",
  "key6": "3iNKvTgBRphBpNTtWwGpz88Z4fm3WwXNFWPkXRysSvdv73CJzHZ1vBpo7MDoZ67uwp4ecY9UA2J6RiTQsY23oyHp",
  "key7": "4R71ZHfMxSUkcr15be8FsASXhsLzAHkSvtXpxhkAmWsUtvdNYUcWFcqZApSo1TJNR9Qacnxu1ERycAvP1jhURAHG",
  "key8": "3Qdj4no33dBXjmhMuH5UuuAtMkPA36T4zocFtyjpGFkPsxNYsmrUFg81pvLaAxv4PhjhybJrmHizTm6XQSY3PcSg",
  "key9": "3nJU1Budi4rhzquEh5GWL94fKe7ZtPwRJa9kGD6qMYaf7MeBLCWr5zCFuyQcEfbdswh1c34Dhp6gtTEjLxu1u2Wo",
  "key10": "4S27MFAAkaTVkyTTAJNJ6GixDxqKPNDK2YmWgEQj6QRdatWGGMbDBaU5YED88um44pWYeUBs4ftciw4yCgei6Nq4",
  "key11": "45N7Q2LXoeNZb7UCHxUFErgu4zDQWsZXau6wKqxshQ9ZnGqtexeBTb3Een9RHm5JiYx6J5kcvoLaMbDey3attQmR",
  "key12": "5xy6Gahpu63owmWEUUXow5yXM8dH7qsYETjoywzQfo53smaRKzUcy9ompc58RSRXgWe897NdGnc3MtDBqDuadSDX",
  "key13": "3iyUJzZG1gWTSZUwEh8WpiSMYBrNSo5L5AtyUaxevdWoT1FivBG5BqBpJs3u3zJMRCM12SnQrs52jYorV9nfSvoL",
  "key14": "4qQhaScyBPJvy3CpbBAg94Jp5NmL6Fj1KeN57H5S1WfnGcFZ5rpWj8eYzQUZhoZ29xwDRDevCzPCZiGSGtWLtzwN",
  "key15": "ioGqnrCPCNDbWoiYubmkMKWuWhdQ5kR2mMv2gqeg7R9M8U1h7KEeaEKEbGTzHFhfndr975UcXXBZQwLskA1E7Ci",
  "key16": "48r7px2mTEuDsUKNCBKoPPxkcvB1vk3b9XAVfMKif19MeripzXbVjiv7q3cpwBd3AvqWiRXDc2Pajs14HzhMNoMP",
  "key17": "SF1zF2JaHJPeqqund4JRpuiuNF4Z45jV3egerLXyyg43SxtjMGKunmyvqYBXJXHuxXFsSH7v9fAQ1Ng6nA8x1gk",
  "key18": "3wKUsSnZ7s4ZL5vt2zLuQiwqQosXxjrjMAfWGxNwuJXLpxePnQAtuw17hjvmGEco9doZLSoA5GBN35BcWvVssy52",
  "key19": "3vpELfE1qz4GJn9Um5Eqo7HS8CZnrR6w2q4nEQsa6YeSQ39NvKBV6Qkbc4zU6TU32r5MWUfQXKdafnuYDBtSDtgP",
  "key20": "5oUQcdiEXxxqjRE7XWYe7hAPFyvFuQZzXxxnfPbiZLCdAWn8PLFRPyvb3Q3n2odeGTYPsERkUgVjzDVsooCoc48d",
  "key21": "57fAgtRV59tLqHbRpTbeooxyBJHo4dNNd12w87bf6QWNESVfQVggsPkeDSpsEcfiBan8vf5V2jwY5SMm8HmN7wBL",
  "key22": "56EqvSK4eDyZ42N5iDGrnPnhiZgTJ7ukBr5tAE6jG3pQikVV7Qnnd4uBEtnWxEkCYLWtuaJ2WHofP3vnHB47HEaw",
  "key23": "4zSyfBBjFvmq3JzDXZSriSAsW8uLm927tc3YmyWEUfyauCf37Ufr6Lay84YigrRxSXcGJNuHPutN6rHxHbbN4T7z",
  "key24": "4Tk2kgW7YzmrC7Uj1Rm6U98bDuKEWMvRMgkX8eUVzAQ2KWu4BVcAovKdU36cpjaNkt7f41NuDfPZqrKiLSztu8B1",
  "key25": "qhHbhQFiGLm5goJsaqiHh8m4oVubscpAyd62EEyEPGsj2WsPZa1ywSgSHgkagqpi17vExqcgkNwCqMHedSouZot",
  "key26": "3Yw4vLuXkdNN2oS3VVpLJL9h5hCcs4CGBPU8uGSGvw7QMZ9DLfj9o8DYsCc8bXWAbx45FBS2EeYhYLGdyPXz99FA",
  "key27": "kKdYm1PjLo1vK9rxWtMGJ95C3TW7fMUXjcpXTEo2VrHTEvg5SS1Ko8sRfNGmte78ZZgMpzVbXRETq2ictFpBMc7",
  "key28": "36d7VXcguS5BaJSMgaK3YwTFV7t8Vx1DH2VEcLXxhoTmqkwUErPBafdGAj3iUANd1R2EvagyCLbBffQkCoEnZMpH",
  "key29": "5fFqdnpJrkdpPwKhjsD14v1uX4RLgKAwJuVm1qHuMm8kYEU3hmvuEbM57gJbWz8JNSPHxTzdH4YdfdrZ2kgPqqSY",
  "key30": "2Ts1kFF3yfsSiE4QPNPydjgQPjs6Lkvcp2EHpyWHhVhQdGZPz2AkkKL8UHeotX7eXHbHoRv1L1PSD4ngkiSFUwt4",
  "key31": "5kBDWNGLxcPsXvdr5YwTL9JrvYujqBpNZVH529FoUfG6GDChnK1G7nvcmdFybEH1YDLdrHq1Dez4b296pvfBmGUW",
  "key32": "5YhRsSNb2bkvkgM7MnwFGFsQa4jQKyz9FV5qnRqGcf3xDjCcNbsZFNn2yYkwqkkts8jMVQY7ZYUD3EPQJvJFfdgV",
  "key33": "2y17bbDjjGHX88oWnEdPSw7n1DJHrYQadWxqbdntGnLNS349MLPU2cbF4oQD9hArfoJubPHXVaEo6D5GKJ7dtZi2",
  "key34": "4GRREMuvnNuwvAsd5vbS3jBo5Q1qVcD9czKsRz7FD1DHMfqbGQYh4Y4TYB1MpuNpNU5cv1X67PdcBxNypJsvxwKm",
  "key35": "4MFhzqMQDKcfu7NY8RZuWtWKtvwtxM7kzYv4bWrgTCRoUJK2BxUNGxp3uk57bLPdLCnWMnm8416qN1b9F9fRrF7a",
  "key36": "gBf9mu4KNUk5yup7XSfr9jJYLWurccwCegxFzP6YY3Trkbx7jqwj8uU41RZRxpFXY9LHPVdTb92oBNF552R48V1",
  "key37": "jRtUcKeJULX8WB5jXDV14PZ4jpRxpW7hiV3AHpQdk49VKbuvkqHiKakSi8wFrXKMY4pVgxWedaXRH6nYDsf5vX8",
  "key38": "Mn9nuP5f1w4gGMnEqEsYRJt3qnQKtGguHKRSBtR1aUPHLhzzWqEirMnSXaLXYM8ioUPZuRvs4f2N8Ww76bjuQJJ",
  "key39": "8MwuiM1r9XB1o9H8RirLJj1afvByxtFFdPu6LWLix9mbsqZEtsWDzaRCJCqwzhJvdtmstXy2QQA956rjt3fW2YW",
  "key40": "23bCLs11KyZvRUFFh1vM8qXm6PcwEAwEfEBhgadEHfLMG3x7HaXeVm8MVFdvDVCaJpnE5WhLLE1b87nNxjZXW4p2",
  "key41": "5LJTidNzJjMkUNXTbGeqBy54iWGwbSwWcLsU5SwCGxir4tvduWc9PysHBWZiCcUGHYpksdwEWaQNkdacpWys7Cbw",
  "key42": "65EFUAogBXf1yEYweNsSQGmyomPqhcnqa5cXcrHByn4PWCdqYNqP6T7ybxEtFwNiJoSxX2cafotpf7KPyCG39tSt"
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
