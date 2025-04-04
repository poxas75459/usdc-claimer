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
    "2DvaxMMmmaRj2zKAhtxDqsNrr8BqEPqqoSTbNxZWnHXf9AjXb5xuSXtGizt5kbk9B7B8WZoEQ2vKkMkRyc7srrE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XTXTYZPFi8N5ZBpTQ6kSs9XzQxHFb8PukKrXvRWbiy3gpUxfavAM1LAL5wptN47dKFesRE2i7LHYzC1JgzaM1y",
  "key1": "3apK1ErYcFYbZqetZ2N9tgAR84x36sJbJWd22YCCQEatjtPYXBjgfMds5PyQaJLA3RASb8d7A1y2c2WgpPkr4yFf",
  "key2": "xdaM2nLWPqFmn94gWijGsUUBu9CkZVrF1gs4kXCakHdgdATKQEF8USxYPX4LGcnqxf12shhuvFf2KNZY95e6SbE",
  "key3": "5J4DofK5xWAAeyw3GY3WYQhn3aZvjqq8uJxLG1EzaaHiK2YNka3QxPokMgscjTA2PaHLDNAKzGfH36n5jvXRB1eN",
  "key4": "2snYxwd6E7Dbd5Cq6rKzJb3nXEWfNXA1C2TxHUTYBYxa5Dz3k3mKmv62h5s4yM1iVDFgZJ9cKJH3RfW2AUCBHNgU",
  "key5": "2DQnqJuvjs3ThjNSepa86cmnpVsPdcpgCUq6Du76YPrH25CbpK4VwjquZYWd6D1VsK2TBWZP1NcBbi1GJq2vXFc9",
  "key6": "2EDCYkTDgWrHtBx1L2inYfPz6vwws9dv3srE43r32rNntMKe1UyM6nTdPMAF897zsBLPqEaRV2fXVJs7qruEmHRq",
  "key7": "3JhnWAYo56JrZBbi3ABtuM8vpmf1JPHGkVTd7wEAs8Xc6wka4KgGqpTjKZGUB9vZ6DyHYNfgiTdEiiywdyKkKht4",
  "key8": "2o2gHQ4mzzLwoqscnySr8zCv99iNbTFkpU2ctLNC8hMjuf8Mfx921r4PTS2FtQCYPE18HA36QKU3rT7VGzSa5Hwg",
  "key9": "5cW5D6Vmr1snBhMFjK3TXEjF8xFnQKvDYSvBq9MisX2AfPsduWkhLjN9WzV2AeDApD9iEd9JsUpVEPXc819itaTH",
  "key10": "5A5voBTSXWT9qxKk1WYzLyFGNzxFp7XGpXPsYLYq4GWNK7hpj6wDWCfyKehBJsihKSGZzSZSdu3YiftxhbkG8wjR",
  "key11": "5jmDoRFjC1Q9PJ6TWYGuZovAqQ42s19Gcpe6xGPbThhhAM8EpD6qLAGGCKTfNAGKPRkqPSHbBCgpZ4eTpFzA92xB",
  "key12": "ESVD6ZuxbwXYARrtrHRdP1D9vNs8fzAchM8VamyeBLsLTiYdtjQi4FY28LW5SYLvD7yMNXBVMjhWGxszqp7nP48",
  "key13": "68W8iBVtoKsPzyjeymLQXtbLSHxEEqkT4iu79qcxMLRfKpGn4iVYYTzNQ5HTKtS7gcKtFwsmjwFcJ8icapuc6dH",
  "key14": "4uJctAABrbwDp1LxPyq6x8VqihFGMamnVMxbj1f49dBUZ1vgCMiEesfdkyMJANi85x77ga9yBLUnJpPY2QbXvmB1",
  "key15": "5FAPJvHcKJAtQr5C5Zbw8UJb4fpEVD8bcyAvXs79wL3z9YD5HGr48dP8HcvUcjTjR3YKo5Zzo7sZkMnzipq2JkzB",
  "key16": "CDWipdLAkergnVB7vZ9ucVn4DRdEaD8DMeXnAxxn1bxwZVhPZuJ6ckpXhDhco4GHy24sx8NWCfJSn1GkYB7LcNc",
  "key17": "5fa6Nz8Q6H3qDHqskNxXQ3ZHpfcfasFrSbZNoh22ui4eHUpwU5kMsehiBNAzodk1MTqT1iSKu1Y7sb88w6LPe6oa",
  "key18": "3XzRfroFWt1iqHjaAXyTfJGrWXSF95isXFSQTXYPY7MJYydfTc9QFyUVLrWwyx4h3smSEFoxQczVCaayHojEDsGx",
  "key19": "5d1ffadZTPY9Tpphu84CVQ56q7kuLeCZo4xY9DYfpHiN5KkKHmKd1HAwx4Jt8dAJjGhe4HZ21xx6JYgAqW3GcHdR",
  "key20": "4zmk7knRjgCyLT6TXapnd4WVdK5dw83JjCY8L8D3c5xNZAP3Jgc8GvHn7srvQNNHxnEU3yvF3oprFcwjQcoph6ze",
  "key21": "3BZXAVveNU5yPznERNy4jNcfw6tJJDLrhKeq573f6PvemzJP37aPxG6uV5d43C8yY6FkW5nAXrezKemVEWpiBLQ4",
  "key22": "3uWe8CjRCCsrQoG1Cy6jTwAFxJnZ1bmCyCYx3tcBcwvU3TWCMrtCefX2WCC5ddfS1NQfAx1mgLd1mdH4wdMdQgqH",
  "key23": "5X37pH7NLnyyDHtPF9Cp1ZByTv2TPAoGZZQqXmF4XymofvXPXxFkfV56Paq8VhJe6NBKaaZbPEnF99QAdgpHYoPp",
  "key24": "3CnS8QftrbPtA69xawQtEurvFFXAnRRXRATwpCveu8CZgE7ntRru2m5hKoWZTkMuQosXZxFvXVMQfZWiKmTUkv8Q",
  "key25": "2BLFRijmUUuQBbgquhQJ46UeKJ4KAnWyXLb62CNXqA1YjBBs8wh7XhbkPkaDrQnSgiqJDDbVkhtkaY5cVQtREbGe",
  "key26": "55iHZerVrhD72oYEzxoao7ND7hzjD868TgYQvSPpDidhM6pTSyJTksafPXjWpkJojC3nWNwyua7cAsBATrFzZQzp",
  "key27": "3AE9cUALVJ1AFSeSogKbXpDNXkzwk3JkMdC5nc6kGMUoTAzenVmsVs11GccxzcE7TBZwr9q4DYoC2ZpawUr5AhMq",
  "key28": "4XRFcpUA6118XhAEJQwEz7A5qrYWzCia2djY4QHKQHGSzHmB9Dg7FWAXXG9zW2KojBA2dMyJa6UMFeWYcMB1Ycfm",
  "key29": "5MryUSW1Jk3BNaUT9YeY6qPPo56boAY376onYN3B7zTy1Zaibcu3nrdMn8f75gyZAM6gnmbW4qsSF8krQgT66XfT",
  "key30": "3q1mf4bTjLRZXvZQzC2nDhUb4svYwxzVrWCDDwRLhn2sVSmTUbN2T3MVKizDXV8wewUiFBnNZNz36EmGWhtwLrNk",
  "key31": "JmAHH8jEyEECTy8wQZMdrAd81gXRXkHCoWb9X97avpCJf3VQwJ7Dw92TjRk3e4nhqC53xGour6qsPDCJCT3bvjM",
  "key32": "3KsCYV5uNkgSw6pe9HuVqyCKpNmoMLJ826TymGf3MCNkJoaG3Uk6xjdSqDAwmEwFVdgwiDTqm6yxLsTdT1gtcdme",
  "key33": "3LrtzzP8W9aae74oeimzRMxnz6emJJCJCLFSBaACcW5ckY5ZX2A5Ex4REUmHzQVrbUxicFoD83CtdQvCkdayfkiL",
  "key34": "MtmnN4w6rTYhuhgJJbKwXHMEXg7F5gcCEVXpQURp9BDKtK92tKSBoVhzcVWkxGJyy2SY6tjLzd6YFVf82foUFq8"
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
