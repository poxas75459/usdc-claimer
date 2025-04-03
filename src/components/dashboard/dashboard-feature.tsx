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
    "2vDL6UTynSZusBJEWDeSUpDnWSyG5ToTtaD61EQuLGojfEPYhXGbkoiLUtvTNofEnimtGRRzx7dYhKYs4NB67yb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YU7ztTZYh3GuyEJWAWDK82n9Gt7RfNU7K2hLt9rhF4q3Nzb1dH8cVuTN2Nby2qPSC4ZTCA7NG878jSEnF3vUSSs",
  "key1": "5rUcM812jcfp9o4UnKTA8xVieykXnAS6ppcDV6NR1knyAdBrRH4UGi99gDmPnVBx4FqyZx9dVAgSfa2f99sLJNvZ",
  "key2": "5FH2Zwe7WSnirK4xC9xXm3z9VjPP3KPaXLFYrhspJxdfLsL5AHwxMx4qjeHz9w3oXXWSrcPrLf55aEHvsWJeTnac",
  "key3": "2s48hxsSMUgBwyCDU7XfpwmhhWrnC28FhkehPnUMoUBX5VhNMpFA95RYa52eRcERy2n1ZqFhnhHQyGHr843bYHyz",
  "key4": "mRY6MTC7njqKepdFPEAMhn4iJ1qbZy1SsGJ7S23CdioBqumjkui1xfWZJqW9UsNP6ob1YNufu4H519pSyCPmtRu",
  "key5": "KsUm7tCCyTBbwHY6gNMEWxUJPwFVDtWMX9evs3uAGKxFcMuMVJ5Jzg6cKUogZAAyf8MpBA7A6728NzUnCAz3Bw9",
  "key6": "7WznqKPrv5VxWdgcdXkkg1im4R3wggmBaxmH5G4PHeqKgMpVdTH9hMaKFWG58qxEF2b3wtZrcTgoPBBj9e1wpKa",
  "key7": "26m1sorY8f84qWDYLX9CtFBzGmzRGhKesMJCxytbsFQjdkzbrhpzxnQFaJs4hXW88LZiHHvzqc6VTSg9WoJ3npPB",
  "key8": "2JYyyXycgL9qHiypCjQLEvRUo5WjUxV8ZDw7h3ob2QnwCLCJpeX4ZbLgTd24a1dScGLnKeRwVuaCY2MQ11J23CLc",
  "key9": "3Mc9Ywebf3CYjtiAJEd82QSpUSUohLegfvvPhSMsXjXSb9N9ZSGrGLPjv2NcFH7tQb6qHRtmXKGoMgMxd93YN5qs",
  "key10": "4hsHUifiacaKGvXktVF6R4ptYtMuHn1HSzYjXEvZNN8ihuPq67kGHGWxELhe94bhJB5bjNDTDv8FkfP8qQELnDLQ",
  "key11": "2FGEFaq3NvXwRh8srEcAMLPp13HuzpCCS7bj3kcx7eNsoMGTcbTu21ti9eZPDmBhr8DzJ56N7XVgQuteMdmkjJAN",
  "key12": "3B99JPoVsD5ZFcrpqMDfciKhzebehSV1Cs6ADduwh5kbVxZkUY3VNqikrjQJEhPjjVCZgeVE5L7suafjjmEbaBAY",
  "key13": "bfvkjuZLb7XDDN8wXWXZcLssKPCZwNXBqeDD5CAAqCE6ZjbnHgcr13a61VKHbS3TMJLsqyaa1zJJ55mAiNbgghy",
  "key14": "LBdDQj3eScL9fvqi9RJhkAwM7dR7fevHJBKrbFNjdBg5PQPBvDxNzvpKArMukfa6wu9aq9metFMguLgDFchGcLf",
  "key15": "4LFYBoREDaWDbmhG2aRogRYwNURPkABxALRqSGVf9RrTb7uc4Uw4dVSy7whzmUuS5xmDjqTdUo6SjCF9LoB3QQos",
  "key16": "4goeCJxqANPinqEmL1G4vhB1yfGK2R4bTbpL25zbQL1X6ws7vv3iE8m2UwfBPYmPJmg6MQQGcnXAq8QvqMetJKBt",
  "key17": "5pZ68P1wGmztUdThemvYU544HQSXVV6QKLEMVgffXwpvp6yvDtgJQhyRxmxfGpSLvfqBgCBvHqoxYFWxA9rJKT7N",
  "key18": "2zi3TVWhAd2YFQxUpsrFFnww9caLoE7eFaMVNkSSPjHZjcvzAb49ERGNDUmGjtDyTMD7VJJXoiEhmbGminRhcg3S",
  "key19": "2ANSmU2ve4cFLTQKDBZ2c3By7hdXZKGT1uk9UAvgJtntSnxDpZ8mapKykSGyNYRWtmwZtCuxH2w8eeZut7Ue4DAN",
  "key20": "5gwT8gEAVwLuoYDw6D2sDC8uDY3StdwC3pP9eHeBc4nYK9z2S7191t2G4s4Hf6FkjNDZksV68RPMV96PJfFQ5EMZ",
  "key21": "5JJxeLQ4NqHd7bXCnvGN6YTxPErCdKKnJc7c5Mgt5uYBx166SA1oG24SGrBBPB5Z2bX9hdjg18JvaNxq61H5CBua",
  "key22": "3qLDLP4RgiCbwxvJRzUa7aeAfsPeDLtebjkEV3Jzb3voAS45Ss4jBRGqVyje6DbuhKZ9vUu9TpRdnMuiGLutgr3n",
  "key23": "2ATFmmETxwFAwF3jigArttJojMnnFH6HgByFHPr2iLKaRiuJei7mpQF9CCcjk2qoo8kd7vqwGvruHmUPQqKU7oGn",
  "key24": "WPwCNLQDBb39g2hRmApyf18fouPbZcRG8DekVJsFo46z7W3XsqBmGKzLjqc4j179S21KfsYBngk4yReEqvLj8Lg",
  "key25": "GaigXPkGA1p5pvPXgWoVbnroxGE4U8grjzSARfKAvXzGr5ZYD1nCs1P2TPnYR6cnssLHAnaS4yRS29fy9UqvtPe",
  "key26": "23aswpxqCB5EG5GQUYsBuwkQARcBudiv963U29xk9rZmtDwVBm2TB1pxu8Zyvo3wLAKmx6xtDiio9MQ7up5Pjvoo",
  "key27": "4Nc32MEjdff1EUc2eqv31BSzariks5JKxs3gysyuPC8PiMgnXn5YGVTJZ6cDRYzjTDzBqWxMvQk5rrCxHBK8po6U",
  "key28": "4qsKnaGwL7yT8hJxycftXJQJN8CKHY7ZphatHBiG2GwCrnmcnEduP4q9zKt81MWg1tJCx3RWmhkT9c3ezwKYeirm",
  "key29": "21begX5y1xG8RWCpX36vKzhcQm1fWioxBoA2KqTAcVgP9TCDqizwFkK768AejSRvZYGYbLyBdgpACzZWTsTgmB8c",
  "key30": "4bqCtANgq3KTBetEu7BP8hh2vQvgrYYS8m2kNiXMhyfbJUtr4mLrQMt3Rt6nmydkJ5geKcCn8awMun3Gabm9ED5K",
  "key31": "4p4wVK1GgPTweWuCMQoSg3nTCcmPg6FiYnxmMaEKTYYZziCAc7GdXwTLpD59H77pwE72ooEA8yC9dBqxe23S4Ff8",
  "key32": "aF9PiKxJSuYV4HwQujN5kcgHJS84kmDqotjeWm4wwzFUjooZgbuwFMZRFcNJydgMEddZCQ3EsVuMKrDc2dqFc8m",
  "key33": "iB8SWvyeo5Mu8cmQj6LNSzXJ82DeqLNrpTfMpgTJXU6DwcWUhvhgih6AfrJdg7KCX9vcY7kxDhTwJqHBEBMT26C",
  "key34": "39yQ4cvuzTFCHEHrRJQaHFSd51uw1mJmW75JzinkVU2tDd63BumM8U6d3fw9pNhqsJ1sBEWZ53XpyFJG48VkwAB7",
  "key35": "Uy81WzL6hrJ1f21ogvPEcDkzgoGQtoUiiAnnZ2uMYMsFhgdVwi5ru5mAcXnFEAvDokhf4y7i8SUY4fLcmjKUJ9M",
  "key36": "2B23hGh2HkKzGb1B7MdvptDnLYoRK7eJs9jnKqAC8pybCTiey7k9ZZb25ByCHHaRhFix6RhW4MGZDkHzzvGa3vQW"
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
