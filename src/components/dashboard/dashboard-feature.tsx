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
    "2v6svrVUaqWtH6UojYZLuAP7kNCcRizk8FtE53DHhitEBYiW7pABYZucGF646L9ZtbYiZQw8EJ9ZJZEPR8PqrDBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2hdwwahvpW4VVjPNMGsxfM7uiUDHwSNuqrF6YrgmPoyqnH4gTCvqSYjuzy2fVn7MjLbGPZDp2LrosM32ELVSjw",
  "key1": "4LuH387JQFrcDmnkzQNFzCZ5LS58BCenVJWgr9fTetUdKSYfsBskgSuT8QSc6XAap9mmqpxpqXmPc4V9m9QGNCME",
  "key2": "5GUW44nuZo9DACMRrCFJ7xripDYQUw8jgDu5Law7hf1vZRkaK1SmQtwWmk6shURpJY77jXJbZmBC3FBKQqfEh1Cd",
  "key3": "4bBhfJwpUT93MQLNtWRpPRYxTfeDu4MA8J7hRxAPYRk5x15oSxXksWwMnSUSKScMfPA6qLoDYeucXuuFzJFxdNEi",
  "key4": "1x2KCeqPKwb99ea7dmuymoycrbnRm6LbGszo7hGZVyevsSc5mrhnf9Cc8PjPmfBfnZatGuCZMwdmffJ6CGjhX6w",
  "key5": "339KFrhX87zonjqFyS6wYHC7xW6HPWoCMSsGLi3spanDwUfnsEVuvu38YXuuV3w3Fvmxwaj6vm77LzjLv5aEJugA",
  "key6": "QtYBnKhDeME9y5hSKiFXegd7eEHkNL3wTdKk48N3wooJq64SRjS1EFPHGsByJzNcGo1RMrBWiNen7RGLFp32AB9",
  "key7": "5s75QhGRBbC82K3uRvzTRmKQM7ugsLphdfVYJ7D6JscVMVYGa1dqRpZXPTsN9NEwXe2iTmGyiEvft2Cp3xazP95M",
  "key8": "D7szWBfDPSk8XQQ1nToEYK65RSxvkZQgJnZbd8eWd3waZ5KrGy3Kr4yvWjtbRjqBbnDgPvTRMj81jA8qfVdRSnh",
  "key9": "4xiG8UyqHXpdCKPkRYJkGWsaKSYPbauhfpg3ucaz2hwHnB2cRiMcWbkVPwFw18ThkZGNnmvDwsQEYe44ytko4he9",
  "key10": "3Azeuek81zZXkauCe34KLpzLWD1Y4EadfkQmLW5fxk9v5hquwHvLWjQcLjiWijRrFMLsByRJeAe8d2MNDhefqSqr",
  "key11": "4T5hzNgiwgnyEox1Co8vTESYAZ3biRJhJyLgPV9U1np6xZZgF6JkqhAKCpCHGYusPCVTBV7PzTjfeTgwG745avbi",
  "key12": "3tv5RVGasr8aPvvwfh5YTZQwghnFqZQHQpCxTj4t4qjGmnGc3wnq1CkDBzT8W6TsthDE9F6KkbBqc2VFQRXo384F",
  "key13": "5as6otA5pEQS5ykx4GTPsU7YbXdJAH5FEANTUZJP6Uzun3LuNasV3ysCVRHN8wdCVYm1mtKEs4HbncUGit3ewiRc",
  "key14": "3S43WY8GtqRZGTcF3WwXTAxLXXSJkuzL5Vc7o7p44BUA5FQ9gSgWh275TFUqUvPASm6u2LJRTzicptfV64nd5E8u",
  "key15": "4A5gsmnPvAJ4e6Puv22ZaWUmXxdpEDJzM4xhW6uDkxPLvkQzkQ74Nor1htX2CnmLYBL8Mnmon45wXskx3vG8YP9u",
  "key16": "jnMoFhxoBS6EaRPpYdej9UA69CnT938iP3XiKFSTBGjVjw4bjsTTwUqBTo2WE1hritN83TC2X9hgmGFypgUto5T",
  "key17": "5xgeDRiGRgUjLkx92S1iBVmbGqxTDqfJMu6HtPkwin19QpL7hM9Wm6dUPhG9aQQfs4kckKMCaYJLcLPDiWwu9DLZ",
  "key18": "3pQNh5V2gpYbuiZ8b373rrZtE6bmvVCT8p4m5fUvsCZhWP9aREMaGNkdFS96ySQeZpGj2wbpKUvWfuPB9HTDVYfM",
  "key19": "oyZPDj9xGKVPK4N3dzBTZRV6EQ1pF4EbHxckBrnb9cxPerQv3W7r9ANBLFea8VYRsm3zXix2XTKbZP2Kt1ufk1i",
  "key20": "LQQawr6g1XUEggjT1VzTKfgqYTdPoZfMYaUJhVCBZy8RYmjVbmT1AUtudaVDwEPAnCwYLyh13V2SAVzgJDSLmUC",
  "key21": "4uNWGgSE4yGyRfDmpwjQhXbyrfsbkd57LoZsy9Vb1TwVcwuFPEgSffDTq4dEDS7ppvB7kCoR4uuLu9h1JVNafv4k",
  "key22": "pUZcJf6TPSFtGWMgtcTDrM42EUbacj5DVLKDmKYBCwcYZE3oyJ8KmV4hpAwkasdxLAn8CmST9XmXKqipteNg37H",
  "key23": "5WkHg8YwMauPWPrRtee5RTWrVq6dpXNtpb83qtdY7JcXK874wuqpAVGNoWHawiXpmJo1nR2AoXnVPYB1hzqJuTjn",
  "key24": "47i8BksMB1GCTWDKJY5Dc6jUwpdHnwqj82M3akcJLNzEv6dXrWQtvQmsj3H3cC6cFeVt4t29qT6AUnWDagbVmCyB",
  "key25": "42EWKNNzFWuNJvCmJrNg6bisT4na2bYN1xATfitZXqJ3PuK1uBovTjVanDaaCFmua4LRtHMy29uDtWhcNJMJ3QhM",
  "key26": "2e9VnvWM82uRzQHm74Aeh458Nvt9GkKeKrK7AwdAW5ZPuLaHDK926h4mzVqRxoHyRyrBVHZVp1ugTFfyeYMBFkee",
  "key27": "53YoqVxTZ8PRJcB8EThP1YeZEf8FVHf3F739NmShhVmpAjGFMemLB8k4g5aJsN1gaSibiy7LZRz1qPwRyCMreyHi",
  "key28": "5DYPBooZmh8s7DNPmQiYe52RhPyvLzYuvxuynQQmZbbFe5JvnVRHAeCAB6xsg6GAzAXeH9PHzhfoC9zCv1icSY6f",
  "key29": "2134hGbotE4Arb8c3mjCvZVkd51VjAopu6EKJXTtMgdMcn41WVFRwujmkeJcWFm4Mkz5ok7jPCfvhNYEbWnBwRqi",
  "key30": "5uofzwFKpyDzR9rsewWQ2J4V984KMbxgja863t6C8RyoHtp4RfYnmLKL7k4yVXa8fPvuAnMQUCpvo9vtV63ag1LV",
  "key31": "54fpneNU158vsJTxsaqmxCgud7BJpGewxhMsoVUXzZNCrmnjZBCofBvcM7QcFcSndgHHhjqdjjYqnztyF56BPUWq",
  "key32": "3KkaMUFfPkfdZu8eSXies2Sey58E8CdtVMY7TJLfVFBfU2kPZcpXcJ6DR2zTod4dYVgWh6iY8hvmvH5xjvSAf62d",
  "key33": "4QWdCcgXX7T9P1MTRvre25eW2eewQ1FeuPD4jRYJ6qkkF1sMg3GUgJYtFvs7rMpwRmhZDeKZ6UM8fNyih3mX8CxZ"
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
