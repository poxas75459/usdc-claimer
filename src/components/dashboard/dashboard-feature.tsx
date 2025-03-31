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
    "67qwwYsvEPYghwPCqXiUmZNReNCC6r8vCvMsix4mqQJzaTXUAVJNCa1nvpGUaFCB77VGvUXqjam82s7x8ekqXcqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9mzMCtVqkQqQihMdHX2wJLPebJvJjh3AwVyLDuYRD8b88CoX6M3Kjgdk7vctpE7k2fGgyWSYermqAijDja6dTm",
  "key1": "3SKvw5xZrRtC2J9FCz4UUBxWw4hYQ5tjrckzaLhEiyWZdLFKNe4KPKfTJ8PSmoHB1sT6ANFNegkf6YbVxzbNCC6b",
  "key2": "KN6j4MoFYSRjF3PVrLqWh3hZn4rEj9jxdTwRQATaXwCGWR8Y9shbcGra8Msky9fGAvM2Bo6aiCSkTRym8MAAgyP",
  "key3": "5gpeWsunACxVGYCm1Zwc11YN4AmUocyPGohK5pCe3caep3Mfu5WgS8ZJKjmvtjK3ao3prTwwV19CQHQu5uiNuLH1",
  "key4": "5oHda3LscusrqXX3amdsZ24Z3sXMVcDCh1SjVHtdMAitAcYFrUBauFyNout5PMdRQRKsQUoRbgkdpjJ3wbKJW9iw",
  "key5": "2nUUsnLKFSF3PzhF9MJoTKPacDtW7tuTDLwwp1zQQceMxFGiPtCcsK8NPUhU67Z8cyg3GibDf9pkdbJpHtNTRBJr",
  "key6": "524iFjagy4CHC6gduXqFLFYrz6jPRYydeTcf2BU6Z7yP4j5vfoHmhFKVsw6FiXznJofwo7KbTvoNmSUtRbd4ohPa",
  "key7": "4LH6jRbNAbSGRcukmEC4GeRkzRFnTUY8UhwS6QSytyhaVpNr3jPrf2Ea3ZdyUsPDbBfhJmNUjjV972AfhPnTuVmu",
  "key8": "34zj1hSZHZ4vVZULDaafM66KZtZ98XpzaZFcntnwxJCiJccGZGvoqbzwq6X7y28T1arkoKRPjzsbgBrf1HidVx9C",
  "key9": "5gsZKSZwvsdk89qf1zyfNtcmZhDmjkUihTjbrTVkPjNRcYvTn1p5Z7jmo2t19pMqpL9UmKh3hrWfUTUbXvXeZip7",
  "key10": "3i4Y15z2DfKhxoTmftZ24tG1Ynvtp9122yRj5V1vaPMBbAkqV67qGozeyjESvzBYxvpHNhc3jDj6cW4dopQiq2Gv",
  "key11": "5C3pn6YZhJDnnv26Xt1DTJcvmd7sReeQUaHKUCL8K6TWy4c1DkpvpMMHGjfjcD4bRvn4TxamCWf59uHspd4ywLMm",
  "key12": "39Ld3UNTYmpB4Xwdg2NdctZQUKgJtHLEWVznHyA5esnPdZpNNquhqMSSKM5uHVQyhctGmvZvTLLYoewgmaBZAKHU",
  "key13": "4i1z5tvTTi8DGRfMRmzAEDw8dzgqxvkd7RtB9PSkyjq6hQfREjYcRJVUPdZhwRtphh6yQA6wCHSKh13kbb18L3nF",
  "key14": "3ubn5iLDrLqe1ZbuoTPWEjRbLHQhzDgppmj42gUL9Qt4hVBkejGSsToTE1gzRJ1W4671H7EWcuuECYVxxJBvqkJK",
  "key15": "2RDSUgE5Woz2bBkMURve4sRHf6BJ9G7ycVykm7RTXEWaABgTFtoWt6482kCKUgaoJA6TBUcNhxJScEKY3KLQG4KL",
  "key16": "4ZApBgj4LVbe81mS4tR81HBPHYjNySfDJ1tfNJNqZbuBPe7i4v7oLDAxYUiNXjZ4GJZ1PNZkdkhZHA9tJZtNe4b7",
  "key17": "3K9Fkgc2hhJnMpkndf1mrZ3F2b8gyAsPUMwjFiDppv1hqdffkSQsvbQojQaePzn9mbrKQay7yuiPqkXDmdUfLigH",
  "key18": "ADZRkQfGVBbxQLNdiJTpd68zvwDZNtkPuS1v6xKJeUHpt48mVYJqnxtWdp2ReEnWgkvBN3Mn91dKWSCiumncjeU",
  "key19": "2jejDMG6MttzcKkebCMPvdox439vzhdJVDv4RHWQdFTaNzUBgvQq4hWA3Fis5bwgT5NURMF35aKVURRbn7UKrtWQ",
  "key20": "9uBsPKmWNKcArBzCWbnDPJU7bpzUdQuSLfthLRvqmZDeKVfaj4hAzowVh3pmYFCx2Md3XDGEUs5PAB9VCfpj498",
  "key21": "X3Sxj8ARinLcqA1ELuFwrve1yZB3oR2u4UnYq4YZSxRfonAS4jQVnvnXtVXZ6ayzRTFXFHh87pKBNqGqBqQSeAj",
  "key22": "4qzYRVVrMzCQzzsBGDXJ65KxtS8i84U3wJ9xNsqBXdSsGW2YcTU51uRbY2kJnX5FVS9qdawG24nh36kWR6N1ncUK",
  "key23": "5tnrLwBwjUJV25fp4JgFHPEW5oeQtDr855QxaufsbGzXpeH3LK5cVRSdeSaxTxkQLbhbiodPKraUZ3MhJ3yoeA9u",
  "key24": "4Q5BHwg1WtrMDYymJqxW2zh7sv8FW8WW5UDm2kHb9LmtQ4PjqWDR5gSrbgeUpnXWXYdaeoQogNKNy4kCvUHKLBTh",
  "key25": "3DK53ZLNpQhsmbZw9LKbxt23HRHfVBH2qV2DJGcML3kFkzGzq1NCMB2AmKeqnaeSkUcGZj4AqeqviHriWQiWZKt6",
  "key26": "4w41RCrze4WUHSsUAmfN189ar8azR76Akg1bfJP8qFL4Eo8cBpxZsaFNDTDmZByDcEqgUdAA37NfSMMb41biYKtN",
  "key27": "4Wn3YiieKNYuxkXTsinF577U3eKnnTDhiQXvFhpK65AKnVLd21R6ZLg7qEiME7qZBF9zaGq9TWKH5GUbbKb4Uiyf",
  "key28": "3UV5x1hPQu1vc852sDTQ61TyfamCadPB5jdNnXF8jpeNqFpFDDdkkdiNSpETTRCxcfGMSDGaoexqStcbHWaDTzzU",
  "key29": "jvXycM1AfGFCxaDqsUPU1qxmJxLjXLaijSpMK2NHs4Erdx1PW1GQZXRne4cQAbweABPv9xfVG8LafLWGSDX6ppE",
  "key30": "3yEksD32yj5QC2SW7NHL3mykaXCJV4CQNWM4j6eSqadyeUoehPUePuFepU55LLUoTPU7MfyejNDhizVoybcDJQd4",
  "key31": "3xYeSLr7CHu2ZLRxu2LHMjA9rBJF3MFxezpqz3ZAtGvPFUCceCoiqFgeQPNQpUhq92H6aKNk7JHX9YEd6nNsQc8Y",
  "key32": "64tR7UFQTNHPqB8VX4iKQ7qT2TEmTW2FB5QDqq94LW72yEjkjBoaYYphB1WG8EfDcMAd2prA4sJAGv7Unskjokyv",
  "key33": "2FUK2rYdiFT54Npz4qEEduTmouBuEt5exRvZYTUnfawvTsUf6raFgaJhmei4PrH6uQRndCyhUxcayqXm8bxCVRmp"
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
