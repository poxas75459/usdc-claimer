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
    "3Yu4Eq8jExjibnN6aDMKj344WsAc2UUNz5E7ArkMPtu62vfixgJgDvhKBceeZj8j2AVjyS8wCd2UcaDaTCwKAHHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32peiNs7Kz1iY5d5TzyL6VeDL9TC2SEXy58XSFfiLpbBRDtZ6o7xmBDEVNoY6J2ndCKfwcZi2CLounBXu4GbNou7",
  "key1": "AJpQT7o6VzHvpXJpu39doyj89qNh7FUfi4evJJ6ETbTqjsnEqRkmBy3vcMfuB1S3saz3uoRMzsnjNvEGuJfVxY8",
  "key2": "4Jdf4EZJUXuajZ4q2r9cbLHCTDfgU43zhXGFsrsDgrZw2ywRSj4cqwtaNLFzgaHdcxxg2QnbTLL6kAZ5Bp9cwUZr",
  "key3": "5GmCa3uKmm6u6Szd1orDQguCBcVmHUunncZn1x2mSDjaKmPwKQNJpufZ1gopnDwXD2Pu3GwTSY4VSrQeCkLJWeu2",
  "key4": "2xLf9KQf8XuFydXS9x1F8wboJX44YEGvuhNYbaGFfQyeZWpxXQ7MEwy9HHYXa5QPFMGb2iv9JpLL6jpwaztiPxX9",
  "key5": "4eSSZwD7Je2DfvgnQHanef1EXETRataVMsE5Xduec1Xvuj8hbiJMEeDeL8FcWPUBwtkTqKN7v4BXU8qoguyy5Hnv",
  "key6": "4D72dPARoKkh2gdWxHs4Sv98ZqNL5NsENfDbdkSbShkaMb5EBw2Asy9AVH8eH8DsMXeGvsZskZLrLKQGrFLwtN5Q",
  "key7": "2mX91GWxLndqtUZ3untf9SyFzd5MgjhmZKXGf6BxqcAEy5FUsayfSHBxUC6arnc1jDFC8kgSBWsDnPpdoY9RP6eS",
  "key8": "4g7TadtJAsDuLgUzHdj94n7aRaPHGzQ1uWvDWUaHjs5n154ZGGT7XPWfSCKMrvPLN3wdyH3VHRpzo5vjuepJhVgt",
  "key9": "2GzsYYBPBQCcMBpBvW6kMEWn7zBguQLBadXQW5UUFachrNj8yEDN43AETMHfZu7MYmL7vfnEBrHehyXbHR3UqYVk",
  "key10": "3fC39dpJjiiSbgrAuHxyXYT4vSd2vGjord7ChBCcbsFRRUsNQ1TYpGkf4RwewtErfT8aee6U3CzEUrHb9vveh6RZ",
  "key11": "55p65ykUEGhPJL54xANTNR4uhW5q7rdaokZFBjiuC3rdV2Yfv3k2AGkuvWoVPHKrMyaZDJFYVxvJENcKwKRXxiTw",
  "key12": "414nhCnxE8NA5Uiq72cSYXCRTt3SW1ZtQccAkNCidb9pxAthSAy6xG2CWom4NDDUPgvjJmDDgHbGMQXuesxtyst2",
  "key13": "bQVL68sF9wHEfmZxK6Sc49SKGzv33K2WtNFcFt7Z3SKSAXD75W4JAMurhXsYGjokczubCRaDXhVCwPdPTZ4FaTf",
  "key14": "3BAuz8AnjfzVMG4L5UXBxNnpcp36UoaWEJahwWTZgfbKESZ6HbZwTM6SscauzQE3GxTd5rFNA6UbQnv91JmmcryY",
  "key15": "3WXTqs91VcQGzi6bGrc9MGRPHHAumNQBkCavNku1BbLToizjX4rZsBDeuz92nVZzSgyATYDRvTh8WJV9i4YBXwCp",
  "key16": "sjAa7EtxS2yRMFuYhqtK56L85uNXv4fMEu2t7wkNfvNwHV4sL9zzJrm5jJBzT5zeqRjt5Tth4fKRZUK6B8D7gHe",
  "key17": "4EjhmEMeXnZEFt7bdWeyeCPkreyePKNRBoUiygbUuWo85RRGrSzdXYrqmDRD6BDg8WxkEus5ywRrjD43sQkkQTS7",
  "key18": "m1ba6hjjh4ibzMp63Qk6MFGWnuCPs8WjMXTcWJwqy66Kmwog3AfiCXnjacabDjhBcpWjsLABpgEJnJb4jZt4aUR",
  "key19": "iWXXGhNFAS2tzbxpEUyLBwBL6odPBxq5f6J2CXNi512AcvJkoFnWGVWn8QWtawz4TRCPXFtQvYwEsQawJUXMpck",
  "key20": "2K9MGj5oqX6Jxi6z2kKoLUWrR2mCHaNqDuLUC2MWTivm33Jmrnk29ho7nRqSkTopwKqFeKYTdfHgWuNsutXaVb2K",
  "key21": "TCcpbuJv7GMgNxVGf6F96Wps8VzhzCb5M9a6SKLgRThdpaDvYUojo6gGXeGMLtRaECyiaLU6tf2TS1aN286chni",
  "key22": "5UDtkAmQttXqVybSWK5Byt8HqSMDE6hycEbvHebRyg9VhYJ83geVXr8P9rayW6F1DFGZgw1xCMXMpKZYkrtL8E5a",
  "key23": "3oL3uPh7DYf8rFo64G6233JJWaemQ6E8RTq9Cch6xhLNDUcfuBZ8uG97CPTgkcdfiZHqhhhUBoZu7UiaoWCjp1BB",
  "key24": "3CAkk4C3aExYnACJj76QtrxPQ9PwFaz8ahUzEtMLDNQwqP1myUfKshXoFHyzfTJh6MuFHypvj6KTJMWjGRQkfTRE",
  "key25": "To4Ghazj2BjdqtBgJAA394DQS3yQ5GpQq6cuecXwsbw9XHK9f7Y7PNuDADQ1T4y3uruCtjYE2LKF5oJfHUJn7Zo"
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
