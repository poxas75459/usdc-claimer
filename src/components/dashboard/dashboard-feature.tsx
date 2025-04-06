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
    "3T4jkJhtUjFFERSqYR5cg2CwydGSkhzyyPh68MtbfnKQsZzGWDZ6Gmar3C8fCjS6ADn4buJZUZ65rDBM6d2CEuFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQc1YR4DN758Buv4NRhZMV4EMdYuJXNR9j4BAGMeET2q9u1X7ZxcSMr7y62vJZGUxDGBx78c2Ky16RKyDzEuUA2",
  "key1": "5qfrFhySWDGnVsvqAb8g2JdM5EBp2n7rHuRnFbnuXKp4xB5B7xNej2sovjWwUE34xJeF9Cq1kV561oecYoBXd8dU",
  "key2": "3gHHwonEKByUQgddrNJ6DgDztsriN1NAizGDP8NWz2ehF89Ti4S8SbYNKEHbHJ6EZNyJacrrmKTnH7J2iDDURRUr",
  "key3": "QQSGFYaA6E8W6trgF9jtbKovjzDuab3nGvZKTEYzqnzjd21HKVwopV5KNYo47MSCNNPiL3vT9gUMp6uBtZGEJBg",
  "key4": "3ELps9KaTeNtNs9Wv5C8ftDNNaPkDdpM4ZamXmJM4qVFgEMAA5gXj3iyVHZmpzZW4UTURr9WNF7csXzi72CPK2Tb",
  "key5": "HNwggGKeo8sKNnHXATxvckRM9AiF2HC9oDvKZV3pxELqB7gPJYujkBuuabEs4oW49TpUzTe4sfEEdHTCdJqvU4z",
  "key6": "3EU3hx3x8aVHuiC4AWX5gYRs9f9tBxaQecM69Zx2q5uomKJRYDFEp4LXFez5LNfjDX1ovUZJgJ2uw5kpipVZiT45",
  "key7": "4wcmxGBfMgG6MgTk3y1RgJKH8oMc6RJWsxVwPHAG5TbLrG6bY5gV1WVPqZ7fiq9xeHsb6eBKXVVxrqZasoxubmT2",
  "key8": "2yUU2CG8eeuwQpo38j2AjrApsWBKQhsEzwZKZw6p293fuS4gKLowZ3FhpX2GWfdjP9kF4rvfVRtBm4AF1Ap5xSLK",
  "key9": "mTMuTrbgNpTUfDEHDShiganXEJRN9j3tbcPpvEouToCo7Zc6D4wW3PMqCYcWqU77Sdq1SAeWAfWWKgWs7PWdA7M",
  "key10": "3YuLzKx1QVRizTkGb5eNJcYhM8XqpmDzdbWi9cssxcfUXYyZJA49vhY8Xb8wvzMCr7kvAUnLEb8B9CWc5C2FBTjL",
  "key11": "5VEyRA357ZGFWS4PioCeZQLkutWaC3FDpvBctfB2HNkNHmoAHuuyCQVhL6vdcbTh4iKFGdRKUoy6s6Z4ARe5ipUr",
  "key12": "2grPzmPC27ibSNNZGMBZoZDbbE8BzPY66yza2JSxap1WwKRDpd4L2r8pfnpFqdGTA63aPqqNDJ2SoBXwRXHV5MKo",
  "key13": "3usZtYfJFNVLgHWtnAT9FjEaZdTHWQuWdwBKqgQmYxS2XrW49AETL6Xk6AJ8cXyeFNtfLY6ycbNW8jqM4HMSyWJR",
  "key14": "5AWqmp4138DKjxhhxA9gVU5kg9P88k3pZT1HrLUE5qReQaH5Rj8F4boa6SGfDtTEohr5ZA6ehKn6ntMqVzsZPQxY",
  "key15": "cEDQv4irYVpmdTPJ1uuV2BhuVDRQr8TnPFjiwyvBu2K9bhx9YVPWbRfdiQAFxHTpCCqL6DNcghNJhbS5msRHcQQ",
  "key16": "327aEV1U27bVsmrgvbp3m84bfVEBptGxVEDSmY6xVX27S8feRfuhV1fvtGEr1a3PvL8gnLuwNKeuCxLWR14HsooC",
  "key17": "4NX3qu7F9AXbSZVmkbCFe3uCqHPYERD7s6i2ApvnLudZuNQrinXmXQ7fcUk6LZA3v4jPjX3TvWvUx6h3yKuabvgM",
  "key18": "3oeabm4MaqmEGt5hYb85JuAxtqPhAusp2AcjsMfXbCuv44MX8GXv3xGKVd38Py52r4U5rY4gLCWXV3dAor1QoSNe",
  "key19": "2wzkGtmUrhYKKGLBmqGVC4D24YovzTuaMyv1mU2iTgn8AVa4hsCjjpNFgWU1m46w4d2XLfDXFE9FWPcu8XWQjwFM",
  "key20": "5QMmnJBAL2c9jiaW3qS2zbqRaEq6AcRFoTL9ENCRm1yPw5wrrzcdYPNCinnLkzym69k59KSWMQQpncEwDGa7xAaz",
  "key21": "3Fu7ktCZu5EFiTkDy73kQ23JXJbYSpTLiVwQrJeqDCJn3tQyPf7KjF3JzxK1S8MbWm9GYvm74ApRcRUwdGF2KRT2",
  "key22": "4bSxy8QCPVq8AE26J6kVP2YXKkTG8keaHnQ7rk3FkWdFMn6wp7nCYvMwHBTVbEvk9J3DkGe63jeSUUsMWvjc81SR",
  "key23": "oSLz1RmvLN8s8CQcegVg5yCxQtqGAu8NYUPQ4CZX5fWniQMcNG5AifFET5Y272j3NSXiZtgg7aLuTkWriTU3gjg",
  "key24": "sA7eg58iWpbahCbmfo8BrZFbopon8h64rbnwH51MifJjde3i46yoKtSvByefzK4hzMe6Bz2NwkAKi1X4Tu9Swvi",
  "key25": "5ujRhMtmE3ShwwBm7CcRDVy4Y5qtUbypPY7grwzAZaphFkYkbooLAzzqNwjxuPANCgmcLYKacPRwp6MRCuJBCMzC",
  "key26": "5wxPSNRZExG15h5yT4YrvvzZjZg7XNx4enHtmqCwy5N64SfmNE6nwxWRT7QUQumYyZ33WyehswHWpLyuycuu5Ztk",
  "key27": "28JVstXVCxj66jjjhy3GJhZBEFbT9Y5U9t9JqWSuX1CFx59rkoA9VNkDDoPn7T9hj4WPQ53KTRibh3Dym6CT3tCD",
  "key28": "3ctEGc6C6ZRBKEYXU68tmZE8SXGLcqRJpo68meg3gTNXWG12DvcTRMotehKksMtbe5rStimwUmU71qUYge5mJMce",
  "key29": "2uU9pX4Z1rnUZDXPs3NKsqb91EyqRPMqQpJSLCnTfjbsCyR5a8QB5xvvb3fbwS23qu6oMfsjTdLSjE2mztcmJP4E",
  "key30": "44Uc7WhrBsbhwySFUixVSmMgSmUEiASVvHmWpdKvLTnmgFRauq8LGVt1ugucV6Vmvo5MzhNRuvPjHJ5KXGkp2dsh",
  "key31": "5DpEt7ByjhMTy3LvzkdpVWUmxNDMfSZ193ARF2h5vRzFc1oxTdBnzqf6u7FPodSNQWUFhZCq9vkjQVnJCDyhKyzd",
  "key32": "2uSzan5GZiZ43wFz9kgaYAxMD8CfTfah7dEYpnSjEdxCgMEjH7aszyVECvHj4LSYo5MCThWHnSA2jFTRufKFzgTm",
  "key33": "3wYB3KAxnSYnNbAZwibdBS8Aq4r7oKZVZEHUWmxi18nLtnTiGgGwnrqtK5R3syWUczARYohvBWiXCZMBxbxqD4dP",
  "key34": "6XKv9b4FjGf7xomomojqgPpnczVWGNNsTV87FoaqbDe81CV5vRpd67sRJUhshKbAQ45h749ANPmyZKkYPw4xmCR",
  "key35": "2w5oUy6EQsdAiGQkJk4krZJMvxVhdB7JYLVYMyNR435C9JBVUbYQMW2UYX6e6uFMqEasJEUwyyFdTZZ15GfR1Nqd",
  "key36": "4haJjfP8VRJvWJRpPyUfn6hpTTMhfxZoRWJXZCmjS3MWScr6sFjiYDhdVd2h3zav7uy2YhePfcnkrvhyLbjLwegi"
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
