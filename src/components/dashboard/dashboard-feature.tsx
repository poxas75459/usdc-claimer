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
    "m4f56jJ8o66v96BaH4BYtVR7EGKKv5dfdQpVcT1hN66zk3MuEypZE4wbpALHhSofSoYZ7gjSHqCQHT3af3kgdGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zN8zCWrYgbMsLcEVxo38zBSHbLHK6S5FTum13wXBXAxvwuSaPLPDk4xgenE6G3W4KWThDV98dSAXoPFZgZ6FcU4",
  "key1": "2duA2UX7AZ2pDri5RZpK9y7PPU7iTnG1XxrAEBTnYe3MkRFaMPzJswVLqZjCPKFGSRwgCwyGCwxjNPm2cDbp1TQc",
  "key2": "2K4okxfaVQDhguv25mBpWxUzi81Pc9C81dSL6hfobDKCJKvLVhyRk7iK5G1RBpeoPJmGVyhzf9fDY9Mkg2BJjwfW",
  "key3": "3fXWpikw6J97nfYYYFxWgkganftUFyNCVG6X8owNXE92SB1G5Dpcd8xSs7HnU8Bx1e3LfuECN6riFrwqpR3KB8ej",
  "key4": "1zi2z9SXfHZ8orrW5BYDQxufoS5xQ25Aswa1XVCpfYG9yjZoNes5SdGvabC1rB36wTLVMnvHuQnwvuM2CFhRXT3",
  "key5": "4zgXhn2rV4ATdgWoQGUU27N8f2GXp5iKhRpBkdswc7ZVnJ34ZAL2ecaeitCWs8s65b5mjfJWK4t6GtpRWmp2fnCY",
  "key6": "4UrcUpZyucoMrpowraHXWkaUzsfeL9vhESsNaZqCxtDZxcgMGjrV6UD2WJzsRqfD4PVfTd82BoTBfUzWSxKbafSz",
  "key7": "2TXcHrPr1HWHTEhTihTNEEbnHo3u5vGYXNx88pBwTy995a8m92uvyXn6aBz7Ysj1rhESUBLwPgP4dN1QhhPUyA8V",
  "key8": "8aupgHuZRSpepQuZKJQbqK6HhJ133x5MtBmuLCemXxY6iQ2DzChAgxYjFrG2QDt737gzG2DuwB7gzidCdppbhQg",
  "key9": "5vmb34Fs8V363ZnMsJWAr7NMDRkHyuGmbWkH96rjX1Ues3GxLwEi3LcMyRxM8wCLhE88fYaGPXeEm6AFDFQiEoqU",
  "key10": "56yCXUSTJ3bNFWDoiR6h3qWLFNzJrcHe1oECxjK4pevHrC6xdTRVj25qn5DYz4NWFVEx9P65md3i5qiUd1m3GjFu",
  "key11": "aNgiXd1LZwYo5yk7uDvXB8ebVLfAPkbDM6UvKtFC5gwMgoCNXqHYuEiQ8vLcmxQB4nbF6ty8iqFJZnKSxn4aE7F",
  "key12": "29tFbBcrUVfq4z6wQqC4VHKQfL3nQ3heC5UVvnUrewNz5x334pRRvFNLMkkN1KnWjmkpHLW9PwCn3ugvT7AQCjPb",
  "key13": "2oxQiGMg6nPKdk2pnq59d7J9CWs6yFSV3pBPas55UAbMByGAXV5yVCL2W5uMUiYKXbrVK8ecqNv1Pz6toKWcdXXV",
  "key14": "3yxTHN1tXCCSqN58nQ81odf3XQgP2yTvdaPA4w5vvLbCM813GSdYt4wxzygtMiBHCxsyBtE1CzVAXcQxYfU9VAh4",
  "key15": "2eUjGWmsuHQwK9vhzAhQ8sLwsPhi6ZYLX1j4f9yssdD4Hp5A4Tr61LSkUib72NTi1KnbXR7PB245hFnN11yHRAGm",
  "key16": "SskKjsPyCPwCZySDrfuqiPAZDL4p66Sc36VygbPG3yWKVfcz4Td19NzR9b3aorHaZ6zbyomzaXUBipHPD3z1GUc",
  "key17": "3JeyLtxtaSqNuAap7TZ2hm7cNYVfpmcpBRUkpCppSGiA2m233ckS5YgQJuqKFsezWBYEtCd6HMAE3B8GALC7a9if",
  "key18": "3a86GgstqxGTTbc4NYsBp43F8TJgP7hTZYQe4ZhyarguxiSSH7xUqgoVQb88SYFidWzu58YR3xoosUXaZJef7XXB",
  "key19": "387ew4eUNCmDpkZ5dcEYYzGm51wGnQDy8K9eHbBAn6sJuxesXYuvHXVJNRcXPozFcWTuGFgZFUEtNcs9Skbu3Zib",
  "key20": "2GeqsX3r5g6EbuBh5BM5zSDJaf6h8BEyY56P1eVFqfibWRCaDz59evPJiFv2Rwqor318GHuZdWEbSGQp15YGnu4Z",
  "key21": "3czVbLFnh594i4W3AgyexruGzNn959BC5uKtrEuebd2GTufDxQ88Z695yAqXJpvAuFgvLZgntD8a8LcDtVUg6dms",
  "key22": "3ktjB493s6xrqNnqHScsubUED93inAaAmzPtb4VeB6zwUFR4isrfp5sJgv5cRWgYrMsLuz9kwF2pZWeZbnnPa7MZ",
  "key23": "2jvAHbQuTXZ3hpaCB28gBrfsyGkbkrKY1DnwkbW6xsST2Gj9QuZVBpGkzpbE1eLaFhUFbgBBnNFAdvJcKpYSML5B",
  "key24": "2u7x58psvgDEUycmbzvc9eu5d5x35FPSrqqwG9wEFvfCt7QzpNbCkBnKmsMcLAkS4tVL6LSsAkTZrRgePNdur4Kn",
  "key25": "4eU2jjbgpSf8bWnxcUWZJpqjgcc3baVaPZPWrQdLm9nu4c6whFT28YKjp6z6XNsZhThNcnE88tSXrU8Q93NMWqHM",
  "key26": "2QbPXj34fEThmYSoEbvUSmD3oWbipTzNSeL1houNmHqDebakJk92vKrVngcSUDbbe7uvngACUMoSNqxSKbjLLfVQ",
  "key27": "12312JmVycDCz3qZj2F5UnbV1pQ5LHAAxjA3KnDnSMitRysJA6m69RVdSsVqwSM7x1fJygh1k1r3H4ayUNa4Bbm",
  "key28": "29EdBL5anYFzjGhjnN9eBZW7kfxGAeLzzUtVGMAFPHtWt3jxpz5ntcvCDJUNbSNLksZge1ha4frbBNSxu6Th9zCE",
  "key29": "5S68tzFazqvhTuTQUdoXUkV6RWfRHPafqQ2tXNMT9FtXpw7tu9UPpcMpedieJQf74NWPwAjA88Me8thHussgP3Wu",
  "key30": "BzYBLn1wvocv33AGuntc4keYD4XKwayvogazsamXTTbMohxFxHrUXzyQBid8Fe5WeabZhVFwGFLUYND5nPXF5Pi",
  "key31": "31Pjo5y1TnQEuMzZRABKnjkURnyn7pP4ywPynxxhf7kDyovagzTtbzDUyTGazfqVvNMNMQm6uxmoHxfWKgeuH8Ff",
  "key32": "1XnacJbgTbLKo9zFyH9Uu9e8NyF3taTeykXMXZVMnPVrDLMGgsavmdCCCNT2jM99t6Pwrnz2E6pbE2URQmKupY8",
  "key33": "5D6fUrPDdYZrsD4kmj4yVJKatpStzC8ahKAWxfgyrhZ5iKndN2sM7vLyXtNv3Y32GoBjQFZbQUGz4LiAshhHhyGV",
  "key34": "219vChTSSLwecvui8tYEFnkv32W8NVCS6hbu6KsZw7R6qhEPuZoLo8T7DnnmjGZjSmoEdKNa3hucFPmLVq57aVVa",
  "key35": "XtBCvF1UmAe4vPsyzhp6Rd4BxeqH7hYPXSoCEmbC5qfbRNLd8uNDGDNcdTrbmw8u3t2H4JF1bQ7yXJ8yXrVGfia",
  "key36": "xGhDVWQfy9pFuVp1zeiVkZebagXV3G9GsuvjjkkD8Rst9joFxA6KWz95dTHFCb6nqVRtjjobiTQxnwn87ZKYPhw",
  "key37": "xuSmJXgsedLwCFrkCfmphbLFwexnEpL2HFsSMyr1cfizWPMw2Jh28ED4qzYyCvKypRhY9TfsjXs8zTFFCKpSNjZ",
  "key38": "VFPcau4NE6prkeFBTcncaQFdju1Lpp2YUbX1GrCTALpVf6ndvVamf83KxARcd8R8dm8X7CztSQGA5b5BEqMCcsh",
  "key39": "2mWbEz9yopNHTmKutwH8H4beHD91WEtuByiE5Sr5RMXdmDBhekoTtPmK6MmihKA6qgUVYdnCsJigW25rJCH3GdwQ",
  "key40": "ciqAF6S9aVrf5HLGGPNdhnZ2LUUwadRZsNV7D2AETdmhWKbmBCLCXvZD11gPtowpqQkc58735TnHTWvjaXMN1Po",
  "key41": "4SSWmaS3u3e6j2Cb5PEeGQXwGDY1auZSqbif6gzby4ZxQtpPrnDFGytgPZPrXDdFGVgs7yAQiBApgCVrW14d2D3A",
  "key42": "5AxCEPntDf5y4xcr8vMvNud5yfpBMB3XFR35D2MAxazXoRYVUU4VGR23mptnSHCBfMX9RNum5uzDimuCdRSDkGbJ",
  "key43": "wrqL6iGvC7qHAGTnDGq8Ac5dDvibQa2MpXysyuCW49aVRLRFR3GuFDaESGqSmQFH1ed11fLm9M14aNyEsiBmepw",
  "key44": "3GMF8tdC1jXjdEyHsT76MgdEmiTcSSViC62m2MApoDU3pUgnExXvvYzzfRFuVDAUg4oZt6WpUAY73xPwCUJFGHjs"
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
