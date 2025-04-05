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
    "49rbAQD3K9v254FiWR6MjF1qMFmrd5He8CT2BuLGybSxMg2hBGtH6szjjeZcNkqWmXg72QaeSd2oGbYrtgZAGn4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNeAiMgqDcUmo7qtpY76r3QfsDAoC9RnbxdqDKrRsLxQYv5zDd1wcs5vhEX59eU49pyqMcqz2PrXmu6eRygoZcj",
  "key1": "5rfhJm1kgSNkr51vCvwDocC7ozaApHA5ZM6PdDCcaKCHqfTga9WtpZsR8oRoo4uUwe6SLeAgVJh9FyXjgZ1vj7bn",
  "key2": "oTW1zqZzC2ynLoccpRrzx3iHNsy1dVrxzTcvmnfQboYWHSVcc6ABCGC4FzJfckxrngv9EKmLPDfRP3RHRwYV3kh",
  "key3": "59bU8z9LnhSz5pw8BR3TmmxZYS2eCp4NdAXH3DLoB89JWWJ4uFqxzAfFT9SdB5WzZokYJnD8YkXiR666x9FsRraa",
  "key4": "315hG8ESiRPHcHFfNsmXejqw6uxGki5ze5DC7qvHnun7nrzYdFLTX4buBXjf1mgAw6xnquWv1g974AXZotCTofkA",
  "key5": "3sRxKkUu4X9XJfYpYQjeKqjUA8RKWkehCDcUFxHNKwVYEcP9gkwCDFJwjwfnLBzer8ThzskynwrRonn6mkV5whft",
  "key6": "5A6FZ57JyTrJhEtjtDzxG1BY1Cdeju4dfrBaBBYYmAsjzUyiyGCskZP55XXbo5d4eYLhSgyTmbncLXXZzhrxfkuk",
  "key7": "5tJr7STUWiPT5BRSWNwcVHF1fUwhedNBMkRdQrKZm75xWoFX1FhsAnEkMJYVR6AX2QXyWghMP5Xn6okuTbUXbE9x",
  "key8": "3u7BPwJueqwTaaW4ZUyb4pRJeXVFL5J4abEywUAq7sq54qPJ26Lqw6beZXYnfdXW8STuzBiUTqrHp6ED7fxppSRa",
  "key9": "38x1yevnBfCL7S1srS8TygKQJJKorTEkTWyTQSKm5tseMRiUUidfYtrJkeHVM3HzwcRzwjAGzeLdiDyaNH871LA5",
  "key10": "4zMYN2uSiu8nxj2z19WXbS5Tx2yguEaNoJ7oKgJn5vk3QZJ3cxpoCkeoWuw8TVAK8mAkgsAjURpzAitQNH9McoPN",
  "key11": "4thoQdnett8tWC8yym5m1WasbbqcjUwPyi3tc2zKawtUCnZMjHrwvvk9tH2g9YdD2a92RoBjK7xakhTo2gh6a6wU",
  "key12": "2m4aHMXu8CdAJxxaYnCw6VhWQNPmEd5UXPZWCP1gQ1XwCuzBkqcPkYi9FY3gdkZZtDZkRPcnMJGwsRFgfdja3MQK",
  "key13": "5c2gAn5HyRCV4mQZNX1L2iTm4wEVGh8zR6v3bAXtkpZp4mvAWU346r7XAeamyoWmgSksrv2xXcgvob63qNmqddS1",
  "key14": "2M7xrQ18CDd6SQCR9Jno2DCxNxTZFw9jzt1meAHBB5rweL9waVecRcNrmNqUax4enexZRvsKuSffwcGRTiiWyrTt",
  "key15": "2EuqmDbXuujJ6PQbs8pD8TuezzvXzLJ3DP8TdXmb2zS74b3T7PXPpE6WJJafn1s3qSjMvRmGdS9ADw2cK7dYtgdn",
  "key16": "3cRp76KDQfuoz3gdGijUPNF6FJ3xq2eSYUhaEDxKQAu5dQWJajBuZwpFtVKBZS9Gx3mr95o4WHqMi5LmWjd9M88E",
  "key17": "3jjuurp8QVDEdEX96QJDQJnNnMu4j5i4CDum9NLjzhzoKPqTNYoULJYN4NAjGkMmTsLxamki71xoec12JWGNwZJb",
  "key18": "5ZtdgtBJM2DuoLTpRUtigW3m9SKEQvZWenpAKrdt9DG45fRtjAt1Q8rGeHYefc5zLzSyE17GZaa2dCMdq9VKC21g",
  "key19": "o8jjnJhTz8yaBX6rx7EojcmXGEDkmXHobBURThVGvKLtNUyJLYGFpBaib43D1C9jdJY55T1LE8oFXSWjcj42Vtz",
  "key20": "5GzrsTZMPZNs7dBmkyr7YY6Z24dJaqkGyZKJn5jHDHTzxR8mBQUN6A3g4AyT7mZwfxSPGAPKApwpDnG7EzAQ9kWd",
  "key21": "3DF7RmootMkqDtUVWAyNAS6odF3WXqK9RK9btb9jHwxJVpWP6eyeRGRJ1LGJChUvGtXX2wvsMdSrw12iiG4vTH64",
  "key22": "4qxPi5VAfdUuWmy8VDLsJovGzw6pB2KntCa9jhSoZDDWu8GePkQ36KnsSK8BPZ8tS9YxytLQDe8Vj655w3JhXNvx",
  "key23": "23aPm894HJXvD5SoCqo6m9rJeJ4R37cXcgy3P3WwWi3CHdqZhvh9y8oDkvqte4GyGoScbETP5wdpbkY1c2tYkJ3t",
  "key24": "2JRE5K7MA2DNbtvCcKZrmkj278MRNHTg4ysEWQFZtcVXLS5gNDpzGwpyo9tuzHNp9gcQMSNoYep2dSkDY3Rxb9bP"
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
