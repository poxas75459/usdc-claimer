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
    "5KXPCnfTHYsvZPRNFrEonFuBcDKKDBMpPTo7jiSoYV9L2cMEfuqzykmUd5EMhDP3d5UpV1Ct9UyyoxRimZBeKmSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bn1dkbVkWR69bGeSGLWcXtUfRxTsxV7MGks6M8PcorgQNw7MnTXZqDAUXjikCXv9hv2gAwZjsrVPXTEYPFmWUZE",
  "key1": "R524ArUDDkwjUPDHppY9rursafyifjfQEg9SD4RWyoUbXuAYFQ9pJwQhvxQXwiKLtMxHaGmkUdhZR6wF9jEe61J",
  "key2": "5M9Nk1MDNUx1tA7tT7Tsk8HCmD53NjbgfimHWKzVWX25LHDhMcXvkzBfz4xnir8UK7TY43BbaEApRWT6LT7wuwSY",
  "key3": "3oKwsvgEe63n9PzaVAcemkCMJW4jjudAyEppS7dqCb8iyYcE5nQ1nLubbmF1FY6SvnwPxzoBhSF9FUVK6RgU6r4r",
  "key4": "35zKkQxndh8cHzkngm5JF7GywHF7uHFa9pZmQgmYbQf97iL5pNC2uQhCVUmUGjg4Wh4sYf5kCif9qSi8S8M7eYCe",
  "key5": "4FHBvPG6Sw3BJAETtQQUyCtj6Lj7Z2vzs5rrZyGzSrqEdhr98SYh93Y41rfh1ZTH8PZWgy13eKq9dPVi1Xv99yxo",
  "key6": "NrSEn96tEgDorrKZvMSx6s6BRvixMr1Gq9eihkKpeQ25153U1XV2Ssp4VFhcGaL9Avi2HzxN7AEL5r79JiGNhHa",
  "key7": "a9M3XFVNgC2pUqdYd85Ei6mYyvnGxUqaQGPSNjYPDTpc3EScBL6SLkWhbRDWsR4ZWr2WPtmKHjzYrUzsifBQekU",
  "key8": "5TnPQ689ZfLbnHv6whLcQYU6LunRV9idc47ihZ7A1mfhempFeZ7QPagavDDhz1eWZ8S738mKjTysJC6cAGLyqjxb",
  "key9": "3ygJZ5r3VVBBeb9pJMmEBpgwqJg1cUM9TgUEgsdkG4JXjAQJ47759gtzkaLHUP4KtWf5kmBYwf3Y6pa3j4dSXs7C",
  "key10": "3xQtXou1BAHuTt4dX4vwAFyvtCgDEtWCGMvXLuBnG8iEvUV4GkvJSvxrFwLqV5Jnhg8ZiJCpFht9p4dUmEc1cprv",
  "key11": "3YR86mspH3oWnq7U8zGVT3HpXAuvBW8viWedvGHJ723NUqPvqUwoZs2bHVdUendAuVMKw6hpmzTENQXMKANE9bbp",
  "key12": "2rU1D3sn8y9r4d43qhHf5hfyvfVCRKuR2g9bW5jNhv5eRhooioC5yv9qNkxnWUZBWrrzaR65qmyPUXzphAF96smD",
  "key13": "NbErztr1NqNQgWdRoPK3povoxbfUHASh72QMZVtEd8FaCFy17a7A8qrWVaBCYuCaDXgSQs1biE5LXB6Wb8uhz7K",
  "key14": "4ubxeYbJmdv5iwJvD4phdDUaPcTiKkPG2jS4bqxQRUXunGPKBqyr7w7XDhdV8qmPxB1J9NbEYDaZQ4kuUZHjRZ4R",
  "key15": "2D4E8zim61aHdALRzMiwKhBvDWw5g7NGy3Mbhjm7YVZ2y71buZAhRsqx4MJvuUSjiYGhf5p7MBap7aKeVvvog66L",
  "key16": "J5jdQT9joYFcgTmPBmgKQzYrfVL4WuMkp8dc19inxPmwU3MBjt5ik4gaHNjBhWmtisv1FakpwV1ait9A7C7RXWW",
  "key17": "5m55qKkFuHhDrP3KWoBfgFnMKTisnPh1wxHSASznrNenrV37Zv1kgL99c6aqq7X7GFkbMtbUNJNev79H9LMTyH2n",
  "key18": "5hPckEGBnd5UWxeRcfWzZnHAJha4KtKFv9A4qrGCjiia46Xh31zh5nq6V4LdwJWxSnzbprbdLpZ5ccrKPzPh9Kim",
  "key19": "2SowimyomEa1F3zAXqcf4HTDgiLpy9bY59hZq4LUVE7uPKaoRqwvxoQzo5XLhCWpWHFMFQB3mrVREp1stGRw4VfN",
  "key20": "UKEFo7PxnFRYVFGuNzzCf4G99XNg55XJ2GRakereGLK1e9eFowGq98VtDfNuStpT3wGMWFforRvfXmUcTakdZ9J",
  "key21": "2rCm8EMWFKrETujXJXyyz7op4uuQw6iBPpzJhJt7jGZaiSXQpcewimVPhLBmLyntj1u9fReQasQosfJouH5ZowuB",
  "key22": "5PsncvxhGJQVF6X83hXwNgQZb4rqVP6dopBNT9qvrw4fNv4q3uEzxodwCyVwoHcks8ec6yx9wbLedABiNBCuYwT8",
  "key23": "2ZoXWHy5hpHJwpu4UB5vzVYnaZ2jkbDXyFLssCuuAuj5gSk3ZKJBjqA5YproMPv5f3GxNsujdzs6TaNLhi9SQCYb",
  "key24": "3uQ1VygUmixru8khAoLFmEWHs8kw5gkTyHrrKLbUGdGA7nVPuNXHxmCqrvM5RsNepT5dYAdrCpSmZTMkrp8xN9R8",
  "key25": "38xwWskytAgR3X87EpKZPBfyKgBujdsjtsSW8nLGAqgQdfnGNPErFQwuKkxHT5KW1hLh5bUnQKnCMQcEdYbM7bfU",
  "key26": "5SdLMixyuigfGqpoM2NJWV341W7cV27ypJ1JvjCMEEdC2KFzE7PNXWPjAYmyBYFKMPBMKCSMW3tjWLtXS1DEGKm5"
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
