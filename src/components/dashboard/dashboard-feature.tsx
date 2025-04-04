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
    "jELxQXWEtVuK16jvFwWLmsPnwPky2CdkbYSLM5As7uW7X6N2ay2QUtCUAzfu6WaeBiazk5cx7xcvyp6UZrsvQsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgntwo45GS8WE7wLVn5T27TR2Z6J9ezFGGbALvrYH7SuD8i7k19tDYkR8qjy6N6WnSXmCQRZtgdkV4Knm5CwzXf",
  "key1": "rinSh2TfSVVNEJCTPdfCtTBmhPPNd72ZAUjkuXkwTmNRphHen46FuT2v1EMjPsTMFiSzbwX8DGxrDXheVRe88tF",
  "key2": "55poAsckHhqqgPawVAH7LCSU3CWv49G3c1Zj8QWP9fBze3vbRTXaZ3tecWbAh4wvLNQdp6u426Le4GNe8YUFAbuD",
  "key3": "R8RfGD4jeKVw9ksgfcaWXwaE2f2RpGnuovEgx4YWByBmd1rzY3CJPP1LncmsiyiujBBtPJcXzcR9UXsMdahCmgx",
  "key4": "3fMtPTesTSQBSDpn1hNT5gk9PCXpJgzDZHzJorAhCyUVS3rZJzKJoMmz3QSuthJD7vKKXrczKHthoq4q6YjXdtrk",
  "key5": "5pnrSeAnXgrQxd3DY31Jehmmct4Yk54UkZ6XfFt7hgR8W1jcwzpoRzUzkTFU9u4qXBxoFmhY9cAUqJJngxDwboUx",
  "key6": "k2DTdLVzfNaGdfTEVyNRdMYxPgyB15cGDqh4ym9PmM8iiquYovbGo6HgGUjEVcmULnCmRGm1oZk9DkYr9Sa2wEf",
  "key7": "35TSCHVeAP2fiGfNtRhSeKejNKhSCkph9haKDTeFZbkgB47au4m9qKZmeak58jmLhvge7LBYxmykJ7yxGRhstiqg",
  "key8": "Y7fx4STYnXgY4G5C1BQxxefYyY9Awb6BZAoGSW34u2AmnTPufct2zrXXyCjwqb5z7uKPidoq39zeeSszXTfeDbC",
  "key9": "TRi2oe877W2pkByDYzgwsX3fwZvGBG3XAr6hvfemdRJBmHsqYMpW9fRs6Tf5hKog1LoU24EsToUVgYJjBTiVg9w",
  "key10": "3382TZiyEiJRgpGSmxZ5ZVV37cDXZRaGhsi9QGXJz3k3bmNcz5ZT6JDoi5GySx1sP3peBwxjok29tPT2D8h4Ut4H",
  "key11": "36MFpUuW32zdyRq92EQCV3uCqBS7DNVdQwq9xuqxVe1QRkMwnLm3tQ6GpwpePSA4cPFdmopVtnLtrkrurkajrApn",
  "key12": "5sX1TrAjHAg2StQyuaMxN9vrxbC5Qyt6EUB19Zoea3RJzGpFNTJwxAyXjYqPFVSTtub7uebtf3m9SxdwxaVS8dcL",
  "key13": "onRS9kPAjwiz299iCNEEPUpwBN4mNT83yWJLBKWpokQKiuM5gJH3c3iZKSPSm7dusjjTkDghzJ88kSxYbxbkNu9",
  "key14": "4weFnEPmdRSMCdRY4VWyEEYVSk6ZRdzjZJ1ZG1Lscqmt41sLoFH4vU5fbRgAFPQBdixqPg276MET3zNkwfrKnZFV",
  "key15": "K1rU7uA6BZ32kqkeWiEPQmzXTrgC1VsNCFDc8DcLGr5YXq9s2BAnoEAUj3JACKsC7PacAtQmEsYy6AKsTRotnTY",
  "key16": "3dvLStnpN4YQTAPrhZLvX3QAtAmZ8jPgxVXGpbWcT97bJrQKd41k2w1wCsnMys6N5nqZkgHYicSntvkSTVxXeZdn",
  "key17": "2dBrvH5t4QW1E4TcGxjR6zJ2w4gbp9hFMLYBz9yX69eqqDi5YcN5RPxbTBe5DKsWuHwpp6EiQq4MJA3gcWYr4ZGS",
  "key18": "4u2St6aMUPoaM44Z8YHvrLN4Jpa7QDVpcVcqM8J5BeLnuD8E1oEZ3ZMvvYqj3wHTa9jCDk86in7HaM64mro4mYwo",
  "key19": "2A1vbJqTGQmVgBegbN9MZPxJ9et8b5a82euUtZQqCPgyMRxUGbCa9BQXsWPG6ZXXgVUv6tytFnQfSP9Geqy7G5fz",
  "key20": "4kYjv4kJQHu5hfE2pFXNUyaoURtdMgDS8kAaK1rnmcEMwC6rMc6WhG5iuraKZtrfZV7VPUfbg5EKxs5m9Kj6dr14",
  "key21": "34iug4dUb9THEfsRfqRoff3DSDvJC9Coa43tqRCGsfopFXG96tacoZLE3weFGAjnenDN62zCahvaftBYSG56esdM",
  "key22": "3RFAzeLMixvM1sqow1ir929XvPj1gQLqKJ63T7iNraexy1VcDjaGXvqSJJp2Ym66RQDpLcjTNDfuWsYPfkGdLovP",
  "key23": "5iXeUwdivrMLNshEcXKdrWH86EMZ6MvKAhbiNmm6gDPfuV8zg2xkAfhXHrUNcUwsgLW4z6S39pv1achJ1eX3o41Q",
  "key24": "5RJbQejMZp9yyaLdVcGPRyxkmy55eoC3R5p9LfiTZvgxNiUT5dxe69iSXsHmDxQYn1yqZQn1UFMtyrp5VDJ2TBHt",
  "key25": "7s5d7Jke6BJQe3skeB4TU6BGk7sF1yWoh4JXufK3TD6pdb4uypGAm13MzpZZ7xV45AUg8QikDvBHxofAaYw98eG",
  "key26": "21XfNY6nUHfVLSmjjGGZaGY5QX2Ns6MwEsehduiJTEqgePp1iczGVwJBgZWk4rmJCjejeA2VCWp5Kx5f7qFpNQt1",
  "key27": "29Qz2Jgg9DkASJgNGpZ1z2jfoG4kw68wEYf6SRWbnuy4iS5sacTBNwqSgnKWV5xSV3tz9r4Nt4KWEcutcDSKdbP4",
  "key28": "63xosm2udwANf3kuUpw8BBKtzpTXJBU5c7pbJjGvECBTJETT1C9GtxxTeVeSMgfoSjhGXJVcCRGPU9Krfu3N5J26",
  "key29": "5MbjjxYYoTUmhibQ5j9dPWbhNXdGkv9owReX5Hd4Eyh5f1qanumQJsiJZHHbvMkJMzgESfdti1qJ7mAyqPvVQjvc",
  "key30": "42wzatZfGGyijx3jaoGpcbvxxsJhkDke3f9eNSbqD55MXd5Jxd4Pu1mdVMAzGeFoseBwXZzSBmvwbwQ8vsVKaXMy",
  "key31": "4oibdJGWq4XFdgH9qruygtxxg3cAkbRvTmABmehLb1Ahr6zm3bRDS4UDHQruyWMe9JMHb858ALiMJsg7NKtSqkuE",
  "key32": "3H9PKaRL1up1DxMG7Fu9udreWnctqxvnm6qdwLVMqMduegQnUFGSJspCdRCXCY2eE2nJyiruk4nav1LRojXoew8C",
  "key33": "2ejvnrG4Wnic2ExLoe3AYmkg8DL5GnoNU2PqrzhPH9LbJhCsvGQiLoHZDj41HM6Hh3FjGF4er7e3mzAdtCKabK9h",
  "key34": "5zbRavPU9PQbKPJVeGeW6mGj9MpygkV3JH7THEdRm6kNS4RiCqMmHQTFCbGzw8ZgyxQoy6KkZEkUQFnAS3VrqY27",
  "key35": "QS8bBUfiKiGJNnzCToTjuqzvQq1bPghmb83BU7RgvSW6pfLeboLuaLeJAu3hBJom7gYLmDT2wQgjaARxdcefENb",
  "key36": "sDuV4Y9qd37ZVufKQML2dtGL1nWGqjjBegGhdtShyYEsa4BesMMryV3KmqR1zwc8euZgapEhG7Y9iTEAoNNu3Tp",
  "key37": "5bU6zgDvkzE2G6quNghUsDkzMpCtpmq8HMn7qEqt4UgCE19PN9Xvi1VseBGhCNpm14tqD39tMBSoiSqR9XoAMZvH",
  "key38": "N7gwJWWVdakkgmanndfhT5RGevCXteJHqUCXDV2Qq8k4W7dLuK7v4VCiWmxeViXH6kdajVwwqdxy8iUBDy8kYdC",
  "key39": "y1WqyhcqhUzYdXesp36yycvuJYRwQioYT4m7L3HQkPNgPiDcvh3voH8d6mCESmu8DMrxwmzep3p8yZaPpXGYm2D",
  "key40": "33LAQH1miV3oXLov7JhPJjmymCiGYkHvxEbPmdtzmn5EmKGgG9DpKXFcrR4jwMi71H9G2tCBGRJNBZwQidLHPAUm",
  "key41": "54jZYmJ4GdZY4HjBbXBWMavzN8wAz9wbLEiMfgUFQFTmfkAumGoWyQ3ufzHb4VAWLcHGuGJL79BNm6m7KtTMcJ7v",
  "key42": "2JL3LxAdTPERHeJDTYsRLpNmtZBpv1C3E5YQt54zDsUCUadV5x9Ak1tZuYHy93UeGMvkfP8YbZZQmSbnAoQ1KXMP",
  "key43": "2Q5odpQGSmpvzLdYiJf4KXKeLuFE3rRcsrP8rGqLDmQmNUkM4gXJMZtsaxbamkgkxrA7bswADH3uiSbYEwpRPgCJ",
  "key44": "48aXr7zfYQnUVisi9A7BPU1AyYE5Z4PBu7cREkVqzoiXq9aeSiwpmF3bPr8RDKndq81udPgQwHJN5Nsr15XsbbjB",
  "key45": "2sffakPLeKk68nCV7kFSUQJyzw2LaU62r5RQ4nzMmyP9xVFa2owH7wosBxQBkud5sy28H1aRZXL2jw8VUdbVCtxs",
  "key46": "5VajiiBHgSDPMk9TvVuHV7RFDS9NbzD4z3ZyzQ36Rw8ixLCeFLqYHRgUPVkNoDf8n7pnDSqyL2XUVyJgpCYZ1o2C",
  "key47": "4MHeVeDwhuyKSGGbdWJwjdnTbKr8ahCDzcowLp45CyGjr6NFFJQWLuyFa8scJJUPMp79odqHnbymgr4r7ZZLP3Cj",
  "key48": "2deQb3CfF9Tbh44LcgYh8M1372GzDCmgqF8V7dDLgP2ZKBxjsLRCv1TThSSKUabwTtgHs2BrMogkP9mVb2sVzJMW",
  "key49": "gT6cPDu5dtxEcgeGjdUE1qn8WJvxC8kc6e9V3ASejf2tkHRCFxKHa5szkDpNMLBmqwbssEbEZ6dK8iEyMGwvz5d"
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
