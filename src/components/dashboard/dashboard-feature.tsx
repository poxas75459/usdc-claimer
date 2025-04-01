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
    "36vKVTvVpLtAq4pGgcQjHgWZV9ovLfLXRV6McfBmzWmPnuHq5219n5jNH2AtV9sPC4kcDHR6xKyYXFKkjihkSiGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nph252YaNY948jdnCqD6EScM1J9KUgXm6oCnsfU44ZqSTkz6JAba6VQQvbKnfoUj8VWD6mQPrtrHH8SC212AEvN",
  "key1": "5cXbfwtZPmenTV85gRy4431Du9bpJa92gorGNEMkf4Xguyx9Nu2A8YAywyoDS1nUMJU4MDTZDx4L9FXpgYxHZM7B",
  "key2": "5j6AVLB74V56cTjW5zgTdvAzEe2PHnGYyV726W44viH211Uv3hxTwvJwGNFVCKsmxos8LQAtcJxcgWAZefmWEQjH",
  "key3": "3SAbNWPAxyQsuMr5QfpR7CEkZavD7qgoZdTxwYDgKC1TpaAYJpWLny8tTz4Z41XTdzWx8EdjvePHH4rMxFsHK4Eu",
  "key4": "3KeZyBa7q7Nqv4kZMmGAdgdxnZ8V75pZ1wAmKnsac5rMo3AzzsEUHMVpY3BSSB9NgfYvjMhGpWC68sWAXAoosYAQ",
  "key5": "2a1y85er8hV8w5nBf2y8ZbLuBCLzhn5Ruri5ALwuBzYavA6nvptoTQZ59SENywQz5WL4Q4kCTr2rtcim1QXHDSxf",
  "key6": "3QkRFGkRYDWUPdzCeg9rC8sBmr8wpr4yrd8uCM5vGMbgP3LADseMHwuqLD6YBS1iJXCNgQxJeqEfzWriUsHzHpvb",
  "key7": "3J5vS4knvG4fqWjjSzcYYWRDdccq9fg4v1EKt4faB9a1Ze5Ndw8wmoEM9YDUqGdS7K3SH54NwwzwT5rxqzCcndDg",
  "key8": "2HeKPs3AFessBffjnxfMJfYqZ3uma7kwsPubcaEJ2fW3smTPgfviDr6o5BtfCFHkbounmeXBYW2ebfxcg35koSLx",
  "key9": "5yibkS2SH5wYrhvQUqmwM54a4CM6Bfv1E33m8w2cFs4kQzWGRWQRyGcscQSSaN4WVQHdWEpcYPiA927GwCgWgCKZ",
  "key10": "2qzstKjfhm97S32SmwFjgRxsiUvuV1iGjqnqBeotnqV8j136CDcKSBMmwRXnAbd1W5wFprhddfwC4PSEeUdpBpP1",
  "key11": "45EL1TCxB1q9W6wtu9Fy8nzVXptX2toSdU4PvqSLG64bpt7oDa5hhPCiaroStivnuNPtfEuD5j7MC7CwGsbkzGKR",
  "key12": "5GvBUQYnZedA8rkmda2rQQreVQDMSS3mseXhN4P1i1RAint2hWFMe9fLnnogiuCc7r29zqVP9dUkWnu42EJBeQcY",
  "key13": "38Jv52yCN3JTFDrgnqEvuunaZHHpf6f8xqR663KXe1afq2DoxxBuBHAhiNKxRqmYCdQWcvJoLhwaMSTjPGbxjJsZ",
  "key14": "4jgAPSbDxfhGGr427va46LBQpNXWi8TUbuhKQkKon92G9PHNrGZZd9HFsuz5Gcs7jJDdwVMzHkTZ4AUX4feo2uC4",
  "key15": "4iPTjjucCAHeSShhzzD9c5kNJybsNXPiBiwiiRr8n8jkGHUCxq7Do2LZHH3fu4fNHyRduCUfXKqzzmVzaF1BCXUW",
  "key16": "5f9LHncdngaNPVNqzts7anwZJ3KrWekPci1fKqoBeWVo8w92ve4eJeVYSWLdhS2c1oREJtgPr2gButGBh6eQ7n2k",
  "key17": "c5CqqrFZBVVpW2W1i6vF8hUPnnkJ2fp1s6hKPy2puu14NGEJWq6KFJZkTY1RzZpBfGD5rTx5HTkL5AuMCWkWuNS",
  "key18": "2JYsyQTUaQpNVXULoSMZJWmMTCcf3hJqwKPTcp8HRzZUdoFQMQjg4gtp69gmceyQT4t3br4DwBdP6Yj3uNjpfSmu",
  "key19": "3J2T55mwpjYNXEQgHYamUoBkChjsPmqYwZUrTLY1Vh9FyqhR611ptQBTraTVQnoRWTkDy3QmFko6AoTPyaxKEgSU",
  "key20": "2A4CES1B2L2SbWag1kRp4XWWKAbWhJzyNsfUX6Lksxpwf1sMyMPYxT6JGcCyxzP92JKN7ZQefVvnK4sbcA1zhWzA",
  "key21": "3YPCSdhwHhD3uqofpnwKBst215a8FttcFyqpAYdbv2y6dLqaGMr5QMMBZuVUhTAvFurZXnh2HE2wvuZ6okLtFS1N",
  "key22": "66wYmjQzVVEnLSNNh2TzJpVHWYNjyjQeAKGERUkLk49zD52AhHsdJya5vDBXcyeEdeF7rGiNcYtYBXAMTyq7goDh",
  "key23": "267yBMLZiQfBythcH2kfTMiS6VPqz6qSf3QihUb8UQ2yioXrjWrA6LfgLJd4ipUc2piwkGY6XL3DzNq6W6wuXADv",
  "key24": "3VidVanEYTQzAmbUZzQ5wyPEzZo1Ewx41E3ddy9zD3jh5WZdGN51NywfvqyyUj6b3Wgirk5qNH83NLUVf57hduBC",
  "key25": "2YzFL5xeabPQLx9K7rZrAaWXhxvWuTNfg2qed7bxZmDizFVmKjsqbxFWkBm99UukR8iqjPXydxLtQwdDNS8vzwJD",
  "key26": "3vxsX1TrrwuEV7Yce7qQy2y88KGeMvY3m5WML3vnaTNpdcVPAP8q2EkctV38Hu9uPY6WrHdMtis3HSFhrWnb4Zsm",
  "key27": "2Y7DHUkTt2mKBpPCbH8vcYmFNfr94CKaqx3hjMENAUjbbUxkhsGE6xFUB311pYu5gAKDY6XXPvLhQKkyLsU8wDCd",
  "key28": "5VwYBac9q63MqKMdgn9cVZaGNKWuHfzhMpLPb3mkaJXz3SyawWfGj4gmQ4GatAtLZgfMa9JMbwVUk7y3DDWv7619",
  "key29": "2tKiEHHxuddutGfTiRgaU4ZC4uKayt1oiBvY2jM461kzcwHkSjQW2qz4sR1CsCsyitRyTUrQBRyDghV2KrpcxWf6",
  "key30": "pvXzuQdNRYCWpqoJXtUReM7zhPZwyQCmS97BpS5NaokJLEJHU2QSL16uCpsfBYCfVRFSxSFEA27HadjMddLB9Nf",
  "key31": "3865rtddu8Wzu2fLmEShXnRfJPFfGLyiknuEmpG24Yj3V1TBXdo9jD5gWdBEehrN3bXgrDXa8tQNYGVxz1ALf5eS",
  "key32": "Rfjqx3eMg4chUGXaqhBAR5ffaFbNNxGqZJsXdMQ6buz66nJZuwtWPyBtXnfBC5xVW1q7Cg4jZVSVLeBUmuLxDkA",
  "key33": "cTWAqMmrHXijj4MBMWvWHp7TgeCfCG6xsGvaFhvka3W14bAjyFaCVmF5KB7sTmsFtGhtjqErgwKfUm5j5t458aG",
  "key34": "5vH9fcA6NEytbpS7tf5MBuM4rKogANrHKWARoZtfLusB77Q6JYLM1TEMyNWorFEchyJR429bzQvjCTW2STADGyw",
  "key35": "4yPGMcRVBiJM7gWQEdqz3TPu5bvxrzWwYakia33NmN8rFjo7PzxSiwVCAfDwQnv3QCUs9N2PowS9o94Bn2jTMuYb",
  "key36": "4BzyRfGXMag9dPURrN2Cgpp6j1coqFVvyx9utkhTnXKvTSmpBz1hyiVr2bpc8oL9XFXS75h73nUJJQvCvB47SBoG",
  "key37": "hqv8SN3BErNnsFL8mKouuVs7jPHW331RnPMgt89GtvfQSAHEHeQbXUm72C4xWuZrvPfVe5F3wYnxCYho6Yfc2k4",
  "key38": "2gaLrNFhzvha4Y12P3umaBZVh1no9JuLomLcq68m4Gw9VGyM6E65TuziMMZMrL892HmvcQGJVDVU6dRmSmrLvSff",
  "key39": "3pcCvA8ANr6tVWMQmnuFiYvzLhPfG9GHnUct8rfCRYrAyczQURjkZbpdnUgt4bXgRZXdvbZLoVFo81qiR62nYoyx",
  "key40": "5VZTPM8DzNkBjszHkyCxLsCw3RXmFWuRuPFfSv7mhyFuYP9m5FWs7CTaf6wMJ7fcrkc9avMKJ8R3kJ364fsaGUv"
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
