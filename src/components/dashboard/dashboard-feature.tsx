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
    "2HNr2WEkAhzu7za8mH2ppCQmZohfFF6soEKA7SmKUUzKu9hRsN2zycD869qP2MymaxhJUZ2h6AkY5BkhGJ2ywNXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQrCeCMeJ8VuPV1LhB7GMd3aRWsaRw96muJH89FTmQJ28NAQ7x14awsZCREPPWw654A1DsU2pLUm8tnvkZmNDPE",
  "key1": "2KQNTb9RmCJE3vh2u2rhgQRnGvKfH3cuLSaUWoHJbKsdBvkDgeMHZscrqV9bV4vekN4t9QwXiGvNMyoAkuz5kvEw",
  "key2": "4AToyDASSpJdZaxipQ8BrEiyZ1KirqJeE3Ej2q9NeNCp71vyPvLZkLByaLm2webks8pgvbjoifhWXvBB4fysHFUT",
  "key3": "4kBpgFLjs9WpGLth6JUjKKvcJwZ5syb4aiAkTxabcKf68svBxfDJgXQrqvi48VG5dQiJxaex8fUaLmbyzP54W2cV",
  "key4": "FQQZrR6CPkofyV6X6S6Q1jnamVQd3u5BVr8JHVz2o4NBFyvCKT4jNekxxK2vRGRciGcUnFxYciBuzKhwGok5ZM3",
  "key5": "4MitrLeYB91yHNcd27JRVwiu32GSSgMWi7Z6HvgCRaQVykAWFQFxLzFEFsz9Kfm8gCRZQgghuT55xZaXqikzj6f3",
  "key6": "2F1LfxhzGPf7BbMmPoUKDGApGHbfZK9QYjD4pp2aEnMX9Yx7NLkhuGv1sN54ALjGqUPXx7VqPpj2EGrodV425WAj",
  "key7": "3nLXxiYUcTWXKVny1Y8DjhjkhBGneoN4SmM1d9psJjXmwhycqi8jFWSHJmXbtBbuwrC8eCkCq36qqZwL1o9VoiYt",
  "key8": "2may9xpNGZWLXJUD7nmSmzZfZm5bDdN3wPqbUHbxmJwyGqJ5GprR3JXTMnYYjU3fGnFPHVAfLxFFb9vDV6o3xCCi",
  "key9": "GB2a1qVB31gL7p2Aeyp6kuEV6nFQGVXA49aXcTmprLnmGdiTGUG3mNiaV5p2nLJKPYWPd6Tzn9yJCgfSP2Hbqjq",
  "key10": "4yvZ9eUbeueopGV97zWbbBEqNHgNHYuUTYD7kAzPVA1FWzCP54nQdartqKJo4fqzCSLmpy1hUX2QH17KqQQ7i8zP",
  "key11": "2u8iHgBUCxhqnyqKv9dpNqTbhKXS64BWQo5njKgoN3mMeHvCo5dFowt5pv4MY1xDJ7ZK2Z9Y2SWKTmvUEPd2ueRu",
  "key12": "55acWtMhLFfhqRMjCFwP5oeNNJmTJJrewD99k3M2BRh2EhwXp5C2h1EDXf7oAwHjDBUu3DUcRp4EgRYTnDD3Vqsn",
  "key13": "jTmp5nGSCbCntgX2DZckK9cepAtwRn7oo5xFcBQxHvF3ifxSGuFQ2wzBJ9hLtgjLJwcGfG64zWHvQayAUWvKQj6",
  "key14": "4SVTPYbxikMtuEs4CzQJTR7oTj3JU7N3sYywWDiSUpQDq24aKSsiF3ChoPTWqiJcnBJ5pxfvHTptPVVH1EwTcZdn",
  "key15": "5kf9b4bKUzFcDxwoAShJh182ox1FwocFVNY8pciJAzQ52wqDnMDnQvoLoT15pDFUPHunXTrGAAK5knecBdk3WsYk",
  "key16": "2HwsFaqyE59Kge2DBssRP9vA2pc7s7wWJ3ws5Ev3cJMouWHYTmmKZNv2aP2x5ZeF7SxdWp9xNMYZYJEXompEBmvz",
  "key17": "41u3jAyKGGi4SLpnjX9w2BjECJSursu2qGBQfE6qytqeEP3bnzeXPWHG89MzmAnb3uKMBeetpKpkPgddPzfqYpcR",
  "key18": "XmsEmTLfRmiX8nXssJgxSgkt4f4fhEH6xjo6MiJm5BqrsSEH8MVv99Ex9B33qmyduryZFmqLYfXysHy3akP6nkP",
  "key19": "3MpewxAf7uT6LGjKvbAcDmPuNnoDDAaRxrrXaivqBPL9fy1wwH8754LiyNBqXze2M3sVvWxMVRHq3VxKJ1zM7946",
  "key20": "5xMdQHcDNw84a5xTset2SppFYS3fGmKCeBjGQhY8h6yhUV7BeVWVWEB2ZTnqQJL4DQPvTNUat4LjW52Mk86zMeFs",
  "key21": "3PVEQAa83rzKaiZd7wD914tqp9Nef6bhnAhjPDgmyTArpYzAwVAbCsdSaxGt7oKo7DkVmuHWhHRd1A2ooPoLT7Tw",
  "key22": "34VHi8LojSkzfQNenSFZoZwkonu4g9pSUoU5MNn594HNuKMjS4ibnp3ka4Gbv2Rp1c4CdoFsQuDUVFPM2sxE2T9n",
  "key23": "4ZKECubT7yXQUxvYkLxy38J8jKrQTK3Hp84JWqvwm9uYy843jZ8JegUa6G5NBNZqBikpHyPemBATfTenLgCew4c7",
  "key24": "4XU9RzcBxFNwhHU55d6yxQiRfzy2TU2wM9dA7iLbQRDtSiRSH6EyPdYR7ZAD7o1wQJ5JWptUc9Jd8SHZSPtrTFEw",
  "key25": "2BpbmwtZiB45oZMNmHsy3qtQDMM6QxBHLUtwmHFKDKc6UrYy8zNADHnyVP2aJoa19eUP6iH9MaPxiLHnFQakYAq1",
  "key26": "2fNcX1wDWeF2KwBpqRQvz8KGyFsAm9B6CtE4s9JaKFYa5bYLkEN2AV23QKzRJjzEd9tuz6ohhzmbiyVkWkh4Bwbe",
  "key27": "2Eus542WBhUvQbfymTpxDWG2xF9kD7LtCkZeHBWa1pXDQwfW9gtggKhfFx4mPaHQR9NyQ9LNkh5EPYN9enFA53Qn",
  "key28": "4HYuTfJxrWjpkC8AgFPhfNvSP3tfsiykTNSiCBSBXnv5AzP5DsUH61khpFt1XeMNVHcWta3q7WFDakeriHbidB36",
  "key29": "3uM2n53uW3tP8zHQ3oNhzVRjvuzepXBc1uukhJzkKVcXWx4JkXDBD2xxZBsXGVKZndfyhJbYyKgGkjb9Y8udPV9U",
  "key30": "4FTCJzj63k8YMD8AVQCEdNxQmpcb9mEzz3AEkVnJD53fhTpNm9qK9LhC1VeLNhBVhSAvbAthBUyqkExf197EVzPU"
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
