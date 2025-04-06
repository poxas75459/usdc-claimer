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
    "3vFK3uDVkrPeb5HENxTLjkuAAMpPRUErD8k1QLs8jNcAg1iKaFnR8uBiJhW21dX6eJ4YyAdpaWNbPgVsFpnt8GnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npEyNxxd6H9bECGqzPpqiZMcJ8tdb3TSZGwGLmRmtVxtznwv8ETVZueKQp8tjrwkH3eUe7wB6tmjTNK5PYdpyUM",
  "key1": "igs2oD9TnEFUMzFFJS8XS4LhhYSNbmZbL4PxndTUSkMWVjkQ75TDYcahZCw5gk26A6uUSZGCKAJGWWzfghTtJYK",
  "key2": "5NdKf1wzoteywPXEPPYSk2LLnKLsV8HFGBXb2cvyzjeJpybXYF7aAwzw5pqmcCa9XbRXQBbeYaz2pjFhm18Gsh9K",
  "key3": "3LPcYUxE6LeVcshcwyTxtspAVVFpFnSBp1ZXzHeKiiT6D2xzKR8jR5daTTeY3A855BhLX4kea6sMReAaif1HaRjc",
  "key4": "4pmprFc93ZMbdvuY2ugymqjdFRmhEh2zsUPQfbT8sFje2JjCM7UKuFckridRZPVpyytKxQqv9q8dJcisLZ6245fZ",
  "key5": "3qveeesg7bJbWcWZAdEGAudQVax3dMrFkVBk7sJB32MNcneadgo4HaqUx1S1Gxm3r1fogA9QmgyenQA98b6qLrJt",
  "key6": "VFvqHMkCGpzWbY5KzKmFE4wi13LJVuo4sbNGyXMCoBtpdSTpeeW1REUjx8hmdbyZhdUHDLvH93R8uohHrBHRiT1",
  "key7": "2kquKT8Syy14aWhph49wejmLKwgeDVMJ9Rvgyzhzoipg1yC2ryT2gAHvaXztny83CtwamVMezVktwtT9sbCJSBVK",
  "key8": "2jHayeYteEMFY3E8LbBkaz6Lqh388m6uUbgJzUp7qZ9CKN4WfiG2CZ5x9Jtwzc3AvRt8NH97iNvGpjrEhaSQ4g32",
  "key9": "EKK3zPH6YDgRXEciaRRYZ4zF92S26G34xnKQ9FuxwUxWpdyzYPb7s8XwQ37LQ1Yts5CjJw1823KU9MgaHbRP7yu",
  "key10": "VwBc7JEk1gg9mcEX4VVYvviXnj25aeuQFk7CzJX53unpb2fmFA9LQnJSbpNzwrfTDDLSZAX9839QyzcLTXi9V3Q",
  "key11": "46nT9Mj7e71N9p7Z5RkJvcotCLKTjZMJStKJVnPjFbqSwoWbX4bV4nfGAvjwUA2G3wYzRQ3jVAUFm5pYfwbSa2RH",
  "key12": "kj3A8iZB5KFEbksGKM5DxDfywcwr8voyUkNVP8somuvuHP3v9XTNoT2UZARBoL8WQVVa2uYpLw4Mn3DUiAw783e",
  "key13": "51rKjsxLtdKx8sbHW554rHhs4HV6N95eVg9YTGFbEp49CGKEF942qDF2v79xA5QxoezcdXDyi2nKnhwTaezs5UwY",
  "key14": "3ZphukPaxFJS9dK2JgDE5wkMY7bSBaUWUSmBd8oGWq9QgULbHijfC1baFnHnPSd5tH4nbyLtwbVS41G1RfKpctPN",
  "key15": "3isHjbvaaCyckoV4fXbUVv44Dk1RxsAV7gTDse5HpmHwZMpwnFDLe3J9EZ4BFWf9SLrwZK6EwMxZ3AzuFMRQranh",
  "key16": "UdHYjyciLeCTPE4pLYGfsnXmUYuLgSLPnjcFUdQzNbqt45ZP77jpX7ZwxhAXcbMEAFLiZB5McsKmdD1bSazdM27",
  "key17": "5TxNc3aFRfTLDyc9Fy8Xqae66xhsAwPQoEyEM3Cypkv1sPvffhJ8FdTr9W9qCpk2gD9vAbFZn933nbbtuKBhd5r4",
  "key18": "3gQdA6oEPvraRr26pLrhTKSdyru7b6s9i8xDwvU1Cj27BA7gDacWxDTDq4nq6y44i8uJ5aPcQgmeiPqFYTrbPAMA",
  "key19": "2F9ZWZ2oEwnbidLZdoE7eU8JqQQvcF6djsAYcFiqXhZg8ht6zieCWo6RxvMuyeXeb6m2uVLaNDDNXFoze3kTcCBJ",
  "key20": "2kkwK2ZgKoHjcwArSX9Rrkg9B1oFCLS6ufy9s6FtxfU55JhhdMK5t6TCsCELLG5XcMCmhhWN85SSYzpnGDtm3e7c",
  "key21": "5jjDAbDudN8PPkByZF4vJomd1SQkUarwMiUBHjqFJuo2vGC7C9okDPNTQ69AYTY9jirfivu9UhZyjtiy3pws1SWF",
  "key22": "5PNkmZZD8Vc7ACmT22zpGkqnRSyf19uAy8nE8VBypQuDfQwccvrETVHTuzZbcoHvRBHP6bXinAcEniaBeBbos2ap",
  "key23": "3hE2Y5donhmBQexLfn7eMYwgL9LDQ9ZyQ3h2Z3onFzxsKN95d5TCGdYxG8xDxLC7yvxNqR2niAV5qneEKrmYf6Mf",
  "key24": "5ajYhHZLVTGum3AvdtpKekF3Rsagk5BT8rJRpwAJv6xPR4gSmtPMrNo6XFhM5V8uRxX5tH4Qu2u5s1CBdjP6hn6Y",
  "key25": "5NqJXrUVtdBT31XEhgmSTvMQ9hL75s4eXNGaJxER5J6DqGmRbDuDqz1M9gcvcYU6TVHq3qdmjU3FnKNaMkYLrkvP",
  "key26": "dyQQD686kZaxiciugK2Kwe1eGodZQYpu6fnM2cPAo8HwHh6GHRz2qQRC6mMZFKLbfGNXwR3RFBqmGgtEZ329BJC",
  "key27": "5HpA6noPncpD383SJ8CmW6f39adtiXj5UxxbpbuKbMY33ikmYJtSCaH9NdTfdN8d1Lti3RcbaCYSPTB8gLpkVdPY",
  "key28": "JEtEyxZ6t6tePs9g2pjtyygSKu9XFcKrLzaLvdiPQ3ewTyHUjefb7Ydo64MxRxvHou1hFzmCRDfb4VAkFUwo7KP",
  "key29": "tiaX94PiFJTHDSmx7zoR62aPUyXg9BPUbE2DqkFoaeBiAeoyjP4qnRJxjgQ8W6p5RrAvU29jZqbw4LJmDNA1VZU",
  "key30": "5RoBoEQex77j8Vimhs6SSVoFb6pXsVmS7TBLJyz3NrLv5bHEQ6L7a95cgkr7daej9Hqem9oQeMRH5EkoC77j2kyj",
  "key31": "62eGMRNJiEuBAYYtrVywNdM9jTme6eH4BeJvUdAScMtbrjTK7rgsQpjYcBkBFXB2mFuMbx8yYGBnKZo4rCX5gqHq",
  "key32": "3zZJuW4BphVgrg5ckaPkPbosuHHEi9bznDdZPjDPVrgGGRfCTqbBusq4MMFLGuNQnuVHPdBb3wGmmZN7W3aR2nrE",
  "key33": "28u3LREVv5S3hcChogsB67PhYvHT7YFR4nbLHUr4ptZbm8QXVXyQPRnpSjSDHTjjPYmC7HevcvjsRwTB9iWxu8XQ",
  "key34": "y7oAgaCULfJXkNXQh77RpyajwiE2RLLc4p725VhekqmVnS3d3VLeAneYxXF4jJJTa1Gx9jFB4kYAbXcV3VNeR5V",
  "key35": "zyBxbr6DLLT56TVCT3sTknQdTRe78Zeu2MroHBcp6rRhrU6o28kjv64gJBu4nZY8uJ8uFmtHziqB5T1s4duyPKP",
  "key36": "4x8NJe2MAbbSTww6BSXHKb15SyCnRoPxPmg22aNQToFAvoUWun27cziMjtLcmiC8kyzMoJbKHuZ3Wd7HWuvgWanz",
  "key37": "44JKTjFuEGcJYYKvjDPyj4tjWZF5fq1munZDt6cwHr1Cfn8FPkNZRiaFgpVZhyaaTi1Yxt2EAWxCbdpKhd25RFJR",
  "key38": "3SgNj9UQz8iiCV7EgnCWuFHyM634CJan8riTynjxePhunNytpr25BbBnSernCZFhv2awVcXSFAv8Je89HYNX3A5M",
  "key39": "9AuoF5MDPV4ZKXbqmiQRxthwVgzZWpq8bHUiDiZ3KNJZtuTSdvmAKndDNrGu3vka5JE7tC1oyQBziDfTykcu1XC",
  "key40": "5dJufGKYT77ifvK8rfuTKw4vMcf6NDgpS9xWmAKsaGqpeeMjaWQbWPjpR6ewpwgqaXwDU5ajoyTczJrMFf8QthFY",
  "key41": "4qD3Uy5FQ9Lb2Drb7AUkxNe8Kt1rAkS6jzvadDApbAuJRLxe8qQPeTN2FJyUfyMxgdbEEDjD8LKsHymZKyYWTgkD",
  "key42": "2KZk2NUyL2kCgcri3yZSfkntNSZRoJC9KKR3EefAmFYvAYrEJXeYMoorh6S42BPWxavWeBYntrK9x37AWTgSyFd7",
  "key43": "5rQvAhTFbCt8vuVVduLfRp6hUnvjRsgNJS8xF12uV4ooKDUv1fi5gdGkb66Dia6jx2N7DGAYNFuEKUmLaphWaPru",
  "key44": "598QycjQDL3tPMb86uw6xFDha8PnYYeDgqNfrhWExHBR9p2zdWSD8nGYNRTPPX4LC4vNfvqr7xedUMR26GcajzBt"
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
