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
    "22XS5aB2T7Fs7CHE1aeHPNGP9nyfwcvzfj2vciDZLvh9Q1jHCKKqhV4f4PHAcJrP2ZYhqA5addLN2gXUCoHAEirU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiJCrCozeXKeRVuAik5iX6zZZyEwaomy7pmk6gt5qo9EdmSGThtWnM9hpwJfPNaUBes3LSpgTGYhmFriysdqxmB",
  "key1": "ZxVQjEa5u3tXXa2ojNDqiGpS8tbFqpj2J2ctSPugWxmdb2Z45B89ve254CUS4ZnL16PKmLQitmsgvgTiFEN3jqX",
  "key2": "44Qdux7LrLDXLT1WcJU6SVgMSRPXnS1ERk4GuYEqcZc2wA2CPRMKgy2Jh5wsHk25uXkcGMQR82KwyGhST7uy1aXo",
  "key3": "ohGcZEoaWiTQf3kkecz23NjemTNGbH1vCRajUYHbUuvt4pj9CzGWqriZxZJNiZPzNkEYf1QJSwy9gRDH5sWqJiG",
  "key4": "24bozT6K6WwBHBRxScpztGeuVtUd5xFmYRNweFWcTXxtJgzM8qnnp8c75tZHQi9aHALJuwwQTX7qxhZTztomMnb3",
  "key5": "3GXcHiUdnUByJGQhUJhBHbtDr7Ua4rndaDXYmRfXknwbPDTkWYQt4M4oQg83kuxitpfvgx7PPDT8aZpuia9GEkcX",
  "key6": "CXGRJ65ND1iPawE9z2YJqmc4ztFin5DGQVWKnp8VoxHQvqZBW7C4yj4AWz4FMo694XghWyg2fNdzNnLkiZyoRW1",
  "key7": "2MkAkAbX82EDBHnHnswvyFHhLQrvBUE8giTo6hyo1kFKD8Ug1bdZvd8otjHo315yCGQnfgdBidiiiYbGXX6FKnw5",
  "key8": "4iMJy2qWhrBWGhqVi8dunSh8NEycPDqgHkyt7ocU2dgXE2UKBBCFzTDVSrgeLXq594EUa2AxBr1McRsUYBjNHPCt",
  "key9": "o1AveS2TbC7tpUkEWE2q9GKT5damdZLYZDXbeYMfxKKYQrEB9rJFcFAKb5NhMuSHqjeNSFwG9k3NhR2ZHwRRNot",
  "key10": "5Z8xPrg8q6xcnAi2gC6TovdLkFjdvm3nDQhQ2Ma2SUnctr7ibSChzXRoTDgSAerwaGaE4T7wtu2CKN7Utsv9hNzz",
  "key11": "3SUHMnuJ8eSLdkWfhgzVFsAUyeg3afiFyeUoMVAVNwnqFgA8yVGonYn7LqeDGnXKn178EtUdUBXCbwv4kzbm3TTS",
  "key12": "38M9EcDtNfHjTJff6hAbskZ2kTzup7iXnoMwS2b522iDgv5GwoLYF5PE21cr7UwkFCCd3XGZh6uuX7LSqYD99Rdc",
  "key13": "2YiMmWqTmQkrCCaZnZyG4J6b2c9okKVgMXgTWaE69JgWSxtBsTf2NprQtEZLVuLH6epwLuV8GtDTCaJCxqqG1zKT",
  "key14": "3Xuh8FTkEoPvLHjBymMNdSDrqDEZhp4buDqvKVjVVQMvxAZBHhDMPbm1pWERSNZejtLWwLZjTLoZixPpovvnpthv",
  "key15": "3T2sNDdMXYg3MwLEZHCZ2r2CSFzTX84J7PQUti89uZefEovykN5BWtMJBBDTmCy5uQYxWk5watJC5QyHWHvMGU5v",
  "key16": "2XyePL5WRsXf5vq38es8PVTHFREsHuvGYWp67hZ2EYMfJHwZwRtBjANNMrKD5wfboTXc48uGbgkcskL6nPWF5MWd",
  "key17": "41FqN4cPmbwYmQ7jJ2J9fY4md2C5BaaNvB8CD1NdtTXh4XgbSATUwxNkpTKAWY9wkgtmzmhyT3Q3G1vcsMHa38VM",
  "key18": "4A3zAXzfiqhqNaCpttiMeG8NnAmUxEZzzq3zxfkctnnEJ5p2kYN2ycuduf6xLo8xt9qCG654LKpqd9oeGRuxnoxD",
  "key19": "5UtJEGMyZ2DmPu1cc3z2CFfk65ZxVNf48pNsGDMuCvriwTbFRikJk2jMH89bNGPzocHqY7gbnzX5G4jhzu1Pp79x",
  "key20": "8s61oBvSLcMq2xM6vmqgxW7sP9nckuGkJNw54QLZkrxFyKppSX1fT15t4hJPiTNS2NFH78mtkqR5jAihXS4B67T",
  "key21": "5CKqbrrG5xATzYmdi4r7PuemVZ8M2HMiZPsC8znrgLSDfU75vuvZf9QH183a931uNYjcBJAu5EeMkCAg5N8mRP1",
  "key22": "3Dqv6F7CS5UqnTsKZuQKMRm1P8rNrJAtewx5eUBiLLkK1eZ7hErf6nyKby9zDVavgcVSWPr6UBaopM8WC3htEL77",
  "key23": "5QttzasJi1cT2knqdr8R5GVDRDeK4oKztxhwgv241KqC6j5aBLQWdBc6gLmPMmn1cUgDPjkr9uRTr3UZpxarLY8D",
  "key24": "3XCEYn8qsoQemJdJUD7CMQV1uEZn5SNELSTbrTcpkzkehfBsY74Q3Bhy8W7kuCvFph1RmWjeyKaghs7FoiT7Ju31",
  "key25": "2U74Tx9weZKV1Nfiv62XnpRGu5hfkJFjUR9d22jY7V61PM6scguFF9hyCYUpJ9XH4Q1kuWtACcqRkC5AcsGDgbgQ",
  "key26": "2V3orag2z6BDEfxexqMvv34a3pZTu1b7StboATytRjm1aqvg6reJzQ7pyZ4198a4YUzQSGELsyG4UQzsBUBr1SWK",
  "key27": "5hTf2yq4xEz6yj2nEVFAhttkp4RywbBb4aB5c3KGyNhuPCtkerdTV2jixeVVPS2qRnSXDQjo9armbW2ZfuB7jvQK",
  "key28": "4tst1mvBqrNLNjDLBNokcLHAzNiQug1fCN18tR5fuM5WgS6PUuZZQo8eUBbWYDMfb93vagekraAtjo2k5ETb9dbv",
  "key29": "sUa7oVVSZourFq53X2SfihWcU3e8DFVkiCNUxDUcwg25xrQPxJ7LH9RkbQEWkDfRnNTmY7HhLAnANR5y2PfUWE2",
  "key30": "4zC87ZHYjYwQs7EpgHZZrwcm3dYeSE8iPHdWggZ1qxHsCxwt5zEc8oWgemzR9cbnGGMRyJ75qfEy16y5FzXL5ica",
  "key31": "3T8uE3g745m52hbhck5joSDVqYqnqP6iice3As7rKgNBM5q6kRDtnF7mnGe1VDAJdcgiGtrutXjwa6oEaJwEzHBG",
  "key32": "3P7zmQRLhdvVZzp61m2vpxnUaTrHp6voW7NcFDf8rhGHybmkR6N52Y1JuyWWQXivKxnVEXdwEXPUnUHnPdc4y9Xh",
  "key33": "39VUNteZ1eyKQqhNcRcV5rp4YuSD3Y5z4QhiB96bjdGZvLL8Yhwnate1CcFUXZ9gjKj6KjRWz24UsiEFfrNavLW6",
  "key34": "2MCqmV4UVZjB4QZcwDp5vVnySZ482EULmWoQGeHwpu82PYQ8NyqSpMCq4u6perkzRY3yNLeBLnivKBiFEUvLiHor"
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
