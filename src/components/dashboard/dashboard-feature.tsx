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
    "248QffjYhqAnK7rHsAksJEFS7N93y4hfDU98UuFH5njVCNFwpLLeyverDmC2HFSNR71CMDuyh5QC2ugEbSAXPBHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atAFqhnvD6avWwKHbLFc1C1CaywJUjxNk9g7RFJVxfPRKCCE8CWYikFiL4EKtdu2eKzoqDioxkp4sjhEZvkiL9c",
  "key1": "3v6kUhixx53CfwUSg6gWbncsuWuHSC1ZFpCad9TgLoZpsHH1ptFc5Q6Ebx696M7oYjHEvyXdYLiMN7WrzNXHZLwS",
  "key2": "t46poCussszJLB6MRpU1bGcdt3f38A4xRVfZCq9JG6jD8U38FZ1TShAdxLqrga2kPi6dMPAo82BxEgZNM3izrBi",
  "key3": "5jHaYz9DrJxoxBpYaLmBFNgRbAnqcVpPwNAPVTmsr8euwLpqF3e8HtywZhTVmEoFeonDRX2AarvKF2QLsqNvTESu",
  "key4": "2RDQ8Bc1UfVMxxDfYVdyzqDE1BMes3DxbLpH4cT2cUAiCTJWLKfasF8RQ9sYCqXzoyGSxPQ3wCMMfF5mokPD6bC2",
  "key5": "3C1zQFHZFEVSBLM8J1WYeFWXp9EUc2qp8BDRYVgn2u4hR5EHe38wGS6VELYpjcThYcos5YLtKKkjSZfo2XncFkhv",
  "key6": "2fJHo17LHbY8eodiep5onx5fWiHigWt9DcUqsiCt6NKmxGoCxAK2YySRJTBekoHZJtBmpgzLefUdVwAYpZf1wZy6",
  "key7": "2eWDiTzLq9GLvkBWcdhHD67u86mJ88o3dsk4iW8Lh7fwkTkyLyaUWTcv3vdJ5VqKJCKmVUhNsFi9SYCVvEMH3Byj",
  "key8": "4MJhqD9nEXDKH1EJTzJtyV5mQe7TH4WqQYodZaZ1BkTnieWT8AKfGJf2VUH99PugK7DxBZUvUFkNsWCk8bhD8B6H",
  "key9": "2bbbt3zTWUBhtbibcx257T2hVqggzeo3hKojQxNZJijEZRtU9wPoXQBVDpN8oHzCfhMMzYYYKszd5cqEXvkG5Bvy",
  "key10": "3wfSHA9KkVU6cdDAPzJ2fBUETZA3dqYpXnAtcfoGzsYL9A4t1v51CgyVGcwFnGFKKkAnJsCWrRdv66u1xcpcDcXU",
  "key11": "5y3ULQAbcCARnjdz1p9ihe9HRB8oyBPsBs9oGhBapR7hWt8W5ActYmtM1AH6UmZTKJPjTkkcvchz1q9Y8qeMxGt3",
  "key12": "36hkAY6tYyFkTW7m1R9G5T9vbrXaHcetvmHsyWm9NhoQTv6TNDKzMJM9wMT6H7DUPykvbSswen3ir5PT5Vqb6FLN",
  "key13": "4YUX3rUVLwHrkUszmcCF3GDsq9VtrcbW5FzTbyhKccRz4R3n592RJT1KurMqRcGFQrgCp6SLhTFnDKZutnqJY3o8",
  "key14": "5aehsV2oHfJWXYPKXQy2HUEXPVem7mnmGfQFfBteq6SDt6sKJn5rNxbVU7SCGF321nA2BD5tp2L3PEgtvyZvyxuM",
  "key15": "5HScGAeabDFXRYdKRMMNf8dH9jpdJa5gKndkwzhowTFQDX61iCGiifrnreS32RPELghUSvWZJUZUkroVSwFWzAwo",
  "key16": "58pktZ766U3oc8DbA9JLX1FJsD41NhTjbvRoPa4qYjLp3wYhcdqHaxv3tndmC9oFLqck1C4bi8gAmLwneF2ZPoFs",
  "key17": "44rMjhE6ZDZsZPY5bDjw858xBX1kqAJ18h7ZRupUDdTWynDviakBsgXpwUfatkfGjp4qCXYTehPBzWYywxuxfX2v",
  "key18": "3tP4qtNxQnedhRzB7KnCEPm3RjuvyHgnVKCRKgmt5ZoyhnH31Pgi3Krna1wQJtoXc1UhFWFA63rZLdpzLAA9bdYa",
  "key19": "Mxz2mxuXWcRRF99ktakrDZF3Y8EqvYAS68L1tuG1iYzLXGX5mFiEjdb4yYL5zASvHfSxfsaDsb7m9KzKLjwa5M3",
  "key20": "5LGBQqUGuMvPA5Dc9idXhoryUVkuvZLKhoagVQBFbZpWbcW1zVi65JhKBhUCxXdtGNkrcsxFCB8xLBXf1wT7CCsP",
  "key21": "56ygsUyq6yJWFzonmxcRHHhU52Px31RM3VhgA2uy89YDoHW8ZN66NoP91D92KHBSqGxso9WftWgrZS85nNAQraY9",
  "key22": "5NMHq196s9AwBvTwF444VXbishHWLx6FmA5CZLfDcAXhxpdRNW4LnpaXu3edeWrrR5tX4FZdw4QuQBQ7zdL9A2tW",
  "key23": "5vZbARbkBjfV5A96wtudzEXSSZgRpt6oZ7t5PASonDsWvjDCACSX4K3ttqykWAnePwfjwQuBfsdSvWknuugryS1F",
  "key24": "5cC5umBQV26F2J2WR63F8TfTUWfzvWtW1RvW3o6EGRvFSqt2PHQxyCaRm9zmKSTUboVdPDSLX7uy97xB4o8Y7R8d",
  "key25": "2Wc3tyAC68ajKao3YMjkyJZVp4hPT3NM4yEMP4grq2UKgXVkfr7uLHrfYqmmh2rQZ3kMgTiV774Z7Koaimkiy8uy",
  "key26": "Bqk5w7LhYnMPzWAyQYuVPXMyjmvusxZSAHFwTT5LTrAMshSDgPcS7Zr2PaeeRq1mj9A5jFiRDv2jRxYh7RHi2rD",
  "key27": "252eeJ8U9TyyDyiRQthNXisupSBVrvXFvj6tg3Q82PEYKirwagStVJKYy1UkVXp4N9v7NvipYZHBeYok8BFsaMxn",
  "key28": "hxUuRfjmqZHqSakx6X2QwGNBrH9xrMG8G5FhEMSA63Tpanz8rAkpEY1pcx4fsJywEpSNepgcWsc2ScQoiHiNwBy",
  "key29": "jryj1Vc4r83BYZv2hYjoAyZbXacY4xR9ScHkoij5R3gLySA7N22AT5ci1Ed6TL71WnTcTvxCpkTvYPqWeqvyMnF",
  "key30": "4kaAtiQbrXDZFJRuFZriwXVA9cwPPtBhe7Rz5hUTb3uxWEv9MiKBgraa9kEbQy3yGY37HPwnb6c2CBhLjGTkDd4A",
  "key31": "5oMruPrtGu5LHfPZsc8y8Fbjcaotzdj2SnLsyBZos6ko5kW5cbMi7WdZwe1vvvhkcmAvzK3Ej3AjhyQKfjxYiZxt",
  "key32": "2xWkvzxtdXqjMuDiCDGC8ELSmk2ATpFSQ4mZMdLjw3Sp7JVTqdzRvgAHzDUfDCfc9HArRHqjwhtzSC9dgyi8qcek",
  "key33": "2P2PC9JDaokKoHc4S8uzxyti8M3HgcHS3vxpQbu7AfDFwx6CpuEvjoiHSmr3zWnbfnrupAi7N3r2sE6idTRkpPGj",
  "key34": "5UGtepzAaUU8h2cCNZtrRcdpTUUkuqfGCaWJ5qqSVkP9BMZi5qa4ihQ9rybBzw9bdepuEJcYWywD3pQmxNkQeGSg",
  "key35": "3KfPi8TcveuxGMNg1g1yy6JwPwQWuxYR8yTv3dpLfs7odpuurzLkNfq8aiSSvojhynLbR9YXU8KuwNiyfsNQxbKN",
  "key36": "5Keks7wV9YQUjTCXRnhKJrsvYpwYuZn45FT1p2C4BrVZYZFzTSB9NkngPSdomeDTUTJsMBXR4ZANNAbx9PpD8ydq",
  "key37": "5FB4Bx6nNjbmmvipf3EH83mLUEfXzpiyrhU8qu4kSzUhNvjN792wwDefeUCjb8zfzZn2Wmeq8AuTnUi8JnNkJtrN",
  "key38": "5CYQTiNJsHWwgUN5WxuuVndnQNcRtXJWfXvyxY7xj99BuMiwrTSkFPVzpJGoZq6Mfey7LfYwKHvvSLCiGNfcSFPt",
  "key39": "5n4fTgXUAL5867nGTjY2xSEwtdtDJWhwumwKsZhwgL6yqSyg2dPfbXPoWLtQ44DEhsRph5ScDJ9HGTNvUudresLc",
  "key40": "4uALJEt1ZNhj5NKNuFZQRrkWReNay18fmcU1v3ZKN99s9hvRRKWXwYQpAZY7CPh4DmboTR7iNsJjVN5bknrBckM",
  "key41": "5XPuFaQ2iywDxCJ6PJzMVXB2YaLfqVub7Rgf4W2TQDc6YyBaPShGSZ1yWTmwnyUf2ZAhvhdmnBkiRh2S7s2H6Ejt",
  "key42": "FSSk7FJvYzmDStQJUkjAYZwUrV3eoKWBkV9oC4j2ENm3jTvt7rgB3HFNAsecLrFYKnThYmq5RnPMLZGpmr6vJot",
  "key43": "2BCThTYNKvapNedKeJRtpKW3TqUoZFscxMt7sMcYD8CVGVS4eRNTwnqkz5Ccc379YMZQpzy63qAVTHwRdgy1hhcf",
  "key44": "62f25UmneBRLbBrem3qo2eYs9gj9Pua976MvY4pNFoBE7BZi66LMaTMWWunfEFpQXj1Nfzvitm2hCTGeD9FtL1gU",
  "key45": "2mRGBSY7MUCQyGbr2ktfV2So18PUmo3QV1SFePucRABqfRsQxco6eiZk9FkrQyVUc5oAAU9MFq3MJa3GFTXamEkB",
  "key46": "29By7zMPp2t7n4FvUn2EmyVtjRRSZKWwZST2WDirJ5v1VXLQLW4kJypopFP6QyPZygV329Aufuxdz2XJiaiVEMnU",
  "key47": "2UtAy6RbnEZi7jGrP94We7D1YNVwTVRmjsLxXaN6h64Uix5F1WUh44SFBQem9BQabcNdpdFTRtPB2m7f1us3yry2",
  "key48": "59ULQNujB8tjMNFVyqj8ctbvLbHWysYJreCRBptqiVkSg5pNbA8GJiZ4fqq3YVmP3KapKztawFryX9F2RQnL6B8m",
  "key49": "n4eDGaYnvzczpFEX8jQhkzSDbdfHTrNaa3fQSwZMHnPGtZEinEVr1yGuacxdRukLv2dS1YfLRydqfN4WrMYjRcw"
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
