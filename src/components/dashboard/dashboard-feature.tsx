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
    "3iywj56uXf3TS1JyfZPNyR223n2hyFbHvnZp6H3U8K5SLUBX68kPQQCG3nizK7NP6JDwEDYNEnD1rCBg7ZMLACFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DupJXBxtn4mDX3MGEE3TGx2jNZQR2k2jvgpzANnBV8ne85mqVBCJuXXm4DGvLz3kv6NqFvx5qCzZXioEaXAyQA",
  "key1": "2BpV9uyaARzZ947JG7Sh2ag31NuAnTCyq2X84KKHRuzKfQx2AHP5cUxFWFwJuAY8YcdPse56cwdUH9CFWHSL6uSV",
  "key2": "3z9XeS9nXdKxpS4DgnkF3WSNT8jq8vbWTTnyGnUhpNmwVfGEh9rzUqRdsrvSEsH88VGyPQUTTwSmz5EV8zLf8j62",
  "key3": "4QbjLyL8aJwQVQz9iuDw3XktHCvtHHZfoai2YEf6fBAo5mUx6JU18nPrcncsgXewnVayk7gSeZh4wizPR2kMx3Zd",
  "key4": "3kCqz4KkRWXZZ8y8DxfHCNftJ3MrQktC8XStCKsQwKDnfYTUgFWo1XLNxYBpX8Dp4fJUoKU1zAe49xdssbFuTeEB",
  "key5": "3GnrirDa3pAkudXGf79qAPF5W3o1wQmnnoW1RBthw6ckLeshLSgz9J5eRsCm6YZYZHqRgFHYQuXn3RL8TdjyQ7d5",
  "key6": "3rNoaGNteXdgeR6ZZEd4PncaYzaZq4y9rzp4a6YBstjCPSo6fbLUkwgiwEMDitvtMcsgiGqq9XVfHrSD22No24Qn",
  "key7": "2pZPRS7zj5WnAnNH2weSjmWo68hqgmXxFvJrqaWvvJXvJi8jRgZh2gwbkcNwkYxkHrDxJVd7NhCymQbHmVpZavAM",
  "key8": "24TKNYWcSejVfk76xYKyxxmDkSAyeU3tJzTyBzjjY8iHBRF25Z1vkiakhiicJijot84xf8WaPAyBnqbQysMD3ysM",
  "key9": "519G63Sg3Y2p3JXvqU1ytjcncJ3WqSZFH59ZLv3EQf4WCXHSveCJ86rreustft9e66aJ1SJugM1Rqw3oJHWY9EbG",
  "key10": "46wFmRzd2Jt8WzzPQryXpXH9A2hHZWv5WTH8WvH6qdSuZMw75F3rak33krDFsUwuZTDyUei57QN9HMaBswdTQEyp",
  "key11": "AhFYggWaiDYfj9VZJsBpwrQ1FSmaq8oqKQYzMHKM2SV9GGdaaSzxHPnwwmxedHkyipK6cJNMXivSyFx7N7XESPB",
  "key12": "34Qzmn1BK5AxtDfc5WEoMGc96iYHwUPuVG4pLxVa4S8BmU4dDdAbhXRwJ42AmiXxxVqyGDcopDZ6dR8zRPHLpaE7",
  "key13": "4NXoQRgpwGr3haqGv25i6ubPSiweGg729Ek1BgfsjEcjcjor6d98tFHfZuUbmDdg1oi1skN8zmneWJbj6Hfi3Ycx",
  "key14": "gTVdRhYLgiUCzX45TGC9ERxTEb6sYaNDaivDGeGyv8jdTn6zXGuzCqvCMm8kn7cAm99J8ktnJFH6xA6SnU6Jv9H",
  "key15": "RmVqXZV47pDy999pyrX3aD2e9STfxWpKpUZemu3eDmi4YQYUMs5i24d95n1f7Df9piRL8KvVwVsnsqMXUT2N8Gu",
  "key16": "4KBes6ECkpxbZWugCA54SzLUdM5EHgJsuftU4BMSYhweAxoRf6rKHZbUcPSQa496B3ACEWLFJngwisqef7abpDfa",
  "key17": "tfyMzdqnRnUYfXEBBUx7W9eGGbErQNpRzjus3yAxjET2BpXvUKi2LfAdh5LdCsdPcKzEVEyviStBdV2csXhPi1q",
  "key18": "5gniC6LSgdhj1tV596QHARPsQsFR1iGDBqQ4mPCGodFTexw5Z8jtyPuy2KTixQHxVNwtTihRLVJDavwLPiMLX5Ux",
  "key19": "8bqN5RoaghzMVFaVCkoSbvKb1nnVr1QRADigx7Wo3Y5Po7SUY8hQ7mKA8hPEybteLDZDWkNrYc8WX3dKmmam1yk",
  "key20": "6YXDBNQMpLe9CaSwoqydMtprgsG4wgJKPRYKJo26Y4DwfvNeEmfPNjNjQrCZhCpMU6z8VoWn9ca1HWvHyCRrMDW",
  "key21": "3JeG92Az74b59o5jotRKaDnmrbPPrQzDoD4WHDpmBWGkSSaQyrhrto1etbDmHLgHjjs3GrVfonEHMDLYQpna8c31",
  "key22": "31VxeMV3Y1AejyuP2jaWpvBt7k2Hz881FjLu7rEKUy3kTL7gCzsqYhvjcGm5uxudQqwXBFYtnLJyKYyCVpDDYA3f",
  "key23": "4LRJHyjbEURqaiJmgGbzFv3bvCpMYAx4dAgBnhawHiHkWDSzMAqe6KsD1LSrGJcQgyQDaK4nhoV2QDeMBL4xoN63",
  "key24": "4s2Dmc2bx864uwbcfanhUVhzkYwsKZTQg74JminkV6CR7ST3cZ1PsgXG2dsZjegUsNaQtmD2PvDVRVBJBuSS4d1m",
  "key25": "5toa2FRJ8PfgNvLMz6ET7v3kystQuoW4d3fVeXBku39Fa1qFGC7XTm85Bj1gqMa4uLbh1MhQhVZbS74HS7h5Qsd5",
  "key26": "2QjJo9rmmfgKRGo3mRXKFTLCeYopoWuct5XuWKgtos6Rr81C9kujT6z8QXBoxkwy89D2uM7bDqNnrq46wx7fWfdN",
  "key27": "h8182Mgu7u9THHxHFukWRSkCKsPPZp8115jsD8jS53kVxh5do7xEaeXdtk1jS3Gr3u5D3k7Pnd7tm4RQ6SJErmV",
  "key28": "3KKGABN7ugLR6LjqFr3AThkT3sRZvZiwAHbAueQVtrBJCGCm25mhCpwMNjAKbafLW213Qu3c1zjqEYDGi4cYVEHY",
  "key29": "5Qc928sdxCdLdPXCyGJmjiLCxd6FWNpUN3JEPbMyQ6FRUx3FZCNBHPHH8kE48qAZkSLruuKQ3DMQ9KwURB9DL3SN",
  "key30": "3RMXmWAgUkFS9JDeziLskpWXj3gbScGcnNBnkKCiM6bMkYXAPhQe2bJUUBsJtaCGL3qZ97FzzchSyNXwe3x4WBPh",
  "key31": "2hQBcznEY4n5xgTVWfkNBDmiq1XypHnouQQrgh6sEHvrwCWsNgngfovBzBgoGm4Uu1pRbg9iVKNkMBQJApFxvwuE",
  "key32": "4U467YtzFZK6XV8oe15mg9do1cvbL9R3Rd7KK5rFNDLfTr99HEWC8WhFPZv5ozE17MbpzirTdPsZqPfvvzamxpbr",
  "key33": "D9sfvcUqw47QFjuGDY6HkHixWDezEVDd8iYgp3WRRWFMkiKbwo55sXdaKPknJjDpJSBpg6PzfXqL4XhiVdJ36gs",
  "key34": "5B2NDDApgPViuikVUxGBBvVtvhS3D73BFycxy98XzgbjAewXshmCGeEo2dTLBCGabwpu5nwaXgQEtmZD7u3Wsbf7",
  "key35": "N5m9yXbs6QEh3UnCTRVfxFwTh9RTFwWWfaU3MnQ3xx5jTfA2DJrUPSG7E5iCoqJ5e1KNftaZEcFn5Lhhp7tZkuT",
  "key36": "3gQgHMoET5ANTgouFymdUzTnZABT1VRRSRkJqC9CUuy9poHCdfwDoZHDs92Vd2oC5uTQozD6671VwdoZBh8tyrME",
  "key37": "3YAnN3AufvARhuiFuPMPfivLsEUfgEgh3gvhRvx91cui298MPqMcVjSR4idavJEKT9N4a4fkj2HCdDGTQuSHPRhk",
  "key38": "2QHfKPDxYHchZok7Fgo4SxHwYYydRCmepepyXy8M7MCNtYWYpme3ZuHZhtfhj7fH13QtFm7fecpcK3ZmAyRtbbjM",
  "key39": "3jMHfZtxDjYguNnVjDn7M4PuhieRExeSzr9Kf3RvCgY6ngK7xUKGVejcMgmJTaY3rpXfdKXvpWjrP9zFaQ2AHGav",
  "key40": "2McSu1zYATRU8X32WUvNuVDv3ob9V4ks9y32mCZwaPo7T1j8LH7PnrSFFQN8MBSjANR9kvsz1ZpkJAuojVfE2iGw",
  "key41": "4UvsaFuMnKK7EtgAxX5aCZTRH56RSgU8KmHp3fgGUKm2XE2D2DaKCFWAUtoUCi98aEFGDruH6iWNomAMnf8yytic",
  "key42": "41MrHfykBxL5D3AW2GVxDW5wwLXoZAvB6tsprcGMfRX4Rep1KLdfL9D5B7tmSPtJ2ViTJo5SPwd7gety3TsbHDkP",
  "key43": "3ZFhEvdf2UX9qXrMEAEUVCED9A28Xw9NZqgtZfCUmVqSiozByEyHVuDvfmEEAoRTXWLDWmahJmXHiJzBJgnMhXjC"
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
