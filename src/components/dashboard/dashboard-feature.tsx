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
    "59ZLTyd19zhBzjzuK3EFPHSHQP8Bo2t5ECHzbBwo4oqGk1dM2bZFcVBtWxBwNgLYmdNDrfGjXu3DinKZPEWEDTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54uk7DW5mf6ENHo4XQQ2MqGeHn1qiiivsMiCtnvYA29gayHA8MuaGuhGbvNgVNii3NsMpWBTHYaf3wtnosTbpXUr",
  "key1": "4swjAAzgvUpT71HvJc5Si7jDyFSZy2NzyciLPwwEiatBKQotfpLYZKMaj9cA1m4TZRHEvecCjZhSZ119xLMpwqAT",
  "key2": "4mfW2VaXNzNSzh7r2WoBFip2UTySHVecYxAGS5SwyJzh8Rbe8rpcWn5uJEsMXWogocCpCjB3FmwF47dB1EKKzv6m",
  "key3": "552R6TahZYWtJrvfzAHR4936mxdHuJro2armdbzjmkn4itWvUssaFRThvYvc7NiPU3Tyh5GWFgLWvk8rnJxUTh3D",
  "key4": "4rq7ciGfh4xf8fjGnMLBfxYqh7acegRVee2EfeqUWGYiEnkt4FpdHeZiuA11etX9DSRdah3wzNFKedFFyDnjQzgi",
  "key5": "3BACSPeHLpKkF8181CdZBvCq8oYsM76xwxjuvwhpGBgV56kfG6ZpGihBCKvccq2tKdR93Lc3vajNytePhdZz5gaa",
  "key6": "koFJmAqhwAGhKt81JknwYckdB8VxyCztkuZ3fAf6YragjGWYTp4futfBQnqRqQakLJXNbdxs4BpaptVdxZcrVa4",
  "key7": "4oXxw5tpwVw3eiFS3oW94RsnFiCfJq7VRSnzPR9AxtzQcqtcQ9NdPJu2iNw9JQQuHqVDkgi4aN8Nu6823CBh39zs",
  "key8": "UgJJmb4B56qvjTF8e8JR2qbmz1bNpweiGNMqhj89p8W9zSAj2o715uUueK4KtPHkaW9H3U2FwCnC3PQHtiusZun",
  "key9": "uouMrQPU1gcKvXVVyghBdLWw3waL9ZJxUmtugsPpNKNXqMYw8Wgoo1SRgx55ty1tgB1D2ik1HsMeiXFjjEFgUGQ",
  "key10": "2mGptJShcpr7K71zfyzuiJBxmgEVqsKb1Wbv1JPSziciv87PVgRsH1dxSLWDRgV31kdLtyhpRNepcWdSLQXfKoD7",
  "key11": "LxeRSUghKYuzGqwkyKZEPjEjrCFpPU8UXRdGmgjhMFoy3d2UdwvtXr1xiefqtjhg1HxDnw8sboJy4Mkw5yiMwjP",
  "key12": "2rHb8rFNGa8AoRekxJbYRf7P8wiSLtKmMTUUk2Fid3AfW7hKVEbRQs5HL2KwcjJDKqpvuvZBzSipzdVStLWwkFsJ",
  "key13": "52xLQjWVsKycbXvHKkxVExJJPb3fDL3jrZA8fnBmXhmdJrLQCUkN4FFvxRyLJRfE2H47iTtZxiMCbSyMSXma5DgS",
  "key14": "JnrQ4uLAprMnhd7osh1jooqFMuG3KAGAdn4Upr3qgfQBMKfDpP3mZ6a9U949FnAf1KdaVzXvtd9VVMFhYVPW8gq",
  "key15": "3wsfAc7CCLx4foTe3LmCsxnDefwhryV2rKT4mTFr2fEpQP33N56NFPWbBMfxfjvWwzMbAZv2aEaxySwd6c6sTeCG",
  "key16": "4Pnvv7PMJLeud6MuEHKfgojZJ7xaYjooxGB75mDAxwBjndxURnJtjPbZZCtsy757RG93D4HuigXwXPUrgYuNJega",
  "key17": "3djKXk3ryxkUyWNbwVtJff2DAwVhvWxdN8uQz1WuNGWsQaz9MgqPDP4Xu7va41rRvoGA9RQfdLofAZALpJPZ3ncx",
  "key18": "mB6ZwgkqxZCeiUZCdfsqNw2rQSWjEB4cvHGB5yiLSV3cg5w5ZLNmkCxkVKjiXZy1NZkDkVnrT3EhMWtxH1t3fNC",
  "key19": "RjmaeAjf9JjLF8bXq3ZSY9bGzDEiZF3mMuvqHnWtg95WGGLn8h5C5YoWb1nAozgRSd6qXc2U1A3EMp6UtGedA7b",
  "key20": "5qdvtSMSaKdhZWckYokwsYAPwryHvFjPreJPRW4qzJqeoBF28rh4siF3jhe9bC8YD3cYkDb4R9RQKLSnCvRjsMNr",
  "key21": "3dwhYe1Dn1bJ51C5toceXttWhm9QuDhMhMyzN543kB1ns7e3hz8jyBQJxLxXQZAvA8vUAkzTEJ3HwULo1d6ynefC",
  "key22": "3YRnktFQtB4PX99hTW3txdi8Wz4qSzMPmLLv4LJKTekKjnfkUzJ5m5rG7XzWYabps97bicSkhK7QN1ZSpYABKrYu",
  "key23": "5tFmVG5JW1armCwBy5hTdv922eD29xjr3QAwDKEVLUjHQ6yvLxpjdgiWAsNCkt6U3tttqEkEg2rGAg8XVm2uD2QY",
  "key24": "5VbS7AaRctEfqqMumJjVseisXfyRKQTiFAvu7s367PEGbojSAsyrZJuk83ixoN3ps575fJnvZTGN1o2ChnSTXEb9",
  "key25": "297SuLdj7yCc7cbFiYYE4hyngA92ZvzDPkgCafrx1yRLNwvFLoy9jqvkFr6JcZgC8kYN3gyjqxvvo7rfoWeXcXq4",
  "key26": "peABcbMSEThqdWXwGhARHn2QYcdD9CD1ehff9UrFPiXHAuuqqKvNZGq9QsyFKKRSiZkdvhBe1Zvw2GrvA8BoAhG",
  "key27": "5xdverq7uBnYfpYRuW5w81pUPo4eXnC8PmoYiaEgWb9kMryySHxX9abX7MYzgaW1jzsb2vxbgDuphkViJxWEN13s",
  "key28": "FFZzFHDBfME8iEWkixUmApU48GB4cqzhKVzUDxF8XxJCW19QxuscqiKtUFcRqVNNX7GaNTNBTWaZ5ztXHdAztD9",
  "key29": "24S2kXGrLrT5Xu2gpRNMowSUgJQKbPdaRXnKA8iW3XDMkNQQbwDcke4uRdyFWjWvZDX4ogu7qAvtB5tgrVcMmMqH",
  "key30": "3QbpurvRscisrqx4j7n12tZUnY7cexNfxF7EJGJm5bRj14n3DFqpjwojZVrPaJnDEeu31Efc2pud4idonGRMWV7A",
  "key31": "4z1BwoJGiTRTUimtBgkFxbXj3SVokfibTgBvxn58giwbteZDCuojv5x3JBmbBCBdAE3pnwmDP5c5ZZ2tqPAyRjCj",
  "key32": "oMJ6ZMG9omZArZ7FFDemRHYFov3QG4u25zt12eKJogdaC82n2ceRqWGEQgW7WAYv2AQ4xYxuJUDJaVFxHbgCXCj"
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
