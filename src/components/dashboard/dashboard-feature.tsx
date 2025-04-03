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
    "4gh3KxwaGoTJ5C71rEBtk3t7T8sD28v7Cv7RbRWBmn7NquqtJmwVkEM5hb18kGmk2cVWD73svU8yizLXsd1ouzE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BehBVg2W7CPQtKRGgcvXy4ES1pn8HE7P1vCcjhoFTBHiBhdmKUyE86STBfi5AmLHmomHMP4iHDx6znsNqC6D6Vj",
  "key1": "26nR1TJfpj8TkqrRBv2GuoZbaHF3677XQ5uRzcMboQdPft9H23zqZVmd75rFb2j8jiz7noU6cGsF2FELWmJYvUkv",
  "key2": "48DGS4hCcR9xqBwt9jtyn6E49rAkUjYfhqAAUQn6zdFmiRMnVDPCiTf3ETgatHVJeGm4e7SgUkLBEqAJt1XyMDbs",
  "key3": "43rY4UE8wgVtx4ULK49mwzj9Ww4mScMp3ujqXi8mVzDVtd6oRb1eV7K5Dr1zgCF4JF3jeGmapy81XLW92hYGZkBx",
  "key4": "3sy6Kr7C2wChXcYWP33CrRVm2a2heysc4gA9rRNmp7fVJm2KMSTMozAKjBY3Xt8vfk5xuvHU2qPyo2WiiPih66oM",
  "key5": "2dkna4aU2jy9zDboyN9dSQkSbRXZhszeCiaGJ9nPWnN67p3s9r1AHYmFoNa9iwGE3EBx9uwwkxRP6A32hrU4ge3S",
  "key6": "5fs8tQ8xLpteef6XjPjwBfZLAN2HaFy8v9i7TyjN5QGFGP5DzbQmff3HR4yqjibjoyJExnTN4wHwKkcDLWrBBQBD",
  "key7": "4F2kwq9fnYnL8BQACSFfTmvvYN9nnbZDHVFucP3nLhpq9CjvTBLPjH4z5ggxxAaTMjpjX71KDCoNq3ZhQoLQrYpV",
  "key8": "3JGDPBGm3rdnJys4fbJK3cjzJGZn5MYQ4Q5K1J8Lko5Q71KeJ5LW1W2Zkx7KD6xZyUWgLdmfQ8rd8sJHXXMT2ijK",
  "key9": "XGJkzKoSCSyywq4tankhUzT222xTY1hPCWECP63ZoKXxtytcK6eeTQX8sA2eP7hX7SH9ksuxGbeJzcQJWcz87x3",
  "key10": "3WBNQtam3yr3cj5hPKg1D8Sd8K5jHEqALEqixyH99bEFPn7AnNbzodGXwyBh48SHNSh8YNyyQC9Re738QkrLrL5x",
  "key11": "mcv4zxoHK99FuWGKmaBNhB7TmxFQSnQUdRwA9VSZiBF2T3zKuXndqgo5C9WCz4GVvwrw9K5jdRyStZf2vT4ccw7",
  "key12": "xueQvdq6KrxtXN7o73WzijkYb6VyKA47aThmdEdRpmd4UMmJdJ8Rp52gKzQmkHALuNmdm3fQ6ejuYMszwCR6Vip",
  "key13": "126pHVnVisJTEmKBoMbgTZscSunJHccoYtaZn8t1m9Lya3BXAEyqi49JCVGgbXAMbCjJEas9vzkasBNJq9KDEycq",
  "key14": "2V3HVs3WvPHxEKsr2qBx7mrRg1CyJGvZqGZoo16KyEN1oXGGMpzSmQ5Tma7JFT95CbvmExtve3rMBKhNH9oYwgFP",
  "key15": "2GPjEcc4HLziqzw6tR45nozz4F2iFu1JE8rcf2shutLKCe4D1ycz4CvN4smy7CSfPeHhUsJZnHk8hNPgj5c5eBcm",
  "key16": "3JRTrXKB2UGioP3mQeesDyqd2LQgohuGvWboJC5JVX7mqoeYi8ucZuUs3yBFSGnf1Tt33jL6V2vzYccMJZnjtoMx",
  "key17": "rBzRzRLFneZx3iFumSnZsAR9n8UdpMhwtePTbKDchQychRFu6X2SV4iRVT79mqux5j3VEf2P6QDRvyWwQp1smdm",
  "key18": "5zQgtRR6jnVqaEBo7Kp8bGk2CsHFzoP9jNj9fwgYULdyobJurynSX1q1vKhmdc8rPNzQPwdyprX5ZsKHRm5UGGQE",
  "key19": "3c4GRCtkdaFKX1YHAYz3HLBLuUYWeT3fVddVuqGAqc2mP9uZZ33uaJbhXJ6Hqy7onjdZCJUcHdVAhCHcdXyaob8H",
  "key20": "3H5p7BjBovSRtA4JpxH36F4JnVauMYw8xvoV7TKVtWwN3MpaFa529XiEro1VfBPUSSCQwxMSdQNGAXJmju6Ntwz6",
  "key21": "3H3diCGa5s13fwYLoByNxYHowT8vd3DMVoszB2bkcvkDu9FFRr779DmqwwvW3gfqRnR8NhtT8P9XZFKUSBzmHaNR",
  "key22": "c5SyQKyqDz96UQMMz58n5TLBxDLMoZYWunPjKgP3B6Mnc7dY4cWD5DidBQWMuqP5Vbr7TcLVgbcQTbj8G7XKWJ8",
  "key23": "2iFQGKsyRaSrtseob5zNpeSLSPvz3t6JsmG8dtdN6K2KzjvVhMFYy3kFv2kqCjLKumkA37BEPEZdPyzmUTuAfWaM",
  "key24": "5es4DjcySKaJwFjGRsdQp5a13ySMsSTsqSHkhsXpDQhCxjDNPjBsKsLf8zHWTjb7LZ3p8iSzfkEysduNLrodJxGv",
  "key25": "3NAeTexoyNw1fdZrpEpMav1TB6iVT5wP7FmTpCZiK4QDoK65RKQeB9dN4Z7gaSA9LYUwYW1M2FeWZbzo1kwBxtn6",
  "key26": "5ycmiFRo1amQkn6Wns6hQRSrnnZPVWWFaaQzELY9qhLXBamq33w7Uw4F5YNZcbKv3Jbus4PJqBW6TtubNt7nV7cP",
  "key27": "4KCvPypai9DYF9ATKfBXLwrLWgHHtuU4wZAde7dxzNoU7Fj9dHP4Tm9hPfLk4wqRh8BpMKUpXLDR6tMHHd1Y3xTb",
  "key28": "4Tfw1jx2EPaSgFuL8zh5uSaBjFbQnBuaD62KZoSjUQn7JDfaEk1hSiNq6fwNY2Lv9McXmzCuniqujm9Ykr3yGCWS",
  "key29": "2VPuBMU98pScP2W4XuGEVpqc75hbnuVisAzqWsT8VaSgyxN2B5Q5PXYKCn3Ff4MCSTjowU7sLoxgYkrSfTtEGW79",
  "key30": "5oq5e6A24Z1Er1PnBxHTaqHSRHCER7nfAKHwBkdaqhhVHjYf1C2mQx89S7nnpWpxTgZ9mqBfAGUQ5WCJ8Mw725ij",
  "key31": "55W9AsbPYxnFQwpBu8fyHdY6VEn5YF7GPQ2Tj13K3EFYoq3pGd9aNWFuZv4GC4mYVoXZH7pVWBBtBbUPQJzjeiWV"
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
