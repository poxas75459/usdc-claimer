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
    "2T6saw3Cz68Fvsso26GRKgCnEuzELPJeDz3cisTWFCghep4WYHn8cuQY84Z1Ya5mK91t6dKcXiJkAujtccpoFQPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ldr2mdvDV8krraxYuWsiqFcQvradDbH1grsEHiGZnbiex5BQeNgFS3q1qmYL8sgcEus2NpwdVHD9kPxTARQjkE5",
  "key1": "5M3NM4dXtJddVx1tsn3o7oxVEH3GaY3vnxFKJR7kXjG9uE9G77m9gshW51p8kKoThgrrDFt48w7XZc6AR4PQgdKT",
  "key2": "pyEmTPmta6qisZiDYfpfQT8Aq4nnQ3z1vz6XV3GS2C2GJd8ATXMxXwz79tbTS592drxS6bbpB77ayAvDAmuZabP",
  "key3": "3WgnfVB4kxLVvzkoAjM8ejqvfXCHEEbQwmXccfVwAAvsm3Z3MWQoGBMP1R1msz3TvKJ8wKruvESTTTnnezKt3DSQ",
  "key4": "onDQu4jUkgFGUCfSFfcUEmsCY2y2M4SCYAS5V1BKo2RQanFnommZfCzBzRsKC5KWykyCSLbBxQy4qjs15xWE8Qd",
  "key5": "5BeAZcaBtsCAFeYKXnG1ZkJXoiHk5qcswohefZtAtArt2jeexgfczZhYGX79sQVsQ1vpyBZ9y1dXg8v8NjX2Liv2",
  "key6": "A1ohKepRkRZF5HPEndfKKR1AZN5AZDg5bmMhuP1suFwcFvKxvmgoY2wD3FwmwVY5AUKVhdNKYBBs6LFMghxb4x9",
  "key7": "4dFNqTa7Ukc9aiPrmPmhFWUJumojGKHcawv2vUFCurYSCcFMj3cLoJrr4f8Zg2uNgHi4vmA4MpjJWZaAUMMuK6xm",
  "key8": "3Fw9n3PJWbY42UFacvmkikWeGtKum7EXFfd5xHAMaRQXagz5oPhiq5EqnfxwYMgpsqhCaU65ZxHB2kCPydseAY4y",
  "key9": "iNrUbHWvLii8jfwr6RiZf1QVtSEjvvFrrWifLQAhaQqFjArfsF2fExWYjQ6USp59x7WSViEFjCeAoHLQEatpEED",
  "key10": "vfEzpHicsXm4nWBgrURhJjg3um9sX7rLbf2VcvdQp4s9mrGWSqM4EpJi3Pf9eXbEPnURsVfm3tcA7CZStPsfA5i",
  "key11": "64kMs6jovEASE8VN7bGawkQy22RRkFtbStHrVKdBeiQDs8ELSuvoKXyZa2ToqNFceGhGqWnWUwfX1L1uzVk9Y4Mc",
  "key12": "2jwgjZ7Z6Rrz9vi63BJkMo6Zav2NP4GLryH3MWRKZ8tnVexURRscFWKvqCieMeYg6hBNCJZfEmCvACsyn9CGLNxg",
  "key13": "5wcAiw8hB5qpxFrotDeBfD5oVSppoGSyfZsiPHA9tYgRBJgetEha35jF4gY8yryv3h4L8dYq3vWkkTdqRzkFPdD9",
  "key14": "vwChAVDez8ifbvDjizf5z1S7q8SNWbNdezqXTQ9gqvRw4ZvYJ69SEoCKw8jypXqotS5fV8WyBGscKr6nvzc4Frj",
  "key15": "KafzPXkrQbb5cfMncBxrGW37hTipEFcLm18TBqPrX5VrVHcbhVTrJfQ3NqoLKeBqtVJNbwM9kyum1sgzuBsXopo",
  "key16": "355aNW3emyCodG1nmgs9NWBJNji6PEmm7ToJGsmz2N9RPna9mjow6sHhnKWy9KWtFdegTnQbfLFq3wpV2RHZVLX8",
  "key17": "4sKCje5ugsEiHdUpG4jFzHPXonZsaBhvxM8fHYgwGi7kFsEreX74CD7oUy9x3iDegMAc64PD7B9Aw6wsY5W4JhM8",
  "key18": "2w6Bh8PYX62dZRk3WYoPGFMpKv4wqRqdtBHH87ZjmnbaavGRsu7iAr7KFGYAoaMqX9BYQCkRH3Up8Ueg8ogdYDni",
  "key19": "m6Bs73JXYSRVeAaCAw343okjHRqawbPGjHx3FGvybsrkChixgpKZFPc5kRZ1vU9ykrHVsf15BzChBBiTWmLyWtR",
  "key20": "25JcHGJMnYV8h4aDxeDKTuh7Z6RAWyMgqiuPqV5aKcSPt2vKQx5QWk4GzDMkJ81G13DdJZawCpQ74GgKEJ7oMmRU",
  "key21": "57EPMv4ukPMdBYHq8R5iTrJpshDSmpVTPJdBKVMYVptbHWgnMX8nUm31XcwvFwi6eNZ9D5Uw9avVRujHCVVnHXJY",
  "key22": "4LRc2kSiHF4nXJL3c8wpCmiDaTMc2MuUeks3gSaDf5FP7nsq4Cdhzvqpmdd31ybr4azAfhFxewUSFvBFgzMtt7Lw",
  "key23": "2tbEVGTLiHJWcoZxx9emsoWumt6X4Lb8CFULM5o7s39Tbte3i3Pz3J5cyjfMdFopKfDE5DFHCnhJWGtmkiZYbkK2",
  "key24": "3HFxtFCF7m4C1hqHdCVXeWU2RyUJM8BydYQKy2yxKCJqJSFVsNyzv5QWaHmHbP3iSkks3TdoQX4jgB44TYDrneMS",
  "key25": "XCWHPhKAx6T54xhnSF9VyKfF1XTAKJqYnd3WUgDWgDypGMbkRuVDSiWwBhrANiTNyCHdZxer3ktUykUdmzzmzJy",
  "key26": "5uLfUrss9Mae5aRzAyP6yGrnbtQunBtn9A4PpchMepJauXyvwhSpXfMenNX9kpt9QA3P1AEWpRwu6LZoGcprMQzR",
  "key27": "3MhcPa7awA33LKwgwSQw56Hre9nvatFxoKhdbCXFTkhRqgTaJmJvrmAPf4RChUzCszXTvub8uAGZSv4k6RrXxCSS",
  "key28": "89BHdWHTPTpdufKEnuN8to7mkWu4ePQ47F7YBGXEbH9NmHRc4GZ9KXMdZtmPz2nYn2JfejwEPgcosnGVFbaffoN",
  "key29": "2wE7vEntGoC7MNSf22P5Z2yn6sBPtfefp1UwzM6fq857UcG1yKvrrkde1KJk84yi3y9amUjmz45c98HMdYe9h2gz",
  "key30": "23p7no8Pw1Nfpi3ftuYrLxacXPy3ioXqF7nKRjNWZzUT4daQcza13SfBqDstHD49fp8cHc7t85T5w9AyRgpXDGF9",
  "key31": "4bRiD6npoLeqKebSbsXUmebC8vpiyqPEqWFQXgSiSFGArwbPo2VsJtgd3eFjqNSjFgXpXGPhWBf3jGqHkgG5eEhg",
  "key32": "48gj638UrS8yXJpGMnbGGcYQCraGZ3YeuW8tA9YftLgNpzsYoteWtuDyUq3AM8VjKJhurg4mtwzYVHknYpu8rKy8",
  "key33": "31fC8eJqgMBAQwQBJikdsRiDSjzDvC7xLgDjhBATLXX9W6AnKjiLqA77TjGUPM2Dg7AR9AP8Xg1xbmv9iQLhVBaD",
  "key34": "5wjawU9XVTJ7BDkYRhHerzjNxo3hGCY44xfmyspxqXzfM4eeMzVJHGty5nNt3MC4t3v7PYtBEzt9Zqz3dqs7xGXE",
  "key35": "4kP4VYaPHRyL3YD2HMYB38VTKYUfFeh7XBgzVRrrE2zoswU74gzFCdGAnUEsRKdSunJNp2awuuUiZ69kcy3ftFpq",
  "key36": "2YwVkk2G4pMsPoVnVtihpvQCUuwjrjsuYbduGNAofFEK7wEAeLdvRyLew25VRzrdQyghj28BukWT3JpGp48py91n"
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
