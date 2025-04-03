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
    "29iLrtke9GfPK6de127UDPq3rALTqyByCQJoEbJnEmpDjsoByyexVZLWYXGe9nVUDW2fXZ1zC2mbcA7igkTL1BxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJRgY39dnQLX5MXccfkwpGfAYwkDcCP3mwU3DnsLxHoWtA5DcSzFruQWw6RhF84ZPsyn7itfef1WzHQ2wa2ydqW",
  "key1": "3VYRzVxJ7WbNbW4A2fiQiJrC2nLntBFH62SJM3Z91t3JQ9FKGVNwwLeptjk7gYzDw5uBfsF7SuZZcB7T7JFBvf1y",
  "key2": "4iNdHM9TAFTjnRfq941AcyB4f88AYcQExuGwRy7MZsuWZ6pR4XqmEwN8gY2zZQcaUj6zUJt2JpbiKw9onnnNGWty",
  "key3": "5ANFow2MzyMkJh252tujMgHbfVjBMW6sPtKapcKKqQ64T1DzsBJWptvsdCg4aMxzZYyFYUx9XneVL9uesFapXkm2",
  "key4": "2baa8fW11Lcv5JuupvthYVVv7kQyXPsKZGHX53XT6fQ5Wyb8KTgNSkfgS9yEVFcC3rb9musdWNiBUBL3wbR1AXXV",
  "key5": "2Hc7HviavooovancKAdvJk67Ai1mvLMLQqjyDYuSG1hrnLSFaUayxkPi6WvrfnVLRS5ajg6Ygkpk6o1TzM6M6ADY",
  "key6": "49XMKwZtJ5g2Ff45wdjwkxvSbLMAuzkSDGqchBrQKvvbXLDpuWyuU3XWDi7p6bb32Mbo5BivxyahfyU6DvQZTWAj",
  "key7": "3sE9VYQhss6XXdALB3syMKbKPHStpqAb7wuon5tK1zVMKV7fBfDpfPEKMZCYEh9yTbpyPNpBjnXrni4hbeUGTuT8",
  "key8": "iQhEjxaLzDT2tXvTe8tUb1dESTJ4GWx5gmtnckySddV8WfxSk2j6PHuPYrKxtqCET1AB1VQc7yGuYMRmbimrzDu",
  "key9": "3DwsrNVxyJtiYHoPvSrZhCrb2G3HpWwBXvPvhdcDnvdLppGf8cmvajFMGYLFv6oY3gf5Jru1PBVjJSo2o5L7ETtv",
  "key10": "2WsUwuEoPZevFiiwYzftRngv87aiJAMcqDk2QRKzGYTyK4Dt8fUTUgiv3TRC8sxuhbVRHiLCeWpTr87VWGJqPU7a",
  "key11": "5P4oq6zFj4NvG6CrmUrHkQxe71Z8E56opAKcDXuQpywHiE3ftMRxDCLCCjFpBkqz6ijUeW7BEKzdCiCH3vnkqZz9",
  "key12": "2bUrgGGj6o42bRHMPKXQK87kU3v9bG73Uzf9o54wXMxi4mbCsqRuccF6YwsMmnFxc342B7wXZavzvKS2oMNtieWD",
  "key13": "5HAXpB72wp24cFNe9RoCsbXokJJjAVhR75k4zMKwK5vvhrokzCDDBrmVzuzkdfa7NjmDvJQrpm7fcn4vZFzVuN5z",
  "key14": "3JJhZn3fpxgdf5wEDeCoyzxf2L6k7cqa7tJJfWE8FNM2jmZUbmd3LKbAW9TGSc1hFx27MExFpb7YhkCtHN2tcbUY",
  "key15": "4bETff9DGoJfM7cz67qjKdPyLKfT54fdFaEh1f9DuNjutJzahxwJX95zbEYCqjLK3AR2gQ3cTtfSqXMgvs6HMiwQ",
  "key16": "28KJMh9Z6bKM9vDVLvkSt8P4BW69HQF6qBWXijFzohw4QY8nAH6c8V6Lp9QYPM51JykoAeszabyHBbnK7JGA3q4p",
  "key17": "7fBTfz3Mz8U7LnU73UfzissoXnVGh4L4KCGEf9TtCkXPAjk4rC6uEZfTC6giHKEURYvrfmDhCbAF63SYeDzsxrF",
  "key18": "4FZKbQCuZuYdtX69tdUK4ftM9CXCsFyts88AfNufXJ48qsaKXnKgcY1mLGe8dcgB9Wp5qb3KdRAeg7fvmzadDHNk",
  "key19": "42BdqjXDevEa6f3FHeWjFC3GkSnaqRX12waAdPgWRY1BDZbEuL4tNMAR25ykW5Af5tB7kGJ12Q6QHNcWmLBW7jx9",
  "key20": "3Ub4vLk7L1kzHaNn7ep7qHyS45L4oMgPaMXTsiHvu2hZFjyN8HXpvZ8pG3M4fRfYYdcyxrK2KxqY4LYHwnHnQenX",
  "key21": "CMQRjanVLUdVs2ZHe9QBtwdHJEn9g83axEdXCiAsTQfCyNGFkUPJVnqMjC7emCsGiP4rDqZ8B3XB6GbS8Mq7Uso",
  "key22": "4b8NE5YXDPJKLPmsAgeV5vtRRuq5gJrMgg6XRSwWdi5FHetzLg6X7mGLhKQPGT88bVvLy5dQSbVzLDqYi9NmcbiQ",
  "key23": "3ZWtpuyX5gcJ6LSvN969nS7in1FGgeDvZciqUNgZDn2GgYHG9kKQTRxaWsSfyWcSqZFrtJPj7D5K8kLfjyGASRG",
  "key24": "2XNCqd3YLp5ib5naSGHWBCHgR1FJUETvKD9hUVAWjj1rQ2XNMXZQ28H5znWsJehaPA9t6Y4C7WdgwkNZf2W3fi32",
  "key25": "4Q1eexqEV9bb4ijvKT2dwSTa8TmAHrmA4U5rt3BPdquz6w1uSUrhfosrNWz7NcAnP7YaSeeKcotffKpjppCW6mbn",
  "key26": "EsxX8aYkw9ZSEQhZwx16HtZDEFFEqZxzPEMDac32NGBV6A5QNK8NomojP3emMi1yqffUU5cYbmWXJGhycDsF11d",
  "key27": "41XFppR7eXaUDE9ecromv7Dkr17ACtbpxRjBMh2t1sfA58zAmpVBfYhkcXvZkHkDMGfQDqG5uHnSQDQe3ai6sWBx",
  "key28": "4gtWUQigGL1D7jYZ9yQuSjuxeYLmY3rfrTG4uYx2xGsyn6e7ZGXWTU1U9LrD8QTLs4Cnw5WZYhL6BjhSdn38F5Qh",
  "key29": "3sZ5MsbhQpCKWb9ztwqtm8hRuKFZ8eLdbiR8PhQKYmsL9qa1erLrneogkMHkNaPrVvwP2MqQTVHQeGUatpuqGzr2",
  "key30": "1aunWKqhcVusW6CsR8Y9EkjT1i7v9Nc9M3CwdWLcN5H4L957CjdwU65BKzao2oHSTRjX9DW2Fq25BBSr8yXrwFa",
  "key31": "3scsQfxUBEKKxDkhPtrMLNRMo3efG1cqNr1nV2d6Y3sxjaJzPqzmf7m2VvrzL97HLu6URjB7NTckRcRKPv3tkErf",
  "key32": "a3qhu93RyPaag2ZYmFggeNuSg6uLEbgi1NS8VZZUKsJmFynW3ZiCAcvAwrTUusq17XGLNfo2hGd13Rth8YXcV9Z",
  "key33": "3ZL9tfa8rrz7TmHVNaeNhRK9Xgq5fNFBRamhzRSxTcoHNcEQdMiVtcg8u8SdKQgggXDeaNqMgs2Q93Q6E1mRFM5V",
  "key34": "21UwJdjwrdnFfBT53XsvL14tBG1yM3N4GxtdtyUEMuXfMyhigFkH9s46WJT2tMwLLA4wosJ3pan9d9KVxdUBBjxA",
  "key35": "5pYFj541yApeu1Rqa2XKXGCsvY21JDtLEZb9ZzBHmqz9FgbTmqyQRo4Gep6DB85Qpo7hxfoe8YbVkbX8Zqx1H9KD",
  "key36": "3u7Fyoety4zQyy2rkvVhguoTdXYLqWyMDMLUxF6A7FLQGeY8hVJjm1MYhpSMxba7NiAK4zoLN3EbSjfY6dtsjk1v",
  "key37": "eHHmkMkbwDAwiBZcJp1MbFGWN7YufvCXqxWNpdqbWM4RDjYpe7mw1KsbYX6BZgAmsytPCEiurH5xChHEwSJPUhY",
  "key38": "2s5BNcNefDvukmthRExEhHd3EiCTd6oUdehWDH8zBKvKqaKTdPktofXZxrMzDPhoZ95TiyCQiNtCkmAFeqsyAeAB",
  "key39": "EUEKYTcuTcWT72pUhaho1vA5J2hgA897HEcPUJ9SUR3b4F2yvutrWNXNExU4dsdzBWRF6NYDob4CitMCYpQQGxh",
  "key40": "3wRPjG5GKMKtQnjagc8qBvWtutEd5N71HcMFAYBYwrVNeU2VeKCj8PV9vv1zoqgHFz14UKK9yb71xdHpHyTGWgzj",
  "key41": "N8EyDsJXm75rF5bW867Ut91jSmDzYDQnyy6kkdRstWRCX5sz1BiNiDTPovKY9sADhL9NGEXQk3o3XuzuAdZUk92",
  "key42": "3iX2rjTk3Furz1Y9cDEYV6pZnUXfRwuQKDimytpMThEXtKSL6QvVw33Yr9yauXTTciNXcXqcqnF1UiRZ4eAgBPQt"
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
