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
    "sSLqB69RUTLuR7LEkKjf5b61LYnMRzDbbnLLgCDfAGcKDXQAJM7om8MGf7kNwU28YtbU4fRcgr1CRz8hNXSN4MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTzjVr9SyW7YP83q2PCEiRMy13e3R2eV8aUmWxEnA49ErmF9pHWvYbyado23x4DTGf5L3cf8qfrps1HKNa8e1zi",
  "key1": "4KTmFmF9p4SJDrnRAAuAzzi8aRPAF9PVEbnprVpV5WLtyFUr6UABqXjczLfiZr4CWJdj4CWGknjEh4sfbiqkyU5S",
  "key2": "2rq1U4EHvbpkSSwD8bW5PFkG9svYrV3vfQk3dFtvR6gPmhRgFWjr4hf5RZSxTBaTcxiW82Pyf4Z1VSF3q5me6iqm",
  "key3": "4MsSniap7cz6yKLzKkuiUE1S8v3j7gULtsNPK7MrqztvDd9t8GE36L1atNBrVRhtdPfSoTcCZM7KubRgTxPC578p",
  "key4": "G4pzKsLugyQFqGjw18RXzjBD8q4YXuKUNPK198xirAKEfTjBM5zda3scBBE49SZ7Ls2U62T2G6siddN2HBouGyR",
  "key5": "2SVxYkT8uEL4L5cUc7x7yL461rscmoR5nhMem211fvekmLf5BU4c2REpowVQnyZk22qFxd2hkAuhWhdQdT9m7DUx",
  "key6": "29VA6KZ54zGCE4YTBWPN9TzhhPqdcGeFEQMrKfXGSWDGR2Eg29nqzEU2yttDFcNW7rp8TPu4PAm2MhJey5zRmFk6",
  "key7": "ghVsiHj7yeyaSPEuSEGrKAMhLVE9dkUkcvN7DW35zc7uKsSx3CRuGxUuoeuBxdjiNvSeufi2T4P5jEqDfmHpMR8",
  "key8": "4WEEekmAUiZkpHnnPL3VFKXVHShUe8VSWfkK54FKnbZAbrRUs8H9EbYCiZFgA5SttXF7ZcMFenDHyDGJEbuLqX4R",
  "key9": "51YLzmtSbe4hRbAFq2uw6svBtBdgv3PnACWMM5jhYP3nbRDqoapfSxzHeUJKDudtU3C43wp95cEXEJMASjyRMgRM",
  "key10": "4bcKcGSMhG5fXAiadcTexfM6vM7tpCWGU2nrjEyjkkkcT3KmmmFtgFDaugFnkzCPvjXStM5GT1tid84H4WtMRdor",
  "key11": "2stE6iV96josmVcpCpzZK8gdx8k2xqSXvatAkH6LCDjaYiPRXkKtLtCDLrWuz3eo34JbxDwzVMdMFFkZqeywbQfB",
  "key12": "t3bs94iqhjarvyNfxafzWix1uD7kEg31kZpGgM83Hc6CopSPnQLR2GXWr89YF18ci5uKL7LrpeYLtwbLGFwzYaX",
  "key13": "13naN8j8DN7rRRuYVQ2Txxju4c89wnq6HAZeyt1sf6gnW3XBMFwBSRVgpHNnUb1gdSTrvJ89bPMZizuxdEMqJXp",
  "key14": "2LF7QujdkNXmw1U5dLs92FmpSqkfLD58kR5WQCYEqTzyP3Edba9KwB5VFEoz738hmZHGU8EP816BXCmoRPgdiSKK",
  "key15": "2t2rqBTnSnFg8nhLei6zKXaA2iRXMcE9pVJhrzKVVWE9adr5twmQxhc2VAExdPpTVpKXEBfGJhdpS9vZTvGgoyY4",
  "key16": "NQHbAvQwjnccgZFCnGaR5ySvWyatW6TwBp1c6bUKVxx1RUQazTdmgHsEewvfcvumGLVmaBHPCNZTs5Vq8BtCQQJ",
  "key17": "2DakT6fiEbLAtNqw5wmYgB2uvEvXvz9ZxGSZRvRPu4u7UvAQ2Dhk5zy16XQnFedGAWwkpeRcU5spWRFZfi26nedq",
  "key18": "E8tXffwFhkHDBtCcKtXrFaXuzVwXXywanyUYRc4m3MD6a4DD1URCBa9F2VfF98wTwivdqaepSscxcBQ93qsrFPT",
  "key19": "4sy3ppbiodX74Zox5ZsME9ANi6sepCpjcncQKamy5woyEnUBseQsD7FoagPv53pA1RdJjwggyPgDk5EPpqYvT9Bd",
  "key20": "5NLLxG3GRQVG8bRRhojptYB5tL6ikwnw1dfEKbqSAzsds7jMDs2p6jE6HKNAsuXXnTcsFyU9vCfpaDq836AmHbDJ",
  "key21": "3KbZZg2Nxzb3BhZcuZSYC2fgJw3nvWWPXLhNmZFmfC3BH7Yt5DfML5CTEiddMMsPLyjD6qNy6yPxNa2Wn4iL7AM5",
  "key22": "44K9QrVAx23yVw61WiDDiVwBRkqBXuUgifMJhS1N2c74nDNKkcCcFLL9aGHrJthLMErWNeHrKQL51nzBtBQrTKRW",
  "key23": "5KFjmoDuTRNohZrxFir4m9Lu8efseBEzVvLffyDUUmeQWptQVUF2D8RthdbyAnfUPhzD1K16rsYscSJb2puUUJQ2",
  "key24": "3Y3Q3fEogsnKSpQJQFXpY33GP6hdGYA8rFruCpezteHHK3LCE6VFvCerqMpFVsKwgBxdPbgXaB52LSUYD3fwhwP2",
  "key25": "bDftc4SnyWKBVHso3gePhqa3NxnHwAxs41HYJ3VBkm7GwX4xTQniHe86YxajLb2mnZxQJtQVdPAF2jMtZW9g631",
  "key26": "31Fwo7XQ5xNSZ4b9366SLnw3XDmVzFxx7KL8tJiyAc72EyWqPMfyHwVsV5goXESoxmFtYn5B9uFV2evNzreq6u8P",
  "key27": "eQUfqFCeZZy2ETyiZAzG39X8qwZ8pLcWGhwwKNMiyrQjAK93LeKPTuS8jU7Ae8nUecaREy94rmd1ExQPYWdVk8m",
  "key28": "5BXfMrM1EiwTYPsStvD6uFFvNnGEmDCFkFG49P6BRdKexRDk6AdhqYHsLXDd935nLvZj3YLwodgta6c2aAWqezxP",
  "key29": "3XX4CexSdPzXHs7PaZdrUuNNhdC6zNouqKhzvbLzvj9cQb9v8nwhCB6Pf4BSpSEnLLxhnkpBzmP97qiGmt98SQbB",
  "key30": "62Rn6kzZDfwHBb8BamDnZqwhtCNPKULxJfcE2dqU6Rk8TBrd9VMjQmgdgSbQ4fr3ebWsCxigcigCaKCAPwmL1tks",
  "key31": "2Lj64XKARPFvYTURohPeGbbLoe6mL2MPTASRib5wiT5qf6VPWQtvgCPy6H5EDsopxb4ixMzJSYXjo35zWMtyQTSr",
  "key32": "2xXYJ1C3duDQWfFakgkRHcnqLFrrG2YwuKecAB1DTwtNrqQdFfHdzUwGTmvkQRQy45zsPvCxLLoVbGdNfYzPwLF5",
  "key33": "4Mm93VjCMiKnDL191385v82ao8rv3SE24TyPTrKZ1A16uuQndMS5e5AVZk8c68gkx9xhqBMx8nkmjrSKTc6Bfud4",
  "key34": "2NL8pi9F2tA2i8LHbMBDhydUs5pxkGfZX8yWD4gbk74bUWiw2XEiJuHA9fm9fdeZAjbTWinP31tzU6bHbAJsYjFo",
  "key35": "UMbp6rHNJqdAix7fkpkRHBth28gKtbL85zqjBiwbwBMz93gGEomUxU9JHGsSrgpD1nJmX1Sqty9WFbo4QLqkYfs",
  "key36": "qKfkbCBjS22ve9tHz2RAAAeXcTXdr9yAMb1zTY54uDWaVaaPUbznemq5HJvnecZfgnPjPdqkSgENZb3yQ5gdgL7",
  "key37": "5UUrsrYpUHB6R68bRg41MjtvPbBBcYhC3mcZJ2FTaCx7mdwM6yoEfENAzKWPn6oYTWBNsaweewhtUQqL46z7R2Gj",
  "key38": "tgpCWDACTFGvrzEZxwQbufBReKfR6BjiuFQ98xu1x9Q3BXXg4Wd1UUwDHk7pK215huVBd98twgt11XhTL2G962Y",
  "key39": "4F7HAKzDipBfHfctmBPWMUnkBu2VTtBWnwXCQiAG3VuaXouheKQ8LBowm2fXXy1rzNACs4wDcVwYcdNYsfrJUt7g",
  "key40": "3oupyA3Rd3caUaJHE8Jbq2jfk98WRgZCoANgmQRFhi5GrU8yC6cLYNtwxoYQ75UtmsTEkvrTZfvwgEvzbPUik4n5",
  "key41": "2arniEMC6u3BSdXFHjiMqAjweE7Z7FRXTQ86w56oGixB6GazYJxKvyPq7rqfqWu2cYZihnYqN2hv4BnNkxkLNQAo",
  "key42": "23f2taWzgj2AGECaRnadCNn4t1QczXxKpMiH7qDNDMnNCKC9qUP5eU1zt9w9UeQE5qunsNtTDskch5nFdPVVQcAV",
  "key43": "2gTwTWF9N8fxgZhVHuFc6nChcucTKiSDoxeBfaLd1MPBcunNosk6vaHLxt2SRfn2hbM56qWQpFDeFwUFrVQXbADs"
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
