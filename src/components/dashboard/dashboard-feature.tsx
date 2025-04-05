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
    "21qEQEWqP7utQjpHayBU8negCUMsAo5geVZ7Nizda5NLcyUNG33g8ezoZ9hrSDKHRpQCthimA3mzwtMYDjgswRTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GV715kvYSLMBFuryVHiZXdfdmR7btAmWztiBboD6stajuiVcusAka2ToFTQyhepe4SDNabLjcADsKUXJoxWU8Er",
  "key1": "3uf5M6Y2zQbN98mDQTipEB3HNpLUtCEQ8osm7uX87j9ftPmR3kCDycrdYXySHjXpiiSGwLeBnPFeQxvDnssy2qN6",
  "key2": "MkJ5YSX1cT37m245x8CAafEPoakqdd3gvz5TQGku2pHnjuaskdoXgJA8CraUCQYPGEyUhqNVZhYXovNVwiSouPg",
  "key3": "5mNE2PoTGQCGAc3CqF3iyWWpZ48haVV7rH9aq2un4wJfaou3dcyGhqBktt2AXSeYdunZNjpGEe8vKXo5YRvvj6YY",
  "key4": "4aTreTDBeFSs4FG4R3FL77z2sBaWRNjqvA5a5xt1u4LCPtyqCSKAuygDGEMe9nwJ4LJT4MkThVQPjSzZGsuSdmDZ",
  "key5": "2nhzgG6HptPcwYJ4PsWaGnBq55hvbLenb1K48U92Rg4MxD8fb3xwYB95z2VZv6g6kz5y6RJRMXbQojAHjehMZVB7",
  "key6": "3JUamZf7D8BbPXosu61oq1PfMfsjsRtmMq3kGQzw7UgcGiN4CjDLnYPtJQ3GhNPpxtgpfyBT1ABaCSy8UQZo9FV1",
  "key7": "4tQygsg7aEJWLZXAi3bSJiGvqG12G3Tzrwhk3CBEba3uRUnXE8ez7NySa48QNR4c9fBBMsU3mvwoeCRmV7kbygmV",
  "key8": "4gk2CyoETubH2kmDv5xpB6YJBmozkA3M9Urbi39SgzTAhVDxDyPxWJQ7gPX4Tm9jBZQinLQqjMnnreo589vXgz4f",
  "key9": "5ybiDA23zwe6jV5Nck9zh2ZjtAGUnK4f1YGFkFBun3XWAbf5f4tzNN7yGmXVrJZELXw5vNevoXYcwU5kpAzBipqu",
  "key10": "wTTirgNDLh7KqGM74k6JpsCb7y4w1gTNS6dqGkoJRF4SE37Y4i1Curm1r1wyPSQbmUMkRGwjUgkVyuzUvcnXE3S",
  "key11": "Nx1NVHmt76nR6vUPZQHA3kEjTV7iP4Kew1Rrbc1ucVfBYyNv6j7vhvzsvUNTr4kaJK9ZKw7anvHThzsYDM1Dhiz",
  "key12": "2CzvMXdeRYrnd5KJq73UBDyFSkTCPgJCALyp7sq8U2sd34EyNdEEqazgrAM7QwW7AsRYG3dmmRFxhkNGHtQmKrqF",
  "key13": "5CCTm9CqKro6MgHREmKVxA68st5LApQpLqve7JfkEjDp97qCALRHB65KhM9iztj98QJ3kQFnqtLTHoyQQupP6Arr",
  "key14": "8uAQ1W6WS7XUjaFXFFsvWPVXbPAQu2V8tQFkqZN25kBqEXxLLgtxqzaDqqw1uFzpPxudVjcgp5VYwjgWmeud5zd",
  "key15": "38VMGbSkK7HdfrhYsCC8JZ8J581T5HjU47tYk81TqHtvP3sQyMUnjc6vjroMJyadRtj9qVNHprwXyq9NDZWVYAeB",
  "key16": "47ysb4ywuFiGyu6VH3BQJk7eHTLeACCRxL1xeBWRi5A6PwSAZFaVaijx8YG9cJM18Qcr6p1H9aGabCzFCzSkkxci",
  "key17": "3VjFb7st22Mi2V7hApQjjz8fP6dudX7TD4w2iTyayHxHB8r3CSPrSvTddCbu8XJWn1Q28iCauDByaUrHzycGmKtF",
  "key18": "5ATjfsotLULhVEMM1qHb64cNbkDHkim4DLZi8qa7Cn5aTWtCrQETPPNrqJz7NsGUUHJfu4Wn6SoTa656dimJDnuW",
  "key19": "4vh6Dnee2ELPmm3PQwjfXQHmuY8pbYrheo7ARibwLwrykzUmHf6ktFJFUCcay5823eP8f3HH1Xbpe2dFQ78Z3rEW",
  "key20": "2d1wULgbjqnHDv89xzLG5Y6poPCRQATbupXQ2QCwoGJyaUAVy5NGi2TpJRZ6GC17oF5nXsptc8vfqLNj5vK56Gmp",
  "key21": "2Vi7qEQ42iSmbp4H8vzczZT6VUC27hH3f8jtrJe1CKgwAvD3zNLPWWbRGot2BUXTYvAxySzDBBNxMcN8wegsqS6J",
  "key22": "4xXFHxcGFc3tdPnudn13jYoEUdJgAWogeyZHy3XNz41k5Dk6Nta7ZYsZSz7M2EyYPegSNW7rJJuprrpDJVoEnv3r",
  "key23": "4RB8Nph1bSne5RfDmvfacRUSwGHSKYkgVcGgp76sA6PxVbDeT7pb9zpkfdEbhDS35FSHHsXjZZ52gQrhvyQeJnQS",
  "key24": "T7tSwki8Mqif9HhL58c32mbi56CHr5PTvf9kr5jHi6LvEHfSNZc4WQFvUHfLBwWzBm4mgXtV8YXm7PoMd9hH1k4",
  "key25": "57ShCAK7vHfgy1AbacnZhdbafrsLQUveKCsSxgFWCRGHQu9Ttnv4pwnCJnEc7oHjBVwJshFMydkNW6e85mchvvRJ",
  "key26": "67CNP9aamtxfg4E28Fedk2FCAZdveE9FS16pKDKNo5wy3gKXHxEcupYteq4sZ1ctPPK9eQLRMS3NwdHjACJ88bzS",
  "key27": "3Kttzf3FrLYASZuyExfmxCLogTsk7Vkzeamu18UWTDrsvKXE4p2UdEPBjauX4igKXkZx2v7UzayGeoma2AzuwoBq",
  "key28": "4LtFHyUhPQitYh3BaJ3HxXPjTGRpXpJMYWKtnd6gJPRMaBBc9haZsk5RMJfC7HSuD2LSCqEp4hTvjDtByEMJagdS",
  "key29": "5SdJpyAkrZnjVqvyWPX5J9peBSAHBWQHtGFqSDDP7EMzxDjxf7QS1tNgTVkrKNNpPLNPbNXWMtN38xZWUTJgyUcf",
  "key30": "49YQhhR1K33yyEXFPWWj5fhfRRxcXa3SBKdEWTPyb4MAVQ913qqRbmBj66UG9jAz4yULaPsnxNnJxHfbXay9VpW5",
  "key31": "EV5Swz8aCn9MLAxN5qmFCPDhADqErUApqNVTcLZ8FvfjYY96eFFT1euYCEF9fEMCzQZpspr7r1mXKvbaJRQLE85",
  "key32": "3sau5HUqEsTiy3mVaxeQ7ZuziNk9JTEzixrJZQnM5GWHAhrvXKVGZiVVpSvH2oSKs1JtqUXpn74LaEfFUzdk5ya9",
  "key33": "4LaqNxi3V7mkHbUzwJPSC58TRCcBvdSxqZm4uDbbdMWg4kQZeEWU64N7jkMi4KafeyY2tjiSfhe48rgXaWknz2sj",
  "key34": "4geHR69jEJfHMviLzVaENPwYQ2wCgWUoGcgQBUNauiXkp8gU963HppjR3BvbmxnEkSS7uHkY9AAbnX7YC51Z3MtN"
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
