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
    "24eG4GKhHFx8Ps4MEN7pWswa71sqEQwuwuZhUuZGjpFrH9aQ8NmWBd5aV8gRV3wndy1hhRHuZYzjGHwPeDmNhAFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x17n44WvHjS45HvZrQ9aSHVJZMwYqUVoFMrTzqYeVkLcwXMAPX57XiCXsspCes3urFoPwXkesHHdRboW5xkC5XG",
  "key1": "5uiMbUBJT9gxAVoqNLrG7qzjKkqW6RUp7WXLH7kUoSrs1671GjPv2ZjcbqcM7bUW5mFRkxC7EfyFXwRMVUtVofqC",
  "key2": "24jeSdoBoRKauwLTR1qm7NZUKSpuYpZ8i2VUT1TbsdMeyU1eqfRz37XL2cw8BirTSmh8cjarPtkuQK4pgFcnk62X",
  "key3": "qxLEFUPv35UzN1o8HsFFPTJFDbo6Tkix3BJv9PpsZxfKKxWnm6sxUuYXmgvt2UNcuEzu18XtQKvxT7kGvjDi4sB",
  "key4": "53wTCwYf9UvpK14PZsGbemhufH2ReQUYPR3TCjaRdTQnN8XmbqsCkQ4wk7wajSpMcCVqpav2QcTDpn2gw6Xm7HHH",
  "key5": "5HguWUXNbqEd6qT1zbb1C7DskFogBcgtNCK4WJGy7gguKSNs3NTVwYV91jQvEYkn7geMMyHLLLtCX3VDEwZqXc54",
  "key6": "44f39a3JvtdUudXjPEj7bM9AayrUYNGveRH8wJHqwg8CvrUFaiAgwm2rLXHK7XiS7KsMmNpUjv9q7cRzsAVjm8K7",
  "key7": "4vTSJ9ewgF94CPWmENtfr6XLpXWgSgpWqhMhE8J8DNBXs3r4kGXEvNdgtfnyXfe8BT3J7Y6nLUV4wzyv7L7tFsZ1",
  "key8": "4GW8BxLUxKPvYVuBRSAkk8igG93y2xyYRVu9L8iQYtA5aobSaEEShTEhvmgBQJm5JrFUeGYypH5DapfpCQwoCr5f",
  "key9": "g8gT5Rb5CkRzVWsHLYexoe3pXW2JvhQVCjQ9YXoiUWqCYcBaP6L8224eJEStweXRrqupDhQk2xTfz8xEXjxVpbe",
  "key10": "4vyNzrritZQhJbUhkQUGiV13CxFB9qhmKvQ17kFHosdAibjcwcZruoXkhdyorsJr7EKRZyJM4DPAHPpJByxbNazV",
  "key11": "4EKYmW8NnHn2zLVXd24rHu4VswvamdMihSPxbJL7rua6RbkfyRfoNvuTjgp7nNM37FZ1deGZ8xHb3ijnDmqGm1FL",
  "key12": "5o9DEsW5BGHyk1CT5Vbw2nHKhvrSfvWj7np4EQv6VcsrrfMYBB3raXkELVvQr2gzjeNUodqX1fs8g2oUr4ph1Kb7",
  "key13": "uGzR47gNK8hvVkTJ4jgLPkR72JZ4CNCTgS8JkZACEajpkMUzgcfhm2qj5iZJofHU88z8rFeueN9GNi5bo1857mn",
  "key14": "2etcHPWpZ2p3L96He7kvxBRWgL3i1AqCYdKFKLoxKrdgz5KipcrhDqjLTF4qRCk8GDbPDAj4g8vmvHrw1QbfcK3e",
  "key15": "4yKEzPzPvNjQZYUu8X2uJtqnUxkK1zLgrDXJN97FWyEQVjxbb9U4k2QQxhYK9yLB3k3D3pLuDE5fbP778PdWe28g",
  "key16": "5QxiUWswWUo8npnmfVpGRbVT2oUomaDejv1ujuUuyzZNqQfnds2krqeUQkRTH1RbMX5PKfFj7vS6h9hgsJVBSUYT",
  "key17": "PwY5Sn63GYPC1w2RFADCn8fDvDCAS6AsdsiDH53PCHwpztdvuDhLf2yhYSD3J9sYppJcMgD4qWTWnH3euTe2QpJ",
  "key18": "5hQiqvSE15kXzC9NKJ2widcHi1fiARiAHC7fNuw3rASs3hrrUVDxynBGowqeKauuLXJwWtPUawJphi41G68uAwgz",
  "key19": "2Na3tDanvRbrGAEmtGcChYP1HHAY2KHSiU8CXHBiRMDiFEwAtgBhqNVVXNpL8BExKYUBmP8eJiCt6porwv7om9Ye",
  "key20": "3e4gwUZootnNFHdnUCB2RYyASLqBL2XCe2vqdysYFr6gvX1sBqhUqTkRV7fw8hexrfekSJktenEn5iAFXDRAr8YJ",
  "key21": "3eEjUun3yPnxgZLcug5KQh46X7CoBMb9Sn5MyJSM3QkJVkqC5rrVvVuSqEN1MumawK8distWN6z1ftmHkev9ZYQR",
  "key22": "5iJLmjbZmcB2knM8VgE3PWJX3QSyJyRAH5wMjeXBimLYvi5J27rBjyWnCEctGdLHoedj4topKUYwTtXsZ3Z7j8KS",
  "key23": "5HmfchHVKJ3CMKsn59d1guEXCE7GqWv8uQbpZLtaExWkW88RFsqdHamZJXjsJgVYvGVmsdJMLmybpV2fsqo56XE7",
  "key24": "2i1ogj57EowPhVgzq49Y3Zutuu4GQJCAtDf5QhqsCEwx6HUuPxjwUDBWzvSixN2U4kgnExr3HgzarhvKzUwSVwFs",
  "key25": "5q1n99nCUaa6z3rLyx8at3HhqeX6zY2VMcbx9fP3ti3VnhS74w9zPyNaD7BMzj2W8q9Af3Dq4Wbx9GG83QsdSa81",
  "key26": "67nJ4i9HpSNPa6Lg3CPbwaicS7AvjMG3M6ATGR3ivr42XWTChEQpvFHagyZ4iSyhAZuNxwrY3Gd8Mba27bJg6j8R",
  "key27": "3aNSHBdi3q2gYX8QJ2a35QtaUN5AcrDKhHkZCusj2o2sm4mD2dTLspeibnVabA44pjJRC6uFhD7Nazv2sqj7H9BT",
  "key28": "3jps8Nb83WApc43XbTn59Ftr9Gu7yMhhmejpYocUBK8cQP3trbwzvugVUS19yykM3F68s4Q5XYoYW9bSE9iGDB4E",
  "key29": "2MG6yzefpak3hjRJDejzY451VpAVwgZVCgkUZ556ZsCVm71cTmxc8wk2GwPgLuBkFrP8NZvnMhvouUMQwktskd6U",
  "key30": "5LbbY7ohFTqobPYyuRthjovj3ERVGvfHmvRH4gEFWjQGdFrxf58ApzeC4iZACorQLgHPqsqEfb8ZMEPoUkScrAA3",
  "key31": "2e17ghizWWcWN4RPycKZAkLpFzcoazDMdi6whEiYfFJ8aTM6qSUwCRrvLir2PCzmW4uFs3uAsAMx5Ejr2Ux5Lwqm",
  "key32": "3TzrUVyrpyxk9porGNcKFkjr9k53L1dsuw26xgeNX64KsDW1xWQcqc4xStfdaPtoSW9rsKJE6gLANW8fE4s4ZFED",
  "key33": "29nvTmhPxn95K8M2wNhzNJadZsbLmXyZSR4hBnEt2CEzvWisSvosdYci7GXsd5qhbYXwsEQhNzc5KvsWKKUL5BMq"
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
