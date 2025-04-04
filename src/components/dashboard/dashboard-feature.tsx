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
    "3PetJoZ5TEzU29nFcDaPT4m1amiCrUjj323tTRdkU8ZSvug2Y1RpJmPBAGaxprPnsNrPKQVfFUPVSYc4WPz3779m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnBkY59sXnyGVyKifBYFSoWLGAkRrqh6NnXsUYtb1Bzp47Cc4Dhirv5ULPTt5wtiTVnjbmDeynzfikYnjY51Fho",
  "key1": "AiKJrmC5SAkki6npXwMmC8uFknADpow9KqHDFB7dkKvwjHxMRydcVc2Kx62hhMwwt6UYjyZUTJ7p57HvepziFyX",
  "key2": "4447hhmZJ9jZo4JBwX6pHdvLP5x8gCB82z5gMRSBcpaSBiMTfdBZpNz5Gxv5Z1tA2uiEaWHFSeUr69RiKYvdZ8Gv",
  "key3": "3w6YMAMSLqnXnnUUhfzgZuj9Z2uXY6vrwQ6kxTbGFopMy8xjqQjipznQw2Z1uwEtWLeuT1D8iG8zmuZPaPUU8YHk",
  "key4": "4TiGR1h9aB3A6MUmiSSsvCH5DWp5mKDgLdeAcRgAuAu9FvK7g5odSpabshvUBjpSzgefE8YEVs6PgGHffvDAGsHm",
  "key5": "3gdAQGWurU77Bvjx8ohY3bCYAZEifYGgmxwpfyp1tnJRinep5dFE8JZdhGAJmXD5KdHUcFDYiEGMNFpsyFXyY5Kd",
  "key6": "3NTXigxx7aTaUjbt3CPgwgbGYKmeSgiLgi9KELz7NFywhHHBwdQsN5h8tx8Vpno5Akcf1Gg6Avk263mpxr66zNu2",
  "key7": "3TJYBd4mQGDVY9JfrUXJBNHDNqFhtKYj9UEXdSxXXxzRqtfDXkLqBny1KqLe1qLPxmbW8ExUKoaqsYCiwM6ChUMW",
  "key8": "EErL8ohGKseWGFNT3nrEGH3qnZ9XBbSXjyYtpEJMdc5sc8FW2EfRsbfYaMozA1vBFjioGArX1A9mctxoRffv8aw",
  "key9": "3LGjJC3vigXBLa65dfhFGaAmeRvV4tWHtsFsaHzeefY13W3GrdWWQtLHrGm5umwEotaUJM84BHjKY6bMkPjSs2AG",
  "key10": "6THVMBVaL6Z9jGmbXwjSCY2aFdgCDVBKxauDvpmJimRtVfHFPG9yhAPvhzStD7gcxAXuMULvhDXE4s6DceAr8ro",
  "key11": "4ZEnVksgZQm5izwCcKasH4uhVGUTeTP2ob1icJD3NdsfSxmYWkvxyrAjEk4afucgh44bnEM39QMt1TBGnrg73Lni",
  "key12": "4wm5qJp92xtDgTpfPCR7q9J6bqT8PfAGVASbR13CB11SQMbLj5P6WNr1XqGQ129xehUUJSmYU984pZX1EJh4Yy5L",
  "key13": "2Ddd9jGpvaHSVVYFLhgZkXoe16pFxktgvLhMaE3G1JsxwahfPJZZKJkffgnZt2V6XS1bm5qSXnVeL9XbXwVMt6Wy",
  "key14": "4Tv5mEK9g9EZkzAQMqAHRGEn5ZDRmonrBVdxhmgf4rjCfL74X2Zmedgimx2ZEFiqkUSZFrXFqB7FxHHsCGZekCi4",
  "key15": "4ogYpyXcjKTiD6FewBjruWmPDPmVryhDbLMmHWMqr7RXpMuAcyTgx4Ng2Hv47VetDPBPFJbSWkRjBuTXvYzz5YH8",
  "key16": "3kaCtYPzLuhiwKZKXeMBSsNtH3PcvaYgToGaPZo7m1Uqne43oWoJ6KGjG8xDPy5KLT9AkMNHxok1AogsQPmWSkQU",
  "key17": "gh4AtyMm4uR24Ut7RtfLThiUD2DTh4curGubK6qDWL25V6rMAXiGtvFuLT1P7NntKtPjCdnH7CCpGiEWGaBJXM6",
  "key18": "5L21u3dp212WrzysmrwhRb83sKDCnLUAKK7s7XLtTscTuQBVtgvk8ZoesfDsw71tJSgx1qtL297ZoDo7Xe1gZUvE",
  "key19": "3w21wm4g2d4R1ArKyQznCmZCZeWdyo1MnLQRQcAvddbyKcaYgDYMw9HrUwMgS5WAbTwmpswAMiFvB7FWqMHWnewn",
  "key20": "5ivPNvKq69gcj7BLEFFoGNZZVqQgah3givG5b1YpHJJgypbsmYi2DKcPvybLYDdF97djHVEx57tVk3xipeQKap7L",
  "key21": "2Wb6ay8bDyszVJJKLFxC2eWGSEF5fCHVJV7TmHtpLVyuZx5DPdUxZTy12FnK74YH3NPnopkhBAhb7qQaomeZv5Do",
  "key22": "36ggiGZxy899wSr5qr42EPm3kVrS51gn5cwcTpn2bjCpjPfTQFxdeksQj7AuSpeit4jnkR4sZ1tJB84ncf9Xpoke",
  "key23": "vokyDu7uxNGfBe9vyUQEbo4kjzoUSHWRJTECz6NXZ6Loj42Hp1DzjKPQaXL7L3GNpPufNYKBZYj69KcSt22WUDW",
  "key24": "2XitwyEnKM41yip5niGQcePRvUhQYPnyjUBNbXHsiozaZAymjkCLF8Mx6biH2VBWyotYJsmNQYNNkBpVv8DLwCtm",
  "key25": "5QMKATyUtRLoVzEVv7d4MStvf8M1bsyEkFLHkhW6Y2vvV1FZzG8XRghhv9HviUDkKSkibGFHfgPF2vL1ZTZCHZ65",
  "key26": "4wPS6iVUV7AVyEjgA8GLr2vREZgFxAkCSt4zELR4FwzER5k1AeamStBSAN8eyTQxDYkwAv7nLMwaGpBGavyx8ctQ",
  "key27": "4Rois3SWqcBKz42BWqcR7xBXpJUe37P5htZbkgECoRtKprYvSP5QkTgfcjXJJgUMrEJcxwUnTeoEfPzzV9BxXeV1",
  "key28": "42f5abp4Ki3UVkuuTtjjYxDw9GfJipXDM3YxQQcAXZJiogzttuwPKqZecTrj1XbrrXeYF394CUqEWGDSgqnGEDJ7",
  "key29": "36abA7sWR3Pg6QR2cTWCR8DFNv7yxcSvFqGFntZSGvuYAfXCfcFGTu5UTMNtwuwhzxHbdf3KuwQi2pXadNsHrxs8",
  "key30": "472uQfMSUBQfM3JQ2doCUgGjpLjDqV5v5WmAEKajZui9VGDa92huhLgakdGupS95fzBUocwxBnQDpj9AcAgk5k1U",
  "key31": "3nerrNKyiuDEw9Q6emzGXH2MmP2RS7aRoQiV8kvSjdLu1HDdgBBYZdbEwfQgDzLABEVLxQQCKdjWNfrUnY5TUEsH",
  "key32": "3R6sYbAnRwBdDHF4eNGJMYk5UBPyupfwkYqRYW3n3uc8t5bBVysKQpjM8UETckuoS5u9w6VQRXxCVxSTjAxc9yCD"
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
