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
    "hrohSo8A65G1LzMMp6VMxCbLhfAoPETNX7YXbgtY4cKq3Nn7HTKBYgxqWbhCHuVbCEyv5hdx8bDkzbKDmaerPPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VF7sDyG5BMgqF75U1SbVFaQR6JooQmbs566JBAcpEkFakWRpb2w3bqfFAPAWgySQ1MuWGhPen5QAvk2dncPC1Dw",
  "key1": "T9cLvvw6U6b4TsEZhbE79mtopR99PLDjcpFGWVx2RrQtRfNVs8TYgY6eH6pQ2Y7sgZp4hLpe5rj2yaUciat8mQi",
  "key2": "2iHXqnuyMB9YhMsKc2H8fsRNN3oGFGUv2oXTNHbn6XneRi3n6kJH5Z4TRXZF9658oYGjDbY2eyL4gftdcDB5DFNo",
  "key3": "47JdnXd1fzE9Yj2rT5n9PmNWszWiCeE9qdiGCkCWBt8iLd312B9ZdpXCSwamf91SDuHhq4MP1zrzD55MSX6EWG5p",
  "key4": "4BrifhexHG2kZtQ5XaWsSfotD5q7P937kEciJXATmGqp82cuoE4puLi1wuv8S6Ywj5Pi98UH9hCaPhGB6vzT6B2p",
  "key5": "2gfE9qgWMxwPHm7Zm9TbSrz8iEmfXisJPJrNfjjqVsFeJeWrV84xDfyFuMeiGQZyxAkCTaDbpKbq9MPpZRQtiLmC",
  "key6": "4dGZXc4GceH6rwDGP63utg5UrTxzsBfnVAeDKkiK6NVJwLuBBLBuQRe5VDFpChVthW3EmpmZM2Suu2ioBx2rnQQA",
  "key7": "289x1xLsNwBfJoXUxsNKjCLjcLS9M2UfHPsqmMV4zAVF7Vk1TJJWdsEv2HUGmDXg5VkmZsQFNijMhq7hGEwPhcdM",
  "key8": "5cMjNyrTAjeb6WrcGiqG3CqZBxNuEVX8JRinT9kKwoQdzG8obTifpG6pvKsFCfB8KGMGT8spLYbLqYeq3TxgWjyq",
  "key9": "2XZmfsQLgM4cyUSeK1TtwxwL9hyFkAAmRH5mDxeo6ZHzrCFiAVcijKbDtfQorTjuB2WYUPSmYKiZJgLMWhyrhvQm",
  "key10": "5ymD8eGgAEV6qkofpU4AY26z5BqghiXNdpEHQBWyYxqnKjNAj34xfMD2BPT2wXPHUkT9Gi2j682xr7uWyVWKPdNG",
  "key11": "65jpaFEybFkKVtwinHuwJpoHsZe4CMX8WCynzFSMWc7D9CZ29uV5NXonLu6TEyFMZhKGzqzmFBVaS2GHtMtvKYWD",
  "key12": "2arY1fZfbgqEHnwJRq3eD93T4JkxJkQ8oxM6CmDmHFKpKjkSjZYK8Aj3NP3BNvs1V86RLtzeBkhjBYwddjwyp4jy",
  "key13": "4h26fzPw84nuupqBzgyFkbgycfZBJejuhsypj8q3m3vRQfMgXrJkpihfg1x16hib3Areeek3gj6P37cpNW1kZykB",
  "key14": "452Ww5oBXeRfFbq1W7KAfqL2A7Gct6fNjGdDyHCanpzdyV54upG85o3RYqVxR1jJRgfnNkwtxg2kmtHHCY7eh6vm",
  "key15": "3FWQK15zho1BhxeSsLb5CAtmEpTwH8UWeMJkgx7XL8CTHzTorhQNTeUzUg4rAcusibwCpmJFNQpH5XfKZnWyXDGe",
  "key16": "34pcepvcQcrSAMRPKRb9yEg7gut79hrkycnTgp4K5ziyaY18LY9o9xUEA9zSzdj162mxTNMiM8ad89ovBMKwzkPP",
  "key17": "4hn4D4UGun7rKPXNvqfgKCQt6LkMg1UFmtRvB8bU8ra5TGZijUH1oDWUuowA1EHbvzHo8HaY5Ew21X2EmVeGNxAm",
  "key18": "3RoFvKZJq8QCLt2E4bFoQzNVNW4s5bjRpkA4rSAkVUdWwdpQc7dZremG1Lfx63qZHgngGpNQGBWPM37ZHDeTecdM",
  "key19": "5HfQdq5iXinN5xjdjrFLYKWsDbph55rtihp92CtjLAADW2XEHszYbjUMJVEVN4r7PdpGjgGZZ5kQEwL6Q1TCDaWy",
  "key20": "4Nwid1TVjnqLvVju9dZHmhXpaBwo4UXA6LKNx42fukzFwxsi9KgUk1H9z4joMdk9htZLyW42MB1VCYS8af9pPUoh",
  "key21": "Rm8E7X2ueyxEArJKzVhn3x3xDcGyiKkXuRcd4UgD8DrLj4csn9MhPeQr7HzgWEGazJ9iHqxvNisbDKkX6JAR4kj",
  "key22": "5su987zkFyExMbKXfs3TeqJm8HDJtafDSJESfnKUAExea14QSAWwX5GsjBjPEJ1LG5NQuonVz1cvjk9wpVsBDiDa",
  "key23": "4A6cPPcARVGQACJ4MGpk5i3u6QJzDfFncq1gUnFmn9nabRimsgEHhk9ta8MmdLtJbGGkaGzZSJaExrgB7ntHK8KR",
  "key24": "4NL5NGJ3hKt8hmYHWQgyDKxa16pJAygWHkbRBBrG2WjaXGW5hypoXPiULSayJ9CZGXmvnwi4qVg1SoCZ6ZrECZB",
  "key25": "5gSLGfT7TPP87M7xTGxLDHhj4kpCbKJGnnpSLhEfVRQEdyEmywidVtGq3T63L9isH38NjBQuBCSAzZf5aMtm3eRD",
  "key26": "49Hbgbs4b1EuEWd1NHSggWNWSCAzSAQWUEaUWfN8k6qzySSWgoQgi1JoEPXiDzffW93CNYaRzqu2jUXKQ9W5msVg",
  "key27": "2i1F5Yv47xjxSLC1DC3U3nq4BFt4b7xQnQBdfJgtgpsweiq4rhCaJHk5ATzrP4q7gvtXzScAqKCSQDVBT5B8Q9N7",
  "key28": "xRbv4a1U3gGu8qakboK7Pan2MmznS8WhPpKVeobVN3FT9FtT4wK26spCbw4ocpTpy4TqxVapGjeWs7U2Za6SU9j",
  "key29": "NGHdpYcTSAhVMwbeKW4zsDKqLTmqdqUd9GcJhnHgyJHDjoJP63TMJi7fsGbNSTqyPaEGSXj7wGCDd8AWwxaMYyB",
  "key30": "4nPjXbhSos5Uc1qWCdVWBp9TqP7xkQURM18Ev1iDchVPVzk4AwSwneCoGBgzoL2GiFhXoar3jeyGfoaSKrvYM2Ls"
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
