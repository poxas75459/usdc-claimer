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
    "4Cvy547s5Vc9vmmKc96qbae4zRutPuegn3B5yeL3WuNpWwXePzai7msQUCcrxk7ZcHvCNPBk4x4gq7dqvef9xsek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWCFjWgiDkjfLznFbLGdqV7r8hXR96Z2ZD9aY9BAk85k9SnaDNX82576kwWHAYC1KsxbpNevm9jThNLBE9eLAVH",
  "key1": "3aVjDfH8R23DkwtoxDm3VPQZijKGhWehHAHPr4bf4KEBKPDzx75BLxn8a6rV5gLvTLzNs9phqFYkLE3uCPBGmo1Z",
  "key2": "335ft8T6bgg1SMKxJP923xqev2z5cDcmQXB49kjhMoA6QhxtZMXAr9rPw2BQJHrxmxsdwdibymY7jMGbehKzuoKU",
  "key3": "4aaFkSt4uD4RAUpwDvfLu2zYTJtHgc9r2tkgQgzciNjLb8rzd2WrriZuAE7kBF4Ffo2eAbd8zJw6fCPJBftDGCZq",
  "key4": "55p5GBfMBYL3FvfHqSkQ1pqnjUUkzKL252A12qKWqXS2RjNrVqwoMAUKNTwQh1FRSLcZqBW3aax8GR85MziiMWa1",
  "key5": "CvwaWbTpYaqc1HKXLPTdYBEh5wJ2iu5TqDQunRwCVLyEjBvrUt2RUdhi8CbDdk1kwBzjKDtDzo9utMTknrg8xBM",
  "key6": "54AGK8r1mdwtsh5obhwGzcBZ2hFrjBqSYvUubz8Wkr1Npo1uzQ9w5SqFBReLYgx26DC5WBswaFNYmtk7MaUojS8d",
  "key7": "2oeuEjMe8VthyX2W8S45kCBueTJMw6guJYPqnEVQYhN4c6kAwL6bgDp2r6ehBgTqqDr9p2LzHX5MHvA1btdCZLdV",
  "key8": "3YBQs9r92yHaDKv3kVNBmXckmUzNPhxGHTphTao8M7by4G1tU8sLsWmBgJ5sd2riYM84TTLMshBwatrnCobRdgPj",
  "key9": "2Y2SQQd75mxDbGyYjqY2PVn8qkdTA54GnKNfn9pCugxzaBULgsi5jw68C7ZL5Qzrq3wSAJZC6UbQtwVnr2CWSh1G",
  "key10": "3nJpdQH4qK8476bA9zx9aJmfoFpR9VeS9N9bNgs5tfSrD3zjSJ4JSNkyo6PxBSNm9Qym5NLnnz6X11hvJTZYixK8",
  "key11": "4ZmTGC2FmaQWaaCbuApKBmKj484Hoas8RJF8Zzsvsq5YURYuhqoauWGdxdCp3bCBeHbuiH2HD7eaDyP6oRPSN9bD",
  "key12": "5SXraxXs818wAGbruxDryPPzNKhem9dQXEwutoqyxecjeKdpNRWJ2sGSSmH5jRVijYFDvpC9YsSaYhDTVJ6gfoTt",
  "key13": "5deTQTvxGMPn6GW1SMT8rc6uHa7tEQyrxWGd7nRJsSUbkWWX1CJaAFTivmrUHZnRhiX1ZKQTr4muL7zMvMYpFfEe",
  "key14": "5zC4URc5dkSJGz1hHcq2K2m9KYyhWycs58FqRTyBL1AKA4Gf576wRC8tufb9ArUhSHRZvwzPNg8k6o3qctsmv6Cz",
  "key15": "U376jFhfB843gaUVwkahDM14wB3DTtGrgPzYJ6JgZBMCmnYhxxNH9wfnPvy5cpauDM7xpqqfhhnTj13V4P4wwKZ",
  "key16": "5god1eUvixWvFh2XQKLQnTVM9UXdjLUCTwYo7aezhMSzMs5zDZ4YubAp5uzhY6PQymK4XLnXXUPvSXhGLfj9wxEy",
  "key17": "4DxRsP1fafKfrVKc7oibENWx1kPsqFeG7SiySnmor51Yb2k417zBSMvUMQXEgmYypmVmcq7XRmKzTTviPCyFpxzH",
  "key18": "3gg4ewXBuKbsavJ1TUVMNKL4AN8PhWVTDm4Mu68SByH9YLukj7XNqdyGtYrPUuN4KDVm2wYK6gBpX8GwKWUVeJKf",
  "key19": "49THQ49uDtQNoh9LyzFBqszRLEEAMhd9qqBb4Q8Cf1Ab4QFGxNRJop2tqwGHA6n7vXckq8Chqzb2TXhy6zCZHbLo",
  "key20": "2ZMGFmbQrJTTQyVqbW4VrFoMShNuUi8KGXZpaQGkqGPU7Ex42GfS3SYv86F2qJMd4yJLuXovTBwbHn5fcJYTdtGb",
  "key21": "jiAVG5NJhGhxsPtfjbbJ7w5QpXzrYHMjpzGcHnE3vvJVBSca57Gvqwzdvo8sFgSwNP2P28fYbawtKKuNXJ627j1",
  "key22": "5SidSrdJhba9Mi95nGJmGamnyDmcf1AJUgQv5DZ2B334fBd6G6K7jXLXMvSpDi8rxmqxC5QXjxopKgdR4NphtBn5",
  "key23": "5tNm677HzzxznJwjricghGzRfAvXQDdQWgnFC8aTDRdGraehWp4F7XwFtSdJRpYGCywS9DaKRF1DzQVd1fxJ6WYr",
  "key24": "5QcpWScRdYdGhnVC8zEqR8ApJTSNioCPM4xZbCiB6g8W5QXshdacxW3jbbBpCdCSuLWt9LqjPHH7ypmFJtr9nV5m",
  "key25": "371kzmt4LnEWQgq7eqwuCmwEB3xYaBiciXJHXnyoMVVmgy69q5wiF953WieNuQxAHJqqfkV2AJMWgXWhuoF3jR5W",
  "key26": "2xPVLr8SNY472BT65X9yHsuH9eAuBTRpFsDikTtWUH1VFa68UtXCpgLPguT7LJGczqFTWLCCTuURtNrFp6h48s8u",
  "key27": "2ehL5Bc8wq87gYaofPnXoj4YW5na3d5Lw5drrbvCSdB1u3dSEpEebTMAXdmipuLzzrfc7cRzVsh7nomzhmHpn67c",
  "key28": "2dzz3dfmkzkcudb4FRhcinqAwupyYCCekGLki4xTzqjsuygzT5zsEazNNQYCsTfaMcUefqZCTmyaTaCbxBMFPNyz"
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
