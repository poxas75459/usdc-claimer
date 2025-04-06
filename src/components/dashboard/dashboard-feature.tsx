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
    "2rAUNgXf9gzzcw37qqpYTeqYTwUjfKh5shckkibbMkKmydWtnkpUU4DNLnfbBiBSZHQE5na6w5hDyeTnw14uypam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qF5795AFNsvVmZv1aTTWNhBcK5ahc6WAZtHJHGzRJfMdDkv5yQbtnXFsvzwSPi8jomyj48sXMQjCjZLEdPL2jeB",
  "key1": "2qhrfhhrdEtjFPmRW4ShmaCti87JM4eijFKsxH1NFHdHZWqiXakTH9tyr87NDGN7m3E8Hnr5KYwBxvAjn5ui58ck",
  "key2": "67NcvSYNuLGEDWg7KbFVkvgMV7jkpaxgSNAEswjEwgbuyHWFnLR7TpvW49Videe8AYoNJ1yXtvadpYDAy4xPNui9",
  "key3": "2TVf2827rWzF5dM15Tgbf55adXfzxsVDoff2DUkWJpbq8fFdZqjDaS7vvkNgBmm58HUNvHuZK6ok6dKn2TnCieNb",
  "key4": "2JW6n94132xRUpKBVL8ZD1tNU5HJ2upjedCRv85Kwc6KXnamgTV5GnXgaNjP74ncr9z92r5HRAuFXhi2jz3cH2at",
  "key5": "D8GYiE2TS6NUEyMzQYTZoDRGAPpFpBX63scjUu5YyX4rzUkqCKXbVBtLFBCZTkDGrLMZwuh5s2Qu1ALb38fPyCC",
  "key6": "4CMR8buK5yRA9tJtScuv3in2Ayy3jBkn3E6rrK47BoGtkqRjHVGio3qaAJ4qTjJ5hS2Pj8kaWPKrb9CsUAT23JfX",
  "key7": "5mW4riXfBWCzzVp1M5z7WWSNn7sxPHX9iYNz6dLGSLTW45sFF4UazrvvSeYXoyULZWWmKG7kQYkm9iiNJcDacaTA",
  "key8": "5sXBm12Fpvee5QEJmoTLekdGKyhPcbNy1xXBPb3RN82iKhtEaXpMUAbAenVodKK7T8PcvFfaSgN8kPoQk4dio5XA",
  "key9": "5sdUnYhkNBuLG7uvDW2U3nsgwbtv5tZSyuTGid6fVcoEifgHFZREKmgNqK9aoLJzPVL3eauKHc8eNiGiZRgdpRAH",
  "key10": "3B9jcVPpfEcRobQakqLHXNcEvg1QMY3LxymAdxqfXxiUaTyJtRYEyLR97KcJYfDAYdcoif11vDWC7wmJRh4N9Qdf",
  "key11": "5sGpJBCpaBhnDNeXi8hV8N24u1rygWzkQV6EAzmhTMjG4EC74mLrnVccqgPgkMFL5NoLTTvjhzrgzTeh4WKpW9cY",
  "key12": "5vX8ySoBqvxhBq5MHdtfDZQouFqCtZHQr1rvJihK5MekrYkW6CtJmWZnXpRaZdEFJXAY1QG5oB693WBWad5K7kQu",
  "key13": "3pgMw5qDwtskRcgLc4qd6pmau8S3rpkJ5fmQwo8GXw3Wu8XmFW6C24h6XRdtpCDfp1rZ6nGLMGaznPLoZxsn9aiL",
  "key14": "55Q5Qq4kTXbzFPFb1QBt3oP3thX1KLvStWYcM9PrkZtUhvHgGtCfMus5QE838zTPLURS9xC6yDdqAneanAEvwMbZ",
  "key15": "4Vfheqfkff5CDzKgpyvzQPv722TXzgVK31X1Q9DhCznPDsLr99T8rYnLjkmB5NgQiFNDTVEFyKGeyugEFwFBTUnb",
  "key16": "5GXUQvSpLqRDrDv2tFfcJqqA1Buus4YNpcL9MNyvwfqfuTFSJA2pFskBBtDHwxA5QkETZ8ifDisQrURPtF7YXwK1",
  "key17": "TXTchZgdQec5rRdk7cbcuTqwWGdyrQ9X9sq3hkHf7G9DVob6bLJJAEwm3ug8C1bSKsxLyc5tgwGEG9T9HzkRCyx",
  "key18": "3b4oSrerqWw5e9oadFy4UhpguWcsrBRqPe71i97obRUm3aGFXeTocYZutgwnrHm6NkhjZ4cuWNwAt8CqKaY8hnFo",
  "key19": "RtRMGW5m3ZCj5fTnS8G6uXmpuN3UkDRmthMaRAy3HUh4DerEoJVjzDNngJ6CeSKBCbfcXEmqd7Yq7zoW7GboBHL",
  "key20": "2v3fKKMNko4hPi3N4PN9ZYJ6roAbVVLpSu6t6oXDnSMQHPaPyrcqZcEmbkBr5V68oCD7KD9CFoQfy4aAHWuL1BGo",
  "key21": "4EnCbmvFPzsVf9JDgWGftUsszvnMzEc7kLhWqgdCw1MAmNyQ4LByy91ELGrQH22yo2Q2JiuqcVLoS8waesKh3eBF",
  "key22": "42Bokupe68CbpZvQz8kADYHzcy4EGnts5UUeRfDiQBiB68uw5Sq5F7WLbvxussvURzEWRwqjd4FiJt1QRBgPzY6D",
  "key23": "3wJ4jY24CNzEk8hyyy92kXGixcMQWLEx8CnBTB8oCrFy3mcvR5mRf8XXDFeU6ZqqoXnA7ZB5wc5Ma4faKmmxFRhE",
  "key24": "3EALrcELfPc95q56KjrgjPSWH2XsC1Uztn28pqUEE4WiuUTrhwdgTT7qr9kHkTK21pQHCoZFyu8cGwrHu9teXTZ8",
  "key25": "3SoLAyBYHiDJApzLbmLMR8gmxEWop9HRoUFTDVpt1u72LK9wLqnhXVe78W8uNzqDeruPko8HTPKGDxLHdzyLDRJU",
  "key26": "2DApYiaMMog9FX7223KtXbvuj5J99eGBv4hWmajKPdF5nbFZvrHkMEar5YXxKUP1A8gfC6mLsC7s19oNTHTZRZjH",
  "key27": "5e5eQqvSxqDGVnTuf2Z3UN8t8r1TQaoggGDENcen8YusDk9ugWAmBsZVofvVgQNYHUJYVswE3EZ6qmEWQeAkYTK9",
  "key28": "4kpLbPKykMyG9pSwz5fLju45E3XTqQPEAeBKjWpTXxbMxj1E9yBu2wCGPHsVCoRpfmubkCD7pCTpZCEmTgNjFpGE",
  "key29": "26MYNcdssPHv2yypmRPP5yb71JqT6dxrxkKzFLtsvJmYs9TbuFB5LEnxRq61JGgCK6onSpJKfvZ7HcW1wcvKvb5p",
  "key30": "63vLUJHhxxmdxYmh8Br2asLqkirrtMABJRzq1MTz1yzVsWShKcy6Pfscte5gQaQYTsvSEJPqpSm4xuiv3LBEHaUT",
  "key31": "4nAmfJNjBbaEWEsXoEvn5UUyfZXvevbJjhNk68Sq76NRwhCh1G379y5VD9vTYLVnzEiMiy3GS6uDFZfzosZMxAky",
  "key32": "3VCvNsVPmp55R1E2jT3DxrYiEACv5g28Y3RrKk6gbx7RnNa6g5EavWB1Ryi36opk5kb9JER2rcEToXkgMFyAf88r",
  "key33": "46jcTWMX4QBbf4pCwLSVKNDWvu7eWy2YxtXF7Jxk9gMJv7pHUyjXqUFrZY4sqFRGrRzXsWwuFnjLPoqDtG6eRbRG",
  "key34": "VnGzGrsY1MWProTZ1P5UMY4Ktm7mqGmBihWof1c61xqsgBJnr9MQ4Qqa43D9HVGwMamzvgAbfqiNf9bhv7zqW8H",
  "key35": "3ELcZve6Zao66N4226b286QtxQvDxGfeL3Ui4unwFhGsQa2aztkNvvHwNGK85uyVi3W4K1NKxT8ncEAiRDYtDBUc",
  "key36": "5GR7hGCoybNjRyrpjHo3K91NWKLeRHULQckU6WpLovSVEjH8k16kkKweDTZcjuMjL59tZwvyAup3ivmsa2r4XS3X",
  "key37": "65LWkigoY9HmLnAMuA1psrarw78V6P5SN5Nj8YLo3rpqd7ascYt9rXfXY8jNq8ri89tLCVUG3RMzZE469MnK1KGa",
  "key38": "5aBJz5r99PSSvPFu4DfwFfCE5Q8L1Bi6DDVweocn9kgTST1sF23YcP5H3Ro8Uh13JQi4BjPvjsbrhHUWA1roUdjT",
  "key39": "4SuFSfaFN6GmdHz63vqVko9fGAGQCZe1vxpWE3TdVaUQwUHRL27xNqunVJhbpgjLpYz2KhWSQ4XoW5NR5KTEUD5i",
  "key40": "uG2odrYGLHthGZ3jWcVDrp4D8JWKxj5zQxsyj3dJu8N7FgzS6iMZRcaVSBKFr7WAPvNRnXrnhotnCD2Yc4dLDkK",
  "key41": "2uCkBPYhTJzt8WjruXj9PGNAgWYfnFKyd1PEC5zXtoyjp5zXvB3PvWhphc4jMjzNWwEu5D67ChnBNvLqp4pjt8sH",
  "key42": "57vLh7VCmC1vsEkKqQ7XyxLyhTxYgRnnDmNz9dihcn5UhU6L51fkxEFi6RD9uxx3bELxKCDomQa1atQJ2dkYt31w",
  "key43": "2c48M9qmdiZcGbY6AX1WxHYgkutwDpayzoxLSsrcDn61CEhMX57jnuiX7HKQJ3V1YYe87avKZypSvECbzPkZ8W2h",
  "key44": "28fLaonjuNQWvDwpZzVkQGB1UvLBJAimPR9cTzo3Xc9M4dtVyCeJJw71JLuUTmdQHUts4tV8zBh7Kmcdn7iexATj",
  "key45": "4ngKGjxL5hWHP3qeFCz4SpXZzk1Jk5hqZtH3N2s1D1RoAWhyfQF9ZPTgKuLR9CT3msXHbj12Xt8Q35MZhgWUuHWD",
  "key46": "3U1HCoEPBCiV4PDUzMhiZG3owG3aaGdxbjZQVEnPWVHMkCDyDiPzJwDscFtNRcijzwRahtngRvB6yJCLPLxatZK6",
  "key47": "3K9beFvqpbCgoH3XHf7sCc3iieWCixjgLrMBCkd4uYrkbsTjsGmnT4v8qnv7rF4DDPLN7NKJZayzpgv7gjZzGhoq"
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
