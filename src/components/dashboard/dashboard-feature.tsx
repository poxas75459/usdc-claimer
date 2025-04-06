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
    "3yebNpFWTxKkSkJeYhxLhUzVJs7zTmWxFndQh6r9QkZdgaLCUyFg3R9achPWCLdKgGKgL27r7Qi4VjbXhboPsiLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNmh94Kn6ga4xPkhByPy2K2zJVsM4sCwB8JX5WjJUGD7r5EqbjjrZc1tpG13e8NnnYgSKJjhcgc9G52VPjDhhgc",
  "key1": "3RhCbHw1pQjqRVBgJkt1rRnvDuuhbXqDyzyipao6zF18THqtyFEJx227t2UzLWpqtGPv2Wqh9kjkbfjCSECqacwW",
  "key2": "2woioB4yvyW2RU5sSTg1CtXWAj1cjgN7DJczo5uUDT5Qd2jP3Zz253HTVNfUPZ1h1d2YdezurFMGiZPKN41xXc94",
  "key3": "4enjkPYgBko1JEzo13bTwAdiyR17S78QX1LNvzy79zpyfCPMkogVfQnfofDy7p5A5h9kreZ4QQJh6Gd74AsC2Wy1",
  "key4": "4qyyd72C8LWgnDQuXvWTrBPjRJG9qW7FgHJXBipDeJkPgMBgNHs33XGYVQ2pYCixaYtqzfpXDh6sRACo5367QT5f",
  "key5": "h5D57S2wEHxFJLxgQVageJ1YvGPjFn9NhWUsMRAurS2zhMVc8bUwTDSEwKCnTMro1LwXmyCQGv5GLeh5FCvGjRh",
  "key6": "4e8LdKxV3XdYdFftRbdpBXSfuemyw4GDTWiknHequD2WQRjDfpYE7wfJg4WibyTVrZhoCnW281GyDCEBcApxg2pD",
  "key7": "5abBmAr4kuVGWZQtaNWQgGbSiVDmG3uj6h29xw1Xa7cWy6u7tofka9fVSHjLvhyn44UNTpxBMFqxsth3eZx6BcHW",
  "key8": "2fdGYsh9QZ9wJAEREYBcq2mjNqQ4XG3p1PqRXxnND1aVszNCRi6gjdcueRM7aWifQcZRtPQkhvo41HcKgjNHqmbK",
  "key9": "5V1F7siAQCKFW7HuK6B4UZjfdXtswhd7rC2oJBCbtDJMTxgGRK7xSKPehXset7W9Ua39sY4cSamYJgw4zXREV92c",
  "key10": "5eArdjyoU6KPTYkyEYop3v4uAgX6nLRwphs1cbAWTutAe8BxxSm45cExLP2ak5nspAzrpw9NHq6ZjJaRnNtFWBDJ",
  "key11": "2nSMKQA5yeRQeKPYc4kunVyuGSWRRmaEr8Nuh68v3JnbgHf17xRq4jAP32rxgcgsLXZD9dVQScG5F8hq5MoUbpBf",
  "key12": "2Lur8Tf5Z663ka4rxbfm5Pc2fvG7ZXyUyXkbxuFBqvgqupgDStx8R44bTFnCTPo2tjkK6HKJ363YduEa91h4qyzV",
  "key13": "25G1Jtr93kngFyosawF1qquF66Ls6eN1dpmQHJZ6dpWYuCasCyoJYgcc9DcE9xFqUe1gRLB1VnZkWAEkMyGt5iwy",
  "key14": "2A6PjELuM2kg8YN5XMWtkasqz7rLiTzkDo6EkcDfheTZ8NZBBkBQVp1Xte8WRBPEbPs6npHAxRb7Pn6evQUcAGhm",
  "key15": "4CYpnyS98tLbo96FtFayfMz7iK7sMa2XtxyhTiCsDn27mEfWwzQrEYXZ2F7FHtuETuxYDyKCLwBz2R2S2NERXXGf",
  "key16": "4Aqq6fqAx6Bqhdd6uAR7mhQhHVarNtSVmo8T8E6q29vFNNWtCHUhHmTSPEBcqyjShxi2bw8HcoHaWY6eo6ojKMG1",
  "key17": "2dkbvnqBsVdX2LESpHZ9LSPmP54ZJfoZtNnK2A1KzT4wpZ7Ss9re2Mh3gq1BjCUSNivxSjVvURiARB2fxBkfPLYD",
  "key18": "3zKakNeV8bvqspWyRqdzpdjWGNaLVXjUKGg2hmPZto6FWcJexANoNWvxwmG3BaMfsMY56MHozX2WAJvndhwxRRc8",
  "key19": "5QSZnccKQfxRE5qQ4ywXnoiNcCitniSKJ5xYBTnqLmmnQpv5TZFAeuf4ZNY2rnWe86ZuXFHwYEV1bKt7opbgS6SA",
  "key20": "LNQNuz6qWExa4SPWURwRk3Ls3Q4z2JEoo1cQNf2s3fPMGDn8keaKPnHYFRunyHzyR1edeyhmupLgjAR1mTtQwFL",
  "key21": "4p81qFNiSfiFLQAV59A6no17MrnDKJJAVWH6ndUvgEn5nDFkCmjE276CfWXtFVcRKqhfRkR2NfhvEZbJGdAvGf4h",
  "key22": "3GG4tfDb9eEcCL7hnw2W1jtoayYgPMtedeotzpPTAU8TtAcruWxf3BzjCQq8nGakRxMQezurSe5TNNugmKWAMmUX",
  "key23": "2nG9Kcknj6qPwGPPtBW85vPySfEo3Za2Cm5isoKbvWuKUA5wssoHY6YB5yVagj5VFq8ZoD5yJjFXtrjx1HCcjQ4Y",
  "key24": "4qJ9eoL3U3fw5yrJxFLSFqEoinu161Em3594roFH8S5BqfziZSDECYzhkpbdsgmxi1jYwiqgwcn51KFkeBAnYsX2",
  "key25": "3ooYemqGvLfaF4Vv3C222id7BihRx3wEhpNCwU6hrqsLMwqyXYVXJVzqiaVXgrQtLnApLpFp2LSTx8f3SyZ8BAWT",
  "key26": "2rQDGPKR8wA2v8XA6quykKbTmAcB3uSYLx6WgfeV5tro8V4LW8SZvk5cMrV5SwoeGfehWAEaXYtVKsgX2GGHt5y2",
  "key27": "6SCXPUmoFEPpwfujvt8jD6nFvEE8Db1BfQpgNmY8hwCAtw4FQrAjLMnwSAQpxcKbtPSJ8KUxG4QvWgMYv7tHiZE",
  "key28": "4i7ELceP3zFw1uFJCNKthVNwgF32u26FTRUSMLEaz7h48ctnANseHjR4RQYbezGfQMrrUW3tUfg4DiLv87bdSEWV",
  "key29": "41ucV1bhWx5fszscrc5qSm719aSz3Brpv5CcvYu3BDPoMp5XHtYsqWNV4CsmWBn26gGFJR2wKwsK22PPCoHDxosZ",
  "key30": "38ayy9g24Aij3pKQySg1nvNvFz5kveGDdpEPiefVDsMoBwbt5JgumQnRTE5x8G4pKqEmJcJpzNK3HYTGHmDjZC8w",
  "key31": "4tNuz5c9ddyMSbFxEo2cTnBDZMzZYpVCDbgD6Aw4acH8S6pDi7oG4jcRYPvTmLe2c2W9dxWTm9qRr4kSd6rUT4nL",
  "key32": "52dohMmooSqxDaZFHF8vshvV4jJD1SAfRr3FZAhW9JSGC445aDPdWNP1uZ6qb5nG7BLdrYbSThGSzP2ZK5dcUMgX",
  "key33": "4TXpc8DTm8EX1bywa6VbZbVtdqcXUFcTkUyW5K5NyCy6sJBMKAEpohJnjwfedqDXZkiQeVtAbdU2DRLkTdCEy2Vc",
  "key34": "3EZSUQuaM9xJT824H1Z9ZEKAWiZQzfC1dEP5AfgzFy7qjGoqpDjndx8D3Y34RLbkrMuAmqYvx6rRAnZZDi3HGXr4",
  "key35": "4YuGsYJDS5xnNXMsrvoe1Yj1BvDKRQcBsKfZ6ahdrCMmgy1toceu2RijN7dR1z3HPbr38oF5Ftaq675iFP3B4Qed",
  "key36": "44DN77CzxRJidMVoXm8Yg3pFWpwuJgFz3xw2SsfGSpzeViVMoDxoHu2gav29tCqLxEVqYmzMLCkiVHG3hVqDXjjb",
  "key37": "3TZREtNdf5ymbWM42ZVdHGEgyAvAKidtqwn4K9BuWuEmhk8hJAXRK7q295dytvbt2kyhmHqcLdWXzU3cmybzGhjK",
  "key38": "FF3Fd35besjo2tyB8iioUJfuNTLjgNgMKz5vuRpnsQ43JRozpfBgtk9rEtyCmWG8wHiRqzcwtX6DzdBgNToQq1t",
  "key39": "2dfnVSR1NXgHntfmqyFtG92PqS4Mnjt1VgUNcEFKVSuf3Ewjmnu5uNzeS9VgT3GqSVmy3bdTSKqmmp7H6FMweknF",
  "key40": "2Z6UW2Y5nfrJvSPgfwZ4sZd9WiQyJbzd2txm9R9ZrbJG6vKUkPDyVW1weq7eeNMrUFTxZJcfRDL8zN9RV9JrByMc"
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
