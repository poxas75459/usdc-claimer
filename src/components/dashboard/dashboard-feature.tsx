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
    "t9hJEFBvpxHpWeESSN45Qr9VowH94V1KpMsZGvMcpo3JSvDcqPyKVpdEgnuX47sQWWagYXahTD5K6ZArHwhC7sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tbhg3nhhauHyndXq74VBpeAfAv49EZ2AYUrkPUbZQJN8iwApqBmH8FwUSFqnQkGQwDkZx5Nesd5eiz6vKgX75nD",
  "key1": "bwHiRsoYrRHwyEmz54q3BChaFyLpdsoD2QtrF5TXWB4ctAEtkhSKHkudXXheY22hWa7iL1v7g1DgdtCT2PF3dTU",
  "key2": "31z2DJbz1L98qo8vTYAVXiGbeazJHTpAkp99nwvTWNGZpLnEFN7LpPdPgong9sPoy7KbkMo9rkuutUUcaPSfcYp",
  "key3": "5B4KkZxV5yizHtRbqUvxWfDotNLV6Qa3QZaGkCkYwvmg6FzU2kPSce8p5EedLyigZrXzUGbApRVsBQvPwASNrLmc",
  "key4": "47s7XR2BLvbveMjX5fjdTVNJRmHMdWMjS6siGgdG14iY9Dr5tkUY5Fm5aNY8cuMy5JsYcpmeJsw5CYno35FR4CdK",
  "key5": "3H2ZTkhqzrU9HRQgEE8LmZ2ZLST92mkQ9E2ZMT3XmLZCwZEbKGk2VeeNBc29PU2GctBszZ1XeXueSaLjzPkVhQbh",
  "key6": "5ufAYCwdquYAoontJ8b4cDAJbxqnuLKnxsvEKVk3wpFb8iYrEATD23egfJRUDqLx4PBcd2bL8B1Hip1QSWfhaYaQ",
  "key7": "3pKJvzetT3sStp7K3guCE83H45GGqo5im1aQECex6yhWLE79Xwk9cxviJTicFcbaswHE5XXycWPU4tJFjFKhbtNU",
  "key8": "4jxm6XUBRYvjbjmA7zL7UgrMK2BUYAcaRSW9jeFXzFrQYZbRiDp5E1KeP7rMqkURY7qLhFGAFnbciXwE4rr1PbmX",
  "key9": "51V5VRuWEqz2Ghwv9gmQjS2iWL5X2BAdRpAZm1MZ3FNhLAnmNwVEEtGyeGTnzy2DdiuKo8A5NmJjZoHvGfpteVFm",
  "key10": "4g7DvXjcs97wLLDmwRBRJuQjsW8v5EdZ9BdEENk4PQtuHgzQFsmtfgWztv5W6SRVMtiEKKiYmzoZWPyeCg7pZpcF",
  "key11": "655ttqZoc7WVokpkeJink6M3ByhDEZnkxaSKdoT5JU12csmUS2VfLZX21cBXPBpn1bY9H78rrZ9bLyoEsQKtSWhK",
  "key12": "2pagX6REpu36ywGkLWJe7jE8pDj9dZbzLv5wx9mJendbVEGPNN1yq1rpd4jAJjKkmbB1EUZ11MWCTJfMjX7RtTgu",
  "key13": "4o8jA3aKwZ1i9BoNXqGeZNh5i8TPCGoDdW4NPKYExDyVk3JXCFerZ2HJMYG1bjZUrSA3SzYusPTcoaHi64CFjK5B",
  "key14": "zqk6g6xcUdbyqv5WffbwFRHhrnduiDBWoQ88Dy7waQSJay3vLSNVyqwYH9sRinD3ysRVRFCrixstHiEuNS4QugU",
  "key15": "67Eu2CpAjn3xBRnTo8YvvYPkt4n6ZQnKvWNbmdbmq2GsBpffs9f7auzTqi4X2moWc7AAzku7zh6oXVdXnYzhQ1Va",
  "key16": "64kEuXytMYjsgwpXcHkW4nwrhjMYpPxV7KUEXV7C1RfBjq8gecDmA3nByXdfgeQjJvHNTEneyQDXYWUqjoyNNcFR",
  "key17": "3YBt242F4egBQewQZ5jQ8YhZvDo9PGx2jLgb6tApk1SXq5FQiPCJ6ckjXkXrxCmbj15EM48xEQPSBBiqd65b44u8",
  "key18": "5aKxNQTeHQqQuprJBT4dMP5xLnyrRSsLCqpVPffvbnWPE94M7r1LTreqUA3KYWfqmYSRAkkzkd8KD5mdUu9tV9q2",
  "key19": "23GSC1SorUgFgTgzuoE4pUBD7RgeqpRLoNNaHThpcxn1jzCgPqee974JDrQBR7eH9tPTVVxe3YWj7ViiK8eAZM4Y",
  "key20": "4JERBG1NQ7fcLveMfgtPHdE1P6WFh4H687sU5bDjMSEyRx79SM1eJovYCeZZWDCXHdgEDMAXVGWtPifc5fQirvN2",
  "key21": "4v14ixTC5XUDwWnWh9QtdayobSmxk4psNYy7WnUPDabqAQyHX4fQ6ZBKH8xpcb6gFXxeKPZkuEDjb6qdsQ17qjuH",
  "key22": "2cRb3PJkSSP6H3L2NAdg66nvTirZ2o8CacSAXta8ybj26jG32Wrw5BEh4xFHuE8zpfJBxGwyAQL1c8s51Mnen8b6",
  "key23": "2CDCRmJGyPyVu9PF8iDwLwmMqaEmk6Tm1sWTit4JoXerXgLrSTqe45Wwr95a7nb3ehmpNjWknD25L3fYXiWnZYo8",
  "key24": "3skaR7hiqzMg2qiwkwoiG3DjGudThvtj4WKZwsmcgnNYzASHvTCaDqeSixM92hdmycxgx5UQX9F58qFWwHvToeiq",
  "key25": "3My5p9h286haXdyUPX7qDQbHzGfeQbiRhqYyEyjioQkxJ6vKUEBcveJEwuX88B5QmH1XyWd4fPgGNgnszccCH6qY",
  "key26": "5y6bmvbF7RjvigmQJJAoNZwv9Q23UBArHgjVvrwUdA7BkyEH1rfjt6uxRubWAuhFz9XudP5hZCUExvxhpJmcoyu5",
  "key27": "5F3HR2BEwaUBEuFk7Y3tjm1bBSR55MXTFgAMhKjixtiimPSvbg2eubn3n2qkhti9xKUYMeEZqPATi9y7HCk3NxVH",
  "key28": "jENU59ey4sGHdnCLcHq3jyhtiayVdDqVUFS9BYSfde6pv7xxGNkPwXZ6ujkt55WpRvM9EQpBDit3RfKsEJZ7TwY",
  "key29": "5zsPcJZR7HydKByiVgtYfQQeXAxHTE5ve6uD6snwKg6np8Pny1NYyFfUzFqU41LSv5AZ37tkJUnDd8CDPqY8P2GN",
  "key30": "d9Hn3BoMqA5m3FTjVztRD9gdRpVZcG1DwTZbupKPyTBnu4AWcRynPuKtL7VqFPhVDY9H8LQmwhsGkTommxUx8p7",
  "key31": "5yuozUyfQgVJbs72bDCNFfy2p9t8qmxmCTZXLPXyZH3Sudx9wXG6PsUW4GyyEoVNAoKERUhxe2mhtccKXpmKqifD",
  "key32": "22yKeRQsdjnkuUYuqzd5CHGR8VoJRxh2UexDyMznTqeMYzH3o26LD36RpZ9SEkJkX9jDayECSnWUnSJJyjEfvToc",
  "key33": "mpobTgwAZoafLm858SkdSvseQV6Ywggvg5HaZuhH1ULnqPxs1Lr7LpMstJoBrCc4Lz4DJ5SjVrPhMe9dWUCYJ2a",
  "key34": "4qfmz1kESpchUJAqLLxzuCbJGt43ni1LTPxwaPYtnR5CEzBQ37iSHNhhFWWkV1f4My3FcfGA1AgQNaLNd2gzpTXd"
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
