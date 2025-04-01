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
    "3PoZjhMGzabPWprRkZdAg4tJdaVKCYJVz988tNsKSLEusc6NWC91r6m5Y7FJVbirWYWBZ4HqP7GrtSTg5TVGpLUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZuMcBVpVs4rXNfcnTQZBMg3j28mc2JHL6AowRyn2dizPv34QXqFAUrLvNBeWJKe4uoCNLrswW3y5Ws9J7hzHvg",
  "key1": "2hF5jmHnhJa4gB8SSS5nfwHvrgyqjZW1j45TD21FMzivMfDiokHZoAGg6bRscr8AB3qeikkvwKXDYEjaWqjTkHL1",
  "key2": "rTQWvHiabNfPhsZePebynATjTT87Hxa8hiKj5A5SALzPcgXdPhPQcQqX8MVQJXrzTTJvGh3ce9pwF8d3jTAqT6Z",
  "key3": "WZ1zhAtKxYQRGErLtLR7KgGe9hqQWzxuMHRj8AUZSBcrTBYxWto7BFDeCqTbw9XChLy4PxSfJRAfho9JvxKAEjZ",
  "key4": "238sNcAV1ssecva2cpZgMhE4DVjH77DKdGNSKZD7bCv5XRVno578zkdxNdYuGKjjZEmFFWJLVqYqr8VWmgMNxJfW",
  "key5": "5mYCkmxhkxCPaSxeZKhWutyUSdLeebL2kg1ggCodDu7ZqyNm3i3ovuN1RKkcKLbB48FebGRysqMWTsnnZRvpXdcN",
  "key6": "3L6ACFSH66n93uAxW8rWuMNsZmCgSbfotcSsBQZiad8UFUZpLdBDbUoH4TpdCvEucJ6zYy6m1iKfL7JV3Hhiwdsi",
  "key7": "5c9n7DNm2BHjcniFC5bZfhNG9jBv85MLQxHERdu9hzdJxboDgjChNXwcdZGd3NuyPXJdbKEpopfmQbyZYSByGYiQ",
  "key8": "2pSxhvWG3TtCcSrivCXiHrRdNK3Vj2kRfj2RPuxGviYk2HB8zzU2kX3NXvbt5v6H2Z5jHXDrGt217bHLq9tb9YCu",
  "key9": "3qiXxXYsMgs2XqZGGxFRp2BZNiRZBLyjcDNYSy6pBem8RYrQZtTUcdCGCCKcDExLJegA3dJDi2uhuyv4fJaWN4gC",
  "key10": "3QonTPxWFtRjQv68Ba5WnqTp5vLJnL2G9vEHnUNtYg3i1bBwnoxptqxkxHZEE5cnTccB5spKXVgfwAc2Lurev3xL",
  "key11": "MdpA745QqAp76pZ37Vykea63Pk9dNmGtEDBcmynhecWQ83iDncQWCB86pWtGVnTvmLsfWor3TiwxktatZ9bg2rB",
  "key12": "4JdcTmYbhHFXLeVfPLXBERfMJ3Nvs8Suq8Dw1NP4Cr9cepfjaEggZBCN9MPDKtFGQNcy1VN5hXWkdHVpby1rwokt",
  "key13": "2ERXZaEgiwQGNgC5xeL7Vumk7NSwYjoPzbTGG13LAzUawcrjhiuZMn4uapBRavDYzg3AtKMQvfq8fpRw5NeRjK61",
  "key14": "57zYQUbceXyCCYbx8jGrtsXw9thyUeTbuNpEPRM99CMaZQrcLDaRgDLXyJMnAbmz247kyLNVGa3CUomEF29R94Re",
  "key15": "24bMWz9G1CYmrDvFyULbUJ9AmKv9ubSXREqbah2CwsZHXFg9eDnFhdt6JDNcn73CbMPz89oHH9Hqj8WPTxNxyMCg",
  "key16": "27yQH7UmyTktoiF3GNWr1s7oDmGunmce9a75mtPUnRFvEnjCzcsbdRTfKRWKP281R4Yf7j6L4zKQHnUAcTCYGeQW",
  "key17": "2W7Gr1ohS5J2HyAWj9GKSeH2SC7nCUtMykEuFgz8mwpqb3kmR8FPyEiicTfr3bdUiptdbxPccqEVJBaBmGgghEeF",
  "key18": "32WRNdf53qs99HzznyMvxznW6Hb6gCf6zerHJk839JLg6FCuFZcWi7phfy84AVZCdz3yonExCdimLtuSi2Lqm7Gr",
  "key19": "2GDZkuZoidPYJDSzYo1Zu4quPAvP8jCzZDzmHQwyD8QxNzLPhx3fnKpDm5i2Nzj2bgSaBtYmDrZXVVg1Gp3cY6Em",
  "key20": "5RE6Vk2r1CVVxyp8f9dSX1KupQSrmPKg6eNKmZR4C5H15AdK2BRukTCgmMSVvJwY4V6Rx2USKRHQMob77e5W3cL5",
  "key21": "5zH2quFGvixz17JB2bwE5F2MLHfcYD3nFiXzQUdmThm8x19dW34By5ND28WHV7jtmHVqJDaPvCBzbsrrJnj3BeiQ",
  "key22": "5qaHDboGuV44BVw6g4vwoQQxfdXTgVYjrRfzKJt24CQsTt7F52h8jpTWLsxqNocidaazBy669czT9RS4bSxUc9oK",
  "key23": "VXhzMxU4dmYXu5eZ6kJohmZ4S8Gdv4PZU1pds5LgCVpAqpABpk8JMeaLgS1fuDLCJbFnxa6T9WLPwL82ntqmXWi",
  "key24": "SE3TUncZPbXwyT85vxr7KdEwXv22LrMy2x1RpRkUeMeGywaCZKakJPrtkCRAsS4vwyqaeJ7dokEWixD8v4o41fE",
  "key25": "5tJhQZHBDn2Aiy342QhS2pb376HMXgQ5f8K67MgBicWyuEmUfjmHksiXZXS8zGsSa7uXe5KULZxgowzpXfn4eVcY",
  "key26": "2qCnVyAWGHGGTQPUZhpbWhSu9ycXkJyCxuKwD4jMNsmoSwq2aCuRGDhto9U18asb7NoJWmwJm7NoUpxwv5JCGcu3",
  "key27": "3LrAEkMRFmbDV9SXChVAYr2jiqkLKBDxcJQBiJ2FRBnWR3RNm9Z81aSCAKo6yeoaocdG6ck4pdBC8YEpdWQtWuj5",
  "key28": "5Aop1t6AA8sHe3WQkyRzoAdBKAmpuMmGtuarLtu8QXJ4awQgviq3BnBM6eHaVpkFGzCgUDZWojJQFUgWJ8DvfG3r",
  "key29": "3QQr9nHXyv7Wn8M9wL5tLxbjYyc6GmiR26cTVuKweK2HQppDTgjpUmhAhagrez2rWxBbYfYdzKzctSsey4fVCnRi",
  "key30": "2oyUBp2MocxaDyovHkF2qSfTU1HhmuNPmyiXiymfpKvxFWh5TdoYiQfhd6Mnys5eXJqSuQ4rRxTmikHGycggtfs5",
  "key31": "4BCoewwrPAfHVBTfkJuvbVAdK6EZJzgXCWoB7UWpC59QEBDjbyM9bVm7PfLp7TJQSjg8aKzBLYc2VSEoUuzcm2og",
  "key32": "5wbopw9fwaTKJgwNMcWQ1JvFuRapCaLYZvyEwLLJeHbiPAX7QJsGzApWfnJEAnw1heMW6gVmv6KePFmUetJRuiF4",
  "key33": "51GWir2ue9vkF2yvEwM9fwy7o5Yk5fScLRm6Csu4MuoHEMop98W3iZdYXdmQtkxiDs6LCqJWemBmVk2achhVUk33",
  "key34": "34TYp3Wb8n7Rh2zb6hmNW3asQQVvPqca3EvXHSUaGfFPXvLz7WqUz3q3vM3fEtXzsVrpmKi5ghAsu3aPU1hojDf1",
  "key35": "58K7QkFQHWZ2JBmMVEGa9QLHUKZFFenfcoCkn9pyJQRnjP9S4UhJttjZFFYyo4Ujjdn48SvFsM5StaZxkFg3zfck",
  "key36": "4w3AXWoDZjMuNrhWibEE7fm34RuTT5Dtm6ns2M4f7oX4tjuJudt5FXdrqVWKCt9Q5VjBtiFMcQ3N2cxjNVpED2Ru",
  "key37": "5HtuY64yUe2S7adAyb2idW8797uEd4sTG6mP9zwQ4UbTmhtCPYLARnHts2Jt8nPhrz5j9w6LJUkusePkF3Di7CEV",
  "key38": "3xfEvY62y416J9PpBMTdK9BN384aH6iEZZBKSStfDRyRvHvXSfiRipevBrpuwbNpoK3xamWLT8W5ndM4qEpwZ3H8",
  "key39": "Pd8GJg8anpwrZCdgTnXGm6ExdSyN9WE167vrxPZvbikMMXgjE7L6EeFwybaScPam3soXUF7TzEw7hWee4dK5B2X"
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
