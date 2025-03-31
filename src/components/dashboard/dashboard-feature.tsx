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
    "3MioUQbjQFtdhVkByx9ZePXwYTgMkfay9zZkRQ5YaFmNXGzaimyGYyhMxfWy7wEUpGxRcA85AquptgFH2LrY2Qyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xyf4QT44w7bkJ3rwGLaTPbLvfXPasSjy3WnRrQTSZNuqDxBpmgq9DytRYuEjJhzqr9WAfUd646vvp27S9GvDfFr",
  "key1": "66vZ3JRqz4WubXgGYmQFvW9sj8R5AaSfvRaXrf4CC1MTniM72QgDFbSbw1RqGYGmYiqLrbaGr9bQY7nmfzVkNrc5",
  "key2": "2VsP3m8j6rFjsMkg5nRj9g8RBeznBadFJxtA8YXJ373amUBiddZRWLHXQHBC2JnU5kYq3EBqueVTeobxbtvUmHJd",
  "key3": "aR5sWivF2kVyKFDGBTCXR2wY4o16cKbkAQdtLfWsNK81DoJk1XtwLKfDR9ownVLeTT2aryuQ3WsTRrFpPzSbNE6",
  "key4": "2wXQA8NGmPNx2cTWTncSEUP7w6RKQoVpfqV2invCJCdCS6PNDg3zQ134hc8KkUQGDMy6tsVTWtV9fxH7BhtsTa5z",
  "key5": "5yzDrf8kMW2hg5swHYam1NqtSZtjkoiZoZyZpVJBwxidNAoGj5h3Ayw1rKxywhzwKk4QrsETw5euDVu1TSCLXWGG",
  "key6": "nKmpM8Nxtd9GcgCYfqSUvkr9SKgCdc2sdAyD6UwgdBp6M9StUZzCaARALKsZNkUk9F89yNw4tBQMf2EHes3twJm",
  "key7": "5475iPbZLT2vfVrSQcN6huLsA6Et2kK7RC7SGFv216qjiZw1ap95b3HUfajLg4CPyko3o8FGtDKkWHJoLHMLpWzp",
  "key8": "JvKuSnzPDb9PdiEUCFxhCThQx7rFWHpFdQH9Ht8KJAErfVM3ZiMCp7Z4qVZiRsyWg42epGAW4B9XWr8aot9roAb",
  "key9": "3ph4iufgXCt7Q5ar4R5uEx2VpPR8XFeHuiae3e6mNFUWs6UpLahqmm2HJJPpaFkt7n5bseDtfuC3aJc4feFvNn8q",
  "key10": "4L9NSTgx7g66DDjhLdKkiV2UNcfLuRyjRZvW3CsaxL4VeShQedPEpZ8XAmqEb6m4GSGkFXBLPZAKzLNYvqAfpbFj",
  "key11": "5r8hn7N6BwocwN41uzCbX4AMrAPf5AGXZHMeNwY2zrsUdQP1ALZViENTVBh5kj9vC5eqTpVJTbgQ7BxM5XGvm3An",
  "key12": "iSYtTFKVYKtFjwCUkwn3go1op42ugwUe5tohczrKfj6Woh8D5fEw8oTYGJGCywsSkcndaUNRN2eGJK4QL9w9T1C",
  "key13": "3m3gWocAE5XW3wFgFRW2Avca3UbAdiNR4312KPN21KzQ6jiqKke4pPSfy4Gcnn9CecUh7L9o1fxW36uocLvrMcQC",
  "key14": "3iGVSEm4xdirW6bbMzFE7WERvJgExdRYgANuBmW4cWyngusWB4xtKVFBv8QdeTBsiDK4aLhED9JH7VF9FFmhEe3X",
  "key15": "AJ8azcXc3YwgTeguB6L3z6RyTtBcceefzJdqvTEYPEFgWTZKZBjSxSBawWuztAe6fN77bota9dd5BbeSxEdE3HP",
  "key16": "3C1huSZnsodAdS8U2Fdw9BqtJpia4XVFVP774y2fGqYEDFAfVArWiG2Ex1pyKNXRdgjc5Yut2mYRP6ZbWitfHSYY",
  "key17": "XdxWrzZHYgaZtmjx324sSf2MHVa1jNcArxo5Ay8oz6RhEnbPjsLKN5d5qi5vFy1co7SDLT4HXuh63uPX44qpfkF",
  "key18": "5ijj1Ct5bLcGnpm3zcK8HH2E1oC3i4KVihtddrm1MqyZ1oPQ32fip2aA1St56Etmk6nPeDkhu1HiDU1Fx4SJ2HhL",
  "key19": "2Pn5cmy8WAYKf44awd8Znkb4e65jF3ZKtXxErVQM9wVsMQP2kjJ7jPKzG5AhBA4QBt2wwZqFwHL4eUKcQmp6cMiv",
  "key20": "5smQr9GUotypnqSa5pZzh6PDupZDj5MvhqN2eR7i1qsaGPchJCJHiZi1BuCy5MbUCF7zCUHRG5uEUNwaJc5hbZ5v",
  "key21": "2DHdyJo16tccVbVV6nhDQEpM8VtNKFMsRM8YkHhFVfZLdBRDnUQb7i5XAAKHaQ6cwE7aoEZhs5MUAauKeye83PB3",
  "key22": "5sH6Jyybfynk5XLycUYtebmiBPteAwV4Cvq4XXovyCkXGJxNvKze2DppvmkN7N7LU6yrjhUTguzuTr6Tmw9WxYdz",
  "key23": "4VAmy9szFU9kP6pjVfUXks1LK7jfDvDaoYLQimvPhKhAidthuptZqNhjnNe9FgEHTPDoQkqNBnL9DAxHBmnTPUag",
  "key24": "5FnmCngJCjXsVEyFuq28uYQm5t1jv5Hu1ydoWWDAU1AuVKbtLUGd9aLNXZg4UPJRVY7whQJinPCp5U1z4MCin3jr",
  "key25": "4sQSUBzg7MQ4uXdhczY6HwC8caNUnShkKzTVDY2kvLkUJx1K7Y6122PDFsstUMAqPgSsstrwpG7HZ2wQjiaUrmHV",
  "key26": "5AEj4cdWm2YRwHM9Qxwjudpo3TwQGHDHQT1CMmpoRDc5euiuwqPikhcDWnRATQ8NZhxWWxiG7mjEVS8F89TkckAX",
  "key27": "4HpyFP5c6e2L2FyQdCjdsUKnngbFfRA4HDDhpUvYRaSjinMXZrsuXAgf23CnbcRNFtPygz8DREshRwQ8bsFVoyxz",
  "key28": "3VwR9idVWQ4Hiuvp7t3pukcWfoe1pZegp2nWTQHHXB56wMthFT7KCqQSUxu8b7fWpCeobuFBxBrMVUt2j32sPaLa",
  "key29": "3HU4QRvvCGtVLbNRy7mdSYu7Ktxe2GcEizCCzyLeCmEXejHkBawvibHU5SvtokF9LmJWxYVZ8ZkeZpUy9Dc7p9Bd",
  "key30": "4boVDYPeyMFnwZv1B4uqDetwjXYMaqA5gSysJT43Xkxebzh4T1dd8eVwwi8A4h9FKi5BtALcza9seLFztGV7BRS5",
  "key31": "3TiKJhGRnvrz7dfGxGysCjniouQPRwskWCgyJZwbmsX3NDbizxApED6cPzypnUGtr3L9ajE4QGeEEpaqxS8mjJwt",
  "key32": "5yphGPRFmEB68xUKDBt2UeVQN4hAcbCALezfojeXWfbc1qc3JH7fJjJjbjhGxFHUhmReaYpsRGNS5SE2sf7FxJiH",
  "key33": "yRr4PzGukHpFF8ZVg7s2nm7JWjufifAdsn9Zy6xpmAhf4FPp43UW3vxAFEQWzcWgmQAq6gHkcn6wXmQEdyUaW8t",
  "key34": "4cTPout9x9bFYJwGzgHUzWMJW9ujErM6w9RmSBv1r4SFCcRnEz4UjjkANuCTMcZsFoBoxUhxzUUh2uR58k5t453T",
  "key35": "2u8myGAS49et5xvMzU6hYN8wYoufaeVUr495fByxsPtRUFj2ZTJjf8gvqYkhXfGj7S6eByhaSPv2HuNKDrEEvnfy"
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
