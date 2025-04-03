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
    "4eLcJewf8c4f5bEPGtLyc5vkGiBLTW8pD9Lay4wswsfMTvcUzNWVzDYVCEno7zquosnmZd6vAkYTrE3ykSpLTKko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvvuQQazxCq4Uo9GyW5FGH3w799esrwKYZxmDkDHDTP78E53de4x1oV8dbK5CdvVFjmRHitL1qMxVqDrDidVqT7",
  "key1": "3BDdZG2gwU1pDChojemS932aQ8vjZkjsMsiyCYFL47vNsWjRr5RvSuwyGCBCkfGA5hJ4didVMmgaX9TLEgUjqzzC",
  "key2": "3iaypDev88gHoC9YeyxQFnRBJkV9XDrm3fbpZiqwjz9CSTf7CYgwMMRj6cSKrikf5eJtUmzh2uMi7RwnrXf46ceH",
  "key3": "27FRemQUMYXS94yVKskjpsRsHkpn88HpAVukAuMuHXpyboNnP3cCnDyoSUncQfEKLy4u2jgAFUJVVkDnXJy62Juh",
  "key4": "3oatMBY9YqYishzvzK6iiq7pcZ1fvuEp9T9Z75wmJVomxffwmqrzf1UuJFQt4pV1auArAPw1xozzHEGJi3omMS9K",
  "key5": "3k3agmgcCvCVo4atAq1esPy9BfPBwRjMm11wVUR7wDyxokbYqevBq6nenLsCGpxYiJ83wE77hC3hjarMf4i2WuKN",
  "key6": "2UoL3ABXecFFK2JJt6RhaSdXjZE3kXtkugjmQ6heKMeew41W9ixhL51RhJU8XtCiL9KUz9YcJSX5EapRAA2Ng6hL",
  "key7": "4S9gdZUkYzxFqEeYQTwsR78TiQtkn6sB1CiKnh54ADAKzXhRSCX5XLsYfF8Bi1mCikuFs2pPhpiRHfjaDYYU4yBg",
  "key8": "4UgV3L7BLwnebJaTiru4VwnkSxyWSRaqmzNG3eApvtHiNtN1MSuCxzhvfhai13BoN38QFB4D7W2LP7dT5c5Ywsmp",
  "key9": "8KHeuih6TE2qSyVGbD8xhLUoEGt1m1vqU7W7vtiYYNTdxwZhc9P2n4ULNSV1Ky8wugdEFbU2wWMt8BLFgXDMpQA",
  "key10": "31hzXkLGzWUAFGG3AGVmgj4BQ5THw32u1arU5KUYdvCD49eg7Nj32MhgmvUZJYYwX3Kdh4yHFJr1tumPSRW5o1te",
  "key11": "2Ahp47SqiYnJtvatLmRSwsqKbc4nnyyHGSGw7LLeRBCXJ7zJv4a79xUkiv5QR7ACEYernDk7QhuAMH5TWBYrz33L",
  "key12": "5mWoutDYj5ftaCHGhcqxmiqaaZqzSXRqXZdFMAPcrju78DUoAG86i4jPtS9ppXPpbJgcPNG3JF1n7go7B4F6J4JU",
  "key13": "3Q8RBHxUrpTvdSPZsjfTxBUx3B1yPrKrLhQXwiwYVBr3mgjDgzBQz8gD8ub7FfopfYVLRN72JVMhFUGMYVU31zwR",
  "key14": "4ipWnbeVEb5GW35MJRWTLG3hAZFhPtUmoC2Gp7r3xz5chcG3B3MkS9P3q4z5PkNi5btvoFtL1gC4S1p2m97iEFc5",
  "key15": "2cuwdjKpm7UpTdmToVv5jpLxnfU9zWergHDkQBwYLWmWRAySUEnzWwCUEP7TyCwn8jbeq45yAe8PuNdh59kQjTVo",
  "key16": "4sRRJcCgwXAY5yNCSrccozHnKDMEz5bMEyhHpZCGoEapkGHDYqv4zkpXL6b7GF8kXdAxdPAZfr6Zx7wcsYsGACAh",
  "key17": "256HcfqZjJFtJdddjdS6xTEkN6btCfz5vinLaSwWtQH5CpyqLZe5JD5w2sE2jiVv6WSMx44orHyCWZwvrPRQDve1",
  "key18": "3qDPvQNJq5bSDvEWu1hkxZqh5hesTxf7Z4h978RhZPzCmF3caJmhs8JfSrYbD2XjxikwVYEPomzFUFaqoTuTB7oX",
  "key19": "55HNA17XP6XhNAkeZFcZWbSzqU9ASufYwi6bTP5eucEAFhsvWR84QDqPfQMgYVdrnc8jPkcCUGDxvjDZ4o78HXKy",
  "key20": "5i39uxcsfJZa5kn4TJyXXQwMLWfG7UsHn45xuG6vy4mQ5oPWfEx93cPCYkP3PmKiKXKBzZezDBLjBUVwGyFeE89e",
  "key21": "2N8G7j435fAhmFeYrru37sKuwkbYXr1qeC6zYL1Mg2YANiSG8Erh7WBrX22pwEbvzut8fNrXeJDRnLptA8madCis",
  "key22": "5ELqHD3yuG8oJZSZXZG66KzdQr9arwLQZ19vrErCz3U5omCwaCr6J3bMoy9ddJvc26pMLuiMTQS2m7VX77Q7hJDv",
  "key23": "4HrDTSaeDmej8iQucx7wTFgbAY4ftWgpijaUGjez5XsAFCuDJ5gU5urbV2mGt7QBx3SykMJq1tCGqNHH1rUETWKS",
  "key24": "24XAxBxdNzszSjMebgCaf6Ko23qfW43G6na246xpfgrbCyEePvh4KHFYCJKJMdqPHUYUK3tAXdV6vQbpZ8mUVw3y",
  "key25": "WPPnGf9ckdDyTw287wuLQcoZ5g5ZDqfgNp4Qoz3AvXJFQq4q9buYKkaMigK64j6GXKsGXYkVBBUfUasMjw6jBQX",
  "key26": "H2q3ocqxnnXrwK4M2ZL9U5h92JfN61gouedazicnxu8QLJz5uvzHfW6LVM5gYV93uMMxWuFyvdcNQFpnpqB9LHc",
  "key27": "2wYAEv64Fda4abWX1qSaBnbq4Cmk5AtUp35zs8wzPCWMsJ5c7JVzTcUZJNBGoS1nANULfsXiGYbBn96e8nX77VJi",
  "key28": "4WF9MwUgHkrf65zNvpg75eL4R5p3egTEnFNcbCtPNcRUxkaEzsjr7n9WpV1wdVy65Y9N8QvWb9Ld3vCuiJWY6kNs",
  "key29": "4nfmwpq74fVpXCgH22rikW4kp62vCXrAPa6CcyfpXgDhAAU2CaYbQo1vuHYynEnfeGhwjXu8JUbeiAPQCpmc7gs6",
  "key30": "3WzsJ8xz9uN9Hx1sYedU285hUGrFhSWGVFzVRbFjXKcRtWdqN2yCnVv72h5wCRDDdCJTgPwDPxt3WpPD5w1Dqb2g",
  "key31": "3QHTCsn1ybEY6Gy3YXsq8reahTUVecnCmBxEVDetzXyTZ4ChojLw6v599daNE6LXCQQmL3QQLZUMo7EUeTMe3kUQ",
  "key32": "4hetReT9pRif9nUvQ8YGZHyHcriBh7yiEvPr5CQzQEBJgERKFZxvhwZC4Ycu65gNwc2TQhGorAxwiiPHFvJQrcrX",
  "key33": "5TCkw31LZHTPLL9XGoifSUxB78DVD7u5cTAx6ayYWzPRxTziLbYLQEz9RkVMyFgQSx9uNk7zWvwcJfJgd1LtExfL",
  "key34": "2i11ekJX3SGRwnYEdQS5mKvtGehjCzS2yAGSNUNu85GoHTYcRHBUqCbbpMKepyrs53cSct5ND1PgyozQEvTmi7UJ",
  "key35": "2PH9YvjVcD2HhNNW2z2jRMbLSvJFeb5wZoyVnf61dx7XFjgCa8M3XQZAqgwmdntnSUupeX6m3A9cpkVvXaTK8Wsq",
  "key36": "mRVsv7VwPHNRHCcwi3E5C8jNyQzjLWpcdGvZwdPb5qvtYZjDxyQ5pwX89yHfdc13eECbKCxPx2k2YWa8JJgqQKC",
  "key37": "2sBfr2C7fosLH63MgvpC75xKktw2HTMk9uAXLpr8QU3VZ7yzBV7NfcMNF8vuiiXQ5B8Er7T6sbHkxLjfzimG7REK",
  "key38": "55cLYu1WGUTkga9VemjNaaiP3fEVxm2h3F15EUyqTtHcfQ6LnZ8apkFWsAgwr1i2RKEZHh5f9DN7eyuuJs5gCbgo",
  "key39": "4nDzfqDRrkMtUwuUfnxKsG663v1zmTST79gvH9C2m1UsNNerosbGiojRhJrejBKkvQCiahRDa6NWw9LRQwwkSDL1",
  "key40": "2REQJLVdijY4FdWWDEhWfbbGEiQGPFaDn696wcY4iPgYnHQ3TksRJPGFSmxxF6JPQUhLdWfeNU2cffvwHSMJGgEK",
  "key41": "2hJUJMMgEbEnNkm3y4PYL2x9mkXLp4LERtYFNGRFkYZqT4xDr4jc3ae6r2HiMu6QUDdvkffMc2s6fgyzdMG5mM4v",
  "key42": "iw1Rxyi5K81GnqfQ1QYj1NJ6P3AB43N1hQJEQs2MX2gjAjnS8EYcwvPSfjqAPozT9Bd7jUqD4eP1Rb3Lf2GN567",
  "key43": "34xBUBdcHUchudtpcYvabpXVqR2dxZgKCP7ojLYpesNW9Pi9xXuhnpkXgpouXY81x6MTVQz4vqB6zSYcktDBpucy",
  "key44": "3BAfQgBEtXQnFNZarSkZZgdA4woskSBVjf8j7vdNmZ7ZwdykU89XVLFttnjw2SVdKjHMoiC8hP6rm1ShnNXAQiQa"
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
