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
    "gq1xYArA6Gsm9iYEv4swUjuwhu3j8Q6XT8ZvBqfAff2QmRWSG9oKmPpoivQUzGADWsZokVSnXKSu9xrCS16z6rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoiUW3dizgb9Bpj5C4PfyaT2KEffNDgdXmLhPK2Z3dDNQkEr2XBvEXcq61n5NDtzJ3UKpAC7mmm6vRgvWP1cZ43",
  "key1": "2XcZbvZdFLw1RPCcxSbpnHeURhE3JgZdq8dNALCjjrHyuvbwEyUJEnByabUGJbvipBEuNW7Rzkm1Gt98wTUBe9F3",
  "key2": "4cBbcAAsRaBqsyjzVja7fLsgeoAYZbje7MYRkeoBKQXNyVdGFeExConHto4cqDfxwgRcV4kgU9jktgKbzgsdCpRz",
  "key3": "2Jzbhiqeq6dxFWPjijTkmftRAmCrgDXij78GbbwHQbvXXjkNTqWyTFYD3Raq1LhLBUzQaCZZrwbVQ1Mubx51b2QJ",
  "key4": "2zeQTGcDKfxpeLNAHfeBAR4nhkpjN1KYj2GccBKVL3NnNtmMiQRCRpDcJk6YpB69mYCwqFPK4owiJDJRvwfJrgPV",
  "key5": "49Uqe92emx2hTiUQSph6wHFgp3VsgGEUueYPKUBxR3AJ9Hh3EoJymk1whpPGVrBsksrDhaQPhvxVkYbY1Ft3n4E",
  "key6": "4SJbaAUb91S2Z2JQRoEAxumdNvzzJBRUxTvDfavE3eAq3duCRbLBpEqvg9rLgHdjueyvmAJXwzQXWDAPHR4KSjRW",
  "key7": "61jjCvzYNK4JTQq9nGrfpQ6DHuMDY1AKs6yxEuRYHUxsuvTusFdQ57KtJyEkoMFtkkgaf1s9ugy1NQbq3qi56Bic",
  "key8": "46ESHnHbkeixCx2VmTnWeubouvwkFATwgwnKVq8ViDSEi4Qxc4r3MTYEXkDkAnTjVsXwnnJ6UtyxTQvUDy8s7G4x",
  "key9": "54cAEuzVefASb3uDUPzH5v9tkChoRLTthcpZdWSVvyu2h6ekHMYHzpaQaH3bnVM3DvhxuDG3Kzw84WNBxZ88zvdk",
  "key10": "j7KbugWtDZkcag4YmRy9QEEcqDxVz93iUBYeEF4fe28BuyuwTwdn93wiBWaWpiwo7km3Ve8ogESzzJSqKBHs4ks",
  "key11": "2q2yCXpz88NoqYqvkRj9gzSc4W4qCDJV1ihkyd1R5mmK4GwgSM4rkzFTqQbrmTmCTye2YSa4vDoemjXrsDHry6wf",
  "key12": "3qPSZMLr3GZSZqdBwMUfLVSUS44hNMHPmHy3vgrUYZ463ctBV755aRNbdmiRxBZg9EzXKzAbTqdGjrxsKLwnnwwW",
  "key13": "4ZKUPvViePbgZnhxCddsPjV63aTXbzFtrubc66mmaELSSrci48ZdAern4myizs6f9ah66D5LVk36wGgtHM6VyL9t",
  "key14": "5fiRkJHTbLTrcwbeimEEqy6GjjLsrRnofKMkGCXXZpDFm5wGpyCoNKcXhvqLgWPUHuYb3v111aNZrahQzHckyNWM",
  "key15": "34TxfFY3WMUdC4UrqgtfhhAaSvJxniTACGjpfFFN53befmmmAbwTGAV3eR51BkZq9Uvocee5WwP5tRn2GvfMaL4m",
  "key16": "4CGip3wmKoBUkK3BhMVAUcgEvdcskCBB3ZK3iGy25Po5wGULS1bx9u12Gcc9baj545cXwy3mxFT3d3zGAtrFHD8k",
  "key17": "3tpimwuRbG5MFCAc5mebxZ8CLwwiQF2fx3cA98ymVUMRKxfLay26nnt57ag33qyNHQu9PPSyvfDo2FWksT1UUQdG",
  "key18": "4gcs1GhjXNEuTYTGuNjsy2zSbVFY63Fxf9rZq1ATEoncJutDZrEHggaK9RxJd3TRLzTBHEPK7GThUST8kRaXrPgZ",
  "key19": "3cYEAvkWEUWjT8x6qj6c7A4Z3uaQVtR1t19MrTAkmEAbJ8MbDitjqKtePq2Avt3nzpykGASUKKs5UcWVsw3kZB4h",
  "key20": "4ffAqco2cq6Dg4dAavP2AUXDcE5SEDsjwPuTWCnDvoac3DPvxXKXRBYhbjJq9N3cJxWCYGvux2E574XPC3Qvxczj",
  "key21": "3TXvbtg9psQENu8TKZfohsKXBqiFPReUc1xWxvLhpMjW7uqL7bd67C4ywZr22Kaf29sj6U4g6Msnx6FZfjXpbdAd",
  "key22": "4qkjFL4JXjbHvSVwRGpfHQnnRKcPCYu6YXRqvkpJCwADKdkpYtn5KN4LLEQHNxmmxZb53jQ1tGQhGyJbhmpqUSPQ",
  "key23": "3bJmqo27Po7aLwbVH6hUvGnnUCtobjhJS4GtvTpgtAmJvMzsPUSpGnR2MujNbxoPqe48tnxpx9jbWYzPhMrZ3hk",
  "key24": "3816RiumXHGK4Rq74Q5kwQE8hfYAsUkzsMFmc2REnTdam521itHZT2L5cChLjydASwg4zTMekHhkTug71poTZtYR",
  "key25": "CzdNiELUrs5tiGvE8GBqN7d2wF4ZMW4ReF2FPSeUVxxEu1wqauL38mvS1rGAx3QDDfwU27nWY172KEy5kzF49K9",
  "key26": "2sL43bP5RKZtcKfx1cRLhfnJe9KmY4haNCVxN31tCp3cCgKTWDihM4L8aapptp9KefN7TDaetKfzXby8kEEzUQLM",
  "key27": "3d8T9PTnvoGCAULz8AQ9n2VAZiThRMDLGWBBYSQsYjDGKfurGvym49tq6MQXcbUEZ22cNpRjN7vUZp4puFF5DtuG",
  "key28": "5XGxNe8fRcUpSuss3uFi5Sa3HrkpHLyNk63H1Zko9JzziqZY6PYUVt83VjjzMsyh2dvQevEtjafbrpFn24Kbo9GB",
  "key29": "5HUv6EdDTrV4ZAHLvCULFbz5obFHAqDsnUSE4LWA2d7LMo1wMgbtpH2dpgX4HVLsV8vSzhbeX5pNRfNkHL5YSvWp",
  "key30": "36iuuitezHcD5TZ8QhQg3SnNzQvKwJR4LkibQ65GS4y4TtE37b3AURe1TZkgGaq7PgNWQdfZazbcYujTi53Voe2o",
  "key31": "5p6SMCVYVNbkMEjZSSo1Wkpqm3XeMnwfeF4FU39SqhhD2FD9R4FgCP3Xmhj5ZyR9dqvBrBNQgLgLd2MB1EUtiKzK",
  "key32": "5QA97coZdfHm7RUGcoS8DHH59eYedLzK4opqFdJRFk6GPWQAaGhpcCEg7HnkR4huceiVfyPNWG7kurgfDWc1hboh",
  "key33": "3QTHUnW6PU2NTqHgUN61CwG9LzNdCZP6PY9WMma474YLkFeRaMh2TZ3fXaq2da5g9gsU4JTcPDVqEWhAdDaYBAPZ",
  "key34": "2eiJ33HsdUvizdbXvugHz9PxHg85ewFrJU1qnqLf5efzEaSJqmHRgZnB7odne3PXFc5nK44pZiosa6ikrTh553H8",
  "key35": "62MAgfXxpt3te336EXVF38jiaYWL1vFeAAiigLmrE7DRmKsGdrLx1ZGkVgDUzcExCGYgQtpctEB1jZeqMY61HRg4",
  "key36": "3brfQxgt8PPn62gLJigzECuAf33QPtdqi5UYrkabhdv8cNMyYXDaRoT9uSuQixwWyWnVfs8bmF7PWsYw6YedncTs",
  "key37": "H1zj7r2vnoeXp5EApSBD5BsbmT6oZE1P16ytrQWZJcHYWGJY1j9pvTrM1BbNNBaV6vAHEygx8AkMM1uqedNwixJ",
  "key38": "5R2y8FArTyBczg3uCvDv6i6b9BNbP3W2VSD6XNjJQE7f6X3Zity8TrVyNJuC1cZ61pEzkZEd7bnjMg4WbH2EEi9u"
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
