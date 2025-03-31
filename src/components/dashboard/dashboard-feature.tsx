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
    "21tQKV1ogLSuMG9kEWz6NbJuMXcndZFxH3sr14oirTQ34o5gTuEFJ9XkcZjBPDKEYcJNVKieiLudRNjqffEX363q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWMxMwa2hgkReKhNX6HKthVdbbTVQ7HCRkwkxBXCnwk4i3xWHxJjNvwCdRk52mwVMLCbLXG5nnesTwdEH2HHexx",
  "key1": "34QWZvWnUqLnporrsSL9fsodLAcsdnFEoKKTgH2H5xBqsanM78VSrjAdbiYwgvKYDnMZDLEK2ooR8jBB6gqsyvdg",
  "key2": "2232P5RPxYdkjeDyPzPZ71WjV7E5dhzgkDL74K3P925CyUqtbsAagJ6S5pqnGshLdrgMBNgWVqezDwqDcVQEAE7U",
  "key3": "2T5WxDm9GwUmExHWgL4Vbyp1mEoZUzuh7RkoYdwNL5xs4Dk8rbHpCn8Tmy2VCCrL6nLboLJh9e5v6T6S6PpcKknw",
  "key4": "5A2NXhF1s2J8WbAHyFiNiuAH5rSVSWM8EcZkrCN1EEsxDGgbtckwPPAhu5TeA6LuY6UoLQmnLpAnPjqpKLQ7dQMX",
  "key5": "ko7NG6nGs4D8BLse62brvSUMxtZxstj493RqsE3Z89aWH4r7QMMtdJdH8quSHRtvENWVwa52oNxhCWhjnSVT26K",
  "key6": "2rL8FF793wP8SxriQvxFkgCc3mrQk6ibLvMRW4128AB2APCwhpqFeZ7RAFHJdqWcnPcRZqbYeBDSL2Guu88QDQez",
  "key7": "z41XHqExu5SMhuexdMfDughpu7SW3mTfdMy654ahwpvqLrHm9cb2PTQUknJPPhQFRuzeYoUjDeWnfARL574byyC",
  "key8": "E2cyoCVJ8DXr9s4Lzq3occibzk5utGu2N2GLEanb7mzcgCCL9vTTN1wUqxN94fwHHKsXbab951groerB18JAMtc",
  "key9": "66YvXc2yb5nyctaeEDC5NVSfzhqmgU5WyWTDtymigt6kH5Kw4UxfCS9ULgRrv4nDc5ewkyduhxVPngqbFncP1D3d",
  "key10": "5MLwVf3hVzC7KLRrUmMnCmfWSci6EzY8sj9q6c7brRnW3266DgbZLcZc8smUtqLdHkNyEW32Eh3Q6GbWfpuHbGds",
  "key11": "HHx3FbN7njRLAEsYvFJL4ftxdWTwsbVWgDYHZiAAuEgTq4AFamHpoRaXJjcjwWyY9427qdktycLri5LjvTPix9b",
  "key12": "3eutn3XuXfKpDuVvq9knqEQyeDcysfEwXtouAfScQnE3eX9WLV6WPjhJg63fybRksu7cfvT5MBXSEBBoDUej21pv",
  "key13": "4H45Y78Q7XNamXVarCDqcRCyVtr6UJ4JTvQrhp6zBsHLhvw7LKq5Y7MtuFVMdpJwNEsuUwREu3DwvJ8JWetPg5gK",
  "key14": "3mMW6jxxf5f9cdu5n2uryPDfkufDwNxakYUujoMBQgD4d3qa3RVm5yyaAScGCHip2BuNsZLqKdrMwanyd4Z3JvNZ",
  "key15": "65aAdZYrsEmzUk742YVY66ZXG8pixXzr3mv2DbaKkaiirQReGChnuKCH38TZBZZgt6xoAKSYroPhpEwCJoAXgxJ3",
  "key16": "5ZU6CAMikFttuZuL2mUAix3tvdqUKxzkyxrbZwugMjAmt492FMJsyE85JxHf1qQLRCtBYZXYM26zoo8nYepYzTRW",
  "key17": "NMVkvsxW5LEKsMsAUCNSDD1p5vCiZqKn4HHJBwj4umMWaiciu18UQhAEukC8x9CxQoo3tM954feodp9R6VyYL8z",
  "key18": "5UowMiyepaTdcZ2cBxJSGXoCuchwcarW2tJ75rPvXdjMdNuTt5UAbPuLBQfWoy6KLmMAZYxwdBkAaqqLB1k6rpti",
  "key19": "62BAtSueKQSuPTsGxAKhK8Y5nZAeh8sbxbrF2Dv7wZmeFcMTi2fqinF8eez1zsTb42qiBDi4fSzSCDef2fzp8Tz6",
  "key20": "2paKCMdWM3MNK2JADSEfFZTRjuZ3pncYvsyo6WYitCH9yUtSaC9qLL1K2NiEnE1YAeaQMiWDGunSy9UiE6UPTjQv",
  "key21": "4E537nq5M8PqZhmjVRBwGMVfrYEej9KeDANGQ1WsV4ZWLBxbBcKgkb6aVKqMcWqPywBmN2Rz8DiDAHtYDmAkuLhB",
  "key22": "5kRRRDczwEekUp6Vb3Tpayt86GBvnpUAfTh5drT2iuG2VdJDt9NtwhiM6XscdYZb4UN9MsojZg9dGZzfyuGRS2DY",
  "key23": "3dEg6KYUEC5RTej2LwjoYiQX8w4cThULWGW6weLraEjQ7KgdpsVTYD2fS4wdKFfBY5qiA7bkc696wpC2VAJFPvSB",
  "key24": "wtAQisxmDp5y9jxViP7PYV4kohPXyUSjz5iu6vAxzVx6VLdugitYyCWqV7pgfZHZ2inS565kFJfpZxnw9dfMWUv",
  "key25": "36rwGX17FZA9jwNaiDoPBS14VwSqa1BKtGT7isXJz2XxVDcKvg1WywhmSXRq4veUwUzd1n8KuWjfaMVCTGbrZJCP",
  "key26": "3LSLLHPRWj5Fn6p6tSnyb9FYkaXPSw4tmPSvLykPHhT5hrZvcpjUc59rVQoXkxuwKLEebWR7h25u7GmsXYo1o79Y",
  "key27": "5yFSJjE7PDgSdN5GZpbMYexCLJFvEw9mmi5NBKum5WLiB8Nqzf8MqXdrDvnZkfS9VtSMxDZMZq5PN8KDSJkVFZZm",
  "key28": "yWT1VPPo6mdhVaszFFvkoqe4XrkiajZUbDxHEsyYxR9Aa1gok3oJVBZGN4RnrWYQLW56K5gTsPQwsd5e6MWtjQy",
  "key29": "5N9whWfEog1xwax7sHHqHfFnnx7Gb3Gt3rnd7HcAEtWNKgsuPcUPrCREEASgG6SuoeYMG6fHmvQ6aLY7coeShMUF",
  "key30": "2Nrf6idLwFssZN5PfPrh4yZUHtQcJUCKyCsgEH6mtDfrWuqBtbJGErnL9TaMNrW1tYpwGZ497PUu97hW5DCNGU1G",
  "key31": "33pKaAY8Fi21qCz4gdWR8bTGpYQbX6f5LwRzfJ9xvVkqXHfYKyc9LfBhij4trt5Skf4XLqNPp1vh9TVqBiufUjYF",
  "key32": "2iNMUT2AjCjRDwAKpdP3g9uD6n3mSDoGpMERM41AGUb7usvyGJ2ypoLqrqebpvSpj2mxukyo11fxELnWuVXkuiER",
  "key33": "eo3TjRbNj8YXZM9AN3vnNk2L8efD3jJwVxqEj7ADeTEAjiRMBrhe59CcDb8ij9yhYFgZq66cqriCwcGGP5rrbLE",
  "key34": "3YsBya2fTLxGcqMAAKm6cP3rukA2KgKradzJCw3c7u6UpMsitJxnuUt4AV3Kz8JAJ5gV2uSMFLTLArxXDNZxhkEL"
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
