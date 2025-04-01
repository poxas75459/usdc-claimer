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
    "NiUv77Ngm7AuopwoFc5XQoU36KNG444Jc8Kyqj9Nswc8t4iKsQeasf7vM2p6FQvypNSGHQrCMRrftvu5F2W4emd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHA4rtipoag6ByuGhXhFZpfpyddUKV5aAiTK6UGF9R4tv7EoN27YRZaE5kTMmaup2zMbPebT9BwjFnZhRm93axh",
  "key1": "5J4Z16DrDpa5dkZRVrJQbDdEFsprs9NJvYuShWXTL4K6nhhy3Cp93gCLro5DMv4F2u9qhef3zUtjacDBeYxQKFKq",
  "key2": "4fggGjSxS6Ub5Y847aaTka49F72XAq11uj3MpJ7WUPUpojaedTmr8FoSVsceJabAgohkZCVCEjQwisezUQc68icp",
  "key3": "5CfMA4vy6cDuJeu9WPeRgLfrDp7R92XRFLbe3fbyvTkXeR9muXvVjfoLqoDV1wiayqCe1C2U19nZGrZSD1f2Bp33",
  "key4": "3Lo9ftBE8zhBooQfJ4T7enaCdVUnZYRQQLYMzB11ft88VgJguWvW9r28g3ipza55DbLDRcev4x8CW9NdYdK5apFt",
  "key5": "5RxJy2hPdxg54VKwPB9eGa4ASgrVGf3i6YddNRckBoCbRLP9X7NQaD9kVNzSfDEaq6wJ2KPnspdX48YTTSmvErCF",
  "key6": "5eKfYCBEQrb65pqi1hW8rFtZcBkwgaL6Q5eXEjRJiYpjRSd3VDjbbwYbrU4rnfeucmJFdkL685Hy2rzEfZRWz9rg",
  "key7": "EgTTsKoCid85FnSMBM86mrYg5KHJnoo6RT3xjN7K1qhEg5PgCdTX9p3A8ZnMjVGM2g9RjacLqfh3eFqfUNnp9Pg",
  "key8": "5tCFPqivZiFqS37GqpUQoXvHGzt2btMRvTwBb1MNAtTW9QkS6br8LU5snABgpa4VLwtoXGdbpwYw5iGPWrvJxbd2",
  "key9": "4GdzusrgM7W4umXUsCR9ELKzHvweDGmpRqECJCPoaHyUd8BrSh61r2fpKQc6sbmZAy38h1TuJu5KCUbrpfMoNoSR",
  "key10": "5g8mfnf8drcKDw6GmHQoHjrXkd1FLB6HASYje2UAc8NLH2BtpxGeFTTYjsndgtAeevgmGArbjEByHRJAZhZgNPtQ",
  "key11": "2uAVR6L8kPTaykGrk3NVdicmS5PB7btRa4kyBWYETmz1taZ63UKXcMrcGcDKtuDZjJw6SuEJEkzurHWKmypVeaEN",
  "key12": "47mF7vQFjnUPqrg4LudXw3sSdHNLt4R9hm6Pj4P28tX2vK3SpY1JvzKey4BFsGCjjKMapBofjkHvbuh5qsFVxwGo",
  "key13": "3D2LGZwbPd9z1AaKZvSMidrUoGNS8dBZgkz2w6ajVB97RBmUtwNWzjX7KxW3PSsLYA3wZSd79roUibq8HWmBNBA1",
  "key14": "3qwDxQSTktLBTd6yThaGrbj3WyWC83PPDJniV4EAEhLjeEaAPRNY6uPkqP9jUvNdvnoTAQ3RRaa5w2aKH7MnxuXm",
  "key15": "oG7rgATSSQjJPwmTJ7Eoj8MJoMsQnccVPTg1mmn9WctA2MwftPNvVm9E7jefUtvwj1QhjxH6HHjUPzrbc4BmAeW",
  "key16": "5Sgq5rtYnx1Xz1hvJ1n57ZXVikJeFUeg2EuCY2tyYuFFrAimpkpr8sxE1BA5ohe4xGrzayhzjhrDwFJv7tsk6sE7",
  "key17": "2CtYoVX4fzc4317bSnDE66xpsTDBsb14TvGHUsnKSzVzRoT1MDZZ7d5XHcukbWhALTJ1DPZrga2UsAA1g9g9ys3h",
  "key18": "5VKmnbmJmKGGVZg9tEyVoSyZxKiq15i7cTAwApQewXb2Hjt72foMtfY8AM9uQNGeft2DSjXiKwUW1P1qQ22aT5p8",
  "key19": "628ThR1Sumh7q2MwmUo1GZYXm4rGZkwqym7K6BTWTStm8sNjjx4vv13BVVieDQ9igmifrYjQhYTJ9GV19ryVmbU2",
  "key20": "5G9etjChXjj2UQkH34Y9vNA5qRiqPV339HCfsqp1Ca7BLvbZ25L5oeByk4y9rAtq5YTDgiNaToTPEVMxjnK72Nyt",
  "key21": "fz6FnApfiUMXNUSLPVu5MU5DQTgFmM58zpwTgMb3pnFJwfzKZTLgtaTgx7ppS5wJXxDAs55DpJePa8nUi2Un3ep",
  "key22": "1t7fSGu7SJuvDAZhnmjdys6r1NLwAe24tRoVvC9ej5SBtbaJkAkQ1gMG8oET3EyqPsPPNAHYRdnhKoxfHqSuVec",
  "key23": "3q7fSkXsqUJHTaJnbKkxwk8x2i8zFg5u4FNHbGYsKhpkZLXLv9A8A7o3N4S9UEZBFq92Bejbd29PaZ6Xa1Nwnhqz",
  "key24": "4Fja4wUEGxtmPumZsr2MYdvR1HzPhsNk2UguFaQi3JyuqAKuu3TLRWrmqhjLfMyWAj1dHfaBhfhLqvcXX6W7ickw",
  "key25": "4mMfbBXrKj747GDPki3zuFebjmDLqNHkc5gKsr4na3SrjPRBeh1vhqPEwt6NrREx38L96mnBd39wg2keZD1ooTYA",
  "key26": "5SvJg4b65sjzMzdr95atDcbVnrXZDJ72sfAYtgypd2SfVHzoMBYthwDfFfPjN6GDsvdvQ2VmwPXfFLwGyxVpTmCk",
  "key27": "4kgRoQ7s1LdS2dXDxpR11J9dRFT4T7xfRXfpP95GpqebFvxs93cSE3igTDtPAL6xXreG7BW1TKB7V7Uh41sDG6rv"
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
