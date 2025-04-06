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
    "27svZQggKjzW69CEDSzhscE2vQv7GLJJz2xiMD244M4fys4K9dY7b3dcY9Mz85fjovhrXqoPLqfbgGW1pf52Uf5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28jDsWYMGaUeGPpijjSsvm8NxsVEi9WpY2dV7AH7F8Ny14LNEwT4JyEfHUYAhboF2ApfbJ8cvhQ1GjUQPongLyXy",
  "key1": "VcDJHVvKRSUb6N1RiJeExUmeV8syhdV3GMrPtwKKLqHNAjdC39YWZqBrvZGXqKiNirdsrnFUgEDSY8ctjm44vmC",
  "key2": "3VXyH2sFZETUjGtFwKXxMEAyiLGwLaUEUARDUsAyTG9qVA96EXNQpYfCftJKwVoAXoXffhMsFPuckAr4NcnxZ5Ud",
  "key3": "48b6njtgriW932T1iQ9RdZjzbnHxKoA41bSriLxq4CMHXNTH486dKnyMzAKrjUBzF96ckYNi5aRWFGEexcZrCTtE",
  "key4": "5pbfXhZFkPJoBxuCyPhrtEKPCrAaSSA7i7NptWqovrrDMwo5oE6nUV8YWm4a3ds52N6cLMwKsPeMPRf5eAjyYuZZ",
  "key5": "4E2ucQXcCSqyVTc9bUKF2T1dEAXNEH68nggARh8Rg123GkGJ2v5yojUYEeHnmDVRcU4ESyhiVPtc9dcuhx7URzX2",
  "key6": "4fUYG8f3Rtn5RCPALAAfxh39NB5M3RQkwhjW5fx4Ncd3i7UYAM74UuMfjwzwxBmacMMAmJYaR5ZS19hpSDfrAJoy",
  "key7": "4fV1Bf5KtyZG62gh2VbjF6Se6NNNn9vHP3AsgG9Cx2Wz1rxQtp2uhKkxy4KAWJAP6u8LjbDZCW5pc8PrZN9uPrDj",
  "key8": "5HLtAPnutYR2d2UEvWZhFpEy9a1HmBNM4PLnvi6NMhRjZiB5epX2fGCGxBvJTXCRUsqFjgHJ7HZ9JUfSbE2dF5WT",
  "key9": "5orhu9DdLHNVPUNF3TF8fApiL1GoiXNFJpLxb3BUficZAreezegKu3uZq5gKKDP9chwiH6PsjaeARSAAjP8ppp1f",
  "key10": "WWtDhzMWVRsnpA6zMsxia8CNscnQThm9Lm5DGVc35LPV831J8UAVpt1pcB3Eqj3C7kSWyKEUqnh1wsw8U3sUCH1",
  "key11": "3oZmrbAGH6gcD7zmqTSxcUMpuF2iZXUA6odRya5JBCqn1x9Xv19TsXqmLkt8Tn8MSmMNcD8kn9VvnFBqMUSsk6eW",
  "key12": "2rcK3uuiBQnV2jh3qVqWVA4nQDF8KeaHVBJh93kkkwviTcrWj6oifvVnH3cFJ5VWMLpPyvk3azJ8Wdz2mpMD2H5B",
  "key13": "5x9kRQLJAhjW24puQotMTXyCkeoZx12rVPoaodSLWkt2jRnUZTdrHTi17jUEKHGVEknmdLi7H3BWNseUdqyX1wEE",
  "key14": "h4eNP4jLnvHRmTR8EM4n9rXFwFB9sajzsF2pkR1cQb1zHrXuSGm4PW3Spdtr4GoEyCbLxQmCzSwt7MrMkymakT2",
  "key15": "4EKCaLeCpQJrXfDkrFBm1wjbYveevWaJUpENMQtBv87ifM1AwPPgJwAEhfYQLjLexNiEh3G3uC47BYrXwTgMAYzb",
  "key16": "2VUeFTimPYzToiU2Eg54MVtXaoqYDWvw8F9SRKMvL52eppBsfBzf4rucPe52gLVgZ6mHWE7n7MnWaCnakhmkPVJx",
  "key17": "3LCCDAUMt87BEByn93aSviyrCo899i7CPRHr7S5C24teJpndy5uo85pnV5WpHtz2XE2VtTdrypWK1zPMrG5FSuy1",
  "key18": "3reFDTEYjuqzGvhi9T6XH7qefVa1Xsz2Y2MjUZxLPbYg5qCZkhFvU4Shm9WftSQRG1vr5AB3Qpx9EBZKBpY67Hoo",
  "key19": "2gsJQwfNchuDTmi7GoMtAr46tTcNTpmKqe5Vif43Jb7mmk2PPZuWX4gebh5KMesggK1RnmpPbMmtcHH972t9sFUQ",
  "key20": "5ox8UgWmSevbirdtAacv9oTbTw6Xp7sxAq2S5CLiz4xZ6cgH3CU1bgQykVZvXNnb843WuyoZqFBWYpy7pHVH8B7W",
  "key21": "2ryTF37eRx8ywUka8gpMM4hDQ5RqhjkGA1pNV8oeY1wrWWaVLZ7jVZgvdYZLx9CUkDawVZDWWQset22NqdW1U9TN",
  "key22": "4CHw6A5okGUatp9W1EEKwwH2ijnnmasUt9EwfpMSpdc6UuqDBYihwxYThzCMpsDr38mhpnfg3gztNhkNpt6X3Ae1",
  "key23": "2BTc7nnwQxCd82uHMRJnjEzZojsMb7sUBmijreAgAe3mSPLYFWRAAUczKiEBQUg89bDheCAfpMHqZ4YUzBNEGVwY",
  "key24": "2DozWjDpq3ZqHUUtYViExsa81mHwvRhhznstEACiCruy4FDYr38vpUZR7sJVf1qCAb1qi1TAFnMnHxFirXCNNDDE",
  "key25": "2rHABUGrDzTPXaDQnd1yMhUsbrque6FxN7kPsgqfWvWwFKzwgE7NhEddZjZCzVSxuyF6n98zTrfVMkos2yyXKHyq",
  "key26": "4b7hhvWWUUqvPMJG86uGjFfFXBEDQmN71CNdtzL6Wj4eV6U2ouAwnv14BjHHwiayjRxe9NXKwLhxPTsa5sop8SYn",
  "key27": "nkEFZoRqD3DFNtwq5qw5maWiLoy7G3wU3h7UipneXaV8W6t5QDybsmGUV5ak8qn3PEf5auAHKEW8rUDSHjFvyCw",
  "key28": "5xVpMSXJdx7pb6GZJgbdGzpwfwBW9zhkxLGfGzDSdu9HfcUbsqisujXaUXmxPGpJRZaXb6sg6NoTUR5ZymGTyH9a",
  "key29": "41pe11rYfhgN1JR8GP3P4omdntqBLUDnFc1d9Y3Qg3wMFqkbw1vEDPBqoNma19H2CEEwU6Wqvr3yiim4DM5kcGAG",
  "key30": "3e6XUkzcfk2d6wk6SaAx3YHvb4vbpAPf29BowqJj6k4Xq3m1HyyQJLhzXhS4EvXWy9xHBU9q9E35m7nuvUNsnyhJ",
  "key31": "253Ehtw8TxY8KbiAgUM4vEabSaTnCHpJgWbiDWDqWEUM656q7nhg5ZjXzy6uKp3oEUEGLhwtR11zdaEmjYxG11q8",
  "key32": "jZKoL3TaMLky8jMchVCYaHpSz9TpuFAcAZhRsfqHFVa2TY7A1p8ryo9juMdz5miW2tecwQrz8ZGhvGJBPgdF931",
  "key33": "eHRvNzK5V7Hkx664WEDhoSVCa6BWZFtnuepBq5xem4aCM7HrbTTVAAjoM8UWKwTwEV65uCsRFbu9TUu1PhQDw7g",
  "key34": "33KZNJwaDtp6fwkvMiWioXfHbJQZ5ey4weLH3kBLgY9PGQUT1rx1kGqEbpQj8uDnLPkNxBy1BaZrWXqVMoDqBNJv",
  "key35": "5EB2ZW4Zxa69ZpL8uu3XaPj1pbYUUs5ms1Vnxm7yKEK6oKAYg9oHHj8jWcvXKj1dRSVGtxiomxSSz1QS8ktMkQso",
  "key36": "m4jiz1FHRXm6vpHA6LNAMLpYYRy1RRqY14366fsNjxHJLPKBRqTywJ7i1vsDkqDHVH4C1H66HF8Nm2jusV9htzi",
  "key37": "3uZmMxnJTprwbHNH6mrX15Ho6XLFJhvebQnQeQAGiHgv5oENHM52CAss8XqxYccTUysuQH2X9i5p7jPbqoiTc87r",
  "key38": "5xJi5cSxc5BqwFshwuMv46TShmhfjvA15vNtjeBSKswuiA6ho63ZzNFoZrWS2sd5ozwdiJ7VD1XQwfrwdKRbm13D",
  "key39": "3PNjqQpvGEFchUypxB5M9joo45zUUMd1GNV1ML6NcfVwuCLbMQnuhaT6gMJezGWBgeSNL7C91NZ1bKgsdbtkXGnP",
  "key40": "5aoRktXHE9HZDNR3voEVmGN4ZPRckiBsxgbgHKQ2rx8zwr1gCBoSdd8sT6ch4ai1nBThiEipq2CfqkncyH412PfB"
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
