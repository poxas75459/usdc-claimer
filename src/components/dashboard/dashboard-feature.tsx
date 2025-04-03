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
    "2aWUF53entvWYMPqAiW91Ecu9CTfKxZB4LjK5yiwVZUCV3ght6LBJoJVWcGYrZt8Hbi5UYKc3JUGpAXCyycn6a6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D54vkiesHgY4NaRsvumRQyyaDDBDnWR76NdAWVmUgYZxniUQCZUzQbffFXPoqj9ts5Aajmrv3X6EV3LP3AruXZX",
  "key1": "5KDjL2YjXmaR4apEEb3tWWyiwXrurNeWhAAMbTgzsaobftVwX8ABLHanxLRvHB6sVW6vmJu9tAA7aPZpBW7Edqji",
  "key2": "3DdwwqepLA7ofL5SVv457No9Pxj1UNbAEt6sE5GjpyRNwJdDcqDHBNKsjdWqkwXyLyvrT21eT61iHAnVeGVapFGa",
  "key3": "TTnrUyHDPvBhSJyVNRGB33t664DxTksiKYByK73wmUkwedtgwzXsR7cWXktCBcF2hU4XgYi5YkpZv1TwgxrpGQE",
  "key4": "47rJSkqkaJ5ydQthzgC7JCPkukv2kL8DmspL4anKcKs4TN6rD3c5svJAwGFGk3PSKYKXV9JnqsA5TFr4885A6uJ2",
  "key5": "2unKFiixYZ4QyP43w3a41kqv4xSLsZrcYDhUrs9Qv1rvYNygRBWdDjcw7xPTGJHzq19dzHA2FZAjgY6UNJZXzbM6",
  "key6": "5k58VkPLD5vJnvfRtWN9T8R4kDqLo153mtjVzEjTEa8wX1dCWpaHDiCHmPd9H84djrkBJj9EFevoPn7rm6Vht9Qx",
  "key7": "28JbY9kBpRqBPC8cohBL1pyFYv7riPzF6hp49NzvHbxgaRrGMapR6MkM9ByTNAm3qkdMH9QNfajuUMb3gg2iSAKC",
  "key8": "2VnXVhLivBSAmUw2nfzCSTinso6toWb5vCrC61gVew4p76VhZdLEr6r7VX1ndSFBawDKosPxtooUeAfGACyjW3jb",
  "key9": "4kmS557JX2NAJWNjekxc9ggSDzBJpdurSVaZ45S3SSubrL3ARzRAzr8PehQobinphUeGLXLGVAHiHEF3W2uWWRpU",
  "key10": "654N3xXLc9gZowR5s5KAcbeWBFdgU5HzHpVrnSQPqfD3vEWUTZXbZQ8XWuinrnZr511bog3MSP9DZEo6Q5cX2ccB",
  "key11": "4GSkXecGwqMuGd94UyKg1Cy6b8mGKoJWzW6zvpfRc17izbhYfXQAaMbCKJRfoqaj1T5LyGkTuMArHsXG79Ph9U7k",
  "key12": "4BKMQnx4iTVEHt8qTiJ9DpJrsq8wxDPMeFfadSMZN6uJUFLBRx5KXTi2FNuY4jwPngZ2XEFq4jC4446TZPGjKvag",
  "key13": "3N759dZRPv4zvTwTqTMFKw6oV4VmmQ8VU2GFqFk3q2mLpux8S5oKRJvcTMMnjaRixvnzUoH5WztnZFMB6Qwv7Mzw",
  "key14": "3WmGvV7m8Pzrjbs3TZtxH8U9Q8j4diR8grosY1ND4Y3ymzbsTh7FUW7JsvgCGub5KCxkxVPf1dcBjnVf5TRVagW2",
  "key15": "2wFWpfaGQXs3zJiWNLsZWeabNTBgrEiZp8jqSEU2BYsGDPKU6sCqCoN58ARdmnT48KAXhTe2wqV24YGLt7BqTgUN",
  "key16": "Cxhau9wT3rpy4UTho4yMbRgfYE2UwtKCYobHQGs2LhM7sU8XMSq15CFj3MvRiDoUMDkibmaVGefTfKsuysYN5xT",
  "key17": "5PB8EhCJHT1vtSARChAom6p7WHtWLwnwtDkFjN1VKAqbhqJh4BmqEFQmJ74T8YytE9AMDM4FJAkWDLuwgBenHZjq",
  "key18": "2tpx5u9iVsE3QMcMhY7DqZF1wqErk8HbqrGT9z45eDc8pMRW8MtH3VUNoRUr9SfmgS5wAc1VQf6NmK4j67SPo6hA",
  "key19": "66XWMPmSzRvZvwb6a598dLuKveN7VznbQGgH1LehJjyvTrUxvjZrbJZYJrV4XL211tmQUu3Sd9hcyTyx5uwBdP9t",
  "key20": "3yToGVcUzdyicsFNgSwwvtVK13sZbyqB4pLqnDErE3wnniJqBN3ccoUsJS9QyArpTE6afcn3TRqaTPLNSBAyDzPg",
  "key21": "5Bi4WJjtT3JcBs919Ne2n8qsi6BrmxvGn8U74JSFErjXwEtuNAknGiiz4k1HqEJsog7pn6EhQZ41nK8KYQR1d1Mk",
  "key22": "5UN6489fLdVfAKSdg8juqHQMFwivBRicie9XFx2fax3gZgJcnvEhnGCSxqhabt1fwP1LEoeSAN9jJoPTfpqU6P2b",
  "key23": "4V5auBhvuKarREWzoocEQo3TBDKkv4mmn3qwftz7ThLMPmwzFkV8ZyMkRHiggaUFPjR7HKjDcyD1enkLLksDYKKG",
  "key24": "6zwqspWQo2ijA4EoBpnwgXJ5koAkd8FsLHHa4ZwwyZi21EQNyKQe25HJr43uSjFvAYdtEEHxnjVwedukHrPXZ6z",
  "key25": "2E6cjnc1TpeaXj6At4JmjA5vefCL1WPuseQjkLoZanX7sCR1zDexpNUYuo1Mshncbvh1WdMbZYux4tJWUxqywC5c",
  "key26": "2Pd6wYtoEqRHuKaMh4KtuiCUEshjEyjSVGjazm1aHEKr92mMgoxPZiodgew7BjumaE5TYDhd1Ctve7Nyjk2bRuRE",
  "key27": "256916aEVkn9ZwgaUpmt3J8PZ6H7cgMbR5j1KA7XnTZ5mMGTKw3o8Uznj7jnjzgWFKEY1b5WjcGAbkDezBQu9p6Z",
  "key28": "65dk6QnY8KUGvzEDeS1ytHMKaf1suqitpEYAcQwLNdpgoiFxqYK3ofuJC5T8nscMoVyKGQbB7kKzkjuAjFUeZok",
  "key29": "2MaikwjB8HJpk3GH9FQ6Jr3PeZdTWJWUF3ETz6s9wUs54dLEKfMLeh5Ff1FCDH6GKCghFchB6Z6SKn5WoP1H315V"
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
