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
    "3Vh159bv8JoKoVVWcR4n3WuUGPfjCNEVNtQ1Qx8fUtNgmc7Wa7nMHgNKCJWuqnJcviTx4TG9LEap3ktKyRGnrSb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mj3iWSLi6MhnhYe8XjbtSr5sF8QfqT8XSF6dvapFxRH83LYToykG1qq5mgNymqTbXCNhnRYCvKK9NpV7sXLdKMk",
  "key1": "2ADoVdaJNXoKCgG7MLGdhqGJtwMMMzTkuBqLcfyAzFy3R8tMPnKUkLMGJcBc4XoXBXgS64YC74zwv57CHK2bB7fW",
  "key2": "2BNzE7xANTr2rGUaTywX4s5dBDfBoz8rt2qpNyqGRDai4EGtSKzqLEs9U2wjaT3i4TmAUCPqmKJBtyobpAhiWqX6",
  "key3": "5ANJef6V7UDw5D2XuEkWNSgyK6GvNyGcNMkBE1hHL7gVm8uXvNbEPTW3F8KA1KQCYLUHWhuPMzfAjMHmuXPmd2kC",
  "key4": "59yMWtHtrZWmqahrLbxN5EHcsxXw7opu4CQUov1FiNVwjGcd6FcUAhqTHp2j9AvkPqoBGLkVgbFapUUNNYfp8J1J",
  "key5": "3Uc7CoX7TcdvEEJSo829d94NnyDeUSkNVEszTJABRzyCRUXXFefdVtmqeMZhuMZej9g2b47wyfAPd8EmVcY6uBN3",
  "key6": "2Jimc7VXbMtPosuM2KkGS2s5paGFa8TvyZVWKrMchr7FXobfmnDwmqoQwX87x7XBaGRjZRTqTr7ZaUV3p276Y4GQ",
  "key7": "5EWDSxLGDBaXen323nxjw2KYQHhEpSftqpSLpMU33y95nAZLoTYrSrBw4TfW6LpctKDLLjgtPyv5AVBJDnAqGhcX",
  "key8": "3sZ2WGUXVET7oRPu2bPJSsoAViFShbiMoAYmdBb4onhaz8Em1XK2Pm3tza2qXQ5rEA4DbMCKJjmGxa5QptjHmZF",
  "key9": "L2desxo3mFfjJvXMDsrF97g9zsxMz4hMPojqvHFUSGvA2hNmWPgnNzo4yUHDLKt37hmJVFVESJpfnLLGT5MiUAa",
  "key10": "63cAH5FDeRqZXfhUr3tkBofLEKoVRQTUfgYD2LTUYKmt4tWRvo8NzxZV7JQJYXqvExEsSpHs89ZWFETdzw7JN2c2",
  "key11": "2hBabBumjnQgJw3VMsfNDoTnsZpoxj6FyqWfp8a6YbHNSoJWCDUiq9fQEfZKob6akt42zWZsuS1uvyZqXV7Bm8iB",
  "key12": "4uVjXU93qsJhRGbr6NyjAhxaekqHektZ8QkDM6Vkm65NSAKUdy8deZcKbqXRFGGLdqfzwr6FNY9HteuGxP8RHLFh",
  "key13": "1jnfvx2ArtS41jWfW2jeRpcTtDntj2xHvjxdY7hQGMiaiMgBuWMVRcfJxbKaH1PYpqux7KuaR4FRoDNCnDmTLZf",
  "key14": "2uoKrHppPAY9YHmmr1NPf4vhXTLgpTfeVrjmk7kdwyd5B6H42enrerKFhWjmJdu9SJD9yfHAoKqHCGyutV7iBGV6",
  "key15": "NFkHapXsnr44YjFzxStEpEPPsn9a4khY6UGB2Unoonz6fcU1rr9Hz81EpDyHzhTb4Vy5NeDxGkXGP6a9UyowZEv",
  "key16": "2TYfBJJ1KbHsJ74UEc1FnQtUwnstuyP6K1TWnA7dvt2jSCkxQuE7AkL9sZ2v5iW28F4KxTXTjDeZRpjK2vfGbucW",
  "key17": "5wn1R5qbACmanViGcA6Kfq28kpYhPXwc5ipwmC4jyJt7djXEbd3yWsuq6VNUT4qpoMi1hfLN8P2Pnp8RmXpZA1sq",
  "key18": "2tr2yNEBT9dQmHCcAqdc11QBCjx7yGhnAQLar2TdV3iLYdK2J3PqMxQhmR6DdQyCtM6pj9ydn2FKZ7w5ySWjnwsb",
  "key19": "4Vtu5TkaPd8xybYRd9T6KDmhXvK1UFvKZuv2QUb4RXDqEJpa3e91czwiuZFeXW3jCQoJnwi8e6yMsyka7dF2twTD",
  "key20": "5ZmZzak3wmTaZ3ynYG4WK6rqFvna4vayPNoHbGz2UwQ1GVGA3E2bdEN3afwX3kSqbfvsKnLKdSmMxeaeapuhedaf",
  "key21": "24L56Dqh5yK6XkreUWdnvQ3MjrC5rMcMipLmuW1LozwukXGNzvrQDV9hvNwhLiY5NYCstoEqsHtxdDguR9bqzMnK",
  "key22": "GQbnoHXZYFMUT2uyjFXsDroUH4mkrwu6KiQbv8XDBQ69XiHy7Eh6wT3FFrMarn6rkUqEKPJw9jsXoGwAnLfqgNk",
  "key23": "5yFHsmWd1ZkGMp1p7wqA4ERVHt2AURo7ZnWfFPQnk9FsShRbgCHtpGtXAUba6dWzEovCiuDmYMwEogTaT3auz1Z1",
  "key24": "5bxvmFnrbqT58S2EXtxnifHt3HX9WFnWGHViAxYaYSCkZRhx4LShWaB9583V44Yj1yK1AKTZXAfpocY9RkH1Ys7",
  "key25": "ThsQcUmUkqQbfgokmr3ZyvABk7ZLPXyWPMBxPd38RErVpAu7GrkEcU6oFK9aaew1UJmrYNgkA9iwXi7Spgr2Nd4",
  "key26": "661SL6m3Ry9mcyJxUhShP2NUKWEMZvVgX2GELcte2eKBDicRvTbtZJHnyoAgkY6Gu23BH37irjWvy9hHNKpAnryV",
  "key27": "4SctU38cvTaha1qeNS769uiWfk4RoCWLJsrrRcU3F6yVv1d9zbebLWSCkyHnLTNRL5U943UguK3GYqXhiHZmwpSB",
  "key28": "56GrRf68f6eLNLEoNfEGV1w1o38BQ79e3wJupuBSeY46Zi4XUNB5JbbGjbrJYhLnZeVuBb2A7X37r7Dqbziysf7E",
  "key29": "xwtquLneC15rfXjFg7wxsadMchuLUnvWukZi9acCRzuRFhNJDdV2qsduVATBe7K5MTnwGUEs59F8UMKdTMiBiVA",
  "key30": "4CowQz4TwUd2LwGAjb36PAv9qrKecVUWuDDjGfQshGYNGtnZAMtUWQN17eNRAWdBTrhxmLEggPxYGystPMap8Gcs",
  "key31": "4gBFa22jiTKyXLHhfeixxDxzaTYNbhy57Ko8cXTvfsATwEqciGjo2JLXeHGvL4D1HoPNPDzowBEWiisRKou7bG75",
  "key32": "3PotvAFswySQSBVxJf1fiFT662XU8efV18ft4wgTHLzjv3UaKqMkphLiy5fQhyXLf8N7JLArMgSNB34Z1ChostmK",
  "key33": "3snsJUtJRjR7NoL5qy7R9qCAoZWfXYXTAsu1KvqajGZC5dLKLcdKxNv4APycJUySeq11KFZMGzpShau8bHjuKp4A",
  "key34": "4CJ1LSrBYBT6UaA2JBj7yueKhKX6FvEnbQbKmsHVadVpEcSDP9Eio3oA3wPAmK9ReN9XThaHTt5g6okfwjCMjF1c"
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
