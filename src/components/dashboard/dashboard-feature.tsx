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
    "2fszsvuDnZzo4CPneh6zjmCqcJCvFApFjRWd2N725FTx6bgHvycfsZucJTcQKh8WHvE5cdkV6ypWJzcDgRCjrBmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aW65hipkCZwvbYUM4jda9bd7urxY1PNT2Cs81NLLd9BMwcmACgK8BpRv3WCHb61eBd6hEiMQ3Q1fkCCQHtcLwCw",
  "key1": "5sHkVY93byc5MHuYW5P3JVav8T6tVYbQDq6X4je9MyjWRS8i5Uchv6E66qhEX4QQn52opbEfMz7nuc1KUbjK6cur",
  "key2": "2g9KtYP5yGm6UuYcAZHTNLGQ92gpqhLpugWTPEc5RaFFokeeEQguKP1oz8gAp8rdPJFQtNBAfUa8VWmh5wFiCnV5",
  "key3": "4pBAxGaxJM3p12mLAd7ojNuAbdbeLM85xPZopjSRe5iB6mr7CF1aDyXYABDQB7yt7dGQhhFWFzCwH4eqMy7x87Ft",
  "key4": "2UucQYtukwWEunzgM9e6GF2crBvZj3ncqFqfs86r5gBBxZoCnW1zJDNV3SwvMmECEwU1NnssQV7dbKwUr2k3vkta",
  "key5": "5PXuMee7FoqvQi8Qqcf94uUoXCUSziVHYkknMZN5wQ4vJNfzanypQVf88SSd1ibq5TZprS7UwE14ZF3CVZRutise",
  "key6": "2NCjMTtPT8rWGgq5GmzTWYSp9Gn5Wr6VbuA1kicVkueLurHhfiNDYYRZiRWoqgZNY6ZnJ1ydrjusGfT85seof1FJ",
  "key7": "3owyCXhYjwUXvxJW69qUPqnPxwPatmuFGFaaWbCNHrhHHBdeSssZ4a2cL79zovCbG9cUB88Qa13WLezJgDLFssy7",
  "key8": "57FYkEdE5kwKfFLzb8Rqj1LrcuTVPqKR966p9vmCeXAfgndMQKVEWHAWV5851siWWE2U7kDjZpYgMC6zERKcPDAA",
  "key9": "5HECRSmrEDz53PM6CangLQGgqHkuAbe9iAdNJL4BBJxSY8KdAr6ApYsMAzhoJH24j9c3tUV1ZphBGU4GWQPtWpRk",
  "key10": "yPFSQDFdH1WjzmYasJ4h2FbasXAYgWHSRqFx3U3TMbAKg9BffhGQBoePNc5N4okzyWcGWLppiPMJQ4HY2FuF47B",
  "key11": "4DLGrMgfcQte9dmTX6osY8EWHYxVV1PtZVKDkxBvTgkoVwUfhPg9cdWci9yrq9z3hSTHadKPozD1c2UJ295NHD5r",
  "key12": "4p3LEGywUeNUDygDxSvWBgY3MKyGJ1nv5b9uwjvRe7nEV1i9Ldsn1X2Hu9QEeriMCbugM4jbsMiRtebZf2VDuWBn",
  "key13": "35DyCjmhX8G6tyJjzZtPd1PyookUPXXg16ypdopejWD9TkfMmDM1LYcCwkoKAQNdBvF2vUmwQzRwnrPayfhrZdSv",
  "key14": "4hdo5BJfoJR8AqUEE2WNWQLCqFc13rvVX5cpNtiASWUiAD6wZJDHfdXkVKWNPr1rZCbNj1qKN2KjmzDe2u4ngoJg",
  "key15": "4TYrqEaBaakWdZpbRR9ChqPaTBYAVioFSAxWiLAfpkvhJF8dGP7g6pF5VDrFhe8KgRr2PN2ovdMVmT3jNCuUXy91",
  "key16": "3DmHbAASpjohWDmaCZ3Y9dj26ju3WJoj3uscDS8GSSByKttTpsTuBUjzw3TdkoCrnZHiiMdtNQR6shyKUyWNVzTc",
  "key17": "5C3muzE3K9qaSqeg3bsfMQhjvpDQozaaC4Fv5pjerMLmo1VeSVE6VQffQXmXajZgJcTT92pM5zVfj6zvzEaYEw4b",
  "key18": "52w6AQXjs5se2wHz2aXvBZUhXbEkWQrKTSRYELmftTSwhLYERe6QWm2Km7gSiYRvtzAqC5MwjTPgW9Y15CHpWoFT",
  "key19": "2AFX9mvN5Wn98ruyG2rbFyoVBCMwsS2MSFAQRQN5cMZF4MV6v5HpsafNFKfofNxkxx4jZeVMyaQGfTTwsxR5BEYK",
  "key20": "4H5W8h9YzaFjBXXZgXACWpmywrsDtk7EWKekfCePd6FXzs924QUvCoB3P28M9UMmPS8kTU4ZUVL6t89xUqvJzyVo",
  "key21": "3Z8fWhZy9wF7yFQ9phhh9NnZpUxpC9oUTsj1dWdvNBVWbPKU5x6xLMfPxiJ9fFJzbZB2rLikJ8FEbSkvbUWBAzxS",
  "key22": "4ziBbUzBxsZVtzAC8NcRouijVWDML1ik9UZgqbFcJwJg8WqCRMfXKLwJx9E7XbX7sEdABuvs2bHFbvLLFrPmGJ8L",
  "key23": "2zgC4jc3NmDwVxhfc5V9ViHE62D8UWuym37WCkJHP34uZJB9SRgeJycit5bircfXaRGjTSWFHayAUkd9oZsDVcPh",
  "key24": "37GEoP9Mw53Qy7aQgmsReDzZpJJP6xANu9U2sq3GHbQ7QicwZNhjnCtYM2sFsu9HP16cY7dv41dC2cQWTY3tNjAe",
  "key25": "2pGd5hrmqkJhrURGWqNes5apSVPaN9cYWjz9A21kn58x4rEVv2hvZDUsHCxQSVcHvYpsAHTZAxYdrC5TVdMie66E",
  "key26": "nWQ2FFSKSty9wGV1JiCXe4eKUhdw2WH3FNKfeAPAXDEWx2R7cYixr1woWaDT7cmmRiuxAiqs9Lf6ua9hnT5VGDS",
  "key27": "4xUFER9y688rj7PxYGhY4Y2rJ14xE2NZsZkpGVQPWMQrYaW56fmSTjTLDGQs5JSD3Dqs75mUWFWESTX1rsELR42n",
  "key28": "5bfLCAKVnyiGVrd3a1DnZPdtbUHXzUitz6wkzj2yDQ6Be9FfQVe8Ns5Dejp8uepGYatGDkTddqhY95MiCcCrX67i",
  "key29": "GNupkifMvD8muYbbTXAk9dvE4JdHPATgTNkKXtp9seYWwY4urWB4gHabZDtxFnf6vmqXg8z3f4SSosYnh5KcQKu",
  "key30": "KgNgUJRzahBaqY52Dv6r5TuupmsUhZ6J9cYwwf6yAZxZqmw51VU9mXtQRpfkM12UcsH9235qNBrm1b1L95hQed7"
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
