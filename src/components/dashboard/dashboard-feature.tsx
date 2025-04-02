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
    "2fZoNmwfEwkBe5AjC1fmwtHBTjhD13ZS5mPDCb7RM9oUpv3zFuwHNXQZ5aQ4CU88HwGkeqJn1fXHzTuyXyiu2Xkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmvYXohaCM9FYQQPcnhJiqS65VWcuw97SZ9KdTzNCD4Sq3gKSN146hNkG6x9xGfzcnP56RtBrLU271838sCsn8y",
  "key1": "31ZEh9BMUBSsg4z6CA3PdJxB5igpW48o7pbTa24YPndZKP9GGBMX6c1Fi4VfTJUCXB1VsoodCUfepTwP6kK8QN2N",
  "key2": "4AAMUaEodwt3hBjyqw14fezbBcaM4hmF5waaKRD6NWhebKPJmneA6ANZYZCUVutTqryxokkkFL6PAqCEGPNrCeDG",
  "key3": "YhTPx1xK8eXhDUzoP9B1UJmyEMk9kxbqKaYfA2eT3J4jPvTZ296JWPX6bbzChdSTvbAgcpXkiYNyWiduWkfg2nR",
  "key4": "3aywoTXotBzA4kkwH41PVgMwr4GYzEWHGGRNqkdcqwLxr8oTkhnW4VqF38c5x9WTcgU81JCrwHJNPQPN8iHQ65ho",
  "key5": "4QKcP7iqDg9ZaXmy6qYWUTbZgmeW9nwTd7RWutyvA8ooGbmoJn1JRdGUZ6Hma5s3tfiThEJSxerfHrpAb1eHuXpX",
  "key6": "2UR2bYAaRuHP81tZCinsfqKYoThCbxHRNTqBSd9yUcKCaxpgXAG2Ud1bPSYuJajLa455A44yhAHCZPvrEgH47SBG",
  "key7": "2K9nfs2EZ5UFMMAY6g8HiHbaPZupjQv6X36PPoYu4G35v9nZbDZrdfFKfYw7qesnZsdEmwrPEnSjSi44uoNrURnW",
  "key8": "4KkKwWgty8YCAMyR9oUejn8uPjLRgiuURsvrjNhmd5DZbeKxA3wb3RSP6jbDFbRmhjCi57MZWzMBXqAhHRRhsEMi",
  "key9": "4rC1NP4mZwJQRx8NXet84dXKPwqmtJfpMoseCxDNChogH4GH9xbA24nHVrJjoytz3MDwm3TtsS5VEWqiEjLfMJi2",
  "key10": "2UX1KndYNdFSNT8BUHAkYQKkDvVQ7g3kxwWVrP5kN6JUW7ym2AuGozj1j8Mo5QjyAjn8rWvSmyLNdStRCMMgKueh",
  "key11": "3gAoduBd56VCfA1yvvrasHLcBEW8hKFsV4dj2xWYPj68Lw9sjC53vSMG7UpXmXu11ExKTHa8kd9BBCm2Kq6hrMdW",
  "key12": "5QpXnQyEmst7gTVbF482jouVERpQiZBXEBB5ppRcT2QZ34beUpJwqCZH3oBnCavd7txdbgLU83Lp7DguQFq1HeVH",
  "key13": "uvwotaxDXLEgwhaZFPyayuRd4XZkvxJBAPABenGKUKTWcLv996Nj4SZnMEL42eu3WxF3xagkt5G6L1AAnuW3FoF",
  "key14": "5VhSDdFBow1rQ35GG4WWbtaamRuYzfbCZ6LG7JVrPtUXtJTEsAKXSWcRbJwYNZ9ECjLyoLubEU6FfyNpSVHBRXdy",
  "key15": "4JTyifA6gtjcvBEtsufBuESxNKrt8s53zg3vQ9piLoYYREi2u9fQXU9oKeFd4jSBggqe2ZvLM8hQZX6o3Lg5CR44",
  "key16": "2pJViMsqrZqWxffWkCAK2U7K7kqhGeeWQgzhYZ5XjChEFAqzu7LLjNijdFHshmw8mpRkV7hA65Hwrg9nAc74DEpc",
  "key17": "4oLWqFVTGAQP1Qv6nRNpCWQeSXBKG9vwkpCRdYDjXWiAUDxnUjDtBiGDBCwBhjdJbq25HjxzpNDEQTHrbQgTCooa",
  "key18": "qxAWY81sGBxsHJb7RtqkuJToCEEj7ZRTedromBCFYe3JfMbUmDiWtKytY6m6rp1ac8kBLRrSYqDTr3VMwKyK6a2",
  "key19": "7rf5vG1GiE7t7CE5Va4ifR2d2sqU6mR1kYVegtdpDymdBuNdXFVo2UDdcT39i5NV3KkofEJ431Mjg977PRSkcZJ",
  "key20": "4tWtR198KcJv3Acxs5DrDxq7FJ7URciMc5tFECsm3MRwFR7QxEiWFWkTN7bSZ1s6x5uDSF2epZ6nHMCKJhbNJjfd",
  "key21": "3aSBJ8HkFsfApvpaaBbSVWnEFBoe3QjjJGsevUHtaSfFh6Qo4tAokozAcgTsFrcoFNWRWGBYZkY1fqzJFmf37TA5",
  "key22": "ac17KKHPAuFmQpoQHm3q2spUugxuTs4XaSCxGb1FT3cMXB7D6vL3sX94xBVDduYu6Sjd4K22xsRYhLoQhMbf7zn",
  "key23": "4Yz3H2GVksnAruDnrhAv4UAAKbVfv6DtSoUhRBHw46HvK1DZ5zjAcGfvzzm9YwARvszCbMwAjgThbxXfTLJtszkp",
  "key24": "5WHfuP14CbcrHa8SJTcGJHVfErZXEzwWuzhQQnoEiQ4kvGiWZJS65VWGvyj57cnChVLN5ZHqcmwrQq4ybvkZGZ2f",
  "key25": "4mgL7srqjWPqxbhYsUdhhk3NJvtSSSHvkZwvtLW3ebqWZ12vB3kAK4CWZLiztG2PY86unjocuJ7mMKHrbRE64Zg8",
  "key26": "2bqFSG8Xw6VbpPRxU7t75APcfphwQTTqVXRaxLojgocYQfwr1o7ei5PKooeg5hEiKddYkpbrcgdBa8846E8VsL2R",
  "key27": "4HTSmYMsZx9ioiDaj9cqxC17YKYX2UyBD7qPfRBxzH6AhSjMAsHnkoYxTskgyejXBWjs8yUbm7HGSicSwh9YgGhj",
  "key28": "HyAtUQ3Jy3s2Rc9L2iMsZ1a9JvZhBEGkzuEn5pu4oF9oxGYtmbkgzzYXC35C1FRHhuuyzeF6jJqiVpt4T5VQjfN",
  "key29": "4wciGZkTjuZ7o7gu1SAfaUbdMCnyJksncxKLgqWHzx9Dh14GHTVUgKh1gzHs4k2HoWZ3m3YZ3uhsruxHMcKDG3Yp",
  "key30": "4zFM2mBTGvS8eNcD71GTq8z4V885YuWihcy7aYLJkS56Hv4Vgz77CT4CqiTooMj5TERaTGBVmNC2Sex6WNm1fbmT",
  "key31": "2ujzMRJ3dH6DUBXTrZTnK2yyKoZEVkMZqkqPK1Y63AgNtEH298vqqt81cE55Q6u3knneMQHMT5judZMrjYsopddh",
  "key32": "2Qsq1WRnSNHetq5PS5DwAmNxVscg2Fw6QYj3t4zLfowcj9KeG9FXVJRKXZXqtDg8NMrArg7YnwTDBEf3rigbwSG6",
  "key33": "62btyfH6PQfBcN3cvpdb9ucaLQhKTwYX3z86Ar9NUwT5MYQeRWkDJkyDnLsH2BVF6NwHKroouDDvivc1jfY4Bo9C",
  "key34": "2iDpQJsWkpS63q6P5JMR3Gb8hV2CqmndujRwmcoWBh1piMeiUCjnTe1Eg4prhWGPFpomd5djx3e54YMsqGD3Dydx",
  "key35": "6737dvT8B6f8AzECvqjhLof9K78GXXgVRofvutXfywqFwob9J2FY4LZM9UUtP5ZjSjss6A3bXe8oWEXZvG1DaWNF",
  "key36": "5A45CKxzSFMhebBH9AhfBusEd886z7GYgCxFZE4AmydUv1rN328fPE7BSmd7pDg313uwzZP7EqJuCcW5SWgHwjXV",
  "key37": "5cHaxwcj23iek5ooM6SR1ewbmR7kKrmwUpqhBF4uaxuPYg8jB3WriL7myrwQ6ipcy5nGTWiy1Cyy37zNMYAzhw57",
  "key38": "2aKhLMXqU6ezPznPB8UPJQTRv7eULLgPQpcktEuuDwEVerPjnTo1fL6PNfEHPqeJGszkyYaGTx65mQTduNv1eWVC",
  "key39": "3bRpekFPVa43yFMPx3V3DztXjoPxZdPABHrp9qXAVz3Dr7b5TQEjgiG56fpVqph6x6QcR361hwDwRE986KhXpbB4",
  "key40": "s5WpVgxmRGfM4Syu9LL9Ux1fvvuGyZUHXpNMYq3gF4GjAAN2ybG6hFZjWe3EZcUW3tHAN5dpskhqdxSB7eY3zXt",
  "key41": "2cTCCeVMUP2pWpR5sFvcunF94grcGjkbMfN7A5RLGqFjJ64ot3RpZaaoonPEFJ1XecJLmHyUhzcoyiwXNV6QsetM",
  "key42": "64jjnVwvCuSJfCt87nN5nhwgoMZB6eQB2QqmXJBMd87tt7VbVCmGhev9j4tdur7GW1VJMsiRqHAxesUHRrh2Qxgd"
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
