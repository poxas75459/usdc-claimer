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
    "4E8WwpDUhP9sXrKukHDKhJCzexevbEmAew4cwbzsuPdmCRTb1ydifVVZr4PusQC81EQfHxSS81k8p4EFRWMBZMVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47N2WDRbR4hKFVZpwyY3Ar2Uktj1TswcmEt2tdcc8jpcB2PRddgiUXoXZ9DsEaesSVPMeVdPtKJx4WCeuUHrsMxH",
  "key1": "5475PZ1fjngABbbW5CeSR6HLduoCT1MpUSL9KqsUmGBVRUQcuRYkW7NDW7m4PAxjS62YcnHbRNmb4A5tkY8whL8Y",
  "key2": "4wjKnTK7Q21d5BsAFj5yjRQacyag2zQmtHmUq8Dbh2gDQ7PQJi9eLzTZFh7t8W1qRdDh2mtpMFAMi93aaXsRMxgA",
  "key3": "3oF7txHbQM1xitLKYYUpQR9C9Vyi7peTgsNhWYzUrMFQ84CGhBCGupdtbTwPftHieDjw47WmCC7585FVG2NYs7vq",
  "key4": "44sW2fTQQituFGpU9Bq8AQneNFcVgrJdH9hCaNp8EANSWgKrKtn7599bQZCpHNAPiiPjUmGpQdbbvqgzA7zw9BZ4",
  "key5": "yHS8P64jVz88NFKD6wdDWNd69m1GjMcL7nzZ2UC56YxZgTysu746q6ZF6SrTsWY4QroTqW57yNPFNn1xveJYx6E",
  "key6": "5bM8Z9QPzNjZa16g7nCJohgDXzPxSZHKXy9yBwpy4opEtpvkLTDnQwmgKxqsqdwPh5GsixNCLPgTD5uuNyWb5kkH",
  "key7": "2x3nTQAFyDXH8h7qkupKbvvBKPFZMJm8qxgWQCzvoZjeJ5eewYFb1FYvrt7VxoxkhPKEQqsxnUf1yygjtVXwA79r",
  "key8": "2gsMSzqwdfcvHj8xfWbZHbR3dNiAzYanai8qVS7fqhMrKCmipvZQ7bjzkE81CYYo4cETYK61usUGvxv9CbWF3GbG",
  "key9": "2Rg26VWeGFpN74zvksZ9RwKNkUh4Hi24PabLYz4to9ihJyFvg6FM2XXJFUFQUmbpyjRzTyvwNENuuzxppMxvBjMu",
  "key10": "36P76DhS9FWqzu8Jky3WngpZX6LDNwCdxZmyjKdp9NyPaiW7Jv8RvVBhzTnQUSiULHAmBPY4v5M9uggH3iV6UugH",
  "key11": "4NLYvK6VPPhZaM69WmDJo3Ek7phTrPVdwDA9zcoW8JZ9sirKTLzMj9mMZKrV4DyZdbHeDTTCmqzZeHuDwj3usV9r",
  "key12": "i6Qkx8o5cAv2WiCTxhzh8KByxSeeAGDQtWpqVg3kedNA2UdBZzqr4jdPwV41hMtHgYE8Z32uW9Lvm2zd4zHgvLa",
  "key13": "61Pw11ZoEqVBtaNs9wSs7CV79Py5LMPWnXe3HMnyqjiKhSxcmiGJ9Y34zf4K16QmkfCTxrhimr3WkXoTnVpiS3i9",
  "key14": "4EGd6xU8TxvbubmAtDgJhUw1Luikn6NqMNAwEPDXJcwFyzQ8Mpp99m2nK14mzgqDd9QdcGYnJGXe7wCu27a9KRrV",
  "key15": "5yR4LjkJFSGPyHZAKFosU47fkmHCtvojvakrEJFNrq9NM8Fq9XQuxAmNTojLmWhvMdgqDiJbNsmkKvFTEZCpv28Z",
  "key16": "2VqkXgQFPoHitcM8VKSVT6hunRMwmvTouU9omYKRBi6Yzd7Qq1kGAFtzqnQdJhzT24RmhtDw5L65iVycNdq3PkDy",
  "key17": "Wo1SorDZ4w7JJfNTsHC8eoXQrH7XJgEBjxiVh4GcUmcMtKvbiSrfcU2Z5iTuUWCubrBskwkGzU4UGUgAL4W85NB",
  "key18": "2FKahr69oWvjBpwPP34XVju6j3gqGHzMwsD2RShZWkUcdBs2yswVMKcTiQSpfaBcmXZhA9zrLJBdZPHJMNS5Q2cX",
  "key19": "4JKGUHoxfszqLK6PrDasoENgdLhgdv5pCBgUPHBe3CPQcayxh6wZ3VhVYCUsQvRS5vWcHyv2A8BNYoHdnfiwHg8L",
  "key20": "2fGzCd7T5GKU5FykqipDMot22RdZiabU1xicACkUaey2okjBVGbtNdCFU9B69SnVNmQ55byc8UoHzFctT8VsbY7k",
  "key21": "3SAFVvU3jzowWR5SEjcWwcztXNpybsBYfwLuNMvwrpRhTbGwbSFLvv2JXkwb9Bh8iRmQpwDWjg5GrqGJDuDWrZX8",
  "key22": "4S6H1v7ncLE9SLy32Mt7ii8LVnpzMude1DpUik7S9btaxUHCWqv2oVuZq5rcJxcoxgsWbmyhamx5MpMygLQexGNS",
  "key23": "3rkNtjfSEDkApqSKZzYgn6AjCc5m3oJWVbrtXd84ZADbLxdm3g39AZ7UV5W1CWcd2bD8aa7nZHtS9kHCYE9EJ5uX",
  "key24": "nJTjoYaY1GFhbZseVN3iaDUGj2BiRpzQN9oawfYafQdYuEHAhm8ToN5DCUG6dzv9rVKz4Hh4WSbxozYyLdWjB3N",
  "key25": "4BASTDTtEdS6QqrJTAVjdvuxteZ4HM5vjoXmA23ZBFSg1sWsyzRMhvTRqzmhMAxzH7oLeYJ3vjgYtasp6jWGZuVQ",
  "key26": "3h47yzx1UCMSice2vG7CRanTskY8K2KwHKAjHXVDffa3f3in9asyLfwKsHF5XQHzZx4gPy1jpiQWRsJKaFf2Fzn8",
  "key27": "2GRF5W15C9k4ijXj3znbbxtRMM8QwScn9G1HUsBVnwtuR34AoNVJ3HZwZgNVEyqCzYtm6c9Ackscwp1y5ccr2jpT",
  "key28": "mAzrNETPoE8WXzxDL7L7wgQFPZV1r93fbKGo2gqHTjZN7svYeXZLnBDXtMxggYwP5aePrR1k36Ff8nq5oCrKQHC",
  "key29": "65qbzNtuwoARuJ2vagfpXSEZHdf8hXxg1xN7cGMUtYuEPJyqe4Hi7VornuXkghYpWbt9SKADwHuuTxyCFTwvVi8j",
  "key30": "2FYH69bbUdBa3zQwGZcuVAuETytxU9KhjEig4n8QzNaxWfaawCKDUwKyTGmTqHLDHbPpgR8n7ssgtPAthmZQt3yr",
  "key31": "4D4fdXBLB8H3qGxiFFC8Nxm4NH4KRz5d8auXqbsteQgZ7Kw3gc1tc7fTjEg25xPYwm4koJe6ufCypxC3cSYscWEf",
  "key32": "4AVkGBeuCWFNWYoMxoY3U2Hd8M8kGjPnbFqQmJa8jJR5GAiy4eP7dsVKrHoo7jGSojUK6HkZ8rzU8LmF5gt77LRb",
  "key33": "3zT6F9pfFZNMAQsK1ubQaXXBQU6R1hJ8kKWi5173vYgo2uv3tE1NrET1DRo5UuFboaGXVjWhgqaeeCq2ScsRw5vT",
  "key34": "3Sgf95HtB4MVRFtj7pbD9s74MxB4TgyHykEJihmGS54RHt8bvh325rt9trBDd8NFDpWNcs1ga6WF7z5sn4y6637U",
  "key35": "3HtRgcnFTF33aaYD3cthGgEVg3EFX3C8juRGV8tPGr9PYwEbg8XweRYAmqh1RDkYyWcZb6dDHa8FSsNAsBK5ythD",
  "key36": "2xuZ7AtzkuKtQAjbjuSnHeZ5pEmw3dsmy18LC8xpiHJ4wGuygXom39LEAE7BoasXjLdTo7WCYjjuLKXXaWSpjt7",
  "key37": "4RuhddbpgNdaDtcpM7bZCKpYw2b8WQP6xYDbnAASy5F1eySmy1tw2dBiDHx72wKmtwF3PTtvwqaAEE3ZDyz2FLtK",
  "key38": "9BKbNGmZ6pNCxdr1k3kiSok768izFnk889LcWECUPXWSuM69P6GyawBXPjHTEvkbZ2fhYustN3btNJawNxAXS8y",
  "key39": "3ixLkbWAQ4nT36mX5BRfN6jyiB89nzgRyMSu5xv6D27KtxCvgMKVNEJsKFHjFaCS8fpZ8omL7KNxSozMrzDpXHpy",
  "key40": "21gwS5hfa372SH6esHTU36BraEJ7wyCYaXp97U48c5E5K6oqVyDS3Z43EkUNTkHzWrPM4eo7Upsbwum4QP3JSxRV"
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
