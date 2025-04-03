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
    "2wGWT169eWLktUeCUBiWBAjxAaE8eHaa9tHrLRLWDkDVFxmDDEj7JBFH2N3RbeXfkwEQqpji1UjEorJZ92wgCh7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiLf5nLpWWoPVxd87v167fwPTPV2QYefkVCTEr4wPk5NjmrjrSy6TPdLP1XfCVEuoLGCtwJMdogdN6NAX8uWGBB",
  "key1": "WKanpWcZfpmNhBa32xjHnRqhDTNfueobU6fd6ZN5sVxR69oBdHeKgXBuansvX7D4uXApHRtiKnTKNBn7aZBRr4t",
  "key2": "SV3euAYZRMvMUW61g1mL5zsr6uryiXYgpTrZRVDfCoHojjBdL5QzwCiUX8jQ4NoPibcqmi9mQmm4Ku5kng6wGWX",
  "key3": "5RMA7MXmippVvbSEmf6ckdX3tFemRWiLe8qiVQF6ZMMrtgytwM9qQtns69unnefkmF2CXVJDnbggDDYAwZZ73TyC",
  "key4": "5P6ASuSxPuZ3fsCH4d3t3pD2SJ5DRbkQJ4wE3mQN4gVXjQisptVVPQcnUB2A41XvDaQ2u7LV8MLEa7PhYJMddBKZ",
  "key5": "5WFG2NJcLABxNxTWUkkucBy37YePADsCxW1S1VAohWCAxt17HnPhyFrDVvjHvXFx4twt3BesJ4u5nkKpQMFmqtG4",
  "key6": "55zEEfzrV4Xdyp88Pm6hqgiavV4VdVzA9fVPYa7zs2wSUrekT1GHCcG8Tn4NbUuBXmE7JNWyRGyaeWLMJooxrzDe",
  "key7": "281vXH79sd6MVBWdGEgqb196GRL1XhFH6nb7xQjojFLFjp9WMS1djABx1u7WssXWndGqqnw1ZEwcudbJXaLR3b4a",
  "key8": "3HXh8tdTpzm7AD6iKXDbd7zCMhzyyFBrHTyTGFp4AhDWyAp5AwzWkhxbUo94hvW87ZY2ZAvJVTjfk1LWN8tChgoW",
  "key9": "4Ds3yXj4ysaVGPw3mDwJtuDaPwa5377hpiTtRyJZvPrFR7LZqpeHRHLCtTBEbAGCXY6mhHaDamjdABiVkBP5HBZB",
  "key10": "3ctZFyMFEqWtbkzPEV8QwfUCXCcsjZYdeMseXcUAmWenW6g3CdtM916PZKHbNxPM2S6GAHi3oXSzwderfEA24dmn",
  "key11": "5CvTu49Z81pxpqW9Zz3DZc9KsUnP54xCFGkuCkMsRwusRk3dEmf7BtnPqQk4XAUvrfh54Xk3Lm4J6SNVUimSyRio",
  "key12": "sxHW6gKsfEyy4ueYfS23FY7pWPdqLHuVpH2CAREapfb97tJ9mrPgzaRh8Wjgxri9W3w8pCZRRVvfD4DnAuNvcbM",
  "key13": "ANVG14FYeciwKHTnU8sJr1c3VMhTFJNdUauxtohTTV3SnvAqJPFHQYwwxXS7fXQWKVS6aDLgdJmhq4kfaGAoLdN",
  "key14": "SCZxevHCNi9TtpJqWBLDmTATrnbWXYj5Jkibbm7rmytzEkVnE4i1LGWoiwCkEkEXMgmBCV6GwjAYdqQSxgJgnrF",
  "key15": "4wnW5G6mWe7ot5eeJC7yGTkmGAPwiYLYRVzFssUtNT7rzw6t8A1vRfGQzH598hyF2KVGkc6FRoS8trusEL8hhQ4y",
  "key16": "A2H728ZVKLdMTBE38PDQwYrmJtqshzgFxRQja97TPHiLAnjAbCN9jDZkCZ8kfZ18hSzmUDJtEp1cn5qvt6ES432",
  "key17": "2nwYxHdRfkvN7pSuvynKpnrDD58rxvBD5FQ2XxNnm3UEeVdEP4dGB5oHzrG1op4LJDQELywLQtfcNnfgoYffmiMJ",
  "key18": "W51DTZWwWc8WWotmfJL6WGLRJ9ekujGQSmAZy2BphaMz1wW28nSQ9GbxyyiYMBoDjoTAhUF9EejLipkQe2s4ovq",
  "key19": "2P27yhoY9hLBwfqo1LPvWjHWZWdUN5VkWNdWVAQENLka1LsLKj91pNP2LG5Rw1Z91V2R7d1AgimNUhjZq5dDhXmg",
  "key20": "5X1e8LSDY7GxK21hZKc7nyGLkju84F7VMB3zPvYusn2fbLGNrAS8bSAVF2kBixYnyqjX11xodEBXY752THTQFyL7",
  "key21": "2DqjSSAU3txd1FJW3q1x4UGy1zxBcv5S8ESSxzJp3S1pqURJ6og631pktFEAZaBu8jzM6sA7bRG2rTrn7GV3t1g6",
  "key22": "4B8EUoxzoRsCrTwfBt8A7zAJgwgFNSKFFTVZ21PvrLqfUdwXsv4eCTuNHAYTkZKg1VjNpeJUiMb35uap5GBrDtQW",
  "key23": "34sGpoQkZBenab4TL73HqSPeC74SSybAyyeTcnbfsiekEQBDrTTguFEnuUQZpRWRN7KZ5pFKuRzWtzEk81bVdvvS",
  "key24": "5xXJ1UfdoSuYjsjiGS1jy255FGUguudNhZDQ86urXZo8cJBSt6x3db6tDv1hEqm3HYHWhMBh4p8PHq6VQ4982EkE",
  "key25": "3CaXiqqQiQqCYeEng1mwmuYYor9Kt14VHUKAZBpiZ8FENaTLfWaVZPfLsuXgo1ofTSRCoEpuRHwnimYwZL3j97Ln",
  "key26": "5H3NSdJ2f9uf3neXNuakAPrrBX4oLGLLcfw8uWAHWgwF7mKozmt4SumzWxv99o93MfyjEoehwQF84dEPESZHGfMs",
  "key27": "61UYngRsYdtwEjbNm8cqjusd2FsSDY4UZCE9my2FtojVACBme4buvnPJmxJZv4dDKQmVYvSfWFBPAErHbaLtoWW8"
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
