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
    "5rttJexwGZ37KBZ9woT8Ubm6jwz61tjXsu9KMtSD7XxGXHaxQq9cbhm2RKnZB4viUw55KPpTbGZaL1DYd66oGMFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PeWtuJnwMVCY4xVPNDFZvrdHFtW9BwkQsiFWrqnzwxVae43kEbmCRsbAGcQN5Ae4AfdNDdMQQGtQKcRYSBYHxa",
  "key1": "5EET4V7m75QEeAexk9zeVv8HynZHdcv2vRahwbQq2KVUXcRi6YfUGfDoatLtM5UJ4eHS7J5FZVnp6gikNLiMcApj",
  "key2": "25xxYCG1LMortCPgx1ektwJKMFTje1CaBUQQ1X5iPPTJmqa8iti3pBQ81ouE9vCFo3rc4kXTRh5GURBduYuRqz4s",
  "key3": "qGyK5HGL4mDSZ9aH5Y2LLjf1hFNZbnYz9JcHqtmgPgE9QSkLjgZsqpH2nKxCmUgXgCpjRBKE4tAdAdwqQNcExiS",
  "key4": "384nAL6TdoMCZZ43A9mJRvhN26LF7EK77NLemzdEBG7F926jiARmY5jp9aXqN3S5WqFcGSPAd5KGEEFEg1GJxcGG",
  "key5": "4x1xeubiqGQBFZS859d1ftRVJWAVLvnAYJCi8zu6VwsRDqkczkhCUjKLsi8ePEhpR3WvPVydcA5XMgoaRErGC7d8",
  "key6": "3ShwSwNE5BEvhWdD3GaRQwTgccYtqARkdtVpqMrPexCiKbJDFZV3XHJs5ot8JviwXCeUxr2tNkiJ7Hh66LjAGZ9Z",
  "key7": "5vi33R8ejFmepx99aRdjXoRnp6DKHrVrkCMsu949XgJZf6R9HoSgEE2tyjkx9NCFEjUH7VTefEFcLUhhZSvHvqup",
  "key8": "6BP9GBvxt12ZBVaKgZbEoikvqiDiJevMuC3sVGEaN6hQSVtJcSB9CfYiXX9QiR8tEDqtHbk6jxisp2ZLnT4n8UD",
  "key9": "5RHEv4yLt95M9XS1N5ntgkmDQyqsAmiDBtmaEQJGjtovurtyGaAYAr5wmHLBrunqeweYi6fW4qaSa5qjAqNBPQML",
  "key10": "3YBqCjAmzW77w4mMoYEzKSrvtDcfFs9kDG3cyaxBFNDisD9cMPErVcnkoWWa5cjbh1h2UUZk8EyanS6itZE5Yhmj",
  "key11": "5m1ojiZwK8GAQCeAA5PeUrivg2SwQiAXodddcWMtqmCMZCcZZ9RtYk8BDiuiovUtYLZa2Fc93sshWwZ2kD6Ynco8",
  "key12": "4RxWUmWrEaRcNEmP3KHcnPkGRZrfvvTEgcppGEpgq81BGdfAMQHxSRs8UPfJXbaDEDoQn9uT6wQLSDbjhd7zTtJf",
  "key13": "4jWmaqkb5XDH5dP1cXgFMaYtFRH4zTEWDmC9FxCpKMDqnHQgytzbDVdFuHDvWvhQ8UUbZNfvso1cpAMoEaw6GzyA",
  "key14": "3oXia8DvokwCiTVEatwr2DdW2CuzUp9m79xBZgcMSXfmQ8F72KFRkrSVF1Jks4D5EqvC4VK6hgaSfKZon5jRSX71",
  "key15": "2C4BwHQM6HidcMrodacBtRz6v311iKyST3KeL8DTf8tJtkmbeCKvmUX1Z8J5fk7ehjQaG5rN12QfB1r6oLxWJTyX",
  "key16": "MKaTMsZ2ZfLWzYzJf8Jyp4eARcZUFwZfN596bLFNydC7NsF1Nqqt4ejLH1JmDmNv11QzefJzEfEk1m2YbJKSTM9",
  "key17": "5fpwzA6RiKyjxsXNVVhStaSSrvccTSj9vTRsvPAx7K9mWVSAuLE1ZzUj2kPUGoPZZCsCpFj2SC8mewL8jpVQ4mMF",
  "key18": "27YQKGaX2zsKMn7Ccwc1a9wYvH6znasnUseZ4gPzsR12gkamyEywuji6ygjNRMrkf2a1UKSghTf2zzpWTy6PrL3o",
  "key19": "5oz9y45mPmTov59XXibYhhW4Qg4WYnkNQcZhNX3cY8BrQyZuyYu6ti6cF7BDNJEpDET5Bo67TdkFKK8v84j7SuWM",
  "key20": "5MjYPjtWt5ve9gNK1GhyUmSgUtvVMG43Jw33ErwoLLUpQas7qr4cMBBih1RKYJSkDE4nyiVz9huM8sxETUSSugwe",
  "key21": "347rS7xRqbbiksdd2BtUyif3J7JYMEB88fxegAqwLUnTn34izzvDeYNDHwpzmK5qr3JHzspo4KugVxWKpFByyX89",
  "key22": "59R6dpYDssdJD5Wtf8ya4P7TqSt2Dk3Ev3QrGQviPoJUFpZY8potBSifJ5eA21T52SYCqMdXtQCqSA5CcmRnQV2X",
  "key23": "9qpX7RWfUGt6CxR8YXVubX4o9rs7avFSWPsXZbjMevXK5JHxQgUhFsvt56jim14oteTScH8i7nRVzCQsHxCVvaA",
  "key24": "4xi2soDfJyxmTpdrqmRRCjQZLt5Kzd2LaDGxophAuCQ7356Lh2cJQFL35edSgCYiwEY6NzH4gwtTszePtB9QzpgE",
  "key25": "3h97VS6xzg3uic9eywm8qS7yt8ktZFn9LFxUzNKSAxP1QZfpYtmGLvmGEN3kiFndPi3dBEJhZbbTdgsf4pHmmzC8",
  "key26": "53LuDYwogp7Xht2TtAkcDeRiAeFREB3dwWrXcAS9LRtVFHAG1f3goDjiMiVNC3MLaWLqajWpWVyBpzTFCbAWFrMg",
  "key27": "2yNLNm73C96QiVNE3qJu9CGD1aqQiKW3iYB5KPVkz5wsGCQkfR3KR7pApiSLTV75huQMeB33iNTAhRNvQetNvggt",
  "key28": "HHhaJZuMLXaHwadfW9pc6VBTh8Kt5tRryM9gkceoJgtdAii8oGwJgBq3exQ7frMCR63y7ZgfUJ7vATSZM9VHrVJ",
  "key29": "4hv1BWcnAaQm4o3MtyUZ2N1p1w8HksKdYdfpLsEDEcePQcxAfWgiwincbo2aeKNCXfnbUNQdXuf5rSJcTTXkWRWy",
  "key30": "2z4UzHf3QatrPAGGuPivrSkgqk97jf5soxKSo3xzdEmzxn2SQZE2kDLLqt2AWh2VwAdMRMCPcaKgaeVTrAtrv2pm",
  "key31": "5PDj5VMb7bduXqp2FZFU6HJ8Ph4hXT3UUAn3VT81UBxzaCfMJHh22ESfAh9z8KpbWNp2dBcSwshk7ywshvW3Bgyx",
  "key32": "4rwP7EjWvVyPgQf4i6aPmUUh5ThgzxJKPbGnKVCmzbvVeGi8eoVTe9athTtsGmSE8zAxWTubFuPdH8EnNKDLwsoa",
  "key33": "4u2yhgLjttrNwPyHESGNVEqCc2wAAyqqTgTtsiLiM9CaTZSskqdLbUMo3o19onnywHYPNg2agiNqJ3EFDzjAS3xN",
  "key34": "4NTF8yJ1hqqUAnvz1bCaT8SzdBQS5RkaLz2ikWLkqQGfPpPPodXGRiDcmwzYw1x6EJr2JKrNrd7Cww8eVkZYYDqh",
  "key35": "3ptSuEVCXbFdJ4i8nR7Eokh2Pj6Xt8C7knLwnEQ9jd1nzJVZYMywadLtirV6Tu3vsyknHr1TrSKwE4Diusrpn6Vn",
  "key36": "3iAgP1LUShMYAgaCC7CYe2h3mSDTa2n5y5ibEMnV76FEz974mJeeyAM7bWfyDXETpoUD4rv6EdfQkuYM8soDuqhF",
  "key37": "3LV8azN1S2p5F3Nn5G3iWSZE7J98j3mm8szvqgTBbV37QHqvCgBy1EUNyRHbNKe8cx4fwoWU7HwcabXdj3FjUvk2",
  "key38": "5gwaM2jywjaSBJWF7NKhe5bxEH18zzr8vFZSmNqfM5j3xsRpJeTe7qgoBEPGe2SyccNV8skqvJZs6u6o8WJ2vpR1",
  "key39": "WnsezdG1j4t3GhpaYzckW4hZHAr97cPCTpTUubjjzuKrJh8eTvVCwYkG5ouqEbVN59zk1aCZJvbtR8igTzGHnd8",
  "key40": "E3rVNM1j5LmSF7UvzH17AnaT1ogftXbjCdnUroxnEbZxERuCPgoMLoUeRwby4r9gy9SjHBaiKXoA4W1XkToBdSV",
  "key41": "twnPx4Me4CAQgZY2JBEAaHE4YHPWLe33Gc6pJKvVs1tmhT8tT8Cv36YHhiUzPGkCBDZV21spdFom2vaqD9Rsmt5",
  "key42": "3Stmgb4zVJid3mJ9am2kDSKxKHa5aecAg3VHxVsZnJGJ1xHeXP9FstQCdLoSphEWgHkeMLyFK6ENRaTQvJ83vVkd",
  "key43": "2dSNZEQPZE48Dk7nAfsisSMXdGq9NFELonsMWLn4hjD9xWfkYMUtEpdkMqkzzGp9AYXKTijG6tH83Zacq4cVrTtj",
  "key44": "5UDarb5VARPDWf8bLYWjigfKvFik3z9uDzpQXKoYxsXHAQegUiMj1xrGcwpSjDGK9yahTv57BpbJTSojhhre2v1W",
  "key45": "JTZZB5KhqfPXhEnt9yyWHLYEgfSuiBW5Lcd8WU12XHFftSnLUpx1epSQTWrA5WaHGYH75w3mfUuq1zVAVewfQXp",
  "key46": "MHoeHeLkagnDww4BvuUd2EV3Xr8e6Q3vViU56vCN4DvoLZh4tjhaFRZQhYBfHfJ4zy3PUvHXUS8EyPcrvQdiwuc",
  "key47": "2aSo13dAN4HhLqVhUvnXc6M9LwC7pLLwdRDenXvor9gC957N2uqXfxoDoAkwuTYRKjBuwMRiU7Gg4srG1wnufmFQ"
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
