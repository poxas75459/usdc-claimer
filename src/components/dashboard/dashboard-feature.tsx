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
    "4b73qVnYBSvSiuTJif9PMfx83HThaCNTecvgv88HWtVZxA2CzPKKFTN61G8MpWYuXCaDQr23txt2z4w3HzxBz2SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmq8PnowT1bQT6346FMXMRSFMo8CpcSkGxm1yAPYm42JYRW1Um5fyydd5TqdSD88DbwE5GWAv9EdjncFSWNx7Wa",
  "key1": "3Joif9XDQXdRWGd1Zfj1Hbp2K3yTJ73Kx6WCrFz7Q9g5Sz3vGDvXnERrG5PXZJHvrWkVkhsPpynaa7RMA1KRPyZ4",
  "key2": "FabwxPPmRHAEE9B4B4x9sv2qexCMVY87qU2L7vYUaA5CnDz14j2rca5HZZQG7CfcN6semNBKUVjJfemnunNQxvR",
  "key3": "4JNnecinFYxo46bwKVvBgXW3jkemng5TjP9ig1y6PPW6PHPeyXe3epbkrgYFc8AxqEAt2wVRBo8PracHncnNq7Nm",
  "key4": "5dfR9n5uBaifDnnFKGHEHdYwABxPr9wZTENcWGQ1KPuWERVcrDkQnoUt1iMoUJtVTZ9VZhFEQxJxESqEGBeHoPF7",
  "key5": "5tG2hVvMfzjrMoG3EQdZVy35QBU2HriiJHS8khYZV448nY7y6V21FZHz3bmuRTcjadifKjb4uSnVXHuQEycHqtnk",
  "key6": "3VudhRaSPJ8osryotc3ABxatHhdenAAqgRJLh2SqkMbRxxQRmAHmm472bMJWo4uhadetkH6269PjxtBiHzhBYStX",
  "key7": "2rTCPoguaHHZKtSpp32JQNK11ovvtdhH87gcUyaZS3bVwmWWALfxB5qtYMF15B8tPQCjMAhj2vrGXGo93Xu1ZC4",
  "key8": "574tdMvTDfBwMvwwaT7T6FptqweYcSqd3TjGRMQpfrZBzpaGVaADXph8qANMUa7t7AJTJwmAZ5KS1Se7S8kfzXQW",
  "key9": "3ff2PuyPTzcu1wK5SBFGTmQNa1TAGVN9ZJq1cRg3zePYeXKwS9fiBYmJ93YpR84ZgjGWFF5rLBotSTf5qBk99gM2",
  "key10": "52YxyMmjWREhrbXwBVvhLSsTj7nkyFCXe7Wik8Ly6GYeXsarYTsu7KfPvr5vNJ9icLYtFBnkMoAjZFTSYviy4BWV",
  "key11": "3vhVDBNBmDkv6ybD9gPnq7SZo5YAAhjs6x6i1UreryAMBzfzmYCWhVuyHXHWD4Z4478aFXaFc4NyRWy4dTELaLp9",
  "key12": "XhJTJsN9nr3vBpbBLUD7mZxiFa6FxPt5PHr4kqp6L45qepKJi1XfAKyEDkY1fD219hZPrb6s55x9hheV3DFxmD5",
  "key13": "3KKCpzmV1JHV7GDcPAXZb12i9gxxdXmi1uYp9uhsQCczmvrf1pnSFdps6rgiXtsh3qVH6boc9moMmouEcbNwgwxv",
  "key14": "62fZrTE9qt6eDoKgEJyj1Ms1B9cCDFwr582ZLje1LWR9Woy9ZK2a9xhkz5sPz9fJtNeeua4wUJf2K3Zx5rtZMtaW",
  "key15": "2Y8bRUTy4QFgy7Co1FSKaevxe7dMDbTD843mWxq2NcCnAQKH911YR88tCNAS3P5gmfdZ9W6e93JyNUUAwZF7eVDj",
  "key16": "CbAs9TprQhvGqS8UNZSM6YuETp1QjFTH3fZyVzJ28y19XmFVZ1UyQnFxbSuvsjxpr4k2LCURqBVzP6jXGUNt6Sg",
  "key17": "47n2zWfaF73EPTMho3CWuCKJq4JyY89aDwnQ2PECUbHnrd8a87qhmzFcC7ZkvuXcE78993PHnXkeuDnZ5hGDu8k8",
  "key18": "4kSUfY4gPoroKYjEE4C9QKvJ3m26iKMvq3LwxGow5tEUQJnmccqcyLfpjsUvWAvhNS9DPWXp9hxmrDEmn5D3fWJT",
  "key19": "4WQyxvrr43JH7DBZWWFgy5KdkyUwsxtaUaz5BTK6RPSNwFbg7fk6YaZdLffZNknUjZ4vmx53zQjsLh9VQ8HBgc6o",
  "key20": "2ktawJjr4BKUzyaEQk7gygD768pvtNE3dGJZRP4jKdPjJvi6oF6p69MNarmF7Zj56JfhbvR5bHW7848RYAiuGPd5",
  "key21": "3cxDzy9So1tbvLUpUhWsqoaTBFpkrpNLtXxvoEDqWwhSRvFirEVCdYovRP77qnmsAE9LC2tTfUi4Bf5WJ5iYPbSN",
  "key22": "228TnAyLt3N8Fv9tEEMtW35SggwdDxDyH9PBpUzyH9tytFE9etVn34m1oq8rJ9RV1EbBk2tUNiwvAFicv9XSztDL",
  "key23": "4oV2SniAkn2C5YBNcGnbd1Mbp6xt75G6ATZ47XcTw8rsg3HpgPpWHivTHpCdfdnq5LZjy8nMpGimiAGd19aD3b7H",
  "key24": "3QBiop96ym5gUwWiHnAK9o5P7LJWEHY6aH1RbsENXqBKUcEj4DUN4wL4H5f3Tjpp9fKrBeLV9Mh2xWbikExarhMb",
  "key25": "4tpEQqpiq2BVfmQneTKrcrG4dQnbMZiHbTVweJbFKktnaG3Njf4ipgvuvyBtc8YbEyQ4E2zD4uHvdkt9F7uVxKhh",
  "key26": "5EQs4dznbXYk6vmXxYWfTsg7LngAQav79zqUmN7nhfg6s6Es9DzcAYtv5FdSwugUDgSthdcq7JgJgsZcp4HyLLSo"
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
