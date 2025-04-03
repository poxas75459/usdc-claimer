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
    "FdCtvo8LGffsZVrbKW5LKpQLC1VhiMVwny8Ta6tPWxvegKqXa4YbUnZtc7ABk6ddKLDKaRfVCTMvVqAZcSphPF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApUZaphtSG5hB9jUkaU22QNEbdN9XxkxfPJHvJYEBFGYiyZC3s2TPEU4nZwnT3ZcMSwjHuL4EBUseWAy77ZdouZ",
  "key1": "2Vx2nABaiFZmqAPjCi2gdSE6tc7y7f9NxJGNQWnHQrEb8GZ4ErZBp1NTGUr2NYziWUPyNABtMU7TpS8dYnS3hr89",
  "key2": "mzW5a2UWqjCW9ibpqD5tf84UKdjetpzuTArYsfYKLGGLbkii4An4N6fqHERkEfR25ETeNiLonzjtnERNao414JS",
  "key3": "3yQkfKRANsjrXF52ocpg1z52bFr8ahKh2ngZgu839TcwiLwBMQqJiEYUAJfszFatSAkqYiM1KhGW3sDws2utF2VN",
  "key4": "4hRZCUNK9xatk2crZhwKmCM7QLFrMapSzLHJibGbiaVC5MXNjtoLEoUpQFr7M366CZqZBdnnsn2XoCzyo58HvuDm",
  "key5": "4dbTB8dB3yRiqjmYtcRqNVhBXSHCqZvcQazUJpwevC5HcgnhyeAmjNTB2JaFjjsZX6MfAbphyFuk33axH8kWdsXh",
  "key6": "4m177pVBqqWY7ZbdSVLhCecMjMwHSdZUTLvTqcDvrkeqAn3WtgXjK8hY5X5uUqrJHFU9KQpC6ERUqkYuxCN3A1nJ",
  "key7": "4yJKMovpz4npzt86agPYTeSERE7zFyACDYXXVigGumBcznQGW6y1qsnqKWn25UDVGzs3FvADAGGvom8fVbZv14XX",
  "key8": "5kTN1oh6mKxYg4KXMX289LLeR1Mv3FT7Cp3PFFRgyYPzZNFMALUc6TSDJ1bPCVgysgLBf1V4SUzeSTgV7hhHBSQ7",
  "key9": "2JSL2aCowR4bDBsVee5mkMAht4tBe4442LdkncoVCFbs6wh68Qt35soRnrEVUDuXLa2GUwv8As7eCP1Cjkgxw8yX",
  "key10": "3jNFXMyVSjzLbzM4U9KkokhUVKQba9o7sD3sP8w9xiRVBr3CXXbZMBnLaoiHq3vnrtZx2KYz35PnKZixhWi7bAd9",
  "key11": "5TogTnyCuXHj84hfswc9rLhNaA7YJcT19UxAf11sQC24x43CufG8gxhdhVLD7EKArHgJncwi1iTPRAti4wyRrD3M",
  "key12": "4esQXuHvtfHuSVPMeEjYKkNwVMq7hCZPqR16dow15d84QzWw5M3xeWyGzCwQX8GwLHDiz62kY1HTCo6uooBi88bL",
  "key13": "47xSUXwU9F1aZfbDQ698fzzT1GusARtBxx1RrazsHDKLGG31c5WsLJg7YAWjMZMiiesmMCUqVZiKFKT23BWZGQ22",
  "key14": "42UXtr63KHksngPC4aAmxL4sjLLR4UFLdsZC1SaGp8p23BqYBjeLHXGjyeHYTjUUjdjStvWvfyi8QofiLTavYcwp",
  "key15": "5kyKHsA5BKGbYWkiJi2d974NNFhUvH21rCXmMGNDma7pjN5jCmKg2V9zNJ43u7PFEvG7BZXdY3iPpKdHAh2DHrWx",
  "key16": "uqdWA1y2eGHyTUyFLvsjwy7dcL7KyTeTb9rk4347TsaVZbk5x4evbQRcqAB89tdcx9iHhq9ndvohcL6ugFEEzxx",
  "key17": "2aWCf2mJujiFoNCdna6AvVJjahkrAnWf1omwDzwHEaz3FzPZJH2Ajp7w4YiN4LASHP15acwjyNwv3Mvqy166gNei",
  "key18": "2G6poJYYMMQKsjtzTzBv3JX8ffLjecFNQNpaLMFkdaDZNgp72u6fMg3ah3yFwqrDRfkZThFu2TkKaThGB7iz49eJ",
  "key19": "3ihH9hidk3jfNUvUz6Z9DMsnNVKH2KppirdPV5XtdYuimZpLoBmMZ5AjAgF6Vq7ubqeEv4FeHXyyNikk2ttgz3Gm",
  "key20": "2G6uNiLdcTyQaiT2GQadHctLE5YJ1RzAvu2VWWKAzRm5Q3yQgTpSW3meeZUuweJo8jQUM6PLBvhk2T8oqPHdmvSN",
  "key21": "PE8xDiHDjGDum8K12npR8awKU54UYdV8jgbbuvuQQurLyGa3jqomGtxLEH4717VQbZNkr3KgEUTGeJKHuCWxogx",
  "key22": "2wSq4kb1Rc8sT3RPsyX2TCjpVgpJ6BQ38jByPsVS4WLMnVRfrLxb1pccDbhrSvHoyT16nHwUTBGXvzebuvJGxFU",
  "key23": "5DoKXX3wbG2MbAnJBTYP4RiHkvQymytBKnvjXgGJey5qGyS48wy8LSABbJjF9KKGktAFtb7zEuLeNJbptKErbSwf",
  "key24": "3V9BSrkepc57FZ7AEPf6X4Sd8RGnZefF9qJns6vrpd1ak5NFq8J1SdE5LDkMthLEM4fyAwPCmSQA6qmgVasKpS7s",
  "key25": "3n8C8SBhoX4z2DWbdZLxhdnRW6iHtiTgrLvPTme4aPmcquKVAtVCXm1B6VG2udcagVEFXDEQXkxzk6Fna4ozy3AB",
  "key26": "Fekv3RkYdjerzSEW2pD8yacAVfeW7kx8CJQifeGiYmRofwP7kcbcApqfJ7JzMaqmG2i2YGiLWpB4M3F6xZgGg13",
  "key27": "3PsGxV67ajS4Uv9CU6HCc3cjRPyfdCirZUY7E4zQwNqVcvXu9FGdaWEowvo1BZgHzjaMefmdu4Sr5wZaR9MiadWr",
  "key28": "3j48kTY87m3t3qPGFCnK5hYXpZaFX4ByhGPSmq3RaGDe3vPMq4MVwPReG9AEUR3hyxS3iMcZ9BHPT9hNJZwnjsyJ",
  "key29": "3PaAff6GN4bZjcDDCRWmNN6jreCW7rjNj6qnLn7SUgVAWZ3H8dTrwNzbk9JUoMugjuwsYAZYbLN5Z8bV8fPX2ryx",
  "key30": "51iaSkHTXH3pFgDkfMx3GhnPddKrSuFLNXe4rwujMB8fL6zsBTN1Fa1xurJAAcWy1YPCRcSLVo88aaYpYvgnmtER",
  "key31": "2MzGNWXcQu1G9aSFbGdCY5MJnK3BeQpPdQjF8mhzH6se9osrXJJqhooskThTQbZi11yrm3fLvANNg1N5wbLcDA4G",
  "key32": "5a3ZRdk2YmqEbvhE6wbv7jeLPt2C3NDeSSFddVpLCoUFNoTWsat2oqCvsJu7fnyP7AnuYFmw1WJxzygT2wAgYBZY",
  "key33": "671Z3Qrm1iFbWnPicbhbXLQpRLKF1EPJd9s4cK6QRN16KCTGuuGsWch4xyF5MWDwj85Hz2pjnRELBbbrf52rJ5Cq",
  "key34": "22X7LTPfwJK7HvbUoz6PjoFT1nPDBgQoYKqsEEAu5MZ9EifobxGhPNfXkpMUSRx8UDcQUGxUA9kjcfC9emNQddfk",
  "key35": "2QkGGUgsKZfgcjwJWFwpBnMSoM6pKbnziwv42GpCF2Z9vGiD5YgHVrw2RunnSWkVcY5arCugxQEV1z7f8wtRpsz5",
  "key36": "Z6JugDELn2yHVMeywH8mHsyhJaTGLktJYwejC2dYzeXRgPQnaGocARDVqm5MGKz372a9gf9pMG2u4axpJXxWjhY",
  "key37": "2mEmujS1E8mhxaxYoDUUda5mVoBcsggxfrC1taSaeVih19baS1BjVgXcJcomNMvqvEcAZpU1ETmxu5qhnEHPmJCn",
  "key38": "3QJfqqruwEficqcouU55RcuQZY3KW3WtAVp35vS9C2emCf5fmMTcoJm7dZd1onuBH9vtvnSeKKJmR9aMB2T2PfHX",
  "key39": "3B383YvR3oVa9C4CT1KtroeNauHjcB354dP7mp29sGxRxaouWSHeAtfZRS7m6AQbBhYvTK16csr9JB54izSu91hF",
  "key40": "2LgMkKxqix33EH3xQ3zgZa5pTssUqzDb6eQJUvbeDVuV8DzM72bXYmYm5JfPCCjpHoMUrqRhUSduKwcmevCWjL9h",
  "key41": "BmAeTBTr7JtXxAEBCidugxPzyjh9AnyqSE8hFDG9mb7oJgqefcdAynn3Rv69MyEea5ceFcPWt21Zoxau1YEexSX",
  "key42": "PTVcyGg5C7s5EVP6njVF9do422xXyWjZcHZYPZTkxVyoPo6qmzZg4247PqUr1MuqQrEXjYZMTe4eV5aH4k2RSZa",
  "key43": "3cMxwSJz1gjzJxpBxMPxqK4FuH3PSZkqev7vMednfWcGDypmYdfu63cZyQ6HFAEUctVPiWTK4KJ7Ja8SrrCCqu8N",
  "key44": "2t69pzwyQdCA4fTgdPosGWZDSRUoiVhe9vzGCQAswABH8S3Syip3TufkHC8ckt2KxWh2NpZXzGcHSRoruDiV7gMJ",
  "key45": "2JQGS6SSK1b4quryKjp8jPLyEZKGw6r2z9F9vZRhKEBYtUkfTtdcJTvmCNFNUeqBRsLfhhLe7DKLG1DFbyLTdHiN"
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
