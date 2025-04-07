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
    "41WVwoXu1FeNkNEtpewHenQ9gW5UwV8vR6Mez2YshS4KeYutt68oL9CtaQAFa4a6CUjorcTJr75zU1q7zFUuux3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wodYr4sUqM4F9hs8kZHd9F53ACiprG5S8P1ACs4gNr8b5KjxhU6B3He3QKDPUUwjgZzHzH62v26QAEueocJKg4S",
  "key1": "3DucxX7K6TiKupDfkfCWZq6RdLJP6pybRM1BSEwyVwidAnWBMcYCTQAAyWbe4RsrLtYHcpo2V1bRGkrgy8YQprSF",
  "key2": "2oHMmzi2EK9jtvSrcmUaanQCs6YVoX2YF6rM8UCYLE8HPR3AhjazPGmPDB2NL3xU9P9gSFJ5Jy9sevRwvTo4dssL",
  "key3": "4D5qAvYZjp9kA4W1bxwYGD4CjFBavfhio3vzFuXhoE35pSopNnzBDPQREqp6yG6TUREFtQLr9GxP5k7nQ5Q2w6wB",
  "key4": "2mcwmctxDWVytgowx5Jf5nrjGMbHTgoXXPQtU9SuaKioZ1juCiL3YcKT527QCayCAnpmjf2X9Y83ssvEMbWQA8vL",
  "key5": "2iY7KUJcphrtNJS9x6tJnJU2fJDapSt8hvkNwPjFye9wNhGnULkviToJR39UHaf96rQfjD6jexaxYXYEY15quhNt",
  "key6": "qAp1rbfwRcqsGYkKoMWUK9VAE1TZaNqMgEr19tASjj8t28vxjc1W1WpL2jSmpXpBVcoX7dH9Hv4cnwmoZ3ZVbMx",
  "key7": "KH35DDGpvpJTUk2Lt9DDRrgxw6evPeY3QmUH8fqcDccDNZt7bjkKw7kHn4jdWETnBD6cV9WHnArtuo4twavgfWH",
  "key8": "44gVk4VYDUj3WFTWD4PFBNPSVJWJoxMxXYyBmDoiLjRQnQausGvwR1Kb5zB2MZETccmatA3YTEiE3ktNn2c1XC2S",
  "key9": "3prgTpUuHnTrNTKYZfqTM3mVijZTsc79MW49w93SZP1EaZcLKWPc3B1sxuA8FvjUyT2ZWB3nh9oisLAVSSN4TxC4",
  "key10": "4yw6ay2u3xYqJ1NVWvmThTJ37PRj3Y9wnSHSjcHcfjASyq99Svav1vbNZ9NbUe4xtux4FT6fP4HJYZTT5q1hTiLT",
  "key11": "3YJuuZvpv93bY7tvjTbZE1FAiKejLKWsqF2M9i7H4EBusdLetM1gDxjHuUL8xB2mFb1bizSHZvuVkxsewMguipxJ",
  "key12": "31FsuiUndq2N9a1u5Hbvx1BhiDUfQ9eKHXzUg6KDeH8NjiTfRGkAbUbqqMvmbBDdiY2usoRTCNtf2XsFFAj6fCh9",
  "key13": "2LqraRXBu2BWf4WVgcdVxBeJdJh8Vx44BrcZjtx1d3Xmn4LbEb6a3634W3aksFhCEPFxF53ME2sF8A64QPA5kgzG",
  "key14": "H5wSpR64YQpi5BBAVY2EoqbfcSoZv6ELhvz3yygoVYLtmLL4TXdrMX9c34nQ6275G1UrutSqDVFVsMzHvKM4mrE",
  "key15": "qTanUNG4RcEaz4VCrA7QTq2z8BEDyCvFSkA7khHEiUDspqwyGhnZxwjScLpAVkF5WW2xpS5g643t4ZyFV1AuVNp",
  "key16": "3PLcMnmrf7By23gywvzQvrbu5LDQFLMF3TAfFrBUXYrveCkP2Kd7RWh8Bbjirjf8N4bTZsdA5KegSKnDhmdBdJJz",
  "key17": "5ghfkUHVj3VTFqVtXpsaspYu6rfNfhFHNWRUEZb5PiZhAy7AoGZP7kWK6aRV1CCM6ccqhSntGEQYo6FcGkzB77Xy",
  "key18": "43V7HU1sByaVDgw5ZsBXzassDVoSsc1SEp7euN7B79WHtrGUrxjWDZiHPV4i1w5Wb6fjvBZ4YFp43RyXQMiXZohZ",
  "key19": "35ZxwxP71VG3UBt6s5uMmNPfTGDorowaodgTJDfdPYNdg8hqkk1b3KW5MQCpmMjNfizLT3rNK9a9a3FjrXpyA5xC",
  "key20": "49ELNLtkLEHMC8UyBMvhSUBzWATkhjDW1fWpNCnuArp13BY7D7KXNT7bTf7CAY2LqEbwL4bm7H5LeThRqzcwgMad",
  "key21": "4SZFb5kJQ7bRYWd7abBuZjXQ9XRkBRY3Heeb1fvJwVajLgNV8MAe3A4AWZSBf23NH5GnGmiV3nyqDxX599fCJN85",
  "key22": "3sW1EhLw9npJfWfJei5LdmTS8BU47Q542iTNEKZfs7cbZgU8R4tZSYqDSog898JYw1coVqvg5mwDK7mjtfv19YbL",
  "key23": "naftmUtQd66bh25euKasv7gBzKMz86CUmxkw81RnEkEVcGuTQKM6Utm4QowXBD77uZQEBTRAiXNSobNfNrFa9TC",
  "key24": "EsYBHjfBKXfqWyPWx6K4X77BYmrJXmpS96sa8qyAjjZok6aBfw6w1H3YVHEQ9gEuvCvUvJVryZop3eGyYRVR9y2"
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
