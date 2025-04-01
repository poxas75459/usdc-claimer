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
    "Hda5YbzE7W7B9RBjALYqa9BDurwziVypnnycv8fpF1PwfxVgRfomJvAVpStcCa9jnhexj5c86PmGCwCwtDxA5BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gcAajPomH8ZWdJRd8xMV7Mt6jZMF9DXErBAi1vJFJ4J7PnffxKT6bnvmxonqvJeJ95fRmcg64HqRfGyMT6kiGb",
  "key1": "2cvzXk5qKf9kqufZCudNdgoxPc1MGAXqaof1bs7W6KvFxMtamqVJJWMtATK9TxM7H1875TZnfrj9wT1wAyrQtLvh",
  "key2": "CejMktvYWZaxCa3TMZqbSZJdT2GFEExHpXse3VhvYVfc8Z29Tnm68BDpSCbBRo87cC6FH4bsmZLTrFECy9EoFp7",
  "key3": "4Ei46etzE3zhLmg27qAPGoXiddpYMoGXpj5oLgRvNReYrxdYJU8GXnWhus92fB9XgEVbt1FgQWUq3mvTv24TDxDS",
  "key4": "5wBLkEbzoX8ttDU2eZwSZbJNRXpkMcoeR9B7YLmZDu3hYRnfgWWJNY4DoNwQtXsfq7dEoQbbKzENorHDVdtPjN3n",
  "key5": "AcU9KUDTFnB7WkwcRsedaD2qCxnr7NokLtU5Vc7z2DvcjbzsuBomHkCTGpt3Yv5FpTYk6dwjVFMNhwMGrKi8n96",
  "key6": "4BPC269jCtyQH9a1E3txVTdeHsiPAG5wNgvfdF6wMmhZw1ssmGoTqMZ3nYBpwwhEYasbwU3533XNqLFgDcS7FX2o",
  "key7": "2S6V5yPSYkpraawxY29X6mmbiXrmQpiGbFxxr7mP18Mbnwt7spRr6ppLXMxBii5yj9RFbNpChvwbQkx5AYnBk5Dp",
  "key8": "2FaX6AhmjtB6sJYUrrLWP5JyicEjoFrvCSHt4b6V7FgeHERwFmEnECkAj1MXJziEv7hj1LYjPbL91im16mmfrZod",
  "key9": "AFMrT5vZBeDwfHgWtKzvAvMCpnECJG7YkjP3hZxqgrX5DzsLxA9RhsK4XUxk1Y7YAA9qNqFVBW8s7ZSLcJWqg7o",
  "key10": "P33JPqReL9jBmViWY3hKFvF3v5ncCKUcM3jfJ9vMA9kFJfSwkFshgzLa85pr6WGNitz5FEWHyVtkDj9DMhwkAXT",
  "key11": "38iyjoJvurcQ29tASVH8LYkF68NfVxU4YjQLPMsjZXeDVf8pJK5LQDXemLg6NKGhZ84hHJ8BigiweDddoxrnrJ11",
  "key12": "JQr7EPCSf3UeqAE3omGwTzWUaVPLCrSombc19MPWfoBAtYyAZ54GgXUQuvVvEj2cWMBmUzHWWJRGjxTpNkpfeyT",
  "key13": "36x8yeYN9Gje1wjXMt6iUEJGZTTkrZBzxok1FRPgMaHY7EbsSFFjAVub9bpBDK9giopR2ukJFHe8SvGXYycUPBWN",
  "key14": "611pmXV7xnyVLUiuATzNgxbp621uC2p2qacNXPsXougbibTiaWDQmUD7hRKUykuyvpC3kqNpLPU6mBNBbegR4FhD",
  "key15": "GQuUKMd4SkC2V3S1iZdW9RzDfdz2SnuJB242tt7ho7ijMggsrxUwSSomDDvHEJveE5Ff8DiMwdftrv3hyBzytEt",
  "key16": "2EgMERiAqKDfD5HPpVSYk7AiViEqvXt4J3Zt7Vo59aZycdF7q9jCF4jntTW9J4diSKcvyuTBAyamAQYv6gRVLvg9",
  "key17": "3Bj5KX8f46tDfNbDDJDmZZeUYGvkKRhUao9H7AapqiFtKLuuMZriWZK4orexNQLGKAeqwTJ5aG3xN4thAYJJ1r8D",
  "key18": "27Fz9miB74c63BdqumqK1Dr3yo1tzjxH7EzXu71GMnrYB84RbvTwmuWemPaSCcAh7XjowXpxS5t1iLmtRsD7uY1o",
  "key19": "3SXXZ79PQgMNizhe7qSyLaKXLraMJFrpufNPbVUQMZDnJeBD6qeZs7xc8nRpTNwL6TSkZrqMapf7qHZa7yYZKuVt",
  "key20": "5H7YTwtxGjmFwvp4xzfqTPtRorsLre1RmKUzPMkrmbJyAuZBb2BU34sp2g3g2C9PTVRLfA21KWgEvZhu6TSroaJ6",
  "key21": "2cyjUxUmLDf6RpPyYD8ZCZAgstX4UVwuCAMWchw2TfEEx2o3TjbfBTu4AJbuDsaTNaczELBPamdRbjHAt2K2J1Jk",
  "key22": "5Ter34b38A3RepdpsBcQLHEwN31NTrXwpxFbS6RgGWPMruYgWqazoLeRVgaC2J6NRq3C2o4KMrGWN1cdtV1mpFsQ",
  "key23": "47nFqqJqbHLGd2Y1FajgZCdqLbHt1ok5PJr2qSB3A6JymiKoVXq2d7YBWakYoREXk4u6TgRS4BKKRA1xdrkLv1vT",
  "key24": "5zXcBsTCSJSajbhsTU1qABqoNQWFaV1J11tZvWro6hYTqDZEL1anMhaYNcEk1WNeHeFQENhpLwDj7TxQ7uiKPhgu",
  "key25": "2n1kfnYTuxjjdtLt2mQNT4qsjuc9Jr4ByjBCfP8hdNoYVtkwBbsWStCZqYgur44pD5RF9125D5jeghxfvfxCy5BH",
  "key26": "4WSsyJxbbMJDzTerq1SajRsv8GCF1R4o5A5HMZsdrPLSxmpsWdyiv8KVj6AJaLWPi9AYFVeGi14P1WgAEWDpKLN",
  "key27": "2aSffxRsXDFUANtkUm5pBKQquNamknbKgVb7pGZ7K5yVvxmrJsVS4G1DzBq5jfZL4N9mtYBeVTefMCiV6NC6GGkv",
  "key28": "2zDzPabfbxDJM7vdSe7QZykuJCAdC1rzDsmp7BSQqzAtDqDPpzeAnn1NrmfJY3zkT91c5XxxdKYs6EEa3Ho7gVPt",
  "key29": "4Mm3zn6zt4NuTuowxGkxRPZS85H4f6vHispLnHh9hwygf1WLRkD2eAJAihcuGvHAq6jF5Nw3oNhzJrGqjhoovRE8",
  "key30": "2ocfjvC4czpD8JHmZNBaNWumbaxqJp3EK6zBJv3s71JWUpwHtx64GCBWbzVHTyy1C4sxZSbH1MS7CJ8nwezarhsz",
  "key31": "5Lg4swEr73hmK3etGsn8fBYEGA2M3YZaaP4ywjhHMJYm8MuHDT1YwJ7VFQyPvVjAHM3VJv9xzL9j41zp6TcVuio",
  "key32": "33sk6xmMgxC846aFTCowQAtkbvZLnMDgGkvSwcJCECd18jEPMQjoUa9qSmafjCTcwyXeKd6qsiAiJJpWwsnNWKKR",
  "key33": "3KgjBwh4jxY1J4wKf4RqKZ11XMuNx3ixfg5rJsy65b9Rrtda8vfSTUHD8Hyq6t9mH8qRbERgsUkMJnA4tvqsiv69",
  "key34": "2YPvUnjXY6xW8s1SQCLpM33wNzenHFh6NNTQbtDQ6361Abkd8oFeTrfVrH1nLkh2y3cKxsDaJGpLbwyWgeWVHBwa",
  "key35": "4EUHMnmPZRfWLzfeB6P1wp2Nj4NixqqF5phhyeXyQY2ZQuYu7Em8wD77v2UHs1eDkKYskiMfzQr3ustpZQeJVQVx",
  "key36": "5K21M1p45exWDt4KfYL76VExX9Ng7jYfwHR4wyfAJbupMaWYZMQDoZPUNwZnxoz4i5yMm68B9zpH8HMjGap534Vo",
  "key37": "8pE2LxisUoo56bnm9SirPyitd7SZCvkxVXXoAHPd9YfB4NBLGiP8jxULijQeG8PCNqnHqkLHvX1xpTfirMPGzQu",
  "key38": "4RMd2X3ES3KKMmTQ3iLJkFCnUQ9KF1o54xCj2uAnHqCWnVQKxg5SSGehaAenxkQCCioGj6CzHwXk9mjW9MZrPovE",
  "key39": "bZaHWwVxNSpxEfJrdBhGvXzzkCaMdtWzhKxtEm1QUu9iN3RgkoTKwJiRJ6VkEdhTnxonXwnyJbRst8pv6soJk5H"
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
