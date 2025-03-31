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
    "5W3Qdo9sXVQcqPwmSsGi54vu2wA6uo4A4kvK8CAr252DFGoPX3dnKgYPoJ3yyWL5FDiMTwFeZUxt4EpzJn1GhUKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cy18CZrDDzu9dqz2EJmEu2GktJBeQ8jkxUBGbsyXk9eXU66rsGZD2PFhetGQivEnHYEdvLS3f4x3xwNyzMMrUyA",
  "key1": "ZfkDX3wyaWGQWwXxAqcEmhJgUacWEzSVKeRpN4Dj5tbiHK8fdRX5b222eRSUh8j8ERSJQm5QQwpx9pmZGgP8fE6",
  "key2": "4Nrpo5o1Ho2nziiKge2Wo58yL7YnKF8bQy8jdm7ebXtRksfM54mWM4kw1duXmJ9WGEKwxmucExPK6a6vN4neLwYd",
  "key3": "4BdCEwsRehZ4v6jgGjZkbSjgf5DYnnN6nD6YknZKQbk4edFtgSDoZo42gXqwHksptiG4jfxYNy2GMtcMsLHwMJZX",
  "key4": "VVjLyaKckBTijZDGKM2Y1PcjpznJqf7hF3nxmG3yggYDZ6EMQp3fonwap1rJ6jS2k6fyEJFDE5Kh5j2AUAzb95y",
  "key5": "4QcjH97VYu9rZozsjkdLXUDhZxF4uqzd5rSVoVbzUy9L4xi3xtLfANibQm3v32j3GJ5nJvwiEVEhJ9zVrE5Ege4e",
  "key6": "46NWhYjTGt86EJecHSEpiEcAgvcvRkHTWYxsMCbMQFuq1JVZkBZcvvdz5fiAULV6umHctM3w2KXusJNyjU7oDDbq",
  "key7": "4zSTZZzp3P9z5iiuKRkZrw4mk7tdEkQioSjr5bcWxBP5AgHWRAERkyYPvfAiBcqVWTDeXvnqMwUmuZUDNxCjKLVM",
  "key8": "2NLSP5fcphhwtMuqzWUqV2jg6WDHEeekHMB9HvnJ2su8v6p4fa1ez81Ma1E74Neb2D2V9bsDDShtBhsrHaiG4Hkw",
  "key9": "4DfdiKMTUSGxuWDXosQ7yXFBwXGr18KS7X8VfJ3KReG6kK5zkgAyoFP2P7hvQHn8VXkx7x4nXVibeMa7FHzAtAND",
  "key10": "5p6WWwpZFTHCbZHZiDBqMpaLyxvbG22wwJXEmbRkZzJGtkxnq781mgbQrp1uExGohuzL5JpjUUdxxZTnvxwDxC81",
  "key11": "2Ag235v5HXiXz5u2TrPK6ZoU1vHR2YpKySE3cj5EfJT2U9vBa42iiQJS7MetkvnXf1pSHsSNuzK5vowhWvu2pE7z",
  "key12": "5jufXXZdLgQDtVL2z3Xg9KdbUhZSohzLRYyanQyhP1YQSoEvCkLcNHPNCY6Wo7adzyfMSeFBG9gehNn4sb48okmE",
  "key13": "3HV6JCe9oyEkKEbvcQe3ERzamqM8GPdy2Q3iffoAahnCNJ4QkD2aexWVHR27CRWP345Xz7WEgisoVN9HLhDbwygQ",
  "key14": "jKBLyZzfjX39oAfaRPvNj9DuBmC4KAdbKrGHC8FaUvq1JU8sukk8EiCE8RBfLGCjYbXMkR9qkYhsfwJYgdQPhjm",
  "key15": "2xDnGnQ6XR1QMB2B92agCRKKnwGZa8sbpPSC7Pg2NunccJu8TaHuUg3skGKjiEx9kqN2HXLYavPWMnw9UNfmjn3L",
  "key16": "2ahRuuKjaQ87d5w4sTQcg4wEni6dSeUCYasLDv6LpMJrSfFr8i1ohr4md6xghxE9h9MonBxQ9BfJRK2EDM6rAwe1",
  "key17": "C5PiR9vtF1VonDm7ca7sZh1yG7q7WAqpUnNegfE2ELd4yogwYEH5TJBzLu3Tzw4Qn6wwXLhuUWLkcguRw8CRdmf",
  "key18": "53xLgYsKnGJxv9uAAK9TavQnugRtzPMnF8jdNGRyfot82djQ4nP12N6aQHBaoy359zfZJpuBH1mVZuFvEkrfjiA2",
  "key19": "3xjzrmWFxfN1oiBBj5TtyiDEiEEaDNsAK5d8Z5LWiWbBMaEbNRwoXzgAuKQ8d5Ly5FugYGRQwuaQHfcTM9SXnLNV",
  "key20": "2p7jxskQzA5aUBPz7E2Dd32Fh4eSQZzryVSz8yP5Daj9DEuELtfrowfkd98VKg1L9RxknrxjHEsfopBa51DefXPQ",
  "key21": "a8SXpcGhShAnx1fsJZVowThaqBdTQpqD5fcAraAMLeRLi81PXXSLVV3SnkxpRgkDuW63ZyNCt8h6j6buyBfCrVJ",
  "key22": "1aCe6j1VgALfmcX6zJs6iHpNfxG6qYt8bckgFFfVFUUgnZa8XekzpQm9GMKECGsJWuVDWWaxwVBk29cXw11FPhb",
  "key23": "5eh3jtuP7XC9onDcLsGzXELQnmEABgmKDvp6tR21yNdov5G7vgdA99bDpKs1oLxFPETvqCfczRRzqxipuhHk7Pab",
  "key24": "5LntvGGzyaBUMkN8JXiLDspuqAXfFpGwteXH7Vo74byLepG5EU4qbsEmmxCN1N9ZzUmAvr2SFzLupcGVtkRNgobC",
  "key25": "4yKyjMuocVUPBGHNigWLhDagvwSnwwMd6gc5LYwXDrN7L6iRDTyMJk31TQxEbnKA8ZDPaQ2D1f7RaHG1i4RsQkrx",
  "key26": "cQAjXtiMV3ysUXH8AoNJLyZWVBGZSDvNsARLhEUTVfdVL9fCT2scnH8hZyR2DhBEqFnTV63FECYthPAUnkdqRi3",
  "key27": "4rkuXjCmjCmzjBXsDNPhajysLQgtfq2xJVm7PVFYnNrD9PoMeozeFzFJ5X8s8yidFbywarEAzEUupDUYapWoeY1L",
  "key28": "4SKrAD7bCf6UsecvGRS4U43jNLYUXnhbEhB5fjtKBQj594nPeozcaLmLUmTE2cr514HgCrEvEbASgccJYFVi2do5",
  "key29": "34ye5sVWsw81GjYXvahncufg8GU3fXP3qks3VfTJ714rhQ2RYrqDUu8EXQiCT3KgLayju4yGS3X6GyW9FrjAHgxd",
  "key30": "362rCTuHhowQ7KSqhwiKqcipiLsL9gGYubXqSSgYgZ8oBeTi9Ho9i46hoQUuy1bYcjEorxYAkVcoa7HbtKkTrwqc",
  "key31": "64bo6ewEWfA8e8u2MjwG4qUwkHXmaHpwQgvBCqZyQzWG5rRRmbEopQBuSBZf6tNUwL2Q82u2ihXd3HZ7g9ra4hyQ",
  "key32": "5Ru753Um2ispheCQbRL2Q7cxNtmyc3EK7XJK5JHRKTuiEQozjnK3fja8F1YQWQrJefVvdX7J4tgMoAQLjihTa6dj",
  "key33": "3Dq7EVL3mKXUh5xvSWG2sbxMwT3i5nqnkGMmHyY4MyfN7td36PKtm2ZtQdSp8iWzinhiGQmFuPgMtkPkNW6KL4Eo"
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
