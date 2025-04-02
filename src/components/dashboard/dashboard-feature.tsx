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
    "2vyF9cqSAnNr7c2kqPZAGWmYiGsQjdvPppPvUow11wQtcXVP1pkgxz1k5DY8j4qvXQzCC2bALBZgPPxQ4i8zjkyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39bXp991fsDvS5MiQZGcon54VkFagVEafZxqS8EccppMfsoKJ4r6fJC9tZCAFqLKYc4m3s6NRnngU9ZK4E84vyrm",
  "key1": "4i5BDA8iMg9ZGPuh85ncH6bbkHHZjhYSaUs2AvvsNNgUq3tuDLfbv88xhuBQRUWf7LXMj21T75vqyiCX3bawfP8a",
  "key2": "2VX9vNDTWyrt7kzW9xtSEduEmU36QFbaVHCkmttsvEEWgXKMZzuUWGZNqyvLCRftNnbNmQtMxLxxvUAR2jo92PZv",
  "key3": "5cE1PkUAN2RzsdztdBXsJJHg22nQmL8EnAdYAhujnrjcvukNV6ESYUSZCCDK6jtAto9yWU7qK4wfz1Km7oXe5RHL",
  "key4": "kskuGfJBQTr1hLTX8pjDEoeLDL7VA8ZK5hKj43bzknf3HvaR84Tnfhmptti1ozdWJfuyjTag2QrXVh6ZV8EPg9L",
  "key5": "2guTXaz99MjK9t8pm91mMEp6C3FY9N39w7vu76HdbVT4zaV9rGqSiaw7EVu2gPVaipHc71xF5QtkEbf9yqC3gLtw",
  "key6": "29Wx3u4nEXwAzSQLzqbSRsQwPfR94M6K23Nz5vPY6zZEyXcAZ8HwH5Upp5jTUptSZhwmgGqgzi8LGP87Fe4pJuse",
  "key7": "44V9Ny67FXEhPk1ToeDc5ZEURQ5VyvGpMTWWJ9YrLw58H1SK6h2EyiXX269i76BCg1WLDxDWuJkHYsmJBotGVKRU",
  "key8": "4w2c3MqUVziT4HvXegsFKoGtvKnNH22BYAHseutQrVDvGrYLoepBn23WQfQmQXgYzz1FdftZFAZN3xpiNE96w9iY",
  "key9": "33AMdhophUKbqbYFnFLMXFeKhC5Nbg3CjxCFTtyS6Btm1C5dZrkPVjWDPWAXAyDSAZFJXjaXSDA6deYdV3za9rSD",
  "key10": "fv4BLjp2VGXLcxXFKPew2yeXbtZqqEa5bHVDRdXBQG9EYEE9PY3x2jP5331RU2kpuUhAea74dzgbayC8e184tha",
  "key11": "2LgmS231E1EQanW83oJ7EREGvRZGA3UxaFRz8GB6LLgEaunUawcVqXea3UJrfXXptz9GCV7pyXpR6wkHKKmpTy1w",
  "key12": "3NXHec1Vuu9XeFMaxYNk1Te8KfRXdWhvNwKPXdAksKSb7Jo3wpcEENxaG1cpk47etvh6MHWTw3FAGeGgY9xoQpG4",
  "key13": "4jsN2HtRTiXeGDdVJkMDbLi6B71CZLqYoTenJb56qkv9nSDCdUmq48UjXJMENUEaJUBmNsTuo7uHVe4u7ba3YUAJ",
  "key14": "2mU6CdwQVPn9pVNCcmS9ud741prJLgChQktRq2BaQQayLR1VXzTfi8JE3yYxNwBAB86D7yod6praDm7Q9j11LxfN",
  "key15": "2KQKypAYcxzZMuPGvYUJvxDyD22MyYgB9pyT3ifVc7Sms3P2ow4ZY9MERTJwZ2Q4SmeTCmHYgJuGAjvj9kw1es5Y",
  "key16": "hbnmeAYjfirobgRTB33kFyQwgnCvzbKWKf2HxG5W95VJpZi3voxgo55zVV4qzKpbspKG2Pvf84FL7ynVsMLiakc",
  "key17": "2THeULt9A6HKvFJXPzdFgPi9zryVhBZ7gFiuR6nr2j5VfhDjuSU2NzwjEjCFVuavzLAPkatq4BVDhuHy6dmx4z8x",
  "key18": "5iCm11fykwNLGxZuxWjgeHjTB1iWdkHWjsMy8csn9TvjqYVezhJAhg4q7TJrSuanP5z3XD8BYR4fyuqnG6HegNmh",
  "key19": "66LMsLUNjcQzNuy7jCPne49b4ydFVVoAX7z696bXySiETcjKnFEzGneFSywQQv9ThZKoGKNKkEuegCxZ1ELdkvF8",
  "key20": "3cvZ9wNdNVm4WPtrqHDzCNz1Gk836hnt9vBcmszfH5dhh7FVY8FyR4dAuFNFktTipKPAtt5VwJA3Y9rBQVb8Rvtf",
  "key21": "3roR8ZDQRC2cMZTkdiJQJcZW1mPyDUz4KAQbCKypRWWbyRjpM5n2EQkpxCcBQUTyqS7d4tk4TSv9NxpMrdn3aesQ",
  "key22": "3WTAhjDA936SH6avYr1dPkr3KhaaPczeT94YTUTSUWfF8PgQ9aBQwmGKJBheA2pLpif4foyQ8TbgSwaqA6Xk4Pzc",
  "key23": "2s9v3eMCBcAmMhYm6g38Wqh2KBo8SjD1sVnM4rJvhtU1nVivsFpTjUaPzyiRiAyTPpRVzxAYGjEBCKu25f81t5Uw",
  "key24": "3VHwhYy9yLio7YYcJ5Y7xeUCzhqKnFmLbiACoBReK2kWgDrbciGop8h9jWgWPjZZoftFcdUDbGmdbWeqSREXcopo",
  "key25": "2gv7YWzaUTy7x5y3fdw5UeFGfugVWis5whbyFeKBNtr4cawrLxJiFvef4HQ64gvnbUL6RtCgLtFrT9X6EC95DTNw"
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
