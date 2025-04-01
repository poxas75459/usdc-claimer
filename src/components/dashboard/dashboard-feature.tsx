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
    "3PMrBULyFx2mcA2sii5VYAmwcMGTdgAg8K2QPwco68a8YE1g7g4Fi9R1cSztzEuZ64AbpmBm1pXZsu9vns3KiGtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggbDPzgUJzHS1K8zgvykr1GoDqwxkoqEFf1R29mZeX5p38eL7VpQPXF5sHRoX4Robi76j7SiNNmejmC6kF9avrb",
  "key1": "39LgDi4Wq2w9DT7cfeHc9MG8MN4xMrjaTjeVj1hLRnboJDa9Vhnmq5sES6aiJmqh7HhUS5H3Wzfc4TnuoeWPs4a7",
  "key2": "38R63CEV3fANSpMwoDcJxyLcGJD32VYSw5GNRspMAbTw49SYgxikgyANzh2a7vj5BGTMfCZFw6zPtzNuawis5fox",
  "key3": "5ykFcffTfLD6jVTSNq2kMtvLLPjSfjRrh3B9UW4RLHDZUTybbHndThskS4x5EGYs1t5tDavh7zovL1AmKGeHSRKs",
  "key4": "2KeiswPGoLs3ed4JHDyGFzcf1DHk8wYAP4fSYuh7zHAr5vvN5bGnsKM5PeaCnkcbLv8KrBvF4bfbsuSiKbesQDSH",
  "key5": "3CFNf8d2cKHD1cwHKdqKf9weU2igMd16kNRXMoJFMQrN2p2KMW1WPvHuLyeAfx1kPX8aLx5R4JTNyJz48a4fV7rs",
  "key6": "48VFowPm4FQvxMecFGQ1XQEDK4N56G4G1EWr2THoAYzeNp9yEZZnz35x1WF2mPoerNJPB1xWmE6FzzpEPVa6SeJy",
  "key7": "52b6twNqjyZSKFTq56kjZsv72DmtLha9Nh4pwiYxePP5sBjhEqqFGufh9SpfpYAr6fDy2q8Dbmyka2cnoqRiPA6e",
  "key8": "44WhSeKXXzG4N7Z8xwwMQHknyN8aerkVgij5ayaKM3Hucj6cPQ9oiVdRWLVEcEac5s7DGMeGMHtkaTL9z4h1iv1r",
  "key9": "2XiVcVZsGZo4zfh1f6ALcjGqovUKqX9NRJmkiHZ7h6JDcwvRkLcDmzEm8JQ2C4VU2H85tVyWP8siHTVgAKVs5dNW",
  "key10": "3cyErM6N92hTA2N5EvNodyjcZPp2YxRZLCy5RxjyjuNdDZXsoHDaW4pKQrFUJQ3a9p9fX1AToUFxL8pN3PuDXsYK",
  "key11": "5Mcetn2gXkGTPdPGv7LgN79wspEAREYaj1g7naWnHDgqayGsRLXki3ijQo2y6DQRt9qzP7xPm643RAcUSAZKWLnF",
  "key12": "eQbZzZvngvkCx8VkVp2GujvBaypnrXD1VQK8ASSXvrqMN4TmYaXHX7hrsnHiaEKsQ2tDpjRVtCjU6ECHhKJZUFi",
  "key13": "M7FM5bFEFv2CiqhnC89cA5Nfh9JZ4Lv1QnCBVbFtsB7SVhYHGEYds7fX29nwABThYwsZ2z6oNKiaT1SVHGQLFU4",
  "key14": "Xxsepa9hYypkixQgzvsT18etex1spj5KLbNwB1AGu4ywad8KS63uuJwq87qjhNqN938WagCrjzvyjDZphcmVpn5",
  "key15": "NuRG2LSRg5qEhiQHU42t9CNpkVjgWPRYLFhyYWcP9Lo99QjSAg7TXUNu5yTaC8RCNgaAgNEbFL7VyKs5KzG5reN",
  "key16": "iHHr9mBsvnL4yJAiHLY25mpZtN1MAnjfmrAUKfr8zNgYmhyxYK6pKZyQTH4bhcjzDFzzmAUqYjtfpMnecC8Mdy8",
  "key17": "NyFWw6Wa4ZpUcANAo7DFAmuWDyKvYeousXZpd2BNxSCfbs7S3cC11w9dcapF8Wf6PaSVBy8s8H6q9BR3waiTZXL",
  "key18": "3Lfj1uSarBNzbCzpWqBF16zLaYiyjXzQnF3noZhqmqYPYHEMK1XtLspo7tYywSHC9Xkz4m2wZpvszLUjJSxVVnqh",
  "key19": "34LfgTySohvzB9ySdbiT6hVXm4tMj4aaN6728J47j6crXK7PR1QKDdPJNVNToz5Z3EdrCHW9qxjLWhv1EueC8tkJ",
  "key20": "264RK4Nv6gh6xTqVZWbfXGeDsAaE46wUiyzih49RncVQqhSrp8b2EPsVBWpfqavsP3GSuCY5bgKSiXnt7hikUNHz",
  "key21": "5xgn2hAY8AWyZU3YAtoM6qnRCNJFsFRKtq5PjRtpvSewNnzD88g9dC4yVuij14vRRHegoqY3UkMprpsXxtDq8RJW",
  "key22": "3M1LkH7GhY7kZbvZGDeB4DSftnyy8RfvrPp9svRwcWRtuaCmdbKGhqJ93EJ1rLQz8mHEPpx2nq6ZAe2dp7aWLPVF",
  "key23": "5EzcLRZ3sr6LcVNximsx14TDgzXaSLGptSVL9Eaw3WNeX75FtWcbdb9WRZJvFqKX163uF9rRdTBTa2w2e7hA6GPP",
  "key24": "GUTcVhLcLimmuQWsR4WsEQGQJikp9crHcS1J1gm4E2iQMdn8JCKQMfSQMUo4BoqJ8yHAN2AjHkpn2R4dJqZ38eF",
  "key25": "2Em96vZgsC7sX8VUedT6NusuTTVMUGc9of17eeKuDmBrgKwubqfXiB3r8xXhHCdoSd3csqvvDMUs8qwsG6r6e9dS",
  "key26": "BV28Smyeh8agzimp2htV4Z251HXPo6U6p8UeD4UKh3WBidAGZWTRuPgKoqzYHzc8XkwUv7LKRxEtM1a3YdYjMpw",
  "key27": "3KsxDFN4Sx5Qpm77Nxqae32P5dy8rtYbvW1CMP2uayjkv2wBK3ADD7RePDAuu3mfDfTqbc2AqpZ6GGBgkoWM6eEn"
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
