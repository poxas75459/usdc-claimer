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
    "4nniwwNJ37DeViGbqkLeLsDbjWtvS1x3CdRMTqXssAhJxWisLU94PvTU46AY79WmMwxnCeKBMq9ea1rjvQkPpM73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FwMkzceHTfnkmGXfNDHnXKPwukn2AAN3QthR1urSHP3MTqwzQum5aq2Qiu7VtawZL1nXQWKWGFkSUf22Dt5B2RP",
  "key1": "2QzKgaHP2fuW8LZD7mwALzUD5oEU4NJ6tZiTdFBgmgLsqX9zG73Jki2vMro6aBN3EU4ujQfMrgHXVLUamQuyjFiC",
  "key2": "noxcNjLWyJg4o2VtB4p4ZZnppPGNk4AHz8NNzJYAv85uTWeNuGJtLvzGYaoyWwCK5QBh3acmpVUbo1FAGr1hNMQ",
  "key3": "5Z3wxLH1JoaYT8dAVYpj4pTjWUj2RrBhjhHdVyfxiu6BGGxXFXTRN4EZnFvVVynHnnsed9Ltx9DSP8V3UrPymxAM",
  "key4": "4u9xevgCJS5xvop8TuXGzpRHC8jeUaswniwbKAMTjaXUVS9Xn7M2FHSz3N6AYszFFruFHzAZHM8QnwivB6sXcMmA",
  "key5": "67ZYbzUvW7jt3fGQNVi7ZxVQ4QKG5y1nKgiTU3cNmAEEqbktHmHuKnKrCeAiQHyiuSnRGR9nXW3GFP9CutJnrwaa",
  "key6": "5KwQQNri6YM475S74dQEQqKB23o7GStJsiXBc6hFevnqpBPBpt5udVzHxBF9CT8JJeV38B9ZcBeSXXSC5wuQzL7j",
  "key7": "3APNhL99NwtpQrbYp7TpQ2Rc5EnMwQepfXw6pbsxNaEq6kLa4E5eZgNTqqrJxT9pwcvfBn8PvaGS5ZuHK7kt6K49",
  "key8": "tyJqBCZMPi4GY6K83CVQHPLpVmwWdXuxqfotkZuRnXmZgZksHS3koAEsYqC2sh1XnByir8WahEch3SnrL5sQ1kw",
  "key9": "X2mRsWZZz7vySrZkLC18wcYMUMa9WcCP8nESn8npEwE1AEqyR23QzHgwyQx2ZYsZTZFfTbgN3E7r85f3trXbkPM",
  "key10": "5g3dqBLtrStco4q3kJnrb9mfX914nbbaCWWFeP5wMxGvUFT4PtHRvfnmVcL7JNYqwUCVZbhwvFJRKXFMVxd6dmnw",
  "key11": "CEphYxByLtoqkS4DMDefvB7g5pEYLY7X6ULWNALkk7YkyeNtGyVdE519xVQyahBnyMTQbRstPscbhYeAS3jqRWt",
  "key12": "4Sh4LKhBqvzgtTTnUYP2VX3TBhg7RjCkeoSExZbhczhhShUduT6CVreXpN1UaFAVYAzMtzb8F2uVyo61DGpHD62k",
  "key13": "3K9RAbr3R2xhzjhdqGdc28ChRKMRSpx3XuPesWH2beTFNjZf6PG4fJvHA73ie9cfFDCF9KmR5rippKF9N54GXiza",
  "key14": "2Z9CFHBxuFttiY1ykexj9MbkdSABNY84rg8ioQ7kSb55XnQzU5nQijz6Zf8TX5oumqaDxMTqDNaMVVshp7FXFpBT",
  "key15": "4SMW3BiANGDQzJhd4mUenY1374eu2grkUu2qbNh8h6hAECmAui7G6GaPr4RMQRqQc1oRvE9cNW8jKw4aRy5xsmhk",
  "key16": "2BY6zXofiFHGmKbduquRQC9wp5Hy6DFas5vMxrjPairqHN3S1uXtVHt29WCrPa8wv3FXGBqJcvxehu2z4eJW8Gp8",
  "key17": "4fQiVB1m6icRHsAmp66Ai85xkcVGc5LmQiJ2pYBmZJ9jUGoKV3wmbDUZSVCiMh5jS5aYQ9PvgzSKgoHac8S3248c",
  "key18": "5eHeZSBwJtXSpcQdgtboHiUx6EwqrLQXSUEXFhR9mSczy2RvkgsijrAzCSGqQBPafxdU8TQ9wZ3tMSufCe53Pfja",
  "key19": "2RaoFC5iJrE3UnEjyfEFbYD4nXCx6NavBBniHw5sg5qtSmrrgZeA93Vk4GgHSFpPW3Yavxhmnvuds5kZDGyuyMAP",
  "key20": "q34thnmfj16Bg96t1HpZTDEZaeUhEmWP64kfF9qiqsZ1zoTG5NXLDdpHBa16gfkwJC1JsC5BYfzuHC1a8k3fdCA",
  "key21": "62WTn6JbCKFCN245AWigB1TZMbGMN2tHiYA6GUFz5UAKcJvrwYvdaMLzsMZKmm8EpJXMoSFvgvsoePdGag5a1wuz",
  "key22": "M1BAvGVGFH3XCqBDfu7pbfoSsmWey9zQdoWeGnUEmeBJ4Exo1NSv4GGYszLkUvseiSyP48fUxabG97fjWnA98yn",
  "key23": "4zsgEjQ73FyxfmMT3Jn5Yx5dBZEhLDQ8YVK1SroKPUykoE4UiNeyLL4pe6sdW3eAHjVrKKrhsb6JgDqMhrNMY3Sc",
  "key24": "fw7aK8rxTkXzrtHRyDypiscFWY9VTiWr2nR3Bynmwgfve45KWJuu85DmyJAXmhg8CejgZnfQH5AAxwwM2tAJEE8",
  "key25": "3rRXMLKy6V5vQqVeJcFnFcURrT57r44vY4PejN4sqdtKzanbehCiSv7iGxgLnjd1EV2t2yfQgBFWX2Z3HK3RMy8M"
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
