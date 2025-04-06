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
    "5DDT8NciwUXNC1P7F14JWeVdF3JVkMHhdJt6BbcQNVuijcK8fEEea9Haa6x7reK3Z7WPsf7UEAP68S26RsDYKdUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmjPFmty9ZFU6tYu4U9CLEskotUTtDTv76X6VvAmSXG6ecrgTrM445dfiujebWMqALVLL3chG187PDsN9iwjcvy",
  "key1": "xGRwRV97qvrygXzWeV3c9Tqem3rvYr2JXgcDzeN46PGoR81CUTVvrzyh1XpbkVDpquA2mAxDF9yFiNS2CWX8omK",
  "key2": "3NBfvnvGCvxWQP3U4iT7PSKV3TdEu1L3Mez8oV2Z889BT9Jy1VsCfezL3jq21ofwdZSAhzKbCA2WoYJgz1ahV7SD",
  "key3": "62q4DHqzg7cNutXXe4Nqc7zLnTbLkmJGTkMWtg4EJAn8vuTkWzWFUHdrBFicSszkmMpabqtgd9SRmWneGekRLL42",
  "key4": "Z2WYxkkRYhCfjhKGrffykNkUdAC3SWXYJpDFCKX1pTfmjBvr11K2CQoij1t4ieo7minCFJYGVcdfg8eWHv9CaXW",
  "key5": "5X8jDaP8jGyee9AKaf6mBDaddMr1Y13V39bhQ3XRzu5Z22xxu4Cnc5TvSWZ7gSartxHHrXTjQZky2U2szKFfzzTJ",
  "key6": "5fWTWEKMbXr8udDK4dWWar5HHfjLkGFFnLr24rYxEKZ3LS9Aa5tqqNkroWvbV76zGeqwZC5XqMyrofpP2Dxa8S6s",
  "key7": "vYgUPAGQbcUgr2oGw1XoMXLvqoTNp5LxxecSRUUBWxMpki93sgKBukxAe1K4HSFRE35qfgS2Mzvo645NEM6Ec8U",
  "key8": "5jPTAGkq9wZiaTkCyxQPVhB2CsaSbsHHX9awAfMA4LCqsKjjeFSLcY7WT5yRj27rSZuptnUwv1csTHZG3v8kX3KY",
  "key9": "4CVmmZHUFnLbJU77YSodzRsrmjTV6gEuckurbSVsJebYGVQTorJKshqUoZDFVksAouF2LZ1bym1NsiP9JzoxNydd",
  "key10": "2NbUsRrhHmbvEe7HYijd3hCu5zLWZcwS6psNpwbhLNJRHd7zA9LTBr5dLficC9aypuWwtdsdFP7FPnxgXACyjMBP",
  "key11": "65Kyfs9tedqxZmcf797pB6AgqPtejEb9BpRwgQAZFvSdtu62GQkkyz2Wnr4AUEqxEtrshfx67MzpHF75Mw5TVg85",
  "key12": "26fT8XZC4swVNkwfDodTnGQPkuB2mpJXt3wVbG7DLhUXbrc34v4w56PThUtCLrJMqeNxw39dKKiF5wmibi8zPMLv",
  "key13": "41H8rX1tV4m5u6QX3VRwsoLDvqfKVKuUQsrAfn26MoS2ymLohTAieKQHC71yYj4skgjqTbzAxRSMZ2tMsi6oUrkP",
  "key14": "TNxb4mut1227CVtAhviiZeNNGxSsDRKQbdtDsJWVyawSP8XACrdm1CTW6qKgrQA5jQRtGPTNSLi6bfiiPopbPxG",
  "key15": "5JpQ43iRbGeuRghLw4rLM8fCTrYfJFmoV5w6fMYPKPpN8YwD3jnXJNaxdF792PY4j6YG9kTcedD9V9w7Mone5ebR",
  "key16": "2gv8x18UcsfwBNW3osVjzKqBncRPDwaUG3WxkpGeHApTapV5z96xxSKCyCxXzCfVBEAiUKaqunPZD3UoKgJav3TH",
  "key17": "xjo31XFmf88527Fcmx59DsJmTz5axMkJuGzm2Wv28jtVmYRJdzyCYPyLECtCJRG5cFhUDCXZ5ui1o8xBBjycA4j",
  "key18": "BjD2ychXZk1NYYeYckKUVwQ6PnSHf73bFPrA8a9camCgjXRacR6JTdudpdWXHM7yMQLypixDanNWhxVkWhQDVJM",
  "key19": "58JQSLFicgXGCPEeUHGUu2GwfEBwWJCrkpZPuTc7D1soURu1iGhsZs3qnT4HDF4PjVWAktVpyxi2q7ZvrmaBPomf",
  "key20": "3vXZ72ZzyUdRagmQyUwHn5BpnzAr8enohoUdGABjGJqukNWZY1PdRFmDbF3QAPQWsq7V8esfZEwN4cZBDPeJPKtS",
  "key21": "59BDJZ6WsBC8g5LRquVpA7hPjfZjqLyDFnQDXhtZCdS86R5rcgX1RAXLPdnKmTFVk8twSEKYUQuGEVMvd2UD8Xgm",
  "key22": "3xFPeJzS5BTN9xAvk441aAL21jsKQhb8pidHK2yPCtwUTBBqMwcphUPWjMLXcrECekKrhzRU8AnzrhcjyCTL3cwL",
  "key23": "oQwRQvX7uKhWVz2ZEm78CbNrwXi3oBCZ6RHoA5nmt6rG5ZikzUzLeU7xwDAF3FphcrQutwjzgzxLVeRd1cPsM7o",
  "key24": "2taJmfWKaKhhSoFYphEa4kVQwAFR797RsqoV37uGtvvxzQPop9eheC9hwmViDdPAGT39JA9JavGkskC3ZtHMBT3m",
  "key25": "QDYXtzpqJYepMatdT9Taw2BHfnCbYjpmaSQFuXKnkt9yN9x8TyQJLbzkdsgrvdcV89CQw5wK3gsAWy6tinRYcvq",
  "key26": "KWvRCn4d6NwDn9sBFCkSUhT7bSKaArhCVTZaBMTGfbCbw3Ysq2hdvxeS7SeYjXH14hNujbJ5ShxNgS1PotnGzQ9",
  "key27": "5oGtdHHWCVtFhXMpNEG37wkHECm1ZT6Q2QV5rx9XuygTW2rzXsmcKhPgfkyWA44dro6nkigKpB5Z7z4n6PABhAcL",
  "key28": "2uHFT7X47xjvsbh2zr6kiVdbK4GgVH3XmWcJKv86jtuYnva3GMzy6zRo95swjN2xp9s26p8fJGTUU6mamFRFrCZG",
  "key29": "3qh7ZMAt6CL9tT23RQAhASSUQuNRZ1TqZ8ZhaRYqGjiMnxiQPHmgXvaK8CkGmUUiD8RPWAtd8SjuLwcatwfXmoig",
  "key30": "hsTtMg26RnpfNBigh3T9e2qg2hdHumvgP7FgwrrJrLMJB9sfy4z1fpMKbdjSHSWtHycreRiadn7BtUZWoErT2Ho",
  "key31": "5C51T8Tceb4oNYQQVpqkypjxZBNDyuAw7R9HKQ8RFLJm21CV16sjy1EdC9dtx6oFbeRLY19JKpFdRMeu1vZcGV1E",
  "key32": "2KAh9fwxKvGiM71gXW7L8799WqW2j2dnEaFaJPU1QYmMA7LEKBWcdBAGhi7xGpnP2RbYPKmkpBFCdmo1rLiAjnEr",
  "key33": "xCTzh3pRZ5zKPx4u5Q69FDd44eiASm74engz4HSaxs3WGKwrBBDTvs1qbfFPmjhCb5GLszBiZMtjaXJnfmJwyZF",
  "key34": "3qL2ccuekE1urxMJG2ykBigBhhL5LancdZmYLk3KVJG9Z5UGU2gk7Koba68sFqFykkZDLdioe9CFQKc4weoFdRv3",
  "key35": "5PbYgfxYgZtQtVE85fQpRLs8UBcNuRZR1Tma9b3xtfL2NubpmyASZKDB5zA2zSuuP5KmgoULrpncFCueDkZdP3p6",
  "key36": "2iB99VnTxBxDfa4YuzC2vqTVuo8jJ9npFBNVkHzojkx64JptQp1QqoN5evsbQUtmnfY1dmMiP6hoifYXvjj5DKhW",
  "key37": "2JbcZd399WFxPEjAYZzVGHaNWKBa24u28kMcdsJVntFiQYktDUVVt9tAaeo8R7axQZDuvtdMg1YCMZb4yCJiKWyb",
  "key38": "3xiSeCgQpv4pfEM1bkRicNkKbEyckGq8DsQ5GinT5392MLJycCuEk4MgxhBbbJCFWdnxxnvQArVgUPsSFWRyS5qn",
  "key39": "u8XzDA34iqY8djp6Wx6pKNLT22PKWFp1fJbc9Xqz1ucFf1g18bzd3EVAY218r1qakCLVw2qBF2UTdhDQjcHi7Ub",
  "key40": "4o8XTU5sA7E8KfBdk1mkDdk5KbtsWm3qh1bZ7bcCh9nRFcEy9p8W7dtEJH6zKMQ4Sj3CacA7RbxQ9BDBZSxC9w5G",
  "key41": "51HPMRH7PkWskGi29UkkTGE7GQacxhsSgJU6eRyjuc6QZ47mUPMPevCVaqE6MvXeCvQvMBq2KAGinRsxUytY88kZ",
  "key42": "5NEd179rdxr2Ka7fHwmcBmzCthkGi82twQ96xVJi761GhmcqW2D9Pf7gtUSQeeUu5z97LyJ6UtssjgRtAughuHyK",
  "key43": "24fK7F6R8N1NKt5sFJS2A8ze5ByJruYYoB7rNV5B2iv6a8xevFuiJ84DZS8ExfeS6bXL4ryNTmADNad666BJcaSM",
  "key44": "KcCkvq5kAcpGVFnt9evQ8vku8mfwgNZrFVYy7VreV8kEjYyLJUkMcNmydfTWdmndW6hZGJhzfyHjWZbEfkSLUyQ",
  "key45": "5Sym2N54XMQFsHYTZSngpznvMaKAKHhY96XaWNbBETMWajjqf91AWHDH9oicAx9sJeXVYfofqD4MPgmRWRz6iLr8"
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
