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
    "3LYm7GX4Xdgxh3XaCcrca45p92Ciz1YgcCLpfpD3HGT7RU92gGD5kTtTepVwt2Gzhf8TyMzxWGz8yvcUL5kJo5mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTSxm1qLWKxDWzGsQLGaZSd5EN7a47zdndtTBs3Ch6ttFVoRHqemH3XVgL3QWTvy1znTtrohr5FhDqQVnwoDKNJ",
  "key1": "4UeuDBxcrHgRoGSiFkYU8WdeaE8nrMi6VC5wdafsSw4P5cE5URX5izBnek1ANExMWtVB9Gw1H84p4yNnu6JQuaLa",
  "key2": "3SRCxQRWBZKZ4ZMfpGJvxGA6y5mcXFnGB9SzecpQLTxbD9csXR6A3rZ3KTRfuwAQ2Ayvh2mqkeg7UwuFwNod3Aqb",
  "key3": "1zZd5NQx31jHyHCnuZAKnjtyT5McVHtswmiEH9wft1UpZgRhDXZQugnyw3gq4qzviP9rKzTioswAByLSUsyqJ5y",
  "key4": "3k3ZD4yhfJUC8sU3BC7hUE7JJeS2xkfLfKfxGfFFNvr8DcHRx5PhqrhfCC9M8bhWBxGXyutoFvPuMnqG2QoH2XUU",
  "key5": "2Ub32MQUrUfCwySnzTqjFFP7XoVZjVKPVWFo3ickQKprD6CFiis9TJYCGRFLaiMmmR9B84aXHNEQcmHKh8kdZ15c",
  "key6": "HddqAqt51mDykswfmDE92ehYkNnrxcDBaqW2t1VgY1SJTcWDUKGKyTncGDLXiNoNnqGDesuLg27uz63q7FC6CmA",
  "key7": "3yxjNVcLBKUvM9mqErAaABjX5VsgskKzoLXnd1hkNfxvPz1ESTo7qN2MKa1n2KtHU1pSDGDieavch4D4woVAZKnM",
  "key8": "4rWgzan6YZLgUsPapZdBVVX2jbLPx3C2ojiBDKoNVUsuPH2wvCBFDU8VGqBPi246SNWgW2ncLA7YK7nVYAtPWYYM",
  "key9": "2YGWDXNL5sQ6De1KwgqLx6FsRBPAUx8ThZXkrr5bLt8oxENtZJdbutk5QFNH6SZxmGh9XHG4upHxFEjHWqJEBBQB",
  "key10": "3PbagiirvJaduN4tLQnjXx8JpsRUzJE5byPwBYC45GFwr9n3VNDUeMn4PWo1e17wVbDxUnp7NQgER5JV611R9AvP",
  "key11": "4bdoCbjZPUS87UVwGbZSQk3uoAPFwkoJi6MCikEnpawuEYBGRNzDEAvEb86fHeqUZQuqYdbWCCCyGB9XH91uLEg8",
  "key12": "5rsWfC9KJ2BfYiusigSuFRYCGNk6n7mt6vqvzmCLCmbjS8kmn7CTCzsXYwwY8Ygjbk2MSywseF3VACBUmruZFKsE",
  "key13": "5tZPyzWqhsZPDA1ARiZ5nwBbEpDLe59DCFjssXvd4dPnS89iFSRMJ1wpEzYuNmsmcWRMvmAddCWWvs6TsmwkDgS1",
  "key14": "32QiaAm8VTYQbRXBABwUig5LsDid8EKcCgYNZY1Z4v5qMBR2SWttpjQNQNigb3oWpXmh7C5pH6JG76qsz9L3cjJW",
  "key15": "3NwEu5CjMUFV8SEX1aBdZAL5SKB3FvFeUPBfkyZ8ag1ck2Fxfgu8ioKX5P6T9niG42u9NDsxQZoGmNNM7goPn642",
  "key16": "69Y27XA5LtYAviNktgjRsvzDVCCcb9n5VnWGoEoGkvfvEsYMeAbdTvqVTAayzpY9WrBH5xeTUqe18b8GehjQEgU",
  "key17": "F2jn7yFGzirb2eiDP4KPa7icY5VPMQxBSK2uH7WVHEpZuBRV8jctFKpgfuQvjPJJ3PA24rbonNHjVKCMgji1Sa1",
  "key18": "4KD7LRAA4PjF396YJ3kmEGTrcvbt7X9PjHkb4PditstEBgCRLZ2Drmd8e5rqnfK9UZmQVU7TZPVxPruu2nJ2PQsW",
  "key19": "bLYkFtLynvoMUYgpZpWoT7Ge1W3pt8Tfsav3GKV9pye2UkxWFnPvJpaeB6NqzgedTZuLzbhrPkBUYDKBHVS2nEL",
  "key20": "2pkniuBcMv6zxy1czH2YdXFvdotxrhhUK1dBVSYYnUGp6aGztPftenZiTAchmitpBDPCKu2wzpx1kg4PB9zhh9NS",
  "key21": "4vZHNfbTvENwngyJSwv2YdutgZ95vqDEq2RVRiG3Y2sQdNEVme1FW8tdakEg1F9Hvyqb5hG5gYWkaBWeok3C4aMq",
  "key22": "22DJcP5D2UYA1k1dnZAnDFQ86byDcMirQWULPymq6eRdQZz1LrBcZyg9QsEsGseAUjbZrNnYZ7KSPe7iQcJ7nWXV",
  "key23": "21yQT7gW9iYg9BAEpaQjedbHbcuprwXSHm2c2jhMPxSaUS5ZVyWAJGD1uGxgHWhkbpbDgRZv7rvQm1xqeo9Lgyje",
  "key24": "3hjNkKUCrWYPW2QRbLM5z81SzS67Ydd8HZv9obA6wbAArza6hMcTZ1dJh9jEMfiA2kcjTYe4mGkDBExYEvFJBBja",
  "key25": "2mmTVKGJsT6NHzoXwAcH8qz5qhXR2x4GHrVTuUdHCEo1tWmRtXUuZwWgyuWnw8bZHipKkXPQgLQ7fin9BDpJaxRk",
  "key26": "LV9Z6nZ2LqQEANBbgvMHnJxJ4gFvFE429mXMat3xqUmdTr2MA4TQEjLyCuzFXqwnkARtFiFAvrXaPf7LdtVNBFu",
  "key27": "3eKp15CbahSiNCE6rUz5fcNtt3faV3jH4mBNPzAUSXNMTLMSNgepzDkpZ3iqRWunzrxNdyyBrovZ2UtsV6psoXas",
  "key28": "2RjTuJzrmuYzevbQDXbC61pp43whbWV27BCtisyXsEpE7QSAkcQ3gkNSGPPzQj6wmUKExi1W9bv19Y8BERNfPzVt",
  "key29": "3W4LLcGYN1qtme8ZoqumQA9mib4Zcwj2T3icmmfPUDWC71dkNiYaPGUv1QK8rK2UVxNna7x9tPMCM97o8zxx1cnA",
  "key30": "4LxyUFTCJpk6QduBQ1xnBEA4dhJVpLSfBNniKyCfwGuNL8WYGcryiFvjZCJeJ7xBQGv7a5yzRZJenKPgyJ7XCBBx",
  "key31": "57QZC5Qi9wTdoSBooLeLRurm57LSGi9VADST5P6DehKijTfEXqJB6k5RqkMNztgVQ7dpyzxVfNRWB3SVZLdFP6Jq",
  "key32": "26mfCDyhsnDQzpW3u98XuKotXxMz95v6FBfFZ4TXHnhUD6TjgdTyVeF2LHTsP33JpyjqF7umHHaFwAABfj54rbka",
  "key33": "32UMUoBzC2n4FR6Gjw5CTVN3k28VqPCcGiorobUuUPrpEndqJbVfcwanKSRAntKKfvAyDmA8sF92h11DzvGCgdP1",
  "key34": "3WxNsHEVpbE97MM2SCjkm1EPgQ5obdn3n2yYndoawnvUkSVjsGsv93BurB37p8eSPkdVvSpyCg19Yds9cNophm48",
  "key35": "cyLttbR2vYogTDhYvmEmPnjTCeRYsUxEFDGSwGAtmffhfGWPPJSFoXR51mWXGChKpxVsb1hjWnGzRDT4yXtvfxH",
  "key36": "2Mv1UvMNXgjo6tNpsJ9q1GrYPjHNrPCMwxkTDMuv5w8AdqrBQB6YSp6NqM6ZQUfCy8KwGq4QicZqMnNuXNzuAkPJ",
  "key37": "46NbaWEJK2nYRifHmzaTo25HyEmUDeSCRGAEnGMcVAfWNsQGK2qYvYHc9fDnhQocxiy98LBEsiLvkSfwDKwkpssf",
  "key38": "3Zh5oUzLkhCLxBNePdpnHnQusY1UrawNhSJqszDLSX1CLesJ12uVoAGEo7uwWboGhKZRg59dejttA6qJiyB31QDE",
  "key39": "351egHePhwKr7sBm6UnncFv6xturjytW5N19CjTAd6Bf8iL53Mh8Cznpm1ZMP1om9PYsiG57YpivECufg1ZNoKgM",
  "key40": "4iMYjq4NSxCLUYkPocCrABHd1HVJrMkyevPPTByQXcGeJJtg1tNfkT4LwM7mEfDwxMqjoE4Evik2qWVA79ByiiYt"
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
