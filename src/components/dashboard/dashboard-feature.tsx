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
    "3BW2W64MUy5dtQYSEuwibSqoxhgjJRozuCnfTsW7vGQsLVx1mEjXtVJZ2d4ZXAfiyqeWaxah27TxcYUx8GvsCvUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABsMrdjrGudiAT1gdUz4J1RJmEqJDFNyjZzwvCG8tvry6QKw91nexLwUFuhW33gXb1wCz356R3P1fsNtJNNrUCv",
  "key1": "54XoHyztvELFGHdienxQdjbqt2HG4sH89L42AUsZj46id57tddK2cfY9FFMx2CrUmofc1FRNSzVRnM4JEZkVKDJ3",
  "key2": "N82PBsXsvgspXWZCn7LUxTjFmS9NH8CUyyzfRR52Zmq5nZ4mHXp5faBTPeUA3sLSvy58597rdNxY3aME8DYMZVN",
  "key3": "2k7u4LVabojYqWRWLnpCXESbCaxEUAHrVYCZok3DPzzk2zuBBEDePZaxhcNCJb8P2XNmxWP2Nv1zv565kA3pfmDu",
  "key4": "5djP86YTKMkBAxMrqBfho9wtm8bePxsaC8wLzbbm2cABKt5Pf2WEndVBeHV7cgSPp4xsUMzdc32HbZJcc2UqbYpa",
  "key5": "3EqR3cP8B97uWMFsunRuefQckR3EShdzbjw3faZUCototZGL7ucNSrXZcy6TGG7nF1dH9d6AQBqrcFA26ceMnJDA",
  "key6": "3MtwY6ZoyYmg4KV744tUTPWR8LJbhQWvFp1eWkGB4Qae8MjTbPNQ4N12YgUx8KQ7xV91fYef4uYpCD9SVsq3byPw",
  "key7": "2UFDwn75G7ufyDW8fZ8fmL3UD5HJsvXLvvCGxQHV56o1mMP9xcpXmRQbbiMzYWzuWHU2L6pNkzWagPr3T7CwEDKb",
  "key8": "3gAr9ESzmcN64GyHLs7j8ZchJJxCWoMu2fj8bSvrPzRtuuNiswAM318Skh7r4ep5tcKxEuhqD4cwqjBX6gP6EY13",
  "key9": "2cCwfeoGEukS7woemUuYVbJK9qQ6s789kwkkBwUiFacZJvC9tPeVsRahE7dNY9yNac5hiLXFZ7ZxV9oYdAd8cAUU",
  "key10": "57P4NZVFVa5TEutPyr3RzZh45r9Z4oDmdzCJ1z1QwyVzWPH3gp8tqSyxCdsTBHky6PF66vYBK2PkemARyk73FLmy",
  "key11": "2stWgQXrKnxX8X5iKk4xHRxoLDAZZiyYhM37Wnfr6EyVFDg98oBP7xH7tGshkMaZc5YrDb7qEbgYq8LjtjMzuQMD",
  "key12": "LQ1chb9XmTdPMp3bn9J4cPdQ2mFXgvut1DkDmqoMaua944UhLSuv1t6oYmBfUbuvXu1E1QufjjneuFDsLuYe4aM",
  "key13": "27q4VRhrYWL1tyhGNkF8dLScfj4iqPhNzUcdcGMRhgGC5rdK6mBw4S33Z5mcg5eQ4B4PPS457zc3BaUPYTkCf1Ln",
  "key14": "5WhyonQg95KiN6Sw3ndxpLjQXkfFjEHiZuJtd2Rei8CQMHro3z18rErqJkdretVDwLA14iVyQTkNh34uZ3oo2Hr4",
  "key15": "4J1pExxMfN44F8JLb7dQi4oo6ej7LVUXFFDN6uweq6w6qCUsDogLBSkBhvA6zaLL8gGkiKJBBsqHCKAo3mMwZAA8",
  "key16": "2Es8nxvYYgqFMdjJTrub6oP87zZRj49H1ug6jWhKfwHSP2ceZiChGPmg68odHyu13mwVcSEsu5CJK6Ma7Piy4RQ1",
  "key17": "2jShzAH6F1Dsy9Ms3Js5DGEhnXo5UC4cjJUcMAX2UzaMKoKN9brFaE3nHcUNh8ak2w8MVpQPNbjinLhU26yWnKeV",
  "key18": "244sRvAkvr3gKFP4KvRM3MSQBuPYZPdU9qipyAEnQ3tNd5WT48DenhDpR7F13BZjChok4vYUTYUZNV51jogU2y1A",
  "key19": "63KEraUrTKjbYKjagqttLRyYSwK7gTTuJyb4LP97itn437FhbBjz2qn9vbtHD3m9rCcnxWoA1ZogXTYvc1aESYTh",
  "key20": "3pkGXGHtqFXvv4sWHtj4vpjwRNtT51H1Q7WMDBnS4gfTvEe5WiSTTrnfcg3iaUMhHytdcGMFVBKVUZog99zugA9D",
  "key21": "bfGJfE1XZHFNRXGyiVKhWTxu2tf6GmKsvnX7hXxGBt6sJnCQ3LxJ8NiCya8JPuXbpbaNqStXZSbHYAyNa93jT5u",
  "key22": "5UuCr2SZKP1Go12hVTxivmX7TZr9haDgVeCkUE7vM1taiZuFhkZhX1HnxH3yFUfyHNKx1VV1NJ9aWnd6JEmw5XaU",
  "key23": "2YoeEic53R2K6QyykWJNL8F5t7VbSpXpqkf3RzqVoDZ8uPwgHBw19KbJEeT6kYwRcWSQXtsZ2rJAGCT1B66pX6MY",
  "key24": "5AbPga9WwiCeGdmAue1EHoa6YAupobdF3BeYMpRSVQVJa8Ybe5oYRNaYGCzbWmM1ANSxNX6SNmseAphu4hjVAsKA",
  "key25": "3TenBU4G9fHu4y21bYRrdjvMuNSvuefnWSwsmgg5mv5AJk8hoSBCVzEHeRBbuBk8rtUW3kEpgtrGU6hM1wabJode",
  "key26": "2L1ruCajDNbpobFSSZQBX3L3s4KTfetaCoziSKghNn6bqkSSym9peN58P9XfYNvBuPzDmR62iqv4izAhv1MA4dNa",
  "key27": "5tCjku467js18awoh1DKtSj5HGP8jeRzFkhN1Mhxx1etwfiisfEfAQn2h6RBDJ1ushTwF4AjvPXtuSd654PE38vA",
  "key28": "4zYYrNKyRoTkzJEpQ4vMvPQyspjJwyGYo6PEPyzMbdsgfMhL7UyodSCsNqBQNkpgnFrrgCoH6Mn8R6YEyc6W77Th",
  "key29": "zQ5934na1dZ4qoE57mZr4cwYJbz8Cj1Hq8xFn5sL5DeR7z2bTCRdWyPqkzr7xgT73Mx8U7m2wosVP1gRUKJY2wN",
  "key30": "5xHwceDR1NvfMCbkWXyS39SZ293bkgn2qJAHs4xypnJv4ZvkJU5uADDhLJBcbbFzGuJRm4ace2ANuVJovTcbixeM",
  "key31": "s3wYjyaAuGz1VafZtHWJX3LMPaHTFNdsLHzDWopBEUaFJ5HJvFPyjZLzdtf4Vg2mKtzon82PqmKuR2NZWGY6pRd",
  "key32": "5pwFrV6HPvPnx8HXycTRm1LMWtSQT3d8B1UF3kXuWyscpHv7YVhc65MFRFJoPcpKhE5t368DqqrAMYTMHNj1pgLs",
  "key33": "qs6aF9nXXZqidhJ3wAZmKRWjPJT1rKHsNEB5qU5RDhbuDwJqR2rMAZYBfoUfidXFjovYtVEyv9Za9STt7DMNc1L",
  "key34": "bwc2dLTePEwMbGziHNTiirjrCM5vm9SdrbNn7duAjVYpXWe5eJASBTSdH9fCmFkeH975pPwhWXCR48nrgzPVyR1",
  "key35": "4eYKRbGcNbNCSCYxeaqbDC1TcoYpPQ6NWLtG6p6k8gPp4WAEpTXdwbESsAkX2AF1HHseshmfmaM8cd8esdvpJGB9",
  "key36": "ScA9gMVvqUaabbWdReKfGvL5qT6UN9RT1bvqPV86ogPnjtiYWTjJ66Jt5MsvT4pnWCCdxDsvNqc3PApEBtrG9rZ",
  "key37": "3Zfc7aHURVgmKwHCWiDcvCiu5cBWh9kmAuNjnmV8NUZ6o5LHWiKT9cCfXQFMaUBpZv71jdaCrDYgUHfJ5M9qoHWn",
  "key38": "QeuHiPGsJw4NqgVkYkx2yAicuaPn7QH6B78phceF9jFRB1ea3634938uZU7Bp23G3WiCM9gHFbEzsFYvZ3pRWdj",
  "key39": "4iKdw6dkBZv7FeK13ZvRkavd2VtZN3oa3A5EB8E4sHrXYLPuXt4HGZqVFrfPVpUbfFSHuReX2fxNWPEnLXJZhMr1"
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
