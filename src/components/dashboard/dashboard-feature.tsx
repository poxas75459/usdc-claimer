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
    "5S9Pni1BwAiuvTdBMdoaNgT7BD6y8SSDZ3HZgBktiJjH6H3naTmG3Km5HxGDozvmUBEQbCuRPDQ5fz2p4xx8jdqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptyW9mE9euEY5XHJo8vMTaZ6mQWmfZHPGbJ4Cwqz72AgwPREfcTdhGdTZaSoHGTxTs9AMBXzCdkTycdUZ8qAWVC",
  "key1": "2ySzoy66fJqdeSyj1WW6Zn9iCuZoiHeR8GSN2u4W8YWHvrJ61xjZEHvdzjB2YpJhTiwd74ZXgH3r8WbASkfZxCD1",
  "key2": "dSV2CXT4XF1WYVT4Tc8nqLp8aVJGaVELHAb3hXdy2dvXHrqWwVTVzCzUwWzjoAN1eS6AzgpjxtwrknrY89CCEWB",
  "key3": "5MxsN8F9j3Vqxc2yd9RvAyq8mzfVmrr1dABETrLCygSMw9kDbPyX5348AXPA3VnRcBxcCB56984dyNdmZLZcbMKE",
  "key4": "4RCSE9zzmd8HeiGtNnyJo1dMJwXvVr3xoTB8HimsxViNhHfGNS8xRHZtFUVejdGwjHYhx5VfHufb4HdwZk7ZWTof",
  "key5": "2oBU5ds2Y78epfZER4wFcy3HsVMTa3Pxycbu7AzwCxokDJTBJPhhv66Yxy3Zuu9w44zeawecX38asFLpabVCCjRf",
  "key6": "xyVUb2ApLswXbLJ5YVMZb22jhKAx26tLtZr6BsbpMHXgA9QYDXqHYTMaUZgpV9zGLyXUkqe2nCUYT6CScB3BVrt",
  "key7": "yu1yxpUwYaHokxCJA4wpYurFfUV7N6Bji9pujdT6dvmNmPtmsw3ncWZEj5s8kKP4bgxAYfMkeqYRUQhKe7624W1",
  "key8": "3R9AEx8sLBXTdCadmheHZJEpbLuqkVAcq1nNuJ561NmcSVX9fWy878f4wwGHvPjEed9vUsCzMBaiFmtrAyVjiv5H",
  "key9": "2TLzPhzmfzyH7A566ABJ37AnhyWwgf7qxBqmHePSva5rcLTQ7QfJDJCVSnM1hMoDLmUJkYDj3dqjvsLQBpwb8BoS",
  "key10": "4eyFfjDiVaGCgsQoXwFrqGhbX1nF6DviM2ZACTbCMQ6XTmq7DcgmFFoNoVVk7ERj7X4HV6erLD8tBMU8asPQauRm",
  "key11": "3ifxyK1apKhyU6gdEfZz7DTLdYy2c5G7kqmNxiQSg6PQqndV5FdUM5aBiF8K667RuYFEoaywgRmu21xehNwyJLG3",
  "key12": "5xDL33gk6M7kzW1JF2JqJM4unFuv3A2oiJScpDKEZjW8WVvnWBGaGrhWEiXTjbBYAbqqFTcm2VkNBqEG9DF6pk2f",
  "key13": "3ieUrwMKS6KF3R6Lryz4PuaKBhxq5dY5kjGZmRPdwn6dwYyKqhdBHnBziaLV58nzXQvQX6xKbphx8dw9gm12bfsF",
  "key14": "4CmKSp2ZfcZtu1udqGr6YT31Jw9MDXUBzZwwLWGGwuQLYGgimUUao8XPQfeXdkRejqHSgMpZeGcmZGru16Jz8c7E",
  "key15": "3yX2yo7bNetAFDe3ULhKEtToUzze23rxoRDdP6HizLKbFWCVtEsnSSbTy5h6nNwA3rtsB5ukM9Nf1JFq7FSkhYCr",
  "key16": "2xhQvQooXoe2NzpBsmBdGSAQKUzVp85V6ppGnfmbmAdMTuXQfhS3YefvRuJj61oHqSauyxhPfMdGgemVbM4p746F",
  "key17": "2ghDWacEDSVhZMMXGWbdSbZ2L9SRQaHZwUvmTWiJ2jYtfnexReBNEyN5FMhGEKjaXY8GGRtaR97nLxrx94guXJxe",
  "key18": "2t7v62sydau9boUq3YkHUpaCdNBugtcTAJxgHfnaTEaqYmvWpGMWf3z4wzXQTWgvWGWdfQsnzRfcYwFowQcRzyDW",
  "key19": "6uAKmKpHkYgj8CACUi6Q1pdtnR3FnNE2GgtEjffZHArAK4u8QnS45a6jiKRQmVU7Bmr5TLNvMFWGAnUkru5d3Ss",
  "key20": "3hdULe11rN47Q7KBZrxqRkUYSG3tjo9bqdtkYhueNgEi1EQRRPst1capkQe8xS8ZqumodzMHM8NHkyQocYEzbayM",
  "key21": "3d46dZ6oAbAEm6nDSqNU28t4A9LTXP7Dz3gXU8YoLRGNsFkzqP3Npx8kNMD4vwXmtwpqhJsCg3gDP7tbGwsiizaZ",
  "key22": "48533XijNrBGg5bCcwfjUEdE2Kv2BSYb5X2V7rzVUemf8wM1rw9QGfj6WphR8JxKDrq69pbXtHW9pBAxPR6ggnMB",
  "key23": "49RYZcyGDUpcfptqC5m9Ck9SMKA161beNarBpnx3ob2s5BUT87eLQ1YD1fcA4y5t8NeuFhKNHcL34RzCbPe7LfCN",
  "key24": "oWfdvTrR18sbs8RBijFToBKTxhUn63aZskybbhXwDrLy2LY1Zxecz5bTqJTveZNrRKY7vHr9JBhTo3URUVFuz4W",
  "key25": "2nWjcK2qP7pdM1mhm7i8UBvDu7t7Kji6RZnBNCvUuejNoV1yoP1Lv9tYxFBPzfaAJ14Cime5AqfSVcShh1DqYHM7",
  "key26": "5REv8ujiHStuQXKhvC5LmANbhxG7GzYLqJn76Hq7SnL6pPAXiuk61MpvnohVMuseoCrVBhUJpeXbbRjh5qa9KVpZ",
  "key27": "58EKTt8CuqhZTRzTx2KztRepMYKK15kBtiKYPtnFGXAiGzGKbkPW9K8yRhUK4jEidF6E22beNrm1eQ6xbFAoJeSS",
  "key28": "3rDtV385BiWLN3H2xcqPsAb8oYXMoJsyd78qYkzjo4Xw7mpWz9LXRpCqRHt7B6T9CZUXgUHWyopRXU7X5jybebix",
  "key29": "4m6qwNuH2NQb2UbkrQu4xPFaYbsMrekBr9oZbjaLBW98RYmshfD96Xb7oiAB2whSFc4MSJPhfd8ytbQ4Qd6BhEWt",
  "key30": "224jDY5XNd4rgVYWgphxrB1Nja8Rq9U2NYxJSd6easnjJ93akkaHauHerdCJqw6crTWh4ELTYVBo781wuv2YTFAV",
  "key31": "rgFXiJXufAoNWyiWfLZq691scgi7oG44upeHwxPP6VaFAdjdUdtWbE7Tqp1ws7RbirPAYQBk414jaGu5q6kEVtf",
  "key32": "4VzbFB7JnwEvGJhETjLHeQ2sfiMwnwKbUeR3wKbqbvyp3B5BvTY4pyR1WtkZAwKa875VBGmEzdogZBT3M3SYx2ck",
  "key33": "DXCEjjzeX46aafs9M9gnKgxnHT8mhce53cjUsDwP3rQ7re2RU2wvFhZrbzJ1VGcSmTuNgZzEmDygXgqaqQCXpCm",
  "key34": "5KtVxiNgkqZeZwgxZok15fDGK8unS2gFLkpapmHjP4wx94QpMMg48pp9EVwUkRuddknoKXYnM3KEsKxupzdGNhxs"
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
