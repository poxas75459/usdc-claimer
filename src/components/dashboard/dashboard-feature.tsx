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
    "2m343HgvoGJxY9PMeiiWu8RppkuiqZaA9D48neW1PFkyyXPLNBRU1GE2do3gY6CSkJHNim5PAxQurqcujyzigPH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mcb51D3GTWJUtBTt71rBhbkFE126GpwG6A4SgfaAL7SXGXYDaKttc58KpFuNafDeYHvABZWyWepWnNBxBsBiKXW",
  "key1": "56heFyi95dSwrGYvZvy6uLwnkPZ68oy8DcMdsDoyPxnFio95LwWUL3BtPpnLbWZF3nw9X2EHk4dy8gxs89aXYa95",
  "key2": "2cq3kxNvMFC64691atxFYAgwqJGU5sxuMD4ncEu6EhdZ9YSkXD4mimRXXmsYXSc6gsgjzFEEdSCPLNe4J9vAeUYH",
  "key3": "3KJbhmB8NTujrT7RDkGyF5L3veHXEw99JN5ffDhv55qkWKeLM1BM4etwWvpc7PwK7rrduPZjyMpS9irhnrKWxr1k",
  "key4": "341rCYZGTBfJ7VhWGZQPbC1geEfTNN7gcSohNbQZq3bJhPZ6LavXybvJsPaVeYmxvQVk82HBBCSZVZu9ZBG9cAy7",
  "key5": "2h3FBZNrcUr7vp4RR2uiNBgHCgKt8RFZZUdcphY7i4qfWptbPTwAWQEhwNHBUqXWYVx4mAhFfLKyCx4Lw4mXoNkQ",
  "key6": "2pre23DqpZoxcxDXX4NBTbKToKEmzTDcoNBJV1k32gpr7Hp1ndDMfipAs4S4mH1gpaDPV3KAwHipf4LziksSdmTD",
  "key7": "zvFvMtU2LbkaYDkCxtopVCy39XqzNSSea5tqrXh9pbRP7F7QRcpP8qDmuK4mL5Ti9umTqAqdJK8RedXkqJ2HHQL",
  "key8": "2SNUSFHibwYceuz8v34F9TBcwxK6iMfZVUyqrbpV66J54jNdkkZcrEuvoZtYn7NZ6q8T2qJgFeJELJsB8PNFPYqF",
  "key9": "3yciEQMjBL3sQPeqX5d5QQ23KNfrTfp9kLG2GdAi69RrUfgFxoY6mEWdRqE92HwWD36kcyBFN1j7NXzuBLTffxtw",
  "key10": "53zRWN6VDxQ9H3pBMQPhko1Pg9ftC17o78FQcS8Ubvyeds9NxtWN9KLWUr6vwEH3DihQrTLjUeKqb1o63iu5xfVV",
  "key11": "4fvSY7PezDVCJwBCTsvmoFGUJoMQHgTWdSqwrWRfDHRweLrKs81xjt3L57qiciiyijuqr4A4JUpEXKY6qWRENAdp",
  "key12": "3GM2xZ6SXebN6LkbgFREMCLti6tKqWWh73CBnahhY2MHuPmdfg6gnHahzARZCAMeitRbrVbcVrcLoTYhyMg7jaGc",
  "key13": "5W7rYNwmQwqPpCMkJXDqWsjZcL7beboN6GmGmAnfEp8oH8rvsr1LZcgqJfqRoPAqNvxjAej4xVEvq7s8xAGEDNqS",
  "key14": "5RGh7dA4Vo9F9T2Lf9TqXURyvXNC36a24gspNPF2q8TXdmAqrKZqqpJHAasXFD7nU1NkSX8JZJiavtMobcam4vBV",
  "key15": "38HDt5XEt86Ud1sXM2srwgPgxrU9m8DWaZLkCYQz1WxtaaHdfUup7GEQqJaAaT3wWFaccWHYWUB8pLM1ut8Ue9B8",
  "key16": "38xXhNSzqSFYf7RWFXP6nAmC8SJoK8mY8gbvZfUN8b6AFfdW2vcadsQKnwDtFJNjcLwUxxBoTF6LmYtesWTR7Pi6",
  "key17": "21t9dxHuqiw7A2oQUGBLh2H9VmTF4UFTSjcz5W5iaDnpGNwK3kRRzC5h1fReQDKQydj1QWdMEGNQgLSnATgnsqE2",
  "key18": "2EWyjbUcpUDrxnfsbjdNV1o8iCi3W4NVAEJtHrSWhhCTDnYFAjfmFM7SQSt9EWnKTVW8jGzvomU8Z7k4iucv62K2",
  "key19": "4xX9hFHh9humpuHxqzUVboEYPiVHNzUBE3nVmDSSnmxRCrJamUap8ksDBcB7fHgn34tD4vcUAXoQaQUDLpd7mnA1",
  "key20": "4z9FwUrH7ACNhT7QNbuVGAAP3jUaSkrSKFmiMbYN4TvXfy5zNn9jbh9cpH1ZT5iunpL3moG3xoN5c3cgVTQFbESx",
  "key21": "g5symMdmHk2PPcNWFd9x5LoWiv3aDXLzLQL2VEb3t5eP9f1EnbFSfLDidwzAjSisbcKZ2L76rtbXVfJ13BmwWka",
  "key22": "JhFrryaqaqdkhqvikesQLFDqrMjUodN8X49wjoHQ9V7s1irYweCB5b9zv4bUVE5c1NoUrq8cUMdQZsYV5PRsyDR",
  "key23": "5HpyDwKJfhehyN8fZrV8aYW9G6gg3Q3macXUfuAZ5RTeQu6cLMSEWeyL8mVXXsjidz7GZFtvJrwte6ReYchE9xgg",
  "key24": "4N2onRLcgfpy62mib7xkfZi6qtuErkMY5VpaNeNhY7CfYNoLcFtSnPZ2Zd9kNBaTy4c87rtBs9Nw9YBBjAjvaKN1",
  "key25": "4LMhRFNXZhUyJGMxNN2xUzbUFyCoFRNwiXbwsVkHvmF7ScEnUGeeURP33AXr5z32uiciYRQVsc6SGtXwmJ1mmyYn",
  "key26": "2freQxps8RkXfGuyRzQLsQYNdDpWBgST18u9RT9JJV7s2kbYUYJBq8rQG1yzi3X2VBc3HoMfatLicQCQGHrynPu3",
  "key27": "2fmaKNFdSqdFChTWY3GjU8zzYpei9CGr1y3JAi6irbj4L8oRrEkusM9vx67btNiFGLD6ynFr8SbtsMp91ATw2P9r",
  "key28": "3Spuy4qdBmqmiHzefUkH7YLTTocwXMNHSeUV46HU3Y6JVer84eYZ1DXJviXgEi76S6Au9Jic1YRadv9GT69J7cuM",
  "key29": "3ZN9m5X2PZw18s6HXaWfM2Jj6uCaX5AvZLeMndxqxmtY1AbzaThDFekDgYoKYK5Yrr8jtArLf8Zk7d6gXeZxB6Nt",
  "key30": "5aMAiNcMKesyHmGKoMWYjRtNLos6QaRS1F1h6McU13rPxhftfZ3TtAKuC67P9QPeqPCwYSCQtse5UH7qsmFiwXew",
  "key31": "5L4iVEJAgr1wWaxRtoCFXuN4MUqxhntbW1wEiQ5DwfPEAE8JRR9dFYxVyQwUfQ8dJb6M5AwVo9i5jziMwPuSC4C6",
  "key32": "3ouGJz8m83daj8J7VfUUBzazZSNCNNaxAy2JjF7nzMDzju7uFije5nrPzzCPoKrLW1Bs8iLugMe69U2hqRt75HyX",
  "key33": "36Bxq7f4Vr3U9c6nuvKdJpZFubKsCYo7sU8dWZYAbrwbvvFfLRGrG2aQxjEjD7oe7pisxSaNfyZduu44pgKkZEhE",
  "key34": "4bfU7i6Ga3EfCjqqVc8WL37HF2wxRHb4hVPeMrncY2z9bHthMSm7qxgZXG37WhtVctHAe9X94vuwKtw2G6xdFwmQ",
  "key35": "KFdmgJsJQjdDYjxkjBAWEu2k7KGameDakwdKfmMSxB87YQ75ZZrX8suRz9HXsGSoSUN2yYPyeK2LfdsWBSACaPY",
  "key36": "5hB7v6DRd6GfsihfnbShm6tq8JnetZ7xBX6DLBf2RTmpjsT2HLvVhHE4vQmb8QW1dLxtponE3U6iDqt7X9seQeq4",
  "key37": "5tdeB57ywTbncSAAgpSS7tNCczQuy9XAZgdmuXSd2JJcQbV78rDisoQrxf71gLFdhizgQy5VidovpzMD4z8d5Sug",
  "key38": "5hdZHb8b8QSMxoEiYvDtWDqRzpJvEfRcWMRTZmNZjdfFC1aemi1aBMmFHbpRBNRiShWSkFvpgvHuw7qEnW88WRan",
  "key39": "3JeKygVNqi6XcHekeDX13jcetJ7ULdCxj8zdkBTFWBCBci4oXQijS2tscbhtWmNzAzNeZnQ7ZMRoJLceiuBedpHr"
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
