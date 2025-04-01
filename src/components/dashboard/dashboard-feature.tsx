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
    "SvwKeiVgDK5DYMjP8RQf8KzVnYgM1zuxAzLKJta7D8Egus6mFdQ3gF4dYUc5oVgP96HbvSvq3t2boKxMRD1fjti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Az1diASPiotPVizLLWf3eH4KZsDxHACQgCnzPFAPzwgiWHmKL55yNSAhdLGAjHZBvcqaxZBpuU6WzggZPqgZdYc",
  "key1": "fkWPXeAKjt3nLAjrpJKMr4GCHXMUC6KQgsbh3QPKADsQHLiVxuvvAsFtyrtfndj4Eecesm3qwipNS2kba4d216r",
  "key2": "4xxtBUXM45e2zijBNfeQnByDtx6S7K93Xef8m1CKzLEGSUGq5R5YGJ84Jgux4LurijtDn9LPzxNMUVkzhxRYGcBU",
  "key3": "4W6xV7CwBwGpvC6NDG3HtPx9ESdJdsZvfNgjn1DZrVjovWZ8nxAZ6auXyrbHCizTCS7RE8MD5uivNwHLWE15EFD6",
  "key4": "SzoZt9t9A4SpimtMJKzN8RpgqwfiZouakmTYyBCNtCiVqm1jEE53Dx1kpWDhukvhSfYT3xH8wqi63h1ND1Ddj4X",
  "key5": "41nBx9AFihWVp5aHZHxNYzbB1DJmnnSLtvGasWPZLwyxzR2Nt7EcvAKzuEc9oitry9VxFwnfTtykRPtCq6oYK9d6",
  "key6": "5ftjoX3P53sABcFUk4yQNmkeh44MXFZd2Lem6pJw8K9EHpxBDwaaFrQ8xmVizXRiGf3KaQanhbXtboWnL2AR2Npq",
  "key7": "4wZAyPk62obyGQqb2ixt7aM6P51PPczQRZNN11aGcgSzg7ruVQwk29HVH3vUBrpcAcovoPb2iUNy5UW47BCDGC4C",
  "key8": "5fyRsxMEWG64PAyLrFZS3AUcYZku6eUtDxXMZdodWDT3f8Jt9unmXDVcchTqE4yoeQGJEnyyBmTY4ENdWt8rHoup",
  "key9": "gwUXMds3qp8FY5HY1R3YwFQ53hbyoL2JyJFeAuTxGxwnwUYVkLpcGHbh3g7oYZ1wcrbJJjpxZueBcizvU3a4E31",
  "key10": "2ev7FdWBUB2xetbDvtWSgybfVrBxPSCtzfSXxLGX4g7QChBLwxu9SUPzyTVLNDGoyN6keGMFnvR8nNegAhHhZWNq",
  "key11": "4GNsekdG6x2vr23CH8AaebM2eaJHajHTaP9uFwupyTqfBJ7L5C4EUfXerzDzUT36414qPu4XcuNwVGHzDn5EvCQj",
  "key12": "5qmpqGNQvDVVRJ2YNVG6JY5peKr7Rt9DMrYCFR9F3hibqAhZkLYFKt8b5nGbyhbgY5XUF5ZxZ4P1VhKe3J2tK3zD",
  "key13": "41DRBoPWXTMFwN6SgUMUToPFm9arNK1kkfrsjKPwfi4VUMesvMt4y6BNDt71cA2wC6v2hVJrY2yQm4tChjbeg1Bi",
  "key14": "4W9w1mCSyHncJfaUscGjXyUQ5amx2fonxovbVSQY7bg1a93FYT5YtPAM7PWBAPFLfm635tuLhATDyrTXPnAv9Cfd",
  "key15": "2tm4DkPtWc585hyEN4YidJH6s3XmNhawcLrC9eXJVmZfJ9w5QZwY9i9iVCzMp5XKoFh6bYPEtMXM5aAobNPYTqVi",
  "key16": "5TGmvXFYFURWSgFdeTXfPFVaD4wZRoevUxtUCdQ2pvLvfNiAjXzBYAShqemn7xVLHhoY8C9fcsovPG36woW5U3By",
  "key17": "3gFwz5KggJLQZC8TGPvrgkG263xaJfMf8H7orK4Eibpf5Bv5YCzjidB8qLfgRFeVYAQahno5qeMvnxHJDTFdABvs",
  "key18": "3gzgwsAaCCUjTyMPTatAknNPACXJFRAFC9WvMHMJDZT142NESsXpUATzw2tsgS3G6eqBWmmtUw569KicPPYbrTmo",
  "key19": "2J47uSHpgnsCHxS4nB1nR37hjrWE8vuJzUxfF1QPRMTBXRdaQEf3AL5owvzCRucgqhySwGpXwBxSpadGHYUi6pBH",
  "key20": "4dyNgCQhcVSQF48FR7uhEUGLBRpK43CTARn9AMTYbK7eSKnUsyymERXMSeec97EqyNy8VZVfCsHrdFD5u4wakB6u",
  "key21": "PJQVBfuVUs733nXCsZb5nN2asFrVwV6HoXmYws5DNuM7eWvjjGiD6gfxvvvf6RVFGxHs9iABXS6jvnmd3hUA1SB",
  "key22": "3xRkB9XiVjKkrdftM17MGEDAZDiUG61sswWfoc1nJ14VJubxVRsPR9NEHcC6p1PyBuv9D4puczbJ2tVjYwK1zwKK",
  "key23": "jYDxZkq612wkTwf4x2bXz7rFT3GFrvGBgdBtdFSNQX2Rfwuvr472PH8PnM7rSthfdYeDsp8CCChiVxHb2DDXezw",
  "key24": "4FeWXvPiK2JeMw7DdTHyCjxQsF73LoKJASQ8nXu798RttsSymGfcGwcM48h1KLEE4AYRSXkhmKGA62DiSW6GxP1J",
  "key25": "3W98Z47VNZXjZfxDHVg1zgemsSXbkUff1WCMT9oZMdTHYxuk8bKp2KknBgB9XXTBxMuHSMuXM2fBBLWNqAHc4ud8",
  "key26": "4XBFdzxanxAbmn7jxeTmm8b9bUd6nCkNHPNuFqHe88KhHih78pmydkac8XLdKrVW7SVWR6Vx4RwWHQXm2eQxaumS",
  "key27": "51peWN7ZBuSGfo9pHeiCGRBcokEsRqTvfWHRkMzAPZzFXZKhHv4CkpiWUCDAtMwr5NmzqwwChkgxETEdPdiAV7As",
  "key28": "5tBYKCMwihpaLJovA2ZWNaAqD3VpF3b34AjrbG57YEs6FWZV2KurdHm1irWR1165ZvQXajhtxxKUowZwX8Q5Ppts",
  "key29": "4Vg6omP2KCU2YSC1iy6BJHXD5rjD2uKGgcg1QegEi1hDkfP2JVnYg3RvGret6Fjv6zeNabR1LGer15XQrRU5sznx",
  "key30": "2PwqPb5vEmpzeRzYPmmG32HWqXT5unimXfDngZwyRZmLxbdnzXPWZSUxwLVhWx21B4NtUMYnwenm4i8zTB839iaZ",
  "key31": "zUxUsRym37oBju2orxHoGshxKPyWMqHa5VnoiAeWbSkwQaPFWFnA7PEeZWtq8z4Cr27ebsAJt68fXU2C3QaRaXn",
  "key32": "4gfgvJZY6xW3mcmzaF8Yv5dwnozQt2wryHAN9xMrRNiT4m8TKbNKUjTA3P7mvVGjYuiQmDormNUXk6yoVqpA2WAp",
  "key33": "47cVJi2ZB1BTkB34RLQe31XDwuKpLAEuY77AqZ1iLiYmwRAYY7uEBaaeBy13hRUf9gRdaGGEs4a6sszuSc4Q2Ery",
  "key34": "2qrwCzQjwYm1NBCbpS9WaDF1dAS7tHmT94ncvdFS1VTAdJXaK36zeisNDtg1ALYWn5MQ9NSYcrjZ16jsJ8CZ7gzU",
  "key35": "sTemjC8ZaC97eyN8opcc8J3bgsFeAg1M6mdHSqcfaKZEUaGQKqzwpSoxLdBoScSTS35osyBBc4DWApNQchgNtsF",
  "key36": "3jH8KtYEsYJurFC2DDsivK1UVwfBYehFQm8oXWxguSG5r667k8b9WeiztpFwCxr3R5JnJS1QYth4JJw5oYYtWa9V",
  "key37": "5zzrUNePRgcusbJaHntFWRp5TejLWdbaRMZHkfNPCNFdPyAUkfxAXknTcBDazmfz5nANTdB5Rrd8T6FUMy2KDqt3"
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
