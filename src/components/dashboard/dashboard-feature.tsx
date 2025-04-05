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
    "28N9RYXJd3uXsXDLiCm8t4kCyfuq2gK7EjGW4WZgvs9iZq2FRkNpSzvSPgDfdgFGiwabG53BX86eWd6zDgYswLHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L56ykZDkqu87LAkAc1WxtNvd9P4jRcx1sNAiPsHmbBXWS9ZQ9FP2khA53t5YFrcHdkWSBvPGKMzS7iwgUgGgy2d",
  "key1": "441MoLotiqL6XJ7Nod6LEW4ebMLjaLNU6Xq3PFbsDn6VSMoCnTwanEXKwmTAiWZKf6GCTbvH8vakoyHBeFYSwcQ7",
  "key2": "5jLX35KDnSpNZSDGGaBzrKi7FoeQcnTbVEhVZRVjbVnGoDrcY4c93XuaEi8F96rmix6CM49jkR4yGj3dGSQfNwh2",
  "key3": "3L25FhF1r4o37DTprqdTyYYSPEpYzwW4zb1wMwVRXk9p3BLardCY6q2CQy32QCMDiLBrTiMGHa9nfho15TcPAb1V",
  "key4": "2dJQbeFfo3GgbVNBd7HrxieKNevrUbYmK4PdD8GbzUDUAVbuhSR9pVwRKKTmvNv5VjtB4pctBsQSctU33xW7p77h",
  "key5": "3PZFBxgeRx5hDUegFMJZ8y6v3y55VHbGAxXJozqH6CfuNSXWTfqCXVLvP9P4FgufMUWcZWDwgvgArFyZ8EbxHbTn",
  "key6": "oPm8gHraK8gU2ruemaEPceHCqPshdDyttTfRbmBvXmT1wPecQTTroxwecKSfcb86qchMPEqqoVqrGZ7eFXBH2tS",
  "key7": "512bpVo2GSHhjh5QPtBnh73YKmzm42cCLYYVANWX4yDMVWSgE4yiDr4dauPmFq2tRMF46n3MgjHU4NckyHZUtj9H",
  "key8": "4yb3CGtScApVmfUVxmusqWyLrUsn9bJf1oDSBhyNSHavnvtucEKx1SLZfRBNCqBaPi2jEMCaHZqaJozKE4Hy16MN",
  "key9": "PTohf53zx8gtoifPhRceb1BJGwjrgbLJXbVHqtn8zwn6vzWoDpEEnRnVvQKZjNwP6doySnbqYufuypZoWmemmS5",
  "key10": "4knkiAr2maxXtjREzBVDMSdwRHcudA9VXbW5uFN1MMpbavGGzynvsPcTbSDnFNQ9eYueDQBaRPpqAM9TiL7KPXL3",
  "key11": "5wwRSBqrXUoUxSEKhtbFVVZLLhv3kEDbThFtb2KC1bJvrMAQeHEDuCc84a5LrZAK31BuJSthd8Pf4SbzdbGihzfM",
  "key12": "2YFyZXPLDwoH5yBtqMTr1Js5azH5gs8mGR2v2mJchLNfQGHad693DTgmi9nVL5ez6Jsv4P8f93T1pKo5RcqqayCX",
  "key13": "5ye5jRPoK3k5E6X6SutAyPs1LDBEgTDrMqVtjAb7kjm8jf2TVqQd4JzvuWLiTT2ysP2vb3aYQesLYn3TtpjXHrKu",
  "key14": "jbSFW3sqNwpyVE62JLHjSXAVHHp5Naxm1MLhyEbEWtiDcqJNzLzTFNwGz2s2v6DVAC6ABwYNphkzVGnqp9o8kFV",
  "key15": "3BM7BeccmEjxLDiL5j1MS5KcX7fcEsEa2yrkrwgu8ZfrqQigScqkkq6Wc7XgEjeWkznUL2cSyjYnkqDXYETKrB2z",
  "key16": "2bipwQEbWP3eZ85wBcPq8PRngyaygskUXKzzd2ogAH58ZBt5Bq86eEvs9nEgjrjtWnD7f2s4zPAXVK333aGUn6Va",
  "key17": "4GwujR15wXhXF3TiXhdNYEUcj314GUZmGqAL6GTFy14rV13L9dqLtTqmRcvbCpiuJvHuYoJPVXxSgUsYQpnyRHDY",
  "key18": "5r45odPoJrKNENSKQAjngsnHKGpzwrYmVe3e9uv3v9ZfmozgLF579DPCeBFPViKwZVGsLQQEvktLaJb8T2V4Qy6w",
  "key19": "3ZXgcpP9QWkCDXmLMqayizqxfjjSQc7mue1byzD7qE2BnM4nUzLUney9wBndiMvcKHiDjLKQ2kEbfQMNxz5C6ZUn",
  "key20": "4nGGYuWeC8kPdBF5JvAomD3Rc9RA2LYy6VCq6i3cFoBSQ1E9pWsVbRgukqXzb88RhryfKJnMBUbVYow5tqTP86VY",
  "key21": "2p3fuLibpHny8jkCaVA3A65zBXDdvLn7nySxKmT5JjfdMMx88j16e3V5UrtnVrCnW7SYZGN8ZWEJPdAP1TVFEyiY",
  "key22": "2rjfX8kcyS7zgNK2qodb7udzQcPmZGKeunDBgV7ieykLU95zaCf2kbBbXL3rRxiVA9Dc3ZdXX2nEMS3cd7Gh7LT2",
  "key23": "oJBwVq66iC429LgstPtgbbwDfksPiYE158Ew9dMz5Ugp9fM7eypp3AVkhLBPmsZApavn1zKanmpiSt2CtWMYEQH",
  "key24": "2snPbAso8eUkLRVnsHjNCAWWMgApEHn9WJMh37zHhkEzqqB1iuEVo4AjaAeGTJEAjG4E67mBgraByGNDuiQyDTC9",
  "key25": "5azT8hKQKVsNsnpkKZPhVDeHr279PbzezYAoxKhfXVm6zukd53g2xQpL2P6jmtNcGzXENuaTjsDuRVeCMMYh4o7f",
  "key26": "36YvqN47BfmTCCZ5NoRoQLSVNghpnnbtUCrFZvxaY1wBgNTiWa6XHYUk2X1Z6aP85Uh2H229hMKcuPWSa14ood6r",
  "key27": "Jr4j5UNKUqRf986oJpHVvhh4a185UbMfXZLZySkFY5QThok2C1d7FJFiBCHWNvq8yMPeGHRBFZhSiaSvhU28obL",
  "key28": "4YEFmcU3sc5sU1DvHCcPBbAmRPSB31fCPApAhMfh8QfqvFPBfviBvfKnGC3UVw8P6HwR2u2Sifjgb4m6qSTU2q5G",
  "key29": "4AgSLgF5AvhFmmbNmsmACsHb4QmQmM7SF3vddEm4ckEuccSxN58AA59LLsrbPQ1gJhfgD2zLms21VgCzNLKLNVvy",
  "key30": "5fU3ARi8E4FENqCRhMS4f7oMhDmTcj1nik7RsVHoK3M1357xzG8VBwhUAXRRXQwaP5kSNf6AkwHKLwY6eVsVjDN2",
  "key31": "2VqsRixtzD68QQGCaKtjHob6qa16yzMbANS8bAb7WfDzutDjE8USuHLSf2wFuLXj5ryNbULC9KqZAUgPAXVQYxxW",
  "key32": "4b6nrRbe1w1xiLtgmjV1EJnmka3J2VndfPwkJixGr7HSY3gVMn77yp8Jreo8RSbCnCrtsQPQNXKuECSxmSBAyA1n",
  "key33": "4bx4hfybwjGRFpnfrxATxHe8YHJnAfRHUfft6JUZZkuKjwKoLTsxVc86TdnPXwUDuVBcDPw9uRLtCGGhDxyeEfG9",
  "key34": "5RfqmqSxmLxniRkT6syMfQnpbhLfXvz5796Muyv8yJWxPzc5bM6BdLfWEUVuysPohZAc64NN638V9v1C9NqsfRkY",
  "key35": "3p5JYmJ73tuKweF65emvFStJGwJbrGycEeeHjQjMxJbY1jYBA9adsv6fd8zwig5mswZ61JN3DAs5fUF7ZyL8xnFP",
  "key36": "2vMsV41LJ73KCpTukoxeD2sDhywrJZ9t1aLKFNyasN1qYgfykGNeRezs97RGoSE3aNpS217ygk4bPQ3Kvdz5XFHn",
  "key37": "4eNskPoRQGZnNGwmSkXRLjHcmkw7HouC6UDrgmQCd4PiKNSnM6JKixYxwA1yQGTpqx8VTaiPbsJfMHEae9TzJ92Z",
  "key38": "25X5kWbcGK35AMdLZGLUWns2kVDjo56TSqe8jM5A8fqTStxJFc8Wt947Rv1sVnPS6uJDNezKVQRgsvQy87Wv2rkY",
  "key39": "3Pq8jYh3EASStBEnptEJiG2Lj39wf8tgjeMk3zqW4UW8r19gUdCJbrEnQEbpieikh7MbRiurAEYJkUtU3ek2Kao2",
  "key40": "55W3mPLUDS3kPm2d9RoF8nvXKc3ke9hQsiZaszC19uQLvw97A5PTrZFBu8P8WTrUFkajXJphdbv4Y9MLmX26m1sU",
  "key41": "3BzhaVCj59uwbdYT9oW44eBtvEGQzUL69Z1rYe729kmJxnmZv7Y93X1Fmizm7bWnM8eaVM5FS5XZNK7tcMd5K1NY",
  "key42": "3DPJJ1GVS6oP4CRJ38mZqvn4NyuLdHhSTRCW3GgtvXFjiiLDhvg2L8nNjGw7m6AsKULB6KpWCH7VX3TxapCwQEXY",
  "key43": "5TaAnc1ccj4n8dAAX6TC9q7mJE8vgh1hQHRZmmBjcBFSWWfNd4ucBczmkkUm41cjvPugjdzAtH86dUGLFYnRyEs5",
  "key44": "Tv5EZtbpnNLwZc2UZeHUSSRZnQTpnpMjUF7PfCD4eE7JsJShiDiMT6sFGWBYNuSFRg8p43ssYxoW4pSa7VcYUbd",
  "key45": "3Zq7wahYQPWRn343mFYGLAKyazgZBFsfU2FTvGyJka9Sd5zVCaeWFtNczF4mbHxsZCajaoDGwkyPpkb4TcAmqYTi",
  "key46": "34m2rvPAHzofCeu1seZtAQCsxJEexaA7YSG7ypL3evNSqiTU2W8X5NMyuRNfDbqgaewoYbgGkXkw2UcYbxwv3m1j"
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
