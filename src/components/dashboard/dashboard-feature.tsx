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
    "2PFRoA6bQ5oVyVgTeN1PiLkQnVXGhxSRkFvr4fpvM2MvLkL99Yb2etRn6RtcscxAq483T4dbhneVDcaGccdKSMcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9UvnyL8XupEp5otJPzvKELLcKEyjA5PBXu6e1T7FwGbvKVtMdEzNgnXJN24Mp3fZaaVNxoC8QUz61R4UPFpEYK",
  "key1": "3d9tmJhQPqP9XGJb3Xizu1Ye8ocyEuizu5se7gnubYo2Jn7mRCvmWGrXZxo3Ae2QRJAv7wSoUKwsBabYcrneTD2w",
  "key2": "5bEGVQp1AZGSj4kC2k4t8QFUXDH2KVjHDDVLufcpJXsZFci3fTnSMUVxqPiNn86Mc2nabhbvofbQCpzGsevs24oB",
  "key3": "5EoyKLrgfXTXfoK6EvUbZDtm4EyjiStM31TmRzXBU7bSp4sGfTnFfqTY4hPLGQgY5m4J8gSkcWSit7ub8JLoQsCh",
  "key4": "34JhdX36PtaRRMmrdwrDUqWQ8XJaZQbBcg8NMsQjSViFWE3CR1iCGGxgqmJ7Enf8jNMFa7qGq3GoqxXQuVnzhi9G",
  "key5": "4u8wbWQFX2dEkFJNa4woEtNQXSJGR6hwwz4RXgUpenhe9iBYVmhyv6GccEZbzXFwow4XmRYcMESbsL5YkPjfFSYG",
  "key6": "2PyZQxsSR5c2CZ2pLRr5Hp6SXUoC2XbdM9dwzNCP92kjh3k4Dj7ryAUQFvw5Vj3BUdXM32joEiCYu4npo6HMbZVH",
  "key7": "59NfFGxqSYD81EiBydhr3C93V4cfjcq2poaTcqoqVnT6372WvpZUkvf2htpb929HrSXMKRe2nH5qPzZbDuBBj7MT",
  "key8": "2GEfTTn86LhE7sfL3JTtNWZG93iicjpsy2VreiTwcQZb1Qui6CTVHRdujDYsjpPpiBJoyth51TX6aLV9D1geGYt",
  "key9": "46LXnngwjfXMvo2A6xn7ttiDHQrtkyKEFsrPt2fCDbU8MR8ueaDhhzq187TcK5GVSMcm71MNBP3xXZ1sjwfks5MS",
  "key10": "PtryLF1M7b3wnJZDcBcGtEkP8zGmkDYaeCyQtRsDuoYgT5vpjB94gEGU53YocoaSHoapWXQdXic5sXyUmKogZ47",
  "key11": "f2Zaem3XA5MiMt6dJEkySnthX1MdhXndLmzPeR6VB7MpED6BPPmnuat4oWiHgdv4d7xoyYRwo6SouWdK1jKJjh8",
  "key12": "4k955WKVYa36BvJXmXCtEuzaCe7RNmTJYohSXHd3FsT1i6BoqoHYMaSSYEb8B2ZMsKAuALtLC8V8zLTvYPu5aiqJ",
  "key13": "5CxVknaBxgewkjKCLW1LcWLT8jPmxrtUMBnfPFkUi8QqjuQoA9eTLst19XxWjfspuW3iX3ozv4UZZTaVRHbwYgRN",
  "key14": "2pJzEEefwbZBuMhc9JUwepXTqi9PBG3oxWWa4GC1u5abt2SS9R6Vnn5M2iJn2KVdqWAezpqGxikEQ3eGguqB6Fb1",
  "key15": "4ukjrpUw91B4gRDXGqzMsE9D5gW4uhAWTXC1xXrddnmJNhiR9Jdxfqrmnh5rQWSxiG9rKHPQMeeHmEEtvj7nybRT",
  "key16": "4MbPYxxWKNjeCKL8GnZyZjJVQVUXX4D7JfPfBYvtRAErFMguisgArr1zU2pcNMLpz1F1Y4pTv8vyzhr6jAnbmJRj",
  "key17": "4yafxEX7aFdbpeDMDKRXQrCfndmthnfKXy6TEF8JsHPPYS2GVtSFgdS96ey5yqWDSdJ8LmDoDYrM6wkigLecDt6X",
  "key18": "2benuYWZx7oa1Q4RyfhWAK2LQ1VbHK1BRrgmKQBoQx1g3UuHpuXzx4ureZ1zGLsLyByzAGPdo7WdM89mAmeckhdZ",
  "key19": "2Spmrv9dJjJwvGM1An2dHcpQePDpE87c6nRsr23Ty7pcvFfpRJwCN5R8gtmFCykPaTJCnBqHp7HdmWPckJwkyGmV",
  "key20": "tuP235UXJzMvQPYSbGxkq9TyqUZLxJy5oL9zGosrgeuBj7S4LMJwzj41ihucEKWuHWAsVnVcvpZoFaqPTs2NJh5",
  "key21": "5vgbvZagBrAgzruNpRi9Xu84z3Lsor25SfvXG7eqvxy6HQ26VfXuvT8Qtc8G8Ppvp1oAxDLs6TS5vf44Y4jMsikg",
  "key22": "V1QEGyzs8s37XzgBsT6XGYPkhBx9xjYqEhn3gZKL4FQyqYKjvXR8UottNVv8RmyDnAL4PThp9WJA2sgbgpuQqxY",
  "key23": "LxV3Sf6dx1uXiFaSc6qsqfAjmAZk3WmdDchkDA8LJtBhvUWE4r9TTbTiwgG5VRSvJbBTVJZJWov2Aqy4gvAGRgZ",
  "key24": "5sHKHrKDnWSvjNx52mMGNDVrmLEBgttiwRBaG5BcFTPrmvthNeYVAmn72PFFrZ8ie9EVPg5MuWEpi8EBDsyv15dN",
  "key25": "BCQGsemFkgVMVCyg25rrjTdSjUWzwfgvRHEcTBtMtgcyuC3NCC6cy8G6wZaNVYoVsB2YBZ4dSSjqAaVyVQQMc8Y",
  "key26": "4ud73nKRbRJHEez2n9fNHcEr8xz6SzagFHFZzokuDXoN4VQCxfituv7zweCr8QKkbwE8PTCo9drN5rPxeh1QQTC",
  "key27": "2zji3EWLim5xEfhvnLDEKJwDMe7uoFDxdy4ZTF9HkdkdV5BdhCKyrrKs2drFpxPQLyqCzJYhaFb7mmqzR5p87sL9",
  "key28": "63wLMfSZkxtFzpneq8YzkruiXA98Lw6jWQo9ATGNnkX3ZqdFEeqBYYPoDA6G6Wbm9kFNYMy9crtqnabV1QLZAWEX",
  "key29": "2Tj6XAr1tcBeHa3Rq3BqKx8SqzMKxyLkC2udPeGruFS2GnMYvoisAE321gri3iyVQc2688N6Smax12QnCmqtP1pk",
  "key30": "3DmKTXPYWiFMhtsnTAG7JLm1w17b6YDahv4vC1Cx67LQ9UiY3GkNtu26YrHhkct2zBkuTGz1kku2BM9gj64mTb8P",
  "key31": "281HA3uqpG2G5neNDLc6S3bKCSV8ZMToxUWDkQ9ETTgHagqtj87imU2RiCKMh9b1ZAznLFXyojXGaFYirUnTT2JB"
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
