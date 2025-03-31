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
    "5R7Vpj11b2YE7Xw7XpMiJsorfondQ8ZUjDkaey1nZpKuFZEcKDstMynjo26E1QJC9rXD41fcAvKvSQ1oypKmEHML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22aT7jXb6v7XkVKn2qC8eUyvZYudpx6ckymnUVpEo4GdUxUBvqsVTVgd8MwqTiWYeJrSfyKqyRWZHA77nLjB4PxY",
  "key1": "3Zn3JFay1obCAeGwSRjVzQvUW7pqscabYywcMCgc6VvMgeU9KRN6zM3S1CUjNW4eDo624XCfHbKfHD5oeVYxPE4q",
  "key2": "2HHAQWURkkxAs2sHgFXvhH1wwzBhvsWwmMym9vWxqEKET7gVKdSCKsoESzkA4iknJs3nWAjpC7T1bkSdNXc7KRmc",
  "key3": "3ZjUtezhJP8B1em5pBp3Urk9k4EdYaZeK2AY2JfP8xiRghhsaya6TNWUTKivm2AQgyAQN1ouaHed2GkpSQiN4LGK",
  "key4": "57DXG98B79ZUWW3pgH1SCP6WvZpoiWTpnzTTFw7aDBLHXsYWJmJD2zDBVNLPppoXFCEvSTLd2XCcrhdbSFuRVT2L",
  "key5": "5i56iGgt7xSVhK9TUjhTSZe1e6ykmGJWtNR6F7DcA7n7tpeqdzM7TTyMKJNUjXqjFeEdzjqYQspwcprWqCtGDbVh",
  "key6": "51EnNKpqmZEiqosHejNEa2KpTKVAQZxznCqX46ZhTpJDp9kHgd8vcLMSQZFkFjsXdTpzxWeWF5t7maAy6E63oktT",
  "key7": "4NiNpczmYieXFy27TzWzyGRzrLW9vqtiD4BUnDXxti88k6nyAt2TRhQAkPv3T1VQdwFaRd97s7AziZ5qsdzqEq1T",
  "key8": "4rFUCFnkRKTNEaxy2GG6araeoKagAVREfu1jeXTa8egwfHLm1cdnYPuhYwbKMiJNoVwnz3jLstnt1urGgH5Exj3j",
  "key9": "2JSyUQppBqcaUGkMejxpuRv8eRT5nNGaMQwPTCSToD7wsY7V3xzYYN6YPGqGHX118XSTceoD6tQDzDt7gAzfkPDU",
  "key10": "4mcNk5aiYpp1JQ3nEgnfavcEqV5SaDmGcr3F7FWbbSYtdfzVoysEpmEw9MDD5E9MwSEFVMt5n6rYaXLCQUZ8aLPz",
  "key11": "2dRXVp3HT7bwBWYZQDaZQXHeDwEWFvgREK6rXijspsNoX7wjBgd43Uv2gL9W67j26trobAF4aZ6SLiQLBHmwqWup",
  "key12": "4KFTj8ar33E1AG3cF3GXuU19pJNEfGSiKrgwBSaXi7WQqxeR1qsx6iK1XkKkx7VsR6WQMBNPDYJqPZ5gTBuFMqPB",
  "key13": "3kbhQcNtCgDzeyEkRYYJpExXfDSBQkz5tsytiWTmuHaDkjhjvyKZxqMj9MHVFQSQYEV6SGvqoPYcKtSmkW8v9BGy",
  "key14": "2tLXRd5sKs5j4ngncqrryL5iYXGgTMPWyhG4JHh1oScXTGd5ikuyms2Z42NVhp6DyV2RoWUKahk2NoT7P8pRGoVT",
  "key15": "62pJSWvWu43af8jSsLhqEijNn8Zfn7qpCxauitJpe7je1Y92GMgp44mVA6UwUTp4c9aHaaZHYwCHVBne2a2DyWNB",
  "key16": "24orUjyUPrZrw32yttHbV71nN8j1QH4EmaWpj2jQzoxcRtEUqRqqfCKkZhtQ4o276kEJjPJBxHxp7dieBXh9UcKc",
  "key17": "3hu5fVfYkwYtT83hJq49Cvbt9o8jLGKT95rpXbNTojV3xqzCFp4WuuLrWVZhPMS9x7nHVbTs1tep5DcwTajeRmaA",
  "key18": "51vjAvLLJ68JnNhonpqTQqaxSacxxaxmzY2F6QKL1rCMrEREkCFQMyDJsdnfyRVUApikBiPpg1NYUXi6jU1sAuDv",
  "key19": "2EzyZtvcLJo7aAhERKCE7mKAiTrcJCS4eGFtJoaLQv1kWq14Eg4ocuddEUNE679nEgizvCuSNiJXeuq6HZjBvhYR",
  "key20": "4GDqzecLttjn7YBsqj5iJxbGkHPdtHXeuDL3EYXU4SHyVoLcfqRDX6D6G46fsZhg2p69R2i1n5p8xtNrxwdZtVoZ",
  "key21": "489Yu3xLJLDTz9PCFQZx658bathEdPzUMUuWVRJvnnzMy5hGxc13zNVWcoHbMd8TWXbTendDh5XCPLMC5KTfwnAf",
  "key22": "2Nojyu1ibweTMfAHwJNR2LzXJ2h9HYkRHJeuYqUgQKnh3p8uxsENAAWCGa2jWpp6RXjWZ8SgtV7cj1nsAVw4XJCQ",
  "key23": "44HAgttxvSaTqy6eZaPxgPbv5SW3x5N3wukHLGiv3mzbeUJK4RepeKiUubPUUWvuZwmyLN18hfG7ox38r2HmCxen",
  "key24": "5idNgVCTyumMxAnVBNNwm8ZbiSdywDWQcSAxHKthswCZGT3grpUJgKTmZpedCTVbpNHTNjcPhtKkcJUMzpYQZ9S1",
  "key25": "2jzX6vBcavjZFc8mNKHVjiwFpAh4fB26YLZERr4JpWuBEzw6hqupKqB4qzDj6C5gwcTskWmiYEqbdCu5BXrMYEfL",
  "key26": "54QgTnLes9ymZo3EZmsNfLZLW1SAKPgHz3B3pNt47hqJjtjyRiZv3UHwZPWHvbcnzBns4dKn8Q2aCzfQGodXTVr",
  "key27": "5FhWpForcC5xQgYzkV2YM56L61mH81kbGU5SP5orDM3jbJ5GEVtkZzPYyhZj3wvchRzWP6nJnosa2ujr1WZcUYzW",
  "key28": "2aRiZKbePWqhvNbkUrvHF5yWXLHL4eX8APj26H7ygJpHbHk4NXRKxhLsi3NHCWZ937vR5EE4c1ceKaRb1a3ukGkS"
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
