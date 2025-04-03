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
    "2j7ErwoWUvmYMC82ZFtbkGWtyf4oNtLKMxZUv6eA18HjA7cJTRx2fC7yDcXB4TW58qWkZSS82j2Ccsxio1B4B7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKBvc9Cf7aTygANLNSXuy5L4tk2aLBn7LTC91jqiaA7FG7NYB2sF9KecfpgWi3rGHpkGiZieHTib6ttmt62zfcR",
  "key1": "65H8bE6V4gb7Ckv5yayh1xHYDudwem4W13PeR3pZu7eCpfeBKQq137rYCEt5UuCKMBXLXcsLJcL7X9bTbboywvEk",
  "key2": "4LnbsQQPCaCaueukkm9LFwAtDYpyoW2SEJgTAVk4qsfXuZvyDu3esHHe3ABCvS8LiGpuYKS2J4ouNBLHFjQM9dTp",
  "key3": "2C4W7NVvKggtsdz8jLnFPuXQhYqqrnEcZah4W2Z3TWhdVqxs2CqhV7mFjSxJwM1kcSnCvdiKKEccBzQwwFEupcmM",
  "key4": "26coSmg7ojVhU8F7SKNyqnKWXigbk2efb76VNzkNedMEMY9kTuMrL83rmSN7RDQKtmsdPBRBcwjqXCTaSMtdaLGt",
  "key5": "HK7skEjVd7FvN5LZM6tHcwrmoCULxJrE4SycHAzXQDWWQJ52SQVVZQWC2frcQNKiTzr6zmMrPWsu5jCEkRPXg81",
  "key6": "29DNVtbD8i5FVxmP9MVTQA7a58LhfnnCiP2q7nKjZqHDYTuDHETGu2o7ghN1NovpYziJarBQNj3oWAuKw2ELp5rC",
  "key7": "56jP8id5qc1VjKcHhanjR1ensdP6hNneath4811QYKvueprUZdVvYhanBMns8Fn4mNJJxuQ1gLaxfhoswkfBMXQx",
  "key8": "55knJjfTmnDnHe44udsebiSqqBokLgzF8x3swsNCTTCZDPxDQULbq17LaR4vraha5yiCEK4SWmRygTc9SLBFaP7e",
  "key9": "5zWuS4GD8K47eyUCtp42H8PfutBYu2fWdqXxckznT9WzYMUgqLRvyWNgeDK8CJxMpdt1xyBYc5KBc1UJAkR2aN8c",
  "key10": "Zi9wsYosk3Ak77j7uTjPszzEVZEgrhY47fo99rC97kvZQNxbAowVyFrs2T8a8CsStcpCYEKEx4fYXMqEbT8EN8G",
  "key11": "3jm8PUMcWmWk2Jjen7tfiMebo6rpQrGfSoWNm6DxWf1FbXGgTzCQc8VAPrNK57uVzdc5ktvcwk6Gai17PRJV7Jo5",
  "key12": "2UpJjhUSNuyMUgijuGfrLYTXKT8n4WichYZhTkVgMX9UmBoLDGEiL6td21tABLBPrLRf93C5vhAvasxTmg6Ubq8K",
  "key13": "5zSdUzGUgof3cPtzPMiBvu9cRYXzo6UvWxnB67yK2D31onmXdsgxfufxe6HorQwwwZBkMAyhJDQjdf8Gz3TyCSLe",
  "key14": "335r8TjdHdfT2NvchjehiUMX9JpwDmaxowXfVW4f32DgHMUtmSPNBhRR5c3TvsgyGTfgo9TmRoSKhK5jjFLNYEna",
  "key15": "N4caDtXTrqx6VPgPqVkv4cF1GdijXiQfHbqzCPYSpwErjbPvto6wJjf5MaAoAJ1GunCMcpcMfxRqBPRazdnFyzA",
  "key16": "2zdmdG4A1WdbVgYT8CuGT9QaZVc2FPmXJDeL1j7EPse5BbDCvHPVM6xmMjZcwXAhXJgktqPh29fFtERrkTa9WBjU",
  "key17": "2ZYCWLSvfFpyJJt1buDvcwxNzvwDdka7R7BzgtLkKi6CpL1Y5wRkbLXKigBMfAiFLaFjnjikQ8S7ERhjGeZMq4D4",
  "key18": "24jXN9WbPNZWPRQ8kMcUaaUfHaKHAMQFojToLLkWQNvL6zpSBpd7LaAgsHhRnGST6LEH9f391fgwT9B9K8bGAdcc",
  "key19": "sCmfJxWHuErds2XL9FqBLS9tHhMSgZVNsjvpJoutrQUyDMTsiJ6HfxVZ1QNb1A2DsbsKhtfEvi2GspU36DFLLnW",
  "key20": "5qrNNvosBrZ2f1XyzcYhhqR5adXN5HG7xPaEpjDucSuDZ2yfqpiLNGAp7cm5JGMHEPQ3ARyt4ULb1e14HVUK9ub4",
  "key21": "LbWbAAEgN2hpWgFH55rX91TrBXQeXtEpLhqpc5BgeaVNQJtKSLPe53d2VE6Bb5aSjqGTUnh1S2p6PjR9P7T1RYB",
  "key22": "3HYDMmq6kE43uHXNUn9oBvV3P7FroVY1zCqExzs9qLuJU9MXXLHJkkcAc17oaqVkN14aiTGqTLV7wkMdEspcnEjs",
  "key23": "5jbpAUtpd7UnzmH3ATxoHHBp32wqf4SVicCfw2QdtnSe6xf7ZSXha2nVbLptYVKDMHSFXySiuLUq9bX2rz2UquUr",
  "key24": "sjpDSoU2bCPaw5iNvvYXJqL45LT1MquE67QtQiptY5AYL5VpeN6KQRaytmVsTjqcyArkyfaufQSmDTCfbn4TmaY",
  "key25": "2JkYCuMsX2viZ3S5TDiYsb3D9ypQj8Q4JmFMB8bobkivu5C6QVoQ3wDqkcPMnJwZiZscohBhMcU9ur96ps3j7CZ8",
  "key26": "3uKUbfqug1w5YX6iGik3tPVBC38jcoynFx6XHyHjyEXTVu8RbVHcsFEXcNvaiFgQNgnesrVEtzLNRVZt6PtVP8mT",
  "key27": "4LkocsLQT8XiKHRpvvNy8N96TwRRWr79iNuPRbyU9SqLQiTkz8UAgpg77cXfNKTNizkYMFqnpnVeBUuXJkqnGpHd",
  "key28": "2jpsf6vssWMzohqoTttyL2LdyAwfJSSCNRm9Y78NATwYQTvdpggvNBjCoAZeuji4UD74CrNYg15urPoiPmYqAVG8",
  "key29": "5nLqy5MBctopVSK9Kjb4j5Fc3YvgmfKxfQ84yow4spKJKDcTqS8rv2M78SbkX4GfHebmJYf2LAUoC4FsWqDHdfLj",
  "key30": "64kQdb8WmpdDjhv4M6DVXTBqWMaAut5uxmV7qbezgqZFZtzaQQamdH9CzxSzT3oGdBWPXqH4M4S4wEoEmxTVk7dC",
  "key31": "zA2HYDLENp3Jk4rpxsiFMhYb8vYe8rY2L9qTBL3CcAZhDsRsFKKi25tbFjyKdpnvVnQ3pLg7oBNgzxcXN8Lf4Sj",
  "key32": "3fyeY6seZKndXo69PJqstDqymu3P6Uf4vFSEobiojW6xTGrXHYjixccRDPoicW9bkiSDEsBidekNg5nA517SEz8Y"
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
