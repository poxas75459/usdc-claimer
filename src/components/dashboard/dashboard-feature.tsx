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
    "5ZYD36Gu6FMUmUA8s7sUNhZcpDsjfu9QLVofE5mxiefd3ywBM5mWPmZFLsY9tNDS48bSHZVKDAwJKhS3Mk3cZb3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrRU6RwKSbg9jZeXgHikkajW3Zk6bnMb8WcJtnHmUYSWXANB7GtqiDkF1PTo33GpmYLFy8NKVcyzAnzskz2EKYh",
  "key1": "5T322WN4tgoYy2js4fugS2ifjHLJJsdCAV853n6uFZU8vUyk67iTHWNhQm1JLy3bdAbEbEwpPPx1EHFjxxhK3qBC",
  "key2": "3L5Y3dWx4LEWnuhXmhKodmKb7MAqHzCJFCJcdQfiVJn4jeK1Zaj1cBzqvGJh3G8gkACnzctyFAAjFEU45N2ufJLa",
  "key3": "62Jf37Lys9Zv8ACsfLfA7iHDqvuz6bJ9R6AHB1bZQi6CUJJmyygAKA61x9Gote4XSMbVZwuvioaDtCp6DgmeVXY4",
  "key4": "38SKYYnAt41ReD4fcstkJDh2tyyGALbqwPAct3fJw9HVwxBDDTPghd6MEcVpdFhWg152vuqVn6kMyoZGLLkSS6sh",
  "key5": "3v3e8DvH8rRPCheGytxtEk2qE4ZgyKbWfxR2gjRD6w8pp9j4eSxMYA4pu9o9SGkaxzc4Vd9ysd1ZFgetdiDw9mx6",
  "key6": "44B9wLH4SucwmJPAw45zmQJx51cvMvoVVmac3or83Z7tR7rVMfYvcPQqXQAbYa3N5q6jZyS2xeGdj6eYAP5APoGM",
  "key7": "247vnNnikG6QPTpEc76ZWsnoQDQushL7TQtSQwHsZ3BgC177vwXP5k3in7nFMjvJ6XG5tY2mHHDdTuEq6NwgXzXi",
  "key8": "4gVtQgQwNUCoPoMNDsocBAzfA1TkbN5jgiyJWxfL8fAnDSFMC1uHt3VcAiAm9pMa1dyL1YgYbxZ7nmsfvLAFjpUu",
  "key9": "4BNaD9kyJdtUyRv9p1vDjrvGJ2SoPNPhJucttLSukBkE5arsKQxBXzGP6wmx4ED9jPtMymguheKvPj2kc8z1hTiX",
  "key10": "SJhm1VHp6xgP8xL6X4N6XgfypZE4WoXgocW18ZxTzhxYVD3vWHu18b4xcogBpNLu3SuTKQs6NTqbTChxny4xaxB",
  "key11": "AqLvS72oDhgMuyBYkthet1aPRaot6bueHHfbBLx4Y39CbLtY1cno7fzkoKuwVj2Q2Z47E6ZCUQdN59RSG5zEdzo",
  "key12": "5ZNPrqifXvPPfemzDVyg6YjgqGSJ1EiLDMXbyvmY2fcB5LgrntRriP5qpPhU7w8JwYqsikqRJYBzBUVyfVvzzWEn",
  "key13": "3S1kAfGhGRbmqezummAu3BT85zRytdcXq4ouzZwxQ8rzGjoqAg1ptauhMx272pSMttXPs825KnizW21kzGgeSCRg",
  "key14": "4ZePZgTq58Ak5EsHGQrtN5FoxZnjqzyqD2QeNjrcfEE1ceeQURAuxJMJ1EZcp92FGUH2SCp682qxwV1unUCaWgjB",
  "key15": "izPcgjnSx8krgVSf2LB1iKyAPp8NYr9juEYRaThYsrHQptcD3jRiFNBBCCSZtt8bFhVnr7HKeh1CGxSuDwA8BuN",
  "key16": "3aZXStzvkJDq1s79NbwBszdxnSV9QvCyAa8KAyeHwjQJRSpSVQ7CLLGmvK129YSxwpZTokwtnNKLvmhku1a2zU9L",
  "key17": "2FvDEJ1mtPbaoXN5x1QERTx6sDvSaYGfUaQJDPrRrGapohYwaC7pZAFfpWHE1161rAJcuStvJXsE2K7QhVTptCCH",
  "key18": "5kFuSJ6UTHPD33HfHW19sd1L9AV3oygqh8GgRzNL2KsSEjpSiXadtd9BMtuYuzRwcvrazXg5RVYr8mp9p8fDH6tp",
  "key19": "4t2dVfZuXfUKBao88xsen1Q89gs3mnLPwQq1g19DC1amxWKPET1KRdXuTyU6FnrDPkz1zeQAdtuRhyv58xKAXqWY",
  "key20": "SshQEADMV8ycw8cCPF9nn6bUd1iZ7GKxdP7ipymym83jwJZ4VjZbNsmFtBN6wpQdxaStGa4PR22VGw923dMAjdy",
  "key21": "gMihCwse4JD1sJZGbso8JsVdNyAouZdjsATEz5fb932izh1vrPrBSzz88sWBjYr3QFC3ZWdefi9hviFxe3ekxEy",
  "key22": "48DULB7n8egWQoREDVitqePrRE3NHDY7HMBEuNYySUZ4eFrPaZVy17L1CgYG5rxqbapnxrUoZahrozW3iukM5TgG",
  "key23": "4y4uudeKu7PLbpKi2coPZMDurZkNi6Z794rMorqwdYfVoeqSLUC6bZRSLVWruYF5q91CG4ZyDTMh1svNeeKuMJt7",
  "key24": "36tzCVm9wfZGvbah5oqoxMEUMNqNPA5wgygt6mQq7PibAxDsu7Lp1FDpRjg8iDAJbV78ZbZQkWY5WwLcEJTrGE5G",
  "key25": "2rPsaj1SP8kh969kdbAxcsgxbHRKERm1CWugFTbQ677eQd2j6XPLxf4YRpGFQSLVqZzzufadNFHR1iKxrHcS7WYC"
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
