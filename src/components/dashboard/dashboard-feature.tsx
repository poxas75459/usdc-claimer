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
    "55XgzGuVNhcDW6R7hEopip3tKTjM7fDV73usKgoA9WXZUWVqTgJqRwjP48eBSioc19Ab9SgYFrGS5qGaBVPBrNWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63K8LkrhvaAJHpSmmmPtM8zMMGMJu9VcQ1DrMzfTxvSMjFamrziqvpF8RuRrZ9AswNG5sxT4AgdDPr9HAgzBV5zW",
  "key1": "ZR7ke5ooZV611fa9Jsmm7LzxqBzHsMtTaAkcKUi8T7FBi7Z6SwvURQVsb6FmSGwiSA4ocjyf1r5CLjs3Q7vnrmh",
  "key2": "5ZNGKhkpStLYVDU9XQ8brUZWiajSodXUa9UpZJC92SzMW6bhuTXLcbpwk8Jp969Ca7sC63vZ7sX4ZjVZ3xVJu3h6",
  "key3": "n2ibd7Q6SZ1uAaum7w1LDimixFnhiNs3DaxE5RL6Kxrs4bS1xzyDM3T56999kBsbmGRY7xx2QWMm7wdACoRuoYr",
  "key4": "2bJfdGigSutDemGjMffBfyT7nFvSHoTN9fJvYftmKv91VzUAM6htjNwB8GGtNdxx1p9C3oxnL9v5G6zhecxw5kzv",
  "key5": "2mJstmw7igwKFUEZorpGFaXe5tKebyjntfvyA3VgcgpjcyvyPGvwK3RNey7vRLU4Q28jWifahKbo65HwF2DaiESH",
  "key6": "3HKf7nt47fLjL8uPFiSiXYJE2G2sCaC94CnGP93VPtWfxGJaQz6uURof2L5ZLgUN9UJhQn6AiSEM8JCeqAmdQex5",
  "key7": "V9YPmYbvHGVxYcqT6jizpm4fhdUqLo7CMT99VfGKTQHo9u8oxCaKzoBHK4acvWukd9LNtefjiKpuBDqwRiZC6pR",
  "key8": "4ZxzTz5Fd3v6eeVT2m7a3pWQUWLu82y4a4BcERCAiBuTERCdCQ5Tdpia2D9Qeu2RTCdkf3N7pmdd31wAF7FWyohs",
  "key9": "3f2cQkdcCUSp2bscyTiKMNjbzYfZ95oa3PSPuMDcX8gTtynotNgLZnYYf2YNPif3hTUZB6XGKMuFkuNkeFmYS21E",
  "key10": "33wCCbsxiSk83Qqq4gjxjDjNZC5p1Ag3ncDqwbRcdaMGtRd64iErZvLBBT8xh6v2Ps6UqNBcgJsozv7DR1cVsYbT",
  "key11": "4guvXyoWhUyAZSRDofVPRo615Xc7Tb7CR8egp9f1UPB74CYGB1gL6breyQyeS8dKLoU4obiG1YPVJBmcnNa5eAtf",
  "key12": "2BPtpEHa9J2rGBLH4MzhZh2sLxnTD5gfn7r9M6NxYkNCCZLhxzjXULyYsXEqwMNnujaMVUeNCuEDVmLep1awDygA",
  "key13": "4LLM1HpFRds41am8ddbum43uhqHU6XtzupTZkCJgCun5iSFwwo4zyRfA2PTA3gwJKx7Lie9D28BMAGaqCWV267mR",
  "key14": "5Q3As1Brgyb7PVytkFUyGfYyRj5coBHTmUuq2mqBZXZPaAkPDEoHGeskkirTk3YRwrvkeKZr9kLoLKWTuV92EdiV",
  "key15": "5Nu7dsZujw4A1PtJ9C9YocEN4FaTRo7UbAiW8uXYg8yus73gt3tc5DfBxF9aPLZ1bwju3Ev22jJadamLkbbCpLRY",
  "key16": "5U5eXhR7A9k3WTYJoDHJZ8fjB11QN1bCuwnxWcHFZqUrPnhtjKDNWGRCaSKSKbkTRxazG2pLPk4JTikCDV2P5zgY",
  "key17": "43zePKpVXGLgTaGJSgmkLG9KiX8xRGSLA8H4r8852YeUxtphGSCGJCxdbcd1jjL4bVJvXmgNjXtNmcW9J13Ekfwq",
  "key18": "2P4TV8jh2F6Jqy4JV1hJYYSGPQLMhciwgp4G1UYrqPtg6bamX132xFCpWhvNcTSdCkrj5VGcRLLfwYsZbeyANqaS",
  "key19": "2UiCDqve7E9VbbLJxoXJ5Zki8mXHy2dFGDJ32phRwg8ykB7nB2xos1VKrt8WEYkGTchxonqr4tXx6VkHcBvFUNvV",
  "key20": "LcPsaPd6xgeYEy5fLpLpRQjJNLgh7piFQ1baQV7hiZoPiBJfTtgEb7YJoCsy8CdJaT4zV9GKLNvFpurxFnbH5Pe",
  "key21": "2ZBoPdi4qV6iBMY9UZ15Ai3mWXTi5CKeRnnmrXdT9NqRQ6hpTzFXs5zQW2H3w8iqFAkFpM8mML2uJzDaLksn5JYQ",
  "key22": "9aPAvuxySZRoizsr5uWGZJjxjmbAh1QFRMyY5H9tMio7a6vsJJ5yKQwCvZ5TSmE9UGTS87nK7bhuYA7edHxTDMP",
  "key23": "2HhU9dwTvpyLXHiyWPUGe75b3AnkCpRkFwKrdqbx4aAWdUZPEwyP14LgUKjYWRQvTPA7635UPQYn5hKm2BbX3X5V",
  "key24": "5WGbntJE22zjLe5roSCs48Hb2Qnx9JZT3No9CHbHBSJ85DMFPSFt7YJa73d8NgLG36k8CSLB1Q6ufdidAsLZT9zN",
  "key25": "2uXyJfXNakceZVGpTvzJSP9otsw5dvmGLg9hZMz5kHKCCkvpEoVbmTXkut6EeHpL9KwR4hhJFa8JFFhrxg3pnSvJ",
  "key26": "61feXtW3gNVP22YKuz2o2ooCg42o46xsfnoPzCr2YLy4GoYENGtnN9cxVpXK3UEmH2MF7YTDFkdpEjXxCxQ81jVw",
  "key27": "2PZperR53x9aCzLaq5MZb4TgqD5iMcEY7oF6G8mSKAxmar2M2qcrRsd2WiP2CKQK2YAg5myvT83LbNcVWTbsg4Rv",
  "key28": "2uqw5RL1iEAiTVySs712A4obQyeYL6FYtYfgahcg3PZMhaEo3ZvgyfZUtdF68Gr43h2hiubtRxX83igYK9Tjr41a",
  "key29": "662hV9Y7UCD2YHNMfL21sXMaQQhDj9LVNxw35gMETNz5ur3SqNuGCAvRTFSixef7GNVYHqa1XXT31o3NoWzxVt7H",
  "key30": "256mLG2Jof1b9fWRa7YzYU5ZHV8dxaAzdpcbb1RxoAPojPGfEbcCG464buRtEEDyJBVR9HMxvYJcanV4mpxRc3U8",
  "key31": "r2tJjkPEsispW62rsvx1EAaWttsS7ob4RqWVPzADEmsjeQehZmQetZmT9SpuERRhudUpg7cQbEKZ7GkbXPuo3ao",
  "key32": "644VrbMn4JQaBpGeTXKhZ8NXFge4F47svMNMCMhgLG5RxViGbS9RNZwN1GE9pQTvzdwiS8ALfx6ZyLug2Kssyjek",
  "key33": "4e3GLsHgyYQGJHyPeTj4WVbQHYyUJxBS92ajCw7mKQR6fR6C5ZSohys7jw6oyRctGYDotSFBURYqVYqyP27rPDh5",
  "key34": "58aUpdB1uxxfspCyLPjoFowLVfUYGjhS9AXNiLFs4ykV3V8G7F7JUDbwX8zd5jxxiVHbKDB8yPdG8F6nQjJNguXa",
  "key35": "32eHVSuVuS4GgM6mAsc9BUvYLBwa4ZauP3fwekgiu6gseAd2ZKVLvYLWyEvQAxgApndHmi3F3BaVmNB7pkfEfZs3",
  "key36": "4crLXwj6xr7NMTe2T8rE7Ed5u4HA3fymSXjH8uU2mfhSyXcnXcCifHiQxMWqShb1h91DsF5eEsaY65ep2VPio5W4",
  "key37": "3VHadwNh8wcXrfWZ6Kcy6mYxYuQjf3sqJwbG2myMhCUCewg69J64BBySULRLrfL6mibcZULuGrTpfJQ7wPKD9RPH",
  "key38": "3QSjvnNRgNpog5WPPdiHFQCpUPCtw3iSZDAKrbZu9aEhSY1ddepWv2PDhDx5WAXEdQHK99SZSDmfApq31xwNrn7A",
  "key39": "5bQTnv8S433eGfeAR6vxFUddB6p95EMjuoF347XgbM5eXXeXjaMUE2pTX8MMw8XaL2Bv3brzYcXd3UkwC7GuB6bJ"
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
