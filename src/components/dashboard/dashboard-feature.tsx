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
    "3DxrKv4W7zVcP9KW9g4cmBExxZefYAvkgw5YTfRwybh5xnXBFhiTzBf1dkaVRot6y1g41qUezBDxAt7HCrqqXoQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZ5VsetvHecJH3SNUDy3Bw5MeoNg23MYMJjjDg9Ve9UdiAXN4fBDCinkcY6NfxSZmpLgtcGv9HPwgqjxvDBGzMH",
  "key1": "5tU6yWuPGM5gfFoKa8bn6vL92rje6ajZ7gCpRMBSa4yuDGNGrw6VNVhmPnLDwiWiESSwCrWt9QssbgEMLzuGJxFP",
  "key2": "3fqKc8UsGmoo9LU5hje6Ty6TPtn8DrQyU5KscfLx2QEHKLNHmJLLdSaxEZqBDxLoh2KBXXSj6DKeFYMYgjWA2TgF",
  "key3": "64XoBQDCnjsoy1S2XJ3KE3G7Rq4ugKxD1eoYEdiCKyMYwbrUZziz1DhHNUEpwVc1ouFhyweRo3ucXweWRHBdhSt3",
  "key4": "5N7PiPDzxYG3SGMVHvrKPSX8e7k1VxGEX9WPbvHGeRVQGbt6fKFhrHAYSLkwWLgy7qmy1HsbEfPFWRuRWHPQMmAa",
  "key5": "26Lr9GAivaQ5Dthv2TwoUDTp3nnEwrNcL1hD2QcR72DJeHfMdBbqS3VAbTa67Muq6ELLxmnoodXLHgPV4oeHFp52",
  "key6": "5DzgUho2PywA8MwZ7nVshdVbDpfLaMugnsktx6vjMbhd9n29baj3GYoeVgFw5U1NGfrvrfkcsYx7Rf5HMt3kATTS",
  "key7": "4ZrW7hhxqYJj8VKR6YXwQHiKSTgDtPqhm4fHDR5s2CqTyC6WB6gTxmCCrhka9pk1iMHtS8GTrq6fXxhJkWqA1uL5",
  "key8": "5PPo8f7YsyKDqTN3yvRRQifjoS2ivxCfkSVbfoEsxcX9b9xPug7adi4ymD7CTNmYrGHLkzp1hmZRp6qFQMndP79L",
  "key9": "3DPw6ZgtBnrkHsjTMEaVoce2qtCcBVvk1yKMGjcDnM15buyXopyRqNZeLzhimJfWSh6a6bB8JTZWMQJ2VaHiNnNk",
  "key10": "6e42PFLxUsDqivjdyeYa5KNyK8p1sgL9a2mXjGgpB6PN1dBGQpSZTa8vZtmvmPg8nDVyvx2MueeA9Sf4qhA92LP",
  "key11": "cwrE84jemRaFoX8UdD8JZkwPDRmJSpTta11tq9pcYVsUBKPHUi35yzk1RhdFWSQdM6vrscmEbDAJb9G61tu3sjp",
  "key12": "59txeZ4SYa6k14oaaxYmBVisPVyyfEnBJxNVDaLQfKkNmM5gqzJAnTbdr7ReQr6Hd7c3VVTK7ssMSsriuSEY5xWi",
  "key13": "2PktoUob2b8XaYpntxQNUymDBceoqGrinU9sVPHwc2ibNPdWyhBsq7hR1x2G7YW8kNfUWJSC2KWHVsrkB7s2hQqg",
  "key14": "5W5e7bbYq3Hcq9KwdRieaNK3vyorr16iKfabgri59nQskPYZmaAJvvm4LaR5hxTtQodfzZMrm8Xgxn9jo9JqH9fr",
  "key15": "3reFLw8DoPKfmkCrWRrPgfDLG7SenC1V1hrdLyrYD9VC9zJNSmSm8UJR2SBNLyThfXMHkfg2WN2MJyu1E6Sftbhm",
  "key16": "3BSVFRuAyJanKXWeeABSivqyEFnvsRrYDMwsnCWQKNwLFpRVoyNX2D7cPutrrZYqqfZaU89GmBbaynpNCQ84LHRs",
  "key17": "66NRZoHHwtmZWWhfycUHoRqfFVVMcQ2zPnNb1LS38SMnvjB2ff7qFBEjXUJ3hi9kjxLAmWMEuLv4RJLr1KUbMoMr",
  "key18": "Dbm8eHbkW8hpkVu96Z9QLx9kZaqX625pyRd5q5ckwRPPZD9EhCZqWk1BRgBCXSxZTRjv8HixSzGwKCtiu1WhPi3",
  "key19": "8zMcW6SHk1JbG6dNDeYDKgrJvYsyYJeZSpXfgqu3LmKD1U9Aameesj7TJDKMTW5FTMG3dDkv4CYXSzURicoARiF",
  "key20": "5SeqoUaZNJY42LETtkiwoAGDU2Tqi7yFV5yb5FraJVrdLt8jp66fP1zfj51wsLjDswJt4Tj3myWVhrQ8bRb2CUmU",
  "key21": "5viqFTxzHb1RQQtjsS4pvoF56EJ8Psj4doJTrkzGMbAMSTtNFAS8PDXtEpMwBJTvataZD2DrBQH6Zm7dkUUribvx",
  "key22": "2AHTR2DDgD2KNHNLxE7KKju71WwxcdyeBpXHPNhKz9JggvumwL4Sg2cqPVZag1oU1pMjyz1mzJ88r3gNMYQuw7We",
  "key23": "5Dza3BkoQGexpXmkpXRa9AY1LjCS54My7wHHPaM6Kp1fEf1Jh6mXncGL2uq5Lzb5ii3XPAQDfk96x9SvboDcrdaz",
  "key24": "3xvat1E8pEkFdg8KK6e1kvwQJYm3WfdVcGT5112SoeFWnoft2VktGcEivpFUXyjyLY1NbWtQ6g2VH3fhAh6w8uNm",
  "key25": "3Ys4mDoJecSqw6yyXtsG42Wki6Kmyu2RDyGe8qPeD36Db5LfoFoPASgsYfhkEZkZ4nD5RYYwJvBLt824oxV8RJ2n",
  "key26": "5Fu8zGFyD9Pc3VjjVjDDDkFJ2WtV6uX2ud3SKwGY2x8qJfEn3RURXN6a9gVcWhXKXNubEZLXgDFVG2bPDyGNbigH",
  "key27": "3mPUmSKbLDKKmNNHtnsAAXEv8Vt1GrViZMiwYDoZgzWbya3r5hydQkmmsWx2YQikZhDXYuXakBH5A6d6DWfJ6dmo",
  "key28": "36EDCvtuBesbJdD7nWCsxFRfU2sawDqoG3HocEs58GiEsx2dvQig9cZdaNvyBPHVXy7hy2BMuD8enVApAfqqaVYN",
  "key29": "3NRagbPuzm5sf6Nsnxg2T6TszYPJjQ1VhDZ5DZupF6J7GW4Koem4e1HjhTRFmuq24NAkDafAwcFqLGKF45yNVZqj",
  "key30": "iaUsJBXqoy3v4uKzgpCRMS3YWtZtXqYbLcdsop3U1ELhfgGC2EePYUniGHSVYAvedd1DLh2Z4VeonvYDqK7s7Ur",
  "key31": "3M9mzqaVJDf7Lf2HMnCEgn8676AKnKJdr22s9pJfrx1VfTVLp9ZehzY9hYJe35SrSJoV8wiBkDm4pdxTedixVLvC",
  "key32": "5ZGBNXJKbYRzCFGZmwqTbbeWGjwpaHUnJtJAdf2t1AWNDLtAy28VFXcxi4DAC9uD1XLuE8BXxL2J7je3qLowBuWz",
  "key33": "2umnPa6Hn4DUR47Dr6U88Z3G25E2uBjjBQFZbLWtL3LmYzjLZEyq9aLn3v3rS9GNkhuzxs1gD7K7XEUznDquJa3w",
  "key34": "5zVXDxjNAskBypvYyAyURUuWSvJQ9Q1UUR8KCKToLUjrwQW9sK4pHeNLfGoEBAdxGLjsUumCQLj28ecTsJXr4en5",
  "key35": "vWJR2XgF4hCpCsDFCKyaLzCHu7RND1NatuSLBAY72nN9sR73puPY5FgRhg2HdtEcC2ZoTDoBkJxYZEp9rzeQPFi",
  "key36": "2ysrGcxt7T6uWRVmEEA9Nbup14c8AEGgKMAWaitmhHpqjmNNXSaJLGTtruJNAF3jsJkLfzJLDNngnjGR68Mva9UL",
  "key37": "4H1vKscRUk16arxrA9wnVQ8XycggAxGhB9MWLoaFzcfDtyAy4MfA9DB5qcDb6YRFn8cQofZ3kTV1X8HnigVe6F5S",
  "key38": "4Kvq6j2H2NzAFr5N8fvjreqfqiKp8F835ghPjVhys54Wr3Pzj31CZjQ5wjHGwU68wWjrYH5YbN6TJc2dFGNcF9NC",
  "key39": "4ncHC2gQafx72YV1wGbk4guFcVJbYKPu2WeT7MmGE7J6qwvicc9LJ6v23GbKNnBiryyqrj1qFyxuFaXCHnxRLki5",
  "key40": "5CD3NffLk2PsRU6AzaXWQgeMpaGChnuZPRUYBparzXRuqrU4djAwkLrVoVHdf4K5Q8HEAWoo5usMfyeCVqpgKFqq",
  "key41": "4x26QMArKN7VeuGTAq2CVHw4fKEydiVzdhkfjHLjEJUi76jUHEqTG3C2PdjieKXK8mxaFQuu96dcs3ngHyBhiTMe",
  "key42": "p2Tme3WCpNNCsdYnLeQ8pxgnZE5r4m23DcQzsnsRFK7vwp54WctL8oMyNrumu8McCDcDdMtXfB3Ds7NsGwAcobq",
  "key43": "66pqVUS12Le7r25oxWtWKZ7yGuXgUFGLgxXabnWpJinj9KoYhEkBYxJSa9hALQ6kjrZg5PGMgSyPNAQN1K1SpCF4",
  "key44": "KTdajtiKdYV3krMaxhS3PbzRqKyKqjzSrHUZboosJdRg8UkM1MquHwb7QBatCoduC6TJyPvqTs9JpdbfVsKpDMi",
  "key45": "2DYUHjPpEfvzLkgRhuC3TZpwKym2FBCS73sYstUWeqsyKTmamgrxfwHbqEL5bWAAt3RpqeXTAsntCDuHL9cKN1Du",
  "key46": "2JPAiQEbfP2tFagYAmLYiebMcfsQZxCGnubgiwky7mVXbWpcKe1SSSpjygXVdYnNAzv2VL1NhtKkVUXc1PncHiKK",
  "key47": "rtzbynRQ3cQrAz5PtTqnmHFY7JCdYvak5fMW93GhkNy3QDTVfqFsRGiSqvN21dqZxTtRPTgEusTaU8Car2yv1sP",
  "key48": "52mCFZgGkbcy9oJqqNm8TJcYnYut2hS66By1W2ZTw69ThSvFTFQasdsZsi9ebVuQoGzzA1D8StRLkap6WpYYho1L"
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
