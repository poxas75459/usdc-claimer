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
    "5VCMJKPSR6oWudzFUAXECcBzxzZeTBGGRWxpwKZJh5Gwj5NbcnJDDdZzb81RPdSTyGK2XmqYDXSQKyeKpcrKMvRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58naei4UZHjiPQWvP87rQZKWNdkcgZRq3wHbRaUNPs59p4R5wq3h8kaQWhzbq2g4Auw67huWcd4dNpESZxsVbeEH",
  "key1": "5yhd1bC9uivQhZbBLHqyY9tQPS7cZn7BZ1yn5D2wg7MW4j4RzU4f1jJNAep1yoK4Q6FVbrfoFWUmj1kzFwMnikcA",
  "key2": "4AoCqE1zVxAGXmt6UA1sCHR7LLQNyvStitvmN2gMLwffRMmJ1UHwLk2vttMVqRvpdvPK94KBA4htVdPW6XepJQoc",
  "key3": "2ReSWCWJVFSmpd9T4cFs3UQ4bMfMPe8Mv2eoYm1R8mZedwpr1mRMVVU2CyTziWZ5eZE8igLEoiTubwHH8QVQCezM",
  "key4": "5DpLfnPYCza2b2psxRbK9gn2RYHMVcyL1oixN5pJJv8ZoPTs2Tqv2pV61s6rWNcvBfovfbWqXtbFUJZgebiCWnVy",
  "key5": "4xADLr3wQvUnfQ2FYN75QrvxBKkpBsLEappmk5VLgj5GXKYaZqAN65eHzECfNBgN7TNUkf7SKvcxN4DwcUHVrjQP",
  "key6": "2wuT2maooExW5T7U2fBP3MhRzedcT9vq5eEfNrrUPLRDYAfEqCpWYRqgPuwABeEdnfRrccBKYpjB94zom3VzD4Xe",
  "key7": "5W9vUWs7ucLpajiZrTodFTrPsS8Usezx53TfwSJjT3XP2RJhGpAkgwbVR5MuA5Sj65eJ3taVer8TisaVjV7zY3uM",
  "key8": "32dnBJNjd2UhghH8F8BgYcHnGdhmcetmP1T63onsibnryAkzmpGyd1BcC8cWTLREVCttEyFpUrwoHvKgMGnPSS9",
  "key9": "5bQcescgpGPiEgmXaa4Y37Pq4h6nKx9R8BGHJ69JrEy2nM56hb6BTsEywUd1P1XFVATY1qirRYn4HYu7zKNLMirB",
  "key10": "5dskGhMxt7KD7U9FoyTKjy4yTh276pcafprfD2qcbkKZdzFM9fo9jo4sm3FktoaYGNwaKsqTiKYxQZJiRkeKK9ug",
  "key11": "3B2vkVH35GDS9Yxv8XSkWMUN7HBigMLLPTUbqEinW6rdthTirPqRwfKmmS2YQkNa1U3X4zRUTGbz2QNY3BbJM3tx",
  "key12": "4twUz6DhpowyUzLhWiEFx2vgY1GxYF7PscGnwA6EYYqQB8A2Ugc4kM7TrhoCjB8asXArTBL3oSeZnzSLh228FYoa",
  "key13": "3msSHtDMb4CeGhPRqpHdUKZCaHSXjTmKLmBptVKFMaXcNyxMm326DdNmgr8oWZJEa7hq7rRazEb2x6pS9rmWdTPd",
  "key14": "2MNb4Ldf2HPXwEDKQCrSqiS6qX86S2tNaTtzvD4D5eb1vFBUrj1HDfdfMW4wNnSUL6XAebSUTinbqQuntdmzhKmK",
  "key15": "4Jh92HNR1ZMu4HTEHqj24udXS1wNk1cJYdzC3m3DTdUkCEF5fi9wXR1A6LYeXsEVTK4DqfdSCwndArN4woK5rvyW",
  "key16": "24wbPe8k1HQRvmcEhvkkcxaiJjk3bRPW2yAHcrcFmL4gHK3Lu3aQKJb959VwEEzjn22ZQGMhMxGJLpAnaQC2fTvU",
  "key17": "2b4GiPktCPD5pvHyndMgS7gqgsYchc1xH6u1TK9omwn67G364cs8sNzGfrtkE9s3y4EoLNVa8uaMQFRdZ5Ui79tp",
  "key18": "2aqzab5EzNXSCnpWszNqXUcwiSPMgkmbFAqUVrj8c8h4m1wBDyL9JtpxBysnFpWuQ5aGyRLPi2ZZdXTbPWgPnbFx",
  "key19": "2euQRYtZPZAkhGBSQDBtopzNYCrM418VkqR6VuhhzMe5jmRKEkMeeSsZv9XpidXX5FcEHLpPicFo54mPvtF5P2jn",
  "key20": "65JNStfmGFP45HKkcW56CGHpUiT7idYMYJ8Yvbd8CYpfcfWFCoN84hNCtL9YZcBdHEKLNrTediL6tp7yjpTVw7Rt",
  "key21": "4bh8rhQ3VEDSHNjXsWsR4F5xLKCtHTjHmnLDxXzVyczvXVVnN5Q4aqswSrsKuu1jkw6RtAmoSQUUbHistpALTjAP",
  "key22": "4KRaZxFCKTVYZChA6xUBTGrnrKCW7xF8GABEoQCueVutSTF3zkfqvMZrmrG94s6pdGdZxHJoKvY4dY497zrqQcXV",
  "key23": "4YcDGU42kAQZkyTT2A7kNk6TmthPrH9yRpo1T6NpHm9x9kSZaJphMMT24VWSSwZZrHfLg73H46Y7rJua7MnDkS9o",
  "key24": "44cMq1hCTK8qeJsmsTT12rcmgtMH6CBvC8xHNZjPhrZY2aqYZdnyJ28TuMKXmgcp1VqRQb66S9zaPizdEfndmPbU",
  "key25": "3aEahbktT5bTqoVx3Larj85mwo3oCEFKHQUGgNn9UbhjyBRjbm5rHe5tkfSJjp1VZKYV3ym41Cpex1cjxUK2AiSL",
  "key26": "2J4kgguaR6Kp4cRuhwdUbRaBeJ86RGUFvBvWiyfr4F5Pegjyh9GWWvAHuozV6QptNUZiPJdpFS4UNaBbbLHmtEcw",
  "key27": "576AgMXXiucf8DkaZwZ2kDRiWxf6sCrZ4GwK22tRQENX7iG1a3g82HJUb9pPRaF7cVQSEhYRNTVxYRLMZPPE8xKQ",
  "key28": "4kvDVoyzKE3k4ffCjnCS3vA1oti6NHswhEo5pAof2SZ6r5i2JS7TfXMZ3rpkj5rNq1KWr5WUNHEiTwGsGMfRabXG",
  "key29": "36rwoB75DxU39owXQCWUZ86hSBn5WMbN6dmPdyhmCUbaQ9ytoTuJQybJQzphnXG3DnUos1p2LotrBsXnsC1oj8uM",
  "key30": "2d2ZWa3irAhguPov1wCcX3oDcoZvg3jFymsZckWR1zp4xMTnuw7LAXFDzr664tpWahJHWPKBWKKumYzTGmzc9gm8",
  "key31": "411YT8xEbUx35keo6kPJ7szM26Euj9gAgPp2dDfNCVTKPo2ivHohr9mUmSEcb245XfHHRgXAZoLPMzpiuqA1z9D",
  "key32": "4d9VVVfFWwQSLsM6ULTKVHSdvJgDnq7z44ZryEmE2c333gi8kdc5arVsS8iHqdDEuxVdq8P8hjcNSjjwR863YyiA",
  "key33": "579Qk5j9Zy3yZefkDCPKpUuoiFr9tNE4yqmcxuAWYe1BGmnKfaqaXMUxajyBwoDQrwxYLQ89AVLYuwAqBhGancH3",
  "key34": "4wUwGbSJguuEBki7btipqPERguEDe5Aw8v6SgHTVPqmVrrqHRiYHSiZrUuWErEm9ndWyNQBFAnhW9NYvL7LpL39n",
  "key35": "CMDLKP3mhF1GC1Gu7bLLUiLrXijoKztUEBdVshhagFgQVnVSRbwoTcnRS4DK4JA97iCRZF6h8w6CBajW9UJ7PqM",
  "key36": "4yoWaU1AALTFr4anBfZ4TVVwec1riCM3KeeGo1Q9D3Jx3f1gyV5xobUy2ioJuBd3zMb8BDiwEoUrfuiCgHVFBrcE",
  "key37": "4ATBb9m6wM2reLdygTWsrtcUcsrE1hhD9Sybqh6aHVkhBUiKhA7qFg4o4rzpyY4eT44757FuSHf9hhxmzy11ZBbP",
  "key38": "JZHqmsL5Rgb7dnhEJKWEwfA9RBMLmHdcSjjTGLy6PdGXFBDArwYsSMsRyTbZj3AtEo7DkXduXTK93mrPvrQhWcv",
  "key39": "58GxERzfnHUR8TcrEuWqYmpnXhxpkrgCN3QDMnXg5MBQx6hSfnhyfpiffAMkntdTjQzyE7sWqNWwoYyRhz4rqumj",
  "key40": "2gCY7kYkjxZQWmqqRgJUZCKKjUUbvKmLnPUWM7BXS81qvWZ7ba2wqVBoWgD6vGySbx5mciKpxzztpkBkEsMqdyfG",
  "key41": "4R8kCYrMTu3j3NzxKryBQN8tWda1ytC1jQqR1HNiWLUvrNLCzq4Dt6FeuNNX3cjzPZSVPQKpPYZYQqSkwuM4vpLA",
  "key42": "61vrj84ex2hSvhq9JZiD3oMeVN8UXm4VpqWTELB6qyzBwNyd1UL8nDaMLXXFDr9zoBF1Byk8GZm4kT7xfon9gSGY"
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
