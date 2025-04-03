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
    "6A9b3yhw3rebcKx4mCGfwXuVLmrENgi91xrhwUAAJdEAy8PH1YiAedgEojU4tguLbB4kbvukVj6KhRV3K5uJG3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LoBDe4i5gFQ4dDqdsf22TKcG157iv9WowgwqtbYwQZrhwzkVQC2T12PRK2KQH9zJWr1LnsVRtB1DNng8m3Yz8W",
  "key1": "3tddYY9hYTfi6Sbqpev3E2PVrD6nTyfNiR5hJbrmyksusK4vQu3VV2nu8i3gY1VuR4q4CuY2M9sGWnvJPmwYix3m",
  "key2": "5FTQp6EBrZ3xofhw3nEgjKHALyG868BwNJnDE1rNb1dWpdjNtiuUUY2NjQ13ZRA7CvKMLdAhWx8jZppHG1D1doXX",
  "key3": "2XShrotoVPXR4qfDB233g3kGjGvqDmKKmBYgky7UEXYxqyJBuaUxr1TJP2dfmQKgRqQVZ9gb2SGfrTGn5oc5Byt1",
  "key4": "dsWqRND2aY2No7zJ6vjzWVFFssJPk4Du4qUmkqAvDn1VuLDJDT4fwH3FmwZkBYDKmfZxcAXN2Gef7LxGmah9RiY",
  "key5": "2sFmJL5FkPKuj8Y51Ru6yoR5iTHUXQzsmJh9mhNneJiYfZdbvP4oGQKaBEmbWot3nLMUDMii1XZdh1iPxpJ9txiy",
  "key6": "VqY4iTfhyHfWPQwGVbZgqLFQ3Q7dFsvEwZA7FSmXE9ssSE5U7dtpnmHpdv3VY9xsY8KRf4QA5sffAFFsZDE3yCe",
  "key7": "5qFJJ66R6uVssJRhiLTZuRUEq4orWnU2KqM5GAPi5vsNEeaVZ1HYZJKqhsFNUiwXSmdKbujKgSQm3cXQ2qiNiXbU",
  "key8": "NGPvXn4HECKnfZKWmarXu7YxyhnrK4sPUFbE6YPvixHaZLELcGSkiwCu9B9hKCMofz3TjMQWwRnB5EjQFHkRxdL",
  "key9": "41GTj5MznuLNQ6bq1T5qu6Y42jyUPDSWuAMAJLXCMw5Xr7dombjXqDFJDsh9zjFuvEQzVP2uL7EoL6EyepRKHir7",
  "key10": "2XrhSCYG8WnFT7eypyYkni9m26akDbstqRbiWqJzeqim4n1oW6fBXrDec2fgNoD4nZngJD1ENeMD5fBihTPSaU18",
  "key11": "5BVRxHDRUqowzwfkN3Tcug2sVLDutVrskz6tcDdhVp7aYsgNnNb2aiLPQSn8YkaV4msQgyAJhz1xaUkG4XEXk878",
  "key12": "41DcVAABscSSYXMjVZg1MLPd69agiJmpkyq9gW7QU8k56ng9ZC2oRKKGJwqymHzbuZmXm5SNVXseRbAzy7Fuhzb",
  "key13": "4vZB8PsPc9AWNr6ScjFduZ4nvXiEt1bpD2Z9wMvPjNVMMsv2rSdb7R4swU4N1vMNKEFH4Vcki35Q6YQVxmxfMngF",
  "key14": "5PTXakvjH3XPwnCCTNwc9CVtBGz7bMDmYKfBvuQDUT7c7KV1H2SBrV4ABCQ9VaCPRfsrSRLSq9wZpa4aNZEcuMWJ",
  "key15": "5hNFAcr3Sx8zRruTmcRcEdjFHcKqZRHKZj1251MVcDPbXD38n2ZMTREoqUE2fJtyqVLrWngNEvaAynAMiq6qwF4Y",
  "key16": "2aW6vRDbHrhYbh5XdzNU5uoffKRrrGBYv73QC5X2We1hYR99919zvQLV8TNfG5SJJmsiDgncRuJ6enfP3yyycTUq",
  "key17": "r4hYfqPNGbU57iWEv96edPLtnTijnfo852THPz5W7M1bjmXQ6cV6gCZ17AUJaNDBDShMtosCXPaLspDNbLX5vUz",
  "key18": "5zksxzrUMAL5Tf5uifEt69tvswA2TBfF6n73TAqUA8SHB3EHeYsUSKLVMJDWqPu5fTERVf92fFEHko2yEn3ps3Es",
  "key19": "3sVP4Hmbj4362pYpijqwFDjGzuETTikJep6mbz6uCAWUVWcqvt89dz4rxbdHwCvVBXcakmLiGWrvCwJvWBzrFYGD",
  "key20": "4Cz3ZySowKaYzMiMNjbCe6wmmaEFGn8MmqMkpbGfrJy663qDiyVKAR8bvzZooVFJiE8EG9DQ7rTJF2vDWfLRFWKp",
  "key21": "67Zzc7UXYnKWrSyPeGbog3LieBgR6eN95J6cSvrNKcZk5SzQBo9tHaxJ1RXMNQxMCaLJCZYBofJJjC8Jxs9ZMbbw",
  "key22": "59nBy85RNVWt56ESW62AZ2oBJrJV1TzmasHaESNTck9d2mUAS5KmG1dW724tSuAKXLDezvH5HBhX9dURLHyqkr6R",
  "key23": "5SqzUXjHMSPWjHUtW12vvEtL8hB7rUgF7XkQxgQn6WFYLLsAReBrgwxk5m8sG8WRtHSVAfPJP8bvWcjpVyspS3Mr",
  "key24": "5g1tBvfP4asJUs9WpvvgErWQCj4i9hYS72y4TDkVWoB6C6KeS9pEmTtS39nQE1dqcbyFkyLHY31EgTELYvEMPN85",
  "key25": "51kJ4VmfCGFArVbZrW5VXpFoWBw8jojtHG1gQRnoV3y3Xj7DESMJZc5i4VzqDaxUos99s8nQ9GWqjmTbNVHWqNuq",
  "key26": "29yoeH9TSjEvwQBa5mQWQPN36GRMSBBxiu9DAUnMp6c7SBWnKXgCYXRD496hiy4KQySerpU9anx2Ki2x43VXUiEm",
  "key27": "CPPWKLYCXgNc8SHvatwALfQmF1Bzt1PFL64i811CmUwqv4jffdTicZ5kQLXoGP2B4KDjShy7ghBKbbym9jdt2sA",
  "key28": "3tpZebbjxbWURwBdci4L3g3dCwcnPmCQCcLGXKr5Kr6RWKFueUVnGUnKU8huo183B1hYb8XQ7NjQS2CLbnZtLFCk",
  "key29": "5PPpi5V6KwDPoYAWopRwCfSvF32f9CKB3jk1DubKbBHfSVWvgWFoduYhnhCMX3yFEoZXMZXFu1qJtd1bmVY3eJcu",
  "key30": "4cvLtNiqtWXays2UgGJQCeoaTthWWydXrPxCA17W5Z1ZM4WVTbVsDKQ6xD5VcxWRFkudGAtWunYBfnXqgvPgRdTo",
  "key31": "4GEo5MAqKXCmCrhURL5Ft5saaDSGbvp1QNTYpXeoYzAtr7ndvexHA3KxBXXd8jbBFGJsBwYHBMNtfdHDFbbo8pxf",
  "key32": "2QtxZd2qmhqB4C6eVbbPHJ8AtPXY5aUuySikBSqe5FwfDtmem7bbtyWYfjZdXKryoHrJLmtB7CBU6Y5EHq3aj1FM",
  "key33": "3wGFHgTuKyffpTfTB4JqzRZKbV2UfN7X4iQgM3sPnfDK9z4FpfdAy4LWCx2GhKKqHNKpoiteE9oEw3sBFMtBVZd9",
  "key34": "2xJtegyDtYmAVrhmmdLSQXG5HabFGRUPdKTB4bo7Pje6pwPxqhwRiyKy6XcNM9AhMZJW2JmaA1SLhQSYqdFNtV3j",
  "key35": "39SRJpRYBFxNnpEtZtwdacUCbizqzstdQ4FomTy4W3ZiTSTSJesYYeNi1xoQ9E3kDuwEt95TyVfZMVndgZJDJr5Q",
  "key36": "2r8c6ZQW8tRzajCxqgGWaLVyMSdCXgHTiHVLJmERUHjcgunWDqp3x5gpRoPHJzrFav7gK3mBRXgB8XMQFBZSbm4r"
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
