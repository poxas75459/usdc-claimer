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
    "QoCjhYNuZDzYfATGoSic2V1kL3YBWrK9XR8Y8Er2GZ5JiAbEvSnbv9sm1Qo7nSW1ivXZmJxjPhXVrS8xChZkD8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h5D8ryyDJL4bshWTRkQJikv1cXPcArJBBFh7gbfpUgfhvE5otWSqZ1K1Uv462i5WZ5xbD3xduzxNXBerewiuPQE",
  "key1": "2GBHT8tZ2jz1qTYepEG9dueRokZCL38TroHo9b15CYAVcWBANeKXbVNJVSjnLuZfupSR8KCCgp6onRqw81sp5tog",
  "key2": "5PLHHF3mMdxJ7ksf8qgiKrc3sR4zGegmD4ZeYK4L3hkfLxf7chdyGcDiFvfj6rq3uDFKEw7keYh76MufnwGUC3jU",
  "key3": "4WVUDYxiBZYBvS7XRxEorFWmY4BPUKx6nUBpn33cGRrDCYCiXpqn9T8iiHPjqN2MnfoTqgPbctYiRP38w7mCG7ks",
  "key4": "wBDWrjKLEWkTczQiTFNapMNAFviiRtuJmHpazRbwNkxMRUkK8ZHpBdhT3vMMm3nH7cTrmr3gEojTcUdrL7aArBr",
  "key5": "2g25diKpEzJUsVes4T9qb1AFAqGiM54SEn7cqMtoCVggKokdE4nPgCBJaDqudFz9d99NbDGGqQTjQQJYK1Kgre9R",
  "key6": "5j4y4otAb85EDRz4Erf1rbvSAxKnwHSj7LdDczCkLYp4B4igXGxwQZezj1MsTmFczxxymZYUCMkbqaM8aSCrYsDd",
  "key7": "4NKaS7hUTdp7uKejE3mZhaDaaqDija5AAmykfiThnSnbteHnucfqP64GKNgM7Mr5bnnmcpQnnNMFmJ1WuH5LDLwB",
  "key8": "2ZronmKSn1Zw1VXrMLTdm9oqNgZEHvRaPHZaeoipikPghraqaFu1dR1M6gygU7ty7A7eVSMLJbjxk22sjuJ9yLqG",
  "key9": "3tzh8n6MCm6rN5YXzgDck6HY6XCT7HwDzHKsRdXPMMACWVH53GNp8MiQnaTho4LECuCN29a4UULbSjNdgSVhE5X9",
  "key10": "yjiBaFzSsu3pLiTEq9Lt6MNAe9mnmf224xr1FZcgseXE631A9wjY5ySQMsUWYUSKXC38xSrjTeoyKVQGYhpXKzj",
  "key11": "37tZEfKp7tm34i5s88RXTcuJRwvo6LWUM5kVe48YYbX7fJfHVw4YPN4KhBjxZxHiAe4VistPpCmTao8nnaMQq2QM",
  "key12": "3JLeeUSWZAMaz5p98DGD11NDLuPWoPN5tjAShnoQRyqCjyHTxhT1w36VhU57bA77G3ic4rukEMC9hv5SvTPj5AhC",
  "key13": "4L9ttnp7q7QC5XcA1qbuBSFtRaBRkwaZjTD6V1ZzChY7tnP3H4p29JoNnYEQDdYKBBuBACsgFQ8gSKuHzC3KgV6C",
  "key14": "42XjJ6Je6fcYvePB8fZByU4fjY1iKBjuxGGWhtwkW3tiYrjS2npqtSJwNQrf3QJrMMa2VYxoWpDc51At5Aw28Wqc",
  "key15": "3F4iiS32q3UAtp97HPV4SM3C2ZEADqFa5TKKyYf64ShHzXp3F1Pb6GXBdV3dTjr2rQbzuB9bmCBEMUR6o5z2BydF",
  "key16": "2UPZpdLTGKJMjmHXNW8ZLt6MG859QtgpnYgeYKuQBCsDaM9krGKy4Wsih8PnkH12DQbcaZNbk3dGM9HXgndmgQLj",
  "key17": "2PKTnJ7M77tACrGEFaTHVMB5ThPq5QW2ZKeaErYTJ5aK4wv8Wc1ZWAqSQBkf4Gv9E2PLcJUNN6AUrtjFAQRJu2Nt",
  "key18": "5iBXMuinGvKd3HD8dhgq4H5C7QCuwmo6HYswwg79jNcNVaK3kJf4HNmf11tZ35BCkPyijdtibZJzT3dxRFfjqiNq",
  "key19": "43UdRvYNMmckqqaYd2qAFRKGQXLSCmx1uiCv16YwAPNUyrdv8FZrBZoy4smiP7jxdxQrTKuUXynMy9Kt5Q7rzZcV",
  "key20": "2AxiJ6cYbe8qnj4b9hAtEfy9gd7myax8xcDmfEg8QfhzZHsZwFa6MLMVdjx6jyMHBoEVMxHNAeVZJCejiN4B4PPM",
  "key21": "CTaY4gsW5k1VjZJ1BYnwjmaN5MtbWbXVmmoJ4YhfrKjaPkfntm56o8hjdLp6wVmTYQzdZ897RbYHjQNtLjE2Lqx",
  "key22": "4Rzzr52jsB6ovrheEDE34mkWmwrk91dLBpJfsMjjWSShzUYQmWBBcF9tJ558kbv9TWsN2bvLQVS7LtFuUCFyABn6",
  "key23": "3c4hTB2dM5Dr7qggD1kvbBJwRzgS3nvLzWnbAwjup9pgsLLPC5TVbT4TAcghe7N4AqZo6a6gkoRsHmR7vu11BBJb",
  "key24": "5p7TrofxpcvRMjGx2HCy2evZftpSj8eXuutqUWYnsSjS1i7aByCW41VEv5RhRDkh86wHoFUgTLiXUeZWHSYTMC2C",
  "key25": "7BXFctNLLBu7xxzMcvVviaVcHTUs7TjNgr8uqaxzeoDLXpYr3vkMkBe5DAH3BJKEe1RA5CefGiTavrsPZoPefRh",
  "key26": "2XBHc6nqdwqkASgqTMQoRju3QvR7hRP5C4BK65bHSDoJT9zoaitHqgDJxcZbaKJxkmumdrCLFFnceQ7RLaHK1hn6",
  "key27": "56JEs7VP4VUbKDyyCctYqysZzp81JBsY2Uh6mcQ8EmbpNcx7BSyYFh8JxqY9vu5zFsrg5JsaLp8BbepfLbNWpqRZ",
  "key28": "5h8soGv7UWz1nFazCkzd6acnUSCEXt1f4B8ebMUFQpF4wABJbis39nXHHYfFDyftzboj2bqH4FuSecEvGSrGeQDk",
  "key29": "b4uEUA3TTtK5e3dLbi9uD2LU1e4SS9A2Mu1ncAmv6WaAATHHSYrYmM9cT8WyLmxdcasgnanTr1gnv6qJaW4HFjR",
  "key30": "2f58fiAxYh3JeXdTd9JnGJpzhEP2RV7y7U5vYkZaN8qviswnUFFEwDnVVATkwTToz85YiMb4hTv5ve99Vj3sjVh4",
  "key31": "3a7Ca7vwsGy7WHEHdQhbX7VaX83Sj5abhBJKV9mHRvRZf5ASXcqeBuZRyhenPWEpcm6JZQNS5en3uGzustU8zH5P",
  "key32": "3nZfbo8G4mU5bcmw2A2ct1S4enMaXfhZkdST84nCLMuGarRYco6wSSc2SmbtBqypahFofGFmm4hJFvpPcWcUs46T",
  "key33": "22qwTi6S62LvB5vuAgLokbD9scPHch7DBwxKDwnCPMpW2VL4Z4RywyKkicLgCDp3oYLuG97qjDVKe4UtYfqeh2Nb",
  "key34": "3JWETGfDz7APWh3MrDm91AJGxHuRZWEXtxvZP55afdyUzQvoVXsLbCgdhxqWcMTs7hUsV1GT8enCK9wUipr1exSK",
  "key35": "4qpzwA1zJSXMTPKSw1iM1c3c2R52rCqMkCTVJGkRtYW9x5TTJ8whSYRh4LPpvbqTSrz87K5suFnkQdznWsLXKJ5E",
  "key36": "35xiagoE6MBUg7MPLQHafzfEcHd6NJfDb62EFnCsjEqxdWA4fhYXJBge1u2np5SVJLNzyte6QdYNRhFf5LuUnaDS",
  "key37": "3e3WHLC6CmoyXKM3zpwx9UJ18FmP2AK7pp4sJC8fgzzY4VGQ7cacqSwqkzk3h4yG1ZytgNort2azwcxweLsghQgm",
  "key38": "64mhRuEm6nvbTGJNzJTRZ37QpwYW7wjFMmcQEnhrmpEpGUSSRGGWQ9g2pq8zZ3YGpQtLkxdYz41dj2FoURZGwRH2",
  "key39": "fhnpXF6QQhLbfXXnPvgYnGmY6RqKoRsV8L7aUiShP2Q1wBd3pjYG47M6cXK4vAC8cVxEyYDiPo6Pg7gYA683iXQ",
  "key40": "uGeT5VaNH2rjHh6SvhpCw96HvxJF9mk3XxVPpfU3yn1kh9ZR2x6KD15BFSfXJVqzXFTawf8kBk8FvZJ7PG8yq7e",
  "key41": "4iTt4Kud66PxQYPfRCfb2TrXghAL3pXdu5L7gYNfTRSX5Mc4i2PBxED9FkGhKJFs933NEUhu1hxCuzT57pG8L981",
  "key42": "3KWwJ9o31PHt3bNMsjdokUiNcuZzxM3kEniVaprjqSqZ12fqHyaV6DV8a1FK7sVQ53zDhBto3qqvyk4oFhmMrm8i",
  "key43": "2dP1bYEWJFeRvzQPGbPzUuqws5uYupDuytHaFHhByw28pm4Zv2TDbzQdGQgboAvqua3Q3dN8Azoy5CjZRXp1Yej6"
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
