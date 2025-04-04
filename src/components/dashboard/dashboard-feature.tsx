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
    "WmM1JpEmWhjqJKFbcqVQ6X6oGxucj6tHsGsuGeisDFkEUuhHYTAdT4EtUvioa3mXbYL5paEfKJ6s19xAozvD34b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7fW3SDFpsQ4ifAiSqfPR57DrqKmsWhZRYaZPLAphPHKokoX6cEqbSJRzs3v5Ve2joVzWvbsw7KRnzpKqjkBakK",
  "key1": "2ZEv64LM9PrD1AJ2PecvbcCYMaTCmxBHDYeqY9bJKG1d3vQL7fGVPEawrKi6ZAMtMFBDyErEgZNWYmDGjQoo4Lrk",
  "key2": "4UQERcuE23aaDQdcN88MbaskJ9rWCT7UpENBZFPoJjL88gjmeqMnSrUrLYLo8Jnsi8KCJMcnAiwWxrkuKMNgNA56",
  "key3": "VKzugSuAbvfg8tRFnttntU1zCV3TVrNAH4WiS4iqxhe1FhEJEre6dSrpX8kMJBh81wXbnvm3KcLx8zHLJRZQyR3",
  "key4": "3HZfPFfHwdKeJbFrbVTiompbPBDeKqH4ofvmGgxms84izinMRVFe3CHcig67TBGL9saj8bQyMQcTXx9aNUzz2tVf",
  "key5": "2U2ey7Z4a2JEpfTzpACPmPXS64rNyuWkMRnUiRkbQpW5TvGWGjk3ZCJLWdWakxk9XHRFhV8c7FzGsL4qLk7QSFSs",
  "key6": "42yAZYsYchn7taB6sGfsxbAyiBX8pN4tM8PFByM1JKpFw6JTrfdT9k9GgR7Lipx9NbGS3DM6BAaURoV4CMxneUjS",
  "key7": "2Y9NMpsEx1Dce4g399a1tkMdyUNxnCT1Z2pGCNcZEtMHJdwJpJZKVf2a7rpHNZzwhsBwnu5ruB9LkXA8QEEr4GHA",
  "key8": "4v6DSAWiS9o18JGx7Jpicuz8voAY3xGAPNoJuREgU9yhzWacRuz4cK5NwH6h2fFpXzqeqpLtaeLWNgHsZuNHEoJc",
  "key9": "LVGnoWd9YkFor5RPdThSFt7LgyEjHUw1Pa2xG5qbfjSeUu7jcNLaNb4UyRqJwyuNrSXnkhbRB17cLnusFsZ3639",
  "key10": "3Wf15coQTtk1KkiwtQK7XZAvSNJbCf4NDa9cFbZr3xHo5HShmoY7n4VSYC2P77sZe7BC3ZcD9Cwdgms6S9kbWvgT",
  "key11": "475iWhp9ZRfRTnk7BW8k2uNXJ4CJBD8cUf48PSeeUTWDZ9YwQVJ1kTFaDrFxjAEc9edxvfPBc9yBvBWuw4dPHfV2",
  "key12": "2r8pfasjc13QEGhN31B1ACr3Ko9w33m9D8N1NWUK3F2ADaRay4F5LmnKs2mrpZ8KBb4Qwo2yuTrQ9D3UMCN7GmnA",
  "key13": "2nNJR5a9gHpkBWEUhSFfL8LV153WD1VFCPmLgHK2pEYoXcPcyg6m2cb6oCzLLLkWKM615gyNMk413xRFVJD9TvDh",
  "key14": "5MRt2QuzENVMbT9hhdsNLh6dEQ6S8TXNiRrMdpwitMf1o2YDL2sbBgoMqokHkQAeCYrK5tYebvpfRw9u5nLXCLMv",
  "key15": "38gPC2PKcTogQDdAnzBV4GG79VdDe6atTE6j21b7LqBRVvW2gUgL6W5ZUBH4yqHiNpdYkLci62ZT7qmgs7QwKbHR",
  "key16": "59vSyh7r3nsBn8MGctKcFiTULMSgLXqatBw9S9knuuBpLxkxV28AAJRxdHE8yLDyFSQaRnC3vz1VzNAbQH3ep9k7",
  "key17": "4sDSfgpM9yA8FMVJGmSnh7wGLYmp4LmbzBNwAhk7WVv9a5dQdooCuQS3GgJUS3nCpVebKyT88VkgDGidNxZjYsWh",
  "key18": "21w6NkXDBLzVapaoZ5uGybime6st4mX54N7fsCnNRwEnHky4MDc6Yuv9HSn3y4MiPDYaGbu2AfuisYbKwSHqAkhA",
  "key19": "2D9ZZytFvCGggtCtSXMrMThfTcRo1JMNtDtpZbnPgzwbx8hogAMzJPeirJGjzRmgZL6vJhSvccAtsPNfGuCj4Whp",
  "key20": "2ANwTHEf3wBK4axUrMbGFVy28HvC3HyBVaK1ZPpdnxybMkuX3A7CgNLZo7Qrb6AFhZMHRdLovCggXhnkgQCgxgKk",
  "key21": "3pT5LUPK2DDdqypXaMWUfDbD86YcpyFdZ2EQvDXwqA8mzDEQmEZ7J5xujASAyWdzYjZbuYtUBRcQDgi74FYYorwN",
  "key22": "5muofGmTppjDXgLtwZwm67as7Nufbe3pfLGJn7M5uXFxkEnsMRdjR7rw16MHhqxVa6HCT2jQFMzLYoGURjYiMoj",
  "key23": "5b7VAvL1uNh4xgZqcSjRd8bE1xRuh8gueU5KqLiZfxa2VCxrJ768wGtkK48ATEXmDCeND4RueZnreUWPspS5F1Cj",
  "key24": "3t4MUqYtyMBxm3FBuPKTN9YitBBmstGGKQj6URxv6AhUdF2MzvMUdEiNGyDY6cBzH7MmVLR9MiyBWwMrkRkbWMED",
  "key25": "2Wi5KKDmwsa6GTVK5VV951v4dksjTS2ZEDSVk8XKPng9voT2VQMHtcwdNHNgRNYcEGX2oAKbzTsSKDfGdpvPtzRa",
  "key26": "63Q5Y63nKv5ysAwB4QbykqLimBbBTUoeXKJX5fFVqeMc9f5QyiVMDJBYQe1fetVfwHtf84uGkbZVTxzjxC3th3G8",
  "key27": "5jueqsWtVhzwqPexntfVCP2VQUhowoWPVoAK5Pv3sohjQEVLRS59VmT6wyYxXuahVihg7ZG3jaqw8bU7BZidVJCL",
  "key28": "2K2R9igqvbaA3jVS6LFCEsDjmU34ZpYBEK4XKNHzT1ER8uVQRgpRUcSRfhUUuEx2KxtFHSfDt1LGbgY8yQZafwF2"
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
