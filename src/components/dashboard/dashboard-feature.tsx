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
    "2HSW7Zk6mUYLqvorP3AfsmFXgLPChZ1EUSEYa7YKWPSnTSKtVMf37iiRFT1rR7zd1T9vxHUiNLZ1fv1bUREug4uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zNTs19MDM8V3Nab9ryonVAtHoWCHDpKTtbLHgZnNikSWU4a5ruMcP6vfYJXi2KnamUa3f2gJajrt2rtV9RsNy8",
  "key1": "2faPu5BK8jsycPdZQ9BcHFYhkgNcJV2rJHpqHkq21jErcxahfJwTeWCF3LuC33BqHPDJiPFXQN6YXanEGfN71VL7",
  "key2": "42J4zPzHqyW468HNjY82FYHfczRRYrE5spSa9WwCoQVMt7fTKcjQZx2WoygfP9gTA542cQ6PfTZYCarZxMN79sRD",
  "key3": "5fU9ppPXXvZUa5RFr3ZgzmjXmdFMUvk2kCBPykiwNkkRCvu8tQ1pFKufMsA1z7fWdio63RvZW4tzDvdMHNKAV8RY",
  "key4": "4QHkztbkZD9CbEL3TWCPQ5Zr7bQBeLNEUdpDVHNNs4ge1Q48JgpjMGzYDCayV94mhLb1AhBnGMkL3jrhXQ7UsmMh",
  "key5": "bq176jh1CS46iUt5h1KNZhzeScvJA22Wo1qTfZEww7M9sb2odWEyYfAJGf1GUkJWbPE51iPMa6XX5QZYxkxR4q7",
  "key6": "3e9rLY1bje7FHYxU49pNL3ZGU7vz1NznggHApjEKugcXMEkT5buicJXn5Jf3goAATX6xhs7nMtDqPEVHhvctNrfL",
  "key7": "5DaP276PKvhTANDf9btKSXJSAJBPwRrJrhbi9oK2uZ7ZcMWrKqYR4oeQtL5b8ThvXD25Y5Bao6jSHtzQBWJSZiYf",
  "key8": "5hWtqsmqS6zPhoMyLo83zdDQXp3jC7pQFUppa1qddSzcv2yWD9PCks2NiAhDoBhTWxj6XdfNtDevKbdWxJgyXuNp",
  "key9": "2NgFHeiX8vYedpNjKUPdG5kjAH3UfsmnVsW7BzAQ9VgHpxGBMWpQpgcyA1e6ouBqnYfGwHUXF6qyDojTZYx8eFXV",
  "key10": "3wqmAP8hN5ppEt7RAqzZv5DkoFySWDZD83JU798xzqw8FtuCDtAbzH7JfFQWdbQB4VwbkXBH3vvEPXATKxC1sr9Q",
  "key11": "xDQUf7bopVnZrLicGhScyJ1ZsiTCyF1iNdeDmHXVoS5sgv4EyUSgmejqmr6Fupbk74pDrfu27RT1CEuTGcDuu3C",
  "key12": "cnWu7vur7W57DHEUejC6kXjc7jHGrp8YYiaPcTgew9T8P9g1YxqP9gZdEy9j25yPcJ16C1yrWzDS2exWTz7hQmh",
  "key13": "5bCd63hQbozTLerZgL4vocVVJV6ojWGosPm31rYiy1Nify1VtkpspJarsaiGnNN6EDLmk235SR8RJpSLrBoPJd5Y",
  "key14": "4RXpvjufTbUQDkG9dhf1kJJ3MjJQHktDL3F9yc37J4ta4o2jNsUuYYQA2zTfYz4sN596nKMueQi7nKUZunVqvCEa",
  "key15": "3GmiV6Sp5iyyXYqcuYRVPuaL4aZDj5Wv7krP2oRGMBsEhQwbSyejKZHg424Jq8nvw97hAHD9H5MN8zWhW3C3iy9L",
  "key16": "65dNtgrDxBBE6UNmXrSowh2MxmYDTHtH4tXT5De9g1N4rQZLuxkUdfr2Hxc9R2jujHNHidmKZEFpzs9ofjZiwzQm",
  "key17": "61iLUfZaGQnGUPk3AGeTnoXaVGqzovrT5iSoKEADB2LcAKmiu24QA441fVpfCzcHj3Ajc2tp4xzhvj5dqM5hLvHq",
  "key18": "5xnNjBRSwmyis6MxUsoNcnqdQQGS2HN1wuyfYYCb79jmtZYUcPYXAVgmQ42a74FKJMVRx1FgaYSminPYSrfZpX3F",
  "key19": "hTZ4yaf2WFEubSuEKoRt5BojRS2GuzSwKC9J6fiQn9synQ6jxh7jiCjXYq3bMeLHR7L3dQnrSvczT5YzKgq72sh",
  "key20": "fv9vL2ssSzqCyGAAV66Fxgj6aGekkcH3P4BTXmxZYpgM8tEB169mWJG5QVMaaCq4e6tNHWosYitm7gP2JVXufov",
  "key21": "4u7pqdVJAcZ5EaWV8VWCobUTAQoJAPgHMzZqCv39QgcMiHgKTeWNCCz1WAv2MEwWQGdQNJi6p9ZEfGwXNraJ4Mie",
  "key22": "4DuRePcCNw5C21WcmdVhhwPvZW5518nCuUccEE9C1euQon6ix1uozaGutKBiYzqQfhkDP9te1dwVh76HQgNNeLfF",
  "key23": "3zDnkhGJDkRNH6FwKGx4B3foWB2yZPmkQ5Lf6STv8hNMwTiBnzke1Haraz239aDNydmsHgcWa5CbZzPebVPPfewF",
  "key24": "2r5jSkJG6wKi4uf4YatrSwdEXrgKMFvwXTyF5ALehdGDqhK4arbQZQvJGY7j8qPpYtJzhXTMkFGvY7Lbs3V2PuQc",
  "key25": "5ngZ1dUvxpjevzXpZir9jbJkCXueCDRXjzxDdHWxDYfpq5UfBX4iZbpJwxJTDXPV199XWfidYVnAB3tn5KQunViY",
  "key26": "5opowv3snAD2aUAWRZSUvtiPseMN4o7VFYBf7nh4akcgvx3CnHbQ5WM77G8GKNEwbff8bjZZi2JQxYCXkYSrT52o",
  "key27": "3XCiUWz3qxjqb67ZXTmhStoY6uhqabbYsLmpZ5w7cQNLZu4yJkYetu4T3FPijtXNFSHvBFpPd3jouUkJojM5mu79",
  "key28": "2CTg8Y5m2QrBcRt2uSBN6VC3irEDu5i2PUSpAPCQrUMcRc9AgZ7rxj728Qx4A9fX6EY3ohE641vK6wsp5MSK43Zb",
  "key29": "2HZM1rAro3FM9PTNufA9upesjjWLiCABvkQ1MARzPbH7nKEDRkT36K2Yv3arRzvufKnMDtyLsVjV1tnGJPdtPooY"
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
