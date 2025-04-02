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
    "6jBkH4WMxeEuEqz7SMW3XwD7CVmX2kGUxDD7uz2aD75JyJ9Pz2Hx4mBTizBiXqaNeocFbbxUbaYyJQxNJ5zeYdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvqGownZ8xvbmoZK3ABo4BCbP9zyaSHyujT4eupGSKUUzLuwC9Psd17nGpbbg2hdCKTtxPx8eeKYNUvGWLBYHrp",
  "key1": "3YyVC5yJEKdrkGsRkKa2umXHikZgBtwJipitn4ApvYjutU934eJCa9q8rAjC1pYd7UNXqRC8dy7zwKH2WL5TDgG8",
  "key2": "4WHjaL9FKXfPggv4GL8HLqbVgZHhhocMb3UMJtr3QaJfivxRimPFxnfrrhwSxArg6Yfy2hVGhr2yz2W5qJ92a6ss",
  "key3": "3eub2AD1EqmUSJ76i6EKeB4RaumqMc1bTxD4fP8e8CgjzrCWjxgxZ4hSq5mXs1AcHrgevsa5KbHLsQDLvzSJYqwm",
  "key4": "5CPqarjq1Gin7ydNWb7N6vjcHBDCW4ntPRoe2WQZPwvD4UTxdNMseK8yPYyufdGsiFs5GamYL2GVMFEuLpVZ11ug",
  "key5": "34zGRTWdyrgFKTHJR8xPmA4EhM9HAs7gKt9uh7WTVyeJXB1c93xEsp64bxjaowdSPjAHsWwVaYUuL63wxSKagZ47",
  "key6": "5m4hKLJk3nkjNcmg5VCTdRe6i2sKkYR3gqWtBFvwmFNg7jg6rEonhWRRxjHKRjnxjs8g13PggSPwN7v4tqqVVP7B",
  "key7": "K2RhMwtDwg14SnfgTjAjKecBZGCjMBRWTNKEH627qFuCwzvF6hFCTc9CKwkiBNGzcxrzErr7qF7uCJezTkhEXBE",
  "key8": "449mpwXLXpJfSbDuyEsfJ7TTe2VXp4oSBTwAUo7krpVFrde16gvYX9e9g7TrHb2zvDQcv4nFhMV51ugTs26TjqCx",
  "key9": "4fQZrR5aUYw7vLHmi77miowS7bBrsPfYrANVfBgkTta4nN6NDZaCpidAaj53WhVWzMaagCXsEC3bxDJeCMzd2s7e",
  "key10": "5s3fbS9YD6MHyyb3FvkrAwJQ6MuDeGLjRiDWD9KShzXN9K3JnW2nUv6qVKu9RxomaQgPpQtGNsmQVDK2xPEyjA8L",
  "key11": "24eZG2e1mtvRPB9NRmSFAAqeZ6k7BdwYdG3Cde3hxWjteYQce5svtjyuJARN1vbb6Any9eS2MV5pYjM6eBbtpMvx",
  "key12": "hm4F2w8HKHfEvideUxsSWxXday3jpNewf9SbrS1TXj6GnPtxey9KTvNXL4RDWfGPnv88GjLjV4nGdDTnMqZy9rK",
  "key13": "668FFYcmm9oiVDtoQzGv5pYrJnQsDRMPoyAZH6ieZgTFxdWLusWia8SSfN8LU6cDjFEtH88GWBp9CS2hvQEAvHDb",
  "key14": "2hXo4Q1V8L8zGVJD6wxLhPMS2jW5x9wcNBev9N4CbcEP8MimwVDerc8EnEyj6CWSgM7YxAAwstnuL6VLheqw8aFV",
  "key15": "5eLtA2WpxvaE7jJEhXo1w9qeZN91v4VkR1JGWJqyPBAYdJbqHsEd7s1ViA26SpwvDUFBwsr1jLLJZ5iSPAN2Qf3v",
  "key16": "2kiLMquGp6MjzTYAyFWief8h448dy4VMcas5jWZnLShLKMn1YsfU4bqs9t77DVScMHo6S8a3Gz5qKZmvBpiChQz5",
  "key17": "4wo2YWuA13ErjUefDdiZtCkLAL7Zn3HP9PGm6dmen5cAFDcLH33KprkatwbGnoZ2Q6mveUXoMuXPkasZrofvpDBy",
  "key18": "65M2TjRKxrMxxiJan4oLbHPZX4hurR8nHV7Ss1A5Ksbqx6xJ9XGh4Z8hbDELZFnebaocNUKpcTwJvbP497HC6SVN",
  "key19": "25p3a9TPDXs6cjdpGZweD5d5BHJU2X4BQj4KNkP6heYZGnk1pZ7MLj54LGPYgU4oT3bjcV9jgD69N6XoMsc1weNs",
  "key20": "3xCw95tJFn3vf1vyLJiF2QvevnAuSLr7rcYbPH37h7tX7TFB72Zzxtig2HEMP13RVfrRMTVPBM6SFH2R16yfZGtB",
  "key21": "3H7tv7K5pXQ8s9CzHj3t3zreU1mLw92CCam2qf1sBzZUjq9zDzD165RAPY8K4mJAGgXEU8QYpXb7RAeVgXXp4guo",
  "key22": "4CNqGv7df4ES32K86fePrzMpDqZHxd7QymBZKdBV9a9Vq9qVQqbAwuw35BvCWDnDVRg284H5qcediwaYVkPLzq6e",
  "key23": "5u4iq1DNKjiiGGFVYux9bZMDxQxptqp6MQttMGzgkYkKELnM6MoHtQ9vbUqBRFtUWoF55Xw8jUofakbwqNMVKAzQ",
  "key24": "4838VSiNwL7Enyy4HUZLL8ZaiMAY6i3CrsagmvHM1dnThX96PX6QBWHRro97dCghBS4V5qBZ7QmcGigKLoavi8kL",
  "key25": "3EGAEMqDVQZSriiDhm9VBnkH3fvuSfQ2RGKEHfBm7BnS9Wrxui9UB4fYk4hBo5qtCfQe8bU7a9bXG1RmTtd98cPZ",
  "key26": "4x9iW4vefxKrRHpf6Z3sLxmjt3TMx5h1bzkCGCa687n9C34s2EKiLs3Uu2pDSDh5iBQNAD1JTUGp8gQ95tiLNZqC",
  "key27": "3MmVdiUvxJiCsT69x2JxZq2ek494iwWfUiSS16PP7EfCGDtvMt2dDXTqaXrU5h8FvEFydHstyctEVkDyc7ko9i6n",
  "key28": "M41caXD73b1cA8W98egVFCWouEPB3BjaraX8owiqZyuVMgnWDhW1nmdGKQ2zkKBJPDp2ZffRNyczmQfonHTQBjv",
  "key29": "8iXVtj9wLtjCVKKJucM5YXbYdAP6BAkH2GNaXbkmbXPHL3VBqCsEWcRZib6dbggD3D2i1CTMB9f3huJWh3e3YVy",
  "key30": "3rVXEhfWAHHEXuL3ccbfsHqRB1xYBoUYkEAL5ZhJqVVDfmvRMaDLWu3CoVsFzaKUEFfhA7azWsBcYxi2BtcvEVDB",
  "key31": "34ruuAxjkCqLVMLqtQ6nekgPUUqTWuDG2VFb71v56tdx4op36pPv1Tv1YNM2AzosbEKf55Z8SBP9rpsAqkq484XJ",
  "key32": "4xJiGxcH1FHvhZvVe8U4Zmcx8q1RRRheNP4GL9ZRdogS43KwxvJmpb4MZvdi7V1Xdvj2f4tidhqMtsM4aKpNLM2M",
  "key33": "4BdDpwAveXivNkEC9JfwyhGezQGLsVNvhtUxRPaj66J6gzkch1a5jyRz47x2B5MG6oyShizNw6zQbb1gtnZGCwqe",
  "key34": "5z8z1tGQDYAQacxxgD3AiQYjbGJJDC48sFmXqbWX9GSoRNVM1P3D3mSRz8rBMMa1QRQncxZDACGN7yW2maaoXwmF",
  "key35": "4Ptq9vVLyYux7ng4opNXhjCXPKRuzhSDsQBFPpPevbQsoghfJtChQa29FenQngrZzPrkiEbPoCTgfnGZ7QF3xH42",
  "key36": "zzEsTKnUeZ8BsBMERJgjP3MkQuxoDzqYG7hZTbbgkWYXvbj8feXT9j1ZrUCvLhevQujNH7uPX1jakUH9BkTTsHT",
  "key37": "4BzjKsoMywr9kWKN7k9tJTJCVjq4xkvuqqwgTKmia2CLpYNZxcEnqZBRMUGHuN6KVefWT9V13ZaBKmnhcbB3CMyz",
  "key38": "2WZJ5ePnA8M2RFzkozKoGyXLi6oMSKM2Lvr7XycRy8xLQAKD7NMqBSXYXW1c9d9ugsndCkJFCgwShNHk4n6Q6uNR",
  "key39": "37HyfheWhadJkZiEFpYraqYondVXP4xu5kWGAmHhhzMbrUTC95y7fd9pe6Q7gGZ5XBWZe8hj6w1YvUWHAQteSQDG",
  "key40": "56e6TvLdoHWYxt8Hq2t2PNAd1bbyQbpYEZfF8FniHZ4Pm9KeWZ4UfS3nFWTF9ztMBPboduftcv8p1edAnRE9LaQ",
  "key41": "5Gfc7kiDyjuXnVQbUgiXhMrpxcGgwgmmipatpXHbYkj9DqkoJa8AxqZ1CUeG9Yo12WHwcXFirzU9dAxQSrBpLzzD",
  "key42": "wjRQC47vS8cxQzD9JUsqJaBdcRu4Q3SxpJjUTPM7AviCBBV4fZMzaVLNCANFHfrUyHhVUQNHS6EJtkSyz68ZmxH",
  "key43": "3kVcoDQ2jMZ1rkoA9FbdLpkE9vKoEtkp2FdfKzm2G8DpGh8qg64qjMP9PMd5KRpGftsVUPTiUKrrw8pjCNeYhcNC",
  "key44": "4E58b5DxkSR3sm7qPXhq6QxDjj8ZEJXCQobbrZLPVrJH7Mg63EEX7acZdoaRBnVx9686kbEefA5SQjstUTo7Gxas"
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
