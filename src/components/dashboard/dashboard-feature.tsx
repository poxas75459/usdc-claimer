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
    "44CqmvWFPbYtkR1vA3EtZEGiBzqgvN9GGseUYkwxCi8i52najfhzM5PmjaWuti8QF55npfWEsdCqTsEz1mKQt2zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHLYg4i2BVWvvxqcMCq2pzckxQkdryfkNEQQHmeuvFiwYcPMGZw9or7izFp319fHc9pA3Jp48ztV8s95NJTkXCW",
  "key1": "56T9y9Z4jr8CKgVKgpXGMGZRabrSGJUPSdQfJ8QPV577e5614GinsZeaVW4JXagyr5kZU8XoZHWJnJeausaoffCs",
  "key2": "3YzbD9msFAcbfw3fAAbSn1agkdX21C14W9SwWPZ7TVd87PLJ3Gcubf3rh9WSuibPCKffnH4NwrzBxqJShc1fEUHs",
  "key3": "48KbaEKz8otGE6DW1Xpo43bkfySLcCqn6NSwkFDMrDXEuQsGNo1Q2kNH6PnvJva6uTBDZuy1DfwaghPgRsQZt5DS",
  "key4": "4doGtFcDitDkJz2pcUH7bVHWn1BVEksaJz6oUv3jCc2BB7pb4GDyoJcxaoL3ofF53zbpQdhENMy4M16DPaAwprrs",
  "key5": "4jMp7Do3LZWv1eKFvvWTCJWaXWyQLTw8MHiPwKVdDcZykJyxVJP25ndpK62z3ea6iEKoyn6JWmEMW7rYKC8PC8LD",
  "key6": "JPTz8s5ZjpB6p4o1cLCifLU4wdbQ7yPtF6GA1tBRydSiewWa748JQYXMYbT8HzFKz6gHiNe4sGtMcx8pa1fPohm",
  "key7": "5D9BKdew9SaaEBzQ7dDjW38iTnaBS6NnD2YQeY6ateo3MnehnNGhw4X8CLzktG5PkXTZR4JmvmmtuveGFQwJ7FBN",
  "key8": "5CKvATxcorpFF1afLSmWCQsAPKKZXRSr1X9pQUCg5NcNCovTAY64QjsoVpTMbBTnAihvfToEiyyt9fHbrTt7cmGR",
  "key9": "5Phw6eFjKJYHwwrzUXhVVWbvWrvaqhnRagBMFFvRLVshm4u3wQ3m621H7HAuupD337rLtcdNeySE7uQTRfxn1832",
  "key10": "5cov2bciEgivCBEyifbPYWsiKcMdCq3cuZ6nTqHcAgt7wxULt7QoUJYQ2jqif4jbUXZRVHLZhw3wdKUV1aZspuKU",
  "key11": "4HTahb1AENvH3FRP6VosvN9LcgM9u6zJ6UdJPveWyhQN29R79GLbKEMmJBC5WXgkc8am7B2S6x5fdh6BVYq1fANM",
  "key12": "4PH5nWeueKvpyRnND82DmZqdE8Dd1GQqoVbbrZDDXU3BihBvWowawGQrc6TC8uwDsTb6KMPQioDQtxrAC5KYm7wC",
  "key13": "431uWuJDCuhUJrs6NSNDmbMcftZGc1YsqBA4DtnBA49Bpsrd6gKi5Ra6qaJq8A4eiX3Y31b7YHVRCUcjm2uPE4cH",
  "key14": "4MvkLYscjf7EkFbREpqKcrBDd19DFGUFkd65NxZjUJCtSpRAgt3DSuXAxH8jh1bdxRxxCpmoDC8EMx9JivTatQD",
  "key15": "4fsfMScMPi2yCwi4sMg5bJzgxegUzRkso78u5H31ibZiEsCDi1w2ZxkZx1kVrGxwk1xQV1DFmV3ereSkDHqt8Q9m",
  "key16": "18wP6hArqm4THEeLXoPuotdhD7uPXX4BKYdtyJg26vGGgXS4Evkz8Hjta85ghFwxEQgKXm1JyJ9GHBebAU7dyf9",
  "key17": "4k84cuWzJdXyXgLfyWqwPZj3E7HEryT2j19EbiqS4sbGBtZaUPourhRbKs6CVphrN44eBcfEB9FWvfFMRrZXf1nm",
  "key18": "3yUXoqTVhgd654mbfg4wA4J84c7uA8i7oeKtkzy5fV7gRJcDnZHtgPRnq6gZ143tESNz8cp7vAVVASM5LD5jdfmA",
  "key19": "3WyDEp5gCJ2tLj4ZVQzAijJ6yQBZJcPuSGWJdCRaf8o28MJ3eYpyKPFErJbnunjB4WLrmQRo1sf7o5reiGFWpFFT",
  "key20": "3SVNuwLYtGjsgwovMLUrzPAYLqTGiGoXgXpmZU5UZ7rrq2pzyUejcv5UfRpUX6rEs6VvankrbLHs5uZ4JyyhMSeV",
  "key21": "2zjsWUNNmwccXbSBHovx6aSb95TesocGfkPY8NkG7qLt8THEY3eAcQzEJjG76vPtHorWjTBJ3sb733vmyFNkqC6t",
  "key22": "D5WrMTgmDzrtu7zu3V3XQ48sh2U8whuSXaTvCe2xCj3rqdvkU1pQ5ynZfXN3KqjfH3oDyvvfry7KJVtNj5Q8sYX",
  "key23": "4iXxcoeEHQcsXxQ3NvzD8w2wutqKhSb8e8BcvZy23aNvHCVAxZ6QJ1Bsh6WC1CFULj2hqpqKW4BmU6MLWBMecJH5",
  "key24": "2qGiRCiDjuvK2pRm7VcoJacbS9WQe2p3RTqFCxRR8QDJknRfsu3P8DLzH353QuD4xe4dDR6Wq6AnMevK1qWcJKCQ",
  "key25": "3oNfiaG5u9gCMdZrSTWMoc6GSeZEANvQRD9ywFZGwwbWnda3sfXfkGUYriWh85Li4tQ1cJJJ9hN41X1dL8gBN8cG",
  "key26": "hkRGKeX2Z4dWFmGQPXvThVDkiqGgfL2wtorAs8S5sCc91Nieb6auspnZvg9D2koykqZMUME8bjBzQBW5s5n5uYf",
  "key27": "4s7jSHWvJ7YXkG1iavvR3t5caz1GgmK2UbNHBNK8ZbRxMAr98mM2DvrXEDEVMXAmKMtsd3AujADbJ8tBaBrU42jL",
  "key28": "5JoCmouJqMLNFZUy6FptoYrBEP5sEqm17kRTU2FGFdCVn52voRL49heWep7y4VE3vskp5wdjkzjYjqNWzWgWXz2d",
  "key29": "5DRhdzq5jtQMcyn6d9HGNKvjEtdAdF4P2dTDTLucaJKzNtUVbtk39ze4c1Vn8MPS6dkXvyugtCX7KYS1147CjgZE",
  "key30": "5AqCuD4wcU69rVVwHAoTMjWvs9PsdVQgb4dLndoB8KqQgASedCQpx7g4wvPCWDGbKeN7MDQjx16uo2FrwfwVZMo1"
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
