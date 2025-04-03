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
    "3EQL2p7yJriZh6AC1mv94N1dEZxKupwHT4aoqeLSqHJQGCmtak2PfkFZCLVx5uusAKCiiqt7qeT6HrYSvtmXQjqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEQ6WvMA8kX7WLZpfLThfEg2greoFtXagecZ1VamZt5VyEnZHnGfLZxrkRrWjAoc9bUA3X7oWBBQ7ZSFNnEg6o3",
  "key1": "5837LX3DYm1LL5Hjin7DeXmKmAqHM9EVRPV4Wur4Gd5ubwAVEMaAANb8YPYVWTjxnb9kqWCv7MyY8wd35VKwcoDM",
  "key2": "5pGAPA71hYAWX7pvgtAf3k4UjUg7PQjpFdDi1JS7iPKKZ1P5hadLw76n9Auf8Ymqp18paEmjLqtuY3ukjjMkQ48E",
  "key3": "3oj8BcdyAzx4ZNm3VVVvNztbyo5jSj9GiffMB5X8CGiYdU45Nt4zsyMu9nWnxnDuj3ntLaHa5375KWay2r1KH2SF",
  "key4": "3tCA2wP2r44xeF5HCY3hzn2WmJNsAfHFYNumYpz8UCrFrjtJRUhYvFRGRk3LvYT1QxLSZC4Ukg1NGNj1FJrCeK4E",
  "key5": "56z9UnW9kZVSprrZ1FJw7CrXmoFCoviccYMDvrLsrnLtr2KtqMZm6x88P9jxSbrDPWXXbfMTMfkDVpD5HTzJZFME",
  "key6": "3QZsT8MaJRS38dnshYGcc1k4Jb54JpeQzCWpUQ9EyNswLJhjaZUyY6zk9g6rGt6Xp8paByGz8Z9HMoec73G843uY",
  "key7": "4kifhgRwS4bw4xRC8FkwdUp6vbA8AtnZ4scayoX92F9egY7ro1TqwBf9rviV4cL7LZJJkKWC9iFfjTJHL4mbBThF",
  "key8": "2eos71XYvgvNFEcNaqmB26q8gv9ue9Ro4MoHKbkTzkgij6mVngdUZL9zGvR1fWDPbCRZphU37R2wjNm7Mk3uUaD4",
  "key9": "4Q9Sg6i139ExcfytcF7BnaCatFQBg7rssBuBg1AiFxwF1majbVoDjMcL7wenmt7cBDeyseUnc9DAouRJNy5wBWsK",
  "key10": "37KvYwjC6XVTSfMtFE36yrAL879trN1k3Vvu7p3RwaCBa6w32D2SCt9dtfnJXEeYCtBoba9AjzcJbURpGFoAc7h7",
  "key11": "2AWsHYGiiH5n1WJuXg7gvm8FFwSKR63YozXzWbqqTkqtXTzQpods4RfKbwasj83WX2g7pqUwjdKJD4s4v4Wd91rT",
  "key12": "3DsTf8T4njfgJVWqV2AV86XoJ14w3iXFi19k8JH7UwCqQ2hH295GgqTtREx3Zmur6h4BJYKd2bJwxCfAHLU14bZG",
  "key13": "4vmzXUhyrSQYYrsTG1Mst9z8RseSNZqXFZbHwcaLH1PGTNx1LHqHQtdCJ4tCjhA7mNWdia3eLa1E7xTc1oDu1fke",
  "key14": "2i1RsFRUkhbfv9ENYGNqkT6kPDs7DvwPvgQfQj3dn3ZutzQvZ2R6m4Ltm2FzbPVv3Y3KAX6z62D14UnuJLAdtbY9",
  "key15": "3Z11uD6iq9kFT9HjkL4rJo7xXX135QVUvLtjwGWZSn2g2fxQvaMkvPeN2MdjxrUVH22jPDDE3G8tUiFgbCwj4Jvz",
  "key16": "2pnqyPVcRCigzeegQPCk17FXTb5prf8y1a55Nn82WXtQ769Du3K52SUzVvsw3GwhCCoDC4i3v4C7za9rRDszWqNc",
  "key17": "4prVYzjJ8SCewqzSzeZNoK5kaePWVtVHxCLzydAu4eaUsdrskj3mSaLaUw9nTjXdtQJ7VVLf6JZpRtpz1TjHApsz",
  "key18": "2ishdRdVm39A88dMJ91XmQG2TxUNwNjDqYKdm5efbWL23SzrMmzdyfDDxXNSAnPwmGud3a7g97cy9m1JRDfY1fkg",
  "key19": "42ExMYeMboiDbcbziPGE8Zkxvz1ymi8LxLRTp4jyh8HNmG2KNBLbE3Eh9xzHp4w7DwZUv4TPzAyiLdosKKwyeLBr",
  "key20": "6mbD8sZyA2p6Tr26rZNAi2yW71mZRDLx1KQiENsJXkoksna6NiVwFeFWJzFskqsAMG5gDGGPrDENjhMcKDzLnjo",
  "key21": "42CQ21oi28ksHS9DNeqbdkeN3rbk9LqubnsBjFqBAZQkxx3yWNWHEs2jsZD7zaJxiCu95jXD3aYKy1vDDVJMz8HE",
  "key22": "3q3mX23pkf2mYWvRcvWkuPDcJWmLPFFbU3LBa39zGoZTeWXmCMjGKA67Y61BQSnad1zWoZw6yBeX3Wuq4ebM7P3y",
  "key23": "2fyep6i8P536kNgABky1WcWzYjikrG5JUgLt45qYBXdbxG6iW8nc8xg4p64tuM8VFPbf4vTWMM1iYug9yK2SgeGF",
  "key24": "Fez2gz7dsbVAPsVKyp124amJ9xPB5E4a4bJx49b5DUQDwkWDdWibJ3ynoTSet3MYHVHShncG3MHUrZPf5Nit9o5",
  "key25": "3yRTjfLoUP1XhMpUD4TCQejhuj2t2ZQMHXviFt5TvZvKi2jT2zTLMfEeubcMHEGE9fxzXJFZBGeD8avFkgPxHWaa",
  "key26": "4Ut9ddTYdrfgJCWc9YG5z1gJqaupKrS4kNpLRCLXpBktG48hbMmfxk7F9Np7kJZWyEapEdpT91XpD4nMqackBcwJ",
  "key27": "3m4N4JDuDdwLdaucXwSLrrF4aTRTMZ6gvA4QH1FS2YsJBoK5KJJUuJcCpSGYe268dUzsRViEwcvJPaKGrLWDKBHp",
  "key28": "5uZn94tj4r4GkgzADJzw2Y1Yf67KA9uCD4n7GWqbqWecwo1MYyBwC6WaYXcbC4AgBamVvCHXQWrtT1FCTEJT1rgr",
  "key29": "58ufP3TyunCRMQaVGNuATgxcgZ6AT2DycSBwRxydHsRvVyqrSKWqg1xBVPKTkR2E4uK17RiTf3vVzDx526KHtFM5",
  "key30": "34sZjZtbGnkc4Dwi3TTqzCu8xmcr2PrGW2TTCogYH96QkYmB7YqyT6oZ1zoANSmeGpRjqypgKbAZvvfhSCCXLPtu",
  "key31": "NKVoH24aNbEBSuG6aEU9fbtjyuPSVKh52Q9UXDKC3fz2gbpsG3rHVSssSd1GNQs9FkRJDzqUJG1yLyc4n82rru1",
  "key32": "4BKUTXnm7nhZ7uCqpLHBVKLLhnCyGK7mEH1mkC1gPLSKrCf4igmCd4cvT5u9UUaj17gAnPtx3w8BuHAXQdNyYjpW",
  "key33": "5zim3pphULaWDQvJPjHxFU6Gp79BfyckEw2WDvGJmvyndx2xxGxnnwmdLuFAvT1DeQo7ofHJMHzUcaXCihGpvfV2",
  "key34": "EQuJux8KV1uZM9CFwfoTESP85avXwcfZj3xoeH23bKqTR1Yk9JddRYoNRmPWNY1qzME2dMqN5VyCFrFaPrq6Kef",
  "key35": "9A6AE8zqrXomhb2ET4zZwxKEznLno7hYw5rkq2coZgbS6S2kgTFmiKnUTtQ5ZEDGmd2FdT8uCiHwXVHH9cV3bJH",
  "key36": "3Kyn52UJs2SjPWNAsutxjXViBVx25xMQyMPcWqswo9bFSAJPAvCKciv4hfjsxDUveX6K69rX4eK7guFCyL5Jo3FY",
  "key37": "4rHv8ZrHF7CscLgcDvdQ1FAZfSWRYDyJPUjQKabPVgNUdGrLYQRBy1mF77qwjUbFVUZGZnBWfbT5pBbLqjNaGY1x",
  "key38": "3Bt2JYf16uRZv41wZzUksMQmqffpRkfVb83zSditXS6wx5Rs8EwRwk5wUVibEFDf5LauJsTewrYzK2MTPZbvF7Bq"
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
