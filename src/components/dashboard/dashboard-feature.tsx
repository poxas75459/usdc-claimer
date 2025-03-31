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
    "aS83jGMK5CKC1kxPY7h63vzoSFHxTLuGAfi5KdgXcBfP6tTsCZphsvstFqCo1XUoaGmZTJYcmzrJKT8sBN3CiZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDJ3am8ia8jQMMfnYknMfCH4DrMx7KUCTp4GAjq67VetANsv9BcRU15ssDQrZRoKSvWTSgziMB44c2XT4sk86vP",
  "key1": "7VVCe9MSgZhqti4uAEyqX87QUbgprQ7yYGPgnhCrb1dAArJn9k1i7pD9GGhGuy1StrbwBen6SSzhqhTuNpmeQcK",
  "key2": "5hJBAxmnhSzQGYkwhcwADxe8ANaa9hfPTR9Fh7fJxPu4cfddM9FWaAswiRQUpx1NP6ss2ruq6mCw9s5kbxUYWUvb",
  "key3": "2NJYiWr7kZD3XmNVcKRNkxjjatNGSFszxw47EaSeCEHxLEYFmYga4qNNTrcpXXCWh5PGKFtxeWZYoJf4FRGGVo8m",
  "key4": "3U3KDncM4nbXgpvrUyXMc3msgt5M78P3V5jcqxyBHyod1q4THFowdd7prXARViwPs5b9UtiRwzSy7pG7wHTgaunu",
  "key5": "51eV9zRXenpVzM5pRJbGoqLYzHNxEmjTST3srBsrQijcMsbKdf2zNxQcnTedhDX4ryvZfL3r6dvJBAj5fGSkXc1t",
  "key6": "2GM97TNprmHMCXcTg1Yp8AAQjVmV4i3vspEsU3i1RgzuiqKwSdEmPQ9MtJDDoLGFwhyNKVJ5ZyA2bKAJKeBrpRS8",
  "key7": "2AHZbmxkjpBpAdq5fXQRXiWZfKCxh2UGtChL5x5xQg7GUMbiG64AeJcdhHLxay61Rf8eq4r5KzvespEHi1m5jSQF",
  "key8": "2BG5mZfYCFHqfAJEzp4gJbwREJXnTLhHje4qhJ2VbsSvS8rc6M2J5cBMsZhbJb4t3vUkBe8U48hwsQvE9xVEUZCv",
  "key9": "5byqtXVBXtGNKYz5fdvnTbjZJnq7BogZUmTb8hAMUMUd9SX1MYuVr4R1D7zjTGxBU39H1Dhisz2dvstRvJUGezoi",
  "key10": "qgsHA3hbQxUkpGbEqXoJ2BjC8p1QLwjjbCSLrsWs8bCyhv1Qkvwppb7VGdB9JKAek31tCCHx47un44QAqjvuS92",
  "key11": "3CwF9ShCLfo8PxfWBJCukGw7t3rcZxujdRiMxA2N9KCuc6LNKjH5oXNsU6mB18DZ9f5sALcdMnEPi7GzydDG2i3D",
  "key12": "4i2fwSvFChtmUjZysfT6XG639LP1iULsPwiHUmx4WofQeR9QE8NkZacge2dT26E6j8H4VtpRSp9p86FrBpRXKh5v",
  "key13": "2qmcXrQ8hu24WtN2sRWpho89WSf9EnhCFNMRqmacHPEGsuUKdz8eMd3jU786gt9nki3QGn8dQvAaa3NfKsVatWyE",
  "key14": "2dXZxcmTPjNS94RHt6qYXLGEWp84zpxnG1jdgeAeMgEFSrKn5HbYfvCjvotvsB4nJDmojX7mGHTDcZjyTEJGjGZR",
  "key15": "68TxV1Dj1yrPGWuCUuDJ3LzPTNRxoc7i9w1ux3eVGTo92tmoxmWZHP3NeS6NuvNbB7abg6dKJ6xWz2qDP6K3rwC",
  "key16": "5bfEe1ebYhKKZQQyZ1YpGETKmLEJvbHv51sWiQGac6d6USwQ7CUick1hhaHHZzAABc1YJaWeRNKmciC9rrsfMGGW",
  "key17": "4EzZrBxHrBfgJcYcNFLTagm4uKaePeWhPMc18pubeM5UM1HpPDk87GQVHTadwPJhm9MXM6DWPd3n1nrh7iq1ZCDQ",
  "key18": "4uukoQiyrv2qS4GcyQDeKequ3HLxRBPQY23a4PGLxwpSTCD7ntX5Um6iFexwUQurtmg8HubtPCt9kN7SetdoLtXw",
  "key19": "xDBFptweVh7sWGv1XZuEXPzcQQvWtDM1PKrx82hoBViL3KfH1bqjZVrnvwokaNwo1oPgzKF3hWdYig45rnz3rw2",
  "key20": "4KAGsdwxGWj7oEg2TAxQcVNm1rzCwN3ZDFJPsrBsE1cpJXWzzCy8gkH8BH3Rk6TfEt19o6eaUhAuPPXZGKfD3jCj",
  "key21": "2Xc3zVReRJFtkD4fukpCbQkVFne7nHx4Rra6pqxPmG48ysAckTTFZv72mhoGvZUkrYfbLr7eJ4JFyCavYSFHCKAZ",
  "key22": "4UUMptcdaD5rpmVKZdYjPHrgkoDEHyK7Uk11YnHacHnW7ScTFyP7z3ufZunhSTg1XsNtYUjxyL1eMrevCBg21uXH",
  "key23": "2smoBwUeipiLrMEj2DPahYc2Dmyw3NLquBdUh4kpKUyJ9rqQ5fNDqN854xxEW5hio8SPisykkkMM4iHq6co14h2o",
  "key24": "2kabRMcd3BmPRBMmXSR1VMrHoyhHUPuqeW7SPGWby6X1Rah95Fh9xXe7trhSW1kD6tviN9wUfLfaq69AkzrjK8Qj",
  "key25": "5WSJCfAv14ks3VEZ4NdW6WAFG5jxxaFx5S8XMDrrVfM64PusyeJgGfxTXFjNqK4CJwRsQ6BGoa1DsjJDQn4Tip9p",
  "key26": "5vatoZu8ZEhRuEh2QcZy9K9o5NxNGoVNA7kG5hnZzsANpCWySeU1Wrvg6ToJ3BK7WCkEZHXV5j37kAKh7wH6KnMs",
  "key27": "5JXT96VTHP1TfuNENMrpWLNQwefSjfLRnJCucMjQaj1UmAvEAGwjFsgcdqL2znRdwhp8nGzrD42BWjWwhFfQBwmv",
  "key28": "5JLy6tsSGVxYkQuKxYx4p4wttmtaUAtH5XwdjWUka7XVEuBzWNbLNVZzPCfs448pUG77s3v8usRUHchLnPqtih1e",
  "key29": "hwDqaSk1tQLHT4WkYZokiCrikfoQ4N2xoNyjqBmFS8r2KpiKjgjc6t7Tx5tADPEswmP26qFCa7ZU7uwyVs9MH8y",
  "key30": "5tBxAzGX2BhuJVhrfrDG1HsdnqWuMj7fqz6QWQzCbqSkNiwzG6iznC55Y8Vy4fcMhNLtroNKZ9YcLXT2bUFeBt6Y",
  "key31": "obNYm6mHdFscJPdrKdoHNar4VhN96w5wJkTLqvLC8227B1n3tvg2B44T45ZgTRs8nZkYLAK1RCPfiugwNdgXCgd",
  "key32": "3L6QjquZmrp5mJGXCocRLwHTe4RX1efSUAgGHnmtHwbmN3bBudAzeSyxiAR2xRAHviWehQPvNHfMCNsMzdYSUabv",
  "key33": "3uvJu99ua28Hpvm8aPgbvcjLMBPDmYJWH3yY8tnzoe2YFDt6qKFgMxxNv6wGZbSnSp7gv1C3pUjy5fVYEPEu2dQC",
  "key34": "3bLeHSEqztfczdoDmyQuZxmc96RT9JXDnnjGSAbRYhSLMTPVPJJRVgUKWQ5EKi4gdzsEzMhJ16fy53DEqKTdUMh9",
  "key35": "4aZoYW4EkFKUtAVHS7hp7mKZg3NjKFGgjs91qMqFBNDGytuALAAYdrPwwhV7MhcBxwLzgXLrksaxgUo4Fsk4ri2v",
  "key36": "5QELbmhJRCvos4o27SmZ2mc5qZq8ShzZ3XgSNLp2je1LgAKbBiquqj7fDQjDUwYZC72zR753iUHaP5FJaBhrQD9v",
  "key37": "3juVNNZkcT8jqCNJoK1Fdqy7XG4vT5CEAoj4extk5tpBqHTEtRsEhqmS87c6yH9RD229DJp2rTSWwPrBE9VznQRs",
  "key38": "GjbtgGSRrpA2T2dpnM9349WDvHWCjzjKpLwWufUTVijD55tBxNztacTz8AWibtBsomr7FFdxfVCLpQv68smebQy",
  "key39": "33wTVawR1gtfiCu7rFfjD2vqL7bRXptV2vJubghxuLDBoznokJvGVs1iww4xf4o6Ni9zCJkuE1jweHuTpqFJaKPK",
  "key40": "3JwiUTXWRxdvfjeVd7qEHmgHGY4bC6EZrWV9zCXSjabeAUodSu9cQ3MBaWhhEgpNVGuxN22BLMJbK5WiTYq3aHE1",
  "key41": "2wmJtEy7dxiQkymrdrR7p5XikTu1kzU5JAtbzQbZDHEf7H73a9zthK8E1LMAHVXm45Cqivw4vvZbhunyowpwjRd2",
  "key42": "46AVDzHBjhSFojEqAYRKhWMpFFrx2Emcu53cUK8qZFf916a1ArM5Mj4GwssX1JrA2SfxaZKhY9CXaciVff9zg1Ea",
  "key43": "62CHRXNg2asRpGSD6Ui4tYGxtsY43cycoFqiRqvBBngTHoysQZexXtitP2A6nUBMnSraHZszB96931ehAv7zN52D",
  "key44": "5VvCnnKoHVxuFeEgCocoeht8f6fr6qfpvNCwoVaRogg8a5CdB99k4JDD8x7cvWo4fEUHZtGmgxzbmTkTE97NT1Zt",
  "key45": "5xEotGmp7i4itkbtaeNvjo1fTKGdKYcgBK3unRcHpsDL6GCoPn3sZczNYcQQqnd9zXBnuA1ohzCkGdTmX8iFdkno"
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
