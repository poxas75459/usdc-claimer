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
    "4i5QeJs74aQanuBT1RPNQDqfYUQQuVVUjTjgEH1pQXBQNV3BzT4hPNap3RRQnEcbkRJjNvR3MkVprKZ697a89DoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1WVQGkbTeQpyuHiNm3G1bRy2ukaVhQAykz9mQBThQjffCmgTx28XzknhxtALZCN1u6X2kG8SMo44KyNmpzHZgz",
  "key1": "3Te1Dj3E8aqG1JU2zCBkZ7yUwUg27sTYMJwaWCJdcbB34LPG6DdGRpZHwGoc6Cp6qUiZq7xKLzRqCJte8TmT8mVh",
  "key2": "ErJusDoRKXPDxuSRL73yiqPt4tXP6FG845Ro9bFz8aL15Wt6FXBxMEzV6ZKa5BLfHzrki73uHimjokcF2UdM2wA",
  "key3": "29nSrsLUcE7XWNXgrxFuFtYFYXQc3C1wQwGxgjwQFidGpKXbcaHp9nZH71LrWwA1Huz4K6yN6k3reSdjAUmtxa3D",
  "key4": "5iwBt5nGRqi2Nd98fgy2KuLguKtK3RmvLohESCEipuFbArXmDcCZGBSRcpZdtX8R1jPASD2PS6Gs2Rp7nkrV13Fk",
  "key5": "5wrn8XgCYkJqSKBJTmW4coddjdo1EeJzW4R7nUxv5RqvMcqfLqKZzdpf8DUSesCA67P1w6BQ1UkRVdJrdPxoCTVA",
  "key6": "asXX2kvhDhtNM1waKHa4TJYYQ5gFSBJkRbxrsZnV4URqBDXiXFMGT2ayi2dPkXuVhRBbEX7bQq27wqLvqRma5GH",
  "key7": "62GFx7xaymZBKtXffWN84BakCSJg8vfCh4PW38xirjFJH5wKxABvzPiktzqAHVaQJ2ZP5Q3jrzJu1vshjj3uKMtm",
  "key8": "2PghiNXFjapZJw8fuXR3EYt8KFS5siBoLhdhZau9ScRMCniPzLgxAMbL6o8bA3W2QPiZirCDuVWz7rvZVgH5gHfM",
  "key9": "YwybuAiVFvpTK8EmfzoetN7ChYpZN1cngvqcNMZeiHFPVgjffhSEcLmHfhkRBEx2VKMqfm9R8kjdqBtoU9G5LUS",
  "key10": "4FNbaGdxGBLYth9CLCfh1o8svWcpvMgx9qYJd7P9iwdjo6ZykwTnuCde3sBoQZT2BJL12SDjYBggohYjtPGrowep",
  "key11": "3MEhegaFVU3CVzC8Yfa7KcGzq1DJNqqx5BoL3B7MEAjdUasWEZZZMnJRYGW7N9yJVvhY1zyq8AiEMVgvBho7eXWM",
  "key12": "H4NWRaQHetpugUPTGXs3HoKV5aAMgqSSPyLXdRpEYbD8MpDzUWNbSc7TFmsbGd2pmpvMzduDGQ8J4Qhn3hH7WU7",
  "key13": "2xcGqpbh6iDTsFmAbqQK285BKsX6115FKuLxrqYmTCRRCRRAP8NuwuSUMKHGXqCwvxptVCdpcauH1Vqczu9ahMTL",
  "key14": "4z7gvRMpx3D4nhsQvSrQYZ42i5MU9yLgdJH5ASwRSwgarJ6e1xK328wfvyUFyb7Gy1bqaD1HLgByEgfHNH1A3vNe",
  "key15": "2CutjmtrhF2835rzVpyx9XmqcXfZkmvceFPn7Vceb4E5kqJpHHWbux1ERT9qVJXeKqtc6tWJZcgC7a6wPwpYW9Ld",
  "key16": "4mZ6xecwK6d8Qu7BucSR5aifQcfLFsgAa4SEVx6WDjKKgqHaKfnwWhA4t5fiD4sBiVMbzqws9du96NJL8ju1pSwx",
  "key17": "2QsuLjmJyF8FreEDc5LHSrkVc1gKYRghjvz3jXdeWNCdzHw1Vhqanc6XqJ3fcLUC9KD5MjK5wi9eAhcDw28XQq5P",
  "key18": "4YLTqUcSYSrFjRonPXrGiGZAjQwS1wkDWnm4N7XTuc32eALp4QwwzSdidDUWDabU7ruZDBH8R9ubRuKTUAqtq3Ra",
  "key19": "cPKyRqg7YYGNgZr2yomLus1fC27q1sC5CZ8mveZ93DvHwUCCfG5SZ2p5J77Qofd7mcWnMfcCrdJLm57mHUuwQ9d",
  "key20": "3g635iDoarw13NRpb6Wfw2SpNgDwqFjUiQcZtALWzP5Jy6oiXL9AFyHhYDE5uv4wW4LLtSynFtgb8F3QtZwKbQHY",
  "key21": "4bdHJgKhc4t6HexC8AYWXzY2NK3sq5akKCM5a36MGQCGcmuXc4ro8HttQm6ZxgQTdixnFt8EM4nPE7Bc13qBCaTA",
  "key22": "iEpLbsse2se46tBXB8QRjmksuH7dPUuc4JkvMjHExe5hJQLuo3KkpMeupbhErxEkDmLZ2uDpbU762VpynfkGnMG",
  "key23": "3rUWhpR9jWNcbsHUsGuZxZeggW2pJYtJgum52H7VAu3sC3JkA3xQfZoLrTCW4L5bWCfFLfaydMeLQAaNq8e8KE5N",
  "key24": "3P6x19jMuX3EZRREPWmth5byTFLRCW3639JHmV2KcV3Ha73NNr8Tb7PgAiYhcdYJi1uCMatrnLGiux6u3jcT66jq",
  "key25": "JuhKWDqavAFRfr53VWBpWL77rjVjZsjCnfuUFCvcvdA4EEic8VRHtv5pCc7oc2BGyAy8gFpx7fgCkVSc1hy1A9G",
  "key26": "5LnCaAmF6zGBsomUoU2ih4FkhTvncAvCoa8fs7XpDy7NzWRDC7DBLCknnTcof4ZEpoU6qx5j2fehr1XGFFaPMtzv",
  "key27": "3VFEWLVVLpnD379RPhDmTSU29zAtbMYgdDgGJWGsCEHcUmTfCfwCN3e7RCbNhRF9XXgKTyhpwxwya1aDdBeHiQBE",
  "key28": "taBJXjDGn4GsZb5K1uH4w8yrJ366FCWLVaAVfb111FA6YYxqw9BkJTfk1QKcagDRv16ry4K9QjJQ6nn4MrLagMB",
  "key29": "2uqJLUWjx1xGdZUrMGDBKF58NJd7MJVNL92XKnbNeL2fsFCZDYwbkgCNSDS9RmSu7b2NMgokRn7dGt2RteHGcdJf",
  "key30": "41EdmHSAsiWVYVwvyRbfCMwCJN3HMebLJGQBU8WAXYPmng8TPtttzJK92Ff9qy7jrpwFKgaa4dnJVE1pFFon6LLi",
  "key31": "31PeRRWj9KJtkJHAgd3fsaMzQ5UcM4EV16HWk9SDTibEhtVajG519QYsye4ZGZtWJCQd9Fy5S8GAyMyZTeLto5xw",
  "key32": "3iyS51ZTfhuHRC5Wj8gMxD4fiAwhiuxnxQsCNievEBv9CH9PnBr1ego4NTEUeGxiE4xLeZgLCbeHq9tir7rKrVvq",
  "key33": "3DLriqM5aZ14BQ1SsTcvxF5Yd3KVpPGC5tmmY6bpoWhijoc8Zmqy3eK66WJ1wUCbE91dT1CCLRYEryqtzUKTPMoM",
  "key34": "5GSmUPDmGJLfxKUmMHqJgYvvp9c2zo6zY8hwcYQB6rdcX51wbfp94JkZkYryUaUEiAp1SF326951SsQ1hzk1tKnk",
  "key35": "2X2EDekimHtK8t98Evm7cxXtf9YnbgnopjZCaSs4vCGK7Sj88NRrPVLgKzJTrwY1Fo8mhqxRkjfNFiMKQu1pRST7",
  "key36": "39QkREnSX6tXeJmfYnzXTfGme24KeW6gox3Hv1ncAuziCgWoFyKjrwbsLcfmW8xcnHbq8DsBSVptAmn23SdBWqai",
  "key37": "4cuhkzfr3gKTmFQ2rZmpEvCGB7KCqFutsFsyyS2ZcY5hkRGtxk5jCQbWVQCn6vdPA3u7skxPNrRuiAhCqMzTKht6"
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
