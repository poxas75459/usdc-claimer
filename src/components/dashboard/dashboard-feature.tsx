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
    "5adWG6yU5EyP1SBgbfZJmJmVJaMfQDsLhz4mvqpXi2unQg7TmJMH4y7jwGd7bLCjL6VeZSmsim6YkrWvMVU3XcwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lfpa1uZNxrYrvGNEnVgtqWSZRHXQeZZEGnCFTMYbZphs5KTBGHhVUHtoyyrRm1iY7dP4i3CRmYegG2oqXzikawj",
  "key1": "3k7cGDyNUr9WAeQV9BpVdtEMeZ6mWzzu4hUeLZGqf22MwMuqihKvurYJ3WEWaKXitPMZp8MnEdAN7ynmxKfb3L9i",
  "key2": "4aPA7PWxPZzZGc1pNwyWqQiNCvdXTMkVky6HSq4yA5Z3CLavgpmsXA1WQmHDr1NCHGuNMSdFjgiHcNAQJAesQGzm",
  "key3": "57r6DNN6e9ZfbyWWR9N1wvtZTyQJSH9AeeuSamevcrtQmgz2Pm3b2MCzQD18kGaBBCfAViX1FtLGMYP7HAM3E7Xk",
  "key4": "2E4t9K2awpJhhS2LrqZGQJ65J4KdVdss3Sa4SgSnhB9NSGE6r8b6KHczqcTVdgVbJx77SRbv8M3mMs9KzSt7zHe4",
  "key5": "2AHkkttNDsNGs6wmEwzdx1nH9zvEtFh6Ati4mYGFf6vG9TCpmfR9p5DyvFfqpQJZiTZnKmJpMUGfg6qWqK8aTovk",
  "key6": "3NAX2Xy3K2UbuPBWjwS3h1nqEWWcWAcZ41vRsR6e9udsmr2RS45aLmeMqmz8yuqEMv1CQ5JdfLgZFZnV4Xb8f6GM",
  "key7": "3VH1q5PcXYodtcqhb1FQmk4Xd7QJQXyhq78rREatKSTrDGQdQHHRY1HyZ8iUUF6C72m2AfBKwaBnm8ivAGPEVBTV",
  "key8": "3VwEssQPWCpoFZEoiCWGjJzvjqg64nUoXEpYDUa41VKa9A9xrLyz3Wix7Br9J1YTbkn7kwZ7mpnswGFfB4tZ2yEd",
  "key9": "4MGqkgU3PBrWhEByL1npEr66fQtFQvSzjxd2T8T2xLmx3eFB8dvEuR9QBcfvBh5RC8mXnzW2S8gyyrb41yXcS2ki",
  "key10": "4rwWevsXLFDGYAtm5g3kqiUM1tVNzQ5t7b3QJJbf83Ja4vaBkggCTrK5HJ4SJa9WaZj1TTZq8vNrYMdNPDC35B9V",
  "key11": "4oHHACvhqNuWzQJc3swGKTh7wWFgsjHeLvmvPmJi2hZQ3aD3xRVvcUXNszdqxa9SQPLwuf7XoLtGSinfVt78RNus",
  "key12": "WME8WRZKs6pk2TQA47Aaw9okorrS8Z2TyBGVHFDpxXyHQqrM4rVDQzgZ7zey6J9zZ3caZw4vR75LzSzGjc1rojJ",
  "key13": "4x2o88bgbYgjXE6RKuf4bGDnWgEcdUZ8rbR41RRjzTFxcv2L7jkeW5e7s7uQJmtUBqCADLhAVfwgiStFWy4YybMW",
  "key14": "g5oZnn2rXufkTxTcvCvm6jEU2LdyLskvNKCgzgktoeLk5jTDWwDoJ77uJ2m9fuUtZg8PRbAN5VJfAiYVrjrWvzV",
  "key15": "3k7fXoyYfrtNjBYu2FcTtS26mLyms74VwWDgVajUo41YBe8HS4cRUW6sm6qN3dzHmQbfHtzLE8n2Cf2ahwE4JjKt",
  "key16": "5b81SN6WAynqWiAY5k52zdVKFZM2KtXuosAYZWGsszoAiYU6efMmmefHWyewHaDTm6SRG5FkVQKKDfrJtBq9WLZ9",
  "key17": "5JsoQcT9HiPcEHPAzuttgAvYepZciKPQfSb5kcpbYnAT6wtNeet6Yn4cdHWyRnkYYyojGnciRCDVgZEsCSjrmPJZ",
  "key18": "xVfM9qBq4mBgSTobnpjqQiH3XwmrDLT3mnjcTZ73V1wWszmhymtXr2KV2DZE5NQhZL1Mn63RTenA3c3sgnQ5dT7",
  "key19": "4wjb5uuNbL5hiXo8625u5n95rrpjbRBs3GkX8NCAd7mK28LuWGDBfCBmJdR8nk7C5n6uJHBW6e33tLqLawTytQas",
  "key20": "33CLMSDqpKu8d5ntPbRoUb7VCjNPchEnmVvWEHueEJNSfpUB2SYMMywVxVyprJpSv6qkpJRMDtS7yhAnXxoAQdKC",
  "key21": "3vBxzhDEPDqwG3N1EcVVuHWFritm2p1Gvmg54kBdfYjpGupDErtWtFAKCuiqBAGyQ5nJJSR7WGxX3sY9YmCN2SzR",
  "key22": "56ryAB5gmtat88NKGVQdzLJFAgXKa5C4zZ4J38jxrrfQqHmNkGbymSC94SoHHFYbPz3w2yan64uDAdpd8MhbPa9i",
  "key23": "2x3m4Qsh9XEyNSNh7MuriorrdYnf4VYcDaKng636Ag5ZfJtjhGir2Y14DVPHNYRnJ9xUbPzxMajVL9ycZSKPYhd",
  "key24": "49u4RwsR3DpAcP4o4KbkFuQ62mq675qT8Py6BXNQDwUMswVZHvNPue8Fn7y8sNZSGHvyWiDAmKmkfn8jUgUKRpaS",
  "key25": "3zSv9zKzVhstLY8hCBqd4Mgkay3cMcyUtNc2YuPgvXwywQqAQAcZDEP4oV4oWFpKU2yBcLYcryPZryyusSwQkzwn",
  "key26": "3MeFzzz51NJPAz39WUmAkNT6RBbSaVhzJsiWq32cq4zSq4TXDaqKFT8eZbuaa6S7bcRL2ZWkWhTcFcbJHQGm6K9c",
  "key27": "3aHJDuQms7Kf3yhcbmT8zXcxfDDJ4hHGNENKzGDsANN541xxbtNGdg3dbz11c9YWUbXYG341kGL5j3Ck5LrJsUi6",
  "key28": "5Ca8e1F6xrYCL53xyVwa69NiwQAqBZBohf1i8eMtbDe48F8qWtpbASwPXioF46yDZcofrjuLU7hRYHrgTcqXepT"
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
