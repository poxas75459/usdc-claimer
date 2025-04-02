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
    "3o3vQD6pZxbLSRSmhCUx3e3mYWSq4ubaT1ocPZXWHVb9ZSvK1VDpzypzTkdwUNDWsVaQZiUmPqkaJfbCNFpc8gWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiuC1jASRLwYW2zRkQ8MoAK5boxSCoH4pMybZ9uAw2fWm1tJL785GnmzRaSXDGDgWRqPahqLRoweqY9jR3ZRs5U",
  "key1": "2aGyXw3FgmF4M4sBWB1FUZiqAEYFUXJ1wwxPVzL7adpJMq3U9HveriJ3K8DX4tG2NhGjDqRttqazLDJnRrwJj6GL",
  "key2": "57GqfAD6aJMsaZfbdZH5zwHmWZx6TtKZSfL42obWQ1BirPqjGqMfp9BXfsxb6Cv8WCo5JDNchFsNQUaaPjY2Mrap",
  "key3": "63xxRKuKfPriDmHVQK2Q8kvCfmcbqpHpgQ66QyXPrpziDecvbowmEqJx1LTNXeThUwBTEDMgkKV2F8tL8tNyXb5u",
  "key4": "2LBVqRXmR33PNeMQSoAmnH3cEuTTH1sQSnmPN7xLYmhmedB1sh2JFucC2T5sNtyx4xeGDkvgVSiAtA2vY4Bj3Dmp",
  "key5": "5wBEq7ZyoaRfJD66xkVhbNmaxA1mnvFPBVj6MVnNZgJjV24xsEtqZJoxT7kDXxE1uKigDC2zWev9xcGp5TsXgBeM",
  "key6": "5uUmEfxiWHpCbxu7bjwfpCo4UGubKGKe7NZSQx7fYxBz3YPo362iyaBqCKsm8GzXmnSRSaFnMqtjwU1PfSXxmJkV",
  "key7": "5ATTsookvGWFmgSjgdrcEGhyAAkMAgHPmZ8L8i5uF9CL1EoGKhKd8kpdpi2rPuaZ3oANYGJM1mWTMPr9dEDyyQnF",
  "key8": "3z5NLkLpFGcv1j4TwTop6TNiVUwJ4t2a4A7Zt4swb9A1BNKQrFW6C8wUiwU6MBQ8zoRuQQEcxJqKhwo4ZqsAeidz",
  "key9": "tkvp8S3cP8mhr164ymFDLiSatXjRoPy9EzWCQLE2GfVKHcDYWtZK3UXXNYUFFShMCCcRFEeLy2XeA32PQFi1pG9",
  "key10": "3rxAn2r3SwCNe2ggcdBErW34GJVoWg193NTJrB1rNFXHopRW1XZPGUFtbP862AJLuyUAibokyhCkP1Jdx1e65cDn",
  "key11": "5oxkgYic4MzRRAQRbxJAj22khjfEQRBgH7quFFSfxKyXrVv1bsySyDbEMrmJF2zVQxrdbfknSsmnjwtGRSWQf5JB",
  "key12": "3kiLyoc7bhbGLZXhbURo9J9kWyecnoyQTCkJaayxQvLddqTvsKunCn51q6HEV4NxExqewK6QdumAx97tcwVRgBeT",
  "key13": "3VghR14mS3rcpoZeBm8wr7qknDwdXMSvzLEFjtZ53JAKYCKUd4HbY6VXR4oqnncqixKnAX6mTfpgQdqKXAhRnMts",
  "key14": "BGu3z4WT8dHRgZUGbdUtDJMmx1oWKPcyk7LavFwvG5PCDNDxM7983EzPUbBi3QbpHqyhgNvuoojp78DUDXoVzqV",
  "key15": "2pPrfpcKbKHGtMWCj9zEquFE8kMVohSQiAVQpxpFNnHqtXB9ksJ5EzW7xi3LBKMYGnorMEJmY99Cg49jHAWoLjR3",
  "key16": "U5FVuzwspHrWt3G3x3co9vjWw52EN57qsnzAfoJ7dTc7Ppv5JquYpWt1Sx8B57ichVHdwzngThwuE6fQp3mLM9j",
  "key17": "2mL8gKxRpMm4QPEA19VDUAMxY5froqumj7xvoGpLwToUmkJULghJZGVCTjRg71sruoT9NFyu3PBHYnYwwikq8onG",
  "key18": "5HGRhuoaa5ctU4TQXB7c9EV3Dqd5eFMqzd7JewTHseLUY3mnUW9zhvGU9J3xjxAomyoQhJMJSEHyVckE9U2R779y",
  "key19": "3SV3khYmT1yfKskVTwvh3mexEQpvfUqn7gVqBouJQurn6hqfZiDknMoXPC8mZ1rrhaTvSQjMLPsqrka8w27K9Et8",
  "key20": "2w3Ycsp8LtxJCSWLo4safRyYT1FzByVfuQEYw8pJFNGMyV8WkvxuPSDZaFGDk4MkMKRUuxaxfWjRtcZ1LTtD85Dc",
  "key21": "32D8QDTLecKY3SmQtmvqq1ZmPDpNtLKpZHWX7BK6zpkhVcsYMjEUCvFZKown9EKTud7BMUZD3WUg2jd8NytpjTX6",
  "key22": "2x8jH22BFmT47hQJCcM7SWLoftAyBPStE3k7vX9Km7JYbYbHtzwA5vf5fknqymsXqBLFqW6uW38qcGkKa3RJeoBp",
  "key23": "5JZ983j5WdXyYvQ5wZiBYG498rFX8UFK39msLdNFjc2JtUhphrMgRUtEMds7rM1efYtKs4LjGAJZXgvfH2Y1U8r7",
  "key24": "4a53R5QuBaJ2dP8mvmVUD1HjdQUq7cYmU26c5XaxQqqEq5aAoysXXRgftPQ4vaxx6K5Fj4rmxSrhsx6RgAHNSFhg",
  "key25": "3LA53FyUDCVFcb1m5fd3KMER91CJQum5hzzAh3yyYn1PtByXNvx5tVmag1W7BBbzT6wZsKsEtiKCyyp27APby344",
  "key26": "2GEWi8maU3fR8kN7dx18Wdjzhk2RvEton6XNkhK6Vb5iNpqWMGjVRYPZbs9ZymzaeoMEwaXawuMCABYLhEjqsdjj",
  "key27": "2C6kDxWyKtEGh8Dmd4Qo3sw6Cai5EuwrUp6gUqNJX8PqoRm7LHbtnqNK5bDXToPy4rtQDsBR1VJtUMwtpnmwvL2E"
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
