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
    "5rWNRnd1sQrvE5V4d1AJuwGszPGEB6JHRr271FZQ7AH9xyD3tciLUEHA92tPsn8ekxq9TBn4snvHkptdf1uWMtdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDFhTUa5GEqfnXRDcSATStgUiQMi1YgbdjBsNmBPi1swdFTH6HEWSsZd1KctsRvidFjkDCvMTdaty6eCW5GoxVv",
  "key1": "65HaSVxV7d5xnXGodmH2Uv4ikd4Lgqo3R8vXJp2MtnyVVfygdk2nvM6dD5XRLrWDJLU9QjE7JDH5ZjLuvyJYqc8j",
  "key2": "4KKk9uqEzcyiu75osCx96Fd7VwxpNyjGUf1JwQrES68mt5NF5CeNLVezwmkfjc12Vrvn1hkkmADpdaJXAgNzo2nW",
  "key3": "5zbtxet5xdQW4GSncYRwhM9V4ffm7QRoMyL4kyLiVAu4nSC71d6YMu7oHPZhk2CbWmtCjcYXtJ5Zzvx4S9EFUtTC",
  "key4": "2jGdBQw8oMeNargf5KbmriKVp4uBfRjzDKH946DtuyA4aGRB27K24ZN9u1sfnTda6cFQR4WvCW5noKJwUPEbXdQz",
  "key5": "cMMAJKfBT7inKE2Vy6SfYPUapKrXArpKJ8Cis4FcdgrFPmuJXLDb43q9px3UsJS89egoB7fn1kdXkiBoHh5X2D7",
  "key6": "3jE3qY8KrPedY2PH3HbrgYFi7iHcj7kd4gKrBieZvzpe1UyxmkVGVAuBb43pVj9NLXztKu1y9YMr1m4T2VCzx6id",
  "key7": "49zKDxCptMuyZsfAHWf8UKnJ7JnJnzLmDwaHv8b6Hq5aUbhqkbWBLY8NETpUh4eSKeWkNPtJCtq3FMhfPeQUiMkN",
  "key8": "4bN9bCZuaxFXppiHa7QuHnMhwQby3VSYCpEjXG9N2qsZbHd3RJQY6cxNhtmPjYfj2HX99CeoE6Tk8NfTLf5gfgXJ",
  "key9": "5sQKfmwVCqeTAdP4TcagegyyHNDeDexA18UE5K2nFEBhd6RXPsvuz92o1AXbpa7YYxKPxKtARiDxrcKL3Q9uduDW",
  "key10": "3YR26qH84WUA2aFFYbwtkQT36JKaighFdu19SSm83A6XdFbZPtv72iE3D3wTBVoPtnJRkosDAYnwGuDsAsswUKKb",
  "key11": "25pLZz2CwuaZaDkgpDBs1RvSpc4k6jS5hrHjyKhdKBxNk9NcofLHGs2X6i5WA7Nr1jwDE5AoAZqjqCLq3nVxA1NV",
  "key12": "4EoaDYQdjNfDdJTE2MGe7yJ8jSV6tC7mUXQDTMnMm8MvRD8Nb9NFsk4yA8e9FxqAQBymdXbgB12DFzqcur1R8qWo",
  "key13": "2296UvsRvb9qXRFKZYG5yh9DuyZ7hs8KiQZ4X2FWPpZBye4gS7scVZqmnWDEUy2QGqSp8AHRdFXMYNAda2B1YAPg",
  "key14": "4tjM4RmU7VLqXZGJVYNhdRJ1wHYboHtDV36hPu57c5CH1BK8paCEgo1WPNWpgytLGuWhj3Q1zEou6MPJn6m7HfPN",
  "key15": "38CkLtJvXEauRykDkxGEc96qthWSzPRsp8osaxWXuVoqmzBx6eqf34MpQUgZVmKFuQi496YeaDJxHUiPfPiUWW3G",
  "key16": "39DL9yEoXEEwQpEueqi5CsVdkdXDJXvossnavXrSzXaARapU8pMGkx4rwVqNEn3fKFZEscYQqzWv3ZWaD3ggzXFF",
  "key17": "4HZXSLLzPDoSdP2t7KGeXLSnYBK34mCJ3iN1np42TBCFPe9KpyFSgdMDwPiLmxE1U4BJUcJyFC6P5echBzWjw71u",
  "key18": "5hPRTmPini2T7cBbzZdkkkHqrzRp6ytSqd3vb5kHpzwLFrHd4C7AMxVUuRLQ9f9LkGZUXWLNKSeKSe1LBQEKx9eQ",
  "key19": "5twMXcHMWMjXRnJS3uo437E5KUaZQeNW98uqNbYZ5GsAMQz6dps6jc5syQF6XQnXhVaYKugJBK9VXUUweKgkLBGe",
  "key20": "nEqfZa9Mh4xq2phU912Nxa1RDajEyCumekEKUBHz73zMtZg2qo2C3zNhD8BMPhmezkFrose1vLwccob4DAPWpx8",
  "key21": "5q2XwF43rwW8y3yrgtQ9YraHwKbc5MAPxBwKq6hNi2iyGH1d7vojeLUiW2UWvPW9JYBzVadtdbfoJSYBPanHz7gV",
  "key22": "4KU8jvu9hou7nrbAzPM6QEMoMiYMigQZhv7BsaZmYzoJCLYqGhqCBPij71gCeJfKMm3fbNH6dTXrnCvjJABcoTWz",
  "key23": "26WNWHg8yKBJWAo7F9opJr1ixsoV7bJF1dborwPPCxuouxJ4LiwVdFc48reRJExWG8Woi2omYce9mzgTb9u1GQzH",
  "key24": "PuPEJLJ6UHogVN5QMWv8XA61swqhNdztUsoVPnEEnz2DP9psu8ZR7o13ZrpAt7jvaFt7Mae7GGGuiDb2WubtcEP",
  "key25": "wbYWeP1wrmfoHrqAxy7yon5QEQbUcpV1ZoHZfjSX2yNXrwU4Qvwy9vBmmyKKkb5x4eQRfWAS56cMwassTgGJbxG",
  "key26": "2DrYH2btaWTHxLS8R9cDNQ6pmaUurkHbojo8V52i34ejPSHSUdsmTFMwnwvRMb6EFkFYkpHVqMuwxns6j5TNYjnT",
  "key27": "2H4Vs3kdf5t4fxE5s2avhKAun6zBYWxUHgyN9Su1UhJgdDYkFG4d8esKdwJQ9j5ThsjWkg4Tpg62mREAJneWRa1F",
  "key28": "2cc33Sc2mpXeK8i66siaZqU6CvNqXKBb5z3xz1N8wMiJBtUNSH4M9Y6HDkdGWYLmvYLLVrYaNnkb82J6Ah51h5jd",
  "key29": "5qSFZgDU4c7Fm3q2iEhK6m7pxiXC9E5hV67FJZUV4fcGiwQqxrWtsDWwvYMgvuW3jjMhxkfeKv6EfYxQ7fVxJiTC",
  "key30": "k9FxKH8QwWxuShaiyiJxgLMM8bN6jybApGzuxDPe7mHtwQfME4hhQCWajohgQSbRqHFGMfWYduJJHVwzaV6QUyc",
  "key31": "53oKyx2DABf157qJjS18Un6CCqHSAkhQXaSjCo1TfemejowDTuEbPGTUBTeDZdpykechWxoMJLw5mwYxaaAUzDmQ",
  "key32": "231uh5BaoFMaNYmdoZVtcGWNpH7gvBZezdShjztaqmym9hMUGSTf9GH84eDnwhSSrgze7CA1KjXtnRuSXxLm9nFe",
  "key33": "5b8EriYNjb182BDUNg12VmKsRfcsnqEVFbvSEwCD7m8t4xFsqtZPexuZa3qri9fYwL9oRSFf8kX4wmqRXV8ayPBG",
  "key34": "5GxzcLeDegZqPXTfMHmugYkwHbxhPTuF2TYWby1cLaGgL6LPEffsgUhWAL5HaUcudqpQ8kez9iar3BnRFG8TgpZD",
  "key35": "3ieBTmRowsPRTJbqn2Y85uLHiqJJi9Ej4gn7pKiAkLQ8TYXKSPJFi1mYRPPQg81wiy8XwjQTtjRbN6JC6aVy2Rsq",
  "key36": "64kDZ9uNqy2nPeyPEGmzoS8jjCgVmniVxyBG53awRSd9urYuiMPKnLQK5KkpQNZ3z61hMeYA5DYEAJyt6DpryDCr"
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
