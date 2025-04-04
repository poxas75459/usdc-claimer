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
    "3iHuBMaKqXSj5sCDczLBzWngQRGoEWCrFmRsfoPwHzBURtjHLaZqxiXd2zeKFtDRvAh6KWRueZGgH2G2YNxNMd7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWCjwadPgpm9aUSG4Jq4H81x5zR2BWtoUrWyzS8SYAW79dfS5Yps3DSVZG4rUgt5gAX9hwJhtyZALK7Yiwb1NxK",
  "key1": "ZmEaa8V4XyrL6omVwM4HYbwsEFxjKCNsgNki5YdMbpD48bqUGZZBnwgqE8sn6iscHCPQymArthajaL4yLYv9rJP",
  "key2": "31BJ9K5h2B9XE3beNPa3HumBpwYpSSTgZeYfognNd1uagDqfvgkCGmehTu26gWVCdXv6hNTnpv2PYxJPuVihkkvh",
  "key3": "3EF5Di6YgUAS667DZew2t6ZSPf6kJueMy7nBHCPuscfLZMAwyDbyDEWCj8zHhxxTPYpsNiGZUtnj44QD158ck1JX",
  "key4": "4hhFBZsFh1HjMX9GuEwhaZkmjotkfYaMSFoxqagw9skR9YRMxzGE9kDd9z416FSnt7Vvaa4jDkdUaNBRRQ2UvSKF",
  "key5": "47wegpnQUNfN39SEdG1VHfj8UABkdkk2W2NA2omfvt5GgpBApWkKVLaVPSrVsTmSZFsY49982cqzp4BFdPherboL",
  "key6": "5doqxVoyN28MMf8mLtgUWebT6MxvrnQByxbm1ddRuUAG9EqEToWARjvGJtSsEKgTKtAPvpxeJWKTD8y7w1XDTXui",
  "key7": "3TKHatARYdFMaiHTNhPn65UVrxJPM39jr7eYZ3tUBQPBjDQCBpKskwArkUqZz37DGCZaJEjLQ1JYJjmzXU9C467Z",
  "key8": "2pcqvPMRaA73NkHAML5L11yPwxuCJtLcpMZCg6wiN13b3yT4DRcmR35AoTURhqnEPeb1aPh8fAfdcrn3FyZFbScc",
  "key9": "2hLnYeCh53KioyK9ZkAkM7YUrUSovjLQRPQZqVHGwQEkgC1QPqWgDsAv32UpF3Q4pZvDqP1YGda7KgTZTf4TRkqf",
  "key10": "3f6bvEzCgz7fYTTYDvFYWKsaJQ3CGKQ3LKshjdTHSRRWiGhRdohqYBMx7AEvqUNEZgpQk7gomuYtFrtqFQ4VshFm",
  "key11": "2nSjrNchAzfPAQuCFKn7Q5hMS7Dr1aE13QiCJ56syXBnWVkptgbUpRWE22SUanuKLHvpKKwSHEdV8ibYySn9fj1n",
  "key12": "2VczTQcvdzYsdad778u94jY8CBCtMjrm9rm5gmsMKFJVhHyYDiroWp81Y7soD8vm77WNYi2WxionQNAwmVGt7BTK",
  "key13": "2L5LSDbpC6dgqPJhCPrrvXJAE4szYX2HugExMN4jxSJFP8PUoAkpQTa41tTgztVtMft1N86g61x8JSfVok3s5YnC",
  "key14": "5tEAWSTVdJpWT7144pQMU5xBaUBta2G28FpRDsfKDUQy5VVVnqfZjE2V74vzscxzzVppeK5VW7TPFbB85tzt8jcW",
  "key15": "48bu7AwMkk2Ez7KHKcMzvPw5y6EMfShibSaALV8wqCr394FzCdA9PbpReyNTJV15SpPXrqGDxs3YoNBGk4G1hVNq",
  "key16": "4XXNcxQvY1cG2yHnDJxzVQzApHXrr7DULRokNB61deLCy6fBe6GiPM4GcSQb4UAF2QDRY6c6HRe3dWQDyXN85tV7",
  "key17": "4w6p4cDySD7ifpy8C9Y1urwvP5EKFpamnL1euyESBdXhScF2KXDrWsNt6dHQvFHu9GttmgLi8WmkRh3EjvgXUMRg",
  "key18": "2Jpzb9NdbFnWTKCSZXyy2rMZsssdVSR2oBWkEmHhwRpGTz8eSeKJA4344NfjN74FJA2p2YnCyMmYt1vqC1rs1zxs",
  "key19": "4SbYUKQPZPHWUnxjacSsTRcLLNG6KszbGxW6yeg3TjZ3Y4gm9imKBz6c3yXDbFVi1piWgA1oLmogqsXENfUMhwhS",
  "key20": "2BVk8DraQ4EVZ1GX8DfpbXRm1fgNVewstVo6DSL6DwDHkWxNLynW4aX7pwxMxCxvA85HxwVT7AERmdaary4WZTFf",
  "key21": "5drwYCujSC9d8LuvfDSpcqD6F24EETppdzxAqZi2PRx9yoRgKGj1Ck51JQi4otXXbpynTDMLS87ynwe9EN1Dai1r",
  "key22": "4WVAfDEWTTpYJUNusgVjqjbdrdBxeo2vk4M9bsVBbahiiGpF7TjSr78iuYHs7gGVoBbTUg1V5Xz3jwJT6xM7L745",
  "key23": "2EhirPi5Sgd37M8pnm4AjrHs7xH9jkHVVHJnK78PSzohyXG3oqsWVxZprm4y1DAhod7Dxtkv5CdTDPwcR9fN4GYM",
  "key24": "4eSqjeWtpoFiPgE2PAUqKF1UPzmKQSX6aEtr9p6Q9ivUZQghpd2qLzHemiUNat2DGeHPkY9ig973kWHLbsMioMdM",
  "key25": "5E7fgTyF9rdBR6j6RarioLz3yV5gb48st6kywFJ3nXqTo6yMNrxBc5FfdMk5cAedxFzsYmmJ8yh5WSKTyNVL4jmK",
  "key26": "3wQCgem6bphEmSSvrtQ1BM1AoDgXETe2Pt94FnK8qeXoB8ha9gUKevyAvZWrgVN2Y1tM7bFYoq78Rr49ptp45H5x",
  "key27": "2bXhdmLdUmH6KCfsh2LRKFkEfSAzxdCq1Vg5HeKWo5vEbuJ5P4XjkPKWqeuywY3L468FrTRn2pVUzpfTecA46NWP",
  "key28": "3ydntrPuvk3uMBtSPkkhUt1Mfmt4yntaSodvmm8sgN4TQE8ZQzWc1JhDGaoLfKvzbDjGRpeQ5FZ2WnuaGyXupCsX",
  "key29": "4R18VJTMLRj3rPARYKzuNdmMLTt1esMEGuqBBvU6ZH1nh4n5dGv6h4HK1qjEynoTfZ9MWm73GkwH3VsMYnuJuvfN",
  "key30": "31zvFeTkxuFoRkxkFnU3DVaU15XoizRd3NgxGrBRVhERTcHVT65Ep5L1d6iCp9jhG7VmBhW2NSf3SRGur7vshBgQ",
  "key31": "37myMi3FnT2XvPHJpFwKYNFVd4fvT69BbtnRoBktqBMSSuSUMut3HejRBaMChVYTj4mJq6y9w3g7sE5RJ7BRQmrA",
  "key32": "2aqac6URucq8Aa6T1TPoiLj7KPFzhoCLqcdPSupG7ziqbvQ9tTBgj7hzcSewwAUwePxxtsW1FFYsmeG2S3dnLQXt",
  "key33": "jQdgTVPS6PgY2EefpextEx23Grr28ppR7ifFHDa8egwLkrhXMUoZnYLF1CR54b7qG96qGr6GYcCmLoThCs2oHte",
  "key34": "3JmRvuzGizmDNdihbEe4pEGo4K8sRoHjsjbDpMHxXYiNsDyfTLEU2VWzrASTH6qkqorYrAd5sV3hFqCocsFNTuJv",
  "key35": "4pMp1ozqByzbh8XQVMaNTSTYwMxmfujsDEv9WxnkBBacChFKc9SzUM8HifwvfwHVXJDYrx5xYxKC4rL8UYZMg1Rv",
  "key36": "2ysvnzRQbRbFoSmz8UhBEmFpsBPEa8WYyVv6rpfEt5ybHFf3LYLNZ1YMkU2Lqu6wqt6kQ1XMEaXCL1MFxSQ5Xu9H",
  "key37": "5hg757bnKRouf4vWCvk76FbKWpMfhraE86bfhFUQsSFGXzyFMvpvxh7qe8VmFVVYPTeG35x1jmctBQjWuTRTReAc",
  "key38": "wMnsFP7dDWyfYVsuSTGf9NVWtj7CSuBqnQoBQ7fm7BBA5vZB8KDzGigPZrEv5y5ZGDp6quijvvcnQgdCNDTm4oB",
  "key39": "5jXChHmTF2v7iBNQfqpob5wrYPgWDZ6wLCEdkXzzAGPCTQWfzukoyebtWzPa9Psgaf4mbm4NgvGwuHv1BgkyaaPs"
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
