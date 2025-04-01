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
    "3FN9b3EQn6vjqncooDRT2hLKa2GJvpffukmGsmjrmYsNzmJLiMgUPD9WxjHqgFEduXZCoFPFczaqNfGsTaQT18Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjHx9vMKJVDgo4y6c4ZzBB6yAPygB2qByttYyA8VvDHFg3zYWpeXbCqhE2LxFpw5EbM6cYpCWsg6xnEn7ckaTsU",
  "key1": "3V9CGRqUkVp7mhHzHPTUWooUWgcKYQGRaLbK329EuviStbBfZkGeuUhzFExfgiYG2sQrtabrZYFyKMG8QXdjdsVk",
  "key2": "3Asr9LZ914yBXMu2SPapTfCpTy8VPMajvJ3NHTEaJhUNck6JyX1PPGagR3Sveu77tSF2og65Qs6BrQSWNXx7E8Qu",
  "key3": "2zZHrregsrgkn31HHzkL2noTU3FxW8hG72JBjPEghA2sDX5d5EfdXLEGs8W7WE56up758ZLu4eZHXRNrBb5LxzjN",
  "key4": "USoJjJ2SJsRNEuPEyUYogerfbsBUbAEXcMkLjNTqiGLdQ5BYeAQtrNDBLvU49wx7TuuZCo4wozhxV888cDfN5hH",
  "key5": "63yzQJfjDG4KdJHqauLf7uSNYS91aRmK7JdqZbXEXA9JZYP6RzLPzF5C6258yuuRWP3fdNzdvCP9gh75kuPZy1nr",
  "key6": "4EH1XG3Jn9dJx3SV3FY8wAvSF4cscSaZZR91icuVdFrhegbRa5CV2YSAxTQ2Nw4irubsBfqWdyQ7QCAkxocVJXqx",
  "key7": "BepNxF7Zj2D8rJkDq3zSZND2DRf3WKt6EoiBJFvARFmbDZWr4Rm5SABGHwErCTkVD5gRtWiyzaEejfy3CWiJ7sF",
  "key8": "2cdXMSJ737kAc7fQ1HYG2NtiLX51SEpQbbqKfmhwNKNrZjFaW62KebK7HGnYcxaHHYZaBmpc4u1pgx6X8vBoNwRQ",
  "key9": "2HWV9hDEXU4MfTNTkFCNLdUPp2KEMKEMCgtPqAuUgy15aciwn7XX12Fq3p94rDRU9HbahjwnTFbcoHvRP1Rit9tN",
  "key10": "4War957W8rDXvCQx9qE4no4CKt49ZYoqCMqfxZk9xoY4EnL9jrviViJSRTcd6d6jYY27dxgSac6sq4SZrZ1dSkoU",
  "key11": "66RrKa8cbJpFyaY9hidjBVW64F7v2t71b8vpH5VEKGmmuCwuDPXszxDqHe44MzfMJPhGiDBAmuDuGDGjSMYiMQqC",
  "key12": "21i8KvenAXFtNpbJZnr9k2V328yJ8XXTRQkZt7JSsnC5L4jKv6nnYZEU1tQzYeyAvPinhCRxd2sT2jRACQPxHWH1",
  "key13": "62AsFagkWEX41tEn4Gu5x82sf7xKXPsRRjKPPWc4vFojX9m9Snppad9nVUXcniEDUUUJ94oZQtDY4TSCvQ6meiuk",
  "key14": "iWYeqVnMGGeioUcU7EitahwxTH9VMLhW7LEBWQ5NP9A2b3ubfQyeJR5g9Q992oWsP62U69EqsCusZ72nyKyNrTQ",
  "key15": "2595VafSHCDBQPgjxw42PdwdZvpLvefq391AQkeUMrMvngVyg8jCX7NBgnkT7sn5rKFrp9mDCXNkP2wdySeibv41",
  "key16": "5gPQ2EyvTDCqno5FTK6gYHu5twnTNRaS21saQcbcUC6t6Xw5jLJ7ck1qLVG7yXgJUCn9zhSzQFyTKtCLwmmrJzzz",
  "key17": "1a1FtZ4CqKhB7tGoHZQcLhwLMxhXxTdb1E5Zkpg4RAvg2NqUkLWqDNTKZbmnuzFuCer2GvRqeUmNoVR1qwECD9B",
  "key18": "2fNXDd1zEXcPuSfmvCzixeDMzSR3uFw2eTKS3C83iHFNNrENKd3UBn2oYcmWqSwR82vncDq4kQjdQZwS2qhrZFV5",
  "key19": "2do9TqLmBovZMGMvzR4SpS15Yaez1BHVskMS5T74BAA2naityKrRMyepKzKsEdAW8ze2MfuN5Mu5ZUKGgRqz8ST7",
  "key20": "4Hg6WR5sb1uvAmrZpmED8mfA4AumJLoWRHudxA8SCC4PuK5jKkRYzQt2a2S481cXQd1EVJq3YmF3j1zSQ6fVWjok",
  "key21": "QLpN3PR4WU6WYtoQfhtVqjTBrGfipRVcbo6MEeRrL6cGWjqrcxqeY82Xc7qYHBmBSWMnPN4jCugLuUc62iwpaBK",
  "key22": "39YMpAmd7jv2bcEPLM6d64Wxkz5n5pN9XnF29zjaFNwmpBFQNiYM15zytmWrxEKZWxtDDwpi2Xns47y3QYXVJAi1",
  "key23": "2rKxRQfGBDNpbFVTHpVCUNE6YT3e7VSymrcpGhbMJgH3rTwaW739fkq1QevMvpuyo1eXRaj5Y733J9FPMLd4pFw5",
  "key24": "3En2dmFQynd6vRyw9L5kbNGbF3MpbS6XHQzeMoYWSQcw3SMispGAKJ1h1Ti9gZHZbd2RUkffjQXKhWtfA69WC19Z",
  "key25": "2kiZdzEuWQfc4KGcfLdYoE1XswfSRKHG8r5hLcUTymKquYUpGRPtUBUBgsBY1x9hC658bfpNh4Q1YD5NChtsfdnn",
  "key26": "5W7xVkEYUsevBo7hM8ZoWaTFVq8AKzHr56RtHCfjsX26noeneQkSorj14EDFyuDRxduUm1sZ6iMHdKBNPQSQgRAs",
  "key27": "3D835uGZWYpiJ3pN3hT1KnSABDDGsMLYt5EZyUr9nezgHLvm7oWZ3cUUmzV7DQLshKiLC15ETsiXJsG6au71VQxn",
  "key28": "3EGnCoY5DRkPpCLMxstNFoaNtxwa2pjG23RqyUPvc3yuNZ3Feu78U2SoC3wTLqy5roKjYosi6jgf5r7rPASN4SZU",
  "key29": "o8yy97jsn7ujzjitTYuauX7qx7cBZiKXUvmxpd5Qhrm2Vujfj5K9TNgmDz7igzpdsZyd2DuNe1wi2aQHjoE5AyZ"
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
