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
    "2wx1cnQhg9Fs2P4jZa93e8VrpDQqxU5YZahqd8VTNPg67hvuVuK1btAnzpH6nTBeXN5thJJiBSXtYE686JHBQSZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwYwHYiGneyHU7r1m4vSJeBXwQmLQ4dD1gGzJd8bDkR8v6webHNwHsPDyo2hSpTzZuxoqECxxf9v9A7e9oXyC64",
  "key1": "5UDAXpwtMn2VbJ4s7jRX12baRVeprBfEZjHtMYiscpNib4SNxENRguVL9niZW9GcyPPLebcoKaJodGnU3khpoKFn",
  "key2": "9ABVLB5Mkz4bHkqqHPCjjcWxKTwm9VfD8UeNCCLzegTpAUdvWU2Q6msczQWTbXCe348gb42EVVRotnymvvRM4rA",
  "key3": "3ZaNsiKc6nJMQvcudR1wMP2scuM5PaGU45m2bUKrUtXXihvUTEpA6syWWL1NeYgAUxoXMCuonWkH9ZkAxL38Tk1w",
  "key4": "23VPZ8Y3aPuDXwFcinMSkh4V3VBqDLWNHCvhNzz7ucMxQCwMW8qbXD6nKx7A7VHRddv6jyfVdeeFUPWnsfAKwken",
  "key5": "5ptjT5KdqW19mbN7v1iZtQVcmgnjsw5heYhytDA4JnU8sWVMQ8LUsE7s2shD2dJp4UEFvMu9hubHhZJiupHbZDeL",
  "key6": "675txVzCT35VDstUwNf4Co6UhLMB78SaCrjm6s9WK2CZdsyuX9Rjfy5dtwiBE8sj8NVkhp64soT2FoUBgF53cb37",
  "key7": "41u2uAtcdECiVN1MXAdxQydQQamzex9BQLtDinc1nMiANN4jWYKwURw8cRY1JKsSbtK3AYXUbWErPtAZxzoJd4Vf",
  "key8": "3vT6rXse6QbfYe6aB1Ep7ExrpJT7WR4Nf4YcxboJ6TfvNWudu72x1GC92LWHQESXaduRbBD6P7jBeUvCExunLQ9g",
  "key9": "4CCy8qZjW6DyH3RxhVdSijX8FPgPTkPMq4MESvK77WqyCYi2H89Sb4GCjvNVNSTjsHimDHT3hbcHFaSkJ8v8NKLm",
  "key10": "32p6Za3rzAbAyPGjoWQ7wvh3nnvBMYuE84aXQBdzbXf4QWb4tzrnfXjKpWzyBT5vB5ydsTsYwzkd3NUBdkzbAzhb",
  "key11": "1fPhfoQvHQciPnC45z6nenGzrNrM82acStZ94h8ZBTMbz3T7E9LAueQ8B6sQALfdgQGuf5zZUoDah1fHZm9vusQ",
  "key12": "Y45ysYwXFJGnJA59Bm4Lx7d5NNKPRSypxSzj9kG7XE86xyYtjRN7hatRLtViQ9oJ7GMs5XaEHxwBCQZGaQ9N4YE",
  "key13": "ruJme3d7gN5sFFmQNk3Lj1Y3MbfbXfwT3ksGkPhb62QBMekeT7a5DbfRUTH1Foiv8KcWHPJSC8KckTFmjbapNLY",
  "key14": "X4ACHrWHqaeAXmeBC5zAdgHernVrGLx29fUTdVwFX823vBfT5quygHYNK1Pufr5MPscqUf2mAgmWSe1Mii5Aw3p",
  "key15": "4FrYMuS4D177iRFnhEefvE5pVBbgimXkpuh1ZuXH7Aun7ndGpeXAhLbxepgm6XSeUwteDDRVxBjeNLMfAw98kVz",
  "key16": "39gRAotfGCkZXzgGvUTcQMjG55U5drEhW4GbHoVDb2caAwcUjkyrBFWgLchnnZ3JXKFnogdvQNnWevK24WdoFrTw",
  "key17": "4q3uC2J6hzzGbEF9qcq3wCQCPaiL5FeGn2kdRXFAPTGHDutDD4eqWjA48sVo98vuYf7xzxk6dCwQ5dMwbgCUjL5k",
  "key18": "zGrW4XmjU6BGzNwQyB7n8CtWxYTbCdcZ5d1zbNWGH7Xw2x8pWNU7RRjbscekBVfynouyqEd24wSFUWdS18FmoFk",
  "key19": "3eERU9oz688J4WCFk1Jnd9DPTzSXz6q41ZTMPYp3zBAoB2Qia1NepgCk6zLMcdygXdkcr7rAeqxgcuuxpDCcMqgF",
  "key20": "2ny9TW16uZHxw7ML7PvL6yPK12u3z84WyGfqE7en4Yjw5KZVT4kBSCWjVVMLcggycSrC4utsDaFzv1CSQ89Vtm4p",
  "key21": "DFJ7bC6WQTKwHv1dJt2HXZ2SmuUsDczF5XS8pUEq75LSrj2UC5yCejd9vyVwmcAMA4SHteHedrsE14fyypEbPNe",
  "key22": "3kZJjoLhqPD336XMgsJdLMkFyacbhEqhRvEhAZcRsKtSb9BTkBPLFjafiCGzMHvmHdxeZQ29xMTHgrW8WvBoeU9",
  "key23": "RaTeBbuAAJsYn9g1iwyKFPderGfaH533X6XW5vsCEiC543Ghd95wQPyYNgYxqttnhAS5qNuTcHVjnBUwj1WAYgL",
  "key24": "xQ68aeAEsxnMVGjXvdG4bCvJ8KkhUnZZqeBtC6anzKRPmAvi37opYY3qUkkWSVHLsHzxTicNw4nn762BpoBkukd",
  "key25": "BGcRZoG22FuD447wmxNVyDhKnkcVzysorXnHtgMpK3rPBms2G4CRVH9aAmrAxEuV6PH9JhemgDWWBGvY4fnNXTX",
  "key26": "53PM9X6WjqVajUusBGmsmo5R7PxazHB5UGheUbS95SHD888nSPDsgGURXtUAoY4dBwe8iS7teUu2e7Sx5ckQihcf",
  "key27": "5cJLJFqJtC2ncx7FjxzgYq5EzBxAa7RvfJqdnbUCxDjax7vAwh7FD229CHYGGGeXFDj5WHYZ4jSoQesVDEuCu95Y",
  "key28": "2k7jLh6uyxGwrGVqz8C9QAwGRL4eCsTNC2dRhCRWeSAKXBFjynBzFRkyEqHEZbdccKmhTXVFfXHjz4nLjDHZA2F4",
  "key29": "3Tz5CKKh5mb8U81AJ9mFeBhK5NNz4sKi5Zx8SXduvxfEa7Jiu2TozUsdVXKUysAgrcRR7UNfWUVnYvEHMC6A4cWT",
  "key30": "2vZ6bM4vw4H3DEKJFT6gmNiDHXMJryfc4rmyDsUMxB8hVjgSqRHQbffJopRWaYZbcsaLrRj3MADRAWmpTPUESGdv",
  "key31": "4qAEvgwZaoLpmaDrCqbnmRgkMZ76XzrUMuebUVHia7njDhAJUxZQbz3KcG4ANAhNnA96RoTuzJAyv46SEmP5Mwso",
  "key32": "2114rDHeCdQQhzBnmPryeynUmo99ihHdAhxBvm1E3qXFKqmesaEKa5DST3o97Y6U7ojQKz4FMwHAKBbs2hpcMPWo"
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
