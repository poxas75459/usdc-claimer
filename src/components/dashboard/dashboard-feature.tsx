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
    "5xXqxWY1MVrQtiLiJ2DV9LVvaPsPGUndhycoE4NRqQM39dzSRzMGCWnTkpWzAvRpQB12ohAVoRCexXrUSwoMUrzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zr7E3ARGww7fEG2RVvaXksnDv7maLoT3S3ygnsSK5X2Cf4yhcyBzkMhkjjyu8LKJ1oHXGgaKCkmvGDFttufwvHp",
  "key1": "3s1FqEFcfLVQA3oCZEvHtbCDYUP3ox9Qzb73xJ9mVGNcfh4LApzUGpXC9pBg4fszrwXPB89feXYpQA6pzt716WUu",
  "key2": "5bsxSJkZoWkmqeqtvBp8VDeJCp7xLxkYUjPPmKqLmg592tzLzFRm1fqxq13Wt9Ay1QPPp8pumaSiCsSzMXph5hbd",
  "key3": "2usoYhLMLCTZW5MWVKS91TvVPhEoX99UnGSkU8jCvNnCjyH5MEospmJn4z2uxqEUZhytGTg4asZPQXh3iJyYgEZR",
  "key4": "2e1YH38yyrAF1TS1UWh6A2SndQdn27LQioWUuSDPmxGxAJPK6Y5JRiyws15CGiGTWpKgZTr9hR6nyrDtCTbMLzq6",
  "key5": "5BYeEzFKWrnZcCBhadL8q1hCRuHDgLGMzBzu814h9ZGdpuYaQhwXfjKsp1WhtAoh2YNCKV1CGufG8oKFCMoNMUQd",
  "key6": "4x39tyUiT8TzaqTzngTx2d2iHqysGcDhuwphwr4PZL465LqWmqrXU5WQgKYwuEtngdCeC5W92ps5jM8dC2ZdH6E3",
  "key7": "2AiMtQNq1fqrq2vmyDFjeFbeMuvxXZjRSJ3SWKVcMHRfuQpbNb8EoMxzQywicpvn7EXJDNXh7MSWzC1enU6uYtKG",
  "key8": "3fLpipw55kAGkyc7p7Wzpv4hDydh8ZimSDSxLFNPQu7fpvrQCmgDtjEY97PNzagExmf6j7jxYr8XUDse3zZCmkCv",
  "key9": "3AVPW1SyPXRy39tAnbxnG3ZFMvAECmfy3KxbvAZUTSfxtzv35nG6fR3GiRe3dDuzQggMAX9uGuXVKhovj1ojwjRH",
  "key10": "3EE3wQTqTt6JdK7XC37wTS5Ykb1VWe1yeH3prWfytCtvLovobC6khH7yFdFKu9oWgYF7m3dZ4URtimU3yoyHruqC",
  "key11": "gfkPXBrWbR6DtAS9cv1TKULREcebokP61ooYkHxNvPMAvuRH8HSLpzWzv49ehXNnAqrNX54U7qh4jcxWKm8NhyY",
  "key12": "3GuZyWXvumWmx9os5aXSsoqT94mrNW7ErJuwBszyR3qaTS1z9r3UfBwTvoFE39mKQ3Zw1mbKvdC78pSUdSouMutc",
  "key13": "4KTTuEbgqvmASu7yaaZhmh93WqtBzxoVoqgtjKLH6KUnmwCQZ7nd8pnankdvnN84eFaCE2gw6xutsdCfzoQhpUd6",
  "key14": "262Jfi1QfcikP5mXcPpnms5adLEdWD4D44SJQQTYAYSa3nUW589ctHTf1zcmCmKVPcdtZkrk8EMyMnTr4LkeRgyp",
  "key15": "25PhHx4JzWtNBsqZmVJfGKAHG9GwQiWmSUgCHT6bMtnjcAQ5ndqjQ4LDMmhTmqhvWxwXAJ7uLL9SbDW5oghzFcK2",
  "key16": "3WEtZZ8hAc8DfEiAGGGwKYK8uahqqr8u757trXtv8hLWTDFn4q2d7LHEVfmgiveUhv1BjNKqt3GQjYYhBmkM57QN",
  "key17": "4nAoHtsmx5D9pwWZHN51QgrzX4GeQkZd1zxKnbL3NLor1nXxn4Eh1V18HxRwpK61PPVdGRam5iBUQQGTFvNuUyrY",
  "key18": "5cq6G5PNNj6gwrgDXRtNvit6F3Mi2WdVZozbahVtJLJKgjwirjaPnYN5M8amxSMxFv3hqRLTbpsGetSa3vgkJTZ9",
  "key19": "3oK8bJs9MTD2epRvBgrgBjb3VKcjnLXTijPkP21c9s1LexMuddVokTC6fZpeUztbMKgJmMdu2nxth3qaFJkzYL9s",
  "key20": "537FndPUmpYke6qjDKRYzujvUrkZLC61fGu4HQkEyAVF9yPUL8Q2rxG1BcB2utk6SbzkCkVFUBmfnGQnU3w3vPpc",
  "key21": "tcGhTTde4ijUAvX85zZ1rsnuTadHB45Hu19Awxn44CQTCP4eWwLoAMCPPtSrpcuwjM4hoP2uG6ApSb1CVtzbzzn",
  "key22": "uDsp4HN5HUhwiCFXNjwztiAi5KxBEnX518VRdUmnTj8nEj3dCk7ZeBTUzsiz8qqpx1WLcsi9Vt9tgzmLWwrbDrM",
  "key23": "5ySeEBD2UqdjY8TPhD61vQpfJGLCsymfcsxPx33gZFhjxs58jFPsgzo9uzXW6Foy29uSLK4nvzjzuURD1dX5Xb3a",
  "key24": "37adBKixn3K4qNQ7uL2jKxKzUiy6DWFn2A8YEKFgdQYAk9aW6od6aULzSdXE7XdzgsJAwQu2eANWKQzvYFVzRcUz",
  "key25": "3GRFsRJC2SfpsgsxpFzNdxiJH7amZj1ypxaS2VCpyoSFvkH4wH1emHm6uiU4TUNHQoEWbx4HFJNguF11NcdKHisa",
  "key26": "5UjmKHgMRAnWYrEg8jqFZFNLxHAKHJTr51K3b2HfNzScxUkJZmrKMgSpxAZk7tATVG27UUcpJi6mK9WD5U2jUFpJ",
  "key27": "628tnEtceE54sPG3P68DATE5NZGcLQ5nV2yKJaDm49agqDBX6BYBL39muxA5RYTVhACqab6k7SWB6R54Px83EiTB",
  "key28": "3e4kuF98ayQkjUksY2KkrVv6AaSQYitySn5c1rLczt9GNXsgXnSqfpAyjPy5kxaSCMipZyXpHcSwDW5BYtjNFvw7",
  "key29": "3SewtfQNCeEsTnXoiryBSCYsFd35ujQjweiCNzYg9mfHUscZGR7gt8H5qNbc6UEGHFi6wgvTJZuuiNFxav3bqqEV",
  "key30": "3rpyJDdBHBpP6SmhXpfmd18f5JLVmB8sxp2dqTU1G5NX7xKQv3tTC7qRFHa4YixbE9ajnv99yuWHPL7QE11Ctv97",
  "key31": "2eyBgqAWGK4KGhsromDkC8r45sqtVzVcK9BXRw9gPZupFVCEVm3dTSA5k7QgucbsD1AvbZiFhJ3kUbVsV9TyfEyQ",
  "key32": "2k5pddQUKgk7Bt9M66AWJ8zeHpacoCDisnwZau9bDC4KsGSw6eKerixxveXdG7QZnkvHB1qS6jRxBkZJUDk9ydLq",
  "key33": "2YF1NSLEjczvEwrF4Lc5A23QUHKovwyGQpMxtVw6KnAGLSHmQHYMbEzMvALqdqxFn7i24VpTjry7mFkCyrKRi8NR",
  "key34": "4fvhFyjPAqbdtTUvoNeTvyEdmon31BS98Mh9xswvijmASKHRGF48FbU6UbdRrnP4TmV2NZVwY6zSjPcer7RFaNKy",
  "key35": "4VnQcHsc3vFvLemT7vvBEPCMJ9cUkzVTQE6drDSmWJKAUxJTTgeQbBpj4GBJXvfKVreutwqJC1qp8gc72Rgwo7YL",
  "key36": "2gqjHtVqRrWRsqwH4UYLRcZabn52DVgvk7KK4Lnpyafh1JvvMSAhyu68Aak5T5VV8Ar11Gq9xJSCREPgH1i6edgg",
  "key37": "4nDzByBYNeNdEkM4UqBcvPTHkT9RzYjpbsYxskVR2zCTN3TLjZTm6p9uiuExpPe9MzfatPvMRWx7VAuYzfpg5HtL",
  "key38": "4GQ6vu1uzUMY6ABSEzBLkKNBb4UBW6pYGgb9q27YUxQwjZrt3RAc3QQRKGXvQQyic1qswpqEQd4nwfY81i9kGRQ",
  "key39": "tFYVpGrfxKAx64up6tE2Vjx7QUHa3YAEVVhfLGiD6dwyWoMj7BzPJfkvh72ctwN8vBNkS5joUn367RGvLoMaiU3",
  "key40": "29kj6tsShkY8jMHRS2dgxEEftQQMGV262Z7HBZhQRwyFduNBag3b8Su4QaDPwnxywEqEdoJu3MZRgFnK17W3YeGg"
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
