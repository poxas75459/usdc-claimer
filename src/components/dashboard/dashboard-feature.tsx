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
    "ScmGvxRNusy2qVnXSjxwXVrdnbWrzC87zGMJWGre9XNwTrxu4BBkFb1U2mpZEEyAR6vx2JbbgDjFDMY33JnfxF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwGdcAY9udBqYaG6uQSXxDdu3wBJ95ywE19F8gvWndijyLmi93uT8agp2grixioa5XhwKaM5HaQDGenaxsfkn24",
  "key1": "5Ko2FCTPqg63WtyDfKc43Ji2PyAvWbN2rvTtU97PYh1k9e3qRzRWM2H6PveSC9e9CY25WWsmYFbD27M6T71Z7p5a",
  "key2": "4XzfMyPCfsxnorgeuQzMTqpL9bWJpSQ1C4zUpCNrgMwABFwzgPemXtYCRtiXiMzWtJMZBCT18KLaApMevhKpmZ74",
  "key3": "3zL7686YgniTDsm4nQs8EvRJ88rwZwicZHuUqN9V4myQPEPqg7s9XDNdpQfKxp4bumGrg6G5jYgTP9owddXfahAg",
  "key4": "E2pVfUynxLnqMhJhPkwW4JzcbJWWByxorxeuCnV3RarZRXL6VxTRCX4XHipPfR9ZUy8DrWomUYtmVwCvrz7DyRH",
  "key5": "2Pdta8R3oh1L1bVZHCSpRGGGzpTo9hRjwu4w1vfkJNWnF9pdhMYGQbAExfoxM3wX9C9dB5uhQbuRhxXa1GtmfWZY",
  "key6": "3xn1MD5mwRUgfJo9PEhYbUG99KJ4KY3kyov8vZh6pTRubvmrekuUWgiPCXgVJ547KyGMrWpkNUwt1ANeBnsi824S",
  "key7": "5Y3WufnkPh3dJbBKHitHt9jH67f13ieEEM5jjBYSYtuifmaGHQKytD85q7PzN2SwxbkRHB72QCBynLqkmDaUGMQ2",
  "key8": "2nm6nMXzLbeujoszVHjNQ7uegEBAtPoBVh5XTAU3hGzCHaLxUzgdKw1taThPdbGoSaNpWCgFLaLH5ZmPffKt9oHk",
  "key9": "3Ry1sAEiVMUba3cW57iTjMwt4KqN7D6txHhCK2m2FG4euQmg3ia9YDEVKCC7gXdDtzaJpGdDJvPQMYPDZusq8Bzb",
  "key10": "5XFTZFW9N6sJgYiDn5Q8B6iuW9zfboHnqtdTNg6qnKBUG5kVf46p9GpVk8Wd4URJGJQAf31ffi9hHDknVaj2FRKA",
  "key11": "22FS2dJX9QicRRAFSCcuktfgPimuoNGZFWbVAQ7FVTLgrRxwvdcNPyNiyQ8idDLUBtNcAoEPoPvHUWKWB1g3UvZq",
  "key12": "2VF22pSxzm3u3ZPXC8njdNmnMBTi92oTEggfCybPWKFon73qb7z4XhUC6o2hxXeqw2j4gigit3zXi4KBCvnQPpQn",
  "key13": "124Mhxe4FDBxoqkwKSJQVoo4iiQ7RZ5m7dSajkbSvXvQX2vphD5iDBEhbwferTKcKfcaE6op4QiwzmVWstsejDMz",
  "key14": "2KR74wLQxwDA6fwWJq9PCWaTgyoag23QMqXVQnzfjbqeDNY3nEMYc8Yfx9cKfVdTkrezM911FKiyCxmGDDYdMXZ2",
  "key15": "4sY86ALUfL284me2oNUNTNyukV4kQQ6yTKZvYBsURYikk7Bux8gGWsfCBGhBWKwEp5KkGtfRGStXeD79LhEasjxx",
  "key16": "sNQ2LdZ235F2TvGHPtriC1camNM7hKXiskunFiKUoi7T7HSX7S8QdTkRJfXZTTaMMkb2XygQcPQVfTxAN2ArXiE",
  "key17": "Sf99qiwYkqyKvKcGpEfoMjpaHVf7aXAWLnsw67BUnaWiParjVf5kYgwC6saakAeci5Ghi6pwrxLiTMWnkNiK8jf",
  "key18": "4i6so6ZAg2k7TTmXuKBmw2Y222AT95S2fyyQBFpBaNckSmtRotbmMkCwEByUPG6XCMNVSCgXeRdP2SsmefJPLDzF",
  "key19": "2ZVZZT3BASkCQbMqCZHZ8KAvh29Pd71JHe8sxPBomeo2NS65chHquXt445RBCVcLvdeTxJSCcahJphc8q8Kaecyi",
  "key20": "7L8tKtxLAS22T2RNKEzrCEMVVXYZ3gcZfbPLZgLPkC6mb1Pxdopm5f9JtpQbK2xKmsQmHTzP6F7BD6XHHaegira",
  "key21": "3hJBYFfifL9nirLWNLVcK1bjSwHke8mau3f5tqNpvbkm1v1wqtBZu2nEGk3hpb1mrUQL3pPqmmM73V1cfyVkQ7Gj",
  "key22": "2xkoG3RWF9PB5WXHahpsdaRwNxUwLJL1cGSpxL4ECzRocvPDCSrNYSu1FoUF7ZNSR4fPWhwfhDoXLNFZhMrMYfPF",
  "key23": "5EYqWambmTCQXYdwo8duBRuqNShsngUnwU3VfnYHq5JJzeH94nmAXVgq7qWV3e6zfdHUVbrs9v7cCmeYVUdwocKR",
  "key24": "5G9CjUiN8hdn4gQYHDfnBeYHmgXhE72FeUMT26JD6zLgYssaY2dYHgB4QZPxLPX9iygkmLY1eDna1hYye5W7YoPU",
  "key25": "5oJRUgL4GH1aQ74yw7v823BhSEa7pS8ZuNZX5Kd2gfo2vcmWXXhJBBPykp2MUcH5MKDS9f3Grbo45uA3w3viLitY",
  "key26": "5sDeUAAAw4NoajYnMJEoFie8x3ReJ1zPf67JN9FpRGHPat3Eps2bDEc92ST9vSb1T8oqpLFEQofJjNPaEt7PDhBN",
  "key27": "2AzxDb6FBXiGttx6v195WsKAYNuzRDCbqaFhF8Yz68zopSVP8JoLwD7tJewJfoyZ3oJpapnGuEvcewFtwv8jupcG",
  "key28": "5FXHSJLyV211C8woQVX1zfL4rUgtPvPwhXUY47HoSQmG91cQLk1GSUvgUzBNoYDimwBSwsK6F6fJYkJpnmvTFVd7",
  "key29": "3WrMY7f7LeDjoMifrQJgt3QRN5yQbkyBSygyeFEfC1fmUM2PeGXixwYPUPZvtmXNeHdNBSwK7hcU6WsmrKjAwJms",
  "key30": "2DjQxKnKFBot2APMNAfvkH8zLLzHVt3c5ZM3bJw9J4LbuRZLtLHXmecTgRAYHm4Rid6gwNFJivefoJUj6SJTuXbh",
  "key31": "5AEZKYEMevem6AoDNwHJtBUVaE9FtNC6f5g4i1KgKqLA3LvYyQKpsuGRC84iQgkcpbMENZrvKGVqasNnNgpuERa",
  "key32": "3zjsjGuUHzVmqtf5JZ2kb27j9PFgrEMPKSmKL6h5L3e1msKDWTqQxCXgFvagkfX6fkrLHp687q5aB3EYMALWahoz",
  "key33": "3dZP1RcDd9KC6GXWA5kavMYd4b8cs1PB2RGuoaroUGboLCJSKs89xTRuYU8JWMqrLkhGVWER3RjecXh7eBHHgf3F",
  "key34": "3XbqK56Kn2Ax9f9STvEY8AWbApwM81YFK4kVS5jZk1xnTB2x2Cjy1tNbGVQZXGqUJyMadnvgJTzh76QEaMDWyugy"
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
