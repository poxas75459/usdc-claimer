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
    "4n4Pp8uECR3Kv15xYsVPxpPrNSr3mEwDkZWopA3XKHsTJd47AzFKmrtDaHvJrZHPWpavvLFnECC9jGv4KJVSA85U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHyiT2JmtqTyXYxe8k9D2Naso9jojnaCineDT7h5zZkrcuC81CqtweSfTioyQ84QH2k3kG7dQpdeBUQJPfVxGgQ",
  "key1": "4J6AmVnjDCiCqBu86Fy2YxnuBgvyJDK4vg5BYccrGogcFT3G5L5kuRmA8B7Kuibte8mQBU5jcdQNQM82wS9HGfFb",
  "key2": "5iAYxHyzSPvUhJYPCp4ToKvCgHFEmCpktRYKKayuQ3Y78VUmmzFMhVFGiWThkt9KuT8KJPiiak3tojXMsLjSczM",
  "key3": "odjuqtTsBZbBbuqwbQUEc3uMpyPEA7bGYhEK85VTyS5ZFzd46xn12oUVNjnRasdCg5evmeyR1Se8YKzTVV7nUSp",
  "key4": "5kvkCqiFnCXHtd8S2oCLF8x4KYTpbUUvtdqW11ujKTPYX1BUUbHSFxttThShyaRWLgz8Z3pt42BD7ev68tgwyWVt",
  "key5": "49uEqpRZG2ELHmFKPoxxkKvmnGSqPndhgjCimuEXWFquvWRKhcxraYWBweP71z2cxUizNkFPwXEdoRvmwrSxNfWu",
  "key6": "2FYuhMKCYtxGzkt3dUcEUxgFa1k6bT4MoKxb9ioSSi25CHQfDaQG1k79DYJZCvrj6UECFTx3x6FBAgSM2nvrut5K",
  "key7": "PRiKdA38qbARgif1X2EPvmcZfut8NkDuKPKA7xp5cnfsSZdSyjLGRvRHHoeXueX5QFxAgQEoFAk27MEDwUbpApX",
  "key8": "3xbxDqNDYWVVS49jJ1isV7DtZjab3mjbn8sG1sRSHpjq7NWrrsbQ8ru6sQiBes6dXp74gDLhLcGxVcDyvW86Z6tG",
  "key9": "29ckHvz3HL48waqgLhH84u5xnytZsQHw7jCzQqg4Mt5g3J7YwwSzvLC4MgnXkremradjruhyQbuy2u4Dge7oQbwH",
  "key10": "YkcyyC15bpSavuG5XJJa3KFqfADRJtZENSaxXwm6PUmby1uiZyfr45jU1mhYX54YSbQ8WZ4Zg1TvaFJrno6d7c8",
  "key11": "63CUuBqZFt22a7buw6jRoAVCwodBosYQbGtd9kfJxecGM7RwbmjCr745wcQiLXRAeLDYby3HvwpZehxoSAvpfN9N",
  "key12": "61EMA4WuYmwtxjSfd8SWX9gvQsCszqZWwTKs3ARaQQnwmHPZY2sLarVryBAh1B8BprLyrGa21PvFnK9vCQTXWhs8",
  "key13": "3KReM9VQUBf3VC1Z5zoQaWX39pX9Xc2Bu4HF1FLF8tD2iGMgNiLko7W8tiJf9Cfx8Lu3ewkxecnjbDPFTAiBYJBe",
  "key14": "4Rd6Hi7epzmfjkJvWZeHdb7vETxK7mrw14A7xYk94vSZLp4Ti1tgceTjbhc9hEzDztGCumWRNcQ9RtrK9cC8ZfvC",
  "key15": "jwJxGPxCz8gmLZPm7gW4jZ6UttWQznpAfzF6UTDongkZjCtenifTEgdm4ZrgAzKJvUtPxZMKhjCwMxWQVc3fJFq",
  "key16": "3HU5uDDgGvKiu762Lk1MYHHLEfer4jwywL79qwiM7ry1JkyvV9PNXB26a8wWF1pwWYM3Z67E77nFk3u6NXCdicHb",
  "key17": "4PQDkZKwBwDcSDJfP6MaZqAXFSCtggQqT3aYRsbw7fq9UFkNLaVUCv82oUY1iHmNgaxhnELgPaYcajkZYSNbpU4g",
  "key18": "4SnUkJsBipzRiVSA53EMv5YChkjaLj3bHaaufAtpwWx2yVH6XVxaDhTYBHnSMkBNJb1SLwK8MXqP7pSEkrmFbW8r",
  "key19": "255cKLuxqnmNwKgq6AtVtXKuakY5EPDT7aeeTYeyT5ByH568r2cReU48M5xH1SMP6dPwfc9k59D1XRvzgUjFVVFT",
  "key20": "45WNkUW6sFHZBmpUS7WJuDx2DyWs9WKw8MVCjYw6T9Bo6SxMGL9yENA9fwSyVWMUyomcpQyw2gS8pBwXTUpU4ymG",
  "key21": "2Y9Fg3MJJt7Fpctp6wPQ1F9YZVJ5aDzsQiNrTyCdWUieCf7bwS3skesopcCUr85EJSYbq6HxdmW5aF4mMjDimd4H",
  "key22": "47yQmUmA2zUgLzTf14KGrqSeBovjXYWdHArds3SpALfkuqZcKT4BF2QGAg9NMgFM5gpWNFUjTUbM2JkrKJYKaq2p",
  "key23": "5oxi1DQ4azYLZ4WCsQaU4cvSf82Gf6ZgpN96a1fKJ95g588Vj59eVzWoWaHujGmQ5ut76AKRJWGupZfu56x5AQkH",
  "key24": "NTgTmZG9Rx1XSBkXvDj6KeJe3SbraYsSHX9X1M1wj74KWT2Jjx5mvhC6R6WHrRF7UVBL5TNGVzDr1i4V4a9KoLP",
  "key25": "2K6spaKtTLg8k6XxGZcbqakywFquRvEebyLk9G7iopyNFdnk1nnfjrgJ85vDaRLVid7CUcmvzKeJqTRjNyKws8h1",
  "key26": "e9x5Nh4GFDu8wM9fJLwjX8hpe6e6MsoEpaqugugQGLaVPascSgrVp28gPD6hbFpcXPckQftgoGfua7CArZLXZ1U",
  "key27": "3hKmgt9CaTfmwuJUteDt6pXqV9fbdhX3Qm2Wo7d2jnCuhQzEzypR5JyW6JacRpa6e47onmXWvRjGqxWZY7gru22E",
  "key28": "3THkGwp3wugbArp7PmfitVJCEEEHagwy91LXtDuLHMDQrdHS7Tpt2zR9PmRjeNVxsNB885DzAtSEiZcSB3a5w6Qr",
  "key29": "4pkgPSSqxD8AxtdoxTAXNRWApjnLXVELdZjPXgipxhbpy8GVBUMfd7zVkPFVJMEzms6crCmXQ6SgBqqdwZYhmk62",
  "key30": "5Q5n5ftY1evrVShZDrmmdEN8WDbm8Dty6xbqXdd6QaRnqCv6jr3YQPc5zosgbvu9jxuGoG2hrQG5zABZ3cE7UZzc",
  "key31": "5T2kLjiM4sTkg6k8H8mVRiACmWszuwMiF9bxrX5vDZkze5ikfWWfWmUCPJwiDBZ9yPBZH9L4PtYVjgsCU6qt5w4G",
  "key32": "4e2egtyCzPZtKMmPhGx6ev4mHEjdkduuzDvpQg5ZCJqJLjeRwS8YY5TmPP873UW1MvugRAMu1GHh2gKEeD7BnfjZ",
  "key33": "4uXKgEKk4XdamEcJDrtb9pVkT77irSgwrgRE3BPM4RxLP4P5VuWXphLxkyeqGj9mDJ9Qhn1iYopzgxA8eQBKxoTt",
  "key34": "2wAT263yvT8fJDUr8yi5ynspnLtt5qL2ipipWHUWQBAchfFgUMsSF6XtVLzwioyd1dVyqMgwYLBvTuH1126rdf3i",
  "key35": "JCLb1w8ebgEG5ShfrbAdqH9YaDXhgMVECJrjNcxYzRNYfSBBRHmFMsUk3pRQmyEtCqGKqFD7U9PJ1P5f6U4qu7L",
  "key36": "4BgCkK6ZmvR9GELEoWUEkAj4ebdQYAkp4YkYiq4qBe1rXf5Z4pLUJFErP1BAXwWQdQdGV7zdEnngCs7MYrU3bpbm",
  "key37": "2LLVq6z6J3X9REWxYuzUjv8HqUdJMmfwi6nfmwBaV38LFWXScqjVTqWBnuXJiMBKJhRPqEXcddgK7BYJfhRFC9kM",
  "key38": "3fmJFy1nJ2L87rwS7LL9L5Ccma7puMRcXkcnVzyo8iLCD7WyQhM3YaehVFRqyM2sHHNfVgeWrncVMq2YiYu4KJwo",
  "key39": "5xUXEaWSuCYe96DtCt4hi6eWWUL1EEydnzv7kkmcRm7YGdsG9XNJYpkXsMShbPMMdMM3L9gAWbNbszxFSMGDPzZu",
  "key40": "4fcvT1S56o5DxMzH5TmtUCAbNBLAcYT9JqHEUiXdwEwUgiK9BQJpRN84AoHtacccsR3V2Aj31ibWH4mhdrcAD7MF",
  "key41": "if2GpPBuzWkXRzZZDf8RSxtbrEw92TGRwyEWjpnfcwsnyziCUrdSZpMThA8KnYhtRFNeiQdEGB7BBZ8D2wYGwhd",
  "key42": "2EKh8AzsoZdmCVGmoCfQV5KYsAKGKmA4f2HnPDymvaWPjpZrrKwQYmqeLuvP5D4XwTgQMXQRFTb1XvqyEXz2pFd6",
  "key43": "23C8s6yY4czycgdRb9TS3eDx1Tw9xBHdvLVLs8JxXphtZUNuzGzZsXoR6tSzTeDSE8HcibB9ZbD5uv7zEKMs3Lta",
  "key44": "5s2nWbRZNXju4Ype2AEALMFTaNRcXFJY49HHGZghcejuSa9MsYGzGo666GGedrm7iMb7PFvW3EMi9FLpgRMygrs3",
  "key45": "5wrPbofBLfDNh5sFudVNj5STxFSg9xuv8NFFVZQ4k1Sxq8NbAvxuBmfWFPH95N9rwHFqQUc82Q33vY9CPFftXzpP",
  "key46": "2Ni2ZjGM8kxavYAJAsSrBu4SgPLFz7fznBEf6svo9Uv6tWcNMXMASzvSD1gWxqWw4Yi4zZyMBZfbFD4cXPunCaxy",
  "key47": "3jwm2FUw7ASFFjwXyvE7zUzY6JtVdzJrD3XA64nkkVsARSLM73TNo4RxDiSSNgqKZR4HcKPKTSre5HiyUSE52Hee",
  "key48": "2AuupWaBbkgPc2N1ZbDPRzEwRvoLR25ok4SaXdrJg9hpm9gxhbNiFty8YC2BA7LEZ7AHPnZnbVeqwu6WQwDGDUPc",
  "key49": "3SEzPz9cXFRecLn9smF4y2V3z3rtjYqdvKytAKVZivY2Rgut85cmx3thHABMwuqXsLeaFfby2tRYJNpMZwsZApVH"
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
