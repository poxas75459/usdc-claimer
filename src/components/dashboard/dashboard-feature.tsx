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
    "4vJW7KEiPBK2rHXc9BxFkYU4FkAKgCqa2LmaDhJu2uCcWe3C9KSKbLjU84DRKSFWdVWLsshBYm1oNANrXZ2NR9tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YaGoRLtCnDH8SMQrj8inj52Qo52jw7mvyfK8QJQswBMGLKQZhhZ9cqBh4NFLRT5HU743TWckaEHH9d3geDERLd",
  "key1": "5mXxaxKdYWYkcYdSvxMsVhXT6PvidTJeb5iSBy1d3o2NxvFATV29E3S3CqmyrUMHsiWjeSfgZCrARTb9vadNVWZi",
  "key2": "2NeHvyUNXmR4uhWnyjwRaYyArL8gS4auAtTzQ9P1PvCd2bp4URncj2Sg781mwNT1mBe581quDPtNV6V87opVdTwL",
  "key3": "4kDLFoJrmBNJFQpxA7QKKpsq23PnnbE4sLwX5gak9S663fxrdmMQoY1A5Mwa84ZtXd4anLrueVjvvNwztPqeiQav",
  "key4": "ozsdi8bpJZooR1D4aBcqtd7Wbv1gm7vGMYdJsa5jgGue9uSCKAZPW9pS4Xx7ZXzU5ajvmHQhWGYeiWQD6MMw3EA",
  "key5": "4iiY6We7E452Y1iKzoLnyNu13er8kGg1foPPTuRckL8cvvjd2Fu9bqkiqFi5pgSKaSXnmLmWzZtWVfCz49thL1PS",
  "key6": "22YkZJUufauVvz7mVHSptWtnvqfvoGANz3nxrHFk8mifRycd58xLv8md9aTskwCcx18iaNcj1pyBcrb2MDAcz1u7",
  "key7": "2AfQ4ufc5shW1Pc3yW8uwPVc91DojMn3QeqQhe657A63DukFRjkuz2m6hr4k8Ja8YCF7WA34xSH7MinepNyYyQTm",
  "key8": "2ffTWVFL4xyWQF8wBa3hVCjnK2ZNM4uotX3Fw1sBoUV6vUEYXYzRepeYEtRyKNHPn735GYRRaSV9U6Gixd35kxcA",
  "key9": "3nD35Q1kSjsbbRrdavooaNgbHKV3bAgTgUUXFtfuSVm86S3kfYeT71aG81VgRxr5QbdZ5CuhJDehCkWXGWEmUZ7Y",
  "key10": "cHsxwsDTxmju3o8522Fkucf37fqbseEksCVHVp3CP5VrZhT8QVdYaH8hT4jg3xs3JHya3qsnUAy5BqbPTnydaxL",
  "key11": "3xuoVXLbZVUpGQdBWmXr36brXquiogi2Pi3tKYC6UAhjo4TiGStTbWxiPggroH19HC27ETxUNwaCL318BWUJMNVw",
  "key12": "4G1t6THj9cq8uP8Wy56kbtab5jgxaEtqVKpgVpM9stU7E9Si1SU7pg1CU8CRXxaUmsYb64vhpvEumLAKQFu4UWcH",
  "key13": "62avP8ojSv8mAQyRBZnpJxi3TZ4YdxC9ReAZBtGtBz29WQK31Fqk5DyEnmrN8mMuGrbPWYLcvaHhruTH7xc5GZER",
  "key14": "xPmpvGwC6yURiKPFvSmzuThTpgHXd2dLpDAYLXywQiLVZrE2Fj7VV4m1MTTzECxsUkNLUZgoZEon1U1mZTqr5pv",
  "key15": "2WNuKLD8TwTUd7AwdC2Y2BJjWzGk3yx9UZyqQ4pnkZS5ovzT43SZPrd8mywovpA6U6AwocoV7UKHsihiy2xrE1Bk",
  "key16": "4CmpNWSq3gLG95eGN7T9MLfPPdbrEowc22mxfHkSHKebosHHf1XpxVSpYwsDUPkt1cDce9grKtJY8ioe7cKnFHov",
  "key17": "4QrTw8uHjZ65oFCJ5AserU9qAP1Fho36fWWeQWaa3XJQ1N86Xaw4SzMGsYsBxrjGRrWBoA5KxS5Z8dR4MAB3CYuC",
  "key18": "xVBUc3bP1bKK81B22EUbGi8KqAKzBs2Q29p3DNmvh1a1Bo8DMgR2kt65GhKpBPPTWosKSB2dvE5Cav7odw18Pom",
  "key19": "3MwghKv8XYRMTa7JCwymp2y4RLiYsc9fA7i8oT9eWEcKEpwzoH8yVtqr2PqVYNrJx5a72xUFtd3N4N15FiThw1wd",
  "key20": "2su3uLD7amJHTy6Qz7bXSGaHpBrNsJ3QYGCVcdpyo6GbrEa4CfVo5GDH63XmzYsuU4v4sPBEU495Jcmz4gJFdrzX",
  "key21": "5PHZLDZiBVjALRC4nicR3UQYzbBZTFztZcxz8TnHFKbk5EcxU5k6Udmgbdd7c8ZSRvHNW2mNnENiavXu545F7vGH",
  "key22": "3BCoWp5WSEUVphULUYeGWaxsgfbUeFBtesrXRd8AVFpaNW4cD5zHmYmWC7T8TcTTvULQPSdUXYqZuCLMyNGXL2SE",
  "key23": "5Zfvio9RuwJk7PU8UnRxfj14yXX9ntXRfJ8kfsxgLNK8TvTcqKBN2dxa42SrXhS6dfMXtrtYGFq3K5hD7PEPfU3h",
  "key24": "omPRUpkhKmarhfvpmKtUii5db1Z35hQ4anTqw1g5ZG8o38KnZ3AYWAExYSQ5h9hdh4y3CwU9daKrZj5o7kBPBLf",
  "key25": "NoT7rH7K8yRQpEUZBEXDQ8paqyEieEuqMD4FD7DbRhBGMkRnVDpPygZMttvnKXRQf4HQTYc4qQ3WpfxFfhw4wBd",
  "key26": "4iDtKLqT6bb5iGyCXmEHHBVnswgWhW9PprEg2P9HaZ7sydf2cUBNJYwUNUFAmzYRitPTpLwxYTkx3SkRw8zzXaZr",
  "key27": "51rrEQVF8GKidM78sJ5792XW7MQQEtpoDU8C6zq2RxfAdb672E4wAAbUoZ1ys9ajVf68aDeoextwfmJUP85fHkhS",
  "key28": "3rNEu6eKkVcEHonL3tgCpdeYLpgeJJssGAzKy6RdAQjDRkBbNgFZk3PyQYwsFvsHbiZZF8H4oaAmtjFyXMjpmSdi",
  "key29": "Mk3GM76W6n18UZPzW96LnAFNhYfLT1EpBibwbsPeG5kNAfSpoPLPApG7iT5mAt3HWfJt2nC9v3yi2io2oGzCx2p",
  "key30": "3BHrF57xr9MmznqRdmpfMMv6HKoUoCWjbbKav6Rpf3qXoWKQifsXxazaPZpGAZrRxMAHSLqYrrUY3DG6eVTGMbSs",
  "key31": "59XUMBYwY216KrXQKQ8u3JXNDVsd2Dd1yUfFoPQFaa43nGGXzNPQWqPjaZJX9wW4L6MUCiVjuFJNV2qgqYSwbxF2",
  "key32": "36RaqFryjfE2SeEcEcc9HkuowHDFGUPmWaUwMWjNKYsRYd7WUWeimKMosCrBgDHXj1xa73hPg2SWYp3W2TTsALcT",
  "key33": "M2YXeLsjSsdKCuQppoJQTmaERfdREPg8h1bmf9apj61oEEQrovzvqCPaPqd4ing4zPff6LrRGQFDh9jG6nYTFgF",
  "key34": "3puKNbe5qYBzANurSVBzduJ2qn7ZWgpXSANmBV7KWermvbP36JkqXgGCa2AKZwZiL8eyEbqxi2TNSu2r7DcMY9pW"
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
