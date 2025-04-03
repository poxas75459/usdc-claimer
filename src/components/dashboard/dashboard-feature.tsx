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
    "9Bvj4xfoTqnT4QLNYAwLFwmkany8Ueamqd9ptyHRdBKvL2TzwabvTJxm8xiW8JQgwp3F9Jc11d45f4MTybgfF6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfJNUXnQBNiapTNEPzLWRcWu9LbGxoEiFBRjXiXxvqAUAT3nR8rVBZTaxCxGSY6SLQppH3VKGAKdJgY7keqtgZW",
  "key1": "3gtEHRX6d3khV7Wo7T24AJUDr9Un93SdBCnYVEVqDX3YZZgm32xwvAwennBYF3e8zR5qPtZy73YHWFkhuZyDKFfD",
  "key2": "4zU3Qre3qFmV1sqJhKAyZd7EkoCZvaVgGxoLYJXskHPYqjWwaqP9aUSWmri2TkfanVaa6VUBrmkhdGUkhsFNGFos",
  "key3": "4wJLKkXt99rAeSJu5pgByyotZKCsUoX74r7KXvSFnDvRdTjjXkJsKEhy4qT7ZoJd49YjbM3zMm7MQFbuLaXJN8hc",
  "key4": "4WRWAxpjGV2ZYHna5AxJqwPMUakRd62fBKCHQaxkt3YEwZgDZ9onqteMonf3neFGua4H1zvnEHD2VkFSN8QqxJA3",
  "key5": "2iXQyMKzE57JakXYzPttb9fbgttEcAYz33HMS1ymPtJU5Y1pBtqd4qG5TQ56PpucTyKpyRy68RSYhtUpUTVDNN3M",
  "key6": "3nRvEsaJJK5WqgTbZUwaLqP4vrTmHTzG2sh4LvCxJ76Y5BpX29aKKNhx4M5wCPUPqahbdCK982Gn7U6ZYfWv6H4a",
  "key7": "2UFzJY9Fy6Gwns5u9gonfUguR62vgJoTzg71gKhDCBtrcfVywLB1x8iG43PGQ2LpPuSzV82i8BacBLU6DWShudPD",
  "key8": "39zVPXenyf5vjF5QVxcW9tTipfLzgSydcRJJKvn8HR7v9ajZk6oN7SRUmNxmvhhrXHMqvU6SNEzgCkWgiLa9X3uY",
  "key9": "4uqfgF59PTMr3puWfPiWMJw6CnWpPrXf2iWGRdMABQ2jXStjRA6EzsnryVVkZWwjzdB8aVdpRbwdqXVVzr2Hdq3o",
  "key10": "5k9HZsr661YgbLkrCyya8EaBV4UxmrEjQuMP1VHJKHQpUAxA8GhjVT98FgKPvKgQuYCzvZGPhj7z1MxtPMpCDtGm",
  "key11": "yffF6vBBCmabEzgEox6Bw3ZWSHwkiygFQGkwcKLzT1XqQ9hdkXniY5YoujQJXt7XhgZXyWBw9rhCQH2n3wEwjpR",
  "key12": "2cJBJS3vLmuJekPExNTf3qYG24ov8jL5Q98aLyDMnc83kAk9twxeN5Xa8zxpzAt9AHnMHSsezgT1CGGTYVc7mnm1",
  "key13": "24TB2d7HrVfVcGYdiXah3nVSuh5gHMjAuA6DCf8W7brSbyaUQEFiaGCBnQNb9AxUFmz9qcqu7k4tXyMkqgtVnZcP",
  "key14": "4GGTDcxAmxYM5GPDCSjBQEm7BneiuEAiJMSiU4VCRYh3PFHGBRghaB6Pfm9qppi22xuBrtpqSa1RoWtG7ibTboix",
  "key15": "qo7Rrt1VJZSLtvSpA9bEbWK3yWTBBH5E549VvaiFCVbjxwqUepQ4UyHt7uC4ppD6ShrTVZU19pV7nFwSpvjba2b",
  "key16": "bcdeULUDYa2XgvreSgaqFGzVyK8WbwSaZZxPrKhjXuLiFkzgdb8EoDfD3EBNeD1VRVGAqfwBVKp8AZSvqsHvwMW",
  "key17": "exW1j74Zz41dYur2f1t67Qo3mygbZxWEnASVcjDqhDYrTiqrKD6gUQDw7Q1J5yNsgg2ZAN1fqFzeY2P2zzSF8o6",
  "key18": "2UHr6Y8riuGpLShKMfKy4J7rdepaTXWRbiSDYM5YjJy4GGmhcnTqVMaEFa2JkcVVGomARQLNBfxP2b927b86XWRm",
  "key19": "5kSgaipYDeH23eEgYNLJyLXrGkYCD34pdW4d7vK4AGQrHHLBC7DqgiZyc6gqcn9qtnCzfyMvc9uAnRKZT5vmmHD6",
  "key20": "66eVMXQXQ6DUJw6cWaY3ZEvSBbWsMSNKd87MBcvBPV2TnNHxWAGRQj2BW2j2c5vcoLbL35ok7x1ue9UiuS97B6tQ",
  "key21": "5A6GX2RSGJ5q8JJFszjNZic13RWRockmdRznvJpjpmCPxvwDGBvHGnxpU6ZVHM5jDQgdBGP4pjE4y6L5R9onyXcD",
  "key22": "2x2fbbULkF1Lwvm6h1x33HRUwe7aRnGpvkYYpHowjQU7CVaNAsxTvLbWhX8Z1AS4qZGDMmvxdezuMw6EgN9ogG7D",
  "key23": "3pRaExsYMoVEpfodGkUgyKRRtVC4BNnSFGFPknRsaKNdS2t1WXLh8tT5NPZANw15CaqFVyQw4Sy31uJdCKeH41M",
  "key24": "3a7RkpF5itSysPhhePpCNqXQGtqtoim98RkM5MGHKWzkA5WUxrhD3KcVqksKyUeW5j82GA4sgQuvKkJaSnt4WwEB",
  "key25": "5Gj5Eqbpnhb8zLHi8PZrM6a9xcWHiWTc97G4sVCDsyt2dEVWP3W4WW2NqTDE7MwRTDSPwwrwshf38RyLUXA7rj1x",
  "key26": "SXYG24vACg4VJW6FoBEv7LKMhqyYvmGeqRpc5HBGqYH4VrmNz6ou7JuZY67qVokqutPjt5UxFnTPX1a3knB47wK",
  "key27": "s1fj1D4cZ6cN4CctwR5wyvDXgEzdSbq7iJBqDdBiN5zMXVqfDC5sgSFeETCKqCiSGRrfG6PinwdJyT38La9Yz1t",
  "key28": "JvipEMWeeYMS1BwtPBKE6z5nf6fVAbJNehe1QofyZNp66kv2uhjFYUDJyWnS7UrrwuincpGZ92vjUjW8LenDChz",
  "key29": "A8mTrJvK94id9a7r2qWa41uMusLTyhpfWPktDb4JzJA9wGPvoND7ZBeQQznpEK16rm4GtC5ChjxuXdKcGp3a5EQ",
  "key30": "4wvYxrkScCnGj5L1jLYbrSxZMGJR58qHT1fjRXFypMXkzbqwvxQAgAZJyNn3g9tfjUa6WrZVPXaZDz7VwwWcukaJ",
  "key31": "2K9idq21B6vcQeAb3qXKjXectHhPWUFdZMfCpGeRfKqWz17rvWUBQhGLc4iEYdXHXccJTp68B2xHJwCXjmyeKAHS",
  "key32": "2AkxWt26AJLpHXjitgjqPRmETPyhFErLmBGoWQFMoAydC54VLGsyY3t8o6ZibVBbkyDNCZU4GRXy9vCaiCxzKU7R",
  "key33": "3nUr3JiUoWbTbdfphoZezMs2P5znB8fwLyuoqfPyo9gDyU7kjciLxHbs4DfvmttTfXoZ61rdq48e6bX37h926nqr",
  "key34": "5TiwCwSoqkxsbM1CejS4R5qu1Tc5bFiHk86FTfhqnetzDEaK3mzPMrKbmKGBZtvb3o41vji53VjhcxUhNnkLBS8",
  "key35": "sqgU2ZZgEFUXYyaTqKpgK3N6YnfvfUDgGYL3nRHqiiAPudh8tXjJMt3nxJK33e5SvCteq7Tk9unn7XiwQQoNdnR",
  "key36": "48rBbGztoFvV54dqTazQScXrJ8AcsN9LGhXkv5zzSufdVBzLHiUunCCnWmaTZCqLJNa3oWd9TLq3d494ZZQWjnKU",
  "key37": "7oQAYbnxgpyVgtiQvUsgF4vbdoNbnwewzD2AhyMULz7jfC2W1cTmSxXK46F59Da7GRMYC6AGdtb7uwjBX13Rq54",
  "key38": "3J4AbXp9DvR68nWXg5U2SYKDnZPrD7xTi6aGZiYmaEfZVZCSQShQuEQwm5qdtWTjiETA78FVC6AqhKYnARMCfeFV",
  "key39": "3GV2GEdRYdrxPdWCiMBHRUm5sYwt2V2VwTtsk1zVcGMXctf5toJosm8wjTndHuDadfx8N86KsijFDkvBEXdu7QBH",
  "key40": "2XzwVFqKp7DW7NCriP4jXcmj4UTBfUBjxHDKH1PoiNeKQqc8jzz9DHDV85FcSzDKbhXywbtkiB7U7U3VftAGvAsT",
  "key41": "5AKy3RKa6epQACAKM813BfbCoy5or1bw9wWmp8Sm6kxUhEr62424XYRQgXPhzeqz2YjNEU21jd5dsQaoYPAeBo37",
  "key42": "3P5zLdGUZyGzcH4NdGH2e1z9shfHGvLctr9oHGxJfhPDJ5HsKnnG8LtGKEcGwJiM31dmoAK6CKJQtfmYR5oMYf7u",
  "key43": "3Cn2FN1FrETq28DJrxuv3UH3KdzgUmRjorywZcqFT2aeaVaKUgnfNerWRdqmsxDKnL3kEUcYeTexdWJKsV9kTSCF",
  "key44": "5eqhvGYXZwj1Xm6DRSc3a3CHEPvwzFc8XgydKTJZ9RTMEL959R9PReffYE5Jxy8uV4Na8JbPdnXnqeJrgLuZC7CG",
  "key45": "6ijnPFXE4zPLf3TqyhioQwaZJyW7xftzLzJ1ix1xcABMGasNq1q7uNk8qF8E6houzxpzRZy9Ue1nn7XRdTkMjce",
  "key46": "4ESqJi1r3ZM4kW7YMMPTy9uCReDXEJpybdjVCWSQoHuVJf6y6qngYGHTYnovtghVeKbhNqapSpcPguaJzSY9qMnn",
  "key47": "nnkNup7Fk5BeXihfojdCu7dKLv57Soe83VTD4DQ1dxoXprSD5GSvfQvR6n75dSrimtZmtzPZz4qbXxfKCYJiCQ1",
  "key48": "3im1Q1DHwJCehoZHyrGxSguam2ux4mTqW9xZsasRLNEBHU8fg7kTN8VuHZSqeW3nCLG7AUNPKeK3cpgUQEKJwqAv",
  "key49": "3t5GdfVDgwDg1c9wCGXxVJpuDMjfpL4Pt6v77bCQa6A4pKmNoGaWDmbSnD3d7fL9tFCSjwyzkt7PrfcyxY6F4n1H"
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
