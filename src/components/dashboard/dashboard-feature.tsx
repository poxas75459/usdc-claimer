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
    "5BNWcztWXVhihUpea4nb1e4A4ioSpRR88mrDa3VVxB7KwWRa9vg6PwpxsfQhmA33A5KTPYERPZiJsAytJ1JzyKkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLneSW3LLNvkJjyqyCwHuHp1JtGR2Yv95DHup9sfsKVctaxztdf7UicCzyMePmeDiYMnvrtjfzhmfhWGLCqHxEd",
  "key1": "46KUoSkosCJqvbMWu4srJFPW7XMBrN2Rr4HXC4GpLJku1tgJw6WaGjmvpu2VhpxXA9QcXo3Mo1Echs3sza6trNVd",
  "key2": "58PMvTC2wnGbp8suyNgDaDkie1LLNgauTyN2YtTeNkSQUrAsU6Gr8VtjuebGPkmCmHEAazAnsWJwXJbS8WEuwnr8",
  "key3": "K5qrxs4g2GwdsBtwqzpNcFgrUqerm1qJxJqPEf1fDWAnPLz7Be2LQhVrDRC3tuyckNJJezdR5Hbr4CmGqtD4j3F",
  "key4": "cpwkPzN9FZFrx2kXdYrKvVnfJ8SzCDbUjWE68JPiSP42n8ZkWkhrwEZhrQgZ7j36EbCBRdefUopW27rbzXEb9of",
  "key5": "21cm3JjwSLMwPkkwUHSahc57zxn885Ao7JyU9P5vjK1LrGNJ5bytsxJMZS227PvBoP1sZ4iPZzhV1a5aoPBFaNqm",
  "key6": "3m5X79XD7fggqqqKWHVLAyk8TY26k8wfbvnCQUVPJVD5x5fUk7Wr7Ugv5Zoe6ymBdnUjDz4BSezaP977Ru2Y9GKx",
  "key7": "5v5rJ6GH9HwnxRfsmbwsCZBG3L2Uwks9knWZkz3MFiP8kx5jZRtxW9JpBJNcteTnPBzWHjF8Bv87qY6ZDBgcP9PK",
  "key8": "5ZLcC649kYx9Gy7SxpC1vJmdRfh6K7bMJTnnTK3NBndtdY1UNfHNTPPDcSYMawgeBpdBwJSEE1eixF5tDYVDsyRz",
  "key9": "5jvg7sYMqSpWySN3oM4QSNffagbzNPbh97wdcjmCXsiTZ6NZS6xo6VXEYqCAsDta2A9vFezekZkEdYubsYCvnn8J",
  "key10": "3daDnaR6pH4YFvfRotvqw26bbnkiCT5jxJS3YUP8nckok4Tbkw7UWSCxFmZpZxbb1fYoXLvdSogbBJ8sfVcGN9bu",
  "key11": "4U4LV1r7MVnKSzSKNFSu79wTk1obHNkaX3RJtYffzH3Jvmx67t2u5noHH7njdbsEh2E9uvVHQUFeKCECYTn8NZWe",
  "key12": "2G3Yj4UvyAH9qmZPk9qSwj7JtrTjd33kjDSBByV1NUK3ERp7WcTXZbHEvVw5JRYrfd2uML78ELPU3CroB3qQKhB1",
  "key13": "56NYjJHDo9qXZvdPQfdFeAiqyTDVGWsE8jS4s1tXxzfpH1JfZ3f6df55uQFooByyEfwVfpQVj6fCHSBQBoMB6o9L",
  "key14": "GvDaxcPzXsjEg1yeZbDpLj32TrrAdWrAVeCVMJE9DVsHk3ugPci1fCv1xSH1okAPpoxho8fBLmsCQMCj9vmYdhW",
  "key15": "5zzZSXBRkdVL5eEnpDerJbZAT5iuPfD452fqtaWQRVqoGyebvKJScXRxyBCQuKxo8ZJoT2a5ZqKj7fregVz31Ha2",
  "key16": "3nM3VtEzafdCZXaVKtSqFHHBcYMcsVeJyNYsb34XXAuDiAGHhBXuccC68rKhhXgKYwRYZMXQXR82hKS5det8YNbc",
  "key17": "2rfP7Hsmb7iSztP9LHLYVQJnNa2pzXjdkM9UEkNDYWqa8UfSiAfWqG9KqMmeWgyBtfwoV3A8oJzDiyBMy6Nuw4S5",
  "key18": "4rVuAQG9MYEYpwSfncgZzHiPv2qV8eHRgjGPyPZ8ddNPbxMJYBrbnbPPTy9U2mXDPrw1AwpNhxbY15UPaaMJNwCC",
  "key19": "2h1sskcEQyhWEhZjAdn8zHxaz5MzaPpzLPidhPUumSAi3mux3wi7faiodjod14edQxYYkKLpS5UDYYNDTejUWWJJ",
  "key20": "4h1gHv9Q27EGwSRpkR6wERpbu2KZGJTpw1728PNVq9iLYSL6yQF7vkFUGryrx9AaPzfMnAxNiAeKFXGas2pMC1ak",
  "key21": "4nCg8cZTyPBEccBfNRjhaCfaajMZM8QL3yawYUixHntERTSo2eMQCCMzWtfYCsRcjRw17PPujjwjLLCYgMCc5oUK",
  "key22": "4DfoVfcYkv6HYePJaHjqhaHQJF8S7FACeb5UXfVcWxR82zkgqjC1brzYzLC1JG46yScnZbypHNRSVam5x3CwtNbN",
  "key23": "F9pPAY5yRdrx64g9mVnTvdd7JNAavbcJkst3HYW1J5pcknb1WA9gvxUqyxmD46xnvA4bAGQ2ZFSXumbwGLT9jXk",
  "key24": "55W8mkJKy4YMjrQCGpMc1y9sqpmPNcgj3D2HeBNsjMy9PSB38VBMQWyPwojrxEY5H7KqycEAx6Ja8SCPXBXjU7jN",
  "key25": "584bzdftXsA7JwqqWdRHP9rfB3YgXKkrpvt9Q9JRZTAnZv1s64hwoDc6xptBJqJfsd74rcKc6KZDFTWScgYWxpJ6",
  "key26": "63ihYHi2PQxipMeD9eLe2GvLW2yK5RE868RQCYiM1XoaxdYmyfv49KR3vJpw1QyV97WwASgRJ46Jh8bXxN9SybTm",
  "key27": "5ELPR9wJYAUsPzHc6jY1QzgwgGNSwJBuJokTXf5aoiETz7m2TmSLg9WJDwbjZ3qp1rkCLQQVziMdEybTXRiSw3Mr",
  "key28": "4yL2Uoz5jQk5G7bR5665eocKDGD5s66hCRFHDNtVmekqvZyca2LTvUttGSNvy9qqXNDJGW8TmKRTTg51XjR8RFXK",
  "key29": "28iu8BXKQKWBXjGo62i2HV6DWN3X5wWTzHfJL3PXx9e9T9A37CHSfSvnwzVpk1d81ry6xqozhwKJyZUAS9S3s2kC",
  "key30": "4Fo9C3hVncW5L36mFVPSyHHEMwPaVsSSrGnXDpyBHZoYSNG2tP2DQnxnZkkbbEZbCfEHEBnp7GCmHovxN1uMN7tS",
  "key31": "3YZwMMwwWs8fjTbFAs7H3qLnDPbsYocccFuWyRQvwQrHCriG5DfvgUz1AcBJpvr4vABy9MMkxcVNbeDZ3LeL4uCQ",
  "key32": "2sAqWWfqdPqH8VK3nTUFHoa4g4P3tZ1xSap8ccTiacKWQX6FCMtSATYBi44ituKBM8JfCHx6GcMoxZ4oqmTPHLkN",
  "key33": "5ingSthe34m1rvUF6yNHfbJHrMem6q13sbHfbtNcgWMKqeY3F5J23D2QMjwjE1vQAGZcEQddKoxta619GxaoHHfo",
  "key34": "22Upjw2x7QbQDQNqN17WAoZ4gTFYMrWig87Nd8ZRQ1SQiUDkfBRQbxKQUwRP9GsuW4C1q2HTpCS94GZp8wZ3Eico",
  "key35": "4RJ7CWPugBHdeZaYY4ULStGMZvV4g8a9BmGpacarccCNDFpbRwifxXGmk55q4a42jbcrVYuNZVza5h8AKcAzpvDD",
  "key36": "5Pmvr8pmejKKeHxgF1iGpfMAnUPeFuj8cPmcxCf9LY86mtR6rUHLhL6j2YyPnE2vBwLJLqmqgxpe9CXvUH3gQpaR",
  "key37": "DVVjXKEADrbyuWJpBi8BUjePZpfvKJFrr37vzdjFeKkvLs1GS3zjfERgAKjokYJdhNw9s8suJmngkZkBHnJLgsk",
  "key38": "2quV7NFc2Tiwd4CggMsjw2y3jrwPJg3brb1Edokkfj4yrfURgSEPyDLq3Rk7Yimy5n5SL5yKmUDFDTSDMbK9bhrg",
  "key39": "4MgzW9HPUBs3RCfeDJaYbSBJ4zCH4f5KbVU8iaVXuHvbpRdNsqgNHZpmwhbveDrvhdZQQ42PoBH7QNBHEA6w2T8i",
  "key40": "3bknPJ9Que3bqRM6m2nyTisgNHUrMw4sWZffXo2xLeaAazdPd5Hs3mLzQvwJEATpWJwdRCUTpzBVjk5BfrHV1pvx",
  "key41": "5cmhjUY54nq25aR6YCFxrBSE99qhVBk2wggw3QYfeFbEs3hD7WUw3HpvzPDht1ephpRjScaYScky3mjWf93NbZjA",
  "key42": "3TNC4z12pGmnTptB83FRB8rchUGnoVLWn9sP8kduhDmkyKfwqRj2jgMgQPexFbw6h1dNab24yUGgphjzbj5V2wMz",
  "key43": "2c9azNLWib6hceYPqAX6JtjYdJPoP8DUEC8nv1T8SnY7iU7itaN12uEJE4dVC8GQ7QsN8fZsK7kUJv71oefpETgr",
  "key44": "3mMAz89mKEw3WB5Rny6sJAyLmpLysDcuJ9edYoxEq7zZcf6W2yfNTxrDZPs3cMVNks6mJhs7Nw57uSyJ1anv5rea",
  "key45": "41enE1UxiLn5nNerA3opjorghdk62914sEmGemE1g1f23AHdquy5UHxjCnBLS9p1fQMLsvqAQZf2o7qSzkWtY4tM",
  "key46": "2YaJWfWnGjwAVh2ZUeEwsQs1arEpqyUSnmGKbatLrGotKGqoDATy9fNGSLUzGSP88sDawWXnFNxTRebyhtaUoyaT"
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
