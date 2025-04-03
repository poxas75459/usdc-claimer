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
    "ufkVaNo27XqbZoD8WGjnK2NaGq4KPC4KFp5zZAV12qTTNzoFmWcPmVd7EpupSLnn6CH9xZgygrUrabztesVZFRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JpNK5uFCnfAJscXjctvzeuntqBDVP9WrYnmxeia8iChswnUEsT66Ak5wPApSEySJc68jtCBYjVXyRTAtat58Uza",
  "key1": "FGxatKQnrGXgRrJu4cR1R1wdiuxPnwywzpFByZ6e1q4spyN8fyzUhRXuzeop1FNpfYcTPN5txdv3xtHwvhcSFPS",
  "key2": "3po4rRoiuSmjATjL8vimqKHXaUmZKSR8Nka2NqEWZpbjcX7us1m6zWJ8xPcerWDEnLXTYwVxMQdXP3hL27mnh2f9",
  "key3": "3xdFQEjqi8xscGuVmXTuRmkq8AGwwGFChCd7d2dxofCXFDKB3vyfN6bZBjshxUem4n6CkiLZsNdSskhfWLvSsXYp",
  "key4": "2GRa4WSyqKokrqQWdTJFVNNDjzUrWe6K5Fvn3p23Z49yovZZShm8TfvtLkUiHjzk6uuaKiidbNyJNyyGZYDoPTEf",
  "key5": "3rdp44e5BiHiexR7Giz4Nu28oLnokd9BvkTjfM33ZDpxNkNRsD4AbGzXQd9ygJBPy4MfWU5hP3qE2AAbFESPKEqd",
  "key6": "2cyEeR4n5c44Rmrcojo9Y33gYtaDhGHeyZhDv7vvwc7YZputdT6NiP6Yd7JrnDEKnE8VQV9gd6CfNdoV2eqedE5v",
  "key7": "3fy6tAJ2vdBXuKCCbcmPq88WAZEjfY8DWRbm99WfgqAapjyVLnQCEWBPg5p38uJVwPMaEGjfKKrdXMhCYhaEMF8t",
  "key8": "4cEHaiMjTGr6X6gB2sfyZib1Z9huPi2uJL6VZnB8V8NwUccz9N5dvEJ1diHiU7ynE94yS25tdossCuRAKFfwAGpa",
  "key9": "2DQ6mkT6dtGp65RmCuX42UzUZbvgHQns1VXZvepQrnw7aPxS7EWxFNrd2Ck7arEsqH1JfG9UmxpB42e1263xZoEs",
  "key10": "b3XtSwCkBU2qbvNRf37fXgL5bbYRMoSfAgSEiztSnFBzyXoSB5PHcp1beLfvVowxGG5iHTYpnsUWSVPXvC23yZJ",
  "key11": "3q78pSngGE2mJV1DFQx6JeVsqS9g84orRM6P8f64jk4BRFTXA8vM6D2MygD73ipbDC34w1xmcjMPJXnu2RG7HNAi",
  "key12": "5tHoaaFgdEFJiNeNvf94VUDNEN5Rw45fBNj5k17szEQ8zjPB5AR6yXHPb9fAcos7T7HcfbZFje13HwbE8UKiARBj",
  "key13": "4YzwFESW3Ky2p8BGGEupfrCBdeHJGH81Xx4UvK1UaPyu9SX93g2XQbQgJv1hpfMyTzU7sJYGt1ucyVjrDNx81wCT",
  "key14": "2Uypchn1nUn4qazK1Xx7JLMbKEjpMehUAZcB6Qy94eF4koT4TpyLEFMXbtM5z4Vv4bpvKMAG8EShy96pBCHrZRa6",
  "key15": "2cRNfGTTbDQuDvwdfM8vjY3acH9ySVTeGNTnSbAVHBTmq7d3rGJ9hFEEhoDUymoBKqpHhHp4FXkqUQttW6QKGtMF",
  "key16": "2nkGfbHjo179CeuXunt5PBjrg4XfBDGux8RNCvkjDCN9zVKu1Ha9VF1c4vu1c394LS7DsLYe8zNbwHhQnBp5x7ji",
  "key17": "3JY2kyjDXCvzZS4B1Nfr4y3NdBASMugm4choXRnRno9H3Ud4xNLz6mycVUVNfvfYWcoZvEAkBAWcfKaybc6wrocq",
  "key18": "31yFW7gmvVuMXdYN7zZcivDABByxPw2Uf3vmvYSr9mPFE9SBdDzFcJnbuXGymx4FtYyUabeyyzH3ei39BZmDQEgZ",
  "key19": "4wDHAQ7Y9xWv585LfAqDsBjMMWXRugQPHQdvPpZ2n6NQ9RSkFBLrZ8ZQyxTrdY7AtPwY21CQ1tMtXvu7CZNyhhSy",
  "key20": "xqTBhSr7iyNdThMNtmbxyvca7bSJaBaqmNNE7FnWYXeob6M294gDidKSZvtnLjjA3jbpduriDFyMmcqNccvn9wR",
  "key21": "EqtCr7DkqsLBVH5FyLs5JpXovCCnGTyGsHVtf4YTMZrTg4HCHk48zk7RPcejDyqJywcsfHUHvcUevoe6Q5BLpAh",
  "key22": "3qD2atWrHniJ3LkfpS7HYtciD4QJ9xUHFHLaJpubaiLCspqbydjLsyfUNkyNUbz4jxCWjJLzfAE9ktW4AoVztyde",
  "key23": "4tjKSjtTkYa2c7LL1zV6tBfDr1gArWKTYLURfydyLPcrsDaVqFMqqv52eAKmKgYepuJne7N32wmemd1AFFYNLzKN",
  "key24": "hWDXJHkFJaxepby9KMkvdzw3GLGXjWYxqBAWbtf8WarwMocq1fZQTE1tmF3aR4K68fPuMGwfw1M44VCumNduxBG",
  "key25": "3up5W7osV8PKfBd9uVftjobbyqHB6D7A9Gzjhyaiofys8tbuBJ1G5vbG6jAy14Dn1kmAmf5d6M1kFJW6HTV8KRBS",
  "key26": "39X3PpVe48HpdgSvGZJM2T79T1hgza4kr8gYBRvMdo5kAYp8haZBQYPnTnMDJqXSaGVUhGU3ZrtK5WTz7tBxvMQZ",
  "key27": "29qV8BqWSqNGpf6GujWyKwpEkqUKTNUP2VYXtmvPoYGUyf6RE15mbT7tQUGAA8VB9ygR5aCvWDAtVGJFPDxFAyAq",
  "key28": "2C7xdBrzSZ6MXHRDRE4AaHk5aQb2UsdHVUchfg2s9iVACfx1t2uC4pvAXVR5iVC6KeBf584VbeVMzMyd9m77MNnV"
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
