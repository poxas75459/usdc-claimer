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
    "4aNqkVmLHiZd9nHwgpS1b5mYGNFeA9NbLCGSobJqAk9Gqz9HuMq8MNZGrvUmAVsoko3gQidsyvQpG42ZZWKgFYqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tijv1NpoFiX27mzqE8jCEEqxhmrhDTRCgPg7bSsdc5v3RSkLykzouxgzNjx2ChQT6uVjsuJmNJKGEYJCcT9pKMa",
  "key1": "6iqEkSAtUrN7rhDgzPK6JTXuBwMEAmWNaHbSFqHKspVxRkxbNzySEuYkKZSQi3R8HJ6qZFbDZXi3C9gNrjGkVoW",
  "key2": "49PC9v3nkTTYY7B3mmGnMbrQHFuJuq9X74BPDrNCjADh1g3vxZHx9mZR6A7X3jdQmd7C2rk4jyabf9H2LH3Lk7Dm",
  "key3": "evKHT26db8tniWCZdFUUdH9teMQwM1iJR3bu4sGz58aUSWoDsjDBaHVpyp1QaTjoP744G9kn84GBDuztasPDJ6V",
  "key4": "59WiU64nWLZYAWsv4n4UCxUfQZQbGo7hXQZbCze8L4DPzW4pLh3UrssoNTEtFeVa9ctdotQUqYv4tB6vnzdsaWXT",
  "key5": "33aHS2ApPVwqd6C7Z8kVPesFn8v78ZSkqVoKTmcR1PHAC8hsJcQHcquHzZSKZhiCCM8LBsnLyw1h57iPRhwuk94V",
  "key6": "46ZTmU4V4jcE14eaBasZ2rhLz6ckQNUM3MhMzboQRDYjbdX5GvL2aAkMGmVxZBtE2aMDTenXhaCZdaFjfmNCFZHe",
  "key7": "5btJUjV5jfjFTmZxxhFkmVNqeGEUbQ8LwcL66yeDPKZH2w2dNr5hgAqQKYw3HsNMP76Q2n3myqASDnGdJG4jFQJA",
  "key8": "iqQ7SwXFEqZpXVRS3qBsNRJhkUN3yu16HEteBLCJvW3uD2LRXtfrB3HBjTjTAScbH7UtexYgS2CSq3kMNqNvpVi",
  "key9": "yURJXVEGbmue1ARuTTUasQErQr5s754MozPy7ihg3KLZa9XbGKd7aj1Sa6HHF6USeBbUHXubh7mgU8huKcXXE6c",
  "key10": "3qWs4dtgE8zJv4sWAPSV9i1HMFKtrvTHroNhbq8uaPdEy2E6w1434mLjGeYexfy3crXEjtwdKvkQUXcYxs7H2Zfe",
  "key11": "5KAHiQcYEdsF98m4ArwG2Po76DKtguqz6EfN28dphn2ZeBsQgaGvMRFwXBaz4wWZE9vSmBxKohPkeLEK3tTLbrA7",
  "key12": "3hxLY72tFVgc7ApjLxPeKTheNmTMY41WCEyayRPej5u8mhYAnESbKmmD146BioSLAaPaw1qjvribaiABSLLmhBAE",
  "key13": "4ae4RGZ6sGM8Da3f1BdUDkuUZxBhg4EHMg9zACYt7Sa64sACAmzNpzBAmDmZCNLtpZqU9mpcdhKWqiYMNzxX3mV6",
  "key14": "5LvoPKmVRZRNrBxVz9yQbjzS4tGmMZCzswMYrJBrDUHLQvVpVcEU5w48R75jc1T6gn6npi4cht5LFo4f4VmLSiNh",
  "key15": "3bNbdYEJb6yA4UAExnE4xChydeaagHTg4BBqvk8EJuPbfH3ndRHceAHqCT5JxBNCsTToNTTdBc8SEhyDrps9w84T",
  "key16": "3XCeEY8i8GreyQvyZJH1PqEF3kEzWig7muWfacTsXj2RK2ofRGcr3Se8KmTFDSyHaDZnY4KrHio5cbpyQEvEuTig",
  "key17": "3MA1FWQ3PnuLyjJHC1E9SYyA3GPbT4u9ZfnimfHF1P8sTLsTf5967cyQtvuqkcp23z33WYMECnnsE3hDs74e3VSB",
  "key18": "5VLfGQmYSox8QEKvPxGGT4E4WNhsXKBDQRfcwEnYv4gZeJ9bhgQVgm3CdNEQDvUJfvvk6pusyYhep5kj2H7V6ewd",
  "key19": "VLuniuuGK3XDVFLgQUf2d2BFMFxJLMXsDH5nuuwyjMNDBh6deAphV93YaGwcGjLGA8BQfvtbrQZJoy3das3ws8c",
  "key20": "4WMATEffopLB4QS54hy7ErWcBfG55WPf9wAFPmL6MqMBx8NPesfn3TTqubUnGwSTcUuFh1kX4D35GdnNpAfXCMCQ",
  "key21": "635cQFqQf1emmnjgMRhoTPEbVuYY7KVidQ5JLG4Sm2vU2frTs7nZB4URT3aPNGgz5zkRfZws5HnF1sWc43PLHWxW",
  "key22": "gG9pxtJaZMuNN6FcPkLG44ozZzbSj14mvGFptvv7dbumGgFEYLnvr2oRj3Qnjtt6k8WmjjdxSNHf6VPVrYtG7Zo",
  "key23": "3hgissyNk9soaDQUsx2K7hz5dJaWbpoHQ1PX9YQPqPrr4xn4TXcbwddRWKM6FRtBctHddmJHbNBMRPYTGpaWRAoC",
  "key24": "42G6FNCp9jaY2KVVqRyhZqLfRXVvCgeoCvSkFGnAn7BksWyu2oefU1sdW6L63t8Kr12E6vJcm43Ekq7CgBu4WaCS",
  "key25": "5JgTjEH3mWbJegD18z79rpeHpw7DaYnN4jSATJgmqM5sDQbCZFEAfL3HokVXpq5RX8y2dvjsea6WtDad12egzq55",
  "key26": "3yd6st5tzb3mRnBnt2yxywqPDvtruHDSTZYvyHAzLue8Lqb7QC9TCKzdj9nHJxvHBHEWRrffgkoyT1ZcYpcyzwdQ",
  "key27": "2PMif4wZhvizwUK3Fvhv3vv4BxViF1QKAWrC48Sh6hwWdqqjPdQzdNNXGpYbyToozabqpvmrX8DoY2jditSQDaCe",
  "key28": "2mwGNXTptFc1yyzNaCNSMkMpou86pYXTfHooFaEKpJrwYvzGTVCXF8X12Rba1vZcS5g8eP47xPn8kDWmsBiniuuu"
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
