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
    "25Uv9kb8ojb8U2oAzeYTvCYRWaxh3YNeF8XtpgFEdfwx7ijxTSCHEZEARAANp4ZgeiRhqaLzFGpYwUBkuHJ9HkCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knqmmoVRpnun7UyjgBc6FmVfeGmgJzVNAiqDdhzMabWpVS97AkNh1C3h924H8xiSxDaT7rA8ecSApRCg9Zq3TX2",
  "key1": "5XKKwuHtqu2WAFvYzXoboEfaFGRvh6BBp1hgRQaom52TUX8zt3DDHcRefG2dcSE3CSpt8S6LY46dYDJ7jEyVmz8Z",
  "key2": "568GL4tnUr93k3yAwF1aV1HqnZkcW63mjN3uoxd9At3xKw1DEFpn86fZuUedLjhK5Mrm8XqiQ8EU4Rtmwq91d8z2",
  "key3": "4nfUVAicKCz1cUFrhFdEQ1FrihN7AyFyKVFVz77iVsnHUSQ8kCHNvQJz1UJy4Er4W78ZiAHaqdmdTkA8umAPtGZe",
  "key4": "aKV4ZaNgef8ix1b68gihCgrH6grqBJhB7BUb9gp4AZRu3R84VC6N8yv53FjRE4wcqT2MtbzeymF2F4GuhgCCg3f",
  "key5": "3B4vqRqvCokinhcJhdkCSF9PiP8vGkyf9v2eE2JXh75FFwMep6haUUMZrjXgRXgyRgNmrD15XNiCpgbNUA1B8YRt",
  "key6": "5HLjsENmy4cPLmnKPUL9dgLMST11dLjEysZ2kcyiD2Bq1zLCWjyirLcfonFjEfcCheQXzAE9h9uNTxYT6Pq1nwpQ",
  "key7": "vWNyynppxUWtQVdqevBHSTVt3R34bUbvCfhLAGgVjoNz1u9rvmHCxBNC7311FUTKzE3eyjqo3CuXsLMGynVtCEs",
  "key8": "b5KCwgkenUG7du4sAq1YHhT3X7yjhh1Vr6q2kKTCdqBWTueR3vwhAtYnmMm1LTz9kA2wGE2MTjxRnubsN87mry9",
  "key9": "2DfTgpzwdkSHHA24FLEXg1bPcBioR3WRrTh88MFDoJ4fd5k6pNKdzc6vgghvfSYcxRgnkKYSEpiwpCt1kaZSkvv7",
  "key10": "62tVvQQawfjB1GK6tdYE76uUfXBxHGw3jAhyPQ5XhQFu1sGoa2BTtxkNjCUWSh56eTmTzm34mgre5MQAkayW7Lpc",
  "key11": "5tbigAHcKj1VCkTnLYpsnqPTdwPmMA74KW4BebGHCPRCEzWM359YJxj6Uo7XW2qvDqiy6Needvz3XausrabWorNd",
  "key12": "27YVEhvNdA3Tyfp1MP3XoNyPGsoREQNiFjghP4CSexoPbynmN91xLJaL4DAojfGBdVynB1QV8YDQd3cmbszdtYLt",
  "key13": "5KrBpgB8gJLs5gCf61s5N2Ho8eYk9rBK7UCpRqr44vegn68hZrcZAzhjbWiizp2iDjHG5yopMx5RFkr9az8a8tGM",
  "key14": "af74Yf1crcbYEdZsNL1VY6QbDasQ3VpvBvs4isv2fdnN8ZSmXJPZeQ27A6b8fvyDCQkKTycjef3FEhj6xKMgzzx",
  "key15": "xsZe5Fg4815TsXr3p7Yq693av4CkstCdVB1JUW1zRxFq69dpGGhPqa6tK3at7pDYfyR4umPpVcNHYxg61kuKc5p",
  "key16": "5bpCcC8DZwMgkBTcEFsxhsVsDYpDcVkN3XHnX1TqaWgaARcpZy43eYM1e9AvwVLfhVqxhau8gAPFUL8JYEpfTzju",
  "key17": "5FFrZt9grTEnuKPbbykxkafggmDfgqB9n8SYDoER3fydh4Nv8nqBHbJjZmtwV7spP1FEZBr6erdrPP7EhcVTf3L",
  "key18": "568DSScu5Cp3HM7D9up7HMFK1LNPbwFeqeNfSpC1vQGHUAAW8GZHQZwoq8rhqYWwiaVdoVg1E4Qp1wn3tZ32mzco",
  "key19": "7tVG2tnz7z15c7kJNohn8v3NcXNgan12hGDmn7q3hBBBTwYHGp6gY6HezPAzfmSRnX5VB9SLLJxuGy4H8unGVA3",
  "key20": "4RF1ixM4iwT1LzaNxWJbM3yP9NJnN8yMHm5Prygz7GWu6bonPEzDy7Bn8jJPLz4UKVaBqJUq1AX6DHEJRYSsWPeS",
  "key21": "2Y2U2P7aHMvVF8f7UtyzeVWmkuvzamUytKF9EfqMN6ENLmdVL2eVaLB5QRCTezLsVpSgxRcKv3cBCZ2ewpLx6Kfx",
  "key22": "4B6v91hovZ8dy4s71tsX1XWvyNiaFpFy6n5LmSPckjBjuVFeT54x8hnUTPXNSwnSxvzJtG6XdtST6dLvZ1o9aAtE",
  "key23": "2RCAbEJ6M768wpQtKYsYJeKfxaYwD4CX6nSi9XjTbfG8bgqmVyki9C2p4e1n9P2rsBoP3iauHZzQeRjgrhVLWXp6",
  "key24": "2roazY7tybAfFoih6fiCxgvZQ3eEGsYGefgV7xFvLT4bCa6wGQK9d4ammChZMZLRJzHTuFYB2fNbzkDPAgnB1oxo",
  "key25": "2X3M6rpYtRms42Nt81ZLhhAU6dy8WpPoYEmPSsvREVVUEZM6a2EMiiAJCxsr4TUvYd4Fe13TLd4ktCohenWUcc8N",
  "key26": "3vzXQoYSeCaVFGBc5scmrxCnwHXKDaK36CjDiw9hPUvQzfUFbmshaKXJE7Q4sCKRdNLT2d1JUNm7dz6mf8uWDWcX",
  "key27": "51q4q6zV1h2UPqPi6h5ubz3hm49ZN1nUnHZ5G9vS9CbQmYjMFDt5yKCijJLmGyzVhgpZf6P3aUTjPLhwPPkX1KPm",
  "key28": "k6MrKaRXHaZQLdBkGX24gcA4zfcc5taDvHBw5ZkKHsPaNmC1ZYeFQgYBJtfhz374sK2LHJXhzYmsvAb6SrH8ebf",
  "key29": "2LMPKPvF1Z5YNuQViDPKeSZCVuQn6vKX43NJuUz5obHo8mxx3EYKweownRSdKF3iZgVSSFktj2aCDdiDBVDeGFUd",
  "key30": "39XTqFrLrxhYiRhMWDT7G88Uip4zjjLzwGiBQShnxbNkZML6uvQy7yUyYfzwKQ5nmrH4itgmYkL19mgwPhAbRuPk",
  "key31": "39odjDACPHkk9V1Q6ngnpF6k3dck8mkiqPB6FqXezX9YstXHyoJUpcA9b3r2oYkqB5tqYbWbJYmT9ks2GcbWkXa2",
  "key32": "5KSBfaoqjsWhwrDZiuHAWdYujvxK1sdqf5WKty4L9ibrJAo8oxjbhTPrCKrYoS8R636X5Qmy49hDpBjmcMribv9C",
  "key33": "chNrcnhxpNfcT3bDdpZCWDHCRPXnrYpLLdEPkqMvUxQrt8XtRmAxW7JxgmnBqPWiyc5Tgu3BBdaApfQ4g5y4Xpk"
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
