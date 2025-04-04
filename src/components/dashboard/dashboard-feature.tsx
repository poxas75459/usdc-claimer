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
    "4mqkbbG32zw5sJMLUbRKxXBu34f9MhJMvqxtauzCggc9NCGUcV4EnogTrU84encXjQg19A1iMwuVSSj8wtD65JtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xepBYvLE7QqnbUCPnKi2PPAuU2dkWNnB8PrZ8NNMV7iGsTaL2WFweKjzEbnoRDFrWWWu2kkBjzmX7VL5oy7XZ4Z",
  "key1": "5VasaZ3nQGAmkzqVH57j6ibBMZyHWyQ4RQV3yfxACpgBTyCgnkj6wya6ZRbtfFC5YvRZih44zqzSXC8eZ9F8vN6m",
  "key2": "HWoYFsiGg5D2twQWydBtTkwZ55RJT3CoBf6DYxcaR9uqrubroSjZ3dokNY571TtpcGXiGXzK8yLfTZJYaDgVkes",
  "key3": "4HK735zVGfJavDHfC2aDKxJaPg3env8AhNz9pdMrup4kAhxcrCrctDR6QK2md375UrH4EZNCxw7o3iF7ZemjGyxg",
  "key4": "5G1H8MHVrifc5fpvKSMKiiWwBTcf1DeBfGzgk8h2VygBdNBYBJnAZxNAsu3Z9J1M1tBAiUyKwCzo7SRZGVTLTfcu",
  "key5": "2DLojfk39XMKmzH5woKxg2gYqiKYVaqjwdLrfFRGbVEFmMLpu9Cs4joDJgkZ8wFbDc5hPMyJocpmLpRu4D1cEBdA",
  "key6": "5xBjuEBYX8BgcGtZxPG72g5CW5K6r2UgiZrzCH2giYJD2Qoycd2ufx7377kWBtwzx7KszTV5EnSUz9Bs7s6PsTJZ",
  "key7": "5fRVkMHyiZzgLAPqGZHvJMewrh7hTyjkW3PyW5FVny17gd6V1vjEaxFk25HUrPpnpqz7APhCpMcGMz5enS68PAqv",
  "key8": "3q69iG7iHqtdBYZ8KxgP9roZiKb35pKKMkQo4tFhAqoWwn5M2vfKa326UQT8WW2gpstK7LdppshY4wWpacKG89Mo",
  "key9": "2rJ2eXaKYgdKCDTCXtWwKxcCSuYZH9cgKxf145y6wPn19GbqUu1njtqDPPTufqcVFY4CurzZfmNKsc5DQ5d5iVSC",
  "key10": "5tjBKvp9d4UuwkNwnWxRAGR7SnVKjrMegMF9Lh6ChvbjsFWNVvxyZVFbcpEND1qspvjmjTNhDKoq89s4uGVeaSpf",
  "key11": "59qEZ6yCubNvqeY4WiFV41yrgoy37rMHfdjXM7s6DY5KPvy5ugoimpyVVT6MNUCxuARhgXvKGPqPL9PykGexM8gY",
  "key12": "4JYPwR4m2hZS9cra8Giz68E7pcFkQVb6bKonEEkFMxHkNEsrmJVJuyeVgS35kLbF65oyptns4DTtzi4oCqwhkvNX",
  "key13": "3ZCbBgAYBFMCf1eW6QQkhZFdZ233Wkg6QTABjrqJqMvGmw711bt59YeSK5nPFUr4NHSmrmcfCFF9SUv1b6o911Nc",
  "key14": "NgWpvZAGxzGmWqeaqBGLFh7CkUEXNn9FLKs74ZLycccUEo2ypD7MYAeGYAvK4oxkZoPuRgNAfPH9pgjmFWVhrQy",
  "key15": "2X4Wqg2q5EHA8jjw9d2EaQP4owMpfb7MaoNhHgMGz3SsYBTtdQU34TYdom7KmPHRFR4kTcGzyQZtriJ3hSB5wBkv",
  "key16": "2ZW4heQNisWiSmCE9YrFJWQqEdtgSu4X7X1nRNk8Wx3tCWwKS3zjAzbewusPHM2JzBgsj4vtpLVcD7KfDwQfTWgr",
  "key17": "yxJ3qcpRyaG3USeSQe3TudLyxcCx9D8UWfLiSo5D8u4WzyroG37UrXx7NQCGHZmEDVSVSyd8KodsM9ufNMaKWQD",
  "key18": "3ceebLmS8hMCTYTnQ87egjUoVVH2D3jKzEbzuzYi9cT95rbh7x7obHrPVxhnmGyEhW1RbzDoQWHqasqZjNU4JokS",
  "key19": "4YM6rziLe5MFpUkWhT9bihQsFEviYxZbbt5bS6Y6ysiamByztEvu7tU7PmANvjSZCDN3bMDw4ZFpmfsiCKEfXNBd",
  "key20": "5BsHQQoLrFaUGScmqFh7B2bHatExedbhimmmwYph3bp3YhKhpGSwG3t6GaR7gKd2qhySF5VLeQgeKLR1iFPd2XG1",
  "key21": "2ADkwPwq4Q72uhKusYo7NUoJJEsEMViahzdApziHmpyv4tTPiwT9XuqqTeqBa19KQpArGHHrjx9r7grr1JYrcSES",
  "key22": "4kiVpxPMBDxLk3gf9u6TRSifXCDCmFrSoaxnZL4hhgSGMtJFbGAy2UKLQoungXmGAzyLEM4aoPbQSagoWmXgTMiP",
  "key23": "4eGsmZqYhW4whK2PUwNRhKKtEHHnaJMJznPEjXHoByaAskasFiGx5L2zUESwaHVvepYWC4VF5oK3cie7w95WXPLs",
  "key24": "3JfpaZVELMmMXMtfxSj2Tj3G4pzi8n5LPpYut5xEM6AEszGGnT9nCjAD9rFhgU3QWZs8mWuyZ71dixdEvRgWD1k",
  "key25": "4FVrTodMAWkymyLEexhXgtUYun24yYyJALXN9f9C7Sj1wBVgyEdq48fNbgCewH3sEtMvrdYdrXhuXEj4cToXfgFQ",
  "key26": "3uHt1nk8FeVehvk67ouNHjkZzY4A3XovT4xBE7HLy4hFBHmnuXSwCwu2JoAk8okf754sW1jYDLgMP8d5nbRXLN7P",
  "key27": "4xnpEyPaxpWZT6cC2GFtXuoi8mZsYwPc6HDyRN5a6uNCKjjVLkPbJTggeVHrcHPDF3GUF1m8sKPWjHTNmmfzBjov",
  "key28": "5Bvp3dwdEGQsa6XK2cQ9BECCwj5UbhZkZdThzJo3Ew8rcKj2CRNUArwgSzcbgsRiLvMUKMpbcEeZoJKawp41mnox",
  "key29": "b8ssASJwYhz6Lnq8r7rBMmBB4jV3JPCSk8Q3aWM3GTVqFv1GjnquvCdQ1U6UZYweJjC3ihzH4tY9aN5bTaxxkhE"
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
