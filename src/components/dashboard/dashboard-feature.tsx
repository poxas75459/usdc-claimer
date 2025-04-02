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
    "5FDEAapqCsNcQrg6RkQpioar6vYwfxDM6CEMzg2dQBhgp1UUaWCb5ovwvi4huuPifYbvA3EBgNKQjmfQwFiEFpdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzW5RcKeMNvdt2wWX3kdF4WgKgJfP8kJmUZPRithYxRBFzEXEmcD2hppazQ1Hbv8tii4E89auSxK1B7y9xTUGoQ",
  "key1": "3rBxvdSTxJZCqdz18YpXgcxntt2iHMYyk6hZ3bPTBpM6wye7AckyTQ2PUEaYm1itSxsonMUg4GGm8iYdYiyFspzL",
  "key2": "56tDcowNTV1D3uzZRYQk1cCPsQM3VQ69qM4hx3Wp5BEvQjMVihfhgehmn7fm9kC7Yy98gghYmSEmBRAPEWkdHgwB",
  "key3": "4fzsuc8LKQGqQhV3aziEaWMxgRdBfY6xwRoc3erjsubAk8BNjXcdgezxzKHmQ3BfRsMsBuJhF8daxZcfzyik6EHX",
  "key4": "545Fd2CFtfy34A82DFuFenxaUvHdYuy2ZdgEaDbajBXxsZhrJRvDw7Si5E8A6rAhqMbF1Qx33vfPnqq5REPDzrbb",
  "key5": "3MZbiAWHfe7cs1uJMUnPRJ6tsFXLhmtsASJPiPWGoz2RcPScMKmmGFoes6KEQbxuMudMZfUeK8zsKso2hgJeWMEk",
  "key6": "4EhjBDhkPc8iQHPLZSoTvuXec9QKgxC6ZwTTRCnQbpWGKueqVQq5GdqkmUtgGU7tSshLGiUWU7DkigoTCbeYpyci",
  "key7": "4CHmhFKNERFdNTUuG2vYij7D3ACCAV2y54KoxZfe9bfNmbKkwEpnfnugCtpV4A6ri1wmCau2HBgTPvgKNmNgyERd",
  "key8": "2SwwyWCjFcJiX8ACP2qFjrdjJw3jGTDCaK5RJGWgGef5SEZ57e7TYdxWnwPDgEFGiFqHUL58aGQvxoYLJ59po7na",
  "key9": "5srv9ivgETJ1UaM3HgNkNt3YQPU3JXgiicDb5CabP6NbPWmeo4CEJGVhQXqoAWYTWgNZo17gipvVqyyt3Tonsg3k",
  "key10": "4uGbyCd3TjwHoXVt9ujoYhEbEJ7j8MU4dKqSq7kwSvVuKZhw6xiK5ZaMDkB9H3NYvMcs5P34GZBvYEn4Yb12Hav5",
  "key11": "4dQdoCYkemNdUsWQJUupoGXe1ZuPxHcNLXSFoTsMxv9ptspDM6HnFK53gw7AhRPfTutNbf2TakuqGLjXX8ZdRmH7",
  "key12": "3xVDLST6qePPA9ndthVVRFEXmpPJKGhZcTyP4XgUsVUyr4HQMRRhYEMJesDQTRXNsQpMvwL6tkREcHimvSRmpC2b",
  "key13": "2RvxmWDAZDM41MK9eZqfzZryaa29BkL9Q5VP9R7SGi4mtmL76o8rZoyMgJMa1j9SeZhYs7ENbVbBW252hQ2TEp5J",
  "key14": "ZyzifbzQMSvVf8mQ7G1f8D6fA2p9cGeDXZUUSSqT3acKvyXqypCHY585KeZKkKwvmXa75xYFFiyqokdDeV9UsM2",
  "key15": "5UcyCXs4S9uy5iPgi87cxfr1TxNEUSuTThDtesVBY1J9WhcCH9mJ5xGRrrmKMLWrMyBaezz9Mfb3njQ5taQsuKhE",
  "key16": "4r2rZenLPCRKaYZwuvaczaMBnB5u8fTZiru1Shc2Vf8U93QjWWPAAjhdU4zuVbfis9qcWraBdBBCkpPn7tCPE3Yh",
  "key17": "pKmvWyYjNiTc9VDVBogNxPefLukJ1uTYwXMBcTDoJfEFtZH2XrPZDoov2iVptFNN9KtWob4KubLfqJ8XyQJWdav",
  "key18": "2e7PC585D5bGzrvsweAxwCxHVNHYD2vzpghJ7Hbdkjsnu8c4rXjRLh7pHuD1zP8Zpsc56NbLwovka7vBhwMJTA12",
  "key19": "4oDx9T3HtAtpvDiGjXLonPzXvptHg9pqdUJ6tQBnfRgt4KW4EBQtfYSZijib31kmPbvBQaeTF5LMeVC7a9tWNVht",
  "key20": "4x2w5MruPgZP86tQcRxrndYCx1jPhBqE4jUMaUFtcL8hBNgvvrASRWnN5JBPY1MWu128gyghzrPaXQcmxnvYDzhz",
  "key21": "5wgxpNNTa9SZAbxCtRXFei4ro1eR95mnruUHp82L6eFrk8h2i5AnkpHcu8Xhxk3FSQxsHodmAr4pQub7Mp9t4Vw8",
  "key22": "3wLb6vh5iSPubSgR9j8HzU6DuftuE5jb4Qa5Rw3TQNaurbzrsDk1aK5C9bG3omNot6gfB5BixcsBZEJvb9VHniAC",
  "key23": "5PU8E46zPQSfHZejR9kEwfroZi5v5rZTSgWp183WJvAq8Pot3b9izkuQ1E4AiVWSXLC35vQSxEtPNcn6v1GZZxPN",
  "key24": "3Ac92P6RHfkmvpe3MrX7sUDsNwvaUydnQLbPggwppabNy3kiFSzaoxVYmwhSh6en2UomiUXHxCza2UvaU1pNHgs2",
  "key25": "5ge2xxXPa1hbCdn6CynSLDFXgFFhWV7X7SnfKTcmubyp9G3oF7jMsQeYesqB9nXQ7HQCMtwEL5rx92xF8VgiouXz",
  "key26": "5j1oka95dPV8bQ2NqJvD6CWFNPt8Aq4pn5yxvgx58KJ4kVWETpgXnyeT2tmAdsdVHnSFgDcdz2Q1tyJ3xQYNpMh3",
  "key27": "4DPbu9LuHpXDqpNKPE7K8iAwwucFkiuKRHzGHm6CTGtHXvuEJX2AGFyYkHfQVHU132EmEresFZJ17qwmkSyajpV1",
  "key28": "2Q6p5WK59xkV5qhNXUzoc1cSPr2nFPA8rrvX6wwZMbZuvQYCwn5jV4AvPjwZJ81HZHx88KgSfmhbsgHyRkgx6n3S",
  "key29": "XJMYCwgJFY1ZnyMxyPmN2eViYsbpT9ZsXjSt5SAMHtCgxRbkFEUk7vodr5GRChWMfJ7jmDjQtXytPwQBTXcCBpq",
  "key30": "54wMvv9wCDdv7XpMzhtKg8joh3QYahr3FCjcp7ocRZog36ohdcZ6Z19ojdzbVwpwuzsmsieedQzMat2Mgii95dzP",
  "key31": "javnFi1BuHgioXnaTH21xtV4Zctpfcg95kRmVs3MGT9Qn3XgQFQCjp9BhmcNXjzcBhh4SobZeKRbCakeqqzZ4aD",
  "key32": "2c6EZu7iGL5aG56xgnk4dE7KyZVMov5Y6m12Sc9vNU34AY79un7tdrYZBEBcyfirc75LDR1PhZQn5Dyb2rSsDN3B",
  "key33": "hX2SretR2hpvgKnmdAkHyM1ohWYNvK8JChRaUvbjpgDMmHm9TSUzPNbm3UGHieunApBTytHZfK2EQAK7t3pVefB",
  "key34": "3rbJ2yMAXqsDtygzpG118biQWfYn3ZAUmrKZwLh5tiiwyX5npLr9cGPfbz88bxYvRNoPSR617JiFxzdjpsfqB7ZN",
  "key35": "5GAtYEXTMsX3ugpYZazoXzLkgsi2EU7G6Je5LRepgrcTvepaxvU8LkYwU4H4AiRy3qAuehiyW4abWxbcHMqTqWht",
  "key36": "3vrsGn1GDeW6r2hC2rnxuGe1zaJ6ULZUrY7scU3JFWiQk2RgFQAbKnKiJQygTdWx3X6dU9U2WmQDYq9wenECxqHF",
  "key37": "44KWeHD769AG7g5XDYwjceDc3wXczb2WZA9jNYwJpVNXEdoWAVcMz1Axpp7t6fQXpvbGnuhNnD4TxyLKgfkjnrMq",
  "key38": "5ynvaRtyLkaCV5Bj6M7xE1eir7sWzJ8giXLs5v9UTD9arJfZox2xkTU9ZrMX84wbWyzpqoNGtvsPpxYqtxA8nGU",
  "key39": "5fpjX2EJTM7WYXwuC1KvL6dC2aCwjjJSXtrSqusTAwWjzqFcZS4LxMggMqb1u7ophWTBHnSnRJQwf3E7Z8o1jL3n",
  "key40": "38gd7v4j1a2jY7MC9nDGY9iQFrkt3fbbRu2ECb6KU7xZ8WJfC4BZNpudQLNmzgVqDt7JVPimXEkQUhvW8qif7Aoz",
  "key41": "5gzYAYkqxwGJVTChi6KMeVUwJkmq7LL2EoRNazAVtLMaLU3C16FiDyTisXG8TZRVDFkfmYXeuuWXbVcFTa24s4SE"
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
