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
    "2uf6RG4HrorHFuUPVikQR34ESwwJKetaLzcnk91vSesJoCtkZzcDTrWBZurA7wghVPgGvT5EBytF2dAsr5GmP4Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFqnbufRrrbSV4TGEbGmNNzMzZgpSiqZouUUU3fKZrmtyi4XfgSqR1x95SrXvJLhGT7Y6n9MQTEcYd3YUpavXrv",
  "key1": "466L8CbmaBrNr8qbasdubdAadGVwrJaU7cJmcxum39frEWsg1L4WhhvinuoKuceo4A1nRTnCGTuF8jfHP1v3JXSs",
  "key2": "sHHJU4JC77kA2AjhSH4jWkQXjbUxJ1J7PoXgsEYbdZum6Ku6PVcFTsMVnjBTKA1R2AsTXHGxh1WZ3jHXMhCybc5",
  "key3": "w1SumVewMnr87JyvLWX5fzb7NWPDqsA1UdLbKNwiXKUsZey8ixsNyNkfhPTqFXFw3mRWDgG85vPbT8ZaTpuy9X2",
  "key4": "2fHNoRpAT3MnrWhrizgxc5GncS1odM3VPnP7HjbgDo1mDtBaMCUeJeYfQERB3TB9pAjDtebmiSVPfwYBgaPgaejk",
  "key5": "3b2bn6YUodoNVEi92rGX8vPh4fuiEvWmqoU9ruC31Pc1Uupb2P3KsbQR3F5nJJpoJSwGnUe4qvC6D6rdH4HGawWg",
  "key6": "5dpWsrPycohCnoeFVjy3ijppEbL6aX3ZUUn7mJfhYcWxbRZbKniS5nYEaD8Jc1XJwiHCH46TmXd5YuE1a2SckL5m",
  "key7": "4Q27RBY7gnSmuuJgRXAsHhrJS27tBHPSudezU6pwU55ha5NNeUpPcnDR4gRCrJqAxwEVPv8JSbrxqHCV9bcR2CEj",
  "key8": "5wD9CLz3xdSLqvG6s45tf41Fnwh1LUq2tZrLunJFwnCRNrMA7obrZiPUnEwahh3DgC81NAGZ8ZkjcJ1KLaY6hXyG",
  "key9": "EwLKjXtzcfdhhDN9Bu47eVLExtqF1Gje4ftJ6waLyeLSM6Zy3L8ruBonzgQF8o2ZFneBXjaKyhPGeKBt8YBdb1z",
  "key10": "2McVDQ9X2rp4osZnQgGsFmPCrdCdthGxkQs8iFDakdLpG4TcGXweodJapHCxUYw9n9rwq6Pk9CBQQ1rLGG8Xw3mH",
  "key11": "5B37ztcyAmBhLKobdi5S5wPFH97WxVBDwPntfSwvkPMaN9xMJBEKUixTSTBMD87ypy2RXajcBbX2GmHhCiCzNHve",
  "key12": "DK8QncPZ78RPiKdbMLnSEKRWQW2k4kF3mEKX7ZDuyJ49P9DgJpQBdSVb2yNgbsf3RBwUVDTWcdghwfvnd8EyLAB",
  "key13": "z89DWQ6Zfgm8cBUkX5y7iTLGvShkKD47TupEqWG2SHeqjGRnZx48iRtFtV9yp7Mj4RhExWXkCLV5WWJESnvMdbD",
  "key14": "3weeYqPURc2fCbNoWgDeHyfAqBV85csCSD9r6mkuqVDms1k99UfHS5931GatqFdohn266JoRqAbWoUUSybPQkFCj",
  "key15": "4HAzw3RnfcKszYcuUWJyEy1uydJMUvUNbewtQazZXMZ1pxCJ1SUmngd5SpLwV3ER14yRZCv55sWmGmaVKiTEiowh",
  "key16": "2PckKnxWR4uAnNJwPngMEcm8LYpPTK3pptKW7bwgyopqthwdHvrSJpXa1umbUQQ2nsYo5FkXEUotFgL3px3mHQHx",
  "key17": "ufwt7CNjWyMeQuEwRPXuWAhFdqUU6gZN39eQ6Kt4P1wQwzXBqWvUU2AQwUVZQbT9QxNjyVDZ1jzgfLK8XBHBn5V",
  "key18": "3ugf5ntAf55Am4J9hHEaKi2U75qMYFQsgrECZwKQ2CLtcesYUtVb5zdLYEUyWm5h8W1MR7EuKYavXKq6yhHhmBL4",
  "key19": "sBWj8p37EAjQRzT2wWE1bVLybAX2rJwpm57zB62PDByZv5yQZLemXQ4HZoKX3RP68yvNtw6weidnyKYFAN6finM",
  "key20": "KMiUsAQ2Y7n52Qcn7FDqTPhVMjL33u9uCtaXiTX3EffYtds9mSNQJbFM1SxGH6qtJHQm8hYJu5Yx5T9T6sw3Ugv",
  "key21": "2yZDeFdDCqEaER78eJpDqg3yEoR3qnX2amsVThabYVrqbvpHNhuyPmaJRPP7w95mLcqFL2hiZ6npM1axgQrcSXFQ",
  "key22": "28tD2EQ5HyugguZvvwqNqBAJ5vzEcbS9micEe984yxFeEroFPPWDectNMaiaB9nuVYH5Jh9yn6drKe3dpgkuo1FD",
  "key23": "664TS7gybYmXRPqLkYjxzH91qwUcByWpziSXT52ozfdftvMmNpWZpkXwS2a4nnjwSeZGybDGu1yo63bEvmhv4gbr",
  "key24": "v59JASTXHpyGWUBCTr6QVVYMnSEucY4sjxMyxAA3zM8Gptupd39gpYZa1pVtg9kqUS1oq6U94L87XUMJU2EtHsg",
  "key25": "6fGDiaa7CwuUCnSjVuUYSXRzwKSUEoNpCVQGSkWdb7P6puqxGwGUnjnon7x5c2gFE9unczyb4L1zb4jvj9yRZF2",
  "key26": "5fgSUgPhZ1WCq771G3jE8xZxyoUivt3Li7h4QXoWozCUWtFksJStpsKhcswVEwaNMt5n2nUEUYQFsybKteVwbLNj",
  "key27": "3qXjMtqJgfe1QwJoPi9Uf1qy4wr72bWRc565B6xFXCWzabBnYk3U8ZXxSmGfWnQwHmW4QSNFneo77QCuu9cafDJB",
  "key28": "37Ka1NZ7YFWzhuLpBduza2w3YFGyx72zVTN2sfATYn2cmmWmuN6S7AWw7BgqcXmzNizohPwC5vrQaj44XXZaQDF6",
  "key29": "2qFxaesEiM6jEkLvVYHPqBRRPmEHuY78ztQYqNTzw4DfaB1LSqAZ7MskjuorC6843XXT5D6XYqJqxraLqhMJuRNY",
  "key30": "5G9ys8wXqq7AGmsywg7VzvP8hWJq2p3WUVrE2Sreh62yKpJ9b4A3U3VRJU3hykdHiMxP8Hd68hA1uaZd8n6jGSLd",
  "key31": "22Z1Jqb1ssnTzgfSdamYfmeGHXoFWr7mvjH1hWCAChV5aYMWCshf5Jqa4fDcWXHJXr3Xf2hMbqdRyKGSq2NcUT5c",
  "key32": "26d7yDh88KVPB4QM8Q6HfMoQuqMn3Qk6MexWEABrPpvEmNGrX6oGBNYwxQnPqhjweZP5hxVbhB8YB8Tn5jpaWozs"
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
