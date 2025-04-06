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
    "XoMthRbXxbmTqxD2iy8MrctuHZCK9i4QzXptMzs3bfwvTKVH8BP73Uen3MjM6AFE3uDS52tWLjd6wQqLx7oDaXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tb3zPsEdAmFNdbA95xCRxfKhHWSo1o5SUosP17tttaFEfa9Yaiy3KyQh4dazVu8Kvckf9kjbKAQU8SDhFWNrNWH",
  "key1": "3nRBzE67b4jApyKHp6bMxX2Ez1FXDzdMDA5NVDQ2qKThCKuuxnKDoWMvgWy91ESvmqJCGFYAqqXFN554RZ34AJdP",
  "key2": "5j1rYFqBqpY91zqvk1QYwRiqxCBLxMi3jt2UGXBDnWX7G7qrZWuG9C3zoz71eJNEd1xXJbUX9zzvAArhJUy1X5x2",
  "key3": "253JLsSirJMMUYCDocASpgKVp3pRE7GKMcocRbHXqwnfo585QCUQBGUsHQzuD35puBmxDm11ykzxSp6XcAewRKop",
  "key4": "3ztzoErCKfTf8VkzkX7dvbRWoj6ukfSjBKtshqfFjGWQsAKFCaH3nc1NNmyjns5bRsZcc6Fo89QgU7YuZuNdeGae",
  "key5": "57vCxexLjXniahEK9PRqJyPnY18R1uWg6EhA5B2Db4tP868y8tyaEyTFGAU95zbeeKua4N5wiLRvcFDY89mk9y3m",
  "key6": "eWpAbaajWdGCXWVtBLEvRimB3TsN9nrMt2itj9o4bvpk3jPAAT16qG4CDLVozB8uUw9AbHhQ65d5NZEdjn2MKcu",
  "key7": "VFuWkoVQkegthLT2Z5HFUvB8aw4WXgCNJtdpspZAdZf6eK5emHch5f18FBr5CEZk2ryCka5moS9HPkSKHAKMPAM",
  "key8": "Rw9v4UVxFFPg83VCGD8CzttMgNgRA7sXZrLh3eyfdyQJASWgdyry3ponkTJ7Q56gedHe8VD4SCv3aBbXEUFhwra",
  "key9": "afYU6mz8vtNbWwJDWRFdA5H2nbVGHKZkcfGcJkP9xsXBng3xobVrPT76MKRm7kaEfpWEdSEqERr6XR1ccnipBQe",
  "key10": "4ES7goZRSMczn8CKXbeAGpUdR2FokudrHJE2aNRYAWxxfLiyTYEZjtWRUgybhZNKgK5EmszXND2xUJ1UR6BfZN8c",
  "key11": "9m6uRX5ENNMMjdCtEWsiykz7F75Ft7eiadWcxbLBbSriWwPpGmsSe4kUZdXim3xGxaMqYYpCjxcmogPPuafEBjG",
  "key12": "3NKZJ8j8uEEttg33kWbik6wcK3z2VtFEoBP9mUAVxQLnuSuJWkK4oSFWgU4y2jt6YT6AbuojwNBtFcfQckUFfD2C",
  "key13": "5vzeA5JdXjJzoNwhHp283Pmpk5fnc64ZYJS7GmBfupUa34dSdviZAiAgyo2RmWCMzvNSD442LJoSNgjCfw7Dv1XS",
  "key14": "4Kn5a585arBfSvRUudyaJURk5PzTESqUAVrmmaRg7jzMXhxiDdrndJdZiXyGq5CR9hf9z1PyFWo8j9xyu9sc8hw8",
  "key15": "5XynMJCXgudH79Zj3MtETduA86W8qZrqpYMKfTfPWCRbSh5kwiB545goDHMpwwGZgLq99FSXAhV8qpvjXDkf9j8V",
  "key16": "3n9ZEhyPaoEyg6QQqEPa96Pv2FojKgo9KoKzEJXdTkgLCcNHqoMQqybee1GFmCd9QBxYzynb8a4UXBQ19e6nayRB",
  "key17": "2SpzMMiXLYY8xRa4das5GjpaZi5u3MEy8YiHYUXQTxc7q6xYeepeCiZ34FhzssdTXeBr9gK8C66pDK4BPUmAcaUf",
  "key18": "2dD4c8EC46ooKX59ckNGHn2GRUT5zD5Fu1XiTVnx64PnWz7BStigtiL4qCMSnTW9b3yMUyuVe5AMHaDcWR6NtR8m",
  "key19": "V5e6uoQhRfkTaLvuoUFr3tjVAgx1Agd1DbLAraYbBjdySz6K6PPZML9X9kjkvXmqbQ8fwmc4UUctcP4k7mKFgSE",
  "key20": "4m8c1V6YQF722h7pYmieS7fKDwJxnyxYmcpeoK5W1ayrxyCQDaxzhucNHiDJn4RQ668sfMAHyGAPYg86gy38UTF2",
  "key21": "2HjXpXSZAE8ncXDbcRNNyxJ4AX1kX7ybe7ncctomS6PZMz77ufto2WGs2rzngB8Jib6EAd7p6cgrixoSeHYec2AJ",
  "key22": "2WvHcCeKsH4EPNZTGYeP7HT7bi5yh3TKaNJuiwi2sno6dE7JkcUfAkNDBX5BFZGChY2ugdv17obmibR1hAfabHoQ",
  "key23": "2xjDrH99EmwF5e9HnsL2X1Zmj9Wewihh45kz7xjWLaiv7z5hXKVnwvGAj9NWyXEVDUgjwvsftScSLT46BDd3nigF",
  "key24": "2mBetosbV3A6Sq3cVJ3YWZ3MMFxkyqtDamJNMgksswWbY1zxmEt3rEabe39FpycjgmfnaA9gJRQcUCQNrAHTAC6g",
  "key25": "36v9W7FXnxByUX44EPeVUELfmQ4E4fnFXXPugzwRtqnEs28to7qvi59y5yorLTCYBnxs7BNwWd6MVD7bmGKxKzmw",
  "key26": "3VzsvqwmN9pgiCkoo681hBP384D4b7v8vcskoK1cjkfb6DBQX8tv3bYsKSBYpWdHg6N93YzUT91zLuEp66fk8R1X",
  "key27": "243qp5UiBcrRF5zNjz1oMX9CFXFGkkcpJ3cELoPoXqtKEtsLo4PTdNjW7hDoc9afJHWLh5iVNuuit8247xiU8BSb",
  "key28": "5Gb335pHcdRi2ok6R8c5Big4dBsVvgXs6ToGm1S2hJQDR8mUj6LRaBSPnZEnqvYDQojuygA8dcg9w2UPvy6YtyJ2",
  "key29": "5W6xJKDQh3j7JgvLsT3k9QuLVxcFSiFpCuN4QNLpw7vLqxskHYTWs6bGZR9xFT86ZqRNoNM5XXfFRESXapGqWWsE",
  "key30": "5LL4qLJaKR479kQDd3RDxWnBoRcDBMJLHEwDkpg8iDh5CPCWY9cX6QfwVa4tbcZZSJSU2yzyVbm2hhPMp2Eg18q8",
  "key31": "3aSdP1Wgj5HKXUf3P1Gh5Wts3HiNN24Mibd2eDEhjqFDUFDXuKBcTzhCMKRW9b4xaAbEDvSX3gcxg49WP8GufX9n",
  "key32": "63bxEScA9iZJoFBxCVSkBGYkXuieRog6Z8qWCpZHaB5mgYqyRf9gBPzxbkXG8bL27CYXZnjtXJyEk1akJpcvKoFt",
  "key33": "4oLdVgmBZK9RoktaHrtnB65wMY2R7fLDLojgT7z34jbjXe2TZHSyLAfXN5YLyn8p5bTnPE8xiQwnvbv4P4mk8cJp",
  "key34": "4XFNpFLSicRHVcWKyeSXgyuooZyhav76P2EKfNgVcVfEJNaMgj7q6NXwoizJNkWcyQp99xk98XZjdy5F1Nsxicj4",
  "key35": "3N664jvXFp1Ksz5Jpmvm3hzmUUeJfxQQJBe46e1VRUofhKPCDMqr4fbBfBfKhQ5MyTMLDEBUghymMhncWWAXwKb1",
  "key36": "5kETDDGqcxvscGJMAjFdhyFfyWtxtFRSN8Rphy5N1qQwKg9NW3kRviSnPEAftwpLZoJiwEygcKFupS2vYDJNRptW",
  "key37": "3YYMroWp8VEyyg6rTZr54xHHgDAqndq2id5FbPxyMxuKNdBmuEmaxL6i2U3ASgvtVhXraEJ6Rdf3wWvzck1XN2rG",
  "key38": "AQR1FU4B34djn9zEtfcUaU6AVDFpZRb5Wy1NCBeEzrtaL6FXx6E6n49A1PttErmTKv2kniLqPeCKvwgGzvpxf12",
  "key39": "39Ut3bkv1znpzFRGqiomStZDHskUuz8Uk7aKnPAdGBPRf1e7mPAivdsYBtsa7kj4RX4mLEH743LJFHqRtxPXicpm",
  "key40": "3qeRnRAwEfCzwDmsdnDcB74E9g1HGV4edkkyG21TniTUdh4z3tCXD7yYJX1UDq7JGNiDnZi6BL2H9aCMrRUfE56m"
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
