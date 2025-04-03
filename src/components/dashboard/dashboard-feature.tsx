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
    "g4MK5NNjb3MMBx2FFv2KQnHJCPxmJxcY8R3sFQ2DJ8TR7j8qf2TCi8VJJ9pXxxnBwwSWQzD34ZkV5NLtJ4Lz3nW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfU6VRzuZK3yMt26kDcNFdiwhD9DrHu1Kv4ncKyWPXeTsQNSotok5TaUjtTnvYeQbv3ERk9yGC3DRGansFQucN2",
  "key1": "4sidtq1ezmUMuWuThbsUrfE13oEtCP5tFoZxKYx29HybdUK9mxTW7d69VjMkvRY8uYdqRK5gRkPJ4gu9GT7DT5Wn",
  "key2": "23dCa98RcgQoZKZw463GKDSCx26sBVPKdd7QZCjxiNcVbQths7NWFYYarsTRkEBJuDBpxyqCkfhcwpr1vqrxsW9x",
  "key3": "DphDfLDhTtAKsKVZwytHT64ykonYZwVyYkSNamBWkMPQV5f2Nhqmp2KnQe7ftQXy2oyDytoBhyA2kbTYoWGQJxm",
  "key4": "4PRPwxXUADwa1wdDRBrFFPfzs6iKg9T26Hfonq9f1uAcHS3j5DR1J7qUNurNqDDBvSUhv5Ef36fYHgcM8kJbATJx",
  "key5": "4cnCt2RniDh8V52J112CR4LDXveW8EMd54xnUopkb9bfCYghaNfpJSwBX5e9v8ceb2ZBtpGvNWfQ4cp7vqn3bYSJ",
  "key6": "64QrrS2BUf9Q4oqFoAth8y6RbgPJ3aT8t8NDRfGcpTcUHB67dZSUAG3QwSwxgKjZDcraD5zYwZM4NzhE2pNPEM3w",
  "key7": "4Ut8fzkyFTuvn9oMoJF6f1CctqT6TUweDpWCqYVDTqUTXcZts62BDPzGWeHsyW2rEEMAboQQMuCSJwbRVJWoXwkR",
  "key8": "Gf6S4YEJCckKniHkJ6U9qVfxU6q1bvuDVYmkHnvsCF8UZsbTGmHbgKXwn3ruaFhueUcnNqCPsjmRsQBJvuAatz9",
  "key9": "25CfKhsSARukA74YJCtgdgtbn4zF42BY3MASpLbgNyAi4DpJnRwHR2CgbVanV6GN7ruutmvWwNaT1pGwokN9cLPD",
  "key10": "4tf3yBPY9WgTyK5TVQu3NAU4Q1mYhkthdNoJvvrVVfcso9y5mGVvjVhf3LxdbSKEgFFeeYm56Sn5RyJQ8bSgUCFS",
  "key11": "4LLzkdUPbiBcwwtsk8of7oDfyXGGW7SZmCtyyv4kcgenU4atsfx6wm5w58vh4keYcuXY8Qeikve4FqoyekXU2fqM",
  "key12": "UGiNXVTpHSrpz4Q113DGuVGPETppFRYvZj1y4GLZM3ZciYwfAuLfxG1HjV1UFEY2zcTHyQBhVqyxBNkWXjdggAZ",
  "key13": "2ggXNMNYVTgWXsiKUpY5wVx4BLDDkVYQ79s8RhraXorqB9Dtujh9sphHuJrj69mh2W7Nsn5tAsE2biMqNzHFibt5",
  "key14": "3AxpHb3LpbPcvMNrQbQzYJ1PByTBQBadUg2ZP8oBHwbCSeeo8vs3CWyyRoQcwyPFoPATG3y1Zv4z9b4mmvvohu2Y",
  "key15": "2BGvPLAWHX3kU2Y1vqdyTtgEhu1rA5w6t3eHuk7VkQZYDTmGbmGjsV4KL544JdQcTScwMVm2y8bfZ9a5vGkK5vvK",
  "key16": "3kmmHNwvyBL6tSH86aBQzPFDmjvvxR5rr84aoyB3jrkKtWDqXA8qLVDzoW19sGoL8m8NTis9uKRDZ3tBDYpvAfW8",
  "key17": "3h6gLCSTSsFWWDJzUdK5xogXis76F6fE8jY1tCGPdBVF48Ci2NQsCfXf8Pi57ChgxeVHaJtgkCTnLEnudova5d5L",
  "key18": "mEg1i8ZVqUzBLepmQosk5hUFpQgRPuKw94HH39hV5GSMMM4VokUNgEXU9j9XH3GEEpsmu2S1xsSLCHcUXvZ1av7",
  "key19": "5X5NxrRwUZRaSwjcbAASbomppsJd4VSf4rtW91og9fwi33rcPqmU2YZLS1HwimKJLnTFNWesCmoVyU3H7P3np5W7",
  "key20": "GYQ2dbgxmp2cTbakGRSbv4rJinwWnfZ6EZPfteXqMtNmBKQnMZjZNHop5ck7VaEhgabo5fLa8DDXrhYCGvivhgz",
  "key21": "41CRuB9bToQUJUZcHdyJLBng6Uv7L9WwuKJN7Guf6SPwEUEKknkGwyPSDGCVuyYcFBC76oE1xTw34XaDTxgGz5th",
  "key22": "2VDUS5j2xdfiQRJEPApXUPP9etPJgj7PXMCYN4TLEhWt6NKFBwyN1Xw8WNSFkzJ58FejCMX8EmCEJFYrf1evqBPn",
  "key23": "2HY5oMDxW41A7fBqmbnPie2QMfcAHgFETVdRe48Qj61Quv3AYDnyM4GiqEjENke7xmgeaDWG6YCjCeSkvdF8Yt5q",
  "key24": "5bYfRoufGdwZmEAkHX76PLy8GC8YzwAcVrzXTM4cbap5QNDt49wn2KcPBsdN6hQTReqJ5tNdb5m1REhPKutgsXgk",
  "key25": "QLQt7G42zu9VVBSNVyTXNn14wQwfHZijVVjVBvStz3rxaQKFQkgPjwmrE9afo2AEmxH7wkW73iDWLRAAUPu1cNo",
  "key26": "5G1Kb23vprfAc4DP2v9emBWRMi1frGFKZtWsC2sZdxxaz4ft5vCtsKhkxoCA8pn7mvauVaidcGuNqgYRgJoRfm6P",
  "key27": "47jeLbJxKWYe2WVxVHiAnLSkEXbgLdwJkAR1wsgkf94TXqvy8ersMhi4CkFS8553HsLUTSiVcPWwNbuHNudDpcKD",
  "key28": "5CTxZr892sHXGUXnQv8sdXzXKkgbaziGmRxZwFyNQCVBpgfz87SDkTTyxvrfoLjMD2ma9mBmqqrXTHEsL62ZunCq",
  "key29": "2PpQHN8ALtXGk59hSqL6aRoFdd6dL7fBYay3kucREuyTbSXF4DyMsCzRwi6YfMfDumTfQ64yE2kyeG5aKitW5QHn",
  "key30": "4YYUtbsDe9N233FE4nvxFswmWvjYueJTgQjzcJfvpketDKXmaXXYbFqjCKEZygXSceazwUq7epJnMKQmKRHJcvHX",
  "key31": "4NLpnY1MEP677ivbKHLVmQovMtTkD8PsiBcZHs6nT7nbnu43f6AQVg1xoM2rbJXoKspaPAaXgffuBwsjjV4TeuQD",
  "key32": "4hXJZxHVmZ8soW4t88QNzaFHBmsxHv7EJTAxjHDtuiwEfpknBYoTYc45MtT1GeXuPruiBiHVkhp5EwbrjkMLbM5v",
  "key33": "5zjs7rxK2puo937TnAf8q1YQj8YP25BwYUbLhoeSQqsWwGAX6qoNRULKiy8goaPFyHF99E783jFwDQ67xUQdtRf5"
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
