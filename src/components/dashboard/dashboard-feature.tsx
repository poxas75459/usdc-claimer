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
    "2uRTrpWh7BRkWCveBjfYTswXaXs2S2J9dVm2d19augYiGq12pbMuRY2Zn9Uwqn7387czHpfCNxbpwR1hiZKRC2T8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnceNcJ5gnCVGTemQ1pbgcRa37TBw8ZVBqJUvTpi3TAvei8tpgyPnokcQPTqDBVow9uhGHDPikk8usP99zdGgSf",
  "key1": "2TAnEk5K3iN8spVLNzBKZ2qwbW1PXtCH7qQBxky9iQRXgzETENb8KC6oPPPqBWPtAro517oiL2L6QLgq8yBEEFtD",
  "key2": "3YZHCuLJK54gojbyPwFykm2FmX3d69MzKQuTeboLvZP51hNvj3pREiw8beE3jwvJtTB2EZYb61UUb2SA59XqjfH1",
  "key3": "23c1ZhN4LAyXW7Ngubi4Tw5YMWzs1yu9CAt1ehSLMAMNukF8BVaD6aaC2XYihaWJfESF5ALUy9P3GmYmqmz3Cdie",
  "key4": "2VoP4XKNhyKFsFCRfGxfFfcVmfsgHauXqdEirzTiTgZ1MK8Fo3YoQFnipMEdrSCHR4aJdCC6CynX4MjCRQHBeQTn",
  "key5": "4qyJWwcB6PJ1uxDnuY1rTcsAZA6qM6wXdGL2J4qdFyr9yM5iZuf2mHv5pRsHiWqFNjpuJhacAiesk6nTy7F9UEb3",
  "key6": "3Muxx4mGkHXFUPBgZCQdY15a5wpeAjdyuLUvioT4uUoWWyiD4ks8BGLaSZvCwV5kKsJGF4xM6eJoRSRPZhhjDEUx",
  "key7": "239X1XbiVZwwUz4yyPLUii5XVaws7etRieVjMFdJZFRmcZ4E13mGa2MbR9wBUrqfHeJU3xYxPfnZpEvV9p2pMQU1",
  "key8": "5JW3NVHEnxRNDDsdKPUSejToU9s8ovCThcP3nmpTiLWD4Mj9WyKJ3TRsgPCgXvesDVj4vqKDNUP8N41esgv1YHXu",
  "key9": "4f73MtEUTeoDugtLBmqKeahSvXtJsjZoceXHBh5QkEBDSzczSgk6UKqv4N6LghDG4mz63upHc8bQ1y3tUibZRrrj",
  "key10": "32G917bwm2RyK256YYwqhK3nyC7qZhBpvvebrRUR1gSFB3GEJAeiYzf9QW9t7agvUih2XZFin16KznvfM2Tm27TX",
  "key11": "5i4seXqFquFwazuyYs4kTwqbZwedrrGiPWdxym3iGTJCuHkD4jvMwHoxtkQwvTvSeNS5YSsu4cG6aMx79cKtSAzq",
  "key12": "LssMiFfoH7KSAF9fZQg61rdz2JmxTRjxPYBAwBXuE1XcyXnHd67Ym3i2zA8tHb4oE7ym56nHBb94MCUHXi4hMeq",
  "key13": "47TmGw5fT6WMGk9DLHsxTQuVaV9Td54zP1mayoHhqxdWXXNByXCwTnFRrDJ61zavWpBa54BCGuQBpwjzeaEoWTHS",
  "key14": "43u3BCBdmCaUq5df9ov7nibT5QQT6R4pL3xDF7SXsXZWfhDqpmQTog8nfKX8qr1Sv3NaVy7BN9mpusCEMUnFHGdz",
  "key15": "4YiLuiv2CueoVuUUJV6Le89xz35EdjroqqawSsP9hjhhDKPfDmp86Zkj2ZZtK2ohJt9g6wTjTKGJTtJYvFiU13Dt",
  "key16": "5a1yYLv64JM5ChVUGWSJz82RTCLubDF9g5x6RxPc2ZSnTuTwqo21tSx6VJoeS1oD9H7tVXM6ebptJSo8ubdqfyZi",
  "key17": "qS3vCfo6aAuyHx6AoEa1Xz33CJbXKaSZUvjAr2SN1JbHFfqHBYxdULPXru7ZofgKaqh6hzrP9KheBjhnbehJFyw",
  "key18": "3VoTfx3VrSPHFkfsKPF81oZhpx6ASnM78tgVqf5iwECYr79e4ppAM7Ksz43d6md5GnwrjoZeccTwr785NYuyi8xR",
  "key19": "5N8pjxHFHCcR4WzneVPSMx2V8C79xUEhcv8PDcugra4mLyMEWb15SzAmF69gyDzTGGyU56WT2dE7zMQFaVBMF9C7",
  "key20": "66bRuXNviHjGsMR5Sr2xXjXU8ECT1fWFNSek6z1CwNL7wysfG25EFg67baKkB4ztsJfJYp2msYQ6NWpf6zGWCeBZ",
  "key21": "2mEaHXFZDvoNJahiWogtEeWDeSdmYVPSD19jxuv2CgvMn8Gm42mgaZjkNDaAM8w3V7UDzMFB25NywcMb3LqZ7v21",
  "key22": "4H1ghKFXuuAaFZXzjn7hZvTWSzmUzkNqVvDr7cfLwvxb4sxY9oeDcAqARjyhfKKpxhrZwbCTca1mein9DxkqGv1V",
  "key23": "5PM96XqV1BCGjZhKW9PP5CJpfaStLXfDFt5akHZCYMSnmyPFRVsmj9F3hMH9JECZy9GzkgC9HWvmo4igUW2gqR7M",
  "key24": "2mHBgGRTtDxcwbyPXs1tZKAwHUqjzLYwQXLs8YmD6iE8tkJqea1TnabGmLZo59qwwc8xhdmYuuXvgoeF2qypMo6A",
  "key25": "4mEPUMrD2SCFZ2TJBqASkr9mGq7v8jedCVhH8DMKz6tvt5ucP83prbdgEXiFZXWrzdsXm4p6YG7TjJ6kzg3gH9Az",
  "key26": "384Y3ocbujipQvMy4P9mh9MjAm4KiUGxBBE9Nfq64Ym9UpeX3iwWUn1SaDwo4BSnHR8ibT2PWBwFYsTMWpqshMM5",
  "key27": "34TP3mVCHhDJ3sgsFE1YdHmjF1ud8D3rAg29bfKPBV8aHixZJnN9PeoM8V5AndWqq9dDNcrHhBHiN2GPhXjKkA6J",
  "key28": "4yiTyfiHBnSB2ZxkfbbkCqH88E9miH4HNpjtQiLv7my2Zm64KKaKKVnfP9hTYHEM9wP9D1pz9GcKCELzkfGkfWMz",
  "key29": "BxRFLoXiYxR2aoGefH5jNWf4LMbGMCp27U372hRNVU529WWqpAqNAk7NZ3HYFJDu3N7AeQdQVphmsCs74kdSz6J",
  "key30": "3PvJhdeGoJgfcMKV6srZE4d8wSQkdysxctj9yyEWQanuKKgYHdAJpDnNZE9XMvmxE3cGxuJXXvkmJjSrWxanGtom",
  "key31": "LwNGMsMxoArsMxWxxmF7c9YpVx8dySJrn6NTnGhB3kBYx1oW6JuMmhKv19mqqrGNNEEqthLCXPBLDsj7VozQM8k",
  "key32": "48TkdByP9XfsbMX1rCVULkHcQsT5ossYqgZW5KTb3TLucPzD9oo2MaecPeUy6hznc6epBkN4ef4P2988wAqrZR6M"
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
