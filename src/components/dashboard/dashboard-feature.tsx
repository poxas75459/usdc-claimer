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
    "2CPtRTYDh2bLot8WxvPX9Nj7YjZ5M4y4v9sW1HiD4dRSudSLV88nXTC8xesd6DtZi3RoGH19q1yFeDfqb42V58U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqyC9xA3R1vwavgRLFsXUKPn5LF9bMENRcHWQv6DA8TBAFyff3czeuei993PsQDiTtLKKNtnodX7PtR3h9bTbc5",
  "key1": "3eD4HszbvJFtKogGsA5mA6MveE8PAQUJL6gsgJHQDtqAExRi5QNpUD6rkkNm4PU6YhBxCRauPiLsihBCxVJoLcQo",
  "key2": "toYU4RsKofndurZZD8NrDnPE2XEcNSCyYAfTYocaHcCAMjXEwNqEzodJDVMCuG3ejKPS3vyoaxBKndpY1h82wzf",
  "key3": "4nJKzmtPw3MybJuFZHQa1oAuBBGsRVxKrC2aubyDkpPu6JpsYyd45SKAAD94HRF1EFeD6iz5Aar1B4aJwqFKGNFS",
  "key4": "2qQaVib2AnJ9AvYsiwHXQS4WiQrxdSUX1gsExWnYt7D945twbwCu4FzNFuVdAvSCkUg2BxHdMbYq5QzuJ6rJm4JC",
  "key5": "58oihoQ9oRznG2H5XtTJxgJhc2f576VKND5fT89c3wi9VQx9LGihevQ1ucQ7ABKWsTwcEAYdmMDBHevRQiVjMYfn",
  "key6": "5QRrdUbNmWPsjWnMQ6kCBa6u11kWGkSv7dg1LzvWYVCycyWNskZX8FuQNsWHUDmbvHjFfqotxZ5fXj6YM85yggMB",
  "key7": "5McHuxVDgfidsdvzNZsC3p4LCMPF3Ga2jdDjy1jg9oe3aoVNSaHavfcd7efMqS2QRiy4DpMZZzQfetF2ez4fHT1S",
  "key8": "32LXGJBHtzwuFMQbp2j65mrVUPs3QLsARCyGzLYArvX72WqqPXeYW5TvJjryCTf3VajPtCn4N4Y7iZARqZhxGMzj",
  "key9": "4p3dRcXU7wxzBDSoqGikmKMEvZSY9qG81PCT7b2PHk3ZgfatxLiT7uBdVPrxQdyZgNYCyds1y1VRbC4tg14CKsfG",
  "key10": "2Q1t5CNUuFu3N7rZGCYNw6qXt75JiEDz4VxFU6rRVEUL54AKhMcmkoFVtMEbbxuVWqQsyQNCAkLM4T4U69jmNPSV",
  "key11": "39Rpjg26JBN1y14GhyGxmgeAjdJJMgVzu9iNhAdL6V57MBDrhDWK9z2TtzTFsV2tCQRpiSdFHQxyohpqs2egB1yP",
  "key12": "3YHT1seE8U84ZxmCdx4u6g4NfYhkJJwuqokZJx7uSQLg4BubvKsYYx28bDcNEaa1nwA9ZwDtB8Ups1hmj1LEg8sX",
  "key13": "5gtD65JC3xUuhPgEavMfC8yBB857qJTbpB7aE24gLVN72V8KnTmHW8MEeXrt3mUDPcVxavejMnLjSbd4hFiZUr7W",
  "key14": "5C16JdzBbWcfD9amJXLR5HFdJWpBXP1DFrniwRE1aqDnQbGT2bdpaJmFYHnjnP5cXrruELWUjpvygppvxLNes5VL",
  "key15": "UcQSZDaSY3xpwYGDWo7ktcKXZNjQJEV5dYCZXgffAmpYMou4jkUhBkeSLbStEpEeZBZvrbpbw6quGsARkewwMUL",
  "key16": "4VY7YW1QRuv7UKzsBLudXAXimZx7gBio99JfZ8pcwMbdzHxJWU8ZwaoDu51amg3CnLKf2QaZM8XRrzpz5CxoQTTN",
  "key17": "49hdHK1VDKW6hBEV7iqG86aUoR5Wee5Upvu3krQCfkKWsxYaFVetCRX5fro2h1cBNjXWRhi5aXayypX5WhALDBFe",
  "key18": "YFyrUkdcp7MNgr2PfJBiF6NtxM97WWG281wZRHnAytABZRo1eY2G1D3q9ZETQw1NbJ4D8tpEYdREqxi5piKTKBf",
  "key19": "2taZ8x7saSusrY5XuKyWKM3qeFxjhXJPTwySCZFbQ3kFfjtXPBzr37fgBZdA3jLoTZKrqwnfjeeL5ShXt1E2SEfi",
  "key20": "4uUb88JfHcwtMU6wqYjwMw4N5NgAnmwqc3BMC6b4Jp9mK7GE8bsyKCvzVERR88uiBe3yrFQzbPvSafQzgCYBbsj8",
  "key21": "2J8eZvez67ir1S6LZUorDhPViJxVqsTBHwWpzoYuqbUG3yhekPRjjfR88MZfLo7r2zT4FYQGWKMQzZaYCdhuGACy",
  "key22": "78vgSwJcc943GheZ2hAbWHf8smN6xtvgmhiFmXrpLoz27GJKnTyZQc4M9GbgQGLedac2Xd5tnx3xEc2gewKpfKU",
  "key23": "5j24MpsrrnN5zoKhFXQTZeSQEaaDimowgjvw1hxZxESHEppTttGMrxkyxNQz8KD12jugwsryb36CWrkvywUL32ui",
  "key24": "52ucaaPMpXu7Pv9JKYgtASww6NPDHL65ECkrrjB5o7Jok2XQwvUHYXMF9ywasZAsiuCv2sJgCnnpxh22qRLVgL2T",
  "key25": "49q4n5aN9p7HeE1F7fRqobCHq7pG7D3cZLxBR4JCzWsYJh2nPaA286Gsg4Wh6GZkGtwCujBYJta93U3hhyMEx6qd",
  "key26": "4DQe1wELFf4eYiVFpU9PEQ9y8BqBWfXyAN7hL7KeDr62dTcofkB6D9HsahkpJLPduXupWUaXmCzf8GxhWLgNmfFV",
  "key27": "5551AxSiGPMRcZQQ8Kk6f9iiqUtTgZsioxKyTmEGRuxH2mg4hKKiK2Je3y9tMNog8L3f8SYDWGpR4KwKmN9omdEw",
  "key28": "5MwmhUB6JNFwzTVDFjb3wjvcgL4BcYK5mTysf3BhmxKCAXHNkTosF6jz12qfZE9VXQBDwEX86q4ocVTW9hcJt6i2",
  "key29": "5K3Mo4sZUGDpe9yw13kVJ98apjHERgkiW5BymNbpo5yXRnTURXaAexYUyYezeHHKbjkmsXiyFXiDtrEqdiLzKDXu",
  "key30": "21RL6mDLux1zsLdvLWZMKGWYyVpi3YgfuvdZkDLaSQe3uswkncTpbG4s6pPBa6pEsXKVZRBHyUFtgXjCL9jXioDk",
  "key31": "5DH5srhVLnSnMhMpHV8CNcue4PaZgWRuJK7LaAz8KNCJVWden4qxbtjGTZcW9mkfCovvAE7QZeBRFR6C6EgbzynE",
  "key32": "2R3yB5rBLJRppr1pp5iUf5CGzf9tUkfBZKXCMDMCRzbLro4ta4mFzxLJCb7bzZ88zir27xZe5pbpoajcDQpBCCnW",
  "key33": "127biP8P3PwMjQh29MVViTG6f9HzRvbWE3E6v6v1ihZ1YYS2E7jYPA6mz5AdCspoiDv75vWuYmSXXURmMDbmDy7M",
  "key34": "2fMNpFjfuHc5BJotBp8bRiMtq8CX5RMbSm9PJCFRP2QnjGBiisVU3fxnDJS4quFFRLzfakikT2YGhA8uVQihXSNs",
  "key35": "3RX5ftR6jeN3adCtMAqsXu2cZW36iy3PkCUeeuQ2wmCVqjjbQmmShHcVD527jJ3VESUujDJTPwoE6YP12LhXegxN",
  "key36": "5BcjYqLG5GNy8uPXKk3eXKR87i91qNqgP7zXnYStjnDiSPD4FRxxe8WhFyywtZGn3VUPCvjzAineGovVrqEYhSCg",
  "key37": "4txUD2fVayVjo4Tw2DV5HaTTDqwXpuoUVVe5nvYpw6vyd3g9QCbYkns9nif6D93c6x4BXhePmJKtKVHUMB6tMAwE",
  "key38": "VMK2p7tWCMhguzp8L4UWnCQzWa3uayknRd6sa5ymvvytyU9XeJnAkyXWyC29Fah7D9yeYZTtQivZoa8V6S1i5ca",
  "key39": "56P1iNkzNSAtE2hgktPECDvU4br65odAEb9gSjDs9SY9PFvTMEJCykjREnJFXrYUoUU1VQKrDRvZ35jA4cwdkJvh",
  "key40": "3quQaSUBjGV5vkFbVKksdedSHn5NnjPLzhVLmyoEzbySxTjrcdhZADrQfXRH2c6xZBzbHsHfsumgqt38pQDweQM5",
  "key41": "3fm6twbjiw77ugHPvbxfTZtyMokUqv4BVjDjK3GNPndCDG6ZtutZfErsvqvkwH7fTGouaj9ZPHd1i3tB4HHfAXfL",
  "key42": "N9udwYNZKf4b8qgNXE2dvddEtBpxpNQEQeCPf3Bdgi57UjD1UUSYTD6H2ksQM4dbvh5Q6jAAaAnrAftHkN9XkZ3",
  "key43": "3zw8EWTp1bKMifuDN5NvBu7S3GWfFQarEP9uw6zknaLLSSGaCPyHnUQekJNNH2j4DwgbE1CSXxjg9FwyAuLY1dVo",
  "key44": "5RYdmKcwGjbJenrAEVZszDYsmgLeR8oe8WqKaBU33SeNKWhZejMbGecKazXEhACrwv2boMEETgSdNBVbhKwqfNJr",
  "key45": "4txYqcgcD5Hu7bPfRHaZfiEXYz5wvMcXhP2AUcNYJdzFXDrBjp675YzM3mYJZzSgZB5QQBQCr9x949W87e5tGJM2",
  "key46": "TJaNjDXiTtFoZVQqYuNBz55FEueqWeuX2RxaHt3uNzvjXdhix7u5DTqikhQtoUrMnXM9L8tsbJbiyN8JqgwjEem"
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
