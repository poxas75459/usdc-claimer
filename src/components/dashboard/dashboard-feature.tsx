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
    "4BoU6Z7gXFdzHWKW7qVDGjgKTWPxi9GgJD6cgUcpE5CJrQCBeyMJE2jKkTvyM15ZtUNsuN2EaZCafZPE7iyKNRU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3jPBwyVpjsrgCDg5DYE7fWfovJPBHgbdW494Ne6xfmcXsXJZH2tJpPLxfXc69zTSKeTXLZ8E9PwpHFEmpgKVmP",
  "key1": "5G7TfQodU2erVcrng3Ki1XuuZb9C8okMYebX75KiCC9HMhQivBkXN2C9NBi11ejRw6s6JDEz28w5Kogj22wenPaM",
  "key2": "5tsNswjJRMXukaiNK1uZDYAVoby56SXoaXKzK8ypBmbvUTKVHo7a5swvUYBgi2TUAuLr2U5mZ9FSz2sym4H4iw1S",
  "key3": "Ych9CGFP9xXdTFwbSDtop3oSVWAN6V3fD8FQyiUfadNbMfksTNQGxXioZFQDPumSjQyoWHjWwDUHzH4gizbnw3U",
  "key4": "2B41k4JNBpEToCABh1uZHuSktTqpcnvBs74phoQURGs4gixGVy3SBbQr8fJN4M7xdAkq63YwNq1XtwZ8sY2BdCfZ",
  "key5": "k4GZR1h2GP36WDmYkiqgNQfHTv3ArjwJFMtp9ycrGZKFb64m9iZcjWPvHaNVrdsNnxu5iY9nB6vcyhcemz7npVy",
  "key6": "28ifaezZC87QwqEYAbfgjYHn1SAUDdZoTaR3wjTtttM3AnAU4fXpViCgZQBX8qPRYRuFyi3mWtjK3gbJkuR8TJZ6",
  "key7": "2NV5T8FRgsZLsK1AuD2SotJQh3xXTy4eYHnJv4oz6SKx2LRZnVzpRJxx1RSMYsMvnYfcU8Cg4Gn8zrY55GEbffFY",
  "key8": "3qZ1jkX2ofeFo4hTgk9eTYPEg5zeVjsk2orB11MSk21sk4UMZPWoKwtt5QHnPcsdyENf1MvKy5fD2ALbwuH989Aq",
  "key9": "55Xvst2Ep3eXyPkGtqjG3AoFzPX5AZtAyusTe1reeo35ZvqZTqfVXzrgDLHEt6wJ5UuTAmZHHbB2HU6dWdSUK2qD",
  "key10": "4zo6cku1p553MvJw8uuFYwPBYH1wBwLRsrt2kfCGLC1H4P9YoryycKWtWr72KeR5MmJq5eS8kj2XDiaKBLXxw9m7",
  "key11": "3wGfJdw39hSbdBmeUAdbAknxwxkTiVcgyv8sJwR49dYNmcnJGTfzqfXWRuHVVM551QFejJSr1g3TRwJZDsxrNN5q",
  "key12": "3UiYW9nHopfkDRzcxFzTkNwdiNPCfk2eK18WMLF8vhTyCwwwpx4qRJjUQSfmDVHQt8AMpwPKW1Lv9tgCJuMYuQRt",
  "key13": "3LGVnXkbnxjLz2Z76MudD8yU1VHfSZ6NNqRjn8hmz5zSemFjHfaFusdUzpYea9apQ4ai3fxkbfGECzSiWHTahnpL",
  "key14": "2zdSV5YteQo3hvYs94UgYN4Syeed8c1fqW22frgtGKFHKSXyp8t8i6t3m1cnVtJ36B5LD3o5BjBc8p1B51ZMSD6i",
  "key15": "4jkFED2RdQU1gCiHnUTyLnrNeH4rrHZym4UBCKiwStQ6aji1gxy35a876LhbPq5qQqxiscVz81rnmqa5uGfh1Zwa",
  "key16": "3gxrftqRjskMEPy9SFRTbbKBsys8d5WF7QjEscR2HyeRosWAatQMt1gr9Krx8WTiET2GXZ8xLpxKQRtND1qBb5HW",
  "key17": "5miBAKWASRtoDBNxegL8sjyA2nJfeeQG6iwkCAUgMF6yD2BVVrVbFZA9B1EKjAcHgVZ4TDB3s4RcBrxtmmHLhws8",
  "key18": "3DJdoFzuRx2Pj3GJTEetXEcWz7vkpLcbmt4emDaGS88ib8NH6TBQCLbtEX9CXN94a9CWKyuBM67o2g3qXvAktcDk",
  "key19": "5P5WCQ8dhaVpfSqd8Qnng3U8aPzxHhG2wiaRoDVkyU9vYWwi1f7DmPMNcypuERbcSL2vBXpjPg1RDsM2oCUghGhE",
  "key20": "66pdpz1TZGexbJ5W6VjJ7NcbxdmkQGsg4qnddx2Ls8fpGzt61LkGjCBagKv9ishr6553T5wuKkqS1copM28diiCq",
  "key21": "5TbgVt1NLabBqDubt8dWo7gHRMgamf25mp8dViNyys15vaUU2fuj8VAzwDXe8j4ZmGQ8cYiLwEqB7mVH5uiKkKf1",
  "key22": "qPKsEArPX2am5ozCmUfgc6bdJgQdv2NKj3pJkAMtuihwkrb9TWfR3iWFt3Uzu1g2jfzK7PGSugWu89713z8CMU8",
  "key23": "3qAWq4wYzFhCAWaBFWQzyHb2xkoKyfHcP14dhpEYXBHscQnxAZpwwcb5U7bpdm4DXevuSBswx47WPSpqKgqgfLyb",
  "key24": "38zwdP5DK9eqxpKzWFmKEzYyXeQjDLfmfidJBN3NK3RPUMRWPc25g9hJYVjd6feTYte8JXPFihweZTycqoRLFQL8",
  "key25": "3MjM5M1r83GFA4jjEQpZfBsJkNCB7LUF7E4fMMK54PvcNN8nRGXQYhbAqm8872kdppyzpteBzuvEvNtzSTTLeyej",
  "key26": "8DqEEnZpW9DNAaYkyMMq59VEAzYXkPNF9AxG71QjGQX4JxnmBz1iG6KTHosyEGY32g3e7b5GX6iRFyPf4ThU25v",
  "key27": "36iA3hWF9sEVxycGFWDKiCqKvkdS4ZcwfmQ2MBqLpDx9y6aWUGa1MNN6yJ2b7refWRQUZdYTsdZ25dFD4m2UHHpG",
  "key28": "2ZkqHbFKqGXNHtPN8Wem79s9jmHTAoUDP1rXn6vJqC8CRvGNfm1SvYT85ixSQhQLJCDeaCe87CaBLNjFKAJnkHg"
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
