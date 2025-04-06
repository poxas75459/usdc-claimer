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
    "2d8dEuKxckyGJTn9BzKhdsqZcGCQnZf7DPWmpjWrjYsMMhptaPbxMFm19VVpvHkE9tLSX9c3jstZju4aHWptq4WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQJS5UZbfRX7SxkV28n94R9Sn6WEmKbbKDrpbevfSoorSPNFHyBnRL3x5CpKvTyNNm2y8EFAiJH3oFwoj5E6H7N",
  "key1": "3shEVYQj3Sgz4PPkJwM2NVagQPoy4AzzhwBVE5pBZbckE8kKeknmg6ueefCaiYAsVsM7t3vkZwUMEePGPKKb6y4x",
  "key2": "F7xGXbj2PSgU4b86unCHJeeizFaXquU8vXsc6kUpCBxoVhmC4z7dgYZFk9FmwjJtMzjNgsNkLpYtFdbFgj3deby",
  "key3": "49mFTd59ukvdS9YA4azJTED1gnv2pTnvF5kMzquHSgZJMRqqn4VBogkj6vhkbaLuVPidUn5ZUDfy2Q8skFGGh32Z",
  "key4": "itHH7u6dNwUezbSVumm4QYVmNMtVzxYR3f7L2BNpS134jrSF3hfP1kPqR91inZriVzzbSMJ1ZnLrcaw5Pt4gf8A",
  "key5": "57PxdqvYWUGpvChX1UoChouFr612yFn1JKiJEYHPMeybywM2bxuYHZGC8JmvJ66jFuoGdoeyFLPYcQDVxLzG7yzf",
  "key6": "4tq9ocHLeBQXqsWqpqvcAJHxG5vTfcxSDzn6J4CcwDzsxkDkvTdNPUxK1hyr92sneSJSBbmWPSChnEusmUYfuHZ2",
  "key7": "3SCXwA6NNVZHfMK7A81v1KUQt5RLvgp73fzzJZ2Y9HpwKynksxBZrupg9S9VNf63d1DnY97pX3o9t6ThZXhqnEBe",
  "key8": "2kUb9n7Nsv3Ukyrdhy6qr1b4e3LKjbDQ5hSSzkCeTMP7ycQfXUncqZcfnoHajz7wYZCS4CLBNPhhLH8dJAUE6Ur9",
  "key9": "3Pn3EksxLTUwEK8FRYMVqYdBiNKrrJ6RMw3GLWfycxncpJcaWQhnxQr4AuVHnB8rc9pZe1uvH9wzV7TnK8K8Zwjz",
  "key10": "5aXByJxjtixNGeJ9pW6aX2p5rgDabrTiN6KRSjgKjKxsykGVWQcKV6x2LFuUVNCnXRwLAre2DLKDB3aLVygcSEnu",
  "key11": "4JsstSv3EKFmpFpkv5ENHqH4beBzmABG2sazsi3QNzMX6EGbkxzy8SDmmhcmJtWGA8DYWSksuQzWzJQKdSaNTfYe",
  "key12": "UHt3gvAWvTFvkVNQS5Kkwm2KhJGfKMgqgAxcieWavWBugAji8WoniMbhBERhtqS1nRr7YFcQ5jWEKMpz8wFffNs",
  "key13": "2egBSkdJHQMhzMEdEyM3YiQvS6oTEFpwg4wiTpaJdW3kMofE9C1KdU8mt95NXAjsR93eGaGSS9TFtmeZs7GR889g",
  "key14": "5Fxx6Xc9yS61oqn4aE289YXURZre4NeufQMwNfAuL5t5vnaHSLNwaWUA9MBtM1SmCZbyV77Zh9epdWtwQxN69rfj",
  "key15": "4ngjpu8PLrs8iS7zrz6zg7yJ4R9pV2ap6nACsch1wCHC2CWCmix6wVJzRAVwHnkmckanBeh7onDay9Kh26MLhwnP",
  "key16": "4DqkaiL4BbAPYMZkF4STR9FndPXYiX58pa1khwHWUrVETvwcnP2sHaZtePyvXe5EWVvK9ZiSJCR5a8gDjuVVMvWa",
  "key17": "3CQ2GhEEMvU9mHDC4uD6X18U5iuB1v83YejD2vfCLCdebTQNAjMyhBUTgjE2Gbw2hcDB4Dmf8prq4dZbogzT4EVv",
  "key18": "5xGggtqFYKanCFxfkJj9HttHwUH2SfB1jvC5TgVwNNihbFr3XJzu17aCURLWCDTbTYt57XXMxPuyG7teeH9BeHKu",
  "key19": "2PcHVsk4AnUnF3QEm2xeVGeNPgSRMKEsPNLisv5zhiCGXjLf8vcVEJfDNUjNxBUkbMGZJtdvLbxVd1X6i7GhwMjE",
  "key20": "4Z3fuDj6BCbo3bChyWzHhLgJeHfdH6xU2CqpQkdT7xQgW8HWqeXyGUnX1xj7hCLe8QQjiUw9zJ2zYmqV4TrVu8at",
  "key21": "3UaceEEbdRVSZRgU1RK92fqLwRCbkCZCKn9JBAwpuqmfXt7AUBHA5HD4iqFkKx6tqd5gQWGLQYYHV6bikCYAjWkC",
  "key22": "XhZuEzjcodMF4QQwFWpfzfq5FxuUdJg7XeqiLqHGjAPnretQpwE48U8MLQgYgEp7rNkLzfCFGEVRAhoj2yjM1MT",
  "key23": "4e479BAtKgg3UzoZYZ1FM6B5UtVBbQM219JsGSPAGt2ZjvG38SYjMSv6JiviSpMRZtnbb6Jr4NCyVh8A9QecTEEX",
  "key24": "3PgciDNxovmzGpiXjRFpLf9SfLHYB25h9pDyeaRsxx73mhbFA49w2JF2QnF3d3sEmJzjZfZyYtjcRr2ujrhyN9uq",
  "key25": "66KEfDbqP8LSWpLTeqK2SxyuMFo7gh8KD3N9rZ6NpKQymZHUrkkr2rT5D69E1abt3EKXaWzmauFHnbxDpSQvWVcr",
  "key26": "5Xz2or2pPQGdjmFdwhpaugdXYQSVeRA4LBPG11PoTGSra59GoSKbsh2vGwaY1Na1B4kSjswE2VWQZj49a2sA4p2B",
  "key27": "4gdQyvyZ9S5brqFuHE2SDW6yFsytDv9euTDbmjKbHrayd4cK1TtyMriXeG34TyLDQXsUvrAD1GEZ9x1RioM6HSCS",
  "key28": "4KN8YJqdAWdUSjQgMH7NLTFbMzvRAMJYvZbu5Zfb9NKM7toQKDtF9i41A2r5TQfsJ38SWu34RGyktW92VyDdRgkh",
  "key29": "54sbGiG5G5bexXZmq3SRmMLopRA7mY8wM1XniEi7XQhpHf6ucyUPNhgkpAbhJzsKX1fvFt9EnokFy51yG8FVCM19",
  "key30": "4pTrk9x6nquBJ2RnCCfLHuznaTAFFF5iYBxZF9ugNAb2Aqa3g8cMrqpVSUpAMPW7c2Afd1AJyxPduK2f3gaQGx4a",
  "key31": "4KH3iryWqxukyqurbAFv7uMHmi8LohwzXpUBHTu1ntjNU8CjXJvJjNVsFUtA8sqYPCSLAXTcBLnLiWq2YzeVT583",
  "key32": "4hnL4va81gzkKrv64yCZdrhXyR2LbSeCx1NzKUJXwkzBpTJzBwXEF7VRLnLTjGbFbed3hmY2za4YkHtEkH55mQsh",
  "key33": "2VWMcPUp1jQ1FSS9KnmZQv9UokY85kexHzxfpHHqHoiFcGJVn7z7iRMAJSxpjwPhhHa2WX6BFpmJcDwsZnWaaAyx"
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
