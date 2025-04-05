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
    "4WwTFQNaZeQ8tZnNYtqWACp8heMqR5oW4fVrwziyBxGUqi1x8nbqtUya26GcwK6PXs3WoViVKQzpSP9xrs7e5XQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heddBqhmCe6nb9CMR55ZodxjwCMYznfgyeiofJz82pWFqWJ8jNrDH3Z77AxDXaGGnkjCeJyTt6P4AHhtxCRukBR",
  "key1": "2g4K521bm5BcpdMzTpQmZ5TtL9vnrNH9M7hCBhBHufjNje8rWtDdN1aJGjszrYnZgfsfncNfFz8gzFyyTZ2Cta9A",
  "key2": "5jiqBsGPLtXcb2q2Zmaaomo8TjCj8XAk2Msas3j9Jyh7izSgtN4H7qoBRF14Dih6ZkEq6A4LXkm4SDct6mwPL5aE",
  "key3": "4qKCgaaW2is7qBrWhoypwRNCDuA1rwQXMnm3GMBp2bEhbgUfcAaf2eLfsZjZb8MjeZMW171f7FWjuQNdnpzMVXkW",
  "key4": "5Pk7UFy6Rd3aQLw4LQeDWFZWva91yTnf69s5VQwaaaUCwkDsDgZ1F9gMBnD7WpsrNAXydkXofQNSACCtuEzb1eY3",
  "key5": "5WeE15PtjeVPpTxugr3ordvhYosxeRJZDvkyDtXCBSwQtCLnguxBLmRNs3Roq8uVDeHYutVYPie6hmQwgRCeeyzc",
  "key6": "3vKdwXPqvF359fEYkSJ5kvu4gWeN2MSgAdYYjtSM2cjUkDRwAuDXqo4qkrK3YVimKM2fHf1JqRtLu3rANndzbDn6",
  "key7": "2QK1DcQCwGDovAcXQJNSpUBAmpqyiEgujZk4Y3VWA4DYgQKsVkvQHQZBnsWwnX71voQY54oheSEoyGvrTHcdbBDo",
  "key8": "5ZJsryDj3LumnEPsSo9NB3tCGcDGXjcSLNX8zvgfnpSS16XLFkhR7r31VxdKfNmBoBUa2dFoMcb3phUDHy8AnwmJ",
  "key9": "4tUBWdTBxuTfamyaLefG1bWq8hG4Rvk2xr7fSxg8CYUgTS5c2psaUAnVHk1g7kHZLkTdPvsrUZMoSuSgq1tzsADC",
  "key10": "3iA1tzzTqdvQRY1rHzdBcwxZmJaGY4bDYqbMTZ9yHbxxRswuMn9x4WBpKD8pZp6eZpLv9yfBFiah8Fi4PF9JyBQ5",
  "key11": "4hs4WJwFubvj4oRJEwq9QK1uJWSSrTWfYsUkoAba65vtr2vv8H4rrnhH3aJsLND8DYADM7h2N77Atmm9K52wyiX3",
  "key12": "5oRG8omWZT3Kmpe9LX2Ti7dFXNZBx5yMeMjiYSmeZ3NdihqKd4BzP5tAqb4CPhrSnYmD4N2BKFnHcFydjSz5i9pB",
  "key13": "2PoBUsvv82PLyukYRWm68v98TXrgpY6TTsz6v51kR6wCFNDfWe6v1zes1be5DbMNts56WqDEmtLsBF1mMcFTN8R9",
  "key14": "3h7pF8dfumr8jguZqNp9EszWtgag3cT2i6ozDpyynepzifnBbPbU6cr79j2X5i8e7Yd5G5kgLe2cf2Q5mgzGQgT6",
  "key15": "3FZ2WPJ6QrLqvW1omp3PGhcUeUCEPK9GQq2iggaEbg6TZzccoSYCCy9Y12w2zC5VAYsdG3KwKgrQP21PPWj2P9eC",
  "key16": "3c4AuY9TppDDbznXvygbUatqZs8Eh2utj1Q8SZzxVikfdZ8JX5sfc2qELnWgxMhms98spZK6e85p3gY4LCz4j99D",
  "key17": "th91rvcNyRAiSsy3cuas16YvB2Y6zZq6XKXsm3GQzyhXvaEBTCuKkSkLnCpfXF7tFU4guSPV5JfgSkbWFa93SxE",
  "key18": "5PZqJJcjPaCQGddGT2VHjpFFEFYPbJVieCNxYSjfMhQf5DDUCfRNFDsZCa9E4hpfLCf9zSBexyvdX9P3ARbi4iSv",
  "key19": "2dRzAaWau9zBv43qqeP4dPBDPY4NShWLmbTy5WXXTwvpYXvjGoo4NAp2xkbavnsVC2bthhekyTsvx6TZ4nrNFodr",
  "key20": "2LNHrxHNmQjLZsKeZZVtaNu8yfc3pvVJjJJW7gx9p8QhaWipMoq1xxn6CY9o9rFmAMKLvM3ctMqauuJGs6EtDXKk",
  "key21": "qxbzg6hjuQSt7Epb1yPihHLTSRWDVW2iEYsnqKyGtJ8uK6xy5DLcUJVRtuoDCfunVNvetZW7pD7JBLy1eYVmqFz",
  "key22": "3JaM6ja9sKNGDBc9WYudQ8gsLs7hypTwoEChEtns54LkYQac55jnFfzNXBXhQnjUTCw7W2cVscFvRoWtRWwcWqq7",
  "key23": "4bsVVxqWjWPTpWvcnqfwgiX59wDPGs13cAZZeQapTPBRZEVDV3ettmgDihX9DqcsabAZCECwbD5AXjvpHwp7V63v",
  "key24": "5m4NURjWNN4S9yaxzuS6Cimn7FvKtKhX95AWeGbKasyAUMXyDt6RviC6Jjv7yGw4B1h3oDDfMpwAQ5cQpUGFubpY",
  "key25": "29agC1NXAqs2orowqX3RhgJLZFd4kBKKzAuiHoCUWy749rcKEuMHZgAE33mvQTK8RwWxN7SRQnirVMUiKDA1sbQF",
  "key26": "vtDNCogcDSPzTZ9e8j827RJZzenQviFS8HeZGdVfrE2SFKpKLvzTsjQDubebgMQfXPYLPXM6qpUnGob3PETFq4d",
  "key27": "WjFBmxuDBWPv1AFT7pRRSN3XWwrFhbMq3r3qhYD1aG8i3zsEeFYFGrUT9eXWrKdZtUyTtKaGPkKv29N16bvdgiT",
  "key28": "hXeLTNmxtcUkipDkHfN97Uyc1fG7U9VqsVJYt7rUGNH1Xz2pdXhL7ASQZw63PceBUmjYAffdstNtJkeYkNrz5pk",
  "key29": "3cnErPN2FKUz4m6EXLFWY6euL7W3Zg2maVrYeooWkJ5WrqYKhNgK4fEMENGM9xDpXkp4bAijebDdp9mFWcm5vqzU",
  "key30": "3dzAKLKSFX3wkEKnty6y35YWVY69yRkg5N5RZ5XnfFessDK3nDteQoZKo9wCVkLzYnvTYr2Nc15wuLuubqxCgs8y",
  "key31": "yQhSFdZQbxvQmbR7yjqmdLEa2tt1CXYq5HEDYcynYwKDBKWKLuLr3vee9bUsRW57FnZYkHJvFQ9thhWCe6pThCk",
  "key32": "4fq2NV7QmsTf34Y7Xtt78asNEicYyz65NTfisP5Cugwmqmhoq8PpHWL9HfKDo3vpnL5SCD2eumwYN6srT7bisrit",
  "key33": "3R1szvqfgAPYBFAakV8rh4zKg9uASXykrvnEuBFZYKGVnQ2V85nXUJHdEr89NtLaaRHJxxvus2MQxgsuGc9HNRvx",
  "key34": "XJJxqSrUKS7WpL2qkkNbuh8xgnaSuLDRUATLx9GDSJWQAHE61Zjzqrz3Zs43MPHGKcggRmiC4hTwN6sQVHyTsje",
  "key35": "3vFAatZa2L9pBLkudsVGFKvyXzAKPU6cxGN1UxrNpny9yEojxs2jENUrt5EjVs3ohVqHwMkEtLCXgHFFb8d7A7iP",
  "key36": "jELvu8FPYxEuQqdhyxnE4YnF7T3BLmxvDFbjyKKNddu15dpBqMSrLzPvXV5ceRnoa8M1WDF6XB6sGEG3UYWGQp8",
  "key37": "2ViDDr6DB42Sx9UKkesGXWZEKpy3BLNa8DtPxkF3ZBNKBPNMXTMBQd3rzZu1ZADNg83JAnk8ceFVsXVMGF5ccDUg",
  "key38": "4fTDasSiHt73DQ685UNshBqYcgjAi9VDnZS6252eHP8qdfq8cQ27uNGuuS5jvB8gYncpQJbHRWPHmvFw2uHRgRzW",
  "key39": "5kY5RVF5G1xNFXTf6L94wegmZMaNp5kwzyZecD9ZpsB4tY6DcagxNQdiD1TFrKq4Nfe8AXX4ggjF6fKiH9ZjkNVo",
  "key40": "3sAqatADDcXfLiZopZnoMY5aQwx1XfkHVXY6egw3jdhXBNTyoKmQoG5Q1fT6juLAmPnq2wjtYhbB4jzeHJycdmKM",
  "key41": "vM5hfw3duCd48seXjWr2n59EDBZ46MGgtzLcjqxFeBxLvf58mT6pq2c3ifYHfFZoAsyamaqAbXWjz4CQeVpjvNd",
  "key42": "52W7ky9PB5gDJZuLuQA8peskFxHmrEjTjYrY4W4ehqrG7qzHSvixJuB95cnXEHTmVPAAuJrLPE6dnpoD2twZuXu8"
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
