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
    "4MaJ3BGu6ttzMxQJeKWrmCsKFpb6cAw8xGz24DuepHHofWVP2WwruB2fs41pREBMWk5jyH4Yhu1THs8HhrFJV3E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VFuX2LXoHUXvejiuRNHmQ8YNHw5CV1TLrBzZ8fSG81fjTGVmCnba2zt3ihGHNhSMTRiVR1xLwss7pf1s94adGsm",
  "key1": "5HJourkuaUHxEpiyB1omKvLzJNzK7Vac8ZVDhLbAdgSiURYxUduZsKtG3z1fQVD8C5CQbnFWXGU7J5AK9LBH1Cxe",
  "key2": "2nErKaQjxCqZUz46S8EVqjD8nG27cJGpM28FjjZ7aSspYtGyE9rwagjaoVRNWvft13K5YE5dD8sFZKHggaD91RJ8",
  "key3": "yFDV6BgXKp8N9NqmKG3gJisNJhrFYAvVDuLesJV3QB2wJWAdswxqc1odPiuAQyumKCusvsViHiDearAfmW8Vsxh",
  "key4": "4uwgoA6KGHzUeDbXizrF8RrTSEHnpcpQXhfsJ6UwimBJg9KEEee3H2q6w7UiHzCVFD5eAnpkd7uRCFpVbBJcU74d",
  "key5": "zB7EiYnc6dB6rgvyA1HjJRttnsTCUmaNEGYMDcpoPgi5ZEgEnwqvZTxp3ti6BwYwuknQCWFwFURujnUkNhWYHus",
  "key6": "3WTBrJiCrfQehuBf4Lh2tFsL1TN59LYPvnkg1kpCoE2NAwqjRrWef8o3MGjFuqAPp4hN1RBH5nUv9sicXac6WfTY",
  "key7": "2L69YryKh4pXDjPddRjKBp7QpyUFJcB5wAkngWhotLamJETtcShVodHJPKoAtwaEYRoyZuDmrXua2FGaUVfifCeQ",
  "key8": "3zfbjYGVDQPUTPkLKbNiu82G92km5ezAuLx5KjYRorJPKP3mDuN9fqExX36UeL2wS98n5eJdHdkdUiR9b2B7o6Kh",
  "key9": "3RgZKnsmfrgVgKNaEj1gZYJWwUPE1M8y1VMoAMjdGa3ArxArGRNHifs1T62mqoZNuamYQG9QW6i8GRoGVoBKwXZ7",
  "key10": "2L7QAu7F7xwzmhaakWT5QynEoCdNsf7UYUaectZDG7FrdLhRXfkro3KG9vsjnomevb6t3UcwnCoQFzuDZ7gimpkm",
  "key11": "3LkByE5omcTJ1Y6mJsrhWz1V3Vx3GNA2y9rSJArten1iSwhCsj3KDEhhrtkA3eEjK7SJeXXFjesQmQgPARk96QRA",
  "key12": "5chqKhqAgXQyXb8rYQHDmkHVMqmFjMrJBsq17nLxDFcBKEWysHRnM99vp9q76Jg4n3u84bNMiEqpKPqHorZCt8vW",
  "key13": "4J5H4SFDv5Fa7vJgMeec2CiWDiHqLb3uismRqceV3NoA3qL3BbZH43iEnFmUAt6acoGh33aDHm64AcHXapXnT7K7",
  "key14": "5SbwC6CMWGN5WVCa29sQXA1L9K2doRxrxyYzHzvQYFKTSWoYqYwGUQ3rhJJMxf2mAtBffhKL56M1GWSi8Xm6pwA5",
  "key15": "5ugMGJKs9jy18RCtcV2mRau3HX9odk9FWhfrWCXbCk9WzWbeDj6VX1UnAeqXXdWzZQ6Je8zcT3eM9XGZSLZ2HQQT",
  "key16": "2oY6PJi8wASxajuYQ3iZNCUytVY3RyQ26donYVQm7JYwKwo3Vtdgjcxt8gFMGdubMn2UDEdJfNNYDrDuas5uz8ux",
  "key17": "5KKTko2CjjKcdKfercAQXbwPDtj6opzvnzZsHTWr3bZCJ1t2qTd3ym8Zi4HvoEou9hS7nLqz9DFAHzkUoRp7PMFp",
  "key18": "2PnwgRacPcDkyRaktDsLANHHaKhk8Je2a1xKRiGWYsSXb6Q5ZmRAEiFtzXmAhoPkyBTamwJrhrCfTdz82mYTZkyR",
  "key19": "4YaJ1nzHhgBYeXUFdwf1iLTNAoLZWZbU1acGPSsNnPDpSLfGANaU3tqBCFKRvZ1dMtxgzzo83YjW6rtn6b9J3d5t",
  "key20": "As5nC9idXxQCsVA226Uh68VECDKwioGBUGZQAEz6jPPZMEsRbnw5v3Hcb7Bh6m3PqrzzFCDcjWtK8Uiyg7qGtR5",
  "key21": "vnTTb3eV16M1RES1eSDAsBo1poW76SSvqDesRE4ybiTwVCEqn8zLzyUu94LdCGQ2wfxGfGT6738in4TWb3yjZYk",
  "key22": "522oDGmgS1UPfrFNHxhZstBGmMmfvEc7f4ECAvHm62n6aPcCZj3N4q2JoXXYoYYR6ks6uVor6pgF1nLfPDNRrHXC",
  "key23": "3jG5mjKUUEtCeg9ddRYcL82t1WKbmB4q1E7oXF18WnB8rM7bk8sy3jX8Nh5rELrv1RM7PXoiKWhrgUyJZGmx6Es4",
  "key24": "248xn4Qmc8e61wjoRPQxUZUUUqd77Hed6igJjakAgPrXkVXxzaNc45FdpKrdJK6B5Xt3cGwmEPW1TJY2SR6i7LRu",
  "key25": "3J7omAGbjc5L6ADV2xpukaivP55xovtbsPo5UEcCX5AdFDW6JqHpXLPM8Ji2Ncy6vYyUVzr7TXt2U7uMMFd78G5z",
  "key26": "5GwCMYmFMLKkftvZRbEsuZQwMXoG2uNytB354166oiyVvuqoVx1eqAsgXmVYD43QtmpLreESkUQZQH4LooqXCFQN",
  "key27": "5JwkHpENMbS4yR4MQwcpjcvtrBGuGCJQ9LmPNZz8YXVoFwvFed96f8NufRhRedicUDQP6trV1iks7xxp5z7vz3WR",
  "key28": "5NhVjnUXkWXufJrHfLQ8BQPs44Z8JMuqxBNNbgRDEoHvzRd5WquMtcws14qoMFDHibWkRcpGEcPaCCmtCHbH65Bv",
  "key29": "3YBbWpdFLjkPPfBzkbBUfeYNEGVexFFik9k3pdhwpwfhbkw3j4dQMBSfmDVnqrPzw6VMLRdxi5Kv6rTk6WPVsnda",
  "key30": "4LpWjZ2F96pctZd8JxFYvS2Fv8SyLfgXULF3mgQF4DmTr98K5LkyWv1UBdxaiE7Q7J1rhoj6LVUcoNjmC5UA6kGu",
  "key31": "NiQjjTmDBWEUBYnVSxsnATWedygPkPnuQUh7bsZ82FWWJQx6Sd4YHrg1G5QbWFDJ2yVXJYtt4JEKxNnJMu9Rv8U",
  "key32": "5YVgnCDFiEGiEscS3u8sYSZQH1qTdnDFcqWMTwMtfETisFgEZnMQumYA5vL4SUrxVjw1hbWVUY6ZA52F9k42BBPf",
  "key33": "4FtgDNzwwM92VRjq5zyfXwToSsWE4nxxA7ywLX1JCeSLGCNHWEsA6MoZRBVes6QssdUZ2vgKAiy4jDCE74tu9bSo",
  "key34": "5PpGvKX8aVFp5gAoHtu5oXHM42dRJoNaSEpjDkfxfgWdNtfL4PFdR5uwpczAD642i7x5R4eKYmFcj4WVQzmieJNh",
  "key35": "5QWgJWaNMHsWQHdFTju4gd2xa5VkTVnGUKCKVr889Zx1vicekxGR1GHVDD8JXe1YKfs5BoSCA9CWUeQqRKoqdHpZ",
  "key36": "2vzxqfVWppUNEewoNUrAS5Snehc2AXUUp7GynWCVPSHodpX2Gc4r7pcjLVDradoZPVGYfSCx5bdRS32iVY6vcKzM",
  "key37": "2di5UxDGwY9tgbSoyidHD9Kai3jYZADHRyk69d8MEPZmaaCRBqGaaxV22m6asmdWKdur3mXVvbfV4Rvz8H72SoNT",
  "key38": "4y7TMzmaDQUgYsMoCNXye4D6bNpgUR11uMEXjsJCQHnrJ5xGa7WPe9hWjwRGbKjfgHAkojS4MvNuAgNeRaTXX8i9",
  "key39": "5ByaMcJuKoYAp8gDF5cjuh7ZtufWbTa1rbCRNDXuh7AQtGiNC4jPYeGrsqrM3pVbefFj7xJpNfS5p1zef5juSBqD",
  "key40": "4GqyRdVyJ68uX6aVMCHpvYE98iPBV3Ayd1tCCyYMqZMvuSrpAU57oFLuUvkpbvsBkN3i3rzAQNKdMDM5kbUJnAi",
  "key41": "45FXkBUD64UJGopNSW1MPjwToAci2BFEqzKk3EtUh1CFU5fJggT5WgjKJGXhKERcpwTmA62iN2JQ4i7H7X9pACND",
  "key42": "Jd3pNZwHzLRLGbxiUjkXLZ32g6Sjru3sB2urYEUVzSJSDyfNZcPxNWsJkaoTF7fsbtr14FRUy6msTf136HDs3DH",
  "key43": "5N7mtSdiKgJv6danZ3JhraZQRmYyKWrStew262W2Pn3d1mJymRnkZpyjiHPBNyHHpcTHyF7WeCf4jGcLDyVSbD9j"
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
