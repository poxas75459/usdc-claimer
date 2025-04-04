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
    "5t41QhijVqE33RE5PwC33oSfxaG8o9RAb5q8dBaSjE586MZw5jJ5hXasCpJykeYZRjwfjZ33WttUm6UpiwTFpDgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7N3eeQYPS4aZwrFSbsaJtNTAU935yDVToy56CTknRfGdCrLZbz52qbU8o6cUE4ibZRLiW2LC8ZMRdtqJETQ6Ro",
  "key1": "5o4KEnRGeEpJXEHqxqUNqGYYEUEASWQprrXirEW67aeYv9KPEY2hUnwkRkqhxjxavY7pTb39vJNgfh1x8qiJaMCQ",
  "key2": "5FZ4Q84WyN8pUFkatZmv8Vr6nhPWU7AhnS4uumME2aSBpTCCwphFRNcVsdoQYztbViagT9mHDkR7C4WyaqRgcf9g",
  "key3": "4pmqqnJPFGAbLQzmftneHboN8g1MckRpu6mydnN5AGZT3asnkccFettA6KWcQux4aTwHq3mSMcfk3jagGoYrZPDn",
  "key4": "3poERRgHeW3xo45rbUP8jsshNPHT9qyYjy2kmdZ49aZJLLhU7CwKfFCs3gD96FrEpftebTZtiyHPYFUPG5P3P2QV",
  "key5": "2hCHhQBmm3x3Q5Mm9sXPpe7c8oBHQg87hmqiMAFbSqwzTJFEHzPjwkW6hXLDsPoBzZfwTHfgmwMeodRjhYjguBBU",
  "key6": "21vBKNPP98rKk4kjntczFD9X7JWhLR5UorFgcKeidBtmLogAHvYUqkzLssFpv4U7Ck8o9KGvsfFYQ6yrdjNv419f",
  "key7": "3eDsCouuSJvCRcdSd4UsxhL6mh8r2mffHQ6Gbh7MbExG3v8nBs78QjPvdXF9Us4BaJz9v4i5aCF8V8fCo2rtA5pq",
  "key8": "4NLwsiCLiwG2r8BqMdMCH977NmUbjC3i9tpWCbtib1EoQd6WBSSvZA62pTP2mETLVSPckDpmP3c4YogVfFL8H93V",
  "key9": "2UoqwuG48mFARW6GUsyMDbRM2pkNLjmg2n4uYu6bpVHAD5GMQ5mTE5f2bsx1mFyQ13ds5yM845UHk9iWJJBGyykq",
  "key10": "5AbkV1EKcQD7jTBPTYZa2bjnpnZNQBtQ5cmPNsAWQh4pnyaUTtttMFW94b6PvKpR1owgup4scbRicvWHHeN8LZBD",
  "key11": "3Q83W73dxJrwke8pNSqDu8Yr5m8vAK5VRvTZvtrw7c7U9CR4LSgocMWC3HqQkSCFaKUTy3EE4c9cAjrXqRphpxxp",
  "key12": "JUByueTty9K7G8JXZSWd2DfA34yyA39xxwxfDcgcTntCDzNmKDjXemy5p93Su4K6K4RkB7JDVs5b1F7UGeyi7jS",
  "key13": "63KCW7GVZM1iQdFrbUCbuF3Sb8MeLJwXUn6HsPXerc5FKgxxm7gQoXPfWaJkccS37kAz8KHw8Fx2aKP5kg5TEjxY",
  "key14": "oKQ4h3NQKjAVPXz5qdZqDXKYsnVyBFokckqEkYdPUyaGQ5NmF29TghGCpVrDpP9QJUDRWoC3evjC8mKN3ohGF6b",
  "key15": "3TsGgCaPXfsNdtNtbavWdQDTFhUeWdAhABft9uLjD8FT3kpLVyE43vBXPNc7JduuA9PBNDSqfgmCbacRWGe4KKqe",
  "key16": "NJdpZeFgKsgTuH2tBE77tbWXUNVRD5R87VYRWeepzrRZmMiyv7ZDjT7t8HUWYFubGALsJ1JxizmHb2j7KZsnykW",
  "key17": "gqxEVX1kNcnBWtDn4kBCZ8pPEfrEPF8kCr8oxNgqcGVpLyxkZziy4PxHDoGCMpo1rmnQBN7FCtQJGngGVSexyRr",
  "key18": "3BadAVjbx4h57arNLXp18woHSJkDsm3T3omN7ftgAwiDg7FNNLsd6K6j659FFAmjqxT6zZZE5L7AvGeDTJjYQ5ss",
  "key19": "5DCfDiaiBEe7Vy52UBAoVkfXD9pRTonUmtFErLjesw7G1N9HzU4PFPmCHjr1u6GZFVqKpD72pYJtiTMg9KcgNv53",
  "key20": "25oHfFu7oRutGRXET1GojLuTSWnsZm8C7J78E9r2q9SKXE3UGezai9a6ZdVVWEWsS3v175SA9e1GcypQKMaXTUcY",
  "key21": "5yrb1Y2qJ2cW7PxsBpT2PW6F9Z7DQ25GHR853mP4TWKZzZ2NeMAKaFGKT1QcQ4qWKEuHDmjpCDJujh3Wqf3HLfxZ",
  "key22": "297eod35VPPaYGHzQNthtRcecjzhKvK32zbEJGZkcH42Ssuo6ZBzP5Vc9hGVhYs9fQo6BpJPMRXD27CUmJzy9yZc",
  "key23": "2zkbEWY59tEXuatehARXnP1mNcQTNb8C77RG79UrJTAvu5BWkrvMS8mpVPMZZuU8FvDdsNFcs88UTFaH7VXEuS6m",
  "key24": "5Xn3hima9nUE4w66tPP3FDgPr3qnFkq394wWsBmH7cQny7D49Y8whEKs1BPBtyFmXsUH82gsPXnhrxAgeVT7Li8g",
  "key25": "56S1KQyHMAsfQqqZiEnTKpMFGtCnhxHCvrRDybioFpuPyVCwEGnZkNpSMPkHLdDTRDnKJBM95RNbuiVMax4iTcMW",
  "key26": "woaAhykjTJMWgmLZNbefdsZoMVgonWJY41AYHEy9zPrswPpHdNQV7AAnKdT75i83xWvQuurNaEgjqHe3gMDjZrW",
  "key27": "25ktfhdpuLP7EW3Y8CgYVykx4Czw41UoydLaKQWPn45YS36rjPg3adfW1nzdzaLYFunRpnW9gVm6VbnPaUAAj4am",
  "key28": "5yjQrqes1mz8Zp93SV4TQ2uWjKhobRdX64zNu5mv62EderhuGFb3wtjQqVTV1or8efW3MULcbrHqiG9zPjXwm7wg"
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
