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
    "VrpdWdXd5Jg7bktiMPiyGViSQGKpDYbhgbxMMzfvRH88JdYF7QS6sec9SNdLBeAaQ4iZHriSArcNerehHy29cM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrqLMpB72aM1xeRg5roby1LTmNEvQkAnvNyNZ9t53JMan3DHXqYHeSxujrg22f5MBdcfcMCh8sgxpCKYvkF2Vfa",
  "key1": "4MVEewQEYP9iHoxtwrJ19nhjwYNdPNzvp5oLJbKkLJouZuQaU69vmpsaaLys8JkwK8HM1H8bxNqpspaxtMuc4v1d",
  "key2": "3MosEZ83wDUFXjJWvRynpPqtD5HjySbjdXo5sHeYNUzZYPobHegPc5c8JwTH437d8V7nhKADpYZtKNueLTvncSkB",
  "key3": "5tUBMFr4XWjgGd3xH5XQZor6o6LcohJo7cQ7CKB2rwEJXG5SjWcmJraRbexhV5wqixj6MmbZrYZcdBcMRtgvvmNC",
  "key4": "qRikDvaGM4H75fPucE6yjGVL11tQy2zZWZWH6tU8U3eZmMr8G3vxprXK7pV53QWw9p1GNLnXYiDDyUk1AZSkhZv",
  "key5": "4X4S7cxmb3e1CA2tPhSUUHaAMHYkpKq9LoPgya8Q4ak2f41q9sqUqjBnVvPcYu6WEnwdCUJbhWa744PKa1ytSApr",
  "key6": "65oTgaKZqFGeywGu71zCAJCAXke1fRTKq7LGHefJ2pyHuc3YWGJTfbYMXaC7Y3F1yYnEMDugUWMLsCM84wRYES2h",
  "key7": "66jWAq6FTugxgmW4Wv5Ffw6ad5qihRBzvi6m6CvCspaxqWseNPSLtEJEr9R1GniPmjJ5zQXH6koqjcaE9YkyCN7p",
  "key8": "4wpZVxF45NRJT66FD7BZaiHaPkgsfPqYqzKcieGReSpfQBVoyNdm6aWN7eYbKDJ3YjPJaLaeYHRyfC7wWDN5XhMF",
  "key9": "25sZ4fMgDmKmzFXYHyvqw7bqy5fCoXybXqyvvggH2j92tdoSEnkhdAL8kzLtafy9WY6froAhGGq6ULFKUDLzkmGa",
  "key10": "5yptNQhALK8ekvPaJvXkD9p2ipywjJFaBYkvHFHGfT1H8qWcMwijK8BkVaqY4xAJovm7ifFH9LdrnPAX7JRuGag7",
  "key11": "51AjiWuHGAksnWgN3QJTSGy5CRE9JmKg7WPhvwGbyUQHEsZzZkxBoy2SSSSGghAWtW58vivEYVX5GsmPzRNoM5XX",
  "key12": "3xZ4F3Js62GaogY4m1giAta2W8bJrdnwizZsW9Ed6xtKtRBm4dBig9CYmxYx49VYY5EjRiKSRctT82gCPArgydLp",
  "key13": "5jo8LwCvWZA2JesFdGS5tk7mosDt4AYrkvrC7aShX8yeJUXtieviNrp59yVTCP95dMuD2oQGi2eh9uTCtkEMDa7H",
  "key14": "3fomCeDTkDmLh4TiWiHhWumEkYnUDuZvJwX7z2nrisGcVsoK9gJtABD8k7pkqDkc8eK2bHfSExK6UVzmixF7gg8z",
  "key15": "4xFcxftZ6y8hFc4QyrWoNz5zTsf876UEtdGXM6xJZCfmb7MPhPNa7UNd4mATKN6Jb5vLQ615LSbjoiS6nyRuKkQV",
  "key16": "53W1zkaPDi5gNVk4F2Ak6kziraiUc83qBhvLc7ykevpAaXqKNcNmV53oD3C68RuxkAoSrjDvaJ9EwXo9VvXvbJUW",
  "key17": "4htHDkyUBRoR6NpAxkRR17cAf5PWyZ8tAw94ow43Gs3DkNNMmWZa1y3z11nJ5ER6eKNRKJiq7FMUcSPS5xtdTkA5",
  "key18": "JZv4gPfjvVRwPLXk3iNfUVth51ALorb633qhJvtk6vH4bjsjJcZ9jvi4jcPfUifaH7Q1S3c9Cr9QqSdXppb9beK",
  "key19": "4WdywCS3chDDqC3YCB64MdJe4hvbUfDHD7Cx2R3xnyPfAtcvcH21os6SVCJ4PL6n75nCcop5K341ePBsg5a8SYbH",
  "key20": "tDfBfeNbEahEhakLU9S9W8E69xtW5EpyEh4zDvNLzmPHWjEhGZGXdw1jDcH9A7PDDzrGzyejiQdPcBuF2ZAVv9K",
  "key21": "fXxVPji2Kz41W5S1pziShYX5gqkhhTMRYqAsUzJXPYH9LWn8yQ6MDNJRHSNC4HRu46jWTi8PP3iZCJ9UP2BEihC",
  "key22": "5n9GwdBaUarATqDnx1P593H16ea6132kr4rZstErCs8m9ZgmrX8kK7sY2BdVYnexHCififnmT1UHHdm9Ff31kQR2",
  "key23": "5vcDHgLS7kQMMKFWXoAtyy8J6TeDG9bmLLNBaqEL6kcERh3HDvkAwDqhEBtv5m5uiP8GVFntbxxG2nPi8t6LNFNp",
  "key24": "3nNEWoueYh2NAnp3NVNVgaP8n5gfwZqY8gmiwAsGUjSzNQgKB8RLhLJ1MSGiTrr7BXyiPkn1DrcqsXSXaRndGDaE",
  "key25": "3XmdUTdTK2jK5FQ5mjM3ZS1aJbBtvGJDcEa2w44ALKnGggHuGGMSRKczNWwbVD7xR3vLUepPW6VWTea9rzKgye9c",
  "key26": "59e1YkPNqT2UYvHxn26NTC8JxTFYvaZP57L3cTQ28tHXRSLAVF4fAuVRttZL13hUYzHDEohgShxS1sdfguGzdGdU",
  "key27": "3YNGmFNh2sdPkmKtVffbUzGSXZkDvLKrMd7U7sSVZi8mXSXjo9QmEs7BfVFbES8k3PhdQcNxusQQ8CWT6RvGcVp7",
  "key28": "5isgidv7gvd7vSmBg4DhXYgYBx8BGSRk9ZyT7e9GbsidHqQ8Q6f7DowquE1gcuESue9rPANqNXkd2MNwBvjP92Ri",
  "key29": "2AV5fCShAPMbLvqtXCytpMWMTfXuAdwkfGWA7ZCqXS9JapqwW7jQxMrryUPLtTuE2mZpTKw6GEa2YVVaLsPJKztB",
  "key30": "2Cm2Ez52eDss8JGT236DHARZTcyVgxB3Fnjfh4KFwsUtuj9h3dtVg12KsNAAHzceodfXbZz9zx5Cdc8B4sxd3SeA",
  "key31": "5TrPwYdNbBuyP9BbTbunA45KqjMDNkNTXryXCi7JmnbjZxKLZgj28h3B2geyYZEWmJAgnDH8zWfHvrDZd3srfnBc",
  "key32": "2ky9XasE2K8GJCJqyPyEU3FZBGW64YNJLCtoKofZSNHW3Q2RGWRqsXmTjsWS3tGZQuHvcoV3RkjzmMordteEpcC",
  "key33": "5sfyhDnJJnvcq1BVaHCM2ATLQiQ6exXghcLtcmauxjNYiUoAVurEEiZ9ghrQAshM5aX9zuY8sHyVf3cE8RRsDUS1",
  "key34": "57sC6Bbm2jsqXjJhfztZaTseziSA6puYxH7Va782qFzttCAPfQGZmFxRDqDgAePM8DYEXXxTrit9LXzqXTui2zGB",
  "key35": "5V6UCWrsZmsMTqxfbMWHjeiH643rBh9TLW4WCyS8K6cRApxwSnbJmsNN9GkSuGtBzdUoKpivb32iPayuTMuEonSn",
  "key36": "o8AFhf6zZkydF4FhXucGDDn4gwhRhbh6ANztit5NtCsqtN2Kz5DDMig9byLxK5HJGRS9RXdtf3gPATThsLG1Gd6",
  "key37": "3HUYLo2s1pbNzLPXdNp1TrZ4rDZU6ckcx6nkwjhKL9DY4HNjXwAZcCkzTop78qnXarf9GZi7sjExnMKKc122vVys",
  "key38": "53hoFcB7G7VSRe5qQZ48dz15gf145h51nxeagXbKpGwrATEYVdAQejJAGFavY6AfGiCvU5erRbgxw35T5Gs1FsoN",
  "key39": "2yJ64AdgKC2MvdD5kozrht3JrHmmRbdSh9v2gQM3mDH27nXXDZBXE4zywSp6s2VHBGBfoFVHCw5NfNvCbqnHeUs6",
  "key40": "3qoV5t3cM5yHtLMhwqwgm4W1eBS9oVX8UoXNTNw8eCCntQqv7QG94XNpUV2wu2Q5pJo2G1oXt1BH8XYQa9N4bH26"
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
