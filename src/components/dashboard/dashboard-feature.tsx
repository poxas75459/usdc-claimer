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
    "F9Vn8foB483AMfSg8LHh8TcbeVHzM6xmgo8Le5hrvyu2xF7KMgDxL6K55Tm15UEcAc1QSH2ZwiHn5qZPhaXJmsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7CsufaEXdX64EH7xk4phpyv52ghutXs2JiBEF6XARS4FmcWjdqugq2vN5NCTsZkeKLVM3yx4iTuC5Z4xMdrdWX",
  "key1": "3cx7TqDeo84ZfxSicPwHmQzLGFRgAncXdujopH9z1CZFiUiMYGKW5go9gt9FqNp1DUsxX2K1PSpqRWeGaqbCksvQ",
  "key2": "33WyRbii5SR9YNjsSKUDG6vNE4KZJKSNQdev7Wf281BvbMREjpeRXQQAZYmQ3yyzdLFDWnzKkLQknmZ6cBZPcLye",
  "key3": "3C9sK3XNEFUCcsdvi5dDouX1SZb1oTpCykiBjSZ61WyyeYGrZNuEZ47LJigyioLbmoJeikogWLZNQAv9eRLrpNqt",
  "key4": "2gNq9b4c338sfJMrG8quoNd5C5ZTSMK26oqxK5AggWspcCWf7k3sfCDgFCyb6HYRsmAzj1QWMctiVdiukcocmw4Z",
  "key5": "h65ucyrGZuRR3Rw9rr326vLrr5YgFHNVqzqS66DhqaMovv6dB5fQb3FDouvvJrxQevFPay9nBpdDM5AnMjcf7zp",
  "key6": "4UzyPmWwKRX59avT6DXwNsaKmicPEghCBaVdmYLydLvXkF6NQ1zPKMZ5imDeDGNK7bsevVDWvTJje318bdhF44U8",
  "key7": "25DzH59N3KDVvEDCMjRkYaorjbQJ1xxqXiYECxsaP9fXDaNPPWTv7DT5ytzhMyDBnRvBMsv9hUkq337uPLBysfQe",
  "key8": "3iqivyUPMH4vv1tWNzKeGtFfhogyhZqB7CmNz9UT7xMc1xHftVWwxBKf61ZxZ8kGqi9PtWwpRgPp7x8tk9opgdjt",
  "key9": "bise7SD8fUCddwPN54GpvmeQiZGZdDmXp6vCvL8hijEP5ugqTfUkAcB7eQoJ9fSvN7LgbYUVPx37UHNiMESQLJy",
  "key10": "3F71XqtaD613UnW1TtUTX6ThpWatysCi79rpYTfKvx1fTe67QjAzU9tC9Qpi2mbLqJXwVNRrQSTdm7Pb25pV6Nej",
  "key11": "33QMPnZPBb4qzY6H4kqkNRgGAHuqUPa3M6fagdHsmNhEoAUokrburo5eL9g32EGnt9Ng4QUvvEKMiSCxsAxo4oUP",
  "key12": "3kNXtWQyfroVpbCkBgoiAcVHYYaPCj8JRr8ExDTzrVBHusRvcPpZQrYQwxbWan7NXCExEWRPCVubE7QFQvCqhTMq",
  "key13": "4Yor8A6vL1qDbLP4rgssVUfVVg1rEGhYkwWmURYcUyoXddZ5WDmaStAr1e7SuBFbWwjg8esmVFUEHmN2eLRNR3ho",
  "key14": "2qmMb95WtQ4MqprReGTqkq1vYChqsi74UyM2Px8xeRxWS5KajTSKSs9xdV2FLssunJxommvbgDh3wAJRiRrYXJ1c",
  "key15": "3Uc9u1ezpKSu4UQcBrdE4BG3nA3bAx9rxyYQEcT9gRfmcZa3unYThN4Eue3tS5877viWu3jWmtyCQhLFrAAuemrj",
  "key16": "4ukiM7fwYaMfnYC7gRdniW8Y8GwBiVhLhF4TCBHPioTHN3zn4FXkqJ4fVc3uxB4ChqCVaCK4RkXJDoeF27q2QYF8",
  "key17": "3diYqYZKyg3eYGzo8dw75uYA9txEchvQ6f8ZakB3RqNK6zepmPb2BxiPvhfcrLVLj1zZtXteLx4uDy9CyHq2HkpB",
  "key18": "39eRQrW3jtaXmAmeyHr1mqf1Vof9zSFTAxMScQJVMD6ypD3DEmrgHZ6M5q7BkU27sqkpmH2JkFig4Y21AFvyjaJg",
  "key19": "3sP9zSsMpAFXP9Z4anPG2DizHQsWBDoRwLgyggp8SQAPqkwUaDSpP8wA4Sk15Usi9kP9W1WBsvsyG5xzK93DPCEB",
  "key20": "4URtgKGgsq2nCv2VK18TaX5bqsCUU5aXp185NVTnbkLuYc3NofuVYPXFCySgyrbVFEkUKGX8AJXoKxSN6ubd4Dy8",
  "key21": "2dkPpSa6iwESHYKakcDp6x5Ev8wTBxCoVQ9YR9k7X1PojZBECtVsK9YhLsv3yCEKBGKV95cCti4Q5zgBafYBA5zY",
  "key22": "by9n5EayZhhad4375Pi5QkMqA4BPG7mpvq9MTu519T5ZmMUoBK1ipMKNGqYLWwnjZ1xnLrcRxiHJrwhLy7Fkhk4",
  "key23": "3SnNp5W4fU3hjwDLXDzaB7HtCHJfFkYFDpVn7ccecFgdybr5LL13vEAqmUx5ciGQJ956wuvyEoA2r48H1mWLq9kx",
  "key24": "4qTusSsHUQFEVfNbw4R8P8cCjyKiWhC1okvWipN4Q2hZDhJUKLjwK6cF8H97jE9yzFE1T3Dpki79ncJ6SB1A3rbN",
  "key25": "SEf1AGUmT5NphoN7jktrYPjLPreRK9zPKzebE9Ax3v8QSxcRimYTFKesAzPDtBgwKy22TWWgYzanQ2wha5QAwWE",
  "key26": "2GqB6cbyyRBtSqSdTPXqiPNdDNBaHnXpTCRmcrJQ3eYvLUPcfjGEHdTCJB4Up8XCnHJsfkwj2eouVQp7vQdrdvb",
  "key27": "2yPXKVimFsYK6z7WMEM2LNyBW1bVe4kHfQYspUCNxg738CDYoNQFt921Xs8H8feChkBoMnR3h85AJJS5uijHWEn2",
  "key28": "2hDjLHHnMDavfrWFRhqJwDeSGxjNSeX84ZbU9abZMXuQZjS9yhPQNqNcrjsSAeXU9pPeMk4epKTeJqe2gDNxs1NP",
  "key29": "3Q9dgZzA3iQaEEUm7viKH2s2cm19m5DG6FtzA2DG2vuRKN7nTWjr68GMahK9J1oDmu71WmyYwwb6DqgMkutf23Jp",
  "key30": "2y7m8kMN55TmHuGpR4EiGEKxdcB55TT2h2vGJaYGTV9rksUL8QmNFrtPQeMpPWbPrUwVKUougM5ZQ4cnNaaLshC7",
  "key31": "MVbWhoiRXuNjkh9cYa8VAKg6gmyydmpDPXBiZ1H92UeAvMjJKj1JCvm5rafri4n8LqqXKEh9QuCbtxcDqqw13XN",
  "key32": "2ZPvUAV1PkKrn7yJfr1PhJx52JCKisHFT9kFthru6FgQe59wp9NqRKPkmdLeBe5nSF2mpCp76vLdRUWaNvfe2feA",
  "key33": "4pfDhdFCXHhmeQVNwqyE1aRaNzstS8hkmtryofVNhqWbZAbnWxKqLBuYtHzed2xTybDY5pw1uMQBTgLtPRzvWaZw",
  "key34": "2i7fu6Aj7LcxgYqLhiKgQX9M6T5QU1L8kDV4ML51PD7nJzRZkyDGgVajqUaFMBbWqqpQq1VinMFAZ6pqy5EhZtN",
  "key35": "XaXbCMbpKKyr9kWTJDuunUswTuAXk1vizQe1mYVUnCBeybF31ahLLkjM1i5ybdB2eiY7AVGJYkJjApCDR1vZwcC",
  "key36": "4r3GnvP1efz1ZEYjaJD5Ao7j4y3CCDFLpCANTtoy6AShu8EHys8Hv5EQ1n3Uv4QBa1pjnbgNhcAQpPo3C7xawZ5J",
  "key37": "2TNrKFjz1FZvqggTdETwqfoBRPTPDuTP2vwXs7GREinpaQrtQFJf4eFkxtQgwEGCtXaBbPmqdkQsZYCnrZRVQv2Z",
  "key38": "3n5Dw9Vvrxhk5wSXsmvF5tfLbEMXQNZ5f8UbmXJmZ5yTCnjS3YmThFSsfzKrSAvUhLhWyufYeg3uG7Q4fQ1pdamo",
  "key39": "3o7S2QT8wXdXX76B3bjjtydX3vFKfGRKb7ovjFGQcNEa2oBPhib5oDG83dg8GcWdbaHNFUhV3nAFW16G4Lugussq",
  "key40": "T9zKngjkVtZr5FugCGHmdLXoQDPpDdtqG3kYQR6bU1n1aA6eoD9N7H8EaX17kPZr55nLoTXWmCw7DwFZjSmamn7",
  "key41": "4Kaz5uRKek7ktfLcRSwAYxGbdFoBrsytZ8zkVSVR9EquCpRYyTf4VMaSFRRviwW6AdXPg1HZhdBUWE16X99j93Uz",
  "key42": "5eCTtRpjKwF5aeUw8z5CUM6nUZtgWH72s3crTdtHdir6tiSgiLwZBAxHzHCjo3ZeGccudmXHJNRigmQKDxXFGcMC",
  "key43": "4EhkyqaF3PAdNjno2GXc3HfdWnPSTRivnvZvFZw9fkYyCm6QgT6XiQ1BSALazduxqEEYpmLbXGtKZwfapxULaZFq",
  "key44": "3jVkBfcfra1mxLjshuNmVq8t2ogN1XrHV8i8xHLG4syA7KUvX9ywgfUt71K2QEkZ9ZQ62prekyCBnJdeVPDCEVAJ",
  "key45": "51BW8NoUXAfiL1BYvMauA41cYUepqZq2B5QY1g7uHUucvVavpcJcV1nzg4wrsoZEGPexc686h9s2ynaLN7pkrr26",
  "key46": "2nJ86yxrXUMyzkhYLLnEe1ey9BBirvpobxPNrxR9KV5ZuEa2ZT6dZnB8qYV12EBbfPW8qRSU25iutaCq7j3ZNfHy"
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
