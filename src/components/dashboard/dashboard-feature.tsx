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
    "5buKMVNp9f9HCDeJya1atFVi1bpeoBfe9Es2mHc4gaa8tgGg35E5LxMc3nMb5NLmcYYveq9K1KM36AjuG6G51fAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZEVrco8qwkZ1Yjx85bSJs2qC1qEVmyHNudNkUoNP3sfHfijiYjUP2BRWyTCs3iw9GiFV74uKeFAQWTuSat5isK",
  "key1": "53MBgBTFjBsJct5URzBsL7fyiusFk6vuMkxmAfDApRhWvYVcq2ddaQoTdM4nJGQkBGQGmzCcXARLyeKzWG3Ujfgu",
  "key2": "27LCq2PQVdMsMnfePBk25TDo8cVvfjMnMuQTTmzf7uKw4fK7Lpm4v5pwHpE42UuESGU3HUigMtma9DTkY7p7Enkb",
  "key3": "iVPhBjXAyup2b9eGuJTvGT2PqgGx5GLUScNRkCKFJJvxvN7Hz9Etpz9wb6uD1VbUedWr4BocYtmcsJCdVN3nDCP",
  "key4": "zRmq6jao5Bi4TUP6zmwWxbCK1gDTBeiSvUGsGVvkpiQSHqkXVeZQV1GEnvXMqrDRaJLiD3MvynftYK2rXUxteHG",
  "key5": "3gDzmQU2ooXFJsdujRjo4QQGVpgewx2jhbT7oPmnEZD9ejTxKEkZS72Z7iZ9VjjfWfXE92NqAXxL4dZjJEhoSwxb",
  "key6": "5nnEpUeMyWB8A75rzHppGRMSeNKqGvW1VXu9njBkukhcy5UbUd6ZHLL75LzcLC31TEJAw45cdyArWUKpoVBK1fy5",
  "key7": "3gMzaTMMUFW7NTkEC4L1gfr3ckjcs9iCBgKN5nhucgGFLQ9Y3nbbu4UXAuwv6kRRGpgmhUsycNzEYgfnreFJZe2x",
  "key8": "32RJDhoJmcJxLdDzkEKiQSgK9JHdxdrf1WP9rFYKuee9LesPZdpb42GUf83fKDuGu7SjqeaRzxLtT1tBEuWzRGJm",
  "key9": "3rfKj6ZhtVrKbg4aEWdDehK3YBm3zYAJPukARrLhrzmFG8QuHLj3E2kiZHyqM9JLmLnSk5EkmJ56sAkwpthU3JPJ",
  "key10": "pAev1zcwTc39yTaJsFHU9yAnL1TxtZ57XED4GwPZSarrBcK34AvNUoeo1nJeLWohduPqqd8kwr7JeZc8q9ak9cB",
  "key11": "9iKBjZXxYRCdYZUAxy7JtZxjrm2YENo7meFPVUmwRj6uB2ZYaWDnv5e8yEm7thLcCmfxpKh2nahcpbUPLDS28Tq",
  "key12": "2tw7oR75qL1Ak7vL6XDjimMerejLCvqUWCWcyqvFjn23ib6p4vaHz78NxzZtwR3ttLWn4K7Df8vtAZK7EMqVxMtj",
  "key13": "39S7W1RbnHXHh8mjEnqwuYwLhozGd3EWKwRyBgWLK2Gp1EeUQ8MeE1Sr8gq7bEtsgDUwjZp8bSBKhccGFg6CqRYc",
  "key14": "47X8UFNWPtCAxx6DtzmE8m3B72hzAmeozChKje94bnuZ19FCrbaZApfLDw1HVMAkMjm6C5RNygHc7Zazpz3ogM8P",
  "key15": "2a79bcsKNzg6s7XEU7jtMd6owU18aaF7CALWxpES668uTkDEbfCxGuHtgbBuf1ZF6zqhp26hzPCuSMqEKjJPxtTj",
  "key16": "2YkD3GKCZfXcEdtkqr77gZDVN2rbCwBB6pReCLKRRLFBVcPncABvg78D3gwKjLDorp1o6YPKk3s8dAZYdKvbCQdo",
  "key17": "2YfhznedpTqGtXeahtxeLPaFzPskkaMerzvRufuiFany5TFA4nWMNwYxjWqut6EvN6wFzMX8iz9RWrpxNLc6WULW",
  "key18": "2kb9kG5HrbbhVwJ2UFHtWtKu3PWNsGTTRbbojJpRXupg1tvGSZ9eFW7W1nSftTw4zBoto5jzKpRY2u4Cpj6mL6Cy",
  "key19": "4WqSdi93ssPy2TpTJiLHSk5PetJ8nricvxkkt7HMgKg5445KUdQdK9Pph9s1D9wHs5Z7i5cUNeQX4D7DWu8fhen2",
  "key20": "4FqTWf7L2FTKRPUrKsuRq3ZTz2wVzPbJE5pu9pw2opcXPAq72jTDNHGkhZePsKCgMxHueNJSn74mLbhTebyAMwQk",
  "key21": "5RG1wz4tffz1f1gR9GgeyXUDLGnZBfmv2YnvjTw6YC42CkJ7zGSK3M24QVea2BAsCz8CrvAGuGsnQRw3vB3ycJun",
  "key22": "3DXvh4V4F54jrY7EVpdtj4xSH9NTtWBW8onGREvzF9dJuiQCNvxVeVJymRAidqQHfYgGA5qxAoaX9FerVVWpg9Qw",
  "key23": "3p51r6DLQHeecQUgoZCDDsq3EZxjoVjUPkSp1bMzvuUiifad8L3CD32tbog9ZovK2unDMBuCKbrAYVRkfCynPxgA",
  "key24": "dKfS9sKYDNwmdFKUxXHiRnFdaL6ovVN1Leg2DpHZdtRZy9Jdeava9sFGAfX1AophHeisk5J56Hkq4x8yLkkBGii",
  "key25": "3inBPxqZyjnXsqped6D8WmGdLMJPWFkNKEdWmm6aJcnKWzJDRRAV3z12hUt7pNRAs5bswAURrdSnhnDWfWm7RvcE",
  "key26": "3STkrdHuxjGmqyY59tqQ3yC9FyBQ4jLQe3JhS4srzcsNLSD1tscqsxR5LpVpkQx73jfPrjX9hVXrpbFLotYQ5DiJ",
  "key27": "3LDKbUsb4FiewPCEAi6skUzJu4hVghrk82PNhVCHXhKDEQV6A55D6BdLz9VBYx576y8CTxSuDxqcPJCNYNof7T89",
  "key28": "3ZMuEExmscQGzF254wDPV9fKqX4V8ECAhQ1B1se7FS9KbgBVPipGXr8RbJGvbj14x4s57manhg2oMuLomwFpkLu3",
  "key29": "46LaQJNWDjdphsJrB9Kms7yjViFXPRunNK8NEN7MSntLJEEeAC65kLG9uSsP53wYyfsAJk1JVK9dJPec7Bwyorg2",
  "key30": "2e5crSTsFdvwYKydrMXApL89qx1CDiScK3L2pX155dWdzoR81TRaMTw2J2VnJ5mtRzWmWET4Xd2Psy8dYrSrVAuk",
  "key31": "22UxYRQufBEiX7jEC7FvtA4Dx2atAVKGBT99rz9jAPpV4hD7Cd2zFG6c3L5aYnQzpPwwy1Kd3UbUgG7kzR8gZJF8",
  "key32": "4AZ7tVZGiC6PFGGcZfw2mK8xXPurqqEMBfm3VkK6chZrhattg7NrSnmPrGCRFzM7uqw1U7GbNRiTDW97nWJLwnfV",
  "key33": "65TnLT55jB4xRenaVaVBbGuz6eeKJxTnrKrvSLiMRSZYiv3mdrK65nQPpQbpVPGfGxDRYBpqRaVPWkEmdVKc8WAh",
  "key34": "4Mbiw8eS9qiRcyGvgKDgEEfGStqJNsp7S8EsgnAdDq7bvX8CeHZW4hpyDH2YDVQjN2jKp6nADKRUd99eJH8Bmqon",
  "key35": "29D9s5c3zmzp7iXjyYf6RoBqr8FFztF8wMt3RCZX7H5zBekrmb2zcvVoDqbzv4KUSNwbdEf7zCn2mqMRGEjVwyTM",
  "key36": "22bEMWX5sR36p5XuExoLgSTzatsCMxFUGbC8MZ6uypATdknVmatLmXhF8u19hWMoDCjcaaLLHejz54QkojYkziC1",
  "key37": "yJM7Enj7o8ygtGiCGSawSv9Udeem8g16WWw16YkmY78Yi7A8Pthgit1KfpzSURQBzaQugyvw3zj1osyc4Vfv1fg",
  "key38": "5UAsDB8ckVaWPTEAvrxLkRZjnmF5hZkXN6jttD5A3LJnPzcjbT517wg9vTs82Ngs2LngWxDqbt3JCxapngSttooK",
  "key39": "4MfzNNm44JTuwx4H4MywcZFURFqx4as6sYfzerNwSeXhXUdwzTFNus5X3qrpLZAWNyGuefzmkTXueCnAorUeioWR",
  "key40": "dtCTcSYNfhqXdrXchDZgT8jMuGZ14FWqV2kLD9xK7r6eC4aHMLyr3uBRBWXJk2r362CFhJtgJydEXYYZ2JNv3XN",
  "key41": "XmxJvHazTzuhAJq3RWSSiXjroBE6WhniWqD8RZ31KeMuUPpchjWnXuG7cG8SPa7upkaAyLUMtwFd1uxsUfWb685",
  "key42": "oj24FYEqnAxNBbPAsJ3hVdgYfzxQmr9vuDxR5WVuQnikVa77PhKKHcCc7ZLK4cfZw4vJiKNmbQ9AuzxvgFm5UvB",
  "key43": "5BY9GK2SzKFoCbjnhcJAhxauk9vySWxfMAiVdu9QFbGnTpVM86xVowecJL3SYZUTGdaxQW3YaCVEdhaqJhisGLZ6",
  "key44": "4DSXgdRf4SP491CwYEUgeSjbA3CbWhEjnjDHxvK87SqvXovBCq1u4MgLxeWfTr1HbXxGBxkN6FEXX3iLWJHGRv47",
  "key45": "2YkyiqpSq8Fd4dTaeJb7aLprecBBcKCLZk9h5QsFs3gqB58HAvHMoLx3kuNkdYJFU7g8wnPZAJsA4gBh5kP6bZ9D",
  "key46": "4dYfXrJDBBUXkJhcNWHmQiDRXCjyxsg47gLw9yTCf6Q6e6Perx2Vr6CoTTTbvpH2TiGat2PUjvwiahFCALuCcTdV",
  "key47": "kRMmWwQ6fJMiPmUAnMJDaGLPWSJbRzRaSZpQ8ExGMteSYectEAzbeBbsj1VXy3n5saQ2ne2M1jGf4YKQbgtgkwA",
  "key48": "64W8HVe2fRaiz7Cj6d99Am9UWrGKqZKEKvmPjtEAqTjZPv1kPLE5bzWMPsojSBsnh4HiEccMZi3RWuW4tWcrK4hP",
  "key49": "2uoe9PUc9J23ZJvxUHDGC5MyLgNUo2ZQgMsEBxURvJynmW6HndprYMW4iWesqSnEVFNjerjBs49KCbKRo84bRL62"
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
