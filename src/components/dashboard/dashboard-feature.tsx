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
    "2pn2Jjdvf5mWAs8esfMMpCQK1igyZAx4P7uN7R8yZJs9QmcPoQWSgfbvCe3VHH7XqpHEAwCHNfKy2AnYVxCmup9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TckuyTSHZdzjfNmAnxS9wm36rKdR7VT1Foh7UAoATknsryqjGFqGBQpNWxF1jP8U4GZemzqjv2EZFsQFWuBXzTi",
  "key1": "5L3Rv8b3sQmGsfAhhB2QLKFTrKz3SEwG3FgNsLdFq7Dp74AYqN1Prj2zZsqQF6x3gfaFBaFn4YmUy5gvaXhViRui",
  "key2": "5MYdkcyRrcLwZNJ2VvLjUJuddpTsXyLBaRf3L23bDEHsFEsozRBcyJj8hUfd22DTC2qCRmB8JtaHQLeomixTstKv",
  "key3": "3S73jiHKXNTmzHkiAnycVYBum8mxdj1qHp6k1RnWbtqEWy6u2RrbTmUynYLwRgnoVUzKKdB2ya7gEAi6qZxxBAUQ",
  "key4": "5MhRgoBBNJvLJsAXiKmQE2P6QmCkkhiW2nsfEzjjqQ4L7ukcqEzpn9znQoqL63ETgPQ3L49p4Vt6CHy1B4sbapL2",
  "key5": "3cmpVZheG39nsxEE26oojLvAdWkM9VNJfmEK7zLhcLgkX4gSbf387orKw133LFakNfogUtEnbHMpVCHRJZcBjsy",
  "key6": "5ZpivK1yMnZ4bmPxejxVf1WA4FL6MSpLBd4kCm1TpJd5JDRh8zZAuBdz75kcHiM3nuoLk3EAwL7Ra1FWJtSVktEn",
  "key7": "3YHGvLj4U7ZmcxxCJgFmCCPxZWbADwuaYdmMPFc1EYmBcMquBLswzz3EGayST3xySPZHLPRr9ofRNjDWa2sD269D",
  "key8": "2ej1RTPXCv6sYnXiu4xbQ9fbbS6EoNLvLkFgVEGykE6CfgAZADivb68iwKh7RY1YDM5J7fJN1sABdAxqMtfqwLvs",
  "key9": "2mHFVH6FMgzMxirUJv7McyXHHqXFETDtfakCXassGPBr4PW7bnbvknNT8GkA5jvamTivAeeW9vHM845FXFxfvRNX",
  "key10": "2k5SqkjBefdUTsHWeqttdBaJ6Bt9DKRLdCGPKGYS7Z3C34zbALjv7B8QdzMNUqRpfMVTSTV7nfy75WtMBiqEnajX",
  "key11": "2yr8ruQiMHweYpfUwCmuCfz1T5AtDMHcTX8jMzF8CbL8Jb8CTDdZzKDVT5jd7Gvc3FbcdaqocoCuf6kj4rUENyTr",
  "key12": "3922dw4Cnw1iQBXvofVabCFPuvUmeHU1QVTxfEbFnotZVqkvAxMpstMGEVxG4cQ6WGwK3SxHDR8S5HXqBP8Mn3BV",
  "key13": "BkWQpPmVQ1GpkuNBMB97R1JHrKcDfxyx8EVQ5H7YB6C87bh4Ybpn768fa2bkyiVp1jEK4UEeMKNppSB5igB2cHf",
  "key14": "3AB1DGFFSy5weAHRjYxgFUQAWdfVG6Cn2DStQSGgsf9BVEYUX2We5ujXmuRgtzxMpG1RbNPnAw3fJ4ZA1waffL7m",
  "key15": "5Hj8bMDAXyaAgRLjhZrnN3xzLmwm1p18nrVahNUmvEYL81zHGfdgUMqpkwAkCMzPgmPDhaQ5PUXmyuxhHdAb1Koj",
  "key16": "BdUozkwRW3gK1LA4zUR6W2mTbJuq2BYZN86FsSzgUTWhzwN4BFnt76N4CaZUL5JhSYZ3Pw18Jif7vdWbPv5nUQW",
  "key17": "2k6bMgihh7W8bpbLquALZASf4HymKog867kYwGqV48NnPZhEsjzAbiibTezTfYgSYMQM6aWHaoJhpNwrS5HRPwSf",
  "key18": "5eqqHjfG86zRXQU9t7XbWQscLAXaLLSD58WofmLTkHYwd4q3tJ7DmzxdmPsJfj8zKfhmWukJbhb3k51abDKELdBU",
  "key19": "vz7rDRGCg1HT6VyPqmRQ5x1njPyeABRma3LLrBBN8u8uDobCEmhfE12BP2t7ShPbfZpeRZvR695sdxQZEAqNWZz",
  "key20": "531qc3kshZmrDdG66nZAvfzaxJoAXja1q99vspZtqwJou8yvhE5ZP9tcMmsFx2JWh5W8JSezUGXkBcGrsjaHBewp",
  "key21": "2SsMVyqvuLbBuXYRcjs4Fzr17ZCzBKSjjfhKHxaDEd5U2E4LZBv9gWXhQ63zsdiYaKn2Gj2tRKG7mBUoKPxZWKsV",
  "key22": "53rF4D87r9uTUur1Ag7gspNPYTjdoanNaLFFgWjMytGcJP4rAyzuRWDbztKySsNjC4nbbRTHRyudR59GjEHNwwiy",
  "key23": "3CWQ4fcsrQBDRNVwE2GAfofFFHyG3dT3aPzyq4tgUXAzzS9ovTSH5hauGLAn2EUgPoX6CiLYWbU3UXvHk1DPRKHn",
  "key24": "44P9JaZuCeBrB4oyUsutbEpS8gzSCjN2AQYXyLHzxwgra5nzNSwCrQURFUsnZwZow3ougnLJHRqdqt8Ycr8JYr3F",
  "key25": "4NZo3JJuzrKyWzrMmGuVJkDB3vSX6ibquWqrEFDKbF2Gam1RBPn3Wh1REGkvxLXsny9t7TFVC83rFZGVeAD1WPLN",
  "key26": "5nh3igg26unfj5Jy6AgfVaQDWRTokmvB3nD9TyFe6FvyrkfmZ7qPU2zieV9JF9uAph2E89HJbfLCU7urqLdvjL1o",
  "key27": "3dq5ddg4gAPHncCBEiTU3wLbhVoVfgsEGbEo7BWPeuRUbhG4ygWJGnctNUvh9RSRCzmhB9f2BUjrBc9ZFiGgHj1v",
  "key28": "3yrjsdgFZDKromdAEssePbJwFqdkDZDDjnMak1YaJU9PDGyKedfeYNAfpZygRxVjjeLMgKzhw2pnsoPkenAqhooa",
  "key29": "PxZwyDUhgwTgcmiU44VuHSyHChsWq7aYCdQpA4HLESBKsarNABw89QPgjwHxL35aavv4MMJUJFiRL4zNB8e3EpX",
  "key30": "Esm6S6nqAUWP146QY3i4etLyeePPERQ5ravPWWF6Whkd2mzpMoGM732jvS1qa2hm4XMzHVtcCyrWSYQYyQLCEhm",
  "key31": "2tjfDXcu7grBqnS8qvFTPKGMzgD2u7z6GdbmGgjVtfAy24LCktEdPnKmoSbSWMMrJzDFuq6LZMCJYPR1QxUbTQRx",
  "key32": "5SoNsmvnRW34WamsCuJgJBbLeEmo3EYrvUzxesbxj1g6FNEZKvMRSGDCGUdjhQgJGxTktoG7psSfXQnEVKvViVk7",
  "key33": "4kzArTBVq4ntvag76cg2y3fppT8xok5t2Sp4FofYgRadFwfxQfpcWftDw84a4K7BexVbPZkGr9PDnZFvFqc1ipu3",
  "key34": "NhwDzigT2saDx16WGtE5upwsXKcRrjLJrgM4ovxtDrWjLJhdju5eSLnpfUxXhiPneLD2z9UNCbjPuDG4NsCCj2e",
  "key35": "Akcf9UyMKkxQxNweFkSoqP5QuTa6f4PNYYvFtnn8iEwT7P3egnR7B7XM3Z2tvyoiX2wBcXFPksGxzR8cGTBpsdf",
  "key36": "663BQYBDKZJDBgfV7QAXN7Sw9NPBsTsqeJEwAiSaRh1U8dDeABNkwa1mJAsbXKd29NY7qgsFRdV6kHWuFpGwBoFc",
  "key37": "5hMcTgqGsJGX3NyhfgPuJVZEvLVnRRawnxFaexawK8uQqHzudrPBryanG6Tq2EDs9jV72tps4ijCnxQFdKNTBKuG",
  "key38": "4j9pGSm7TZ68mKpfoPaDBdEMGkAwGdcfuf9rXansFJBHtyMQTLBeBmYYhnCT3HPq9NJFKeveBr9mivHqwmc1L9h8",
  "key39": "rbPK45c8ZpCLTfxxJy7k579NwudEFETHxpR1gPxZTcYY2iaTrx7vA9eAeacGBX9C9qJfG733jatWD18izT6rRd3",
  "key40": "28vJX6vPWoxXxEKTWBBqRJU1E8bbYKYbiZ2VvYJ3EkK7dzkfzFVon9hxGkkjZkL3e2rQcbhDvKbccXmpAHP2DU78",
  "key41": "7ArqLLXZubByVTfNDaz8owvH1Qeks746pyTQt7oB4kMgF8SRc5h8GC43KbQgSaqBLJPPX9cBymjNY5eigUtDTNL",
  "key42": "25mm1AcaxmyPz7AAbwNZXSJmudtd7oQ4q7tN3mih6JdYBjPWqPoHPZujB98yGKpghNwemjQMqZyn6EX8fPVJvpUB",
  "key43": "44CHBmsPbYefsjZb2b6s1fKGQUVYZsAttgsGNreovmZZi1DnFn37pXyJBsKhZzd6XehNNEYyuQtKNVTMvp8ZzFTz",
  "key44": "4s3xKCq2XFxXZppkaewLch8WEY2aBK7wRhUqwuJDFLLGGWmJQA6FqFg74qPwRS8YUYsVRepGe9C4ZXvNyWja4kJK",
  "key45": "1GixNeG578RwtXwFuQKpkrSrmFLyst7sjVPG2XYEUkD9iARW3rFreNMDUc8wL9HdcqP1NhWVUmh6b4kC6W8dJgE"
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
