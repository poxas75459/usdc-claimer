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
    "4W459eRQHTFm5RZPFZZqxgWRYB8cNeecLFVT9HnDVrC5izkbBKFBWwhzAkX7V7k4b16QHq88SwVD3YjiacEQBoxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTL99DRnbE1KsSfXeYYaPVUxKabwNS5MazkAFnTUP3GPZMffQzbyXtDJrrQ146BKdHgs4dkrVbXHZjbq54D7DPm",
  "key1": "2YudA623t9XKZym7EnKhVWcsj5TWmqWtDDCCLXmAWrRtM28P7LzTrdVo9hLfJEQNDpKWoFsNzh4z6zYorP9B4E19",
  "key2": "2pMyH3FsoxTQjGaCKa7s7A7gT5dNLbi4Eu52ZR7WJWKY7mvbnoEhuFM5rj4D9uERdyUCpUE4E9qv9hK173Tp2Gdw",
  "key3": "4NmTa3PGP9BhZFiCNjXwh7pm1h96wJkaEgFFi4VUvkLtpVS5P3RbTkaaEabv8q97AGJrfzvvyFFZah2Sa1FgZvzq",
  "key4": "2SdgdmKXiq1qsCrjwxniTeGko2SSJpueG7rZCZrxMdd4PnigC36NpavXwh914kK34fdWKZSVd82NiQXoE5nwGtkv",
  "key5": "41rGHspqS4Sxgza7eCVxUwZ264WVod22GahsAVLdqdkQP3wUU5xGzj9L8ucGzjFuJ82M1D6ijQ5hryWVo9hSTAsU",
  "key6": "4eRb8vktkfUKf2vkZmCu1pGbyfFQb6Vdv5fXpuXTh4db5JL7pxp2nqRBpZzmyAkNEUPHPjQv2qqb2ZXpyCYYM3D3",
  "key7": "44tYS5im4Za4B1TH1kyF8dhZCPE87NL8t8tuWwYKcfCsSyt79MMxCQTY7GCDDwja2rQ5MyLoWeVErKmvYJTEq6jH",
  "key8": "8wV8gBVdjc68jBRhMTnsJGQ2EShTLq98YVG3JdMZvvuiwskypPvntAwRvnujQErPrzC2BXHDFQixw9mQLNnLm8n",
  "key9": "3Rubbv2ZhQQsaDhjh7fXECDMeEhFbWSEPvm6zwWsUb1TBX7GqE4ymMRwsmEJ2mr5MJLt5SvREqdVH6GBoYPmUDTt",
  "key10": "4YDYiheVRwRuVsAn3T5RJWR7bvrkgmsDxzT8r5eBoEbbhDp4SJv9b51Rrj612rf5cbcZMt2ViXtWByB9QXN2fhRv",
  "key11": "5NErPyrYwuaczix16vdKYdGbmFTZFDDD5PWeXCTPgUNJYCDUU1h81B3v7HvHukK1DCVK9SH7vJYssXsYHVQ2A9Nm",
  "key12": "4wdNy19iD2msWzdbhqLFSWkt3JpCYg1tWqsX8sNfJfqr86EUvDARAxMqmHdS627fzmr2smj5dExBPjUaUsjU9cT8",
  "key13": "56eD7Yod1yGDtoNub8AZRNKKWQK3EpWEaTUFCEEeKV7zi3Ax1uE9FKvaomGx6A8sRFHiAf1JJA1ZsBk1NMDvpNCF",
  "key14": "cJRpC2jAidcSAWXz9rVhuwNbLuccPFAdsXL9o8534xTTixEtoos2arCLHVwyH1oE5CfY3JfVbihRrVHYM1J5JxH",
  "key15": "VZruXQkCiZyujgaR43ADr6bfVH76LEB5rYzQHnLhriacA7HLYxLapvmBLBwNpnshDVD3SQCtyZJwibz74v5xs5D",
  "key16": "fpQ74wfXb6YmQYuwczdKPaZ881vQdGtDHHvXSg5txXA27YPH4PNd8hGUKH2vpAeUkVRjV7JWTLvFFevFuXPeLZ6",
  "key17": "5QioZBVU9XynajuoLqVMDdYnvtorG1gSdePLeUYrcUmw7goFKLNgRwcwzjjronFPrZQqHr8o7yEQ7wG4GpfnDDri",
  "key18": "oDP2ErSZg9uervN9QQR1mhCQpwutzYcEtZKCAxaXasCBKwHgTLx9mQGLnjK6F61kkd15FU9PseWGq3k5mCEdAXc",
  "key19": "m6Qufemcp2KjLDd7J7S2H1QZgxzVgzjCLZrKgf8JBtJrhRQg4QawefvmAUVyNnyBcEDGWb9VBzXbYBCv26NTfR7",
  "key20": "5Wg8ge4ipchseK5xbT2Hc1yoKLXZBGK8MmCvc3oLfQ11Q25ep4sCbvJY62R1EyQwXnfbhgRn2WSJgia9W74DaZPA",
  "key21": "2NPmPH99qV4UVLnMBSQbjT2HQRj1fnd8s4j9TXc5hPeTfCxkWz7C65y2FkJxrM6smjh9dLYQQ8KwqBnpP9Q8Rbwu",
  "key22": "48Ua1Q2VJbEZguQdyKrx86ZhWeqcoUdtukBnGNg9bxJ7gmBZY9vxzXT8k8jUbc2ZY7ag56zsLvUhTsfn5Nue15hM",
  "key23": "4uMX6LTh1KVGpaQN5P43du6L2kRhxeHcB3q6nEhxWyMyK6a8GdbuvGEW7aiHxPti2Wb7xuDgN9WEw2TqpFNeuVbz",
  "key24": "3tXXNxGSRrcnkhP3ki5DcnNmxqJGnr29FQrakSjDuRroAEeeTUKzfto8hLTQ8DfnsRo78dSyY8Cqmz7KP1dKnmFg",
  "key25": "45fKnQQhBnnKnH2wSDmHGJ2okgPdoCBrya7qvCraQEQpVDaGhZ42pHj9PN2LKddWSnsYYz5q1H2ou8e7coDmr4MP",
  "key26": "4CGXTKah7rmFEEAvkyFrWrwBBy4AANuJYR2cmArMLQuuqFCutmgpnudtJ8WzTPnhJNbCJjFo7prEgSPxeqhymbG6",
  "key27": "4xHhfRkoQc591B4QGsCRXW26H49J9wX9YymgVtPr7n3uytBsGwLqAxXbMrZ3a5Y9bT8TMWgdKaEMwtyRntKjfZBH",
  "key28": "LEaAY2hmeCCExaqFmiuZaBsV52BD3cmkK1cDt8ivCYRRwANzqjPFqCuiwjtnoeyS61MpQa2YxL1zAuiehGxN1kt",
  "key29": "5jGepHgKDf4YRQh2DM3nS6FxHgVaVSMYyYBMwrjczgw8agptEoXjjML24KPUYokmYNwHZMrTVjpiCzQxzLoWYVcT",
  "key30": "4tJXbZ17uzfBGPpiMX5L52t2ueycZDfUSYGxDDoysTeY1M6nEVz1i9VJie1GqtTRi3q8vdScN9avcf4krXryBwwS",
  "key31": "3fTxnjaoJuNPoWnLpBmZ3bwV8Zkxek6pCceEt6MXsxZfs4wvM57ZWi5JkZVPbWdE5MPvQbGCyB1FgoCqkvvgr22W",
  "key32": "CPwRp2gkkMD6Zp7VTf95NsoYPjnmPepEePv6ecGsxmFgkWogC76aTRJvSyDaHT645PeJw1sFFh52Uo95ybd8rzt",
  "key33": "ZvA6YHUVrduh8eUr8dpCtPodeFRpVcQWiHmhjVFSSvPLtyXkn7w9Zz8b2kqXTCy7fp85zeCKYSxYr7kFYGXpbDA",
  "key34": "3utow63U3Bfog9BiCjGfyq9q7x1x9juigsP34k3uzpfhg7Lf1ct9ETnTXDyHzhxZLxH8N6HYJuTqJCvBiCUvUehB",
  "key35": "4wnpr3rMmui63dysC4vJJwmkV6F2ALzmaVhtGYnujkJXjJjGAXPkrmmGgYqLym42hzN13bFTuFyYBo7dJxfS55Gy",
  "key36": "uNDLqzRAa7gLWaVWCsNdPe2FLHSmWHQwEvt4oj6BGYeuujCVUjBB1k6cJpZaM5xxX6kEj22GERgdsDLwnPSK3fF",
  "key37": "4KpuvSharX6hJQ2MZ2bJr2cBFyF3qJheuj6h3KH9CiMDrTJuZwZkA8WV8pWTRgWgMoD7RXb7GUfFf42sEb6xzPg3",
  "key38": "MCXa9iNkVhXW25qxxZH6vybx7P2ULEZSxk58xS6vTpRrXagfAzfpxdhZmxf9gwBYvbcb5RAJgBAJHxppxevUeDy",
  "key39": "34Fscq9PPqTnnxZaSvCbXMkzCsZpGnSTv8GFKjgbXUuTPkYYTcqFmdqrZbw6RheeKEV2SJk5uJisYnh6EWgSFZJX",
  "key40": "4q8oaf2J8XdB5JtCi2yKytCcRUvbNZzPcP5VyDYXGNEfMLYZ1GRhYFnyAYY1qKZpKcLLvHqeitRFfANkFuBy6cyu",
  "key41": "2nA82RbF6ZS2EZE8diFVythFhbhXfryTFPAn9s4Kbeyg9GCekhc1XN3DvuDwGLQKXKJYdSpSULkz3P4FvHb7KGWh",
  "key42": "2omJj4eB1iBQ2gHPdVEBbGfzXiWtiw46Bc3RTG6NakLEZZB5UoQiZpW5Y99hM8PSpB9ubs9A1PEaDG231seJLGdY",
  "key43": "4P8MSmGgEit29RHmasEVW5kDqeUhem92VVJjtGfyCcezxdDKagmTRfHtha2MJzHmowX97bkx94ExzVKxWTxBrEUm",
  "key44": "3HmnPN2akHBnk4gje3ykyQ3Gi4AP86prorMRrhjw2JsmEh43Kq7iUmu26HL6vuV1YyuzEwoeQyf1cqim7gpeFAYV",
  "key45": "35MXs5HUJPh1zbmZqbtxJ4DqyTv5W6cULcJ6CqMcVsxWXR2cbjv8zk9qJSGtkFAysHe4Wh8VJyezEc525gFjPup",
  "key46": "5dVdV69THWZ7KqmN5a6MmsrGLATkib964mtUG5mMSGsJAZxbk7NqKLVFE3AFKNKmrZxoDhbpmdWqAiost3v5XiBK",
  "key47": "5GmLpsUvJpH7C7r6Mh97UyqdRY2Rtv51dkRX51XdMcQV3fsdLmA72QdXVkMcd8BTtCyfiMsWYg5RZZbwgpp3fES2",
  "key48": "3DwaiRNkvm5mMGQNmjB4ayfDgt8sxJcv5U7TnkH6dsi4SckobHmEPHdq5yvBqpFRD5Ee7h9RGUyZrGaMwFnEyrZE"
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
