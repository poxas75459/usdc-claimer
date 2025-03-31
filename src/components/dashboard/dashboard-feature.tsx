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
    "GmNrNdZZy4rrxJZEkdRB8ZXkZUMmBFbGdwV69VLv5V9eEu81radxY8UXhazAXTAQT7fqyHAYcX9aRefHoRZMQk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sq79HDBcMT5rVNF2iiU5r9p6rGptVq2WnZqx2peFYEyBaQYuRzZTr62avKaLkKwTzefNhR7hab4XXR4c1ZbEzha",
  "key1": "5s3GYryc71P5sD5ZguLcM7sEAT5RwzwXSzSgnMWUo6dRGr4KYTCvU4ikCtEoaZvpyWPtQkxd374JkJVwhaWneaff",
  "key2": "39gRrmrqsGB8djAW1xSwAydnt8f9Cuh7a5dVd6gn3Mu33Zk2fpF4ri1GAxjFiZsFy6uEhDSECxWnc2vi2akmrkej",
  "key3": "f8F2ZkZpjLz9kdocA493KHimPPSevKM2nTD485Vn4HLk71mJMTHYkkvG55qDX7Pe438dyKXtn673h4o4v4yRgDL",
  "key4": "3qkf8jFCnf18BTDQLQSjA94G8kGeTYomYzMuRnh4ByRuQ8X8tmzE4Kfs2CWvUXqVxm912Hm2P8yU3etR9NfeFJWK",
  "key5": "qq1F1B9CfknsNdTkQYPxbu6iuaGzta1owDYBdgzSwabFiXUsXZzKgtqikxDvYiqMb73Cn36iwENuhxFczrPWdaC",
  "key6": "3v2AJKZLeahBAt3EvzjMp7aCz3ibGy2P368RuWtU6hpSCnmWxuvYyhUSxPRrByPFiBBN7p8YVzMHGDxXYhRvtcTt",
  "key7": "3LUj9fE6dd38yM8CUmKhBB7jBD1nVLAHeCYR3tskJqvSFgZdrvJReeDMjrgXAhqYTfPahgwiuGoPDNusucTLwTmG",
  "key8": "5v8g83imTHzqDbCxPGBBNRxmuiwC7gjRw93QHGrGkWRRdajQggC7FJysSnVCiJGmeiXG36NM4ih2H81oXBPU6hJS",
  "key9": "3S2nKXAejCTGJ2vz5YEtSjfC2wbDKhSqAv1d1AB32GkyrmHw1gegEe2d2vz9jDRh3Mc6gZ5SHCuxYmTfqdYVbwB9",
  "key10": "3toB3a9ESKFqfcPk7cRv7MvqiY5ydo3rzVY7eMcpBhagL9dPxTzytFYXy5iJamy7TUrw6kDUYBXQaTCKDwESFpt",
  "key11": "dMij9YQJgrUYPVJiPwYAu6g8x97deGPHZSRZtzSGrNapTLL6671atX8JoGuH2vUzCqjfYoAMbw9Jjw8eaDu8mRh",
  "key12": "4kHJj4etoW7Nus4sWkHWzAM3q3oiEbBpQsMiZNeCSe93e4Smiwsm3j44kHY3ZF3rzsEhRohLXeLe4DvvZCpdTjxY",
  "key13": "3JFy99oGQJJm77K5hEsm3xLnvh83w6UpN8fW1iU1VjJ3TZMvvdoSmE8c9QVPiTjrSvow8BD9Uhe1QJzB93ab8WFz",
  "key14": "3p2cxNzv1LrfCAR69VqRvnHe2UoeT9ybgEBJcDAhkJZYSEmKhaRdkGk6mWhoLu2VSTAnTFyrc122SoLeTMCAkLKh",
  "key15": "3ZMx6VLYfZZUpYUtW8PULDhVTsBhVVD8YNhktQxhBSoB414hCwpbSQXSDi8aKNG26LBzHzdCmFHsbgrbLuTHZrgu",
  "key16": "3e3mRZEuz6Ux6prXeDPhTyWuZ3ju7sBrPumkzpUQS3SrF7mZhRb4WjyCj5SDscqys17bgi1pX11k2SR8rB3dj2TH",
  "key17": "5zzgcpEMNZvk3TwuPbHLa76HHN5cYxcGBFpKTpKRAcUkYUScZS3EbWRr5Ygbg1XYx9EuE9WHMB5yuDxfnq6HSHUp",
  "key18": "3uQnBuYpY2HSAhLXBf4V89cRZhX4naB6Q35JVZEFvuEdeZuH894ZCppf2RFxTrz1pCx9AiME5fF7QU5R7akpvu69",
  "key19": "jnNQhrhhQ8jWmG1yNQPKhdJxS1jjNfERaYhy6f2ieTTAZ1YhKDMmFh3JMNiFdFxA1mKenBpVsiKGrYxHWiV3UTP",
  "key20": "2NhQEyHFhoL9u3UM5TKZJr2ySZTUMkNEp77V94hptcKWUK78iDqcEdMg6xGy8Fp6kVPoFPM5TuC97uuqZgJ1ZUdJ",
  "key21": "47J473Xmh1h626qgKAJDpmNozAroRFmWdwJgBBSu9KpDkKVjf5dffq9jVYWQUctN2S8M7P5V9HeL5RC8fpPQHzFc",
  "key22": "2Yjse4sQBjvWBCheFcJ5sN4GpqgZYgNpKB1GEAf56CR8je1kBwGyMhzXXfxXiJNYjbsthMQiUiA1jqkRAwS52tYk",
  "key23": "35dLo5d5eeJ9bCh94xtie1Q4QUe74ctvxrr6dB3VSiD5S6yAW5oUBvoZrR7pJ7kZQruutJeNimYJ2hEpeouZgN1V",
  "key24": "3Ro5G8tBXM1b9svciRwJqfPRrN4VULgzNEg9gFfVEB6BP7YWqVFtivZYbM8FPjPgPJZSV6bWAGLuDAFXF7k3mcy5",
  "key25": "qN4TycE5aAtuhQ191AxzCw7bVMJbLtHwBivNQBZhgcGH1uS2VwMSn2sL2uwCDYXE54ZVn4G8DuGY4grXQs9tspd",
  "key26": "c6noE7DvHpQJS3HgjVzrc3qLKM1URRmD6G3oYZi4ojNzVKbBrgPTywrGVoFHzyMoJoeZwyNeCSy7f5KinYEfFSS",
  "key27": "3ewmLvjFDrmVeVciJheuK65guPKvutwM8rSHiZiU11ViNQTtwWsJU1Q42372Fb7PCEjvZxT5ZfvHJ1HZhK8kCEwE",
  "key28": "2ih2idhTqHty9eoSc1RmR9nF7FQ7GuRubi7kT95XmDr4WfzPCsP5i9Z9GWBsGs24TWUhKZzzRYdfL1w4q3u2AaB8",
  "key29": "66udQQKPY45asdgQ5nxNQGxXYUBLyZj3bhEK4gRgHYEb9hkfy6RdxByTLpPsuNfNB3at2TcjFUjSmNETv7asbFoo",
  "key30": "4n7UNNRSuEJmPzHWDauCfnfxT1MtiU6Hh2KeqA7ooWSxwQ2bLz9KUeg3z4wfFMaNL7VVGUCHTN1jb9LEMm96BgPD",
  "key31": "3KQRfchz58R3L9apeeEBzQZxNfd746PvGuczNVXMNZEAtj1GkrifQY15qkvTb2ZHWLCk1RoHGC5BzcpKQdo9vNLR",
  "key32": "46eDbcvwX6AymtPW3vAPRq1iENTUu2dKmse3sv5Hr9z2R2yN11ZpthrNFoyUBt1s6Xi4CRThSU7DMmX7nh1HNzvC",
  "key33": "5kTcuWYJSdMXALnCSrG5aPagNhyNi72RZbjaRSoLZxuDAE7mLdNqvdyTyi9qojfPMx1TnR7bqizCyseMvSRMLZ2H",
  "key34": "4d48rJSrEQ5TnibXNqdfS22vjeDc4Qg1mcBfv1o9LRNUs2YF92bxc1mWPZzDqQ9BQffurXWDnLWhnJdsvWPy7aEf",
  "key35": "51pzao3rHwqgfmfCFgZJyvbRLjEQzi5fEUpEAZWe23A8p61kPZ5PnnB6nYVTmjmEiSCPZdCQnGZF7KnaBw5M8cEd",
  "key36": "wc4xyjVVCwC67kUqFJyW6eNCnEPegf49ALQcFPpV8RVumE8RVWs8FfnJE3x4SAHWNZPASefdMMotutVC3eRtyJL",
  "key37": "56N86T9wgytNyYoRFeVFiQhQe1w9XEBRJZsHknYgLRRxhF9n7S1an5p1DkcKjNKuf3Peg2YaqFv3jPs1a8c526bN",
  "key38": "4m3yQrj13UdhBF7Y5jCxtGcPYdjR2MRKaihJ4wGWweiqW3zChv8NhrAxVAiSzhnF4eyxLbLJ9FVf7N3dyc8WLyyo",
  "key39": "4pXi7vfubeMmnnmoeYTL2oFLeULnMG5qWs7UMhRYfhR293YfuxhTgnoYAtR1Ygo89Ghe9Hjpkgb8W7nsviwHBy9X",
  "key40": "3QvF2N8yZ8U3RkRYfGBw6oQpMem5hKoxC9K3j8YcrVTJ3NjQ6agod16PdbyXqJaJFNxGzF7tWd53FUEd5LSJFMey"
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
