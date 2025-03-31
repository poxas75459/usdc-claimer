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
    "2RoHNXjSzZKhKFmfwj7WTDsuybUDvBNc2NSWdhqGrB47gvxRgsU2ozJGHym12s7cqpxMhcmrdSGgBrGVQUcsNgYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxRsj7H7XjaDFmnVQg9Jxx71Lhg8FDKWVSfKM8YUkqxUYJJp1DkuoVoQhsuW4iM1v9AWx6v7J92H8TjLwk9TfVV",
  "key1": "6zvFo8ShGe1rjvs3RC6hzDcwq6MtWvrcKiVGAUKthTHFBnyfR5op1rQTqbSyEuSHBHHpy5WgntLQevqDHpV7Mft",
  "key2": "5rbv16isxQGmZ9P5xEAjhmbtkGoS9mDD7gNmjcRopy2i3qKfoWG9KixA8KWjxEdVSpYChx2QtVUFTaFXfGoVd39s",
  "key3": "2ZWMiJkFjL2QfmGyp8z42t2eZPKW15JvuShydYgbqiXUpJz6C3JXiHkdhPo2eGhbtX4u9ZWiHb3Bepx31zi4F1Vz",
  "key4": "7yMSW583JQ2WpsDk8EFJxGfv2xAXnsi5C8xXbkmpk7hddJRfgEVVuHyazCwEfCWC4tGzL8ZKYcoLReDvQwsuTVo",
  "key5": "59J9Rgto5jyj9MuW2zkRy9NsCU1bvuZxHXK5RHHZHVu9XKpYdWAKefCCpzBeF6wjtWPrQkMjPkV4ELumgvVYDbFF",
  "key6": "464Nt1m1eEWprBiiFwnXDGiECxJEXM1TpkgTMWawYBNQv9Trb7pXsbb1KKoXPQEKnobEEu5NaQXVT8M7tQe6CP4U",
  "key7": "2ymWs6sCZGaz9iQJDEA2ytLnVRaR4hZt5yYM5ZZQM1BBShAPD3w9qDdnmn4N1Euaz39TMaLpqDFgc3Jh2geXbzzY",
  "key8": "2qZPoFCoS3KBoh8os9iXVRUbGjRMxFRFPSP2T3ZmCbj8sGiiz4xfkoK9fjrBnrionSZxbGREMn1LUKZu2JnEqnj3",
  "key9": "5cEH9rcQCe9KHcABg7c4Qi1QsDK7yFkV525P2NXwfMUUqdkwRPL81rYqRmqFVmNWkEJkeN8bfysAmKW9xFQVHd5F",
  "key10": "SMDychRRmEZ9tTyagzDxy3ZWtSd1yeKf7zzerhdrqtmvQAN8dbz9W4wLVhhLNbEGzoUZXq6vzERkPgfMv2iWZdS",
  "key11": "2CCdxj8i8GuU5Zfd9YccD2Cn9KgbDMsiXpjX2u5HwCLyuqPfP1K5bAckLsLShbSEVR1qDPetGvY3SMirG8AHT9KX",
  "key12": "3rsRSkW7nVrsnnRVJXC2dLumLm6CgymgR6frUiVYC85fSC1TFR8nr12EcJ5t1CRrkVqcvWbdoPvaVLsEf9nAkr5B",
  "key13": "5ZySxNoHMbCAEF4MjtqB37ckZ7wJX8TbyiboE1XKWJs35JebAAKT6dqoWHGc1SJ6GCd9G9D71TJcXdF1DT7iu8J",
  "key14": "2JjrzRWeUmscLmLN8enSBosEiuBRH4PxNp5JKhGRKDf3WJFFXj4bkqiZuZqPimt6ekwpbQb4Tjqk8y1464MSsR88",
  "key15": "3ztREx257EeujeHbyAWep6QHNXNgVpxnFM7sDZEeScaWCHnFyAh7MEhNE9LHzW7ZVEeSVKBgnr6VXAA6AWJyr1EX",
  "key16": "2742dviqTLbgRZosCgxtA7Zbfk1S4kCaWcRhvX7e5vBoL7xcmKCYQ84wsEJaqXRoGwiVDWHjL2FD6NxsKoKqmgvs",
  "key17": "99Roc1a4uLoQK8zZzYCtwJjK3DaEcWTVCYYV2Mrw4Pz8tuXBVMGrHTcHr2f28SJMVXCsNG4GdHrDQWdwHqK6aB3",
  "key18": "3ov5XZMsjQXHBFULpvxQp3w1MHkvapq2yUeh3jeGbvsN8ag9baQyKKsMupVsovjeqaeZChgztjCnmaZXKLw8WnYc",
  "key19": "4wPq6DLQ2rooikZRJ6Z6sXzeDTS9tA8x2owATVvyYnvdHz8CLJBHXdiBbVnEqiDET5NKpdQHwfjkmjL93zUcWBaF",
  "key20": "3pHQhDoFAyXFrLJZZGbzvr6eGSAbMjcVRLa3bQm5vZm2FVxPEGdySR1Mo8PyJbdCSMqNHCam9r59vwRv87BFSioe",
  "key21": "orShn4ooN4VR7ukLFyeSVHa4wpW1EYpeoGpJAcwV2pjf5vpjpNvcu1z3qe1mL9WikD7oqPEMLGjU9r5J2PvJG1j",
  "key22": "5Bs8CZK8yzChBRQysbXYxiQb4B4pjjLSkhJ6xdgL3vZHuarGXUWUZQvxP1PghKGCnEvFo78knzhLPAGs94KeZ9Sn",
  "key23": "1tSQh2KJ2WHgDeR7EuBR3sjjhyXg4Ngj9VuPe4Eimn1YKJNKJhWJ6kMWpfJ2nCEPkf5TpToZ97VfBLJMicTWGTg",
  "key24": "3bt1APgPFeE1LaTx2yVAozemK4Pe5u12CkLqJDRTvAV8mSPXj7FTyoHC1dM1ruaraqQNKbQAL3zhoc3tP64PcEyv",
  "key25": "4gYTdyUKXHnEntJzwrP4gahseWM7fkwHypyLBYmhH6rAfpJxCDcGURLWWg3GZMLSL5PmsJC2fotC2uSgcJ81E5Pi",
  "key26": "4eLG6u7WRBYqr4qTZ9HoGHgXRMegcYZn314QdRQ22vqpW1R65jS9H5G3sc7vZtaQ2QwHCG8KvaNcm3kdGR8uQChn",
  "key27": "5UWTGBo6M7uvVbBiiUcVfYDBWrVQ9FVqbTTANiuoxGxN1R7mu6MDx6gu8oRdj3Va8HdDQZFdQzrNHySNyxUTfK86",
  "key28": "5ekA6SYc1bh96dnL7ca27tVMZLiZHYsBcyv8uXuawafV7yCheeetnD3yiGs8n85H2LSkBAQeJALSEQfMRzRMypHJ",
  "key29": "2i1M1c9d2oVCPv2gZxUj78wxGAZTVJUJWxAcR28BmB4r1vLKxN8FchXzAGvos1Dy5Cg5vkoTeRoj2anpm7hPvbfr",
  "key30": "NsgpGdPGWJy9UGyqGvuzh3zaMixRNoVHjR6eNsoqdBKqkNRciuavmiuWya4Kuj7msJUzk8C8ZbVSuvZBs41AHii",
  "key31": "3UYgWULUyFBDxUexpnGpjXgYouBgjwngr1aejMrpq1pkNp4HBMqRQcy87QvkYgfFYViLLbgX24yXRHjFsq5itsQy",
  "key32": "9ycDJasxRo5UtuPtboMuNoZhS6TLWiF4VMZFwup6hbgmr4bUF2iK7YW8babDNdGWjN4qr2gyYrhMNbAy6qvHhdB",
  "key33": "2NbjsFEYugZRt8WjPXcGSUGL8C7DXZSJ1uijk2X7yRyYzUihgWHEqe1NDpYAhkx4SkkspvafXeFwhYhk7T7g7zkJ",
  "key34": "5zZR5XetJFrP3wuNGWNzps7m1L6VPqcXtMm9V7gh9ajRTfkn69wqpisuDWUx5jvxzAVoLdK3XUgNgvhfTdVD5Uxj",
  "key35": "5Pkv7J1GVaxNTtbguPWiY73RXihUzJxYY1uJUbVXNnkk3MPC6ofRehP2MnGqcwFXdm35ZaG7mSQmZ9M648GeyRAi",
  "key36": "Ch63Dm3271nqCQG1QEPf4TL5kHjH6QzNVXrUCwygDom7gFSJwgUhVKmt7HFyZvSbqtAEJrjoqaYtVST9nQ79J5F",
  "key37": "3zwMU2Jm78b8grERv2haqfTqxji4JPgGGEdEyh41a5PrSxYLCb75ioPChZCHq2DE1zZhg4XPuansenbZKq7hs3PS",
  "key38": "2nocjUX1XCPWfwRn7GpmiVcY6vcjNYroZkPJXFCMVE7yXrJosfqKXedeytSWfXYxkfrVc1XhmYgsEy5ZH9mrsoBJ",
  "key39": "uDu4kTuN2wpACBWNRJDG6cBfoHC63XzrFngqSb7rUjhhNJit2GrQCCvms2NuZ94qbpomSLPgqY2VfGhmuy5Ltjm",
  "key40": "29VnhpuXCfuB3LUBUxponYyUxQSgjhompZvAFUrPSdALJYBirgDGcLfPsRcPM3ykiD2AKx4StrotyLsj1oPonJym",
  "key41": "2YsBZfVdyVn6mBpGvDSPQVJVCNkzb9KunQGgkXJmj4VSpR8bnZYTXT3xirQVau2n8FHETyTPBKRmHvfpbctFJSui",
  "key42": "3n2yzfD1DsNXg1pXyMzbhyouY2VLUoUhu8CUo4A5GCTmdE5TMRuNizXx1fGV9ju2gZukwZZ3xYLUsDPzULLzq4he",
  "key43": "4StC7hYJrcruMzbqBnsyZcBLP9z7iNjkgV6eBWX3wm3xJi9WURChRakaDEjMLUu79qmHP3Z7rDBnJKGgVpCnqtoJ",
  "key44": "4FJTTSFqEchCB78s7Wta47LdG3VaHKipf4uhKCgmS5krH667BsNamjYhd2cGa9gVPmNYyMARv9vgQYBDJTmLpHAB",
  "key45": "2Uz2jtyH73uhVTZ2qt9Z7u98ufbPQVQA2zrqyzKdf4znKmJ5LebnDqLHxxeUYHd3jFMtUhMMrqCPAmS63czJ6Gjm",
  "key46": "MBdPR1KJeLW2iqX8HpoyLjTHvnRMoJQaQL159oiYKqENEGxo4FqtpUX94TxVXwhFkRYDhPLd3qHyzUuyYxPKDvg",
  "key47": "3duHhZZzkEo4tAtt6UzeYeopDN2FWsq3ZSg6rxfkjzQnC9UTDPK4ENR9w6KF3Ycqz7rqc3hNbJiSyUdjwDaofdpL",
  "key48": "27skRmmySgZRg1ieFr3U8tT5eZ7RnGKL4m6CH7CSVrggHv2YAUQCWRGfK5YHmbyt8PqwEMwuVHpYYPE12Fc1XBmD",
  "key49": "4BC8akZMnUKN7kmqrrtho5hSEQWDDhuVvZGpjRx9MZLoZafSfngBoPrZPQSM5yS79BP3wyWnKVYyGNovMb1TB2Fe"
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
