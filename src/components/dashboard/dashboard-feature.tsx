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
    "36yDQDrhkpBgCcQAh7znRMLYjysQBKuRE1dsNx4316fDLxwJeSkTw7PXPXd2asrLUjpdmGssdoDsfZeN6HzE7iBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYV5RocW1TpwJVRWegi3ZJ9Si2b2tZdb64APQ4gfqGF6Mp6cYNaLHCEaBzH1xCzXvYWDgyT19RxmPWjc3qYRW9z",
  "key1": "5371WjUxAK6bWBJomgxiarS7HrF97oaJgdQopu7T3nZMEKnuNdoHs93DcdvYqLPD483pf4LVUcwJjRJG6sSgRVYJ",
  "key2": "5ob3gXHsw6rjC5TJnWmYZpRuUqVKKZ6TqQV83q9TWcwQWFLxFwoLLR6vTweB1MdzsKL8wekvuCwzfoWAT6C17hzL",
  "key3": "37HLzZhPKeKwxF7Rjp4f9WZvNNqGXX9dCb7SmRXuUQh427KF4Zv9LJ7P9zCTkGdwTWFJKCmtAhmUVK9Y75zzzkHy",
  "key4": "S8kMbQyy5qEPK7g3sLMpcyUA81mAA82QcPSHfqsfEM6AGgbz8LtFEPhPFDr8D39T9UjFU84GuckeWpmNhj63Ra5",
  "key5": "3SvfnTpLceyNHbPHRSBRjtJkQ72UgzcHkNj11QdmvHVWpVqNMUKk4rfosDKqhsvC6ax8ZkXCrSnEXZcs7oPLbDQj",
  "key6": "4ji4z8YAp4Vm1FiJdn3hFbabPrvprcMQrFUhkYbjgRTy2xxVc71Hab6R8QQWoC8xswtrK8U5r8hRtSCgteUYZB7p",
  "key7": "4n2gKA9Zqn1dV1oLFw3pCZ1mCk3L9CcCVmxoJQSQKHFkYNEJN4pYbmC6uGoP7RKZeeyXLpEnxiAZokhQ7krU81wq",
  "key8": "5azKvS4mBuACG1B7P9xbdn5eTGVC8pkiG7udwYEmMRjhEhyY7bgoDnQvM8Vpwjh2DTfmwXZ6C6SbP34rdYT7V8FA",
  "key9": "3z6NvyTH3GqtZs38shfj1ByxtmmvjwVT4k3T1emWRymGhjjePPhFuXitdF6XPcRneQEpb8d7baArPNGmPcKDjGH9",
  "key10": "627W6aC8cgQi8He444by9f6sA9vvx7ELu376daamvM5xA8ZXRpD6WLwiRuTy3i5QbNRwGNBDkwyTrMsn4Zk9TgV5",
  "key11": "4C9E9FAkNWXDa8UYcnTNf9wsGjhEmjPqqDuF5ntmf5Z6J9PyeRY14H2AzHgtmcRxKbCTQGESNstDqSj7URXrjQUZ",
  "key12": "rZWa3V3uLYz9qKAw39CPbFooB9Kv5m7oKzHhQzETz5QrFcYLHqoY7SAoi6eq17yYARyEugaR7y1SnMYBPrqPgdA",
  "key13": "5LncVugAWZBfHoiJ3pebRCUTRCJHJxopobBjfAAkrHXdbWqkWbUZWhvdrCsHB4g5B6xZan65g18rWpNyRfbarELV",
  "key14": "3s67fQQnnwRNZHV4GUj3CP1yUJ674EJACve4Yb34CaxoF241mKdYgwbma3iM5QZB34ks5NY77GzJ1ksuDXSgzCSy",
  "key15": "5UixAWCbEqwRg1fdJKEJ2XJKNArFkLLQmMRvErn1bgjhfic7wZFfzi9xb4xQGCM6GtonK1U1nRQeo9dBi4Drhj9q",
  "key16": "2xJLfpKqSxjazNh8uVhJZcSq1dSpLFK5TpyuzzwJ6dQnxNNtcsKgL4Efww94doD3nuCDxnMD2NkTA85gGVeipBW2",
  "key17": "5FEUPgT5yAA3QBz2L72qKJunjzdGhm8pBWu1MQSu32XZUPSg5JN21R77UNEDN9rigCLXv1RqVEvAvyGm4qcyPrEK",
  "key18": "Aaz2VcFhF847itaQvfNGWRJMCWQE7YEz2FyK95BbBWSB1tofUAfugHcQJneFKMW9EWej9JMQToNWthCjtTvqb3d",
  "key19": "3ze6hMDpnb8r3Rbg4nrmg7rGSFbdn6rEdF7yfTcizsfpZbSaTpqGNbPMkTinwyDdGfQPHE2HmjhTsEuLH4N7wW3n",
  "key20": "4VKHcY9iF8z3ghpbQCmiBw92WwsLeEj6eYE19kMMafKytWNR6rL8PfrdLgrLNi7oXgeHyB6iJJ4NLAWYaiXQH3Rg",
  "key21": "3hGjdB5ss4XiUhUxK9N9pNvtNZJqhJBsBMvmcvXMF8jfjequFcBT9dNCSd72Vec1uiE5QdTB65KCa2TPAgDbegPq",
  "key22": "HYrcrYcUfUTazabEzHVFL16vABHPGqVESXBggXukvDUtsJzQ4RryzqDSV4YddZNgCBn3J1TtjRskuj8PFCwN9zC",
  "key23": "8nWJ7S3Q2ryKFeKX9VhvBG3NHi4FtfQH46y3TJYW7gqRqddbZiLSRadBqUYtua9BnucSuqVyQFmDiN6Yydcqycn",
  "key24": "2etFpkidzMQXpw1JLNxKoStVA6F7j9jRWCc2NTL8D36WEH89VPDtC7yP4t1SFouvoKuik76ffktzcMBMtT7RMN9y"
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
