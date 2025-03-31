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
    "5XviURLoVaAWTZJNZZ3qtT6gySzSUXCCed1YZyah8M9Hp1UogYyynL5XstTW5TWoij9Y3gr6RMrQ3rh9rHC6ETdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xN3R6RAw3bKPoYS43gZMi3Mgyar6M5B5W9NfuXaAeeZqb5vbJWwrg54WD83jk8gVJGJohmLMNHtp8NbNPx2S4om",
  "key1": "MPmoKVRvYW5mtXpnZ1RvufMPzZVXRm3CXiqKsKxatnw7XRqXtHsDXTZEfcqW1DcyMSWozoJGu8XUbN6MEx4vG7p",
  "key2": "SqdTN6QEsGnWChqy1TzRA1pMshj6oQXN7fvrD4huqx6jF4k7WNcraVVttRuEvtr2hcoDgHto1Xqc5DTpieG21rX",
  "key3": "29V2GoSwxqKquPm2tW2Z5BYTuDySpCMuM5yq8SggPC6zsJDoeHz9hjBaqsGhEfTiVJhfKbCXQZz29VRRvzg7cGu3",
  "key4": "4t272iBBCF2w7j4GqpvqUvEoRVBS3JZj7kcChag62JTYMKkGaBYWRdqDUijKeH1V3tbEXqZLDyD3FjiziMiyKVsf",
  "key5": "rvaJgxumM4bXL8kRzXcgBbwM4J79DSjQYtYu7rQERTiCFQNJigBvdn1z2dv6w1Mn72BJ2eG3SXB84wdhYmAQdQJ",
  "key6": "5vLXgA66c3EEAGBEVqhuhPhHGm9quC5V4c2UtzMfA4bmp8g6QXgWCttXBX22FgHNVEUPmUVmgBfKiNGZpncc4mJV",
  "key7": "5bztmtYcGWQ28qGgib7i8zc4kFCXU7UQW1UcCTAqRipiFC6V5rKEYuc9d9ZtmowUD7pGvqP9iLBe9QhEqvcSBAah",
  "key8": "5cMNFerYLUXmR8dKLYy1wGnAEfGYhDF5f4x6iY7eUWQtBU2XDVAJ8PAFEdSk3hbRttJXhtmxUydsXv8WitnhZKMG",
  "key9": "4soYYLHSXe6DCSn3jMmRmQAZWBSVmZz1HHA9iFyAoktie5NQnLyy3UbwRyTMzAdSjW9mrtr4pndb3E8RdFDJyhL8",
  "key10": "4mo5oon5UhvP4ov321TrXRYJhQ7VrtRsVBt9wmUbnBx3EjEf81DnpFrWnkouYZMkJF89FfbUQi5mYhjay6T52ZCz",
  "key11": "3K9YRkwKdVh77Y3bCfmPuyXSrDPjroFkWZ5rHrAayfye6nd5jjce29KCmr4Gg2uFTH6MJSZgP3AXs2CiY7dcVU3N",
  "key12": "WhqeZEnHhDku4YPMGKNnZBjaMrjAQcb5wKfgBrEY9TQ1C682hKJ3aw344fMbwBLWEDhMQKA2zUoE8pnuWbG56Bv",
  "key13": "44QHJpPfN7sWANvxZ1xtAJSX6i5BBknBqzYZzt6fLGLAxfgYjEGgDidzbmNrD1bsRkndNr2YJxDg9yA2FDpMf16U",
  "key14": "eGRKW9PCfiQXFMLUWRwcZeNrj9q3LL2jSJhSWUd8VNujbWMmD6oR817a2D1P4LWJzuV2sbh8uf5AWQySp2yGnnH",
  "key15": "2Gqy29goCuZmvkUWDrsmNnvBuscgaSLoTLd28CAwHzV1tJ3wyFydniDZLBxcVTvxj95B3rpnDU3htD9kaWwZsvxJ",
  "key16": "5MgAiwss2Zynrir1nfepdiaNrR5H354PawFgXMHtKhbdNkcKeFC6FjAbuzQWy3Diy2Njf6CaqHe6NrMuawoMhNp6",
  "key17": "3kC47sAJSpZnfjFrZfsFihDNx83LxCKsgMWv3Hhwkwp8BwB7PBAteaVTHz9rxZ612F7XoutwuE8EqwsiZxNbotzJ",
  "key18": "45FfZGcxFoDVwDz5FCBdtAdUzewhLDt1JqDNp6MjDVsnaruELC8591umRWzQSF1XbfxvdvJUR1411wDk8V1sZduU",
  "key19": "4czQ1K2hoPPTW58UvLiVwPeJbrfCM9FDgaLvvMXGC23XeaeTQXqQBn3HxpXSU7cYBYB499YQVGTvcnQHNMfPnUiA",
  "key20": "3s8Em5tUwS39cugpygqybHoja7n7PKjYYoXLxifkNujA7q3sF5A186KJveu12RzVasNE5vxW7pfLj5g4xwJnYy8t",
  "key21": "5S4U2T4TYPdq8Bx4msEreMzQ5zTeFGsQmVigrPSgwHgLeRUQMZ3L4sKXeDPNKTTgTZ9yf875bL9rFbWL4Fv7xVWg",
  "key22": "3A9xp8hB2WzCwUXboJhWkTE5R5gJtmumMVGpB8rMGLPjKJRqXNq4H2EqBBY16Hjv4AfmstfsXzznZJetoZpv6vSh",
  "key23": "3Xj1X399wGSJfvJKZkejLpiC7ZcVvzdsUeXRgif9HgiCDYwYxnPJ6rzUw6NMQKVzsnzWYW4ACU9jmdndN9PzhW5w",
  "key24": "5bCqJkWbhY8T75YcSjs8T8oSRTRd8SczmS2PCidHqq2Fre3PUxPCLNJnqRqxxjEzBNcyAHDDavj4hNS5ccKdsCdE",
  "key25": "2LHDZE1pseNSQ5TYPX9svt6NLVmYG2JSwReAFCxwm8xoaiUjfDBdUmY1ePM8cBESDfBaJE5K9gkfzZVKvZcLo82e",
  "key26": "5UHAywBxmzkPdFUWMr4WasJhXz417QogDBbSB5Sj2UYCJjV6nSqhkTEDga6XbqLbSHa6fZesKXYoGM5GUVscdye2",
  "key27": "pgeR2Mvy4nVn5tcyvQB8eU1wL4pc2M4x5Cw1RMYbmxSYLQiqEkKQ4N49QAkygcH9SSLi6qpujwCm58MqirqNjSn",
  "key28": "4NBfYHFBb8v88H1YM7bsWW8S887oZV56ChkhgeUBtqgy6kah7NjbBayFdtSi1B8bBhSYYour2ZyEfY4PtBSrQ8Jc",
  "key29": "2TUCbn31H6sT4ikGqb4zqFwYqZ9WEtz4Ns22kiKAqY1GG89KqQkQSM6CDVy8PnuSxKRWx2ZGMc3bzoLxpUCVBJnA",
  "key30": "58k215ZamdYGTuJLehQwEWfSAndASLtCp5UecfQvHH8b9QSxAgG2mJzoxqR7kFrLVBeYWd21Z2GZB73ptk5NcVR",
  "key31": "4SV8uZMWyQL6TEQZZq1KkcsUYc2JiLamaaGZWeAyjYenALQtF8UNbrU5qeG1EfwS3hT3bGr1Kj1uWKREwjoiQnJu",
  "key32": "yiFaypNWquAAQ1Jmq2hWnAibwhMhCWUvErTCJ4QgZ5zQsNkxecQs6siDTzGvtgRCSxZxnmmurnamb2WjnS2Gp3a",
  "key33": "29NN7yrxaCquMBhjFbo8qFooM5RnBzQ3z9DWusZ6Ae43JbD26rVCHoEV782km8CKsqp19WtkFiN7WkRj8XRaUKio",
  "key34": "3troCGQgCKTiTGBtwqtPFDTJogQNqcNbPNTLNJDm9w4WdwAjjoPyfbqsDsGaTyL9SeG4KTduyBquTcKAz6Jx8Dgt",
  "key35": "2bNu4nsDKTwBeQRtbzRu3BrdiDxdwT7QqWTyasYqsQc37ZTTkEAHNTQNmrbkMiwS5WzikwDCo8yW9tKqHwHmyovA"
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
