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
    "2pKxfZfGyxAgu8W7TbfHGD87ikeDgAa1USjFZ9wxcNZwSk9PxfkxUvWE2zBbmjdMrWwcCcUPn86SPhimQU5ESCc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "febBPP5iMEQyCWdxLJWifJ7Mx6bKZ3GDgGgn47V8JtHRjSVBRanTY1mRvNJ4viyrvhhnusCtYFoHfobVgE8KPEP",
  "key1": "5sySsQq5Um4R8Rj2myy3RZFjdspsxeqrtyADDRgPJbegJwmu9XUrWDr9wDwCPPWGCtHKnwrYTCy4gULcKNJmPXf5",
  "key2": "2khqky5ZWz4gdHANjc9TUr2o2pRC9jqAsjByTxgkvmWAATBAyq9oQ4ZS57BeWjaBqbWaC7dLQHnAxU3oSUFDh1EQ",
  "key3": "4hBFynzq8NfEPyyL6UBQjAT73n6WjfBstotx7rYnQJfnPhXaKxMzHSUJS9HM3ZvHD5pcEaYsUFZhgBDhneeBg4ig",
  "key4": "2Wz3uQihKKapGJaerZCg5LDzu97CCdZbd4ey1HFk3WpLbZ6G4Dk7WkBf2maf5AtVzBct2DJMMfC3FxgwNw7E4MKK",
  "key5": "3zvhQSVqT6V52cumGbVXGhaCJUdhmQ3WCMXghFXEE2UmMUQRjxyc2rhH6EqWBuEq4ErJqFYn5n1jdLNSs2kWGfM8",
  "key6": "3dATTG9e4nAbPXvN9V5G6BySnM4x7851UkFFKd8QvwHitDquy6VSuYdKKo9LotcnHBQEfKXfko653BVU122RuHP9",
  "key7": "3ZfeZUQLizKhvEffwzqQrScR35DHGrmciQ3mTsiQuFZ1Qq9CQ6TA86SrjN5jbVtQHePZ7y2cNu4wik7k9xKSNLEW",
  "key8": "5yTTWjBM6vMU4uAEEo6iPXssYHoQYZDD3W7Do95QCqWRvn5JZFuRsRdmLv22F2xttLbpUuedPAtotSfgyKWM9Nwv",
  "key9": "k9WzSs351wFVxXdivwgZ9qBxZ1TCh3FcfiyZq6kGZmjCExmcvEYLHpVTjhFMAUCqiVtCDhABZ3excTAfXGLo4S1",
  "key10": "2MHtrt29mVqgwKpXq2kpTzV3nKXpoSUm8KVr31Xsdc6nED6urfejz3XvANMMUiHQParQNnsggrSBcxq6DPagFdjB",
  "key11": "3TdbvhJZkFp7wiY5ZQUhXtNsYkjsUcDhoRnAswfzPnw8PXh4JLhWH17aeNGLvDnApP5ajPQcBKTbofkkFG3TQuUm",
  "key12": "AQGP5qM7CJtanh5cpwXKm1EGzZDjEGEkdJzuCVSxXMFWoxJsRT9cpzfGrszVhLJNYriWENQajFXguinYyZvRNZY",
  "key13": "5X2VkthJgH916w4vaHS3VcERNXjNr4FowkZf6MqSSKsZiC5MNr8xzQ9DGDwtrAktCxJPEMXVWspQCS37w22GgiQM",
  "key14": "5eyxB9cH8aJkfUDDYFZgEhAtYD4g97NrhDoET3KGHS8Tr9aGnKpRhkmuCPTmqtt9bP1NvsmNPfTCXT8rNM6ubNLP",
  "key15": "67ZUmx99JtiipXwf7A8Wy3jXtFH8AgxJ7mZFyc3knbAzpjjY3sDUzEd2iNSs9NcrvhXjLYog6jzL23oksLymPCD2",
  "key16": "4LoVh85dDjCzChMv95UUxbYuhpRwNFTTWXYFBZBh6suavifAjJ4rmjrF2gc6EQdUF4pFqG3UaiecLpnw5kDJi8Gt",
  "key17": "2en8hCjuLqSWpEe2atCnLa1W9hNvG3UVJrMqUJeGhT8MdDx7EjNT8pFPCMZhTJsAyyQXDgEnV8byLJRAP5BCeJi9",
  "key18": "5QEQGUTG4LCQYeYprfvZxrB2A7Wc31gFGuQ5Z7X9CheFdxVmkkDTYUAywV2GuHJeKraCNd3iB673yuDrhqsfW7nF",
  "key19": "mQbJM1H1ce2xwoxJkVQRqSNTCwAGzye7H9hAuBFHN3w8YC6F9eimiSo7sSM5GguHfANB2nvp1R3NUcJzk8rU7Jw",
  "key20": "3QZygSD8ds63va1xtxpp6ijWMTt5E7JEYdgSMjbC8DxKYg8bAAwaJfmpid8DRiyhPCwLeafpP78CdATg9N9BGNgB",
  "key21": "3Pts7wK99hyaq6b6yt4PQQAoh57L8KE4KFEygn32t8yK7PjNycVTd6XCzdZsLSzFDaz2pQJtgjJuhMd99xUshaya",
  "key22": "pfaQyiSoRYWCDXjNMqTPVtqcvhJa6qG28CTKvPdxHkinUQzo1d9FgcFQ3SsDa7T62Z9pgzvjz9bFbnMUyCS1dDN",
  "key23": "2a6tWVtv3jPv59F96ZysSQU2uKCYeiQ9bnE3cq91DdzFif7gGZmKSw78WtGTinPhrixmvB9A5t2QPpRKG72GUiDS",
  "key24": "5SyigTN8uMzt5hFWeg5sF7NF5Vd5QzwR4fZsirdabCoQyUGr6WGbgTh5MBVWr7N1gwqG7qsqL8eCdBCB1oXjmUFQ",
  "key25": "61LTgBZeExoa1CmtEA7vMrMTVDY4XmZKNPncDRbAf8nAJupaxfffUThMuKNLBia1z8q8zTLNjxeVTk2oSe48wju2",
  "key26": "YJLrXX3EXHignNKTaPGPgPHLWsyap1S8BcyV3ARS5q2RhiekDYPJV6Gm5HEBY9tosk7WPApFsKEtQ81X95HMVyS",
  "key27": "24nbwPnc9snmdocNGf1JXCn2KAvUBbaNR4CScmkbyzt6ChhynvDX8N9CCWVa4yVE6KbV2MrGFacEt4EiJkCkejZH",
  "key28": "5m1SkJ8ZgZEV7MekEDJnRW7rynTx4TgccKv15uFb8FJP8GhvqJSwoSnM6sWhz19igW9Zi8BiPVkUjFh7EqffasHU",
  "key29": "4gjBZLz3aAxwSnPs1A6QQoiMg5XKNcuDA9yaNUoL68PYHDJXiSSTpBbxefZVT7PzWgL63ewgieCZiE6mwvpqGVC7",
  "key30": "4nrH5joSNzKXHuy96ruKL5xMhTmNmfEb2tHU8A9U6rwhWY2A38EHE6dyF87tp4AqFjFc9GGcUVfFALwtjo5xqDrE",
  "key31": "ZjMi44BZvnHo5scuQn28kHzuus9dtRGERgt6kvihXE98E9uS4NWKG4dYbBNwKRGDAkXKd5jVBauTzDJoy8xbyXi"
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
