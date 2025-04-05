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
    "2KNkWG21DPtd8wzq22vcVuXmCKvJN3E3wpQTCoDs2z9DE2g72a3rzTRPx4EXzoCJEfn2QqzZoVQoZr7bbdx2FaPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9MGEajMXXN7vxQk63o8x2HEksn2JvpV3tRCfadszWY5sGv3QdCvSkL58vWL4R7NQCDf1QqM26s6YvePrDncRJ4",
  "key1": "4dZSAtC7neA4tTRys1w2XHfFqerfP3HSVMxsbzhdA6m8j6iukz38ffsyjzjijHAq6wmDf7E8C938QLbx6LaurrY8",
  "key2": "2Ux1w5zYWMTAdRAVdPMogvsbxz1MQbaHF47HCUBs64QHqjJCJuHwLW4XuVNjFdUUw8HZ4PGNW4QNfHDvwPwm34kC",
  "key3": "5E5K4F6JhEqEDaEcoeJnPMVNFXQPK2tH2ucie66jENeoC8CPYwoDVcGUXjq3hSC9chvcrMz7rbvE4XgHvCTzD8Rh",
  "key4": "4UnqQEBWme1EUGiJ8JMYFJgJE76eCyt3Bopca5efb2QbQe6vAcN3GpQDXm2GEHP1G5BNgj8qvrbBnTHJb9LTZFQc",
  "key5": "3Ma1rw5J8Pb1DMu9dJGpn8vAbkbFUM2YXRyzxKFSWJrGd8tv5wy3ocoXgtMG46cVSJSfP4ymypdZKf3iKAytokwW",
  "key6": "2Fnxs3UW5gZPrdLrDs5KAuz2npr8ZfUZ8vsZcoJEPHoNbSutBMBaThJdfF9GEk5knybaUn5ZGdv6NDrL4AJTxx5x",
  "key7": "4rDKB1GC3khTR7Mk12z82YGNqBycJJvzgfyxA5LG4xQPVe7XmMjgC4kDwR6oN1tWbXbcoTKc9zZ77Yv4Q2WTdBgS",
  "key8": "2CkUnfxugoFJThS11XzieFvUic65pLEBrpU47wbTq9KxR56R7vQe1HRX4cMHLTJXdzagdz5gh43Pbz5QFG28pjnU",
  "key9": "2MHqwoKpnQbKKxZjRodTGjFR1oo3oxE9s3su1rvvoDiGX6dRoLPEtyuMGTiAH7RWBzkRJKZjRQ9Ea9j4xC4NFswW",
  "key10": "2YETr34wzM4Mv6pE6xbwNMxL4mQPPX7tus24pjQyJK2gRYvzVHDxZxoKDV2w8FF6MVHpe4X8ow6AvJEDy8d4AjdA",
  "key11": "5BkG1bzbXRGF1oFfeATWt93Hzo5KAjPvVtgHcsmVaxHvVB54TMU9URSNZeVnFzmUBzmfVTufmgmQLzCpoqndJUH6",
  "key12": "5oHzSCFJs9zNqHkGoLuqB7RkBV1CovQmFk47RqymASVn9NqzdsLTCL83P812DWovyhHJD7HmeJZJkxCJ6wvncc4h",
  "key13": "275Es3WdsPsXam281RMwzLz11Np6zgGcrMYLLE3QG7sPAdvAinkisjfeqLERsw9gooZRM2nnEuaLMXMiyvVtncLZ",
  "key14": "MsPRfqk6mpPnKwzsiMJ8dk1BWyDqXBwTAb1G9hiZrTzkWrckGGdxwVPTNTKVUQRQ7NzH2KGuXVDPEbNFwLKoLq7",
  "key15": "3gkHHM51vKpaSBJaVAExtWC8ngqDjrg9YM55Z7BbqvbfopJ76rRQQ6vAqZsZGmWMBgdCcjyYys2DF61h2j3HudMk",
  "key16": "22XRJa3mz7CwfEvy41x5ZNQg9r2hVJHnPcBbpJreGLHmrtQELeTZ4WQMSge426VsjX75JCkpFVDPExwFLrr6EZzF",
  "key17": "yxRjCzL3J89h1f6ioxry4vDdUaJaXpfcHvBTkvZH9eb6otYsJypvc1Px7Gqy4MAUsTRivkVpDtgd7ygGKivSRTa",
  "key18": "2ZvqnbE4aUjzUJ6jYvq2tUYGL6VktSGZreHqchrXQMVKX1BzDVCyrChuVFiZR9G7kUHXecdHMAqRZP8iMDj3ZegT",
  "key19": "4CsRtyb552vnxyi9ybkzQAawUAMNGdePsbhufaTWxJd7YnsvZHTi19awr7vuo1rvec5EM2hcAYKSbyh5PmdjMNjo",
  "key20": "2rUwH32gjn6CRnTPUJW9oZz6BWkUDoRjFNaG6vv1uGxcJM43CkAxb1dX2jSoJFTEWdCjjoAz47Pg47FJtLNAzwHZ",
  "key21": "34XqP6WjP7V64u1A2vRqDVH8rSUUD74rQNUX8cuDM3oEEC9mDQAfUpbz4V9LAtVEoJDjZzWFn4FtSQ5xYFUVfefM",
  "key22": "5sHEQaTbEkBTJHqJBL79Yp6SDA5kkbavRpoz6GmABQrk5Rx5vk3pJzPrHyD3Hy6ZjHdkfP6LrDSzEvXY85Lem4fG",
  "key23": "5fiPSjGzbw39VLZQRrKSYxjGKnWsGknNbb3vUcPgX1Xf3dqNzi5VHUyg6ptk1jG7RCnqutE2WibHHRhrxBYGAyn",
  "key24": "27DMi3z6TTXZ3SQiKzGEuRmBtqTTkawhVqEfLDXqTMKNPwgy1PdYkKy8DsCxNnqMtn48muDDhzwykCvZnCMdxcKQ",
  "key25": "iX6WuincXzqUqJctgFg9VjGugw5gKyL32WxPQNqBRqeBaD3G7d7Ubdmuhj9MvKFJsdXFZk3Px8hCnzFDEY7ia2P",
  "key26": "5JoXL8qFRzjUcvdXy7t4JQM4hiLuVJWVyHR1F8jju5R3aoVWwdtKYfhHo8rP8FNgL3Lwfg64f53sBzyzUbTWZR7r",
  "key27": "4H4VDxQE4UAwwsqCgPDqqK6QeEzgDNmVfnooG8TN8iCHCGJzfvsixCcUJ8oy2hQ2PSw5K2aFrmtPc2TNnDJgSrXX",
  "key28": "5U4Go56pT5DSLG8Zh3fN541MSA21jNLeMvNnHkL2K6X9kVvahasDEhRQbuDnjhjry6N6K2MAHVmzZSxyHkacGwN",
  "key29": "45gc8VKZsQLwZaczuPBNGLMUk2bpqAw7Q3MMcBxY7NUrpRtor1wj625FVGK6neDN2KoJSfZBqhxspr2pCFqDJQoz",
  "key30": "5oe35TP1EwRin3bbvVkf9v5oZxxttAPkKh2rHjJL4TSrEVELb4RdcTsAX4u3t9yhH6VNwpt2oQe5U6fnxB15cpnw",
  "key31": "concaA69DGSfMhmZfBzJRwkCoWEY53vmKXqun567rLF1cxDWifoA521QrHencLqifo8PrbkzQjjYqsAboh5HhTH",
  "key32": "4iyqk6HeqFVxmmZqXTNVJmKzkKwKgHbVXQBUWAkJ6cEA5mAzpujmdnC1AAJFeXknGBXmkunMsLFqbYZ6ksa2j2C1",
  "key33": "5tPkjbppLZV8ZNjZxsZyKYGjT6icUrpbzJdbdb7hZQNgijZkbF5QNeoj2Xj6PWwufFArnSUqEhUvGbtG9fKTSaAp",
  "key34": "3HFUEryGUvx7eja9nfsedUEas8SBTANpvcgbwZM5WpiLTSvpPP5mXjXvubV5WUvb97pXHWA4266p8cNo9pKe1nKR",
  "key35": "4rBQJeYTjEdfiUUvcpyoapxvH97zNjJeRtotaRKxkbAxDnxE1jDB1yytFjoT1x6zXwvjpMFk96bj1jzGBWrKVkA5",
  "key36": "VRGotLQmXvHbJLrJMQDv3mB4rgJsMwbpVgYYv7ydBJi8FXxcwy37mPPvi6b73WC6hf7evKGqb4i9FXiqSdyBWwv",
  "key37": "2mKHXpkge2qVrBSxoge6Jy7Moh1zv4NQiq5asacgpdEt8iTYHDMM22dofgwXmvZs4i5h1Cvfdbj4UtyJMKxYM4vQ",
  "key38": "xQwtH1Qk3HY15HN9p4SKGLNELq5aivwNiGo4VL1GJ23sSAcWYbNUZuh7cHWHay9DBkhPZoqdh2CAbd4mWMsaPKN",
  "key39": "G1snMN5QiJy7drcSw9VJkHbK8vPUCi3r5ZZQHMg41hrNKZbUHckCZLXoUrYZDz5PChRybBnrPYezRmE4urBhUrw",
  "key40": "3QChkzi3mZ41wjE6w48uqBTBAA2G4GHu8eNgwt5WuCVFB94Wko5fBqCgpqsd5KCfPHCAJJsrm3QjNAC4T3pwNMUE",
  "key41": "46BJnVXTZbWEKo5m15Fi7GKesEqMNviRhoA8NDfroLk8XyRcTWDRZESyy8JW9QC3rFA3n5XzRB77D8xGt54MNXeQ",
  "key42": "52rbvTMtDa15XY724isVV29fjJRQQ6Ae17MX6u1k1qHCKVSZUtSRA7GzzbsW7uz2HzXcKWhp5eAX8EEAnxxViHTC",
  "key43": "3GBigpXukBpxnkbLmvtmwEp6JHGfUc96od9fmJpeqdrzwKUazCqkqie63AhFsjzxBPJnoYphF9KqHtkZavtdptyh",
  "key44": "2kQYc6RnUdLQtfthaSMtxoQGaBydKwEHKAy4EwNr5v93R731qwJQqPfVLeh6q6Zz8qPqYtCkRF2suG7n5npwXbZE",
  "key45": "4W9a7vSPtjRdN9Bc18P1nzy7WCiozDdFY4WfRMheBE6M3QtanpjQuctfxGjE4eumroJPJNqq86cXZgEsm7P684BV",
  "key46": "RrpFvsfDUcY61HWnTFadDBqXewB8Tn3rDqZ34ufsUQ87CNKsh2nmd84DMdYhB6YAZX2fU94pfEBvL8DT9xQPFsL",
  "key47": "23z4i1ZqxMKwuDuacN32zjs322YtpyNpRngmGCn9qLg2bZ7h22ujnXuws5Xjm4PJ5Jj4VYzoaeoKLy2Hy4AneWNF",
  "key48": "5EtNzydcSEQRJeRiDc1Lf9ummjNfgqyjRc8ZdqbAWnURhHEx7ipUUsarrx7spSRJx9F5Bwb1UjYYci527WB4NAD1",
  "key49": "WsbLLVytuzqYRKXuDYoHTVBRrhKNN1BegAKUqw6GxRmbqDXRSubHsfgWiFW6YF7YSca6K27jjKwteBjQSXCvd9e"
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
