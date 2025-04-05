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
    "3mziruEshEBTXSSjcrrrBvoYQECg6mSgq2KEye5g3Huv3Wa7KL8cTc6Qk2GmGS9q4uc2RbW8SLPVoyK7saVxiv9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zapM1PZB6H6vRk4Lsk9ksTTVK31zdbtZPfSqP2HXdjSbrxnvMCVraXgLvY1uaPCVpdrRgpHDe8FF65UNtb39wNh",
  "key1": "2DoR2EpatiTE3a5SgGXaUmznNeLfWrmzszfFt1B3ns6ZsgL8bbhimFCdbTdF6rZjuumoDhfawjpvEY13Sb8p7Kfc",
  "key2": "b3fhoxQrMhV4wLD9aUNrPeYwPDUUCuQBGAzzGn1bqQySZw6DXd6g9nADNwdLmascc2LaeKjcR6piFyw2KCP1Eir",
  "key3": "YLwNnfWKFpj1ov2qrKGZkzeYpydZ2W5LeDvpyLRqbe6VP9kCxmt9ZcHAf1XEHAUx9aBPpgnVYaksCS7rov8mWWk",
  "key4": "5x89HnnV4RAnEvHuoKtLvGa1MAB2zBv5J1ALA84cRqAyouR8mYjxLdLZejH7kXZghYx17nrnb1Fth7j1K3LxzURM",
  "key5": "5aJ9jiMNMnLCcfUamDz9sSkR2Yz3Y2HJ4sknRxn1CiZyaRRMaT7cqDbSMSZ2SH5V2AEiZusjFmAQzC5P6Wxcs4mg",
  "key6": "9FJcgDP5p3exoyWGjuhzotqNyshYoGQBceavcGndLVYjcJHZSGdNJcgz7bWRbz1KDqJX5nURYEvXEPxCwCWaeUc",
  "key7": "51eCgERNp2VVPd6n2WGenhJ4DLWihsdyTnsNZhkSwrHbGTV5WuyFFeTLAKLbaGwuh36ifuJ3Kazoe3ePsJKWtS9q",
  "key8": "2xi3CbWMU594exmSf5HqZ4gxGFuirw7HY4CNk6WkkvTTDDPHuGcaeRxkYeZN6Q51R5VZqqL1Y7wmd1gHS8aBdXnH",
  "key9": "4ydWwZCpZXZA65BjNYHQiHCuWfN4BmxxdbsjGPKHjyVF6ZMvzjwUakNxHWmd7AmgMkyTrh2Z7WmJgeqfZ4B1JTe1",
  "key10": "4FbnSCto8pmFkqFmjVELJwY7RgiQwF4tHbyB8myFvz7wCYBuYdTtPjE7LLNv1UuE66nNuCNvUKDE3ntfzqSxWvZd",
  "key11": "mjxnkizr48tvM3DztMjvvYVap3gNsuSdHf5u5x6VZAGR6mZeVAEbzrSuXyy3Vf3oyGCVEZsncWXdGXFSGreTBk8",
  "key12": "2e3rYrpbQNrFiBMAxgsuxnTqcFAP7Wtb4pvsNQpE2bMeuc5QEivkgqVDVEjHp2nUwJ35TqhTa2XmkXGae3rkugpJ",
  "key13": "ZGsQbSQwxUGQ51CN27ESd61aUBD7TrGfhT6Za38JwDr9ZtMeEHKyXzE9gXR7yJ2hnCdVrt9B5dSbjujD3fAdcK6",
  "key14": "4MWgtow7XLi1HonSjjoktYPYvaKCtZq32aKQmahkW9DaYGjdtzaL3ncmgU6kZHLT2qfhBoPwMbemtzZ4Dn7AAyGD",
  "key15": "wbhXMKyCv9aUYAmfBbASENxaRw8UcWMrrraA1XuD5dc6V16Y5ZyDJocmz9X6qkXNaf48JaG7DyDs8baMNdzRmqx",
  "key16": "5zR6R6LuxKfwxKUo9SMFCqsGE1EQ2Ry8YmCDPjX5jEJGxSEF8CMxvpReyG7c3pjsaAm6FXFTZoLwPurfV3q9LvQg",
  "key17": "5VAHzgBKCADnf6CsCdpMnsQMW1y9wfwvHa7B2gArqrfbHcSDVrbR6Zj9LiqTQYDh5ANP9MqoxXggK95T8QhszWrB",
  "key18": "3QdmbdYa1WvUEoHfTtSDtNsJomniWsY7NFUkbz1ur8ysoQR7MZL3m5qcKU2b63DdwrgkW6nUUmMM9aUuCwQaXsdH",
  "key19": "3dF8MNWCgJd4yvDbcLZVM8JUkdfXvSA2gnzmPWtdwJoDNt2BYbXMH66zjPwJHBd81vNhdCSAebwuhk9pt8V954Le",
  "key20": "MxEnUcShEyXNqWyzFvKCK8waCK4rFDDsVgu9yVGQXNGLEMNYdXwFZmerXEaoMkrqQh35T63gN7rHGqiy6f4bDav",
  "key21": "3Hw1Ni5yUiDZtmGtwXECMPbjywCALnmKTdkHx5MJE9ad7aXWiBXu7WzV5qQtjvnXKM5mBbV84sjNhrHKsgeivmGZ",
  "key22": "4dp2vkW3dupEcmfd7YK2NBzxY6iuorgSXdFucJitYZ6QzQAYto7HQqrT2y9cK88dn52EgXKxdNKAVPAZM6Juz3ne",
  "key23": "sn3Ytw6tSF7xqiG3nMaFfdisJkL2N3eCZUSPbCw1C42XfzBTTnvvnvCH2Tbg6owVwTGK5zmui4NhQtLPb5T2vdX",
  "key24": "4GxhSGiU3ZWBDPcyLzbQS6jjZW3jpZBz5mU2wZfUFtNJRBKWv7SMoqJfxcXJzUfGKT7pGmvViBDF9gfsvAj6sLht",
  "key25": "2x6zPes7dgWJ2zKi9z1mHZNHPcJ17Ha8EcYuvjxNDT3VjFuKQ2DZXsqcwLcS1Gsd3hyTRYcqjiQCk1E1J2YHWmNT",
  "key26": "5wj6iK1YaVh6UjYWTi71DN4np8Thrkq6TZZjTLgS5FyEURHhyAgkMMDgpRmmmuZuSWwn3fd1gC83B9LRnqeVswPP",
  "key27": "2Ban4mhr4LpY4rnmNSaJnud8be2yEFPzwrdNRasQMoW6mrYsPRee6HabPumFXXgMsZc4jMC5Ewvh1xN8VmAttYAi",
  "key28": "61b93Rbux3q8MnDQfow6tXfzwsRejs2VohxBtCPAxd5wUcLwrW3cQuGBKtyELB1Ljiwqo6BZmUiY2jppifM1wCvd",
  "key29": "3Z9JSvkXqbEXJZF4uYQXuaUvwCtoRooEGtEcMFiWppY3LfpxMtv6TSggUsXtgXeKU5ELwAzTxn93sRa7n4j3E2Dx",
  "key30": "5tTDyk4d3AtYX3KD7HTpRa5PfrH6ecSsgGsgUGswk9SZ9BjRT6qvGi3TVBVZcyA1nJetPshzCVoyCLbs76KmwFuW",
  "key31": "5BhY4VNMUuBWBaqqHDxnZE6Edk8g1mb5u5mkUat4cL73c4ybtkYFfbenaWipyd1p74f6zK4aHtpevrq2E8ztCi8E",
  "key32": "ftJuWKbfArJGvnZaEBEkhSTxFgmTZs3vfvTD2JGF2giXAkuTGtHV2Uup8bEEEwBL3fpHJ13VxwjygFj8aRRMZNA",
  "key33": "nPt8cc2xNXkXbzNSEE4LK1jhyU4kc9rUgciVAXKn9J7Pt2mRVdiLjvnixXRxVAZwXCyaQikWmvZRNGAP43HizrT",
  "key34": "35cKCvZ4QvoF9LJWwKwBZo8a5bCjPEjsSA5kokncf97RAt8FbZmedB7RfuXTkyjjzAYkWRx2edXkw2TVUVFvojgx",
  "key35": "4d4rB3BvTDy5pt3y9G61XDdyPT4eFm1h63YQDh8wCixUBL5bKRMGR7oMx771sVwQZRfx7jAnatsbWAVB4jijLyBk",
  "key36": "4LKFMy79oMoVWP8Q7e51VoPzyEeGos142mUJBLXrxHdTqsRrKrvuUD6gEounaWSeMCQsCVrUe84X95a681hWLyTg",
  "key37": "REBMPwjNJ2fZoEKd2HWK5nVxBX87EdVvQFXLtTKfz1bC96JYoLBmUQPFPX6JxyJfZnensLzEdevbXzpckcJY8Xd",
  "key38": "2peNq7bCuaXjhuhm2PJcAYdhvFvYL5ScfXkC629bXsNxfW9F5tumuFXumiXXPokCATnyWnTFZSoBBEM227UG7SwT",
  "key39": "46cPsRQjvEVsQft8QjGSKJLMxZz2YJMo2jhLp7cqKeBJqrN7Jk3Jcd1DeSYzRzKkZqDMN4RUfpVXCpS6MYj1Zg1N",
  "key40": "yXfzvoGi655K8bJqXwAWa1i5qD6ZgKGtkSBxGL7Dgu92fsdHVNFDGWBADfdW1Q3UaAsKqbkHBuzsGo4a9fC5yqm",
  "key41": "4XWmb5okx8qBDqCJHGug6V29EkHh8YN1uT3iGyE1s8SNcsr5iYV1YUMjCTh3XERhvz1xgXe3KAnaqv13E8uAKd2M",
  "key42": "2qfG75fgvBUK8CwhXCTRzGPgao9pcVFzvRDr66UKrBPM7jAS8EnMZrtJxvZs4o8KNxQmFypK41XXQ9kYXWx1mgqN",
  "key43": "fDHhzMHEaLiBu88Hts7aDNRnL88W5BsY1zdH3fPkKFh69anoqpBUMLue7UrRD251YtqdenK1tY2hvgJ15NV1ro7"
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
