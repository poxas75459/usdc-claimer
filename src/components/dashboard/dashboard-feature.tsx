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
    "GJE35b2y7EmNAwrEK7dhYDw3VLQ2SZpTihB46L7oFzWwCGMgUT5WYNkxmNSen6fyjH3nnXq3FbecTznYCP9dgSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmWYwYr8MwjLM2WNsCkGV1sf1HavH7HBRcCZXVHf1y9szCADjvYSxE4CsRvts8BUdkLQQupt9aNvLQsZAuTvsio",
  "key1": "2JzKtPULvecZf2FtEzr1A2BhpjdUqToBmCL5dKS9izNdFbFF3EBKvaHRjfbcTsRQxKZ3TLd7jvgYcCQJf37b4zzr",
  "key2": "2i1MXjwvTKhcLYtZQWUt46pMdxT7Pyx6E2iz7LaomZxCevNq8veNht1AfMKbnE2Go8b28RMyYfzEGvxTWrytKjCD",
  "key3": "47wwFCXhD2QrsvHt6pBXe2CGvaoVR9iTPjAm2qByoaCpES3V6mnkgYpt5L5xoeYEwukiUhZQ47PF2L2ToFzJHbWb",
  "key4": "3uVm9A38cdiQy5ccRMGC6h2rBpwW7w1sFWMtKxkWrZUsR1vLpPGiG1gHBCVDePzKx9c7QZbXFxtD887BWEfWTmbt",
  "key5": "KJsMepEzkeQQAf1bcMS2NDPymBdYbJDEDZjXUGwUkRJmq36gn768rmV7teyE5TsBtjSDYDdMj1XY7JsQheYWR5K",
  "key6": "66qLAspk4fV4my6MgiMHqwUj6Bt9rBfi3Gy26aW2tarvy5WEoNwSmNoN4bQjGnWgGDeH74GaUKpCrN9DcbbXTWS6",
  "key7": "4Z5ysftuQjpcZQcDLKA3R8rbPb6rUyLz4P9m2CCzRbqZVpTu9GbU9aUYbBpZTq2sC1qSNhJLVkV5GAZ4MjmwDAKc",
  "key8": "21XMHV5JiPihryL6NdZCwr2xtQe5uJPTVrDqQxZmVPD7odNBzw8qu8JoWnD6PZRwcPkhrs2WqCWuca2Lwcrnm6PS",
  "key9": "4gzybUFsqA5c5hsPJW7C6AEQQCn5WhMjEp4zGKcsh3Xttssz8AbHcebkMvrQ7jzVGj7pCwADW1wtwjDZ8y5iafER",
  "key10": "3rFPQxmtCTN7f86XDi3NRWcc4Bs3hiFBiB5K3UBbQfGbg6sWBsF358dfN2DQKXTU3Sw8W382gTSpcoimu7iCyXGk",
  "key11": "4UU8kKwKzbMeEYWrGWe5Xn15tVyymFLqDWbcxXK3SSaPVTXeq8M5c49wT1AtAPW2CfvNB18yD1sLFGSCeHse6uB1",
  "key12": "5geUzpwdor2zxxfaLdgUMSLNwUVy2DtuiZCE31siN1uWG6N4x1LB5fAspgVVziJSy26rbfweb5cP7d3oyPV4mFqt",
  "key13": "2JsmdfJDhrKZSXrdeHKRkDeiVZ6XL1QtTysbQwn6mCft4gf7ThyjwKgo7VHp7YYySCECjBAtvbMqshYVPJjLSzC3",
  "key14": "4CgQUWHAaaW7c6a8nQ9W3fmFcMGWMi7rqNvmZJPEhXH9gdEdvBWMBPsu85YqBubfJyBnkBvvycgbWaCsosCdr1H2",
  "key15": "2zUEjmt4GuEQ46K8pm4YBgysibpiS59uNuz3NwJvnA9byesespWTuwXsULVLUkpPFe7ZXQYqdeb6hbigrXKTYuoN",
  "key16": "AkwvzF62L3z7zYZ6CrvkTBiiqLRxooHjpZBH9trGw4wdn1PNpBFLyQqqZDJak3sJpfrhJrCBejrQJnbSDhGpUZC",
  "key17": "3ceym36UaSejgKib9wkMtGKHs7KygRFeqEUCFoHpxXAo7buoyfTVdA8wbPESFJJPdZ1eyCd9jipcSwxRKpnGvTXB",
  "key18": "4XcjsFPFFiD1kBv1VLmoXtMNnjLbFrFcZHpgkUek6gdXxhfCaTr4q2YryrRZfu8PaHBQd49L4fs7MJ8VT7hSggJf",
  "key19": "4VJ6sERCMAY4Cu1A6Fh7BR7kPW7vp7wBeTU8VQnwgmSttnQ98caWFBQarJExHudis48VkLFJfTiZ1fLAUMP1FAaX",
  "key20": "5carAstFHJi5dsdLWurDnY11idVVTBYuPaxtLxJq2w245KiaCGdC7jx7U6kJReupGkVUQLwAB28qTfgvhUnK43Ee",
  "key21": "Rm7k8ophvJZ4YCPjnu4UdznTz7h7kp6ToTqD82Rigvt9ZymPcnoApzuo9DvqJ15PPWA2j3xwxJxYBuyJu9E58Bt",
  "key22": "ExeB3zwQYR4odejK8bc6rq863vmABTzsk2U4QaJqbbMu2nEU4bL56VY7N6uAXeFbAqaYGrCk7ZnaYrzcc42EHZJ",
  "key23": "5zY33H3SJRSDVDE5vmDvgHQihzn6tEs1xYCfLAsL6CqpHhKK8EPfnEYsg41g24yADxkcNkgkzGBzRJmuCBvRMNhH",
  "key24": "LAHj5HP2XfLK67CuQLRZT61cEjZ8d4yASxcQ5ydLS7PdQW49gX4KQp7v96kq3ngXT3PicPzH2nrpY3G76gyFGFt",
  "key25": "1dZkrvsyU8qhrVGuDYQH2Q8MBvQGuuipiR4j6rgSUuFBZvNquznpCTHx5QB3y9u1zRZwGe6LRC1kThvaX7vXVCE",
  "key26": "wChgTwKnongK2BZ1ZENuteniFPVPL2LhU68KRVps8MGsPkhqrfMdNwSfgozb64D6k6Tsk8sfaHqG7LsMwt6eqcR",
  "key27": "3HVbuhXSycrvopvaGQnLfV53cTNA4CohQGhMr7FTiCZGeDXjUnaHWVTyJyjoUtDK9rmLy9PDPyfA6iCX5HsPXNbB",
  "key28": "5jgKBNeZ4XKFk8QFRngexba3sj8ePXPKuwoq2sVk3y2HsN87RU574tSY672uR13JYje6mSy9ipdUTTsnv8hugEDn",
  "key29": "2byqJVJRAXh1EZ328yCuVpYXB6A5d7YCJWM3CcnLyAe6RKTpxU2wQSCxepWi1EWFzXpppVihPzoh99KY7GaDJFn7",
  "key30": "653GC2pFwFLbi8bRZXSRyQ9xZUWFHKs32PHUoap4D1NPFxxRg9WL9jp4poQGfZ3szkRmx4LdSzFgtDZ4TkhUYFhK",
  "key31": "3ffED4eR7gHaddT3PaL2JckRf6SNoBLpjEoej5p1q3nFbddPaZGVnFCzq3bHfD5tjN7ysAsJetmoaAG4HwUfYrkF",
  "key32": "3K7Vn3yyDKCd7grRCGuYv3fGGRjvtj883MuXgRwpwKPKZPbkeo4HZEbGT5osWQC8aragrodfrfC1hAXxSAWv7R5q",
  "key33": "2ttKZDKhtVDNfvQVnu7gba6cXpQ9YF9xVnkJx1kcqr4sfPN1GnEQ2yUoEM64JiaQHUxjFtQPAGBv2GNKWcpdrmrn"
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
