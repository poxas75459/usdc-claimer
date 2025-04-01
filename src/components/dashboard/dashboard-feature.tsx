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
    "3NQ3qg1KYmiMexxRMV5UQhwrGvBmhP9eCysr7Ra8hhudubioJzJaz6fRATq1cggSRDWYhYX4yEYWbrD4mxn9zrjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTdjQpuKoHfneDryhXXWqXttepLLz4rJY8miPBhUrkWcPTzm6vRkVr8KNs2A3cdLFgMGAdFbYLymM9QF9kovc5F",
  "key1": "4PR9h9aAkZz4tniE8aZjV8ALCHSRPE1DNruEni1dZGvoo5Piq8Uo5jRhkUw9WUXUwPtnxJCjKDFxNizMQqQWChC7",
  "key2": "2qAKSRRNA7aEEVhXK5sR5BRxM68ArrPfVGKdAhLHnYLvPH1LBRUPEBJtzmn5mdMAPiW5HrYoXQVeHjtZ2kgvkzWS",
  "key3": "B5omdc54GBWGjTin7Hpt36efLzQoZ4H14gWnC6t2PPdX7D7iuetdtdjFK5yRJMSA3Zdms4ivLU7XL1yUvj9cFgd",
  "key4": "4AAhBJEQusprYzQYLQsD3vUUK1WDqe8WgmRTA35YwUjVLPqXFwv1RgH3t4rP3QndYZ1aPE5zswVZqi9XD5tD2oTG",
  "key5": "tb7xDxmwqu4jLx2neYWxhaZJ8bS4hL7K2PS8XYESNzuhVydo1v2tSAKJMdW8ZgpJykGdaESUfxEp5bMsm3E1nZ5",
  "key6": "59tm5R7fCWq8JQkjrxaihCsifuNNGUy91F7MoDnqyuooDE6P7ZNd7Kf2LXxLqjE1CTqRioP7NwgJtLQAt6TVDdyA",
  "key7": "22FSJyWVtSELEJgBdMcEvyidV3hQowLuC2XvE6wN47pfaYB7B8vUtoH4PgXqgv1d8a2DjweLqjQPNJib8qKJz4om",
  "key8": "aqJBvGJrQsvsCXE8ejDd3GuLZt1PveEMrbVnTbYybnmvViD6HG96VU8i6CKbHCYGVdu1XcoG8dxonEKitdHB1wn",
  "key9": "wNY8nGACguwFseANYsX9NvQ2bv5qBoXL8uUrtUYXCt7d63FMrSo5ygSeZ7CMxFZSkciwLPLpaqcACCiSuwiWd8w",
  "key10": "41TepWeDrKRiy87qFTNY5H9oiLbH3DH3hJhZhoZJ9MaszHdpdTUGEZNBkLcMbwVFNGcMrPPAh5sCpPvU7SMTVm1K",
  "key11": "saV3cA6o2P1b821Y3HYa2T2PmF7o1QYfWuwdYsRFjr6DG6M4kKLFoEJkYXRCpvvtEv5x63xMe3bGT5qWMNeq4TX",
  "key12": "5ez8729zVZAVVe4q9DnBGE79PLQpVULKqaBuZuE7Q5fH5kVdbinjsXZ5s8ZgDUxCanQJsmhCza8yVndQqLmTrG6n",
  "key13": "3jMtceanuH6Z8WWqEFQaNELHiFt6JCG8SNxbEhfevvirYqZqQg57kCZ4Ww2ap4LBrYVETBqeEtv9uZYojnVE4Kbr",
  "key14": "4ACKktkS8HorqxW8o7g4PE86WuVgcz4bFhHPQztDJktzzWVioXt87xXr8PH1XrdxL6Vu6TVzTCSBx6MuoTwUndVq",
  "key15": "4QdHxGcD66DhLAJyHrkcuQsBMnuMmSUzVuFRs4UyLX5GSepnNFGNJS2rsxcce6XJo3v25fHaSBPR3KJFLq9TrgMs",
  "key16": "4sspqkmASxg6f5bZDvJuotyZ9pp6uUP9p5DT4p55pr3Mt9HPcozXA7vC8ynfHvWPMD6RqSHsvVD67miY2Qqqu6j6",
  "key17": "3sa1SJ1ZPnEMbJFCEBeBVkcWc8HdfAep9DcbfFpjwcHQsZF1SdEuct1cyWs56SQzmsu4Wi1Vq6mF4hsri1Wsh9v2",
  "key18": "2EDq2yRCvxJQs1Tb9X3BGFnwKkoy9J23gAd2EAvNYTyiVMhk8BUHDgu6VYtJhFiqsSU4eD8YgxzyPYxpiaEpg6Z4",
  "key19": "WoCXeNy6x3Z4K2nubk2ZngWR5FQ4tmzX24iPQaCRkK8HEWWKuquTbbNpBhCDAPS3az8tbcsKgziQLhuqsY8YCX3",
  "key20": "tTLpCVK4rwjQhoi7eq9V7BVEEQjKREjwtExVCTct3jFaKBHTvxtmRgz7TaMduY6HKxQv1t8iLU4juDafMFs7zR8",
  "key21": "33yqUoaxUE1rJx4yiJKD3NLo4mTFXQzb3udKjFgWfVrvamFrY7nAAXGgXXZBdpeYP8AkBuBifNVyBL3UXMxp8YZx",
  "key22": "3iBdm7VqrntRKDrwzR4S5iSzpw773Br49WuBjuxjMu6mwKqNjWkjsjW3SRk4pNSYHgioehmJEf6aC1AhpSBQzhng",
  "key23": "2V6D2xYN1K7JenEMkikz5yP2V6yHNv86GTX42PyZXkEMEvxzD1xTNMxTE6fgctPakHgmKHwR7wTPzd3vTUnqdgTt",
  "key24": "SAL3eFv7Xs97fHVZHD7wPmMXdZChD1XUsCcSDswPRXpQNuRFPfWBd2tptpnZXymefqTXzSvy784Cy19FUsKGuuD",
  "key25": "55jRTVv2icxkKXQCxE2Waz4rsdhh32hoQMz6wXp4jMnRfnyTxj9KjVayu9pWLz9ggtxMMztGTQje6PH71XMowm2V",
  "key26": "ZgS46zQVQPP3aUN9HHhDN8vDfhy9ynXWEzJNnoLf1JVnSk3dCFEP63RdfUyKNhUDPmWa9DBKuSr2JGDUGffTCxj",
  "key27": "4dtwmtxfNpQWncCKYeNstu4QahGoJVioGPTkrfkiaX8KsgdenTy6gAtWV6uF4swgxP5Yw7VZY5ZFPgBovBw2wkhx",
  "key28": "4cGWMk7BumMGKAkMyVcE3khjpR6hFGLtiJTVcWykn5VLerpVZxxSJjgHnQPYDgMdzs1qcFiKw7hh6SGCE13zRSP6",
  "key29": "5A69wHjYdeQxSb7KbqSdqrkNJT16fGbsTXPFMeFGbwAMTbC6mMMgy6zsM6QUxt2rg8N9Bv4DFFWfEH5eaksy8nDE",
  "key30": "8Rh19vWgL9pDVot4gvAMEu2YDFy9tA49Ra8HQUN5AiLfuoiahVUUHcFiEmacWZpSNM2ea3vbSiBdXwpbm4SZGnm",
  "key31": "5NXzsvaaRhY7RgZpJniPEjC5tSMJo2CvcnpEXd8LNCP6yJ6vqABb1k5XcALxmBc9XnGbrAcg5kD6QdJg1bzyvEpb",
  "key32": "3pyx6u2xwBhduUTS1gxnSNEyXFBkY95Ds6pa4GopqUHhLGmoaKmnk1NrdRWjfVDUMQQcKsw17g8B1AkHZV9Hk9Qr",
  "key33": "55bzuauCiU7YsDMK9BgANzukPq3PNReRVazA2LVFCA35bjYoeqdrnbuhT31qymqbAtkh7hdD3b6h1FAPzdv1EYg6",
  "key34": "YdWGKJjCdNK8K1nN2MMMbRaWPLfG6CftZQdwuxfkhhH4fQzMeHD1mT1wdJfauf7eyNsZPs6xrgdrndVMcyER4Cb",
  "key35": "4aaYKRbf4Se3g4tyrutHMM8kyuAjXDPBVQuMLYRsL3deSdVy2tpJLQVR1Fd9qmASZf26qC6TcW3KY7rbxtUAVBB1",
  "key36": "3KkE9T4rYM8oLih9G6z77aGeQik7e7RQro3EmuDzRwgjnA9e5fGQmh5g1Amr8dR5TfNL6LBVygGXcB2b1US6HeJG",
  "key37": "4dBb5ysdk31U36cjN4ziPHqKyP1y6JPm65swpK8rFPZBPGjc9ZRZfdY35c4uaHFAZ1y5iyF8CxEW5aBJvStjMgUo",
  "key38": "U97Mi7CanU5wbbrt2NebfVV1hQwogmcFFpWmKKd9dKQ6o2GS4fRaFck3ehpEFiUsXdnfMXCfAN3ECKcCjhwfnnb",
  "key39": "29vQqdoZL3ULZsbXBNumyCE14iFVt7NHAop1fEbKUi6dHUSBngEGVSrXoLMNc1gP2oDv9F9kgLaW7o1YmmmBmjQi"
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
