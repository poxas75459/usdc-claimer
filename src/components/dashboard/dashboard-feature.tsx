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
    "49eKPXXzpWcVEfAGdRqQUZsK1CxRzxwr9jZfpBaBa1WaUWYTstsv9fuPkJKU4928o9d79S5juA3xBmxBP5sKHLKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Hbqz8bJDHnpUsBXbscMzFnH9zjHcp9Ff6WJnkyL83djRU9G2CLAV7k8fHb1YFC3BVLE47uK6GTnhjinSY4Asbd",
  "key1": "5Nr3g64TuiTVep5mw8PtdGZzwgZayby62mTu8HM1nvrDd3VvGXKkptkERqXoa8yBjfH6Zk22BmKKBfRXKr69gyox",
  "key2": "5Ry3piuTgNKmhMPHjxF18LpWeYJ91FSfcp9JMhpG1HtRRcVYyVoHagqDL6AYcvSDzpuvMbpqowhuLY1kgycZYGCs",
  "key3": "5p2TKuYHuEE4bQDqzuvRUNPK3N626C2iNtbQeFYXxs2bNKE6Vsd9kXynAqzwgstiQn8K6Z9Aota2phSy3radPVjm",
  "key4": "3QqztdF9nrySmR85t69oXGaxRGA8Ma4V1A2jtiJkGoBe9LnjZ9Yma8Tzej8kBmT3nURbpPCYR9noE2Xzf7nxZ5At",
  "key5": "bmpdKazhVeo3LHyGdFQqHZATjcXxWVuMRunGZPFNuLBZUiYYoGQWw5MjieTCHPXDhkdCa6EwDDWLeKNKu2J12rt",
  "key6": "5hek3yiQDjj1CbAhGRNzdhBA984aaztpGPzmmJHKnkhj7eBxnkzGtYoChZY7kzyUWqkg6fPT7KLbEfjK2tvNAEEJ",
  "key7": "3oV3BcUyss8gbJ6wdZrsHgkXngLfesgoAL4e7Z2mS7jiNZcXQJH4R2HMRMtwRLDVnfvpH1N7nHbkchyrxQFBfWwo",
  "key8": "5Et1Wo4dWCnhe8VQE7hWqWEDLcDrpuEdEV1eky3TmRCNAp2iJKBjh4har7ZXuNW9cwQAa9Rj4Wcb4Vx7p8RTMrqc",
  "key9": "4covSoNSEz9PFsWpfYRS7JKBRuUAwuriCX8hZ64dYTKzdBcskyxk2eL9pRxBdo4rvkGQ7F2iDDHxdiKoHRk4eZiQ",
  "key10": "3pi1rSVouF8cvxyrvwigD45XbCnhwyEoYXh5XAdNd9Qvq5kwTKkjrPs7B3vzMhBdMSBNsa75NcEQPEywZ98ysU47",
  "key11": "4XndnwSCG59t4RozYyEavXPMBuQgkS2Q8TzAFPACVbHp6PSc3H3wg7dTdibpj9Cc7ebRYcbKpnqMwbjoPEm5i8ij",
  "key12": "5A7L1V9yhUzHwbZ3wAYq1kpxsBPtZJB1yRoA9nvSPVkieaFntMy9k9ycGdx8WUoBr9XMHdzv3ZDFwDz2gCB1h74j",
  "key13": "2QJraPVzfMyFg6ZDAHUd58nk3RPiwoByqqp6UxHCkMWr32CzJmaxjUfN5yUSpQV6fUsFCWkuhJsY3gi8KrBGVJWi",
  "key14": "3q3hH1sCTMno6rtaCZbkE4Y4bwHXVgKZsuAyQbUeWcBLQSBsBehyXFDs9Cf1wGJfv3nNk8FCNv2pfaYkz7pkTRUE",
  "key15": "pT9g53GdCNtMqv2nLSUWAr8fay924dgwzxuKdTqUKAJvMqunYX7rXxUXnfXQvSvSfCB1hfBZQECHSf6mDonD7eN",
  "key16": "2toXvj2NTnsQ5HrQS3sHh4nVjDiw7kJpPdFoQi4aKBRNDx7SdWL4n2zgakV8tRBxgoAXAh3gcZmz6Ck1r8GR1izX",
  "key17": "4GMrJ7LSNg3JDhADyxiz5NnV6yguP8AaZT4Y63tjTeJSw78dQmBNKN1iAPggsrVpHvosheVqf8HyNYSjgm3ECSEh",
  "key18": "5XYAy3QrYDYSr1wArHMTeqK1xtXjK3qYbqFxKYkdMdc3Qh9wFds7dZN4937KwQDJD2pLXdQedAsWGSzKH4rrCXo9",
  "key19": "3y21Lm9mjMzWBiydTBJwCMUP5QycxcXR6TZri817GotY7SoPBQyZ3hxfDjYTzikwFHtctAYenzyXwZzBdiqU57bv",
  "key20": "2ndudQYEkMgnFhBhTVpVzDBcHcaWfCJy1usk5ajAR5X6YPz8oDP1zpkQh76uAT7qfTv7vwizUZZ1QAVAE15ANyak",
  "key21": "2FfYpp4snHdbRFLRspKvtzPxmJJFFRgpqX5L8eS83GNXHavCLLDJb9LpMBuKNQBJriJDk6AzRozgWhsN36xHSxmh",
  "key22": "4aWGu46RB8GpPJc8Hz1WCjQv4kFeQwR7LVwYWeZfdHqmXgeKMjs18hLHyGqULc8zPDgc7zNeHyGsxb64c9MDz4aq",
  "key23": "4eqb7BLaP7qoDrZQuZmpNqpBwgm75zVSftm8YQWjH1Lw21jZzGgKaJ5uam2SjsoMUEuWNxoYtaxbF5dUjoCmNGFr",
  "key24": "uSptGkdwmBUJSxsjWScdCCCtSvPUGHmdpZxx5cwXqJTv1qNiwjQu5JNCHx89rvJ4rSbfpCrTLL4yrZNmCym2w9B",
  "key25": "5TM76FbJDSc2iBbR6RK7wsmVgWE6aScrrzuFmtrCMQM1n3Hs2zt2uDb7BXMyfz8DoG6MruHwXmn5ReT46ntjTTEw",
  "key26": "3QWjKabDSUnmaTzK9oxWBJ1s8EDVvycLGiprB6ps4X5vDAHRunF9d4nkdHGDq4C3YtWF7wKboFCf5wmYbZqvhyBv",
  "key27": "3J39XddqE1UCRFxniyfhR7NML6bRkB8NAMewPEd28NMxvhv9ZHUkK7MsrM7QrRjnKyZW9A9MaYWDpmJBTPhGXj52",
  "key28": "2A3Fut6AKqBQt9dNHdhQb7CUEVUpBUQrFMx4MEqtc8kwoVfQ3UYNnkES8UM29CSwFM57XfaXdp8k2Cxxf9neNywM",
  "key29": "3QCzVvZPP65tM5tDtpoLJKj7eAWtgyxboN78Rue1YW1mcjr1qcarUD3CW4ER3Yh3DKMEWUWs5sUzMw84goj9Soc9",
  "key30": "3T3AsrdbeB4eodaLXjDhJ4uVe56oTj4M1c3zVxRVnu8moXswiMnHurTqqkVKc2JekfePWKAZo3Ys2ZQcXqsz6e3K",
  "key31": "65CQHtkntryKUp9mZzFBZEyGUfKfgiXJztNkkibrGbxMikVLiffDF1C9zDCofAnPTowE7tHbtcFRvUvZWm3DUPr9",
  "key32": "4xCLriZds49FMQNFkUfvt9YHxPvo1qmiSFcYwjySyA6SvEUqYdFZvqcGBKE9C6pc2g14S1c7BFkmKb3sjaxeFKYx",
  "key33": "321uK7eG7CUS4cu2tA5Qsi1LRz3BKN2CRZMpQkhxraPrw2VipxKXpGupyj35uSWNfmrfgLi7uibVmnnraWdLQKGo",
  "key34": "288HceeVF7h2vDB2gTijbGbL9iawzv34HDJvNGeGkcP9Zdf4GJTZM7ssqJWK8iVN8NBBaqvrKJ9vrVy7SSPWy3Qx",
  "key35": "4Gkt3jAUckkhByU54yrXvr3T4qaJMPUQPnCKHJcFB3A9AYwDQhRpZW9eky1FZoR8z23tnGkR7ATx2grzRnbtxw38",
  "key36": "4xjAKyQzFqoxHpjfqEtAZ3b8tVSLXZf1KVWh344BTMYDQ5bDHJvPuiPQutyRqD35x7UGkPMg3sivYbZFNXphg99d",
  "key37": "5USPGTozawChSpnBXTQhZpBEWnjAFRft9qoM3T23kx8WjJsLJgdKyNaPwz5pinNE8nyaDtP1YPN3exJRR1JVQ4hd"
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
