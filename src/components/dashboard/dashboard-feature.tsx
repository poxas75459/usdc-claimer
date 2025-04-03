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
    "2VBUPnBKBmR7WYA8yvVLFu1TZ1VPx4GuF7JjA8Gt5X2EETDgbv3aVtWA86tQPXtoHLgUtSuD3iSgoHiBfGkL2Gq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZavmifERhwPrxroe1mp7TY4nMjJvWp4PhFssKJqvajAJHtbhT4fLgUDnqekLKs7nmq7i7fmXPgnpVfC8hMnc5Pv",
  "key1": "3D2fBvbHFmZewEDGjG9oyWsE3chAeZjrCKh6K3tZwVR3jYe7ar9ampdt6GVd3HYWTFBRzPEfPzM3b9fJ8oWHy8UB",
  "key2": "5hwzb1xgdrMGqHXoTtDVqm45Yp18h5799oEz1DZV5cg5sbXygZUhnU6ZiMQtwmzgTAtSh4WCtm39Hw86qww71MWa",
  "key3": "2Liad3yyoZYD6MsmE4ziNVuSmPfHFfJ6WkbqEUiYMc7gxzNiSu4AHpj61owzMUSzy1VvY4aaCGi9X5HZDkEJS89y",
  "key4": "2L4H7dSzyBEXesQv7JnYDpuLZsNTG3u21uvkKqnyze6xkXhSkLxbVNC3ig6pyx3BgaN6TEk3p3D9nW91E277J7qV",
  "key5": "fMXnHAvZy5FZtvFmF4XqP5a5iZTpBdE4pVXehyMGNP4cMRkwMfkMU9nnDPWSNJPUuuQtVshJqjTU8uJ4C5NNrqs",
  "key6": "4P33unNvQkk7Fbvmoo3w3EoWxXbyAiQyd5zgKsvup9ZDSNMSa1CJbLKVKTy8tAxMZLfLgQjtgDucE9sHh7uhiPv2",
  "key7": "2suN6uGywMiCutDbn9yiysyQAopX7kiSVhzrMpzKj973qbubDRBn8kCoiHsNmRBjg2pSz5hnvzerRpH9HNSigekx",
  "key8": "27VEf84Ny7fv4xJYZj7ZmVdDdFhk34wmBq1A6N49NV5WmKUbQSqCLjogKFbH86DAwJvu7YR9UbWStggcrC5nnvZB",
  "key9": "48rbpe1xBCuzYRbJ7V4qgGdJhSS2rak89pxRgUHKkYn2mLHkRCbfVAaSvsCzRGESLiZJXhDU28ejp8mitTgkR6Dr",
  "key10": "3HSaKmi95RL8s64J1LBkZAxNkQo2vFukSWDZbYQn9eZ7f3DhfJRro3BiiB7CM6KHi62pNMxUC6M1kBdzrniM6aRF",
  "key11": "3HiujLNFFz2ADZ84S37VCgBcKk3Uf1CEjf6wDpzQ9EAWU6ZBzCCGatTCn6EPYnzXYs9Xr2QwSNGLoZec4WipwEVR",
  "key12": "2GM7MeRRiwYaLa1mtURdEKtmB79L9vbVvCY9LDHbXiHv8P3DKvdjL5nQh2qiMK9NXgKs7d2TsPJrkmfz9QmXh23z",
  "key13": "4jhu8df3CKo5VRd46QyAKTBKVxqTTgKTyYwtTzFhjKrTGMEDKkjRuBbzjr5H4ZNdhrQLTrbggDyYtb5VM5s7jDKu",
  "key14": "3QNwFb2KvoXu12S98XUVbLDmcao5U56WgWvXkygGytkWqkCqvd4KjJnZXFBNEYYmMQR8BexRU2z15V9pzT3ftN7",
  "key15": "5nywefBJPtgkonNgDjMxn9KUncHvZoUPd13XMxK29QdmuZ2D97KEs2BZQyCNYbGSiuvVPX77AayZdv7ZKt7u1QY2",
  "key16": "42D6jUrvtAwymt4thHwFwEeMRix83afuyYiAx816aaSeGX9yJiR3sQxESGfbXDKAbxo6dioVVk7FoXqMWQ5DWedb",
  "key17": "3UFszHc68GAco24uaWksuNEweNn9bZKwDPEPEH7QxDqhstZzZPw16ZTQyvftg8ybXhgy2hSYr5j5L1HNeq8QuBqC",
  "key18": "BKNryg11eiQf4R1E6hr5255VDTBc1VBowv7Wi2KRXFhbXrsnTf5GE2JAfmjii587EbmtZkgkuipCFzStgeqinVg",
  "key19": "5g2LGZ4CurT6DfrNxHTUVQozHa2BT2ait4FL25tiE5E9ZMf34jraA5x3rYUwkCbzb5RMRbYNVfMRggNg8RYfrSUE",
  "key20": "2Eui6JqvhMz6tJtY6acP99mVoB4EihobYGEvDjktjTsDDZVEpoWnBcHDx4S9k5UrF8BSp9pV33B4831UqEa7GCUC",
  "key21": "3zNFfh9Mtx2nmifP1DWXR1XjD1yMrCo1R42QX1UqW6gZf5ucwn3HUfYsDLC72BHepkrK2M9ABN6NTMoi4c6mDetz",
  "key22": "2HLuskVQXK9DbVy4h871FzfN1oUt6A1Bg6DTzpUstSiJ6foKVsBUHYdRefQo621Me8Tg7zqEDBZuqyRHUjH3EwKr",
  "key23": "2FHSS3D76wCGUzgdAXLUhULhkDd14qj6DiSpWrZ6YFM7TxCZPgvzS2ajHu6XYoQELPnw9iYbegE34Urh4QBZn5ek",
  "key24": "45y22pUKBBN1Uvmq6nhGEqX3jTGnx2MwJeHfttd5iUaraMgvEyyq5cdUq2TUuYn64g2XaLobNNLB2Lum4PfwM3wW",
  "key25": "oMswxyjjBTeZifdsoCRkWknuf8KDr8gacePhdpV8AuRWkrWEe6DFozpZPwHtWNQ8nGciKjURxZdWCws4Ca5CZHM"
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
