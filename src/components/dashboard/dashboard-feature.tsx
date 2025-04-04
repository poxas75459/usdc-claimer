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
    "2tET5wn2kHCrpSStRtRBkXkFPZVqY4KaB8xXQdSysjJVXFiwc5SFjrRdHzy6k8ToQXnPNE5hohtRMrq1RMeZhTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZCuLaMoU2KmsKpExFYDPYd4M5VtpTVUgqK62LRMkUxzSmJvvB3GgoevkiknkSQ6Jsq7dYEQbEk7DxxtxP7nvs3",
  "key1": "2Qo58JzNA9sEBBoHPf9curQW8JFPpDAoBvgRWiNq2KiSujrh8ZSguU1XogfkfUHQuBawiHPjsGh1TjTU4oeEkcdq",
  "key2": "5CiXDWsDpWqkBp6TfkByArQz8HL98YNMZoaRmuVvwDnbFNRyMbDT45hF1NdjkA8PgZmqq3YifLrp8cRpfLYxCTe1",
  "key3": "3hiSihreikSMfgce9HZoRBEkYUADwRrNwQ567PWqMw8p6NpxgjUKD9pLNGSojwPn3N4iNVSFavgwtC8f6tA314w1",
  "key4": "4T8KWQQnRYBWAC96qC5ER2fyUxHBinkfvkC3F9pgNQzgjGUgr6grpDMAq9Zpi5GVpqTQ6SCHiM7rsecE6pWRimDw",
  "key5": "2RU6veVbFac1g4AoHTxY1xU31J6LK5NTVavv27cYp5ceXruhP2rYRaXKVHHqrkCDFezpghgE9mepswViiWXRyEE8",
  "key6": "4LZQrfVuxdTjwtnnFpkyeM3kGtGWKGrG7P8iZUGP3ZGZYdYzHyDiucfDeMTK6YTTWuPBetKCALze2Cd9ygPw98kG",
  "key7": "36fVCVeEZm3rNUT74rA2mtUsJWJwqUgaNJ7zbZq1wokohbscd5eVYttqm92QRT1LbAYfWXXQzRAa3AnSyeL2TaQR",
  "key8": "2Nx8tMRQBYnGqeyGgnRvgjUjWQwRwBz6LTBHKQoDrB2HT6171YrTUYrdpXRuce4MAaJKms6EcVRU2j5V4GA7Vwkz",
  "key9": "2nRw6euzb2cm6GNaYftEuZZYToMP9srLsm5ry7RAx4HEmPpGys1nYzrH2MAnhSF6cEnTUjyh7w2ayQxoDxgZQzEG",
  "key10": "3rvnMZuTc1ihrPM9HnNDnu7ZNb1RzLKckc8enZwhw5LrhdPSRpzd1ZYRL9nnpYw3B9y1YPmMC7sAHiAac6JmPSvm",
  "key11": "4DNFPAERsmhUyR1jantRanKxid4oBzVdMWvLFb4KtGk5s6ymw9mr2BtFJepUpn3BsPdqXZJsg86Xzwq9ExazZRFZ",
  "key12": "4UZb53vpkVYkEAdhKDKpJpMLYnQxTmdFDmbefptNG1Nssj2ZoTME7eNiRKSLu1wRmFotGSQKynAAViLGaB7Z4Xna",
  "key13": "2Y3AzF7Asa9yk64ssjU7WTH8TUc7251qFw9KU5Jv5h35o5BBiRpC9511fpXKVARhPD8EWXDdL3JKobpExpabDsjX",
  "key14": "54fvhTfYcqbEC7jYnDrWi2utEyh7ZntKaFVpAfyYaYUrhsc63uUCjUH5qgfHTc4bMPHLuSDj97tThyM7nJQkhTzU",
  "key15": "2NSGn2wbrd58JaW7i8Ynfds7FHeXahGqVqVWJZrXvYToAWxUvoHanhQZEL3Gkh2zLk7uSp1DCSRgmkYskWMo3vvi",
  "key16": "3BpjxyBckhjyKSVMYjcK52fshxGgcUNsVU5bebs37TeewoWvGGWMy2sQyXmNxtqYxN2T5pmYsqoWpBQTbJQsWfVD",
  "key17": "Y3UjVWBJGwWFH3MzR4rgHKFdutWs1MiL53aijN2x71UXh8RgtjttFwpCuw8Qmaqm6YuzTfaMHm5GHaBeFWtvuFB",
  "key18": "445Yp3yHDjeSegX7ef1uEEGYijERrWerQHyGJAHwq7xa1gDaVHfimLyMkuRkaiyLWA7LcrbWZu6qnDAy118QRV7d",
  "key19": "26aRAZMHPs5VEzt2UQFCqSQDnnm3L66PsnGZijgjkNiqd2vbsScCboNdfJTd99f3aJdHDSbmQjEkZ5vWT5DnRtoN",
  "key20": "3fkUCQdMpFU2n1wAdEQrudsEvXMKFqTSK79gp1SNk1eTywkpotBtafEmyRuRytbYV9HwL8Si4RaN2LjzmhMfEqK",
  "key21": "4TTPJcux8RvinXDcKeAFNDevoMaC3MoKQE8Mo1F9sSEnHKuDTuREA5XL3kq6eMLZiAVJt3iUdDhCWpBzVBoxHR2f",
  "key22": "5gExKdPtHpN6qTDtz2BHkKLNSEbCDpFPgknmFUFtCP1GemvbnJut3kM1iBYBfrc8DRf8vKE24jPwGA8S3QvtxbWi",
  "key23": "2xpxu2R7zJwdyECj8Z9GBfV75Zc1HS9fojjcAtBs6CwRWtPSMgzRjTRe7nt6tKURgPFJgz2uP8CsHH89zSHzUpJc",
  "key24": "5hLzZSsg11tEJ2Nb5DFh4FmR1NzWSNcGkSDN6pdp4CFFLkEqF6usNqrvnbTUD3zKAvWQRQx3ZzzwzLEjeUfrGiZw",
  "key25": "3Bt5qw1Z2E47ZjwtTxDH9JPsoNaF8MhMcycRj59KQEPHBuwvsbQ2spMXhA97p9LNMSLrKiHDyjrGVwMTvaXjRBm6",
  "key26": "oJ9u2eQQwAGZaueBoz8Pezzoeh3xevmJ6ZZzhHmKP5b55aRZ4744L5xCZHVBVT3gDsWq2oYDVXAe6YPUcsRDDPw",
  "key27": "29Be3uVUb4NgyiwXz9WkZ69Q8ics7ux7KZfDoojfuNLBZgxcoqvsZk2NXLPg7GqqQdTwhLV215fC8kPJo8ZzpmS5",
  "key28": "32BL3Jtfx4mnt8xqCSkTys2r7upmPf7WavawHAD82KEuAMETSZuc7zyWogykiL3D8gEeSTeYLgAJue8LSVLks8uX",
  "key29": "5B9qUqXV7ueAX1nr3XQ6SnZSW8VJJAjBHPugAAqz7BULBzoeMFkAgJapEJYCsxALK4fQRo9XeUn8nbXBCqJiPG6X",
  "key30": "5c3ygvCgMaJj3LUicd1gBtQvLzYmuhgSfWKy6uv8phfdYA68LS8zKCUjN4jYrTE261MtadK1xqb3sC91qbZqk9UH",
  "key31": "HZcW2dL5KfE4U9ro7yF3JcDMs1kcXyDLS7R6rV8DqKb6k4HRxTsy7K2Vpyr7uCZbBknGj6WtqQBzaLsUQFeKBj9",
  "key32": "3k5kcPE8EJMrLj44343EmdpKm4F3Nd1z7NpW6uitjxRWighdBFw86Wi7BonaWtwvRXPUkxuahCy1yYRnWThJRNUf",
  "key33": "2BFBesh7ujiuAoc4uP5bpngup91qZ9LZQtz6SGQvdKc48pVHUgpEzb9BcGRGPHxLKVjUPgLmU7ys4zK79iDo518d",
  "key34": "5TtEthrux8XQsecrzbt33odKZjC5C2Kw6nQS97zky5j5bF5jxuwXJ325VRB2kS3bvRYUXiA3tFxyXSet2X8hoVka",
  "key35": "3jJDBZkPNqtyyaV47KSVnUwGtHbYKD4ztpVw3tMVut29ZxH35MGYnT9Scw598qfFjNKQyxqK7GAE6GHmcjc35e3K",
  "key36": "cUDKdmevCwo38v4kwdcGpt4k6mRKVrHydy79u7HbJteujey4yL8pMoNsBvv1WD2VpmfCucwwexJL3k3TuYe18UU",
  "key37": "2q2XD89hdkoEBQ93jTU1jFLd2XgCKH6AHVmguneisrpBPaTZ5hxqukBuQ6xR9YX1Jkf2ifn5J9JWTKDn7BfruKnf",
  "key38": "oYPtscDYouVJQy9rxo7y2d4Khycvv5cwTU37wpCe6QhnQJCZg2VWSY4LyN27qZZASaEMrQHM19WXC4v75uzEapV",
  "key39": "2xr3cTGzQSCUHG5wrtV9heN1H3oxo6zF8DnuNuUmcYEzWAeodiyjg7WBRS7Cu4ZVqkZbRd68VZhTpQGGjSNFU1gx",
  "key40": "4s732ji4xwW9HX55nSdkYXwsVhEE4JucUAPDtaZMUVohwNDvvaYnpVsNer2fXxMiHfZfrFmeYn2enPmpTrkBEA5v",
  "key41": "4GD9cafFrnPGd1UnQjZaz9mSvEV8ffacFR463g6A7GRSoNMV7NhLDKojeJFYTMfwtVp1ecsCgu2o6GQWRs2EAv9G",
  "key42": "3p21Q87xvrjPVtYR5JcjbLRiFgx5qLv9Ajic2g1rVRPJN3J4sr841jrWdo5N1eZ3xWE96iEr7vXP8GEMjQGpNru5",
  "key43": "4U76XXnGQWe2T2xdtSjDMWeNBcTtoZT7VPTphA9mYdYEL7QyhVBn39nMjpiGSiuEf4HmiKfC3q7BaeJCHNYnY1vX",
  "key44": "3mMfvJEAfQyRTWfyjwWZWsGe1oUB6AAmYMip66VaJBUraPoZcznYihJ6MXzwCDpV6LzbdHr9R6ruxUL2isv4SFyj",
  "key45": "35ZeyC6ETVmEyWM7drGpd6BJ6mw5j6DZVCbbHq4qz1H9XSAyWYr8FePm3pqxYYFFv793yzjHjPGA4EckXmRF3Cso",
  "key46": "2Ax8KjrzxCAtqhCKbqQdUB9AYJkx8rBu4YeLAZPgZFqaEAu3zr5Gief3rs3XfSkzWtCXMDAPcNvc4JWVLEhTLvdF",
  "key47": "5hQsDuMVSFob5xN7YMatdQ5xcSNEY4BjGHnGNdBAQKiicviQFgNSKr8RQv3XSnrNCtLNnBbhdunR6WHNpPQNpsX4"
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
