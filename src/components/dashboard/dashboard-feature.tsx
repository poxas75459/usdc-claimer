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
    "H8tyC1cCVUeGQ9h3pMYy6kme4ZySXRJJTU42BHTuYyRVkZwm4VKEd7hYtzUad6J523VXSVQ8ertkhJetBqYGRuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqDwoDxkWbCVC5wKmgB3WrCSubc2zbPecX2gYaqa5R91uDJ1V1GpBoeLKTatx4texfkkswfQXZYkPzzDVYZUibQ",
  "key1": "2GtM19GudpGUvV9NUBGnD9WBGRPq8JZWsA2ZqC26tM44Md6eQV2oiiPUghyAcMNSHAFZ6EyM18UCaMFvSQmuoUq3",
  "key2": "qPMiB8rZDfdvStFZ4R6zeij9EHUHPzaWX3zKDhDvt7mzsWj9axJwNj8CpQcoet45wrvewqFTFrvftGgJKPWV8bz",
  "key3": "4xfL4Yav2pZP5SEfyRX2VfV6DariSSzFxNS9EDBq9YSNnwcP3yqmVvrwnHzi71Umizh5B9GDVcRbmoEEmcyfbKAi",
  "key4": "pEc7MnFZuhB3mynRXyiCpNPkTtkaEkvyW9bAA1tFQqTMQVat53w6kbqtu8P42azs7GanXqLgfUk3FYgByPAcuKN",
  "key5": "4b8oqCMmVfNcmijKKbRofQXvmnqJJdnr2W1AWNF4BvH6CGvNUCsHa2iigWhMtVj4YLfWwtzGCweC7gDRbPgomoyi",
  "key6": "48pWJLAAzC4NjKYZ3ev1stum741qfk57pxmg2vm5tDWaGMg1h9SSVvoj9pU4i4ksqGBCfXqEfjTnEG7kPuDGf2aC",
  "key7": "TCRC3Z2iJRQd4iE3Y1LWP7rBCYUa2PhfbpCjdpYy3xWTsDa8Xhyrtj55YMWosBP6bm6z8YoDVzxmfcfbGGYRWty",
  "key8": "5j8KCVn5zkFxZvxsEgmHKFMRUpoSTLyc7TEySfGePbQEsujSueKFzEGjGSynE64o4WCMcJYPhb1yV9BD3srNbca5",
  "key9": "jVD2soW78pFU3pkvLRomzD2mMkyESjP4Tc7sfyUY8Sru6CXfmMLtB7YQ1kwGfM4Z1p4dMEcXbxaGnrs21T1vFyo",
  "key10": "3rZXWn65fPbKAzT54XfSBdG9ALksfJupd4kZzs63eJ99dSM8UJ2aCFhKhTWLBxR2ayndpKr9Bkgn5uN4NCQgPTLD",
  "key11": "456KCaEKPQ2kExzG21rgymnp5EAdDX9HJMcjjngXvtN9wJKxjN5EnVYdiwxBReYtmVQttWabc2jJeRLRsq67gkrs",
  "key12": "5jpKPT9TxATfALWXNY58t2ZPJS17w9vuCNUvhP4PNw6dvkRUZGebojmBCAKnNRkXobktWMXso4ZZEpiiZTLBQ2jn",
  "key13": "55Jq45ardNNzAEkwtLFpfkx2Yv1sTNzZB6cLPRs9oYCFwSmxCvCC6pRXAWjRH3STtQTZnfTioyytMRrbQUc87Na6",
  "key14": "YtMjjNfrTn3accziCbGb28nZNRt4hu9gBQ9gLyWvWgpHCvn3LeAbbcqh7LEUZZEYv7gLgXUjfoHW6HLYjgHst7d",
  "key15": "TyY6z5Gae7UCnjYc9DiH6y2orAYNKgwcxQeLbabdj4AUrXJtjiicfCTES3N5efnVRyAuuh8MpimgFb4fsrYJyEk",
  "key16": "gmdcH4G3QgB1x2KCi1XyBEftDAYfmnSrjy2k6uWat978pFvqoS4doUZ7kBcZBwscZCTc9k62R6aAmXjA7cERs3R",
  "key17": "5nMdtyaKfToBUoMky9wAe4NkhUpDykAUEcGqCYRTeG2pB7ub4MoZVFSmA3mLHCZH58xLa2NCjjPs5Gk24iE2EhTp",
  "key18": "3QwHHv2V1CMRTREkMEcrHdyGYgeMQcW5xWHxB5yoizXq2rf65jJvW1ZQifXsw3Nh6LGy1JNhdJTBQYfVYpbnRqyj",
  "key19": "2Ltz5Vbn3KppHbGANojFffuj4MHkVed2VjkCcua4iwdAN3Fp8rXT3y3PLPadUH9RhFibmidPLJLJYuKh8bBPrzKf",
  "key20": "4K57NwnX9n8Z4RHsBTsR72Cz25PnxXSCPA7T5QNLPvD7akB9Ly3mgsPLhq1orJUmtoEukFL8kwb35nr4ADySG2Ar",
  "key21": "2jaFqSEHWQ2jb8YDdgL6d5yEjpsQkJQxuFSRG5rsoXxBBnUcYq4bYBYKAme4yGCW2bJaJhLj2nLjeD1N4RmY5UeB",
  "key22": "51ShBHttGFVHGcwT99umJ754TDE5opgZoEDP9vJR6TjZeen4GskZhybv5zGuLbB9JTKS6UsHxJ8Kck2Vh1BC3Zup",
  "key23": "48HitpXAsbPNuQozb2iVsG7y9AaSpZSG8azSXWhug4UhvKaskMVuiL8jEoAGXjEJ1yU1yhAgvTgyDf1Qwq5BCzzs",
  "key24": "whgnWXfosab2KmpwfVJtP72FtSkScsJXEssadoXsykumdHiYunE9ahYM2etjZvnSBhPs3WQe3F6KDtw4cLY3it8",
  "key25": "2hkVmY7u26iu1FxVyVZsR1Y9yAfj1uQJP8kzp2JBiqRPVe8MzNXLSXyzHRpPDL5i3UBFS27uVncC237kdV1kDoDH",
  "key26": "5GUhFffUxkphHFMnC7hanak8YD2uaU1Jp3RLd2iWbFWC2XetFMe3gre4UT7gPqUMSpzE1SXxDAZ2RVQBHsP3Dfjh",
  "key27": "5qJJSzpqGQKRkMgRDYVi3YEcDqCDsqAEWmrVXTFJN1kDMdkq24BRiXMHGeVn8EsukBCYdy1yVQ8rYH4oRPXeiHGj",
  "key28": "3HyfUDUaS7Nz3VPJcL1LyRPBpgECXJkTaUFNzYsnG2kHpSwXVpCKh9JTux4n5faz7WsDcr7Kvt6nrrxPZuRn7kwt",
  "key29": "2DUw7se5hyPrsHVno3HEXGTPvkLVcSBx98KaU8wXZ86HYbgM9H5wy4trWwb8GTYJP4PbpGvS6s1s8QBLCB2JC1Dg",
  "key30": "2yPPtH2wNoNJNWy9KznkNbc263uTX14nQwLmhHpiXLEqWdbHDKF5LDTJCQheNm6y4CUdNdDiQeJWj1Mq2Ctsbm3G",
  "key31": "4hutZhQYLuKWdSUiWFyRD1GRhsZhJ3XdiDB3geSVHULCCkja262PKS9xKe5yp1Fx9BjSycQgiSFKDk1Y2UXsrwkN",
  "key32": "4GU9RYuDjrs2hKFqwRtwMecTjVXWBRMKkJXMFLkHFPNrxvP1KB1xRPiriR9WaP9shDqqWkBAPvZ2agWGFM9rDGxT",
  "key33": "618P8e9upQs84RomFB5fBc4ekXmBqFs8WZFMfkPZ7zzxVEmBa1haJvRPSPnmKW2CFw2hK3bAofi7xjo3RFMCDdx6",
  "key34": "62xFHsZexB5LJfVLVhJMq854i91kwVQrZxXDq5PCpw29YHyMq7pr3XgGqKYJ9c8CuKksTFm4BJtWeTHWmzZmxF6B",
  "key35": "2yz99gNHmcpyPECAx76sozZfB58iwH1y1TGfTN1NCDs18TQqsXaZxXvXLeqbdUTQJEGXr6YYEFWaxhEcoFBFxmxE",
  "key36": "5BcnLjLRoxs5CeKPAEv6YjE7bVgXCn2tidaGiqoNPQh8LzXBRzYn3UrnhNdyxSCZMq1Am6KHHNNVTnaEe8yTipFa",
  "key37": "4LXqrQT3G349Pd79FN5N87iWpQycwTUEzU7hx6jQdMSaLUJW23xjfaL1Qy6K1iF9KYvLzbcxuYv41K9ZQBeyrS8B",
  "key38": "5x2PNMm6arM63tKC6Sqt3SAj9mJFxp7tAodf6j5ZDx3QycbFS23zs86i369JNqDf3JqutpMPqtPXfvrPXyTABwWQ"
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
