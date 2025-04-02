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
    "HcnqanToHHMJzt1xpjEE1ZFZ9JjKerzng8CACEv3hUDLXFvJDhTuqV9LaM3H7rWsdhNo6Kn7TmPxHb2zNXbK4rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqfmzCYDFCY6PXjhSYi1vRt2Bra3jY5sYzyfRM88HWTT2fGHizvXccMm8GWvnesW2DQxFnZ4d3rDu3QsmGuAxo3",
  "key1": "4p1i21j6pmXA9Y3YbhiUuhcuqzq8mwLSda5EXPwhqnoeMXoXRA3YFdejjohb37HMnHdGprMgRmLeToMLAmpVKV83",
  "key2": "3ELg3TPoDyP9EfB5eMCexmHcumBm9tfxkp6DnjLV6hkEnwTS2eYHiraUBtEekTkX8ZLUR5u7jQXZbihQEQV9JJvY",
  "key3": "3enS4RDRrrTvsWSbaBMarzgNpdcTc3oeSFhpVXmVouEXYy3yv62KsC6rAmd8Btqabkx46DpwdgWpbXiUZ2WXy5Mx",
  "key4": "5iMRh5QGYB8Kya4ixa9B8N7pGporabx6cbRzdXorsgr2MAQbY9PsL16w4F6Hg5Hq1nypr2RkjhDBALK46NpawkeH",
  "key5": "3A4vxhz1H4kEcGio4sR72CtxJytkfan5YhvauwUtcMJbuomYFDXnvgdT4XDMn1ycrrsWfioKyHZhXncnfVibYzAT",
  "key6": "2KfC6DJZamNrS6Ex8fBEH8tKppyka7hYNHeuP8tyqTJzsoZAiPKqdB3zNREMCLJVAJTLDJ4LcbqZuJLwCewnrZTc",
  "key7": "h71ne4ZghzB54cLt5SQJRxiAtLChMNny6zMJMYMGq1UBTa64eA1ar6NMoS41p22gMcdmKhx3HNyyLtzwimu254X",
  "key8": "13fjsYngS73Z6Kxx48jpsQb21LdRZsuJXRCoo3TEWis5ZtzfkJpMHyaFo1Lr9iKUk8Wz1cZrpv8FFuZu1cfyTMX",
  "key9": "mXw4WXjUWWCmpBjWdWiJDy5FBhD7hRgSuJc5RNUXUMHuqa2HSFNs61QFpotykCDXt5qujQUF6cxy1inQeT6kmdj",
  "key10": "46bu8iEJxN3Z5Aq1kHCbMjZcUVR5ExLE9Z1shxBCfwEf7DXYNww2g8yPcYepkNks873YHyKU93MbVH38LkAEi3Hh",
  "key11": "674FaJRtLebdT3TdNXv8cuyBp7CBcvtX1ffaKttAt9z28PPSrwmbPYRBLWGGDZDrMELKkxFduwPBHgLSsT1rWTZF",
  "key12": "U4oTNzVXfL6roBCW1jcVCcM3Em1NZYzJq2oMw1TvoNtFBDDyN92DNwSD8sm2ryH9Z9oNeNvSrYkrDtNgisK7ZPy",
  "key13": "5vWfAPJgnDPUy9LQ2sy7wK8rFcmFKh5oZUQC74HA8Bd9bPDEkAfbZnvfXZ6nH5GCf1uodgXD2AuUMCWigKdBSEUV",
  "key14": "5pcir7FTJ1p2QuN1C5LaDWKntqparsV9ScGG8u2NgeNKyqAQTjpH7REgoAerDwsujF8iqG6ntEkGRTcei7uwcH1T",
  "key15": "8TULmyh76YuMNcJZ7BMKNhA2mjrFtpbJbGoTzdPJ8YLfjrmLqMsbCKrNqWzCuicfGZdnKEJxJrc9EooNsZ5Lc7g",
  "key16": "49UzHv6Da48hh8WQda1BxS3fa6TGU5EGotDGRoByj37E6G1ia5cXgTaBoRU7tQUEMZxzqwNEzshsTkegVhUt3z53",
  "key17": "3QdC1JxdrU7kBXZbeK9rb7kL7BSK6xE6jSCYAS8ZzaTBNMquietKaSk9sF3Q8uqgx9u6odF3d5WBb5YSN8KakoZQ",
  "key18": "5BHL3YdRkjLZqxjKveCSTzTQs27b7eDFTamRt4Mpoat8WGpJ1quD7XBSFSaikbmseEwhh69JJkJomtZwXpSq7oAV",
  "key19": "4ts5stjxMWfbwsSqz5uGDghKj4fVVKkSvCJzdN3USCD4wTHGyvWZ8sbeFnmqyALTd6pZxfsLYKgnxWKtR6w1Gk1v",
  "key20": "2veccKDxpzXN5MekvG8DYDA1uu3nS9yBiLhdWecuuyddP8KxPm4vCdsTYsxZUDaUU9cCci1pa6KZSP95BdGuAL21",
  "key21": "3xLb55VNexkCG7wgrfjPkrxLhkYJYDXD2rcPhpqAku7GJ1shNV9MTBRS9Xu8hHTQQ4aVzBqZVP1bAS8GWUx7eA9K",
  "key22": "3LjHfCGHA4ERhUdEexQXf6eJH1pi87Z392EmdNiaqE33bEWGDHQwp47gpMdWZruD4knG9Dsoy6WHdJ2pHsjeKNhy",
  "key23": "2Xuynb1pcnKtRQ2pEBCCznPTff4vHqTYCSCdYxCEQkTiXvWVzKsbAS9D45qJz8CHkuvxk4JBr6MHpu7yJ3oeVF4d",
  "key24": "3p39yNwxYZ41PhzKLULoL6c5M8bsTKNmeKvY4GxKyyBhnfLmWo6fozD3Lpx3o5EhqEp8G76fUo4sMZCTADxs7e1Z",
  "key25": "47NaSYZ2Ry5ZQMgDS3ojkUDqqCUt4rBeiGaFrDb5tsU4DLEZ1aevkdKggmyA1eKmHvnx7PipKBLFs6EG9rWMiYJm",
  "key26": "3zmQVdG7cg7q828U37XaAvLbBtjWsBxH9o15nMY5V46uXDn3oanpE8mVjAMNRVgofDAYHT1ho7vntoDguWT2k8mG",
  "key27": "4b3JhKpgpZcHfK2geDMyhr38EafRWmFz7deuo17kT1SQbvxQidohp8rrgn9nd4ajV97aTwe5sFApdsx82ncqKU6c",
  "key28": "59xuZVsqi5c7NBAsuABRhggJTZT8vkSd4Sqesemz2boGMQKkiiXS8muN125CbYYnX5t1AjfjtsamroatTn38n66r",
  "key29": "5FV9r52fq9izn2sRR4nJ7LhmG2dLHXBjEcfeZvtUBUfojMDaNsB7mEBr6ygCnxmgZGYJTXM792p1ikoXEDkRRh7G",
  "key30": "2Kynuu5d2A8VpMgeCxbmMWaYm2nTbMZYMrbvfGkzEECDZ2KHGzAHYEYTCeCmPxE7ho5nnhWFNTz8HpDSJFYRkkKB",
  "key31": "MaA6a3pUDgjirdXhfU5fYvZahdCasGoArzvEHR4rfCfc1f6PGR1omjQp4kSnfC61YbrwjR3q99dZgkP2BAib76k",
  "key32": "3GkYGZydMDk3ErRaN4t7B95ESc9oEs86AZ4KFHTh45GgGBnLeLG2ahi2tsUWvnWqPCdCZUSj9j4oiyJoVe839c1V",
  "key33": "5pciyr3KBuVttjvYFVRrMhVvbBYNyji4VHgG7XqsDwTvQzYxxZxiQTkHnjN1grondarYvWh5f7ZbQawsS638Y41T",
  "key34": "2uvvepE4pRJYgpUyPtiLaaZaXK3xRFw6xXBctWxcSxo2QgcmN29LDj2z5Fgcqk9U4dSVic6VgWJA69jvNncbXCc5",
  "key35": "5zaLLB1Tg2feazASk6XiTYyHARpVyGTDwVjK6X7gnxiLnrJBsraWNFZoUnXrQbtto4C78ncjMgpa7y5jfuRA81Tb",
  "key36": "3qVsdsL6asP39m8kYocKqXBPirS5rKZNGqWbjZob48qLkjQ56jCfFpvhrjMf4KxgZ3kz9mwwk9VGQToBBVidshrZ",
  "key37": "54Fkg7UfL5DP5TPU16fVXQ38S4mvz7jPu5XBuiQd7yf1ucbCbWWcx5rQZErpHuHkLBP1r2qfUbHDst72NvBykVW3",
  "key38": "3VAvWC8Z239TdvbjsGgnMHZxDiSLN8G8jJ353J6Hj124A5YchKA5CxXhuDWDHGChSf3MF1QQwBCEPJoy3B2YigYs",
  "key39": "2W6sdYd5g4deVBUmvUNec5FFcvKtJW6cJbuR9yiznARhGJq7ryJtNVW9PXSsUJkuVeLPvpWak2h896aai6wcynpM",
  "key40": "3WJ2Q8pMqwoQtKcdozZLVANPXbPeL93Nm9G5Sgp1bnSqfQhAKMCDw2EvHuaHhtBD4qKdGXQwzHZ3Wc8MeS8fERnz",
  "key41": "2tS1QNK5TFc1vX8PQfBXjM89gjHp9NJb5vYxW4WcLBpBDMPkGh37mFZd2Arbzs6mPJBEi8b2JdVtMWDvrXN7U5q",
  "key42": "ZzRYs9C66hfmx4iHbQbVWaVHP8NVkYxwMW6PrYDfRXSgo4ek7TKNbDo4e1iGGAsbstJuFvbowZCiEaLEudqAspn",
  "key43": "5PbzXyGhE5UVWt4MLttSKSvA9oYgqf5ctx3SdEdsukNE9h42mKAuoCZTrmiUfpD19D4F7XgGwh7HuTEBH7HH2vAY",
  "key44": "2otQLzVemfV3ueCUtm8zv5Y7WjVotjUGcAPvS8kVHAp6hN9pfXNK5rF8X5nV72MnAA6oYtv47HFQMTNwETGgvR34",
  "key45": "31eQEiPsd7dY8jgiqmm3dsgMcPPPEEW24YkXf2uZUFYJCfbXWrD7d2qQ5WdezrGADSCsz8yBkGW8AQbn7Aps9EpG",
  "key46": "2WcteZaRGhyCQhJGhzRkmM3o113KK4LZGpNCBN6MX1Aw1eY76LSUYt6kgEqejp2BdGB3Xvfpj9JGA7k9mmASvH7X",
  "key47": "2AXmZRdm1gat99jiH3jTcsKxmEN6vEPPjpqt5W7kp8Rx41wjSFnu2phmJuXLzvQAXzENYYqLVw2Yyu5Pux8Ge2MK"
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
