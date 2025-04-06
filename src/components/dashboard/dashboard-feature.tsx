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
    "2TVDJPKD5FrWHVpAkjkwC5AVfCkmNd9mpWryr4huWhoMQXyTNVXsY8Sv2tSaXK3fWrpYX89PFGMBCJq6W8NggR4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9jWK82hggWMvUyHDRhzaRM7ybSRZaHGhzwgsTyNoN59z9gw61LUBSKsKGHs7jmK3uZQ4RomVYK8FBNLgkevxds",
  "key1": "4vnesjY2auvLwtF6RGHKh8BEbT3FZaKPTSiPh4S9s4RiB5vtbHvSidcSqhtx1ka3nekQCHihyarc5ZRZyAu41MTR",
  "key2": "5rpFQHBsLtBRFuhwg1QVwNSeFPFWcxQa9T3aBpAezgAKViD4sAgZ1rcf2RaknLZJn4Ga7ujrJ2iAng4Fr9ZNNBbn",
  "key3": "uu18B8vT1KRsJu6W7VSZTu4cfrxjzEKbbS19KDa86VnawBneSJcL5aFhkX7GDKGBZwiNQzg1iEhkmct3pkxAAF9",
  "key4": "G65KNcReQNicNcym44xrKGqtZSxhtBF4u5zwCent7d7i74M6EfPxgUw1Bbga7Pmz8VErgPbRJKTHNKjsbxfDoR4",
  "key5": "3cSaotzKHLFu22xF1dZq31cFC5yH51NpGHDmtdT2FtCQ9AiZtXgmFtt1wT5Djo5KPuWzpRbX3JbQr1oX77bvRmcW",
  "key6": "5N9wRhMb4oZAn89oQaLmKZyGeg9r9NT5dJGX3Qp1W5FKsyNTjd8RdNQoLBzNKBaXLSWqxn8jY8NZUzStsh7gSywW",
  "key7": "2riPYoTNBCs6RbGKpJa8Yeb1kyXYbvfHyAv3SwZHo1PMTYZHkhUEuNxSjHfbxKq5pL4rmHVPaFCauPMBRkDUNNGz",
  "key8": "31rMFPeGUXr8s26H5E8nysN2uS3D1jSzu6JskmrikdUPUDe8vsfTinjRmddR4y6cHAjWhtb1mFRGtJt3U5EUZTFk",
  "key9": "zybZHEoGGFU9Nd1xWE82y3ArBJNuDsYmDRsqDyhjA3NEGrUhRZnoUBM3bBiyTrQbWgMUqWJXV61LF3UzbB1MXJR",
  "key10": "262vGUnxPd6y5XQwCMWGx5ufksBVopDgeDGoxiYCRAdwU439yJY9kBaewULeVmrc5kjoFDCVwmcy8cnQJBduHQzk",
  "key11": "ViRDQuFeuSGbRkH2q5iwDxMnZzuMn7m8GAGKBxz7UebLws8FGsFaSTGTUoBR2Z8kp2kmjXdP53V7Cg8rFe5zheA",
  "key12": "3puBqA7eow5YmvMPP56cmM6TZ4w8mLdyeirzgUXf8DZU4Tytnp7jCeGMwQeFHb1pdWaHjGWEQYE5DCvJAzP2tUic",
  "key13": "4PHJsAePnPerYGZsVJhBkuw5Q9xsKD3HjwFT9UgEwGyusKYfmWLcxpKctgVdB2VoM7GmrSMRmbpz7vHfsfVrucii",
  "key14": "2UuDjeEgwrqVU77iSEo3nhoWKRCHFgZg8ENEY8ds44a4XPZkM1PTa8hmzkvrbwp3JPGPoGARAPWi8t7RgCcyb8m2",
  "key15": "37tQCG7A9JmUD8yzsrUatbuAeFQmeFvH9ZgAR6ycYmJmz6USvJWEgqkXduvPa3nbFVUNduif12S5s4xWKUxVUotL",
  "key16": "5xFKrqoFyQLYG5BxF1w5ZpFQprfTkuJ7MtxiUz5KZUAhj7CkJj8aMmhSwB3qgkrnTL9PGnyYXfCM4BeuFctQWfSS",
  "key17": "zPZZ4575FVL839VSmTDvKSt1g1C55v8FAGWPAdL4AgYfmnrzpWkZGSRAsHNfozZjxKeetfmrxaDiUG1zL9wbjDE",
  "key18": "43yNAKKbsj8X7QfyvAjW1MHeMf5kgyqfUaivMr7RtPi7jU2jZGywKxM94rd6E6b54XVZwoJZYGYkCrHFwG8tvSuo",
  "key19": "2yeeFi2nJDMTynTh4JUtKXB7oDTJauDuwFmrXdZFRBndB7nZpP5uganx3VHcf5uQxnDQZGJY4qSPmNbbxUggwqvE",
  "key20": "3zakcWCitEee36odvLnt12H8QuJie1gRvfA6L8a9b1DCGTigC6eG4Vm5KF8BRUWBmzUV8KKtz97jCz2AfG81q3xh",
  "key21": "S8uzbRJUQuWLxuDnSTvGRkqEL8JqFUdtSnQCjWAU8iZAbqFzXjfEi2WnAi6JCqY7naTb2RAXzBqcX4S7PgWs21j",
  "key22": "5gXAQhdvpokLucFX2Q4fVL7qBEVaDaAA8S3YnVqN2eizV1Gf9m5gEoZ7Mqd35crZfXcLJrSFB5dRxKZMQ6rqXhjs",
  "key23": "3Lf7Min2JQQwjEBTo1KXymd41iEVZU5JEzNzPHdWDNGqzX7kkeqq65QdpKW77NMDbAPcF55BvphXttqZ1iNAb6MY",
  "key24": "58GAEhtKa51ppYuFLo9Lo5bNXeYnjQcwHxXcU48uwKScT7t71edByYCvdQzpykm8yiDHroyo2zjDUkfkuBpYMPq4",
  "key25": "zmovF3nYkuv85XxDSbmuWc5GmPq27XVszrBYiJJzpxhdt3PNmA1FJ7L24Vo6syTd2axZVCbfFMAB7WJvSCkQR3c",
  "key26": "3hka3mdgxM3XcerTAwgBiLgP2oEM6pMLuRWndHfP43tSU3GRPs1T38QsAoG27uDfzBSUbDLxHrQU4PyXGWLLWJgw",
  "key27": "62bAGtGYKsKrB9iurDv6RJKGihYeAMhkMwcxKYWkQuAeaEoEqanpR5SD8x4XVwqTtBYDUBxddU3v8E2LRgKGrwqS",
  "key28": "3Zm3ZhfwWz5hV2xDY8dUQioEVsL3xmzWonnwUrZh7YVq7jdvH9UfsRc9EVhvp1M6SN6ihcv7kqo7WYH9VevsGYgT",
  "key29": "fq9rkreppLCJGvmWTgp1GN4CFQgbDgC1VavcMSCXeBbS72sYjQkYV9ivgXEYiB7Qqw1zk8oRSg49Gh6fnEY9TK4",
  "key30": "47cwga2EMvva3e8u1RBYudA26Smob1jBLrqjFEFuysC7qj4gZm3ynJgWyvT3hNgu81DtEBktF5FgYnTeXN4bNe3T",
  "key31": "keD1sUUgWTAMjT7yN9gB74BuVhF7ADejUQr7iVnSKeksGEf8PkSr2gpkb1W9ubcHCHoTyYRfaRFVBuEWxnXd9ua",
  "key32": "52MFmmStAjaN3ngVNQjQcFs2eDcUqaTpLMPBtFqNPdByVw2W9z5G8D86BRM2vpFzGYfKEeEUJfnmU6JEerC953nU",
  "key33": "2QXUHU8TGsNrMxsg6ewxky1eEkN3N1N9d1SbRgFitHAbTmKMfEHtQuLZGwxts3x77LWUMkE5i76nSi75WQjwyVMc",
  "key34": "2jxA4b44X5eYrDLDnUEQRRynTTu1B8bpdaTV9TZi1QjRUJc4snXsTSE2G6Mhzm1ufFzci3tDi2ybkcTLJeJxETfq",
  "key35": "3pUPUqa2eoVeohHoXdLWKPCZVfuMHhApiqDY7iYc2hbmMHJwqHbicnG46xDGus4cFf4HbhRcVcwH4wyUkE6HeJLi",
  "key36": "4jSgUZdNK9f3mcnyVhUxMFAMcifkmSgdM9F9wTdJyn4xspaoqQ6iNNRQPdbxQcJVouuXv4sdJEsx93jnFaE21XcX"
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
