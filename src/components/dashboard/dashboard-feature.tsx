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
    "5oUwEY7NN9pNhsVUZ5Kf94RHpAwm9yGPGyEiVcSm9G4JBE6XohhntHdoM1UdRB2oi8VZyAoxvftkGYrF8Z2ph7zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VF3MQi1sB4r8fwXL4yC8TQRMGwEj3TTrEhU6NA75uyED2sCH95uyRoEA1a4VTbCHxTSz8uEXjWYhinbbKY3jmga",
  "key1": "3F96uZ3gQzEtdHLm2aU6JwSjGLh8FnyeSacerEGvbdzGEzmuzAeybzy4jBRPJjyUso9zkyt8cdLaXw5DAR83eakG",
  "key2": "2smyL3TEFvz5W8Q8HtmETLyoazfAfe6HdvNMbgUiMR8nrtRqynsmrA1ER9qnzFC32wa3xkvcS6gF6rgpPij2MqtX",
  "key3": "4TyUEYyud47bq5FqD7CHHE9X7kNUCvraSVmuzWqu9nicwaasQvNDMJ5tgyKGXXmAVPVTQ8z3kMdDNL4GvSuthTUK",
  "key4": "2gZ3PZpLLDwFtP2eBLE2ZkM5q7VLT3W2MqijggDwZYHyFgTKwtZYm44noyfC4F2ELqxBoaGfj1cdr4BxkDppPGCf",
  "key5": "4V5a3T65nFzzVfrk39uWYR8AUraFUtZSmtpLWJQ3aevJYxo6eFnCwEuzianytN9SKkyeSQhAqXjGz8dizdQSTwCJ",
  "key6": "4gTDgLRhqLz1dUe8zGp2ZjpqjmK4yxZdRJa9s6atZsJKEmNYPuopgQVSUne41wCPRiobcmUCasSmmUPKWhmUFPQR",
  "key7": "5SJYuwjxibo81XRn24oy1ULWCjjyttDEc94f8djTh1VcYVtFaSHgNowtXcat98voBwhcCAZCN9SdrZ3jSB2dYADP",
  "key8": "2ZQ48zErEnCh957KgSMoSUFxC7bKnqXQeDgamBumkLHab9uZgFQAXXTmFmr1uGEo4Mup81QrFZHrGZeR6QLk3tub",
  "key9": "3DQimK97NAFw95CgxsZy6uFpLE1D6e8mZTRDtH4zbmW2hj4WDVjB8p2MU1wGakHK7WpJNu4EPp6v8qzNaP6VLFZt",
  "key10": "3YfG4SxkaqVXrEvubHnpiEvQocnUo5kKbsbBjphm3XUMGEicTXsEGU7vhaUXSKDNsXvoZ9V8DPVwojMK4HaoZDWG",
  "key11": "3KE9b3bSYSWyvu482UgMrodfoRKcAZb6SBHsSsMJu5gy8EcvoN8ZDWj6j6b9sGES2dxqCGj17bLxxF7i5FN7jGtk",
  "key12": "ZgEatSbSLPavmyzkFRQahHGtbFduGoxVzzS38RR1crWk8cbDbj9FXtBA3Uwy6YoThwMbBZWfo7gFiTUMq9fG4Wr",
  "key13": "59vcW8YftuEwNxQC2Dt9SiYqvTBUafTwnD3pDKUcN9CnhGNEHUW4LiaFCgWUu1KxiF6E5PeNkqcRq3pyGrZcgcJr",
  "key14": "2dFouua2i5DYX6y14TVsg6E7xFHmKTDc9hc7wazQkubUiMP7A2FdCoh8mdEuVVcVacRc3ug75A4JJAZ8UYFjiM6S",
  "key15": "CtdnGkPBu5hVZ7pPP9G2EPLonWq1TueVutWuEdriViECkuJ6JzpjwoGZwjFQCRchCENMmPe9E5GP5Tqt22XSstZ",
  "key16": "4KUvWvmY5BppQCf2aQRXVjyvTXhDvNy2noasaxBeTspvBKGXsJCsnMxqbVvfQsqJwDxAWHssujXBvCtcg9pomy7u",
  "key17": "4yZE4KHGswaGw21dHHXtCX1YBXDMmq45cWasqNvSk2U2waSi7MLGZ3GVEwP4DdtT2GFfyeFCwn87XH69e7r1tB9y",
  "key18": "3kk4Ua71tZYFRM74PRRhR2ubePUsiohLPn9Aw2McFjiwAoHae8AuHj8UvKcfNCqox39ghMk23K8FsdpPpiEV3nFe",
  "key19": "4de824fgyrS9jJ8an15gjqnQgYfrENggFXioJzUaGrXTBY6zDejyire7ahZmRw1LAVcoLCPpkP3uLxcGC84iN4Fr",
  "key20": "2DgVMyv26UksSJNtksSBkXpKp3EBhTuUzQPfMXMbzaeHbQc7LHzZkk1EGMgGGSK7SXP5P1QcmJY4kkNG9YC9YnJa",
  "key21": "4K3pt6cHzo4vh6WN2P1CnYiyddzs9EmLMr76Q239bSKVe2YXsx8tjZ8L6D92odzFpzgtJcXzCkVptvTNDbjBWKDH",
  "key22": "4r5tCdtWWAyoMQN2rM99cHtUYP1nhmMACfj4WDcevrcqZ7Qr5RazhXXRvCQ8pKQaKjwGSac9KNsgDp1zh61gMbBY",
  "key23": "5uzyirRavs9W1EjAMMM1B1LReeHED6ugqA1vR14UywD2Hpr1i1pCv9hVRYEQmyCvnisDb29n6HCEUQcLswMZGxzJ",
  "key24": "2fcV2m3KZDjqGmrJH7GXsN974qRDQRNA8EpwdujqnobqeksxDskRVu6vbwAZ5U3skVD19sYpPme4gxV8npt2EFWd",
  "key25": "3q374sgTRVCj3FShhGbZLv5oNXjsBhhktZHSRnjmFkCXfwx2xgJmxou4XXvzMm79V1UXy5RZKBpzqDhXKLftGFHy",
  "key26": "5vK3UTN7xopMU66PE9UwYpWZoBSmHScn9hchxCoedDdBeWuTrE5emQPHiWpwjktZFqSJScUrtBqgMfgq7j8wxvSc",
  "key27": "2uUWUKrAu2Z1YpNTr9RB5LSio3h4JQeXWWXWbnjvAakrL2Rv5tGUfn7ABJRNBrBcmu3CF58rPmvViKbyd7mWpvry",
  "key28": "5YpP7rtMofeBQfH3nXYfR7jjd8UqtTwNGy6E3tZTDLQgD3aEpxaTge2AkN26gr2qskHmTiUBjyzTxShVEdmLrrw",
  "key29": "3KiS2rSvGk5uWAhAEoPkWk4BC5PHPpXjhCmpDEarQW4gbJw8g79my3uhvvRCqiQRKeFsyL3Gyhbj3MSuDrbAjker",
  "key30": "2PaGzkv3wvChvSsSrGaP8MaNFzn9q2bzHCP14yA9rN1Hdaiq9Jpfjih72TReyXojGALz47tz6dNLZedNkAuvBVm",
  "key31": "5vMN3XTjg6TGoUmCjE6KLSFryPXt9Cycja7E4Zhy8qgdLiwvRyCtmXyGLfVs8TEKqxu54eVuioRozXXdX1hppcHD",
  "key32": "4E78Wq55FgTopVFaWvJ5TySyv4L5Zk9jvrJX6TBHV4y971UkuG8rDG7BXdUudHrCVJFkGHYKWY9fE6ThR9Lq7Wpz",
  "key33": "995q9avxVyohWUpQhXD3xzCUTY6UNEbUdTMx4vGcFsTWQ9e2ckskd76xKaco756FKeVoUBbfgRAVu1RnEC6wP6A",
  "key34": "2eVXGCYw1BYyNT9qQPqMCAehgEDeMrRH5YtnBAnmyPfcF9ypcQPD5GxWPw4412iqke5qRuY3qraxaho34a1owYtK",
  "key35": "4uxhxWeWWRbeVaEPRyXckJ81wEqS9xfpo3pAaHqH4hquJyNddxU1MEADiuFLSx7M6msNEAF155YMfnhaxpeMXsbV",
  "key36": "2xi7NnMhgDwePXbDGsJTReWVkixKUnosroFninU65rT32gSWn73jBFhKZhcGXesFCk1gYLUK6NKA83dV99eNJnM1",
  "key37": "4b1NtfSqcA2ckSvkhhG3zhwyAbMTr1gErXoQ4uiLktgJEezdvWM8Mp2M6iyDrAWPKXzLnhGA2HfgWbVwuYvX36Q1",
  "key38": "43yDsJLaiDRPHcLMrXRRTuxC7Lz7J4vqofaCSqKh7vgK3t8e2uTbeu4FjS3sbpQjUAqGDbok6EmaqrKx5Hjr25W8"
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
