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
    "tye44aTttZmQP7wtew4giLt6t2SV4HHe91kqXTRrqDaBb7C8rHU3aXoVh8KyUSYMq1nDZfDjSoBdfraBUf7JJE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VT5mrjxPrv6DTe3VQFuiaJnQAsRtqNspQ3Wwe5mNFnqJEiJ4My428pC7ji9drqmYuepqNWGEXPTc3EsKHnBuJbF",
  "key1": "3hDk6YgTqFTLpuqPWzvpUdhAb7z6WDTqpXJJtDXMV7gJbPxug1FnyqWEMFWgTLZfzhHSQK4FckhkmKwcWTHUGGXH",
  "key2": "7t3TbYWKudMUL61E6a1oT2fA1mSoYgDVRTWyQxzE8LTb8aqd7XCZ6GkAT3yvpr2KK7xp1pqbVxYwufNrtpT75jV",
  "key3": "cyweYNtRenRkvJY57nNsmta9yndXL5maSmvd1XYB7uQThoFobpGKcfJBT8uCsLfXjLc5e29Y8SNwH9PzR6YoqJ9",
  "key4": "48Adrkyeqw2JVSkRo47AhW7Pm9drHrt4sSLH6CnwQzmR7GBPNPXPXfs1NWxfyo5xi7BHgevuyhcEUP7SR7YX4Aix",
  "key5": "4vaYZ8arJDLt9BXFDwqhogVwTNrGimtYXJserZTBDPFgarggDWz6VVNg4mfecKgxEb139bPGYprX1AZZwbrQnqZ9",
  "key6": "212Chdar6emty2d9mXD63Yd9TPGvwJSqg7HH1mMgZDTyXkJUdRoGr9tmj215sNWJwqPusdUARxy5jqEBH9fkm6jt",
  "key7": "2XYxPYAkVUqnJD9bR6Hr4Lvep9eygVpBJDTYh3gmZRrGYQ6usoYSn8PpyRQeJXBfgZWwB8NBMhXcSNSFWW4PizZx",
  "key8": "5Kjw69GNYoetLR94Yz4abWaJCNSxbT3LoCB1QJky37XRdxrCJ13bpASiNARpkQdh4vcVdK671X7PNhZVMTRtmKki",
  "key9": "rchxSUktnUQMSNc5jH1MYkWpS4KRJW3JWmbmtsgDR6bKFYDbDwVEnDWbnh7mR5GVb35zo2jf7mqHhcUf1Vs6mu9",
  "key10": "5FHz8qFjr9Wh5HCajZXLSv5WsfDAH2PPty7xK9X7dSdS6v6y2NuHQfh8Vqcm4y7bDmnBL5NnztWi6diATX8kYVMi",
  "key11": "5eeVykFbU5HpkfAtyvcEogh7u5233akcfFwTJ7aBxLydmscWaN83qJGA2PtdvsXTKmCx9aR1tRG4TJW86DHkdp89",
  "key12": "11NVB2zdVDFUzJHmhBpqX3gMm9MxxqWLzCKVqCkEcVmah2uoNkZuxxHtLLP6Yd8RiXZgr8W9kfskDCJUaWJdDm",
  "key13": "jP4zjZ3UpGqwed7kCkhX5D1QLZm3uaFanUPTkNfxVKdKuHmUm9XJjaRHUemk6SbTyhpA38LJWScc2NLGNqE2929",
  "key14": "5p6y6xHWkVK4UYABDgjqihfQB7Hp75czcURFB4t2ueSPpabRZoyXaHgyMHJc7CaPSjXwv9UWYAk6fpdnyRb3ARW",
  "key15": "22Gd7Q9o5f3m6Sh4oetGGik59KVDGhxT6m13gpsHkqUbJxL8AEXpJ9ytaHPoEkNrfpGxMpcXqCjDEZzHE9dc8XGN",
  "key16": "4HghMSW56xPeAnQNSx4TXWYKxTe52Pd7biCbg7a1Qvxj7tZP5QrB3mbcTCwkbJXzm8dNhEXpzqofGBSt44aWSLMS",
  "key17": "35vozDm2e8TxRyB6yfvsg5xCKedSTnNjsbU2A5jinnWb7dLXbqEUnUhyemdbmQ6TZYBKe49AV3EPSyNZo5QJS3dx",
  "key18": "2fWLh5ZaW9Sg3KBo6fTghB6BJqmEKEUc5hdFBgJTX5uCCJW2aiUGUbppvqDWMYKd6Nhfh5888aK2oFB2mg74XnCu",
  "key19": "4yS8eseDUtJfpHfYCi3BiHqnbc9t6oPia3cgQcZ26v78GV8JJL2gJdru4jBJCxLs68NatbKtnz9mVkZwNn1z4Y5U",
  "key20": "4GYXzKUpuAmSMVmaPBSWCqsy2KURWEKmQ1t3q2J8mbGZJP2GaZWrKsSLJaN2dfTVB95tAHwqpKFL6NMxLRCcJKPh",
  "key21": "3XGh92L62DGMnS4MkdviXNaFjryBLMfDnJoDJT7v8QZuwLURwkpJqrAmYQxCCzQyvFD4GXcqTwxJP9cA8dguDi9R",
  "key22": "2T7vKz9gfdwVEiJz7vw2Ppbmjp6ZnAKoHNpqw7Z8QEdwLsBHAEunwmiSSVKxcK3WRSJjVt4ZBnJwuKBZJBamnKhp",
  "key23": "PPoRT778Am4aGJu5CkKfaUoyDcQ2NTmvaKDPKyp2GALtHyjC7Gt7wyT6SqvyHgKwqFd9JQXj4x9DZNLvyKAyX8x",
  "key24": "4xpGQVostigp2GupTeQqX28c3dEZ2VKWZbQoWcECsofrDoFKQ9oPC4m3x5UoN8A2NpdRKbPFjRD9ZNjpYACFdsVX",
  "key25": "YdwQN4CYZJYeCpjy1qejYQr8pdqeBhTgBZtneZ9FsYzUkDC9SeJNiYmisTXMnTE1NxThKH528go7KaxK25gXXhP",
  "key26": "3ho794fo99hTnr4NvStkQRWsxUQbgDEKkom2NrbhRPj26UaMC7cv7ebuRoe7XG7Xr9o57FxGLAu7zzRtiZphV7VJ",
  "key27": "3FUcfizoqZJKj8XkfQ48qEZqG661xSabkjv5Ck2quAcTXPYWcHEAJXKvpUwb3LqDLfr6ub66jFQi1KoUzEMYmdY3",
  "key28": "4XJoCVYLREYroYxPsi8gut9oSFuneJbgGxGx2KXjfA5nob6BmSCsJ3DBST4yy56TUhQL2yWqsEUJyE3geCscDTwr",
  "key29": "4Aa6V3fm3NdxvPaiy1gtfx3tvzEdnQUvozRUozs7co8gSi4cA2cSSLNEqyaDzd61kaXQgEMxt7jHE3n7TzdCGEji",
  "key30": "3Ldk9hdRMgQbMQfnNSyCh9TpCJ3dmdFw27voySHbqUyXzXgBim7pTE99yovB8y5NcZaQczJy1SeTemhQwqLkxzyf",
  "key31": "WWJvCz3jrw7JB3tCyachhpwZxxg8RK6a4NFQzuapKyc2MWCFHHvgXusfB2McPQ736MmW8nhm2hUE4e9ezMi1iZB"
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
