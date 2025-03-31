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
    "36vDD9zyVnth8Jvdm2odffnSPmFgHi7rse2mdiUH3Z1CFSkeLQjcdxWfB8HNHLWvYiAGiE3SEN6Mg1ESzY5U4et6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmoPbyGrZokcKfvN81tefcjieHxtL5wrjbKAb3rag7DJTpdic8oXkMCGUWj8MATd4yfJaF2U34whVjrL1bHNCsp",
  "key1": "51vGFphyfCQdseETxzbunvFij2hvM96LYcdRTY9F3Ti768sYKU3efZCWqj7KMtTBszauw7SMJM5GzQfu1MRHwXiH",
  "key2": "2uzUBCkdCLoeHG8SnqA2DAANMToNg9N9iXB7F2eaXdmUB9wvgsrQQ55tnoUZKirco8vGUUXPvXtG83uVpqYE22dJ",
  "key3": "2n24Mj36feZndiJjAid1SBfJZG3HS6xU7TSodLZo9fRt4P2iMefvzig8ShcVDUpd9jRsWBP43qsYqX45zQwswKr",
  "key4": "5dzctxGieiRbJcfDvXPjsEebDfyvw63YPemruZPUfSWqQBTG6bC16fpGwEV5T41VicJUjjLxPfijJQua4BjLn1fX",
  "key5": "5B877jhLPNGUfAVumA5F1YpnX5jnC3hkzGNumMkg242t6wewAYokDKpiiuRtg6zhXbsMzjUqJn7Q948dcFtfWAEU",
  "key6": "34ZJzcHEFd4hU13vUuk1Ct6fhZZ6yBicosSHgLUFdxSchiqwGP36tWMWGutKSJVh2FkZw5bYUWaQp4qZv7oYzMaW",
  "key7": "4Leq3KJLpEyTMTGsNJSDArr7cnxSmQ3xdstAktCjnHggmvXiceu16ZsJPA8kQTJUxiUEwhak1bnk2QwDxBxudPJM",
  "key8": "4kiktQe1MxHg1AXs1jS4EPpkCvEGuuk253RrVAQvtWtHmt3gtrsvC695EcNqyncRNmw2GxJWvr7Dd3ggcHbw8Vc9",
  "key9": "2KQuEntF9gC8Xvao77sEMmp8eAyEoDRsdX6bKCqAeoFUJMX4itjhVo5s82D5dEtoybHjFaQguJhHBknGZTLvVhS4",
  "key10": "2fbJSe9itQBmXPpjGPx2tJfNmnD5FzmCJBMoEUcABVsA8gCmYw5KAzRZz3rYE9hpL3ujmFuFpjc6AHa29Y6VjWuR",
  "key11": "5Vrc2FeZQ1zNW5zuSo4BQGCaJ9uNZbZCqqSn558JJDcMsdtotaAmoTNq7LGBmGHQD7H1CEBdvT3bQiGSERp9KNx5",
  "key12": "34YHuZ3oAhrYH6QLwofw1YdXXDVudPCwgUae5VnWUPefxiAigS8rFHY6NDfStS8kZS7LwogNCmiXEzeGVHwEozWa",
  "key13": "zBuAbW5faAmoMi6Ld4SiodrRVByodfQB1hgvtFh6yt8C1BgDLkMTEz5HFgzJVm8DnrWxABE7xpA46dS7Y6pXZWk",
  "key14": "5D7k5iU9JAAAe3Sof8p7n2L3fpVgq4eH3gxjp21438sdqWMTY2sBsAqZGag8J5zVWpnZ5Bze5PCThoGobFwBzuv5",
  "key15": "5LtUF3H8a99vCHMEqipCMYD5J5JnJ5MWdkgkXR4fpPKSei6nGcp5LMpwxXTY6C6XD4h5Q97Ck4uEduKFY2KV3RC8",
  "key16": "2dWoFZtkJTLUkjPXAbxmqLyaA5qGW6wWnBNmyMFCKz4xjWYvugZ3ynauSEErPPZM38BTF37bUDyXfNfffmryE91S",
  "key17": "2or2cmyry657HiNyPzavYqz4mjkTGE5XosEEayb8abHnuC5SuEtEh9EbBXoQaqZYTAexhnZ1c2n7aR1FLSLe4XU6",
  "key18": "5BjwTXxHMyfPcSZiAxxbrbVTwB94DiMbJf9gkvxTFWwsNcmBmhK6bi2T4LXacYE88oVxTMhLaKUoqQDSKJjs31Qw",
  "key19": "4TAD5jC9vWK4pm5PeNcwnhJoQ2kAQ3fhjNCoZSPAci5y5riejpfUY98Hk9CdKiJXj7bJRDexhU7FvQ18cxBC5dob",
  "key20": "4mQdMpcC2gM6yQfQgwc7cSHNvvTTdWZqLT8V7YyVuJgKyHhbptXTfFhKJUXanTQtx9ML8uJGz9K3yR3U4utMMY97",
  "key21": "wVsDAb7R4wuvB2XNv4yZKu91FHAoPw4RKVcC1YmEe17TdDDvNs48QfsJxn5u3jcXmnGCTqgzr25jsqt2AtxEJSN",
  "key22": "61hhPShcStka4GWqusb4fm2GHFtY8YtiCAdhTyYuLCTY3KkQWBrnw4iNXyYkLpZa9NBhjkhdyx46zmxktSGdD3Jp",
  "key23": "51EQ1PVo3oSdKaQL4Ve8R8Z5L9hUrnSnWpUKPajHPeQKjEDmcJZkfXyBNDtFxs9pxJQhGrLGYH1vae4yLoTgS4DY",
  "key24": "2Ghq266q6Tu6jJwaV3uRtpXVcoL7zdvebXZMQEfY81qqCDpZfwSNnzVLKoasVYf6TEgz2HJ7A4jeDr1oYf5DkW7p",
  "key25": "4cTiYkoBumyX1nqoWGCubk3xRcDoyNfV1cgqWcB4FSPBoV7RymfyZFueRd5GPDCmSVccJqAwCMNEwGqC61b4Xher",
  "key26": "4hbJaugGTBKcKAg2hg9gvMXE7Db53nAN9y6nLZBZhUAw7w5ZQZJ8k4tptmcpPgnxaoHNzUrr8t2a31mzMbj7u8AK",
  "key27": "2DbE5Cst2cYX7eYFfKf6zJviqe5epADJP186fsQa3RrumYbWWpoPanWS49YWopcQLTY2ktdHFygguaJqk5pD6VHh",
  "key28": "29iufTQyF9QrpVSDGeeiEnKV4joQwHDPTzotfb7ZaH6naVJukZ9b7cBXPfwrjTViBdUrL3yG3ckqaT82xTpCp8Q7",
  "key29": "2c3pKmcep17ZQ3ijfPhkjSRFR2djs8Cy2ysLyVfw3zQSjxQNANUPfT2jZaMRef3T9bQJjaUbwMgq9JJJXfmvVEgM",
  "key30": "2zk8eoQEcznyhhpeWYrfQW9hZqmyt3RifgZs24aboNa1J1noeDPZARKZCT2iNZr7XgfG1PS12WT7pGt5RSKyv2uU",
  "key31": "52U5x6akUQW9bzwk9c2YVboUz31r6KWQfJ4gKYsQaKJLT2iab2YnFdSixKtxvuiHMAybu5UwrWkWS3bT83tPc7jP",
  "key32": "4SBLCf71cSJpHKhLD5pBgUmfUqyZXzpiZm5tVSJ3kLjMMF78Dd2RpWmNCjzxCCTpKVwnrSNJYkLgJfTzEotGsPYB",
  "key33": "4GN7x5651Zu2fBKbtMdEhgoLcLVKmSLsViBofUMf3FXrXLDjnNSVCaixpT5UZyKPwUd7VLgkPsHB3rfgfXfpc3q2",
  "key34": "3TXRPLe2FXxhbXtQQ7wVNQNxxdq6StuzNerYiZbR64gXbC4aemsHfM1P3sP5GkGdZ53bsp13rePzXMy6X6A6bbJR",
  "key35": "54vfFS24be3t3pDdFXJXCNWEwurjJJGW3bq74ZtusS4N16TyyWqfGW5N34bXoDZqLhmyJ5EPzVN5h16MZJgn8a1b",
  "key36": "31MdZTsnwi7w59aqwnphxg3Bpq7LemEn9jdccwjKJxpv28MMtb8J2Jk6yRftMdqF6s9p1BwrhzZbyEDfeCSQq7Pa",
  "key37": "36fvhXkcbdZgNkAdr8aWUAM9MyoGc4gTKTpMLv87ivsqUEQpZAzBYXcJMiscK4ZqU2MoFH8vJNTNmC7Jj9RqVT4S"
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
