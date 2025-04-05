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
    "4jEHWVW9DuYmQ7uZY5aqzBkYrQxB8AkS3BrPsgcQddukShPBq7gwQw8w3EAK6G4bpfyS8coDreZH7Ho49aP2fUph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5td6wzDb7crGfZLg6oZX9XzQEcGTSTnDhJtUCcSiTxZNFHTYPStwvn6846KFVJ3vmxnx6fzLuBuyRHgVo27nsES7",
  "key1": "5pkVhmHiyZ7veHidXG86ogyUCVoDvtLrqWkGK5ooeLBZkmcafK6Ze1Mx2QfyoeEjgd7hCuzPTw7bukYVc2akqRP6",
  "key2": "5rosbGF3VLP4HPf9LF8qiVx4ZuRZtJ8SK42KGaR6PJ4XqxtvcDysepbqkYE77RxubZtWQ9LnLo3fsH4Jpoz8D9M2",
  "key3": "3GbnrtMQr3ZHbrNYxsCQWzucwDJeTUvRqGV3XGMevoipWUxsdeNKgS34TcGWwVVmSadiDE9nFSVtr4Frq7TGeu1W",
  "key4": "5yjnKwjZGpFMDkUuoYqTdzgoDWLcKW45V6G6kyEG9F5rzEP8F9RRAq4eN2BLn5Pz9uP7aCKybeLMrHn51EB9tVFr",
  "key5": "4jSbv5j3C7atJR5ZS8jDLvvumn1wcikiUSdwy1iq7ktu9YwYVpgcaAhHHw6uCysXcvyBGFeqL2FYt5ok9h9iYyRw",
  "key6": "5VmKBDjg9guj5HuDddSZfKpG6xDWJtZffNV1ApbtSmDxPXBCXCatEE2BxxHGLpSUUVuV5GDsvyzKWYNsHZEzFZQd",
  "key7": "2vGrDm8yPDVaheeA4sQyTgJ4aWfNhSSrcK4noknEBsV3QURHrDaYMQ52L1vjRSFUcPy3V7GGaxPmbEXHnqivf6Qm",
  "key8": "wWNXG75Q2LvgGkLfhBsji1FJ3f3KE1mVirFVsnBaCPNBBoHmav47BkwMM1iwYQXuPF1eiLMALmh8CRF3RLTH7cT",
  "key9": "3nphCFiVrztY4VHCGiPLD3tbnsptgzJEXB8WuQhQRZ9yVasn9Zz4qcmwKJ4EX34rYf3aLL4qGWxDLNz1mR6fqymt",
  "key10": "2hu5TXbqr3J6voof6r7m6hHgh9GuPuaf1W2NesbQTytCBQ4toeknSaD57RBu5sMgcw8ZmS7AWKw6aQYZiUSQmama",
  "key11": "3cMHekC2SFRxKzBUErFpfc9UgAQq6NnSpsCFpHjihnLhJcRfQyGVHdDgVYFnxA2LYPBTnPauVQMaCtAyz1zcAqQD",
  "key12": "58NcuVSqD2iUNTvqbtYGfKopiccAajs7q9C73ZoKzZ39rHmFLWNBf27tFoMs8eAeKB8pMVKx2SrfDPhZ9aLcA4xQ",
  "key13": "5QTH3WfqW1fb6ZQLXQYN7BGXw6PUp5ET6cmMu7CqGgvbtuyV2ddkqv8U8XqZ9LkcfDR7Hi2ANARZbLMXTNZseyfX",
  "key14": "2dr9s3zzGoerALEkcG5pFD4XkpxU21dc2VA9nJsEVqu95UQV2q3NwLkx2h3eeytM1aTBcrgZB5yq8qgiNmyRSUc4",
  "key15": "44Tai7y1wDFM6g3NvUNMhcBKuWmZ1PzVPkjyU57km9Po3U3JhUjBt5E3M8b8LbmaXh2aeXDZupSciQyQS2ixkh2J",
  "key16": "5MAEw6pfjHiHAfSRVRZzEYVkYw4RwtcWrQiNo5jRS5E3BMMkrwYn3HXWEixc2m6HqLZpg7RXXhfV16fNwnNq3nd",
  "key17": "3TD4i69uJuDfzMNjRHM128cn7DioPdLhnaT45bEg3rN91fyuzXCmCJqw77WBRpa9YeM7iVEKFgDfZT2uPWA77Hui",
  "key18": "45oYEvqtePsFmYwiyDzxVKQUEFNEUmoo9FWMgDoaEUi69Jw1gx4tR89pgHJy7kTYUQt5GgY5pgvRSpX2SabAaohy",
  "key19": "52sE3KhtLWjGWg9gZS19Z9TaJ9gcKhHZLdZi7NL9J2TiP9oXzwcm6Vf18peqc29L5ZYxtx5a2XMWy5AbEqj87nqs",
  "key20": "8NAU89r2atQWHj65RyFKr5maiDHURDmQktuRR9nA5sC12yq4RPNj5jPLLL6j9XxtEjqWndoZf481A8KmPeQ2qmY",
  "key21": "oiwoHQU1S1p5hahqNhZNo6pjTuBLs5dYJkQdYRTc8Gn4yYcMGD1Dck9Wz6V1vgAgnMJxoNkH4RnFEtSA3c8feNZ",
  "key22": "22FzoAYg8kRZiherTL3kq3geRHQvf9ZVAjkPCHu2EX5ser5o89YQExSC1skVLyw5vGGd2GAut9JEhzvsD4Q8oU4s",
  "key23": "3QiypVarkD41D3QsqcUMKaoVf199dsuLCoDNPtXrTJr4WTLXQSmCwiFJSfZTHMYEQRzFxeRggsbGdGjQkoCtUtka",
  "key24": "kEzvJei7tLUCgd5ihLsExGi2YSghSEzRXpWskpe3cCK3V3e5Xh34cM7GQPrRukE6h2vx8Li7EHSGABZ5MQd2moG",
  "key25": "2hdYSMb7LtqnQEAtQM4bqqRvefuswwfNbA7H2yKhZJaffCTFUn11mDHu5PNkUEffLx5FouY8YrWeuX7rGBEt7NDF",
  "key26": "5RyvpiG6qGC521JeasijSzbWfsPmnsMHHhSHsQNqwgfmDhxxsETBt4kPE4BCre1hNR5oBhbTctBTYLjhH91D9ssD",
  "key27": "5uD98YESxahQCy7aVRtdeq4Hq5HHTtD15LJ128JYxoDZUZSFtUvnLMFu98pdUKSRCvMKJvExQfBRYtpLP94JF8P7",
  "key28": "3n6TzNLrHiASHb82cm5qmJcAnvru1CP2HdrNrZaBdCxgRYhhM79F5eTq4163KWjkCLZ5etRurfopXULpNjbdeTct",
  "key29": "4XiZzWi5oEw1z5yRy4u7AowEefbhJPf7MC2MjCEEMrTbedZrwrAXBfgycTFgup9vFenNvAXCyDz95UzoioyrWfks",
  "key30": "5YVQfACCdQbF1LF1vBYHokBQAoYGmKmrxg7jEFGQonh2yTtdke37GBPBmxbkZh9yp4w8PGASvGQUCaTy1fU15m9R",
  "key31": "m7MeTpcMmUdVpBtzaWfzJQ6aJdi3kGMf1fTBz5tpSeiRWEA51UakSC5kBVsXnAs8cji8uChENasPEju6JVrXe1C",
  "key32": "34BBDGfQtHn1TCZKKJEj7NqhQP3BtJn7zkDNvuSPUUmVM12r7H8TAbtsisvpub249jnoqFg3E4z3kyyDF65sSftE",
  "key33": "4GTDQDdtayrPQ9TvJJWuUE3RxBFev53riCZEnBuNNbSmF4j9gwyetqPfeLMzhXay3ux2wQZd29Q7vrSN6bhM3QAz",
  "key34": "4gmXU6T7vPr4PuuVYreDzoXrysMiHCGzu6BrrFtyYAQoyYLfh2fT1DEn3wmrid9XxyL8y7ceDS5xrSSQfRLaqgmV",
  "key35": "2dmNTWXqqqUJ2XZecdW2oCtJbKyGRjEcBCqZc7pmj39eDsV6AGLWxTGVDVJDxAjaCVgrnEJs2ekorJ4igJtuZCu1",
  "key36": "xErQx1GUHYewdWoGmnUL2LGVV2jGsSbPMXgVeNyC4n5aff4zbRPpyah6UNMKNmfztTVCa7s3bruJ7stM9cNzEio",
  "key37": "3eaH5RuejUcUVtTziSw5fn2zgwkp6QBecTzQEm5No3VymfRS2grNSmfcedNL2L6465Jxnz79BFJGqvfbLycBTAmc",
  "key38": "2eo7WAnMwkkUKhZyrNNXdGg4ig4WGjeGB1AGJmX9kj1qDCHFgcGDpdC2jAfJqxtH16uQRRhvVLMcdiuspqoszdHy",
  "key39": "3QSQUW1A3fY8eyf9ibspVt18ysM5ATpAE5Fzfthx7oJ6QYhNKoG9QkdacaGfqoHpHMZRiuAT9RADDcWJLyNbzRqJ",
  "key40": "3Sghqem91gSdQQ15WYWVMZzK5HR4ZrQ3uFGN9yVLomWrPhp1iqGcmfDWZeEWWL2LEkLd93KY2HoZWsUiZFUtpExp",
  "key41": "hfy471n9qGTe6Mz2wQpuCX7zytd7YC5EmCYZaqnZqa8P2JmL1vCFuhhUVKQwbGXFV7XxVbn2NUJwR6sCKBn3Krb",
  "key42": "2SKcjNzWXwZjpj72QoVvpdypvTTNxgtTjHigFvp2oE2Q3qWmdnfvHRQTEx7ThSDW7PN1h5gkG3GsQjzJw2ibWG2D",
  "key43": "2tT3cqd6crm2jwNxnnAaRTPfNGJGepVeZx56ffvUULjneKur4f3mmv4uPs5BYKxPQ1M2X1pSWsWSBUaUvT1UHjEa",
  "key44": "UKiociWtjVhb2XME6LSscX77SKfAHWWveGC27gWMLppvKRf1o4TbNrutB22d3k1u6beWbhpxgFPrgkyx8f7qobr",
  "key45": "2gZ4dZnTR2vBDKcs8ShXv6T9HpSrtEPuT76jHMb2wNfv6PDS2VhSedCF3UMEumTFAPxe8QbtQMgsEDCWsZGvNFfH",
  "key46": "5VhQQpTV7mbxnPQ2mtRuUd9YJ347chfhVxTDjCuvNJeduGkcfCVVYuAwQUNGHyVwVE1XNKWSSiciURgEEQAfGTFB",
  "key47": "46brLQHjEPWw9qT8XHjGrxfCqLd3YHNvYxQwUrYEHytwS7UPfkWCZM3LcPpvJCXhiG1KWDVmNoeyS8c9KasGFQu7",
  "key48": "5WtNdoYsy7L4DYPCpRCpbYUok4H5szuHJJafc9Rt49MXB2Y895ceYXHk9qqE7TXLkokSysU8KCvmgf756iV7BL2Z",
  "key49": "4yvD3XVjyKAKPvRAwV6Kzg2ZZXCeXFZdxThZXzt2VZDtW93W2FTaVHfj5kMeMtV1S3AZx73LRsTTyKks8V91xsEi"
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
