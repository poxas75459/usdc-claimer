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
    "B7gzHXBd3CKHK3Lop8aDZ9VtMD4SxgsyjJXdL594vyPHq82C2yQVEXFXhevKZYfeb2gBkLBAUWfFerKqtmGAqbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VV2Uoyb1Y3h2iBHjHNV7JdJt8LnXxw2ScvXYvRxSh9Sk8NN37yvFJzcbzecmMRk4QAsTT2tBzg237M5AZqfPgSV",
  "key1": "paLJiHV4pcjo4eXEsE4qAZrsPfYKY615UG2pm5hb6682NDwdmrrvQQZ3jMWYU28Yq22Ci2N4D9drdUiHKKQiprX",
  "key2": "5mMBJqzcb9QRrxjaPEDZD47WWB4s81s3B1FAsBe7K3ggN5juaUDBUgZiQnbDibZksfSNA66eP6byaJ6eRscQScDV",
  "key3": "4NrdVqD7ctFD5nAN7tJhc1eKsJh2gVDqbocF5AVQKfWnwPSgteziKF1ZtPgeBc8GBZohuEpAJQV2r1Thef7eKDB6",
  "key4": "2gQ9cCjUFWYHUQrExB6ndYi7Qgo64DFGQqtoJCL77Yd7NHwkKHBoh8DrW1Kp6iMpRW5XSgqjmhZNBYP7Vtp1qVYW",
  "key5": "vjuqxPSbVErKZvPXDTNz8wUMatsZkExVmwYLv5owCNN6PERLjKztTcPrFRoCjnETSL9bNjNqpMxNpRVbrexbFSs",
  "key6": "Si8kCfZ8DgMuBZVtuMp2huxrw52L6W3pzCoxs1iMXfqhmPY2ajpdjeXuRVaEK81g421RZ7HRTDjQAb2TV3yGT57",
  "key7": "5ezBfZh7bXJ261rjWxUracJF9KGjgoMUaaPKj564dVR5XQ9cUwQmKSdG3m6kCt36je5GPU2mywS3QVwggUMN5mBQ",
  "key8": "2fkMWXkRraV9yfg5YYabyb2QumqqYFheXnojquAnDHtAnjsuxFF7u3KrsGnnBV6QpSBHzZ83p7e9N6nWp4q8Awq8",
  "key9": "NcEHPepMiRN9kjYo69RWnpBC5orvjAGNGv3X8KDwQLSCayTuoqUBoe9SeKfEMDp2qiqns13dQrtBJbh5uh6bHLm",
  "key10": "4DkxAWSTF9y9A6YVkyzi8DQQpx3hcGh3E5cr9koxrQSFtWhK6r6fo4GsL4Pjh3iYUWRmsMtJrtZiizB7s1PQgWAG",
  "key11": "5g9CBGQTjFvmnh7V8UiXMVqNYDNJg7VzJ5xZcQtKbgkWGEhkYikydXbzwQJKigf3s8ys78PiqnSDWFySFY2qq9i6",
  "key12": "2xj1GMSZSE6pvxjTuBR9RYhFjCXgKjzZupeezkTYjRgpZujMEuwfo1r9NDiwUYG5v4CHBmbPsW9d3rBw5EtNN8gM",
  "key13": "4oeVZhjdyo158YPaaN7YaMP9Qu6oSGjjvGwSjYiUdiC3getgsaTC3xZA1esJ5VW9VnkiyS4BdV9xWbkWcAcx6CWz",
  "key14": "2JUskChKokmtCn1yhvBhy4j4vWWaq7wuwDdgcYt7MMSnaGCr5Vtgd2efeoqAcZ9rHW1LmLNY1t2eu8ZDr8ypnCsW",
  "key15": "1kRpqAFCPNRoq6pvga84jKb6wXeNrafef8v5gqkxtpRTzfN3PybgiLLGzPBkAqHaajzuph5Bh5tPZzruF8hcCWQ",
  "key16": "2d4dJvQX88wiHcNzqrr7AY9iDR3JktNdsNh67ULqTmkJrhy7G49vPsJakkoNwWaEm3dLBYFjctjy2iFsCA1tvHx8",
  "key17": "3Xn2MPGLEx5zzkoe279Yyqx5L6ZzSU7nMfsKtamAbL7Ei83FDjzC7tcJSTducVZeyYksAip4a4Vg69NEBzqNAFPf",
  "key18": "4bUYakQ7vdWPGGEiTudhJ8ntTteZABtSh9eECb1VwqLkicARaGoFVy2hrLgXWcBjyn8rDVJXN3kNr8yCUhecrjZ5",
  "key19": "HMPFteBiKutML2L1n147wa41ndteLN8Ma4mN3ySrxEVM1bsbCQ5yR9zxDR2kjHsLXLo1DFa2mPHWZGzG7aUWkBj",
  "key20": "3YK3jeQTyE7TYkV7TEsZyKBcLSkPfQdZHsUs6aUgDPdrExiPGWKdBMUXnLc34TcThEATiDEW7pTZWUk4zJKw8Pi",
  "key21": "54HsfJAk8ipUXLzjZbbN3cqkf37xTx5mXuCqJTxJ8x4o6NAk27ewRJvaK9UDbYtibgH7m4newhjYxyiD8uhegq8V",
  "key22": "3Zk5Uv5LDj5Pcnio2vgHJrwrPiVdi3sYuQaCm8J9zW3G8ZEAYSiBHrR3oSgBCPwfuajRe1VA1X47RMKBEohKdPBw",
  "key23": "3Uxcjc6eCtZ8bohKVLbGX1i5QyTS7EiB5dggERirQS5MChx3oL34Sd2Q7V9rRk3qDrb4JzPLF1Sw2EWawkHRyzzR",
  "key24": "2LZjT6RXAZfMVq83A26KXCc9VXK4RvGKzSD8xvt78fodQyMf6TYgSYCtsG8CmGdzFykDSrCbAzertqXLrq6mpvgV",
  "key25": "5y7ec1reMXbH3asnA6fPHmXioqVG578T96GxntCUPWt4mmASoWtxWAcQd4CaRyrN41yw6HovjqEDgmajFVapQmwN",
  "key26": "46kfGuHspG5D75tQkoAXH6hs8GmUuvrfD3vn87R4xPSZ8Bcgufc47RxwRuZmqtMDLNFKmvQtPzLQJw6AqgrcEi4e",
  "key27": "22rSgHwQHoq8YaSWAX6d17NRbSX8MZSGPbzRGoTD63dJ4sDQU2y4zCKHfQCAkopXd3pmbg1Kus8Bp6awkGCBrVWt",
  "key28": "2ttUsaEFZt7JmVpWD1vD4Xex4ZCM9qV1MBrnjvzUn5tWEskeFJNRZhgsEw8rt5YDAVTJ57FdGpJPn4gvta43fKhP",
  "key29": "gsREgnV9kJ2NBJj4HVqwDwBnwmpbH8pQ5GNaj9d2JntRvvjYk5Zn4q4sD6GNTrkRUYXjLTotdCtfNyfuvSFAorT",
  "key30": "4n9dPDfDTEvD9Cut92UtqkPmNsnCLFbpVeLVqpJU94JyoHo6hgbUFjk8FXEn4nprLMd813ncseYQb775fdXaS4dv",
  "key31": "5pbbwLVcKskxX4T3aj11LUnxyBmcH9LzuyQkUA1kmUSuucFCBoDraTNwMaMzWhdCgj5rAgQzTrPHGB9qkLCdCXeH",
  "key32": "xwmLhtHDv1qHroyHNMyz1HEsQ3RPLokoNPvi6EyHC11WJZgaWj5RFy22mxAqrvqhnUNbBHNnxFPqUhBn7aoEtnX",
  "key33": "2mMdL7Lt5LfcHt8Wo2ZZLHF9aLVhtjhmqVoAo7cVtJWkY7U5o7WuHCfhramTM8tum7vCvcNSpuk6AyvBGUEkNxLf",
  "key34": "3TkeL8QhJpZhGxhnqyacc2ftDfALzrZ9cGbmShCpmnJvuds3D9biiVXGB5B3oPvKDmWWtgnGWpimfsFLNjyGi1FJ",
  "key35": "4ZbxjvCaXW9HbTMMM27Lfk6Dd8bL53zShpLnLcG49QPrqtETjyhQY7adNGgT4UHjn6nHzfCfBothPNZWrinrD8d3",
  "key36": "25UMwgcBFZQLNk1t4PewfD1yb45G69c2KABTekzzSksCim4Gau3XP1xgTHnSN275vWG19wk5QPdfqgeYxpKdbFr9",
  "key37": "nSYqieUxpyArsxdhmgW4K96RZRQbRESrMtTFJhKzZjEzx99Cz7aytHCJ5Yo9tQwY4o4hPKfEDfoFnJmcmcLoeQX",
  "key38": "2cb9bnAvfBKRr7A5R9rfaDyVsnQgtXq8Hy2q2XRVYwogHZnihRWFL5GozjbPuJWUeJqeJTc7sZuC67TJsaWVcziw",
  "key39": "43h6NS55h4jjsYPeZozeUt5S4BFFMN2vU9PNpYEH1HCaoofRKyUWUgYuie16DKH7K9FwymnYVaUMSG293rBQfFH1",
  "key40": "5B6EvB4uwxBeXcZHHC6oYFisdTjPpchVFKtKXnso17tnQZjFTAM7yqoQTn7j1Hsfwi3B3JbFWxWcUTZC2VCkj9Xh",
  "key41": "3GpW1cv7UD36b2mU9ezffkug4jQdztPZiGjn9M8UZhnhmvXXUfiefSY1v4nnRWEqRAqGz36vR79TGo2Fajz8n7dD",
  "key42": "4c9i2oYQ3FodeVvz3CLr5zbfgPk6Y44faL1c4iysfVMqnUUKC9Nf9WvRyZqTSWnJaqBR6sL5WvN6s2JHRJp42HuY",
  "key43": "2iugrqEp9zo3dYyWY9Jp3rRv3SE3fBCdy83moM7qKcfRTqp3KCVHgqL3FrN2dUvRox4Gs7iPSausyjgYktpXJvzV"
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
