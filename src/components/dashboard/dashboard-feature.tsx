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
    "Vp5n3t2WvZNvzyRQcyxSrZmy3ms1WfpW6rJ9WNEn44kEDkXyF2aRCi9cT6GRcUhoUHb3AQAizs8ug5gb6ieprdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCVQXfybWTVxiNSJM8bCGKhK8AWbqeEYbYRvy9RbLoiir8HfW6LHBE6fPZjuoz3vCS84qS1YuLJgNtHaCPjmEhu",
  "key1": "2xRvyCegt6hjKNnw5tUHDLr8JQDF8UVHEe1m3x2TLo9SJmuiTER6enSoqWPe62ovSQyrnidXL2bPHCF5EiGB1paP",
  "key2": "4NphC3N8jJtuZkUuvbnJe5sMy8gUtujjK8t1qxyQHFPuFkj3y7XCgYDEevXHtCpeKu9T9cj2tMKmUutF3mcdJszo",
  "key3": "X6ebimvqoDpXs47yHFVAsBYkstDjvAxC1HZKS44LEVC5LNHJnoEiuNJqTghiQnKb27fZdd7sNY6dJch96fGQozz",
  "key4": "468JeSVbR6KpJNvFtyRTK5DjG48HuBXEJaRfWBg5DULAkT7ugNptg3BEaBJy8wW7vdytQnumJRww9wDtgs6pQDDU",
  "key5": "5b8y1daDQ2o7MmP2C5PN8qDJ3cHSvUS8833KwQKxJ3poHxEi6PHMickEUd6AvioBhL8LeMTeRybTov35fe9DZX3S",
  "key6": "7eRULWSqZCknmkgPDndATDSsfwycgXMYRyVb64YPtpsXVaGhwX57KtyN7Kozfhvgav2LfGsqtUtcLwVbwFJzMRK",
  "key7": "hWi155ygrBjt2J63VHRKmy3hx5AY3qR2SdEwfx7cbfmMawcV3Vw9bBmqLkhcMUCMzSRQGk7VCZwaEHBU9kZBBSc",
  "key8": "3wWPyJ82yRyWvANnNuAdRWTBauYKhBVu2xArj4zySApjv3US1afWA1gvtFrAgvWVGjDgdHBCcuAakBoEwiePUwGA",
  "key9": "4dx3URDvYBk2ax9pSTH5vd6j8VVcTeEyeEYugwVhLmiG7DraeBPhSoa8BAgf6TkruAeYXK3aM322Pd7tvNse5kps",
  "key10": "3PdNcusbegxSUQyrTRTRboRhoVjgcqXpDivT1XkYMggURmSXq22nqWJXdkfL2DgwEhebx6UtVNikJZ8f6gEyUEm",
  "key11": "2NrLkRmUpTavmX7M2uH9CMJhWmsTczvgdnvfYznygcjJnXwGvw9TNrASQenym9ew34R7DWRB78Qb54jqVHdBu8Uy",
  "key12": "RVEoChHadfKiAMAvAbcmuo1GQ48sHoQ8ynKMCRvuc2QtJvphgcNM8yjwNRXYLkgSTGCDn6iW3YNTGf2tARjub1X",
  "key13": "2Bon8pUW8La95MrxPaGgrws11Z5QhAC4L2UAx89TRKBMPonqTovAa669oSkBDU4FgnyqisWDxR6FxUdb3NnvhytX",
  "key14": "5WhduZZiAj9hLRuJ6BSouSNMH79NpjEHeCBQ8PQeBYZxx4M7GswcgkZ21WuQJtMZLFQocD2211sd8RL2sDvaq14Z",
  "key15": "5ynv4VNXn5iuuLuKhVKGT8sy4zeadiPUnUvVmUSwMUvDbgT1QsEYBKcdcAirVZ3khz8iyvfNckuoxAybS75pC6kM",
  "key16": "TSRrXqCpVr82QCmdntrfSUt3Wg6w6VAwuDdgGjNuBNyiGjNNf7jtFwktW7LGE7PTmkY6mqcf8pzWboptyHcwfAu",
  "key17": "2bUaM7HVyRkKfcAx1pZZ23t8XetBMUZumKDcQUrNiVXZx8jrWTH3Gc6YMoZCjVSq5MDSuDuEMeN1vQ62d87KuoLB",
  "key18": "3m4ANuDzSCVH23NAsp9tmTfYY9yZfaZwNQ9Bxng1gQ8veDELQjNTAi4bpdG6kk8uQdZMPJJn8Q4w62EbNdSjmK72",
  "key19": "4VCLUkE7Mvn7gXeNjruEAYvs7c9Q9dddJS1S3cpmWx96iKo8N97HmPiZhvt7RJWHeajFXU8ENUTypWSeMUhukkDS",
  "key20": "4yCXWZrvEKy3rkpqi9jNmnVwzZX9qA2gvMcujBJfQsFUkRWL2E7XTecHrSUsXmPvydMD1UT7r7naii1MjUBhDLoC",
  "key21": "3hSn6Jb3D4A773Qk49a37fAGU19HPBQBwLTVvBW2JBh6i4NVEenBkyHScwV67snd3bWLxsDYcgRtNkYhWXmotvtW",
  "key22": "39wBHGJhrH2KQx1Mjkvx5tnXNaJNEXxREGyU9jTzZBWjaEUVN1j5kK17JhvHsPfuhf8r8LEdgZseqwcKsMd1UJdp",
  "key23": "2wRsNhAKFyQ4MgSSNGp9sC5YemrDCJbGKcK7TpQcK4mWru37QXX6XHPpt3AtEpggPuF66qbHZcjb3UrxAMtUxZRD",
  "key24": "48amAdNsnvekXxYgyDZ5p7ZmHSoGnfsCY86rEESsgKGzMWfsfcdqWijomnbmV65Bb8ewYfhakZQ8njJvYQrPBc68",
  "key25": "5c21h22NnWkHvxPTdwZ86VRgKPsofSvq6evSKVuKk4q6wBQYWTTGDHUPM7BTmf2G65z8QUE5oBpVAXMSNb5DgYqS",
  "key26": "2AAZa8EXewQhnGNkYM5awoNNQ2CG7NhkEJw5UybPw5nhaRZmGbouAnJLv5SvGUzz3iRctLtQJu4bve4srxaUCKxw",
  "key27": "3xyz5na5cnijeBmnSbnNkaQXXjVY5n4dKtiw2WzmuVuSnK5id14TqiHDgDSygBWCcouLBkJ14bnbKiv64XPzX4zm",
  "key28": "5YmYLRyz9K67GSCvURzgEDjtNTHGaU5atqCCamosi9ioqGjm6MeRQNJZMdQYmRHNkNfxPLo8jEGtCgBnjYPqYMSe",
  "key29": "35BCGGySHKuDgyT87MmHPvHVe7ZKao2G5p6JyPn4jFMqUuMqPVvTSpn5y61SmjgjKsYv97euCrVE46PszyvV4KdW",
  "key30": "5QaP2kravuBpdSBGRCEcaqtM927Q9j1BWdr5g7qq7CM6PGo6SdeBDPdAK4ceojYPo2hZ8csngideLa1EnyCvcsz2",
  "key31": "4QtkeeJEJKhX1oqswsHMG5udKreXVVHU5c5zWCtkUBtBwJu5KAj8konZNVVKAPeUg7ArdbCQHQdE7sbKbQ8gfWBJ",
  "key32": "5ej4Dg2iwy3dQ8kf7hfGQ3RZez53CdnV16LXeQz6bRpKskhDYHriBJ8Uyu4UY3ttGHwS7QQGhaH456pJbgMoTXAh",
  "key33": "fDCWnpVgqhGTUMfBovGRE16H5tNcXXGqz15L5RYuMKymHNxf5LiJt2pUgdLBujTsXL3D9XshzXVpJE7YH8NNqX4",
  "key34": "4bf89odmzazXEwNYyteX2FRaPy41DjNEABmZtDDxMqyk4NmEziNat8XNXisB23TgB9chkqbkhfs9iYRH1a8MVkjH",
  "key35": "4jbjbidDooeTqPrAcDouW8j8gtz9RiRG2ChNgifEHX6dGCWipHtytVMPRJuTwrTV8Faxtqn7KvXehdXABegnYZtR",
  "key36": "3rzfaHLrnTXG91JutYw6WoXu5yY8bz9QyL61xgAjzMcou9DFkMQuNpYvPt3CMMCES81PzppEeZq9m7TgUzdLY1YZ",
  "key37": "2vwxtbrS3ApYqcGtBCTrnFeZWKyZkDHH8mCMkchN3hmTuwQWKDxxfkaTSuSxTqMnuUA9Dz1Y6NCSyw85t73YDJ1M"
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
