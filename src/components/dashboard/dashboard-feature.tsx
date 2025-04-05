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
    "jiDwCB75FTgSNHmxSwx4adMzVrgrBKyyWUQYEW21o4FZbPaD2uJeDe8VHVimf333mkmR8vDHkbnkSHUixKTKff2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XUixCgXAG3VwGgYYwZyWeUGQzpTgpboR9zGodLryyreTy3oH1Ysy6fkbqpgp4G1gEDyn7y3b7wmMtaofVcsWsQ",
  "key1": "3S448VFgTsVrfKh6Po8uuFJB3fN9tBKU5ZAGcPqHhzCQMjV9799y2i2MgtnDz8sMQ6WUPmCXgM73mEz6mDQRX7pk",
  "key2": "4WD3ULnxxZD93vkEKYfB7h1mVcKL4KNLXgpJ4u3LQcf2voMiNdkW7p9ng9stp1dzwFPZbfyw8Xjmv91WWHk2u7iL",
  "key3": "2raxtiFMMYLZvgbe7mSsb1RnP72pmPsrrUFLFf5CtGy2Jqdm4zBi5FzdaztYqrS7vPLW5MMe3rSkXdXfgXKZMgKt",
  "key4": "3KHcxWYYKV1VYGcCEZerVnSJF2ncYKYcQV3BxjdFuenDAxxJPvbExtoNokJpfpozcwk7uMRGugGsTcKD4gzuFTVL",
  "key5": "TMDaEQCTvpemWYDuAk3FPvGLhjh6FSbfjBTXKhu3Xd4gEYqUiSgoJN1McFWQuejVcBq1Gi1ABjTETcYbsH2pjyW",
  "key6": "BqGzQunTq7pft5ysSuCdgToi643QCNBAjDscPmnbVXjHrzbXjw8o5FfxEgXqfTDfhFzMDPVp7yevRhCUaeqyji7",
  "key7": "5pJCMyEbEDVEMhXtpigPLKERi5y1W8X9b9XyepzERmhsX1Sa8y6MotmnfHmW97J5g3Ndzh59txWJNh7wT67U2mZj",
  "key8": "3m7FbyRyAvZavnSuYwCY4eSfTMSthkqnaw7ywnuGbe88tBsXEbbDutGHzKgSr2FysKwDW1R5yr9XLdWQFKvV8SVy",
  "key9": "3DhQLRaywGMh1XPeZ6wuot7DnZfcaRMBk64eYtEYH2RiPWHuosDHwjHbSRpdLCHnhsuuoDJ2fyeYivTXDREFXEC7",
  "key10": "2Mu4neb4wyh23ehzQbZ3SokyeSSeEDp7GZ88rf8vcSYnSXopjd44PBtqRQTAPBSJbsNTovkJH75kEbvpY3HHULSk",
  "key11": "4yUFYGspTMoQNcNof5TrH9nyUmF98B76U1GLCTYTWAM5rym6gL6b33pJREbhXWSvZJkMFbYrZY18F5PgCvy945fV",
  "key12": "5aUEwar8iMq5XkZfj6Cb6ckWVBPqs87Xir1ognNE81KwFZ1bkaLZaCwZ21cXyyE6FVwisne46e6N5TbeaUWUxAZb",
  "key13": "37desavgLgvfNMvYwByE2k7w3nTJeajGwuMrj4UtUEpGRxBFGHBAAXpohYsAndnCNyfZReGdPNkbDjWKcJEV6wKY",
  "key14": "5fCa7UH2A219VfQxA6dWFzu6Xg8da7byGJvLdo5WTig3d1uTHdDW3e7WRbhYmuoBqAapQfctAFincL2yYim7KCks",
  "key15": "2HWPXW2zYmdq7HnqU2b2zBK5sr7XWnR26uGZDB6MTQ1tjuqSAJEtS8xnhfShR9suRGLdcJHuNSXSLhbXTQiQWDvp",
  "key16": "3sQ75zyCtwatz6w4ktUcrXPyNWfHypDUQz3LpQnFz46xMAgSosugjVuFzNc546cuUFFqjjh61BYPzMgKYmNsqHDw",
  "key17": "61oC6kXMzkzWveiAjcEaZ3zFMRJAYgP4GP38bSpPnKjTYBm4DXcGBPoEyJxx9noDcFkiVdGg3fVFAPArdA9W29mk",
  "key18": "4pWvX2xnxYksdKBcwKAeZnroqHGkK3EeUep1tzAbAA1q4ffmgjAF7rRqHg8y9EuqedGpY8sdCnZMT7zdruhnSkFL",
  "key19": "5JrV3AuvVT8QFtGnWYNGkYe6VY2vKVnPpZFkUjrmpkxpSEyV9HNsP1z5Jg1yffFGX4UhXEqU1TJAPT4Y9SkKJEzi",
  "key20": "3bNkToKKrBNDGSMSdQWDvCwz3o1MM8ajXNzyRk2Tm8yng7xdPhNdsorLcWj7WJQswsu4wCiSnrGNNy4amMpJN2wz",
  "key21": "3XmZwrLPCFLfGPt3PWLkccLNbeGZBbbN2LuRCbv4N3Mj6onAKDwiP8ExkXhJRbDsLGnRGCnkWpVj83dppVWwEXGP",
  "key22": "4vPLxRScMspnFtBqbPdL4NA9eaEUvWekeZDzHu5a9ro6r1vrRQDiqCK1KcEMLR1WmH3tnQP44dQhjTrRbTB68XKD",
  "key23": "43K9Mg1awH4MydPKJboATt6JVg9aVXM5LrBABRsm1MJhtnEU1cGTA2Z182fqKj6WVihwQBfL5Rf8RrG6duBhHhkx",
  "key24": "4n9hygvKAx5esZnJ7BDNURvXWytJHKscJvQHT39j4pxFV6BzC9UiG7KVeCMV6s6LRGyA5QWWejwtRA5VauTwogSo",
  "key25": "YLYqXeaaz3FhT1nJuaHjrHJduJeSLbKqN5Ga4Fbq7FWJiFSAusnDxxWdUUNrjz9b5oHhMQhgcG9t1opQBRhxhEs",
  "key26": "5tSvEvQqpmH3pmjUFvQ9rWLV7NgoeHmXkaW4RPuXQQUcp4r96BwJMyBYrio3fqZsYDrujqv9NsXAKaBnMTJ5urFr",
  "key27": "2wf8axKAaW1tyKyrE9FC71tafNLchD4MVJ93eCooeou4f5Z2WqGupewDX7txmKqG3iZpKCPGDWDrNwjYNqMtBoXL",
  "key28": "2aJiYCXc9FpdBB7KedtdyKYAXwjGBvnSkDV5AahcTNupAbo8T885ZbLT467PkudvYCjSvu6QPnfjqb3V49TdCEpY",
  "key29": "54TdCmEjQAYEju35rWziRkKEYTcUqHXhqaHu4oAWiVRkjTmdjoNBcHegrEQCu83GfvRW6yCBVGCCvSo31bEN4GaY",
  "key30": "esvuHZkfoz8rum18baXBTECSuE6EoNuPcoHZQBkbqTyib3AGDJ6uMmPtouza2wYExMSNbk4qktF8iqtL3cZ6VSe",
  "key31": "3qeEuLbgpKG49j1srhUeW2YPtwziXAmnEFWJFWXNQG2WxLJQmPxJ5zXhz8Y1hqvxMupUCJcReZUH2VtA4zuPU77a",
  "key32": "a49CbJLHgt1ouy22yWfZywQd8BxtmTHe8FrH2Bdpjd85myWQGntCjA1Zj8zxL9f6Jmd31VchaTkZqCw2rJ1v8Uy",
  "key33": "3gumHTknMdJgwQvYWa61H9fiqug4wnU8YWYx354SvNrFqJfUbKGnnRR9WTE7oPWjEUPtCjx7UiSS9tZTX2dDyr3r",
  "key34": "2CMh1irwmMnhibhFcPjUcZcHDNo6Dj891mrKThBaCMBfWp14TfuuXfjyYvWUyahbtUcE93Qd5aooLiiQfCmxVCsG",
  "key35": "4csot8qFqN22x3JqDQhNBrWnRWCucReGHjnavYcubj82TB9tsUAmEyZTfG19iJRVGoaXhBft8mH7xYuCiGAWG4vK",
  "key36": "5fmkqFDGEkz2oiaP3vYSkwxwQ8q42U6wwBikrDnGbZyHquikinZfQamtJwVVHYggnnmMsZzZ1kAVdpY5vYej8Wbq",
  "key37": "2MT33YtNLmhdkQm1nDnzMw8b3NjFEWMzhWSXNDCqKgqFh2V3ULo5AqKCHsMcv6o6rPLRG9riyTndu7Cp81B1BTUK",
  "key38": "2HgfZf3ibiJfHANCGipYma1SVTN3w91iUm8MPAtWudA4RsR476n5bjVTTCkSYe6RgxY9zJYLuQXEGyKtPwqZS2Sy",
  "key39": "SkKVUC24Ye1NqHG5EfZtp1Y3nxD3UMfDM6mEd2JFGNvCnyyHPDhZR51Spij3LS3AndiFoTVvAqftAXgPQj5jMjR",
  "key40": "1iitTbdqRpFjzDLeQkKZe52C7hWmvsf3MiaDYWPeHY2kq7WHtNzwLzt5UL7XSuMYYM2xdmW2h8XDhbrVvNTeBhv",
  "key41": "4J2gabziRy3EJrCMm68QkhKMcJBPXJSnbdfXNq3dFvXuryxvCNBMURqoLyDZJMYPpdLX7PHj3vfkfi6keH1ZmMQn",
  "key42": "2Ba3gL2jHnxZnoKXDgPiYdXYJQvp5Vn4e9YesKfngPTGphR3dSCAToqndQy8eSUZcccUCApdEZwGw8gfBMcnuKUU",
  "key43": "Pz6wSV9TydFgHFkdPUbRJvywtTE3ufgEe8hTtQM4ChyZ9gBjpGyC3AJ3MmPSBtANFeiNhp2WwjSXgbyJQ9QQr28",
  "key44": "4xRQy9rUWeyohLwvU8BHjdYjwhRfBa3imJDu8EX4yymczrswP9BPNn9twz9UkRyFLF4DmCDNJzhMMyeNhUSufVaJ",
  "key45": "oKfEUXXQhWMDfJqBBcwC332mDDsWUhg1fiYtt7ehv8BjHbDAJ6Waun8XLxjMA8QSsQN8dsYsuQ7gH9EDcUVv9BG"
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
