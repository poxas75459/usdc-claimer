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
    "5JJ237VkKdrVHab9g5mMU5kJkgg3TDsMBhn99oW8W3NH36N82sXXgzh8NQfT319jPSqDwEvTTvj8wt5ccEVim2B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPkki6DLeuWEiGjHGxSQqVFtNqNdwEbPdiJFtj1Q8LrhvkBXxZmtai5JN78UhP65s6AYHQhxkrU5wsaxwNUYq2b",
  "key1": "2tnyoDemuMHV4XVanxdiKpXdKkpjVxo1VY8QmvLihhtZhFNJXAANy1EgFLPEpKd9SYttwd8TAhC8GY7mj5zRfwns",
  "key2": "qjxqJe7taQAvNoKSKkUjwPzRmZq3kA2ExqirqWUjHnWExxJYtN7fP5KgMDKutDYBZSJVwT3QB2A4ia9Ue1HGUYa",
  "key3": "4wb91eUUGsRddsG3fD3Pxqe7JtVLUUDLAEzgKP6c69rRshxTSPVqUBCsKsEcrCXnkSKJ2rnCNVuGCzVQ1jTK5ETk",
  "key4": "5kE8GteV4mGFCxj9MKjZzeCm3uUMzfKRYpiF15JiJeQ7W2awGpo1FYUYTjYJpUKofzUs5CnBfLjkrsUQLQvQA3jc",
  "key5": "GPkvEz3kQ8GxfRQdGTiQB3nSwUNnxK2dhX6uWE3kKwLkMDc72osNanUyxsfzLQtgKuhwD3g2F41oDJZ95FHnUoE",
  "key6": "4dZrrpijNUSbL9C3328YcMf3drjaPwXnwubhmVVcgvMGjKE9Z9Xi5if5TiZJx9LbLcJ9StDhr1iikrFs7SrAu77B",
  "key7": "5c4VkKMqqtH8cZraLFm1XEkuovE2FBPdfWPB7Cj4cwPHrQhvea69FDQXE9ocpZnHyCkDw1Mkcf1yvLC6RmLEfFk2",
  "key8": "3wjPqVBz7NXkZGAapkD4TvNkgrzhhVzoxcL7pvbC9pDTdadGwpA9rCjHGG5KwDNekYYuBxaoueriKupveLY8wjrc",
  "key9": "3wJxMtMQK8ABNQJ4ChaZBm9FNjyBavmYZHPJpHCUa4G8ri4751irRuJ1F5qAnDQEM47HjwzZqKYwKPembQDmHsaX",
  "key10": "5nXo8WxxucobjButcvGhVT92L3X7nQXXxBKFDuE92A8FCcr9UhMH9g4SYzzGKmu5XptAHZmfdoayAmUMfw6YrVzh",
  "key11": "4QLdW7aLuJirJMpdvk5qU2AG36Z6RQw3gGsheKMPfdTpEVdKT88JrzJgaXyDbD4FeuJME8oRgh7ByBH7EM4cjzZU",
  "key12": "4h9jPfn9ztbTVuDZnTP5DYE8qpB835LJk2p5AVAjeDvUThQ5wXSsVs3kxZNWxgoYcG4Ca4HHUbGZkfnuyoC8s2zY",
  "key13": "5LJGNUPgE8ZPdnjrGihFm9D5kzs4Qpqwvme1wqjRPWtaXJTY929Woh6jGzK3JwTeR2J48VKTUjzzQYiAkqVXmWHa",
  "key14": "DipdKyPnoebRR22mfg4pCuiQewJR93SqVj9vsM348kb6yV9VDCD1vUaM7VE6LxXftndEB5QJ99SNfEVgjZiKQHR",
  "key15": "gGAU7N9KJ7sKpAwqnTzx5F674ovHCVTvENvNajbQrYdaXNxJ5EfD7g8fPZVvLEHaBM7nUZJjVgrL5j8zSZQYw6Y",
  "key16": "511UQoYXYrtMzif91zCahEFaJ5YB7f98v5cnDQG7a6nsy5RJQgbLF7NLsWCu2aepAig9P4VXQFiMxFfpgbqQFZfA",
  "key17": "4DcfASfCe2aEG6diwM3nobSLBfWPaFEgyJ1BtgBC3zuNNpkxmZ3yLi7VYXurf3oKYJ6ojcjUX6HRAwmZpypbuhKz",
  "key18": "29TKgBPQQdY8PZhFFUkdo73hamp1AnKhC29iM6fuVqGg34KxqVfzLx5kDaipwa6HLe7wDtqcCvuBHRYjH3X5CJ5D",
  "key19": "2EbY91pjDz1SXNFcXcn85QdLdi36zCdTzdkh2GzNXUHiHszNYqij4tPqon2VEgz4io3wNAjXDZtAPfo4dCHJiSMd",
  "key20": "67Er2sCUG1TpjVCo3faw4i44MB5TAjy3KB9MfYWZMg7myesW8xYWHosiiFFDRsJrYKihYqqXkCaW1jBMzq7J9Cu4",
  "key21": "2totQZyDVbVU2srtHq27cKeLgHhy4pPqJXntvEzf5CmrLGdCdKhdvY5ZC141sJs2FuFJ4PnCRcAKxUAdgyW1KErK",
  "key22": "3wcXDhrxDdi1knHnNiwxTBUjS58ry7frAo12358QXM2C3NiikW8oyoD3573Yv9GYNNHZSeBai2o2N6UAxSEDZCRa",
  "key23": "5pkdkdqcH99BuAbCRhdAvEa3pVv72BsRC8yZcdnKGVvVc7ku61n4SFn7MpjMf3pLKETjnkAQKutiJX3scyLSamTW",
  "key24": "2rny1tETkEBUQTRq8rHv4Uc5mEFsAdbVav4YPLq9zcbHZqVCN2YjjetgEfTxhCq7X24WPeGQ7TEJ372ALyPhfkBN",
  "key25": "4W1hw3yRiNT2PGzxXnPWDcCP6FCKTtqpmAJp4efYdoYEjNrBmW8MuvMmc7jqMgizmmj8gg1Je59XnwNo9uihUKQn",
  "key26": "5abTULpJT4DoivJgvc63cEECS24fdTYJ1nWMFEVbfJRdjJJCkUnPAgD3rGmFMJEN6271q4Fr7GMkV8fTou4BCxXL",
  "key27": "2XKPgUFyZkTuokEzAtoKypXpx5Lw2tvZndfY21EP9o6NQTuYwBahzDpc3XajndAkk5uTmTFVn9fmJ4Utf47By3HT",
  "key28": "5159itt1Q4rWeMfwDkTa3iasWK2peHxDSUe3jeRZsy7uWMKeLoXQVFZCaq8XNM4twcUtZ1nXwDbmLFb3zb29iXNR",
  "key29": "5MJQiPVGJxKURECXMc96d5thrwfLHPSxUaTQAFxHcwdYHEWKBQkEXXHriTB5f15mRb4fj2Hf8dCdk7JRLQSkdtHm",
  "key30": "49jddhQcfzA3y2BSBGbggi4QtShbSG9akGdwtP9hsaai4Ec7QnJYrrDD2dwUb2reH8ySmHFakbAveNKF6CBtT327",
  "key31": "2JPHeTeQW73jMSWwKFrseTbpEGjciCj7fe6zzKtJPUPvquBB1tHYjtwCvao6iET2mHRNfqjqfpr4mV7XWXvx2ssc",
  "key32": "4E9P6S8ENBcDj4y45xq4bAfZTK1aGciTUAY82YfL3GgALAmRtYWJ1ngQK5MATgWsobigoiTmDboVmzcfmz1SgtuP",
  "key33": "4PSXZYT8k2Vk2jQsb3DpDgUwCboF2UfSgMNrdsj9Bi2H8dZxoXaeWevnwnyCuWZUa26Zcba54DyLve2rRprJUGM3",
  "key34": "3A2A5ftBEBzmVn3iYbEvJQuZ9DNSw3nk9jkWaYW6gahHAMrAi2Zv3m9gP6nRizpD2krViNPLcRa8XeLRkyTk9upd",
  "key35": "352Rqr9Zwx8nf7jeWwrAHcHzArdL7V54aC2ZFxZ9k9728YxkZUga7Cok6X2c4MEZpYH9MR2nNCBWekn27hQFhSry",
  "key36": "5FNs21oJqp1eLJYr1VHiQx6bY5ed9KNaSJUiyKH1Uf6SsEkuR12Wfn96gkttnsFoasT6sRxmbn1BWXCbGTudB1uC",
  "key37": "pRkZWgG7cqfa52MUP2LzUdzPjoCxdXM1ucNKjt2n1Z7Z5VGwnJxUhG3T9vZWgc6FePUxaS5qarvZQyG7doQQRRR",
  "key38": "46oVnUFbndMLA64q82rcdVpdg2S8Ai2L9zbyC5EoM4uujiU5hfn3vSoMLjBffmMMDaUJRndLQX7JXqrsLMyAW4oq",
  "key39": "2GUcHrCPhQPSpzAHZWm5UtLYUHCLHfmeLpMqrGt4VJie45Xs78hXt5wQyi3Aig2ssEHtdwzMDJqM5SPCLGWbz1tt",
  "key40": "4MmU3sy49Q8eNAZZTruNodJRUgo7T9r9QtEa3AVEyVpuE9hj4TaWkeKZ6L7ExBz4W4uJZxM9fkZvvcKHGm9QqsVU",
  "key41": "DVeRCHv2f2c1N4QBmJGtryQQeSuLf4sEa79DDxBFF7Dx6N2C9h1iucRW8KT2MzEhdukyeWdjBN88XMC5RGEFkx6",
  "key42": "5dp7VV1rJkoPX7YnsgZKq1oCA1Mqa9zeLQXqchf4xusX669gWrbae4AChbmake4gqaLfQyzFcsLyi82JwPmDDaqw",
  "key43": "gnXLab9noPFsQpFhZqpGB1VszDvP3878Sc2hh1FA1di6nhPZ935Y6xYsp8wKkWauqVyzkRCyjm2Qys4NsX64oyE",
  "key44": "27sB4PaHpqLQxrm4b9bgV8pfYdANRidUu5JVZGsMNqpmNgBRn9zPyggwkPrxKeWspjwhitxrXQF3Y5h3FWFhrGjK"
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
