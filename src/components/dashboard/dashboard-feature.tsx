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
    "5UXRrbNs3rkF2E7VJsFQcsYNprYhTNBudKKhCAFjcDdQW4ukjrL1FMCM1uApGsvvxktxWDczWoryXcXBQjoFkTxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49udD8ngTVSxsQdVzb2HjDztGispYxA8a8GXdChNGbs53abFXjWnc8MiPTnNutTpLWDpoL3Gwyfk8HxLGW8tW625",
  "key1": "4GK53iNZY4YfjhAgHTjLifdF1LVwtFmWTSQYvzoVq9bxhaS2GP6geg8MUAK9yhGMgqX6GiTZmcYWdMLYxf5nCjQm",
  "key2": "2KW1ACAHBHKXhuQSL3Fj7JhPqHwm3dqcqHhMhUvMpYNiqDwjcDLh8rFUwuxg7hv8PYYVwinAqDSqyedabfuPaWEg",
  "key3": "5MVn8QhW7SbqBB2ZieFpo8LDLFcj2fbpak8uZMwnfQkx33SmUhgVYNa41UjbGqF4nqX5VahyMUHpUmAFJfm8YfeU",
  "key4": "GPsSLqseGvEzPB2fa5PrxskeWsFWU6E82QYYyXe5tUR251FhZnSPfANSwuyQMNrrbuNmx65k4QVuF28HozGAMRh",
  "key5": "322pXJpcHCaAHxQN6d8D4Lmb3qh4Pgh19bUhgRdK1FxfviP5MeqiAX4gmPv4TFg8hoEWuNKZj6hs1HkLtRqnNm7E",
  "key6": "5AGfToLL1acsdtGYXNaiwLMaaQq6PjisGqbY2ywfBZgUDtotZQmmrQpvQ9bMtKr9ceRffz22B4eHhM8WwdFJGuk4",
  "key7": "4QXeN7u4oKZmLppgEd9dLLjKUEYsVsLAgvJgDoPM874dQjycqtXrEK8XVc9L1yww8gVoAcmqDGL11p7tT1jARrt3",
  "key8": "5xJECP4HGUjTR7AwaEUx3eFLESpwwLYTtxkacievar6cxHoKkCuVSiVPFg2sndVuR1xXRwCthgixxMGASvF3qEGy",
  "key9": "RRzWepqRMo4Z9pub31PJAbqDoWn8nU5NLmSxQTuHwsE9cAuQwNtKsSDVBVWBfJmV2sF91TKsnxYXViFim3M8Txi",
  "key10": "3mx2W4QhRz9ofR1TuvcsQ1KAPQHmCzeRxgboCLqsb8FH3BVj5rCUXT7rmqeEV1hHhRZt8oKy5bHu4itpGahD5EAQ",
  "key11": "67PeqeMFBqS3CzeZD88iiwRR8hoTMzf6F4rgN4DxGfeLvJupqd2gtKVQSg8cUEgf6EBdxv8rRRGpqgAw1Ds5eGrk",
  "key12": "4R3Ucm5ESS6U38BxKppo7WZsh77U6PJaQ7xfWQmFDpep57f9n8rbz3mbAFsmJANUmz7ZE8mDV7wm4Bgoo5Qq7FMe",
  "key13": "3qF3Dm2eJ1H5iypZMVQA93KsctnaznS6A8hMjhGmGtHWxL8oedmzBfNzKkWCJqpLRzSVuyg1qtU33fDF9kFJmHyz",
  "key14": "hzWaNnjvmEqgF7FwqwNxX2VbKmyHtAw6xCE8XtjHGUCwdsthvYPvMjQmquMsYWVjArxpP4QFznoBbmxj2ueyMTJ",
  "key15": "5xYhTpKRRnPLytGQeuGM5iVCK39taR1BEL8kYA4mWtZSuD2ZXxNHAuBcFFqqF1o2X3E47SibBo9k2PLJkFp5nUsz",
  "key16": "5cV6P1UwHdWv3X1kwpKXqGsxZY8dW81kHBd7qaFf6WwZqwdA6W7BoHt5pLDeZk3UeaEE2J5S2dznzbKZHj2G6mmv",
  "key17": "237GQYSHJKPxJ4Bs3bRfX3hBh5v7gPrxZmiBDMApFAwo8N5asPuEyektahpr7X4u2yuz27ZsQZKHEvqzA85uSWWq",
  "key18": "4VLgyGnuz3BoTAtufQX3yZiyBpP3C7jvgzUqF6os4GfLNNvucd2uEcL6ioQnSu4mXpeqsjJec8rdjhnbr5azxFoi",
  "key19": "4ieuWBpRCsuq29Hg8bBWCHKKchKfCB78KgXS4J3JBANE7G1QhqnySkuxTURQziFX2QyZqvKWNLaFHzHCoxH3fPaQ",
  "key20": "ZJDk9Qo359YNGuNqvVprzJREthkkQbWXjRuPoT27HCeN3f86NLLmgVNeT2nZzdgfCLjnmzh9R4Rfm8pJtCLiyc5",
  "key21": "37NCHifei1gTsq4L4nud11Dt5Vds7qf4LdxedjTX94CpVZBDRMuSBfyNhKsBkY7CAAv1QuK2e2WoeZ2RErjMzqW4",
  "key22": "54vD3LAH5qnBsVtJdKDtz62JtGSdMpt7hgRHjf12QkmmH2iGcFgefdSF93n4pmQBx1zmxEhgisPGRBAndo6151ku",
  "key23": "2UXLeKzKEi2PBBSvrpPYPx9qhGwDxMCeSxseb2p9nDxZdG8eXaqj2GtVVUq1dUiFU5JHhMuKatqatiaoUxjownUr",
  "key24": "4QPTfVaymqhqEjXMB58T9agMDWjSW68sY43d6oADcwmPK2HPu1HS5J4dm7jg7tUPHgfsZJ8cQtiNB4U8J1Q7n3Ne",
  "key25": "67DooBwL78wBSHR3N7VrUSEKvnYzZGdXNPhctPNdvjtnnVw2sKx88r28UU9G42WQx8i1hffiAuLR9rkaptgPKBNc",
  "key26": "2VUAfSvsRLdL7VoaYrwFgHjB6wbQ5GGs2exU15dHV6eDe2BELhMCD1vMFHV1jBZ9tyb7zzPWavzyhcthieafctZC",
  "key27": "7142j3A9FV2ftnitGyRdqM3cBoztP4magCjbiasXMGyLVmB5p6j8CbVrPLMzPPJdqkjRv3iSwXuQmMpgcXY1wEn",
  "key28": "5DQP5dxo4pMqzA27M9bhxPaxGS4t7pBD45B7mhgFF19Yg6YTsLdTcZAq9iJPQwVBo9EhymStgrSMoDZMPygCwtZV",
  "key29": "7eo99p3u8UW65oRJM6sffjnQ6ruJ8QkmFVaqXfhdb4f6NYZqVTkXfqXyeWVgfkHt8J78XVNu8nbQbvC1z1sFo45",
  "key30": "4qHW74ksRF1CcegsFRkFMc3R5Np82RKPYnEKve78tnF3xxWDm6WaaWyfMyidtYoHQdmAcGjJsdGR6SrYfrgcytDv"
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
