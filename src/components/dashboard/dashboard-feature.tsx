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
    "2hZsfUdh27Meo3ERxzEwpxVWDR693xwL8h9HpJhcipuyUy9zRYwtdGfEHHx5dhsP7skon2fLBkkyur1RNujrh9Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6SDmHWF39hkRY92SjEq4cCFasyzd88ywk7we24mLiPnyYZ3ybWG3VB1nPq2rcemC9vK9sYCqPgZDJUATB5c798",
  "key1": "3XFq6v26fAGzcg2uFCN1fFXaArxi7GUNbZLHG7hKG1Dx2VMzXVWTxXJm2zifqtieiyFExx9Jaoj1SrvSPu43Vg9t",
  "key2": "21bb6WeC9V9NwRxRK2yaqVZwvqHBEuve3GhVTv375powKqrrRBRXXhMUQhmp2bcp1ibby8TwL4hSKhkxJnE2gRY1",
  "key3": "2k3Zow198JHwr71Sbj4YbBCfWhHWHnToeMEkUJ6ZDE2fa5wcurjkVmP2aL8QhCbbLKMZFmwztjKBX8Sta7eS5FY2",
  "key4": "r6JAt26xRbgu9tf1XmxTbDJu3gs3mdwpEpGondwSL4KLTaGNi7RcEhbDaURBMdsEDWnStzFutjeGW5WCHjPUH17",
  "key5": "YcKzBUsveAJa87mvQd4AZ5QBHui1x2XDat2ii8z14MdPVhZKTgfayDGWJTaGZokabuqu7rax24uUNXhAsM1hTHL",
  "key6": "64TX1sprQ5vu3G6NkTtvDaTCsJHT7VT82zsyUdcnWvXevv9C8p6cxxbqLzmKqHYkgNsBbzXysRyhFsfJoAUZGc8W",
  "key7": "59ygWW9bSbChWt9xGjQBVKoYmk54PtscFjybaAesz7JEbnY6gk5fGTL9GcMdYWCpbvhW1v1KUkBKJ4xANvkx9GpB",
  "key8": "qLrQ5kGmjvceF21eCQjtkKLGwEWpqD55sKxSBp8JeTYdbPszu8gCoin39LiS3pnuar7V2zdbVnfY31Y3JVEs6pe",
  "key9": "3HoXkNDqXvJvSMQvhXQhVPk6hHMdjJh2E6zSdVxRsXfRbZ5Vqu3BC9czryhF44KiyH2frTxx5rrpCx3aNgeV8UA1",
  "key10": "3ZHWbA88uirRt8NxMYHDd6mqLcsonBmQKDkzLjdJJPcrrJb2MSdX8yx4Z2YqkGEGqVaoTDznb8hhy4wSrU3Nm8Gh",
  "key11": "3mUPZwJq6yisBrVRtDGUALjR2Xh8QgpUyFJupmv4UWVif8ZFXk7i47cGWbN8zhX5QEFkBYaG2hGe795iaXhhN18j",
  "key12": "uZvigbMK5cXwtX6vJMDkTxT7pkBoH284dn943YhmfC8snMnDU2CGDPeSazQjFXw1ecW6zudAY1P1se6tGcW2Wtc",
  "key13": "4BKRLe3PQJ8XtpiuERAot3xA5Y5JQw5vDiMijFGc8gPtNwXLK3hQQDrmP4aufm2486wcgyNwSDDnBvvGuY3mC89o",
  "key14": "4Y9giwxGEeGU5WddYGGpwR3GUkZ4sQfL7WFpZin2QACtXGLQutsbwYEpn11wsp8UDKmbWNBBLmufPgVTYwHEQSs3",
  "key15": "3BCZVejiiy4NLwqUfE6PNjN1fFug6aH967uK7zE97u1LNYm97174gpmcQExmjfxr8A3uiGE69gpk5DNBT71aH2zD",
  "key16": "578YLWuqMZyZeLyZT6wWahbo4MYeJDFLH1SeFZpqLVJYiQygZvw7Ku5pFUgaKtmSb4HGBaaJSPVBcufjadHn6WxR",
  "key17": "5ruxFkfi3MF1D56QZqXxHSeY9k7b7gnv2wXpHBqWJvAe5KrfvhcRv2Mw68SsyuS8SwwiXWBi6nDSP7yeXSsdfuw",
  "key18": "4yUJGbmSF4yRaMNF5qvQbskgr33bshaACFg78NdzmuBpmkHBCwu29V1mHUYCb1QHBWknfFCaHEwGaL5XsHe6zWSG",
  "key19": "2QVcnkPa7A4zF3SAfNCRj9c5uy2gbvoc8CxupMPLVxmeGbBNGydbAJ9TXh6UczV6H6SuPFi6dwzmKhuuju6Xw8c6",
  "key20": "24TPokhSjSYZPMk4NaAUQTpYYW68H1NDTGaeKLHjsFS3CjUiFCsWQCKBafv13Adk7ijUfTMJp8X5vWgggsDBYCS1",
  "key21": "2EgisV2zdVwR8uuGSnQT6jzbmZ4EZWd1YR6mSdX8APe8NXBvx46MAMPXo6ZJA69tbJJK3MGXLhdrJjYu13fU7zvr",
  "key22": "3Mhst65mQDnktpPaAtvRKGFwGTTDuiBYDXRf656MhWR1jNfRqdB99UjbyBJGV8Q7FxNBCHGihLz6ZTdvQtFinmMn",
  "key23": "yT9keaeNSwu14vqyeZYRfBeAcg7fH1qTZDgvKxpoy9r7Nry6ZhEBKmWN7XtUWgYJLKKyGo8F3T3nJsn1wUt67yQ",
  "key24": "5dW7ET3qXHF2rBa5utXGjiYNMrFbXk8J22etBG3iGRByA6i25vmeajCDWdNuboD6EUnKzGvXeKVfQGm8PNAiHvfX",
  "key25": "2GZuYesBSkzyfyGnVeT4TxF28yuFnzvY7N8WUJAVkisfzm9xEr6stuvFchtcsrT2vVcXja8MvSgX1Z5asL6uK1qG",
  "key26": "4LBQDggutNLSyyqsmCxyuZ5CoBYnsr6FTrrq1WnchWbnF5TngXXfpHtYEiCQQmt48bGMEeimEwNtFmXfguNx158S",
  "key27": "4pYU1qYTwNjs942xpFgJH7tSXazsiYhUoYVk8YsqbTHS3xFXUrNN9VQX8DPuWSyaSB61JQf18u1Yx6SDh7cUJSWS",
  "key28": "5f5rsrhM5pxT6VE413pjGWKzDSzBjJJw5S7cyG3cE7bK4cqxgRuuqBmBxDjpAqqVkvGo3eKUtjcvJrtrJarw8fGU",
  "key29": "3KhGK51LfNcmQr82gJ4HQfUY6jRcuYQR3uPJtomZ26cSFHbEvzAcw1jjeC153f3KJfShd63B78E6LTTQfpCewznb",
  "key30": "41AdZWDc322e47p5okQSrWJeQcHNZmNuCC5HkmqjniXHMjzRFrgPj7Zw3BszHDfW1sFNRw71GcDD3mBf7X3WzsEk",
  "key31": "4fgvfFRCYRWL8Trc4nENzAZxLXN6Vq4rnq7o7ieRfSxs82S3j5s7GyuHavz2U4h1FE5tVkhScCCBQwf8TGQJbm3v",
  "key32": "vtWRpwfWW7YMomxauiLbid55awatkSc5f3VVNEQSKjc4Ydf8QAjmD9baZ27t6vXfsFieqteDRrxHqYqQsyNMpA3",
  "key33": "5ZhW9wYQ34a4t3urVtDx2Bze6AqXSsypG3bgqaWmZzzGnURMQM7NECHDikQpUkXi7vSD9vrbKH3YzL3z19drfigX",
  "key34": "37EKAp14NjaAG5rBuWsDPnwR8iGycSaX6SccuPv8ipr98TDj4JZM5r1pXHt9UGzNSKrS6fmEdzpDSZC3XRbn4sLz",
  "key35": "zD3kS24m41GnsLAj6pyAp6jT1bDWVNWH8ejv7zjtmo7TJYVyBxXza16oAZTgdh1KoL3tCfUKnpaf2HEUgrU1rJx"
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
