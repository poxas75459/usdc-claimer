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
    "SfsSjqy47ETPWFDXQ5bgLfVbDStd8jCDs1mvgfJi5DRVrX5LuySJnsqPk5zR3xKvPdxv46WTmd7dJz98369wMep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAN5ykeLXmKEWhf5GgYRqZq53AckAmuF956rQA6uhkogmK3UhEnRtft5fXBUFaeuBEZu8jWfHASD4hfYctLJEaz",
  "key1": "k5QEhJ41V78c2vzf6EFPESvZQch88UdvpWeFPDLzvjRTRkrQvcqTGTAXrbrJv2TXit4NHmyPQ5mC4WHkUUpPGT7",
  "key2": "4ZiPeq8s2zi952cn5p9MvBdEwVoqukUntHVvQZQZ4kYuSSB3q9s6YopayKXe75UPDGBWRxBrZ94DmgoGcSMd4vs6",
  "key3": "MDA7JEDnkZBdZ4BiEmXm89sLUHv2byTJZBRq9CSoysy2WKFRxaYYZEi4oxfZBfzzoU5oYqjNDSCJugRogw9p8bC",
  "key4": "34vDBUC2VU5a3vAcbKd4t1rN1oUhcSK9py2Zq4bbWRr8Hy8696moLnpUADKVBNJL93FeUbuyjJHLpU88cAnBuGgv",
  "key5": "2tQGb3K61V15ZToTUbS3qeyiKuH2TDgtHHQnTvyvtycf7mdqLRB93jSGavWL5cLLyMbqQ7Gnobs4UHPxkoGVjdNc",
  "key6": "Rt9rNzSBsQUdTbLsMunTNULHHtiUmRrwqbwUrSdzajbQxEk2S25vHiuQMhCkLfNdPcYG3Rdw3h52mcydrA1zz2q",
  "key7": "ggyTfW4supj42yGEUH7QuaoN5bu1Q6m81729Y73nWzo3rdsfPKzi8FxsvTKYRd1voAC1XFSjucsVtzcbnXfc8yf",
  "key8": "fCF5rzA9dkMuwGS7wycXKdjAHfY4zNKVhkkcJwQrZKhh9SHyHiRLdqo5RqKLn4Q71QqDmZdZVM2yWj53mrubB9C",
  "key9": "2fFBAPisPFTK1PcRoRiicjC1BDR71B4ixLDVE1yaMEGmv6sxp8WXzVntn1sb2UVU2j8tQRVswWknYqr5LcfZ6uZ4",
  "key10": "4B8LCqXLRwDYXPbybJcc6uLTkzBJ1CSb8mzrw2NvaYjxG5M8u5W6bgf1FYAjjSrFFcLe3ou8bVHWXHHjT4xMaoFf",
  "key11": "5jLqMqTF7aMzUp8texQsa2dXkdTxVkpGJSuhm6xckVPyeZC8LByPjdniXHM48JEcJLqBDLARSpCBSkhCp7Hrtxw9",
  "key12": "eHghVz4rKqkbMG6F1pJb5oqy6txCYqEz3yFuHq7oXLH2VWVo7mYnsqFKfiu3r7s5kHpHvfXcSwmLQsqfVhdfF8G",
  "key13": "45z5oT764vXBGjxZqefCmqwfvNmQAK1qZNLRhmAZereLAYP9qiCccnkPqw6kEkbRthGzcuwKdosK5CYspXdXkdkY",
  "key14": "42ZEscHzzDaox2UcCPcQHnRh9k5sYxEY8upcN5nbocp1WU1jWFtFcSpwbsmfGSRayiyzKrsNNqGEjWvzCBXNruAC",
  "key15": "3rPhZVPbJQYaAHFuWK9RpJq6gBzB7GXTYr8XBgjMkUTV4L8h5zhV8KkPiHg17HTcWHj8jWyDKHGFZzGiK2UMrrAf",
  "key16": "F8Mpg82Xh33cdmG6fo1TxeDcd4MqGGBgmCDC3aLHaDxDAjq3Y7abMPNibRDHTwHhYuanw13LkXEBtQ9h6g38z7F",
  "key17": "4DErvrQGq9PNNhgM4v6CKAVqcbpLfVjuG3RgD2TyRh2qzGqeGMsmVxbeKJa1QBZ19f6Mpm791BHAfaJ77PrwtLkd",
  "key18": "4GFUUvdusqZf6isZjdiprEtW25hCLtQ2pZeWvimiKojHoaaGgiWmpsuygcPeUqbgsgQv7mY7z56BaTw9faTJY6SJ",
  "key19": "4UtrYRc7gPRUeUaTAceou4kPidpBoPMfBSdijoDStBm6hzpwuW5huZRzGPLYgg1eoALee3ahLS9t86ezHCTVBZoh",
  "key20": "PrQPfooZkXqe7T5PX98RTk8EGCZmYkWCtZ3Q8SBrVsJHaRTKmq9GmBnpb8aqg3hxcXq3rAHYTajFPWGf4XF7qBm",
  "key21": "67Cz5QfUtMQbLh5Yh2a4oFbPKeiUmdHkew7C57NZ2L7R9y5wr6GBPmaAAkCyPbhTQA1RUCLUWwDYzJjM9y8MHTAa",
  "key22": "4cpt62amR5QFd5SG6UfhE6hhH5yVMt3Wszn5pXr6Qqrw9Njua65RbtBb7pQKfTRvkRTgv36Xc88Z7cLyMzmWHiD3",
  "key23": "3Jt3ZXNN59qpP4McBQ9HkoZtxxxFyjFwz5MY8bywtSgCFWQStWJz6erUp9RGZXyW3fqcZXJMdndxrvA1EjSB9BZA",
  "key24": "5xF8ag2PLyoTS88SYiFY7baA6tzuPqX9Rp9GuNJfoejseytbZjq2GZHgLQcjv4yb7SNdUUhSB8K77MbAztztFs8Q",
  "key25": "4d8VYhCcpSSzg6xZo5Hhc4VFMQ1K5qTmVfSUHuR93pduTVES6UJkD7hdxcje9i2fedQbcsanEGTZFRyHJ952cueH",
  "key26": "2RVEbmNiub4fdtHyC7bU5PwFKWJAUuKPzKLMH3fYhRzbgwrZGVM1886w3u8Ete3GsEyzKDfNXEUDaj2DBs1HJggo",
  "key27": "5Lk5gvG4W3sadStPjC4R7frPuU7dHchMYwr3Bx2tPEwf35WE3EJ9YcDjUg5VzSuYxS4ghzRgZKC6aUtiii9FizDm",
  "key28": "4PfZDfEUyPhmE3nbR3s8mMPvFsmxc68Pg2brgWzQTbAQ9aticwBADwmknRHxgzdXiTJgxmDza9NiU1hwqJMEBtKm",
  "key29": "VW785k5f7uTaKNV6tfbPi9iAFde1MkrH8PfPcgXjBbSqZbZcBvKiGL2ySj8VwzGmW32F2LFVSyDk5NyAXzpWC7y",
  "key30": "2SuUDuN62C9yiYiA54RVp2T6xNT4hZbxDDEvQctpq965k4huyTWXeMNsifPdTBxC21B9NdygyoYcYQybxdDqCgpn",
  "key31": "Cj8YeqaLJfukXZ93VrpY739PimqTTuotUosrt8vgTVhFm5d9kkA4kU5dVhfiTo8SN3FTAgsxCBwkYRgS8q5X65Y",
  "key32": "3sWuKCSikXqnLoHbZzPvuUS3yszT6ubvft64VPt26Kf7CtzEG4YHNLt9VtDeQJZJsMecMghjtb6nd9ac1pR4Vp9L",
  "key33": "4NV7rSabpLkj7KhYxbM3NxBz4wXY99MpuZN3stiQDMkokdyvpUFZGRunuiXQx5sYRuHmvEgxUx1ow79gjjCeSY9T",
  "key34": "P98jtWpXdLpcAQ3J8vqCvMWiS7RaYoqGMDEKNiibK7XnBt5daUNqJLKSPXqsuHQW8NzxtpE23h4tEqsKEE9U3tn",
  "key35": "4b6Ao7xaQdkN8NgLTi6YM7HMAgrgKVGDBSnuFXgixuHVu8Pc1Pv6MjFsJ7mThyTC9sZZZMhcgjfvWJLuixLoRBjq",
  "key36": "3NThmq4qc4kPHGZFrY5WutMFVgpnMfY8vJnEfTcA7YnUBaHvrSVDW2GYwg7HieEvwmqApgFvkiNXQgoEcyS6Ru2F",
  "key37": "4AJm8aFknWotTwgf1bGpbap7dQvK5XVksoCAwY8uy7FsC7DAX35WrVnFtAWZq14JkJDpvxHJV9wMHDigBLzkVLRv",
  "key38": "2cRD3TZktXhFsZqcbQutU2eSecL5FSKwLZp9x9rJxQK4YVNKarxqrS5Nj1Q4VmLyLskr7YptgpihJ2Wj2GHF9vz9",
  "key39": "4LLWH2gZspCckDTEncujt5NQ52SH6kyi5xuZSYtjJF2ou8EBSDCJW8eYdrTJdU9SzuzYAz1crUFsByeChzKX3yXJ",
  "key40": "5XfF21LZB4nPdEFSXg7MtkLFkxoM85STMrttA6oTRygGHKD8fTmGGNy6vrxUEEMZtr1VK5QwtSFLfiiDiqFYvZRz",
  "key41": "KK1Bmy4bqNoNF4sRBYeF889px6dxxeS49zXhvGaih7MJhetcPjTasPnBgnsxyZpMpLHcYsgsxJeM6jEijyix21s",
  "key42": "3d9w8dLtDJoWyTWAZRmGozwAutWfv9T9Y8siEgt1sQTzDNgw1yzUaicDngqT61ZRNK3wQHkxUFUVSvG2tQ221gj"
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
