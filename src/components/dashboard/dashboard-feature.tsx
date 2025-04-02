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
    "5f96NfshPoymBDcVtLVm319TsiigyfydhHQg3MyuGVFtUY95j7xKGp1ABT9FfJPM1fSAxxrYqZ9keGnwbUuUHCmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3JtnfHxkHaisADV3EbFwdEDHvLfY6nJ5YUeKejEup8aHPDqLNnFQ8GSSBSj2b8XKXSSCxojgkCerp3bF8Dysr7",
  "key1": "DYnyegfpADZudNSGga52vZDosu9VWJVjtwiSjRXF1P9irjkb8s1VG8uxwpHpgUEbryJUwArXCAFWtQkDgqu45Ym",
  "key2": "4zidXPDXSVNCyu6wA3mRSrAzuBXtiPpTvFsxeRhJziYDVePS692fSyE2A42W4Z23w4XnfdTA33QqZxZbUvqJeFtz",
  "key3": "24S1uXBieSZwWKotiPQDzuPbXdmQwNHAkYhLsLJ4FYugo5ViYPYohKqYFZ5hN45o2AzNdzj8Vum8BpFQEy6Ex1Cp",
  "key4": "4uQPgZKBAXaLMuerfcZzqAo2mqQoNY1HitMj42kQb4mcXpxfJLYpWjhEQiDQGnoGUASPB4gkBpTmC9Eg8dDn5KoV",
  "key5": "2V172eYz8KXAiNuhFEM64dHXETFfrzBUaFerAbRVDDjdfyi9fAxYrycBuc76efBtwb68HGBtJhEu4186hP1wCd28",
  "key6": "3eoTbxjiCTQujc5iiZprDp3berPDmotBuwhrFKfCnPoZyfQVJ8TwC8JmFKeLtp1DXFHVXcPpxCkuZToMVAvXL2em",
  "key7": "5zfLiHPkdj1poNFfMqSwfEQhggjT5rurBTE7tuFEEsJ8xwDEnecMEVkF8ghPTktyHHL53iCJNYYRT2UxLdpUJjYK",
  "key8": "onBNJwev387Ep8TaHQXWtG4db1nMck95yVaaXxenxBPsBVCXkwj2MJzNhsai6Y1Mcb5jL9ELcmy9uKfDYj1FvXY",
  "key9": "63EoLUnkQU3jWhrqXgZUfTRkxfKpSoM6m1mAz4UGdXPdU1BPdKDBW9rVjQUtMxTtiHHEporb1hNFU4eMVjJ3Cgn8",
  "key10": "sp1DcXAWxAbWhwRqXh74EemQJkgWNbvT7UBtk6VzXhgEM54KKD2cmkqhmaKw8xcSbTbLe1zqWEjNzSguYxyyU7s",
  "key11": "3H5VM33TQ2B1hVfDXBSHfjcta4pVaMWfct7w9CtY1K3TQXjPt8DTGL8fvkMxqmdkBjBRk9LApAZ5wZoSkyEAmv2Q",
  "key12": "KiZAcqDGkFu65Yqk356Ku9pLW1eTxfbFpzdX5dc82BLA37BGAmFR5SQ8ZiKbJavPa2EDho8gsRLXdq4UtVowf3d",
  "key13": "2pZZHZSTGj9wpCDfAfs6aEF8hYpjR82yYmktqUoGKuoYkg5pde1uAsTQLswbmDzbdrtJMbTo3E7kNv6qEmBGvecy",
  "key14": "tdmK2hyEnbT9BJpRGZwYU7pQXEioLJQsXs6dJauS3BzRF8QcB9Ycrrpgz91McVVoYNKyMgXn8oSpZDmeBoZj14i",
  "key15": "rSWhU46ZFNAuBYonVkFiJ1sHQpCKtNdQFDvtgPKD4MZpriTPMb2zXyktFhyV24uvvzRQvVKTRgDzMwk8BTkyHxR",
  "key16": "4T3fVptwETEv5yxADPcNyLFhdZdfMWRMKe853Dq22Mm99fiHFA9PTAZsCBqNre56mZ3RhHxM15wVVUJrfnreUGQJ",
  "key17": "3UYXna63bEgxS4PYg1XtuKCXQ3jZrCEL1be4tnju5tFnvFjvqes8eLGnuPBn2HoZiQtTqTu7795fppRDX2Hr55Jr",
  "key18": "66kjjbrcvYfkDe1E7kK6X1SQMNdhYwEVfr2tkYJ4bvwKXZCd1LLKnK2EGpPcRYfGeV9x94aR4sJznsjLXPePtYnM",
  "key19": "2WU3sopPBrDekSrXqUkm1maErEFoZWsY3EijLXddMWuTaDo4L1Y8TxxneidxJs8xtSDdwXE56xFmp5NJQT6Wv3sy",
  "key20": "JLbuKYXXzDEWZApGs64R5LoJCAdVQeqP6mjHehPsR1obX41SzGMdsXunv3V3XGNXHZMyeu8fr43gWFog6qJbRm4",
  "key21": "5AnbSprtKaMaZv8GcpDPsHWA2tgx9H7mFz2D7jzqfTjaiPzC7yuuLqRqhtHZ4rLyTgn4MERRP6uMLA18XxG6opHx",
  "key22": "3bWacBnQnXSY5m47VsYmYyoD74b4iEM6MjTK5w98tZMoymdBCwUDPtp974ofPpfGNKp32ACcu8adYH8FRYB8ZaP4",
  "key23": "5CgNpyoknjSHAo3km3K7tTTnxY5WwVzKpkn5H7fDaTPqFvx5iZt9kW8iUhGpEsj9gadjT18weZgoBgwjDJ6gKuTN",
  "key24": "yrsUD1wgKZpwPKxCCmvftdtSWf9Q27ADwWTJmKvEu4qU5eWBsC3wdkr8jrYqwdhi9LRpMyQ92vp9wSYLq1JZFZH",
  "key25": "4PrPYhGHt6RuNHGKSqHzSrpeBfNsZXFc1CAvTxHTfdFH9VRpcCL4WJdJ5zuWw9Jgm5yQ7tx95knapPqqB3ExyGL7",
  "key26": "31ivnYZvxfxqtonvfqBFpSmyoH4kH1XAuymxQLXXjnjD8VoqdAHHWi2CMYoRXSQa3gqFFQkcUwXahUUacfhVrL5u",
  "key27": "3EvzVDSjbEchgmoYZAoQsDNSqKod2UBfQa8CNu8LzLuCXGrNXcasM1EMg7dQiZRJK3e6ySA7ZXT6ai86hgKdDM84",
  "key28": "3dmWx1sCkSL1GZhYEkWvLXi4SwD7Ewo3q6dvhUxBEfgFuquwkD5RfP638TANM8MYP35jKQoYq7Ua9weJQWpWr6vz",
  "key29": "4oHoNN2Tdm7GizLvLJUXg75KBNBk8dypM2dzwbNwyMXTAnfmQ66FasXSKcVzvZBEdq3JnYjPhqE3itLUkUE7dZdj",
  "key30": "2j5TLMQrE3r35jFPcxotv5YsWYd8GEZGCHLKHAQFR6DixZ8aWkBVWqGMMvPmfCZEKm6huDN3qBcHju2U7aQw4Vj8",
  "key31": "mEm2kLse51aNJ9Vz8A16uYBFHTayeA7hcsuXoQ8LAfPe98N57C7kgvwzh2oxkmfVThXx8tWkYs7C1MoDSHdBJtG",
  "key32": "4p6XDXq3eZ2EsnKuPvsFMj1RKw15gR3DPQzhdXAcvkj9S441UXFd6UzuqV8dW5fLwanTJ8JyUgHyPw4mWeZojfKz",
  "key33": "3hwPyEmmM4xjcy8LNvpBq3zvmEa5sUen6rvSS2y34hEombiP8zcHroV3mhZqD5LTmSq5Bshf4zQfMbbUYftyEmNg",
  "key34": "32UTDPBYPqFJviAMqWd4wxS6uZ92ehRn9gNABh6ozmqkSybqfchBTrzCSxFrfAGqE7MoZpyaLCQkNwcm6WfHF19Q",
  "key35": "8yrLL4mkCp1CmqEW9cREj6FYTr4WXeVd2u3SQqopjcWawYiEhW6MjKTLzyUT1wZc7yn78FvjX6D8zagFr7VHPsa",
  "key36": "3GgcZjtvsG4N2rw9pp47UwwJrZYASEDwYS4bk1Fbb3zJQA2ufjKtazmhDwGtAkmNMcZdASWjNRsY1FPfWFGn2nsC",
  "key37": "5wmtjUcJvbpA1Q8EsstsnogDESLsoCZiVMTbHcbp7S8T6ZphkA1hyg2XNCaeUpsyVTjD4t3udKSxWUyoY7FyyG1q",
  "key38": "3YPjzQcBZ9wkFregyxD5yKKRcYj4GNQ3vb61FqpMTeR6dqbRNpvyfTZ4sVanFcpKZ8zWNt9KmXYM4kvNLZ553Tfv",
  "key39": "4hoogfE4ZbUNzqpDDJhXpqLoHBkaY4tQ1te67amMm5ykawQLhRQTbYMvJYB6dDFMaxY48Rqw8MC1WuqKV2MyVq92",
  "key40": "4EWATt4GzBja1gweguYepYszWDT6XieymCxWTHNY659CFJhWskBcqGH8CsViE7NTVoa9HbHUU81wMPhMDqBvmcXC",
  "key41": "3B9Gei1BVkpPUjhZM8NBsHmNAgSCiNeX2L61E8SdtWB7tAt61DFYUXhtAWmKV2gABvQGnef9F4X6gX5eN6vvoL9d",
  "key42": "2XYLv9macB762EYVDwK46yp377kgT4MRAAWibwstVpeZan4TTbPCDM5x8oQARX33ScEXpyhCkgnYaspsiDaK9RWY",
  "key43": "2ScSsXWpZCnGcKwTs74dE637znXAEnfXYs3MsSLrRUU8XYYhzbMB7MAgDWGFrpBEVdnni1JpXqY6TxskkDL9Rszj",
  "key44": "5vPhg3vKBHzNohFcVXw6zzaogHt9orrDfLhgXGcg3M9bvZtgrDoVfL2qdJitryf5c7K5fuE9H7UkHNDRmbnZjwBu",
  "key45": "3NBBEL6TeEVjE4j2jffQY7PzfxRPWWsD77qzApjeVdZD24JJ74SE18P4PZdMDFEWWj1M3vGXRM1pVAm969EXxyDg",
  "key46": "2C4uQuboyN9VLMF49H95CgAJMtWafrzCUvJYGLXYRMWxEAawmLLUQLBCWduijrRburdV9uWDQYEsxZbjx9NUX5L5",
  "key47": "KVaTas7b7k3TXeXMoHcSFFXiBnMTLsSkZJ5vZRLc7CLrCLGSeSGmWbyweQD6GGBErQzx1Um8JtUJpZP58qe34uZ"
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
