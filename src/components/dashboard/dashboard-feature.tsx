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
    "wiQ18GwJ1GtDYkjg4ZusAzaGCF85XTeZhACkRQ28f1tA28WWbiUEDXHRCKHkdZpw26zCzWvTr4Naw2zpQCDrRop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqYhGL9nXiSnP7LMb6xtbxTqhXUnsuur9pF4FZUaCkWEiFfPeFMhiaa51gbt1maPu7qchbhNdJC5D9f5Yr7gH9t",
  "key1": "5yxJMgZacineKxk5tmcv3rMpyaU1iEfywcJ45MhSP1M69fhDFaHPPD4EcrZ1UKyu5dX2bR4iBSguEgDwS7VdTV1g",
  "key2": "4K4NtbehMYzz9DoFEr8XwftLD7CrDuB7reFEcFbGqpJDghkPTnxTQKdi3HDcedU1V93GDCDamJWFRMKTdXN7MKnD",
  "key3": "2MpNy88MUqAAz3pvSmwZ62BCrkZp12BeRguKiatvrzwbxKYUQrLmq9tjyxpP5xUSp7TZGcwCJCHGCe2qTdCcgVJd",
  "key4": "2CwAVL18yiAEjRLUqqxzH1PMEh6FPL36B5wtTqbG7ioYpdy2VVCiEoDL6yjcWbjjAJE6B7rRgiaDX4jW5K1JPvS6",
  "key5": "3us7PT2Y4SVnJWWQCHPpNaGxBfBWRxZ8fjfRw1Grqj2HnUigfqpNH93vYD3mF31tg8xwETp695RXc8v4ktyfrAMp",
  "key6": "2DbtTGRwYzYwkt4xYRP5oRXbWMkyiedRydLb4HXGL279EmwFyLrxWZn2WwMKnxSFUchirb6QViFstYNPW6Mqq7dL",
  "key7": "4DDSqHJhoPUeyj6LeqBurxKnsq3obZXC3K7bwKuG7WHcw7PmDmZagiqUG8vgLECNrE92tdp3D5v8p8D3k23rBEtY",
  "key8": "2pwAgS8e4HWXMfQXpaRaVEKRzTGmzXBRaEgEmHZG6rBbJCiWsXUPnDopivnZTgwLLNAD3n3uLNEi9nFc2PBWVkvi",
  "key9": "2sH3c6PqPeMftCCJxNueks5reDjEhwLMqqF5GbSr2ghCXVCT6Sp8ARN2DTYC2JMamFNJnqjY9paQ7329C5qYsmQo",
  "key10": "59DNPvoSS6p1Wxh3qT58XA51N7YKkyHhSKdyCpSZke9E2tRMQyaWHu2KBFJFaB2prhpRJF4mTK2qLe94NgiMhuHR",
  "key11": "5xFKiQ3XYGF1wHspKdWn9yuDVPv7SS1AuyPNjVXZ54MuCencGuXdeJJu5gigMTsvhShmbJAXXqyNbNA58dGjdb9u",
  "key12": "4KK3sZbCurvuMyqGQXHX9gidxXgErbW81Hmp2oaSRQQZdyrkx4LQwhUUB6uzwKV1LBaHsTXCDDFk8dniV3AH4GU9",
  "key13": "2BZPNZKSRtxA2VM7rQjVbxHsEzvZtqpQrhwc4zw5sXU26eLXpd9dMswPMpCz4jiR7AMy9HwMPHaQp89VL73tAh5w",
  "key14": "3WGR9cW25FjjypmbrEfUQubxfPVtczqpqD39ZE953EiYCo5T6P6zfnMdZtQEL8NPrDzSK2E9sivbWfaTznJ7zYoN",
  "key15": "srHXfCcBtVAcZALKJz6dHBPNa8oAcBKzQ3eQMm1g6CT3FGpvs7tafTpjzKbhJNMfpuSFPgYw5RvsMvFAzwGV99v",
  "key16": "5nbDxLrn2Q3wJar2DSJdmQLJeqzjU58DFYqP1XAuAEQZGpSN5pvsMiMLMjpiPewbzU5gkngpoDrrP55tnnLiMAZa",
  "key17": "25SpaPfaUHPXwuicaFUArjQKz1BL9Bs7LUjZdb9CRYmptX3koG9pFXHgvs4wg6jXBdqbmKFAvVFhhHvXFHEJFogf",
  "key18": "5ZpYpfnsCv9fGjimjKPFJhYLPLjeR62kDUh6Wr9oJUV72JjVPkydjfcXWtV1V21CMjwdW2mQYvrNwnENroBuTwd3",
  "key19": "RHRLtVo3WdJbSZwYWZBYQhMx6mt2iDvpxvaiW5u78BFnK3eTiJ7BJUAa7FdwrUCWrmhndyZXmZy7zkgSgrJA1u2",
  "key20": "5nsiYzZZuK2RxiUAAVcAePFTaNasaFP3rSoBd87Ttxm7YSR8EmBPY4fDwVXuHh1qNaQATYd5BFmzfy97tdUX7Hk4",
  "key21": "2UxQvU5i5TeW5qqHZidYCvB5mA6E9qPaJvySMLHLgmukx77W5HkCcqFJLFVxEKpX6iT1MKKdALFATyxrtmuDS5qe",
  "key22": "PL8ScKwmwFoG9yLWueYvEbqYUjqNTP6UfFLSY6jcDoXYg7HU3nYtyUwuRCDyigGYZVDr9Da2cyCCrqEYk5HYgVj",
  "key23": "53RYxbbqSyTACbehkMBttGtnxn6DCUrTZuAetYrX49qrxuAYma8iNorFWwt2hEpBMJjE3xP2boQQY8LYYprzBDGj",
  "key24": "5iDE4YgMzsG7uyBBQvbDinDWCcPy3DHX7pYC8F6hJJWKDGc7EbRjb6oTtrKPAd8reimpZWTfmgs4qHemKazCwF5q",
  "key25": "292gW9wL3bCyWknCg12hJep4U9ZFSUb78uLBChm5879bDfNRPPk57rDAMyM6jL3y7FYitm7f1Hio8sD3wYw6y2wP",
  "key26": "2skDzvJiLBjBYVjWQhvUe6QTD7a7Yi16EXynGNN1andLuAk6jtmLe5PdijkuuyTQFdSLezyMLdKj1J7Mvnq2Rjsz",
  "key27": "26of4713zHk9YMF2qki2RPWbLhsLsvwD6mSEdgk98TsEgjenvkuGdAkoFvzepp6rRYpJFoCpzkCDHLcngRogKq4S",
  "key28": "3aQCxYmxeNDdwASgT4ZzeVHPGdnGnMHv63smytsKXHUuxypVv73ZLBfzh7CHi6K6QY5DEfBNNkPsYSQPsS82VvLj"
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
