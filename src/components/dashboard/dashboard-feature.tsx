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
    "39VQQLjhnuUu4B5Jcn3Srd4can8cVmCPxC1VoQJQvdQJo4on8Zd3EpBbv1VeUHq9VvzDdzMghBo6jDmTVgAvKy6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248NseK8dTsNkPf1162Z6nLye2cWW5mFxjkb7PQ47eyEZAENHUtFWV82qtNnCaTFwj2qfW3kzDrQYKUCDU6v9nZW",
  "key1": "5XUmXk9uuFJyMqgh9G7Ksovin67Rf3ZNTdKjpg7d1i8mhAzAsi5tNcDMtnYjW6aRGjpswt8TR49Ne5thpUhpQcQo",
  "key2": "2Ev1RfLwqYNPX4RHdSNhi7eF9YzxsWFtc9wAf9jqf5rhJqzyqQpmMA7BKCo4X9grwYnEoMVjnJ9vFLq69Xedgg5j",
  "key3": "4pT4qmF7zDfTKuNKaPYkoVsznWBZULTtcVAw2JAezirWpFx2Rj5r7JjcrFRpGzcGV7NitiJUAAcCqZ6q331LzPCF",
  "key4": "4gGLeN6QWna8e6uJM9smMhvD5CZU5wK7fiEDCg2jm2TVUFYu6iC9nZxP8xz2a8XNH2EdoPvAF6Z9VntAQkTZcZ6K",
  "key5": "5gQy21aX2jb7jzcu551LdR3BW8c34pUGqqrieitpGBao8gccVs8S8WAK4rxwVWShcCV27hSsxCZDQwKVX77RBXaj",
  "key6": "4P5Bgt2jUpuLg55YScvpBweoPqJfd5Ke1sPdQjPPHDYT7aQi2VkLpwFJQ6yg8tze1gkgco4SB3L6tvvoqP7geipb",
  "key7": "hpKn5RYp3njnYYWRMWfGd4sMsUyG9g7GTj834Be21rnojgvqgEN29A563EockuAhwyiTxshd9kgJbhNT2hFBpgr",
  "key8": "2QDXKG39JCaTqnsgfVqW1U4V2hxV3GRbYaiHTsgPeqgNh4K7RuGrWZmibkuctbEoS23HUoCgWWsrEmawzQmfbKCU",
  "key9": "4bPToWTqr8HiaFmzdx5MJ6QviMyHSpQ5qnsRSPUHrkpLQaRiJEGZJfG7aZBXBD2DjBKjgoxe7J4z9XcVofcYbhsy",
  "key10": "2tAgQhV1NukxxP3Ut5iEY1raXTgAVpbqi9iQMJyjNgCh1ZTnqdiXUWR5He9RJDDrPr3QfJvzfsSMHPaovmLmiRHd",
  "key11": "5EPvbxJSHrpzgzhdFBA7hxA1P6SL3pnfPnUoV7TegiceNgcnVAhr6Bck4W9xiDvaV3e4s4c2RDk4Aih1zVTFvdgn",
  "key12": "2TXSMzXhYCvF3xyNcxM6KzJVrBFN7toDNriFtKFG1toWQyVsZEG5KLtwewNHqNzioHqREMofSz1ksQpidtNEQavY",
  "key13": "26RXx7anicVU9jec7zEbu2ENDGTzuZeaSzoSTKnLC9tRrsXXSCgDf4x38woEJLAWcSKT4c9cYxsYhvA3AtUixCj4",
  "key14": "NpZuxjKHbNvNSDt1RSTxeJhLJCR7iwcG6iMwiwB9RXuK898vkWcCmyuqT53mfzX1cYkMCEQZyXCLS7WtoA8LS1t",
  "key15": "5mfqUAtDFUxGkV2XWw86RBbKkaMQiYQnZkst9atvHLR2sWmSScCzMsD6xrGeGj2AvBGezjHHZ7UmcV6eWk4sGSej",
  "key16": "5n7km9KfxYrMFEsJ4cvB7UnzNjtqS5G2ySaEjyEq1hhWYMzwMUc7fXXAn6YtMDK6BbRosBbTjR3YFPdKCDkaPejy",
  "key17": "4BqL3oAxk1fbe5pQJWck8ZVLTo8cXSGPkHsxYeuCq2zVVHMCzsZQdFhEyWBv4ESF84MJzTkLE2kVgBbV8utcfajq",
  "key18": "3YZ3MiLsujSoKzthQNRqcRCWkcfJXQHTyCB2KusmrqNbdkoKyqrv7a4ZXUoqL7isXBpugmTr4hkiYS3yHqcCYH22",
  "key19": "RPFq6XGQWLp4BRgw1ov6kCPF2hRVEEpp11HbBqNCsTgy7NY1DS2p7UjYx6iRLzRCczafEU57BQKs3eL1h1xfKVe",
  "key20": "EKhAmPnqwfjtJxdeHUCwy6J7erVgxNz14ZteYnqTFyp4NwpAo9xL43KiEGmoLqPhK5wqRQMH9pKysJVQUov5hx5",
  "key21": "4ezoGak4u6eqCt8zGgfSibpUBZZtEaLKtetyEvnc8Wf8CtAHkaspqfnMfFL6SBhqN5M5SC6onRA99rcHoHDgvMPd",
  "key22": "ibhe39jNgnzGTDGuDXx5EkkrWV7CpfezgKRy1pWUoHvjy86nG7J57QAEFhjMTyuEQw6Yivx3DYVe4qZSGdWsgWn",
  "key23": "53uP6qo4sg9GaiFS7yh4FAUQeZf56tgtYCQ2JHjjRq6imQ5ttJEKB6gc7papWrWht7dft7qevrLJLrynW8Y6ajT7",
  "key24": "pgLcu51bm6MDD9juE1mUfUuoA8uAgAhodAB6HKTFNVUSwXaEsaHFXvVsLQyrQxfhCTQkis1VXHELRunUThxYWWV",
  "key25": "2XnXYgBp1HEsBUUeyA2PKYoYeES3nxF7WBKK3yRXuYq7AvMRqSLgxRKKpbqJCzfhMTXq1y3qg1UzTKhwZvUvvG66",
  "key26": "1YKLp3SnSrtkRvbtiHxJt3mmkPXb7G1xpnssdAmnH9GfA9YgjfutEMSnvXrzU42a4sr8sUeJ4PSVSr7b3Mens9Z",
  "key27": "3AKy25QUnLGUpVXwCfdnSFgbDNF2AmM8TCNaq8stNXsWHvQGxXoehd6QvQwvd5DJNzeSjsiTVeRy3is4we3MY2BL",
  "key28": "43awhSueomDHSWVfAXwcRNTiwnuEWvBXAavMv32BZMGT3js7qJQmtXyyvwgBdsiHXNCvJ2PPmNnF7jhHrixMzFsP",
  "key29": "3ssvkV2gc2Cx8n9bdxdq8TPwzJ8tjKts4ZAPUtsvjLmdujiJmB7ntte3C7WFBRWwYnwMdrmzn8yGrJyT1XfGEQMw",
  "key30": "52Pgwq799fdAPbTFrSjEtUZtaMoKCmqjzDg7GuSHKzWpZZfYVhDnt9ZmMK577XW7LVXAjyXpYRmpx6MP4St4eFzE",
  "key31": "5rLfFKYL2N4wcKk1LnuVDAipeVhMnTftFmmU5qiXGN66uQNdZV1RKA8z946NxZ7aVUvkpXHEkrcrkRk44NryiFZq",
  "key32": "3GymwECCiaBooXDwpSBfh3YWaDU9CMoUvm6LsdAUYE7jhuS5EyQjcf3yVYBf2zY5qDpe8Pqd7s1Mb7bEESFpEvfB",
  "key33": "EfaiaEgyrhmNgg4piSivoAjgzyAbCfTTHpCnmLc1M3HR5RfobuqCaw99fk2EYz87AyPXmSnqBD8YSEuQ24WxNkG",
  "key34": "5iB7fFHHhFjdeNvyWne9Phu5bVkfMt4vA6psPxMDUiQ56VY9hWiSmttHZHR8SkAeW8dCFMxb1Rm93DqrZjuibrMU",
  "key35": "mcqmkJJCqe8VYFBQQgMSp83fTuWA9KAV14u7g48gHLnjgzGosKKxrTPmtd5RGqK8cXTNy456v487tLV8uGi6En2",
  "key36": "5e4Nos2c3kPAC4hTV5Rku9HAeJCGctrQVQ14RCVGxZ9WewjwFvF31jMXFfuXdCJTGioN6tsaeaAcKunS3PKCBke8",
  "key37": "42QkoqQ4h2PEcgF8Dykq86xrSUGpTgTyr81RreqEX4RvmcbhokRNg17kVTqb2xQqd6xo2yKkFTNh6WeSK8Ueogy2",
  "key38": "4Bk8Eer9JMtcANu5RrDDoatKGvbo77qqcqWEK4uVerx4tCrAGHzFRhuR9nFapmHZxtBJJcaYvb4otpuYpcy6JjB1"
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
