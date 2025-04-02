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
    "3uUg51v7avmggzzFh9Uo3BUXujB4tnrZs1HGy2DM52KZJqMPP1dy1RmmrQbQgAivV5nQthBoquuqw4xeKreFUD6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9g6hrujaEpKrAgCPU4pBQC38G2hiNyyXMvo9X5uUWyDQ2qWbdMeZDK6ZtBSD2jsoZK8hopZfMgnH6RfMkvwg3N",
  "key1": "SV32x6oPmoinW85XjkFxc4qAT4v8mgqDBuGyPwjKP9kQ8KWEEDP3vAipysnpEgCssTuNCj3A2y7Ra3Cggm5jycF",
  "key2": "4NgMk9XuLopTaUVxrv1dqkgiN63aQEy8iCPh5bwL9eqeTKh47oAQVkqHfH8mgDvnbCuLnA14UDdUzWMCjnnKWXmr",
  "key3": "BBur1VfDREAqBi6u7dZUV2NaPfsjKA98iYN8uj2jrBBqsPHWVJygWVqjQ8BSZTKx6mrifpz72nVx4PSQDr16A6y",
  "key4": "mDysySUg74jsgQj5fn4Digio7a2k3XAR8RmfHwqEbULofEdaWRWVFMG3bEGADspt55X3H1STcyX5ATNywWv9BLu",
  "key5": "WVxetoG3XXVWp4zMd5Nbc3V1DToqisd16LYRRpZYuD6DHgAK1K8MWv76C7dhW7zYRKmcXJHFy5W9Ao4qLwQ6KJ9",
  "key6": "degoq5RrNf639idQTeW9m5YWuVBH98WWWmMYiox2L27V4gAWMyrarYL4Y4PAQeFVzk8xBaHjqnsUt7F5E2hrgNc",
  "key7": "3wFmf78r7E6oEzpR1tiohJ9SJfJv3d65qq6cKQeRvPnvFdpFEv5BXgydqSQqtKHenrQ6EPm1ysHGgnTdzFLKzAq7",
  "key8": "4rKGVBPjUM6mrCo7U4CmfB885iBCiswvd7surDyVKKAynjhBqefPr6rthtMk7R1JESzdSJyiXf62NK1NEpHzdSMg",
  "key9": "3Y65VGtaHNqvnsecuCUDziibZtnxpRnqXH6xCbfcbna1JLBXau8BFHam9oYAbrfHGJW3p9mdcNmCR5EGcYP6gMCE",
  "key10": "4wjbAmAX5B7Ko7Ac8J5CrqMyXBFoj9ggdFbqpTxdj4CcDTvXiR6CFirFBecBR7EHCsSCAFUkqfjBLvB1CrNdA9D",
  "key11": "5y4RtPHK3dGZcBhPrT9GFafLiPHoYWjk6v6Wvh6MqTtpDpHiy9bVj4YTdqN5J9DoJqoZSKoTxLR7AfwadrETUhYb",
  "key12": "2uaEEjpBqGGFUnvXjJJHzBv8BFdP1DKtwSGKEUDTtQ4fCWUHinuEqTShvfp9Ecs4gYc8nyDkGWt5U26z4VTRhVmV",
  "key13": "36MQqm5mFc4EPSRWxsQmBAvXmVSsZ5jR9BDTCxFhWZSBbNxNmQCLUBzKfS17Zi3FuTnWT8D76q8wNMTDB7c3VnFx",
  "key14": "357RtYXWv26Qp43rspiFrt6cK9pnDJ436xhfxzYyNGvdUcsNp9knnuB6Rd3HuYASUKAfMwCazzHCXcWseoDh7pYA",
  "key15": "4fAbBGKmzzTioAvhbFbw4HsFpS9jXNzpBFLhaLmmvEkcL1UqX3GHbzm4xvBiyAGqimA3T17cDQyAcp4zna8nhWqh",
  "key16": "2PYRkSuoTuzuEU16VAmWuQ3PaCXYERAp1u9yizmmmVXihbB2gL8UQkBEn5rsV8ybhbvfqi6nYwmg7jF2eDYHVegP",
  "key17": "12bsYCQXJAePyvRUyNUgDExw2rqPgzpnWEn1FCWHbkCFiEBT49b6u36ZmbpzWTFoyp77mHCv6qtYaaCK5ezxDGg",
  "key18": "2YMK8NbmityxSJ6HcBD4YUCVuC8hpDMznRwiFTPoLJGL8kuNkP3Qvb9QKop9SEdmwUYtinNj8wsyWXZADpAQHLuZ",
  "key19": "5zxXkk43WrFznkb49bE65iL6HrViCmct5Mat6Pt5KUpXoj6KCXaiffGJuRRkkEPLQWvpVjrGkbpyXUuULzb41brt",
  "key20": "8b4jymTqPWtMYCeJi3nzdqc2n7tQGp3qChJMtnkFjnb44URocJhCntTX9PqyGbTDfvzMarKs5thgV9K9mjGGkkB",
  "key21": "59rCsSszcTTc74egVVFkM665kZgsjB26S2uWCUWWoSr97G32S8wKUfMiNjVHCsCL324DVvf383ksiGKgyPHgidJP",
  "key22": "Za3aAQPrN9yttEwK1q3qR5uXthz1wyKtCDatMjwtb86zC8eu1gDfPx4v5Rpt5qvAMxTZ42r2Zx9Ho8f9573LMHr",
  "key23": "3uGv5MsJc5cAhveooHnT91ak1Hd6jEbAuopgfv7vgLaCc4p7myEaU72Pmfm8jw8VHVCJjRiQa1DHYmvMdyFBBuSJ",
  "key24": "5X7UcUtcHShtLrq8aqgkM6HHL7pkipcYMgMrBNX1nHSofjRhDbHHfLzANFDD6AiAnTW2wqEqyCFavFJ6rbTwGfKm",
  "key25": "5H6ePmVsw3RbKVohu3KeLdPCBKm7MWkuGp9cze8XSgX5g38DXfBUSo31tA1EoB5VacSZzU25b8q9dsGFBY1rQ5Sg",
  "key26": "1cqLQ9hXKCcrx46rCMRC4oKj14VLE4V3yYzGk3zrth3mxsRbQNvjx41XsQkFS4Tao1FfY11Wi4Yv5KK1zyR4Lxz",
  "key27": "2zg2bfVdTbmR4MsD7NNeWQsyZ5ZsjmVreLqpRw2sBKiEzk65FNVukm4sNT3EZgPXCXQhsXjLUBfwNQQ2XqEB6dVv",
  "key28": "47M1p9ZeDnP7VPRT3rybviMDmZSmthqxd1kXyc3MG8evpTzbx7pSupaWhmKe8fhU6jjq7ztiwCHH1qL6UHoFDDfu",
  "key29": "2Seuh4EY4Wxy8CdVqco8khDy6z9d3VipkbJ6wSy6EWJV36mCyTeTjuSqA3bz6L92bqsZFKg8vy2X2oTQn2VE6Wyy",
  "key30": "4ugSQFe4UN62CSQ1S1zRt5gWu8guJBV7WddKEbojF9LEwWJ7iKyFKy4jNG2fdXwV1SthuopqmwJaVf1cbcWgoaFK",
  "key31": "4Y4m6dy5PyP7MqenqwEoUDhj9xkgKCkaGq5MHWT5woJdMryJtotVe42mY1Jyt3fBxKTXEoTzpm1AioLAAG9Hz8QZ",
  "key32": "zoVTS8KWrnQe5LVexP44Rwz3qrvG3fewNUHN727LzkqDcArexV58R4QmckiB2eU4GfY6X6QYgSAzbHxSBZfKkv2",
  "key33": "5sMEjKdjzpZe5RWvcQ23EPfXuSqPSivx6SaWxUepJoh7Xp7XTLL5QPo8xL61BzgoNz1TdJ8vSwEcog71aUDx8ngB"
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
