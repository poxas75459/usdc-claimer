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
    "245KJHn3qNfAh1VLjbUr2qFv2b8SHYe4jjNY8j9TNgMXnmKD4G2Pt8kgnrkzTzpTQjSPEvPX9XT8VvbYiReDMchd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f2emTsAQE4aKZvAJcKSD7QGNeXKyx5tsdMrstsuPv6VZyfQdjH7kQqJrtqMuyYKdzLNUb8m56ukDGwqBkiiVNnR",
  "key1": "2SursZq2JjQqx3q1xK7Lm1CLV7PBvRq9mcDQRgeRSzyVstpjEg9Y7FyxbSsnw6uzEVisydnRsY2a3hwqeAvdEA57",
  "key2": "5JLnb7eszqb3izXfKumstvb1wnzwUHsQrH2HuZNoC2TjSBaRRN9ogi9mA83BwY1AxYARmaZvDNFnNKsu8h8wzaZn",
  "key3": "3SWyX96nFm7ULSja3TTFsbehqBWYykkUnFoeNqX78myzVtLdDPtGD5ysjN7ZHapZg8YQ5rYyagj2rBpP2m7LtbbC",
  "key4": "5NrhCxkDkrABdrnvz91rKhgsdLNYpM1o853k99kx2pZp4mRQgnMhayFj5vBTPBZH9nuXLeBScg7zQvKe7sQ52ije",
  "key5": "35xepYVqtJWPUQmwrxGhaCaqLsCYzFyCzCoPKGgkEE1g6ZgjH7vr4AFoYpKzQH4WpmXHuqAr7TvrQyGecXVZXUwe",
  "key6": "57NqMDxVpeKiRm58v4L2cmASWwnqcg7K1EsNTJARtP8FnKkN2d46fcjHQiepY5wPx5dga8bT58LPcHjCkPeXbuM5",
  "key7": "2Uoz5a2h1ckHArzKsXBvNcKV1cbaFAz3mDmWZU4m6Vn7Bq3Bg4rpmsJu4tS1rW3drrDC7Ydj15LWaMLWYXrZjG21",
  "key8": "ZLS1UBHNz8pZJV9G5c7mdn38hDMyReLiKiJmf51sqBQNfovYbRuVzLxND6D9ry89zH6te8zqQWJ7TufD3cPT2BK",
  "key9": "5M8YnWrM9Z6xdvod9aMrkktiCp1uKuTd81CvdWAfYaE8Wi4obiEWLF1g2FJLfnWMPLy9ZU6qrn9oGtXwPidqXHDy",
  "key10": "4ijGQNwSup1eiW2JVgGLeqRxiYwSKEmFEh9RJK8PYugdji7CdMsWMhhGtN7Wkd9AQCrKX2yYPiekBudBScfmnDpy",
  "key11": "5AfsCjQfWfs296TatUFswQJh7ujBsQecy8Jy81qLLsGsiSLu6R2RabawMhWU28cFaREoNWS18UUvf1GVVykrVL6h",
  "key12": "5JbrpyNXrNP4ickA4mJPscJqMVpjHM9qdDVXjhSh6xxGC6WGXgaaRTrZjLueBH4CreyA8KUCHVFv8DzgCtA3edhq",
  "key13": "E1Wm7wekftrHtpdRT5RuHZKrhgdZVnMzkDqTkmGTdyCbxSDait4Bv89LEE3NcpVkARsxvn1n3enYZyX9RBbLWev",
  "key14": "66mCuj5AkrB9pf9NE5sys2L4BtdLV5NAXvRqxFPBzfsiBHfZf3SZcta6HEcXu9GzGDsSMNqbJrHnQzyKEbFx2hQX",
  "key15": "hQYAyZt7harXyYYrB8wm2zatp6Ur1bK5ApjedtdTwzQi5gCMfmDaSV5UoB4FHPDqjJCJgf8w6tinh9HvCE7beMv",
  "key16": "4rY4qXH1Hy4JPGT4uEXCJGEDaCnB5t7opiYVihK26H4d545ZCrZyM2kP95AzudpGEuaJWR2PRW9jvor7xnFuKSpM",
  "key17": "3FaxU9t8pyPWgbEtkoNREv4rcZmwvCF7x6arYuuikCCCGkv2DHaqMcc9potKGfFgU5F9UvRhkuSd8eqAYTtUJUNF",
  "key18": "2kSrxEcwW87yRiH1fV96sTpcFWM6ruCJcLYHyx4JbDx4p3m7Q1n7phR6HzbcZ7ZhMsjiZaPwNUW5UmhxXcNjZzBJ",
  "key19": "4sUqBZdtSWjbQdSCpJoFLo6yHTLs9mUXEJ7YZUqaXC43sT2USMJefycBdRvfLcSAZPFJS11X7K2niabguv9GQ75E",
  "key20": "3jaPGUCxFYnK8RoiB7jMt3xkkLWXxnKxAhnfwYiUttMCLKh1bPXpU1XJ7XBCzm6Q43CCte6siqaHxMyp1Aggc27H",
  "key21": "32MhokA7Un3P86cq3stABfTUH8WqrX2PNpahVwSHzZY9AQi5LM1X8gCwdo6K3bqGKNMNeWWNZmVmApAB8SRNvRqp",
  "key22": "49xkYr3aGhUQAtsjKJLPR8VSTFvck6FKwoPQYmRM7Fezc9cbSGEHufyrSB1gpUjEWz932KN23S7PfFwwafbh1fYA",
  "key23": "4m1u94vuV8ceXkg625WjETJhGyZJx7ZPa9u7rkxyYcY9BR8vkfpMMxatxoQP4CCBNrhaQPx2inqEaWQEi7DffswE",
  "key24": "4CbhoExcTKjNSMF4pN7t2cBxavQ4WeuyaP1ujNkLefiJUn4wJkkwm85XuZtPQZEojJdnVn4aqM9GxfCkJ9Q4YArr",
  "key25": "5piJtFpskEroVL4GYMWm41TNxkee8wKAZP59GHf1SjZDoJZFMU2MrbTDMzMACdxerZuWAtv2CUMfBDUXXe2WciVw",
  "key26": "3mWRvUFihxdRidsgpbnSNhV7bes1u2ZhWaUBGD6iC7cS8TQHxr9j9jm8QToubUYyv8wLDvGXWWgbpJu1MMuyX1WR",
  "key27": "43Brcd52XPwoP3JQ1aDbvYMYUzHVsckC6yXoheRzJUBc3G92NrYzVtJPixtTzctKwdWRECuAba6Zsx22DXDejrms",
  "key28": "4KpFC4ipCxYbJeduoHQ7ff4WcJDXrRaBupmC8VwkWAn1JHjAHqN22vpC7oiaJFBnZ4cXKCZXe8sUPbt9nzxGsWc4",
  "key29": "3CzS5LmTWuY4n4CVYE9MbNmgKLEQojrz3rkMPMZkgfKwsWsU6ozYuyQuLFLVytZp8f7xrCbWmqnJoxZPWr1NJ5Uv",
  "key30": "4w42wJTBqM2iZ6BrnLgT7Vz8CYDhLcsAZWqWnHv4YtAkTZ2VPWUjGx4B3HJVmARMG5V2Yfb3ywU7tUbg3ipdAQD2",
  "key31": "5GJCf3E3jw6YiGnCWsKVxBd6DhbHSUmNuxkbVzDVhxMPAZC9oUnL8KBJDmCcaAkhEHxZsJFQgB3QDUvxwoXcow33",
  "key32": "37S5QAVdoWPE6ZCAGBWkFzF4vAdSkc4NXmciKhJKVsepgDRqSVKNkAvKG7ThbJiCcr5qY9h3iQeu4kbnwvMkdHtH"
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
