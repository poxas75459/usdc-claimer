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
    "4igbG18RvfM7KN6feTGJ9bUHxwQDJD3ygUZNr9mRj7yfAZLkXCBokoetcjYqpbqXHSJ21UVEDcEqP8kLCdXRPfyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39P8nJfZnFaDXLbPui6h9xc6A7o2dhk4438UdyrrARVRFvoAu7NbUffaEsg3mnc3FWXEhdSHNSMMi9ZT5uwGqnG6",
  "key1": "2Ydr1uTEDYZZfwjhkZ1REXje1ntJi3NAx6sc3dTH8sjNWaEyF9WDWvFD6ib14dMdjy2NgbPncCtSM1MCUWooWhLT",
  "key2": "2WiVWFMpospjW8Fk1zr6hypH4sNUWEyNjRbN32YQATvYApRBCQddsqX9XkatTR8gMQQKchuYMHA38ser272jUXiF",
  "key3": "3L7fZ5aJXZh1dVVUwWWLVquK92bgx8BuGV3z3jSA3AgoDLLCCHNff2xzuFfguSrAxRLatzAj2dVwh1ePfoaxvwpK",
  "key4": "5FNVmu41kncdhzQBdwqZrPiypCBAmVNQY3fDyPcpr6CxAaKmo5hS5496FQm26tTAqWgBJ6rKkpnnQuZpd7G8MftR",
  "key5": "59crbtmcTzWYEL2WYH3k7QEjsW84ayVCPhFzgkirpu6Xuu7ManYT1pzGJDc7K7Urnn3Fc9sxnbWXgiHVSN4dDuXx",
  "key6": "31bEzW8E1AJ4o2UPGY9SNtasZuAVyPWLLUw6cRsFg3Mcf5rjAvD5fTMQiMJdePHSrjf34HzBygjZATtB3LgLv5H5",
  "key7": "4mHHvuDvwKo7sRi1MdTSCFnqkq1kKLFAt6j8GqM3UXfDFXQ5vuTgszUVY9fDXysAqUG49Vq4HMtPzaTT19HxGhbr",
  "key8": "3udBtF3rtaio1dfX9w1LUNSt3YFJgo7KemZRjqXWhowpeeeTi64M59E9bwJmt8P7mo329HWdtX7W8i1ABh2kirRy",
  "key9": "32QpWin8ooBuvqKGuM7T7h3KhccKYcUrovhoervrJLdwVXan2Ly4Jp15agnap4XchyZpDLpPa3fnLjarMZaosfk9",
  "key10": "2B2qcUYCKn6K5GpHG5RCo5S9YzXc1xGEC5UXPYVXAAdT5YhUVe8wB98uXXgepf66MrQfyGe8hEJxrKpPZ2kaeD88",
  "key11": "JEGH77GNrPsLe1gJGCVfFiNcYPWgNeK7WSMEQDtmcwJRzHYNYyspBJRrEN97AgwnMiLTeA9rhXeEQxA13Kvestp",
  "key12": "3r7qyfksfFbgk4Y4CyQv1ggm1vRCq53SpdTWAZ3AkHVc31RXrzAhCQ3EsdYDMXq4sqWKmSkysvEgHjaCxq416nhC",
  "key13": "DBh7CXGZkepACt14vGMxpYARvHwbymXbJzzex1e3CJvxAoX2UKxRvsMDLuzHfjg19ukqgdeQ972wrh1JxWLq1M4",
  "key14": "TtNHzDL2f62dnUbtVoZBFZXGodcJ9hZJfxTWz6GLFZpBVCAtVk5Qt53kQP6MRXBteSta8ZnSH5MesVEiFSjnTqd",
  "key15": "wHZYjibt2vLpbQUagU5jVAHMM2ZYEvm9z1jz4cN1M7unz3t5LJfT6DChzUYEddpRRcACYoTiSg7HvSDuRQLAS19",
  "key16": "27Ag8xKwoj7dyeTFAm3ApajdtVduTiWUyhSrFuJktVWcobAwnwm9pyMzbvgtBoMumFySQmxntqwo3idcjmEpthNH",
  "key17": "5CP5NmVrRw6k8REY6gzvDyk9aCNvBreuzQenEDQryZzuAGU5nsgLZ8oE2Yg2V7ieaa3SWf8HiiMcCKBChpvrM9fJ",
  "key18": "54aLWsV5voLjwgzbw6MWMhPRRx3AknS49uxNnozzbRAUyfU2mdHeYtWc2pbWLoUS9BCuyWKAF2kWokMZQCbxcbV7",
  "key19": "3DyoHFdfZM4fRadSYaDEyvyEvfEFHcEMpGCtzEiFv1RDNw52oukMHq12pJnDtw49f3Sy8JaYou9oTBqc4mCCiYcg",
  "key20": "3vnyymCKZ1g2sYHzKpeAXcGxdT93Emvnd8Xh1ohx64495U8jtsuW3LEpotoqQNZqm1PsDTAri3QsixA6gauCv78d",
  "key21": "LgQWfv2Fyjq6ExR9XPbSPPbtKkAhAGQhohiQkrZCGjz8Zm9AohQXjDztuq5XDcAm4k1jfBjqVzQGwE6sVZriirx",
  "key22": "5gYUEicAmQ8kKHsnVFgrAHZAeywZnfghRneLTj7pqmEQkMubUCamATGcdP3K5YrNJtyimxpwUJvh2RYJAQMViu5E",
  "key23": "5xAUxKbzN61m1zxQqTng2Lq1YrRGzujX44CNYQ6AkHG42dXKf1qMressidayJaXQWmer9kWQWvF1Ubphj69iNLui",
  "key24": "2cnLUfPhywW9o7MxCCiA3RAtZP9nCcAdFnWRJqHRgZBB6UwLFyqJiSp7W8AvfFYkNss467hvHC4XgDM4wqEoojow",
  "key25": "5PMohgnYs5PAc4JHCBSoBUi5uj3nHsuNwE7MVhJV5KH5nxKPaKKcpEwN1Yt4FAgiFg2G9uCEPCtgaW86BNe2kkaf",
  "key26": "2EXaonC9xkcYFAH9meBCPmdhoTyEhyr4qbF3pjicBH2G2PQEKWyCL1HBGZJHJgcFtazGmEJTp6AQanFeAMURDqVu",
  "key27": "5g6FDS28jywc5jKX5Y7GZPy6ipiWnQHi9GjWsT8sauYLRoxmy95MJy8izLbehmWwGmxPsUW4VLrt4BrELZL6S6Ct",
  "key28": "2HT9nYdbti2s7kjD5yTmP9JMBS7HpaXM2u3WmAcUdYPZ27nDJQ4C8GAgMLPgEi9sYPBQTCLgpZdXamyAYkAwHwf9",
  "key29": "2HGVE6E9y9cyU9GnjR7Kjrnea18R94ma477M41HpSVF6dzQ6voA2jrCNUb4NeNi3JYrBMxt5BXQhP3nXWqFHsn1z",
  "key30": "jJhwG6VeKuz5hwkxmyYTpRk1mJddP4kcwxBzsV3dwiiy5TRAnsJcbCYW83gSGqKP1WVX6yna4cEuMvd4XEemfz7",
  "key31": "5nPzKNkvAgghkjN1rjfTK4R3kxj5wFhoKnma41TVNUqsSn9AuSc1tja4XymVhPtsQCUtPyrcNFnUi8VBf8GggCp8",
  "key32": "4FwvQvuo841jrmz5fhoxxecUpe8zE3LHNQWxJv7HATStrfzKxHAwqjkMWB3HLFcHErZAw3AompEPpQJiouoN3VsA",
  "key33": "3XUjtJmM5aLeo1ZXo3gRqFtcDzzUPkkjoFbcZBjkyzmKhTUEZDGDi2dx5UbtayGstM893hPYxtjxkLgr9nEV3RSZ",
  "key34": "5X4E5vcGa8wA8PsMq5XXVAwodKB8L1ofxpuyYeFGnAN8wsznxHXFvNvHCzoV3rz6wKtBUo4CejbMPDwmq9YqCYHe",
  "key35": "oA3vNvEbkfSoZiZ1Pk4ivTu4xa4Sb5ehgMHHmhK7pT6Ftpniysf2sjf7YVGS5H6ntTXH8onbcc9w9GqycFfmJzp",
  "key36": "2ii69hGhvpvf4cnHdQcd9akQSwjoAVSGAVf2UMxgi4CVK2QErfXbfodm1gdxJp5K7MBsv85PJnr6GHTyd19D1xDT",
  "key37": "2nu1vYeAsV5mGypQ9GqZ2ggk2TYffgNUdtr8S4yitAJDL9WXc6Bujg1LWAc3RWjUcQVdKBr8nHaQVEaQW22NRb7J",
  "key38": "5f2pxogLaizVExyMvEusGig6Kq3MVuU6v5fUGGuWin9NV17SsS4wZnNdE7n76WP8yoiMLxbNb7ipX8efmyDCayBr",
  "key39": "3YCLMfwrgyUh1Zmv5Rs8HYCHF3CM3o6uc3nE7FWAxVuK2RabkgGkA9Fv8z82vSdoxxNttGJHyXnX9iW21dwu2QDr",
  "key40": "2yMPvbDRYmtN8tmvkoijMMoT1AMwyC9jwGKypmrLas9D5srYwafQEBV2mC8YvUMLMUXFTbiq2tfgUCcyLPZMozrv",
  "key41": "5Xtkkrta56FprvKXgty2mU1A2qhtF4t4jEVadgsVDnVnYgRnfHqPsHxzsnttwkPcfGd22MiTAzuAWW2SXUVLERR5",
  "key42": "5YgdR9eCLmnp7NCsw5ysqfm8AjY6BdfnA6qjwvmdSiaAn2d8GcAHXaoJsJam6JyqpDazWE9UxRAoXasH4rJYKBMR",
  "key43": "BjH8d5KR5YA3KZpCqNBU8v5ZnG39D1pszD1izuPQWgAp6pnwR3PL1pijDKyHmw7A3bYCnqRLhP5Bk2E9tg8Q5j5",
  "key44": "4rwGBpmcG71vL6mSDU8ou15jQegdNdhnb1MVN7yQbs3h33JyDoctiJit3WjTqkUPQKAj8nebqNuDrPE1ZgPZ1QvV",
  "key45": "2L6MG9Z1ycXLqwwyMtXUmParGLzcXyuJvMXb5hDBVqbuFwhbcfoimV6D7vCkFZDLENAGn6kxJ5EkZ6CzGcJt5kjf"
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
