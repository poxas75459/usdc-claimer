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
    "wFrAUYdEZ2pMGeXwSERZ8EUQ1WdaKLN9ja11GMdeUae3BcxZmA3w1HDF8EoCU4F9v2UgpYJJ6Ld3GqHn2bLdsn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TkC3arnYCX68ExMc7mzn1GFoDKh2dRaGgmyNEG8mgWJTY4fBnuhgE9jkAGngSGoc8dSTXxGddF6eueEydzsNAHN",
  "key1": "3tdzkJ5F4mbMWUww67bjiZJ3i6a1dCBbEVHhWyvr2i9RGka8UNjRufNCusoAHiPMkGSfBTzu68LyYdF3feeM8N7M",
  "key2": "3NgyoaZgkWZqD8uZJchK4VvAHnyYmFgYTKtpafvmpYGt7SaLzF6PCPTJVLi6D9bJ5iJthy6d7gjmm7HnBmazT6pq",
  "key3": "5v99XK33VWBBHx26WK5fUkjAkSiiBgnyheTGXq3uj26Y72UhqDXmtd2fwsJWZFHmWSTr9ZUkPMfLjeKYbZJ5QLin",
  "key4": "5eby2DS9WKFuPqMQxsMudrHTYcfLKursRUygTYiqq6NcQR5j3HpxTCyn3bDKadHpZs9tzSrSHk9Johigo9FAdxdF",
  "key5": "2EPCxQuorDfQfs82NkATFAWomzJSuAzEr5TG9p3sAwQXa4fjJKFgY46kvSPthE1YLgHC7wBsrk792xt4FCQk3dB4",
  "key6": "2HswBy9gb3rcMfadvd8rJ9PQqoPJRpNQaqKWEndNT7GjjHPFdzvfo1WyfJVK2niNuYy9ppkywYRBK9U8fCoUzJcE",
  "key7": "3uTnonGstKPWY1NfEe9DT9PkSmq4TwRZqsmfAh7WnCpFjwNeWvqwgL4q7iWMmUJfUKe8RkGfN7XmgyWmWNJ7utEB",
  "key8": "4Pku3UVvRZcgYPXpJADeEXYgJPuMb67bChxgNouRDZxS5Yq75hm9jFsPXPQBYRnNp5bfVkHaUPMshYGrkAz6ztnP",
  "key9": "3PqDL8jKQuVFWQiKqwXUmMncFC1KPGEodZ31ZjQ1HYmt3GJnY9c2dtdtVXoQQCohbTVttFDoRcAyZoNhmQ5L4JkF",
  "key10": "ZFwEskiweiCarsdog5mavFxvZiYdrXjE4mS3YK8nx9S1TKmZbH2RmDh3gWxkS5iEDZqBrK1gNhX17bN7jMMiKxJ",
  "key11": "3TfZejiwmttHDRc9wshffG7c7gmCj4VTt1zhxpbLyy26jnY1xoHziwDjsM7R9uExA7HwMS7S6za8Ly51yzeHiZ7U",
  "key12": "51MEhCJv1AsLVThevPwtGpKK6NpqjnjpvspkB85tZBJQFk6aPUceL5kszXS8MAoGW32NEs1A7W4hSfU4mzxy2Zgq",
  "key13": "5Hcagjq1YdAD6RdAbf18MA2TX2CRh9vL31KGxAGFvDTW6YNMLkeuKx5u7dbcKRboD8zPjVBAJHzigoR8WueD12qL",
  "key14": "29WzeWoKAQk9MT9z8gbtnZ59XhUyeA7EDg55qnEiVtKPeXFq7u9oXT3JXsB3tVuFtYk1kgvbYqGPnmvafbHwvwAL",
  "key15": "3HeLA2w9bWo7vYepBgLLSVoZYCbEN4ZxLbfBjXhzHmpkDV13xNuwrKfTQt29UD9YMryMK75Uk6hi1bybfwJPBHRm",
  "key16": "sBpMibf2m7uUrVq6tK6w6xE9wty3aX4Wj2kiWCPEum6sqdx7L4xmQ3obdVnYTTXL7XUAQiciiBnMuAnMRmipSYT",
  "key17": "4Fq9ehtMkj6qS5cPHqRYT2KzGUQwg8Adf7urW1ZsqNWMhiTe4TgH1bhYDDsYpYtynEffhizBQkCzMCwgNKWwarMP",
  "key18": "aRsWLV2kJYpf1d4WdZnqkqLA6p5jKscZ7SQKxeLmvioEEvh5onr2V6yr3ugghJXtQPCmzm9LsHLHgNseXpcf7hh",
  "key19": "NijGFKw3Ynkhutwj7LXQVTUrBxSo8jqgiEqD1UXSwhP4ED7ryyJLLqCoDdS3zNSF11MGtQJZqVJeAJK4NEgGLZf",
  "key20": "5wU4pzje77sDY87dBKZBcKZt5JagvDPupWSVp9NN62A5op97xRzfmSVee7AnTrDmd5cYaFmqzdpjTpv4nsVFaqnL",
  "key21": "3ZGkorfjZS2S8TeBddNGMSTe2QYqF6BiRxm7QC855F79TH9TdHvTpDB8Hvvk326cMgB142vqtrmcg53XxxwiFZC5",
  "key22": "EEjmNzA48r9r3oAFqSUqZJyv29sw1ktHkXwsfaLapvWhN8SPpaM3kDFyBs7cLSThnfJYUssCU7C1UFpaHk8fJHk",
  "key23": "4FD768kgEqesHw9emZ3Hn31VuiZLgSkmF4PFUpMwHTSxA6dFgJrq3LQx1fqwvC35NaSgXuDzk2zHz2unMMG4WtvP",
  "key24": "3pgNhGW87msveVV8tVRhpntMBwrMzysBjfxgSv5nHrctoYpNC9RDUx55UcrZwvMYD9rPiDSinsyuvGwh7BhJQCHd",
  "key25": "38b1JQBfSdrdQ6HZMevJ6ZsoYbTEBkmhVAoa8dKBTdNqZtxFsWdhtszbZzQfU2KyweXk5Kbu1TKEokRqWkRpeQhn",
  "key26": "4FN5REXPVTFyuLu91BdpVhKPQjsE48refDkA3bjvjLjtzsQ7THn1nyX6tzKHVCpE9fj3RyktSfCq6PBKyreT2me",
  "key27": "opnUEMhXzZ1QZPNeyBqpJUsCxZovbBoa1vVbJSjY91AMBRggZxfAKwm856khQvxydVzcRWRGFrc1xG4tQ8U3A28",
  "key28": "2J97y1uNQi25RNrwtakad4CsY7T5VaTWEsBGPa5oqiNwFP34tGRwjntKiX5vAGNPvKC53ajGMg5ZorLkhCSvWK3Y",
  "key29": "5vojbNacdf9p1ZpdLcECeMPJni7yWFFWCmHA6Yzy9MnRXBqLt2CxAYxXfMyZrWZTGWJqQuaDFxCzh8idxi5fymKF",
  "key30": "3mFxhiAwXUWBkNFRVEhGe1FpCKDr1XKjELYUUUkwJ2cTZLb7i14eQcK3q27tZmaSBjkrepAQCj3HRV2SKgz7qoLB",
  "key31": "2Z3N6n3zvkCGCvFbMSZbsv29a2pH9rQLE5WtqHAqcLncyV2nuVnZyDDsnFZtj9SrDEkhTA69Sjdg1fhHRf5pGRir",
  "key32": "3pWNTdKBgSjbCLS8XSJ232Ar6k76MFjtrrHiPkXauLX5bXSA63eJZ8okumfPDopqZMCWeiuda3mmW7zFHSJj1Ajj"
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
