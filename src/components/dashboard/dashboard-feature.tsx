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
    "ST9wU4dSEUnuujDECsEKNPggrYY5LoWzvX3vzeG9GaAtrbob9RrTu73fCwB3wqS1ogEzjMZp12MkwdzKnKaH3ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzsqsSSfWXokNwnkzBZerRpTbEbkiBUXYuH3Yy1WCAFcxw9CGozJPBDxYZWanoUumNtgu6aAtHjaCC48ZzKgdFQ",
  "key1": "5znbzvH21HbvPVWVAZ2CMTUNLQ3NttkfFc2sLbRTrsfijnX3byy2ZFifF4bJC2gaKrEu7qMYTCXgzwMUKEKNTmyK",
  "key2": "2XFd45xqJjLx13XR1iBZWvHY3wRWqSecAv68Qeaa1kd1VpHhY93N9TMUU4mzNYjkpdPxg96WP7b91WoTobmJhTUV",
  "key3": "54RKG4Ji3g4ZGhBe8qSP4WDxJiKx9WHrQCcdXUA2bHaKLZkqr5U6fQpAVNLpx7euC3ziMTbwrV7WqLnSCC9nX9nE",
  "key4": "65cTmHCb4P4xV3QazLHzdVEgcpUZ5QLEJTe1c88eSzuNaiLyWTcXexoWYkJnTdD7tGnBhZFT5zoPmNK3Ln4GWyKh",
  "key5": "4tdyTVFpYb1rqkDcv5X3oQ93v7qZfs6o7LuQKCSQg6pSVqAodvrjV3CJA243kqGotJi3Smqrm5yMmdfBs7K5KdjT",
  "key6": "4ytWgTdvY7XDWcgbv71qKHMeCi9fzPs9em1mSWhAjdGTpxXAvDfbKjVpq5spQeb5rboB6ENGD3ThtEsteM6PFFg2",
  "key7": "4vXWy3c9YhdSLtbKcMpLVfMiAiyvEzjQtqQTtD3qha1QWLJBS8qEZLft4RwaxR5SoVgq5h1E8XtPu4vMS2hitgDq",
  "key8": "5kA25NsJbcxgvSiCq58WRp4SHhzUXHGTvPJLG55mNraxQ62SzGPJ9Kn4eHa6dgcdLCtcqFujtUPpvDuxc1xXV3DC",
  "key9": "oHXmXaJpLXN3ANVw2azVDEdXBP675DMBdj9PbvBhmoU8wEjqJRNGoU4FeaPCLWW4DN1i5UyBcvLGbqZRruqz357",
  "key10": "fAnPqH33fwRZ9QZpRARo4HrbQA59nUxkZ7VZqDr3JbHg6qmRnzifUuctFgfmcSxQYeGkKPiLHCsvbprhvKBUXNG",
  "key11": "3BwhfoRDoeZEH7AF53AWMYmjztPpNpEpKSkrMoJUiV8Vzivk2GtBYQqFQuKFsS9L45irec5AFYvvQERjjLG33Wh7",
  "key12": "2sUFycaHnRLJEbRVvDb7BkHhnf6CzExJUobv7xrje1J1YFWo6X2n13yyqZzY1Pcyz8Y3iK9RRz2bxPeeCSu9bZer",
  "key13": "5FQv3L95YXCPa7WUtWb2vgioCTZXspFrV7w3c5y2XXjpmVFtfNbWyZoAWcZUBi7iEVaGdjayptWzptdHtwzbvQ3H",
  "key14": "41jkmSi37cqSTNfaWZRYX5BHUSFa5PyzB9mNVPykHBZrqPGK3cmRnnJqKLv1q9TBXhdeMqKAEBd7qeGRUxBs88Wb",
  "key15": "wEV4E5pf2LqD6VwJ5sTHguLa8WiMfgNErrpXRvMkdrPbKm1BqstyxnV6ATKsYDZiAtSxxDiz7JwqWuqRZDr1Gw2",
  "key16": "5MDuorxinAfrg8pH5UmL7c65Bqca3THpMmBrTvjFmn7BjQbeb916jPpk7EVoc92k2cprCtKf84aAAQLghkwrg4Y7",
  "key17": "3yvTfsZUD9dYosNE4nvQdgp7wvPVWzp8tK3HiRAkWvDJ3Q6rCygedgqAaTLeiCu49xLSjMFDxK9tCUHa18Zkh6hU",
  "key18": "2xn7FfLnxkpdvvN1UudZzsK2fyAfdSsFLYPAJ1AdisHbnyoWVijxCfVwCcHfPGgaidKTb6GEDfrZSAWE9gqGPVuk",
  "key19": "YD42nHzueVarmkrYyms5LqSVLBaVe5enhGW75eYGAwUBWtNkHdZk3NVezB3TX2YTkRKnXpjSDopkmh7gzyFDRuN",
  "key20": "3dyg9XzZnCWC58o2MURNUwMvAH1wKG1dhGoorsPzdiKvThkEUjTF3jQ7Dhb8RY4Gi5jy1AS5rcp7o4hLJGbVN4hV",
  "key21": "25okRbq2zMsuaC1LY1W88eAZUn8d7BJhqMaRAZgQbC93UTx1Q1uw4pZK2SaQ3AySpoCuU5VR7ZCrLPRsCm3ARvQf",
  "key22": "2VaQ1qSpY3LsJoD5xGucRZ1hViMk1LQAEtNKK7qKvr2EBWKEihZzofU9A9C88npX4xdFKpr1xPPnK76ifgqmktYt",
  "key23": "3xD4QP6YUyrf6M2c22NJh29RtTmP4nqyh1tG32aJ9sjci86iph1pi5PS55bm1LYbwUafnagcGYT9cwmWwP7S3vXn",
  "key24": "55hgH6jTt1Y4R9q8ewfNFm5CVMK9eUdD6gNhpJFeWbDMdfxfSXtR3GziSbjEcSXqvZ7scfkyeEez4B68PKG4Xagi",
  "key25": "5u6vtbPLSovqeGUF4JW4YC5BXozuUPL7qj9U59EDwfCxEMujt1Z6GWPPDXt31Vy4cMt7xRqAkXALFVourtRad7cP",
  "key26": "4DGGXN3UD4sumSoyTDZCLWez9Qc8sELZkV8g7x8Tk6DfRcvJcJfqZezNufSWutv37v4zuxMt6Hp6rrRHBqU7R1tD",
  "key27": "4HjBWJibJ5vpYdE55ipQEkDZpZUELoLd4kyoGaLaDaY2UD74MEViYE4P6bGTgmpVYjMhGkdQG2MAT7e3Qrw15sS7",
  "key28": "5wAE7V1DUKw7kgwNiyEx4HgEctuR5B4z4GwtfTqLaXQo7ebqiUJLrJ6PExPmfiKkJqsSTKX68xioMXtzXBgJf5UE",
  "key29": "2Pk6NQ3xUUHqAAaFYHJ8TKYijR8DGWJWYytqSLWExtR6yHGR4uTC9wTQ3oMxL4VyMYiJqVHv8dWcdD7Q1emy4WqU",
  "key30": "4NjcvRDmFWLzsDz7tBwByxs93jxoNosAHVN98v85jjcxbqVU6sYSs5cL4Y6FiCqvyymHt6PWLV3vVZZha8LgAgpm",
  "key31": "4fn2dpW8vULvkJKFP38J1HJtfZCgJ42RkWw2EP3XPwnogwuf2gq8G1svrdZKyu9qAfBA8b4eusFsuFMEe7n9wVXZ",
  "key32": "4CngkgH3NCNJN1BJ2V7XUPiB1HJxQysQCyjDUyVmJr421vw2ngzZAG83CQY6ENvLnJx4psJwBz7n7PSf6da6F6xE",
  "key33": "3EzyizkdbWLLuudGGDz1Tp37DMoAcGvoLeHkR9Dbq64W7aAyq8e4oUExN64FCbVzqkpuG1aRS1menqCehNh78wtF",
  "key34": "3BbLDJBjpggQmYBhQ72Uw7CWQza4FvvrKxXQXMtsd7AMwfWLdP7ewF1B4RKqG5pnVo3R2JCmNtnEZ8NebXhCqVXD",
  "key35": "4367v6vj12JxAKMZBKRuEfyXZk6Jrd1nbABKZy8aEJgTdB7uD7aVaJiemZ6f3QDdMPvjfWaEah46DPDk9LbGeD8t",
  "key36": "EwKMHni6ppmiAwLKvqSJUojc9JeE913jKpkwUPWPmjJRjm7NeoeknywrkDKVT1pigUGs3uNb6fbXfQo64Y1p8b2",
  "key37": "3Gi2qiGgR4LWK9qpoerYm5y7y5VZG6dgX4euaeDkyDbso8A5k3RR9s4jhGJAR1zqW924GMNXkFNhWE4C7GG93vUh",
  "key38": "2hpJRM3KdFdHF12nE7ASp7HBvNqSwB3QCVnBrQmX1HKHohxQrX2LBSFabLpVy8vpmx32Sw6c2ewfsPdFm6uwJQCF",
  "key39": "3qB5Mwfcmu5apGJ2RHmPhrHezvFPCPZnXR3C2E2uEQqogk8cJT8iTN7KkqVSLWU9hhoojFuSKrW5cjbvZB5Pb5N9",
  "key40": "3Z74hAkbiuoLKUkR4EHhxVXnkR5nStB29tdUZKsbLC9kaxRmJbFtTAUCKCPGt9KXAzrhcUZma4oifVtHCFLHaeeW",
  "key41": "2DURTPdUb43UPPDcGM7FCahJFiCztWrLM6mjMsTj6Lpx2Hf7ee9Kc9WN6narr3bn1HhznodcsXXPQ3MNqUZ6U6Q9",
  "key42": "2jvU982rExDui7khcpJwMvGPtW6CKrAUvPTjbFotKpCXDdei68uc23VFQtfdKswmeiYPduFKj3Gtw2fGB6ZB3iuB",
  "key43": "4hbNjxBDVHzfW417HxvhihXQYjuPbnA6i1euM5x7vnMeSw195stzsSWbRKjFdT4WsgJ56WAMJzQAjyuveszi4K9g",
  "key44": "5VypdZH5jNdQf7BSVxk5W7tftgCeju9b2NvoTBRK7YV3mnvjnaGbxwftb95dfVW8JuMKVkyEdp6yeWpqSXaZ9PhK",
  "key45": "23e2AD9V6EA4rQiqa9juFiXmhzbgwL5XsxnXuYeZm5v9gziFEveLMDhBT3GJ1NKZYPju6tDzfW65vmRnF9FzuVtX",
  "key46": "2yYyg6ziepxmhsQYkJcCkpE5yYeWaWrbhrPZoS9BqetGvQ34uqM2a9tSjYWXQbWGkiuVnceEQ4qzvGxBFZAeWMnS",
  "key47": "5r6RCJUKzrfKAQM2tyZ3GWvrqqAhg8GxyE6WwUpGrmSB8M2seUdSAxDKXEg8TKNf116yqHeB7SUnPAh7UXpKcUPS",
  "key48": "3cZHxXKbVu9dsEqGVeDF1vQLRpbKnK6KC7hRZ3azoSCsGDcHLGx3QL6Mw2gzLTPFKMPLaKYchCFJMHkTpCzjPmEm"
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
