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
    "3mJGR4mCe1XQyRnfZa2sqKjjrGGxigVYTjHYNH1wTEVckJsBZs66fZWVWP9vrfBFzQ6gt9mn5Lw7BKgXZXstagxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngcpycWzLVNdVeZ1s55ZveAcH9A3U7rFm2zn7FS6MonxyZrzPFktF9cw97QakFGTjY942EgVcJVhuML7mSiaooT",
  "key1": "2EiCxGZCu2Qv66FaP3vH1YJ5J2mSCeJGRzowuRoBueJTTjmySyVjCMtC9fa653wKtRJ4LnkbY4BMtCctemPpWvYH",
  "key2": "2R32PGgs469FDNBcATXZMj5wZpNK923pZQ1DDxBL9DLHq5cbvJUfSwmvZtXNoqC9TEzSsvrXAunqcZ6KS6M3EHs2",
  "key3": "56dcLM3rg5giFdJGKBmcDyEPNUTRHZCvRtNgcAWeLZuU32z45VEwpduibwCzmYoQmMwK41TVG6m3s27trJiJp62",
  "key4": "3HC5CFFCu6r7xHbSWuGAqC1zAqRAiYJYBtVTcrfmbiBcRRHc5ceU66FNQ4r5kDax4v35hYmiRrjmsvd1Z5UfqAMq",
  "key5": "3Ps6caCSNTKi5M27hULXvM5B6EcLGp61KcCMiuRtQW9BDfPkWMQGEGMKs18h5ZtCD8Pm2KgGdNSNTHfAEeoBcuzz",
  "key6": "LoprqnBG6QUw57r2ciXYCimV1KhQdWZRJA5oGayQVP331SsuvoLzoT4jP3D2ENYqkcb14zohYfmxsMXSEy4qfEN",
  "key7": "2rd8UcpA4qjFbj7QY6CJ3NEN1pKPRHXsKcfBs2zXiAk9gf651Eg8vcnP6H5CRRkysBfjbjVc9UaG74duxXdYTm6g",
  "key8": "3A5wBKoQSDkNGWguHgbsBa19BZFSwBiGtVERECkdoMozLpGLdo9dTqGrk6krsQ47HaMWLgkWz71MdJydDntscmyp",
  "key9": "2NARG2k3AbsTdt5vGwQW9TGDgfzuipiWtYe4pN7WqhJSCaio9rQ5gkFXv5i4eZ2LKohj1bMo67qFbhwbuibhJ3He",
  "key10": "2HJ8upbM2QJfFbScAgFMFNAdxy5xzEruYgiAvLzdS5FhYw8RiVFnGEwuJjpn7VphxiAoXBMsR2Ntyxne7TrfUMmH",
  "key11": "5rK1jtBPLxXLVGLNEVpDNoBrAC9fs24Duiu6f5vj7BeRQFefznR6JVE49hBRuUei9oUczyoUQdBdNQJVwyKsRuPC",
  "key12": "nxJxYAvQxFyxR5PNqtWFSdzSJeDAbnhkQhYbXWWcDMUB66YAN3p6R6z2pDE15EgAffn1H2pYv3RherBqqJ6DRuu",
  "key13": "p39EcZXmtjesA1qJ6PCKFPHVWLNxS2qhk1AiuULs7F8xAkwsGuvLpeXXXdoht1WKXo44mwRY5vrMn5B2MV2Rt7b",
  "key14": "5eNfyfbDLg5881i2qPqE394Nvee8hi5gU4CVUMQPjnrmZYuVvUCPWxsqxNqrAfezjai2UFj9npzA5ZvrAWNSdshL",
  "key15": "2yjD9UHz6LCq17muxAV2L1NP6f5Sm64WRhEvfAi7YZukzNeZsNcqUePraUUVmKGP1AwwVpqNiQLU2bicbKLghQNj",
  "key16": "5mJYrKdQ2kf5MzfftD6n277rjke3voeUhqD4gzK9iJ4myAwTQcTRogDTprYKfsvuw3ZgvizwD3MaXNDC8fdhm9H4",
  "key17": "2yMriBR4tZMCAzhuJsHtnqCAtKmhooNGRSeXNzqpyCANUDZY1GzwsU963n32cbUWjm8Z26zYw5HRjsoAiDrVJC1i",
  "key18": "2hpddZgbhVc97i5eeui9qcxuNWBbgV5AeAt6HR6DHT1TKuSNWune79nv9MRBqFG3iA6RvEkCUpnJ3C8Qx4j3wGm5",
  "key19": "4HrYzTDFu2sJqrzihacHxHZ482zYMv9EkbJVWzqCovQQ5AGT36QnwGrCLQfKy5cW2HTiR8TTTMGpmeWgcmdPHHGs",
  "key20": "5HJP9YPCDhG28i5ZFprhxqhGp9USMQPZ6hWYbpUHruZx2py5c8DXqNVNb8owwp9kN4aeHwQsv5AUhx97j5JLhEBq",
  "key21": "4eNcgD928xwnxDMcp1b99E2uxDDAm7ofuhz79xFsjr3Aqmt8eRvADZtHZAMG8iHjfdEPpUjaBhHdDRSxje4RutSP",
  "key22": "De5hwUkH5KrHqGg5tjF7sTcEycn3kA6t1vFxVPZosfAoCc3Z1FDs8fJ1KfbcXwM3Dvu8WzT3qrr8UENrDQYKNg5",
  "key23": "1LUMbtNxEY5DxeHo7qvDo434UTt8GhZSpYTC4K73BaYLZuDvbYLJQ2bhsPxZ1jWKeERH3faUUtQVW46Ff9RqCdk",
  "key24": "5UmaeX45CdvvPVfPznSkvc8jDDazUoQ2Qz2MNXiUgqKGZcCprJkkfMGvoRT7iB3uREiQoQbCuDhfdpTRnSdMP7SM",
  "key25": "625ZssNbdeMUJ3MXNw5dkT1a1ejkuoenThqwKnMpudGRaqmih3hciQRvQSZ8srPhB5Az6zMEYH1cYh84VssvxEjJ",
  "key26": "4sSyXwks5X3MQPVJd1B4ZAiF6WaR6N4YbEz5zz5wXva8igo5gv5Mvq1ztHFYJdn2AXPTsSAKtbjKzGu3Wzv9Rhj6",
  "key27": "67LUmUJ3jHMWbihPG8pRxFEcob9DfJETkjn6aB57imodKhhR3AkAdDA2XDJULZDE6TL2wYdY175sXp2osuzgxch9",
  "key28": "4dCb5dyLSWx4A674jpaivXhz5xCGhbibbuj38dbf3Xt1pZor6BKMb5ZZUjVcEQdvhjY2UaSLTeUmvq6AWVPrFLBJ",
  "key29": "5N1P6yKazRDA3J3Wbz9bUN5YMiYCCdipALRzPundtYNptV6d6EFRNQKqm7zWtHqqofC4J6EWSZC9nZrLiA3Tbd1U",
  "key30": "5RHdAMqkU4tkLGQhEJrAn9qrotp5SLfTYCj9dodLVg7sTW13KHDJuiFCc4NJVf9avjJKEGZtRTpC2KumXkZamqa2",
  "key31": "3KGnvverQ8Hw2i6E91w3qiQ9bhEVp667schXE8rabcQfAPVKY87aJWAKVC4iFddkPbSr2JKkw1Qgu9sQWRS3hemo",
  "key32": "8J94q2uQuzN6PAV9mJrG6WFv2LrYGNf4hk69WrvaUYhiDonTFPgxNX19TvMBes3aQqd8eGb4FfvoYC9r4ihaRgn",
  "key33": "a3s8QkqkAjbmzT21jYyVczUbJvG4wu2WnShNNA1KvkkCn22ywDpTaYoHieYDeXwgJiSoKEQnV75Wb4476NeVuBY",
  "key34": "62ZvYgEDYon52iYhMEp2FHNx3h4tZ9N3FctEehcrcVhwR3bdf75XCjXddmrvW2HEcDJpVJzzWDeQnUXn7DECbzZf",
  "key35": "2dQhZWKsYBMDi4CYXyrKSHcojDJSPRLZ1BDcFkS8vnr35ovT9XR1kW8LxveXkHfxsqQMGrs1tXLNcz8EZS9FJbEy",
  "key36": "5RjEDjb4GNgWMtrfwtgciWRc9eNFXuMpX7e17764fDxo6aWLSvh6dM89YogQhgRCuE1VRAk4iidRfeYhHyMDBEq4",
  "key37": "46Uzrc4rTH2EMqyfAWEYxLjRGnPmpRLiCwqzZh6G6aBvr3ADvrM9m6pC4n2fC9yG5LgFocF2YXEfRmC8pP9BA8JW",
  "key38": "3J3nHnMDfb7F2cZxCgT2z2RUEzb5ypWPaby5PB3xJ4yuK2R4kY4QPAHaAP9s9SZzSc91yCjuKCcZ8qqSLNXL91wT",
  "key39": "3nuqVrYvhwPCnNbSJ1K3Mga5d7SZPxjHdnusu7iS32xmri8G85S8WP2wAETzYzLKiEhGt39HM5ioQbFYRDbkTBNy"
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
