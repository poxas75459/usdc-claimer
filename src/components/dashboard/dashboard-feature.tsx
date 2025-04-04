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
    "35yDVfFGbcuKfJNECW8BFGnWPcXNWnBM6kqToi4bfFoAZAWy2dhh7YK1Kd3opG1rK1Xi1vN3YnLuMc5qhdL5ot2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5W5gJwGUn8Pnv572SMNkdrqKuPwEcRu6cUDqj4TPeacR9NQttM1aWNCigpFZfxXj1mVujjd9Bqz6TtaWKcjhaN",
  "key1": "3UxtSpQ7ExD4fYDH5hBn7WEfUEsAtZsAUTP4CjJgYXdihmrBeFisR5Q7891k9VfnFFMvVDxF4XkZdaDHqjom1dpd",
  "key2": "2KLy8mKsgZLH2MKsnjSivgyc3M7Kmd2U54uAtaMaWXrFApj38fbEbEuwSuxGYRkwtr4cnjBPRtM8kcWhgv5e69Hm",
  "key3": "yWpCG1mutDhHjTC541nWrQPRBG4tAQcyU5ZpY6qKke5NC3TxpmR2h5YSiwoHLoJXWgJbVuazDUyWdSND7KhHxoz",
  "key4": "3gMrWhtvbr6NntjrLeimJxUw9wcmdx7HAC3TEeuigg1Z5bU4QatVk6bMY34PoWi9PmfQsRaHTQFNa9THNvcDRsEW",
  "key5": "3WCfQSa9qECjK56PphfFrTV3Jn7W5npCJNi3cR3FzDfKGtjMmxXDxeSkewCQUq7v28H76AkMyLGnDbeKamHSV6VH",
  "key6": "5qdfY6s26REL4RBYEGvx29askxtNMMAMo9rFP9XJCuiXf2HguWWJ7PiBWpqEZvFm5eLqBBPEtQVRCgc4V1N5MrW2",
  "key7": "5VEny7k1atMAfrDzbXY2iGRMnJh2UNgQEBQB56vpucMo8y7A23Pw1rNmwvzqUHWfviBFajUscfFW446XXoAH2McH",
  "key8": "66iUEKWrpLYcHs5Y5XcpkeKhf7fsFZxrGSWp3vznBKDmhYTFM8xf5vnimmBWNA1boVJcjWRs2q9AZUsAmuAUEZY5",
  "key9": "4DB5oEsHm7QMCkoNDpxk5iULxMZZH8gfrVyRKTk7ehsgCvQJdoQSjTXmSGezwqMmrJXayHUWxJwASBrXEbwvbLQ2",
  "key10": "4g3cQgquRxYv1ze5oz5u4bxoLYw8BAJY2DG9yw7pkNVP3aRZFxPa61tfeQmAa5xrYMj3EXPkeNdJz8uQ5NaNQQaQ",
  "key11": "2GzTcPfAsu8TtogUnFLoTWLN8wPvPnEFBPwEgMLTLmmSRmARyUu8MBofVfKB8TUbfiuKp5CnvQUw6hpKR6ywJbsV",
  "key12": "3ToxZqbaLBmwQSvXvTeow4Wj4v42pnCnoy4FBQiw9bpWwpe9CWJZGctTDmbFZ2k7yo6xQQL9zGiwXR8m7DRKjipM",
  "key13": "3b8dHwfXm9H8ihfgW6eEQvGRFUY9Bm84tzkEXQmzybo1u3kpgjxG1uvJgf72psA4MNxX1LDBa5KVr3iqeeiEQhNo",
  "key14": "2dy3UqB8rrB8nJwacRZzjKL5BVYTa12vVj6f9hoUTZKx6e4NmoizLZNvrPSK5xS3LRRRbwufPrZA6xmwNTwXVfNP",
  "key15": "31xWowuosGp2sHUhdR2oDuMam5C9Be2huXGj5fHFo97U7MEjhxeU3fHixzX4UKVjE1ZBUZoQJTryrXrCWfinEf38",
  "key16": "2gVeKa6YZ59hRaepPXTKhu9nwvw3iMikncnnHXxeU65ctgt8Y37EBYYYnZg2Co2NeP9U2BuDPtrRbCtWidQZTR7Z",
  "key17": "3hQCi9WuQxLF63mYas3oEMJENL8WAkfVcNbBZ9KPsoFKTL686sziKmGQUcEZPp2RAKxEE6dMCuegHyf9JYHermS9",
  "key18": "3eKHufFNZ16ipJxYDe31aHw5xhseqxPuW2kUdRGMpkKYuxugNwnKXfivABbKC4zfR3m8egBK73QezrqdgNg4Qi7A",
  "key19": "2boFjhtQhgNiBqpUCGCrUNXgh8SHmPxV9uphPmZgiYG6bP8G3VLHyZtJ7cXEXUUyiRpa6dvv84t8kSrzHSYomNZR",
  "key20": "2bKuYtex9CjrmZvLaaRikagQUx6z4NhoeSrkKgXurg4PfjsTfRuVY3aqvCGnUfhWaBKCzPnHBZkmj2YTrbaiasXc",
  "key21": "29h8fkifYUb67sbt9sBHGJRjgcbNjbxMzHsSz4pHutbFJbnK4pdg6w19bgGHvRS5tfRW5iUKQ11SERLg6RadPEVi",
  "key22": "59iimXtF8pW5VMbirPksnGupRm4o8HWExrjWfFAJU3Lk1MmZhL47ZW8iqdMySGbtjb2YcyTUYZAfLNbFyz213FTe",
  "key23": "3v9Uyhmmu7gGVyXGEKNLR2ABj7g21y7va4RYnLdxQCDLB8eMzpubGf1r2KbLqWsuVqn8spxNKyKbnfkL9AyWZA9i",
  "key24": "37YLyv6icD6ohoUwmnS75Hpd64M5mdhQA6sTDR9Sqmhu9qNSvqn1aQrLkTLK6Yc1v96ZxFhyDxrfAh7P3GcJNQSb",
  "key25": "4u3GHjuiGd2YyeAjGZzPvpVm6iXN8QZ1BNtHTU9oGs4y4rvwBEob3nqA7EcJj5C7ppVDUEUtBa9LNis1xB16vyir",
  "key26": "2Ladv9WnNfKEy9gcn2j4wB14C6E4j4gqvZo3X7uVL4ikPZ3FmfyAWaq6nY3gDBKTJmhqk3PAetj8QqFEYts6vrJo",
  "key27": "5mLkJPMVnJvanWncC4kSyA4gydiJaHMrAJRy1vGYkUDkMGvyUimoJvEjAKRFSQte8Lx6DyKwwpLDbY3BnbrjerQs"
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
