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
    "5pFEcFEGjLpXgSQwRaRdhcbx3sWEkHvTFVS5H3qipeVjp7irgRYKLq2EqQFJUJ6tXrnogyhJrFBFjXApBvR9KCf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFfgLtcapXeLtQkKcGFX24do2LvjRhrTVrsrNyyroqXs23GEQ5zTQnSgLUukUkCLQdrgGK5ZCsD93xrP5NVXMkG",
  "key1": "2S2jEgyxLRBZdG4rGVRAnoXeFZJpRxibVMKnZLCm2Y576bDM9Rac3F7Dreqiqm74TSt5UAP6mSN2RhrryUSsphxo",
  "key2": "5qeuXJqEFEquL9s9XckPAtc34hWEeqXwNiNaHeQFuPgSTdshQDXH63yBgBdYHrqEAjDU5DhxtVsHGGH5m7udNDVX",
  "key3": "2yEx491faoyv4kQL8jHvFQcYy7HkDv224stPtWWUj36Dmz4AWVFpvfhfAhTmZbcWftmvKQ1jThfZRWqUXpv7jpBd",
  "key4": "5Ws6rfwXDZXGeJUpUMK7WavotasouPXCYyTdLWvaCdUsVhKJvVoU5e5uK2emMSPwv81LoAPsNz6gkdxFWRqrh5Li",
  "key5": "4YoQGgVv98tSshHEHRjoa8WR1QbDZJdfg8mjAGdFrQYPvRVaKvTuXUKcueAHV53ARnbgAbF1boBi2FoLzvFxngZd",
  "key6": "46KQyUbmKG1piMf6VdyZxrEJ54MyjW3UEpnMocesJi9PxLw3AGcDWzLRxtTefTHMXWnkc4zAAVrWbDjVMuZJ4vv3",
  "key7": "4ttT5ba2WNmWDYUr18e1DRMNTfEzUMP2T4XKWiPTmRWyeaUYf14LDpJZKejn6ZXTthJqiT7J4ykppfAvLnNoakpZ",
  "key8": "625gUR11GSaq9pPgst6CoKGcetJVdvMKZeoVvuLbywfM1pAG2VH9UF9dNoHUxefYAxM8GMnF4ki4bvUEahqPgjzf",
  "key9": "4CQS2WTEwmtwv7Mh3cSkkydBvHDU4NzBaoEUBL59g2KBC7P8ZTey62SxDAWdkt32bHqERy7Y1jehk4xS9eSyKigf",
  "key10": "HZ3U4EJWAkiv8ikgVVQNVEUaGhnAetm4NmSb5dxLtpe5aSkwLpcgnUxaoc8nu2vYfYFzfiPHSFM3zCfJ7NEYGRu",
  "key11": "65ArsfG3MidFdCgbm7xBuo32ASVp7ymf8MwS31eo3NDErCW1WqSqacAJEjHsrBTA1jcvmZuqTcPsUV2vVV2nUCHY",
  "key12": "45ibdM1SQJ7bUeVzQ12XTsYjroAh5dvRU1uHgi3BGEZX6Uom6Y4Xd3vLMhu5766bBJrX66oXNdUcWQeXQPrJS6ae",
  "key13": "3SZn36UWUe7gzJ4M2bgcKfpSnhYqvdgvozvPscGyg1xKUfhxAFivBEMuPGpGSp11zFi6NTrmfY4sppsAwvWbU4YA",
  "key14": "EyxtJ2ZXewH3ihg2zmShXskQa1JJcUJuQVewnDybWro4nHRCptBx1p9SLhB554UfB7gof24W1Scg6cqpVZ3NCA3",
  "key15": "3TA7Db2Zsin9zZKXv8prhekV34bDUY1Y8oAtvkKBhGn4ipuv3NCXsCjspZ3kYJQDTZRUbBzPEocvNB44t7a6h9nx",
  "key16": "4asjNNBbvuC3L5ogg6ipW9M1B4osxZbrJxua8c9jA6N6brea9RSpGHKGm8WAT3AenGX6B7VB3s5uXEE15UKpN9Yu",
  "key17": "4PHmJKqvGD5vXrTiUD2Tsk4wMcmCfoct3NNYxz8iHrmHkfMwuZJiFT47dYhDJXBgSiyitYn96utXAW9y81nq7MAR",
  "key18": "2X8kxZxRN5Uw2SH2v53r3oFshbV26kJ5DkCVoNT5PemBFHskX6jtRGYuz9iJypnPcj4nSc1HovnndbsyexigUFxX",
  "key19": "5Nun1oihXJ2itheoDqTV1LqBWwDNsJ5DuQUeACSCFJuBRJrV6hn69E9TrMYMRywxGmkCq54d7LNhJt4gTYksoAmb",
  "key20": "5RXMbxdtFE1NH93Mc7wnVFntxmVVvp52UEw7cpeqiF7jM7W8q2DUSRSqVdkFAV3BJ8xbbtVr45DatUrpumWJQaGf",
  "key21": "iZVriR9qqJEGAoKa1B2MciUuV2JPGbL9jz6VuzxEcMsvhjRuskGSVKmgQjSWZ1F87ZssxYa84p1m2PVSc68DHBZ",
  "key22": "54MvoR2yCHgJJKLmwFZdLxdSzrQ5nDJDAtoxrdHZtVgevCgqQ5pACARcsj3uP4W4XtzMyoJgWScG6sTenuRcn4pn",
  "key23": "5i7hFf3a3K2vheE22N2CmMmz4uFGVC3PL7bKs1Q3vnCvFtH55UUkzDabLKLhZp4NXbNR1mzVgL8GTt2P68Ya3hK8",
  "key24": "3CuC9c3nKkRBBS2U5tgmutn5TK1sbXhdnqiB9YgW7RxuK2uxE2rQNM239kj35RnmvowKbGhS8qezi9BpGKrf2FMY",
  "key25": "2NMS6oGNeTEnAc5rq5DdxqBC3jTwA2sMUhmv4KNt21w6m54rJnPBkPPQyg1kJGqsDfX4Fe8rKuMreUMCz8U61cJM",
  "key26": "vEMmYA76Vm97Qi3cvMPeqnV6dCQMRMaRkMw7voWiWtUqMy88taCBsP7nmbSDTJdLuFXr4w21m8QJAiArxBxrHUW",
  "key27": "23TFrNew6hxYrS7M43g6MrHzYnX4kSoQ3QtkwVHWagkb7BNpg63bt5iFQ6zi1WBdKAQS3zKEXSkzoYuqSMG9GHx6",
  "key28": "89xvUpQ4UUdYm7qumQiRmbFsqmtWRMSPRox26urefXgU5c4WAKMTCGSbDdyvEeuSKvxX5EwfY5WH67oCTcsm3ZM",
  "key29": "4r7ALU9JjXQsQ4D7HrXp7hbY3cyf4xmghFMZi4FTeHvDUJadNSN5RrV19kCFRj8SNHmTHpkQfWomrSftZB8zEtQ9",
  "key30": "WtTP9NaYivQdbyEL5qQKRPqqBmUQ9pdkrfbRnV68GdxZhT4swiJxwiYb2stFquLozoMHJtXcTbtmdrWXFCq56pE",
  "key31": "51DoKL1DjPbM5htGhkn6DJnx7ZHwqpcWd8MbsQrm3UhhKE4peJuERaimV2Xb6ds491LWmbRGKd9AsYztTdxAYkeG",
  "key32": "D6mYgfMUvuxYbxRzU6wBNYaKsDyZMWeJz4HEKzWb6KdgMdAEtg2oGUgdaNnR6mzfmkt1jottQCM8FVsPLP4NXi4",
  "key33": "2wzxryr24zKD1NhKHEjRvaUpTGScSoW3Rpjy7D53NqwNJD6RuSBWk4U2XriYPGcJorNYF18FXf8gaJbgW1V3obQX",
  "key34": "Q57vWkyiRTU3akVAeJ3tEcFbdC8boo6faMNu49KkfD8QhwuE1nPsTR1ozx21uC9Arzz11xh8Db9t5cXTHsn8nhi"
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
