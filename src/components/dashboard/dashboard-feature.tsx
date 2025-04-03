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
    "44CcvXJekswKCXKDEjUW3rAS8BYSiFeGkNr4F29KT4U3cJE4kzazsDDJUss3xKf1R5s6Ly4U7ebFvt4M81fxjtNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M3s8fCSVLLujGL6NVxLfJ8pnCKUbbiKtarFX3q8EwntDDTg7VdcqfwiBJUbHZ2hSVv7DdhBfRvnt5PCYssyhVTC",
  "key1": "4JtEwSBzV6GudQ7EfpmMkG42Na5qhwWvcjr9wgGVRht9LZ5f7WcHiWQiaacuNPU55tYSm5Eb6hJMMsxgBdZEE8Xv",
  "key2": "2MCQaNdXFTfYSkZXWH9up7RSEyT9ZwA6BMPwDNUFXnAiGWzjmfKWxmrAc612UGhGXS3gT7CKBbHpiR2tSGK4Z5L",
  "key3": "38ckujVxY6jVx2WRhKMBc5RXKuYaKbrBPuos1T7zJiTT3HswdocDiNgecEFKNmrWsVNndWLWNQqsCJnquz5fNhrb",
  "key4": "5sJfuFYDLRajTQ8fhbucbq1W3vFpbxR9uhSwZuwybxrPWZyeUvGWCo81cBQvPQhL4KuKTLgi4PYpCPugsZ9VTurk",
  "key5": "5Bd9A7zFCXqxQt6BUuavdBpePkRo6fq9rU4YbjSooVetrphtLrP41yqDqAFnPfprGKUyEZr96iNDgdKbnTs3uz1j",
  "key6": "5SUNtbWNa7J5cKM8RxnzEHqj63yhjpzyiBUmTMi34f7VyrWuXqvaFZ6Lx55MtgUgxp8NAD5SumVsqQam449f7SmX",
  "key7": "42WGVnqLNZ6vVWXshzXK4Bb3uM7aoB8GymGWN4e2X4xAsRtsbNc2ui2KiJnaqwRXrRauJaQspXCumyZ4MtRpWjhK",
  "key8": "2KunD2LW1gXvzGaeMUrbGuzaPm6q8u4otVz2GWmxutmfkeg7pb1hsj25SAm1CbgyP5yoQzWSxncv9738ugbtLfh2",
  "key9": "2XCNPfL2QSp7cQEq8xuMfRpSrbayQNeUHXztohraQDsW1AnWH6AWQ41DPM6DnfywWen3UkmoqS53YkGPGkVSTtUS",
  "key10": "5Q6FZtAkpxzt9YJ7mZUDfpvVrWWJQUHSJjGK9FwmEwWz7eLd4hgP4buFP8JGzAz3naELndysbTyoATeEJrhV1PvQ",
  "key11": "3jdm2u5r7gTXkY6t7WNGshuwJ2mFS2Q6XP8Xg5P6X6uuWv7kDUUnZRNHSargPABLQvku3tXQ5XFmZa54PXsTJ1rM",
  "key12": "5Myar5JNwg3yXnfkZcMXzYqCJjWfBMwe7MscTfevETtRL3ax5PUuMvTupvueBTG1See5wbPjbESL96mBDgZshXua",
  "key13": "4AMj8LmNoatHQeyLXT6uwZhonBevhqeeN8BPzSPQBGknDGdX3FCZdnmFDscDPpFXJBogQNW2RD9TmhUVY7FdbdX1",
  "key14": "5dEU4rePd6L5BLdGvwMHR7BNN44JgKVdaSwBC7Je9DZRer64vud6LYb2d95nh1dcVCTyBFupVRTMw97hCajWEHR4",
  "key15": "4pPyk1qc1rom9LAjqjXZh4AbLAwKqMGV5vgTMqDGEyhe8kFMHUN7HLkCS3xN4wyDnqkPLFChvvuKJ3EEgw9p6E1y",
  "key16": "5Nsbg1ZfbwhMRzQTgbRpaiGcNxMzZZ3DcW338UT2pgsk9u8QGZtZh6smDi53R4wcKvwLgXByesQ72AKhQ2D4ow3i",
  "key17": "3EXoFqog1hHEAFdTJDFCS3u31PDH3PuV9jWwnwxTEvN5mtaCzkvhDVVTWFj3etFy7vG4FewLGdqjbQYgUBJA9FGY",
  "key18": "2rcbPELhKa6wYRJxH6X4j4vVgnVbZwHJ4VHQGn6giTFTegrFUKPjmBkvDQA1Dcb2k84nu7nLuQSxP4NxAGgqnAaM",
  "key19": "2dYg5HBx3A3XrM73UTTEkuoSEE1wYw9fU3G8W3QcvPJe9gLZNAiXacRi3NNrpzQc8He9gUYaSC1UkqeXkRGsKCMC",
  "key20": "29xerCa2MEYhDFrj3JBQbqL8xe5ujrwByNcD8qk5oDqD5WDnYXRWyxhZjwWRp2rsgSr3JJgN76FvTthrPCJenUxX",
  "key21": "5pkyYnm49eCyhvB3PQrYw3QWK7cT7ayVJPyt3hQtqf4iAtHsohkd4tux88BLKwSMa792QJnwe8X7yjeYq1SXCtzo",
  "key22": "3udeKc7YZTvp96t2RB4SBnHNx9Jb9pkZPCPY6kL7hNBNKEER7uPu7gGrdm195jZPh4vcRnzfJVPWBkRg1zPSuoCQ",
  "key23": "38ePXFxykRE8A7oZJvi4b38mDdpk9kphn65TjdWzcXPDKdSXDRv61XTJB8Uo3nzYoDwHz96cAuaLpbQiHoAHBeCe",
  "key24": "5xT2awx1diJJWFuknL5yxmui2Jzy4Br7rCMiiadK6jALszMrXTAXKGoGWcoNWXXD5cxpNb5v4qiyTmXmeecWanym",
  "key25": "3tURMx62b6zjStS85MkoGVXbLJWbKQ68siF6beQj2UoyQbUweEhG5j8QvcdouiuMKd36j5bcb7qjWzEQLp9Y96iV",
  "key26": "wrvv1S6gUPUNq6kPt9V5rAmTzoZBL7C8YJs4YhVZeagaa8m3A49y2pd2yMLjVXoEPxsnhH3cpefzsZWB5oQnYVa",
  "key27": "3HSDZrpuvYuhBt82Q1W82nFaoVSUi3w8rGnHuLX5VApd8sPX7XkysnMfEA3NDnGSZFLZmVkaeJTa5hCfXQrzKefX",
  "key28": "35A8kgvDcX3JFXDpZ9EAXwq1xPDx771ogPqSzpLSp1NkDdr4mbFZunJoXKRDqrUW5QwFUP4PkvxyNKaGJxSUTWhB",
  "key29": "4UzgjcMwprqcUSnrUNQcJU6TouXWca6aykGKm1qLGeZrnw4s7QigM6PMwdTftzbTzwJiDXn24PK46AVRXYHtnd4i",
  "key30": "25CMDeSQTyYjCiyb7g6FD3hN7qq9bHzndWUY6YujChoJ4MP9QGZw7fb7PNAxKD2zx2y4jrvU2f746Nhmif8CBQgV",
  "key31": "2PnwCFt4dXYvSdxNSBnZ3Rue6kJTsLjFizwdxA5dpbonxaPtDPB7BYqLXTBJPMGDRLspRiyHmUPWhCEFve1Cczjs",
  "key32": "46BYc8zMM2RbwQ8Sa6JCghsY2T5XdBVNZkS5ijDZ37J7WvJ9LytEDCforku6U9dqQZPUQsTLY9c4sAjzMgMT2Nqm",
  "key33": "3yCSZRtsod4JiY5xB5aWZsqHuKEkfjNCu1RuNCr1CxTy7cYKBHG7fQWMWw8brmH5ADuMhKrw9RrQaP41TadTLSiL",
  "key34": "46imEJhM7h4VQRHErcdr5JmkgayEdPUoMhAE8YAadd25GCDVafgFNYfUcTHHPmVZamTVf7XJ9GySSSUKhhq8rCSm",
  "key35": "SuR5FgnReTaqjMBebQW4ufqyPmXtEG1b1yhHqkd9MpXRR4CVe3vVaYqe3Cqm2DpxGKWCYXvkVBpohZLLBj5zMRw",
  "key36": "51E52PMdBbqZjoTjU1WPpLMB2gUu3qpitCXQ4642oj474cffovbj7e2RjEkStSxcyPh4FXDkCKW6oDPWNzkwyq8e",
  "key37": "47KG6SudHi9GpMPbQCZF9L1aW9ebXGk7SfDeAHowZeU7mLmDnjuJbDR1PHUKhUdFYpUJA1tk62HpqJGzak9ZybBx",
  "key38": "5WzQGN3gDDfbezPuMXUzavfSeahdWoqq5hb5zMwon9TPpk3EoL5xrgyyhy152LCFxuNt1xwRuxu2K4D4e4agDJyL",
  "key39": "a2qz7EsmnyjSkYpswMKK72y8u6kzV5ZhQ9CDwTfUaYjQ7PZwUeaM923Qieu58nx5NUjrdVs98KUcmN6A7Z6QdJL",
  "key40": "3neWMJi1FZ5Yvna91uhg7X8jvxSvPEWhqPkaMkfYvDnB43sDZszGWe8sGZx3ihXpm1J4BQGPx4NLaVbsb1FMJrFC",
  "key41": "55MfpakAgqS18p2UqL7bqeDgJyRoUoHgUHrtZ3u9y5mdEMjVTyLQKDmmzrRUvj2gsA2apkqRqGkmiPSjFYnj4Hgp",
  "key42": "4jG8uJjTJ1bT4ZDb1imxpwsXtRFwuHZ9PHh95cs8duSNbaw36jVoZbYYpqG3aujdAExLyNimeRxpk1wvZbpyixi8",
  "key43": "4peJyha1PCUcuyf74HiiGfqCwXw5TyidtkAQZ7WdBj59zpWsTeMrpoDMACcpwftVohP3eEGV9XzqaJxYJJDmrJ7R"
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
