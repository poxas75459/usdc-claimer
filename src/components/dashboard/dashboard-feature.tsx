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
    "556r1cMea23QdRisWETJr6s8duoB5SVAAZT9xdFGm21cHLsjYyEMPvA2yhQWrrkrQYR7icb9J8PkV86vwWs794i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSHc8smNngHCKhFqPp2QNjVhAPpuUW7snvLFEArm2cs6FGVBsRwogEKhvjCHqCDZtg4MUcN9Vci8pPWzDFv37T6",
  "key1": "43dhKPnbmaB1qtHJVk5HGrtW6tBNjK6J3e8yCwwHv3mCdjf4ryPWLSYQhNAFTAvjna6DYQ59vNoNkYjqStBfbq4r",
  "key2": "4yzsg9gV7qBVZPJEe2Kk4FFq9LEgfKxBTKtoTV1J6KKJXF49Fd26NJMYAoq8T3PxncSwzvAgkLfFWx4w65rdX8KG",
  "key3": "3FrDJdpdg2ZhLg8icEXBZP6jYZuh2J37drLgDrfLoz3yNRUdCnpe9u7YHN7nj5pY2hzk6s1fDu6jfNLa7bpCuL9V",
  "key4": "4cR7GPNpAB7k9v7rwaExCtH84yA6rYjxhG5WrBbwcSjV5kJGVF5MBxCB7Vt6qieNtncvaXTF6hYtEfhYppJmWxuT",
  "key5": "2WnTURrjsCLzSPNR8G8Ssje1czz5XeDd5ah6sjNeJfNK77tJTdBi9XsZCqdjuowf5MYu5bGhm6mnsycYbTCLup99",
  "key6": "4V1anWMhdd3e18SFb1bt7Xqr5zT7XuxWasGpXsyNj3C2V1W7VEs3TygH4dFE3DfsxcVucffphJ32hbbPBeP6pMMC",
  "key7": "LuUtpYnopwcTgS5uVAYJDNxeVESKiWj5AszRxy77wSBE9KFcvMgZtkWqnpbe5iH1sCbT89HjPamU2i4BvfWHdKE",
  "key8": "2MsZtRQPZk7ZPDEvmSDYcL1o2n4QoGu83YVPfJHzhDa13H83oU9B1GYwsiPkcDouv9SoU1hZ67qBUtZeYHktPmxD",
  "key9": "zb8tNHgaSU7vqWjgZLPpcYMEKC4mrxk1SsH7BE4JQyRzvghFkD4d14UG2wH9y2zdF39YCeEgTtmopUYbiiAixxe",
  "key10": "3AXXqaSqPoXnSQKVPG9juxfZFMyTU9XchQpDN3btncvhQjDeS76LL75UoHep7uWmj3bDBVVB7UZYgTwKHp4RyQvG",
  "key11": "4brmAaFJzLx6mSdCLMEwcyqLJirALg4wQuPJitFpuKiR79SYoEwim2umuLkVVD7F8yzVPkuEyySpvBYKBtGoQXdU",
  "key12": "3QxNXH6VPeP2pxcXxKwUekHSSxbsUy2NDrpqSBZn9gdu2J2PfQhwEeMr5wii7cT3TfktR5AqtZoQyMb83zdqUCNr",
  "key13": "vS9hdWr3TL4qwbtM6biBMDxeDCJ4GWH5nRpAQLVWgN25MU3Zet2Xv9NaebYFYpno4w6t9Z8QgBHQd4p1RKVBVt7",
  "key14": "3T7mGpAD8h1LQ2hKBrEKJAgfA9B2LcLhEutUCKL3edjnwR525i9QVT7JSUs79spydzUhLGbnW38g6TSVJWv58bzR",
  "key15": "4CDkdtUYoYtAyoZu5guTukJP9SWLCC7WqhGwG6VAiUVh86JP7Ys2cTbBKrGQYr2KBnRuuz2M8NEFUH8M2AwYTRoq",
  "key16": "4viVvW4V3wYvT3j1m7d9Ug4J6CsKRtZp8uoVjxQWS2TNEFSJ7Mh2jJbCN43U8irY8FkMS6SgYeFLTpa292HJu9eo",
  "key17": "3wgfo17L7nk2XKqbrkx3LExtJn6HgSTjwgV7dyywboiBF2aMxBojyzHTKkUHzic2uWomiAdStGdEhTk8AYUx78KP",
  "key18": "LFF7PvdJPbbL3bdMEK5yv15eiJvnN6yDe86igVPhcjwmD6KndrQyXd2EtueVTTUy48ZXfgrNNjT7bUYLRnqLe5B",
  "key19": "49isLuN6bNmtstcmt6GxUbQ5LgAoJB43SUPo4jgtddg3agm9gvTY3RHJDKw54T3TiLkXRJujKgCrkvz66KeJAeFk",
  "key20": "33nWNjY8SDiKUvKCpM9sf3dWiopaTCxupxHboTTzQrnAosbzK8f98FUhN9GBiT5EZWZaSep5z8KRXBHFtEV4rKsf",
  "key21": "5j73A1yd2L5jcra6a1jF2RwUvJyY19M9qyvoawNf8EdfEVMWbGEHiKM724dus4He9W76zDo5481CbN2q83np1Kak",
  "key22": "56RrBB5YDsaak8y4rbQzbaLsMSyHzNReoPWkzKbtosAezPt2vZJQggtcA24Fp9S9wf7HYq78cMRdhHtRqiLnjauv",
  "key23": "3GoZg73fDooWZ4aTjBeUeDndq46MTmYm8YPUomKBsogZMRW2CeBDNbBRb3NYV37WpuUGF33q585YXEq7tmfNXWRu",
  "key24": "59jybhi8tG1SLNqR5havn3ESsLod38pwLm2bGwwUMxaVrbSL7KwLyS86yTLjVvV21NoN6L1fsKmcHVpaE2UNPvS3",
  "key25": "4Jtu5E7uVLsqgCuytoy1iKqgZzjM8S558Qu7Qb35hbioYg1ynsz4t9a9DsVXTKGZcNhcR3cEWEU2H5bctx99DcD1",
  "key26": "3AB4EVCrDeSvV8Sr6tG2sxLdvgFnpdMgXhBfh4KmEfLBHYeNyy3saAmwTWwBgfDWFwWvQPba8StEhfaSNCsPMLuh",
  "key27": "5LuVa2MyKBQF73LWRG4XtB1T4RpjgwNvSMda5qb9JroAPo8T7vNnD82u4qH7AGvyvb7WfKNsA8NxN3FqcwkomA1T",
  "key28": "4KhKmP7SixhpSjDDUz2U8VkVjxv7b5axibLAW9Xv2n9rz7bJJ824gC6uDhwq8rAwnJE8isDvYqexZNpciVWCwxfR",
  "key29": "3MShrvaMzKYsCwiescjMwdvSE7dBp4FsdqdxsDhKYfEX5e7h21t49nMRSCNjMEfttYJnYmW4KTEFzTzx8xSfGXhv",
  "key30": "TydUgjFgNob31YmKa9hkXxwjPqAfmtvVKeCYTTJ9xw5QKbDynKc7Wtt86w7wauLhEfkcicUddTZXSzpcSrmHMd1",
  "key31": "2rT3XGeBLPuPM2EqshJajDdFdQQoKcgSgNsaVn15PAAi25T7UuuuRQ9rjZ4RiBZLHM2Fa5qTRtL3FXLxZtigE3QK",
  "key32": "2ZEoo2uJhQUop2pihse44PDAEfQMRLmyN3zWk1U2qLJbB37DBimX3fNQLkMgBt6DDqUBadbJXsn2KFURfhSgcwtB",
  "key33": "3UCMPevvcJCD9yGHevtKDKMiSbQPcLiVC8QDb3K58zLmpszkqiAD4dqx2JVZLAtsUoe9VXy4tWpCiBEPE5fZFh4v"
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
