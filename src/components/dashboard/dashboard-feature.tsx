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
    "CxdJoEg7Eu6kQcY8r8k6v2gNFuVLe2oyNPLGBxYDqN2hMxKuzyeamzoEwkSjzLNx5eQxrEBvTu8UVYu6GbFeHpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPyWezWcdEJ6aiFyaP5Wbwt2LJCz1aU4iZYyruG5iEf8W2ouArmCMU4TwGGJvfG4FYM6UpVpYBaqT4RJGdLmAN4",
  "key1": "3g28yqbFMCPuaLr7AYW2KPg5F9d96rLSoBJLoqeiWF7GMG9qFmx2n6AAk8xHfm16sN5TdfgHRekM9Hfh5TrM9g6W",
  "key2": "3QVRwtxYaepxPWumqxKXFsFFGNp7U6Z7smAxykorQQNzihLrVdfuheyfatHt3jasrC4xgiJvWq8fMjNmnDonZLB8",
  "key3": "qjFhFVSjTJtoinNfvv3RUmRYaZpVJNdT38eEgDkRytqnxK1zS6vjXuGnSBepPGHG4yExiAhFsGVjax4JibYviJq",
  "key4": "4htoo1TgHD787FKavzCxuxw1jpt9sZBEx8gkKTvjCYnJRCjMuyMQNpVdGpLkBxwZj6F85SeTeKLb6V6oydWmpep9",
  "key5": "8AucP2a4KEpX5vhDd1xk7ncFmyzoawWY3cftaSpBBVtLTytz1Um5B7oCnq2hV5nRkW61EffuHSu9LjsmDfz1Bf8",
  "key6": "nHCAeRwLcShGvQ6Zbuz2MuzJGP74CMJfBFroYDoP5eg7S58bB97SJKwqkDb9H4YfkWzH2iB2jrNwejKdNbftRzV",
  "key7": "4VeWbH94aEXw2LHU8FRgA2Uq1NEU8qhwcRwGayBenfcQT2t2YcRoRVi9wyows7gPaJ6C4Gwti3AMYJSqdBWztXZ3",
  "key8": "3pdebgrw6kkthckSAwjmBd4Ruj6LFGdNGANV7weiozAkELcGFQxtBc7mrLUH4CvdAM4iiJ8QaRPkHvTR6X4fvGdt",
  "key9": "3FbbpWyTZtJrNRkz1VsFKZrHomAw9tJ7WgRCTCm8sgZRym3UzKame8WD8X4HWUg6aXHhmL83ZxNkJT4Te96jhGqH",
  "key10": "2JNPozcBwNow5WreaSFf4LCGYbMxhesRAudFQXmzJpT8mfo5TL1XCWwH6xU3swJMWxfwBs786sPCBpAZFKHP2FBM",
  "key11": "2oyXRcbct9ox3eYtk86uzdEJWRzYrx977wY6xVoUEkBnYkd7kjLo9JY1BG1zqZifE3KNJCD3DidK127KYCfeVh9f",
  "key12": "d8FqSywWEsu6ng2rEAWzsVze5yoeVKoHhpT5aZM6A78GkydQMyisfncHsHVEiwjQHdZhq9F3adSaRBDjoVNpc7p",
  "key13": "4f5mB84kXBjcZpWLV4mfuY7buL2irRrgrq9xEUuv9adTJXzTxGdTTFoYgV4gtsxUnSYEHsAifbnQAGrJAWqPgcEv",
  "key14": "3UzSDsWBZwkxhb7UR5MVxoJDVQxpYEn9tQuitzSS9C3di3wosQuMiakG8AyGtPG98YakwQw9GH2ApUBZeXgAJcR2",
  "key15": "3GJhqEqjUaFVqJPb1RdUYZFLannNfEKe5H7scPmQsKv7N26JHpNGfa3ReVTB1XYYMiwKhSShdnXeLVUTsaSY3bqi",
  "key16": "2BQwEU7Q7ytpCgSoAgUqEiGnVq4pybbBJKYeBxy5m8kn2A3Kice2SemrZcBuWnwYnTnbN7Q2KcC3s3yNvMKQxGNS",
  "key17": "2JfkELBQdwwesQQLBeRTw3NMvAdwz8XNQ1iSMumTLY6XFkg322pLBEfcBo5bGjg4PCsTj1xtU4tnPVx21JFjGa9y",
  "key18": "49LuXbmBeJBLTcopCSgjy5bfPXJuBn8ABxLthsFRbCU3hVe8irQa9j5biJy1AmUCfVA6WcR91LQzHR1nutZe3yJe",
  "key19": "fiZaeHwSYLZJZNgV41acTJQ6SAACpRxstr6zWmchBkcavMw7RDBXBWAivc8D1pTup6xiZT3eVzMFAhD6KTznyB4",
  "key20": "w8TXVi9f7hhK59Ee3497DMUkJbMYRXMLo6BNTDaXK3HuJbJvoZkoSyd6aC2MLs3jKzy86x2GYYWtasKcLnfTAT3",
  "key21": "3oZbxpMP877K9gmqYJHfG75DyyU59965GScSpsEVL64ZVDM7GBtSSqV3Y3MuLwRMgH8tg1FBPeEYeMf7dPQ2A4gC",
  "key22": "2zbeWnjPN7Gso4pvBayCKkZWABVEvpebbt49wCbV8JafcmtBX3ftiTHaucTMBr6HJZCwL3gHag6iifCfKzeMmT1S",
  "key23": "2SqP7nQYBCUkeY9xsmbgPWUvVg6H2WekJwQYVcQ7ayRaoRs6pBHYhb72JMj8jkZ1CvXFutrCUsmJzrHwxHhDqJCE",
  "key24": "5ARsfo8bP87GDeK4fpbYvRbb8g5x53NvzvczZKSFScMAYAMc9HjEmA87qgn9K5NtCpmrFaVCsykpQ3tYyXew3a8h",
  "key25": "3wNe8CA1AKM5C1bBFpacQDvwFxj7WGURvjnpynkor1Qq3k6ehZSz2Um6fd7bh8mUGbnRpj5wGhLbw4tip6thwc82",
  "key26": "4d3Azt1FH9NMfWcKs7uuZYuLAQ4CH8e1QKqPoYZ8kqDGandXjYao4pMXjj5ibd42Ro1YouyWrMS1o1edTqYKYRUB",
  "key27": "4zRKdBg5ZJ3x2W24SW7DyDY4AJTQbQFcHdZ3PAR7xwi9aJJrrviHB1ZDhhPg1KdD5sZDfJj8GrXdiVUsqgTh5EhX",
  "key28": "NAosrMyDC4eWk4yPUoA729WVoNYTBwLWyhf5bk21yMbSoYwK38Kv1zKEpNdnKuovEzLFSNifD4tRvirHQafHm3k",
  "key29": "rxyojDuPURVodNuUjijowupujmBXKyTRnxc34D1G9i1QiueBvNgTtejuGkUfK6HaUHeMQcjAxYJMf9HtcpVYtxn",
  "key30": "361WqMKfafCiGeP13DcLdWEM2cqWjKFFMwZcVhc6buQFz2N63hCYcDB8UfSDe9FcTgfdxV1fjbLucQVBjs6HveyK",
  "key31": "2drSaYQiaaYGN94k98FQUCZjKTteWFAvqcVT2kP2orU7WRjMQAuF5nuQNQs4u7yH2P27tBXs8rX7aR127HfxWZWR",
  "key32": "4h1FsTSQrTopvUtohPV9WUfDX5ftMQwGbtf8YwnyefLZbxuzhVzHvx1HbUdXZyNae9tSAXnvuAtnvnsXVJxcdSZ7",
  "key33": "5qxqcoKNCz2tZoZvmRdfEH7pjhJk8SYLJMiAj68VAUPCq3txbLwpfi8HfJc6AFPUBJBjnjRiJBEyiNVSwuStWATh",
  "key34": "4NyFDVXZa8pWKaFyB1aFnQ6ybk6doZC6bCgUrjssMbXjfph67uQ5LKefk6Qvqbz7AeQyHnJfJczLvA1SGgToPWzb",
  "key35": "2Te7ZNr5U8tWaRq6gmYpnq9pii1VQmuGKom4JWWmuCJTF2wW5oFwHbphXMPUbbzZ2yXy1KQCCjGm5EhSPuafm6nH",
  "key36": "gs54YWeN8A6xzusV8XmmHfjN19gMf6ivCJFKdCLaysqkypVqn9MtFdxexHyg6mCWG4dhbtXdSPuPntSU3hZ2mJY",
  "key37": "pXGY5SkS6RkW5jkWc1vFkRkzdURtoVdqGHKL97K3D4CWtwZHycHSqtVssaYpksrqzPy2h8dysjWpeoocHgG6h4r",
  "key38": "6nAgJJcWjpTvFBTFWDxkA7g7tY1tWN8JUNkrhq86LngXgivKbbCa9xmZ1pwQmqFamcPudkGKCu11HgBpHvkd1pQ",
  "key39": "2XJvkRBZGYbkcirvTtUR9AqH9pNUDWpUQMhNDsX3bSqjJ5d3KYToHLdAeJ5eREYnq1fnyH1j8mH88Qav3NS19c1R"
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
