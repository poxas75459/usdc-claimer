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
    "kM2jYu6x7MG4wUxKjsG2qc7hd6kxcKiQizVbNk2JmJNZJicGdTDQyo2YYrkjzrfdvyLYqj97P9Sbv3FbJMKEQYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597LPVXxA5RsyKpbvHjsrsat8kR9TnRskYCqmhsNWEn9sxZQ2Ep1kCpN6wWAzkgwCcwVZmySBgPzMi2utTZ8aaXp",
  "key1": "2E6smVxnBV5YA7EJ6zyCCZmvPvrPbZGqyMjJd7kcgfnS4muHAcGASxjUwc6TG17xqmciT3bLYA1F9UhVgqHb6SWJ",
  "key2": "4pgyt9oqXgEcsDcbdbkW2s8ZxJiDahV5CN7APjeZZvQJH5L1fUMPbNWETs5mh9RVtQrsTiksUoVGrr5Azc7dHBhj",
  "key3": "3o6BCyYQZH8nca4ZdKBAH5BaxEYaf9bZtQ24TA86wsVQ3iBe1cgJfFfCrzLFXrXMbULc7n7c4Dm7BXfaif5o1CUL",
  "key4": "4TX8q9cuWsBfHLzFfvov4E5dP33GJeUNUKsCF84x9MNVhLh88FpNqvb1n3YVmJXZyckzimgsMgqoRFBYhpwBzc2G",
  "key5": "3iKMP5DPGmabxiRZ41J86DUDPy2hCjK38V7FsxGskGNfPhabGAzmxrxFBPh3Q7RLkEaFTQ6qe2C69ji6CQwxQw5",
  "key6": "4yTBGquEwPEpQX8UvTnzm6rTmg3fHx7KxKLHnXHBk5WhHMmiARfFB4EB3WNsqhkzUepR33r5i9jh9SNnDrjPwpsn",
  "key7": "57J22H3NdB5Z9Dzgn6kS3cdLbMTY3dy8Mj1q1LStbWASNwUT4ZxhoKCRUgx5xxpfpxe7RLEzEjg5urGvDRkZBapg",
  "key8": "5rSGXfPfJqFdo6jNF9jypix2H3ihkWhmCHszX52YLns8EifA2bzqxg61FxpteZni73UzRvCz6hneeAcLqgDxctU2",
  "key9": "56MZ1yyVeDLtb2padVSTx6XTapAWao71fPNa2PwcZKExpwBXnAC2rRu77FwzTUwyHF1UasxAkvhFGQxhFGrgSLED",
  "key10": "4dFP7STCXpbWdwippaVfm4hcmzCCijonBehZqmrSipBYCVZJBSU2vrUDKFCd7HYiWRcKxW9v9c5WqLNAKF2Yg1L2",
  "key11": "QvdK46vTrCCH4656aQyP1oCid2aev84QJGfm8TwNyULqQc9g9EgNJcWgGNWPi92BfgSG8gUh5yx28mb6yz5Gyvq",
  "key12": "4sNwwTbeh5noNVYPrsATPJxifePbarxXToX6cfrKuvvKyWFHBx9j8BgFwUR5tyAqTYPwXK5UQxnkgagc13eZPcJ8",
  "key13": "4y46n6mQxkZY6YEmLGdJDVneFWXnUXgZpTM9bqNYQQeL5TtHNjUNoZmpbxR4uDj4CVZ9h9zpAYhZ73TE5FNo1Bvq",
  "key14": "65rnfHLYrncg7YmPCFYBMm9VNTdyFqXfsntSxrRZp3ZWmapY6cVXo7WNPrjdYtCytwxHrpkhXFX2JFwxe8qwruHw",
  "key15": "31Z9g159HDMXmqQLJStgrULcUuNRgGtQuhjH4mYezfYuZVevJEPJWyXNK1RG3WSeZnXzuMyUnxAUtd3knSxWuYFh",
  "key16": "4m23gr6aYb8Lc9TQwxkzPNqmkFAPR32bi1DFkpyx5VauKGXezt4pHdB5FThKKHGoXkTh2qSHr1fZyGEs1aeJ1oMF",
  "key17": "539LUXbdfdrUuvSMvRmhZjT81CfDaDjYHhhVBinUnj383peaBkN5MyXit7myTm2kPutMAq6AsxPE1UBPaJmKSStE",
  "key18": "3WhNkkbVdreF7YZvcgHxUyuWQfo8U1WixPYwKY48m1xLyLA28pDWinpdSgsC8utN7NXhbigccoRXq8BBx4MK3zPT",
  "key19": "3yjZj7oqJ7D1cukcD42GTfJBBYYudZJuMoRaHuHCd6CPhtoGiMFmvSdyx79LCuQwNMCSwQHSUUwAXRmAZDGCW4uu",
  "key20": "62NesYyQQ3xSrbmc4hM6pyDLMHAfBnvKihSWJZKGTPiiRQirLfxyNas2PLxLiAw2pyEWaXDGFzsvWHj5YeP2KnTf",
  "key21": "61hBQrpTfCxQebdnz8tUJZanmJjpmojcNLAH4uWMyJ4ZAST5NwncSGUxs11TfehrmrP9c4psxNnEiLrgXzH5YXr3",
  "key22": "VPcRiL74H6YrR2YgoJajzsM7PyQtdRZa5QZnv64aKsZeuE3fh9T1Cd9kmE9rEwwLwkhhdJFjNfbRtWoR8sx8Kia",
  "key23": "5KNUmKUUNiYFjbK87MvowRGxbEQN5uPuYXPvCp2v8ZH9GKGVnzpyxcdvL6DdLjzKk4nxRJgZjbwNfndkHB5jGFjC",
  "key24": "46NbCzEACNMKFY7LGpbHPkWLRNDvWFxmNUmjM3GrshoXqDq1GrLa9iAg68WEDZGMhQ5QtMsbpCKTU2UvCWd5UszT",
  "key25": "VPyM8HGHRvhyG6dEapaLgv3oQx8dFvqGwHKZX51kFUV2K7AkosRkdXrStPm6uoirjng3R9qRpP9nRRGR351SepZ",
  "key26": "qjp2KSj7uJRmf4NLUaoQiCvpMt1n85E2n59L7EnBDiWC8pBjnhJi4e22q3XD5eFXMK3Dm1EdVeDRxLDS8ZkLSfP",
  "key27": "jLqxPSbDprAecj39oTJ4dMEvN3KFjGrLbVRq7VafE3JXrDZ741NDYomRbu32w8yE4ao7NC2K1QtjCUMK9iJYjt3",
  "key28": "2J5T5hZNfRyp6YmbAAZm5wVVDpoiDsUXuqP6UAiYz65pCvYhhDa5oV2HR8vJRZnwnYumAy5FkUTCwj7VKMLYXGk8",
  "key29": "4hpbPYyVaG7jHeMssYoyMqhTPbvcYyZztQ5tWacxAzA9o9K8QYqNDg8PMaCrbLTbPdF75yLYDZoNM5qiSAdfmVAr",
  "key30": "4ZBQcVX1ofM4V63t9Y2Ek3W3QFaQmSc3ufeKbjemK3ujiEYobVcasPuLz8N7hCKyMC1AL6qmLctm2At8VXHTfE2g",
  "key31": "67ZFDjahVh92LrCMPvPCGP8zwenR6xxv4sceC74uhFt8LRBSwj3dQBbpj74C3ij4jpLKVDmopHCAi29rwiYaKPbG",
  "key32": "3tnUUi5j5K4wMLsmTdk4dkFmj5JBnZgBSmLMdSpkYeWZmv1EQVdZGgb2Y5ukAbeJuhJHhBWGRwUYA6MeUFSdGCNo",
  "key33": "3KZVPfmJ3ePuH2SKcrYRUPkmNW1t2i1f2RSbhmcJEnDwV97bt8LN7v97GV8ahmgX2mofGdtY4nQap6RNVFrntcZa",
  "key34": "2xARLx2B2Ki2eeFjPzUSVhhZnf1M5hQrMoCiNJ4PA135eF8mAXMxA4oASXjgBNdGtFWTyfcsRJQoJb8PH25Wtqgp",
  "key35": "4qftpvw2U9ERRC572LjaqsZXeUsd3jarw51oT4Tf4s1h1s4tGrkdVMDfjcbTLww6BSSu7BZ2Cy157W96QCM6Z4oc",
  "key36": "3qXTQVxsrF6GjMFSVZr4zqWiDKNjq5EzxRG1pp5P2tj6s56mBm1v3WWAgxq83YWVncsoofwdW5rpRgRAr4RdnaFV",
  "key37": "yrRoDhN3CjHupJF3NR6xQZsN1msf2RwfswzkXJo8ZRVetDzJekAGTCYtjBbn55iJnich1uS48RkhDxXPKGA8MAd",
  "key38": "58e95VbwDzAvmx3EKL7Wr1DeULNREfA26hvDCtN5YjDmEZHqaktvemwkmAKAGZFUhBYCAC3MJgQRurhJU4pjd1wd",
  "key39": "3QSDtLiGBn3CPjZ9ndySLgquqj3MqVRdDryhV4MLGMrA9HcTeokVb1qtMUNNvANWq5fQMNscGmHefWtCJeLey3oz",
  "key40": "4jQPwkdrmMAnwh9DBocX3LLzj27N9pzhTAmrydiShanN4MC6PdY8WeUtZCDumLQm1RfqNpcfruPRpuJaqqgzWDoA",
  "key41": "4eNoDLLaRxRDVzZqV3k89rFqtT2J1FDLhXZsSSKdamhpU3s2FBYoEiYp7gZrRfy9oyNaeuUhFFQAFntEvpZPx3B5",
  "key42": "54xAVeHSDEsvxVy8wuX3rC9Sc7EkvTuXfYtb2njy6NAavmDdX1RpPMPSm7T1GRLBhBVAJ8HF6MQPhSwNAdxsfX31",
  "key43": "hQQiSUGRr8u7JwMmGRAJKoSKxT92zQfCJpDb8BRf4FZA8ZpRPkUw6en72nc3wuoFzpa9PoAswe6JU9cAoWsXCn5",
  "key44": "674fWqa81au1zBCDDU9dt9y5tFs4ZY536Aa7wgADkaCRxC4HX65pVBJLYbyYoT2XmYQsz3bFvUL94RQtKTEAiAtS"
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
