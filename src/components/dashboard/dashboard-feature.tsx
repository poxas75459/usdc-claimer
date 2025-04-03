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
    "4ZYF9jm7Hm77oGWdLyqZEshTBiyUBsQfLPVbV8KMSbswMpWcqFZgWyMxQhxHg468nVGam9B6ghbyDYU7M8geXT8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Xsoq1HhN3Dj5R3GfcMKHnSvwZpbT3dZAENdRPNV7BDmFDxsD8wpjFqMPW4RcoxhfE83GALQrnmvvpr8okbRzQu",
  "key1": "3dFFi84QaJkuwXZDRAvG668VY8C6Vic212w3z7JLw8ux13rXupiy6yt9NiXPmwADPQ7VRafX3hejQ3hFpDmZb3Te",
  "key2": "3KFStVTwmwJznWtAZiV6uK7aKFP7FDTDb1MUZgDbX5mZTf1NKeSbtEMxqyWnKq6WCc81w3SdTxteqTY3fgJiAyqV",
  "key3": "2KkgJMr4SFPyz2saWyrZAfHMRz1AVgohkGH4rHWvDpRyxyCijRad19QUMDiyNYGmgfFccDzW8dtnkT5p9GkVeyJa",
  "key4": "3o4n8smTieshWVPqpyt1KRP5RCkF8hog8uM2DoE8D7PqPLHkq51GdiBk1bT88Tft9QC4FpPM7j96ZrZvzKk1eux1",
  "key5": "43csQ6pkaduHjnX1Ha8rCbNB39FDYTcjnXi3LvoaRAf5bwebJktCwYVYtdnCsE9Ft9FqnmE3bbz9xtjuBvBAzy2u",
  "key6": "3BWr9TDb5R71qPx8oeDtRSbM8Vi6EHJdfKq9WLUbtjTyNrMi7ep6XyFLTh5rsy5fqp4z89d8izs33hH6RZPz1s8Y",
  "key7": "4kjTX9YpmkhSdkMEFaa4ZJpJYvtxhpgWDLB9kNaBwLRyY8gHXa6nsbte1tc9PPey76H4ccie5y3FhjLKCxqKQX7N",
  "key8": "tetEHNeSRExLKTisnNUfwRU5qoFWgtwttva4ZgQnigmQa7FrBTKZXuf3voXFBWWaJgm7pWCaCPMRNyfA9SeH9Qq",
  "key9": "4KWW2SSZ1YWkwU8HFewJWceyx7jkmbnPMQjyHx379XNxxVBLZPCgeTQBMd58vpHGwsCSr73vfmUkFqGVCr4rFf3",
  "key10": "4LCsamorMZRmUcEFNpXFbhgKVZt45S2j17vjNFNiDBszzHZiGXM6VerebbADz2voS9rcEYS7Q18m8wdQBFxz8fef",
  "key11": "4Xm9yiWKrjCwoPrMwSSkKFsDXLh9ohW6HLMATXxV6LzCHRgFvyctdS9zsuY2yuKYntF9GQk3Div2sFgVSdCPvHP1",
  "key12": "vjibGxZGnLtcpQTSkY1ZuwuczsNZ5yKEhrgzmBX7xfXrfxdcxFnssf5gK9VA8UpqbYiMe6S7sHZPDYo37ZUq4PG",
  "key13": "56oPzY72qooyhaQ3fpuFRNiJzDdB1LePSTzHnarDUxo8CCrDK8iFLkDE3fLcyxiBtZ6c5WPoFVM5tEGT7dHSthyQ",
  "key14": "4Xn362VdNAVqyikuNDDWGSfwDb5zuGaumyBfz5XznYA2SG5f9tNsNy6C2iPDaoWCKGBUW26EkHCgku2aCng7XvWm",
  "key15": "5FZQGZjWFRy9gAt3HawYspf3h1b4TCBhzc6wNAcmGKKsU6TF3DydrKK17qWYVurmTJSqfX1DzC8wxxbNzQMpPyg2",
  "key16": "5cC96v8r5vJBKk6F46AQufcJsVk7qDQKUSKBibFpFF4V6QsTyJ6C74kSLi1NqfJSoa7H5mdRnwmsXUHBie8mCgco",
  "key17": "H1vPM77h9w2SLjmVgkBu42UjJM9UJxgFd4fACkxtg4koydMdv2DX3JBwruKaPLUFBRRwnEd9Fg7LrXiEm2s6ovR",
  "key18": "KtNVXVrgpnktsvAELhfXdpE28qGABC2yv48J37QqkUfCp7WmhLoDPjdY6nMR3ppWyNpJ5hEN1jGic1v1s4MSEW5",
  "key19": "Y1uuTyq3dL79qssSpiQxHw4zbXPG85mXew5KW33Z6GsateN5gfGvFecb1qKFXZnub1LeMzPV6u5ViXCvygVWTT5",
  "key20": "3yuCaTYX6seNyegmwGuRzDXa9VmVjndwjaXDKye7zyNSza9Xyvk2YWxZh9SyBCHGCtRrTMhMkSVaMihoByK1FsQS",
  "key21": "2ShpwCYqHaQm1N9F8LGRzYpH1rrC27GouSMsEnW5dYrTTckzxXY7UdJAm4ieRyQRgipjLVMxr6wyaAocxWZgeZc",
  "key22": "63a3taPaaALtLoA34FQLT2V67Fttr7dn7XEnJ5Do3UXhGySRNR5L4xDaVNGEXCvjSmhoFrjc7CFAYSMpXz1H5Kto",
  "key23": "58YGvvGLjgRnwRXZeCNg16ukxyojmFbHM9AuH7M5n64gxodygWQRwz8u9ZGUnGgiNzxa6gBaUE8isChxChgRDctp",
  "key24": "5fZRECSzdV1SiaEhRCvtBnJ1Cx9TvPxyavWokUmhFhKkgE3AvUQqEamEKfyXnjQ1KJQiEj9g8nTV2HewCVLrBppY",
  "key25": "2VEuraZVEJNBNuXSfbySJdhrQ7tiy1QRtPmrwcp3jQHW4mcPa72YZXtb5on8wzPpXjbaxqUGXaPZ4yqCkF2Dm8sx",
  "key26": "5z9P3dEKZaTmbDz7TWDEgfhy6QUHXkeiiXPmMa6oJZThVASkC7N9ivxFfwRJbL6g229VCNhkoNAAAXZu64g5rb89",
  "key27": "5hVMdugPSh2mWPLBZEwfdnActxhwws9rttsG9pFg45GJw8VwKvAnoDPTqa7ip4ABCYYiJBvygrFCYkQCk31gfDSA",
  "key28": "3JK7g7LNLZkA959umzW17EjeVJcnMQSkCFuGdKSQn2vxeYp914sCoM4Y6Bj76n73hWr4E7GPhwwR3ugGqJ3uCE3r",
  "key29": "29mkg4pHecW8pkjEZg3stMKkF37WSwreBcKBkQLDC5Udb2wBykUHoxAg4ocuT7hLun8XutZY8WMb4ou6k1xAM1Rh",
  "key30": "2qSFcyaGTuziEk6hSPcg9fyEZT7KY6dsxP8eTprnJAX6eHUaozVDJBNi1Rfa9M4e4nbvcpExxW5vXgbF2vAx9rag",
  "key31": "iSwyvFNK9ui8Lu3zDFpZZKK9SNy9yrkmpCvvXjab1o5hTofpkhvX3C2tpgNXPa6hZMuLCTnjLsW7Jc5zgAvjp3a",
  "key32": "XMPJ4AGnXDRvgexSsLtMbjZzwo4FNkRbviQbM4mLoV92Ck4szUrt5wsx9mjBz8crELuUbposHGTRHdxU8Xhqauv",
  "key33": "FaFJmhR4MtZi1mdNhpLBhMmRjbx8EY1cqVHh8M6VQeiKkkD4jD2LiwPBXcqGm7eRHTESCxq1WgBbEVXtYmZnTzX"
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
