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
    "5CuQsBdm7n71M8hFQEYZPhdkoP9o9PN9WabSqQYQsdqiXuE3U6G4gwSAEY4PQdEahifCP9kHxSndzAZtQd2c1mZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qgrHNXL3fu9mJGw6ceGz1sKve4XeV5XvtKoaWq6d1UjWmdW9mZxjM2xceWWhbNLo9dgAuDSMQDUJbbd2Ndt82xp",
  "key1": "2i5hXDdTWCAZRMiEZaoG9giy3gvKwi5d4csmPcWyKSCBrvS1eDXrJR8eGXYtfHQpf6HRGBZce7LKpfTfVmzoVaCP",
  "key2": "4bq4rCKB9HpbDB7prAifx9isM6PvxkNKeGXMPpkwjA1ZWLBRJeqFLTC7UCZXSmBL48Q8cYi6UNhvrebarbgpeVHg",
  "key3": "4MGBxVqYAgX6S1658KCkk2UjWU5FQhTpVauBcfwfXdeQg5YnmH1RqJqDY1WJoZYqfSabwW71CvPRGh7vpKJmZjSu",
  "key4": "5icB1ELgmGtd1ACwUrvWBRxomtVfTvb3DVnnYUSkXWWSHosimUXLkikvh8DNJUtLy1ijQ32B4YozkWkBrkYfFepi",
  "key5": "2AreZCRGQ8awwZQJz83bjFtA8rjExW3tJ3eJqeGef3zwPC8ApYZfw1LwbB5VEt2qEaLYmPUzkpgQoVevoLxgN3QS",
  "key6": "2VyyujgL5UL53k1N7QdukEYs7xrcg3pRRWubKzR6DSCSAW3TVa6vw93nRF7PFQpMyjyEZWivvVoisdeX2vjbe7ys",
  "key7": "4ArbrjicE8x9aUpXPdRnkAaEgLRy1tE7pFNiBsTfvoZfnXY3btfvUUMNWtXvXYugyKhsyKCtKXctTgHnntQZsZCX",
  "key8": "3ZhVgEA1XLxmxJanuVKfyfL1hVDRLgzWfpfadGLh4WhAyCz878Ucyywt5KuL7wzMhLUW5JGN4haEQyj5W4odcouE",
  "key9": "5pZCzY9VYPh3LL5XcEY98TJiKC5g2aCMdgrmWcAeM51GyQrEZRUMhXLzo1983xDMYXiPcoE2oGWpYE36FLPafaY3",
  "key10": "4F45qV5W6j9QJqWn23LoN6MCk3yo5k19CFc1tn2UxByXPENCHPsP3XGhw8ZBcjZsHPxu2fCJKT2djY8QSHmtwL78",
  "key11": "2KiFaurr5qKAEhp1KCWfFY5k5DFDxNre2AxTMAXRESqMu9Y14jhjCjpHXa5c9kULtGPfQjgvsqV72XmTdNNWFy5X",
  "key12": "3VGwiCzpwWr3XjiTxRS856KhCmEufd9ZoJz5mCNx4BsynZggQAETAXtqHhG64XCTNztwnnYSHCHZvMpCweHKDAHb",
  "key13": "CixZJDzYtxkWcUiEEsu5qMogybTL6RQ5pdmwNym7xNqCh4kqRASbPfFcrsuzYTFimufSEbGadWp4kauNjo5xJeL",
  "key14": "2s4Y1oKnH7CbicCbv7H2qPrE3NFM7mZ74EorXRg8uieupqbxKqYinCmAWJjWgpycvwJZK71UbpStkQwQCbV37uLD",
  "key15": "2UaPyULZmsYXFrfN8nhrPQzAmAeHf59u7hEBZFBWZHrV3XthMqxZciTyk5invAHMgBdueaASe5a1AZfPs8i4scZ7",
  "key16": "4rFuFrff4cCFsQi4JTNQzRsjCLijdb86DkWRXcLGub5Xkv3hMaFheQ5qGhCxBuWTJys5k971f1p3YDY9xLgAv58p",
  "key17": "2Qgazk3jWKYzYtwmMX8tpLio96RjViQ4YLM4FWd8BTgfLzjU1v7SoxGMU7P1NF7bbDwQa3adYRy39ZDLjGA8n6Dh",
  "key18": "2g95F5GuSpz84m14qDSYvcDES8NxEFs8XKVf3YJ7hdyLWjgeHXdkz78JF1oF28WGR41RoFENa6dLf2roUFAVCA44",
  "key19": "5LKimBXjxU1NAmynzLTupyXDtdBTuUeBn5yQZNptkuJ8w8YxPr8QLjGNvfDeNEMkqNoasTsXTP7UWVqKk7cVHTEt",
  "key20": "3gE69AD6vTN18WUz8b5DAKJ3PUDyGoVp6LCV9Av3X9iTQdwfi1ozAqTB8XHjvJNYy3fcA5NWyKJZDfLep1k9VapA",
  "key21": "5cQ2cE2kPBHXZffd2sRN223je7MYZ8dR72bW2sUH4ExQKnfJVgtrtkNyZZ23RikWcUSQt8PvQvRe4AYGArQ5PPxt",
  "key22": "mtcbo7f8gFvBeP4DEo7ieMGHJpCoZZnDWF6oUv5jpiPS9ypMmHqYSAJbbaGMTBJb6mtPKVCPfD9DY4yvoBskwEF",
  "key23": "4j4TFqr993ohPW53H9NikkWtGeBAEB4wyTAek8R2au9hbnAyVoboqT4RqgsRjQaUSNqSr3KgxvwweK2f5aUxhHsq",
  "key24": "229RrU1Aq2VcgkhtskbHgjsj57DC6PgPcJKbSfjZWjdQ7tJ1qzaZKTL1w9CNBZNi5SEEmD9ZYsrqyp9ihtqtaw3D",
  "key25": "2THY9h8SzKSib6FSrtk699JCg4KackhNTPiVE9awcyvMXffY4PGDfUBD5sRKvqoore3uUgXLD6jnbVKijky87MjR",
  "key26": "HoCzodVgkSiwE428ZWeCex8rMKHqQgr8G6y8szqs4noZnxUZcSScce44RUhTmWkBwmdpGarwUwgscqNYeZ18iyG",
  "key27": "5HjguiT64zMXXrng9D1rNUbc5gp8djytUJzBTH7whJBNRQwwgYNtyzZ9DnU5PMfyiPJPqtKDptY29ViCP64XLP71",
  "key28": "22dxwfvWUNncp22P6sGxnrLeRtVn8ZtkTzK1fv7QdrhxUVoSHhhoijso2sxn2gTLtxj5hDdGcUHsGHiwCdAZyQMA",
  "key29": "32FqctTUVBzF4mbSvqN8cFz9sFZQXSJgmU2qdyuoPj4Eq3n5HMr1jaXPk2eNA6VB4jHdC6AbmHfHfFFEQ9VhweN7",
  "key30": "wa3WrACvTqxEUvTLZC7EtbWsWXg8AWefAmAUtCU4SeL5Ub8C7ZfH18cRSc6kXrmqb6CdQDjvwtE4ZbBUZkAHsVE",
  "key31": "3RPv8eeuFVuT5K2jkNN8KHnhadxRDH6xtLWZ9rQKrkhyR68Pf95NR9NCEz3cvDRKQfab8TdtgfH1BL2KfJcpfQgL",
  "key32": "4bewuJsseFHmypkofxVwX5Bxd3g8yXvt1hPJ5QA2XtuBeUpKUNykLCArHeFXN46EUUqbkdVpbxEZoiYFpBSGWwrS",
  "key33": "2zy5iksCipRY55rxdnn4YFEWrdqdouGSgagCjdtZvYmDkyyYdbFxmyXawAzYv7db1KwnSGSDcFLGcUqEzzuYeEgP",
  "key34": "3rBpM7Y4fEpo2dyVjcHcxykVJbxKBhtfZBWkuKD29ekF9cwmA5BziE35eH8WpVamC9bK56W3MVNazidgVxENuRwP"
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
