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
    "2Tv4H2YeSpNUY8H4jNYPz8Jtv24RmxjJc8N4f98C2Ef4xYdcWPoVex8J6CNZBnyK4eDxcT1PP2g7fTKdPTw6R4T5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qMfjWL1H21vRK17X86PaMpbPjbaAre5tDtsiUMo81dCcG3Gp3YWtktgqHMtXTxkPhmVUs9f7GHoo7xnoWvCCeS",
  "key1": "4rD6HffzGJasATdStexcDBzAXKfNrBAqLyWrTPkgczFjT8t56ywsMppJvtXinbM5EBWXRK39AtvCkX92qg2CGArc",
  "key2": "KnFjHZyKPRMub7gARGEYupzSPHk2be8WdELHzqLrGEbEaEVUWnMm1QwxGgUq3QN9wwwQgyc5MjDQbNPaDi8BafD",
  "key3": "54tzarYnyn2cpCH2A7ZjGynsg7eLce7XmDgBb2TesztfPsBsJMXodXsoj9QswHFDNQNhHC4ZVfaV3oWHZNy5f5vC",
  "key4": "tw6F7Yav51UWqtgj3WP8AN8A7aQER6hhnFH7uCTv4DVX7naRj1yNCZFVJcp4gjNP3GSe4b8ULfjCaVYbKVmrjUF",
  "key5": "3M2nMksnLhGZ9wWMJFUQCo5zSESm1g3KmafdXBXxcF64HmHCXVnVfYsbR2BU6KMWDtzcw2nud795qsaPRMvNsmcC",
  "key6": "2aSC8V62qZJjAR2Tz5qdJe5yVQx5ZAsjavWQBixMTNbbGdho5oQh3YGWjiLs2BrH96PceDLSv4p5e1p3Dxb1rfjQ",
  "key7": "2jKXgJkVPCNaFkuWWyisAsccxHvHk8YJx3dkaPdQCTDL4qwu5f87BksRGF9pe9FwegpZxxXdsRg2nXDNCsAN4hMY",
  "key8": "3Yif6BZbwgMEC2arQ67qxLYWWDqn7i7sEREg7gJCQZgEGviFE8ENwx4aNvxcVbV2oeDkdkA6i61ahBmiLYRDXZ9R",
  "key9": "j2XH7jhMDsyaMJPccDKvkP8Re859ViMvBmaZj51PYYhYGoST27Ry6BibpCSzw1v62u93BPe5rxVz9p7KgDZ21qi",
  "key10": "3UUV2yo4ah2zz8npTo8EiCnMuQMsf1D3EywXXemp6v5oVSi9t4Awxf14TDQWAQPvpT9WB1xNwiGPFpyktrbEhXSV",
  "key11": "4mCHvoJ5wV4xnudaFzZAmUfoZ41oS3FSsGWFQXTsHZEDCvPrGcU8WBMEWr7T4KZVGW7fAMMtcT4Z4X1Mk4Ah9tUD",
  "key12": "ogQpfG4LrJdx8X4qPASSVS5UdSLvwsV8KhPyrWSKkZYBdsGPNyxFG3zzd59S1FJ4WdjmozFAQsU7CwQQ2qkrKRf",
  "key13": "ifa6NcVXvjQZ6eJWkwShupSct5HmcL2j2dBhHEi1YDYMRG5ABRvpzxsRdq4XvHX9jbCS32NX4atmymQj9NdrmXy",
  "key14": "5sqCTvhsgvtrLMagkKSvYNyKWjEB8s8oDNTav4K6jw6SPz8n2xaSej7tLgfAjoQ4Rr1DhPJ9LUucW6WWAXyUXYHz",
  "key15": "HZUSzMiZAR99HkVXsikWXJiWpYSyU5Y5oKNFCcAzubLCPx7XGx5WHqtVCQzMhVQruWnQLAL9jimkiRmPk6wY9M9",
  "key16": "374XaFbi17UFeHUpHMTJKwauJMbAp7rFmpydu3gQqnUtFPmhdCNyvn8S138JVdDngyofyq1wJ8S32QsZDeGye494",
  "key17": "3QeUMeX81Mw48ejg83ctZB7L66V9oBABw49roemWMpC1j85quQ5GovCym4QPMgEJoLeDczShncBBRHmbYHsnmGu",
  "key18": "4Po41aJqS4E1kbVh1fFS45tKBPsptvN5mA7TC2GnY8dHjgkq6SRgExvTCeKQSjyGf6arYA8gnbsj5tgd2VpAoBvd",
  "key19": "5T9s6SX5DsRcEW18SuZ9L2xwLwU9tAp9wWj1GECBeCFvqo8VkSsprnLrYJnjBCcRYtVRR1kXFMQJxXrSxLqjEc5J",
  "key20": "3ET8e1kYNQWHhub4s8vTxDxMX9FEFgVkx59dvQjnHA51aKSmtoQW9Ki1LRJPU238J8xJE3ejnGg3VNEycCLjHfQt",
  "key21": "JUaJBqen1ZN94R6Bf2Cb7ZvCoPm51KSUrgJBeswZ9pcPXU8mxotrAL6N7qzP49J95GhM2zo7eQuTQrphDgn91Pe",
  "key22": "3VUgdQ3xrZRL12ojZA6axhfSwmVhnSvrFhMqFRxy22pFbhUyHk7VEiFsG6cjya7HK98wqKwYJFFwCy9Pjjbhmbwu",
  "key23": "vE1NTKCNbLCLkSLDBAjW9wpeW9Nr1cuavaNybJvcFAusx3pn5rNsee1b3jFHBtoNT11xAAnqCNDQu1gUBAYym3P",
  "key24": "5fyaCwGkhpaCBVs8rKgexByZaKgqhpv5sJZEYBbAKPsvHVtFRwtFXRkUivbpoZuphkD79J3c9Nszkwc3BRf4xs5v",
  "key25": "2E2RZMhpWMd9v3fVPn19RPDvHoNJNRE8iYGtizyHVYyPconRwHXyk88kaQaMTRe71RZfYSjLXadky97qrrodpSm3",
  "key26": "4GvzzfNUp1KMvxhdttTtp2mc1tyMWfNpacJbrZTWYHWJY1AyLHGt2amy4qwaxSrchxZ1NeR3CgZYrNC5LDK9AkuH",
  "key27": "51zBoVTSz62DAMa3qXNrKAzKSkPtc7bt4njFW72DogUHtRLNq9MUVF9ywgn3ofjXEqJc1ca2ekWaNDE3USfugud2",
  "key28": "3gYc187RZQkCoq33vgY8K2LQcgD8YUv8PpTt8h59oLTarB5rKmqQPBtFCnYQQA8DYmYfsU2jWYwTB4PCF5GScZkQ",
  "key29": "31RzYLCtUUgQYAyhSpKXe2YVsUM45PgzQvUst4HKNieyMDGFaHKX5DouCotAiAtnRAzz7QiBK3WvTsuNm6sVF7dN",
  "key30": "rVPZSXmpBLjfkFEM3wg4QDGvz6wSLbDSgZPPMvTCourGUDHhqmoTpmjZqWgJK5SabYxS8gPJiD1PpPceoJpUXHF",
  "key31": "5YvHtgUsn3UEPEeT56Zh75SgmDawKypaGz1yqhmsjVb3dY4hSHeG86v8wWJNMhM3wZZUMbeftJDiPfxbpk4h5Sc5",
  "key32": "2Pa7gD16HvU5hRq1U3bQ5i17Za6yyAFRMKNARJ6vv7XxbhSmgHhkxkcnDvmBYfegVD6Vvj4H1qurgPJXPaRcRMX7",
  "key33": "5eASZt3MrFKeorC8ojS8zXyUQeKWjS8M3XYB59LUcRqKuzpHGFLUjcBJfZ1V6fyccnJcFejM7unNa38UVNhrGcgU",
  "key34": "2SdQ17VR4tb4pFE6AL7HKVnaFNuHTcHnPLifCNkKmPXQsePJ2VrzwwE72zUbJomvyEUj4cbNJMHiutrfydzXc8ZS",
  "key35": "3xCC8SfSr3eKtnJ97m4h7FXSMtyRDzstNZrEsY2Lu9Qf3J515dJQzS7osxbuCaNsGBTNuuPPZWKmZJHEb2Qo6kto",
  "key36": "4hDuMb2sJzrHBZG8w4ZDhDmMxEUF6aj21tSqQGyFab4m5PU9D8RLrM5qVLZJxW1fCMPkK4WkvEC41NvQA1tmqvpU",
  "key37": "425TBR6SryM9r626E6jCf5oxXWSqMAEZaNhkhSha7daYwrxN9HLDEo9xf995qFNSdyTZDnHP2gqt23nMAPisAFhk",
  "key38": "4zNnsS2u3SPrF3Q69ZGijNkbRHy6Gac3hP5id1GDKTjD4v9TUkFChGGRAs9DpBp4iPA3ctS7auHHTdzYiRR5XRDe",
  "key39": "5Ya5JUTk8hK626TsdaUg2X6u7brxhjCiVETCs8qE714XdvtgKMkJriRR9twA6r4YdDTVgpvwLXJwmzxNF9WhE6J1",
  "key40": "57k7JaBFyiUw2rR9gPVYtFf8LGw2Ja6qzjS5ZNxKu8Jy2i6gRbS1yVPJ4raVTdGLVPU7mch4mPKBqVPL2dAH1LNV",
  "key41": "5vFiiAgBNkbnYYJDEuDnjQTPoZr7Vx9yGsgFS5a4DTcmv36aCguhvKE5L7DGpWrC8GJxZUVNokfyUN4NbVmps8go",
  "key42": "3kQUMjAeQCemxgyPqPGKwyWeZKTESDaz2osaSrEBaBYpRoGXXd2pNG3QKxSnWj9DdYm9sts7eirijqdhjtHBxXLE"
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
