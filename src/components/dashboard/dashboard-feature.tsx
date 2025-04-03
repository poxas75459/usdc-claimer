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
    "2iBRZsDgvonX1yppTkkhRjfGMLNTPSJAzhJwzd8KKNnttwRoRPsknL1xrgtqNEkK7rhzEdxq69wbEESNPRdwYeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b8EGh7b55ezpwT63WYaSJ2SjvVmZug2LKGz9dMuPijqn1M5G18sMYadjBnLmYw7FN5n2j7s7RZoZ3dY8c2EVMh3",
  "key1": "3Vbi6QfLTb3yFv8FTiLewrdTfGDTsw9iPLfJRNcAgEapNCdApGNyyJhk6DYzAC58wwWvXScExWRwmH35exSPZxZJ",
  "key2": "5tV8jTs7fbjXXibe5jGzz1bHNkk8wsJCmim8rNvG8zNK2vzQJFdG5FZ868HmeuT5Qv7xxvrsnsAqEmMuZn63Jmqi",
  "key3": "pFW8Th5LFo5yGk4pCiFwryUCuruRRerjPg1ijqz4EVKPwYiSSsBxNnBh5aoS8qj4dCrJmrPcAAnhe5ZxapukpiU",
  "key4": "jMNLeAg1132wRjRSfGgw5cJm9o2bQV9MS7A5rMsCt6cG69ogmrXiPRmNYhLXtAgVJVN3fLUzAQrVDRx9zzQrhkk",
  "key5": "4rypT4k7LzfjYAG8YA6yZcvqYjM9EkDYpwBJ5pyqb27nkhr2dK1qguDdgG1uxcd3jju12NQ889kjCvEJNbUxERKd",
  "key6": "4GiceSrqKaatqg1uYhW1iNEo5EcttoKeFZo6PU3fJnjdCVfUqT1fj9yvRcTGk6BocKRATaoz7pcAzQzzbgcm4MFv",
  "key7": "5wAdQfn94xnHncy7Mk3jWqGyh1At7wF9mzeWsuwniAPYKtmBjGa2LwCRP6peSQ4yjdYEr7zZW9gTaHb5gfdXTtsb",
  "key8": "5dnKEHBkoBM6bzT4WLa5ieiRZ6x5YQ9tvCeaS5rZ2h2ZrKACv5HcYUgNW8FbuBZ3vLCoquZtpgY47UUVso5B95ND",
  "key9": "49uRsaYkydFxR8FPTAPtJ5NcCtU5x5YPSxpPXyKEVsaamMwJVHsWRsdWHSuLUnTnHLmLGsWMTThEJU1QMkQsfc1X",
  "key10": "2UUkgYm83NpEyerGxarHswL6mUh3vAYX8EscsvAhCAT1aLDqXwpCXYzUYE3n78d8NPtsAWtuddv2AG53CDr6FgNW",
  "key11": "4L3rqcBDAFSxYdF7eZXRx5MCbKJ1fKeT37UTsxdTdCdeW19YNY5FU4K5KHUr8fxCMR6DB5BuCLRHUdnjxXTCGasu",
  "key12": "3vrW67SDv2kxwgkdSDLZxgZp3anBdEpvjp46NFcWT7xXMoQp3mSB8WjBgfzrahSTECUpw4ipXoTSNbDUhkB1pJdw",
  "key13": "HfzK8PoxdTHL2DPDwZTYSkyxKmj1cVDUQK4RVBUFbFPYzi7kUUhGT9saBamrKN6Pxtb6jcTcCfcVnZGYFvCFnWT",
  "key14": "kbDtmbRdEwTwpojnk2fEcemfpWeDpHk7hHztyEMkE2iUnEgYw4rmHwX9o4xnUw79aRzPFBNywauRuPYZRUyyRQi",
  "key15": "4yDSSWwcvo4i3qHLTKpnC1oKohSLtdHi7FzeCCXbSouykvQVqHNMv4Qoyeq6YA4CLiZ7eGGTsCtZ6xWV7sHSVzSq",
  "key16": "455ZushqaHBU5ZnjCUC7VDrrq7xKqxBrvAwVwFSiTTEfEuiS1yJtgwDCALfeJP5ZBGtJdYVoWUHR721ydMBWKTNF",
  "key17": "3EuJXKL1xMexa2qnV2zeYP2E1xBPrgbS2jM28bnKsti7EX3c5MLz7X5En5yET1YHG21zPsJnLiRfY7cm6tZ2cZPb",
  "key18": "5wRtHcC1hv8SiYp6zaAX4WSDo4AfSRb38ahufMcPz8c2WYtsHMzq6Fq8Sq7egmnzzuQW2nkZBNaPey4GxuCGciB",
  "key19": "5N2TH8GAhVPftGhQTpcyiKFBNzDWUXzWPtz8y3NE6UEHL8c5p6hDjAH9gGuPfN5JeMaLsNfTFA7G1vg2gxsw7b9D",
  "key20": "x72UbdttqTkPodHuPdQSmQykBWr7C4nL3D7ia1hG8MNLcrkkLLgKs8EcH8yEDeVRXS1PebMHA5vSNFRyyCdFpbG",
  "key21": "61ZxVS59k6vohrb8BBqzV8g7PP7vcBRUSHrzZPcLD4SLVk5XyMG5MnZU3ThhnQZQnKpdvDeWVNJBsqRT4ycXWdJt",
  "key22": "5HnjtfhZUtJ8UumXxfscvuu8HYwBqMKZwYY7NwHx5iyfGw9LrXWofiYeku6sH3RMWu13huLm6GQo7gVh5PNXHo1v",
  "key23": "4QKnjPh98YU2GpNRuDeiJV6eHjnVVaP8acL4bnYXK9kSMiErQYvsKx1h6zZLEpeQPn5uVLujAGeaJS6XdNzKyPNU",
  "key24": "cqHikxxZNNVsfr8xZnHCuyzyhSugvEQ16vFuc3zaqkK578fadRbXSRUpvRHYfSo55W5xHZMZQkM7wHJM8CpyUZk",
  "key25": "2YWwMrPR9pyaSRwcgxUeoneNBWXYVgNJZHknHi8bnaxy74M9CGnYGicwTotPhVNDqdAk5rn1n8tPY84DyuHYddac",
  "key26": "3kNamFf2hxDd4cdaxSxTDaJm99b8YwVuV7cKsFVU2UYudgu3dayCEkvR94bkX2AMNJMmeFeVjPxAYVwhr8MsyhNt",
  "key27": "5NToxzhRr8ceSua9zYYvYz8WWQiXucYgVVigWR53s7sk8g4ALrUF7mGNimMSB9Ai9uDS83fE9Z5MCafWvwFj8FgC",
  "key28": "3iTRXZrQ9BZnytXRgeRMtVT93oabi8P3QootdQ2XcQ4pn1RtSYCrzqQcHxKp5ZrjrgrQaLzkgHtDX9Sfzq86qds4",
  "key29": "4FKCGYpZLySYewDsEyzXYmqYAn3tdZxGAgow7ioSh66mKd3h44bYMcHbxeewZBjveJaPMimBLmYLgZLaogtX7HuZ",
  "key30": "3HsHNotReNKMSipFt7rm5RouTDqZQMyiHNCuLsMpGeWgyp3aj2uoVf5GBhH8xZFmUT83cjJZevWCrgsZS4szuY1A",
  "key31": "4sXgqtcoznSzeyZQ3pML2PJ5SNoJ7hroK1Kg56EP9YVjP5HJoyeAwMBBhbWaRTftCnymBDmKNgMBeozvVLeVwFbw",
  "key32": "p4xgcMS7S7r8j9KReYAmeqjVoChgBnAchQzRJ76Bp6LUKZWjkVNo89VrbozSeE41kW4uxc31SKV74is3pH2EhF3",
  "key33": "4AKcNSBD4DQ3ZYSsRpWj2cWAsxkiN7qUte2z6bMkrbyrQTfMnzwAtwT4xttxXm2QZ6PZbXthSJ79aXqZgD9AS8nP",
  "key34": "2uJr1C6gBpcpUhBhfZj4Z6nqSE98ZkoYvmKJErfgxUUtJPi62teJ6MwjvcUjyUQhf63Kd1XYrKqxXFHWwm1cQfoF",
  "key35": "4ViFQ233zNXQUxwPJGkCYSQytdjgWimT4NNqMSXpAE3pCnPxkMfiPEVxeZPDU6xxCngxCQHRE4yGxWUkbCHZFrG4",
  "key36": "3trdw63KvRsRrx52nKJgVfV66JMNVQu7g3LHi9eCSuWpAh5XeS6pc88jU1YeaGTijQRWoFxcP9LN6u83jtuXYzTh",
  "key37": "55FpEaBsHwXUaPjsg5tq5pb7mUs4qjZPr3LxTewscMePhGGTYrkPNZDuqiVrCBdQWGc8ZCDEzMbBdqQf6aqv1bhd",
  "key38": "5G63WggdcxDhXTNX6zGmPKM97wUx2mUtBCecfTgEsKeLoHrJWER12EEKKLitc3YjAwGU5sD8Sd9sgnS469sqVw8n",
  "key39": "4kAexDBvQzVtYRvJ9CPdAcH5Q89MdwrhY2SSZw8XoKfL6VwMLPnSqikfkk4WABHSU87Fcowb3REigXHV9z2aG84T",
  "key40": "2JK1SzxxWB5noEhYFiPGPNjFUgzhR8iw8Gd5cpv4zJn5pJNhuyLozXSpzK1DuoXrKd7hVBAvLErKCZa3HuZKi1TP",
  "key41": "3VNfSdBGUfcECH5ryJA3Dxwdyop7XePHxCx3ALsLTo1BXfJuVmwbQSJTEz4Wpms63YkoKVqJLVcRtvv8c2RVMh2r",
  "key42": "42g4KkRefAabhWybCn9GDwmhiCssktsSMVLozjk5kFvDSS7BKU5rCNVZdfnfNqJE95n8SfBqdaZSi8LXtPMdrBnY",
  "key43": "4UDAnYVZypBqTXfdNcLX2GNpDKmnd47b46urWM6SZr9zR7U2fgPLHVGKmijXaLLa5BtifkZr9NuYzRfauNoo14rw"
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
