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
    "mhqzxF4axYZugTNjHXd9jfG3JmfJ9eCXWy43EprNgj6P7Nytj1UKdzQHAGog9yRp7LpLUcUwmyfCTmwHGYo4hgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M3VoCb47LYRTmAjVQzWuiUoPunzJFRt7u5CprMMExrKusZgJa4zeoHotd23KcC1fmRMzxS9uFRtbVNQoS87hM2u",
  "key1": "hKjeFKNTcGuYJn6bbFgEbcLy7mds3EYixKtMpBukRLqXizdxHeyV1KqW3R9CyJ5BPAeXVW8q2WNNZVhzboq31tD",
  "key2": "5eLroB4NSKjHDGBHuXMoauUBn6H4dHWRhnqcrTGU1karEAkXqS1e3XVtFiuUjUQtvvsHWRLVnYApq9NHJWCaRknH",
  "key3": "4vLqb3ohSXVj9RddMQs8A8qvFpVNXRC5tS5cYNV684EGafprBvUbkrqhJK8oZ7ngNrj1Ld7SFUXbUiLVTNpS6fDm",
  "key4": "5JtAY5Dq9Sud3drwhZ9FZuLC6pknjhipyWemSZh4VmzLyU2tHuiVvZ89jVhNff41xrViE3UZPg521rN4hjSTt3Q2",
  "key5": "5DWsuYb9CoGsPkBTbEugfNWQEnTjGgSnxuZEy16zrpRpu4awSfnzQN4pNXWuhXo3q5CiHKPyhSHrnHmzHbpVdCBw",
  "key6": "5xutUtQBeWAXg7C3mi5VbPY8BLLndCQ7SQhsGMvvaPFeJiyTb4i13YHq3Eg4srSRbbPs4HoKd2gpMxnfsNCtRorP",
  "key7": "5c9sgkq4MnAWQXufrEbiQhmLx73XScseYsZ7SoWg3NYzueuCrfz7owu2dUAFuSQFVbyQitf9KSpV9jhYaeLZwBHn",
  "key8": "5UTJUqWxASRa6H89J8th9nvFbvxjq12kWvQznQs9RY5XvbJzALWTbLfvgHxfgVFYjVRg5NmuQiSnqX2Kxvgt51vB",
  "key9": "2gxvv4DaNpqd8CwrtGZx6wKFfj7YcYrZuYffQHDNAMDm1G4auTk5K4iPupUanX1z735yoNxPigtrugN35giePViy",
  "key10": "2egqLRnfXXLS65m5NsUQP5s6dUEAfG4dfL32DvjkEh7MBiZbYesB19ey9tur39MZ59nSjwfUYAsZV3yVz1uecoMM",
  "key11": "ckCa56XnfqALaXQhjJQs1MmvuxSqkhqHFT6EsCWfECPkzK2XKKspypvfGjBnTSWrbCgATPEA1WPjLH1w6WzF84o",
  "key12": "28wjfWJQqyKxq1n5Uafcz7PKGSk6nMxocRKXquF95J8TQjG24wj4XNbzKqcbS4MFnbe9AtcwUyLBfQnk9GWHZhCu",
  "key13": "2Xu625hcdjRyQZ5ng9ZuCaPnGA6KA9bBuDbhMavWzrrkd3WHD6EmPz1U3yVWk1VMunTKXb2dxzZJzsZHAB5MEkxo",
  "key14": "5qfrRqNUU5DViMZmRMgpQUT9ghr2x7X8nfJSJPun1rMA7crANc2RUd2vPC9K8CLkCmAxVSeDAbZxNv6mxzLdM925",
  "key15": "3LbcRFEEMNuUGM1qGQepqtkY9ZhDmMo9ZiGZEYH4zzsnwQLrai3pfvJeJf6VjCD9y334U7HP9gCeikhxxDf5pFHg",
  "key16": "4BLarGJWGjhEBsz1AKMuQjMRyP3VSGNuXatzuYQUmX3NCGW2o6oWeCZpMkN6w928iNCJ8ZB7ksjk888VFbxv3szf",
  "key17": "2ppgz7cNZwKu3YhxUA43Kwetyy8co482vAMXDAKiMgexpLsP9YNKJHvqmmHXPJogbbqrm4Ewv9JLmUNVwev1MfEp",
  "key18": "3h5e7eK8mE3BbL8ScvsBiqbYnBcUb342WK88wTLykWEE7MgZB687dKV1rANwVAVUcMZMMpLgnevJBGxtZajC9MLv",
  "key19": "UKks9bauUmH1qwLKDqUE7DDqNQDEXfmHHCcdUbtmH5ZimJhv453GkLc4PfMsoA9Wkn9pcd3PB7RrQus31n76YFf",
  "key20": "3Kwxw2CcWq3eps1UfcBjVG1xVqj9ZJKfKHKzNnRFZm6HQNSku2uGhaZTceMiWYDk3epGm4r2tWgU8Te6PuFYPNc7",
  "key21": "5kouMMHonMeCt9vSrbcpp59uYKE26W8xGZWncur5mLgcBXMU7J4t8SGZwpM8qbtV8vVToJbAm5NcnP7oqFYkfpvy",
  "key22": "5qyji4X7pvJQoRPHfp17HXYRH19zhwkspvoSsnznREhSNaSs2C9sUQ59oPo4SP5mLvPfuc2hrpc2pFkRCTuZ4Unf",
  "key23": "n9uTouB6SZfSrADBvdYWkyCcRuAouUzTpe8viau5mJzGniDpKfqeyaaEUMC9p2XgLXEH3B279e6svpYJT7qSGQM",
  "key24": "3sUSuo5dmkaWmkPCtxTL5d71CvMdRE5KWsVUyzpxXbzE9tDx37Rox4N7ekHQziHwHBd834FBSLpsSHQcGFqj282R"
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
