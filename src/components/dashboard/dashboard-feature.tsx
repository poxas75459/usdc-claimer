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
    "4qefvCYRq1XyMFcYJuGEvQwQM4gFJaHSSEMEr3XkocRGjktKjJJ9Vn6PqBVgmpUiHF6GHtc1GfBj7E6UD7gQ85A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXUfqEpcddL3So9a5ZUrqVTtDnyzzW5xxXzr5GAb1PhUnMGJXoQHczpsX2mue7nWCdnSZ6ewiMwFY8kCHvdw5Ux",
  "key1": "FQW6rxf7XTzNy9f2Z5Vp1psHmAwFhBNXtqPXQhq315gjfEMbaFLaEbwcF1KdLYRQzhcjyjLQrLzGw2aofQDcaFs",
  "key2": "5nQMv95wqGgSZK23DSaha5qtLSqxgQUgxLGMqZ67qBDYxJ5nLvxYwpD5N39N79LBf6sSh3prUbgyK5dxyoXVPKab",
  "key3": "5oUauG3KavykPtdrmce5GQuiq4KTofnS6FiSWLwmNn15S4Wbip8mD1oZyKL2SJKQ3yaQs7r5uuHwRreHpQxywZB7",
  "key4": "2jYRrBrCihBy5Zab21jrpbNzYTBXPJNEDQh8RFdttmnBjW9vnGxDRAXRebUkZT52Q1YWnyGthzJwj3x5hX1eG5YE",
  "key5": "2Lxu9vfpsycferjaSowVW4gQUfZi3Cpvt2ZUeGoX4MgNaSD7pMmi8U1x861VMFSko1R1fkABTdbzP5tyRH5VYhtg",
  "key6": "65Mn4otRQgoXVuXy8BLcXxGnXcP6Ks4n3nPwEwdU72C712uS7TomoMyXdLoixTN3oYAMf7khJAW3nnYxncQdkahC",
  "key7": "5CqFEwdkn3T7qg5WPCuqLPxsYPkeG2s36Teg7QxP6XzzYtQanA8JBHAXVufnGkLYcBjNh49ntMQqAuC9Z1W9Pw9G",
  "key8": "3KmccFDGzVcVpoczJQrgKuS6VU9dcV4mmcg6jaYwB3cojSSyzaapWXPZzc4DYZEk6mCNSj2LkNw39dpbdtfqNcwC",
  "key9": "7Y3yACLtafNxAjowAigNUzugRNfjm82qpQjQAnEkxu6ALxpMvVpkGWbJUYR1ocQcC3u3SEWTgTZg9a3oDxBN2JL",
  "key10": "5FiK6rYUTS5oXe4nvF9gE7TgeY5fYV9xMGjVzGApAZHYzL7bBqz5u2MyixxL5w13NgwebLMuvBysFvrczRM34xHQ",
  "key11": "5hVZf17KEGx8DLEKYGrFurXVmw47ZpVdgRcaRB8wYwJYF5XjVRTxNrRpxnvuuEtt4vxxzeq17JEQm86TxXhN9ua4",
  "key12": "2EQTYWUkK5zFhhYesutH4Njti4r76Se9kPsnGSXS47HK4AU7jFZ7Ca67uTmuE4evtCd2YXqqXNSAor4Xdft943Sq",
  "key13": "62mav2zbbQaTUv7cUSUA8XikgpwEtdzBPGz7BupsJR4Y6sP19wrtgFzuT7du5CTjhjwrvSiajjYoRhyqBRueDc7s",
  "key14": "3GSDwhkvM18gniwH1LikJ1kecjSe4m8uhD3zb3rke8BojKJKVK2xiJXDUEto1UnmJkjkWftgo9MW3YRpwXJStyrH",
  "key15": "2nFxB3VYHhPisdTrwfauXVaS1QDZ5PXtTWTJoaXwy3dex864VV9WWtEpcjeGecBQ6WYDtUMECrytC4Jz8XZr3uVS",
  "key16": "4AMnQVNiaaSwVXzd1JQ6bcbiQkanvgYd6EpM2CUaZuq3eEvTF59UKW6qzkW2JjFhgHUkYJS1DNQAQ6fkKciL9VnZ",
  "key17": "4ct627UVBrehUghRZXgEQ7boTS2XXA48QuZX7u8Di2R9jkH2xs5hDPYFXTo9AenFykuVhUkZ4zt4KCwqZJbyfhiz",
  "key18": "5k8VspCoMHQV3NGmkBUhTR1zsfmYVNGtZQFYKbp3UepsL1rhcgPMmUdqeFMmfMrxzwHobL6D69jVUUbb78YfEvnc",
  "key19": "3HzmDuhSQcnHJHtpAGNSAYXGMmAXPvYERFBdR5t2f6LCxLFLz3ZZYdZrC1ydYHHMtJ9eV8V1qJSJsBct9xoAG2um",
  "key20": "5qfZbHGfLJJ3MmpKvNJgQqgvvxAY6ZzSautapCHXJKXFq5A36YVraT4w6T3THbazuejP2gp9Mjxfd1GNsmTZzzbP",
  "key21": "yrvZmP1yH5LuucnJs83KpJviCjGARXnsUEZzEJ5eRK3LwJUTKdJvMtRUXvoNjAbC3idM1N3oRzgqd9qidePzN4m",
  "key22": "2AzW6miTxT94dXskWgjmTDGay9PRE6Qwdci9hqa2XhSsJWGdVjDqSu35qBiGyQko6ayJSvz5qQN5MRYykbfUzD1X",
  "key23": "2RwZFxmyVsbnqFpusm5KuRJ4JgZLZxXcaSZhnuq8YVRKXF3zxieRXWXKgpU8ih5u5MckDT7PPpHTj1rcWHMthMCm",
  "key24": "4ijf5y7ezbkeU8wA5ipZkZT5MaoBAi8XpHLVzqLx6cZWj6ybxU6xdhbprLwsR2asf2nWEXiutBK9zgpYMo7cFitV",
  "key25": "2zBVghromWW2bZWL9rYRA7ZrP87TTtEDZdh5Ye6N9NwaPwkLy3TGn3nZb1rKvK4rNW49wGTeGsKJkR647LKGxmVR",
  "key26": "5BxQLoZQCkjCM11hKzb2xZaeaozFdrkxJ4oDKMQHoeksVawhU7qmmJSEUrPb2zFAcdV9hat2Sg477L7KG921nUfj",
  "key27": "5G8nomcEqGaAQCmHgLY2etxrzMvqpS8RxPDKY8KZQYTP2vpQoJ8CkkgyAmbc3gXDaT3gLEk43xdQMWWMvMhGH9Av",
  "key28": "3ngM9oDr6WgtmEsYfPLzJdFEnKMRALrxHwY84SVhgBXreDJkXu7ETrQiCzo5Z5r7RjWPSWRpbVPuwee21pLMb1bg",
  "key29": "5aQGAGZpPmjdsrN2UG9EfEj1iMAsbXjhd1A7aNsMJdGWrhen8sjD37zjvnhB7ATsAQcgUv1rwrNVQP99vB3AMgtC",
  "key30": "3pBMP67mp2nJ1WFmeN8YVqeY6yaLXwK6aFFTPD4zUHbBir3Lyf5wPJbPAvgRVbTMYmYM5pNvNdKW6HM6wjwbM75"
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
