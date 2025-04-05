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
    "PcrSrMsGGemAYKhLt3niguHUcKDwC9bVFBFymdQQWaUyrMYmi4mGNfH7SqewdSZRn4YZvFv5gniMKe1QbxY1p9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAi7gLq3LhhcP7cgta1SFgd3TKuyXiHMY5AZ8PKaJSfqyd4PatrrzJYDJp1vKVoyLDvquUoNDy37tYgBEnczQu8",
  "key1": "2axDNesBKQPQihfC41NtzewATRut61ipytiaeNnQWGeTZwgoYmmDxVnUVT8QtFsRo6Aqhbisz3fwvT7dQ3ntr29M",
  "key2": "2fYiqdz6bUU3Jg3qsDWvjyN8dYzhoX9dwF48sdvm6S5JooCs54iXUhCcwHsyiYS6EfGQApBeef95dResLyQgW5xM",
  "key3": "43Thaq5zqzRu2RVtPC7FqjtukjCgA1Ho7pPWNyoR6wcas9ABfjyYKXknFsmGrGqk8LJKvV1uqaYmhQ562HFazzBK",
  "key4": "5UduY5P3iEuFxf1cVGdgr3aTA2BqFoxYF5SPj5FDaMHaPjtE8WzGrH1KBdmfTe7eFNvkNhpM1AyphSwAfztE8CUL",
  "key5": "5K2RGJtRcDMcYtZkBYjcVzWUkPo6uWsuGDaxMd6T27sQfEWKcoYZPXHk8RPRb1qhCFVS2fZ9EdKmFufN545uGtjF",
  "key6": "4HafUf6uC7Tq2uuxv9N23rSRjxsxb41axHfb45RB3y86NQ8Vsm3XfjN28XQQihHwHsZFpejzbZF17T8QECb7nBD1",
  "key7": "b6eAnogxGM6tux6uFCDz6dmeyY2UXiYLRBVwaAV9Cw69R4JL3bEcvpg52ygEPf4zvn5W7mZE5mSFM2d1LxBkmWx",
  "key8": "3EEx5FY7T288qydtxrzfuPFQYjTofeipb6V4MxCGUmKQQCzwtUGSFqSNuYHmsfgvdA8z1sykrehsVhkRjSMRikQ6",
  "key9": "5WT8cgeTRmd5sL5DgnwXqx6woeqyQMdBDkyS2qTgtmVNqjXZed7Z9wvyCK7RjRiAiqUUdNnnuJQ6kybWQ4KjpF8f",
  "key10": "5okxWMRztDcGmfWq7TcJgN1CH894bVz78nToP2i9ERoSczmek4ef7zDWrbeDR8VVU8TL3qAHUgGFpUuhWj9RfjPG",
  "key11": "58iS6f32dS4cRpANYbzHY7TSDTPFKnci8Jy9L1SFNyb4FyDsMToo1u7JkA3sBmQQZKpRQLePZSAVLDkmtKgU36ow",
  "key12": "3Vw8uBhfMbifvkKQAmnvGWQ5qSxf6JsrNEV2sVapSUkF5asWWGDaJuPvN9h8yBSSuith83ztohkBmJjWgc2bfCTv",
  "key13": "2gwwAd2ghE5Zsj6VAc4KNuCFs5zw6PKtd99w29eXpt3rsLzXvdxgFSVnbteFwgZQdVvJ2whAmu8UQvw96XyYWS9q",
  "key14": "45ZXSYgdBzdgJ3bMW1odETycLW57DyA1zUjRqEu7osYiCfkbSHawUUQjG9SgtdUHNnQDekxLrTUD1nmTsggGHJSw",
  "key15": "4Fab6sKm3udZo5VzYQDpRawZrn37sJyWKsoQFKHPsT1F8BELAcMQzBAZ88P9G76NLWBh38hSALio7c1wRUUyxcmh",
  "key16": "27UFnCqpVskc98PpkxzHdJkd5Z97W4itp1uMFusEHWQ3YA8kprCFHtztz7z9YBRmwzmCTdYb4vJi61pbKsHWpyDY",
  "key17": "Qht5Hn27GuN98UbzdJtizvo7E2iFUYzVjPib941shx4TCEyHqxprEAzZd4ig8BSRvXMdEfow13mydd1BCwBwNKj",
  "key18": "2kzx3aQxbGJomroTgp1YHhDpmoV3wH5NB1khoMZGQUJPq6QRLKW6jM492BGjMuUhCZnSbH93c25co2mjSLL6YsfH",
  "key19": "4M4bQocHMr4xRu7dWUHF9rF4vXLPiSzYd4c5ENykeEADL6ALFe6VougNLgwCuntHyr8AoWcaQKA2zBqBBMuND1ZG",
  "key20": "65s3V4ZSXx18SxRvNaEMjaKSYBX3hHfh2e1pxYRT7dLnThgfkN4kyQZDueDETgsHoorwD1qnX4vGpdZ83P13tUig",
  "key21": "4zLaMzQz2jgEGWZCinsF69a9wgkh3yPCxjKyMnvYKVeVCouTFunhrbrmMPXT4GzBGjYC7Ki6FHZ2NsyPNk34p6qj",
  "key22": "4zBW1UT5U5r6FZ7K5nN3Yn6wbVFC3YiQ64bupuEob3oWNvUXv4namTt9SgafXvSQUMn8mhe8uSqM47RJMwoCKTN8",
  "key23": "3oATa8yGcMHstSP2kxYv1pj6mL1m5ijZoU64jfuRUT51f3tzU7GEfdw2puiwA7Sb78hjqcxBDuLLbVmWmfLVrJHE",
  "key24": "2NKpNn43Z2NgjWed8iLm9SnUe7xe3eZatmfpfbV7D3Tm9qZUNMy8MWH6pN7DGYxGwHByTTMHV6kekWU6e3PHL114",
  "key25": "rBGVeezMxb6s8UwYa7AF44pfeQkDvtBpMi1aZXStGnrbJ3taYrphJRZNjR6bDCPwRAcjg7vdNZaLbRqfzeVq2EZ",
  "key26": "Jg2WKagLhwVGp4BScLi69eZwYHWYVdpefnrCt4tVwfFAjxrgAEP9dddf1WdFninVGDvCgAXUMDbq7smkSrVHPZh",
  "key27": "46mEdErrZdK4eUsaNfftFyXZUkTn2w1PzRcXyhFsQTHpCgjJTqQSx2AHWvbjaJVJcCcSdVDQ7pDXofh3CLxQyyb4",
  "key28": "3wqDFzvggBXYoBetkpSw3kyQDaaGLgtrXWCjHeVr5TXF37fwH8C6xdELZGiCquKn4WM1AJEqKhrrMEVoSUtXzZrQ",
  "key29": "21CaKmrwcXDfvxSSWMR1HJqLPLEp1nno6igDpxUq6tQBhzEFtc1KgPZAUCWuufBbwUPSJfKYYiqrktaBoHnw7PMM",
  "key30": "5DxJHuTNiwanys6Mca3v6DkTR4sPqWemNBwvw5q7RvpB1ygKtnuQrwju2RHT7LVuzdMaphEXs6gRWtq2YA4iQXE5",
  "key31": "47inzW2S97K5pnBdZb4KDimZH5y5fJq4hMk1h9zDr1ctNPnB9bgbwT813TqHELPjjLu25dh5yzPoYR6dj2omguAt"
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
