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
    "3Dc85nUAyC8EXXBuEk7iaEz1WYavJ7HvQMnHAHtGXdVDSLuM4wcmia7WvSQQqF6cpQ6zcfz1xFnmY66RTc2YUe92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bu9EyrAKmED1UzNqAuuwVggpPWFrZSSSt44xnjosNYpg11k7T2eWrgiQqnDyvSKWxeAgF3fWiBj98uBQc6kA3zQ",
  "key1": "2TeTTx62RpXSDXHZ9th9aHE9hsNAjiS87BuwzZcpVpmASwgvC96gpBWd8UNyx9bxuBc7dQfdn58grd1PznLy3Tf5",
  "key2": "5P5HJuMsSBDRJ46XnuC7NkyBFj4e3NLf6BaQ1A66eAv92rvTGjcU9hvUfqHK2gUDMmetn3cxAAxvHXXrtpvnY9rp",
  "key3": "HY1F9WnT8YwLuAzLrr1ZvwpLhvgtRP8Jw5FZZPoW4D4mySjPvXRb9DSPGgXiUkTDn19S8EYpZ7kpaj4kmq1E3mq",
  "key4": "31Qfvia5v2na1j83TJCCAqCpejJ9XaipNoFoKpRiJA7KYoxp8vZt3A4TE7qze1RGCX15TpJ6Aq3q7Wb9djuMKV8z",
  "key5": "5fb6UtpTmyEptcm7cZGE8TWkuouq9Fd8qDdd6MR1q4XdKhF1eEf8ooTna5jodbSJeBS8eVvBKkT2GMakHsy1CUDE",
  "key6": "5wdwYsMsCo2TPKd4rM4fxNcUjYkMKSKD1gRG3gcermFw96AU6bcVyUkH8N8bzQjAG39ecKRnVDzFaiLzjXHT7d7P",
  "key7": "3pyJCouiWPM5G26JUGB6SzQP1wnfFtGLjNmLbsfdQ8HkYwWpnDdTciBDW3d1xNzBPVE2JQ8zxWKUfhMDKp8s3SNz",
  "key8": "5gXHjK93TL46w6ykfCfCrpiNyFTyqqyx7KrWQTfq2UUhh5TPFpa9EsKeiXcYAj1bFr8sXosdMY8imK9tonVh4LAW",
  "key9": "2GZqTKe9TDwaH9hL5DmxNqb2JfGdbrG1poqcZJ5kuNVLZgXfoD6VuMJ5rbeBFe7vxVNcQpe3jvREY4jx6HitMMGA",
  "key10": "2vjPA45igpqqFZwiG555MdWRxZbiejwQLoNRBLrQpT4VyJ9x2E65qMmBMuykzSdnu4L2kpAKk3M4vDhVbVZPJYtq",
  "key11": "59Wcsi18ZcES1hjsgHhZvundyYFZR4TgxhwHr24KSao3KSiWbquKR5Hp7KwYnqtmoPE58ofNuEAi4d6rkh1rp2sZ",
  "key12": "5WL7ERHpBpGHP4EucK2EptsSLi5pYzoYPe6f1XwF751mPWmaMKbwDRLw56H9Jm5SaKv1CVuS7pFgDNFVNjKvS1q7",
  "key13": "25gSwqAdhwgmabvT6oxQbcDtu1KjHdRb68JzdAf2Ay1q68NwpscNeeEbSHcm9CJuky5WLpMrphnd1JVXvcLft7tK",
  "key14": "4qfrqXXXuLEELhVhhGjUYmUnKNTjP5EviJ5AXhvvHuN3kdDX1V9ZrFAX2BiUi1nNgVPcggjKZVvuFbueedQEqBzd",
  "key15": "4nNuqfF6m5xMkLAi9p9oKjYb4TvxmzVUNLaLNsj34JShHNieEWmBgS47yoctVX92i71AgHstfNEKp7G7uBbKqKTw",
  "key16": "bVfVGRwmKRE38vorwL2m1pAbJk33cQiTWdiytyyzQ2S1xFcVppoL9Ma71ixFKFH3xuQgCYC8Z2Az7TeodamTxoZ",
  "key17": "4uDC25AB8gnwTNSFbzfxVZ7io1TerS4JJHGNPCgZFUMdJRV9k2tTy6zVLExBXxp5KY2Bj7xXjroh41ymUUAyPng6",
  "key18": "2Pv6f5iyk4dnxmzVZDqXSAAv4VS5MB54yj4fSHUZs3L4fe2GK6T8i6aTXsA4zqSRZ7cfRsBmu6Qx8yE8fop4LZnZ",
  "key19": "5R1RBWJJSPwkxupnSMXgBVCWF7p2tb7uCEY6zWv7vjztZZ8rPhivZK6E2qTiQUR5SXqTx4jwEi8Y6yFHT9JDXwxX",
  "key20": "52GoqfNynAeTGEXzb1nkqAG1Z1BhAoHWi2ULgnTCVUXjEDwdAraqgTdCY5Nf5Z5uca6BfboCqdrv8p9tAvNGjiUe",
  "key21": "4XF3GhQyohzmJTV2oR3Kp3DdMwG4WYfctreFbzJKzVFEjgeyhZLqdSF7ML2KFVk86F7qzwR7VpoCVr8x7vk5RVDE",
  "key22": "5yhBCrqufCUAXqy9nUDMUAtgKSvHpZWZiwg9mrGSWFEpmQyvPC4iSmao58YL8AcQS8HNroZs6djsqqUANPdKRCBi",
  "key23": "SKiWYy8VseGo7EinDgg8Km6PjwSRrVmKBjQ5k8Fc7fdxZCiEH6SbgsUpLY48TWtPF2tukmYF8NU9BCREsVmvaaC",
  "key24": "51jLL8Scd9igidiv63Pum2cC7ibNgWM7asYnjUpTFhGBqGELaXM4JSsqT6fhLK4wc2TkFVUA1NXZe15JzvAfxKd1",
  "key25": "4B5iFMosUYQvbXG8Ey8JpdMkRTXLhZ7LHQQrQFfkQtAWbaDYLsDa9qYu58LEhPbZN9XqUz6mCDrhNLtimjWgwUgS",
  "key26": "S6menf5beakPH4xUoYqjKk7GkHpVBFigWkjgeANdJi4QmB7KhjCaur7kHY4PZgh1qmE9EBLYC6cRZBPM2ZV2nN1",
  "key27": "3VKBMgDyPUfV88GgpgwwbNj3oYPkizXjJx3j8S5dtU8qt5L8mHYguWmAziwHzPUdiABHQdeF3B2ryYXBRkufKWf5",
  "key28": "NCEe1ieDdYh9TLjjchJob2vimLuuXzzdW1Udqg9boDxdw54T4S1wYr9qqWhweYgk859yShyKU48AAQXyGSWMW6z",
  "key29": "xiLVzYzQjGBm54ivTZuVNoaoHNish4RCSPCk18nVoETm78zSFebgjYMHvGYeSMnFdpFVGUg2D3VSBzoLd377Mu1",
  "key30": "2bSrmu5bKQ6qD3R2XhFbVLABQFMowW86zSG4PA31b4cquKEwyNSAdHHj95fzWM2AjfcVCGyeQgikfVaU2DFkzB93",
  "key31": "6644Rp2zqS6NBAF5BVakY2UpLCahiq7HmN5kkaa6keTh2CbmPNdoU1KsyZZ9eECWEnKvq2uMGcagCLyUjhevP74C",
  "key32": "4i2Dd7ag21Us84hp88KWdz9wsUXz5pjjSQr1QTNLF4Ruj6xBdtAhMYGP9SPLot9zXBCnsf9VFvbgQ8VzmoTWjXun",
  "key33": "ZcBs8oCWD93A3RRgA4r1UVtotchMK8NMiTzQoSq4HpbsRNFUPTFWxSYgtHCspCRBxYCQ2DmdM2bMofLJM4M73i3",
  "key34": "3Zc18anXkQ1xmK7rPWtyZArZyefpwu3zDF8R1YmmX165NL8zNgacRwkkJRQ3Z5beuraicFyrNE4KM9jwTz47hjV2",
  "key35": "5eGhZwf8jBukkvVAN9uYaXi9Ads6UQi4Fsz6RYaBdzH7ey2s28C36hZEucVBnqWAr2wExAvhWMou8VBfXcSDd5xr",
  "key36": "3jn8fjC8iW4f3C8NbQBUN4RfH1pVAKNbSoK6mCAKx6parWTapMk3dPqdrsRVjc3novzyrJnJH15og8wREn4MAEHi",
  "key37": "4RedHHjXsSabTB95r57keiSYpEu1swFrTEk75SUkEEmfGV2JgyMiARBtZg7JjsBPnXA9vRKhnnL9br4hd6izT4fr",
  "key38": "CxqcYEwZiuFvg7Hm1rYL21Q3Xdj9Usxr8uhTw2nbAv8NvZoGYsNFaHTMUKrfY1GMp6huE1YEtTKMXy2RdthsnBQ",
  "key39": "5DJcpWq3A68B69QVjxfz7h2eru6LsvYx2XRq1ce1DUCB7fnQkvQrEA2ERZMu8Rdj9LTnML37Fmuuj1iPnE3C8933",
  "key40": "3bpXTfdG2zPDZ63UAwEJhfqYGNESaP97QbuLWr9iPXuEB5nXWkiGCpJExcYjdLNVeBKdGjwLfnqEPinrskvCdfz3",
  "key41": "2yzda2CMtNbatCtsVjLwAFQMvcx1xAhgyVQJGzMq27VkCdG2DScg1fDU6PMQEM4cctp2mEwaFM8DS8tnJ9S2ZCQG",
  "key42": "5msRu37gLYfuwGhyWTo6kBEK41hNpp5dmXEcwq5v7qdAGfGGAZ4B2iFnDWA2kNow7JggzKVja66DWXJXM53MpMJ5",
  "key43": "5rSeQQzuAapjPnWvrwtEFTUGSdvx3rEAFNYajkzVJ6NTTKPFm1qXKpuoKGwRiyf558ZY7VeK937GLYUUcXWHegT4",
  "key44": "KedF7ugNtxUqzxKmVqERjrywxfwh9Bvomut3Hm3uCJbSFUvSmvjLpjwnNHEZkhKJJUbMSV14GMWfwsak7kcG7et",
  "key45": "5pgwUwkh5eHHQ2KMf7pbm8k8CENgfoXFvvyd6DDxtkDUMJBKJA9rzGFtjdK66K1MuF9w68FLmXwz2y2Pb4XeF39p",
  "key46": "3R3JPEp3joCrrQHNdVYbJc6JYN7Vii3Jyw16ufRAueZzLusrhenKd22bFkHQXiMY5cGTKHaee1Q8VB1L7BQNoVN1",
  "key47": "3SQQjbqxeEsBZnijsZbsRUNsZCzcp2a67dR6NywfFhkb3HtJAKRBJUydeQBVRW1x11Km6zcMdz14KSgF2zRjzeSZ",
  "key48": "2pP9tt5E3jRhiG2KyDM5YBuKkUWNwJVF7SDVFsLnAY5VXfpqFM5ShAQ1s1boERtj59dChqaT9NntMiBQUpB5dt8H"
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
