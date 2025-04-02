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
    "4gnkuXavq2NBqUDgrPJ81m6hprvhoErGFAvjHbXCJCR7JeAjfgf9c8Ptdn2tLiTwVC9bdZQu3jxQoXXKifs7EVvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "muLjMV8ez3nZuHbJbLQ1fZSxm85Ph5JeyD4Ezo3rzjxqTEcmhqMBZFZF3AnGA3fnzhTZSPXvNbBVZCuz7tyR8Wg",
  "key1": "5CfQowSLRumn8sKHu84Vh99a6gmNrQvUv95oQxj9zhf2UjDAHKTa5sygQu9Rmz3AKYnJ9SHmfxhUTnFkyjfrTeiV",
  "key2": "25YWv8DXxZMU55bj1j4MbemrXkLj8PU45LGU7ecUjhK4FH1LCQLc62oJemP6LzC6uoGxSTYkHXRpqy8S3G9ZAAmo",
  "key3": "2deGSvdDu6BQq3qFij5Jhm3x7iM4tiBr3XDrbJsavMUQKDC6vs6n3WoCwQTSnbkVfDQap9E4wko9nkt5EYyh6QhF",
  "key4": "5wAzWKsY37s2FVKJyfJBsUTfbqsvpsY9voPaPJ1PZ5frSg3TCD5qLeRknQSbsRydnNM51f3HvnSUGVLSzAaBVkXj",
  "key5": "5sbMDdusvSJt3GGsZavpUaZ1ikEFtAuRUTrKQhnjwQm6tDJyUiMgCPHFpHcVp4iDXK8nt25qiaiejkNGyNziRjRE",
  "key6": "WpGjdiPEn7GnLxEnnLEDfDeJTJkicaLNFbJTb56PvoFPYzhS2yLfw1JGoYWkjr2V4NXESc6U9LoYxEMyhD9intE",
  "key7": "2tb13WQrdP763s6X2SQKYAtHvhKM2kLXqZ11EsApuCFHvfoeNJrgji9eArb2NC7KGvWYmaQjuGeH3cgd7k54HKDZ",
  "key8": "4wXTp7A2mGUXwDoWrrLsHjhGhNH6VN5JUxYLSssL4fSdFnD1hjtaYTLCtiA3wiANw87t1TsQQBbD17JB4DWxDp2k",
  "key9": "45M2Xr7svwu9htio4Gacm8CFpTYhAdwfrfaQqTSiHeNLH76HsUPapvmnzA5opYKnTAReZ5Ee6EJvyUpBp34EyKxd",
  "key10": "2Mxa9BiejVx1JDnND2mtQ2vPD4vnq93fzhVgGNYSU7oKGQHGXNMaNbEd7VrqMEk3hiMd5SmsUvVjQF8DZUhCMfsm",
  "key11": "32yKM6V5BgxU5e6eQ8VFYKE3B5Bmm88KjgfBx8AKTrz2hTx6iNaf26RxXiJQVqYgWYsxBt4v2z8dcTbJo1KRQ6jB",
  "key12": "2NGpWgtwySsY2UvWmMVGpE2G9mFbwyFWTRXvM4ezSNjf36nnW3WSWS4iyyMujV7JuhPzXHcKQKHYSnS2akHyzVvo",
  "key13": "51QGc1UAMSu3tWLD38JGdCcwazNcfgnTUQhnBKsraGgPkPbo8yYAuiNp8SvNpLPGSwkWgypi9yJJsD8m4mVExFfi",
  "key14": "oxwvKeegaNAqzvnoawAipG7nNXBtdXQYJ6TwAudkF1ZqmHxENZrbqtH5C7eBTg7c7qa1RZQDFhrDwRkePPY4XsP",
  "key15": "5SXhjbYikfxh6KWcqQvuYRG1uWLYnYtWJS8QdbrR2VAjsyeMhJ9tQKRJwCftBAKV1t54hupcfq3yniz85qDFCTu1",
  "key16": "4UP19Ywr7vRmeyqJqQvQeqvSgFE2xZTV91mAzM4uj4esmo9Yx3s2peDu5ytSwAbSeReBMJnW6G7tMhg4mUPoVimS",
  "key17": "5NUaSkg7X9YzbJ1MZw8DfeW3PF5aNNJQbEvxoN9GpNgzU3nDxH5PDAgCzFiihYGq2Nr9twYKa2SbUdMPb4HbyRfj",
  "key18": "5oY25fVnrj3e92cYCpr7kjxStqEnGBuxUjptQCcNqJCKZ2fiqfbq9wThdUHY7g9Hcg2aZeWwvYYBbKta3DwdoeEi",
  "key19": "3qoXNJR6Ar7UzpeRoDsArrHHd5yykRqLHecWirvWsznxrad2xnWQMUDVVotTse67p7wU4bZaucf9nFVnUtN8EQQ1",
  "key20": "kQM7XrP2u1iHCzP3ZZHorG4wRRQBuysSKDefAkagwG2SXMZCUfrB82bHoi7rgdFpb1FCPW8BMkRZL3cWDuaQmYN",
  "key21": "38WTo1FRvaSumY4xfzy92VTBHMx5ZUgTFSnuL5DFKRjqEbRgZJaLimioAZFykLazNEBxPemo9SEKr1RK6wm7bLmg",
  "key22": "4JTgWTf9un9mAc4jHc9sP5tHcjrRM3uuBdj6Ebs8zfbg5kBpyES4uvfyeBYDnTwAwR1QUtM31fchinmsFLrbVxLf",
  "key23": "4cDeL4ugwiWeDQGdLTsqHkqGcUuu7axVo6iijiaMNfWgHh9A47vJV3LDSQ4VySbpMvKayuJWGGDiEpuULScThNWT",
  "key24": "UTa5jjk215Z7yuwZiyJXQxtT56YUNrS358uCckuNMDnxfi3xQpEeg1YQrRruZuvWidTETXgCS1xCzW16vfm7XXe",
  "key25": "5fU6CubhrS8nXAuNgJHG8WkSH5kj8t3LFc8hQgHv47c6qNDDwzQddE8fAxyqM8Ax6ubDowNfEAqBxCv38u7ZQuUp",
  "key26": "64cqTvkm55byDNDQ5JRuCfkox9uVBXuv2wC15NfUNV8bGqNh2zCSGLQjmqv7Ge3wi2YajMNHZXj9THj5MeiSZHd6",
  "key27": "2GgM2ZfqS3Ss1Aoed2rCXLZZJezWQp4rrhjobcu29SZNWTh1veEs9ziAP1ojY3aBwbcZaMTERMdpdxCdGWEcFPqK",
  "key28": "qEtgpMNJY5hHWK29tFDHbkfYNwWRWishpZx2XfXfphWRcg7mpoLR3oX5npEiYT6ztXY5nStWvk3wgScQt3JgyYw",
  "key29": "4S6aBPrhsoE3Q7VoFteasUV3YQUEBiVNjGkJShLnQ6F2oZK9BCd6mLWmWJS1bduurvKJdSmAAxaegLWqCVdTqNpY",
  "key30": "3A73XDnzFRwEicYC4zAih6jz4dLTCuZ1rXtXmueaLYgxCN9Ahy4QGCLLiyTXuxWeZpz7epjgv4riF7bGHZaatvZ8",
  "key31": "22PJ4CA8QDGiPzCwFV3ByQcTbXruiwtVXczQG1FYCeH9jQx2SvwmuVm4bRqs7vEgbSmEad5AwbvyGvB2XsUMBqJo",
  "key32": "HsShvKKJn3Pp4uTM7X93MHxwAp6mN8sSaCRVsfRtCn7YPa91vp7LRpGVTKZ5oLzNdbn7woao5Uz3wgBmSU5zGg8",
  "key33": "5rdZmYCNzt9fBGRmxCdi5Y5Pv1fWWfvsQ5N6eJKYGwPM6SXA2Suot3WhhtsC1UzFq6iPSjMsNHN7ddzwesc5hsur",
  "key34": "26tQQozi89EHTTu2zG5pGmWds1ypXG7jEetMjJxj6AeFCHzFANg4ExwAopW4sna4uuYb3d9GBCceKtL5rm1WDkbQ",
  "key35": "3iTJSndSnD6LNmbN7vCHS7GHZ7a28Fxkzdm5jjduJWsNneCNFGhF6JdXGv6Kyw9rEUZ9rXeL251Cr9vK3xnySPxK",
  "key36": "3KLXJpVztHuitWy4Wbk9Lhb2YtrxGGdK4G9LKpoNv4iPaUsuCYsv2oDE9m2ZRfgDhZ8SUEEKGsy4EJ6mkdZp9NrD",
  "key37": "wHdaDMmc9HjmZoAQ2Etu8jDBWzsanitYmV3vP8VaKiAhDu5SbnUhBAQ3uZXN8DrFkihjhP4SaoxVbqx4ERbms99",
  "key38": "4hs1P8gWAxKTYveuL82cqr9WvWu9iniSFMpj3dABc6nQcMotoE5ydhDhskVYymCgQpAd37hohKyUgbbbxkjRVDaM",
  "key39": "4Zugp1PbhHLeyA2M6SQyNbFJVdkXbZEpdSMGVjeCUZWQXsNujP1SgeZHcaQLTUdbQb6SFQM2BxzcLThhRTZJCnPz"
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
