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
    "mRwETHThENwftp2iySFia9pbfPwpfPsQnkc7TThXeAZWEsD4bAxp7GxPhd5UpzDmY14NmHV6ne3zGcgu5fYQV91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQ4hi9XsRPSJvarimT3tohSHKfagezq1gQp6XzAYoySVimPBzkExQhBHN3Nc1uQP3tgPUdEkEpsh8bKutXHq8X2",
  "key1": "43NYwTPAd1MYtx35xsvwxqhT2roUxUwdADa3rYRztZ65cHDADbco8DsNaU52maXRp5htCb4kLDZNB6DKowoo8TuZ",
  "key2": "3GarCgrJQV3xEmwr3o1tBVtVZcsCQBhnbrTzsn7MnGe1aDg4gfkRbNBeZ2wj7gz3TwZAwxJCQaPSR1zieikdFp1k",
  "key3": "5SWhbqv8ZCp6DkNMueKKK391BYCZJZvPio5iaVprDgkLneM2R6va6tpZQJQEkVnm1o1tt9be8N18uqnZMktH4pB8",
  "key4": "3H67FZpjuXSesD3Ff7eSmKdER5FvAHCX1yCaahypFA9V8mTc9QLvtdqHwBts3ncEMKjdzjCvcFrrLukZ22k75WGD",
  "key5": "3DLqVfkV49gY9gpQ5RcQ2MiiprpXusaf6xiEiLwD5TTFPC11B6QfDuimMmgevjuzMwrjih5q6V3StK9ahLYErjZM",
  "key6": "2QJBPsn8UEx77SJviYfHDgV8961B2EVeapNY3d3UkbveY1rQFHY3pSXJV211doicRXcrv2z33PFKy5MPWdFth7R4",
  "key7": "3Kg3DJ6pbwGfdofyWzYZfcRao9ekiN9HJei7Te5jfqcKcishTFs6voHtAp97y4g6N5GzzTeoXqJqkQjDqkR9SJa3",
  "key8": "47kQnRttowqJSg2UYRrK4rRsP2mGiCCPtoCEVBLtTxgqWb6jvpQr6PXDz5b63sbN9twq4RwyDzfXHHRvjSP1sRoh",
  "key9": "29qaRKBrwCTe1vG4a6gVDog9SuZ2HWVBr8AAphuS7q4DWLuaC6k4hgywgwF8ad5GEXVCaggUyjrYW4KDks5THJc3",
  "key10": "3Sudz7iCMhhUyQuZBNAxfYAkvJJFnAAjWeYzEQm4V8PCDVVUcXzdU6PkLT9wPxfH8EqQy4c2QhJK8pyutsNQLMjU",
  "key11": "z3aQaADt2UE2xcZ9SQSFBToBUt1Kks28aDNzsj6nvLdGRHnaMBxY27vTsVmndEuLcvWZjGSZ7yUD6VaTC8MK3VD",
  "key12": "2Y1HGwbhvPkupf1ZtFFdDGPEQ1tYuccmWqTX8ojURUMDCEF2fbd5jM8HbPfkYn5QMy7hGLLMwD1NLVaNVt5Snoua",
  "key13": "3N6ZFURXDjmM3xCsxqfPe4if3uVWqz8wcrF2BHc19kDnKWk5Bkyo1sqigSjxNE1utfH9ZZsW66VZyTB2dTGFYq6x",
  "key14": "41BiBEQLtrTtteH6tSHTLo8nUrCD3EiQwfxSJNFyXm4HJQfwgYTJ1FxiFfGwaBc16bCNUeRoCxhVKN1mgdrbFYnn",
  "key15": "4jKy8hjck6ViEmaWCxhgWUMSmZabJEJQ5xoRoE7j2sgFqbJuxE5x1Yt5JpSZQLUBG4Y1NE4hhdpsD2y1kTnY1mGx",
  "key16": "2RLVwE879ycPgBoPqDGsL4D85gp1Mw6B8w7MYog4eAsMn5ZNEqdfEYC8EnZiuFpa3Zxrxmbwfu5eGeGJPRQbZfBq",
  "key17": "21WzzavHNwbs53paqyLzYifAVijjh5FYmEkdRbHMkEbJHmfNGHmfs47eQT3auyMGTHUCJfFRfpSHfyEMopcB3d5y",
  "key18": "368rs428nMj3psGG9ivH51Zh2oTC9kVVfZ2VwrWuKYaTNRqDfmMT7NPcpWzUqfobZzQct5yxomwAC6pBZWR8Y6LR",
  "key19": "CLW572Fzj8LZKdNWudWqy4B8yU6NovxJGUVBcV1krjiFQrcnLeMZNoAbAuMugiSho4y82tPfbvuydtygiFCttMA",
  "key20": "5nRngca3o8eagVdxS8z32PnDQF1gaT66mAEnRC94ydjawTng7MzEk6xsnyKVYbgJmRn1a3sHMWwuxVdd5a5SxqNZ",
  "key21": "2fXXMVC6YMB4hroFsNB4VDG9DSZr8XAxaeDxp5zzY2R7HqFMt1Em7cBAZKNAe51eC1i1jwptPXiXzo7nZQ1dnC9o",
  "key22": "p77U3H75JmVjyawisjn2Hvfm3MaUiirE38hhusX9jcmeVbQTpoVjBGUVFbbjeWJz6vbyeZzH8GTtnZF6dXUyogk",
  "key23": "4roJSFXZuuypVBtdVECGWMxtApY4oV35RmCTH6BJEDQmNTKf33gFnGd8K9gjAzSBHbv86HEaNgcMLWQc4oXKcoxq",
  "key24": "7xC1CvZErwNWrzkYbYYd4VNbjateAmtibEBKfsfdKsMT1gSp2Ec2FDQxap91MjBWfwsdVxy2WAVgTzvNeNREhv5",
  "key25": "2e1vsGBJGH1knN1DcYUxN3rLc3UwAXm1gvyQ7xhsNVPsskrcXyTK4cEmMgtC1eqqXgqn9uVju7kK4XEfkouWKUiH",
  "key26": "5sxaWu7VdPA3RSe4st6dB6byyofLhaPoFJgqxrG4QEShAWf3zBb6GabuXMDb5AZNPT6g365sHuHQPLY4e5EVTZQn",
  "key27": "3TYFaiEwahFjvNyvTz5TJoPDUuGyWqDAkLvrxTLS3gTkJXeinDBv5Hfpo7fmivBgeXFQvwmYTDJqYDeZ1X7P4HTi",
  "key28": "3qCmjWtuTXxJ4JZL1goTqYe4eLRaGAmALzPQRNhRgCBUBYrUNXVeC9pbs2u2VJTkk79cgpmWgstbx8ecPxpCa2pv",
  "key29": "2hPjtBGHM3LuZvDHjo6dTAdC4VMfB8WyGRMsSTRAeymv1AyvU5qYPfyeTumMZrgsPnrbTpooqf9tTJSe69mYUKAo",
  "key30": "4FuxATo2MabxweVthhW1ydw6XoLhkWaRUqCYVB8NhzTU7R8ZLzgWMTXN4bQXYVbT3EG3SowJEQnKR5a8jBtS9iCU",
  "key31": "5nnr9porH6SqRgHymEMumccRto7uHFPrqUY9ctnxY6h777pcFxq5fpsJwhw3Lt3vU5ty89jVbL7US2au3EEL6CQD",
  "key32": "3AXg6rSoKi2yoBCzjYHZ3TA2jDv2afCv1zbe91NcxfAfuYnbHfq5eYcxP4cA7gnmohihL6bxHfL2qnNP3zZQJwJf",
  "key33": "per9PFFrM2UDmQ9v5Pn51ZEtFxmnjvhqqAb4yWijLoFoKwMgUjpdqD8muTftQDpDBbrgkeK9hmQN3zyt3RVkX2x",
  "key34": "SSoF4sqtpiWP3iX1RxhgmJCsHi4Ug94DfxzckHVB8QfMJ9SjxNrUXXH2bK5YBV2HeoUcsK8A1xtpvk5htrmDyhT",
  "key35": "5rYFMNdfJv8VwuUPqfLRju7EzsfKyTvJQkVNWdb3MTFpWvKXRF2ZtkQgjGuupet5vwGqaMkbfHMbFxhKBoKB1Yjz"
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
