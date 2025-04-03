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
    "EXrBDfY3bBFFNqXhB6pnxSWjXJmhEiPJZn2uxN5YLsZjM4VX8bUHxrYdqSKTYJe7ouNzZu8oGRaN5CT5dfccJCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7uTvPjmwWU4YuDTcxHwa9UYd2KVUjTkTuW23F3UN3asEJGqcf3y6J8NMumRQLq3VxTDekyTDCCbYHrTGcp4V7D",
  "key1": "5UNNwzJwQCmhsvEJCmfYUWtvFCxpHYHBYKFdMar9EiET1VgCGKa19H8MNhTvfXZJ6JbBmuy9C86awDEP8MmJ5WTb",
  "key2": "2ocjK6sRE2aU1etiQbvdMtPJFc5CrUULq4p36TFsMfPQEthBSua1cJCVDWfJKjhHDd8Wu45bDu9mwrF2PJKxUMf",
  "key3": "31vSxRm85thLuT9LTT9yE9LXNgK5B4f13bG2dBYFeJogUdNEKiVYYGbLHSc14HACMvQW5JjCD6aTLL5UK7EVs2zL",
  "key4": "2aRfkEsxhrDhVxPEA5UkYcZoz32XzD7eSMQJDufE3hL9Z4zXi7MKVrYzpUwLKfgFEjk7tek6NyaLuLQJYgcMVffU",
  "key5": "3vzjeuj34u9vkh4vWbARfz4LHmBTDJfNuGeQqtjuk3S32MtXB16nRJJLm7exeXSJzjpEikoqfm52RStVdBMyaNBz",
  "key6": "2WUJWRoQxSwKVk2PGGrNvVdxBjcqF6VovasZ9EH2hWv1T9reDw83YL76DswMZny6G5Bt2T7FGZH7trjpv2gqnbfo",
  "key7": "4QmzUHDqjcFdtGNWETsNaMHRZNGG73QcJQKf3ugyPejEpxS6VUwBMARL98g9Az85pBhvkoJiv8FC9QTQ51fsictD",
  "key8": "4SvYRPtEtehn1DzmBPXTAtzes6Lx4KfFjRz6fqr2TJxhPbCjqhhxE8C9h4y4j1JtjYP7JmvP9hzSHWjiMC2zFfyd",
  "key9": "29zLuKuGgBw6Y5qBUEsc9dTMNSG4omC7UYs3F7PFcxQcVwcy1xSZAbB2VhPY7pYajtuBpAaF2pLqWpCXe5jikTuE",
  "key10": "2FoXVy6xJMuCREESGp8d3dbdhHeaKRhHfho9NbQmRNZx22Kj5NFCk5iBLfPFsdmp2Hn1XYfwWj8fAHkzafap3W9N",
  "key11": "3PVtYiXQJDSc4ivYbFTtkC43S1PrSzUEwL9Jr1tndQDUYdHLsJLtypExbcGmHwsaVA1ynESk16qHGPtGasSarYx2",
  "key12": "5dUbEFeyKJBUmy6UmYSt5rtRVvxWf9HTWpNMAfbSHZGDFqsuwZmS2hxcZtBL57C324vVjjx6qnaGq482WxoAkwba",
  "key13": "4ocof9TcoiJbGQqeW6TLxBvzkV1crWMrojyYSRW7h8MZBq7aYvcLnMK7yYZP7m72qWJus14p8SdS4ozEN8RSL2Q5",
  "key14": "5xZizNktDDft8WibpAiD1jqGfgFWNSz1PZExc73zqZLxA6K3mTSsCx2pPB3p9pN4WuCPBRt5yhfKoPQEKtZSUoy2",
  "key15": "47ezKPTa5qBi72yNBoxEMPYRMwPmYha5XuuWqxMSJnus677jJj6Nk2391rBnAZLU582eaH2fRdzFgraQNSoLDdtu",
  "key16": "336AKLcpTUxMpBamzn1PN8nC5Z8aGAoJbToiNGq2fSwLbG3F6k1SZhoBfhoxLy5qyo8MHV4wc5EpAPu3m2PjM9qJ",
  "key17": "4vRzniZjkhPPKNd9XkPJy5QV7ntBoh5PxxpZvY9XN7BcxQXjg4K4djr7WC7X6yv8MwDfjhutiwdSPs2ouupwQTrZ",
  "key18": "jpQDoyr9D6JNcuj3n6pikcvX6P3VNPg3z5r5pL3AEJoMeFpcba5uNdDpE6skYTynVTd7ofXMaaH7dMG9CP12gRk",
  "key19": "5Km8k7Za7fw99ezcQP4MnCp3BnYFdocj1L5fkd3fYU5tymh1rBDp5Gt21hbv5XwnkcX7ZSvqDmrbAwnSHj3HPGdW",
  "key20": "NMKnRhaVDbSwg1N2W3uTjf7847CAcwYEkPPbcDKApBbn5kcMJT4UmqRKnw1tT5naMQXkEAze2uF3o8Xj9MKsJcG",
  "key21": "5HSTv1kYdgAmi4XCswo63XBnuCF8vZvYBHzLE8RmargxgQXJvpDAMzJM9RCikoVM2Srq2mPype1P7pe2bw42DCJa",
  "key22": "38yNonrPsSh4MFsuFVqQb7z7UNqk2m6k1LNiRZz8hPuMaCCQ4J3hpD94mwuy4BtK51pUTjWLVVaN64zntgXJP9ck",
  "key23": "AqnpmXR3EKZvGAX61ta9BrWC54UKbWCHpRBm3qEZa1Y5oSgNeBe2zYSAQw6qdTzopMDp6djyZcsPEj6bbR1TYtq",
  "key24": "2wY7RBs7aH566zEPZLhisUhnfmzaYWTw2wueW9Uu2kcfx82jKbZG6FbbB76aGA2DtqqbZA5ZJmuK7tP1H45bTnAC"
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
