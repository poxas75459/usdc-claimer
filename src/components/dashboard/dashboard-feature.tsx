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
    "2oJ75AvceMKszNonjKqjXNzRAnamu1szedXXCDys1YYraa9jSZvETTBXFWFmQrdGyFtVgkwKo4nCidkUt3vRbrwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63M17Gs9bwCfJ3VFx36DsMinVLPPhBbppRDNwfzXNgZXm2u4bpgmWq4pAazuc7wRTkDABNfgsSchM18GHzPp972E",
  "key1": "3jnxdTr5BuW3qYFJzejWLcoXyjEJtpS8vaNe5NRgfe9MDwVY2hcXaK33WjoSqcp5nwxwYinw9mbuakx5TqUnvV4W",
  "key2": "4Bb9nScBzBMChv3nEazchbQ6vh6eXo2c1A1tnuatRx7QX1j86XMAghXbrF9oSHu6Feq6kUQunds8n5JP9wg7AHpn",
  "key3": "4uowp52Ymh6wSCGhLoVpTJmex7KJ6eiUK879f4Mvc9aS13eTEoV4EyW7Y9r6mgzaq9YL6Et8oGN2Cf6Vj9wtrYKJ",
  "key4": "em39vBBvD4ZmSJAbEfFbMeNLoQcBok3Cks5aDtGqt7MEapdGaCbjJQswfyEgEz4KMUmWU5rwWr8ZFzRrEs8ktVk",
  "key5": "2EiygWsYUtzboS2my7sE2hspBzjmCbAiNQZ6FzyzuV85Q1S2CHKRT4zKCQE8kLq7Y8EJwfC7SpZcB5TypKrfD6Ac",
  "key6": "5vV1ySFaYNomT6jvYQ3VerCm2WqRuUefopZXg4Dkr8sqrmn3zhiQ6ExKqk82Z9EKynTobXT8LVSJyNaC5gGzWv64",
  "key7": "65xXUN1DikRQrpzqFZ7LC6HCVTAgLMCww6Gj7h1rJ5NRt5gQYNeJnFtkbhCFiFaV3uWFWGkUMH7yJR9UxoeJjd2B",
  "key8": "27zHvKdKoBgGwT1UEBroX8K8ox7ciec6Mm2nRRsge7tdjz9Yob1dtgxaoNdGykrLpos35AEE22R9rjo1YT4g2h6C",
  "key9": "2XDrCKrQyq2aLv3ZEHsEwYuYLxob6BdnveQ8HvA2vUzmewyFJLXtoKq8Nbof26PRxotFr59DUhzKj591ayWieULm",
  "key10": "5e2AL8qD7upjmGX2rx1FTd5B78pgCju5QKMGBRsARB5rgTb7ANEYs4M8e2JHZetRt4Kv4Qczq3bNqgiSzvfifPRs",
  "key11": "pT6WRVS32mUJbFHRA6a9r81bo4o3LNKHruUzm7Po4hz8LvPnW3224cyB7wm74ftc8WcVw8jbzpJUJSQ2VpfKyGJ",
  "key12": "qWVK7vWW83Zjmd8T9pPXtBbVUB6tPy9cNheM4anUrQeHPPHPZcv89esrmsRfwcVDJhXsVWzhvkugBUQmL59ngGM",
  "key13": "5fpz6mhm2mCwnDqySpSiZPbkF2ar51nu9UpFHd17FRVyreXWkdEZGLUvPdaD3ey4zrp9p5R1FkQJEXv7cZknWsd",
  "key14": "4qJ1WWnkRUBPUyxibJShPX9JTW5zi892yKdM63V8R2eH4vKUz2w7DHHeewhkJqFz7oS918xYmM2irGfWhZTqN1vL",
  "key15": "51AERpj82qyZHNpppQbEJZpEnSCD3BxMKiWBHPYcizEy98yGDhBefRokm63PgU1rUWm1rgbzmNAYYba6qSq8oNaf",
  "key16": "66hqnDrcbXbJeW1237rNLex8zg98ZqgSEbwr4FYnf8wbTSnW3WRcYHaouheTE9UnQT2hPU9MDLTcuSyt8agMkJ7Q",
  "key17": "Rtu8mN8WLrjidwcG6mxzp7f46t6VNHjUVt1zvGXhwcofLwWazY4rHzWYDXFWvWsuUwE52F2YD5dVKSESXCvfnHP",
  "key18": "4DVNPDiZJx5z4x9fSyuA2KYDWwH1sFK4JD9GwoD3wmPjc9QfLqDcQoVurVZ792n8QJKTU9AMXuTPBNbyJvRh8YiT",
  "key19": "5Jvsyk1dXtfEoKFkd46Myirxi1rWZqsGrW6gpG4vB6d7bL8jApzDUZKrNMVJdPh4TFwZu5H8G6WsR8vsbVHEwzat",
  "key20": "4ZRPBxV9rJ7qRejcR5Ne1sX2T6gjsJrjALVdiWFxJG5MV94uEkJ9Vix2HYT8Sq6DesNM8pkwyGzFneBzUEFNXaf4",
  "key21": "BfsN6L3RKat3QfV6ZEo9cq76GVckZUMc4HvL2S8JkVVLzerPXLWwTKD7GiqsTa1S1UWnkjXknXg6BjAmnoBni6K",
  "key22": "4ypuqhSE9QbCU7VHToJSgmgTwWmY17AnPZwqEXmtJFqueAk79wqK1Vsc1LgVDpNFnAuJxU8wHg6JQ8hGMnV8HRRz",
  "key23": "2L5g2n8ePhyXWBg86ZzuRdKk7CXE4joGfUDmXdF1nj8oPLQCQ1WMrLBnXhuK8Da8oJBAU9C2mVUMFHVMJWpHpBnL",
  "key24": "5KnQ445UEFD1WuFB5KKKgCsKJtGyDLv61PMESxonkikaWZwg13J7a7tDKKjvMQLXRhqvFctVzeebaSYQ9ZAE25f3",
  "key25": "4MQ41EwBsvbyoy21pQhc2khtysDE6k9r9Fhs8SMzH3v9ijxsCruq24YP6edM7oJHaoNzMkaW5rmyD8c4cEgvWqUg",
  "key26": "2Ah36X8JkvaxNYpFeQ73GfL2AE3xaaDmBfRRDqaQZfysHgYnWYrQB5aSvy8GA2mhimKkg1Hi6eKLMq8catew7QWd",
  "key27": "5C6oj7kJqT8eW7hJVzG9SsKJcPvPLidCLdD31oboyYoaMEDN3CMxkRTxzmsBVE4qMowggQVqczJsGEAap3Rnrsbo",
  "key28": "4gG4tT2NL7NrpXyY8sSasgHwKktaYgmds7T2Pyno2GkEkcM3Snb5rcDEKgb8xfUajmGZFVAgoJgarW29wcUbgba4",
  "key29": "4DRK2inU6Eh5EhT6mTdrm5ygmXR2GE5LX1yyE5BhiE8cZxT66xfATCJcxGSxdNyerHGshVtY35fnePmZM2GGfnHq",
  "key30": "bvTrbaxN5BDTWVT7kQYMEuUkJeoNmciL3J6QUcAkRiyswCbfgoiADaczWRpLiD9PQ1ptQpaTxqk7tERhBT6F29z",
  "key31": "3156fJDEJCjM38nLtWACsDXq3BGwJk1YyJ3XjWh7hNKBFwsjxUzigicwckx2KDit621ppzWbZhJ4rAb4SUmbuNDw",
  "key32": "3ed6JMutAPCGBaUaywBDuwixPeasyM9L3jir9jdL2a6YhpuzC4D1LxUuta8MLaXFBQNoy1QMBxAWGKJzWymKETRm",
  "key33": "3YQENgAGetoC9SPcFDR5NVMUpD5RSVjGqTZjjGLwqTDGn8p74fuYfuHayzVTZKkAQqHkXErF9QH3ZjTfrw2wcjrS",
  "key34": "3rsty9dZFV4EuLATFGRAo7s49mB6L4xkBX6HzoPUegvKcFpiMaRuUPbopYuJaHw2S1mpd89yfpR6NPDi46BdjafP",
  "key35": "5uiZxYsBE1May7tyzhCwyFpcWMDJuy3Lq6C6MjXU3eVdUF81fuP46mj2VezDPCgfKY3wZZRCLCb5p1Eb2kEXnggJ",
  "key36": "4pPzCZN2Yf4uUwnB66QiseHGb2cSE9YYdhSkbEr8nwXdLRfjuCaexbgKvQAmGnvvAdds2jT4HmEuZAfwYDXqePEP",
  "key37": "5gcZrTDTaTWbHuLRFW7hv1z9bZEY8tEUTTotT4QrPFLiYu5KotSJMkST6go96Yh8eaccTfmWvvaeMiWWGafFV86b",
  "key38": "N4xodiwjUWoYBpMb85KGcJAYmFnoNooe9QYZaBwdw1KtJ6h6rftxJkAgxroyghKSxUAc1w2VqVMAmsXVvryNwMC",
  "key39": "5pkRpXEu5go6VMdjT2giQEkMnZGAYeq1PJ79uZx8RD8ZYkUG4gGxXiYotBhDqmKXFzxXT4Ym75dkbRMSE1ba9Ag3"
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
