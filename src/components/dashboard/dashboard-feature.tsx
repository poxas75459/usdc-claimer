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
    "5eb5AUPQE8WtGSruWrukf2fXh6vHvDJiRCE8fGExxiB5NQvK8NVD38SDbb6eoTuTVAfBfT76Yoeb7Yfet2NMr5T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9q3ykYt6vLBammYv22ASvs317aXK2MEpjvrnjVQ7MdZSy66zmGfKGjyhNwvB1KN5TYJ6UzCxs5eRuBYaYBEkMY",
  "key1": "4oSSrRqVexzssU47vNw7GyxbLZd1wiKnTJoryuSmpqqjXZBwJCigWccBidJhRMYTVC3jV6Jy6uoQ5GiMkLjSUgFB",
  "key2": "3CzjLfArMmqAhVPm9DN2KEH6sbqjSQF7M912XEdDxZjPmakRizFwhKRA7hvi7Vrpe9erks1dRavmCS1Wzr61ZsuF",
  "key3": "FKdLHjPXznMRSrDAfBW495b82SmkHpgVSWZubkEXXq4Vf7cEgibpG3eaVdhD9wjQPr5GMhUveAXD4Cz6oVg7CKr",
  "key4": "2kb8Vv6yWMuL3zKhepMcnA8XpxmvpMZ6mLqqUxppZXoj6pL4a33YY2avgtD6tXdKvcVoevbWmzfnPd2zZ5L3Cxh6",
  "key5": "5aXj9yRu5xDnRh9YnEFYWGgoUEUAbUQ6BwtmjEqkhxbcLZhdhitU5xm5R51KGqLqxsjAoFtHxCZQmQZg96sizjys",
  "key6": "5NWMXoqdVnoHqtfNPfQj38izyy5ABFY3RUbNwRBWKusnUhp6dybHxBGYkttb8Xzaooujev66vJqScuMSnsofXyT5",
  "key7": "4sSG2K14otsGH5vGbr8qy5N7uZpUUNko7FAWT8UPyHBoPvFsnvVgnRBZ1GiydAJydieU2ByznnEv2rdZS9r2SXQ6",
  "key8": "4tifYdwmt2RSnxUEmGDMBzStQP1vji9Uw8nbhvtQuer1siKvJMwBRoTdNtJ7xssgcWjRiDHPrnbQXQpXMNHg1kg2",
  "key9": "7EVJz76Nhg6vuPV8SgHhySWHRmpQABXAZWFnEgRjGzmg6QyMnbnPddkTMvQ6cc8yQwsuPzYBqeeBgTraddv9Jf4",
  "key10": "4ULVptgL4iTnEQZ8y3hz5LEtDYwPt3QeMbvR8pxnr9vf75kippsfUcnWtSot2h7j2VeuAmUUhaUjNoD4hiA43B18",
  "key11": "2yXwQx5C4wNY6rcQ9HUnNfgxSNvSwBoMTgmXoRJBpToUA6wgpA3L5SNkeS2g3f1hACH3yBy1uCqUAnMnj4Tj3Vya",
  "key12": "4zhoL6nSFX2dAiuQLDP8G3aE57GsbCx7CXviZSHBw23gp6VhPz57dLobJ8AVEjGyzY1nmPcjfLts6gVXjEDXuFz",
  "key13": "63VgCh3WEoE7GZczDH24saygCQgSmfSwsuAvgNhycqq7XJesdTxgdxqysgcQp2rWvZHVyvJeBtqBRcpG4XUzBxzN",
  "key14": "5vekVUkhX4ijwXUV5QoXAndAmYSjgGxizLgWaFVgVMLUNagBa8TWcFYcm4PLbPWkXx9AHtTAw3rj1UfnEL9BzYiL",
  "key15": "44Kmbusrvnm7qudCTjuFy7kDqsvTk6esjCkXamSbn9eynRZWKdRECYCgudWrCaRMeaBNEt7VMQFvjNSNM2WYkrM7",
  "key16": "2TuNKXVCeHDT3PeArwLa912LGrkZWYnQAVopsSE2mFWjSWKQPTeU65ryEPB8Nfq6bPbFwGZZmq3Cug4fmeYqvo9X",
  "key17": "3FJTe5jJ9DEgJEZPy9BGSWYqYEizL9qMRnVng1xs8WFB1kYzsNoDc7QCWs1UJfbJKbXqngaEw6hkVooPmELEFREG",
  "key18": "BsgJjyGXJBb934jB7z5gXp1k5UVeEYDiRtdcSGygvbJwE5MiDbqFMpt5nRtumStMge6BGvLGYqhNHyNgssPKSyD",
  "key19": "t9wxk9ybxzuoCUgreqEegupXYjTsoRMZuh5cGU2WMUZqxGxtwQxYjWtZnsEka2TVRos8BuLQ4u33LH5WwtBjoCb",
  "key20": "5sG89FxV4VXrgtBfEoKFUMinPLQ9uj7Z4DT69krukhUdZbXWMV2goWDCLqpvDb8cQncQDPqmJYk5mRqug7R9Hz4V",
  "key21": "4Ga85jPtJrr9HBUJ8xFsZY4vTvzXmHxe6aavQDhjkhbrABtHYX6Pfdc9Sf8wGwX2NL7WNhq7Cqr1QT4ccRStdwc1",
  "key22": "5K4gyoTwYyerznv6zpd7AAdrTWP73y6cwqfG7dz5hn3D8RVhG4fRo7HtEYYyHxxQiLcKHD51pV4YUwGgr9rqPWQ1",
  "key23": "5zCyEJvBBnvt9YnwYwGA93WuWw3RWDcnTTjJADvthanSGxo6tqgfmpTZsuwzHrFr5uEg2fuDWRYowzkUbSLi7sSe",
  "key24": "4CSryw2Yc9GCY3zJaHrzZvxk8ffGo4rE47S5HDXkgEDzxo7FDAS7yAJsbjUBnaB8UCNyk9oDnHhWc3ycggTvaPdL",
  "key25": "4w4pUXeFiFXYf1hhK86HKyXqLWDd77VD9M5ncFsnHX5RkComhUSUvw5iQYNh2W93tZ4fWzJpwYokB2DwctKZ5XGn",
  "key26": "2s92ig7ntDVpMehS43f3WE3fbejpidmCcXiX4ivp5RUXt3SVL6VfYHtNXBgV196uLssFi4Jk5wJqYhRrTj3qALpf",
  "key27": "2NeVxEnygSQfqzUJGEahtti7J1Uxag6EdtNWc1iqjmupefYV4CTUHpkeiR1yqtcJ7ikyBRYXBLA7vYtqXyz5aNxx",
  "key28": "4rsUY7Biz3VoSw6jkfvoqzBKhHPBBRu1xwpaAH5us9V69RAzvgZqBxtcvFLDa2aNJeJxrKTDrksxe1FDexkm73sM",
  "key29": "2VCcorfQdRyi6kodqEELyffg7ZisGarTAmCK2q49KkojSS9WXmwPAHsZUqqzyxdv1C4QgA2DdP88Udj9xeydWkht",
  "key30": "47GGgQLyk7w4KCdWL7CaC8ai4nxnwv7mJbEMQ2PSqFXcB3LQjTgsG5KD9Dmgurnov7a6U5FFAhnou4yn5WU8KLBS",
  "key31": "3sVEaT5rGJRBRkAkmU32YqPJjt4ZbMBPoK2wf5NLcX5WJ2tnMU5WxB2tgCFLaYsHHH9anmnqmcwALe97pNcWNCLC",
  "key32": "4FXTvxE5EYJyZR5nwspwZbcshbktx7Vngg5Aj6voBrL4oKgcQqRxSzQfk41gZR9CXZyuPT4RtEkdQwKrhR6mizF9",
  "key33": "bcJiJrC9DypzTV6wSeqWricf2kSvazW1KnQkoTZpEt8f7sHC8qtaCb9Mc9mtEFgABEksqCPcXuQPUvaCxufavkv",
  "key34": "5d6LTBucjXG8SrxrmWCnL4gNkCReRGpiHnXUsxTXbxQP7WWp3Lijo544gDqsa9CzQ2TpcEpuCsqhDGjHMSZUEKbQ",
  "key35": "2QFG7xjx2BDZ36bhm6oyGB5Hmk4Sy24DwkKwst8psikELd9jKyivLir1GR28FDAnQx5v8S8jUMtdhirTrYtityxg",
  "key36": "5CsGJpHUsVYPwa2q6JJWf75g3ZEVLrwzwgr4Grj6Sua2ao3dbbH3wVghZQonf5nugPFDykkg3zSYHq2cEqUYFenJ",
  "key37": "2hZC2JKkMQCoeXXHCVjDX8pR4Dtv8AG5SeVHeAggMvkZsTJcgYSAUTfuUGvS7Y3NWhgdXKMtzDRuYzdgaHGNXkss",
  "key38": "2K8ZMsf8tkBgsr6Zfn5wQ9TdD4dUfsPvoGDKWYue5ka6QbV93b4dBbWg2StoLjDrxss32SRhcJQxZaoaH5wU3LsC",
  "key39": "j4nE7GjsWWk4hfHZzDCQmo4GSyDkYyEPbn6a7ihDhyUGH3uDEQwnPSsuM7QgvdsTb6qQ23gRzf9DuKa7roPqCsL",
  "key40": "9p76RYryJhW3ZaPCM9R7U3FzqqKA281XLWiR9sM3nqaFnr4Hj5uYbwJvwffDEy1S2EEEdLzrhwAnDNsdgouL7N4",
  "key41": "26cjRHJuDVy7XTtiDT95JUV6houHUDkcoS3GUYpWSwaYeHWyWTsVf87T6o5McExcrd8cLUJFAS4dgF4kVKDssUB3",
  "key42": "wtM2uwJJLSTBdjeHuMPAgaSausbMLauugwu8MptB3nvTijzfytgYds12uK1h3aqMxJQ9AfxTuEHBqEyAFYxVMr2",
  "key43": "3HgcaBTdyTUcgBrybyD5B16tHRYtwcrqtrnbGPHRFeq1RdwxT1hxFcXuC3SBZ93icewQTp9ZTESLqq2DYmZy84Qv",
  "key44": "Gx8tG3oLBNMr3cnkRkVchkQfYMhE5jJgSXV7KtE3LfWWtgKn4cdCX7JoLxEKQazcBbe3KHMnVSND41XToLrugSX",
  "key45": "4b7kHSmd92h2rZce3tQkCnJd4mGxKFSfKgoCqkg3ofoiLKBzgFTgG8d7Z8h9ARsdfL7cnbNg8nP6HUUgJYcRhntR",
  "key46": "4DqBz6zEq3BLmpqFxjZw42y6q8nzSSNe42yNNuhERjCWifwgcwUkVBVTyJmdyFwputFFVAE5rsY8wdAYg6snpydp",
  "key47": "2G6tXmCoP3tWs134d1eH9WbuEz6AiBoXpTgC86oZh4cnWoE1FGTGJiduiCR1p6WRDa3hydbXsgyxogi82QSWVRH3",
  "key48": "4uMH4jWD236UX6ZN9HFi5A8gi42ZpDa9dJoFqGvnTDLCUssnhuAjWgn7h1jCmP6nNrjkrp4EKkehBS8Ybe396FFc",
  "key49": "4LgmZgBEmhH2ZzwhZTduRFop6PiooEsk4xSZpeYaT8XZNtHoGuUcdSvYL9fnB49WLvMPWT3xLNk4pKWKA7c9jDXd"
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
