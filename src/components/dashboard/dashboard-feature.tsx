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
    "5tfAbovJMfZuxfaAsJEU1gLBymTQ94U5U43rVugS7Y5L2kYzLsEz36ygTCaRCYzmscwGiBy9aeSQbw7ybKCfLiP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwKsKrm5Kd7Z94gM8SrLjWDrmgXuDgffb2hHDwdGKdULJdoR3cLVvwzd229t8imYgAjF5CJ9ZpjaWFvWV2WceeU",
  "key1": "2pgmtJ9mbtBkskiHFJpS3vHc1WyMZTbVZ9RdtHojZCMDi5M2wHRD5w8KFVRgiUkN8ihutKJDVhEGZSLwF4Tz9xKN",
  "key2": "4dJykPg62F1DaAnp4E4UJdP17C8kmd4AszhpQL1x2pcdAX7tuoSnrdK2Nt7YwGspmoyiEScnxMPQrrzg8j7ZWv5u",
  "key3": "2q5LF9GXWbwpxwbnuQJaR6RWSv2gUEeXsuQxtDx3sSCqtpGYU7Z4Hj36bruJAT46LFrf4Dz93BRjrszKE9JDKSA9",
  "key4": "2PBiyJGNQdVUjaX9vNVN2SPWnq59KqMmdxJPBwYEP1VyHePLSQDovKEsWQVCnRehJSfT7oHECpN9HkigiBzLfiT",
  "key5": "3qZxmZ8dpUSb2scwXmGc3xDDKM7hqYW2uvU6KdfwUQgYJRT83RtkzQKeLgQ4rN5FPW5HodjcDeZ7M2qFhf3kh49k",
  "key6": "3xYFs7D6iT6rLYUNFQHzoxMxeNAevzXnSGNT6sSDrEZnmrjRnZkZKgpNeQEfgkcJDJ9DAs1mXBiQLEJ1gaeC2QHF",
  "key7": "FWSVGjs5uUqthV3gE4TBn6xUghRjEMZG3a9HKzJkQdU13vWdphG2iU4VuJyLMSJftP1KUNZLYpZANtufHR74VMQ",
  "key8": "2DvUBWMvFQczcXDnenBcBEDSVZsaPYLpzBnd7XQDW1FQBuh62x78pzncuJFBsRZ1AWKYF76aKDTSJGjBDAUoBgTn",
  "key9": "46FQ2gS9KXtvgs5bSQpj27Q1Hb2KFet9espJQPtCGbBFgYQSsU2ZYFW7p2n4AFzk8tkCVzQGBtdHCHyAH6XCuBBu",
  "key10": "3kcdjTqRH21ty7EWAvD27aoxMqdGKUN6UvwoNHesy2tpbYqpdP4iNtDpXWGoawbbW4uJtrAiJYchtsv7vk3c8YmU",
  "key11": "2ax7YWngGSpB8CuTjC6g8JrZB5iiurXX7U98on5QPCCLdF2rDJY1spdp1tFE1jWMLGCWEG14PsCUiqoYGE964njU",
  "key12": "4Bu6atm5wjhUuJsVAvNzBhYKaTS1Qmgjeb1oEya9SWhMF6DFcrYoocX7yLCSxS7B3YAU3DEtL1UGbTRoW5DTf6rm",
  "key13": "J3khfvKra9JPnu899NdhrMBgfQhYYGkuE4GA7FAaXTRt8S97HaaBaSknY7eWnf1m37ddkVH6sUSRoi9NKyxzJiu",
  "key14": "tDX3gQTWLPWeFYof4eDwFijbqJFdgC1gJrB1ofx6e1ofmb4iSN2U4neNxkV7JtgqYf3GonQKmob18CuFvuUVvDK",
  "key15": "5rTqJveuns24BfsuNtiAma3NouZsrAmv3CqhxHVFjnPkwKfFMrmZcurvVmax8HABt4BCVjgjPrxWvdjZZxZ8Vndw",
  "key16": "5HGapXyPVnRLVMfsu3rifPSJaoPes1mZZnyDEapZ4hGSvAvHniadzfRs6ZCaywZnqSHFFXDUPjysFzN9uiinvV1G",
  "key17": "5ZbX1Yokg3CXrVMVLiQLvpWAAWHRgivoeUGFdW7FH5XD3YATMRxig7nMZX1t1frAqZHVUpRGJ8RoPfrafatpzVCV",
  "key18": "5ibctb7sJsHRNboY4v8LKrjqL7YB6Are6tpxVPDvTrvN3U4zu2o9bpRLdu6yKZcqkmC76MmHMvFsfZeWEg9tgLTj",
  "key19": "5NQxkwZVmHYHN2NDuwXowS95gmCP7ib3g1zjRWJNFZF82wgc2VmcqGe3WWZomE2ZPShUgqqRxxKjv6Pn3WPGXANm",
  "key20": "3NQc4SF4e6rcmBgrbqagvxVbwSWsN3GEzAN1xKyNcFShq9QRgRxV7ZEGnrRmoHRSSTDuU1DmGBkguZ6KQYGYuFJK",
  "key21": "4ATTjqeVyChNRM2K4MSXKog7XhgMGJzWWQi6XhY2BPAbnoSnDtD4PZM5ucjrDS2SxeHCiA6prnxrwVpNYzYFQfd",
  "key22": "38XudAH9oqoTF42Pj55GLt9ihjwjt17immQZVy8MJWVgsXD6yAZa2xuezPhHfPAcw2kbfzj8eLhkGS68MVybLWu",
  "key23": "3QqBC46ymdVoqgMXJxKGzhKGVmwyp4Mm2fDSaWmKNMkW2JpikCAaN2jvGkaAAcDbHqHQcSu29bMNZae6gD77WUCe",
  "key24": "69k95zm3gLfFAqgjkiSdc3VTs1pukyeNPbRv7reVe2ts6TNoMhKsqPnyL6uuk6LwQAbJXByeNpMuGg5qgQiPeGZ",
  "key25": "ML9HMPoK8V3eyGUCGCsmq4dGUKyMb2VNTgAkcWvgYjmobqB1TYiqZ4rsUmnZQNCnej6HQAnQRroyTrkX19wK7tr",
  "key26": "4Wz6ieAfmG9V9RkjPtYvxqP6P9ckw17fLDPEVbQsSemz81woRHZ95QrfGNgnksSybdXxbxQitcMFWyqmiJj2kc5N",
  "key27": "35nCjrE1mLebVeAMCnaZ65NEv4KPopNufi1qVgyUiZEHRMKQghDEZJuq84kJSEyckkhQtLXxPTPNq3eGqCZZWk6h",
  "key28": "3z6AE6Um9ih9rSoAYYxNdskohv4JLrVA6tiKqdkt8eAwTAgVMh1fYZAN2yJp5fQcesogDxWxN48XE4ShjH46hpLe",
  "key29": "3kmHx5M5j3hBt4o62mpk2TP6sUgiKTm7MtRsprG657tn8JrBwLwy1ECRGxTxyQj8ZhvKyCPkU8iCwueVWcK7eVvV",
  "key30": "bTiL3uCdCAAiW5qad7HBMtqP5isXcoDZS4MaPwxYiwXSG3oKuqpPhMTw6fNvgGCzSyFEKrdvc1Vot8d3sYJDZyG",
  "key31": "2f2WAyekZj9zj3w5wg3T18B9jzsZBPki1vjMA3yRCpQh4aiMLg66D9YsDPNbkB4Z5Czn3VkwpzSFTzw9qGTDCpKj",
  "key32": "4J6XGaF1cjW592a6XXSXji3mdckHEbxF2q9FEsHTRcP7E3En2RKsQ8ii5mfNxEuLzrBW9kJXZkVfUnq3w3vvWrYW",
  "key33": "4oq7YLiPCDgtBhjouDPZDSeZPX8QAGeLMVAVYDhmfqe3DbAJzMiRekmB38jwtJX9VT49LaM1Q9eoz1Gjcam1qVt8",
  "key34": "McQRr77LFXVhJn7BEvvYPM3fCB4cguajZuo4gUGQ6KnUkDDGEDNGoi23gwnCL8zRwm7nBrn6r5Euzo7YbYMx9Tj",
  "key35": "26xUX92rCGPjvrdmk5H6qCjnk3XTVB1kG2RywJndRPFrc4jKXtc4Fq51pMxQrremHryTFS39hTB5GShsUbUSF57Q",
  "key36": "5vji26daCD9aZmbfLFzo4F3YUXak1Fq266Wd9rFSoBfhYqWFdqRrpHo7BS3P445KL3DVFHfhrdCxP8gy8L51BrfB",
  "key37": "TYsVjyuqExjJGEe9YEt5YJeJNVwAvzcJpvv5NmYG3oEKKqhkaG32hX5krtLew9AXUNZU1mKp6zykEzdcabsJEU4",
  "key38": "5kuXuhiwvhJ6JyYCLjfA9PAzSCSh1MDURif52cWFEWigcBZTUPbbZrpr65h7espaW7cq4ZZW3BM19BVNp1vhdqHh",
  "key39": "4U1qdjZwTjVzTtY2P7G82GTPxAoDqdWquT26P2Te3d42WcgxRQbFKABoB8XHcxsNuhQCZ7DMfiBnYTSmaMFWSNTf",
  "key40": "42PiiMpZYNw9FbefGoFGBP7Mc92L3DdrjbBprGrtJW7ACN3cTJjWVKA3x3S55JQeRm1SvZ2CpuZjNL3fiDubiDMp",
  "key41": "4gGnqXcCm7n19oKMLgfZvsNhwXkEEa6EUumKpKqJiQMFqh5Wv2mAmtdBSrtCmMaQ6bxA2MVcsRdZNJssB7L6B9f",
  "key42": "4eGx6SM7Zf3D3srwnEAz4AP2qNyo6514tjb5vFas6r1mvdwsTEegsL3PVKx99sw2MRar5wjTUBG7kdXyrNzGfZX7",
  "key43": "5GSdRZHi2QeCa5axRcdbcMAbc68K8wLRXm1QYesHqkWboJHmyVdio1xKBXkDDhbbp7arQ4UtLFnZVJRFgbt12Ca2"
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
