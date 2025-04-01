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
    "3EbugueodGVvquxStSyysiux84XKnyXbx3gF18G6vWUfXpNeva2FBJSVLj543pPC586DxzHpBNfZAU3EbHEVAorm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJZGssAFa4xTNNAoqcCQ9RHhuhKWsUmzXxGAEfcrJLhB5NMDBefrytYsxSv4tSPRhLj84YvG4uGhs2His9oJraD",
  "key1": "5CDrxGFTJX2JCvJwyGLNsptpSxWBZoH2UWNAYcicgZcmYgXvwzUm3aSp6nYCDRMYsh9KD6XKcr4bUdA3rXvqkJig",
  "key2": "5ZZ37wtdxDzwnBcnFFf4pSTS9KraKpV95g6cJeqt5iWoQRnAg9ctPaeKmbfJGiLSYu7fLYo8suWMrwiguN2ovh9y",
  "key3": "D2hfaUmVNH6WdDMzhuEp5A28y2eTdyRq1VYFRPu3Bajnzvfp48dnQgUpUg23zRRWZTJF7iJqqwGTzjmhgJvps34",
  "key4": "34hdjRTXKtzRvYNievcnSZpup21AoKzqDy4pu8BT5TK5LQn5wC9kdjYCqpRPYYAM4bMthsM6XnFUw5evknvvui6R",
  "key5": "4WYnSANS2voCkM4jTDvpomoSxhMHcgWUjLpUoK5o6DxkGpYyv2URPnVoGjQ9Q8EHej7xBA69G9EQfjC6RpisKUER",
  "key6": "2eMjRfCGHmTbz15rV46aZt3Hy5y3cZzxe5hMxYCKamYQtFQFVgq7rKxEwtt3YDkJMMGzmw1G7qjmJbyjYLxx25rL",
  "key7": "dRuNyozRGTXE9nWzV2SuiSohucmMi5mTjeugPuFWpASnGLwHHRU9oeWJjfVncPyTQ1hb8JN7eSzYW5Cs7pofHXs",
  "key8": "3Kz6uvR22pDN485LN7Gi1rVKGe1ZpmEHhQ4RjQUMCWULtqXs4aJHHbmuF94Q8Nra51G9PrGsmm3ZTiAej4TNyrtJ",
  "key9": "hkn9Zh37edXK25Gpf5bK7u9bcFyfKY3kyAVEv9n35h8vsu2gd1XmVtqMJWn5ViAQ7ukUDvFYE5YYX2SeTXQUtLc",
  "key10": "49Qx3si73PFL8SQiYpc2pECnXAs8MbBJy5MtgKftfsUq14vcAuudEom9VF9PjLeuxi4c5W1boUeGNvut71StxE9r",
  "key11": "q7kRnrZ2DoKNtQXGUwRRjFfLiSWd2jr8F3B392f5T9Fo2QX7uWxWPzxB11Kc6M2UrmnHddpUJh8Mm6PULqsibZz",
  "key12": "5H7N2H9hCSD4iYGYA9mZaDmxjeyqtbTWq5GYn2Xwb1Qmbsr9JKGNsw1nUWEekje4uAw9w7kQ8Vi5SA8q4KCoLjKm",
  "key13": "5DtsfMejfvqnHAqPptQAdSzA5Cn1C1SQuihW4m7x6mJCiS8QZE2G6zjAa13xyV8tAeeE1g3L2p48Kmbqf3aw9mGJ",
  "key14": "48Um25qh8Cbq3sut28JPN2aSGJ3Z6naiEGXf4ykw6Ci2QoAYJs9FDSH8xYu9RwT3NakTo9q2DpywPenqdqwBz1U6",
  "key15": "bMNyDnDJrbeD7vyjK7nRSZATJwZHQwdpv4B94BXK6t4CRrEs7SE5mX578eMaheh9sCkbq82sYc3VHA5RqsZLUp3",
  "key16": "5ddRzJp4PEF6WnebwMNbpLbRfWCvaZkcLVnTB3QBVGyyeNaWEpQXxCvYgfhVm5s56qUUz9FKnDwCrhsuGo5e2K9k",
  "key17": "2vyTfzWwroirK7v13FzHdBpEFV2ZXdip6r88VRR9hhYNEYnzkJrzBpwniDomVFRZYzoCtniK8KytwFxVaT3ijbAz",
  "key18": "2W2BapXhuVTa2WcQDyA5AEk2a8yANqYkpqpiVzf1Y2WvfgqutsdpScnDCNVpSc4DXcmhNmE8QQAW6pXtfFr1eFmL",
  "key19": "5oM5fPe3tyt9b5cr8XCsjJ3qas2ZPtLWkLPWg4CJx4XEkL62PPkC6wbuMnBPe11X6HTMw22Z89neGdMJsH9nSCxk",
  "key20": "3thRDHM1fY4FveKwvsqbhTWJyJpqimJss9tnt67sMRhwZFPsLzWYDzbTN4pmCaPDnELPd8PpbwRRjJ2u1mgeBg3r",
  "key21": "2daGx5vgyXtkLTFoupTHxT8DPjgsJ5y6qaNuyJeYb7PR7EEdkGa98Pgqncx3cEvJMpPCGnd7T46YLkLAN2hRRXyZ",
  "key22": "2nBnf7GFTeKai5yipTsz42f8oZjjCaHwRP2FkedvuF29T6h6FExf2t6fFAZuE4eUWv6w4BUNPhHJrUJPpVFm4Zod",
  "key23": "246gJSqSizX8rpXWvo5JnS1orKyJuN6wvw8XP2uhkT3GupD2ygyZZe9FbaVJduugWNs6MCAAbBs9wvRwTbwA7y21",
  "key24": "mg2o6Gdootqn8ddCFgVWWM6emFNiX9X66PSRZ9sGzYN6h7htVciwHzA3Fq5vuSs3W7MnUtwbogNQu8ZsXBS6kid"
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
