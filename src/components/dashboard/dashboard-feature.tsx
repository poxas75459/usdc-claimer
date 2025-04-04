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
    "63mLLeo64gMUP2NG7MXLmZ5o1JhNE2xhwiqUQkJW4KVbbn7R9DC4an5Mskt3BTrXWCqYcc7jhymbTdbx1XZVXiRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CH925e29gsprXenJtiWNG1jMEGf676wXcBjU79GWaKtfVXKDx5hyqKACVN4Kb8jHK8u54qU5BFh92p74io1QJHB",
  "key1": "YybSQoBBQwLswSXBmJNmsa7tcd3uV4g4jv5ZjtGPT4hYZwiH2PNUZpqN7u5iXonFB2tj2wrKYpvFX51CyDuRiqr",
  "key2": "33ZcHzZnH6KovMiPNWGSSnZiZwqZdRKy9RVynR8CRW26rFgPdYSTD9i5iGDJF3TRZgwKhwaqAKAywmyrcMMnsRVi",
  "key3": "5fcA1ZvxTrzKcFibcrL9RpRcNLRUeUV3JYBbbpUYWTvuAaPBepu5xJUyXGohh869EUn47Ls3vX7cgAjSivrgGfNh",
  "key4": "3M4YrNGcciPNwsNpC6uZiNY5YEnLqKVyHFPnLpi1yC9uC2K7HDLQ2BqS3k9NZMmnzCeQ1bUAUzzyNtBRWZqYaZsr",
  "key5": "5fKtKDWGCUyTVsCy9e9QmTUCmNHH6dDU1czgzHRVoPqZXPxvA49zKGfqie3DXgs7FvsQVqVkgihG176LZce3baKB",
  "key6": "4h7M4q7cps9KvVL771woEh38DMP3vb6pa32CcxHyYDCGyyuLKkmK1KMdy79ViamyG8VgThQyfEs2K5D6Q6PnV3hf",
  "key7": "4mpsfnDBX2EQYAYcVwnpxL3PP4TF1VB2v7wAH5J34hV9ZtdSt224qpiDGeeqLVrmRzKskFuTQpS4jq66h34Du9aQ",
  "key8": "6595d11doGt4F833ja44qjvGaeASSLnPxamRpGaaEAwRFmqNuWa82nud45YYC3ci5XoL5LHPuwxpEYM7bjCSaGvm",
  "key9": "2YHmwNF4WBMk6ekPWXttEmHyJvZo6kCfjvZevRn1TNmcoJfRXdDbGRAwo146ygY1PjbSPzyL35Tf3kGJ42BwUVoB",
  "key10": "2q7fNkkG5ymeEzev9Ygz6wPfMMntQXyxL9eqH3prkwjTjWXsvUBppd7zM13KTktZZmFeNhuMK3rbGV31KhJuxV4z",
  "key11": "4uHjxKW2qfZW1cnytLzEvSeHqcvRU69rph6Ztkf8ofrVrV7Y3AV8GCxGffwtQDJ5GNykrk2dwWuGK7A4BFYBKbdz",
  "key12": "4p8H2YEUrXDSWUyPwbzhDGHHbAMYMTMHF9XZpGVyYsoD9HLYTfcAKMUeBGEHUc6XcsdvCL36mpF28PVQsAZ6Z2i",
  "key13": "1Ke3gR3SXf7k2fvhtjTukuSrz2HZ4a1LWy8tKjsFYB42HWjVooKwutmNKoMbrS8zNk1GN6aPDzWXsrR5R6QTR9e",
  "key14": "5aNhPZaKvLkJi5KvDaDxspuubMQPQVmtTfyYJ67VxDS2sZ2tBiH9s6Usg277zCzCc1KuCHdDneAo4upi1iDVM4wb",
  "key15": "3yCfyC9rnwiCp8C3XuNVXFWtt2LQBN4WwBy4fdJYy2puJdEgBgwAuwopJouWw6QJ7d7jWGCunrq2s1Ny8csbvvP1",
  "key16": "4AMrNU5PKH5FJG79dj8P4GCQ67CA81aS8hoSuuHucfdjyRoL7pDJ1jUDekpTgvVVXDZh5rn427hJZyrkVsRthnoJ",
  "key17": "MPhKPjFPEMPhsw7ZLdjWkCzDaatMpBYD73gPtB1jAso9kbXQoV5F25ARjjLQTYUyPLvcYoCJeCGw7WBMWGw7VsY",
  "key18": "5HoPyva6HBqJjRC3PifoyNXdWN8uiiS4dKEY4KRiZR7wWiyhRfy7j6chUdyMaRpyRzwFV1Yf2SsAKjLKbEBV6hmZ",
  "key19": "57C7o8C325782oMgKV22TENC3xFurpdkwcm3JxWstLrXay1QBzgRytrpitXWMbZQASoMs6betPFiKfaYV7iZohdS",
  "key20": "58739PWWgjDRoRnnfv6eJxqLYbuzwXhN1oQfqb9a84bFN3K3yhnMdbnAUZog4KeApnL4gctmDEp9pAdGCNJRVB2W",
  "key21": "22NCgDa2Eo2Ho3UgWDvRkvGNS7FfQj8vYyiGJfpCVFZmvFqkrjNJkchbT2GHf7yD6BhVo73ki4tKaWMcS9gh1Tit",
  "key22": "2c6WoZjy9TfmpbeFMsbMky9bYwez7vCFhzfNSC6wtJf1aUEju3S4AAWmW1c1MJbL3r6m4Q6NuJX5WYbFZrnZNE9w",
  "key23": "2vLKKafhKobuLDTy4a9VzHJu52AT3pVwDP8bnyhV9kwcqtsDMgDR2EW33sDEfiPjP5efForvRhrddPPDByhQTgaa",
  "key24": "5wKpTz4SkQGChGWCvhrDBtCehW27pY7A1xwjhP4MXUt7zmzHvEBaFapZ5EPijiim7yXCJr2LSUzhK67qGeHJuZcJ",
  "key25": "2U1jLFNyHA4TvPigGZ4fqx214N85JgZpMeXaG9YWMgv9qnJZn83Aqct8u9ZrsS2SmeQi9ykAwTPKUKeUngreKw7L",
  "key26": "2CYGwWwUts5wkNgmpCdTuU33DF6GvQFdHR5P9aX5uDho58xbhD9G2UnW5fSjKbBhbhGZSHQ3cw81yghyBfyH6Avg",
  "key27": "5pLxtcWWouS3c4DEHCeDhvqeMk3iNanYuU1RTUX9BLFzYiEfAcs6zaBSz9KdyFqM3CcvdiSjg89WSvV7R22okzgy",
  "key28": "2JzGfXPAAAf5zcteDraE9rcgpYMepaq8LRLkR8sJh9DTDN6L2dQqW1FvXFnDCpasVVrmGdCzhTVsHdU9FLBTcm9W",
  "key29": "3BdKf4t5NanYmkREuri4diRM6jxrroSoWBtYRPVZcSFqtBbMMU21rKdYPEGs1rHUauF8xoyCH59sNhCihwRXSqn7",
  "key30": "2uj1eDwQsJiELmUhm9GDrFfEt86T6HsbstrrQSDsmLR4fs4MJA7EFzKCJBQxDRYz48cgWE43BAEHUy1gPy7wgNQU",
  "key31": "Z4V2TKPc5Le53yYoHQxsDSBmZ7o6bXAobuDdNv4DEMiCU1GGjsTA1aQqTdMU1LiNK9xFd3DyMgZsSf5WPZvriGa",
  "key32": "3iiYJa9RXDnTguTFmeJhxSYTB8Fhin3BppU5baefqCkGDdG8axKUMjH1EQGzUV5w8RJD22nEfaFCEFUUgpUM1ux7",
  "key33": "354ia7Yt8gH9xoNzwXhuNZmtZFHWJAkWRsm9EPxtnXCUEBgWCJ7kA3qvgjzHs19uVjNWtFk41mPJCaY21Ebzpsnz",
  "key34": "h8Xw6GzQ11EUBhr5z8UQGNZvDoJXYbfTBLQJtSe5s4PJdrrfgHdsHZBJqzSSRQ8quHNF9azr1GeibCRp4V17YXQ",
  "key35": "1PK5GyM875L2b5wkVmt2kPsQLMS39zu21QsZDBXSFTAYhfdxxXQPaWGPTwVGcU68Y93yNYfZofTV9V7ZWr2Y7G6",
  "key36": "2yG7HnTKK6M29eBf6oQBi28PVs3HCXeLx2upgK2gEJeT8VLgpjgUXUwirPiEQKLYqSxJH6cdzkRnQshtY3F4t8bt",
  "key37": "26hnGNDSFeHPzbeU2CbiGdbSa4xzGFqXtA1jscE6cBVh417juFVMUpumGhCXhT4VS64WR8SXy32rFc7LYq8VkX8c",
  "key38": "43nPKgyBECNJw1UueVDMNW6DZwFQEqsryDokEbTabFUKqgc1fjbSrUoezUyi3tDreTnJ9ZGjoProGEsGttsKWjJY",
  "key39": "2kDPw7pBH8if6KQBw6Kn4uY4Rr6xmFjn7Lpr5Qm8SFuBjdQBx3W84y3qu6m963zGPbprQdVRK5o7BL1n2vz9rDRp",
  "key40": "WfcrYQdh55qfuJNetw2Vh4sQsR5p2w2QozivrzWbvJpvtDR1spdRjptuFLwHW8ecjcu7mNWZhawmFcZkDnJwtf9",
  "key41": "5xvkipYDFRJ3HqUFecg28YqrmVGh9R5H36fQ1WFqswEQkhNDp7kXsiTFahrsPK3PHcS41V8SoeX2wfcUBiLco7jF",
  "key42": "4YhSqoNvnnSWWz5XJ1iEWsz8V69vS4yk2h3mzmess4SGJ9dfTcrqaWDjgGPm3r58TYSUG5kaknvitZLE3Jt7CJna",
  "key43": "3RzP9LvBjpdxenrWpsvKQz85b5GWk9n7ZgwHdH4TN1b3WdgMMdLiU62fBuKnPnHtQ5saj95qgQ2Ep5JjSKznVCe1",
  "key44": "3gCgNRbFxzNsrbLeVxYgrv52uMY5XzD8HwSAZ7BERJg5CBGkrpwaWsMAnaB1BMkcN2VmVtfkNsd2xW45MJBr6F23",
  "key45": "57BGEuwJX4U4VzBQ5RhhEBZoNZL9bFtyLnTv7Adkdvw7xNt5uzLYKHgLtu1ZotjyaxWazHWt1tB9nYoPB3MENPh4",
  "key46": "63yu2XxT9m3arLNDX33N4vfqWBToohGNMX5ftWVjSnn5e8jCo8dvFubf6CWSVWEUNVbm4rVghgfZv5RN2kPmwa5C"
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
