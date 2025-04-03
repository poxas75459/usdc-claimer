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
    "4WHWz5grwB6zcFyL1RVoakBRPnuWKbthziRMAmwEVkSmg7FTfDQcWeXMBhn6QunJAExDDTtw8aY9wLtRaSjumsvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Hb4s43DnQTEti1SdYTLCHPcahRZMrYibcx5DczciRUajWzdJv84nVBWbGkFie4QeQdRx9zGppZRpwMrMckRXsM",
  "key1": "5SzJLSpRzCDYKjdk9UgDUfNKo186eNZJJSFxDXT3KgV9borBNdJDDSZMgkrCCkMpZNgJVqPSkpSaC3rRVQ6TH9oB",
  "key2": "y1gkBqp8kCsWRzN4daVKoQkhjy7wowSDfKYuhcVxmt4FwjeZiGNjT5qnTACSY1j3PvHWy4btyjNfN4HRmhEHsQT",
  "key3": "2taLLgUqnZ1q2h5oUaK5QGhXWD5EMbE4CbtLJm8Cb4qgsFBxju81c4KX9A1zYTHhHkBQtnaZqpxM7NY8sMNXQheM",
  "key4": "2oBju8orKaPzCJrZSARhUNzVVCJq4nDEwVEnqarbtGz7wyqMuP2BUafCgT9tMgn2njBkMrNEyWjVsevheZHTyyBa",
  "key5": "rT51P1CeRw3DTi7dkoT2trYjZ61pyoQLdKTWMVtbTuCDbdy4d1dt5BVX3qajBxEeND6ef43JWdqeKbAR2xZ88gP",
  "key6": "3YkjoW8DxopAWorRSF8K7RJP2iMmVCCWesy9y4tJMib4Rdx6Gm71hEnoysugAHNqruacm3RMvxxbyPuhry53XTh2",
  "key7": "4Q58LJmV7SmUTbifKyJUE5w97h1g9NrgHjWgk7rzT23RvWsxMHRgmJ5nxxivZU4Udqqf7GCtwR8NfCZR7goMdHFJ",
  "key8": "WnAZMSGxK8yuKPaeScXJseuMZ2GwzHUZgDZs37Kv46tnE2kKgznBHPqfhzf5UTWj2SjUEpDbskgNG78dAMSqRHm",
  "key9": "4MVUgGVcaYBK5fKR2wtUHjDdn5GrYFBnN7RoCqup5Ziiao27JZviJAnjhNRZTzHw6QPwpyVVK76vZ6mpqRNzkuw1",
  "key10": "5qvbnkiuGs3fCQFfJwt9oyvBUfNf2Mo9Eak6MnSmSKt4PcAdDQmSgyhFY9hPSd6LaNFSjfSxEmkFTpzf7PXL3kVQ",
  "key11": "4dpSYV7dyGKnnX2dxVJZ2TgBMUATj8yv2ssfj3yEdRbWWngC6x64e91URnZRLNaLBL5EjndUXsErYoEFfJfh3cgH",
  "key12": "4Ky25m42PRKMaBhMuwwxDtub9gBNpiSxt1aksuDa8VWbq62ftfkscXLKBrhY9hVgbsT1n7m9YaPrs4MvCcwT5Ucf",
  "key13": "41uV5Y5ThCbLZjaSxMBRFFziAbpPJ3mP7ariwfi4Eqs4dsijeuUsC9E8vznkdAPQyugR84mwdDyqvKVU2zr8Re5J",
  "key14": "3Db5VnqXCUcvjspsY8ptuFEswHEigoKwYiJgJjrC5dxzBARRWurqDHXTYUR9npXzHo3A6JscSPVUDWTqgCh8dq8M",
  "key15": "5ULX4DP6DwvZUAWwRbsPSPSc8oa3BeBRkyibsSibdvergZoBic9MZWYEAhCQHVmdMHBehjF1obxYHqV5eYBaYgRW",
  "key16": "5krsLC64yeKe2zBW6qgtCV8u5C82BZQrZm6Y89Nf3ogJi3NBt8wvzuo32jp6abb5NVxL2qTdbfddYf6SrsXfswDs",
  "key17": "4j4CMECxSXZ62rwwejkBNSsPjwD3yftuNENDbNY6Y6w4UvnNo1XFg7wL7KVg8VXudSCYrQ18QMCCxhy9akTNGpTH",
  "key18": "3MS7d21G2D6S2UtPnAsYKP7krZKyahT5i9CAomh2xw6Sv2PJqpkySoLpEaT6goRXcgoF4veTGBPPdNq3XvudxBZ1",
  "key19": "3uqcqz6FipfVamWX6wEnJ6i1mPFXUwtJ7Nk3etA1MUULgGrNdKhjWuvMtrJDoCRP5ynbkxhWo5AvDxHCd5PF9no4",
  "key20": "2jywWEXSwG5vDNxCnECAFve142YLzywymsCkBu3UEhw2SdPGd7aNZMjKTWkd3UpokJR5C5AB87znbAjb5eqFxwwR",
  "key21": "5UYVR4ntUrrTQDbPv2cHhQFehYAq6yZvRyFFgeU3qpEGnZDZfkdEvmTkmg63nQzyePjHykPzK3eL659uDFrtAnbv",
  "key22": "4Go5UkpoB6dtCYBRiUo3ojH8a8TBWWxRqmsaPD5Kja8Cm4hFUJ2375JVeQD5EJsHLntzoK9JRkZpBftJHzHqEVEA",
  "key23": "31FKd5WD3NG7R3mbyoDqyYS3wA4ga3FkCtG1EnbBLYTwrBjF6fW8d1mNgrikcr1nDMTAbPEr324JBnDbgBZdTPHz",
  "key24": "46Qs4N4JX3MwVAy3o9r6zgazgARU9iTA8fbYg6YDbGuA214ho7C2xau62s8Zt2LfFGL2HKctLaqpwXkyCNrFuevH",
  "key25": "2PZK5BPLX7FRHY79ooHa8jUyz1xTvZvuc8VEdq1Nh8jWHcMC4XcTamWBZcasNBjTWsxwKBNnYQy6MVDptow3p3bn",
  "key26": "2sS3nNokCzYNWtTpNopnCaP1UnrW5814vGP5gF4fiwxPFWF34LR56vqzZEN9Q98GYhuNVrEqLJU9u6yb75AXntMA",
  "key27": "5bdKvJ96pQ48A9fK9ZTPgCQua6wDfWHQm57Pw9f4TwrCUDxVSzNnumVEMxdsC2HMUV4Vx66uYeGtf13MVwNgkPNj",
  "key28": "5cHKrYjispevL4ShSJGg3rZQVzT7CxULcAgSy35CcAPiZDuW4s2RWY11uhjaSUAfFDwadyrjXHe7rQ2LA5Cqo1QY",
  "key29": "3uppijoCGrEU7c1p64MyE5Cadd8y78nd3KpkVcMxZx1o5F3FivHzNaBmv5uPF6T16QQ22ZNq6H9TrmUuY67Cq2zH",
  "key30": "3AJwkoRdDK4DZfjA8ouKuY3g2BtCZkNL2RsghZMnaZe5WkB3RjPLeGV2vhrVo1AJZTw9bVT89osJ16U8P1gCEkHs",
  "key31": "4x4awzE2Si9sZ3wGz6R6QRD36F7zmdiDJNbstydEESubx5DfozS4cCqgnJ2CTVN1S1ALE5utRwSGMTSF6fAdJ7d",
  "key32": "2XHN5VbtdxJvapm2mENNcHSM5PDL1PgagoSy8JuAkmQarHkaR5mQmMsGQoZiYpNgB8M6Yceugvs1fwnm8kZzMD3R",
  "key33": "4tj7w1FE4VeGpiBpKgjTNcwuz7g7ZGJoUUaGxJBAuSENxsWfBupTLLk3kauCSwUiLTrxVSycRbAq6okxxT2Uei4A",
  "key34": "5T58JsHd6SKKqHDphZwQqSSFe3Bhzbw5VryhdB2PtL7ePePP3dxXW7m6MqMW16vvdicZxQJiRpNzAfbJQtJchbtF"
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
