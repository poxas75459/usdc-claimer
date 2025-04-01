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
    "4zGhM8bbgmUaeecq134nXhgjYjUCz8CLrcMiicAXakmkarbz8WMmPiFe52QstrpnmjZ3jsL5rtsf3xRXmatcLm4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TKes21NKDLQrTfhocMJuLTQiAQ1BvYZPu2FeT2W4zX5CZLmStW264jsygEMzRw4rSRW42hMaHUcopZpG5kgcPrs",
  "key1": "5zCCKPdJ8u1gbR773hkpNxfuLZpw4ysZ9dWyF54EMsYtBXHeqBwpZinWbMw7XnJvS1pwNkGHd11rpJFCc5UUKdRA",
  "key2": "4w9S6gTUNAzGstvZJLbRX7Lf1AxWfqs27jfv7LEKF8CRXr96r1GJWtpXWpAKn1EwMmYMsvzeKVUEJPM579Pnmi2F",
  "key3": "46BTCZBPBMyH1ZrWPzaeJ6RipH8qCXDPx3arAUrmde69TkJBeP24reygfc2SKryXxphBtGTHjMVo2uKHec9PJnMA",
  "key4": "5Ng85bhohShv9CPVktsRF4SP22a9t1gDr8pzuQVsavRD3CNPjRueRZ6CDRq9bCqZsHBXofgwDwaytmzjFADTMzLa",
  "key5": "4vup8A9K1zoPzP2jMcnbPdEHCiUE927vR875HsW9n392oC6xeqaUAXZeGCCXqYwyU9wRd4YTtHEm4iwgLrG5WGyP",
  "key6": "TmzHteRYFCcaJRoxD5EXJqvvEuRbdLzZaeyoXfG2VHEhMnKECLMsZQ3kZEb22A51mdzDs5ZyWuCgLPNTNxyaKgD",
  "key7": "Cc69SUXjCq5QnWw81knZcW132m5NT2YLSRPtW5r2DYPepKb5vJLYL21AAdnzjC4CdrHoBCjg1N4MuVeVeCVdg8M",
  "key8": "5eEsNsvzuhw1BPVonQ2wMCYRtHN2941RZfTD4SeE5CRxCzLRRw9XVySC6CTdQwhTa4VEnZncDXyzZjFMk68o4dxS",
  "key9": "3T1kMi2gDQU8yHFPLaireU2qrrqxUHkQa39A6xTsPZUHDTuULkLavq8CayW4jo3VxsbuAufA8bWfSmzRqNyZCHqG",
  "key10": "3pWNF2ahzF7uDSp6K4vy7dzu5qPQhPV9uAwrppEWrVjP2Z5TNkVUDVexndznymUzJEqLyumjReGXcW7EMzrpsBcU",
  "key11": "2HkyMTwABeiNbZAAaveU7goY715gKo5qyxmVMHgrxDSb2sx9w5wiENeBXs1YcxxRDeCPTFkHBHVy9N47yxKhDyY1",
  "key12": "5cd4Xd7smcHK3vc9d3cgE4Vo88anYemfc4hTCDewcZa1Z3xsNVshB96edMChyjG9ZX2DAeSXgVS1vW7dX8bt9Vuo",
  "key13": "38A36ySYRXRyBqZhvYSwY34XHpy6MA7HpwN5GnXd3ChmAA2rN1hm7VkLcMhxxYJrm2Pk4Hn2EHmgaHd4EUXjV6TU",
  "key14": "4ARYL5KGZXyYojBzzeHHvGWqk77dj3gAXyCPBWn1CT7LYqNJ7Nk1AC4oaoagnybAm8Jjgbbs7WLWD9uRf1HHRjUM",
  "key15": "5qNW83TzNC2VRoytdKVd2U9iDedUfZFRGhqxsEf9dVZfdi4XmGXKHj1xSjgUa5pP8paYBfxNUcg3nnMxoceUoD7u",
  "key16": "3L9odgLxRwS5ihJ2fkGv5ABWHi2GtCroG6JEatqNwrCNPo8y1ZiQQGEfHkXr8NfEV4X5PGVTwqpY3gXnZ8dHjYeX",
  "key17": "47URWx2aDH9ijtiSy31qxDstjkYCSfHwairGFniUvz8ZLro9qT1q4EWeNaLS7zwe3yEBcMaq6tF6K7cPwZmJpH2M",
  "key18": "621zPZEwtLJ7SKUuPPr8zrJeAwcHoJxDiQ9LDtvng2D3noHncM36bFZG6fvn1xxceamQ5Q6ECLTPVKARpxC4u6Ld",
  "key19": "3Dyi4N5jFhtL6QAuVNnsNtHZhBuwyaUcysjqoWQTH7VuCiXNPNCdDUayeSBzFATm1YGxxfo8T7nvxkwPpBu6YsXT",
  "key20": "c8vM8MpDmXJTbeAPTiQXStRBhFKp49eLXoPgi6BvP6knz2ki4KHnKgiXZkZWpy37ojykRZXJCZW7hiuqQS8TuJs",
  "key21": "zr2nD8eEn6Ads1wLQs5vaWU4NrzfTnVaobNdAqLrE8pYPAZsx6jj3c6EAkc1Up92WXQc7smYey3kXofPiCen26q",
  "key22": "2coEQCPiFtPUX4JWdc9PvRyhsYi2pgw86pxuv74V5MeE5kgQ6an8qk5fqsqBZ9tAaUFRYH4mXMU98SfJNDMuESBD",
  "key23": "3PcPjLjfkKWzAuxNGuMaxw57yj7bUT9miQxZ1fBYGncuqRKdznXPMyFbiDRn9S1h5PzBL1RsFFEPCTjBh6AxsAus",
  "key24": "2DZUmRR52nzjtHK4fppfq4fyxFoSdgsjbKT1rttu5yg1weYdHTmkZfTGcdEZb2t5KQ2wSRe8WMwS9fBE8wi88xNX",
  "key25": "46vugR7Lh7qHkcfDVSRSAWpjYGUJkYPTEiMpLAh1qqTt9U6FFqbGq4bBxfpF9QXhfGZBv5vhrDoqRQfoAojbwEGb",
  "key26": "5HpxWkzQwk29NSy8i8Ufq7bnodKiTsuxx9swFdgaM77KG66Goh8dUnSuJJ8oGn3JaaypnVaQ5U7yr8v7jMMHZJW7",
  "key27": "2bxtpaWYd1VCQhsk8h7ATo22rv2g3PpfWHrFjbfSSt6xJxMWnsH26o95XWafooesLihuNLmwavhzcXDD8mZKKZvB",
  "key28": "5qRyc6H1vdPiVnCE9qZqBCs9MTWWAWrZHHtRYpzo3JDqa8AoaqwG2gwfBSakMjd57c3MwoBgSc444uyZA6LtBwvA",
  "key29": "2wF3EHBivbeweeh9SweciXTfJ5fWxQt3Ho3DaW7HdFHMk5yQC9Rs43xYki1Hu8wCPxT9fwUQbjkeQHMhZUhGyqP1",
  "key30": "zuZyWxR999aXdxV1mez9qJDB3Kt34vfFKrBWu11g7nzN11XJUiv9voBfrWZJ1PCcBhR1akhtJdjo1H6kBGU32Q4",
  "key31": "2fHPSFjyDat1V9hWvo3hrJEUcTbMiyGRwGGKBk4EYaHyf4k2fkeX2ASPqSdi9AELyU7JcotAwxWsXedyaPw4VB1n",
  "key32": "imdTLAq5jYpNYuBsuXY7np4SZhgqbwsCEnhB8WPw2PyKrfi5L6aReor2bNruxRjvP495wJ8CYtPFDy1ZjBETjn8",
  "key33": "4VuDSo8EMR9Us9iBzKPVQcKcjVQTFhEA8z6neLTUkDsrLK89LDYyo4d9Bd92KNGu3HAzzXnUNnJAWZRAz4HQBxMs",
  "key34": "2k23zB8R1CmPCp5xAKP3dB1Q4FXCoP75VsWKffs3rQ6aY6ZYA9S1HDWqtBRCBZ2Wfd3yJRN3gpFxaCvLW1Pzm3rG",
  "key35": "2XtKJMCFBqJZc1nXcBp57LYSwKQXWVtFvNYYcPSnYVnzaWqZeLfQ3Z56CCsMHGqwXGm8KLTySyX5kpaZZEPsjhJo",
  "key36": "5XLB4i7KLxjb2kTSh33Sy3HYMR8g5otDjKJVaW2A1sgYssNEaquMa6sGr9HiWRt4GLsjasXK5WwAndCKPfy83utP",
  "key37": "2Cs65Bk4WBEBx5yYX9ruJXKg1ycv2XLPG9y8wHBAgCWG8RVA6Rj7zqstKivYGh2WYazQFtGx2a5id4YxsckYCKw6",
  "key38": "5uProDvQaB3i79yjAEWzjufKqNez5PgGCqjqiaqekBEmaGPa61tjmJNLQYvxjAqrQantZVWiow7iR1HwysoNRhTi",
  "key39": "4D7KgJaKEU7AfZcjR6sHUD4GT6QxcvYWjz4boQpsbyRV4cVLLFTmKvitz3vKthCRsSqqcGqmgzxDxkbrqDz6bdbz",
  "key40": "4rYjLoeqYwN4jFQCQLqf1EwKnaDq7WzkuUbtV5bCE2WVGSzNkWQ6RrXwU6Jvv2dQK9HjQVLcyugQ34HgRAPg7iXh"
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
