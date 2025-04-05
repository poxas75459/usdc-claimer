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
    "2VSqWpgsxKJv8jbAz4wKozfKwCT2HJZ6iuyhKWd3EFa6sPaEt41oVPEPe2UTaZoUzAxitQWaai5wP7KFsyc5sbwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ns3MwiTEnbxovUM2eyGcGmmNVxxUdoDxj8oRyRXMTb6tsJ9B8teZzYmDjKGC1vcDS2G3sgvrStedSNA1e7LgtwS",
  "key1": "4XNyKk86MNVMw8Wu4FtCKvoxDVmEvprgK1WPPKmWkedfXvCwFtSxP6Mo7bckKgzmzuMhQSU24R6uKfcPoBGUPQoW",
  "key2": "38rP2JjzkMBNurSN44L9PVE8hbEG7wyc2MU8JEXhNWLgq13kupXwWEdBUAswhKaoCi6FN4ayQ9zoFngZpgCkwU8U",
  "key3": "5ZkeP8hddgy1za2QyfiXfCbzLWapdL7moEf5cnrYstUcvdxmBpW8x2WPVy39hQdP1WMvrtBvDkE9t9qRcgJJXdb",
  "key4": "2cStZqxDhS93XjcUPYtuFSU9b4u379fpxGbN9rGiUgAbpjB4QVnHJwkuVD5TNUFdDMXKtf5kZTbQ4GzxCttti4rt",
  "key5": "5kAx5634xfz6yCvaDZaGkWBoG9uBRdYwREJJdFjiY8BpcAQrzfso2CC6ZYnZFxFakDPsBQM91TwAmru2WimA6dUT",
  "key6": "5FjsVP8kn2e7CXL5VxmTkSvdVhdgMK1p9EZsQ5CkiN4aN5DuWpT6W8brJHyEXKN8MvRN9i23PU9CqTibzjpLttSW",
  "key7": "3Cd287RhHrSuL2jQjgPADnTLZe2gscUWLCAXbVJKFqbf1EWTVAFxYiPRMH8XEwA2JqxtthozXFSJiAZ8UoaAyXUB",
  "key8": "5e969Y4L9eB8fUxE646BUzEwdWcwhTUckTGWvhD4fF1kQjRNVz889qHkmNx45bsnm7WNi9vwjdZC4HAfqeWanznc",
  "key9": "59QC7L33ULdrcfDFWgY31SoMX57s4AVjEvWybbtZzmnXfp2NQG3LjQ9R4a86BTcDFJdsw3Vo5QMeJycfGDH1SmCF",
  "key10": "432KxxuELu3nmyDwbRcwiMqsb2P1fL1YHYhoStT2K28VDdsYEcM3d3eHQvVquEhR44B7QA49YVXDBjX6F3uCifAH",
  "key11": "2h7pGYtrXihwLZkBcFGDwh6UwwAkERZduiFKbbSRiCy7Fvsmx1KGb7zPadjZ1r21CPe9QFp4To1NK2EhariD1mgF",
  "key12": "3LuAuakkZpXKnr8x8gyrMCq427L16mkhx8YBmmCA2ZZA5jQBgXELLEYTgbe5jcfm4iyhCJvGUe8EbpEyLjQ63vTU",
  "key13": "49oNTxAZX1mPWcBVo8TXFMm38M1MTL7qaFLWM1dGijQHxjidEjewKyn3k7EnmDbMy4nAsQMtcexxu6YLJdYiS4qH",
  "key14": "5rgHiE7nEySKho55BoNf2qeWaGRFr2S75XQzVMLLDHeGNNYfdccuuq5wWN8gqNX1rF8siBdAD7N9Qrc3KPmTjWVW",
  "key15": "zL92Qy8KRRDJPGoVm1TGQi8U9eyZC6kUEw8DyDShdXUrhR1HxhCJNKct4KJnKSBcHQyLWor6FCYPaYHauWa5uL6",
  "key16": "NHgUCEeLJE3v9h8v42BnvjujQ4hyvQfDvTxqZitJrbLk4wHXVr9cKqV7aegAe59eb32Pn6vh9SFq9px7RRkMaTR",
  "key17": "WrqvQ6AF2Uy3NbkjZEFMAaiHCFuneqVYooiHZtNLALZVCjYpbkYE7EyXuSQL2TvZkGwnKpZ6NJCS62HzsAnAnMC",
  "key18": "39EySBtvLoNZeo1rTj4F4EEhHg9bPhY8qjpR7TcyJ65D9aUqSV8EHn76DJW38Rr8HwS5fac1VEZm1TCnQ5GZVC5D",
  "key19": "38nALZNewX2kwiQ9y3hZKPArJfRUqBuVe73ifXTWFemMF5sjdxajThKHQhPcwxXzEV4BoKZo9eDNGj1gQ8WxNwhW",
  "key20": "3q6vyMVxL7zKX7Mx1yQAec3parfCtHtiJgtL2iVt8pfZ94kbf1JcG1X4hgQth41V445H2DcsmBnVvD4TeY2zsnaG",
  "key21": "2QvTnpwF535rB167NYHnEzYnEnHNSbCvCPcBD99rjA3EDYHbiyijGXHL2d2aNYU8ENQpSwKU6wQQCVfznNKcr2DZ",
  "key22": "4McSdNPDnGgNDVRsNynFuDgga99uEoUDMN7nE3V8RvLGqS2XwZ69MAbuUYZiutdSE4YXDjHtp4GiTcPySfccxZvm",
  "key23": "4nYCHfjSnzfjCwK99otzubgCpik2jAEZrXLk5pH4JXRH24gAdZEgtazqo5LJo4VQ4rsQSLGnNyEzmXWk99XBSJXm",
  "key24": "4iisGMwo6yoSuyCukvgED5DAAHtc4hHR2VWgiXCW4EPbN2xkHJ3SsBUxDEo7WwoCJJnohYyuYVVQF2u2WxuWsjZp",
  "key25": "5WNwZwXMicMx68rC9ws1jvtr7oezE5wZXCDeyEG3YU7np62daBPW9tVzicBJ5UWvNd16BdUeJBCwssw7XGynpfaQ",
  "key26": "4NLzs2bc11rARwGKGNEpsRasEYu2f8nto8YzoddH7XMSNSsdnsZn7XhmS4y1c11ptUpRZXBrm6vw8UuddbdHLAGt",
  "key27": "3KvfEgDpTFtmqak57MtgHYY5zAfyDwwh5RSqADa5doFZdkUMEkunUV8agmZjdVnLXKzjq6Fu7bzn7fn1bLwHjW62",
  "key28": "4YE3nP4Am5iBwtHbYFCoxYPDYtYnsr2SwUWPwDcoTZxUW7vzw9EGkRRNtxxCZi9UPHNXc7YiHG9imq7pZJuSaNoo",
  "key29": "25TAN3epr4PpSdJoYFzCyWoVn6BKBdvfS1sTCAhwCyw4TvvWQJ9FdRAR4h1GYGxRXS44yKP76gfWEUF2coe8o6op",
  "key30": "24wWZh8CCRCMvGVnDkuB7S3GKT8GShPuUHecE5GVjVcrdCmfSyrpQJZJXZySs5mHZsaMKpjRjL9ytAZ8SBBq1onM",
  "key31": "4FZFS2jLM8tAmEB8DSgD5wr6dJH3nzyUSPKz61sxNhc2nRY471YLJps4YYGEQNpd1NvajCxUMzbgzt4sCV1wyYYa",
  "key32": "5etjXa8sipYmd33TckyQu41H2ZrYKfh7czLDGmhZDJZPpz1BbySLu2f4WKFegheQeB1h4bSCi7mSGEdMppMGfwzi",
  "key33": "4Sc8S2N9ncmummo2aHCneZMiiYh8AY5699Kq685a7PuGY6AWEkPrTPv5qxBFxVcpmbPu8J336q2Nr2x46CcNKiQh",
  "key34": "3Bq4gCBqUU5ww65aJxw8otZzdPfpdF4jbXxe9CbdBSEZWUE6avrx52eZmjm9i9qiH2Ru1H9pQiDyhLJbefvTCUWw",
  "key35": "2N2SKSdN9hkitZJ49WpqBvhXZoZyuXr7TukKBhHGN6tCAbr13YfcYL8qFGHzZyaGKsEmFDWJ3f5F3KtXpK79xpBC",
  "key36": "3cLCkXRzJMTGr4dVETrqxD9vkudkkVnttpBcZzwTCFUu3xVGDZzGtQVQyfYgHGFQNytqLfgKenWsmLEPJPC1bJPC",
  "key37": "5xUPVntdJUUerY9xpT94xKrAhWMBJWwTwAGHpySQJDhJYiQb79WkgyCUCVuNLtjCBLkckDezBNnb5BCnjCBRXjer",
  "key38": "5pWYMUcNNcFzkanitxB6LTXBtkgCiwBpnTguBbmiTDhBqs78yLNzYkTfF3jZ2KsonieKG7RfME1zPbayh3ePpTRT",
  "key39": "2Yif5pt14TWSDZrac9zpQnKNJMY7rE3Mx96p7gzG9YkV189wn2GNDy8Y69hdQGJuEXYtwyX8y9ftrgEw4SsdEp6A",
  "key40": "53RXGnUXKxmvwzfS4ZQj1o69KRYSk571oZ7BcEnhMAxqRSVYhfjcz52eNepq3PXaSWZV8ySAghRAxNC9MqNhySAc",
  "key41": "664Gkixq7muodmmX2kD7JbpTuy8mWGajiBUYEkBnNyM3qg2aXL9JdDSU1BQDcSmnExcvjZiZxdBTkQVxqC5xtwkV",
  "key42": "5XCu8DGK4Mze5kjEcCWNzb1WD91DnjxodbPqweKNccQPr2giwWtnmeJVR4Xm5Hnd5Cn1CBmc9eeMED3NVBjEaRre"
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
