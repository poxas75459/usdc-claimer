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
    "aAwiWY6LaeenCSBH2oh1TbBZY7wSH5MBfV5b26eSLYBxovAviuJiJXvQoadttvUwCRAeZpJDy67c8p6Ux5yVmLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmWdqUpe4C2uJy71jPFpVMoHFmyYeHcLZBdPV5DRsFy847FzBNc4rboPsojpEy17KYqeBTudiATrviD3WnSNBDy",
  "key1": "3ybbq1CsXoG8NppCUCVkoXg587tKwS5nxr9FQrkLn7cWHZxsZrHLmhLkK5vnePx3viLUAWnYVhBwEGFpx4BaeZZn",
  "key2": "2LiG79T2FJx6DVKQamFLsfnBTeejwD3rJGdVCzVHPz1HM14xodtEAqeuRwAdVrchStenhWV5bUZCN5jJss48tHEg",
  "key3": "5T9CTydf86pnTQ4ZABYLgyJZ5xRHPvEuA6bE9b2qsB4y7TTnhVow9pSBkQADqXpjyapHqfyFb8BinV5tSY4s8gNX",
  "key4": "2JSNSvPNQ3dxJnaL19t1pp3XXQ9vr5T19H8hZ3agLj3hVPLChX3orasUWdGxwFwat8rNv9DvWjUkAjrrjvRArSm1",
  "key5": "2QZaAgnJNUr1NmTKDwBAjuHFHn6T6F1z43rMBTDTo66w2jdtCc8yrXWZWLadjpGP1pTTspnLfsF7La7xFwKvonV5",
  "key6": "X7B9rCJL4kCPF43ecctuAWBWrRs1dXnAn5s7an8hg3SCcZHVbNaRjJivPGYgLnCysBFWQ62fWq1wfUNVhCp1t5p",
  "key7": "56Lp1RpCDDk3L4RpwoG4TR24Ty5iACf4Jr4UtXdTGnnKnisjHmktWkWD4sixzQ97JnT8jdWLE6wjRL4VD8rNDZHr",
  "key8": "3vovsCt6P1cdGv26LPgqZLko8L5zrBaWv4MtZeoidGdgXeY73CqzGGXwY1ozV6mKRpxPTQHN2XsdUdwz7UieqBjW",
  "key9": "EHdBuxQHmpE4NNMq8ZkvR5LctoqzGhkph2SRSbo6MNY1qB83LShst99mTBQ8tMdDDzJLJVztdHY7nE8j7o5Su5r",
  "key10": "LDkeEL7sDrztWUiJL61EJu6sPe7kBK39VhaYiNYNH6fjAVLSW5eWvVpFLreLLeVt2A54Q25HSmH1VsHQ8yuxtmX",
  "key11": "g5wcasKzKQBYeRqyoxnmhqbuhDea8ZKEYqRkxNB1U2asbcAD7433TeqmTmc3eBTXejxjq3MHbr6oiHqSdSrc3SV",
  "key12": "Crcwd8CzRRvKBtQwqDPwi2qg34ac7FmWYdykUpw8YuH5pj2UvNZ65y5zZLapATgfqq5Kdk2ZGG9xBaeSaoq4tsk",
  "key13": "4qWyYzHA8YjPxZxKGFPVoiX2q3so6m9kEr6BME5mYgJGYGdu19knfmAhNq2cu2hp8p38LA33H7jSEAjm7kSvSwv3",
  "key14": "57f8X96Xi61FbuhRyuaRZvkZPaX2n9qK3S6matRbntKgq5UGrzwbZ8phpJMkAVr3dwPipX6ox4KN3bhgHgLbtKVW",
  "key15": "kiA7fv8uyYgPnJ85tProyCwz3QYxbdqzYTawhbwjaJpvSAw7NvdwFHg7EDFai8jYg1z5CaT8nC29Evqn2hXnE12",
  "key16": "5nJhcpNLCKDw3htXJYCRF5kQ4wKp5hkPZBpkU2PtjpMZCpmtiptWzKTSBVamQRChCGJSGABg4g4JgihoEd9RckeJ",
  "key17": "jLRt8c7R9EeKxafGnmHWvviB428Z1cCAmHWa6aexZ3Yw6uDz6Hv4h4ZdrmrqANQSgdLorgu3wxkwBoPmfBTt5ch",
  "key18": "38TaPdwcFCBNhRWVt1yFKirLQxY6hZnqdDoxT9UiK4ikyGTz83f7sapvdU36CAavwtEsd4DVAE1rGk7Q7cTCNshP",
  "key19": "sH9TZrQyTrW9cSEmju2BtRHfcEgfNJrbjVMeMVqCVftPokoqsTcZ87iJFi9bn6odN1ydipD6iunAS4jjx7T36aF",
  "key20": "5FYxF4TvQmsX99zq37nc24e9U6iMghf4hcdEavBGUNwLVDBi1GqiZjGp1Niy8P4VTc8a5UhZF1REtbCHMymeFRZ2",
  "key21": "4uZVgSsG2EgLy6NMKh7r8FSndNm9NQmgrbkfGA78v9mmTF5enj38uSCv1RjGCwVcz2KxH6tvQ4wPeWyjFSXWoXvK",
  "key22": "2jFpEUEV8NQmojoWkRbzJmPcgREzCsXHgmKjENAdheDbaFjTg9jHZrMYuDqPQ9taCp3kDLNnSyiqARiBunD6gPfe",
  "key23": "64TLJo82MFrzLk8vhrMAPyurThxbEbdAvBLsESjxVWxqdd8Pc5sm7CXPCFh7uhjPeFi7WPFoGA5xxhq4WtHjuLeQ",
  "key24": "4kUUMnjwEj1SMfLawLfTQCQy5kGrtz8J4qzgzbutmbYQV4h4X9QQPwdzcfWexJZRSETSfdByzkgbD5NWVkkAdDCQ",
  "key25": "2k574xPW1ikpWEQUbeaP7cBsMCKNiciqsfT2LctxsBrHsHMH3XPufkUNU6vnEnM4tnNMEc9qdwRnJHuXxhkXCAih",
  "key26": "2X2PCDGhQ6yf6TmcF5EvvsjQxnbYAxCqHL9UB2Kv6sA4gN5KYwkge6FaBCYvu8jhQ19asWoZqLrRGBEp39HbCJUZ",
  "key27": "2dz1RjwVUuun5KhHzxQbZQPoPbMEzKsZWMxuLgunRjtRGXCwauK4HBrXbahrMN6ZyF44b23NtDhN4xNTLnybDX6V",
  "key28": "2m7thKyx9Y78RuwPdXW76j4NWTq8So63dzKnTzh6MycwWAATeRVB5SPuD6PumEKn2zoXiHgHLea4bEHHjg7eETCE",
  "key29": "4kVE9osZJi4XEZnqdqUY5mVBrMub7TP1ZucXCTXNcPds4k5w2SkEgdKdDrSnzc6vNt6huZs5qqUVTBFL8XtwVpWZ",
  "key30": "2goKzfL7Bs82EkoosroQddi29Y77Bwe5VJEXVkhg2CRmkeaXKmLL46DCqjSutuqbSamFZcUSeZTqQWoCQc7yBya5",
  "key31": "3TxVy1FREsFK1HRjoNBqQgbxQZjrVe8F37ArVz5Uhmmszw3q1B2ZxD7vUFaHMivjNCX6cKww1ewrpVoXY94pqmMx",
  "key32": "whLXfJf2jJmk8MXrMYqePzhamTDhtHzNTgpAaaRzq2YxYKYryETht8WkVe3VtBHJnhiHiNhVob38G7CgYFmoNAw",
  "key33": "DuqvBuPqfjAuh65pbm7RhXSVJVP3AXbTnGNt2H3fYwX87Ew5ffCYBWUawieXAFfjZwGCXUsaWrbwhAfdcYsxhSo",
  "key34": "3bB41sWNtkaSXTpNZSxnGfJSiZJH75qu4JKgFFDBQDCrZDnLNSwMMo3VyNm5t7ozcgjiEsgAKN9V9NcYw98ic7Sc",
  "key35": "3ZMMt2wryyP7rvgAw4hiZLiqQu4ShqSeMH9nNzfSKsacb3s5c2FApbRviJ77mTAtXh9iTogZaPv2Yzp8dvfLSJw7",
  "key36": "63LV8J62X5YV2cjcah5mAQEoydobd1bsj3DkHBepDSRR9w46jXqjkWNjDCSok9uEUiKZKmXzcanX1SQ57Dru3DAr"
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
