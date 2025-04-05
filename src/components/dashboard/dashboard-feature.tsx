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
    "3L36oTtjKv88iqAnVaZzJaavrGkWKZJD8E6jQsK7LHPeJfBFFVHP4zHpDYKkD3GkznNQXsDtyLzqpy94z9X6PjnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPpw9cRmrauroGVMt3Skdncgku5L3GPfM93x6frvjBWrLfThBVPsRm8gGBaMyNMLFj55fLSKaBbuiAdPKumU5Z4",
  "key1": "42xpUamWs2KeoXDo9TxG7j96mNDk1WDBSHq31iD7jWsJUvFMudt8AdKEVtWveHGfz2qmFYiDRRmt6HvBLRfM142A",
  "key2": "3rLEd6zN1Q2bybrZZkjqVip4yoUZp986tfAkiZu1ikQ2XiALB9R3ro5T7qeUuCHDCizHniq3PyTgYtMxd6zLvfg6",
  "key3": "4r5ioLAY1YbVfCNPieR2y3cXNmQsGwcN6BvJBz1PGM2fT3AkuJTCyJ1TiUMdMVS9ML25wyXFEH45jZ87YhFn4mkj",
  "key4": "3umXv2kfBsD9DfQs2doe9mfMgLPD4yBAw8i7KQqS1ddgJhnWXj5ZGSuXXYJ4gxqr1mY4ewQAKTyAWy1mMMkFhUfD",
  "key5": "3DBWQB1UWTnH34pM4AyZhDQoxAaVX8ubuFbmQ7SxAcTYQ4wX3EEK2onQ8gSV3kCWUnacmnHTX7mLNi7sACiqVr2Q",
  "key6": "3kh6xk6tFgKXyCwr8qaVfUodSnDzu6Fr4BG9zYp8QxkbjkzAPbakfJT7iqAvDBgLwz6r4DfzQoCeosiCciBRdkQu",
  "key7": "5hbSzVv5bvGGB3givnH1X8hTqytEb5hVVA3JXMGjPVud9otmS2cLZvbS7sdEbyNJRHqCq3ptskSbZMHgWXPYFwxN",
  "key8": "21vmeGtkrgJebusCcP2yKwuG3PZRHVZTAEFtMomV3xgmqzifjbZ1D8SGB6kv1CWRZRBv5x3h6jfeHUo7hvWrjmWs",
  "key9": "5xA8CyUGhYUDmvagyNEYvfrH6DhyENAM8zh1YmMuMgCmSzipJJYP8zUmujWacn37DTKMbKvucTXPT3ehax4xPSfi",
  "key10": "5qC5Ro9jW1hcoYiYg6HNkNdqmmJap297up569Frh2g7K5etEKjnPVBRRnQ9XnFCLqBteexccnLfV3DivSZAsXUGu",
  "key11": "2ocyoPZyhFZ6fZaTGghrknDoiUkYCoZ9ATyv8Frza33drpi4LDF57d6pAfDfB5vGteTdiKp4rvesQJQjHBhXtDV",
  "key12": "4jK3Eg33ai6NMPEG6eGdJmUrvH4MhdYv8huiC5Xi9GRz9jyEwhzBSneVD7GRQ84hiVQ6WoG4WCM6RhmfyXDNdGKJ",
  "key13": "288eGfS7KryxP41oeuwk97F7KxEo7p54WbgvZoey8FaumrjWEjPYbiowLHQ8WQkG9wPFkPx1S51xxyiFMgF37Yaj",
  "key14": "5RJV4SWb99f6zJjsESGHn3mQknnzP3edWoA6ZsKUXEjs6c7yz6uV8WW2ByVDVF4k5HGVDRkC2rZ5FWd2zEY4DwyT",
  "key15": "3ZRLrrdGyKpqfkHx1FrmvtWddCvMuYXsykXRb3XEakUKyJ9A5rLdoCmYvfLdUSRpoxwSpi5gJzc9yuT3hiouLUZr",
  "key16": "2cjyKyyXhpVxMur8pnzCNU59oBPujDk36MkX4GdkXiawTEenpN2Dbvuo86PHmhzuzxHDZrSUAHn6nSjdoh8KiWyc",
  "key17": "9D4PV5qFPxSZKyZTEKhVpjC4i8NAbBbKmsyNQjud1nv98iEiXWqoK5zKPt8pwLCZDtwsAXkrScJERUrknxp4pES",
  "key18": "2k6s78piw8Asd7HF6s1kRzJaUvdEqoX93pD54f4oLonDvA1VesRyLWSgAqTzpjxaCeQXRnWHyn3yx2GjcKUxdKxv",
  "key19": "GN1MQVmzbFTB929v6w1VL8EfaUE4ZuDsi7yMQedubjTskcKsMy5DfdxJW29zgJmAXQ2CF6wYN2zrQKKDHZvNBAF",
  "key20": "2zqo3mJyn1FfUURbBv2xf319KUXSjoyzgM5QkcGXo8tWtoxi9LRcC2XwViwuHc9QasdvE8Q1HJwjjLm6qYAxxXRS",
  "key21": "5Aci1QwH85t5ExGef4Jgg3ntte6v36FLnrfA874RsXsNxRyv8FWdkx73n8ka3i6RXe21BfUaifSKAreQCsyhfKcB",
  "key22": "3LYpiRXV2Fb4af9h1R6H5F5J6bD6xYBPBUrodLo7jeoM6cjEUaX4DrMFnewCnZcurU3kJag9TApVE5tNAoA3BfYB",
  "key23": "3zkUHjwmcxyjWRUx4Udt89q1qvBEwt2oUuGLCR2rLRo3M5SqygdQavDeXNy7hGymZqFSZQcHmUc76kwxymfSpyeY",
  "key24": "2cSWQ7QaDpRKAbLcU3AxEWYyKH34Nx5RgrYDUGFk5aMYfk54jVzkKABvwd7Rv1zUXpN1S3AwZMbw3eFUx3mi6uHp",
  "key25": "3LmLaHm8VkbTuzKoPdNdJJ6CMejwSnqnsbZkJbHGYAfD31SiLyFVgicUYdKCRHJ4WH2gm8xAS2EqUCXnsKAn3oNc",
  "key26": "xmYws6tS4hj8Fee4DRgHzH3b7XiwUNU8vMf83nLqemqTgs4u2nYvWqVgqREXxniZDq4ZxG6d1Nzo53ayb3j92Zi",
  "key27": "4jhRSmSyXBDFTMNxS6S68TBiVDvVWEVv6ymBAPBTWo5Jse5vT6o2WHvCaFf2Kvu38MeQmTQWDLxts6xmvtNjqxBF",
  "key28": "Wz2SKPze2tVAot6EZPJMg3D2Zu5rwy5G4F25BCMqbhYy6sz1n3pm8ZTJx5CCzFAqo76JZqpUEqKoLmR7Y2JJEyH",
  "key29": "Fj15Jmo3KmMkgYku4ab8q1mAQtEbY6S4TxH4ZkqXfbjnKEde3YQZX7okLjKfAHyZYUiVNK8dZJrycMFipH2v1pL",
  "key30": "3aGoCFLwrp6EcUn3bLToFzyGkfsZHmEeYKMKGjogBVZ6rwosE8vZfxLiCBbNctCs3kpm6hSCdnEVsFweCHyvvz5W",
  "key31": "4jewu3yLpRmQVe4B6kN5Q5xkCtTiD7sqgzwAT5CSv5X49nzbnefrKBV6yMSq7M5QFCuk1wteBQpLQexSZYbocJhq",
  "key32": "2PD687Bp2wPzJGFA3Rs3aGrbPSEd6pP9WSyV9Ec4ZALKkswZGoF3WLeyUhjPMoLKXZVtiNKrbDciUD8b1v5Bi3Es",
  "key33": "55Z6c5rYH9nTzZHRAttkwTt84WzC6yPXF3Y2FQWQDQFwtEK3Pgu2m6nHgTokiQDckbk47bY9XsyHVwHiVC6KpLS",
  "key34": "9SQNnZJH5jPSHWeVHcSqgTrpohHT8vd28L2yUig72HBbT3cpxd1VL78ZDBdVEYDyz8wkPcHe33q5KuYygayLxfG",
  "key35": "2UVhM7ie44Dhx5p49utfusMr8q1MRouHt49dxNWKH4EC3F9FuoLnC68NPGpH2r7PUBJhbT4zLjKJpnatafip3B9n",
  "key36": "4QV1DU8168RswSJCnA6rFBeZx9qaEd3TEpuPaAmEnrPPMYwwox2m8kj9bt1XyaXG3Q7XPwM7w1QrrjUaAmomTUCw",
  "key37": "93EQssuT6D538enMU8Sro2BngmSLz2PDqZopy9LSbbLtq2FU1MikPJiGL5XLAucFXhqHCjjVFenYMAk7f8Fkjs5",
  "key38": "2Y1AKu6PLtFihMWby31zyt23FmuttxxTrYDGvF6tomnz8pZbPSsXfPAP5ScRYKgp6ANPsYU5JkTWrHLa65BHPjwr",
  "key39": "4tArPLEyPdC9bNy6wEhizpdNaP4a6dZF6tCZT2QtUwWQ21XBwpbr64UK6cfEWgd2mN9VNFfuWz8PspP8ke17Ja2k",
  "key40": "2UNyyGMExmyD16cLVv9feiTTix4YZrME97b1iEVPiL5xd9fTDTXStD87SnERXAQJEsK6dogeJa3UwQpdjtXyqmhM",
  "key41": "4mhEZr7k3wi54CyNeranCSQSxHS2jwb6C82zHN94QCWBZURKs5NPnhsDnq85bhTBW4mZCe9vJzFY7U9Noqk9Htkp",
  "key42": "547928J46U8XTntmpTU8rpBEbp4QKAxiadFLEshoPC6xKGSirSkFGnagTgydThG33isYVsqwsLsdtTb7kTUHNTRV",
  "key43": "2VELeYRYxwLjp16AwqEfTRUKNwo2XS63Kp4czpDHWXzG8pfN1AUz8qtgKmL7VLHxbqYV5zpkeNmr2uwB1rGGE4Ud",
  "key44": "46dy6Z4HK5AWjZkhKquJCLiGY5Bxbwwd4zX6txZLAbXBaFj6aboJZZ4YbcVku9No5pKDoELBkSRyH3PSSDYCrYNh"
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
