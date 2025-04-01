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
    "64YtuhkySToQh8rrqhjuT26YATkvVReV9Mn4HedA4YKbti8peHo52fT9wq8DHNgRb7442i3zhwqeiaXoLEAc3PTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6FahPkBTNC2wyBTYk9yjqx83suoDoYYXbwoq1fxF8chEZhBxrDayYi2aY5s6dr9MjdzqurpoR5phQfLzFZpGoK",
  "key1": "4QGVpe69LHiQWrmi1L8m8VNX7TVchrtewwCEjHLagQKwT1617uBcAH1NKN279vJhvxZcjQHNvcY2V1PVVDLvNNyx",
  "key2": "3BuV8r3VBR4FyD2L9oCKoQsRVN5Pef2MGdn4XEop3irSsdRDHSRtP6safzrpAoc1oeDxzrZtdXM1v4Fir62LpfyZ",
  "key3": "4NdVsqDvDsQ1LiwqVHsqshCbTdnCawctuWVnpjwELG4Z4ibmGKmDF6KZz6cyC8xV1fQTrKko2fzvcdZHdhXts2PC",
  "key4": "3xkc5kMjp4zJXSTgGJJJq1FsAGC4zt8Wz7scp3khPJ5m9r5WNzbywdz6mmgcsMEoQZUjdfLJWYsCQxfiAJeM3QgF",
  "key5": "6bvY9PjxwbCLp4vLAiqJPo9DJWxpq7qBaL1D5uSJGud8fR3wyeCRXPGX6uPaegsBDdQ5n3NLM7jSVXzViSMbWdb",
  "key6": "5t4cPJsBsrgjjM5eaV2x46BpqTBXSNFda78ez4reEwuYEWnm98VvDnCk2tBYFm6VjtNSzPSoSfRanfG67MsxBfR4",
  "key7": "3TANQ64Ach9UkVAG9hBfG3JyCeKBDo5KDKb1arzy58QesX9F4MxWekRNEmY5sE3Yx7EHZwHzSY5J1fNNncyMeQhE",
  "key8": "3GNHmoqE4bRYaGsqHNjHthnu7d6dn8hbvdsUjipVBtwBpS5DhMyzDmfFR97iwNTpwdsoKu9uv26oFwj24Y3c2Nhk",
  "key9": "5PSwM3d8FF3Y5w8ArBpJSVD1LMBJbGSakoqazCz5vMyxJvNQGoUrMdQPrG8RDUuecnUQXgSTyK8Y1FhiK5K9hK3k",
  "key10": "4XJXAeN486Xo7w2myz9a6Hg5PgakrVNfnAg3YVMDPo7YSwHwQe6UV6D2BeYkZxJA9BDVJ8m1RzhXdMKvQUjto8B8",
  "key11": "4cbeZGXbqCArpRgRUNkpmpzQuGfnK1wXpvW9Hs8DCKbVnwCKU6qox6pDfoU5ubyNQqrJ8t1EERkwVTc7NqXjs8Ch",
  "key12": "2nNzyw8k7h2gfujSdsPvNsb3fRZhQEmrTMXETV1zLAB4FL5RKHdvBFuSQAjkXecHeGZhvpcV29Gn2P5PUpzGhiU1",
  "key13": "5wCJqXoSJaLsmbmeLEPbMtMYuNd8Yfo1zZ64pRuvbo9uALsR6CzJc8E4cAiXMdv8ouBrouxK1WLEQpLcmyAYHYas",
  "key14": "33XToikUu4q8sxTmKGAtHpM3DSeekvBqR5NL8y7LPT2n34Jyg8AbTwtMRg2WojJ52pJHt5hWGth4uSx53jReuSD",
  "key15": "51Wk5JNqaRwnG37a9XbNhBxdYKerca5k8d4mCKuoqePGpJ43BqX1DC1bZ3mh4Ezwy4j6jeDaCNjEdrpXJVonwwbn",
  "key16": "2cUL6vBCNMkCCQXmtPJsDs1D36D7AdqYekC52Sib9EtEQrc2Esn28dDm5qoYtBbaFLTBy6jiU3A2zTEq2BXt4kcq",
  "key17": "pSU5sZjs1KJH9VRKXhzUDJ7pAD8XkacSGU4CsZC1DQ1FA5XZWJdLN81SKjjzekJR31sztNSYzC2i79FcYd2pSZX",
  "key18": "3a2hFtQPEHNnHYcUskynaCKtByFymAoW4jWMwKu3QZDeLDy13NfzTFL8sP49PSfokQY7vmYW66tS7UuxSSxzgtLU",
  "key19": "GZ9pXVeFK1oPs4Zz5hVBA763vRYQuL9XXv6nPdvw1SGgGuo9ea5Dk7x8FdzebXnpe9KMTWQ127BQYf4xnYvA3WJ",
  "key20": "621DMEigXeVRnDjoXrKMaXaX4DvzhLUVPBdQr4YX6iyHdYMhgA5L8YE7vfh2Tq4939zFGYc6bPXYasP13FP9jt3r",
  "key21": "3SyUqncjGsCKjE1gSioUNxE4o1AKTi39kYGN6qghj1Fr6hAe3p5WrvKxX6NzWmsa15yhMuJJtEB43QGhrsgdS7un",
  "key22": "4HEoKgyhas1eybNPjULfP27p31kmUdXd8BrvwDYtY3ZQUzN9KHarrZXc1eApUToN4C2ytAqxCkMbJx2zU5dBXFRo",
  "key23": "vc1Y9HUdzYRRfMdPa772UQC5cDY11bKLZcypovraKFosJfJrsVXEB7KqDfHtgCrnw58o2fJDKw8UqkZDmqbtASX",
  "key24": "2zr1AiReUqQ4fgy9uNvcRTNK4edMc7ca6ho1jaKsFHWTcosuSGbxBcYuzpo9UQAte8udmgHYrwgRwXGw9CL3qcV2",
  "key25": "yYjm4KeXU82a2QmMzRjFLLnnjWMHHkMAFNUHcrTUEXQqjdxw8VVkuRvG28nyXKKd9P3qpnJZhMT6JqAEYCv9tqW",
  "key26": "2GRpgy6E2uMMiEMAfvzpRffTePBAUdcXT4i299DKJ5jYdQY6MkyQenXPpQN6Mxieb4F7gpc4umLPSpLFBr9tqCsh",
  "key27": "B8uP4Ee19pNBguC4ygb4KJBS2764XXaYbVqhpaASTzM6hvTJrdDfdkYQneKsrtpCJT3FkQvpwcbSfr4gg2BdUNp",
  "key28": "4st3wyoW3wXTG4R6EAcVHUPP5QK32USJYBATBhDnYUbLBUq2BYMWtNqZvWCmGr6ZonrJ4P9iQTKY1svnCKgh7Mnn",
  "key29": "2KTrtnU6wSGq7Bj7EDDnjeoPQfJQxfYTy2TVLW9HbjF5BSsBay7KYVfXrb4q9sVc8LW9qa84t9Dg51Be72Kbr64X",
  "key30": "4v8YTDc9qv4q7WW29Xjy3U9ZZsGBCE6Jo9mCyCnGEXHS94pbK8JD5gMhRTnEEtLf3AHZWDWwDtqGHNRoyeCHjtDn",
  "key31": "66sBeZDLoXBbTqnS6ZdMuyKpQqYPjnoWzUVhmnkVVSVHRbxnuAB2xXGaS4uTZWqymWEPu1492etpN9LrWy68zQzv",
  "key32": "5uYu6Sv7yK2JG2gTvLveNNsS9EzbpzT5tjkeMuJxCQYPxgfo7Lw9jdppWPQtct3As2Z3JbC37Z5vjjXYhcvsAoPW",
  "key33": "4jZuiQjcZFnQ7es7fAmYroNNaiWNY9UhsPDEimwtRUJCSCFLA8BZ1TafeSQQyaG4CaWrYfEYRYu2rDwfsbyWZQem",
  "key34": "5Ly5We5Dq68ZFCbHTd99BUwfGVq5sNXBNVGDgzkt1RMSrVuqem54n6wjyr9cYPgKir8dMXs2bESxMmoon5guVHgE",
  "key35": "3yCEy7LZ73bEjsFkmjyPBZeuAwobvjWwFkrouz2EeDGVJkRcbCwZDZkHf6jjVbdQsAGMtCtNtRUdf5UZd5RPBcQf",
  "key36": "4rtbaQ1HoJ1jatnmkQThYPRpmBf5wcUbcx8mf28e9r2M5pKEHNGVcb9roTzcQAYcv1dW6u38RgQni2epNVAwmJBX",
  "key37": "614Rr6fc8ig17GDLCVRj1SpMYJbFWxbAdfAumDC2iLQ1ksmuNwt7mjr4NoQgPWscRnenvycFQM8TcivFS1CzVeBT"
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
