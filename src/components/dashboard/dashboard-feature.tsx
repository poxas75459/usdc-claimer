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
    "Abuhic26Csw4P31f49WKrnTj6QiL1UGX3bbRUxbsskPE9R9upcxF7HGKjSwFxukQRoueGCTe67oxyAiUaqpRbiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ca18jWdFA8ShYDqbFVAV61Gy5sc9RTAMTSqLNwGMWsjUtfiHBtAB7ZmS2RVojFvzkpwQrBmhM2hKAAPsJ8iEgNv",
  "key1": "679wuDLuc8EKb9Az1mtVRPd87X8fNf7H1eTQ2Hr6rSBPqtqJsXp9mHAn7pJ8qYeRrTuySc4Ti9FGChWa58ZBVUmH",
  "key2": "2XwAP14dx7w5CBBsiuCYHY7k2HhjwbWheZSRmajkDz82yJfuWLFB6dG7frWEcRKcdnwWMoFWUsRcE2SgvxTWVjm3",
  "key3": "2HSn91C9JaxFDDCrAtryFoaAmEV1V9bKkRUocofd152hHtTLrFhAk5fqiRgwNRL8BsT33EUWb6bhC2gpFg4sUoY7",
  "key4": "4xsbPuva7LDh6nrASs5aEiBPy9ATgPyqyDSve6RqiZh7tYH1za3auWjwDtoYELyYiXgvFUBmHfiSKxW7PmjY1V1p",
  "key5": "3egAQZk3JpTfajGJVsC34zszK8rDJJqtaQfhkjVq4bFNmvVqswZKN7BqobKv91g3epqouR6WiwxiwM9HD9JGUrZp",
  "key6": "4h8md3bCbQZU5jVGMzQpXZHsasAdDCv8LEiKnbubQB65mkftBi3qLkjfLFX39XnViU3QwCX1BmYAfrzamwAaaTXK",
  "key7": "49hvieMai2k9SvmiWEXMxsdwB6Ub6tJBwqjLZEDZ7FxkXpmmkcbh2476Fb7TgKa31G6GrEmXiJDHjSCaeXXfeg9Y",
  "key8": "27zDsg9sr7Cxo82jRuiG4WodtZCxWVGkmUtbFWexPUCVkjqgyTKw9FtUjah659jXkZUZcZ3bZDApsEwsbScq3iK8",
  "key9": "4TUDEud6WaZKJdGmYARGfy2VjHzKd7Sa7buFeJsp5Ub12PMdVhjzQoxWFU5ze6J5Mvdq8LXQ6hkbNCL2PzeDTifD",
  "key10": "4BRXUDU1pfDhPWyuPFB3vnpxBht4JgXp9285HCsGpTxMgGQH7ppibmVT45afuCFMT3cXWbQMzEw15MKgiPVDv1pN",
  "key11": "47PX4CWZbALw3FwfUfHoQuw8Rk3FSVChr5eTjbPRhakqAsaB6b5Xed6Fx6kpvWp7x8nd98ue3WTcLbmhU6UTCHzD",
  "key12": "5cpb9gYpK2EaYWhPDfD61CUbs88zX9TgCJTnCARRuJgJDuntsFgEFLfGhE98aZH1dracn8QcJBfUNaNMt26xvQ2g",
  "key13": "2z4tGiKVZizm7PLZ6rRz2GBr1cjygPc9VNDsNfKVFryFzDK9wnqnX4TM8Rwvb9DYPaZ6bPEnDc71tTtZdhEUS6rP",
  "key14": "3GKHbLKcLgMVi9v8ToSZ8ygadeXLFBadFBHXvDDa24Rt6yDo3qpCwBoA7AqdxYgSraQzcU9iZMfbR7DhEVUTt9Ef",
  "key15": "2ihsBTm3XWPideg1RfVhTZ21XDiguQb7d1vzkL3qZE3qWmJbuCEXbBsPVC7qrK7SUv6iwBZABb6vkmNb7tJtEfqj",
  "key16": "3yykgM8UrZuickmwCFqTu6Wf6n4s8z93gzSWhmPcZQyT9DWcYiwGey9uaiHddVhiiuHgPY3y9feFAJ2eUdkfrYmD",
  "key17": "3prQTJqY93XKzRpS9nKm4d9rNYCfpmWYT3u17aZirWeQQ5TVZG2EMTqoroFLWPHk7WzEWTn1DKvxRYpjCiW7fqWg",
  "key18": "37r4UQZ59FE1VhT5kRckgVE1jzvPZjm7qsT2LAeMMEMuPsnSmXM9GwR8hYCDG3w9mngh82mJJ6vdwoZ2ZYez7EPK",
  "key19": "smCrxUaPssywYn253qaut55rggRNUNEzhSdaxNbYAxJrWbRgFN3znsaC51FztDp41q1Hx1p3PbThLigc7NJR5bM",
  "key20": "3CrfQC35Xd62xcD7Yi2nAFxNeWe9qvimCK5BizQkUBqShNEDoGVMGwaosVYHCKSmcnChQxksRWnyhbjZKqVtsR4s",
  "key21": "5DiVy7GZKLbTB8ZPueofQfjxiQxfGpcttdnZyMzqmuQH9fZe1f1QE3tALGgWnMM4Jb3EenHiJbRj63ZRumfAWKaJ",
  "key22": "34KsGa9Ek3XQ91m2n8tERHQd82HTpDNARFWHZ82nejCkW3rbUQpRixnWq7Tukia8GyKbwGDDzPZmmPrkK2Sk48cF",
  "key23": "2gBTmw2oLcSrypY4ePEPWaozj9pQYa1fysRqQuK6AAifpywLrswZiMFnSJdT2p25BsiLkGhvLtkq3TPdgsTxiJe4",
  "key24": "pqJi6UMiFFTAYgMbdkNgV7FZpEWc4LCySRBqWWhCP2XBPV2ujcV6QPwAanz1WA1DNCTL2UddUvqoTepR1t6SkHF",
  "key25": "3AuogwhTTGYb14biF4VWynGfpLhohqXY2zwS4zaukTf3ey6JEESNETXeb4bxKb859HGx1G9GMsXGC1hk9bK78qq1",
  "key26": "GKtordPZg6fxLe4y642u7aUSzkapcGtMFja7xwaQ4jmPpKSi9vRCrmUbU5UNDpZHnCtDsqFFqqWvW5dd4TX8yR7",
  "key27": "4tZaHCzgS4UAyUuZvi4L67pnt1UKB15qnHUWEhquzEj1ZFoHgZptW9tLbRoQPbiUbgGRC3ib2zEzf3gw6anPioYV",
  "key28": "3c95TvMfiZefsp3euqU3vHcrVkcNonrcnS3oHnA5XnZhrdqqxS4KHvvTxyGYsXJ7PkwEu3syKcEcR4qfZmFs28uP",
  "key29": "5RLxiUtbcJSF73o99e8pfdcN6pRwD7dTXEcYDLBQjsSsBDBuHpozfcTTLVWjj7VdUKmuGgYyC97gs5oTYXSvWKa",
  "key30": "4M5n1gSReY7XiGcvDHHf8HnsYKvmfqwywN36qKyLiwV82TjgY9G3Y7Lzcugmbk3uB7f8zkkehdbmdFwvNrZe2dGk",
  "key31": "4Yg1t9kg6Kmrch2hxiLAiVbGar3TvhHN1c9NPN4s5Jz73qAUWRqkfYoRor5bzUMwCghLESoGKdzqhW7MFNemDUfv"
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
