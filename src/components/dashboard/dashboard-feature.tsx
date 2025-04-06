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
    "2dNjQU7saZ2ysGMVPomfofu2sXaTCGzrYY8uooyanfQNP4apPFmqdQfW5SNRwfacVhye6NEjyvx5FYjWUc8zhJTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fw5To8mVA2g2ZMPXWyoKBH91fgPnkAsRS3jYyKdvFt2UWsdbSRWsaNFu7aS6VFUiUJbMaT9LxDM3kF1maxH4XmA",
  "key1": "5KGgbm9fZ4WQSkVKBjB2h2BrtR9ib3uwbTBdBnxenPJR67wcan5ftiQVHKQv4st2G3kp7scrAeT5GDmBotuq1JX",
  "key2": "5qDK1ueckksHCdMjc5zgNHEUuChyYkfarzhVtNY8gZogtKNCkTHoYop7Ro7CeGL7Tyc8qYWN8v6p62Kdr9YtpAQW",
  "key3": "3vCvDYeDtUNxXEU4TbgthSYG4tt8wq5qDctEyD5htm3Tnuujdi5mBWtH66HdR1ZZJmhs8KmysuCRnEzbjS4PhK8E",
  "key4": "61NmTtX5kZNKGeRyEVaLyL9zRAEk7RvGYUTLazZevSXamqAAv9wkrDyqDwWdEhuHTJh4mWrJssr21Dq6tKqQVeW7",
  "key5": "4KsYjBGKD47pT2Xo34aEeZWqPudwbzofFaDyH6pcAWd8skqP68pKXJTuVdFVG1VWdR5cmee1cQoC5avCZzxoD3Jd",
  "key6": "dPxmHe5uaQaVZCQqWmZoJNWrLzVqEJX3uVPmo7L1ifJeAxRhyRhUcm7uQG4WdyF4D7MzyvZ3eJ4buzKjo3iM2pF",
  "key7": "V28qrHfoWqGDTfE31W1CSVWFn9GqXwHaZ6UhYz3kjRJUcUEsCmtJQs9V2t4sncEmnbEHM2mTwhKsKMdiomwaLop",
  "key8": "4pRDrFd15FRck3AbNEBVGvTFKdEnaYQnhEaagpyzgrbeTzooqGJG3MGPDVs9ma18syp3ndiRhW7Fu1DHXYWfidTD",
  "key9": "3j6jdoLU97HwevvXQF5aZKu7pGP5sJd2SwEym5YZdNLPbG8g4MUthm95x8FXpSqyoRXFs4m8hrnJrapuq6y3bZ2Y",
  "key10": "33cFMVLWoii7ezGfcHYuZcP3ZbVvSxdMittvya4R2PPxYwRhUAk3pocSqP8FnwaryZMbMHEEmHcp7iCCNxDTnbBQ",
  "key11": "55xCkuSMDgzVhS3J2RF9pVrQJG8yCgaf9MhFtb7Sz9zvsbPfVJt9k2rgd8k89mdb7FWzdZJNxVqkmVjtd7W1sXcS",
  "key12": "5jYdcUoReCn3bGoCs8tpehs6w5ZCHpq7gQ1Ygj6VWE6gkhKWz6ssjDpL54B9mNfTEuon3x9k47AuY5Zwbyn9Qrjd",
  "key13": "5KTQJpgYvdCVHsQk7pu3YqqyckTVwa5MBKBiGFfx9xdMvzhho85mHN1Hwn1HAboEckGn71iy7uZDmXtd2W3cAGF9",
  "key14": "5poezSVGbxufB8ZgzjFHa4YNZc1A6E2gyVcDa2kj275ZG8q3zRaL4rfV8FN3kCUxLHtkVwMpt1QrEmXwrbEvWgj7",
  "key15": "hkVi6Ezq8MfrLzjQEXUWpqbtTbFa8zxHPNqCFpbivVyxYmq6aMc5AzHbLcJVbZgt4Af24VSV3vV6MdXw1QFPAJZ",
  "key16": "1P78zkNQDyqhiK8Nqy56xdsAts8qRuXMuYEsFUAJKHgy4R6a3poFSK6Wwy2kGVq16MjVPodoy39DLdshCaZDDPk",
  "key17": "5ZZSo1vVB9oAY7DUHKNrnkfkNckjfQqAM7U1ai2LSfCf5J8nZ7x6Te4U4bYYzC3BukKvKLJrjtFaGodqAtXzAn9o",
  "key18": "3s8Bdh8nfowAN5f9Fb3fydLDX3HEmnWNroDstxoq9YtuxnJLoLPE2dVuGaTrbCVeVwBdoayxLCWQN79xDx6JAK7T",
  "key19": "3Vo64YbP9ifskL58MstYRdb5sgh4UZokyVVU9EB5Y7ghB42sCgvCDbdr4X6owPCqriMkXF54fAaW1c2wgXAUD144",
  "key20": "3Ju9S6ao3waJPdV7LBPhHwXosmL5DzXaKJ261GczxbfsVzFBBHHbrG32EGLBT9JGaTwTtZDwpahY6g6CCdWPtmKP",
  "key21": "X3mTBnaFunwCd7rWvNKtbe9w3quv4E3NUeztPm9KZXDWLU43nnmYZHwKRJDNcNMVnWhrEJDWmuaR2SrXodS53SD",
  "key22": "2Z3gN7UL6XVWooM8Fz4rY7P4NiirZzBLcqdHThoCwQ8EgPjWqVZkPLjrqwBL3QNkMqdThjDco3rHsDpSXE5sFVDf",
  "key23": "43kEZixgSZSZeTTd4PeBMnX7wqLDGvjheZWT8PB9E1S6GCr8XpDE1vprg2GPM2e7Hd1W7CE1HAEFrhi9cVzQhFLr",
  "key24": "55pHDBhF8wF75SDSK4how8ETLTh5KU32LFonqV9TzmQjYEpbyatZfCNkxTJMQ7nfqzpyd5DVuADTwySDw25pkvYz",
  "key25": "XXXwmAyMmE8Ra3s7rojJ737u68qnbhfYZKTMQ9TEArF4K6grrLwFowfeyUScWASJf8h28ZohsZBwAsFsoqf4B3S",
  "key26": "3wQXUFxd3chFyST1xbNtfwszk4vsKfM4Yehok2UksXVpdBaFCJ2TQeRh7tD86T2WS2Zhac2RxckwcpJ6GEdfkJWo",
  "key27": "2B5UqnbwfVWfEf7G4HehGGikTTjRbpYwFRpefBxX8EydJe5KMgwJdvpya5LvemMzM84UrFcVJHFCzWtfMtUZLtDP",
  "key28": "4rKnRzB1BGy269Q85TUHiWkuQv6rGxkSXqiQXG67Dj7iicPWVycnzF8GuxCGaik41ujqHaiXQC4nwBcMob7WtGrZ",
  "key29": "2Jo1HTiFUvue153sfmjuJGypjZvPoT1pWj1MYpFXiYeGRcxqHHVfSgQLXYqAt6y2uWH7T6wSWP2T8UmVWhUmsVzr",
  "key30": "4954jPLS8o3p1Ee7Jmup3eovx7hHrmxrmn8FRGb5y61AYVUMupYqmU9Wg4t5xNYk9B7hdsS83Sf42jT9dbSvHsUT",
  "key31": "NN8LFhFSPT8WAg4jj7F172mtazE7vQn6AZ7p4DXPzd82QY1s9FPt4npavXFJmDt8b8sZeJA3rWzGmeBX1FWYqd3",
  "key32": "5jSq4VN3xawD4jT7jUR9psq2tSNmeFYfVUjKDjahQSig8issAxmZKRPfPJ5D1jdkhgBP3dLfNwihomBEKU4EeyLW",
  "key33": "2hQ61CVAt49KEcup5iprWS7TzYms7xJoScD9K4Hvbt92hQ8JYqtnWtxTj16eDXuEJGGscKovMp6wNHUK8BwdSHUk"
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
