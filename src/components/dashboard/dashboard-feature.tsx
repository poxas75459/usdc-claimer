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
    "5ANN8w8Nk33nLZr46UiBHpcE2QxNKB774JKyQk7YKNr1VJQPqQjoDUSYpZrp4fJcKYdkwkwySkiMkBAuRbDvPveV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCyEbsh3wKKfoR6JSNxAXs7HDoKrRd2YmrKiPFZE9FgDrd9sL53ErH3YHjmciVCobrkQiawQ2JPv7SUwfm2qLez",
  "key1": "2dwX2vDxdRQzgomb8Rj2iMjn16zbDNC8BkcgFj8b4cTd5MA72cbeUY9Bx4Kou7xhQCtFftQHrYEZQqmNsVGF6Q3A",
  "key2": "316oobLytCYcYG3kV7ZnzuPrmCL49tdUpX9tHsXkkShxHXhtsJiCZZ2mZGzrwZ8F7KEzFE718cdg6bMttA8MrqcP",
  "key3": "5cT7zW8PrXZ9u3sK3wTGzinBZJ65n5SLqNbdC2WjvE6VCoxNdKdphvqV4vuxA74Tues48RN7T1tBDEGioPMPZ6G7",
  "key4": "2RywkZnzkHGY5n9TPA4hhWvSR5NXBuZbXiBdQgFNXPC9EQAD7PUCKMnD9FwtSNfmPLhepoMRMupnAAAc5wXr7CF5",
  "key5": "3YtUrnZznxeiDv8CxFQkDCTiZ6kYgrKREHbfNDvA2mdxDeonfr3rH4dLeExpEtGA7CS5GipWanYHYJRcjKcdHGvG",
  "key6": "26JBXFc6LGGS2SfCKRLJg8UGzX6JeVR1dh3vT11r1Andu66HpbTsTma7R4MXjWdo32p1FGVffyWaar41nKStqLsP",
  "key7": "s6g2tmRxM8qLaq2UdKFRxGPrwj89FFXBWheUUt8pGonq2y1q3ENHBfQxgJ5BPtUXciHzSsEFDqEEwieWei5bY1n",
  "key8": "3Lc9szNfTgmdRcShahCJNjic3nBkkLnZPtaEK5exckHWgQ4oZqEHdu4yQvYVXJXZW3UfkM4fxESMBBwxAcaGTA1",
  "key9": "3TBcyJH6pSUgQpp3xMbJ6ueCneUima5bLGJXmh9VhSruYuCHBVhwK8f2LJTUba8SxN2w5MC5b1vXvkpmpWvNo8nV",
  "key10": "Hq4eVJvpq1BgqTqicF8AiY6x6yDAwj7oY9ZbfKtAJKKKTatMmNoHnanYAgH92Ff3cmsx4jeb741vUGy7UVZ9rf4",
  "key11": "27fMwzGYpw8UVbVQdFpwPcshhKsr4ttq3S4LVoUtiEgWuXhFE3vrTMh1efFoC5jg1HCW9EaXjzKFhjXeKBXFcuhi",
  "key12": "MkSotb9kLjHg3WYLJk3hmYZXGHeq6Vdv63Zwzniu7ZR8Toj9PMU9jE9PRoLyWdXo6TFRzLmzoAsb2cjugkNadxA",
  "key13": "61Bcoi7JGqpNQEdxdm47fTYpN7i5vvk1zg7starEwJmieuwhV8C4XG4AQFG6e3urCdtebF7m9dEjjuSYFy332M7H",
  "key14": "2GNktgqCHfVhcCosyGEfS29X9WAFbYsjZy5guXTtNXkNyp2QWL8eqpPs8uWhowPiLBgRhZyAxjLbMGCaghjBaDj6",
  "key15": "noUgew4VmnrVBvidefZqWi5HzgGbkfUYyAHS1YVpD1Tw5Jcx8JyYezn4diKRk8fm1FKJfzemD1zdV3eMmtuMorc",
  "key16": "3mcURN8SesqkjqmnHUYC8ayoDQzQdcCN5Jm8emTvSGrHQsyvHB1Cat45qoQJox1VHt8Y6pRGitcUgX7LfUFp7Hwk",
  "key17": "4C4cksWQvXY7Ey9PA7w9Bs5hcaa72UcTkNhENv5KqVWX8dFGqTLHthjmFJR5XLcGZaYjpbokXU2djNdsY8bNhY1L",
  "key18": "4feqYMwBtp8i8WskdCWPgWyVvstHGNZkhmGpXoDsmKbXYKJCfeGpuuNAtQ74UUi2wdzgQtiEcnD24e5VkLHV8RqV",
  "key19": "3zzBPA6uyg5C8Hy5D9z9Foce81tEvX74NsqEKfNJcCa9sr8TEx2wnBNBL8knmBxPdyCwFZ62WCyFDEoDdbeEf24p",
  "key20": "5iMQShPULdNSZoshRKf8zDswgLjgbLRUxkfPpn6Q21VGaz9TtG4to4oGBGVUEUNTeESkTndpzEN9Wza5yKSvvcyY",
  "key21": "67B6pS7Lb45EU2DyLfMidJMq7bPRBRVoYFRVECWwEriq11xXPX493MUHnyhXyyQWHGS4gjtstyssfko6ZVAeQ9Ka",
  "key22": "48ikk6mH9ZwAdzWLoQZhE4D7bTFQDaRAM6fe8Q3yJJhmJdJ3hH3hV9gwC7GYMW4MiKeZcp4iDSmeDEcCS8xYRa1G",
  "key23": "4U15cvnudhZkPZ21S9Q7fFiF3NyJZKUkPQ1QTZX4YUzV7k85SXo8VunFeTwx2yN6TYp48r6c5N7bgrBwVfYqfGEb",
  "key24": "5hrv2QkuCttX6pCf6jMG5WT5GAvveE3LsUhr9dKTqaoY2wn7sEc7VqJkUkT2CzGZdU48cKhsrS5bTY4px959dy9q",
  "key25": "3EptHRnZkaHdPZgb6oDUbtBTKzrzY8RvCx4bAMBthjLkKGcYmRafpK5AuDoyJccMFG5VwmD7tQ5svJqX4C8KhQ7S",
  "key26": "39AN9qS8YJ9QDqT27hZ3vhsLPGzwJ4e3VHBvPQgxCFZZpPRZk8hqkLkEqCSFA1fU4qTbsAapWoygjr7FJshXjxmH"
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
