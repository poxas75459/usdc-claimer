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
    "nJx9W1xVL5m6FCbV3DCzDLumS5qMBfocgJDCQjdyXNi9jBrfyBsfFQyBjDQKHeoSjoU9VkR1U5nQe2Fpvzv3HH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XiXnNQkfRJcRHjPw3aEPT7CNbhi8kWpCsrYLsPwjb9w2GHs2B6b3LhDU2azw4qr3KGWrD3dATcGJ8BLkcaE1ZVj",
  "key1": "4egCZAuZQ8RRRAn2iCWHYEjKnZm64yt3jz1JYp1pmKSxpW7kRcevGuZH8A3NzNNXvikgxXe2SabUXn7VJy8EkjeR",
  "key2": "4oN3JrQRdeVUtQ9KRTcnCs2QENKrbLYZMmkQzYg4RkRVBTqtgArpQ3ZkGn96BKj4FZzkY7WXbpiEUPCmk7vXcLkm",
  "key3": "3nDkwKeRzBD7qaTJUwxPPc3zPLD87uPgASEZwhQTC1KRdP95j8uFMTkDdygMna5G9kSkpD76cfZYeP7hFHarsptd",
  "key4": "5f8NTQh1Y7CWACokwne2LcgWDTPnzoKP6WDq92ynqUEiBr9YjQqZxqWiZ7yqgE1dabz7E4EkLxkQ4Pi9WX5CvsbM",
  "key5": "5TGTtJU8gTVxMapncJvtDqJDjMypMygwZqnpUSGgrj31A1DypvPyoukKQNK2rKowi31xNWRuvrkrqQUVtp8dvmot",
  "key6": "3Uhsw9RNGUzFG2KMDkXcVb1mah8tNQYSrJm1o9PmG9vBxsidLWw95yzkUxVsCDToq3uhKdzwcY5WhZwJxyrmSVRs",
  "key7": "4aNwpFms5eziDkBjQ3yJujQhtTE6uDs4Pg16M8znMcQwinjjnghrGghLvFu7YpVFdtZKBx6ps1ED5Ba4ZWU3k6Yj",
  "key8": "R92kGA24MRcyqYYA3mZcoknEqqHDt8iMcyvvjEBH3SZNC8L4EczG6M61mPHq8FFDHsbqDraQQQsoHDak6cEra7A",
  "key9": "5Py7Yn4nMizsjCAK63fKj1HvyUmVYK7V7MiHEtF1VFxgy2zq4Kd74kzHS85GtEVzGr7JT1zRhBNT2GHYurnrtHDB",
  "key10": "5g3DGHUP9VoFciJ59vECDcPeTXAYqtHfJNDQJE6AxWxvE9s8vdeYbUQzHbkZ8g6cAvWkouKvkdvu2zRzxoZg7Hp9",
  "key11": "5CaB5qj3MjBXn5Yyj3f6NyCipXvMJzWEEaeigcfqHe4kdk7jr4NRJvjDWM8ibjDuBhuAcuTzUMXgKTQGyTorzcC9",
  "key12": "2v7wVqQXghPRcPnhWq7ajdsAZrFnw4e8gwd5itcDmRXEHLCY9BLxPP9ziVqw3jUeYCFxxrdtvA4mAEbCbeZN3Zr",
  "key13": "3AT63TJp3wvSSvs2V1z8EVE9ZdhvCSytsTmXGguuYj7J2wNeqT2h9cWhRRqyoYn6fqEMxiq8xQDANuyj54J3mvCw",
  "key14": "41t1k3a6yLuaFNUsgf7trYb17qiD8uV4Y6L4jMn2tzrJytwcHyMM1T5gCGfjrLW6U27o5yHzXWjEUVtJkYhwMkQS",
  "key15": "2g9XtzDnLW5faXeYu8FqZxALs5qu3KbwH8XPo9MsATU35wiDWmXq4cEWNG47LmEDTnw7XRnWets2c5ShWZVKWqJB",
  "key16": "2vRyc28Mg9riUFwEqEuc5SjX2BeKdV8Euc72obDS9JniYtmCXqkfP8jyd8zwjurVfgUeL5LLeEdXfvBwDudyuE36",
  "key17": "4uekejFfcEkHVLZpBW5oHAd9zuQXTJvooGL92otJsq1mpPSUAozgkFk9B1uvRMcBNyzpD5FuFWTJa7T8ktMk9fQF",
  "key18": "23GwtxGBERwRnchMV3nLVsTymLS9HCuwswU7oZjwJfPuxvvYtNyNHJwV6GArBQDterLHv1aamVMsUBFySFR1shy9",
  "key19": "3WJ1832WNBorLeCj4hJgMLvHWTyw4Lp6CxrSzfFps7WMYC7y8KM7qrR93sysEKGdFd7qwy9JHhPfmDuFuZMyxZcM",
  "key20": "3z62q32RSp6NmizumuZeptjEbeUzoxmZX9ZeVQ7N2akr4Mz2oNCjHyQydnxZmMBy6LXWKoQCMzFBzcL55PdNcwH",
  "key21": "2mGoCSiHZ9Aw2SahsgwvRLNkKLhCzf4oMfCup8gHktm94Da16dc66XcVJAugASQBtsaypikMemNKoBQksjtcudez",
  "key22": "5pJZg1Ucy76yvWGTSPH24cHMUFbeesEMAterej2FymCwY2C6GnPCQwZ2kEPvckewdqiinJuuJs3grVy8ZYLxfmi1",
  "key23": "52XsA8CkvsjTFRQXimHocmCXScvV1UUwfMMiaZhg8nmShbkAQWcfxBphpPHRYS8zT5GJ4zXbmWnMq8d3uUBaXyvE",
  "key24": "2xVSM5d6nU9HZp24C22urmswng7Jb1wyuKdxed7i7UATX45NnZuK43C9bhqrvJtdYA7qVXYVuEC25ZydKcrpP5PW",
  "key25": "2mYrjnsTNFbK9k7328yoRg5uChPoXbxn5bEBVztvmgTgjDwK4DgoEV3mdFMqqiNTpjxi4dgZ5QvtusuMigKtYjEF",
  "key26": "QKyqikjQy7SEkMnG9dQ4zJhK88NLe7KA36PtfY2hgRQWZrGkDFrz2WY72BeFinYcaDapYquJRWgH7FJKoJSKq8A",
  "key27": "3yfkNno2Q7qqM8S3Z2cz4ws956pm22GHtSpGH8HqMmhjXA9HxixEf27iEXUkstgDxSVhdM47ggXVvnSv8RwKtzmh",
  "key28": "38wfwuHbJVYmhFH6JCTxjb4ycWGFDtrxs1N7sWPGWRj7qo6x19a7kioXRREVfs8mg6QQZ7cJ3nLSorKr79mfTYLc",
  "key29": "4SoG9ivreGwREksvcDpedQMB2nJyhhX1xJ54Reawqm9J6Ue143Effz2TXV61MphrLBVcis1fsMSmAoZUxr3CAcjm"
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
