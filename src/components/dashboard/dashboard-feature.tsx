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
    "dgTF2jE8MpCt16Zuxe6k3aayrgv7tHU3TUPNzMvNKEDiho3e9kxb1FddSv2W1VUasCznug4uzxk9sxwzPrQa4jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jDBCa4mPLXvu4jwU2cLUhaMQjCmnURFim7DJUAnjpgc6cPPY3EskKNpE9oEXeDRYMyfneSKr6CegKePMfgCBMsc",
  "key1": "cjrqTthULbWoSUHmVCvzpmP67VnHyUXJ6o4prqUsT7AhzbBYdZBVPvBsiuihPyt9j2c7SD99YSiFKVHKrQD53dz",
  "key2": "2ZEVPXfb89pjr8CV3z6iWBkJfFjKbRSuWSY2nM7XjjrfsebWJxwK8SiVsVK9SULgNC1MNZscLAvy9ZyHKbgo7Yoh",
  "key3": "6LhZ8jY9jo55Q8V3RhRKiN7kv8ZJBr9oP25DdJnfQ8CYsnrxt6QHatghXf5WrAEXkZDAqRHeqv5Lgy4CntMKsAv",
  "key4": "33Z46kndWnPdMf6ZaPsYDiBPzyB9jSw2poc17N8qAdxi366WMiFTMSjL7NnjUA41DHLbxoFWvPvsb8kvrYtnNjG5",
  "key5": "3YW9UaQPthEa4n9cEWs16A2Gq3bUw9BvVdeej82jH2tVN7uxQHjZSLBkkiDckPrfskPtnGJPHGFVZaFzMW6ZTgAS",
  "key6": "qp4abatZ4Ru9ypSwJXbFEiKSRxA37rtY4Va3x8KMnWnLgQkq6nUMwETCe6RZgrMGdJxbJwBaH4NbFRQ57fsT1UA",
  "key7": "4pziWyZaNfE2f7hY3W5NHdrj7xBEFSLoFtX3UdQivvsxVqmCXAUvkJTjRksvtwtJxGxTdTqPuAaiCpkoVRn3u3RM",
  "key8": "WmdSir6RJBPeZ4TH8PpVK498FFfxV57qhrwqvJhQZQLzXqssgiVMwaR8yKHrE9kcgW9NZ8VinwQnTkHi3CuKh14",
  "key9": "5FTbeYsUQuJ5UcRzQDS3yyai4tbYdEEr8F2kW8tLiaeE8uNC7rsE4wxxWDx8eMUQHUa5GpBhZD4E5oqj42CAVJxU",
  "key10": "3LPcWYGUDbHdto6gKV5VmWvDicjHFPpBLxbyd6VpbRjGgMjS9wMkGUHTodCTMpCzdoZuasckaVQT8cpUzgvoaxP4",
  "key11": "2WWUDhT6xhnpXdLE1egFAVDvkKeFdbc4Hahkm7nHowpS271u1GWYgGqXwbkTr4QL9LekGHirZmc8QBVAp5nEgL7e",
  "key12": "44fEEBSoejhMS2TVo4eaqN8ssMGU6dbQzKqF5trbmuKC3jW9Chi6B9KaTdp5W7LxdPwosfXsoQGd3VPjbMaCmoTi",
  "key13": "5nzCtNPeaws7LqJmZUZWrVjP55JvLZXnZRPggLnuZyAsrujgk8UHGC3dzBZCTy4niJkdJyNXExDpgyfA3ntvT8uY",
  "key14": "mXs6CGLb8KuhTdBMkVqdLETKBbNar63BK3xMj7t6676rHgeAiFgM4DA9mzR2bizAK8Nf4DfutFzZ2tkGVJYSmA5",
  "key15": "2C9pcKwLv2qMqnxzcBrxCBTzDHTj1TTNCmZ5cGpbDPQM5tuYn87MgEvooEfS3FsVzKv3iWZcJ8P98VbE5ou9JbEf",
  "key16": "FGRqxqZbtb8Z3KpyCzEXGc9xfsrkkDoncfLXs994esX1XKJD8oLf1skPot9RW3CCtf1B3mUoMNhRiGvYFvCf7Mj",
  "key17": "5dfc87YxzC9reG5UxYCg3qcCgG4WRVXNG2uXzhfV7EcNphCqiyQ7UXe8nHhSDNe2cercVXkSyrnT6N1KWKAgzNE1",
  "key18": "5eDichSoU2KdjJAe8A4G56XxYPXUqrZFfZZ6GvW2PBMXZJC2MUsoyjyAGEBUbfk3NB6j9iKNGXu6vTTUTZa1Bwyx",
  "key19": "4xaddhNRBdiYqU44dVHkhcs4BhisxNV299uBjxzqHLaYN1FDRTHc7MG1WjqDH8Q1WbGv8BaKv99ttQfU3yjYWHMa",
  "key20": "Zxq8xKGLFoDKCdqbt7kWLKfDoBAYzfs47ZkE4NLqTBqATbLLue25NqcauWoLcNpBo23GGRQMUAxwreyAsuS1sx9",
  "key21": "4jyW2jA2ASj3SA8Rp97WmncMWMXBcXG51K416znQ5KTLsk89BqC2412H4cSDehDnMrscHPyj3ZfFzzxBos9wp6JV",
  "key22": "n1p1x1ffnwE7yLUvi3KuiK8VhiRFsRPgYM4bk3hCTRsHjWgTcqz7uvcpYBszzdFa6L5dhy4cKijKueRUvS5PUy8",
  "key23": "pAB5UYFJcviWviRfJUCNT41SsczNVyTcNoRx1xWJBFn56b7kZPNJhmdBN4ymNsPTCsFtMQx58bz9B9XY9JrTvyf",
  "key24": "f4JVxNHVPdHJjBqCy9K5xji3TvDu3wJ4KkFP4wvMKscPCLvFH37wPed8ZQfKZTaA5h32nAxRDx4jcyskQAoE8z5",
  "key25": "KL4nGQNm1FZE6iUCxRfvFHLg4ghF31qWntMpY5qkQSzavxrXBeekzf24az4DGDDDUUDzhGkYodfCK8VhvAKCHPY",
  "key26": "o5JExF1BFCJMQm5uVuLMnNpFgBkYLn2fRCWBSUoqCAKj1XivUJeT693iVSEknPA9MFshAYVDVmNvWEKmgcnjg6P",
  "key27": "2ntb6d2o7gJ49zDa9YMoJTmjrPNVnrJgCU27vVqt31bLGamM9cewQ7ktw2LyuQB9zaVgvsaxze5GphkJfzq22XWf",
  "key28": "5NmVXgcdFxPVwuhAn1YSv6LWagyMvgMmhqDer2QbtSexWCCL1sYuxNdYoMXw9PEPmSombgVhPGWyxKHTAGzg1tap",
  "key29": "2hdbQsNeLwLHXw9AWCnp6KhQdeZHjU1MgRV8bPVFp9cZPHyKBsj2znPprM9tQiCSJJAvZav8Ka46xpsmkerFvqxS",
  "key30": "uuiXDXag7hmpERitHamFKE1gKnyXt36cJpaFkv4KjR5BWnJhPh42fLLzYweYQFX3X81Z3LFcrFufhi4MNLpX3TZ",
  "key31": "8sUfbHWuLJMvhedkLdxtLDjqPcAk9N4rPLVPmH5YHHvGpG2yguhX5HP5uf3KGW6wXx8CTbErcqEbtu8uG96ZrWv",
  "key32": "jJ3MAUEKYbQ8kZHyQHsQM8GS7raGNZLMd1zDyAVje4UVydmnoJ3S3Y5QpAjYJ51J5K6HNKDA3PRak4KUL8GvxZo"
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
