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
    "3BPYJBb9xt69NS9iH1Q4qHWmDZWo1crXksDRFwio9CZiu46HAFAnbwLMNuKBt3P1KgfvcJcANosjhETaHZyKuyAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgCfonBdk96hs92p7MAL4ruEykUH3istvZLBhBrTqorWy1uUBFVwYvbddApPQcvW9vN6Rg5a84nLgE44xvksF94",
  "key1": "2rki4SQYiXJfUGZUxTpyyuowG6MAVQL32Grw6LZ25L2EeBUm15qYADV89cUAimHm4ySt3QaAr5MzQHLEfc2FtDjJ",
  "key2": "4qScXj1brWM6GnSZJzJzRxVWNeTfSLTGsyjZA9vVdBt1mY46vWJrWHRZxdycMuzesqWPA4FzYA8BcvHJNwtc3pQN",
  "key3": "5FCuA26bTgm2XBuCao6E5wKocwNNiVvNuvWyRva6UjLzHjDYGLenavnfHZ78pE86XVMR8s1GNV6vzKm4s92g5EkH",
  "key4": "41aBjLGFD2VNZnb1UeYoX4NHorWZekJMogSdF4bXHs3Uy2ivYEJzcc1j5Ve8ABNkgpS29tkHBjtY4iX5iyMqKznY",
  "key5": "3x3y6bBrBaPpM852K98d9S2tbKqPBM2jWwbDxTkezqWTXPt4CA5c86LLtkgBQjNYMx6KnGc4TfAYUmhpywWyU9kF",
  "key6": "2jREaau34Y9JSw7zjz3iWpgftxr8Mx24RuVmWKf9Rp7LHfT6HpEXMSPSFkeSdZuHfdG5KsXdQmfr9be7qKcin5sM",
  "key7": "2qG3bjuFCPnFxKGiWxd8j74stcLW5y68rWgwda7nRkz7S2qkeWpWp7cvc4avAsB518y7ko6TwXAjbt4L9UY93ffL",
  "key8": "22YGoJP1ZKXKn2t52pPRkBP1yVeDwnHSw5ojkeMzXYiqvxyDYzy4Cy6a6jcwVC2ML8fBc3mitJnh2KNCV95xsnq4",
  "key9": "b7Guj1bf1XWRmF68gHasB2hcJ2Dd79ppQsyfc57fPdfbXdLoJY8ZfsjKkh3BJBy53TYVKCkJAVzYy42kw5PUQxV",
  "key10": "2trbiyrDxxMMDeiWe9fRxnbYDcPdodWktJJgPjtrDqD1eWDCk5GJUmkGNTQ46cdCjmxm4QrTC9JhwzvJaaaPFJP6",
  "key11": "9ovizNqBaCQGHKGdyASaEY8AarGjLYfnvEciRgaZEQK5JsgRqWf2dKVxqfQFh5cgt5Qv5tTnD1ufc5ok9Wir6fk",
  "key12": "2MNNJkX5fEbuJSwkooq4kADJ5pZzbzfPUaodGtbGo4Ca6xvRVELDu2fmrnU8UX7dU2x8Cs2WrKoW5AsJNp9uJkZs",
  "key13": "29JWUudapw74iUZgvYU6qaKRhHvJusXQhvrPmtVtnTLiU5aCQu7ytnZB3WTNECeS5Qk9MxNpjzo6ajj2NKfe5qMu",
  "key14": "4YXXPj7VYwYgSSiZRZjShVARMtErDbMKoEAWnkpSGq5qZE579pcJ9gLTnG2tjCe3VpkCihcrLFFXzGb1c4rcYiHL",
  "key15": "3yZ51sxtbHQksKzR8Un95MjoLAUiqHyk2N7dC6AtXQRGwTtYQT7SzmYqWkrUoqZyri87Kyb8a1cunKA6Fud4y56v",
  "key16": "4Xt3an5eZHgekN2R3CNjLKZ993xLy6CtM8hX9JVb1v2u1Nzngs1o993pMyyBpQZ2VYbrTJAP3xHCH8yuq9KpXqz",
  "key17": "32HvfA5j9x5HBaziokJjBPZX5jRRiEwEJBE4P2iNQN42ry5qDD2N8wc3RzAqBANowLPkWqxgVRYFY8qEUbs1mPHD",
  "key18": "Xy77PiTgD9j2tTkSTrzP3QXGcJgLAmqju3aR8UyM2ZW21zzD5LxwcT7epRrCvkZmzG79jNeKUk6LFtfCajX8jx2",
  "key19": "4bo7bt5y1qa5kGnsRbzUqGcTBnGpB4yN1m7JD3YDZp3jrNJw5MKgJV2vee1c7qDeWqTuY3ExJsuTU6C7XWGMnw5z",
  "key20": "4cgFbCtHQRM9qG2gGS8jmVstcEgAPH3f6c4qHded3G8XoWZ8A7JAFbEQfPoZoaUYG9Dz1PwZ2Ve9TghPQ2wR4F5G",
  "key21": "5tEN9u8VtokEDDch25ei8iQbknYhJ1DDeyiTaiDPKYPRruvGR72oa4wZX2S1gZbrmsW3fVhAbLBTezWrTrdcCRVP",
  "key22": "JREu3hzL1xPs2oVQDUmNjzua5rLeEuGrJ2EzPwgvvJM3aCzCuzJewRd9ixKwuKw1saZmUsdUUR3jrZ4DQF6b4Kv",
  "key23": "28KaL3UmHMsM2Fmycsn9CZoPDcbDQz2qLx1bYgY1cSXGR1Gy4rusMEXJhWXQKv1tf3uRNAhYBW4HSsnpEf2g9uNL",
  "key24": "5vcJN4QJEcxS7iAbkoZ6NzSqVNk3wN5maFZhE6Juqd1KK1Ftttm77PrZi1vwwpRb6QgyQeRnsaaviurQ553qC9pS",
  "key25": "332s4gWWkT1rhKNK1U8XqkpB1WVD3zVkqm6kw3uEvJkWfmoMz2VSK7HWauJB2TDAFnKZNCZGAfVJF2TtMzGHdU6y",
  "key26": "5brJikqv2fN8dt2eefDhp2rrpbQu1MTXvf9MC8yX5jMPM9anewV2v7UesUxGLjjEfNLtWSAN6oqkXZ6p78gGUtny",
  "key27": "5Gqte8ixG9g7usGXbWhWjMpbsDdoDP97y51vzqxZkYyq4Mf1bmJUfKX9WTs8ShpcE1nDyopiPP2RZGkD4hA2Cadi",
  "key28": "3XpdhvNMDVXDKV1itfsEqQwyTQz7vgeUFTC33TK7Ti8NATCj2b7f2A1xwmzGeuCqbonfPQtasu9xVqnUFpVSxB5X",
  "key29": "5TwB2xzHoGKPBvHjJXV2wQqWHYn5Z1D2zdHYhDwxZZN3aW89dq9ctbrvAEZEGEPtENL3dDaSQs5NpjUJSXfBkCv5",
  "key30": "5wNV53ut7zhbdXT36iL3RKrDNQEijPUJhS8R5qPf3afKVZgErSAL6MftHpi5qn6kuygHhooAsZ1qhYKtzfwyhPuZ",
  "key31": "2YeXvBfAtxhd54dpEqpMs5xqk8GnQcRW8GLGLVwrJ7RjKhPzmk3Ad78ydr5fHSFhEvfKiroCMReNqeHFoVMXZLEe",
  "key32": "3hZwzkNi3UsnSLurKhhUV4ra6dN4Z79FW42fGoq8Ut6UtnCXXcgX9tDQArYvenU4NVUqdEqPLe8Yhjgt1DfcR3sj",
  "key33": "2j8AM3oENqMd3Sf8XqRqdZAkecRkxjBzBKA1mLHF1yc1esD1inroc6qySHwJ5VYi1uH92mciXCkLoEr2y7wWgZk8",
  "key34": "3eWmdejQpaYE1KeggD7tJVY4R7Y8aW95iMquteJDNVYfoezLQZMDZWJLmvmj42dyhNq4GcrCM4dASSzCfVAm6wXN",
  "key35": "5yY3X44nSD1SFb2MuCQfao8CBZAxbHJwNdrpV1RyV72JeHAo8DTTDdg9LMymaYADCUnsnRsXLnyqSqj3TLqGZZXN",
  "key36": "3tzSHPKptg3icdKS5zAayShzU7kbMuxBuu1k6j7X19nzRNinSw6bzertC5X8sJxYnFPqchGFP3B3h9QC67Qc5EoB",
  "key37": "4b6bG4hwR6hYv2NU2pWftymmK8faWC1TY1pntEK6C4wjsfgBNzMCDK9HweA7xkCxBYSxDc515xE9js1wWwZidYUh",
  "key38": "3QZzRAXVwCCnkUG7wHr5Nb4tTKdB4k9rEc7ir2GmeGRGTJy3Z2UgfHBkon3LZcx2bZu3wTEKKWBGLEDRGJ92a16D",
  "key39": "4skDMLtwfNhsFictehtZNfeuPX1p8WZyG4BBLgtbg7KsEJBWJLrVE6rmYsWw1iTKyDiEvk82vUvzz5R7Gu5HxaF4",
  "key40": "5KaZnxVS5qR4j37CrZZFKkfuJj3GJf7Rxj89tVDpGhnaontvbg2oD17k7Vj3SnWnC48Z9a3gqhyTm7tF4BRifetJ",
  "key41": "25hR6rfWnYgfvtT2GNpCTEf9yjHjihcW3MwWyRvYFQkm9FKGD54wrQ42qcMZ9c5XW7W7gHvYnU2ajLW4z6KQWQFd"
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
