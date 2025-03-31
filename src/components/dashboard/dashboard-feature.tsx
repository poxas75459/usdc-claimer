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
    "gye5QwAkNjSg26uhQjXWZcU65gV1izo1kRo5Xq6B3pZofnmumb2mFxGoiVDahqR5ZpFsN81yGgyxCdtAYpd1UD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oFbqMbKgc8Q3AuE51gsNxzMo2D62viQLmqxHmDERptGqxRHSyLC2p5dg7oPdCaUFaEWf8rHP7d1eUwj9NtriNJa",
  "key1": "5P95o7uuD4zfkSPtEsNfwNo3Kj4bNnJ4VV7BDnNuQhGjpfXmUiwKYdTdr52kB4jrJEZApPQGYsUihW4mAMuzKcJP",
  "key2": "4SjkwXw6QX8V6ysg4xoEpwv8EyMeXmh9KZGCMhM2Le5dtYx85KNtVQLqUCWp9ubooYeetMzV6JiFoFR3zyAfs8yd",
  "key3": "4hFbNX1z5mFN8iLnNzcukYUcftTC3sFq3mhuFXyiBt1w3Yk65KTnZJ9Rh7KLQ9sQgWbiS8vJ2qiM7a4YQWa47mZ8",
  "key4": "3iXG9N94CiCcC4RZXHMRqbFu9XUFaKing41ocRQ9PwGdVamP5aC2553rwBFExeV1RRJxXHPccEpGJNwvdvBZNV7Y",
  "key5": "25TTxxQwEcj7ckq2WzsN6ogPHkUwHohwT8unf93PF18esb7ZGraVd9yPN5fHwFYvviRqmxDgqfmNRssQjeEBQqmo",
  "key6": "5AsL3EDDaoo75x5VoZ1DaQQb7mDcx5sUB5tVveLY72cJUuk6oGztfh8eMJgBXpzJV8JARx5NpjAia8zybxXc1sAW",
  "key7": "D7SkSHmtNFVAQVSofstCUUAFqLB1hSbBU5CiQLPKTYRzcETEP4x83eFWwFryykRfp8PgQQtqCuzqycaB52UjoWw",
  "key8": "2tHxTrSXusdqg2dsT8rbiDKEs1u8uqatgf6YKUMLJejuCEtd7WyB6wgHmQ1xxuwvr8nb658RUk7hUzZPkjH6btsK",
  "key9": "2xxH5SiAk58XLikcHzzMnjWdgfL8cHZMLs68GicJ9v86vwJBhBNXGKtn9iCp1CMTkK5h53Wm1q2muemTScNRDQpf",
  "key10": "4K4G9TkC7JWfPp12UqHuQ3xHR9LwjJiG2Awgj3447LSazpkqrNKa9WbkKo7LreZryqHgrNfNgALBDcgbamnsCjxF",
  "key11": "4ufGSK1uos9xpzWrzskC7uAT6QaQt1QSHvAr4gse8uMDUkpt53s6mP6L2VjTYfokRY9WyTLwWU7Edtodx96EYffe",
  "key12": "Ax44hYUMC6DZwWjpKQjsttxdYUXu6G8EJpfCNLzyC2yTkm7rWzvN2rgz5ChaoLky6xnkwGvdeN5rHGAVGmg2ENP",
  "key13": "58vMWgesBDd24HeubQ3jKyGSsLPb6UySd854qUSemy1bKcJegc784EeQFLRrtSAPFtumSzJv2pBinKC1r2LFB7xM",
  "key14": "1hVN1FxvNMpbfRDzQ8XwyuA6eUpEuS6sYkukGtrRb4huagSt7bBonYiwNprtC3PYXvcnyUwbyVVpUCZw2dx5L6Z",
  "key15": "3gmaT5ehaaV8SU5cJ3hGyuSi57BdJdK6GvvkaDzttREex94o8cyLjgZpR4tqAtJi4kAz34LzH6AU8A1CDjEhXjo2",
  "key16": "4LnWz9nmrgy8hCdYGsHv5uhMHq6NqfQ66biQ9FwaMnQQrETN347NVh1iNuJmDhyuYeo1ck7aT7XfpHTzQDUPgxCd",
  "key17": "5SL9jFTkcBxysAv6BT9fEojY8nHXwJbyUJM9Vok5APpyrWb7CgEfpXdCVz3RaX7Uz3gWnuvmvMKi6spT5joAiTcJ",
  "key18": "3rm6T6dhnNzhXCeNdtG4p3vtTfhioBNwEo2bv5PwHt3rsPnY7VPQwiW38RYyY4cUz4tPybPfv1YYpeHW1APigVVd",
  "key19": "3iCuqneWcgRdpVE11ZKzB25WLVDFrUchwjAGhsRCWxiZURM1HJi2g2sn6zf18myePR4xbh9HeEbReGWRrUgCWbXU",
  "key20": "4qT18Ajymob4sbY4sLJscEHZQ7up1JvMwBUkJSDAHTMkmfqmKRd6c3GfqV1YKkMXtnqczB2K7EPDSe3Wzw6hpJbL",
  "key21": "4kh9mtbQXHCvr535BKHNhb91APfVwteqV7Vt68VUt2hkDcKqU7wqU58zuNQ4xXn6sKVWXK9V4HrvApYxaXYqwg8J",
  "key22": "5ANDaBXiEHhFRuwhSg6MSZByC6pqVqV6f6F7x6tuKpoU1N88GtcMPnvqeWg9H5mAuwT9xvig8QRuepAqUT29yCeB",
  "key23": "3zXcYjNZF8m7SsP6w1FWdzc8rgEZPy7tBdK7QjS6hmj4UcfJEHFpFFt7ZMdQ95sVHqLnVNsguVvLF3gkcsTJaUWv",
  "key24": "u3YjeHSrcitr5waNBFrpkiLSqRtrHQk2JFK1f8GTy1QpBFTeDVo6WuEVd7VE3Gb7fRVsA775v4G5rjGv7pGyZrc",
  "key25": "3h3dGU19U5RrQ7seqtD6rnMqimLoPE47wXto2YoZqHSWY5L93C1zCQUxnRySQdXhYj3ruJctQGwpr9exruwp8x7y",
  "key26": "62pvdFUjgP2fCqGquBp5nUrDowxt7CubX4xrtQnjjnCxE9oxa7qCLvHBxTKXYj46rBBB2L5CqPT3NoVeUxCmFKbT",
  "key27": "5b6BTCTsRdn7QFEY5jinkrpjQfhnu4fJte1TJDwMU5JMRMtkweT5oVantEKLacFVa2DbTVhQVD3vXCpX27QHKtXB",
  "key28": "4154KwNZgA6AGPe71epS6SNxcthdiCKA2wZLb5xuJfmzMMx4WUcvWQgQTNXmcwtqj4r213cMXkyWiX4JpotDDN4q"
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
