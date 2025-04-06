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
    "2t2jBTJBCUtUNQonZZCnwu9BYE4Ef9So1fx8UdhEgvQFkouKxxbzUY6uTYCu2mrWD2tC8JQuR9ZLs7EJ5r9UjJiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LthK2TqtvUgQsYeV7YXUiNCwCutQ4jMraQWvKYjrgJba6QDzt9RbVaHeUYbLvP4mhRGYCY49GsPzxFj1c5G4Gpz",
  "key1": "2guSXS51cSBXaS5tkqeHdLPTz4NcEJVkxk7sv1DZD8p8whiwoNHStUCXrGZi6GDi6dTZ3Re17crApd1LxWFzPvWq",
  "key2": "5opk8aMRKXadtA9iEKNNre7v654mvkdCMn3Kkqy8pmffKvNNDMHEshBgshhwbGnMt21UYKWd31VrGvhYZos8kCYT",
  "key3": "5cRkAttu6AjDFcKnq4Mxa94DBvx9v44T3jxAvZz7BDgFfyF5Yq2N2f74BW1Dt6xLyqzYURT6a2z432LbSZy2H1QF",
  "key4": "5Yvs1LstVgRtH22PC3atVAfehsA2f2PXM4JHizvEcUg7zTYGYcf3bpAsHrSGvxiRxt3b8twtFKXnVL1bKpJf3K3u",
  "key5": "2tK3XAL279r3AtLEo8QRBvEbCwSujvUvFPW8caoCbVdhsPgmsRNJQRKBLCj4hx2s1hks5MyZ3XjNHvs56Hx7hpCb",
  "key6": "2v8Gx3ibwHr8sxPLTUgoQtPX7d7Dki7cEY7zhmQP84GU4Bpjb2TTbPKxwN1Gc3WwKigj3bJ3ezbDsZet3czBF9D9",
  "key7": "61MhtLncEBf7rizNg68ST74Z1YoBAqmyjHCQvvFhzcAZUXAf3YnGD2iHuZ2y8npobWXT9VwEwPFMtNHKoeK3XA5G",
  "key8": "4gTFQnz14o9TaQx6SvJ1sSeyyncuQL9eyDoAwKehwdzaG29MTfJ49aBPUZdeVYrT9WvhANyLbaP1dHZEwC6byYCV",
  "key9": "5CVegV91Lpbh4WAJcTtaeEyRE7T98LVQPXZGg2QpyxWuyqFbg5NBhnWvWbBhAbGPoZKWfAjVNuiipQ7xyHzwHc7M",
  "key10": "2h6SPJwZqCJEvuHaDcX8HfYs9NAYohXBAPJyx1gLQji6jpbfsR49oTk1yAfJXes9ovznPwpP9U5AXbG3AK3Ewcpc",
  "key11": "3G9aJ2SdqPCNfZhZtMUCAjCyF6sryfhiZdxgDCrs3kFpJRutBiC6VC2LNVk7aMVdDY7pDg28Sv6XJcpbqaetZjj3",
  "key12": "jZCiTrPBT3Pd6yN6WNh8vT4zuBU8T6fa5uogUMfr9fHL91PMryfD6AT24LSGSFFiu5zVXGM4ugFFAB7HUtZf7nj",
  "key13": "4f5y9wSF8hRPYZBKsxnbTn2uR8UF4msmD6m5WR6YFhW4Zn3JxV79XeKKP5XArm6Xnb5RvRbBaVgNLFQgMSUAKK8q",
  "key14": "DiCjLNPgkZYdEW74bnNENdwnr6JCHeoD3vvshcixXmXSAndtpK5LeSdk9AQaK59f5taX9fBhNqzCUZnXeWKnw2c",
  "key15": "CZKWJrQWFTdqsH4YTd52q99xeRTLS4f6cwWL5DAHS1mQc5cZmQ5SbE5ResEaEVtKLPiimPk1zgQP6LZjQvQYt13",
  "key16": "545pwsPfWFTqXjYtcBrem7wErrqtw564uQogcGgP4nHF4o55TPqq3EcyyKqkyxoD1kYUZrXf9DZmkjVzVajEwpM5",
  "key17": "3ebFW8FYVKoxuNGkAhEvqjxX7Vp5MWwFzKv32uLkUQ17wTzJRkgWrBTrp68sWbnqGRp5eLSCGiKC6MR6Q4ZSs1fs",
  "key18": "ZsVtSSHysupCsTKqmsC61vUFanfTUvsWv8jZuQjUWSvPztEJzViEt1jscjnnizHUkF2VZqxrNPPZYiBehrjZej5",
  "key19": "cDH3j6rWyJFVTripUqdF2zpMF9mfk7MRAf2VpSPThiSJ3QchZnDbWv2nGMvmpBCNaKti85vT8HCZzETgTdDktC7",
  "key20": "xqiBkW5ksMmBN6BuJQgpo9AW4TFshNpWzKGksr4thDTMsu3PHgYj4r3PVBmuriFR2nWqN3LkHQAUx4gcddCeqeT",
  "key21": "S4zF3zDDM5c7Lb9ZPpXnPqwoM6EYDE2X5KtTL3E58URzYpvR6xSVZSWBVT7sGRs8GMex3J9FxNsC8NF3HyARGPd",
  "key22": "2krHEsDUhvG6dsJ6cGc4QW5qM8oFV2f4KogXicksT2wHMTSrD9j9tHqgRfLZxCRAiFsgwPn3Yh33T9i9mu5RBrWh",
  "key23": "A7C5sTdF8qq3hkC3PWDHK5fXJpQhJGnN2rKawUYVXfWSyppL7Ag1vp6bb8bAozqfEp3sh6xy9exordoseFFBKXD",
  "key24": "3VaZeXuyQDHeBQRD1HAbnULTVMsEbrfZ6CWsj6DsZieJyeGt5Xr4RJDbqHTUo1mLxsiVPTSvFYYDnKaC8B92UU34",
  "key25": "5AhPFVne5uX5GeuQEJKVTtsDgx5iJ6idmrF9qE8s8Qhx2uHfBroJtgUKpXyAy5M6zJwYSdyWH1YkKsRGfu1kY3o2",
  "key26": "3YtP93422QguHrbSojJ7suhgu6NrEAXaDwWjyhF7YmNi5dPJRDzgidHj2a6PWxaD9BhZYyndpSkXZcgpvyjKWBKu",
  "key27": "3gTu4r2QhjvguuxHRd9oqumHvngbubJbxpsE6tqkgWu1U7VQsLDStFBA1hKmcnnygCoDr9AkDbae3fyG5xEkM8aQ",
  "key28": "3dg32Srb99gj4M8fdhzeVNg6aiZGTfHjoPSAGAvGzvBokN8agRne629de3F4VpVXJgv27ikwQravyTe7anQn8yxj",
  "key29": "3kjsuQjfWm6c3qQm6czguSWZ9zfwhdegHqn9jaQdKgLNMVxCnnUTsZQSFFrZCLomQbE5BV4jVNyRwwjuBE4x9dD3",
  "key30": "4rhwZLe54Pbe8rN4b5ALxTwn2Vpf2Cu95Q2xji8gJTAL7BRcA98pwvWcMbTjP7DjoirVgKh3HazNTxEshRQ4cRju",
  "key31": "3Nkvvrhm624X9bfo3fMckWibyEJ4QTWgCBGKYMwG48Puhi281UUcmB8qeKxjzCxw8ajkX8hdvCBYvTgGGXNGoz6K",
  "key32": "3239s84EDxKPYac8kA9RJYxiLFXJoZH9wLLBhsR9kVAVNeXx2y6k4vwF2P5cwRBHmzbeKWf4iWrog152WTcmKUGs",
  "key33": "2P46TPSnnn6oCrmYpLChK6x3QAHvhAMpb6tAFeaqCAVh8J2D4PzgEtFLVhD2vsk2p2cwuwhiUiEqNtZaGqyd77FC",
  "key34": "34oMhXyBV829RZQJQyTfPm8cdpwv7azNp22VKrAJUphND8oaz2B8oCKMJBUC6zK9z8YUCmcbbHanDMrXB7k813bZ",
  "key35": "3Goz339yM9e7w4cH1Nn2yqvhLkMXCPKz9sBz9mpUnMAjtzPYkF8i45zV3F1cjPrGAVyWdMuwWDGS8DQePAfvA67M",
  "key36": "5syMn2r6kPwTDDBdo2NkgFqrivLssx8k1fXgXBKcVHRXK7EpqrHvixGpWEqQ6NMQJiVzquRG5p7Awgt9rv6X1SW8",
  "key37": "5rHdmbt9B8Jab92nycShbizWV6ECZngz9PAa4xt18T8a1W6i7gcaJYZnxAGSvey2U5j8eRe15t9mrVtbsWWSG2eC",
  "key38": "HeYmP42DvdBgKxP2NNRjsDhizRktsBPTttTuvdsAosVfFhDcwVq3vjWwu1wHUco172GDvPuzerMewib5VHUv8hj",
  "key39": "2UtsdvJ77YHCEowHQdtGyiv4SM3m4JJ5jByuNgNKS3fcxgpJLdssprbXswqww4nHJsfeyLb2QjvWShcc5MWVmsdG",
  "key40": "2rL1Q3oZNh2j5vmzHJhUPYWJLjdGPvqU53Agb44bMBEAtX8fbVCFwARKPZxEdciQiupHC8bVaVz8qvKC2WUESJBq",
  "key41": "YV8pNSqPmAzWtJUdWimAvXgLmmdUBz5gnZyAchqvEEu8qD3NLK4Cb1AtwuQddvGovv18ZFGWPBNMpT5vwBeUQtF",
  "key42": "4ZYrxBe7KQkQYSvemVGXNiKeZKqiD5iviAiEeBJ8NCuQHpT3uMmyeJQAcvPnUzJP1UBghi3Cni9avxg4jWXK9Djy",
  "key43": "21kDVq7BPCdchNkchttXfbtreJP4VViC8zLe6bUUW9THTkvGufyEPzbaRjhMsJFNtkrGDrqphfbssFguki1eDCU3",
  "key44": "4jWAQBMZcm5YbWenZMEzbRHyhuSpr4RUyDZKf2hunAXA7YqdnZu8YMtpK9QfMtvHiwYmTn31RJHsZ1RCXv7erxM2",
  "key45": "54ffkQJuN25s5L6vXA9hJDyg8mQEs4zqft6GudBkeSuw2fLuJALzjUXAAGPv6Ld8FUiVTwTD44ZFjMKK7pLoyyEb",
  "key46": "3G9f9ouBtF61MPVo9LVXZ4LQWMVBczi3T3CTT8nVQsxPZ9jb9oY9HRwTnjA8vFa55PamG3JYogDEfz6x7pEDGoBG",
  "key47": "3av8xPVCyWeb18vyhKCeEoMD4c3kZGx8v951fCx2Z5CC98HJTejrF2jYcq1D2W3fPmsn25eA43k78ZvKyPYMEe6v",
  "key48": "3yRK11YjwQKQECStBgVk44kJNakwmRH6grSF3EUQvyBFMfmafwq1EgnEb24A2HWQADACrJ7sAkC99baN4EhnaMkw",
  "key49": "U8ntjWKDbHxRzeDWJW6cZ2XCw7B6mPKGDVzMbxuYTxhsFGBP4frZxQ6njTZkm8vUGrUjsPQN6EGvZ5R5x8TvUkX"
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
