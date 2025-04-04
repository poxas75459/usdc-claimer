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
    "41kUKNxxNjBAxvXZotRyCBTccJtYZQAQsQocayxQ5ewg7EwnE2i5WrkM7hyDRnBAe2iu8hDRccjTchzTJF37NkKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tAAivXJJUsPF1mf7VL5Nwfo22SXNNqZFPJtURqxYr4cFN4wsEbxwsBYNeXxEeXfCtotcGhdCTFwW8FMa8xa7Yq",
  "key1": "3eVwcRefGXfR4pg451Lk8hu8VYbE2nk1c9LRX4rzMQ1zhyqtygF7mZy7nvvzVaCkY5uUBBDQ5N7vzdoxdGCDP6hR",
  "key2": "b6gCyk3a1XAqkdh2jL8xQVzPRPHdAdVDgn59fETnA2Yth6QtVcXWevnDazHYRHv2YweUBfqXTz5U7h8oBvATopb",
  "key3": "5L1n6DfPvak4fnnADcYhqGSwpPpSZMk6WUe8vmiR4f1cX3odiAQg4zf4kvCujkKEFitJbgHbarvSQaMQGJhFEhUc",
  "key4": "522p1Ez9yCMA9TGzbCkmUXqpDaTThzLHeEYmMZhsYpacK2qvY9TBUFzBNSUyGM585LB4n4Wf1inVc9NMVnAamvUB",
  "key5": "4MhxZsLmsTASuSD8Dybmdyx6m4X8PAbWjasrquZcAuxD6WwpWuDn1Up5WVj3HFMW8JSPJYzmMq5AkKJt2D2PnuVq",
  "key6": "386RgeD6i2c9RJhnurjCBYJwVLLjSAy2NAug1ZTLNkohwVjC7iXxKHe8sM1JSirDzSqnxqvWWd2g4yqL6uBBrhf2",
  "key7": "4k2mdTNVvrrDKTAVdJX9pY1gyLU7xpyBgaGtp85a6mXL9de485iTrrtXkU8QNbAqhZmqKohpgk3s5ZmW5vzE6jVv",
  "key8": "5xPAA9M2fMzTFaowx2obeFM2L8kFqw3f1QhFWQfUx924zkwWvpDPg835CGBLHzFvuujjLmCCQEtJKCU1VEjW2hWq",
  "key9": "2MXFmuEVgT2AuaP6i6oH4GrVT8haPcZc1hzWXNEBjjDmPsma5gTK1MwbVLaQKNCW7bJV3dzxBzjF7LDUQYLPbx8q",
  "key10": "32MyFd3Cs2MuJBDy98QkGfmt3mhN5ibch5VF4DxYsW23KZW2xqTV3bH86Zj8qwntbg2M2WJYwHnVgKjDqTEFatSb",
  "key11": "3koxvr2E1zf1BojvQaD3mLXQiN1RPkoHxqn8fFpTGA21fXMM7oh2usKKnNYuNDtAoV1bDwxGPzL6ftgTLtnBgj2x",
  "key12": "r9NyuDjNrkr2KK7pB3uxNgTQiJatRRKLgnV8QqaT6Z6FwNLudhjhfmSdT7QbUhUfhv2NxonNtGqqvW6qyjevRjv",
  "key13": "5v8qkreEYvceXUCpxykrRDRzS2j1V1kNknsGrWvsj8VQzpJCyti3rCyi1Avk22uV3GYjgUycEHFApbdsysdGVQyt",
  "key14": "47KgvsB9zPoyxTwevS4dERy4qHDRwQ3pRUCohC5LhDxrwFtVX6W7TidzuqauZNXULenwTjppFoDmJocWuyLcHwYG",
  "key15": "5TpXk7DtBc1S6m4Kq4MCamkNarCy34kDhfchcvZ4uNUtW7BCWTsy989gGjQZ5tH7cpjHwZmbki9CfZPDaJB2Bz4q",
  "key16": "21Z5W1Yn1fdTPoE8L2pZ5F5gHGENVKVhdmmSuWCxrg2Pyif7qAhNrQqjp22nQa8eLmxc973bg9VoCT59CMSnEhhp",
  "key17": "BxSeDSnDRt48PSaNFGCJbbjj3hXs3tBwq7rXacNRBLpQP3V4Xy8obN48ZzzbqATzd4V9AFDouxnSU6cqZn4jyK2",
  "key18": "5YX7vaWUMoTouwvPULu1NHyUMVKaKWpyQJF1hwoPYpCFPa1PG9LJQZ2it3Gg8kBE7H3gtoDZ7JqCSgMMXj78VSyD",
  "key19": "5CebgubF1nJ1NvHnKxdZKZ2cdzz3FitQRU1rW5vXneVaV1kDRUh82GfvBRbEBekJqe7CdKEP4nKjfUM5aYGoTEtW",
  "key20": "2VAW17xk2D6spvfqsEfuFp2HCDJwgbpSy5QcFeEjRtM4tr9A8Rg3tiFGk5Mu8mYP4WGapR5PKMMhoZfrev28iUZy",
  "key21": "3uShJkSEw5B9bpZAJKbvampBxXMrVeTwXm6QbkE2HRa1p2G24yF558UWGTTANR4kezgEfdtHbn8oNLhXi9tgWmWV",
  "key22": "ZQsEyoByjDCCE3EgWDSTc7tE9bYN1ZXoTehekppfW3jny5bBKh1bnRmMvVj7X79KTXxWk4v1cfN8ggBPnrvfcW1",
  "key23": "aXMU9dMXJ45tLB2qyQTc5xG6nJ7PQY92WmmYvNWZCk2c9RpvVxDUfHUHuJGGgVvjSPj7yR2wQTSjTGxsVipfhhZ",
  "key24": "6XvjBFFygwyNPUycsQkGY5maXpD71u1otNtYat56Eaa49xoaABZ84kddk9jtW7MFy4SyBrsXvavNqhcqkGbWoKt",
  "key25": "2GBcJUtHG9iXYk4rk3j6md74BYZKwDcFVGNqwGDRzheeeihCH1A7dVn3SAnHVdch4rHiZG7SCouPQto8frMZQ8Qv",
  "key26": "Tow41GEjQXoaedsHJn7VtVgnedupTRFDgGJZciANK9TZNjUR4xRmXrDzs1cLp8FxSakMnPP96qK3Ktjt4dkPKpg",
  "key27": "2S16HLZRDks8NMkPrKfb5dZzYeWMhV6MVy8PyWf3tZPHp6ZK4qzqMtgnE5GCXteuUHXWkPyrn4AJjHbvzMbyKeez",
  "key28": "9jQoNgBUpo1JUEtDF9hCHnDz1H9dhePVrj4rT2Vph8H7wqc1b2byoNaCc2K73bjmDGsViJtjhYkX9hN7EodjoRp",
  "key29": "Cc7qWuSDSUpuPpVJnQ7fZQk2SB2gqUWXwDU63GUKgzMZjrTf5T9KekTdh8rsYeG8hskXf6oMvjSTi1jGEK2zPUF",
  "key30": "3K69oqgVsr8XHxmtFwKzRyqA7dLPHRrfPTShs88zutL5PvZZbrp5HCMFVX7jPdnVXSpc3fyzE6QvVskBAtCaTd4s",
  "key31": "p3Z6PhPsdKez3yzQeGKxaD7osFqM8RKx4nz84hrjA9JiqvUZKcg7uzK3eEbNuvWXHchkro9RaHZafNP9SE3uXu1",
  "key32": "5YpiqBsBBP5JWfgKTiGLcaw4AnubZnL4o2ysb7qavjdsQhkiQn5LBZBrvFsS139Fx1sSGBouWnzTvzQtBQqyNp6t",
  "key33": "5mR4TCPiniErPpUQjJUydUXnJZmretcUoGcaR7Vknog2ABmampnA1E2iKz4wCHN3uYsUVerjdAs4gxEbjVKrmCJY",
  "key34": "3dYwo3UzoHY4uXDJAhrmToM9yYCMzMSbisVnPVQxPqJr9KDhzexKMsiK3S1rPKfNfyqSoAeMVwDarAQNVUczgTTQ",
  "key35": "XGNnRmbkbDRHxrVxKR7SSnSvRHQYDRyZwys82Z35c2GMV1gVXXjK5Y9Rj1rjPY4PpxMF8k7QacxkxZ2yF8vYRGK",
  "key36": "2P4zHnQeym6ZmuzVD58nqVb9JTB5kKiBnfKYQryhLss4XyyaHHzTrVZEu49kh8Ps5Zyz6AQdqw1jTtBp7XuZj7Cr",
  "key37": "ibDWubXYxKStF8Hg1ak66U1LF6TFb5QVXN3tGJvJ8jXu2CDQHkeXWFQ9tssGh7yJWXo6JQZy6PBhbB9FjmVuDLe",
  "key38": "4PoHrxi1kQmdiQXm83Ds7nyLkdwTfRz2xDLcfv5SkcAxKsWE1VgG5r17GoWJxdsRboincrYNPSne6bgHiJxouRZu",
  "key39": "4J1AMzU6rMzoDoK5Mifg6FFxcaqSDzHN7QkNuKbPRTd7n8r8L2pYoDxgZgyxWzYs9NUPKd3HN7r2hzb8BgPRQrzS",
  "key40": "4LZzTvdfdLJgCSQpqwdd9Z3hWSTPaM4RXMzZZuVqTyKDd5Pt5dHvztmMLVhBBYn3gbYaQ6D5gaEao2eD64Fp2xQY",
  "key41": "RQ9vThBt3sugsHuuBjRJgx1D7pAtWmVhyatkA5LiEm1YyMngxuBboczFJuxx7nAE4r589uDWnzryE4faKLwnSGp",
  "key42": "5kkjPbYWWKNfjyG7E6DKj7zWmvqd8e6x45YJBmkCz8SYp79Xbt4iri6kEqdcrykgcftBaDerS8FMYsgu22DnqFyv",
  "key43": "2mFH76C2gBK5os3gmpcet6EPaxgmFMvhXQ5KDG23EnDVtMNz4ifvaEvkiB74FBxLuhGadT5rAYn5BxWLNYcKsLi4",
  "key44": "3uuUMBsVKqWnEJn6g632zo7S8EE3mpdSk39mQZcgYTshouMyBqav3i1Mcx84Ln6wFR4kZcMtkEbDmRFvvjyoQ2tM",
  "key45": "5uzZTcCCKgSkSUuP6TrVEEZKck1EewdPEwkto3mXRGQk7rNRUE89iDqwKGgC5QxHpX9Aqxzgu5yX7YpUEPabi71b",
  "key46": "XkKqtfiqY6mydxDUMJDvEUJoViyzkAiPgpyhnoStMMKYMerU9XnYiHXkW269UdG7RVgEWviGRstVvTXdsL1Cjc5",
  "key47": "aqdD53WYvGPDKfSNEDWMojEBCJ2xMPSwy6BPobn4uuN3Lywm86x5jojxQvGjfkKFLvFJYYjL6cyAqEPkUPF1pG3",
  "key48": "24nwNHhnhLgmsWPndojjeuEMSKwNTKhhhJpDeFnJRhXisfoBtUMq3keQAfaNLrKZJEqm4R6DKTStSpa8s9RJWJfZ"
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
