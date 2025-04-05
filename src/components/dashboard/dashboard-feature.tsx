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
    "4n4jgiUj9Skd5VQ4xgrMvMf5cDMV12JREnXNGZFt1dD23np1AGdp5g8vYHNUr8gqcu3RVApp1QeK93ko1E28Ffkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJe8eMTwsAcMELkhLUcVLyT9hT9yTZEdm8F3vs9W9sWvpo5wW2BT4zsqJotM5FoHfsATXk1xzAG5hT6uMWowkJe",
  "key1": "56RSYNHApUGAqsoF1nEEmhy5u48RB7uPJNypsyEBG6dn49YadWZd8zRuCaTiWKfJ6TjoSfSGUCfHEmfiXGAaantN",
  "key2": "CRovGrrkW31rEm42Ai7cVCxwzx9eCz53WX2Ha3QMQsjEwh7NYSko2yQB5pNhS1UPJXzX7fR7z1aZ6XZSce8op2P",
  "key3": "2yEeYknyBCXAGyDhSFfz48hb7PUvh4qwiH3uHoYCpLaUbz8aSgQeDx1BKkzGoF5jw6N2ii4QZ8ufUhnikcGZvUJ8",
  "key4": "2DtaLiDjvGRbZD7VGywrUHKUAHm5YBaHHFFXTQa19v3zjBiSSp1ZdqwMmJnYcpwBERztHKLrv8EeqBbBPVPP8QAS",
  "key5": "3UGjiazZBDY7syJHQMDV5xS4LJLWuQD7E6w5AhEoVnT75fRPgvryv3q4o5thMX8SjW65t4fQR6w7jhzBg1mYW5d3",
  "key6": "5KAcFSzroR6gjPmUsGo2YYR8cY9EEYoKT54CWxBJFNdW2UdKjpEwBY3b8BR99wkBWYYdw8baCbx5dHjGUqPV5Mjw",
  "key7": "4mBmLycrN4cnT1sASH3kZcZVxzgAv379jNchnKkCF3fGQbDuvnKNEpvMMPQBBJdL2YA6Y9wJj2cSm1oqQrkN2UUs",
  "key8": "owzHHLPnnNN2qjgBkVpk6ch3hg2GmrN45QWuZTnytZSQ63QfwbzznucfeLkhbmZWFmV5Dzotdak6w2FsTdDw8qJ",
  "key9": "3e9L5BkVe7T4DoG65AnJnBg6ewwiuDC2r6Pbn9fXgidgmTiVDM6jY2LMH9VkcUctNhqduyR3ADY7SF4bTb6GXYqc",
  "key10": "2asqjSy7JigPstD2vj4zq8XXZ2Ska98F7dhM1R7pWYmjSEC8Y44C1Z5ttyMx3dktETMRN2MRwN6Qpm1VgZvo1SSL",
  "key11": "4egWMEdzpWA45HKjW1GkQFJk3t8bVhUCV5tVXKZ9qZu1V9a3Gms3D36LvAGHz9F2NxdUwtf22P4cbDeCzUq8u4RT",
  "key12": "5hLEB5DCXuTuf8juyaRdqQR7jKjzt5PGTgR4Y12zdTukKKAsGztMCfrsDdHKzYECsD8tBXxRZdaLMTHBmLQChWn",
  "key13": "2dcNTDPZKZmzjRxdxoDi1ZQtGTAT8c9JCWnhE3yzaMSG6htwgJvXM7AkYt7pH5kD81tD24ow8b9F4YvkhaHkm6zv",
  "key14": "5v3DJzQHiM7BEpUCDiQ4aGpN9iyLLucJTvMVPNaYJx1KvudcR62t5dFrYSe71nDLWXXGTPfAM7WHNRzcNwciAD3E",
  "key15": "5HLfcfRyrdhRyieNFXygC1A6qm8FpniGRS87VhCYiNcLvdXrfpcq8KcE1iqijisryAoTbD7YxEtQbwA5GV9FUHSv",
  "key16": "3XpAjf9ZMjAbubrWvEFep1H9A8mrpF3pPRKRKtWfP9ej2cRAEs2nDvVwuEyVjuZTsa1AfDSA8A8pyRMZhRuuodjB",
  "key17": "4pALHUA1MVdLb2yzDHNsCuxf5XeBRD2XZHxaQ4k7fpZCy1mSj29tE6uoP2hGcbCC95J1d4cLqy4Zi3Rxv6YATTnB",
  "key18": "3Qj4WMxWAxtgoiFP47WxzHwRrMiuyMZRDV1fS2MhAMvzB2KHHc5UkenyXAbPMBduvuWRG2F3oZGLnUMGkMFa5WN8",
  "key19": "Mezczh9wiF6deAkgEo2Jf1rV2sTE1hC4codZSqc7wRNSWGMH4eTP7qrPfd9e24J3G4LUzgCCfTYg3mNxsPWeQqP",
  "key20": "5EA7RnKvQSXMj2KTib99MfEsWDb4EGh4fYPdaMzbJ2yq6UmpRsbwFVSCpnWnUVDk7AjfVEkdNRrzjwKzd2j2aZtY",
  "key21": "ToVFxMAU9HYNums6YPxz77Q8nirF95fLUKC7GnQLaKj7HoFKykY6mVU84Zj6z3JRaCbva3xMTYnkXwG7qRzdB44",
  "key22": "4PJfssaSNCca7oct6MSd8VcnMWx7sy5g2gLC7EXvjRTejuFSATTPgKceFruQ7vAmj33sBdu8akr2AV4DeUgU89yc",
  "key23": "BjpePnLyMpateUNexh43VLABE4q9aw7yxgg5WF6YYQ4WP7f8mZtedZvWjW52dyG8i4g6Pjcc3SXEATW7jjeojMD",
  "key24": "2kzTDq1xjEchaciDZvcswx6quqHWUpKjb5uvDF76An94MLCPh1h5AaQ2414AtHAhLsFR8gBpta1c8B43XbyC6ESx",
  "key25": "TSDMHyaiDz2ot5XEpBLCukvoBjSPTYaiTNfdfAnUtA44UFckKQrmQvFfwpjdvX3GpYRTLtjf4NxWRtZQiTAJRmp",
  "key26": "37M7NWd11qcqDSdJfiv3arMwXvQA6WZvj2ScmrKsrFHJpLTz682aMBps37oV9USx2SsVzGnuQeqmz5ZXx4bqzuCm",
  "key27": "5267Q6X6DHbpmmv4swNegaayfXwBDSTSqdEvWaWd4RQm1T84wgLhWPfmMaNMsVEUXyQJ5Qtzj57va76ZHkKKhmTV",
  "key28": "iTo6KSJhYFFjBMXZprHnGAMbozj5dgukLDAgULjU4ugoY8L9dNa5d7SvMfW2DG6sE5D6wHWSgQK8CYUYJMfYJiM",
  "key29": "E2PPgMbHcjhtVhWBim5rAtgPdho94oBTcJKHtkrHNEm2zpK4TTeFkS4VkofNRM1AufC8Gbg1Sbaok7CVqhDzTb6",
  "key30": "2YwpieQiM35W3X9svSTa7Bc1MzXHk9WJ9B1bJRcC3yS9Z3e3GQxvPVM7vrrStYVaG3mLqBNJfamYhwmAHXvPzJwT",
  "key31": "51xytJwNZEqzU9XKagND91j4S2jf1RcUpNwdogrTj7UWUbYVCiid8nhctNR6m68kbPnvpakw1nTWxwxLP2vRgBqP",
  "key32": "59ZFsyhxQ7Ebd3ufxsCmhP86TtHeQJksQ5ADdqLZMnTc99wLxQ54mx7vbQ14CFoWCXBJTjC7daByKDR3w8ACQ7Le",
  "key33": "2zT41CgSjfvczYR4EdYo59SoRTZ879EC1MB4WV8e2inCxP6XjggCg2BbpQVditfEAQxkE5QuzahAf3GDGigFwZ5n"
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
