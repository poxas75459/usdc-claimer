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
    "4fosxZP5kFNC3tqJrCqQuSPsKXvjTyZDu3vTwL8vhfPzRtF1nRCtWSYsijwaxCWcduq44BzSamcxGjS7eeP2Mb8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyaPcTRMTpbamKpSgW4LS35ucPMosBfxkh8icF4wLFJPaPsxigefLNoddsDKdMSqjpFzgxyiP5hFDgdRGddkue3",
  "key1": "4zbH3Jh2T4pzdgKto4bshk2k9c9dddP6czR9sFhqCbNVoVN7jv9XH52RmzksbpCbw7kpA5Mp1QWWFBDc87YtP8T1",
  "key2": "53pgYdNiXFdigVGy545NQ5CJfAjZ47VxpbDriEe5LGRiwZmqeJRWYuwydpcu7EwruiHH3Q7saVeyYSeXE6g42naW",
  "key3": "35ysMg9qNqATGkmtviTMbDhrZvTA3HACcb3QU2gin3ZbuvTZ342WAVjSGA2qFUtZS4VM61zRzSy8nRGaxj3X9K6X",
  "key4": "5aExLm8xAuY8w2wr8H7KSUcfmLSUxm4LaSJTN7TCHDLtb7iBppJrRnipX9Lt7qEgdfY44jkYtCmCW2moKzpEwyV3",
  "key5": "2nikEMSmBm7SAkR84cEDdFSR1adSPmUaL9NgeuB2V7nRCQPWaXxNDoinFbYgAZdyjGUWS93tz5MrvLDenJctMqPQ",
  "key6": "2ewRZUzWSmyXTtTaiWcc2DAi7wzwZY1wiyvcPCmyvBDFtwmzsithAa47V1u1boH6xBK4tTXwwjAr6VUbaJxa7EzB",
  "key7": "44ZZ3ubUz7svUY8tnwgawGKifBhWZsp5SGHuV69EHiocF5hXBnDqDApjdDMFnoY9SXXUdsSVg51UQ6AUKz5uiHLq",
  "key8": "MZ8CM4zGDKYJmVx3PX8uCb7cWhQ7nTEupCARYXGFv4MXjt6w15icuffZugPTvteTj6M8aobLWFo8erarC4Qcyci",
  "key9": "2RRGji2HHtHhLvbDjgi4RRqdoBbaijpeiP7upBTYSFh786NMSFqqyNG98xtmEYQJWuziaKKmDQzcPbo69hwphRPL",
  "key10": "WEftC4P8qm8RnWam2GeX61Vy5BmcSR1T4UUZ1u26vWFfkr8mFwZwSZ3yQ9Sx7P151EhNdXAU3YkDBZci3UiRtxA",
  "key11": "5MaXT7obGN87SnRqncEZVCs4nanLzNb9sAHir48gbCViSLFW1pdCoArromcNQqN2yXTjK8SAEmqiHx9Rk5xk27m6",
  "key12": "3m5fAUHFbeTayZFJrAJ115X2AfUmtfkPueyJ6wK3KHbzanSb8rq8CgKbYt4w1CwbAaG7WchxSzhoPz3qJ1FwDTg1",
  "key13": "2WZH8SZZydYjgxb8PqT2iUr1tWq28bcmQ8mfyAmEdkaLePK5qBDwb2Hu9Gt8ZbxxyeHTSWLPvGVhnKSwXx4zUc81",
  "key14": "cQNBEoZptm5P4XsZw3nwexvZ2QS3S7e34GGCXjdJXnwrSv9z7Ucyp2X9Dr2DoqZpkAmCzacayuCUtbRWtYQMS8b",
  "key15": "5J7FudHfi921Cxk9BvPb3gnEecHvdTTNkp4isQnWNz8TonDUZWLSpDDAFrsCw5jZj1wpJtkmQy9dcKaCNJuQrq4N",
  "key16": "67RfeGyXhEKXPtzKSLys1SoaBPwEsYKXRHMLgKc81HU6PZiyvLD7fCmz3V6JGDEirpkKqjYMzhVQ9a8kH4iBpvyT",
  "key17": "268xNZ1c4NMhHrdM6PZzj7GhCQpLaC5JU6vySJon8tygHYbue9dftnciQ5L1ENrso6rhrbQiaXiJcyKWVEUH91mA",
  "key18": "6dfBZr1qec33uFbkGnVspnjjbPsD6JXtryF3R4W61HFkhAAcCkJYJUVzVdEvBAyi7rfF5VLZkByrLCHJbD2uU6p",
  "key19": "5DsC7qttoDocNnE8JmGB1eiqpnFdjR2HBuo2oxf1ZDcZSSxpkCRqxTaWoNwXBoDrK44REjejoWPvemSG689hZVs7",
  "key20": "3GUvoRkfA71x35Y9jgKvDt415hc7s6t3gF6gx5BsK6HXbzKQww4jqgJPckJEdMZiWrg1Jbga4TUJuY4azGVRpn9Y",
  "key21": "3sowsSfbHNobUUc1UgKwEcEa39cgoL2BtrdqrNaQiRTZdjk721cdr1h67iEgf3VdbMTRjfsdCxnPmYigFEMMPNy6",
  "key22": "3HKV7NfesFXX1XuCSujqJSSVieWvVGEyZTr86FjVAN4owodm78ntvEP6JJhiSqkDGK2ZhBucTmxsZ1xN579E7zem",
  "key23": "4sfDWYjXFPoxBg9eiofbQUTf6rneumMb6ucbzQbgwQtDCp1tPnAm7xGd5oTd3PneUG5gyUW4BjsKUd6SUZJjKz1n",
  "key24": "LwLzvMvJiz7RD4HP8TH1px2QZihHpMDZUXo7soGcSaJNVSxY2Y8UiMHb5ZbH2bNGFjaeeYr7yACSuLqXWBqvtxm",
  "key25": "4seCiYwRuoHWzfBbF7PCCBzm2wxPNdXSS1MWJHwGd9zwcTBwuEXWeGTzEmaT9eGUVq4WZRojpGV3yDUWPZwbHC7C",
  "key26": "4wQkh6ujH2gzzBi6Gp4CF7CmNqFnWWH5Gy6n9DgkYQdcYvk6YkxBD8jXhkcV5ZJjkSSaDghmfjPeGUmjeqRbk6sr",
  "key27": "5CNxKANqg4fihpSSAQagU7QeXE2tkWjPfLPBuxLqGGmw652u2PqJKEh3SfR3xeEnRXXtDHmNyF4S3xgZHCSRTjus",
  "key28": "5kCkUmLm2WdDN6NefwUyP2hwkcAgSntTkbhyRZ7y3XU9JJZLuJFpo5RPTzLegATKpLpLtpPAQjV7dwFLNGTV3RUF",
  "key29": "4v2PUTsCceQyKJ1VgCUH8u32uVWXMz7q5YoSWu3Xe8gotZzQiJk4NtV2c5NTq4AF1P3aFbH5vRYQvuM2DbWmj2yC",
  "key30": "3JEynWVUPHC4FdiTwhZLE7TWJ3rZmGvZ2TuqEn2cHqXoVQteWoSPE1bhxodZxrMJvZqFi6p65QWh9Dhdp4Svqkd8"
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
