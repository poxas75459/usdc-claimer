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
    "4Ya7Vz7JFskosp7DD4ZVLfzY5yoQUrWUsDFZ6cy5GBrtW4C93dfQoqEGcCxXftwJE5jCFecFaUgV7QyeJbRk8CaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyU5cBKj6gFkb2mpycgbDR667m9f22RbdgfQLcGMW15NDfjw3yavZKqjt3FiUtDTbvgEi51nmtvhd6n5hn9CNhq",
  "key1": "eQva8kscY8wp4SQ1xXQFYtJfi6nmG1ySmjp5nkvXM1vKNpvsCa7H2M4uLPkpDvyW5pu9wgA86cVZwnK91Mn9p59",
  "key2": "d2A9pEN2hPYV3rPc3QQ8kjwFmjmxUW8S34JxFNZ5nziiwoivm3oohLbrc5GZXhsR9VZXpEGY9yR66GrbPZUoxbS",
  "key3": "5ALXYry9cUam6iYuvk5tkCktKreQ4zQwLBRbwe6uQsgXSZz6Bykj2a6o1PRwavMBdFhfEPzPHBdmSPVK32hG6gLA",
  "key4": "2xokZCk6Up5uDyVhmTQgVfpnZiLNECLWQyiUTaKN2hHhMwB3JANhRBkjq9jgtxR6US4wn7af8bb8zGWAMdhAYBrK",
  "key5": "5SWJKgES1kVfJK2Jszr1hfzFYdGsbbg8YqgLsWLvWGgHVzTav2d5nfiYPnGogmt6jpQoKfzmPeaT1djQdmckrPm9",
  "key6": "5WTpF91TyscY5zmgLQRb7f6eZmd9adycvm2ZVh9A27oDmYsYbwFptVtpEwSqfKPohRYEynXyfFAcYBeCbByV5Bfc",
  "key7": "UHAk6vThWHrRJ9WSECYQV1rYvukkkDSVWk4DJipPukw1bZTMcQqnYfToRjEC7y8pzCrhewGaCdDAzWD36GD8cXs",
  "key8": "4CoKjUuZQXMRWnzW8Q4sLvdyLh7UZYysRWVRpKMsFGjHWo6ahTUhyQNU8TMMpx2AcsZcpboR8a7eh6AH8vGbnxUU",
  "key9": "267FFnp78zR83fdHyXw7JUP2f8PTJmnTGs6K6y5kdHU4gqCsG9xeaepAMstbeCeE7npwZqCQUn1dSHSGqbE3YmPL",
  "key10": "3KyAwr7sn7itb8rYRVLCaYBZp2chAqrmzJabMJaCvey2bfHr7Hwi4dCjtvgFH8aDbx2jpF2qnNTQjEfjizuuDVLB",
  "key11": "2FurqGP9k5z18hcEBbf4Uj8zVGtT5wnKg6aphzbXndjZnkjgcqhEiUe4dt7d5av7qU3rDR6jzjnsM27NvgFUVPzm",
  "key12": "3C4A8K3EczRNTubmLAJ47n5wBSkwTRC7EuXnmmV9W9EMSik8povAAWHUe7DgTjzGiawAno6JzHYjdGApmfZ9yko9",
  "key13": "K6a8gJhhFCsGnE3s3SJAaCDStqLGfzMG6aHYGiMro9ZYsnV58GXXNCQkmd12vZPRACfHZPxQBXjDT7jrgy4FCVC",
  "key14": "9z6VfWxwQNvKRgkcBiz6yti83DeocDKSE9AnRn3jQ3p78P3Vb97Y278CNqFWqm8ME1qwGXyKnuKJzPuvGSY8E3S",
  "key15": "61U9Jb4eaG4kBYSEyyGyBa5XpLymquBHwTnoZgnhtdvybVJ2HmHixrsmLRLELyWskiGLHLS4285KNGjWWbG3ydxB",
  "key16": "4vewckv3futUhvuvM1CPd2ZXcanTHdcAqA9JGmeVqMyCFFPP8VJq3iUWVoEivnZSkKDN3SgFQjFGwDqSRwyfw8Qr",
  "key17": "61Vgzy3NovsUJZWSaCXUSZRXCtK6fL42556E3KujF2Z28X2ooHFQdvSSbBAaX97aNU5gVpckWdYzBLp5MrciNXyY",
  "key18": "3EYSrMmYREUi2rduHgoTkWJK42n6vvfPkxYUqTUQm5S6jbt3LNUSC319Y9oHDUnKhgVTw1SfBYbJS4FHfqaKAaAb",
  "key19": "5R8w4CuJesRx99bmGqr2ofVs97ceaKSdr67sWnnQWoDqQj59u8mM2BtBcP3YV8iALtHDQTs5iiRG3GefMBDFkX7c",
  "key20": "34ezT46eV1YvQrHwryFiPfGpXv1sXTByhfvxMTbUPzfhGoTwj96n6UK6DtYQkfxkPX4pga7VbrguKwHnmXvwZRmL",
  "key21": "2PWrczGsRMQC7CQMeAQRPja8akDnqtVyvmcc3YByNTqTbDZSDjANhe314GQCUDTSzfp3VzPP9i59ZirRd8GSMYnE",
  "key22": "F1uR9JrjnAezN4uwdhzX6ftJv5AGSpRCepa8augAxWRUYBkwieA9xk6s7rCeCWwWcZm19PWtFDnY87yrtfDLpxQ",
  "key23": "4AyN13Ji8hoG846iXvuVTtWsV7Hh65ZxUBECcFnJWdYztSneNUXhDXVSBvYSE5bKp9DFidomiV8go67N6FurPPyB",
  "key24": "2QRqfnaptAZSz9s9qiaBvGKXCPWoupgkPuWq9vRuJ1ndqdXuKJvJZxasn1VQAU3J53yMoZE2LXCgUk42LT9tou16",
  "key25": "3izDbBDETKrHyKMxteRi5xB4hYivejdpmPwntBFJAWjsU3RuFMv75XmSbrnZZdLGNnnGY1sF6zj9RSjxZwFF6Fi3",
  "key26": "5MNTss1BvLrj7YY53HuyCEJhWab5wFYJ7VkYc9ModRFbTUndLT9VEvPNgoKq21huWoRgskQYFrras6zVfWSinpJk",
  "key27": "j4BpzU28g5CY9ZV9LfqBabLYDjd3JNySXGdG96dMUJMvb5JkF1b71wF6WaB7UkNjJv8J8BjUXJRg5RRBwNG5LKo",
  "key28": "3Dv2398Vqz1JapBsTsJyj9rFoKLZYAjF8Q4WvCkL1V28EdvBnUcjDr2NLEoxgNkrxTPPrtHkz3PhttYaVdWuAzEk",
  "key29": "668mdieUvCVRxiD48FwXB7CqdJTBxD5tKv64ieCtNRVffKvHhgeSF61YkHXnEuLG9tZ7etdBS25szPW7RduuVpY4",
  "key30": "4S3mhWPY9Dy7sM3F2QYUan7GLNXQLoDPxtKk8eqCiZLeMa4NGVP4SL7DPzxa86jKrVso77TN6BdcZZ2S5dkC5AC5",
  "key31": "4e2s9BSwcbqsiGC5B7bh5XhQRTwsUqjBMwzro1BsZvtawBjyBNLpVkwrVHWjWVqnBw5chXKYCbSk5uA48iyBAnYh",
  "key32": "5Y4utw1avkSGMtTGPbBBofoPajToxnTJR7F4WEebLMhdKC5RrK4Vb8jpQT9DnxVXXHC6Eiey7qeKtsfmEH5sqn3c",
  "key33": "of8yyC9EvdzDdMwieBR6fvosPL6NvxjTiTTdaJLpa5g1ubZKwssPkXRX6EjLFyGSuRDWGjJPeFAsdfq7f75zRQR"
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
