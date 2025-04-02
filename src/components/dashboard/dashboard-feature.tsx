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
    "4U844zEY6mPegFrvpD5cscDQHoXu3sUcskEv721wybLCAobCGCHKmVwUPaco1ufeTNFihca9jobEmNRKcqpgmUzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4qYQUuhsrYmu9hMSdnvmDXENFt1TeEMbL7kuAG2PqZscAtfcFGaVzPPnwisDZq6z2EaEEoMfFpL8m8hbyQDS63",
  "key1": "2e4gEu5UmXzTLriPqDh7pR15qHrHJ4jhUsFF1ncBkC6hE4yDUZ1bAJ7XYfFj2hViLUHmkBBZiFtZJaLZQ1rWH6TT",
  "key2": "3KZTSncFtpWPLpGgAXDtKLf1HPvE1w6oVyEoZitm2yi3cH6t5uPxdwux459Gr4SeY6FzLvgjnE7uypg3Ywp84NuD",
  "key3": "4gnVzkUpHYCL8Rpi4rtAj5WkLzUiGKPbseKpbPeb1rqMqxGupwMCGkFBTw5shS1U85EVjDRVBTFxBXzoHfK5tDBD",
  "key4": "4ckRNs4FMTHvsJmAyFWdrDrdGtexzhvem4LmNxJ5shmnYu58rq3rjbMLmyU1JodyVeeNEYe4GTVmVQipwfWcwfY7",
  "key5": "4PHSXpTc2vszmyuA3XFwNjRy8fouA8cefzcvdXSCRxc9Fktbu3ichbczMBD7d2HU4hvXooAaAUMKoDh5J5REdJFA",
  "key6": "2H91NWcH8phWnRahwug6EvzMvDS5dt4XfUFqosXuyRVXEvv19xNbw1FKhSGdfqcicjR24BzdHz9pLk313J25ud15",
  "key7": "4SgZvhhtvDYZsQaN7baS9N8teDE6dz85dxQMQ6Cb56BQLoYU7N7noBQ6s3S95XMgKNqWmHfRbtGTMbnZ4W2bwtFc",
  "key8": "2gi3wjda9ZnvsKzW8dryy5DivwnQzhWhKEu2kPK1TRvtMwpNSSyCwFCJkUSJsEQUUSaqtyqtf1qUAPaH49epUYr1",
  "key9": "3zv3qbaoc4rmLx9ATTTwoHwWL1s48gj5bUJHd9BERnDrUF52h4gmMN1cusJpPxruXC2CrQAtr9DoRGMCgRspqaA1",
  "key10": "5PJoUsKEESCYPTPGCE8iA1u2XeTRSzUMQ4TX9Hjq7dfxwiWT3sm6AAjG41eRRt2A1hjoddQe7V68j85UnKPjBn2e",
  "key11": "jf5R2Lzd9Y9u6Ua8cZpdwoxogN9a4WqUhMZFr1cmMpDCw9rLYiisPrYJQ4xNLPp5hnTTy68QFEjMUjX2TyZVhYn",
  "key12": "fG9Lmky9zQgDg2UTPSbkkEdqNyDNR4QqyyyFTTjrxuvceRhqQSEk1qHv4EdK9JGCr5oxA1tEus8kCPKzaSfdoNq",
  "key13": "4XK6KgWhVUVdko6Qc6ux77QQcoAUe7FiRHVF6Skqbj1zhyV7DdVjHVLGfEeSxG3BfBpv5e7YV3WvE9ShV8g9oGFn",
  "key14": "2caMPE8WdCwRJBob8PyUAfsHcHfZw2kmBQcZ5yqditf3JJW1SnBWdMv929AeqNLYU6TAiYx3Qvb4hG7nZJBeoUHp",
  "key15": "4uDiazvcMjtVRujpwPx3k6JAi9L7FyB44gjxqS768r29jZJ3oL1KKFrEyjxhs2pxFpwBBpyRRvZ2VyUDpxD9iBJH",
  "key16": "r9MaoC3EAMsib61oT1rSdhJBZnR2MTePEPeoZD8dPZnx76gKL8DqEQjGVTts3eibu1nH4GcCAnnJCgdw9hcD9MH",
  "key17": "3QKxEJi1igKnVUw4rdYgKYLLTUa4bDxwFr6M2X8SRWZoLiD22WMbTtM6D9xF3eWEVuLqJo8G7NWF6m5P3hfvoiAe",
  "key18": "GWKcvRtb4EmonH2RRaZjXZnDVxFUv6jB2S463L8BiLBAVVhThBHL7MKdzZNroJGT9MQjDgpeFDRogfpvVV39hNo",
  "key19": "4RbF8njtsmQChz8DNUWKV6NRqXULNhetL4svuKCWzXFD76efbPiBpABd96XmgCPbsbDf8dakr28B5gYTtp9pKpqR",
  "key20": "3FY7c5fpi5ouMWWokNWs2xN56bJfWVryvrZAESv7o56m7aWTZS2FeqNvhAGypeVNgnYG2n3HxXJeGckSSPmZmEQa",
  "key21": "55RPVy8Q6vjatVwpEVn8XDK5C2tNh6ULZ8ZaHrhBAohPgcZdmFDyphyaboejzAX1axkMCdNmfuzNB5EmQXa2MGQR",
  "key22": "oH2Eioz113Eo2HghzC2DiEHweC3FyBWURiQcktanqq3X4vUKjFNfFL5RtYTVfikxMCvK2CFrqnGKdhMbAts9x3S",
  "key23": "4PNjNMYi1S37PNrbX2ckYr8aUnHfPeaPjk6RF1qFzUZo4yac7Uuzrc7XZDaFF6Ar9eL36mV8L68LsDxpXAdeosat",
  "key24": "9iRZrsf2PRV6E5nbVF5g5pCZtcfLXkuz323m5hic4ZMFEkTs9mBm8RrPsoiuv3953fqMkSMYPeiB3FGqeGmmMN5",
  "key25": "5sCyLaNJTsCuurynazvdaQ4BGyRacDXRDu9DnbAhUNyBe9gtGj7EfN4Xauoe2ms6f46htxDuf4NtSuaWYNsCWT3y",
  "key26": "5i4AZQhig5WwnhiaCiJEeh5bpE6FA7mWf4zeHZyTV94uY98BtZWtTWgK5groNvpgEEuHZfWUaDWVSK8majD9s5Ep",
  "key27": "3YtdqU8YpXxksYXYZGEgJ7ZALsM8yJNuXhYfCo4kWZdtEPAZUWuNpUfoGnBdL5U2VjTbjqJUJUQdkRpvSDhiVJrn",
  "key28": "4V7kx81DuybpGk4w7ufVzjunWd8aqWG8uC6eZ1TkZHpyJ1BnJSxyUbrzRYmGJJ4V9CC7BzmPJ73MqygNjuTDuwKc",
  "key29": "4M6T69owJuiKYRNsdvewvb8UM1oZYbmBWo6XTiuW9h6gFwwQBmhhHALemkm7me5AdEHRcrVv414gVt4eFpyf4hpp",
  "key30": "2Y4v2kCBFJ6Z3i8qNM8DewVJFPweUnY5V19jVm877rQv249rep7D9kbRvo4vAhoYJayE1PZCHgeKJ52gSKFnD1UN",
  "key31": "3nDpery6AC8xSoGAYwfAWdT98sgREWJ7dG1JLp4kNF9JzRuCQr9uwoGShn2bcATCGN9hXymH2QtN5K9u3ynvdmC4",
  "key32": "3Ud6LCr9e1nvxeGc9QBnawwpx47qVUpS9sMPQpitdDAai3mbTa9nrWchvWki1LDVuagwXxc673HQqxAZhGrGj7j3",
  "key33": "597dFEnn7ZUosnwo1hyw4yxfuw2WV7koyhui8D3kfSqT1rZHSwMPmfm2ooE4H9f9WBUjygEnaCtaZrX1mQypvKYV",
  "key34": "3BAyhpwUrR6EBzZYAWRWw3bhCpg1FbGHbk2BGMASaTbVuFzpHBTSAh48jLyLtEFr6R2WL4cYYJuuA3J5EfSHXHMv",
  "key35": "49SLqBEqy9xvgXmZUyVJYz7d75wSnMUCo2QSnuStuHdPxJbgZ3ejqimyBR3Bfe8FE2pha7xgKUitH9uvCHCwJp9N",
  "key36": "2LqcypTb8oHfGtDxbWBobq9kxmvWbL8Pg1ZzyuVpH8tZhkvp35ov1YWi5bbQ29CVEg4PUS8RDpSivU1tm3HLehDP",
  "key37": "4U8CMkqAHEqdPYwmH3mEajmmnadv5Yrz4jmkVPhnxN3CWeN59rAM8GcdKyEcYoKLXMcoV1GX6mfTyNAABymxWkXy",
  "key38": "oS3SkWaWZ1tiEdL7FxBixoEggrfa9moGBhxvfCbBeTmryxxCovtSYRjfQhQSKe5ixHA9AWdy4mteRiq67aLYLoV",
  "key39": "5JX4DzSV46zBoJUmzdPbuk7xJS2Z5va7qZz3MrBhGTXyoR1JkG9CNVTcHDKmebojr1yP8DD87zKpYQ4wYgv1MAuD",
  "key40": "65GHwuS1RNucvrYvuxzkkBz6jrWNRc8aJSgtXNeWyS2BohSGbR3YaQ9sYaatdK83DLx6hKa7G67Xc57ZCg6jBumH"
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
