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
    "35af4RRpkHBbVJodLNLKKrzovE4d4Q58kEkCsf62wY73fAgVgdiPwoG8joowRsE5RcDRbkmbdt5r2ELDqaHoDzek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS2PVqkwvFRKJovoqwDpbAQFaWFe4z4qRGYMRgiEPJWcK9ySxQsAtH6hvAdfXC5nGEfyL4dB7SEaavUSY5zNKZH",
  "key1": "4vB49BLeUsfzSfydgx9VooY88eQB28pUMUQczFzcrYbZrg1rWAsuQb6zLQPXLjP1N8Vkq1ZELGefrUtM7bHGzsQA",
  "key2": "AVeDAKWHXhgGx4QSHiKGBYwRQ78hdoJXBKmmq4RY3Ko4g6qEoEMWhy5sQ1qeU75GEvCREJHr13tfJERXswGDBqd",
  "key3": "5qKtuYwKU3zMBpRZj3GoYmzkr9UVheZQEKbZ7CKhbEMwfZcjYEaqre5C1G8r4nDhDGk4UpzyCmsYBgcMS1JPBJEm",
  "key4": "bDUazgHBQMkfu3QkaAFHRXdc5d8kk4zzHhSaQRi7XQdUTiAphNTYnkFUC9GSRvo3z6pbPprpAjDfMRkraNwkhFk",
  "key5": "5xQQbJ5CohK5dxfVt4G6f3CiVas9bPykWCpJDa5ehkzrmH9jBQECrXDwabPuZ5d8m2f9QkNBLWHZNanDhnobzxsZ",
  "key6": "2hW4bnDNzhbYgFXrnGFzdEeHwhE3bzWVhTpmmEstHyrqNydLcJfW6hJvzxTvY7NB5MPebPoTHmDufJWAYrjZYriT",
  "key7": "46S7xfaayikhtK1iPER89QWBBiA54jVYYGzL9zGky4aM7he4yeX8kEp898bsdNEAyHfx1BGwNfTE3BBkrdjV8k1m",
  "key8": "Y1qb5KfirT3ajvwhmcLFAM1jqqHybPvX3B4gvmp3yvFk7PgJoay8zpDzQ7QBF5KazsqsxYxjqmNfKyzyvDe69fD",
  "key9": "34TN19QZYLSZs8WDvBHYWboHYuBpFrZ8GLiDUhnQBCZuHYiAY5otvZHXrUXaemHsi4G7qiyS3gMv3oYbgLn6RisP",
  "key10": "8ZLbqdkcmtMXiRHTZBzBRpiEu5yYHK9dfkeHFdu6JgaRdgukJgve5NYjLXAF1QUYUkEqbcH4knQ629BHQHbnTgT",
  "key11": "iaPyVHX1bViLGPVtx8Sjftye1cDnCBxw2eSP5kfUe9Uz7kWEq1dBwetpaVymPjfj6Qbr89Ko3QmqCBxMvJFvVDi",
  "key12": "4KC2zQPbxwahhQW71SjoqdGafg7bL13AEe3w6iHGQypTVreK887kEsRVuofYAX1v3gpA9xWjzSU4HKqEE8xM5KcA",
  "key13": "2YDe9ZZqKgUFrwMvV6R5E817PnzXbgpxRdvHoT4QEfojTtiTQr4TQNKNpEATdu6xTbd8LS8ZythZvMdHsYdC9z3C",
  "key14": "4oDoRg2fPzvgWf1DG1TbSJgjJHbVECJG9fUXxZnjWomthHAAQchrbFHNprKXJtCLkNaxzrtd9HgA7jz8oheM3Quv",
  "key15": "34qYLfLZdQhkHmFJudwTdQswUfHkFM8m5fTgvcM7VqM27uxzkevaua8sUQoxs1hnu71qrkLCnbDE3y5WzhdmhnPA",
  "key16": "5YtH3HX4SkpS7Jm1cXDpzJAFfyCLs9xCMyR9bK5B4uBjXC2qMvTXxwcVgV1u2yWd5wrLW8PPKs4wBpQYYQzJKT6R",
  "key17": "2dzLaec9bjPtZruDKpHZenKXFk8XKGv8nP7BMPdgJ1mAzmuivz6d8Dm5phWLrxho3vEnBwrikNcYCdkTZm3rXMCo",
  "key18": "2VjLV1qDgCVYj9CRL9kxZKmEGv6G3SAPUcDWkJSGGcS5RSG3qWy1dy8NFND5gwoTEubLnumWuazUq4UMKG2W9yTD",
  "key19": "53gTJZ5oT22Gfoi79z51YVAL9yDzpsNtCuuFabFv1c9g3Mc2bJKjtkC2pJMmW6g6Vd3pQ1KiJiXusUdD1NARMTNG",
  "key20": "4NtpFnbyEwbvijuqAbTviRCe3ZnDsQZ2EYdtHZNry35BgpfUKqnsxm1t7UgNcq7p4zSHUk2UtT7e5VnL4utbSyhx",
  "key21": "3Aud9UTr9MRDWSUddg3A1iTGrwWqZ3bg3veVv9eFbWmjBsdQehix9pC3JrRvLs6ZwvjHrragYSXuHKtLDC4GgAUN",
  "key22": "5hxRppPEB6Tk3uPbExoESorwmJztMQiRRcEBFeqGEareVobGcWXQaRkJe57A7fsRUFhZMz1irko9aP4ThNkkr9H4",
  "key23": "R8gk3y5Q41ss5NkhDuQJ7Cirt19zriLCvnH3cResfjqmMEWXth5rnDf1cxYhzSxVo4mTxQXuSKQLoeDPWhN6roj",
  "key24": "5c3qsfKkJ7dvu7Rw8jM2JtFMRi3utqYM7b6VKAVtLvmcmuPJbyfAxkH9tp1ASkSM62rKbLXDB3Fg38PschWajYkH",
  "key25": "5FdnsxjEBVWUSmG8UwNkjiCrKoTvyWGVQFRv3fX7YF6asT6YaCjomNY8gRjrbzFAbCjBm7oyFG18fr4bxCPv3wnZ",
  "key26": "3hYFz6abFa9sLYrs8rASVRHLuyQ1Hsk6ZE6dt1uzBxh8vufkZx7LfSgDDwzA7N6XuS1KkA9ZzpiuP1BkuiWiqgGN",
  "key27": "3dHCpeQJpaaSZkPua5UUZu4eZcCBSWdanFkuqiF9Q7X5YwHb6Z8HS87ioJmwHsYPSR1yrS8ZzzZFgqZnCWCVyepL",
  "key28": "4rZNvfQ5VxPTUJyQhwugciQ1scdAmLqwPMi1Fa6eH6EENoXYFfUdMqwEJVDKmpWk3NasyvrVwCun2SrtAScg484q",
  "key29": "5do42VUsuPZk6kfGqQBhNNVyCWPUhVrmit7JA3qx3vYHkrY411PxbXCewJt5AuJEHxeZXC3pqG9y1Pfan1KHnNDe",
  "key30": "54xQGdeGUoHeyhxrAa6r6gQCeVvHtX8ZoawtZR8smuz4fxbo5HVEgqHUQ7t6wRAJtpDwxmjLMCXXxifUEYGrpTiU",
  "key31": "S6z8EPVEXznJMCE8FrgZCGpxTR9DaQ3nCrBdKr7HQhuUUQw2Nj4dwm54FB5EdENpR4VAB6i5Y2d1kt4fnveGwy3",
  "key32": "4ZUS64LPRaktv4cDCmJvFtthtGLrAw8FHFYKS8HsPgSAp4cj3us4h6tBrNrB8zBinNRrhsSXUmdSkewTnR5Pu7Gb",
  "key33": "631q25v9uB9BDrPF7zQWGPUvLsQ4jCHeyMXKzYBJThAm63tfGto2YrxBPCDPX76oUPNaPvi6HG2kXqafWgUwFXUN",
  "key34": "5VQ9hWeDSx1trZtYuX9dox1UXUDX2TtNEdAXDy6GzgGnrymHJ4bAcj3JVKEegCmWAFPvJpgXKY7ME2n6hKeXQ3Ja",
  "key35": "kYeWvpVFJTfQeiy8Lm6drMvwiZuF9YRaRB6zK9v2t43NmXBGXFpaEjuYPWjJdk4nRnzzjZa1HTgRGm3bvoYLXaE",
  "key36": "2AUHcZH8CubPFmZJ2QTVWkJTY8CBjV41ex55CDvzrdgYwBqsrWh8hNFGffHUfokTZVPzciS6EnWXZ4vCMiAnpNad"
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
