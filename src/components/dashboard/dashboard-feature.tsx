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
    "26BJwjAekZkbKmsrEGSXkeHZVKMr4AAs2yp4LzGJRsXNfZzxuLGfwksqzGuNcsTsrb7gz2wm13hGdwi6HFG9FHJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRPECpsNe2jvnGEUpdHa5AfD3De9LgMkaVXAimNsY48ZDu34JJFqNtQG3FsuwaaKYh7SCkMPkT4EHsFYTtZe1Te",
  "key1": "UhhdNt8VkTNe3cVWpNXVEMWS84BSxp32JjUaY4hPf8H35ZsZBwqkqkTeH13PBMnrnms539E1JyU9vVuwuXnNRba",
  "key2": "4YHxrBjcPgygSDx1MkAu1UMHZePDfN8GU9kHWNjskRGBeDS2upAfJfEZcDxbzAga7oPwAejDmSGtceDiN7FxBdDL",
  "key3": "5UMJugkxoV84wvdM8HQU5sPmkvRhrPMtEbzv2yWN3HLoaKsSLVdgjotT8HqPFxgowfiG1sQgGPF2kkuxfPh3AdKK",
  "key4": "67fJKbxfh7c8jYAovNL7AmnCdL8uuJzEKN4wDKySuWbTUezpm9toRo4XbC7rwB45QRoCqumcy8qXMGRa5PEtP3vE",
  "key5": "imJEcZ5FAHkwPCpZcAgt9mg1jjbrZUr5BWTZTeDuCGm7Jhsro1qY9tsfuSKTv9dKfiXxL83Kwtz4TBN5zP8gfAV",
  "key6": "5C37enRZLWRbScBH5KLGJDnQ8vocvj12AReBQrVyK1E8XATstGJfBgbLwCp63rLy1rBCEdKoZm7JatJnvNTQEMdh",
  "key7": "5mDj4VhHrpAzE5eeAw6ZAXuASyQRsoXD1mHUeBVKZUSyij8R3yktHbqSLn4iuTW8VEZKfQ2ZsusZi6Ju58VgQu8d",
  "key8": "2wZrim3SagTWrMURzErbeyNkeHAxPXE8pKBNYgUWpvBHbDCmaZ6WtdWT3Sos22AgdargbsUGPk4WdS6KBDSaYj2m",
  "key9": "2KTjhdwz7asmtVVnYjqnDbMmMuFrbjLfs6EYcCZMuD67JLbMhCH8W4Y3BQAY9hVR9Jfi7xLxce5MuJVDfYT9oS1p",
  "key10": "cAm2PWz1hVpwrBTrB2SzeEY4W2afMgzxe9gTZjqrnEq7zE6V4FP8MmZ4h4cfi8CMVvxiWaxxB6E6FHs5cXXinrL",
  "key11": "2kKRrjBgWqKL7M53fcdEX2VwyNMqCREuM3E3wenZqWC3zx2jfWUizfyX6XH2jTifptCWbzKi1eQCg3eNKowFW5t3",
  "key12": "4Hox5cc48nV2N9cC7sWs7mHd83e5vzbhLetn8p1sxNn5gsiR2oJxdnhZuvW5n2GXZbVE7JUZ4bCtLsjmEHfKSpGt",
  "key13": "2GB4h3HiXbBNgsXo3SRzmK7tsisoMoGTVqQJurdXvfYkeNtuq3537eVsYVgeYuzUoRqEQ3Mtqfq1vYt7R7fMQGn6",
  "key14": "LV4xvCqGamPsefzLjYwQg8RrFe75DeNJhKPrAwXkHkCA2ru6RTwFvrg39L8wtYwkVy1aiEuGJLZZzAF94TnHpVe",
  "key15": "2yXLjY5QcsfSey4ixA8iDD3NYfz8dZF3dkXBvezjMEmtBuQvKw5SZhoGbts3vUqZAHSe7pSp4XUTGAjBpq7cazcc",
  "key16": "4XZtL2ELQHKHJzZtj7ArpMoCSip2wapHTJzhXHTtVS5Azchv7fVCFwPDAkkmmy5E4RoMf4tggxFhqGYsYPuLVpmm",
  "key17": "616hdfMcUUsbRCMPKihMFkxhKKmYcebMBeD4sUyn6mNSW5UezBDZhW5Hio31JNwV8JBKNHeX1uY33MRaomVhR16L",
  "key18": "5dMKfdqtRuxJj66ctHVqcUxNabz4EP7Yoo3ShhxiZXYHsjpVARCQoTgmEmd38i39CMcYT6fJy38z2Tc8pcwj6T3V",
  "key19": "3tquXeJuusYYVxHqwJbw47UrmM4RFRcZL7c8sr72UwcyutNjowVhx6RTjBJ37hwApvXHuL5SWdyd3zzKGGgj7WHN",
  "key20": "7CtduREgH5qbzGXQLxjDT4SS2AVKJESzxiKthq8X7eRV14af3iSd463tdGkX8gERzg5qymR9aGfoFp8Au4XJ5tY",
  "key21": "3ieB9uzcNEfi6ZPafVrc2Fka17hn1zBpXsZXy4VyVdP3yfP4m1Qj37sUjAzMd24azuaU6nH9gjpKNLbFA2bbXmHH",
  "key22": "3ms2y9F5T6tVdmULYWX27EwSovTRMWohhEtYnWousRC7DUSWkhDejwtRhLneQHkrMNGWSDg9LDdqEeVVR2eZFQN",
  "key23": "4mBZsMT6Q6fwuNRTzZLiVE6jLaw19cDP4kW4wg5J159ekTmPk3np3XtFAuXD7oKwpnVe1Zw7PxFQyEkYuW8VY1ov",
  "key24": "4rjCSg4FRtbCaPHTaQchNHoo39q11q6LVkP1FuYPQKgQdzVGAmffoUqioTiSCjycAgN9xzKxDe9bnqxpcPBWc4w",
  "key25": "2j8np2pwzBE3EeNtMaUvD4YEdHAs6XsGYtdqxKm5ks59ufSzjghcBqiiQxKH4nzFvBe8PWY4AAyCBbPCWJoy7mSH",
  "key26": "3PPE4qNFXZmDsqZPfzvBKmbgV1ci12S7YFeBrZgbfChJye9akpx1cHiRTdkGV5cqZB2JKjvoxoRYaqPgSLNiZ1rC",
  "key27": "4vrg4bLv11zxTg76GNZaZdp25uD6jBDbA7JFGAgJCMYEvLHNr3xzKt7AAs8JdidaEKAHMdGdLam94ydUzVonPGBo",
  "key28": "2DbRJrEV3XrzsuwJqk92hyeguj1zb9HUMLi8gdJMXp5pmw8hdNeELmyDfaMSYwS9Bf4YFTuyYuCR3v2ohqUH7PeZ",
  "key29": "5CCPrTMpeu2EERia8dL4GFoCzXsqjuYQdz5SRMnWFwJVqFGnwNjj1TTtiRZ8MV5YRPbUsFaQiA2JxroR46czNjke",
  "key30": "b3zWzqPQhUrx83pYkC6pUP34DBpjNwF6qqN3dgrYXHKfR9FhErSHtHLCd3fwbXqm955p3ZRY8mAFH4hG3GCWLqz",
  "key31": "5WmAZWVbZ4rxgCVQ5oxYE54UYGWGW8bHBA7jA9zd62LE3gpsmP3UsM7NffPyhARz16A5A8crRYNdyRnQZUssbnn9",
  "key32": "43mGJ2LrHpGaG3eWkr8bNd6qHwzMETm4kN4YeTfJ8cs6fyCujn3aareDNMWzmqTWqBFQZ9WkHiDPeeBM3Z1vQMTL",
  "key33": "3WLMLFC9bvwraTZhrHxwJvaQ3nYMzeX9E5JwHJHYVUwUaNzu6X4yzt7aNNMZE3tZeAya5cvVTi468pQnKzUM8QRA",
  "key34": "4WQyAPxWkYZHc7E5oct3cBrxkauahughsfNfonjW9g2866H76zHY4TxrKYiAvCwRZJ6LfmZaJcGCyf2UH3y867tR",
  "key35": "4SfUtKSQbaJPii7pef2Pb6fqabfNfWJtQQo8gpThNpry38KELmE1mAypAuq7JLHSV3tih9X1wWwG9WSGa75Qhnnk",
  "key36": "yGasFNbMsj9cxLeTJjC7H1f1yrccXMHC37gBhZYcVyEHHiYrqcfCevE9kCNiKMVy7r74KkfKNBV1TiDN7ri23no",
  "key37": "325UTkaYpW7ZEgA9AieC4tkuCDBXkNbcPNA74jfM8cet947RN1DtgpRLZxfj1X7C9RNr8jCavLnyuhLkXr4hpQn1",
  "key38": "2HcWhSZ4Rnb4dcChBaGtjHuzxUgFbR1To9Y8QtV2FeKUTDTvUc3aT4DUXgRXUSXLF1HgWyrLwhX8JrRE74Yjskse",
  "key39": "553hBiL5eeEoAH24gHvM4sEBJSLM7oJq7H8P4odMb9XRNy8JrEbJeWzyMap5ngidjnorc6yvuyUPeTWSPaEARf4x",
  "key40": "EGpkVVfeQhy3EGymPf9uU9d5txx8y1mg7A7FYhxk7bPZpRPGL4779yQWBecyHJ2PMXMNi3SFdJhfoAwxLxFus4H",
  "key41": "4TmCJxwP1spKrh4z1uHm2moPyRbAo7xkVT3pg8ZmFx8ScmH6sn5xreZwhbfykvsQV64tDhu4WswLKNLVTn8FzkYV",
  "key42": "4YMVVkrVNQVwdvQTtmNuvJRRi2uj84Lg1xwMax756SUHpV9nktyCzq4qgnCrF7RnSWkLWDHDfhvCmai8C3wAHCq2",
  "key43": "4v43JEPsYADTTkaHrY55cqh9wV1kWFEsBm9CctkxnZRzcVfYdpLfR6r8C49TWaiZQLriZu8VrcDwmVQ7DD1VamAh",
  "key44": "21ijGrvDCBUNCNUbtazWr4E6Y4stYLShNpDLroCPhpFZWVHuwJeenbD5RmDYEmcPy1CArmAjGJFGkjQzWtzGTTbN",
  "key45": "389iV1hNeHJ6UsfMiDCZyichU2dXzQpDpkWnXkHTQZjQfKDxJrgxYqdVoR2Q7CqWQf31B5YB5nJ6o9kd3P8kukK4",
  "key46": "36mYA6XJAaw8bBqmoZ3VxD3Cf7cbwS4mtessetf1WpTTwi5JwP5R7owmA3bFdjzce3Mi5AUrxEM4GVXKcrbLpJ7w",
  "key47": "4s9zsaqSYfU6FKRiCeWPmqdn4aEMZKv3Yso8NhUWaYJr9bpdRnj1Ea3pJgX86jVC6jHBPjgCPkLUX8jqkkd2pu1Q",
  "key48": "3gafUGX9Aunwxn7Kq2QGxukFaiDUnLbxE6s6iJAzjSbWux8vksv1DTe3JjFJvX4EdhSQchs1j6zse2yqcrUKHgn3"
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
