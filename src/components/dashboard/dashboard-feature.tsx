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
    "2MFZgG4bChEipjvHWV34FnCLRoWRJBph4v1SE5dA462HZycDc1kVhGWUNKhH3utm3GAJp4auZakxBNBN2JxsLtbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEpaPwxQnP7JxQPPDzmNSxGuEhezyrjxMvJbheMX1Uhx2EVkTaDWsNSgAVMNeCH1Kru6qSUnsfqRjWgpZCr5Po4",
  "key1": "2ia56J9irBcqsvWrxTpFW3rSfRKwdJtyL2nZ7dapefPmu959UHAsxvCSaQXLERF8Bu7ZdHQS65mnHUdc8PWhdTif",
  "key2": "iM8tEnHYfTSMDDuqm3Q8oqQtTb5vXRohJT6mJnVsRU2J3WWhdbKdo231C6Ve9FRQxD7CUDMmu8qrLkj6neSBxqA",
  "key3": "2RTATEWK8ieYEhkzQXmACkfbR228okbZX2MqKoFiFTRfWLgti2cq3sGRks3d1C3CxziPSo4tvmr9HiwtBnKNyUYz",
  "key4": "VAcPg5oa48GxD5xsTpBUXNsg8iEZhF4PAr26hA3q7KSmsDitJrv9bkq5fhzgmmvtrWwGDFqDt9j7pTeYkSerHWa",
  "key5": "2GKritaawWX6BpVsnaziJivHAUHev3wNtHyVRHdYNX6zVQDSUUg3zV8R5bYXwajDFRHt8H41HigENA1c9ZcgrBcd",
  "key6": "oJHfeBmtuj347Y6m1PiFnHqiP2Y2kutpcPcXrcsSagTwrsnoR5RTe6Wmp6g7HV3ZaNaNspxbmWVYevXYe8wR3Py",
  "key7": "3zcf45Ctde5XfQurWJ9CMg7nETdkwawNgLt3bmqeoWAVpRN1Snozedr9chHNsDF3KuRq5uQvHUHJEkcTmSZtMX33",
  "key8": "55wnSss8cUANBAj5MTkshUtQ1s6TFedbvJpT87KDdM1vvUz2H7Y1JtBoWfMQd1sXawJMBhnpo11gXguEsPpX9LE1",
  "key9": "sBZSBaKLcV7giEc1hYBK4QRNXqW7eNbg2Cc5RbWppmBBKa2z76Lv8D4dWTKFvRsBv1vDUfSJrQwuuRqPyqnijuZ",
  "key10": "qwHZzBcKcioCH4gwTF5ipkCYFi8o6x8MPNvrnRGH632rvbq527413MRdGDL8YKX48qn2YLoeiombJ6Af1dfWD9b",
  "key11": "3Txh732FM1exMDUWm7VLXdPcqi5i27H5Sv4kWDLRVPaNLzmoCMi8r8o5kjXVwAy66HfsGyZxiAtC6p6iSSCthMgC",
  "key12": "3V2pCA78PjcZ1fYz8bk2yQAHFMa5ch5FTQK5gBqtXJXfp911pe2QLDMuFLVvYdmoEV7R63RHYf78eKUjRw7puVRu",
  "key13": "5D7rgceVauuhJTH64mV5sFKRf4yzmVWsnWVQkLih8W3c7mRnt4mYy8DL9pV6EYvSes8HqRdj41ia6EsWL1XdN6PL",
  "key14": "4fhbdXoLexYPcvdZDcLMxtSKJbKCkyKsvYetutf9N3m5Kh7n9X43ot2xXeJfcXvGa3W4HPRtkmvvfxDVaexWZpME",
  "key15": "3AMLbuw541JNZxMnXQJ8CbtFjVap8rQP6FVZbCnnSog7yTKaBFEV19uYeVHV3CoKefkzZuuJZCK9u3c16qgEBbiZ",
  "key16": "3bd7d6TSc5EUkzbCF9cjnEEjf5aYRF9VkNtfNA2wLK3zRvEPbXQBE7jFKK5m2f5kmeTSGuvh5xX98BWGDymp9HjH",
  "key17": "5ZbsFxaCD4jsvQKZYFiVijKwkCoHSPJR2AS5BBqtHfCeRz65SRZosLiAA6r5C4dooivSdAaNXP4ZNLyTxEwHEcrv",
  "key18": "4fE39SGgeH6YMrdkTjQ92SXDwPXAQ3ZoEtBRhTYYe7GAcg2S22Lh1CxsUqAZr9AK8jkENt5NM5TU4FMA4JATTP9",
  "key19": "5vjHLq8vbHBt9Hcj7BReQTc6uV5t43q5rmcW7WfHcn16sPyTaRG2sdEdgQmB7GroYHsWi74x3zWEa3kPnJZuBhms",
  "key20": "4T6wU3kRqYqDV4d1RRTEL6Ac9cPJn9JEY2Wh3zrjWWRSCDAopGFxS92ZRUbTqo4fomuH2TqwujiDq7i4eX13VEWt",
  "key21": "4ErhbrkyE8RHnwhSheNpbzSxwvAjLDFUGTji5WgN1KjfeWBE1tj9F2niL61X6kK2sV7G1jWrHkY4w1vZBPUmH71g",
  "key22": "3TKDyXDXf9fVD1oowGts72wvfwjndjyN5qghDwxjKxBYTLXGizApegoArfALN3NC8B2oF6bYgXGdiZDjhyc5iMfq",
  "key23": "5qP7jkViage8EGaXV3CRRdtSkGtMRpaHTSfhLFVKmAxLE43ECMkm1ex1mdbz5vU1e3CvoC4xc3bZxNfBZXVZWCQ3",
  "key24": "4renZFk8cGHS7dE8LLLZZo6jN9dheG3skVTYng66vcTCf9KX1rDAUZ9nZWVeasRSKYGWoF1ft5zv66spzLob9mhH",
  "key25": "3tD2WhaawHTFGTr6YTwTfg7iLWSzdCioGJNuG3P8om8uWZnBfpJHwQ3CYGziK1HrB5ktDT7yZ2G72Xwyp6f7ENHE",
  "key26": "6NoULKvcrHqeVH1XQVhZasY5jQHz8KRWZjMYA7Wcj2PNUzhc5ry67HKUovTVTrk8NKwSWo4xG91hqBgNhT73hoh",
  "key27": "mANezC4ZHyY5S5e3apQRPETE9DbgtZdPe5AruJLcswGovjvkvV5ZKwYuFNkgUY79HiiAtSo6CFwkkTG7TRGrSut",
  "key28": "4WjFUJB3jEL9uVaQqPjjdXTWBxBhMLfVcYcGL4nDA7CCZu8V177gHaSqeWjEkQKFa1ekTrmpqXXCi6njDiXzvfhe",
  "key29": "PGG65HxRjVdbmsM9wxwwrtt5ovGnuBdAZcAnEWX4sR4VfzprBNTGXi1Ug68187Fz945cZi6RQeR5JbyPp7xb4eG",
  "key30": "2kdEyuhu3Wf55Gzq8f9vPKovnrh6XmvcKor1tBL8RfEo9f8Z7W1Pec76Gke2AwWFkndzyQppaWF811CAH6CNV32K",
  "key31": "5eJsdA4a4rA3pAMxLSxjq8fuhUQ6PpC8nM455hjWYh1ZRpwL8JJTkNKfEMF6RY35A7iNfkLS2unmSJRp9jahu8dG",
  "key32": "5hrGknDqz1QxZTVNpKydkgPVTQriGzBnpb8keTjNhMsjfLDhPVHBNYiwQZ63phT9SmgxS2svUFifmvtRyNuqT9u5",
  "key33": "9H94xEQi4iE31J1A7zpqTB8BWgoi9RrGQrHpvzfqWxZWUscqPmw9f5hqoNt8bKSztuAm6631LxeRHMydeeRPTE7",
  "key34": "2GhFJHayf8hCQJp5arDkWst4r3XsCdjQLmvepn3424z4RVdzq12TWkeXWZitqycp8YnnJf6eNgPbzp1zeq7sHPHF",
  "key35": "4TagJuvu4tynbXni8QiEjNJTxtNhepdLJL4Zf8z8mCNT2HjvRGUHo29uA7AS2cqyS1h6z7kbBViofxFFV9gDkYRC",
  "key36": "DjTNdLMYDZDy7Vo8629XFpUwo8v2wtm2MjzcHzDkTvuB8nGb1qG7Nn739S343z1ZJemVdysyTdRA1ezCXcgVPNk",
  "key37": "52EkMaQ134DiHJFsinv2pdLEUWZ3WSiMX6Q2YbQxgk13mfCmB29dyfz6AgLqhiX7CBv7beR6jGoheB9v7PgGnYGg",
  "key38": "26KnNnGiPUUYHQwhHoNhoK3NnNGvBL4rLFsLFwAuWzg157X2gJA7q8dPCFJ8qQaxGn8sgeGbDPD1gUyX36Yyk41N",
  "key39": "2zMKvb8wkdHaAc44vrmg4y5HFSmrFyBiBuRHquCYQ5yfB2d6YqAYA8A3eDCqHhTruadmUkZekKYjW82UetwSZWkq",
  "key40": "4kt2QXneUgjRLGajMvUhJqQep79JMbdU7cs8UtUesZS6pQLj4jm5RkEBq24XdqHif5KB9ZBMVvaqYkppLdgAeuJY",
  "key41": "bY4UuEkRt6bydgNLA5myYVTW6NKByEpmgbjh8FVfvwUmPhbHyMJRbQWsjZbSdYbYDDUVVr4Yvz8GwFzVSQ7gfNG",
  "key42": "3hP4rY1R9uV9E4xL7chNrrzvKwnn5whMMZdJjsrZnvmtFGDGTUUWn4N7GW4BRBJTP4wm2H5FKYKrHCYEZn7MYqhn",
  "key43": "2bkHCvFBY86WAyMy2XNQ4ADrq5RwKigyjwEbNEzEN6aL7MPzqjUmURmaR5DEqGmskwR4bV6GBjKS8MpWoNsPo4tB",
  "key44": "2uwJema1o6j4iJ88qo47xGPMwDkWoebLYpPu2UB4JqAsY92GbSRz3qwub5Q7dpx38LM4CCoUS8fHspXgwbZUxovM"
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
