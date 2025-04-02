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
    "4LJSA1w5Qw9LyKkd8SfBHqKLFBb8VrLfXVN8AMMBpoqr6FAErvq6QbBZhRqwoGTEjBLR2rSzzWck73qmoxxSkrae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agjPavyNjXbeuLeVgx1jxZ7DXDLCPmXiszfXb3XJPSFfVMNLvyAVvDEPJwNrNo6Z8Mjkg3xMVhQQhJeQQQuEteY",
  "key1": "pJiu5BcFSRZZaK1zaATRhrGCADfuYQ2BqFrkAxsiyxZkvaZFnRxTH3JzGXJWWgzKbdaQTUfn6YhN9qAAVgzmpf5",
  "key2": "3bvASqqRWnJgppztZd5mgQgEapCjrCNUJJaKUNdTKkLb8QRU3MM1gdu97tdyes38mRydFUbjJ7fR5FKKxQPCyr1K",
  "key3": "3jxV37pAENDXWKWEjfEi4D4Xx2Ktwdad6g27Cae6EsJBqTwjJNE59FbqSWGz9jswWjqxs7PcYLf8KL5qjbYpfwAv",
  "key4": "4AKZzQhnsMkyhT1Y4bX9uZVXUoHYKXxGaFRNMjkg4BcGqc7p2yz5brbFeQiEXoS4wSk9YAeSeVJPCRQSBxw8uDyz",
  "key5": "5JZEbrJjMeou21xPFDPNeiJicuERB4XQ4rufCHk3nFw6Hr5adv8NNCMoCXH9bFkAM5ppV44QY5X8aAjuyaN3wwtv",
  "key6": "3ahQCXBFKG3N6fwrSDc37B14KBJXqh9y2JyPDMsrAL4HUKpDLTnePXCDnNaUQna9hPKEXC1fV56ShxbyCPjwEqoV",
  "key7": "jkFoDV9xRZWAoN8M1zq2shnVAZ5gXNc3wiLUgsmw4bwAziPk48qTJBry6nDddYyhZBxJPaSi5bCEpDAmfkUN7xd",
  "key8": "5zXet2tEBmwzsdTCat7sUBVbj7QxMSY7XyW36q8EC5zDHAE4CaxCW6hQ8MAbP5P3E6QpGNNaLZJ3FgT3B8XYMvTS",
  "key9": "4pRN87HVBLFMxL7W9NqM3JFV6uQeonx5DwFDX2L8qSRDepd5ULWVZoBP7YyrgH7QbG5y9dUiZKZ5CA1XdhW1ne7A",
  "key10": "4B8DrHB6jE7L6YMBRz1Y2rE8dj6nGhMtG45h5uVxECAXmxJoSoz9MTu2CKteh5S4q4LroT3T8nfp7GL9N1t8FK4x",
  "key11": "NdPXQJ1TPSpXQuaTKt1RFWXUZUMofpb8A4mxrgyd5MxsRgTDRLqBJwRtrT3oVGXSGwhkWw7qBKEiA3qi16Kj2hm",
  "key12": "27GA3TUgb36ExgFGUGCYQq9Q2t3QNKt2CoVoe2pRuxJ2KKVRXgfXEAsuqPAeaN7WWYVDwC21uKAENVJQm4i4qstz",
  "key13": "4EXemWt6rh8MrR4Aqgah2gd2T7tb5d8UgMP1MxjrKDVf2BRkv9UWJcJv5Yz3WqHciJRzGSaMb2peeCM8ERxgd3qm",
  "key14": "5UAa28WR1KrKVpQ7fev6hcgBDUuu5CvMohG3CDxGk5cJBYSYfiorkixXgUGKwYtMi8UxR4FAd7GeTC2j5nvBRrib",
  "key15": "2bw8Fs4YXZyqkwHFAQmfFbbrE1JSPPChaT8J7qvRWWk76Govostqkhm1r47diepHxxkY3qbFu1S1baYHtR2FtCmj",
  "key16": "46A5G2h3UaNhMiELLBuLu7DQuKfAQSN9ahMGQqLrt27o11kP74HW4sN5xzJ71ippbwJhRH9v2PKVvr9GggbQ93op",
  "key17": "36N9wXS4niLMKHtPrXm28qiFhdk5Le7S1Mdb27mRtD1uR67iohRcdqFLwKWReX7fx2AYASweEUfjSvv2cgqLqTUm",
  "key18": "53iSmPPsQVrMG3YXoqSgkCethtxv7ByyjsAiPw8gKdPoh7WBGYzWqNkdTtRABVofgeWSq5zwYFbi2XYfxdf7nnC4",
  "key19": "5kp1AHwazD6HeJA3FfzMmMqxjGJGrmd6o4HqQTxrsJx7ACn8guNjGm8MxhLPJHWTjuQtdogHWad5XeNfFDskukA6",
  "key20": "ybLxfbXh7a5o1o93yPr4EqCoyVNoC5UKJy9HWgPZVCmCDnYWPBYnRidd6JgjNgkKBTNDf8PqCePMjySkUcioADW",
  "key21": "N4YgC2ScPjnyd6sBzhXX6CxWMu1H1DENAUHgbVmDPkCdfE9bPCF6ZswMoHkjFdLJuMwDPpKu8RQKtr1WndaeS7j",
  "key22": "5BBpiVRvNfKPUhaAETwyb5ffzrerZJi59sAHwQYkv3WietYUj7qpLkat9JfgRrheJmY4xPK6S2p4joqxSkRVbu7M",
  "key23": "28QxMLvfsFGbsmDFYRfeccAkRubf1hGjdrC82mqPrbio37nGvLU4ykFEWR8A1dxXxa2r4vQFZLaQkR5Tf41i9tZm",
  "key24": "5M6VQ9ePpHRv53YuyL7sAFKMRGimzRa5SQQTed9VJ1qA8uZCNQwD5HCeNVHXVKtDEVe5SVEd3TvNkMSJSps83Cwu",
  "key25": "4u7qJQpmWQwx47KfmrnU3QKrH5667Viw3AtzWe97KHbEPbPuLxHuWc7gixBZn32E5qJYCF1CAPJg3uZ3ia9Md7qJ",
  "key26": "2E5KEnFwH1gn4chPp9AbVTdYMSBBK3ACoCgnvR1WEETgbpTHUtWM1CLVkYweyu4fUgpE3k2wUrdE8s8v2LnTJEiV",
  "key27": "BaRXcTszroNWMiS7FoJK5hKMo3u8CGTwoxymQ3vfnB6kJ2vJ2ihRmAsFxYCfFkuByieRBu2EwDzGmoMmBLjDtcp",
  "key28": "4eejF9XfJj4mwtMUaHQ2EiE7AkX5apk812jAfszZ5TWX8ZivGsHkptFTi2pLxjEXenVMhKrHAwr3hwoKT7Um1wSx",
  "key29": "2ZgUnxufuCGJgbN4QAqe9uDFFak2ysnhZ3rSiyNYoZpC5Kt4T6CQWUoyHLwVKSGh1yyMgQdnw5jfkerk8DLEfAPK",
  "key30": "4zGWuEg2CgA7qEu8j2crHq8kZsD2Tt4K26FayP9J8X5PQ78oY67R8o6Hmrt6k65KBap8eDcYJtsnrWzWPm9FxKkN"
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
