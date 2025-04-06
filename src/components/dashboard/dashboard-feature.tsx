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
    "2kRZvwExHpsezZh23DwttbZ2YXfaErGA9XhBaYqYT6hUHowfh7858BUrB9YRJmMrPrmLnunXg7tdhKumM9LrFtXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUHCRjKyFfiaXqEN5z5kePJPDP9eaR4QRUinZ295JKeXgC3ko8dfGhaem21WD9spuDbaFBxJbU1Qajt6aScRw1e",
  "key1": "3CAXHxTpWTXJCsRkT119q3HBuY3EKvTjfZxCAFJR8EET9f5Yksb2yaXafYjRRR6usyKktkmEfmR6BgKVPNGLjH7u",
  "key2": "4JPfcqqBc1Wsbknysd2acUtXwMjixxVKYdcSdKi7E4YcXEvNH4MkfPNhY7zVhpY7yTFDS3Rx91ZG84GUDhd4cLJG",
  "key3": "3mbZoRm68nzkpsfyBNA3eMah4zucaWViVua23WrGK1eJjDXAmZCPdP8TQtz7kyeHvCzG5y1JQQNyJUTcA74qVqB5",
  "key4": "5inJKNghSQTrR9YXWVtVr1WWvA9Yz47b9DKuwC44ST3PCWaTvKXHt7xKzjQEHSxxYKPaZJ16Fpbmavf5Ybjo6raR",
  "key5": "5Lcsb3teqzzz8194yzzUBo9wWohGFQGFTZidbBbyW29AkKeWpof47XUPHJTRT1EehrSU9baSJ4ZbWc8UAe6tCjpR",
  "key6": "3XxdAqANotcdenAP3Re14TKPW4vnqinVjKU5DRbeb5BKLtouZLCtkyk8xPahAveguxrUeJPu3zPkZXYw2ff4pcWN",
  "key7": "3cgmG8G1oshA8LcLG1ZvTc5dGx1MKZifPfZ3uMZjSemu1nQbsdQ3HubGzfdTzed8bFgKLDwv5HLiEsWD2qCpU47E",
  "key8": "2qQKdHtkiKnEaDX2Lr6HAsc3vgGZ8Qw6eUrtqYVuo6fX7w5QCYsTcXt2vnq3gyLqnEi2tJ8ygovTXHVYKpMgEgkJ",
  "key9": "bdoQeYSkYgVRuEEtv5GiBi8VZ4q7XRZf2BnyrPGxotwKaDwx4b9hC2KxaFSDJrf9Hy5jBqpeGtCXZdAUVQGnaBX",
  "key10": "2fsuH7n78vS9caUHFKMeYNRUqVbgPQwkZr7v8asiDycR2oqocWovuAcX1ZkoJhSvBmJDNxk8Fzk1PVfRnqLv9onq",
  "key11": "4jEaFS511h2UBq1abgdWboJHety9yUnKCjm5ooZj5SFZNxQGX4TditoisE1QWdfkr4smhLThC7M6b4KV6wdhgXv7",
  "key12": "VwSdZPQJU4tuL1Nbg96K1PQb7VBUUMnQf5o1TTqEuom8WDtsdJyWi8S3JjocWjpyM1vnNqBhPgP6YCE9nTaausD",
  "key13": "2QPg4A452LRiEmAtfu7yYEP7hk5StjgwhsvfQ5u45iQrgsi9wVC6bQwNvCENYEBtJTvTtVZAXayVn7vHmTVZ78hF",
  "key14": "3tnHvgpsqFsLZqsQi6Cz6T9Z4NGPtWiwJCp3Tv4hXWupCwrxx4RkPGdWdDbLyFko6R8nxedWZv1HtgWonYcJmREQ",
  "key15": "3TcnA8XBdDZt3VqkB6vkLoX8sgL3qsZXrBjx1oqHyqMSfvJGESGv8b1SqAtPRPcsp4KtyttcE2w4M77NwJFSMzgD",
  "key16": "2ysfj23a6k4CRBGM4cbUo5w4PshP7a1hnbFZ9srY4JGBhctkv3s123S63Fp13NirmPAYr2jpQE6HZnq7oYmTKeT2",
  "key17": "3pmqA2ipotFcmrsA4QfHkZbZLFLhjKHo1wvAMVgtUteKdah4TQkbezAcnmUXCYaf2njRqrNvs2KvkmKP38ynswem",
  "key18": "4BFRKYbaKDkLESYmd3Mcskdscg67Q8jiz8dBGu96iN29542kh3Ku6x6ofFXTwmig5rR37xiFL4LsJMqWYmNmxhKY",
  "key19": "QgpQLKpCBWCDsUJdmj5SrgJCQfeZC2pCMLVouCF3RgvkD9SJdeShBdDxgUup7GPupudfGVr2m1XdWAQLmkUPEtr",
  "key20": "3SDFbqtMXZib4BvimpZkk7AirkMqBPFYdG2Rx455VVVDsX9Echi6v6eY59ksKFsE6sgxXpszqLkJ6Rzm57oP3wFW",
  "key21": "84Xs6UQpKFmMq6LhDazSwne8rcJNMgi3RhaYUgpZ3JFv7tzNbVJfDxq2SS9czYhy8AtDzb6hvc4cV4X78sVLB1L",
  "key22": "vUCZZbQrcnw7774Rnx8HzjKfKzKHrwPwo1BaJc85QK8BFDtSwksQkCVMdAhhFEPqeEZhqKiJLNeu7g7FXfCNuT2",
  "key23": "4wBbxwxVs1PNHNuiwJnFKskxCAYKr3JWdKA11mBSvxLM3bJ9p4pH1x3FJHTttKTp5nnWCGn2ewYUAu6qN7JBVC4K",
  "key24": "4ogwBMEXFHj7tDR8jkotGoKMKZVu5qBqcGSf1AHSDMAgkshaHSVSPu8aykbEGnspw7cjrqbqrq6RaT5oXY5mv6Fk",
  "key25": "2DiGXcQNBjB2fXkXPKgsikTt25XZGJbVoKdZKcgaLKbsJ3T172cJ5NrmNjEPRkHBtTcbk3wwtbmFUp2v7uzqwE3F",
  "key26": "4dVECQ6nyNXypfTo8fDqZ2jZ2kXneu1wScsqJtcg6g4FEvtBq3aYGFsopHCSp9EschNSibsHzAiJSzHVZKqXK1ap",
  "key27": "2YUTenhXpGBVniceVGREFwtRzN57MZ1GKkCkS5S2upB47edHkg79kRMo5fcUfnDpTSwXRr93vJMf2JUd5Zsosa5A",
  "key28": "dbGgGWBjiVcEnQqwF8UHUsEjU63gyztSm8qG6hRmwdaBw6s1ygAULsqcFzkBrJS9V3sJNKDivepC223xdNFHScJ",
  "key29": "5a4PdrqxJqQuUyEt5CN2F35PsS288bzwgy1qwqPRzcWAx3ZCApc2dsFrjvoQkghdUnbTbdZ9FKArFXVkKCtwgH6p",
  "key30": "5xourhJ7TPKQqQ3TRoYNgWEuKDAex3dk81FMdeXtcrndyyNmcom6SLvLue8D3aj2pdNsrjTaYks2MYWFEf7Eh61q",
  "key31": "mHJgurVsRr76MnscVWWTnFHJJftVt1NhMHT7A42rCaenGvsSV1iahaxymhR9yqkDGSzX6x6qswR6FcMvbsemfxZ",
  "key32": "3ZCHwReBuEgszWxRt2ohNjGGLQqZLRpmgn9QMVNNvgSUCyi6iL3RM4zEgLSKJZwKFxvXVdgoyHXU8QGnQHso53JU"
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
