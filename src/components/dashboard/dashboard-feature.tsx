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
    "4FaUMn6Qxj8Y2tBjaPHztmijZurmucnvrqHnVL7jhpUKj8arNi1VNUNvXWvsbEohter4LfkgzewrvkwQCy1CFpwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3X56mny51dkYKDxztBWGEfuQYUgEJksX9B99PxrteDLa1yCUHeq4rSMGyFmDLYgzJzpAzpyWanMGa5PonHNCaf",
  "key1": "3jYPEzjxfxNF6ETWAKfyWA1Dn5kwYiVa7PNch3oefMkHK9vyUkbzMXuu5eL9wu9uVttJRWoEywCToHnRekV6Wdwx",
  "key2": "4o891iQhdndecSkuNAWqYeAoezKQQ3K2w3GuvdYGxwWUuF5iL9A6T7XLZFRte1XS7RAZXVwGLoe5xpEd4Tz89du7",
  "key3": "4EFxjcrLevWjJKzmvN1ze7wdYRyy9dtKoyBop3i1gAxHYAYwoc5LvvUQWwMJVinuRnGyiEZQ5TS8MPeVYy6aqoe",
  "key4": "5gCSL2ArKL4AszQxVQY8r6m7un3mP7waf99h3gYSV7YQDyTS8RGNjqnGUhkfxzotW8nQ2PuG3vTsjdGoFsq14qGW",
  "key5": "3jMsD8FKCy2rS7pMyJU3n1WUQB8yVwftPDMnFU4iaAguLPfeJLExQLxVLLE83zkqTKUfgvSgdu57rjA25af1KqrL",
  "key6": "U7Z7E5bMiJtEMmXKf3TtyF3J18jM3c8CAHK8tJFkJKyzePciZQH1ue1LKh4M3JbgUWjj65L8SxnzZK5SYR8KqvJ",
  "key7": "5AjrAkqtxzspbxpui3EqkTWcQX2BKfDNs45o7q2MRrNRtLEg4rastH1yBkvVZyYNJarAciJkRmqBXHqPiS2yfvRj",
  "key8": "2ouEbpxrEuLbmud1ztwKfjLWAGxwsQW2dTzyyDWJWryqXWM4j1dMpi3pCuHi3BsMiStiuXqiF7kwNsb4o4H2pAQd",
  "key9": "fnsMQzXErPY9m4xeNDRpcgFiHpE844wA1YWLmU9sGAnrPkoSC6tcyqwH9xdYnqjk5uCK5vHvyCgMKi5qMP6NUsj",
  "key10": "54mLSb5ByjscxPv2vkrShDpKzwCfsMZJQPiSEgAMgY9D5YmDkHEsCCC8e5Et5FFduzUVZTriogx7t4yjGkuSEcnt",
  "key11": "Xw4uikZTot14WK4kfmcLuTima6KvKgEtQFPfz6BydSC69zgsQebgDXnNgJcDc2KFVvxTK5ESVofKLEMbTRjwH7V",
  "key12": "3ofaqsZzttcvyGx9SpJDcpF1eP2LeRM6XMQ4x1vkRdw92oHsEyD5GttnHF68CTgH8RkpVzjN4qUR9pYt9LM4qju4",
  "key13": "28o7kdXfc1TRusMZ8HR7LrqSW6iFq7pFZtm9LLh4fkhN7zbhFpbprPC2kXkHUxdnn7sHNfePt1fySRzDKcRaT646",
  "key14": "S1o7G17GzvzKgjsWqJCQGowAw2HufnFuWf9sQzgzzHfrAeQ7Qqr1zBSsPJFCdZcDSHkX4gy5EFRFxCzRty2EYXP",
  "key15": "4BPykSX5SQVQqWUiR27hRkDdsQ18KskSFzPsPLBq7RX7hrg7QCQqaKeWmXtZdPDVvipuivAPAwNkR5PSkZyXpz1N",
  "key16": "3Ds8eEfeTLPxJe9rxiUdmCC5CqZbg3UhkSKtNB3fhcNYtZddEAAhAiX6jQHMhu8rUdpiQxVh9Ug5tS5tUnRCwTDu",
  "key17": "3g9STkv57F3kRU7yvGMrn5VGkSzy1XXMkS4YQxPfgwJFdr24RhoAm1py5n1vxPbHUPKu4XimGzsVMHLh1VoEaNSW",
  "key18": "5eBKH5HADQbYLFKKojMBopTqhq6zCWc4GuDuhi3PTBzPWeoSzcrsQ5qsNzRRrfwoyRVJpFELsaLQzgtWpjSeHsRo",
  "key19": "4QMCKJEBJNvDmq7WFVNx1EmfCDRVYv6f7mswGCVQg7vmU76TspeJ7WhHKsmsB5rK9K8ME3dG9c7WkZA9LVebUeUE",
  "key20": "3YpK34EBo2QxG6S5j3xgvaSLw6hzGTi6TovzLh3h8M31d4bXbAeiHz3ops3tDvs6LqCWmAFfatwTuxJykcqr5Czp",
  "key21": "ihw2sRuNoCereJ8LvJ8wbUNm6vHcS7cvxLQD9sALWFrzTJ8VmJHYVFKAggRTSunF4qxr6wJmvKSWSjsNmzZna4V",
  "key22": "W4XS75xb8d78QMTYQooR7iRgQnrnoe2mHw3MyjbVCQ7Z54hFEyPq7Hw3iSfiXcyDLWS6EmJvtyRRThsePPXALa6",
  "key23": "4ztW8fiGNdgUff8PL68GNZYnHX7jidLgaSSL93amnzFvH6TFLVXtWa4KB7rdrxutCjnuohw3FwGXrBjH5JEcpoz2",
  "key24": "3S5EmUdtDzjBPRbDPMU6DDbQkajxnsUjyWYpFrKqB7izhMi7RG9LHbfVe5iSSYb1mE2FdbdE4KvRiLB1xbgt1ZPM",
  "key25": "41BpLFHrAveM5pXxPMq3dhdwV4NkJ8J8GxnzbbtYkzbPr9AWg7MPrjcLMEVvcnfgp5pbkEpXGhax9GJ8sXTR6dwV",
  "key26": "36PiueZx3sXTiBiBi1cC7EY28UsAjVqY7MTQa8xPpWnc6o2urMb6NeaTSCkbu5N8aA9podhFyAdwJdRtgREkFqt7",
  "key27": "4vaTdayxZ5sD14oSixZ2X8Y9uyNqxwPzE5JDWHKvW3z9Y9ntcqYdbJsVekAs2fnXMydJe5NguPNV67zNCcWMJSVs",
  "key28": "5Kn2ZdjausH3nTgZQFxpqvfEwXzK5dwiSKAy9PSj5YLRVhH6XP4Wrs3nYe8Eqq4g3DE4jxDBt4jsCSCpEWCGEoBR",
  "key29": "8FdLv2RbN9TauB5MCwAWzyWsonwgwCcuosATY2KPypoRcfiU6LQ2T2mY4c4WkF3evFkBxKeoiYteETsbTTJqzHg",
  "key30": "48vQXz8YjHHUbLd81sssUcaP3beCPqR75yGaRBGfvgUDhES8sZL2VeV5FH8VpWrMYTHfkG9oeaZvoaqYmCpinjyD",
  "key31": "256FF8g4zfnWNLH8APdp9MYW5cJ9GheWgdMGhTRXroDcCUkv84kcY9zjyYx9eAJeSY169VZFCArhLYNcDT1FRshv",
  "key32": "5BmFsfNviscW5JgSJFDB16tvc22dryaSgRKgVmSiTTMUypiQU1e12vApYKbwxBVP1YjJW2m8SsGfwyQDoaSPESn9",
  "key33": "5sbUXhQBGQeS8Ba8VVej9to7gWuAzptnN6JRu1ciBDx7gibjSWQGRn7GeMW22UX1Vwekku8KJZBUnub7ZK4VUj4c",
  "key34": "4E2wEgK3LfiDap418T45QnkqvXodbUq8DmJzKx3gLviNzeCbaZeMRjd6ctq129HMrDiJp6ruHJvyJ2kjohK6J2y9",
  "key35": "5Be9W67FcAfacxJpacSfW6Yxs8tDW3agyHU3TJEdVtEi3LRoHhHNpREqRLWqiz6DvnVZk1uAAktx3q4q64bY2Ap4",
  "key36": "ZGBQ6bB9FsAYgWXJJP752j3XdfLsMrJjzTtJmrm6erHL49hpvud5wZ9VecYGhrz9r79SKt6BwZG1yFnmfEBZoNo",
  "key37": "3poLuZ7yNnNLW36kkPA2XivQB41YQuXwAKUxhGq9m9noUVpyAiHE9kTKxLyaaEgEaqwBEGQ8nWHBxsfq761sVQKB",
  "key38": "2WTisinofGLMrza4JdZKHBShcTpsQAWDTmmqfmyb8ifSPM9MYFwbG61fmALpKxXFYbxnvopM7w8kZ6CCAorKd2NS",
  "key39": "4VwFhusyvgeQkkeDEJVRPDz6WPXzH5csehaRCkBUzZnP1NwDxRUbj14iwAEb8tdjE33CShCmowkVg9zjxvLRSL1m",
  "key40": "3re1ZCbGHK3wzYweLeWXFwyxXYZdZFWzUUWfYwThMwtSokEdvsJhU2iyW4uBQ3JPBP2E2LM48bt8JmuX3UFH1cY",
  "key41": "2HPnTBFojhf1CYcEi8FNJVJ83t4mVwZWgPh5rhJAzw7oB9TwcacQJy9ijZUMv2uQmsgbRnMaWcYcaBGXfwwS9LLD",
  "key42": "4hE4hNxUJK42R1cvhW3jDmj2FcchsszTfzps9ww4JotmbEAATsjwqeJkspNViAxBaZFU936JefRdov1bbaU18fi9",
  "key43": "4euM6F68Ca3PsvhXhU51D7NfPNYQzufaXwPTM6iA66Uy7RYBLajM96p8GPsYmPxgADxH4j7FoFLgtbA9iDVBXkiU",
  "key44": "4FyoXzqh5yNk54NhCWugDzj6uXaXHwFyFwqFvkm6BNGt8GzJ6aX7ykLd1WSo4KfikuTA4oFWhkjioNLpCVBxjd3b",
  "key45": "3zTBPbWtMfCTdz22ZdwPSXaMPG5rJnGMAzf22mvUkQD6ios87qjjgRdJ9RT5mjKwbKTygKg2oWWHVkQ487jQnBHc",
  "key46": "44UPE5LkdXkXRnhMqeXerRMMSpm2hqqh9F55S5HcvkdFPEjwNFHJtQXExef1JCJgVZLVMkrvPSvresQ3YQzsS5uf"
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
