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
    "cJXgZ8BW4Mdr1nULTeroTsPjQKSDRZ3FBwdZuTvmT1x4DayStHH6eFJT3fMr1QazS1LfxeTkAkVCaymsbor9rhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNPxkHqCXVhsJws1GJvW3VxDZy9KcfEz35VnPRAiv4zozVahWeYcCjf6f6nvU5Avzmywq4ERuRN31wNcEXDBBkE",
  "key1": "3j2U8RMAJGkeCFndwfSSQxy4j9K1wtKZst7Ln8utNhhHBHaM9dZY8i2gJLAc8QU6ZwAqvDMEQSd1YMnzZiHxzdFY",
  "key2": "38xvAGun9azdkaEcuSWewjEeCpYiMXcKWcspyA4CUhPWV2Pto2JWzmJXQeEc5LtBmbZjzBajcQfS5VCunBKaEHqH",
  "key3": "1HtdSSe7bhEvBsnYFnhmYNkgyGAwx2BTmEq43M92jCov7bVqEtB54nCb4vLztJUMnYTAzLF3Hm9bM8kmW5S9i4W",
  "key4": "5boHt2Av3Cjqny4yvJmgJmC6FfbkGFAvbbtNGYkfVVFHBqP9CeR1NN8AjCcdRLmqyjW181mRBsCd4NUZGBByoorD",
  "key5": "5Y4bzRuTbSWgoEkfby2aLALdp31cXxWZZciYxsnr1Hb4zimT623tgNixygzoYL9i5bNbHyUnpVJDxxaqmzHmNhW2",
  "key6": "23JsuxdQPkCtbs1XsGEHaxPTqmtpSc9GD9zV476TnmeP8d4zsLW59xwzmbWdybhK5p2Mb7iN1TS8uyLTYDKWPLgj",
  "key7": "2Q7rhNq8fP9ufG3zVETLcR6feiGyDLGpBby5G9cSdDSgPKiW24Ndb333gaDGUyTPvCZjunuUuR7JAcsgpiYDiMrw",
  "key8": "2cSMP8C6K9vB5FrsNCJerPP47avMU5r9DV1K8V56E5aXw5uh97F82kyB7zNtTnPyRiz81TnB7KqcKH5B2JJZovjX",
  "key9": "2mcMxzXsZKKBhAFXZ4mBMQeozCeWGwqw76ka48fzwY9bZz9nDZeYSYmCtPYX8spxaVKkFNW4hpW78xAGFRyZQ6YT",
  "key10": "5f8jiupnGJQGwLZP5wUZYMSHUKYyH593w2BxdEaDpEApPp96gHSFFjWzm1vZPwwxEDdnqUbYwJF3afB5qEAiqo9d",
  "key11": "22ASS8rPDAcBWKR3poq92fqzsyPE3mc4PqLGJh7KaG8F63tGKXu8qtYsGypW6QBRiyjymb5VzTQyF12PP9fxENHs",
  "key12": "5MgZzTtH81aTMk6honDKeW8yofiJtrqRAhe4iXpCb5SZ9dyNiEvjQ2VjNFkGmoz1aHsdPjWBByhXBvB8UKrfErGi",
  "key13": "2jFDa7CyVv2R7YUsJg4UAumNZuTQ3pqjkh3U5MMMx6T6Jzicbz3fjgkg6jGjuBRYdc9hguh7m2P39aRUPP2g1vAX",
  "key14": "5wQNgrt4EtCR1KZEnP87Cj7MsenmxiRPf5cYy7u8Fxuc8NZRg6nLmSKXd1UwfYQ2scgav4S52fU4a4xzVf4cioCs",
  "key15": "2Uviv9M9yTpnpW3sZ5fCRcY88iiupnZrf2Y5b5xenLSzU72uC91XieTiPKR23RHddu5Zwi3LLiU6q6kGRmErBW9P",
  "key16": "4vrpqgrV2Jp9VGXKmGpGbXGxDBmQqfRkQburSGDoc7KkmWMhzMbrLxvRERrazmcqd2uAe1dcZvGwyxD3vXkqBHa2",
  "key17": "4mvAcQwkhmG3mws3Ji8fzgSJmcRX2VuTuTu9V9ZQS8gzcUsoXHpxQQM7BT3tUdx7GnHjtdZQ6DoojK9jDdgPi4B1",
  "key18": "J2fUe6NGZsoXHn9ErGg9PBC9pGpkCuWeSackcKZezuvLBJua924fcMcwhEfsisSbTFtXXiixeLmt5m4eCEdknzA",
  "key19": "CG7J4B7C375n3uWg7pwfAwdtsGi5MghSck6hd6FkrAuKAHFCiHvPAUCgTKHKrvXTu6stemLMFpKHq5kMQHCL2gT",
  "key20": "53qdcza5Th5wNDzUtfor24muDB6kgNPsD2f6r8LSNqpnsXbsR5oEtYFRiWqhtbaXTuZPn7X2ybF82VwTKm9NktJ8",
  "key21": "z9Qr7EvfJJ7TRBVhegBag1bnC6VTL16jVTtv3kGabpJtHqcy68L7Pa65UHKNmtsF6cpvjstPbBH6k86sYp8apoS",
  "key22": "5TRGXNG3ifbey13XkozPuFBTbesbBSfdgXjDK6mL5LHe2XWsJLVCssf73zF8487MmUn6NKpdQT2w8FpJbrFKvsQ7",
  "key23": "jP4jeocdiXYYupUgMYFJMw9YtwsB4uvdZMeiwogXYa9xpVDjNKCo4sNqsNsDNQZEK8Vicx3Q97oBvDGyWFbA7G5",
  "key24": "3HyWX93FaeGwUzAKzhJDYjmwRAMomptBDv9HYr64X1JdhzggfoAJtsXjbTqPXVsNntvuCNKcCXxSX6TRfJNAS8MB",
  "key25": "5Tyw7d592SUiUw4f1gv1s1jDXW5xTZPr51167Qcq3PMGtqiErQXet4vaAxc4gLk5qJsXSukeknudDXvsChoSNA2Z"
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
