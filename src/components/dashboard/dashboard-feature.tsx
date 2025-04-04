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
    "51EtcN3Xf1csK8CFYdKjoDtVZUadxbFF7DeLZ5WEPR6mVrN6zfHGyLdowKipmRhTAir9yBoFqZ2vwh8DnobM8Fn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUAjxSB1d6oSDNoFf5My58ChzvFt8Bw9U57bKkX4zLVACy4vuwgqyL12Lc8fa8iEsVfzENjBnbtcq9sdLUwkyax",
  "key1": "3GyQKaEhmUnM4ZpFyWD4NFwMKu5vTzJaJmQUa59ffte239s1HivNc5PZiVnHE8UBkMEV5hcAAnPL9SSiXgWwuqda",
  "key2": "5DU8C7TnFE1FfCDiJKRjid5b23xzJgkjrYSSFJfg4aK3MEaKAJ5GEMTxrVQaTxCgkGradNxt5kSCF76PdEMgN4uo",
  "key3": "DESbwmv25CE7YSRG8cFTko1zSCYgzkTZ42kB3sofUQndZChgYHNbrcKvqkVCHHwg4FTLiq9Tgda1uVzi3qeccsw",
  "key4": "pdXekbKowC6VPFsaFwcfVnTvsHPxETRRbXPLTSHuxba7vWiDmL8PChgWNjdZvCiFP3p1bXEfQT6azzqhKvKMBJH",
  "key5": "2cmk6Wd7foaPPgojjYCAaHpAA6vPrEo23MMpNmX4nVTYGPNh8K1h6teBTrc5bech57uGRJ7Eem6hcUV9tRrYLfQs",
  "key6": "3rtEHvheKgZbYw5QZFsBBzH1hh29dkmUumQ7YyZGrjJuThCeuF7G5J13d8bnbZGxFzqW8aG4ZL8eLaZcdyVMt365",
  "key7": "33ykriZafHR59FntypBbqDpWnGBo35oS43nEnHT4thtTG5F7XnxKrQoEJ3iC7eC3UjvYnPzFfxYRKD7nZsZEJrXm",
  "key8": "4yhR21EBx96LBK2Kn4ut7opfRhvp2a8Xj3znSGZeauqotX7H52sMBZfJ9iqy4KqV5EtoEUV8LkKGnimcuvgKqahy",
  "key9": "31Z5gYDL1ZSZ8WGs1bM2pVGa199Fguxs9dkHSM4p619hYE5CHaKNq8r2vCYy7yn5ASwidTdSUZgYtG7TkqbmvYRP",
  "key10": "5L3qJhkwnqP5pZ1zSuTLJLrNFbcrDaCuDnBZP1qHdSf5M1ooQoERWU3MtCQWi3LL1QkkSYUgSux124pd6ytTMiHU",
  "key11": "615Tt29tuBdnyRR47UWWn9S8XKvntYquq2H3WM5L5UDzzVZ5VqTVdJDVPvwsMusK8EmPGMJLoGZWiCPVDiMEdXSv",
  "key12": "4MFZkNJykfkBuXJhYet3RUvyeHzavqTMP4yCiyokiEQQjWNnWM9QRKht4yjpxapZfFFvpqCCwyQkY1amCmAZs3wN",
  "key13": "2GvnEa2wpdXZ2MKCKsmzyeoqCW7HQKDoxPTSV9VAm8EW6hvskZAcrxcfxf1rFrkoohvS6KHEgvCdGXLE9S8nFSQA",
  "key14": "2rhmYUgC85CZZxFtQZoYWA9ZZHBoLhLUVoyP4nNJjHfgZXTYNBVXCBqeMYbDP7ZyjsHHBfYgrxnr1rsZkAaP9Zp",
  "key15": "2SBZEdsS91hT8qt8LA5se2yJf6DDq1eif37VFmy9mnSyTYfFvpQY9vUEg1L9oPU92qtZVYUJ61zGAqSMGwC34Gj2",
  "key16": "5RTNrqfuA4ijyZMDTZThosEkNN5bxzsS41QqgtF4Bd7PnYBeS5myavhVkRa2LdDer8wvBUe7wXp27YgsLiZQCWpw",
  "key17": "4MdcxyPV5ofsjpS7JCrwsUZjoL1GkEePCv4u9LUuprH7cwrzwdbsWqq3w8zTxQxJcDfPrJ39V8aT5qvmY3cKVPav",
  "key18": "6QtAom4L5NQ8GoAFTW7pG7tJyj7sut87nihW6Ua9WVtWwSHMAinz2ZHZYrJHhmkWmQviCYrL8KNuuZtWBZCK8Ek",
  "key19": "3LitgAMRzsuT6TUrSCfz4pRezPJ8FdGQTZtqngEEK8aAQkdop5fun7RGvLvKoPQFNQ9K7Dh6nav7BGGCveHTLkTF",
  "key20": "3kBvQ4L4xyDaFcHgtMhCnU4FxmRGiSbGrGGn4Wht65hwdi7S33Sypig7vDzc4BLw5eFgn7u46ZPhu7u8aVBDy1Gx",
  "key21": "4F4qzjHxqgHgJ9GaQZBViWb9sNKJRJ4uY2Lyo2DtTqb9UgUurphb5FYwA2xZqZwvH3vfAyAMTrUMoApzSpDs84D7",
  "key22": "4UJV83aNy1aPvUHepBKEvjJLf4xsSh8ssYPtJ6RuV6DLYfEAa6VTVXfEhpfKMMj4gnw71FqmqmgUkbV6CVj4zdG3",
  "key23": "5XAFSxXNbhcpPS7R7wCybL3iqxgnXWzZVAJ6BTp1hgHcZ9YQLCsZCymjbSJUbb5wiBgC2FjtzvbTbccLtvMWUVwB",
  "key24": "48ouHSbZ9WMQoYe22Pbii6PzE929y52fekxEkLTHLVmEkx3D6QV4RqhkW3uWv7hBKG54xQHABpRKmxqn2vGLycLb",
  "key25": "2xg3JZqfKwXDUQCvBKZQ9vq9Mey4aQPcFdyRLzLJYdwRLcz4q3VanczXHJGKq3tkSP4u2yaa1nJMxhHRNhzkkJ6M",
  "key26": "PVmZAHA9ZG17Lszx6RWD3inf2ki2vhygYCdas2Mqyb93t1azzurSEN2FRTadySV26vfVsUHVAFVwpTZWxX4RQt7",
  "key27": "3FqM34LXkEWLgB7e7p7RNcyGRjCvrGCiA6VbZ1QQNjxDfs3sc5YbDAHycy8yHGMJaVkpN83YT7apLF7RcG5xKHi4",
  "key28": "5oj6bmpuMnGsiR3i7WzXCsPmzTcwJEtoSj1vbxsEYeZA6QNpQGGFxYz9WTcnM61wZ3Jk5R85uM2R44hbrURbEAEz",
  "key29": "526frNFTkm6YTiQWZDtxjSbD6Nk6SPqsygLsXuep3tsjbivra1bv1NtcxKUr9QXfL7hZuCGopeBYyRyrafwQH4gv",
  "key30": "5ZLDaVsyYVn9KTFBTzG6TLVMkKD79HXyKYCryRy9k7398Qcrt7J6sTyoxqWfG1wrynvcGJEm4tCoEL8wXzhEYCzm",
  "key31": "4XAV6ySRN1cn4CPx8HPebr7AikBJKzQLYGUhe8uhc8iCTj17szTTyLrCpmi4Q2Xpn3aoUuhT4nqYRRYz5dby4eCJ",
  "key32": "5vG4bV8XzRMDFxx1etMWKZaFXtPqgARMy8KLzjP5NJzBZY3FWLkUeeq7X6YJLTyWoi9i4yJxKeMAevsWrsaEHqE",
  "key33": "4jE3jDgNESxJDwXsE4amEiFTPgaj7hSobh2F8YG1gdHN2KrZbuUr9nzDzQFKgmuyH3GHmJCn5ZdPKVkDyshA7oUc",
  "key34": "21GQhMxAzbXCGy8N3ksZ4xAK89fC3FWP9dwAakrf5FzhtgCrz6ooUrtjHTNiZDSxJxrWLazXrdpXAngrnPQgtmaz"
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
