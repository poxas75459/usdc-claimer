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
    "HpaN4anhMF2EgGA5NCu2sCdpzYC8vKaoYxG4TkZUfA2xjeSaMuHTmnKSy1wJ6HkQui7G9XYooto9BfZX93ZTUNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHJiw11zqz3hkQPZe4FcisCPmkGL5WW139QjZb92sKzbt77T7Ac7pJMXCLMzyPqo5M4LDNwHMwqYEG7ZuBkz1Ew",
  "key1": "2vsMbgjpw1jRaGC2Txo7LuSSKs3WHdnSSFHwBNF1zu66pCHncPEEDNhdKWrZYGPvaKb1ZQQ7DF1XgbxjKLoxYUdu",
  "key2": "3T1BPZ61uSiySkXdmkHkQLro6FX3m53s87QXAttWFWYbHcxXix35s8oqe7qpMbPvnvmt3iQkiy44VDPfuDzfqwHe",
  "key3": "5wofeUURB4HGzKhQG7GZtr5nJLpRyg1saw3EThRqaeyTpKTDKgL2p2BTHorZszBkmnb4ozM1BjRZ5A4dj2PisLmi",
  "key4": "32rZtkQ16ipN36pJoDBsPxUDiFzarBk5VqbSHfqGcwER4qxE6mtRNvHdGrGWvRT3pqPA4RfBhDG3uCTpU6cuY3oS",
  "key5": "ieerkqU6AUH3ChxmWsjM3R7oQhJVdcsTb5CRA17twNCQN1bf2Cd3tCMfs5u2KqLNBwvZRSbCPJZ5eYHd6fesTsT",
  "key6": "5vkRxJUrv6oWW1i2pVurL3zawGP2WPmRg4d7sWGMyF9qz2x7xttSHnm8Zh8VQKgmK1MkSmPL81jB1s3btE6Xki6T",
  "key7": "4DGRigDGDkD2xqMhFLtH2gNyS5RKbR6BMVdTsF3JJDfXYCS8mQpy9KY8w6hvi9UvT1ViWiC7b1kxMhGMLnuRsUgH",
  "key8": "4AFkikrszq5Lyrn8dxg2qrNnqnaT7FqBJdujSP6JMbpdVu44qwYQkL7Lijjur3jmaUURzEGrGsgpcVbXb3SB3fz5",
  "key9": "2wLtgGEgi9r9RaZ2HbvZ1NwXM3NVWj9gKryQ4WxubwmKiVbhJv6mxNjbc4u3ENfb8XVsgFW91nyY6fkFG2UQRJWz",
  "key10": "HeYRNj5ww6gJohMJ2iM9RJnjaqmEQj5rW2PmSSwsrPNp5JxDvJeRtTUX3ETrJCbgdKCjex7ZYtZyzmaFootqy6J",
  "key11": "39jjYYfC91PGnkEEYneqVAM4S9n2Q1juJJbhjidPeT5QWREaANgjj2QjabhesW12Nc7H8QcdA2cmtjAx5dxnwhAR",
  "key12": "2ZtdxU7Ru6XD4VJemMVifkA2GujD632uQVL1YNs7gG4aJAML3e22bqYYSMubqJWPuvuSMfmDsrKTLMvQV5spcMaB",
  "key13": "4qyg39X7Pn79Pj1DyBRDKu9QzkNmYcjqq3ihfTk2rBTarYPbMbvbhonQJ2GnfiMajmNU9fdf5AVeZV3xLF3oaW32",
  "key14": "47c2PBqyEAGp9zSryB6PeRrHG5RiBLYY8EeYWbSquVQU67zv9WB5eZFaDY1YUWXX8soUai5adohn1aBoK5kZnSad",
  "key15": "5RyKaGivtq4FctD1GGhh7E8H1kov8h6enKTDNgksDEek7st4yMQKdooHtdEAaLAW8vCC9NtcWKGDd2Gf5au3WrS8",
  "key16": "59TsbWv5eDVg1ztqqg7GzYhbjb2xK4z6b1srfq1Y7XEnVVLsVfpMRydqbdTRpYhyX8xbApNZj37s54dnivRS12mA",
  "key17": "5RekaBn5DahsVjFVFf9GxnUiw2Nx7UQvF4riU6UQoPaxQ5zRb87saTgPhS86igKMcMQWfbAEaiLLCHeDoNPdsw9G",
  "key18": "5gLofQ9ZpLMYkjCGYPRCfHmRN2qMdEtjhxah1TFAMGHJ5LqNatkFPhCeVWf78HhhEQWeAnKfLjVGRonEuKwYxrwK",
  "key19": "3mvULiudMfQH9Sd8M7XhAppQeGxPyxYiwLdFHgJ5X6dVnAbgT6d6wgeQiu5edaieNx322bhcSvg2awqSqCrQMnaf",
  "key20": "54eSBuTopmvbkVK9611QZXor2R6Uxdqifkgdk3yGmznTttgiMdqfx38GUvzPebs1vryfKzhtCJPiHLwbYGY2Bsah",
  "key21": "64Yn72tM44NjET8QodDVJjruVhZUGMKi1axemXAMEKNfTZ2SxTe3Xn6q7tsWoEyZYViwBz6Gzpdi8PpCjimiBSGP",
  "key22": "2DvqzbSCEvyp1sZs1KMfJq1mGaZPnsmiT12CPHRjMrKWWpTpHeMQUxBgcjLG1HcKJoyvukaDF3mkyJWmTvhLd18h",
  "key23": "e4KAnzdJJuqEHX4tEd1EpzBKnuB9LNdDY3JpYiqqAhQQz4MqF9PdhYPafgcxBDSQoCg8hpsDdR8pHGjfjWnH2EZ",
  "key24": "3zYtU1uqxUy55Qz54QMXzjxoMWghVGJAS9dFAcd26iL6jZ9EyKFQgnAiCjT5ShkraMrME8b3dsMnSAn26tdFqawj",
  "key25": "4eg2cVv9oNz8Mtm3xS46VjQiAT8Lq15QWAY7JbEZGvU8QL64NcitMkDPzwRGhZgevTFcEvAVuhheJVoGuu1HTMtk",
  "key26": "46bW2G1eYyVAZFonULL8WdBoXT7YxCkvgq4f3PScMoNKFoT2NF9JTAmsbXXbZeB78qJwY5sPGRgcYHAStrA3bzcv",
  "key27": "JWFC3wsG11BsoTti4EtQ7JNMoKKeHadkzjf8EpTDxhKHhNVwqkzLMfYhe3anrQUyj3epsRXnBfWcdHZ436ECMj7",
  "key28": "2EVckbJaGQpBwQnBkha3runRhNAm6Ur6JgxrHPvL4kefa1iEnZsHvTNigZwQ4mYtWcep6Qu97R9VTthFTW8NGNaZ",
  "key29": "Dhs3vWRyCDjDQDktQmCqxrrYYBztm6PEtPHArszz4HBUJYVNUf5eqwRo3x4qtiXx4gVZpPTUMKfVZZKKqa621V1",
  "key30": "4rBFhjUyMD8MQvP9dVLsmgkXaH7ZVzEUu1HUUGiGsAyM41dTtv8aKJ1CbuBftXydH8uHtvx1yxqooKDS5E3zJ98N",
  "key31": "2KL6a5JTbGtHfxKUfbNAYdfXDpPcqywJ1j7R8nbQCLEtJ7DqTkmdJypTA75AKMJN4NR53coW1yseqKeKZ8ReHo2U",
  "key32": "meAyzKTp4iTGkjX2UBkeYCu3M3sfQUtj1YXdirsiizc4ZHK6oRTY52gB4VtjzgEkix4hZFyaK9v55HkWCH2xheC",
  "key33": "4mFKwYXEipknTCjSffsQgQUNCNBPk3ktxDjp2x8rce4fkywiFhufyRdSDJCy93myPQStEvB5Y5NMWY9YkeBVHjv2",
  "key34": "2rzXEZ1UWd1WXHyJoSdfB83PsvwpFXbRMxhc6k1bsMhbYVKekYD5Wne7SKPCX7u1yVStjMvM79hYt7fQRHh5LRL",
  "key35": "3WBWmrvu2UwomTVtNng59Y3U9wvQTMNTxfvYLLPTJDBxQN73RsG7pmxNpa6tPvP37HG3wNk2V6uZexJxFRiaoMo6",
  "key36": "536QChy1fcTT3brMWtC91ErHqAKpX1Yf4eL9LNP3bGTae17zSeRcK4ZGYSjGp8HYSzazbkZfNhQFRT9zUSbVjdLz",
  "key37": "e7APF6Q5GvwDvdMVEFqR2NsEpAtnx4ySYSJvoy7eDcQyq4rpH1a8aPnaGBmgvK8Z5yPHE3k27ePUNviggpa2z5H",
  "key38": "4ZFUA8yprCDg6JvcGNp5gyU4Uoyy9Hyi4QgbP8Vmm67JYqcGNZY4PbRMaCRv16N7TYEpo4Cth3j9TZRbA3vecoxz",
  "key39": "2xbWvrf7hTDXTv2oFG6iunyACdJHiFZg7RXp1Y7M1Et3TimvAjfr39fTJsonjjPshFn89WhxgFWesSrZzfzBo9Pg",
  "key40": "2H9dCQXyE1mdAhLP378z2obiPi7Ztmq55C3M5p1V8gLY6VGCuk4KzBgE85v35kuyKKfWpL4Noh4KXWwNaukBH3Sb"
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
