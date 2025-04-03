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
    "2pMoV1eSnrPFjdWcWAUXhxwiPi3vxE2G7Wav5sgn9SM7q9PtYdt4Gp2wT7ArUNEgLjdK8UeS8bnjZByQYj5n7YqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HbNWTTw85NLSEDzVKnucWpoMy1EwBoz2Cqr4eDMsFbhSpbCJwxH5r2zUC5oH3N6iMGYmYFMtZeWSKcGEzcaVi8",
  "key1": "5gsbSq3un1Ne5YMSgZz3h6aagr3U8zxZTWsFZyepYQR8HRpM94q1s8tHVxgENmR4ZMo3Mp2dijPiGmCKdTBvwRFA",
  "key2": "4NWafPQaKcRcxrqr4csQSgj2jzqKLKDrjgKsdx5U3LsEkThWz3zXf6RHHV1Txz8rdyJ55SWkP1DysJGUXB3nThHg",
  "key3": "4x3wHbHQhDacjw9GmrQXmS7thtLRRKPRR2PZHhhkZoo7fdNiaWvD7vtxvReqQrWDoGnGY3esUc9XsmFsVMwyG55W",
  "key4": "22g8s5PMkuVnqmyLzdN1xQ7uJvJEhVSmep5yHksB5ECKaZFPcynHcAhfJRc3HcbJBuZqLPetwLLtyL91yy3ehG1q",
  "key5": "25PW7GgE8zh9SiERgHdNvC5McAUSBuTH1kr8owuTEsWFARP597ZxCDdwE55PP2Mfp4aSF3zihSbwBoQ4bEYZa97U",
  "key6": "5hVytqN876GfdJ9D9VunEMrxB41HntCNYbuWPfnVr1yWTyVMcsrvVfZ8XEfd3awmafu96tfgCChvSAmpczzv4Uej",
  "key7": "3jwqind5xoRiraHnWjAeLPoeQ3ihuMwPRhKNaGd7gyZmr1MWP7fyYiC4vaQAiuwZ748acxZti4wvJv2b6wZ7XAha",
  "key8": "JHNZpzZXyVpjnWUSB1oeWjbzfobWXyZQkrb2ZL2NGWToCX8cGh9BW6PXyYzow4kUchsS6gpRbeE47EuhrVB5ueC",
  "key9": "4ufh8pVf6gDDGCKJFkEQ54cjDtpX71PwA2FXrekhP2Q4G2V3oxkFsNqdNdcuq1MpMH4ESCCWo3Ljt5ixJyuq4yN5",
  "key10": "2kCrw5whiWtgFWoC2RvJ6KKpMTdn9gDP7UTpAPTP2FVgaUhCpPqFZ5wWV9fjKUTQZWRuTTMQN4Cz3ioZF5QHeKRH",
  "key11": "2Byi9aTu1LBAYHMvNYXDjNytYWTfKRmB3Y2d5HRh1LAtQaaNfskm7cWMzYjXTqNXhUSnqdSrQ6Qx2LFCXoEQ1yqP",
  "key12": "5oYS3LwybPBX4n2iN2DFeP5Q8U2TZYzSnotkSWLMqXs2aoLEqctgZcVgsZq4LQMWFMA87M9UBU6WbBKThiMEge4G",
  "key13": "Pf3wFAzjFAiiANUZBjmBBTVNCRz7NEGThj4g9eEgTGcpnebLe2i45v4zQ4YkpeTUcqBHpNmHKe3jwYJ9FaTr8gZ",
  "key14": "hRmdU7gMVHa6o4dfVoYXCUdDrzMqcJL6Cd6WFqsbjAv7H6baYSSEyHB4U48jtzrbxqt68fDhg5r5xmFjvpXuv33",
  "key15": "DY6VfdCfiSrnvUsYRxswntnEVYdwfx4aQTwz2PvyaYLKCndNMcy9hQFQnWp1ZFaE3V4wmoZpfkyq2bhHdVgyzaD",
  "key16": "3wzcU8RpKWQ8qgbdnVLGMfZyd61GiPbPdz6ghH1Wdh3HD7LXc6ePgtYQfcQaG38nWCqC4g7sQP79Rn377a1Q3eya",
  "key17": "4L6rCX18wixHY6wtEJo6Tqn6GcK57dGidcnWFAVeXLqYMMMf9TMayA9rnZQWaD56zDNPjdC8VvW6J2P6grbq5Z5c",
  "key18": "21eimzQpw4US63JigyxZL22FTx62zBr4FtL1rzPKgN9yRBX5Ra1mxBz8Vj3eYezeqgba2UWgezefB9ih5vH5tSzk",
  "key19": "8nrwoS8eiFDmY2PfsC9c6HdqjSerZBvuRUg3tGukU99MwnkHUQU53AE3wAsV1coArtyfaqJyWtGnjUAAgu4pbyG",
  "key20": "5qVZZiGoDh1m2moUewhA8XycFEao12v7yid2gwW7Ex7WQYgaM2xNAgPGeiwnrU1RtkTjjSSwchvEk1haBQDxKHJH",
  "key21": "pACkZBUX3VUfDhCZiTxEUZK14KdenmMrn7XL1Va1rtqDiuUm1G76jNzSJKCF1WkaeVtvDJTYu7SWTBrN4VDGSFF",
  "key22": "3WQWDZdghs928x9sXqd9qjVJQyPnB7sr3ssRX4XqvLpn8FLMKyhimHAqNZSWDRjmLprBfrQn359Q2eWzeZ5BK1e7",
  "key23": "5pZnHz9V8uAQnyszCRG9ESqXMC7hgiVzst2SeyRLJQQQJEp5r4B96ii3NEEoGK5qqgZ462X9Wduj7v3zWDdLkThd",
  "key24": "5YE3dXeJnH4dafpQAAAQD7PdwMv1RWCdyKR4w8p9x92znbkYE648azqDuggrnzmWMmU65Tozyp32dQh4VCGxj4q2",
  "key25": "4hn2cM5YgDaZDEcwmnSP5PBsLM5JdpJYcdRtL6kbSfZDozXte4n5HBaSgC7Mg5pLBwxr4qR5KHGKxV1WJzfKedwd",
  "key26": "2TPQEHtLv23jRYc9EjMdUnmsKsCCxRm1P65A2X6dvduvp5SdFjyW73AaaN6cSFrpCYwi6dXdKwHwror47g1qL1mg",
  "key27": "2FyLaxaGqAcSGXbmECPMY8qwAGJBFZYEYMkaksppfeQbP8eyMXga2U7jexUXQdAmygGur9EMZSjoR4DDwEAmdkb6",
  "key28": "T1wznFTBNyH7VLqku8RnBNDaLf3Fpu9XAe6ix6TNBYwjftwFu2t75ux4kazhd3UFW82He6HEKAKNA8NKZcuvkxW",
  "key29": "4gdg11PnzXXMPy71ir2XDHpAny6PBfjFKJp645aFb73oDwDGndAHUkjN6tUL9voWV3uAnricikjDKAFtysonmuDf",
  "key30": "5ogaeitFkXeQrhVsBEY1cbtdCLc7NzYqKZSL2jMqhxfQ7T4Zn8MmqAoavX2sSSHPRTCpenTTrpSqodTKmqiQsaSs",
  "key31": "5EvopWWtCL823PhVyQa7HX2iF95vptao4gMdXL7hQqsrHi4K7HTvnZGAL2EDfhs5cuVc4LvU1aZ58Bz9R8Szui1k",
  "key32": "3Yhn5g9ogCF8FWtKYxP2Ydu1s45D8Vp2PoHJWGiGWHkw4tnQmrd5nAyHQzTqa1b8nfokrUv2x28bmyScJBErMpGF",
  "key33": "3oFxRK1MGsyNYftzy2VwJLPNBawZ72gq4LHGe4wRpUXFbWAfEEx6FGunQkdQLnjTt9a85Bj4b17U9ghyKBi1KE9F",
  "key34": "49RUad3TrvMjLs1cLoqNM2Cx4uDYQHqQQbYHUCpXuQLTb1porFSY5epFWGi3UCb9wLi2jTBZVHFaHz67NQrt4mLz",
  "key35": "627Ajv4B7BAsqP3UL29DsA95YGFAj9XfTY5PuPcuP6UsEQJJp4KeKPiSVUFX1mMbd8W4BiqXbP2sYQDy8RFmgy59",
  "key36": "3Ve6AunyvQfjwkocdBSXsCzn7iSxmGiS4i7ptu1YUBk2iAgLAVaXPekVTo1gENYX3ezq5puX9oqAbXSnJwvLJhbx",
  "key37": "28uFJjNtjY6VXeBqWKmRvuawgENT7CkYvnm4i7zacgL38jMNPeJcN2o8eXNjomsEq7Jiykm4LpCfqyy57Ge9Ayc8",
  "key38": "3AdDXEDYJJ6aSkJ76614YixomEceyQ8Ah3iaJ7mzSVk4qVGJjonDycqtmagQkvTgVUEkBQ38w94bLDoDGM5E8MBN",
  "key39": "3Sf8JXeSwK9xkR4yXEG8Mp1DzUqetumGqCbdJB3vmbQJVQj4Qn7qyxaJZhU8DQMyNCVdBrneNE4pouERiSrrHh3u",
  "key40": "3kEBFU7ZoJCvKvfhXovgBH45af7a43yYUTGuE6p3Pte7FTbAraivNCgQzQJ3rYD5oihFBF2ZknXQ7XdUawR26anF",
  "key41": "3k3QaEP72VbM2cdykafuhWAYkoP2RXFUCzcEBZF8FDbkJeWSfjXa2cqfzQ98X3qY5DCd4uStBG37pdfk5jqCcw82",
  "key42": "3RNbmxTDTz5KjRpfVjsfiqJjvrC58VBMabuAHD4yHPKZf5bsVp6Dfe8KAgRe6dETQpBdwEyZV781qMZbAWcUkuYH"
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
