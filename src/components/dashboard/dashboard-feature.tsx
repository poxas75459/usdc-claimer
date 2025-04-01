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
    "2a9BH26gYQKh6mVtYknWHmCo3rruy3LRs5GEZikkxyUegxLgqrVu4Aj23uqQ7JydTsjH2Ptm9S6fzLAsAYxYPF9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkJbQRaxCA4xLJ719wcn2WqEXfjrXzfgucvfLdGpaV5RzTXytTooJNnqn8DHhURJUH2KWZ1euPDKJ2UWC4MkRf8",
  "key1": "5jDqWwrUFJW4VvBFrj3a7QQqPYYwGrMkjkUdXJTW1Dc3oRQNokcnETq3CQEDJVfAETvScNd4n5S9Sx5oa3pVvw3d",
  "key2": "bEzVrXncbfKXB4SZpoVadirgeAy3Esb76KraseRKGVKwHvSPpo6TzQVZTHPwegpeSBNHpTtVTDUwbPTwTSPtBJW",
  "key3": "2pt8FUqtyk8J6ws9TVB9sT2YUgofGQec6p6FUrzEyyMB16chMVSGzgt7W8KxVKiboCxbE73QzUycM6JWhZV4XSgW",
  "key4": "2fb2vsmfw75z6jS4NR8u2J93awhwDDUabMme3WzaJgGVvdqH1rEeXbcdEX1PcoghGczgRu1xt6X3XprfvpA4qXtL",
  "key5": "4ZgCUideyCAKSTHgEa6kjK9mW1DWoA2AWRdbdtCkqJh89ooYLfyuABNScQRP2UcCyJPvxrix6jz2qZN8muzsC6bg",
  "key6": "5Tby18dKLtdTphKjM7DJ7BfJDqhtGNFrwrdd5YE15CMYTvnp6nzBh8E8nV5KJmdwWnLuXANBk2Qqu3pvZmfTb7Gj",
  "key7": "2DxGCSbZSRg4prjUVX7u53Q2LykEHVQuzbqS8kvfUzroDit6jZpGvc5JtgrtZmKuYiewE5YoHpfAg9jceM1nMHpK",
  "key8": "5RvfkDuoUo6btum5RL5edgPBFd8wLkZSZPFWJmRJyXubyAWFLstvtn3qZ4gbPYkHnLMi59FHFWMVgrjXhTFFuXzG",
  "key9": "22UVYqJwTNaArWVKsGokfxtbUfeyBtqLidiv59949o3mgWvJyz7NYjBcZtv5pWswepwgchMv5WCcfg4Ph7sArbsk",
  "key10": "3o1S4vrwNfCJw38gqHj6iS3sh24CL3Qe1EWCFpJ39B8SBDdUPfHnwUQVjiN6Ggo3R8P26r4FM1VEsrZtNKH3MmhE",
  "key11": "orNYobFn5KobYp5G8RzgN86wXXh6NEpuG4GwipbQek6SyHPG9oAkEc24AbdmwBSg52JrZeemrHASePAzP3ubSBt",
  "key12": "5xCbNFSHWYNGBWNzVvwMwfsu9yuiy5ZJWdafSAAQveFmQYet3SbspDhSgdvQN14HBksjxc7xHDWKdjsjJsf19FDX",
  "key13": "4i59imnWTqNh4dpQXVahTeSmG9hUDwfHupnywvX4SwJc2A474QSgz4dpFWYP3rfpcKyhZgSff8tf5f3XMstrSKQW",
  "key14": "4nPgCevNhJrS2zfJPYQLftWQjsmzyfe3WRGS6NX79B1YMZxPVg2PYBLv9bpD1grh13w7CwrFNbApjawRij3Bnehb",
  "key15": "64y3Dmzw5qK6NWBhrHC2YQhJ7JX8WDFkQnHs5FT2yajTq1RCrLaw38D53Ax5uow3DhnChP6fk7zt71ryf4yPkmwi",
  "key16": "3nXNeRZrYuZ92rm4Pcs1gSEiCiogd2ehJWJaGRB5gjFBjtxsoUDtAAHmEukcLTCEV38hSyneP4Pxkt2z7itq89PD",
  "key17": "3aJGGqxek9Wd4BUZiyXTH2o1gk77jFG2nyFCTmVSvpkADzQedeJSfjpMbwLd64CQCtXt8xT8n6Rq8yyj4BGqKox7",
  "key18": "5pXSokoee45cBULKW7dMnefvrvowEiWu4LwKBfk1Qt4RbZ6G7sMoibEn6JQ8AWUS3NfpEevAa96vfin8buMwJkJE",
  "key19": "4AALqSsbg4jqJQGjW1nJHym3aiNtCxPrzHAvwMGXFcs5wM4wa515JXGgMpo3vpnbcUW37Jk7aMZtSFbzk7F84gL5",
  "key20": "26EdCCaNU5iWmN4zafrggM5rCPKYH4SpWoVMnJQHEEntLxyzzBVPhoGkur9KNEJuvGtoz7t3ew6die7BJJVjmc8u",
  "key21": "5droEQFoNyH4LCb2TmuZsWyyVApS31YWpR5XAUxMqVmynS241rBRByWvRaB9LiCjgatDchA2fRibn3GYh7ho3yTp",
  "key22": "skrhfvE7tuwyL3dXBZkDHcFoAXZT5BBf5nJj6SBGaanxZCHECU5T87roKrFtEmRcGvBY3JNGK7avhyCi87MbTkL",
  "key23": "48123GgQV1Nxr7BUEAKNYBsZqPQ9RcXCiWF89xN8ubBqZsmM5n6SpkQacz4jxBTy11KCbczqLT6JRwrz7sAMzF1L",
  "key24": "4jkJwD24S6pU8Qu7Wyhxj1BEMRLnGwAZsykrm28U9MRhav7Jpa7ho3fYE5i61uFuyGEMfBy1JXWh1hsjLG7JY8yQ",
  "key25": "4W4bywZDpEzoioDa7xigurVFvkb593og355iiK324XiHjjm3cYZqmWp8BwqxMC13LqVKZQfTPdQix5bEedqmctDQ",
  "key26": "48sdnjRfDxskHjdhYnBmnVL7DYYJB93yPry735KJynXJLQHBqdLabzuY4sEWMXvkwmtdRNSG25oz9WB8Af1Yrztk",
  "key27": "2K3DjR5eaXx795QRJm7Q29rvg8qFmoyneXmTFMEtXPguiUTHJ4kTLi2uyB66n5ei7UbR3S2YCCrvLTq6GNHZd24S",
  "key28": "4uHFWF7DMw5HbgfLQhYsz3ykjrFGPAwP49cf4qtQi8dhyGhxVTT8LYmLWRrfEZf16jWPvkgzhv4msKSEtX6XJfzt",
  "key29": "Ff4sTBWVbTbriRWKQ4LEwZvSS2rygSPsh1DpVom7Qv4DVCdr98J4BcP2aXGy2an4uAfQn2VASKpSYVJnvTFyqTW",
  "key30": "2KhfE8pgrXfGTYhkrCjUkkgiSZfyCdDchnFsxoQZ3ycZjscdrruuEqfDmbjQCRxaqMgkK1Frxmgg7UUWFbhCPrCb",
  "key31": "33Sk49m1iWn4C7ERCn4fqUxrr1S9UpdECswtqXGn7TN99dyeaSGLHw1jqDiYHNMjuvoj8uT5sjPG321BWu9qwmFM",
  "key32": "5homvzuE8sk9Hj8gKEKFaduVtoQve2Xa23rb4F4CoDBM82iwJYx2i5ozcmDCVP2rEfLojCTZwxLQrbSntkv5qouM",
  "key33": "3C6jCcB6ASUxXurjEvZ85Gyx2W77uX4dQBKZhHwYXST8PGMfEmreKVwG1dVb4T8iP1vPZYX5gtGhH6SsXXJSZevq",
  "key34": "3rEnXhD1UjVThkshvapycVfTdpDtyUqpgw9y2RoryvMHdxFxVSPb1BUXfQJZSBXVZERmhZgbiTfC9L4KMYSXM9JM",
  "key35": "2Lbc1J2LAP5hbwvSvFbjJSRcZA8dLNFmQEwz6JNQYpxFkasTABzNbQPpWZCqM8WvC2jfUZBdUWogyEBmVPJK9DuX",
  "key36": "5nMZAEkCxp1UnnQwsVRRJqBHAJc58UHb7Ux8aZj6Sj6LxA16v3kioYn9xKwEyzAFWC3DSsVMyyuWH7J5fP3kNk6t",
  "key37": "4XKzGA137pDDovCDnY6m7fdKwSz4FdSt3CNjjCreNgJdZsyDcsxGStAL4FssevS7HcujQPVMMLtSQ85WRBS8y4Z9",
  "key38": "51tCcCFwGKmyAQPEJdL2jRjSgf7m9FvBEa6yuCdUmUtnNnZNrcqQqDHtMbxM1WtycAWzPzrdQjqZDR1cLhmAqUDB",
  "key39": "4MDEVPnqCLWPcTGKSGtSe75nPa7QyhQ4N7Hzoc8ru1bw2PpVR5VvTMrPVJLCnyqV4xv8dhhAyW2AtZGocD1NHwoJ",
  "key40": "fvDNMKdAuP1wkKykgZv8ZVEGhKsgLZZSZcWqTKAkY9RYDzxZJ1hbBCkWgYujukHSKCjpdYN5pDvbFEwcmMzi3ss",
  "key41": "3QKUzFGAaczWucFnayXaajGtxrDjn2tM7Hsyk5mC7bNHByeXcaf3yAp32RTTx1dHJtkgaGpB9uWsqwKFCF8KcYW5",
  "key42": "2XJMCriAESE45dutNe56jXLdjeZaht4vDiwqJVjgJLbR6xpQJ1sWvwqBMt8NVNVx8ZKgr7YFJ96eZ3zuLpeK8nk5",
  "key43": "4MvB3SkbFc9kF4KV4hTvwunmrFyTF3Y78BvqtVyB495T5zwzD44Vpkgq2HXszKtKwtu2zRFSKvDxj1wsmdyQhKUL",
  "key44": "58sXJAdfoXCF86Yhmo6QuRaXUumgT4PJzHrhDCM3SvBiCC18WynJ46F2yvCqfWLGxok77rRjZZntWyRu52tbvywB"
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
