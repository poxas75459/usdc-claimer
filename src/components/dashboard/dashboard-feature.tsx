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
    "4KYDvgVto4iNRK9wwhxQAcdFxs78EKi3GArEQE7nbrfRuWVyCQJ6i5U65cQLjnvtyFVgS3H7Qbs9PAFUkbQ95sju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MngkZ4B5bDhekZVoE6zz6Wx4pu3souvBfB35tQXd5bWjtAVLGrVaddQqx1m7Z1j3nDaJ37goiLHgtHVnmwje5Tj",
  "key1": "fAPiKGnq9TL9ojCM2A37aEDeWED2VvxjySUcPNzPaW4gArReB5UzDvoUST3HHinNmSpnmqHoD5nxemvjtuPe1Es",
  "key2": "63hgF5Mn4nPPegiAhun6wyWtV6LvvPGEi462P1NPktjBedUBrV18ePnJm9WWyFdGtrA9ScFQExNVF381Jgf1E74p",
  "key3": "4UvczYDMq9aB8SV6S3jGCuVaZiDe4V5e2MN4gNNBg7C4WBW7vHzTYipaiZLM1oEjsJm4XRNo4LKBPJhYNTGky51T",
  "key4": "2z6tsPDhraycGbMzHKfoDrQW7PpiCmCxQx9yEwLpzA3Q5VMroDuUmxcYgHAzrBqiXe1VfAhhom84SeT8GbeQCSgn",
  "key5": "3rytH9m51b4hzRJU8bqaLmcdxY6JkzRJMEG4toegcnYEFwRTTbqBBXqAX6JCu5zDfUB2nHCbeykeizHUTh6ykLL4",
  "key6": "46eXfrdQ8891mkPtqE6oCCmcyKdVkcTuHvVUEk2g1ibkXbkckPDhvaVH7KX7E3UuoGr2JbqrPmZunr4V8p7peeP",
  "key7": "3EWAoiD4g6HtvUyqD3Y5oFKukqTrsdJK9hd7bTbzq7S52d3Ye2L49yyZGKD2NMKtUBkQdgxShfLyt1CoVrtQ24JL",
  "key8": "2BUGKpNZe53Vp6Pjg8wCeWT7jLd5bYedV4dnwDdk7WoUY2REHt5RhDAXk8ttTDFTuDzEVLJPDKrx5XwaVxhuHMoo",
  "key9": "4whXhkNPtZQncEBu2BCpnkF3N3dBTwFQ2QerW9DY3ujfw9Tj7pSGu94fMXCzKhyyK5cTNYXkvXNbBjDSNeGCkN5o",
  "key10": "4bwS2RHu2QNMZLb683eDJouFx4t2UXTjTrLdX89Ye3daDyg38GFDJUuqzguLnHhYXveqZkFMzKmq3QPXT2m7etxg",
  "key11": "2oBaN48mw9toz2RY3jMtRYHuaqVfTGFF56QfxkRm5tvFF9S4Nd3bms6BcHikjxYUXU2zp6Hh4XAxu3CgBwLLYaM7",
  "key12": "2p9UM8JeAwGz7s64xp6Tnh4WQQMB4XARwZUNjHCtGyDbpLXQLY3YjJaHMZHG57VRVaa1B3w4DHb5ZszLCCnrp9Fo",
  "key13": "3WfReHeEDxM3FEqAJPhqCcRPrBgu7bDenNHRZwUgYXopwEG9nHm3kMUvUAsseVPpwnpuX9AVUWLPFM8Rhyj7V1dP",
  "key14": "5o5AEWm4UmTGoBafCr1HJUm7VB3ovJv8rmMFnnaWLdChNTSsNuNDZNfW2VRjasTvxRcFGQNCwNBuyB4uKcTsNJDD",
  "key15": "dnXhCpwGKhmiyK2L93MeBrfbdVMU9mGHbSsqSoPiKwbNWVEugEN2EkyVh2fwvqTFtNdPsvNanEi2mPhm7meikup",
  "key16": "5pLk2K1nbhhbCydccYdfCsyer5JjvCRvEmZU3s4jhRjVxwd4bZAdKrA3aqnmKGGMNrA2UfgYUqEsnS9rnZfa6dRV",
  "key17": "5NWeg9sVGUdcE5Mz2kjZ2Shja5hb1omSaGnKdwsNpaaigb5u1zaJzPrrzRpVWxmBZ2zEL7vpE5V7s9qtafFbVgSn",
  "key18": "357uxt7Z9q5toxuTPKH4y34pDbMdSAXXBbt7wjw8yxVkVdihX468KJPwszoxuaixqGrwYiZvWYeDufPqzf4TfRrp",
  "key19": "4pmcr7RrvuW8auwFVMgkW8v7gbpZemdd3or8wy2fTbhS96NY39bPx14Ps1N1EiFNHnZbwcQS8FxVtPTHajJe6CFQ",
  "key20": "5iHdqR3AUCTDgwbD4iW8mT8MVqwDNqAngr9H9YTxC1eWajUXZCvQxjQZNkZQ2NvPm9yDkf2Pz1Fad4ec7ovmaaU3",
  "key21": "nLwPHF6tsXabwmpNTAoUjt7zmgZVropLcX4Yyo7jJLtVnctVPekxqT7sx5qYJNSXgJQUUbb7nnfoKzGFiJBQEqh",
  "key22": "5eWy2EVQ3AHJD4yXH2QWwaptmwYc5KR93PBkyGbMcHPiuUhBqZZ2UMfn73qYXahixNj5A23Sd3Ky7n88bUbNAnfq",
  "key23": "2CtFwU9gXRWuDzHRRWEUojPts6JWFdaMrDnnZuBvRaisLpKK3Z2xagYoEofPgvcCE9wX4eKDxmetM1afncYNk1Mz",
  "key24": "4hhHbQyDvV3ZxyrB2vfQWe41pWB6inyogjvbMhRDtim8gaGkpATxSPTnv5nQoKmiufZ8YFNh9ryfkivD8HmtskNT",
  "key25": "BpFL7QGFiYPC7rLvqvk8WkphWFhTAXho3X1iCa8om56udNfkv7ATwbxzYGsizFm97tcKxkncorMwhiniHpZU1bn",
  "key26": "64iUrkPr43SNQQ9Ga5ZPsY4G7d2RjvZ22Wzs6zrJbJZGP5vQZSFVh7Cka1C7121VbFhYqnCqdpmavaoQVdFsBuAi",
  "key27": "2qhvL58RCDYfzV9JPF8hFaLGzDZxY3puHjQGmheh6h1HxXJcMSb98W48hcpxBKYr4XbkspC5MAzqSo1u6qCBLKwE",
  "key28": "5SEj6MUioYETikTS94aLeqCeN5FpAJJobjFGXSn8fLoA5SgG3sGC7jNvaXVovdDkFGsxvxZEsdavq5zJyxjvvUwV",
  "key29": "5vYCsUzQY1fsWzRzZYcqxqmcBshZsJNZJ3U5aFVqrns69wkTdSkK6msBbckNpRLTW6PvHYGNhB7h59fEetx7Lv5G",
  "key30": "2v6aY2DysG7hg21xpsJtbLyPM1vv1h4RHX9TQ7qwSxU4oHLnSa6xnDgj8dMFz7RV1RBU9Czcqnqd3gL7GjRKZJUi",
  "key31": "Mabb9FjBY9ZgoCwMyTwtuZSqgDg7MMiiYHYBVZbxuJPnZckEbvzYQmLZb1yAQFrYwYYiAfnsENvgsfcM9jwM1rb",
  "key32": "3NhpSmNNXmxPyanuCdEDBhVtj5Yq7xKhd2mC6Lk5wJtikAAnV1ri2Snvzw5jNuZ4X5r4uDA7BedCeFyN94VHb5ad",
  "key33": "2AgRHgzTpJqEGfwPXhLe1mXgj4D2LTQ76qj7HUQ98H2exkADYMbg5torXEQ2SW2RsBWnZah7xr4e4EQBZF5j5ya3",
  "key34": "47FN6doqiZWMP9L4v27vDPoZ5c8fcrooaaxbgstzYebx8ECeikuwCyJqX386ZJookvnLewLszGiKQiDtG2fhRmAk",
  "key35": "3FxrQzFBueSxqtTEaJVP8NABocBXKpgyQreZ2TdfX3uQRnGYcgMxaK8budJBnooiUVvZTJ55v3JeLrEePrkuiVqB",
  "key36": "2yDKJy1pbr8HDbLMHbCSz2ffG3EhNoNyyfPvzKXf6rnynxXRyRofYP27hxFqizzipMtLGCiaBGZX9bJmx5f7z3Nc",
  "key37": "49mzuWTCRVXRAciDcUgEy3JvCsEQDVx9FAEVC8L592Mf5yKp7KFRG8C95oRjbFd5RpY8zz9f3PrA1xpaCGrSmJFD",
  "key38": "66gBTij4DfnMdYXrLNaMoWhHFxUyWmU4BJ291aEJsfChHkBcfWodVyYGdxkP7rbANPf7tUbWdcqbkhjCjt1p7TEx",
  "key39": "2yhfQTXQTptDoB1kmGnhtQESkHAueCJTGPUA8z4NLcAjU8FBRYSBNm2cNevDkoG3Ekp42PmEYkLkfABaNS4p6LLZ",
  "key40": "4LAmi3TuoM9PnufRePTkyYzfxV7WjvstZVoTAN4nWGEdzN9xEY3z64uuwBwubaPTUFUEAgZ47rrkDxh1EBFy9vW3"
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
