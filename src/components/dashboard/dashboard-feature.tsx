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
    "2NKqEzpqrxSskEjFj3H2AR3Y4bQ4tiAyucCthw43Vpb5BfxmFzXFfbQ8jfZ6Dh61WSXXTg9cPYd961K76fSfmSNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaywCioDHydUbDSTcpLNHqpj23m9b58eCMXQxL92oG2hTMgXGxD2BxhtStqg4ZBmfYTQKBotKTZaff7Cazxk8xS",
  "key1": "4qZyUBoVjqH4FYaF44H38wmZay7pd2ziuCvDv9pWFXvU6vpAatUpMs7E2xtsy2KyMfpwJfVzQ9D9K6fsGh6C4S1g",
  "key2": "2ThXBia8q4LYMwHioPFd26omt7HPwYDJVEvc6XdsKdD3rewuTzzEhu9pvLxbKXiis7K32ixYWAGh5SsAd1d8Y7Ea",
  "key3": "2qFepksmtjCiuJRFmqLxNiVQsGqr8hCxxFupynURN3wH55my92N72rHhPAaD6TmPFPcumkUDA9XCXRhq4vJ2TFLV",
  "key4": "5YYBWMzmox5hwKWpkUoYyDQKajSkMjBvX8jRq3HvMafNNHZwsT9AUWDSXRw5tUVghHEMDon5g3HaAxmpYtTxyptQ",
  "key5": "61LHeS7YohqrL9HBJfcynysTNSSTPqC8LFPfPcVTUtHuUJehTe8UDi16QRhrb2jYmvGxdqM1RJo1FtERmqbqBRRQ",
  "key6": "2fd2iRqAPJFJizNUBE4MsxVUTUA6FfC3VXaNS62kBkjzGi7UqLohZoUR6umYCQNXpYrV4DmTpueJrmNX9xkqeMmU",
  "key7": "Ggd8EYGKi5py1XKvCdbjCoDapxJAfnyBiEddVCJty1hicAYsL4pZj2XWTfudGp9m1Xk5FMn12wNspQxwRQqVK3V",
  "key8": "3SBaXh3278fLZCej87ZLUr73jRDw3AdnergNPr8YxqeejBSTCP5EtMYEDVjcRjX5ZHYJpt8cbEYafBdiwCnqaFxC",
  "key9": "HCzyzejtAsjj3DZefyXg9u7wrgscuSuxScm1WMgWhh4dfvex1Q8KUhSpv1GRwPxgB9CqwzWfPf4dzXwHyNjTpAQ",
  "key10": "2AiwMSt8sYLDZerA4uSBWEcGE5A4EKQw3zDdLeFMwRBTvqSzvYJVz5MYa3XVAAa2fvoJxtBisRtjeCS2Bzsf8RXh",
  "key11": "aBpvrcFpF4uAz8YTeD2Tvt69Hio6ziWd8DyZGcGYgKAfBWDGnSSAmPi2pYwT8QGoaXxKKgRxHiNQLod7uwzWUUB",
  "key12": "r2rBiA39qVAy6pPawqVqZnSidiUR2nhjAbXZfar84BXR9dDc51oogNCFXvKqZysaBNXA1feMeYDRok9bkvGrkAW",
  "key13": "4EHuJL1FS5ribeq7sfspsyFUDPRtvtwa73j8i3GaSY8emgWXuxhHtgaKYchYWZDivq1NQAxrSVpyucM9QCEnTYXn",
  "key14": "5Bkctw8X9soFmDpPP8GCFZgbN751t2aZmGuwuQt6z79y3ykwvpjkRJAmyR27QR5RD6crxNXaKT1JFdSdoTDNESyn",
  "key15": "3M1RbntxELVX3SgM6XQTVnynzvDF656SaCkNe6mr6bgJQes5Ptzdpk4NjuCQq6VsvigvsKB46jrX4p8JfowUrN3r",
  "key16": "5VGDwZsF37XLnX3Avp247eF5LtqhM1KYfsKJxsPRGNkGbbmn6RaQ8Z9j1Vg9BDpW3mxULFYJ1qRvPAU6ogETyzL8",
  "key17": "L8oqqvyWSeaggGoTrS8BkoZ2H7YZF9iBikRQVZKkAyxjGbu47TEsyy8BvytV7DrJXzCpsamvDgSnPumjXjis8AV",
  "key18": "41huxgkGpZdgrL34nuBe6xMZi4wkt8cQJgoMTPKB4EqfV6ekhBStGanEwCjs5NDoRfJjELey48CEEryuqQZUVCFj",
  "key19": "2owVzPPmYFtWBpRpApRHu2tsr3jci5ZHoEKPDBDzRLxKkS3wQ8gXvrU53EQZCRGeHdmn7tfWhR3Yo4VeaWX7294N",
  "key20": "4DQaWb4XDzSDgXGwJdAy1M6GwPKPHYnX5CfbTyBeWHy2AtnmVTd42Co4kevAZXrHpTRRoXot5zRTzQDWfqDbFmoy",
  "key21": "2NDV3ws3gvx6pAsVfQvGrcFRuFniM84U8MDGEY18s1UcJkfwn6pJm5qM4fhvjnwV8H77a1P2sLVXV3a1m311UNMb",
  "key22": "4nMqzkrhVfD8bYJdke2AyFaLWQ9tdaHGvZLgnsxPzBuWSraHqc8WteyTnoMPSpEdUisBghCmYNLejGBBk58Ge3gT",
  "key23": "6297aysNW5E1uPMNqPXBiNA9szdTfbFGbnjE3g4KGBHrwUnd92HVBLoFU92zfSsj2gwwnjTcqAcH21EA6h2GwAWc",
  "key24": "2QVxAsxrCXZhixTpKhHGaurHCiNZDHnkWK5V6aDo3EHGsK7B2yvU5fny46R89X7QJXDEVx7etYZXgpqgts3kUWqP",
  "key25": "ysSPZjSwU8sb3DRkpeLbNo7evSjAeUGBRwyUkBQaBhjk5G9brKB8FSbGNGbUCz6LTnYs46QyibotX1DjPaYJX2X",
  "key26": "GrXfQyqJJFdnocpf38iQ4Td38DYVGS9oZaQ9aDkAuELdhyYT2hxQWmrJtP4tnKA67k7vhoVQVnk5W5PWDLSQTXi",
  "key27": "2yATxGtuamPmBsbJ5BK4aes2EonsprRuvY8bvhGTGTBLaS8dqNQbEWFydhWx8ehyeT7x1oLRw5FYm2wZgmwjyNcz",
  "key28": "5V6yWAYNEg5ePae1x8mbpnN9wS3KkULvEuoy6tU6PzP6pGJR47YdWRqm5xtnqiyQwhQuXh1QaZmNtqzPhNAVmMJT",
  "key29": "4FBrB4BB9uETao3J17m8gJG9SjwhFNx4ZgvikttYWiW63h2Qrh2siZsPV78cp6ojTASftMpbeYn17uZVYNgY6jyj",
  "key30": "5yg6QcGXGcQzmPXLwkjVoc5x4q6GSi8kQU2pMn218yuYdZXKpUrRPLbVEZr5gSDtMH9x1J7MRpQzxccEXvR89VQ5",
  "key31": "3Dxtq3tdYQSTV8K2mWGX2FjfxYt5LUWFnSaf7PxHLKYC4L1RKswnaFeZs3vSb46B8zREY1no5vLHxidsxnf2HXdy",
  "key32": "4edc7yhkrjoeP4tZCyZ6BKwS5EYGnt21jCY9f4ktuSLYRPd4CJfMNPqtTuDARKWGt7s33ck5nQyv4MA8LDFN5ph9",
  "key33": "674Cfy11W96RsxTwxCqoZFrYZGE4EySS1mmGhb33r7gsCgU5Zgy6UgYGJwJEdRRKGsqo37QSZK1HqvJ4y4SMLTht",
  "key34": "5LLK3TzQBKBUwoYbPLwZPiyJsXzAVooEpuCwmB7VX9cB8M4jAkw7MZtYQ3H2pRDFc49LWxM4yMtbcMDa45JsCTt",
  "key35": "28dBrzmgRCUsFE9L3toNVjYoEoS3aPYJZdF5eKBa2EhkKpPxahDssAn2LGoYTJAhanmAJKZ6Dve87F3iYyniXaqk"
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
