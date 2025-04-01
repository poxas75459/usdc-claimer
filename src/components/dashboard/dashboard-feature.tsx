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
    "3LPwSvxHbMu6aZTzRSsSWUDNBvYJUoXiJpb9RsLZnRzgggKENLPAbwbmoHuQ4GH1BB7jjYAV5uizXKX1DMRNN8Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipDR9R6sapm6HyJrHTrWod2zdSjkGpqgsw7RXc5QWPqC8L5XonMgqfkCLeSEEDETmiJD3WCbEhhrtjMe8ywhGNn",
  "key1": "qYV7emuuMi5V5nqLVC7fHCTzNvA3hyZiX7dk2h3PbUpUAbwrZPCYfmZZkh1t3Nns9g9SFDXrbVGPWH8bATU9DHC",
  "key2": "2aNNAQAydC1Vsa9BVPHqkXPLKgwpQRHSkdjFY8pEAy2qcV9M8ByZESH16FDueGHAxasqMDuwVCyUaNdD9FFY9jAB",
  "key3": "4QfNMqwMXfcejk3pG8xvALthSvKWgZpwN6QM5n9SSZn951Byi8rPN9virjZLLiGDwVNddJDv4dmygV8iSE5JuxV4",
  "key4": "FELa58ZNEJUmBMCjYrc57azekykRpqi8r9chqY28Lsg8yXGQeB5zDYDiMhtYyNmNNLLmd2F7retTPoUMfgsLfpk",
  "key5": "4UCwuvpAzzXd6PufMsTjXupTxGeT3pLBQZongNnMMsHxFdNXPUZv3w5N6cjSmZauFvxyrwatd9CWouzxVz8FhAyc",
  "key6": "5soqbjM4oAoFffripDzNMewe4XupCp2kaFKja7EBEBfqzVypRWzGaWAhGzwwAX1YhJKWGig9uZjurqTBJJBy4Fd1",
  "key7": "4eMkuBmYKGhYqimbJPBtZyQmsG4vght8dXgeMSZfodQ3T1sRW6wPNw8nntG6Mevan2m16vG6kgBzKrzo9pZQQ3zd",
  "key8": "4xBV3pSrwWr8etsaL7f34Spb9GBFLJtNhbGmj5P5PqpxMgbUWEiDNVYTwSkRnZZkTxxmD9noYuut2T1jFq2bAJxQ",
  "key9": "H4T7Ru1u6ETfxBnZYjCHzDsxr18BQRiE2fjyraoZSQaJ1nFZfMxr8VKzqymTCBJCUsECeJMGYfmf39z9jiqb9kQ",
  "key10": "3Hmry7Zaow1m5bickZnoZKDhxxqxNbhqz6Zk9ZuRDbMFrYE8RuYizzvfP5pRHdGvNwMKX5KQuMn7bVLek5ZDXonk",
  "key11": "2EyCqLD91RFtMFYBwNR4yDH5QtSBFFPv7MmZxPXu6YL29ffJpNvo7P5EXoCwSGqbQHuzagMcigZA7RGmQzuSCkhf",
  "key12": "4sFbvq5Qfkxh1BMEyHXWLR4YuFSP1RKHp6A19eEGJ65WrKr2CVVpK6sQor9ovo9Lrb86dEbvwb51t4mtUG6rLUkF",
  "key13": "4ZfLVQTjjfs8ruhhAZ4uRCaTpSrPEomjQfUtSiX5Dg9w5AHTMvGFFze4tY4ESmsCYoFf8yM7K3HV2rgKTUaJvXbN",
  "key14": "1HyvZU6pese6NZ3gkPPJ32cUTVLk9eZgV391THc1LcyVm1v3E724hQJhcejbbLbMe4DXCzb38szPmHNT1oPWgGP",
  "key15": "6586FaKWSknTUhBFiSuyhkeLNYTLeJnr1HtGHMD9jg2RmEwAorph2Y792sqhbdNKUkGYXFexhFoFrhmoKVaFcSt9",
  "key16": "5CykcyMV4WaQuMwgDXEbrYotHeTzMmK9mKKaC4igv5efoiHGTj7s12v2zFFy3xQBJAASbsAjCqfLZZp1X42a59qQ",
  "key17": "CNq2jzjJJvzEmfRD8xbKHvn9c1AJR8MBTNvH7UEhQfUTwjBWY718xMPKdyp5BA5CNTAYB7c6QKVBVgbWSUwJwrg",
  "key18": "2o9ZsgguhV9YPq1npm6XAHRHU6NYou7V9WvH2qZGXE7FP3yNSBbj2CeG2zgRw1Lpy8sAv9DdrM1gqqkpJGAdqpGr",
  "key19": "4jezDa83qwY2d5uAejaM1T1VBJKifi4qxGxf1vfpxA42Fk244bsA47wegZhDURPJryaJLTaCS5QTH285GXcU8ruG",
  "key20": "3b1ake5Wphg8S7SXae6QupwhzXmqaB7QEexEt7WsC3bSUUWb2S5Se2pomPCDh4MWdPFRov5cyLZBidZagXM2Csev",
  "key21": "3JDL2vjq3qJ94bUpCWjgoS9cjXN2ciHyCVR75v3LNkB6b8qY57k3aZ82METUnWYND1JAZeDybNSBsU6NrmeinH4T",
  "key22": "9dEpi1CCfQEnjKRTpgFhf3E7eSJZq8YEFeEsRN1nrb72Qi7jUKvvmitnkrD9y9fd8hHdqjZcUvsSeRbpNkWtCQ8",
  "key23": "VA3NAEUbWGeLXE8cJb4ERr5WAevQApkbVqVgq7NoJGzthXQ8XSGeMHCEYgj8krPGE1BxjHvmu3E7JsvrdTS2X9C",
  "key24": "3z4QcgVT98S72FN8Zg2mdrtEzAWr89ZEuaM1ftxa7qzCQSweqVEXVrYwcs4dRGCey9FXp2zeG5H9izrgEE5zWKDF",
  "key25": "5BkuwnKDhVZ9Zd9WTeFyuKfPGGBZZpTzTcEc5DCFf8g7fzXWGUKPduGgDwXbg62QCsf2mX7edBXZTnffh1tzJJ69",
  "key26": "2LvyRis8VRnc1GRV7b8HfUP9FazBXfkdqG5tixB1bhMdxthSz3PFPFJwCbXtJ3TB5RsFwizbZvZP5FjVE96K8SQh",
  "key27": "2hBA4Lk5kUsPUkPb5F9wx2PcGPYvLjW14xHqphUD2DYWRJfsJkF3FpGUN9kQZ5HqTQCysnWeFiJwkgTHfMPxut72",
  "key28": "5SP3v2oxS3zG4syykAc2ftxfdFWY74tw7A1J7NpeyfCckCcYYqQd3ywixpc8Wt63BGzUVEDA57RsVcyXqiZMp8DU",
  "key29": "2WBrDnZmQxsLtJvcPzQGqzPRDFyyeWGZdLM4UuPcMPP2UQH6Dk92fdQBNoueZcmNEdaiPuM61ucsguMA9jmtVCNj",
  "key30": "2UJe4hMFw5RieYnKtgELaZML9X3XEv6d62vpsLv2y3JR5FW5nby1SYFqvSx5m5d4t9ssbaCZNuqCQ6GDoXF391km",
  "key31": "3yaKT718h3iATp2Wrb7MJ3SCFYnBUXHpgg7Xfgcfn6qMxKESBuBrEh4YFgsFnGfu7TUB7k4H5mk1T6EMpgW1LtQk",
  "key32": "VNL23tVnKjiPg7tcnMjacEKe6zGj62WXPh5f8LRxF9RaTcH9iEb2cdfWMsfxvxR44GPK4dLRgwu5wmbUt7mjjF2",
  "key33": "3Xurki4vwtpg7CdPtr6NKgsAyEXBMqaH6aYDKtr5fyQHrzQTS6ceXtxiqnRenBmrgvgL3jErYkmCs9LrbBBR6kNH",
  "key34": "uCqxHnx4PaqEPHBBYmU1HgBgtU8pha7LGJgJvV7vEKXzfSfU1rpyQ5TEnt8mMDqwE3VsT91ZveAJFFbSeGyue8s",
  "key35": "2PvgxP9T9y8672TVqXjY93ZvYNN8x7xCNmPZpEhdyABEiDgzAgbBfkYAWpXtoeNwKmGBs2gA3mkmrpUWikgNCPMa",
  "key36": "59f81f2TyNa32SZJvqWMkoUMW5LwYYJv29vUc77onKHm69PXraXKUWtz6tUvkpZtb9Y4XLRuJ4x8rg4hmYDNhgvG",
  "key37": "QjYAWyHKspgUkUhYZmGUDpEHYYkuhK1RemR5ZqaBeiyy2wKPUNHozD5rRQ9ocg2Aip2ik6i6qB6sVVhekLpGPmN"
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
