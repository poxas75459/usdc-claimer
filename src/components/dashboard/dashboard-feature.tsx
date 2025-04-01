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
    "6RuzQc42NPrrGJsUnjkHkZXDafegXFGCBbdZQ7RhgKMiRjCdwbbJeCex34adMKpujZ8YmLYBLRPCqs5bti3GmwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsvHMR46gBSMuoRR9F4qZEyE23vEuuikhVGdvBFGb3sCmnwv8EjER3BR91Fobd58hyT473h8Hxie852r5r9En8G",
  "key1": "63EDVfN5s8eDoFe41aeLT4vRKgQZCxeTigjZgzx3XZhA6gmpErVSDkXC4WDYLUmXZMDXXT3C2p6EM1TjpDapaeFi",
  "key2": "2abZ2MuaeBFjQhERMxMw2SQS7KseP2Sgbf83zxph6Ea1uuhVJYVyYL3YGJHxKw9LtLFyUkgKBYDP7CQ5RKewS8Mk",
  "key3": "4hW4ZKKXobCccKc5dxbTLGuCDrjuFC22A7t2YBmFLmJ8ue9cX9ZKBiLCN1jBBw62YC7eH32jGqwd7E6iUuE6YaiH",
  "key4": "4nFc3AE4eiox3JicgFWZHL49RuqaFpM9DpyvDsjSbyZpx4biYi7TaQX14gHDrN7c4ZxC8QQCmkjXfmGtvUz5pMdm",
  "key5": "4nUFfCAUv5wNGjfNPfvpxZXVLvBfAcJPjpbGPb5gxtVKvroeo7gb8ZdRGaZU1JZUMMNWeQx87XqpsVFxc6QsFfeG",
  "key6": "ohs8mdhtyVozEazoLDeXh7QPyfcWypEG1KVT254wLqSYCoPii7y5YLnaH5vrh1caXztCrzF4fg7p5cxMvppGPLY",
  "key7": "4GqZXvaMRoDCRB17f9NbjjA9WbgmP9bC9qqtJHC8amnCVHLx2YBgAL27n4te4A9t7Q7f6zHRxmCwC8cweEJRCsTo",
  "key8": "4Q4yeYcgZ2DCzm4B3w594YAvgeDehYYPgCVKGEKg9HSWhqAyQXFpP69ERm1GkXtcDyKhRZNDkfNgGi32sGfyEzT7",
  "key9": "53KXTx58T3hZW9s1SnzU4KL2aJab38Hr11Gg8iAtikJVuPgqLJp2yeiT7PbZQpcKFKGrwHr4nchKFHLYZNz4Hx6U",
  "key10": "2ocU8A4CL6gmh7P3adfLpea2sJXziKZgvbqgiPF5kKhQdp7Ht9FjXqnwKgAQeJTcLthoqHWXGVANqJAdCWhnDDX9",
  "key11": "2wU3JKVj9LABuGYfvVUwxBDszrxt13rawDYTeg3u6T7FFKuCR8DxwpsTCaF8yzJsNXK85SfXyMWkjQLLhfdicCJw",
  "key12": "5FUmCRboKjU8Q14Jsv7VL9ed1BxKRt3QtKDzFkwV7Vp3hgZSR49LVQpjfGV4Ta3znt3uVcWWQBvYJSUTKicu9vyF",
  "key13": "3tMxo266vWMxmht3ovfn1jEFfwZqSM7CPuabasGNDh38AwgxnxtsCrUkWAEcbAnmd52CZ2LFLN9q6TzPTq7G8dWk",
  "key14": "4dMi2MTRMnRhHQ7dDbfr87uYpqRXQ2SGYFf63MF9ApsVsDutXiXXavKpn3ThX9KSUwm6CkVLxAYXfqajvNm7sL1b",
  "key15": "4BomaYCZrowm2y4D8QCfzhAjVScCumDYHKA35enqGQxdPKZeQCWpMP6yfpDTvBFaRNPFsugpY3Zuh2jyKKoSeq7g",
  "key16": "25zhDJJYvLAdewiNmDPF8ZAB8eExwSJxCyY8Y3qVeyBGWYkdLyawLT9Q9o42DV2iUP6C7v28Dp3qQSjFs8GUGT83",
  "key17": "2XStwqNqqtNeqXLMuJxxdBR7kUrZRhZzZQvxqYwrnxoY18UmG47e6sHRDi4dBKmJpovdLK7baHKcaGZhoNuiiGCD",
  "key18": "5GDTYUP1Syzq8xPmmQmdAHaEdguAwMp3y5GjcMvrhqfvdEpPfVVWaxwRVACG7MAgZ24f25G5yaYjxpYSBHu7RCm2",
  "key19": "3C1HUEW9xKLmr5rUGaQH8FBGtgCArPUWxY9uFq1gGN5J4ZGdhVHyauT9iZc4SRuA3HGz8yPDRmWuLzm1sZnVtWJX",
  "key20": "4zoiohTTurh2EDmMyEsbt3UxYM3BCeAhMPja4EGrKsbLv51pb52KDfb6NhUeGvwWJj5oST4vN1tweSvgQnYRsUUR",
  "key21": "Z5reMkuUqQ7RSc96R968oUaQfUdZms7hajHQkEXVDRHxyeve59MCa66mDiwtyZ3yKg9GDbegv2TdRtpMZ57A6T7",
  "key22": "s7sicnUgTuo92ENoLhrwhDsHve22U1HJLAFoAcnta5dyWxLpba1mpcxp3Pm7bHUx8Vw2vWkWBx1FeNmpu5zzqjk",
  "key23": "3qCdGoKbt5zK8BX7LD6SV6qm4anhJzzSEUXk4ttqF68nLCDz8MU7tBjHxhewDt5c9pjkBEV9QgUtRwkijRZ1HUbx",
  "key24": "46dQ9yXEqQ4JyaVXj5RH6skBnouYCFaQFsWgckCMo8eiLLFVZcvJjB96W9epXCbFnMu1BkLueewM8A8GWKQa2uLt",
  "key25": "2GuwRx2NkizuE6ntvEdc4afwXQNuUddBb4z1VWMujUCZJgx7fVAgJRHMTwHWUdB31hT8jLsvz9d8vRqkxk843CBX",
  "key26": "4eBATjK6PDeTWFYvCqCCHR3ZTaRXAzpJmcqzuPKwmgQMj5kFFsFwZp9TGhbaEe5NZgDB9Ru6RETWAwgPYJHNbKeg",
  "key27": "4dmSVVxGhiPsex2XPiigQ2j529daxKYycJMR88K5WPRCtDaRMaRZtQ5DL7HQX8Gc83HDcdD2AJSAUGQJGJ9MTad1",
  "key28": "3p33MSNp3AhE7DV8FyFxFK9iRZKQ4T6XcxtkAGKv4QbE8Q39n8RAG2c93b8SuCBTAi4E2mQVj22bKgPpDMWWBcKN",
  "key29": "fP1vzVvZVRLS1Uxw54PKMPR8YB7QZbG89fiHp8EuoaL2HXkMXMmgqwdD377o9nXQYhqjVeXJCmkABbXeaWzFq7a",
  "key30": "AD9U6TJqkptE47SVoGgeWiuaL1ZY1nd4t44ffQ6DzwbQhtdm2GtKCG8S7PAhKZ5tRPD95Rru7VFdAdMzZRAXwnr",
  "key31": "3sV7ddMKoYu2KH3PjPEnunQ9Lq1fn7d9VhhWLc84syjxK1Bk1Nd77CtTbqDoKxahYSv2RnvAmMcrvA4zQqCEWEaZ",
  "key32": "5s8i4jiPkBoQ2MiHWMDQedXPkv25bU5uNtKpZKQoanm8gvg58CwR5fWAExWTahuQVYvtB9NJ7StK2rPTEkAoKf4M",
  "key33": "49o7gjqAxsgjC3NwyqqJ7JE83nbbGDF7HxaC8sHBF4NDEFRCGXQCCcpVg7JXEiJykk1m8u2JexDmc75fg4LkXVWy"
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
