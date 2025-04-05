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
    "5ft8MsEjtN9NDtKeX6axTkQV2cd2BFFcBTJnc9NGM7yfP6oyxuCRtaH84fa5S1gxWPvdNPquBZShK12VVJ6vtq72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUZb5UGofsmj243VqtkhvW9z8Qpog9tdnpUqEYzWo5sMnmwjcR86ShC2AXXeqXG1DgHL5WjvuVDmR9vPUFu728Z",
  "key1": "5wAcJkiNcp6b9wBrUYsUojcXQeVfELn2X2abJyLcpfE7QqxTBArkxWn7xFffKs3XkcBFWJbZNsQUJsDQD2zxykU8",
  "key2": "ke82c1fWRhkohyoioHJGvJbSQA98Xo4D3KzoewTB4pshKSXZ5Bs5v64C7BWxf8CeSgCgE2hpRPxycroNpktfcox",
  "key3": "bsjc7UN8czEQ3wN4qfQuBvGgxJgdpZp8wJJJhP3iQrMosG7Dc4K9YpP7E3UJG5eZ5XS7vLc7p7GWRXnLfED7oWN",
  "key4": "3RnhfjbJhWjDUaEic4iLynWiUZ3VQKv62BexS5qi6Ma7LEnSUzMwqrTsi1MAUKthi6HX2C45a7dAcR6ngAxuoznU",
  "key5": "55CF1qFhrwoZiJVyn2CtfDNmPV3P4mrgQRHDyFFpYRNhDiaK6THHbuiY9jg6MScZFGFdUaf2rvKDbBM4AUpTnG4",
  "key6": "2iDYKnsM1PZfvfjvNSas56TvvVP8rcVSZeRJ3iiUnuuiUkQENmho823AbhtRFjZN84yv6F2zRZa5AAKVet4ADYpy",
  "key7": "63zDwPeDL3ABt7AXkE4HBjbS8y1hdiHacmvTqrx58dQx4tXPSpgjqiRsgAVaSbB9F9bQUhQUrXB7mFqTK5mBcgQc",
  "key8": "3L8tCkmWnX7r7s7tMHpwkdohMw8Ri67RqyrErbfg5VYSf5B1tcjwrcn845oqJ8yM9M58ihAqYvBEmvqUXTkCjK13",
  "key9": "27F6dVNzN6iS5FSCEZDZ4YHxkPnAEdP2kLexHca2mN9f2nnu7LJ6N8azQDYcvuLDgt7TCPHifwhYmRou5TohhgG9",
  "key10": "2XoyojFeTnpHXM5VKnFMrKk9UEBgtkD6LwFmnPfbcbLpousSzkYTRxXWVrvjYjCwxH3aShW5UhG9ctXjANqjsj3q",
  "key11": "huxyrosBveoZ8fquGjsbPY6QYqmwjwWaXhFWikGrveGyogqdGz9okqjuX8jM3migh2rDEBHTbTFAJqqZ5jVnwYT",
  "key12": "48YW9mT5buvhtGRRWq8pbUM5DUfTeNQizunm6oo1kBhJvTLXLB5vKd4GuF77EDZyZxSmTLXoH9JjX75rVAuyiemq",
  "key13": "3r7tvtsnzgAqcNqcC7Q966ZFSZKfzHwwd4DdpELaAKkTUXcHzVTEWdHLSyBb1pZ2vqDTFurWe4YXx35ngzXC4be9",
  "key14": "53h9wUA7pXJyK3aQhp6Yigt7ZEu8tF5MRfhtuwcdKC9WW4VifU8mSuoyGwWHz98mx2i8Uf2LJprK7GCtYnMwKHYU",
  "key15": "5BF68EiX2Mimjxgr87jswTYGEZSPPArmbTqjQ5Njod3focAdGMa3GpiUaBxkFGuSh4AjCAmr8Gb6QzNLpDrtEddJ",
  "key16": "ak1N5whvwfser46gikoQvyRw7Lgc9wZSejQYF6zbscxev1pFfvvoEypQQPRaqiWke1SzhL7pKq9Pq87pu8Kook7",
  "key17": "D4MC5kkhTj12hB98yprZwSoTeAQustTA3f2SUrXtk531FMktLFxz4ZKzs1P7wnLC1Nas2bZt2oJVk2DEhvY18HV",
  "key18": "2gRDSaehweX5C9aHVr8cmduSakiLNreaeEmW6NHf2GjSZSTufPKZqgfExoSU3KgckPGX2BtUdcdwyKUKpMLoWzfr",
  "key19": "54PRFMMjznTuNWWAGN2VFqstBys9JjH3yZ1ZTLYo65iLJGUBkdpKced6RYxS1EzNNGkNbLSdH9DmYDfobnRmegjv",
  "key20": "3V12usPiNA6N2yXZx2FhuGBaDmhjHGwai4Qp9V2MY89g3Sg7UKoBAWE979oH4GvsqHuUtvCzcNUL59i63CcBd94H",
  "key21": "5w9wscDNJJSqFoNeqCjn8zK4T13CsG35jgL2fQFShDEsN9ttcjyCxMcVhULpu6zAqgmL5DVRg3smFHrdGEXV5eAe",
  "key22": "4g4HpkRnNcCeaeTemVd8HYCML4AbxFQJ243JW9LEf1pGhJ4Fys3EFnAgaHjHhhnxP3sg6qDRZmRKahTFfHNZKbHG",
  "key23": "4CPRopAHuPw1jGxn5Dzoo5kiBuDsXHrGZojqjBntCb3jgzKtKxPHGRUrjiLn9KYzKPJR6SP2ALURd7htmqwBkv5L",
  "key24": "4SsKEZ8X1mGayHrXwux9s5bdxHPgTfFHh8otnza7W2LHdoAvTeRYxTe6uDedVCTSYUnoN9S1mWAY9B3E4xV9FWzx",
  "key25": "4XpfLHMdwK51WpZ5rjbFDiqhCBbrWmbvGtroZHGqXCLj1cKyhrNdP1XKijH8a9EDvMptPBGgsPLjkvqnbrWZxfFj",
  "key26": "4JoX4YgXjRtWTzsuYEyk8mWDbu9V9s7LZgtbUipb3kNhrvsWdDMU4ezAZdK3zBQ63YRYpxMvpA6h7ZMjtzYdBcGr",
  "key27": "Y6MhPU59yKeSa1m4u5waW9ZVSP7SCtECNQDWh8npkeiJuTQNp5ZiCdp76MVk8PvnjydU1CuPhcG1GGUCbAUgHnp",
  "key28": "5bQMo5deER1f3ahXUgbcdAWrMHzBvFCrJzGBMBFyRCZP9pgGw32iJUUFYKj79KcwREZb5aXfQ6kuVKvWj8sdGJ6F",
  "key29": "2MeWES4Fq4zrKdce8un2U8WJ94gV93mMML4AzTf4MYnCQwLZpBdEMvWVRd7ygdgtHH1nAJgSm28WEonwiC5zcXSG",
  "key30": "4eJZva7evbJEuYDwLM8htiPGH1Z62ut55fC4JYgQx6kgagfHD3ebLAFtFHvPwHGssFMfiQ4J2affFt8cGUWjn3rw",
  "key31": "39CK9KGdXnPqKWdQxJ1Qa3ikt6mgCetHV5g2WgumcGVxxJgYHss913fC7hoyTdHffrF6sDmv3mrJp1wocuxst9iy",
  "key32": "57ksTJ6vByceSj3r4D35kpFaqrwNdR4gpFDUqFNZZ2q6wu5xnpgUf1V9d9jiYB8JwPhS7j7yZjvnjVv6G72qrdeB",
  "key33": "4JWhbiRjcHoTNw4MVz7jJdnqBChgmZtQ1cpRHgRFjWKtouqFM277q3BSQCxgM5JFFGyyYzMSy8NMzvAdK2quPHUh",
  "key34": "5AtWXLgoqEV2YCxdrbhbAxinHHusb3puDNfLiRUFypcRFf9d2MHdaf1es64PGMBHhAswWXwon8MQM4DyQpdjRB49",
  "key35": "3QTt5BKskQRChPHaSawzgAZHj9yYKFaxjE2XoQDJFKAfrrAbwGv38x3AmZKkuC7pmr7jr4HsHaq5GxMme9EgT7SH",
  "key36": "2asXdQNxdbf2izcubCVr2YRpfcf3cFYsa8dt4PhnzPyqmNmYhLwwrjfFCpMuUNed8isGJ4La1hZaDeSiUWcXbrXH",
  "key37": "3RcCPDCwDXy6YU1EnydGzFBjG7yLFDHfKe8mjtwXWHswB78WMBJDo6txgX48tHB7DHhCdHgGKy1sNEp7X2cjXyN8",
  "key38": "62xonqJEFmRQa7d7ro5Ufe7XXZ1e3dMKhZTVVMkpQCSxNDAbZ24v8NRsSummVGMNdbydbYqMWJfbxZ6YzQ8Hcp6E",
  "key39": "5QkZ4A9hAqpeskGDXQQL8YPaUezraQkL56oCR6BQPZNazDfm9LU4EULHBcuaG1qNe2TimBpF2yRkdLQYS1nowbdS"
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
