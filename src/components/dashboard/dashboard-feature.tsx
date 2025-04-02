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
    "547KGeX8HASaGtrwe4LNpMHBxsuHexQAXuMtc11usNXQnsRf8pXr8HfCJ2RubdDBCEkvuTcm2FRYYsQjeW4Jdtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmqPsBK899fsZL4jSJZPZ8JMABRrmKabcKVFa8u6VZRzHQHDkSWKCjWszmdFbq5bpiKCEHSWKeTN2rVi7TrzyRb",
  "key1": "41aSaW49LqbiSaupRM5ztECJBeE7UebCy7oC9HVm53mMHxh7uh1Tu1gEeAqCY1JbYeKpfKphxeR3VH62kr6wUDt9",
  "key2": "2xoB8ZEjjhT1foSih2w2uhKy6xzUnoeW7WevJ1WBsxsrYnSZ4sTJ62iJAjxxWwhB6P7P7YTu2bfo2a4B4Dba8KQ",
  "key3": "3xsredNcYRWtP4Dd5h9SdBPd6wPmJpLcuggCoDZfaWe87etrL9dwFcGDiyaYvw51Mj7oKFt2fDj1vqCvyGrwqLNp",
  "key4": "29JQDANuUvXXy6NzMXj5q5GWtrvvbDje6FKRiAEmyQWggXQ6hVQcuLaLXbfEgfKvgrqZgsn5nxiNNx9H8ReEywc3",
  "key5": "66wUFQBqqbyLtZwecW1evJqakPKkX8H2hHsth7hn8WsMufSDp93udgFxZ3R1r3jsDYS4BMPxJDJ99pgcVjo3AAQ3",
  "key6": "UTQJoSJTbb3dVxmhA1JurByWNvEmQLz8R8GxkBt1iT3LZL9mBLk3o3d6M2YQDTjEjQagFzU3riXwqQqk3Din2to",
  "key7": "5oBARoHn4Zksxz4YaqCMMY5yFTskKNwfP92do7YcQoCqwQBj3bjBPMsa6dqvqRJsXRKEKJhdMtpGFjYPJ6XiVshM",
  "key8": "2uHqDfSeYprPnDo722w7oTg9EZCWDXBvENb1NQxkqkSciPKdeWHihMoF3VfWErbzbaBynYKcuSU8bdtdtoQoK9Y1",
  "key9": "5sPmDxx3y11AHfG4wye5MNpLVCdqSFwJRmUN2mDWmqWHJDdVYDTgdkQWidFpAZGBWrxvqQiY8YXnHEaV6FToT96E",
  "key10": "2dsggg2ETactdRZ43kbdRPMbXwCFnyMnvBgDtNRFGupPaTv5g2ubQiqDWzczxwrJtxMU5mDX7LtdNMWtxZj2ai6s",
  "key11": "4zNm7G5PyRc3AtLFf9fDifGUbvsniQn6C1NUjCk1biHw2TZNfEuZZRwKMgJk89wfNxumw2umiU3k73JqvzaB6r62",
  "key12": "5EtTwWCEGWRci3odEfViRmJYVpvGsrhEyNR21qR7Vjnx9Jr5teCGdr9tXquFRANcxusFaHPGWhSbpueVpR8Er1e7",
  "key13": "3Qv2UVVNf5CQeL7WFv6SBEh86iQt6DCj8mHkERkB6qZ2QCjrFVhQR8QbeF67RQb36gQbyfZDrHrBd2DQWaSmuts3",
  "key14": "5Tb4m17ootnKFf2p7GsRfGRUTZMch6KbMC78Za6jcomDdmCq221fqbEGiG49s21cJLUi4TGqk1GCZgFftYJCt749",
  "key15": "4RTYAiVfWVmeUkTSF3Kogj7Am2DtzX2y2rX31pSmvFMrWk29uoL745BFzqg33pj1asozfRj91W4RoXUacD2iKeCe",
  "key16": "VPh1aWd9CS24ipGhoUiB6KrX7srmA9KinYvh53V6cnBcxHv38pce5JB3ofXtaXro9LtdbKUxSuK4iY3DMFK1zSN",
  "key17": "48JRecUmNF8eqeAQ1dnVPYw6acwYLJz7hSX1Xd36cSaqvhXK7cByZYAPYo41wqaJv7nZP68oMz2xNEw51Wn88yNh",
  "key18": "3EvNfWp8e9JSN5ijwyuAPUAjEbB6hKhEpckWLm5nYGG8VMUQrVVjE5xaDg7c7eTadehULe97K2mAoJMyovGwRDKt",
  "key19": "5zVfJZX2BQkkVq9WJstmt5mfTzAXVreGC5uqr61KZFYmB75brbJvTM5RFnLvNKHNn6NmZH6uPm4ViN8RPRtkqcUm",
  "key20": "26RmS1fHwWxnvAGjaQToLAFHk1fPe5KS65JyTsSXZJa9NAnR4fDEy4c8vJM6dgJRQm9kshk31v6PkHKFeTmwputK",
  "key21": "rAkw35mWVEUaYPpRSxByF9nBVCDMc5RPUWSrHjjnpz2JDNDmTVAKH4RekNWAZz5C6BJUGRpD48YhP9bS5BtTmjz",
  "key22": "4PhZuMCKtyshLPMu7MZ7hi7ZUufKfgLjV5sr5uXJHLWJaHKAQWkaNg1m4KdS68eYQLnhNvuSZrfLskyTcVop3GRD",
  "key23": "dJkkMYKeDPZYGct1j5mHKKPgUSsG64hmQY88fgoJCa69sQMmmNo3WntCk9bfNL7jJfiQfkiiT7B23Rb3LFu4RKw",
  "key24": "3Tjfm8DqHkaYsnx1S6Dk2otcxapM5RM9VyBKdNR3zNNx8RC5kV1UtVZCf7ee5xwKSSD2a7orEDLtVu3CkdSnn3fN",
  "key25": "Uu6MiauHhLhgkCyxM9sq9ZNs7CT6WWzouJ5maqSS5zrZNYfbuzbtPqBkrGbm2NVhzW1CiarRpSQkFPEB1xkQM2K",
  "key26": "djBb5kEWwE2EP6US8tYP75c26MFfU3YHXFpq2vbkFzg5gFQg19PH1Y5LjvUooH8Y6oEUzf34mXRwHZJMch4CoXw",
  "key27": "5Pidryy1WEFPx79HSEJAQpn5evn5RCh7VLXvkdieXjy21iPhJFPdb3Jpphvgp1zatp5p9xccCieuMTB4KH6aH7pV",
  "key28": "2eBRTiX8yKBsVXEin8QL5xWfPxHg1Bu22qTQcKmv5grNXoTjVA8i4aTN2MgkCFJ3uXCX1dyUfTgXx2LQ1YCPE4k"
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
