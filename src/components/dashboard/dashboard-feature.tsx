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
    "3rH37mTAGTamxHpAeJMrEkNNcr2YyPBihdPzUsYfTq9XaoRhryjVtxPJKQ3n8tYNBkiHo7b7ehPMv8tjqDFwARu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64auaKTChXnr5Du9QdSdZAZYQt4YuvYixM2eamF5GcMjwuDxxFxKk8DF5JJrA29CssoPxYk9PUC6fJSCy7Aq12nN",
  "key1": "3a9yVC411CcaMEWx9z3ZrGnzHbybVCNrF94TCCLKg7wcMsK6DLu1G3BpBwAYrg8L8UkN423x79BEvQ5u3b1in1Ht",
  "key2": "KPfqEYuSUT8LjUJFwBnJVrs7v3GbAz9faXqggx51s4hUqDwoXaKUZCHCuUjf1orhbQ6tcewNnDwCxKFXWUCnS8k",
  "key3": "2YsG4PsZvesFP6iGLVrReJn4z5WmneXwBJMdHsFiQRSmiDMk5GyGL7VPDjGPRM3aZ33hkEJyu7Lj2kguzMyFTsqP",
  "key4": "2Ns5dqkdysNcHEb6u83gMn1PRur2dTSy29wpadGo1fGpYY4oRPXCVb9fdy6hWzND3n9q8DUsCyHYTH3KyxXcdGee",
  "key5": "3gBEBm7mx8Tc83xbygqVdXCwHxDMY3nWrFR95dM4aPQoKbc1GPy58AAiscBko5wcGp5eGZTrrxnJYFcf8R5DKdqw",
  "key6": "4pu1r7nk7vVQ3EC7wUKVAgmGRybQoRmWiV19AVQb5jPQkZwz4xURL5f3wsjMccHvPukSd5d2BYjCXinZn1DHcQ5i",
  "key7": "24SKMLBWafSRGymTniTahZHDGTHpAXGFMrtQr6qCs5Gyep4xXjgZA5EFAJ7x6mSmTCRt9TDPnaGnm6riyDdVnB3z",
  "key8": "4YTtbjmmB1CokYGM1rKYTgFimzKDuQHoc7y3A5vZ6TwN7YdCkfwt22AmSrLhTs7Q8zFnoKRRmHabwig5w9hdxaUb",
  "key9": "3DvtNCeyh8r6U8TMYCvf7gKee7YUSRs4wYPiRwhxWgaeQhogiWtRtfoQ3yR3k6AVZrjs94tJEwqFFtNMqStkSKKY",
  "key10": "3VSSwwM5org4RxN8bR1WtumQQdUiRZ4oyVV6i1GuHzTzjU7UX4zD1TwBzErCh6aiiTNdyeSXBMTFdbDDPyH7ULKH",
  "key11": "3gVzHRE9FqsoNqzvfGqtbzKeC1EiGeAJpWWS129Qj71EZzuoEpdvgkZFP1h4ZEpB1ifi8vCjA7XUCx3toBNXrw8P",
  "key12": "23VNX5YEmgZSm4PBw41mzvU7FwcQ3Y1bjvLGdJDpnpW3F4Tt2xM7HvYFekcSQVbq8y5bk3aLJBJGkz3nsdDSrPej",
  "key13": "3QL5XjpNUmkN5yomS2bcQsD4FF7AXuiwsYcm8Pq6RcQ9k5gzahaW38NmtCt9g2HHfNgY2vSDEA6rUsAkmKjPtSmS",
  "key14": "2zV83aZ6DPPdmTpQeD9GredWE3FawfkHewgKm3mB2wqYAAGBMTRZiihcW7PwJdLWSF5vgA4THvPaD7pq5AGFMZ9",
  "key15": "2zZePGkWTb7FLsbyvQorXQsWM2kwwP1i2eDwrX2C6ahNycAaow3RwUMikUYtocRba9TQZ5YyPfaQ9kQnYF4kparJ",
  "key16": "5nx6byi2EqUqMVJTuPhvC98yv5PLKXB6wAtvRUx9HxqJswanuGL7hP1odqypaS8mVUc5V26tocYp9bkJ9RutK8Df",
  "key17": "3iRddDpAVmhUZxbJ1a9FKzPi5knFMT9HKFwtdg7P5GwYiAam6CZHe6fiNHM53vcjcmF9Ca3daS2G8edVjKe3CLAT",
  "key18": "UACvhrbN5wzKiUQGA6bB5d35mTzjYSvBLBLHJhi5zbaaoFWcMKYo3nGH48v9VURojoytRL7us1j2wc8T6R4tUhg",
  "key19": "3NNrRZ5mvZLD7BjUhqBtix9WwVZnGvhJJEY6bhu5AFdPVPNhLaJg2E2bkx5QPuFTV9Fn7bKMRFmzxjC6LhjgXMF2",
  "key20": "4A3kFzneUFaa3J5SmBg7zKFoqjTxwmrjyHMSyfyRd3sUDCqWwibP7fUzbYGG9UqE6M22zeNUEfzjMk6m8MGKbALe",
  "key21": "SCBLBr1hzCmFwpm5rG3mEHtcaRu8nG4269okWP9uhJu2Tit4DhW3wizsSErjVXZ3m3UFH5t8E4ADbBxUZDYyV2R",
  "key22": "2P3nMZgVTLyMGXUjtkFrmdqsfyeLQjZbed3m2WevsJfTi92t9Y4z7NiLSM6MjvQwRTkMVi29ntJHVzZniR2bENeB",
  "key23": "5PVwh3AZX6AxvHpQdhEzWdPbR6zz9mLDfBcjAva3vq5JRy6mFvfTjFh4JxmGFfKazigJJ1KJiLJMNJtjMKk4sCto",
  "key24": "8XmaaV39jxLhGb2x36RmYzaQ4FKdiJuTSTKmfkYfs7CjT5e6As7cyjLi1RFodbMCKqJwQbkyV1JZfNUPRSSMueC",
  "key25": "3rasB3G7ZTfKLBsn73cyXQDptV37rE5Lzs2yfBjZGG6BWGHyum8NtESggr9tvQ6X9hncv2xCqkLCPH9CRLgBbiWj",
  "key26": "iwuLzrpfuZzj36xWaJH7GUqVMB1sw7XvHeSmVgGpgz5wYU6vz1aU8sa891cbb9ottaow8Am45fdoddsBQ9uHUZj",
  "key27": "64D1CE181QwkUsgkuGw11aBKA3FpUSXHnUCQA6bV2mFeMATwQNz116wymbN6jqTGBrbwo68Ye7zedQNYsuFdMeRU",
  "key28": "3VLdxPe4KA9iuy6bgE2tJ3qCVKZxQNtWcazQnqCANq9b3F4QVKHAeVq4NRtq2rKPyZTsZsBS69oztq63kZzhaLG9",
  "key29": "48XHHGePHCKrY7tSFa46eotJRBVfDdJz2aDGTkRDoKBmqSsVJLWMrZC5g4gwSj9SUxNHeVZJU2Mbzorn1pgwQDLB",
  "key30": "2vnDghPcPrqjgpGPPvHpYohM7vXYymBZfKWjkkAzwwU4Z84kmiN4paNmeRstKaG2u1NVzi4vbuzNLbyRug6ekJ7a",
  "key31": "e9LAE7t7VAZF1ggyjZP8yzmVqq4K9JN8vgLgbHnHZM53PwCyix1st27889QRMTMhrFg8Un14ot3J4AQAz8oRoyZ",
  "key32": "BEFcncdm4XPRBuqMtdJ3TnHNRRfemYhAvG1R5gw31o7v9CqTqtc7dxTTBis4F98YTS1y1U3G7KmEZy5phmB19DA",
  "key33": "5JXuTJrVwGcnxpxvcj4RZF49V6wf7StJzd23CVQU7535pgjqrzhzwtHooEhX17bzkpdY3hEQbKDx9mqqiA9Frrx2",
  "key34": "3KTpuZRnuPpmUWv2hMdPug1Hp43KNYUsa1dQE9vZdnxgq5pwUNMM8xFFaSF4HQoRDuUSWvwxQFh1KmmEjenwkpdP",
  "key35": "28XGFNuydUDvc3yChzkaJ4jnQuz6QyuvG2a9VqVogy18o61BuEb194zmhUzsPAgePJxkbY7thgydqp1HinfsBMDH",
  "key36": "3YzgUvfun1CVr8UgrAoR8BCC8WKSPomZXxS9XJLvowS6XAP7e123CGWaroiGRC1hMN2cKLE1RxCzu7qfyC5JTC6C",
  "key37": "42vL8HsKHYCosYopQE7inm3BULhHxPLbiySh5j4QH3BMxiBHmb5HDstX1uzKLFHBUu6fYzKYBeCYinafYBLt6MQF",
  "key38": "oZh3qR4LQboug9tGm35SPhReP86VbYvQqUvSZCJCVoTcouUfSrKfHRz1jjdWotpn1Vewaq2HccG8PPwAXsgZS8C",
  "key39": "2bURcvcRLRaPWv4hGXeRjekQRSaoDzfPSk8jgt2NqN1PVszfWu4jLN1vubu8aLVkuCNSDjWZKYqELJ5Hc6Ry3Vgn",
  "key40": "2EviGdg2Pb3TS45hTpQGP9ojwSBQmdgnMhvNv9cwBKXDaMpkhjr6aPhs5sSfyCFGj5DhDtLo1QP3FREKqbGXs5UV",
  "key41": "3RGhTtV1VyZYPVrcFz5GtTS8jLwu6bjbg4mwnFQvF4V9MCczGmnL7zV6UWvpAxLxFwWMineZRRkLRJbAeBQhp5QX",
  "key42": "3JmARbKWpiDhFkVTSu41bevJr2FY5e3Ugkg5DG27TEsXipdfodiJYCDShhYGYutgLTLATppUo8VymgB4xURJct5r",
  "key43": "3ru3zjCRGboUuQTFYL3UgUSw7C2kY1NBykqqRUmKe4F6UXBTPyToouyefX9UJcXUMdpVZKMdme2w2QAddchMbP8P"
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
