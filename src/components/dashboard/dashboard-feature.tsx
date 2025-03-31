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
    "HmGWUNSN3qkDMToXcvbzYdizxhe3TfcZ417rb6ovwvt88UYN4BbV1pry381EwNxEmo4r3f8iyaeeRfqgSMAMrNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHixfNxT4p97fRgrFerC55NMrxfDpmMg8qX3KT846q9EoH5cJsaefN3xe3qPzjSvgHpUcogBChPQ4VUJx4f2rDZ",
  "key1": "3K2okJMqdzdsqDk2vJzpmGsh4AdXM3vMknG34gqFfadbfy1rGnttqENh9Z9PZ8QnuxA7X5mqaAYdZvAzGhac3P42",
  "key2": "3rXpAci1ixYCkZAJkEyzGJM4kS3NVKSoifkSDvbnX24kcgejW4pgQfNweYyk1rLviMEmcYfpKEWZXUv9s3iRkQLt",
  "key3": "454m7WjLiPL62ihLrcEFueFJ2ZtpEvX2Kt14m3Ra1VmYGbU6mU2qKHHRzGHvokigayTSKnXaURzbNLAyZHoSscgW",
  "key4": "4ufGWSvHsjAjFUmwkg5AJT5aRsX5Xm6Z3WfnxSm4KVmE3YbBdyetfoYrtjkwoe93SDNiYB6AiEfbQ6zYnCdj3CT7",
  "key5": "765TfNHjpxNAdq9erdgynoLNaX1RFMcfbxroAWm9jPqCp3xrNGjYdBFgaEs7a6fk3LVBhTeJEMiFbtpoGJnbJQi",
  "key6": "4763foH3mcBhsYTDTeRshwi5JsgeAY9jyuvKBCxFDJnBtNxfobtyHbc4i5iGPxbde9ahGhcpKyaySNm85r5vMhE3",
  "key7": "375msQJeYCmTjLj89JGqWW7TYz9Y68CZvoEDZw13GpEB6dt5sAfwKfQZeuF3QRisjn17MEwJNfpygtus5AMnZp2P",
  "key8": "2iw5bmLjpu4iRifUuqVqhdzkE6Qz877s68JLCtVZTxhJYAo1ZE829MdBd6my95TenZGS8TgAQLA2gL9tRS9jgNDw",
  "key9": "5u8gQkTv95og2y3QUvMDvPMZufZF4KNtmhoTRnEk4sRZnt3pBzshtLe5ZReT16N1WLTKr7nc8Jt2G4GF3BPARMqa",
  "key10": "3E7Ma74B79WT6CkBZDX6D9KkQgTUmUrBGPiy89tUMPkxFxQrR6e6hWdjkhcQST37KsndrfkDPdYh3i2FEUtmYyXr",
  "key11": "62UEG28iwRWCAcuTexdkan7zYRnU9tQECqEoTu3GDsyHhFngk8ywssAgbFU9zexCZFkvLwcvzrpnwbrSGVKaBrc1",
  "key12": "5dsfN31rAk1n2fdSJUnsMgN4KPqFLA84XxFnxtuMusu28YpfckEzTeVLmuMQWVQwmtF3jufHNQuyE4GYAUdrNZGn",
  "key13": "66imsnTUvKs2gojwbR7BfwK2AHrHWAxu4Q689Fh8KGPBWbJrhoEghKf4or9aXuZKF448m7d9PWZSBLgv3ByC7QUe",
  "key14": "3Bx3yvtd2gXg2kBpdzL7kPuUPAMFQTLnMTNgpvLrnB8xQRtg988nfXVpFzS8XjiVH9bJiN45kXW3QC4eNiFCtLn3",
  "key15": "rT6NCvXXec8wMVfgTneopT3xGsjxSXev247GwMenb45XXRLbd3quEESZhLJ9NucXP952RoQLUfh3QAFPMdLXp7w",
  "key16": "3y7MnUe7vdeSw27LRvjPCoysyrb2wByfXMUNkmCgqxPiQRxeF3eyoqjHRKmPtTrfWAZVsBRJDhio4Gnh237jtp3Y",
  "key17": "5iEemooKZxXDXGR4NHR8XaBuJWw33iBuL4H72ENT3q2zY8dUjfevo5U95Dn7HJ9Q8XTD59WJ8E4cScAxHYSamiky",
  "key18": "2Tkq8Hvg1RYft6y41LW2TxpMgMU2SHxv7HG67qoHbb9gJ8i6UoaH4BwECn11rwT1Kzg8V3LwV6gGw44wEq84XPe9",
  "key19": "4HX1cbnzjQ93DYtpmRnpq2Pv4MYsajTfShrQgXHRwsStq7XqBn6tM9WaucKNbMFsY4QVGAJ34foYzESjC7n9VKFp",
  "key20": "3kYHyAgxCEwoVxd3XDiwP6BetDWpwhGQHLemDhs86iHeTLguXGJTUF5ebnafyJgTFJ4TcTfLREYhFkfWCpHeRDjb",
  "key21": "5tR61pezMqh6c24fdLnwuGaQwxmiXBogsLNQoPyBxSFB56PYaoa2TfcpxgtJiBzu2ubrBGf4FszKz5SHoRcUKhiQ",
  "key22": "5G8jnrN9uatvSTdSsePoJWWuAhEpWNToE9oFmmphqpA15EPhEfepaSoCbWW1AtRYYpyf3iuRnH9iF5zUQ5mxEofV",
  "key23": "LG2nedFHg1ofJNVG3L9zMJ8DkcDy57WPJDk1bYcBNFxwAaSZLo86oNr3W7Jn3GUN1o3Qap4PHHHM8qhxawCZnsh",
  "key24": "5vBGdhFVQMtcuvV74s1NMXsTAV9NJjUbdsZnaEQsnYvQKQHQgVAh3q3936R1Z24AMDtW8KADcbcfj2KBuguinAkr",
  "key25": "4qX8V4Y4iT2pPX62uR4jUmsUKrdwhrYkBME13CmSeJdoPaTJSgxC1wWfo3jePov46kCb3oFBdVE8oA7yHFZPb2c1",
  "key26": "5xonHTeWRZNqqcXKq7uKc93z5N3M9F8cT4hwM51g6oD3yztzHpgTbXAYFFe59aVFhoNKZSdnUMPSN9dwiVSF2ugo",
  "key27": "55G4tYon1d4ZaBvvq773PVgK4m9zhoDizwMw8EYUp72iDcSsBuCBA4eogy5y5dFz18qxf8qYusJ7Vb8b7txofAVt",
  "key28": "3jqQSypfqcK1cc5m3hNQutpELmr1HDFapXQjE4Ws9io8bTWpnvm3n2mQKYDatXFZgcCXR36RuqWUAFAAYSR6EnYX",
  "key29": "2ZPrbbwVFM65es7Q32VVYU4o78rPcJ24HTQVbrSXwzsrnpj3RZZHTy2S8EthdwaXLj38R1dxKA4mpH7UC5grnoDi",
  "key30": "5ruDx7f4fsUporq6fVD8nbzNq1SxSnsRbG7qTha15MUv7b2GaDwv98S9EnHpiQksqm3ww3x4Vfe5XYySEqb8zdfq",
  "key31": "fQyKCMaSyLU7nYE5rmvvkQhMJzHMCQj7Hng3Wtk5AZV3Tun7yzTLHnxSSgDZ2LbUHJH8ZCzgNEJpMpgHv1hpFUg",
  "key32": "fMbRaCV2rBJm5Ecb6bYmYriFAbpEFfvW7mEHFvwmcX5PKZe5Bjj8dVfKhqpdJkv5YFpZPumRAPAtXsgKiC12TUA",
  "key33": "5ZsndwQkDdaYBL5WYopgeWamo4WjZrY92CWXeuSBBs8b7ZS5K3cBdjwK2amJtHgQL9fsRyYTX6BEvXGNufFXv2xv",
  "key34": "2nSgnv4tyhMBbAe33SMKr3CW1g7sTniidJDXVGetRjxuS6LV1rSqGFmtkw2yyPtD2QAgbCCXKiEYnUmSygm6UXk1",
  "key35": "38DcBjVXgz2caZqKMk4Fi3G6SFL2Gtby9d1JePU3r9doDKZoWTTcj6HLqiusLp1gCmji55qi1wQfPmLcViJBi4Q4",
  "key36": "4vgh66DN6P87NJgqibFJZ2R3JD68yVMuaj5YBbE7dzmUMkBAEddpJEDedv6uSyZoutiMoR79guqAeSAjqFfDhc5k",
  "key37": "3yPHXmZFtjRSkz9PN6L3uEkCSkokuY4kPfPcEpQ5V1mRDuzsE3nZ9aNVVwqtUZu4mJiP5f7JmtUvFJyGPuzK647x",
  "key38": "2nW9iWK2HDTQpBd9m5Jhzsx3fyV6ZotvX8nP2y6qKN7AXiCAzMXmUk7sGquNXnfh4X6n8NVf5F19tSYTRqTMazD5",
  "key39": "DerNTavf3M4r2hw6zYscZjqxC144y9z5BEtHhaWaXaWGkqhTyrQgd3VSMYkhRUCezzcCc3YeYEChAzYnfh3fKXz",
  "key40": "5YvPgCNye8YtcRSd9SuDEcWwu1hRtv2b6FmCtLboNcjZN7bUZteE916cX1EqwNjsJe7eecXzRWa5CLxYZNE8Vwyc",
  "key41": "gnvZfmJGPeaoHMjHBsiwjNBmGx7vKYntTw8WZdJZjTwGFMetxnDVi7wun5ciTGTnsM2nEW9vwhYVhQ4R4yZtBg5",
  "key42": "2UbG6E2dCvwKpnfkPRiLHg3bfbcxrUwzm7hAtqQgcCksvUUSiAH5UmPxiYsUkjhPkkdoKEUGbentxnRUMUS7545d"
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
