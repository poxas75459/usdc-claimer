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
    "62957iDqVBXXYxHSEzAWv1RxaZDnwFYTKjrmwDmzAqFbhphigBovTJUiwmQcGyekWseVzupufgWPeHgcHnxTfkdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bScz4oQkVhKtJykyvRHcCKoRsNJwfq8bS3HFKidffYueLbdeEszGpDr2MNCumDjiWnsvYNxX1HUsUYe8mBcWWEX",
  "key1": "hhC2X4hiBLaVURsuwQ4ofjcFAnQSCkMzhyi1PMeD2nUdDb6zxv8BM3bWRkZSbLYv7fbiwHSvABAMftzyeUVhwbM",
  "key2": "2aeoC2Jy7SawCrXBSVhAm5adJ3utQuTQwVeaadDrC6tfRatG4gueJkWJR2hfQkZyRPJ8yprPhb5Aeaqkj2zfUffW",
  "key3": "582MqCRRpHYnTdxJUpsyU79xVVWCSsg6kGgvu87vikUYKxhwLES4baE5S7yFAybBG5oTRUMAtYboRiS2HBDDnizA",
  "key4": "2YVQfe58XxsjXWnBvYzianpDz9BeYxmrXeK2sHpyCbAcqTryG8spf2a4BzENdfdDjgK7zYX3nfEh7WUMhMVUAaXx",
  "key5": "65zXkbW2NqoJJtNLDfuZb7M5nkHh8QbZTp2uo8gwfS9NVc27iE3T1mVCo8hCNfZ1uFgKvoUCvHryeruLkasts9DL",
  "key6": "4dMn1kTVNQd6DU4djRJjfi5i3EkXN7wZVY8DXc3dPDk5n4b6Y9sVec6TzoGPdjK78joEoHwqkNFsgHdaupx9ArRy",
  "key7": "4EFcruYuFsjPV11KVyY2id61BAeWFexFKn1AVecZkwCGv286mVvBPEPNWJ7cKk3hLJzs1awhzMizDZRtvDdCJrrQ",
  "key8": "24v2rC7v7T187YR2ijq8jRamCiLLf35ah3PQzn9RbiEK46xqatKy3PqDm33iKn6Ey5Pg8BVzs4VpankDWPs87cE8",
  "key9": "3rmTNZtmCM3UZN5iiFWnRMSzmo1d7isWnMkdWYPTn683jaZcUgXQfXcXAdZP4YwbbhQyu7JcfjVqraz3ZMGcVUof",
  "key10": "G9ZgzCTvdHHg12gR4koFAC2h4EXgaqbuhVePGmCW6QvjvijvJZrYdNfUe9GhUcDLnhWfkxzTp5jLQHKmHtpTiGR",
  "key11": "ahckL4cCBgvUhTj3BudgsKt5hPgtGjhKy4i9keD8FTtaxHreP2rcufo5MgWW1R7f9QKx29Pc8goBBNgdoSnDzmP",
  "key12": "JU4bPuzfHMnLUPmHEEA37JCqc5r6RcFKKoypdAXbYaZyphBsyY7WBd47c5TXdYexeurFEEqQQpQg1n2t6t4qDRB",
  "key13": "5eFLApRnZFgoxUe9RatpogTu67ew9JgUbXK7w8vQT9cL5HGeDngEbMZnh5Hcec4M9YXe8QujqLL6L92nAfBmB7uW",
  "key14": "2U26N72HPaPcXMiA7L85x6BNA5BkTFHovVeEmh6xAU2LWXDuJhbiuWfH6a5zGqGnsam1hbTpFmzqFEhgvqoEth5w",
  "key15": "5LdNcxvYT8eXNDumGwDbQNT95LeGaJoS99SGorJqU7rcvGukBD7tcZpV7ooNWiGciScPhcJiCSZ3nWvPxPrJXxu6",
  "key16": "2NGwvbSP6JmTpTPkZDzECt2v9A6cq7M52tJkRzDZ7GVzoXynJBCoxwf5NMb4ZxR3RCEeUGbynDL6dyXsoNPmtTto",
  "key17": "4XmEPVbAHvqJKY4RrkREGGgz5cbuitmCDBcrZri3D3JypCNzz1YmJaUD6LkLjH1T9TR5ywFvSiBGzbAagvZPNgur",
  "key18": "S46uSDjvi5Lyyjbcwng8Ejb1EbUuivTfLXDSwfbwcuC2mSQHnU9ErrPn1d6ZcZfQZ8goiphskLh7zH5ZBGudK1q",
  "key19": "2tVGxpehYWZn2g2jSWf7wRtrYe5vFiHKrfmdgz2SU6tsfw61LXoQ7JyEoYnnumUfGFLJbKzbahRuDRecyc4cRCA4",
  "key20": "2dpz77vCh1qLPHE9kaEcxxpxo9fBFY8NoTjP62wzcuJCZWNBoHW8hgwA7DxRHdpJ56zsh5PeBBGqg8NTFpjSBpLP",
  "key21": "QMPQw4nCfNVUeytphfS8zQs4RxxTKGiwPXnyKokaVZvxKbDB7ZpMLEbTNqMohFFnDnLsv5niwCJ1Ntpz2vMxDW8",
  "key22": "2m5fTVNtuKJMyRXGXb5ZXS2BknJboQeiq6Ymu1Rbf4enEy6nRPxwpYjrRNp1tL345sfqLvikutzoHX7uBJPCjnpY",
  "key23": "3qb4ZGkH7b4gHPvrgyWNe64F336CJ7se4cxFp8Dy1UHebwfRPYPjwjFhsLM9ZRiERXqKFUdqQr9MsFGoFJfe63bY",
  "key24": "314WC1GYwSQYF88ZXYZx4nCwMnJ2wH2KKJRFtxuEM1EtqFYAmhLLwtVZngmJa488LqWUF4uM6Jjutm8WdvcmHPkt",
  "key25": "5ATr18HK7HJvrL9M6n2mvZbP9e7id77QMQ2f8EU4zx1p4psPPvEJfzHkH2buJ1CzHCCKM5dscgN3HnYWDxSihafs",
  "key26": "5Ue21mtocgJnPAxSvf5hB4oEswm2cxTwFh9xn9fhUgfS7X6jNuXHHYYH4ED1vhrpdodWw7mT88f3MWNMXcjcpe6r",
  "key27": "2WFAwYziZDu4m6mK2AjyQMKhkXTu1FK9o7zU8UiNbgNpRsvYErocsdySiy53MPibkyAkFJb4UMdkw2pTdSA44A2a",
  "key28": "2Rv3fkKwKyvXmQTrC2C27i3G3tQtU3rM583o7dgYbeyjvxrswosA3NVCD1pJNa4RnJTU8kLPDr6JXZVWtVVHdJgV",
  "key29": "5RHh7MepMeVYWzMpbEAEBVaHQaMLDuktzwJ9wLTXuKc9KWv7X883LW95MRVVv81auBHdLjgo9KA84PuJjs3S8vBe",
  "key30": "w5cWcfK7GMCpU5NRV3QtedYxNiQgpnTxKr4gXjPvhkwjb8MN7RtyyobPYJ54PJ9bCyYCxmx8HCvYSbm276aapux",
  "key31": "iekCboStJu8nBBHGyGUk2hmmRKsvG2Mk4Mg4XNoj3UbimbpKZP57tkp4A5VWxEuDS8v4Kt2hmq9FAQbHidWU82v",
  "key32": "1jRumEsQJN58gLnouaB7neeroh8ioWW3ERabcLQr7cUQCqzHXGMgUoTCcyuuXtfz2n2dgXeh2SgPeJbeq1RKec8",
  "key33": "2pfhQJXscVvmxn6cBXG1TQLv8eyYmVd3saaZeytFhqyYSJvk1Pa6yvMkF8wVdqmNy6kjPx2fq4S3cAdtEEQinbUF",
  "key34": "2P9nUmhbU4JjNsY5LiVdxgHdDsg3wWTh7YqypWGX4ZHV69qGx3a9SLyosoPD7xcWoaqhVDmDgW2z5KR2nrhLKzYA",
  "key35": "5S2vkwS7LRbSHnopgndpExmV9UbZX7bHCsx6cB3m33fixAJGCePtWQYDDjjqejwhjzYh6WgkbTt4FKqn3BoJEwyc",
  "key36": "57sezNHy2eVL9NoftiiNe1Y8ogtZgYux1Z9KMT6VME5WN3SSGn4X5fZkfq34FuPoYuXbGYGaUnKrwJPZ5afRz7bd",
  "key37": "523VbeHdeU6zQuGuaL7QX21HNQ47SkykS2h6fVBui2rFgS4n9Rb9vmfTUK2A5DSfpVg3F6iKmdpBoAjiDRai37ph",
  "key38": "2bUCDxFAttvwbe7XZWpUJRfkEnu2vCB18KXNjCWkbAT1zTSqA6mLvgRBTeCTPc1b3j3GtaNa3T9Ahq7BDdrHHrHA",
  "key39": "W1Jnhsmfmo1vbgj7QsMXheUwnewmkrV7Hrj9eEuTMmXJSnRF6mPFrbBRjRoF2WtK2uvcDecDganaxdhN7NuBX3T",
  "key40": "3sEJMsZuym2N3CLUhRoWyGjvBef5vasdaPoxtrnZeqgKTuYY1P3zKHbF1RGpELLtNzCt8FzRrV5NXnXv2U4ZVXXZ",
  "key41": "cVowAAh3FtV7VFDd1UmUuAwkvQvvVyH3n5NrBXuqHS5qdzk7DQHcpFwWhHQ3ALsJkDPv95x7r8USoaCk5Q7h1Yv",
  "key42": "5sEi7ChRQKFfux8Yyrc3BTd4ooC1sibhp3jq867u4vFaoDSJQKfEzwCVwFgGYcymaLcP6VpwPG3NAPTrsR1U3zrL",
  "key43": "2fFUKL7VLiyWL8pb8cY2K9N5KncN5XjinN6yRvGCvm8DdzkbYkM1mQfZ3MDt2dHZZAT9ttiYDRauscL7RhwRHmXp",
  "key44": "2L2Rv8Jh4JJwPLuvGHfup18g2B5ey3YBLtg5Vpf5u5ZcdeoRYLFnJ8GMpHYnYSKuowJJ2pPs6ogTGbRpsyWf1JBT",
  "key45": "4uwVJNv4mqzDcESTayR2cni854BgoQfGXHDT4LdFXbJgfGuZ1cVrnFWCSb5Z764BBXpcbMwkMsYY6HZds8pTjN16"
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
