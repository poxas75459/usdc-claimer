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
    "2A5MBwjhtjhLtwEW8JFiKGsEParKVceARoYrCSpwZek6zRrV7z5DwdSELde2nq4TEFXJCGWmCWzswvEsYA3kwix2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsD5PMecGXd4Mx2Gt26THEBewFWxpcetXaVQ5mF5kNwteC44gg7MQN4cuSB182avZxuq43c5zRqzi1Es9RthXFu",
  "key1": "5b1Q1hD1mhUR6k4tpnLa2pddNrjZAWCFXKkqGAfyjeaBRmxJef1DckvpkLropWUDJPCywY2JTeTY5gmwpzNt3Daj",
  "key2": "5ejsJYwLxtN55p9zbbiik9537gHwuYrL6QoQjQcAUT8CVaQNYKG2SC55BXLgYbDFaW8TDw8ZotVvHtFsCXZZgWoc",
  "key3": "2EZDVfZtUgWSJFj5tZmiQN3eEqQkt2d6FZAJKLaP1uZoUxJLXGUnpdckPpPLV7czVZB4MUfWxpMEgcMPfcGrjK6D",
  "key4": "DxfbA351zL2Er1y6FUR9xAYYGpi57hThogBauH8S6KGgqT6q2mExYtXHUFo9efrXoFDhrggsUGnPJRf2srEua2s",
  "key5": "UtjpvZ7waXA3SSjEXnt4mJ43DaTLHpk75UhxyXZY4kSo1gAzUKjp5ySPrGwYjizE649JH9oGPazRNQZyndZSTKC",
  "key6": "42g763PZDyLviP1aB3gsPSRJRi5jvM49sW23DuT8AK98ZLzKQ9CZWMK5PFMvEYLkZfm3zN9Lu9rTSMCsynkbC35f",
  "key7": "5WWb7utg8G1aYu4qxuGtUozbMgBxuPLEgyYoenZvqCWcWFXXNURg2hFBUNkX1rgnyrU7CdsD7r9fYay1h5i3Txnt",
  "key8": "23HYceCURkuCPxbGEZnxZAzxXkkxjfqvG4zYJuqjJXNjGvZPHadTFMAv9NNpAzQZTv8dB8xp6UrTdY6atz155zN8",
  "key9": "3QajMVruvJMxgD1Cw7xCrDS5pxPAS8QLSdV5i7Zg9yEKWV4mmL1GSLHE2VDqshfgnyvpZLkPAm8MLjY4cNdU6K5s",
  "key10": "3RR5Lk2rP8Gmw7ywH5xbGAkEYEK19AfKeLeouNUd8tv8MFvQacRbks2R2Wds4A8M58HRUG1BuJrwkwABKEfHSfuz",
  "key11": "2JqScDshGfeogN1cwAFWbjYZc9MGUbyzmUcgbCRtoRRgrcETZuFgLuccRNDcbKZ8R7HH48mngVLYFY8i173CaVpV",
  "key12": "3uuQrJP8RVjs3vwTzi3mLUsELSppCrYTHGurfvig3VPqJ4g2zoT4PiiC9adqfakkBp9NHaKmsYaqcdXYw5tnwaoa",
  "key13": "3tgqWCTJXDsbjnG7a2jZAnjG2HK53RpMMdvWwzKuPBbfWS43H9fh34JmCdHeGkFEqpeN3SS2CDg2RAWxQb4tFkN5",
  "key14": "4aCLr8eSgXtiZw7QaHdxbCnwjNpEhbY8Cte6773q1nRXuf3mFacLX2hjMo5bN8Wpk7ArhMWAhGHnk4YHYBcG16sp",
  "key15": "7X1byw7Ci3mJuYuNfDecTNzchZBHwkXxuPBmJkkFgL1ZfR9HMuKMcFTZNSiyUWY3kzLEsSZoco81t5L51A3AxRj",
  "key16": "2crAQzNwNCeZGMveXbWpSQv4Y8XmCSFSTq4CiRJJFdKkdicvzZAAbXdAQTm4A3oyR5Z9CLh74PHwsfJtXpkWS2fX",
  "key17": "3BMdCd3ETia6VnbqspcVkcRxcb72UNV1qwqUzwgCKwbn9H5y5SoKKLY3tzTL7dkRNVMH9ZgRiSTvywfj18vTrWUg",
  "key18": "2Krisih5E3i5xvKArw4pGzW2PmaLRMDZBzhnF7YBq8oFzr1HSCM8udkP31g3eo11dDiXQXfw2AqfowajDgHZdKLa",
  "key19": "29RJWinKHwsYgwidj5NcsnWgM3e6oGosK6Xr3mgaHwdmr3miHgyAJgjGa5BUpUyuD7yLKV8edJTcWkH1tJNQyt7f",
  "key20": "2v7WWeFH3W3pRFSbKYRkuJNU7G4YXyw3ciCAgMWjekQKEZpgT3my8Ap2n5GGoYpKJy1THpJ8H9g27UwpjJQdhhpk",
  "key21": "2FM4epFavk6DrRPeNogJqWQ1qV2X7sYcEqTeR4VQRB77BUoirQbSWPnwmogjEFKKQgVjBeSuyrRrAZajRp1hmadC",
  "key22": "43MgubQfGs1Fa2H6sU8SiHzwaPgfwz6YHxKKSgGf5DqdWjxGeTxtkdam6Dsx7rCFiv6wWctWk819w1mVkes2kojX",
  "key23": "2Z7yAggmmGQK6xppCXHHc2psnv2tcRQYwy1c5cJ5yEibBAwdRktmc8xKYnBDMk3zpnqjLjJeF8qbFtFGnePqgp6f",
  "key24": "2khtXfK8wn6vD2iH6vby762qXrPsV9rd2cQ3mXffpPcVGsES2ZUThUbtWAZtMrkVJgLRZpzFNFbaAyAAhvAqRrfk",
  "key25": "4TAqx8EjcwiUzpzomGrZXn6S17HaKX2cAroRw8WjLqBzzBZwmw3ibGU6tPgTG2eWR58mCNPmMpNUaVinBmfhPbfo",
  "key26": "55y84d2CPvLrc8AtQyVmApEnkNPcRmyq7Y2pGjZws35LNwytVNstD19BziydCzJ7bFLLbecEswkVGEoQBeSXtAm",
  "key27": "2teeWc75hsNYX1jXAYamkeLdRXpbMeSfHZSbcqiC1j5TG9B8bjL6kYiQgmQr6mMgp1GYrr6EewrXVccCir7A62nE"
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
