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
    "23kik2StYVtCm2jZnbGfDKK5kwVkGB1uY3SgkwW8wS7zdVCNuFFAgoXL7729K1WXxJ7okdAVmb1NqMdhZoQaPGRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QoRKDdqZw3F7aiS77t7zYzyFHowMiKDuuJQ9PSK17NmQUVCsKS7WhDycbzLfir1o3AGV1QMhvCiB9wCFDqLR6Ay",
  "key1": "36k4pX9Uo65n9dEyarv8uN6287VRHsnYcGHNcJL8A8CN59HMpeJstBi3Fe1KRGUpwxXGjyCPPGUmkzFxVY9gARmD",
  "key2": "55ehQCLf8M3vmpjkPsKTCsnQjf5FvEjBHNDzE22zYVorq7WMUywDWcndpvP6Tsv547RqmbQRRJNytq2ttT9iTXf4",
  "key3": "4nn4WZJx2BvmN2vx6EJe8Po97HxL8RQtSFykKtd9Ps7THqTCFX37K4bMdrwKsZW2ai3fvjZZgB59R1C6TGvTQ9Y4",
  "key4": "2HfS7dUDmGA3aFSg956Z1y4QfbPEJuHBiLegKRqqyktxUnMB6dM5CudHKPz51okfMCNtWiHf7N8sCPoqKRvySPxp",
  "key5": "5ez2iPQp8n9eHAMy5nK7CJA4zXEB97h6PUMhPmeCPaoefyA968mdzCvTCLt3pZU7mBHXd9VaaaXSpAdbQ7rHQ3aq",
  "key6": "3Bkt2iCffKwHEbGFBUqgbRoUUnCh3FREoyBUqDgDCvXwCJKMo1uZQWX51FYsE7D5KR8NvjWeiPfnmhzLWqY2feQY",
  "key7": "4q7XtdGBaqFj7CGDDpBAzacsGReZ7WNQw9raPLobeaiP18zzmBrbszEVy3iuqw5z7J63Dz97wRbbcnuK8hHreL8m",
  "key8": "2iB9WXkxcQVvq446nbbarGA4MBKLwgTqrpEKvWtvpybWVrj7VM3NFHTKW2PA6YLpuHDY2x66GsJD1W6i5HYpzNej",
  "key9": "3jHjyqq9ELAsLFh3Zg4ED2MzjYFDHVjivuqmv3ZapPTGpBVrUq5hJiXmAApokWHjPHSkpadaM8WLPDTkhPrbkU4B",
  "key10": "36NcHyR8MzHZAE5xvC2TLCoKo8NYBmpoPpccrMcJytvY7Dy4fhihJorS9aMb4xLngcX5cEd1bjgWbJbXyR55hSdz",
  "key11": "4cvKRLfcHMajmzT7GS5jP549shPvAEJ8HLSUJzc5dqq5CqeuPC298c31EU8oc5aggwsVMGTjgQVtGa5GQjLWwtBp",
  "key12": "4RvwMPJNhZ1MWe64kRKZQt4K7gqX14DZLM7uLSkiFpq8eXgJMSbiyUvyjK4SecvfEm9isuAeEjGaxiJGNdZSX26p",
  "key13": "y2A32GCEPJFCpuvyfj7wa9jCbn8FPqqcvNDHQhBSRS4WigWcTYaLGNwH17bWW6FvPcerFGmWLC9ZXAx9t9BAwDf",
  "key14": "3uYdkBJpmFd2FimfkogX3HqQCCxZrRMkANAHmqymgY6Sww6Q2tKWTynHPdLH3FnBDNKeRrGaVbFQg3BPREFnQ4Ue",
  "key15": "8nqoSUbEHECFUmV4TEsQvGdCvBVDDRQcaP5vhYcQTVmjni7Citfb8EjPcTSwzjDz2dfkuJCQvfFU8ZymYmRST5v",
  "key16": "5sLN5drdTKzBHfbEFndV6cQAK7pveWhgZ3rnY8DF52q3SpHmBx1PVBcn9neFmbDyMFqPBr7jwBBamet7sC5E5i8m",
  "key17": "4Ffi1BMJEvZB9aKDzQdnx87xGYXjmTE2VeFUL97A2LotPvwZwHQYqXJ7Gkc2yCGMd59SwL3KiiqTSQYFnx9tyrEW",
  "key18": "46kQgySDxcVRw21bmsG7HQWcprHXMCXNAxCUBvAdwTGeZz7hqTpKvXxvpWadV4c3aNkHU7A5ap2e48TQTvhqJetG",
  "key19": "3VSxNj73frsJNXHFARoFypHNWQbapjnZYAHAXBuTCRDXChe2rKcoJTYkaXHVXZpvukPYjVevrUWxYwxcH8PkzYDR",
  "key20": "2jXZ4TbZquMTtqaj4yNmPkdgX9jP2po6UnRxqYzQkHn91vVG1S15bwCvvZqKAt3PCQhSMRVUgYyNaZJsmFnJFgoP",
  "key21": "3zxzs9RUYKmJFphqxKoY9nJRqGpgpgWHUSoki6QjocapStoJU52D4vuUNuQ9nnTCXi4XcpPrarvg7GAFsLeQY3fz",
  "key22": "5TkeF8uTMjTwxzAhAuekZbdCnYDmDXqmxhv799Qy1mqnGfv8gffQCaJN59crDXKbPMynTAQuM28iY6zHR74EesD6",
  "key23": "24kgSEN11tk3CViZ11vTApmK1RKTkERXi577j7KJxVeWeTxkVCy2cFiZAHgHXzZgo9hwMFVQ3SkhXMN31VZqxc9b",
  "key24": "2Y6iVxLMkiabRwNBcPctWxoSP7YgoHZk7X8rDHKCrapkL4WUSu1as8gBzmsC4GxXBNLgbgdASx9HAoKppeEzbPBQ",
  "key25": "44YoD3nCpcGGhCkThS3mTGwntPeZD9DKSTz5iukMeCQHrh8kJ6JtGVJiYfyx7qeDkWz1KwN8Q3XAW7WE7dLBLQ9p",
  "key26": "5XpdaYo2b6H2GqnvAdmRqpVDWJ3c7QRZL88pbTnFpyvbNBqbnfVDPEX49aBYx7uFz1JC3MixQfaRDpiDmnN9YNGs",
  "key27": "2VMFigB8xTSiUfynGes293UN7aALNNdnpHqNPfiUv9aY1msLpuPGFMU5Gd3iSwwA4275cBMJ7tWj65rXTCuZqKLg",
  "key28": "5bckerw67jvSoZdbt6srtfPtq4covLgzQDnARGoQXshaDZcvPUhPRneT9JCy4DRCKw4rF2hQ7oKPr3FuyPVeScfK",
  "key29": "4LcZwchcaiQM2g1UMWgFH3xP3cF3XFqpNgHniZJsMRah2iXk2JZ9pd47NSxxM3WdSmz2Tum3q1tZxBK77ESmgzWf",
  "key30": "2mtjDY2pKmQiPfxgL1wi5mj4tvGSERiZpxWS4Nk2W31o2q4wEGGwkRnKyhRkRcjJ83Mi51y1VxTajfD8YCxZmZcU",
  "key31": "5D25R3oucxJqWW75Znu9kAJWAw4CBtA8S8SCTqiMxXUvpbaccH9BE5NpFgdYfKaB6K8GzgvFFyo1cuV97rVxufNv",
  "key32": "62ZEz8atx1VqJaUQBcLKoEsguccrhRS1Mk9sPdiGqgYWT32pckdjh2ViBLtPNeiwPhsJJm5r4xfpzCpvc4RPaVzX",
  "key33": "5jRE62bNzAdcfCsruLfS3g7NMduk699tT9Ndi126bp571Dv5TpS547cru1HcmJnSghmN2CCqDJgFRhc6N3WZoxyp",
  "key34": "2gjxUFvFALN2YNZ1MJ9HhiNvR2tjQC1gVa1gEfgXJEysXXhMurq4cKmgT2hWNUFCCUyCjhjtxPnapwCLeVnfjZgQ",
  "key35": "4cTNpz9ZS1YWxFTT3Hkff9VJP8dsvXcaPSKqJpyYWxfiy4wGcNmVgqXY3jeWTDJMk9RCeUbfPQx9kk6ze2QCUacN",
  "key36": "31uoqJctGufe5NhUx1mAMjrG7QyQLw6YsEAtDJf9QVEPL3ZLdfvw3UrZYckxdEt1wGwvLH454rSJkAzQoBfy8QnR",
  "key37": "F25WbLzYuGQxCsQcWoneNfoFtd9814uc2vVhJZFLrjqbK5ZVri18rVZT9RduZwvqcECrkoXYhTof1Ug6rQzGGhJ",
  "key38": "3czVn3LdiztmqMM6VFaY5gie183ezjfbyCvXN8XK76Hmq3dd3EyxDnG9Zr4M2JtrGtVcawsxZf269rj4jnnvqToS",
  "key39": "5nhJSJYh3BMUNdi9jAzs6EmT6quYWz43xp8xa5nJ9vE9yg1UF2PY5EyLALZNjUCALsUh23v1UsnH62EREG4RqLBi"
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
