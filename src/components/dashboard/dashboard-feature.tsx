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
    "KAfTnhDF9Lc98DFHa2p2bJTXQfoGczkbautreUQEKsuYSUMn49ahFiDuhKg9LM92VNJnhhAQcPtuAcQWsAsMZZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Adqp2SprBjN68uUCs2oSh97B17wEmtJF1RkXwPofxewMnpbZrJmAzk19JQs6c3fw3ceFuGWMTBzQMdwWBTcnzj",
  "key1": "67XTtNxZR5AF169frutJ1kZhVPZYvfaipMzKoUDKQGL5ARbPXQiv9hm4kQnY22c6psUfykZ8bBPnyNcBnP4sVV5x",
  "key2": "3jhuXdUaxoMgVCgebZG8TKxqA5KKZjbYHmkUgqmwhA2jdYEh8qhiy1S3sCCJQoaLQfaVQGc6yPe5XA1UWbD3iLVx",
  "key3": "2eQVqd11Epbf9gPC4jvPw4Ycd1144jiYJ7ZBEGJREkd2k2PHremTYR2eGTwddqrjkPxiWu61QaeqvUAnh4iVU8T6",
  "key4": "G5MuwkcWtgnhhmDebR1ENpPritneqaERgKHhdkzDMaJjwdRUTRyuKdcrJgNiuJLaipBsR7uYPWzoMecp46Ecftb",
  "key5": "2UEoJx2YZaxHceQfcMBmAut9F6s8pa8W21xhMVv7m5GDGqRUYgZLyXTPc9EzQdUunMuhvXDzJgK8B8SfRhvSiPrx",
  "key6": "5aj6GYwvTeKFhfbC69en7bxV3s8t3o5hZFDHDF89X9K1669bFiHMKGdj6YDmhMcNBGUNSKPdTivA7h7P3Mvwsihs",
  "key7": "2QQ2RAxaRvveFsydh23pfXo3ZzQYoFgzLJ7mdqqb9qDDCHvq7ctAM9r3Mtu4crHRRrYt2FmkaRCfa6JqCayyAz8X",
  "key8": "i7mrUAW1m37em8S4R8je7RjfMxrt5UqauGtyRiLyFSgfDor5iLTnqEJWJEXu2esJYSLvUoax8vATdHDfcRKhySs",
  "key9": "3u59y9Er5kTqCm3m8BcV12b5gejuq71YicN2Yy3o1fLgEmnMRf5Vk5NXXyWWnHYPsPbnUf5r7n9XpC1sZHtPF2WP",
  "key10": "2caVga3UEEgoVRWr6qvPFhKR4t1nQ4cZbRZP42xktvJB6bs3udUn3cEwVQJ4THZWofHkjxKCRHEt3cTYYsmf6o8x",
  "key11": "CzVL2ZUXonebc6MKLR1pfnLNiscCebUUF87BVnQD58VYVLErWDktjrQUQisGL5TpnWR57pErDnsSQ7E81BDmSBm",
  "key12": "5dDS341E7DvvRkwRT1dFxwdLoW4gpNAAL1y2rWCDjtXjRqj5mR1BdqogevxPXB77nnWQuQYt4HEJEpTiDNqsqQUK",
  "key13": "ppqMwtVZhqQWs6XW613Z6US5erDpzwMtLJBRcsV3JYaTw1ymCyQgTMeX7Azz2aXkg9mpdMJLeQTv5qubs6cutn5",
  "key14": "3FnBavwS4W2xXUyqyBMfTF5HXTMvxdCXRJe8XQkykehPn9N5ygjZKBBwhroN2omn46fi8uRYwSHgQV6n2h2WjZZa",
  "key15": "2Q6NCSsCbTVc1KxRxR4rsy3vNHFQjjAYLQ6orCBHPTvgRLPiHxA7MNBWpKGjXbFHfqTWPr8uG8yp8EPdwghfwdAq",
  "key16": "5ARRbmFCJvDQFdmnz2rteKhu1hCDqNq3rrfSqTipzpwaZoqT83wqpq8D7MVKbDPG6P7kWrNYCYubnxjkUziGAT1z",
  "key17": "2nH1vdX8CxmGJj5hyHtdsgbwnJWsrQQKQdpmcMAmR9ZtuHbcxBYGiZcX2vkDcAkfDxfuUpKV6iwSgkWpAPdcFtsi",
  "key18": "cqSFrfyKh277ccxRuUszkypD9rzAMzF27EVUmbCyBqz79FA765dcFt15WxqXwuptAhKBM4Avt9FjKGQ4mCFoBPL",
  "key19": "5jitAEQAsRy5rjY7kppXGiNnbq23iLigAaU4WYnKfWJvGgrcn41StWL9C2sbQHSk9XmfeXny2CWNRStnLwCBNkEb",
  "key20": "52rtc42d9W1JJqWu9NxFS6NZzg6PZb76jwWfoG3xXr4w27RmeNTBkbtnEqdX9B3ujkLioFd5gkHLnRJX2SF5NAHh",
  "key21": "3ACUsydZx9eguAZ9VTP7S3uAzdr5dBuR9UDYcrNz3WPugwca4W7ECHcSzgwZ4WqXEugJWSCDJg4GQvzeoRwGdJmg",
  "key22": "5H6PM676QFGBrG8CU8J3i91AKAi3ix8kgjQkP9tFdfqYnohy5b5tnKE5Zp33qVq1NAcnCKzGqmP7ZTvnSacAw7ge",
  "key23": "2x8h3NdbfNVb7y7y1LPSTKbhckbGUdhb3ef4dvrEBeKRPVwjNXvbXkd9wsSZ6NdpsAg4Y9Ep5pVXoNq9PcJeWf8r",
  "key24": "G86K4ZMu9SEKVr3f9TbBaJeta7nNWj1aekLQAXsmnhomJgwmgfFqpaEHTnAk1iXvALdt9qLEkzjRQnCfMjEWsNi",
  "key25": "3Cn1SRoDTcpaui1NeeZ1VKu1yBGQdpKDz77uAhTvR2XrVLyJZeaDFtTNHeCk8g3BQVBEVjq9AhT5Xfw8kimXjPnc",
  "key26": "2oYHKw1QHe8dYFdtdDUfaQSxQGpZjpv9mbNFkNQfmeMuSrqRbCe8XYVuxWBoEvFzEt3P317FtnUnK7NdpbbdPT8j",
  "key27": "2W3jgehPtB8CR7uxQ8HqPmHBXTX8vGmJeFpCvJAr7mqZfKJa2fUaZ81RFwwHuP6pF1KU2TdcLLMuD4iVLgGn44JY",
  "key28": "kNHj7vuHcRweGSsJv7vWGnXHJ59bQaVcPHddkSiosYuLyGXvLP5voFspXzZiMNNJjoeHyW5vRhsRuo6hLeYvb5G",
  "key29": "5mLT4qeedLEgckMgjYGvjcXwxqgjZngJsrz8z6q4DiDucrGESywxAdrjVfYqzaaaKPKBkwTqJNYLcxq4R7wtBiJj",
  "key30": "2jRbhXzqhSKUDCUhgW2MzrBsKe3Hz4pRtDj5tMvnxnm52vQEuedkFkCoNntwoUJZ6rJ75dxccpPpydU9tDkUBv96",
  "key31": "6kS3JnFhmVaSAzEYbcRVkH1NKEtYRMCWxi6JRLYydVbgTPAZvyRSPuZCoERjScvyZceMia3PiukH8MZrGbYRvJb",
  "key32": "2UeLxtG7tdZeKwygsno1H33ShNDajNsiNzb4U9pZE3oJEfaxTQ39uHtL1KTgPEvekdJUHpf9i6nJVMf5pybGq2CP"
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
