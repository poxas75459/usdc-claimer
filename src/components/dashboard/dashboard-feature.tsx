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
    "5Kr3VGWKhecJ2P6NBiznxLx1hE7yhQuK1B7Vr4QUYnxLSbEyiszjurioG8gAaMdBPVdByFVwULxqjMV1GkmTSnDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1evt4NipdUFJmAByZwgKVpcXWeoRY1K23oWLbv45jMMTQSKAnnx1LemL5FyowwL1k2jkfke55FwD8x9WHag4kn",
  "key1": "5HtoVrRHbyv5DjdoN8xwsvzVPG1Nbbhbn5tLpskPQjpw8DA1abPfL3aPdFwMqJixnCAconJGFbdh1hcwnL1hEQ9q",
  "key2": "4m7WeRwaZpfYUhwjk3emXXjRcU8Y6ipGfU3XvE66xF5fgwxW4hRSn2xfixex4C3NysJ9oZ4e8ijpaDhspiYrjZNL",
  "key3": "4E43DJRz3azwugLbjKBQa7aksPgTNivfdcc5ZADFib7nzp2cNRMkTFphs2uwACUWsDKM3qXoskgVzv5wXyEkUAvV",
  "key4": "4GffmyJEezKK2AeV47G12S1ffzJTcyayHGxU1bQjBb36RnZqp2ASf3oS7eG5LRGybCqfvh5p4xDidmHjfbPS2GUU",
  "key5": "5FsiQDYBwgJpWHUqWSnUhtmofu1VepKBbmJXyvwFLA2TiH7H33FQvY8hiauBtC7mX5hG3DE8kC8zH8nyc9Urqu1q",
  "key6": "sYL5DigL93b3iC7THBNE9h5zyuXqcAQteKJyjnqo4kLaQhYnpBPKwVXTh6nSWxqNxX7Z6cJbs8hAc9wJdNZCVyD",
  "key7": "5WxyQZoSL3ihvu313eGyUHeLTSoBCbRAML1oPRXL137sBYV6ynZh3QDdvn1oJQeJdjYUAVwu3iK3LjKi4SsF5kpt",
  "key8": "41qYjhvvwRSGgiAQCeeef57zg41nc47rbZwokMkdQQKKwu6xnrGYSLBMRuApoG7J9tmQCmCEeZidZ3FWTUQ9reqy",
  "key9": "3StbhmB6WH66SFTTrVmv9htu7GhGoJFz8FzRhrx4kEFoGx7J11RjrUjnhgdMCnb3baisoBB7JqAFFnkWQFMj2smx",
  "key10": "3Bt43ETbBuk7Y2rrHwujcFYYj8iVopxswhdK8h5pkVeKNpS8FVoyi5LaHYn2Rzv117Y51TTQwop4fW2AFgqpoDgv",
  "key11": "4opdhMLfsZHmPeuRk6RqXS4Yg5RtCk6cm6F5dKgzTaVZWoF11Cb7pcEjJRoiSDdmQj2aqGSzDzW14yrWqRVnjHgM",
  "key12": "53PjTZy5PFhqQy7i6uV4m86TuRuFipjfGP75v862xF25BrAEbR8NDkMfnedrqrwL5AbNn9gdrwDudEoXF54Kr7SF",
  "key13": "2t1nP3VxUjwLCsr5aEvHNVhnctBcnyBQoZcv5pV91Ng9WkpVRSKeaYUktveAbd7EeaWiYkGtdfebeY5oT8eMXrpN",
  "key14": "3udGRqXF4h66kAQF57A2RqKuoAw835c6VztwiCEe8mupLiXAxh7XQSWXn7C14afwPqebQCoHR7iNaesdRqV7RZXG",
  "key15": "5Mm6HTE1KwxeqfUvx2giaKvbgJsLf1bmqr7DAXegwKu86M6moQZWKyTcZXNGXqVLdqzvPBsozf6scZuhRVpBQk3E",
  "key16": "4u62nKBF9eYqX4wdxcNNFVnVBbUMQnPkvy32nP6h9o4nRt22RSL7j46mTcSc49AppMRAhaXBbQYThtqC4q9wuhHt",
  "key17": "61QZFyy9jEvX16kadeopbJrxDYi4W5K7PBEd8twiuzKwBbSmUZ1ywvRyiZS3kieEieFM4N58zFL39b4Di7YjRRQL",
  "key18": "2HF9Buw4erkLad3c2dKDKkAg2JDFe3wgwXbfuwXXHxgKZM2MrjcBvjioddJvNebiQMScA5bsfS8rPB9XTfLmMWmA",
  "key19": "bgpm7E6jvcPuaD6qv8w2AN87DK4MMbksmrfs6CBwUrcKeK6wJ8QPQgCdRg5jRcBrJrFRbay9fY3mLHjrUHrkswX",
  "key20": "4kX9YJKRBKjBATTRi24MxYv9MvwzzKra7Zv9hX9gy3hCjwdqfZAdkhEq642RzwJCq6Awp9XQo2knXzHhdihcF67x",
  "key21": "2ta2XkAyapuVnr2uPZpWeSejGaWMxRceonfpd5rJmZeHYQLZJhGhhhAqGckqVWzKEiSMKeyBSipdKa8SVMgB6DCA",
  "key22": "5ycNTwVXWb1XADw1bSrwqqxRgphAy6A2DaFFkxpyJQpGfCQFQZL4mp5m493imbhB1pQWasMmCq1AYFQKyqrXfpW4",
  "key23": "3jXYSef2Yn989voGr3CKXHMvaGKb86cqLCjK45e73GszoXtohQD27fQKDkojPA9W31FNdGAavv6YnUnpFer1vjQK",
  "key24": "gWBRvuhSPXyZWVvxiUsV6LHLFPkk4FbFFkBmfKTtAuCsrAoatXp8NtjQYwypaF52aZ5bH5qXRfXXoPkN8Vj8Sas",
  "key25": "2VszcHdv3MeTbimBvgcQc2F3yDEC3qajPF4eiBuCQsDHKYrd8JwxWXcLd4X3JmSY1SXcRjgPMw5RucfE8PEceVJy",
  "key26": "yH7M3zc4xdM9C184eifN9nAEC1tauNVFUGpUjCAJLbrgyYHjqrPYCTSHd49wq8yc9Ps5YZ28axQQ3R8pHwNWKrB",
  "key27": "5EqeN26q2ZGinegMoNDUgGRVnbbcT3EP6W98oopnk5LS3JNBLvK4VZFQxNCYtmBkwtdyZxTk3AtmzdY1MafzNoao"
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
