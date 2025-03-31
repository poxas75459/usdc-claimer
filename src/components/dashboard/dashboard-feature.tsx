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
    "4AZhJcceiAtFLPoZ89wuBuZMamjk9rRFykqsoXquZBHoiR8NaPgcJtqxyVyyLPqQoz36yiPgmPeSxXnLGwHKhDtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ci1hi2pYw5x2fCowseyLNmUkhJHMf5eTyBYEruHpWUDh1HeWZ4hb17hLksE3J9B1Z3B6GfyAAXgoTJjyaqMY9sy",
  "key1": "5zCfoDmJGCaVBc2zpJ6vgqhqwgwCnacgsPPYDpdWUnjrtS3ztSwcjf3x5BhuMgiZyFuCQvTUd4cFPWVScHnx2MvP",
  "key2": "3ojzz4PPYR54ECE52N3ucPtxBXC8ytoJCwL3ZTVEoTqcVJeNhqFYDwGGE1zXT5oGNLyWcJMzEmtbGsR82zrNcWPj",
  "key3": "4FCvLFXVTejqBhLSKY4f841c7atx1dXwDnan7Y26EFDUcGNzjr7eDP6cmCYYsjPTY9jK7vExyaipMnhmGNkr1bBh",
  "key4": "2Czf3Rvu33RmCWWKTsJ6aG5rY5LowgDebZsCQLWU2WpCQATqe7NtDjBRbHKJPcWfiirZ9mxwWnxwpvmpZFMbj6KU",
  "key5": "3p6WVeFbuATwa9ygUDS4eZNNRUhV6GjRMtfc9zAbVGKN2bXjkxqK7DMYT7FMQgEWRzhRaSDcN62HdHouf7tmMo1P",
  "key6": "3sqhaTCdnSttGZxdhJpX3UarVcH2MishTCC68i2Z6Z6m9qsDyzET64hWS97d3XpjGfJBu9QtzkH4qsh8rMkGhvX2",
  "key7": "3M2bj6vcyPNTvFpVuDfaVGEVbKcCSotZaNmzTCJ9zMQTLwQFMLdGQBMpDtSRXtZQnfXRwfPSVY5wRMaXcGwZvieN",
  "key8": "4Gi55b3bLQFYWJ4fC25MQZ4dmjifgshNi1UC3JYZ6AB2hApQVkKyzNnMN5hpdm1nsAYNsyUjnXY67nzNEzoTvxXP",
  "key9": "4nkgQon7HVQynxQZUKo3g8TGCEYKpPNHyazA5qUDRRNzbjjRohAsHpZRQzpiE79BiqmKou3vEvu34H872shu7YBk",
  "key10": "4DDQEJTGTu7U5kHQhBkpPZdSiD46U1knqNk9nzuALddxUANHpM2TEuHw3SqM9pbchufomtiEtosPm2q8MqFbdr8U",
  "key11": "4SX1amYaWLkaTtrVKyyw5LwVRyKmFj1RW118zcjB3QA81BcuohsRTSBr4zef4rtGU3Q2Tr7sMdFp5ZGdE75wvXFF",
  "key12": "2XdQcFJ52K4SZmTL1CMSu84ohQhEw17pMvAhdtREyp14yQrnUkGb4U8BxmQzC4SSwMGkzfanRHcXUqJg8JWS45LG",
  "key13": "23CTcxhWGceeGqegFYyzz4uYGdgunWg2JWVLdiQDWhWM23WdrLtbcw4NEopBKASzbhq1tmH5X2bAWq8rBeXKtjkW",
  "key14": "3mTBeMYgHc2wrkY61dDsYpdTTQgTGTkFf3Ft5MNrkujoJkB6qVBWoCT6kRn1tz3CyrYJdvRUMcnQLPZ5dncbMwgn",
  "key15": "5USJckt6P1R9aGysQnwrNNAUH3rpSGfupHpMNdkE4UaQmCUKoy94cWgTJ3sREy2J1AqHYMBqQ64bLgsGHZ8GUguZ",
  "key16": "5PLUMmx4WcJbrBsh7RMDf15XCPbLFkhCRSsNYd271H5mubf1CqcLZiJVYkyK6FoTdvUSNtPmcfRWB2FTxVzZyGV9",
  "key17": "4vkFoMtQYeGa1sSndqpecsPR157cXzUUr4fTsmfT1LkA1hPTmrRib2uAewDDtHmuLMGoks15rs8ntJXHHRbUmcJ",
  "key18": "Xj2vNuGq8ELfLYPy71S8ceskfPAodwW4EP5nkxvYfdcL2t37D1zfLtYyaEN7BhauJ5NZqBvWm978AJnfJGW3ZsJ",
  "key19": "58qPa1uUH7YNsAvuLwiH8RroJ1srqCNHjYNXz7De6cbDqr69VKSyTX65zEELASaiETeundNwF6vBfFNjTRP8UJwF",
  "key20": "kNc4dByiLQe666ZQsbG3gDuanCzaisTxtYVkLGdAEVktpjfTWxDsKQCMPYCMZcZYmJJnwKdPACo1R9ZvGQgueda",
  "key21": "f1dniEzWf9ZBEpAAsR2MjPpxETvXzMABNA5jL6Rtrp5s8jdzkz3gvspwYTVmqjLqBWrM1LF2FgiPThjFqihkdHL",
  "key22": "3aUM8vhku1na7xuaGaVzNS5YSjTqxM9dzTUnwASbcfzDBF4WL1FRFmAgZkCZLd2WVGuxNDz4D5cGcoMHKGsPX1vb",
  "key23": "4qJ7obw3a53CvPdeRs5GRA5SmU6RojUc9hqPCJNUw9f8XxxNp1eWZpafrnQJSDY8ofQ5JHy4UkacTnzainTCfJBM",
  "key24": "5UiLNWwiWzt6VAVYqvQpGcCoGptaZc1nwRrtLmR371kQ4N6X9wWUSpuav2K3ZL5mNX91GVPtTcnuwLeWfYMNNqGK",
  "key25": "5JknR5zPt67WYnf6vXFQiYUbZyngfQwLFh7AqhApkX1HdNvuammGHYoDM8Pv5viphn4kGTvUyP21Ah9VytfhTnZF",
  "key26": "3ZqvjNWJEBkcL8hKrRcBx4d3QT7UtrFoPLq7m4peKYPrHC5nKwYiXWxRqVG58uFqB3xiMaqSdU5kN1wUry9XumLt"
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
