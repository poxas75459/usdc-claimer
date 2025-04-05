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
    "2AKkPtuFN9EotXx1DXc3jzNBPpCe4LJKA7v5tBs5vvy7a98dBRTnEk3nKQWjuYLiY9yGkwFpNLn98psp7k7e3bZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dC9fteGpAS2HH1LDo3XPmXEqvAVL3F5meuV9pHn9zrzkbjbyj5A35ZA53b7TK8t8s9TEakraZ7q3tXpqC8vSCRu",
  "key1": "4rsCKzSUELmhyBFg5PHt6DGbAcmcBhEki5HhrWJ9Dgq4cwFsaKkMy4YnXNCnStyBciYqnEAMLTu75CL4w9zSjuzx",
  "key2": "3ajQMwnxhUjMv49S8uWd7vBavkiCVDxaXTxuwABPFioabWUM4NMjjkjtYr4hRYVv2zPa58YZW1W3yVTR1uiZ4gFA",
  "key3": "9WFMioCLvKaqWqUqNsSzJuNqZQvzHhA6HSSABrxPR5og2PhpfK3LWKh8XrvoyVs632B9tqAie2GsM1XXMPuGsTU",
  "key4": "4azsLPL9Fjhbb7zZdEsLgaFaAPbUTygkuxC7pFtS7LkX4BWNQFDvLACzVBixgt8A1tpKTvzf4X3DYmqS4YNMtygp",
  "key5": "5uGu96pFqLjWesnWCLc7x3FH2WgWr5usKA8mCGFcXRb7oABmFN3Epjh9TWLCfSGuZDksWnr1CZWzUxprBAwzzpkd",
  "key6": "59SQE1mQmN1vkZsx1SfpuSnCNairUBg7ZSnpZN4x1U3KgZnv9zJnMSuC1yxkUZDNLh8xw3GDQhiZG4eUUpjxnJW3",
  "key7": "4pzc4aKvGWqqqRx3kK3skoo25nXJUP62xR77qJCgDAknGKUdwRhYZhg3jYqydndM7w9cUXRYvzbKC4GdAvPBm18m",
  "key8": "4MJf62QMs9W3cmQFJNewur6tjA2nvX3rdMtjJuSGN7hfdEjmmYdSZSzeY7gu7yd1jiVY1kDUySF1BJZnTpq1CuFp",
  "key9": "W2qJwXmtX2bVx9WmVZniJyxh9dEf5ghmtMBhu8Buyx94t3kujCgPFTgCGvm1TLY25BP1aHEMc37a9p7AWcyhxbh",
  "key10": "4Gvjk9jD2AhhdPE4nRt8bBvZ4P2KefudfqjASQen5GLhQVhCqEWJn51A9HBeNnqmBaeTXQyAZqX2yGx1fnKejSnW",
  "key11": "65FAe8XhaQPqnunPSEKsfcrgiot37tiXy5PB7M6c3ydk6sLrHhRPsnMbmChJxKTi5MVqrorsaV3vPqrvM7Z3EKAj",
  "key12": "5W3CEFDhB2hZmwmnXKkRCgqYSSfuC2t3P3VNm45UCSCT1EsJRoPsQgYGppG7x181grs6WByaDiKPMmfXitGAcBuW",
  "key13": "4wgikHtQ1RNykToqtXNBJVm3wYjeAHckpw64Puow9W2DtCMKSnVACwYABje2RW5TpTgTPtoe4upXdJfnjoAPdoMG",
  "key14": "4cjLMhkPtQA5a1nwpk86genFBwSP4t9KNxKMwSMRbv8ASAR6unzUDWt2fRKo1WR7KFsJkT9Eu82Vn23GVNDnuCVL",
  "key15": "54LSazBGGHJRSDtAUSu6DjBM8Nk9tYvusRiMY6KfPUouA9VsDsCUHbxoY4JFb2ACQxr9BoCGxAXcmVQygofpvogn",
  "key16": "2t7YAFL2yFgPSvcmpjiPmG3d7fmKzLEzavEmVccXoA4T1Sscbex5jue3sKMsvU2zWhZBk9ifpj7qP5Wb9TpndbjK",
  "key17": "2kmQDY8ziFzQwZsn45XA7P8mxcbZMSzbANpX31A4RKpvAB4wX4oFpBbumVYHbKk5yT9zb6ZmFzegevwQ7UcC2Apd",
  "key18": "3upAy62hiUdmwYP4TfE7swT4Sf3odLZinfmJwu2J7gX3sZNDq8ssEoovTFCs75Ue8suYTUkvgH2ZkDv9HfNCPhSg",
  "key19": "2AHNm3gUM4oW6rNvPHzkqwjVS5eRxUorWHu9AMVjhFqpp4p8qUB6ZTiuF2NKLGpXFyyVHByMBdLzfDXNjS9UekqN",
  "key20": "2sEsHD4ZxEaYTKZJneE1mRQEGtdHMkLRd8m3aNy7xBD4CLxnFrDj5HZK8dpn4f5E5Xse8qjb5CuQdejdDUF658vE",
  "key21": "CREyHyX5aWSmDT9wrUZpQkQtCkYKCP7S2ip1DH5noFAeQQ4HLSS6XpLwiiNxXgt8TnoXg4JWTTvVoYnw1TdQs9M",
  "key22": "Pgw5fmmhyzUSmX4LphW9ro6MfY5nycyCUTyghnnQBNbTchLY9Eaqoo7przCe5TUPo4kGFsJFZeY6XCyr26ugBK3",
  "key23": "AeP7rQLq2tS59boRS3E7bpdQRJy41VcxeMtCPKaUrWsZ2wjFUnhcEEepy1iRZdh3KaN8Mp6YKjNmhAi8fktYhaA",
  "key24": "4bWZDTbwoxVGtcbCQEazKqN21KnUJjy98NgEkpq2y9TymVx3m3HA4bPrQrDdysWc2wBFuj6ufQhUFqCyzHx2jwUh",
  "key25": "46L2hTrgFQ84HVfZtBSQavGP4nBpqet8CJdVueAdEpkceCXm7iBis1eEboD4jr7uAFX7rb13nRS4CWa23h1m18LU",
  "key26": "PDykejGitfVzuMBgU7vfgRFxynPV3Z3LYMzG7o6zWhd9uLG1eEueK3kvvcGGaox3EUn3269Jupkr7LNm4nBJZrN",
  "key27": "36ZMkJ4Nfhp4FnnmsT8ugzcJ4rbZUGW5RjzhDXSPBnxrbJ2FVYioHQWLFo16ajus6ZrXY5nTLGBSpbT3f3qATgLc",
  "key28": "4YZbDQHbGW4aXGemR59yR3CBi7uKDvxdCoMmsYt7sREGub9s1CgzpMSXn8GPB71NhMCzywsX5S7N2jcXcyPUcBWc",
  "key29": "4rWzr1xxQ8bPNcdmNc3Ag5QZLece1q7CQxppPMCPicDYqUFGZRPzfj4UrD3vDTV3GMXm38CVKfVa3LUYVgnyeRKr",
  "key30": "41K6ATTcSBAu6VnAnv7JvH7xBcpGT2R4J6joyx1hjDDZcEVJRpNoAshfFJFHoDRxas9wtryKFGMz4QrNpz3rb93n",
  "key31": "QYCHxQDkTu9TU9mqJCrBytYZRV7tBnWC8ZZggjrsj5vXJTKAj9zwMR3kX84B7KCEf2bDKorDTjp7xTNAZjB42oT"
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
