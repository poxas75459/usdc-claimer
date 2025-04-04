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
    "4vc5xXTRLnpNeooHB9pB6c4yw62CRG9mGv62urx41C1rwc2epDCz1NQP52R4pEw87ZyCPw27yP9f33NtRwu5T4EP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3PcAociT5eBbtVSZbnnrD1Y11hFSDgxEs7di1p8k2Gq9ERGjuGvJWCYQF53mb7MsogykjswGCosLU8fkVsY8c1",
  "key1": "2GVN7hVQQeoNEPQxwEK3YBKFYHdSv9MjZCbHNKCDArkHz3PbjjJZyGXS5Cqm1oq5aUZmPKJGk2uudcKuy1Q3S1fr",
  "key2": "3CWQGL4bytjfB6vg6JnP8aw5AHs4KvGLsF28GauPbEooWhXz9YeKqYRM9BBDd5EbbQTHj9DhLxyr8oWHYTdW5M2U",
  "key3": "47LZabpN55ENWDdSTZ4WC71FxifTwwSoo99q8cSG4mvQoBQtUUebLWt1f7voFqmtfhcqBhRTsNXB2ABm2kXA8g9x",
  "key4": "3TQDky57cbxE3bCEFXz6VGGE6kaXXLRna1JRg5G11rii9ZiHxKXr38ijvVSkDNVKWiKCksnhsZdGAit4u5ic7Y9T",
  "key5": "wqzKkp1MdyY3Cw6tpVjz5HesiAhf8uTzwNdYTticWT95tyEosdc5aBoTRa4BFQeZ2oA88ygsMp1KyY6a7TCkSxc",
  "key6": "5hbhLuHEDe11hBKeXX29qmzViyYepXmLuFmoBeuRWngWRuJVq2929qEwvwCMYTNtpzMrs7tDtmDE7KwknvUHudhh",
  "key7": "4bE9jRxKuKmRneEGpsRubSJQ2X4xX9KpwHdpuWYeu5eVemEAMobteUdPHCrGWww3w5D4qh7tECWdgaVuez31v4H9",
  "key8": "3F9ALb9Zgg6yXv7SUEYcSBbAnhhTzdN3r2VNiX5pTn5FHM9tQDnnWsEsiqb2wXTNWi6vmhm8N9efYe5fnHNgN8ZE",
  "key9": "4zziPKZgf7J8WunvSWrYjuP2tphzeiSZzfTP4k7Hyen8SJXjnjyHC5rWX7Z5ns4FRL4SBfaoKR8VhAZo6GvE5RhS",
  "key10": "4yqiKhT7pjNKRwJNpTtdUjxQoV9ZmakWnW7Mmz9ct2X2gF6byvJpdNqnX5q3puCHraDyNtZwArpnDyjZc2vA6v5M",
  "key11": "4vWxjTqA8mAsqP27dmYeesBhUWJkohgcpGd3unKxWTytTbFtePPazJHHxFJCew4AatvN5hCdq2gkvYPBz3GVzUMy",
  "key12": "5jmVQu3uZCUpypc14zcYoz9ifxCQgoGrLnah8rxLHSR62xgzfaseFrTtPFoc162hvNj7UBLQZfBNTvyK5j6kWX8G",
  "key13": "359h3Xd1NyT8trVjNTTJVJhCZYontA55iAT3Ce2vywj6br6cpGCpdtSksvvijuruQqryq8tLxLeb2HRyQNVEyCTL",
  "key14": "2Uy1YDjHhhsS1KEJUYLrMfz4TfjRYdtftqdjqt99Ptxfirtg2HKHhxHax4hvpb88aYs9niNjWXbC3D4Cr99BKgYY",
  "key15": "3h6dL1aJcsLrftAi5M8vwSAGGP4oVEvCSQrBpphVHKmMC5xs9CR3UyPxfwpNGUD8hjUxXPKBsrCpSXnQp5hQhmvQ",
  "key16": "3tmLQ1Pczka7kDQLA9g2vYr9CN78EnFjjtrkvqeP1sQLjoyEKqnM51HZpEpB9FyTFVugbcbMee8XvX7Um6NVdBXC",
  "key17": "65R5DwbkqzezJFmeo4QY1YujD2nTVPBV5MJLdGTG1Kdu7mZf4BU3FmHUM9V78skhH6xu8BNgsaiCkk6dCdGnUE3q",
  "key18": "48p6gpryauQN9EGJ2uwoFd4jh3PkTRDqMkDnWgwj77KUB8VQZoeziywJnQdeCx2xa79RAh8rX1AkyoF8UNGhrzpv",
  "key19": "22H2omDStsXR83oQeVJTqCdgvkBUkGT5AeYCwwHrCeuhoW7dnScuDr149gNY2xAduJRHjBETnJav9m3LwsxJnK5x",
  "key20": "4PvpNnKC4THKjaQpEaJnJRtRtGzhetKGnWWuVjahwqNJBbjo7oSStd4oXe5ajxYV9g1NKoE7UwTyTQGS72qCD4it",
  "key21": "2V2YqpQJHDSsdFEzigwxbmsh1bTC5x4sCXE47aTRR5xsQ6TZpmM4Ro8M4Eo9De41GpakusEkyE1gCpbospiKVBUh",
  "key22": "4M5a43AA6dr2Xs3scWfiDXnbSYB3UFyghkiSYGR1raWDd6bEh5k9pYW9npawLXKEiWrL8cjSem85uhvkg47Di48Z",
  "key23": "5uiLRR6derf3cntUZBWtD9Fr54MFi2iXNa2FcRuBsDQyh8kVVh6KzaBZz6brzE2XZmZU6w3i9Ja6pUm1k1aJsFqU",
  "key24": "3kDu2hSp8fo8f2AFVz8y19SfnUNmF9TnKfTBKz24cgbtcpCtJuzGHicBQ5MMTJpYWc1xLvdcsjFHHCH6urmYfeUg",
  "key25": "47UmkLcmBAH4mD25zkUS3LtgqLdm68oga5QX6SSsSxGd76Nd8kLJF6mtjbeNyrFLmZTH2yCcEAbqGbtDixta2S84",
  "key26": "62hraUJERTWa2S7tD8UmNJtvmVoUH3Uw9pkjtqH8ccmLy5oRWH6d6VaJs8Ajh5vkn7EuG6P6u8HdoqDiaoTAztx6",
  "key27": "336tVNY3wwXt4bs3QzYgkbuBDoiheMfwSmkaGLtj1cDVVw7YeZu78PHzHbyAYqw1rnFZpUZ6oDrztRLxh2wHbMQv",
  "key28": "22hbFy3ZNPHGRSV58jkGstuGoKDDckB6HuxDGhmm3PRqTt1GGYyMpuGvA4DBEjoonUg9VcyeviLmvBbioCx4CXfN",
  "key29": "5T6qE1arAohqJsT2AMcUkpM7yFNFRiP6xDS4VaBKxuijwWWWjAcbHCVudwZhuihKynoXFoB5XSk5F9kvcEEhkarS",
  "key30": "X7A3Sgkx3B8k6qacATa1EJCw6pW1XnZn1nEsamG75KnEkSw6eWhz5kck4igZnzZCXJEF2b5ZmUjLg5y2its7MyR"
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
