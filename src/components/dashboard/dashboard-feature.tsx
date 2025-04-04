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
    "2qJK3UZ4q7ewePbY494DyEFcgcdNZjyGZQZw5dkW3Q88Dg8gL2fscjz62Yjyj4RHvyGpsBQhgc6z9Pg7ouwvRPMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKiVhMcHVSxUd9SSXYbzrT4j8DaUVqzaW7HXJQcTunJnAqtFisHHUppovHDi2PUP2Rd93dnTwf44gJD3chNDDWg",
  "key1": "2Jqe8c47osV2EQxuDk56wxevwmQ3PJe9c34kcEh8Y9qaj6xbPpSYcodXjd1q99CZ4aokoihi2kdVHEnW9padAw7o",
  "key2": "2v55HqVfhBCQG46tLBjXqzLtVBQq9egqL832L18WA6Jj15H5axwrUkUZgrTSJtochLAn2voGX6KkCSokw1JhfqKr",
  "key3": "2Rwa46ABtG2Py2uNt5CCjHyb8CsFoNxcn1y3HUuP2D9xtNP6AbreijFYmRAJgghfK3Qf4k382JaT3sX8VdtV9pZy",
  "key4": "fSQscHDFzmRdKCauU63xYbePGbxbvQzMW4RvZLzn1wsGc8dLEhJMEPznxLwM9KMgfhqutESzzLvdwTaKVdqGf6m",
  "key5": "5eaVNj2ufYVX5J9T3k9HoEMDM47djvrvsdzGorA5sstcrDgBnYuFFYaYYCQkFHyt4TSCAfffM5o3rnDXsLGfA2Ne",
  "key6": "3BncfucQomEdKjdDJZBejKtMoJ3rNfMixMcF48vEPmcvnoot7ojU16yBhyBvaCfeQZSJ8WWvnMiReuApmbVzwBiq",
  "key7": "2G3phR793Pg43exGnUX9Qn5HmTGjCkeXK8YUXKmLyPV3Sofx3reBzTuE6RksTDdzewXbGkavh2ke7S7VCHx83GQM",
  "key8": "56iuZwqVrR7sy6GAdcXBkSXRwi6EwaCnjq4s21kiPbyBoVpx9LQgMi7Drhhas6PoTVQJcsfJPgDHeS8swWHptKk2",
  "key9": "536EDLoqT4jVkW3HJygUZHoguuRB5RUYY6aGuymjUkmaMBUDRc8z4SMwxpAHjtiDpugU7LGgs6AMYXTGsdbVdH9R",
  "key10": "27aqGZKrAMUharYFJuMw5n2wfJoVHwcvWWR4MHNZe767striWGiNTrZLKXwRaDY1JDH4YsnLPowEVqhZWjWW1W8Y",
  "key11": "5dB6E2pcwpi8PpDqm5zzU9UEaJKRNZKC8DG2D79JnawQRoDpZ3HBn6wnnLW7hYsWhExT5mamSBDpFJn1fSoz9T2h",
  "key12": "2y1jUbe6fpbBNWrP9Y1FQF8dsRap7myo3FogrVKVzH3irra1UhtTGQVu5iDQacEkUtX1a1AcZu8cYbrgQEjtRxwA",
  "key13": "3v1ZPURhxjrjjN49MayaEYxcwC7237xxy3fnNhJyxigPWG1Wt6e1qQ5Q9Ky65hPkN6AuQaFkKdEsQwdjSmkzkzLp",
  "key14": "2c8NqCXJEDbGCV8H1Qo1R1Ezi3skFon3HZSi6aPUsaYVg7VcjWHyqH7ams1996FyiSSEyxdhACKPfU2v77LNuyhY",
  "key15": "3innRGYs3n38P3AZeq5DmULNJeTokkEb9qsmPshybVU3hVH8wAccV2jDHMs7D8buottMgsyme5UhfhkBSpH1KDih",
  "key16": "41gRRh2jatToGWxdTw6jF43FCD5VZeyJn9qFnPzKqSAkwtrgpRFRbh5NNmXV3rs3F6vab5uWRCsPz9ZZbC2rHRZw",
  "key17": "3qKbCVT29SrRo52pH7VEzaCxt6tm1poTw4SnaLzgTPzp5A2xTynKcEbbysYbbRr1dVp1H6F91cxjvbziMRojSb7b",
  "key18": "2978RFvXQW4Y9QfLoz2qgga6U1RrER2ZCFAgatqkJ7hQCWgr1djkmiKabBPj4gyqNomt3jBDj9PFCoWQe8FQyU6t",
  "key19": "5TeGhZaXPEBWKT278EnrdrFAxN7SAm13LSyzHsT9ee2hLdBRPUbHtXNxTX2kBagmMrc1GH57upJ6YbzuE4TAuRK7",
  "key20": "5uSvHig2xJjccW9opSzaPSHPpQ6fZe3Wygnza5PY2UFVb9hyGfQgggMwJrsUfkSVXXRzTmHugSy2wvFnx3GpDfA5",
  "key21": "2oRqyLu74A3Bk4sMRtRvoLs6feHBf4u6Bd8QwVJfKdKvrsK3Gqex1yVPoHVyrqV4hunqAd2SGTNGdnnQ8N6yVJer",
  "key22": "96HnVuzBSTgRc5UTpfphXtpjZu468RKrTjx3TC2rFPan8UYdx1kmGhs9SGWAs66QabDoRWKdeex7oES737ttZcT",
  "key23": "9awZc6iSUFEgKSiHA6mpLbrbXdGCWFafFfmaaLfrCSynmxwR67yaDuBYM7KjRnsTsfz2gG9GLoy5g7Z1xXKHUPZ",
  "key24": "4m8g4YDfr3Z3aNwwEMLD4X9zfKu2FSfedsah3dkscjbF53w3PMCZx7uFYWUi57k9BpykzrEiqNtUUcsrLY4EQ4Tc",
  "key25": "vAdjzpCTkfYZJrmMM345dokpkfFCoVzDqD1Wk24xBxMwz32MPaJGPZDseTg7pH2H42LYJi3DXciYmmkyEqGqNEp",
  "key26": "55ZS24SPTpQn1yJUgLCR11MoA8YU29kPY5Ecte7GrT1D5qCq67fnmJaKcmzzRX2UpJbncHFUcBmwvMJtCwCr4UqJ",
  "key27": "2C1by2X8sVbRWsq7zqEn33E6UUY4feenJW9Y3d3gjZqtskPSLAeHw16zPQYXgiFSBvJuTXEpASm5HnHwbM3aByRm",
  "key28": "4NJvVvCARHCKQdLq38ZKk3RKfYH3AAWtQYLoHWMsunySHhTPoRyaPWgVEDhiX7gd4yMUwuzyherVRQgWMTLKdUed",
  "key29": "KBgUziHvb9tpCDG3hxF4tvqeHYEUGVvVroqjCJPqNjSREj5GwbU2NczikCu7H4FfhspfqVkpbE78bp9KNHaHW3X",
  "key30": "24VENZrmHUnpe5QFd2742f7u1x2rWEBraRuBQkTENWs3tgyLapYvqxUkXxgQVGchxATTnUiSzaHkosWLqXkBFKEV",
  "key31": "BwdsK6qZPYqL7K5ppQbz39pfzC7tex1ccmsrWjtAjswY4VBpuzs7Nwx7DdzPML69A7J7cJhXBrTyJDSzfehCrkN",
  "key32": "2fDFeJzHnhT1wDp5wG2M5xPfmvi7pqKE5wsH9mbYiiZ7XjwqDzJJefZFMWKAMGXKaej9hutb9LUymUX6AQu9JJTq",
  "key33": "2qprW8Uev8F1N5Mftxc4qpJwy3cCnGHbRqE93hFc5YR3NsA2pitoZyksQF3WQAbfYTRXqVBb3ia6du85EqAJzEhz",
  "key34": "66zZemByWYQZrXQ1wBgiWFjj2EnSg82T8CnTY8GGABbLehW1tGo4L7dqk39oimTtWt2j5RHMitGsPdSji2NDUzLU",
  "key35": "4qpjmLTqSjfV8z4dPacXqyQBZMNExGDEoxph4hMyvf8J9mdpDogwHBECvhdXWtRYLJ7hYpedaSNUcb2cr7seGQ57",
  "key36": "2cSdrbhtP7fFjzubWVFytTPa3XVaaMoZhMD6d62B2KR8DCnGMhS6o2QYdxg6nnVLU7Hj97MS8RMYrH7rY8MCmwoN",
  "key37": "SbRyN8Ca1ZjN8Y8gaJzwoTNA65BWsasJhGHh3wkrW9JfcXQjfJrYLFKb3DGUHHdkJweHTdrg1UjcvkbDh8T73z1",
  "key38": "VkuUZVT2VGHByDRC7VzVc2HcERaPjxWwBVptR71YJKJ4g4gurjkGcDa4NZj4DKGmDN8t7roPeM3xxptk6maYq1z",
  "key39": "AtLuBbeEQyLJRscYJyqX85yiRZr5nhy8kDM7ygDvqmUNg5cP6xwmt7BMbsgB1jnRbfQUWS6MFBcv1vhtp1611gh",
  "key40": "5ajAURs3wCeF2mdHURNZcEnTNnpHJ9ZB5B8TcsYQoQrHgregRHiSbitSH4nRzVn7fgpoJGNVwKD9xm2VbXMkrPHP",
  "key41": "syE9g1yLQKUpBLjeQp1SAWc6fym2VCxkvbmbccFiFkTdbG7CX7suYdxRUDJpzh1xCMvEQeAsZYibJDAkFjmTtc3",
  "key42": "2yMR8VbL36tZyWRtvffuC9dqK8P5qhNLBR1YS1Kp7vz4487wVEGX6A1ZBDiFrrCxUTLQyhat4jxqQLQtBy2XeW5A"
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
