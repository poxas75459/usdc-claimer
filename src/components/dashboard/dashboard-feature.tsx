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
    "4khEzWNzV9BKUTPQiBxUqpmdxMpVBeRugXLq8gQgwUA1F8mfT17PDmRe8mQFogDcQDbDM8BCUdpNemMBfQv4PLHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MsY2qcvUabJGX1GRXWgSG3Mfps3LQLXMyt4ctj1EjFShrxbQ4wrqaLMn664G4n9CyafMQM6eD2r7kwbSShTHUrk",
  "key1": "jTr5YSRfwFvJxtf7DCbdPEJY8Xo48AuJM9ZxT6YvYgyVu7rKGRQzLEWVxNmyd9MqCeP2zDFunBKnvFAXm7kc55s",
  "key2": "3ZfWCtMjkD5wRcUxwBnVL1ngNDbA8RmLtBBQzbPnht46r3qN9eZz9UC2RHpJmNbXEswgo7FRiXgFN5RhCQj5KNed",
  "key3": "4VXcMaZQMFPDQ8Pm4kPW6Bj5xga4RDhMhoUmpZESy2U9LTEe3xj4jbk6wAmkrmZ1QSZHUFcvPbzy7qfFQGyokQPP",
  "key4": "GfUYQjSaSQ2HQvHyiLPUA6KGjQTeR5gj6D9o41ubKx8Vq5yHruU9cmYW4Tv848qdGCYgrNuxDHUpqLeTbWrAmYF",
  "key5": "226uSQXpH57MrS7P9x1UkoBS39kjsTE8rBf3WrshaBpfuxkph5xMKT9oycPBpUTAuiswKGmsyx24iba9dSK2CvLX",
  "key6": "3BLDjQH7NFMUAnxYXGFbEU5xqEo13zPbizxmC1nJNxqTTRiVubA4zDngroSshb5cKcGQPViW4FGvB5uRBtCm1hh6",
  "key7": "356HmrVRtnR9sZ2omeHwH2VYDkp7zpyTxQ55Gu78eFZKto3VDoooskaqQTvBKYNiuB6Qzh662b7pu2KA9cZQTwTm",
  "key8": "5kajU2dT7enWc9Kh4fUTrwPm4NZwSAbrnr1NMAe6e1MJ8eVTfKQyy318adQNSWQ8cXjenZjjXCHGtjTWmvp4Kdpe",
  "key9": "3tz2BDLUksK2p1YowL3fWxv74BQFijwEtHmVn5z1FrqjityyMAwUAhV7wGR1DJp7ULtse1PV8n8aBEEM7CZ6xubw",
  "key10": "5xxcfRQnYcdskLGMx7QeaYY3kcfEjauoG6VdoANKh2ASSBZv6JZtWkBWc7uhZDGp78xtRuFCthUbcSyrEZGKBLyp",
  "key11": "2GBS6kkEKcXxgKRAfJ1Au4biejEHDeDk5MSUJwtfwb6bemK5DCphNRkrTjnYCvk3cPVADU2MJvHbSGn6E4YypKxi",
  "key12": "vdyz4HKjtiL2puVFv7DSXfrQx7yJrwPEkKDtLFjyR7ZxNvfDCXusuELf6qt4a7onvCR2FJyoqiA5vf8X4iw1wkf",
  "key13": "5eXTNwNokAUns3kCWazdGJmrrFvhLnf3ca3pwQ1vibtam4KR2BwXaGox1FZscSq3Q6P3GvCR9o7mBZyuZVHTDqAu",
  "key14": "aoua8NZhB5C9B7ZJs8kJBjR4viFAua7t7WyQfz9iBA4vgYeYRczPYUJpNo46UYmqK1P2h9YXBEEuaHXFtzqiNKt",
  "key15": "59GLyRaE4tjNBPDvn91ZRGMJw9GonW8M6tiMkKtudPTrov2Jn9TDzAHYKo565u3Uan4o956MLajL1zCeaegQkTJq",
  "key16": "3Ta5udGVjVAKdZkcQQYJN8RPsi67ATjSGMJUP4AyRzvCXvGJWitxDETM51j6tjfm24KXDmToko3vyREHXcXvsatp",
  "key17": "4W5sA3FsPEnGeySd1Toqyof5Rt1uj6GReb5Ns59FtXdZJzwTVbtkUQWgmRh8sGbLxperdSJAM5UALSEjxptBVr6C",
  "key18": "3qQJ1NkJju15pgVgXNR9CAATnQDZtYPRfgsQeyACtQYZmf4h3X8xepKTKw7bhNZJwCh9iZScqCSuhGFuoTe5yquW",
  "key19": "5qdG7ZijSZBhfwSLxRHxsbMcmk7No97Utamm8dEGQob12GPxN8jRjbWFcNCF7gSoqBf4kZUfuVnvshLoTaMDz1V7",
  "key20": "3GYqkduD1o3X7n4PxKNKGr9av5andM27kvBEtvgARBKA5tVgXYNkgzWZdriWMF6dnUwd9YKCF1B6RiwKDwKVL6nk",
  "key21": "5szesoDD28FCGvMvNx44z4LBwK55jtpB9xERYkPXxkBQ9oPrAVLz8XLftCMCbeN5GiLbShU4ygK4tqGf79GvtzSW",
  "key22": "5ZiP57jERH3FKytuz9w4dKYe4yATSPcu8VSH98YS979BzaQ7UjW7ngz95eLAhiCVAGJvHTFhkjvBRYesCk5ivTj5",
  "key23": "5w8zQQGuEdNjyaMgBpJbqV6yrnWdWjDdF9KqtNuUTDKhMHiQCcYR1qGnsBzHCJjN97ovFmC7RMxW3QpSmE4XQjwa",
  "key24": "rvUZtbd5kwGvwEcNakL9AVg6AdRwm3fUvzfgeUCTddjCX3KhRRedbJLt1gJ8sPkh4i1fvsiE8DQxPW5PbP8izgJ",
  "key25": "4wV5mERSMkBStCmi35rqC7WDkHPKJ4sov2a86WcdUojhmFbjyxQoTMuK26AcfsNJtdppJAb3rpf5KyvEaHuADCoc",
  "key26": "3vXbnypQNXykDCQHruai2HN44DRZcdBCqiAkcJjeSUNyf6aqZN4G9rFbZMKnSkPBrJbMLmWJ4uBWjsVaxsaqiQtu",
  "key27": "4XeB4AG1xFKgRjBrJGuCNsMCmpVriGr2ZEvdCtweCdgXo2HeXAhPoKXSgmzznGohXoFXw96UDUiYxxjFuYvVJBif",
  "key28": "qeyDroBJjUJDh8ewTDJ3sky99ZmD9pegb2CdRc8sGJEECQD6LpnYmeukx3bVf83BWU5Eou8nKqQXebuDa8SS5tD",
  "key29": "2Ec1WhWzdDffefZ3sJYwSt23i3g8rGesDLg9hGBgHtRyamnb4mPAkMPQ3pKkpdqX1fHuX49UtrJM5pm5hAg4n8P4",
  "key30": "61UiEh7iVtDoG3FhzYzUVTzWTUVqyfJMiaKMoVVxSRK2x3gQ9gqP2eunBos6Qxqa9LGMRcHBb29rknDRFw9Dd46p",
  "key31": "32NmvF6zzYXFnALJzdSWZrKVAMgC8GQZq5XCNCMH1M7rE1e5XvxLwPZpkdDZbsCCaWuk14aLzMcztqX5W8TNgPnu",
  "key32": "41QiNbEK98tM8eh3arLQKmNZMB5sV2Jvxt1ybxHcL492RYhG45Cht7qDGTcTYzpD7ScyjhRYCnv8YoqYPZ1RtGL5",
  "key33": "5ikK3MqZb1dwwsWPQxeb8joGmaSQtzyGh4aPjUcVR3rTgazsfWVhUH1BAiHwasQ6fW8mqs3TwCC1XzzT7C6ybuFw",
  "key34": "2JB4asjVvoiV2oHfkmQFhZY8iyUe6kkSLDgbPBYcoR5ZGEZTTYCBzCFsiLDzrL4VtakhNUvhJDFJMKH42WdZFWfS",
  "key35": "pWNri49ok6KAm5m5wSmE7mXotKfCPeJ2TA1eRMa7BrQorMoBxfor9psXK98zgjQ8JyxGrUrz59MfpbkgbArPHRh",
  "key36": "3BvyXfZGm1Caj2cd78H158JSBkJJvEczThKrESj6vDPHWKfyoGnscPniiauZy24Tdgj1Czno2bw6Qz74V17BHuJ4",
  "key37": "y9EgPogZF1kyLtWLmZeMWrtVsJzsAW7NTf8r6y3CXFP1UqHpNYdggi8oeqw4avSxXgTCNZGh5xK7Zt8qvSZe2sP",
  "key38": "3AHijYiRcaCppzhA1qqR1N4iCp3AhLsyp51S3gNmeXpdjDMUE7no6dKSKzJd7YXYED932LMDY9WxJSvGqgZufmtj"
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
