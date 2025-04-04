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
    "5oFW4iNPDUSyPUXQ44i2KopBpXZWag3Db8UxDnUrmA35VN419Pyte1jfwXAeo7trDRkg8JhJ3VEvpmGfR1mBML5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDc8H31HDiJsQydXcastjTngQoT9s6snqSu7Lu5kpG15kG6JHbP8K8EEaTM373pZt3vDy4V1FLQQLyQVnn9oS96",
  "key1": "2eupr3KmD9SG6xLxGgqgtF8sU21sskwK5oRpUzfuJ2hsS9LQfiRPbhoVSQ8ufWFrq6nquYjfGL7MQip4kS2R1gQf",
  "key2": "61GewsexLrLhFFcRRFxv646TqdM5KuKZ2GNPuRi8QaKp71FeBSD64xLuKXAAqpLUfn5kHNyWUTYydUr5J6fbPsws",
  "key3": "Tj1PJShzKNBeZ118bCao2GQc4AR97F5D7a7WUCed6N7RnvNhAMDsmzQHvxcLLBBR4qUNwqEpQLGZeJR1XbPXxE7",
  "key4": "5ZxdygwXxdYqrdgzvLpNcHJwA95UB7QQo9cTpejnYb8hCn3yKNuuD7r7ujWfVGgMMhLnwi3SgW1bTZcw9BqCL3en",
  "key5": "3iFUCWSjphPPbjFNeG5YX4ebVHMPioJrrbCQkmLxWE37KcnA1AU7rbuiMPAyi2kKovhG37rmapRsrNkX4BdmaSnd",
  "key6": "2pzHHFzGbfGe1kFcCzqJ4GWFerbHTLCbuopiDcSuTgJzD6bbuc1J21cNm5zxuMXiDX5m1S1XPfPTz3ovoqtVQb41",
  "key7": "3f87g5jbiAbmrfgN5JGW5hbMBoXAUUzNBLLMo1VejFcFcFoFceTpET5p2touHHcPotKqgXZ5mERUo3DqfQ6YRfGA",
  "key8": "KufHsuL1dtWbmQ6eBEHSoUX3HmxeG536caWokEbSD8FGvdJ3pwgfyPUGtR4bTSCkunibcbxLvs4kkwrXaofWs1a",
  "key9": "2deZ2o6jGHk6ijNsNTP7oLTvm8RMSrJkrN1dxyaVXCbEABKt14FW5XYfXBXJdRz5qxoZmFHkDZyEPoatvuVYQLsS",
  "key10": "4cayhPNwpMxuPRVT1NMK1p7VUHDqqJfZqaTcDKmTugRywEx9bn8xV7WGXAiAVvqhMvDpZnYYvzsUTh6fR5AewgQm",
  "key11": "5nqh5XqF9RxwRRXZYk4PqJfULoYLgSykH8u2AmupFejDHivuM7MECz2tqsRU5C8aQMHGFGRJ4duEcJViFHXjjDFV",
  "key12": "hUgFJTcF7LTPVucXz2G4MbJy8D78XyjSoqUEtmXwG2dmcPWzGFX2JGQDgogq9WakChMtrfvuxAci5PyqTWAzqgE",
  "key13": "2B1nhmqxejsA3hS8npdkk7bJCVgcXtwkgGgvy2Krnpg3T1aAkkQaq4M3craGYh6xKqrVPD7UdSPLm5bGHoiz3723",
  "key14": "5dCu7jFeXGZDiFrZPegGRC1DGcG4N8GrwsGZRx2vuFxxz8bXp3Ttr3meVLrGet4cKwzRqi8SuAMniEHP1fXCYeo7",
  "key15": "5918W5CLVpG4CNK6xj7g3ccQuHYs2TbhCkZ1bW7BBUtyvMqA5mrxcm6RVtQpvn2g1frQ9A2rW1irkGMYx8RPZ6HV",
  "key16": "fK3KyncYQ8WQ2MCz65JLbgBpBn7HvcHMkTrJPhHX7Jp2k36uSLBm9iUbg2pqJGjoshrEuS4oGrg5ym5vjAXAnAT",
  "key17": "5EojBctAQvrco1FtypjbpMKhgubEK6HRB7MdiHj1qq6pZZPannD2BDeENcyBLEyiCMMTrjvbgrUYxZT2jE2frkFa",
  "key18": "2P8tumeT7ZdKGmKEwWLFkd27VfAujoLVC2WLQKJZLMQPGcnJ5Jig1XLCoBn4eMvxMMcnBCyp3pZwF1z3xFyLCsLf",
  "key19": "3dDNLxH7RaSqH5i7Rcw27s1rz3Mym9tCCoPDQjqTtt1wUvZCJHE7uwYcWu4Ywyj4fkGkm8pYGYA7FAu7vbF6cShV",
  "key20": "eH24a6GUCU46ar8Myy8Co94K7v88G6cWEvWH25BsMP1144FHZtGh3zbr7KXwLbYiApdv3gttYjbwFSQR6YXyviP",
  "key21": "3MAKiSz6FyidpK357uiKtwXpWLgTb2FbtMFcPX1thtaGYUMDV39pnBQ6pngFhasKoXF3pXTjQLmHeVHXMq7jRSWh",
  "key22": "67c5qG3JtB2Uuj28bGgDw9HHf9hxPbuvviwoJrvCy1fQ8kooPuWWZ311z25W7MRCP4CzLwPmzhP7hdFJJcW5zc8D",
  "key23": "537WYnvSQEsBUa4FFB5qg8WnWoZ3wsvo1uaM9MjTpsHkvDMDq3Wzv63MHdcJmJeDEdwEzNkXLkzFWr57HfCHzfZ2",
  "key24": "3kbwCnP7n2Pqxx9o8jfU5FkURY2q96pyuxG7Xrn6QGbhyVc9zfv1J3T9oFF7aLBoJVtj8SuD3hYTxR2n6djGfecu",
  "key25": "D2PhqG3tGRKSqTjTRDWt3ekgTBxycXRKwfiysCF2CTjWFivVv3aGRztGniuuEtMiyiNEJeSXSCqQbYaSygGLQ9J",
  "key26": "5o2952aJrPgF32nD6ecNzDeSnG727gjXzyw9c4217M85onX7zgJUrShZ6eJ8WXzVSuK786D6Sm8dv2N8QJC4Fou",
  "key27": "4g1A8nb7oXUfmzuuhkDSkunqe9vrRouv2s68m2kU4y8KWRn2azdQxNo3Rpas28WPsiQmAJRkwrET12cGeWkTFgU3",
  "key28": "3jysRvhLdmgWzP76oBYra53spEq54ZcJU4GbGRSD85ji8ycD9LC6J1oWE3n3mLPjUfyckBt2zrdRHmbBXNrxLMjg",
  "key29": "2729orHdDk6cBGqxiskAjLZhfGajfw9iVVFEkCUyVKt3uBS7RydsQuoR7Y4MgcyULT9VZF4b3LCtvP6bfzgJX3hh",
  "key30": "3gDaRH7fm3F2GD7BAxFpGMyk476t36AcdE4zv1HL4wFxQMVQakcqarYRuyNnkXqKtK6qHboWLCYjeFziKuwVK6MR",
  "key31": "32n3Yp96QtoXg6dbYZRaE5jHfDfzAdAKgQfuqSyPKX8kNvUy5oZibJKkU576tc3ARGnxVRfSxtXe3UhbeKrAgKJL",
  "key32": "5NEpTtePfg8g2JPvSuMD5deiNWh2aSSNcgtctc3fCt7i27p138hJnyqsqAWvmHbUZCuKsjsoKTFoucxLANPhv8tk",
  "key33": "2WBbswosPzztbbu58Ude7MZb2twCHuYz1tf64krPXXCGsLxdqVTnmL7YXu68vhJm3LHJt1qx3H3JFxUG4ht7jhDq",
  "key34": "c8axvuXPe7bxpmuGvVtmfFtDpj531BioSUCqVs95uUDgKiMnFgcTLEW8XSgpFnVTudXECedNHaawgeqBTLHVm7w",
  "key35": "twiN7CTeynHKFwoP2UFFXV2huC6s6a3mPYy77CshigJeDcABav7rGmoEh2b1h1igkREzFngVs7c9W5R4PLaqeUV",
  "key36": "42PcB8yS6z3MHkfsgdpWfcCZRrgTqT1bU6At1NK7bGttreu26C1W2iG7ZfR4gKbw7WghALm3xknQxBri3ztYfh2q",
  "key37": "31r3ZtKVbAhJaTVdkmPApX7nUP7ACCa1H5JjGVA4VWBFkBJpmE5BJW4qUxMd9FwJBmN3DFESGj8KybCTaLEcv6v4",
  "key38": "5LjcFn8tCQMJu4KmZ1RqMwa4j5UDvwUVEsDmqe6GUJJegUPehzVYmncA2QQ3tfVHfuoHvxKhAH1M1q8sHCYAqP8R",
  "key39": "rEkN2XrVvsKsje773z4c6BeDvbNZVTGFe8jnJKd5BtUQXDVC5p5t6yk8GqzHdCzyaTjvPj1AcuX9dydgqAHPLsm"
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
