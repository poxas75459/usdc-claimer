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
    "4TsBAjrHEkLP4JsyykRf2Y5zWCFs7EUMBmL4yNRmyn6zg2tQ2Q3FMHuLT3YvKixgqUSpJv5HbCA8aec3qoq4o3uW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNXM75BgAQhV8jjkcAcFQAFYiv82W3FkJCWQCD1pgT3XsXtisYcFPeoozs6SmX5wR11t1FynxonSsXhqDirX7fJ",
  "key1": "CwHzheCnKmS4wgQCmmMBtDjdD6nxeeaQiCsnSajSqkoRtkKdxRPWXhr5QboYCU8TEA9qojoMcAx11xXeBdYTfyz",
  "key2": "5PnxJ3HC4hvZrVK9MKB7JJ2gzjJxTpfer9gFFK4mwYFMjGsWdKXDazzcoS5C2pjzRVWth9jLhcnP8NfBpTbJNrgk",
  "key3": "61uRpfcgfbgcUGg2Zi2Seir3FRixcABMTci9GPnMVGLcPUxP5Ho2YwfRUMRCKfQHYfk5t8UPFuibQYpDoRbRgYSz",
  "key4": "4Vp2GEE3n48PrqWGnJQxfv6f6WhHEVgp488ifWeRghMXNjXEe26QNBFkebdisBn8ckb2t7xTzXFoXT1EvwWuB4FM",
  "key5": "4mgDqf7um7jqa5hqRm4JpXf1utgNUfMXokRbz695j1kS5Vh9FG4d3ZAEEzz9H4qzkT7GzbSW2yUJGVABjqdrrXBD",
  "key6": "NkHt18pLfm71hi8UuRFWhuaY3uyChR1uDVoBPVx97A5zAjZjdh3Hr34WYbiWoiTYQaNg3jLDiZeAu4PMqKtU9my",
  "key7": "2oesKDdozvr9Qah861Jk8hrA4A1xbkZ2WGEw2gH9MmSPv3o77YGcmbiqwhvbMTkndp1ptj58EfEYTjtFBhzQLZjh",
  "key8": "34k3zz9qf7oGURGGXP1yGbNDTZ14zQfq6STY95iVZPQQW3CNivqoKGCFpMkUZKbmFWskffhZBTkafkXMmfW9TWvu",
  "key9": "HfRpMsuTK5Pid2NPqEpC85kXQ8cgShXYXsT8Vg3mi1WE2qvW3vH9EoA2rkFAJ7F4aaCt4Wx144qGnMVSgTxHk2p",
  "key10": "5JKa7a1MeQ3n4S6tMjgHFwFq8eMndcfrUeYpyNLD1Y1UenSYGRcVKcpwPsBbQVtf1eNtZf5eZQKVeviNL1wrpEv4",
  "key11": "3M3Ety3c4RpBkcLx1a42U481th82N6Gevt9tiZ3bZHvHZpgEqYKvH7m1qEPLezwtjpUZYrqKEDyGWz1jBPPLWVBd",
  "key12": "pn3Gv35K28fLpQyEmoxRSMhLNepgHeRSaiAR27fcbdGwhXSx6HXnZaEqscsQPydH8tgkv4i7X4mnxNAWhk7SVVs",
  "key13": "5m1YCKbFYsTiC96RKusw9b3Ejef34AjvPQoG8ZdusNCLa52mfBCgWpV6XC4oWgCN6Y1Uh4ny3VunZdX4waJTZH1T",
  "key14": "aCi878uEwLpnzadLoDfCuGmGmcUFXxqKYmtZS93ddm9bgCtkzkmtgCSLYQm6cKcAzMKbt8wJTDChDRgumWhSGGX",
  "key15": "b2jpEXJBBvgtE5DX2VAtPxp319uaayYPF8wDQhp27g9YJGKmTPrSkS8fab2929WaN529xtvvoPeWCFQEMeLBHqv",
  "key16": "33fFa48hov7A73AuMo8CRLu6xQgBr9La3Hjb6GrSRxNPQQ3L3xa731XmJLRgasTR4oK6AviJu4V7eyYsqu7qqE5J",
  "key17": "4QTd5UhTEEakci2amiBgjtoMTbtpNsze8mq7E2CrScijd24kmdkRtKCWBjdfac4HrsfBedX6Si6MPV8JdcbgtxiL",
  "key18": "dLjdVAkRELGix6vorMW9w1xk5G9pu3ZAAKQ8ReuoGKsB55wQ3ENk4dDrtZPEPkSpihY2aokcjvenCdYeAkkLPX8",
  "key19": "4oM9FpKyb7UgWE9NwdrspZwHVTXjEdyYZ9eL4PmBfVXiwWrBdjKs52rp9nvo6MfKCxAMf2aDVEtYnwb6Cfc7hPuh",
  "key20": "3GayDoJNhXi5cHuh6JHFQzVYt3dUmBpt2p2q4jcNZBPnegbZMcmw3dTmwhBnKrbKUgbmQr9u8WLfcvccDLtLG91V",
  "key21": "cdZPwegVPuGX3ntb1mDYWDMdqqK3YKeqHK47pmJDa1UeGF7uvSpEQUMJABr47EAJF37nqsG9dUVSPKT7KdBavsw",
  "key22": "4ik25KuP1LqhKxDynA9PVLu2g1woDzyfi7Nu3iNo5D4us4NvoD7d9S3aNzaXML58HArvupS9YjYrmsggjAi9WLYM",
  "key23": "2a6sUdhqAxCUxUPgoybRa5CqXwY2LQAJgq1pKLLHLqRksLWLDkrD8ri8WGNT4cHg3UhDHn6SW84WiWqgm2Piihvn",
  "key24": "4778CLCxJTsQuiJTStE4TZv6DsbZixA82Qt5oiyZRBx8bmKjfBbwYGHtayxvAm4KmEthtjviSPmrB9gEACJNgwNE",
  "key25": "5m1T54XqmBAa7P7wYt3CmXZk9sXzY8fPduTS2yNHxJGHAMsVUcPmgpmhSXqnkRvhubGwY5CCgy2gYuj6tUCPs64n",
  "key26": "2tJcxoBxm8oUHGbrVieGu3gq2WFLwBZySLfkdCTmr9GxcPXvq7jsgFgxU1TX1HBVGvBKHSofpdpdCL3P8LxT88cQ",
  "key27": "4aHQYB89Df8xY8fzDCksDD2bzanxYeKUdTERUrdqt6sBbrW9ioEzQLkwLkwxS7WzW99ESzpcjDwkm7iDCaRRxtP5",
  "key28": "2J4vieeZryzNmP4r2TxjMnbcS6XrRN4zTpGJWVJsGCq6e5Wtz7SovcxN1ffk1HSAjgK9bU1fFZpqbu4cWERVkwfJ",
  "key29": "8V5THeuzHXpP54WdfURau6Lv2MuTdtca1YJr9NHrGrc2kZiGhdbMZrR9fgrxSJiJqTLusWcWkHh4UW9s1mPHsMZ",
  "key30": "4ssu6oLAURfbbqB8CBYUco1jUo31R7uuwxn6az5mRhbguqRb7852jX7aGAZf8aKpLhHHPVo7caEPgGrJUzApNfDu",
  "key31": "5Cogwx74stJ1HbZAhV6kQ6R4Niyt6FtD3ryb64WEodxZYN82w1hgZxH3uCHtHUoLoEtBqmjBmWBueeZeHoh7N33k",
  "key32": "2uocrh7RXKm8u2zayLrtZu1LheqWNyGHTQkfYqn8z2SDzymUA71seCDSg9KTKrKT3vDRoTaA21uX8R2iJY9oGjwK",
  "key33": "2HBa6LjfFsoRXk3zHWch8FAufBcJtJbXBM1agERckZrL6EaTD6g4rTGrAoNycFLkuTPw4T1vZDTdaFiqmGCfHi4s",
  "key34": "2eAmf6jvWhQ79QbgsPojUNgeY79P6u6Cv1YA7czpYSaVDQDvpfUivKh2DP8H5LPnCC4eCVwD3AdPXmqdKG1z7ptV",
  "key35": "2Lhq6mZFfvSgnDJXtDEQKHk6CMWTo2vZF4Efuce7SzsJEVBVVVdtugL1MNDMj1NiwzdP8YQa2RTcpZgBHPsvSvWG",
  "key36": "qGbLFFN7HoUWJtUWPjVomRbTB5x8xvbwPRNyEoZaz1FUDUKwvnUWwx2eCdcngj7jBu6cfFwHv7VSaWCJ7hxc8KM",
  "key37": "zjpsJFLzzm644rvDHj554fqLJ6j1TiofPjM27Ww3hg4z8PLR1YVsRyHiNZXDn4Dqx4bdujsRoFSMHdwy4FqMbsc",
  "key38": "58Rd1QMjjLKvuZ6kxBZmPnYRGAGRRXSPpz83hs684P2S5kg17it5tMmSc7D8nbAhiyYH5DQZxPft9iapAP1aEZAs",
  "key39": "aHzHQzBJ9cGQH8YJ9bpAp9nffDGdwJgUCGq5jPh1oNba7D3jtME1BHoX31KsgnAwRf9fgSfQHup8HdCWUWGJCUo",
  "key40": "4B52bz1nHmpkFbySerLDcqCeH6TxwRUfxxA2xKH3uzmRWQSKf1Mi4enZHMTRh1pk82JgtMgDRQr74WJSQSVzwtGN",
  "key41": "4MQ7GtBZYPMfduBZBYcPbNx5dF7T2kUG8QzHV6PPFPHUFouzfbBCKRrg4AumapBWgWRs8NXFunTPag8TEzCatPBw",
  "key42": "4YeNUKSQaJ9odbCwNzaKN2xxdHPBorsHcudGUA4dpY4nKXGuyWD7dBxRT9WnkAKExSf3P5Doyni6w1aHTS39BLh9",
  "key43": "GqUyMLqEMRuHQj1WJV7khnHuS3Ug7Fh4i6VTSLYu58uxsXJpTU2ggBENpnwTAnUqpW8dM8vxiXhniaqHaLJd7sV",
  "key44": "2KKgzgME9BNLadKKoYCusbU7Bf2Dzp85vUJbxzHWFoyzqQ5yFNvsq8imEEbW3pD8VQofzcxvs5mWZb8d5Wfs3vpt",
  "key45": "3QNLZNGSqYqfpWPA9mqdRCbsyVJEJYDXDk8rxT9fLtVzz4LKdidtN1BGfKvsdgzDCjpMzT1igyuuptSq4UE4ZxkS",
  "key46": "5To4a9Xcf3M8dn44vBQPpN65siBVi7yKWinGnYdyAwfnJJyiSj9z2TrYUBzsXk2yvg29bNLRmNN8aLs4GLA2u5Xu"
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
