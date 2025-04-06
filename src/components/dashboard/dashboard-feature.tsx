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
    "4Mzxjmrggkx92YCBPBDVLpgBsrBzBkynuFt27moKHM7c2g1xMfo7LjxAJmTwHqGEXX3VcoQNjtJpJF9R42WA6PnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3vdrRCoyYuKyfWhLAb6UWx5SuKbZDfqvFxoj59zDCApLwPcFYLF7T5HTnmwhfTc9RMYCsrWVnQs5cbZFZc92rW",
  "key1": "5bMyzvPp8DaBJNZmY4qgByQwagxzwVd1odVWL2fS6mi3UcsxF84bqYJZQeqbtE4FxDntJBDZ4TcKec7Kt2UbqkpC",
  "key2": "4hvspj1USU65Kzg31Q9MkHjzdavzoHdavKt76BCumgDsi4k5k62pDfLALYwAVk4cFNUG33oSLpYyGXaTCS2JH8hi",
  "key3": "2veasTJYLcTPYnVcGGFcNpG3dD8EdR8TV35qAdGQYFoZpnT5GtqGACVTLPkjBgP1cxV3KuXbhDvZDgm3HZyXADtV",
  "key4": "QAzJhvic8u7n3E3t7yNiMnNcdopfd14sAKH6qfBUCysw9EbQouu6RiZRMZ9LA5vQjyzP6UzL2Exk8p3vE7RjMXG",
  "key5": "4CWyD3Y8suE16MeMLF3XL7ZYH5bnryByQf5MCoPRxidokGZFVpf1Ywuj3quDkd97skqpUPAT117EAYytYrYmHLjx",
  "key6": "bHQTgHD7wBzLu5c3iAbVqP1nDcoZk1gD7qEHGU626t25aSUpYECzhXUzEy36YTGkCmsjDZt63uoGDe2cpJTKeie",
  "key7": "3SZZftLSrsGR9Tg5aMJtAzerb8v9ngvPnTFonR5Rs4gfrvuBqLRYQBNkuCJRf2VnorGpyz6wuKAusFYFGFyFoXcU",
  "key8": "4cspDYHgrzSP2ikh8riuaHh1eYuhkBUSNXseYKPGMiJRkuADyn5gVEkKKEWuut1KMXZZMMZbqs4PJ5iNRge8YoqQ",
  "key9": "2wtT4XrsoLxcgpszCNGu8fiuqgDKxhH63KZBbP2eZ2gtokhcSmXA9ajsPqHgh8JPpXvNxHibKmr6ZZaMs12WoiN1",
  "key10": "4NRrZbc8VfdihEkt8yzZyWqNatewRLThso38iCMujLrhdXr2vgpA6vSJbJYhHoAKqeKfhD7y3e9AZ7JYTore3Qy2",
  "key11": "4Ca4AkkKZXDJfgjVRxFbiXpMam1jFcN6XmxFurj9PrvWvxy5pMkq6qHiVYJXAZa7CurS9F1C1bAUKoBmhZjrAUea",
  "key12": "3a7tdvma86GFCrXFHrQhaCp4n45CTmdQH3EtNHnqSS5CUCra35MQbnq3VorUvWESPp5hjtyQnqdY5xWxFzJSbrV",
  "key13": "ZyMuDcPhaLcywnJq62NnLrtF2jwHD2ZTjTMjmW5rEZ4ia1MDSqHvgUxLiYMUaoP1sALfS66jxMQbJsJ2kSGc8qU",
  "key14": "542qP7dUMMjAGs9XcZyorrAhv6auzYnTJwnr9VYwU96ZpQwUN8xQppmFg9xmV3A2P9xX71jkiA5FTGyXZGD5Euvi",
  "key15": "4RfsDknHoWCqUr94S7A4UogsmNAtQPBmVqB6AryJGoYuVHHEHZqk852MEHNYbzXXzURe95gDtbbwS4PNPpRJvk2P",
  "key16": "QJJiERRENjQkdhQZbqvDp4h3uwTKULDQaJ6cDho3eyaJV3QbYZGCR1CgAEoUrbJj58epseWUzdydgWMMwmZmYis",
  "key17": "3ERL8C6yNcXN1zvjfXDqorDK9ughXBKyDziJEMMsCSA7NPuf1tu3RYAXSKWimpNa6wLRE8yFotRJ4hz9Y1vh6rBi",
  "key18": "33nsT8XHcRSZPcvSu9BttPqmqzRnNaMZeaSRLQ4KuXJdu6o38cAbTHGCH4fqaDL1MqjNkoBC53dmApt8VfJ82B9N",
  "key19": "5Hr2hKhtboDWhqcffF6E1VQ9T9vcedHMY5cFVzMa6M52FUo5w5ukGj21BeciXLgGJvMZv3GeWCVdxkDkQkZECMDd",
  "key20": "2Kk8hh7KbtRzVkubJzUZPPrfjot8wmB75bwweUzUv6XGHtTDe2g1Lpn28U9kfzXoQ7xg8YmLd39xpzHWjKw7s1Cr",
  "key21": "42LJcjgMLUw8QoBaMfNwfQWTj22B6X4FkQinn8dUd5STMAjPzgEWSboZgDgeQ5zusFTTBh35x76oBxS2pv9tFqFh",
  "key22": "2NZtADfuHc6NAiAgvkUK2Qr918HDWeVYZ6ifKT4nN1aLNjSAb6oRQHv4p7o2cxoa4cwY9o2WjqJKqEX1PhiAb5QZ",
  "key23": "5CE8Ax59V9TEGkTvAd7b3hzvi73qWK7Gkfx8ptiWxF2sF7BdonGKyHmq4xs7oshSfLYBTBFypfcF7k4Jf7KCymeP",
  "key24": "4RwVKTw8881eupBKhhNJRd37rUkJyodQPcV3Hzgj2eKP1AmryqqNpqT8zQyrAbCSwNHiTAeMqiRBQ8R8fgTVo84s",
  "key25": "59whD9D5Wb7NifBHu1795Lh5iAAt54oZKobcFp4YBTb2AKsc6Kv61tjvGbJWpyJjwdf6k6SaZTm3KiAFnYvfZ8Mh",
  "key26": "qownDbtbtJauyQ989DoCRESmwrNjV2KQ3FuuL7zgb8uCKav2fwNYVCkMjKrPZAzbSqdAuwAGHwzZD5wkbLh1LVH",
  "key27": "51bn641euKZGcjctoJqEE9ZFGuM4zMsZYnMrCeZnj8AbsN8QUfC1UXPEUiD21qC94DrMHqd9zn64Ye6jo3cNq87c",
  "key28": "387ATLjnuKcYSDxWD6SfKvTdtTtfQLGkHmnoz6J7fuLQWQ2VMthZKQcY58bkHKn1pPhgsB4BNj6jo9voWuF7bQBV",
  "key29": "64pvay36CaRhCj7HHLJv9SnAntSC9LNSigXBJBRawjjThBkcfcZyjivSZt9PNmTuS1ZwJo5Rye424ibG5qNM3kfq",
  "key30": "2C9kvE1radrWpwFNz2BUSN3ZRuTrtqAtb1k23TuJkXug3iKpBKGKtk3vsuE6DHHinQajTKXAYNsgVAXUMs8hVKut",
  "key31": "5RfEeHxVhe8dpHMFNL9MJHmEzfUYc2hvmsWJBvP2FdWowEPoeiQfYf89CpYyhUVgEivp6f6hWdYLGJjQJeGYwqUS",
  "key32": "4QLpijeepaQofWZTtuWcbSb4dJHVMVDmAF9oRg1QQurzxwVHG2LRVsa7f9b59BEXWupsQxVYVCHqVnUhroH1FVr5"
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
