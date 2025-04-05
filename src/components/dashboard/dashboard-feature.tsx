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
    "4aicJ9PmFTxQrHX9MCL1zz3Xv5EZ2KQV3g2cWePqQfdikLfohXudiKCNAb8wjobDePfoeYGEooaH3Kp8NCkCLVGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbQgmFLb9SQWqDR614NL71oWZRCgFcFiwskZmMo47wnKAtmnSAz5wT9ii4BbDg8y5TM5NVTAvCBgoyjEoRKRsY1",
  "key1": "5Giq6RhULBoooVC5JQ4Jzm11USLLeNkZW6UowGh7isfip9yrgH4gsv5ytcp4xDS38XnFkgSTweDT6Qie2xmEnpYE",
  "key2": "2SW8tboyNes3CaQXV7nfopA61xBbphoRA8qyedaGEWp7hJ5i3YdProBbUfwDLvu2NFy46tACg3ZgaMb5RNaUU8of",
  "key3": "tEv8axbvfasqj5vMv33fmrc9L9xY8kPLahT7Zcq7jJ3eM229XZWFzsfVDf867hG8RN92QBMYSZwxjxNrKkpeLTm",
  "key4": "f5dLiFmpMYvue5fGVbte2zfS3Wug6uYeK9ffernLRfBKFjaaoi8bfEv4egK3LEDbZyKhEb5F3x5VW5Mht9cP7zb",
  "key5": "3szLbPU7oWVP8jNjgKzyrbQDfVF2YqkSAGKhSvhxHjSAe17F7qU2ULmVe7Cfii51qMvLbx2DoZidxi7p64pyndVi",
  "key6": "2SDiVv5JmvAkRCSParDtwAdUf7kPQnyx737BSwqd9sJoHQ5Hkt5xxPVu2Kz7g458Fo4t1XEdRjXbQQn88a7JbYck",
  "key7": "5BH5o27TmbwNBVd2SiWwNS8fBccNuPpA1EjaadX2S81b6UgiWEzkyiwN412zxaJCB7pXihT6WwNL3zvkA2QcS7cV",
  "key8": "3jYv3ihoxNGqTFjjw2NJSdMt6B3kGzvr2xsqHhNQXUHEFr6mqm4Ku7cpEC6K2h7CiynaEnQDCMzviCk7icoaRwPf",
  "key9": "2CYzGsbpZhqyggKTY1x7mULd4bGymguBYagidz3kQMFnFSU5wkeBJA7Sa8cE3kg2wwBorEorjFtUYQwBigSej7g7",
  "key10": "RWUM9h4sgeUJi51uUVMztsvu6HreaNVQffStyzDSjG5UuBjeEDk54W18hMtYZga11ioRpnnxk6hxxWC9i3g3DAN",
  "key11": "eop9ceM1wGL3hUQC76Wy86iJMcmo3ykZVZojMLLPp4dhP79xiBMuHy7UXc8gtFnk3PBwLmomjnzsn2AYiCPVMx5",
  "key12": "5phhGpbSkZD6tEQ1cye3saxaEi6BNgjcvFaA2a2ik8MGzvTgwxny4HyNXkMqdpnbMNbDVnh4MWtUccFK777knVDL",
  "key13": "2cpNogwigw9w2Y4CJX5qHpMieQjw25DycnfEJXbAYmCQHpA274dV6vPzun5skPgQHXUchFoEgTYTsXL3oucVabQx",
  "key14": "mvW2bcK4zcLWBGnm5fzbCeXm3Rrqhmvx2bKJ1jVHFQWHTaxzzE6f6VzHmG48Vq27Pj3rZpj8eT6TUHWZaVKY5EJ",
  "key15": "3bo1p133GrdfX2tWQxMEuS8Qo9hr5UFLZj3cCkJkRfeDdDcwBczkzJrDSKAhub6uRnt9GJ8MCuL6iVWFgxPjCm1W",
  "key16": "5QVJw6CsAwg9i8gein9ZY5DoNLGH98xTFcHqNXLUiECk3MWkfLAudKPZd2CqAvWXhpWkZ4Yh7Zvpfp5po4yXJRPW",
  "key17": "4SsL258R91Qs9UkyascQq8G5SJ861yi988HZuE9zPVrVxNeYEABLkoTbiUaMR3vsemZLPHffXikNyS8tixPVSeXR",
  "key18": "51zHXBGkcKx7ML7dkRH8tp8EzFG4r246P7xmzhrHBiKWtiTmjsK7K1Z5kaHhe5XsYQdyEpyXZt9qJJayfL2bqM6X",
  "key19": "3yUZCSndgvwTw6MLvpCUmnhGwFJcyYbbXkcTt2aWGESXj5gWD2mYGB8D7FfMCvg3YXr48Ra1bNzQCZDv6qxQ47tD",
  "key20": "Ys8ERKUV6gf7EJt1kGZJKQwtWDYN1hJDWTkZ8PeYqMifHQ6uqk1GcNQQwqSWN6NegoaDvNNFShxd3MTgddqpv92",
  "key21": "4a3unVpHEad7mkaDSSCt536RkEmBi39dhpmZ6vf9jaNRkqH84uriwuhGpvJyDKFtncDhG6mn1MfUD3Psz1ujCLnr",
  "key22": "4LopNSV2qrVYD8V4gKEYu6H7YBrGKdqw6topzzNnABMfzkZqmVfnnRb5Dixs2AiiNoiHz8jMMHAgHowaMyBjcy76",
  "key23": "5UsfTW9SsK9BQqRH31zKYkwNmr93sKJnrDQjyHua8ut19WrHgoGrP1En47n3KvmhGEX1oUB5qUTq5k4RADqfYA6E",
  "key24": "4hSP6gLDipqgJJYJsnYjMPLnWyBZyWHPntZjtDEgMtGndcBwtxtM536o2isrXo41neWtKTZXUNApKQJARG8jvGmg",
  "key25": "5prAxcAJPV5xyjHxWUGTUw7V7TWcai4pk8ynPBaucq6D2epBNLWdB8HjQS6yYMgNKMAsFB9752APF8B9vQcKSVPL",
  "key26": "cgeYfKBNW1FCch7Wr6VZ8a6QATCL9R6EbK3SzR1E7BBeAyhf3shBHkpRnzVLCJzRugPhpYPfWzxN8TrFgoBvNJ6",
  "key27": "4YiXifTQa75vrXWUr8L6yRAMNohiotMBZAwB2YsJhUw5T4KyfeFStucDJ32PjvtidSHUQgPosTrsN8B7sSfCAJhc",
  "key28": "kf4E9mk4mQVWHB4DFfG4FF3qn5mNDDoSgSGUyWvcBWxVj62jpAtvBtPEAopNC9ZBwtR7aFPnqheVykbCE88m8Pc",
  "key29": "4pPMpkKpriRNfcZjqEPusnpZCbxGEHGusvMMxeybqhXj4wtoATMEZE5kK5rnMwPT58k2XkfftoqouRWuBvopgi3u"
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
