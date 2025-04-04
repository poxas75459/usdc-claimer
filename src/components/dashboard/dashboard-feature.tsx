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
    "43W8AwhjHvZAm8WTRQKdsMpPfKRNQcFs6UdRUqbmE2oYQGS3tvUgKFQDVSYcPAT91sXZHtF1pqSpBaoYsYAQb7m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XC7TK5jGE2G1JEkPWuq7bmtSeDuVagUaNvNMmdFLVZnkXn7KqWhz6PA3thyRu3UGgeMQ7Dho4zHss15NgrKT4T",
  "key1": "2QaBum2QehK2AkEJk26VdEKh9zsbP1cGPdK8djWctA3HVm6wa7TucsLEzMwhZW13Q7qVu3nMkWHVdmALYvkugBCT",
  "key2": "4pWGnwuEemtacKP9rp2dqjQBiEVJWgGpxspe5uDKPfpMxUtUrduVVqTDpc4XevmkemZM3txvH1SUBZwkVAmaDGxo",
  "key3": "5DCYcGG34PbBckztWYoAgQFfby35TaN2xAeidz8CkPzU9nKyFbzNp6JpUUQd2pEzfsPCjo6tkyp9KxPLeR7jtDri",
  "key4": "tzRFeYF41FsdZaeJQdrrCwHESfAYDkGYxbizceGmCNPRWyye99t4wpwPvqdwvmXtaSNLor3YMERgWWZR1Rf9CRp",
  "key5": "4rJCAo11xEAjhhaKkP8oGyrcD9YY8bSmZMVm2WP52nP3zfsCQGHcmtJHNt18oR9Tfoz7JxKGCSKZXdMmCiHRQ1SW",
  "key6": "27aJszr8XrgwtajpG3vv4qWNTihCQnfPLTxfGZMXGFXTD7ABL82tqsyYnz6A6LQbiwv8x1bQp9pijYW7dD59gLqU",
  "key7": "2miozPV2MW6ssAEPKMik74jRfboBjiWMjx7om7RgoTx3BfRwGzFy5dRTCmuYgMJcXuE7vChPCjemGrT29yt2JcDF",
  "key8": "4HUJMWmLpfh8kJeLu1x3QfYhZuYEtXWSrodmKP9SzsjA9MyLYXcuwdtjKammvVHSe76JZFqGhsuW1R7i97o58rT4",
  "key9": "5nFkKVVEkkrChE8rG9kjTzUyBuegq584CFNvdJUeQkz98vcZppGiwvgEvHVQWznLTWRMPj2ULJ6crP9kE2joVVsZ",
  "key10": "34ou9AR8RQN24VqzwAJL6Zd9scuP1SHtxEPhD4Lk2dfuQqt2ZLEzdHUzxXba7wYqEoWfGKLGUpqs2cANtwN6PYEZ",
  "key11": "4Kf5mwUhXn9qyYnKkyghavW9ZzfL2nbfGdb3wFhVE7duAFQHgJxuopsScpKivA84UkcdHWaHRVjcmatNgRgSGM6p",
  "key12": "2FyqJnv38n8ruNt4z6jPzWxZqmWNbHBLfRgKs9hv7x7epZjwTCEL4zgiqJ5ujg3Q9Xx94QgEkGkjCSmVUpRQkWbW",
  "key13": "5P23NGYJVxzbTgM8VJN3yMuj7joVh8h9k8W2Koa2zAPftLshkXd5z9dCpnc3kTUJBtuujejUPwZnhjP9fEAgPKWW",
  "key14": "N7mEXgBDT5K9usKE8MzDpXcGwX4cContunby2NFJ2SUzCXv5qukdhN6i39mvcFQne3XKpKZp5gKejdu7KXqjPX6",
  "key15": "dk8SbszDxaQhNCGxpYG5wyNcLKiVFF66qXLJN1HMejXLcLb2tc11mAK4gnkSioNyyQgbGLT3fdW3Nh3mdCqda5W",
  "key16": "4Jp9cWtkEaS5H6kFDadaFwoAYu7QmTwEJf9UZTsvHJMW3eQei7WPieuFYZTonDdJroGyqyPRobpQChy4F8FWyCMG",
  "key17": "5Rz8gs1fZp96NrvbJk6rEzhvro5nQnKyFV1FAzLEeihoW7raK9EQYfa86VZGrHi2Y1budDmmr5kqreb6gZr4nV3i",
  "key18": "3JgJu7nzrfkEBjBUaeCLX1B5SDtPPcRaYJgKHjxYMg7J5nUTGfAZs3Xc6WV8zhVysafTYb1SA99B6GNpKUhHV2eu",
  "key19": "5RXg6HzTpAHBCQXqTuDjsZEPB8YSsxxheFmHDMW2B8wuJBKPgKwtK23A9iYMiJZJNDGU4A17oH83E3YUYag2L3xN",
  "key20": "5rTJTd2i8k9KZddCtHjYnG8ZkssHYdWm9djGX9KYAp2Jf7DT9LDfqvcbAiSibzVFocqGHSvbTBRknWnTM1eb2h3",
  "key21": "2P6giKr1b1pc5B5xAsm3dapQHrbjBsQhaZQv5utHtQHDzH1MHz3g1rJL7gXzppiGuYeqkriuoMb45kdB59VyS8Ra",
  "key22": "2gzENjiquYjind2E9K1Ge6tMNqkqcZNZq8TxpedsY6VriSdZZhPyWSWCx9ap2WRCfSxYts37oGq6Eoti93dQQgZX",
  "key23": "9Lf5iZh9QwQ6iaDeuPSTV5SRbeyADcVzd3TKkhcPhQHL7eWDuSSo6SJ7JHGFxCfshTasso4AawghNiH9KPSqPgs",
  "key24": "2BMubZjmUTxcE8NwWSoD4piBXNzvdvcjxJPKRkrnhbbiEDS9Zoowxg8zwhZCJeGJsyzmMQTzHBXSRSeGVAafo3oW",
  "key25": "2FDDFzGntuM88AUwP4kfw5PUyHjTLaAvMivdP1KQkvqbbFyAYYWW2dis5VdHNjFkqHBjHBFEJBbHyZXvtpmVmVo8",
  "key26": "4fxeq4onQS1VVHog9EeZCCtNnv7PhRo4wgKDuKSPP3V83ueanHrzAuVwYdtx2vEnCufsF31GPfRCAKtHff7W5HWJ",
  "key27": "RaxQvAmc6EkQ74DaaE7iMkW8sc7zZTKJcfY8XWUgCikAjbvWKRP1VbxVEbgxLQN6MApfE23QxhEraqHAELrDHFZ",
  "key28": "5hYXSHY6r5H12D4y3GYdrdK7KiLqz2bWQ4d5TwwoEYVtNTJtU9ofigvyyBW8kcpPHnT8bQ4QKLzV8c1VuAQGrUnL",
  "key29": "5DKhM7qncL5ryw1sAEVVPHuWjhPVidv4VCWGBtNU79JL6Sc9456MnEzBeogNv2y6UDfqVrHuyGMWbCg7iG8tuDWC",
  "key30": "2H4D72BYyafSpNUbMpCGX6EFbkUFDKCHLL6iu5xTj5WAfvU9hNCvvNWtWrkMxS8qPHVdE3rULQEbypCbqY9yvtFS",
  "key31": "4vAyJv3gHSBnVPFSQEU932gxYzMQuN43p3W8c1KNndUgfetEAntDa8Zds3onMCaPZA9bPkhZggd1aDQi5dPiC6YL",
  "key32": "5ZUXzsq8rNVpvTj9TyuYtZrxXnJC9ioLt2gmWwXnXkDgNqQHhTJyg7NfuiqLkDLUuALXZCTBZeyHwVgy4m3VRxDv",
  "key33": "5ZGzm1uQmhsuFKMd1hzF2YiCmAd8ALWwEeDq8hhPjFEaweK9yh9RsdSfviZfD7JuPHk7qmVmP21FWGXFvzLiBCBQ",
  "key34": "AsXGEx2iat3CBxkhiXSwxU4ZqV8nmoUYFdViGjuhjGHsUkNH1f25BnqXxNC4MxJihcFX6QanwGovG6gtKL8N4To",
  "key35": "2Hm58oJf6nUhPMRwpL3jL2ojsnZoTD9KEEL1dBvr7ZZwTzSW2MFQbK3YWUSdXHYZj9uWnQDetGp68uWaY48Yt6nE",
  "key36": "2yvy1Aq12DHAG6yLzXBS6ngrH2gSJ2f3PbboYpXNYMujAHw6XmjV1nd71dskKkuZURpPzYrMJ3Qw4hNo7vniBcZC",
  "key37": "3Q74dWH3xAXpNCT4ynPX1KpiMBJur9BSsA88FYAgVEDogSdowbbidD1C2nSxFme2HzbQTMtcdCP6SAB7VKApp1Ay",
  "key38": "2cJsj6aAtoneTQ1KKGVVvwCiwducd8mNgwU2Pikvg9yj836PDiYqZtC2UmQzbXVHfM9CrcdDsHNVCaPLYyxpDe3W",
  "key39": "5DNGTq9tZ3eztk47zALGNFPTDMqABSSw3rzPZBeojArXkvyayrg6gN9bicHu6VQ7uUyrCfTKyxsQeNvZewQH8eC",
  "key40": "3a7Ef9bWi4L6Eyz57iPEd5kyvARYKbT3bUPLQbvMMphgRm1ftF9bTVgPmYL3cfceVZSAgsWkyvGFoByJQS1wbYnW",
  "key41": "46XUpGSzMZNqycrGrDDgsoRx32nsRFuhrT4GjXN4H8ziwD66g3viQ8Dn1YimzxEf9i5UHgCU98PgLxjK9WrDu68b"
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
