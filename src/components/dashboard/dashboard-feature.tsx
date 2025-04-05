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
    "5dDhjLVRiVGHDGiU23gNs7TfAHACjfZJKjL5GXL7v2uyVEMSc1qyB6nWBciRLjyiKL2hfQXiVPbnLkwr91KCkNx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HU4Nxv7NWkSJS3ZDT4vo9odv1BnYkm7iUWQcHeV95rGhAzxa3Tmn1Y5eXnkTtgMqrHQA7iDXZKXdNiicWGz3mqV",
  "key1": "3AqqnKRWFzzCpDtdv7DK6LMaYBe4LZXeAY1PbnoaivwyUrMB81DeRXHdHp5oyHJXenRa2ZuuGZmn2FJyF64wGY8K",
  "key2": "4j5M6LsjjmeA93cTSsKQ6FcrhSASqpcnXEcvrraArGWMv5XXk9kYjkVpkL7iVsSKyixitpjiQiwXpM7aYiAFL2m6",
  "key3": "4idG7mdHsaambgWKbLPTqV3ZbR5rYpVsGrWwffaPCy6fSPuhV9teHsmFeWfSK4MFEsYG6uVBM2mNQ6PPFyhGaYZK",
  "key4": "2rEX3uMMwQ6D6bAGXWMqYEGpAMNcKwVjqv4itaBvXp7RMa6E4voqri2UAQfpX5e9jrq3roSgK8wCncyr12LVe35P",
  "key5": "2kz63uARg7ywcBcvzM2JqEGi4969MEH6okAXrZXFCKcTHQ2mV7upLXJd2V8PPuqA9xWfZSD2FX3nPGDsbETX491a",
  "key6": "4TiZQHj9yrUUda7x3eebBouPYfpRw8iUJkYXg5LLMw5nYJURZ5tkveZzxwH2PVCSw5VwLTwKeFzZDmsPFHicwTuw",
  "key7": "4T9ib1haeNPXDSwipteUBL3fDCCEWezw3qyfNuqcpakdKEQPmb23E7GU2MewZftNY2Yjn1RnyFYiGGWtHtk1orMw",
  "key8": "5Pnyf9Ss9XKK6yxJggBtFHwAXzgXRPBsL9N6DPDMafcktTmRWjHRHh2gdkY7d5YYQVjkC9DzpZju55MBUiXkG1Qw",
  "key9": "3jK4bauHFif98HR6RtRA6J7gkrTp91b8iSy8NAu2vSzJqwhHoFdGnvoZDtBScEG3XHvTFRmLjwTKaWch2tNh23QM",
  "key10": "2UYwtBgEWqNAVMq7uUVfcDPQGaRWQZ9qZNGZtEM1ypBvy2qKmcHc9NxVxnVmeY3iVM1tPVNicdWFrGW44JfU3t5R",
  "key11": "5r4z5yTTe5HcV9JQ35UEPqTfPGQQnTfGo3TGPnTfKVfuJrBn55N8n3WLxzrJMJscZ48yvQRh7kqZhDQgtkK3FWZF",
  "key12": "5KXmTgHhWcpn6v45GeSZEsEznezahofVBqLCDzsGM9rEDVQZ8F4t4N42xQsqVXk1wdUyrvLEDv1gjzpAtMShAKf6",
  "key13": "BuyGWP5LVDhjknAv5d3dd1njgNomCMMhJMzwL6zjiSUt9xrjmErEio4r24nGJkK5Gq9XkkjaLnMRovTEd1SK76V",
  "key14": "2tfEuRSQwgMNFdnFxd5yZJgJxgdA4yzMZf5uiw142NyFfTgUy915HcK7JadVBjKufM5XMUp5HikkZrAV1xCxz4Eu",
  "key15": "2iGtmLn3rXoprkmjnjoBf2V49Akq3hWMr8cSmubDWWM8dMHueMMt6KSunyeD5ibR3THM1PdAWjYR8wN349tnkjjC",
  "key16": "4ob5nH8mbSkQq8qrexkPrsJQQKUAmRetkFoviThQ4mHWxZNQWLjFzeXTjnXmzCrm1VxGkTX3DzbbJ1pHe4mxQdYn",
  "key17": "P5i5sxctCt5v21dtUVhKSjLwt5KFR4DSHKojK5QSffJ98cbCunjsutEykZW7fMn1kjkYHjh84eSUvnmbd5RP93F",
  "key18": "3Vmx6yN6T47bbgxaus7uZbqxzSLnBAMc8NAWqdfGH6FPe6os5prVc8bK2RHFLqycNu2rpbNqAQjSWvYnkXNFa44h",
  "key19": "5WeQyDWZugiRSSCTtFCK1K21W53kcrCLCrVXeo7iYAYJMjyb8M43htD96NBSxtvj79XYYkLp8DEwi2pgNzTy5Xku",
  "key20": "5V94b5poAM67iLuM9d5PqDyK9TJYBWf2z6P4GKsrXDwwpkn7TZWnu9xb9DDCtzNkz7xkTQCo1EzKwcq7aKnkW6yb",
  "key21": "3xVM331PPTU7FtpwUeKWWgtKYHwyXhH8W68LKywWirsGNu5ZRgYUQK1Wp5p9W1mdxgHZTi9ow1Tzri4PPuCiUcem",
  "key22": "3jq4Y4tCLkVJZqdJF9uDvskk5nVjbhMFsvobewMDFBUVpFzLwAwhLbp8Wg8GVeq4b5WL38T2GcqDa3TN6AgjXxJY",
  "key23": "iYWwV3n7xgtsECDBdh9yoBgJM4pmWP2kAVm2szvq1T1hp7BBuBis5mWK3Ybk83JVQuKzTHzLkoy1mWKAf79VyRi",
  "key24": "4d67PBdfTg82Jk3fK8833kCt2cSgxfZmB4dqNfGWvNHcyiAgeviK2iDXqDVsLmmqPjyC8UAWfEWU3qz3buHsUbCY",
  "key25": "dp5dZidDt8TMHYSUmoeMsXD4Vm9nereHa4Ej4po5vbMPreBvmUjyK3G3PEy3BhnrNCZqGiBXN5fViyu85h7aK4L",
  "key26": "3XSTEoR2GkvDkh9iCrjEDQJk7o5eqx38w9u64j2GuSTvobcM26pAQLGxjkysWaUweKi9U9zk8fpUwRGdw6yHM1Sh",
  "key27": "4ZEFQXUM6bDRFYHmoPXBGVHQrcPH47fyp8uMWr8afvDUcc57UHBTjEu9twpZuEyufkWQ43pSsjNVWRJoNWCF3EYS",
  "key28": "UhaTHFPhJscCdNT8hxpE27GtWAyJAEmkSwQCZbwB9SNFfxoX4YXnMCq8Boy8btqQFo1AEdyE87Pym8ut4Zu7V6p",
  "key29": "58kEVgmLteWCigjnpXZ7aatSaT6Auoi2ZWEk2xzv8T5ngBPuzn3wDVQKYH9gPVV35GADbWnoHHUP31zjeYQbL1VN",
  "key30": "4Yg3q9WR2zsheab4SyLVi3jPY43w9rPeoZmfxHNU465WTeB4412AagwUkALCnj2jchC6rueApDNmgCvX34jY6vhE",
  "key31": "yrTmzerPjTnQwR2YXiuPW4fPJjrfjNMEXCwbeNxDLT41hKvRwh4EnL6SnDgk9Eabmtf92uBqMQAXJTR973RtvsK",
  "key32": "4H3Ke3cQ7EfZxngiB2xY7fR7ejxtwek3CcCvWjSrRz8yb4WRniYjQYYumerEQGNvsvXJcGSwFjGrAdRUajA6B4zX",
  "key33": "gWxV2YymZydJ26uKfb1bFRF2TRmn6vQkQKbUVKWx5Y4fFYKHQCBfTFoepMBNtj2ME8aDqCCTS4SawPUzdsC4b1h",
  "key34": "4NZH1738nNKdyVeesvEP8L9WFLN7QXjFUJxC4STr9SmJUUTz54wAzvJyHcm1WFtBgeTThfPD2K2SwYUs3hxxFLhV",
  "key35": "2MjQSi54Jhf6AFUrqDnFoNJMMwPjk22QbXG4TZpdFhtmh9ws7kTDy6bzuY2DdHLJhN6UJGpDMFhWyMdjwFXvMWJR",
  "key36": "25RYKqSNBX5WA74bfhrNf6CsXcSsdnZToLDqjhgTTQHGHrjXhQCuh4ppQzNKk3k63uvAmxE3beProo1UbiMoyzWk",
  "key37": "Dwvi5bRRSGSCDgoDyCiQEfsb3DAnsZXBLLiKC5uziFKtuTuCUqo1UCpgHbEbgthpjYSBAziDNE8WiRLmZwtERA1",
  "key38": "2UtSKNSn6vkW1adHzpXmtJiH5YzBqsLNDZTj6hmHeZ5htTiskyXAaCuwwLob4T7hHzTakLDB1gdi2NRjXPjxAJRV",
  "key39": "2tUUDEgukxHhh6FaDW1p8k3T9De39SaDrxfbEUyYWKcTbPXF3gNpt6QdXqUES526Zk6qL8Ut3zxA7c7kPNLQ1aoP",
  "key40": "2ecuU9PaoyfefrHe6QDAKefmUjafgmk4Ha6LG6e3M8Bsd52UBDG8WXHRvZhKA1tCrRtsyCjfHNEjHvFfwBJTazfH",
  "key41": "4KLkhGNYJTtw1qZQGekLeiVCFNabN7s1LojLpbMfuEoDNmtTPsaje7Pi2qU9Dqa3CKTowN1wtXRWD99x87KpZvd9"
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
