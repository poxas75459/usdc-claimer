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
    "2aDG2DfxRZatc99XSAsfa473YyDTEeM2j4F3CnqzVz3HUCd3YQExobvysBcxLizfYTbFgQLa8cw23ABRQdyH8GAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTiKjen5dGxA2JVhJrX9MCRBhx1A9Q1PftfMPpfF3Juar7WgxsPm5pGRRj151TWQTRvi2eAuwEGKg3bLr2uvQtg",
  "key1": "8U6gWVDjGSsgz34o1wrXPfuNkoyGsUPsHhi1tbTcXKoVnDJRDPWaaoNM3BaBVQz1mQhdf8YY69BPs75AofwfrQE",
  "key2": "3D9Ajd2eEdbP2gVqDFGkoPcNHiD1Mi5t8BGmbnch5WPS3gLSP4DzE6G1ovnH71TPe1SHVsT1TBDHMPSFo7DKw5LW",
  "key3": "5Lbu8ruKJ7xRZzmcqkYcnrJ2wR47HgX8VVG4i4zFq7vpe2b8Nw4whqpBpMaqdGueNCd4qNCcgcRHd8ajacCPj4Kv",
  "key4": "cveQ9diRjzEF37RtZbJnqU5Az336PWLaAJuzdZ5ujgrULns3NjiDUr8ar1P7b79odTViUrzE2EfZkC1sxqcf5Vi",
  "key5": "2hFh549Tedu3j5LZc8uNLqHcLKakBkoX8qz8qfygmC1QSWch5k8Hx4znDEf4AZGUfAh7b8WUp1mJNatR3u2Tb78T",
  "key6": "2i8vXbqxvKZX8Yw6yZMiz3bs57SKEYyaNR9qo3DUZfP47dsaV7GGyHAqbREbWDFJ9FY7rRew1Psi4PBDnghvMBHc",
  "key7": "3rrybhek5jSZvCTiMfjyJHEkNkDTGfnEjzyzjZkz65qkVgZzvTX31vnGn9pouWfuXQ74q8bLAKCiSjrMSRBiw9gy",
  "key8": "2rQZSj81xakG2XRbkkaVWL22du9k3ZkffoYVbitorA8RbQhQe5qhxw4xHa3XnNZhniPPZPhZuB2S1NKAvYvPdDTc",
  "key9": "YnFjhLyhV2QujJavsFS7waX69FND1Ku5G43YtkoksRPGcjFHorEBEdbG8cAMgPGRsQpXfniZoambfULDfWBwjXV",
  "key10": "31jCtWMX8cCxPXEZfQ8DhCJMm9u9U2MWanhDHkhF3Cp3CCpj1AyZR1DjqBQZXEpSB4J3t81cTyjwZm91Mz8xuWhp",
  "key11": "2c2pVuqJVgwtvUZeSLgCDf48L58qZttjwt8DMDLYbjgeZ5bSpaJdcCEmkd5b7U4dX1ZBuiq6bLSAupGNTYPoLqYL",
  "key12": "3kHEH9AwsEWoYaA8mpqppdwhGkFGPDBayvMWYPhebsKUGYSWBfcMwiXCi2FkekFZrxLPT8X7GJYskkDvKHW7hTz1",
  "key13": "3m5nBsfwqRFtJgYRccqGjgW1aQoHiwNkxTF6HAGTftJ1Qs2LtnY3GYUsCAKLPJZKQjUSCDDx8fH88ZqTrXAS88ov",
  "key14": "gDA7bpepMBBcnvsNG9zL4vk4kdae2Lnyo3xmRvAMfrsEnyoQVGf3tm4PgfiNimzdX4bTc4LLanpUXDc2tTQXNpy",
  "key15": "4nBMwhioALg1ZL2PtytW6M34F7gGPqhWnRqXeo9BFJhfjKdt7y7avWThYNZU35Rq58SLmcwLGHNwod27JbpcotT4",
  "key16": "3evknASMRGmtmDXyZv5V1h8G5unx3Jwu428LUUDJFGYaEesHqmpZczqyYBPNAtyxrmhmxz9KvXDoqkrN5gcGipSs",
  "key17": "3AMgEd6tpZqTVuyMc7QwnYSh7acWmavqHqLumtnU6K6vpU9Y25SARnc8EKbS8RAoN9RuRLqSFuEbhi6Cx7DoWsud",
  "key18": "4mVKiFe47HcgvdDNdReuSwEdTV6QtFa6GrkZX5HRQ4rAzroPyQb92HcH48erbygtxPMbGFo91Qu5h8SMLjMbqppV",
  "key19": "37AVyhvLfXWH3Wjda7AcZEcJrgjZxq2YxEnHnvWn4eU9MfVKNfHrwci4SK3vS7w6mabbTudCPG53Rzsa6mPdLpg3",
  "key20": "DtJLjsC7fdWYjQaDuf6aEzE1Psm15ihnxiLaNLa6jF24WmiVXBDzELmFsQZuWkWzmp3Tr7sxjCH5oseC7dEASJp",
  "key21": "5xyvUQZSPCVF4yZscYUmendGfQABYk8ke6cBpbeAW1gbQH6YmWUAjXro8vqXBX4vZK4bQdXW6fGFRwZCa3ctiodM",
  "key22": "ZH4bnGtCKcoz5om673k19SAZ4RZ2ZdFXkp7d1o4Eh2cfX3UB75wr4ZUwC8sRkbf1ji1LmPCDETukHR5SLMmuNek",
  "key23": "yjpz3j1eoUNK4Qfgg8PeCKaDrZFrkjjespirMmebNsyxkeU5Uv7ML5oHzgaJ1e4xLN53FLSobfrmbBJfhrNiC7w",
  "key24": "3FqJroqRYgPpkcLG2z1arnPqAQRvsbwWwr2waF62xjnKNKb7HVT6UiYCdbo1ZYszPEqrE5FBs9zbgXKKsQW8139K",
  "key25": "Dmq3fpEvBUfmZfqUfezcPiE7b5h4gkygc7UMbmncU1XbWsDj8QznjwssQcGYpqJYAzJBJ2V2hSut9G1y9qVDoN9",
  "key26": "a8fYvbA5HbDvubwxXEJj6LSBRBa6pbnWkNvaVLbkqyUCQ4xQFQ3t2Z4Kf92tAWZFqmzC5SXSAnmh3z3cqje5tFv",
  "key27": "57UhDsyAZocaYd5cz8yeab6HgU7Hwqyhq2rn4VJH4a8RGuqM4FFJwVtp9eBoeMBTy91iXRiYNpiousmpLfTbrw4d",
  "key28": "2gdkNVpQSkbBWLFjLXXsM38LoLGVemEnbiytoKbjKuvRNZu3cqnjMpuUUXuQtbxpnapF84uQELnDtk8i1xdXcuJu",
  "key29": "2hPRV4u5edVZeymp1CyHwiZ1uaTokoNM4fKtq3yL9CgKeVEGBa6TRQjYsqbwcp15MzvQs6xui6GRXSv6fxnjP6oT",
  "key30": "tuWyx5zuNCRb78PKaHXVerphhU8eWzoFaFHhcvGmi3cnW66AdSwYbaXanD662Gysg1GZsQznCsc9JESuBimGf9Q",
  "key31": "3c1Qgyc8pJ4ob1gVQCqQN6Ybda5QdoWZgQQAD8PT6PP3UQH217TUshHyr9wFADNxAy2kYZDHywcDKkckC7PSfttc",
  "key32": "53pSWxEsYwysZgntUkTcc8KiXGoXNEoLcwU5ua9dGKzLSdCHcp4aXAGfewyu6tRXq2GbK74Xipzw8XSCRQHDu2o1",
  "key33": "41EAJYmu7J4yXaqoGfKRXtYwi431iUPKu2bdYVxk52oH857v27Ddzz9SfbcPc4f15D2DpMpi3BEnfhAS3ZJB4Trw",
  "key34": "2zDhwUwhSdDSC6wWHFPaoYL9PRmtfLrFLZYLZFQqcagw4zeTQPWQwHT7JWse1B3LknEiUFKQKY1mb36ceDFvuKEX",
  "key35": "xsktLBfdekJHkeRMVLCRC86JgDo4q5rWbu2EVcNL5XX7NbEknBeMAbQEJSZD2KEG1zfdQ3o9NkyB6KnR4UYbexs",
  "key36": "3qfJk78ED6pQ8sdnYu22GEeoYhZr1XHTT4uVTbtEwUiaExT1HM741AcH1t9q1G5ituBS8MMy5VDLG9G6eXUt3FaD",
  "key37": "ZcmaUf6T22fZcj91aXazGWA35qBTX32fPL4GoiqAWQjjoT3MYQaQx7xW84sV1qFyySisazhqTXNisE33ZEXxbX2",
  "key38": "3vsVBFeawphk2EabvwktFC56vCrTpHmBkZjGviA82bE6TEedujvDjAUn5kp2B2QTf3hMkW9RiJUniAGm139Pxrn3",
  "key39": "K32UcXf3D7CjoPtVw83JhnAWBdkZsUiSxwHE3x4F2KLSR2MsqP9e7jGNMxpCwBtPbX7DhLfoA557dm1xuujmqxP",
  "key40": "4ZhefpGPS5dAqxoVKEQXBfX6DvTXdaaWGcDsshSTtmmQ5LQUUTwjc2BMM4MU6XLSuQUggP942PDHNw7SYQru55Ey",
  "key41": "4sVtLZ17EWXvRJXWE6AdugpjccP1NCX6LctnxbkmvCYek3ToBQi83VbJ3FweEVvkXPrYm2BbmvXmkrSDhNR1WV6p",
  "key42": "5kSgM3APz4YSNkDqwv9q1mvK8PPyudyDnZo7JBDLwFJxvm63UFZ4q1WWKP3thLDJBSaS3GaPfX2UoV8bPW2Uitte",
  "key43": "CbPB2bxEZWsLrfQXZXGcAVpryetypPxoTrXRp6UWW3rMoUYKvHGzqcSofMdrgxSAQGXKzv8st6M5Nxi2b3usFJv",
  "key44": "2AZ5ygGgN8WMRjv7gdxthuC3cjsLKSBn1vTf9RQwx1CUUFytsgeTEKxkgwsGiEUM6m5mLMJXnnSp8poib2JHwqYF",
  "key45": "4kDbyuCUbbktB6RSnV3TgPKhN5kUegWpio3RpBcEqQGfXMyBJUStkRwFcshg2X1w5RSsjhRsCnV1din8G95fo8BA",
  "key46": "2sXXN6Q68ybm4CBMKmWqPmT88qijUdjmTUC4265tg4DWqyprr9uAk1V52GQwhH2FVX4xnqoNJfG5uKSnuGNYtDoo",
  "key47": "4kkPaDcoPqX9VAZ2aFSXhn182PiaWPNSHuqp8iUXD4KAfuLwXewcuoJiXzRM15trT68a2KVxew6nfYiWUx2MvBP4"
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
