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
    "5DmZ3ufQf29FmB9nhamWyvLFKbeBsW45aWzTJrgEmgEUWrT1Tzqn4wjNvaLaLT7jtMHCZA2whaeM7cy7Gg7brR1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJRAmWaiYTP1vBuJGVzSB9p2UNqUbUXaXbwqua2cNbFt2EDqNBquKRFd8EaJPfukUVxNMfuagaVN4AGDb4CTh8j",
  "key1": "3hV5Ss75JdFgj9DaKtWJoiL3EoUVCVNg7pmzcjfEDKSd62Jdkw2yLbHgs4pnWr4kdYaUoSmjqi2eakwKx7ZoVJQM",
  "key2": "3ypMTGbFjmG81rDHKDVvDuv45rJjmVu6jGWHhMj7mhT9bDbxKLZxHNwL3WfxsYnipGhBQmsKAinKgeSbbRSS6co4",
  "key3": "3HvPqjcQKAQD8ezcUfM581YuRZufPZHGXhfauiZMQaCpeG74iHkaj8AkoWk3JCuiwQmR5CsLrmhqftwZUu5TLzTW",
  "key4": "3uuni73ZUmTundhQJuH1npsprXUkJfRZDGvruzWzneDBMG2pVeo2sqNtDBpR7HHiYyYMEefUG6EzPYyuw2reXNjX",
  "key5": "5UxirsFf6hoSmwzGY7FPcvERtq4spJuZnB1Y62nKGcM4dkEeLHwLtehrFyGzzQGzu56Hh1BA5tsLyRS49CQyyrPi",
  "key6": "5bfMGV5dWZq7aLZvjj2gKmjz5BToBJWqaXT1yt91wS2GgUv2M3xWyoU3gxtqNvbY5AGpFykytSSUV7R8uNdsjd6E",
  "key7": "4crL3qAdNn3RCq3pRRbsxPhz47KoKUok3AkYxDiaDwjCN6WKnBFqyUQaqbp9vvsiocWt22BBw9SeseYRX8FqaKok",
  "key8": "3McNWoL8u6wMaLYfZe5jckEQ3uffeJUCMoL9zh3osP8vvYoa9oPAQsiXHo1fwaFsZ4Hm5XDqhEuAzdXYzrX5eKke",
  "key9": "4A7BeHcu87am2WWfFiLnQUxZr7vxeJE3xk5YegGTLsB6ms2fz8MxT5tL6SGvvjH2e7ELnH68Zprazp8meWqwg9YN",
  "key10": "4NT1ESSX9Ws8Sa1NDXRXExHxtxp7uWDDLAfk1JgoN3nmdKUi9n6vaMRKvBXqiP9ZVZfFAZyw1Q7LVC1dvTqwSj9N",
  "key11": "8HDjccEpudw2H9zsnMUV8KZJh7fZvg4DkMFDfcJw9tw4zNc8HfTXnzd5KfhnvD28di4vgxmk94YLar9ZhcFwYoG",
  "key12": "5hq9kcKkVtWAU9ETrF413iRuDF61A4x1DWvLNqUGhwPZSDCYgkd5uNe1Qxs4ABa2HU6Nu18ShspWAVGn7WyCoVt3",
  "key13": "5VAG8vUFkZHgbkLUCgTrHB2UJXWw3LyMfDVRhggGAea3Vx7eS5ccvUQy9mNWQBzwKwqgQzoNQyKnhGbcagbLZbLv",
  "key14": "5axKFDLBXBysEvxP3xtj3SE9gkbxz8pn2zGJ9pdkNXujwLzwT26N3gpWbE3eEPM51ScUKfP6BKf91JJ7onkk7hmA",
  "key15": "2mFi1jAHSiWqEv6rLtHsueyJmumk79RwnMY2kvVW2rAbUNimY9vHJUoh6xFmr8RkGKqzmrrkKz1R3Cwe9EvBSYHq",
  "key16": "4JL4daT4S6cXxMXu2dKs5VhbjxCBSPxSzEuwp3eG31urcKPzLKn1zdpfm32YgBsJJwxePGQNi31BqxEQt22BLvZ2",
  "key17": "4jbdgBxeEXVwfnPvtpARUbPRzQ1mbWYTBCLMBz6pcuw7drFmgixA7MxwSWMtSki7TnnaNzjkE7n8rTvxe8x9FEVC",
  "key18": "5EPUz2iLv4ZEH6YwQRwAuSNGi9z2AUrYDyYTH5vVZqzp746otn5u6UN9bjV8HZ1cmmcdbMcZZq6Ms4UEzr31dWb4",
  "key19": "iCsJTjBsNbbLPDqWsYfFpjLUxBr2GYqk15BiyNCtAMZTHmqgC88BKA6StetSPwx9V1Nu1wGmwQ8rNhtU5tSUXfF",
  "key20": "VR3BqB6PMhSgzU4693LvZpsshFhBfd1TUmCQL8RU5dFnPJRYgSxhPQdbguGHJETH86Nb4D42VkisudEnGKhrMWb",
  "key21": "2hmJ9sfUcgUyi5cGJT8NFZawCu6nairsE22HkzxXDuWFkgvK4cBvuVJv5jJ6o1PXudRqJz9GHaz2WTimE3G5FcqT",
  "key22": "U3isTHFihkM6pCpd45KGXvBmNywbBwTkUZrht3z3DhcMhYZs3sy7jf6R2r2PghcNuCVmbgJhhmXmxkeknLCnDau",
  "key23": "2gigdoqFX4HMNwTbzAoL3ChFTmBByEUzGwWoWetqJDjgnFsGn4im6bQnRT1tTrWaui7WTDSSbNoM4i9Gcf8DGhRB",
  "key24": "4BWfN3D1odngbwMGcUfqGdQbyK6myYDZPo3fZgDh6Tp3fHSc9UrQfMUv7jmfR1URomHtQsnrGBKgY7WMX8y4xbzg",
  "key25": "2Pepne4wZLiB58Jhgd9AbyPprK6QH2N9zNjSTrFxYzoBbZGEuPNMyMp1qwDjsbfi1bzebtCo8ceBH2r5YiHYiRC2",
  "key26": "v1bR8U9NWaptZjkFTUPc48wfXm2mWt1E86QMpMJc7gPtg7cm9M8gDivjQm6jmdcXnsE58Q2jC2vBqxEFgn19ySZ",
  "key27": "3Nswksu5KEzi19XK2UbsdJNTSonBFBe2Nchaz2kt3ckjCxTgSfKJ1dRY7R3SS329w73s8ePHNTbpcfybAnGrfSMn",
  "key28": "4XjzFmTZmTQaAbCmYCQZenMCoYLhCk7PR2rarYsUwQcvuseWWoJJ7HjF8MP5PGRayqfM9XtnrobjUTMJbmKTEUzB",
  "key29": "61SVKvEVSCyoxChEtVfk8GGSsjr6FbjpMP3yb7BnyH4nYRpXABAk4rTezZuoTiF1CLxJpdAt3uurgn7qjdvw9CTE"
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
