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
    "5ScNhrp7uQ3cPhks55pphukNd7YrS2REoxcxtSpYuhHk4US8uSK1TV9wzBNd4qmpVTH4de2vpNzgjEU1V9kovnGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sv7AtjDBafxcvCMh354k5jQUsCeLKnbY5zYiZVgVKkEkqDrsC6gSwUEGorYT4RMzWVApfvgjyVBPGTWgGbS6U3C",
  "key1": "538EGUz2J7Q1fvAouwoMJPr7Ju1ZQECiZNDtnysKGLkB78kpjervTHuo95gGRkcV1JtsF3AMYTg2JwSdGqpgAJYp",
  "key2": "4RNRDctVDEwG4PYBVvoAbbyAgM8a2eyjpUJ9qqmnbGYjiVm7B1yzeRKaBipMGA3q2jmMpQLjqeay5UajCbPeTATe",
  "key3": "8f5SJrsAeR4vGnPMSGW88NqcWNrTCFbFmVDtU3Hcxq8ZUUvVbc1vpMzwyjywpRQwEj57YNc3KVfvLNb6wvsPLhJ",
  "key4": "4aeg7rQTMWXJerpD9FBtv9FpV9fDH85XBFojwMANvsiJ4zCU5aKGchnqYoE7ga9VxAqFxEZG9VuAHHRFcujJBNG9",
  "key5": "4bzoiZWi8Qpvicu24GUapJstfs1LgG1WH4Yyi6tecFQHeSyTAVddCsLgLtkdqMY55fEbx8c2CWrHvwdujZjadyKR",
  "key6": "4vVTHK62um3xhPL72iQ73tS4orRyG8XZDQFzfBY8CNQfkFt6s3XqCNmBhSTSYZXSKkDCJ2fsnmVStptCxxifvzTQ",
  "key7": "3oPiSUJL4A9YHTDpKn66gGGUNwcWEBJTHqohKSc3F9LqVdSD2aczhoKksXxiB4gNKoCkaTUv4SD2qhLRjwpCkifL",
  "key8": "3HXHoBXuknFpvWwVeJiwqJ1RNDJCL8qVbawpgwL4s6M3NSsNFHD3P2aJAzWnhoTojoSkgQNWc7tocMsQgcHSnX83",
  "key9": "3sk5dsVUFch8E74KFrpw6ZdgYZGP1kPRSfyAsiNiDyGc5CV5BeYHisNjDux27BcXYZz7YchshjXroh9QZLxpWnSy",
  "key10": "3mBoBX5hq65fLu7wWAX4rWcPcYNQ5eHjNyA3YX91kevGDNGqPDXLX7PgoSQ8Q69xYh7WRBnLE1h9iAccvmQWcpJw",
  "key11": "5GBfdXJ8pZiXZWSisDpHnJvvbMoV5uSaGDwKXoVz9Z7BxcJKiWY1Y2yR45VCmgJn8ezhskUybbbjkdJ8t2whMuh7",
  "key12": "29xVPvXqR2eJ6eUCfNsN4nxLNJUjKnqDfPtgDoaGJZA57MMPFh17GT3TnSaK2ZA3Ed47fskJcW2eSQKfgyCbwfES",
  "key13": "56iPtQ97F317TxN7QdqtFWDdaR9rUd7pHNqH1JuhjzhYRg9zCdau2rHEcQRba2WLeGhFNaXz3jG7xs26nMhisS22",
  "key14": "4rHHm21wV1Ett8MqkPukGpiadXYPSscDsqTisZ6NK9XX42WRTfqq5bzsTV7W2NN4sbJKoqyP4JaBfWYY7qmyxoWz",
  "key15": "2quftiubV3mnZdzcHvRbpowpg67FEMLpY1HwftTxsbWjfQ53uobnpmVEvWSWb9vzRPPnaWzDMBCxvnYoiXUb1pir",
  "key16": "22q6jVzD7QfEVBDs6rDT5TZqtbsySWHDMymWR9Fzi9b2neDVHm12SGBtfuvPH1jX4fWKezcJXa3gbmmwCwvQRiCo",
  "key17": "k6pWtwq7B9XxAYweM1MeFRWkUu61i17NfyJJmmYp3uATrCJKuc1P6wCVHMWAWqptabxZxJaHY4TqwDLCGcWwJX8",
  "key18": "21soFzZDBmTcMizJrMRiMiT4L5vRT1yayNjq8md9wcPfAQ4eCCqjCD2AxgDK1CXSgyUEmzkSXkuCw2g35fB7Vxuz",
  "key19": "3VRbfuTfC56AbRQWbiE9PDUXfm6rbYmiLUhV4t3pfyP7SJ1YmgjURnj9g9VkHTj51b3sVgnYPf5cc8HrsYXnu7zv",
  "key20": "41mUpCBh3VcT429Xc6TW56Te8b81uSWMwkMEgaH8sfaaGCbEmPiBBiWH1rb5EQbT7XxVWh8EeVLGT9jHpBcZo6Jj",
  "key21": "5ufSHKtQthe7ZNVsFaCVyyWxsUBvM928zreizw3gFSHVi3wsJ4DQrGSsAxLEeeZkwkFmkz1hKmAkwPmzWnjtRvDx",
  "key22": "2dSWDbGcpaziJ8V3Jki5YVAMti4e94HGxUVTeNSMxcy84SRhuHNtyJCWPkwpphC3vCAkJRbkk6hZoqi5a3E5xDwC",
  "key23": "4aon7SbzSdG7Sxkzbi1NhwpkBvNjM4YbR7nSaacM7V8RE5W3om7hcT1wKp2HJcNheyP4c3NV58x5tJxvbFoutu8S",
  "key24": "ACmEMEGFUBGPPzNqxKQqFDUuBVeXFL6yqiKQdzkLwnwVjAcULZcVFhvgtgz6E2VsrPCD6dzSY122ckZk6CUFKdq",
  "key25": "3ymm9xSgFtJP7cxp8VB6gH9LBgVthCtYhQXi7tA5d1iPNgKicJWDpUbFpPSMbz3qYotnWfxj9KYQmEbWaKLoAGqH",
  "key26": "4bZkVJ5sn7kBUEUDLinWCarJkdivzgURz2LYhLXjRsuy4v8wea4PyEizcBKo9yNurZMoFFH3G8EqbxuowF2j72WB",
  "key27": "qowemefvXjbcXgbTW17Uy4aef8vwTyA8iGZEXmPKtbjioqRCvx9zkYZzuzEMWRo6q361qxPQRGhVvxEvteJS2hR",
  "key28": "5c8reX2tuWGbcKP3AMmq6vkFmhgn4YQqtMjXxbr5SfEThCRJwascXCHP2H82mNiFEjVSNiMn1NW7QNSy98umoXRC",
  "key29": "4mSEeYtF3GZfiqqvW49haZEVYycVyyjRYJvAPkEcfMoVd6uxFPzkEgy4tfveWqSvkVj9KAin1X2w75r2nyNeDxQF",
  "key30": "X5oy1DCsTdeainZtne1VR1pkBxAMN77aJeDPBTidZQkXDrizymY1xDQwizWdVY87PtGBb9FHYj9gPkvRn53axEa",
  "key31": "2mjiBhdTJbw3xk9AvfrPPSGZ7ykuzV67B4UztaLEs6GFVAf8AdhwnAq4qQF9NVTc5YpSngg4zqaNVVJQwCz1zCA",
  "key32": "fhXsQZGMV5nRmZU37G22faMhz6QqkdiogocgBWdrSw76cXhmRqruDudeYKig3GMPTVvN4V7TGQD5RSXVfcVdSAc",
  "key33": "3aN5aiHWQhcFaqctcuXwC7SSDE83xH8ioYrUWq1Dm5MyJpK9H5jFjSVroMmHqwspsL5aesCZdRrNEERPfQupe4VR",
  "key34": "5EMP4DYdqjbM5epDxCxL41MSECheePUFZuBxSk3UpdgBBrgpM77LVXbXJR5xD7vV3jwpiEG46astJGFSTWUBXBSD",
  "key35": "3ydjSrk2PBoaXRQ443afPB7G3iNopNjwL7kBnLT4bT3QoS2Hmb1AGMZZght3qihVJz4vCtza8i9i4F7kCVnHJgKb",
  "key36": "2wHTH5S8YzzK8Jw2Z6GC7p3hwQX5m1FN5cHXowfXptd7MEcKe1bWVpHhUYxHhd8RaV3fvev1GqBzLifDCKqcX1QJ",
  "key37": "63omYJTJMW8rvnHE1jmtif7UpDmXU6yqifaZGcd7WPVuQTE9s8u6z4LRqmMXcLNL5kjW853dpBLNXYzED1XLQrA1",
  "key38": "5Zxg48uJzfP8Em6xQKupprwG2gApdP2mUDmgRtv41Dyf1VXuS51eczskYAqebWGasB5ovdd3uQY8yWtnDZnCP28J",
  "key39": "4iy3MktQNFEtTdMVjddURtZW8pUCCHANsrrB38hn4GXjGkaFEL4qA1qBrQCLiCMWxLLFkTWjtAVXgy8fK3pyp128",
  "key40": "4wjuY1wLyqiCVGbLJStJ5JTqUzmNHFYcXhrutp6zJ78D1QiF1LZFWneYRwRW2VDyHMQH8W9DFyNvhCUYVn9UnQZA",
  "key41": "ShdiP4ihqy4kyJ9oUXuY6rQeCxzh5T84vW1YYkfB3T85oVJHxFjgt8dQUVPnFG4MAV58vT2DbX91veZYJdkfuMk",
  "key42": "3xkY6xg4KY6mtUwcfQRs4v9wPvJowMAiBEC8QEZ8UrwLzocM7FaFgKQXWxRtLi3sPvmAww4YL5S8ukdo7iBtjAh2"
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
