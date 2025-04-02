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
    "5Sw5ybF4W8Zsh7zNeEZFMKjhHk4hWTb4QigWqBD8kPHhiSHnk9yXrdRi6QeLc9h1CCxZLHJqLqEdRyyBMfr4vqqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfmAews4FFYu8Ra3jfLK6Er5PpdiXERTQ6KTnDkA9H5o2Zg1vtrnbtVcmsYZG2xC41UUcwZjMyBdXTpbMnyeK1d",
  "key1": "4xNvy5qga6ERrn7FVxYwgvS2dH78BmsgoiJVfTFTJVuHUvP5ugBbH8gZCtuTty5dK5qeAq3e73xJ2DaumLede46d",
  "key2": "3rj7HAsmbmdsiHXtWww7R1HDpsLTJwbW6apTKsEvQBVSfJBgwPVbpFDUC4x5h4jLbZzBCG3Zsbdtoc3cbijZBEUV",
  "key3": "4HJsohgXWSyXUu1oj9N9XpQ5mua1ztw2TGjdTZCCgC69QyQZ7bCEeC9Fb8jy7CLFxx6DG5JCUs7SNMXgi3NTwfD8",
  "key4": "35T6C3NnX1VJoRdStcfTujQxceMWMzt39gEtDFdYjERVZsEPMhGAymzzRxHj7EVGTQJnT1Agkgmd8aGAhJrawiUe",
  "key5": "4SuvhsmDPLxyww3xoRC2VCfhCGbm6Y5svjwv6rQUgGb9ZYG9m23peFzpqthmop9Awh4kDBaoXWFuUijvBEm2FjnU",
  "key6": "4oEaCHpBC27NsGGpt5Ygw1prYxCgMSPjUt21Jre9BhZ3uVk1k6LRL35Vv7Y9FmPKAodazJU8bSiqaZ96Ebut6Bi",
  "key7": "4V9TuhKZMzKkSVy6r7yLmn9EVaBZnKyYWYrPaPzAuAYnz5DSPj5nKM3kGgd86v4BzEwBg32AqEEQCfuPn6Xbzq4U",
  "key8": "5JopzRzahg7897iJX7QfYGguq3Cq2GmARFz11oevteJQqNUCYfwcrcYMNj5dDABJejSv22SD44yUgUyRaNb7Gwfa",
  "key9": "5RCaMWf4xRfYp4wLMGqZnbpzdEDe6niRMzfhsm1C25ANxxzJFdkNRqk81t621e81RPuKcjoiGxH8CrX6T75NUFct",
  "key10": "izCjVGpbFMAZdtXEFiowzikKKhZjcyxGyD6QQVaDfaPTJE3VTL7bd4HTBvgt633w2vmRiGkreAQHNh7hYeGMehd",
  "key11": "5EffYrnfz8eZmWDmbGTMHEbMTwGj4EmdCkX2t15vTv27x2Eo5V5QjcwfPiFHW8JGt44wgmmpKJqvkCYrks7q6kg3",
  "key12": "Xrc8xzHH1pKsZT6BSbJzRY257X4AHUWG3hWfBTAinX62YSXKFBRAcpnY4dXaxSFT9e92mwtGXwdVbz8aQqBtcFR",
  "key13": "3n6rNFPJJdqqmHt71cCk95c9zVbfdu9d3oUiLyKysN2S8HUUPSRC5bgBYDubABYJVajmN4c2JTWKtLqrwdqKTEhQ",
  "key14": "56Dv9NDySZjP8ZfBon4mDzy2H1P4eZKDdE1VYno7Ky5AUyj8WviWmHcmExdys8e6Hu56RCTBdT9R7GGrG4xM7uCs",
  "key15": "37dSR4h1AZNnPUtMPdems95mcTBhZrJJ3Pg4WHVyUwns7AVMLNeZqHQjnFeXkZjE1P9rgNjguJZ9agRWJWNr3uTG",
  "key16": "2ANCXEbRBuAK5oKXMZGXLgFPxPwUsVi2t8pUaYa6czBCXxwccGMosL8ofm6uMxrTe7FtfxeJ4t5SVCu19pvsdz5D",
  "key17": "5wc32EnFdBPQCuPmwqCvSU152eARrP8UPJg95tzn7rkvQ38ciJ3g4nAespXavSeEE9unZq2CVVF1BSxa8XV23ERy",
  "key18": "26btAKrbFFNfxU56YhaEzcxLDzUEyHScSVhRr4foRky24iLLdekmAoEVLnJNF4iW2gKdy8ZsvJpUj7MHhMkLpjVK",
  "key19": "2P6dtzGcQgzykLSD9moSPgjHr21bNkYa2VxWzsz26a3jWj2j3Q6iKWaEttuWs7VX31TPx8DXyyKAdCZPi3SUawKv",
  "key20": "pLLjP19h8fh2S8SJeZCgeLGTWaXV1TxiSsDGuo3A6duWunMtx7tJPP33EJKCTBR6XMcSwf4VGhDZ9Lajw4fDtBL",
  "key21": "3yQoYjnwhjofNmpd5r43TqiVJZBWeyHANjahRzcwRQBGHDiAEsKkT4RXjgMyEe9d4uhKBUrabeGheYc3t8gj8feM",
  "key22": "5ESM3HFNNoCRSFmLStu7GcPcmEFbU1eGCJFCNdAoMLzP2n7fixwHP1ipJhWuFsWJ5iGber1eiFCiQhguvu9pWHJM",
  "key23": "2Ba9wapGkahuQfby3uMivLBs6T15GxhksJULRjrRE6cARZukXRkidW25XgoxfeSmNUWrVhMAqy567r3giSbwR61s",
  "key24": "54TkPQW21YzGMiD7wok1Y2ViijisFQqa5Jrat5wPjsDRTpoL94MSmu3mvia81J9rVHKCtxDidjfKYfN4YjBp86es",
  "key25": "26DgysrkN5kNL89gsH7ZYwwN9E7w1onaapUUz3eZS4mWenA3NbPsNvhPmciU8RVZdff5FKaPCx3PxoXL1pNwBter",
  "key26": "2GRjAeBFYVnytU4gbbSa1gy1QnYPgy5a4tzjHhTt9YGiwuEsBx9M9QsmPLfMniXd1ujJiwGFFTr2iXjKdAVeNi8k",
  "key27": "1sbouHmGn1sVTsczUWuMsgUurmz44ccbxqsLAgR5h18GpnaopZvKncneGCzoXm8HPzEhtzQu3qAGxaBSwxusT1Y",
  "key28": "5arYKrKiZebGmmcPLpkooh2BgJUv5QUECaXXvJ5stFKPJXy9XtHnPLJHwvwDnhsvreBsTMfHm1ARtwogTaE3J9c4",
  "key29": "49KP85w85GcJVXdN71GRi36TurUXxMMgnFA8PEs3NjzFPwYu7jJGxqznX9SipdoUbTe2rwFiLaYE5VAKzzD2ocyA",
  "key30": "3NTG4jEN1AbGANYwJ5ramv4212W6NVNePfobwPSZD3SYdE3B1p9NaWyv8bgBP7YKUeBsGY4zY3mz4zJg73dnSHc1",
  "key31": "2crH4R4TDn1bLMBtyicETGyRqzoG6D5fiw814SsvHNDZZJbRijfXd9gBB25EzRGfsjxnv53PV2Fgw5d8RsZNqw6n",
  "key32": "3ssMXfYv2azVR1CcGPMVPqtr94Vz4RPfqxF8dsMPWYXCFrFrica5baxNbZnJmvUGCp4wU2dBiksgNS5CHSCxr3Cs",
  "key33": "3DXam6Ld4C8HzA8BSbBXbWwkvSc9MSdqZfqQhjesZPQRP9S6kwKBtcJm6CcH7Lsw4ZmhEb52mRM4sq5FkYAU6UvY",
  "key34": "4ngjT7mWY62ye5qXW7kgc4SppBtBBnh5XZHE8baLV3dQteFqx9puomEef5rtkzNJUUPcRRhPrEUrxszsM1VnwtYe",
  "key35": "2b7xF1TxHtxipGGXow6312kmRbWeJ495s46CFEqggp4iAVNyC9Rv6TEt4WYSnRcB5GEWYuXaWoHYPQ42P5NS4py5",
  "key36": "39vJx1MpmcZ3qqsUGMsfhFbkVDBZzjF5uFQZM9aYpwZpNygTJbUnBA4J2sRS5SfsP5YhLWDuMnWZDGYkQUekDK8y",
  "key37": "MutifbMAgRnTU9FGPbiPoTiAGgjz1z54yRpAuhTV4pWy7qQ1ARGAXBAiwTEYxucMtEyhJpq8EpRfPur5jmd7VXE",
  "key38": "5xxveF1Az1pqK6XkX5cxG2yFeyq9QRbdW5aN8yaEFFRA8KiKJufZwhhKHRTKVJe2BVNQ255ifMXqZz6pQ9aubHLc",
  "key39": "2ePPzNSnmJW748BT4icWfoDs7Wy8695hgobmdAryZZkjDSf5e6YWys8Gj5zywvF5QqQ5S2Ge51H63VMnEH6veCk4",
  "key40": "3KcScavPr6awNiauz8Y1MrRMs5qjYLuC8roapXp7NLvkERACRbNsAFUav5mZ2kDu7Rke47XJSkeS28wzN9kLPqzn"
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
