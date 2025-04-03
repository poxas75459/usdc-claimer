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
    "2WyfhYMdsFpjjnj5s8wugxqjraurXQDzUkezshM6ftqvxWWga3meXrqLpQKSLBHxWJtgMKbM9mmjfQKoXqt5mcrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPCEykwWoL5bfetmLPsXmwb9QPc6QmaLFbtTU67iPDDNZmoC9QP7DjYCmhYzpfmpfWY6hsamiq9V94GcycZoaVx",
  "key1": "4zCorH8sx6E9N4W9forqKqwR6DScymBHCgygjisVBrfLUMpKJSiKzLqNq5KpakqVbvrnSoF2Bjmrth3BWbuYPrYh",
  "key2": "2syAfTKj9TSDPdTwbCPAvJQ3VBCYQLtQtHjRP8QSU38CjASNQW977iwJNhCE1UkWbcot9dAe2yj4fYvqXtGbEmJo",
  "key3": "3zfNbWM4AZz6vA2W5vmZNfcN6GUgRtpk89s1PVSeBca4pFnqWKU6b2xKntMLTNJPR1FVoLwnCk7sdSaPndMtv53P",
  "key4": "36AWugwdum3FhZt9tdeJzA5fJ6wVewpUuzHpyFMjkNzBfZxm5VD9m94J3uMnM21jr5vNtT2e3nG36iBt27fXb2sS",
  "key5": "gD54FNyZtE816UztwTExnAurhLt3bfYY6VMdSgHfktmvNyMR78wiY3MHv1g7GYY1f5Pipx1wH9usC9DvnFx4i9P",
  "key6": "RBTdSAqz1nSEQTyMcSsAUSLW9U4Y1MuH7buMELsfcaoPnfHyvTT47D9Sx8Hjguk6jWaCdD6uXmKMGnuNumcrrXW",
  "key7": "5N2fLDkyHZQRzoYV8voMyn6fe5wMvRJy4iGuxKZzUzNnfNeRBXU6K27Kz9MkATVaCbz4M4HxS985gTFWYryYX5ZW",
  "key8": "39ihUU73XtHtv2Wcw1JEZP6RDRNKxWX9chSR7wmhEcwzfDG5Q79tf4MbS6tZM69rmA3fRtY4LKZzZi4StwgPn1BA",
  "key9": "5cqWQECxfQ6QBLsZrxoj1yhJShXadGJKi8X4YkLcsWm16TpQYuft7MB1eZ3sVWoDgp4UdKepzxHgfVRLkJt8nX5K",
  "key10": "fEN6qeZrwfhKvVYDn2Ea3fxKWkq14k9RC5QX2HoezebimHxn3UuC5poJAZYHShcfFCoVaUV2vHkkaaY3HmK7LcH",
  "key11": "2XSfRE6P9mJSLzLPnUVZGgnPJ9zPCobC4LKEVAYyXCdnkWUjQKEKFSMaPa6CtpZfHwvaqeNxNU42dkUjbvTwqbR",
  "key12": "3jAsW9EgSUPHQTjSzXiKuaKjHYnw5RsANqG5CMquo2AACUx2UeEXrpLD7NSKrP4e9zjdDEVnAhpy9gXk1eewsXrB",
  "key13": "3HsuZtWR1P6nKU6zFwCK4AGt5rVWFEZvUtZcrQzmZjHwHmZuCQ3JA7Djr5pFg7fCPzbDZ9WB7mJgxcTh2YZ3VPki",
  "key14": "4WD8MSbVrJ7KYfRrjRwoz96iYkbFubNeXxQNWWRQ7c3Fo848jRMwNv7g9vkARPK5QHB3Ry4yCVk3pUbjB22Ze3ji",
  "key15": "5pdXtxDUrrS1ShoLG45aMeViPB1gwSAFVRfSMZWBvD8wpxaEa9bZiRR7rz82kRJGYreRyAiYGbuK385FYefrKk1R",
  "key16": "3tmMXdKwT8GXhqHkRZVP47okUDa5683T1UuLmXo58SoCa53K2n4KAEviUkBFBRgdpMkPBnd4rXAb4jkGfTR2Rq3e",
  "key17": "4yPUWhxREwf7aQkVGGC1CYnFrCHwacDEC3vLjHpjdB7UBtgrfB5wdfNioLESXiDfXUe138CLwVmg62fzjzinuzm6",
  "key18": "3x9UTTioUkhu7BpuCsoKvn2AFTYNnAFJjeVu5S1Z7Yx7G38x7p9KBxb2RWZsjWf6CoMiB8XaN35FSH2CW7cBvJGi",
  "key19": "5gv4DUSfwZq79za9LJqo94vVp4Ad16a9hN2KUFGHxipwmkQ42urFck3WGEgB8FX4wdcUqp6HJLSpBuDqY7C5arYL",
  "key20": "r99kkWw3h2qBJ7VUwudLsBFPbQ1EPTJ8YCMjn2La6VQZogbPi1v96UhKCMUzQefuSnqJZA34B7jS38AeFijYt82",
  "key21": "3P4c7mfT6qXyUQMv9CocdR2iRifgEGFNHyZnNnSgESfAEFiDu71hhvgVscokfZHKLP5ow4bpbHy9yYo7BUgqKLPY",
  "key22": "zPEGnodoNX8YzRhBf1C2CfabKMqVxhC2ervFicn5kjVb6ABbq68vhLwa2pTY5xVA2xrmjpUnbDNjH7FnuN3yVdL",
  "key23": "6tPPUsKdtGsf4aguzzBZhsz1rDAc918Rrj9oEa8QZU67Ga66cNndTc49CDNDRq2cE5Cs6VG8LsbrfVW3vLjNMtE",
  "key24": "K8KfzeChRYgi77Mwyx31xwCZrM16ZLbE3ESnpetdHj65XLt7Fcjdpn76fqenSEkcF6Ctpd9WVC44RPRG3CcKUHX",
  "key25": "3FeJA8dQrix7Zja5Ex6vGDvBXvEGV8xQvdXkK6U3SY27hmGknMAq1jW7q6qtwgkYUZe7kb7dnH6nZr2VERp1BoZk",
  "key26": "5pHfU9tkggcTLHZt2PzWZcqVsXin7sUMKXJP9WeeAPeFHRZJSRpqw278vREpZeqzy3UT6aHZvq4ekHwrVJpuRcDF",
  "key27": "5Xc4xYTTZPTQGE6T8nBi4NnbtELmKdCNxXbj4RfDcThKYNVTYEQDEUMnyEA6EMRskh24rarU1PTd223uzF9jgNCo",
  "key28": "3fKe1wDYqCTk7Qv3JfK7uXnttahpkoh4FFyJzuXdq5AURzwnn6SwbJrYbekPEpU7J6rgHUE6k15UQU9Ph8nmri2f",
  "key29": "5zJV9WQ6mRNxLi3peruHwn6KKGXNYDrSgdsAmKf4YFKYVwJF62LZMpyCuZFjpzjso91h6q3w4Fv2hkP4uhfuh6iW",
  "key30": "2xJaAcWLqS3Xfm1AFrLY9hRYzpdaisS8uFo737Ekhy7wuvnc1JVaDL8r8D4KzBqthxAN3WwRqmybZZEwik9Qr1vc",
  "key31": "2CPVBzfFa8L4TKcitSVcwCY2TBfnUgFJTTQUc4PLyAEC1mcjd8o4Nn9LTNA4FSqj1jZMZ7ZgndVKKu4ajqqZb7Yu",
  "key32": "4vsArd5b2CKkgtWWkmM5kZ7CzFv3WbzVZBSud6nEusQukzzfxPGuxhzeVTmH4xonQYE4q1eNWHrqZuX3coySBgk",
  "key33": "3ysgiJHpTdEwyEzKSTXP3rvpAhYGMub4YybiPkVYez48gUismhzhbS4KicnDi2oRwTb8msCCqbwn7ikoaQTCqMfS",
  "key34": "3vczucFQFgvsafKi4KVcHyR16xEnR8BszS3WJBSiATLNWGrhYxjjgWa8PUob2cLx7BikwycAnu5xdQQhPKSSeDjh",
  "key35": "5pJr6uzTrnWDVMXKCQ1BeQvoAeWjoTXPaEaqQnMiDAvfRKZQVtzv946ThcxFUhUD2K1Srytr2mGD9jdRoCWg5qYx",
  "key36": "2EJSXmMJRpYL7theGSgFs1d2Z3A4WyY94yj1X8ymFJdkEiiYU7Mr5RPXAFuShzHnGeZLdanxZjbTgKPoyLxsmfaa",
  "key37": "3QowQqjZz8UofZavuvUDLAedZRZS7jYimQ8KRwK25MbQ5SVZx7bWay8T1xyfFHuCS1JgCTSEJ562JJeXobk8HfK7",
  "key38": "bncGUQhPTYEU3Kaxu9E5Ub74dgHeHwcen4bk7EZX1sdVckeSoe9x6CsSzLop2RgpDTp5MxZn8QLweRPdGxYcKyh",
  "key39": "sGd7TPa4sP3HJYrkRf1WXsS2QmCLvSUMtmPwjYHofFjYMsKqB67DpwU3DRfV8UAiK3s4xTadp7WDzbzbUbKs9MP",
  "key40": "4chehJN89pEWoGdwqXMLvncuzMxkNn1jtUQFvGCmQixCcYL95hy4xznRXWTkLLdJvdLXD8ZcpKwFKuK3yNybkCjL"
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
