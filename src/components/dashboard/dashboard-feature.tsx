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
    "8aHNQ9UdKMY5mkBVptUtNTKwtG1NM1SED8Th1rTLeRHtaWo4bsUQMjs4QPK9yThNnnTZa7LkBkZhizKLUxLy9rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4MCEsaf7eNW7ZfKvYcJEnK3owJ6QckwDw3mpEqJ3YV73gDirx1iL9YxVCA2unZ7SXEYHR9jrux6YQh34LMEiB1",
  "key1": "3AhvNXXuNkoyZ5Xs1UuZdCRMzJEqNZ8EkkgBzdux87AmKwaVgd521azDYJRxQWbMaCZeWMzxdJyUamU2wtSKf3Fa",
  "key2": "4hLy6CDWMTm873PkbBiKW4NJheVGMPUJkE1CQevpdLwMS4TifQNHfG8QTpN5LWSV4gxCTf4YzQwednYkNzGChYk",
  "key3": "5Xm9tSQZzVLAVGyDcxhTBqcrka5hj5r5HJqxsRas6SWiQZPgarKoLdLDJ5o1wEr2oRcCK1hmeiNksh93E5Knt8YC",
  "key4": "fQ2PwSpz62FUUZw1Upj9LviqhYyyBgFgHkkgreHvbHssjmiMYRew2DL8agBdH96Nn3JqJaEgprYkRQ6FaZe1aHA",
  "key5": "2SRkKkC57vMUcieKudP4tAbXGGZVUy3nYX8J7irKWfhW53yN2KARrmFV1D4Zpu3mnbKRQCpi86mTNG6qCxXtLEkg",
  "key6": "4EcbYUeo1wpzVJqsJVRxRuGjkTvWFnLrCNSUEYC3t5K6rFWR5wvKsN9H2MpNqzNLN4utbDuHbYad4c3fVcWvitYs",
  "key7": "5Gs9Z25yYDGUrHw9igcJnhHmWTCePMmsFQA1znZ3VtWRwACXpUb9TsEeBe9bY3RsGxERbA9jhVVvQVobkbSSgTvN",
  "key8": "NYbQbkN6mcCSRdS5uMiuumTixTFDV6U9dvyX4SHgGb7T7aE6UydAbjtTMyoUSpYZCBVhbyR1RSoTTafUAY8SyGD",
  "key9": "i9hucxtwCvJ6KDkGC7ocjVPSwDe5KoDg7xLLqps942xzDq3kvyyzegdjq4rtPunCW1243FnzuxWVDNHHu3sRVp6",
  "key10": "EDFMi7ujJaHcJciqzqie7kifMNU9M31Yyh3Dbjasg1RTcfDQ2T9jdJiggAjkamznjbSeYEtHw7KyaD4X9WheCoN",
  "key11": "2E7hbGYNEtFcJ2TeRerie5H5mKnLuEF8rTshFvXkJ86mNwEThEbbVkEM7CiF2iEjpcrFtiDA1p23z35wy2cHpr5i",
  "key12": "591WKWR1wvMznckUNY7mwo8eJpsMFtT7P587US7xSsE3nLkAGxXJ8Vpj2MFrqKL9gee9zPr4MipJUvMrm5dY6K4r",
  "key13": "4JhMpDM6edXNMiCNPYLrEqASehJvbMxHHujHBppZBPfv6q8t6gta8p2MEgpZGJsomFw2Leh5mPJ7AzkguhVhxi1c",
  "key14": "3AQ3zYDvrNxs2dWaJzq6BjEvNc9FXbNUfmYnXMUMg86ZkaKFPTLPZ54EqfuCGMedr6i6oJEw6GohdByfK3MujwR2",
  "key15": "5dxQ1udxKbFQNCDFbga5QRT4fmUNEi92n3kGXQQPoEAbUmQpNjhSvMEbewxyqj82rWmAdhgCBFWgB7cnaVUNoFtB",
  "key16": "3ypqmm9HANCB5drdhkUrZ4kGQtoyy5dydunjA5ZfCVJ88NE2xmpLWdtCr1t1LheDu5CsSetHT5kKBHMuvDiwEuqW",
  "key17": "5EHzfqeYfGt6deNEeaVoe145hRigFTrZZeRdnYPxH6ZTjpky1ALCdrk8CZDFgovhhk9oRNZTr6fkj15ByboVHVm5",
  "key18": "3CXSTiXFy8KptEo3yzzrmrV9oncKbr4hdDjvvXAFiZbBvqLQnAy4jAxkiAn3iDDkkrSrfeBhgAWXJdLEXWPDhkk2",
  "key19": "4CMsJgAbdBu4s6FsLtyCxjReM6GPVXgdSNhqHMnzzxujAFnn2AVPzLzgZtuxxYH6hzjPhTifkCgTZjURgcCficcL",
  "key20": "64rbtY7AM4SAkg5h3FWBUkW2NHgaG6W4PhfSN4DmktybMaywhmFWhDqHsE5H3RFhcBzxcSxLqvjJ8g5FUCcFULVB",
  "key21": "KXSjmaqQVyZwaxZ3WyMcVGvZf1q5F35h5QrtVxpCEk7nMSmZ46Rr7YiVr3xv63yVn7mfRyGKUaMQ7wFirK59Jhc",
  "key22": "3eCWqJSFNEc3qycSZRPCWSNUvYx1YcMDNaygYJLewqMfqd7UvEZyRAK2jEp11hoy89Fw8pqQMEXPGX6vQwm9F8zy",
  "key23": "2SZneCnTuJp3Xr52MJGw3ddV1hYYmgNPDBR9rzdXk3qJRfUstpexgPGdcbmU7HtXgFzCni3wcADvzdYGYgJ9M6iQ",
  "key24": "39HP4bJNhUWZwrcpb95bWvLNPhGy1Sw7cyJhsDuYp7aNBxtN1k9fL7x1Ls6RGhDM2BZJYNcgrSBRni6FTr6WWcqb",
  "key25": "2dqe2sFt5UdsUkNCggfe3NaZWDmkL8s2xVxtswDczjsJHoV2SM13Ue9xpXtNvEgr4zYccgqrpEGWmZaKootKJx9W",
  "key26": "2rRDY4L7L8dHWwAxrLWz57Sk2g6w3TWEYLPr9bc4WHi9ViNUPktKuV9yKmVETC8WXJNrGP8ee1mrN61Dt3ippp6G",
  "key27": "5kAVYmVYJ5ZNttZwEWPg43QjjB171GRqyBzzE1oqksT6JCdQYMjeZVSNrKaDUPx8jxZUVMrMd18gaRgdngYHXVoc",
  "key28": "5fpv3AjkefjCRb4FWVM83tE31x8xdfB7BcQpVrLLweAC6xQGkEzSarYLgxvkbA85izjcnHThyUAdyvw6yYVUcnZb",
  "key29": "2Q8Hnr423zAJ8tasUjq5LPFsYYUK9kvU9Gt7dVuL1S2Sq5WX83rWekohu9fPZJgL5XugBPnxChy6Yga9iep5UpQN",
  "key30": "4me43o3JourPYZfrWaVBCH1wHndk4UdVqvQ2T4ryrm946CEJTSuc5wojPHXPeTxGSAyviLidb44M7aiupnkTMgCc",
  "key31": "tCsyMP31zCwMjNgiPdmJWY2DdUTcyoPH7pUPb82vhgqNDJZuwUtLa1XgJGajTbasmzqMVi9XDRAovW1haoexfEG",
  "key32": "5cjoXDVUiq8VBXMnCLQEEhPTBoSSN8aafidf5rPjhvfe27AUxy5o9445qm3pKSWemTY3mxVgSC7saNnYrtWkZC2s",
  "key33": "2xTdpbtsno2pqLBYiBwUQ2s6BiL7pvacagjMyhgRJYYDvrh9NgpQWN6fPGMXP7SrtHrq6aGXb53iFBSUBbtV6EoH",
  "key34": "nSiqipPYU7FYbuJ2QUMGN1NnV2gXnWcP8TCoZdW9UKG8bNitb9LLRATjq59bAFETZxPzV9x6qCxzdti4viNzk7D",
  "key35": "3famYGjPWiacZ4neMqjrDxCwSoviJBeZeb9qUkD6BzHWi1MoviqryTxi8rTD2xg9gWE7tvxHHxFYTUJvAfszUFfH",
  "key36": "5kAKM9VgMuTrt9ZNwvEf7eQSA3tg6LEeFoooJiAvVoGMDzWEmzoYpGP7YT3kPKrVCJrrxCsNYb1QBZKbZGhSHkhq",
  "key37": "3Mqo18AgbeSBQ5qCSxaRCzZMSiF3SZf9m1MVLWFwgeQELP1FJa6w8FbEdUdWkKSFCZyNkvosGXD1WdjnTKxUeoiF",
  "key38": "rWvewobQEqM3EqJUbEn5y3mnGqLpHMQjh1L5wbz6VQf3sf54Vywqz3vmdF1pn9rdcoqFu4x1yFMQx5LX2tJPuX6",
  "key39": "4YFWEi9XBuzitSAweKTDVyoQ3WVBR1QckdAUhwZpaUJUZGqYCMDMVN6Yqns2ekbtDv9LY7RDFbi1UMncdw7x2L6W"
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
