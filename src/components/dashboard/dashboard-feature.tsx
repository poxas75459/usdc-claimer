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
    "4m3ZxSYT79rcGP8YTUK6WRdUzQJw4MNosPZ5hoaatWW321A19JboWmZuxKa5HPT2tNKEkWwhGwbBQ4VynGFBAfkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4boFdJ24r9irdVWWy7v5AE5jubL4q5EXJUxcg3dgaKegGqcho4wYFyhFUFqb6C9y3F81EwY8AAk8E2xqWYNfiwpd",
  "key1": "57nQXpTY63QaaZ8RHiAtazEiZZhvfgszpZxUuVJLQQA9Nb9ua8RTLowkzX3QR4Dm2xp9WpKsfbgyrcu2CfBY3SKE",
  "key2": "5FBXQvKc6wAhZBfB2T1yyMMXSehQEYTK243oAiQzw3XA2LSuJGkKabYsx52KuvRCFW6ifmCPZCgRWFXmpRMMjsxG",
  "key3": "5KHGc6bc9X6Tawmy4T9ABYD3moH4fAkb2sjT8qcog7AXATszFeKKbo1eBvrmWrZ2S6ZCeQFmuecrUgVQkGAtdrf9",
  "key4": "3qajioKUudLngYMbEJDhxVWrkvUSAs2r4vJi7TQ8wRoL76aSJUs9rsc9atokdjK2SMa161Cy161ysx9JjyBuSZBv",
  "key5": "2iWxYGXBiHSnVVyLnBy8Gw7A2ttJJWFpGWxZDneoNjhgxXcmr4Y6VruMcmMYKoRzPSGaLsYCX1QYedUdxnyr9toB",
  "key6": "4nurhi1BLjurMVmD4rkC8XSqtBYXBUKz4k963FyMnsq7QYyihVBwM1LRxGQR9BDQdm4jpXHBzzugzZXSpSCjxhCa",
  "key7": "2ZLrQfvsCsc4HQe2RnGv6kC8tbd8xMSdx9NrRCmncEgzQE8m1Do8axpDJRiL6UecWuR42yKP2AKmYi3u7PzWFKMm",
  "key8": "25fpAR3KoziQAga7Z5sxDcxCgqYqp1YiXzg798ipJWyK3oUEitShx9mAXdP53CAP8XgW5oscwA9EeyZuF43fuDLf",
  "key9": "51LtXZgEUutCv5FKqDxzcVkmUzJRvnCpFJAuKytZNUnP8vxxu8jTJdLT8Lmhs4VS35iiotq6LybNDkxG3xexQCAF",
  "key10": "5Pp8bnAJvbA1coMdSj8qqWr2m4bMAiRuua53sU1JekgtgJsfH8zEyJo2m9mDXSyiyxQifuEHSC6NBmjAPCKp1CNe",
  "key11": "5hRr94ZAQP1hi7GmojjwtQsv5GyVN4LDvTshi2SYvitc79ZznXMWTca47q57Fr3udscXYvtPrjEB28pT1WRSwiNF",
  "key12": "4qfvJadwh61MKhsHtJnyLFmGwjaxyizvBoJRDeQ5q2ogVd9DhmrfW8oqDZEeTqKiKSL9DVvbFh9dTGBJPzh8cEbS",
  "key13": "5uNpLYfLLjkg355ZPjRKwMDdLBD6TA8bmgvhbywwzohuYT7k14esrusqSCnsnUtbJ5cSejfjxrAott6ffNcCoY7E",
  "key14": "4jUJtbxEiJgybEYcB6VTGV1QWv7XJHVx8Nqm9NdAE1CmgNF2qKvdFz1ydZg1DBQyv7mvxBF8LvKKwjgeUZ77cUCx",
  "key15": "NuyDiyDVtpiUTqF4AD9ke9pbjjX4H1Nypioeb1JqwzYGCuTqBKafoe1Lm22jPRc3ZW81hU1VfTshK759u7vo81W",
  "key16": "47swt18NwCzo3UzqTce8BytnvcL262jUw4qX7e57X75A7RtHk4bGmUqRH4yd23KgKoM2kC1BkeGmXZzaQwk8iX8q",
  "key17": "4JfS68mqR6QzgsaFtX6pQF9XbZWixKackurUtdF8wPV9gw4w2r8UtViRSpctr4qVWFhCpuME8cJBPTqjzPkeq3C1",
  "key18": "4ioH7GBxJ66KQrQ2zSuMK4DbrqXkk1UxHTnReGzRjVmwAfsgqN1EWfJHQFE6xq7FT6Msac2NU19cTYWZXoqzWA6E",
  "key19": "5AJH2YZjuRWTPu9eEZcTTa17mErnzeGpqijRCBsk9b9Vgoo3uDJfg9WLZ6mQpbiUS3UcXUVtSLMGbL3ztVkAAz7J",
  "key20": "zDRLCxVi9mom3jPbtqKViRVB2oSGGMiTyWYnZiCMFZSehSVVC3AHNG7qMUgt49KUyNmCBE3BGH7sdvm9YsQSUxU",
  "key21": "4pu8UYmm9KFNaRbZNR8HfxWaJ1NCPkTE15PKgRZJDoPpo4TLwMaGqWYa9ae61utsoadG9bu1DA29iqfWzUFiDSEF",
  "key22": "4rMUxrJ4TZc8kSSbQGXxwSyQTHCt71KuWjZthw9u64tDrmjDB2Nujn9baR3j5WngRvDsYE952gsqRgjctKQEmgwZ",
  "key23": "2uVDeMGdsG3xT7XjPjrV5wHHQskFEiZFom41EKexqw4H79xPYx3Q45yuEEMXSD9brY4oSZvWG9qG5RVEFE3MQJfm",
  "key24": "2NRvh7gHeChiKpefmFMfa9dcNnSbCM2b9wfFsre263KXLBzv6BLCixwQ6ZWXcPX5hYHk96f2i1JkSdrAEXarmLk6",
  "key25": "4qpZaXMhA3gCBpRacxwRwgorWgQPaQKeYPgFRkyd38TJtKpLALWHmfSw6JSgZP2eGHSKgGiXEbxkFNoivBKiuJxE"
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
