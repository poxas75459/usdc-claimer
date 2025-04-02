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
    "4skZRRGo3zFjh96oFZFLxeWVsUGP4Zhk2h34gpKyF7ipwxqKHWttXXAUcLWFYT5NDgyyCdgMvSbY7WiLWkf1B1gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7SkiiSswq8uCYskRcNVfTc1bAidM3g1CUYexMy86Ruv795ZwmHHpf5ysBpieu42ynCzwRbrCynDtPM3zcEFK4o",
  "key1": "58LA6BKHFwSQc3jyWW7f4CxDXgxydJYJdu7uHUQ1NqP4qpZy9jxRvUVvXxsjLYWTjpXzqqC17fey7A66ZQvB6sNx",
  "key2": "2DCw4JqmzCq2KVfonD4WMbrxpzTKcHbRjQb8i6DXrWa5B6WvyiKvvswkiR39pJ4Jpig49NGRYBgeFqVP2Gmye3fw",
  "key3": "5ic4qEXFmw4GiTqReY8fd7JLaupXWGhvWoDxxdyQHLkMkPCVyUahrGNzRujEqt6RxpuJx5DbcGmHVwPkhhARx88H",
  "key4": "58vRZjvb4ATb19yoehDi8EWiXFdUiZq4rbEqCdZ8ZxQWw5Gztdiv3Aje4sNxqwKQJHbtH2o9HBP1SGSZCuJc8z6b",
  "key5": "3uT9Hg8QgLK9JXkBf1ReCyxe9cZeHzGUpkacdCq7MzJ8K473UbBkKNpJpHDVkWULrfAPrSaMmFhHLiF5ejyBL3MV",
  "key6": "4q2Xkp9Hjcny3mjzqXVaoUu6LtEfd2QEqPNAtm5hNh6aiVQX1PCqLUcmV4tG6LUWCrdaM5MWrFWBofjUZucHoUhp",
  "key7": "3Y4Y1HWu6MavUNdmt8PanvXk5GWEajZo7FKwX1ptHQZuPGDFQkKVhF7VRoN1btbGEfx2ZAQaGwuh6g7CkjTCnCtB",
  "key8": "UZtxAKHaEqnKr6aEsFVzdYTez2eQFyEh2Cwtm4C1b764eXNRqHtd1heBxNXt78DAyTaVEdsrU522a48HuU68es1",
  "key9": "5jzeojPBdJGzVZuiP8XwBmhZ5ahG1c5gwKQWiwxvpKuJDtdwKefgaTcuFoJxvDVirLxxgVCZ56oPjr9sdHutkprF",
  "key10": "24gdYa91M9k2uYT1mnyqS7DXpD3xWhna7E8XD3EY9WzGjYZs79gtMjNvhDJC9edxxzZkuc36sDNrq1GPfFCH8ASz",
  "key11": "2gnhxLXPgG1K24LQpeFQcRhgj9q7ShRdMCGFd9L518WH36VNYWa2QGYzpAFBdQNX71RzSvEURj7HTafd1zX8Zd5P",
  "key12": "FhwfX1eAWqMu46zTs1BCCFFod2Zo6APc6Q7wiU5S1C7W9G9HSCu7NTCWCTnGwXsxhmrkgAiSyskipuxHdqaCCAa",
  "key13": "5HmUCxfaog3CHtMTb18Ry7ececH5DHBLndgm8YFRxSkkpX4ujuc6Did1pj6AfRCKiRqP8F6kNRw8UJAby1TVPYjn",
  "key14": "5hDW9iHJeAs7EWfjrM6BE5kN35hKQA6vTJUgUFdNdnGAshF4FkZesCnm4mUHLAm62dzufLPBLvdwm8cwyW1bTLav",
  "key15": "5rwS2Jh1yVC2wNgvZhgTbMFRcBoWH3UewkNEJ8tqVtDsV1mtsp9WWyDfmV3UBQzQK4dAJYpukZVpHFcUWrSDZCXA",
  "key16": "37CXMfUsacsQ1j3Fzn7qCEC5KrELJtBstNTA1oUPsttLZ2wJxo6z1CowvQySADDuRreCVeF9Z93NfRPaLtuQA67w",
  "key17": "4MpnsYSWGzResiSvW1usr4dTdAM1Kg5qhvz2QMZQBC2CxMEENmocE4iX8bufDabYxYydntKaFv2jbRpTDpdoTky3",
  "key18": "61MgrQCXCacAuH4BEVXYdkhuwzKGZ3JqhCpqZga1HFafswCfTZHAAavvZtUDLUBUKqxNfaskMHRxPvEm5sMryD7o",
  "key19": "5qUhzomZwMrSiqZ4ryrgucCPpgQ3soJPUWg2YroekmcNQYt4NTaPBaBySZfHj5vRmHiK4kazKBr1uT8jzMar5XqG",
  "key20": "517a8dguScD7mg7DvHmFwczagG6HCwFM3WCVqRq61oAVVkn8mpKsJvWPq5Den3pPNPSBCps8tkspZ9XE7BFWbKX5",
  "key21": "4E26r9BzVskeCYTucEEhMUHUx3qwnAzSbZuQCWfPtPw8CASyyKMGhwHA24jziw3HRo4tFyJAserVNQmyviHQDgzr",
  "key22": "2VLNwCuiZhG2nh66E3JTf2U1bwmU6hmpeQkYUvN2SNt8jL8fswBuYyTEkJw8zve6Yucgj5uTZoJVJRaMYniMxCfL",
  "key23": "nXn2fwGJnih9dBrSWJufY1jUbX4ottyDBQCSpdAgtKBX6Ccpyh5XdkfVSnD2emwUuoQhjjATpi6ufQeNPRALTQv",
  "key24": "xVEp6h2ThzhXxWrXSLHeL5hShgR2dUjg1PUsjUDhkherwGomH7MgSv2w8fXS5Yo2VinxfFm16RjfhUnb4vcVrPm",
  "key25": "48C73VXN5XDKH8r4xp2mgkvuaaWLhgjQj2zjk5WnNtwvfwvBXRji3p8qz5c3rbCS2U2CGYHQoP7PfFNM9c9dZhxK",
  "key26": "gCYybkfCKe3wX1qDEWCddqrV22T8A17rbfDNRm5ERGRX9HcF8oZ7141BrJekVixRGyJSGqLSFhAkbXjFNNmn3Wp",
  "key27": "52ijTd74Mc56udBVUki497TxUj1715JgHK3XoozqgRHxPMHJJKhfZQd76PSfwHvpQ7ReLVuYiZxp2vSSt1uTev9L",
  "key28": "34zbaCFA9CVd6h6Uwp7aky3pUxzdatBoPcUbqCY9uGBV3owdnXX853Zi2CxYkzirrduRYvaAQcxagBKVadevSdSf",
  "key29": "5cZVJ3uVVXdE3iENXRpm4SFPoKb8SZL9wFGi2kQDuXiRCZHuE98PBiydGEMKgvgGyge15fEMZSqtrb6MWYVDXDrQ",
  "key30": "WvLPADG4mhWWASDZYwrkQSmc1H6t9G8dr5baZSy7gMskcULRvrNUTQF2vX1ZEKhE3yfJMyfxpfw3TfadD8MFUxf",
  "key31": "4Y2XzUR4PYSJa2cXQ7ukQzAYQ7KbR4V7DKHUjED2o2U4SVsif5FXHygTvPiAY3N3pHEzNQg3Ta7ae3vz9ZZAsfrb",
  "key32": "5wdiP1L3VWWycwwD1FANpMZd7CsQnE78WiHBHKPCqkDGEt5Q4yFs2TB2BCg7a5fREVjmR26dBNoarX4fu4ATrb14",
  "key33": "1GTZiZdBrvJg4dWutUk1ZGw66QNgRQrvDRPP2cLwQTFUBaynYdz82PLMgvutJBoCienzNp9UNibXrmXDjvkj2QT",
  "key34": "tLWNRFJLCbBy5f5PdcyQiPUXGmyowNLqnF1etw9H6DnRwShtK2qXH34rf6nHsFSMDP7dxYWq4zVho11FDAD3JtG",
  "key35": "2h6pRPTnWE3CiMm6FwEYG1wqQQyPJMC55DHzsWt2FCNbSTsfHbcoaJ3SSTp4SXSiNntLvpQfCByuRRqRBe74hEgK",
  "key36": "2EC1fcKhZ8C9skaheKVBEKQ9bfZKUPZyw4za1HHyf5gmBLz3DJw5zqZPdy3LoqHcqt9WfBU671zkRMcH5VVe9SHx",
  "key37": "64Rk5fN7ZSMmseev4WGqsZJ4E8AnrWtCscerSvrh4URoKaYBgM789Lv8iA3gZVMQzhKB5bERCuYVjb2S8TdUaVZN"
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
