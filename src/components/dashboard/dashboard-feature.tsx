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
    "3SkC1UZwvHe5fUuBQky4eZKwqdgwX5hZXkZZzKn1GdsgKk7LgSYKNHxty2ZeRv22j8GagKxuq9tG4WwdAX4edjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCKTReW4RKEzf2guvhUQM8Lfr7UnhgA5EzTzJ9W2NDnzbKg8sXjFEYeYWVX7b4i4wwsoykQ1RMKVegFMmJHPdjR",
  "key1": "CP4Pa4RwV7hW6RCsoa91Dm7N56GrycULM7rtyF1a3GkTuv3HnT36XEyXqL2nGbP44nSk9YYS3oiLk5wwFfjrgm6",
  "key2": "2mdoTuZS6eqWDSTvrVEipy1ncpfJUWEaDjGfqwzP73Y6RZhX4a64Gg1r3x3umtTkXeyhstYJfyK8YCprVZeHY83y",
  "key3": "4dPAWpZp2PgtRvZveNuciqeW2x8GmKNmbZHZCNPGN2EZvCu6jqVXRLzoPWt1naMYR2uExubktLRQhT4XNnvocsTG",
  "key4": "17dZXpNFbADxusV4EcQQoe4Z7K3rVbGGtJG2uokqjQWWsgGYjxHoeVS1BG75okqNmxzQDZ81yVThGLjk1iDHdL1",
  "key5": "4PeRX543c6BS9HnXyJ3ewqBZUnztdFa6YvbLdCgLbvsPnFcCt2zdvxaACtzo5Th5yGGuFNWBDV9skh8L6shHh6ZK",
  "key6": "fSwXYeQcfmPhWu8MmbL67AXZ3U5DDoozJvzew2PYNTUAaJeDTR841fW19wxipVkPQXrcKfxag1PGqrde4NqVtoQ",
  "key7": "2RAactziTBFnMVLzkbvWHiRMAJGzwr4oEZYnKtUAmgJM2NEbL5j2wywzk2VR4ssAALmTyG7gBoNigPk9U7iSngFW",
  "key8": "395g4pTevCqr28qUEquHp6uR5QKAJbxYnDGszCtAfNCWZDfqxdBdmWXUWwCf5irxgrjKRoCxStziXLAnMLmDdzHU",
  "key9": "g782DmT7JGZ1iEY1cogGUvEQVhWMyWcLoNKQj8vvLBTG8BHna3B282koAQ2rKk3hkMKbrDwAvy2UqyWmKNShuKv",
  "key10": "4j8WurHMmn4r9rsL8FqrQePhsG8s6EHjqKcR3DQoA1oKrSoMeCrrUEixg2cfFDfqoDXWgxEtXmriEtKef7k71wQg",
  "key11": "5aEUt7vceyhWq3vcFkLqqJBC7NaQMEhU3FM5bJYjphXRU2jgQrEry1y1Ae1n4zghCSY9pA5u2YLLDnUeao7X9Y7r",
  "key12": "i6zvE8UqGKkiuwwRZRXzcgSCJ5nEBAzw5nKC55QBvVkruGYYDKbCSTBseiVwAwgp5HBKUtfRsvEbCsEg8fpzZ63",
  "key13": "3729C516zr6UUWsAea9D7KHwEs26G8HBTzP2sqqua4V3d7TgChyNK4i6yYNdUorhgyo5DuGtURAVM1Le6dF3QvbD",
  "key14": "2M1mNwnUGQgQ9nQ2LhijmHobLKADgMfm8J1gEoCFb8Yvw7GGvJdEAnyfEEPoFY9MdM9YWktXEDs8v9vYXQko5cNg",
  "key15": "4HTNUiQhPpLToEZMvLbfZP4ywprZdYaQhyXFonfH7rzvkmGYpgABwYEevCSqJvid2yTMmJWojpYcKNCBVcMBAyZi",
  "key16": "2TrJ6vy28WUMkuYvcBkGuMW92x8YRrVDD1hLvd13uH9o9nJKHjLNQ7ENUv6aFYFA6jNGu3MfGEvCyfgo8mJFPB88",
  "key17": "3iJU34oz9gdi3m3R8seH6dWFB8kprbb7wXba8oXxvsTvMHudmJcUGz1463jXj7wCgKJT2McCTUJXenjtRHwop8Gj",
  "key18": "3PKN2oqaBzT2JTcuYh1TE8xdA6vHg896ZeJUb7eJetULt7FZDHoES4rD9EAarUYt5Ajdjm1qHgdpUrQG7dd7TQ1R",
  "key19": "2ZFAwuQae5E6Pdcdox5UF6cEsSsYXdjoMmtgqkYJ1vmkD4wdTSq9mXaMtscMFaGz1JXvGQw8HHeR6SxmodCGPafo",
  "key20": "4Z8hrFfGgvEuig1jUfhPGj6zZHHyT4ouK3xKE9nGLpLFUQGqn9XTBqicPuTGWpezZ44ak1XCTexBDYZHjh6Efbc2",
  "key21": "34NytQSFinVwJHCnXcHmKmuxLPyqQTFMhxFxL6TEKjBmn17BgA8g7JtCJ6dwTZLr5jXqjQotU9aZcJpRmN9z6im8",
  "key22": "4qEZKW1FumjrkCnAuQ3MN3rKrJvKbXUpsHUHgkwP6RiiHKU5nm12TakKzFSgXWRWXwpzMyhokNyB6ZwxwhJy43iT",
  "key23": "2wEFgnGieWnEe3cyRLxcnpZKY1YbGaZBaRCD14Va1b4vNiZMk6uBnwYHtJSNG3gWv75f4cxvZ4V5Sb6UnJFGdWfP",
  "key24": "5iQTJmLv3sP1yiyzfUyPQeYBKtqTG8ie1hjYqzXh28qn9G6An9HmZCWmBu6UUhTwagjijwtphrAJGGoqvrJ932YR",
  "key25": "2skUsoNfepp9ZLDLizUxyABcRmn4kmbXjg2ghYWqKtceRbvSgZzK3xHm8QWkKCk6oGtueLYtd9aMWx86tKcMQvNM",
  "key26": "24tXzFDCBB8M6fao37QaJZeTPV123RdYynZ9b1Cq7D9ahodKXeHTndVmFhkiDTgYB9jSWDhUD3KZEdzuLXQ3RA1n",
  "key27": "3hwT5oLjgkwL6kg1y89QMJ5GDuFjjnKD9fvFoujrH1VrE8Ts9d3MPMgqgyupXejP631sfH6Nr1uM9KPLVdHcyeTi",
  "key28": "2JNh4PQKWAqHzY3VcQVM4LJKdBCqPUpUo34jJGMuw4bj9tMn4AjQEeua8whviSAPvXT3zMvkoSvoebtxseot33g5",
  "key29": "5SeSHTsbMo9s8Q4cJVqX1HgErYRc1fQUCcQNFFTkhopcYVRYttDmSpR3uuP9drQsj12mgP71ENBn4wx1VKzp87bs",
  "key30": "2SHz7X9coPADXTr9weD7z3Ubv2zQBkthpBcvJURLNYSAHfWgjPNnLg1yQcfz9YfNU9hoq4Bpa5JvaKKoUKPCuLaL"
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
