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
    "qUpsFXL75j9ZHg1LC43cBZWy4sKQ64oXgozu38LPMwFHV3oKQZb7dRBx1M7ajro1TNExcmoUPA3ELtdBKsMAGQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyE8PmfNKcRRWWDbtBGfjpjxLnZr9C2nv92sh92tzCC6ec65CFteq3QnU4pACeFb6FPtBPrjF5BpmtQQwFpbMzo",
  "key1": "WSj3xidTuLDYgnX6VMas5BZkeDLYsBvwEiVBAzhjhodissiiGA9uNVDcwi3QMD8pEpFo8fyNKpfY9uQnLjUtX1D",
  "key2": "42CJjS35uFQaEKCwUG2d3rJaqMTJ8ecKLjLwv6iVdLCFbmYwzV3WBpFt6WZgMPLMz8KBzg1SZ62RwaFMQWU4KPV3",
  "key3": "5hN3i97J9ex6AMnDHo2aVGdd4drJFkZsXQJpQQ1e87eiM57LBMS9Hi7a2ETrDxMKHZuEEe1FJhgLhwQvH5Lq2yDi",
  "key4": "3yyzeUsigXUQtabyf1kukYBWVAHn8T3fs41DrrV51CNSo9ihcrVLwicWRd5adiJPuMq5HzTmsxNeJkZnkfQB3yEX",
  "key5": "5vKXom73AxYKm1A9WXetLg6y3t1Rg9CMkG2ioab5MGm6g9L4TXangXa1biz2AfT2xZFJVLFMn6oS9FZkdLmGJg8R",
  "key6": "37carTfDf5RxhGgmYMPXGEAGA9JhnbiretxpzK5h8QLsgbTfbPZorH8nDMYM342ufCsoYvtjJ5taa1awan6pE6sF",
  "key7": "Z62yxiEE7SLFfAiUpDakoP3bLCo7x8eJGRRRTKiMH95hiUX6KT9WUC989NUYRZwQ3Xg9i7g5MDuDw6ZtnWw7w5v",
  "key8": "3D74C33imyyo2TiSwcjyGdH81xzoicevgzpmHcbTjwDuncwo1yYGQ6Jw5Z77qTzKL9JJsqE1iWRUfPVeT1ZY9FVS",
  "key9": "4MwPtAFNr621vXsqbqF6GJCb73mS9QWSM29yZPVxbdyJ9SwFQwsWpTa7UjVMz8YdaEvXfZy4wVYD24FfLR3dJ2FR",
  "key10": "4hcKKopgAQ4CAsAy9R8HvzCBHf78WEhwLoRNVQhHfWi46pBPc4D5Q1zPPxqvwKitN8FXS9aLcku2NvNdtJ8tYbm2",
  "key11": "2BQ5xX3qhjfgWBV7YKxnykr6iPP5Hjwrq8r61JxP1KX36JCHjqSdT9cznn1USios8FH1bSG9qsm3qEvRAnKZWuRv",
  "key12": "4x4JgWMAzS9qkxAkPnSXoCxTQBCgCMG2mx25kkTGFvquYY4EGCC1jXFmb6WzPQkfy5c9XnKPBbAN3XFCNuN7k6A2",
  "key13": "4RcoZZqWhUKaeUieWsyfgrTYr2xwAHVr7y8gS3f1eb93w2eEkhrYqF78AKNdRLbfknLVemQVsA31nnJAxAiuk3ta",
  "key14": "kAkPgoSRMRrj2n1WfwvsumVay3FEQYc77esNqcaN5ioywu8CjaJ4dKgJD4GvyMr8HjVAFuJGfVMvgvPmrpHp7QF",
  "key15": "5XNVoMEJkEkiz1gMMptAfQscHhbuY4qfyBykviWyeo8yeyxLcw9VgR7mkzKkPNw2SL7jxBiQFUUHG8c7GFSASDfw",
  "key16": "2XkAyjdiozBY3HLYYsPHhVbkH7jBihGGg9dkYitKePiww7kH1UA1eyKMUZf4QN42RCJ1vVXEYjdACcdeWBVpYSU",
  "key17": "2JGYN34VFA2Uv3wvzPV47jzdNmzjRANodax6GLpYLCheJhxoPWwiwegH3prZeMxuvSiuQQ8dQ9dJBVUS43rgbC5i",
  "key18": "HALFgPngFmY7GhM4GURBEg2jhkw1garFjRE6g3oHaq4zfY2NUieVx3p9cnP4HPLrdskpjzpc7barsVxmR4TPKtJ",
  "key19": "3kAkaMiu91QfBUCHuHkVUTKpk8ZQm5n8v3WWaxBoh7xDghpEmrqRnHpzP7Lsi8SotAaEcmPgPmNg9oRorWQNMXYP",
  "key20": "5LqR4NFUJ2GdG4Mj5pwExBwm8XfKDauLC9nhqqRbs3K6TfDFjrYBhcNvYcdXgAj4di3ozy9tFGX5MqUXAXSB1XST",
  "key21": "4g9oS2UPW6JhY21r2mZXqXDYZ4y9wnfPxZdGiwR3k2RyEnrPH2bCEEvWPimkU15drjccXR6av4MUUH4ib2mAzk1x",
  "key22": "2XzHzse9LsUbgWFgFziNbneCfVWLvrZ7x9BF8t7Wu7vkmVKvPBSZanggL5jU4nvtBNjZycxB5vCGwdELUe3oijPe",
  "key23": "3diEeMB17VgRapHkr47wR5cufZL2pVsqVM8WdCQc2HVa89ccNkaag9myk73cBWG4Fz9jWruJZV7jPoffD4ajdPFM",
  "key24": "5Y3Chd83PCipnL1b3gQciH9hzQWFWNSD7ojVWyKYGhHzJrTkyxhrzKp1iig2g8ebNoShixPuUnmqvuBxxxaLjHri",
  "key25": "28AAKVNHgRxrmjp65VCArJJowHzoBANfJCeT4xSRJqptr21KwnH5g4TXneDgt9HcH7sifRb7wTnNVXS4rvkfjY1C",
  "key26": "5Gc3CEseRy6yPPGTvBbDyrm81rrghJXU4Md6EAkaC9HVjHBq1w6LNi1QXtbEjpyfHoi4GNfzKgGWGaNf5GS4ziC4",
  "key27": "V81fWkwBVroQDNfKXiVUUHKcfac5nhJ9mqdmNnG7SUWVfWR2x4FKEM1FR2F5DjCLFsgiuZmX8ZPwUZyGi3vAY7a",
  "key28": "sk52KGeEBgKonM6up1xbAMfmXR9QujDWG9kP7ivqzi4yLsvmW7HXSsJTrBQkjxMgii8BEW5EPoLyLHpPoMn6jGs",
  "key29": "123TV17SGf9owKRLbwts3C2NrFtm3gEP1mfiXECjK67rQKaSJcyAUY9pm2xiPitNaCaqSwRwCGWo9Zq5bpeX1zYe"
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
