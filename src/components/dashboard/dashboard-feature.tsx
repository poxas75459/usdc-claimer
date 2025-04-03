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
    "566eHcoNWCtNmnCeVLHPmxWi2NPNj6gZ1bKCUrLVax7eTmAS1DebGTq11eBcgrprW4vSZoRaT71bFhRiys9E48Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PULq75zzujrDqNfzxEzRVsBysdRfpvXirfVk7fkosZE7jBq2EHBoMChPWuLZhvZYCag3GW5zSFyfqdnBKK47c2g",
  "key1": "MJAjTru33atVWRbeWeQQriAWuUH8c3iBXaGzfeV8kTgf3Hyo8DYRzgJBLDcXEwMt7vTXjKMLifdYpL7Gno68BhW",
  "key2": "2jU1WJ4PaPMkXsKRVM189AHmqWWJo9GQsptDKm8WVYAeuguBhKTTiUpWsMaGnt99CJPWVRprP65AqGpqF4CavBxj",
  "key3": "59DxTozZWc5j8Xsg7onkDXqyhMiymecwZMPmmiHC4nfavamHjo1wg5qCvKHvfgSxw71amdrJSh3oaFkM7q6GzLix",
  "key4": "5M6Xgxxp863UYdLuD3pYg6adktMeeHEM8WiB385aLsmTzzx4uangb6wbYaHFSkwEzN3WgWjm8pXpFNDPjyEhVuq8",
  "key5": "2u42vvB8jk1FatUDHUC2UGEV9SKKbtGidHJ9xJP13Azo5SoaChDBPzwUHjNnER7aTiDoS9cGQpsaywPoWm5ikwUp",
  "key6": "B3KGvsEAgVh8vbyRkaRLpUVURGvScdpqV4EQGWeSu87QVCbTVbdXRSz3sr93DpEJtpxbKhynHV4Jt8PtZXfKHZt",
  "key7": "49EuHxQyNhewsjcstusRxXfmjnZopRuLxb11RtJbtiK7RcYjbmQDJHEYULZjFn89XL9wDsg3gemYp24GFcpWnA4X",
  "key8": "FP51rqw4nifYsZYk1hvTeQ35aDLFjoi6EDN3xGLRoK9Gut1AGLU7yDxnBafsCgdQwpW27cUTKALBtEGWRVc9dTX",
  "key9": "gpmk7nEhJTMJrTXcAdSTcsAjVKDjtkcVZTwtUU122BoXDXtC2ekPuLhsyDo54CjbKdTTiQekB9cjEc3bU6UjbxB",
  "key10": "62gAmhHJGb3kRMEqt3Z5kGWqfWWVzj7rFZJA8ctcuGncU3ZGcdnbG3vgrcWtzS1JL3iXmHDUPXfDewLpBNEugJfE",
  "key11": "4dJ1RBYpz8fRbdPGt8VM79Pf9sTqACtahzi4H6tBPqJft6oEFeaU9CcxWCiVz4X9d8fubn9nFQ2qp4PFttMEc2UW",
  "key12": "4my6fEJxmaE9LFsZ5iQ4ZYKZmQhtctpFty7pFJsW4fEczTn2459neLrHjdD5Edz42CBTWBhBgExePZfa7h6Jbb1W",
  "key13": "2Ex6t4wS4kzfmt78ZnFx5MvUAQBU83m8msnLcSxqpwg6kqg2Q68Qn9EjeFkqnQ7AJpjrACs2mNswtxUyEN3f44vH",
  "key14": "5scEjXA4PDptge9wtEyJZioze6yycE3CdhPi6h8RacTrYqFuuZo1eB4JWcXkjzdMa7BcaSbR9zevS4t8xRrSW56q",
  "key15": "4HKbiPPjQ56fdWQPKK7KVEgDWQ5EAQVXeNRL1KFF5K9kjhKSMocj7QdpuVdZQftBqraYVvMUUorm88kgSrJhYZxR",
  "key16": "3nrnRwp2MyCaJREGmQLGvLe7KYrByKn2qpj8QoF3EB6qS4TBCSvH2PSGhyUhJUweyWrAyXvBb93QZLf9gHmS52Xo",
  "key17": "FSS5UWbeeMtoNKnUTvD9fH4MPZtKQLU6GqwJ8ASXFEs9tryGhE2q2ct6PPDV62Lug2gT6k6qAhFyuhFJcTaZxqQ",
  "key18": "dvJ13ZExgVwPKMZ6LWyGPjhnV2g2ib78FjsoWqu5zg62DUADzVYnNhs4mgjg5YwQHwQytDjtDcWwUecyKHwJ894",
  "key19": "3T3RpWmMGv1tupSVE69qgbe8QhD9mJEY8vLc5VWty7FNSiYiWTYhzniyvKabKNuVS1de3mPgsJHy1za6ceMndAT4",
  "key20": "3gFvHjUUm6nns6ZiqdkZcoC2qXzxQsJfVcp5E3pcooiWpUyysxfHXXYwgBBZZ3m3MrSorihrurRQSNsPNbiW1qs6",
  "key21": "2wbXg1psqbD2CMoeB893mTbQQt1Fz7ujeL8Xn3p3q2kTDDRB4wrTegJfwve3f7tAwFvNu3MnXcK36WMaBmaaHoxb",
  "key22": "5UWh2jTrjLaVkA5a7epVVj3M7ibhgBY6LZbbzRcTdf69rT7tCUAzFvUhgJwD6hREvptD5AGPc7zoc6FbSgU4kXWb",
  "key23": "2uofqfrhDm2duorFad3cdzBsxnnSPwnz9zS1Wbo6nfNRmsf5FttNKLdSXPcL2HKX6gfP6KwPAX8seKs3bmrQZEgF",
  "key24": "4LrLXTA3qFv3Tvm4wdkCNLVi7G2X7rfKMeLasnqxF7JcUHhDUMa4DTZFML6oS9eTRhZ6Y9sNig1rcnVJCogSXk5U",
  "key25": "4fwpTUdAWfo8E5PjQddoVXtsMtVaq3xDzKzNSTHvi7Kj4XXcRgvQvHqrubyxhYLTtfKn2MrWsyvdeJeYs8SJqk7t",
  "key26": "4ck9fzLAvByaFsnEUPHjBvvC5tgt6NqkmX5791PiF25sY8CdfNfQgGrToh2U4ZBH5MSMFvQqeyJz2SrWhYf1Ntaf",
  "key27": "oqckAjdmnDVFnLHAnfaxfEMj95czgN9uxjjfvsTuKfTy2vPepKdn8ihnNr6DNpgw4ZSnM4qtuVBCykWy3ZbVojJ",
  "key28": "59C8JxW79wmtAbcoefmqEwgNfJpxaoWmwrscrP78F7sAKAzZ7UJvuBxSN8eQau2n3M91RBQdeXjqektjVAJZpeKb",
  "key29": "WGe1U2LSxSxgHAk37gEdMrXqDXs9VYeb8f6YDji717QyXDxPAsE7eLxRajUu8Zd1p1k3GcmmL2BBEdd5n44d6ZA",
  "key30": "4hGd3noKWgAZ1sxQM8UjKMeRyn6PYh4DGhmdrJ7ZoxR3EfnDYRDfDKwQCsNH6Dd8ZnWD3XrLVtYhToKufCiDheJ5",
  "key31": "3KGsdNpnMiY1ziuvfvyvJR3eRgePC7fWaX4B9hyE8sjAdzxpxN5hGouxM1kqfNFd4kWBZuWaqrHSfP7pGr3YHBSG"
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
