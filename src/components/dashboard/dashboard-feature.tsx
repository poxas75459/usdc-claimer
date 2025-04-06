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
    "3gmDxn7ZxCuSA4GsA2Jmg8s3PL2dNyw26JU5A52v5NHsF3hnmWPRPRvLYN86XY9rqwo15WHj5FzMSdNd5GCQKvkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBUXmebxYE68toLnsGa1nHRucjcuJPX75PD9ToNwXPCPACsxh6VC3mqsQVA9oXzj66j6rxGFANYsPKARVtQmV5N",
  "key1": "4bsxhk47bSQQP85EBUpPonSvQZ33MLqaYCqJdh4HgcijG8UxkvUi5EaCD9mPVVPhok8t1GCTFs1MS8gP641EKdiK",
  "key2": "8HxWy1KS4zwv3nxJ84CDT9dNknVGYJyxAgHcqsarEqTdDEbL9otcMrUmYvPDVh4TN6MTGAueBvmaMU8BQgCgbsm",
  "key3": "4pzZJNvsiUfQGziX1divtwU64215AK55LY7qq1HCbev81gonL7oeUPssAia6HPeJJ4xsp9FFAiYata9AWrRipqaK",
  "key4": "4BRfUttzB5vEteAssd4b9gmMnEjJb9eoodD3oyeRXFX8p4XEsPVcY5yqfr5rjJrqGMUf2R4FzvWLsHJhwafEToZb",
  "key5": "FuQyj86DKzWmAdKt7XEzfDJDX7ky2Fq2iVzP2ro175pt8Kw1s8WkN8KmAueSEVMe1sQZjRBpqmqe1wTH8HYcwn1",
  "key6": "5ZYsUQhyUjSrRqDznc18V5FikFZ8ytXxtRc7oEsgYRJakeWz6iQvC77ZYL87WYwpqD4hiGJVkTYuimBLiCZgJgUg",
  "key7": "5zMxH7AVmS5u7edffoaDiQgXRJPGeq78Pe1CAAFfmywQt9wbFQ2thcBeAZfFV3hEkd6z5HBdYCZ844nz6iRq5D3p",
  "key8": "44csJvWprQDMUTFUybTZcbd3hjx66hPwmc3jX2jjFPnwEY3E712DPpW1SZk1Dk5XHpZ4NSU5pjxDYSdbfdJKUCxX",
  "key9": "61xKLBpVwT2RWvRnfjQy1pLN4s71JNW4A7GTmNYK2ah8yZu89vcHauGoFX4tKEsVsvKqLRgYm2yRH5QGC7MGTSfH",
  "key10": "5MBoT5bMPZohjdhcVpy9wUYj7PqrXQEYM8XjghLQoZS3jNVRHMaZ1L75YHz5qm1zBhPefCKHF1xLrELG5xL54qFy",
  "key11": "KysbEiaj26SvW8d6QtDE4ohRmg2A4QgDfLXjurCs6B22zCrUycXZj4dnJpSBCZ1fXdks9BtspgZAJsGH4PRyWFM",
  "key12": "4W2Hf8KGYVrdevB9RTusv79gd9W5pWJijsxXFx6n9yhHZrusqBywgq4pp9WeP5R5RmvpQ7vTrQ5gWYL74G2XMdP5",
  "key13": "2KffZQf1Hj4yt5VFMV6RJzCusfMDBdbFGL6kfMhNZmSQB6p19WkDdNYPGupg1iJb8VRbzw3AYSU68PujmgpT8X8w",
  "key14": "5Njem9fkWdPuN9Pk35xtCWUJZZqZ6zGm3CGnYnVYrDeFm9zq9YkVLWEarFHiy1k5DNkykms4jngyLdZ5yS9SUtDc",
  "key15": "2d2r5GTKH1mbnP6bwK6FvfdACqMBey6pN6mo5ZLNL9DwK2inT61RKQAD9an5DG4f1yF6Yng78WX84SWxa8uxE7WF",
  "key16": "564biRGsGZtQrQ3S4ERrfpUq5SBDgoY3tGDfQnEQmnMAPVmbnejYGncKY3h8NFXM2zxzUNuvSYcVoMhwa6BUhBnv",
  "key17": "2YPCzw9co7k41hahKDTsCuGx4QfLXwG21c9QJqQYs45pXd7Mf2z6A4aMYhKcsurpJo7agJsM1dvCYvRNgkVso31g",
  "key18": "5mfbSoi7k2bm2C5pknBLDgHQJUnTQdHfEAvr5u8GoRURQhNx7eZ9C8H3JrUMpJeyrrorr46JC7NZpDFJKW7gF688",
  "key19": "5UQKzsjJThW9x2N7ieozQkX2pAnykQj3ZkbqqUucMH4XVzqsFTCpFfXPj2JZoMZUYwf1jmZGYCBqzF8NvU5rmZrF",
  "key20": "5XE2boFhhHb6hE1Er2shkQnzkGwNiWxnTa3PDDxLpDW37cBRTgs8mgXCuwh67tUnZKdCGKaCYMR8iXrHPfePs5kz",
  "key21": "4LN3Zw2e2hvL2n14LdSV7Jq9R6HQFwEbmAnzogcn8adNR1mS2MKggjDuaHPA5973PSkbSUQAKDLMKcTEHWtaKZb6",
  "key22": "2finYhcRSDev2w4nWh68Px4B7sMCiFSEk8W1vgnReHwxU6mU2KJVrwTcooH8G8aAz6beP8NiVeX5J7sHsmDniXdP",
  "key23": "669QEHziDgZ66uWBqF8t5TD9d8PKzkpFN8wGfameR6XZPjdfNLkvqPv9rHdJqG8aS9oM7Raw8oeUVK98ojJhwU19",
  "key24": "5zdvE4i1s3eXx8oAc6RHsRT8mmH9b44jhJQbz7Es4mhhZVrfswV2UBTWw8mVo5YjoYz8pT9GCgo116WwVufXvB1o",
  "key25": "5VbQVryqXpmognZtgGGdPEw7UBfpiYioYhHm1CrAqxFMqxt91QjYxbowNwRUTno5mtYSQCYNCd6UqsywZvg8qcnq",
  "key26": "3AB8Rnp3a96zkF1eU89it1whXqBDmgYgQTjfQVNgjvyN7zNf4CkWdzifwx7mAdvhGSAaXHDioyJZdGTiipxv22PC",
  "key27": "5GAS3ZB2J7o4cu5LHGAWtrW6mJbSDi4MEpzjhCM49vVGgwpBzREcg9x1yE9pe6L5u17tiWCLxYPtoD6XeoqBXRTi",
  "key28": "4X6owx6KJQ5nbd6h3GPcNop98GRf45AiFiWgdrKuqDLnFC89iyP7X1h5QRqAiSqYjg4aVTzCCwWcjvh8sVdcdLTw",
  "key29": "4XwgAhm9Ho9JksLjpzQNYVgHF8JqpLfEW74qfgbZuksmQsTVKfWSUDsuTHbwuapJZrEEjTxds5MAUqMYAYxpNjpK",
  "key30": "3cUoUvhmSwHhK4g8LBGB2aVjNcKZLYT1foCLo3hY6unLTMZmaEAdkY3aDpbRHc14wmbQezTod5FSmUNdHkiK3185",
  "key31": "3avtgasM6VPgfQy1ZFe2U7WQpk3aDg8nghnivnRSE8U19UhNDwQ3yWqczMZW7WFqZvoCNCxsfP1rCVEKo7R1WRrB",
  "key32": "vaBhDv9DqmHHZqKYBk1CM91qwPygKhynZJSmRaAaCmgnzAomXSLVSv47aR7jLqx6LX2zFM6ddyuM8cT2pMKZDrf",
  "key33": "3kCsH7PvgrJ4QztraHTCMkWBhVi5u3XoZo4M9RFtBPGdHdo5EffsU6GuUgemQ9sr9wUXAp2um4FMKGGSNyaahEuf",
  "key34": "2WXhnudYdpQmHnEJhSZYf4YJZNkmafb6AhFNnCbLBT4c5cPrZcu6w6PgeMeHLYQHzMzz5Gz17YWZ1s7Hxb6Xbrds",
  "key35": "hZDnY7t6y4MR5iwpUbLcJkn6bRWRX433sqg2sZxDhKAzvFfqH9vt1kBHr6oKyHwcJmUK4DvM4pJ14UAgGGKyiyH",
  "key36": "4vt539Hf4w5cg794mTtRf7jUpip8v34dEcM9qmkotPjsLjV1x6FDVLjyzngT73ciJKNMArXRFpZPBbD9qp1iWJXF",
  "key37": "4EsE8W1DqJuaA57U7erUyktNJWCrxAytutJP3RHpE4w9jTHJYAcmkZ1WUQY9sb5NUL9pu6roKSF9Woon5xwHALUE",
  "key38": "3ukjURiDFPEoKVWfDrCoQoGGsMYyHfQMYpLNQ8hD717i3FETJcrsE2EHU5taPBkmktDZAtYJQ1dGeWPR8egKYxCf"
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
