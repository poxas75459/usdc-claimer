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
    "BFMt1TfqmhzN1o9EHDdmZvcsLEpYd6kaHUzTdeTQEo5v57Q2uTEMSHS13w862Ct5StdiLg7QPn3uktsYT1mHgdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29m6geExHjqmJ4JiJTwDsPkQGfxGogtJhVbeKEYYMfshtY6P6iW7AbyzTgjzesgB7Yz6CjxfhZNzvLUPM5fdEYoZ",
  "key1": "5fBFeaKbyzrGgguAHGrqZR644BSRsQsb732GeCLLpnP767M8QNrMFjqEXvjtcGiyKEXVcbSds4MRcXb7aXY8hgvL",
  "key2": "Bx3oo2EdpWw4K1XHw9MsJ9jU4cuPLAwZfZUha5oYuDkrLpg9JKQE929Vft2MXoxszS2fo2aCnvzgp4eyNQAJPqi",
  "key3": "5p55oHpKTiDf4BpoRLDS2kqhcgZAvCpWXitSfUqkLaBdqEeyusepyAgEHNSwjNezaUnyFj9FeFwSpRF2isfnT5qh",
  "key4": "2e81PcUy7XqfcUhjb8wEzxAXtyzEZMgHbEvvXEensi1Jzk6Mq3J2R3xGHPaf7x4dUSMBk421irPwnzsnT4fxUQQK",
  "key5": "2k4eaZmi7bcsNaAnAkE4k1Aoa5stRwidGGL6FM4sLk8UQgXN5TkvkNoBJRcDX1goqPWwsN5rXrdvgX3DLPSLEZZz",
  "key6": "3QnZCt9Qfiqp3PrrqUBnpjZCMerWRK5FxSty37pmHyarECru1KBa7FKMBgn3CZRAFj5fphRARrGyhrFP6hSUybDY",
  "key7": "3PXUBU9w9H4T1sYTWnMX9urzmbqz3AgHa2RaiFrCvFtWKPWsNpJG3Zum5u22vxipakap3m1iPQP2CoEnCtBbNk5Q",
  "key8": "4Zrn1XErGn1PTP28tQkh7MJDxe6hKxjHNZbH6u2JmuFKop51bnAuRjV1ZwHPQjvWeFUmDabiqNG7tuuj3XHkvn6D",
  "key9": "29juTRtt4NG43A9tUU1w4E7gD2PhkpWrfLJPqfuHdhfJkA7tCy8kWfyMSZugDAPvordi2SKNEpSUwwSXSDTzAGNB",
  "key10": "64FnVZiADCkbgv77Xz46JN2m2n4Ws6vFzS1K2kGhPiE1kKFU4JfeNBkzKWEfULazC1e8xZaEQozXt26tDVzHwHhR",
  "key11": "Dwpbxgyk9zWoVGmQYGDVhPuZmfRz7GYmuibMKAQRYZid8dEHQxqM4N38C5FzG5rYcCLzf3F1wXH25A1cFdWrhQT",
  "key12": "Ek937m4EuVjMhL2T3ViF1Wm8dVeG4DXSiYZdV3FWEZqFn235PjheBThJQVPkGjq1Kb1CQwo6ZFjrQSN81yEAeKh",
  "key13": "2Qhx8Yfh5Fm5czN9FUXrc5XgVoU4UVBPrFbKhuedx3QPjXt6zDT4bedGdZy3jcxitm64MaCP9XorH7XaYUvXY9cU",
  "key14": "2oy86tPC8PuHgDnhaqCD2MEJLqQ6LnF1xDGpFqui9g14zFpouKSdMQEpmGrHmVgP16sEd4GEh8ANevADPS1ncbQN",
  "key15": "2Z9ncqWrEmjDbWW4sSzxfyGASFaAW7KjvmHre2L1u5NkCdJcB8wM1j7so73AAg6cCkFS34MWHjdSfpQXGTdW86aW",
  "key16": "53ZVogRgkopfc7dRPx8CH6a4RLfDdSjsJuXZg5XU4xKWZ9bqTBARUWiUbsL8VAhFM9fWU8jRxCzGg7WMBnLKcURw",
  "key17": "23ftrG7cmRxTCoPwaLK4EcHhQU65pnyTTbUrw4s54aBh1oPcuU7qe83yyB986xpCbZcmXxyjTiCC2cfYiLBnFRkp",
  "key18": "45AMJCjfkBWeMxjaTTE71GS25WwVA6xKXrRSfunHfQNUuGyvTRyn3HDaFBXQqYs6R3HuiNxmhz5vZ3qZu8qPab14",
  "key19": "4wbwbaCAN5W3MownfgTLnbbvCKpxN6yTYe1JByPqmvnbjFKCWWTBinGVKSVJCgojQ2frtVQcnKpEBYUrddhb8hih",
  "key20": "4EmfqAph5GmrbraDMGPqgSD5H4mHyVAQtRVDARMDnA21rAeS8N6Z83s5r651fiqBpE6Ze4feNSs8wftu5rkQEQLq",
  "key21": "3Du2htAEDSUt9JZBjKrpWGpuZoCweKXhFaAokMzz1XiWpLwMo4yYHj7EMiNt7uqtBJ5MbVwzc6anH7VMkn2bM931",
  "key22": "38CVFqTLeRMCr1xzeZzSiqPXZaigqnZAKUzy5UpacfjGibQzTeR994GJUmQCBZtVs237uKKs3ULL3xEwfWPgxD5u",
  "key23": "2aVWtDuQRoVqSw3BbgrfzZJxAXaGon9q7PCJfNZPgnNaUtoh3pB7cTK3ryj7V5jbBSy6P9tar8fww3L3BcJpFqJ4",
  "key24": "4iSeJYyfoQamh3taXZ6AS69DU4ZwG13vYxXoX8zbFMN9a9Uxe4wcVvf91auKawy4ckJuTJh4JcgLe6jzmGSy6GUM",
  "key25": "SMs6kJvZ2PCD9FC7XuPRnsZAvk2AWGdS52CLyoS6cn4CnyACHwWgrau8cLBZFkpk7nDUXxxaHqSmALi9H4D7awq",
  "key26": "xUpNzMbtrksFQoR9iXCpbbxmQFDFVh6xQZ4JqLZ8N25XB8UkvjqGBXm3S3sUow1j5543u8EL5VmzeucLBnha5bE",
  "key27": "3HuXmvixQes2YpajE347idhDruwvsoXBixp2MwhPdgBjnV8rAg5hsVQasryzb4tnXr8bmc8qHgTKAgZLSmbWXMcd",
  "key28": "5XqjukmuDrxnDjy9UxhZESAt7tB7CdCi8qM6WTf1YEz2dFUrCa9BNrbHSkXf7UMyJ6C6Bsa7uSsDGgw7j9ZNh1M6",
  "key29": "3ToSH6qWqBKP87h9PHXkax7SjoNtKLZabsuzVTdvcKpbPk3qnxhVQecS1ULdtvoWTvUy3LPHR16vW2y4KszB811z",
  "key30": "4jgqX7ySbjYJPrZdov4L9CEYhhzMKqnvv8qmAaHJeRJ36eetKWJJuTmM9VAYs1Qg2WTtgTKsGrxG7jWs862mtHfE",
  "key31": "2Y4s2EhBPyd6CsPFG3T4LaowY9aSaToYaRcgUSXx3KDS3B5N6BcozEU5NxJejbbXx9erRs4bWgTvsXoStYmHsc3T",
  "key32": "3DiUvJpoGeoV28FLC5XQ94umZuozoyiEgnMaA1vAo6N2e1uNojz2SkG6HXHDyLetyxRg4uDqdhJ55T6sMGetfp6Y",
  "key33": "4VB872NkVPqRrKiMDvBCcjSQbgNDdJ7u9xvuWxxhWmjVZ5gPVYmGjDKKuK7vp6P8DK4ca9XKHuibrfVSGm1zX3Se",
  "key34": "49rcHEbaBH7tygBLQgRdjGyrn5zbVRwA8FgwbXw4YK4HPSbke1kvKNsj24kUmAQQCG24FTTcp1MGRKKv42jDz2MS",
  "key35": "67qZUkWy3EGgewXXXGkHcK7oci3maoUmMmY2HbeR7vK5VaNsaZaWSHvMSbghoJosNFTfdGuYQEAbTubfegaHfyaA",
  "key36": "5fpgWqSCXrct7ByUrRW92juiZXF7YN5NMnYrMem6nCx6uF1hxDn3a3vcbDTgyboiu2DG6FvuSdjKnRETNGBR5BBG",
  "key37": "3kRpS96bB3NtVGZ2Ty3Ljfnfwfyvn3YUeTf1Stoh6SGsCKdwnNPD2x9XDg7VeTYFdAUyDwE2wUQg3j7QJ7gxG6JR",
  "key38": "4r29C6SGmt6QrmpeUTmNCnfyzwXqesXT3YVA7HfT67zAVzqVwbGBUBoMMuAubSdBHeZRZQ7bSKEvqNeB3jB3HgSe",
  "key39": "4JgqSNvxkLFaT4Ton972L85GUvgZwgUKcs2P8SpCtFTxzoZ6wBM1FbDggz5ttUGu712X8Y8rShroxpj1QvijSokA",
  "key40": "3uTgUYhrX7FgZChB8SkD5VqR7yJjpA7bYc62aTsMd8e52Nyo6tKSCsxav8amafcMSaCCg14CG2JXwRamk5qi8Nos",
  "key41": "4gxhAn4nVJia5VmW2rnNAFU4HMmPHtgXYQSzYgqWxDdS8HemhG6fBwByuWm2dTot17s6A8ibwbKWTpT5Vhhqz6jD",
  "key42": "5iUvkcJZNrWhJLe2q8MD2WbVV3jGZGjh5Y5mJewSyCctTiFRbvYpJzM4A2gQWn1qL1kGND7w8oHQXQGmrjWB9NdJ",
  "key43": "2hqMaQJzjF2L3Xy8z2mHzTfDHRcrCJyTm2R7fsjszK9Nk15K88iSn9hhzxuCCWc5ksNAPrX6ySRxvRxWJ4GKH35d",
  "key44": "4GX3pPoVUdi4VA2GVRoKeV75ei3EzUUuQW3oVFyiGGE9k15U2Ujmr13nGNxjFFWC54RSwFReY4NnmHSAaWiuMrpU",
  "key45": "3aaRPLPVRAxmUHJ2irEq8GpU1JXcpXyxX1RH5sXhLphgDCo1PFVUUa5nxkiVbaEnDYVaunss97Kr38F26MmBEbfF"
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
