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
    "54aPuXnpePJB3egRe9UghweaCiAXLyk73w6YrG28fh6Sn3QPfM5cj9f7Vs2hhG3R5WscW9A7jB7Uozya2LFn4VD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38bHNPRtQXko2q3EHLVhVVmx4DRvs7DiQkkgzyZCv1BD4VubYVrPZAUzGgser73tHpajyUtmxdHXGGox8r3vhKPU",
  "key1": "4hP4GYHu8srqUSx7CeRnpMt96AEPe78cDBtKL9cHjxGbuHk4zUscRDvruyimvutp6MW1hSxqBAnu3oUtxBKThS53",
  "key2": "2arrAXs49eBMsbEV3z9oZmXiqm7UR3LNGcbzKkHmYhUtxTLFrNdcLGYVC8UsTtKE6whLrAEhT4VosrDjKwjXAt2e",
  "key3": "2aUgeXkatBwfzJ4rMPXwrSuXyuqwCkuM6o6J1rzVc6teGDajXv27kpNdmWbNve7G6bVtAE1N7T1Z8DLhPjB3Rx8e",
  "key4": "33t1Ak8obA7mji7DwR4bhxY3RyJzw4df1MkivkikKgyjM9PUxrjEf1EXfFjneCm26MoQHH8Jj5A8xgtM1CjLpzBi",
  "key5": "4xrkvJu6xpWCNuEnWEpubuizF9SSNHGDe6JUGLGXESt6ernmicdTviX4cC16dyydcmFc9XfJqWb2id7bDUHo8KpA",
  "key6": "43RTW48XjTh87sEdYwGtM2x4k7hS9Ay5B3D9WXmmQTzxXtmr2sne7PPs7vhRHwzz5rDr5D7WB1YV7AypW7nrNZRJ",
  "key7": "2bL9tShQ8XFj24jMusKfuDUkT8fqnvArTSFChNUFxc63ZFSQdcnaSfovga7N1c8zyJUsMttGyujfFAFNj7KT9n7D",
  "key8": "31RopGPpXa6R1vsSBS8Cmym5LBp3yDcwuQnTpvEoj4iwxeDJDoasYccm6ZExtLn8GDPa2VHshnCoKgaToKQ9TFa3",
  "key9": "EigStQ8wQ8V2dQ6o4MuGJeuKyYS66kL6prQhcEPLmwnXcHJLsTARP12VHEHT4wwhXVNYRBYCvC2ZjDcEgLWP3TN",
  "key10": "2u2XvC7zF52AZUtsYWGaYLjomaf6uh5hdtCFAxGDJPZjGZAyvM2Rr1e6R7yCTCmZLNrYN95By2yaSBQuEjNYBTz",
  "key11": "5tEYFHEac7NEkxrWLfnhGk2J83K8sQWnJUUiXFG97iob8pSc6WnDB7AWWGS7Nn9K9tK8iKTerjE59r2YVGQ4GRFE",
  "key12": "5grv9igZReThYbvDBQsjtKWfyG1BvfEptV1fsbXL9Ukk3RLEAwFHTJVoobhf3RrcTQgUTwv66g8VGEzbgQa89WQC",
  "key13": "3kJxPYveXh8GD2V13XeEviTx6dY3WoTayv4P3ZXvVgHGi6SVoQTKXiXjpTzxe6gA9bQnT4Q6erkmwjb5dnUqPGf3",
  "key14": "2k9mY4wha4jdkpzMQ162gjjAjLxeXK3y3SpdgeWn1L624eTmh7FmuqqqaZiX1TCe5zetTTny9TbxuwMj9swCVLTq",
  "key15": "3DSjkvbsp4p95vmttfGqTzgnXNfUBGMHxXt1bzRvQmppb7xrYqtuMxeF3kaqMnoT5P7jukAbp9g4ZhpVpFzu1yJV",
  "key16": "4PVarj7PjQdMBfiL2qzkNh7VuzgqznhH5NZfzkeEogfG8CoFNhA2LaJ6Usck47cPiYjwAGDEr76g72PgUJUhxoWu",
  "key17": "4bJ7dKMnpmMxJRjfc7aMyonkwHPVBrwWbhSyKshzqpbwCEi9AgE6xqEM6A2FtWvFLTzmCrb9hvajonboSZwaMSCv",
  "key18": "5AKtrF55mAfsHWgqytvhtUivrrsPxSGx45imv3b6ruMW7QRj86kkP2XRTxCfG6bHxcyvxxNtGGap3S8udWZBWqTk",
  "key19": "AsVU6WB6apLHGGu5TBfZzNqRKfGdywL9wWdPp3yA7kj1cxpfBu16upvjMzScWbjD4vX5sgK6LonQcVR8SrGy4r5",
  "key20": "53bqJ5PUH4bpAYtw2CWpFkt58pNNA5sCSt7s4qNCmFedhcd5F93GdbumPjzSRcYKoKbPmr9E2nrLUA4XjNPvCZuf",
  "key21": "dRR7ijdnzF26gaEAyTXTD87JMVJv5KUD4A7wJA1PbX3tV9UpRnnF7hnxqmphQvLB26BGQUxJu1UtwAv9Q6brhjX",
  "key22": "5g1oX7yx1zLSfoTJU5yeUQeWf27k7k8AhPEb9cSX4u9Ym74btDAX7bwCMDtzbfF7PpKs1RvvsHBwcJzwP2322LJ1",
  "key23": "62dKUnZRmjcDcBTU1ehr9yURCVZ9GpU9vx6AuuUHNMZ17G8w6D1gYcrVjDRFaT7rr1itWRZ4gqjXELExZhLVShHh",
  "key24": "3aNgRU9nZWLjnGiFZe4sdGmnf36oiTLArx8zXJbvaQeZzhk4c8YAoMNKwnPK4Dru1zWFDhbeRvFrwgxwuAwjbGHZ",
  "key25": "4prs64AZWAjCwuKiiA1Kn9tB8S54vWEdoC2gv2QWGpaBYEn3uz9SaxV6Ko71tEPwD5EpDVQuxyP7xxcmeDtZZqAF",
  "key26": "22iDHzivbQR3mi4M54ZP95fBuA6UY5xjCme5mjwjw7SAC6usDiNHprEivedkwMuzBDbV5PGRbt9efbeSJ3g8xLDq",
  "key27": "65CZsdiLyp7CEf9muKZx4Z3t4Tzww3drGKhjdCww5wN7yi9hUQG8UPZ8B4BnEtHyniiwuGeMbo84hyquA99GF1h5",
  "key28": "3Uo7Fn4fGgruZ4dcdXK1BeHwQfa1eXVdVf128QyLncERNyN6bnUaBTLGsvLjjDqcvNCAQAQ3vVjD3qUAgMbqq3CT"
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
