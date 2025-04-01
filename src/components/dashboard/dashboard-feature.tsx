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
    "QA8jUzzA2Kx6mp6qtprsAwUU25pVjrqpKS43Tz45Y3m33tLSUyEYzaWiEXf2NR5H3atkGi9YQtdgv95d8GAH824"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z635t3GFKhZXstGmUuwENPWnqjFqqyR95NCPYaGQKoFMY84euw8WMd6zTnbh9SP6sYNQAjPCXgRozUmB9yUYQxM",
  "key1": "2ENHMutqhHyDnBT75KpbhvJ37Q7RndnTT8TmsMUs4ymaxWGTBqMWpHbqRh1xqwSqSvMi86Hvbi5kLtZitFBDDnDw",
  "key2": "5bpu1yfNybX3tZoHherBQ25LmzcncyEd5UEFEXzjy6KQbRVJ4QhMWz5PoLj9TLCN5g6roMvaDN46dj8p543VBRyc",
  "key3": "34ZchjT1TLJZcqhmbMk87eHZZUQDvQ23kFXJWZRDBn5SwxJD1zPvp9oQybza3cVDmDAUfHjLFACNFjLYEoQ8Q4Bi",
  "key4": "4NWSCWbQqPSGRNekSEDe8GJW8HVyWoxKwSQzT1RJnpFNSrFXFTFLvXZctm1AHMjyomnrGtoeyHFEXmTWMZLX5LyS",
  "key5": "5GJgnqm8emxU8gUBKjZAz93aokXHDdsvVneiqy3kaK3S5e8HHCaa8srP7xn2suNCjbA4TjrQVny7wzyFJGBAWcj6",
  "key6": "575DbuRZ4HwddHi4Qrjx8CeW4VfmvHHvpAAnN8DAhadJTp8ZMahGUeQaU3LSd2X1vX4GSrdWXD111yG3doR6sYiC",
  "key7": "f2jrLDKnWHSnCi5p35DpyGhtE1zxDYnzUUYLb6fTogcpWZEKBYXVfop5a8RauMQv6JEyWuerfVQv9CuGs9nBff5",
  "key8": "5hckwkvkCyUGzkYkS3YaLuoAjHscsvnsWg5A32qwWyfgWDhnqBYc8F2RNKQcmgQsimmdT78rNbQ2LWZ8cbHCw6Ei",
  "key9": "3P73ZBn5g8MjQWgsUazhrfdcmemTP8GpgAMSZ1wVGXy5UbKd8j6v92ee5Y6hUy39Mj2VtCTNwUfKQ7131e2z5Hz7",
  "key10": "8oLbqauhHR6uZCCSjVgek8BKTvp9zYXJZxpvb1at7foHmx8Vnm8meWFSZoZnXnzQ6AYuUTGEAYYGxwpAQZzuRyF",
  "key11": "545Tw8pxaAQLpZ4ifQGeFQzgFfHyV31JqJVCr6Jfa6GavG9ADv98BoW5WnrvJY5Z5iUyjadWTxkaEfNBSRd5QAiG",
  "key12": "49TdsJkQLjKDehaQUzUo31sUPczHfXK8NBV478SYnaUDJrWM4qM3aQKaMTmpMomm2XAYZhZdFhNpWv7ZbtkrdEpS",
  "key13": "2vBC5kaMw7YNHKrMSk7EmLYg7mitNHMSs9CkNDeRFerfUgo5icKQbHPxq6JdUijkY1HF6fqRa8BjW6knC9ioMSuF",
  "key14": "43NiyU6X47Jr2ccVyfuiJe63jPQW11fyYSkGZZwg151XKvGQZqeJMd7hXjfaxpVePYDDrD1XaujPNYzjC9P9oWB4",
  "key15": "21kqcTuD9AbCJ7EXkLQXYRQJuZYTRtxqXh722LRjRkFV23sqP1X4urSAfDE7pw8Dn4tNRJN3FQSfCNN8ZcYVz22e",
  "key16": "jHfL9tQPf3UbUiT4PgDCiuvsQyf6UDYqH2JHTijAv1fjLRAUPs1vm9wcnLYLJRicQsvbffMP3KNpV2Ngn99SKug",
  "key17": "38uVLmSLtLfd4wy6ns4fhXWoVYJMANAsvJn1DdpaxHPevCQdAp1tHbrV9dG5Kk9a3v3QtizwHptaxoPwaxrGb2KD",
  "key18": "3fWwzSpfC8bDec3r7hnLzdme5sLrHpMoUnMp3u56Akh3xd7UJ2vnQbqUr7EJtBKw92gWvTWWpWpjRUVULkDBXDBN",
  "key19": "4YpHgq3DeJzZruM5FzGLjHbj2uPnr6eKjP8KCtb4ZJMBqNxecwQhiQbbmigSpFWLRvSgYwcDFZPi2mQDFSnxNLhA",
  "key20": "YaKgSkLdCPYNaSwXavidSMAuTUg16ShGn1781WYaCPGJhiyhpivjyQaoHzqbHg8ZDy6wuRwwbfr3PLF2gQtVXfQ",
  "key21": "B1JzHtN3QnX5Djws253UK59uLiBu7x6bFN74rf3P4MU88KjrAxJoArjAP1h2xWbEHn3Zf9jkDWgMixRW7CJDbPz",
  "key22": "3pNzDdDSF3idW297Ly9wmvAhLGHPsRFQWbxkf8GAfi4ycCz8CtyWqDntshYDPyx1s5wEXpDmVsvsmtSTDQerrXKv",
  "key23": "2bHiHhTuBTyqifm6PxHMWtBDNriw7LWPYUEbhz9JckvCxYs3vnXoSmjhqdsP9eZ4Qmd7N6vZD9fUFmcK9pG9bWc9",
  "key24": "2NWTBFnXWjQgUMz6TeRdC7gqvyZ8uuCGTM7m1niCXHAi84gBQ8dfD16EpuKjxJwYzKmmvWXLCM3Nj9qHQnnGcH6x",
  "key25": "z4sGTsKtF8NnBk9FnAss7fGEbhQDy8DNz1sMwWAT2ReRavRLvRfLTbCBgsXwyzmWcnYe86nQZYHe27KqZwhVdkE",
  "key26": "2ByCGskTNcXGvPGhmW12YmNMWa4aCQYs7wZZMyV2pyVXrwJq1Mzu2D7CjegBPX8MzRZ3jrS9HquJoxaZPn3u5BF",
  "key27": "4PYKosksZb7rged8aKJCRbJWxg64D7yt4JYW7dgTbqBnvrVWLXhwHBoQy5VH1Vf82thn2rwfKv2LuxiNtFX4DJ17",
  "key28": "4krdLDb9RRwEx5kj8rtszroVQ7foNgVEMJtENqnB698nG7RmqnLhYK7JaDhMV7bvjLwPJvog8kQpuYKR2DabgD3f",
  "key29": "6i7A4qySxYPRgxLtyeRtuHHpuJMS6Am9mhjZEBn2sLeA6kEKvcaisCx4iK5CiUjRUfXSnGJrJdSrApF1m9WUgHJ"
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
