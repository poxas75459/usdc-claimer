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
    "5RaTRiXbNcUyAbFxjE5xXjpSE8LmMjsqG5Y1SfEttFXgdX3E7dF9NcmQ8fftVCX55g95xjTyfDVmPExSBAYiCgoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bftPbxQAvzvFqfm4ZX9YXnrTD9bYeuKUdzDvgXpbwG5Zqe3RWzsvE2hoGDkHPSe4etsp33FGJjXGFu5q6X2HPmb",
  "key1": "2AuoAAw6v5k6TMusQB58tVTfA5KSPU1LPcjucGt2fYe3fnaNwgoQhFDonYYBGDF5Vsoe79PiqagrhMMa7fmTbMbY",
  "key2": "NtNizBB1b9KC14LfPMxhjuakY4kNbM8X6TDoJYstL132fj2L7DMsioNkj92sZxXFtoQkvj9ETmHaV8N8CsJ9NuE",
  "key3": "4hVhVFiozQnwACuY7ta6QFYq8KMsaAdv4BihPjyVVJJD7sxDatTNtw6BEUdSsoAg1PGeco72E665PapFLHBT5Ajf",
  "key4": "4sgSw9ZCxNFhskEiuD8LDxaKZVU9PN4ok1MdYNPRef6tKcEFcBNjACiX4g4yiquMuq65sNxAHt31apiFtiruCCm7",
  "key5": "LMjXXDgV4DDTRobPHJ5W55cNFUNHyKH3nmL8mANW1GieCMTqQ9hGPfz7rmNaos24ZRrdagTE9d4kEpAMqW4CW9Q",
  "key6": "t4GzDjCBx4S3VfLtZjqAnirJ2vLWdJLEuf8oSL5bSndXF5xnt5M2QaVwkdRXD6aRtBTKTWA4b394gbLTjvUyGHb",
  "key7": "56g8hGYMeJ8kJu3JQfEcfYHrcvffXdyBZLSZ1xDStRk8CS27euzmTQdhQk9WTFFvRDRnx6T1UyHc1Q1EYEvaktBE",
  "key8": "5pDCbt3xDpDJhi8aY77ZCkPtcevJY39S6vRStq7jzxaKc81zMY7AB4EcvVfmuiUhrYfH5o7gutSFziFxee9n5pVA",
  "key9": "25TsBW6o5JpbY8NzBdYMyJ9AcTPYw5mRGRvQR9Zyu4y6RyY5mvb8Yx1Aohzkz4iQyLixNuKxJ95adb7FHsjPfBXK",
  "key10": "5PnNuBm4ARUGwuevxoxTgjE7Jt6Zckxz1HUCL4yqTHggTMgQqu87fTPn9RVMDNRKQdAZdCdFoVoJ5emrY3EzGgwP",
  "key11": "4msWYBSHxXZkx3mGrHmJTErxrnwkmERyuy6Ds5j3qiaCz2oEuH7tp4KMuBd1QTuuYr5NVcGBgvUx2VhgLHQ37zmP",
  "key12": "NtvyvJi3NVuuDgL7h9eFhf9xtKGntRy1Dn9u8Dh1ChUsUs64wVaimSbyDdsxfbhMqynjbmjMJRSsPiYfC782LT2",
  "key13": "5HxmewXAov39HSTXbnyvaZkQ6fU3qsmexRCejCEgJWTJGYLQJReqnBYvTtFoE5Z3PfC77g2FjMqJUkLLSwiJ7ag",
  "key14": "5noFqWrQCG9rzgeBDFXUEdjYpVuzi37qonPwC5YHZyCazGHZQLKtZftebQ7AE9iWG1ykfUyrmYRoR3avCmAWWHJ4",
  "key15": "2gLDAnQFA5FXiMA7nGJs3eG2BhhUrM14fcPU7gL3AdCtaabSYoAv8isSYgbsJe845wPnjBPb5EgzQCj4d2HJFM2i",
  "key16": "4rShgE9Rs4cSJ2Ywhc2x3VLHhhkxqfN8p6rLBnPkwPY9fdzoRZgaEGhJDX8vHUQ8ErbWT2LWPhk5MUfQds6shgWb",
  "key17": "33wa7vh5vDMVcF5M1ugH1MuZPFrvRymQa5X8EpjNeA64QFacZN972AKLEV6VvNsYUFUY7mZogMpEziSwukWvS5HD",
  "key18": "5Eo1BHC6VT4n5tyMw541ZZEGhQhFBovbriEvyoRA4QFK4N9iqyPBGeJd87t4bomhguBc5feHy6U6yNdaJ9eCm64V",
  "key19": "28NTU5SQ7CizQfBZnnXLt7ZLKNnyueafVRYUtG6xqGKtUxtLUoQ6vgzfNG1P7LSnXaigC5g8jmRvdiXL53gLCdoi",
  "key20": "34DWsC8t9suLxeHpGMkbTw4qZEhXTLVmmtz3rHbJqouwksM6Ck1hD2i27PeoU3DWSXtxf6bE9oPd21ZRr5uG1uus",
  "key21": "3X7eVvLcqGMsrmfeyVqtdaXnBZkxe8tEPesx6oeqSwUjEUtQtsMZ9FuA25bmDNaFyciZ4by6E1iyiyapr13EGhi8",
  "key22": "5xXj3LKouyHFXTuXeygAykB33wdA114YLGf8mroNuUvCXQHNteHbcwU7Jekwvp9AiNq8K9pRjyTQxowDzWeW6gyb",
  "key23": "2NZgKXqd3dAfX9jUQ5V5DyBrH16temk7rJLYK2vUH6PFewNRJZzuDkfDA8dAmgFmkRKBhANRniyKEL9c9JFLkoXa",
  "key24": "459wA7ooFPPErTNWXwiU8EfZdQSQRsMbKLyAVN3UKZ4w37iSjCLT8pUGVnzPvhF7S2665b2oU679kH9iX77vAYzx",
  "key25": "4KmftQBavF2dvdeovpz8kPQxkvmu491SuGYyzywPwqrqjjbMk14kMjKpp7mGyeR3swm7gakpLQTxZSBgsdPMntMP",
  "key26": "3oU3QPDMJj1U8MfefDnHpV4VFkkgdBf7bLysGo6ePL21n3LVQDkxs2Uww2SQ1B4wbDG8RMFzaPdRsUCMHjodSDYP",
  "key27": "31kRYqiaUihxriVpzkeMiQodEqEvHA8ew5rgNjwrxCroJvNXonR3bQ1ZAfhWohbTxGF22K5ne57bW9uDKE68hTuf",
  "key28": "5ShMCEHh63ngbAQLBdHtUT6nKZQiP2USvDcV2oL5G9AvkmeKKquzCTengLsidhVvwRwA5pbw3gatgJpJtkRYQFRy",
  "key29": "1ukvNTRsprDfyGjbtfj4kSELWQik5VFUb7PQVH9zYcCtR2TB1D387THhr1UNf57MN9uYHqmQWzHVdKVahp26Ddh",
  "key30": "2LwDZdw1ABEBP98NaTokAHnjvsZ4joQkKaNf4QSvcsQnxDHbdhtNJj5fVaHfH4gMLdBZdTFziDAdfpFQNHi2nZCF",
  "key31": "YHnesRpd2E4xjKgbrf342bwAGCWTrC24APbABzBph8yRouqj3PTC6Sj7FuemgeDnFwj9FkMYF6cVs7nS4Rsb6dk",
  "key32": "3CsKK5NX5GczGEfyECZqZeu8zJd59gHhUEiws283wDuinMVi8YMV3oWuRNh527TLn2FFUzKuaU23WShomCE94Li3",
  "key33": "5wYvJ3Stdyh4gLR8oXvBdRuJJWVhjrCFauvwTPu4h2nzRFH8DXHg611r4XYyvcKzj5Aw7Lgs3y2jgYnt9QUFsu7u",
  "key34": "63uTZ26h6xGqNU7c15Zsap9sBhoYmEcy1zV6ohDpPxCFu64RkJkg4rcPw6PztHUgunC5G7y5J2rzX7RwRfLNyiN3",
  "key35": "4rgC67XM246G7R3MsXRWdUdMya52stqjvCBet7cwfaYwLogqGAAJWgDBZP77NKRC9oS2GGwxEbRHcPbaUDGjR2Dq",
  "key36": "ot1cmSg9fn94v9jhA2k3zGJgZbynwPZjfBzmsZg2QsvfNQBeqiGgBiHrh7xZ3849ZoV8ercks9oFyxusC3hhEJU",
  "key37": "4RvL6bnTskaRmndUVficQDZAXJ7m5HCedUNzguhrTXFRQnjTqFThr2tHVHRTRXZcXHQkMPS4dueZSEbvruZneJ7J",
  "key38": "T6uSgWB8f9itgotTWCDpkyFogXSyLydoA9zmoWa9QkBB2cPbuxg5G8fvyRtKvy3QS7AnpbY5XHwY1QLnCkvqih5",
  "key39": "2sJ3Ry6XjBXtZSyMDUnvmnsK9gryWUxj6SRYPJqvxWqydhaSJ3RdLghPNfG38Zs68QypzR59Kodynv3urCgvzfcL",
  "key40": "2urtrUnqQrqUCgEkP93aww9b5wYi2dfNhzVcdsoYWNJaUQsuCTNnEwf4StWEWZDNG26P4B2R397qUGjm5AP2cEJM",
  "key41": "AbARd4HRNA2wgJxpib3DhDu4QEGHLLvQc8adVH3Tsqxv3wZMUNSoU7nXXyzBUryzEgGMghA2nFpSse8Yc5jnr2W",
  "key42": "MUhQz2ucs7Kd4foVpUwJEgTimjLHELngrd4oPqCKDnF9mfcqiTz9HBwzT1jjTPHd8dbTt35ENBMY8fRgExmPHAa",
  "key43": "5rwhexNXwgQwm28DdRKLVRtScUSrshxtRWoQ8novKE98HgVB7YRAhTsBdMq5JTiDxfMCrvtuNnJ5WRCgpqZ6PD28",
  "key44": "MofLqQMgEAWsBoX2vzFKUh8xvtARe7daPGuwJXBNPAgq2Yrn1CE9uyMpszbX8Yy21fNtFccTM2MKzGPzFjWB2S8",
  "key45": "482GUYfF3sY4jo8BrMrGjwvdLhRH6WUndNiB9To7LT5CSEWrsHPUWGNNXE8R3qxv3NdxNJWNoTNjz3u1vTLnchUa",
  "key46": "5ThaxyGRHyN6reFXcN1Yd8aGUr5ShEikBBHw3WWMdVHmHStdMpqUQQ5eeQ5pLvXVhG8E6pRNdQNM9Z33a4MnHFPH",
  "key47": "UQqbbeZHBHunGRvzAKsDEc5N2snBCBs46Lh1DQiQ92dFhtQXXxvk2R8ARLn6q2U6bjbnko4WUmeGvUsNezC7uGx",
  "key48": "5sPCC54JVd75J6K7XMbHe3uwSHZ7K2fGNX5myUoxsFhybaJJFq3SXZwEfRcczEwTi1kZzBUeY3MP1sck8cT5bS9G",
  "key49": "5TLeBron4pokgCvCFU88LLAfETsXGbpqtqzmLGoSGqQPnmH5SG7oSGa8nJJVhMXKTEGeNDY6nG95qb5gp88FcHgC"
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
