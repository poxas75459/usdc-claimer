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
    "3w76Z4J4D6u5hrSjkH91p1x2HEqYS9n1WsubbccdfoEhZbcq2mpr4Cf4ixeyU1CBFTeX4u8EogGkiPxgWNBUjULk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Wriv4nPmCmUBQkTXccGqC291RvVesQEn8nKwnhjqSgtP5tpoYzdLQJHLBarKFyhTQQQdHQp8LDqD4QqpAJVtPv",
  "key1": "8bDygn5bYo9QJkupuUVJ27Bv9NayrnPg7276mvcekju58CGinn2pdpyR373Dcb5NdEzsdNxKNGbUVa9X7pjFag6",
  "key2": "3CvYRKoY5zC3rvDCQ7ngXnNEmP5W39FD7pG1GhGqotumiq1yusTYgD85s3jw5czbgPfAHvKozkM4VhWe1ydRw2Cd",
  "key3": "t2XGwKoMdiiSa3AHr2o4ifsGKUjiyatU98nTkTU7NjGg54byrPxgym3zKe3nmK9MmspVeXSaCcbpnqZvJtmZLYq",
  "key4": "667wnqCnV6317MRv5YnspaDNc4MF5hrS4JDnAcht8ai8TU647MHWrmUGvXwAtUU4EjhfJ68NSkGkKJsP5osntzTe",
  "key5": "35A729PgLJpdetAn6zTEx6ovjYNPxq56DRvUY7BGwhPYtV7c7Qroth95YdkWjK6iCmhPr2ckwzy8qmif3Lqf6b9x",
  "key6": "4LYk4BHrmouPR3FyzfE8697YNo7YHb2tANjZuaXibXkLN4GRnjcXj3dZMp2FrCSU3bw6oP4QfeAGCCM4NaSuCZfK",
  "key7": "2kFdivcEGXDobZAmVcTmwQKdVpu7XFxnqDHXZMTtBrZc7M2Ne46hynU9U97BweHiJNvqGxwkvYAHoAp9XoVKxGq",
  "key8": "2DVqjfFx2XHx4k1kkgKRveWV5Jh2FVxc2Ew9EpLJhPUpYE88GW1pTc2kvcoZyMEERAfX7euJfvkDuaQdRz8eE1s3",
  "key9": "2ohwD9EvQmFobMwSL8wS1PMtfHjh9eWJZHBUKRGjMAnjGme7H8En1apoPDgvmPfTNh4Vyix8RvDJ34XhVJ5yhabF",
  "key10": "2C5d1hUqRk5Sy4Tt1Xgt1qraxVAmQMPVmd8igNmVcbiwbdmhNmsdvcJoMoK9xdbDVmbzw7wZmGHbnPmAzzRq4gZd",
  "key11": "3ZFgsBfryH1jLSmescECEULEeZmANsB7B76YPGqndGb3oyXx13cwY1AgiMJoS9nQ1qMeBGiQ3Nbe8DADCSn2Aar7",
  "key12": "66tNpWU3yBAB2aquAqJV4cdYny4FSFqJmUDgu2C1cZBGwtVRNKW4yvnYtqXGRznJmAZR1frXuGDUMj4dVo5S8J38",
  "key13": "3sXSubNxNYJGqFRLAZG7NnMWYSEQ36QqmhHN2d83bHbWkjd1vZBDHcfiGqAkiYJ5tp7osx6F5dGpTfb6HDVf397s",
  "key14": "2Y6Ky3nZrzEiXoS5qvpG9s8DkxWQs8dkPtmMBiW3dgYTgoTMUVGdxPzXnwKhm9ygM6iBPWXtPGBGDnseqhvmKYuD",
  "key15": "3YauHyC6k5T4tAxTRCpJPieWd2JdXqKNzbdMMqF3BsSi8ETpHounngeri2K4Z6tF1rVaeYWb3N3fPwM61WsvhYYD",
  "key16": "8QqRwky17AT63mgmpZmuz9v8DwDR565YqhBanJs53GMuhNnRqmuoGhayLSkBqHM9UAT6WcmbWQ9pVKiJB6GTAfC",
  "key17": "3dRETArVE19ZYHifLb6ui7NRGK95ogMfDiSoUtHqKVsiM9ySJD7REHNnJRxF8vyaJUqXFMVbTBQnrk4xw3Tsdxdb",
  "key18": "qJK7b5e75TVFGThWWneWffX4VQzeAfHzoHEwf4EUoX4N1q3SdEzzpmRm1uu6y2DJF91DTsKnrHcd7DbW5aJvUAE",
  "key19": "52Bs6ycXRTTbaNENUPNwuReMiUkZzRy3JaYzuWWdRmUseTWGDyvKJs5Sv2cXXAgHEsTNKh2k7Gtm9idpMS1VDEND",
  "key20": "bWRBmsYkq38T16F7yPaAqhfCt11ptS1wLdMrSrYj5EXXCrA4mU2UvApadiqGhSbPj7CWuZQtStjRSJkCfhrhNsT",
  "key21": "YzL6YUBafkBxJDcPmfZKrE6vtAw585bixYVTwvni6G5VC2WZsZMgwiXhwrkCRXwyoo6XWdAnE4NTt4SdfnrVmN9",
  "key22": "4viRPH8XarSyHn1Fdca4VG4CXe5ZFT4uTm9jRQL28zF8i4Jd2YeaMzvBRQzNnw4Hvy3nh6pQtMWin2jGomzKvHAN",
  "key23": "2SJNK6oWtiPSpXcgyDmLXGTqrehH9ppBQprDmCcZiGe5iGXYgzjwA4dXYJmAG6vx4Nz3C1WusVjbevoEKguQw4oj",
  "key24": "5RM6c7pvthNYuUN9BS3VWLJN5r6NtSh2TQRcYcenhZ6MJ75FHU2CpDgi1ut41cwVBkqqf6QP1awQqkbD2zm3zoMf"
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
