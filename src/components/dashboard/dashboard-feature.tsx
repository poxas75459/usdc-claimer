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
    "5geGk6Z1J8BUrMoyV4VsV4uSzQ9RCa3umN9ihA8xwV9ewaVdEDquRdLLMhJUrnJsUY5teENu1J9r9qZi3qSCFWM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9EEQ99JdaZrSpSjnsDaYKQDC1465p2UetXHg18ZXxUx2cSvekUKvuhKrxygmMkaHRi3dfTuJmAyBKyvjUuRgJB",
  "key1": "3NqUXTGxyNshRqpv4q6qzuwhfRrqdUraw9cQWTAiKYnVNeimw2Abxj8z9y6VNThrG7wx3pBCJqcSbZjMwrnybbMc",
  "key2": "44CHr7L1eMVJVQ9DhwzTSgRModC95o1P8w9BD63vH3XvsV8LA1Pc6621BWyJ2EUq2vPXNtBLCu1gpDbAgfArBprb",
  "key3": "41K8hRBF6QymYUuxfXYiE8GP3V42Ncc1wdswMatbAJGfQhDNk7yfCvKkNeewU1vrkQ77hu6Fc1xbAgseWtKWDoa4",
  "key4": "2EwCzeQajoank9EyeAx2Wfmaz2m4pC8C8UMqZ61vjEk6TzXaEw9QcpDRVCQfcwjo24KL14tNyVshFaULPmMkMDzM",
  "key5": "3CBPJinvExB7cDPRc4t3dbJMd2EF16TgpwZqnwesxaXTwb53GpF46fXpqPitRiEEeTEz6QYojYQVpHehukGDsDed",
  "key6": "nD19STXHdKNfMhWN73vAJJdS2LfG8wdWaoH2t7VtoMho3qQWEYbwXoahhCAsk4JHp485e7H4xCxGTT2bFULmb5V",
  "key7": "xKe5m38AxxFb8fgTeFaqvHqARf1VbZtkiFpX2mG7M9g2VxWmfc6bLEUMH5td7jYX7VVUmpBYPf7VAVV2ZQPtjfT",
  "key8": "3J4W2gVL7SCJFJMQy6NU355HetdFA5BGJuF5ebDsoRQGJfi25voxFdbq3P8Tj1kn9gCJEFFwMN9zxiVWUFVjnqy9",
  "key9": "2z5a7bDwCuKnehxBrZVUAxDVF95WPUAZLHpfFL2uY2C7t9DH4kYEoRA5zdNS9GrGCCnDE2FjX83MDXmAE5hy9pCJ",
  "key10": "5ihraXEs4a3CQbQREfLmjcse9pfk82bzjC587gMzf3qfGGfHXDnLTKR2ohMt3Di4jHRnevzabrTFJztMSWZ58t9h",
  "key11": "3yjyMVoznLpfxeswsRByKgbAaXVSZRBKJQud7oKF86v85rC1Dyz4GaAmUkRNN6g3DTZg615bJDwf9CtmpQyn2WVy",
  "key12": "2ZVBtAe1fLpZK3Wic7W6cv7gxTBv42CeAEvZCzSf4aRCaw1zcK97pprNW9tvxkYy4vzq7G7Dr5C5QQoyvQh87MQb",
  "key13": "39dVCkGgGmKT6yeJA7fKDgArjY2ne43Cko5423WbSVALw3Ct8UicwoxftgCEVSmavQRCva9ZVm5n25KuoinNAjrW",
  "key14": "87y4iec9nCk7V7jHf4otKMPpPG9Afs58Rpa4PnAVwCxYquGDi5wX2ko42WRyMpyFtxZQ8Jvo1aD627uh4gwvH3x",
  "key15": "5dwggz8Z1BxBQzaiAmhXPAHixGtWEzGt4tPbB5vdnjuDZiXtKhJzCnnf21DkdQ5CRArakzaiJPJVfmLxw5d9xQw3",
  "key16": "QjKirGTbb1xHsok3UAKcBtFVH988urUGWpD857N45aiY5R9dDGaMACMcbewDVztSRsQnFpJfvC8Eve4aY2SzWiN",
  "key17": "4FhwyDYnJTMdVDTa1WqyRKSzxPaQqJCS2WgZEeNRwTmHZxD5wb8q3kHV3UGwVaKsE13jtANpdNTERQ4LUrhLAfWA",
  "key18": "4iLairKF8SWF3sdpMznviY1UMrZdetBHRUW6MVkgrXivLaMLhxy2TiZw6tTc2UGkbkfZfkC5T6WgiNbiCJD6R93B",
  "key19": "5VbYLgrGnyudqwKNiVq9wpfRas4UJzCp9roQJdQNYTv6zYnC9CwTQgH44hcogSciJPiLsC9THYayjALgkqSY81GX",
  "key20": "js7LZLr8n2pQZK8viytcZJMZuVvQbtXNMD5yRnuXP8zPLKgdDAPyGNj5WS5nSxrSNfzq7Q1zPAK4K1FjzoNvH7d",
  "key21": "3jZAR5shkpoZUdFajYYbWoc8HnPYtfe1hT8KjXTXapEautL4uyygoqmjW1MsufcYLyg9L6zPbfRzbrQfDzhCFxSE",
  "key22": "4DG16wE1ZQKRmV6GYrdK1BktGB41bsBcTrC1A5F36RqYAi81YUeVuWpbUWK2Si3EZj1LHwtHBiRjWW8C3ztW3PUi",
  "key23": "8AL9MnU1BiWsiX4E6shCv4G22qz2TWfJ7wLq12TXrpqWpb9LRHPbxdFKHZ55L2Dr81ywqwS8V1hwUbhnz3f7jgJ",
  "key24": "4Ng4iyjPSqvHXVUNAuBJAMmjki3Y5DKhnCzkVpjQsbaB1WXfTG5BCvVLfAMevcwQ86MzAjj9P7k5iwJLhFCVDJ3U",
  "key25": "3qNcKDNcfGEZMMAyMm2BdwjJDBtn5pgHx7nymYmeerh4SM2wN1GKfM84uq59dmp9JYniuac2WiPwtnjFmT2H64Ha",
  "key26": "2xXNGe1T2fejbuqRUFrzzsvgD2fRWfTyxFJEdnqhzrcLf59BKesE22CrPBR4wCXKjSTci1DpDKTCeVanyB4rtLd6",
  "key27": "2upa8hwrvLRTpZCRRjCfoi1u5eb76JsSM1RyHpndz47TQuGRFw5opq5msufj1TmPRPNLhkv8N1v9rEVXqkYofkeV",
  "key28": "2XezNA6ZvdyoYMbvjuGh8PrQMeJvbSyW81jmsUGRDfUqnABfWJtmxWs1r8SmaamEUedNDDFYVJausnxyaJqWPK4N",
  "key29": "GaewAjW2gQPnA1WcCZtJ18Uj63uTnZT7db5Lo7Knc8x7hTcEr9221C2QQVuB3zHnV7FCecJLRYRLMBfktZusGsY",
  "key30": "3wSuaAmxtf3kzMYVaYWhUrhjv57FEeYt8NvgFoGpemdbhMyVzW3mHzMEKXi6U2mbX3AcnDy2vgZqwZX8ad4o8K8b",
  "key31": "4cc4bosMC8TU1FzKP69YrZiNYbyHoc7EnNkZmR7ErvLifTYocaznro7xeiKMJ8Yxwruoc2cvatzj3vhYYCxEcJrR",
  "key32": "3EL77qF5B3VLeW3vQx28HwRnU9Jnprah73FE72doPZBgvRSRjzSWb9NGWjRTeo9ztH4pTrfvz283NLWeDCTSuAys",
  "key33": "2ebsLBbRXSxejdrV6iCfah6uj9C7PkoE4vWxgPzGyLtcdQ7B6y5YnfSgC7hqt35sewLXxhxNg5VJ3Px9g5h1dMS5",
  "key34": "3D5CF24FyKakss16AqUYK31YDqG3UoSxc2Zse4P6q68nLR7JsqdDnQhmEXF4BSGP68gAu4REe1Kv3BCmby3zatk5",
  "key35": "2orqgRq2Pzy9Eyux89A1iCZvbMeUvKAvN53koo64Z7o8WhnQS7W4PdnGfo2uDsCyHMRYDbv8eWu6CKHsQNjsjiS7",
  "key36": "2vmGaC9AFzVPD9TMH1EKSKpwHC2WU1J2arj8d4Y6YTDuKULG5Qm6NNvVG1bsxxWbucV9JbiWcouNZ2Cpup2Q9zsk",
  "key37": "5SpGvMsEF2aB2xACsq3wBJUb9S16rrrYLPJqBTUWRjKeUCYcdbTChUE88CSfZGksM64cbzxY1iwauUBSQMVF8h1b",
  "key38": "5QjkZsQRH13tvhGvVAHuZKcsGyNeamaGnddNR7tFyxRNTxquYaj8TFuuK9hrvnMkYm4FE6RUigFzjwP63rpDJW9e",
  "key39": "56HFbTyaPyUgfsZEKTog8oQo5NCwgFL2aK52bPYKFTGkoGhTB82BK7HzG25h9Vgvdvsjfm3vwWKYnZZBZkgEkhS3",
  "key40": "3ouYSYXobRYaRWmD6TyhCrJCDbAqhwksuiBYmrmLh5ya3atwPPB91D6fFeJjJZ6aYpN1A19Fr357S1d5WVmz5hdw",
  "key41": "4ein7vXR7gTbKo3BstVfnD6VvkSPKbokwZqFYBWimXzrDXcdN96igPp4hybQ4MM4Zd5QEMmKfNK3u1pMEpL1ddVE",
  "key42": "2d5Cutfvww4EYuK7EZQptKK8F48ah8QfRaTUMdWqmu4bR6hFPJ8oBzR1xrGetd3NPobvaeyhzZWbNkDZkCicJ5GW",
  "key43": "MChZeL81jv56uhfkvFa971PR3GXgUFE9o784NKstEZ2SqVEbxSZ7UcZiqaVQ7XdBgURMS6LJiMxhL7EcjE7zBkh"
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
