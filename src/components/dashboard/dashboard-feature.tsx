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
    "2fSiqocohCgXC48UjKYZUpj8q8V4nw7hSixvGXwneQVg9Sg3hVuNgTLMAv6m9D5HUpKyE1FGv8KnEm6C8NpBMoJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QpYtukH2dwSnT18udStfiP7BXbk8kP3yiB7mmAvH1ZbehD24XyuijDMBRsAidAhhy61C7NXdJyR7AUerKd5ZEF",
  "key1": "YLQnXWXXmDGJGKqfsiYbWGJYa9z8UNT2Jx5uXSTgLhGgaCzepHiR8GVr4is6Mp68o5QgsaQawzhmBsBM4qgHydg",
  "key2": "4o8JnBJZcJoxHVVd2Fj1ktTRsXULwffrYDNnRoM3x4tMM9kr9hReprAEiiQHaaBw1Rv6xWvcW62ra15rzrKtSTCY",
  "key3": "5LWkNMs6qR5EBgrax8E6PuBXFwXVWETByBopdztqjKozCSUZLASXnB7Db9LMXG3hn92KP5i4Ke4dtNoX2bk89ewL",
  "key4": "t8q44M9dcYD3KDjKTFNefFbu3HK2tk3LPRQNrYz3jvtzFvYtKKy1U5ciQ9N7dL7Wg3nGvaMspDBfffDSpSKe8Dh",
  "key5": "59swFSsYafq1s5FVQ8yERBcDezysNR2dU9CFLi6UtHw1ZdxvJ3YPXuFz7RY6TJzwfWNRiWbC11kNFjUBuuP3EUgU",
  "key6": "2CxB2w3ZmPXfcrsLfr8dauXjq75CKTdBRWinv98rnjA28dDRaMAZmuYNSBtjFxU7quY4o4TXe6TJuFsyLB87JyFc",
  "key7": "42da2pedCTg81bcAGFF57mjkar2oLNqg6LwziZRadAgsQvybSXxy6Drbsv3YE9YamQgM5SiR6fmY9wKWpwGvb1mo",
  "key8": "2PMrdh67QNE5FXtJvPP9L6XEuEhJp9tdDzdmcRdoThycYQMUjveVqioM3k5U4hHQ6xKxre6qaUrfPECuT9A3oMG1",
  "key9": "Lr7uKBBSB6qz5qEBNQdv5ruk1xCoSX2SCFp3V6ATbXyeNynSfxDqX2k5Nxzjxde1pYkug9D9Y7wFFsjmqtQmBYB",
  "key10": "3XXxxbYZymjhxuPi4871UCBaXyW2DUw8WMqcpQB7yYKqVHPxPCHQA6ekwHPXC85TauJzYAjKeJpA82T4XQvbsuPT",
  "key11": "46q4h1vLhv8HvrjWEv11v8zDQh8PHP8Y7jPurCUtRXJq4KJkYM72RzLopPsWPvD4Bx2iKawKDVn9ex4a5hNRAMcg",
  "key12": "qpynbq9Ut3uJkiQ6vBQsxVGJpkPyfJRGmQSVbXyp4z65GvwsiD6xfnxLafRt6jDx2EtwvneCCTULb9B4cvfgZ4C",
  "key13": "2kQQG2Fd4A1nKKXAzPXU7TmUNUC4nCCrpT6iqnmgsqg1Y8yHCJgF7JGnx1FX2dsNJJkYCLKGXWNHvSmy72eetWDo",
  "key14": "36WRo2HbBHDPvSDXAywBNqKgv27fZ1TWXfajm9hQEohghmG98QQtgeTMAi6f4syh5Zb8zxsb5kaqrHYADHVZnJjM",
  "key15": "5KDgHc261ZoBGGAq2YtRuywLbptM71RKRqvssH5MkzR1a71FJinFu1nMHQG4Dx2LE83jU9kzWpUbMLNXphDNKKo5",
  "key16": "288nTBusfvhv3CAYMfhEqinjvT7MkrboDQQgbvmgZavdBhAfu6aDELqQKNStiHv8ALd1nxMZUQWU3PDgWxwBbdVq",
  "key17": "4GLc73qRBFegMPqHoM4bbnyeraMercAg81hxmbQxXT2CYwhJcjRnx4qak3syGv25ycCF4gtvtZdzN448iboJknMh",
  "key18": "3cUwAK6UopzpNqdxgGRQeQLqyuDa2Pki6nTKDQX2TwCJwmPzWtZ8CQ6PRaEeL1URzxKvVorPXeMNon138cGUW88B",
  "key19": "67CyeYyswShEgbtnjnrobpMxH51Dqtj2tEpCQB7tfe16pUKFPz9cbWAFSDevpCKvJc8A1ZVFyKyJ7WuhzCgDgAHS",
  "key20": "4Pqzgov8d4RNgXng9hDsakDDupAaAMyGXGWrHyF834giazhvbc8viLTz6WScyiMS8AntduXcKMD8m2H7mFqQVavU",
  "key21": "4h3chkww1HXbas3zwf9MB5d2xKZjLBAa7R1otW8DfBd3aiXdX2b2ZfwMxa2U1uDqtCV3rFXEWym8zhji3YpP9ZKU",
  "key22": "2ovGA8woffeR2EoQT2QcDcMDbyZZuZthqwu2Q8DBMs4n7GLwJ4Br2WRTy7D8QML5heyybFCyDo9FxuTt2JXQVZ7V",
  "key23": "4WTKJLKDVoNGr3c1LaarbtxSJYCdYi5d8gRJj4qzevCXjdyz7BvCMyKzuGCgYMTh9T1bHar8NUbX46UhZGckYKcR",
  "key24": "4MRGpcmMzfBJpahr4yBHNQz56iMGqovLnC1yQyrJzJJgvRnFh1jFtQZ59ktE3mV7JXw4KErhJ6aTEgdBn3ogxtYR",
  "key25": "5yJLM2gAN1ygpSU6QnfjAESQ6eyvaUfysApGTS16NVZz7bqiqZiZ2VXwQhXwQuCvb3kHSC9NkEmr7V3WNsGiJJGt",
  "key26": "2baNZCTxzPTigMUMXVCJxSedMRGLTczh5uzrKeXFMW9PTYhLmjX6ZPPss2KsZCWwM9Rf7iR7i6tC4T4CrSzn5Mrn",
  "key27": "2PM6ANTrYsU9ogEBvgXqDxASt38L9HhGMWABjrEp8KqwdbxQXvg3Q65dcjTrokaYFoSKHWE98umGhz99CDGZjqx",
  "key28": "2FVCgmEDCEyd37ksStAoQX7p9n8QWYpVwLaMPxazobfYott45sWnhzHw4MByXDGaSXJvF2gZAaTALePkxuRnWDNx",
  "key29": "CtBYDUpMNwsVZekVEccddZn4sKGqWu5YNZxisMaZ4HJNLxVe4JBpbFy8pxru9yrW1tftXvNzfNb9oKhSLVdYBLZ",
  "key30": "3zH228rApsJ71SNrzJuh7biAQY9bx6jshoqRxbqZrHmVKvy2ot9kZiCKuwQQ2WFJDEUo1jH23Xmwh4vwyxD37Br7",
  "key31": "3bjay3tPMkbbzDa5ipinCLVYmXt3gQoPwHJhDJ4TXj8Mggec1sjV4CX4pogeRyn9y58DskQhikSQyyJ1Gb5iJbcd",
  "key32": "bCDZd5FzonNb4gdc5eQ89YXPCFNB9C9LBeuMzjHhNUSSz5Mvv3ErpwRNvy45e8vvn2wkuUcbYQRWBYxvuTXbZVJ",
  "key33": "5QrmxDQwdizMQHY7ZafoX86WXdPounJcobmPVxieavcRZ8VpgZeVuqDHLUT14tuQiEXzazg3jefSPWSqGG1Zh4KC",
  "key34": "2gjWLe7uU6yTuG6cZWYu79cduXKsykrC9vnmEzN8S6N7QLL4bGiHERpqW4XdDyaMA4mhgUbXRBoVefLXEiANxPPT",
  "key35": "23YAwMmoUBdbmfYVd5yqs1wqRTXSgjX6qMEVX7mH8Ei59ee6S7cpJekTHkTnoG89zeTRyQ5FVj2T1c1zYEkbFadx",
  "key36": "4rUKv6AoiSAYoFFZBKs3LWXqMfYyPSrXUpotw1FZv6HsKUnqRwMWRvKH6VvL2NVhstxNuuU64kV8r7jVztAcNUaQ",
  "key37": "d5bedSyjcBcox9ADHqwY1cxD6m68fr2a6ADfwTnGNG6afELZgA5q6mtmAAQrGhY6KhSrUMi59eJz6QEkiirekwn",
  "key38": "3GScDLekpL17FoRmqATcFHJkK2xbBnaWXTLrGtjrNZ1HLnBNMXYNaXNxVuYEJSoMYB7zC8vNbxoPtBui5Szin9nn",
  "key39": "47Uu7V15mAbaoJgoPYCgkvQ9rQDECWfFKLt4YnFtpEm3zj7ai5rs7bwWRFo8WjaJVfV4s94TWNUGALqkJ9Kftvc3"
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
