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
    "uvWcHUsKxHM2kF2RqKxJhVePuo5VgnUHxGxuU6P3UEnkS22UZ6gfpuMbsRzBdfLAKw1H27RYQ5LX4ukdUcjyTfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLsWswBc2x2LUHpC98XCdqgmH1vjVZ5V4thYqqxPmUzkxFS8umN8URYBFEm5pBSd8R9mgnr2suMhrX1bq7bVwiX",
  "key1": "4rKpepmorRkRkvA6EByW8wpn662Suocf73rUiSMqcv2RHRrfXzDKKAt2fy6deMb1sijsHtqUM4UqfXWeVGc82ntj",
  "key2": "9vT2dbAWKVShHCwbVtrdxsHec55HqvzLgEqsTA9SsdMT7xgGZxKbUZ6TgEMfGv2QC15sbJwbg4dhqhTq8YDvz5K",
  "key3": "2V3ff2wzKgdQnUp5zrS3LtFcK369Pc8KuQkSqxugaBL8wNqHTQ1R74U2Q4fYQ4UpiHpcMFhvoEnpqFDkAYw5z8eq",
  "key4": "XTPKkPkVV5NFbFzZfGQZPXHhExLRLoDZZHnw9B9xxkujgEbeCycwiSzoj6G5J2a5UnzzDKqmZLz9iVrphyhRw9S",
  "key5": "2daPr8xGebFaMCEBPTaQBT5MteGXHYTdCLDXqnZTjJ7Dra4LrTbR8f56p4mX3p8wujHhQFMVEdEQPCikp17Db3Bm",
  "key6": "47RiuCMywQifaNFmXfWgGawxAKZ159mLNqotHUUEa7hZMT66GV8KjQ83zRbZnoR57rDFwjPReDHFu7hTVtrVgJZj",
  "key7": "3HQGHvF7NHT2NbvHq9gqjyMhNXGmmYD7MpGmC3ZwiGCgV5Fo71Fb5mGzE6xRT95AgS4FKyoQhFQcNqWv6qccJ7Bj",
  "key8": "5vovuCLKk6MkZJNvsGjnkn83wJVh5tpWCUe37symzorryBdcMJUouzDUixVSeNmgfwas7foYiP2AVCNufskQZMkm",
  "key9": "2g2JKNfTzGH7D92McjHBfSunugRmH5NpjHuc7hqUMdih2qkEgV7nri6NqgnWMZ7emXeyjqPuiiopPejkZht9juWE",
  "key10": "4G2z3H8gsmJTKwXJ6vLhu145DSQAsXPsc1wEjvmPP3DnwmKKx2G6wZs9nhSky4ReqkPzX6ZUdXT8VwUMT1WG3gCz",
  "key11": "4ftDDcLG3K6pqbMjTUhBFumQcPedgdQFEiLu8TD5Jhus9RsEq8gnTRyAevTRPLs2o2pjfShmbbjDP8dwq2PtVNtz",
  "key12": "94gebdVDBdZ3X48ZNSpsTkKjzkdSLCg1KdtZt2qB1YgW9VZ23gHGNtp6CBSd2uf31iSkd1haDYtZdqzcXQfVrpF",
  "key13": "Zns46xfARuLteALvNbvYkJFxwyogH7gEMhUSwgfMKSpN5u7AgTjnq1Qo3QXvFgHK2m9MbJQzXqxxdPuApFqGh3B",
  "key14": "D9DMEkgXarjy8BQ94vNSpceo1jZ4JTzR1GYcPcPTHBT2LuHS6GdJC4x1jTVuXnkwXcC6xz1tVQ6z6Bwi6Wp5tap",
  "key15": "jZ2i1vLBDBT16g3PE8s4jCTQWFDCtpgRVbKYMzaZrajVfUHZRVgFgpj24XzWGgBLRBuiMKWTe8VVqCFeCSzHs8L",
  "key16": "1GskP5fV3xZG8WwN2esYQ6vinPFmTMTYjBbA4pbwzTTSvb9vWn1Px16WmfzDjPDrSYfXHtKe8EThQvzz6ZiQnxC",
  "key17": "5CfXsQTdkbTLGbwGHspLjBJfxdFw3LXsNF7yttD2JbyzUyRXEk2w1PyVia4MD9X7MRFpUeLrjyQ1Fw2uc2Ma6zkC",
  "key18": "qdHhbn3XpFFopJX3ap9hzfPDeKngkaSZnrtWqGpjvtKGSXdA3GKaaC9CHhymnQ9Dj6YwS7HgVkg3bc4C2W6Ae4P",
  "key19": "mhgkgHBGRD2gpgRGQP5GwsS9ezKdH42WKSnvyjrykgqr93a8wMCW6JJc6ti5t5fbXKkEdHtvwhSJVrLXsaZnj1j",
  "key20": "5sg6PipkXmgX22gmx4kAZ543WqPUbL69eS3frE863rFqRV633Q91d4rP7UhVGJQ1PXn3jQ7L1FZcNiYsLAbZBDnX",
  "key21": "NEvpSaahkaVLsbpenYW6PgCQGejEWwGsdTwGUYgEWSkzWVsdhXQ6RMPXR7rYWYmQxAERG6sCZb1sXUWTtQpJQxE",
  "key22": "KBKBvHPyki5oHmLDGF5EJJ47iM5trGb9hZBSbqDzHd9GDVmPRntoGacy6xZntC5We5Eu4qUKTYn9fKzsVFsXAsb",
  "key23": "2ErqCfDKpAj5tjgWV6P6rxAP11q5ojvnVpq5eaLr8ptzYqSUatnkyLs2cy2BimVFf8PF47K4J3ye7yFSM2zo4DuP",
  "key24": "2W9Yvr8nDwAgcr3Am1bRG5uidHLkf3SQebAU6vdasHQ7LU1J7SjP5S3oy3oTctFgndddgeJnog9fUiUHFpTCMmnp",
  "key25": "4NkeVoA5NGLgvo3oZ4DjurVaaSkQb2MDSYpqpDigPdCqUC9P8h2ZpDhGeUQmA8fXnAHZVFcHfwjKxnsmXmArzMrk",
  "key26": "2hEn58WrGYshQAMW5KvNQsXbWbDpXPrPgCipVvt3fPirbnzTm93fkW5HHNPMTYbUi7fbWbTFr6Ykdr5tY3iocCA9",
  "key27": "3wY5ifCRY4L46H8HCtJLVrjTtDKMuaVhe6Ae6Jk7AbKTxgMMeBF5SnjeSERV1JcgYsSFcYjaRr1dtTT9JVfxbVWF",
  "key28": "4mJG4zTNVodxiMNGko6u8mUG2SkyLdNnVvKihGkXp6QQZSHswscdCfjN1QCxZbXj21z7BDqyZMLpBGGeku5GQupf",
  "key29": "3iinzPJNRqFHJ71F3jyHj4poZyDQ37RZRnwBFcqBhR3SmJ9Db5EXMYo4JuuySy3wEcXuFvjCueq79cWyVq3Vq99U",
  "key30": "5NiorCqeD1d9JAg5yPXoVh14MkDhDjjywofJ2mKmHCGN6boBJrFrVQkv82vRNtmJTijP5iWdfV7HAFXTvPRHavrk",
  "key31": "3ons1JcD5g2mcXzbrtJkHYXu89Qwu2CNkhUrWvEmBHzXxDk5uLP1XPNhUxW2TGUZymbiLVirjzBLDjNuav5mpJPK",
  "key32": "eP7AkHXvQ58UrvS8YJw8F2pe81E5f9YNkLHSA1qmr4KcQtLxvzJGCNymVqAS5QsinefmvfwP5yqZjaEUqRgJbLy"
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
