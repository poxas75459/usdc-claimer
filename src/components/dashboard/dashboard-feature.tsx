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
    "29kjpwQS59bapkPeoFymNr3oY956a7MHtvemhkfZdV7qyUeVz8kNGnDw1xphBkSwn7h8fwCfLQAPAjbthxJH7TCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aR6JXXt3gNcD5sqgCtgVDDpXScyrNv3kVZh8YhgXZWkBBHNcWvmrw3mg7rKLixjpjKHE6VcwShuCiqdnZ1ZHfqA",
  "key1": "4J72LsaSP8sAmVdBezePviZ8KVGHJdf5ME2WAevRTWynnrpSXfanGyHwfYnuAw5dLaovnW8BqYLngdWfpS5hD1Vu",
  "key2": "3pZ6Qvf5Yo581cYV9F48W74w4YHfXj1CZGrdrZufQcj7LJCd1mBwPLGucEgsK6bsMBdW9tebN2GCYfgkktDcyWA9",
  "key3": "5LVr7ASxQgxbCfCUjPS9T6XhgoF1gmj35iaEe3rk4rzy6Lvt5kMRsF4gqhSK9hCHMnsTGAFu26zt3PR7iiipLHKr",
  "key4": "4ewhjiJC11rfFSXf28ZX7rtsoviS5KiDFu7PBabEdMieub6PAMD4koA32nkAuYuqHQvwthq3aeMum978yty6MH4d",
  "key5": "eFLJu6NjL9rzo2wf8UQrrfBVfRrfsEjKWZQoPejb78jNxQswa9YmfJhxiAiHtTDPfovft1r76bTjrHMDJqAWSxF",
  "key6": "TwufY5wQ9henU8fbodNdExRdeqJHAPuxkWZz8E7W19MwT1JE4eX7WkZFSdDtdKsZfcSUwZApgzpqMrp5UMPYSke",
  "key7": "2HNaCHT46QHapJeW7cjqi2SRAMhsfmEs12cVVt9JinLZSGt1w6g18NYDoqiYnkQHinn8gmU9hPpRY7jb6XjfRKsm",
  "key8": "5Ejiypim1Do5mzvNgogexK71cQg2ZvkNnyQVBP7sxxfTY9yERmVYTThcwknJi2Xe4CwcpU76PHU8NUhMM4o8ugs1",
  "key9": "474HN58LSVwBtwdgmYSf7TDkhu3uJAu5jSdAWoyBSE9EL1Q9XET5bN8qJm6twmeKL3nC4EEHNGnoQtZfMTpmvHgT",
  "key10": "3agt1onVof4XRrJirx1onngVtwVUTPLXxUtmaierb4yUFxou6jE1CoNMB1t5WUQQ25rMqffvngsQyGZGMn3sCvrn",
  "key11": "4pYDiqLeMXsMKpks1yMoSjR67q5yn1euzeYBkKf1uqoWqSjsuCYj3ZPGpJEwAjon6R2BaanTvFFLex1wsKSHBMAm",
  "key12": "4bfZc5tFC6RBcbXZP98pfzY48t9ragt2H8anigfuR6EWX7rszr6Ya4ovaUcqNdWdRgDaV5Jyhjn7whas1wyrU5zW",
  "key13": "3GuivQ6EfPn25ajZM7DyLu5kmqpi2U3mCek7PhaC91aNQzqnveZKt7uJR7T1hFHt92nRoNXS5gz3U9hChHqiqKVk",
  "key14": "3oRatKF4ATxmFJbrGS87jbDmXLXEbFtwAnc21Qt78sHPtx1zSQzLxGBEfT3kADt3KzmrY2N41WXTjwgvxtMWDbNx",
  "key15": "2KQx5zEzTs8U7Ji7W5KN9AMWKNyn6NR1KcTsV3kp8a86dUgyBWNtpqrm1KsgXtAMxeJGL13fio2GNGjByxbmVNpF",
  "key16": "34px6k4QQXYokDy3C4ifMaYXszy5bmgsA8NzShB7xv3nei9MRgNbFo2K1GSfvD5tG9QjUdtJk3QgzeYR56CDCVbx",
  "key17": "4uxANDb4NyvaAbzGjavGbuGNu9BYAaQ44FL5M8173Kziw3jzTvdirhG8n25tJwQMSG5DdDA5CjFBs5haMkf7Dce7",
  "key18": "3AKbTpKFgN4eQRNJf1gyNiQSJ3DcTedrVheVW1J7KF8y7xWMm7xVBdFbNar2HKMG8eYCBj5pyuTv7p2qpqCX6kqY",
  "key19": "3dCx6BG9hc7EoPWGmL84urnYKp19zdaAD7anrM8PP9CbRKTXoDVDQ8wqRGv2awYKZnvuatHEAGcY48ZpYAG9ohMb",
  "key20": "uTvncMHHuPz3AgKrVZrkBtwMzAkKMTM1Eo3ZkhVXwdMUBqTiLez2C9aQGaG2mPtwZ7njEZKhHmiJ9b6e52toStw",
  "key21": "2YdiWhqnw7WxrfLEAYoa6RwtuTC2uSsEBgutRCD1QoRWekNA8Qp9DbQHX6j7KKEz3L91UCm55NjUsgNkZ3zypYtQ",
  "key22": "38xU41xVUWgeCx7H6hU3KRf8r2xiFe4svycMuRfh5HUu9RKZ3SDcDtuwcUgz2wJUbYYTqNBW8MWUiZLfDLyuxfd6",
  "key23": "27iNwtdpZixqEvB7gdLUV4CF7P4LEFBpqs3XekWeVZH3LdburtvqpZgqUjyrSFHRwjL4RHAhDRgWfrJWkK4HkM9w",
  "key24": "4CUjk2JKZ2Lh5dhZZmQhEXagkWNthbGgXePCptEYErUJab1ZCQsNsDhtVarxLfanRGi42swcy1J6fqn8Am2aeQgY",
  "key25": "4mz2cK7veuSazYnBK8eriiFM84RgjFKF9AXXLNsWmcW8cBzAyUKvJ8brquhiaS12JqwWBsNK28T54EiATjTgvzmu",
  "key26": "4RQkxLHTtZPr8AXbkDeUrxBVmwQLBKy1NvtbZHqXtzPXP5pKBTgrZRTmEHDn4Md52JBNdGzyd3Kqqkrhq4G4YQYi",
  "key27": "45XNi1mpN4mDGbPLZpnLmyDMRcg9zQDzkbDBSARXzRCQzUXAFk8K2eBK1vxqYnoanaq6mKePUYd31NcNKKmQbEub"
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
