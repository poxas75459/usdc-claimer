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
    "3b6bMHme6emvmqpYA4yrFB3XXFAejjTh3e8nuaYDHMkV3vqY2ejG6XjvWXaQTKa5kyCPhjGPGbfF8CY6CbXqSf3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvYbr8985QqiheBKRq38keXDviwbHebfiHCJhUC9vfnXtZS14m5rzG5TiJ2V5F66hNv6WFRDBUw2NiNoRzcgUbF",
  "key1": "4THKBqMHtnzDaV3Akyy9WUGv8pSbNR2tfC6hvoCar8dqVmnqcgcDQe44WY2pYsdREiCxG59m6YY7sEs72xRFJVb8",
  "key2": "3E1Mu5Y3JdhNXypWMG3nBkmbFpHzpLS5N3agTSp6Q9LARswMxKrE4myNMVhGjwznEH3ZyqURUstSTVFFacfdhWEK",
  "key3": "5g9AvaKn3k2n5n38ZYUmxqS92euvxjDZs1agxErAa44VVa5yGvBpVxT28dA3UsZs4m34aAnjDkhq3CkSBbxSoB28",
  "key4": "2JX6VkWuSpdsRL1XS1Sh7guryvgePCEneR73KXj2kD4yo4B4hPFtVJfQTMckzjTFLHD2qAZzDQAgTw9t49naAdgn",
  "key5": "tKZsMfVHmXzpAb9cbg7AnEWxJJ53Fykm6RSSjJiJHXpox9eYbFUeH4BqdBqxzwDDAuNcQtxp215cHmUS6kR3pZf",
  "key6": "4dyT57tqhsQAxYtouGScWqqwtLm2j8dBeZzsQ5f78eUb9JBqVQDUv4z4E68u8EXzxvEfPZvJRcH5CUerT2UCyttm",
  "key7": "3GaWr9TDnUPtUuKf1JARHHSKtvRXkcDTR7TZy8HoPTEq2Wh5WcjcZtrkqakKwfDxsfMiEnKNKoeB8nn4DN9nEdyR",
  "key8": "5PxcfsWp43rmvP2eoWpDs8LUfVVdncjssiSgwp4UYY6mEt1XCrxchkkK4HyYPLTVBkqj8e7DQgVBkLPdfJCb4PL",
  "key9": "63SzmjZtDpdrzmyjXCwikbVr2gpE5G3TTfYmo6hi1XzFDCZvPQCAdxPLvHPJyVouZPL5J6rRYgZZ5H9B2mXBBr7M",
  "key10": "3mwoDHcVq7h2938WsU3kaPWcw8VcTmv2GseLo6VJ8Zwj3XLGkYBmXmUd38xWqcY7jznXAWvqG1xjmhpeXMvaemr3",
  "key11": "5zA2HwM97j9tkHgP3QSgvGnrVbDbc2gMhisNoybTQAw4WU8fizMfZpd8wGeDa9QnXV8rgGNHnXQNwHwkzNd4BYPS",
  "key12": "4RP8Un7dSZUBUD4UGnurZAj1wA1ZA13hajDqRRwntzFtF6ysRKj1bjvGKKQ4rsY6GfYz6gUqjbx6RvXhZFQRn8Dz",
  "key13": "5v6Gk4PeUM6nJdTCZZy84MoFTP6SZj5w9hq9CsoKTq4GHfhXMJzszAzwfkLAKwvDPQpSVptSk4w6dF5A1xRPT2f9",
  "key14": "23NfWjBi7G9cyK3TxEJUz37yuYpdMwdN4DimjZWJLgKutZfac8oqK4o9MyyALN9xgkVp22BLCbgVWE9aVinZFqvm",
  "key15": "64s5aSBoWDjJ5cZ8t5jDrFYopCqJYd73LgsXQFqJBZ3uuzxy6Ks91Ke3FRpJWWDm1hu5pNDhA8ggcF5vtfaX4rEt",
  "key16": "4ZeVC9NmZzRQd7QQv8N3xRq7pz5KEpqxaiuzRpWCuirsHgMbQF18JT67E3StTuFR57E431NvCGA9xVnSmPGQMCVT",
  "key17": "4pZWARCGDuRjumVRwKu9roWYejX1jwd6prGiAQyuPFYsSFkwG4hzW3RXEiHQT7RqRzQ77csDarqBDubTKoKvJshf",
  "key18": "5rMcprd1K49dXBZXEZgb8cXAtjprSEH9PFsuV3tiJxCs6ct4Svnh62ui7TxVieKjjAYwdUX8CXx2hoR82Pfh2T1K",
  "key19": "4kgxim6EL9KFFhzFE3xTaCjtbQBJW16Z5RSEoWiDNrF6iGSKSTA42CkrGr9bPsxXc5ZGArpkk99FLFny8KxYGDJ6",
  "key20": "3LF6s6U5Nf4xGNUHGqLd5eyB9T8MkqhqFdZq2oWQBDafhxx6AmWvrrcvBXdxYguYWkqQ1sjmtWHgw4MfdCpLYPAc",
  "key21": "2YU57YHivEMvyY61nuszFYWiMdrwPhcEhXswnbKRRx3uxHSEPsRtAJ1s9x5YEoeFzqaWET1fHMEsxYnV1yGBLUZo",
  "key22": "25KUb3cSMTp1ZcgWiH8LQiaw8DWGcLj255RpwQXbrVTXGgUz8Njyj8f1ExAxya267YJ17oWRcjDUzpfUHT5covAh",
  "key23": "2zRN1SiLteqvpyBTKyUsMmyjPKtDw63khTf8hbPp8Qh3m2jbXDDQLDHyqEtXGnbu7Wd29nFxRQyXfmPjb9ixK127",
  "key24": "4RF4qVcodKW3Nfe527TqXvqTgaAYWL6xhJ5KAWr2dNmUxdYSHTJXaveqaRLexT1mowhQLcKiFT3pwebWaSsduUQ9",
  "key25": "5T1Mz6q6entv4dSowPV3ew4ynEse6JmmqawNwUfFt2u9cDD1M9rofoqSbf2a3YR31KvUUZZ5uJGynzbZBoeqTiaT",
  "key26": "4nYzT3AKwTRWnuvY1HSR95Vo7orTFzwh4SibCnv6zJzVvkhDQn8zNHSWuWyTgqw93JHLKVfrDMZp9u9HM576WamK",
  "key27": "46iPKmuLf3db9ACphgZGctQ4veJUUTcce4fjeUHxQjH65tuAZnG2avzeFgT44Rni3Z5MCsihnEGQg5osMMM1G8Tr",
  "key28": "VqF2xAacZ5kS2e2Gfi9e3KWpeYZrKb3Yo7wWm9zcwSCPEYHxUiSSj4ZZCdFoTCR2xzbQ2SZFCxSHDfXeuQ6sxvb",
  "key29": "4qy5ddHTjyYAjQpwa9z2zzCFw3xZTh5JakHZLJDKywe6vvbnU5fJiJReFN4RDheos72irtmeTk3pimNE5A53YgCk",
  "key30": "4Acd1NvuYNE1oqM5FXKVqLPfdNQ68WFrz6GBsnRtgSL7zfW4w1xAkRdLMMojN8pqMBEnrUhv5m7WGDRhmiRB7iCH",
  "key31": "a9Q6jngbZF4AhotQX3Q48e7xGLNNmoGUAhfqmadVJiEQEg8Z1xpa2UYic8dcPN6ksSQKnvmpv9PwhhgoSuu8GcE",
  "key32": "DNgK2akDi8XqsqY8EXs9Sp7k7xagzVL8GWsnbTintT22yAbHjpAWN6P4L3NfsuAi84r545qWi6P3Ub1HudMoMUX",
  "key33": "23pRY6jGBUXSHWRVftpSmTkDZCLr5txHZL7yccBdoHfrEP7SBdPLXSVetstus4GrpfJXCVhz1QgUVUpTREG9j6Zj",
  "key34": "K5uV3AhwYEaCHx4Nbuk7DAEa2GDk38WKAmvd5DAmJtzMPNNsqdijrjDiWnh9UhVMQeJNjT7renAPoxF43HBLVZL"
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
