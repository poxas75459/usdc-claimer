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
    "xBsv2CGZwzNQFt2fPUYLkLSTC9mT5DdDTa8CyYQeLxFHvVr47fB2MtCgcXEfEt9p1c7Pj6guNCncQSSPMdSyf64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XNHZ8xe3qqukcyzgTW75VGqJJRn2G1tts39Rtz8nBB27gyWi2fthLEJXkcybwZiCjKQgYnKUiA2aK2BzxAqD25",
  "key1": "5vHSWic499dnUHP4PgVPGPHMMCfeZQKLMbSwnhE5SobJS5gq3W86ubqwX52QzvWHmnkcx9jYt2NorzMYXrBfKfnZ",
  "key2": "ZmGUtLut8LL22RqR5pxQgw45iXcPn3spK9CJ2vtLPEfbuShrUnDdqa3mgWzLH7TK1y5BJqPJ8wgjDpi81FfsajN",
  "key3": "5vE6RSU7L8XrwAqsTqE9WQ3N81sPmz25jsc7VT1pNVcMe25d7WJNfy7NDgDiyNhz4NH9qL8vzM21u1M85Ci754A9",
  "key4": "5MCUWuYdUhgLgBFuvQiZV4HQuU57qD9S4uPJfPRprGoQzcYaJgEaiZnUXoSidPTnjDc229MUTwbbaKeLSV8ZzoNd",
  "key5": "6AENMzA5JxawT42e92EXwSWPYTVJB6EG15L9RaXdBCLrpaHRTRJC64cNowkWUVrH2FyZ1r2yYMRT3afPryNkRBw",
  "key6": "zLwsuT2xRUXGyAM47TmhyKiS9D5Kry1GcjSRANdgmGc5LG2ypeEeksWtRz35pEck1LWTk6rXhnwpUy16pAFfU9m",
  "key7": "4b8qve7m3tFCyLiqCQ1dGH9h2pkSmswjeQUVtTCn3hJV9X5KWoGVprkKaXHGnpdiNJKiuQBjjNQHBz2NZLwYGSnx",
  "key8": "3PdkMtoyAzyga9DSgP34UWuTGpytaeTmW1woX3A6GXmH9DdnT5psDkBUSDM1H8aLEpdNpaGtTgotJd8HiyBE5zMg",
  "key9": "511vHBKY4verbnU7WJxtCnKptAuLyXW28c8NTU414bgK9UWGWN8t1DCoVC5dnPhqfniY6reLmy9Z5Gtokxc4hPgW",
  "key10": "4Nmhg2NdhWHEBRnFXjiUWmoNBk1FMDv6Xymwqh8TjuazD1BYC8myGy4DnHMJk1sK39LxZKjFtmgbr9EWmHvaWoFD",
  "key11": "3B7w4VZLQQ4LRXtCv7hQnp4dino8vRRcNKBn8pFTfixYKUBF2tTwvGwfchSACfYmv3mpRLFLmw88QoxNdhiKut7H",
  "key12": "oW12zFsTkRaAVzB3gVZ56F3SogB6NHy15hpnToKTHSvqnistUAeDQj3sEWriaEaZS5NQPXYhY17w7ELMd1GZwPw",
  "key13": "5YJcFdWWH1Sa9xYno8DQJSfFNGEfX7KnBq6Ec313eafATsZaDGnfRH4s4DUUXU4yxHCUbMrYBqX7aju3hq2Yvbmq",
  "key14": "5Dicvz8nmxVR791oG5CxXwLq53EvqqdczbwL3wKSVtq7n8hTLVMnqNhhUEVxSMpMLEPQ52NrHrRnCTYmaDyehuSx",
  "key15": "2A9UJEvP557JzYJ3YavakBUURk5cPzgax3Dyh6osDNCuGXyFNXQw6hVr5BxyycxnkTqybt2ZZJ1zB7sU7mfn74Mn",
  "key16": "rDPwFPTYNn11cr2gQzDNww9mX85G6stmy9zb2xpWRm8UWrJvuBmcSMqL7Ry9RRwJJR5ou88aU362mR55fH2dscJ",
  "key17": "fK3wjVe52MUdtYVcpdNmYjTw2w1A6EXK8ogygtafzTW6u9uFnwV9qiRfTCEHBYvTdcrS8LBQkM9i5u3gEv7H9og",
  "key18": "26xLBBobNnAaEA7krCTL8hByhFq4DFJWDWxguKgWGmJU7T4ZvPex7SkXqZFVEzDzgHkHwcNg33fCEZcc15ua8dRD",
  "key19": "5oNeXyNdDzc9aSiUkGd2bYDBFQ2bJEKSCQ2Qqa1e6M159gZW9CZWXqBB2LsHRSNEu91Fd7XQ5ZiqQkts5e6MLhYZ",
  "key20": "2sqJfoEvMiqv8jEyeiHpiDKwHYTvPWzX1JfEnFo9bDoWbuMYzJ2LvVkHWyCvrXusyUKjFresPVJkKFNiChb9vxZj",
  "key21": "8h47XMyaBiwZs8a7aKs1RTzGtvmMgmGrCPJEXyKVCbq4bJoe7Czi1QszzeNcZAtxJYoLtyWiRUdEYJGZbjfegNY",
  "key22": "5i6UyQkc7bywzMEq6gGhjMQ5oFHkTskPcdeR4cLSoN6qCtwqqKAdvNPokErh1iXDnYn4dkRBD6L7c8eEAmvDWvG3",
  "key23": "5hr9H6BxLq4pmnzzvQU9ZGSzgCep1MgfUzdb2Jdri2eSDp3pgrTHVpZb5p18xDtFVgJ1REZyCgoRR6VaaM8iuvuQ",
  "key24": "2fxhRkQJmqX4XgATpXyRFiK4taZysCFTEuStuK5sUyyNTrKjnE2uiW83fkei6tW9bEUCXjeCV7scKX9Q8xbziLcg",
  "key25": "41K44xRyiu9fT3N5vTUJdE5uCeNaE5zfEZy93SFZMVBRKQy42ZNYywu2eeysVVGAdvX8xEBLTL2nufLDTxVog5Uk",
  "key26": "2G73XqA3szihU1MesNk7pDBd4vsLYAamWY3tDxu1P8DaaEoYpZYzi5sRj9wuaFZUje3PJJSN2wwxUoNk6gG8D25K",
  "key27": "STv2EjF53LFk79fkw9G77wd4M666mRhuu6whVdWuQaeQ49dYtrQPxK8Rn4NbGCBmKcg58e5oWZei8hVbK2XmJuA",
  "key28": "5YEP8M11trX2Mn2UoZ4Hy2ZFLVgza2VVcnDkrT4gaTHi5GnEc2cYc4gK5g47NJ9xdHDwu5A9aX9qN96c1MJPfzRh",
  "key29": "XRbtkXvk4eRrZi1AqiM2RJSrabexZWM6p9s9FM7DCjbDHB8Rs6ZnTBpSSMJqsJuQ4EyUNpzYqLAmikAQxoACJm9",
  "key30": "4GmUw7qtvWi9m756P2jQAptKca7nRQE57VYVXGVzJv1nFz769GSkWRpEVWSXMRm7tZRCBdj4wzRizUXmYsx2WENz",
  "key31": "4qavpu2KitFRht2X7z3uXjg5ucRLi29AEeuieLYtdsZ8KDCkCs9RoXJsAqDWRAnsRYjfbJmfCWz3T7dbgWmXfeTf",
  "key32": "3wKXSg7ELhdqdBsnPCWGNRwRpRDqBw4g2KScdg1SL3aWcdUgGTJuG87C5nfPCpS1LJMwWvHviw3DJTDUjsjv1i5c"
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
