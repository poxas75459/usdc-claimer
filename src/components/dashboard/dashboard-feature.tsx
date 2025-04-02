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
    "3aauK5MqTC71NxUV1KxjDBV1yTRAFEBFJtwxTF8tsxmJydCsakv6LrUXsWbkRqfJQw51pgexuitDAeCS4RDQRR4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwt79z9UtTmXPPczDVTAatVDgwz58YUNAsN47Pt9HuaqT16RRibekwcDAb6wzRrnBedWALQ7UzXedMvAsdxBtLp",
  "key1": "otkz1D9xJUtXYYgtEA3U15LWaZ6aDySct4wQK5zoGz8dK8QHbNNSG9parXsgU3PBt8twTjqQ6ZABMcn9sNnwioQ",
  "key2": "3zRr58UQEVDrJDzmMjpQVyDgF9XXh3xU8aVZpX5DQeNY3ZFqZqtjP3k92BWGedYWDVeh2kwfVCUxQxKRduk6ivJC",
  "key3": "4N7U1J8HkGBcj7wuhSqEFY1ciRM7mnWQEPyoN2vbXKfRb64UA8gzmmvkVHArh9UcsNmzRDKsSitbpTPFapVjnGrG",
  "key4": "35tmGbmQN38ejEk1ZnjMgHkoeqALjdAkf7jX6JSM7YQUCw7RPBg3p4nJMSu4e9LPEba62j58MJZbLN5buLQeDj8h",
  "key5": "2x1Gp1MVD5MgYZQVHWFHzxw1oLNLFxBQFaYbCfsR9LzziZtKXMBA3mq1VY5WQ3QFRjXQkBHok7g3URWLVxbsYria",
  "key6": "2ycfo2hjif6VXsCkPDM5RUFMve1KE8xzN2cBr9QGp7XA68MhyQy6vNFae52cg9mmrFMwPgepZAEFmfTat5oewqoM",
  "key7": "594ArynCU8QaCwUiSqPwS1hSLCJFdQpbqLxxPto4BaJWKDcFdMQetmZwXmoob2dtpNk7c4shNLsxPDwp8dQSuRqA",
  "key8": "5m73JxDQcHLuRNWurTSJnVR8iA2FaDBEHC1WFCyVnecfMVmae16E9FAuEAmSGNNRDyn1QoQ8oYus4XsTxheYZKwo",
  "key9": "2ugY4bV2eufMMuyPoTtSmDz3RaoKUEsa8GQ4TfXNRju6JX6M67otnLZTJcPmon6hDpFWCaXC96yeazEPDXzPJKdL",
  "key10": "5aizUuMQx92c8SupTw1Z7gVTHc36xhVLhN467z2q8Nt2o1v3hp1jNeJRt9JNpfJAwPszqusSJSGSc9jpfccT63ep",
  "key11": "4UNiPn2amz9qbjdGrRmV8HR8yHZ1yoZWgBXeUHJH8goJWkmUWS5JJTLp6bDipiqtpXHd734khcXfaZMoLYCwUnKd",
  "key12": "3DvpfBEF8HKx8BSV4eyisAjcPe5qWZXaupoKLyk8ab4fcm5bRKN5CYwFywD83fDEV8r8WSEwbnpJpMMfky6C3HCL",
  "key13": "26myu5zZZriyzNrpULyMxEWyUuYT4rmT9KW62e7nsR5i5xH4QMRxNaxaBCJbPk6Qx72HtBAamzdfqDnEprHfzBZv",
  "key14": "3EZASvUxbkCr9Sn6mFkiGXtsfSkFJ8Px6cwHXzzP1rfvoWW9UkkSdaWPY3eYaWkqSKwJDYkmnXpnA42dt9SaktgR",
  "key15": "dxdfwmDqitqnatLqzX1Gh2UnNYWXnqBLzXYSGxSBMv3yhhusr71wHgXrgJzayQpbAnDZSZScBKBJdW2ZAe5xAX6",
  "key16": "2kYehfM8FPq5izTBPaa5zgrtgpmnLQqT4vQNwBWQkbbsK44sR938cJ8fj2mHBm6WpzZv7jRaeGKCGQzJMq5W38M8",
  "key17": "584jEMG5BLkUrntJL87TakwWxHq2YPw4nNuhKEVBzwiR6kMBm5vm5vk2Qo7Z3ZVE7khrRDyKYTLhwtZHLpuJxHUn",
  "key18": "NjnD6dsmqE8nsimvK6VxURNp8ssKPgiDjufWnuFqeeHZAdVXrrMG8nsyjyi4BaGTHqJHQNvGvC44swLMRKHNz9o",
  "key19": "378S3iLU48RhURpbdCv5sPiiNqbmgShwZ5KpS4NRas7X4x9Xea6AodxaVX5asSq2jPtGqZWGFzVrBxC8iyeBWPyy",
  "key20": "4Egcjk8vAHTvSNAF17qXMQ1qPSKwzEJHrnnYChpgYMvJWXHupGcU142kSouLq8D5ysJeE4FEe4zM76ZenSsWTucS",
  "key21": "7V3wiYGq3D3WKkd4HBfDfFem9HQ9dP4iMxNMPBFK13bMsndi6vjjQ8D8ANy9WeyptxxKAfCrfUz8zFAj5o3xtGh",
  "key22": "BMUQFcTcgg4hFTnvhN2B83vWZB4phgFyw72mqyDkA9F88cnNaZbMGjHKpBikWzRrryzobWuA5mZPsVjxF9XvFkh",
  "key23": "41bXPTd3ZK2DDTMz4UzUghXKAGcxukubCL1r9jrwhHrg3UHHLJx6PXrHX9a43efFG2sN2xpdZjXqrYkTcch4o4ES",
  "key24": "3TYPpnbotSH2fAixtR6eZc1brf4P1R6iDUyigYHtCY81uaiPV5eagM84Fygyu36w3pExt7V2keqxssxhX9fRdgJ9",
  "key25": "2z88ujioxKKgzUgWmjZaGyTpDQBX8ndmgJa3dyCqKqPdsoDz46E7HeAe9we63fuvsXMDtvcmUGvFXt7wQoAuuoLD",
  "key26": "UB2Mppz8dyETZmzL9wGLqvcqoiwMGwngppCqnYXL1LtZ9X49whPauaLRP8cBd93SGc9j7kSrpKpsmxgiW9b5fJ2",
  "key27": "411X3DcVKiq5PpvWJD1MJdAkWTWVdMTdcejmTgt15pQnzAsYKiPJCZCiicPfVseDgUQtn8QxPbJa4Et9RopgiFdq",
  "key28": "4eWMwmQLRzWrcBomzPjDsVQgAzCHRApwny3wUS1X2bGmRpJQKsxV2j5LTUjaLmLnurWJzCSniTSzDu5kcMocf75E",
  "key29": "4FvBPrD5Eq5xM2e2e9dHz7tAsSQZPoYwPNu8eEfggv25tTp8PP7HGjW9jPThasb8Gz7E178Z9YPDaoinAcs3CYCZ",
  "key30": "5yHVzhZfccCS1uQKeAR2bpgdt7nYpmeBYGWFoqGFm3nLvTuMKqPzc1NkZGREaucEJMfbmG76vRvLwcifBapDt31N",
  "key31": "4DbSfvyJaMidQNC68uy59uaq3pY33eoSugNG7d1CNDjNM48BbmHAK67LQYwyjmuFLbZJC6Mr54ubp2M6oWEyYUvu",
  "key32": "53HpFjzUXBBMRPEVEeVBMdBqFDQojp97yoPDqiYkYBJ8911M8RQkxsS5KEr6N9mQxRvy7qocjA4xHNjtKXQ3KvmG",
  "key33": "5Wx7Vb11Yxhanzgx5Y91i5MhHGtocwMm5ZC91NmjkmsK3pBwmRAeiZv28Fkiye5NZM6QkyMGSM7CtpQnerPW8CJg",
  "key34": "2se1bYUFYeHwmzHyCuQHxMjbm3YghQStDo4xjETPmaPxgFnMUT3tpAjSGsxp3mmveWH3b66hzpAL3y5EV9Yzypz4",
  "key35": "3JExXXy8AuJQpP4GNk5Rj6wuLzNLGGwgXSiVmQ76EXkZQsDMAvA623oRkQbcbozpfmSKfvL6HmBFELwUZfK5M4CL",
  "key36": "YQv8ALdJuKSZPVD272M3SwdN5q7CH4TAyQKWBpPB6kw6qXhSU6gL6NRsBnTnQoFxVErBddFq8f8wxLV6g5LP3h4",
  "key37": "4Zw7JCa786vr73cu7xbgDF7bdMEMUuLrHcQvjJTntxa5338vB31rgNaQ5a6ShigpGLdrTRRLShkWYSpX4FgG3VhA",
  "key38": "2Wfn2AW76tpV6bCW3UaGu4pG3EWJRdw9hH88CQQKYWYbYmyL4YwpFis2SvY4Y51Da2jzFHj5RCz4nijeLhkkukk3",
  "key39": "3qHnvyyBPNWtD3jt2A4TxwiaAZkseFY78JzXC1Mft7DVZgq8XZfVhUubRNioCAFMF1g7i2kazwcSUGy2s6quky1P"
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
