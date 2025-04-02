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
    "2S5KixekZpEcLZoWotPteQuACwcbBYyKXJY9mBUgT48FCRRUait89tx8SqKwvM8H8DK3yTMxF3YC5rbZzYpHNkkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZf37yHvMLFx1sXagvxoDBusDNuw22PQS7Vo62qiJu229BfbyR6etAsCNTjutpobxd3ZDyYNA5KFtPM3qjrnkzM",
  "key1": "zbmj6Fh3pZszDDVPbfbKRNSZGDmbDPb4b3uxvpf4yBxXcj9ZvKUz7rfkuqj9BtNhoWTbuM5xoL998J3sGgfAGD7",
  "key2": "3Pc1uB4hTLES9Ro5SJjp3ejLPJiuUAWQXCkQG2wJ6NQ3ykWg8NKfYWFwo8PGwtpA64Rc262HVftaZKagiEw4vuo8",
  "key3": "3DQEPcjFEi1g7VmaYEUniBcSaYrNs3DPREjmpPkgyNn385vTYBpy7aC96xRvPYusrwtpV6nPQ8MGseqUqW13zXXZ",
  "key4": "A3sDpLSg1ZpcbXVppaCBpRxEhpQpz7Sxuv75F7b1fg9GB48JxHfHd79ppUE7hFSvUnoUYgspikUxvbcaBHoMP1Q",
  "key5": "3z3rKK2cL7eq44nnYHSmvCaXMSnxD87wG1NP5UWsC7k9yp68w16tnoHA5VNnZwryouNjs5fJDGTLaJC8LN3ZpVoc",
  "key6": "2MTUyNYJGFmkRWJwUtBzuNWmk8xkMkMZzws7jMpcrQUWhVWW2MfabFD6TzJ3RknMqpTCoWfFc69h7EkJHB3iA3TY",
  "key7": "2VE1j9SPcycuqygXBWCoe5eYSfjGBgjRotgTHMAtx4N8XW1nMtErn6LRyVdSk1abbi7RVgvcWZzVdiUScW5bRGsc",
  "key8": "25aXdShDzbCvcAW78EKJqh6CpS7WcsxHpHbFhYTsoj4YALTpkvSxSxo9f57g2yg7Y53qMYUwZGRC94DoaDUwUyF6",
  "key9": "2yPCNEyDuTtKd5o58dvpUN5xdj5W1ZMvHYA87RAQTapJRF1UjFhGZ9SSFntp326BovxPJrWwsSYPDWU1EsaDun5s",
  "key10": "55Te9JMuasdcgRSqUkhrTd7RjLZ9ubmFMMbGr4GjFjvRhUenRCLznGKgStaKWTvcmtpLDERFxPfEG7ZSe7FCUBqa",
  "key11": "2nqEHJrJtnEbqzBxoM9VREaCXmwhb6DfgN5gDgsCZSVbyWuSoVqe7Rf2oghMRWDPRRN179doeFnqPbcAh5g3e7hG",
  "key12": "3D2hD8tyK4rqPygiskpP98FMuwsBg9Y9nNxwVVoHWQfNYLnUAtgjcJ3TmmAwZgK1WNwCfBRxDPBNtYwqzTLcZCiJ",
  "key13": "2zgkcT3SoLHcDwNGo9YPsioZxDg3Ks5mgQX61zszefRmUw1bAQwWVhQ5WBBiJszid5AHJ8HwTqv6iUJx9JQ6h1iF",
  "key14": "2ZnvZCPYqWhTt4Uy4xceYLDkiTmEddAgm89UtkMyThax1SrN8fFnZEqwe7B2nzanTuWnfYEdf99dhXZj3Lvp2YXC",
  "key15": "ro134dA2Q9i9boHd6DBSfkafP1PLWSREp7z5gW1JSuhT6bgjBt2h2MpdFpxupYq2gvJnL39ihYs5zDMCXQXTNvp",
  "key16": "3LkKmo4XdgVj3m45FCrA2NSg28QkEMkk37SeZ9AWYREHvw1SjFZ2DX1RzPmfdLkxZWDAAmCzmdWfuwmpTYUXuETQ",
  "key17": "4ySVT9nFPyMcxGyixsf66nTA5axPExxFoGZMBJ6Jx5CjgQNHm7nn9FyjSMXxVu1HpMZXnNptSE3qbL7EVCsYiE1J",
  "key18": "2kHWQ8uUN6KubU5u7cXiRPejWaGtNJMyE6WPUWDJ8aJEfLjtHnGC1CRomJnSZ8PAXeHvdDmhUANgqKfEMAjmCbZv",
  "key19": "5c9QGmhzZFRBu8R9pBfHYXsTmcNsHPZrJvybVtBvHt3zWhRY21Pdv7KFSy53b7T4pShRpRdjLYSSWn6CcvUW4DqR",
  "key20": "2wEtqnLfw68Es8HjTY4CTLhQEt69BG8TxJBUzaT7ENpqxYuKLfnbBaDa6vUMGpqUnV6n1vNobwAQa5SAybQe5Mc6",
  "key21": "2cHX79uh51SW5rp9m63XZghehxJ8GLDDM7SxY8LMzyotYNAUmhFWiAhZk2nVY8owBwjcGTDWHnAbR4uuGrLQKKCs",
  "key22": "cd8UG4ykiakKA6projuGdzVydyaVreaJZbXSV8LUawGvj5eCPSjXH8FaYP99kdNKvz39ZzaqKLNPnnKPotQqtA8",
  "key23": "2Q3d5zfqDx8xfBmrorLZ3eWeDQFDj5wetCidn3fV6bnYmowoMUs8HsGsVA4oq1ZLUZTHjKKRMM9YyFbRAbQZwEy8",
  "key24": "4Se6wyXCHinHFCN16CEunqAGLH1ixk2szdWiYc2eWrCFxYUhJMj69FZQQTVU4RGza9mxDH6sjUcvsP1kiHBeG9Kw",
  "key25": "bRSg5pCbPLk89Myh9YAgtCpjEy2VkDGxy8QKuKwZRFfHJCJzi64fFk36p87S8YVLRxmr4MBUE4nbSDvppQdEjvj",
  "key26": "4tS9c5VgYq7L2F6upZEQYqvd2svwCZtX5wv42jm4XEEPsDxfb1AoZfb5VW5zE8mPTdJrix8KCNM38Nt3eiMTdw8N",
  "key27": "4ngFkkGwqoZPVRbiiJJ7EcgyuJwb6zDbtxyHiSggZatWNS1DRHURDxeoVVjBPr3V2ewosJAdJnZ27Wfecx8LCk3Q",
  "key28": "5nJDiPbTcCZ6D1aJ1ozYvTTftMftJ9Y7CnSExkkJ48QpWUYYGAfBZ9yjB3nsNxZvZobpJ6juhH82y9Ct14kQZ5pU"
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
