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
    "3zbdq9v647cudpbXveoNzd5cUky7TMDnNqaKgFpk5gsNccm1jspt6dSNvyaYYs1LTPxSEzxy66pBVvwZJsNv3xTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdYfNKMdqC59WREp3LMGiB3V1Zvk9giQty1d3aqs4YNiW6JkvfDfFFCXUJox4njYxya5A1Eg6wxmVFb5wL9ZMad",
  "key1": "31jfSj31rToZyeggd1j3q8hkyQSu9tpVXb8rf2Qu9gtqAmaR39mZiZsdLCKYmGM4BC19xhW9UWGgqYPByTwsiaeL",
  "key2": "4ewvrMB5dzm1KzpvuU5fXtQngRM7AFbNWrqTJdbcWdTMWmgRuizeNCrWQ7vSo128HwcKQTUUgWrZDRcPoNRu4D9f",
  "key3": "3dmKmHp1Wa5gVWRPDKVva4eMn31Cpx4pQ6iPtEWaoErKhRZQhtxHt8tafMAhSdfWvjVgzSmzQBcCXTAue3tDKX1a",
  "key4": "5W1xDiR3TtpFSV7VhkdCBRgZF1AWwTQ2Z14CJCWFra4CF4NnVPruewF6vSEBpaHKiGmu78Eut6SrvbnmuRsg5pJM",
  "key5": "21SSyYHuHRs3NY2tqdUwZQijX1iEbXuytdTPUaM8umz6r2cqNiFNfWypHouUQFsciS7LxdedQW8eG8vxuKfjaXwd",
  "key6": "5A3qzWUjZXrZDMBgsZJc9AVvWxnhzUENk31DCgEP4edZFc7Lb625nJD8zuqsYuWA8j3jze9con3mEB1Coo3BbBTX",
  "key7": "5erCV2fxyyK6NBBpK1nvP6UXunMdQW2idzhpDdK4tFizgViMLc6upw41nzRdXEtB2zRKnr32RYSasEHZkgkZ78Pg",
  "key8": "MqVXbt7MPC1oRS4vkEaEgc4k1gVFF9d7qdYgBqfqaAZCaoSPHHKDZrkHdFera5SDce5cKA9gJq7oTkCvSYN96eE",
  "key9": "4A5gbHGC9rSbj9gPPWSAxdRF3WmRJ3drx8AY6BS8EZ5H5d6hVqqvVKcwL6j4RatZBdTNA5rZ7TJXPi2WK7B41J5",
  "key10": "fzhsavkGfGFAT8GchvQGLwVaqWi6U5ZN83NrjmPBc1yYYLMA5e77LVR72R5d5SKrkPSm89SJTjg9yzEjFBvv3dH",
  "key11": "4sa45mU5AUeMADbFBKRWB7Zey4d2JQVNHDPc7W9oqX4QXLAuyhmefJLBuRy9UMiVd9dv15CfMavHSm92t9MK7vhY",
  "key12": "3MQDVZwKwvvSoNwUCiLRCZ8UoZcrGsron5wdsh4jdPtAz1BwZHeQ6a1HwssqZrxoeZnVUwLum6JXjN916XNkZB83",
  "key13": "3xyK6Hu8m7MsCSVdBYTaduNtxTXL2ELid7muDhraLjYWptyJFtGpSNr1SR8kCmanZNoAAAsQyoaYHT6fYF43A8i6",
  "key14": "4n9SH5XLgZTer83826aKbrUgK6mtCLKgAbEWrRGE94RjxdSF3s6dqaGZswMDaraW1ZLpy9TrcvPSCZsyP8uHxzm5",
  "key15": "WdNYFcX9xcnHoLcZNCmME6m9R1NepUat2McReXzwRkevfF2vZFQW4xfa72fmUyap9qhruoAeXwPmqzTzmFQfWAU",
  "key16": "H6EvQK28oRQkQPMgUk1RBkNNzPjsnWpG927P4mxUn9dXqBUr5xZ7j1w8MDcjcfHaxrCeSD8jnxvysLRyf2NSjfg",
  "key17": "3HsfgLW78aEmn5zyb11bNhT2e22jn7WLRjZC3xBE5wHk1jyeuz1MQmAhPEK2MtZ6h4rHyVMUGk5Bk7WGYyy2zymW",
  "key18": "4kUNHzmK8GHxcgEvZ15WTmjfPxm6SKLfv5cwvPNRp7nPBp52GzQEYe3oGGGTS1a7ms833dFBLsRPjk42QHmH212N",
  "key19": "582wJDohqzeCuWwAPJrCntZdip85HjEwLbHGXbfUznYaHARJ7cSbQt7suofCHf7KqrnR5BYHBSkdsu31etbahbsh",
  "key20": "31j4KUyUuWHRvMzohuxANFotQHLFqLqzzFQLHPBNZWjvgvNHf9tn1SqqyBdR2qAyZbo1jnD1W9iaL7WC8nPjsUn5",
  "key21": "5khnJNXpdpxadhMK6Fw8PJYbB64kzQbhzzgnGykxF43nGsUkpZtWX9x777inFcBNRBsSLmsth5yYzbgR2e7oRuzG",
  "key22": "3WkBwNDVg5e2AXZJK2GogxJpmLv7QHzAhWKeBCYYy4jkhQtApHUF7YPLZHBEzXpfw9uUpwgh3kmmtJvcKVtGxeUc",
  "key23": "2QbDN7iywj5jwSUZ2e1pBtQxpELJtssrFJRoCKvTwfNXrjhtP8MERm6tnDTphEzUNF1ks9DxVGx9SGuu2xysW6wZ",
  "key24": "5NPvygMpWWCk6LBTDEs8vcQDHJ2nqUibJao5PJ9J3Kms79fKZGZtYYHnWAQL9BUHjdRGMkSUjtedhaYKzYpW2dEe",
  "key25": "36vGVTFrbfjX98Zy5kYMTmxm2ddW5XjeFCCaWZi1KRv2h2nURF1S8AvNAnXqnkwLuy4AUjpSEhkGJTynSkPQvgTf",
  "key26": "3obTo6vXc42dBFTYVsjQFgCyNwzCM3LDydns4w81UiAhVfGTnKpS1wyrVPApzJTQMmHmyKP1zWzdfRDxkpnkSHXk",
  "key27": "5d1PLZ8WakZjUsDDMLd8g2jwKcp1sxdPzeraVcLX5X8s7bW5KM1B5zHHe7YPjcYUeYpV3xm6Fau4KfduKDSaGoze",
  "key28": "3F5d9YQANEUQzbFLF6ZTRT5HVsmEqygK8Esa9tUEVVj2VJ6qfrTn7jLQspJyCATbZ2xJTiZHd4CE4SsLTWqtpxVo",
  "key29": "2wtuvC4uDJGMPTGkc7cnV7JGL6fqZzdfn8dqPhFYEiCM1YkksBxBjogxsnUquKLKZNvfGq659Ns8xyR5pFE4q6qj",
  "key30": "57KC7JAdSbUbu2Hc4KjsL29HrH9ZDudu9c7HuzazLn8DAqVUAejBThKSE6hykCAEhYkesUzGJmV5ecrYw3zeYzvJ",
  "key31": "a8WWkSryp9WA15nqu9pDXhzGkQtmU2bas1vmK2Ff8nqqYY4asrJrLJq6ZhokX8fJDrbjLkbWUGYUuSRpFNs9SPw",
  "key32": "EHCq3bFRMz1pkLJGyQ6CMWQtU5MBW3EPnBtRe4xTkhL7BDUJpg7eVp9bzcKUV2CS6z4zd15JEb1XsebgyANdejg",
  "key33": "Vh4dtEGY7TJLqxPJKFFgbAznSsPSJHn8zZGqLavZtQMSJvYmxu6nergema2TTWtfWYiVf86zWUvymHZvxHWLkEk",
  "key34": "5xfstC6atcWzBHKsL7AAoqHx9gKpWPn1Ym6Lk1x77Nfv2SD2SJwwkev7DJQwDhpQZ2khvp6sZsopdcswgxbveLJL",
  "key35": "26LK1ATzjU1QmEwiVbYJ7Fmau7N9BHr8ByjWmcMtm82YRmTHXcquwaZpkDkcginWNUSLU7EvjRVLWYvf6rBohYWg",
  "key36": "5iEqQRzLo9DMJ7Ns5Lrt7mYdCqWzLE1L5UARr8dGgpP7ZKzCsH5yiRBDGYBBU7Cucr3TFwenVijFbUoeXoEsjJZr",
  "key37": "31PtCFTZ8rPT1wRsULP6TJw9CVrVrnecSDPxRSa6YSjmdUxVBqeP9LYApmkCzyz7iedLxwPknP3EBE75AYwngWMU",
  "key38": "2rXkhtCwWJ4Chjp8Qm6nEkmCBbMX6inMHypSfFNMfxP7An8CHgmA6RwvgbxZ1niUNXSsr1YgWrW6gd3tohoKJwQK",
  "key39": "5CDuycYKy3E5afxytVwM5zD8QZZJRZTcqkPyEWSKSmCURF9KtYpNT5ktyJr2m7ycyaVjWey52C86H9eiswxaXaWY",
  "key40": "3hCFZ63J4vfMPGt4HU8muGwVwT1MHkfiTZXTLVV7uPRG7T3XE3cUoMrig8yo6g5RWofqm6LBnxx3QZUodgmLcX1H",
  "key41": "3HE8MZQFyxKC3C8W9GSPjokNujdjsEcFoEDRLULmuN52GtJvcMQgef4jJLgmLH6Vn6VsQZbtaiQhPNcY7Qp4m9f2",
  "key42": "5K4TR1iSRBXmRdriUci2shdTEGSc5xHWmdyyETDFtWvbqAEsJcro2RNovpGho2TqQ2LqGAyMF9P2dX8MSuyKpgLT",
  "key43": "NmmBdkQSijRyEuFX5D3XoQZrWxLfoDtZk8yjuwcZMYoKaWWWAadDZLvH2bqS1qES1SNj5CKfdj6WsEEKVsxPXHU",
  "key44": "yHZ29hfSPx3L2PZGkXCBQYiKqyFVArN4Z5JguRgz5eYvP2roBZgC2BPDc9Fp4471jo8464dpKh1C4Fbtp7usWuY",
  "key45": "3DstExz2Aa1tVqURYmA2s1LkPoPEtgQgfoJAzWPuSmb3n7JXZo3gPbh1Ny3pEBXh7j7r3dUtjheAuVcMxbh9PNL1",
  "key46": "5qfNDxUg63UCznH2qxB2aKc5w5QrcUdYDze3HjUDC3ETw6uFWmSLQBodMLmkwv8iF48rbCcJWxPjv6gnankPy9XH",
  "key47": "38yiy4KmgSQsmeDZH1ZCAQzveXWuDYmDzxhKYRLWJT31mYKTtVHPxLe194SPo4tyzP6G9KBz8LxFEdWqwpnB7LnQ",
  "key48": "434Psr6CXMDJvjF5YT8kwmib83WUqxGufitt5SLuN14B1EAzWyuba3y1vLWZvRWcFpU1zeFVhRhBPeHyXvd7k6xN"
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
