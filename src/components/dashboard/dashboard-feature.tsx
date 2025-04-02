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
    "dh2jaMzReqNgcWAKVfi6eurYB9D7wH4M5joUbGdC9x51hTLoPERoARJ6tsYUTb6cmJrSqVtN43xE6oCQfy2bDoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dRiUYB4tEzUr7pZefaF15pvXZSC52TWWVbQaWJtTu7BenpCSkbSV76PvcDVbP1GbRdiqpYx6DTXqu4FZK1g7zd9",
  "key1": "5AgSbAeBt7C6gARSSQESFXF4T9NCabyuRpRKW6t7Cjz198pAud2YtCnL6FKpENzobNqtVqKKByvYSzAGoBujXxby",
  "key2": "5LomgyrkpMUpKKCv1PrEejzq4MQiZcziPFJ2twJTe4nZMYNN7ypyVRzVxv5xycgRqD3rkJiQiqCTczoanqaAp1fx",
  "key3": "65HCTTDEZpjD1vJMzdkz1aBXE9fnu4vtcnMS4qz2yHsWr9cCqbKTDSVN6VgMJKPFGKamb38CVaE4j3GBacpUHPTJ",
  "key4": "5YwjRNhEiyAjG3fzAu9gNpLrhgRkzWqYFB8H4djKNRfpZLmzS6hDybABvqbvM43VWLZMtUwqJAahmFVXSkPeqhc2",
  "key5": "2yaXASng9tPmfrGVhrPGXATcAsAiUn6yhcmLkCG3RNYt7bj2N4iRxDmDHy688K2ZzdUkoVe2TAqeac84bdYVn7PD",
  "key6": "3rURzsFWVgh2BkvPMa44Mb39GRLbPN4hKit28Eaz55TA1mgwWFauLAP9z5VNXZE5ttzD9Ab8nGEzf5dNLhuEsMPn",
  "key7": "4dVbyiHSHMYWLk6MW2FKBT8VzGNnsXcipsgH2WLThCo9fGZJ3WjGVpdRd6M9SiGGpkU7RKxx7BqVqP2zRZQ2oY4C",
  "key8": "3cbEeyjCqiGQhibSBD4jv3Cw1je7ppSv3EX2ky7jho5UE4e8FG8opncWdgnE9Z3YQip5qPnvmCRwF8hP4Lw4nQLg",
  "key9": "i9tQ2aesnpkT1nYJLENvmtU71bVESToosk163K2fL5thCa2VXXpSLCA5fnTwHcmbPV6DaDmRUREbjnCbqn6dKzW",
  "key10": "L8PcJRPwhxY5iRJ5JHv6d8bhTWcVMk8uCpdaY1EnwEKMUkfxLma7qqsr3tXVdgdKt73M2eUi3bwvErdS25q5UKL",
  "key11": "4ASmrCfV7QKt8aSYzZY9wQbtaySz4WVXrmdZNeQXDYVJ2w6SprLsLnfGRahh7g8nVzxrBf7FRk283RYrZz1Up4xZ",
  "key12": "2eyQHLyZnEtFU3sXujTuvG2RCk3uEhpcZT9GvHjcR7xJadEzCHzsmL4fCX8g8a7KG2HYHrLPaDfMPkqREsG6gmvy",
  "key13": "2JadHWsZStN5sdvGFrQVqqq8yRLZXzLiNRM8sfCXyBDBFd5oS4QyGUm1zw2n97iUY3tD7Zbc9iSfMXkD1oyVfMtL",
  "key14": "vU8kn2zsqCmTtvqMmHe1VMmTMuvJsXnweBet1eMpsdqTnULpzMhsCGED5iwKBzUbxZLZdvqWSMGzAqgEWrhNfaG",
  "key15": "3u61DZC5riptRgszcyeWLPnzPqsXAEzf3wWxEshBpbzKaNv5Azj7PusFrPpEimNam2H6KgNx9DSDpRwPmXUgqfHU",
  "key16": "5AVBwvhKrXZQdB3YQQrkCu7wWs23jCbzg6ECEovBj11eK1Zg9V3XXidM6WFGf6eWn3i4zh23BLfYxqvE6RBh5vQ3",
  "key17": "56iTEo4GYsLnRZVBjbs46Auu1c33uhjMzUAnHQ7PMUsB78tGPsivoJBXuEVAM91Y3VgAuz4hJg7T4kE6QsiQQKnj",
  "key18": "3Je23DDi258ftSGpnWipc9gCSWC7gctpkeg5dHrLSKc82QqSp6FhxxJ9n6zv9C6Fi9XBT9Yr5Ez7WEPvawvnvmQw",
  "key19": "675tR1fhRSzeWCmYYV2eyYUQ9BNcy5Quxhp8aPJhX88LB8r8aV9q5nkiRsrBVP1rfM6A98ezxkj2D7Tdp7WSGcWB",
  "key20": "5ocyL3aaKxdFtEQjZBZNvG8aaY3Wr3M2UkB1yuAS4Dp3vLH1be3msNgKgFbr8E7JRX4JzbQbX2YWRaMst2AYcsYc",
  "key21": "2toRAvvAgXDcXGX84RJbhkwDp3CJqAFBijvtKGiUA7kHAPPiRvuMsona83JKmUH5YMQYJFcBC3Ttg6CzN8YzBP5r",
  "key22": "8q9f4ZU7BWWN7PYhoyk3xQNLgHEQJPfxM6hNYHrHBQDASYTxSdmE5iiSS2pA2T191kR3G9jsmQKsxbbNuk9cw6y",
  "key23": "5fPPcfpesLZB6eXK7Z5YLNyHps5mxhQXLnS5vLSQdfL996KsqzqckFc4p8E4aUf4ntCNEyPDu2xkCPuJeY92SS3P",
  "key24": "3TtZXon8exnPpZgnkKf3hhF3FURh6vff2REoa3RKUqdeFw4ej7rWv42MsMaS9D34u85khEhBY8mgdDFxWCVeRAGr",
  "key25": "4KBYZ6fsXgDz9EsBMj1magjhuh5SWy9JjzVALEL3kuS4hTV5aoUBtTWcAb3TqyBzpPZe8hfwcXixi4GGCKSn9kjt",
  "key26": "3QrEc4GRUouNPN8ZRtzYMjCGfbDLFmhef5NsHUH3C6Qwv98p3jJWoJtxwad1wvfMgNmbKEP6eGJfy7uoFwa1DeTF",
  "key27": "5uNA6nzQQiNU7YP1byGogZ2htU81Y3Mtyv6DEr4HDPhWBgbhKLjkiCFg8Rfc7HGRd8z4pwwr3Lpiw7eGUJQQBL6",
  "key28": "2A8EQ7YsVyKdvHt6gnRJ6KbubpbcBzT3jtodQMkscqgAAr7cvzs66DE7gJKZwtW1T7Jhoe6zADPu9WXLtom5xgW6",
  "key29": "5MgM3YqJf3QAw9DQVXia4qW7M7AVacoiCt9D95VyH9ZF14zAqWdnPTzCcEtn5xaJqLTPHCgQuFDHCuCsp5gXJc1J",
  "key30": "471ATTNnSR6YMqn5Ed1TUPbLnue1tcRD2ByaUTdW55MswVgohGM93dPLPLz7P4HAELardzs7jE4vKDWwGUxHni19",
  "key31": "3nYJX5avJk4X83M4STaRQsAMBu3wW7eD6HpjhGDFADgKHEjsNvJLRdmDWmXh6neNUnEDfcsYQGAPe6z7RLgn32xa",
  "key32": "3tvsjtC9HKihWtncgMehPLTg473ktp5y7wujLZXWfRVQ138zyLXNKxBRzMZTLrUcSMmNqWnHZd6jzSwwwzXFCnzX",
  "key33": "fBKTFcxWg2yxUmDBoGcMWcLMP1ub3kbuhuL2fwa5vZg11XLSaXHHMRHBYD3s1p643koG7F6iLXKB6RW33h9M2VB",
  "key34": "5xD7WWkNStXgTapaS5oyaKTvPGdoqsF7XrEoaJYYw4KLRJuw3NmQkcbsbaPdQti6MM7qDh2s4fTVhyFqZmNysGuc"
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
