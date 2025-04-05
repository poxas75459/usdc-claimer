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
    "o91jcAMLxp3PqygmCvri5BNNieZMFs8fpTueh47AjUusUeHahrhk7wVVhr1RR6dBWpakS6jYUYSU6xCE2Xeiaxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oKPuGXXQ2dDrdDvRL4sPa9A5FkiyYpXLysrUgBDzviTsVkaMij7abEdcFE4GmEwaWzR1FfoLPMvcpeh1cEY6THQ",
  "key1": "46gF8PSn7QrsF3gPK3zNvtX7sj7WyvAWAPXf9K8W4pundaY3HZ3CMD7nYMqUvtueUF8VEJLsrFmAJn8i4J8GJ5Uv",
  "key2": "fJBug3JworSSAKHoP5uPKx6Exf3TQDZfjeCD1kPBHrdNyqNcz55YPc6WYuu84C84yExkF5B76tgLYaZeAxveExP",
  "key3": "4XEjR8vYczXKwt7u3BSHRqfsPWtXzLQGGLQPMxHuZibuZSBANAdp29RCAaydBNW1iMt53Dys5dTe8hkth7WEMug8",
  "key4": "5cwbBPTgT373gs2c1w98hCmohEM91YnvBiNENWHBS9fADoyoLCnv18Rf48crth988XLxaL45RwWbFKFd2KfHvRHP",
  "key5": "4qziCosVAG4drKRoSDcfKshm4bAFJ1ymaaxqCc8WzpRAPgp4Koy9dMfgTmHJ4W174ncZRWT3rcJw1PVZLkGFwjXN",
  "key6": "51e8W22a7WjJmT9eB92TUZrwGTFYmpVg9pxFEWKRAX8y43U5aRWbqitpTRv6vGRotAkK5nsmQ1cVvZ6rRfFPEUCM",
  "key7": "7ycmZ6s8yu847g255M7QcaoanZ6cqGvrtwjc5a7rU1c5YDs5Ekib1CBPSir4kAMbV7ze1JdVE4PejYejdBSoL4T",
  "key8": "2jtTKQiNNEvav7z6qazWYHx1x1qqyKxekXxeWMjshVhv5zNBi7UAKaRXCFqD67CkLNh5nrrENA3rJSZEfepFrSys",
  "key9": "2HeNkeXWyftskSqq19n41j43GWZnN5Hst1vQebcs4NYfd7gMqhGGsvJn8x5n8A6b5FkwKxCLdfhKAFHWsyebrD5y",
  "key10": "4xhXn4H8pHcXArwmoAF94aSxdTakQ2Hk6KWAS3wpqDxMsMM15UVKUUjmxYHHY5B1aoUBevux9vQ9RpsW3NL1MreW",
  "key11": "42D7RULBMaLjp1y9pLbnRWWEwhEBxDdQxgSxoKycrxYLeXazKbXNmMuscACb17oP1UWiPNuJ22sQK2StaHxCKPeK",
  "key12": "4B8BeTFBB96QhzpEWo9GrMtKpsv327NbhPw1gvRPgFircmpKNrLXTino71CiFG1DY5mt8ZFkAAjE47VrAxW2szZV",
  "key13": "3FeVMMVAoP2JNPsKQM88PZtdMawRQReLGKUY1i5QsT764yQtqobd7sqRA4wHKBvvwtQe6HR6Ec6MNDPjvTV9azpe",
  "key14": "uYadsPe321cjSyLZknvPFw9MHUp2mWkcbcMuiufJsCr483eExBwzS99to1LdShG9fPfdLrmjyhJJrn7sXxNr2J1",
  "key15": "2mzGBAkh8qkxhpAqhNgWhmyZ3HsPnzEPgbv56hEXvCKAhirb5GbDaqJgPGUvbjogHUyrEbwL9pxWxjGkJVabeFeS",
  "key16": "4WKtGfoMU6g2asgyYq9uBtironE3GbKVP6dipGpUCEMnyF1Ls3yH15Ax3W2T8DkDhGiAMVqTL5M17gb4LLgDNEAx",
  "key17": "4eKvANtJKeWeLEErkgfGAPBEyfiNexf4DwASEKphYtXc5u3WGwaHrHkcygRCVJaBox2NVv7GNCmmt44RhStFr3Fd",
  "key18": "5HFt6GTxU3QJZyF9Pga5AyJEo9oXu4EfeVUcMec7Un9WmvyswMVDK3G79wuJEP4kdQWJjajEtEELE43QBCA9p3Rp",
  "key19": "48MwsbVBugz6cxQRze9Xxm8HVSZNVA7ct7TRmnLdRES8SR4rmRPVF9zPtDxVhpHA2kS2eD8XgoFWrroKMX5xofFm",
  "key20": "5cLBvaujH9uqEjUhm16bx9PHR1FwQcbYycs5XpGfQEdz1XhZaqem8EC61oYkUVDytrisaXy6GU3AgCam1yqS7qDA",
  "key21": "3ahSpAN63YPwnQEPVGnMR15FKd5p8t6A72dg5cs5CvS6jqJqyhEene9h8EvfScqBZrFehKeRmJ3wo529Jkv2dH78",
  "key22": "4RsTWHSo6wv5pqpfov5MmaVoAmAGgWzBRs7zuonQ9Akeh11kxhgHrEGBhJiSFjoh8zda9Xu6qTKHEtPgcDm5vrNd",
  "key23": "Fors8ZLT75xcCqGEHdSR8ZBDs6uawZy1EiF56Mx2d7ZrDfr6cxdXhSpWWK3iQyRrSW1mnWzwR43BySNZHgqd6xE",
  "key24": "2bRJ2aJUsdFsWpBJJ7qNRDeyN5SLeHUsaR4jYWfKfTKHAY4UMNeDXHRbUzUjTw7pwmGseq7YuDnb2X5NzrZMvH4p",
  "key25": "3reV7ipGAXEY6L7dwh9Cxc7yU2RVAG9aaVDdn21qHgxc3ByJCeMjZkMA8RtpHbB9cVQyLZB86b39duz1W754eGcP",
  "key26": "c1KHuZ6NhGPwWi1UMUMWQnvjvvpFg3naHigvpqnGcanfPAXsaRkiNEC5wGG6w7oNXxEuxdokGWo7bdFYPzFkxMC",
  "key27": "2b9qR8FLzsTr3kSDP5GLEd1iSNDgymL9iri3ZWTWstFe48vvb3begPbMExojn4n7AseRhkm66i6hmxXy311MYaF4",
  "key28": "32bq9Hdjkb1JRi4SNn3YJvur2dAA73wv1RWaiCQarERbySwjNqGmjpidAAYZq1kFBM2aV4YaRnwwafiamFEfi3fi",
  "key29": "3xGVDgUTVuRFkKPgPT8MgZsnKJRTEc1Cw5tjtEoVvr1fFrFvWxcWe3po6zybKvaJYk8MgmJ2GPf7KDjWU2dPZabd",
  "key30": "5Ln1e9Xg8JeUiD5rD7uGX1CfFAcaSSEk7paA4qB4VYZnsbchwLz74eZwHa9GAVFE6DMHX2J1gEP4YdN9rx2xWy6o",
  "key31": "361q9Be1zBfhbwXRAi8oQJ3VeKKn6GYcNLRJVsvtm43W9FU9nitZoTCvGiTFGjv25PArbhTWQWAkwSKyqwsDKzAh",
  "key32": "p3hyiaYmxHN5d2mJsh1jrbmAYoxA9Xdsd5TtP3AVjUjzJ6cS9Ee41HfSWmvapBvr2GRGbJqGXphQwYJPkW9vqsC",
  "key33": "5HoSvUhan1uJ9KE3H4BS5Qj59xYoomNosePNJtMLRJ9wVq5pTtqUi76h8dqMJVr9b1S1GeRoJg9zo2mEpi7HDUKB",
  "key34": "rt8Eus7exMxzey9H2VkH9FbznS2MkCxXHHbY1h17V59LnM6Z6VxnUSg3EFKT8WYWnASJNMT5czTAPAj4NsbVmLT",
  "key35": "3CgSPDZt7iVcmi75JMrBk1UVxfzUq1Tv5hYrBz5ozoWLWvSd5RGr9WKNWubJqdwz4MJaj7N7qWL1g2nDbouKNnxq",
  "key36": "4vqJUs2dtCZjxMrCYH2zvSDGGHe7zfGRq7vWRpGd9nvmWJHY6CsT6xKehqM5jkwGWxno6vmMzzqFtkFhgSk6rL31",
  "key37": "4nffQ1nmaXwcrAA7dPsfkCEFHRFD59b6kpWWtpUavDqwidHsLuBMnpMZMPzzGi6GiJALeHY2DuZ1d8Zv59iG4haB",
  "key38": "5nfFCeKYf9Vmch8ctPSEv7PTqdrpg7K4zaiepVDtKPes1PGmwEhPgeEGwZrQ9Zs4T8jahdX98xAr829ysEcLChav",
  "key39": "49CY53wC8dzzAmdXQ3aLumStQ9Jwa6a8rEzGYc4JwMsEBDM8etWELd1m25RD76vpeX2VHu6qDZzjQqjP1d6Y3ej9",
  "key40": "oNMpYSNGwMnttfcSgWMqtXMPvvA7453bAmLCUKr5HvpoVHJ8FeKoN6zC2QP29SRb7kkMmhsFSYnNZkFfUMp4dRX",
  "key41": "21J8RRFoMM3Qq7ZSrKAXR792BpdsjYQShAoCXJPoJrHcBsKh2XWdX2TLrWdtpiUofPwEmzUTJ7EdmaTznTZ9vvty"
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
