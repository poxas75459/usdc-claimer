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
    "2ZWVUs4gVG65VsryevSn5dW389REEFqoDAGgZJcz9kbe9RVkJuFKTbHoozSourr3soEvfaLShtnm9yHC7L6siPpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4efaXdcxkZwrWik1Dkzn9jMbEi2oDmgaF1YcBBgsxCVq6bQLPgDXNZ7JFhs8F179GTU3jpZqfGpaZi559cpon7",
  "key1": "JnjUxCYsFRB1vwmRqg6npHjzcefqZZZxsaPY3khzjs1UUDKpNpWGpUStK6CsH1BipRLqA53Lvh4YPNr15xwtF5u",
  "key2": "24hgj2TwoHnWV9om11XK5qVTtqBqDMCggWJdPC4dXbbM1KcYwdgKHrhZbdfz4DgTtC2bRqAe5K3L6Xi2czhYy8ja",
  "key3": "8KbqN5UK9b4PEMjWz4WrFNKEjrmWMYWV6HfyV7st7CGCx1rwsyegtWXQNmSvXM7xCsTJhvehCazbiXfn4mpXZV3",
  "key4": "vmw7BPwbU3EYfjh9nExsaCpfY2RPJ9pDk6AgThzVYFi7FEcQNiUQ1K2hqBtusLzR4hJBnQnXTJKqoctGfidekwQ",
  "key5": "44X2DqhoYHctyfMBYGB8cNBuPCW33qjXLQjApqedZzc3SWFjxTZirQkjdGeq7erzCiJu7iPaiWEHXqxntNHy1oRA",
  "key6": "3ucqd1fAkBpTMdw6BqnDyKoQFFFk2DyEJXR64LReSLQxEKAiQkeDMCf1r8hyQTBbjU8hP1EA2LmVC8cg89cNKR62",
  "key7": "2JNH9y2QqrumQWMsAPAvV6bfuSfACNmYPiHLzWtEFWfgHbmHsHyu1MRjND7f28rc12UXt19ZfNsGR5aygqbmLHvZ",
  "key8": "32saosKmiFNPQkfv8UfrVVCko2UCkim5aE9UVacFHyyiQkALCwwBMcxut6k4mm8CFqzHBbL7m3BM1vfTdcJsKPTN",
  "key9": "5DQR9rBBN6iN6pANot76E8AG6g9Y9jUd4tLEwPGvfc1bGq2d9Zo4qc4eYG6sw5ghHmK8nu4focQ4o6ZtJ4Xz2YPb",
  "key10": "3qNJ3fFb2ihwWhdNGwX9p5hiMrYvixAKyj22tL8S1DHbFgU3G9tqqTgZouNwuc7AjdMZseFVn6zZym9acQrddkfo",
  "key11": "456KTxx5frJR2qMgYGnKb78gNpnVvUyhnT6KKMYMSdQCYQUbkCr9GPCp5ejtV9W7fKcZ3tNvGpNntt9eWgg7otYn",
  "key12": "YffrKUJaq8RTLMSi58J3QwmrznWoUWYrbqZeQcjto7LKJ9j5MyXqqP9BDZP8tEXGCrUF9wdhkoSZYdHxECfgEVe",
  "key13": "4ERmtDBoLu7iQZGVZ92T3nNdEPkJ3CNs7zwLaBUQrb89zV1Bt6ZsWpZZvoSpnXGJZsS4Ht95n2rAzovLcyBACRJE",
  "key14": "2pzFrmH8fAe1F6QTUTbw2T4oFYND8uSG6zxRxDV6Wit1NraXc5dvGdb5fLCM17NWLMntJ1amg69yaGvf666ySWQp",
  "key15": "4GBJjNxhM1kdfyxYWhAnVXv7n3F2S2Bc7BshMNqhQ3Q39PVUBhYNxXv6TB97foGU29dcxfrDR2rdmeWkSMZncYRX",
  "key16": "4rPyxyMfERZqruWi3Ro5P6vR6JjyaXHid4ANTae3uGFzy3FngZ9FvGcM85Sxgmo35J5yY1YbuaUDPn4c5kUjuBzw",
  "key17": "5h2iwKtJR6mhCf1U3WK3vHNw4i83Hr31phRXTTpVpDExgHtoRHCDTZueVn5vxxPXeiQjRFKLqWjqogK74mULk11Z",
  "key18": "2pgXJuFj8qoPdDTkzpgErsD7pcoqA3K1Efp1DotgEQKfFL7mJZ3GCXQuBk1gib3WgTdyhvigvUhad6e1yzzqw7SC",
  "key19": "5UETYqezzTZ9K3X8niyQfHMK4NabinVjjRyKDD2NBRScAiizpxzYCdrQdvRyyVpGvK38skSw3wonuNXBhJcSeVgP",
  "key20": "2ywWroMgC7zTRnLoacULy45A1v3CXUeVNsQtJkyj77hAhkaJ4m9n9WJXQMsCH5nhDgYAJwF4LkAz7t3RB2oUshDw",
  "key21": "5i3Cf5H86reRoFTxc31k7G2yDazW5fChHkCvaHXbDENgaFykqVdpWP97ZHrdAR83sLuRLgnhoEhDnBom6f6ky5ci",
  "key22": "5AL12Mxwx7CycQfzSfojFdf9ySmduHbgR6ahzZLK2rM3k5fuKhnmcSgy9jrfiqCgPKXq4NuJAB3FERohmwqPMiyV",
  "key23": "33fZT4FfVffK7G1zG8MdQ3vPRE1QFFt7v2usmUDZudP1bbeBqbC5aVskXDqZ9NpsYdwLH7HVQd9HcLbn9MJmoSmu",
  "key24": "2nTtSWwkPod4DzG3DqijjuiyXEJkpkQJbCej2CgmR3V968jzvtY4MjaN8PZfSK2bNK2PZAXyE3xRknrtX3j6Za9a",
  "key25": "4i2ehb5Z1oHsBmXz1ULUU2w9XUw7WwKP857RmBj8t64Lp7EX8PaWTiZ8fBDyHWU6gUHc8huKEV6sKAr2p971Dkh2",
  "key26": "4C7fPhVDdVpSLyBfiW6CTLv9jNqvnE4vpzLghVCeqHDgChv83zy325t345MNbijhaPNcYJHJTHmmyie76ZdkGrkF",
  "key27": "2UvzHYMDsAGiGpXjVmDTHEM5WVFXmetAMaAFBfETMzib7T96gCtYyevkPgAm9FLdtJrKEfg9ftXaw6YWe3dnYYGk",
  "key28": "2JH1bkAQznNNXeeKhYfrRs1xxNXQ4f7SVRrFk5nFwAwwzUTdYRM2RCozRgtNZLnnU4gQyujJhSJbKke7e95YKNpU",
  "key29": "oFZsAMKABYuMDcVHpnwDA2xxA8DDhRYw1SF2f8iHWkifTVidPGay4rT2gYBaz66nvGCB6RCV7WiwV5aq1VepbMw",
  "key30": "4NKULTD5Ykvq7XHPgR5QU6m6NNx2u5p5gSpvgfi2yPx6qjCCFVKmB1S14fJ1FPCvLs6wJjpV6HdVFXqoc5R93Ln2",
  "key31": "4ePN4tRAFF5BshR4TSux8EPaKssGkweZEh2eL7uDA8bc12F1gJgWTK2ZDEPKWJASGj7DCd6ZzrLJZf5vonFd2wV7",
  "key32": "36TNdo85HKLVDS2txRtDC5KGmzfYHiNfhKaxfE5AAPdNjz7D77zxs3rw4qnS3GSE1Mf1fYAQ9H6cunxEJa631DZZ",
  "key33": "4jbJXc4sDh6VrzyR3X29CfRTLS5hbjFbq2MKysBitZc77CooKkWiTFAEB6unDjGbBYFwLkxjfr2p42ZLRzqwZd7N"
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
