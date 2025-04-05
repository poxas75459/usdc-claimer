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
    "3AtTCeSysUcnzynFtYBa3bskRJFpRmeNpki4wSHZeu7eYKQuvUViWXGEXVfk8dF8fkMdr4Z7m3pkGXwNaqNwp4Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C95tb3BqfXqV12zAgnwT8HeqdQp4WoxCsuwTFGDw7Jc2G21TKKKvL8hd6MhuvmHsYtjyseVQLQHLCKsUgnEbDCa",
  "key1": "5iSBcoSSwfWQoPG7Sg9Uu9JDfsNwnUrf5wQ5fEX8f1EexPXwotESQ9kJcCFViK1jwFtQUf6SDMGWk1DaBAA6Fp92",
  "key2": "3TFh5TU1SsSET86pFrUD37eu1aJhbtNCRQnvMiv2K8ARNKV3h3TBCHA1oWaPzc366AH8zb3gpqwCDf2MGDJzXq4r",
  "key3": "5zT2wPYk6YKzT7xCUvvBbvX5SGzo75BpfcBetupKGLvpEGTx3emP6WgVy5vwp3DNUa7xZbWgvMWfeVxszwzVzgiN",
  "key4": "4Kqtdw435ntnP6w8BxsLZdbymTNXbX8ywxShFCW9ERHNZEpGChH8JVW9ZRxgLvWHyubNyNnw93hsHSraDt3dcS9F",
  "key5": "2yAgrqmBNiV8EKNJPTfnKpV1Eo3j3haHedZdJXxSiQmQLsfxndsYcj4ne5VGNeecCtnvPdAAYeAft75TUyn9wG9y",
  "key6": "2JXKXoU4yzxffkHc4kkxJrF5TcMT6BUj6CHbKbT57jEUZE4DgC9pH1tdnssyg3QNKVK2WrFEwWNEUBeoArKZD2rT",
  "key7": "4FQGWSHxXnMa9nTLmLXXvdFWWiUy6PRuqZYSBZZymrRUGDxDbg21j2AsyKSn8zf1KbWp43gubyP72Shkuq6eyjCw",
  "key8": "3o4DEWU3tUgPMXtHjefhBvHEEQRMixBbMr8zK9jec5dRM9XJTkYmg2h8jpJwVDmk6dG9gzZ7RYUyLp6QEHUqRxi6",
  "key9": "YwMKqYv7MWy4Mw4S1CHJJ5k475WYqrMrbfpawzkZQpzpBzCqz4Y4xNUzirMWRKSPdJ7aMdk9r9nFocJcskA29ta",
  "key10": "5fv6CChHDMNJLgRS9Jf4NeCgJwF5774JKyRkZo3odnAT8HgeszAZEoXdxoMEvQ3AiPE9xbbdPTiMadZLgTYRs5CA",
  "key11": "WLNZ1Uqicwzz4uAY8SMa2CoJv4YupU4zSVry4rA5TkCWMHBE5CQgW4KCHJN2npJ8Um8h1b4zEHYFyGG38qoDQn7",
  "key12": "bUZ5EWpFFbCVkSgRXnvPdkCotD9tNaTibNeiGbT67dTHXoWWMWJB9gUjY7RaHhbyN5qd7Ezq73HH5fMixd5otyG",
  "key13": "45ynU1B2No6RBDiYLsMnQiWFdQqr2dC96vWY2u4G7EReyniv753YEg6Hpn422NxfbvuJ1tGihQUneobkq8JTY8XJ",
  "key14": "5G6eyxw3ycNMapeAvAe9v7sweix9nAczggVoWz5JXxzX2o7CPcW7N7S8c61psGNiPtzfchtsiTagn3TMHxnNmnjj",
  "key15": "63yv3RDMeiJK4XtaErTT76RswoGKHg8QXrvJQXcdW5DngbkweKBScABb2igw5oo3YbpSRnrue7MQvwpbnsSyL8Kz",
  "key16": "2ajEEbC5oFKdSB6cxccJVY8fFui6JUf8LgzBJdczXfp5PrrEGarXPpBAKDGcvQh5rRXdqBD3cfhPXQv1K4ZNNqEZ",
  "key17": "5Vv38oG4WuG9Z9ZQc6qJCYAjJ7UubUTSEtEoDWjMd4egmppSyX9DTn6s4AS35HEnejGN2XxusEc6qf5sJkiSFw6H",
  "key18": "5nNZcySdeymcwW8tFX9to5Q37mBzbtWFK8Ama9N4P9DVzZem1qbT27qFPxvLEihvsqW3uhS2udqGSUdr16noETZX",
  "key19": "2ykq4A7zT62An8XXRwr7oULCC2oKj8DRnxKUr666y8gKa9RFZyroy31cCAnDNwfgeerUbGkWp8GdJULzL2girf37",
  "key20": "5gGp8Pip5B4YNy8J2BW77cBTHEUumwkV7cBpVaiuu8T3P75rkVKWrE3e9QEAeJ9iTRuQVPPmFfznkmAQcqVjaqcp",
  "key21": "3vX6E3YL6vkHbebcvVLbMuUUtu5xg4Yp1fBiWz4MUdnGB7mpAVBxEdvrpxFQu67aHh58PbzUmtAs4owJ1oGtqyEW",
  "key22": "2Jg3oPCYSaTmMub6Zy9q1HLnizinFi9EDabrTaEW3e3RKGVEr8wfaj592Nqm4GMQHR3tE5ND6kkSQLrjXMa2Ubqz",
  "key23": "5jnxRuEiq6NQpt37ctvV5KcJcaQpXUUn11xTGKDfCQW8gmndorJbKGAJWsAuX3ZdssjC9BJHLygkr8WKrWKmqvGg",
  "key24": "268cAiUDaR1J3gmh3fTvYMXRmDmCNDB319RNL51wsReeTRYHv98VgUGCVuwGtGzij7f5tMrHHoEVsqW5q1Dquyyz",
  "key25": "3bb85zKkqgCmpniKBTBcjbKtiy66EFnzjwADviuZkLYw6JNwayA9CsDKRc8oNaXL8UUNqg9ZU1yA4WY6Uwa3B1hD",
  "key26": "2rb82gRdH8pKWLU74uFyHyR7AQx9h5ad7gaRGkPa1gpvYEYL7jZkiEEE8cryAcHeyFcGTDtRT1ZNYpRhHi6UB82c",
  "key27": "3xzbyiBEdJCmDL7zdisyVi3LoJHobCFqfvAT6rcV8TRvraRGLd4oqB889EFZ7LZM8pgmS7regSVba2zCuwXAfKf1",
  "key28": "uAF5ThytKb5mFw3JzJBuEmDn7ckP3sqTXP3FyHe28A9KdZrSvacMxtc1A2sQy94uBEhaR6qwudTNur3MhxaU3AP",
  "key29": "4zRk12qyR95uTp2egdmoeKaPTpeLG9p2EqWxs5qo2eXPydBvozxDbWYKxLDi73ss7RSx1M5Ay8GNw97KPu6cFyvL",
  "key30": "3fQwZamfogfzcxeQRzPaSGahnvFU462jS9URiiMesWxpmbj5P1pUwua986AktewyqQq7qfsLL6Zht4Vz3EEZYgQF",
  "key31": "WFex2GWHeU4aqdjTtFep2oUyDDAxFfgsrTz9u46GVFU1BrDDCfeBcdW8M8FgAWESCT1bPaQAmsXJS6LLuocgX2s",
  "key32": "3uW9WXtzNV6gSnY44pZMsngk9QjzvF72GeYDmYEXrQ37YwKrGJY33euww1Fht9P14uy47WPF6Gh89YN4ZPRiDUw1",
  "key33": "4wGuD8P4UmsL6RTfzrMfpKB3Nrc3ubNZogPNPMSiizmsBGzZGfUf1zFd9sAxUYgSCYdbF3L7edqCRdPjNqDkLQQb",
  "key34": "3JVbYtjy4f98VEwePey6oCfwvK9vfC9L97ECSjvaiDn6YLzvTyfacoUdxfkWDkQUJ3TPNgPEwNjyaqSnAMtddu73",
  "key35": "3K3Xj58afVjpbmDnoi71zztPkUxXA4LPfzdfvEMDaNqX7r3ygHwSMM74ngAAp2Zki1x2JfDCsEQBi4aXrQwuAB2X",
  "key36": "5hHc1qWYdHA6xzaUP7Ru3RzEr2QuYNRuE39fHZhKRUTbgCxiVsiv4mS1Nk8sBEvAxmFrPRgHQUEM2pRheefSHtw2",
  "key37": "54AKcLpcAsQQfRzzunGB57cZ1E9ergG2W7hGq7QKwxKbaBmh4WJwW9WB7FX4a8YAmSqu6CCjpkay3yqCnwoAqAh9",
  "key38": "35drZe6UyrAJ6BUUkgKmZz7Sw9TdeNjPyW1Ljtqp48A1R6CcwQZdYqnuaJs5M6kWR8c6Vrh4H6LcNfLJr7P8jBpu",
  "key39": "65S7odFz7KvyEMdbJdzMMD79HaRPfw4tMcdo1fu58GTMAFj1qxNPH1M17U2DvgiQSz7NwLkqmybbXKYrCVsXFzct",
  "key40": "g8n5amDHJEXachhAqWzNvruX3n9ya9ttESjUSgTNkRPut1eTSc98kq1114quZ2X3s78uKSc1CkZVbYJxVi2QqY5",
  "key41": "2c29HZYaGiHEzS9yksh5VoHSWFUgu2Lz8U1bmMF24zvkX327PbqLduwBZ2Jzb4GB5HjGu8XWZxWEVjR9sno4VqzS",
  "key42": "3cURj6SWfPUQnJrmiq8pU8H7ZKnQCDJiyxPagxRnpcWpEwak8bi3ioKDbJQFnwtWkqwkoRsbcZcpQ9whDR2ju4bw",
  "key43": "2y3w5myyJmsn3QytJBRefC91CNfUaGX3aXvJxk5Pp79bV61zyLQ54TnHL1zhPQA8X2WhpZs2JVzKMSap8WSydM73",
  "key44": "uEP4TvLmgkj1o5ZboWYStLSJ9FLHqLZeZ9RDUhpc2PSbPSXkBpHFeUqRFSJueQmAgiTQroJBswkanGXLBXSoG6c"
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
