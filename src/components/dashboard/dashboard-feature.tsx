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
    "DdxJyFWQeEmStJgmbRrNMotceL78FUp9RqQaVSo1AcdL3hsM4uozk2wz9djGxWkHXujARr6GeFHiE9nHeBR2weK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkuwEC9H4PcWYvQqtXSXzzkVEVZtub8bzgNB3PuX7w4gxAnj6GWnH7imPpeXvBPqHYWNmMmrgf9bpW83cZrp1K9",
  "key1": "329e5pQoPczHm9dvbR2WQr6yPck2vzqigYj1pan5tuhVzf3D3Fn6TUF9oJjLcoVb3kcr22RCJKEZDLuK2awJPZKc",
  "key2": "3hdr7jKkLWZ54rHjpTDUZqJZxzohpdgtRQkpk6L2cv1DYzeGaBwUgSJGpxNChriNrC9Wx26mNjp3Ha7LUCcNjF7d",
  "key3": "5bgfS6oQC6zdgSSKiozXfNP2ehFKUaiwQoYPfTuFXyBkq1UbwVZwrGyoc5NsX6WBdmqJLpWLuAzeQkTDrjMEXgAC",
  "key4": "5q65U5Q1JbDWy6Ybj3k5XCDmSvcVLiFq8UeGC3iENpkyc61F4YdNr3BnB4dQJqmdcLqoD3PodansV58KHP1nvQek",
  "key5": "381YDhV3kSPN3tiHgvBeVSuQiF9pPdAA3ae1edwPTWM3W4QTL8AbFqczvYd79B2Np93eCiZGaPFuXRbDrxPyEbyT",
  "key6": "3Pjmb4W2x86kH7TTMUbU7R5EBpawSHVJYHe689KjEFG71hr4QZEatpnnSBCouqoutmzQKDHABvfnAqqUpeBYmgyr",
  "key7": "JpJHaEDDSWJ6kjMLCbpVcyCLG4DF2Vjv5ysiqkZnMQBNaSfBi22wJzhfiQ9ba5mmzz7UjMtUW5PN95fKHciqipB",
  "key8": "8cUd46KPkfVzRQZFQmqm1CiWyMfEqFD6dxnupx9d1ZK8PS1YTdKPZjeH7GkGVv6JsckDuMzW5abzqU1YD63U2VR",
  "key9": "DuBEB71xXGCQGs6ZY6b93c9RrcNQi2aq8LcQf4y34ueNgxvTQQRXpBFFFQerCmJzUmFGzZ3tyiQtBriywqATp32",
  "key10": "3PYasrPf8tS1NhDb3TLorNtzu5vpWtHU4wY1tYafg53DkEvNgVv6eUvSNQekPb91v4t8BEQyM6CRd8EJ5jfpH68m",
  "key11": "2EbQfkLgQseQU7s4FTrwo6zwyfK531v4WRX8iQguZ1r99uARdSr5P3NWFXEhzk4bT7xEtAJEM832Vd11DbF7z41t",
  "key12": "iyVYACSnK7fXaGNNaWDbgEXXFugxAt6CS6EiWZLSZmYHsn2eCHZdY3ahWVtHuVW3ChcqwQHyjChSiYeGA3CdhGm",
  "key13": "27SKySsvJ8H6s9cveaegpto9mpisTUNXrVGd8cMqjMe1zQaLT8gxoLfBVp1tuNV1Utihs3hb6sjiYYJouM4cfPu6",
  "key14": "5WQKcT7MJWriU3HUYhv1PqELDMfLPZtT1sSUXycnsfukjadB8d7GWmdLYgt2BehgR5dfckSVzapKReULhim7jJrU",
  "key15": "5mtbTBPccFP8EdoTNkGeXXbsb2bgHDVBk8eEuNeMh8i6sWJgFE4qrAZ84naVAtoxSmjGG6BSYt7F3rzgBU2D8zz5",
  "key16": "H8WnV8by2gQoeUjYcX4vGrndysK1u4UqzduVQL2zEehnuVU4TKYWCtfbxyn8Rrte224yW2SnyQd1SpcHLSRRMFK",
  "key17": "2KXHgQJYf8vBurYi5xYC85gjBbUp2fTxNo2ZgqqWMCj3CH5vrk4fips1SgbRzndN5ssAdAak2g2jUpDrKi3hsfq4",
  "key18": "2Cb7YBHmT3m21tK8jbM8zBc6o3jpYwnpqQKdioYfU4DBdE49hBTCAFJsL88aANfAxdrGq3xenC1Bk5qWEozVV7Nb",
  "key19": "cCP5Ago8EQs5FemuJQN3XogEQEQnexipPYWk4dEeRg1FHWBy2P51NjaWniZxZMkQTThgtUjLfBFrcSCAxyNMWLp",
  "key20": "4JtjjsqY281VwPvhK4mXD6d7tCC79fqdt4fmtHmd4bTpUCYZRUeHUKWvNdjEmV1e1QD5V35gwDrRLXHqKoiaqPHR",
  "key21": "34ntTqiMCBczEV7NdSk4PRvwJ3EZP9jcwEd6L1R8GVMGjaeEi24aAczx6Gv57PpJpWeaEJNwxZ1LtTB3GNeadCRM",
  "key22": "zMbDZa93aYDzMySVa6Gz9G3XVGNDX7yu6UvMJAGSBLf79BwoUeDfEwvgbMxgg5RBUaotNpG817sqZ1K3uGjcNwT",
  "key23": "62ycX8X9TTxeBKjyLuPEWUzHyidy5BnHCJefVnyhTroLwwEQkG28ZmywWgDgUB6ZtQ28784tbP5trS4Adek1Qs1U",
  "key24": "4LWHFawcBgvcr3JPdAmSG4giCVLP3i5UZzcq3C9Dz3Ti4dks8VNji57ZcTJbEAnUmxnbho9iCF2gNm8SajUeN8LW",
  "key25": "2KegWXjc7xsgMbonV1mDufLY8pDsQpcKyfuBrEoynhHy7kTXqfoA8HcmodcDHRrkpnaYAZaffkytnE77K9FvYq9Q",
  "key26": "3jMbToCkDW8iJx1UbQiMG667dreqoo5SeNNW75uCxcSfKhMiQeReFFcRVVfssJfe78Fv2tekXGEgTRSCCCPndmEh",
  "key27": "2XWUChy9KXb5QKdcCQrTdyN9rtKVe9su7dSYaCeCzXQtnMsTHA7MzmtEGQyfxuE6ykXSXkbLSNW1g3KQ9ykaFYji",
  "key28": "2uJyaK3wX1ucw1mUFV4C7dSbGVCfpUY3haiC4Nucz5dCoj2YQHHNxndyVnPspdkMWqt8Anf28Hky2cnjvdMaLeDg",
  "key29": "5A2zVD1JrcE8hUAwhNAZSBKEqm6sEUECyYfqiMnZqY7cqCMVJwu51EF1AYYBdWvGPkoEf89t9x7Sx2RjYwaG13oH",
  "key30": "5KS6Z14svCrvq3uhjqW3fxG8ue1ajzugnEqLUrxaTcHThUArW1Juc7LhxcgV6yJaCYdUVJXM7RDFHSskJr9ptrBf",
  "key31": "2GnVZPtcKwoh6XFKyxeLERKchd1uVfhmAsvF5nHTUUe7FFh4pinNxSEAdBUqy3pHLFYTwTpTyvrkwDtzVzXXSF5R",
  "key32": "3PU4frcFuHyuQAxGLEz5MiaomhJQKJLVPP6xA9LEustAKJHo6h5EQ8N4E22T34oDfQf3J2WQ1KYBbKHbQCFhUfRp",
  "key33": "DdMqaaWJYSTn2ZXoLhuia46EsYdyL3S9hTDQvKqzkLfs2hY4NEL7snWW2JLFJVRSjyGRWm35Nm9YHYXGY78b8LP",
  "key34": "GsEJ6MxNLtg5Mq9jDRnUBqwKMqJZF7HfZtkQrowAvLkgamVNNf5A6rT3MPYA7Fd5irw6s5sVWUuwJh3XDP7uFvr",
  "key35": "3GJ1n7pmVdSFypwnd2NRQQacdtVRWDY8cRwSPAyKcMa7QNpQeSVjkiyGqGySbdd3EJTLi9QN4d3rSNaWtr2sSW2",
  "key36": "2myrYPzKQdFeDrsZYkiaeQuy366xPXWcnP2vNPVMgwbwrBkHU1F9xCLjvnsR7rktQTMcEHsiUdcaw2d7xkb1JLJT",
  "key37": "2FG11ZpXMJTBan5CSfzKPJvYsooSNukjMCCE7f5gfsxZdBAuCRpu3ns5bshxaiQ9ynsP3ShfwUpBPPB398m5C9Es",
  "key38": "3LyFbHFkGtMxAe7NGMAJUL1q79vXrCsg3EtD5wyCBS81C8AqZWZjUwAaTsfbfxVFXiY9jTn4sMrHSiKGqCqwB5w6",
  "key39": "2yTiVBPLvap3KeLzRvy6xYurgVBATNHSqmJYPBGnGvwP2VrrqJzHcr11886pVjAPVbpU4DQUa1wnrMjfF9brR1oQ",
  "key40": "45hbRBvQuxz5FydFnd6H9H47RnmfKDJq8oHH3w3B3v3LwHe9kwyvxYrXatNfu7RQekv4BvbqqFrhadGeLpCYnh6d",
  "key41": "4mPMNnWMEpCdsPsKver9rMHBwdwBf7gNR36qNXrawSraCdYbzfyKU9ZeuQzdsoMbwNPvrnkQGqxv2mznVMYCLHdg",
  "key42": "2dVPuXv3GpL7GUE5RDzmeMUd9qm3eC9ST6iGHBWhZCWJjU24fvxSsRwYBawsC4F4rtcvNxLNf26C795n9yNLr7Ax",
  "key43": "2bWS4qvCxiYu7LZm9jAHNp95edKb9ETg3yuaU4PBtUdckmfqA8KCszFN5u4pz3WFcBoEcEbc8APGNLSGoWoLrp5N",
  "key44": "2ok2tCktn398ExS1McbZLcSEqHD4wrqLbirt5tjiRLcEYf8jaCZPVKPfspispcW6KvXH1fJShSAKLquj5gpfyEpf",
  "key45": "3NjYjJk3t3cURyDW8tLMQBBvnZqf1QMj7qz1uRLz6Cgn1JJQRwvKSD8g5jM8cBjGDyTDFjgjGZWSqaiPcbwnG4xj"
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
