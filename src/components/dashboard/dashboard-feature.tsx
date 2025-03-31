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
    "4gGtvZr2E7x28pwRr4BVXZKMhnFWBrFgWRxjrBUfZMsXHZbBSZWAvyvZZYf12oz4E6huAfRtqqKfKmBkzdFeTy56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XYuxBuhvU5Kr7vEB5NQJPdSEGBKteGrubCpeFiKbiemcanY7sCgQ5AfgSgUGfC9DUnwP4aDzqbqB1envQn29DR",
  "key1": "aWhQWB6dND1ADWSLSgiqXsoq6gKzXmRRkYQT5urDNvqtyVe1UURx9Jch7KTkzRvvWydWJdeDwE4DvMTpBCo2iZu",
  "key2": "tMzuhgcRdazssKySnqsht6sYceP6EYPnBDnu9BVoQXM63etBE23tvcvh633T3Zxs3RaEMT5zf4rSyW7xNbFLYfi",
  "key3": "4DSVRVkwss1ApyJXsxu4bfVxewxtUjba24vjxZXS3dKL1kWhRptzMZYFdbA7BdNr4DX1VNbQTbzU6fR1M6TQPaTQ",
  "key4": "4kiCpKAxAAWkZZt3eLh2dxSLNnZjg7D6HBCQCnDp9t9jHWfNpK2JAkY9o8aGrNk5P7s57wrpsXaedc6zjnb2P9cD",
  "key5": "4udHMhnXRi3xn5EYi3wqUDPeJ9wFWyQKVd3o565AXGHMsh9MvrYXPpqM3gHaHPTfVUdnRuhMKExiHZtbpmGTwz9t",
  "key6": "cPEQeNf9jV6h7KfzkLmfU63C9oqYYEsjBzRkhti76LELiCAWE5UmJSUCZMxMni4XGr4GLzLsdEjo6EyzFZR73qB",
  "key7": "3HppPKtaaRf5H45oUV5C5TLA2ei39HNL3LUzcq3Pqph8ca1vL3VJzznZzn6Ntjvm2ERZ8jqfnCAKdgDaobcRk1vU",
  "key8": "2rdazmzRd5TKyxwdudixErxRxQVm34pGkzxFK2btKe6rqA8oKNcCZGJNsPsJXngzEKRws8Tsf2xWV9B9m5SrHXqh",
  "key9": "538oChDjgGzzQv4ysX3ZSktt3XRG4hceVPrNrepZ1gnAgKfr1qF4iJwqbMihLMjcBQGvHdgZHKQoTxNyHWPAAPic",
  "key10": "4iZcpv4Cso7emj8GCd2P1eNKYA6UFZJcdyQ1uK2UxUPKDssmUt6kEvvqwK9MMqN2KQ3kgCkYJg9p9ugGVyroVyeU",
  "key11": "5LQ1fzSa7gEkfGFPdirFdQAmcG5h5pAU1d1axFQgL3L4qzbVgV7nwP4DRGje5w2Gw7sX2tjSYjRYiVoKqAjqUnPF",
  "key12": "Qd5CgZkYLiy3qyL5sWHXiieZQTWdeodLX57vYrRra5HoTNQTF9eNUEbik6K4wjiNXASbeWsLDTYEHs3uqjVzFFb",
  "key13": "4U7j9BRL1cWmxG5zYuDNzai32QQM3rXxgJikCW8spkiakP3UMny3uBzrBn8dUYS6W88Hkx17uHZyiyHuhbwanN8u",
  "key14": "2g8z2kffjJxSHYmUHnzgZVNttqLeEcmtpPnDTgNooQSJQUL7mkpJXiNVBUtpotSqh1kvjcZuBWCPYkULFNtKMpw9",
  "key15": "4q3pbU2chjiVJtxNzfY2sRCVtFfFzMXdTn95zvBTec1KYmqpka2xQyuxXnjA7TmBAe3BxViCccgQZZZ4rJYuhiwq",
  "key16": "2uqKziPiaboggYU7sKVEEDrsVftXGX5YoRTmUW2JnmaHyHRFX8GH5FMeJxxoxnixsiFk9aAEWYg2XyWKDodH2RdV",
  "key17": "2VqLWdVe8cfugCsEmzFkPRxWZaJo3mkadvX1xfUq7r2B9yA9vMm4TTruMsjk4Yz2tPQaXgpCSSDYQA1FyWnfXxfS",
  "key18": "4JsDL1LcSciMa8hws9kF9HErzaWK2joy9wt2sjH9kwFaW6iZirQK56LF769rbrxs5ymeGC2F1WbjHFCLT9jNNcq7",
  "key19": "3JDMdLXtNg95Lw5DGjwdK6CbMYgas1GWjB5QxkhXHz2wxjeZtpKjWVCFvQMMSfoxL6uRF9TH76uVpSeHUhYteHp6",
  "key20": "3wJbNwaHQWE3NMbnH65PpseMLg39MSHDTh9XLf9Yg9RoX8JrSiD99MjEb8WkG4wXLkaGPiPQz3JiZTzM18tsjPxF",
  "key21": "2BpwRo41PtPJdy7ZccFBv3YiYECX5uM6JvYdAAMnVVvRab1yAzY3iiFSe35R1p1M1hLitKbm6sHPZn7n2ns5ryDH",
  "key22": "NCh7eyH4CWWDdQEVNL53MVKy99c224Pp8cXGwzWssNBac4We9z3QCEtVnbAbE11cVgRPkYEgRQuEA5bosW7H9V4",
  "key23": "2pa1vYGZ6aqDfbbDaxsi2nzi271MEHcUdQgzJMD2fC7ydUvu2gJPywkbhLhZwEPkUDUmtvrxXB8XWn4ubmDAn4D",
  "key24": "8hgcKfJX3Cfjf496bEc1pyaSt7yWr5dHtBFX4VBJ76awcMBgGpFJ8D223fQFvHuoffhTucXWgoapU1yb7HXaH5J",
  "key25": "4XNTGqwphZY7PWWni9DsKrXXf4rdjaRu4m7yCpeYaGs1iVaqo4UepcN8FKetcADBax8q9Au9mjDxmty4z6psMzZS",
  "key26": "5hzNMrhMy9pfn7tDP7ZUXKrvoF6KaiEtYtj34D7msugaZKnT1WFjoUfEEish3GskNYcUzALPZUyHcFdLN8XSkGHV",
  "key27": "5J5w1Jsi4cArQuo6g87siktQL7Yt72Btbwo9nNaQCraeGuzEw9EFgQLgtfJaCJCbLTxehf16H2ajjMmrUYP2UprH",
  "key28": "5e8uCWYK8UFXvgYQxESaurawaQGx794gwNyFZYFaWAF2cecW942QX3E7XfFxnZQVf2RRbtK67oFQ9mMruAvhVvG2",
  "key29": "3JKN2m46X48nbtQwb8fW571YqCK2bo1Gihs7A1p8QbtVEKJ4t4227uSDgKBXWhTAJ9Tmfm1iShydHPpuRmJXhkzp",
  "key30": "2yyFRL4vmG7cdevG1sxUp6n4PMRsYFo3pepdbZsUjRePneTxEiA7hsQaGLwTb4MWNzcYadsnc5yWsNPcZVEiKyEG",
  "key31": "26sp1pkqiM2qqN7LxGCoZVZuCPiiXt87u6rkpsXtUgKcfz8ZYX9wgSBxWvrv558XiKAdDXmzdUFjqQZCwhjzrNBD",
  "key32": "5tJXXHq4c9tjnZycnkEeSFGwLujpTAtaRXibX5DWCdMve4QR4db5vKSoKZiv4UegHSquXdT9hFe89jdgahjfXUh3",
  "key33": "5msMZyB8eMRiGt7bMXFRASuCftf1FEASMTEwqT1MgarrWs8AUndQvSRSsfTatYi2NyP9QZCZk77LWtsVBjGKn9Ra",
  "key34": "4pNu6yxBavqSveGjfgoiQAXpSMpVKAkZHo8Lz2ui1vkUzYrBpNws52GkmTRrnBEorRwcza5zHxqL51G8CM73Skgi",
  "key35": "4zGxmpNq6zSqpFrzsTKhZDgeguP7uKFvT8rTnvMqJucAzagwpUbNJ3UpHKGi5qECU8Toh2xbofiKgQ29wS9zoQN8",
  "key36": "22pXUbnkQ5J149SaNMLJ1kXCfjZXjXXqQE7kL41RbURDoRApuYq2chJoq9XnQmxF1gKr9XC4xxvWxxGBjaFCaXd4",
  "key37": "31ZfuSfnVhwqnXZHcnWnkbfq6vVxuseUrshgLF9S5hXzHrvwZw5jC3maEaDSSNrHQxvTo29YaYcDjPFo8E7jSmGS",
  "key38": "5znSQp8wm9i36hHUMDzSkNAqpFGNusq9ZLUK6HVRdcZpVzR9bSrkQAUAMp3hjES7YqPDrAjkDtcqTNxCDSwDcdyY",
  "key39": "4yaEKukiSsJiWZdbrmXA8dwGZ995qBqndpQbC7LHb35UuTTQphvRdqKFyznasbH7gPVDN3G6A1veVLvJDUDccf4",
  "key40": "3qESdQtLTfRAfYVtjf52i6WfjobCmhiVszrMibbd3QXu2Pua8oGeteKncsZbnutQF3nuN7pco7oRfn55gQjBzq8H"
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
