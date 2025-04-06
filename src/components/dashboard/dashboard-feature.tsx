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
    "65PLTB1TDqi3CRt5pyqaHnECRCsu8tfxD2EpsETwanQSpjib5KhZUXd9KyZ2bhKowurezDLbcCEZmpkYnSrgkB4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpjDc5K3nf1UNN3MEShiWQH6MhRi1GYx32y47KUSpsKHi4Ffxq15MyFs9zTvhFePzxeyEUVJTHkfsEcxtoJU265",
  "key1": "5av5ic3whmonQx9xsh8DU4WRx2Pacnh3Aj5LA7A3K9MvzXN1sxshAcNPW17wvY2jdaNibWbP7rXnudPsEJDLExsN",
  "key2": "9CgAciW8HBcyGiKCqsr6b7gU2P9YWL1X4kYCdNKjRF2DkPn72xA8BobMsvb7hyjWypg73ppiSoB11jT12TFVetf",
  "key3": "DNC5tZxJbCHPnuqTFUnSAbUJpT4oYupuu2QztkXQKs1A9msouj5bQh9gWPn9MydH7aGAZnYeEbcU3TSVSaJdpLa",
  "key4": "3k3ZeqyPdTrmUYBWHSiuhGoTtv5EC6u6T68XcWvcYZYTvbB3hK1dVvNnnPYRWgWWW563qArQf3SEW8GJkoqMEvYi",
  "key5": "in8mDimzbVAQkSg941dfnZRSrM3D1vP6vEf4aiMPuVrjhoCf6F7s9MBrwdRx2C4xK6LNomjRE6N8P4t1PzMS2ht",
  "key6": "og9PVHR6aVWsohZnycTmkntYCB3GoDASSBghNE92rpi1RLiE7y2q92jQtMbwyNQy1yZAb8SgAoiqvtAnZH81VGh",
  "key7": "5RvE6G6Ls6KMNebuua5KxT1uSvfSjGZhxSivpFwsrCgC8i72QrnMGgS1g99PmwFfepHh8tNh4a7kkpPUqrWNAQEA",
  "key8": "25ake5nYgEHaw8tQWanHsSjzXxDgnN994PRsoPGHiqRpPn74ETKH46GcxhiWWFxVF6LSRJp8mQPFH1zmG7HjzcM9",
  "key9": "w3Xdq24eNSsXAKr5QrXzxvdBqgaMjCN6sGd45rJWTPjfFa33XB4dUFYzfqZvYZvpjGRytQrLfRnD2Kvptwbh8X5",
  "key10": "2FFJUHM7W9wCmNo9345zs4DzoXZPvkQ6b37ypebxiNAYrPKoeTdpz9jj97Tc5uSkJdzWjtbeX6LMsDMjfCCAHXL2",
  "key11": "4EUh49CnDWUJEPf2KUyj1J86B4wRkVmv4toemmk7yLyP8f92qacmytvxdyj1ME9KwvS9nsbceLNCp2mtfz7GXGSR",
  "key12": "NEKaTSnvdwwYSqWxBGj2LDxnC5YaZyvxmsLYVtRWeSkn5jVH439kEsgVTfga1HHNmfrw6nHvzKVrwTFNBQi7Fz8",
  "key13": "YrLnvHFR4FAEnebWZfagxFyf9fZNKbwa35HQbvVsD7h6xEKZMyLjofLYtR447MCTW3WwFNnqvqmPxj3snY4oha2",
  "key14": "5j85gNvMFguk6djbk9YVJccEGfz9V4qdJQ8wXQmKkYYHkxj5vcbNRdwaq78VRMHN3dQx5XduD5bsJNM21CKrMuj9",
  "key15": "2aM2XfMZ6qEUgVZQ1GUjkLvg5mYsBvNKbhMmHtZ4rQihGDwpVYGDdChrtbDjfc46hdsKdoBi6QWiz44okoeatqMV",
  "key16": "5Y2pGus4GCGzbdtWDMTcSs2iN6ocnFumXFtrBCLTDMELYQEcJFk4aXejqHNc9Pm8btW9QkVRBsAwezydPc8qKwUR",
  "key17": "5GVp3RMbiENtcEvYDm4FCNDuRQWuvXUXLRwu7zsfopKVsecxFbN75nzUjWN9TTfNzVKVas3wUF7nCUpaCHAiAcV4",
  "key18": "4vTXmtZ93pK1E7UhqJGnq2EzddgmcxzSpvnw3VMuHCchUM5quJLmCEhqironx9V8oH4kozLVqDDgCsbcwVmH9HtH",
  "key19": "2wRnKk7sJY4qfmyxUWf6cKDNAT2nV3tFfPuxdSBUPBGvRkCFg9jgh2XqcqDofCBcccDY2EVibtCwYuuNNi4DMupe",
  "key20": "2wgSWvnUTGuEKXni62ZNbRE9xPZXxuGGeweKQcNwmdLufNBss6cyN8qKKN6W3rZNsE3iHJ7JQej4DY2Q4raK9DJs",
  "key21": "33zTwjCaK1UdVnKBpZSZn6FTDTAmuHr6M8pBLnwTAeDWxJVncEXNs31yEBpHvWKspB6GL5tGnRhfZ7UCVow653zx",
  "key22": "2kbYmYuM3mq6MphDAtQe6SfwYvRUduxguPzVgfD9ei1eewpMgugmqjttyVBAAYBJsAZr5BEt3SQuYi4D1ZhEbK7J",
  "key23": "9W3QikAcmgdnhZx7ZEvisrZxWnvfvsxHoPDcKQP5pDjqyWcpsg7cyorzraNKie9w6kBu3CAyizPQRS1uxkDRcpR",
  "key24": "52twZ455LWN5AH5Y4DFDezR1vYqDRWfznopbdyVCrBuWAtu96peKe5MQ7G4CeDX6eCjK2nBsAbDphRz3ZE17THP",
  "key25": "4aR8GC2ddkjQ2sJUQiMnN3Nym1Z2WFvgrbM13M7x63YXTyi6EMSXne6qREbmMNd3ziX5ykugqDNByqQ3zNgDYLKg",
  "key26": "2s2NEmt5hsHVarvvhPKn6S9oonaRxSCKmV2KcSFvxoA3VFVPzntny6GhG7euRT2ginzKfd63wAcYxHogwTthx9yB",
  "key27": "5827zgxKzX4KF4PxFGjbGt3fAs276hYuJBdSyPd5JUpn5NkWQd2NiFtaX3KEeuQGVFRMrwH4uYjU8bmes9mtqzrr",
  "key28": "44GQZ2Ku5VRVzCqzWUtNKLEMsVXRBNRwmvWKr42NKS5ub4m6ZM5Dwxb6BUxiXcx6PYFdUmPjLANFuFPEnv4SHGA4",
  "key29": "4FAadkXsxydZbUXaqnFVHXuCY4KjqZw8sTRy1r5yj9CgCWgbyQdNqZbBxtQt1zK7jHFW7T7DQfReXjNJEp6wsqKD",
  "key30": "4YgGLZtxz63pWvvgm8CfHrWB3gHjCS9oBfoTcAs84pRpgTzT7QNu18f22QBvRLWBSTYvzDhuLF4EsivhAPyguxt5",
  "key31": "67c2pe34PvoUMBt5Y3GfEXA54v1aLeoMw82Jg3ve4DNjDrCKS28K71kpaKZ9dgxAbCZaFQt5m2h3g2P9M6XWhWB4",
  "key32": "5sKjWWjoBK7gXSKEXrWJujhaVq2geg1jNzhQrHqrs252tAd3oqh7TMg8mXYwZqU1j2ZVmDDVLrHQqUchVoBSiE82",
  "key33": "zdKkCRessYaVcPUspSaTudnaJLcpc1JxyZME7YeAQVCqmR1BJ8xyiSo1cYzP92yp66tPLYLUBZFHDZcQKs6XoMF",
  "key34": "4fmtd4TEavcrYTGmVHEWpomYEeawEedTyMLqHVb2jAdCuUjHvcU8r2rufxnBB2p65ucFYffoZz79zbgEAeExzR5H",
  "key35": "mQmW4FgBRe6qpjeeUAyJHLneswQibxV5Lh7oDq3sk8dEkoSuSgDUTQkHKp3XzbXq9fz7qAaWmCG4Djy5yhVRMsa",
  "key36": "5wRX6ZvBEioSEUazvnCj9YKCnnbEFUgbT9SHLH3joKG9JeSQh3F1LuUV4FfZfZ2U4rq3VcKaKS7v4fjpb3rNNQkR",
  "key37": "MpBkHrZZMz3fDoctqUHQYKBxsEkQ2FPeUXRRbnLUp9dmUaerFH99xFgcGMLTNN7GQcE29jXhVju3dqu1UwBAanz",
  "key38": "2kHn7cWsYQfhA6J2J9dU3a8gbuDoKbNn2eW781UmCwFU2QTwg93xHYZBayx4pX64aBoyJ554czECsMw1ms1hedGK"
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
