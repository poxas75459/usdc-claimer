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
    "2rPaJeYzLQ8xA3WtheEvHyeT5nDUgBF15o5VpJi9i99RwcrCG9sPGuKTfB4YDPMQcwpjm1tMBChNC84F4b28cgUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Pf3t4YJkfUXip4CLHphAaSba82vYfzkxWySVryvBC9qTXHXetXmgm75FgttBFubDLn4H4udpsFmmNk2ZYeMC5R",
  "key1": "5Hhdgqo3MY7hD6UqTjzxHxsTgseNdeZYHhZxejE6QJaLs17BjAxQeCRp3hEF3Tw3nQ8rQHS8QbrtpYHD3DJQ4AxG",
  "key2": "3r26j1ATygv83idYSbHv3E9fLgqAVD9S6ZsTCXSfkLLmfNyJm5nExfwTJCP9aMMMWrbK3o4VzvbiZc6LA7psPdLu",
  "key3": "G8jeWJzAqzdyLK56kzj6k4Cs1En7Ki2uyAbnmUgcsg9bZk7wQHHrbNNGWhHegzVaiPi7saSojrGzQU9bevyn9zE",
  "key4": "3bHcCnRHAT8Q1h2ZSQyXXE1auw7cCUTHgVR5k6Jzhn2wMbwcGFHUNF5RCdn6pzJ9VJFpBHf8ZwF7hvhp687xQiWG",
  "key5": "qBz72upoVXnpkLqnx5gawLqtt9d9xoPr8jACJ7LcUTncNcBtcX6B5hpk7UatdBixkSin7GUu1Xw5rdRjQJaPd8e",
  "key6": "29mNYRn1Z6YdWtLSYQDAmFe5s7qXuzP2EWv9fJ39WWSmX6fwDfhGQaXZzT9qM24bEZUaedG9TRXoo2WyMEPq5v2L",
  "key7": "2HhD7FhAKjKQK8kZXxWdpu6vuPrKFXDgxc5oN4d3bnxKNEMw8geEnza6oQYJqxdCTgKGH1nwidSL1poBZfNHze2N",
  "key8": "4wqa7okgsgsyxEYKSViK9j1fqLrFqWoD58z1f3EJbByEv9aEuTxhpdMs8ATjYppbUiMHZ1g9WU3LdPX2ZqP7GyN9",
  "key9": "VSUc1UYUJ26LTGDy37AtJnwHAtH7vhc2BZ96VW2fCdXt3e7KxR6BPaL5D6NjhLtyviDyK5jfZskaxfJUaQb1GFP",
  "key10": "3jNaeLCYLB9QRJBSzp1ujPx6dYnfB8XKPjiv43Vd6xf8nYUx1YroWkXMfL45C7gukLgRv12ENYBy8xb8LNSkznjB",
  "key11": "5XGC231QqnGMhpTbfdSpJ21va2Q1waZiYZY4FXZjQa4HvRPAxBGEqSmYWrNumFZMwxTzEKEp9REii9WR9Xwqnq4P",
  "key12": "2zzWPJoPQem6yW6EJAwCsXTSEfu929WRASSzj8Ju6LLXcC9jiAYrFcKfpPRYVhqLFhSqSFrmBQExioKFGox77b7C",
  "key13": "4puoguwjR9sDHgWUryBfnsbPqipAZb5N4aYcX8Pp3e7EmJybZvjymMHYLaDhpXGjrrbu8FKkW4PbCUEDFDEnvXs7",
  "key14": "5hpza93WhkrBPgPfdJfd3v7zp6gZ6NT5V8D1Ae7JWjzoYuTK1YjtpGmXqGMfxVSvYitg63vuteVVVoPj41g1irQ2",
  "key15": "T7ia2kZ75AVw695pDnR7DvvE5bnGW1TCo2RotgvLiLNxKN9EShU4Ahy976qEsgp5KSY2zyFhVt1Xdeo4ZWY7jzj",
  "key16": "2FuNQRhjjfDddonaEBFoVEXRdK7jvk95qqpGTHYrvWVEbQF5QjVL36AikoGkGj42hghXsqTSQqNPaDwmo1hVaFXC",
  "key17": "4v9k51im4VnpvQZaoDDKeCU5DHZrSTd2EBUbA45Gkvw66dbzyNsK4sZMgCeYtFeddwSyKM8rsPYzRie1MtpFQY5h",
  "key18": "39PfaKBJ7iwaGKaj37j3W5tV9kN1zEGRubjfi9LR3HyqtvJh4RxzE4HU2nWRs1Bu1ui4DMjHCHbeGHsedb3zt4w4",
  "key19": "5xcV99wqsQMQrjwhKRUGxiF4GygaKtf5FQF2ZSuiTJe8pxenDR57yvid91ami5d9hgr2723i48bos3HgHYgN8sGQ",
  "key20": "4FQGxSURsujhawoUgztEKsnjbxhwU9XyP2QHkcDhx7xk2f7FgbvLSDZyp4v7bZ858bcdejA26ohDFEX47BCjMKLU",
  "key21": "WLQ2h24xfKPDqHGDcfLLVa2AsE5kouYeHqPPWAUM4jyUpQnC2bb5Qq4Eo85Z68WSVHvaCVz1XagZmUnN2LhsRtd",
  "key22": "2pjDDhmPagHphpArTdPEaVtLtXi9bteaNeAUggohhKV3JuYEXaj9cod7RhhqekaN2LZseEGMjHMRoSE6LSc6D3o8",
  "key23": "EumuNRxU9sLTGv8uQGC9FQyUpJYeE3h3mPaywqx9igVphCnSpRwd4uCNeVU1hFbBcg5omAv1XcnJU8fRokLwT5U",
  "key24": "4tjtqsHowbYsqXs5q7AXEdnB5VAqWD6oB9VpG29Hdn1McpBTmrgEroojMSAd8nCC3U5FiJFoDA9tT59rPGmrTE8z",
  "key25": "22hVYEpBhMM2ryTk5cT7f2rCs3Ua2hseqFkCRbua6tKqPft1Yydz9SGGHwuiryNVWHVBSt5DVfioNt3KPF7o9KKC",
  "key26": "52erCS9BqGST8EtXAqCrqrk2ctTxxxa92uvZ5ib4C92KtSzjqKstCAPkjuRQ7vjcUWjXzNn4bpA24VAViSaNKRKP",
  "key27": "4Tm1Upw18Z9JpEFzPYEwDagSdum8CFvHvGpcds8rh6prNB3uZv4nQAymjvBYEKp2FKGfTJeABBWhLbMfWEySeNVM",
  "key28": "KNwxpNg1JRnUN5cctGishmcRvD7txxWSm2LaV9CVw32hBvL1fM7DmaL3S2dmwFTER3Q4WAXfAkVDt6gWNmhY1DA",
  "key29": "5imWKBV6EBugyujGfpjbA8i72d3w3VNJhrc8SiyYSFHGEnbjd1v9VSBzs32BeCKSrCnG3KmWQnwtEhjo8EAkWvy9",
  "key30": "2VeB6jREUqE6KvsX8eXk2Mw8JKWpjWAQYHa7nZdwjQ1Tqytcv5bcEGc8onJNJZs7iZZEQ67doSgNiBTkYadixEWZ",
  "key31": "2qrevDBz1AHgCJsBFShcZ1MAfDSvy2dSP5JngSy2RZHu214cmLjUZbdT9qE1v4MpN16DgDiu4MimGV4qH1Sq7Dzm",
  "key32": "2UXivyd7Nfq7XekaWjiN2UFHkHxhcKmzdV1NdWBk6dd7A8Kf9uJMKK7UYHiv7KuR3ZtLC3hFQQCnEEkFV8jT3EyC",
  "key33": "51HmCtbTbrC5oHfH6BJqgQCvuLQ22BPmcossrm5x52JjFWVVLQAGpmd58C9UuVtvdAKfZ7Xvyg7RuvkZM5TrUnse",
  "key34": "4s6GuPPLSWiYcfqBMNQATGExUa6tzAhV2e1DFzpXr5vwDXJT5CSboXzn2PUXV2t2XEFqdNQtGkF5uMXoSY96rC8X",
  "key35": "37T11AAqRn7gdRrwoad62movNAMEUCcfsQgh2y7rHAZXQ1gdUG11jamfcic9E17zcp8QkLHF5yFpXjvNSBVDLWLA",
  "key36": "5nrfzdChXtoz7QzRaVDSj4YsQwd5LrEC4Xeg7nhgm1aFPxNtxmBcMgXdeyoiVdxaJMSh4rNu57TbTUueEzuyAQNv",
  "key37": "4w9qpkbt5mpqZ7wYzxxpCvNUfPQb3GzUDcbpXFv2QdHbgQ9o9kT3EjYg7T8gaocTChUoDZWehpitHVKvKMT4qEiL",
  "key38": "4Pwkwjy2PUVgkQ8TsbAkdBgKZtWfcZWQd9CUnBfkNQebcAyyim63tLAciCbaNcFRY83Tx93342CtQFXcgzmvs9TC",
  "key39": "4bjLtVzzbUXsY9jaFq3yRqvmdLvZSSLn2tT3KLDGmSyfvB9LJpj5pP6u8qDMHwbQdC7a8yepgnbXQqTKoWvdZVzz",
  "key40": "2wuQwg9bv1fPtegdUXrQZzRQocSaNrKt5LeKQ3h4AYy7adk37Prf1gZPkJYvtyAHoXZQ7RGX4ctfUSE7u7aDUpdD",
  "key41": "BuDbyDetsQLXr9BuiBtHLkAkz6Gfv5hG7texT1yxPPjpmFZBq6KuVJ4NPBb3bAE1Y4cEG2XmPwvP8shhGxmxeQo",
  "key42": "4KV8hjyD9bZMADcm1YwquxxSQNomYLvdizCVrE9xA2cyqYYWHJJEDnALFECnRG8fsbuAXR3HtmJFrRBoD1cRvaZq",
  "key43": "4VyYrVNGZN4L5zTaCyv7vYRhmcSYecTHgskKFUWggRuHYbjaPVqE7iDYc3ADiB3rm9XM4KbgykjAeS14P13bWGA"
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
