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
    "5daPd1vLhV2EC2e6M2YJnG7N9VcK4S35UH2z9twYva7ZmXSANca5SoD8Ei2jMi8DQiXpnvdR1nK7hkaLt5CWEvCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZbZuLU6FBwYiHySgU73NToTxtTFmL2xJqwwabjFJ2TUxUs3uyWCXcfvfe5RuuVH2a71JvKzdW15BtiKtEENPze",
  "key1": "VUYBCUNosMBdh911VRS1iqhXk6bEwg3Hr6Rv8L7oEEnK6WmZCwpeFfikRCrUm3B4vEfA4surQZLEAJ2pGK9ZtGg",
  "key2": "wm5WvNWVqriYydcXpTz9QtXi3tvgsKhtVK47jukBSoeLf6TdGBevGmt3gPdg2KQarQU4UVYEfhUidSqQ8DLHwXT",
  "key3": "5GmU47fsYqQQLu2qKgz84JFm4bJiZZooTwcpH6wdEUVPa8tw4HF4ANrK8ANPyZr9bdN7ti1D1mbNRWovU8ZAgtFG",
  "key4": "3qn9mPbyS2ayckQiSjD4LVnmyVKBPpR6S9DNrxcy36fc5C9P9wdC9YyvDyMj9jANqzpmmxRsVgeKDubjte8hwSmA",
  "key5": "4JMa4zuY8Aj3GbtTVYgXKprc5BxSqrCK2txa4EPPCqfCEP5jWy7TKdnS28jingbRPoe97SReLX4Jv4EXYKxqMUSV",
  "key6": "3NyHQWbTQ5KtwzGtpSDcDbcV6t6T3B6vxsY1XbHC5bTBqsoZKfBxr986ZD8Bf3141qF2XtiR3AmkQCXxwZdMVSsr",
  "key7": "yRYqGT3WbAAp84hjWPPGwo81RT2YJCLNrtpAxweiy3SjfmDKQxc1o6KSaUP6gzWw1eBDmVC1Rq51cKPwQNtzBjB",
  "key8": "WEYUmQ1gUrofSXLFZwpnjDxx3Z5znj1B82Bz8NUeDN5h22ABeV11wdjU93q4nGBSgzvQSZY4TZWf8fKCzi7oq58",
  "key9": "4xR5jqW6KSy2YgRxPeVXWzEmVMnTMMUCvv9wUqTwhjECZG78Ub8Py5uVKNM8NWN8GqocuQ64SjeNQSHqAQnUMkVc",
  "key10": "61sAUUvnzAj5QpQjaaJXzsxFigeSKjg2gHWe9KYiGZ8hYBEzoeNmnE6oX35YroCBq7F2gj9RA7DL7UvxxFwYa7Ny",
  "key11": "TWwKFVjqCUjZ5Vu1Fjp27FS4szUoWk9USMEfgtRJLf5y3Gs14bUyzJZZc3Kjb9GW9sLSWZbyHMVmszbjYRwzVen",
  "key12": "3Yk6TSodp7LZAVktYysA3TJHYDx9bBCXtPSK95JyP7njgwy1UWCFmdqcm3YfqGryMtc3wxYU9UFAKbQucJhzMZgt",
  "key13": "3LKMRtePuFaji3bU5ETcYBYEViHxccWf6yTxGti4T8jLugQiiPAFfe1vP9D1aTBctThXfhHP1AvSpVnPCF7DXhek",
  "key14": "tt6dNTNJzyqRwskwEjEBBD7QoTyLBaMnVSgozaxZwGtaoK6yebSSuziYrnn5oP7ZfdfVbehz9fvkoxDmCChq4iH",
  "key15": "ZxHSbXY6JZUuJQEjtESVt7ashK6Kt1KvkHEos6FyaJULLXncC2iAorUh6CBJFeDYdwZW4Z2oCmUdYAmskWuSqw2",
  "key16": "CQPSHcBvjcmKso6eVZgsHw3APrUhD75zP8yYudjWeNc8BQ4m6tFQA9Beo7bzFcDK4zLG9CJmN7MYEagzrH12wKx",
  "key17": "a7BLBHCUVnuu5A1YarKSmtUCUZXMSEmc61pPMFPTHBJ3QYKq9PTR5NKnzo7iNhY4AJqs2h4GrafdmLBBAmrxaHL",
  "key18": "5sEVCSTPpCg7frPVz2qUQX5ZBdx8gH6791Qk56rixyoSJtYh1VjzkKXPiD7A7yE8WWKebnRU93XxgTyAYm6aAUQq",
  "key19": "DPY1BU7BR2nuRBSPppWuCS1SjFPbyuJj6heDhBVicevTtZuvhZp9S49HziHLGiQbT4PZoGHCuuHG9YFKwnwMBCp",
  "key20": "44ZuR8aug77HCi8sAKnwXWojyvC8suyiM9oWZLXg3wAdeVdCV3WNLWtS6hZSZfCxDJeNku1f7jYyAAaXKjXCeUh",
  "key21": "2cSvbYVaqmEJLL14pYtHzNERoL58zWXjB1h6s5m4aiJr6Sct9WWXENGvYYcE4kwXpVrxEuVD8rx7UZix24jhuUUu",
  "key22": "2XbZDuqF6t97krWce28xbU2Fzr724oVCkRitLYDhAMijLvD1BEg6GGnSjDhazFoZqm8VTZmscxHwSuypXGGW4RCR",
  "key23": "4oecHjXQGrTTGb84WYbzBA1VYAR2wKiNNjX5a2u1yJwAdD9iNQsX4Z3qH8bq2DUBeac6GHyYezbvJX8JEQSMvHAF",
  "key24": "Qp944GXVwiMQXBoWJtjTtm2LK71W5V1VyNn5MBuUTKsqHiYQs8bcoa8sPTo2MnyitEiCcUGLz6jDfPb21PDcPYr",
  "key25": "5FXjKHVqkzUnJxFaq1wgjK5AC56pwtJCbFdy6Rrw8PNW4AydGKR1ZBQ7vejankr8fbL4jjPYssCTjn9VqJfcTncA",
  "key26": "5LdzaM48P1ZLLrcWHgphMG3vghWdGv6JdfqxWrDm62Jdff8zAS4miaQ3tjBKVWmSw8pPPUxWFB6zHba25E2ir6uf",
  "key27": "4pmgK56LMg23p4XqucWVLTgVTbCZLsQdhRqQCJooELAT3CSjJTpjr3VihzT8XqcRtooM9bkxWmma55WC7sxx5PFi",
  "key28": "5tjEiPb82Ea5zcfHPmbx6CTf6eNmVEr3D2ucSaPrf2A9DxtQMBrmoCZHyhHR8Yqg4M2Q2KpX6mLcmjiuYY2H5aSu",
  "key29": "3EBBonutVCbR7rZN1WSnaqj3b3q6BxstXTedatCwfTimL4bQAVcmRztEcDRZbEbrP9FgjDbECtxsL24VQu6RBoNk",
  "key30": "3W4e6hT6zKPzAvprUxmBXNt1n6GHRJNpgqk9zMSG23t2PxG5zu6BJ5xnfMFCpR2pehoVbyKBQc3hWJvH3jHbwzPc",
  "key31": "frzsKZ8xwj5vfHotnDmqJBpLwewbbUf5Q5BEa2gBXS91zp3LaQrCBQreDYBXc7a6X2p55qi6XT1CU9w4psX8kaC",
  "key32": "2r9KLdA1kBR26CPB4CTUrGMJVQXt7dxh5EYGM2bXQ5iunGZRM1M1zdmCsdwJ2SK51fmiLQsXGGdcnVDgNyzd3Azf",
  "key33": "2EgfJ7f9Cyxe31USwrtNqpXmJ6XVTWzXxrHZvBy46PRwNz4V2Tv2hJxVVvMjRctSSaZpkhruVwava7397g7iMGDb"
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
