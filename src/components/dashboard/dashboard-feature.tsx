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
    "4zLRBqB3yGQ1erYBmhm9x47K9H2kFGMS5YFCbWKc4vKREGVH59k7WWXLv9FA7ZDYEGRYS4DVm3srT2GR6r76mhjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DA6bZ6u7RD3qGezdFBD6ER2oc5iTKXe3a6xqxcfqJ92xLosaFSq7Y7kNWmQCPsURG13aqCLmAmWbjnyQifjmdvi",
  "key1": "55SZ1jwCndPQBqWBCJskK7hveoQDu9RPNv1X9JpMyS73CoFoyG8fWhXRhhmnmMXgnjSYcDnzFASvNwf4jwiAZTTq",
  "key2": "36bqDgrUnCNtAr1Rg5E4i1eBeKR3iMUHGiEY4E1dHZ2JnLinVw6d7Tkj7vnMfiRkfbrBLbgHYEPKoDLcSLjB9vWu",
  "key3": "3vJo27MTXk5PovQLSoAaWzzAcRxFDK4sAexFp2Vy46b99zRyLo4RqC9hhXpuoHHHnwffTyNiapqxJNBby8Db2WC1",
  "key4": "3mT3NNPbx2vHekEmCGH8h7vn7an3Rk49o4bUvdQjQKS7VtUEzjcQ1nJ7wYcQsrasPfGEJVw7Vu89H6gt83geaabH",
  "key5": "2jENW2mX9vwRCNHheCSf9aujdr1jZTA3zTZeUbeMdr9hgM1qp8gB5LcAuZ1sQsSNAqdFvFAWuok2aFP6Mdq64aSZ",
  "key6": "jJBLJoMTFcDYLBMhsSR3LbdtSD1DxHxuBVUgyyebFwGgJQNmL5arBADe2NAYnWY9hhQDUvDp48irrYmJ2z7emtx",
  "key7": "4R6fb4romvXEWXviKqvxVF8LAAVsyxJSkJsjpXMwkoPCq28UiKC98rKBhKFdFMF2UjTsRVXgGxLcoCn383mDqgD5",
  "key8": "3AVWTSSY7YPfK4H3nb1ii2GMVkT33Duvr3hynTpDDbLSABmpGMAsffRxqFqLXsSzbPDYfCxkaD25JBTQLFN8t5v1",
  "key9": "vN559V4p4T7FXTZnksgWmwRSR87jVcsCKVS1b3onRc8NpjoKEkhGLnAMhaH2k98iTH1o85y86PeiibrsRmRp2yK",
  "key10": "hSDLRMS7zwkafT2eefyefk49H5XCm1QYepMY1w53MxF8ZphYwddNzhLAaRfKSr2ocRpMdsamAsbzuueeuAfg5vV",
  "key11": "5M6dvzjrWSSCWYKQ9YLP3M2TNu9VTBHHSv8sFzQFRQkahSrSY7KtBH55UavD5XvmXfGQxZKPrYtz3Z6hh5FQUHJh",
  "key12": "58BSjPam7sfWX9iHkvMMTFfWsiGWujEZvAsyntdCEBaFa1RYA5dtwJeURx5rqREvGH4y6kHMLfbJdUergxB1R2Mp",
  "key13": "4GMkoyFb34mNJ1oz1uTDxRBvxHq8ob5mhaiWRB9Hd61v8oQeGRAfsU3izhRLKD6RBPY2dDpMRxEPtFUhfbkfTsZr",
  "key14": "2ARN3dmjJUxC187GtzqFx2ABkKssmkhxjfNtdbdbmQ1qWdN8UW4krKaVW6kWRTRAaf8oT9rhjboaeK1CcjbcNCcB",
  "key15": "4PnV1S5Ynsuth3ozDk9ejk1xfMRgw1K77dzpzK4zRkZVVNpdMuEUgXEah24yAELgUXz7GF7evtoteS7Rh8ZsVJ97",
  "key16": "5Tsn7UZXZWXpHXiwnJHky4Bv34czXWaZqd5nf7aJuZ8mT3V59nokbkTCBYwmE1tASttNrnyk8CZZ7PKkfj1VqAh1",
  "key17": "63DwxLDtVS7sVvVm6vss9bqSR49A89ZSTiVsp6Vz8CKT4b5okkHneZNb92Lt3WhQCuKkNMHsxLTfWM9SPkxsLoiQ",
  "key18": "4kZ3qrCGEVZrJbjU4FPNXwZ8BmjkhvMFuqDT75uw61HvuWzzKi7YjQCXaASVdCGwwAry7ZztLdiwUmBbZJroGuDX",
  "key19": "4Xc89n1HPvejmvkAMRiAXkB7Ko3vpGzjR3BHHzqR9npKQyfwbcj2eVuN6X6sXZr8nb8mWLVLZwSD4yQ4D1nuDmtc",
  "key20": "pcfq61rRGXPFcapLxDRDvmnpM377KNBANwFRLExVruWDmw3LzNTLKuQSCdrEQKP2RgS9FhnU6DSJfx6KdcLUESq",
  "key21": "4Jt24w7w1XN2GZUUnncky1XknDskkawhmuZcp7hdt3rQhapkn74mc2c3Bgeua9N1XHvBFLVUPRJPK45ruM7TKpyD",
  "key22": "2UTbvn2MwrJXxEcYev977Vfie9otxF8CrQMkTE5zAkp1WiBTnWECu8g9wmehpsBK6DYXbibg1aMCbjShrytQuYSb",
  "key23": "2VDEmeaG5v44cZRxn1V6gHhDAWQmKt3AekeWrdTD9AatFPFR1uBpzKj8mRmndyK4Ex9XqgL7WQ86MCmQ3gDyakAx",
  "key24": "3DSqLj2sfdssEGa1K5y8ZdAh9oiQu2GuVSfcMe1yAxAp8ianQj4J6XSUkDbh1GQ5qMES3YPk1N6D4AZWaR5P22y2",
  "key25": "4tuid5yJMqCk17G7DvxJL1yVHoCkb3CEbXPaN6NXqiE9oUm5xR3mxh9cyeq4NRmdinM4r9JPbbic2jinM6HDHcLK",
  "key26": "4sUC22ibs37FUwxLw43SHbhuxknHyQV5GfQGYarj3LjtVsW517rroFfvvKnbFPDMxK7FwuiQ4J3yE97tYjoQDFm2",
  "key27": "3LtrvT61kN1yatFWpnEXVsHK8fKCWNgRWmybF7ZqdAkPYxnR2A4Q85PoUkV86XnaXJ1FFWQdEQUfQLNUShrSBmuH",
  "key28": "2kWfCHCyWk6AagR66aQu67QnW6q9itWQ1Uuy4nzhGccoej14ABoa58yt5xtDgRxDMvHPJ5N8rcQpRdKj5JFfg9EG",
  "key29": "31hizT8xenMh55bd3t4LkyjbYeiTkMZNVwAGUZp9KsXtzCmAh2SWh7CKcUUeBm56NM7rShezjGWRvwWf7koR45kj",
  "key30": "3SadiqurJ7SV6QmZMyXDoVV3kV6JbHo4dAyCR8vLCq9f7UwySmf2wsaVMQV8UYeXHuDeU4n9iW6idzZke3GGWHxg",
  "key31": "4TTQu6pX9BQs5GAgP3B41Ho9Ej6KDqv8358YX9DDeLHjBLVQJwbsDsMMSpSBQ16KjPXKdGdUeMRkqcD6HretEoBn",
  "key32": "525WZFBa8zk2o8YFTLFRj1eN4Uorx3xNmEHZhcvxw5oQSyu1bnjF1zWeam81Cwcjmdhpj6rUMrK5h8vWsaji8vh4",
  "key33": "5YWrrrNZFJybeGDMU9TBLqZq9siLASeDGMdK9RX329BMR6DiKtWgBQ9SRNdtpwLFi5xHF7K8rBZZMjTdCd8C4347",
  "key34": "3GT8YktkWWCFDdrK564CzCcXnZmP66CvFjYLLncDD3NgRkNcGrUozkxYZyEMN7Nae9dc3yr1Zdv9c4ovJzpgvu4t",
  "key35": "3NhaFJNaoaC6JkAXJv7GeYJzhdPaZ2yMoJ4qW4uD2JFn6LvKfS1vzMCoqerkvUyBkrCQaYjy8ewMZD6bATRs8qFn",
  "key36": "94zVnsYS5mVsCduMDwSe6g7mHqtsz3knVMbwWNte3RCyBKkPvJ4yQAPyBG64vgEaDbrXwFwJm2C2jXRLq5xmYoe",
  "key37": "3wJ96JKphoddK6y3MYkpqEbhrf6TX4BzjKHCD8mHKnSDLQzdLxLVJSTQDEs51eqSntt3eYfATtc7ZepsmhfRV1rX",
  "key38": "3cYnkg3WLqQttRNpMrskUmJMK8oHDhVLL1aFfVHUevB6sbPDrU7MUUrEx1rFfidfwaLMHRqAxi8Z7QpQdiHFZMGQ",
  "key39": "3a3TGWKpABDbKrbgcJR2QWyCkToMEALkNzeyqG5m2BCyRjUQRQTTwtvwKzZiWC9js3oqnBrUDL2c2KF7DgcKB9Z",
  "key40": "3Yqy8qYVb4f1SdEpPey8BaU7JxDbJHJoFEKD8vrpUAfEzvkvWegsbWDj7BbyXxsj1ujguJbT57Xvupo6x2wNNX7T",
  "key41": "4TNJ8TdHhPD6H2hbk68noeyfbh9u43Kebou5CDUar2J9CChhyk3u3FYULb9vYLSyWwzhzxWtw3aKWk6mjXCrGHmq",
  "key42": "5aqMTMR128zVMtLbEMPHZSnm3K7nzLUvf53UjVJwTMPnTJgFSd2Yo5t21DYNhVd5bPnL9E3PpzAvCnHUk6DzNkcr",
  "key43": "32JbKvhaUwqdPTfcCTiiiyQntpVBMUGD1TFtJWmA6pDraTQmZzs4wiyeyxDFZv8W4gy8WrGB7TjsPPUvygWojU51",
  "key44": "5Lf2hBFWxHjgh1ajTzppQ7jSLPu5nXJdPH27VhuwHUKU9nXEr6mTjmrzBMpGPYWcR4K8kTD55jGqoLHzxmJv2CBA",
  "key45": "4GipdA96kpS3YNWhtb7ETpu4vGHAkhDdVwJotjQvLqN4qhKzGL49bpk29AkRQe33PvEWG7Fv13iZiCvD46AFAPV7",
  "key46": "2fqGipbkFwghEEWAyY31JFb5KbJgrmrTdWGckY4oLz5KQQvErMkPuKTHno3TJVQ7CGPEhBdLF7nWn8CyAkiqKpdC",
  "key47": "4qm2DxugcsWTyGHyHmCs1U1dx3Tm2g9g16ge29xRkE1V3tbxjzL9iA1Fs6zNZfmunsHCwhyY8kUc7u3txZrbpgK4"
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
