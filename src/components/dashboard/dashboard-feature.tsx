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
    "Hx3Q6pW3NypEHU7gNoAVQp938xinYR1TnTdZQuGAuBVtyF4SVxdjrDPxvGLRwdPEciSXj22HYxsGJ6brQhqbkiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjKQVo5Kwu9RzAFjQoxTa7ry5XgmJMmsxBmmCSdhzR5KRViivcTswWvMNWnQ65LBP4QG4NV6Wc6UBw23mE77LxD",
  "key1": "4C7ShV84H4mpTGhBxCSQooTzKPyiUZHBWn3DcUwyuhBp4kmBHWsqaLLxwGtqe8nPHyvogzYL9Y6L5RYGk4gMwWgX",
  "key2": "3QSuRNnpTvZT1CD1qKzfHDiEfXEGqsZE82NYovdgLznXesJBotfZ5Bk5FCLHzGs8PES8oGyaKenW8T74zpusBq5o",
  "key3": "4MEkhtexGrbcG5SCnnLPGYU7ShiHcthXeJ59DSsdgVYEmbBZZ5DnEXDN7unYrWB3quJ3bBFBCrNXu1krwTU3beiA",
  "key4": "3NuNUUbufg6cTWEr6sggw4JGgcpsYVTMRsTB19BmDEU8LWXw8SgCAqEJrCMugXGmyc4artLBXarUnunSozXPzFWN",
  "key5": "5i7aBkQGXmwkruCE2gCE482f19TRcNUv5GDYTSvMtzDXAJzkdPEx5ZKukZXAjEM4rGaYznXqsPG436ZkYiWwP3o2",
  "key6": "2YCh9cpPmDfuJeWb3rd7zSbDQ5FWDdFyb2XxwYLtR5juaZUNsyuidjE3GsFyEqtcszKRXCzoD8khW1dFp1KXBJm9",
  "key7": "4d6YYXHZoHcTFj8xYnpFEhY1iNSUDn81Sqn7KbxDDyXsVJh6fNEZeMPAyqLXyTqkjPwZH8kubSHtFuE7WJPrxL7X",
  "key8": "4v8Q8mWDzvVjmkPk4tCaK7YKzwmbabVG9R1VYbRQHyAksmnmYrp16x2cohndi5CJDDgm8GMNceyJVfP9qRGMMmM1",
  "key9": "2a6uFF8EEWwBzHfSSn5oUA7FBS9tmChT7ZupMKMVPTiN4Uc4BmN1qFJZbiieCY8YTmDc9u6k9F9G2HLekuffbpcQ",
  "key10": "5wECcJJoopRMwwLyszzzxcps231JkRrPuVEWhgZ5xpJZVwYHbRUDYvF3LuHaB8YXJ1YdcdVVvzTH9ecN9T3sf8hZ",
  "key11": "2iYPHKdDupMjkFPehJtTXB3PCoiHhoUQSqra4xooGYfZx8ExT6QEj1D5eEz6v9atoPsvRqHz8zkrhKaUgjte5HbJ",
  "key12": "4mVdsMKGhWjypMNibV4FnSQN8qoY4PmentxTRF4pQfM74h3WS1fW4D9SUukUt3jmboJCx2B1S854uUgFoBzkXepy",
  "key13": "63zuLXZe3wAxGAqB1v1s3TWfa8LBgR6dCa9viiicT6E2jnvR9LoRREoGbHtFsgsSaE5u7PNtDuLh7iZcZy8DGZQ",
  "key14": "5LsyZQKmdkFLVcpczfNj8gTMFmRK9dvFJMtBX8uLDZc2NxEGxDydGvLKL91o4v7bTuHY3NYJ7L1dq6vzkARp3qP8",
  "key15": "3EW5gGUk9Q7oGY7akV6MQw9X7N5z7B2VVa7SYzuG4JgMG2ki3ouFgsJqCzsw7FcuPjEj7KazixD58xRftVNMEAbz",
  "key16": "5bbDZPjq4CLxRW1yQVsJcYDZouFgxzTXbtJk82kYUoxhW9v2cnoeEEHp2zmsAwB9fRSiQw6WFVUnurbZ5GPxej6t",
  "key17": "4SfWN3BaTJqVscdKpVf8mEzwGudZiWVbUsD3J2Umh1EoNqwBmTWAcwztNydtsYWRSUxdYU8yPPSdjFio8jempwrF",
  "key18": "2Wi5rE2vraw4FTB4HTLSe5MESmREzgi4uZmbw7cRJ1jf8QDQvrm9EqR75fVvFHufWyx4HXSBahZKmusWQA319DEs",
  "key19": "iMKcoqQR7pTYo1JomFV81rqfUj8gwHB6r1rBeiJNZSUT58FUByHNfDwMT3mDYX9aJ8UwFN3Corjyjhgf1RrCk2L",
  "key20": "GU6yfY4srLCCbZyGvNKDp4eJSn9vCmEZq59nkRd6TTVktjtR8nTAbsG8MSVRQ6djd2PPWSpdJAUQ55PuEPVSJAm",
  "key21": "3E67kgY3oCv7HDo9RP29hvBzb1Y2L6YRTSiXb5NzpUdCL6GrGHq7bd4S4bcYjqcnjRiFdKxpMBQoVVrnvoBfe83d",
  "key22": "2AnyZqH19ZLVK44fuAdJoj6Ao9TVmeq1LciceBt16Y6fmYAkwzrQx2HpQEzFtGUc696UBqvMqGoaLEFvZpX7HXmx",
  "key23": "4rVthFj2pwrGLwq2pCkkBJRmaZpobFBTwb96HJ777QqGyf3XFAv4hBNRjR58vdp6BVmM4jEB62bGzkjHV3KfnXyy",
  "key24": "4MMQ1GBspxxwLwPtgyEJHF9NM94EsPemFywYr7NVx57a3KuSmQHTXz2rFnTXu64LkvhZiMmRD2ZcTSb9LNXxPjMf",
  "key25": "4nzFesmh64kWbZr7mCQKcMgCvH6pyoe5D3f524poU2ERMvsJ8yFnG5JAWx77z5R9WEAwDQVTVWRwRmm8ta8hrB8v",
  "key26": "4JJ4ETVLxPHpusYfJE7dUqvRGm8x21mjdFXu7jt71FiV2NGKcBYgBgko4AAk4kdHcPMKC7jBWdaqVRsVcv8Sz9Bc",
  "key27": "2jfebmJTZBQXnTsBNHM3DTpchGzrvojnenzxqFAmUcWfEZQUexnqM8xqGjf5JYTWWo2Az9MHm4uYjegwnCRVSQ3Y",
  "key28": "3jbMo3JSqQyt1S3c2JnEqPZkMySCWd8rkA5QHDwZj1KTtiZGDnWBqCmg93eNg3JVWNax83C4Lxubaz6t9VNtFip6",
  "key29": "555kY4rp9wNgiMdHErhyvNqDcwdV2pm2g9aF9uiquRgG1AfgKVEjzDi7NGWeuSMXWpLfcu9WikvbxVewYoWS4Trv",
  "key30": "3FHxEnjPKjmiXn9PwWi7aCMPwno72e7dCfotHkCAd9CWx6Xq2ErZXCynW2EC3pNwNXo4ciTKbAUziC5crcu2p4be",
  "key31": "66D4oSTYAfXpo9ZGc43cYgeRijM9gMW8s47Er1xgfC3UtVwCzPTWBfUbvQP95qSd4xZDNE1ApSNVcYwhhuVVrtTY",
  "key32": "2sb4vQs7vyfonaq3hLG3Fyc3ysUYHUkTx4FReB6eQ9UgT2h4xYPh1wkCR7RcmEKouiq6wQMsvoyLMc4zhyqpb4hG",
  "key33": "5B5QgX14QJKMjQ6UQjeFGobXUbrxDHacoGRSpm8pAq4ryy1FCbRZCKdVtFNzb7eARvPax7z4rENUS6odkNxngBgq",
  "key34": "f6PNGe5JwB37z42xpFatDWhae5nguQF3TYWh65US6jKfSogKC6w1LpqqQryLBpZcupX6vYHeqn5eKk2qzzaXiGy",
  "key35": "5u6MmupAtjDSq6MVz2pVyJnzNyewwDUkapXyVWfH3yb4sNQSotMSx2oGUnDZyLjTHekYVgjEdtfFM9JBPZJyDg16",
  "key36": "2VfLXUhqQKfmpy53mnvo3EExzBpZY3KHFLMw4N6WUCKcU1RxdHPH4VnHqQ7K94dprcgt6wa2razA4QyiC371gTEh",
  "key37": "58YturPE5bnEkb99Wdj5Yp6C9aFSbRguBkeqZa7Yh5e9cANMfZfCQxApSYZkeBhR5GaqfF3sLDGfoJnbh4SjuBeq",
  "key38": "4bwMVhW27Ja3u4t2F5RrDVvXBpLfRjVWMHom7wq5tid9YVFKjz5w8LPyCLDANxANkc6JVz7hVda9eJVxVvkg8zq5",
  "key39": "34isikEDo5ceZcXux1ngW8MzsA75E2gMs9qZBzPhmG7qpYsWgSuSRzuBitBPcmMTvbyXjmciLzipub97Hik2aWtk",
  "key40": "9ZCfVcZJs1expfMw5h2X9bhR1y1LwKY2U4ELHh9dgF9wBJ7ej71jzBRhbJYLQkf49HrsPME8Lk6j7ZYmftFGNnE",
  "key41": "23gMPRCKtH1igsEcStHWqn9MC5EC86RMEoF3BPrKxfG1EwT1JsNGtsMe2WmuJgCCatEwC4UQghnZS8JXhwBhqRLN",
  "key42": "cgvCk7FhMiGjbiJTr44nEnvs6RxmPeWvoXYN4JBMS7GDpKcFzP7Uu2rua2hfu1wYxfCphs16Ds4ihUSUm4Hu7pE",
  "key43": "2b2fhcF6ELon7qDutLYywviamX3goyV8vre3yYcS8rtJh4q2rnhQ77DBJwbKr2izPRcxayTueYi4oTf5MH9ZaN8E",
  "key44": "5yS8SGYmjfaKgQNDz4b1Run4925Y5xerwER77at7JJP84gdWy9mNG3MeJbWw96HEyDfy2LnMzrFgkcLL45d5zwmN"
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
