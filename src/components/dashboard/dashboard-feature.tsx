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
    "23Ur29oGYVpu5ibeZVtF73XRBiAHeBTGVhjM7QCAkMPdH5gxGdFjY2ZyAm9Nvnvxuj6NbrYPrKu8skqY6bdRnitf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4md6s3XUfKoe5kdgudJbYrySAWSnAzwSwfv7PfPDJscVqiwCqcEH889V766zfkePUEaYiBL4qW4jj9bvVZimXfXk",
  "key1": "2jjEmb7tLqJUCK7EbHxPy3cKcAUJhWcB4NmXAxhztUN1a7Ts5oXXhiTNSF4vcU7GY6ZZRoMuwRuB1DpnzwQZELqy",
  "key2": "3mDH4WjdnafHwtVAkQYnKzaDm3JUrUuzZpBQDmgV7W6G8zs8zaY3wk4eoyPwdjKhKrkUNUU67ZvBUqptFuevptHq",
  "key3": "2NCgMZ5myyJzCEspo6eep97gJt6wqxbwggqAAe1vwLoKcLqP4Z2d4vLkmYB9p6ugNSV6cBGZEVJ9e6ibvA5gPuBq",
  "key4": "3fkmfg3Kh4AUdJzVs5jQvdNXw1M8h4ULhjvi2MtijayERcce7gps2fuooM3Cs7SMyw3U8PxxmFJkDy2hbFGB2Djo",
  "key5": "4xxZUzE4xRowwCzJ1xTywEE42Bw4PWdJvhcQSGLW91siYyVtwEmWBbFH5oqmAVJ4G43ua9fyn1cs9Jvcn8X8VLT3",
  "key6": "4uwfeMVQ1e5Zja29Vwcxo3yG4BpVfcXQP6kVYuNj8ACATVBupoeZdKeUqMrprx2q1NpHkT9NQY7ZKihyBSW1HRbb",
  "key7": "zfWbDBdKVJZA1HdFXFzbbkMF5w2WaMKTRny7mrrf95Cw3pnswGYumgRXz9Va9NLZJzy5PUMG34R58Ssr9ucDSvi",
  "key8": "YmcXbiTRgv7AVPaYkWMVZnw6yeyq9MCRttjJcas4fFKrfM6ev1LwCTskFVGPRKiq3Uhiq8WcGvjLGJwFisG2kCL",
  "key9": "557or97tK4Xqkq7rRqb7EJqLQoQKPE67q5YU4QzxqWJ2quyTsW9yCu3dbq1DVk9fLDcv1S8ZgJLYRoTmjhhRULSg",
  "key10": "TUgmRGWcs9Nws7HfD7qweUio5kfrRYnyBXrvoUdLHYS34bRHdartES7Jx8UEUSVpTLW3nWj89Dz4HcM3ZZLdqpG",
  "key11": "2St85dYc3dY1nZm75XXDAZ1npS5bUr8TCpCgNA8jjzsetaM1NVqsbDn8DsecFTaCoc5DYigYuL49yv39sVMFjyyT",
  "key12": "5uPgiQoKucNK7YTzejKhWSYcPJpi9M3yFusoV4z2ZuKSTWmGjYEYpV5WkKvDeH659HNdMkHksNmWVo5ZX1uDyPcq",
  "key13": "ZAxvpDzup9jqdFeVvcNh62PKbm5K6hF54xRjpWG8YjBo2j5D3WuGMaokfcZwXzrp3wngZ3VqEdqY8DPezWxmCt1",
  "key14": "3nyZJCmMhXrkVHHvTm3jt22UFuSVQgim9MNyJijnPp1MSGPnPGGgaYJTrRoLxvMNsFXAhxW7CP79tCttKigP84ts",
  "key15": "2KSupFKXyefXbpUXWx4JXcPFoeCHVc5FqsgvZRbichyz3qt9wCphYb1jyBSPaBcv7X6AJELsHGcw9uVbFVgcZ6ET",
  "key16": "ipXYEUGRDXfnWS7Q1cRTwPVPnwBDeQt6TX3nuVWYGuNCKTqgbnsrjeFDfF1LPMSfNnZBjdt6B4S5RQmUinRYedB",
  "key17": "5xkX5usAMD6fdDT9r6ioXfvsbbPimceyCkn5v9LBpA4zWZMpYomWacGaU6XqgH1c9PfryNiS3XB8326YaCSTtFW",
  "key18": "fpZAhddC3DokMVKKHjHi4HpU3uiscr5mbyYMq7pbm7do7PEHJhh5v1j97o8mvXUJ9dCDyD79R9CqnVQGA9MxnpT",
  "key19": "3YfUCZSAngSpZqTEqMkmMK8Tfp53Wq2MAQu77BJmojR5cPwPFot2gNXAP5GDyYJusLtHDwRtta7d2yTh29zSiGUG",
  "key20": "jTFaiXq61SKi9euZyY6RZZ3qTGcCLsPrTyvBTfHyp1j9NyS78wHttFGsE9SAKuztCDhDfN6XaKDhD4ZzTwEd4xC",
  "key21": "4ZPDtGwskLwmWZbBLSVCKJJka5N9zJSYCWcBWkKsfEHdJWXTG4FBonoYrKjR9X9cenffbT1ck8cmNctr4LU1C2GG",
  "key22": "Fcftg99C18w54eL8niRxnVyRAWtyMtmCJdvUXLnP9drTk7Rt22SjXgbeJBjy55HrfxUXjA53QvucW2F4mqrneVG",
  "key23": "4yoypc3WUsrqVDR5GFVLCNzQUYponwnvmD366eF9DwUGWXzywsmto86ihn9suF7JeXxtL8z9DE2gUuAL3Hx1yHcA",
  "key24": "2RZvzRRmyJpwMbsJ2fjkUENjzS1a6W9YzRz2NYWZhoyorrPSu2Lzp7mB43Fdce93mZScqbLxmmMw7Qh55ouiMEsK",
  "key25": "4zHiTKFybjiM5eXKMnB8VfPtJ8HXwAdWjqKhamF4vEkAHU4HpiphP5hYkFZMMPYeXf9oFGHdxzfcCE86bxfVJgg3",
  "key26": "37j6XemcHjFfa5wKoLvtymrjYYiXdC9yMYipSHZzDFdX5n9cWaKNGuTqqtjFmTtEDXvASmxc3jhSizBbe1SkzLm9",
  "key27": "668VjssJCgquW9k3sEhstq8hUWuVVTsFuduVREcDJHeLXjSpvBhvkzNTTt7qCUk55Zd42pLoAFDqTknj38bvqCVQ",
  "key28": "fZudAJ4uRmo61rf5sp7uGBcLHTbCbEoFmsqz3kmhiVeAti5Wr2FDppbs3nuejoZeNBR8MWYaTJmBmDqWMcv4S62"
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
