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
    "5QM6uMeovbnt1R576646SVshJBss8aptg15fBP9TNVGt9wbcxmCKjXzAryhMAt8N8bL3BiSpbfb1mYjwggD6A9gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhUwWwfRBZax2m8MvCCyR1WdtF2se8n6ws5fxttCMAc5DAd5EZVU5xZnoMFwjPQ3kPtsew594VwjgEgwXChgQdt",
  "key1": "2dL1gCQn84u75iXVzKC2vzWDFi86NbxYLCHBiJ4FRbNxaVnop9MfcHCjcLzgPKHkvg5md9xJmJ8JESJvbdQMKMER",
  "key2": "4MSA3tf4SnC1fxA2eKV8yRjFW6K5bU7e6FxVAJFWSE15WFEALxKLMDfaUadCSEkukeXXZCGwsaJi4rNQ5LRvWE4x",
  "key3": "6TodMa7PA9r5Jx23WTmh6gkj4AGQiMiyuVRCUeTMEKU3pYhvFRNt4BT6cGnQHHuQva1tjGVpXmWJZ2Yh9iTfAwM",
  "key4": "eTsAfpKgxMQnN5gjj85ujy1dN4eQyJbLgeA53HqdntBDRHBqgCkXGm3Rc8dzWxm4uhyvrhenEwDz8Xm2W2aya22",
  "key5": "3uewcdCiUomES53fS2g6EZGakeBUysry3xT99kvUMAh1WctH7k7UC3BtKDEuvPqp8E7aSMfsX2P9oWJN3sP1uqvC",
  "key6": "66pGH7zmTko8qckGaeYao2dQnnXNtMbvbH72EJME5aA8hCD8f5rVyuoL8NQv6TykDE7aXyogu96pcG8gUvAD4Jrq",
  "key7": "37VgNddtLbcBjqoRHTSJyVYAWz6qr2gSwg3FEgGWaoLFi5yX1K534gSaWFU9T1URHEDrE4mvZLVJLHJZYMUxmTVE",
  "key8": "3qWr12cF3wiFqRYm7VmqruV2LDhj17kM4jozvj7VukLizm7t5WMTLpT53zajU9SL6TkTykuXVbaBwE1x9z4yhToA",
  "key9": "4JCJPKB918reJjGve4wSDCtUdQLFGLLpEzkv7pq2CJvSjVKV1yqJV3pp6kDMWoMVRvt9XvQtnmwX2cDdVqFF7tat",
  "key10": "4kCT6CNRKzzYDiC7BdKEdD5Su5BPCGTnRKgWZZ43jJQwui88Prfuq7R55ye79VCr34vxekzY3WvktqH7eJRMkB4M",
  "key11": "5hZ5KvAWiAqv13wFtAbj2tKd6oWHhkC9G5fhd5wG7yyEypmWq7LHgRh6NdNEmEEjS8kxjX3G7ufDejQM4eStFDQD",
  "key12": "Heushhmbcjdfs5dbyhc4iF5MYLhRZF5Leg6N7zz1YNmk5FCuHoZQBP49sT5DmY4nrtKhp4f6AyNifpPBfJV8fvc",
  "key13": "21yDWVffVbpEdu6QYMZ2Jmd2AFoS8pbh3dM3swofSxM8WmmEyiKaTonY2q24J85HKdWPDeVv4EDCB9YmTcTfh6ZQ",
  "key14": "5eQRGKp4MJWbqbrWqYHy835ftUHBd8KPNp5USYGSLWMNAhv4ehkRmWgytm4kqLwJ5pH8B9DJ7u51uQVrDXKLJmCA",
  "key15": "3gtNL2eCoEseKYmQwhRv6KihKD6V1ZSNHjgkMAas5moadhdd7uNmHXrz9fvrXKym5zGgT117jfjsFytq983H4PVr",
  "key16": "32oZCEoC5fJ6PyiH54h4F22Samwat8SxfTC8Kd3LGeJjZF4wfpxQoLA8DQU4QsAmu1Q6rcue3f3qubACrBTiMTXG",
  "key17": "3DTzVtw1zRajePua6gFgH9VcQJVkcUz16WB3ynqHWnUZwyUzXFGtDbW5zYkbzczxXF9Fd2QNJrPGVWnnHwXFc42H",
  "key18": "5RywwTgwWgW9TduiaAMFLmEUKzbXQfY31LRc1BDPBHkHoKSmEXV1PdBb1DzbKR2f3ujaRchDSFdou2rxBgZVRvJr",
  "key19": "5vbTMcFGuqi5DMLRoYnzcH1y5pJv8it8SQJAZ6iy2mgitZ5FEyQsz5Xw1VrHx35LH9Pz8UEZQoxFpnFvHvxag727",
  "key20": "4yoYvxLWpGs6dEbn4MbzN7BLvKTbmnkRnWBzy7fHmvTMsuXS1HuKNtavMpGL2wwCAbLuBkvQXKHvwkqm1RQ6aCmC",
  "key21": "2USr8D3gcWFQ5TrdpirekhUK3ET1Ywd6k6H8sHVFqY5Qkjoi6oPW4MzxZbHpvS3ChFkCDt33UBSNw2qFmbqCJaX3",
  "key22": "21BZCf1UC4cmZURsfy56fvLLwNcuDqaKv944QVvijbmgGEbuEaqT3BSSdJVcJegrLiyguoNZHofMstwnyZcA3X2W",
  "key23": "4VJ4gNZP8RX2rJPebhqqMPHbLCm8tmKDhzFdwqZ8Zb51dszKxp3xVqFC6ZuYGK2Ei1A5298jWsS4CNd1xocZB8X3",
  "key24": "jKTsd8VRWqt7nT8DM6KXX6mV1pa4e35BeACpgmGtcxGnvqanEx3q5Vz9zfU5tKUHG9Jc2KAabxRJEtUgiRAGdcm",
  "key25": "8ZfbodcFpxjYyRsmaiy5n4wuMwAezCrVhruY1bcWcUruETS9UjStPDAeokVCF4r3ksHqYDFUwSY7Lss1BUCXAgA",
  "key26": "4CJuxqsxWxxvbKUzbu3GCWqXfvoHYXu1Y1MPNsLZ5oREG4LHgHi9NFwyRtJwyQGG8xMCwdf7ZRZNqczQUPgfteoT",
  "key27": "4hzrjmb2F1qqjbVxKQimD3hBcnptBvDjG4NFhx9HevB27xdjZqT9fHjWQfo6uizjyEWgkhWgUTCqrfVfresw5idA",
  "key28": "2aE7Rf2GLE7Uq9MAQ6usZsjAsREb6J2SPkS2PjDSvcakuvrZSF2GXxJ9ir8A4PBVQVpTWfxC6DwS3qNqPczUzBAg",
  "key29": "3gMCXE2xQoaMZN3zfxKmUikVnPHhK6XXRUm9o8AXWAbxyDSuLgEX1bAFWB1nH7U4JtUk91q8xrfG5ZafzhuMpP5u",
  "key30": "36LohhT35k8VJ38QXNQmDFfFjfPkiTX71V63VqM87z2rpMxmgDr5Bk7jWEjbasXU4pGDStdzigSmznGGcjyBDoTR",
  "key31": "pbXm4msmXcPeD1NLmpbSCWVmnffncLeZS84apDqhpsf5QEU9RenaYYFEuAvTUTtDhbQaorZVnvyuim1WBUe8jqC",
  "key32": "59jSexrtMu9MotRPCPN2M4w993QgApyyEFrVj3hpKEt4w42CgFDCmxWYGErUp8gsTCZKNA6JWdG38VmvtQKdNPW8",
  "key33": "3KZkMEtHE4Gdic3YnyzEWRZ9nAMNbuGa8k3vb4wofEiRjwHXcPpis2kBcqVzMZMLwUgFGVEdcppUJiUq1CNPovMz",
  "key34": "4ASDpgincyaNmZsA9bCB3wNJXGCUCZ8piu8WaRLQeLoZtiBqprKn1t73QTiGb2RK4KLaxBzYoVm8RJdDyFUhDpdw",
  "key35": "2iYzsD3o6E9VkofbArTWkyTYHyvr1ZZnJjS77yApNi1vethqC4UamBhSpFdY3C9LMsGAkhpDMo1cyzmXPy9G1BiY",
  "key36": "24fV8SfWaNFYiBW5S53SNM1MNCEJKcDUt85vX7FAycFCe9FPoX5MVrk6VK3Mdn7tVPezR9ZssoPdkb3jRKQnRTCc",
  "key37": "3QXTJnxEXbLomizqQMRqqaghArPeU1KjEk8yLzMdFctdoGqajATNJ8sDY3xxdNyHb2yWpg2TungsdtsM3xXNZNoL",
  "key38": "58SdxXZi7Zefszs9QPA8dkPAoiVpof8gAVz15wZvXF2ZY8zmPJmmRdGdTN4GPWc1NGnzYvNa92zZE3HsNuDLy93N",
  "key39": "WoyZ1hLHRezYxP53rspE9qaLdv8XKb5LnZ4ny7QcQKow58n4BhnKqqb7nRWiZHcjsWnJgmECJGwY5pP5GEhLUMh",
  "key40": "656QVzh4rJvxAT5hkVms55VNArVaA5YyxCrdkRm75QMUD9Pb6rcf5fbkopm6SBnkTAjhMVfrEcyHKCcq1ahe6j5L",
  "key41": "9yAt2ykZwxdsAdUSzKdr8ivbqH2GjeiopZw6Z9Qe2SwkmdnUtx7cVVxzWf71teyExM3iCJRb5rDq9vhgr1LahAH",
  "key42": "4R5ChoANLtX8gEagJAsqg6yzbAQAPmtgfJ42JB1oKwqyG1Zg3mX72rzn4mLaZhfM3hH9AEZuoGSGX5jMy7QnHFMW",
  "key43": "5fK8eN1feSnKX6MaTTKhfTENMk9U18sdSx6uCXTcEL1ne6qHBWnx3h6BGtySYWE3SSEQ6trDJ2Ac8BgKyXRGQCbL",
  "key44": "521fg2AdWsa47SXbwZTxASweExLc8EZoD3pP5ipNdX2K9jdCoaFktNAmrfg26AX5kUa9C9sGTqWFPRWNSVnHqUDK",
  "key45": "4FCnWDv9igvpBziXho3CL3LD3hUqPhNzwsMRkaQrHjXgtWXMP9MPhfvuH9qZ8JMXfGbnnFa78LQy8GXJU7iciNRp"
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
