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
    "4V259UedMK4ZajakLfetacpqmT3b6PenaEC45tFeSpxL9cNVDWiE28nNARnc4svFJt8oSSwxDs2J8dimqCpmPePX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWT9kaJse5CLWmx8LaaBexZhDqKxvkDEQ8CXnuypUPKzUJgUqxEGgqscCzmiAJJeWccQeLfCeHpbxbbmQLmy5dd",
  "key1": "3SPvorWfXbXSQq2bUAhhzse7mppVMtgvvYkMLQTqs1z173LmBf3BfwFGh6sinqTPh5EBJ9HaewR9Ffd7uXTiX3LB",
  "key2": "3dYmVVvxBw3XWFQYVRwWPnb6d2rQdNQkzcRnqFygP1kixisfMC4uqyyQwroT4zgFww8M2D4qmw3BHnePfakg2FGw",
  "key3": "5crUxX3yJgC2q7xbfWkfBKGuiH8Y4dSTxY38Pfo2MNc7DaQifVFVisedrCHTqhWApjKJHbidboBRoyg1qdXXWh67",
  "key4": "2kgCg8JyYUe35fyTnAJWtukCbhx7oXMdoBiNqtELGRxRMBfBcJtSjEzypLCDvWbDGGcesaQFSzsoescX1Dd6B7La",
  "key5": "5CdMMmLhmTkqBjr441Sr7usBYzcJ74TttnTvWQQjivqtyYXKuRwANL4XJhdsm4Qf3yV2ZPGNbotDbXeV2aWufoYi",
  "key6": "4c4j4dTfr6UTrc7Y6DvAzf1MZ2s6B9p1s2EmrtZpFvpZ39WMMCT3X5wRRYfocxwiiVqQngZuAnUqWys45RjwThi6",
  "key7": "5vEzJfHFCHoDVLt3zUiKXJjtEZKXfRbsAaZvbVa6hNJqmdvTxt1nCKX3Srp3z2KtRAp7mrjibREdb59uY2nP2VPz",
  "key8": "3cSctwrnATiLMU5txgrfDrtZDYDNWsWM7kFY9QPdh7piYtn5A1oZRDQXJcxWasJHPhs3fyauTyBHEuYRyPMJ8545",
  "key9": "2d52NkbHGwHDReZzB8azcrfAhJdHCmHmzs3UxCeYpzF4xPef3tmb9yo3JL3RsLTAqWDJG4ymuw5F4xzRnA6Knj3s",
  "key10": "3vwW2r1jQ71weUCprwJPSBmLw1Jq7cD73cXZkJcZadQys6bA5AHq3WeJctKsC3VYbPM4uMWBxUAySDACgtQhsa4u",
  "key11": "55zBx2TDXsjFEdhDddNDWA73J4ztPfjgcWB6hJRCdXZ6fbvKRRz8ozkKspYAnpVLY2dVTv5GRyncRh7GH4i7c64S",
  "key12": "emzuwrNipfowRLrVz1dcAUEpt4TeT3BC1bkCML2QkxVBb6QvAiy36eEe3txipPXxuW3UwwgZZsWdb2YfsWijX2z",
  "key13": "5AZCkTWzLg5ryTJdi1og73nZQQ7nwkgP1EjhLm12bwC5748ZYXP18xmmg7EeQnMrwcu4pErfsnwjtxuDoLNDFoVC",
  "key14": "4AMwWhNbU9zRBQWs4Z3cYeNbCAETvzXADth13CHQzZxoVtvKT5cUsvbitZ9ssnkW5jLmE39Xp6LTwy2BozQBown8",
  "key15": "zjSpGaj8HdEAk2wL6BFtsyPMapLBRBLBBTwxkvCs1MYiDEHZTqG8BHZUWd2Jvo3AYd2nz3skC8T6daczZLWLLZ9",
  "key16": "3Kbzi17w8ig9AYAynAJR6S3NzQRhbNLL1LiEvZH5mMxh5WtsJUyrSxTRmxx7RijUQLrSKMxdycmLMP83qfZQr3UA",
  "key17": "LZTLH9iLa9RijeYayLDeB9rycu9a2HKnzMtJSUYCYzwNPV14qj6UQSgFK5yuwdZBodjvzA6eqeZxQTGqY46TVpL",
  "key18": "4yu4djoZstZuE8PL5NLZe5HCTn4patYHGi3YPWvSKEedW1oXZxd5qEZK9WcvAnjbn82gzM9LkfAv28UJeFdbGs2r",
  "key19": "3kKwqgLKZioZGR1f2qb1bUTkLRXs3fYxgy6QdeatPwGJY4tKM24Qo15svy2Rpfd5VHtU19vR79KmTBqbkxZ7a5G",
  "key20": "5WmZ4cDFr3qRX54GCFmddJfxJC1ngPrtcEcQ7UaX1Z57TM9kLjERoaeMsWdcbPHGTnMYc4uBM1BBFcjx2fWERLqQ",
  "key21": "5LqWme1VYy6FcjKuhP2UKDEhs8kmujYBaDgYmi5Agtz7pmTg5S68hw2WMZhsTtfHesd23jPzesaTHASMiDADwZmb",
  "key22": "3mEyuNDM7QVYacGtnoF8iQcwonyLTUwmFVsT9ViabtXqJ3cec5konvFbukaMvifViPX37Fh5rKkeqfM611YZMyEA",
  "key23": "3tCQNf1xxL3dZXoTLhtVdQPx4f5HJWoB54jfno5gWnY4niF2eV7k5TMNpn8Yj9zJBw14sNQmUNEdtJdiKmTD4UT8",
  "key24": "QXxkzvnKYhYeKNqw6nKFZa85QT59yvtb2mScrNv2S4A7qYbxyJ7ujpKxxjJPvsT1tpxWFHKqU18kSUKXauk5Vfk",
  "key25": "MvPLw8cp9qZg2oo5BKimvbq58pATqVmr8JXUtV2MtNrEuUSHwWTrWx2UGD5ntjFor5CzcJU8uFRHdfEXkbEYa7i",
  "key26": "58UAiPc8Zg9mQyQssWGo7p2jJe5s6u7RRm1WE47DYhXYWDsUKxCTtJU1FjEAkDiLVeG35hJd936pSJo7gk4V6z1f",
  "key27": "4e9UNaJzn4hbLaYoA9JoVuRiH56ANVocVnTbjytjLHjVhrrsQco8nYsWt2fyhsLFe2ar9uQg6W6ckFukjBNi4gKj",
  "key28": "61JgwrrBduEVEKXAynNBh1xqwxhHVtP7QZg9vydBrKmKbakJaPJYPvLf73whfF2pWZyP1xUQtiDhz1pTFhzbeoaf",
  "key29": "VMF3RbPN6xU9AnmWuhqaqDRv89Y9QuVTnBQZsqqxUpeZ322D8fsuBqRACvKPAnrJLNT8RBYnBpBnRCssVty1KyP",
  "key30": "z6qFsrcv4PMmx42eBaXdS5pUPuAVhVGi4oXRj4ahP3qRyNKq1QPaEDRT17fWMp7EBx9i7Fj9U8pqHMb6Kmjn326",
  "key31": "3Gzs8J168CP5MgEnJ2M1sJZD4pUHjCzpgGxY3McSthcekWDVbzhT7boNMJzSJzwy1vDoJWd9swERXpRBKw5yy1ro",
  "key32": "4kPRaXzswTo3ekFu8ptGCymTL68y7koMzKCBFamgsCQss1Y4xEj1MZF2kRAxPZqgRYL4ZLAeDaM1r5zTdWPHdvtU",
  "key33": "5XdjhXCbDHRNeGnhrcbofZvYWLTH4oiQidpmK2ekLWZxCXKkV4Z22fw4GSp7qdG2q7q1t234RkA4B9RGKBB78p9h",
  "key34": "2comzfaDExNCCy4LtSF6nkf9gLrc1xTb23yWXiqGMcDm7BBT4jrf9xQWuBPpiFYxB9TUcwsjHsyz9wfCgCVd5iv6",
  "key35": "2q8mRVnshAyrn5PhuCtzZMpYm9m6okEtTVahnYQtYjqdTJggMPhuovGFaBZ84qd9jteUawpuUAA1Vvfd7LrHcKHU",
  "key36": "pDEktbCAj1JJWUTiPDW5LGZCKeL6QGR5Ui1tpBFCVfiMBX2CYD4cMro4RypeFwz6eay7qNuU8wFJjV3aNzWT366",
  "key37": "2wySAKnJ88UAcKy2WqA3i4hCbs2Ks43QVKXzoWxiyzsVkpp3RvSST7Y35PsDghTd3HyTyMpu4sHmKHuEMgQJmsq",
  "key38": "32vD928zupY3xApkS2NcM3K3W9peWCspRSsQasR9CbWLNQX81A1NNhUW2395EHveSBnwBPmiu4xzyKeW6rAyhP7t",
  "key39": "2XesGWMCS3B6F4CK9ztQ9H8bEaUgdQdbaifMrViweWMHoJagiWXLF9LaMXkxYAd5ynboHajEahh7s11PehqGxgeZ",
  "key40": "4Aua9KRAAEJv64vrYgXjDQYSrvdxJCnGzSr4HP5F4M5ff1UgHALpKab9LLWffNTp7z2EPVzajQseeC2fsQbUvsBz",
  "key41": "5yyxcRky2pDth9d7BiT8PTpAtFt8yuGrUjqCPQZgK3ceqQAgwqXhAemwidgiGjdoNrBSafAoapKLNCFtCD9h9oo"
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
