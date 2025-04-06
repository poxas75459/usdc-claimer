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
    "5EBmcgu1MQgqmfgcoNmECYZTkgBb6fQebrawnWGdARDnNtDxcGrqewnjiu5YEKYH8Nbb6NrFdaoxyRau6u84kNsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ew8ppi9arUwkRoAeL6T2rSsai2ZsqS2uEF8secz1RxHqWbc1NLPKKnXiZx9BXpm9Lozd9jVbZNoviJnLkimwLyx",
  "key1": "5zBuU4x9su1UCZUopfPR2qoXk9VN3Wn2HsEYnGNCK2tkhY4efXFbAdoycmyUH5uqvpf5YkqmVZqdku5SRz6KJqfh",
  "key2": "4d4jo8LfCa556tt17NKmsaUWht3xsVZqaMRr8UxyrbppYRyVDmY4rvoBfwWjkLbkzpWmTLem61Xn12J8B71Z3Pfs",
  "key3": "32wti75bhjnzRXri1wJPKQiUq8VU8HScyNKDT3zbWmx6zPDYMQ5a6xMqyG8U1bVDmaSinox6Rwrvi7veJqydUvfB",
  "key4": "5ow1CrEwuJrsyrLc6uZFa8XYsxbAMjULFDbSzLDdfxUWW8QGf4Empjye5ceBGzJwA8HhnQgKPAu5He4c2J7yiK4C",
  "key5": "2eSz4YbYcianpPamRRMAFQ9bMesrrsEf9X5wvkvycS34sao2muki7y99tti2ZF3XyhAzvHnv35rihePfUhcaTtd4",
  "key6": "2JUWUrCdhEUhjqxiDECvBUp9x18u278G9NCcRBNASmZayryRphUxnNAZYAC69HoPy8V9BZd8VvfAz97wLNERr1xC",
  "key7": "3pWXeP7oHdToZjmpGZno2ycEXWd37aA2inZc8q6FTzQxBtUUpM25EwLLFu8niJqAk3AS5o57A8pmednx1r66XHMB",
  "key8": "3jAHiyxkJK4ELL5Gp8wU4BVYExeyUWgWxa46Q1TJneCdkRf7XAoZ1jwgDCQtzQ5NrL25Ke4TEgSLr45TwrV5b4Za",
  "key9": "4H1Qn1U4aB4yGAMEBrzsTF3m5cF1EasXWMBoi2XjXiUKCzV62iuwkMjA2zmg7c53tWrgXXanDxb7r32Fempvtuzb",
  "key10": "62fhrwyoQ3CyTLgCVxuxoKF4ycidpvQh9jFebCQEkuPBzPaCsb79wBysn1Z9GmSRPETB18JyBvsB5VqtDiR1aUzg",
  "key11": "TDChBVE4MGoQxPSXbAPCkR34sVHssiE3ME6AbBYq75UHhWWoGSt64LaFApCDyE5qvKJLvVvmf9mDViZC8XKLXMV",
  "key12": "2UtJxWeYiNHdWNsrHaDK5KioRGkVWoekgdoh8GDc87fckF3JACG5qsVy6HLmCEGNQ6Gz5QShMKzNUCPJUVnWYxaM",
  "key13": "WX6Ku5YViV4nVuNk1PVvHb2Mb2wcjDeZgbnmYzVYpkJaU6oTtoyNpdrdBGTVMvzcUeBDEyPkhv1NWoUGhLqiJqU",
  "key14": "82J4dhWq22511QoThPKMwsDbraKUBdzHKPH6cWeZPUA4eKtRBvQoY6KBbdgqus52VmwD26ZqnBN2PvJyGZ8XVi4",
  "key15": "t3rPothbh7FyG9SLRRycEKuBFtBQdUfwDQg4jYuw8ZheHigaxuC18YSRVn8YJGzWw5inKcwvZacLrNewkyB8tPk",
  "key16": "3zFxF2BZegBucHHuMZrTuZzFRQKfeBw68asCmSiPB2saQr1BsPMhdNvuZVkV8WaMbZZ5Ab24uHdp4dtog7yhJRgH",
  "key17": "23566kCCATBskkHgVJZXCqt4mJrCGNfRBgAEbTUoHCT549hZNrF5YwaJCHigCewdCwEKUTVvtCcbzCvWkzF99Rpq",
  "key18": "4UJPkH5kNfBdEYfZ1DH8qLqDEZy9BdjucuxCCsKxjWmzReJBvfL7gaJHgozcBHf5uQjbUXUHNc6gJqmrYuKer84c",
  "key19": "eLrRuEYaKuoHFp95buEkgB3MsQya2QD8KavQn8Q2Rhu6psupXT9LN5U73M2FMAqJZN3jNpn8XPiCM2qqspX7RJM",
  "key20": "bD2F1QDHZyj141BSzMoFfQ77ZxZpqubLXeaQeKKamoe2VxAEhr3q9FpXroCryBLqSVcstcB9KMVCvFUKSYQHSEo",
  "key21": "2ZZPU3V5jxJ2WR2wm8DnoUgvoooyXCN33FGjiZPNXtVi5uajEnFAzdE7tz5Nk6iL72XNAconKpwA83z4M8VBMeSt",
  "key22": "3oYiL4WT42A8HyrncEzQJjvRiVQ3cL2ojR5g3T7tVdxkPGpPmYCHqB9PAPP6brnPLHxYv7NtC7YbTjLpqLPgzae2",
  "key23": "2P6xsydTdr4RXCz1iTgDAeX4ByUuVpfzwFzATkTT7jNqCAgfZwXb1Ra7GmpWb2AnbhzHRRS483BAvrVX8g2tGFEo",
  "key24": "bawhkckKdD8pkUBdFHCVUhTNAkDvWKJAaPfBkNrHvXHT63AGj1aSmGVRJV3oJDrRQPqgxLFEZWyg2hz1dn88SBo",
  "key25": "2DF96hGq6UE9APANTvfwQqwCR1GJcedUGWgRnivHd73n6vuCgpvGt6HbaJr6Gr88Xm9sMAz6xh5BSMEWQNLa89kt",
  "key26": "3v6kqTW3rreE6CYpkJvQYoH7LT3wKKHytV1C6m8wgJDUJ4YcrqZih8eFQH5VgcX1ECZpgwH6rY9EqQQ8KedMmEZn",
  "key27": "LRVPWu67MmVt3z5W3VW6BCRmcUFck16ha7tZ4cQiRiEEtBxRCT7sAefRDEWuszyEo4XNLJc7rgYsqwPKWLs7J1S",
  "key28": "64zyAMLKHJpJTbFNSD5SFgmniUu6QgF18J4XfeEXBr46Brmf224S72t3wcF1Qeq58UjhHBS4dx2WGSGFqj6RGw2j",
  "key29": "3PHpqNhTywjg1m1H1JBMMv5wojToBWRZa5X7AaCMgY5yVTMQEJERAMqb1pZFcYusKJ9jWz7KCtM3frYowCEMU8iu",
  "key30": "2EQj3XfEhHvHxCy76Lt7CMdNYNGm6qucMZU5qiCAKy5ddW5HSpewQA3R3VxfG3Lyqsb1fEq8TtcDkEwFT7g8LdBD",
  "key31": "4Qx2tHbBHTK3X31Zmskf8oScguuvVFomYFGTLQMdZ5Tx6yy7zp1PuHw1iFbdjfgo5CDBbD8MjkLrFuachwx39q8Z",
  "key32": "5eeipasM9coerm6EDS4iTzCMdhnrVLTTWx6yVzWrtHQWyCc5KsSQpLGptFBPhWXYLpGARAwqNXQMpBoS9XcBxMmt",
  "key33": "kxLwK8iRcbQGy3tk8JhQDKfe5TP4pbRtpbRAEVFuYEJs9gTRvHjTHFE1L7F5p7ucmyZuAe4MkdGrhb7Yq6qSKeQ",
  "key34": "65Sqe1FEXjQGVFHojYg6XrjGEWTg9MGtRDaaicjEqdxNi1DvD4inZGjt6T985pdEYsvEvd6cpPmdvjyG7X5Roc8i",
  "key35": "5HpFnumoBUsopx7QLYqF9aM6moSpVkvcU5aQqdMQ86fy4mNLwJPdNVe6zQLQkvDd8bSA6u6LZaXAxg5E1tUPiV42",
  "key36": "9bLXa2C5JnTmcmiStgdhfvzJcVGaF9R82Z5aC13AF6125kwa9fRUBGDJEVbH6vpWHQhJdeNa6Fhg6XcbGzw2PD3",
  "key37": "4pnrbkpGouervktEj1HCEt3uCPGwdaLkdRAHotaSB9yksb6VVFc7jTmsAa4kme3daP1J6Go7XC99uSVX8DYV6LNo",
  "key38": "3sM4BZonTMjw2zib3j1mcH7QmaAtxipsaWjQHCjatDg8H8XQNZ89NREKPWewTKAeej6Ye4dtV2zRPXUixfSnM3py",
  "key39": "2KvcQvML2gYSzPDRWPMZAz3QVof6yi7L2BCnXgWDm1sSgW65JQZfGPAjsJbFXXjtZ4RnerqaBY6AEG2J5FbtMXZC",
  "key40": "4fnL8LDEv8sAJ5k19NytioVdQ4D2hz1nk5R7AQAHD9qXKPkGnC8Pgtb5xVAvRRiWSABFHfRYQXkmVCP1jov8VVyk",
  "key41": "27F76eL7qQaqaaBRhFo2iJEHzf2zCd71S8kN24dpjtj6HAV6YV6b6vSVNCcpaaEbn5anSRH6ENioDLadAGTpdQT9",
  "key42": "ire96CPpcXNoSJbCkCooY5WkBJjaok914jXRj4mpPxCgfYhMVZyZUiJiaBC6dqHxLch2PT85gEFxD5cKRpxzown",
  "key43": "MLKFJj98NQrDVghTMbNG2A2hsdKZNJAEGphSogb7m7XttESGRJSPzHBuy2QMYy6P2vEywwJ1fh8kuSVUsE55dPQ",
  "key44": "5Ldx5vmvr1s1pxWPSV2GQFb6e8bTbfXcgNxTMQgWApZsW7PQXKeNSSxWpP3ByomSAZVViyH3vUR2UXkFS6DQC9cR",
  "key45": "3fVn2cmBXh4fTR3pvez2cEFPeeUQNMg8qWuNwHmffXB4ptKW7QrC9UbfKbzdLkTMQ8YN2eZwYQ2mDUEJQyjZkx5z",
  "key46": "5nHfThsxp1kkSAfVLmJ7j9GyGNUnSfp9CZyXFTNkNzmu9oQkwiEVHUwStbvem6fZAxr8Xb6Z8SRcM1hmhzVoEQUZ"
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
