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
    "D2P3w3Z5dtGnTDedyfiShW3C4qHPk2QfPEv1SeJSnx412nYy18ciq2qdUYmmuLF8nzQDgkNdwUqub4QpZEPsAVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeTjWMKHi7PE3QDPw95uVkUZD5viTuqdzn2iG4qP4XdrxrUn3m4yETHkPfe84FSdFEN5rcp33QPrUpdyXR8W5AV",
  "key1": "5gzH7TSF3mVUJkFPzAxVSM1mY2ohqbp3KxNGiLkH2k5tRd8NB92q3yMyTmmDdVy2ZUJKoDcFkLAzRhVqVULo8Whz",
  "key2": "3aR84GP14Ud7HZTaMowbA8pC1ia95XTF71EV5JMv8zAH87PR7gShnf29j7ZJAMSEeiZRB8jWp9d7No7HAqsHZh1m",
  "key3": "5vsWNp6NbngZBSrLSJh3oUaaqgfFEWtLcic1C8mHB7PB8XQFsqgbNvYu4PgqDtXyDfNGao5JSx8BXD8BrEeJMNY9",
  "key4": "45YiejNqbMruxvsLkCcrRUZsSquqJwVpoPzwcDKFhvQxkP7r7pv8s8fJXcPSZhzaSRsTwzGvcfuqs6pP9AQp9owQ",
  "key5": "CQJx5jwLV2cbSffRuKFDb2CSamvLaP9iPcorNNnZwevcr3b78yH3nWCf9QdS9xotvpnSDREpAcMTHay8MxE57YG",
  "key6": "dsQoPpfyPAoyxWa6cGckyd3DVmadWh4DcLRnpc6kRwFpNoYkG2mV9jtu6nfrVDhe1VWHSvxXJJ1eF7WNuEqFrVN",
  "key7": "3WZg35t43R7jDMLxAwXhpg3gVvE1DwDpxmEPCNewJ2vhd1Pfx8fcbGMdSn6pbh6ikeQptbaa5AWjF29655krJeRF",
  "key8": "61sNjKcRDHuFwa48nk9AfhwbSaULFaTCRFLbVS4ytHzPx26JaEEJRQKNHpqwGzEtabbhXUppTmR58Y1r8cojir7k",
  "key9": "5pS8gFiWoYGcJTmFtJ3wPScpTbAUbpVL6oFiTTiRgc2KgndUPdZk9GrWiKwyGVBmU7rEFmKiHQmNvgEcWBSaRg1c",
  "key10": "3A77dEDX2rKnsseNQxZTsoSfhTzW7kKUxJ89UGf4Ei7PTmGk5uNExxSnz7ehtnz87Dph4pUxJjXRSv6vUzUcRWWn",
  "key11": "3BfErY489xk2vkTRpsSqdP49v7F7TKWZUQGi73haCLWoFH9Es5c7m7WUkBmgqmy9yKhEX1qxDLDUUXrzQo4FsmYZ",
  "key12": "2mx4NcChj7FXLbY7Q6eudc1U2TNHNWVJFNBRyifn2h5bPcmj8eZuLg6AYN3CN7wtTNV7rTCEmXXEc1xpbeQ4ZDBb",
  "key13": "4ZvKdPxRqZsYNc1hVrdR6eKJ6T8EfnXr6Q6CWRmmYRzJscrYCXKXf8mKVzG25mdrUtewSt9aStdMccvm6joAUZDb",
  "key14": "5aURTvAZbTmSsnJMjzCV42XUgR1KjUoX43pSZZCzH3uoATMKsCNjWf43GE1uRYFTTqKqSjgN7UMpepvBJuKdBGcP",
  "key15": "58bbNsxEDhQ7dJXBurWnZfWAYhQo9Zq4PzJ6VAp6VXQihCu5jsa747HKzVAyQFPMW3tQkV9VdhZ2q34GRhVUCRCJ",
  "key16": "UPcBXu5B9ZCAvDEQ6DQoNU1JjAcxBjyDSxgupMsFPwY31z22Mf3eUckwDntK8MGXuUkQDf3Zb4XwaTXZGs6XDVc",
  "key17": "625fJD5goTvX5KZgozdGTLPCuT4drR7HucXtTHpHkfrG93pDSVRzBzAmBYp8cuvm8pjQ5LxBvDhWyPFSeWp8UqRx",
  "key18": "2h4GqowtkezHhARqWU9yufEX5gYiujYStLSnwNrx7d15qnyN54rDmgWJfd96FqVmW6X7UEAaKLBzd8g5ofgNDVVF",
  "key19": "4vPzTUm5A9cm1wW8JDfo89b6kSJUpPpTKMZdkZmuFGeb7ws85J7fUpfemJFJUqhLSmCJcgFocANsp3S34eP2U9Zr",
  "key20": "3c9Wiad1mgEBofSAFo5MEsSRK6SUaHgTsqHZUHc5VJtm2LrKufLVAp8DUNhNYfsAMvn2SQJXgufyQrzbfAe13PeV",
  "key21": "2x6aCp7gEYWtQnivFGbryVZ26bpvKmio3wRHdLZsSagZzEiJXrwqqcGSA6WnGoTcKwvEsp1Ctvscqb4LNt61GHpa",
  "key22": "5TZppJEh3TpfqWNnRudfZyMHGKnpN96PYxHf39YFAnmzVm7o4AURet2uceQRYn3DuobFaaUxc8SnWycTkS1YKQ44",
  "key23": "3QCDnywphYUhjrWbWR2KKi3fcqCgyYRym8Ybv6UZrnNjSbuCY6DgHsbyyrGKtBdvaLTVaNzsNSEZeJYk4DGVGT8Q",
  "key24": "Rvf3apMQBvdL7WxUCKwZr4WU8WEqaJ5JyQ2aPSjySnYjFBrxkZWd52JB4JAMYeLtcKSC2AFbXMsdMJrnkfAbX1j",
  "key25": "2NodJPDVpFNEqRk7iLX4wHEV1rXJVQoGH94wcVQBBgmzNFtKjL9mRRVh4MaXV51umAgDPL1VRDZvRUbid4rs4LDJ",
  "key26": "3Ho1ZREdSkjjgVrb48XfiTerzFgySGE6iVzsTkR4Z49iXT8nwcv1o4DoVgrHyi3NmjYZ3KTAWq8pSLfB4AD653rr",
  "key27": "35U5ELHt9wAkpmiMciH5i2Z6JyU2vBr2t2TDyC2jttQ2YBuXXwuFLLxaPm7Tj7i3DGneBkXwdoUifGCvCx6rumcq",
  "key28": "4anhviCzzss5sFpTAu75rNKwvuk2t73ss6bhRkJdDrhUCRzjbH8ScLEsKCKVJNnifu1p9bJDm6nM5Umy3pKAqKyP",
  "key29": "5RFkS5gFsektjV2jFBjRff6eSrxQXLhbcz52K6CSHSXfPpACgu5hXKNW41b3Gxfe9cbrgM59SBBYtjWRLtMxVpvp",
  "key30": "gumPtFWd7mLed5encnSgR7L5awKSGjfGqkXPShA4ciMt4U78Mpee5yGzpSt5xfjjZYpKWRUZbo5CSBEyq8Tb8Ms",
  "key31": "EF6tJUwXcXeL4xPYGnsAiCmu7vYky4oMJgPLSg9XVFNmidER7y32QA244C1vCQ8oZn1q4cQSjz3yqefdJrVjFKk",
  "key32": "2AK15Sfbe71pRdfqJFZx12scxyx2UdPKpinERQ7cfhF85qRjgTQJ8nRq59eupVXVn3qwnEPbJC37mdwKbGg52qzA",
  "key33": "33itp7dbRr117tnyip8LBSNeFDCbjS7AWTDtQvPzwGkjkE4mjkKVbDsR5siXusRGLyTPbGHTaoz8FUJEsADjtddv",
  "key34": "3pYWdXmRTudBmkWB8s5e81g3QKy7b5RpopdTTeStNG26oRPvXHtcGb5QVPqDk4mRpjejj9Hq1XuzFQHgMFigr2t7",
  "key35": "pVDSrVEdom47VRXK3u9jMM2M8vjMstvGUYc34aTrHdeusoLbLH1fiUChuxACbAdZywc633if1idGrbKg3BGrPzg",
  "key36": "jacitwj9EoKHRRXasuxAsL1csnx79AH2n6EHogA86n4bmsN6ryq97UKDNbpHHYTuTvvtK1XQCKNLKPi1XiKtWWG",
  "key37": "XdGvtQ7tDYWcbcRQcvF5a3BsS5wYCKkoEtKayQNVp8oVvmTb7yYUVgFWuZ3CF2KmdzcotpmPscBuJZpVc2zEbXn",
  "key38": "5d89ebQ75gftACofi9Ne3xwA1z9yJjNee67qfCZK3B597hAxPgLNpAiCzYcA9Ue8qYqQY2QH6PmSY4b4LxAbyZnb",
  "key39": "3Dbiuvg1YbC5GMS9KZYLHA5e7fgkycBjxmuW1XuUPeojxumGhu8D4tZPPdV3e7AGxn1QMZ6GMToM2qTxH4xg62P2",
  "key40": "4QcCH7UgkNcuPn16eA1abqbch9aHNTLxRdhQt2WEBYJDNauaFrvFJdi82Py9SEag5Csnaos1Ypx7ECRf3Sa562Tq",
  "key41": "5zUKwT7bvsTRbaYN1Mr5bw2T4TD3kZW1mm2tms4roHHCv1FV4SAGafMi1MN7Xd7g8hzpqEYbwWXTA7CVKGtunPfG",
  "key42": "4iuLmS8xYTvqo2qykfWXoRn5iZXaHeuFkrw7n2LvZjfsJ8228LpimPe34PC7gDeF6dVEm9pHRRMrdu9riqFkh2oR",
  "key43": "zyNpYG674c1AXgrPVTxyBvMawZ1c57Sc5dw2y18ZU8ywZW4AJ8jqNTiNxxjX9ohxqp3uB3y3uynMwgjFMcrrFzy",
  "key44": "f1pJ5R6PfcYvKecYBQpKXLYdrmv848qn2iGBkzy8P5wFMdjVj3j3VjwE4M5ddweWWvwfQbRtrejV1THm5rxJhbN",
  "key45": "2XaXWMWdUQ2emSbqw6A3KTv4wD8ruPqraWWAxYgtcQTkYCP8HRAabLbZ6E93WgYy6kecH2N7KFeZpHhUkf8JZ3ja",
  "key46": "3xkqAP1xgC9k9v2c9ecgGsfBfBBXVefuCCH7gpCHhiNVjN9Wt8ybGjj1oVPPu72L5v4xiLxHNfRfkFhDAgkiC4SY",
  "key47": "2omQGCq6jRvL3jeBv22R2dwSQ3CfFzHyXpHdjTPzBtbsQXKfu5Wf3oWLJzx1CyxsVWx78FNXbVe9LVR8BECQEUk4"
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
