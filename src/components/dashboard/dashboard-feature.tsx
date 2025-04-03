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
    "3LSejMo8HU5N4ms5Q7KhyFQ1hvdad7b61AgzpT7tgm9hQsssJzxkTc7a85eWNNrzWKaFvdZmMkTLBDiKhc5v8d7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJxeFvCHxdBEQXbVQYmM9WAKaWuXbphvy4dSix9t8YDWRYwG7K3Sw8ZvZuoXjN6U2AJZ2G6agaER36Yzto3ZcjY",
  "key1": "2jRc3RSZe2WXs5M9gWWx371LxKKPPf3pahWyMFMK99MVPfW76cZzFpZbNhgS4sQUVmKJxLGvtyvGq97QasuhCFB1",
  "key2": "2BMJWiRDn8QB2GKFcWZWzmJSKtpTcx97mPbkCCwagqgWRAae1KtoxcPnEgpAaUMdc9hS9fAZSXCkht43bT4ysyZ4",
  "key3": "41DonJEdkfFXfgawcdXK3EoGMsJ1A6Vo3cqjGfNiezWLRoJe17ZfDeNCLmG2G34Pq4r8wqoWDpv1z2gDWEaN57Cn",
  "key4": "5D4GzbdJMGjmPykzhTqFpZyFmUE5MLkBKf6A8YiEvqZxM5wUXLxPrzCNGqvJp33R3U3P9uKuzjXLnnDRR4VWiQwP",
  "key5": "SRH7FRAvswpGVhHPLc4ZcDWANJB2ChGuCMSzZwnXmo2CagJ4tuykj7VjVy5rNCRYG9htVT9Ugv31QfZ99QXgZBR",
  "key6": "3cr77KUK75g1UbjvDMQpXVu8BNcC5TDpib1UBtcm7G5qdqSXtY3mYBXPiQP8D4J2sZm7neUjYS2Cjcvn2myiSG8Q",
  "key7": "3UZYqV8wUgJH5xYZBujU8scfL6JuSUEkUArr6pGK2qmcVS8QbRmrUr9WshVcvdvboEJEfT4wm4mqKsPgFz3G1XkM",
  "key8": "44LFRWXRZFH8HxA9dTPjiSVXBCTFAPG17ToB8SzWrW1hwpFLXem4N9cFF74aHkEYucBoYXFquQfn6V8pinkzzFwv",
  "key9": "2t8Sz9x4oXRqmNPWMeVerHgjHNeuuqhbTTq6nwSzfYVMJW8xi5WGUryQRfiLLsCJM6RYFuzGeGxiyseMHHMkqmtB",
  "key10": "3fMUivoXYfnxK7hZ736REyZpKC2USxNVV9Jd8WetpRoZzkosxKNt8a3z5h8ktA4YWNxQnEUTQAnYVgfDKWbJiid5",
  "key11": "67i4Smq4hkwBuCr9BzFD5sAt2EHxqAfHo7bRkDVUpvrucGgYGDGXubPfSFGPsZNw6zTyJCdbHtWt1dhAMPZuQs1K",
  "key12": "2GeXMKRwNugEzxDdiaqXje1oV15FbFjLYRH1fApxpfkzsoHFxup5TJBjgTYtPEQPcYjrabLWruHGW72RUPEAdvHc",
  "key13": "58DF1SB5HjVjMuCyEYBhi3txLESqXTNxhAC2ELykkZaUW3k8ddAU3AwZw5TdyUK52qTpVY5DiXvko9ugZodwY4Rz",
  "key14": "TiZRtshYNho8uq9Xj9R9aKvvhXLexKqe9UiNSvxf9rzzw6Aw4v57qSdGSXYUnCiP4bkg6fiErm8HNXSyaAA53yB",
  "key15": "2DPgTFRRkPXAZyy4eKPM4sxZBG64qUAAgodjw1fHcNN3mqUy78WMWJL3Uiy98RUMLNLHhA1Zr3vT9s6iaU5ih5GC",
  "key16": "2NLDw2kCk5FpRetY163sR9nFd7srDYb78eZd4PrfWtLx812aCeXVzFCBPu7g3mAECbZ94q31zgXAYcjpUXLM3QRZ",
  "key17": "2mcYNyV5dtVsSLezHzSFVWSc5xExextaRY6FZg4jBQZua1wJXU5UV2ZcLKvPoeXdyTdT3EMyp9nK9NAvPWHozX6K",
  "key18": "3D8fsKNd5W9UAkkxwicgLQQ7jqjVeeLYW2AV3fsJPt1BfnMyzR64eJZQ2GUA4oJQRx22awNMTVDLNpub6vTu7i82",
  "key19": "5qySzxJpb2hynDgNEXfky6HXShWq2EUT2hiUVw3xDBBfetws6Kd9DvivwXNTdGZg1dMiKueKYe9p3aYs7GfEGkYz",
  "key20": "5573hAMYFBRGKahoo6aXNLZy6wMWaVJKEfjeBt442VNNuJAHe8W7ESkd86hG6tTasU3TdzAd8iV2xvXbJ41C8wRt",
  "key21": "2tKF2xBdoN48aNhLgrxnnEiXDmoXhiVNcUVxSYFd8PjLUs1hLY8J885HFfY8L6RNwrUr1xRVbpCKPetq6d4AAsxu",
  "key22": "3R3VF8g46ob2pHBMoJmPE3yZ1g2ijBTUeL3JEiHq1S1tPp87fkVJx1JrnxEVsEPq5jZ6ha7By3cVb7F3NvAXxYhj",
  "key23": "38ov6yXp8SN33NTCyvhdQEyTQDJSDCD2WBa75X5TYSb7SMs1yfn4Gzt1KzhDa81z8ZJAbdAQ4uK8VEDGu6mfmDwk",
  "key24": "4yxgGPb3PSGiTtjg1Zwn3fkoRuyWiVGfxv8eoUn6bb8HdX21qugEXK8cYuhfMaZeviyoXDtg2S2MDa98srsnT2mV",
  "key25": "621iFE3L3SZKr47jDaCUN8xPfYFwHbDfdFbkWW83q73CXL8Pq1wCSuzR1U7rVeWw77gMXrbz1Uq8x5XJ3HM1aj6Q",
  "key26": "2Nd7WRmvLzgPm1Y3qH7amGhXApy7HT6CqnsgXGHrVH7QecufQg9euWbthWpKkgCx4ynV6up2gKoAk8XKJKu8fG9f",
  "key27": "7B8Ym9g8ELmeW2zq21144rioeuNywsk5fmEEwQWqb6x2PHidimtNqhsoqBpPdcw3uTePSraEJKPQBigMwwKYn7o",
  "key28": "3BtqNzGu1hYxbYbWoAkCT1ZgtWo9ndyLLgY3jLf7thuz7k7HjvSUNTzrMq1YBv27sJRK2LYsVjsf8nGwjKHG3nT",
  "key29": "567NeJnP8mNuBukkw2Z4ZMXqVU5kdKqLZKQETh9rNoZuVdZfdwDTbPakSaPEnsDoKjVYhFtHmpZpvpwABNqaok4v",
  "key30": "449iJhrhpDjL59nFvtP2NDeRCfNKBwDh2CAhv1mkm8HVnPjc316nxTNifvD7QVAk2MdE7MJ3EYiPuKaXupXgTVAk",
  "key31": "4xGwGtd5NzhvUsR9RY92nQf3hXAxzQwtUhhphT8aXFn8ag4jK6Y5HFEjWiv9JJzQj8QvQyovcM1N3TeWjbpU9tYa",
  "key32": "3RgHkMUsonGtcd8XHh3uZyUKpxR2PAWiM3eJzGQQyHcD5Qy18EWA5hBMpY4REKMY7BuzPJbHJuBtbT2bw3yYPB9B",
  "key33": "5BZ5fNQ4iDiptrnY5Jub2ywtsRwLTcpk5vVBsPNwE86nqn2Z3W1tshxhT8N6jXYSTdhWdTNqr2F9GujovcMrsL9g",
  "key34": "4jaQ76efyaw5ot4Zf2AAhX44oqZctPo4vR66xtB2Csqy5W5nrK3EdMULt33XmRgm7qi5CPC9wFBhHWJQz66S9TBE",
  "key35": "5TrSzidTPjCAYoE5j3Vttq9CLzpLQTfzE94Lnurfz5rL6sVVdys1iov4ma3eVBcD99vSz7G1proUbp4tdw5VqAkd",
  "key36": "62i4AHKADF2K9DQAM3fGL7QrjGiNdZQeHqzrT594NHFEiDfzAsom4VCPhX726KummoN8P4k82UdeGVuU62MYGdXi",
  "key37": "2axgsjomiwtDxSbCdFoPkuETJP2KfDCdHyg8UZAzD2sawxXCiZRZ2w8PfwGJRiXgtRGpEwEq8YxYcBDoUF3CzAcL"
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
