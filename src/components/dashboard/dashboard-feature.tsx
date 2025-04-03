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
    "5a6bBbNGJ2YgbjXGyKbJ73kTzdmqDYm9Hke7USaaVhSKRXRpfY6GBAqb55YtWeVvxCTSXP7fc3QTTPUpCeCH76EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UueQcQR7KoMJtfH5BzGBnWsdkfm7dLrRK3iWbRmu5FF5cTDtyU6bXF7wQ7nG9kRP7Kax1ajjtRYpKYc7k5apvqD",
  "key1": "3vLJAexp2q2yBbzffucH8sSwSiAhJo8qHGChERHSrxJ8mw3DdqCR5ns4sroqoAJyMVaXgRAW5k9MyjeWXKsuwucD",
  "key2": "rUM7Ws8mqfPXUPeqrmBiQuVckqVmiBaLDsvxm1UWk9WXS74Y6UUJWAkrBkL6GnNbVLWWLy6Mp87JKY7u3S7QLiX",
  "key3": "45MknmrsjvV6Gv5kByU9afJdeetC8c9pNRsrvamSrjCCTS1YHA43mzjhBAwtdfpfen8nCk16bHNsqRAimTRnBmxX",
  "key4": "3u2bxghanbZ2B7TVGRiEG8MsYr1dSwceoLrQwri5mnWWBUmtu4mqXVGhntaFmX23dc6Nhn8UDP41aAviRMGj7SVg",
  "key5": "2bzeQFWyTLuYax2SB7q5GeSTe859NJbbLQpwoSAEnhNXxuVAnHYU6Yj8y6Hi1XWatbtiSjkhbCYDtnwPH6icyUT4",
  "key6": "41XiDpXio1uk3bVHVDK53FQbsAEJ7FQ9C3wkiBJHSHfFSFFv2eQy1ueyumHSL4o2RC29V5e1fjKKxCgJvwcN6xAQ",
  "key7": "5vykYKMqAiLATFnrYCgSxBWxdq9qySi9bHR267BnYHNN5psLCiFnu59JoysoVwXL364oEhLuZtVbZyz7aSXGGWHY",
  "key8": "3Himw2bS5tVGKP5yRkd6dQMSgsiDKfN9KUKdmZaVvEj63k6BFcFnLkFu5otTkMSB6MLhqfGt7bDyj3H9B23SsWZ8",
  "key9": "3ymGTaWxC8LYHBForeCDpAh4X2DNiyXtQq6FtCGTnGJJ9sp88wGoa2qkzj2LMMfjzX4DNgScu4hazrYoqaD5MqPf",
  "key10": "2AmfjVu6sUXqUTUBaW7tozLL8CWbwmF9dc4e7NLtYJ5rtTJ6Z41soGs8fZVjNjXrCcn9LTgb3zJpXVKmsQX2yknZ",
  "key11": "4iZu5Vz4HvqEfD6fzBPVZBz4ViSasLhRDTxYRJ8UUXYC7g7qwtGEzh3ZUcf8kJMaTvXhjQLXFgKHFtHrktBcW2je",
  "key12": "5n6Kd7xvtTRfSwfWQPaESUTcoYZPhoTZS6XyQxRVqkVm5Cut3gvVgFgNdxCiRiJvzmBe14xfwNoTzG6GLzHXXZup",
  "key13": "4aGgnYZejPvWrWhya95Mug2jV7ny9vq17j9RLM28V9ABqDGyaMawyzj36Rr2ntqfwvdAREMJiM5ztXS7FqHv3y5H",
  "key14": "3r5GjdafWnMACzgYdH4V8ixBedQ1LdZmg8CrQjYoufWXT3xtVrngyVj22hKCnvroxkuMDFLbq4bSwUyTTbapFJT7",
  "key15": "QNyyDMrtoCB3kcQZWBD6c72mKyfp4kZHmRKKHdytHMHsS7RX9M5kP7JU1cHiiSa7CcC7pCrB7N39RqhLuuxn9cT",
  "key16": "4xMy5M5nCXfLoYJPcRNEW6LHYE9hBJE2YZMJnvut5XqJGiXtjBqFZFxsQjyg3kGEPHBRxFZxCfAKau3Ns8Ad413x",
  "key17": "2Lv51k1Aq6YYF7h1TdNcab5t1swnXMbAH83VXDbgQRFAYtCHheAH9GRDyaygcJUtwXgw3BxWTQoj7GVFa48ipG29",
  "key18": "2Xin2DuHPjvEHREYFaTnKyuS6D8GQE3zvsCTwt4AhaDiqoSJhE6gvMyrBMwz1TED7bMHc1Yg3M4EP7rwhksm4mjm",
  "key19": "3FYxUZ6vcXosQ1ivXb5hAgzCxKkjo1p4AD7Zet7uQh9oBvHGVV5Df2WCZBksU4CCj2ZnLWhX9uqf6ZqbcZnL3bz6",
  "key20": "44uFT9CAjJSfknPrRpVnR54Ebk5f4YsR5J4ygUgro2rAnUL636dzS3ymbgdoWRnYxeQBE6SaLnZ4ZgMWxx34XZC5",
  "key21": "5bUPmJezSmYUiKigTBwKsw54ssLY9zBGQeUkDtyN4B2DtKaSXeKcqYafosPTZnGA8dBJBybNxVntHXJftUdUdGVN",
  "key22": "fATikQ7Mt6rCjun7KtqvTghWmFfk6jkdJovys6XjWU1D2aUQWZFYtj4hL3w2MWjA7AJbdrVGt4mWhDNzvd3aDuU",
  "key23": "45e3mYcQsTUZBtYcutfH2Z8yW5EHgzGnnf8HC8s9AeAGEyd6P3j2J5czbgr54GivhRwGtQYoQ1maSKaJW2YGHFAX",
  "key24": "3SVVmMZVvXEKG1n5qHMxgxcnNtq3aYtAkanvPcdXJtYXZNpMTrnRsQnBmEBBiWJpBuNYumeJyNXbo9vjwNHUCcjW",
  "key25": "3KkwFZymryVWMt2eB4yoJA97muTqz92jrqkLNoSAUg2AJ8oesxq4W5SKzULz1pWeu52G9jCsmhht3FZt5YCYLfiV",
  "key26": "3FHSX99gcmfXLsi9xQ7TX8gMbRJKLZCjwhjhB7wdstaUZY5GfK91sHULBjHpQBVa448ccMtZm7uhZ1uVh1NwaW54",
  "key27": "3pNf6byyk6iNg7hG7kLS8dudGBzJ8wF5P9aazQKLzHYWdts3VVLokJ6evkf5Dvp1KrswiYNjKbrNaDZxgwbRzzWd",
  "key28": "33STNyAXqyXMac57orsq38hwVX7uNcGaUBZeLwvGLRxWLKBiBrmY4HhFTSkrNAamecU97xZzQrMtEdkZ85T5ejCa",
  "key29": "4nuFTL1KHHiQtoBUD3HA7YTeCHms67PiFoEa4ZCQieJWqetrG66TG5kXSo3i5qw5gcUVBYwbaQBL4gSdJj9ie7kF",
  "key30": "3TY5NF4yxPCEfpuSxSJZ4K8KwX5d869XfN3XTGN9YKkh4Y46puCqdYJXAF85GZ24XhQbFVRfUzfo4Y7U8avkmPFU",
  "key31": "4zLspnQSTAgo7gyxZPs1grGqE3668wPV79dYnSTSuUGb1RJ6FfadpoTtfBAruYkwraXBTEACY6ZLd9yK51zvDbyf",
  "key32": "2YrYGFyGrFRJXPNQjsfwqwzuCtuFLVW3QW9NdFhPfV3u6UcwGv6w8WCosLKHV8YxC9PDf2rX5ou63gyXD2PtM8JB",
  "key33": "42aU7xUnzF7odFxtKmCTMFkeJRrygCvmZ7zMhsbRqkbWFNDeY1x2WybFyDpjdhpdV92zqPzkhA3zDnx1pQ1X415g",
  "key34": "4cohbwxrRkECfUwjJhYT2befh9GBkb6asSk5wPTf5J9ob3nzg3eehBWe4gebNKmuGHaujLq7WWweAxYDsodKQhqw",
  "key35": "3U6u1Hef9LYitv7CyzxTJg7RaN6KiriXWJVJQyiABUKXfiNpQs2QEoBLN8DfUBLKwkyQPYSB57tYA8fz1yJBsYCn",
  "key36": "3qaChYnRw6tuP9GGnp596Jp9CsDnQ9ReJE9fMzhh35xE2TycDDxMb44xi2XowtxC7YAjkTvzRqizqoLWGD4TSndZ",
  "key37": "2nmjZ7twTqRcxgq5vMgtFStzhN3V7DdUYKGcg7Z5iWbHVxNk81GzesMTYHiogUybjavnEisriViDcjm76BHGG8Cv",
  "key38": "ASGJPyDJnxcKpQ424tJ6TYStHGAJVBsPL6qZNEsrV4Sd5i3qDHrNR7aMhW549vCgD1NtLZhiTrp77oaaRmttDoY",
  "key39": "4Gsa4cFFZvNrd1Rwo7NFLcahvXqj2JaHshuFL44TRzXiWKuJmtRVkaHy8sLHG9hG9cXG7QNqcwJoiRm5b5XQydfd",
  "key40": "2Ykt8aUKhjkRQWw9TcNJ5pgBXLt37qTf56pbsduhsk12E5AK4Z8DnDg6QtTpgRuFGSwLLTQ47mGuLWkZF5ePhnnr",
  "key41": "2z3ovUhLWRGiYtgX2VhX7aBrN5xcGNErBBNR4H2npzeSDsNTZZZRHw94dejCRBrsD8jnytsPEpe2m4tiCC4QecFv",
  "key42": "4qRE2hgVmdcRhopqNuKmxhCYYU1WpjbSE83GTWRWvt9akwNyQhpsZDZw7GyPW98T7J6H8dXAyHc527KWZeXooRLZ"
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
