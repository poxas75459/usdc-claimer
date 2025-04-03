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
    "2Y2j6S4hAUtKhrC2rgyft7EZFDspfgpvsGtFoNPTW7NDVk2JoAy2MkNmC2FNuxFbigH86v7pa1MtKzNGRFq48m7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9sJ6PLjuuCMWxynwcuxD5dmNQyLfo4rUsyv1EFS78FbUAqHQ5SPQpePJUPmxGg4cgnpPkt7jyMyXDSR5JQmM6F",
  "key1": "2pnYbV9s2op5RYdB3QA8Vqez6wnE2GFGk8Hx4P28W8WA5yebAMAdch8ob6eAkUZWUXKTRijvBxkmw2Txc2XnJZJz",
  "key2": "4WDU7SAs2CDW9MX94RDcpP9wJtymSEcDRcoDZpNtk2NFb2a1zhMu5xRGMV83bai3zJ7S4zSq95ERH1HwTQibd5wz",
  "key3": "3yKpZ7d1wJ63Rmw6dkC3rEUwYMRPZURnCcLD7BwoLgagF2GrzbQEHS6ADqupMC7yYHYP8JrBw2qgLem32yK3fKtB",
  "key4": "caV32zPqoeenR6JGi289cfHzF3NebDeo2w7raR8w2YQmNMHcxg29VAzMMesHWhJeRJmkkhCfEB1ZEuJqQghwZ22",
  "key5": "4gyZMJohg4rqNiXdHgx8LCNgANbUuBj437Keg1ofotcSoq5UEdmf4FiU63LrLNgALqTFiSrH3qmaBvPwVb1pLL5e",
  "key6": "3QVrWx967LvbwgvhFbkovxpFmVF2qD5uDCDXR7zzD112e6zEPd2MzBGXuYJDZki1jXmXNDpK9dHTueYPevrc5G61",
  "key7": "2cQkHneyTftfUVvknMrXstxBvDs3jBndBg3hrEAcuXrHVpd4JJ7cZ24UNHoZ1iUeYB3bA52ejMwvnLE7XfJWrhn9",
  "key8": "n2QgYnBUQG1igqc4AvgCycLoHVBTv5JBHgnBAEGoUgAdoapqadSafCbfBCwUmjCrMShNWNjWoN2ZUCSvgfwEzUW",
  "key9": "5CSPnYYVXmdCnB3wdQo5RhLRV34KrFcJrhGFW5WM4WcVkvdNATHKcyndcpTRW4oZ1T84KfWjR7NdcwoodsJ7mjAS",
  "key10": "4hPu3DeGeTNE8f1AeR1aB4GceMv8Wg6swTNnJiQRgjwHRzdygTMgE1WvspLdn7mLJYz3ZYNCpVdNxhkH8k9PwfX4",
  "key11": "4WEs4XhiBL2gLMiAZAbkdvwtmQXznobozARgEntnGArF7SVzxzuKmDcEtZKKVf74yVx3u264oRdkktYGCryfcbT4",
  "key12": "zAFLVE8X1yfh96Z5uL3EySZzyEjAQ1VCJ14YAGxLzypaQS8B1CLyjM17vsHPZUxK9nBLTt7eNQEHbcC4rjZSJxS",
  "key13": "enTF4kxG9nwpFZSASaaUZaZzmfuGaqveyteqr7czgDR8Z1AvpK8fHfuwPNbeAi97J3x7rsGiVUvXx5hhrJicqwT",
  "key14": "26ibHeWffjqhZnsfWRsN3otnJBpxYwsMxV3NgnEyDNEUrkz4AKhn2LKoHz5CsWJmZSKVDZKA43k58XRQVG2wcP9M",
  "key15": "3ay3g73S7VjC6cUoxda35im4XhSBkudNUb3UkAUv1K9GqzJL5Xf8YJn7ghBrcucZCjnYViXMZpixeXB4SyVnQXUg",
  "key16": "3AXyh53cH58tcT7QVDbxFPRpdHHQUgMckDTt5tQeyPCfb9G6zxakTsgQ9Z3LnSFBTA2gi2veXkw9XXVCiKmhDMwA",
  "key17": "5KB7Uz5C4E3qWgDPT2a3KBf2wqfz5EmUaGjq7bneo1WFbYFrM3Dpaf8ceriVMq5eVqPBn4z2wFrr9dWeV8MUNydm",
  "key18": "L7vSUsrqiijjZRbj4SHtNzUX6PXV1NpjPV3tmVXLmd3W9hAty5ffRLYW4WbDLK8oiBx6j3EuTGxyLqV1PdeJfwH",
  "key19": "5DTaxMndAvnznrZv5n28QtWQaM9cXk6Yzytc8aeGHxR5J24SQLqi2rpDTb8cGVAQRCnm5dTVf4DSDGP8gWtAcNbw",
  "key20": "4T6p5FepkDDFAjVLEGSt7ipUjZ58Zo6vjvn8LQteQxPoFjTRBuRy1gjWaXt7RYjs3SanTQjo3C1sZhjG5f3Tnn9R",
  "key21": "3tggn5wgofGcCenw5tH72SS8EbXoPH9fn6i5VwJbLSLsc37j4xBTAhydW59UBtbgucpvzym5YckU6cMh8mAQXNrv",
  "key22": "2cVgsNzG8RoqUk7KRRLXJkB2nApVo1VHPQVZRpfgVhUkxa7NqA91WbJK3JctzaMRWH2nx62BwUbQw565t5gHmzyH",
  "key23": "3oa6Z4YEMD9trNNNXHPPEB33Z4cAm8J7iYeERhjnigPGpibe1WhHgGtspxA2sXutNLiTDreKatJ9PE5GXqBZnrvW",
  "key24": "4JjfCW6whohi6fsuRZuKhyWNkRqznRFrA4B2PwTLWvFoRPG6CexLRMYJmHcSzc8iF1Xz9KpsVCyPUd96PPbZdY5v",
  "key25": "3wicTFy53q2N9pT6rK8m91eJokbHSfUhFGwaj169NgbpZ2XFMfEM7nHSEYnU6ye5aRgSZMCGNUr9ZCUWq8oP5AVF",
  "key26": "5GbUCgkUiUEJYfVvLVHAFEz2cZkcbCDSPtBR1WuQDnMTQaEdPBeJD8EfAK9NJZguVwX4JmJmZkbqiU3hhWDTAusz",
  "key27": "5a3fpQKveKA7CuGdFhz2rY9ruN1zw4YUf3YitzziRDHiXkM7fNa3viZaewzMZo1wQ74AKUqDwKnzwvCLJjxianH1",
  "key28": "2VTsPANQRaSbPd83mB38FXyq5KbewdTFJ4Y9nGZgGtqBT1XSDTRJSBpp1kgLReirQkE7dhCyyb9CLStvc1k8aycW",
  "key29": "AA1oqid3SVmdjQWbb9UKd3s8qzVsAoA2VLqszfS2bwbq3kQQHUUSbNNEyGhr4fdcUFzY4YViin4d357RAxGKmpt",
  "key30": "5k9b53Un8UZYKr7u4NZzKKhaBrfyeYAW6JB5EC1MYXtQuLboQZpVwK4iNSzED84dBLpWr1CdoS2pXwE6ychXu1un",
  "key31": "4tgW1QcRDCLkxmoG9EDUgiLERVmjSA1NFNxEDgs9Fm2BaPeKmNoynVazq9L5KNe5hMVV5PFHkDbe4oW6qN2LT58",
  "key32": "5Upro6P9bVnVwLBd4YqxL6FrB4vK7m2WP5utkWj8q89NAtxi9SCKEYigbNp8W4k2jHRTuCuP81CcfVLGhvseux2p",
  "key33": "5c4EQGHinyBo1Vubo2GuXAhyrJUK33ggz4ZmtSthQyAjoVt4CEGwG9uBkKFTHuQMGdTAWjMZkB6M9SatgMWo72vc",
  "key34": "kwRMiYt6hSEDujhkpmPWV1KQBLRf76tRTDeok7BE9BeRMeZA43bhsSXusTjRMB7bbPG8wTQndE5p2L6wrN5ZXNU",
  "key35": "5hrhacNd28kErJ3HDvYUZ72Mtzvz3Zjsaq1jCdxE6FWMP4Y5jH5JrZLkDNBvu6dgL93UUEgtn2nXGizZH7ELo46h",
  "key36": "5m6YzrS7z4Lj2zbkrjPy8yPaERNuMauxC4YaJSx1WRfLyDYE4vW5Y3q1gjRmV35FUiSFr824pXLb4hJqkbB3tZr1",
  "key37": "42DzmUJj8vaBF24vKJXoUfJUHq5saFn9u7SZ8prNUH2cNBySovpbZ61pVCV1soLQ44GwVCQowMMq4CovsUy6a8Yz",
  "key38": "2LnpMc1kohFeFVZ3VasUgHfg8e6R5ratVwdsVxExmzCsouySgiFxavadgxaiRGSgH1gFEWkmXL6Tgm41MrhPJg24",
  "key39": "2QZps4LfCkmQmjcs3JSrTmevaMKWqqySU5ho9UH76JTY6BHX89ECvV5oeVYbK3BxsQJKdDjNJmWHtfh9p1z3P9aH",
  "key40": "2MTnSn1ytYkp6gFmd37kWLP6TEf9YS4h7kZBTbcmhEq9zXWuMWTDa9ctvDmpcbabuzS4sg1GHHXbXmRfiRUyCHms",
  "key41": "4S2hoZ6LnAJDkJHGsn9R3fEaSonw1Nwe5XYjsiFs168hjxs8Nj181Y2kJtC99F4io2Cq3gcaJUp7L3y2PAfSCyL1",
  "key42": "3MdkZqm5aCVGfYymNhJ44VjhHjaq41j5Vfm7NVorP6s93Y7PG7PSmadYSHM51v5NSCQpbVoqhHebhRt5t3hb5BNo",
  "key43": "34T63RbEtmZpLLWV8dVHsYwRHWRZLnrcHtE4h7e9sx91W3kjN2tXVieQ86JdgwhEuoXm1CW9JvLqARcrMfUKnaua",
  "key44": "4A24u8xLo6PxxeN1QKc9YMkKvWGVdvohZb8tURNbBcQjpiQFJqcWs8Fa5RSLdugVuYzca2ZT8FXaT2nXzfuvpiUS",
  "key45": "65pzXK9BHzSPoARY8VRj3hJe5xmi8cBpUixqYgGE663aZEpwMjWrU4XZL42Dj61U7p2JnqLiwVs8fvbVQ15zuv5F",
  "key46": "5PFfJetw6yfiVVXoFZd353cNGzx52wtkx3jc5EEwzQbJDUmfFUKySwfoY6KZdD1PVp3anfxg4cXNx5ebDfdWr9gQ",
  "key47": "Li1waAxc8jVR2yHouKNWEPRZH3ZjbtuZKDZR8TLCdDwk2pxX3NMQgTDXbFNDP8aaPPLJ4kjJDq1eHTabDe74GLG",
  "key48": "3QcD4pd2BqsG8wWWDReKwE75TZcYCLN4hARqyXdTCrxrdCGkRw78PkUvMYR7zz91eJ72FhjMVWybthcGpNzo19jJ",
  "key49": "4L4GufddrtU5d8bcXVea8zsLbzTPrkdMFjSVNdwdYb1X3WniCXo7SFzjr5LKQxyN193bbHVB74MpXzT3zixP7T4q"
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
