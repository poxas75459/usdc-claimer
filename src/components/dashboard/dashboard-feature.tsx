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
    "q13cJFfZAX9EWZtARBgWnu1WXzivwdaR1CcwCSFqsofZx1BXgPxuRun6HyGYJQaVSdqrTwDr4Wkw4TtfP2VkNR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reb7w1htMZicShhou2N7LtEjbp9frq3cT7J3XgnRuseEW2KducHYpE4iGHZLCVvikWxRka7LxgQXP2jqnfjDw2Q",
  "key1": "2xfkb2C2YTC8g18HoscxPwWNo6pJTjxT34yfFj67tjtAENKmHFC8CdArvFcxEYE46aynesZaq3Mk8U6fZWkz4Bye",
  "key2": "2t5mVQHNKTY7AAGWNVTpFvUp1GXfdUuezaDt3Vkh3YjZf39UHGuUSthUA3aPuQ4GPQ2op2yDyW7374GLw9zbN5bs",
  "key3": "3YUjctYzcFjiVd9J63d9oRkpGxHSngY41mvZzkTRaQRueirDBPKjgwcGVymSLmTPzA8XrjrKV95uQ9X8TEfeiRzF",
  "key4": "3tmCHsbe4VR4o2wa4mGAkLnRCDUNx9yky4KrS4L2W3pdHPbC2UXHVXqPBEodkEp6e2GzZTiU1gdpki5rqWY4vhph",
  "key5": "2SWjXx8iGdavLHp6cAToSzY6NGBWzEsm7vPGW5s7eknFhx4pf3tdc2K7415c1KsBEAzP99tKAjvg4rgHeouMMgD8",
  "key6": "5aySpYKVhGottaeoszrd97ygbtJn5JVidVCxgziwmyTtUcEeA7stfh9fsb33fWDUqWgWDm6uBh3HG1e7zqhZQG7s",
  "key7": "5g9wcm8sG1hArxkgydBNcH3LR6J55iPqzXzAStz9PcWEJ2uXkhBQQWram29TAgD3TSZNy1iDnZ3g9MSLz9Q5JDAh",
  "key8": "2GASizxP1Z411PSbMciifUTXp9hWo5LAFnghgaCbkywbTUf3ce2vWgh1zYFe29QEfnn85PRGcBXDrJo7HDkeMU5w",
  "key9": "4Trv3o49Tbw7yR6EnnG7dDHKz5NKVJ1w1GsHeSxMyaH2t6j56h357n7ztBaCfkrv3ynGamjPcHNJv8AnWd7xNXTi",
  "key10": "62ZXPBDtRCrG44eRwdfCSHtJd7L6fZ1WQbq35bVXFNTRsaAs41oNDTTPNe2aH6gzG1PVeckRcMhyUN2QmxfcKEKe",
  "key11": "5iNn91sbDLPTwobhtReU4bxp4U2rEKV3Wn8fmC1xbTEaQFmKyBhC9pS9ES9ndiRoVeNNw5m27LCtHULGWA9NJmzN",
  "key12": "4So9qFLat1TmGhFeX21TUJ1yKws8gCxM5DeoEmL9i8xw5mE8iLMzUvd3YBMqwMNzAAhxedJpEmzg5wTdpLKHj5d6",
  "key13": "55UJkG9BKQQ5VdDEUyJwLdimh5LfaxGFpv97nE9D5Hh6NEuiMRUCCJ6BWFNmdVZtrswHMMk9j1fbABKSjXMdDFdb",
  "key14": "48iL94NjcXAmSmF31TEksq7tDR3vnaRRYcQt31dj7nyckm5ZmGyYhZDBUEiFgrqhHBaZdo7DhL6UmqyUBcgvwxTC",
  "key15": "4gHyWzKPboJEsWgw4S7Mgu5x3s1Y8grv3KUGFsQVMsLomDddteYS4GCgT1Q7m9twRpHaLTBq5SsiHdpz6WQrTtM2",
  "key16": "2p61hrhxvTTApjKapAEeTTAvoAyvgk4MWqWzCgcMzoBNVdHVaHhF5ufDFoXBxPZRLrTEM53kmo4iJ5wCeZqXMxTa",
  "key17": "xcarvR6hB4pD6cQi4SpRUkCWQrCvqfsDX3HXrHqi3eVvtfYMi3Nw1SQh69zZ4hDKkZFYc8iuz44cgMvbt2AgAq8",
  "key18": "4D22zdeURw2yTSB9y1Xb3PGRkJLexmsETsseEgrBMzbvnKdLK6Efbod125W2Zy62vsLe3mdkrEmmyyatXMFMjYTV",
  "key19": "YfXHMuGBAHUnRCWBZGzexjomxRdSToVLfLPiMizwv1NsWqvpz1g8JUqaqCzxDwHuwyfK5a3rqaZrWqfZJqhvBs2",
  "key20": "21WcEkVurJPw8dmYmrufHJ3VHbaDHRfkXGQHK4Y4ZhEBjB79rcv6BhMktaNqGN5jto87zALVgyBA4yp8txvViakQ",
  "key21": "4DVLxH4mcG7qHc3uE6fVxSFXZNd1iQWJ8pK4PFQFgswTwyUYGnAP4j3uGoR5UvBg8XZKquK8KuE49Nxnpgaurfsq",
  "key22": "2LUG8dGGydR1QZK3u1PKudPS7WznuGHL4YMY4UuVaK4nrcvGBU2sMBeR1JQsGoC47rumhNyxK3dEpaXkLXoGJ7gt",
  "key23": "mMPh6x1651ktJk5oe7JFF9tk2XH3EmTSFu83eRn3p4DF9qxxwyQgimRHpbdqE6JUywuLg5Jfyo4SRoUih2NFtvg",
  "key24": "4srD5zuTLrDSohHcRqugF2Z1u6mxrXX2BszknXGPAwTraJcv6NLpxLnPD9aUvsJ24yhyF7MMz3kbusDtmFSNx2Ya",
  "key25": "5K1ZTZL8EH6NbSdmUMihKALrS14ZwdeCHypuKYJj99DdoR4Z96kGAVJkAsif1ubMCX4so2oca8e5ZkzFFQ72ih51",
  "key26": "4B26vPHQ12HVxNZy8WwqRfvwn7YyqJKsjKPk3yUQnygeU2X4EFk1XPDSL2i7f3bQU1WazYfpu9EKoSDNE1T2y6NQ",
  "key27": "Q314WPcb7juLUke5nrJDxsb5gQsvvY8GSRFA9xNoKLKEL8BAYrzaVKxZmz2hnKpKYYgYhY58xgG8pjQVhwtuEP6",
  "key28": "2Mn4Mi8UGg17v4VGxsBwWRzYxVFZCPoTtjHWMahS7xzszK2j4T6MTi5u2h7JWvzsVGkx4umSQ28MKozpLbHw5Gib",
  "key29": "aWFF5xL5XsSvDN8c92qTVBpqmAySEQFBe1GueGJ4fSSU8v4UrcKzfnZ866ehk2ZdnpVJAvATxryWUz661qzh9Kw",
  "key30": "4dRidXFVz5t1SdvHSpMXUDCrQhkYUvtFLPvrK8yZwST6E8Q5UjHh5HJbxvaJUxoJNW2bvZK5g2voHrY34cy7nEwp",
  "key31": "5nZoFevWiKrGL4xeYHTh9Bfe1tJZPjbwQuGrh6EBy21PVXUh4ieRjGppoqxb5MWUSLNXP7VzdcsuwcEgYGcGAi3L",
  "key32": "44FLA18gAPdew9yKhNUXkD9tDEkBvds8Jk3zMmc6qnxQfpPVbRf1642Jgea1NUPne4eua5FaBzL9BzokvSsaKfP8",
  "key33": "2rTDFz5qDZ95S1se2efu5r1fW3xyoUHWKQ8jPtK2xGaC8G1PcWLxbtbuSAAM18K8FHypcyuxxouZziwd9JTqk1U1",
  "key34": "2QkVwQpe9z5udEXQ5orEaToFNJ4L3kAb358iyKb2i9b2swSBoY2iiwguHmwfei7Tt9QmpxoYPuYgEhZQDGYD2ubp",
  "key35": "5JkqAfb5L6fSpuVnmB6amrhmP6EafZRbyL7u9hioe3sgCxgPyccGP4796LTK6nEYVhorH7X4EY5dBcyXkHbrMjEa",
  "key36": "4GJVG5U4mtDmNpG9rpQxj6i12YPs1U3mBGt57mqQhHwxm85WUfFVauM7iiWivJaEn96K2drPQ8zfXjcRoEBCmDMB",
  "key37": "44DBEez1v1YbofXBN8RBvTEPp8aLSZGCaCfXcfZTg1XTLdztAqUV8otyPoMCERZuiAH2EZ3gfF6oRTG5UXJBevcw",
  "key38": "eZEfKtJe5EEsKVgmPqUedK24hrzR56SZwpqwhNAeMfV1dQahYEjRqWoVCiB8H388dSdJHRLFTmtL1aoQ4BJ8vMq",
  "key39": "5AQVGUDBitLjNw6HNCDCMa7urzDA16c1yhpMSQaTQLYHTRSCv8Nb1fqhanoGQG3iGGb1fc7N9d5REBBv7Ty6yLWc",
  "key40": "2jvvQ7kj7EQ42fqTT4VWuek2BpHZKAdpQMdikfM2G4jWkCHGgFy5hWavcEuGiLBrYcznjFmkikW8mh6CXvZgjDow",
  "key41": "2goJzZwMR4reKWxXbJsvZJB56BYN55vfEbyxne1f4DrBJEQEkPDzA3JL6RxrFU8TvuiGVbVqUmAPHCB1Ro3prwdJ",
  "key42": "3shUJgpNNU1V5s4vaxxPDUTugukGGBtiLrmpBtjjjSUzbYyBPd2LFvoaRzxSVzdWk8D2mNzt9MDpkz89XbEawrmv",
  "key43": "59dVrbsjLzxxwd9WjNV2qe8sz29SpPajBpGVEcpEXgYuNhmka2jb5QUoNHKdfxSNY2Zar78QiD7U5qBV7ZKZ3ABg",
  "key44": "4qKaqB2dMQYU86ebyRa8ZoLE7QdcZ7BLD8Zp6fTFzghxXXcyur3FbqVotFgbQ9XtJQ8fYW1QLHswLfKuugQrZgJL"
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
