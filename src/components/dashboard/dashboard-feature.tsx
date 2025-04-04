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
    "enN6m92jmmCb4A4Wpcto6qJnBRrRybLQ5F7KcAYuARjV2fogE9w7LMirygxg7MgLd9FM4f64aeZS9f7mXfynZPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqxQeXnhLZqMHyQBUp1NSceDj1DruWmSSUa6JQ1ZELDTNrcqQRKNQgd5ACAhj7A3edpTPAkgJ8GdDhGnkAVFJsK",
  "key1": "5SnxQGKg8TWr6dnh7g5im1DsKQqkdbtNkeKvVfj1kGyp4hbDtLYL9DXWQPFsbK8BgyAorBGmttKhiuz3SLGmVxQ6",
  "key2": "4uRMJVKjbjYAXQgrQz4keUJXg4yyZUaAPxjuVY46nKtY39UxaVq1yPzK2M83r9vS2JV6fihcJH4fUPqNxBrmRcKD",
  "key3": "3R38reVNJ7C8mGo7h4qS4TesWK4xhnysWULoHpY2KPd9L1xS4L6zT92ndmcFCQnyqfxC6pmiZpqRtd4ryXysJxio",
  "key4": "PdAAP5yYKRiXQEk7kDQ2knjJtb7UmvHXC3BtjL2DdPZsKkjtzoupLDZw6Lvou6a37hPyCdTgqqPjBpBFqv6anpd",
  "key5": "2tH2wXWffatu2pFPutqcB3Kz2Uz3YWMZP1fbuqnjvy7J3sbTjsHvaEapzVwPs4CcNL8pvkQv7Dxmfo8WHfnyhmtP",
  "key6": "3iouZybpGNwvYHQ4DX5HgNWZTqpSMSG6jYW3K1E7K8vE54S6YirUkmukrpHN2DDr8jQcuDdPodYAdzP2Gyb9QeU3",
  "key7": "2Dzwq45bZfrm2NivxrHKvyqu4EsPxEngUomAiRdYMQNjMYXghG7yHrAFXzFKr6tWF68oFGp7roC3fKEXc1bLoHdf",
  "key8": "tKhK7HBCo6daRQtkpi4b89qVtqjypMz76NcbL6PMkHPkUtXrnxf76ajiU8MNJzGYXNLeMFvbXXnZ62MLmeMdhDq",
  "key9": "4qBdyDduviKVix4qW5t9VCzuAWinGiPHNv15PHkiuMwotpXBqfVY9iqMJK7PhYDwCoAYGoEECZZpevzoKyXR4bQG",
  "key10": "5J8uHMkzK43DVmcdpEJkeja2rnmjwQ7rEeBeXzWB75wM46SkJ2AwSd8o1fdXHBkDyvzgoGquGhgFv3cDjdjMGQLr",
  "key11": "468PF2T9aaMnhH75j57mYk9G9EqMhCrPBbrYxUjvJBbLTx6QyuZTss4qy9sHGpdnLtb9oJDUs5RBWLjfEKVrk7jD",
  "key12": "5PdzuVM8goLPEow9MAZjbNF6sdcAW76VusJ2uTg8aGaY15mBzuJi45jt8AawAxQPfAg9qyESG7xNp2Q2qCSMTtnj",
  "key13": "3LEKLic43hrsshv3pehKBjvwckuXccHxRdhSPGuKX8urnPqW9moJuWHXY4BzZxXE7h4BVDynG9jFtRLMiXhiNuMQ",
  "key14": "56RGnkfb8N8f2ZvXvk3rbpW4hRkbe3F2S3Ne3n3wr8BHoBoi6zhXAt6xoTRF5bmzkaDymqQnrQnEzP3VJhkx8q4z",
  "key15": "2unzuPNg2ZXMykfjiQbf1WoVXRtqXMQMyKYS73rc52xy5gqHEB6Gf9rJKaxsd7NLbSBya3mbhdVRy7b6qNreSpRj",
  "key16": "62baS23q6hjHCdBFqeLyasxcgZc68L13mGC9YLAvVHqwEinyVvD2DVcarpj6PbSLNt3X5ecSQ8ozfz1VWJyBdtCm",
  "key17": "4MFXu6p7thNTbXpcMwieanHCHC1Vqy6VouTXho3yne6XgGK4ZXoQqVw4MNUULnBpJa4jstLHmTNtxQVmu1RRAbBC",
  "key18": "2qMDTToma9t2Wwhhe2tVHC8zHqXYmUqDv3uUWonZGcWr4LhnsB9vt6nwTE7gYWGcycAbvobbDR3GjJbhSWENRtt3",
  "key19": "5PnhV3m7PTsTKvTynuYMwrTmJarh9bgk8j4neMmqMyBF7nPiYW4xCxmGcQbScrSfdtoh2BKV132eSF9s1r35sYMx",
  "key20": "5J6b3BJGLBDFT3G8dMYqm5X3EY5YwJDy5wvdW5UF4rcqqGGdwxmbHirn4cjRt9KBCYJoJxoFuvf8uFnVgTXCZV4M",
  "key21": "nwo7q6htp4Vie9jPDCUPsLGiHokRBM3QavdcUkvHGWRFoVZ3JvkVio6dNxvsvcUdnPWFR4pHrDjqmFzVGpssh63",
  "key22": "5DLdZywNtiRArQXEwAaaVhePySEyPqCgpZVBFncKY9BRQr5fbHgXHhdgqMsDtd4zC5oSndwFx6PTqMT2REN212Wc",
  "key23": "5fQ5KrhQZyEfRGrtDMKdt3goT7KrqFAjzfqET2wWgU86i3DXMPajiHBrRBAbLs2iHYQFefRwKUFbjbR27r2WRMJF",
  "key24": "5VW95TPERsQHUNUmmwc3wbNvYZwyxUdYrduiEQEw8pZ74PNuKuDzv1gCedYeYMebogUfSqoCa4tpeGttJMaRQ6cG",
  "key25": "2B1G3DA1To9mFy6T6F5P6fVYn2h4tF5S3LpvvA3ZQPdSPKgXZ7LPci3m5czbskoBpZqVqEVVGSD5WffPtcP2fVZT",
  "key26": "XjgzRs2Ryf5vpq3C3iJi6EEzYwZPoeUyd8s81mwQZkD8p6pNBS2eVTBcKN2x34GoxHQsB6VxjkPRMuFqzBMiHoJ",
  "key27": "KRaEyxkP24tTEmsod18fdyx2a12S8qJ4rRf4pWqitVcEFrPfVjBwQFVCPVFygwKkMkKUrvaaxhTSF4f9kfJhzuR",
  "key28": "2ncdJJ6ayMdoSTbLnV7DTP2w1GooC1VmyYTdq1seyZpm8oVR91M8keA8RyuY4rx1yGMKigq3SfnPxYE4xpoXX1XU",
  "key29": "5d3AcGkERbscp5eBGr3qSYuLA5mEFYJQdmV5dMKae8Q4ijYcejef3rC8uGexjpAh9VXXA1X5Ha5T175LoEWaKDEn",
  "key30": "46o2DdgBQvkNuYtkk5RTDy7Bs1DkLvxQKMsYPzyqcZydt86JM5duJaT3wXad5jTwZFkQLpnPq7ZfWjrtGhKGHn9R",
  "key31": "26X8eY28uaYgkmtenr7kxZZPNFpDEbbKjHjygBgfbXSq5bNY2STmqHPr9cW3iLR5y979UneK9qXKRixomE61STCD",
  "key32": "p16QbxvdJggni33WQf1M679g39CFRZ4JoVAxWJhm4Rxj2R2uxvHoDBYeyRmadRTo6crQZwdVBueGnsNDuscoSay",
  "key33": "3BJjnaGk6JY3xREHJPN7anEMXwS3UTT5CHZXrB6dUjFHG6agx3654xsThgg8VGSt13TjVWkuUZSiRw6AH2LP6fCk",
  "key34": "2dV5Ugj6sLH87XazSLG79LEJDiVopEeeDHGcKfUSPyYaZ4N2m5pTcdNT3neKuR9xYYW3Z8nhDGB4AqrQCVo6LXnn",
  "key35": "3VVQcLLto81KqGqpoTpp1hWM65nDPWZKJpGe1UC8aBaCZTYCzj5HBZHCEM8RCrStDG48HBosssHDa32eZrjojVh2",
  "key36": "2aecJx5vdwGbKh6Tv5UFHJud1ddJaGXgh4egxZjuApQehXXRrGPaMUEHsx3ejn9G4YJ1hjXSDLzkfYRJRWQKExaB",
  "key37": "3pXtrf9CimgEMZvS6Tt8dUYauMHBeoykb53aYe1w9V7dnFRCW2hQFbmcTWBMXigGHzqGwFzQ6XkwkhKyZDkLpch8",
  "key38": "28v5jgcLhR8TWG941pMUBU8EMty4W7iieYDq1pHEbVS7n3BuvvndE8eBkqeuxgdn1gN78cz1Hm1DE76LfAAzy4of",
  "key39": "5vzTmAkwoCTEfp7F62gBBWWD4PMy9rtZSGas25N3HfWd9EJMHuNmd6YC3VGXLsH6fUiLHiFNy5QkuPhQZWjVqU71",
  "key40": "4r9X8uUaSdXfogjqb3Ro4pvL91vNEJ3FKkzNm99swSqq9YjpK6H5NN1g3Mc375DfQC1LeWKDPHJcEU2X4JzLzmWp",
  "key41": "bd3jLAyV4eY79Y3wc8R4X2LAxsDL4py29dLQSKt3LVBZR9dFcE2JJ12Z8GHfqAfQZJqjyXyP53Nr1WYfuc4Pz8F",
  "key42": "4XRTRE17sUmrwyRCmrAQaxN9qeqsN2WtpUF9CjtxgvLtcpGoDK3FRWtHLZgRuUNybv7FM7unbL2KEyUo52DvSmp4",
  "key43": "387qdj5STK5s2fqzde7A8qKsPrfE81sfX6xcSDYvFvuEzyJVaMDNb7e6wKXX5zERGMNHeNnSEp2xKqvAUEjd7fMk",
  "key44": "5725wbBM5XNnH7FMvftJH6MfFRQvecH5JMYfy4rbm8NoLKvq4s4BqYBVwLUqghYksFTc3RvwmLoeoLjrXJ9zxznC",
  "key45": "wQkfs6DzdsEfbjzeyRQivVm1xGaAnTMq8ZiKp6Hc1ihM6dDwMhUpcXXy3QX5penq2RCCdSBn7p4nyxsDir5yz1d",
  "key46": "5oSn74dzJwqKDimk1X4M9S5jxTmE6h9KAdjrRiYjjNYd9FJ8UDdtB8YBHHCtYEGL8zhdShfVjfP1GZWJQnfX7GLk",
  "key47": "48vyqYjLWYg274Fwo7Ee7rxTfEPPjH1fo3vvHcfM5z3C4AkS8CVhyww9u4PAqimp4VBmjsVvXm8SvL9WmWHjkZti",
  "key48": "2Nn6iJzRQwi6fzmsu3a5cVVhu5j99ejG6FEeFyaborJCuzGgAPRK1RhpDjRmPrBhhw5vWnVuMDJ2NmMoW96wGhfv",
  "key49": "2FGE53SwjyXzNRuNNKpXVrh4KynEQ382JJ7MGutcRDLqvzvKapV4TdZKbj7RpJKgsxA1RUsb4uQ9hSuRT5f27cUB"
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
