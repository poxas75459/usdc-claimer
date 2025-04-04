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
    "qPW2N1BXUmRWdaVDrCbNRCXSiRbBpGMjc7sFR9eiB3KJyxhm1o5fhhA73GgLWFNLjzAtoN5vBeECUuqu8BhzHF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ox6KUKLvs81t1iC5GFBxqcSyoTPep551UKwwzGU4uf1hqVfKnkFLq4iTupxST4JsXDFjyqoPvLhPMg5D3QK8gK",
  "key1": "21HSYtZPTmDVkKRukjToFQ4Kex419uVpe3mFLgV8oBCZB6xZUQbgG5NjQ1C58YbYLNCxbFaoBXaE3bXxvEv8W1ud",
  "key2": "353bEyWkDbdnNbMASEAcuamgGTkc1JVsKaECqU3aJyMmDGJktTLbVR4eve77M1r8TQSbx4DsAAwM2aYcuWFBFV33",
  "key3": "65jFAuhc9wVeSPcgVnHAQBHrQ87J9S4uEGUSedA3ujm74Xqmk8TCBFZzH7c6R8fdeKAfRWHGyTGnQA5UHJbiDp5L",
  "key4": "5uac8e53EpfK2HDWk57LznpvKxzYJJag1MKptLmS1HQuB2QkbBNvHb7jwYzA3wvxS7qZAzaLdLhouK8Sn1fFgc6f",
  "key5": "3Kkr75kD3JMVmL2xrBUH2Cm7iMpCuh49G4JDaWMGnpkBAyU3FaFNNTrjZ151cevu61BQwQH7rtG8uQWDiuwxxVaX",
  "key6": "45sLhqbJPtBRDce7gL5Na5pwtot9n8weyeUX5qSLGkaMuRbWaU4v2uWAemwEA4jpKKumBybSiK76UW9xptcnP3Fg",
  "key7": "5hSE4k9BGKVSFJtMFZLLCNX7tkzvDyRW6yCgJr7TDcGXADnpeAsMS1Hccoc7W9sYfZUmcRKaYxh2T9HAvkpgeraj",
  "key8": "653BVxfVQXvyR1bqnDb8xEZ5GaKqQoKfLLSmmTSgetuqheVCw5r4ThmziEj9rjjWMuJM1eRjzkzdhvpA9JF47X8k",
  "key9": "2stXS2FXW8XnU1tsR72Rs8Mn2v3dDt91zyDY3XhMrJcWDkQDNhNCcmQHsFTvWNcLEP9nEWWr2VDsWf4sUpUhhTDW",
  "key10": "wZfoF1LCzc7d74kghBNoDw6rwNzWA7aVbF9FvzAF3Gm9rrmCmJKvq2DpPA1MYVtGThgxfPBsMDWh2BrzpjaJTU2",
  "key11": "2qez3TDifzRCYVEVdo3HGTuX6UTRQPAzTCL1v6Z1pkXQNvMkrsFfZB32um1B48CQ2Amyt5gSTHnpAJUx5Bonvjov",
  "key12": "2bu7cCpWPFnAYZdrZJbR6a2fAzdDXyftC9LshKofqwWS2sFwM5Y1wGwwGRB9ho9cXHv9wbquEpzBTj7sWBosjxyL",
  "key13": "3akLN2Hdc88jiHX4wFV9N6mXhSZ5umCVb7vUsyLabCvXqAoKPE1F9AQnzPYoUKWc5jS6RLpvQc27VpUeF9FKYhiD",
  "key14": "4daeNLoLXnWJhyCvVpV92bZS1up2XGtRdonpQtpagbH7KuaBCJc5MD5E7YWRQdUHyv2vTHBmsRiUQQdnx8SowwZE",
  "key15": "2UBXYrDj4yBUJL7Bsp97HfDqJMh1Cj7uo3oxrPJHw8CSFdZb2tE8uqeoVnZLjxv3jt2JM1L4BtigwE1tEBi3LJzv",
  "key16": "4iRYaUHeTrptkCF6b5yxeM9XRqpDLknEViaRRWae7Prf7LaoV1kxSvCeAtHaVSaCYpJy1k15xzcx3shSHHsWgQy1",
  "key17": "2naCWSm943oD8SMZJ5m6FAYVuR8NkU2zhc5hPGL7Zr7h3qhzvFqBr8qxfnoZq9UsXRAQ5DmgtGN2nKckATAKPndT",
  "key18": "A423mGqqRD1LwutTB7Kno8Qjif1RDrYLRFQiewgbFU7xPGrhbDm2yWBwpUV8GqVvrY2V3YbwjjL2rGRvWKJMEKc",
  "key19": "gPC8PBtpdmJH4zHkjNfaW9TxQKfur1tZ5B1MJ23m7dGFPrSbnVZHFRiSsRFeged4b6AdHGzStg4kwafJNS9E698",
  "key20": "4ir5mufJx2mrZRf1FiKmjMPfYTDXMoo9CQCStpVhxv2TtSeDiQEPQ1kBiRQSnx3rDjNQwLcJDcybxjH2bvw1kjVq",
  "key21": "AKE2dKwnzFqjSEzVf8c3TDeGyCRt7EYG3HVjp2kYecA9aTrWBtL6PfcQ6WTqrwaJHRdBZrg16jS7CWuhHCU1Wic",
  "key22": "2nQQ6eqPBz2UjYPYRz77ts7EZ4TqZjwXjxMy572ckJGiiVXwyDxdxxMT8QM67pUtQonBv8PJgALFobBwHHiZ8t1D",
  "key23": "2CKNJh17UxDY7h4VPU4ww3RwjjNbEx42UVaqC9hiQUEw1AZu7YwmJkX9MbvaXRWQZLPz3UPCxQavfTYdqsULarBB",
  "key24": "4k8fQfJk6d3d4L2JbMTFcrwuVtZFzXJRKG6CkHJ6oo6P43s1qQcqgCVg23EtMYeE1isnyFpEtToHiUeDGbUSEXQQ"
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
