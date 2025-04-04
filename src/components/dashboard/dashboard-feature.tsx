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
    "5oQckcqMhB1MFd2sDXQ1xB1UfV7Jnt3bDGZfuxV2DXtSmhAeHHGbJA2iFuct8UavkqdHtfQ7Cv8Xm2R9WgpertAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuUJEyTHkoRpaUkmYzMV91E5cD2pmeMmd4XhwtQkVEqybYhtFbhyszYcsd7pXJKzjCeUXshwdqn3BW1RbNwG2Cq",
  "key1": "H79gRtpUxSnx2cDu81prfSUZoSXpEoBBtnk3tW3odeo8vEgUDdk4oRSBe8wEzy2LRBFgLNzkSt7jJYG8od4UrGS",
  "key2": "4h2XKUCfA1uu6TPVJAfZQzLf6TTgjXDHnDoCTW6gwDFaeGpPzibaRkGmfSsKUmFdmem7qFXB6CP6cMXh6x6VJCBz",
  "key3": "2NXVAAZJXq3aChgvj13NjAPx6HKtkVVDWxWJT3Mq3Tci2LiZqsYzYcHpQzgMFBEu6gGHNUuwg4DMHmttZ2pTBo24",
  "key4": "4XzRsL4fRYzSwXgceHEZg4VPsp9EXmj4PydhZHDXC3c31Lwq413ABywvj5NnrD4bC7fkD5E9b1fDF8dt4TdpJPpt",
  "key5": "59H1TNeA2XjsfvAJDC6VvKsatHyQQqmz9D99agkuNSRZn9AW9NLUUbn2ytaqhtrMU44hjd1AQVm5Xn9L1FjyaMQR",
  "key6": "kcvj12fGVHrB4RDU3kh7pMWiNhoLyiYShKhNXfKWd4oj2dNhLCNjxXp6CEUyyBhdBXbUsvCFGWFGJ3iTzysPoBW",
  "key7": "UNHc6sSTUhgCZSCXwBZm75p3WjXPaoAT3YtisDGui16SjPLzGgdNeRQWNQrAU4MUB9nJM9iVyn37bi8mB6ijvNG",
  "key8": "fMf5f6a28eHY34FFYfwxcEk4tSZ8NFVCXTjDTUVf96mSuned5B8GFquSpWLT9NpcoZbYxbEp7rqPejNiHPoU8NX",
  "key9": "3J9HUUWbH32G4vWxcxmQRfbvYiVQWpjMeMyjumHiS39xagAauK4vJgYCkkw8nP2pJU3gCRFzp8g9XQ7Bxw8LCbom",
  "key10": "ZQkQ77sS1mGHHCSGbYWR6XLxnvYLSh8Ze63aSWV5Nppq1PsacAfsGWjnwq9Q46vKVaD7ivK1NxExBUSadR2EyFu",
  "key11": "3y3sWXUZz9pb37KAd6wZKuPDQ7gU5vJdcZpMAAioXa1KsW5PTzSkyxdmiy7pSbo7wjQn6Wn6aXiRkfxwqzBwsdG6",
  "key12": "63b8dUAtShZL4SJDSEphp6RrKpJbKczWs8Ux1XobgBw41ba2jS23JAf2Qtw2wTZXVpe5W37Gw4zjc8bp999aAyDz",
  "key13": "C7WZjmLKMtUYZcVvyXg2NQoC1hxy1sp5thwxx6ST9cig6FoT61CN1qGV9WyGD4qeJaJGCwZsbPfQJGToxsg3VGT",
  "key14": "3aAnt78JqPBvW1fdDhrfGvnMMwU9DEHpiUqDWNafUCux7c3BHmswuyQPnYCxUFq6xu3B11QdpBWgb4BpJQ1VLagv",
  "key15": "Z4pJkjTCeVGUT7bb3PuwdqwrHtVbYFdkoxhdPN4sXeEhHzGGfxAqV8k4boeyGE3t7wP7QvG6Fb5it8YuGUeTiQX",
  "key16": "4Q5ZMeRHxxrKctoFY3DRXiZnGtTjrdYSXwmRSk4FiAsajiERALdw86KxNpRHdsks2LH2ZMCrCvBYEfZy5YsVM12i",
  "key17": "3jiztmE7F76hNA8Rhav3TZxL32pj336YnD7nnz5ZCGdu9ArdPUMXvvs8opKH81JJLiGmcfdPPP4w2KW1hsZu8Ssj",
  "key18": "65WbzL291eS4ABJztpe1ta6WxmMk6o7SvUrfvYssX4ChuUHWpbCgH9zJSVWFPdAyu7svmEYVq77BBiVczbTdzSoo",
  "key19": "5pDvW2u9MvpvypE2sCWYrPMFDsNrZWCFJDxfHKrgGMS5MTZZajJxwgyKreZNSbg8Be47kVDP6nFDQHb9DTfCVrkX",
  "key20": "2MeXnGThJAUjtCjDqmKXLTtd9QaXMFMWnyqKyjRABZVtJK8UK8r4QJukQqw3wDERch3s7C7v9HUCgDJkA1XVwweH",
  "key21": "59k2oSkv5nYPtNUFBgzqhqENHvPZU7zUUf1aB6kpB8GY8foMcHYDC6mAph49izbCWzaK28RNUg868JUwMy1bgUxN",
  "key22": "5RTfu1CCDsjcgQ55A8z5woJy2qUbo8eJN3cRQFpATq4PYNk8tQiiCgY7PikQChNP4aD1PcTGpJNDPcmjX1xoi3jy",
  "key23": "2kTwExEqeuHrjbJtPQeaf4Q6qTMkLdXufy687we83LvN2Pvft6gUiivcSi6spZtAv4VEjDzk9TA1jNdCoFpMZh7y",
  "key24": "2Z5VJ6L1zmr5UBi9GTYCY2jc9hFLYgrWShkYf9A5NFx3jLWMb66JWhqpptxJPEYcbVSQz7cEsCsJ2AXr84VbH4P9",
  "key25": "4P2Rtnxu8Kq4vYiZVLf1UREyHwMSa86cwX84ntiiBTeuJecSYohrdWgLXSnFjF5Mx3Zn9LcCsrq1bwM4uzYzX7Bf",
  "key26": "2jQ7i4zoBvAZzL9Zg8HDFSZaiiuXaHRWFDm34ejSFk2v7KswhRBH4iN6ErpnAKJjMS9HaSK5wscE5YB2EmbpfcF5",
  "key27": "36B88Bx5B7oX4ewQYV9rQHxqC3UgDJup4SNYdBLFND9mBTg8HT3GtamonHzCwqiVnSjFSV2Np7eBu42PcNZpiYTa",
  "key28": "24G6ocbNCE8WJTWvTDKoM1FzZuSwQkJCPRKRLCy1N1VxtkPyBtELoNaqQjGuymE2KqXRko7HVSwg2erCHhbcGvNH",
  "key29": "w7VH4BY1kgQfoyVUmWk1aSYQdDz8dHV99SXi7W1T3NQAWVuYe2kYksf3LLpv3LQDfYna5aYRkGFj2fhzPByhhHy",
  "key30": "255Kxk5D4ooQBQ8g8fta9tFuVr4gqE7dJsoCuEr8euPfSoDJxST4Bn1zrYVgbpyo4AUSkTibejTapabXzKXbw2d8",
  "key31": "2CUEdtA1hm8w4ikxyQaLKZyFvmF3o6g3yMiErCyPXZ3PA9MfTJN826jD3h4VHPvvi3D2pcnam8TxezFZyformASP"
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
