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
    "4Y2NYRMo9rxREc4aa38T34Y31dg3TAgjxvAvGW4FzYWYM6B9wmjJeWtKwwgaK74zAZ4yfA73MQQEFvusm57qGxYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJ157uWrNEs9zVH3dxoZcNU8GHk8W1uLTJvLrs2f8rp5Rmbe8RYVcqFbAZS1qhVTryT9npKhYeLBR5ohZgYuLPz",
  "key1": "4mUsreUuEyVxkwj5fqX7irL3BK4vW92VmwJTkjUFyJB8g3opQZwNMzp8QxPsWhGn4z5NU5dgeXK9Wgc3jmN1xo79",
  "key2": "49rVD3QPdKgEpkwrBCniStDU3LY2naakwH4c2TJYjAYoANjmJcobcqerBqKpQguChTkFCzRiV2HPZxbxQfiRqYdn",
  "key3": "286HN8s63MH8VtD25cQcaVxaZyjQ437q5Sd7vCUCaThq4LxBdCdDZdyss98Cs5pV1hsh1aTHZw2Ai15NZcXDNzvN",
  "key4": "2TzChXSK4Sjn7mu48UrzGWMb4kCkaW6zgfy3E1U8s7WgNZpfKr3iU91enN5cVf7ZhBBZ456U7XC2zX9K8XbfVHMu",
  "key5": "5SM99iwCjxJmaqz3t36nRpBYmzkCBUps1raXcm3AikeszBMYB3yLLzpZTqLUwbVMJgyUANrXrkhhyCgDhtkyGGt1",
  "key6": "3CqeAJUQ6FVp21qeXAkpqTrB2wkr9L9XFTNQPS8B3Ewk2VLKnnhebTZRGXNBHj7QFTyML153Kth7FY88i8u7M3Fg",
  "key7": "5FVjSSTmozxEifMux9iJFJcNJsgpv94SiMHTchLKbFKu6fC4bSX3XB1mytSdmXtdBkNivbDEssdL2Nnsa1h8UGEt",
  "key8": "3e6cRn2RGhu1HzJG3QFD9cCyobNh47AGscR39qBu1N7VsiaaUt5Ldxac2aSBNN1pbXPPqUQJaTTctfNTLqh9kTtr",
  "key9": "4ujMNb7yjENKvJEyUzrgsitfedTWXwbWA7hdErNPbxMMFy9Yk4bfCZGMnzHxecWG4JumNHWX1aUrDyRkpLqG4qn7",
  "key10": "3BNtBY2KEEGFvrFPVdM7TKDbr7hYZhCBonYMySeHA5db4qBezHcF6He8RtDipv8WXM2TuxWoFUfvrDzNgy17Ajyk",
  "key11": "F2EphVXFtgQzJgEo91u7bGtkb9Ho4XHCrs84uPMCnyBKpbrhdUsJvPi8s1axrsbJxSCaTnMQvSNG2YiiP75vfrn",
  "key12": "2N7q2q5Rx4MAaUyCycUrqDxXaSpLDRcZ8Ue2MJ1ont5gXWaeCfXzeFHHocYEki4tqbayrydZgCUFpNm1Qt6kU3rS",
  "key13": "53KURkGeqaxAEAFjKpDELXS5xiqRuEtKeuYHqCzbat4coSSFzwtREyUXLCJx2wgQvzZyehqR5MvAPSJuE7PCWvru",
  "key14": "FWGPTsCyaHBVoN1MprYziphfyizRZJnCegyrE8KvyF2qcn5LJfF7w9gbqLUFF6AYR4y5gpMXCLR5nPvKNsi19Gk",
  "key15": "4DY8zAqxHgdARQGjiNWF1NqGPUUBhCkU6uP4FmsJWspYQ1CtdpR94drG2ASL8QEhiVXJneL52QJ6iMwe42FZUSTc",
  "key16": "3WHgqpAx4HwehofnqawfKCGpo183b87D7Qcce1h5WRiuUBexkjeXEmNjmNYR4bmg8LpcKabB5VawAdy18ZiGBrUS",
  "key17": "4XS5gw2DbyWfoFKJGHh5NnwmKUqKtmbaHVBhHJcF1PTZe52kWWxJmcaBRQMNJ3yaRj7NKuu7dABPpWn1zSUgU1BU",
  "key18": "Hv8L9vSbdXJV8gwVZ368dhZa41J1f3knXnFXSCUiAZEGnnMYgwRdPeWb1SPj5YxiwaWfAHfrchkrSMy64Ux4cnG",
  "key19": "4nVKtZK28MKVFxdn25Sh4iczYw3ucLeGSGsMsMJHwzdAbTXtJ2E6G6wZJrc6JdaXFuuEEBNmhHk3y457XjxY3ZKu",
  "key20": "Ms3887w8nhEeDv6kfyBb3HoqiWj1LuuEK1aX5ohHEvfhYCJDmwsk8ekCRnUwrGRY88s8CeebN7g5SktrejCZnsz",
  "key21": "47vd5A2Rj8Navr578y8G1zKJM2JrLXdyHcRHxYqg3rkD7GH9h9vygUv8CWfPi9sFuFyz7nQ8oTetBdnWvYuykkcd",
  "key22": "3mBbbfdLPzgm35kBQ8i4bhjvLrJMYBTeQJk5f1BBU6Ey67FJXoMMcCmoLaRDHxm17uz7g8rkkxw7pSk8TXxV31Jr",
  "key23": "5wp6YcsHrvdvyxjiAxu6frMkjohXCecXd61uehgCnCn5wS6mbErduUyAt32GBVNwBE6mb82gXovDk6kxQo4u5QKE",
  "key24": "26JLLXYf7kv5CACia4g1ALUTusdNgzzrSCZoaJw7RVbRYbE9b5GQhMgom19qjdWvqxrDHDPKeytGx5WSTiDvN9tt",
  "key25": "eMxfjwmZneSZH9TBDwwjbw2Fs6ZHVJoBaddKt6ELzxPZ33ddmLMqJZXZZqzAS4W6cDYqJ279Aqg8wctQDXkWFq8",
  "key26": "4KtTHbo8sKHZhVwDJopp3TsUxnvZqe7hQXCN9dpdXNxwizzUhmz9noFqYvgF9sptyTmffRgxsCPqaZAjRSwCJc3v",
  "key27": "3hPeBF6XwarF3v1XWzdyun7S4rpQKwbJQ8tFvufGLXbNUuQxE9hkmFu21hWq36Ux7K5WvL33WFTr4JDYshhe8YiR",
  "key28": "FijiqXa12UtcYQjPVZ5K6EzWUKem5UQFBETAbvkPehFkwP8M2i3KCUEHGp2K41kf1jfWU8jJLcDmzHb7TJHSieL"
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
