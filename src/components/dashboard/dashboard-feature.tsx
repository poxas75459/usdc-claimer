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
    "QvHYKcrjwfTpxpfnyULA6n9jTotEyx2hBxJvhoC7km8SBqeqPFbNrmDSzYMLAqjBBS4fXn1JHjsdRBGfB8ibcdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSWr25rULvEsczi8jFxtRLZ3EspH9c9PfDaqq8eFbiUHpwuvEPHHvgyjZ8zEeZZtkc71pJaDEiWJCHHNz8Tjh8U",
  "key1": "3hPzkujFH7rKEUmuC966QMQ5NJxnbooEyYdPkafqu6F6DFow5QDUgJCbnqcTiLXtEpjS6xWx3n5rpCPck1PW4u9d",
  "key2": "4rL2cySCnHH5GjEubLQ5EA88aMJu1zBBQMuXnbARo5XshD2LyHzBHJYyf85Uuh2w9EY7CuDuNSygMc2QLhaZMEBu",
  "key3": "hRYVPT3cHhVQySp2mabUYxi9BZVBqf1h8aQzHZ2WCWAXbGHJqDacwmRMQtzsKYid1nHCTgazorbJ6NMbJ7Mj7sT",
  "key4": "24iCbWNQtC1cfopHQqamhcwRjXVcsyB3pHoRYiQ9ctYrh77XaNEuQ2hzhB4jCEHn2wfNpyQhmezGPUyESaWpqjgv",
  "key5": "5PYPs8HgHepWjMo12Sc464QcMrLNYxs1rSxaMWgwJ8F4HCBPfX8z1M9TPLv9454brpEBq59UbnSEsi8u7LuaMRpi",
  "key6": "3BxmmaseXheNgJBbUpx1QQxWoiD36XsbtCE5m1tfm5mAhCyxQ36rcgBe41P7LenYxjJQwhL1Nv7aV1qEU8Jg3cLK",
  "key7": "5dJB22ZJ3uYt1V37xKA17vUcq7mDLLnQm2muaC6FLPjZmoCDPrni5sM32oZ2SFv36LrjTAqazV2m2CBTMrJYgsBu",
  "key8": "2EHZf648amYbBnwaNwrP5wqPek5YqyfQDwkc6UZuzSzYJgDHMxTTpNkwK4YQx64Vpfap5rEzNT14byQU6HtMNwrs",
  "key9": "nZ6AEUmgD74Q7Xw7S9p7Eqi9WNnnN2xD3CQSs8EjqRKHbTQJBGZMQbmJXpqsC7KUBNYuPMboe8qkYE4Q8esXwBu",
  "key10": "3iGkRRAMzF6yFjU4jpCwqoQHS2Jg6oBZEGzvVLsHnmfSy94xBuoEktrq8BPaUESEfaYCR4k1cUQmLDLWwq4r9s53",
  "key11": "5DLHcAawLqio4ta1kz7DECaKFdhHMzxhpVQ2Zit5fnNWQ6WqPfAyfsszh1QPjydGtDtCNpdUqrZxuBbWexUyBmt5",
  "key12": "3jjfkgGnfSNupF95ckcXB7A6UkAmeUhETVeyPqrQMJqscKgGLURNVbCfc3LTw4ib7L78HgM6P6r58EePjrdsz7WV",
  "key13": "4tGcuTL5pmrm2i6rKEqyvn1ij2du87TvQgowSNxg3jiPPqDzdSdE2dciSTnNyojYgivg1cjp3zLyt3yPSJEPgu3d",
  "key14": "4AvEKBrNmn8ZAVvXHePUwUbd2hYiQ5jQrHyF3gRxFhKVJuxZco5y2yiaetowoyZisQCutdaQnJhupLwJ1nNoRteS",
  "key15": "2UTHgPjNPkA9kMiEjhFuMFsYaDjaDzFrXrvvfcXbYcdFMq4xAhEeEDkK27VQpb1hgDXTgT5G39QtuQP7D3Mt2jyy",
  "key16": "4eTbcaZzYQw7Sd8QroyAqyZUgcLhF2E4ka7pKPfxhdoac5R1v3GxoXYLDraHaXehnvNcXy6fdxBtsK22Fr8UCy64",
  "key17": "L9zh8oUqjfZJQmv1zKMPZzTyxDP5y42BbbfSwXqoBHqpoEwL2iK1pN13JeBgBUPVzyiNJRRty43AVNF5DzrwMzh",
  "key18": "5iLg9vyFvANCF5YcF18iqXAjwtXzaBXWFWvZHVNWG12kjp5XMY1jq5jRxamu4eHcQ2yRa5LVKY8JXAxaeVZKWpt1",
  "key19": "R2x61FPgkLoYMURqiS8bdUfximPmcTYqyT99T4D5gv2Zt6tfgZ1vUyhkHs1auEgLh8wEeCY6VV2rtdLGQDrL67w",
  "key20": "4pVqbm8BAn3nTgrpQvb4tgYr7WX9HbweU4mA78arvz2Z4M6FdtK4SvgPY3pygMdxx1rKLfkuJK5DG2R1X7z8SR19",
  "key21": "5pRrpoPG6qht5LcvXQfv4iswXUnnTiG4gjcCVU7cskTnkMN39iDyEE62RGVeVR1c2BAUc61ihQRQvdsBKF1g4PiP",
  "key22": "4ktGtkW5VmPkHfNGfhjKz2PesxBvZabu12W6iJE8SUZ7ZM9N1cuMnYyEG5LecBMubm3UJjwz6zboCPvDjf3UhpTe",
  "key23": "3Qi8D1d5A7feuUSuipk9Uda52S2xHXSSK8H2s35U2GU3sbXNT3jEExc5iNfXi8EhyjLDFKNSpyPzNYxURsHWUQ7x",
  "key24": "41THmYd81jcLF5QR2PqCdsZcTbsMADArDnv5j6usmXHHT1Ef9SQMsJYy8ivEKC1e31H5B9HpUTF8btUprgPyrmYd",
  "key25": "3hitTNwUewsqN74Gnn9F5o18ky4S2CbuK3X5ZvTrsLXnMA4V18VnjiNZujiUS98vUP5Sq5aytkq2gJ7LendVTCYN",
  "key26": "5q63fC9e8Zwusbp8DBkENM6kLTVZTkxYQTsAcNnmm75S214Jp5fqbwcirRHNqakYriTvGA4amVqgn2hBCSu5LZrV",
  "key27": "3NsT9LfVHxJh67YQnLi6AWSZwmwXcfPg7CvRt51c47wfUrB5bGoDdL4e823RcVQJizhgddKSZbRNrct8A1oYRhQE",
  "key28": "4sr4fjU9tiYCRqTRXeDtKoQDBYvuwSg2oY8TyQTA3yBgnGSBBEg6gfwNdRC8nbgarH7j4PiwJvZqb9Y5U7QaYNTE",
  "key29": "5XEECPygXyXWxTcXExkmZDztXWWVeiuVaSCMnxcfxvjD3qEdhEa1cRm9tMbXJpvymvZv91Tr2BmLvGg2QQe24k8r",
  "key30": "gKNEY7YPnM9E93o6tT6NSDKKhcU3G6KFE4iasekfJ5f28ucfvzrxBpzr1Nkr8oopcm14nu1e2AonxXmLjQGGt4i",
  "key31": "abb7oNZE5k2SRvnHLuj3XhQ75w5SKDfeixGSTN1MQgCEZGSxfTWwFR2AsGBLAeWy4vpboQkLR6GBDTYwJVW9CmG",
  "key32": "xHhdKpBPVKXn9XPpgWzDuSWvT15iQcJUpAJjykkjVVgLqpPcN6V4ahnWMhFm6R4w4t9f8jBc7V1GUK2wzySGW1o",
  "key33": "41NMz2Sdv6og4QPZRgaqVhJ9VBzNg73Hqt3zRkJHKku29pf1hfoDGNpXWeW2ALvrVQPSRAMjtVw9Kz1QmgW4hTHU",
  "key34": "2ueding21quDUeUFSVY9roodYTpZ8KsYziPEj1WYhYMnEq4ufzKHBcwMsJQ1zBDCZytE1uGfnJ9wumhW1WqtJfEb",
  "key35": "3XbRq6LgnNeAMqL2HPSCs82CQmtPaSiHBq1Zp2AAW11njoHX7ekRdbguN8qKcDx1agbKSUk4FjAha892TuJ1h74E",
  "key36": "UNv1zQ3BaqWrZL8ZRv3g6QZJgGP7qPsGhxnSWJCu7Frw98FScGCmCF2uvyKLzMBtdsNyyp4nY6BUbuYz1zvSFFH",
  "key37": "5vqjSHKhm4vfSj73fqZh3NR2m83RHXpcg4oPuETA9MYL9sBJZ7ET349Wtm7rsbXsHwN4q1fs9F7J7EJizTJKn5xv"
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
