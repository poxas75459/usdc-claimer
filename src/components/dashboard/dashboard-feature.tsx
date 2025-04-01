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
    "ewLEKj3kLnZCG5CUnrgjzJkGpGYJpNFczLB8Uk2w8sdWpdHFw4S3c7KCCe39Hk2aoQiSubTZoYncDenu13qrxKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67LZ2fPQ17gYusr86DEjtrQVzUBPc4GdXyWvo2EJAJrWCg586r4UbaiWJNMCPHHu9hVjUAtWqFLbkxRZomboZvgL",
  "key1": "3CSppskNh3LTtpxF9EJGhbYgskiNKVTUd2jkzpmg3XjXX99iwMx1hEtHctk8oA7HZKtZ8aHLAJQ1FfLQ6Rh9nRnt",
  "key2": "CNGgxJJczsAjifFF7wEShP5hfJbNKJitPep8SyrQReuAr5xLFNoZvaxtDETrhbU5GitFjtQfX44zMskFNkDM745",
  "key3": "4DnJSktbik6bwrSdtbPziThY8SRuAen7saW5DHVXqeL57VuXqasREpA9W2TqxLGdfq7TGGheGqREii7JTyZLruM",
  "key4": "2x9vY8Yri67LqP25UJuy3ge9f5VYa4NTn2ogJwgotqFdgPhXAu5aUZrQSn9uVbxp8wER9UdQ99RhsSi9NBgF49q",
  "key5": "5nbbMGKDy3YripzieYFwrzhJTtBnV4K5Hwk2xMbiNEzP3AQGqvkQ3rBtxGgiqB53qtygBhiU1ya8evfBWyxExY3k",
  "key6": "3SyCz4h8g5Q5HEdK1ifJu7kz72DBL1BCG7KuPJaM82N1yaDtEkCUSWTjcsWBPDpSnPppBx62mfRNjiQygK1bd3V4",
  "key7": "iPpdon38GCf3wr9jAmYohDWUnapa4MJa1fpecswPbjDWTC9Y5xLozPMjm2CtRuRvKBSsNYDsmuJFxR7KajsuoHz",
  "key8": "2iiJtMhqMGD7kMzrS89kwHmZeLymMD4G6Nih5NxpA1q6g6fiufHwJ6sW1NcbVuiVXFPYdnnW1CzigHMoBxMJeGgf",
  "key9": "2bhr4DyQsq23kcDtu8nkuRmWqqeXqwshviMk89DMf8wxM7Qbhqe7Q3MCwYAivsMc24ZH7Zg49XhbBmkiWk4HxAq9",
  "key10": "4uptrPyrPQzcYpcKSF1CRuAcws8Q2fDbeZVTxu9ZHRzpMRKYNgLNVWiBZWivDLHQSMG8pMiB3aREP59TU4GeTtL7",
  "key11": "3HaDPibEsYeWPizMkqGCxHrXocLUrigq7kQuYMLn5pCS3NfdWD3DN5EviErrCoKoZBGwD45HL6MqTntkAnwCJd2Z",
  "key12": "3UERWjUqhZ5aooyF4wCjdC6KZAiHvApfJB9k9CmXRuzGPayqM9ccN8vkJpP231EzeWufWvQoKtsRRakm2Fh42QHK",
  "key13": "2oXsNyxNkt1u7vtuSqHEcKEFnzbBppTQvX4zQrYXRc8RotJBgMv1nSkTCjaXvpTutbhcaCZJPrLGdNXEnzcnrXuC",
  "key14": "5mfF7VuvGsozbkuaUZ5FrFoPC3uzo6uNuxnSgAdzdcSCjEF9GPkRzZkhgD2vYdsbVPfLWCz7qDkH7DADsj9fBvzf",
  "key15": "35z62RTaT57a4E1YHeDyf81CnCkzQiBLbHyFPVHJLPGwd2x2v9KgGR19XPe7mkYtyLRuNGZVKq9ptJXYLLBqHGmW",
  "key16": "3RyG1CmvUMKWsSKmsMRjSGt8GLHXZk4tyzwCnM5yhAu6wSCvYxqTtBPVxay5Yh3e5iVbe1VJVhwTV4avSW3hWPCw",
  "key17": "8ipQWoiLzh4tg6QbU3LWcF3EbUcoMKskwjQ4RZ7yauJHzAYmqADbMshe92NF63oaBgPDmDuRMk9Dp4bdbEtzsad",
  "key18": "539ShXkiHcJSpDqd75n93hbm6QwPuPw9DPCEvSMuyQpsiQPXugimthD6mfqbM93hkdogBJs2Ddq13e9ZAfSQe1eh",
  "key19": "2pctqE1yzhpcwt3i22oCQymX7T9Cipwm6HqUWe4JB5mxAhUbQYxjrJEHCuvVZcKQ5Wb9AoaULadUJyfSoDuPqYPU",
  "key20": "2SLQqMrQ8exNcnt7bhHn6U56YhANATXCuVu7oRCNb4iF3C7R3RHiS2GvWh4om1sGt7UvGqXq2vbLpXUxnghcUabP",
  "key21": "4MxVDBKcaLRsczFym5t2jFdemSGY2t8qPGMFHCcSBHmJihgx6PaKcfsJ24qccxcXVWymdVgAB9BCzV91sgyLaigQ",
  "key22": "2HzD5fYMjNDQNGNscNiFviAbVxa71ND2FhbYjStrp67KpKwsDanAWCcy5SYZFreis7QQuFRkDkzg6JfV8xPGF3J8",
  "key23": "ovUqdNpX9nM7FjmiooAuip2UANT4TSBB5tRdjiaGWaKnsmQxgauN5FAgj6qvebf2uy5DPXEhRen4kG7FU4ML2jh",
  "key24": "37QjVE7Y7hrnXhc3PvnJhomYDyFfHMxzcB6huiUefZevJEgY2u5vUUMQseKW1RQaGXd36Cpm6yN8hGwtKerzLtNY",
  "key25": "TNcZ9GSoeFZTtZ6af7XfxfCuvFovNASw1p1kYE5mgBqUfwnbZUnKrHkzKXqefz2nHsrW9pkVQkLswuYRbrT21Mr",
  "key26": "Y2GG7TVxrw2KTvxcBPzTfNTPZqNvzzSaUKH8tS3Bhaa5HqyhkNKkHxvYVbJGs1YsQcmaaPuu4npvvwY2xGVdrrv",
  "key27": "3GhhHzAyQ68X52386o3UzhWBvr6YAtdhNf83WGV9EagMBivuuvgGBCwgQhrmj9DcLAVSSerFygATCvagKUa95q8R",
  "key28": "quFFYYDZxaRdzPrLnkadi6hruWQZDbjTdK2jomD8Ppb9p7tVRMmoxT19QvQu9hpPwSypsDQXUv9dMhvXNdVaMhH",
  "key29": "3Fr8j4RN7HhWSpx2siSAN8FucyL8q3xBUgST2qUVirpob9mnHwB795uqszahFPugGkAfQZHY66ioYy55QiPLEkQ9",
  "key30": "xm85DKeC7idVPYGiF7mZ944cp1MtkkmQJJWnknKukoEaoTLjLFVgiSWuL5SQCkmUC38CrjvusKxvaLM8AavyWgr"
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
