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
    "3HD5zkU3cTB9VNRYFyFVXrgX6wrukBWfwuqmaqzqV8CBNtoh7UQbrdDD9Mw1ZgkuXvgRd4LihgPDDwWefPvq2xfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDqUAtmDDfsr25LWfs2uzZd6jCGZzzeL1H5jReKhWt1nU7wDtAxa94SdohBio7LQs3oHF7EFyTemmHLV1KDQ66x",
  "key1": "3W6LJGsrqrMjkh6mf2hnmvfwG317vrpD5xDTgYeTWjdhdN2f4Ta6nhWg3MCQtpbRYWY4DjW9tC7FGMQgGaawWVMx",
  "key2": "2Pba14qYVPKGBy6uTrmG3meVUTLeSBkEdfoHoodkfuBQwbLdQqWahQiVaKmxqq6tUSaT8DXGcBQx4HU3CEBfvhGp",
  "key3": "QXBJWbw8mwPPdU8YheqsGLStnB7kinXwupuSdKTiuEHBN19qxio7iUtuQxoLwuYNveCTofEdADaKQwJA1WzGmzd",
  "key4": "2GDsqffV7LvXTgVnZx2CsRmBojX6xty3aXidZf4mCcNAquGvcdKdmFJVFMLKtqw2q2Bc3ycsDCqjr1tQ4w7tycXt",
  "key5": "3nvHeipWWUcrAxr6A15e6WmXs3yTb1zndtREtYJ4ye1e6544AaE4DDTZxdhgR44stNH3k1wRiFqK3CAQvbSkoo9b",
  "key6": "3kWJdRLUgDgK7NZdsRQTZzxJe9H9CvuXt7ya9aiycxtwS3Ymu2zEBm9QHmFv9VoG8sKX2UZkFwgSmGc7XdCNEYo4",
  "key7": "PowV4JepWJgbEpiFFb6DscNUUjDDcKjPq2VQPhi5P9HpqvxSy757CkzuGSatucYVQJCfoFb2wav9n9W5Ck8QHKi",
  "key8": "3yaGFWr1ZC1irzecEsvae3vSFmYdNfGtQTwaPYcaTKrA9PfH9CvTLarLZz8ghfy3b5T4c4qCn8CE5yzJ1Kag1nsv",
  "key9": "2qiFZzSMBmEHcXiug8AcZqpU8muTMDSKErvDNEYrRgn3UiDLEURYCLMmNZhXTLfTvjYdxac6GKE3BRbAmmnadEaw",
  "key10": "4u9qwNbRS46Etckpp8sLjU9mRSwr6qsHTVid42bp4JrKoxyZqevPn5biMLUSe2sMRshjxYn3YxBrr7NagKmzA2wv",
  "key11": "4jeJkJWaEJ7LUHDNbinArU2UBuQ1Yw5GYNapMeMdoEjdgBu4K8HpTFPRjeS8PDwZqTW7Xx9UxeQFCUDWtNjGaZ1G",
  "key12": "4FsobnbE47HDsc34dm8Z2FFGDnEqoQHcdAjc6hu6SEchAXve3Ya2VLbjg5hmSW3WJfju581b8YQaU3Fds3fLVYC3",
  "key13": "2hnoT7r8gttL21Lf5W5izZFLn2c39cQ7AgSyUfz2MkKcVa6JEx63xW4ErCtchnqisvxr9XYghH5Y7iDu6AeSafoX",
  "key14": "2eYNVMvXz4qgmtGX6f32zwVgJ5mHpA3oSepCUveD5XKZqZpxggtJ4bUHDPiYXDECuvtnMsescR4ABdvQq4SFYXbu",
  "key15": "4KX2SGpRPr9TueDXqwTUqTiZVBHgAzzPeYnZ6rDSWGXGAUKDoakdPgzqb8z26P5o5hcBJVSFgD5Q9iSjkPSDuLU5",
  "key16": "2sgoNC7zYtSVfSprcMU957cZJ4X81VT8XUzmDNbKJFeKPonViRoqxx92B5KjXV7wXgwjLyUM1zn85GGx1LmX9v4R",
  "key17": "V3qk7BjRg2Aunn5WbmfK8zrGCU7mRDFeVJdH8orL42aWKi2woNtPraovxsgmYdWJD9EuWArdjKEsvAihAHXK5kN",
  "key18": "KZxdLd3M7F3PaBuiMhm9r7u1BncEhKujTxuoZMmR1yRyhMK52CupXbiXSx1asNzbHBhFx5Fbv5jBgxJ2ZtBjqda",
  "key19": "3pvPrpV2HE1nVPBQURxGJoQEVkGk7yjkgNGbzdqjqTNsNJz8FFXVFceD1x7X6SKfBMEMFMtiyMZ6M37ehWGw2pQb",
  "key20": "2cwEY2qc5ExersQZxq4r1EDGWG5TYL1T7oMQHZ5qoQ2hJgRgzVMgdqkrPpt5NUCxTQVCAQEWYWuTw5cjftRPCoSt",
  "key21": "2jQeLqPykFWSF1b8HEwr88pzs2U8LqWZiNWQE7tJKutzLs858Pq6dQ6KskhegAAuXpwzu77yheVc5pCn7Knvvj8F",
  "key22": "1uEEt9bwsHMbVxspdMW5QBQenRRv2Aku4CMpGM7UJvzh4qJYi42JPN7ppsbJnELZweT8oQfYJMLt1JHPDMThb8",
  "key23": "apGNBWqr9p8RnCMhnY8pgpv5figxeNXzvPnUtVLs6oL6vj4kUFMXGXQwWn6iNSLx7Q9sKi4DUwPWPzBhJsh6QPK",
  "key24": "4hc3sRVW2zgCgXcEgV6nyh8jEKyoPGqNeRrqx9NKzVfzo6djEVV4BeqaqDQguE8tAfiG2oDvuDMwyPepNUBLBQ8Q",
  "key25": "4sqfykpKrcDMAdbiVqrLNKSG11oSVV1X6Xnh2wGoKAfcMv2CAZqcjuu7uWza8exA25GeoKwy19JAkvtpu5ZYsm3P",
  "key26": "29qFswzbpBA1VXJ1Bm2w4rG84cHSCDUZqHPJEjL7hProPercV5QgF5baq7M2hj7FfJcv8tBC6Tij5N169dX57fb2",
  "key27": "4YhnK59PJR2dQKyAzXfUZ8uxooxkJPiKFc26XUsfGqQP7K1LrGPKxq2XVrhhKpPTgTxeN1SeG9xvoQpTSZSXbpSJ",
  "key28": "wwUTcKaqDRHxWD8R1sKrD7BqUthQTDWND6kNzw4PXomayNaWeSEjFKa1cGdKumg8BjAZDG1Dg47d9jHNiAJFewa",
  "key29": "46apSYPhgvQ5qdZQB746k6xyVZ4U5sBrtx3ykEtp8kq6QEnoD9ve4qHdpMvDJwVcC4iVjwpfaM5FmLfpPwqJ1E52",
  "key30": "Xf9cWWzCLThf4dTL5R61Lyiv6CAdvZUwDnv6FaQ4wYnPyoXXvYXC1GSMM4avAR7Lt2p1N7PVPGy26nsHQNsBe8U",
  "key31": "rYdho9xt8vVz2w3T2v34nENS3KPVEmHRuhU9fFQsvdmSEApqG8tr8XHB4ywGVwdz4EFbBjqX7yMUzmTwcAP4rcr",
  "key32": "523wPTnKh5X8nDRn8V18ko5fk5keoGGEXwbN5d8jH4MTQsTsFqZv7LhXeUtVLQhcGuRHmDSqob8QYfsbm9KvSuH8",
  "key33": "4fdR4Ht2dLgokA6wvcDGBsEYExM11oaBsEU89uxSqSgCUTwJzP5cinHX57LWfCGn2DKAzjhLsgxibKdPV37yEoNS",
  "key34": "3et7cfUyGHgVwqiJrNKUb8zb9deMHviCyCFGFujBbbCzULPDnVBAy8pKRgnsUgd5hVRr6bnsb3vAcEWu3yqGrJ6q",
  "key35": "2Ykf62EpNkv57EN62rAGx5CfjpPjEQp4roEjXMxpyeGxYJQpvJcqqMpMnQV8QiSSmSXTTG9K56SMUnCRFk6x7hzz",
  "key36": "2Kydo6wtJi3RDXn1A6YvtypgezBUeWAWW7GYLPHqCkpWfvAuoAbi4sFCXP3JHwTfdqWuzMNXnJ9e1VXVBSifGPbN",
  "key37": "2PFWF47poFBKwPgHSoYZeFuHXZPVc6UjJWUA9JftuGU3NeBRBeurTzBP45pCqBVXBCpDwZNqgUrEyG6eY6o5qYXj",
  "key38": "2Yj59HrmHwYEV2cUcdLTSy4mLB17ho94bV7uP6otBiAJPcmXa2V5Zuwx64gJ6MuhLWmDez1fLQm9cEmA1nrLCjK2",
  "key39": "4vd2Fqik54HWRCU4DQrxQ1Gnp7yTKAbiDw8f3vZQeUhiqNDhCpiQyxTzSuA4e14HSSamfuzmhebYsFPF7CrZbpP7",
  "key40": "51kN9M7srwBYdyT1zWQDvmsHA3MpgeAHMDdXGinzhJYuVAxFLAJXHijSiPBzU32JkNXbYkw6PQGDo85yRps6Vckj",
  "key41": "28tvzR4m7CMRuyMsfTPewkUmKMtg3fL7LbDuxxVtzCZT4fLWw28GmVM8cpcL3xVmbRtNgStSw3ZRKEWAnhrDJw3T",
  "key42": "CJ6z3FsxeHdm3BoMcSckyCpR8ze6MGodgD48ifP3u3b4pJ7NTJo9GokFag35NVxYPfCX8ntaXdHEUKj7iFAt4Cy",
  "key43": "4LqjeRdyEAff7wVeA3REy16BXSzLn1cxJ7MW5FrimdFP4G4Lq4jV27P9fH6khKbQjCwD2J7pDdhG3vQXKcTiV3GK",
  "key44": "qPmASKUnPqwQ5JrnsdegFbTgmnvJvxtBPkP9BG6Lqx59DKBkv89m927yTZnW1f2t8WoKbTwXUaHCmd2ZRAakg6N",
  "key45": "3stfReMnCwsVdyuvyhHtfaWDmqogT4ECXb8mBQJPqA11K3jE2137EmhaVcssXascfXVEQcCJNzYbfsykzD32oXGN",
  "key46": "46hJUUbZZk3ypRzXkgwygz1Uc5Jmg4sAtQKjdtzbWZp2NMA7XMFSCQ1Xryd5mUh7gFm2rnMkqoC7wjtnadaHrWoY",
  "key47": "5b5LXoJfxgSu1Pt79Au1E8qKEeJfgxRhocR77RJDQ6NjdWLNiEWuerknCGQhg4EBDz3TBfvxLJcVttEKzb8ZTRvK",
  "key48": "4omE5thLN9dD7i3MBuSRWF2hNWzVdLqVrik2LpggMKNhT9itPKVUnV6YUuYZpzRh5PQtXRtqircFh9dhdj6z7Ww6",
  "key49": "2usHWccPo5gqkM6tmBM8YEea38z6sSEHWijgQJbKXccNeqxHoDeWxMaBgpkt7HEhLA5m91B4NsKf3GgzRbUcAzBV"
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
