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
    "ctrC7B3bMAy4f2mDjAVHLhp75X13D1xB1ZTMjXUi1sW2p6naekTx295bRWKyRvZ5ZwPASvhttReGRHgxyxUqsa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CD4CvwRVJ6Pf6Ucsm2Z9PkqY9g3dxKPKhTbGxHvsS8aUsre9HyNEAyhcPLVKHXd1bjrSFug7BvvYowykVjRAfuk",
  "key1": "TPKPCFTMzZHpoCLpMvSQ7VjV1c4A8W6tMupyrTWZCry6T66XJBtebiLrXiHiD1A9H9BjLWhaFhEr2kgEzyohF6A",
  "key2": "3ieCUd7mT7gFSfWAR1GrKD4ba1nU61ds29PxcDZwebRqkoDw7Uwsmy39rD3kZHJSALG7dxjKNVyRdQvczjmth1Cp",
  "key3": "MUhNTSMtDKqkvZC7WDKCSEPnW88tXXszSFFazbzJt8KAvsxEH1zsqQJAsdC1vati9in5pgvZkMMMbZDCCd5FHha",
  "key4": "gfGkajNdYv2pcMDCBJJcGMDLx1SXjXtocCe2ZHTTxNRC7vusDeWKzGAh2QVUoUxXpQWNxw6ozmDJvwySEN756bM",
  "key5": "4CEojfCVrsjm9hBBFAHyjPoy8MWqGt32Bj15Q2A1rTSW5Y2LV9UxopJkWNmQkHYbDn8sY8wGRUbnDjk9KV8jdtfD",
  "key6": "JfeXrRsutUnWAPQhWHeidamWGxgA1UtGrxPKPGzBBbgQVzmL4Sb91DQ7jZtCXH64fQiJEdygCnRidCC2ZiJLBh5",
  "key7": "5Egrjhq1d3NE8HQyLXD6GRincsc2bP5B6sVsDD5oDHVasncpHg9zcEZUNiUNsYJAb6kkVBYEG9BzFJDWvb3QGnD5",
  "key8": "51KQzPyvKDhKyN5PwtjgEZsen3RgagVkCNNh8gSxfATHW3zpBdyps3RUF9zckajWwT2zp5edi3y4etd5LXUWX9QZ",
  "key9": "2TVhALt7b1kSBJXfHta2wbEeZFgaGRcqc5wd6HTxkhoNZiU2oaaVs15fHpdNSHjbqrNyrV2drms2mW9RrtQojF3T",
  "key10": "56aWKCcd2oL2LXykbu68RFyokJ45kNfQtQr4tX6TVBpweSs2s5fJYkcTr5fFLwkrESXKXXi3oVUtTGeqwRWGbpx4",
  "key11": "4odbYWfmo2BpERRSQ6hPmU8fZjDmM8xEFJF2s6ACcVSTrNTseDPgwpKuwFKo55wHHKDGhAFQf1wGDeRRmnbWACk7",
  "key12": "MfbmJybMgAhw6f7FUGqV6mBMvtnjNcaFJmXwaJvn7p24xvcoYVwX3dLxoAWsQMdDLQTx96LWJVNVTiwK4NCBB8w",
  "key13": "4o8HkkMZEs894kiKtSh2p3pLDLY3y44u4ofCPNzw57XaexehWZcTXdnZBmSRUMt7rphiZDzzrUEowAa5ZC1vWju4",
  "key14": "2KpSSVtGek1McpGkuwZjYgAQNRtJt2ij7PKRScW8kA4xcpSM7m13YKX1D71fxcu6ZYH777mMRd15uUhYbr8WGZ4K",
  "key15": "4PvaF8Pao9m1fYRa3u1hcwrt1SdBAD7KG62aNH9GjmYrE6S882S1nqKu4dGiMzWhczrSuQ941TwNY3XsdtvTS9oE",
  "key16": "26aoL4u2k3yPKMN5yoYVJrvVtbkrC1rSPUfsTttwKb3sQF1SyuYDwao1QEvdKdxn6Wv3HGmwWo9QMLZQtecfG96u",
  "key17": "PNEagxR4cCJjNo4M45LLvp1UVQGBG88H8Ta3cj9XzeQDaJ3Mt584xTQrzdwrxjkKtUKvQS2VawsBUmJEyUgZqs8",
  "key18": "3vd5q2tapeMSkYjmxWwxUb8o33tWyjD7fmfkW8xJHhiR5nzCynHs8eZkGj4HGQxmUBnfvKoDyZFF89Q71iT9gv67",
  "key19": "3QkV5yuSAcfxTMAY6ddGd3EQyCvVi9U8reKkf4QEkbZgd2byra5ZLxRE5isPaPY5ASkog2PfZKtX5YNaJmDzwD9D",
  "key20": "4iNtgwVvDcw2zigbwx8QyjZRPAN4skh2Cd1nNKkiG5Zs8tZmzZg16QrxBikavQSbWPCTeEo2HtkGuUSnhc1HAjAa",
  "key21": "43DqDAuDcu9eyogrVPzPqGULsz1s7hVThQLKaGYyeq69cJPpmGMj4gChfWoSdyJRMhprjoisc8oq1GdcvNNxMu5L",
  "key22": "iV6QQeiKK1auuFQWwB6cnHEQ9uuAsQFZJLGLu7Gm1g2R6wW1MrmTNrYmwN8saYNhKYE9fwV1V2532nS8D1hJrvE",
  "key23": "4eEz3NCRM8DUj3278ksneFB1ieYhtiJrQhgioBog1UgXeE5t6vTbWuKRrg6eh8nP7yLmAyds1LXQ7iQgEQhwLb7y",
  "key24": "Jiuq2JhKKV1WUbWmMdUaVatDQQZttEygKCSJSzbMQnmt8k3Vn9cLyyvzgpGDfuKdzA96PbzujwTmfYU79Jayqvq",
  "key25": "3bKsNGFA3vowz2s7a7yDcbVtbaQtFmtrJAB4ywU5gsNp1JSMzPpKhmM57NN2m76HZMVuBfVBgYLXbcKtXUomarsh",
  "key26": "4cGg5PGhvWgQRxkajFgjLaZFu2rsSRWwDDJ1ZnRMTZTBwAZZduHHRPVn4FPWNWr653cowcEBb6jufEk5S1CqAFNv",
  "key27": "4osQzE56sfW3nkgvoQPi7zXeuNXy7WU7DDA1NG6Z1wuHi2fF4e2agDZNiYtnAa3UJyCvL67YGYZNBMbq7e7CRQDR",
  "key28": "3M6uEgoTstJx21jKgPF1xSLkhUqwG1Nio9DDfKsEJ6eTTdwjmPXgwYn8bc5g92tYFrD8NwMMCmsmhoyuZ1GLeDDH",
  "key29": "4DZuxZ7uJMWJAwBvYKrSburDtjJGZ5ScNdU1Uh6yh4a92QNxfy4ckdC7hhZPgrEhZEPT2uEozxzQwZvUCmJKQvU7",
  "key30": "399xS53vVnvSagYAu5azrPmuGJXR3Bb4syjkRw3LdnGu4wJFWn7ViQsnnU9xKZCboa5sYeGRPkDBmTiFC9qZ5E8L",
  "key31": "5nDmqoJfuR9RVB6TdavbihCad9H7GMTRLboLmPL5iEFQ5Fzg4t7cKPP9YawUUK3ca4Z1aYnmPU86KJjGAAbTeK5A",
  "key32": "3EyDXtsKfJNWSM3q5wg6Pd3onqRVB6M8NvfbWuYJDmWFvQ9hA3o7ZVBMQXu1dUsGDJHpGKGYSwAVQDHHTfWyvjUD",
  "key33": "3yq9AXz6QrXFRSQVaMSJL3bA2NwkAUZBunFMcQd42LLLsGTvjRxL5VibawonCjrnxLZ6uwtqKm5SfDtc9yJsMxne",
  "key34": "5rzpMb8wyGZXjGNp6b1aLaGZ3yy8DEADaB1TNV9f5j7nb8VSmJR5UEA1tP9S3YZbypq3pL6yVSySFnxCWoEbDt1h",
  "key35": "4JwDEwGYWpsBQHDSkfsidCuuX5zuYi9juhbwCdfeJ8Krm5S9DmDCB54tRdBRcxhrFKJTnC6MuZ4xTHSVoUrCLN2n",
  "key36": "4QVC5nsj4XmVKmibaV4NXrCctSgqmLAxHLfgY8sEr9FaAfzWTo7m6CCbtPr2wdaDch8HYsPs4hbTb1L66NSmVwJw",
  "key37": "4pfKxrU9Ez6FQ9TdcdFvHyp66v1KUnGF7mXbpe1X7259q5duSFPSKVvBU4WwWz7dEvkzzqkVrTW53mHoKv5Wxz5n",
  "key38": "3dHDBiKbAzM6EWvbYDeB1UvoGisYzbnNmC3i6YpzdmGgc5nQe5yYn39ySmbGFo1RA2wdE7eMrGNRFUAFZavVjKQN",
  "key39": "2EyUELvwgzacRUYEkKBMsbtHELN9DQFYkV5X8JQDAdiTan2tPi1cgv4adjHtAMWTtzSENhQKkvyeHQa5UG8KaLZd",
  "key40": "2NS92GMqsqXhY34edapbMEBSYx9cV7ZP5H6fYTcYp2YPmgiE6evBJPxrLWJaiZT1GTY82R3bdBCAYV4rYQi14for",
  "key41": "4Twwm9gt2ftv3KdN9MadjnzrUKo3bzDWvY8eRmAnFg8TEsxMaPqyHh771DAV7XbYJA7jCofBa7d53GMBeofMor4h",
  "key42": "2hAY7quMtcE5pTCd6C6s7zaPkExWTVZPYV2uAXBo4u4ZD6d25R5et7FcXbgMenwgdqTNHDraMnkPszHbpHbPwsgp",
  "key43": "4qBX7tp8N5jKwFEfg4dEq5C11VDQwL34qmy5PwtnJ5VydkVRMhqUz6XECFYL6GL9tjpApfY9jrsiYEXLQcnbr62p",
  "key44": "5mfDWBZVsZ9DNme4YQzbs2YhqMnpaU1ru7xkR14WbuLVNpzkVTKeC6DHgW84FvXPJKQ1T9Mq55KJensmtobib96r",
  "key45": "2fgYs7vjyRg6mv5xgRUJcyMFXDHWsmrDNvpqH19LWQB1RNpu3rPLhEMJ55exWHXda25KYyZxtpgoDytkQb6XWGEB"
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
