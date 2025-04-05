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
    "3S72ZtSdGqNCmdBJVefVkSxxFLWfmX3n8o2RiwPY2AjfXH6R2yE5HFptdzVqeWy8vAMhvT94Xqgu9EXDFgLnRdbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTCo7W2c8ud5hzyyRhAAR6ccTgP9F7EhiCCjbkNzCutuprRSxGSFpY85Uzya6cmVhJHgZfpJU5xG21VvjRmUriU",
  "key1": "z2GokdxCFEYob26SN3x8H4ftC2RVGNAiV4VV7Ugo7QDJ9Eh59CmxZEG11GEMR1oDcQH81RAneFzMZGdHWF6zgZx",
  "key2": "4VeJimo5S6NPuCr3DYXX9YCUAbxmosqckoo5Q7D8uRWCbNMLbRMefeT4HvoHrQa78dgwpksYgLHMSDfGKMm7H57b",
  "key3": "5kN3TfHXGvvJNaCVwiER2ATBtDZimNBYsFqbr71P7hZpp9XndxDWbBuB7pCDb8Nre8MpoUoKLm675r3mM2dtgDFm",
  "key4": "5teMdDH8ZzvkwP7TW5D9JoQejqZP18hpidEYsKLCLUCpsijAgRcUHR6wUwQbL6BhYwXRmPrrFTtR4XW5o77e1m4n",
  "key5": "347x7ghVYgaBEn5YLWAuXEAFtT4ERiqN1f5xGe9efi1R2HiXT7R52PLGrvNUQcZoGVKW35jx8ejDzseV7mMKroBB",
  "key6": "4YyRk9QqTGeS3FG3DdHYmXzzRGkXi3GfBoz4wYbpMdVpMZwgzmFX38R7u564Ww9X9KjbFBBV5mJjcisLdQtDKSkr",
  "key7": "3vMw7pJ8XJSgSfX5CpW1r7wpwQckKyQep6xUF8smZzJcikTCnW62w98P1deuUGJs9XS5NCGzSqjYd4pZaWBcVXwP",
  "key8": "31b89vutvXAAjvABUqYH56pZPrBz8Aembf7PqhrfqkC6NsK49cqTZ2r7E3BwyqtxmDy1S3VKDH71bkgVEidWbkJf",
  "key9": "4g2zJnqkL9zaCCcKRHvXPfKLXtQ87um6xSE6X8BrgEvghc8qWukV3V3eu8UYytPMG9AC15E4z9zQ1dJApkQygoDw",
  "key10": "2of6XJ2DeUBpfPpPg62tviRPDV1JBBZ4FsPWmWLzihvuc5YXxJ837GLJp8WAN8yvow7thLraoFKkixEuWNjAtEtk",
  "key11": "3xYGaJQMf6Wf2KU5yGd43EfiT6yWzRA3XguZ5S7uVkQC2Yt5zLu7bYrZerfGMP63CJP5uckNuMGd1XeDYKWLbHAj",
  "key12": "jJGYMjZuQh7GuBVxf2KvPZy1DB9NeDhL5mZA22Kie2t1eLzYGoP5U3djCeA7ksEwe2Xx9jzjCB6vVyQYWag3DYM",
  "key13": "3BJYbKh4oKYrfXB5e9CEpmFw81qYppnsrFKt4Jv8d6xfAniLLrum3juxUkUjKjbcBR2zmeh5kiNxqtsFVG4hXriS",
  "key14": "5eNmZJLjZipPiD15zD859jpiGUJrY56jXK38jsNeduoMoqKVqpQh4idEzo8EJswaWegp5it1SHffwjTNJwvBrzaX",
  "key15": "BPP4fcefXV5CTaorwbkKev3kja8YtxB5pW91DReNo7QdsLLaUnUbhBoyA81KouNv7ThBNWPhT455feU27c3PiuL",
  "key16": "4S6bGBY1yChfvgftVn15cCqMj6eqVhy99tYVd49thBGsCvw1DHS7H3tTjsdDybkxNhTCqU5CJMVg5AcmQDfWuGtM",
  "key17": "4iMyy4Z3jX9HL2Uve4NzLdMzzDhByMNjJQbKN7msEnhZz1QMegPEXstxanb643Nmpate3JmRroumJ8AZ641F6Gx6",
  "key18": "5oFcP2NHgZk9DyRVqWkwdjbDnGJiZRGS9i9apmVSo5RkFwPrGP5duozkwyExptGAwfVqhKcMSFRGhzGG4VmQUGkG",
  "key19": "4rmX4Yo6TxEcJfiBj7DdWsxiYjpS2dYX2U9rJW3auKMEGuXXoEZLAuaQZf93w1yNpBTz1wXVip5ai4Uhi73eUwUb",
  "key20": "531gTqNppetTuuVNJyqBwhu9vcKNzqPn9ur7CzsB4pTrTTiJk64t2BycN3L59QmD18qnHERUxp9qDcwAnnKbaLK4",
  "key21": "4nKFmGxrfjtUJckCKbx4fAKRWNZTrgM4QfYFzcJTwu44MwjStCcLyG17LbMqmjMMNgWbiA73HzWtQ8uUf6tZdARN",
  "key22": "62X56P2KqCL7bbrxsvEAB9bKuZsJLJedNS2vsdj8GgndhFV5pbyxHJrVYYBmpKrZY59fxZYh4HWeJHJCvf8tNyJ7",
  "key23": "ppK1F1GJnWf56cW4EKLqhC1ooYkPdCBVQqJaMQ4VJS1W3exkmBmxKb6tZEWoWD4T1Vvwi8mFzvKvMPXCFsfBz6Z",
  "key24": "4ohd1kEnyRHwvorT9G1XHLeQ3TAtJA6B2LiCCkKZU4EogmyZNnx3KTZFCZXjt4n4DoKKQtxBeDE1fa8ZF8bu6Ed4",
  "key25": "5PfoWqomksLqrPDQfBG7JQxQjdVh7JUVwpeNSWQTFEpTqRnVw5ra8LFyo2qvphBM91waCyWj5p9HuFe5SuhGR54P",
  "key26": "4kX71G6stKZykNviVA2LTarTwwEh1zTgVZ4qEFuKS9ZmZc1Z7koykJf3A9ZZWd469USW1C7RDJVTH4a3KJtDchLs",
  "key27": "5sX1Pbu8r3C4TDyWbqvPKExD43263Z7uAfpNB2MAXMCxXpfdX9UuMkEGsdp7TyUBQy8ryzVwx8YVosrYsh8VdtFB",
  "key28": "278Fmuf6YM2NUoy1ipgvKhXUU7L2mME6XdstcU2h256QmFZz4tJcq2HpZPQMVCSqumtZ2dQ6KQ6qXDKgbRubDRqm",
  "key29": "5cYEqjJCpQKQ6hi96o4avu1QNmsbWEYU7Q5jtCf4zHNkbAJnPbJtc5MzVnXKiSoCL4PiRwU9ZHJwi44LrsA8z6cb",
  "key30": "5EBUQoJZPFJFmzGwLKTTzCjGyVAJC3GtJW7Wecj1fZhmh8MWYtoeztg5xH852rSeEsjxRcrtJXrkRk3SuQio5goj",
  "key31": "4vmMFLT27DyvwewCrFCQLHwEdeupAWKrmvPcB2iPkq5JCNqjfpfVn7sXHEjviNDHJ7Fzx8vsn9pUTFqUkGejTnVj"
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
