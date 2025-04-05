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
    "4PbQdx1LjXE77gcGd7yymigX4k5ahKqdmiVVGPZCQwy2RKXNWkx9dXe99aJ963LgstHi9ztb1unGqHjqgg3NXq6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UW19BxQnBtZrH1Tz8vhuyTkxXyL1PigLt65Efi7JuCpxsQrMb7SA67jeS3tTv5LF4KbGZ5nMK7vNehoh4ZmkvUx",
  "key1": "5Wn5UZzkCm9MvyUbLFAPS3TMK761YCs2HFPLkqvDL6YfvPZWNqBV1WFjLNiMhUzNENqzquLAd7K3GMqpXzanKjJf",
  "key2": "5pg2cDDtypyGYe6ZQHRu2wHyhdNAr3SNayFCE1oWvsDCaa4shArxgzQRnLFR7h9om3K4PGcjRPVQhi6HHgLzLkwB",
  "key3": "4uEmrSzvmi7kftoiZZQb1q1bnQ9dfo9ivYAERf5u7P7eYaSXqiR61VjM1pwBb2P7H4JCKXJvBtCuwNvCzfzciNBb",
  "key4": "6vt7ZUtHFYc2CvGjPCsKNqEKL21a8i8xVNaVic7EDhgDqyXmouAddYx1GzeaCfjnC8JGjAPzTiHZpQ4wRMb9Sir",
  "key5": "27HutzJorU438vuPrFLKGjt8HWYm2Wypmy6ACiTzSTTYSE8UduQbQtq8AVhZNCbaNcuQQNCy4gjqd4Y87XCUe9t3",
  "key6": "2xjGvQm2YHZXFefcpsbvp5HdVohkJKmHNF8kCdX8C9xmLiENrZxiupWRnhwSGt9X6tM1Qa7QsFeiL4arAzxyFxC4",
  "key7": "34wCyze19g7EPZjbB4SnH4ri66rJKgetywtSv6WcNai8BbQ22hbastrYNPUwepDAQNWWdhHLKivDa7YbUppoc9fx",
  "key8": "57vHxt9qhQHoxgeQQd9K72Hh4ozoQXNXprVgz81qGMBDQyCuBiZjXXvoBFdkRqXXyf2iS7P3b7fgDmYGQGExxnVq",
  "key9": "5CXMTpCtdnicucodfgqs3MasNPMwVBCD3nRo42QpYNdeUeK4NKPL8SaTiHDPxpJEpjMKJY64Zrh8jLKEn6mAUkea",
  "key10": "5vJ6sTd95GXbBzx8GMTKUY2UQpejy5kPUd25YxQerK9xEu5cNGahjk2nGnNXQTY27SFipPuBieScwxCiWqMWrDac",
  "key11": "5KjNSDokpu5wShLeKj7jC6PjGeu912u8mfKVntz6nTUujoBYq64xVFX7TFNKbvraPD82EMSu6PAVV2vtMPFjiTrB",
  "key12": "bUWqTM8mqMNohjBCKz6xbMRrC9ZP9fADgDntGpAqDgfgoNyLKs5TEXeBrZLH2QfVpu6ynvukCkQaAL4BLaDqC8f",
  "key13": "5Yij2mZSF9h5fsgf88jpgba7UFXQbeXZjShGFWZ8UFwXidy6jdEWKcJydrrzg6fRAzTPwdZcD2txCEmKDfwqsQs",
  "key14": "35MmtiUU8W6XTJLcVm8n8niHvXek6s916TErTEKUY83hMrB3mkxnfJDhnDajPDitDh4wppJUs8vjA4MJmhP7fUbw",
  "key15": "KYTh8PRLnU3vaGEuYgE2t9NgEvVMsE8j56SgBXARWG8pviZAamWi2hRodfxLYzkqZEUqZwM2NNXAjuBaMagdzv3",
  "key16": "2Jk79Xt5gjEHc4ep92NzNebYVyS953T5tPrTfnwKb2oFQyKf999btRRJ7evYdeVVQj4SoAP4w6ctcaG2pj3bX5Ve",
  "key17": "DtrR2rmXf8L4isudpyvCix36sJ3thy4hzojsgaU3ExjXVMYuFnT3aRijvMDsoQGvBCwBEjBYa9ykoD1Gf7aRT9C",
  "key18": "4kmiMVwjhYeFxZhJWEeQqWp6ALzdv366zsoypcNV2hc9nbBB2Ak9mPB4cpPmggSwUfkoBQ6Mzum7KEAeiv1TTnhU",
  "key19": "4yuJQzuGaDMxjQ2cAcgFyeJmVBrJ9TgtoecjYB5UhoqzfWzzbUoc8pnCLukpgPcKYBiUqWCjTexjPqNQXHeSdtpR",
  "key20": "59FLduYwHVcvqqexhLe3ynydTYZ9HSFKbwMMeKAQCv8hx6pP5Tp5z3LcSYCwC4EXAaD4pj13gQfpK5bhzvS7wcKG",
  "key21": "y3tfhFW1Ht7CewnjS8WwyFxaaWYTZCCCTr5gMJtGB6ENqW4BKw8VJbBinLu4SHTB68hWQq7KSqHtuXNV9RHhk4f",
  "key22": "3cCUitPFxTMhj3a6AKG4XvqCUF6B3fYRm9ccYmLC8Da3YUiaELXgPdgUcWGoU2WAKBF4woiQ22AvCnWoEVNvcWx3",
  "key23": "5Gh4whbLm1w2SxoyoFPJxDhM1eypx43uopsWBAdeC8nDNqp3jzEH2R59rHH7YnmYWhnyJHbEaRbaksJmxWG49can",
  "key24": "3wY3VUqyEYhwW9ex41iJJFuNRpTXBZu1XkAyrtcWKN4LdiK9ezrkNMVAWYjcZnX6SLHpBMNMxomBBvV89EhMBo8u",
  "key25": "1VxgWWFwdYJCPAbQms3vHMWsitYMBRWreDQf3WvW4GU4SBd65RXfoJaRE1oktTLbff72DUa5fjfGg354XuPdoHC",
  "key26": "456fdKR5jhMAX9zcBAtpuijjwG4unywuw6YfbYPp4QYTY2KAzFjn1yDRdtumaor6KEHhdKw2agSGFUjDPZJmzgb5",
  "key27": "3HYq7bWFKnP8V9Jujzzn6NE2pb2D74PYtjcjFN1qyxrqmPsYX1aN8g7SbdXnVt4YFFCKvN3s1FanW2RHUuwiZvPi",
  "key28": "w9v4MNANwYYFPqqHfemKjvk6C1A9mLQYKSxTs8RX7AdPxdytAiqf1GKJr134TrZh71Lr7BHDhsbTtWCYX4xrqGp",
  "key29": "2cNSbprgYtf7b8dkQj7B5u5VRirSua6AveYPifieb78weA2uGDC6LbiEnu7Uf6eNA6Zi9mKRi3PFopAhPQaFH8f",
  "key30": "26XuAckktozk6AWtSVUUsNbPC9XHfdLUTz7z7LAHS4AVmEk8UzJX7GUTESBLcPC8aaXstncBG9eUWNazyVPwFPP4",
  "key31": "5GkU84LQWugG4wRPnt4t9d5S8ABqVaRtsrRPrES9jpu7zPgHMnNyWoEkvpm1VJgQNUnDmRwhrdfZAY4dgezT6SEm",
  "key32": "2Hw8LHs6ePCff9ihm3LPRquTnyfyAHPed9wPsDxBtP4354PcMnhDkwRJi6Xc4Lau5fHcXbMRtnXhkExqf9s6m8je",
  "key33": "4TGFXPH1Hk9ZF23DKzjyAPw6Vjs1WMEVuzh7zNajyUHPm9tZw8CPArGWSJcWaeJg8NBWgxVRvQME8X5DTDs8yrLB",
  "key34": "4avVey37epNf6J37Lj1seTBMKMNJiLwp7Ymdzq6Qv4BT6RMN1cA5r2n9ko6YxvRtL4U3R3wWm4A182YRRUyUXSnG",
  "key35": "2UuCbfpJPWtWoUNijHSJTRhNj45FTu81NiHFMEWsE8iyGnS2rJpjjLaWgLYZTpYRVsjSYfeuUjfabKuL7oZFBP9k",
  "key36": "63nQ6J31RvXEXbCHfk6aJbKYgYQzxoZHQhzrb97Hkc696xFKF8MNcW9xUraN8E5vWVr8SYAHQXJ6obtTNJQaL4qE",
  "key37": "2CdfFyRnV55fztkwqECTVQ227TM7yp1bnpv4N1yTHD7WgFCi6gGZw4vzBr7rsEsoP1FT1oa3jzF7ya5n1Ehh2fcS"
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
