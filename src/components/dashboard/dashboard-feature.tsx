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
    "64Fo6ZJYogTVg6y2EptKNMnwAC86zEbeUhQutHrZkb3A2hvL6v6W1JbHMZupZbwVX1SiAUu3FeaERAvvXFBKyyRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSi4TSMVDYhYTZeW4ktYASQEA9xVJwu9y2oW5W394FqAZFhnL2ZWXvUZYdLqtcb9SBagNbYQXK2Bn6m1SB1cqDK",
  "key1": "4nWjMKH1tx7YWv2BettBLgRY9enccrjSsBKGBtvJ7TREzYjpDMAepgr2t8E2CyXN6HKbfhNfU5cjxd9qU4QhQgBt",
  "key2": "2gyB9GPDN8RQRma8n9vhy9pybNm9UNboLqK7DGn78L9Jt6dHXQ2QjpFGzzoMRTu96jNwNQM92MF5ex6tDsxJ7j1M",
  "key3": "4DfVcLayHSHGKxZCAU9h2yhMxj2AQqjXoaR7suEMD4t4oVTSmWsLLKErFc6MZbQvzbuFkmr6B6o751VdRAYCQDZZ",
  "key4": "3N16smNsiL5pFDQqbSGBE6UskELsnhiUCJJ1q5xzs6hkjWLScmRmvnmgovpsF8rixivnxL6Y3m64j47XLh4kMaAX",
  "key5": "3777aakg97Z7njidFYH9nq7VC21tiXta44mrfXkrW6fwQsuh4LVkT8PSnqdHqAmE1utAy1dVMfKmQVQbc8dhXdCk",
  "key6": "3Yd4XkURkXTiKsauStwuuz1Lpa785WvWrV7cauG3CTsyHbsnxfnksBmgy6U6AjAAWxSLWUKdAr4qZfMkvXVi47eR",
  "key7": "So7Ra9PgkvmGW5JPyKRisZ9Lgd25xymHXqMmhCYpt7SW5j9vEiXPjzYPQzteP8k7Dh8n2JYpJfQsp5hruGZQpYL",
  "key8": "5PqP68uUPwvFNnZ3YWRWWDDPsPXiriDHTuvQK2QqfiKYnCX88Xu7nJfRQsSJTj9P2cGfQsYn8dH5Vvx2xi9oyoxh",
  "key9": "2yprCJDpHxMMvDqbeRAWwFD6DPtZbX4cws4Zonnkdew2BZzhoYjKnQfw7JSvHNJeHJtKkFPm71hoV2xLTvSCv2em",
  "key10": "4ErQ4jAwLaJZGKWbxEypzeXNVKoKoHhuyTZDUMVTsxabfKnGqbAF8VUccJe9oTi43f7s3pdKRLwoAoL6YhW4Q7VR",
  "key11": "3fCkymoDAA3jfX2TdwkTjjPwXotWsZEm3TPL3b9KcaM5Y1moi43nhkJytX64gZcSXZFtVS6e3bLv8w1L6ooy3H6m",
  "key12": "46f9aVQTqvakFmHXKugya81xxyzXkSZ4ZQdYRdAC2q9Chrg4iyDoeadestBUHytbSVG7coipKdLa6Mcx1MNUr6y1",
  "key13": "ELymBRwqdMjaznWCUQ1XQ9QkUYgeSaGUQCEce2fVZx93V45sh43YZqPZjgnmipMJoZqP1JzqXvuMwhGuJdqqn8R",
  "key14": "3nhUpN4kkfqSuZ2VbfSy4RVg3iEAULPeMP61XQq9R9gc3wTLXZnKqLS3RbaC8YF5cDhZDjExJtHZM31ofvDSyXeC",
  "key15": "32vswuoy8jhzcs4VqEkGwM3oM4rEkvM413SSjVbtqXnZKKZbvnypQrALXXZ9ZRGwWPmwDn6e7Q3LbqQj5EVuvqW9",
  "key16": "4a73Zxy12X1X6ah9bDQZf3rVgFyg3xL8eRE9dJZQmbb1HGvFWgbJGR6KPYd4fuv2HLkW1WRCf28RFb88yojXXriU",
  "key17": "2hgCE9ZMDe8iN66L611Aqb7ev4kDhGe14ZrJoN3TXSfSysfiZfMoxqZutdFi94W9tSUkbBwAU7i4cNGoQfz1tQmV",
  "key18": "2oyvFwjBTNvkrSBdv4jbBWfsZkNfgsfgtK6ww9D43nV1LgHmxHEfqx4saXNAtAgK5655tvzzyTkL1fA3EPPpeTTC",
  "key19": "5fvP75uWBGdF4mz3wMrHLzYeSyoJerode9y6woSTLX3tBTDFxSSNmyKuAk1HTSxtm5FvG5Bf7NArMpS9DuLb4END",
  "key20": "5nTaoQ9sRoXzzNAcvd75cSx1RGqHNFzqvRjPNek5xENwDv5mp4iNbPMG3TgSgWhciZdhmHrHyqdq5rroNf9LXPLx",
  "key21": "32SmUeCs6NCXqjKwgovfuca38pqYHvTyTHKmRUcGtkYpJeVa5YZzmky5RF5zFT88ggJ5FaCa3QmLiZkqx8TtXEmb",
  "key22": "3Nv3hpTvYuKen3MbCBnrPygYnoZDqFJ23VLcc7CHcm3Y5sgfmtekjUs718qwmHEVgykxYf86r6Rp3C3U1oZLjmCN",
  "key23": "5JmfbFCDhqmpoYeHREg9FoUnBsgXwsWFn6eXrAjvwpTdPL33swWLMMr2bKPuqF9zJvsMchpkW3kAEMUEaWzbKuLn",
  "key24": "R8BVQPv2DQhNhCS8qzQZiYEk46D6Hfh2jmZrX595pikmWwCwo8mTQ4qPLA7fw4pEicVdNxbUGkwezApKVNgpDAU",
  "key25": "59Ptzk5yDmAkDdReMxgkMotzJ3kfJBMJLJSXmS9PsqsUff8f5NncNTkCc8kWtU8sHouozAh8E4qwwvSaz5p8cwzT",
  "key26": "4YijJe9wULk2M9mGV9io82AnYdcxf86A721B5uWXnat28BZ2DzQPsNoPdhkYMs8KRLsvDQ9oHgywcS2XxfkxgJv4",
  "key27": "26MioAyHRLiN2cmwuDdgPBTnbZccBQAkBSfMnXmEyzEFXV3ftMd5DSRaWAyzXu2p5j6UUVwbMomCNsZVXrCCsCxN",
  "key28": "3LjvsFT44z2xLpP4unADCKN7MXTWhaJri8pEbeSf1GgFJmcQKFMhWyMa6XBQ2hzKvh8Uxkt7UhaTX5iGGnazf1C9",
  "key29": "5S1k3RXDqo6bHCUFaGeYiJEwRJ6v1kt8c1w7AomCiLhTioTmZXNjfJakEKddHJZurf13j4v6hAtkq2uYW4J14iZi",
  "key30": "3NwGRj1yci2cxZdSUzFzXCRUQ5A4ThSMxfej6QMvDgC8VgoncQhPzpg6uMp1pFVvyZHMHEpCZG7qjqQVQSYonMW7",
  "key31": "hL6rApA2oMc5AFaHzxiLQs1akGaNZp4MpB8Yu2udAhkTVXzRahtG5y5Gfo6n2LNJyq4PnQQXrreeFAcmyHUKDLV",
  "key32": "5izM2595E6Ggw6zivT36pmURQs8FiQQPDmPB82j3SPY3DtysUL6BT5EPuzHCprcwgkTRYTvrmrqpgHsCQYWpjKt3",
  "key33": "5ekWJPAyRB4BPr7V9t5LZCMqLixmpQfMJSKcmfPrfPHYkwMcBM4jvBbHK3JNxsJGSBxamtx9ZSG3NbjaxiwSguF9"
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
