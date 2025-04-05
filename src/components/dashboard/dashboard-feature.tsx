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
    "4omiXF5yCRYSm5UwiV1HJtMeomTvVacbyfTFFp63eLbFUQY3F3eEFCu3vFbYDrSSvRPp6bF5U23BqhtuXr9xNfeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgcAiP6YqDsMarpkQrNp2MoU4NQsn4foASLUebV8LzzfKz5UeXigtnWaFM2tdscAFgvwFLBRjHUMbT6GH21CTb3",
  "key1": "3mmdnsTSMQq5fN6VwzmRHpAUWEsNWp1WdRyc5RoSBQTywpj7AiFxFuvrdHhXBLz5vNyvp3r85TaKw5zdWrEoBYMj",
  "key2": "3z1GPkSoFYc2PmQsUk4xnDBKd3cLhp8Z5Wgz2ggrjYcUX4ttWkPaNjm11LaBdVR9RprZ9H9fYjsw828MXcHd6HQC",
  "key3": "3FLUTXNYsLxtkUELD4hzw27r5JyDf6Gqz4Y4ouh6dgY94pYPbWpNmfSDjH2eq7cCtqJo8PXsFya51dRVDhacCDcW",
  "key4": "4PYiNPMUR3Qb8sashKEfHrd1yEFn4fDWRpVmC3zNmhT6o551awZGKtfpTis6q5tZ3o1p48m2PCkA7PhhcdWwFTQy",
  "key5": "2UtW8J9e4VjK9dbzTR6uxmd8Yvmbyw8viDqchEScQae8FhHA5gqdfGoPevTTw13gmDppEspisKFiSSu4Ro1bQHY",
  "key6": "3GxueQ3Wb4XYgpmM18V8ZV15sCGzr8hSNjFLJt4igwUL538VGyX3vBVpGJU7RRfUwsf7aDpTD1fiaBJkCALDCbm6",
  "key7": "5ZPNnMvMGhz4jqL26BQHwd6R1zKwDK1foiGMEYSCBRmaZGfB4eRrAsp3XohvdFRQcPk1m3evZF3pAUqWFChG5zrj",
  "key8": "52zPJBzDR8tx25ECSxMQ1z3XG1NCb7Uw9nSef378ykaTLmpFxUJuR8PYGpdmAfdwHf3qXCqZ6S3fB74WBB7FyAvc",
  "key9": "3z7nNfiNoY5FYrTiqAiazGyUhE6Qpgy1Wfbfe545om9H6uocCfLNYsPZEfRS7CL7xBn7uhZQZg1JLjfTA75awQEt",
  "key10": "4jz3eYeifS9qUwdngS77HkGseWBrqZABG8a9MxtBvxmE4T9zfZexazCRhaCZPQ1AexVuUUHZ4zBL4Z5Cf5Qj7XRu",
  "key11": "j8WnneaYH4ZhuRYhwhw5QqGN8ovXyYsJmLfaYF6VK19VRv3UtFwvvPajWLShEeYGkancDQizH8pAjHprB6kL7vk",
  "key12": "66qRz8Nm4GcNYXz6sxa6aZj4ig7e3zVi4fA1KYDsxJKwWLTs8HAA3X9wECDTQpM6MbeND4bMEH1AfNZt3VD2rxGs",
  "key13": "4QNKDrww7UXTPVxdbRhjZChKbPwdRnCMrVGQUsxbJow2y3hWpa6xXbfecq9EMPPkWwNtKBbyVrw3YEqcRiZfRdur",
  "key14": "4w79DhSoXeZ2iCU8ANP39ArfK2UUZCFsg3FQV3q9YpbZyGfHH8xEYKyNXmDnrZknUgH1BK9mewCD8UaPZ4pZ1Wzf",
  "key15": "udmWNeyMRaZV96zGXzaeC81xmpEUdkSEubub66oJeHQwtDB6KnNNVuYri61cDooSjqcNsB9cH89kYVhNPJzeAVy",
  "key16": "56jWhjG6DaFeV2TeJtpPNSMAzkMfe35MjBVNQ5NeRoTZrEWEqhjwwqEKac9aSy9fUbquiLc1mJKuRX7GA2Mg24zw",
  "key17": "5gaGLKNJ4R1ctebXdKjpcP8Za6xEW9VeVgUTpgEoFshudxvyBNLUNNpQMxtU4JfA6Z1C2pku1adZwc1WQZMcdkF1",
  "key18": "4SZA1Kg4Ltxsx2C9JANwmyEpE4ze2U1EAtMmX8CcsyfaXCeB8r9VqPZi7DuSZWHJ9GhXvrq2XYNBsneE9weGZ1wM",
  "key19": "22AvFccEfDfZ18gzh9W8C7HSohAzbfMsMBCoCcR2ET7zo67ZhKbt5sLNSuV3vqyWwvjTGckG3aVZAJx8Vs22UXSc",
  "key20": "65fFnSBmGCghLXEkK1TSQr22SzTR27CnPnRDYKakrtBTLXy9UrSS25uWwY5jBcAzZXdtsMj7vb6n8K9xZuLkP1C3",
  "key21": "4ZfTDmFsiiDg1SP1CPULM1LcRSSmpvUDGWuCiVVNWfcjpD7DjuHiR8rPFtkiFLiYLSVofZ1jUntx4YJaPp3zzEVR",
  "key22": "2GdAj6PaQ3MUEHsmNXAvZJ4fiEnPkaKykoWQxZSxzhby1nUDStcDCBAzLMwYVao785Amr5QoUrVPSdfNeQzcQup9",
  "key23": "5Qb7NDYf4ZwRfXwCRHJewqvnGswL2W7UZirbPcvKnPLxwaJrgnqTM8kJiM62ZVv4yYe5APwoPTjUaQuuYZ7KpyA",
  "key24": "9qxw5dDHJ1yEfBcQ9ENaBcUQrmhg1DTxWHkYaTMXx2LdQRi4ZGMXTxzBrbAcpNZgYyZbJyt2JBVdKtj8MU4Bf5f",
  "key25": "5x6EFNFT45itzc9saJFuzbxp8jtvoJ156BUdb958y19e7Pwgfesek7ytHK8QRgchQwJy3dWPkcJA6xKdwFZTqP95",
  "key26": "3AVQqKJabpWHbkPNUoq1jxUycehJmkuaZXNBygUcWYGi7m6GuehHgdh16c1cJY6gVxHi5GWanUSRQQo9zjfdEhNT",
  "key27": "5WkCPqHVh5XSBAJZiYLkWQvaMaYnSZSvfVcsYCvd8L7VrrG8cUNf9NMXQrhjqEKZWzJEVKKYWTkELF4QzKW34rS",
  "key28": "2uhBHVnXcVJUr6k1Uiu5w4vMYnARHY7tvcdKVio6sAgXvT4mCtNiW7EeSizMHUrSP3UnCU76yefKovDTkxFXz2eN",
  "key29": "3wKpRrWBzJ6m7FpZBT7BWdMVPmCbBk5ZSyum1x8yryTbLHrLfVJdVBzDe5cni9agoT58zMVXb6nbPLSsq4bFnwDi",
  "key30": "sMdBuCk6TGiLJmCGT4UWhSZDN6Ne7hKSuBTSQ7UijjvN5N1NAaoKAQzuHi5JuBxYthK8SvAGgGUz4Go6wuKNQ2z",
  "key31": "5ssimgXhAqdRQW1SX4m2fubWdM6HYe8GirAgVYgi6JEHhkugnMgEc5eNauxeaNW9ykisZu628QKaE8Whji4CG7uj",
  "key32": "2pFyjtNJuBwdJbk11DANdc4a6384vm2ugJbufFG1CmCBuWhjjw8xHJhrCgN3dxRY4uEWZq94AwQGXtPpssgtguPo",
  "key33": "54rzuNhXk2j3T1VvU1UqwHYZjoHcKr3kmxHwnzC4V9xXHwsY3WyNrNguyRPL7qryAE8634wM9vue9qf39yqPnbn",
  "key34": "3ibiKEBMn8eyg8c3HHvUiTb2B7UftXP8xjbpwSAHn3xCJxXLYx9gFw48LuaTyavU1gobrqy2onbzDe6rydZeaVfb"
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
