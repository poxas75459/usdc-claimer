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
    "58esWQaYP2gWMuciowRJG6JKrEeyQq3uFEpYYK7Qu65oQkPWmCzzefE4vwVFow8s3PPyrGrjdbVK14Lfq7sQGK7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AiD5HdBHUX6eSAyDuAd4qKVENPPG4sQZu9eLwfdz7XdntTx7sJTsWHAGMNBQTrgNfJf9i6ZX1RW1UKqcYaN3atV",
  "key1": "439FEy9zjJCtvJByw8AzsGKZ2jjzzkJoB4jrouAdCMyQ1ozwTEy1QBgkjLhexcezs7PacLai5j9ojLLXSBWNZ8sn",
  "key2": "2DenLB7viD8mWpSviFpybrDfsgjBaNX8NFBy8JWrMv3gKYrhRnVi5xyhDjPbVLeeCztRr74cctie21gcqVbtrPky",
  "key3": "5oZKRzYN6uyfS5z74zVdXK2vrvYxCFirxbyxwwueS9r5BUgUtd5EABTXDqMvvqSjeuyZS8EEwJFWzyDuywKwuCwY",
  "key4": "3jNgyWznQkmLkYSp5MPrX1kJccuSjaSAmyeRBgRZS5BULH3ifTRFz58CxrtfmhbXx54Eq6hgwKjV36JKJh3W8529",
  "key5": "5mmE9cojtvaNoE4TtoLttUBsm9TKM1yqMsrPh4UNekK7dVir6GXbvxYnQjb7sXjf6TyRSqnmFUErm55FxTRiXV4T",
  "key6": "2w9KNnX7KPCHJ8DGboq9kNPXjBfm58DxZQDt8erNp97Mkyfh3AwgPhW31EGd1hXq4fhoLNr6EHnRLD9rWFZBkbJp",
  "key7": "qQrtd6rcFxJUgAMn7dzsYhxE3TFpxhQZUV4hxXQNB75FkhgW9BkF1ckbN2Sy4CJyBREKZqoSPw1hKZgxeoUChyz",
  "key8": "3p8u3pYhKS4Z6gMkynFdxBT2YiBcXiaZoY3MLssNd3acx2uVqLwWvDshfXw4JbDVfuw8jah5MKcz7SkoiE4kvDJb",
  "key9": "66WwXMufkiGKgyCfG28Ncs1sGMCVTdED1S7S91mw6CAeBhiVuatmKizmz3zfqxFcUC3wQKHaLv9dJiCpE7aSPZ3y",
  "key10": "2vPxsxLKMreAXrskZJLYgeNoTDdjr8eZjdRjGtMpTBTYJ1v1iPt5UMerfmg4LMyzyRwdKuEbkrNykuv7Q1BkAD6h",
  "key11": "3r1UacdocSsD4zPqLwSf7nH3PD4FRHwUMsi7G8fYSp3YWg8jxf8zJFeeqLdZZ4mWTedU2esZoHUBUie577WW42q7",
  "key12": "64PFnuiwWf9y3g8SBEYx3w8sPxUK7pbLS7CC9tK1tJWekKQ78mLVsjWeY4iwCiuHfERYaaH8eHgTMwMqdaXRDa81",
  "key13": "5VHkLB6SfTEeMiqAyuWis3L4rBzwWfd4cjUYuCb9rEzBLJvh1AQdN7YgcpUSqqRxw3FGmagL7fQSZPfVPKG9oNWc",
  "key14": "3RJRgEca1SBqrRogb3GED7mNWfL5TpgWJHWDFEi9BaCZmGm5UzKBwuHjJS7GVExKHTubEXDTdWtwXAahKCKtjJKR",
  "key15": "qqU5r7i8ugBKVcVcKxXREenRFqY6ThiU7XTBr64AJ1YinvvGSCafS8EbF3k8e5x3cMhbKAtgjZ4cg4c8eudDi3S",
  "key16": "534HFZK9b5E7SSWKMmVZXxp2bTGs48QgvH1SW9qAVwwUAuHSwYuPZzTm5sPb489ywPSQvBeeitaY5Pk7yRBkvXtC",
  "key17": "4UzsWfMkZPF9hV6U6Xnv6czyhXuCXW849Bjjsxb4s35tTXvCeK48vJxcuSy8XmdV1TdBvnijNLrMoLt3WLjW4J8E",
  "key18": "4jPFWykZG4pDQtDWtB2ENRbdT1DyAfwm6VByNNjCs4L6fWDkd43fVvTcNaQfd7zjCzuWJZsoBpybe8yicJmHsEUp",
  "key19": "4pb5aoKLSynu3QAYGoPQRWxQhT1HnS36NnrahaWtVbkxURMpKCD5g77iNN2wfZ3DKJ9XwcU4NQozWS4UwtEEVWRW",
  "key20": "4YPqeMUNVeWcaoKQqXsa1AmFpt5ztswk83zW25b8ndaSvomRtK93PZbhrW4NtugFv3wZXEaBrVtjL3M3PravYxUM",
  "key21": "3PJgtdNSDbZUzW6JeuCU7CDqqEZXtRjeYN8CAmiFYzBEnXcARPAvNBhEfa9cXErvwNcBPr5VMXwgBWAzHDYKMz7S",
  "key22": "5sMdvq3EAt8DTHjgSP2kgdKNVTKoiaM6pCqMkZfQxEe3cK6Xmrr9vMNtvB5sEAx3CBK85v2dfupPHowvgaqmJnSF",
  "key23": "3LY9dS6Cbt8xBDJ6Cbsk4eV6NvZE8mhvByY4QWexahbwW88vECqW14cbRD8PSE4Zq7JgwxeFB8vCgNg51dtKHnYZ",
  "key24": "41jBDmqw7NzhagpUZSNCJCCUrt6Zo1NFRf8jApNoC8aCnQQqpmK8YC4k7zfHnSUWYZmcJxLBkzpZ9FbLjgcf9XHn",
  "key25": "4nVa1p3ma5bcCS7ZVfBACmSSae1hMngD35ZQmQ9kWXLLFtjnvi656nj4RmW9VNmguNggnNCvvxZ3L7DaeHKbmR5b",
  "key26": "4u2JoawCa3JaTydDwtmg2gexvBW69stnXtTp4VWX3tKgnLtpawW1LQ5X1vVRbrJRjmVXVEdfKBkBeuE7NA6Hs9ho",
  "key27": "2eA1yiL8rLjpRFn8AzSTF1bUWAa4upvA3nUgg3egkCHsigNJN5uV37xBSp7BE2kQEzf4vVCBjgXadRKj6r1jXY9L"
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
