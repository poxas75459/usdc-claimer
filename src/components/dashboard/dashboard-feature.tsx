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
    "4U779LHPcHAwckJ2xmaEoYdq8wnaXpxoJfiSFeDJa1tiLsPJAUwz3EnM7jdHB8ZnZfgkPGkeiHZG9KLmQBzjsDhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kQJaBZV5bwN3EfQYm98fU4FLeY9nEc1EHAHPbCyMWXB4fPTXm6HTEMEVsi7PQ8FuTzY2aTHH6uYTttSuUV4Hwe",
  "key1": "2axJgbae6syVZLJuR9Esx6UqxKUc4JuSCJNsgfeWfrmrBQtSbh6rw1SNEg9ZAF7w2PHhS6zgzffjmpis8qJRh4dG",
  "key2": "2eKtbcZSnzXCde443TCm6CbD8RQp1BQFPpGGs4sTUX5r6bFWAudoWqwZ68ze9QRhbmtnBgi64tcadipVvFcaKAmv",
  "key3": "2i5er8tswNTUN9VFg72PEk7BUPyMXLfW9UQxKQtYKozNSvTk1rNwayMxMrX1WGUUmhVCyA9pWEGtUQWR5f4Cr2mL",
  "key4": "54MCbebBnRuFPKHnxugzALaM9CRCGcJrciBmeSinux4bxHsjdnE5EqHttGF46FHcqcwYKGtFyQZkwyrJfBHzd8sU",
  "key5": "T593us7qK21m67NMkmf6eHfeKKa7Hkt8BgkeEU98eYA7rmMubRYafK7TDyXzTpz4GkGtiUkqijTsKt3ATytZ1JB",
  "key6": "5Dgy2ro4YwoNbU4TVtLahNkqJ5ow6CF68tfWanx4VC47g1LB7t7nEueLJ5H6UqxA9fM9xQQ6NPUaGWBtiVS9fy9H",
  "key7": "3KDwbCwG97uBRoyhUoBzvUaXDPxAgBvwLQ3KXUyj6JBiqjvaqMy4vqLWZQ7ah47N56Hk1cUHJWCY2w7SjBH8ujbS",
  "key8": "46VLeBYjayFWkNgi2LkpMFnFHjCZRf2CMVATbucgfT6zYusspV963Su7Xs8VPswnV8HxpZ5hw4UAvynSessBkB7L",
  "key9": "4PbVjdYp2p5JFoaE9jC2Bb27Vqzwkq5vydqLzX84g6LwMcTeRSu1oNk6h7eYeYKMSV2uo4YiKS2L2GfoP4oavoop",
  "key10": "4Xxthd591LgJCkskHYxR5zKXxRthgSoh9TDjoLpNgvjHVxKyS1yiXxBSewLrBsJjoVGtS1Fiy1PyrS2s9pWWziGV",
  "key11": "2dpDytC8NTJwENpDqXECRFmEgUfckYRxkmZi6ewtjvGfsF4V7cXfAoV2FrZawX6nYVKNoyhWyXjZ8FpfZAMk7skC",
  "key12": "2gE2yERQmK4v3suj7YfdVcLW2fsGbDt8LJhru732mFLf8stohkZXU2DoiFMCH5qhrBKVhJUb7ZNTcgb4vzGtL5qo",
  "key13": "3xrarzeVQkf93Au6VSnkxXP2ZBbmAgYYmJ6oAFJxbykiACiyu8XGDTc5yhDRQrjkW42iZSS7gmEkmCkidBAuiStU",
  "key14": "2U2MQh4etJqX9oE8NynXaRA39UhfhNDT4f4QQQpQReAfawkhjaBExs5Fo6PSWLD8hrMBsgpbtMpqVXzLA3MHkncT",
  "key15": "38KhcsG9pjt3WPR2a2hvTJ6fyodDXJ5nZSf1X3QYbdekoAb1UwwNC1iWaSqDSNKztbHDhbCESZYNM5kd45gd3A5L",
  "key16": "2qHssuLppxBj3Cw1yt6qacSZAHsSbkEVuyYdBR8rAN2iFGK1vzdafceRKyu24XFLs7LnLiv4h3FGaoToQtz4fNpB",
  "key17": "5KBj94V28qbNowhNGe1JztnH13p5yXZt7Aztr9H3vzu5PCCkqVC4gEuGckjWUmcT8RZHdkj2LVbXDuaj6sk82PbL",
  "key18": "ZjdcnN7SjQWtfU78B2TYfTRMKWU8jm4a9oKCWWGoRPnwnRh1u8hViHNcC6FHamnFVfyHmhqM5GLT9GgajPAmHd6",
  "key19": "3U3NZQS22fNFzFErPpVEyq3YasUBPmooASnGujMmnRFBjuWcA14BaW4ZRcy9W6Npd1kX75btwd4uY4Kpppf821H9",
  "key20": "5JCAAmrEdvB6ti2w9DHcWV1yKWUvw2cvMaDyqmiGYWrYPVaovEdsor3Tf5s5XCspH7jRtEeKaLygX9oARuKzV38B",
  "key21": "5tkKwNqyGxe8yBVoTiG86Uw5uqrRwe78EP635L3EoGK7RKWbN6vFm8KqQWXNdjjVjaRegSLu55zZDXnDQsk8jgK3",
  "key22": "4TuQsCtGUvWc3v9XrfnKnmxiVuHRFytNGBRHpoMxTeZAm1ZARAz2ptRQXKMd8mHetoumk3VWduWjRkkydZPiCNMt",
  "key23": "5vhKbnTYxLmJTi4DfM57uKSvTAfxKJwTueUJofLEUkRVARQTWGuSrN4MdMzEAFFinXRpP99pxiygoUu7DwdwYLx7",
  "key24": "3L6yiuqtoGwZzkduVVb43PhK41v36Br9haAYSFdd59U2QVN9cEkVZyd1iJhP9zAvzwnBPzEbhcMdp1TGGskaydTC"
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
