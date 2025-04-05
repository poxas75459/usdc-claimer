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
    "3X3ELx8tFMYy5TSJPvFbHtwCE4knjzvMHzv1MKwWnNjnmJbUGfpR5m9EktyV8u978rJMifhe3TeLBUHadH3udjBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9ib3eTnkLQUpWEwg6ZQsJWMsYTY8MQLVbqN37QJb9amP3wzYJiQU6uQKakWJTqQpMmgaqLSic5jk3t4Y3FrRo5",
  "key1": "6Wwyn9mwxXt1yLyB8sSjTZRLmdYscqgeK3nARJd52DMR1yyRWy96wvseLTfrmV4cU77HKY7nQwj4JVsVSF9MU46",
  "key2": "64vyTdmkXon4eWiTnSejThBZnt8E3czf1yBiyPUJAoaWijWFBvC7RJNxVjtdrSR9opWYaJB3BkfHuvvXzUB7XK6e",
  "key3": "478NQ81qnDdArGkZXQs5W2EmZ3vmAh39dFiSFmLCQC9UQwZa9kaeVptiujoENXKVtCpBQSpjyd9HA9FZvAS4R24w",
  "key4": "M6xRL7PEbjXqjYSTxAz5RfXYpgx44KCPY5a2XxByX7gxxmApR2zrxnRd35941GWJPqq8t9eJS78ZLue1ZwGyZ1Z",
  "key5": "2RCUNQ7YtpSNX4ydf8ZmzhB6iZLHKDmWaKnrNu5GFoWkVVtAequVxFVKN7E3pQiXrPJ1fAQQqHTHeS3ySjdQn65A",
  "key6": "4vSzpAuiuYyM8LUYx4iRzRciXuQEPELf6jTkaYBVAktqNpi88T28WA2FseTV17VKUbduwtpeYQLy78bWXKWQFrNQ",
  "key7": "3uaMhExbem1Q2VjdQnqiKqDDTXwj1nZRmXNquGPc6vv6Nt5G8CYzBVF4xDPmqCR4rorPzPfDBuDEZzFyvSEqsEdD",
  "key8": "3msPBqmo8383Cyp7i1tfLFjTT4NBNpuvj7Gbj7PsYH7qX8ncA9beZtuRDDNpUQM3fWM9nYGapG1inVpFXqic9dSJ",
  "key9": "18KmyK1BV5g1CWfQseTseTMiEB7m1aJFTLS8M8YZSsJW5sGc5c4wqijwCy8KC8GGffmhXKJKK2K7kLAXDSURj5H",
  "key10": "5r5G25ASuHBeXjtC22P4EqAynvaRvbMiHaTsQWRk1q4NUpws3NdHEGyGgyMt1ZoaBZ3bwjTGvSUXWqq98NNFQaFq",
  "key11": "2erP9vSJjf1BbHYTJfuv4hEgPVEJCTJZFpG5dHTyFZ1aNvetYbagc1xuXCuqVH2BypVYoMYzkhByEemGdsrX5TnN",
  "key12": "42359y2o831fpMtwp79kR39ME5HriB2VzCJJkNk12kbVmkV6TDAfhb2S3ZbYRaJ3x2yd7apRReNs7WLKAo9QTJ8j",
  "key13": "3kDayZDg44r76SdDTQpnXsUgb2mx1Ls92eWVJ8DgS94XnsuVDACUBV5nQ2EJgwnV8ETbXNBjaQuMQJZtyaTrDX7m",
  "key14": "3WDfFuYYuCo1rgWfKsut3aPrke3pv2VoATydoMZugsG6rtGs3kPpN9hux2t3TC49VHVQXMy6iwNjJUgvzWj1ikDj",
  "key15": "5ZFNDPdnWMSdAj34aWF6hyCGNZCJK1NBW3xMfsg7hpad9w4wYcDQKoggctxdqVYp1E9boDQX2Z8h1pNaqwnB3HNM",
  "key16": "3VCrXHzSJzyJ9NJNX6CWxGF3U2SRwbVhJxuxquLXAxZ6WxWtRZZ92Quidzyj4qgSLKXjkZNur7njMThwenm6rnfE",
  "key17": "3YZrsgPKCE1edD7QqrWSwbYbaGepR2VFFkdZy2xeJ5nbJCPbhhzsPMC5E6vZjhafqiEpjXizESojLXCJ6ZYjpbe9",
  "key18": "539UnUpAnwkvRndiv5oZVNQk3Le5zPCKywTryFVMbEE8zaJjRCNkGxz4EgpfAT71CcAGrYovZkaxqach9bmbBzom",
  "key19": "zxfd1PWNLCiVY98xojHWzd7Y2U36TYA96FpnKZ7UDYtqdpBhWogpRThMrLoVRQee7aq4fmGTP6Sk9HBkSekbFr8",
  "key20": "5GCrtVSSe2FCqW429rhTNuK9QA5XwJF3CFzo8F7s34BTZaZgMuQ31yCcwbFNY51PydxadpuHsJAZaXp3c1MqLdrB",
  "key21": "3DME27RGyvbSPq5z1auPyScpzjf46feb6wGsRQ2wYmS5dCiXUnZdqPEU3RhTDpdULy1wyw7UkcgEjGdX4vzvvjRc",
  "key22": "4rRjpwV6L2cNpPopAcoYrbnRuKGoZvE7PEEBs1Qa6PLCh3tkR2zUvqDNyHAMJnjRy3aPvtmRX4sqmfqKhd9cfPYq",
  "key23": "d5jM6xWNjSb6YoX5tFMN8rT19aSpDo5dB8PYBQBDqHjzAFCMiqisf3Czv8wsyudVwu5dPbLA94J2uoyxFcGeLB3",
  "key24": "NMWykee8BXQ97DbYdudse6bCL4GtvjMqM9A63JnVxAgwUZkMfNBHxxArxZSQpn3tGd8Y6PLumbgAVSWNZCVdEYN",
  "key25": "5748fHfuaBrtfDFGqmkUg9FyD8bicCzD8XcanUPXaoFZFeNwiqCLG7qpm3miyhh2tpenhtWUqzqbYL8HmuHWJiCo",
  "key26": "2ArpAyZuEKVZt1mJJrKkDNqxhJLLSH1qfb1ss4wGy7ZwYDjjhqTnk2Uczyxm5tV5rpZXALeV5NkFXcgS1KYf1LTt",
  "key27": "3fMmrJ6HBw5LtMpSrB8Fti922wnbtnjTxnieUtNEYDYzHYuupBKxYeHDDt8y2FeRF3fghHHZJkPmXmr3HsJNZXpr",
  "key28": "3CBEJ6thchhQvz1JhkEbUiBKk6NpeMxCPLqyvoGmBAyZyKExehsePqkeAj8XJxa4HPVE4T5PpZcmX388P4DmU1o",
  "key29": "5kPTCaFJncdz3w1LR5xyndZtXuXxNCyB2zjpPHv2YHq9YFcNY8G4rtvSWWTi6sewCU6uVNRYKgeA4vHpo1zMdsRp",
  "key30": "4xhcwqM8gF6GhtMZSsR4EyUkd9z5yAud1jmtBavzw2nH62EQ1Tg1kmGppcJkEhB6X8Bp3nVCL2KMPYU81fawrN4U",
  "key31": "3kP1xqLYxh1ru6iDqu4fgceUaMSuJFV1USXgpbafxANyg9qvE5Vy3YebWrR46ijv3w4yC64WF77L71ZdxSV8P3d2",
  "key32": "49UVwPfRDLgubtVLPhepmHFnaaYjuNursim2AcNaw2v92tY8t9PrvZo7kN8RcpacSHWjqoPKBvYz2E4MyDjTs9uM",
  "key33": "3TBHE3tF9QRFkbTyySMPfxWG3PqSax9icB44WSFSsTdqmbHP2TjMoSpdY5D6gCcPyX2gGGKeC4dZntf99zA5HmaD",
  "key34": "2TEMPDmukUvunLC7hMEYdPGxSZtcKdY3zjUH91GyxWu8ojdsJ95RJkqosBFZSZg2X8e2X7bRaNFFNhjAcAq8JeZX",
  "key35": "4mb71ze2G96v3ceVRHTCtZ6bmaPXUeBLSvzQjRx7i73NmiP8mrDh3GQubXVSDRV2KMo59Z4kWxKo4rpXY99RFSQ7",
  "key36": "3atmwxmm7wbatvCFLQQwK4QisezEJQh11cHDCS9UavRFStUqjaELwNQ6vHP8PNB4zCPvUgJPdiWS18xej2uxxtqA",
  "key37": "3WAfZmTpv9F63U37xjwdsZ5PBmfpkrY1zvWTiR7a4ogTWvKb5HvLsv64BGwZNgVnh8p155j9AZf1wYfEJ3L8CCGF",
  "key38": "2LvQjuQuoTPjAntyKHuXMo23RFceRq7sQuW6qqSsE3dqyGKbAVshmFdHQEiRY613JTxXjjc31D4YG89JKj21ga9d",
  "key39": "3QcdxYuS8B2QVE2jKidMohE8ih4QrXKA71V4YmgFS8BzWXumkvtWXqiDQsBg4x7Rar8KkeYaXAVBtVeB2y3DZifJ",
  "key40": "2yCX5QDqTMcAFEFXVhb8ZxXrg7XMiEg7bBwrfMqajfEXkXh8LW8vrNXYWyK4D5GNRTjD5B8nKqareurNKMsXAxyC",
  "key41": "4idGwyGxbkkBBNwBbdUbLcrdkwmCaW6h1G46vQiocJEf8tazjGKMxgonASs8ekn5VWDA5VwA7Eabd9jttTDdZuaH"
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
