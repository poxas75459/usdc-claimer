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
    "4VmAoHzwh6SQkUohVMPspLv8huvucQA4zoBQFJfQ2kC6KYKsoanBF6zySVH9ayNF2129ySH7FE6EZs3LjXN2nv4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwAh6ME57G2wqb3k6ADYpUZRzKiR2ZuhdRk5HKkh23YDgv7UtCt1XEmykn59gtr8pdLBG5Td9m734TMhScU9vNV",
  "key1": "4UfsUdqu7So3HWqfZRzJ3v86Txbwd3tpPu6ZWanf5V2GFXnvUwucxhGFBzCchQ574gdw4nYyKWLwZC94LFCTKRYK",
  "key2": "5RxUzVxecyj2mZUzB6m49Jk5ju64j59qi9oALrAP16sY4RsrFgWHkcZkFmPH6dzVzEBA9mE4tFyBUex3RxsL5DZV",
  "key3": "NF3W4mdeYNXjzY7EEzkaPBWcAX5WKTD6Bd9pTufLAPrxGFyf3mGL24UK6iDuDmmY43kuXbRPKLF2bam97bwGWDn",
  "key4": "5oHMgnFKnHnWmZu3A8U1eJewDmiAKvj9Gm9myNx7nWFMjKLURbVXfcjdcyeoiQmJ6EcW7mbG4QmXyDTa7fLyy7bR",
  "key5": "394efgSA4ujaohzBLVGma9SVWrJnyTJnX56dN9Nqo4tjeDcMAdqQKj8fm793LYXHh86KJM94X7oGS7QqYnSTrdhP",
  "key6": "4rwA8E7fZcrNgpCht8UtVRwMJ4sfqG26375LZaASdJVL11n9SMqEroib3V8MMPT3kA711pzakv5Krak7DFi3CNvA",
  "key7": "4N4WLdRvbthJb6sMViJh46wGvCAx34jtjR6nrQkWBiuzeoRee3j3aWRKKJxvnM9u6qq1VcUUSadRDbobMioxEuVz",
  "key8": "5PCzqQmFWpArDHb6cSQvuyrASTbJ6Pg5VGs1ag2Mdsh7c8car7bESFAQiHM6rfwMTwgK7xfZyqwm9t8TATaid6NZ",
  "key9": "2KcyZVSymt4uPpkTNHSg3gWUr7GnFSSrqA7NgkY9DLEimG7NHGP99b6DZ4zCa23p6gnE7EHRjbcpKkLfRzNY5cQ9",
  "key10": "5ixWo5ityZeZf8d4DYrpvjbB1gPkqExcQJ5tYcNDiqPMA8wyVLyEuxfcJNe6pAL1wzk5BJvNZz9Y8usAxfzd6wfN",
  "key11": "5CrSUmowSfRkDqk9ZGhrfq6dhg35z76wZXmqCaP8WCReEJFLnKuPVZNM5h8FPLfxLnHUnGGicAjvWEWKzZwmd1j3",
  "key12": "2Jguzgz895ZmYwKYT2YqhbnaGCz3c3a5n9FZS1bSqmyu1rwo3oVYZNWij2uHNJzpJTW1gKfX6TfoD1uqqV6rfRHY",
  "key13": "5fHfvMg7dvRUddfMaiAFmmvvkZTaHgMgBMtEfR1djbU4Y72fkuT2xma445QaUUfGqC7ofeex9GYJ167jSV4Tq6v2",
  "key14": "CvVWPP2bKB9GnHZ3Pf31L7K5XrDyzzq8mbsZVvyHW5hpjzEX93dq5vjRuKMiTtvpPj2Z2m4YfdxKEB8Wpbx61sJ",
  "key15": "uUE99zsCTWQWqAH9si41rNUyUJy7okGAqYJPj6MyJJJXqMew3JCt5nmrC3xnWjGAUr8pBiBkTpEhURMdRJdEpYP",
  "key16": "5MPcRgkrqLpA6tPXK9iTagHAbvwBeUZR7UMJABWMPYQ4ZDeidw5Fw8mNvAe5CmgYZzoDghhXPAPkoswRihHrtCjA",
  "key17": "4PeeYwwBnVh1NhoQgmVMpz33BdwvFxViEYV5yK6oxafU6qjUUqCLYsX12MVPh37E3L1MZZs89ADuS539g3urdPK4",
  "key18": "5K5kieRXo1yNdFjAULqUGYzKje2N2F3B52zr3qJA9wL7zkmFRnWjNifpdHstxgWDrRvd12n6Aue17MyZB4xs1niQ",
  "key19": "2conr9LpmWs7iTC1UhavFabqhsZZNtNfgYrE49mS8yRHZPKmcE6aMAEP7vzGU6ztB4NBvYGYbSMNXPvH7eFBEFqA",
  "key20": "3FLcEDgqBLerv5twGwqFcW2L7hT9zfEFyp3sj6Rr2SiDRVjy2VwuZp5pcXCrofC1MM7mKB7EVqGcqEJiJZaq9Wtv",
  "key21": "5oSJvKPrUk9vkUAcEWw5owuGQP4s8Q2LTqd7hc2uQzskq6abtv6TXLa9Js3AKvzZNitDd17NP4JT9FEi5ffNmLhL",
  "key22": "qMYSWVzNtirVnPPxL8g1tw7MZZGnTTLxxLf1Bg2gZYUy3uW6yBoycY1aMg5Sr7ymprEvEkwzkqKnQyGhBBWGqcx",
  "key23": "5QTwfFnQpbRLXJzLn1PngK3yVMZD5hzYbCGS6K1wrbhTydthSs7FXqtAiJGqbGECjidCy47VJVZ29QHma8U9HTq7",
  "key24": "5tzxLr7bw2FyEF2jerLBBTgw1LGuEeH7ugf851BaXeiNht7zagavCwHHRuWqrhntEX1nAHCWWvTHNFQJVfhwuCA4",
  "key25": "y6XdEjsGwzzSHFL8XBJvDqSfEsP2mJ5CrrGStUGRYMzpumncgCm6K2gTaoBQvReFxPHLoGP6yxCTVVURq8nYxHo",
  "key26": "2s5gTrCFWsK6nykvkCpC9TJ29csF3NH9TvfteEPqquPY42xgmu3q9wR6mPKCsepHzsNq1mxvrk17vkXxMTPPJNBe",
  "key27": "RCMbTGvkTZs451dZ8L5ozkTQtZSJoAmjqYbwDyVa9L3gYPeh8fbzj9w9FJFX8wGh3PzvWMqn3WMcHR4DaAB4k38",
  "key28": "3e3sPKMD51sqSp1hzfE5bukLXPmKbqnHwraSLwm5Za9UDjGxqZx9BrPf1VT37djff6xdGMyVc3TcECqdagrSjL9K",
  "key29": "3XFwW7KxnZfpVPg5ta31eccQRsPMShvvT5n3UyChT7eg4otCrtm8LByV3msWwcBL4XYp9KAuxY1zxhbxC3Ebr4Hv",
  "key30": "dETL9f69TTdbsr6J6BFR11RXtWah1xagA9qp1Tnp2AeiV3YkBAViuLtb1hSsDWUxZakEJ6CePRnhwR31DxR7tSo"
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
