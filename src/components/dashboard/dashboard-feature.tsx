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
    "4SQDe8rn98pJhkJFss6U52kTurcPNgoND9Bb1eDKfK1HyNby2f9o3TviFpVcBTYgxEC7YHAYqC5zFjhw4D9TL75k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VX832Tck3QMgRuhwrSCs2ykJ7YrrCuibB8cmT5sWurvzHampyLzHKP78WTM7m2yQ2rDgsAURWLRsSP45rERgS7",
  "key1": "r2j4JxoZyhufxz8GaBTraYkKZ72E838QiWiYB6EWpgxmfehobXTFJGZ4tkkb3q7B29eBUFL5cqbVn3QNm5megwU",
  "key2": "22ZfU811S1EqmrK6xcJGMnhZh7Thp645bSp9J5NDiJaCBPWsFvj828rACnsnL3kgwwFBaTSHJkBJSdTxZz1emmmn",
  "key3": "5W294rDQ99TTFL2dqc3vpSqn5czH5xH7yFUDa9cGnbiPzSiBRrTAyL69ZEzjKZe3Jz5EjheTNuQCb9uBb4fLWwwY",
  "key4": "4LjvPm4XcvrPLZxByXb35K4JnczPxvsfoAdDYof4E2jdaFAuEnPB488TJqTSRxLiuz6pbnF5RmJTqhfZshGj4DWw",
  "key5": "5wtGbDo6TJsX7XJ7er1kmfTar2yT2y3k2vtAgxLuiVQ8r8XY43hTjjXp9dsGnwj5NRgB4b5yvmRyVCrG2daux44L",
  "key6": "4WQEURTBMDscBKZsL29oEatPuBBasLpriBdxeUjFvCMbfU65oSbk5MxCNd4bbyHkjcVDygnYvdKRehodThpMgHGy",
  "key7": "3rNyHAJTnV3CmutoLwbtdp7xcBBpcFJMfYnjf9XYM9bSjbmN9Rgu7wK1FapBmtLykMYXV51rMmjRVPmA7h5WqRhD",
  "key8": "2nfpHVMNVQpM935fFrc6tvXG2Ww4TrZvbXiGGBLMLV5H1XZa46CZysXaLwqNBEHaQXjFKSpof1C52684yPFPLsq2",
  "key9": "3ZJwzzTjhSD2zo8g42rEt6Bgdu8RsXwoMz8bJb1RehKrxyVPgzm3FkvnJiHmtp6yL6f6yM2bqDLmUqShvbR13XfL",
  "key10": "5Ek9ZGD7cTNYFuL26ER9mPmnLAeGDVveUjfNZZHBMnG4prjw8TvRhKE8n1TR9wp5TzQSToLMQPAKN5X7qFNDcUyT",
  "key11": "2vTyJTJ9KTZy7VdFq53FrpkLJRsiwDKEqwdaedQVoPGxyd3p2MNhGuM3jrsm9X5CJoz2YYV1Jgwm3LKgeJxqr5db",
  "key12": "2PYnsg1KEw1FQsdYRKis1NKLjoHjgwhSwfjVoH4oDHpuzkCvzv6VvSGtJYbDhPdgY2fbxRYFsBmTPNehRPGy7gtc",
  "key13": "2jYJ4MoQ1bApzUYpsAQ6NpW4XiM17FwaGTgVNPUTyuJFyRCa2f6DcVdYG8s5t3t7Nkm9CZwsFvZF2qDA51bU1CqG",
  "key14": "2nuJqtyzn2vQL7JXcR87WDiGJG3danW3WjdxUaxBYbSw8CqNdNYiZbDkvV7gt6VdtTiz6shFcqvvTvCpF4SfZ2LV",
  "key15": "2PgqKJTwT6ytCrv1Yipzx6CpqQe1jbqFUspUwgTPqc1Mnde9EXYDy7a9ymAMAdVXevYn6RgfncnX9MEtcsg9fHVM",
  "key16": "5HPkwBh2uawMPM1QrRT3avJ2jC3dDCV7LB9W1oGoQJKRvPyp22TbEcKfYCdu64sEx8X59CJN98DA3Wf7n1e6MoxX",
  "key17": "2RMTDgbmRDtZ9umDC8obNAD8dBeMDJ4Csv4VXb3HiRNBRTku83YhcVVryJXxznSWmq3zWZQoDhhQ1qrKjSRkFzU6",
  "key18": "4EH6qwVsanJJGH5MXYXgqBtqQyj35yzonUwzDWGn3SxTRJJB5whFwV3Macaa9P9EX5V6rfpvD4oiVM5XnMHVGWui",
  "key19": "67GnjK4sq1dQwynSjXQUhJ7c19NNnfnMwLidWJLxxinbYhcvvxusz2wABsikTk71DnbhEKVecamPTTahkBdQ65sj",
  "key20": "2WybbUD1jiGWMJaTjrUKF1zmM4smvAP3m96Kc8ERi2Gk1AE92hSAVA6iGR66yrWzKRkzjW8yPeMuHb3PcKWyuGRk",
  "key21": "2SGvh1x1EbDokpTRpDnrMc1h9SVzwty7AEtbtrh5isZDJwajcSvGA8kNmN67P4BWN3Y13gxMkQEUjixz2iPXEegf",
  "key22": "3fG88mayNxLXcy8mKSwA1m3y8YkrxWEGqZz3gQNMFkAooHkk8jZ3ud5HR4CkWCuCnwQT8vJTo8mbPdcfV3zY8PRi",
  "key23": "y9oN2nqN6zWrB39sjYkWmPwWh3NNpXx4smTwk1yq4wvzqkkzrC7Gac322grad57bHKUCYLSp1V4nr8sz92Zy2hm",
  "key24": "jD6UJdahFRar3szmRu81kPQQhSuUfasPogVX6zqQaEGrfUJDA9jeDCtaekrV1Ee9Tpghg9a82esq4SyoTzcLSST",
  "key25": "2w2mX542wjabtud3MPDSWVGchssvE9ruxrVeCXxQt7poZgb6HWFrd5V5LLZbq4id9fbshuKKZM6nC2dMbPGhgHCN",
  "key26": "4rHdXfrpzjt8VSft8Po8QM2BHpLMizHHEWY7tXGXeC8qJ1eFvHFpZaaM836qR59KrfDdisYFe6UVFdzQ4UoB8o3S",
  "key27": "SwcJBXJP7ENHpbghSYWtrsiW6ycPeR5yBuFJsGgNPJoABWRDrC6UbctEpDgtzz1ZkdMpBmtdiTMiLuR4fEmw3Vx",
  "key28": "2vorkBaok1vPk1HawFjXD4KGN7QxFHdnPaHVjLXikscE3HVW183hQf2gJ1FNTZmeoSQP5GqPKpQVYLBSHD8oLHEM",
  "key29": "5EUN2WcLiuLHW1EADYL4944fBfdE8KoKWGnXEFs7a7o3mZpDn7EE8F9SSBqAeG2SqjxEcV7maxxKypgFG42Zazk3",
  "key30": "3LaWgbVoWR46JVbgVPH1MwvVAKXreESppDq6i4TwZEg2jVs3bqEJNShqyBh2rrkhr8XrXxBcC1SiTjYC2kyxuoqa",
  "key31": "12d5JJqwjvnAryR3ELVtyMd5HbA5PJFeVwXQkdNRmZVVD7x8ak4kxLcTu1zFFoaAR4BAbqwCgGAAvfciMYvR4qz"
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
