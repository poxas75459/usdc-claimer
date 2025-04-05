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
    "2DrJdtgKGjzz1x8JBD7ogmo11RNuC2usCRy2Xrd2V9ubwRjMErRD474JZEtLv9kkgfthcs17omf4mtCNA1hmZEBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hgjFUMPCYqCGyCEkCpZBydy9DEP5ADeTggzBo9y32SQRLENvLkuW4QRnZfr5T29bq8XjP9if5NZQULprUdJeav",
  "key1": "DdUo1YPnUozsvo3cod9CSGr4bEKtPHZE8MG4zMzBFgvPTxJ7xDvSP9Fypu365X2AYUqrv2NFGQBftwPYPzEcDG4",
  "key2": "5P4A8WxbFx4V4iNUBUVdAV4sNHJdLhzQ2HRG57391PJpVSBwjNjprEmFmCiMEaMnK3wdDHZ8RDtkQYmRS8WXUy4G",
  "key3": "4Q7UAPksQyWQKkCwmAKQEbDKJ9V8Ae5RkQT9wFcpBYgUfGR9upmLA2XhUhskZx1pqvvZSZKe7jUiEdRwRerc3Qd5",
  "key4": "25HRPsdfLAEPJmNBWZKEVAtPUwiV7ayGnk7g1xpray5VhhrJsQnVKuQ1wNmBNPPUCnZjyaduUxYKUkMReK6HunL5",
  "key5": "4xD43NSwiusHUutzkgwNsE5QAAk7nEudcJP4WMsoYbnHZpbSY4fweYC8zen5vgmnPtXeVSsayEzHTV6iJFf1eE5D",
  "key6": "44HDwXoroXAsYN2jngYuwCq3v6q1z1vBUZD9NegVH8T41rGzvxaWG1vwErB1niS3N9YHUUVDYJebdyYUJdqt27gu",
  "key7": "4c428MYmw5R4HoUMcixB3cuQNgE5FgY69xww7ovYqZoGrjWEgmkhyNPd596KHi1ryidrJR3EZG8MkBqrrLP8S6Jv",
  "key8": "4QBWXk1Ceh6NtYmSTDinAr86j7fQa7BSTs243BuX18SPagyk7XPc3QG2DtAzLkKXWXRH8uUqtgb9M3ETuV1WDyVL",
  "key9": "4iYvKFQChncjTMcJrGLWBV7onfG14gcqYs9nkGkssWNLMDWbxPi1eBJvcnXB5ykd3iEXs3KuCepoJ9fTcTEPCPHD",
  "key10": "3bAdYtWHoot3U3jTBRmcDdkQThXjyEsyNmf25JfeHjLupBY3LJ3hvNzEgAu7ESBK2eteDfwrJuj1twFNn6SUp292",
  "key11": "4S17vqtLE6gLhd2QErTG3W9CtyvbKQLMUw3uHHQQJ2PEAmwNBXgdk79TNgNpLaDkJuM2oCpgLraJ2o8trsjJPkuz",
  "key12": "4bbmFdAfwL567NxmsfAJfV36MtEBFhdaw3KMWMAkfzd1CDpVUrfLbAoKZA4vHwnvC2A8qCyRq5wxRUyAwinCjbK6",
  "key13": "3Gb2QE1np6TyRq9nNdJtV9i45xmhYDFxMqvc52PkuDGB5LVNWwTLiaa2L6hYafacmiMpNZH75KbyncDuqChojTFQ",
  "key14": "36KzyGN5p1gZtMsHBpx2Vk3HEZiorWb1DhDwunSB335isNJJVEZQsBEzx6W1sj5uK4zzF45PgWmmSoC1dFZWRvyM",
  "key15": "3QF4hFGKh31Szybsxpoiw6D5GPq5eyMrVohQWpPbhPvNEUtHFT6eeQ2t6M4KoeMerc9utjogL6pVHwiSJWL7XYYN",
  "key16": "qjz7WXteHzrcpty2rtwzMxjodUAqwBwNrFNpyFynBkHvzJC9HPo6JrDCpLZzp8GeJKtdGVTPdTRiVhXjtJUHwaZ",
  "key17": "rThNgx8KpwcBAGV2754mykdfu6ovChEvbDwrctepa1FoMyrq4oCTWNy6xmL1dxJcRjRieNB77zYSvpaLXv9M2HJ",
  "key18": "FZGHPM5iBG78e1WREmt3rHEQHc6iFYa1iJftNkWKM2DEPv9jYCnApsb35WgpQtawf9r8VkQ3cHUdLtT7RJC9784",
  "key19": "51dMCY3sGPm7gD9JfaDLouoUmGV5Deg8QAdzPtLEBQrkeHSaa9NCAfU8oNXxUR3rQojookZMDJd4K42DPeoLYLVu",
  "key20": "5JqFHKkuFgXUkAKps7yFsW4NxP8Z3Xt4vBfi9W8KLu33CkRuK8Bt9XhqQ4RoFu1JBH8p9FkteCB3Sx5LbKhoMZ4Y",
  "key21": "2bQ92tA6Fy5fT57KVw4wSL7XqYeW4nmo5HfdBMVtBqUWrfqSLT5c7vWzLWksJH16U4owVmozzBNZBSmj9SQ5RSgA",
  "key22": "3rCV7Go7GimP7dBBHn78qzFfZpYPkqLoEfzy24UFEofJJmaEbshzvdmGJSGPBoFEWceRCNh5pTjR9rA8y7ianN6K",
  "key23": "419AR7UwpuFwLFix2ZfDGDTj644MXRsAYkFDmBGFBWMwgA2ufjhS15ZCbY943DhH4pJmUVGTvz2T6q56QqAwPcJK",
  "key24": "UxWZBk9EpyyGA2fRXbsffCm4EnhHh8yWqp93wkvEngmgyyLAcKbeseGBgmnBqXwQ3FTNdKDfi6zerZJT23Vk2Yw",
  "key25": "3FzcwV2oci1ZUMdDhwsXhN9NsXtbALoiCmGXgMod3PfGZuaswKf4FduPbGDGfr7daXXamKgYrZWTu8WqNwKuxHb2",
  "key26": "4SiRTQJCpJi1paGQGHKgwNNFPPcQUXZ21JGhGejCqW9TfiebHVLwwZT9vSJKbsQVomhBX9AzLLqYEnupKGUxWYTh",
  "key27": "4u5P9R6BS8cJ3Qy4c9TmoZixJSnP6sZZKRAXQvbxo39LMP4AbsFBkq4cXRrA8BMUq1MwYUuB1mGC4uvKE82wauCA",
  "key28": "4R7LE31GaqDf67sHLP2FTg1xuTMxLqcnhnWpHQTujKcCZSPbymyMDxT8H6U2ER8NhHbfKKcY5S9gERmE56ujkVjt",
  "key29": "5kTLrTRC8f1Ww9TVoCCsuFGNfJEhEUCp11kz94e6wBCeu51Y5atbe7x33MB9ADX5E4NzjpAWWqQkvGLfy1H2Wvbd",
  "key30": "3nrfdPZWo3mZxcBaKVhFB46XNQvEfyKbDBdAKB7tN9MJ2QQmLwMRYw1z4XdWf6ygJteqin2JJhSpuMRteuDJrMAy",
  "key31": "5g8qjHABiN5oayVnSGXkGmiBgD9Ht6xGLWtgWjp1YD83SRqKyVq3rraZNSfA3MbtaWTSfZbNJXuyx316UmDPrGyC",
  "key32": "2KAaigZCGiFuPG7iyoZLVaoerxmke8jHwvCWinc1y8V4zqpvAGyoqtBGy4bNdWxxHKb8m5kQ4VQC5GKoyB78rZrY",
  "key33": "KApT1hQjRsyAw1YbTkJHTS63xwzAD4TDwEJkR3xRqmkK6ujYnRK9Y2QEFiPGttNizQ34ZvGvAfSsybx4ZQ64P9t",
  "key34": "5n2mErs5B1vUtGkUGPgpntcShKsQY3NzAUMX6zCsc3Vx5wEbrvJqCvriLKWKUHAmYuH75ASL7mD5SAQTsDJSxao5",
  "key35": "5x5FdGa4EYidsTkuu67zD7nBCs4mJgZ31aiu1QfupQvDhhsT3jXXu6QASSk9nz4WWfaKwTjf5F7ty7LX4e1YJfn5",
  "key36": "WmQoU5YyqBR5WZaSpj4tFuVHzkkeuRinpEKCwTnAcqQSB1LFv3fZ8d39R6V8apdoHdbeNqWQ37aLLCUviTvqSDC",
  "key37": "BsUjVQ9mWoTYz3Cp2fSc5oiAjPnkX8sMAaCMxr76Ru467HnHiGoA1g14xrpiWWGEcDBa3Txegg3fz6rG3sbDxgU",
  "key38": "3ca8xLZgoDGGPrhgS8RYLX3BJ2vPiYZGjs5Vjf7tXJBpkwEQUPesTwzNFiErH3QiNBrJmnzQj8QdNKNYAypxmhzt",
  "key39": "534ThZqywhRSj25epaob7YcVcZGx7TJRoxkoRitLhLeZNUXrcKFA9HAeHqZbKRnBwxAhmd7F8NUJ1kpvh1pGd2uB",
  "key40": "61MY5fptN8ky7b4AUttifP5hY7SU8wjmuDzwnvBd1NLzJyQfWExfUrhCkAPAssot76FgLVGyjY9A95vYfqPGjzeY",
  "key41": "42LkGF3QtpB2Di4Bb3wJ5uzuu9VdPiJ35E3QS4nwKEz3UPJEejcX6goxTsbgi9tbMU4g5T4EuRJcr2cni9PvEMG4",
  "key42": "4XwpLoQ7iXKCsczJieh3wvc7vs55Jn6t3ng5sP6qpU3aidx5j61s7qXnj8mg2Gpr7NThULxunGYuYVHAAVHfVegp",
  "key43": "4qzNe8XzzHBNH6KhALoYebbCdJzxQ2HK8XFVXYRYYeXHqbvBcuuWCZfvpWm2UqYLo4oMXbLuJzMZqSUpBfEqzonu",
  "key44": "QhersF61hE5Q7jjrr8oB7snjx5hNCp1VSMNhBMjkPgqsBoDrMQgMApanQg77WG5s55cAgnRgF1aRMM54hhdozad",
  "key45": "uKTPzdmGM1M5dYuQjN2ipMGv3v6mtyBP97RsX1RVXD7AGhP2TiuuLu6odoZRoUP3rtPm9JhX5ajVnfFuzdfTxPa",
  "key46": "2epaqexPYtWdV94Y3UqpFfb6oyW47oY7pLGDB5ko9SgAX9AMVVr4gBAaq8sdhxLzYXDjfwKJPinKbBu3ncJ83LNZ",
  "key47": "1idZ3kPWzxMtfwtFrguaSwCrzPMozZmgfDNAtu4SAxsL7sSTBYrZw6d7jVucX7RQwFUsXZ8cg7d3MSK6VXUfMWF",
  "key48": "4JsXLV8iBjhAjQnuJqAWXSH5jK7XyphfB3U84m86KD7GiQVj6YNMt4HdSG7b5dELpvq9pprGq5s6GBgYD2gvYXfT"
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
