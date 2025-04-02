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
    "Gbe1KQSLRf9bp84FDX5An4zVyNc4fDFNfhtohQpco4dUZj54o1S1bU9tLGWuN32BRz3K84TM5F3vsTfjMgihEas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wj3F2x65D6Y4JqsxCUfbYx5Fn38FUf3RUhwKnzBnYK49bSegsJWBqqZdaEDJ3zrexK93VwAf6c7k24mkVURdASE",
  "key1": "4EKQZrsrvQuZeviwLrgd4U287w28xNzdorViXJRr3pmAbuE4kbBFLg3Fcbqo4NJmbCjvcUpH7UhKkqg69Pgb9zya",
  "key2": "5NwGQLwj5kTJYtTBCcyznHqAhNEJf3V62VpMq4zYCdJ1G7xXkxmDeUiJfKqsv7QJgfnzCkfmuBa6q6Yut4PVBeqk",
  "key3": "iPiuYVEz94CMZcb7QSu2Tm1GuoK5UUwkqrzcQXJzyFTtEBmaUG4bnAnL9uCa8gz783Dn5DuLZ6eYNbThAa1kjBn",
  "key4": "6DFYK65QUzcjn8fWELJRbpfTo1n8paorjj9sHE4vTdqVday2ZaoYQ2w5h3behh2vKvNmEFz1JP4vwaD2BYeqzXE",
  "key5": "5BqbnJ23z3cDjHSYje3jduQBtZYpo6f3AYKTNG8uN6Hus8icAyQzVNZK3PNxiye5SadK921sHwfVfQurXHn15BUa",
  "key6": "5iaqPqbMGhPAi7oPwdNTxVy3eirZ8R1C37jHMTqobmaTMnHpbsiAz1gVjT5GteZnjc3SQJ8biXZGjLniRLZ1PKkD",
  "key7": "3XXUqYpNu7ZCSrWboKZ74hLHzJpMCbrgJUz8QGfvxBc3W9zYMYQjMTZqf91KwhxXZdqE2FNuyzdKC436wvqXVwp1",
  "key8": "zxoSB8QwgQmREezw2sstS4xuWjPr7BoV4jiLpjjKS2V4ftJoQ5Ex1fCLdvikRmM5hvPv7d1PP2AKHi4tCSZ8SBQ",
  "key9": "2gYeBmoeUf9T8phvvz4jZ5xvt9KSTdzk6BbY9y8Nv4T177H4K3DieJYX5kK7xFhKQ7s9NUBvxbfh1TD1wJckoMZ1",
  "key10": "5SiA6fh7hAtDPHA2FrHKQy7fuh7AL5WPHeCy7KWn8zres43VvRGZNdYQYuQfnDJm2P3SD5QQVqfihJyGwi9idfFE",
  "key11": "31XTLafyotJisNyXiN33GBaLkjiBT2ze2CYanHBhoKu7VZSFSBz33ZyaFNqTECYxAwMzm7AfgfkFTP7f2i85G9n3",
  "key12": "4zk4knVrqHJE7RXMxazyiHLTybKBanjey8qESoHEb6QydaY3u4cqMTLBFzqYwBL1TdszEcGHbq8ysHhZKmmynYGH",
  "key13": "RZEo6r4aAgAfX1G69CA7GBpspzX6ao9sTpWZLC4mxzERLibU64RamN5B3BCHrsaeEc83w588U5MVdWEt1qZzCMN",
  "key14": "3Cs5e2mAqvxTx7tGjdootUTRw7tEBrkdF1jvSovaumu5WiZJHAfYL7zNDUrknzeGoKeRYz9M6zFTjBYNNvihHF2M",
  "key15": "3v1vsjUkYYmxgkWCMZARHdZEqEwU7sxYx8ZDsqTWS6FN25cSTtGg2NwjXyyT1nhtAZzwQnQwKuJz2ciZFfkgFa3t",
  "key16": "2Udrm82pwG8RKwgf4JK6iWdrgK7dseiq1jhpiLvmZeq3kBECFJfeh7NmBLSqj3hBP6N3MyWaJtfykmnKVRPRnGRh",
  "key17": "23K45RbFvKM7L3wjEL4hFEF9m5kp5Q29Gevsr34HZPqPkxNCPCAFvVXmwcxZ2XWKdpNDzN7quodzUwoHfmDLgEXb",
  "key18": "5BjjkMbBwZN2j3GhntFbghoenLnfehKXMunCvS1Jk61meNHGvxVxVFfHyvrdb8uHPkFn6rimR3BuA6M4Ym4GuDxR",
  "key19": "QsM9WiS2h6fr7eNBnt2VxrB23tSQLQ4RBmZEp1WQvTzF2umoLQXihw2rXPEmRbGTnsRrj9NELu93GtpkKYPGJPu",
  "key20": "kTzoMyFNBqymiZE44hsebDR9Zku7vo82pMFbuycwa5Ah3zUif5TbK581AZwjKsXBLVQjrJ9aSG4aTnxWCoynqqf",
  "key21": "5hgDSesoqNRHyK9SSdqqBP8bXrLakN5pV4eAWidRFmJVGaLBxMtjqHMUdtxeRUTqetqmtQMnyqJEkSkhqEerZcBW",
  "key22": "3NvVDuFqDqpfA47ExFBQLSuU1Y6QeHSXPRKS8MpdvreqPySpVTiypgquXjvPfSceLCASx9XgQJELvVCdp4y1c7t4",
  "key23": "2aoVQ1WwCNAWey3MozSBm5too3eC3PVcC2rJaqXHFeunUgPhfJ4EUFayuSeyKc9qRyfXXoPyhYuppZBSJGtK63WT",
  "key24": "2Cm5d3cBTKsNmuPrGQyFKGFRGrpUTdVnyKEdQMfoqmVgoknebvc8tLih7mDQhXH1noC1saqSHsUciEa7czyTVKZz",
  "key25": "5HcLMyVt2165f5X5TS63xgjgoQkKcwjVbgR1LATfZPwdJyzQ48HFUY2i48zzqLBxhtj4M3HStxB4w66CcPYGsazj",
  "key26": "3Np17JsxPiEYbdVsWbLEU1ys7BYqyDvKWeAPLkNuamfudQVUsSa5chcnpgx3s2ttsLqqMsw6zESwQNir1apNg9EC",
  "key27": "2ybRuq4oLFcevKdnNeCKhcw2wcPdUZbKQGxzMREXkHEVB3tRZbZXdHMSn8vs2VWhsTkVAcTPu5iAY1bPGzkxf1G2",
  "key28": "3UUF83Pu4VZggAGACuUnVasobNkrubpjqH6uUYeLPNwoEwoYVu1RXBU2LQmNXqHQkdLsQWgovgmTpCxsWKswNcu9",
  "key29": "63hPVvgajKvMe7mhjoVsS8dVDmBfPbDyeq2ggcKNhK2sRkqZuz7AxHpKs4StmJcTkbPoAtXGHLs1vqDgVzZax5jQ",
  "key30": "4Aya4kF1wLAEKvBuKDS58dkiUXpLKKq4aDkwSz8GbyYTWroLZb4fcA2qHGV7YAgH7yBigk5ygTKjm4GEJ5LZbSjK",
  "key31": "2g87vqRFFD9RrihhCHP8sEcfnPSya8vFy1doY7TtPUkmAb69btwSCtvrzpsKtiTT6s11CVNXBQqx61o5FvZkZxSf",
  "key32": "4oUvKk9SKouGHqSQgDPr6aUF48hPQonoEU8mbnWWCEwmz6sBjjWX8RubJgtm4bP6TZJV4wevMKjh7G5TxQ335HN9",
  "key33": "kGcVu4qBSJXjuBKiUB4R5jTh2PH8Fag757FFbJkM5gkiyMaQMb4ptF5kNGVPmoSPN57TT3JTpK4aPSDdN2CumrS",
  "key34": "4D2D2tVb6vxSdQTB5LSWvSSY5uagrHfHzrAPBxyqmFv8tFjkR2sSjDhbJb5HNifGtQhVa7LUS37F3WomaodJPtzq"
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
