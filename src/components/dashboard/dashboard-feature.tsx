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
    "64SkKREdvMi2J258ndRyZx3qxnbGhMHCS1NBTg7w4DsnRiQjPf5Bzkc9gSfcfNTjLf1xhznyVwyi3A6fEaHZgNep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdRvCUurJkMjFRUeDZJjXnobd7KWREz5tX5WrjWbP8snGD1VQccy2NypmeQjhd3tjvVxYcQaK63iNchCZ22BYXY",
  "key1": "8yhqNAWQVRS6pKy26vJCMWfAFvRwcRudp2vpFKeb741rbbjtnRCwc9yDMqLmVfkyXsiWwQKNZQKs1yHETdWdhxX",
  "key2": "41SsKmGg4c6WekZjmRXwmMGVgHbyeKCdgRNfbPXgqXYMjX2xdWzjfo24QXJj62vXLjJ2fXfPNbeZh9saAwrUubzU",
  "key3": "3zX6Z6i6jLSrKmiVf5ZHBUwQ6Lds5WPgXoAy792PRAEfC7m1yYVfAxkFtCKq2aiWVCCbmxKjmKB253HvtU5qXxLC",
  "key4": "5pyMYNLCaQ7QMozbUhUWzBtpPDe1yPgS6BLNkZavmcsuu6uVMTw8uPWQvbpE1cpk2Xf3NDDqAKh84oimTypQqx2D",
  "key5": "3dcXuac7sJ4SdMJHwve5ktDWkW6uKWeJorY21kNvZRQWXjqoZRVssY7Et89oDvfrsxHEwp64q6hJRwMxw13zUTyc",
  "key6": "5nRGVioNtsC7V9EXPeVUB9o76D2jfNLP3duNAqf4zboTfWv14qTo5xb4Wz5DcrHxHhpKuxEKUSBeGCKHA46ZojMA",
  "key7": "2QGGKboCtG9Ma3X2hHR51S3vzKZVY1zH6Se4SuprTkHnUcVhKnGMRYfjtmxs5kJEWmQQsRK5bvPBAQn2W9tNPv9S",
  "key8": "AV46wVBWAnCVNjbjb3wUH1q229KhCZ5LfXPTno3yxeHtjYKawLF5ZKb51X8vT1pwPKTYLg5K779y1JasbnEy6bk",
  "key9": "5GUGo3gBfE5ZqpBYz5aTqjWihKZaU9d6of1ddasW7J6yPBYQWYRTXGCN5sJDyDALuXWMzvyVZi1YKQgWyMRLwHPP",
  "key10": "Z6NxPJjsbyXaZp6dVu63V6scFAcxETZGTnRTYXwsW4K9h7vZNs9kohxvxWfuekhFcXuTm7W5siAgHocW5coxqtt",
  "key11": "42wQxhPDvYcqLDCh6y4k4RzQzggqkvd3SBjcv1gqiAV4JPuyHVKmP9qUWmWGG3hCDHGvCtavkmhbA9Ubxa37Uyn3",
  "key12": "31NgBitkpwHYxw25yTLp1Kds69WVzfNPXid9gUJxySengPNLmUCPx9zSCeLFU5J1jLcgHd9KhDVxoSTRXysWNjqg",
  "key13": "4rpS3bBvyEi1xvRsGA18PMZsB55TAwya5GhnWqsofwUQKAzt6jFxye7zXJXhK7nubQLzaBbqh3jt4i6mLj9W8LwG",
  "key14": "2TuwCfVghLYMvehTfToHWMX7HCoDyR9tmT6DPEQgQiFzUd57VPRX98CpkezBYdKoSqQRiYbe2W2Ncnt41ygVyYtD",
  "key15": "4WWWKK9zYqjCyuscH4p7SpgDFWR6y8MsUo4HEaCficZgtPLyheaFj59mx2sbZt9Vt2fF5v6vwvY4FfTxkP2PtkqZ",
  "key16": "41eZnSHQiNL1ke8FKJ9PsKjnFWUbuTbXXi16hsDFvAqh7kxDhCoJ5N3ayMV11E1hts7u8PeNBQXqvajDnv4KCgj8",
  "key17": "3EXWKCiDdaKVe5m7vxuexN4r9Uwp9ks7nNoaSFBamBktqpUzHcVMHWtfQNnXkUYXQ48jpFYrEcMPWk2cZZdUfh41",
  "key18": "64RQB4YvNKLsfWrJTBnDsaRXUZhv958LVMdvhZjHvcjqpRea8BtUm6Wb5BzCim6ChZVnkUSq4QKQjhKYfC98TpzF",
  "key19": "PrzpQd87tv5iqcEHHdqMoH8abXxSbiV9rVzXdMLye8LVxYmexEPt4wCEaNXDRWe37g76vSXmoxdZsPgenRfHR1s",
  "key20": "2Fg9ETyYeYSdgQwgiQe7pcBRmKoT87TnAgMF64B3oBCQDHozsm6UXoYrhbupnyXsRAWr1XWSsKE7WXaHzTotnae5",
  "key21": "5qb1LpDp3v6o2hUFvEheMBkK7hgpmPUZXdsR38rM72XA2RkStk8omohkRcyoBNR3BBwWmtdDBXWxtC5BLJQ8Krfh",
  "key22": "4p24o6hauGBWJAPNYZcdGCeabZ7pb81qXhvtkbcoT17vpn7eX72PBzVayD4eQhZW8NVfQWZ6WkacVYGXh4aDneh7",
  "key23": "bQH71q5p7cgHNuJKiFCzkG6vbWhekubi5XrCQGPWNqu6uQPrdU9JCvrJuQ5ExdFCAnjPEVQJMqKoTnDaWgS9oTf",
  "key24": "2nWfLz82aa4PeethV8p1VUY4y1ZQwVCf43PSxyWJsL3Wes5UrEvSHHY8oLmRnEU4AdnPhyZAdY3ApgRRyJDgNtQU",
  "key25": "2PEkekQMLYtJmYPf2ED1fqSo3qR8XchL1HAvuq2FeLYr17FxSZ5G7SnMiriQ4uLoeY7YgE57nNGtzx7FGXDJgVAF",
  "key26": "6oRNscaMELkTxNv6M8t3eE1ej27HBsbW8v8cscER6HdcQGVTTSjXkytWqkSDw2vEQvhByEgdpKk6U4ULAASNz9Y",
  "key27": "cdKZdAFGkPSFzgk8D6hc5r4rRMAfAduo7M8yAC5wEN5kDLZfuRLxBMRcyRAZYU5PtgBM7gPF9vaDtQna4jFcDs8",
  "key28": "4ZQewTz3mPMrJL9d578iJp8HDxuwEKiM6BuWo2ErEPeqVV96eNWSRzekVdN1vUiBuHnLR9r5FWUjtS14ZckZqMfW",
  "key29": "32TY86atGD6TthST4EG5E4SKLq9uZUZaY82PMnNjZtXcwPc7YX6jHozipQVco8T4qtw2dp32GygUbhNLi6E67YPM",
  "key30": "zmhS1tFjx6CpE3rfig1tLNdhy1gdgrryykXxQDmmvaJbdEwSH16tBxUPwhtk3TsBFNUQh6EE6dMkcv2w4keia4n",
  "key31": "3dH5QQ4x6gheJAJtavKuLdFiq2FvXB65wKYVqzwyGG2QXEa8ZUG7UFn5LZApCFifG7ry6Z1H4hgytbtNp8Y2E87V",
  "key32": "3u3uLYTE4idZwoi75QUCu9ZN8mfwPN2PHD7id4X2tHBzEoHmQsNx74L6c5ztD4fZa4FUecM8RLYbZunXcMupj1jB",
  "key33": "2EHR24E7iv79mmd61eAPuiLLPLnK7ooZ3b3JvqL5PM1xHFRKUr9ZRAjJWaDGcjsguFdvyH1ShbeGwjMET1P6rU8n",
  "key34": "3ac5Z9jnaPvjhRVhmwwM7eRnFSiq4ekw9aeVJMsnzeSTANc5TuthQELn6aNPB4vxKrJPYUD7cE5eBxzwappotgAi",
  "key35": "2kxoVSJ9VmzL7npr9YeT7LbkAhjfDkCUCYfu5qEzJ4wuj3TrvrBKDxRY8dzDf8QS6r9LoVP3YMuP4GBHybuyBKKY",
  "key36": "5s3ToFcQqAimfVaR4dQmK7VfSdDcmHCvErJDMNkRR38TKUnRUHuKAFvNiy1Z56eJm5SedJeWYLjzxU9eDgHNRCn7",
  "key37": "2bpdgDozoCG925wwCKwYbJRxBa2EsA1nbmmbZ432KZDwMyGsmmZFKmhFoDfEAgx6iYBJPzJhGyqMsrPYR4ozyPff",
  "key38": "51zWK7B4Rws5gTsAE2Q1AyhM9yJy9XeifreaVypFj1ZqjCu9dsMTAxHzetnqJv97vd6mwkVdnjRk7a2ZVBEVsHpp"
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
