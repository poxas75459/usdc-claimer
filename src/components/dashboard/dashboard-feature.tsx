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
    "5t31RUfk3xDcMnYJUkTTvm6LiWYdcV6kNz94hRx96xJRVJH9L7Bg9s2dfDBjJohVDTMJ9wNzr8QwuVSRm7uwuSNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483EKHfdjihu9P52gXqH7iDNEALrNZ8HZ4QaJhAwKaCVKzFmCV3GCt8nG4bBRCCHNK1KdHuNMM55DyAyNL9NSwin",
  "key1": "ne2tyqmJg2mfeQxUi6abNvmmmipKGs87EQSwQZm7r1ngyomcoKPqaGWHKb6ioLkKXAe4sY3gVUAdqGgz8FX9zEo",
  "key2": "2GsRCm2W9LPSWhD1tuk85jNgx5yhhhanB7ex4fbrBsRbGLYbozTywPCXbDYF1mCjENJk5LHUF1xCpVEXGuEBzNnL",
  "key3": "3tN17yYKa3spLkqFpobrPvqE6yFU1hc1pWL33NeaaCJxTLdzHmtbUFjmZqmMs6m8Uqycmky4puc97EmyeajtqDW9",
  "key4": "3xomsEq4FNfz29EMveraHmoWgAJEEt1xc6xmLYavrH4qMgWtUcjirS9QqFs2TPGULbKp4zmqBdL1MdRuwBJLWqJX",
  "key5": "4aeyBF3mujELHwAchi7oN2rLcT8yNvnUH2v1ffNPGygYPsrxCuFwfVCK9ynNLGgSgoUquQxuDPCUiamoe2AgC4fW",
  "key6": "3LBxnmvU92k1J5pD2Zyu1bAKgaMFyAi1hQwkf6HfVmMNYbW1japMwpGrTiiD74U5UC4SpheeDeKUJDwHjx2DXz4V",
  "key7": "4kAbJc3BunyxXEzMiXbV3ViC2gnXCRKeE583TbpkbgVeQmAnsFeK2NpSn67E1xWqSuFqaoXVxLtDe3F8MkdYA4E3",
  "key8": "5seauKnCDCDWMDXZfDWJ2arzbfZ7LGgzw96KG4fupADTsf85SPBYBztmDAvK3cXvvgAHvCT44o3pFBsS24kiUVoj",
  "key9": "UgGwPmPFJC8b9kYJYbqJigiDxf6BCtY6emtNDfyAA9ZMrjK165KyFqKL5SPx1W468Pumm6358cdvkUbgYVipwXB",
  "key10": "xboNAVP9NwaGJQBWUz6WYbWEcyeYULadGCeiUM4GSLAEVdGCrw1GCQQEmtqbXH1nfVfiReYgcA72Qc3fUFerRtu",
  "key11": "bWDrh3zYZjtNHgWFZ6Yd7LkRDRe1msDsdVhC985Bzwd2KuBmLuGMP2amKCMc3d8WuUN5T928W6hagjPntHL5iog",
  "key12": "5Ly1vKz1HYiwzkRq6q6QntQNoe6Yoa5xK7VDJdZujpVj4K2hvLMFLAr7VKedohpUmDpfjZdiXKoU4Kwq2Qc8eYzT",
  "key13": "59AYPENp4miR87XTr9tZ5FodZXz7BhXBv8XX6wJtCq5Hm7TbBQjZ2B66YCWyChbCyCqkmGUtxqkRPnFrpoqTqUCi",
  "key14": "5cbgLjNdZruZ273kbkTkbpcqryWC4nrK1QSF6H1pkH6ksoNHK7WoiWdbBqqtsY2KZniMxkE6HevAjPWZTsby6Zu4",
  "key15": "yJdYnFDkX4k8bnN42qZHeuPrCduJagvM7bCn6Cr4QWn5FVNm1UbHTxCFBvjwEpHFpUs9oceERN1vnmRHRiyEZnh",
  "key16": "zoiFhZiKuJxo5H5fnEWBYGJsyYT9iAsbcc4cXUqDfUATcDQ4FaDaCB8iT2bFoSu5Fhv2jxq2B16jHM3soLzUNC6",
  "key17": "35vyyhx3VWrspUNMoJ6e3u8ERezycrqf479FqxcFP6AkibxzMEVRKCtWhr64Y1s2iSjyuqAWuuNTzwDCgpwKdTML",
  "key18": "4kkiphVDA3ktNBhASEGZJP2gHYdc2ppNir5Hp9wp16NAYczyZ6FgzGJCZjcs9CFTCb7EesiYokTSFUUG4ZkY47Z",
  "key19": "4yyrnK2NPgSyj5Qa1LULUzWxortJK7SEZSQooQfYaMjh73YTfCG3JhvoUnW74HXYXFS2edWrZDFpp22USFmRknzt",
  "key20": "mULhJg2G2X5v99yFuussVeaHZaekAwAnGrvWmCwZk1WrmKjsHWGZHNxBHMcRMFjjQc1ouNZiarRP9tUmEqoKKNn",
  "key21": "5GmTfgWHdfoVavspRYqrpUQpFr7Fm5wbsWZdT1i8fbf5JDT9sSWwHxX9pZMfN31JzHBJ69q2Cj4oVi9gQBJ1FN98",
  "key22": "2p91VQnYKtoHYRGuxmnHSKCq9ZQvfDTfRHomRVezPLRAXkDhJKFvbYFH7WGmuhk5JzrHzT47QMnwWquUcip4W7w2",
  "key23": "2RvhFzcK8TidzyUD6faiq92c9pvUuVfnyPmDvtficyvrnHgPkpLpMfF6T9SYDUB89TpPZV7e9meeCaLioR3pDmhb",
  "key24": "4JMKnyr8SkkKEh56uxdVWGtQFr1g1VUrEx6Qwx5eBZRvpafos48ukEUgDXnbfUPKBce88u7cZPznJkNh1JMLSTUQ",
  "key25": "5Y4GzwoGbiVjFGKUAEA8rSU2Vm4FKcg5PvGQMrsZ4RfV57uA1jhSr5iJjJ1pR94m7HgmdeiPN3NnKKAaqsoRimEq",
  "key26": "2piWHiqifbwNdiFpqiuv8fk6CUZDjiqDRhmWrW4J6UiSpxFNtFhah38BQ3HtrcdMEZDEKn1BvQXC5Lexoy4mZq5M",
  "key27": "VswCwWagsgHfuqfepPnUqZfhDbh6GjoEC1cE7RHmTNyohCDbfgB4ZRukN1xUhnknUvfyVmpEg6SZ64zekGQUA8U",
  "key28": "57kBgVKDFcqqjqKRpg6now84YDFs9ec9qtBj1b26khhefr54tHj1LusogZ5E9GzQwp1SkQnBwy5xJieievnHeGcE",
  "key29": "3FW5kDUBu9ThMJM6z9ucJxjyF1dub2u1EKGURM3uhsvLzrYaUTe9t9vXqcXyQzvwnJAi25z6jGMY8m9TcxzN9tBz",
  "key30": "2hjxod9My78q9sa8xdC4rDCFM1wU5xPNcCByGYFzp69tdc2feB1KCstBhJ7fS7mseKWnZV7Fji1NzASq2cVup51p",
  "key31": "59jCtVKFHa333UYXT3rMctan8fFPh9UGMeZ3SQ4F5JM4ed3Aa25JNbBMA1PR1yhqaJ9fuDoLWkD2W5tQX8HNHiGh",
  "key32": "2hKDHd1NxgS4EATtoc31QwGYCmM9FA1DwnVp6b3w9HybEiNimEyp3rkpQ5KPoBN5o2zAC8HiLX2joj3z2UtL37bG",
  "key33": "4EAYLsQY7QWZ33keM3C15zhRRHhZHSaQQyQZ136dfmLG2x4W47ud6wV6aPgX2MWutLaGQsFogAqsmtqW7CMxMYZZ",
  "key34": "3HHVziJYXQz5BELNgJBcg2qcU8V2hbHHj767u5rr6mXKVcHs1k7xhbQKk4qhUZxiG6uSiYkekF6Pv7zgmrQBGcn2",
  "key35": "2Syf6JBaU3NNusQ6Mus326gw43Svw99d2aK1kvtXMT8izCc85nDDpcw7JDyM1FnUF6kpnewJC7ycrJemiwkLg8B6",
  "key36": "3fu4CXP8NTvSq1VUhwcaeDbqFUHYNYMVdJZQtgXgjDNdGnsENdwPQorBNUxutJgYXaV6m7hq7QQ2LpEEcLBfVswf",
  "key37": "5e359qq6qieHS2TAHCg1kSTeT8AfVqhnPAxBDUViZawZNf1wnonR1XWnmZRGrXe6U6TfGPk1144drxmPkn3uEbLN",
  "key38": "56t9KxJhPeXuq6iAcG89utANZRvtrpt5iezxwdtCgTgwDoTrkBVZUfTjdNRLe4FoNBQNjpiUD74NdTVaCiXsYdmS",
  "key39": "67kxWpBA9C4VgNvWitTpkdMLUGDfpA7hfrm5uZVUnqEDf4cpiFR5NS32p1DXarsz2rovdFFxykzAmU1X2Xj4ARgB",
  "key40": "5f1UPk4hJ2bVhUXHAJnXDMShws2WB3Bf7dAh5Yh7RU5zXzky32cBcfj5VFY6tBtXqPycPqu5jzXpcmQHaFWtH3DV",
  "key41": "4XF5FMjwrwxW7ReKTxAXFKtdZ8yWDvzJrw8GzcbTTbABS2bDXJemixuBHX6kdwguPa5EXGH64ZAgfg6Tx2SnwJti",
  "key42": "43Wehnm2sjjdoUNP7pM2GNsTCb6TEnF7biPnjTzU1MPgDyjMSt227Hqn12VRPivihGw6AcL6MK2Rz8gfHqCtYA48",
  "key43": "5iHzCQdpevi7gMYwAmMrxMjxhrqA5Duqc7A3oUdmGCaWM4UQUu2ZDB3WgvEabgUi249HVofniGshdeNEv4fKzNDM"
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
