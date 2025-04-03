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
    "LnMw5cHpbjBEDQqHJpdMHcaaNU6mwtuN84ezyBkoPXLzxh5QTAzTWhks7o5yjnziPF36yj4KkdKQXJF2GaNdLea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1W2HrPhh3vmBJBVds6z4njRSMHyADjZv4Saia4bo5q5maxwM3r7vxhRyP7yuPcqxRkaTrFsARejNrAVrAtnyzJ",
  "key1": "4XLCV9WXUeDvbbncMTxvg8URaHij5gK3rqUZTAPdH45K6ubffifJQpEqKCt4iZAFFfkGuW9L4cTQu6dembXh9tkP",
  "key2": "2M9TvvfUjZ4hhSKhEpsfCZe99a6gWaQN3FBWECCkkx3mHWM7qFzmEaTTGwj2f5WYGh7xadznY1VaSmur4GP5xfqt",
  "key3": "C7P82bAfaGVMmNNTnmuYzB3JD2mfYTy8hhM6EqQd3HthW3tN3RB7eGjTeDGnF6eLYLpCGexAvz4WmNEqTNFaKbB",
  "key4": "5GmkMcqskqagkmZfoh79hVrQCwbscDf8FUjzh1tAQFSrJUjFPU14ietS6a2HVBs6JAzU8a7K4szPdsgoQzZ9PAbd",
  "key5": "4RYq3d9z8AnVv3z3RCBpEneWopNx6n9ZBfXg9Zh6TRFZqfXeYppFGbxDVHJtUvmXC8fx4QQpiSFszwEdrHP82TAb",
  "key6": "c1ZcxWPkiv5CscZcErebD7AxtrZ55C3hFKgsv6xjBzkV5tfSSxhPDFaKjZJXdy7iC9omuQfvW3B9ZKJWa2YbT7N",
  "key7": "55WM94pQm7uZV9Hre7RN5B4TA74a89AXbcwGxkjG13J34e1e9TVjL4LLR8JGssC7tYZvLuchiE2v6RM641ZjtrQu",
  "key8": "5m8kGVTfhGDMNNPd8kjm34B5g4d67Xc7aR9B2euXK2hYU3MQtcDWSRHzztCcVCxtmKkZf7oZycUZzfHs1Ad3oFD4",
  "key9": "41fe2Bbj76yJv5NHjf8ngn3eAcKrWneFpm8tRa6Qx2dghCzrQ2Wgkha2TyQnWwQBdVc2wyafvP5hor6XEP122vMo",
  "key10": "32TeQRnRqMMGbkwRkYBbfRzXCRYhVpPBfg6vqmsu444CjP37v1RxpELrsS2PWBjmUZSD7sB2NfuxBXVE9PwX6XgZ",
  "key11": "4hUMCs7ANzByZyi61gK64a5529vHixKPXUDVYeJU2YDqyPknr5kgAneTPLTmnME9SriJGKhJH328gM6CJSRKXDv9",
  "key12": "kywsPwznNA19ZipuLMwLXEb8GEVfevdjrTAxMpQYN7r9SL8HmkVE4Y8eAxRqCwbNNLAqVbgHyJjm63eZ9urcM8p",
  "key13": "3aec8PgBvgjs8Dd4LPF4YMn8cgMMVnGw17SeHoaossi4AQuJM7WcZj3EEBgi7EKMVU4st4x1RE4g5HVDTpvrPMBx",
  "key14": "5sNTEcHNte44AVMLstoWs7wD53WZYWKMbxErWCYq3dU8kCtQvSvXpHwhXjRowbi5XzBb7VW5D6PA2TPj9pAzTXQo",
  "key15": "C5tWAVjz7tRnL7MMapNGduHmxdGxYbzyNJxoBnnjTcgom688QXiQwHfy1Jqsshx6KfrAung7Sx4CPw1RGYaeXjp",
  "key16": "2aWZ88AfVCz8jd8dGGrbXGsTagTY3XKrWG1hKZArYAMtdhy394GhWT2HnrWZBu9ggqH7BQWgfw68rUiU9fSyVgqh",
  "key17": "4BT2ZboJvVHHuyBjWtHXcmZNkmqdX19cvXnbNxTt5egRMk5MtYW5XSH7tvaF45KU5x4Bc6fd5mt8GNjeeQC87fMC",
  "key18": "2YUq5gL7Ui7s96oRxcjirMRkrpCXQxaKXDswyRgQREiizhq3BYMJ81fVnpa7fMTy46Qr5dRZubmqnzKuaLFuRZgh",
  "key19": "2eMGjZguvsv2QWr2CHJxCao2aqw34h1nMRjYLb7P1TQjxga6uBzzSS8QLz6iT9XmhpCpRpv5JknUDzUGT1H6aoSz",
  "key20": "2SMwzGC4PntXSNnKR3534HvRsifRXW1DNZs39Bzgpyi1cHPBqJFztGuk3aE41Vyhfqqsf1pxhqX84DGD1jxBiX1H",
  "key21": "5qbRbRbhxPjdfWQpsd7qZZruCRQyvkWSkGdVXU3JkedP8L1ARTkP8sjFEFeoBnmcDxHcXH87JFAgYfP1hp75k11w",
  "key22": "2vfJXeZQvvkZKEk8z2nKQvAtZPTXnhgvsvaF9XYoX8Ai2e3diRa7kc9FVVxEeoFsRvgziVgnqvavmpHkRmyx4ia4",
  "key23": "3qDCL3xA1CB22Nes7yPM8ikPKgEH7Mx5r35zdCoV6iVfpJ7iJ6SUgYLNWtChZtxxgfBBoYRACEHVXE5QaqCC5wpA",
  "key24": "HwiXFfMe2894Dau9JDtNEiGafcpLrqhZDd4NLXxoNMYtdycGN4bn3NXF1udaADHxFHyntdnaDj7jTzd1p4FgJrU"
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
