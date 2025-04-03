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
    "4pBsYTJFh1bz27rMVEGViuV1GinV4JzGdtFFuj9LfTto6iqdEEUFiybMWf78VQCgBb4QtMHvR2EPSU7o4va4wRHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xazd93eUXv4f3S1peVi5Ku3HMXthYVx5envAL8GhPmssdkh4r9eHKQh8Etg3xAQq18sPkhU23CezzBW8JM3ZnW4",
  "key1": "2cWvj3QqW4jkjPnGcVjGS6ceoyrhxACVfgKyFjBC8MumM9JyMszUASbrSm74VARWqYJqYhfnPuBc4B2CKQxnrVjK",
  "key2": "45cxZpGit3bQzwS1cFXzSTT3fBT15zKuRmWihtZik4L2ru8RPGgLwVkMWKXykfjySyCcaYirj4CR3oJazH4fzTuL",
  "key3": "tQjuRqeSqT1KhkW42R6uDe8MQzCqG6yDAaEV1rrbRfqHsGdFAcy6P7SKsCowxYsGYDXJ4a1c5YVTWyarudivujm",
  "key4": "2cbXmfDhwfrARrRksbeAc6iRDj6hJizStCWoCfEJ7AYhmsyPEYu2FNRv1LV594goqHvaf4E6Vwb7KzwpT2cavzAw",
  "key5": "3spqwByWRFyEeWXrVLHJ7z2psxc7L7JwXpAPzvMVFNBayu1XCvgjYAW1dv7Tvq5KzZz5LXidq5az1dt86jWS5FX8",
  "key6": "5Gv5WB1CGF1xov9TgabHiX1ytTNqDdF9fxPQJVtvNsY3bhEVsUaQ2To4RQaxcxSGrvTN8B5jvEbC9YNCkzxAS3fR",
  "key7": "3UXitaHaofXxTNtXVniEVy8YYmSduQDKfqVywZbKoUNEcYECeszsyesngySs95QtGxfjP4DUSCDyMSTTS7BbukDa",
  "key8": "4R97u9jYscSP4VjtSjwQzLXWSiTMAk3we7SV67TYohsnq5a3S1W5ssM7Lt5GNktPHwt7Ggu7sCT8hCmo4zjBGf4y",
  "key9": "6GWpLNPeLWqGhaj3HHNEXhGbZjEXwRihiKEw2pXxi1nygD6gSM3mzUgT3ST1Bwgj7sdzDZtPpUuFJz7PnUYHQdQ",
  "key10": "3gioA3UpkLiTMbzVnHziH2oSVXJydS8SuXnJTsWTLKy8cg7fpxFycTSx62EnYuxpPNjuky5yPD8dkxeSonBxAruP",
  "key11": "YQGLshfBwQHsdWSs9baK2Ao9erqdRQdBfhP6BBjCjudyAR3oonFtvWU5cAWuQrCvsMBquZf3bKpXBqFD9xvw2cM",
  "key12": "5rCXPe7769QdbmEkAtXFvYBK132JDr65e7ymeZRzknN4HwtQ2YoBDW8QsftFDHX6rquwTja8sUscwNv5DbdXPN9e",
  "key13": "2pEuwoPRFo1puXWvBSfBzZqGWWCeBaK44DBdvXtj7F2sUxeo9wnuaypM7wY2dcSXAonhPuTuqun1xNJ7f2gXzw3W",
  "key14": "3Kymu5bKGUoSWd1fNuN1w4RsAmMmkGEi63s4hCReoZ7ULam7tLKCR8E8tLTNfrxV1mAtFHbp1cW3MKqn5wT3vb3w",
  "key15": "25EVWi6yXb1SnGRn4XWcWuzEz5rdYXfCUe4jVPurGq91Gyma9BxtCCPcYEbzK8kQ1dvvXEGMd8qH2St5KAkQ4k9x",
  "key16": "2FEN7WNYU1MHbZ8o4rvEguWJyqBxb3EAGx4KJZU31dnbV4PZtbQeRMsDWHzjQZySQ38rGezXHnc1KyjA7WvhqWv",
  "key17": "2LNDNNHDAmrX4ST788TNnhmnzJd7LG6gKdJHvoft7jA1R9EK9hPy9h1fovpJyXhXXEnvita1GXCpaeb6muXbVsSN",
  "key18": "4zKUeCebMyX59LM2dYNzE67kL9TBQabnZPPXy9zK8VEN2QFzma5eWaYupmJvDL39F5SmnkKe7i72CmF5E7AfKFm",
  "key19": "4GMe5a8ZAzxXS9R3kc1jYtinqYLHMVTqifRqTgnfoiVHvptTtpfddZstF1Nsph7Rv6bjF6d17AkL5ruMPJyU3AeN",
  "key20": "CGbyXskk6ZDhTK5Er39XP6NSXR2JzTpQ1xTg47fRUig7FjiBtWgFRAhkcagsSJyYV9E5gTv24dfzoEhketGcVCk",
  "key21": "5FffdYXswpruzyo2zicpwqsCpJFckCSNBpQT53UUmHNFcmvNcfdvnCkVoWYX769fnZRDZ395R1w3kPvkdGb28wdg",
  "key22": "UY4uznMUVdgg3cq79z9wzNxiQEZHMr7Pe96U6VJ8yX1bjRWGodr5tmRmsgkhCGRtJ7dCB8SwKsyYfD9aaGVWPvA",
  "key23": "56nwFE2rWbnmFWZWuXqRvDiQZGicv875BTTjKKeUJgpXGjWN8mBXxKcZr4i8xJ5nwXKVWvvAU9uyZRgwMqznrf1w",
  "key24": "Jp6egbqASY25d187GttJpV1UswHnyBhAsQuZiGLAvpd8fxqupkCzeriZQ5bv1sGqVX4es5zBxzh1Hb6chwEwGGA",
  "key25": "gyTNPcVSkhCuXrwKaas9zu8umFbghCdtPuJHzCqDQiipxJBgDGTxBWMgbW8UNaDPipcWTohsFv3c5RUcGseY3VS",
  "key26": "3UxEUcNMPBD6EkYxaYpdcjs6ykoURiPGDRFe4TPuAVt63w9iX7JihayhmfqsTEEgAdCqbrxUpwmVHqnC2fV3euSn",
  "key27": "3wWBExahqFjsj9e7DEZuH3bmhgfBa1t3qYYVBqedNrP1sdS9uCzFs43GLEPAqrxpVs8yvg8uh3ugaz8dm1Gemg62",
  "key28": "5uT387vHbKYBZiPnTDPos7THTZxfX52E9vbWP99U57UQGyHqo8jePA5bzeEURxjVgtkMaQ23bm23ZZYU887B6UGY",
  "key29": "bDbVKjmmRzbRMf7MZZRfN1LLXyniNghsSABBXS53M2zhFERJLAALXQpZ1ffxC58rbfxb738hb9wCz359DjH6fdq",
  "key30": "4DLryGcYgc8C9gXwkWUVK2ANTJ4sAd52YigRvpFzQrDCxiLKPNBs6ZFHNJub8ET9xR6pgC1dux8Q4NZtegDyKhKs",
  "key31": "2tdXwMgAh4w7FXaP1UywyAxaPBV1tjpmdN4LeWStUQZAJLzN8T9sHYoMd8v1CHumY2aFzTxt3rJCaDPMBu2BMhy2",
  "key32": "2r3NkxQXxeZv5euu7xy4iazXeAsFAuq54c1NivPL6Hv7E7wVf1PXj3Arapa611baaradLtU9yaPiXDSdXdZpLqri",
  "key33": "31JL4TmtwuzTW3YEfAbCq3GqSMSpUrPS6hpM5mLCMiB6z6iv5M8qLF1FgmL4ZQKQDUD4jovh3Tggfn8PcauAFDCd",
  "key34": "1PNTx1ihMvr9x6PbtZuEazeiXBi6xQ669wXKsu6WXmkf6nmzcnksbnFH8bcAA7sqzte2jKGVtuiH7ewGzE7BbFy",
  "key35": "3ZxcVnZ7ujn6kCT1KjLGZmFfZ6N3Asb2PQ4T97iHWcUgE582utxPamLFyb4CoUsV6zg2dXiPCb3HpN9q46TGitvf",
  "key36": "4WNN5UySaHqUY84BJfoTX3k1iCj1XzBXr3j2uBs2smEcjm1CswZGmVQUa9RzEMpEwhjREEi9Z7rqHuZSY91GEsCe",
  "key37": "3X3hn78L1GRH2GuP4ZAMcXp8LxRzvsYCdxNk3LwE2xqj7BVQXWqqcKCmVKrxxwHxDoPmsCmx9iVY5qieUkQzq3Tk",
  "key38": "ii3pXJvnhmZYK7xqnt4R7b8CjGznqi9PQyLWjzkm1ukBtzVMZkziDEhc1Qv7hT1ZmJYEfeNKvAQNT5zqxhr2NNh",
  "key39": "48tKpEvHtCK88Ca6ht6t72217NfKCequJPMoFoBzyaZeskc3SaPb5UfQuzX3nzN4iEEp1y2iheeb95CDap26inwG"
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
