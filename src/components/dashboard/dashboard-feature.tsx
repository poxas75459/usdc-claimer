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
    "4ktFoJhgUXCs6u79Jgo2NRvtHWEC9QXMruheXK247ieqgjKcZchznTbJJTG74F9kePvG9RmShUoUqQwp3CqBXQNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4t6Jc4xYJg69m2NdEQhjnMfUaYYzRhvXpSQa5Z4QSQyeEe6CGhaCjRqNhxtKgPvPnaaNNx32qf1V3HK6hnPvfs",
  "key1": "81ofWCRpDF2vHsiRKfw9aMLxwUdvyZkvxoewpkMrBdXHWes7HSjL1pHsM5ZzvdnewytLSE9s2fbj7wawsqc7L4H",
  "key2": "3RynQDhXRUi7oZDBVxvxfzyUK1Zgcvuo8Pij7rbSbBsN89Mn878FzBLQ5teHnFHaWW6HjAh29PV8fCPsp2JdFitf",
  "key3": "3AvMAPhBQKZyGeB3o92VCZKFfwM46xByzfX7jEww4y4M9d9Anc3ZSevQHPSoxUBxwnBsVfbkRshdgYEbuqNydvNE",
  "key4": "WrnW9UVqjyzAx8rPLmJgoc27wn9gapSyj4BC1vqAmJHxWgdwitesrPCHAzPoDxyJh4YCS16yirByH8C6m3wJGYk",
  "key5": "3zj7KVifZU4S9AzbTihqVQB5eougCLEAzmkEckPKLsoWJEDD8E2ZfFMWHvAjuTk4oxzJ2eabcqUks2KTBD7aDLW7",
  "key6": "64b2wv8i9iHKJR4No9zwyfu68S3NCcAmtJXe2g61Z2UQrBPqp6tTeEHXiNDUduP9pH74y54jS2SfaEeoELeVWjjS",
  "key7": "54Kx23copp2V7z6Hc6yjCRfbATNebrzTr8Kw5xxxoZ8gN5EU9nfGf9ALeiTMM8yZ6QfZ3RMg3Y7xrNc5Xxduxtha",
  "key8": "3WncU9EwYwBeCQu429nk2U1VbD2tvn9hAVVLHfQxp7caRqrgxYHJ153xEzN4awurbfSWVEaTRAEH2qkkETfUj6Ff",
  "key9": "5roXFGouxKuMFk4tV1e6KnQCZugnLTudu32qpVtJXrWCxURMF1rMvwDhHgWRt4HjctqZZ2gGefdDmKGVd47jJ4Ks",
  "key10": "3KBEt6iseF9fZ7yjwtDwGtfoiHfogwKUw9hc77KEFn7yKV4X7pSxBiTJGtFcybHH8HLPzyZJ2Fh1hZckoUnrGSpz",
  "key11": "3EVtvWtTQqB12ptwZrfDsXcEfWVWzdd6pY3ocCtAeiXErctj5jAAyKdjTXeTWTwXdypNVgi7wjRoY4f1DHfQPefi",
  "key12": "3Soo3mwGPyu5VysoZi37eVgSWegxxK3dvKNtMuyS6XEAg8U9pEKXTwFoDmUuoyb1Ke1bi1t5Pt4Cpo9pVtRKW96o",
  "key13": "5ptxScxuZszwwDnZtmyihRhTVr8fvG6746EnRBhVHByasSzcGxV1nPV9SWqiUZTtCED7a58c3SdBFkP2HmuAiZAw",
  "key14": "DDArTEzqSzvbwQhMvg7g2UfQhUmnwdWYYaTk2TDSeQQPZ1JUmNCLAgcMrKrPQP21QScrMvbUKLdwUJRaunEWNQA",
  "key15": "2aFSubxwMQj7umcLSzXdic4TmrJeYHFpPosU1Yn8oyd1SQf877Gx2243RzbspC4ceYCJon65j5PeDmT8cykwgzcb",
  "key16": "3HwrKMrdXStUGY5tcXBBpLbNx7Bb4FoaiR3gzHxbN2xmSfwusyZ2PaKQNMDAHyifEn5x6ooe7ALns6M51e2t2A1u",
  "key17": "4j8QZ5gDvWYWwABNedeJstXegB6sp4BEcKttQmwDqMLGSvdYSR9iBfGEkfDfP2XFpeJmJ1Fv277yFZ2PXWyQxmFi",
  "key18": "2s2c4FHu2E5Ld97iNNyUMajvq5XrHLzR4nZpmkB5srVsHeAuCbJt5gvAquNXP4ctnwintNV3j6aAQPg7mWxmKsXx",
  "key19": "27MvWEkqXf6Ah4KXoK7V9cc5ovZ6T2CYfgM4FT4yLZZHhpgWLzurgh2n4HTG1uwndQTrYQKSbE9tqtvPUCteb42h",
  "key20": "5j2xPLNejxj48WRUPfaaVQQCMLBLSz6eeh24nkhUDSYfVgsBzxJT9wxoXYq9qLSPVrRhxdLWguaeFDbCSX6764oL",
  "key21": "5UvUP7B48J22oiRv9RR2JH33Eetr21Xb4PwZ54LGHTT9Njt48Yr7RzHS76MQjbpqzyyARAEacbXsJ9ZnMm3JuwaQ",
  "key22": "2Cs35LZdXXFPbXabaBUE8qENGabT6EsnGL3bMZ1kNWUUmEbxuk6tDCeezUonaspLbAwUSGp5aimBmEWNeDJLdZKd",
  "key23": "HyZA8vEaXnPsCzqTsnj3FVU1pQUwHN9D2kkGwUwEM2qEDwhjJrxLBytGqLyJhTuRBeyrCY33krgqD9iiYTaQ8eg",
  "key24": "4E2C8StgRXE4NRyQgiJVNPaDcimDQaw1k16iCaidnzH5t3K1YSjtd3oVXD3gYSyDP4iADM2KzekVerVRFfKXudpf",
  "key25": "5H7m6h7Pc76Lht9Fi1xZv4zs2GQh8oT4jd1SbL6rVQcpi9SV66M8rvCmjWmmSTogGU6e4C2XDQnFwSJHiguj2bxP",
  "key26": "fz8tmaDpLD1E4vKMt7WrzYum1Au69KLU6Co5NDUnMVMzg5vKAbEiTLWUjiWFNX8e2CqUSZfgjmAshiM43JS7NUG",
  "key27": "FrYUStnR7yRoJbGucsbMv967HB88AWGhwu8K9M46CfkxoqzmuvCeeEzZi1phBieVuzXEN23ss5yW4JmPmdg65n7",
  "key28": "3JBCwHqf641DQ13tpfHdQ5St8cdEHEf29a5r4KK1EX1Xi8GLH89NWkX5EkUHXzwFMqFBK4v7ZFDcaHhHBEJGnJVp",
  "key29": "2gpR1Nj1TDqaN9NTjobBdUJTLjHFMJmvnkZUBZ7stmdjS5PEtjvFsQ516794K1mHNWskjmhG4mYBmzG381QcpbJ3",
  "key30": "2t3oYXNVH4Cn9JQ7XQHhrqUxykwMaF2P8v5naLCiwB8DTkysgdhvbDtRwGTmyXpodjojzBBiZidaGSW4zs2rLitL"
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
