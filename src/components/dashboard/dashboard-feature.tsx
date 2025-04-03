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
    "DfFdwtyM7RYB8F6qMkFxH21mFZ7uAjcpN6Kknt9gbenczvTmhrc3qYVQngL4YFB5ShSohPes9wpoHswCH61UN3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5UnYhuHc6fQ5b6JJHwP3oUEzk4Dwv6rNPUF8ZVLCCBSrSUkuzRV4iopLTzf1SrVDp6uxJQ48H3F5ymsfpqRZaK",
  "key1": "U9hFBGdz19Lh9Ka7fihodmzPmVoYaZty65jQ7gYNyeZj5kfXnd3YSsboPiZJGp4UHd4Ps7KQ4UY1iwx2RLi9UcN",
  "key2": "JGMu8PpGWwpdnMrzF7dGwwpUVoE4yMgzqvCGv7672vNQm1EtcJ4f5hMNe7SBZtSYAPigHLs3WaSMhdm93hSA4Vo",
  "key3": "4wyd4D8K8AWNKKzRcFshrBvBBu94M8APfR1coWWApqwVpeyNbx5fWq1PkrUSPV3vVfR7xqdJk7N7zTwjWaXztWgy",
  "key4": "662qBKApKjBUGDDzo1XAx74VroFkivdhH8SSJRL6VWYDnhpPNSQCfZDqGABM4cu9cK6JphVAz4RuEHE2Whr3jwNF",
  "key5": "cBMk46dX6mjSBs6NuqNAiY8zaW66qAgsGbYBrNCuysYkLabHUqPRMs1pSPzGFjNmbCQmTcna4BGnmwE5QKjivVg",
  "key6": "43dPAWqz6q5WmR9HXQxC1BZMdDKgTHSDHox5ytf9xSNwfXQaXCfL3fL7YvrQiQpdZRHGsUeBdVNLkPaW3wpgJUNd",
  "key7": "34HttMs82szqRttrJJjD5xfnzzpawrX1vZXWjfnJjGftmLdTVCJGsi11Dn1cEwytsycesnn7kc9L4tTuwDoPzBBz",
  "key8": "4ZxffE5eQh49A6Xs6UMWhBVyrXjVGbAKUmqmEu1txUQSnjcDfyWYUKdZdVp8EavKSE191r87Wub9NfnAy34gd7Yo",
  "key9": "5nyTr2JEBXfmbCfef8s9reNb3cJhUbpD7Tb1eEqc54v3xNACb3E2x3Xh1iqherr8gk1kreZv84pZSrrm5b923pPL",
  "key10": "3TTbWi8aui3VL6EmkF9GyXaCcA4hzJiXvVsA7srP9SiuNisz6onHWoXfr5eUfjrHsmJeAD6bjnoL24dcPkVBjd15",
  "key11": "HVLqQTZGkg2uQAiLgf324rNEBRJP2NxvXiZFfMYJPrvp8hoK8JCLPQyatWbf5pPrpCnubqB99inMePVsN6x2gvF",
  "key12": "3RypUm6j8JiNKukb9jDj3pDMBy1m6zxByHmZw59cNEhMVDus8SyYDEr6A74sgvo253E7ExtyBqdPZYe1fehXqHcx",
  "key13": "3ixLHQqD5YnWworpeCKHHM2wwphDR15dPFvYdgpPJs6NqtTNcf924Z2zhrsi3Wvgd1qrf614dsFX8s3ZdsdNPM5H",
  "key14": "53kw41NCxB1PXwL7gQ8uXxrYbQ4RRSfQCa4H5ztHSxzxM716yxpowF3SvS8jRCqPBhahb9qbPD2Xcpbkot7kyuo5",
  "key15": "4xqhyCeihULZYxoakgeBaKbTyafFKbfYGCnWT99VzHuH5oiSsN1gKrLbGCgtcKckCCw3rDjnfG5CimMUQmKdp4Xc",
  "key16": "4PQN3jskHqmXjD2i9SBpnAqmXTBLbA42iRNDqkKzsKSQ628zStBA25VFCNFD9hGBo9VASxobBhuS9EC16Z2k7Wm1",
  "key17": "2zvc1zoRepWbVQz4SahMwNp2fFsUEBwbyc69FEPsGvNMZU9S5doMNuGgVD42M42i47p6rt3xK6nwZPNCn9FaEZaY",
  "key18": "676F5Ks6LTt6JmLjFmBTB6Ww8a4oYRmEpuXLaTeDwfKQuNcZCq6k9p357Mhip2S3NLjuVmbfX26L9zQBdZStVWFc",
  "key19": "2AnZDK4vTfZMKE5D8MmZg4hZBN7twN5hMfPU4oKaBWkTgXB1UtsKMN9ZCzMNy7HrwQMvRPFNcgs186Z6xzBECapc",
  "key20": "5noV8cfpaWZTZ9aQ4YHeNQCvZhetBNiouUpjN6dnEJMai96zHs7kZnfXevfRwoAGe7Z96dGE1yPNZru7t2df34JE",
  "key21": "2JQux4BasaE2LsWf9FcQ4CuCeuHymH4jpe5Eis4ucCTEevDweY24RMURLWauK4kk2idzFRYQzp2fKXyh8RxBwH7x",
  "key22": "3kwPpsxsMBfD7YSMK2YQzJxy1VAjWZvkE9aymJk3mCU5S2pFmFumqHztjdLkx4zZQKr1yByLA1q2yEbuFCKTqEJU",
  "key23": "4op3ZXzkrC7sk5e1z21MsX5SZQhewQCUpsfLUAWp9MF7kAmQsiZ19JKj2tpBYFnoYFYNVGD9ZERnRFboBaMbmcnN",
  "key24": "2qwzwEy477arz9CLiNDfb6wKnsxjRxxuVJcqVEUg5EqsT8ijJdYAALHPSJgWgACkzGwSZkSu3jmaEhi5tqPGzQAR",
  "key25": "4eqjYh2b374ap737FJxWmU5xu2WgWkSA9VrsTdgj2QfWih6pnocvqLHGomzC6GTexx4Dz9Box59igLR1SrhScU6H",
  "key26": "3qfB9wT1xa1J7bxDQYAj39xpcjK9M89Ni8mQRCxqG37sHu3zwGMKaqEMNrLJ7TRxaTgHpPEi1H27VYjVsJ2hw4V1",
  "key27": "5Uj2YzAqAVBrDNsWNHKCE1goEV26dhxPav5ra5VVNga9CiKsUua432GFnKvgyZXmkAayvWhP33dtCN6weK8mCFSe",
  "key28": "3aBK3TT1MkWTobtHHDsw87rnhtNx1p1USaCHHwZx9vjMTMJebXQsXskvTQxMEp3e5DNxpbahs4b2ibswaz4aBo92",
  "key29": "2ryNcroLRKhKBjxLNQr4m63r4TEsmyieq4kCvaESkEibEm1MMQ7FsmrfwqkTi5kwURaax9PXMDfSi6AXDXZhgrJv",
  "key30": "4XAxChpZzJW8iF6uSAb2SahVAw2XqofkexUKVHsLkgw86csYZR47mMGhvQaqvoAFeTkmVzcDEuYjMtugUHcC34LG",
  "key31": "4tmzBZkCDDBKuQbsoUSS1LNRkxin8iQbTNv39UWy7TgoB55YgaaaF6m9x7mtekd4J9FJsCG3gTUE9Addg5beTt1j",
  "key32": "5vjWdijkftbCxK7S6AZhH79L14c8ZEEhtvgAPco1zqa18TqTyL4xphyJEFXinie34d6GZ497dTVqFDgoqMgn1SXj",
  "key33": "3EuWNmAfmupFUknEMKesW163iKGxCA6DBJotFCkQX9HfUzmHL97h9XMvTGg97ckqueSnBE4BNAGi3T2y1BGPEmCs",
  "key34": "27RGhq6dDNJz5SkQLAgj9JrsBRJHsyvLavxfvW4pmLeFf5j8F1uHHLeRPkdtMKg4znH5Zgvm6g5teumWaib8c1fh",
  "key35": "4RK7huigJwTZXmhFC54in8scsxWAeVD67BoYZuCGV495txruzTKPkwMu833tqfkRfg4XG7sRHDhrJYApv1h9QXB5",
  "key36": "gQtifpJQH3EvLfDxsfC1wv315rLWWvBMLBkoH9xWsZaCjnNNVcvrtD2kFPUzgNdp3hcm1vhLdPJzxR49DC5KZwt",
  "key37": "4M1WuoQLFHVeqHrYCfargacShUq4Tc8MzBc3EEfyAucnfRy8yifmdwCjNoAKFuFbgzKFJDDkSaBtnbs4CrGLws1W",
  "key38": "281Pmk9zKoabLBP7ZWVXpybJsckoztdvFYzXQ8VDitj5y4rHQtiM1BpRtpUScfbAcdhtBG8sVYA4jPHpk6JD3CRL",
  "key39": "3dGf1FBnFffrVqPrmC2yeHPq9YpZ4khxrb72DXHmw2joK13XGFALz4mxLbohPum8W14NekNt1qv9ra2phyYPFs45",
  "key40": "5LWLrdfPHbJGnmw9dPmgysmhNTLbkeWkAmYFpRjXWWT7jC9WtqHYFGHxRexZiAKWCGovNfcvpYPT5ffZfhHpobz1",
  "key41": "51PLfjzKvuJtgGhPZhBat1tE6Hev9ZnktczfoeLST8M9Dm9ixX6Dtd6CC1R2hJ43Bjx3uRQgC9cxhSAtBvSf7BJQ",
  "key42": "37UP2qRV3xKKdaXAXbReDtxeUf5zsKbcoVx4Xf2XfkCpgkpodWb1uYYyzEVFrJxWWFyRKgJZLQ7uHDAxzivxpwnF",
  "key43": "4FWWhKB4tyEsiptUZC88fwbeSXYDDYf1HGGgVC2zT9FmaMavUDe2Y55vHZYXy4mp33qqzSiJCRKGTgUQGyaqsGW9",
  "key44": "nNKSbMnwT6qBFk8uJcCurR665w3Yjdj3YF2qXUpn8NsRrVo6cZk5FgQtabEQCj14Mm6FhEr6Cj4C4vo3PpWxQEM",
  "key45": "4xoTea9DfgBkxTjk52gg4aAxaawbL95BihjrfEtcCAvNdvj1uqdTiFiQkGQMqEePMv7xPKRvBdM4jCFKK4Uu1Mqz"
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
