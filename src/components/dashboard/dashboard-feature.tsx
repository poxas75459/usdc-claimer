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
    "3bRh3aWMxp8voQy2ynJ4vxUjqXTDZ8eHGYKYCt8BDSXzVsMYEdk7Xt58t5z5dzN89yFioAwjzTU2b8sHx65QcEpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zhiH6bdJtiTm2mC22bxCjFQzq5Aec2LpDmnamgufnAY65rjRL98SFzvzrmzRSMoT1pn6wDzobv4Mxevs43bmVh",
  "key1": "4VUDGQDE7YubxxNFJjM7Srmw7vHKZcz24659u6ukDL7gpLiaaAa8BzqLJCrLKuRysZoHVTcX64a4ujnwro5RxoyM",
  "key2": "45FrWr6bvMzdoeXhd3JwR9CXuHAywuMXq6sNXE1DWPnUpzPpW7sQPtYcrcH4QzLDPHfX4AUARoeabETFaXY5pMKn",
  "key3": "5K1UUL3LyTkCmtKPVJZDvz75Y3YDMoHm2ofms1KRFkRuBsXHEmT9SFXdnpKFV1Fe3UKuCxVknq2YjAQg7asocAhu",
  "key4": "JfwShTU1zPGPh4gw6MXwFHKaLTJNkRzoB2YPknrRXQrcY8tz1KXHS4fPSzUJJqkN52dGQog8QDueWuTrKMooiq9",
  "key5": "5ZuQixX2cHtpFbF6eYiAviS4SiXZSQMLaKpRh6wwnQXs1Qcgn7pJW53PhdH6BDDZzTYNrQibSosDHEaN6Dqgk2Ys",
  "key6": "55dr6a9sWXhgzriJZqfKskrV4PUc9t33QakQxrYx7tQ5nyVi2bta4angedS3aKy7GUTY7NH3MtmjVjaiyJrP1swN",
  "key7": "5zCe7qGjRFGxbyFST8kAyWGvb3GRCjYWYXnetBQNztqoaGybT6pmhJKgXwUCMGxRSX5oNcW8FSpA1TPhiAycsDoM",
  "key8": "2TyoFPv4ujkhDyMFSm6ephvfG1c5mjDyCeqNhh2peXb6NMYsmySbodSLvrUoonWXtHWxFipmXSTXqC3HxmDPNgET",
  "key9": "4BXB3hdaGUTyLgzT6FwxfX2Fk75AXvjuL77nv686mKB6bk5dFQ3QsU1cvrGMLZeCfZn3rsLtmeKVU1iPw6bvkq1X",
  "key10": "5sNSTAj9BRN6MnsHThGWEjhzWHAFxcqCMPwbeSgAE9WNi7LA9nNCQiRMtaDh684zbnDBj2sHwDEwrZTr3uKUcNbE",
  "key11": "4EKhcfhXsDiSDeAfYSFCuePtucBars7m3TZuyj55Ugc9NYLAPJCAYYcGWJBoVpAj89fbeq1QrvF9qytPPbbM5jaS",
  "key12": "3FLVGG5Wu2FJ1GLn7hhsK2WvDf2H9YBvbnj2wW8GakGmpch39ehVujJDT4KyzLCPp2DCY4fTFPxLnARbKLNmuAWJ",
  "key13": "3pSJ1CL9VbPYmrSCWk3fXG1Trye8iN3C4XUEk7Nbm3CH8TNcGEdGLUAjcaaBs8ikzGrG6pkTp3atF5Mms7Bk9EHc",
  "key14": "TGD4tyr3Z4poEmJ1waJzS8K7biSDiv5sg64iW73t55tA7yQiiFyrvstbQ2UmbzTDqMUhYdSvQHX3EiBmmqjQFsq",
  "key15": "5FJPZBb49RWC3M1RyHsZHxQWQDiDVpx5z7FMpMeHzCX8mZ6cARJ7HofE7ebG7QbYLGbepNuDgwHUWWc3SbaCES3F",
  "key16": "4oAH4dDBSQ1hi5QzwwLTUcojsDQCbSXiku7kyjV9nSLmGwgM856QnY6HLWEB9iuyjj4a7UWLk5t1oQvGtsBfuCke",
  "key17": "RiJJm5AaqEa4kCJ8FCyj7b1bRN7E4APMFus2EFGN7PeouqucvPeJa8MzXsFBLNxDwcRMpC8fL9cGhv41np6Zc3M",
  "key18": "3pb4U8hEkvKHLcM28FXk5Ux59dK2kK6DcLUfiCn3j7qAk5TMgXJyBxwLPAJ4Bvmt6C9gV85U8KJXgRar5wPwjdAR",
  "key19": "4mgvk6iUW6vVjrEApQ4KMnTWXepaLt9D6Duwf3sWceR14R6g5Ut6Srwobm6ZmBv96kEv4nkobEcbGux48z7jCT6n",
  "key20": "mH1pYf7DwePttnbMSUdyWT6S2pfxk1aPtF95jD6dnJ1zwuLeRfKGx7gR5a2w6YKKq3yhJhE7Qayunmi8sLTzXCS",
  "key21": "64fJ3c4EHLJVMy61LvYnDVrhE7X2R5ed7ZYvPNV7okE6FSiFhHR32ph9i4Nu4P98VA1Y9QsxHWthdrz6LSFozV7D",
  "key22": "KYPmzCK1CDVYdXChDrCq16cBQmwy5CcevAN3DvokYumKDRWAiRvYcFT6EcifHnFGKh1YhAhsEuVgSva6APNU9dm",
  "key23": "4dJScMUMxgkrq414J2Tdee3EeroXbypaXFLFKXaT9aoDYXNn2mpwTG4P9rDqnxSG3UFt3J6XfWHpW6PQS8Cdypcy",
  "key24": "3ZDb3GuZZC8kgonHwWGrrpjkauBwowD69kNKRHJW1WtMiGNWExLCs8zYMH5KE9v4z8cxu3LrZMfuBQVf54XFMCWS",
  "key25": "2Wo8CXnHhsYZARbUJEY5NB9qk7xu73z47DmzhnUzukSxwn4DnhY83uTWAaCtEX6pw929ibJZrpNH8wQFYsywmffP",
  "key26": "369t6vjm1LtkZ4282EMo2woATveeN9XE2s1Mu5Woxr4eoHcQ8oxR3ihTCns5JKx2t26EW4ywLgzLkMNr7WciTrwu",
  "key27": "5sMKHpDpjRjQjXQbuhT4KsSi4mMmbr4WTT1ayWFrMkjforG3b9spBHfjX8f8Co8p5KikgGRV4rubuRD2z5TWGga9",
  "key28": "3M2BWPnAARzdJRMBUe4tMFejUzD2kJ2RJE5TYBEY8tCW6j3L23Csz7TevnmoUoKyGsMEmenk8T1cU23p8Q87byJU",
  "key29": "4YrfMSE8nw338PfVYVbJn6he7RLMoawJnUHJLqEMhf98bUokAiihPR5v5suiWHxnhKCLSVAyCWgJQRyG6VXAEMuw",
  "key30": "5ZsxaMXWHXwaR89Z7b9NaXrvd7Zw4BybcjHcEeQFcZvm9ALEQyUZS4Wmn1HrAR8cEr8DgVBNyv88guRLJQ11oURz",
  "key31": "4ipqxCVEJ9mHXtg2ZABjWgEDZsbZxbTmV5czd6vBWJ5p7Avm2DX5VWrJRmQDYNuzW4mAsFp9ZrYig4S2NVFw4XRW",
  "key32": "2xZGqp1cLHkCT38mnXpivJMM7VYRaCQY7Jh5h8VWMX2MWYTCiy6UfE97scn49qQY3WXh6CTVrEJr51Rmi4WaD13R",
  "key33": "3f8SXQS4APy3tBNNBmSufmcdksUcsbRzpuR4XkhYuXjtKrmGLgtabcQMGAFhXywifR1CfK69SuAXkuLXmKJ6a8Mn",
  "key34": "4HU4KjtSHbuR9BkEDzWtVXwpwXEkyuHaGbiaE9ENV8v1byBWted3EvyAJXDbMEEXqBMTTmEEh1uw5qhzswnZSJu",
  "key35": "43Gps1PJf4LeW6RZHgUhcvfhJEs9DgwMxaEiZj5PzXLVFoijpM2Fp6Js3MSg2agzpYDS6MBkHrAbtnq6rqrrzYqN",
  "key36": "5k7KTxerRrzoTgKEWkLHrM1ngXhXTaeeA284GiqRPvuPbGZ1r4zcEKQJN8anYYeeyq1gHSQ9Qt57HF873miNii2z",
  "key37": "yB25dgCtRoq2SNeaJ3zuxTVWT3KLsiC5HGWnKYc7Y4JBQJYWg9PJJLg2aLia3tgGcHk2x8u2JaebFWinzTqsZ8y"
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
