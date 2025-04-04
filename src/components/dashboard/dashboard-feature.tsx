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
    "4rb9wTqCaT5tL2xBkTTcfAD9EAsA3VGT3ZjQXQr5CnKZEVC7cwkWGePsMRYmyma8rkfomkghvyQpXd5qDn5Cpv64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrE5qKbijQxwvZCpQL3u8aEWNgeDR5ugWeQSwVWLp993w1tNLzFYP7bmHBrEwArosJJPKkrWfZqLka25PXdnygf",
  "key1": "3rKSTexXr5h51kDD2PQQePTnmxF493VpKP7yVnsiVfBALoA8uZGhKbdqUZGkRNyjPDvUo9v6CMuGYQCubcEZ3kKx",
  "key2": "2NWtwrcieB2XoMdXZNWMLaFkYzgwhoqPC74XrEzZmVnLgAQ6barQKayW8HTQELWynmKwQJspQgGmZVUPVsCN8pUb",
  "key3": "654dSpdaPqU9Q5MbxYaDgCo9kSS93FAN35jv7NKChM8cL4upofNYWum64VfpShr9RUnBkMyb9Y2WUH7vUdouKiES",
  "key4": "5SxDPro8GER2fX18TiQTUpRATPyjEGqPEhq8vfJmuhSS2kuQ3Km3XrzUL2aqErEUerCttjZAMVpZvYGFgJpxz9nL",
  "key5": "3XVnruYxVgBsWtWbvLxbDLHXpnsgU9izt4XxZqTSEK2gJpZNsxEnfttdxaQTU1qj5oxrsNvcJauqiPHhutsnCB46",
  "key6": "13c9DmTBZ1ACF27hdyNMwA8eYbCWcgeUT54Pz8uNUEeKn2znEZmyhcrMLzdCE8XSQEt2mxUVPWsLu7Msr487o2g",
  "key7": "3zQjtycmdLDvb1yEJHgV6UopRSCpZvnCEVbfJ4F6SxKoZvcLaTiZML765hndot4JwgXXxcqVM7zhKfdsG8D5veTf",
  "key8": "4xNaadhW7nLSr6QXWHgdgAjtxtYQa8RiJv4JPXNtkk9hBnhcdbaqxTjpLVDgnpUxPtmK9CPa8mfRpUwokpz5voT1",
  "key9": "5XsyWcZHFcpYVgAX2Xc1piZav5z1s8q23XU2Dj4jDVrqUrMbWNK6MV9Xvx6ysc9hnwPJbYhM85wxDZNPS2mZ6M4P",
  "key10": "283eChzGbacC3ky7L6PUgwwk3LAGYX7SAZMvYLcyGiiaLSkAke1sZCsJHGVL42MCKUw7TYXfG23cjjbtM7qZrzeD",
  "key11": "Z2Dw24Jyi3y45aPP3aMi23y8dC53VTzZutPiDRUfcDQMa62PWEENXP7JnrGKUVZMfZn7hScJUr7XMjWM17PqVqG",
  "key12": "HGAauE9q4vTM3kzjGn63S6QyKToYpxVirc4Wn148ehST9LkzuM8SNJsP2xHSAa6j6r2zDzrmKQbaXupXQQbiifC",
  "key13": "5foqVTr433mKZ7TsHE6tjbcfjg1FDYQxwsHsSnEMEpGq1qrqPEMzjzRrN6cS5dpPJKi5WsoUDiJoHXdgG8XnHTzF",
  "key14": "5TLsGb79xTGcLcUkFs5GyT4AhbPtCKXTcChiuRtks62XsFh5x2NZLfmBf6xtHsZZFsypKzTFn4CxF4TFNbk9iHLQ",
  "key15": "3ECQEYQLQuixBztLi9QwaMXuiq9Vg8o5A9uYV9zinFX2ScfoX2yXft8WTgm75LCjS6zDHMwTkn7ueL3jTx27pibe",
  "key16": "5rUqZ3nHaQUf7xh82SF6yj2PFzHuiaVTt5X4iwsfmDBpSENpzbg1Rdwh21JzTuXDE97Yutq77yKmh5dRtYyJu5Jp",
  "key17": "X3B2WKnHoRKnRFYwPetRLECRFRwKzcrpXvy2RXdPoAFALpwgz5KHZsByn684cGSQtYEYyAqj6gBxSecXTRyxehv",
  "key18": "47aQiNJqLQve8HhvgdbDFZoj6EuzH1H1sZACf4J1UZUb7rV9sWKWAF4msixCUeikCJBJnDm7CYwomBzSJsNMexeB",
  "key19": "5eGcH49d6c6YzFebBxKxin8ejdH1ct4eJKVnik3YGqpjRFri9Ts9pAQT2c1uJunPz69VXELMHugG1dor9YR7wTrX",
  "key20": "227xNmU7BRXrRiZB9NLR8Nd3poo3R4pDGhqw8y4T727kBMdb8P51uhNnojs9Riu98FJ3yTuJdbtSSCCrFXecmeLr",
  "key21": "46RNRSSp91irgWQ8PHYoJXJ5oFEhAUPdk1YutzNNrmMKhXtZUopLW5EfbyYpTM2uNf6FkaGGp1HakvxaZQzpcGwB",
  "key22": "21wdcQhZhydJ51qjYowtg1EZyTsuhdwbQ8H8sTdrpkph57bR2Vpdb7zwPr4z19uTaz9b7tuA7ghyjXpd73bxzZxt",
  "key23": "3qx77ZvZoKehdnvfVsUGqPi53nnyC9rA952EGmqZgHkCUdKEpML7GWtcgbMZUqeSFvUW6fZ5YCdz1MkwH7C9jQ4M",
  "key24": "65w4bVkkbvQjhf6h87r8AxHhfzjShh3M2ofMr43KRnskV75uf1ftjLaJhnDH7sSE53TtzsRJokrD6bcnvNBr1Fwj",
  "key25": "Na5gKpzwf4M8m1eHVAw6JuRdBypiSND4auD2zh2zuPenpzj3xmG6byUaChKrZHquyXyCkB8EFMkaidrL4wDAeMg",
  "key26": "3oLZF952KGajNaqKXDnvLeSeGWTfWiHTye61yMDeBbwKGASdbv1qf5XBhJixtW5Zr7Rjmv9j2QTztAzjFaNAHhbg",
  "key27": "4QBU8NcoH7dTsD443XLNAws2hJQ1RJYsxveNHBzyY6b2V486kCDrDrHD15YpfJ8nGn8DHyW238LjPNjP87ykwe3E",
  "key28": "W5utNMRaM65GZErV72Gs3YiTNKvdt4Kt6UkEZYAJojeW4qhb7UC7AGHgfB7KLYUHTa5XGzWNzt3LKKFBgdVnAao",
  "key29": "asUHCF2yQw8Dz3HKCAoT7f5DkTfeq7KUkAjdtgfRSqrZDb1EELzDWWJxvQUxkzspbYetYNQBP8j43hKnqWax3Pi",
  "key30": "4BLPqrSPEUojoyKh23Bs5kmmV5CUHdbVXDxy4ANuDzJESH3QmKF3w8yFdNYsoLqKpVfXrbX4AtRiqaAZixKjrPy7",
  "key31": "5BUfxLV41iP2K7QiULSWRzy3wrPoQCPYHTuCnfhpj8Zmks3WdNJXR1bgUg1Cn8p8wETeBWVgLL1EV2S3mbk96ZER",
  "key32": "1X9nc7rcrY6TvRG9XdcTkcVCwK4e765Ex1ytAYYD5Lv4uVT8sVwyxPF3pAUr6reGAV1CYvwtCC1zsMM7WBWgkcH",
  "key33": "3Vdu3ncb6CxYjaixTyn85MUSg4bxhcUHfk9NajWN1AVjc5nGbY6XcCVxPzJVjEpakqHAH9igK2kMeepJ72oFEqdb",
  "key34": "4xMuN2R1poTNxATZRS9n7oHiD381WKDWEY4XJJrU8mpyC3qjHsrGkQRMprg1FKYxSZqRvudXXEnKNKMEmzAYBeTA",
  "key35": "4dkQ7DzQJiCKAeuEog7pC1wyBFbcoaBtC3gH13uzrpfkEfuDZ4g9nMGXv8T2z51sYC4sLmA58LZ19rrLBMf6HSnG",
  "key36": "XwRPuXd8wfDcHg38BivypcAzL2XX1ssfsbUkFZiTUyM3Z9Wfe6Nue3Pdu6ouPptYqnPrTin2PJMpqcbYx5tsYeU",
  "key37": "58PzsaKmSNeBgp7W6My6PiCpJid4NYxYqQM4uTj7Ez4uSnVFKEjJjEg4NqMnRM4J1FiYu6oe93UZUMspSza9686E"
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
