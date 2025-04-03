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
    "28texv2TzoZo1yGV13cxEQ6UrsJPomz6ugmhgksLfZRMXqcKckQkxLG3xYcsP9iE1YAaP3m5QYfSZwUmuSAWogVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsbYXL217mco5cEw8AtSffifdhvxCEjWDLwvqkxpfA7rgm6F8CAD7uqUqqVZ6v9cJfbS9qzcb6Zwi6x95Dj8NoQ",
  "key1": "5e5DiqUqmrx3JrLpXuMzihY8pKLcyhNrcSwqnj9mLvycs5VedxLz14jSbiEi4d9PvFhP5sif3KziKayRHcBqUntK",
  "key2": "2cKumVHjGNmLmgaoNAaEz4JNnd3fnus7XDK4cTArXTgbYVyBkrVAvYwehfVrLKr28MqT5ChimqwpzmDb2uACbkca",
  "key3": "4eNr6UNAtoKFpzrVshkAsrHjTm5EerCHwc3NWF2iFLKtiyuFZb1eURsvAy4cAsDatgb7P86Cc6esLTeS1sCuMMgT",
  "key4": "5FqNmGQpRy6JUxJ9DSJqqcwgCurxSvuWhDtaDSm15FrBs2gDFrEvjgbGv5vcsykMN54KwxSUj33iLKtCcc5yw8d4",
  "key5": "25rhDxEwyadBXRm8QdCc7CwScXoaZZt8KzRU3rUtvoEBwqzQjMmQnCCGN8K6Y8EPzZhqob5HynygWcUtMjzznWNY",
  "key6": "4jKzLHUSAXDedF7z9sYFiwNFadt8ZqWVz3ioSAQA4yBTDQYWRbevuPwB1daAq3CUTQM8BfdabYSYazK7iVCktbbS",
  "key7": "59E8Emn6un7VnDmMZYWSBLH6awUZBSfyF7c8gETGgC2g6ztYwuwTpg1zBe3z7i1nhUJ93D2W87oe9FD3cHVwsauy",
  "key8": "5BKsBwAKZFJ97tcAudxM23hat7tPuAT3Q9G1sKmaDo2qidVs8gxa26D9ZqSq1pa2Kv7dns88j7v6QhzhAGVgprHH",
  "key9": "23eyJtqiUgYn5SZHsdnB4zpC7iZQe35wrA3vQtHhmHZgEGYDZZLkQmwYX1HEZoGvDWUtDzaGgXD9nhhibNNZUYyK",
  "key10": "REDbsLm86d1FtYp3Zhw5Ha5nhCLZtPPGSJeSjZHfyAs6jwf18e1CSbAEvxNSBxWoJDszwxhNf8PGJmzxRK7aQBc",
  "key11": "2c4NtQfEo4fqkYTEwahmvU8HT3VTYXzk3rXuxTVEiDNu95yajmawGVbdyssfuiB3CeqPi8MKRKWw7Uxj7nnoV7th",
  "key12": "4DMtLWLVc2woCNoMhyxuAY3B4x3yXzX9DyxTdo1Zh8gq6fEyGYq5Qp9XfEtGA56qawdCexsruvAfPz32ffvBtJ9u",
  "key13": "56WR5WUGuGeGzzfoMuwDNmq375HR2xYg6BXT4ACExPkNHSL7Em3zimR6yyNsk7V3NDcRzPP7V17YRJ9SbXJXBo7a",
  "key14": "3wEi4crVTZgLojUVo51SrVbKpXiAUkRYYKpDRcYCNibk5nZ3SHJLD49W4y1bWd7yAcwKw8JtiFQKwf93rajiwFi2",
  "key15": "ECfcABRRzfJBL2iByE1xkTTaLzehwyYJwBB4AMK7PyW7BgCYVhNRXW2oMEprkP4kLodHtZg1usEttabZ7diBQfC",
  "key16": "2z4vsdULvEe2yLrKVxHbXMbVA8U3gi6myiye3CXUV8HRXjWgxQYqEftZD89kg9En5cDKsh7FJL8yBmrUBdQ6SXf3",
  "key17": "5fHDJuCCZNuqtQJeZSw3Hw9WRLnxKr2KVj4rmb7jqzT1Vz38afFW4vTYGBEJYGevBLiff575ZpfhdvqZ2dZbFJPW",
  "key18": "rPYPaZRxeoVfeMk3yR8XNKBCstrbu1dinaxo3fKtBnap9rbi8CfeuDxm5vi3JjgE5M2ojJmcFbyBP1tp4u8sa9g",
  "key19": "4ccnvMiYYL2SvcbBRCUWNuBj4pPfFqVf8CAwvXR82KsbWSzgCkwaYQvPz88zkmbdU6ZSTQyVeGAUJiSSAKjN9mzd",
  "key20": "5gXmMVAj45RKv3uxgCpQqYTS2qShZcREseXfaykA4M8s52rP4UgmZWsTVUY9n9Uw6hPYjgwxQXsWkNoQQnywyrGo",
  "key21": "3N8VazBjq7z34Hpt36LMiFH56rcKrmG6vUrgB8xPAjScQQWGJmoHsXJbX78aQqNta1eicQdTfmMT7pYQ9KTvMiyq",
  "key22": "2bgXZKA2QsjRoPxVQ1zGc3EUv1GZkwUHkRN1g6SHAzGtm4mM2c2hyJta5EcKnXo6TdhdbGEbZVrzEdv8Tkgc5F8V",
  "key23": "Nib4TGwHdfUXoxR9516rutkRY5RcYKCDcZbdjiBN3QaQHaZaZz2DWj1LECfJxaQm1sePcPnMqu6Ry3pHGSGfSbQ",
  "key24": "4G7axAZitbQFBjpPuaqYJH749P9hxHNN3SDSHFEF3a9WhhvSXWPdicLXdq1fh8q5Ck6MHoDEJMTFznL7p97ve9ZL",
  "key25": "3qASjKWb331ttb1pi8QfXKVGDroe3P4iMvTpis8XJVM5vvNC7yb3aRqT6xJLqPy4GbveYZjFNb5C7qNwCmRoLHPP",
  "key26": "2NZkiU8mxxjqzy2SNFj8Ai5NDCNALGP6xLXJs5pf3PvM62RCje2URe8Wxg4sWQvDidcBCz5tbwyr24wdT3DVzGGv",
  "key27": "3RYWVwGnchv7bFEGfnQw8PCPpJDhgjRcoGCBApVw2N8YicoUaNVjkTqHw4EmjP6mr9jRyH8yETxKah6MHyMecyyp",
  "key28": "36RciH1YXptJt2TZoYNFdUWjM6RCAYm1S9oT6zd4J5rYQCwx5Ag33aTVCb3d5S7Jd6JSt1tmrabDTPHWTnZgjyzs",
  "key29": "1eeozbHNRiiRcFxFE1y2bVz7CqgajTHGW12Bh8AuHid3n92Kn7UpSm2Kp14yquLQ9oTz5zaLzuRgnWA3Q8yB4MY",
  "key30": "4ZDCQ8AMQcGyrbMW4kvndjABdJi6Nov5TnahrgsKYjYNyoGHGDXQ7FgjCB7SPLiFchwRXSBb8rpMk35Mc5Lx9Fxa",
  "key31": "cYbrV9vuYtf8w8GDnKVAzgs3iguaZKWnQQZjVEB8UAJhwSKZp4UQ8cmH8CeEkPJsgrmnFxmwTy75iQ1s6XLthtP",
  "key32": "3Ex5cemW7mBPHo6Ac8b3tFxwPC63eKSdhRkb5VnXJVLk5HAkpGubkB5yiokLn2UREteuhT9E3a36Zx7PhxiashLs",
  "key33": "5ykm34qdkZ2peKCLvJd4CbvgcynutRNqEoXFKRcu2g4PhVULNZoPLRHt1CWfQPbG4yzGHnhFMwAmtnCnyZxZYAyZ",
  "key34": "3b2g7A4htE8NPmuT7Sd8kgrbc4dYJWKMbRdzucXfsHCDckAggkzyJirxMJ8tPsWWKpnCfktxV85HehTd9QVzQSUD",
  "key35": "24WoQRq5nrYgwvoaqbjvKApiEdvpZp15qzjLqbe9tVWU8TQKn196TKGwouxjthvsrZupWT9atSEkJgF6UwkCyQVN",
  "key36": "51Rd2HP9SN49pWptBJYok7disceiBHbQDQzSwyLmSakzXFsMk3SW1KGNZ7zxa3VP9CdAzbgTFMdyzTrNa7Myi9tz",
  "key37": "3Bsv4cZtZQqj7DL1BmKe9qTH4ZrTCpetxQwRtxbLBfYDjxVotgZTCz8dnkfyRYe6BYQ6ZVj6eKoow44L7UdPW9ku"
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
