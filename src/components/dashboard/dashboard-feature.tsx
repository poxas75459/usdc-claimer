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
    "4U6sUTFu31dDh9idoLewhfPGvtSqvkuShE3Uug3ktzk5jdfB6MGtE7Ft4frYPuinZ7ukMSotAB195eAEEZxXzwnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oAUDGWj5pY17WVu2ZKydQcmC6SxZKnYkjQ2YXCwaWhFKfvXsm7Pw26mWmwC6X2fzG93psa374EHty7woj3HK89",
  "key1": "2sd47PajF2k79Ym5E6LeWeRd3ygptg5s14AHxSagb25QY82htv8GLSJUoynuar6p9ZCd2W5vCup198Ly6h4Earp2",
  "key2": "4DaeyJPyxYqrKQWTQ7js8msnW1qjeQARFkbwGKgvnqYc9c7xyM4ehAhHmDH19AUvuihjjuwCCbMPN2pJXiU6nxeG",
  "key3": "c4iMosLQb8DiFZeVvozJKwBbRv4MvYeUzC9Tif6h2z1LPPzpeaX7RXu9kEonqaGk41ePzGWZnULdggwdHYWhtgh",
  "key4": "5orLH1dFrwCjciZ4UFmDevzxoYwTyVeY9QpYSD9bXNoydAzETdTq5NrYpcKEV6SwLyF5WtEHr1my2xPwu94YbLeW",
  "key5": "2GNZAMrvE44pEe8273fBhBgrMyCUQXABDLAR4pnkXsSbyMc11PgbvuDsH4zt4FfBfWHmdq9tfzYQrZGZP8iH9XsZ",
  "key6": "2xbk8o5iK2CpwBBg4tfAuTFMiLPYLEVnKqsUVhbAGmDYwSPvoLvLn5WVRcH4sZFuJuEJHgvza7u8t4voAnmcETpa",
  "key7": "4jxALFDthzrNcW4TNeXYQ7m919u4EXVu3XG9zYz3MxihwNKARhWgSKko5XRiuxuTQYdd5xGkThhYNK6UeF41jE1P",
  "key8": "xK8ykKnhdNeLGdYJfhk6pZaBx7EsSiusyNSVoFR8m2wEbMTBQHJRuBFVLy6K1rwMvkBiSGhk17semyfNkqkVy4M",
  "key9": "UxpApZNJYdAHYRzPqRSHPx5WutnCxzCB9GZx2MtPeJLcvXydjox1nMYroEGwKfxevZuhXGuGLTKw631VfANx3L6",
  "key10": "5qArh819jtPxDVKSK9dG4PEyrs5AkS2YavdFmyr23ikGJxwXxeTnbFDGy8TfStbt8zqT7B3AhipYwCdqGTmVnY7B",
  "key11": "3FRsdUjA5xwAGDdSddAqwzgAd4YPkzmwVbbcPtt1ieioaV2MjMPAzEHUAGxQEE4QTHKJWZrbC83JWwX8iu8PwVYE",
  "key12": "7hT4LV4YFhAd5K9nZNJdMJfVYgrt4jDzXCuwvoiyDyq9s4SXhc9oD1KJiBQGZMLvdqtPrjiZCXuYTCMcFZPJtHS",
  "key13": "3sniGZtjJnLv2GrdGvWLamhXbcLTv5dnPRNDhYCNdt2uZVEo1ACKpUeYRYiquz2WPd3ShBSWRqaeoQZs6nVoF8io",
  "key14": "iC3UYXGV9FbGwm73mpaPmyB9pW6CFgPWnFEA5iwgFAG6CfpmuqgsELb64S3qxLLkWttUNxRCRM9Gc27ums3Hqbr",
  "key15": "4N9Wf8zSAWbcGSPxGtPNYL3hfoU9YHrvJUCnV14w6nCi9GMNxNY5DDU9a5MbnqdCg6mq7QC8Q3JfsHkDrwXcqNqv",
  "key16": "5hg7oRsTP1QfHAQBFCrczydy2fSzCPzwmfzXUeq82w6THE8u3BKW5fbkPXFuzqMi1e2ypwMitNExZDfweSeZWkbK",
  "key17": "2MXtD77ycuvPyMUBK7BaypHgGQxmQ8EC6MQCLHzDef3dtNJsyf9yzat3arXJzYJV4noJU18CumH6CJ9eDwygpWYK",
  "key18": "2ZXEQF4r4CRKHdGDATwB21LRZQdS848sqZQoM5skeTbTT9mXySf1FaABWTm51hopoZA38G4ifsuKgcQ1qZaJpwrR",
  "key19": "hSNS4Dui3bH2Hb9kZcgVfDAYasXm73c6ry67T8piLQYVqPHWorkz7mKf6NKCdNEox2S4Efj23fL3trZfQ9494si",
  "key20": "4XPHVdwQeqbUGLATHYmx6JDTbJosoJMmn33qAxumrtctiYoBAVFSZjFTbDZVohjs9MCPVDcjYdvg384YEtFkcbK7",
  "key21": "2BJ3esLaVZ9iL7h556FAg7ZNNvZtyWJegj3n34sGBTxZyPv98dcdVP1gXD6JfCPsfk44CR756L3eAksEcYshCiss",
  "key22": "2VaKfiLwHLNH5V5uBjydm844JjMFVgF59G3r9UrAytjtQ5wUvBchNGNhJiQwTAsJ4ndVHEqpBxnEf1KgWNP5ujVc",
  "key23": "2Wxmw2JxEzVNBChJvZCQgZqx19fDxVqfgnRQncqg4JtLwUza5T6utXaZnEzPz6YVAa4T3N9HDpWEmFUdmnJL9eXu",
  "key24": "3V58Pr8D5HwCeGyJzo6ZzfyfXZuCZMv7HzuiL4vLVFd56DPxmNPYqz3K51nJKy9yiPrL5tY5WX9tV6kYWsvJ6zUn",
  "key25": "5Joztq5FJ3UtfYKrumfECnJ5QZDoXtZcN91GQjvMHPqtSBXa8WVzDH7P7GoNuA7iMJ64KD32S1Rr5EkAnneCqMtj",
  "key26": "4PtEe29kpv7WxbgJtvUBKbQhZoADw8DyQM39AssDWP12x445NxLCpA43HxJAjZG1nACJ6qYnyaUYBfMt1fCNEuVU",
  "key27": "gn8W9EY8iAM3LePwBkqJrFxTTmGu4pdaeeLtFZ7k7XvVPowMoUF1foRFc1DdQCuqb4t8wYpkzMah3yekAS3swkK",
  "key28": "2oLgToMrD8F5CobkDfYBFPDyA9Qd8B17hUTRZuNifhiG7oCtTS4RtR6YvrSNvbXv9FA1hNRuEAVatPFvP7H6ehu8",
  "key29": "52uUaUJaouo53ttzWMGuaNq3DKg1o251Jj8E9WBLDWxFhtprjVr5x8WEMxS6GjqRUww5hY49WfoadoM9QxHcRUzW",
  "key30": "6239UcXi3Xz5X8dJZrND5QoMGqRKDKooR9gMTgX1UGkbtSNnS2SHsLRcThsfJbv9bgqqGnQDdyfuAQtNWoGZ2err",
  "key31": "5SDKZj7yZatn4R2MTURLWwtJ988mCrWfJC2ch8qRinZXdoRPFy7MfsHgHoHMzQtaSCND9Q9xXcp78Y3Z9jgsBtYE",
  "key32": "2uut7dGuujhKcAaxKEu2Vh9YaWGDaUuaoSKDLBvYk5ALk2uQyHhYixg2XBDSe42ozXhu7A5tiBVGyHBE8DH3xh2n",
  "key33": "3t8habDMdxNJ431JHAjQwZyEqWLhwG58Czx3TcfQy5Ka6LM3G3TsKiXJ8cCKcUDgyXjo8hZuSv7ykkABdMRX7hmo",
  "key34": "4TjJNPiC3J7kDM9GHQLXBfEEHPfDyqjjhcZqvPDPGFsLcEDK2gJ8yvxoaXEEV5U4H168NntBYgu9aYeHRRso26pC",
  "key35": "5nu1Ecr2zun5PTcviBdkjLZ5R7wMC2frUKvMYZmvNs2g3tMd4rZyfqmD96fed7Mq1rQbZQafniuwp3P3HGEBFjep",
  "key36": "3ycdTPeuCnKb11svEvqEafHBekLcc5tRgD9gd92LcUzzRdUa6wMXCMpPPVz6gD7oTABUMpmufyo7PBSRnTesUgji",
  "key37": "4UEtWfLFHTMtURAB1FCRz1893skKwYq3za1oKAkosSmFvpTYboP9GT7eqbccFBjVR7Q9WizUf5TiCBWsdZnmeScs",
  "key38": "4YLLXECi9NekPupWffUpCCxEScLVjxVJiyM9xtonsG4JU51aW3P9Rvd4SCuJWmvtAQa5tJTRAaq9qSPc4D2Y41oP",
  "key39": "4q9Yi3nwqp9yofFagYsxoirWNKSgj7kpNdKdSNHh6SsukQoQGtQKgae7cv2Emej7hWpdaFHkTDHZozZ3QwxBDBdN",
  "key40": "4uEJsZXHrV4AvHzyoFuFCmuKCNrisGJzpYne87rajUsgzrscdqiYFjvTE99cnugzoiMixShnMdJgNq5ek2tuZjJX",
  "key41": "5iwZZsVWHwYGmfjnGvaJSyqo9m8GBiicN1VXc72uF96HDTyXdt2nCVhtXgRCSBxUF6cAd1PnkfJWHTwMLVhWnk6A",
  "key42": "3YULKnREXsi1zjVmAMUSYJtkHD26VDx7QwtC7V6x2A1JQdJc1ZQasESZfv8YzGFViW9hu8NoftWhYXGkKFk4TgWv",
  "key43": "3teQ1T6wTuKf2VKpB6Qqp3Fi3hXJtH7kCQquSKoN7PQuDntu1aFYVyifsiMoHoraZuGAC1rMMSyJra4cKniZHAL6",
  "key44": "3ifB6kmSAedhJVT72RCJSvFKPZbK2XgKqDfMJPaNifkck9qeLkrrFZiBjyHpYxMsB3Du4FAHTPVmTGdy2Ddoub2b",
  "key45": "Jtg8tT3ptkpuxQdJgjcTwdRNJ6YWtdqW5G1bXDCHj2caUwchj7TGypYhAqZDNbSHN8b52s2hwJtdA6pqqoWEKcK",
  "key46": "5DBHUu5jHKAWTTU4EpL2YSzKERF93D7Ao5vTrisAZSx6o1RKnR1dgK1B4kJXw1WB8cSjDq9E52CLqnnZNzaWG4k6"
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
