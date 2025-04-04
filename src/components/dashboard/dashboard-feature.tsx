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
    "F5ZSPppkQdrg9NQfM4gJ6P3qXhMqw4HhAyBUd4BVwy6qWe7H6y64LsMK9ovUhLrUgymaBCYmkwdfjhpWfy5fbad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSr9kRP2TKYhiE6dbdKyry9Lh12VYeNzLqkE1AZ3X9XNWYeAnJ2jh9DosdxaMKfCiibs9LsVunNWyzPSBsSS1ev",
  "key1": "67RpncGzHeQZXK4QSrLZYK5vbjP3nMrfKEGQwnHmVLpH7B3egExwXmYqNzWx91QYxUvqj1763hmJ35t9LaWDkz97",
  "key2": "2yuQU5KNtmbHjFBfhSGwtWWC9bFqqWpdNg4aEsUJuFgYAwVVHBovFzMwCxjeCM9n12YPk7aHpQcjYkPP58A2q8L1",
  "key3": "3voMn4kRrciYs3RfBXyh3UMuDXiyZT4fK7QoygVJJ86cyDvhwxbFBGN5k4hREQHaFB5EEUEmbhdcDe87jp5EYUiE",
  "key4": "4f6Avwah8TN91cus8F7DYVPokzwfRaLrCLWdYx6iycvYS2whQnotLK21YiCZ8r5cQEaJ7uoyiHBykJsPn9ENTq4P",
  "key5": "2LN5Kp33kEC7rS6zJ8xfjTeeuPwGLUUDfGE7QB4uVBjJUnFefB6ReaxzFcHQB6FAdHmgZw4pz3f7cyZfNxB6Rfgw",
  "key6": "59kfj9g91K8rvT2L9hisW5ZpgtpRZFSuxipKnT95jo82ZakfqSjQ3JCwqsm88Hy9gAKLc4H2MJNSD8mJBUU2pMSr",
  "key7": "xKR62ix5uNkEoA1V4aCdWPkhpz2jYh1wq6Ju5jgyboUfiPyeJhwmPtG3curtK744dcJWrqFAFhbDaHSatDo441v",
  "key8": "5J4MGgAr2QCCRBnHuRiDVXgdXkP6byGg7pNJxGnLjbWkj7Eo8dmTPmoVJMHh3hX3m3t7J1K2U19jkhhAKq7ycKVf",
  "key9": "4c7uqcaYrT1U5EpbfLStH56e2Hrpk9XqAzHBYiJU1foFZGuv9ohSNNfcjmgGMkAHL9sESfmJXugMjpqBLgfgyAg6",
  "key10": "2XWJ2Pc89mpYEnsMqt4oMCxk86hWBTKjHkyM7nELfpTJp6BamrfasjHWT7RnNZzaW5tVqZdwviKdTPqR2KZ1Wj5d",
  "key11": "5Bo5pwXq5Fg5m7J8rTkpchCA4nVvC3GZokvWCceYJLLVc5S8J5ak1vmoGb7KHWfrsiZkT76TvKTHDyJqdNpk82Qr",
  "key12": "4hF9ozz1tjkz6AXmusyhQtdfm11Vx5FLFNS9f42jieyqrRSjrW8W8ViufYp8BUUHNLw2fmvaLWAL1DChApCr4pLE",
  "key13": "3Kab3LKcbaKnmF2iWfRETdZHhZFxXSyS89Peko9SWWx6mGkUhPq4cSLg9oddMFLQnfmDUVRPryBKZnq45W7vuXPZ",
  "key14": "HRNAosrGfW2WRHUZ8C95CoXPNRQfV4CRh3GB5TPBtRq2rrU9nGeVQzb8vzRUUmuDmmPZnsWsvZWWXfc69N46oLU",
  "key15": "4CMoqJ3bvqwpjZKXkVinvJfeejwaudmcgGfSSngJPzzUZyJwSpQU1mwvvRHsahxUG8utmHnpgLboLyCtWr8fhzz1",
  "key16": "fDUAtTQxwzU4HJy4adPRNWec6RoowuVd6bt6aXJvvSmJPjWB5gseSWhwmBTfTcr8FtMbrZeWK4iFTdE7ugR5o21",
  "key17": "66oXiMbfuvCpi8at5XB2YzM5GxAhoiDjYgnhLHE5TatDic7gZ1e2gWRu1Di6zHaMT8U3ipBtLstsqHAkD7kA1uKo",
  "key18": "2nCTxVDQkHotyG5uTPzNCood88jGmTCxqzeyE3STS8AURCiBLT1jzL5JQHCokebsgYRUJ2SV3gLTJSZFqEe7SEEx",
  "key19": "2uzPgSsvBBszaoN1AM6Gh2U9k2NVsWhDcvME49mX3Sk1w1f65BTzWFsBQfrh13MewCyVb5JHrT5jx3aHMCFJ69zN",
  "key20": "5KMVH5W39deYRbKnUtGNhfvCF3REAUTkKnJrgQ7M1AKFgGdX8tUN3gfDouYgexNqP8cmb5mFFCEiiSk9cNhR6BUc",
  "key21": "256ymzpSeJ9ih65EJYpYvPCC1UsN2WaznBVWsPWxSSMtXqgiuVB4YaEZqrZtYAGBzvPfPXxj4h8vfL9vyWeSBXKu",
  "key22": "3HsZMqZ5keCcFrY1gcpq6yRytVSocKzAKujpUNXV9zDuxzmZcwK371uW3EB6HwyAvLHJ6mMJjDn6ca9aAYb6dKi4",
  "key23": "3aEmA3ZGuwbvbUzyuLJ4ZgN4wG1fVC3KwuQFwDV9ttzq1bnfAqdrRqGmseTgG8HyqZtPSmteXFSancHGjpMBCoWV",
  "key24": "5XLaKtZNGBFovZ2Cef9QVZvXPW9zMXddgfq8XTd6eFaRu7FEVurykdRDPHwPj69s747cPmax56Gy46XysJgAM6N8",
  "key25": "4JrRV9PHhT44jve7GfS92hTf3a6LgC1veWtTLjLQNBHSqxsXEMAyHgD7vBR6Cf52TXJz8WhGxSFSB6nUBoNqAkh1",
  "key26": "bpW8iEfSXTqQjKWp56KuUcq3ANiETiZJiSDe4MX4yn8RV6otEYj8wL3moGim6GHmAK5E1kndVck4fHQJYNqYSQu",
  "key27": "3k7kt7jjcMVrjUd1GgjRJCNUcLsd7DjFi8Grz3NSB7FHC13vt7ZcwhF6x21TQjcbMS3SQ72apZj8XDe6LsPGy1wu",
  "key28": "MAdTqzUymwVVwE5n6TNNhfvjqu6Cx3hWsHmx1nLBsnEh24aCyKiTAEGLYHcWy2nqME5tZTgJkW6EZfxQVsWLZuw",
  "key29": "3taM5SuCVTf2xSADrrF8qqAvMfjGE4xVMM69Ed69WpXFWmbdnEvj7brJo7iMjhtTq81eT1vg7bVRcrU2xre6qRxk",
  "key30": "5aX4v6VXyCG79YACtD2cW3XXe9uH76CzAuC53E7kKYwkcoR6L8fLgzKzSY8gDbCBd6ACuPbEkHH9iXX9tLLzpksV",
  "key31": "5juMswqZbBkDKjHzNoWvLb7oeSopWhBYREQ3UAAu7bVEA8pWyr4zwnK4qDjEb6H9M8SGR2gTdc6rzHXZbiaU6Hh3",
  "key32": "3ayy5hCVzYEnxU4HxC2aY3vpD9qmR7rEWBcnwwci6ECVMMD6zzY5T6diSompDn8F3NAzbwjrd9UGAwzHwG4pXw1j",
  "key33": "62KVeu15atFbkyJgSFearJZQ46HnGRGBF4aGHTTh4Kkv6GjqBKzRPmQ7WKjhKBYULn4zYRhDo3XbaAHv2ByE38or",
  "key34": "4TUSGniZ8wVSgh3huNY2TSq5ELafhSCiZ9oAiGd2WCYKFcHwHRpwDNyi5UhzLtkqMK5tg3CvEQChSU77C1aNRpkW",
  "key35": "45vj5zjdR6tJBpUav47KQFdzHTqNsKREvzF2NoyjPTA35dGYGiQ7hrJpvu9nSx2C7bUQKEuMS1eL5buhrpjHoVds",
  "key36": "3RMUedvVB8h4JWLSeukCy25kNnX6Z1yMvBfQD1qq9DvkMvcJGM4Rv6jctdagXXGNfaiZXYEJmCpPVANinKdbefGF"
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
