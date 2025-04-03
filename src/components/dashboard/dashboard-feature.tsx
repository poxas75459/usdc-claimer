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
    "5Yo4Xextaoi4CBCiRf6DptBhvEXcyMigWLGfyJHzETLNrJ4Zj7ZM9MYeC5VFrBwbKUDjdEkiox3KjMGEs7H7FHVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDP6WjhhdUMiJPtR84eiaWXtyNZ6E1JVAGVX4hF7E6H9DNTaPtjfrmQ88dka8XbivcdUhXBZHgjgv7XN2dusMcq",
  "key1": "5zjwt2NmgQGkCzBxLabpKT5t11wY1cSEAtm1xV9v8c3wULtwbYihkhdnhigDJ7cxYGaBAzmrH1c9r14CsMfhwraD",
  "key2": "KPBJfiqoxfX6rj1rgiR4cThQtYzAHKZWN5YxyJg9d6P8ZJnKtfCuzVzKS4n7neSQLYyRZ4hqiRAhCNjYviQ4vvC",
  "key3": "5Y74gKUdaXDLy53Vxvf951kXetqF9JBJy3iTDGgSR87o58cLGcvyH5AizKstgqj7m9h15BTxJBkN465jZZQFW5UL",
  "key4": "5W2i4TVnWrRDf5bAmWoDvNvv4bWMCb9pMx9hRZQL7WKR7JHEmYFhNUHJQs4xcXFj9Z8jf3gbDu1C5Lz84cJBayx2",
  "key5": "6hCVparRcRUp2Bbn1g74o15K6MDJzq4mMusWraxc6aaq5KqppoWSzrAozHKuQ2jXhZkMCU7WiLryhzc4syXZT7f",
  "key6": "5Gc2yUKmtZM8riKrV8rKCH3GfpqdKQnzQTZj988kJMZ5Et5oNBDPPKoBeLc7E1LgaHtaxS34nvaBw6Tmygy6btiy",
  "key7": "71qqp2S84yrczpp6e5UucqTkWeX7HgeFkhquFn9ufmK1yWBFfeuKPax7b2vC3Jb7urgA7NdHK3bthh6GN9wKhX6",
  "key8": "4DSg2WU3F8y9jsE1ypn6JMGissSpDAhvebePM4swc6hD8HxKZsuTrtpnPk6TjELLGd7NmmD7aPE2YoLD5nCki8wb",
  "key9": "2H67PM5MobHvydckHws1BAdD3ymdAHEwaAXs86ZHEWaFQEGWEn453UR9UJgnvDH4EPfBqvkAZcb3kjZZSSo513DS",
  "key10": "4CUR5hE6VuwsvLrS7CFD3nG8ecEavT4f6pKWu7aaJCh1F53vU5d6JEiWSU3dc3spnDw9AwN4vwJXWxsX2SZP4QHX",
  "key11": "5E3WVVa66KDkb95ciQS38i4fxLgQdPrDgH33goLmaUEnvKypLpKXCLhufAM7cBCrxLYK3zLRAApqPPorzPgGSpLz",
  "key12": "mRaXvNZxYFXvzCrg673bELGk3s7BGFGch2HhgnQPXrBf82dB45BSHDWvpqh4Lyk6F8prGVNkyYfQ6g9Nr7xduvZ",
  "key13": "4MP6bRJKSHELcHdNqNFXNHnpfYzMDRc5WNGSMXKG8Jt599YyUmDPwTKCBpSvZvNJJJuiWLbo8pZQFvDisT8u6XG5",
  "key14": "2xT2BpYvSa6sEgj5TUFm2d38dX7c8wMpXrF33ViJiRBzoA883q8Cfb481NXTJU6jAX5ZdrwS2xN7o9eSmYdoP9XU",
  "key15": "QqAtcVw7F9J6J83tRpM4fzN9ziGJgKHbi84Htu8aSGPdw6L63atW7JHgZpyUNeCXBhwLnPmHPngPEYtTBtBQ6i6",
  "key16": "2YPgpkMVDXyKNazWcLL4yde2CEyYKAbfKkKMH8vcGY1RCpiDi3wuPtj9G7QPhDKRLGff864oeYW5xKh9JL5FGSac",
  "key17": "4SUuz738HWgyTWhDD7aAZxxcZFEsgShvA2Nk2RbWPqgWuphZvaTMfsbRTyCqN1DQxhAWXpYBMzNrVzmX38H7f4PK",
  "key18": "36yThEHp2NGyYUyvVJHf4Ynaxkt1S13vTQg5UNUretj8x8LCAVv59RQa38S6NUSWRz8ZEh7Qka8v1iuJLDrGZdaa",
  "key19": "527KBAoZTesFv24mMH4vSexGDcPYoVVvDe7D5Whw5kwpvZyzgy2TJYXgAuUEhHmrjKZmQimjafHvmeFfSnqZPPea",
  "key20": "2coZUjwfWQrX3KEpSZHTi6e88xoZsmCzxmqSsj4AaT8FXNeU8WNUhyJXWCKrB8naEAaE8X8Cic8cWNsZKYqviZ9F",
  "key21": "3JNjSKCS8UvvYwdYWXJPbk2dzsVRwR1wXYkqJqXvqfqEsr3meSj3ZmRr5JrcveRpw4mZEMRd5u6QpGzqQgR95bwD",
  "key22": "3k1Gt6nps8bNmkgKdhWjbGjiisgk4hRPrZna5MX3tSgZvrvTwBbcUEVz4tv1b67uUqUbirr35idkJ1yiHnYpxU7q",
  "key23": "4vmgp6eExyrvnA3ycfSxsMNmyvjM9Xr1k9RpBq8Bh8V3g11fERSHSjiZFcFmfRpbfZ3vcs9FxBCKiYcRkW2PAZBR",
  "key24": "5kboWrNj3rzA88Wy7zfiR1paruwgdRVJMxTaJYRm3cDeE3Pnv7h4iq7LYZMQEHXEANY9cfofiJyaYtqfVakR31Nb",
  "key25": "5DuvK6CHfPnYyKDXpaK3zARtRRAwd9wY6QCyQ8a69Ns9AmMakyCTLkXEWAQgvFrhq1o1uqn5Roe3rYzXxdABDVHH",
  "key26": "hYXMHPdCieUAtgRqwZfT8KiBKuFUdgippVmKVYdXa3q553Y2atJZpzEEegNE8tJPHcsYSJn3zrmTVj19eEQ8FSx",
  "key27": "6odjbWeP6hnLm86ui3mRZLfQS7xKeZZJKmsqNpM6ZLsvcu9ojpPLWoY7YsWBB8YYDqbkb4e8xKP6tSCxhUJrBrx",
  "key28": "31eupKaxruMw9pVPnRMF35kYWHX88AatnxLH8XJF6pLPwytgX8ryVMHmn9kGSdVJ2TXx1F2JiPhAQj8dUumMPNwT",
  "key29": "4MPfZQJyMdQs2CNraFr5CJTQqP9ktBq5gcXZRkDoZoUKehp3JGLjrTeKyuU3cm4bsixCtbuDHR3uRce5pJ8xg8MP",
  "key30": "3Fz9JUcfVfnkQR4KbPZBrZMApUc3k9t9Z52cWHjBhN49eK39R1D34aTLEiCWmoqzguoNsdkFJ2gE1F1MSoJW3hia",
  "key31": "5perjDGzWavSZeyHH3bjr8dMeit87a1drruYCnLJsTZJsEaqzR1YTrXd5CyKzWFLWTJez5NmR8gXJu4rPSTe5HLF",
  "key32": "53AVnz4Q5jyY7gxwaCp1EoeYpMztX3TyDWaXC65L5Ry85kWZakGLN68nBsmqxPwSVFbnq96DgtLfzcosa7t3qAUh",
  "key33": "27VgzujZUKuAeVBjp15x61czBUiqNCgzfXHCebkydtn76DkbzRJjEVkv61MYZSGe8FxDVwSB2xPLysuaKBky9Khs",
  "key34": "5DfQLEG6SGnLuzLF3Gi8rWeZ7kRtSANwBWyYwz6yYbqXT4S1JCR9aYvJghLHY1Sc4hMhzKuD6LQtCNjAJKeLbTmS",
  "key35": "4sr2TNKJiySzUnJMWD4iLR6UAuCdE3KYrsKfvRU9LZNgrozqbTKUU2vsgEHGC7YJEmuo8fSChDM3Y3JwS59Q4Nt",
  "key36": "DopYKRrh9UysfW5BoepVaCBBo7RvjxPRcuNqsJ1yiJcniKDvNsrBNxsZYsbCm9fChxTEfSTZXBgqtaomnat8Fs2",
  "key37": "4Nqk5BpSW9aV6k9pVRicUZYmY9ByBMy1MsWvGz1MpKTp6MC3ZWoDGMkYPA9yzSCGHFd67Cj9afRy1KA1Nz4WJgtE",
  "key38": "4kcrywK1uU4DFgMzetrD9Bq4mYBdXUTPVon2NRuWFrrCdLYfqtvfGyL4xCwFqnY91sgbjm2GYTjBGFQQS7R44r8"
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
