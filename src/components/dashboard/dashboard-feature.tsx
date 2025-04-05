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
    "4copEHo1LBnBQ1xFDaf6qkLbtSRVT98ppijQebsaFbVbSLtVemSBofHntdYbyN2aTSfAdUFH1QGcAL2TK5BhT2Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nyAfePvBENUSL8VusCE9u6ZiKD1g9631EFmauRsQdVxUSwKN8nrQUcEUJ1AR8qXXDi8HKzkLmR1RjkTr6Ap9AZy",
  "key1": "5baLfLipf8DE639HsVwQDJKXQuUVckJFbuzcwxt9jxbtU9pFU9fqrejFdwXfFzrZvN4xeKTb3To4cykbv2mqudij",
  "key2": "58RdtsRmrGJ7Bn6urUNG1fX6XhRrhGkByok68jf2Dusc2matk8tbXfVxFdr6qiJerTJxPSsX8d8dPvRTZPyaWF1",
  "key3": "5W5cTotY2rvWiSK2KtvGAGcxhC6nksxFDAMpA2WSnAybVysBTBcGK5kksFpz9jD3t1Mgv59M1DvSh6jZNwosyAbg",
  "key4": "3jEQvnjoyCgUzjW2bBwGNjkuKAampmv3noLFcJSuS56G2CJKPx7fhaxxjUA1DP1UVPbK1sHjSAQY4LWTiK4P8H6K",
  "key5": "2vuNBtpaf65q2iCf5B4wdhUpmQweVPW86oHRSgP3R8FnjtVqTS7SSoWAHHiG1h5mgaJDh1UijxeHUBJwfzqTdfrT",
  "key6": "pnPeAr3Hi7sbTinSn344Nxpomw7Ad55chwnFx1krYL7zsLpwB2wyMahTWeYWtsp8a9ABrHiBfikFoSkuX6VCqqq",
  "key7": "4BdQyV23QUDuX35MXkesgZr2SXh8bC5NovCZ7Weu2qMUn9K982MDzx6Krc9xGv4Ws7YGRv1D7KPiGL8m5NyAZ5PJ",
  "key8": "4stu6NzFqixpbU73rT1Gr5ZJL8NqfWkuNRB13ipc4c38SPYTVdgkMoV8jb4D1LQtaDMTvRJj8p51p4AWQwE2cjNk",
  "key9": "3PJyQ4ksY4DhkopXq1jUcC78wjZ3bSTtmk2fP7U72zR6tgSbB4PQXtocsBeKjj17CXrZSj3DKN4xzgxYguN2Cat4",
  "key10": "4dHYorkXyfDKaqCm5BDkvStho5GULC2d9gErs5ZWcWcXWuztthbcdEVP6r9msJfwB34QFtNgYFUHAra3VEkKLRG6",
  "key11": "Jr9Pmr5iGp5QxN3AxWszgDdvnLxTaFpB58VCTFASCBJM4T4LvYBBprFKRzgE89f536yM7WQYn7sf7s752QExrST",
  "key12": "52bEDLZZmGKARxuK6xmtrbbSZwtnnXf2yA1vJkGhqqe8ydaReh1X5mi5vSGq76Q2JFoXzt8JCJUTdVnMH1p9HqAf",
  "key13": "42WJzC1ukUQvmip8eR5DpvPyjLJLVfMokp3xaSQqyLtm9Dnc7kKfxZG44Loyooc3bLPQ4JiVvnbjPVMaBR8vLQWR",
  "key14": "qebB6B1RsBkeDNtSRxsWQcovGUMDcdyeK1ryMrZYisPrZURx5wYXALcE6M275sK5NQ8GjrGK6hZ4E6u8Q7GQPgp",
  "key15": "2fVXiq9VbNHM4zxNa3WNSR88wEeDaFvVaWNa15ZedaiUuhtwWrdrH2D2ZfrCUtQFXX4oATjJD6KVqYCgCUXcaYnn",
  "key16": "3eUoSsWjhevnQCJmtaSYrxHNNgSWVEZax6d1AamXXtfLSEBwMe6RrdWT7rYTR67Na6etUcsqzUSBEcmyN41KkknD",
  "key17": "57JRPwqTS977EjKzKt5HRE9ufxRcDRXWV5kaNWorzuP9sTbtiH1Nd2Jv4dBCA1gatcoaQ6GdjtAqvZoT6scSJFNX",
  "key18": "3Ztp3u1wxQRyG57niQfg8W9C4mUSnswQX2y9UDin4E67yFTFWpVUeFQs8fqbn29BCYV9BYy9oawQUbhYcbMbGP4k",
  "key19": "PJY6o4SUsbKZQYJtVxE52y6z2mijT3Ydg2bEANHCEUnkZ6dVkeQqgHCYJixttvyo88S8Npf9K5pes8sk96jxXag",
  "key20": "5nbuxfwgJ58yesG3rvR34X1Xvt2XRg3DYBRxN12vJpVUc5vRret46tr1xLx3dCnRWoM1tpa3RyQ32Y7rXVScb267",
  "key21": "MJFQprF3gAreRgCbu8vuYC7hF9S7c2NW5GB8Hk1Y1sips2tXMsjzvzbVLoN2XYbWCTYA8rAhc5UcuenwAXsTV7e",
  "key22": "4PZRoJtnj53f5zHokwMsoSnGHuwaPiabvw5bvh1eaP79aM4euwLrzN1VGR2vK34Jgan6jbM4x4V4YpPfj5RzHWDs",
  "key23": "4r6iPzhqTHsrAj8zvTkpELPefUnj4qzDrvgndfG3nHSk9GBWq1815V2KXwEZ5DeCMtkhntLVndT7WvYoU2sir9GY",
  "key24": "4AWMsJEfoPoZdXJRJ9EmMCHMYYmTTYrLsfKGXXJ5uuge8zfvpArfW12o2hd5kpjLer3mrZcLycFarfrMwnaPs9ZW",
  "key25": "5Q5hoZJZyR4gWdTUmsc1RZNR7u1ULHVTQA6hwew4praDhyqkoRk5ghv8YZHfWR2bttpgkXnVnADZ2HWiEJ91TC2S",
  "key26": "4MgG1RoXTz8PRJkQpUee8BnLFiVfniCQLC9Mqks9U2aXEG8eFJUPVJuJo2oNuV5NN76uX6nmjHzijmW993PZWZ6H",
  "key27": "RoE9Xhia8agR7HWAh4irbMnyRUJ18MV1shBf9CZvasTTJmRLPFR1y9P2r9JWXTpdWdVMHMzWHnvxBvaYbARzeea",
  "key28": "3TTgrE7LRtwwjn85v6Fm67iMej6VCGXyfVjyytPbvzyGJYTGMuUJRc1WgBKnGrRkC2sdWMT7BBKKhwhzA6qpSid",
  "key29": "2Eto4YM4CmQ7eVrXc6wsLkzA5dV9hPqN1nLGaBTMXGGhaUXGv7wLngPUaamyq34oaQLRnriW5XtQapSJzdQuWn6B",
  "key30": "4W1QYTfV7UhhKeZWxXT2mignQqBhMBFy5t1Ly1Z5F9ohLsGFuDy9LTcMEJzDZ2xVo6TzkxnfD87FwTDKanLVo2Ge",
  "key31": "5wbuMuDmonkWDg7ypzjQvGpaEoSApNUMhJHjvgmYqpkrpM1hv8M7fidJn5WfcUNxgwpLBwCvEM8EZtZVXanWfELy",
  "key32": "Nu9QqJBFpnZjHPKUfK2ohfR5g4jEserHe2hmPtgWYtcXWWs5qJF5Vh6ryYgxhhEHQUtPo7qnrKppbccjHesf354",
  "key33": "23axdusJ9EZ9o6xsFxFvRBdR7HgXWNg2JGCdN6fEq4Y8oVchX8KTAgoafJs3UoTQ47jxrKGLnLXy9x1C8yJAeQPR",
  "key34": "w2YQN7qHAQGZrjpzaxvxUevLjs4RpvUYKPFNKiEzdZbbgjMs3ruKrx9MG5hntiewzKhHJJaYAu1hsk9dPug8wWC",
  "key35": "2QBybo5pJDGGsuhSuFP7nrWrvNJ6QXYYCBn6RZMYhRrC3xaUv4DCEfcmjS79CXpY7PgxaymWepcDrFFaPvPK6uzB",
  "key36": "5LvpGPYGs8hVjuBXCYDjyvcsg5q8yLsJbGN63Y3HY7yXRzGjr98CsYptwTxuY6YrPQ8uwbUAP2TK8FujYswyASCo",
  "key37": "4muoUUzeghgPWYx4yRMT2RUHdd5NjcY1xn9cN2N5G2SnKFm6zN9t877mr8QCdhqLkqk22CsNNK6uvKo7aAasT454",
  "key38": "2pkPkdR1WUjERAahyXg1Hea1YNW1SMWSXzUZJ12BavAd15ZUBQz5Jj8EN2RjePNQ5WpbaDbhVd5AifG5RhD1ngGZ",
  "key39": "5x2fygSzHzXZeDgX9TLS7o1ouXPgo6aehitYPEY2rKGcET4fKf8rRjzziftnQduX8PvFnDdEyyLB69C4u48sDp9A",
  "key40": "4aGxm38uoY69SgJGjPHjKYQwoHbozDjCMnAgY9SgTKXqdxieJj7ztaGZjZCXuJLrsYTnjRMVMpp6DF4KdbqHPBFE",
  "key41": "31vB8rFptkH3HtGDAZexASp6XYjAkrMGVVgFjnoLUbzVUiX7ibo1wQZvzwP4PxK4TbxDcEVmTpUaaWkMUrhqiHBZ",
  "key42": "5Gz2tMnZ58P9shfMPGQwTYr6TQ9Px8WvAVT5kFG8QYrJowKiLPm8umqv52bGjBDuYSMRWiqsPD5zsE9xy9DfKrLD",
  "key43": "2KhjM3bZK64Ke5xHL3T27Y5Lmwf3uUkcKkgtphhgtdnNVXKXmDCpd8vj3jm3eACjCSS5hJa4fJk9sjWRB5Etwsjv",
  "key44": "4mKdE45VoCQQXafEpn1qWQvbLF7UMSbPF9kGdqAqKEezEgyjPANrVNN8TWJYBaZU7uTsPibbxrG4YiSwvnGa7jje",
  "key45": "3E7WfV6fsanygnQsr1dh8TAsxinttGTMEWnXjMqX3Nm2TovBFDtTmj3EaxiSe3pGQdnLUbPR65wqxqZPJugLSZnh"
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
