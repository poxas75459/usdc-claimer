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
    "2C4Knm8nsvLvuB2E7y8HLYzVmm2CAFvtjbxaxFcRGMMcDKBfrR4qiNGaAzUvYqkcvw8HEqwgFsWhdX44kssrfwrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rizrQW9jGd7QVc4HE926562qomguPDibWzsu1DhT6ZPCwJj4QvmbXQJ7qor5BZheGTs5eNPSuHmLqxwmEiFT8ZB",
  "key1": "66sVmBV4FVEJDy2NaEe5uDPbQoeKsgS2b6gSsJBE7y633B5C8EAux7YjFVNaovhtRpVbBTyEd6HY3dtskGSwvNL7",
  "key2": "2FWj42uvDEoTcwrJuDdmBcb7gw9fEe276hge57QbFXD1r17w9cJ4ntHpHZscHU2w9WBodhykRdNpsLWPhfkbs8Do",
  "key3": "3JdjZBBtx3tLmJD1gsBXNHD6CUMtQApkAoVCjaM3Z8XsttChJrwUgUqGnVRmAEG36ZbtbezfqyH426XD75GcPzyf",
  "key4": "4mGsCr6KKgfMJ44iF1JBjV4GPh98iAKNVn9ptCS2bdXE5qN6LUL3gDoeQAZ4jARAaKFG79L1XVcRGuWk7HDFsaom",
  "key5": "5UaPB8AtoB2t3Un3GiREdQ12uHrpDto4dqxvneMyF7Gh9cS72hPYXuz6AUxcNAGYvE5nCkYsrpNGNuTw9vXHVR17",
  "key6": "MxfkCWjmTmu5GjymfFhSHHduMN6L3EsaZd7bCvbVRktwiFGSSUvRKng3FVURMkcvetP6bsK7Uc3dmJQX35QsQmG",
  "key7": "5DJkjBcqEKzLirEbhKutwTyYSC82TycXDX84caKmwt2wtsvuyJbx8tCveLaya7qnGoVWvCBgdSvRvAUoBEsoiRkm",
  "key8": "3LD6wRhekLVADfTUdtFSb3HXxpJaM8RWQRurqBU4k163HJmP1ASGw6tjvgAVGhKFb3RMibUtxkV6J3x35bQxwF8Y",
  "key9": "4fAptHwDAEGmhLNkKywg2fxGnxzxAxiBTAEPc2PDaCo79Q63iukN6B9yjssrrd1bDGEXaN8RNdRnHi7w53KtYHKi",
  "key10": "2qojpkRQsWnCDhd362rorJYDfM5HDJAmqkAVj8ohDa8V3TCz2ZwNJENMuH5TKbh2mn5aXt77Ms8xJBLKgmKVnkey",
  "key11": "3kjgZFPBzCcNSJZV6ATNygeLyocZ84bSp5gVxLeFehkPAXd4CKvoJsx5L4LFkpNoEVnJak4QQbaENQ6VcXvqUZnZ",
  "key12": "4PKvKtZyUT5RK74mUexEnXvFQizS3KQDmJShBEQfydBo4u8aUBozzgWXkYJZLn8kxXDVoLcXwfjTjLqdph7LESfA",
  "key13": "2ypJ5EaVuiGXpKikw91VvsSLoQQjQzTuEtYPxQTKhep5TcW1i4WaGsNQdpXiWEo7DpHag8MJh1BwQdEQbXdko927",
  "key14": "3GWMxzC4tCnPFQFiTkxCpUhzB8fckNX8Ewn5TYory1ru3rSoXRyqHpPzkE3PGbyHyzXzn3f4MzkJegxSE1FYUubB",
  "key15": "5RpNugCjnMDNhpx1NMHh7ce8kCwXGQuYb4wJBVaw2JeazbGAx5jN6FrL9WQJXRqMdJF6g8y5dggrr22z3GC1hrV1",
  "key16": "37t5Rc8FKrPfawvcupTydUCdpMRJpTn6CjYPER9bWAD7e6CYHRdkxNX8o4c8uh3DpC8SWjSVaADqJz1vnix6oVjw",
  "key17": "QiPfB2yWWotCNo2QZiRob5Wm13q5fBFC6vNDP5SVe6YfUfy6Za7JFBqLzRuw3vVkB2sq61SPUDPWhjs9hqDtr99",
  "key18": "253Mygdw1X9YWVVhkBhu2D59qspAErninTp4FJzM93bAYu2bHYZNmKMWJpi5npAbsEb7nmop8tkZNxDc3PWiNLsA",
  "key19": "WxrtkjG9ZxhP54yciSJ7427M8nYZ8g5rteBqePaYCMKqjmEPHNVRAa7BqzZUatoryh8qTN2TfXL3ZJdAtqE47ZL",
  "key20": "5E7aiY7QdLNpgR5hCn4gV3QAUZdQnx35v2K1q3JYTo774pTrz5h5TRsjRx5C1cVMQ4wSPW5Q5QhHbw77VBL28cFP",
  "key21": "43nE677D37toKrgDJMx4WeJJe4VE7LDHceHoN4d2DDnk772jhfM5bWTxsi4R8yrWxB5WqGr6k61gQoVPkdesYAy8",
  "key22": "54wANfDmfNKNZUvcVdZa8nJ8RcCBWck3xo9YU8DZh6e9tn7jgzyAFhMcJSWQZygt4N9BdLaEVUorksM9mUoUgPeK",
  "key23": "hQi5Vb3QsfzqZ2rr7uz6sY2F5QX6QCaugWmo67rjD2SQrZLi2nCnuyrpSuJBSFhcwkxsAX3owU4fF2sCRtxCQdW",
  "key24": "vehu1TGjznb6kdkaEcCVrbkW2GziM5y5BSTf8iTouWWGSmLNV6sfRonQsJnS9ne3f7btkV5x1ydipHP7TbdAgUb",
  "key25": "5bVjr8mj1jmXE88tpAhavQ1RH9Gxc8TY35QamnS2uhFZiJmy5pUFwkvzGhXUu9FDi5UjFMLKZuytkUp9jz2HCxPr",
  "key26": "4vbbksRdn7CPxj3ssEWJYgdk2iShX5upozQEm1qrgWtCxDxMYF6FRDsPFJkBSSp3eLezDkEdYHvnYdnWn799qpTL",
  "key27": "4BDAYWu1UnWXbyvXxRUvHdGByxq144kRdNzV2vh613mVxcHVHjguYF2Px7nkjZwsJz7yj7YrsKoeANCSsPm1g9oM",
  "key28": "3RE9t2MeKz97oXMEXwRL92Ta2gGzukNQ8MEypAW22YebcaKo2XBcuRouEP99am372KnHYzcJdjMQNPXKUVG4iEkN",
  "key29": "45KqGW2e9BY7gZSBhuiogdVHMXEz5dHs2MLbFh4yQRUNPG8p4gW49Ay9173zZUhHvBsemQjqLo5LznoTHHwDeVGk",
  "key30": "2zuKJ8mHViZPRBbWwM1JjDCxDaL7rMfqvvPVwGcPUPcvrxDqguWCGUZ2ufHAEynwJPpEvJvth96pTKbQF3L6C5wx",
  "key31": "3HX1VdMgPeUUKvLU9vXR6mufevPTApL36f3MctvdFe7kmasvQZEZ5FdJcHmkCfv2mAiSe6xbGqfJxivj3YM8sGj9",
  "key32": "3RVzp3MwqM5a73kTDD2g4YPvPbVv9VsFCgv6nM5MqTN1hW6fjMgH1wNfXsFcJMLmSSeszMFpVpENDanap2CWwnL7",
  "key33": "3yGH12HEBPzW4s6e3epXKE8KZGhLy47PaFahgtbu5Tm8zkRBxpJtMTm3AvcwZrscQ7mqEyj3YC6bUwF5kjrb5HG1",
  "key34": "51EhHG64P9giPx4UU4EDheVGpKg97YffRvxZY3PYYeEGJNJSvSLbpDbjzT4NShwUtfR1jA7V1JgvQ5SZYSY7fb4"
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
