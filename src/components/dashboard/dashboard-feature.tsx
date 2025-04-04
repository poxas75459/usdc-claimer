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
    "4ksdumRh5X1wacjwCVS9G3NXWmj2icgpUEPxgpQMDgKib211d9mitS6WwtmhawCfsPixT6uF5GYFcetY3TyXEbEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYukuFHx8CghuyQzbVSAtqLoaN144jSXLPkRv99zjZm6Y1FFMsXbu6M58PeXNGUi3hfamWXoaGD6LA9S88533v1",
  "key1": "4spyyE7ouNt3SEePYZtc9o5pauoXwrvSTyL8C5t5aS49RMcyfjZLCjdoDfPgcx3S1J1S6dcDkfwS4DBNk7YYSSMV",
  "key2": "4RFzCqnn6136wEXpRLCcAGCxJwUxKtRtpA5kZzsrEExpG5o9Y3SAYPSJb5kUJL1JoCy8FwXQoj2sFYFHaMuMLUa4",
  "key3": "2g7mPYd5atLKfZTiNN5D52AsrRWde99oFXdSq17qWyiWmaqaB8RGFGLiZmz5UWf7AnL8fPbzG2oR5GsgfGREFtHu",
  "key4": "3KGdyANtHZ9vLYXxGkhTwoWMW2hgH4oMRBBznKM9urNwahWQzFNpq8fpyJS1qEd9uFbUX6EsQ1pGEsCBqupGmwFF",
  "key5": "41mF6t7AJEE2iDQ8arwpnPg7tsiqUqY1ffkobjVRWf9wZpjA96e5C7N3mGzsXPNDeiGcSggLRvU7x5WNubLPqLhA",
  "key6": "5e83gpvv6MFY9YVaSgjTDt3A5GZBJcyPb2Kh5si436Yb2VDnrJ7Y4Bb4YDXGi9es2frCbLgD2KmYTsmJgRG4P4Vd",
  "key7": "2tZLU2sVhMS9ZQwmio9wv8fGjWoLFofKshnoDEmyrqSX38QNGJgjvpddD944NDRndqfT6ZtviMPnxNFhycYdAWyf",
  "key8": "2LxdYAqDqgeQxLP3zvpjZQbeuu3nGGtjdPijxT1mZqE7wVrto5CSBBpFf8FxL1o9Rf1S1yq7chAQKBokbsDRAVLj",
  "key9": "5tei4H4EuPFe2mtFCSX9wvKax298jrJpRxoVaaWk2J8wgZMbVv3AHZgnGsfVz4ZeJyxVELJmoTsTLaQsZwCEmkU4",
  "key10": "5DpkqcnWK8t4LDv56LAtKTz9vKvwLs4kaiPQWJiCaGTgBpdLm7rQXGkCMQqVAA7Gd9MzSmTGdSgzVmyh7jmdRqoR",
  "key11": "3rvajjwu6FkEftTrFLGgiLD3cVb2E4V7ZF1JM5DTPsnrxTmDmrJiFNgWUJ8zwPr6cy4E34kTwjkgngs4SGCS3UfK",
  "key12": "2f6YxYqTukrS3XtnLwPx5rVAfD4p6LdRTDVp6hru2mAEYCLtFVg8B2nrdbEtiAsLBNMsDYanzFq2nzNsA69sRq3v",
  "key13": "2T5EXZiV5Cb8xnVCYvhZf3GdXDRCRuPmsSeqb6cXoKVbkf6LpJdvzjwcj4A5N7baSKoWW6MopZT8LgvXFrFohiUx",
  "key14": "cSRLSma3baJMVRpdWjspQrTLxApUG2vVGY4pYFH8QsDfBiQ11T3sqh6US5wG2URFt7ofciGSyYL9WNUcLAz8ntZ",
  "key15": "6iSGmr38cY5uKyBAzoeyFJHtStXRP7JfhMwjHum9RkMPrqDxp6cJcmuX6p5cKUbaeqvu8BDjZVf9TTbT3djXi3g",
  "key16": "56UB1a3s2pS7YjKo359g2VYE4YuPykaua5bifyLFKxT1mPCqXtn4uhGBxXGA37m1h3L2zURtg6fTXU2RvnybCAYD",
  "key17": "465ofmWMwFywDAwqPbnYxoKoBQWCgbUYkDDcxn1B5GPTL2QvDXuQ3V7rwJfTZBgHwQnUBq8Q8vzsC2oRX9AK8GZw",
  "key18": "4aqdJjSCHVmxCrPboCbd6Mwt7t8ExPsEvRHY2AWQUQV2i6XdW5dz3BBhJZLRvgFtbcHsXEup6LUGymiVtymVvR4P",
  "key19": "5N28LocDZnt7rLqNw6n72ommAHrGL2FQVE91n5xFU6kpiarxrMWVTi4BJSpHFAzgsa8kRpqbZjTBmeNzEu63FELn",
  "key20": "2vHQxxrovsSj9yJ5GmTooad528oA6tPejRwm65HkeaZtmiCTVQCJ1izPP667WYFCi14NKMWfbEkbHYdTiHg5oJTb",
  "key21": "2zWXsd6ajT1J1pzU2Cp7DE3Z1AMYy6nJKBVYgnB1bH3maz6pD2JY2L15pi7m6xT44V1LjARiCJpxheq9Mx4kxtiq",
  "key22": "33Ziw3JwJqHm7HvtSQPcT4NNHYzacR5JEhv6W7Y3bcQtNtiScxKpoN9vmRH7W8uSrbRy1kgHf2WpcMSF4j6MmNpP",
  "key23": "3UEotWiygXZ3m2kaXGKeatJtxduLctERdiUYbdvMkCCMt82rxuxWwd4Y7cLvardbCFwf4WbRKnc7yCD1GNCrhedm",
  "key24": "7gda2bgKLGr8UhfSkeJxEZTaymuQVP63xSks9iw72hPG1RZAhk3tWR6cXkBaPyjs6FJryWV9HKyo5F6q3xvtzpk",
  "key25": "2ZUx9EBggFysVKsiV1v5hBd5ZW65ZRZhWXXHLkC3p9k76HRqXwDqdLSrmPbBMf9rzvNe6Zf4GJqYWvZHgutF1zNR",
  "key26": "RSXVXCVXEyvPebqVjtfhXgiwJdwGFJWkMUjEM1rVn6xwHLTcSPhrjnVJx6a8GBJnnxCMWbL9wts8v82sANus1zU",
  "key27": "3KPjjMSvTveyoruJ3F7FLceNDnpxMQQoNjVaXH6AEDyB5C2cuC3qpHXEGbRNRBZM9B4HsQ1NamvpE9PA3BSDaguh",
  "key28": "3Q9GBYcGtxovEAxXacNRSVnQhjzX9VgPwP9PMio9ksyKDkXujQZX9rZgWCKfbA6SddBorke6e6Hu5UAoFxzXMBXy",
  "key29": "39sBtr71cV2SYokG6Ahk1ph6dsFBi23ScsyrRHDe7z1FbFqfuEww9tpsrBHbUWpXyMfqSfXXdivEP5CeQzhdPr3x",
  "key30": "5DAkn8GU8Rq6jR6t4L5apq6bGrncQi3GmxJAdDAJBM3DKUzv3sFzLL4QJs5Re7KHptpeyp4ehe5ZPZ75yC5Gihad",
  "key31": "5VsbPzRJU1EdyKVknygjTiwJKCxTRSh8GN1jNYVANVVEMJmhC56eFXg62Vi5Bzm552tD4xDhKSmj2tWSj6jSJYFy",
  "key32": "4aaPQAYLimBmuQ9f1m3dtccnxuUSwGinQwrsjihdUJsFDwW2Y391vLepWaC6Gh8hxgkh3Fmc6waGh3UKmKcHECpx",
  "key33": "4mbP9AcCiCKT76qR4ZtCgpfbM7DCYobVZKtoy1GuoEvYs3jd2igaWNrgcsP6vtoHQx5aLjAkVFX6pTmGc3U7347j",
  "key34": "5qcFFTWFKqAhaQ5F2LjqCoeTq81yUWaFp9myUXNycZMiQY5TKWRtkRbPYZpuFbs2EK33FpPRcg6wBi8iBKPv2MPd",
  "key35": "2pm6Pvw3Rq1Ep6wE1hBgGFtqqfBS3KiWm9dWkS4pDqXpBUnELPq7RXFYwcrYnbyR32wTKiammt1BWWJVi4xPHyrE",
  "key36": "3G4sK1LjQS7DMwGz8njdeX37cpfU7BBQJFgV9GAD1t7zFysuBxTyitTA5WUPMnZ24ta226T5d8qzD5efZVnSTynp",
  "key37": "3TwiWDD4xkJ9rt1zzTJb8wN54frXC2UxNniJY3S17rpFQAWQJKEg1g7wz7mxJbpkxGd4Kr2gF5mNs1eEsh66XKCJ",
  "key38": "5MbdtiNYnNMaCiSr9tD73wZbvC41XmQV9dVuaXRNs81seQuuaa2ZGvnfxGsNdR1KKNSdJKv4oDnTH1mWJmNgtMVQ",
  "key39": "3infySpREekk5a6aAHUNQm8UeNKChR6wJv6NzCjMcEr8T24PEv7u5WML1eaf7vSsL2nmxzWqn52xiZhCF9fzrkef",
  "key40": "2Rr66N4zHH8httE2omdK5DBjvYDttbV47zsNYgmWqdd4yatWSK55ACxLx8FvDteWN6pwcLzrwx1SNARMgLZeRs3x",
  "key41": "5TnAmmJ7jkp6Zdxn3uPHGBHqeM4QKkBiNyggJqgTAvFL86tVgAPpHZR4UiMwvBB7o13f3WWR4Bg8EmKKTAkTxXcz",
  "key42": "4u2uL1YUUN6qF9eBBfVxJUXVgZmUBeC96c3C7vWAgYTd3WejdzFcZXsmi82Y5qYMitb9CWb92scfojSSsPbR9iJd",
  "key43": "3iT41d7P3Vg5ehN2EqBWMeok4uurTxFGjCdFJ5pvXFxYvM5wVFRZ5oFewcheJfw6cXxXuXQRbpHHCj4datfBudNa"
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
