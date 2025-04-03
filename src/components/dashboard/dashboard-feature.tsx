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
    "598x3GRoRmeB2URQd2ET1Twuc8NuK6SFZPWQLcaEPvv4RRswttPTVU1Sgh2TkjvPbgCpo1aoZA1ZnXLEyM6Yj2R8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDsqtFR3K5Geg8bv1FUSqDWcmkx6LCon9ZoCPsxzVmLyBNfzcwo8SAYCasApo18g32yj1QjamkLZvQfydtfE7ia",
  "key1": "2wrU1cbm6NRTKTZChwxeCQ3raGE9Zy6aAvkqWS9hiVgpC1hwihtp8kwdnUbDuV4mVv5SCe6PnP2jgEmjzkVx8udS",
  "key2": "3NX15LJZLpMC1cbfcVKu85AtrbJFmeYogkiDrYM4GiqdFL5exq5RoMFATNceUZ3JJKFYe1oUjvzdtKppQwgSP1zS",
  "key3": "5c6gbzF8keyzsLw82CAzgVTCDYndMt44q4GpZvWDYna7Putp3fHpyv6wZmkf9GzJ5XGkFpmjGCcX2pSKwGwcTbyg",
  "key4": "2MiAuSCJ9MyJMLDuJVkxJeBPvJPuu8HszyqCAt6fEmZbv3oa2c2GvAHGWTEMj9zUJT1SLsjBxVyhTsRLgNChogWm",
  "key5": "2pc598GEGuJnot2hrKciVAR6vfhhf3E7FFtx2Pt5BNSS3MNwcsmNS51h9sgYoC8d7D5hfJzDAUBPtRBn2Ad8WMry",
  "key6": "3GKEqiwRGGdk1hByB5CLsa9Ln7ZmZtgPN92m79WAeU7xVi4WWYiFtQjK1tCCRhMoDRtj5JvspEVn6ohjgeecx9SV",
  "key7": "2ZzLcuPbUUK4Lt6ob7fX13owef7ggn2VNDzXjMCa4WCGT2Y34rUk93vgvY9gWd5mZoisTTbQoFge77eZ8XzmFztA",
  "key8": "MF4abpqXsQSXHH9ndDQHYVFymhqguwskEvPrhpwXPMSM5PSpY17AHkHP9s4joo7pAUoBaGKowbyHxgkmXWMw6ND",
  "key9": "aAwuNepxH3V8gy65rnjepb97Y6gsoYpx7GDhgnnFc55quyJpcjeByFEh2zLQkTU3aMSgXrivUnFPvaHX4NXcTdr",
  "key10": "2CfktX2Wkc5k7CynjynhDkvNyub5qZRENm13o69NJ6Xr1BnhNFGF9FXFaLksKsrMphEUMbCLxwGrdWuweq9ZV1M2",
  "key11": "45nRD3ufgXg58pMwxf1JroivnUF6uqUX4kN4uU7upRxn8q4jN6oGhQW6F6nZht2nqsri4zeJfbknrJrF3yKBNSmA",
  "key12": "3e6KecKhp5wix7Z9NUdEECtozT65yyXUdLbPScsig4qKKUjuBAa7tF1ifz3swotRBiZWj2GVadTY8yiNicbcXEGn",
  "key13": "5Wi5tKc9qmyei8Sa21xEBs5pAEh2KiN2XWS4FzZTRuDguWxKm9KYx3qVbHDfYqXDmKabKHZhyU7XXJ58H3v6hnmC",
  "key14": "4EpjCvQe8U3ait9UmX1B7ZFCNLSMpppjvPeyWjEAPwnk2QLwfrdEes51PTiVZ2fYR448obUju5gA1ZDCMxjBjUDu",
  "key15": "4QGjjnGp2RPECxgkuQAdefrWs2yJLyGJq7KnqhfjNXopJEVYxHDMbvLZA4MeLyQUTLyyq52JZjk9XCn1EYDaxPob",
  "key16": "2cJgYmeK1wWvauXSERP3fRGRaB9GecBH4F5o6FHmipxUy1Rc14TrWg6TvnmMAii4zZiFPwNNSKnbH4EUjN3Vojcu",
  "key17": "4ifTkzmuEDwGbwvqDH8thcWpQNSKxTQpRXsx4SRQuTunYCQw4sEGWgr6Y2ajN6zhY5aVukDjyHYNMoXAXxJGTnkT",
  "key18": "fGzLCTKxrvNCXjMm2kVVrPuW6sccCBEhB94kmqrE6pDkAKcAQP1WiiLNBG2SQDX9cv46PJzDgtux5f9BZ5We4Xz",
  "key19": "4g3qqcqxD6rRrernRTTSCHq7XXJrXWYUwnw9P4CM5w5op2K84eSRHna1yMuC1RXDkBxhP3SEDy1G9NEzRFWynX5K",
  "key20": "3Aw1X794mCDTJuYWcpqXrc2dHcCY3kXuLzfHaWvd3ugGooQQNKQdSbDVktHH8XtycqLkR4p7XahM5vrj73aH6Vg1",
  "key21": "yRryKn3k7MDubY77FSSumU1VD2mucrJUSY2Mczptk9j78fjVvBStEM2qyFZbg6bjtvD3UFDjmDdBrzJdjH9ozKR",
  "key22": "4ecJnzG3FPBEp9By1SPbKWJLWyPwcyQ2EanUnLTtXVqQwZnWLyAzbBPYgwLAbEsdDwb3fuMXpvjXCfWDBQo8iwr4",
  "key23": "2uAmMZUQbtpLSCd22VmafAn2Sq92R7TvfdbtHTiDhGYe8QDCYbyhcAbcMqc8UBhWgcNRFNZ1irQGe7Dk868y4XZt",
  "key24": "5RNuEeKmR15m2ngfcrRs9f3GMKNG9YuX7Dg1jG5hfM75jnSdGcQGHVSoHBKmndU99iZFXM8gEY9VKZYczgzhHuRu",
  "key25": "3S9bXXZccwtV1j6n7LaLJ3v9CjNktDJjUcZqTwf2SuYdqn6f28wVAuEbD7zqRRak2Y6djvZLe9q2yxK55abKKcW",
  "key26": "4JVG1Eu5QVNdQnwHR3pTWnMjiRTsLPuL93HTDUJ4CSa3DEUgzPCDRQBvsKpckAb8PPTwAcKhFKqkeGPwU64MXDGG",
  "key27": "gCsyegjBTNmSWn4yaGuYvRrPK4ydyJoXs3ZeEtvJEpLDt7raENnrFGcNbQ72GuTApjsftQKvyWfA5qxCNimRw1E",
  "key28": "CgVctDoLk8ntFsbtRmAPbFKghfWf4kGZsX1EUrzFrgkpQtwpb8bYG8734Qr6pXrGY78jzm9C4UDTHzBgVXFvpbT",
  "key29": "4LU25yKBLpjLRrPkegL2Wn3LfNHboZzAuCR6gv3SDpHh1PcorZQJXDUicReShhERS6Lvua3nodZDDvqieV5RBtw1",
  "key30": "25uHw2Z1c58TwyM8UR8fD9PtaxEzpi5pjtoNw8fMTjLwtHA8pKNAD6Jkd2dfcZ7CQ5hjBhjLA4fSssaBadGWr4mM",
  "key31": "3bgsCrJhkKm2SPLuuiYspEC1xDDjEeCgSg7AsoWE5wLPp4oejx9R7AqVXfk1WCrM6dhR3TEmCMuV8ofKaxjyC4Fm",
  "key32": "2FBfJNBkY7eKUPaDASAi6L8wv3fnRP5y8w3i7RaQEhsVQwZNey4zBKZH3n21RSsR1AKtJYgp38TvqfHtukzsUBzo",
  "key33": "5nChhnYpUETuobL3bHwZkM7EKbgGw9pX1GfqV8zajKNKM1QYrzN4qXY33YhUWYXc4sPmgkU9XnZywJHoAtdKY5fz",
  "key34": "2kPc2pZjVdReiqSSwvB9SaAQvzGDFCUxnjzLy4uz9Fx7A4tYrf22YA6deAsGjAZ4yZivjrEFr1VsjAJWj17pEwbX",
  "key35": "5y9xnwXWUeQSx4vttRWEmyANXEJZjeDpCkq4R1vrajrq2FJn85ywP3mhvFVqHF7XRr9zzui1jhVAnFBTb57g4KyV",
  "key36": "2qdZoLt8puSCHJFHgPpsZwV8ia5RPpZrZg2CnSy495CyBQYnsZKPNWa2A15vgNwuGNf3aVFdMAN6RXTHvxh4C7nX",
  "key37": "3op5X46BtnD8HqDLc7vN6FFeewA123DRGJcADH3Hs86oNLYi7MebJPSWe6i93e7YA6UsLNufkrgc6XrAytj8t62t",
  "key38": "4SFx5oTso7Lh4y5y19Si7De86Pw4xELkFanXsSmARiTfuJbHtMmrUDjBmqWneYsWzvibHbNxHFFuMCQkkzhSzBtT",
  "key39": "5HLYVcESV2k2Qy9y9KdzvrED9JMdBQb1nxVPGbJmY27aub5YUavgGTMkzrkzSTq6G3uWHeHXCM8ipkd6gdEydhUv",
  "key40": "3ijE8FYyQAnnUb3noUmj6q5uYer9sMqVK1w5GLipYZy98b4cRx5DRhp2dHSD4W1LhRPJytvoe46gEwntunoMd1Qt",
  "key41": "36cDmGPD5TmHzDGkzhBBkexnFPWvhxhhBMPttq7Wn4P1ADjc1gT7MvxLnbEPYw4xpBmPbEtnsjyqN3V1tLncSKri",
  "key42": "4AU8d4iU3SJM9aaveGgEd4Rw8eUiVQwM2LNQevoe8kKBger3t9ug3cHT996iSQ6bP7umvM8KpUaR1eoibraQ5Qtf"
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
