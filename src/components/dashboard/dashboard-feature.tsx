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
    "2Bo4MCAtXRe1weESgAM5avesuy5kS1U7ASwq3g7imrHiXBip3mteSCXsykL6Zu7pdZPgRGv3Km65uenGrPvDv6Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQ3Q3NUgPPDj82akH7b2WZK4hFLqc1Kg6EUwPTP4KuD4AnnVFpykRb4sDuU5CCUQDDNjESmB9qWvNWyGmcRoNn4",
  "key1": "4hDSpr8wvkj7C9P1jwtv7j9B7438sborVL9WPmWh1A4ucvxJ2LKpoFX8TabQzWyK8WUCBLr5fMknh8Dn6Km3s4B",
  "key2": "3DMHy1V1WMNurMpdeiYqCAx7Np5MDqph2XEJtUGSSdzRrYFkdobf3hK9Kwjbcs2ySeJpp6CS3NKHvhDg44cS29eB",
  "key3": "5dfjKj3sGtt2TP2Jz5t6REFEaQ2LsHa39UjfXsrNhumTojrCnNrvN5Ap1mfwXMeRUo6HcxFsrx4q3sEk8J75vrYQ",
  "key4": "572nqP38bsJ5dFigELN5K5wmWaN9SjTGiumXLeWbcQVz5fpLSgzwCTayLAhZmhdadHX6bebqm3uBqLJP8saAGYbi",
  "key5": "4S3rbvxpDhFr2L8h7TRCpv2M8keC3jfCnCSE2nCPDk3SjmyZZ4WJ3CTtUMMppcrdfQNTqYPe6eFSzVR8Ae4iGAB3",
  "key6": "4AycdQtWG3vwFkyzjP9TgXbZ2xq7eHNkSmJkqVaVA7AHxjE5wVF9qVwg9MxMYMPByG8FBcZ7SVJfNFn3BWcfUa1d",
  "key7": "3hSVH7vPEU3BMJZLF29SvX4XMM6wzTaBzUyoQEqL7y1SZJRjWhjuni1GGQtryqHqP5V1ZipnecKaWVSXyShMcrVi",
  "key8": "2HbYNazPJHSRmDvbMKwNVyCRnab8ZosfA4EkxDeDXbrEe5nxGUqCntTwbFF3X3E7w3ZAqDrikftAyfpUxs4PTfZP",
  "key9": "5VHupH8vcLSsg9aRt49Hfq727jQmfVPzCXrj35yGTai3P5gDBbNFSPf2e9STd47QteP4YmGXC3fPc7qfMGWqTHab",
  "key10": "3RCf9p1GUqxPvrik4c1ug1UuQ5q4sVfc28vzsFfmui9zTBqozij1Logg3atmqh2K14mLXy4kEN3x9uXfdUfdRHsi",
  "key11": "3xVWaF2KVAKFp8SBMYSQytFpNPcGxtRbBZ7zooY5gxRJFF8PHMWdycHV7j9hqnrYfEQeHPTJWhfimzgVGr5m4eGk",
  "key12": "2kDXWqSLNtt7bJ2SS9duwP1jhZeL81qtNiVyX6SAgRLb5ZZpHaiAGCfcEWYxqYv343Ltk1HqBkWyzf66j3T2oDf6",
  "key13": "5KxnvZH8fpjsB4mXEvpJ92rPnWXEat4hRbmsouUet8NACuF9RV71kSh3QpUWmAi3hyfEZYfZdggVe9oNzt68PKJQ",
  "key14": "239xpd5a2azpKmHoA5qTFpDY2PuigmWqXQLFNMT1wfkq8ye2gAde7BMy5miJM3539w3SDMjzNJaqHuMxAwbtQQkV",
  "key15": "hMmVKHXBG8Sgn7fRcyBKPTF3cWudeD7ySGn5exnnePhv3961BtYh3fwe9kqXTKY1FVfV2aznn2TavmQXcjsfQZn",
  "key16": "iX2GpCBagSkEskYh685PvWAjfXqsfGpGhAvbVw9iF39rJ1zyP7whQXAeGxc22CZQbGRuPMEvhX8XcZdCDvA7QUh",
  "key17": "5xSGvzYuz8jbni78H319UkHMvZQU3VJ5i7V3xA4D2w2fmNxYDqRFqBfR92gbHS3ESstjrqbdXRRixXBWhrdw9Aft",
  "key18": "GXEZhxKDXyBeMyyyvZ1mPFKtx6arcpiNgGGBLiiRyv1AJDAwk14piCK28QoXhcJR2ZbFGzAjeWNKH4Ey4ja5hbw",
  "key19": "2wK9vYauxbHKH12AW4xyjQgCH99aJNFddycdy69io99cSYTxdpKFVZUsqbW3ehrwLFdGQi8tsFjWKs8CsUnZtZ4D",
  "key20": "Pts1etS54zQEoPt3HDN4c23LsyeBN6btHpGpvn8jd6LKReyvQzju7LGgCSn2qc9aDEEN4UYheVysBhSyo8xavsg",
  "key21": "dFYbvuKHksnj7XoAytVqCeUH7iVa51Fm1QGscvs2ZjFDnjiw3qrDBrH9FdTsqZhoR9uyjLZFoiD2pZsXJWJ3sDu",
  "key22": "QgtA9rneVQLH2nHfK8SUkuaDfxKaTYoKDmz3T85SMDFrFJ2K9Vy4NC9mC6fxDxg4saZdggoBhQr57oQs2jnfxJR",
  "key23": "2vigpz8bK4CE6Z9CaEC5GGjEsaAf5HoRKSCz5tjYE2jxcVLXRq9ALwivR4Pg3qVC3jHszjd84WMbHDd7tm5Q9mRS",
  "key24": "RbsM6G141RKyvk63PazPG5TPn47Vcwr2gmmtpNoTPWTG6yMRrApxwApDaHdE2BM5k1h8R8abbm4SrC1rFoaT6TF",
  "key25": "3GnioSNyYEmFvzvgDr4Ni3ZdmpQVVjvDCNhRVjs78Jq5XU8v9h1LP6SdoHSnb7TWPSTF1fo7Qx3nB4LsS9JCQoPo"
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
