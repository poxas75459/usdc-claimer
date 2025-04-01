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
    "3mQDLA4z785oyZzaQQSimo6Rr4oHXL1UVkaD3k1Cd3VhzVFNvz26peyeLiGXwdLh1ukEca73U5BBxLSBvdhfFf4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcaszNAXRh3ZGJwua5iWyvxwRgz4DkNjEA43mLyeiJMxHk2quN9USzYDcDPs19ksNEo1X2MqogCdktQnB33njAg",
  "key1": "hoQDXXvA3uujDLAZB5XafAczW89hYPMWc6T9QMdTKh7naTsnEkBGm3DazF23wuDvfHiXi1poZoqzfazpfDKrMrr",
  "key2": "38tXpgcWf2aL23NNBjXqnHs1nBqQrXKxJ4Fn9Wx1DLB9gmfrNeUBpaPuEKhUgmwSWjdbCnB8T5HD6dYbS7hiATq2",
  "key3": "2jSFWM2i2hqWKi5tTQi2qup3FzkSen1PiBHamgrnJaxGm6E6vdJLJxCH1CM8GVfBoi5TNFLD25LSJFZqsQt4caaQ",
  "key4": "3kbpSfkkub5VhPgxPBNmV91b2y8tshB5RkuSLk2oHJGmRBoKoLxHe4RWKJJVccZ6HG2ep7VLLvcczAsuP736JH88",
  "key5": "UPvojTCjYVwR2u2LY21rYTXH87grbk2JzcvCmyKiAL7GM77aYLxkJpiWKsJcTqMkhyKU7TeWdbLGrUJ7eYy4syb",
  "key6": "46gDnDUBorJXd7BvWY33LKogV3kSZADg3UxCtm51sqvQtkKkyPctabgdXwv4WeqBFfTgPtDHe1FseJgQqKdFaSsU",
  "key7": "r2kZ4sfPYvKAQBMVn2Aa6qkHEQuvcHQTchdFeNywyVkd3Ut2r4jKFhJY2PX8HDVjtYuR4JhoW5u4GC3jE18vnjp",
  "key8": "4by33cuPUiCMdZSsF7uFK7ZuWNSKW4hrpE9D7mpDH3NfJCFG9HVWYre4DdQZwtGDct2JrgDL5hvWT4hcYmymehKD",
  "key9": "3G7pEGPM2N5ke18ipSiAJD9kCEQfE4PaErC3E5eBVu78gJqGCuvDUZ32e2VEG13enPcjB77maguT4QKTyXqCKZwb",
  "key10": "2XLGXEDG8H56XxvnbAEmyqXh1ZpicMQW3a5BkT1dLguupDwmVr3dqUVEJ6w79zH8myrsWSHdxAFu495zJPFq14xy",
  "key11": "etkZBthpAB6LZFtwH8GXx4zh8E6wKrQo1uUEUrnyd8gVmCdbT37f5kuozqEskUrnKvYi5C5XdmKjg8zADWs5iYz",
  "key12": "7oFUtXDomG9BJqAXv2DJBR7yri9dvnfPa5kcEjg382FkrAZ7u6xajokbYoFznMJnR7K5gWHSEkbtahgqfwboduS",
  "key13": "61i3sN4DnYi7Q5tAVimLu3e9jau5j3tKCpk8nDoV1FNZW6GNixGFG3EorrU3zyzfKjuitBBmVJkGFZaCJpmDar5z",
  "key14": "5Y1bakKpLHUtHVnp3p9zXRAJCwwVYn9f7aQv8PE8W76p2vWdKZj7n54LVyMcvaAQSiXVuqwK8TD7Ry9JwJsDghyx",
  "key15": "oYz82GWPPvRpFatuAx9unwjge52r3myjG5QAw8o9z4Rjc1uWaALJTfC8kMvEvtDDaeEFQKivgHCXTzDYD5Jt6oM",
  "key16": "4hA6heetXC3mNJAFjtAAB14PRmKyuf6rfE8c9Q3KYe7wnrZ3FKrhjWebQyGx3UzWyrm8KDmc66oyauRXGVaYj4f2",
  "key17": "3xc9H9a16NzKPq9Se961pmCNefsVr43y5ZgVnM5iGepuPdqhpP4F18BAwbZ3J3Byng9dTVUCr46ywtWzAdHxgxo7",
  "key18": "5A3pW6DYSCPrAQMKgdvBcquv7SPq3wZtj9vX5fbqeAMR73jbD48SvAebD2TkjrYNxnJtkUmo9uXT9sffRHB69GsV",
  "key19": "3JbbuigJkuqitEdpQb3D2aYyeZTTxpyb8JATvPWoFjMJ7BnszeaozTfpacWxh5PqMzDDNCNEYxCM4bYQePKLVR3s",
  "key20": "4Brt6V679Pf1RTgRYBA3ySZpzd2e1QcDVXitAd9dwofMeWr3UE61zKqrfv1Cn9hwWvpfHecV5Hx1jZotFmsDDrnS",
  "key21": "43bRvcbE3EidSbNmd2xQKSZiXE9ScH2eKY3PSirt3nA96mRKgdApTnKpPrpysHggbXMjfeQYxhRV1NXoPMiVqADQ",
  "key22": "2RxAWWmj45Y3hsquxfED5FyMAm3rLJmABVNJMj2uspa6KcQ9cifhZisYUDEGDNvJM8tf1wyPN3rjy3Be6jtr7CyY",
  "key23": "4fvEVzYuKvFAxUVbXHCRYTxvMNLn1AB9oh5UAXr4opvhLqRKxuZqVjxqUxcK3BmrHznWGL5wZoiTAQ5CnuRBAYTc",
  "key24": "D1MhVbStBnGbrx2A61uvtGJXPp7qpqdG6pWXaz2JMkuddDYPLPZ1KEQodKF9tR9u5CaCRGabfSJSf5yLAJQtcE2",
  "key25": "fgnrNMLC6Na7UQYdJJfA3jDYwXCcXh5e2FP9LK5KvNvDB7GA9M2UHd16X7NKsJqshBcdojjHbuzfM7DcgRwxUMu",
  "key26": "5gPqyiYaNxzmi5n4yCu96NAipoFmrWSRYPaq6fJnKpmptA5YYJHA7fdvspbyJ4omwa4xLNmg5m463ooT77bsK4dQ",
  "key27": "Njk8RgHQg169mdEYPb1vkmQj7FJ4kTRSMDGX7q12UmgFpWzxHCXrQSAb5rhtG7TeFPfqKtUVC5rCYCWmb7MpY9z",
  "key28": "3BcD5Vf2YUGJuGPQGwhMt78kckm3MYZxDCd31LCkdpSot6ifLos7xVs8vT5c5KujnUunP1mkrCEQXoudsh3EnBGZ",
  "key29": "5eQCmMjtbKpvoynK8vZRR5uKWtz7AKY16EjWedciNGA1nTRb8PccjH4itRFhqVz3mocFGpeYwornZMT1QeA1xNVG",
  "key30": "5EBAtt25uYh8eQDDpEaGnt69iik8sR4XHtR3RXpA54GCxEc2hWtALFTv2V4DJfAXuZqwaMVjBxqKdE52fgZUM6VJ",
  "key31": "2qK1rPHg1y2a5YNCZvFENjypiKSW59VxbZAZFUD5HQfHEnN1nNtsDxMMxfpKBfgM8qmABwUJUPm2N9iUppCJBKX6",
  "key32": "5zbuknqNAU2AzPkYfMwdz5pKrJVU9hy4DVqgaGk7w2GY6vPghz6Csi5kcdUuGPxxeVtsUeSEDrtN7duhg4vJ7CpE",
  "key33": "4W7SjXurVAq9zY14QG1NvVjDQzzy32U772xy2XqxuCSvxj9BBPmuzJvb8BRg7pK4JhrafY6Ex6pAdYQtLpQ5ziKH",
  "key34": "3LMvMTJr621r7wN2ajjGDR7uYYU3M7reRWGcjH6pzUjXtW8QajoZLgJFR29bwmNsxNM4JPHwK4gTDLgFjmWRLCZB",
  "key35": "3qL1GG5qVxFDFUDti3argyZbSdToe4KC6JYtMWzqogE5VsD1ZXzHgfiQ4povf2xaLueEHV6FHEynd3rKehanydX2",
  "key36": "4ceqW8dsuNn3u2AQhUAoZ9fM3eJptLDAoct7jDupzqfgZDrfTXRnQ1DF3dnEZhga36pZrcCme53oGLfbrxSiSffE",
  "key37": "4kWeoCH616yQ2A8QWa2ARVZS5m9CghGZmBSzEbYQUJRc6EQ7ho3Fehwp4BEUGDiGXrmhsY2YzwdwEZpmHwJnRgUK",
  "key38": "Lvkr2nNkw4GDxg3tSPryEhYtboCYzS1CYfVKbMHRNrjRCsPaq1tCi8GgWsqQTsdRBfwKtkYiX2bvgzDxGEx4pSo",
  "key39": "3f55ACoqfK7zzEXZoWxBSJmaecpU1M8ZnPvqL871pc1VFmhD2fc9eX7A2HvD18Z8BbwrMLHsESBFqkhVEKv914Av",
  "key40": "4Jz4JE4nc4qYJRMWWxgCni7VGtXXqk6hzqUsmFQgKzYYtk72CuMfTikNhPXLpCgCrmf1DvdSqbffAHr2m9e6tGPm",
  "key41": "3n4KuPLvxjwJrz3CXNKwgLVYXJremrDdYPi4hWP4XW9vccjgrJPxzYJR7HewhuE83jWCN5DzKPDaoRt3E8vEFEVa",
  "key42": "25nZJu6i4M9WSprvL4NMuCk1NMwxjJDxdRym17p541WM6gzh5qwmpYNmvB6xgEJJ1Gws3YciBAt5So6LBvcLEa6Q",
  "key43": "41qrL39pZVdaMiaSh7jVguUkrk7JthJggpRzFUdFHdXjSWvxArE98kuForjPVsB6evNoHMrz85MPEbGnNm9xjvEX",
  "key44": "3prxNT9dFB4cbC3TazppzYmLaHrdfwXi3iicqRbakUJcG3B8jwdxBXEFj2dkbVDZaDfeYwfpkrwUup5mz3b7HUCE",
  "key45": "LmkHijmGGb4pMUatzRoa6e2EcAeLbUvMKTu65samXPvtJ664n19F4CfCL9gTmGA7d8jbuojDpFdSFT8Pa4kKg3t"
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
