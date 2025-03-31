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
    "fP8UwQZ81V4BUCMN9vaA2VkUJnfCEKD95PasDnLe9sETMuyLvoo73TTxe2ABBvqK9ZfHFCQT6NoRb9PWBYnT4Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBNVK6QXVVqno4AREL6Jw4KfLCFyzQqKDNosFrMw6yAGeBV5owCURfDmWtFUwdVBE4r3D4J7ULmLMsSadSGTq9v",
  "key1": "5JSRcDry8VzahsmLph6NEzNW66K6smWpDD6Zq2vtay156a1Dx7cbyMt7qkqBkD7yHfNU5YkjADHLsH5F4JKMCnKs",
  "key2": "mJrtYNW1xm21aA8XfgsmTa5Bw27mPKuJFHap9xNabPkM2noPq4onLhTjCSxyTgzEjibeYA54DThexBChJgabHKJ",
  "key3": "2dbHgPqrKF1bNnNpwmxCpX5YejbsGygHgv8brA3C6xN8rhoC2dttstb53JftZfw1f2f1zPd2AaJmtQR6jy3SzDoZ",
  "key4": "5c61jfcyTBXmGymuKHaPVN8WnN4SKF4pTBJRvHeQhFPghKn7EmyvkLf54Ry3Uk3aWfrn2WUfXaGhQBiGTeENpWB3",
  "key5": "8MiU6ihonYLJ5kPFzEpeeQZxwAMoH3BgFufxtoirECSYtcQ5FDGAsnoAvG1XB4V4ahSdCQgL92uGA3FWYvdz7LY",
  "key6": "5j3e2bhiepejUPfntd7kbS98eCosd7z12XZaSgAWbiH285HjVYsrKfG9AAtmcZcYJKwmwyWzv5dAaVgWmQNgiXu6",
  "key7": "5YVxuJTKKNDQ3AdogXY6HSwycB3DDXdJrYWy5nwzC9jPExMeeEcppxsE5dbatUJkq1svx3bPsHMQ4dZ54Yz9271J",
  "key8": "4P46mCdkMRXxvYPd6Zvn9PhbqrUhxCzU1e1XtCkZLf8185G5RKrEavZuaZ5MCmm8AEPt7LJkZGgjmUrMD2of9rP1",
  "key9": "4kvcmopjYY3NR177bRM5ugrice5mxmC2mEnGhAz5A3gDdYgXBT8KeUaxeceTNksi88ityoJ1r3JnMGcnF32mzn4F",
  "key10": "3FHLUPhNauUcqy9nFMuN9XSJ8LUP3gj4RipttfH29iGTCYdYU3sPxPeARuBBwzU8RCkRiXAioUSZgn12btDnVSTu",
  "key11": "5H5UJbWspTtkLWfxMMuz4JFkHy4BgWbpSQupjvaSpkJMsgUJeeHehVK8QdufLs44K5Tk4qEqgnh4fvHhQrbnfi5",
  "key12": "ecyTocKev1GoUAdCZq6uefwq8RvLKhGscgB6Y68Ur1wvAAf95LjGKDLy2JhWoooqoH1rrz3x1qa3KYx549NYJE4",
  "key13": "ruRXM4nJRbXAurXa5LDB2XL9GV8zPQEeW7fo1dVKpzyUotRwKhYq51Wrx2EDKpRy9gQhqSkc74WGN8rg33cW46X",
  "key14": "5jiXXpetz4sDhGyoFD7nqFvrgPkkSknNbXcqioB668SAv16LbTjWB5w17n6cnScDAq8q5XzGpUCYV65dSmpCEWCf",
  "key15": "5a5ZvVCPKnXoX8h8Mp442UK3poWxrqHnBws1NpDcsBsEuSgRVJQnfvYDw5YQwfgP2Pd7sdmtjyUffj5nXwU5YzwV",
  "key16": "5RDXSQG34HzXwrQGufoLM8TjMHnzEQeLr7wa5HEy3HZjHz85hm74JCdn18j8cmK2Kp6hCSDXMzGAHuZbfqT2mprj",
  "key17": "2A3Hbxsae34jXvcDaHnqxGPhweNizmts9LA4HBgujGSXG76hD3pvD8VjXT84WKTJHRmKYULk8XYdWYmsF7buVXyH",
  "key18": "3uDw1DAPpNc1PPcvnyTkdxj1mihvxyumMT9nRy9bnHte5uc7Ta9686LXQcpT9K2A546ZFEDSegVEEdPDEnbRLfFy",
  "key19": "3W5dbStQoMVwXBWWJ72o2iGKmeyESgDTpSSTwXYeQSHL5G8baEtyx6Ua3Ca8x1yGwcSY89b9pa6Dwvx836Awsf7u",
  "key20": "2xEyEq4uxG1D9WY6GQgEXBnofaTxptPi4moXKrVpWZDWrmHfKa7NvBKLmYteGpodLxDv526Ca5nkkjM6ZfMLuB1i",
  "key21": "4gUEQFt8MBuDuMr83vZUvzpFWSX4WqQLrncwUwF5RUBxk22XTmTitDBtSoZK74JiDbXbU2f3zqAxRsxAX6uxjzF5",
  "key22": "5xC8eHuPB3CfhrCqZYYWs2Ex9J3o1p4NDPeLLXuu8cPGitVUkXQbGsLLKxUeEjoVjLU16oYgJ6c6N5efyuVTGEGm",
  "key23": "4pLXMHbsM5K7ABRNcg9EhVieAvqa3k7xm4TtDo1xKospa7vjBKM7zLR7FNQNrp46D4Y6HYoUtgFcpGaG4CWmMn1u",
  "key24": "31ya3eceuXbKCYSZ4yNX9bAgFi4D79bqmLfRZE17p3ddbeghKF6LSSpCpBsE1kZek74awemr9UpDG9XNfdAeGnpy",
  "key25": "2sYvezeU8VVzCvwMeTjeFk1xp9kXmjcEXDhXEpity37Waj11BUe2Cx2hurmFL4sjR5zJr7PxB7sKZpdhhXHwcFo3",
  "key26": "5HqtpRLEpgjUvXtCrRUfDfwn5oJ94tS3UyB6Z3KXeWpkrGyCivA49kTSRXLXJDJp8Z8C32RH5m4dr22JH9j8p3ZB",
  "key27": "2Y5zRiPpsHaYqr8deMXtF1iFJUFnGUUCDv96NtgeDVEJmu2ntHFhNEJiuuP9sfzzJ7b5YnuRZBLgLkxN1AcLKFXg",
  "key28": "25WEetYo4B4aE6d8Fq3xr54iEtwpTm3Kxzr4YMFw7wHT8STvAz6wUnRgPG1hiiSf2ora4YDjGHs4kc7tCrgwGQ46",
  "key29": "3TsdS13H8EP9G1K91b3xoBfM7pLMPyyzCnJ3Tfjtfi4NSRTGotm8ksAusx41EzAGaQf9eGcuJL4CndBePzabi6Xm",
  "key30": "5HvqfPpv1jzNLqCfh7uCiyihQqNbN5iAouZQBWPyNYccHyLAb9aJbSvVNukbhKTSarxMNXmPNcX89ZFSoVkqYjL3",
  "key31": "32cKSD2GwV2CHANjBz4k7zmkPfnmxo4eLZ6X5MNRBUdSw6qpYYp9QjHNPYeJ7wxQgCJkEQtj4WKonbxtBKDTeFYk",
  "key32": "5AopaH1BwQH3DJABrS9bvDCrMpC8tjZv6YPqJpHjBipLTU9aQsn2deEnNHEb9qyYJ4iNbNaYnt42Y5m81E6mdE1j",
  "key33": "4o7x5xUphXU5R5jt13oEV4fHtNKe7EJwxc17FmA5M7szPZ59t18imDehixnBUpuZmvxS6Esx9EMn2pdaa13AZhc9",
  "key34": "3sgyG1gTQiUL5DHNZyRnQzoqtBCpgpNHR3QtaQWjdfoGF7yk1HWxnn3R9w18aUkatALxVBRYrXwgRjoMgLoJLzy9",
  "key35": "25nC72FoUybAscBZN9tvuRHp5nbCNJpX35g1naL4vBqK1ZxkjS5Af26obhS3y74L5eYbVFMwAQd8bvYsBAButDYf",
  "key36": "49MQCHbDfmDuegrmjGXDcuVKuYNoaUfdJjTmqRRZGhcLKvKpgJi7iWpyX835Bgt5Fe5csTKgVKSmbR9REUDnYyoX",
  "key37": "34mmZMJvkSLbgSYTfVFM4zpC55rQQf1sN5PU6fQwKrAofVi7PdJ6dkqh3RhExa5kMpuBh5fgvdzumNtqWp3gdEXe",
  "key38": "3ubeZczGoK9gfH8sA4M6QqVuqymi9FSS8g81HVGHdSNMnD1opUY5CzEfruZbeVnXah8LJ3zi9BZsaNPqeg6mXiS4",
  "key39": "4gPhWnfv7ybFnS6i2iYGvDx71Ji6okmLPQtmybWWGkkQHRxjZR2nKMbM8FRP27N12Mwdd5EJH6GSF7j8LjLVkSEe",
  "key40": "3Ypq4PBWvf6UL8FonSDop3zzESqQgQJyTFRxLWSXfib7CSBEW7LhZVft2VsSHrBDGDwM7Ap4ye61v2nzTsxAY6wc",
  "key41": "2ppiNu1HDxi2Dg9HLLdA4kU1sfk524ZXAsYgMsh5uxH9Pf7XsMzDiuk9JAfGgW3HDmQ59pz492zeFs29P4HEuujR",
  "key42": "667mv1Ke73McA951xEt3yTDPYdSru4qHyiLS3ATdF93haCvFFaTLSBpNAN7E2kW9jjqhYdm3BsQY6SQefGXNkvwF",
  "key43": "46NJKwi1YqRwkZkGcQvxLUGMqn4y5qoJyoTzEpN5ZytjAhMihRPUGyJGdsQHD2MXcCVDRsNxxApSECi3xbFwVQdF",
  "key44": "2vZVwpPgrmG1enbifnwH1YKsSfxFGutVeYNaJrgEVYfp8YWdBfH7JJZsJpHWA9KFtSAFPYKvz5mWUwP7XagXZgGs",
  "key45": "3nAzQepQU7AbgZ3YcxpfLnAGSwntU2ucQWjjgB3Fg9CYKYaw1pP8Cign3w2CTSEBFsMDUj85oxhoPVu4Kd44LcWi",
  "key46": "49phUTaernJQuoMrrmaMWyiKtK2BY8TFigrcGFoZUxvMUuYfXv85sjF9syHXbA1zBMb4CgqLpEzrFiipR5uCH2TG",
  "key47": "37AufxiXmNDxa9T7yewVVoi95E8dj4m7v9wfH4178N9kwyrRHrMRmu8m2RaFFi63NChKav2GDQYLFQmEG7twNrn7",
  "key48": "3GdCtttvTV2yKrFX5fVifwz7iBQdTV9Ah5ixbjpaLd4LKeU4sahRtv1qTX7cnSubFVrGSHi1Q7EhfBHqfcu5C4MU"
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
