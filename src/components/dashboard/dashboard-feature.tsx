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
    "3SHi7ZaHfXsHxqUk3bdMvmssXQqqJLJuUfw4BookCDwukq4UBhNiCk8j11n5z5yGtbUoN12Wug7rQKuhsLWwPQr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZ5tPCyuHGS9XNENmMEYBURJbJMqYWqSVSUvA9okPVUhoNbiNLFNdRUyywGAbsUapqDvmDeGLnj3Wkp53iNehfx",
  "key1": "4QJXPdcJvUeNBWGMzTFFTLbfde4467vhM66dbCNe4XEu4B8Zea84qjpKKsoK8uKRXqq2xaFrNQPCsGwbHcPnU7mt",
  "key2": "4cjQG1fMQWd8PUbciA91fW9RSNgxRV41Evvyv37ECb3FkHa5b2xhrqtbcrAw7V3UhiuUqrrigR8D6Y87jwShgEBZ",
  "key3": "4PWeyqFQL5iqnxdq2ftrKCkQL2RnxBYSoUy2FDYiWkvbu2kjef9R96uD3qZyx6VvdGWcgbZv2nraua3nUfpCaTfW",
  "key4": "3tJGJ5Ay1i6XDQuzznBEYj4sFCdNRQdSH2Qf5YTVChq5TiVav1sZaw1jtimQZ33BdkXNU24yxAWqHuC4FzM4G1rX",
  "key5": "5Mbb7FqEpVSLhWtsUh77jGp8Sg6AYTwRYhh1vSX82p6g87JXRGPR5s9ug24WvjGf2jEUWmq91UpBD7mpvrJNS8vd",
  "key6": "23mUEF53mdzRojzvsKe8wwuSEPFr5Xu1BT5KuCEAEBUKP4ZUz1uvcgyXapx3zMwLr8jQUyPyAXuP2HbyCdmFPwoE",
  "key7": "3nKA3LuRydxKGMZEWeu3uNxNy5jNCeUs2HPHxnCFH9E2XYzBopx9KAz7CVhBLcPfEYXQyjDWiFvExUhLg3AFdLcp",
  "key8": "4fr35jq8sVCrkMxW8uyspa42b8uoM4jj5JMxFrqan3vwznsZfLCPkWszEeCLwDGdYgWuE8NeUyLy3kLizwyKCDZH",
  "key9": "3k4dNKBXTPb9qvqLinhk39kgVqXJUhTdCz7T85u8tvNCPEt9HdakTXjooesPbhYs78YLLwAzr9dxgxSRbS1EPxEc",
  "key10": "3XVnQC5PU8XFr1VLHYfhmZk6HFjRJNn56EFPw1FWaBodJ7x7QiNifRYZtirGZkESMaBY3fEUeiNBUKZYfPsZa2ri",
  "key11": "62y3Qh8ENwpCoJLGaidYGqMufo3fe2ox6W3ZrqbdxjaS19ogF1epHuJHvPsZTVCoGri5C1swtuQDvTL29eWy5rzN",
  "key12": "a9h8G6nEMt4WaCS8XbpvYUyVbAiTtrJSi4eLH7TZbZ4eo4b5gcP11DSXAshKWgvuqGEgxoS9z2DK13TXeZGFniH",
  "key13": "46Hbgc8hhnvzmt1ggN3EfnUQJC5CfVVgVN5T3TNAC4dFBFu7PB8b2q1aU9fKVESg8Pizy7poGo7XuzxXjji5PLVh",
  "key14": "4nbQia6yvFnJULrSfAhBVTnN4YxMk1D397Gpp9EzAbmAzLPHBXkQAuG3YYUo83Yiweqzoa4xaahpNdebHExEre4v",
  "key15": "2BBC9pWzoRn69yrejAN9DQcz3i45wwUYK8LfwutCDt4jGvxfRkwap45qrjip8dXyC1zXWzMmYbX3XsoCtQUxFkPZ",
  "key16": "47U5yiKKuwfGvamnj51dmEhqiHudYcUhgkJu5B7vDXjQxkgb4gDA5P47mk2xRCczcyFMx4vQojyS2XwsHFYpHaAE",
  "key17": "22wr6ZPmNBrZYna8MTY1YutpEAuaWpzsMX9cGFCro1Utq5WoaXjT1UoMe558Ct7i6fdavmF67sBwmy6BvreAVuDN",
  "key18": "3kTj5uiXiDZuxecRWj8uct4gR62ZFmyQny81GKaFGQkTLsvtN8AkjNMNzmJtYqswBB9MfkpK7RRWZKR4ffHWLZ61",
  "key19": "299AuafP9aF5f4HrRLbJyGsNbhXQmhDjjRMQ17pnGVpMUSS5XCNEyh28BuCjsrrzf1JmNw81Ebcwcipkzcs2hV2G",
  "key20": "2WkpngpbMAHgYGqaA4xZHN9rWxAzwmVN8BVvDZUYJTzU6dpy9NsmBT83QwVtcu9fedrjveCYC4XcGpExyzHxsoD9",
  "key21": "3fee9qFvK712ecMgCvAEp7YYmaWybUfWEjWhVPEqzm1TRanKmLJ1n4Ymd5MMxEjaVAxpet88mrbgvgFG5x3doGwR",
  "key22": "4xUh88iH5u5QCrCqPznAhW71Ru9xMGoyxdBMbBM5KEtLjqKiqpDeZHeo6ZttY3KftkW3QpBjSyy7qSfgpWFuaoWD",
  "key23": "58H132uJ9APRoH9q7j6f7yuvj9BtUKYiwDxsm4wtN5MFjJmvMPCvsau2qJUy2qiCsBXnZ63RHzNxc1GJM5kAnfj4",
  "key24": "5yDK1fbbn4UDt5HVdEdveQyXvpVyi2b2pCRX1Dje2ai9m8sc5xL7xjRgEFThUttRStttnV6rkTRniXxAtejnrBJe",
  "key25": "2hyn7bL2D61Z5tVp5ZPHGZFmEXdK6xYw3uLRacSZGH4YnexWhzhx5VuSqJDj36kyw8BaFis16jn4iaq8i5ykZ1ie",
  "key26": "3cHDaTFuKGgygFK34kAXz9j8zEkk7tt5Xdwt9DdMk23TmXCS9BQzyJyCFxmLJzcjaJRRXxh4Qrhq3oGnCnD2E7i8",
  "key27": "5t5S5SBMNESNK7qBsErtv2y1GMg7zk8C9bLFSBKCsdmazXA1tuTdNTQKfhN26U7r5b1drP8ejBFVXkAfxNU9nNWc",
  "key28": "2iaAGxmBVgefHxjbVupdAirnTChML9agbANMLsXFo9WEK1awUFfdjNr7e3bgfcboKVd3uXjmRjbBRSJuGH76nweh",
  "key29": "2gFPmVbuyMvsz6ts9XQNeraj2tSvohRvSbsQgw4ggaUPL9m6yhrLduxwa43XhBhwQqcMPRh437MTZaYfN9KLEfpA",
  "key30": "5HeUMZ3CQUiCV8uUmsD96R1ACVohBGbTqpDhZwyQUVioMeZTHMSnqy4V3C9GJWXWhiozdNxgME4oT9BBsp5noVDm",
  "key31": "5zZKFNDCVfeqwKD1FZoWMCTBfoJ1TZDe1DKMV7jY17NmmnKrjP69SJZm7NwtQtGrLCasCJLsYcCq8LS9KYHtu3Df",
  "key32": "3kexvqQdvFbhbxMTMFaN8NPpxJH5BzubX2Wsx1pFTCmQmLKjTRgSZprz1GrCwH7K9pnnP7pfDREfECUfhafygFVA",
  "key33": "4z2dmKAwHjXsmrTSrK4wScBoaP6CaFTGAfMNmP77WHmPKLTAJg2eqTj7RFhYcvE1zvb3eTvPVDdw8diS5KnHvGBr",
  "key34": "2wz8V88RhqkkpDch4zCCWyiGcrbY6rXLLwcGtnWqNqz6RuwDnXzEp1ff65jGtacm2NevsdazGQiuBVhxxTjG7NHe"
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
