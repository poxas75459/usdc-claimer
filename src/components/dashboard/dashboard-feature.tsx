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
    "5DzWBmuwbpWJc1H4NxSbZtBHPqXkuE5Kdy6ErGTmgYvE2ue9Xu6Sy9cY5zFHoNHDciyYqgKfD5ayDDiKKVWpcn6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Ghmh4vBHzQonAMrxtGn3LAGxx2jgminSd1nEJuzzhDehfh6g2XyETSr3sYSA2sJHR2eEfeRJKUpRFjRAnX2kT2",
  "key1": "4CQVYFqKezqe9w6UCzE1BxEmdAcXGR5eWmzR6ZmCd5VZH6sUUM2Lb7xC9CkKGdXXZX7w49N23zYgCbKkNAbFxV4N",
  "key2": "37fxx56VDzWxjxxnc1YF3v9whsKkN9cXrUeqJBzYgDYuUbDe9Hka9DG45ffs83Xg6SjjJukXfEkLZXptQqU4o76o",
  "key3": "49VSUtXUYu958Q4m8dEHwNm4xf92jHBUYEEoRaZsCQAWoS7G1nmRVBpdBrn1Tsw4Jk3YmtPwF7ib3thTEnyf18Dt",
  "key4": "5Ddb3fCB63zUMvs6USvpcgZBJseASqu4JsDYHj7x92je3CtVQ8rHSHotXpqQg5C685zENxaL74PDirgkUeXbEiEF",
  "key5": "3f9ECPn3SaJq9edKBnKMB1JkeHVxsMLMwCRpmtHPQz18GEixs7Lr1AMLT16zTgRY57bLMhkoJRsW8fQ7V3F9WkEh",
  "key6": "3LAjUjrEMfKWvNgmegtiA8TK3RsBXVNnEW4gjkNBUSm3xBRFTroiT5kDMPhGCqzbvpSHaJRYoZwimJVVzJRXcpGA",
  "key7": "4oNjp9Hfa2ET7mKGmU9xTg5X2vLSBayfKtpwxHmhxBL2xPrCRKdCGAhNEz8C6cSRfsBwAX8xWXuTXtq43ZiKgTPf",
  "key8": "3Hby86emu72N5CbzTTWYmRm5DR28qA3zfoFqaMGW6nDDwv5J7dGu2Rry2fP7cMrTR9b52JYJVPi4dbUXYYEGdLNP",
  "key9": "29A2kQMnzWVTAjUaCKmmAS23rdFiUGVipjE4skQfjzaVXPRJyerJm5mGqbWEpMtkCyyJKfcCk2R96X9d23pxHyyV",
  "key10": "3J9yh2sDxdqDYf2W25bBgvAUt1J24bXA1wR2dQG6LbnNJ13YpchFD7HYR61SDyfE1RnvhQhfHdkbMQh2r7RvNDSL",
  "key11": "32XhLJUGPDmiFpN6BHhijLbDwJvy128EN6zLJX1jJvEGn62QCsGh8zJEgCpedPfLw88kxGZdMuJCo1mjUsmBnMRt",
  "key12": "5f73sh7PDdHuu224maPXoesfPJ913yW25jWdUTa76wCRjrTNHEwMKkoMAF91doKzf7Ao85ZH3cReD8DNTmisiL2T",
  "key13": "2iYxC7fSHo8VMYgY7F4WKJDmFmr69vPm6mWK23CieAh3VjjvBdRb51Bu6xQetQKGbaGUhHszap1DqY7oDXBC3VMv",
  "key14": "31Y9YvC6ek6edzJNzimKdN9WNfFtTy7NLy6UvDQA4dXxtKBvweMgug55RV4KZG4SRg7VoBYy1NWUPezx9B6emXbL",
  "key15": "39CcDFgTJd3CLsRFujKeAPJkiT9vCYPxkTn96iXMigzMC55Dr9G8Kdmfc7irCi7oLhP5XCjULjo8qWJ3MKyN9Wmm",
  "key16": "4wPnreTdKzAjhnqYfQkpxcrnffdt3ULH5FdXsSxcDQvWRDrwtRWwF8TGnJMsCHNWx8rUReDbNTbVAGwQnbecxjcB",
  "key17": "5eLWvrkWc7iQfRRTqq2CPKa3sujwTckZ1GHMMmaxKyozEwn5DMq4jXC9tusijpVwmo1P2bdzLuVyCD78U35MZvsp",
  "key18": "Vtpp8zfoUbjx4Vyh1aFpP7sjVXJ2rW34gTg7bcnK9wBnShBREBGefoKxXndHZb7VA8YYGRfrpzLFUGANoPkc5p6",
  "key19": "5czZki2cxMGHXDo66p6p3nTdEt9hN6epJNjo9NG8LgnJmWkhqEUttfuGSaA8M2Pgd7sHSLBCvLtLrvd26GPoqhiK",
  "key20": "3eevmTaeKhMgtT22B1Mw4rpoNksEjogVmv9jkuzpLrhSD6KAZ4QcocUwe2vZtMumd6va3QttaKcxXX3bc4RZAGLA",
  "key21": "2xzwiJmdmTRE7QzNmfQwTeDabDJx8cuBuNAoEkbgfH4226Y5tHgcM939XbvuC1XQrJsqeRC2gzkdwy2ejSoYEmg9",
  "key22": "xmfhsksZkUVWaejvodFkCAkBvxumY3qxVxTq3pCmoLeXpusC9H3dgATDXXKA5kvwkGhCeE5AaDm2Y2nzhjuH4Ci",
  "key23": "3BMoKvv3Q1LAHxr3jTvvMuAAsvovnxQGoMR7zpGj4hA9ZbmoVxvgz8JWzg3uCq5hyQBSQdrRVxwfU2RN7Swo26ff",
  "key24": "2FD3rm4xWj7F4yfCvyZ3jh8CtpUZWDZoWFNKwRD2hNpwvD2uRRJ1wY8hKrR8jqrk1usCfLGRNNi8VgCiTownhB8a",
  "key25": "5oDiq8adFGUyj8phH2Mh9pNj2uQU2F8mEUxposWkJLz37wrXaWYp3hEnrLDF6qPynoZQir9ZmBoy2aE3GwiaxnJy",
  "key26": "CHME2YaVDPA8j3vsAhnAS4SXjcL8hPMZ11axT9H5C3f8HoLWivy4mYqYzwRdbMnSQeYCDsjnjeXr1MCjydwCXTb",
  "key27": "4Mp5iQXDbMQfraxDjgHJairRDdQgydQHSPt9GGDs1b72bFuDdp3jsuHjfsGMsxnw1iLm9kb1aALBuS6XvpuV1zC1",
  "key28": "2TjtzBDYdgvbfCiyJLij7ME2KF7pTSARSwjXCXtJ69coHKirRHQEPwRE1BzxxNhtMqZNU9PNfzy7ZU6X4PoNcthL",
  "key29": "2RB612F9MTX7DNuq7YQjvw9pJZgbqJsRiq7bJmQ6or3LE25CQ9KuvzF3uwNGQ5ChHks4aC6nVtGwNioRQKzyKkgE",
  "key30": "ADByiV3N656xsqAZNJEpQMZAB9GH8Xn8xdff3ZENC6QG8L4w3qKSRRiP4WgiwjMDE54K98Z29yDLxREYhJYbMhk",
  "key31": "2eThE3VGcKxwFqaGnCPNumr9XNUm5eihTSYFcWKm51d8CiCFFaM4fhMEhZk5REuDNL2pxtWzvpfFewSUtAYe79gy",
  "key32": "2ioHem5g2SLotPDDUEeKMmFTyNjacWWYcgawW8SiYFkvXhiN7sdtwyb6oNHdKahs51GrvUqnJLfv9cYif3Veusyt",
  "key33": "3oSx7fcdfV8yyt4fTsCfdjzZKSEecSDRpCCvcipr6no9YZNZRdTyZ9YBmemSpLdmWe4SoZGt9QK863BpyemMX2PF",
  "key34": "36LpvnqP564po3PzDzzAwYo7bNtMMGvzp8gLdrvKiLZuQASiP5VT6q3Zsk87qNLgCamNWFfQs4QtbCz76iaQNRhc",
  "key35": "r667TvmDXzsigd2XiW45CiM8Lvp3mAZMmmmjLKNRUwjuALsUjPmkCKKNtFx4RGfKWF8o7zfZd59UVw8bNzqJUba",
  "key36": "TY73K1pf85atKwg19hSzg3dpgbJYGYbGKTC1aLSV5VkS4QYWEwfvtDzmGHSs7fmFMzHaKuzHnfP3BAeEXqu3rJ9",
  "key37": "3ELshnFaBDGKjYcCbxEN1xUNYx6tfsRo2eMR6TYPA5tN5cvpedt9UvLQXE8aL5R3HACtooQLD3VgdXTmkeWTvgpv",
  "key38": "4mm1xqiud4jNEdQ9TYKKxHkdz8QZfN326tvmrjQgf8EhUUmdm9qKuhbvzQykC5EUvCgaqnfxzyRUry7N59ma14Yk",
  "key39": "3yRfuHcuwwESGChp14swzT8NHr92hdikTwbj2GAUSQSLiVbbUWUJkrYRHYjwJYnmV3zhek3cqXGMpR3XhWiyDYT",
  "key40": "ES87PcLgJ5JoHPNZRbQoAVmDWLoDwifgXsgkMrMUWoEQCnPigHNk8jwCMh3iBv8DANJ6P9vmevrmb66hKdrkvVy",
  "key41": "4Mo2j9gMKfJA4YZd1FEWefCzmhywB9dEeyM4iFkq3gxFLXpPo23Y2JQaZSmC15uQxNy5mpq9Be4krN3ixxG7u5bH",
  "key42": "3LNp8pFjjBUzqgpE4xoxVsxaVE7Q4E8EHwycZwKtsgMNg1TzHdrmvQ7r142HDBKEm4azqdDcE3Z5ofGx9hP9MWy",
  "key43": "2QHMPaesCKf3zGsPhUn357JFwkLPVT5HkM5V9aW4NPcJ93XqpTCBB4WwkyjxiFRq5RujMgMJwxz5z7yDiJKVqXBf"
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
