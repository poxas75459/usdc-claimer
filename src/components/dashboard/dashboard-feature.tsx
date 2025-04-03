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
    "2U8ZbXwnhH6xbmeVLq4o91797X1sQdx7hFoBqUuDAyDMTDbArGHfzBpWgLoXXza496mHwZrba3MA65uu4dzwSSC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cj78jydZ3bLzd1xtM6g3V7ofVrU8frF2SyTUU5D5Cf2gA6S1hSyJF5Ansqhg6JwkH5fpAie2CK17GkciQaSsVJg",
  "key1": "248eXm6wK9jbuGggFr1nf98TFkGHxCcPSSFsmVjuAMVJ7qn7trbsHa7BKUS9dzi4LpMUGkxRweBRCSsLAY2DWHaG",
  "key2": "3K3QEyzugUB7rWZwoXxwnSBRCJMUQkuma384n9gWxb7eRgeBhTwgvYrGiSUHxgqbFRUrDfh1sHUPWMxRpqaQmk48",
  "key3": "x89zcnsGCrxWbkCk5pMeuoxL6q2pEumhoKsZfLZLC4CCqVYSdTGpg2XsuvfwF8RfAhmWrp3XLnocgoxzuc3b6Wu",
  "key4": "53uZAKhDCJS4vNti6pWMStckCeovhQfNjVMYbdJsfecNyWiJweZU3X17PzTG3wsp5Lk7K6K9VwrrXCtrA2zXgFmJ",
  "key5": "4ffGRWcoLtwqZL9NKr4n5mJhgfVtMAAfEJBcasr5M8aX26vm4CtYT9KzQSHPF5nyYTD8BAcDHxrUp5fQs2qX7Uup",
  "key6": "35XavAh9UtPVPFZzyLZPAsLYojmoQpxMkGa6c6c4RjBuhibjUR2RPB6Cca6Xd5t45psMZahGmoJgLk5DMdamtxcA",
  "key7": "T6XrrkkQadsTvhKGCEmkXfxMtQtRvMgD7qh9Kpe9VqXKhWNkw9G7j8rLVBNnHGDUAaL5XQSHa5bm2wrTFVua26i",
  "key8": "4Vyq7j2b7n8N9SkGytfk6n4KdTxNyhz8hU8myKYn9RDFUxEWbzEZVWska7FUy2LZaJobjprdR9UEpgtXNxGFa8P5",
  "key9": "2KQq4etPDnTxPKHUe4nFunoFoE6z2C5Rt9c44dRELcCm8yqqjg6F1KLhpu4yUa4bq2cSRNrNQ2MMxS8GLDN5AjjF",
  "key10": "3YJ2aqPbEopRkYDyVLNbRCzijTp5tisf3a2KFrAG7SSEhPt7w5TYaUYGBw6Yz6BiEL6cCz4fPHQtFTPHJh47JpD2",
  "key11": "5ZTEcabeBxT2GzX7fAFe3kKUmphJjWgnQyM5hK8fxj2YCpZvfapHnp7md9XBzPD3mv2qYkzzy7bUfDDQ5X2uoZwF",
  "key12": "3fEhQDZyCa6h5Ni5MoTfomd2zN9iJujdTiGQ25W7RsJ3xnaM3E3f89JLo6qYdXMUa6umNddayBNJcHqQ5M37nuZS",
  "key13": "w3qMGWbE1sGuvECivosm9oKsqqGPBKGaZsdfbRGj5BtDoDqSNaSWUY4EY3gW2hKoS98jEeHKoW9n88ZxEA5Lztq",
  "key14": "4j72HJgXUBCYodGWRQijF4gddEtBXotn81oGzAxz1EKd5mqQ8RHUzA6YB3WyYDhqsp269Gvu64n8zX5rEBSwJh4d",
  "key15": "9dkJmK6n3c3bv1y4r39nKe63h9njQZfggQKWJvDfTS8WkbD3attcqa22nXe3QAedHUxk7RjmhyYP7z1j8gbBLwY",
  "key16": "5iJc2nhChsr6eEXUgHDoMQ2rFcjseqvEFKUCzppRBDmqPtgNC6TZSLCRKUjK9vi4oXDwmySFo4Nz2zaARyLDsT4h",
  "key17": "2AyrqYuhWVyrK2LLRufvo1NyoTLAScjZHyMgQqXtyn2vBFCR9HKcwe1mzE7xSgKEE468gKXbcTisgB3F4PRAgJv3",
  "key18": "3dRpiTppWMXT9KNkwzKBBdvJgKX9qTWbypDiSH7DqBDqgnCkriSW8UksHTjpxFWUQmipSLiC3iNMNqwpDT53fKZB",
  "key19": "62gdxGTkLoqQPThVEcVsrQ5Mfr4ogwWLAr93MCveZF1u8rBYDAD7ZrGctywiDGZcr5VYon3FHbfwWwM1YxuK77i2",
  "key20": "3RZhsWBxwx4BwpyhSfZe6m2QFveGb9DmJf8JLtE2SXEGMVXaHj1eBChzXh9fcyRvUvfkyk8MC3p9hqefj62hKNXm",
  "key21": "5ZaV1qjf8xfSwHvmLZQWqR4MotZPwY48Xy32whardZFJhBLdM32h7fzKo5Qs83vNbo1zHG9AkoY1TjK3gZBjYqmq",
  "key22": "4yxwjL889nJd96VN7EkmDuNw135jLzwhcRaqLGARYDW2vn5TnvyBAc7TQ6UxVeZ7bmCc1E4VsZQSYZwJoAy2LesK",
  "key23": "2oBPiqHy7Zo51Cadma7U6cwqaTY24jT7Whv2KnLA5htSypsRVTS2UHugMEgdVW2uSMT2KKaC1zenAge9WwQ5jGJD",
  "key24": "2LdswkrgvFUb9ZnBhhxS4r5fcicw58kX5cfqSwPDypr9yp9UUPiddNzRXTEHXJCrPBtfQjRnPWf1fM3dscUunYMA",
  "key25": "4sJquN7XAi1XcCyNpvSbvftn2UwUTGxpptfjMYdDCtpPGQTwnna3HPrHstTHKmwxGdCw1wWioyvE5K8sMLRca9HU",
  "key26": "29N3sf7MP9kHF8JUxwfp7YGgKwAf3T7waeheToWmKKpYKssGQFQCwS2rVBUb8FJL4Nvgbx68XKP7dwbJgDYk8mBF",
  "key27": "6sEkRqZQghwtMzwaQo4Zeecd6nJiPiZtLZW4ssZVG67mruKWbLe1namc9L3vHxxALKWLne87Q6LySRQ2Bqqf6YU",
  "key28": "3xTMKeE2pEnee8DQw8NZXkfLHVJYczwTFBPVrXfVfn7VLXyp49fGtLDPAkVyuZSTjP9thHAQwPWRSwNUtA1xnrLe",
  "key29": "aGNLgSknMMHjGJVKRfLfdHJXb1fL3ffr9YmFsjPbpM7tbX6jekkBV1RwCaDSHE9rpnbRSAiRYdYvcVg1ZHBZX9N"
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
