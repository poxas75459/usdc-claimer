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
    "4RnAezqWTa3zCNngiVoCgMuocPaRNq71VVsEwXXqFHzCzYX7pQdTc5NVC9HRFPuWp7dky1pPArfmsqgpBTL6yt6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KayzEMmh8BAtYZ1d4YJvwqpVGq3QsDv2jig46Cg8fBWiKVefkBt4aQQ69B7SG3JYm1t7c48WhMj3gK2SxF2wVLm",
  "key1": "2wzDhqfr3U17xVbWhRQ9SWvFWQ2xNs2EKWtm7kj8tS8qAW8F6mgk29DKLsyAbatbEf5W8o3kqRkhrjgdWKrzaUaS",
  "key2": "4wQGntDCzJUdDDDQZD3wtdqD5fNaZa2tivRE2DeDQsdwcFYNjbn1fnWA31jG8eSdyT1gEF2R9acfuMoFHp6utVTt",
  "key3": "3BzJWtkNGcTYqoDRHBt4Vy1GRLUAubTc6hsoT4TSWGD8qAFbt6aig4LiApzaz7YfyrnD9JTqqSWQMvqo68Wahnf1",
  "key4": "4gMsuzUwM5TM2wuK6MiUDasvsd231WLxF9kyj7JNDQwkBZLgZiRg7eUocCCVDJqY4W9kD7yuZMMkapaEE6xfEC3z",
  "key5": "4pjjx39AkPsAKZvhuG8tPCwa6oF9NEDasDh1J7NyUdBW2GoMVNY8cJwH13MP9sZWeFCLBPCnE9FRBfcabLkjdvfa",
  "key6": "3LMiV5KLFkTSqYyeNPo6RJm11fpJUhbnXgoa9P8QNG1a6ZYBdhaG7YLKtTdmCokrmb3Qa24yizL3z6e2qYFPDUKE",
  "key7": "9f7R3FHJAcwpThpDobgqUrM5sWVoE7KNYxfRksQ5xCb7W1d9wqQDC9iRGLT3EipzKnEo1Vm22H1fjzY3siMGLEQ",
  "key8": "VLXCZYkNkN76krJoGZJw2TWk4gXooDtXg2xy8pe1bS8YN1Ph1znPW89H3iH8Xu39aHLybj9fko41YQPJbQFSFrN",
  "key9": "2jpo1AwodPmFHLi8uLpfqoWvWKKP67ouPNzxM7MDVqSVWEY8PK9j2bV8iCSv8dB11BZsAEn9CxvewCDVL7DGDVeX",
  "key10": "Ej7BdkJjPYGgvBSXfufW1SzSktuQbLjvs1Pi5VbQZqF8ribREiPjrAmZr4x2LcH5LjJ1oyWQUZenQrTuUo4jW6S",
  "key11": "5zNmeY7qdVxhf8CeCxAG4RYeQtGgNP896SeEJzoNtYFnGf5bM6a32hnUfkJ2od7ybMucNxSjVXjZX43ue3DXquBn",
  "key12": "5o5KbajUZ7TUw1Z2e4c8u15SABNYbZj1SXAN4sR7XniTzcoRj4j1AFhSFzy2w5uCEEgtdiBanYjFB7usr9fyUm9S",
  "key13": "3dtfZ5XsUpmq5Afs6Tb94STTfcGARaczRQVY4Ei1hiBfMXeCBB9NBe6cgqVMAKfPoTijfGWwdWNseudpXmWXjupA",
  "key14": "4UqR7rYruorjBApDDBL25rAV1nNvwpd9J3fJNsySuKgECp3cro6HyMBQ3GGJk3Mb1oY18KMfqsYpKMcd1jRfUqBR",
  "key15": "49bP14CPVGH29VfW9b35NHAGZZxTK7EmkTx4S22JghuM3ysrxokZUAsccaWh9UqxzxmpSaYCK3LwmmwfrySoNsuz",
  "key16": "YTWtd4wB4k58DWnXPMhsJdEo6SU2gz4FHqHqeWb36LMdJpBXS4WEwyU61hybpJmiZAG113MmV9HvuJZ4ncfgBzj",
  "key17": "ZYifrrF3gW6Pz91LAD5Ro5g8KPU9k9f73bwyctS6QLiCxhwgywTUZDCGPa66Uc5iGGjDShFn6bsN3LJRBdJBGZ8",
  "key18": "65cGkn32qiPkwgzRR9uX78tTLHCpYjQyGpdKoviPMphCdEDLdZR2X61JDyWpkZ6t4yzHhdkR1cZSScteWvhoc1Ef",
  "key19": "355EcaHEwfi4FtoCjjVyE31wsW5yCNRPNgCf91dJZWD6kf3SKvc9dGe6fZm9wYsrh4oVftVwFRTdA8PJqHxYFunH",
  "key20": "44wqJYvWXZt6D79BuXYTdQZeaqn3Qdfi9ug86S96fhqVFJiuqodkTSUJXfrEWC4cPWyadTCrqrSyfBNs6VMguFve",
  "key21": "3N6i6Bp6iz8maox5dNCznzdYyN6ZHfuKZv3r1TpgCSy3rk5bXjo7GhwAhhd1KgR1W6ko3MTgvRPwcq12nDKuogg8",
  "key22": "4Kg7MCGNurZFWT7usGz2jcnGdnA1waLR1H8v6JkJBPX2SCyAu4pxjjAazvshQNkapCUG9DaSYXE2fyEZYoD5o3of",
  "key23": "4CZS2sj7DBMrvfDsZVWDwDrUaCCR9HT7Vp7tJiNRyio5vwTPKBvxepuA5tRUFVRQjk8emE6LLtDH1hK3N3wRfnL6",
  "key24": "3EkiumDi1GaJdVG3WViGgYaL2Knbuf51fFi73gb4ddEAFzGDN1B6DSZe9aLyEBhmkYA75P7jfj7t9XFrDBuo8kCj",
  "key25": "4cCwGLJq77evdCNxGGjENusWEB71vrbAzyvay92KVS24EPBMXimvvLCcDFBtK9Tb4b3vbgA8HBreVdafcyFeaSvz",
  "key26": "3W2WxWR2LXJMGeRAJ5QZCxSmws7JXeF2zRThokbYqSFZ2yNdVrj6mvPxUwPQeK9qKxXLyxx98f2TChmkiqPNsrWR",
  "key27": "2Ux2chxfD8SAfZPmXQpBZVNYtf76LXEPTJyHrYqJ5L24xWEGsEMJa75odtcC2VBWEVgACctiaMcMB2gUFHkm4vBJ",
  "key28": "3RcRsh4n44e9ZY8SmurhS7T9wA7ufqfEQEHixVTQQ2SRh9b394Q9dpryHbBqUZg2TPa3V5P5XddwmK2rjhSqrXJB",
  "key29": "26rga23NvbWscjw2LFxjwHxotGD2pSg1M7R6XAaR7bWQw6wvfgsN1j29tpdUUKFMZAZgsCqVUsd3sBw4zjYq6KZr"
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
