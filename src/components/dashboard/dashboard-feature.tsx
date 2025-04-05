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
    "3cjzbeMo2YrarPP2Rkmh14Lz6p3uACc51DEQa9o6XdKEN6L6WfUTaAYEz7azRD8btvCtPRfFY49CWddkYQ1A91eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAVbzaHdJ4VuudAqFBxiVTMAtLT5K5yh6a4Za8EkZXX9zXXw1hViiWvQVkvmPYtu1JqF4seZWa3hjJSRk1c2Ui4",
  "key1": "uWQQVP9g8A4MrqmUpA5sZLEUJeSXYFi5DpJpy5JWuXGMqUAyq5u2hKU8xUZkLn6y1sJLQ6zbxcmqjpfLVsFzsW3",
  "key2": "37HXwSuxvMhSY5PQnTt99sXdd2bVPHbL6QvFjgRbHkS3ywByYfkWhZxw8EboY8RXy2jHAcUcyzcoQ9B1ZiGc6gAx",
  "key3": "49jJtoTHVbSgyxGPg962V13pxE6AXsdZadPNT7hnUGu9E59p7PWyPasqB24gAi5ydbQ25UWSE2ykY4ZQMsWK2fZx",
  "key4": "rxNCY4fHyr9ZPc5Rpr83hRJ9iTUzLrztV8PuFkFmYv8pR88cyEST5Hutb5VrBwyUobxsCRe64aAQzAsSGzqPRXB",
  "key5": "Gquiyg8z6pfaFb47QHt4CxK7iScsnbrQ7uonSKqaLCHtYW1FJ7MxQ1cxUDYz3EfnbEiyujMFrBfPzvkfXphjzdq",
  "key6": "WkVKKMY69iNH3epWRinsZzfCSXus8ZsUW2cBz3Be2QWhU41ZiVy3A8scy1ogUpfpPRtohqhxXUhvHRadi3ZGLxP",
  "key7": "3P7qCtcWCDGtJ6HpUhhjvjdP1ViaZKxsGyjrmt2JBcmXtw9fmTe2XmWcACWhUK6r3x9CRJdxroQDYipj7bsun1tR",
  "key8": "3SVN2fGCbCMksvysqfeP8p3afU1wHWGZUXccQujiCNgqqpZtrdSbJi3kj7fpevxyHV9uJyfeVXp195b9JA2DU3SS",
  "key9": "4LP3ffrTMHiNTbPC3NpecWWAS9YDUXPN3ALP6rRjQ89UQo7QanRpsrbgMkgze4LizJgywUdiMbiZCMoffPsT8CPW",
  "key10": "GqzWVLsniAZAjyoVVR28fhduuagvzLbAfQYi7X8VaVJHjHzZgVszyK1UyKEZeKXwBHxWK2k5g57AvKmfDZHP29a",
  "key11": "5oHygyLqogVaRgGYCQVDd93wmK7i9YiYc44RsnQ7W7wLzE6BZz5qH8kfxCPowRNWd7NfZ9V2h7HhDocbcGuKEnYG",
  "key12": "3892ACiHjd79jwqJsrC2ieWQ2Y1UTVih4ZJ4drke8CamRY2CS2KAmtTCWAGEb1vSnwRA1UvV7NqkECARnv1CUYuK",
  "key13": "JZjimx3m6RAQ9acPGeRhcNQog1z6VvQvVf19ET13tjFmiZmiNVkFf3h8Pu1YBxo6r6shEamiqQCyh6WYmKcWSqB",
  "key14": "FQx8M1XfJuaVJZkxp1rXiQXTCMBfpReDroYDztzaePwZHedMEtRQ3boc1ajLx4MAjfvkewpU7kLoZWFNafVuPx4",
  "key15": "2cEpdzEjtNPdaF9Tez7FKHQbUCvqZmyt7ddc5NdDRhJG5TCg3mQk9a1ggc6hTushB2DyfoRNpvec14JcMKb7Mq1e",
  "key16": "3FUddFbp28q253VVBbxdho3mcKLFv6yPS5BDWrTHLwyXhvTwd2bhyyYNZomUuSdFPfLvaayRFkQtDSzhBU2B2fnn",
  "key17": "35fSEQLv6f5vbp9HtSN3jjS5GhvqxjwViANjzccfeX7KyfBcJ6jHV4CyUEXtR3HT9rvCAzLUHgBPHTjw19RCD8K4",
  "key18": "a3yxceJD1w1zPFUhC5EUcggbHvaCSGzSaPeX17LpSxWmzsM42fqDRNYW2KZ4KG3zQvTEZLVkQbradwDaXoy2fFX",
  "key19": "5iFEMN5a7bp61nnbyf8ed32fKP8Mkum49UuFJw8FFKnKh5TbFvPYLphSSxUJVJCyX5i75aQiYeJE65YDNLVQ1Rzk",
  "key20": "2jFR9qxF94qQUsRWZ8Hw4ornCYvkAck2xKE2JZcPDH19QE3YA6iLsNn912WzTtciWjVBwvtRFCAWPTKZyejJf16q",
  "key21": "5GogmaKdtGB3ZPZN5y6h3jYgVDg5FF5mEZd2THxVAAXPWQQayty8NbQQBRpRcqZR1HJJLx941pXAazBjmRLsp1Hw",
  "key22": "2r1JSKMoK2Xwa5p3B8viQB1Fgy1tzDajZPZskfNo8cbzdoDCk4XDhUXuRLcKyHt7fAiAw47qYSNNNJuZzqKWc8jP",
  "key23": "5wtvJSp8Ek212okkBFyMmYoa72zF1BkAkKMQEJp8bPjirvVzaU6jQLP29K2ZZuc47Ut4vsk9BLTJxp68BgPzH5Sc",
  "key24": "3LxdqU7guRsAty8G1FFRTiu77skbFVxm7zDF1KHuw82rDS5XdhtST83k4Y331XY1YKNsDt7uZRAPWNigs3ZfD5Bz",
  "key25": "47wKt5R5EyCs5KyfDpvqfyVs6Uz6GX3GksrBpP5DLPZspr9jY1FjSZvUTHL5nESQLPqqYFgCNHwUEfa1nM2Ks3y1",
  "key26": "3ZiNkjbUmouA9NuqzBnSc4qcT8mHrPH1voTvruULTbSEb7yGGXQiJyTEaASU3rwa1vSh6Eoe656fZMn5bRoXHoC",
  "key27": "qKdDE6F23tbs3duyuGJXxDbunpG8KXoLxVLfasZfziaqJ7QqSSA5i5hdkt7M9ZgwZn2CJecsLptgy7kP6iQJ9kW",
  "key28": "31ju4qtAoi6RvgFUNs2kjPJTzJRDEbV8LHmS5AqR32jS7nz9Fh3zkAA6nnFgQH1fwQ9jUkgA6kGLJeohrR6kxA9i",
  "key29": "SkC7aUKKr6kYrsGVTAjex7DzyXrUhHyBpR5rnZJnikyeYLcj3NBmJzbVWYsEjAdGoaji8xUiF7kSAQa1uq4NJSq",
  "key30": "8XvD63uUvZZEnxjk5nnGSZ4dkpBbLyBbwKVMyw3RJcJBpT3rZP2HWoTHJQWDd1k2eMMqce8b4N6GfYZvWPaXLVX",
  "key31": "22rDspz8Kpf3qCTdZGTxCEz95XQxKJtfFb1ikF3Gf8nmCgJcNfGisMEmgzp2ZzhiZjDs3kkuJ57WAnRx1pYpfmDR",
  "key32": "TxupdZwWtfBPkxLeDDaeoAptuQtQKR7GH3VpPDEqqTYLgYuwLdYHKtCcJpxfCxjoqYSmUjcNrHjBsxprbEixRhj",
  "key33": "611ZCNYS8kEC26bzbMPaM61btDoPXNJB229z7qBio2VhTHsYau4fJoyLWeLZoh6dRBWPkQznvHihvkrijAZScuYw",
  "key34": "4YuVC9r9S7D6d3Y8X29iW4LunXtpi5us2uGp7XQGTSR5FX5fYuCeRfdBEWdirEWrS8DFa5x7uvnUhoNhkhhrq6eX",
  "key35": "5SeNog81aSHAyb3jKgydqoMmcqwFVD59vfxCNY16csQ3FECNdWLYvXfabfpC4Akfe6WQ6mX6H5K1u4pPedF4KSkG",
  "key36": "DTzMHZeniFSS3BCCLcvEfEPkNn66ugmyZJaZaF9ZyFGJRZmTF5wmvx5iFZEwBiUbowzJEASaiBbm5DJHo7ssUvb"
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
