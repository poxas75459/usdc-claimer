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
    "324EEHCZ8DB9byuawHDuMHagYPDwfPjadh8w3ZJqE98epW6L3G3eLsUPPfcRtRS9m7kSfDvV5DdioFxKR48zjQZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rE2ekEBpAouQVas1gGUCvAi8GEhLGE39c2CHhuXF1fSXBPbDP4qtzeQBdcVFnQvBw3U1ebDSEGr8hLMtgaehTWe",
  "key1": "3XfBoYHsvFmUEQQsXasmqj4sZVWBa1i9vKGX3ibYaTpmsDy4RYUaJi1ta9mjeVsrAt1Q81eK8vh1Ja6uSZsHqVGW",
  "key2": "4KgHTGFSJyb5a7uaLJgtCLnnpDvFdtKo63j4AxDdsrw49aBS7mwJkagu3mQy2qsSaHzga2BpQyBnuSMjNErJ4Zzu",
  "key3": "5h77KRTjvYZi48fPn5HfQV7xfFSMBq1svLuBoSr1ErFxDDawZZmzk512qMzGnNVofF1rK69u3fHtqYArFaovofZb",
  "key4": "5eM9a57CgFf2UV3giaH2jsqFv3P7ZhXJgEHNuWz3pJCAz47TDVPTFeL3nHSELCB7sejb3xeTeNRcvJXvu4t4zKvy",
  "key5": "65wRXRsPpamRRyZdtv8CE8QAE4NVMojHC2PggNbrAU59fVp2zknbQSU7rD4qatCjv6uwuj7PTRjXppnW3yaEvoFs",
  "key6": "5NBgUDD7JFT3aPKFx1Pp2KeWQs6ZyFB6TTpFYFAxFYUvdGXotSa8STPUzPm4VYCo1W2zysYC1MKhNSgMC2ujdrd7",
  "key7": "c7rcnrwQKkvBs1UMf8fNpnw4LmA8iFtwbDTow7yMhBk2n1rVdKAnQ3c4EwCcL2UdQUczfkTLCS8oDVYsqCrNDdJ",
  "key8": "2pgzANmNYAGMASjYwhY18NCT2zLNeJPFehMGRycuebJsAwC3dhtugpDhbJjWPnEE4AY7UAHUyu4WVeQRJQRgDiGb",
  "key9": "81vixiWr6E5p9X84uDMWEgpBT6mjU2Bh9tMPi7gSB6JVpUSqkMtufJ4wuVdeZJ3S8SNyoV67cnSu9Ce3fnh61WF",
  "key10": "45X51EtazgXVT854Nq6hFngmRSCgDoinhi9KdmyvR9H3DoxwWamuTeP3qAzpBLMAscdAaFVWyY3YQMcjMRZ9Vi7z",
  "key11": "4A9EKqcNe3H8t2kJ49BoJshesHNkj8cfkgprYKk4Bz2zWziqJX92f1wTRRhBDJHGCmT3C5P979MhRUawjo87mSs",
  "key12": "2PTT3HGs1MQGnfTmqEyDyRDomfHH73AN2i9rMbHYLhofBZTwfvbMeb6ihkRv1s7FV4MiAAGPXZXqQ4LU1uWMpMTr",
  "key13": "4VvFEhpRSvXPpMTsDGhxkvJXKKpFrxfcCQF2qTeHsbxq8iEKJo6Uf7LR3EvWeVTiL5RxjWpdr3xsuL32xRcEbBGk",
  "key14": "5EoriPGtYgRXAZtgtVmgzHPwo4LGBCiK2tKLypaFB34um2XKm9Y32aGVfdgyio6gAsk7YX4BzbBnXM1xYyinF3bU",
  "key15": "WAykvp4Mch72cGGmhjgTQmviFgNTvEhw3Wrm773L5muPq7Zg1uuuAD3EVJhhSDT3pVyzkSnY4upv6kDPYrVQwya",
  "key16": "4TyfVqXTCY23CMPjWSoDJS81qKFMdahEBNgf8m7kKoYY69DryZnDrvPNSUzidSbXW3Dz6JjJdMPjyERuAbd5kQy5",
  "key17": "4sCmmdw7xcuR33xDj1SGqVp3iyPFRz431KsvvV8tB8XsPw1rCVfHGVnftAQSBqtWFoA3EyqBMYUCNGLdCbTmEbyV",
  "key18": "3o8RUwaYiPo2ot5NzH1URaHWQoRan8PQqiJs9sJXfqZpkpNtuVsDujAPxi6zainrsuBZonRkkhHLJL8afQd17mEN",
  "key19": "3AGsPDuUH1BygV1MLMbichFJW2ywNYizCWq898HgCzNYhXLYtpH6ZjkZrWPZobvmz8FuTyUReCKsS5RF7B6Ce86M",
  "key20": "5FAGXsirsD5HbVgosfYkiJvFK7mkRtUtodzkfFKuF7zykLjKPim7yuDoDK2JrxJzEAxwzNZVWCaWqUV8Zb8skZxr",
  "key21": "2uBZFMwPvpM3RNmSHn4j91jeQXa6HR5hamMoVixvUCDxmoHowk5N1pJTvnRzeD6JJFx4Taavd3DqBXT6HacS58v1",
  "key22": "3xYWzPQpJNcUW9Sr9udjMbv12ECbuEZvivacLVK8Kid4yagDN4HvZpEsWcZya17oNB7m5DDH65Ray8Ew1XyauLMn",
  "key23": "4BqHUUzYBQakKpBLL1EtfRfoiHefqe2KvHLMbfziZx8Cs9WhWPDRPFY8mfHaN8ZGs6TMw2zYzXKm5uyxg7p7ckTB",
  "key24": "3DdP82XjQggdyKmJNmUEJLVBcvhvnVnH8mKhsvcNfSkcyHiLqQ6oGj2Lsi6gcL7xRp7RMRfjcQ9HxkTp4Asiww3m",
  "key25": "5o5DbNpWb3RPM9rxEwhwXrLQqydM6DCCmZSKZxtXzqt89iRT76C4h9vrMeiQFBsZtZXnG9o4YeLBPP5BEocC21Rx",
  "key26": "3nu656dUTfYzfydnS9dpeWP3u9QQY9tDJTKaM6SNg6Chg1d2LRuH3A3perD1TtsnXesJcCB4RJ7DecbWkN9k256u",
  "key27": "4Jz8NpxW2fA2Bh3wM1wMoadtgLqp7tD2f686FGLDzx5i4RxMyFSvhNjuwmkqwXqoqwx8j2y7m9yp9qmdCgmX8pw3",
  "key28": "664juSpeDcGnRYqGCkkuFBYHqBG7gB4UJP88DPFFJWfDb1HE1duixGr6zcDDGVXGDkttqu1FaYSBb2mGjsR4zWR5",
  "key29": "3N3wpgdFqMPNi8RadeiYXHfHv5gxrHgd5dqPRDYR1kgi2UEy2HrWugg8MCmHA8jThcBNiY8JDoknaXGaDbtb9UUZ",
  "key30": "3UhpAMYtfXkXuD6XGJ5xjLqcMv8S39Nd5Bqqnw4s4VrgyGbqoRYiyQ8fSvPdhnZNWqFVMqQDbfEhZt9MxZNZifmg",
  "key31": "uTX8in3DbWp48UcKYLwdNH1KhbBQLfoRcHaguvSmREgerRnx7eMx8GtwkA5oZoahEVeaEEzopFPn7x7NtVfUA1t",
  "key32": "4UinbBZ612teCyjSdm9HWBaG14ErPug364ttXC4hmKcfvdMUv7RcP6eT4mwwj7g4Zs6vxzwKzfjGFSzczhGkab8F",
  "key33": "2NwDLXDWmF18STBaYoGyKHJFCLi8yx4JiuhZRXSVXB9xhbWScZgX3wYa6GucGQ3j1C3fNKe1XdWm9FMdHD9wqRi3",
  "key34": "391praXqhbfAneDBDu6bAyBr6AdKZotkdVXF5f7nZLMFS93ZXQ7X7UdDigkvnDqTxGmcy8X5YpViFKKK6FHChYHZ",
  "key35": "2YBAC9U8bTHvTRGcoDnaP3fWsySxtbuaUXPsAPQgP6ePQxVkFktUTkYdV7LwNoVCFLt57zjDwQ8S8VdEH5kj5Vb9",
  "key36": "4KEdjTNUn213TuXeW5LUJ3Jdes7HRYQXvFHXtvTNhtd3vaN19BRJ7A8UeRZQZTbgcX4C1yi6in5UQ3qmsQmvpQGQ",
  "key37": "2R5sbtkFsAgMKSpR2tn3jTtRMWMu5fGJGPff9cakSbhqEfRbn5wnaUcWidGqMeCW6JDu9VggZidEkYvN9oS7P6e9",
  "key38": "51nJm6GCpZTwtBeA5svb6cbTMSbPN8mgceX4UadE6aDaxVZgbRx1bgVi1inSp9Mm4tQBX3wP3mMbap46EzGhfAC8",
  "key39": "5sdnz4kdx44My2qcRjd3oz38aQf6ENFBcS4NVwXsaFFv6kd6xmaYTDaySzRPNmaRhtucXoerkxqYANste3rnautz",
  "key40": "CT8pwZ9mPz2AVNiYvW7SqdCxcYYGoBJXfkgUFMgHsxky1LsH2bCa7JWqKPtqnJjcPMtAr9hHjqLvBvxfrnrfQKY"
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
