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
    "44a8xeCoxVdU6TfLkUJRVaNdBQdXQx23SwCCyMZwNRoL1d2gCKXXYrN2usAeym37eCgBZFADLhRQ2anttHqihpki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4bdzbN33ZGTyeTVZKDzeVTivUYw7VtBcYEgyLrDiRA1JawAD1WNYbvyCAFHDcs4BpiZhsr5XEVPJs6Wipgyw37",
  "key1": "2Xm9BkPJiKRMdd9DwxFXPZnYCGrYshz4SK8DmUUJBpM9Ct19YGszn8huNwiuaVcx1wQBPQ2xUrttVSSYc6CspFGu",
  "key2": "3PpFsXV9APbkAjnp73hRbrDPBRSQ4ArXzYQbXgNPszEf7cazdDEi3mgHCweQiALDrvPTbev61G39Z1oSLpjzP6NR",
  "key3": "22u6AZxSaam8QK3YZ84SP6KixgSNiMRkFyg5Bu2jRbZBY9qkLdpKfUHiwre85N4oKnSyDneNd8Bd6g1KtVLc9zMJ",
  "key4": "2Srx1wnvMYpp5168aC2n4KmCTqGoo9FTJmCcWFu28nhBfiUQSh8cEp5x6fnQdUxBizjLtn8Lny5UszyedERc33n1",
  "key5": "3Cude3dUb8HRPQZhQH3wmEL7zwUojbhoKSDXJovtAnrUarxxebqZ8VQkdJyaVTmXnqUht6uAC2WTBMwZr526GqLd",
  "key6": "5kShs6rUBJGfMgptcFA9UKJTTy2Vem9ZsQV1s7EEqSQVc51Fa3v72KEyoL28yXpErUZPPRFEcf8osusokiA5XHQg",
  "key7": "RBTm1k8b8nHX6cYetmzxtRKsTao6XegvjxGkvSwsiamiyJ3kj3UDumvfJo3FYrU5tgywQQ1oQsaMJdKGwg9eVW2",
  "key8": "2kMaBeNzFdHVT9pDEv3KU69SDz5bvYt7C1VgX31iFCyAipwrtQpr6zvURpVd2GMF566kkNtyWLr9whFNr2XRf51m",
  "key9": "uMcijBDnN1xDGrDqWeo2BkkuYrLoi6sujEXV94zxe5Py1Eh9VQ7efifxHJ3G41XuMJVXPwy3RsCWaRvPL9AZpvF",
  "key10": "5ds6PrcFREATd5QotpFLdDBnAJUpAFHdry3NH5FE7r1asBVP8wDMVx8vb1mPUaC77yMKh5QiYTY5ZCDnijVH14nr",
  "key11": "5zbM4483bYVyWciqA4Cmp4WTMjaVCjkBMVtFAmN5QyAGt4pWY3iwawRjGEE6yvsn4697V3W62CuUkaW68uRwDLmb",
  "key12": "pRT5vUfgy3DqWMVeDmdHxQgbF7mCc6pdLkx4sBKaNpThrShyHd73KogJ7BWf4jF769XGRUFxPu1QKQ5E5hWfwba",
  "key13": "4iqPTFktyvvVG3B9Jpr2ByQKjxgxziEMQZ9es3RCmKcJtxwpZLWXBTV3CrbYi8Ru4BUi7x1m44X1U2XUK77Ca4az",
  "key14": "3iSKLib5mWzv948VjbR3a8xLPMLZjeVyqwx1pEa3WC15pyk4ToGz9AB2ESBZ9DeuPh1zg2JT47uUV5nwv2LfWjjL",
  "key15": "2GpigcBzD6oMjMh3pyvSAVJvGkLREjP84aAXqpoBMxo8SnDPSAsyYifpzpXrhhzsk8HTpPQ5h66Se7E8XFpk3zga",
  "key16": "2RMQowCoNBvgqr1MqvNveaBeST1rESXdw4LsGw6xRVHM5PseQ3fueCzLUBgY8422AJ9N6fGqfkfeWYFAjf7rsaKm",
  "key17": "2da3NGQQYTxACAyV7PijAS1wXLZQbtCgmcrS9CJkfPMyjgpWYiB8mSN7CCTGvdMyWzExMoMKaChJuLoTMTAwx8SB",
  "key18": "3KZf8bf1aJwxC6yX81vXjx7n1y6vV3FJ6UXsyiafXWKVzt5EmmiFcvtEJ7HFTxMFWpA5Sxxpkn7nzLcBYNQbMmfT",
  "key19": "5GfrML6TojZi72CwNakXJSLrgRknuuzheSpXzUHfcYuHXfzJATfwFJ8BJDKunNyaTyUf1PdZVDCpWANE3twSmNTn",
  "key20": "UkqbLp3Ta9pzCqhHta5zkeHnFgY3HJVoXipQJ6cTwXvHnAAgaLuuYZV2gLCaHd4XxmUdNpa57cWN5YsTr4NQNwD",
  "key21": "4Yjort49TnKEi8KfuKcUxL5heznNmzZNes4s6h5D2pWdABgVVTEzwgofqQwDp7WatYMDKvfqBhBtqPBjyZHkZ7Rk",
  "key22": "3nyvCjujJrqQpSK7AYyu6yDotWBiru6KDsYM1z9gvjVxqZoh6aupVt1uDXgZkympVuConrbXGgf4382DdDmsZxoH",
  "key23": "35wJtRggyGU2yHvLKQahKzU3UABRFwgTj9b1NHFcNnHLYMjgJPpdAoZm52YQJNUzTkTNzLPKxXTV5sEPecqfsbcV",
  "key24": "4WD3yrxgWVjbKQEYhqwfX6Xb47ZHakdUnVG4pSUe1ZvbCKmqgUMS78BneeGm2sLHtzuVsjAeHkzzZHkab6zSAgwA",
  "key25": "5MnGZRti7CvWF1FFnfb4E7qBNy8SYUpjmssGi823KrKE4aNvMfwjyDV8iDtisjQq3XW7hPAtquuyfs2Z5sYSEQqG",
  "key26": "3VzRjWDUaVBpJgebVkETREmcGyZgeEinnppXgpDHhnm5Lz3ZpNjtQyBsd1XqbWvekMJYhhGjxfpQkqGiHJRRKN43",
  "key27": "5dafSG8MPxztcBK9CwefjdFkJPvC9EqAQdPAwkjbvGqB6CPrtUQarzHXioDur5Mh6mZPkAqpHRwB32tzJ8BHY5zU",
  "key28": "3VJ4fSr4nv7GvUXaxEVSfEEAnYFo6SuwBFT6znw8CsUyEgckMBvs4BSBHKjmhm6zGqTvjMisSJR5f6t4yXyaR3YY",
  "key29": "55iVbZSR4PqMVnnedgLkBq1ZnxmFpxkskCXawjMgRpk6JRz5MfXNKbQ9s3S8CNH3sXN9w8gW3rqraARDFH3xsBVZ",
  "key30": "27nbMxzxzM43xAghPW796mDaypEZsW841kPT6xJDWpA6BU9Vppso1y3AUZMCfG8RAborGyVhwBBSJipZZra86MSb",
  "key31": "3Ztb7maRPQzBxoFkzimnqZg3t15UcXnGds8bnuTm1ioYCWeRDveaAuQv3hAnphbjrSDiRo8WafHAur3LVrD14Dcn",
  "key32": "5G3nqzk6BuaAuCd9YyJ62Qzga9G3bAU5PBycib1Z8MUpFyPfJMPoQzh4Qu5PN9t1hbgfBmSBom6LkXoC8tkoBX7m",
  "key33": "3FcUiSavi4hVmbN3iGC4Wd5hmexQGNS7myKrnyrrfYMKVZsuBdKnhv9VVjJ8d2ykChM8vDLvhv9MFXRi2ArY8PMg",
  "key34": "3vepekYbey3MnFU9XYf7zc2tjbosRzrod68ovwf4U7K2nvWpnVquRsZFnToFa2WNREQhdtLb6YEqGLDE4rJkFbPv",
  "key35": "5nw9k8eDG4yCRrCPygivkfWr18EK5fgPNvP5Dr1CR7P7UsjaNfpgNZeRJ71MoVRGFcm4txyrAbhzasYA7AsqazEg",
  "key36": "67n1pJgtRnMmsizxZXEJCLtt7rJmr7Eipaqs5noVbr8w4Kma2hvtjPPpypCtFhq47Ci3T5EfxMvNRbGChWQZfTyx",
  "key37": "4wSEBJKAS48k1dhBB8q59oTcayGzhe2n4mRwJGyyrwzEx8BoJRrYonLo7BTjE6vbD2xgn9DcFiN7ZfVwKj7jdyjo",
  "key38": "2ESAEFFijfA6H7YtLo1PRFEtcfTbtFMjtAiodcfKUykKBnSQsd2ay5QjtcWNPy5LPyZmbj28953DwYpspajocndD"
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
