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
    "w4bodNHPgaJeTUrAfaXoQo6QGG7KDr7xtr1p8p28rsHyawNiY2JpFDeWvggnpKmVe666pjeKoMEEnHr5Xvg6YME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nf3TEbZqaYfYM5m9BHSL7QxrsVmtAZmQvidemgyPgyEY4HxdCwf8M5C7wgNeGhqru4CcVoqfjBzZWQVPpg4Sges",
  "key1": "4Sp8j6rAm3ZT2kUg2XanwfkdPD2NJiLXWFgaFRPYT7xi1knmbsauPjMGgbH1FcMvtfuQXBYk9MhFkBT3RC1xbQiq",
  "key2": "28eo9PCUfU8AA71wSt8oSFD38aQeSeHeLfkaoFPNR6XYdZ15rXQMnRoszNP1iTwALjhdqiZx4xNMfNirjjrURfXq",
  "key3": "QMtFMhKLCzt9E3FriZKjTJqjCFmYZYm8jA7QLMPjUoy2nutiiDFLVDcusWZrecAiksxoftvzcaWcGi5tAVqnFqo",
  "key4": "4omMtcMSknmSDYnz7qp55xWjjuhmKPgmsxLMzcx7DBs1YSysvaLXHSewdSJQJzB7B3PXhFMuA7Y7NPGEeyCX37zV",
  "key5": "2da3R7ATmi8uifKSjUB1HDyfbfLc2qKHUag5mjrcLx6XQULdDQzU82uAjEu9XhHLBiuF4DX1K2EHebjreTu8HQnw",
  "key6": "4KhheZkjsp5L9b16tsrqjgDQFmwCTaarkepHd92Bv2XcfVCpUEVP3MRXajzygSHxiywCD91D5sFGwBxvPSrdM9eE",
  "key7": "3bRVZx9osE2r2CLka8nNvN4BVNZayVhxkP2n48ijFiwXWRdFjbN3p4crTxMinGAXDm3Ae9cfPewEUU8ABFy13oEX",
  "key8": "tHrvYMSrDCyuDewzQhVzjzHWUr3R73Abp7hekKxZ6gRhuj7cR4hii66EEb4xwBP53Vhm9y5USB3Vg62ZzDjqNZs",
  "key9": "5SUiyQ65Ms8CnS8TA42RLQucVbD2eozQCAhuG4tbfi2jrQKc7sYTpyRB4TXG52Bc1t6PFt6XtjuXyUBZrFpPmn1N",
  "key10": "5RkxuhG6HhQiTU5rZZNHUh7VTnB95BciDyDEdJcaMNyNAmQGfJ3yrD2pC87ph5XpsqFHKtFzRuUB7AgLmEbgTFne",
  "key11": "63aE6FkSojmKRLrZEVNzK4kcBfr3rcYduywnMspHDo9G5Tnzjih7V62XwM39idAXacbej3Cm2ERF5LGfbP3tAdAd",
  "key12": "312ChUsiLTYnHdQoXmeCtRuG4TzvcqyqJBM59uVZ3vNefxqK34T4tKKvNy4PHPKpVYVgWrpWcZQioNEj8UC5hcsN",
  "key13": "4ZWSgJR18KnHFWhnQ5m2i3TJ5nLgsFo1DYfhr5pxcDT9FvqRWPTtCiaggtjYKsGxJ7qnckW6dvzEVRqGbNzdC9YT",
  "key14": "2u16cLPtynv9wLBWL8DbJWPyE5NaSdHD1gNYjthdwk5JRT5zAozLi1AAwPbD9LHN2LzjQ2gTXcRybvXHQkQt3rsb",
  "key15": "5HqT7begXcyE93JMwB3kAJLoPo4HgrcRRLWsfZk3CL1fycadAh7SSwRWnWpFe7NvLWnwWdYU73YcpLMpkbvNnrx2",
  "key16": "3z1uDoBGWTkTqudeYTBMMb7kiC3tWnaW7SiDyRHqayrRVFpyUxT6zV7txyua9v7hdGh9E9UrV6Gao7UhpFQDDez3",
  "key17": "46ohem7tK4NB9dr8edgMEKEPQqWPnAh3ZQLM8JWGDyc9JGnCGFsmVfcPjYvUmfjR28VRa9FE6NefqzUrD9oMvjz9",
  "key18": "5ouNEpwQbZ6ifXSxSLsioLMoaky8e4L6gjxEGB2Tdx45sqArFMFZpwHQwP9vf9eRFYhLvsqRzPFk76ALKY2EFHYs",
  "key19": "38LPdyT5eojdRNX17At4vD8A5L7zGy2L5Z5tPoDq7Z1f6aHB8C3PRUphKh2LzXGjacfkxZwAdykDzXV7opZt2gEQ",
  "key20": "3mTA3ZxEgYVZsXRWx9Bm5gcvyH4oe8MVYca11rPAHbMHBwxazYseXp8XFCsNbqjboGDTY7KYHShxjaQLyxMXFq9B",
  "key21": "5i1EWprSGkfATkxNd3c7wjPVkQZ5RY7J5LpKvZqfhBS4LqrEJ7abw1wXhkqYXpre6Up2P8PsAZPDAn7gUo8ieR61",
  "key22": "4JRjdC2EBJQVy1XX27gVv2vbEcQsX1DymJwAJaoA4jFMgx1X7RcUuk1ma2cZBamkhbmgMEKmzfczi1rBuwBrqiu2",
  "key23": "5e6Ge8HwxD2MpkZYPkrxwcWsbnSEKuoHhwcdwUNzz9Ha28kpnwPT8C8LXWogtTkDasUymK1WaGSZmUdhk37DzqeB",
  "key24": "64M7c3H6J23fn3Ap17TKuMjREfcAD68kAaZnkrVttfFEtauCW4BreYNFb7Wz4HL7sCFcfrxmodHeZUYuQgT6gj7t",
  "key25": "4JjCsm2Tatkx67ozWnBxw5h7trv2KbaPgHdGQgse3YcGKDvLfZqhcYWXkmS2LtHnspqA4rDvAcYP66RMU9PPMMgq",
  "key26": "5pwJt6Tk8mD4TYKovqcjHRJn2KXLzgqudEhvRV9cQWaF15JTzQXtiMVhE9dpLptmMX3WbaFMJQz8QaChcXrZncAz",
  "key27": "Tu1ZXp65QBYAzRnHNrWYKHZnveHiFVQRop2PYLijapPK5xE7Gqo4eUm5ixV5jmJopGhGvC6QaioGvFhMVXTzbwY",
  "key28": "Tt4ck3ALw3EUwv7baMDCh7384d4BFsBD44D6jNWAVqoZW5eNRxoGCK5QjtJYj3V99tJbHqDtbsReiUT1EwDF5yx",
  "key29": "5WejVJ3C2HnpJ3k2MhS3x4mkpG6BqVtXzQFXzX5uTapq6BNiehUSJ5SnDPfkBYshU9QwQBh2KHL6UCEdapQE37sc",
  "key30": "4LbpoufbmDw46SypW8ua92eqJSz3QPeLEVphaxvktzmHZVurFC3SSeXFzdNs5CFndDjKyMT2uqQ9GhTPxchAzeBB",
  "key31": "5yMXc6DtTPEhwxuTZQaS4gezpH4kHD13MHwS1kGjhmKaZBMJWTwxCGcuVCXsvF4LM9ndQJ63SQ6LLt9rp6asGN96",
  "key32": "5FekzFTnCFFBLAXS93v3eBJZ9tJ8L1mdPgmBVJ2Ume6qWn6bHCEHBRjQtG8sexFL2WNNNP8NVSAtYgodix4ZHera",
  "key33": "2Jia1HzW6zQSfYLHwWiGC5vp3MfznyTLimXJAqGSxiaQF38n1MznTgZYdqXSpoGSm8cPPk2e4DTM38Htp3J6tYX2",
  "key34": "56wJfU1CK8a9t7z1pLAo74hUs4kaaB5u8WDuq773HCRD1kBq9BZrLxqVHUzxFNQUJ4UkuT4CGeA3MyyFtYqUr4Xx",
  "key35": "3tfJQGeKfLYZ4nbkTWe7CkyJEXLgstTkaQGbZrB2L5kmpmGVMw9JtuZn7vQXY1wXopAkvVyfVGYQpTQ5gY39Tmow",
  "key36": "5p1vHMz5ubayvmfTnYmHbHZrci6CPf27mTW62N6MkaXtfB8qzuQN1daL2jTfYLc72gBLzbCDpewJndwodAC3B7Xs",
  "key37": "XPL4cPKxYQyFSUqC1GJdX7UZ4cKMCnmZLcoadaViGF2HYcXyR2RZKRsWbLyyaV11yBDpMWyGcaaKk3NJwsPRLj5",
  "key38": "2zUGa4nBsRmkqkpCF6fkXFRwQKjgFfs7RDPygGy27Qpyn77XLkbUYrdpy6ajiSrTk52tCCheDWo5GeXrMBTUbtSz",
  "key39": "5Amc5NvUvubNvhb1VkTmV4RukimhusFFS9iQhi6eXBaMydo6EKKxcmjZbJ8hTQWwdRtQvbrv5jFfcnZa9BMbuR8P",
  "key40": "4gdraPLs6KMvSJGZFvZTCnrF2cniFBFdE3ZcoqLV5Yht5ZdfC9aB9VaHL1RXs3oRZydPhBkP9G6M5An8bbmSgBRa",
  "key41": "3npZhEJdiAWyaKqh8dxeHEHxLWgAhe8Tb4vwMC4BDanJjyGjq6L1Pn92M1HjQ8KKf7P9VqUYfrn46kBtiGQVCn3U",
  "key42": "HrMYGpchzKQaZy7MJoSbwUgH43MKBZaty39tLhQs6tfZy8DGpnjiYn8oQmtnH39JvTdwCo7aRui31cpgtVFYo5i",
  "key43": "4XCpdp2weH4ppdSBZoYSF6u89gE9uSH8G6LvfLZ6LGZ6pS9cMbcPNQjUdS2YWaD7FuMEcqois3Cavd4wGFJf6t1d",
  "key44": "3SsybJWQ21Ti3rr3EMG3yot4MTUsY1jZ1Dkbb3J4kiTJYakh6ivyVQHu5cy3DLxNuBdNcjxD47r9AqoJXVy9xupQ",
  "key45": "4kffotDhbEvxYvan6CoCgrgTu48iHd6TMbECTbgytTcjj6tTofe8gHBsLihwnteseRmQZLdAwYQAwfKhqkpnJree",
  "key46": "2JuaT7dsD2Ax46968DicNrzXP5CJ5QCUoWGMUS8hKyHC8QAtc4jwXcDBBuBVFmU3wncKo7a72Zgcjyh5ijSK8eYv"
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
