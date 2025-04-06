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
    "2zLZ6i56NFqzoG5obrGCQr3TxHYwdseisPvUzDmcxiEHPtr9ZL8PgjaNM95knjNCbS1nSVHg4EnR29Y3mxPsSVs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxGouDZWZqkugc4w29ffsuF46USTzbbXZchrecFS1JeLm5kXF6pUqaRs4CF5SEKdbaVUSJ6YnvwkKtHfx3pEQqc",
  "key1": "2vwu1Y7D2ENj6iPo7GZu7aWj7LF6Svj1m7w5Ht6TA3mk8tH1dQJW9L2gd4HqcrRNGWAeS2EXXnKXkET2XprBcMro",
  "key2": "28ftFZzXW33M32uxQayWHZTDYBh7LjaY692ptCM2RQRPHStWJCdCQYxp1UaoMtA45s6wKb9ttdKB4oSRX6jkxpBY",
  "key3": "3yCao4My6nfdMe4wxxcCYXs5p6TwGHtsHNm2vMK2kqCJd8ca4w89TkUZRG2HXb5rCMyBpwzHoPQS4ERKYCBRtrhJ",
  "key4": "3v2rKVP34Qu9wP4H3WTPL472NR4v7Tq6wkMEF6fDxdD1MNGUEsVUrtBq14DWhRax447b9db16wmU6s9KsuPRuWUp",
  "key5": "61sygyh5w4vVFpJnacC8FbBryV3jSoZm2YnPx8cYKhrckHrBfJvrmx1ZKVhaMU66LCXzpbmHWHUxehQUCE6e3ciu",
  "key6": "3t2DiRD5NBY5oheXS3yBQT6Na3pwm5jz22ZfFQonaRcW1SCFPwmM8Sx3dTUJzB34w1Qpr4Ld7zFKyhZ7puVwznHm",
  "key7": "4Bx9F5NMHvAaJnTesMtwZAa47HmbJF4n9z8htJH4EepMLTBB2JPks4VPQfQ3eSbNaCChxhWbhc7S4cHvMzBS5qD6",
  "key8": "4JoBBXTi22XNq7RAa8wZm91wxxenTLTy2DURCvJDxPe5Lj9U5ZrgmuyjcieqBT7zfneYKGrzCbFzUnC8dPYKktL1",
  "key9": "3Vkc3AXbxkwUFVJdN2RqF45bbxv9UiqC5qrirMqjwVX4yp8Jh4W9rJsJ87TNKWMSfMUsMVSDGPbKBdpZbDGHhzBY",
  "key10": "2y6k3iDYAx4DEQHxAD6BimstdYEf1djcYWjAaABuzytfDBByNCiyfWe8GQ7KrVRnWXZD7Qk49zhREgr9rk5HpGZM",
  "key11": "eBXX8RLgAZKqZRUZsLmCtWm2ig3BH1j9BvYWPyBG3ZxPXvjWzceRfJ86uwW7sezq625MzrC6RHc9vsk6uVxz5VT",
  "key12": "3Ubizi2XK2fuQDy1pnuT7QGfYhCieWTtAknE7uDtC7EzEFWiMuMDnhXcQsv4LHSaH1ub3XjJX1wwBEmThRYFpYmr",
  "key13": "4MPU9Vn34mrBXyZMwweQ4rhsG5hCd9E2J8pM2Uwti4Rb48KXW9v7LUvYiJBxskVhPfHmhT7QvLnzzc5EY3mwVr7o",
  "key14": "62DZtYAqBTfJw3mpmoVEmMywYKjTfNTVdhd7MNNjMbwKCG3ax6wELdWE7b5rsetwNVopvbb5ogp9NMU5T8f2rmkv",
  "key15": "4mQqfXoeprmxciSM6CgGpiHppL8795BixFsGtqrZxgNmHLN8vJkRTrpYBHqqzqWDHxERjzwKHBPRzuo2mpaa1Taz",
  "key16": "3Nzjv4CYHdSEZTv3JXFyKYyGbz8pog6E1HZyUifsk8ZPzMabdQ6br6evDfmZYEereoMPGHjnwtNqJv4fPgK2LL28",
  "key17": "5LY1pTQSDsgpvt6LsnLJtpwuHw3ed5WwKKyKwmtNeT2yWpuaSR3W7UsU7ZrqDi9jE8aVRD2a7NnEcX4aUu5RKhQp",
  "key18": "27E3Jmzwh7NmdcdpWZQrJGFLn4NVzh8VDPhf61LYmvYDR8KkuSworciZA4FDf8HNXuRDjSgWj92TasJt85Jy6fAM",
  "key19": "4Z5uEKj1fMkqZ34K4sLi9mbceiuL2CahjrwwUD9urbccuedLKze5JA5AARafuKRrApyKgN5hFtsXVzVpUq4F5XLg",
  "key20": "2jPkDKNvJTHwvKQ2BLoiq89XmGZt1xE174eNB6CkHZaFXPpszgq6xEawpvq3G5eNVEcqnvXqcLzJqDz5shJ8WPYG",
  "key21": "39Z8KASYp4scCuWQkKdUst8kavg8iAUuXqZGuZoVzbtYzu938sQwqbS6NyvrqgeeNjMYxj6bPrWb4cRJSUQeGaZv",
  "key22": "EB75LMYvsYumTtwMwMnXisxqr1t2MS2ed3xWmSaTyYmaA3u47nPB83ZnxPgXqFdSQjcdQN3hD42tp9LtLGEEtm9",
  "key23": "2d5pU4DSGgLVRvsWDNaaKnQEyi8KtkxS6i3gVvy9Wpv6a95PCHHzJrusxgqSt5DVTEiNT6KytnFsfGCBSLMAoLcN",
  "key24": "5HdYxBNzHECymYq7aXcBviE1cwoEeX3pJFHWzWzMzwG1wArmCHWTyus5wg2hTKYS9eeuoG2Uiopi7MryrstCYDxW",
  "key25": "3ZrsXQ7N5xu7d1nsVPhmFgssrHzcszR63xoq2viQAbwj8TiKkdAxxJykLo69QVNq7DzCXKySQkwKmgy9UXRrCKxK",
  "key26": "KpCcHkKhupayu6hUTwynnWiF8aDMZKWZCU8udMPBG6nCLCugAkKqx6Mo87oZ5S1zQiWfHYTucGuPyMeVTejF1oF",
  "key27": "37yqVkczBXvERbTDMwUCqa66KrtUbGPFn4k7UncoNgGY2VK6FseTpzSt1G6AJNF9DEouLb9R52aSPFYkDsGSpore",
  "key28": "29T75MMvEmm85TsEJMPq2Xk9W3b5CYFMq168UksYTYjKNozWZAp5MZmsX2Y6wwsSB1ErrrRQvAUdDRmxREQqVkik",
  "key29": "5ZKxFXH9unn9AAAdK1fRZU4CXBDJG12WaKLsRc7A31oD3MaEJ4QUxTu6Uh1KoXKuffgjVHiyC3CLTZmXsQtARRog",
  "key30": "gfadNML17SBHtkYrKgnmJTWVFGurM84xS4kmnZxumNupnDoFgjExfitq61LqcHjc8BSAWn63vcnKmn9knh2CiGA",
  "key31": "ZJr2xSex9CLeepGgU7SP3vsx8QfEf6z1ihHnD1qRJR4qPeghyfyfpYSBGByW1T3Jveuw3DNrkyjDbPLChSg8YWL",
  "key32": "2pX8FT9H325Z68kEYwjYjqQyPwSQjiyPhsrjmTjFFVktDpAbUQZ55Dq5uQVZVvBg5mv4Ki5hphh49XzMoSyHtyxw",
  "key33": "5u2PdrJyk5PedyLf7XPrqWAsucLgHLZbaJHhmh1vR5ZbdgYf1EKUufAwz9mawjG7ZjLjwFtdkYAMwgUZZcX7fifU",
  "key34": "WmTqH6TW732uZ5pVzKXevd3BtyuPKuNoye4KigPZ6h29Y8He1MojKTRqziyBT1z2TqAC4X2KKFc37W2cse3WcFj",
  "key35": "5bxmyPyizaR4JagJ5g2CKsLE1UvtU7gz3XkqSjfsprGZUnr62XyHoq5kQmAjczR4nGFvBRerRpxrQ47jHbyuGc9j",
  "key36": "J81oGMRxki161eLUm4GF5HMt3C3mrv9cRXTdVUs88SbdvJHQoAinfcWeqUjq4UyHtc2Zdi6zGFARbriZYPFtBiP",
  "key37": "51zAs1TtW9rte2Dc9wg3hsyA2QBRywesW8thpZNAJzZz8N5Bx5FbtTEuS96s3Ez48nyHJKwUs6fNvupYTbuaXrqN",
  "key38": "36XvGezds3XnbqDPVAtFCFam9UWXrbeqn8murZZvf8sCyqjwQLsPxh8jQbMXZJ6dmPBJMpzJafSvDCqpNogJPdPm"
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
