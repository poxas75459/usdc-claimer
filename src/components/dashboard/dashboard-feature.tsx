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
    "xbPf5oLyfJaH77zeoap9JauUsaQVyizutZYcVs7e4um1odtcdpUjin6o3vny3mXDYv4KLqY64P5qxhR2nggd3GD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msY2z767ZRJfPNPnr9tazLXb7K7sicrggUfGJRXsP6bDVUJJdSvNUjYkZcDFGrSc4HjMUENEtEUHt76h9iNFetS",
  "key1": "5pXKL9AbdSzG7wQWCqD3pxfy2BRe3kJ23spB5XDD8t4ruoqUmdEb9xmFD3PNeDaUCYpHAJDN26PLAgsGvj4kCSev",
  "key2": "416rsD7EgtSrKRLnZMWDg5Gmbc7s4ojQjQFwdsF3x3vJwNM44h2TKuhPGcdrmpT7Wi2D3vpVWSS1Ft8AcgJbzG9J",
  "key3": "gMn1opiw7JoG9jMZmPg2nGBP7AXrcTGfa7f1VKfBk3TUvd26sSfFr5727k8qHGQ98c9zzm8PM5wWjV9Pp3Jwv92",
  "key4": "2BmfhKnugRcehB25RL3EikdbzSWsvk3auWVD4CwZP33DFwgSX9vTYrFWLRs6vBpEdvvN49wVZTqNkHzKnQxqttfC",
  "key5": "47WKLpNAbMMwuJQHPqyB9nkWbcaSB657i6WfA3PheCD8va74tB1cm3TjfnWPzkEvkUFH6Pv8ULtSEssEdnZkZzH7",
  "key6": "5Sipd8Np2szkLZEt8aHPyJT7ApN4zgfLtDmDo3AsNeArFHWUJy7YayrkArgV27iD6ucX7K3HSXncQkEXaqYNoFyV",
  "key7": "33NC3hXxGkeQLk1XpgpHSWHqnJSWBMHm76NaPrLB4ypQHxk4PawfxuWTHXcJ7A6de1umGnUkpSQFSCSVTtqkd1GD",
  "key8": "5KBRdqD2dFZhhPJLHPb2vsRQEMTBWFvPQ753j8ewtB9c8FJWAuddW2WBc6qJAFmBWGurfqdai9sVEVFqetLsGq6Q",
  "key9": "3T2qw7qRi8GVTtVjRaWsukMjQtMfzQxm9oVqTAbbxonCK7JWQrFBZLAwg4NDCQuv93yRocMX2imWMkDnCf9MQL1D",
  "key10": "u7KnRN9T6xE6EP2c6Ge3Vdp1nK8PyMdBGoR1jS3gxBKD2J5wcXsTEVj78vHT4APFTtqCdB1b7YtRUyLCcQsq6d4",
  "key11": "24QYtjA2cx4QEXxJPfiZb9u1m3WaZXZauHNr2EMjWXfAwE3tVuXuQmccbBsidUoc7d22s2sL35hBi8pJYbBGrxX9",
  "key12": "4CivmCnpGptDo9rG3HfrxTRSKrrkjHCnPJVGk3vpbfowoegrjfKVsGuV799BiCBfjWyipniE4zCwBSQAG7Xaom8T",
  "key13": "5KiGMMphqgzTsqUHCqCnGpMsbTQwcCVDfSv5ZdwZXhfLgaDBSMdy3Rw9MDJHLb2EtRtuTCcJrvTbYeN3AnfyM7YV",
  "key14": "5G2aSMgXrdF1VUfavWjFxzkFy4Ai1JgrsRBpqszFGqsLCKLJZGyWV8t3hpUXstCt9ZcrNyGECJLDt2AR4gM3BMfX",
  "key15": "F3FXxEwh2S2U4Tp9PpfoJS67pNd63w4jQtMHCErNGSzu4je6SwBWPvq8CGgtLL2WfRj7Vho6MBSqtkrVCgRkadN",
  "key16": "2tPJLQdvkUSGKk6ivZtLLa3p9QFm7WwtiiweEcuneZq7HbyNBW5EUyCey7Utsutt1h8JaYNgcj9Mmf32ZojsiaVT",
  "key17": "3ZoWSvbvPr1kL7yh9E2Y5HQyw3dAdiA1sSJVJnyfWXhKGkchsMF4dTEvv9RBwVUSrGTkra3PjQJXVdYnqx2mvhDL",
  "key18": "3dUcWKGC6PC2L7NPu5Dm93B6LaDvjhf3H9bHuQCB5qtkrKfM8riksuLrQEMw6rueFL9CyD24wyBBb8jwyhPizQGC",
  "key19": "2dMpJtiLazggoic223jGJkQaavSE9rAcAwFUg4eWyi6TQj3QUzVRKw9YDDLM2WjpbzMQkHhFGg9DtaLmaA2fEh8c",
  "key20": "2Efs4CvVHDqmC6NggYhzdNvUjQPJNQPhWcMgjMbBFC8PtFnS1ULtt1ByixAvz2NkEf3m59uw9j8DcHRYPGtC31zv",
  "key21": "51WE9icD8fH4R2cBXhQpLA2H2yHch8S7AAnfNLYqNJwxzeLPWfX1jw5Gk5EsZjnRTRF84eUiE7ADWiZt4nuWMtcd",
  "key22": "3ZNTUhJE4ivwmsnbwuexQ5qkGPGV4m1Nh8218MwKDS3GdpmrYyVyp7YWcQvcajQoovrnCDdppki73c6UABDNutK1",
  "key23": "9odWthZhcYS7Lg52oyd32LoyEiLC8FUD7ZGaL1WsLeKtZ1zFHanTgYeLAULQLcA42AEwLCdvPfMRrDxVULkbcQw",
  "key24": "3TEf9EXqkkS5susn1TD2j2Lqzm8vvzuoEy5RsP8PBqb2Rg4pbBiGs2bXNeCrjwzw9K34B3o9bLueXmpeoqdhoRM2",
  "key25": "4tug5r4mTE3gUaF97tiYWADqwGZUySzdrFSXwPVXAAX2RtMZnpMU392efX9qBMTkr9EihgUVBbgZdd9GZEhsbgLk",
  "key26": "3Yuy4J638mitepf9TsrXMjna1BDAXtC1zS1iuuv4cdtjCvhPWmdXr2AyYTTjqvebmZxuqpopFvmFehAZ4A4pPPUe",
  "key27": "5qYBLLALsT1SUDx8Y5nnAGRNbSUPmnziRfmU5w3oFNmKcwoKgr1GeM4heYXRbjtkV9ayMgaCgaJkLEAd7vgFGS8A",
  "key28": "4WNfdujRSJFFBgrB26uXH4UKg3JnBzobwUi94R8ExhFMgAWTaqk3rpj2aZVkug754m4k4CqxcBcp7sgkmTxCQadV",
  "key29": "2NLdeR6t2pUtcFQfCuwTdBMwWDsSPdUGP4nnExU7x53tEvHyLZ8tknuJmHqBevvFCBTQ4UGKXCK9LzuUBzHozm1T"
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
