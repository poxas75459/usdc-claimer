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
    "4H7ADjJ2hPmb7SLrPFVGL4178fBBsbhhDfjzHWFExFJSqViANEobDdaq1xsYD1fietPsAyt9sW8xAUyFmewdvVCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZgkbcaABx5iD8f36CJNafdrQLXArgs2zudjRyqnHJbV37UDkRQC2EhRCU9v6s8Mq647kgfvwJtTgrZNcY8FWW44",
  "key1": "2uv6t9ScTzzZhM1Db94YNNc5TFaEbgjGUKKfquHVzZHoy1CBy419ugFJKFgFRnhLzGTqTMJv9H6KjrrXa3BH2fob",
  "key2": "3GV9Ne2JW8yDMwEuF5A4qz2kmfKvQQ8qmm8wn4BrJJXbX4gkEoXF5Q2GtNLQCyztdwmuEcypddk5pbYHcgHnPug4",
  "key3": "5CxUEhkgiMio1rNCsHUER24nwkUy4MgvbjiZFCjx6rmb1jzB1cXdoo9gxqRaLPcssbQ9Lw6XuFFKjm5Uo5QeVQEU",
  "key4": "5zpA14M5ub7Sa2RfspMxBUReQWk66P54MBASUos1JJy52i2jJjUHRB8ACDgyzDLnVJELeRpqGJZWgq5nmciPkL6v",
  "key5": "2V3dgPr8aBj4dP7nWe1P6cEMjAwbio2tyaS6kmsgRpdVFVC5Mv6vEhNHpHmVKoXPA4Qj6cyNBUXvDDbpwzeCeWFp",
  "key6": "5PUvCutubfhay7LoTxBQatC5Z76AYtHbfR6L9XXVYDnR2sWAcycbJLK1raEjU8P3f4piMKnPmGHVrutyZH2gfMTn",
  "key7": "4NMWxov7dL72fdsY96qd7boDYW6wiCZZeFjkRzLnFaxh9PQu89rDjHmFhzxmp4H3z8f98F78C48U2nvMXqrsB4nt",
  "key8": "4N22YHwnpg7SDP5A73Wcp9q8gtGPCAhCqJv62g4okFcSaLHZmKQxPhfcfA5nVngB2NFQ1AXF517Jte7duxXoSzTE",
  "key9": "5RqFK5DANDk31thnrSwB3tJK7Y8dcotutw1iNYgipE7Yjv82fEjYZ41G8v2L8SnsNLKK76SzPvz9MfbyFRDBfm9U",
  "key10": "2XRDcYXVhDipKN3jt33bWsHP7bsjYbKmCZ4H9G78GBs1AM1u1pAFSiEfmcmeigVQ52vgHHHT2ngHrC6kvGxyHkXu",
  "key11": "ri15RZbBNs18zuvRWfDEDomFp7a13LfJpakbEprX18DSDnVZSk17FZDKP8TpDpkBKrjhPgm42XtHVkKkEhMtysW",
  "key12": "5xNfWfVz7maVSdRZXp5XhxjMsuo4VRo8VMchGQfotNpXxbYHZJ49We48g5UtJctnB63xUPQEV6waxE32euq1gHuU",
  "key13": "4thk15N5RC3MEyiR2fDBUgY56n8p1mpTz1Hg2QxLAB22YWWSE9AzXVVkPPuvL4j2WLaXEqAqnpMdX1b7d9g2TqGg",
  "key14": "28JMsmmjwmsH1bjK4cTPzqJqwmMWy8qZ5Nhw87L7SNX9VkcFdDfZvN7AphTeBwmYq4pCg18rFuFJhkGZqtPFyc3N",
  "key15": "218pP3n3xNukxyxz2w5q2uRnjr3AvqbvPnsc5r4v9rBv2dyMDBEWVroZJgwkPYxsGiUqNMhfuwmD58NQNZpj2eLX",
  "key16": "6qW8tebYbtLXTeTCifTUq6J3VxW4XSBZcWnHvgiHtjJsHH5xXgxsn5yTcpTyWMzFAFawTqQts8NhUWjKeYA8QFt",
  "key17": "tyrvrRmXAyPM4cm87GSte6oHJ5C38f2B6MMJeFKhBdJm5tBbpojUCDQs59F414Zh8GCfqzeZCK3waFE4swo6mRK",
  "key18": "3aAwgMEvcrxjD7iGzBbyjZW7t2jQA4kjsgQrbayuFAhZX9LYq5tqQFDkc249NgpeXwi5eqjC3QNmettCSWwqqpb9",
  "key19": "2Hv2DZ4udSiGjMjEHmDLknJEBbJMb87eWd7YrRxC23aFy7YoKd7rgk5DiCVwH5a8X9wNYG32JALA2VouxDpNviWk",
  "key20": "5hRwzvFWRA2AZmrPsYEULmhXKKPR6pwkDqnVJWfxdsZ5fwKfRWqXzFVECULBcX3Qy93RENNDSKEKzXACK42WYtsD",
  "key21": "4qXgEffsptWMvmYGDXtsJx73L4Tgnhk1f1oNHkzBzSm6RcpSQuExzTndbpwqV58MqKWgjbuEgXXmHsirE35gQDbc",
  "key22": "57Joj2Y1bRoYqeZUzaKyTSVhxbqg2AQHuvHMtRFDbJQAbb6bi3szz2NFNM7nncudSqZuNBgXaHnASbQbGJCaZ6Ma",
  "key23": "5Ddz5DH5CQj1Qe2Hvg3Di1RioB9Ku5KRvnjkM8HJE74Jc9DTrz2ZiyjfL5oshizBtqxCtPYQpjkE5SX3NceFP5Yn",
  "key24": "5V848Phm3RwHzAiKokqvfGJFZYpeMHUzVE181S5dvZvjSiHu2fKPGz3A8tWJkJWYNfxKmrQ5pKZjQekdCnFDC1KQ",
  "key25": "4xjWZLdxaJtTCbNr32hY5DGCsaWSLGDi9FZW5p2pCzKQ41oNWjUvqkyccEaPqQLCt7MCaJKaA28ivnNqdwZQweAn",
  "key26": "5UAAn9tcnzPLJ8eb1BzxCaxhLpRy7dWYS9zxbymxmhqYRSk2nDqyFZ4cKCzrD8J23M86evFDMJhNwh8gT1DGUGgj",
  "key27": "49zPNgwyuA4iY3turn9aBXjhtURA5ccEb7k5Efy5v7ufhwKFDsNQCLKM9S7b6NcubiZ8jHo1dmhRAe5nD5ofnUYt",
  "key28": "3HGzFxUWHs4uzS9Z9cemcHpQnpQZyGh6sPiYjCNj5zUkMfZoMdErEJnoUYDgEEma8BRiiA3bFAMymUWFMEdsEyQL",
  "key29": "2bi91KixuHDs8JFQ6EkX1XUhftfBy4CEFbrsUBdW8kqbAWyXYFeJqWUc86W7eW4y9yB82nXCefrmVC1rpfu4bb2m",
  "key30": "4xHFZCjDBR2jogHzcNkmSW75CH4cGyY2WXW73oBrdLDpEWnmXcTkNPZ3eyxZ28FC3LFGoYvGRU7Tmn2crQn2gKsp",
  "key31": "TRYRVZG65wNi842nWEfmTNqRPawtwY4NJTmCWSKfgw3DJSvu8pQWfp24MvdPv2SkhZFDxkghVyyLXCfvngkiyhH",
  "key32": "4Voif7eD8BHvMbABTfPgFHVwgUTgZAZQW7DsLo9FUCsTvrMGYaBuH4aCmeELuVgkruDnBeXK8Z2HVHPYWJrRFAAN",
  "key33": "3sMyxe25Nq9bsbMUsengkJ4uPihKavDLY4kJ9Qbof2KCZNLScuN1qzPkrBkGmVdaB6AjB7toLfznJNTqgz1fWBGx",
  "key34": "5uEnt1nnbrnu8JjNwDYdC6KixsNc8eKgBS3Wq1cPAWyYz8P9edCQShV6Gwr1qm7DXLbDHnSqM1JtqnbvF5AXBTPQ",
  "key35": "4zBbQ1MX76Vc3KWG3K4x3vdjaiQ1Cxn8iQNGunvywogoqtCxzKWMWjKHHjHdVox6wmz66oCJYpUsc95KfdxBgexv",
  "key36": "3ZHpnrwBvZbeZzqJaqEAvA447i2odF6BW4JAaKPdxdKEqHhbSS1pbNVkrc38zTVbcVM1ZXrM8vP2i8vVXTHXiPZf"
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
