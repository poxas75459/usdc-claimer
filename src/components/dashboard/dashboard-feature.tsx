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
    "2rzLvsCS3P9rXdVrM69e2dMAaNYmjXsxB7qVvkPFd8nhVuox1APNqKD9v3CZBVGedjaASkBmK9uDHKkxjhYCU5jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNwubqvwJtGwisEDWL3tMxU7GPFtfnPScjGZUnyfUVwYCHZGTPJeoVqB8T5CDKej1PaSzZXeWFjJcxVWDvwNz7f",
  "key1": "28TbhstexE18XPwAVLX1MsUwnbSuLd5UHCtWXDNj1vrfyNwTkPo9smE5vUNpEdmXgAdxcpGQi1cwpoEDCuaQ6quH",
  "key2": "3HU7eWZgv3Qe5UUW8yshfBjjNYy97bAN58HQ9c8ozJ28GbPBv8rVr8mRRBDUhRAFUVMXwzZH4yUGqLxdKsjAssNp",
  "key3": "3HAUQoQfPV72cBDjJQ8VTiCpPsHqoGZrqKQZNhLDv7gLFt5uiHBfmn3FB9cA3LP9BqfYtyms52VDGfCqHgq4TWcj",
  "key4": "FyKmsuJLpgTFyFAuvPsomdZzywQq4Qa8G4ZXCev6quKsdKKC4rEHwf2MBgC3hGwgixVW6dKSZUcHdrqMdTfckgs",
  "key5": "4PhnHHKib4vNpxfFWJFyaqq5Q8Pi7FNQF1CXXsM66qDoummtibqpB9BUFdTAQRH5BD78iQUVVmzERpQXsQwnWgRm",
  "key6": "2eH452v8bdkgTus7idKcBQNXzsuXq44gKM1BA9MDqwm6gTAxLJ9d6K4Vx1WsTbPnwSJGboDA5LjyctKWp5hED5Nj",
  "key7": "5WaZZ973UoTP6MndqjWgxGwfo6beNLNibaw9A4nsEGFpXy9bfAh46CRKPU9tqEK4k53vof4CrzPA5oZtDyHAqrW3",
  "key8": "chvBBL7JzR8Bpoi5E4za14nN3faSwTjHimTYDdLXwVsbPv9NFq8eYkSvPxTy8vU86DPSL8mL56eLrr8u2RVvm7C",
  "key9": "62G2WG7T86u9E37QnCXmCWGHeWH2Ldri4viyNDtRoA1thpuempXLAVCcY4ZQhQTiiai3YnDkNcca43FrJZ2AWbmj",
  "key10": "4At6bM2pemwZ9c9F6umTcpZw8DmHbiwGrDtdtpXouw5hQFhvfkj99sXkWJ3jXKi338LKgUc6szPdMPtEeSc9FxPv",
  "key11": "rBfZQAEqEFBe8fMWcvmPqRz2cqr5uJQoE2RvN3Q8daR8BkJXM4Qk4Urw6VmjKZG2nRf4oZfwkcZDZ7JqxLLtzw6",
  "key12": "2vvdEsVFh6wmRUFTw28vRQKQMRLJadtdQY6wsoabP6xyKf9Teshf4dagovKCQQzLup7XBW1kme3GkEXJ3ThvJo25",
  "key13": "6GSsZrxf33B1pesyFTJvHTgcYXAFF7YNKVCwNuNi1jGBWxnKE6a4bRKMHYHnbWtA8ADmCi58NFhNhQj7xAcWSCK",
  "key14": "5QpZM73gPjRaK8GvwBRZSY4Qzye9Fx8pxnJdkdpnZWu6CwSSKSurkkzoM4nm1R75KfKW8omxQwuVcFnh6MZ3NKg5",
  "key15": "2fF7hiQeMET4nPWp3r7dJxFMYH3NcR44ABSfzvYDikQkCP74DUHkZYBZs2WD2KLWGYuJ1zuTnnCyPt9arikV8hM6",
  "key16": "RC2PDqP5Le1BgFZsKbLZinc3MgVfoSHbowmTpvqQJ913jpvNjcGCG2kQ5piiJHStvt4pTkLjBawKTNdH6UST6xF",
  "key17": "4EtTE2HbhLLm9xHi8ZeJvpoUGFWrt2NQiVcFAi13aP67dpudKSjmMmAtkPkZBegyA9Qx914pAfgkLV5caUCUA85v",
  "key18": "3UT88C5Li7Hi1Srt9Pdtjwhau7aumpSZxkGpjPunTf1VfypUu1xXrGkVmiyLNP5kjkdJC8VwfdDEDawCy1bzt4uP",
  "key19": "4wipknFnvNaMyrZnByVwoEYgzfJEZfDP8CxH3dqcDQgVJWvGFpMD6ENtk1LfYk1BmoUX2VhfUxKBRgA9an9mgFTn",
  "key20": "52LUsgetA2AfWDucZhRhKqXcutcbyudSmF4f94HQGDTSuEJjMSBzHgVJibXzCuaANTd2ZpkPQ3PzVt5Zc6pF3r2F",
  "key21": "3ZkZy6yq6wfxQYReiXrgzUgrK4hm9RDN4miCvFJnuxCVB8vwHK88fDKczBAiWAeCeLpsveZqG8gMRBt4eXx4vGrU",
  "key22": "26UrRAMaSye9DB5Y7fdue5s1g98HSiQunUDN7LSc4YiEKfG959RPGD5dvTQ8mEduNcmojC1yHef8nXsuBa4JPVmH",
  "key23": "urp3uGuVEgg5NmvRrLNgXEcwhs7F892iUYTdFmzb53PtUjmKFwPYRcLFPgeo9mTruzBBxWe6B4oLvaobi9Fm7EZ",
  "key24": "2voJLhH7NQMKBemCVuE4iwjiu311mHcs1xKkZsZNhW8SZeXUoRGxrKFipftYkGqS8NLWmRaU9Q8PZsFffYPuMPzS",
  "key25": "EvQq9k3987WbdcCaSGLu3h2E2jvRFX9ku2rcGpH849nEiiWw4wFPsGkdFPA8df8KDEsdxJRWHY7V9Uqv9EABpFQ",
  "key26": "2qo1KBMt6zNQhJH7TRe3RkB1VSLQMjSQvPLM4XybKYFrWY4XXYiNfgcrRv1eei3VpzDWyQC8TVGXYnz94h8bkgsA",
  "key27": "2gbmsw7Vr1iehNJi3G8gmvtB8gaYd2QMWX55Mx6yjX8T9TKtcEp8xm9BSY6nkBDbXDRMPqhmE8UJVEPDjMuzNmXv",
  "key28": "4eRv9vxKLoshjY2GYhQry72hbzToscFhEhaaBTLAPYBSs1AYot5AaMpzy6BSqovig2LqcXxDbKZtEhpbRcMudr5B",
  "key29": "4AUi3Gfx6btkjK6tgpzYPCqWUEG4XeodFccYaBkU3uPc5AbXb8WCqSU4cmPc3D2SAeHbbprZ73FmjDQTN2UFTWa7",
  "key30": "3B3wdhT71NHU7YFrrpSuYUVfKE6tkaaDZ7kfyGu7DtUFAqVRsK36Kar5CTLzx9FVKNLYUcxbFHpco3GSebYWSS6u",
  "key31": "ZtCHJyn7q4aGdSxiDuyis7pHMM9uoHNjCHd3DSNWTyxzS6aGiHVYp1RXCBCzbCx872KEt2LKy1mh7r9V5HE3eW7",
  "key32": "st1dcbkTiueMmH9wW2MrEF1yztDqu1iP3kQxzg2Ro5nqEZokDeLVGQ4caUn2m6kcHj27e5ypJ772ky9wh1h4hAv",
  "key33": "3wtV2bqhHfjcnxKR8eEWpZFNhLgTqMyRJzoFra8EdVNX1Z5ggtWxQ8hgQct4Un4d4tk9eNV4FnZcALdEsLP982Fi",
  "key34": "52bdcaMwuvToNmsE4xSRCciHxzJb1j866u6jsbi4xn8mMQvndUsWnfYeCo4MgKHxsrzXRibAUUJk1KCXMQ1BWXc9",
  "key35": "251LkMHdeE91cVEgxkrftUV79qAEVDnZZRXGSqQQXfjA7ZnthNGpm4KSx8rxB3Jv1iPrBtPPRwDfedYEY6EqB4ND",
  "key36": "3tX1M42SDmSGqb6JRRDDuGW8NdHVXiqaXqXQo3XUKrac195oVef2KhcqvdxReEKSbPYAddLfJRMw9QWG5GcdwxTe"
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
