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
    "4xDy3mysk1AFyo8LLc6n8tkJTnNhb8hA6CgUWg3pJacYryXopRCDBPZ6Rg7kZmCak2iMdTfWPpuXVYg4SR3ZtSfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmRKv8uYrpnB8EE5wtkHCSLpEeEFZyU3Yqv3x187ds8maSZyA9CwomKy8Hf8YLCy4R47WLdVkd7VKG8VdSZmvM5",
  "key1": "TAWABP1Ms4dAWbJF8nqho6naKMaHQVmNfkFYWKhHtja3CueBGjTptPWmEDny6K2XLJHjWsBmqwArtMsTpbPL9vW",
  "key2": "21QSTZgKPEBYQyPgYXK7YwU2DsnpfofS8to5WRCRQ2CANj9ZE19uA4vky64Ab2W8Xud7zXF7H6HCFwyGgWAaUijX",
  "key3": "5nbaL5fcgofTkedoSeD5WjRANzB94uCP2K6b9NHJsbvwiPc18GspKkaTnuxxxx2kFvqQrJgASECFHzJFEkvNw7v6",
  "key4": "2x3foysLx4rrVpqpyVJg5ecN6SWRu1G23yVz92ZeMacthjHqDC1AZ1mQ6NbZeJkngaa7DrTjWqZEzefwg3bFPE6a",
  "key5": "2qZGxZmqTgn2rSQVLYKtHEwpmi3BdrQu4gGpnANaVr7NQ6yC6KSFC7CNzXmb15EALNgSV5d4fhse8mjApf9nbtAh",
  "key6": "3xbDCujAr1PGnV3nmoLoPe8yPzQedAc6MmgjF9F3jPHRJeQv5bKhvPqo4QW8m1usPaAyw6Jn65eja18W8joqsArT",
  "key7": "5vaGKEb5BcEoj7825obnWass1oaBgGFDjgqRFKkUcRSW4pz8T92k2ag8UuyktsQ6UchBNoizfyhd9Jjt48W4YRyE",
  "key8": "vP5b2BVtxhrfdUPe8NKXh4P7FpQQ8bULN2eWMUF5byeYrxuiSAJNiTbo6YGpahxs7yJxcAg1nHiNgV2sKKi4CRn",
  "key9": "MCuFA5XL8f5sSK15AbTzGtCnSeFNX3u8XwXYVRXaEVQoAbk6smNz2n7ywLqyzaDtdxwLKVsmVAxKBpdC2d8jW98",
  "key10": "4PMV2mmyaL6VKDtrXnXDX8TEocDhjCSQYUztvg7BnpnwLiY15QvSNj8mdaC7EAhs66PS5UWJmmbfhrWMobiE1zNG",
  "key11": "2DE8xxuZty3M7wE9vx4J9nrYvDfQdR1hpVcR3DyPaghEyMiKkDZgfRDhcv5Dms3SbxaLVwqErr7MCGqaFeMHZ52K",
  "key12": "2YEkmiAKxx9ft9BvRQwEgJ1Wq9hRibsQ2fWtSnKA6cEeyskhKUryUkvL9Vipf7Ko31ZDkjUi9ZmU9TkrJDd2NK6N",
  "key13": "2L4ULrQCtw1HEkR4bFQuhBuEr3x3ZMpEPHTPwuKVtcnN9v6cN1qrWVgAMmSjX1CmcGSUAdGrbD8HDQjJJFydMLBh",
  "key14": "3pn6nkrX9Pgjci6o9SmaS4fKibE65ycrYzScMeYepkCAQN1piPvGHBeh4dVvUmmqEHT9BzizmKxpuXFdCzf7YYFV",
  "key15": "4PSDGm9B7hQuCqPSwpZarJwBYECyH5FHh6pc4wDaHE37wzt9e1dkDfaVeXDovKGvC3YDGocueXroqt4PiePmBu5t",
  "key16": "2Fe8cnvWQv314PnZqpYzMwm5mjbYHrXhtoiZxs4dhJbsZZMk3TGQE17uvPk1saidyGNABL8VjUstBMyvvTa2p8rm",
  "key17": "2hwVLLZkymDDAbW1GGxFCyjNyKi9MyPJxVaPYEQwuNCDUzjMdem5ATyxwNDrVvtw7bUvznuZTydiXqTiMLBRnRux",
  "key18": "5PZHyiQ7f16YRdn26Z8sGUTNFvMY7z3BMCdeV2GTsQ54oFQpGdys8s2nmPA1RENm9fLAf1CnFrojgpxjS7RU7u6B",
  "key19": "5o9CGREBp1fsV5MtF7LtfG2jLoZtav9E1mR14APyrgDnBxHYDLdNcUUZ8LRyP7nvXjpSN96PuAARok55SrgPUzRE",
  "key20": "5AKhwP1AA92NKxq4gpgY9ugDPa1DrFN2xqyPppypT8aRL9j1w8HXgQXPSvv2QR2kuJqxKyP3de86h13yT5HPBeFM",
  "key21": "5W537HphzzC76c6z5u2zMeqBawMTqXKycY47EJjgNYRAADh5GFFTqZvojfJT1P6FiR8QW8oYrEpaJjJJNusMXnZX",
  "key22": "4mp69s1jwXRyGS2DCNSFGc9R9G8HsTRRGV8yCmYbjXRB43AzgP8BtQmn5nykrsLbaRR1hchKpHMXhVCKogrb4mEc",
  "key23": "5TxiUfHMpcJiFrJ9DfoUZfNfDYRdezpYEG4xkMyveUzU1687yWNxGR1Y9wZnGzQsYzNLDJoJgRmxfiRP676orKQQ",
  "key24": "qr87jUhDwG1fzVbnhASkHQCLdTjeoZ2NfeYNgtZWAF8UqT46GGamxfuU2nUVagxeTheQLY4MoHpM7wX25YaK3rv",
  "key25": "4fKS2phrrR6FmM2URRrUA2TqJfQqUTdbdaPbyVcspqWbcam7mCecMR9sfoFfozP7ALr6CNNfyoAtoy2mZiyRWFTW",
  "key26": "QDazEkLybeAZG2ZGWJh6pQQMXta6L7kZCDp6bS7GaPhQCbR4h4RqBoq42xpzo3KVHmPqA4Aq8gPtPXMeDNJSoR7",
  "key27": "5Mk82tsqX4BwUETiF2pkUJV3PRbiu5ATtPVW8x2Ec2kzj7HPgac3wtPNDFjnmvBsdMajX5D71wBC1q3L1VX3Aaia",
  "key28": "3ErXmR5fLziRNQso9aZy9Y9ukUUtmvSZDD2FhsCDuioHBpFwYi9yUNpRPvTVXQ6dg6RAcVVmp9rpNcrLgWMYoBPa",
  "key29": "5jzHXMtGAR9NvKPeHakE6ewtt2MeWkQuaVDtrcyzT6KCndKfbi6c8Xd6Dak9mVgefVrFBoGbK9PyyoF21UaFDQNW",
  "key30": "5YAe2GZj2ZDUD2CxhAsQKzicJSMcQC212Sd9DkpRmTZ7VBmWKQ76VCGUQ769WWdwq1uxk658Q68KSHK9hBP1oQPC",
  "key31": "5WcDiMoLP1UyapKCippL6gM7cAdcc4ZDRHCVZFsHHnQg21jayciUfFk6M8KNHiCCWZyNVyR3rQSeJYE8a4pEyDZb",
  "key32": "5kB18wBa5KMvBZDUXERjUkgTv52obGkaxFYFkfAbvqbDrcRdoXVt4sutnwfus4w4sUuRqok32cHSx3Yp9ixEd6Sd",
  "key33": "612ZXiHd8Vqxx796jCznV8tiG77boQwZJkyWPideiPLjJ5Qozyq6Y7ErxHDDXSfYb56m5TeN9ye31ztTtjhBDFMv"
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
