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
    "5cSLHxAJe7YWeCLwe17Wd1YWWch5eXUrZaoCWDF8dCnayiYXCSmXzcEEQ4mg69oXE4NjgeBH45QMtzRbBNCVNdMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEd7MNbcFoG74Dwcp7K6Vcr2sCbBL2Kd4RtXjKadEGoABCfvqRtGDPTKTaV57QM5SVgviGBakVBJUN952douYxu",
  "key1": "5j7LG5izH8cbrfjb1sxDdufEWgs9jZxTYr4C6xHdLqqY1VmWMKusFR8jTyj8tro85E2vpNtGWdrGv1UvtEEfUZ4T",
  "key2": "5kagsz7qDkKnVTXYrs9pC1WjhqvqWgv4ShiSGmg6GSvcXjQi8BpfpkBdtMJmiYyyM9vpZBWAEqxXP7EChaCJGxYQ",
  "key3": "4NyVtsLo2RRGemdF1X1Yzbvpy8qKa1UdnfpKet2mMH13j2nxjn3aJmPy7FqmS4TQFarWyqFhUxtZWhMSMU7XG9q8",
  "key4": "5gxdo3GpVUXLRXfxyNytBdWp6AKNdkZtELwt2geNbEuBjEmfcSPtVinskhVgijMJh1rHRxbRY2vJKR5nbfwaJ4NV",
  "key5": "4UZhkbiJkejJS2fgJrxbfKo4NPKEc6GV8jzo7S3hze7mceg4TudNeuBRbVXp1xobFdqTAPbgqzD6HtJe1B8BYsjt",
  "key6": "5Z36KU2ZRCBA79P3nmFaJLFVunXLBRdQYoKFWSGKr63sJkXPoR5SRaxF8XRqYa1Y9MWaQH4Ae4eb3Bsx7iFvhENX",
  "key7": "2TedEcvH3kEW63yyQ8ENpzDutYpfxAch81ZEXQ7cwhqnf9srUF8D8zgpetxA2sukQace1ykGBPTq6mA4RD1zZ9HF",
  "key8": "5bPEk6Txm8fUrGk4io6vEXBhdnLSCENnWUWUQYyAjcjMZyWZ6FFzM7iPUGrc7BTLZM2pTgauJx6iyfQHBGGdzPcY",
  "key9": "3MNAyDYuc76fBZdECCViqULdpaSLwfTu5XRafP4Y9f1fLa6ExmbQfixeWykYk2tQEuJGDyEJCYRtGsz4vf3BU3sz",
  "key10": "3wtjhzBeMsPCzTxqr8wbuAxXEH8QouR3MLPW3gSCC6Ued6mTZwQ7i5nJF1WZvUKmeFSvhXjRWvWcHEL9ZUpGCBWB",
  "key11": "2uNftz6u7zEb2tADhbdiMaBtU9TEyqKdAkfoYvbbwyKAHuNbRpCCMDEeKWZMBGxj2RncdHspcRxk23mXhYXRnjVS",
  "key12": "5g8dLempSt2YpvyJWGQd6BpFgQrTAU6k9LRwwd6LsFscuboGqdN9GBVh2U1EvhkcQoVuj1WrVGKQSRNR3LE42iUj",
  "key13": "4mCGCMx5pGrNEsPwnvVzDyUvYV4pdEWh8Y2STxcT8773yFgnzuke1oip2R9j6vSvdDCoKphzNoruWqqkYrdRSFzp",
  "key14": "3TpLch6SnPviyoJepXFZpJ4jqPZcpiijnYD2E5JaG8rzA49UEeVR9595zgFH3LTubvg7aZgNum5FQrGxzvu6BkiQ",
  "key15": "2KeEzGpGRgeTATaWAszHbXXzph1RZM6DXXeDbYbNKnVY6Xy28oUbFoCpmAPTXirLPvusLdqM6ZED73VXc9UkUUsW",
  "key16": "iKeALNv4Fzj2ZmveNYuwgU1hYAWt6b4RYo5dzAD8nWqjA7B9FBcY8WJX2UqrhNQRHSo7qhynaE44VeAR5ieQ458",
  "key17": "4WpchX2snHVEvWGuDt966t4CHiUsg8ghHSZ1zRjMbSz1vGdcZ7qno7XifXyhaxcpCyvUpVBbGz7dogKduMKUQUWG",
  "key18": "5gy9S8UeV71Goti99XaZRs3dRLhShQwFL1LbpbRb2sqQPqzUm5VG6VfvECQhESbuRpy2P6K1WJssCdtMjVf2U2d",
  "key19": "vpenyX2Sf9GE9xYcPPVDiBxXohYB2NK3X9MxTh6gUprRPnJhDjvPhmY36wVdtfxV5ihAt4CfMCSk96DJJfDq2aw",
  "key20": "5foqJ6QFsDzxknVDd2EELr8y9qELCiv3eyQVxyKwwNjtAViCvZerKDheNuFNKi51u34BViHeGrbUQvr4GiBLd1vy",
  "key21": "7PcJftDa9cmUxYv9nLua5M5niPHfyF4wz8xGvsn5gH6YGMRFdLweJyZPyKAWiqZjMRXYdqYsswyHixDJircuUi5",
  "key22": "63QzrE2ToNftZRUb6JZn6wSiR9d6mZank2DQz8K5CWicQ1B9QeJviwSkU2EzgMP14a9G8H36TNvFmkfK18hNLPHU",
  "key23": "cBGJRRHQxetVKA7h1tiz3PtZWZCArDyJPTCx16wZV9Q5EZ2nt4h8MTHseVP3fetbVhsyTAs3P5RgjoVxCeYe33e",
  "key24": "2VoP3WyrtZUx5BAFobSvjMUuo6PFzUx7MqVa4x5njuvTuSgFgZtGeedn1ypqgq1KKcs3kr7QfHFBMoPUzuvN7Zgc",
  "key25": "gtsGcMmZHtyeHpDf7P43oiwpcBXPaLJqBLa3hYZztcchy78xqL4hsfbdKKBPaNhovXqJkqzDmCvXxZVpzC2dCDK",
  "key26": "39TA6LLhJZUKb2c896Nu9MERHpW7ipkKScYehQzJjBXo3km2L5aiNnEhQwpLnFAtZA9SJ56m9mGCWTpxG3dphfb2",
  "key27": "gQQpJtkdQzz7EnmyuiXdSzBZ3FfmSBVLyQyWkzmVfq5shE3nBH4H2tVQRfmZU2b8ikjRRAnDDYotz2mLhEqubSf",
  "key28": "FmEsLVgF5AhrWSmkuPYHmfreNQBe49JDPWsVjUoo4nc6m8Mcf9gqw6xD7h2ECryb3BQR6pdnsobXVG4qxnN5ANg",
  "key29": "3A6o3pXpAwCb9nFt7f1Z4ssZ7UYrEfNH3o3b3G1Eu8WFouZJvoQt1nUT9oxkqmNyRNqjGFaX7X9Vm6UcJHfBKdd2",
  "key30": "4hMGzmjcYV3ysTtK2sFqqQZCM84WxeD9FLaLXHVnLSEYgTozneUrsdZinpDe6BiZyxA8oPrrLGjfi6KYuWj5zoNm",
  "key31": "3esTiCuiWvetekMjBZK4RnuBnXDtNGweNTMYcmziD6SewQo7qQmJLJNCNjdydYt8edfg4F9moYvz26XygU8G3NQo",
  "key32": "4yruxP82kzv2anRrYYfPKFvzkN9qRSWjNTuM8zaBS5BURvLQFF3UJyoe6mnRH9H1yEchJGvzHDasi1YgKFhF4zs4",
  "key33": "4buLQPVqpvcXHnhUTSWqtmVvnFdXuLM2ziwE4bL9iUqkMcVMf5hDvZmqdcKPRMSY6WFFzrXWfPMtjhX8FRc7vGSR",
  "key34": "2LJL9ft6zTJ87TZ9KkPYbzLRjpkQgXphuQuR2FRtcUkaaz4U1Hbf8vZWRBzQwpwAqdyj5obU66EWnn9JNeXKCXY2",
  "key35": "38SuEawEQAKfXuX83KLz7SgkBcJwMR7x4YHn2mtXbL5Nc2aVA1VbiVNjgxcPd5ASGu6rbsNUgCZRRYc4TYaWHQFs",
  "key36": "5bGPLD3FPKZS2ToT27VdYcjbwu1rRY8kYaydzDqPh4pZjXWZKPtViVxiRSRGbWh2mJehgc2RPqJ1mukCneMVfZ1u",
  "key37": "5PFrTcGe25gRrdCqz5mJLEM5JJgwrJU8bqmaun7aqwCmrAVZMeoDLi43Lvfb5wizFbje3vnUENFGv6AhzbANetYE",
  "key38": "3bJ2ZWS3uANXF5kvffVDeuzueCcHwtpc5d9kmoAbAUrztYw72GBKDs1b7meE89P6AWDCaJgxraXEeh9hnsmvyvNk",
  "key39": "4hC6VsXUiN6vfYS1SfNjqRYSc4pp1pKSpgN8fmPe2esi8YKrw9GiZ5Mqw86sf1ibfuRZMg7jBQj2yTusAKLsmEhj",
  "key40": "3UgbttFpefbfD1dUbeBFzREYjSriMrqAkqgSLh8k9Y2Vjyo7tHK1TVYVxXBh17JywMDvh1qZEYtS3k8aPmYytdhD",
  "key41": "5sLrs3rPpTX8PeL3Vi5fr6BzkVioDuGLgqRw1H8RHwqELyFLBUdLxT6RU4D8jgMxCwvBNEweLwM9fSuoqQPi1fsf",
  "key42": "64g1cmwtt4ygw99kDMNGrjshvcsy9EgGfRENkbsgsinLXfEJ9njk3oszGEAY4nNPg5ShgZqG3xVeKMTLsSbHRaAB",
  "key43": "5cMdopBmM4q222KcLaFdN6xLtFvgJFxeej3j4futs6uFWbuxnqe131N7uML4CyDey5gxE1owdKyRMdy7EK9RtCUc",
  "key44": "c1w9B9fAwMJVdm1EAL1YHFyjpL8QTuZDDsBZC8UnZ8kU2hCCsKAThL2zNv9yUECm8PkGH2gDAbFtNBj4Umux5ks",
  "key45": "5pL8xxQT4QeGk9j7SE8wzfKhm7rCwA4fS5EKiD7Dmm91JdnQjuTXPzpJTLhAEd5fF9dm1NwebUuhfX68sY7nocgQ",
  "key46": "FnZZBeFBENiYfRjTSDeK6MDpbmW7iqWxWBhs2aFtCQjiqzQNeSPDigrEZM9euSJzkXavUL5kaMxjXWDi3D1g4Nx",
  "key47": "4GNZxaRZn21Z6FvX4v1q9kpufMnjvsi4PmbjfsEKSG23U2nHwracqJ7vtAhKV2HrSv9XqWDX11eji7tk6XZKrp9y",
  "key48": "ZGKK1c7o9w68zTMzeMmB1VP3bXRaUyfDceV6hFAgs1MRjky9ePs6zBoGqxBR4decSkaXPr99DoVZmKxuRbHRHFq",
  "key49": "38zEkddWbCjTGcHjTSLhuRBUbk5DTew1XKQZb89w7jSepViuzXrwd2Vp1XRVSnWTjJqvHUqVf9H4wPoitjjmDCzf"
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
