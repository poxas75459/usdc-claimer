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
    "494qJiqcxubfqgUABt9DXQGMxJCbZ7wPZuuXk6NessRrPbHnf3gb7DuytxNJn7pKwKWu5tVDgxcDNyDMsBi6gb2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpRCMmKcbCBrrX3WG9msDF7n1WqNVAKfjjFXPsQ17veCJpxMqmgjXk3jB8kpvnx1E7jUEraFrBD1coSBNnFZaFG",
  "key1": "2bUnH2RHfk9KaVgFFbzrFdS46YB9bSLcQ5BtTdF14n1AuuRJaSiwEy6Ejo5PxNt44aGx4JGPVtmJegQaGG5xdj12",
  "key2": "3R5Fc9CXNQeKtpREAMCRj7tTqcyraC9CaEayAkdbh6tL76BzbLXi3au3DCycjEJ74RJqvZQEb9r2oAyZhtejDRXb",
  "key3": "5r43fV3X9zLyWujp1R1W71h4EAP1JsJeG9byyCRqpG5SAVnTBrSnypnfAWKttzwFGiqrLs9ZhjPZLX2ARRgEYk5S",
  "key4": "3UinfA2aL1rKbeKbumQETdroZYtjkRgWMBExZUJK3H1ko1EmmVNbgqWxsZew7Uef2sQPnSo1ufLrJeThJh6ZzCmH",
  "key5": "SwEdz3uxNs38fw2J8p2EABTM2WoZVQkPDxYZ6H61zjCkyv6oqGQj2spMZggqTHGLJ7Euok1BKAUPt8bJcZTTGr2",
  "key6": "4j2HF7unRPKM3iwV1e531tTQDbCrFcpgPw9nGDTYxPfc2CUGC9vUGQdAqLka7MgBA8sqYPpHm8hqhH2rayCin1J3",
  "key7": "3NtaN9DgjLn1p7cBfVYwThjUVet8x4umbxvGPy2CuStKbayt2MR55AScJVCvArpy2YpocKebLmQNyCYVrLj9pnyT",
  "key8": "2LzitZ5jtDHMqU6Hy1NkP7GeYVAt7KKev8eSVv4zsxVbCBfGs3iQwrUDpCBkba7mSwhfejziSuRVnhTG5722sE69",
  "key9": "oFFbo5aGVJ3H7Fom9d7maNkocvJBaufHNxk24zuwwxjd6uR73UzNTMh97qDK3HrL1kRpxCecXs81svhgZfsqJ6b",
  "key10": "5w2kcJDP1YK8SNBU8SdksiTQFryoieLHzEn17jv1D8CbkHiEMJzuR5uPnWoDBYSB9y9zLbk7nZYw7rxGGPVfNuEt",
  "key11": "9p2qmKTyCPuGs9xa8SphhNVBDFyL3FXK7GbMfpx58optTSGPKpbEVmgCPZ814ivPH8qXG9rAD55p54SFGHnbbUr",
  "key12": "a52XnA1dPyvQ9KTp1fKLrkxqHzvS6vgRjxfSaKmof6MeSj1Waq7u4rH556zh5Vu6CVSaNaKRv4r14RJCD5KpK1W",
  "key13": "3MmY2sXW8xnowyz6m63SUdE7kCyP8qaX8jeBaTLjNduLkyrjcy6MUqkrjoTVoP9KjzLSdeK9uhDk23kP71wwC8bC",
  "key14": "5ShWuNkCPTh31L1JN9PUEjsPLE8LZjsDZeUoKQTJGHGbVbRK6z4eEphNn2mKBueGJyRU9aV6dKx2ofTj23hB3ZVm",
  "key15": "7CJSf9yhfExTEDZMLW5K6ZCB8hkyfmH7HcUmYqCtosSNzb2D2GG3p5MyqJFW6fTwViYDU3oaNG6NPckvtBi1J48",
  "key16": "3q2WDiaVx5Mf2dj7emXMefAJyULTN1M53kBTRZ2NmCEQQ596f3jUfXCWCcLw8uXvfFBjcumiarQrtwL7p5Lm6RVd",
  "key17": "cYdcAEi697btdQJzAbJ69PsueoLSjvPUjMbXc4SQGMkaLXbjLQUq1A26Px8znBeFTHXDwLfS9JejFHH7ukYKteR",
  "key18": "3FxS8GisKyE27BmngCYBmVVxFgX5WjfLMGpnEjQdR4m1Xytr3home2ao3c6RS1mXxvhMcnxbAzz9guKYHKysT9vh",
  "key19": "2mALBVYzbK7YELUDJZurWLUDVJuA6ojHCj6j9XQ18eob3Fyqm627zUGMkmNYWeSSEaaborRKBauX49KEW9wxWJ5G",
  "key20": "57RsKeDRfsDXPKMkYve1Jy1Rm5XvSQT3k5Fv2XuCyEF3m2hDP7z97t9kT1nx6uwy6qFQY7TceL7BhzxVzhQUTWHL",
  "key21": "5xcDg87uhczVLkBv8AzHcGQkXGH3hgmzCqq75TQZnTnrNashzEwGSeSmGXcr7rU3VZhJds8ETanbChzgkDu66YQ9",
  "key22": "PG6vXwz1NMytmXQ7GSin8fWy9DrSCZccvJkR45EBneobbhZuJZaVtayrT6R44YcmTwhniTkJq2ySMxo715G2eh4",
  "key23": "5nrmgpNmFW4h99KnXZfNwVysjr8boVdWscLS59f9jbDnSqAAFkGSyomdxS1Z75Uhvv8YgYmkSB9SKzULHNPRBdhZ",
  "key24": "5XdywtEmUgFiZHXgVmEAFmojF8RhkqGfC8bz3GHSHqg3Nc4Mr8hBUQe32LH1kZU8QhF79XpyxUzYwxB5zwLWpbPN",
  "key25": "5b3MwBhWraz2mTkvDct16ZdqNg2GcfQ5A1RN5Y5ncfFpmMoKBSsNvV4zSEtxSFmvxrjD868mnHrF7VDX6JW1J74m",
  "key26": "4XiQuq1MNkqie4Qhtp1xte3Az3xAMPCKFUtsgiiUJhrZVqZ7DZdVtddAYJnK2cTitZ8hFK88pkhEaTK7S9C6QLtp",
  "key27": "5RM7qfguziheisZsFvsaQuidggkk6DhnFyebisE4gTqkJFqT4M4R1UL4hHsyuxvKyg9tzp9gwehCpcxbLskVwwgQ",
  "key28": "A8Mcbgiqmwnvtd52CFCrArcbQ6umQ6rsT2MWvK5WVc541VqscRncKn6wdf8ZX1fq4QKPSFcJm85JSqzSK4PMN8q",
  "key29": "5Hgn8nLhpu5egHVKTyXYCRVA7C61QNKMKJVpLpu5QRXV7NYyVXZmk1EUMfx7P2HmimC3bhtirGakRESnaq8K9ZTG",
  "key30": "d7R2VU3LzXGYkka9aV5eDwhUKT9eKiAzy8oRNCb15nA36JpevWkVffwVGXzLssNLs85Z4NPf8coppwohMANbx6S",
  "key31": "VkJ7edZ4ZRBN3NVLqPw64S2yuB9LBjwx8vn72Bon8RYstvmjowrCp9TovxVcQUqnqXCfpNQCbQfG6RmUJSG5Lgn",
  "key32": "2SoV4EaGU1DskT2eHRbJAH56iuhXPX3ZFrM2ss3W5rSv9cpx4NTb1oSsJpKnjrn78iKGMqvwk1DwbuBKWkfcAgzn",
  "key33": "f3NEMkpa6JdJLD12DNwxJzcXi5ZB8eZQPCKLhSMcRs4X2WD5XGLKhHba7U8h46erAfqAwj241e5GbVf34FAGziD",
  "key34": "5wVKzQeAnDfhTp1j85DNTpX9AcrNzyi8b1wZqcXkkvduRxzyui68xpktNZHB4nnEhuT7yP7xY6PDT24ZaJmYT3Fz",
  "key35": "4E8PoeLEeq6ufu6543N1BXKXQ7oB4Lk41jSRVH8B1Jrgob7wvNbWKvAhAjoEaHpUMFSMojvcHtoJEPfDGrF5z1P",
  "key36": "3akfiS8g51ZA8UoDCr6rqa4PaCqZNjM2fZM4DzD4xUQHBWDu7HxQZv8AsMErBuXoQ9PzsZLHR6XvVjdXb6T7UV7",
  "key37": "31RVEoHiPbepKhGHAg2bDFaxMZxDsY7rpzL31c8KYfAfUu1cLGHfzcj76jwVuDvPAfFjHHDYJExsvPGReDaiDkQj",
  "key38": "2Ww7RKxFshPx4JkDr986Q7SckfGDxom1R5ffMUAT4eg5FnW1FwNBXDUsVmBZkgkHS3V7vEJr8qSWnar9QxrDYraS",
  "key39": "2QVzPcjFiiZ3RFuWxtAzjcHahPeEZvpjJrhMuV96VescEsdVvN4fb5eVnKt43VGHpHuMAMmugBmYgaaxJdAwHBec",
  "key40": "3z1adjvYf1DJNNNgmwcQXVFU2Bekb3ai6KfT5j3KRuvTgXD7rmVbR4DFhgHH387NhzMfTtM5Z1Tat6dPC1aqj3Xm",
  "key41": "2px99qKZHfVm7UeeJr1CM43q8QSJaEqfXWx1J64ySWb3HMiADZv78fxzwWRdiQzaGuS9jmDebpFZNYZEPJXtPZVz",
  "key42": "2mkbompVtwHUcsXZqf4WUGt8tbEi56UsoyYt1dg4bDKEHdVoawHFmXdGYMddquBoGyauR6q1sFsyMayeWKjaQWFM",
  "key43": "5nbsrNtmS2A2NHtivZSJhVrwZv9bbFeUmXknRhHshdPMW8ToCt7C4H1dnz5GJJjbKJAjbhpamwCnyrUnKNFmHCB8",
  "key44": "FxVrbZLAfLdN6C7Uky5i1JhSZyBK99J87doRPrvN7ziG7rPHtV25zT76wgTmdBbzuFsBRDeQK4W2L8QJGpG3qW5",
  "key45": "5gfnHvonugEjYncmV6o6DWihbgWda6JMd4vtgY2oNK4vzkHMPMyyRXj2VQSKnw46jm6GMxaLxi9MFwNm5KZFCxAx",
  "key46": "5DaNb1TuuYZi8Cmnxfe8vP7nZqqG6Gge5MKEHJfFw4cV8FwbjSysDwgXoHi8cyoap1HWactENNzoqJ2zsCj74czc",
  "key47": "4P8RxZ9CSFCSnpKCNQfCF3C68QfSF4Fgwuun7ovdrcL4cZ5ABwJmZhxnNThMXEqikh2oh4v7274ZuzJjGPNtBdex",
  "key48": "5DgEnGHbwjaHriEzRoAy64QTpp16UknbXw68p95qfiJvMBTyE3rW1SP58WPP3Gc57PF1KSGkm5t78ZmPekUu6ioH",
  "key49": "3vKhS6sV3Rxcz6M471q5wZ76HdsF3GpMYXdW49wiCXiLu2BTHiPRqD8wetAG8ZBhaHisbmb2JPLvJVq1QWFy9WXi"
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
