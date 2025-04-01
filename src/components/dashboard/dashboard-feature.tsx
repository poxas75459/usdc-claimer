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
    "4DQrr2PNMCo2Z4Ldjq6QeAyZfP1DAD5BwW4YPZzph3ksBU7jiY8Ww9Pw6LYcigSczQFyUmF7zwCgVwdPP8yYfS8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwxnTiLc1Wi9ATi9SGr19rS2oxaHKtYQehfKToKVPGMNUAsBtzcdjaK6ZKaDNZcmpDfZmjpP4EBGwUPsbGL8d4C",
  "key1": "2MDQiC8qzPivuPrTLSDywAPRXN8amCr2Mxep6FGYJUQG44iVDxwsLNw29RNr5Bf1ryYSqZQ8ETfpxYosS2BEWfuX",
  "key2": "3dK4rwSSGfQj2RQTmJeMeNudJyctiyAWynkv7aeLG58LXDYp1XAkAhiGmgqFu24KvfqFmGcvjdmWpdtHbL9GWXo8",
  "key3": "Yr6gwkUCti4Xdcsn1kvkzQy9HnzMdJogaK763RsgbbgDv2iqD2XKAUoycMEJHvYafbp5xLcGpf6GDPCBiv6PfTC",
  "key4": "5vagCizLSvcBYPtnjq1LLpsC95viLggpQKiJkuU48Rh7itnDqrVFcAuGQER47wKnpL6LrFf9JUMAXf5FrX9p5i5y",
  "key5": "3mqriLz5fY9ZmH4qFzxfj4J6juN9ix6hkfadD6wKofQah1m78zzpC95Nf4ukiPyntUXAoFzzBN4jDnKiGEQCh4Ss",
  "key6": "4GQTdgd3b2eSpRW2HghpuHeb8nin4xmrSprf5QjgfzedPJMNa8V9JRF1o8iMrdzNaU7uG2yTGpYeCTUYtzA6k1Vk",
  "key7": "5ct8jXa4LuLuXdtsxbTggnXsMv3auVJbHrsxFdhmPq43Kui2eQQH9XExkVbZpKBGqrMzGpsrUXtLNkszFKyDBqC9",
  "key8": "2p3RLNKVmN447BYiwiyKU1fvbYNoF1vaJkL66vSWi7UCqoSp8oEuEk6emTYWr8Yqwexrjmqcx4TDFXCP6m6QbEER",
  "key9": "457T6A3c5RJgqTcC6SFKwbgdbsa6GZN58yE4t6NG93jhXeKnT9FStsRQqW5KDLRzzesYwpKQAZdfMME5nNTtxoz1",
  "key10": "6TtRkVec4BU8aN3pASuu361vzangS2UePSt5snD51Gyay8eiTeFc44etzuKavKfYWA34yMBLUgPySWATumBt5b4",
  "key11": "5VCmCMS9pNzEY8N6zJNey9hFZvYjbQtTBMy4dDSixQUdJe3NCF4shmJLLTZeaeWMhsPFqZog9QLwWrZ8UdD2jMhs",
  "key12": "3xu7HGWi6B4UouU5D1QRiLdb8wv1zBBnYrqb6BtrLprdEnr9ycjBvbu6hsMPyiPuF3ahT2ezGXRTqquz8ZudEpbz",
  "key13": "ACEJgoV7xJhbGAkcAfRY8SdB2eRhMmpQq6ejyZwyYyzWUpGYmyyfbhLMSPqoKjFbnE324sXKoGoMWXML1CxDvqQ",
  "key14": "CAe3J48MfyuLZdmMvwQhCQYhKxjdMDAAxZcAp1daTwtWfL21jcdrzY4uN7b4SikPc3nc8Wg18GcJ8vWjJFZmy4m",
  "key15": "pyzTrkY39LsWHjFUwFfpjQgFvFNhXbovkPMa1LpiM3484Q3MsEedxNCJKibQ61MoqFhhoZN6DCu3DwN8Yhu3EBW",
  "key16": "56uw6HJ5PV2jF3YotjYNcPWWvuQxKczAXFXHgtZhwQuyFioEZN7ZDErPcXRmWfoPkLUzvjYEAvQepPKoStkQ5DUR",
  "key17": "32iNsTFDvxoRgd69gvsrVVWLLoyDUxfZKgihAQpEesimexPkxERZVDfSfYBhYpFGyNbg4bvsr8MVVGrWjbcr5xn3",
  "key18": "2bfRsyRJwbpM4biZsrWpStEoi12ypFMPHWwnfeDqgXBRUZSxJHqJFB7LFjujKiGGXccruNERe5uLU8BefqxusVTa",
  "key19": "3onaBXGcF1aAn5qnj92JMZMJTUAqwPF5XmqTzpXe2ZCjmqKDEFnQL76aHJcnXHR18kRVk4UaMpgJm7d8jVHoSuqY",
  "key20": "5v65y5RwcpezCHiYSSEwHtCniWz9YHC5NquREwdhJFJbMDHpRkHnVAdUgttQBMxnhTrH7CKtLX7sM88SN61JNhwr",
  "key21": "61wrJZyHK9DdAEWDD5wegiwvvV1D2agkbBZp9h9HB3T2GyzpET82QvfUJC4GpARgFBzid6BuJy1DeeTBmrWSBqi4",
  "key22": "3zBoipD8ARntE6Aq6w3hozchUoSNvPiao9yKCMxeA4dcfxh4JSiLKK767Uxc6xorititQhzs1KSiPf2uTDYNJV8S",
  "key23": "2js9sEgeHs7Xv85jsvmnaxfPPJnEGmyTAa91p6uBVWr179XBK7x4XYk3LUr7eaLhxvtP1shf6S25s9Si1zUA2TbX",
  "key24": "3LFeUkrEoBxsT4kKVME5WGP2oaGxkmj4HAukNdhBxBt3ke2XCZAYwZ99RCmdHHNZC2LmXHWYmSThyY2Ro4PiyPVo",
  "key25": "5sFn4prTHekHQGX2mBQuCsoE6juepF5EXwSNi5h9RLvN7bbgp65HDV3PeAXVVkc8xHCdKfgYVe1wVnaq47snWMSA",
  "key26": "65QNm1n7pDron5erycaYJCV7KbuNCpgZsEUghXSU2vgnp4QVyM7T6UhRNw4f2F1BEZ1fsx6ZHnGuGGbG5VYQqC3",
  "key27": "41UFfHbNCaZ16XmuY1SESdKFNAY9vUT2uxVi1rNSMmLBDCRdnD8xuuh3nG4euhkE4TMNDV2p3mgvHYga1xzkmt11",
  "key28": "hBoiKRwZfY415eVnVCSBs6yW1xKZTr57yntUTU3PU2FjMVxY1QaRMFv8ZuAEHygYkrtNGaxJafAiqGTJXXPP9Ya",
  "key29": "4omiQMU4vt2FLWzHUNXsfy9DtngPEt43pdyC2VdZqY2xDMpdXgMXFuuSQ891cV1E1oTeAr6GPmbYsdbwuLG9KUoU",
  "key30": "xHKgB6i9wNQik6ZUvuTJALHXhrKxc3d8CtfWtJSAL8NWuWUniJnLq7fGjhYcZ4AHW2HA6fU8GZECNXJMXuN4gGo",
  "key31": "49KdX4iKxoksUm5McyUbvUVRUmycitBNo5p6UJG1yojtEiLnQTHd1sEXnRWwAZJs6EVyxHdmPBbmPJmwZ6XdpfGL",
  "key32": "36m7BkT4Xi694MXjeD1pB2ABngTmt4KAaA4bRCwj2yLcPyAqcJAZrFX2kKs9EpudiLMjszkTfhrE8QfVEQvFJVhs",
  "key33": "3QUVEefUaTTqARftJQPw5yPVaqTEnhxA9NS3KNcFZptDWMz7QTPbHjyY2J6mLq3iZggNYd28JBSBiPo8qYSTnVCa"
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
