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
    "2Ufj2nHBkjoQpotcuGAefRRfSy9kZF19N7CUX4YoJkCDv7gHpqnqWZxdrwMeWUTgR4YT3CLdpeycQHUmuGucYopg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3KkDqu6HVWC6L9uATUCJwk2Dzb4XE6sqzVo5UWJE6ofCJjWq75B7yV4RWNj7sFdxsAsMdhY7xhGqeB9X9x8esJ",
  "key1": "4dP4v4qGb7io9XGo3maBqzti9x2iNMwDhUCHAF4BMDR1b4aoWb3a5WjUwE9iBUVgCPYGtbcZWywvzvp2hZdorm67",
  "key2": "mY44qtEXzVvAQyivqvRcaV3wqMmpix4o7k4YjhWMUGyhjFR1cmMgRVW5K5suSsXZiBKSrXjxuQUZGsq3is2a7FN",
  "key3": "aispkUbSseaEfAP26tVFdbCDzGQEnc5ub4RYuHYVnQGut919Crg3uQJCyBnrxNhVPhR3D5N6AHF39Pg5wtSyWdC",
  "key4": "4CUA1ZuXpHh8c6Usq66AZYJPZBa3ftxASBcv5P8ifLxrj4nHyv7hFVycLoUyvP768ocyv4dJRQFubjfVLxYM1aih",
  "key5": "4ZBYkhBxemXwXGCmFU8j9xzZAxohrvY8iKbdgi7h6JGzUEHhFcSaaC5Bv2oNS9sqncEuR3FwPfmTFPdum4MoJPjW",
  "key6": "3fgUGtmYCtFz1Bgyx3S25gptMvVT6SrT2Dz1LzWChCJtqTkHWV96bXi8eoPV6ybRU6STiJVqvPy3Kuz1veGbdpL2",
  "key7": "4pwCixnY5tF7SBagH1GVgneuh7HrLvGy1TnxR6ybYYrb9WYKXPeBEKcadgFGZ4D6e5ACgVbcpT2q5DEeNr3Y5Np3",
  "key8": "29QHQqCYL5j6xMYjDA2CZDtEaFongrg1kUr9bpqn1HgKo6AcAph7KdiwjsznTvQcpVGKqarNYknQchAaRNyjEK7A",
  "key9": "126csVwWswney3pNMAfEtotkF7eYs8Gzyz1G3XPmEYGJSdNBrQYqxfBGbDPebvGtQBrdzCzWqKhLp4zU3bA95rqc",
  "key10": "nLZAi1ZsH22WXk5q94xe4CS3SwpCqbpjcHK35dTTFFXKixfvGjQedqF1wUfwSDc4rnZRbepS2VLz9tZnd132LUL",
  "key11": "4y6CdXBsc5qrnUfgJZ4fwzhPZPSuw6eV3AWSbXNRmN3g7y7iBqJsx3qqz5qHAWvBKivgPy8vPshUY4FdcKu73g7d",
  "key12": "4qf6VLyoBaTWj6fjCztMY1KzHE2RCjZiwWD1F95UvRszuDhgkmwq6khpSgqLNwoiYyGHYmMURAbNwf1LusWkzkbP",
  "key13": "654uvLFXNYyWYiAGLNzVTroFB82mUWfZALUbHwvF58axaHZKGieBFQmhpbEQBEnctHgP3WkXDBJdUePrRPAzcrx3",
  "key14": "3XDuENLqEYFAX4fTjpgXZn9StxrVirdmFiBoEYfSwR4n7xqGVYwH4SekmtbTDCq1c2Xw2nXQv38V2qGesmBiBvYx",
  "key15": "4AdNkc6wnQh6Q4VopV2wEZKj9QaoUEC2REmxNw1Uyem3n87dKdvR2UVCX9NDusbSoUJs8prWDpkvG398HWNhaNyV",
  "key16": "9Dqyjc4tLuwJftoCUjFy3K7A6Tp9anF1cGsjqBojH6pHDuiqRTFpUQpFw3gkcPVS1dpY3sixCqP3qz7tx7c7M3c",
  "key17": "5YGyPkCZB876GVHqxGZaL7LrXM8Ds8DAYMRT2A9SjpvcKe2wkMwJN8zxVKaFANAo4d3rvEGmFx3toCqUD8Lui298",
  "key18": "5JipVJr7WP6Zn1FBdzUu82us7pYjhvzcxzAc9PjkLg1akZ2ispDqPQkBYvEgC9kTgxiXnYuEwWNHnGp7jFhrwc5N",
  "key19": "4HWMCNDiMkcqCj8vMeQUgVSbpFY39NbTtS2RoSZfkwr9pjThQdTeSfhztCneYmSnqW6u7gF7TBoooa2r1VBaHCUc",
  "key20": "5eSV8kBxyHb85MMtP9c3Vk9bwJP5iXgqjtTGKcKxVi3z2Vy4S7287uKuLiQuR553Gfdp37h8gt9NtssUh7XCmc59",
  "key21": "4oFtvmroEUpwpscZ81tgMWpqqTVj61ruamBshx4sgwKXdwDtUe3bEHFNewuBW8iLM1BKuw7dzBDusp2hbnd32GoA",
  "key22": "2VggfhAehxsnLue3MNGESujAQGA4LrdGUuPP1edqDbZoY31egeYpbsXCaAS7QAYbDh8Q4EH5gkEGrmHm9p4xLp17",
  "key23": "3Pe3pqo1tHj2XwwEuGFYkrQUrePbqg8d6HtjjFL97JyprbZqPeQg59FExBaz16c978B62wx9MpBamHcoKRuoqxAU",
  "key24": "5oFYTwZBLUrRoNBxeBGxjsc7L1fPraKh2TqwXAj3LZMnvbhD9VptEPLudF5rNQPxZ5NhVmmEV45QyrEuTD63UHze",
  "key25": "5jyNiv2FxwZcNKsjeGey972nQanc9mBemgpiN36c2v1zMz7BsZbWT8M8J38Wo3CYCf7o2yxQrQjYjh8jG9WygYoZ",
  "key26": "3YELc8z3nfZ36doXAwirYsghufqS7eQ1bFduWYw7GsoN9oyxUZ4VvqtMpsm1YfxqUjVMw8TMaMsahgmnMbN9gdLh",
  "key27": "1oK5djve3qdBJ6rNr2Kp3frB5dkNVVgFBUDp4zTGQBtcrzawSccnvcuraZgD5a1ejq918Xz6TRAJcpkmgSjMiek",
  "key28": "3VpsteUWXi1tejpjMozX9457Y96c7eiLKrN4DasxkE7QSsqMi2eyPxn35PBY54v51yteUeo4XNByt28ZeXuWR5gz",
  "key29": "59NAHEoLPr9c6y5uNzLQT48wjNC1u7Skm4e44niqH6uY2TePkoGxpt4paTrtQPBSge6nhdT3HxhnE14q1Xnk7H5P"
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
