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
    "vEUtMjwfLPCQdNaPnYv8Hni89eiWuUE9mBgzyjN4M8sPP3QFsKKGCPN17X7PLdoTC83t6cVcWWmQ6qzWdtpUt2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J52B6QmT2agUXHUK1xxADeSwG5XRUrzdcjeKRhkdwZYLQTiCP1WdtYaJaDmPUyoBzAYH35r1DBetiN7ReG1SSzZ",
  "key1": "2ybJVAEfdrtTcVEyGqsu4FnX1gC2hXrahroHEqbUSxe5UpPAygL7DLhgHNnya2gB91CkbNQh6h6dQ9YowDkLxivG",
  "key2": "4MKej8xt39k1w6gvLB349bVnpkXLraxiCFjnirh1k6j4T9NW5VvZF9smhGk5aWUirvYAERxLeKYXAwCdyT7jBAHE",
  "key3": "2sVLQK4ikMuD5eE7iFT4PCVtKAFRuepWDwZE1jWe6zJL2LVV1mJs7ce1RTdLieFLngB42pbGtTf9n4WCr4gVmuwf",
  "key4": "3X4SSXoKS2ZrVcby6kEYtpQ5uzsdN1YeTjstb6TBAbNS64ZRaK5vTqMuESYatrXthYxbjvawm7bBLdGGgXPDnJo3",
  "key5": "4L5CgpMbELy8G1PeRnxp2rBaiRAMetdotPy5U46PHd7BEzsPNhBds2PZaWGTJfdTP1P6g9fiVQZzTcBSwBiMkA4W",
  "key6": "28trWMs1G7a7jWg3jQqc7xKGATjHoX3wXdTCV7k3qJh24jm5fT6sQFnFz88oUUGk8mc3XayRMKiqLPE7nNzAPpPA",
  "key7": "5R7JRc65Coj6dvN9u48CPQmyygwVuYX6ByHeakvohMzXfCspbmSC3HuepXueZca85VdedEXP4s4QCS6sGLuYsuLJ",
  "key8": "2jZcArF2Gk6jQkzkZek66TMoubk8jJjCtddSRmrw1enHVxSZ9Usw23LoBVeFirUoxekWkoheq4WJ9o9GqFeUqgnq",
  "key9": "63s2P2jcY2M4bVm6MjrQAZXj6Bmrtkrz1pyb4Uz7CtN8zSzFi8URcavcgTge3eXkTUietgKT5xBheuQtCjLZezJh",
  "key10": "6cJMv6oCLVFVr7Dg4VDJkgnjSUDgwrsGo2BjyBMKZQJcnsjS363uh1SJf4Sj2cUPkMAhHLZZoken9t2iaEQBTLW",
  "key11": "4Y8JpeoXANemL5tJHJTwtHkMmKRhrdkGpCTHuv9eXSw5Puau733xtR7bt8jbYwh8rEYZRb2uqaTYLmTpqhfjJt69",
  "key12": "LjE97pL6tJrpRhrFQae3L3Wok6YzmsEAS8oztLK6jZgxkZByrFT7wtnGbyAACGGbr23q8CP71wesTvSDuAAA59S",
  "key13": "2gzvKuKDj3JqbwQvs2FSbjwqNrhk9iTm2nudRQYr1fdJhzJMewbFvXAqcrujgTpagosEg8Ykdbmv1qYtFkjZ9NnU",
  "key14": "5eJRXDk3sLRARdYNxn7qoPQRaHWydPFhJ5TCehcxqaHvakwN2Wxv2xYdjkW71s73Qw8xZYNf9UmpACG4ty6JCd29",
  "key15": "2ALsjaELg5H1tcPMPjyxmakjsiARp7VEsRZKJUQSsdtXBoyRi9vXVbsvCbAkjc63gxmLrXnJ3r1pjoWKW6JmVbbV",
  "key16": "5NDrKbzKzsaZrnMcwYr5QToTfvgpeEeNB8UmsW9Ascg63T8yCNMeMMxcUVCoSi444z9ciKWqWzWxkuWEnEotyECL",
  "key17": "4S36kBH6hxDnn8znqep6a5YdbFxBv5BAyr4MQS66EfasZyq9NcTwrUo5ZZ8cxZZvz4pyu2sEumhVcGTSyB3BqgEE",
  "key18": "3dUH6QfdzX7oGcw938PeVrUcmrw1CuoEEuaJz1VLXBCHYFfxjTxVrmB6ePZBUydhaewEZWtssAY7PMpedofVn2wm",
  "key19": "2CgYr4h7EH5wnm7KoUxfWimmmECGag8JJz6qHJB7rte19NjtadyBME4P7L6j9k5A29P5332ocYH5jq85VgmUvo6V",
  "key20": "3vL5vDgb8XrT28icaxssTH9S8CRivg4x5Vi6dr1T7HP4o1osgwFyVuZgxzTLrrrsTxdiqkH5PRcnXaerFtSVXQsQ",
  "key21": "3UDd3Ekr2rUV89kwE7zGiPBsdeFCJTpzj7dGYqrczqKq4Yt8xe1nwc1f4TAq14LrtbnQBa8WJqp3Wsz2fEnFE49D",
  "key22": "5VEUpRQZ1qTx3pyRNKsnwmKi7XUYxHmtKDEpUAePhPDCKGJodCgNNk8zvv7ArQLgWUpzpCsnCLHb3mLK8WQzczK8",
  "key23": "4fqwTkh9sXfTMUgruQdNqRAq5ttPRvucsToLivF3sKiAhdzwb2JoS1nBdNAeKuryWHFED62PEzBwYwWNcC9idj3W",
  "key24": "4AumJwGTuM6N6PDhsHJS2yzjrgb2yPcR25KgBGjAqUgJX4iX5AdY3PaPLx3wXvneovTz3JZyu7k3Ra1zmUohNrZ1",
  "key25": "5YrWsJucKxi9sqq6zTTJPkBcPAbCCyJFUtMEDdEXmZRx5j64EZgWXrmEQbJpXMK3hPZRmztmN2x3GFemfYAtLVS9",
  "key26": "5mwuCB2iDEPGwvYUHCKUmGqCJSv14At8Z4bVsVzZXnpJLbhCs36ZgDa1Ampdoje6WUVz9UJ6kV6h4PWY3pUrvcFt",
  "key27": "36Fx55kM5Z4GQQoQUj9gMm9b8HQzoq4KkaceP3tmy4hSjMtFnUpU2vxNfGbYYwcgYq68tYZgxcXKL3GzFyeKB7TX",
  "key28": "45mH2VDjLwFNvWRtQS1E2HqwfCaJeEcKDVnsVCsMWvGzRC6omzBAjEZWBsB3ve4jTPiQwMiMwmLW5YWNNBwoiD45",
  "key29": "2A1tquhU2DugunHm5FZzbGNYRHSjMMxKePrhegmNtHNZKmn3se18BExDZnvwGArApU3DBQPqm7qUSXDR6xCHXWNn",
  "key30": "34da9pty1CCzQrUJTCpN8siAzKVjmjvi1bnNeW3pt2jEWnmfBcckNSdnZoMjHuPu837f5oo8rXtC5Nbx2hEyJZJj",
  "key31": "3GrSXoVUk296jwzMYAsJfQGGWRxP2LscphE2geqRB1X75rwE1mjuvq9ejEqFBDER1sXuHVdTwEnnBuY46Hmt9pe4",
  "key32": "4BNiSk55noTLdbfX5SWqdJmFucCbxPKX3fHrR5pvxy6pgkH92tF9nS2C4bVYk3aqvogphjAdYLykjg4VvVUeQsag"
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
