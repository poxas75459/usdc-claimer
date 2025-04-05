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
    "okteuS81bvsJzczmZfZctTcVZsvyb5gkwCfzJV12BCGA3fRvkdB7K1Eyf1Nx9cC513MqNxLDZ62StNzKiuWx8SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cudVPsG4qGpoajotmt26VkrVzSZ9ieophJZ8qZ14VGBXzNDs2xpP1Wy5QgyiGgwU7gCcizjJFRmm9d1TBUPSVrW",
  "key1": "2B8v3y7bZARdZFfAgPgGLrqwA76CYJLejFxPsMRTdcqgkZjbGVccvTL21q58b1GNypUj3BKbccZ7ukCi321SfPre",
  "key2": "4FaxWuvNvMLLzAZzVozDTydLgf1KhuviN6rx4WtPBLh8mLKrmmDKwaJCioSTSUMMLALQgGPUVmXzoHeQ25YLWoq3",
  "key3": "2kbqh3YZJvy5ra6BYTskCpph95siXshj3UagdnyKyMVx5dyb61sYAWpEVDxnyj3HVsVZFqM6ZzaVr5NvcS8uz88y",
  "key4": "4sZvqDzoGeJqXcU7tPBikWBBxcX1bnCPnTL57HoofkZc5kSPQcCajLFYbPXNdSzPwEyHy2oMbY25Eth5zbDm5ntU",
  "key5": "amwPv9jVh966fVoHciZ3PWBtikVko6nzEXhzzJr3tpUZpVFTN9fMoaSs3681n1Bm4Ny7ARZMbZPXnyqELfQkrRq",
  "key6": "5U7midyn2G4Hz4kkZuGn1HgGbbGd9kC89ho5pukEubgtpkqYfzZbUGm3KHYEWvYTBU3tPU9Py5q8H1U6s594v1ah",
  "key7": "32YdGpBUFwTHJo2aH2QVzenaSzTxQRYvBdaNnKnkLDNteJFS6wCPZByExh7xSLdhw1Csq3L7Y9W1CxPytfS71bSt",
  "key8": "2e2DJ6h1wn95Px7tuzpJog5i4rdbHyQR5fwkgjDkeg4EY2k1cvV6B8V1eHeQLYYjeTKBjJo6cLwmR1xVXMkTW642",
  "key9": "3LdL83wUNW6to7662QBk7t8uetaG28bAADAqobWt2XpTyb4FdUwceiGCU3W2Qb8iP5PNZhqCM5Mbb1Rtj4HDP9mP",
  "key10": "59qAQ5Tg8HrGa9EQFSsEXxihbhxTVR8w4jtboupVy7Ufex2p14FVGbi7fJ1fU6P8Qrh1z3GqWtD77XkAmq2biGQU",
  "key11": "5LZGaE6caCZEQ2ozmmjn3D2tXNdpdgz2vLMYfg5dmNdDixbMZnDE6cGfSHvZ3M2K8S3eJNSpNHWwEqPncKsKGbN1",
  "key12": "2bAscrzdWnn3hAYdEA8L2MmL99X6EpfiCtXC7E4JqLSpFsZuFUBedysc2bELYmxWxPvzzVPKuZ2SzqaErvEKUotm",
  "key13": "43L991DxiTJFuPxkfqbnJX1gao1NvWs3ntcvvucjnHKksLp5KsmhX7o2PTSPwMhNHVEX12NQ3hy72wR8j4sJm8QE",
  "key14": "4PDGwzo4YEq9yPDmD4hf24oFbDeQKBHPyYBjfMdq5rKJeu2CwbBBH3wT1fZNdKsuLPHUE4XuttDafBSFGqWNGWns",
  "key15": "41bj8fFWgTiR5XqKoieV43gtAiAzirriJjmacTw28kQFqBvdXfPKvxiGExbcMQhyX1D9MAwdVnBZKjYrk1oWH93R",
  "key16": "5vZGV8oTfvq7YuajBEPLUmfJcgPr2kGSNL8NeMi36RRJXgQdN62CtwaWAp5Ty4e8kRNFTjRn3PAKsUJz36zPCFWg",
  "key17": "WQqq86jpLDBgT8EGenZwuWBdUGRQpKe1AMqMV4SKPwX8fXLFV6RCLpj3bouLux4pMaeZMvxMeP49qcGHGAbgYBq",
  "key18": "2Hcqfnw2A5TaWB44P7qKb8YEhkvijinNCwwmjWW5eDdkojfCJhAXS1UGdLodFaYR8u1zbHwirWqBVHnUXw7Hxvwt",
  "key19": "2HFWmMVKuxz5XvTyunGbUTZM4881junLvk6ydFEKiB1iYPt64nJ8Q9J4eywnJ8SgKfW1wJ6wrcZEwf1HCGHT45mE",
  "key20": "2Na7xoKbxGikkQ3rRJpDmC7vS9KSXdFQpbPGcgH9fJCTR4di7WweouSwsYaHN2Pf7JStBpiRaBZgFeesb6xVKy7R",
  "key21": "4Xc7PgonRzyUeH1YHECeU5D8uEdPKjJr8U6kzqgrnGnLeU3i4PL9UcDwGfg3iSJWpsvmLW5deFNbNanJVkUdw9k",
  "key22": "5i8m6uf3or9rN4n5hdDGEnhiAa9jgFWmyas2oySj9QWBoJJHpmNHqTFbzKBreUh3nSP78YeNA5nAEhMCWXaAbgcg",
  "key23": "2Xi1KnYkffjawTEHPCqUNGy9Vb4iJRgHhVFfQDuFmRNUX4yNZhy98BrX6pTk93havB8k3nbBcWF8KvyrXp4dWBWY",
  "key24": "LmTY8WpNuDBWEbuUYo7vhPu7JPKNpnXiR2SDfuRZv4SKD8PRKGXQ1aD8CZPRhFmeUXWk2gCysfBtdhRBS2vWSKm",
  "key25": "4VswLRaqWGU5UkL6F1rfxyyfq2HZxzFnEzkVSc3ZByeJdE1SZ2crhmwpgDc4P3Vz6BecaqMykKpp1JE86xBXWvWz",
  "key26": "G7HPth4BPMC2xrAhV4SraMtNb9Rgpmyu7UUoQEzzTKQpkBew3cXCiuhq7VzGV5uJiyqTc5qLapPbzsMrS4BS1LK",
  "key27": "KBeAECFjhGr2bT6a5VbfUpoHq92PQMP7BQ81Bt6ruVoqUmDdyFA9ky98icH9a1GX4yFLtGfEDucGQoCHiBgo2v8",
  "key28": "Mb7JprhVvjLV2WKtuxoQUj8q8zeNPMhcHc5BtZ7pouogRVXNgiJNfWHLkWooMNTTHnEd4CdVhkx3DWNg5rdZFUA",
  "key29": "5VTBVd9JjxrLwsJ6M1dgZLQf8M27dsdNNFr9d1V1E66ZWp8prLFbHMF9dRYpoELh19JRnR1jaapjZB2ZDtbaAAz6",
  "key30": "4aAyBFkYuWfiDzh956cboxPtqTDXBbMg4ccDfjw4Uc833NGLfNTzK8LygY5qyupb6FrdJPw3XyV7mcMDwFSGqRng"
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
