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
    "5uFhxcaQv6zNMfo5t4pwd1tzeK5WRzQ6rH9sPJciMaCb2t9BptbDHCBTDAvQXYgjAWod1yUm8U2iPS49ihkyPefK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XNGXcJam72mJRk8peKXgBGbhv3iUWYGp9fKvKD2vuNVxnxkJrreu6irJ4NVZykxysX3JuX8ygcoUNfJ99ejK66",
  "key1": "2Zi8p6t8PhPtzAAwFni4C5XJyYsCkK99FmVgrgNQ3agXCXEYNRWtsj46dzmTbpX6GQ31jb5ky6fDCromJg41LaGQ",
  "key2": "4JYkJ6oRP8WFGCNg5awm7SkUKoTbE57oVBQctnEorwfR5nciEFvuPZjeWGJRuDdwnrat3JewYXVRuUyYqgLUSZXJ",
  "key3": "4AFuP7pAiU87QAgiXYJmdPcxYTAoPhEye8nfogasrUmfRss2yikfcnr8LtUws7jiP8XFQRSE18fvQGNVvk2oTXfo",
  "key4": "5D7gGCrL9HdYgg75kaXkDkpPYcvtNTWPqet5BQr4oKfLnX5SjDKxpL6oGqGJrmwRKFtyPgp9rv2ayYGPqs1ELkHG",
  "key5": "3hRbBYb61LXEnSkViRRAmqK5pKgwYkA1obH4ovG7RwkgV8PUYeZPXWfdPLX1367QuzbECNk3Lm4hf7G4UZkSsa1P",
  "key6": "RVbAANc6hrYPVBg8c3Y2Ldagh4gtBNLxeW2qWmMUbsLFQktnGXNoqBEcyHzhJJAnA4uy2g8W7xVKvWZz6AeDqzu",
  "key7": "fXyBV3PtPdxF3xT319xKPpmsMteMvGCm2gbp7RGy3uZFqfL93KGaheGnhHfM1sPvovBYNXtoJky67ymgaL9HxYY",
  "key8": "5se5X9MovGss9YYK6wmHk3jRKLRpqoJVMd3k7s9Z4VbaYdK6CAjmaqEE14KF2FpDSXV2qGNzoRcKrWa9tPkLG5NS",
  "key9": "4FHN4AfCa27dLsKQbR6NXMiEkb9ZQVgEAyLWF9fSio97hPKFkprj2jqs3oGdvpXF4EQKWUd4DEztmux9ojWPhTbS",
  "key10": "5LSj6CtbCMxG3dQ6E3NzKSobxBkHPKhez67H9g4z8J6Npwj4ipEAxQBHHJjNt29CKU8uJ1tD1sSyc6gAhDyS9Mon",
  "key11": "5A8ojYSdnHbHduhbuviDA6EuUgNYXC5M9Vi5Gi7hbtxjS9tCA68HcnJu57JDoX7yS6BauxK7HYSHxKeBXdgasWip",
  "key12": "4crY7ofDkR2z69obQB7HoK5vQz8gSMAeqHbQWXv1p7ts55BByacuusH6Zscpgq2vXvVMf5KbN3AuKvCmL9k3jUrY",
  "key13": "ixPSyDc6eS7NBGJtE47aWbmcJkVSk6cWu7sZgxFjYFACZh1uJ7yU617dkGsm586g4eVSGTWVC6CpXRrrH9vhoAW",
  "key14": "5aCc1qxtWJg29QoKfpYsiE7aD8UbPzxHcAD64hvvoG9qxpYeN1FjVjJ2v7qfiyC4pSxVbHXomQFV56RC1Cu9aFA5",
  "key15": "3W1AXs3LsjBHz3oYRfLm4K1z9czAYptpj6xSGcdiBeVbqPibtJxqp2wgnoB3DpkPuc8n6beDpiDbwWiieYVg6num",
  "key16": "2935GYCB1xpydGYQRR8YwuBvD5xxBhUL8bArmC6KDVTQtZ2Vu4FSwJprr5EDABRHWptnX8EzbzuNbX9dLarHqJ8w",
  "key17": "ucLAEMvtBshZvqLAbnZvEiTPaM9RyDr9MJRgi1dnMVecdNVHjcrLA7fGcEm3wpx4VW79R1XA8MgZbwfMa4f1Up8",
  "key18": "5xJgNHyH43J8NbpFkMrmDv4VZsQywVi7XHVT8c7rtF5DsptaLR54TJQ4faKqbrwv9VnFbBJ5WhYBpUP6G1uaV7Zt",
  "key19": "2j4F5yeECn6Pt1AfMLczGE6mTZ7FiBT6NdKNY1usEV4ScTJBgt7kNVNypJD7umHBgKhuR3Boe8SNbwPAFzstTs8q",
  "key20": "GR88oyrJoMdxFF5EFxMRsmNGvGFGV127YPBH4y7KhABhgUituPxGU9v8UFFj13fNdst57mexvmPab8qLM1MSs3K",
  "key21": "2gyQgKJ7tyfVoC9TceiSxZndKg2V8LBGSqaTd5FqapwSNQLjGSXsoB2bnJaKAv65mf2S8i9g8q92xpXvEqg93hPz",
  "key22": "zqd68wA76QTYE47kyWLmuD8Vah98tEDLiUnRdYwRag59MBSv6YyVVD3L1jTLFb4P1bCx3TSi6Q7fVR5BRVPrYr3",
  "key23": "pM1uosYotHBcqbW1fFYut181fctabhgBTRd6VpBqAVHq8WheZxLsBoGhpHp2UWN5FhkC56KPopuCWBaejYJypfM",
  "key24": "4iWee3BkB8P1oaQZghP5MfJLXEY8Peb2bWM256fAWgCRa2rBArDNfCdSGYj29DM28WjaypFJM28HW4u72B2MFSGz",
  "key25": "4Hei5x7hzpJm11Z7ypdDnsDneEk5tKZKwAdKq5TM6hxV7gKmezFYYA2adS6EZhk1q6ou9U34jKH2WJ4Ci7e7qNDk",
  "key26": "4C5RXa4UmdoeiUQ32T2TydFNyHJ7KM6RcQaDsyvmm6fPeEJefKwTuytGiXP85Zsue41xEGaHQSE3qBfu2BWTpUY7",
  "key27": "4Wv6goe4hA6aaGkRmzt1AbUBwTsu1iuRe1KFZZYJ51mKdKkehsSDc4PDXerziZRozgd6iLmurRvhDuTxLAUWFgVP",
  "key28": "5vtB4bvBdwHjB1wY3WRoYNhzKX1jJb6tyYQZZrrne31iwYmM7EPqHtN1CRQjsJPnmCt62UQuVVi3DqPVG4gx99ms",
  "key29": "5PkDqWYQeixQyPnyYbQE3eLJvZSJNSiWvwKGPWh1bRa7CMq2YRFjKCotfynS5Y8TVhNMpFRcqqq1s8zmiiKcKqG4",
  "key30": "Tyw2Zr8BHbDMDUToaovFE6y7CUfjbcdFLc4G1sCyaJ7M8aU33ab3QxatEjxr3z8enUp1SHoEwwYkqxe2Hum89Gt",
  "key31": "p2wpFth4aVQRByHN5vCDnAwFNAaXzN4SYaapR77yYX6nHPqaw2CrF2uA4bvtQ3D2qTUeaEKNBwTamjSsnLRFF88",
  "key32": "4AZ32vf3Rp3KstSgyZ9F6HwZkR96E1BN22eop71aiEdttbrCtysj1qnpPbu9coYK6kn6fwxr5NgSbMsRzJoSZ4wr",
  "key33": "GJuPZLJGDSJGnMSSYhkmjV2cWz3HCKKv6HmGwvh6UDt7m7p7fGXfDV3z7Ur4Y4dK3DdBsiv37XbdbzMqU4qUPT8",
  "key34": "5mfzkJ33eZD8pzMD6Wbq9g1TQiptp7ukbgtbzZYmNvsVVR5dfbK8bHz3mMHhEUbJYESNhxmFADfL8CgtKLGHgG7N",
  "key35": "ey1N9B3iMiCSJQoVDAJiGARjoWzBTRfUVTeohexwMV5MzsZyrjio2nK44vwZZyG4PWbFhDRLzH322rJJfME2AAq",
  "key36": "5v9YTuPRJug376VqMZN4CHNsmHwP9dtfoqTg1my4ZEXgAjcz8WxHwXbRDsR635MKrfPZd4GSNCi976fH6FKqifkp",
  "key37": "3MiaEwshqjJmturaymkev8x8vEFMZ2BvYfRMdsAuQEiDh1ATBTRU6wa8vU1VNgdvd5DMsvSNQW2Se1kpq6sgkTy8",
  "key38": "3V9XXJA7QjM4TFJrXJVsxBwL6FmA2tkEXxudrmq2nci1C6VWaUufqhEeXSAtDUV7u11TmjAFHHyMiusCiyNSREvu",
  "key39": "3k4LnS6vjVkNYyyCV4tE1WeqqkVx2fqpVjXGQ8aZTg36R9K2LpPKsQ6c83kTHMv73TjRv1PBY2y7V76ye8oDKgXK",
  "key40": "4dtsiZXicQLh9WTKVgdUvFhJKDtXFyMKwvb6t5dTwMMfG6SKpk7nQd8Q8YmnPMXEJ7DN9XWb329gxTmKyL8h88fP",
  "key41": "37dhsGvHz6ybXNyGd4n1wJQ7kHqdjYQ5XhjSvgJXPqisLmdr1RafRRzPBeDGGVJmSYajNDEdkUtr6tSsWwwGXeoY",
  "key42": "4GmPQDM13w5HiAgYyEmnEY34xDWmJ2mrmiTte2RPwPJnjh5o6kvbBhnro28dM5hDh3cZYzarTHdFCLLTzWKoiQMA",
  "key43": "SPf5BgTJp76YZwTp6dxB2PPGw23qJLf8x746UW8MXr3WFsLm6e26mA3vNd9YUd4oXbuTyTNDK2FX2dkuRLNx7jR"
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
