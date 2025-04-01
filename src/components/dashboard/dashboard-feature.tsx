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
    "2b791HowZuDU41o411oivnVsXMD67GztyUC9qsfPf5kiZPKdbVzGvjCkavukkoMVy5og1VZ1WSiGcF4vdmEsyVYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39sNpd3vkQLSDWhZK4trEhFihHkvAiQ3oovory5Y7ehfgB2razf6eeabFkEzUbRbab1LyP8rmmpxp8ocWSxFDKYV",
  "key1": "5zRCegpNKdLWaN5QbdadqbvXZC7UWQf6niYMQkGcXPcigCDEJ68aEQXrPpeU9wDRz4C8zL4WJMJaUHTq5wLQUrgQ",
  "key2": "4Q7Rn6o86eM7MaddiQFCW7RUHWBEHv6Yvm6v3uniApkDcvJ5eg6HyeL7c1Ub3mdPWLY8qH27NjqNrdpzKggKih9c",
  "key3": "dTHxQMRxXcuS4LbLvDfbVAtR7GyDyww7BY284sPQ6oGauurgdobyBfDwr4JyBkHbeP1gsoX5J6rr7UbvaTr6jwc",
  "key4": "5ERHKFqVbc1kfDbMK1HXKzgTWNUn1QiPz62vFoytEsxq5z732CZpHRB6CcKAMtdgMksKGyX1kw7QCWPtoGs7inRS",
  "key5": "2vF1iNgBwEUsxGS1qzyhsDi1XMW2ybp3ZKu9K4E4gcNLc7KKawygErN2rHTgyP8CvichoqV4HbCBvDva1eJG9bys",
  "key6": "3QrXtrkbyJR7GWfdm3ZfSdV6BDA4xdfKfxjxEhiVmvpqgnBPVKLyCjGXrnSGg5iMSUnh6XrWav9o5Yv2eGPBMbEX",
  "key7": "5JaByWmwFd2vFZtfqhMK45z9SiijSE7VD6uSA6u9QtMaG7mS3PRR98TSeyaSkzaCzJ1R4Gwb9XYGHtBWRTaskyjt",
  "key8": "2HLajsPEHNGrYDg7vyPLfJLxGsghU1ZzLLqkVoYYi8wSqJkE3sxk67aoDjJbCfjMP8ZCwD4X6SHoe8AyUSUcp9NF",
  "key9": "46qtqbf4FahZZ8BAGNUL7hVd7tEgw1NDQYTKQFaYLbwHccCm9ZfrZFCVXxRuwcP9RcaB7t9eDnZDggHk5KhEgqNJ",
  "key10": "k1pQ4ZYUF1NrbztbApbVb8wbdNGcn9i1F1LGMEB6pXzQneoefgwPjEdwxycb2SyiCDc1dDXkRaMAiRz9jQMCudA",
  "key11": "4DW9LP4Yao1SMgAEwo4eXoRxn3L9yRWarZspy2DjNoEVUKMJD7rCSFwTHVDNhGJtC6SbW7mJoam5fBC14qKeMdx4",
  "key12": "31HjgeSZorPBxLebqaLftmsp5bh7QfxWz49z7FVF5zQnxdTGbcZ7dd6vzzu15RPEghSzcbmpoRNS8Zrcba6egCuf",
  "key13": "5AbLvZNWwbjmi5U9yieM9UxYKKHFm94ekJFrrYDS28EGRqguhg2kCkPmSKMQJFRrkKohDtRPssQupSvw5yDzZC6V",
  "key14": "64bt4nx7dmGeJMg1fnqeFNzPrHLqTdsxCtYxo87h9Z8rSraNEB8HDBy7KBjqriseJTiKogCJADvbdGmuPFgMpptB",
  "key15": "pQ1Y5yEUb9d2PVxYPTJ3UQjrmfmZbPzSbSUmPhLj9t8vAmsbMJSML3PyEMDC7X7Pj3R1xpQbZbWaz7SjfUo81LC",
  "key16": "5gvNKasrQU2uVx7duaBArmhBQqvJJvyvr7bZjqsqyp18bcnCSht5McaJegswFEM6AdXRoRTb94nJbchwWzp47LRS",
  "key17": "3vjzXMQ7JoXiRWsUGHoxXvjp1RD9gEypbGF1mD23kYbDyK8Lp9JceaS6oZDdxNKozFFSmWMVSzzZEFdMsPvuezpR",
  "key18": "3P8hGAJEbfUn3hDQFbWL956US2gCLzEEpAcaHrLbKk3E351NQFR4qJLFPbrXLW82ks127G5HiJg5YkCmNow8pf13",
  "key19": "3LSiYYQAeoCebFrpcV8vMd5599hfqNTg1cbefhpeKzxBzbKtSp5nFVQmM9phTb4UgrjXQPc3ucMeLdNe3HP6ceH8",
  "key20": "3HnotvQrnLxbG4hkGHexLboRHZhU4CF1TViraD2PWAtwfZt8cLV7qtwNpuY2Cyd4hWBWVD8Y4jcy2A9kuMmxAPy3",
  "key21": "4n27rTFd99SRNEWpm8huEQN3WcHYunJSJjbYJXLC9RxAA7SJTLng2ae3AFTSmjQMmKAR2gXHS25fEy4AHAotjQpt",
  "key22": "23aERAfHZoku9K49RgkQmvgoz7xS2DsW4tad5rmQmLpgQUVaRtSszhRFu7cC6byKfDA85Aws9Dh3B3YiMLZqPM9c",
  "key23": "3SCWgDRsHqkFqZaTh3vRkxSBT7Q6g8JEeSChq8pumu5u35SLKieNyYBSHg6A3jmhMiiqZRFLS8JWZZJMJpJVtewj",
  "key24": "5NgZy1apuwANmBm976zg2butbD1ivm2pPSQVsjVh79CZozbbwspXYhp7Y1EzYMh6yQ5k4dSnGS3huZBMmyaMoviH",
  "key25": "4Bss86bvPNBFAPRYBCD8AoJTwKxahohy8eZYbfKPDmzyyGhY2P2gRYUpQ7hjXrgHdrykkefHhRm6BNqQYd2BdVUY",
  "key26": "5AWRWjqe3uTM8daAzs1JvexPnhr189KdLa2Jy4v2W9E7frGU5zQYSqKSsD26kLFf9kMFnqk7icGEcSMyim83QGaW",
  "key27": "4ioP3c87cT1BhCgvg48Zycxc2zBwHWz3hgLcygSg8ePQ8ejdJFGMvQgXyVtJFe9djQ88jCG7HqeigUyE6w6Pkkh2",
  "key28": "nn8ZvgGSojeMf7U1FBTikWTWkMyhaBJT1h9andBoRcS7oQkngbszLpjhAPbCAYsvD5ke3MTpwLNeqqCxfZts8m1",
  "key29": "67Z56Ly2jDidHhCYzB7UG333EXSfthigFej7s4ttAjR8gG1jWjsCTuK1wY2Utgz3jjXPVLeHu8U96NVoZscgFxKg",
  "key30": "3PF9aVPfkspZuK2d59EXUYBCLJx2xZp2S9fXdc9KyaGHRnMoDM9C7QQ9KN7ZLB8bJJrdTmmZGhzG4HthVcTTbc3Q",
  "key31": "28famn9Ub5vijDMMzGmTR2nbno3s5uFRTDXJXsaeUzkZSyvaoPLztqXEDQQd9PDvYTSVReXUAwFcn1jUJMLphms3",
  "key32": "2ToAQFTTEWvdbk3McZnvaieKfE9Jgpai5e4NLwSXxcsEn8Yb263tyVdMxQhWHnejmt1ymeuWBtEhgfFUothRmekf",
  "key33": "2uEt9GSdEPfQJaGim27cBtWL47AoXg2bH7DhXeGgUhkx97bfCtcZntvX2mkoJssYvNvzvodBjYBjJHcdUao9H9nn",
  "key34": "3eEpA2cpK4PpBiVR1PRRrhsnBU4YB1guSAY2havBfyHuEezk2D3n8uQbwEgkhX1uhkTRgFK5sspLxD298t2r5rtN",
  "key35": "2cHtfyJRhFgBHPRUTt5DRbr5maA4sKenU4CBfBtcgeV2GfgohroJjZ8Ymc7UDRxnm4VP4ySiuZ9okyZMrUYm1uEw",
  "key36": "5rTpuQg1fiuUaUHDRAxfWiAtxikwpVXCVq5Nvo2SGMGDWovC5jHSeTFvcEEb5uunX9wC5C9wzok13XBUQ9mydN9w",
  "key37": "3mYYNiC8kDC9CUdn9LZVjgyufxBk6k3RQMWPEqLamppVwPqwG5oRegZtCoJd9TZfgA52vmzeEMHAStuGZZQRLrvj",
  "key38": "3s2WAnEiGweubpzburEaa2wXidMzVc5ktMy8xqin1RpBBjL3K7uY94KMgKignf9Eat31cPStnzLh4HKtx7Ei3LJJ",
  "key39": "3fyKh4ypx9FPVgELTXUmkiMtQrRfLqBbgx78dFzxJaaaebP6gVgNSR7vgwcVdHmC589dhNNnDV1qjC1X7sD3ATq6",
  "key40": "2pLMTci5M8ruPvENkGADZ8MR9GBz5wZcuPYTPde8Pss4qtMfsdJsvFG4gnqMaTvXZ2UUnVihbaWyjmHpo8usWjDn",
  "key41": "fQRuN9hLguAv5Zo1ZtQ1SPDmNHFtS3aXJPZaw8r4SQL2xdeqVeiVPXFDk7tKN5rcqv6h5WEVg7MwHeqg5RXCoQ4",
  "key42": "3dWvVf7MtgceEz1VoC5pVdZrutUeXLV4uBYan9TVrFwqdbresBeNUVj67rPdDtxTJWu8omttePYBfaDzssSVmxTU",
  "key43": "yxpqz556Ac5T2g8TuSdW1S8TZT4ECLM676xQa5MdgVXVAfB4gHNouPREtwTJqAWvFM7hQ36wPUyF19mk4jHi45o"
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
