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
    "4ZJa8VxE6UbauQw2veUyVFv7wjTgpjzec3qkzWcEz8KaozfUacqX7mDMCnMMtthXvccfEh1Cy9vnCM8bCvaqad8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3BR4N6XQd1cE8QK1no67C9aTFUyZvLsG3n9FoLLMuXJwaFrAquAxiErfQ5s7o1vpH5186kwShKVx8xnctcFDMd",
  "key1": "49PY2Y8LboBYuNMbjxMYJd7LVmnQxTaYTGTDZ6VX4cQkfsv96oPyMLJJBEdBTA8RGp4eLzsH6xFpZyagGkWrVFT5",
  "key2": "4uKKApcYzbsydBEPw8HEXSkQPnw6hGdMD5zzcSYYuvWwg2pbhM5rYPfktDAQXu97JRg1XHjj2axC9uUYmByWJqdd",
  "key3": "53HH7PPTVFnWnxrW6LtowLyr534MsfWMxUY4MFCFptQvWErP2wnpPYDenXbmopPBsRxKYWshwqur762biuazW8Yu",
  "key4": "4ztSNrf62Q19MthceErsx3DjYeZjvZw7j9zkM9B4so5jMmitinsGJg8rFmfSmSj8Wc2MsaZqcwxdYt6kAY8bMGgd",
  "key5": "5uPkyuSkr3bXTv3hw23AEu37N5Uxm5q674j1Pndtb1BQG9yk6JRZe6anLdRwvgDJQ7TUQsghKnfqMD13ind1ckXd",
  "key6": "ovmZdgis93ARjN1jF1etpswpY1SrKH67UAJXAUVDsRu2QRdt1V8VWDs3VYeWYEzS5FTKnNmHTkdsAqRKBFSV5e9",
  "key7": "3vjc2F6dFr3p4d5fZUb6YK1AJZiahjzuDpSXemAk4QghbmbLBJvwxzFY7sJdcAVXkwz22dk7WeDKFxaPDyksvbPa",
  "key8": "4dvqhvmAa4kGrC65Avy6YMUqbRVHNk6UEjhWGAtemtoeZRAMLksSJuLV6HpN5rXg1UqJTDRM9tvakQavB9WYRfsH",
  "key9": "4gtpmuwc4JKsPCnRGymjFxnqxoNqaNkG8aw7ArUuD3f8dUVmUWPcV1Axtws4tpYb96tnZHp6vxs7vrECyDRFNKuD",
  "key10": "33xp72UsVBTvdY4Z1zoSBMV6h475C2HaUgjXh3Sncop3BJTANp9iHNzUhzV6z8qSJf4Lrk92KXJeNPrF7ad8HveD",
  "key11": "3jjvfX1vrRrffDTMb7AGRh1JNUchftsmGs3EfVyeKhejWTV7jtgMFZwYpxkVXneecArGUG9RqET2jEjPQcyrR2Z4",
  "key12": "5GmYKeu7Qaexe9pQgG2W5DX19dcdQNnwKQSbhvtXGBBVd48eeAcYd8BSdYStu4mujBxRLmBtGxMycmSy6HwxyW7g",
  "key13": "5a2pkRSuqNpqnwH5v8VFRk95euWsKVL9zeuAEXMT26Spf2zpnTr5V5ucHwt6rBGFfhY3d1dncAmGV4grTQEpJJe7",
  "key14": "3uPCGBL2vbeiyc5YVgXyDHjG6L1MDzN9bphP1a31USnn79JkWv3vGvSrVdQH5G24Sbah7ufhqgkYoGEjWqRJEpZA",
  "key15": "2jJZ6akrRvzARAn3rG2pbhfGpNC4NbWsFv9x9gTCwaCjk8xMixazHW7G5qvXDGbnfZTKcuKum5o3Vmz8YuzgsUqV",
  "key16": "64m21pLxEwvGsoZwNWDRoKJNyKk9dtwG49xNVCHDMyCHuct5kZD1Z8Lb2EpxhRuEGst7j7pKAHP63k3m7qKkxnzD",
  "key17": "32uEDFzfzYq9C3bm4RVP523FCEQziw2x6dVUobKh2345erSaYNbaH8DXXPgUpjr7tBsQFwLR3Ge1ERdmG6Ymykdd",
  "key18": "44S9ksjZnShNosGuZsTzgdu1Kdf7PpqQFnvkaDZ4LdfuPK2W9Lkc7vQRD5xhLBjpDwm3WhXNjgKEnQGY46rBNcvV",
  "key19": "4LbY6hjTwL6fBdX2ACk4WCmYVo8hcYCPkrWkJKf2EDB8T7f8ESafLCdtSr7QXLmUVXFLpnnZrh3rtBwgtngjix2q",
  "key20": "4PRvVt3QBjqh8PguSEptRZ2akRgmS8pbinVdYEHvfVe2weiz5XBsxqddMDKJCJzPNpiYVG6uRFRuam2n6GxKW5Rf",
  "key21": "27G7KNHNxGrbAvx5kC3Uq2y5jsttMm12t5wtWmNvs94oFs6228EqwZjzj3STSSURXN2KCjfym5p7XcUGzChAuHUh",
  "key22": "3k9TKjfQ3Lp3EN2kafT3zuLhBY2CV4Qi4NwpySfPyfKz3caDiUHvZUunqixa3gSRQTNz9iKs1gfmMA278RtUzM3P",
  "key23": "5pxhQnBQcC9z8TpgNNv1cQQpiMHgPjh63BvPqLDzMGYXnrokVMuunbq6QEGK3FfLAsyPahutySBZe2TQb5E3JTqZ",
  "key24": "GQUGdqTvet3tTKa2AKGGvtwydJ4dPdDJXe1MBXnJsRiREGxg9Aec2XjiXGnzmVHhdy1BfNsJymkvZHDGMjEXXSW",
  "key25": "36PBFQ3vvvmZujz1eCZ4m4RFfSgBw4tzeBmLFyz3tP9VemWpSNWERiReq4MSh42KhWfavapnX4j4sTSvQGXvqmvf",
  "key26": "5Zd9CWeW6JMkqdkBXtdH4KiALWBzvyadGd28aW8SG752c6ARbLwzXP4agUvwM2g61TNydkqeLVZqABCUGFGURPj8",
  "key27": "26a9vRvXUxamd4WH8Dn7FcWi3hmJoWj1HUyHDRHenRY6icy2FXrEb8e6RmEbNRYtHZno21Qqmnmfmo7mHZoWMhic",
  "key28": "5TheiSLkcwyUBJZh2uR4HNU8KoFSSaWkS2KoUYNiGL59g6zVseEJjRGuDqsSocgKCEwVDuL4KxYwmRcCmYHfy6D8",
  "key29": "2RB4R5g8TCVxuMMcqdiDEXFWkmqXAjdfw6f44M4KFcbtjeWxkr9LPXmYJDLr5JPxVpNt5UnVrU7EXfsp5u2fuQKv",
  "key30": "5ahdvdKGzXvrbBBhsLEnGLNkUQ6SM19Xuw2g5JJvhx9XQSTr9uLqbzKPeN6sCe7G7kVNt9MaDmxC7BLUv1RUkjYc",
  "key31": "35rSyDi16k2ohcp316tTmE3mhzhfZnKdZtJo5hv4P46JEaK7FwC2hnTzWBXWPAvwKa7zKb9cFG1C6y6knGDp8Jhm",
  "key32": "4ekxMfY4irYKwQzsRVgUy2ah69PoWRbDaTe4WBQ2Bn9XYMgcyEx6gamS8XVA7Q3m5x2wcuqyNyU3jpQwUnbsu9mo",
  "key33": "2Rr7xZoa1fVGiCPzrwWJwKHa7xfEKNVwaRsVSQTA1Fnw2UN5Ew7MDBMvCEqsENPMWrJ3NcCzH5pWS5kYr7MTYqZc",
  "key34": "3qmY4hHi6o1FtQ8CGKG5RWCWTwLhrYtS5kVZpL8XC4iAZ1XYTH2hJeuJJfaZZqTKpLbFXG8oRwz4jnhvujppJvjk",
  "key35": "4MjxhJpbQ95WSHrx6zqHG64vTyjDVXx3scMNiiMGxufC5AFrQP1MWbpePbSMFFzYJ7t9WA6N2fDv2v9NP5YBxTZT",
  "key36": "9zmRa7PUYgqUMgKH6WmsEcTrSb4xfNrrkJkkry2qHuxVWitdLeb2MJ1jJW4gntCGT5JUQRwHraQb3FQsXgXQ9pw",
  "key37": "4g8xWXrB2qBM7F3spCU8eBGFwxFgL78FHYez6k4cYQ8LR2c8Bn7SzHdDNzGAnKhNnZDU8LqpwbNmLBZ7w818UmFV",
  "key38": "Hrk48vveGbvheRCLS4maZY7wcwTiiEakHPfcGtfSLPgYyEpsEwNcTorSdW3GRdHi83TojAb8j97K48cvZHTt1r4",
  "key39": "4Yi6RN9k6wrap5QojXWe4WyHreZxJfsMn7MUrsubqKw1f37eE73F8eJ7yitn2MaAaXC9EuTP2HVyY9jpim1xMSjg",
  "key40": "4NxxxQpa5Q6H3qwnv9c65ifSMrUuqQ4dTPaCavZSZCqtRAmiNJeQweYrwoRQzhZxWa5vMD5VqiBsztDFdhTbuQNW",
  "key41": "3mc1PK3HMNRPo2jLAekUxSWATkwLFKgHUaEdavK4f42jgGTPw8LmEMTkH5TfbiL7iY3EeTPLBWT2CpjdgfSihdu1",
  "key42": "wmkoseqPhbmmpuYuL8n6NZwQXb5RYFb4DtsgujvzqFFRq34C3f4gXRRuQyG8qqpRUGJBgyiXNVpZ9WaCcVXkSye",
  "key43": "56RhJtr83pnqCYinfKhoe4Xvbb4sSi2osiVbrqw9Rzs77HRvcFMLcxj6cmRi1dtuphcMCWi2G7RetasLEiqb2g7T",
  "key44": "2H2xModwjtgkJQHUghpcwLrySvrp2wijZmwjLooUhafN1vfhsBH642qKBm8nCZRb5sJT5fwjT6ajBqcie65qPRSY"
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
