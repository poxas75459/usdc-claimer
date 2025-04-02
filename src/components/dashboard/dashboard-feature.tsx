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
    "51f9W4e7pwQk7B6SVR627LG2r4K1q8qDJmvUzYuAfCUXJVaqVg6fExHdNTX6ybepDHEyN8QzfK6mhYSwCso5Qvcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SR5FLW2q8zHgwRKtkQ2EnmcSAbanjiqHK5SoHLKCpu59Su4ojQSBYooSRFjWc7FmTsXQZ7RDGAMA5kjaD45KF9k",
  "key1": "3SVRvrWsiyp9WQdorGbZujAA6EiUJPPtQEXnFQrCzA89jJDBV5vECFcdyjgirBpH9Pcwd77DxDLstazJcCfMwDgP",
  "key2": "5cr8d5TEGF8MGSNmy8G13vyHdPZ6Yb7q35aQsXiJVvdDqco1UmQkwFrVjsYhqJQ5xwEL2kW41ceKN8EZWiFNcSxv",
  "key3": "566RuN3q1HKP4NhDVPpWiQep2QZPH4Schd3pYJqvvy9JXzFDGN1szSJ8aK2XPKVzVKRZFBVTdhU13nT8jCJNvL7L",
  "key4": "23uzsafSwrdeX5YPxeFse3wc2jhyspv1he9AK9qEvjS5VRvZeSqfZfjmhGGqZCxET8PN3m6kkM5s58GMPgxBmj7r",
  "key5": "2CBmEkqATLiTNiBjSrDUpq9XxAYr5NK9rfaJY9gP7AYvUuou4n93e5oXfkUKj9N39XSdvTgPxq1oUSDYnRi4u3N6",
  "key6": "3n1Ejd8uFq6assd4DMpma5jAKcUecze6o9ZsiFgF9GR6q4BZzvxLL34KshPTrC8oiJzgs5hchvCD31yyF1pQfsNX",
  "key7": "64ZUgWDjryShy4Y13U2V4ks2DTdTnLSrukuxwZC1sFq1b9cpw9rWcYKWPSjxMgJQZVbdQP6v1oy6AZdKtdTtmpqe",
  "key8": "6685x9TfbSFibV9Pg2sYwiPMQVxYYVtSpmWZuNztDAJ6gjDzZveq6HMCorwB1fWsriKpZ6PR5toMZAoRWdwk2p1i",
  "key9": "29CMLy1ajbfDxpMsbQsFBNCUL45TebNqUn7Sfn88AaJBkuhNqFmygVwtMprS8sCKPfc4eJv2xdXrjafGbur1bB1s",
  "key10": "28Vq3r1ASet8UJHo9PGtmyADBMTicfwRxj7z943pC9m9cmQrjJ1GeHKq6iHFjghVuPqcQgKheqAtgMQWSaD5zyKD",
  "key11": "3st5s4ujvYeDBd3Pvt3LWC6Gdpw3XKG23tDSAvKLCRaoAofEnXqoPHrUGKtemY8i1qdZscR1XdMZ77P1iNVtP2qt",
  "key12": "2JkbodLN5VxVYNKLmQ4hZnVzuMNC5Th3RYfBsBjhWmnCGHVusbTWBgZDy4rCdKy6tPP6wEtAXzgn5qAwysRKtQP4",
  "key13": "3M1BGwbkruCk7EfCfCAFD1xGTcfkR4EEAFeZ6uoyqRKSxw6vcvR4tX1Vzm6Ms6k1wkC5AwZKMRM71zgGScyp13rS",
  "key14": "4UTmwxjkR11wekfzgsp1fkfjNKqK173psTwTyLaQVQq1FSno8vuBYqjDVYi5wcwTUJH1m9BZDuqfN8NxQNNSkhhh",
  "key15": "tEYVrahwgX4huSzVyh7FUYFsyochVGByRoAETC3JLAkFtXPiy8HLwm9uM5eFccZ1xbQnmpkHPe3afrK95vPJw26",
  "key16": "WbLj1T3dcaPN5qmdN5D9YUnuE5F6FtXYuUTsbhCL8cnM3DPrhVepwkb5toYGuavr1Lqres5YDKGEQHJP31DK6Mq",
  "key17": "555JNoX5FfCiMPk3DfJsGeqCW33R4CWKRPpvjLrqCZHbXLu9p4amqJhR34dU19tMJkvc7gWpu4cnMH84JjG7rCEY",
  "key18": "4kiYr9MqQKqwc4FnJoi1onab62ot25GcpbrD1eMNYyuhpY2uLQwYPkV3Bj7nbjwAMvdD5CfE97cbZ39nyRvbMofw",
  "key19": "4w96JTPe79YrWoaXnGh2kn8SkHqed9FCYzLeHhSeRFisYWbFUVMtx1SnvfNdEX1M7zHioNn37EW4QELMBXSnpK8D",
  "key20": "5QpR7hnZ8fZkd5S3DfhsrUgtLQzVwsTwvEH2ZanuodceuyWJ5MEqCkcFapkkPVg7GQF4H5RyTaP6G4iZfs334NTE",
  "key21": "5St8d3XTo3FAfNCm5vfQRbeRbfAGce1opFTxM66vyv8fBDbxPotabLdTr77jLXADhuANy6JdwonjsJxxY9DFFEDS",
  "key22": "4quXHTCyLKdD6Jt694HygUBMnWDjepQQhCpzsYcyaTPXdFWe9xXCgXvUbEiRcDdwuG5nkuhzAkSjqyY7DFfpvejN",
  "key23": "2PvmMafvpE4aGHRgAMvzmfZKGpoQzKvRnvjABqaB54ohocx5ZCAv9URp77crn8bog7dL7QPP9Vvzo8tqArszMH5A",
  "key24": "5SzDxfzGnusp9vH6ZTJfTPV4K949P9DPU8aU2f7e8C7oe6TzmHQx83PZ4ZSepqrthqaf43qvXdkXtCM5uaVfpeMA",
  "key25": "2hHz11dHe38QRuUFjFBMgExN7qzX9dMXyEa676ZoPVoEeW7ryLswYzfmgf6cL2aAjGoErsrQXotyfYQvcXscVCK7",
  "key26": "eKpSotjjnPhigEsdzzWQXsdmmM5KeGENnW9eTGJ8dR57cA7Q7S1oBg5aaC3o49Z1KzRvtoAqMXb5u4tDbHVrt1F",
  "key27": "2irSSpcHHiEfLwNVLoZ9BWPKJ6BVrMgDGsmDftbArQEx7TJiFynq1Nv2wbagMHJPTVz2e8LF6gauVERMJqiot8fs",
  "key28": "2kCEBAZW51oQvJ46yBGE6ZFXiCfHrR8eL525rj1yR3zHADD9TDQLckv6WPRR2pvCyPqgh194TV4WQTHWrCPoHmPe",
  "key29": "4pq8rEVRFY9VVBgkBGDVqAXmwP4YvBmg2ZhWvLmFwzv6Yj6cPUVcBMrZfiP6CmrbykL9ngBPjZ3hGvrPFVqCrexq"
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
