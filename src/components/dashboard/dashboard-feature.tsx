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
    "2RxN7z3TC6pQQJJT3kV9HCZP4bhYgesBm9FMLteQhSd8g76VUKKoFP53hXPgNojTeUMiVfcHbQJfynLuMJLmJQZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNivrLK23kDVDSfd8XuKFo8NFcKgTEMr6478RvxsXJmu7cnQM5VShe5ZsNCfMPxsPHLsFPPJTo8WWB9eSzNBpbU",
  "key1": "2XwykpMP1Jg6SWaadceYbbzhJWpx5G6Ste2Wm9w15chGsCuuKVXKk6WC7DTzVdk59DdEawnqRiUB2WizikcKctKk",
  "key2": "2bkQy9P2yo7eLVusrzwsrFgcajLQUcQdtFJFNsRkkTy97gsrNuVwXs7MNfFFC2timHCBcGn9iURWvPkX1dFUkEUy",
  "key3": "uPonvtB9JCoZEyXsx1ZV5F98WESUBm3asShby7u3f8ffarW3y4Rqykb4EYRMQxfgE9iFMgm8gaGH4PGoWxEMtrY",
  "key4": "4J6aJuQbFxDB4ygPR6CksCXq4h2D7XpxNndAXHDPC2Ktji83jVwiFVGEN6bL18pMGuoKzxoFSyuwBKwrHrEdVziu",
  "key5": "2RHoXWuUiLZVGS6oWRTCgDMcs4WiAh7jipnohAM5rkbsbnBEWvstJAX2VhDQ8UAV2QxaqH2UbPZnantY4BMKLWv9",
  "key6": "4je5vvRbXpSUFmpn3CfBqrWpuGr9YFQUzhQGZ9tMo7kCB4K9pa7UdPAJc65BR8EexpFDz5PkqRoxFDE6NxFyVL1z",
  "key7": "3Tz5VMN34FgWPRT8g9LEix6pArscRCbbuWZpZLeLnprbEEsQuKYfjW49RgXpq4EgQyTc476mMj8QBYi1SpKm4MNR",
  "key8": "5bwRn3zKwWJZFntse8wiHwzascm82fnX19ow37qKizhdp7pXMyVrZhn6rqfnPkqyHVsKbLYZfVAVEedD4TrKAQts",
  "key9": "2ZTU9DSStsUaKUBhgeAoEig7cmSadr5z5VZ6Y3v3sg16XFG49FkjmLLmjmtYr1qeJDoLMTk7MbYQrbaWCRUghq8m",
  "key10": "t7r6Q46tZGgz6fRLDQd9z759e3fpKEGQtcKRvpVDwTpbpicfvttoXRFWQbaQipxY5oqZiKgjdi8fjR4bAeiApci",
  "key11": "3u1ZGoNqVCqC3n3SNw5NVkaBsrg5TSic6baZHCLP9VrPzbpT3warrJJdvoS4BCFyuuMQcnhyxQrnJRguSu1iUezK",
  "key12": "4QRwJxk7MmDbJDpyhgK9KcfgskJCtUAB4katqL8tMzY4s5ZXwoxREPwi7gXuPcBXnyTNExrtJHPjPxTosTEKvJUG",
  "key13": "5TkMNpoENekYDBqA6RcJTErivRvP8hYxfDt6MEP8qaExC3yjq29cSeLvAaY5QA84yNSM2LTzi6329PN4ASWd1qoT",
  "key14": "35RikWgatSgECjt6KpPqS7XEqRkkYu4rMakVXEZ9pW2FeS9NUg3H3zKgyhKriLJ9kChkNrC7RV9Sh3gZfU7Kcz2E",
  "key15": "gvSX9QRz3uUawoFkegdswnhsFsBfzqAD8bCNRrLWdt3DFn9z7pE8Rh3TQQHYnkzfztYgU59ddJVz55JAsiUeibU",
  "key16": "5ZPdcKgzn5GhiVrXwJGHUG37GZFv9kquFfGzdG7VjhxSnVLmeQubAtvKtbCn5JejnkVvAXrYw7YaQQUQhsKGGFUd",
  "key17": "3dsjF7p3uPvoFY2VqBkUUmSoAHujgeZC21jMiyKNy4JhxsctngNEPNrMQLGBTH8QdHGyzU9djsdEVeZYQUYP5zmJ",
  "key18": "5828iGjZeeiNjCyRJA9En3E6WTQXFCMoYGHQ8bzxuYx6fyV972F2CrLXJmRqBZvSNsrFWXaPtwVLZmeUWGzH2XDf",
  "key19": "4m2tmky8RBEq4jXCArURHtPUMBniDPHGLzPsAwS9sLJg2ex6JqU6ebTVvVDWfj5TSRNG2Qj3mfKdL4aSbGBjCu4L",
  "key20": "5rR5diUdc7abQ6L93kNfuDKHbxxzMh5XfakLgahEEv55qeHzp4K68Y7D5P28AfStXwBDsq1Wa4Tew7585sBNiyyK",
  "key21": "4LrTyPTAkB6M5iTuQa9Asoh5vh3rLzK3RRXCo5icg5QdKB6LnByqRrpEiGYUM6St4LFuLgcUr5K8a6KJpNsayKGa",
  "key22": "4692966LrFxyrRZ1Cp1e8wCmwbWZ3FdW2JUfdB1gj3fXuissX9ThDbxjQvYw8y9EznCKPKHYCt6zW8iEooeL75Wt",
  "key23": "5wDBq1HNUsFZADGs8FawsgiBshQE27GwjSWwreFvnFRxnyVZ5xjPNRZLyizQZAiLhggGakRc7wReMcNWWy88HwnC",
  "key24": "4mWT4HexA4VaEaSPSx2pTBqb7GGW3rZcSNb7WuNA3D6ZA4kTDuLKC93ZehrXpHhE2jFwGuqzFqaZ9DypGkcxE9os",
  "key25": "oVGXPkzs6cyASQG4oUqFJPKJrmJo6HEC3NVL4gwQEe6zJ7E9N1b1GMfa4QZg5ib1CvBVgS7hkpHjzQuhAreG8dk",
  "key26": "2pCix4ZeAPA5MfXSWHykwxuhm8HC2evxf7zrBPF4ujrwChYMhbE2aERNtScuw93JWCuwr4pBCyKHhbgWALFsVnpW",
  "key27": "2SHAiDUHJ35N47gorJw22bDG26fqqiRQfrqK2uTQpKPBMHkYSm7uwiyDdjFasK6wSk9FM5pP9R4ixfHDuvHnjJox",
  "key28": "3CNGEcEPJUtZQxxuJdL6aA2n6t1oyYCYaGUVg8dCX6u6WNw9QT43VNak57k3NJJiJqtYWfEyDA25Rx6YEpQbH1sx",
  "key29": "5YnkXqFwPeHXDoDzZ46tt2VnhzKjQxkhjN6queKNgAepLASy3pEYicPGNdCJDEpDQbLPjfqt1Ponod9kUTwyEVMN"
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
