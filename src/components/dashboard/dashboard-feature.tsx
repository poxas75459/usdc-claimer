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
    "5Boei1GauiBKdCpbYK8fboygrNndTg5prKoKjKegHspanExRw7QPjA28JupZ8hyWKXnnubMPrJTKKrrcbtGozRec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZA8E8sqDEjXtuFDXFNRQzkD1tp2CmZxqdPSv8WCijXvppAGpbHtzUNhskQR8VxEPJ7xBNaEwWRdPr5Xg6veyRS",
  "key1": "3qSGaLjrBocUKWBfYe8WVEM78ZCtgcnCfHc3tWau8GcbYVVeMfU11T7dZaKfdqqEQxeXj4ZtY8MSxmDwuYNT5T2P",
  "key2": "61LjsesRYHk3v7dxKkpRVzq7x1y3UbuPhep9xPy4adrNM6Y1sMfQ786ovr9j425Ge4jRtc1RSMxJT5DfmuFK2wy4",
  "key3": "3Q4UMMzRL3Ew8fpF5c2teJrwovvSxCY1y737itcpB4U5GhPSYVNUeXLfpb39RSLmNtBnVEwfe6FYrMoBGcgTr3Mz",
  "key4": "4G3acVgKWUeeVKuhXYGsQfA21fCHDpMBdhF9Xfb7q84eMWnesjJaJLHEUucfJK7JyMqAtvdSDzb6x5bgxswgrEwt",
  "key5": "31DBkrjPrb3isbycBiUH63sURW73surPTFJfHgMM1Hmb6VKYgnZC8x6BCXauSbxL4BJ72fowDV2pbEPdBiuSfwTV",
  "key6": "4e6UNQFjVFhEeZqXxB1dXVYtnBmdF6f4qZDoXDwWbwUh6b1Ex4FGLkvvmoxAsEN7mkYT59oumZYUeBjxwmhRZAs5",
  "key7": "649QVDtm3zm1jfBSDwAE3hXs9kc4NFr6HyyQT62fegBreTMDyZrroTq5AX83M2Ep9brzYmvCk6wr8SMKjmUp5vQF",
  "key8": "7v2SL4pQUyw6TBw3AsyxkfGjEJbiX4iwuc3jwqhESqrfC3BAatGrcr91fXnAHkbCDGugveotSoiqJn4uHfsd1kX",
  "key9": "Cns4Qs2hPM7UvbPREWPSBmjky17k28fg2FDeRToVF8w2AV48UD6QjeLAjKwbdixXRBqHXk2tuhR5b1b1bRqXmDt",
  "key10": "2oKcf6PbVRMX1tsNxjTVeu7ZpPneDS2vmxKQb6Dd1dVoeASgXonP9AMcEvqsdbkKHP3jEQ88oSizgguw59iBnj11",
  "key11": "5tR9iTmd13FsPwq8vihmsSD9aZJ2BZGYPqdmHbLLHWXKyhUg1oBJyHVmgFvbBaPd1srMRV69kFczJxTT7hiWXkdS",
  "key12": "5CtmsB8HY27PPgcmPMeeUPfBitpNTpwTVLYEw3miAxtgZHsx3SY5rLEyeNbMmdmmzLQj4EQGmJGvVAHmEj5EisWH",
  "key13": "233QrMpS3Uxo7S7ZhxyjNxgv3Xghjz8M91jphDUFYBMayi1H9cLNEXeaQrcY6Acecxq4hfUh4yuFiCXqXiNYt76s",
  "key14": "4mZXwaERYVTpFgVrYL8JMjuytKXLYn8b9Gqp4ftRHSig7WRf36GYcScLikRcahzMmB5yCXQpaJqLtZo3GpZpCcNy",
  "key15": "4nXRawAmbEiUrtGgcfs3PdXRgocUz5Gzpw8qKp54Hmvyh7UBzVMWg985tesNAkSsft7v1ziPrApEWZPb6JUHrGrG",
  "key16": "56ujzexqv3ALEk8Qc7EmyRH8517H4HFrC1XU8z8NEo1xZuXacRCiVwMmCsTKLGM7BaXRhq8TMJENVC4C1zhWx2w9",
  "key17": "5S4mznN1ReN6UD7XTohf1rvPzduQMX71JihSyVgdSFEGVvz3TmtQ1c7dU8yUwMUgwEEkVMLf9rGYpxCE5P4Qm2bE",
  "key18": "sYdGthp56BCnRq8KaM1S2YGVxRR48FbnSAAePvrZKT3NM3EVFTnTkWK8G6JGLWtpcwojkpzfwvBiai4AytAfex9",
  "key19": "5958URhguttJLL8KDKaeLfViFmFQCTThRWB8VdjsNSWbyjecgXf124Yj5rK3UKfpwyh7AuYBDkBRSfvsTAakyYMB",
  "key20": "Zi5nycbGRW1TcEsibZCvjm3mfXryi2MNieDbAyp6tBHjgRq5uWbta5YNhi6G9d1D25VynHegShfQn1ft2VfrWfx",
  "key21": "3fenQ3nH1MkBgXJoazQKhsXSHNfiHAWSSBJMwZbxTRkPn64z3KTNaVR7gy7CsFQdE1WFQP5CFgH6G9zjjwxHMcMB",
  "key22": "4JC2JBq2nq5eGPXuCNryyyqwX2XR9sUDVWLJKNroLtajxfRx2hm34mYD6eUJdH678bWAsimZA9ainazXWmsq5Hup",
  "key23": "wA7r3KL2vQRHydEL4zEPRpxeU8mQxs1M6LjXgQvgHe9WsDVaHYfDFqoaQSFvKJPfBjXeiSt36SeCcpKkxFkpKLH",
  "key24": "2VpKz4NKDkF3VLHx8KcTMYnxeLU5yFTsDAogWNEUTrecA7MPzZZHe8aBki8usMk6PCW1SY7yb1nBY8zJCr3bmeJQ",
  "key25": "2QxKW45GzWnJd9gwC8395rK9N6Fcd9DSpgpdur2B967LGU9btDfHsKnFog9YzGDnvuChcjSdA1NZydgA5uG9tegz",
  "key26": "vYxVGKjEYtDDPDDuTYxfdCLVU9j8EtWZHZGkPiboJUUpE7gsRA6sGai4zBJT24cXxvgwnCX1MfJ7dAzLDbHyUGo",
  "key27": "5vkn3XY1cYHKzHe9mX1KMLbs1CTxwYYQS1zynGHsR3C2jZcjUSwPPtD6u6FLS4iTzhSW3xZ8Zvio5oTFbjL6AH5L",
  "key28": "K8xb5zRxNBhxqPkswsHcyEV4RG4ntNxF9Y3RUFi1gaoxpDeZckKUR8gPZjAG4NVBaGp1zJQgAQTdEBM1GPZueDb",
  "key29": "5FGy7cHDvhmwUZYpea6Unthfv9K9WhWWjXimgFbfm7EbNtLrfM89Z3qu4wFuVXLkmGRUMMNTK9j8zMhrNSKutL2R",
  "key30": "4yBJxmLFD1M9dva94PwDph85Ney9TFfm6JQPmqucYvRGWNrrGGT2ybhmpsvRx9qTuJ1v5zEyUxyqRaSkx4dzmj7m",
  "key31": "2xAPnVSW6JDhgf1iqe6qBLdvZTuEF5LYN38Ne8k7rLJXGqyeGWELSjXtsVFE64UaSEwbpcx6uCC7K35ev9cngDjQ",
  "key32": "61WDhXLCzggbKRkkUGDLtVTK2iPoap35fhpA5cdC1tcJyr5ePPQwSBeAxEzwi8cxzDfFd7QfJPwnw9p6jHZuN91h",
  "key33": "25ZYrCJ258nGxzZRZsE6rdkARyPDAwh7mYFqpcok4NUKqVxHYNXteyx4f61vS5uzWGzn95rbCk8qq4wNuS1fN61S",
  "key34": "122Rt5EqohwwFgQL2S6ZibNZ9wPFKBFXrCLj92FjJSJS49Lrvd2DCuPqi7vG3wzo2XtWFiUE6zXN5aKjoS94MSPt",
  "key35": "4aDGT3dF85TGvULiY9gnaf8ESDVAwuD3ochshwEivg8SqPBXSHQe2LUuc4s9ndeRQouhJyjdVC3iQaheUQZoBA5P",
  "key36": "63yJwoz6QrVr2PNTwy5ddca8ZwcKnKWxEZCXRBym5BnWai6ak7gamqMezRU7JcZD5RfmpGSdWZ89mweBRjtUMACo",
  "key37": "5DCUsv5Wivc16nCNsGjLLETcXyYcL3bqqzjBLzktGSHevPb4m7CbRNVsvxAH2opyRyRChsYRfYuTdTGepjEa49io",
  "key38": "4ZNqP2fbVYpLB2CD6fp1MU9cVz8mM4P9Dx67YLnoqGHFfoB5tsT3fWGRpTauoLud3EH2yTd8gf1xkS31ZgqUHFnh",
  "key39": "2MbPLTrGybSTz5bQ2ktfqqGJopNGbNftv8HtdmqyjRswd2S8dxK3ZKMQenb1pb1nihKQSYETiLxWQ9LJtPbnadsN",
  "key40": "64Z8YiKsEXNVgtL1PA8RXi3wkE7Q8ToGz6z8uP6ScBeCu3PMLVS1fPt6UTHUN4ru4dZJ6urS2VwTPztHPFZHZcuK",
  "key41": "5cL5Gj8LRDtTYjRQCyPCshvjaXkMoSNaSyXXNDFvdngCL3YNgeFsATw55vwnmUUfHCgeLv1yZhT9hhKsNwukCHjC"
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
