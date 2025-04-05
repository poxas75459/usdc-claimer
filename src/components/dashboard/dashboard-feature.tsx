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
    "Wy53gip8MZYpryk6cxYwH1WptjYbwZUu6WjewzC9eQDANmkNPDtAckGKJ1DbtTDtpJZZc8CrwVLqpfiJ3mUxKQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5aBjsJcJvfE4HsKMZs854pUHSgQ74fRF2fcVntz3wqb6hojkv2WBUDBTuGkNwjZNsH14FSW13Cm7j8Dr26yAkS",
  "key1": "3LKJyFok47nbsizWZKfCw5tj6y92gnYRQRG1xQuF72YjNmbSxDJE6wDSBgo3fcifw4Ee2gLpyWVVoSs1aVmPbZic",
  "key2": "3q3Yk1bi1LiCFeAwjSPvpzgXvtWEmp7vpvCwuuUUzgmD3E2dPpsmsWH8TRPJPS2QNbnyMPXpzxdnHSP3buZQuUDf",
  "key3": "43frDk2NH97LnCQp7uNtVC2GSmYCR51y68FKpejZT3okJpk4771gcL1sJybFa6SSoocUGJYQGgxNNGa7LZeQRD27",
  "key4": "62jghYPi9Sc2yPN64pcP1xH2e6StgH1kxT2P39oRMpos8pxtfhy9opJ4wh6hcGarLfiTM6os5za71GLJArygVCSE",
  "key5": "dgp4rZZy3gyMkiHzPUjDpKub6qu3rV5BBYzFmRzbD7Q4ZR4kSrW7A9az7fSymVBBJCfr4QYWw16xFEierp15Nsy",
  "key6": "349rdErro24NLkNqKMze4RGAWqnVHhbsjwPNHopWbo63MDZhX9Pp37xaVChu1b4Gvv8EtWGy6QXTdQVbb3gaRasN",
  "key7": "2bo6oZ39ABLVEKZozkikScFDU8EovDgFo6mna3NzyeZNBEFCgNK658B7Hog8MsHRo3ov565it5DBeinrSLa74JhF",
  "key8": "2F87c66QiTHR56FEHqtyW7SYASQfGw1UfPMLYDJSdmXxptFCeBdwoktp4qxXjJsznTPXVUS8v98tepr7NimUZVQp",
  "key9": "4uik5WRwS1Sbp6dFT6Bq8sBNiqX8Wa2s3rCa5dUPnacXM3CGknQdvfZND17mDBvNAXjqMep6BNJpuxon1MNvoSPg",
  "key10": "2X3UmzhZtQBfyFWqYqjf5wCCc3tfK1c5p2bHXkuCARmRwQLgLfKAzDxJXTT7U7ac9Rfv7D6mGn9EVthwcUuYF9qf",
  "key11": "2hbRjdBrCVLuMKkioNNxN9NgL3jHUGZDpcKUUrg3RyKXnTmxA6h5NPaCpvpQNkgudxdhAz7U7CiM6YqP49xHK34x",
  "key12": "52QFNPJE874d8DjE8Xv7TKUGgf4XwsNDUQTqFsrYShjhfn56fYP8TpXzBGpPLD7G8bV33hotC97t4AWfHS4947r2",
  "key13": "4chP2Pj6pvnq1qmjNAhHYUnxQereELE6q4SSkagoXDPdiqxq26ahpWBoSjmoCkWm8LcWDn6DcLSD8zYNj4HNQWMM",
  "key14": "3mGL3BkzNwtQij4kwki1HQSQFchWpgXcCYwgyNZeYGhnkmfe1G7K1PmAr7zUALZzJcmmQUMnEtwSvYuiaPLAsUF",
  "key15": "x7UznhmirGTjGmUcA3eak5F9ikbhoiGznZTA1UQR3QaZeAGVrsxpVtWEcHvaSCHmyoJiRNJShnhBhfXhL53ct62",
  "key16": "2uHb7fszy4LGBjAT588DZrFbEWTYHNXojvuUNMwrmirUf43NKeTXDPzCBam7eegfbxaSfg4vMRhVA966omAruECT",
  "key17": "EW5bFS7EFhmVvkbcLXHcbvLT6zh2PBcqPpeWNxcKHnqdFBNf3PtACukZy3v1K9HJeipphteASetkPoqKrki9nyK",
  "key18": "EjHnFpLZKNcfYHKYU6UX3zSFxHUTVX7Rx1wPUadsmejVshUYCtvwKE4cfwLzPxga5BiNL1kmRTL6NagGnyzVfbL",
  "key19": "2vsuvo8jFWcNfRr2ZAJHJN3A7E29Atha9Z6VsAzbcYQUbuG9CLzZN3yLoCKKH2LJ8P9T9GHb4FwaKqSHsDttyLB6",
  "key20": "3XavKvPkc9nBetQKViUruBHwYEoiWUnCsMDWgNb8HhRYapmZfWr4VY7YRPFjWzsHrw2pbUyPUbT1VLBXyzqi9vK8",
  "key21": "3a9Ljzzg3W1bWmCtG9SMtpAnrEy6uroZoy6F91k22gDckhwuZ3pUqLSepdKchtg5KYSYM7A7Ksn4JCg565b8xDjg",
  "key22": "3NazHr1zGQHBnVBX8k4HbiX2y6yFexzZCUxNjX9QHijrGKfE7mDKTMYi2JBLRv5Lsihi7hPL8JChePjn84tnhLpV",
  "key23": "k8Y3uWMuR9CGrTKVhBSD5LvCP8VqpfUSJDgpSqqwjNJDeCbpKNqV3LVc3msV9NabVG8oxqAyJygWhqSeUwEMnz1",
  "key24": "5WjRrxmCWuCqD1VwxefnvaXvr6bow8BEa1DHBqf69SWxzNgdKSNhoVHhqmdb2fJJtq2FfsmQeQ3WewaumkraoGX2",
  "key25": "21DRhq5S5PkLoFFtaRjRUG54nbTKFkru9jBdw4SRH4VQDUGWEXYUAKCqqRmY5ZUa3ArepN6stYZ9vK7HSMWxGFT1",
  "key26": "2277CpjNynYnMJaQnp5NmdYF836MWrFLK5hT2XZyx4kaj84YtA6ZVaDvpDniCr77UYYQxNcRrijtdAPo5NpnqCF9",
  "key27": "5zd5YU9SRHsqB2RwJg5xjJzfUBUS9aDAHYxozkPSRC4YwiZ6QcqzrryshDhaWZUyR5G9UWaQz6QyNcBNb1p71ZqQ",
  "key28": "4s59QfXnEHaumheN2GZtbULTNjwno4eBbm2GpSNnt2pQKGapAxHhyBjF6KKcmbgoQmt4HL3qZtxPisQKPosbDgKo",
  "key29": "zvB8eLLQYjVu1Adr3hkamXhFXFcwXqgVB5NgSvjP12abM6Cx2UuVsnP2gZdyPt4EuQf4H9Lr4vULfTGQh3mxKVN",
  "key30": "goRPtGBBN6Yidcez2EfJwe8cUwauvMvAnGytKHeFtNaChqQCxvtLmBdjxqX4NAJLwP8NvdjXtT44uEuj6Epsk9v",
  "key31": "ZGQaoYt8W8x7RPndgFBoKPR8sRHxq1XaQSXTrThbvCiArXRF5fXbN69cKhuBCx9v2SXsPKuyXNdr77yV9gyMHVs",
  "key32": "3dfvpTz7ctoYKXvBnHE2VC9r3zPGEpWk1SnkotmBkKxMe9GuNB3ERgGwmbVLgiP5ontU53JaLgsr1KiBcnD4YiXq",
  "key33": "3WFThXi4oPUWXgLXqwwDFYoza8e3SLXPLaXRSCCKbYGeM92zJwE6J58imW5XyKjnhaVgCQWSPvnX2dDE1CdNW5RV",
  "key34": "LunYD7HgG5xcAGrbSJ95wJK9DRwZZMGAru8hmLZVRjgQQA1VxgziDXRoaoFDUKTVDyeWDneUXp54yPc1ncZ3ZdJ",
  "key35": "5Vmmrv8rT4pGQRHoa9KvQPvsqim3vhue6Cj6cvS2bZBM4BG5EgwAXA6SM19boF7YD1eMLmi4us2AMju5Q2cFctba",
  "key36": "5TNaPYUKWCtrufLme3mthPi2zcKADAWAoV4zPApbTLhYWrZQQLHcL5QyZa2qs4NMfrU5cAoXfqwfQwKPsUUvXa2m",
  "key37": "5UDXsvhZkFo99yrjAVcvPrffqBrHmp8T6dCRkmQH9BmjaY7HitBsA2Kg2FqXb4eoTw1MCFDm67FQm2msPZeUJ6Kt",
  "key38": "4Q4c1WZbKcvrQvkPkbzCyShKEGTYMbGAippYmtZzCKSR1FGTZduubBWTf2fFZS5ujKczkmpq9EtdVnoztVjZFjVt",
  "key39": "5NJSP8amoXKhHvCJ14vyZxvNM3FpFuCb8HxXJgrPGkr6AMoSjdaUBKXHfDdmxyDP5mVDRTTTk12MQaNM5nvAPZVc",
  "key40": "2WC7TaT8YUV6CHpijUgd9732YSuuR7tbtaNqQJSY9QT1CGe5FLErW2nPFxQKaUHWsd65VySxuXbUnznQYi9DBUJM",
  "key41": "Ag7WjLxQ5KRzhm1TEboCYkoGcKEvTHYUgWQk269tg6dDbEbNkVNjSXhYSf6N7ZLJLbjf8RdBj7XQwswVWdgzmz4",
  "key42": "2npsgNBr8wLhyNBizb6kqWBA7FeKTRxNeEWqWmLvhmBSgpzA93oGd1BFVp9y8F4GGLFQ27TV7ysut81BYtbxYyrK",
  "key43": "5ofkUjmY7Jvx5dJaQRgpM3ViYZGMHdsFiqYr6vg6czcNtfRSxuFZWjyq4anQfQVhTw3mnwr1NAGZGRdP3uJ1YgYL",
  "key44": "24r1ozLq3y6eZjdamkXgbmw5M9X9ggB4dND1XwWSNGQuoD9YGCKpv9uABf9f3uq2r5VMbW9DeoiQzSKbNLs8PWKc"
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
