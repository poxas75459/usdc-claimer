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
    "27WvBZ1cJjoCdAv3TJjw4aS4sdaaDWua3rY78hzSBTKcAnunFTnwXHJBi7fp2exCRWDAUVFdNhqdcF71QonovXAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrtPcfZ28DynnTShbEsCN8LBEhUBt5dZU1JTGSuW9Z6imqENof3TYBfc8Wn4J8kqohxGh7XpLekSKpzfYsWCYQa",
  "key1": "qVFDDZcCJREipQAfK7zW7k9b7VtpShRo1rdkxC456Z9NRAZnDYpCihUtio2sUmKX4GS8aL3pPrLs9QBZSzCWkQF",
  "key2": "4zZMDZjf26FVexiuj61eAFnRuNLMCm3KwNacwkENZLxUr2WXCpwaL2YedwXTiFpX6XXZuNaLvAUmY1a6Lru2T8zi",
  "key3": "5XqrsjTmdr6obMSR73q6z2ZmLf7LEJi2idEk7PQRBYct6kNBa8aRDJvZQST9F1KSPTnF57MHoS2Qbvfe5cSiuNPe",
  "key4": "2hBF3wMNBa9c7H16xMGM712aK3JYPrAmuur8CEXzLAKa6BUSQYRfJWhJcyUtzprX9rtF3NdTw3f6bteLwsieEq4i",
  "key5": "3Fw2EsVa6sQeP7oYeZ1x9ACpcphZNud13tmcasNgcEJtAWgBstA8Z4Kqw7i4YGX2aKYoYB8yypHxrgq5hhxU9P6f",
  "key6": "RbzN3BeSSEQjwUngvrqtubUtywN7FT34gbyAEUGnHAnXdYvx7Xo3cd5EfXZ37ju9MF79Memqv5LhjzzRHHNJwSP",
  "key7": "3ryomChma7W8WxXEo3GySopNcSGtx4DRGSzGqFsHt3ozxwif5xVpGKwP4yoN67Y9RJS3UyriX4gSceDgP1hsxFkp",
  "key8": "4LioC8dAuFPtuK6JirrXQxEFwP7B5nFNkrZj9Vetr2JtLtUGoEx5DqTgAUP9yYTUkSFP1McZAsr3RceqV9a3bnPt",
  "key9": "5DvHsTdVf6JxXVXw9QWCqNSLzAFJA4MuoNTQ8RNQRJ55PTtdmuPLQQ187yVivZqHWEsMXFCUdCR7qiBUQxBxeanC",
  "key10": "2TgBRFjHcbMijQSENJuhDJ4P7PjU4PWbiu9EksxjqSKdWd37MintiANi8cAeiSUNGCKcN8NqsVZ3P6RfWCAktevy",
  "key11": "5ibrcs6S951cV7KWJe3EXmHXYShrAUoXA2FA37LQNt1H8fgXd2VRr1TrwBVxt8tmWxCbcRYfAWHbjgaPQzw8eb8i",
  "key12": "5aGiDHd4UGoZxM86wQnGdpN1Yf1kRVnLRGW4jeassoj1ZiJn1zngnHSVRSniUagAKbVBfVnPMZbBaa2UanBvnG4w",
  "key13": "47mWUTfkUFf16PgavbSWFTbogPp7A3ohLxS1A1XBTtRw7o5aH7cFpeufjTCw39mDxTkNzBLxZ43Bf1hzRN7Hsvha",
  "key14": "4am9xRYNnyLkMhB6e3owHZCS13My36TmZcnvNk9jy6ZbC5SqTbRt1Cdup4WLe23Xsz8iUBRHWiy4pZFHrYFsFTbm",
  "key15": "2rhkFpZw8RCJa7zGkq1H9coz3tC8sLruKToVhGmEK9cPmXURAexkgLTto4kFayJpEkUDfFopLmwoCoxzqD1eqbP5",
  "key16": "QFm7tMW6zM7XNUtX1ANYvc2zNjL9QE2DTmUv2i6UQLuugRP8hdAW9LSqG7r6qeF9MBuyVQDxYjGdGJVmUjBMjCZ",
  "key17": "4VBwTPMA9Y6ayry3R3yWfxSuBA26VodKoToJWN9sbrsFQV8QUtPVBfUtQMLB2PaeEZrFEWvtFX8j79XESGuJAyUf",
  "key18": "3yGscS2Nf1Jfr4vuaCwtVNqYptmxTh4AE52RaErrMt3tgmYX3B9xhAULnTV87vrSfTKdQC6yMzgfeZiUncL4iWfZ",
  "key19": "3fXKMHN2VyzAfZMfdyqNsYrcvpbsi3tuA5K1v1BQh15XdBJDp9fZZC6SJBDEpz6AGpaYvv4HMZRdirvRhoqFkSA4",
  "key20": "2stmN2XQDb5DN3ajQ1yoHxoK7Tec9uwRVXzmNWdVe1GnVfpjjQBhwwA4NYzHAF1XhBJNxCwzZmycfZmwhN5zdfWX",
  "key21": "2fXjY3nVKjGrBF5FDpU6qCDK8eHe1UtM1kTVp7nvHd8UKSpiwKjhdhEJQLGPcKQBVTyTBsgcnrL1RSkLvkW1GjFF",
  "key22": "xTshjSyKbbWkCVqE9pWhXHTPzJr2eTseimUwXywmsgFPn5YME4QkbAs5nHrMpM5DcimzxvSqqwNMgatf8PihbAv",
  "key23": "4nUkn8PSnAkZQVm95qC1Fem8jsaPoSy2kQsFgcSYzHdbpbBzFmkqeizgj1FoYHLD72zc4HNJULYp3YnCesnxG8z6",
  "key24": "39YTfHB665FStg94r5DBE8X3gPoauu5wLZ254kaVenFEqqt67YQt7BRJsyHcJg7xByFzXBvwaiEkDhBGFWNqVV8k",
  "key25": "5VsqgaREMBS3rWjWrD7vPRUxXwFPJr8Ef5um4eFVVC8nYiS7ijX5TXPiHL77bpeQ6xFT12QyYXKtG6sGUryP3Jxo",
  "key26": "4JQqJA8BajkwrVfP1NrFHwbPDa6TGBsZGn6ekhfKNTEGFXV6tGnPhcHmd6KTWrmud7MvcW3Px6w9c3T8MUdSi8fw",
  "key27": "2scQtLVGFdQxS6yhxwZGcQziram466uzmDq4VjbChHLZv5mF3t2hcrUkAcB3iLNZtr7VGE9M1SHNNyKSstM7wNht",
  "key28": "YrYrkGVXPFGJ2E6WW35dMiiEkRTczuYvtGWVwsmtFAwxRBbe8PfyQ9v4aXC8mcQDpXSujJvXPq7QLywhrtK1NKR",
  "key29": "61EAbtSHVzawpekWFftiw3ndUi6fin7NgkGAzrx6h9sQshExsYozd63zwDYqHCy3QsdQRNcz4LiVidkuvdtiE1vw",
  "key30": "51timbT1hVZA2LCGU6hyq1xuAHu6D5VrG5bVNHgWYpF48e7hWnfrzVrJMuXuXR9hp7DMn8P4HrxZnHYXC5buHdv9",
  "key31": "4XoAWqnkzpb5sYuDBz8CnLP6qix8Y6ofD5RH3z8JFX3cbNRfkxXudcdgZc8ETaBLsyWPFuhTRdHvMuqx5G33tNBP",
  "key32": "4apaXJeDtWQfhWfK8inPxiA5upc9j6em7SeCsa16HNDowW514whQnTHZcDrqr4aEhW3oqtMT5nABB463Uc6ZiDwi",
  "key33": "61c7n2wMBvUUjPPbtSrAPeVzou9gFFd1kJvvRv8fH41gTqAcuGaiMvV6bVYEiL1CMStUSHEWruLcHv1v4zHKzLoB",
  "key34": "4oDr37HqCHu9xgt4uS2Qc9M34DQyNywYggvW133W5AbpCgsCrZ9e75YNyehc625JDaXs2MpnpKdxWibHriYf6KXY",
  "key35": "55eeWv96P9mHDcTp6Hrw79gpF9JogQ9JhCsczXMeDij7Kk7GcbQjGMFbwFTujbW2aWtrx67wcDdGcgi38SWbfqUm"
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
