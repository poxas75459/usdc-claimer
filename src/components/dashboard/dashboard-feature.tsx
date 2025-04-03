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
    "57uEk7goCfcTVYZs6EwjLBkH7qmic3bxxx7jgnLGbfR6qtanszGvFibkfEGBhf84chTDqjr2n38Qpsvvozx96G74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xvq5J8q2AqidR5FREWkBzB7PzhxAzegcDwuEvdsp2qZPG4kUh5GBG9PEV1tA1K9hCKJXtD6T4baP4Q8mHEWmirK",
  "key1": "3PsqLfcWnLCKDqmPcyHW3ho4Bba3wmgQHPGrE1pfZpC5iSMiywF1nZYiroxaxb1btqa9NRu49TnVrCV7v9t7gQzH",
  "key2": "1Wq9VbVkQbPnkdZfzvMC2fQzGSN5wzGoLmDbssE6c734js7uUvpaT3NMMbgvpMpvxXxUJKTtssSaDtkyRWwJERy",
  "key3": "wrSgY5zQnVeWKRZrnD3h33KDV2W7aNgUwjynnigB3Zqoun97sSFnFkrS1STXg9fDoKMbPTPL9wVro629cuTk2NM",
  "key4": "bsx21mz7KD9WJnkkumv9z59LqBNEK83E1M5kRPwyf52tE3KJCfhZTWTBjEx9npPr1LbDHjUpoXk2X5XoZicXB1V",
  "key5": "5tDjbxVFJYH5ub3MqCeGHWi2cGTiiFDJ5SZx4HPD9HWPrpbRt3tFcVKe3dfJitRu6RLFDAbp57fgQiHxvgVzEDcJ",
  "key6": "52HRaq1L8pQuoJhjRn3akCbSUiFFAF2hr4N58Ukj2rRgzpxHUw88DV5KixUwkVmoFxfThPNSpQ7w8x6V9d6ezQqP",
  "key7": "4ZmLnoFy1iKXX57bY2fd6JaeZcPQ9xqC9zVVk2qSTwEq9uEJtC7REAK9KWfBuHBTmt14PcTeCqnZVyjv6x2uEFgy",
  "key8": "65cbuZow2vcgn6YwnicN3m2ssCAn9zLDY7F1CavqiPmUXYPPZcScQBAKMca7jpGWQiwqN4YopREsLQzeF16X6Y5b",
  "key9": "59hm8haEiWE9TJqbotgzdSfre993DQdWSMsCKFdGWa7TSi5qdU2u5ya8Bp4ZQxyLSWr1kpTGFAPsYXZDMrjnph9A",
  "key10": "4ttzs6Qqsv2nEUSe7jwL7WV4h9S3LB3weEywnGGNKVanxqH7LcnZy6sZFkufYgftx9RYfepepwcQVjPW5vE8mzQD",
  "key11": "APsNyAWq1P5nqtyEvXJiUUzxX3Ei2YspnmEfe6imqaAMMHmDR8v5D7xgBGaTHmmtJpA6KokxRtN1cBPtmwUsnzy",
  "key12": "4xDR9uuGyaLsu2bCsdzbGry3A7S2DdkzoEcqVqoARknvSqr5bApTRu2mPZJVNh2Lghw2JDPBYMhJ6Rn1Lm4gBcDZ",
  "key13": "5jpQd2jFeRA8fBub6F66QG8yiMRW8gYWfv714jjvhs5xRDLcftvUhRmw4WJqJbdiGVVidiYqaVppDxRhjMaDF5Ry",
  "key14": "PuepT7zCWPGwQctUSHiJH9u2qt4H4aEJqsTwjTqf3J43tJwuZ7QWz67Bs1Md64WyPSPfbnk5QFCaoTB3Zk7xiGy",
  "key15": "25KKhVKFQoGEjMHMxYPmgJv9ttgRLd32DaMuGa4s5cmdF6GwAKx87b686bxnxdEvgo7Se7YzaiGPf5i2qz6Td5Hn",
  "key16": "jmPP7vDPZgeLPvU2y9akkrz1z9joeeYvuiyoimD9M44HYAWW2HSiQA1FfWabC7PUUGDWCaRYQgbM1w3W3rPvdMj",
  "key17": "5STieiJpUqhecUjn3yyES9QPJYnFZswr8iUwFhQf4yB9pseVFHKodbDjjNarnsLSJntX5CUGkQJ9F3WSM7MFqGj2",
  "key18": "2mpXJjXUCHiB8WWc5zsLRWcycYEN5BoQYSorQt3ww84sM399iMsyQDnAB2EfFVxUnTynnuMabmhK2d5j7dEVXtmy",
  "key19": "5NBqrGk3qDDLMtkvG7owPUaBNSq9qaM7sihZ1CHk6JahCYYEvVkZGQGugPYkRKSprsjXHpi3FJPMi8t49wZcPM2A",
  "key20": "4eezsnb94TBQqoCFEbmYvQcWYTp8RGz3rL7mVtNJbdwtH6oGEFTb81Ep4PVjXo7QDoXjUtiAL2EtarcPC3tWt3At",
  "key21": "3R8wZ2gc2rZSZT1regFkJcQfAgkNQUCXSUQLyReRUDEFia3d368jDbrEps7RMYurCpwANCV8mPoJGCy4sc5weH7B",
  "key22": "4oUzSkLUmz9iCv9oTmrqG3JLq4Qv6wMrQzw1HWb3j4zToCLUcRX9w8EWTmW88idQeJBa72WdkyYxzoGP43iFHWbi",
  "key23": "2oQsPMhnLCSRathg6btViBJVStj4PxtD72BN5WN3DyDVtYua7krzCdf9Z41ck2TXTCCbubRV2aE64wYr8URfQ8XA",
  "key24": "2Sw59pxV7EKy7U2wz3zmDYJhocAe2eqmQ47L1Xi9VeaQL9r2WtcWzCSSkX7dAavhqJVGQiniQCvFZg3WW36WrT7D"
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
