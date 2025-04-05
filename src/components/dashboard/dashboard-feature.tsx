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
    "2UTvCK7bmQr67e1GupC7SFFNb8KWajHirmn7HKK9XbcGkZ8t1hZB5sroEFdBaQ3LKvGQjDdX1VVNcyLhP8McxoKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vs5w8DGC1hHPdbd9rDmoA97ZJRNymz6t8KpfUPTyrdbuBToHVovKFPf1EugaFzGokptM6i69CKQR7cPapZaePWj",
  "key1": "655mKJax7GE7zNzoed2KLQa8PJAJTdUqa3Zeiwod1DJEhzKgNad72tzNximA9QQ39fGybvVbuGzK9z7epL3aYZeq",
  "key2": "5sUrhMjoCtDM6P4BNhhYAfnGE2PCgaZNmNt4esmvBNN5JsSzdPNRU9W6cLDY8NJSGC7u8s1c6qnjPZUZeTTJiBNq",
  "key3": "2wvU1eWykxm8FfjZHDNU96wEh2xftVrgqqG69u4DRDAee1pJZnqKbHGgh68Y3ZH58Ai1uK81BbkWexXjYWqiVy6w",
  "key4": "9nfRQvupsnsLPBz1QBtJF3TKWfYsoz4XCo3rzHFJdrnR6HsS7DFJ67A7BhXFbTUMmLwyrLGo7vskQaYHRMhngqV",
  "key5": "5UGspNTm5t89FjcWWRA5BP62DQrZFpVyKpgrdgKXbwB7EqB3JYPVZ9kVepLbz23dZDEBG1Tt3YrR3zppbz4gP2M4",
  "key6": "Dbgjk99Uh985G2qfnrfhyvr8qe5HtWpqGnqSpyAMVELGCZN2JgsmrxXntwPrKg56RjHkSUMTzWdXXt3TULg4YEU",
  "key7": "4599uBB5DzFgL2f1o97TtVV957wTxD6VUX8FiSy7cYMyS3huriBgwD9rmwwL85GV4tXaAMmL57iqGtnmxPc9LAbm",
  "key8": "2fdey28Sw2WPzRh65oh65zSWGGocxr2N8jH9A7tU1r5NN8iGNERqpVJf1bnESVtPsSrRdRMUecAPAXGNVDZ7XEHH",
  "key9": "66gHKoMjWtHfryjfR3H7H4vtk61HeQM17X24MUTd9YzwnSFycgbt263YqPvNTuNuNznM6UDGAq8YiLDgd5Liqerr",
  "key10": "2E24Jop6dSziKHpGjwCw22QmgmqsQzM7pTSRSqUE9UVHsdFjyTEtAtniEfrCipYzBVXYi6VDACxv7bebBLSPsXbB",
  "key11": "3Dij2TSHX8TX76DLZjqsqHmPmEdRZNYwWjrqahaoninG8KgyFB6L7bfwdxcVzjrBKdAMUF9C3h8epKFGifMH4NxY",
  "key12": "2JE6HQoAKVH8DG7NvY4Wx81QDh3M1ZLqQgFpeuJcaGkVfZ1hGpDdxM23tj8abnDDScaqcBfaeB8ZdJ5XMJUZcb79",
  "key13": "5xwFXTanRLbpfwvvbAuxKyFoSG6RMCFLUgKYMucC7zLS4N92xtmkXfxFiR9xACBKzWYGwCzraZB87yVFst3YzpdN",
  "key14": "3dKf877Ktqd6AADv5bFs7id5YKifUHpZmpDeNpjN2TMzJ434LDH4MjLhpPjmJxquKKypcxBGmY6RvCLbQFH9PkTb",
  "key15": "2eJ5W7XuZJZbL2CZu6RhZA5R2fXiMzCAkAHFhduwqntFqTin8WKbTgDrTtxGFq6d1y25Fi6dN5dAqKjM4aKEdsGp",
  "key16": "58sWFvbshQDyEMr1cBmBsT89s1qRoB56vF7qy8eM5ExZ2x5TcWcgSuiX1jiWJGdEwwZB94JC5mW4k5GjSyjAGxK7",
  "key17": "2WaJ11Hq7Rkyyude1U6g7szK6c9vMvjeFqAbU43qHsbHnHyzP3MyFjbqfvEkrWCn3KjB5hnjFmehBryQZEsQyV8B",
  "key18": "3trSzwFDTRBpebDtgcgBQYidmESbhvEbv1XRvp6aKzhxwvjVW67TmZBNJ2vguiKs3yqByNAqqYFV22NeSUMVvxtX",
  "key19": "4NQQ5h3c6QggZydHaMcn51KqxLeL9Z1qAGNsbBsDsZiukqdKasb7ejoGGgssDhgMxY5T8hYsCygiqipevvp42Ssx",
  "key20": "3ykyNSHVACTnx6BmVzhUk7VSBh4yJX9Nn3Ab5P4osDiMFQSeBP1i3PsKXhM6kHPuEGvHg5GmVXfMciSedVojoD56",
  "key21": "3yk3Z8ujkHbDihQ7c4tUB7BAYdSE8efzGVR6RxgUpTzDkjCsQXPPosYGmfsgAf3rARij8A3gP6im37fazfrxJSo8",
  "key22": "49vUJCYQStok9Q1yjeDGwc81CYjTFUzzNxcnePz44ktjt5SSkv8nUYaHMiuESxTXqG8sGNrgoG4KbXD9VRHZd1F4",
  "key23": "24R6UukLWsjmLmqDtWPCsbLgTyekff2j9T4mB6RN7saumgog1g3mqLsRS3CmttqGsjyfcHy5V6Z9kocgm3soNRdb",
  "key24": "LsURMPtB9DV3F37uQKogqEzyJoYVZJ4spnyweHKhgNThMDP3vwrM7juCbgvKfkPnp1CiwmnTQfXXoMRN5mNRN3T",
  "key25": "FaHeGax5xrRYrqXVgH4rRw6xnA8nx52tSogDUdeTy1YeLUTghRimkhxPrH2pKryzWkLZmzhbxLudH1qHE3odpvB",
  "key26": "2AeJwEUSpPyGBoiDJx9P4Nb1YvvGnePTQaZffoKG3XLs5ZFxSdPBUUtogRtmiW993X4yC6v9BAHHD9MuBkhAvycy",
  "key27": "42rnnupiby7xL4MNmRXrRjAWC4JQ8hA1emUwDJTy61mQ2jXQzBq8zb81VBByoMvaxM22YX8FvdCk7RYWRZb1KZGH",
  "key28": "mGqJ6oL41w8iSXLRDMnkVduMMoD4K5pc4F4vFj1JCTArNCZGPZ6nyRXAEPkSZg7W8jqsMw58UuN6WY2xJETMVdS",
  "key29": "2Xtg6vC9pipJyEowUKTKZ4JdxmFp9t7EuRxG9AcBeJzpFRj36WfiteHtdvxpTuW1wX8K1gHUj2os2GXgDGzeG9Kf",
  "key30": "4QwNM1VJbs78nEry37PeAFY8XPXLcCxWmGkydA8t4xuAcTZUbK8VPwRK937vJz6NkrCttLFaEmXb99H3tSTFRU8c",
  "key31": "4cshZFZUxPpa4A9LczSdaHyhToXZkM39KVRP3kHD5jvJesW3WrwHDwmjA8KHxb7GMymHLUxY5qdxJb7C4HCba8Xw",
  "key32": "3nvoERHyyDj5ErS4xB1xnkEhF1iCwNkkCgEGPvFS7fbTjjSMi3qRcFCo3WfMfam69Xq3svtj8v8LvyZFowJwVDZU",
  "key33": "yL4fLU2pACsGvDPhfDLGf5vk6CbERnbhfkS9LEjXr3EAwz8mYpYyHCwLXwFWE6dx2BSTSNT1xzrLP56wsm2mgh6",
  "key34": "3QK8K6Hfka8sJEAUyRRCNeZbs8wVzqnd3MQYxMJawxkwyL77fi5u4y8De18cwVWnA7SoD3KMES5gBRC1rySoHgwG",
  "key35": "5n4YJdMHQQM6odksC8b9xQncsDhdzHD6RqZzKmYLeKfB2NsSJi73svmz2LTcXaWcDa1JyAEnaiBUsfrBZ49HgArh",
  "key36": "62XM2DULXNHJNGL2VpszvzpnAVYvia5JeqgnLxhF1UjX6zX2qBr4HKSthTK3n2AvBs4a9Ww51bM1aN31gU9icgR",
  "key37": "5CrAtujgL5j6L9UGfbQt6u6cWtqYfEFxLczcnmjKarXm5o5t8gmCYUqQDiZ5RWS5RopasNorhTaK6dyeP51Y3hy",
  "key38": "46pK19VBjcnYAvcJM8V3uedM5smrdyfL9zx8Ng1fNfNADfWqEScQ7ZiKwPuQRrRUMFQK8pQuR57KNvwCNMWAS8xF"
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
