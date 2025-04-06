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
    "2Gt8eZSWX4zH3zX7ymVJ963JdSZ9GxNd1ZNfWPKct4HrPFSqtmxarBMMJGMKG6ipHut9PsdGd5qKiYNJNAZxCZXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbPd83D6wH6UCFCbuQkFF1higeHzckvAkD1JS3ErZ8jLyTFzcqCXV8Y83rkUVZG2gTBbqmAb21b8rhsDVDYmYuX",
  "key1": "3gqS7wV3TaDmthghabRhiwtZuZBtYQBHSztF6WDAENvYMxaNJ4uT7ejqQ7zrzkp9hgohCF84r5P7ipKBWqp2uGb",
  "key2": "3HHQ98Vk1Ks18L3joyEM7e3PDUTnKvFjGHehpuFjj73MH7HtKfrihu6pCaDRahpUbVpYVtfWfjSwmUJ8tJUQjtgm",
  "key3": "3a2Uq39qGLzgQJyxNdAuav1c8y2fYjGmmXHvAcDRFTMAm7YBEhFduF7Zh6jQvTf2XwnGTZpd99gPYLrtFFXWeswf",
  "key4": "4BewvL8Ak34HzDfyRjd2D8FpZitm2SYfQmydU4Y7UEZbFFhUkLjNRooqFbwcTgPbc2kggTJnEcaEPgfw4CoiaG3L",
  "key5": "2b6mgpa6RjvEjYNxn2cief4TTPqUsLa56px8gcXRupKDMXcZDWny5D17cLJgKR3A2HifnKxw28K7WDhmqGLGeVQQ",
  "key6": "3vW14btCJn5oUKR8LYDptzRdZtsuSYLxB9dCyMYTaootSyBFBBUaFQd7NU3ZAZ8tAR9e5ghdUbeUEkrK4WwiYWMF",
  "key7": "JPrWmqDpWKejjuw68arNwiWVCvTMvnDnaHLktm88SetDjr5vAenwuCLivRLgyor4QWkaRrFk8BxkF8oxi3aVb5b",
  "key8": "2QdLZt2e7XMsBjMenJdfhNiN1C5uBgy4UmM1ksBbaJJ9GnBhGGMbhvvhmGzLUVQaTqcYAKKVh32nnpxuSkALfYiD",
  "key9": "4em53E2CgfkSrFseWZB8rQAJ67iUN7rYPjpf36ChdjdBtst6feoZuHgZsppNhrxr3SCJP1ttT13PTeZbHABkUC7y",
  "key10": "NWo6rR5S4NhgrTBm7Sw6gDH3rx1Pmt7V9vv54cDr1csxAUzDccw2KJVst7i57cUMGbjy5K8LNv4Px4Umu5NpREF",
  "key11": "3NQ9zTBgQvmmvXU38TPJABSSfXtQswRkz6LD66MUJpXuC7YRtQGnxpW3DEXEismvcekcHnqYWfDb1Ge75n4oaraM",
  "key12": "2fd3gZyChg2FoShLDwDnVcHNtYoTVMQtc9yjPbBqzvk91nWsGLqkQJKKKMxjda2JUQW9oc4hrkxhzzvxWUuhDRhL",
  "key13": "psNkeWfJre9oei9MhY47Wuqd7BRWMMzsVv7rFP1bVj8sEJu8XGEgXeyeDnTxa4vw6KMd2RaUKTjSuY92hKWbTUh",
  "key14": "UExqrGUNupqyhhwwt64HTGGYrXQmU6TX9woRHJHfey3rnp2rjHvVv6NxW9GywqaasyPfdEPV1MVsWtFNquXkQwP",
  "key15": "38S2ZKVGnvdqdoEMBwEf9RdtmuuoTHZk8ucaQGG5yoWHQcpJADPWYVyoHgpVJGTehAKoX4N5rwtUsYYngyoWGU8",
  "key16": "2u5gqJUay5aq9G5SGhhQdHzwxtmoiJ8D4FbdeGkyv2FSde8ZZgtvnSqTkkF7GCd5fYMzgWKsHxBwks8uVz8nKgWi",
  "key17": "2iersSe4mdvSH2zSALs2cyjMkTLdTZCSf2Xy1j3TRuhtg6gdk63rAaUEUK3GbGh2vWEkzDB63uX5D3wj2JuH3WL8",
  "key18": "4zq5gCkzeSJYQ87bucWiVa3UHRCG9pb2a1vg3ebi2wsNwTwdhivKw6F7fZcEYrAeMjT1u7SdMEaLchpFXeqK2KQT",
  "key19": "5HqGqaWxruK7wvHGZbX8nKwawzAv5XKMxRLoCf1YdjWz57m8VUharFSAHz3ao8SeNqQ8j2j2ftQf7aw6N4a8pzu8",
  "key20": "5a9QchdSo2MPJTfZeMRdqZVxY8wVcZU1NaaAo1VuCfbc7hadKwsjKHRU5rzhA8PTjkH39iDgzzsuv5hQfUteJ6JE",
  "key21": "3dyYzJyFWXXAY9VuxynKsq4SvoxHo7ZNEokUUKmQCQz8HxPAZY9nX9e2TVwBiD8aXEigkYkxVspWZuna9uvdesz3",
  "key22": "5oBugvxCW2FaagpUqY3gvMdSS9PU5QA9YhMkzNqctP6QVs6ZigHYByAQdi6e7TighyKAvWzWDAHTvy3rxVpwXbFv",
  "key23": "2QhRMCsfJrza9ejkrY84REBpd2KMaD4pJwWfFa2jJipP9GouLTV6yG5bpUT5d3srbqCkFof7SBeYckaNGTV59f8",
  "key24": "5pEYgaP3nWb266eo3MrV9dZDi8sQuKsA7oJVmSwVSwWr7uHBtX4gAcYvS9jpHYXDDtQHthNcJow9XaX3K5Tvyr1R",
  "key25": "3SnvGvukM3GvPAz4iUvu3iH55BHk6rXCSGWrsn1aB2itECYHyG61ocK437HXYZA4xfCD37XLqi7b6sG7zNDJcJMv",
  "key26": "24oztzvdoV8idGiHtHMd2stEQHMryyT1cEQ6n3P8WCHEJ6owxS9GZqa4i5HPWFRqpNzFQ3uzhVWVP51uM3HSzNDS",
  "key27": "2gMgSiL4B9EjyhHxuicff28BGcxdf3LXkNAKxMeKjXTxBej26FmVGADy4ahVwERJ4EYpDBDUBCWEU36FaaFzDzmk",
  "key28": "2uKc3ZNK876i5ibE7XAdtrqkBJ4agYFRzic8VUkQobcGP644u7Ew818MKjfxrVFZXg9MFSDFYz7UzReccbHcF8SX",
  "key29": "5gN1bt82FRc6dppnzdKeHevK1TQUCmEu5Nh51D9WUfxmB3hGNi7aUcKAdQMFCTWhJR3FwPnPGEDn7nVPWybdFd2J",
  "key30": "5VGL6cHYYYiYDbgdYR3m7Zsa8pe9po3ym8qEtS85V71CwFVXDDCDE7tJs72dM8AEy7XSoXK4UJbz3Gjsg1nqF5bL",
  "key31": "5r1SiLBa24W9WD9cgZXxUQjAu2pjKN2gi4kZwEYpgmRVvAHKn8DLYncxhzFVfpVceWbvuN9RgRaTtyuYk4UBJdcx",
  "key32": "5tboNptQKLoQv1ymDGF5qxtGDutBxY5UxQr6y6Siyw8MbxX89vVKn6YzMAtnajMqEhZVEuHUYNX2bSTQE5pRUarX",
  "key33": "5Qof93nKkY4MBjohewuyG3o29BzNxctN88aLSYN1Nn8HYG314TYv7SmqRmoZxq2En7y8PFzhN1fWmRraTQcyRL7T",
  "key34": "2SBAW43f4HtAEmHLPj3c75GeanomER9XZXG4ZfyzWnapW6WsjWUNi7XB8MDz3tpHW3ic3u8Ei8ceZafHPy49tMoj",
  "key35": "2tFZAc2zK2Vme6nyNCCx6jtHaaPPtwDVaZiNfsvYamZSNArj61iPs3LPBA9CwJSXPrMNcTTE8sWQSwHVMxohNWCJ",
  "key36": "f6s7NPWfwCN3W3MPk9dmN1WhDuMxmfdBrhFHL9ZBWk7LLZZ9QUz8CfJTvF6GV66d6SjLuHJYYAmfzeYbbww2Kpe",
  "key37": "4x2SmL4HDsZ4Tcfq6a7JBVuvQf1vYovkRVc4ZM3p15XFKD6tQgkLiSUiz8eSmKwPFzghXXhZH5PwvrnRfSogZHCS",
  "key38": "3LF6tPk2n8W84qGjdkp3PQqhWtgbRz5K1dHSR3ABcaii2M4picCuL2mj12Asd233rfLcJbECReqnKQfVAD4pfbyh",
  "key39": "2L2jB5uJbaTs3v4EjLsuxxs4NrnE6UcmLKc4DZiZ1z9JnvnGn1R37mTsjtiqjgn3DDibRjRHNULFyWxFR75VjHsr",
  "key40": "38EcshGjNYZujrcoNHK1FajVrkLCsqaqRrUqCJo5imAxQ6pwsJYLVXNjPevCkCAHZn8a6BQnLD3icQdhDgmy4mtd",
  "key41": "4jYQ3m6mqD9aVHBWdJpPc5mSbgtyeo5E9AuqDU2H6Hfqs6PWcA68oqcZ2Nzsi8RZGkxHN8wSw7Qd8Q5Leeq3REoA",
  "key42": "3Abb6mDfdM1vtKHhZGBoCf8SbF6TXB5gkwnxgRNCdE2yNJFNHM85fJE6jaHBqHrfXdFxFPuv2AUKXrSGFKjApv8r",
  "key43": "47H6LSZ8XLMT59S77biQXwn6RbuypNbhjfAGJXXjfHsQ8xdbvyN9rUkQ6hdNggHctuPv5pr8GZm4acvsmxyvZUAk",
  "key44": "4xYudF2a3UjwqzSma3eQsZHT5ruxYh31p55biSrjG8LawfLifmRXAC9rEjhH2dFee3DcyEoBntMz25NZiCcxLBQo",
  "key45": "5Mi9pMsPQfVxUeJzEWRUwH1Pwdn76uqFaE9JakVXk3t79uPY7hx3YML3qVSiNK9CtQu2H8AVV8Gg4QzoKwsx36TA",
  "key46": "2v5bkmTXtahea3h9sx1WtrivooEQckXaxkXR1brYVNfqsqEJJcN9ajdRcBhX74E4YnNGVS9ru5TNewiXQexTcNpM",
  "key47": "2NzYBefpmJSL4W2VpkXv3A827EgYZgVRwQNcYKxPsrGKdygaHrPSTgZTH7CSU2383eKrGK8MEaYHWpnCRRHbgxsH",
  "key48": "23qfvtaBmDeNAMV9gid4SkCRX82d2ReVfD9P2Pkg8YoPeGofD2nwygN41S5dUmPZJu9kZrKpn8fRXuu6QqLa8v1j",
  "key49": "BgoDECacJg3chq4ci5XfbnVTWeAHsQY9qu2wcxu69VkEczv2e6nARaB8EzyJxVNesYKAKtBJMhjNqouyrB29BL8"
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
