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
    "2HGFycJdpzJ9GU2HW8hrguLsVLMK1XKZofrhMVnweeUgihFsvtzMt5aXZxsfJxADFSqM6R6ppbMpjq9DL5wwWWWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E39DWzWshWkidfHpQQ4bP1DDRhKR6LpdyAX9DTLpG4GgyiujGtMzivfTverCY6Pn9stpgLDP6JWSnLxXakeHZeU",
  "key1": "4C4EENVvLUySPXTSMgeCdFJJfnyJfqQGSHabqusU5zmYXyvhQ32nkauKKLeiN6Nxoz6tsWyoSAK4nVUBFSQk4eem",
  "key2": "39VznZvYs7486hpEKPBXkoKcBishYVzUC8UG5r4FWnRwovAoNic4xx4ps1zAGZ36KYQFuMcVBe21ay6hHDGmgfaQ",
  "key3": "2K9RU6sgEXVbc39ZkaPRr2kAxmyeLqJq6aiprBL6Ghqm5aWrJExyrPUDNMm1GV9j1vPV5cHBvjhYAt3oiZhA7Fkn",
  "key4": "5iG89FxMMjmYQ4dMEHjn4NURDNZofKr48PquWVtif69x2ETh2gRZqHwqtFSh9H4SrFXJCQbNtWLPvgvcgsWEKGHd",
  "key5": "5LntCqxkd1tthfScbwNuruZj4i4eEfdPq7rGgJCaGnBm8Q3bZWSduA7c6QgDSsmMJFfmkdv1rTz6yiB5LN6NHuaR",
  "key6": "5yP7LnK369nagjvjpsvWrXL3pG1N1CWf7QFw9qvhPDxtY4t5Csfhz37a4t6mQSkEZKY17rmiZEhkV7uviWvukfZW",
  "key7": "gUgiyt38Y2XgJDp78pWqypDvVDzJDAEFjJtwws9oUFsC1Yxe8tH6UcC7K3iPTRmQpETmat5ineefFiXYpS3PWA1",
  "key8": "4fYp1zDkymGGXvjrr9R9ZPbQZxKWx6Lcq2BBP193rGSPumCgPsNteGKhicoanDdnhGhahsN2wzi1czwzrHSy57ba",
  "key9": "Tns2ARYCiTGpWtbfiHLyvUxGWrhfXhEq5F2WMCJhAxJGoLvnmUHaqD42nEmigYc4pxY6V87XBygudZj8EpipeJp",
  "key10": "3NjMPWTVkjKTtL5UUMfJ9QBxHHCgq9pfEGqxukR6VVucCjuXcSuo7fqNQwPzF3izc2kJaQtnxaQMGwFZjRm3NW9B",
  "key11": "4vNZCkkG3XPGi3PEDrxy7n9LCaQbdjj6oiKx7i9Ujoonxs9CSXwYBXtFM5W54RQpyQ3j4G8zqPGuNZKAoCAf7eoA",
  "key12": "iJYM79dKmLgtru7Rhx5fdkDpRCrxVyAFDXejUmCueZnPQd6UxjMLuh9inDUBsTiZA9kDkeW1EdGzZnPNpDeAs4a",
  "key13": "3DF51kZimJvZG8jJGCVbYwpWZVGXyqT1hWVBbAb3hwW4ddfgyczTYLrYpHxHFzNqwJPULk7RnDbifWRajG54N479",
  "key14": "5fHVrNKxPNqc5KsN1UUg4fuZvCqod2YDM1as8LRTNuCaPYtjQ11DKn6HA58N2E5EV14qgHGyZMnSatxwdGCMsB5V",
  "key15": "zM1HLNH2sJ9ucveu3p6F3dGspMZ74CberAjAoGKdhMHzEMirpAfxGZrRRSC1vxZy4sDStVCBRBCsw9ycLCXNRqy",
  "key16": "3DbGSrZGTBDu5jBFjuNERTcdAyoMmmdxALu6d5JpUChHTueJNQLpxXt1mJuUfcniwEizAqihW4seJm2ZA4qBXK19",
  "key17": "3r33KyPJW6xMx2VFBz5eTVnZEdkzoTvMaeNS3iah6XNWy7EJJq5KCAsmesPiLjJPiQLehYNjnh9PUGjMY9YDZfLd",
  "key18": "3nUH2wiLNXA9xf4yDGmKstFtBTrZRLtJ2at3wh3g4r5qS3gfzc7hDf7jL2UfFqbFHCDuyvevCEagVYZny4NVHiew",
  "key19": "4z348KoUiR4PkZvtjfMpxktuX8BrtUmyncfxqsv9mnGNENUACmpaYKMgjYmaD8hk6rG3YNzFctK7T2Vjmc1qauvi",
  "key20": "5hGUwv9NpGffRF56yiCerjEmqSo2ao8uUC2F9LpHt6BQuPe1TbBvHwpx5AemFpZucRFD2Ch1pBMRgbcQFypdc9kh",
  "key21": "34kPxNYFYauWx9G1ZMd7A83rvckFqu5k7XBXL7h3fjfXwKQhFKKoMt81ScsSdHCFuvqjdnpxmAV5hjR1rvrpbsAb",
  "key22": "4dnqXi4fbSJm3Y5j4tMQ6RVnQKczr8nPZ8wKjDb2ZPAXn953jNjNYcjSn5p3W5YQPYkPSMkNXFUh26yGu5gdwjs9",
  "key23": "66ezDmMivp6rZXpvCmkv6fd3r7mdELexxeW77j7k4HQ9XQb58sbb3oABXyivGShgXP9ZJPyE5fKr8ZkcX5bqLE2y",
  "key24": "wdUnmSwn881159Xyk6nKP6XW83c3f6grhnXwcx6boM46kVA5wcPNx1DqELtKLfk6XsusoTq7Xh3ukHgBbmyc5qi",
  "key25": "5Hv8DgLSAfBDqX7NpM5TPZEqyUckaTQY6PWC1NygdzkP7xvqYUTy1WcCYAzdjCqp5DXX7o5AYA1HWsqbwj6mJ7ui",
  "key26": "4vRotLwnXb2MNhQw9vMxTjcae3XMhTMXkyfh8HCwDa12b1VnnGZQrBG92hzXb1He7JKGPzNCNWy5MYQopLwZQPBG",
  "key27": "5FEqcAK9UEhFkSuDaeuqXvZBrWJgerCgrSdMuLncY8MsVrVMz6C43ncq2SqAQdYRHcEVjY1fZR6gN7fo4XKRXoSr",
  "key28": "3fjJeZDp4nZv34ugUnY55jwZrptnxLc1Ff5BvNQA85T91Sra1a8EavT564PcxEJKsw3PYcuGyfx4zfmVZppU8tQv",
  "key29": "VaidH8Q7RRpLH1Kg1wpq3ovCU4HySDju3zrGddJkLMUf1Cft7RRbemanGmYAUp2KEdkRcrDDMvcrDqRuWr5ZDzU",
  "key30": "AwrZivWU5PMWE6aaj4n7gjxU4uu9b1j6BhWLJG9ZCTptRphns2aEx1Awkzh7Ge7UZGb2RNPEe2MhLP5V9MTZ7rb",
  "key31": "5nFHMd64dVko7rJouzMyvPtyd1ud5spzU7FAThhTXkdStpcNnByiTBwN9CDGQWggrcDwHzMHxidt86xxgJ28sy6e",
  "key32": "26QqYr1Vn2HaYT8NQLScUHigv8Hk7hkT1zkgeVLnYZ39ECcyHnyuscQwVHq8pNzmFFc3aTmHos44A9LdZvqKktvw",
  "key33": "4weirM3T5atxDRmmiYRoAY578mU5AmYHjKPWtbx6y4TNUiegcJuo1duZKzWw94HPbnUfpwEbJaPvkE46XCMuDhyF",
  "key34": "61kczh4xnU2giy8VxCN8e5BQ5KfFWFKQBx5GkQsB2Ya6LruQ4qnEQ2TzY4SD2xo4gHDGpzfJ4gJAyuxBkcSD7V7h"
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
