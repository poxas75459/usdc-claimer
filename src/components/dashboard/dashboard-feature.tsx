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
    "3yX4YS3KEdYDkvWghbjCfz5YBAGVcBekRx3vLH3WBRWJnvMMekdH2oWip1R7TmFQqxzU1gKKdqPnyWBVsknHvEUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a1RSwSwu1L9m5hPWkuSs53rpjFDtufrfvmdQrGyQwETrTDmA9NHF3vecTgwn3cRw32NynLEX9fj2iwLKxJYPJT2",
  "key1": "5LffAMoYgZJ3Mg71dLSrDmgL8wQcUD1KqfLX1uU2Dtx42AVzyJ2eGebFVHb3Ho4zhv8fZfQwh62UhBLWS7tWd1Ld",
  "key2": "1uUaYwHxwRaA2UeE6XaKurFkLTDdYXAKUcuEUUwSAawb5bwUUPeCCkvpxv1dppwDXgQkyP2PyxNcXYBjDYSMJFz",
  "key3": "673abq97mzvAS885Nw65ebW2qm2MLGxJPf5H6TJLX1nwh5MqCT3d7u9cpquDbZU9CYupgPHTJYpJpXc54oxP2xMM",
  "key4": "3QfhjzrbPkGyZzodhwBvCjR9RL8f6q9LL2NryGYmjHUCmBQy15X3rAgfzKn2HMfcEhGy4s6fs1koPkSRmUBWFuoe",
  "key5": "4qHHeKuUXcqbsmxAqCowK47BBVJQRVfkfhhbAEkb6T1xBQVTwjixt6YFFRzd4hLKisxMLA4hB8LLkLefEZdf8xrG",
  "key6": "4eppqX95bExWpQfytEGfavgRgdv9P82zyN8jxPDVxpbrUeZ3WsHZc6nCMib1RGMTELR2cxEVmLJCzwmAwUe5JcCN",
  "key7": "499VTSd4aseZWj7d8CtgD7c2aeytTj6AoreDUu2Q4fPhDqeM5VaT9zNTcep792TYeNjcK4FMcDm39wJ9D5ACga5w",
  "key8": "2WqFnqJofSCwqzhN146tPP6EwgpF96FBGhysXxoW3TcVe5ifwqSkewzQbuf7roAcRBTMPiyBx2sXQ3Ho7NDGodf6",
  "key9": "3m3L6gxy22bDVphXWD1Skq45ZQiP85Nmki4hPfz1YXHpTBRGXuzgK6QcQQjfZDVby2eqJk47wfF1LocMSweVW6fW",
  "key10": "f3a2M3qh9vfVrkPbuEqXtRYaRAJk19GasJNzCY6uuTFqbwSeK3KHYBoCPre4PmGyr3pXqx3zJcCCk4jjCRyBzXg",
  "key11": "3FG1Jo3uFMd8d5T6p57o9uFZP8EtZzxLGWaaVGfCeGPczBwAshC1FwWL7sMzSsuXDuY2gVbse9yQ4gkTdjGsCDna",
  "key12": "5AF9EQw4mt44KErvPZbPsMWHxkbNRvSnpWf7pEtfLb4QNBS34X5ozJ2tdHXX472ngmNtbzuL4Z64kEAG5L7Dt4Md",
  "key13": "3QqgzZZA5yEjL664cRC1o7w3czYDuwEcAq5WirHTx6YDt9zCc3eypgQnUa6BGrCHgyAk1zvNnW2ejQuv8TUwjAMY",
  "key14": "SF5ri51vmMXZxpGTJMp2weKmPCoktAWPT7YubQFgt1wdtR5iN2G5yNhaBKHhqs5bbnMFrLvaMTbq4fvEmY6gYnr",
  "key15": "5s8h1ZbtMb15hZkFMbMEZGjQi4MAsXfP7QcpbZDY2rgmCiD6SjfD1iJ6KjrcEDvKoZxiPdL6JpeGxa7X4s7ekteS",
  "key16": "5Lsj2z2aRSfy4P1aqx1FrudzRbbvSWUDb2WbwQVBuNAJSnxi35npMhRETDCKyqvAwBSiB3WKyc3KgZGMKukB1ojq",
  "key17": "4v8FZedhvLRxsMtJz5ffyoAmYWYjM59sS1uQV6WMCYugSiaFMpvXhFikxyFjjikkMMnW5L4f1Utman9zUgrDFWPG",
  "key18": "5gY4PErWv8FMjhFe5g7MM7QfWgnqpP1TjPuwQ47c6preVMrx9VScg9q1rQv7qcUhXvh6rD5zRHx3AmVqZoRpy71F",
  "key19": "58YnzaJ7Uthc6vY4e7FFRuvq3ZTb5FnYcRReoG6X4MimAmrS81io4eZH6vdkQoCgyGyEpaGmfPYxDGdENk2geoBH",
  "key20": "4qRJ7mE6pMLRvRKcEsbYReKxhMySnYqyF89dz5gEkV7ZXW6xCPe8wkmUxRfcMo9pWeVDjvvua3qUEMe4t6VqsEdj",
  "key21": "3eTKtxZVaqYDxxbHtA6KwViuLJpg3Uvnq8Bd6VsYsjhnQda3eCc8exeMB19BKP4yGECSnGv2XTj29oSNPeUfrSMm",
  "key22": "6qaMBkQ2P7zgCAxLJiXknydXqctiUSQkXgqYRzFPe7ypX5DcCRrZXgqYzpSD1mA7q8rMW6oYNuDGNz5J9MYW1wk",
  "key23": "2q7XDFaR3vbu2UYdSB3teWSED62ky8XQM1qWtQgpfRZMRMnLERhUehjcnQJQ3oBnqaV5r8DhmhrEsBU4pHLPKL9L",
  "key24": "525LvaqFvui9m1vwtpv1Jjoy36CEQ9wCHuSrDQoxAPhx6LmAXAaSCCjyB3DQ2sJxt8F1Guupzn6xmMuDozdmsRVz",
  "key25": "5E1U7eEnwed8s5b4BzZyaE9PscSL83t62nByrHyHcZbxkhECutBT86ABWojC8Red9hEJBV8atE4niTEHhV9tpbXJ",
  "key26": "3XiJCP1UUzBBQ3XzyEH8rQfidBaXxspxmyk81ZWayQoBn2dDQRa49s941RFYKccCmKgg5pBphNdM9BnDUSzF8ACX"
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
