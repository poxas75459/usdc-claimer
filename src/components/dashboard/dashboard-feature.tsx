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
    "5p9YDPjg666JmqLewvcBMW5mFwbn2oStYtsTVC7F3HdSQAB162z6d8s2Unu1TrBghrRYym49w4cPwhQzci2tLYBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rey9nSBibUy3vmKzQhVnmVGsMN1ivt8CFJBsvbXd2RqmoyKLfjAHWMv7qDH88pkq4BuxYJFZMq4rotxZ81RszNJ",
  "key1": "5Z2N5FU2UM5EcW6uqTc3tUUeV8Y6Sh8cxi8jNXqZiA3mz3QtH8Ddk7wn4yVoeKH4btsR1HBh3SXBbNnbwRRvJrWu",
  "key2": "3VV5R8nZVfYB63Hwna2WxBtjAS5jiNWzQoaoidmxYUgPJxTcEz2Ld6JSa3hYovYqEDUwER6BHJPFMyCZHhc7kUPW",
  "key3": "WaKRefRGbVRXXuM4uP1mybr4oEaJvktwaTpBKJ5yaZqXqgWyTZABC2Kt6ioJRBR8NQobMdyLvWaNdo7y16FqSNt",
  "key4": "5ZVRPkErSmawRWt5eZAiMvyJLZfvFq8Qu8aAB7Zhf5rYTs1L4zkrkg8eYEYDfoeHeVbnJVoiC55hz9a79sRmo4e4",
  "key5": "r1eVHD2QN2CQrAdAtVTpvk5BFv4mehe4jCwx66J3xGLKa4feCQMLsvmxzDuiY3m2xtV1mHdcjeFbwmeG8KzddiE",
  "key6": "5b4mZGS4XPoDLXv8zuH4eMqueATbVuNj3QM2gGG6Yjf28qLRTNueGXfHCgyWGGRAuYehh8oXrtv3dn3xqtYtNvCR",
  "key7": "37oTdDpvZaa1bi6kXYJiirRvt6E8SiBGcv5BnMQnk9H8UQ61nurVUdH8VAEqSiRcn3Nvn1ii6DZU25ZKcgRq57Nn",
  "key8": "3e9BFGssSnz8wgehgB95agsYNmg6jUawFp4SnMUtz2Qvc7H6jCDbe8XAJvoGNwZqPEP1bct1QHMVMHZp7FzsBuN4",
  "key9": "4ATHmVymjHg8W9Cg5MqC2sQJ9rdUdZrLXUNZaQfTXh44cTA8jWXk4UNWkCrJSCo2Mw6v11rwzy3znz6XYRU9zjPG",
  "key10": "h4hwPBXNKYaUcrwhoKA1PKM1TmDrv8CQyBVvT3cmFxvN7JnTc2PnBWyW9RumXwhVmjSyzQPUznvw1iaqthhuzU5",
  "key11": "2vTzAJvfrR5NxURBpJoFZVvNkSM8QHs151bt6rABZDA3d3XijjA3BJUtEv3us34hPdo4c84AzAmUCxxJCPWFMLhN",
  "key12": "Vx9RBSccvn1ffc5ez6iMDvqVBQymWKQr1LGeqz4RqFnCta6ptEgErZ6zxHwCpC9BjS4BuHN82k6HrDRKkequJWg",
  "key13": "nmfRghH5L2LVdmyRUrKoAB2iciNktAAiU7gMSJrQyDg2fFmss5LFKMyPD7goXnq29tLVK8WiDWG6BuQHdjAkNgv",
  "key14": "28pYjmEsYacs5pGDgmsfngfEq2EB4t3zZwzGH4S36zW12fskDr4nf2sXzZ3v37yXzUEQkKwFs2GN5cqLGLW35Eev",
  "key15": "5mqFhpc7XkLo3zwvsHf1Uq3bohzASAk7RFAdEMjjfeeFKmYc5AmyVe7dnRHf7NXN4tt9fq6FMNgDJmcZhLE7MDXd",
  "key16": "5LmCeqfxr1CUyrRC4xTkkwhVPr3H9ueCQxYYxmszJvVhVL83jFLCUMQ2ocKcMA2TmqSSDVLu1T6YmEZBq4bugjki",
  "key17": "4qH9PV9JWooSr2tKM8mKfUCTwr4VziDRQeATeuMbvFLpe9rRPEZnENuWJL7D4wAB2DnX5dNwPaxmPwWBR63cuVZJ",
  "key18": "5FZdEkkTRRYEsoZ11B4poW4Ue3DbhJj2jvKsujfft3a6eMCqxe6Zfa3V4HRtZsU8G5hmnmAmMuks2Wnfi6PedJns",
  "key19": "gqkA3iNvjWtog9SeeeG1k2vRLqquAhCEgfr7dug5QV1cGRtyRErnXvkspjMRX4E3sz8bw23gwQns5HjVB6VTBjg",
  "key20": "3RPf3mnQScMma1hxXZNHPsHs9xXqVKBm99pag9jyWWFmAXAnQLdjh9FHCgcJ3KaTrP9bBENHPhgP9izFz8o9H4Kq",
  "key21": "7EGXw7wdGn4cg2qe4M8aYUZgoszQdY8ooHJU5eV1aM7FLyyx4tWvKpNSYFWU93R8tHE5ahy3193ttEJr2V77ZdT",
  "key22": "z19FE9yDznGbUDHeiDVZKeauWVTdnthdHU7dvourpZd3jJ17LWr7zSenwwxz1BZWdpLpsM1PkEiXnUFy6AnobWs",
  "key23": "4Qtmyx6P1ut3ougggM4zGh7i7j64nejxJkm8GCLscurnXdF4qaf6jhMeJhUVtXf1r2PfXS6JDJ4bndzeawSmCcnt",
  "key24": "3RG3tMuTXUxvEJGVGBH5jqC5GeUTgqTTz2TVgCcHYqqqcZAX9Pme1MtqgpxjZLsFnPRQedfPNKiSwPLkyJHig8Xm",
  "key25": "5K3vyGtsmnq1UhHH5ryCJXqsVVweDAJdu5eEJE15ExX62gGrHhG924sjbx8aQmdHm8FvvnyD6DGZRMvVTtec44pZ",
  "key26": "3iGeYpa3cY915b9LCrcqsat7aetiChevzCG2dAbLLjs9UXJLykMMMo3eQ8g47eVmCk1GgnbyghXP3yvPjYYeaBRY",
  "key27": "3GFToVTxHchot51DaNuh7zyMRkaBRgtc7CRYMVgjy1VEU2Qw4v8Aj41Zx8X4dM6JWUBhP7VDnTN6vtnDXHtcDScG",
  "key28": "3QHrbqAJv7KsYsKi3J9eeXsWLp55w5HrQa1avLGnHhKsUoUakJi2gMz1ckNbVzTiaKoimJxkUshARhFkgspxVvrG",
  "key29": "fwiB1DSrsxKjmoEA2z1Nf1XwVP9wHju8WuSZ58EY2nd5SR3AFirdneALVgWyfmpPUE61zWVj6vrzCsf7EDHJiiS",
  "key30": "4LVAiwkVMYziQvfTnemJYDkwxuioPkWQQLP3e58YrDCdjBTnoUZfo6G27UTxC3imwU6EZzKEjL4PjN6LucgjhvM9",
  "key31": "3PR3nuHiAPoH5qYrAmqKxvUAXu1cTgzMQk5EjEcuBqHvUjHpvjGwESmhbb8RsTZdMphBT6Zyf38T6tqnms7NqqHL",
  "key32": "59LwTMHvU4D2iCoiizPur6eYRE8pbrp1tpe74AgNG7Xvx86yLdUqKytzyz5qWXMMbXjSWZ8EnCXiQ94QDd6966zf",
  "key33": "28cBroSZEFkULN4kyWXtTyT4qrmYZD73ob3nBGVuRTSLfnpY4se6PEeGWFAE6Bvw9iWa4h3KKpRBizMzcxXkYTVt",
  "key34": "4NPFESN2Czty6obduQ1W8Jgb7hgpjw38eHm5c5bgvPTsDir1WfWbuNgHpr2c3VBX57F7BdrLMEYG8gMTX8454Cm5",
  "key35": "5yLVBvBG8S79Rf2TLZL8SuxPBLrD9uo7r9J3brjFns5V4M3pJDrDEbnd1khFRBWcAi4wLqVHzuk9EZqLjmBfGKfJ",
  "key36": "78QmJ5opRZrWKi8MMickH5sLuLQB1BrXy2ZKsYwRNkpJLCaN8DUs1rq3mR7jPxw4Cvz4iEnMrGNcPTLQjVeY8hA",
  "key37": "2sGYVzvwQ6dhAbhhViee4KUSYxoa38Q4nQy8FL76pMwkvUMjSAKpkNE8CpVU5Gsm98L8f7bVv6Aehify3f9ecQAH",
  "key38": "jrjUL2hiN7mAYqgoARDqJ1yw6teWMkTiQzdgrcXwajreKzzD1YTunrNUJkg5Lg3WfTUAjc9o7zuWrWhhg6dne6k",
  "key39": "2xLB4iVtDwLLqV2pQAAneptdrBD1bAwGdxrPX7gYACxUDTgnPBptwsYaXzX96CA5zhgbaH9QTmjtpxSctTNnHotE",
  "key40": "3Rmu5ecgTJDscMDSmmTXf7XMZtPMUUNj5jHjb3a2LiwUHTKA3o8sy7mZVcBRqxMPuaYqLS8pmy6ySQWmVsitnQyG",
  "key41": "5HC2VHzYoxxsokfm91LuVw4uRLsY6y6p5aWUPtD9pHoGKqjJz7tVrNWFTtroBFKRzR4wjp5Qn6Ce9hSLyVmyurqJ",
  "key42": "5eDb5yw59Uzx5iSSqKYs9jPZqD8QYjbs9FEkLw5L1gKB2VifESnGQcBv7iXdW2DQjDtVhQyk2ELeNUDYDgKruVyv",
  "key43": "3zvLKhLXFDJG8SckrdDDaXEgyYj9eMf74BmDbf7sQcaBjPudnR872yFopou9P8UZ5myJ2TRRAFrKkodhCNXAm59F",
  "key44": "KCc8GiooizAhdyxQsyjyk834bnmvQTDMifT4w1vB2gj5fRCtcBqXgjjLmA6kcpy7ouD41Npab3uQfw97XRtQ2nc",
  "key45": "Mrq8LjGMSJa6AZ1jkjE9SF5o8DCY77T5xJJPjJdt7dki5dseTAB7aB8GSdrDc7YZF6p6Rkqbfnid9hMkuBLFkQc"
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
