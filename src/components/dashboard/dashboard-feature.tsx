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
    "4xM1xnjNVAXQek8c6JDKTA42F75Pm6wpPemcPHWQADyzQvmq1JbrowwNq9vCbVcFrMqeP6QHNYtbKQSwuKf8M9bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMZA7f9WgZdX31qj5FaaTcHpwCqX2UAp96Kin1AnfJ2ynB48izdmZDse6iZ3G2rd5MFgkcjWEU6GMEqE7L3eBcS",
  "key1": "58WURdBXQfqvuCu3qEGuS697hE5d6ck36frLCGgLTGdYvufPgAha2FunJZcUWVg6RqiarBd7Gzo396jdggizc4nS",
  "key2": "5xXgn8cwE8YUbGvDULcbyi27Efm9fiCyH4sAQyCib8bi2ySvGGH51BK2ERyrv2KUUCW79tPiH5vrCVPRLR4fXZpp",
  "key3": "3yexSd131dcxxRdpT4uPVQ6kWivLEJhQTHz7tDAY9jV4gKct3XznnKhcuRhmY2JuaMGgUtixnjH7qsaGn78XUZ5z",
  "key4": "4EXbF4RJywsQfkaUJMixdu9sEVnakZsGQmVA3SCjDYCr7EuMxx9a7WJQCAHfwu8pQqYo5pR5roh8TyKyprtY6i9v",
  "key5": "3SxBQ2USdenxjamRAuquJqbDBYAe3feoYVqiMKyzbDFrfHJCTMzKNzKTpjfbkznwJJ6iVn7trVyLZTg5NLU3QU1o",
  "key6": "3487KvpvrAvcJb1p1Nc33S3Ud5aVWA6YfazcUWiRhVgBgw8ZzgJUt8R9GgtiaxgExLKe7HpeozVAc4UPiyCTy1ui",
  "key7": "5czQBuHMhV17hMJSBFiQZS3zySz32ZiSXvTccQYEa36oc79CSy79cYvxPWGnEx9gF3PmH46ZLVfeHJ9cqMqQ5cgk",
  "key8": "62SvmNbWQZB5bq1vpWhy8XzGzkeKibBHYHRDqe7o7TJ1SGCGfKLKNs4xfE5VAVum66XpiAdnZmqNpqQzM9QYkfig",
  "key9": "66bZLBcPFeKJrRNLMY7vQdqkUyQwJCVeznnK47Jd67org3ZaPmcDUuq8Vf1xmxELt4wV8AdtMZmpmgqzrFt5TfzD",
  "key10": "4v4QN6EtdaVCLeRD9M6D63TnL4WXGiAbzxf4hfKghfPAM3Qgbq8EggbQrhwZVkUscWqLJpBhVYbX9EjPm4JGCAt7",
  "key11": "4qH6ubC4AwaqBgHCstEoqNGhopZ92aQX6whsuniFsn29r64UzQfxEkFB7P3D94mtj87YV6owdp6ce5GWfxymZdr",
  "key12": "4btj4GQZEX4gpWhQcQBvAbjMDLDTrUHFYZet1ufjYjtbinxwmJnWf6UbR1pWSGu9Cyd8WCFxYfWxKnLnkr7vqXqA",
  "key13": "46bz6n8LpWzF1yQFeW5yovE8FsAPXEoMod8tG8zV3nAcj6NpWW16cAFqYdL3siYXcrppS2LsxGiQS4uAAS1NVs8B",
  "key14": "2NRkFb4gQgtGqTHeHz4zJsxNnaKvzgR6SdGuFaH8GdFnZ8x25Std7uyQiUQetzV4fyNece4rtXx8zjTYJePDEGy8",
  "key15": "4eTj95DH4GxBBCStrZzcS49DtfNWVutSVuZ17s4EjQbnMAnr4G2UeVq8WNTNxUXzX9N7w9hheCk5nCX7PymreUUv",
  "key16": "2JMM5yYVQtyEcpu3q77JyQurrdpyd3WggsZAFoExdo6GThnhhka4nUFzquXuwkQriMrRnW5sgKT7CBLY57kMPzia",
  "key17": "2K9YGARqbJ3Ws1j7zMJ8QLBw9oosjnt1NKJNKtT1vRxX5PEBHA3Ciihz2hvATEUqmJm7jxeLXZq13MSaryM3dxmj",
  "key18": "5uXzrsJPEnihfutD1QE3DmEb2jG5GkcQMpPMKzuGVvwwZWbv3YxepXPbDh5tFpdbxhpSu9q5vUYySSQQmTomfSDK",
  "key19": "5oXpkwWu6m2yqnLMURusncJnPBZzF7f8dY49CNk4HuXjJEUiTgymmqf6o1iwR3mUJzkw5jhsLZcoL67UcEXfjpJh",
  "key20": "4curJPkK6Yadfd26cqviKMrk7twGVPJKeWwngqABJ9fKybXZ89hLHDdSitB8U5aHL2qMDVR9aeH7TZ3mJVbAykP5",
  "key21": "s9c3A4T35NCbmAdmejZUwdH7PcjBoL2wFhAHDdARbP8rmhtNtzwJT3RvPxpvAPUU7iUrj9YAuZrrVoFxmbpv7qc",
  "key22": "FPo8KJ3HGWRF8RUrmZqmxYWKbGMrPBBAPYX9nxUHWJXSLHr26r5HjqztK7xpdVE9fEYZt9k31Yv9uG7ppuQZr24",
  "key23": "53LKqe4fkpqLQpbZcv1V58cNsEex3Yx3FvvvtTZGcnDvfXUMenQeuq8bHojs5E5xnZAaezZS6SXyvRsv1CyAKZGU",
  "key24": "2w3LZBskaGfRZ9ZsCRuKUxKqsZ1Th5yNJWJPWyfUurqpptBpNYtWDYJZ8xPcWU42LLCBPupgMJnwupdvp1bNNfkJ",
  "key25": "HDCgHtm8C3jLDz9PXjDeMzp9cyXAorAnrDjT9La1tuFKFM69t1FAzLfJfqkeP8LgYVQod17AqQCoWV5zgLwbsWq",
  "key26": "5s1PgqWzQNBKNefyfzXvtXPebXtZiZhC4f8NiNXn7t9cCGpQBKhEcieEXi5RFdLsCtEw73P2EK7nQ2nNKcNRmYFG",
  "key27": "7mARZHWQvsgk6iVi1ZuEMxjvnLcnuCddYVG71kKzV7jwa3F3UmhYWu9QVfq9BrKwcUxhcLsYVWj8DWQt53ngzAA",
  "key28": "2AsNqS28qqfWtzgiK7cVxSEjTouur25NgSFpF67yhHsaytRf6PsCe3fTssVEPSbiCevx4b9rZFkG5E3wWELWPUf5",
  "key29": "44QV3kWXzh1sUUYZSipXpJgWnautRjyzyEBpZ1uS3N8XxxH5t9xdKM2pQDZNNt7RQtf6xCS6WkotSyUmoxWsBobH",
  "key30": "4CUtcphFWvgiTdK3qCjXs7r8UC2xCNVwhmtbjYHLA5mkGXnHcCeSj3vA5oR3PQdWKVc2HBRoZ8gJVCjPEffKrGoH",
  "key31": "4qaB1uag6PnKQBZbB23Zg4bEbTeBagHFraeYBMgo2wnaYFisrNq1jGrYYGmCwQUM422ni2Gjqq21rg2sJc8MHyaw",
  "key32": "48mt6YDrYSnwWnpjGkWHsLGqzev59hAec9sZekgeyPLF7E87ysuHNLN5ZM9CDdBPDSn7rM2dALDLSCfyagn7D3Vb",
  "key33": "DyvQ1BCFxyNBgjNsvXHFjMKreuiuLMTsWtLG3yG6pgKTssWtgEyLRiGae6UQyR7vM5CuCzUBRSaRUUJfPSkAXWJ",
  "key34": "4KGMEm9Dx8nEL27CuoEsRj6yY3kJ2X1pSV6qAjmaiJieqCvTCGgRbwndRR6x3XHzozJz9nEPzPRSq51hvzsbGFCM",
  "key35": "61JCkTRkHSNP2xu35NidED7tpBg5Z8Dj9ngamct6vsQ5ALjxbsuT4egdoiNfXdYNdaEiw3dqkC2yt8Ji43ztz1Qu",
  "key36": "5WbFchBFxFkLNY9JWwWGuSfZkiQnqV5v5d6tAYTZAhY7GnFaggtP9F26haq3XaGBVrEWAJFWFiAtdWuDfBePniCM",
  "key37": "of276tfL13ZhmEQaax2mXQ3t5SCCYTBZzyqu6m3DfgXmBJzMV7B9BQhF4MDLWh9pfiuvWeZUymkC1crPfqXjub5",
  "key38": "4iFjfpje1ceYdhAdvxibdSWddxAqkXJz9rSxYsCpdaPJ69VGFyz39kU4jiaimaSSPDpccWXdeppvSCGtkrsRcc96"
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
