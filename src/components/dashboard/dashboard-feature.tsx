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
    "2FzmPbMnRobMVwm3gz3fQ9DbZ9YTQ2UDS6pH2XBmTxatXpwpo1oowbWqCb8MeqHuURifsB9VXFATQ4fbgGkCJko1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoEnJxXHkVCer3UkRzVwCP351WZAMYipEk1cjTfNXNXnCbvPbGRgQedbCamaVTQDvG6NSy3AGMcba8YnYfNtYiE",
  "key1": "4xGTkxcToMs51LC4CKWAEsom1wVAU28xKwEA55RBP1zQbTGSz8EhYLVpWaZhUxYiTp1vCa9xJeRbVQWFpR7ZKiNi",
  "key2": "5VRwGjUua2DiufEPwu7cpkGYC7W3nQZYs8SQY2wkASadAJqWixhZ4gHHRjRyGr3nib4iNYBQV5QwcnFdBLCSvDA1",
  "key3": "5Jx3UgKnNi8hwZk7suuvdvRzoBWZ157tSKVa4br3RQpvyAhaB1cuHFoxzbmdqCAd4RtR1gwZkprRBw8zpdq46QDL",
  "key4": "5AQL5D8tB3inrw1xxqoqsm6PJYXXqyrpZYzT4UByCrxSEWBrKtupPvJMMyaFKWd1FsxwE4rbN8f7Y2uqfqEQT5nh",
  "key5": "3htGreCX5QRKsDS8atgR92RZ98dtuC1Z8o6owe6A2gB1Ud1PYPCkCnGWZPJ2MEXbRWR7gLQ9w2vwvZCaP3gsXS8W",
  "key6": "5YxqZAVAYUTWhMT7fipBMaNBBt4kcahCr13hX838JZaAdb8rFkuRcYkWzumuDcKh7CNCh9Kd6UTsxBTnyNnxFz2A",
  "key7": "2L6VBNCB3kzUa2F7s8WVUGtpGEvJ3kAywEmxsLyD7tjJV9mBAp3uAbGQx1pz29PkQrqoedmuZiXDHRjYaeZR5c8b",
  "key8": "4oMmYFYF51euMErBNUuhJ8jdjMDAh9hef7iHQbhmcQrRACUzxBA5h8cqQGRMedi73DWQN2R8eStE5NVoLRYCkNuM",
  "key9": "3ygGrNcHVtYNkP4i13zkW47hmF7LjRQifvLoUPWqaxyzUcJS5QMCMGnpCQHU2ywZ9uWv7qcNEwrqroyRJPFW4Jw2",
  "key10": "43X3PHfHitTdESwofHbi4DCRGuCNGP5ZNQwSMQrs5HpjJiAbCQaQSsJfQ4cwcLpTqwvM9HG2ii16nih3e5mauvLF",
  "key11": "29VU1eYaQAaGxaBVGwMeMMCQrahbUDoBhU5y6Ri7nn82X2NTUaZPZZ2PCbkMLVH73EjJrUUapDBm4sZscxoBZToP",
  "key12": "3rroAP86PFPezX4YMcFjSUMKVZuJZjXvKN5Sq7XDFSQ8CXZzaCHvdpCYpagX8G31XkRRVpMeHnueTzgfr4jfJt5Z",
  "key13": "3E9iuYfpyrADtidpGVRXzspXwwcUsWXrJNZEt8aY39q4P3E4h5Cv5Wi4jBN7D4xGXkmzwDjLHB574gpPTV6DSski",
  "key14": "5mHaF2kD3uEwfvByvDNEwe8wzBaypKNLnJB8uRUEfw7EjbZC5BVjGacgeySXSsqi8erPR7NpMLd6rrHdSoi1AXKg",
  "key15": "4iurd1T9iu1XEENLVV3dRnmpC46yxR59ZgqyFTgdpivbEqwXW32eYwZLNEyRfYVeWv9tvNxzC7Ue7Rc2RbvV9N4h",
  "key16": "RtK1EtYJr7CmWDdnwApo1Wnhn4uZtmhdD9LSCG62c24LrKSkxc7C5P4ULYFmi6hQpu8e8zRTjq1sbQ4EDkEf9KF",
  "key17": "34sBp5RbjyaymaDtemaJ66b2f2y18iAoBDfPivU8beLGMCEY3b5U6rxSdrNUDgEuJsw5Puer9BzjppV3QUp7Wbbh",
  "key18": "2DKkE2iswGJPEBNHK1xfoQJs5u3UuQ59k7gQ7yVrmf8aMWvoBCnA9eupjBQedVKsCkNnuXS6tKk5VRNYVicLVrtc",
  "key19": "5YiBsGuhDBeu1KGsTWPjZnFPKkmLv3XT4VWHuTvAxScj9o7bfu3iNYiAHPv4YhxLaE6GUPuP195nuAehRbos7erA",
  "key20": "XBGC25SEV2YnnjV5u8x9e1KfXyxNjzkjjQ8XuRtEmCWmYVzsMGyRmw6zh3VBDJNEyECGsZe56iYtvmajEXHw8dq",
  "key21": "2BxTTVDmghqUUozBQtYp4Y1RdsPhQYsMVRKWTJLCwKCKdtRRDZASRwtjTYCbkc8atVg8cAZMEW6XS6cEAaiX2vrM",
  "key22": "2ozZsHM3mLtAebAjobP8Ckczo7ZovskFzD16sg3iixQWr4LC3UNF4SFQcSqGJQ2s25fyVBooHdk4MEAgCi7gRxY5",
  "key23": "3SJMJQywnDupRpxU34TGaKHgrcqA4P8nEb8kh7HKDZtMB7WSpT2MrUcrt7YR9v7VN3oDCDuPYUtgouW96SZjK1Bi",
  "key24": "aapDwAouamP3ZFEr7bwFAX4oom7sC7vGVD787MJMZiJm8kGNQFcJpjM5V1A6fcgKhHaaD1hQPvoCkEhFYtyqwKi",
  "key25": "2i3yKShkS4H9E4cYS77PpHMXaJF88XVqD61UEdF9FaVVBo6VwLLAvPXSiwo7By53ACC9yX86wNW9avGytL5sRaXJ",
  "key26": "3cqFDSPF41SdnKEp6NRHBSTFpPBgftoGwZjbnjL8JAKhvh2w64azRthKfuLgisoRougfJbUfSJrSce3K9LbAiBSz",
  "key27": "4G15Lcthf5hGKLn4XGP3Xfj4hweZJ7C2Fkp5NskeGSZjBKqrKCKPEpXRaGWu8wspuAzZ7DNGhfnoJHT6hKbeVfWG",
  "key28": "31JsayjcGsHPV4q9GvREHkz1YR5j2rGaEnaaRdcjQcvVQEpDSNgi1vSt6wESntSCVv6W9HMFVXZDjvt9w1Z6nc4N",
  "key29": "2aAXkGBp96d7pxMhp8KSqbPXupWdt98Zy8P4EDuhfuzHrQ8P3dKXD86BuWnNVnhosZZBYCFxqaCFEubDcGVqYFZZ",
  "key30": "3X1jX6q5UKwtyq8gXRLGK1Rm1rjir2TFTTBNfkN3vuZcKRJoKbG33ZNngSRFPtSdNqqirTTTM5v8vFCsodG3BUqp",
  "key31": "2gcoQ3w5AAwnXqJfQ2kGdtWDHj5sjeenpn62788tyDT94ciSdfUwHiD29A7xLqwmpigNSLZd2migDT178kXjk77f",
  "key32": "29eDwTxUorKs597WaVUa3qhWZkACeSPoxZoir9xPnvq9r2aeLFBNMP1k5v5EkWCmECSdBzf6qaZEN5bjoD1TzrpY"
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
