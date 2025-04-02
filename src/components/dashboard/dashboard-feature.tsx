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
    "2ru8iqAWcNH3BfuTaW9Xc6yUojWvAMgzQDGiDEKv8Bmgt56PTxE2u6fST7QpvHAv6CWKX5gkfw3VPg9dP2XQv78X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pCvAbB9yBp8t958NuMcMfcN1NxBttWZFZuJu4CjSDHoiedC47w1jxxz43zq6Z7y9wHJx9ksXfDpzuKKaDULWU3f",
  "key1": "2Xgks4q2jr1rB3KMXHvGFN2xK2crN5grtJ9BK3C9vAE1tgNk3XLxNkmeKnAfjMZd6SXiUdkWHsEHtr4Pui2daKpB",
  "key2": "56aRgYQCmdZfZq3De6zJv4QEUyMmjgha6AQMwoCSLqdsup3SPf7DWP8hm9PGTariss8U1RtfsXNhmGUNThGyAh1P",
  "key3": "4cvGXE15dJNUUofGGSwNCWBQ2ushnc4QAviKVWELdiKCzGybtMYgV5K9JoT8PFWAh4K688nFQgrS4qyFa7HVAowY",
  "key4": "32YLBiUQCoYcYRcg87H2jMRUoAdSpjm8rrGKNrW2VspMZCZTzBHkfMLGhXccty63KJr3MRfRtnWuVWmT1wPJHBBd",
  "key5": "3D6mihxWniCKEgF8PLBv91y5QJkCeQMxT8GVdzERaTg7BkGabRN7na3QhpAUQdJG2DRbeapFStHUgzNL76FBheZN",
  "key6": "4Pm36pvu7SpwoHzBCPHvi6WEurQRSXnCfjnr2EARHe4yVbcYZJh4zX3ntYWNQgHvFxcRhXsWebcwLyfEdGjSgyX1",
  "key7": "63z3n6WNqAC7DwAxgotZeRuBhTGBU97VQJkKFsJRQEXNJ6Zd8TWhLDpcNQvzuGNdaRiaeBahJq3TrYDxVX1cfy8r",
  "key8": "2XpnN2Jk3a7XmiwiY2HXVD8tKsRUFXRjt42821DC7L2yMHANec5Xwi2EbQ5QswzLnv3FXnmDcZa7Tcc5PbYVLybD",
  "key9": "5V56mWj3UQXuUDkrDoEtB2etUqzC8i5maSvHFiL3JMnqeUReuApu2UATqsGAKdM7694Vx2E6DVLfeMX3MSxvTig3",
  "key10": "2tv7Q6gbFbPv1LjghJSrcwVCHswzdTAxX43XxxY8wRhxHqVxB3uSH2fP9PjWSS2RSpfXfqLRwEt7sBgqEc1wmGjE",
  "key11": "3qzkLt3mZ8ddFaWGMJ3Z9WgkgLHUK2LqrwAYZ7Kx1bc8VCkCmPtSsVreTtuxHy5u6CSqYuKgnL3ioRHPY4Y1dBFn",
  "key12": "4YEKa4hxXstgJqbb59BP9Rses1YCLjx4wdNJX8FJooCE7vTmbTj3a5agWGjqP2B3idsiaPULdoqtCeBFkqf2kKJM",
  "key13": "2vYszc6Fkfdf8uK3Prra8ffoKvUHpNVTBFZFYLUnk1uW3YBikH6MrxbStq6wjQWYZcCeroQwwa76y1X2A2KdbSsE",
  "key14": "xL68A1aJesTQbY5VkwsW7djt6zCcHezuBD88rbVxtkM558Qy8jTnTsyAfhV18joy7GTJic9sSdr4459inWaqbVu",
  "key15": "4uqTTsmTranvHiYcBqZXhfmVodXNPr54MWwf2fNy6XBXpa9P34WfcVBYim6aACApvKaiLc6PGPGcYghUgxCPE5pe",
  "key16": "5SZS9kDuB4iSALFPGWzAuG7MdxL2smzLtbfGUCRgvTQfu6wyci6Ue2NDbQLdxTGQiw8f8rWt8JSXPhpgsZ5rA5op",
  "key17": "4tgWYbKxM3Q4H9AbVZkDpK65Rcxv6UyTe3ZfayDMSNSdqESGioeTcLCCermFFR5BTJQqcLk3KEqR8jmGLpfY3DMd",
  "key18": "3MkXYPvXoYDe7asH2FBvDiuZdrLKdBQArH98wkbSdYYUHnibHMj3vtMUApHy82HeD4gQFkq6uEjhHQN4sEMaQHFz",
  "key19": "pW8LhoBzWTGTk8CUtcGCLdxw1gyJZMxSuRRDXp4rPwniZUdeydKCRmXiPDKuCcAuQFVEx2mKFZT425wegChGpZP",
  "key20": "2tDoCFgyCzk659fX6B3yJ82XeCZMKyXTUTkeR1SwDhfpvz6tw9AGEt9BHKUtP7MnYwSN941NoV2eHfnEut4UBia",
  "key21": "5d5PghZ679G3RLpEasNav12DzEQGVGcAW7hzktv8KWJ9hhLoN6g3jsNXPqrQmH3GuvRLMTaXxWku5KpDVHfZp3qa",
  "key22": "2bQ4YtSA4zFXe8FraVpWL49Wep9PFsPz3VAhwdowgKTbsGucdnxAg5dBgVBQxrq2oB64juo81zQuigYF6xTDmcq7",
  "key23": "5XJUtCPkAn2dwscjsUzwvcssX3nkqb87bcJ2kdnEZaKy7kxuycHejHegGBUtov5N3HH8uydfQyAnoHhYTYF6reYn",
  "key24": "5maPDK3ecRXGJgZMK2c7DiX3ngr3sGXwdeLBJuFQVzGa3NwhHkQ2JTZSp8DUcE7UdJDYmsf9Le98vaStyMKJdoPq",
  "key25": "5RRA5uAzkV2Fi3EBL43mRBU14mvp3T2znucNGNj6XHuu26pZXbUx1Y1jFKas8XkskzgchdRkqnBQtnjCLG4hfw9Y",
  "key26": "2jBiQUHrhQYLPSKE6QpRqgyQn72JppMcE9J7knHno1QD3U9Qu4oDta5rwRewBQQFbZJfKzd252Ah3muxJ23rJLZq",
  "key27": "29mx1Vs37NXrV6NXVQL6Yf5WLqztUECvetVM2c2gAvFpNKcfgPsy3NhJ28RNV7syrwHzhrjytSTTdraKKTSFGjz4",
  "key28": "59oCuX9g6YAwKSZL7M1U3qY7Yp96J4Quua2LatRkavFinSkRmpW6C9xn8MRGmx5q1mZ1XsdKNzmDwq3oHr4S5bMQ",
  "key29": "4k2qicjJ3FgRwLHyqkW9zujiLaSVCHAViVfE9CtE8kMz3yZr5vfiAonFDtnJD3r34EbUuPyRuqpbMAPzsdaXfd9z",
  "key30": "5VFJkb1VFS723zjmf1Tg3VeeQ1CnCfCYVE4vFGGj8LftYkF1oXZBcEzjG2i2g7dcNcxapQrk63zdBp6tvRjABWEq",
  "key31": "5KwxR48LLFm347xYn8tSqWYhKwbUG8y4H1fNLxvRGEVsfCu1u4vPzLDKTii3iaoNZtAVosEo7z9F27Fogwyw1cXC",
  "key32": "3yNAR7kHHoqEqi7dRSXhpQUqvowKQVM1Yb2nyi2Kz5rbLmmvoy52Nzx39nwLReuF2xmskd2vb2HZem5TXY7D4otY",
  "key33": "2LazERs6WfAz9YaYj24fgFyS1ZC8nZrk3t81K7kbpfFrNYtyWzxnP4ytjPWRUmGjiSbTnfDUcMYFg7ZbyYDfrGYM",
  "key34": "34bjdiYvZJug1pR9RW29d5uHRPn8D7jNzH4vpw8imnGcxmDVxNy59hXXAfUxWk9QKLJLY3SQyrbECL2dEtD8Ldur",
  "key35": "4c7W9bdfw9AiXSYVBVZsQ3QEnt9K4fw1xFVJ2frYPtxokitDgBacZVA5QbsRnpAg5FMhCJo5snJV539qiUCxffzt",
  "key36": "55f1inK1GdzxPkq7AkcAeKJBRjRktK8g6Ecc9TwX1WGAMSsGCo5s9iz7RcMd99q3WTw6yvY8uiozSQUffJyh5nhb",
  "key37": "2YzTQcg62x3oQDBJ8X27HZDVP1DXtRUUFVKMrjFpbB8imybuD2T8ow6gd5qunbGFfVj2VqpfLGWH2Brdeac7bBJW",
  "key38": "57ErSuUxaWsK6MDejypwvh5Y9AYUTubbCk6c8eXx4Qq1uETfhtZikzzPMe2h2qR7PGENuWCvUNz2dRbh7We95Q1q",
  "key39": "3FukMLuakZjaKowWJMbDYFy4KmeAd7izeNoMJCUkBL8yQ8q7ujLB8eHDJNKhkQnsRcqE6LXbWzA8BLbvJ3txTovo",
  "key40": "3GFoserdtWJJfy93v1awQyaermM5kJSwkGWGJSRgC9QAs1rybfi4Bapk5EMwYD9ijTVRS4K2iSBfVrLMZvDG2S53",
  "key41": "PjsxxUWrzFzVb4C2Ygpwu4Yjt8DNF2zt9dnYsVLNXn3yU7MB7XvKbvJp6QeFd19K5c8wGsJGt6zqZJmSLQjgCUk",
  "key42": "2ByZQA8s9h4yaPsG8qUNnECzkbNk5MydDFT6TDC6bvf5MPrS6NSFQLKQy73TMg3GLhnu8jjbZcxCQFsBzLmWCsAC",
  "key43": "2tbusFfnTzXBvmCX6Q7r39kB5upSmiXdtY7Sy9S4S3MAEJRF32NquSKtmP78yUgDnYz4PC4y11N77TCD7sdK9Khb"
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
