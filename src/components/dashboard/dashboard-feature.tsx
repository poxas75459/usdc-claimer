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
    "5zgPVmnbxXooQ6wE6wsQtLZix7m57RAUriw9csMvNcCnuCZSzytFJZ151ncVfXdgmJVnqkcXAKHJn9piGotxWDh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDFMFE7cdSQEmgnbDLEA6gGn2gSB2bHGc9UH4XWhZHtzgeGdE261rBfXtwtbLXhcyPLAvahztW38jH3Hzfjx5H8",
  "key1": "2948Qa9UqQctqhAWZBes5Hw17Z6PMZeCZX7HnT3XSTSPUZ9tadhzuZ1uFUKCKQZ4mity7Jgp3eTgde4TNcWESkrS",
  "key2": "3TEpznQZ2TtZSEXYvopLXFMnGhqzyTie9wHewaAkrRJ8AMp2EzGfJgaKjHyxNDntcd9bQ2kzyWJejxhBHKXC62iP",
  "key3": "5xsFFtomtJTwNyycXMs4hAZV3um3NVUe4kvZN5xuEcw7G46rY3P8avWausDUAYyLVdfjripVD3WdqBoy4N9cuvGt",
  "key4": "5YxK7CfU1G3HzmjBcUPsPXA59ok5eqq51up2nxX7DGtpEJ35KkD6hUyqTmmVBE3QUePcnMJAJ7RiburnnAu352Us",
  "key5": "55X1jevVnJHjGqazmJzJHcsQUcnnZuJLBFASoZBAtVbDFvSeBSDa1hALeMALY131eGzj2neSoQxUvV3SshxzTUDS",
  "key6": "512Xrh9QMh7GkxxHdDe5gsmpr85zR9upQgmJQN8VM6vxesveSR9FqKW2KC1AST9Dh9Gh3yMcStGGqu7HE7782iUv",
  "key7": "55RhhkAVMftLnBZm2gZ3ycbkAhfKdhJ65ovzKbCFxr7R5WezYqpabgz1oqNNvqYV9Zu4hddfqthj4iux888G2WPk",
  "key8": "3bEZpQpLBqzwDTLfpSzuK7VL1LWxLtNsZaXXn5AAhaMmc2eFcMrvtyDyHLLsqXuEJQ2LuPG3ubLRKieNzNs8KLk6",
  "key9": "39iTnfGNX8CSc4iUdYNpbUNBrFFjrHDNRbTVjjpASkGVpGzi1KV4SZLCT3MW6W7NeSfcQq8rFuYGeUbTrD1f1Boj",
  "key10": "3y162HQ8jnsdRo1bSM6KZ47YW8Sz82mnWQBHZaXb2QMzE7bfiZNGpX2w4Y6PPheB2omqc4QUuyK7yjeeejSewF9o",
  "key11": "kzDPYuJNx42F1we5RDifZxAoMSEEyPErFxe6cE9P5tpsQN2LqLPPs2X71DYaF9bGc5V462nmkhAxVyTcWjjs6eR",
  "key12": "55KTzmbzarfxYND8q3jLnhpS3SE5qQPj28BTtFtfcZQPUKr54SkdBBekwbifFeaeyaUJ6nY1k1SYgeGEbgGEdtxK",
  "key13": "o1wtJPC1mULj3UP5yrUyrUZ2npPSFgMziRTM7ud7XB6Zx2EegCBnUwKHST4Cc3zjXRuAFbdYTXyobuvH546qN6D",
  "key14": "3njpsFVHGMjsfNmrsw8p3wXDKHpQGUopsHgBHrWGsRf5R43S5Nm9oC1FSRKB12coxurE5dPb1zLuYL1j2ypgFFAk",
  "key15": "ApbyFHhTNNjkogniEiBvs647GthNYGVqiDK98Z8B3aWSbW5TApSsuJZRrqP7PtHUoq1z5HHF8bhk9o23X8EwZpn",
  "key16": "3fydzcYAzNUMZDcBXHog7cwceVJtrQ5uKuSu7RZBDqoBp7N584FKyMgXZaQi9vQVcpvMYp7rBag1XDLaTLHYhhBR",
  "key17": "2aGtZqqi27Pr37Bz8seeVrYawyjgFFDYg321QsgqFbxwWFrUUJo3MzGbEk79123rrQ46vrhCr5zJ7dAYauDNo7bQ",
  "key18": "2fB6c7VmHnbbXLxDPDpDwqqfPVPm5CkqtNySJsBbVD3JT4hfVfZFWctFHTQ5723MH9aMZoaMvXej1sgP4L8uzZ3v",
  "key19": "xRQh8hRfzsMQ98yVeXRpY9eCfhUAf2dSnXjaekAzJDqucC598DLTw1QEyeApMYJVsxZhWSsqYNXxqtfpcfJSNGn",
  "key20": "5hXnGX4SF4FJoo8xcV37w2bB8u7icneFuZ5McyGXh3NC3sDc1mWSxGqDNmdDA8Ezbow74e2DAnNihg4y4PXwVjGw",
  "key21": "3QMz3u3P9bsHcVLiYyY4bMDebVTbJAANc1EJbnMb2yeEnpgf14k8KKPmRpiPpYAJwcAm7yMuSHQrHBhdSpBRFiD1",
  "key22": "4Cx7Fdj13Cjaci1uPv69kuhkJvJ9MFrF1gGYUhmKWRKaWdYnfTSQjvBvhWP7JukVbJkvyTa8ZjEQ6NKdvXT3kuQM",
  "key23": "4efeHYBEFQC3tDLoyV7SkH9dsHL27o5DcmFPhfakGFSZGuNqTcYrzAmPdX39uDr4FeaCm2gn3bkdgVjCCDGNSF74",
  "key24": "3u9hSEYsaLSy18B49L8EMWvf7wfRwWidHHWdDkcEo5UDBCmkZATL9KAdx82sGUUf9bHG9CKoUiGqkmSVRJGwE4qU",
  "key25": "8n9mqTeK6f6EUfETKuBDTCcWBc3R6jSiuGBUtKStDiwtsLc38iMCdqcm3sazFnQ1gkcuYajpJ5v14T5MChQdiuH",
  "key26": "4xY2M8pcL4rSTfsTMymoL29CjLQ5eSBueECKpgNpeThmHDaudy9bwTakkafv4zYbyZuAgpCgwR9S8K4268r72ALe",
  "key27": "4Y7AA7Xs3dc1PSF2eMEzVtCdczxqnb9aKuQnKHifvtafFCjkn5bc13eS1bqgcBVKJxbLi7ZstvFj5eoEs9cmq4dZ",
  "key28": "tv2UR6EFCxurqDQzyiPeLPUACGw1Lam43BZuH73pEvLrq4b1J4LupAehvoqak9EuDf25LwjuobcEUteqthRRyes",
  "key29": "FA5yHcTz2MSSkWMHxAnoURbBui3ziQejFxaDxSQXc9TKTdVGLCAjv5VQPkikz8kXbKRrD1afE6DiTWyDAaYJkV2",
  "key30": "5XkftrPWhQEuj9a1Qhk7Gc1wb7bmrBXLaYNC99Qmoai3snbdCzgLgbvD49KzV3BAodbXgTXJPYG6QqmWbMyDCbvC",
  "key31": "2a2UUUYbWiKh6cjjCBN1kDMg14411GQFUHYN9qWePSXHEEYsE4NrCJ3Z34pVVPK912WPbCvMs9GUgPCMhYc9MtUr"
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
