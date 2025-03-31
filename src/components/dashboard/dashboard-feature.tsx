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
    "64Zf643aBV1q56GrQ9e3iW3u5c4w6xP4gyyvLQ5ZkwGbNkkfZHc4t4MSch2iidYrwJwcEeEGdDioeECbHu4eyj7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccw1rMWWY2Rg2kt38NRzGWL1S7N4jF5goDmHNqu4RUcDhafMZ6ryYTKSgJwCmdt2a8pCBfybFi1VsMMUkqtbuop",
  "key1": "54eVKSKXb1cvk8yAp6X2tijw3RxHJNU6PYUgYX9RXRakGUeFbraA88rTCHVHXgbokiv6Wfxu9prhQVFPvpqZKv3i",
  "key2": "xE1uLUSx18qeWrwKKWBHHEmoeZ64LCFtyp61dQBJZM8xY4DBokZB92ijjcaab3eMeJxyMhzgSy5iaHV3LSKAMAt",
  "key3": "5uzRXy4zJzALkqQuj4Kcu1UTnbbPXoid56nNum8tM9TXKe9hDtzZzt2k6Z6UXK8u29KEAJLZWtiaivisGxrpMGab",
  "key4": "3iYHMxDoq7f2K9PrZTjJzP7Wvc8BFJk7cv6QeSpT6sKCBqNeGNnkxjYxk2Z2RBn25kU2VLRVuHQes8PA8kXfJETr",
  "key5": "66r4VgtjRGGqNBLQ5yjyj4k3JAT8vykoPBFkwezfpwrmu2sdVupZrJULz7QG2rkXpxtq31waxwhqLN3q1z8JVY3L",
  "key6": "3HSgJ3GtCpVD4wUb5k7B5jw8cxpdxDQjvtXCeU6kSrkvAPmKmKRqVcXkwwEbvqZEEKkqtDWvBYdqMeBPq6pKWLei",
  "key7": "2BbanYiPChJ48aCDdxQWMKLCuAj9VtHwDJULVFeEHo97Xto14HYFgE7pMgAaxYATk8RTKUhYYeQpBxSXEeRhz85b",
  "key8": "5JJM32D2grd15866BodDHuJ7NQseJJPRyUaihLUMyJdzZddUkmJB5JiCFviJqMkFyGk7LAH3LSLoXPacDF1wU2xe",
  "key9": "EwkXa326YL6yhPqVV3G4S2GwJrd7Cprh9NRC6smQ3mrHrpioKY3NtNKGhbUtdDLB2BaQFRktbyARkBtMqFr4XXH",
  "key10": "2bAu5dxXcCwCujxfqWFYVk7jqL1qQi2ZWsNH3QJxffAmJ3dxaHcxXGt5ApfLeahu1ToU5ysmHLecBrp4PNNHk89d",
  "key11": "2BCz4PQZR47jmiswtxETqU6c9Bt8D5G4pc9xovgfZVvjL2uTDoigL9b9qSDcbsNcscfpqsdQsjwiSteusZuJFoYo",
  "key12": "hYz4KMF6TijbiqEDF7jegQmQoUMfDmzaDo23iEsaina6TQqg3KsALHt2g6DnbvU2znGpKXLDFXcZ6nE5KUxVL61",
  "key13": "stMNfjccsu65UNHe7MEAgFrv9t2vM3u6fTPP3DFCwRt4cqkSMsaHppNGP9AkWxaRu8iAt9ETQLzSPZxQvyBuRkt",
  "key14": "3diZkKgtaoDSaRJCxj5WBv414vCNLVKB76fc9SHKcjs27J4LBExSHWrwyKV46UkqAeHWiFArqwWJfYDdXr3zFSL9",
  "key15": "cLt9um2mKSJjXL1WK4dKBQj1LYA3KpmhqZEyFLgPZd3p57A1SNy6G3qHeGpwNkywiHEMiUgymNyAycXWUdhDUZ6",
  "key16": "4Cw3ZWvBwFECxXNd6ktPAbcJwqP9Mo8MaM1bJymd79oh85upZjJUwAdKJp8drrhzyScR9aR3jGmtpkTvbz4eKmQ3",
  "key17": "2ppenN6RXajD3M7CB6HiWRMGUVzBkw6F3BDs9y773Us4TM5J637sqdJN5HvCUWPaVW6niFHmeJ2FMgAWDgu1XhSh",
  "key18": "2XdUVQGJZMmoUyDFuAsETRtQcUF1tLFmhcxEnMtRFhEPEgt415LTFcMFEUCUGHj9Wvadf3WqMKMg5gJfc8zkekjq",
  "key19": "28B2hKJq32P4wqm4t2oXkJoURsm8puQTbKUJurDvS3Y5mQhTFeGKnPiQWnLuWYbCPDYn2VcowtK7rr5jkKV2CCmZ",
  "key20": "31yxUrybsbBf4RkZ7E7G6V5Dh6p54UjEquEhNxoYWPpMgFzBcMz2uoGNGWP9d2caW3QyC32PCCoHmyh4Dujga4cq",
  "key21": "4KnTi1YWTmBmyQ2AkbE1tGD4RkZmr2kZfxssFUiCf2P7uSewERwD6cCqWabFhFTRnASJXccPz4ZCAYdASTz6eSCP",
  "key22": "p4jQdhwaiPNHJx1LbvzDtr6bq1sQj9mVvZgR8op7jmmJCJdAcjXwv5zpQpct2QnaUBRBkXLUea7azPw8QkGVDU7",
  "key23": "42MXzPykkSZMRw8zkEYZVDugRNgW5eNVcfphFFAXzMZEh5s75EU74PsYrT657AfCtMqQZq5B2UJnKY47XrSi2f6G",
  "key24": "5oiDKrDREZAhX6D12nT8vdarQRnWMqRzJ8SqFokQqNz2wWx4iExuaYrJCpCPcETr8ZSzCEz3sct1Hvb8CsoX1efV",
  "key25": "3qLAserS4EtvmkFu1vicNz6GCLLvs82mUmtjXurKu3brRUosBygyFicrAXo2Zk5eSk8nDDChfbgKwHoNcd9dHE3N",
  "key26": "2hNvwrszwXX7suvpZDGR1ZfdAgzPBPFYdZEVXapg9TK44qHgv3UfhrTXvPnrTkLHMGAYUpoNv47r8tjxjKGeQd1P",
  "key27": "5W8S5eZB6oY9tEKh44t3J35oYCApN9H5TgTQAjf5kugK17Ae6kDS9RMWXfGewNGR2PoA4RVKVDJV5UhP5zuhiyip",
  "key28": "25ykaSFNmP798BeBzk9AQjAThaS8XMkvHR7HhHs5xJFW1XwYXUwp8KpkhtnXG6kB11UCw14xcTLQWgQtL28VxXqx",
  "key29": "2bLabPb8Dh7nKEMyKcth7guHZttvXU5ckuGDHhpAKQxAd5nkPPAmpejkiqin51pz2r7WGqpxJ5CitaFeHgyiBHB1",
  "key30": "DZVu8pR16ZdHgxew1ghTFwXPB9sMu9sZCFqf16aQPx6EvaY5FMYRGSiTW4guSPLmwUS7c13DyNLsZ6dxVXQbnLE",
  "key31": "XSNJaaAeVV72ANKL51X5gKf42hQkyVdRE6BKHX6hFT6Lo7Mq8WpyBLiNPnechDH3FEFuTxi69276Dauqr9jvA1U",
  "key32": "rywnaWGAegqAyfrEYinZxFLeUVx2JdSYj3Em6vrSdzVbkDKi2Dtq4yghynb6wHoZw18XMJNx7G2aQy32WhDFemc",
  "key33": "27qh6A4NEhS1dTazvprTHqkyzgVPdvnKZPmkdKrHSqomgWeJvfeC4Yf5FEeKWbbLxRegdgU9bbwwgumzmUoE9v53",
  "key34": "2YcqNRX2XnJf3Ut6TPBGsLf7ZN5EyDGVoxoyqsgHmfSJqNPBEpvKq7FTfnjNSXk2HgqdHGcAHvwKMxaCWcu6C2bc"
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
