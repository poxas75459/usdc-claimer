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
    "zQvzQtsB3hWFsfsMmSBSvRed52Bq5kdH4zajnsbL31g5oWZfSu7D4kSYKGbUUkpj9MbsDwbtkufa4PUvott6kAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NU88ihjGD2FeNCZPw2mybTc9CKqCsXGj4gRkgVMkaSic6aEVYThN7fuvdBfwjeYFJrKbsv7r2mLJ7jJdmCHpDwL",
  "key1": "4jYMcqv7vFsMgxp14i5ZStN2GX9NmT7YZjZ6b7CK2yGSyf5UnvYyPuB8NjX2Lovn3JhfWaSSeaKoyfN1Jx935gAF",
  "key2": "24rckE5G2ZFRjn9dijXnW2PBF7rrhzG25nheXxCiBBUq2kJxGpcZ2zudV2YtqAU76cKLsRswypxynMcwsrw8iW2k",
  "key3": "3bxgqRwGLMiFSU43fYT9u49SuJ6QuCAasiTzqDHqx7dg66jPwY6qbzY6Kimby3A78hDWCruXPFZnrVUb1sG9iypD",
  "key4": "4WLHFfrmZtsLmdqETZZE61E9vdP4qQU25nsqdRSmm4g1WW4yUj2ALFcM6BDdow42s5Q5HnK19HkZvGVjfyE5GbcJ",
  "key5": "4eemvpYbhJA8TH2gEbLfAyL9NS6KTJ8DYMgFmd7HFsrBZzZsc5GzTNnivPBf253RanjV99yk3dBiXUXbE7qEDkh4",
  "key6": "2jpQbcvdQtLKQJbqYXyU4jHkp2pmCVuXZiHpVoXGtQ3xRddhcd32iBNB7cWKdZdduLVMHgMf1UaFPx77WXcWVTNc",
  "key7": "57J1Q5syP65W3fbRuubyFMfuT8Y939xpvcQQcy3jqDt9L5CLmTVcKr1w4przEP9GPzU7fKmqjEPKCdZiiswpJCd5",
  "key8": "3UvG4yRfRsxQsa5p7NNH2Y5KdqsQspVuBNVrrDUED3o28MGmHdKWesa1YRCXUedTVE6xYUr6Pacwara22YGAEcig",
  "key9": "2nqBe83Rb2izppYhkbbsJHMnerSawSEcnQc8VPaK9kgPFfkUwjNWG1ANUVrtPfKMJk4ZJfZjjMvXjaDcnGjJzV5L",
  "key10": "ddcDvKoWez2ebFzc8RZGBbNpwHTRJerrwV2cmm16ji5KUT3RCDukq5f18YdCNcTe5e2c8ATiiRqcVBKXQowQLkw",
  "key11": "2JveHoHy6YvfA5Mca5oH4EqH3662F3z1eqifLPFLY63GeX5zUHrYkP39kobwpxvvqPAaHwuyywnMmQe3CEjejmPs",
  "key12": "5eBQ2fDhsLD6KFgawDbAtaBBmhcViez5ootL6nWgq4vQWTLfPknTxXVmCC8nhBw4jDBQE4cQUpf3ruKFEFtFNqJW",
  "key13": "3hNM3onuDbijAKTvRNrCiX6s2BrrrPQhLshgg4noibTsCdmsxWGZn84EYgcwwJYe1zEJ82Q6XUWXS98MgaBzQe3E",
  "key14": "2hBMgyZ6EG1tqQ3iB9humfYLcJafGaPb2Xru2ecL672hbyAVJYg4ffAzHM2AHo7LaNbmrXLWLN8EpGHsra8MCs27",
  "key15": "2hrH7Sv77H3yRUzQF33tLicZprzdqQdcHwsRzDrTJ89uRhFgCo67mEwb57qqW8JHNSNuA9PGyiyHqFgBifaJzK5r",
  "key16": "5TptisvrFDTnY3m3xnpkXcR1P1vknpMHPk2Sb6tuwUkW9ND2AshKh6MAQyMipB1GgvKoo8rRn44gkn9tfByhgji3",
  "key17": "4J3x7G4goM5ngo4XpufGNmqZQvfgxWr24S8AmMPxauchCFvKr9FqvJy6Rh6aV2mmWhVp8cGqotD8pJJNgjL3KVZb",
  "key18": "4kSmyadTCnC89G1FQUN5UUm9greuVW4LSqm5tt1dYte2KLi3jcYoCHmxmV7f6DxtSN2Y9iokforD7KT62L7Lfb6e",
  "key19": "2QzcYnJmrAt59GFPxP4ivB32vtnHS2RyU1L5RtgPphkvyEyAFoHToe1ykG51bKiQcb714Svqa1WYjG4qiwbcw5Dk",
  "key20": "53gJbGYYhmsgiCkPvfq1UqBDaV9avo9gvogVBURYuX3T7tyVRvT6GnUcBGnx1H9XwTyGMvnzq4MLa4qvNqBActP8",
  "key21": "2TyLekxG9WPtnrWxj8rTsp9gfEFdY32QkHctgCxBwgeHahvBBpaffmnana3hWfLiZRu7g5bHN5Hy6Q1AHf2ZU1Xu",
  "key22": "4nHwWhQEu4LcUt82tEzUHPauemXWir4Mo43BAB9JP3oPP6e9ntNTvTDD3KKWDhM6KTXTh8KLaqfp66f7NUbWmBqg",
  "key23": "XCese3msMU6TGmPYhUts4L3xgKkxMTX2qAhmbqFLG2W6PaNarNzTqkLEb4Fzq5GJyq6fZ2jUZB4RXvsj8vEFymk",
  "key24": "4itDDk776dJqiD1DBctgMQLA3b4KkBqvYeT17nNy2UnoBVGs6je16McTFYf15V7Y6vpwHKdZ9SYBE55qBK4Q2XaL",
  "key25": "5jdARAvgFQ9JZrayJQE9V6eWDAoFg8e7G45DGbpj2P6dJHQ77RmDMyKQ2jBALsiezVNV4Jg8Saw44rmKs9bDipKL",
  "key26": "uzZT4xrYyjB9w3rbZEWYASwxG45WwuR95kgynknhFfrJVNpy6ZB6BfgSyv4ENTDLj2vroAYmZrPRZoDqjRjkbze",
  "key27": "5gi1V4X3hrBkSsrfSVqi7vvxVajNb7Auh6sivbeAaQdUpjR6TVVXhD23bQ8ykabJggYbmtsJ2K25U7guZdkjy9F8"
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
