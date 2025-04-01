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
    "4zBHT7Cj4q7vNx6fLG9vLdaAwRNb299AbU8zrToR4s1QFN1suR5JXJVNKJ6PxdRm14gT6u7piE1VNMsC5fzEA953"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTHw2cExZ4p2vgiFRnk6Em2gMxoe2semew8t6KHxWkbxan9KDwJJj8jpfgxKfLHLUsanb94AG4fE1J8h5QbBNrv",
  "key1": "2TiMiKLecaZbykdvC1CzKfEfu4E7FocPDQtqK2uhmP5i4m3Bm2wXMWnbf73iEj1GqRSsNLv1nKBy772ahkD4imqK",
  "key2": "2Cg75RXTw5ViGix3KmL8iXeiXviRMUaizmjHkoDaJRAdP978kC9HQNta7qr6xrm6wb3PJx6PCabUeDMMYdD3yLPx",
  "key3": "EX5RmA8NPE6sAhbkD9U8baUdesinDVzMeSK4vYzxsoykd87WDrpycRF3eMLuE1xYqNL6YqPjgEn6guoJhqAVoJ2",
  "key4": "4Xsc2uFhH1sEYsgxqPAYBT3hMHAL96ftNkQ9VhQjF7imqEdYcQVkyHQucTEKnvsHWw5EHhqx7rTSUCGQDN6hpSDq",
  "key5": "5U78WTqudVip4syfeVHcXbB8LmFwjbNh5QL2ExxHxjxrcNUxZ3zih1jWEYSBBtFK3U1RyofSaSFoQA2yYUgxrbfG",
  "key6": "3Vzq6RiZenG6VkeYKr1GSjEDweH3WypJKpMzS9unHoutcFrbhJas8TsCVi8PdCyhoA6J8bX51NpbuKM9VJSJeFzy",
  "key7": "BpvVCGug7xaV5D2M9hFBvx6Hcf4xFQuXGRpEmpBcxZr441KPQWuDUHz9FiAPjN1Q6HZE4FU9EkKjfp4a3PL5X4W",
  "key8": "4dfi39nJ5aim5nqE3yuUM8ajsmWkW1CJMgPZ2ahMvuQ5LM7ShmpkEvpSfHxJ8qiaPD967Y7V6AR3NhC4qDS97sBp",
  "key9": "ndtYPrSWUyysyW8wp85svM8WejhqA6UvLKQuu4KR8eWLs6nVF79zrntu5zZcC7AzB44BKQWkyR9Acsn5Jcr5tcc",
  "key10": "4tYhCv1f8Sf1zzCK6vRgjUpw4JMMLcKLU4FUdY7rimRKhKNxtN8fu8G7V9BjrvkG5KvMgjsJbFeQWKb73c74m8YD",
  "key11": "35J54cuRapk62dUY31mTbcCgP1qYsctx8mbL3V1AaX9Ff4Fn3qpCRVBhTZesrpsHtqpK3S15vCkUEubPHUxucxyj",
  "key12": "3X8US5Ez9wNFXkruMa5LVAKhq7TAHHvAzMr9Ci6vToD8P8PXRkw5s2eJSZxjrGxYTUtUa5HZPkAKniVTyjaxomuB",
  "key13": "1jZUpgJptThixeMk7rGwJLKGdcTohn74RfdYnsp3tkSJJJbzfwdv3oo82RHbqoYjeGHm9tHxuL7T214CPThyrjw",
  "key14": "2FuqFREaFAwTXQkGinecWahbQR3ZCiLThcnhSMQNrLgmC4RJPMjAvefDTwCPoAi5FAPZyvFLarnL49uk4LaFkYPz",
  "key15": "US7CZo6PKFPCYQPXRs5ceqbCYGDPpR5JMLGbrwWwbAUFXZzkjBJzLiWccWtjLjahhqqsAcF2BHunHDXPFgS7mCM",
  "key16": "2rhKKUfWE7tDVcSEPCKxK7WkBfir1QXa13zijnvNf8pKzt3TYwC79cwyVEQtGMTCjk1EtanTHWQJcBzASTWavtcB",
  "key17": "4igHH7DVMqPtnFwxumdVPt55gLyQKcTbM9xfqGzx9ntg8azCoqwX7F8G8pakM6Pjn1BMrfqkrsrz3dNqmFy7QakD",
  "key18": "3Skx6yx6ZtLjWHheX7VHxWwPNXETTLtTVLMRQ5AmAsL1iMxy2JwLuAhRRZzJ6URU31pjevWvWeWCzg6CxfP6aMft",
  "key19": "3wxZdSRP53J6WuTnEvbk5aGC2ptQFdnYkp7u1ymdNTvZ3YFcTvGEZP2hYcuc8tpSLUdkN5xdZv6YDtqS4KpgeGKz",
  "key20": "48AENmpW6JQQXnRGsSSEjcRSpvRMAE84nP3HUzNbVZE2cnXKPYmfhjJSn1aKWk2kLPzy8eAk42jHr3rB5odK2gVD",
  "key21": "4SzHUWbMtvWNP2ef89ztXHpcsJPEB85b2mesGSCWNKLpHBqXgMwp226yaLUBDobXjyrv22v2fnaynoSPZumBWa3Y",
  "key22": "2g4qthRjuvd5TTyFS9QPAE2SBvAhQiMAzFUEWaovnjCCb9VBWenCFc4FnA2EfwxPq4q4eksUt6xvZfF9zEpnuVR3",
  "key23": "48SNatphzQXg4hFX2YVdBfft9yhZuGH5SRpGuMbdCN4MycgM7v53fAgQoUiEZqJcvuvm3FZwqemNRLfAGJpBSwAf",
  "key24": "4eBcEoBWZ8HNgqAHNqhiBFyDkfzmUFoTPJFhzs7cEipsfjkxKUkeosNpsobme7H2gnTmXT93SP3W4dfzRB7yVJen",
  "key25": "27v4ewubQSLFrZz8BeEv4H4P3T3fhqn2qUeHTFavSqUzbBixS5GrSd87kffm9htqK2fqKK83aCpobLMK3ds9FRUD",
  "key26": "3xi3WFvc3o7R4eZBF3Nr4iVoevszPPasM8kuSBLxCXbr13Piq5YJn7rz37bD773d99NVpdGBHh5yGaBR7YZqnoeP",
  "key27": "2aK5BbMHzwS662FVMUgWSwL7N6U9pHnR1JsaT3q7N5AtsEY1ji17JJhpqUDPhe3FwdroEpfZKB73L5UaDPxUir3w",
  "key28": "3KoSupfqczy7aZJTzST2dRLh9s5EqJjSi1RUdGjGgM3KGsqa1RVNdCtbVcLcni2hynbzTx7NMLE5GxhCMHBgPGCz",
  "key29": "eEjSkyWHGknVcGvqyY7mrPxqy4LEVpbfW1jekLofNVHaJK1vcogsJw2ZuZo56EuEo5ToPQqLzxaWkEEuva9dTuT",
  "key30": "4ivxA17x4ZYww2ijkdx6wUXoLgF4a7Qrn36jw2TpUF3K2FFKVSRwv4wuqV6MbfQpVmqUnThqDobkzHCiPwHv8WF3",
  "key31": "3Bmivri1FucFebuwb3Nr7GCMjrxDGqQf831VHHMPBzYzLe2VRfHTC9ju2zNiCSuPkhKNqepsFz9tYw5f5gQ5JdY8",
  "key32": "4pySzDTagGWtZvW8dxL54AjhGfzHA5UKBYby3XinmvCyh1AvzRNiHZHtBEReoMvCfmP8GWggUaF4LnpMtcT27eu6",
  "key33": "uztcD8gf5aL67dtNPNoymMRJV2RcA79FLzRwAPtnvzgqwiSHpU8ZtuiEYCKdNJkYCjR8DrsmmSdHy9DjsNm16oL",
  "key34": "5PRuJmi9QUsorjEFG5u2oCbiVq5xx9mGkXqKKApWzFWekf3EsJqzzDMJUN9Ha5ZKuGu474aH8GMfbmdZKaTKsmgB",
  "key35": "2RMrgnvruFbBXNpgE1ChHdLGqojd1FgBSyTbNBhX1DM4hxatsW6wCMRVLRZY85jfuye2CfVxKAAkup1EhmSAXgQm",
  "key36": "247fUT2jNVG3uc6syxSDvWry28hzBfPDRXv2yugpRrUqg939XfRETu1G2r523wtJDkA22oKwVnM8W2M3dh8yzsuv",
  "key37": "4ynphphN8vX61kUjgKy1g4PyawSN8nDEGGZNY2tc7JQ7AQRbK8NNyixfpThVNHM95LhvsHczaZ1dxUSP3n28ABN7",
  "key38": "5XAjG8XsvN2MHaBw6gt4xjuh8CpjcQfn6QBN32tKq5zD4zKvKRVP1mW3yoTpwgkr4Nuk3xUPi6oBh3nh1wT8Grym"
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
