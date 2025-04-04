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
    "4NTdSikk1Uj4WapdYPLDn1qbfCqQJTKG1WwiSJvc2H6V8hDSXkfA5TK7uSzFfh2ZbSCgWuXWzNNuFEaYZse1uPvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vktGkT7RxPptLGkhHUJgWDCph68RTHAe4SZJpLSMftTqZNptJBKfJM6bE2mdxsv9o5qZW7SJ5F2w97Y1zCFoga",
  "key1": "cpokR8FKhHrsXSV61kURHxLmNsrft39ormTEQPXCzSXY9bKVeoiQ2dtSs5srduAdrtLvCFXNa94ycKDgFSnhnVZ",
  "key2": "5R3EmXmmkj6gSuYxX24fCVieT4kWTk73X1GSMYcfJHteMbmZuAnquKb2WfakQ9HvBhCXufH6eHURtCRuNiy1pSjQ",
  "key3": "3SJaexNk2c56uYWqQLcA1uH4aeujigCQbgupT59es37MJZZBywk3ZSAXpBjgddroubxPaABGSG9NgZ6oRFJE2WL4",
  "key4": "24hPPKqk1u5oftuVJwZYSa6aURdGgufiVRGmrSreiCvpHmJNu6jSgdMs11KDg9nsGumBPZqhvAnJ5ygjpbfvLCR7",
  "key5": "2UMXEyyvmbayhvRHUMwS3YFFPKSvJcS3krTn7nW61w4smFtgHoa2ABt7t2o1tztqi4vn7fu5V7ixJTmeTQCBZd8Q",
  "key6": "3gWdF3xRizYjuyMtqsBudjmouR9Yvm4JfsGWwHHqgiA6MPfzTcyZow4mnxdZu6opTED2NRLui43U9zEsBE72SfS8",
  "key7": "2GweS8GZhrdeFrfJMRLmF2G8o9eaMU55Gi5e9tuNgVkU4PymCm98vesnqkWtb9hf6HPjgCyd8Aunfbv6XcBqdgeH",
  "key8": "tDkQ5sKDyfgbPiHhDCKzAbQQ93ZJwVoB4bGkM237Amfk8UvtnPMGV63RrvCaNdn8HosxER5LmD8hhEhoi2VHkSo",
  "key9": "4MqV5RP4HuoMa5tGyZFU8hUpc3S122d99YK4GyGepgkBRA753A3WFRvvmQQMy51Gy4E7uWKDfDojBMSrDD9X4aPr",
  "key10": "5ycHyyoxX6YSprJzQyzxoQdWjQQERhy8aFFF9ZADSqDNcBtQn6YXrhJXKn7fMZait4yvKW2UkQKzTgzBSeiiiUkQ",
  "key11": "2cJ9S9ArXfHD5DhkRegEHyZk1RgZxdiLiMEqHMw6dtRnu2iXAVzhESwet1nW42DZYdbgQRbx2U69buSBTeY4Fu8a",
  "key12": "RunKET3xJWvFKs6AP9syn7UGvFwSYshC1gYbg1dfkYNWG4SPnXXxPBHdxQaK8dtxebLVhDQAq7R41ACo1mRTsRJ",
  "key13": "5JsjwUPuxp6MHD1Nisb9Rb3FZri8goa3Mda1BAQpLa5DB2GZd8g3Yv3HyEY2Qhv5Ht2iuZDR2qe5HaSA7SWaG5J3",
  "key14": "12592rAHa6mkjSEqnNsK3AD6VMqSZgjbm73ZhD42dihrZxEgih3B1TTtXfQLQfqMH46twPRL9YsNQQj84kXTYCcB",
  "key15": "2VgDvoM5sTz3Fv3bnmNTVMoEQRziBVFzZ5EcQPC4DG4r6kxLnyepPuG65aBFEG5U28tVY2YKqmpxMa1iRW4tA53T",
  "key16": "aqp9CvzgeWaNM7Eut48UMK2oPGLAZmd5bEwH3isDi5LDN9Mp3SK4eJd7WWxSY7a9LVnRx8rLK8gZdNTXJRzpHjA",
  "key17": "4oY2934AEE5cmREVkCnZapFMZxqqn74QgCpH6iwPYULsRXpNE78TyQhzfUqWQVJ856qgNZXCW1nmkbjLaZ11wnTx",
  "key18": "2qPouPjpnShrVpdGdQxLZxhCDWZGia8UuRtFF3WY7YT4M4gAnHHz765oKB5Q41otS99vEXNp2ACUUdKukTr7TgpN",
  "key19": "AbQwwNivUA1yfVP9Ggr4SYYeKzn9S9n6HFYW1RhFxEmevwynL7UvPN1Sdwx1G8m7hY3r6UUmz8634pHnueLKABz",
  "key20": "553yvLfLceVRqqNZmqyAprJcNQPwLYM1hNhGgaEHHjmrZi145FaUaTz7uD91szseEPnvXbH65BsSESU9Qrub3rbq",
  "key21": "66ww7iNWsEjXZC15zcn9MooKMEMcVnjCexQJYyN5xSehVSwW19ewQ4J2HRCcaEwK8Tvs2w8vUgwenni558UATRiM",
  "key22": "2BGkTgauVF2uXEH3ceUgRrUASJwAEWsvXB8Se8UXCBJPG96C2rPdnjWrM7EyhdmVFKxGzeFRoNmiQdgUEwexQUaX",
  "key23": "2zzATbWzGDknmxyLQUZnRCms6mEdgAmC3ZeAB17bE55voaBSQnf7iaf31w6CWQs5wLR57Z8xE6c1c3LyxVtJVqxz",
  "key24": "3gE2ZC36PDkA4QEotfVe8S58U5BGJpcM2XiRakL5Sz2ibvNGv9H8wLLuaMP6bUEwadSLdFLLAwWT7qAt6Zotp2PQ",
  "key25": "4HBqWxYXcrovaADUzWhFEa5NbyZmrJyfr8ih4J2Hb5dZEYvJtdMGd7uQ5DX6JFAmeSKz6KMsdDv4enjWuZhTBDFt",
  "key26": "3U6pmppdJDACKuvn5yPQv6m1acJQxqj8c5BiGGWCyCGXkRGTDf76z3vgZjJRmBoCjmusYJrKcRU8S4TuKf1W4cAN",
  "key27": "3tTSxkL8ZHTiE7Kk7oX2P98DWFXCY1kuQmr6Pc4tLNnQ8UxVGxWagKkoVPfLUKBWdZU9FtPxmXydFb5oRBEeX5wE",
  "key28": "RQNa53Cqvbq7CkJVirBDXJasmrkeNwmCcjRvyf5zR4t7N6vCBrygYMAwzFR78jGcHbSuvVD4Jc3Ar5kC8Eg5PER",
  "key29": "3hQfmKuv8SVt8Jmcpkapv67txdB8C5GBB8AyY6C7jWuXuh6oixPfXbEJsMKMRaezYgGy6ecK7eGWrxMaCdsw7Fwe",
  "key30": "Wjxb2d7RpCY9ieF9zTWEqFtppYsaWPLuc7EBsbHXjEacV9AYR2RLRirrBwSinoBbWwsgM6gyHDwfBUfg4VZziRP",
  "key31": "3CZnp1itAxWXkkxuuGyEAj74K7SVQ8PKaSfwzLtUDgeR4XRoJVaqPCcUuwZxWV1P1ZL6Eunev15g2vvcw4fqR8nx",
  "key32": "21LPgEqKAEkyNvYsu5VLbAZwkXxXqigenjB1wHXiEBQZPBbN68R6QsuLU5fFKG9xSccXX2F71hKiisLgDzJFd5P7"
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
