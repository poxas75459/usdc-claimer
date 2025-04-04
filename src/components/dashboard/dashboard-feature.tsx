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
    "3hRoQQ2Vfrvg2m1apK9Fgyhck4V6RMz8sFekuwDB4cFDgqAtizGKvH3v5iBZGKJk9BqTtANu3gbxZqSawgtGo5HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHqVVeWKcFz6Xy613szFSevL9hxNShyaTn9je9b3Tzfm75ymUpYDVhC6FdXQRQ5MZVa7eAQ1FxTswMwjy2EvsPt",
  "key1": "2jQPMQWkrVHxVVWnCxSDfrav7w31VxoVFwffa46Snsap286P6TiukDw8khjgf5n4nBk7WWazRCizGvLJpx4rvA1h",
  "key2": "3xKisuWTVuwEfjxyU34WU2dmybVbm5aJ3RM1kmxbGXvah3PGRk18QcYPHfmMjTAMLvSgGLZVVqF5CND9WYG9Ucjr",
  "key3": "fgnXCun7iQ7X9Lc5kRijsL8i9f4R1NmgptteNUJC5dnQGRZt2u5s99ZmKpjJ3D4WeEzQiTetvTTmtF2oWDq8Qdk",
  "key4": "5PUGysjJzTRZrdQ2uLMWqDbYfgDm56gudZ5b45WsHSdnbR1oWw1XNCULxyXqZP6ya24RrPY9xHX5Mj57yvj29zuA",
  "key5": "JnvyngAVdrYYztrPL6kbna6WoYWMMjuqERg4PuwjNYSRjyecRv8j2Kk6wF9zG2WEsgfkkwxFd7rUDhHY2kcxpbr",
  "key6": "3WKxDRsLigfNsbsvWZVvqhYJ1uUs5RLm3m6me8pEsFgud3RAFeBQzSzYo9ToxtxLZZjy2TTdPT1hnuNZG3Tgf7FC",
  "key7": "3kSv6DsNZeaZjzzCAdFch9TshJuxRmf6X5HDq923X2R4JgQymsc5rCULCwnW8jqxJDz819KBkyFwUkMteFiv5hzj",
  "key8": "2P8z623V3KBN8aFasBUuYtLDgyLehdiu9qJGiKbzS3pidgerJjE6qmzaWsFNdN8P5B4GuSeuLakYrGmzNPacS49P",
  "key9": "38TGL7mPZPnXjFtzFJaT38rb7kVQv81USJGZtyanknVEdw7T6NZaCpZ4oowkgnq4jn8AA7TiZJBegtVkwmhDNC1b",
  "key10": "5DhQpceo7Pgd3iVbS72BcgZPeu22MsSKmtYzHcKZbgoafJ3F3GywKe6eU1VX2RfhwMngaqmNhoaMRb998cSnf88v",
  "key11": "5bNwPVpagdeL8x88f8HHnsUnDEU3jfFxW6WpD1WyhG81MKihrnfrUbgNywLPKjTYUPxwzAC1f9NRPdGhgLnBQSd6",
  "key12": "2MkAMHgKXaDR7opmcxwdXWHnckbaxxjHqnoaYRB816wJ837yDq3SsLEPdxxGhcnstWVN36xMiPga5YmYMUoBTUCx",
  "key13": "x5zFGJzDAsNvfHGaSM1AKadm718a4xcYbR6yosAhxJskgUGE6qxhLVZ2tWejvg9JaYTFBejBtN9KdLoyKy1FLnL",
  "key14": "DsgAg6e3zduYQtuDW552JsrsQwfrrcHoWEQe2U3mZv69KTUC7n1X3dJMwrZqnji4D3EdzKVEDrko9NGn9YkDm4k",
  "key15": "5sjXripiHvRnbarLRDv2R7Fudk7qAPTLto6JPyh98HGWnuMt8RUStjLYUECEw95RTTG9E5J7C5EEgFRRnNfZJERa",
  "key16": "bVBBZKbPT35X8Hs61oEwYvSLyx7XZPcB9Rw4bMGQE8odQmdiCf1P24uNQQPNDi6Lf3gUbcZ9nzuW9LKXQX122dE",
  "key17": "5pmFC4c8JHZWQ96ctSM1NAfremkKNf27SvmczcnLvodaMt4hPXjnRvRGfEiD9cKUHZjmrsQ64mZ65RNUgPT861z6",
  "key18": "4pevRRsoeJ74ATV1Y8kq8md2CaDfJZmQnLdn28KU76DmCETn9eV5SGgtgzq5EMv1wkiwk54miHC8oT1PCuh67iQt",
  "key19": "3rjyMRVT9yMdH2swdphS4KUnhjjKUTiHeffQTL6rpqKcEwmdhMaj1AW6mE5PJHVukp1mnSPxwJVrRkExEExRvS57",
  "key20": "42HjQxw5wm9AVXPHRUs6ksQKa4imi27Fr9GYAuhnNTFcEcZz7ZsE5W54FZFUCZU4dvx8ciw6CrUxiURFQgpV8i81",
  "key21": "5H2hnDyzQXwacHcqDD6sq4itzCs2jJF5FJByBi1RvmyaGpWFSYCyAnbPJTbgSZzJHuyrrYzpNkuqtWuigahsAiRD",
  "key22": "odtiCHdb4bQK24tVv5Ckfebf5tykv9bUJw1CKNfVKr5eyWcnWx2ATwQBuzPVpVaVQ9mkyoMCARtrLv7rqgwjTFo",
  "key23": "2ApNLH63EAwC7hhhjcnrDavWjCtvWxN6vZtuLYo3oAtUYu8BL4fpJmYCCKRuR1FcyYG2FWANPj5r9njUSSWi249k",
  "key24": "3EsfuabvQFjenutPUdEymuBn3i7bZiCJyvCVEqVRiPxqwUF6W1HqWHY62gkQFQvMgrksLNdwvR714gTR78S8RbTo",
  "key25": "3N8RX2p1237tu8gCkThPV3zsgdSsvENDMGkwDedAUipzHvsQFqPGBms5DZeiuAhwAVT3wa9zyLH6BWn9hFxEJEEQ",
  "key26": "3REgZ7mqifYcwQdn4UiGMU9Epgo8GwrkRSCB6ZenQeeekP8qtxjQP653swSc5oz2MKTxLXM9TiFMVkGeNtPKVKpG",
  "key27": "3myo7J4FXaet6mxEuaUBz7cF31BX5uV8ekx6jgXSv54PdqkznTrp5eq44nRWBnXSnzEEM7HymmQRU4VEnAmdhpid",
  "key28": "3RX4hYdDDw39csMthyBgwRBLr92i35Xw4taC1w4YPTJosBqC5NPiMK4FB9VhsFL9gk5E7m9NE1SV1JmXESxN1sqa"
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
