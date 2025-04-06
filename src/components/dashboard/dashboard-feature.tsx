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
    "5fWJnP67GYFQkLF71cJ5QDRmc7Hn35DCkyaGooW73NtZJDhqJHXcgRSZJ5tx3LsS329NrwVySqrhx6VNmfJi53yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wv51vNiehVJsv5eM1mVunC79BFv9JiivJQdhz88eb5rBFWCQ3iRUuzG6vfurTdt8t1e7s9NqjPpVGbrX7eqr6tb",
  "key1": "3uC1hCA9uBwKqdG7aHKxnwgxvVnsgfQ5eHCpk6b3jc8xzKRkM4os8fUeB8DpQriCX5u6tsx74wpJ9PPvHpe4vvSX",
  "key2": "2w2keGk97vmLE7xUsByzmYPk1pbwgqLfZjMMeBaHmBVLifcFkmLXsBGGLxkyHW8oseU14wVyvDNhUSzPWnpBTC3S",
  "key3": "5ueSaJ1MnMB5uxxJmvbEF91Em8uRYg4ryVmSqU8jWZDVpNgcw2wDzD4i9pdo3YpsUpN3UQqg1vsFT9DTJz4mUeUg",
  "key4": "3hC5vHoaeWM1an1tUPMj3jkiZ5LzF4JkU8FtjVTj5iML7vVTc6M1mBd6QS8iViKa2mXhkwXsYA8F2VTh96emjhiG",
  "key5": "2gAnNAnrfQaRCeVuC32at5x4kDwJrNqxynLYsqCHhHrR86dVGfu599cj7wpt3NWKBgHMTUXb6EogPr6St6LkkfnP",
  "key6": "aaEfPhSGYiW8ZJad8AFZrNK1sYJRgSYUuQca4v4D1Cip9bktJGwS5LaCEByh5bo67kLfwQssj6a8fUQ65JGdNRH",
  "key7": "2yiJ5V5sv2rWkohQspH28cxGtr1BmwuXKBQzqG8HbuqrKjVk1YFkNdegDHLriAMCth7hDk9HAt84DgFPC7EEhJ2W",
  "key8": "ACFrzZsXaQpacnMCGgzDsmUYUF9oCWx8m6UtrNK2GFcN1TMP7atwwDJemSQRgBfqw7KD8zft7Qpj4Udp1XVrd7S",
  "key9": "4VPWo49svzPR7txbb5Dzzr5MXwtB9p7j9oGijjDGjXWKP5kF691C4hqVGtB12YbwdcAGb2cWfohAUx6yBM3Rd2La",
  "key10": "3nUKhaKzaooh9jcGmWnzYEaTrqWc1ADJugqzdksodps4fG8sCV8C9GCW5VDpjMeLuaUhYawojTo95jyQYYRth3UB",
  "key11": "3ffog5bQrUfevrbVv5xkKisK3RkoZwgXr3eXRJAZkuwSSC92NWWajY12jQQfhvbyyD5ibPwbY3TVBAGPyxaPqBbP",
  "key12": "4KzK2taRSJBbLfchxJuM2YcK5UwbGwWABqd4G7LrFWKAQn4VRjTqvm95VGYwbbcCM4WjJHTkM7kQovcbcdcaffT7",
  "key13": "5isAuXMTFVpTtnk7vCgcw6pMmEShMnArRRa1EAsoE2CuHtzVmFygrnhBtoisgWsydLmCJPs3nkDtfuvsRD49gsCn",
  "key14": "4fuCjNUyM4tKsgiVdGuznU6XtrUaF5GBGrXu98ah4G4HcSkgeu7aEQoLzKstaKwGR4iJnp8wEJxBLAFurSdYcJNd",
  "key15": "5pvEBsenU8CxhSfSYMETPkav7noMzxRxkKbjEmKkwRruPGkTYdfcZfLTptC1CBgYAbxj62QJqKhh1oxR7deYaVPw",
  "key16": "eejJXVJ93SPxCBcy9wEdkx5RZVCV2tjVA5VjeYkwrypenqNt1wCcJzX17wnj3AwC54mHGGAvwqr3TxTQphFJuTq",
  "key17": "5iNg93kULg3tiuwYox2nn9WyXprscbtYUGs9x9S68z5JiyMGxhpY75vdwkHXgTvotuGJJ533ZitFyUBLLV6dnDhp",
  "key18": "2CC8pQuNu7TpDQeuTH55DvTVhCJN31LwNiVof5x71b7zHt5QCKK1rfNCcUQhuhXbw3UoQNbkqzq63gS85UYMKft",
  "key19": "3XHQYzCUaHhDvqZEVutRetNh9NucC2pNzuYuFDt3XacRzmMdu4RWvmyCH4fxRZRovx22BixxFASB9QQrZaXfUQL6",
  "key20": "32vJeab1wq4UHEo2AV3UpvNZoqQJGUe4VcvBobKqQE8aAN2PUf87KZ7wWDEQuS2HTmyWx2bTr7HW6X2f4xXAx6fu",
  "key21": "3gGT5gsLoAxNtch9PriCBdeKJyn5yVueUKp1VF7QGDeQo1tmrU9XXLKWQk3KzQb4Lmd2jCU1qwPKkVWd7AMmotN3",
  "key22": "4oXGVQBrHuYmDNjX18VnohK4ZXMpNVwhXts5zQ7PsxDNucbPd3mQCHXknFsyh9oKSTK2PJsej7ZMN9ykNrScPz1J",
  "key23": "2xE7BRvMoJmiDj6WmbFxtP6qpoHnVeeK35c3YLMdQ4m9SMCKZNQh3vThb2wUTb1jviB6ozHEDpwrWgKni7reBSFf",
  "key24": "SyWWGjQ8gEhAKQPKxLeBhHXnGUFnY1L84MFvUMfVaLzZu1vgysemrw7JKoL9DHFiQJ5nTB6jspv1gxPu4yde4m5",
  "key25": "fw1CX6YmtVDAuHGDBZrfPm2LdiFfYgb9Arnei62VG7gFD6vH3jKN5AyK2F7uC2xoUTJLvCqBEoGrgfuoDk8cU3A",
  "key26": "252toriiRkVkpfbXrRUipRLmz1xc5LQKCmrQx58RHEM3ugUhFjkerrn9qwCbQ5UTWpAzmgbSYv1Aqj8LqQ4yRLqp",
  "key27": "24GSD1tNFmRuvytm6DuvS2whZ6Rt6vH9pTqvUfc5wyXPzGPTArGrRgV8CUcRghbrcJLxuD6e4QRTcGdrTManUz2Z",
  "key28": "5zTSkFWB77SBDLBG6WHHMDRFSd3UNsDiwzVAnfm3mqKzVFPvpdmWJU2XnoVZkTo5QZoinNKKd7b1jKRESaLFVhga",
  "key29": "5t3CH96V4djTuaAEj7yMBxvhZqEbv53vLEAZYNjgi5vBoCW5d6TF2gNyvzdrdtBLg7jwNKohKQBsE9WZNg4AwgUF",
  "key30": "3sPNRfwua8DMgs2dqSGpenpkhbJeVvbPRYG8KdNHiki8N4xePZshY25Jt2uXjp8rczkuQ4yjQ4YAuwbjQiz5zNoo",
  "key31": "min7GVAE88TVzAoask6RoM2iJTSvMNAbsgaWLsTvpA9hAk9Ck2dBGjyaQJjLBmEgjxk3pEy8CnMbqqW5bhUYgLJ",
  "key32": "2hsbUZsxcrArAAaGHmDazxhA3nWUtKSzXVd2L7EN5mGFWoWuZwogxwF2ajymNF7NtGfSQ98rSUWASQJ9wb6mYGdS",
  "key33": "3Aw2bfzKhHBt6yJayrw14BgdocYesnD5mjY5GgLwPF9v4iDGtnGman5Z3whok3D5odKedgKR9XTt7xsyUw7bqcT6",
  "key34": "46AbBL2MVgSj5Ex8VvNBCeKqW15XPuost3F4uJVB9GAT66BEjhVSXJHWosVKaoeueDMkPpFNHRsBSewYe9zVi6KS",
  "key35": "Tn7RQ2fXyckELGkn75YogdjrkjAA7ZKdVrWtf2a4equ4rryunRdXU7aogKhgHjZemH7MdUK8pAoNtpaac6k97zC",
  "key36": "7KKpLRSwpXLHEnpzUvDCDXet3T2NgvUCMPjLf8a9mhqMJKyMMHBFP5Mg2gs7ysvJk1NLkU4or3NZLaXMdq5Poje",
  "key37": "64V9KsipNyfpDt2QLxrW99trJwxXfr2vygkWWUxYD7JbDg4TRUaz8g2pgNeRaMEz4TUv9G3xXNQ8nry4jjDYF9o7",
  "key38": "2YMS2VvzmLxLEjGENfwzeJSEYNu7Fi1R9JF3ufLZePPbaz8eZn8Xy7RLPmCDTuUGNGDMx7m9NHHn5iAqb5c1u6nY",
  "key39": "4XDLSwExt6QHkJDy5WwEkKSxnxzkE8P7BTtnYVQMd7RMxwDxsUY6kQHJd53X91L9vNxDFRQ7hgmABd5BhrPyWSSS",
  "key40": "2hQ3QGWNezynPWaKGNY6FBCowZrFjwmPqW6msTs5nP46p5FPQoquHarg8qGZsegDVhc93N1oodydpi2huzbSonca",
  "key41": "2xTHPYfaUQv5Ao6sMMRsUVL84xrKu5HZp5cua1XeFABQkPyKf2KQExPXH4LYif8SFXuvriRdSosBNFPbNwBxKGec",
  "key42": "6nL3HWCakCfRw1vqAwpvPTuKFUJ3A1JZn67an28VYLpXZvyAvAiRTZ7AbzcC1dv5oYpn5nLuYc8y8TWFKV3Zj2D",
  "key43": "4WeCwifhhf7Tmbnt27GMKQUzZEKrhQ61QX9ug3wKRgfGKT4FNUV2SPG9QodNGW5qKQLieLGYBd79kbkKnQVSuz7h",
  "key44": "5wwQcQeNyAq4rEX8emr2aS8VwBsiYFLxPuT8hMxwvzXappzUQNwUbTbHVJSVk8DCNHZsuWXGtGAys7wz5pxXNTET",
  "key45": "3qcYVcvUHckad1WUYbtNUe57AWsJ63cj57KfTFYajnm3GprGJvFhsDgbFYkkMshaxNkGBPo5QL2EAHdkSX5rkyRs",
  "key46": "4vtwhBv7rpHXS7ALXH2v3R3vR5Y3eWYKWqz4QGrxCHVt86TCpLpbNUL2c6uKJovoeojJcgUdo98noYAUXj77Et8K",
  "key47": "34nnpok2Cfj8brpiH1HkMXtfsGuZkvYfhhZdp7PxLs9PpAv6NdgfQV7NKuRQuazHtau56vo51uVSWHi4nCEoErn8"
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
