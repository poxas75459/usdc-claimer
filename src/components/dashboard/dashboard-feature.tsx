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
    "31oRZ24VUdy5M4ayG8jRuprHzaE8z2QKPungoZREJy6v82qE8R1BVv3ChWDyiaFLR1n8TThT8LJx4S427hRMoRTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQPB6YMmyZMMCyyK39n5dq4Ev5MtE8co9CXsBzs8bUWX4NqKAVQ1N43zdXVVJunmLLUx4q96zMd1zS6JMGRBXE8",
  "key1": "7LUH7M4SZ7LcHQPqqn7MVrY1ae8p4fBfWcrxZ3v1MtZNMDwEFXXyE2P5Cquxv2LNDnrmH5UQKgmdtBBf4NwifsU",
  "key2": "3REdhJfmDjBRzSqaB6gWXcSdzeu4frUcrEUqkL63RimY4PFJHQD4oJydHYyJ7mC3gnnwuzmM7cUkeKbsqufUQvvw",
  "key3": "5QCNj6eL5kEmoCnNHX4QWDzUsGyW1tBbSFLkxr7HSgAuCcGDLaUPScvNrtt2umDzssEjUZjWW1E9e9oBLnSo1p8L",
  "key4": "ZqUFcAGsE5zmpYbX9CxsWHSJdFLVzghgEXYtPUjHSywkXfDmNT1xKWZALPCesC5VEfVYevmMcJyaowaQrM5owz8",
  "key5": "2iVw7aU6SCgNFDQwQ99J8UJeLBuiqwYaSfN3UYT3LhJ1CguhZhNHwAFgrziTQo7nkNi3P5i8zjEZGpExCCEFJ9jL",
  "key6": "3RjNEevjoca2SJtJXdqPDV3yWrBcNL2bUDNDb67akMoajy8rvECMawdGViXY9um5XqKJHvopY3uE7sQXczN9XTKL",
  "key7": "5kDboum6BqrfTUVBKQLAWus6pHdMChN2UFWF1avob8L6cnbmKEQvYQWwBWhuGq1wAea3qtTF969yXpnWtD2xRZVW",
  "key8": "3JfDScHPVC4CuaUw6ekcLqEdYftLAwXWnb2kKQb4jXaTCCo491CiSZ8te6a8xAy7byJsmjdJZpvZrtHdJTtP5vzW",
  "key9": "SbyACEhsbPHcG4EjmFe98hyVAdRvy1qrQGDaHwQK8f9L1vRH6LTJJG4d2h5oXNbUM35MqvTg1ZeYwUr7t5fhu5z",
  "key10": "42rjAmTQCAh66smiNrGDJcHLmw7FCcJHZms7hoqmF5roryUuMG8bwQNxtXqZ2Nd2vSAS8CvgWogsMUgN3CVL7qqm",
  "key11": "RF1FktqoUVehSbyaMLad2LK59PFgbKHWNdANL3UFcpFshLtFnTcucYNQ8pcqwr3JRrmnwC11dk8cmN7tXMNyMZq",
  "key12": "61DBGLmawsRX76JkLtnA8ebsdKCZrnhsqJAGEdsiVyfC3hZpA8qw9swL8juzMroWmKHbAcbvH8N4tdy215gu84oG",
  "key13": "47QaE6si9kC4NwQfEKtycA1RctR1vc5L9Ngfv5o16BJYTdKaCGyeTTkAwuZQ9Fg6cof6Vr3Zuszc4tyL6AaBK3RN",
  "key14": "aR4GidhRzsDm6Yh7TUQ3MPR4zVLKb5FUb9pSESGUewhpEFT2MEWc2LZoQkTTmZqtzCKszpdJUCrFQnSK7Yb4825",
  "key15": "26HYYurwF3hNJkXzBQQnWzKrZt6TSVHMvLF92gH4WWC3NEFyyqV6YQpnpkNYuEgguQG6Gqga7gMoWLfwkBnTdHwE",
  "key16": "5pav7EaLXYkvN9pzFzqKfnSbShA8fjRhsHnYMT8UTczey1enXjRkfXtEYZwe4NpdtM9bFcsLamFDtixg1WvsrRTx",
  "key17": "3Yk7heUBRn22Q2b2jYqSTdm6Jc6QPAvyx6AbtPUYSBRn2HCgbrsNxFzV5vCYBpqQQKopXiacSPC897NnXtSPbwBL",
  "key18": "2etsgQv9br9jDwomUKa2QQo7JYB7yjeP4W1MPtNjKSWu1SJVkV7ZX5UxqGF89umpHPAV6K1i3KLvNhvJ6siqwwqa",
  "key19": "2ojgmn31EAUWKjUdAPvzmUMtvzQT6CsEWsh4DDRNbna8xMd9vt1pTBACo67JbsULnWVfkGikRwDJ8uq7brfTu8qB",
  "key20": "38G5JDPtYfAawHydYMwKmVEWdj3HTfqUqDp87aMeWQAcn9S1WihyjKP9w7kG9MX3Mg7uxx6zBHjQ3E9UQdbi5jCL",
  "key21": "s7BFi5aToJNsjtx1Vg26snNcypwQ55bRMF5oQLajU2y8oGbvTyjLK63wSMb6gwHnkoyBPbwMkLvkwYnLxrDdwEY",
  "key22": "4xvG9RzNYSvGMgYSTgZGXfKeHak2hJU8gocgxmqosuRAvZYqBMjGB7UrNwWZnYdttVYk5NGb87Dc8SLpbq1diz81",
  "key23": "3ANR5RcS4P8uUm1aoau26Hs8C6Vn1aXo5A3HazxEcHE5KweEdy4fWknXJgHQk41bdfCuMxtaRQ9UxewJHDEoMZ8z",
  "key24": "62FekmcayAo4HzNUdFeoaABEYGpfsr6fPFqbWUQY32FRvEmCkFmSAyeXUTo2Hk3KaaQFMuZMMELtFqcMuKSqRiH",
  "key25": "67gxhDzNFUn2ZM48oSGPZ9utEvVZQtvz6x9kAR31eRSVrPxprxaj9YsdfnMmthfNW791aaPMdUcGZV2fERgoRNgy",
  "key26": "4kKPZ5gaWeSAQcpGsEvYRbdmfbC6p6KJef4HUTvp3zFExBMZaEPKvV77NRnUQaHL236h2HCgJi3EqEtwLcAQqhtm",
  "key27": "6779VyWNxPZaGThYHq1BWAgiLYEAB3n6wFX7o6yqBs2GC5yic3HSa9wTZkrsq3VzH4QoAJaLg3DAAfwBjWQy1r75",
  "key28": "4m2e5ShJu3Je179CBRtRvhKAFm6cYVHZbCW7igL9bf2KxwNm7kJEGjrHvdGX9riE3YFs7WunTn1Pqx2ZPjAZJmUB",
  "key29": "j436pBD9VtquSyHrxvuGE3JUGSjM8TLVMGm88tXYXpo85fKXH38v64Xbb2HBBpjQaonk31jnmewaiA2mq8DC5AR",
  "key30": "2qNtE3aNcaxecQQNNLPs1AyMgWxURXcAavAbVoeLpoU1yuAk31CPEkDwPwrjJxkgT5rdgFJoDzZk8GNtx4qfji3W",
  "key31": "2jjaVWdF5epbY7aVeSNZLGBdz7Lftz6bD4WKVh7yWFEFXnHBknHzMu4TFTpYJkTBhLAfYbgABJ7tzAFWhEwknrfW",
  "key32": "3wePYqJUSkrPEvjwMmyZnYkfBquUwDjskoyK2PpN4Q5A6Yx4jpKqDpjcYYw9SZkUj62CT2j5Xzt6sDRb25pQ2F4j",
  "key33": "59bcpDD3YdbB8JAj5Pj4BsXuVLegSCKyNsgVFwGnbskCKpKprv5GATPj6qv5rhCer87Jox6wLvGbn5PzuSiH2jA4"
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
