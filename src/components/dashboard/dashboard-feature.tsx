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
    "2M8bLRUiedoDUBcK18WeMsN4kGrzjVZYnEg9NJNsoQLw8L8ndhvW3izMtj19AZBH1ffmTDDYU696Q3hEcqA6YAdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DexmHf5X1SpvurMMCYL1AXvrgcjmpsAaSjLA2BjQLwDJFWJ7x3D4QaTJ1EhLRnzKX3R6JU2Gz6cmu3e4m8Fw9NP",
  "key1": "4oCdeUtzakdLfmS64RXw8Y8ABABvvVWGamRma3MKuj9nH25Yaoys4AJa8AfPQLBhDp6BfEWP6dtnMVdXpj7TrZU3",
  "key2": "53biasFamP9LgzK5hJ1h2UMUxU7vEYJz1wTadZX5WHPjbgiPTgL4A144amQ1cXj3pjjAdrJscmZRVhGRvZQEDFeM",
  "key3": "3JuPTVzHrMht2Q2aRPL81hhKko8LaopVfeMZmQSGNpHVoZrxLnst2k5E1STej1dFunCSDSHAbnqSghdfxxB7xQXC",
  "key4": "gq9grsTCmTmKNmxs4nbWpEyvEm5Si6eMa77XCZ3VtTJqVnstkSWpmJKmWN6LUJXGqTjV7PGUJkVNoo3EKpSjhg8",
  "key5": "fa8ddu7Ag68mLjEXn6RFXNPLU56sgnJSd4cokU7D5cw9sgmJjZ2XEqxnMkWLPdCjGS2CBvwG17qDMSxcb8fQBji",
  "key6": "5bae1RyN9WpEG9g4vuS3Fu9FM5RygQXddH4z2WyUgYGjjxdCDPey1GVy9YVmEriZ6ikCBo1BZYcgXMdc8xYdv9Kt",
  "key7": "67jtnpq1ibJCakMjekHQdwSz2n25hBVGBmcKpckeVXtucoxuNaivf5dUd8uj8LeFdRjcswkJy6hkmKi4oLtN1dof",
  "key8": "Hgk4ANmwUMZW7xhDF5P3gwFiBMX1XEdg7nY1W7K1fnMEPZgxGUKccEVS9Ac5SN4hmoRaYR37pSjnbgW3bLQAeKJ",
  "key9": "24A48tdEH94nsgzfMgqNm8qPqsQaiqyUFaoWpyAj8ZFL1DzWT1mN4a3aAUpw94xEfBU9KGEyhQwuvoCBNY9R6cK2",
  "key10": "3hw7j1PvHUvdvE7vL3CFE6o1YcKoT1bnhp1QPrNxQbrChMvHCFic9VvhkXYiwNeVFZBY6d9w2YEGE6q7BbKfG15X",
  "key11": "5A26DT29o8VtDEDd7bfCyzErJveu5pgrFYZUkRHXCPygESEQrV6NBZXK2N4FUcnq1AcpRLqRZwT1bXopgvXo5mPj",
  "key12": "2ZfaKC2YQKexu2TCeTKqPeD9rptoB1tJZBfod4TkBh6irfU21HF2WPPLhsW4ij6DmhYfaL9Q8a913tiFZjJv5uWS",
  "key13": "218bo9QmyAfQzgDHVvRovxpmL6iyUWCU3Z3F7MPbSDBgv3KZWMmk3oSJGwsp1Dr5ecZJwB4UGMYoFYmyeui4Xajj",
  "key14": "3DDAPFW9T9zkUFQe8yEt6dyVSF2LyvBbPCLWanzTbujLNWhc84HpMd4uwdUD61AVrwMeP3AxZCLzyRgzdg9QTMkw",
  "key15": "zct4HAjWga9o7CMh221r7DXKbZLu6u55sXnZtTHV8zwHsMSfqNvqnkt49rdEzJAwnEkwB6RA6uMHkmdtU5ES7sE",
  "key16": "4DatDV5DWFrNXSH1YFuqNhP7112pYAFAonwgqtg92PWDTvjuhw2tukYfQN4JN2TKQcEqfddwpWkJzEGJrrS6Z5np",
  "key17": "43WcFfodcxQhpxzH5EeUrAyqASvEd5a1YL94nBNzkJuizNkydseeXhxHqdxoJCoHW77Z2GKRhZfzhBD2fQrMi5PL",
  "key18": "2QddEfqm2gGY3SDGA7K9n8oLZ7YsCpQkUNe2QEjc3gSGmYfviJ65WTtuEpfNHkT8hZigAvDMdotMK1Vgh9b2VHyS",
  "key19": "fNv5WZo2TSTLYtDxLCX6oi9smuAySfgAWGHKJCGbTrhD7AQvHw1jmNpmCq4gtrxKFmEqiJuoz7gBMnbhhUMPRvU",
  "key20": "3kMMHLh44mw9qrBTnBp81honKwArVTeQMcpLzCjp8KSu9K6GufggbQndgmJVEeJaSnaitMVqdu6tH6hisjyr2vaB",
  "key21": "2XhfjnKrhWbEN5Po9z37c63ULE2QyLSS7uJPXUSoKATbSd6btnv6crEp1bhDM3t1qXL1Wn4hPFaM29b35N2MRuQr",
  "key22": "azoZZo9RS9YU3v2o8zPwJFTv9d1QM3kGMzbye9rZwYLkLkNg1paZRYmg7LeGmS67qsiU7hjvZKHp8vEmf8UBdxL",
  "key23": "4qyhvBxx48aCnyFJjx1K7VqVPx1ybLXtQp22prZQZ7yTahgHkkorpLDZ5raq27uUoi6xfh59j45jmccdP1Nj2X3n",
  "key24": "2xsqHn9VxKjSWg3tubVBLuNtc9o3QV8f2738ighDrXSJKHRdBLYwKHhBmGyGRZio6Hq9VcqA3GTdYQvj1RnvJM3n",
  "key25": "5WJFJS6sEs6YcbqG8aL7KEjqj6Lttq234mWR8qmoyDwpXURdcFMBxRVpqY4DVncRuTZFzpVhH8RfNWwHBaBoYYN5",
  "key26": "3Erdjugann16XJSgNCZV5jitSH9gaU968aH2Rk5CxPkqAKbZYowuBfTUoHEh6fbT6qcitLC6UdkdDY9bTPn7sQ63"
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
