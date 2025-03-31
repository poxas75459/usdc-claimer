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
    "491yyneNfE5tvQa2U5p5Nbn9sD2594Zzi8TprdRQXTedb25QUVretVwPxerfcSYHMNtbuSLsWbUkS1y7jV4S3qvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqhuHVCiNAV9qaVkheNMRmxJHcirakFMCK2fPn5Cf4shfh8Tgv4dqrw6E1NJDUq3nX63ewuN58caC2zNegMQKum",
  "key1": "5uSzHzZtvSVQPa7LvD8Sk7E5xpjFsjP8Faikw669Gj4igFu5tvqWvccK2FD1R2XMckKuQjEah3fanzktt9ZRv1AY",
  "key2": "44St36iTABr6Wr5jqoEBX1HGL1XZZU1JmLNXsHJPfMyjHAFaQizrz48mSYmhztnGMtuxrCzpFoexCKjTLy1RRqz1",
  "key3": "3odwySYpeAVF9ECih95tC5iotDdD3qbTeG1CfYJM6FiBBDQwWYK3faK4kKCofdyGyW7K9jHuzf7cZBP442T8TBH7",
  "key4": "JpKToHUx2QJTPAyRyvVGPtGeYNZXntgPnbNAZcEK6iqMCfCXNmB74T6G5cRENf4ZbkE4KawPGqeksrj5oDxaJgc",
  "key5": "GFU8zk2sj31JX9Xohy61PHDgh6yaApmWYMTZg739iFCqbJah5mUYAh9sH8JzcLVsbVmye16K1PJJoAQtH2nN3WH",
  "key6": "oifbF9uAMbHb1yBXN9Sc49SQ91Trp4fVE79fFt2kUQzWvxqwMiRHRnYuidboRGypdW5bBS5jHucrofBc9hPBFRA",
  "key7": "mQoW4BFBeyKtuM2oKUDUJoTdvjSsFPppkPUnXjFGvuvPWGozN5qLeWCe7BLUYCNcjDCdxrnVwFPBZperJauZWcp",
  "key8": "5kDAsZ3MME69By9nW5As1v2mhKw4ZfZbf2KtuZn4bRjgEvNctFMN2booSPrx4o15oUuvXhvfraannWQEz37vTjUu",
  "key9": "3pWxnBpYV4FHiX3UTXjstKFGBMrCFbNgBmyAv32SjKTBqGCrgZ2Qa84oxv6NARS69btJvSTDseo64QEb8PEjFW3d",
  "key10": "5dD1kFbbYgkQbKsR5nkJ5dzNFStWqvvtLA4NnRX2DM3ymUvcNUedNPJV8aHU4ouhCCTGrTg9p5bEA3ApSm8N7ZCn",
  "key11": "mqMChbT9iqLu9CzqL9soezxLMouLVsUKRPQMm5BeuEnt5dyYGRQaceSfHXRQhDFw93yiHAaSFpP2LPtxTVa4biY",
  "key12": "1bGXWxyUrLmCVX1R9jNWw4VWdaBkBoXKbHXSVMiCqW9jyCYQBr96Qp21HkxtvWYTWbVLh5bkUBDaUguVLzHT3bo",
  "key13": "4H1da6LYJUXtDBKoWNHhyNf79bDNPLdUTSQD1YtsrJFQFrNtnaiLkCjjyXMuvyqRC63vnCK62wpaYhGjnUi1NJxG",
  "key14": "66jA1zTQLSwu8KcUio4fd9iXbCB8PhNJ3ikBQ6zxRZRnKTVuXFU9Cub2tQLeKdjdBw4KVDyD9zY6JMmnpKM2vPTU",
  "key15": "38jHM5kB1ziWqZcf22jrr1dy5cft8izKLyg2FrtMxAVdUqxMVGQVwqKq8sRP51UroaseHLEjq1YTpXzSVfvbxNHi",
  "key16": "4TcbSxXUDdsaxMkhQ9NaajxoLBWMq2xS46CFzsZzWFBvCnXvD4Mv2p1e8E9hDuEN58AJZ1edXFpe1JGSnRpJBuu2",
  "key17": "5fdTb8ZFiYSucDLb1igBgjVFDADssMpywfK3dpjcLJM8jZotyiqRE6LmdDmx9G7icBS7sfeDuzaY2j7gxkuTeGte",
  "key18": "7MBy6mKMbTS7EmFTa6q7CtQGAsnGbsWqdXdzfPyoAtpP5UTzJUPrwKid1iqrVwWmBP97Q5hLWrjtGnJD7aBk2id",
  "key19": "33pXCTnDSQK6aD8eQqmzj4nzfPjUTFM2CRnYfxwSTuwgnpPmzgV43TffxBAVd2hiLg2mBYD6sUikpBbAcdftBXbk",
  "key20": "29HooVFioEKGUVyMAa5yvmmpzerkZC3oKuGWnFE265SWm2vyEeaB3nELhh7mJtCpbgtWmadQyCDLgs9EHzM5U9bE",
  "key21": "66DAyifxfifEnFcypDe3hq1Ya3PPhRZaz18zLRiXY267i5Ao7MrLNAu8WvnQnATp2uzAWfFnxDFTgv5K1arc2a3j",
  "key22": "2aVU83GDmasJveNFvz4qZ1ReKnD6GX7GXPBLq1udf2V8bM1PYi5HTK5Y8E98LN6sNp96q9DrzpvTNpEMUheNYozG",
  "key23": "35ZzK6MaDhgJ5BcpA3ZtqcjDNGLQmKJE5wTJYWXcV8ZXcJxhVXZ12j5aX5FQex18WUbe5HSzpw5r9C3beUNSSmWi",
  "key24": "5pKrzk58znMEbhA2Yh63NnJ2KhFwJdkm9tyVnjJdUDNpmhVjrd6udGQiPt4LsZPZEZ2aDWpmsLxLMHuETTwgjuHJ",
  "key25": "44F7p3SQNMpscfNSuXiiWyNgk6wCeMFvfVCc4a4cCV86LKwcqgxuuci25s2ugBCnQgsrDtDswe22LkFuvgypitoF",
  "key26": "3JrosZFuJrg4rBvG6NUZk4yYuV8nPFDYC6aJadJR7n3kNKN6Towudr4nztVDg5V2E1QJ2EScZSVYdmzEEBuP3xDT",
  "key27": "5iZ4zxvDjUNkwSUZNCtHrCxKdafnKTuGT7ouKNKP4Qi7f6ZztDweZu9ivKTiLGR9E8mgMrVCNF4PfX7s5ZgZ1jp1",
  "key28": "5GfS7AazBrixVoZtbqyC2GQ4nBtz3z523wi9GP83e5GYWx6FeM63cKkstYts91CtQ9qGcKAcN6CtnMYABGRFtZBL",
  "key29": "27Kz2V9PeeQJqVg8CmUYRidJyTENS3Fg5NviEUVBHD52PgGnajXTYVpaELfDTHh54FbAxvihJgidEPETF7a5uYz5",
  "key30": "4CwzPS3XLqgD3dWWWAvvScN3hwYWuWf6VtLbd4ext4U3xNZQi4YuZ1cbseEcQHTELuMHnaPVznCsCQ8TMCDBioKG",
  "key31": "3431GFtY6xytRs9o4Xn8ABLSs3ZQ3JLh6XZ7Pp1myoR5KHmCEPeKDcmYQk53i7M5xzNvSkwWe2MH7ZHUn1am9Mx8",
  "key32": "526CsiRhhT1NqH1cja65RYgJXuSLEK6GtYmZJWQ26v6XqtWro32K8BrVSjGPJ6zaqqntvghZQQKf2ozcQEQ9sUzQ",
  "key33": "hPicAEwoeRQrCvA2ubanqhPj7C1B1r6tF93FMa3aqeaeUmygYyBHDz8prGvJCXLTkusG9wqNAtZRjKe87YJGAuF",
  "key34": "MUGXEVmdXk9sKJtJcijCcQhhs3crWRHFX9Wkt1R9fxhpQD5rfqV15eFfxkWCwGoqVy2B7bZ6fkfzbsnQTNVPRFe",
  "key35": "gSiZA1HMqpSYx9vB7hCtTWNjugHnq8efxv6eMASTgbiti11XZahj1fU245z4cmfnxv9tG6gVCyGcEMbmreZJXCd",
  "key36": "5LKJssRvTggb5RYaj4ooX7m7y25d7XbNMh2SKtKyK2n9YURHzG3hdhdjMi9rv8jyCHGRQKitkTpJ6LmjR4urYByQ",
  "key37": "4HrXBB41tbu39wLfEVV1bTxAqmmMJZK6xifntWxUX1uiQdaSvXtvfoxQrAunuYSca8bdEE7phN5CuSsAFCABvCkH",
  "key38": "2yQHTyEmnZHXVmcninWAtXPYvTtc1m6L3RBxmrQL5HU5dDUvbq7g8cNGP5UCraGw6FmEfsvirGaoqYt3YD7agJY4",
  "key39": "5LLkG3qfZPBLECeCNe2aN5kSSxZvDBD8E9WCD7jqj648xwNtmxk3cMTY4qC3SFofFXDRNUuEyW5qAPaDnAYPfK2b"
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
