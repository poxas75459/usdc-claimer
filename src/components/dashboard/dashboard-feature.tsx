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
    "2PJ7wVsw7hA2unBPHYvmqmDYZ2sFStpKhc6HC37JzsGgu4bJBsoVRMt9u73pyUFMoX22Eeuzxibg6eGG6LKi1But"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRwPZiEu4UZnbmA5ch619qfrEmxQzMniAQpMGW7crHwWNVRWjnQK7BBp3ogSXT8mRZkEPhnWWWm7e9y2fCubVAZ",
  "key1": "5D3ANoqLzapmgVyPzsbhZxo1FQfqcAG5vP3p3Rs5ZXYdCE2KoStrjZhpsTAqRxfK12igMJ6Mk2GVSBPGHEC9BP5k",
  "key2": "nKLCqcAeb3eySo6Fi63oEGdNvvevY74Z1ngoobTwZGMG1WgY8byn7SBXDumrAyzQ8vWpUFGP5zBBCDEFSWxpjeS",
  "key3": "5DXYQbipbWPkFjJ6GqhAeo5eNLC6EqVqDkJoVrzJQ3TksRDGWpRdRqo2FqhRSwFkATymHMYUS2kYFZtoDnU8DbhU",
  "key4": "4FUiXnDfWBy6hyv5x5GCKnd8M3AumZs6tqMj4RJisZyR3ypfUPhJr849h7ZwrxkbZzwcDvdGJ4dsGyZWJEqhqE2h",
  "key5": "6dAx9pRwTHYS6HTEVZwZzGDWphneeWoVdxPHyHe8g4HP91VTCvNTCyUzAyBvoZSD7WhHo3MFw3qTd2AUDtjEJWS",
  "key6": "3aamVRqUpX7K4YpUGUJRiAVmzBv2Vsoeh41JseDmA6SKzvQbXcoEG7XCfP1H5ZKo1edXpXp2K31MVo2kd6o2KJAV",
  "key7": "4FMXYLxe7gsGKBUz9XcBuPAw5wJjhocu3yJJbnhao62Ai9pHRtj5YVqx9QGSUR56zZYtFujRyE7dg4cMYExNyyKN",
  "key8": "4RVEBEB5NC2DGjEgSn3a1QucbrKwam9odB4KBdhmENfKeov6mmonpkzKUj579EAhAY27hMdrGgNzQuP4v5pm5MVV",
  "key9": "kQH5DzyAdB95XMbTeUr4VVMr4e19YmLMHztAzhJovn222Ttnp3twRPnXNeyXJrmrg8SCEkt5DC7aqe7GosGu3tm",
  "key10": "2jmxMZRiXEs5P9SngZVRnHdsPteCkpcfisdcD3zq3VnGsep6eVnoVLyYUrtWZZgo2Ax1qHmrP7xMfu1CVToey5QM",
  "key11": "63p84eETuS7XMLox11sUaqwk6PtaWQzsia3YjetoSoUNSRY6eRpfd3BREZTXjQcNG3JvSXDLE1hEoLKyF3bSWx5m",
  "key12": "cyfN31Z9xDzB2FVnTxfQpKTUveEQtPWNMcinh8DT3HHKi1GnjLyq1wKf1m4D5aXRMUJGnYs1Z77rQzwym7WNdZk",
  "key13": "jdB26mJAqFV9PQPHrWfFAn4WB7mKwQAsM2bBtQX1zEAi5zZPeBjHZhmebWuQ7eHMo429PV1gJGqqZnRL88rRJgP",
  "key14": "sraaDgWBtR2uMZPupWnyEF4eFS37MefMhxjoRjtGLF5CdWMgdD7eSuGxp6XMEhyzAju8xJzb76mXgaXgjdf2KUX",
  "key15": "3D55eiG9yduVpetn5ca1z7NTfqxafsKprzHfTJPtBbE1D4YJjhurydc3zSc7wbyUr1s4J8gL9VsuBEnsj5iuXYkm",
  "key16": "3DKNQg4UknsZAQYkKmnADXJaqi13uQGEEpWLvTTvY1DrGWRGPRPQ9TaCBaWDzaaock8edM2TK6AkY7bH6JkTLBai",
  "key17": "5zRctpRGUdeKtNN2mZWZRqxt7pYdaCwY3FeVBajRHz75Go9yWygwwX3kid3iKeMD4u5hcTkgZucJUUsMXd9ibm6A",
  "key18": "3441ULh6PJrQDC1SszhXcKYYfRUaFaLx61SAPTa1Ucpm8B99Wp4qbaHqV85pToJgqnxAC6rDHertBxtG36hR1Hg2",
  "key19": "5o4g9gnw9bQnRF4j3objvoSHrkvkSKnVBoX4YQpZ5Ybxsc7JSwzrjzK3RSBGHXFowxPvR7iXuYmLBCbnnj8L5qHM",
  "key20": "3RzpwmJ4wrQU5KG7Uyheke4NVE6S1zwebnZcjaA6VHDoT3HmVNDkeem8pi1b821iw9Vbu3ookG6NURuGzY19uS3R",
  "key21": "48MDaFzfEVXgmmJGMaoMfpdvLasvG5stAaLoYj5u2QoHjmWSffHmZfsStik2Kga6nhEke2PJi85FM5QPvyVJTWHK",
  "key22": "5XdSAFinbFjCtB9mUeSYvAv5NvkLSLZHt8toM9khtyM5FL9hNDwUCTT39xvGDmWKDZHE9VuVSGDYUkzoXdmLKmTo",
  "key23": "4qKqHC1euqPrV3XPFFuQr1jQmWnocdxL5q5qxLKiJoawvgosGzTbfGsoXmMB3SCtNbzgGC5d8vAvQYFt8CTj2dj",
  "key24": "2Grr8KiEG1TYMXyyV83u7AXdferQSEwQ39XexZCvcW5eFW3Wg1kKY6MTvz8PJsNLMVc12iaQV4JG7x5VmyZTS6fs",
  "key25": "3iUQpJbLcVma9K1qfg29JSoZVTTPVpjdSWUH7qgKLL4LHLXAVHcAoJTCXNXds79Jv5Ydi3dma1ugNyupum3a4R8H",
  "key26": "ofqH1tnwsRQsqEDz373V9YyHhcUcREkSBbpob4NsTMw6bKJ1gujLQyw2iY3NoXgJjiqi86BnvcA1XJXhKS8zPv2",
  "key27": "4hJW9LjkKGS1NmQV5H73qfpoF9DZSCfzmf8BZ4VCeWEm4vzRxSUMDd4wz3MYhQHieoFuA8cCVXYi8mQDxsVPbat4",
  "key28": "3Y5WwrvcEZmMHPywbv1Xc2XPr8omMYPu2RwPm32XdrRMLvq57jrvNEty8TpHNkz2aBdmbPrh12VrLJUJgfH4pwpN",
  "key29": "4b5YJoZ8PGgmG2hz5EinR9rrEkzg6m3qGWtcUmdDCmAUBUy9Bwq7mzpYibtjgkByhhJeM2kVvE7qLzfDELgvFKBF",
  "key30": "5B3w5EHjTihdRaQgzvRzuDaEMaovH99yjrmEBtyn9ETmvQg7Sa5zLRbbZ3r7AibhCRPeYivKZqVDxd436QV2bpi3",
  "key31": "4YeWn9szd1ADb9ibJr9wDVRZLaF6aEsw1e9QFSu6RxoM1ysvo2ij3Y9DojzkZWZSjKEPfDKXJihSUc9S26ZePXNW",
  "key32": "exJDeWRHDukLtwagAurDVYqZuueXdyJ78qx4JjYVxzVCTSS43iHi8efUsLwv2hjzM2N4NjdDDpWuS8QUaYtHocA",
  "key33": "2sjP3URPqYrBA5VQkBBqiKT77q3VRUDi6MpNdsvCegCX4UVaUPtssrbdsu2vJo2rZbELBbxnzcrgk7x3ozLW5vXE",
  "key34": "51bNk6gxiPGHziByYCVhqgabxX23hroAMM7rQnTiQmJ1wFnxmML1EVM3U1NatN2M4w2XK4JFejaa4u8fSmRA3NoG",
  "key35": "3fCzjn1XWYF3zW4guyLce9Z5KBCk6MvR9Lmbr4FSXDzrftGmVvMApM6cMQUvVuicZvjnwRWu6uKPXQMGWnN8n7kz",
  "key36": "42w6PscUdLFdsXdTCUacZX8zBfMXMs3Sf3tFg9T7Fv5uxnds3h8Uodrmx7njxgxNcBvm7wZdiY8Wxi4FvQCGxyu9",
  "key37": "2BySH2L9H31eUrq6oBfayaGzN2BDoNvKY8gnqQ4jDDEdcvEjxLLVpYCxwfBpDosY3cNp13PXfGggm7sMG3GENXzm",
  "key38": "5wif7G1d4KZXR1SNN8xPCFvou58ec7SVwczmZs3UhvRL1rGwVGikhHUtN4BbvbJ1BhZZJMK9Tod6zHJ72c7m8EPF",
  "key39": "63stZX3WpBa4yLy9Uf2x68hqwNszQefkkzUNyKNTYdpAqAbUtS74FuUZGQTuCApRHChrifU9cuaXR1j4CXr4rAyz",
  "key40": "3dGktEfDjLqhcvTsfXfQuzPmSdpuZttAXB4vi3mZZjU7VjUVAbKiQ3HozmzZdBEf1EhCbh1f7jHLLSMmKAmbQdqL",
  "key41": "5uraxk16HfQTPuNf8rXZNJcry6QufS7pJBU4ivb58daEbE6qvetLsUaAXti2zYfHWLCcqg1rdPEuEpu3iifFGF3G"
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
