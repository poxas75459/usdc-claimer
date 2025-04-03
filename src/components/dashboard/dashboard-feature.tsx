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
    "4aKzkhg4vtpa6vfCnEmbrb54wrocmLujGcV9cvyHFVeTAwLM4hbtf3kdPNogwmKkkTAxzWMtQku6WrRT8U5CJQHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLvKriSSnbVXuwWMyshPc99zczu1VL7A9JmwyiGJazEvgouWVXetHLkvCFR5BNmh3zvanJ3HuJ81N8ECLScDV1",
  "key1": "vaVkfsnUMVKe3Mai9DmUrDywQJnFXVZsyYnVW7nRqaAMGCXphqfA3bFfZq2AbWerKBmDfVseVH2rpqRHKVjztQm",
  "key2": "3WC4rNHfqS1acraBEiJBDxVcfNLXpeDdw4itSH99fLatjkDAyFs16RxN8tdv4niHprd8fFrPs9TSZpJbV4HcfPcC",
  "key3": "4j5kmWabrv56s5nEcd3rFMsRnve7WboJcV9ghje8GeFroFXGWnbztAjizgFQpPAR1Dv4pFkT9uYtD73mvv44LPRf",
  "key4": "4Nn96rKn32CpmzK7A2zYuHj2mGVW4N6Gddtqd2bpWTs2Kb1x8iHAJKUp5anv6ZGAxDBNXvA1iQwf6DmsZebsCm44",
  "key5": "42hV2ks7JHrcTBZy3pAphBDpNZCaEgsv1WqMjQXcBAo1p4BaRJJqEK7B8GWEvPizxHNF6Z3NiAqMDjQExL1nNR6u",
  "key6": "2h6YZGiYpWULykaDBPNya2YausUpYKDa6EVJYmNZD2Cgc9V4N8BrKznpXvi5Lt9TKPoecbPRujLJZWcdqioiQzBf",
  "key7": "34ZzJ3f2sZTsUvYpczWQEaAWqhd75J9y5MkffBvT2P3GdV2ssxE4nBfUQVfxkLWLMznEZofDs3znSYsPpf2p51QW",
  "key8": "4SvrUYpEWA5vV892GWyshQV6ZkDbVBSpfQ4dMuCWgrVyY93jcfwsJa9c5Q6QnZMU1kNHZeyrXpoZXjjRq1J87Mnn",
  "key9": "26ZCz85Z6ZCRy16KDdm1Ufi5SG8d39T3ya5ea8rvHAzW5sVeeRiy6nHk2EAUiYSuTfk33VtZVBHoVBKHXzqFuibH",
  "key10": "3c6QdyRUCVYXFLhEknCZ8NXy1CoXei4VdbxteMe4PNqZd4dt8B28wUHp88f6QWBVRN6qt8wLwktARsAGZ7sKsu91",
  "key11": "2RbPEnNS19XAW18PJaso8DVQ2CysLZEWe1bpGZCK67hH3HBaav1XSccdnnbK7252ysQHa9FAGY5yU9MpQku471so",
  "key12": "fQi7Cr3VKBKvhMFcqm4ZxpmuJSQNus1beD4zCfRewyBVBuntUFRNwBrZvLYieWH6dSe58E5RDdzKRCRXkg66XUU",
  "key13": "4mFVJmdgnmATpf2BHiHc5NW7mJwNkMjT3qB1HrDbX4ETSGaur9HMRvp66mBNrjPdPziL5qzSaX1w6aCbdyF3hhnh",
  "key14": "4SELrKRPzh2ezZhyn5fPnj5rkcPk7UMD5AToWkASk6qFhyWXFiZXUahXVQainQejfQjEDu2F13jSSJgncpGh6dSZ",
  "key15": "VNKNRqpzo71A3UaNCLTZkiuF3htJFGkWK5zYWvydjsRCrzE9BzUgVvwytuWGVxWbMyAfpGCCs3SGB7dDrBjsqvC",
  "key16": "5p2NEevravnZ2uEqBab6yyZLvALxAXQhdg4W3ZQsnGZH53MnzP1dZAR5ZdMwZGW5HnGrQoqfENuPu2uGJgz75PU3",
  "key17": "5i3j2ZaH3ixDd9VtCmszUPsAcJNP88rLvCy3bjXkfc78FHYAN8wHaRAbn1wFaoDXqYBzbiR3jgMXsgbvn6xBFoRR",
  "key18": "5E9KcfUbWBdCNnwqcv621h4judaSsGmeEQyNLVQzqZ9kXoZ6cPdxQdr66ArJqAjvXS4FqSh9hxBK4yjYmaSeEx3r",
  "key19": "5cyNi7LPJ5mTv8eaokwK8GWusojJjZMKokYdx7bo5qXMY9KsdmpQvEnYr5Y8T4kmJEDKxGfU3nhjdtEJ9UFCN8ut",
  "key20": "36DmhGZUXsXwZBZQymewV7vrudYsQiLtKVrdfK25xfa4VuG1Bk2U83Z5iHZLnuNonzv5RwHnhE3cgD54xa9zmh1s",
  "key21": "5GUF7Gm7JpmHMW5xofT52a1WDW4LVk6GBgeuBF1td6yHGEJCfqTmY6RjZSKeKgZycY13dwzKsmwMo26jydCTwbGd",
  "key22": "5UDweR5yNjDYhEmYZoJ1EVXjmPZPC9KGH6NMCgYVC2S8CVkBn3Hkjbijex5S5iEeGuyMdfsGezWFh2m1TaNMUmPF",
  "key23": "2AGcjGdy6Y99Kk3i2yFRggtXs3ZSFdgqMiskWuLUNJBtuYMDPKTvkre2WpZPXxpcVB9R2r8nG5nPvWHz735e83NF",
  "key24": "8N4MVHDrc4173w7K2zuwxRfDny8ZDv2oMsLnwBpWky2DpgMTBCExWYh4SD3jQ8B4dLuHgxfuBHeJU1uFnfB1L1z",
  "key25": "4DFr6AhBTEoEaX23hMzxHEGGGBzH8VWsyhe1Rg3MPMbVEtanT5MUfgUfZMBS8sJpcQ1Bv3jrSGCddTdDVoVtMhWR",
  "key26": "5pRrojid3E4nkfxPdQB9y7XVHWQHB2feCgVCCsoCQNpwhdeozYkUabiAvocAnB6hE7bm4PCFTqx2yxLUbK4vt8cr",
  "key27": "2zWNpKpMd7ctS6w4h4xDD4JjD65UfjJn1ZK3ftJXRm9eAfD5dgU5mjvTxsbb2ishwb6rATWjuu7qnqN9Sd2REMyr",
  "key28": "2s8c9iFuLa9kfvVsY3CvRkkMrmY17XZ1F8NTNiBCwjYazucPKwvtnwE9zipv4ptTEjF9aYopN7PjQcAbguS1VYm8",
  "key29": "2GU6V3mkLihauHMZ5eDWKkhX4yeHRHENjEbgeLZgtRQNUU2Trh86SGhp7MgMJATV9duWcK3Brf9auP97ChQgyrfh",
  "key30": "3JfMt1EEVUkybCn2541HpkPtsgu14chdJ3vaKp3hZw4UxDduyCLPUfukazMrkqZdiuV416F7MwWsADLyGdPe9NyB",
  "key31": "m5mwBAhKxVcfa89ZQtkUgZw1XF5v46qrJ6oFSFHUhYS5Es5uqkeVx9S3mBTv1N8nuL88jCDNwTmT6KkgRy9DpoP",
  "key32": "5jy7CCL1hD497SHLJ51A53BcXuEFrLkorznXbxYZnZd8no5fChWZtj3Vra6oh6JsmigucYMPCihpdXN1psGZJjYA",
  "key33": "51CtUkL9CFYjwVV8WA6cmPp3WxpEHwyYmV5axYS9Vt7ghMPp2HxLx2qY2GrPJCrL8f3QjkXfqgCEcUKy1UR53rUj"
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
