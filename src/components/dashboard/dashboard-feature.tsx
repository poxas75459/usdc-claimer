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
    "4aBGZtxJEJDAXGnJzy6bTaMiUtpegzLKRq95vzmcc11r9YMMnZBf77SiGu6vPijfu1bmWBZuioJ7cTgnym6jUCce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcGk81nRG3cyvfWVSw8hzNCXguKC1Lw9BDNKSwUKPk7CcAJp8NMwQKhQBNS4YChhJVpcQUkErVK9Ma7WUe4w4PY",
  "key1": "3mUtypJmbvz5cxNdjntmVZTkjd8fqiEuYViuqfddrmtoAdZihtPMgiXj7K744ST4RrvWWhNnV3NnqfxgeGyvMi3X",
  "key2": "UcY7Pi3mMw9C4LwX1t8KUb9Urt9o7bBZuySLBsj6hpAcmFd56j8JcY7Z6UMhfHT3rbW8ZBQ5wAkVUMmzR13LiqD",
  "key3": "Top7JjN4AHx97z9cw6BJbtRmubskWhbw4U9y9pXPjy2shMtmqFHthqkDJjoEgdwJ4m3txemUTkiptzpobzHPmpV",
  "key4": "6z5pfFAdv3dHpji8Pu32ommTmpBq2br9LvSDPcnCTGVXdVKJ83h743ZNcvM7yTbb7h4z9XqycvA6bMPjWP2DJaF",
  "key5": "2NPkQtwcfaS5KSr7SigKUqyU2cFYUfdhN9rgsBbjBZ5c6wpij42w6oq5gfVsiEyzypj8zmiWxJUh47bEuSpmQrKu",
  "key6": "3EfEUCoMrMysvdLPAcaozQPexg6Zb1cLBC7zrT7RxzRbamF9xB6veY4thtA6r6vLABni7Q21pVVR1r96eK6MJQKc",
  "key7": "2Hus8BQ6zaCkYNN7z2zySTdvfBEGqzDjbK93HnrREuHmB8Yq4w6pyVTvHXb1sBP5hE3Tz6M4ttrUsSE9jNjXEa84",
  "key8": "C7tAx1XrrPQ1rt3KApPT6peTtdkzbKpFL7sWb4fxdHZECjePsecTP93AKNvyDNXytDiEz7FzYRSV7NPuz944ht4",
  "key9": "44ED616ivrvrLrZN83pPSSf8BxKfrYazdztwumkjgox8yfv2NcRbdbNSrADNyehbFXj7WtBQeNz1sye57NxQRcZE",
  "key10": "3wRbRWgS9SWR53QV9bBAkrqXs1DxgTcfmbpBhQqo4YSsm5y9XGUADjBn2YuwRhV5yUMEJ39sHbeqwMkBVsHVthE1",
  "key11": "4KtXeZQbYdvAwG8TniHYk2M7ek8tb72tgHMQKFz3TZ7exTqjJDNbmtvAQJr1hdjQp7abuo3PDvPRXCTxArNBfW3z",
  "key12": "2Fc6CuW6Zeki64g81crwjPnMRvRJAuuF2T4U3Ubj1e7hsUyKieJjfr7EZmx8CNjvnxY6nbks1Awd1CDSMadt2AU3",
  "key13": "26NSyVRQ9KwjXNpR3rGjjFpsdJsGfuDmBdPG1is8JnZTqLYS4KdKXNs9VBAEhMPtX8rUXmkY1vfdJKaArfuYKo5Q",
  "key14": "66aGZRPcgwWbUqtpcS4VBTi1AMZHGRZRz3p6A7Th2GVwf7Dx7CcqKzjP6UNFkfLJEJZfinQ8CU5wZerDEJuMt5m4",
  "key15": "5KgnKPoC5BPGRjiF9kw2w8R61ZywgT9JE2TYEYtj8TT34wbUcYRszgc6Z4ktNJNXdgehrr83vyWUqsfphyFRZ2k",
  "key16": "5CQkBSWu4xXpc1JhKHadb2KmKoLhonsAHZE79Sksdp9LRPMY8ZEnkFG3bNNUMZM9WMqMfvsFVaxWEPu2DzBDmU9W",
  "key17": "4ApqetzN3vQy6hqH1dYtyjMuR1gx91MbGRQzN87VJNh3wsYSnNgZiyJKzzvfhFHngtCnM4N24gmi7Dpg9toapDRi",
  "key18": "3i9zRvRdvubSQvybJ7rwHmEAaLXhUoAh8UZ18pKYcXfbVd56Zn4whQfH2Tw9ey8aR3yUairRYY77TtwcTDfQ9aaE",
  "key19": "64Ro31EQVZMYANRDRcZzmQv3G7aWTfeUx6efsGLWzaavZ8vwYxUAaXqEDY6dBQFcvgEwXg3dJWT5Fzj4o5RdeNV4",
  "key20": "3LKq9U8UtbXLtJfdBZmVF5Z9EJubCj4LKruLqT2f3PebhGtm8tN58Dncv3d4C2u3t5rCj5RT5HakP6yzSF3bCLa1",
  "key21": "3dorqaB9n9kA45Cs2JyLDka4LTZhHuny5fBD4wwaKkcHnuKqchk6tX8phWzu2EpnnfhVZ5QXqRWfkn1JEAp4rvpD",
  "key22": "4raLUHYzNNh17KbAzSgPs1HjrCey2qiQYDGZZDG6E2CLjFELPrACFBifnRqToE4aS32tbaVAcAsWEGoX8Jm4V255",
  "key23": "2cinLAjeKCGSzWbPftKb4tz9fe3WjP1U5MJg1qWnbJys3NdvKWNSBUYSGRznQB5Htgu7EN8apiTzkZ2NxDiNWKbF",
  "key24": "3jGqXdGCj48f2Lgp634txtHD6EvsGaJ7YQVWkEnuBdkrBoaQfj197K7PZczhCMrHEfWkAPg44MFRB6AZAurhnLeD",
  "key25": "4peejwvoEyCHNAQthBA2RvMZ6s29pQiCgh1eHrCTQEghwnAfcRikYQwXFRS4gpiQCYWshjxjGvndEhZfoS6LF3Hk",
  "key26": "2Yn9bMeJZrNTBGhCDWRtkXvCH4y4NKsNXhiUK6GiSD7M8hfg8ABtBxM4qhexwqrbbZ1zqj6uiUh7zw1LLnAdhZJi",
  "key27": "3fvxSHhSkPbXwXK61NXyfg4vPhMXPa7FvxJ7Quky5sSi84tTWRLk6PuLSfac5q9ZRyytGFzwLNK8AfzkPks7iVXT",
  "key28": "3btjHUGL2XMWAMHJ7uoZ3TH6m3rc6wuSJ246U7aEmEYSVMqeGD7GzMr6HLJXvs5dV8MmZW1DxE7JC5DdZEGF1qfz",
  "key29": "5xSHf11m1mtThuofs2qiR9EiuaCAjvcxQGMpeR5uLXyEgCmTdHG2AS4B23j1n4WjUAkWNdgd34NVAeichp9jAZMa",
  "key30": "3mXuJUrkYckn5BBYjNKeEFcVr6QFJcojztcJa5ySm1BVGf8o2HMfPZHkXftKcDLfVs3URcWWtrciTE6LLVRwWYmt",
  "key31": "5vjZ7w1jdyRdFZyxP1icnieWsdQzqc5pS8B5oR5za3pjEaH36PH69WCiEmxLTU3xtu76mVhd7mALvm8cjGXKzTdr",
  "key32": "2Ed3apedzcmYU8dzP1BT2hheoa9rbaVzaPLMPEjG6jkUzJzvHqCdNW4VdtKqUa63cCHUTTtW969aqpMF752dnSZx",
  "key33": "cHLFr1szG5a4CpgzsQ4r5FjqmrWLLR2UN7Y2fh8Yw2kdS4eiW7hJtfNGyyMpBWDs9rCZzXdoBLbrumDojXBB4iF",
  "key34": "2Gy2wFWJrF2jUqRJ7Jwoe83FRqxdPKB8VqQL3DFaq7n494b7a5y38ToVSYCDHvqcfWXPxM1VVwgh3prFZJ2vBrDr",
  "key35": "3xGEzracEvbNDsXE3FfTbi37c39wvrG46y2gVJhxZvNaPkYwJdZ33y7UBWSzdBGWrsemS73ziyHm6zyN8f2ryko4",
  "key36": "grz5W6XGUPz4qANrK1y7ZToJFy3DnKCi2dDNqiFaCjeLpoARMHRXWszXSUPMxdx9F2LYjvDvNtbkGJRX5WzczhU",
  "key37": "4vLvs2mbQuRVnTPkR2D2haq1ukLcicQ7hMR69i1DwwfxXG4foTtyjZRysvk2mVbaiGcznfnHp2Ng2RWM6sGxkiYB",
  "key38": "27sU2eZngMyzLduehnGjWdDmRQy2LzZL8koCEL6u96Hs66Whg6XXCZNnoN761ukH1owaecAbsMJw2dS6NvZCzYPS",
  "key39": "3Tuwvv2bFt3yrnUe9fa31PAq7SRhxfby3NaFgQAJ9Qa3VTJKDFQ54CQtK6p5wUbLbvPcznvk5seM2xeJbLa6xpBX",
  "key40": "uyQPzD3WBXCRLbYMn8XqrCexpF7aooxvaMMYnx3dCuYkqPJgC61qm86hW9kdZwT6B1YBqdjN4bX71L8jn4im89S",
  "key41": "3Y3Zmk5iAFe8RRbz8kYPmBHBaxU2noxSxq54Hh9qh6zLBZ7U4FKwiNDEjrRfDEh9gWPpeUsTwKcafJTjSuyJuFRK"
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
