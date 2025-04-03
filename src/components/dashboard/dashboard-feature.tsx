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
    "35F6ug8cEzEYtujA4bWTLabpKFKGHbuLni2FWCEJZMDjNK1BRV4mFBtBdGLko9kY6FvFmWNLdZe2n6jfaCTXKp2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EH72UghcL7muo4yRYVG9Pd6X88TqugX7SczK79LtJNgAwgq8Vr3Lo3UsvK8gQXrZeiPHDt2aV2Jmv2t283YpwgK",
  "key1": "g4v2x26fawN9Ehdg8t3ghBEXiWok9uihH9Jc5Kkex8VD3qGGqyMEwnLtrXtKBwjRjmcmaKcFv57XFMJsEYVGGA9",
  "key2": "2vsL7fYwEhTgpXUrZ4z17gb8BFJS6p6CZ9DpSVyRzJ44wq8ajLWHsW5RbNhKvEdxVh2Eb3KXHvVsJTd2gZWJ1Vxf",
  "key3": "4zG1ccegXKwNQU4vrmymrjsGCXdicmBtFKw9Vb7ENnZ3VbY5DwjdGaav4AmuMBMe4wpUQAMkJ4tVQWR9Lgo9RxCV",
  "key4": "4CvNsuUo1H3nYZYYPa6GqeEBgXEeWFVssHGpgPE8ckfZ1qLDcTDD2m3CPV7vGZXgLKLwpXWfSeSGXJKyfg9XZBqE",
  "key5": "RcrgHcFHQirZigkC11PmuvwEG2Bo3BuYm5Derd1zVu7xV6gTWUnXrhGLcjVVCT6S6cvA1DJ51DHYPNMCng8tqM9",
  "key6": "uJs3wrVZqyerFbuoZEcJxKMXT4W862tZcMuRxiTQRSfh8JHQhu3Xsm3gZVMuyavpaPKyWsSzZyKaCN9V7BTvvSj",
  "key7": "MnVtJHTBwRNMvitB9YF6wnSg69Wiz5jroggPnd4RQSgZJKhMGKWN9DjLSRYPLDXq9rQXBpQdEKVTd37YeNj3m7a",
  "key8": "5mnSJHRBmgUY5K9HfnQLSCjPpcgJD3rwcbQc8dS1v3KF5Lr23E1rXqL8E6Gro449kofpY4Qu1jAQSWzLX7TyYRUG",
  "key9": "h5nrTUqCuB7CdqcuWmCL5K3KFLEDRqVbvrLzdfhNNvHaV4GjanfwyqUREeihZek6DSyEVhzRsfSrTAw7G48pYkc",
  "key10": "3QuC4msmB1dvBtiqvUgzPZ4WqCpdW1WoWrjktDaErGHP9qY373VZqFiErZhmGUKCSzpAP31QfwBDYygGxrLy7qiR",
  "key11": "2W1aiqwUueLNJW9GqmDXPr6NAxXkhJtQm7jaoYUw8aFuixRGs9gGPYLsQF3z9CsiAJAdDroyFhRJds4gZXAxQEXs",
  "key12": "3KnEsTeNhgZrBFS5nshZxetWrZ5mfUzdn4Qq9hR3csC3KzSZxNFYMXb948L6Hnbgjdg35iu6Me7U9LoyQTmcXw7Q",
  "key13": "66SxiWitbSCiEqiAXtnrQnVf9fJkJuth8WxiW4nVXU1W9sNjpEn8Bv16R95rB2q7MCgaNEZMpMs3tytP8LCw7ekw",
  "key14": "3KRXhybsQCAMaGDhpZGKJ7Sf4CwbMjbrsHrDQdA4Dur3bhSVFdXA6Bb2RAAS7zhCFXgAreEatYeicnmS4KTMrqew",
  "key15": "5ZD3arevSW5B6coxbMxR5sw7iZ33654AzPsbvC9vnhnUA7D6hxrzepuUN72ZcLwxS8rvNqZapknVgvmv3ZkCYsEk",
  "key16": "2cMrm9vu4Zrg3Vy4SJcS7mGMj8DYaDrLnRWeXsoZ7CABroAPEpswSqvLYVNM9AEQBczfnmezE5BKtVwETDvkMBkQ",
  "key17": "2QMBu5zpJbWb3qUAovMn3QykEShmLsm3zbqwxyW6JFdApa65NrfVDFUZ2B3JyzLZwKYeBVndri9MdmcX6EQ4j6Ce",
  "key18": "2fyernggQLCMbyy6qwez6C9v32r6GGJMdf94j5eHoaaPNC7h4pfzk9ABhEyRhWBbfRuqGdGCnZeXjNxmNVVkakTF",
  "key19": "65XQGkE7AKQC46KwSrMzwUqyfE15AHGEPfLPopNq9NQ1eEaoa31cbCwrXYrL9Qh42wBkBvieu8RAUCVWeiqFiu5J",
  "key20": "34Kp4imY3QWzLyXX6Pp6YsA3Rj6zwdruRHa1Q7TjUNhMTo4mc3xGjR4R77JJtCV5v94J3JYsy51QLJj68y3vGW4A",
  "key21": "62kvJL6UJApAtR8HtN5gup87vf6t4GsbmPbVp5c1f1P8LhbiagBmvSacQeUZGcerVyb6mayZ9rLiXdYSJWTMKHdX",
  "key22": "5C4yYoc3e6HPhF6HTQeVdDNQYQN7dbH4KWoQpx4Ga3Zzpcn98x2mQ5ydazMfr5Lgj5EHCViuScyaZaAXxJgxMf4n",
  "key23": "4hhoFWvMc1PM9iqgtmqi6XD6Rt1tTuHALXw7YwdHiSw12fkLvaXYzWhFW6z9SEAxQ7LHXJeSphcTaX9jEcAh2PhR",
  "key24": "48FKCmbhmxwhxBMXuup9yXJk3n4GRBfbEpHuhXgkMmLgmEoJW5w2BhHi9cpx9rv8LhoLnUKKfPdwnVefp8nkWXJp",
  "key25": "3mBvZmaXy4uSXs2DUzKDtwBEgMQLTi8KNxA8SeKKask61Yga6KJDQrJuQxAgNwbbqQRJVqAN46FPVgu8ZNGBYCeH",
  "key26": "36SHLAoLEJXiRfuLx2xNBJ4exDdXBdV6pM2jnDYk71oTAevW74GDmsUtP7sTXRjvsi8RAdt4gYFeFoVM13HhSRW9",
  "key27": "yS7nmU4e2oqWKh32SJg33GkCTccGtKyRm2k65TUjRLDD8qo2Rwyd62U1a9Qi7thGVyq8r4xZyTdjGchjz1h7Lqn",
  "key28": "2dBuJcjTLg4PBkvsT9nbbf9eKuaU4VaiXf5ck7dnpYHDMcVWzKXazSYES7BBkigqqNHtRkCALz5hoMcqEjACRz3B",
  "key29": "Wt75eTzBeeCU1hDWBn3ojyRZD4tMKeqebBgtfCc46Le2ZCL7R7zSB1gyVvi8BCZwDrP4NLMLDx2hufUzDCk3Ejf",
  "key30": "3RyoZyN98Tp8mPVCGY7nhD3mNNRcdmqPUScPgosnTieqRpbrbKiQ5dwEz5PBNfwor1rwdqiUc3SidvFAkpeQ7zc4"
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
