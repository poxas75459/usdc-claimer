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
    "5SEv1Mk1YRjZYLWoK85t3Ug7kW7szNRxQsjVxTbaFnQaZooYxQ6NGZ2ijeEmpqnkqCxNLrQ6gTZbLQScYiwjYRhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ui7L1YtcYQWjPcbrQCG23RMwaYLsyBCM4oGdPaSjt7egAHyaJ7nKJx4hkLQpqSfqc9VsCeiX8kCuAf4YHwxAPS",
  "key1": "3bojZQ7Amc1VJiS6TxypWy7ZYqQhjmmhWdENzDPrSaoptPyTu9XG8F6EzX1WkBb4iVHe4LySQCTYAE7n4biVSHRB",
  "key2": "2iQ78mPeUFXbnLKRDcchwJHC5q7n7oE1xGgSmQSbHa8d5635S8iTAtLihLfTgDwLZYBj4SqzaSiu7md2FrZBJsM1",
  "key3": "5Y4FMBeGZssj9UNEKMtCxi5q6WXcPaEZHfqYotY9dtCnor8VA8WE4p85AUpbi76vfqKTefNrevRAUwYL9iTNRpru",
  "key4": "rZxbu871kWTF7S71uZ8FWoQcqcb8z1D7NPheaNjYCCH1FvuBGv9V3hu1ZAZ1cHEPY1tsF3cNENFCR2c2tDFyHhN",
  "key5": "426me5ozTHncSsWdqaMQiB3vRAni9yHthvd5oHn5A3QDXAzXcDYtkRyEJBuLZX91aqWLzb6yVcvvUjYwpKE93z5T",
  "key6": "4nrzNA1CQvjHnXQgn2UBCCXtAVojzky3i7wBDTydDMk6HYtpjrHhoNJTEqMTYaLR2xJtGLijAaPZ7ae2XbgTzJ7v",
  "key7": "wQhbkX1tSB2zMhSmN7fnWfggqaAiUXbuZCDrxVg1VfZWD5jQ4CH9c68VvADivbkYfyAehtaukANkWdBWoZV1WYL",
  "key8": "2vvB4XtFNj3D4NGTte4tbEehs75enofjehqBQiAerksHLacXYpBWhkB6T6NDcs1GEcH5AVocnjeQ1UjdSJdCSkyq",
  "key9": "5xDC5nRKwPMHomfGNHHxDktRerQJ5fRiWFNfztaYR4N8xefebh1sKogS56JEBz7xnZCs2dfMMjFBuwBx48hnpwba",
  "key10": "34USQggtLn5GCoV7pVQ9tvmkiiUUA5pxsgaiFyt3vwQvubRyjsVBpNR6YYfcxwUn2qekeadmPbmANTao3a8zwAR2",
  "key11": "5ZB1CPiyEqkP8EsPdVjoBqXXFhEjfGvh3urxZ7kqBRovSrBsp248SLDzitxoBn34XmR51H7eB8deVSUgD7WUgWKD",
  "key12": "xj1UctmUeAaoNV795mnByYtWt3wuERdjd5BUqyhnaWTCta7Z3qu69nQHQ3qa3JKUzp8WL6LSRpKtedX2GCT8dkb",
  "key13": "58ySvb4fRoB1CxPPSoTSKGifzYCiwqGxXgRQjsstfFKdwLfjVNLaqFqesMcuvdPBNALLo6JaYixDxNTCazsnK1SW",
  "key14": "3RFQ7xNf2wA3LK2SPQocrBLbb16RdaznswSA8qYWq2UdxXW82WsWQFiXHGioMZyqDPeGomRWQVNRK2kd3VADpuxY",
  "key15": "5qTKwXi1K5EyBbHsPABudvnBwsXz2hyfJcYLVrmwGDxQjuLWhE9PGYgak5jvKTXpgpSbBG3AkbJ1E8yUyuspMrA4",
  "key16": "gtaxE7UDLkGNwegL1iqhm6QQzYzSiNY8A5wx91j84uLTL5zDmf35UYcnimdKj4vZSXR6c33AxkSfJWd7Wu8XohX",
  "key17": "3t95NiGvj8jZJMmnE3QJsUmzDFsTeo2LRwPEU8VkkDhLJvjcvtmwtktaKrNRpxnsqfSuH1xmLxRrPLptQcLpLKSD",
  "key18": "4qRALdhH7HrBksipiV5WAqGAiRVTAA4D3BqvasP379u7AMEDkbaQYfSnHMxr2DqitbHSiPBLrSNdDh5kF4EM6wf1",
  "key19": "35MzrNjpYbiMKrzb3Mk4AgqNPE2bfkCN1EAimd4bN5wGK3yeyzBPZniKH4zq2nPT5tYSBbxobC5H5VN2FanrmWdL",
  "key20": "4zT3ckLbsTh7EPNQgtHrYVEVxiouQPGhWsYRkpZVKtmhrsnF2Vj6wvMfTe4tZ3aqemses8qVLHt4sbDevDUg2rLT",
  "key21": "CuSz5JLzLG7isogZL2bE49VnpjAHWfdDNx7HQeXw6j5eDUxFwPX1m5pTw16Ea41C31ZUTsmBk1RxevNXZR2j1WP",
  "key22": "WvvrcrE9yxwqLCKRRCqrYskJrVtewBz5rQRG8mLKLwXCg9MupC9VVnC9Ye8QtmMapLFZPEqd3wuuRMFg1ENBLZB",
  "key23": "49dScYz9aXoQL1NzcGA3LgfvrLb68F683c7nuXN2KcitTD7N2sAaKFaBZw3eBBMGo2gDU5BJNU82WH9rhcuZ8FBx",
  "key24": "3cbDM3tKdsx8LuVuFadhkGYqLnzybscWRBvk4P8hAh4zn8zmRxtGLEKNHMoiMVqZvfuBBwDRy3GXrt3cKfGekFzV",
  "key25": "g2Z3FaUqtBhwcP1EbeurQhw9EyeDAn5aTLJZawMzuAvKRCizM5G1fG8auA8wchz61r14eJxxZ8VAfBoCLwscy92",
  "key26": "4BSQ2Azz1uNMmN47h5C8eDTNkENyPjPmWWVmXijoT8X1wMKEAwWPkm2V1tpG6L7pcDP5AwRawVzAgp5q94xt8Fd4",
  "key27": "5tzqq1HZc6cg4ENe2jy8EXH1ybvP66Hgdr2HMkdfmUk8VxTfZhVdoJLkCEizi4arLyo6DqaKm3rBTgTW4R2ErZRZ",
  "key28": "k7zjrdxsKN5Fd52gzd33yugjpG7HGFKrNkCNLv61cvTNyDaj889rUFz9gsakS4o2eHDotcgwKTtBRKexTg4EY8j",
  "key29": "3ebtmNfAZUZKEGMcbmWAfMpRWTm8JX7wHARCAKMqfM9NHKWP3W3qzFDmCUB4JX7dYcaLh9uqnEWzVQEDKqyCWAP3",
  "key30": "4STqAvo3W2rNGufx25VGhH8Un8vqenTQJTMqAaviC5TzcRsFDMkbE4TaGiWUkC5FUseAkQxXf7p8k7VesQVoQ2pt",
  "key31": "iEX2gDeGXLMk9N386QsjDEKraSNLdGduXzTg9xQR6HszqejENS72tjCXZz6b3SbAc1Bc5Sck4HXEcEXqcEouiRX",
  "key32": "u8dJyn1HEKuq8CuKuWKdRJJeUcbMb86RYXxVZHit1Xma1YN1taFS2bjgcdq7vmo9Y2BpRdy7jMfZQ3nzbkGXP4M",
  "key33": "4vijcRrzrGXM7nVy4uVzMGTJeJvE3VbmDTUpXjXeCWhVBydrh13SB9RjPrqhxiH6JBBvRFyzP82yJmUJcpfUkvKp",
  "key34": "YzP3mWuozrr5Hq68epjegEvAUx26gKCLHC4z1iHMLRKjNrT7vCsH8r4ePMQCn1ASVboujcqyHhN8yjRmh4ScZAe",
  "key35": "ssyYH4ocpWLRaZg8K54rmsyBArTXMCZFgUPGvyNgyUkWTZZDyzBncMrdAM79LTeaDpUezDLEXexBhNFQ49gowF7",
  "key36": "4e8nmjVVMoRz3sLHU6pqS7SZHfA19srtQS8J2j6fPdA4sWnM4coJVQuJiZhjVmVdzkQU359FsyuqfGPJdEBKPLza",
  "key37": "4yovXq6A72cgu6s1TWJ2pbhCF1KTwC1ZmJSrU4P3GrrcjyWvTwW8Rkz4cPV79VTZnGhMo7WkXQA7fNMRKVUcQrB8",
  "key38": "5DpqpcJ1m6xJyWzpGkrQFfb8ZXTNEvrTMAS79mp8ffC9Th8SgMo1YsPAYQujhfkwVTCo3ekWLCpPYebPrqEFFsC6",
  "key39": "3KG9hK8SK2zfTQ1q1EkPLpGtTeRpR4C69EEScTYFPJcJT7UqQ82ytdmU2WHsr6SHBPZnc6U1iP4Sy7nPxNd5kYGC",
  "key40": "3vi7GG5sv3MG2a2nXoNAse6PW3Xu1ZHVxxnts5PA8MAxTfXPnrd7ELtfWQV5gMYLfTYENkMUq2QLMWZ8dEm5utYp",
  "key41": "2GSkQLtWEKXX83SkgbEDu9wLPxsgiqtrE3uXjh4ph2QNHRnRf7fAhJe9GYzd64qqsUu29G3LEa7BP2tLB7G8Z5YP",
  "key42": "2UbYEvdiewH381XENqkZ5Vh4m1t9YAmZULoSbubntqXy4vsqm1GsZw7dxcq8VyRNvRNV3yN9uLUtojin47wPXS4u",
  "key43": "2d5MZNtvU9LtUXniXnDnY12t9dk1PmBJmSrNXscZTu4y4qRxF9jMUjakFwv5dnsBK2cpvWpPRxu55jU6fRp8X5fX",
  "key44": "5SP9NYtGCFuM3oQ3pMptNip7RB2VHfSnXrNSP1afZetiyBXMp7YRze8riFCi3TH9fuqeqVuNsGi7cnNqN3JCpCCK",
  "key45": "3Zc9xv8xbxmcwEbf934Cbbk44hHk7T6wzKPnakcqgQ6Gx2vUov4NVNHwrc5da1cnmMRZnG2kh1hRbwaVrSTVoeM8",
  "key46": "2S4TTNXwu1CWg6QqAn44U3HL69CfRaK1ChZ3yRVRz3a3CaxAnamV2KTgZTnZrabQP2aBD3kQ9Nar4mBZ62ZnWCvE"
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
