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
    "4rwjFEPPAZwZKtR4kbNJjZqeng4d1kVLBK15ixJxYCk5mYXNgcSCvCxZNFjCdnP3yFhD1t4rAGHoMReV1GQ9Hsh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xfmL8yNjxvLuo5cVEsdFVQkCVcDtX9m7XGrR1ywBMB3edZuupSeGzbvk7eGqQbAZMdYeN9n9wVoaSsQKKR6NLvN",
  "key1": "41wuZ24SnoYZyanq6PMsW9gNGexL7GM6RCQwZR6oqrECM36gBmcmhdge5aM9v4y21zafCpHdYVACSFYR4BAbbUTj",
  "key2": "U5J7AiSdmpdiMcyjYuBba4UGdQd6PEN3Bt4NVF6UaKBA54ubfNbPWjRZauEhdepCwaCGSMQypf6bXrCCwackxiq",
  "key3": "3roRaNQB8xkY6cB9FhJXzxRG6QadvhRY1P8T99RimDmwpTQEuqXYuG2mqEK7uzChLPe5rdCnsKQNH6fvwbNHHsJu",
  "key4": "3FLbsWdqNEhBXtsX1yMsT6rutjJoc5FVfJ46ojgw91PFoWTdwJHxm4PVUVwx5uZj1UsjyRMqtu9NuoLTgcJTqfAo",
  "key5": "5LMWM5tbi6jNbctduN5hZP8NEGdwrSv5fzsNv4bgt583FqotgUeqLoq3zjGn811zJaywTgaE8BE64ENnHAi2hqCL",
  "key6": "2Zh9MhiaEY54uYG2kHJuVief4Pb7GNCfZQvqWpKDV4u7x2sgyDMFTmT2Qsd1bJ47m4q3nA7ovnaFmsQ2JmRfXnmt",
  "key7": "26sUWVtHC1TQEciQ35TpNCwPvNWhXNHoQK5DjPcaWVn5HyYV6uR5Mzr383EF5uKfTne22Pt3ozftaaN62PEgvZ7A",
  "key8": "nBew2fQVUFMVmfzSYa3Y6YRG7SRfka2GjUqpHvEppeyvjf8JTAjLtx5HfGDp51PZ2UcHc8Zkdcr8n7WBzi1fKAn",
  "key9": "4naYKwvbuVE7csyA7dVLbbq8VSQe4ajuuPEvffJfHCG8RoFTRwTKqQUJ7i2KGDGjnadjkbqFNXmmSa7teyXm6Z4T",
  "key10": "2awXTUYUAyz6XszxbiCrsoL2MAsjUzBJHLtKpXBBfNh7NNe9DwgFfhGjxP6Myb6jRs8d4v8ygheuC6ydA1fQngx3",
  "key11": "5X7TPKFvUREV5Xg7RNHN7G5uRMhkaBNFfknZLorpRLbRTXwdYd2gewkHqGooALB5UuEbA6KgRu9RWwu4a6GjREtZ",
  "key12": "RQ77U4uadZ5HfZQRLr9QwsM2MoLU8LpuA829aZjBhP9QfFHb8hiuLdi3r8UDppp1fL8XXhBgYrYb4VWsJopUnqu",
  "key13": "3CodmfTiXXmcn6ZVF2VyZEV7sfrrJ5ua9hFyD2uqKPXN3mip96JSpA4La7KDGMHe9F6oWVTMZEYkJ1YVioKPtwSs",
  "key14": "2iCXMvBX7sqCB9Js1agLhKt3R1xzKRwNGQnAiCp1Vm4BiqYk51Pe7MAdXAxqXhfGoQf59b3kNZR6EzNyx271DQCB",
  "key15": "2UsozG5974VEXxKUsvtQg5NTp1CGPguZcGcr7MWLPniRwtbao1eaEQk49HPfoUT6jYoVUz3ocMfsBhYgX1jiWZnU",
  "key16": "4XN8pYipuFpmLJk2ezsZM9qAWqrLrSYYuPHUbdttmfCY868m556SW69js63CeWhxGLjcy2ab4UT6jRNAou9jAvbR",
  "key17": "u4SdYJN8zQTtK4DBvij64QwAonkXC6QaUT4Y49bCx6h6CRXui65mWqgHuFFGypkMpXa731Epokjtnd2zTrJkoDZ",
  "key18": "61xAqJhbFra6XB3Ka1ujM5d9cNesirDiCeoSSWyEEHjCLZH1Hpsb7BbXAcHDd6fn3czwH6D4DhjpLRfnJkrjzdtt",
  "key19": "4WcJtR9aF4RbMEbtiPCaMrNwxYbptzsrGrRCpei4nna6v6xC8MioTAzuLGpiinPE1CbQh7KfBFsVS7Ac1LWerZ8S",
  "key20": "2Wq6d5b3m2rdP3KuSJ1VVYpqELWum2brXEXNAvdNLV8Fx5UqaJpTvT8cfJxNEYVaDvTf339uPbvGNxKgExQPKKnj",
  "key21": "2NED61cQZrEUyRsXsHKtvH8ujLjiUSnRZWqefs6ZZ3jwzRiPkEpqhCMjuoR9FBKNQjFndGPupVDJYnZyvAEW5DdD",
  "key22": "55G2M7M5DWKrYFCFLHFt9R5i2eid39kDKPbm1aNFAkXAQwSLkVuv8rvpKJX6CPRY2u8261U7E42VVJ75XhsUTDfN",
  "key23": "2m35rv2ozjg7iDYfrsy4WJjQg4WwVgPbZX4cSsyQRrxwME8aDH91HQ7BHX6u4fWMFWjGbnhzHFwCYUCXATmPFJRv",
  "key24": "3v83prgSvR5H6HiU2xjU1sWe3Vz28y9QtDnDMcETdZkUnBk5fBeooYQ8qxXPwzx5AT8zdBEA5m2GLNyCiL58VWMc",
  "key25": "4hpVrM7bcLayLXpuZvNcLBkcFxH15A7QxibqxhhVF8SCCw6fcuyxpysYiPwAkSP689c9JM25V4P1MoTi7SSm7AnM",
  "key26": "2Bo4VWQSWjwVNTpPeioFSMaXyonbjd81tXQKNVk79xrSNtUgaWoKSBCLQMhRR1rKPHZS6JdNzamfFDbmmoCpdSeW",
  "key27": "2nKyyLM9qxdz8sZG1Wnym3kiFLTdksS851HGaXRCReXfTMUk1NYdRrMemvGC7zqYmkCniPZNV3xr9ZgTL9K4B6mP",
  "key28": "4qexK1EsbGmrJCR2jBoMuDKs1GuHPjcyp214Mxn12vRPgxNZrttB2TC8MK43xtturJftqG1J3KGLDAj3j6U59vCN",
  "key29": "51r7vzYUA3CWjoVoCKsFcoxmJnQM9zDxbexo4wzP5EuLzcW9USKySZT4Kk5DVWkHhWMTb6HjpqnutMSSTL5oG8jc",
  "key30": "2E76wsZ4SNfBR5oB6U9E7G7KHuyJDfNKtspXit8SFcgKZDrBQWMyw5cQA4WpJD8iubRvqfE9xYXpPVCujp7f8Wyw",
  "key31": "5Gu9sjQP2LKBGHHsrFBS6Bnh3GvsCaSsMpHmKe1XGrn6ssZQhc4Yt8HDDa7zBiqs5tvvCb4cRXjCoNzuJf5GbbP3",
  "key32": "3YP5LFsTUJf194y3fuXHyr4jv4KPWzgHYLvYoD6d2FP3ziJR88NrkfvQkjmAAFNNMgKi32sU9jnrx4anTgLgC1Fd",
  "key33": "5u4mkGpLgoegeYAa1cRYitK9zNHRkMFCQmHyivPy7fXnRAsKUcVk9H3Mc9dbaYhGeNPAsvHjK3V6R4K9z1686J8h",
  "key34": "4aaqtqmiHkK5joDe15PifNc9j2GjZ4gskhZ8EvzdN5QDYzfdSPLLSbTLT9fuLTAtP7thBF5Jg3LS5LzM3LF5ew6S",
  "key35": "59wmxnXBxU4z9gufsYuKA7JZ9qRryxtDtrUVmuoigRKVy6WxD2JcYf3G2P6ZY5z3zSsPmzsryUYnVGreKv4ff1RJ",
  "key36": "4qgHsk7wTtkrDAy5EjazCu4vmoYXMR8g8uAxQBEtumGJiJrtMUPne4CYCNaSsUgKaEqXCMM35gkKjHKc7PbELNXj",
  "key37": "2rrF81JxRfW3r7Q2KbWcxwapcD1FnDV6Xs9YtGJXgvx18apGYz3ks8c94tYtRmVJxDmErduauChQjwU34LBgFMkG",
  "key38": "5zu92jGf1RMEo18RxwkevePKYANCS6norUD6fZk6dwdVWsaDTqCftakTRFi3Vo6KPiqdDyQEGCQPjJwnSduULXSv",
  "key39": "k3zwEbV2Qx2SQEKMneq9XXTfAQnLSJJoS4kf5gyBNAyCA9QPSVZzojE9p32rBH27iisdaquVqkhB4Bhc8KwCkmi",
  "key40": "3j58dw4er4KNvHpXi3trcKJ4qz5yNokPZQ4kVDVh3XbGCd2hgwDfbk2WqFwrom8LWmRxNgHAm5qbYPMz57hqNZRg",
  "key41": "2yJgmW5yRN6dfzeRUtK8guS5fs2S6dWzPQLEb2J8Nbgei78eNn862pZHtmDBPTpdBno9A5VoMyGZzsxUTq3X4Tzi",
  "key42": "8jvwC5eo377L1G849LZxXkbncWo7TWiWsu5uusMYZi9KPnogjns5a67GYZMS2DqSyXrtf1EaFWWzvf2rCvmc42p"
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
