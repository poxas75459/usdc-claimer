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
    "5xZGtsTou51Wa72AC2HdyyTDj7WUGJmrCXMvhUXLuToe4iBQyi8boMYS1nH1LaoS6VLBgQ9t1VFMf7FW1DQjSnTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWhVEPiSSGQZdDA2TZT7VCKnQT1Azkiauchx7P1U9CNh53CX2Nbkgp1iT2cLZagWxSMawdhVhxNxL2SgRnpRvzN",
  "key1": "4ThXWQM7BER5SfvAmMge4GxeuhjmakeLxzSwJNi6FKeuu9bAVHg8Cz9gT8uJkat72ZNXeCsh4TdE59wiVSjBahVg",
  "key2": "46tWfee4FeZW6pDKEERDHrWR8WrQmiqe8CnYPv3foXZLvwWoCnuPHuqadFQke7QdX4vh4ohxFEjrsNJWd1YwwSRb",
  "key3": "3jpmDRzqgRKFJVcvX8csqFT2QRGzmzKAEfccMc8eZRjbdcXj123hjmhRrJxasu9ncBhgLYDpnv7esnjqqxks9GSk",
  "key4": "659Sq6ykh51x69xC2WusdcrTpWyr31JchBJ3BLUoGZgoRmpgVYvv38dGRibLXzjGgVcZHHj6xukcw8fQPC9T29Nn",
  "key5": "2RxnGfBR4pxBaBuRu9DZgNaouSqML3V3bsETvSkJ1rF3jUZH5JNyJf1wUJT2Y2pK6TKvgZzytPYshdN5yWJeo1Tu",
  "key6": "485creJM261A827SXkj7cWFwUEfqPEucdC8h9G9bT1LfdRusSA4bJbcA9Jms4aeaiadEnqne1w8QZR5188csiWbi",
  "key7": "5T1qqPdfuqjBrcfcWV98oKQhPcadeknd9jxPPvmK4X27rtifJhPW5xihbUQDevehpvEBwbbNShxM8KnKcP92Gq3W",
  "key8": "DagdocUabxHPUjFuKYSEyMFnWe37td6gZx1vm1MFmL5xrBkwbEhE3g8VMcWqXg3kU1hTuKiAPjvcQ7Uwdydsy98",
  "key9": "2FBkqAFBNDy7DGYWuZn3YneyiPt6uR8b6pvRVncxM1Qv2uUxCniz5snHn9gWen7qZRQ3Cgghw71D5n7FNnXN6Lg4",
  "key10": "93Z4HymnN5Ve2GUVB6XznNFQvp2fgaDf2TcncVoRLK4nNxfebzJNXyeGkgjwyL6pMhxBj45MYEt2eWKQz3EaAsy",
  "key11": "ws8rm3Cquv1eW5APKguBXLS6kHvCD7MYL79bNkyhmLHPNfKQyLR6bERTk9E7PMysv8rzDRAUS1LxNFUY4Wwfmkt",
  "key12": "3AboZQyGA3NFCaPY2D64GFPmPunSJD8d6f5FMp5eEBKJHTPBP9xe7qjDLAPiq84aoCXL6Youdut3U5kGL248WmDG",
  "key13": "5fx24yLw2cXfL5Qy1r2g3gsPmFURJMiUSxsP921jnqv3REmfWKa93jc2DBP8nEF31XGFVB8gwPajP1dVg3bmpb8b",
  "key14": "2PW9yUpq8A65tuN7Cqun6xuboDgvzL7EafmX9mhBf5NVLgbMdDwCFozPKtHhew1cSuyZ6DaHQpCQvdiD2pmo5ana",
  "key15": "8B47oa3RoWvERbjXupETY6zPwgh8BEaxkFh3687MAgBXWZE2XyJBHxW3JpsxEDB9U2oeMT3sfU3cdvHX3ZoepeC",
  "key16": "X9sxEyR6LbNE6of8e6JenH4bMNRCc83rZmGMpBTVvp77ccL5qHJEmAc74UiXxKok6axg9P1ZG3pF3ASXLQNy9Y9",
  "key17": "2eY91xeN1PjDkvbabAHnjEXhAKAaoxcKdFX3pzrYsVjLK5pN8LxJQAnUWVRthwXoMaP5kXCcdBW1XeZPeMiiBtbi",
  "key18": "66yzTWPa7BapwrdKKt55Jnd2748VBxN5dv8kPSMTjvtqYrwRJQeTPGc18e2f7PZFbCQZeopSL3SPCrgs1959Y6Xn",
  "key19": "42qhKTA1JZsg41DBVUmJg2tSCoZZRbEoCkERxX1oMekfWXzrRgghaoRXpkzrCaCT9QqhpBtWDzDd3vtK92244Sr3",
  "key20": "3w6Y9ef6iBfHSsVnwm9t7V8yrx7NGsyCFzcD5kKZJbUr6f1cXJmJqgKxMeThLWm49QG2BWaAAMcpdbbuXkvk4HT5",
  "key21": "3tjqsBdQ391VoXsDXEbZ4xEkhEq3pb6rxn2DjhJ1Wu9SPHCXDgnMp561sqbiR4cixBTUmwHJDxTevy4CTCJHgPXt",
  "key22": "Brs89zwvsiktw8tvhGtkiYhAGKYpJZwKe3nwWiUjm1tWmGfGpdpEDiy5YatxmhNVtCcZfasv9yQuU1tVcCctpvC",
  "key23": "4KEdRLB4j4VWvGY9qqSdgmDjke3qbhuj8zcz8ZgXNzVKyrvk5j2p5DWPmHfd7Mw4FfeX1sNoRepwCLn5eNBwTizP",
  "key24": "2eWdRFjv53JDVtnxeM9jSLpjDZ42RiPyaco4KEdi7XiJfK1ePKGbKSEJZ1H4E7WWJZz5KBmme3NhM1s4XVQoPvD7",
  "key25": "4AUf8WBdZgcS3BdAR4kd8pHcKhLGHYQ9F9WhocFiQxSTZDwoc2oDP66Vu4qAKGEEkciNfah3yX8224j5uHziKDCs",
  "key26": "5GhP4xcqLQsyoDMVJVuKHh6r6D7sDh8genzxMXEyWvNp4M5zR4Ep9EbKJ8j39BEyLY7aSVWy21st4pqCZMrQgWFA",
  "key27": "46PEga6uUf5arHys6kZWzpiRm1BTmxjm1CFWk7KuA4UsSvJVthfw62f2sJ1hahZTJsLadGyBLv9dBYVXrLoFiqPA",
  "key28": "2FvDoLDMjKoDpYf8nzP5gFQdPBGaeX4aYY9fVRVDmsVEmPMGZAYcE9PSEfFcwXHZi8QTzaDZWCMevvSztqXvK9QB",
  "key29": "qPJrAZy1NxDTKKFT1saBsn9miSpCewhGihDJjLe4fXzGoM5bpyQbQn223JMteDc9pFMYg3178iAkwKhcXcZqxQx",
  "key30": "57wnnKcag7MWMquPTWoZMkWM8uUaqa8h7risEMjwtYNN9nn2f37UtHGbDse1d8rjZjBfxdqoZie1ropCecPeE2hK",
  "key31": "4ChhqW4TNTurGM9ErFBb2eWjKWZ1H4eNELwP9fSWv95jxPSdx4WNn8NdDh4BWEczR5G7qzbrh5fY3D2wE1qJdayc",
  "key32": "4R6MnFtKMhh28UdBuK2jiWbTTH4kyKgozYtkqUCAMQzGoKwfg4wo1zxKWMHGGfJstaNpS5tH2hBPF4U6zriXds2q",
  "key33": "58Jc3um9WQS9gF73rwtFPwx8BARAnmPV9hHr1qMvTQsUaVDPjAgSm9Qa8zmZX83jqFBP46vSoCUuKEK42rH2eT9w",
  "key34": "5R42udHKuraKDhkY3wqB5532pYpUVciaBSgeBNsb6zXARJFBjn92uEyLD3XXNMuJQ87gMujVR1EnHwvBpTCJ36vb",
  "key35": "51vwN3Bytvv5rcLEFedoKwt7DecvyXzpZFqz6hiWFSQsCuQfdEWYXAvoSRCE7qWJfJgafzu5XFkLJRkDQsYMWvXB",
  "key36": "U4v31pLpFQrhy3aftwxFPyYSJp9naKAaMonnrnFpAH5tdPLDGnAa4oD3vNG8UVJZPGDGcPS6CtauTupcGCxpHhL",
  "key37": "2xRV7FVNENWEmBbF5dEx5EzafjTLRomGN8WmhxrjDH6TZJEMVaXo4XL4SDkTL56AsKtLdWYaEnHPkw2nBzBM63Hp",
  "key38": "yZzG8CmipF8duE65PFXGr9LVYy8b8wnJUAEpMf2tHXHymihdEYFnMfhaXdAMRYUwb4LUPbFzKo2byV2vZ7WSFPz",
  "key39": "4F2w8fzs8rGJFZA7tmW3knwChZxLNqd49BRLqGtJYdcc39YPtyJCVXnwKRVfLxHaR8FmnvPjmUQifwnhqnUtE34P",
  "key40": "3syjXeegaVSh3xF6LrXP2RY9YFydpCkMd3NM2MZwE2W9ZzKCEvZ7CN9ULX4jMJvsRtiXSxJEfVbjyukv272xctaM"
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
