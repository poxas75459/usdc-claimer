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
    "WsKouVaZGAVF32QhdHzKSjRz9fizNwCf2UYqKa4AWfGcKQSnMVrYa3xdMRqv6GGoKAYsBix762i2E5woSx4kugK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiVBdXuZNPcaxkiqVbLTHxyehFbjaUh2v3e2PyrrbgD7ESkswGLvAqurWfKumgGPChGKHKxMr6XHGSiYmXh5hhP",
  "key1": "2DzeRpkmquyGJt2Sim65gawHP5bgVs86tL45nFMhetbsqW1eM4MmwVGPT6LXqiNUvtMUCyR8MD6mmF4ds4k6sD5d",
  "key2": "5UEwinGFFCCduXk4BvEcDcCeQ4X35MkTQXh49peuY6p3fnr8GV271HvbMKDeyikQ2RiPvpJ7qSsRTu6MvL87Zr6o",
  "key3": "4dYCV9S8heJR6YDhd9aJuzhKMS1kvtcfhVZPVEir3hPut4Ws4jCpfdzwkwcECdqFeLMH8GqRBcTBJkMMUChRJATB",
  "key4": "4KfYfaacmr7zQxZdYBD1tUKbw8pE7SV21iWAEKXxcVyMnwyk9BxcB7apubHyEVZTry82ocwnAGRs7Rmz3tpMytiJ",
  "key5": "4SFaaiH1LWEU9uawUTfWMWwKZCCanPNahmPYxh5kxCj12zre1KK4sVKkCevK2hLWh1dxhQCHhdCp2gMsqscvLPL",
  "key6": "2rw4ZW19SjRARZyozaD9CYpGpNhUxaNM66BwkdcAY2pYUNt9PoxVNcY8BCzMeUKhKmqVw6g3h2Q26vExkFvyGzjE",
  "key7": "4SabgErDsuu7aU2MVNofTbfsjvxHcyvdjzrK5eio7UjYbStVFcYGLbYVmroL4z5o5g679eLaYBuGg8WS2kMBtyWh",
  "key8": "2X4W6mZDpGNS2aDumpDVj1WmNx3HUJmE38wCFtQ4rfj7iU5tSa6PD7yGAqQoSTaCY1B1BtGmExybHVQyajF86RDq",
  "key9": "5ACgvuRLWQCfDtN65mhrN8ijzu74VFpgpqF2eSYcdJ8DfZWVkUBAUSjXsJygWhHbBvQeeHoFHPuWB2oBEmR6jFrJ",
  "key10": "3njeL7nnH3cGPYpPw3tYyQh8wDyd5zBGRHEdpQmKrP1M5pmRjL7QNNr5B5NPSp5uiFKnEJDrbWE1YprSVDk2s5xK",
  "key11": "4cHwyBPyhHNjFVGisuaq66mdnYo4xXFp66DyYrZMrPBpiD6SvNqWk1VXd26sx1Rwr9FPr3HbsFZmvZJFztHw6LMN",
  "key12": "22M1PyNLNH1soVrMZkNWXSDaT8U1gcsCUGHhALZFzTWgk2CG7tEzJK8kFx5ANhknU4FcRLZjrDqCT1MGNtaeJvRD",
  "key13": "o1cppQ43nT939Jx7BfY4dNjf4iWFc3GrgKiU5oRRMsdAcKs8hzdWLZTdQAvpLfQVgRDhktksWPqukSGeHQbmU5c",
  "key14": "3BXEjPexYABRqHQ5oBB5FCC46wBErjQ5gvFZ6bGP6vgyKcNUk23x2dss99xHBwNNoXmW6QuUDvbYFuX4CCdFpU5c",
  "key15": "M7vKrbnVecJ2zGiYW3h7EUxztbAtHwjjEZUHuKJxZHdsJd1zULEa1MrvWh1UUtu6BD8JZuLPCkyeYh5Zmr7wGss",
  "key16": "23HnxW6Jf9TZGeCnihd5yKfrBj7GDjydsXtE8c6XBS88h24kTwQzgwKb2QwFvESF3VEy7UDcNJ7cv3VjbpBjwELd",
  "key17": "3A1ruytEnVEiAB7CpWt8zdSFhtivfvwxjftrwCehbzRz6HYhamvWzsU9f71DSspuxMfsVMgczF1pAoAqr7ztHC7A",
  "key18": "76nt5gadDzmLE5Pa2twzV7waUdmpN9HXzjztzQWWEKSFZc6BhvHop3PSF2J5qENe35RtL96NE2LJysBmxFM1Byt",
  "key19": "LMKrJxU7eeYstJ3eSTpTRdF2f45xUcUbcrARA7yuehiedjBDpHK7UQ9Dp2pcGE7ZdtsqcaNspMm7VmFtzpmpZK7",
  "key20": "35t9KgELciZbMCJfqvut8o7HnMghGggimD3v1JN8HSMqvAzQctHC9tFzKKhzdFtZtdEhcMo5jFicMnnXqQxGoFGi",
  "key21": "h9JQQxYuC7BMXwG5LKCqb5YTYadSnirwA5wimHzjapWH5gKkqmDUZe8XY36upk6xRcvQ7NwxTEYkQ57zutMyvhi",
  "key22": "4oWkZmRG3QGAWQhL5NkXms2tvYSJrETRyEQDdJ47bdY5rGTqgK9K6buGCn1Y8oBLo1EvbvHx5FdbaxmMYwEiDZt1",
  "key23": "3oaKqzdiwotQ9SpkkGPCQxG8FxxTSoJAAEd3qVcyGMsZm2wy1Ph8jjNWRc8ByejFE3VT2x4ihuzxFE6cZdZcGCaa",
  "key24": "31JD69m1SMFLFSGCaeT8SK1rg5zFTEicsYU1utG8xXgiFVHyXa5NZwAZCz327MA1Tv8Wz3qNogKCmmVJt3DMLbJD",
  "key25": "4UYnrAxTXpCWwtwNCgwoVVHWVmQQ1qRbUK5Bf7vKWWjbyFabk1WGLxmSjFyZRsHpJeZkaQztpPD5c1FUeitHfing",
  "key26": "61TDuVdNffoaSqrmcQ48cjVYcGXxQSVKCky5SctRCAVaVH3evVt8mCDBXsk8wxnRmUAaWuaLwM553q9F6nG1Mjij",
  "key27": "3gaK2m4oJqnhx4uDoEffw7K6uAnB1kZDq34jB3JYZyN47bwQXC3nHGg1cPqoNtTwKorWqW4QKYqUJHV27St1CeGT",
  "key28": "5S88eDRJnbqGsQpvp7YkbLtc2wwTYThAkBFmyXJe81hAKkSMXJ7h4Wko7T8VQ2QoMzrkoqrtKqW4Vazb3Khr8tVD",
  "key29": "3EAbUmQ91ovSMFy4VMzy15MHa8EvUmuPay6iwnBfSdZdSTqoWDqEFAYVbx25gvGEoUHx7z5TGA2hVYctuWmAaipY",
  "key30": "3NaUkcbUj3VdGTTLab5FzA4MRgs3okiQ8ZPRoMz5EVyagTDroP8G8YemzQ1rxWmaUtBxyozzwWzrvsNrtqEBmCvG",
  "key31": "4QHMnKPyedW1AtUA1pFddkPniewTcyFFPrmoAeifLrjXKDSdp84zN9JMnASLd6mMC5AbHbnhoe7qy9bZoRvZXrbt"
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
