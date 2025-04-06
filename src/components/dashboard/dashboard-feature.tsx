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
    "uAkQCatSMGmbXbsuvRvjigsShMPC5VJ1jKjPcNC2o5eaBew8twCETrjUQNCC4Sakdrq79kaLCK5fess5YEZL4wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKdeQQMR1Finfp9SAf4TMFpsw9C6yCdxqeMuRFWTn5LKmXg6TZDV4Lo3TFq6ynThPtKLpgwpXPfeQWXhYvLZ9jW",
  "key1": "2XfDkn4yC7mumnsybyjPYRFRks7k5gmpWiVvAjBtAzCbC9aMQVZ83kPwRXoCx7ZD9d2Mj8T5iNV4XeeJbpVfuhCd",
  "key2": "59zxsWbK3z8VWS6ixL3UzDfQHT885G3QpL4Pjn9q3cCw6ivHZuMGErrQw6gcnDFTnGt9Pfyvi6hBqa2pXRqyGtV8",
  "key3": "4WdoUVBFs8jcTT5kk8wWdCoR9ZpxwhjHgGnpk8LTVZijHEMSW28ZzZhg3JmdWBHGGLwHJ1VH6PPEZwma8eE9yFbA",
  "key4": "2PnVwsi8zRcpnZJ1uoA6iVzNV6Hq6e1eAnLM1aEJT6Rv65me5DG9QL2dyHREzQZegjkt3L12mizSsHyCwYVwvEHD",
  "key5": "41jykXy3DqHWKrm1pjRMirqbexq3ZLFLzdcdSE39iZFp9CYrzsoPXWVfBRYRBAnNiZGdA9Bbic92JBop2HyR8Ppz",
  "key6": "4Najbc9f5bapsUWkqxjyvd9nzoNEui1UTm5ekF1NYGFekpwLYif93PR2tjjTAvDTXfzoTcB9Mzd6ULsJmfZQBeuu",
  "key7": "4GiaCtPEyhjicwCLcLZeDZRrVuzf3n3x4T8Gnt4RHEriirSKd1DUMZyDBGjFU3qYgeKvrNhsFHTGHjRP6sfKpiN1",
  "key8": "rweeDLtgVNEe5MGBAM87VC7kbsanQW4YQmEoyy2qwrA2qJKNjWk6hfeu9gKnFBMKmG1F6yMXh4Z22ShRK5qogRR",
  "key9": "5j8vJjgUcPdDUXSogjdpbBuLiESyfEMft1RCjfGKkr4AzkGJkfGFWXymMG2Zx2381nffbEoxmGCWQBw8bweh1Ywo",
  "key10": "5TWqypxzLA5RSfwFJwgCxpqDD2LvizpiKKgoyjRWhBAsYiaPW3fKSYz928yUMvPcxkRvuKJfYzPb74K7DHmW69NS",
  "key11": "4CfWZvPPVDUrM4w6r2fw3VnrgeBPftFWf2V3gi6x6KdxYGHUTsineUqzvwunYBuyuYLQ6UfTfnFtLs8NxSsBqAyR",
  "key12": "3gqjp1ATQMKUMYYuXHxsZL5CQbncGmHtRTDeJpV5VHDxg7LFmu8k6pW3D7nRAyDvjBW1R2iaT5F1F5fAaK6oqXsQ",
  "key13": "2MLdrmS21DhajdqMsNRAzkaW1BpC5kyeYYVLhJRByVK9QYWJhTm7UvdkEER2cm3TLChgbNuCbogMnVSvuPxB3gXo",
  "key14": "DVDkiopw4JjvWpSdvxwX1xXzqMP2zCTcyNX4jp44fyLc9919bE1sD626NScGnEr1XRc3E4Agp9Sq7zroQ2prEwz",
  "key15": "3ohzqg2WviR91c9zJoEmGEe3gekrdYm49yw5vDvGUNBe569ceSLrAh3U364LntsD9wW28YuimRSjaayZxVE2T5Dk",
  "key16": "4eaHAJXmG51wa29uKaQE2mQ7ua3h5P7qAxox9CuHccgd4Agcr5QzffKRvmMyAvazL3Wxj52UWYFyb29xq66T91aB",
  "key17": "4nzUGtQzGp7mbqvfAvXig5JbETr4T8V9XzLvi3r6PcjtaKmhtKyw3oZ58auabtiYk1fJo27BkvwaTAbiwQi7ouVy",
  "key18": "41kgdkmvVdmSuARwSp4qSguvHsALDWzEiUBiesbh5LUdb4nFNEtW1qrzuVY5qwv93GyocMJMdCLmevVpEQQK9Ffe",
  "key19": "GytFFU7SyWyYaq9cH4J2gGtnFD9LvwZ1CdG77u2LDJfEC1LXVYTHDbcwY14yVhHQyHFX5dApvtoBeRTuEYtS6nv",
  "key20": "3YeUXv7S5F1mQf7poGEJWFcmb3Pmfo7xbEcqiBLFmAvq4igAbzyQpB41etvz9mpyh9Tvdd2RHc11n9GLLq2wLXxZ",
  "key21": "4fm27DZRQ4shxBaRfnYC6gJTmVyjtkrncJrnhxwoCyN1XjUSFMoiTSAV85BnzqYtaXpAHPYAgLFGbRMFWC5bwU4g",
  "key22": "22e2EcTzsZC81m2pH4e9pDYnAKo3FBQ8NynKXFgpFTKnCtzuaxr2kL6nbddZ9b2ZKgL7muEeAgfkvDPaP5ZfYYpy",
  "key23": "6DSQWWybPmYppx3vxm9LUToRqTGwJxfv9eMJrNr1LvgpDgbQZSQJ7wQCf1hcZV4q1PZcJzE6xBLb3NoFoFoAEQ1",
  "key24": "5cfhoWSf55t2aDrSryjw9hFZDwxQPALh746ZLpuPFSChqwC2q9mi4fjcjVwFYYKQ6g2HQTnb43HNcUx57Fc3BX11",
  "key25": "3MGJcKbQBzZViJKggXgp827W6idxfTnKPVkS4zq7eDAmVeXMvn5B6nZts3mdaByWoESFhef17LyUwxoVSEWa2kh3",
  "key26": "2V43wcNFVJ1w2JrcKW8KxdngS7LPy92u5RhF4apBsERNuy9RVdhrRnWsQ5bmyVLmf57PKf7xmfGpWowGNxSTQFVY",
  "key27": "3BTHsoopLae6SWf8gAAkTLAKnBBa5UdcyiR1Tn1bakaVwqMGghggvsLrWTx65c8nLknocgrRya7RqygNzTgzZNnk",
  "key28": "28vFLuFMAtgAhv1xSzT5aBMi9RMgAsbsAxbJgrNqMzAKWbPpvpEgxwotEGVNqvcCZWTGPjdGfuet3JEV6H2ASm6K",
  "key29": "5F6qKohyu9j7mQdwSe46uF2tNssMxmgiRRK6b4o1ULD8hpG9AruMnaR7TAhz5PYQgfTC1vSRrETKpoZFzhY37BmR",
  "key30": "5D9Dc7qePudkZYjGevkpBnJ58HweHvogr6sVn7PzNnFTHur7PAxWJfLvhCNBpTJ9LRKsH3TeYQ4dzRm2MpmR4742",
  "key31": "5ztbEDProkusVtyRfR2LCpuYcrHbCX9Nev86wb3PVkmEL5EKNZXr7DQeD1n69MwXYMGUR57epvpaQkEcpYWNikYu",
  "key32": "4B8pQnuvBMdA5rNn4sbwv4FCx1kia94npeb5tHp1VwScED1qxeUqowurXWcXhfXNTxwsQBPBeidSgQXLFm8Ljqvz",
  "key33": "664ThrSnyjpE49MqPqegdc9mHZrFTRBVepXn1TEbSoACRQokP7xW9ohhMPA2yuW6kSXLHmQYMKPMPDLpD5ZFDAG3",
  "key34": "2ienX2123aTtb4Er7ipQtZBGF325VHcDi7MZPgZb4ZoAsPqHLK81RocxfbA1J2SBV21tBwC3SGPvBCJgggyjuzoQ",
  "key35": "5U9Kv7v8tk872V95Vg6GTDwn5Y4qzteThqmXDqkHaNhqp4SYee51Tu3r1aHhM5qxAP8otBjGp6YUFE7ARJMAUNk1",
  "key36": "QpGjr1JWZ1NWbqzvY7MBUVUe9GpLGn7jVC5BKtC2ipr3MFfVct3cy18jFZeFFiRQXMLNCwGfK3zQFX2YTU4BfSr",
  "key37": "hhDYutq6333DtKrcdFB6bdVVWaJ1RB3q3MFUk3M4yG9Rpkcr4GhvQvbGQUvkSdWWtWJtKzvMa2ng9Ry4D5SQLUc",
  "key38": "3t7udNofNP9CdtJHU6f7Tc19EMjHShS3fpXBqVQh6oNW2NftmLF2M5y75WtpBsQNAx2HLwXuuUsHkDMratpxDgxB"
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
