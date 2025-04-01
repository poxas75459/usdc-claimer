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
    "3fsaMUmRp16YSZXsBin4qDiLUWEfUsFyZyhwouyaZc11XAJBbiPAZpuob4YzRX17LoAaVzShpEzsk8FucKRBXwFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcyMZYX1Syo76ZB1zaK8VSjtQHrPfKqdDSFRp9QpSGZ16k9stJceawEZSvuSekwnHC2SmUUhRj7s6GEvPbkUtzc",
  "key1": "5mztcQpmPmGWcqm34Hx9xCYi2wVcdWthA34vqShwByC1gTnXuZvUChqmnCxKBP31Q6umgAGmeeiUzyw1UKJMaqp4",
  "key2": "4CHjgct2hf4wZaLeUyXvcQgqFy6zRH6egC1yr1sBFXUw5KKsRRHv5HzhMYK1f6p8btYTseeQhbj1Rhtz2WGXhmXs",
  "key3": "4YqAaWF1yBgZK45wLZtFMMuZenk6vfHA4af5sKWWdTHU7RHZFtA8nEbD8iEnS8pE8Bi4ws4vQE4YHXZYuYnEdtxb",
  "key4": "43rV1YGw4noxv1N4XwbsbFV1nhKc3TC5utedDt41RieA1PTQQzaBb7yyuBL7LqCcaSSUnHg345U8dgfvqFGyfh2m",
  "key5": "586sGoQhN3wY96tgwrNUX3nALS5mjz3vv5n85EKwXEPcfGib6p638z3HnDeDLsVB7jbPmFmNv5XNiGExi2tBEzvK",
  "key6": "4yorYFh2F7czd4wa93UUxCK8z9HwSuzqUq2bbwtm4xWS9uxpBfp8ZuUhntV2yzSBAU5TwJoUGcUUQZkzurpKuFZf",
  "key7": "2FZB3iAFp6rWJypwAXhQy6GmBtrLWGvTjp2SP45xQqyYtTGgkNN2X65X7ENtbBvk4jejuY5QF2jeUUGMjf5QQyWk",
  "key8": "5YLnwNsVnumf35K4TjzhpK2JE48KsjBkutkBfguTikTbMZSj7pfrGsXA2uqdRF5m6ADKsamxa27jDruGBkAzGKij",
  "key9": "3Ao3zDkrVKZhDXDEULzmCuCBn6RSR4cLGQvaPNn1A1oAg5uCxcdSVJT5nyyMxrdDhNAtQxpQpD7p23NvmhJTrfcY",
  "key10": "GE2ZCRz2pA7p3GRBRVKrySDoZPCg154kxFG1gEyKm2xi713W1NfY1TA3r4UgjuC9Pw13KVGhMzs1BhdEAPutJGH",
  "key11": "2X5oZKnoATCdm3vpjSZbZya6f7CkYpWy9KCZwzfgLzKaGEkj55fWZiumhb8zjPJS4ufKhphxwbnTRZy8DkzvZxty",
  "key12": "57q6wnrZrDc3WXyY1VPPJouB3PCs4tWfjHVzpmh9utKpcadiAGqXXm8CioBgNd8vd4WTLhsCa7dNqfWsa72Spcp2",
  "key13": "4UrnciSBC9H9RqCMYXSd1ociiX3H2fAtyXvQWMXWQ2HdBC4FTg6b2iotRUnM4x56XEAw5dYHLcJbjqbsyFmWhsab",
  "key14": "4AQ56hg8hyh8PPCFDwpadhCGj8N5F4Z1apz4D5XKxyWbSpCCBoNYfUb9PHLGou3ob8GDuH7mVwrhJi3Qi3ryfMdp",
  "key15": "2yGw51zwehGcSiApfQKyyWxWaTNsNqvRpUn8uBB87ELFCE6gV61AoS2ut1EUVEnQTWP24SCTUDBKd5bWw7y45vu9",
  "key16": "dPyLcaPMmVf6sDsBWtnc5MiCbNAJxLZ4sVZNr1egvdrGe3JdQgjQw3od7j8fsodQJPSgFwmjQgqgCapWHTRmUyC",
  "key17": "2jzUbFupVjBQ8gp8DuqXm2CaTwmKJHaBFVGCkQbnDicCyffnmhJjRGdpmisrfErF2iAodPMxheszhTEe3bLvCdDf",
  "key18": "5Guu5oqeBLN6v1yRB7uuJkdAe59AqGanw5JomX6KGZfnYVy3hb7X1sH7zvqgxngkdZKvkmxodMSuDLsn1UvTPxJ8",
  "key19": "2hU8syBJdCpcvcmqsXAR9pEsXoyJcUk2FV6mZLB3RrEREbA2aHufzQAekwMDsCbWWK4ak3x5XXWBdbb7yEknAjhp",
  "key20": "5aQkXsFUPtcMiNQV4iVmAbRpnVRYLrAZFNFZxbTUTMQgeNhGW4fwtv1y8AufCcYVgNbdgu3JPnVSSMArVsbmGF1",
  "key21": "5oUvdrsgiNraT8xg4pWpdGZZKoWdKHtiEiQBVZgsnaYrJXSkp6UYV3DH9jxRyL3k66zHoEE7X4ryFh1sXAEWqL8P",
  "key22": "2kLNbVnhx36BXi12RtvWAS1YCH3aNnnN8YEoq1F5giaZvET7iwe3sbPCMtE1NLGwKquAxpb7yTLugnNEf3c5cVtV",
  "key23": "39ZL3G7wThJUoVo8ex2dsN56BhLkXs8UCoMAWDxygNDznwBkRe4xM3YZydEY43EBPLrWeWapKtTq7amwXQjp21XG",
  "key24": "2MTUHH8idQ5KjpemH9vUGTAUKhWujJpaju8NvmcQ3m73ThNQG4FPMXXbD8yFPcjTn5YWEgz16uEorsrcrUDY1wpa",
  "key25": "5Rwaa6DtdSLok3xQikZgUnnejitefyQdiW1FVGLJ4qmJuu4QPmNfGVPUt5i4VwVhZpVtaXhohgJmhUhvsVNx3p1v",
  "key26": "4VNerveRkzojsdWaN2YytiozAx4YxS3wMpTioizASZnkAxzYMXmDaGdsEuhwZk6tc56b4hqHkugdrmAPKFukhJCF",
  "key27": "5rZVAgh6XRdPtuSup57RYGJDrsUsiBfK3J6EftHtfrWtn2y854MUJipb4ZtotxWVd3NtJqmif16Amdd7g185h8VG",
  "key28": "2vgnDfX7G5vjnvrXUu9sphTW3RAwNDhUxVTEUHRbZjGUGWBooQGCam8BwhpQMLX2UN66f2iXYCWjnLFynrjzM4mC",
  "key29": "552mYsQReFGbLgvwP7L26gGUXFyDa2nXxLNH321X1CVKTVea9quF74ua927kCMeN5fQK6ZrRTATydynTfhKZchsY",
  "key30": "4qy6oEhe7jk5rZg1sD5ssXu55UGd4rU9ANwx98ZFsUDyB9gxGK8jjPfWsitUysL8VXHhPjCY5TCcxDYvtrnkP7z5",
  "key31": "52hPrYTGd7wdeHanL7vXShKPCJa1LfKwMTjhZ4EwFSJn29gCxox6vAeBccWUczgJg2u9mfxZb9GGWwR4qWNByJe9",
  "key32": "2h1Fd5BfkE5yMXEEte2hJ8qMwfy4r6Zo1LjBgixAYRNHoeCR6qnuNu2CKpKEN2YPtvz5tDgbWv1hvzvJaf2z1wHT",
  "key33": "4i468aGc7tcWeSbyxCGzRvqm98yzBY1gcXyuE66k8JwvZ631u1qZJgY3pmQFo39FrNRXmw7ohzyqLqKuBu42dDZU",
  "key34": "2mYLWW7kxXf9mLDVKPyEanioAgK8VQZeQf8DgJinHRKBJT37DwgrEf2sBo6bZgofiCLmdoKBEMcYRkQVJVB8XeM8",
  "key35": "5MKKAPEJdxd12iY57RpWpJ6zkqKjFBDM8GV9SvHnv75PZoBgrTxeF39gAQFkwr4zCHYYCYhqW8p7nBRHeXh3JDwj",
  "key36": "ZcuZCtGGkoQfZvcXBKGGJUoPrZJpx65QGXq2JtzyYsr9XX1daxZX9JdBgyH6j2GUCdUf4UJduUxieQJxio9ukEG"
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
