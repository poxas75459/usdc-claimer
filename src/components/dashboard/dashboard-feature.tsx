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
    "22CfpxBvdVtsjAELi58ctRY9c9Hkyq4saTei8Uo4wNEgGyDn5T6GJYXFHzqeSHyY8j4jc2RiZuShnYg4znWHi8Kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QskwuyHnVDqFuxzBForyNDfBLCj7wMEQuVwG7wxJH9noeoQgo4uEcTyuPZbbLNVxCThrYEt11SvTCu2XA82Zie",
  "key1": "3ZbdxfyABrs4qJneqzuztUJdyLGVVzEoLEwgo5r2Q5voF9PTi63CrMzVfPs5DQJgrMqBnLebERZtNjb984v4N1K3",
  "key2": "qdQ8Zp2Jk1JCPRH4zwMbRkkmhE9PKdhMNshwJu91QgXtXJtEvTcvLaCfn5ug5zYdTYjNs7RDKjBYojm57YGpWUQ",
  "key3": "4eV1mgNJc2rtNyatwATCUzYeF7r2AjXZHQ6HkpuvLMBUJVpdRLADeczob6tHGeyBJH3draXSY15tFCGeyDCTLiDs",
  "key4": "5TtrHABC79vgZx4auMz3oHRSEVyPfhaeeZFLFhJpxwRVFugiWKa6z6GoiBLcGtDwzo6n7gLTinjwP4eamRyV6Qot",
  "key5": "3iERAK8GUN2bWMzJJGzcx5omqzjXNcAVXXLpavtvCaaXKiNTRECAkUyKNUfqqUC4t1C7j8UCjcDwvgdSgig9ZurN",
  "key6": "3WHtUhfknQFXUUK9Kubj5XEzfrZuPMbrGmVBh9isPqvBQevyWC8oJzC92DiKiMR2rHciMcKBZgkUAxruauEthtYU",
  "key7": "v56yWXRNHJ16zE22e29ZB2QnQtXbgtsDwi55wccTqDNdM1k3apM8uaHPAniUKAUzF7XMFNGy4Tsy4vJDGXQa9zn",
  "key8": "2DuyWaeW4ciT5YfpXf7k4neTK6HSWfb2y6uJw9SNpa6Z1Uqxsw7YM5L4spAApytc3ZLwYz9dUEhuo96VTZVGNFPD",
  "key9": "4PbN7iJ6FcS8C3FLxQ4c4RemvjVDUcVTuSE9hcMFcLi2ootJJp1Q5rZ4Nx4wGjxjCVzn7QXVYqzguKTU3YhwPeLM",
  "key10": "5iPSc9RyQifVttdJG5kKhhJbX8cLTbaxKCeiodMY33FytcyBGMTeBaM8H5SJibhxDTEwEkSyv2K85prxtTNbXtxQ",
  "key11": "aJRRKr3Frqg5j8TcSQ9kDf7q8UuJiha56njGaRUAAbvdCmMd6KvKgK9wf7VPYp9noUKhaP7N5dashx21wbBcTks",
  "key12": "54ZuJcMQXX4LbAD6Te2HccW4yJmqC8VFh8ir3mGZt5bj9QgRR3Lf3HmqRM5WaV8nbwSYtvsih64TJ5ad2BkBt5DL",
  "key13": "5A9JstxJjaQcpAxRsCn1ToieZGv27Gsz8PG6yxs52UDxkZcV4TEqzDPu4mtRfy95J1wJ5wn6T6UjUp8zEhHW44jA",
  "key14": "2wLJKWB1JraMWJEJG96cn3nUkbKAZ1hGwJxzHQuNJsa7Uu5wddaXRhznd7RaA3wSU6QaqdLLkM7KaRk72JrbH9DV",
  "key15": "65eYYAvy9mBvEGqXLUVnrtVKcWxUw2hc5LNfgqLg8nthr5KU3EnH2Pzpx7jHfedpgpwd878DMpCmW22JmY6WWYVW",
  "key16": "gSC6Keg6XhJ54AsK87GLP7hzTCnypUBoXb6Qht3T7NpuuP5DSeLbK3sngf43FLGAHj2KibHxE5KZgr1aFNUNVpG",
  "key17": "ySMjxXiej1aG6vqBr2SdpgQ6F5sJtdvE1ZHbWd5w1Cd7YEHL4LJmLvQDdCYN8uR1gepeumRYQJZeseL8sCA3dxV",
  "key18": "5F6p8o4Ex5zV6J6119K1qEBRahtUNeW52nrX7LtvsR76udmsVqR1WmdoQPGoDUu2cnWJgc5KVxYBMrLfqdCh3vJ6",
  "key19": "3UPbzfSiBjhC6iz8iLe78NYRcKtDwg5sfzyfNPVZ5x156NCo4KDowZf7dz6nFTL7JrQ1vaxT3YA8dUyHD1ofjMsF",
  "key20": "2uvg1CV6eYBwVMyuKJQhWj7BSPosPKRs5AWPBCWMFo6dpiRDBd1yBQU8x5DiHco6A695MnA7dd8GuQhYqKsw72B6",
  "key21": "2Wz6NRJCTjmtjqgHkGvWKTK5SThM5jK2hXxkEh53v5nLwA7pvoDabE6KmJDgSJbZEZoz4DpfrnEdRJreyxk28BCE",
  "key22": "4jhrMK29FoXFJEsgrkYfeWeLFqRgJvD12ssQUvDCYr2RtFi3aTANqTFKdAa1uH5GTLur28oArfyqX9KEUNri1Qe9",
  "key23": "3UWFKoMjtawkCYdchtufQkKswEgn2p6CNPEVD2s8GXN6KrcQvGaeLcSDR3bZUz39e1TqrLSG1tsW9BwR13xtHPs4",
  "key24": "5SXgB7kL2Yxy36Ps8kv9bT1fCz9dLPnXNvpFx5YapF5hREtfQuvxE9vMabxgxD69i9SZNd8SbxoWzPnDpgft6WDo",
  "key25": "3cGBr9T383CDNhDCzjiBcBKAQYCtzhy3kpQTkqu3vPidhewY3uUDJeUD456Pjx4e45pN1xozVFgGet2ZQPhQHXvz",
  "key26": "5MjmsDmE8E4d85CsJ66wEDBKnqw915dXhPYvNHXXTRbKaJP5SXQhZLsEKApEKWvsWwP8HnFhUezvnATfREACjuzB",
  "key27": "4LktsREAphAThKVAxsVaFVHEMd1rJKWvoYMdBnyZQ4RbdmnsJX1QQy25Xs4v4YaZEPASaH3XUfnfHE6g7VCZ1zWq",
  "key28": "3fkHFaNGH3w9SY5GjroSevP19ukLt43ezrVahs7BaH92fGSRCn9sXfWJ4UHkPEaX616RJeVkNfG79RtCrbB1ZEmc",
  "key29": "3knSkF7gMcV9nTscritRQF5vhL75zoNmhKFxEBnjuqGWzReYBHTKDKJyKeotqar3MUj8dKGjcFSMYuywKkHB13dr",
  "key30": "qpmYjahg9VATL2RCpbG2wufDJfcZkAop8je8eZKfRUNVZEVrZ4aB2xbkMpr5x6NGWPCQvDje1ad3Gos6raVhQyE",
  "key31": "4fA186fwWYJ87nXKznJg5cP7kUcuKu29Q1qBFR8ScGutHWkEhPdRFMPHy4Pj5pbE3Co9oNuhM8Roy8jALeHkjkv2",
  "key32": "3ULCb1HXRFR8x1EBFouSMz5uwdHggWe5F5CUeujZufkdbVwXNMGJjF5o2xq9MgFZsqPMKJatKic9hEfznbcYFHNp",
  "key33": "53MnnYgTaJmLCjxg6FW2e9oyBUkVCe7NGCgAUZSA62R2XCSr2ebTZ51dvjTW6TqZx2qLirEhv7RGX375xQMBgbSg",
  "key34": "3kLJUsiVaj74DULAeqaTPtaMoJ3Q6Sgwn6Kyw22Ln1dZfcaghedTNHxfKrjN22Ghvsq5y7RDxyWoupZo3g8Ro5RV",
  "key35": "3ANBAZTk4QBeR2LPQPdbXk9g8vBATgp9ewqFfRHdq2QoW99cVFyCDhA8FgpRaF99eYw5geKp5MjJk66Hcjb8myJp",
  "key36": "3AVq2HKNrJZqcy7EwyP63KAVqJpjuWpNPtvA24K1dL794gdyjxtrixtfLX867rNKa1rdRYvYfQEswk2wescLS9no",
  "key37": "5V9BqBHpmamrH1SscksEXx8vbuBx7RRRiCWk1wDhMMM769KmodzjHPvTe37oTafqdeNGbsqn4YYHEbRooMMJzbU8",
  "key38": "4UaWGsN5ymZUrAgpq6bWu9DWD41NPRbZAccF8s5zQ3AB28oo7Pqsn8ioP3JYHVBSg1jzQsD4Q1jP3pFjDtzTwqc1",
  "key39": "5ZBDatUoEz2MnEweM7rvWdzUqdWHkYUA1WCaCXFXjLyqkr1tqaWxPXNjsL9rtdAtGsmC1HmyMaqYkNKHjfQf3KiU",
  "key40": "3KR97zEyzPZmqghbF98b5ghMMdB486LyC7pHj1sgEVLfEZbgX5D6wgK4pjcwpBG5b1PcMfHgm8Peuvue4NwYDR3J",
  "key41": "4AeAToVkD5ATc4dMbwFMSxwY2hkkdY9UtbY79E3nq96extfHdkEt2RVHjkK7rW8GBcAdaQBFgsgfKSpj1Ed3ojEf",
  "key42": "5KVzEaE2wB4zt8yAHQbP1gR2h7ZHVQqMYNuuivxeV9MUKCopwdHKGdszf8VZSkttaqCfd7LnF2QPBSerFEdkYF41",
  "key43": "5L4sNxcngatWLvCNSxp2XMMvFRp5GLEv2HYWVg4g3ofjsXLe364BUJe6dMewxy5gtvGxJwQ7Ep7ABbVitomVY5Wh",
  "key44": "gLrTsq9UMukNsMb9anwBz4mfkbHvbMei8kiSGZr5NnTnihb1YQ1ivbiNGCB5sVuwGXYiWX1bzJnapDTuzk7KnpS",
  "key45": "2jJT851B9W6UxcfbnUNfFvDpsvYEmebp8h7bxp77exdb39GKoJSTRm1gGxncR9oH6fafjYRCdTRc3nQLU7V8fjhw",
  "key46": "2tJJvicxNuC6huvtqhcUqZ9Dqh7kb9meE4JmSd9MMpfWMxG7xMi1Zyh86uJ9uuF6H64gFF3vDt5WNkVydTUAtbDC",
  "key47": "5bQMJBdAnU96zB3ubkSmNmDDjsZvXbE8Jtom9SZjjGJzteLucPAt3bf4bPGB1qoBSDHFW7a37aLUHWYvy7evJDST",
  "key48": "3JF8jqicVKJZisJBzEPGERQQb5dHa9jAThpFGhobVG2mwvTqM8EJogVc3V2eeYu56CzR2a7u2mLjrTqikkH6fwGA"
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
