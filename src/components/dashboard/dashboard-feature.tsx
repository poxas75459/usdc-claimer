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
    "5RrkssaivnG9EcP9mE6qCibbZk2PyfrkqR42XYBRubEpDP8r3EP32iE9FEziwxAtrih8ZbzS3W7VLb8k5ws8VzjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWX8RJVnswDnTZ8B8cZhCdnkymTfjU8RaneXyR8RKaSmztKzrYxwTFeJFwteyR91Vipbr49Dp31i6eda4P6Kv2n",
  "key1": "2a2Biba8W3nb65zp3QoMjqEN9NN22tGxJjWwhb6jPPTzCFA3eRJXCCqsitK56ieBRUqjwZaBrgHzvTymqsw1cPKF",
  "key2": "2ytst6RtBqZBkmYViFnszbhfxYXFVZbwPcNpZ1JY4na1SjxWjVsXNXq9gZzVqpyoyDhfJm7W6piY83EmPtdSX53P",
  "key3": "5eyvUwrqQyvYm5CXgqL1qtprDKhUcinus7iaYNGFndg1BzygeUCPRTdTVv22PbxZoo9UhBZGraAin1jfmkLycn3n",
  "key4": "3i9cEEWXxk9tQ5DePGXVseSYdAzWwPJdeHyqZikuWERyq3YU83BVCeq2PwR26mea4W4Mke8xmEDuDEdnTwnh6xyn",
  "key5": "5PHBF3BX5oacnxdbQfvCdBHWC6j8fnmDM9GQFWgsQJ6UD3ZdVsNfubPRJks82FXCcpUgkV6aDfUaLosASxqg8bwb",
  "key6": "5Dh9p2Dwc7ZPt1qWQCv6xBZ5XRVBEVq3kFdgsF7eb92g7Nu1fKMHjubGWuAZgoknKEBLoqdSgJvLqJgnuzDmvTnZ",
  "key7": "2cAmNJFpXn6DDSNupEpVK82FfYqiu8B2iZZGvtS8Y2PC2w2YB787S2qowz5ksFDnX6zRbRXznn2CoSxw34WigxSX",
  "key8": "eynX3R7EVt93EU7a9qKZRSC6p1eAEuHPkizekzowvHziX4uD49QFk2Y48xfjYesGrkWX9rAqvYqgMaMdnoCrJAC",
  "key9": "6JSZ1eovBEkD1i3KR3myJ5YAytR3i6Ag66AUuXraYj3NWb57yjgm2FU5mGqtMZ8UHPVxEZMJaENFX78kLjxPg1f",
  "key10": "6S5EuFrSJbNtmT83N8aReaabvxafGcipAbwSvT7fRHGVnPBPJFzRqfowf7d9xUdctCoNjDVkUPrQGRwMJyw4EJe",
  "key11": "4LS1icEEmTSMqNycMbySEtWwkwkCtjezRKBedNRh8enuEXkfaGaTT1ixgiMmGZufJuGw2YgJ2iV2cNEK3YJfKyFc",
  "key12": "1n9gwCViw22thyoW3vGWuYGWZ3JosWj44rfJVYZj3aFDikh9JKhLAxjBxT5yg18Rzb7biK2UAoVkCixTQ1RDo61",
  "key13": "5hFZXs1chC6gNJq1gJy7KoW6Bf9VzsU8Z9nDdRZ9tdDPTdrt3bSH4HjwvUExx4Amq5C1EPa8zoSsYX5kkgni7vZg",
  "key14": "3PbH6z3XVu4CTaAiSCPqUa6vwbe2DUm4TUNtap1TSp5qwjnTxY397HBu9EYDFkyKhEL3k5V5ZBCsvSZUJ6NeuiEU",
  "key15": "2vRgEFo1KbVpsvYtQ8mj8zXj9s9QwxDNVbM9zTv4ihGaFFKHb5QwWWfNz6vEKgPFmxXGRAEVwTjsCMUZn2mbQ88L",
  "key16": "KFY1cFuKfYZH2boBKVJtvnQoJJ1HJ8oEw6aQzJS6R2GDGibVr167NP455fuiPjgzQqPCdv8gH8NTA8iHa6ACC4V",
  "key17": "4WJde8zhyYuehDwc6vvrHwsqXVfXMdvyWDeRpoU5FYtpqDM79ymBcNKS2meR9LVYBSQEVhkCZ9oC9xsquQo363eS",
  "key18": "5DidELUEp4j9UbC7oPypLF17WCSJUqocCHuk2jXG1HP64zmjB6qvhk9RJPApuL12Nje1S8qk1VHGTYzEaRFgqtBZ",
  "key19": "2LEmLAoQkJjgc75PnevWPpkzmdxg2QdhL5ogFG9fEBS8c9XNetiGuRNipz83AhhaD4CESbySx4BkZByDwd1sLfkq",
  "key20": "2FesGnQw4u2gd9N9e7WyZ9CLBUb9NgPS8kb5XkE5ntqRzEpLPkj336KuUDAXCxatws2LpAFvut5TA3qVVCopBXd4",
  "key21": "5xJXULPubvYv1D96TBYwHJNiawZ9bTof1cZHgA2xRJpMaRM75Vji8wKrYmUFLrxXK7P3k7u5vdRYXur9R3CDbLbr",
  "key22": "3Yi8Eg5uxZKuVE1JZBXhJjjdfdMkwRrUQ4CyCaiAYRtbV9M3tqFYHfFrK5woU9qgTD7yZjEfup9XLrJcJEuQ7Ki1",
  "key23": "2Mht7LKRnK5gBieyDDWxoihT4HCx1ciGfcMGWAsyDqJXN8RT2xHg8iZuShXpSVQQA2hYoMMFwc1URXXEmWMEV3RG",
  "key24": "zEqUHKhWrfMe8wkrQwZKsPovpD7QHBnKXxepKHNN1ddLADytkMMifQGXssdYkUoCzJUJpvUxbXtfDQx7Q8bxeTV",
  "key25": "3W2jyRi6r1bKWfQzKynbwC3d4FcphNpMKda2r4cQSmXAYpu1zViHQMZVqzS3v8c1ELgTwNczHbze6pavZJz5X4iS",
  "key26": "5HeWuepe4EruyFEsr3HFrafviXDzASfDYuHnPepLEJToZQgw4DAap6FJJ2iUB2dssfy6WjPTXo1sVxUyhpsVEmmn",
  "key27": "5k99CsTVRg8vJSgugurrTQNz9PrFAojzhNRoNihq1yC2vPZ84xLKAqzE6i4jPocKPVexiNQAaDgwvXJvQJq3gnV",
  "key28": "5xj9tK5WLYjm9nPTXYtpVccZQktxkPt2zFHaWZKKDVGYqMXzmX1kxZuPkTZWafFs6RKLNuGFwatzUCWJ65XavbPJ"
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
