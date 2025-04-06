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
    "2FhfWFQ4oVoc6TiftK3nRLi7s55QGEY75TBTYgtXqGeNwAcWqjEx4WGMGd68vziyRC61qCbbJEyU2m7mKL4vdeVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhfE6tPoeLDMvJWxCTh9dpMY7Pgy1U99tSRB5oRkLykdmrVquNF4M7xGWyW4bzk1v23VG2ZNsQbnMgXkyA6VpDy",
  "key1": "38WyMT9wMt5v7MHroAsb1FpuYQFKmskyuLCEe3xzWvPdTq1FFNsf9eWRXQ9U6sUfDwNaN3j5nBHL81vMVHQgie29",
  "key2": "372roG5Z1Fb7yeoHquzie7gtnbBeDsFHwycUSxx2pLwSxuAoUe61WSPnbg2wwXiY6VPc6ZJZLuEYq5SZvcwxpA1t",
  "key3": "31QzRPZ5vpgU3ft7jesrFNYXAnsXvBmst78952TMSxtBG4rDbrB5UWvuFuQ1AP5h86Bk6DxKkiqkjzbNRhgB53SR",
  "key4": "67rG2y9qKmkJYqaJFWvPWEngxHsAPQELCXi4f7hCXE1WNn71dJUJJ161Rc6oGfCckEnXmzQq6CPF3tAcjJDqiP7D",
  "key5": "25UbGtZafvkZMw9eLAtoG1AHfgNvoLtdiQwps9RriK1KVDMuRkRFiB2WPqbuH6pPEjh1EoNaEYK2amZJUmY2MpJ1",
  "key6": "64FQH7Y1KZPPM251o2biU1U6wQEYGnjx5QXt2JkrY16xNX4KWhhHPbCcrh51E4a47K7aedhL58tTuyQ5UREExjJQ",
  "key7": "3SmXwr8LMGbXnZEjBHBX2NNDx3vxjJxqYFEV2CtZHtGLhg6zGYukpm8t2SSkon93m7TgnStS8AVhpmf4JFi21RAS",
  "key8": "26eNp4qb6FJUSTU431uteYK9bB3XpLJ3sh7TMKbZu7tGksZr4WzeuH9P12BmQcP4ZSf5FmuY19Ktz413xx5qPHbf",
  "key9": "2Fis2jCmCPb3kfhXgtkpJFpbbow9kjB1yrNmKaNzb5tBiW6X82BjG699TPctMkxrUwQF7ffXU8625eGFjj2VwghC",
  "key10": "4N8FueeAuTm4GiupMG4gDmH5EbpQVzHKvymc9K1dEpZmy4fRZTUbvV3zPA5PxdkYgdKADQzrBxBNNpxfDy6Y23oK",
  "key11": "2SAF5bTviFH4MCqpFePmzAAE6EkpTMA9BKCSpZQMu1rhu1sfFzecaJcDE3FS9NeXL9DPhM1NFCxgd2iUKyyRzFLn",
  "key12": "2jwhtZfFRhBEvqRXs3Kii3Mn3p9QGBzurNGgQnvnSoYhSoxTV9pPaWbjbe2xsxUithuFxibLWbfTjGqc8nmzaBwi",
  "key13": "9xJJgWevwGviMf1pBryg6TZvvZcbVSwWwhhUEbuYEpedt8VpYwQeCkdzSi3nAuDGuEny2yeLhrNKogZgdf86EPo",
  "key14": "5oh4dKV2o1qeeeb6SyAhpkKx5J5rxB2JiqcxnCFNZAuUP4ZEcVfZTH5UijNcYLr2qK1CT1DsJE2UzmcJtAUEXx2Q",
  "key15": "4sVSwJ3o3fwjzsWGcyXSd2WpZbv1S4c1hVbJ68HVc9uQ6jkVEgShre9xjBpJCogheTHScGQ9ZyzUXn1zp5wN5nHF",
  "key16": "4QNZ7Qeq7R2JiTFwNdv7MG3QGgKNXXoQUk6JoPXcmrPBhejKhBmCs6MyUHBATr4kUdaMtaabbeb3CpDRWBB8Z43x",
  "key17": "4Nn8UiS5eZyvnUcfgkn7yvJevYi8PGP4eLHLjxfqBZydqa4W6hmCiFtTeZZioU59EvcqyiEnek9od9rPogcq8sCo",
  "key18": "3XrdygUC1Q7TSwZhqgT1xE4tJYGjTjdmjurCbCofwaCdLocYcBNNaNWPKW5kyswYay2tLte1bgXSLp1S4jDn17yE",
  "key19": "3nLpbg3LeLukaaEx1bybgiZhKksDKMD2qd8SyYbYwXvxUCVXKrVnzPD8zghwb6C8VPRTVNnXJ56yyoE66gaqCTJe",
  "key20": "2NrfjSQeaVWp7w9AHadVYAjAG6atFt4mKLkRQn89AbSprouyC8LKGThannHtSNw4cvRhH3Tenj9z2k4y7VPnpi6t",
  "key21": "5ByHUAJujPv8bDgN6vkMUfYxLMary7Ce22uGCe7VY1jtKRYEKEPDm3VDNq7NUfmfhfVTbgQTKs9SnKTZxfUQgkt2",
  "key22": "2Q13dfjyYT5fduLrQDbF3mrakSrNmfwbCwUK3rwPPkcDLQMkT3fsAmcuuWCuADyYdKfPa6xC5dcjWzRC4CbmnqpL",
  "key23": "748MrGaQfpTTxtmpUhaGZQkAvbTkyFKhkESLwfCssySd2nPxBgCgK4EJXU5pN6AphYQFEqs1TqkjZMQvLXiRRrd",
  "key24": "2vdgUmoqbPfWM8V61zSpEZhzv48HtY9QvfKZ3cKBs4m8C2AySyUfcM46WvAPxjqMcQDyeqy6toScVC74xE5279Fp"
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
