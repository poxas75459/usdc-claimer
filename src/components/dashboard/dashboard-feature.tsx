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
    "vXAH3pM88mTPPEyRNwWUUdYayhYuGqqG1cwfBC14dMV6xxLU8SJ5po8jZ2XbrVVph5pdMuD1aSRBpLH6dnMcmkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKppJ8FKZ4JyvqapcA683agkPJyhRUac2w9dYLV89F3NuZPr4A911rUWCMmA5WjJQnvbqTp5r3Z4x3cGkdyQdBQ",
  "key1": "w6HxVEXZ82egnCuzeLK81wJZC3L7MCmvrz2nLumcpaGCf7d9G1cUsAni6q51EeeifRewKef4XCzdCr7LRWwis3L",
  "key2": "4Xccn1fSRJFYVwWgL21K9BFyuwhVaxT3NMHRLYF5AUcpiwu9KXxbcnHdJ8Rb2xPd83Mjf98qoiUxQfG9pYzzN8FV",
  "key3": "5oMzfXY2pifoEUahVchjZmqSwHV1UTEbGdZUwmmVXBdJmfCJ2iDT67rDE6enwHpin3QNAECpg8TTfwfoLuDxuyvx",
  "key4": "3CYscpugRGesSg3qpedBYDmfgM3SwWiobwtEms1TwT3kcz6ww8Cm51UgRxVdKCYcaDe33aEeWpE3jsceoW9p4euH",
  "key5": "2S7Ye5599gqqU6jFw1jN5ZS7GNVR1ihrhJQmM9SkNvNubv3BanWLMQhR15oe7BMrsWP7Nh33rkv926dj5rnj6Tmy",
  "key6": "5aGgQJXmSMuHTyzoUVsJ6H69N6AnSvZujjZhqpwJ2HspnThwcE7EFCqCstNnEqDbma25KTj4MSYBtRLWcwymY62N",
  "key7": "4Rt7wCvXq5kxyhPUArBEGRNi6sc9oHTY9RpbFoVGq7GWXzqsvHg7aQQji4V5aJiBLBMP4Ht2DzkZAsgunxvYo2Rq",
  "key8": "3o9AWcPLFyuKf2fecoC1ttNrtF14jUwuAA2AKf4xKg5vL6o65edmJuR5RR5NSoNrhjuKqcTLvmbbuR1SoeKcy7N8",
  "key9": "4GedC43cmcaiBLcvRdYBUob8aFLWkUJytqRLVustPVN3SdwbvZtcCnfwJaBGuVaxD8wPE5dXshUkCAw5o83JuJPx",
  "key10": "47H31xZWzDXF7M79Wcqjtrr18dTBbjmoKcHMeUqPPPhmm5M81wHEKqGhKH7WSabx3yrQNVAbZSfQTcKrM3bKiYrJ",
  "key11": "5HiRidrjvp2oANubJtWmxQwAmVHVRB4KzKKsj4M8aiEMFzkPnxKUTdwwgNcCPjiw7uN2B1rHpP9qJWchNqeEJVty",
  "key12": "3Km7JXhf8DwuRAJXEyb3n7W7icLxYizBrDUtAyM7ggK5jrzPx6yqGeNWGgdEj1zdUCvv3pnUgWPyy2ziGJ6Wcomw",
  "key13": "2a2M3RZpuKrU6oSXXUG7mJ8XF3s66zzS1nbetfUQ1rNkZHP4BbRT4RcmRymD24RiLFxNCn6vVNLgQ7aVvVZo9b8k",
  "key14": "5Xh6YtWAncxrxMQudN2MvqFXJ7gB9VpHg9Uh9yUufzHurefZMkuFTV9BVPjWreRXZs6m4m6cqiFZYBnv1HquaicT",
  "key15": "42aqKF4wB91i3RovzaZg634A2j2drfKkicNq71EKGB5LaR7RQRor2Bfhzz9PpEuG3DHEsVLyrPLQAUJRBZ1xQt7F",
  "key16": "3JkQDKXSQWdywBs2oLaGV6VrwqinBUCYnUcrswjjxY9hKQR8e36mJ32ScGfqZZ23zn6ipVwK1hXH9oquQjPXWjHW",
  "key17": "cJ8FxQQUxmN7vgNkQiVCJibQHChfGvjahSd78NHT7GR9AdoKLwprU86m1BSHLScNNnebVAfZr5GPof8zBJXkMwA",
  "key18": "5dGv16Ayd7EZFyjemSagaPvtZ3Z372jXuUJ2uyNWGpVhoss2wtA2ipUSn8Y6CcVJHUdCHpncyFAje6sDFNrT3s78",
  "key19": "2yVpQcWCZnSSqnBvvX28uaWwSAJwZiNgKHL7H61bCj4GcZGC3L5i6EsTykGXCybkfeAWXMEn8bJ2KQ1HjMG9kypa",
  "key20": "59LxBhDg4BbZKynT34opCxuSWJRWTmEEUbKzCbcVe1PoiYhDJDHotsTX43mFr8m2cgzx771feDAuU7LqatUbg3nL",
  "key21": "58tAkSrmreS6tQcYQCxGhqgWRMEgZ2nv13S8vmJKzhf8wKi9cAcTek5eEFVdE4sLztrnFz2pLiDmDG6pdpTZzKwk",
  "key22": "3pHR5brqgkEEp1JziXF2QrhUtugi74NWKFhKfbLC4enTRgyJRf5CzdtwJ5BNFKcJFiosfFcqcrAzFFgrcm8VFJ6n",
  "key23": "5r4jZsbYhDvMsvuePUXUf6xFFGx2u9AtESZKuzS42WQB1oZJSC3wuEtgkRzPPj7cpn5YHiYDAcvoVtW2rojgGwXy",
  "key24": "2PdZX2gLsRe7o3VhzTZghwUgNgxhesjEbJzJuo6f4YSjVBN79m589wtAGu6dyR3u2oQXUcspprSZ38ckxxmD2EMQ",
  "key25": "2YnyuuU2ojSkCe5JaxQ17ifW7acQzXbxVUnH8WqDcN22LAUNyiemZWWAeMkeMe83bWy85HJuwsoHe81euTNtrCdS",
  "key26": "5ukAzavFKxY77GprvBfeCkwARzUJLH7xCKjQGM3Bubp6KZxs3azo5nbPJwqnSKTG3QowDziAtxfgUEwSfASFKsj7",
  "key27": "3JFr17cJYc8ojKwyv513YCq5VRoVbNkBVYWx1s1BRMaN5cskSZkq2cjhfo93VZxu6vuVpTkKakJ1tA67M6enPYgR",
  "key28": "acbaZgJebJ2B1jWMNybaz2jhbREvGoXx3owmrtBSdtwCas8KLEqWgYXBJ85KAxGNxF74NwrRZrK5xNPHbB3erKg",
  "key29": "3qrj64LW3fhyXbUQZX3M4NDmwCgcFFFdMu8Wfe71sHTFihi6ofDNHHGVt7iTp7J5JpF3ZoR9LdqAibxBHix5Tn9z",
  "key30": "62KFHQCwbxWcWVn5czck2gH9tCjw3whkAGuihco6r41z1RCABjuH4eZakCNBenD1ugdug1z66LpDro7wNTbVDndp",
  "key31": "3GmLNuCktfAUA9kYFkBfG8ibf5QU3eTw9pe4cPmjuj5YbqSJJTwrQP5xUHksBs2EhoRYFtqkjHk5K1wR4GoFJmgE",
  "key32": "4BSxMu5Si9XVj6UrUTLFdrihY67yTcAkfBm4yt8RFrDCRScuqHDEyT3bAahTJfoHysavXJvj2ugEhJ26cuYd91Mm",
  "key33": "iGy8sWo6R1khjAaUM7QTcVBHtZWWeUCnRvwo5VvJddutqQFP4hn5MBctzxBdW4c9zhRK1VA78ZppY2CdVoXoHb9",
  "key34": "35in2PYoeHQZJj1R18YFgr2HL8etix2EoMsA3n2zch5oQz9NWGff8WN2m52RYJgXayjTBwU6cABHTt7X4NPKd4sR",
  "key35": "3KiS12hKp1AqU5whAAN9N8uDAZwCziCgSe1XtKFWNz9MzCXeu4Bxntb3jqcBAnW8kK15XVzR31zCHhzMghUC5dZ1",
  "key36": "UxMx5M7CkrAkz2o88XbybdD8JSYeqMBdYKKQ7YhfJpyiPgCwMx35YjN97zQKsG4tkC4aVXob92Cnaz3gqRNUwc2",
  "key37": "3ij3gVSoa19FPQN3tfwm5iZEA7JDUE7SE4p9nbDtZAyowRpQGVUwg6hE2kCUen4KZY4RYijjiseHTy63Vt2ZSaYk"
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
