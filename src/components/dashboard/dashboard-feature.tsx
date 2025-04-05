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
    "2KB9cfu6ccDnuxMNct6o732KMAoKqTXgUFQYaPfnoqyjZoENyUcMQNP6amBVUnNcuq6LLuoC9ge1iRCHGWsqrEL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pG7fkhY2489WfCzGjpd4YUboRuZJ3scHtN47KvQNQUYDgYpzeVL8VP3WykVAcoj6XqNeoMyHimwVzV2ozmbm7qj",
  "key1": "5LhVjNjugezYpPfCtqsog5YXUnDcBNvcRcDFX7k7MQL6cDMGQeSaVHPnRoWkHhbkD6HSCAy7cefYeFzXak6tkAHF",
  "key2": "5kRfDL3MpuYzTWocxtDRGfJufgnZJe71bKTHSx5kkorpzCikkbcq7pnBpBg9FRzcixRVu4bYa5ij8nuqPsgevFsV",
  "key3": "4mWX3Ey5uAzYJTwvvyVAFL8g19BT9YxALQxWWpGHaTStMDJJAGttCXuZqyfN2GthzLzdxUS2z9tiJrBSXpf23E6e",
  "key4": "XPzuX68JrBEQwvJy2X1Q13aZgSXzVVv98pfTax68qR4kZR9hRCnUNLweiaPS9JSjSsvDX5NVJSEYdsHcpHE3D9L",
  "key5": "4birJLYUx8PpHPz5iLsddcPQgEXeoTw7bZnrCFmkkwf6gvQ3e8S97YhhoR5qWaemxk7AnNYS2NcBQM88k95pUTF6",
  "key6": "5Ta7HTDpRsYvYc78LTESpSJjvHJkqxVxGM2RQkoa6zQaVRnfQ9CbqpuiQYgMzmhgqZGS4YQrYePKHyJ35j6JTdvZ",
  "key7": "5mSa6kb7zTNEJHUxfM9EsLQxVJRWJ11NB3gw6xLLzJN8KFmmXRQqErxrjdDFuN8XLX4RewHtfmrys7Jcr8iypGU3",
  "key8": "wUUZUc9zbXCf7qEvaAVf4WTtaaF3ZXftWXwsGjqDPcWWdsSMrwPcH3XvWJr3kmY4a7tmzdX8QDQe6ufRrci6fCY",
  "key9": "2HSwsRA97TbPFWCqo34bjtZL4CLR4kRaV9z5JAgHzea5XTov5An3dfu8jvnrC7x12NLCeHheZA1sPptmQZEiFZ38",
  "key10": "4HWMKoG28HKE8Y7zwLdBpB8u7erh1VbAWXn8yjmeNGJnfUYH1SLUNNyNot9B1K9s7fB6Qu3WHXhanQ7t3mkKW2Lt",
  "key11": "5Esk9NjhqeShLegxhdFCSj9H3Qox42cBvn1Vny55Z3jsBbzuE1dvcpduhBayTvsxLbTdW1ipUVEvKNzyy9trdDaR",
  "key12": "5uQnFS2G8qbkxxk8zKCPSqeAF8SYshgSTCv9rXeQqF4sb8TaNvXq4T239zHzd1rNSgXJHc23ewYeZrT3UgMksHNQ",
  "key13": "3oRfWhRRY7FhnzzUfZ8MCMJXhWepYaga55URnTAJFiRCejbWQdoPkTeq2UsbBNyVixgarF7dfzN1ZnCgDEsyBZ4Y",
  "key14": "2vfzZCsK91PYjS5QqivjaEF9X2RhX6mNGXRXd2XgKXxomKnuCepApkpK5oHxjr4KrCCKP2JAAie1qfD3JxFZzhRW",
  "key15": "5oCSASvfpBgqdangyRjkzmNZU5oxS4jmcQ1HgmP27rrvGZMiZA6YQRigiPPiXTyWiebQ4j9AMsKKyh8rPDypChTQ",
  "key16": "3bzUhd4CsiTbJVw619hNkuTk2rc8ip59Hcg1qbzTs9EKeGCBQcXZMJ4vZhTG61CifK5xjqA9J1LrHWTZRhE3Px6J",
  "key17": "3RvGZHzj9JNoq5qeTfnW2mXPEwEmHH2X4ujUqxp2v9dfMbcsXPAkVZ9NyceaAJqHTvU1dDJ9w21dHqH9ozafEwLv",
  "key18": "feCprxGNEGb6yyJcNtrKEUXpK3Ed5qDwEyvL1NuT88jbS5kJTuiu3ifeuMtCsUCABCM58h5SbzStUt1xTBdQvZD",
  "key19": "5bTXucP4hcwDRRkgw7NP5dzMBfC3QD3bDr5ActFDGKVXFV7v1qKgJyPReMjDtMmAGPkagnsVaEch5k8njzKPVpqE",
  "key20": "5HKL6CuU94NbWpHJiRHteWQ5YLEmtK5zxaR1tpz4S2Yf1cQssmjeHTiV4XhXq2enLCJE7oLQzg1b3VqZkip4XUB8",
  "key21": "2J86CtZGEamSkwtVN6N4KjYjpkK5CSJt7Y2AjmQQ8WBiFXkQVjwi2ufjKU7yx5fw8oiD7QEzR9qpi1dRUe4TKH7r",
  "key22": "5KU3UE5ucXqV7Js7vW2dFLaCQTTWw7PJRwXSQQsFhLmgTW9L1GkCWvVRVyM65W2Zimu4BHB6wC8nbCYZth45nnMT",
  "key23": "HhAnLX44559QtTZRVm8D5SjFpMroFuYrFZcJsKBYfgeQSo8LHQLG4XG8L7HTWTd1B7mh4UsVN3ScugBqAgyZu86",
  "key24": "4EzovQDWNq4f3XLkE1aLqCedRZZPV5yG969UTaqvCd9pFnStNxoaGUmuADbGBWMTvTxVs9kG1Et1EjnWo8vg6XYZ",
  "key25": "38XDzhiSGobVTa9D59q2yhZ4wM3rkubUB7PBmsQRhSsMPAF5F66b4EeWtNYq7Y1hatq8LqJB5LTZGmNG7X97qVVo",
  "key26": "3vTRs9WeeBQdfLGktLQHXCAncTGPT416KUDKsx23FN4ex1oyTVVvLy1fDboKsQ6eFPXsLsN5dbyJmH8bCYjVuKGE",
  "key27": "3EgAyLgLwLVyAjzze1crCQv8qJFHMokjuLPojomwpBRqqFVDidgrczjFSDp3tzuF74Tfj69bELEC3vvdoc6HeLik",
  "key28": "5Sbg5BZpz2un4V2Quiy6EGmkNonc2Z35MT1hHcAkVL8SEvdVbene3y8TJiHnGEb743tWLarXSH5FDwqr4V6owPo3",
  "key29": "5y4EqcvY13GEgrUP1mJch1Jz7Gw2GX8T1op4a2poEnDsXZWLjLW4ThQKSiRina1zfKh2tpG2q2qe3nKcZmRSYwm7",
  "key30": "4qTUdtzrjjjTMCwv18D2uD7gETvVzqRXVYqjZRpBijiyEy4nUJfS899GrVFSGkQ1zuV4LMYL1jGi2srEZ4GFwQbM",
  "key31": "2u2J6PX9iSarH4LVbi1CUVz7d41vgMgNNyYEpjCxjVUwMJPEQCjrDBeM82BaLWkaoRMcHR5a93FdU1Z11PyMncDD",
  "key32": "3tf2KZLpsvheWq4zKDPvQxrLnpZr8P4YysFqxpbNdwT8mHeJ4xMSbpoBrdLnWWPRcHqpHEUTkbosYVsLcuwSrKnt",
  "key33": "Q6T9QM3ecrVzJh8FxyZqajthUUTpPZzZeMbaSaxZfxS6cuknAwCB2KdGutsdFp27qUbxxZ85CutoDR7k57Lickm",
  "key34": "MUCPkSnsH3sSX7nJgin4XiRCe13FHC2dpyL9JkWS2hEmrqPG957mXkZ8LPEFh38iT7L8q8BGWkxGEEJHjbqAjUW",
  "key35": "2bfo3QwgjxFH9BSRqV16HU5Wh9iioHZbmzxzx1RzwBMjn9jT6cWz2vnYZycRXufJRhufwS846bqFtTrEdPLz3M13",
  "key36": "2sxU3WynXPpx4bDrBVftzHjjzMbhr4qDPBL8aXyedwcTrMjTBRGFJjhAFqDn5brd18EMzM6EM69wdzqhKhJYYLhU",
  "key37": "quB5aziiYhqPqpmz9qFf2Erh95zueXkxp838ShiEzxCRqSvLfPhovDJr8Jv1xky2mqtaQYXXHRHEsbuJv9qVNLY"
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
