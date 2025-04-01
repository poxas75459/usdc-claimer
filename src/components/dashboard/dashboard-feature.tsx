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
    "2JrGEy6pdKpbc5vusgL3ZWBbJH5AFDYE79ukseYXwikh5MkWBYCchPDkfCJ2k9dLCoRKfVfXaE5ijY6TAC41gNnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDeoWRV5v84NSdagCjrA2aA7C93g3ARtPqbY4NPtCDBCLuaamsVVL9eV6ThPiYHdqVTtPQE8YvyeSt4hzgBnViZ",
  "key1": "CMgd4gw9mRzBDkv395wBR1CnFFSW4TL66soNys2ssTycbKVBkqpgZwaEuMzcZjFCtLP1FPkkR2Z6mAngkHTGaW6",
  "key2": "5b7xPQR1o3pKnLgFGhn2Jd126RRYvyvvNoc9cgVXWUR8f2bGvnCvDnJrEqdgLPzJX5jvLKeeEpFRibjixWRXfMv1",
  "key3": "pCeR9JsdwE9JRcWQJjpTGWgBJ7VfkJBSdanTXU2sGuMnyuCpRQsqPLUXYesMhfL4jHfYvfznsKp8MpKxE9R8pe5",
  "key4": "2pnF5p1Tc2rzB2Jfkot6sSetqwvVFKj71MUTXoB8A6UeAdJKwrLbnVQgJj6SE5SLkPYyJBBNsZNZC8wbxMV1CLwg",
  "key5": "5VkDLZsqkJnDtoghW7XJez1vGQKi3eYEhpJf95BjL21Jx6i9Q9ufVc39zYF4HhR31GneTKVwWzuzntNCLPdk8VGY",
  "key6": "Sdogm2abqDNGX4M8zmd5vjTk8de7pcpozc8xAxep8xuTJCJ8md9CEaBxY5EHmEY9oWNxErm3Gk4qdjfNe5ST9V2",
  "key7": "5cYEoTTzTLU7uEd12oyQu2SaNKXy2NydW1VMfdy53vmy1H7w5KxvnAoYTLTCz1VQnTMnENhUkckCkYsAXeEhr1yH",
  "key8": "5qAN2NiBZ6uSYBjo5Wpa3zggB2A2HVUVsrJyEJUypEsVzDUp3avQSuy8rsCku83oc2f4cZMFV72wBLRetXF3aYxF",
  "key9": "5hueQyHAj39jj5oigspcKVAdCooStYMdSGCeNchvt11e174SHYN9Y5wtspMNrkykgy38uUEidrdxwn9ZwNbGWX2r",
  "key10": "4jPnCRnTAdZiDS1i3gYsQHHeqbDHQq6ZQTyV95HAETyLPoYmj8zTxxgn2cUAqsGpCq1ukB3KgBWSY42xkfE8brqE",
  "key11": "3QPEFXUtNia2hx7SpjfLjLUekQS6ymXQMctRVVcoxY3xmfyLuVyGZTsRHfVMrsLrZPzzEYiTwMe3jFHzvhk6WVWc",
  "key12": "2udfjftEmLAP5PNVouHzk1Ar4842GHe8iXxh1gfSvqyFttoQjK72cHeLDAJjhQfQw6XjwXpc9CWq7ebzE4cuHptx",
  "key13": "2pnfgCC4Rs8y4qhGX1z6mXmfbKVazxdgr4SqCLB9CMFjSXFM6JKYXPWz63xsXXgNrZu8PCaMf7bWvDj1jhsfvJ7F",
  "key14": "QWkmh3XA2xhQCEau8DfX7jwM7VCqBK23D3MnrQfd7mWdtc5yzkJro5ZcxTthtF4nw5ar3LCQFDm4wEtKhWggmA6",
  "key15": "3LLqfJppHCh3e9q43HkvXTBi42CwJEvhWNBEtGx7gFyLDGxii6LQCrdKFf67jaWroZbPnN44gcfvmWyL18CerAAi",
  "key16": "5myyE2PkiikpyUvRWPXtWtrxi2hm95t7hKhyhaH12NqUwSc5KcJhdSu8Ku71S36cLU8ujYnrnBgvzSAQV4w4n9MD",
  "key17": "39MbR2sD8vAvTYcLqujaH9eREhDobdUevfF1kxjQe21UAQmkjHXMHhWm3XheBEwqYGPpPo2ZZXe8BHo1N6XdRytF",
  "key18": "4ByHKBM3jCGhFEhxTfiyuCnKsJ9nNiEDUWoVHFsyxJrFNXMsnBqn6amBKNP5XbikuuS2ijjS7ozXpqnpJkVhnffV",
  "key19": "2N7PAvDGknNGSUWenEaAA1NmcLxHJ5RSo6qWeT2Tsp9VJ3T892A9nrnsX5nErDdb8SP9doXPKU5ESMVFEQ59a1Sx",
  "key20": "3yuLr1FgypircrTmp4FCyBbWtrtZYNEZcAx7LFhbSryuXdU4pQHqnYhwQiaK5bqEoBGJcbRSstw1KkyKZi5woBpp",
  "key21": "5gLYpXhwbKfXmj3x9o2DyEJpJbF9iCDX5tkjVScvLe4e4REWmuc9sM5D4B77c7ciMPq97EzvLWNK464Cz2pnkRPG",
  "key22": "ve9YFwzCYBjCue66kvzCJ5k9B2eyqG8BDke3CENhmDKTnsS4Lkjs2gq7oXNQ5SRVeSs8WgekgV674ChcZK8hZR2",
  "key23": "4inFMsK7uj9RQSWJf2a2mzqc7c5DVnVx2zphEw4q3UYHBWSCKTcq1mfydT6PwXxPeWHpZfoX4R2RCE3qFVwyUu4",
  "key24": "dVsosK1SFjbSmzxzWJuqWyhuDPGVRYXLxHWdWduumSAmMzqMKUBxotKmYmFg3gYnmXSauqCqaikq7EuzqmAhczz",
  "key25": "4PE5t6o7AtjvXX72PM4RaYt6xhq2TxJ3mTnCZMWxrcN3P9DYMjJeUwCAxtaQx7KD84XvYcFy1271zpJokypy6JtW",
  "key26": "3tGbDfShY3hMkAUUVCRtfbDFknRRzc5qCDHLipyuYVvDmVfMFBRF5rDWwoTt3C9SDtfLAaQjPyEyeT6EJS1NB8C2",
  "key27": "63Mq2UqLVoPZVV6RV4bKceEdkZ28zAkNvsfJvb7mB6LKGjLxyyKtkeFsnNxWcEgDT8hqvkXb8AmTjXMVNXktMWEh",
  "key28": "8od4bA2jJVHJjVZz6zgawKKmqk9heQSpNQQJTh3JpQmQ3y4odwnpzhreqCe7pS6iaEnykYgse7rvtBdBXTjWuro",
  "key29": "4B56aokZTXW5qbWLoUdSLm2msByZp1AJsZtNvPaexGtcoXEonDZznbNoFX6FUC9jWUWWXgPPtseMH9KiHV6NANxU",
  "key30": "sRvW7Wr26CRT5kkBD9r8puyQA6fZhjo9anvXfWok98wgXwp1WYvyJpViuYZoxh3A4xvLXz9mwG1xbzRZdx5S9km",
  "key31": "RWHv1hJrjn288KwUPKUUybZ9LDaQiQSEBFNFcHscA5aj273mw1PxysXyZRQULzxe8G6zTzhRYGCJkBRbq9zz2Cf",
  "key32": "3KeqfUnEo64a4U1YubY3qoi2onpCEvCgWHAA6QVmbe5BjBXUhvjmfsrC7GYyDgCDMgXHRKWDhSL8sZ5T1HpPUSDY",
  "key33": "5zenvVYKfQSNXTJguNBVybAKh7JsJ5PsAzTiauySCH7EGUgvLdccHxnMSAbiT4Ssdx2T223bBLEemdYJjYJD28EP",
  "key34": "5sFMLrV46wgUQVHozzqNm7rTXved9eqzJTa3PSsb7sBbWYe41B8gfkx3xYVnU9LDssGudtqaMCATGixdMYjC7JrN",
  "key35": "29gXJV9Q9i65PuBQvFdt5qy23RUZqpzaeTCibS2pYkNoQX72px61KjYCcCBz4rikoHJoWMherx5b9V1e9h67UDPy",
  "key36": "49SVDMUPEDiq3RH9G8wyC6Z9r3TUPBXZT8eUKAyVfYgVKjT7UA1uYPhhSNL8VUhGndJXoH2w2S4uLgoN3qF7cQ96",
  "key37": "sS9yDnkfYrsj7tLG4o1WqWjWQLbmgyVqhANwCeAXpVUtu8XPH3zVAWiSHoViaqZcUKK78pQ3ASeA8TwuRr8Eym2",
  "key38": "2DdwnLEdkDpDQwy8BziJSAP1pfPQdh22q9QxvePJ2TFdx288ioGXQnkYCP9aqfqh8EcL7UDmSF2jtJD6fxqzWB2K",
  "key39": "5aD4LdKYt1h3XXK8WeddGMm8TDhsDKCKPkza6oBnERKTQw6A3PEp2UXr4JF58pfiQLdrGP3nrb3YdnQmYRCdn4Qv"
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
