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
    "5bawisxY6ka8bGUM9tATVCVeQyzAWPsgPMW1SdE7bX2cmiwptfmT7yGHwXmcVxFju6PFjDzDJeEJyG32kjZdAsUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNPLovqEeyUwaS3HnBgoBLZphAmp89651UFobJo7sMsw6iARG575sBRLdXFX3u56d1VNjsdCcCn8bMvG1kF7m2E",
  "key1": "3dMiL5zNNJTYDp7AfZ9Eo7DiPFEiAam1ugAHgeShAED4rFrDRHm4rUa1h7ojTfhTQakT36T19TeuJP7TCbB5n4cU",
  "key2": "4b7CBWSdiWcrQQfVCTvgZJWSfSuRvjNny5Zgev3psXTKVCrZaxTADujpzniWHhweYVcfemB1NEaL9CRjP4WSiQFe",
  "key3": "2Gvh7UytQxHAGK8ThE1GKKUZ31Ws9jj3YEzmqge6SeMe7waNZwBzTTWWtggrXq2fUvgAazda1soao9Vx3ZktLG4R",
  "key4": "2K9mTP79TFtP9etTeKEB6LUut4X32hUjw2wLM51edzGacFk4odAgBCA1C7eGMcKFzdfLwPLv7DUHYVhoBxG2YqEL",
  "key5": "kAnb1Bg4mTbigeULDKW6hcYkSJAQWRWxPPgcxa8cQhh91N4kee5izRJf5MQpZsfm7wjqfYpcM8XEtkdzW1VHyMd",
  "key6": "36ELVEe5PBxDixBcvbr84hNCBN3wFhmDF121g2z46dSG4WnSXzMUAKcRL9JtceMmjaoZoReF89Q6s1FUXA8Rh3dw",
  "key7": "MomDEg9hxeJghej4uEU5Mi8NjXoLNbHyjCWLXYaa9ujLoPduGr8uDiUsiTv9QwKpEq6iStTF5oNtTcDGeLFQfyR",
  "key8": "ttjDTUEnUDxfku8L8N9GWT2wGczrHrEdH2HGitzDBPpWtZi3TffvduXQq7rf7dYN9APNvTQzu5aQHvyXoRPmYKV",
  "key9": "5BFRbeu7eiVGxp7AK5BazT1MWGwJPP4EWQUBUjfsagNNx8aRoqbgEKAGhSfBBubxwSKyr9DcMiRZ9VCKqWGpeiNk",
  "key10": "onjsRxF3bNu4xvxkf5zpzSgWM41NWtL4wRoqD8wS9WQhk8WSAbX1Rb5crVH7JD4pQLiBvPygZcxedcn6nz9RdAh",
  "key11": "5kCEfdKmmwBmdyQBsvw93pyLcScJ4JkfLP8iwKYC5JS1cqXSyMW1qXyiKqw8UyyKtkA24pdyssK3MuiC5qSzmFCr",
  "key12": "txMdQmbnNczFTGeobsSFBWkYoF9BFoXN25RsZ2o8HCFot4FrKbvmuhFYRX34gusyJhi5W32EABQHMJjAztGRc1s",
  "key13": "3xdThC9FfPocFDCXAhbiiJJAd3dipUU3dJDW8bx1ws5MUbcTjNTkfQcm55nm1uWNWqCeuG3Fikh1ZiHEaiCjC8j8",
  "key14": "636o853kuUmjZGjGt1nvPh3RR7kawvMZKbYsX3jrWToSu6HQBfWYebYoDkHKYgPtkq1WqSLoiDvZ5xRiZHPdD6Wg",
  "key15": "YqxK8eCcX3dqPPZ6KYqn7kvQNyQuMRi2sWxgeWUK9rRtivLfH4W9NUjaLxNaUL3c7jg3CWdLh2TCDEQKQb9C2Rr",
  "key16": "2fTw6takDcEV5mvJkuibatjJCAECErtQPfKjbSBdBTKMaL6fsHtmp1ddxiBiL7YLgJ7MbPYwQuKoqGMn9ZFa6L5L",
  "key17": "4XWLyqmB2zngACSzzYgbGZpruqbBc3fx9tnBseAMJFT14NnWX7feeTjCjBJxALBQNLehBHrWSSxbczYnSnXj48dv",
  "key18": "4r7WDhx9ppcvYsFdhw9a1s7aNim2cdXiRgK1KdtdRiydVBvdE4DmCEfWG6ngSr3J9woQRzhLpfxwjCMnW1aMGUsw",
  "key19": "53f6c774hNPtRuXrdDxFLyBtXz4FT5YvaXNi9es3pUcZwAuGcVGidstFMDz27aSuDivHsVSEczRmq3LFgZkPSr8D",
  "key20": "62mSVWe45UR1K66vm6w3Qo5VDAM9x1Xot8qGJuEXHVKXZ2jFeudWhQBNbGCYLEAZkUiTdmHFta4Xdx4odjTPxCx2",
  "key21": "nXe2idMT3G5tvCzM3Y2hvz2ZuRZkS38agTQc9mFoYM77i6Kb3usaVu19KdnjvatgiAPvXW3GrQQdHoLQgCMYimz",
  "key22": "3b7RxfAWmUbiRYoXzTHSQjiqGDPM8QsjKwVWawkQ8oSDtYY71pYQ7vXyJLsf4Cq9qEgfRvbnpoJ4HjVZZ9mgUBsW",
  "key23": "4AJLEeEdkLq7fH3jPFZrN8u3uqPm8zvKxApnKrFziCuHojYcoVGDLgowQMBBP8HwDSMWXhHnV921rJBSqqbXL2rf",
  "key24": "4bnXgM9TffFvZPULswCHHcfBeGTkbkYdXfTocQmDDHAysWF8tGV8v2cwdy2wiGDxrZ3dEtNwSA6mRS7y5p8vLWbQ",
  "key25": "vGcHhz1dU4a1iPx5PRgsuPot7TSA7F3Xg9wxCT8ESPw5wKBnHXchGVz5PBGXsohojEgVnsW2CrxiA8YNx2wzxNL",
  "key26": "pXPXcX55J1V5yK7yoDHevufPfdpLwWj5sthfniNZA4S1DNmcqxVdQvSc845qQHdQCKGSgif2FFpovb4irF6W2hX",
  "key27": "7oenYVtzyNVWHLS7eHmJKHXEA6qqcU4jUPtZMBrCyGgJAFR7V55naxJvW7xD4pAunBRgsyE5gBGa1yQF7uPyjHK",
  "key28": "3ENC13cKDimtRC9EVUcKQftpzp82huJ1SBkVU792ZzrrqR7ujixCm6Jcopsz5CyQqYsxw76Qs3JTG2VoJJoiCV4f",
  "key29": "3iD5LvT85Wj5kNtLPtEsCYshTPzof293Q6YVnUf4hKCYyQDyWVZ7TFCxVSS9SCwot4qdzGZGFKB6V2Eq3Vwg57WD",
  "key30": "5Y2M2Vgf1e6oLRK3h9ia5SxW2kmKpQFWvLYQhDyTucNmWZ2HFUf9PCNJBHiQxSpeTGC8bWihc422PBgzPcT6qd8u",
  "key31": "4bM9Jr72qGuX6mAraRXLQ166uGTKXKe7NGsfRwjJWV46MeXZDZ4pmnQqE47vqGiwhkYEwLFabw8sXsx7XkhB233q",
  "key32": "4ZXNb6hZwUy4W1UL8nTATkMQRHkinjAfAjrdDZhKYmyr7iJksPpr95HP7UvE9tfEqPvLgQjgYufemYf21Fse2X7J",
  "key33": "4U6e6rC7McYvxmPW1V2FQ2hv5BPYEuztNwGNRhRucn1QTLYeKusXLYKbHLNFExvwyYzYBxp7ayGK3jxPgGHrcS5y",
  "key34": "3XMAUju4qKnYuE7M7enz714xPNB9A8oJMLRsEdCK4eHXp3iZjY48KYHHn1hkTqynPD3mbDHUEASbGeeYwPKq7vZD",
  "key35": "3Wjs6mYejYp7S8QyTXEg5CDXzjtLQQT3ybn4wuPdADfRdWj4Z6oRSuuDiTodgBnAvHLvEv7XykRVtsJv1e2YjuXq",
  "key36": "22qGhdnrEDvcU2ZhGrYLnMHiX9ttxfDz3wwACS8S5kD5nv5oJmTaF4C4Z2UDaM8ruPWYDS8EBW7FxsH7q8Tf76mE",
  "key37": "4tT3YVazabk5pFP5MV1zEdiSiTtVMc98G1j2YqjWkzmBJyfhpVU16ZMmF3t8PPQkKwxQ6BgyFv6BFGLYHvwM2mzH",
  "key38": "yTVX7WMpRSLYrRgFiB92XujPg5eCz3ZBfRUY2Zxb65JXpUdmzYsCrLQ2RfdScnb8NyE2hZR2EQQT75d6PBSHkKi",
  "key39": "fpAfqkJWUdARhmSCB3vP7mzA8e6fyS4oLY5CmS9CVyn24F1Q9qzUJUJddajqihLmm2iaJp8hDN7rmJQMR7o5NS2",
  "key40": "3TiycyAo22y6EnwngYTuHMJxLWehcdsBoe4vRChb4aYjToh46Ze9rqU21AdeWjLt4yP6Dc65tsQsxAZHnCDcaSyc",
  "key41": "64nTQ8L69MGBK8zWbKBcGfGwRxk25tTxNPhWjDNsTnHuM7m4FqsX9mZN1WyMnZgFfy64Qx3AXu4Cx6XLgSqZkT2q",
  "key42": "4Y5i6C7at6xEgXMBKbFjcUky42HLN3nEFFGev5TN7eTbgnHYWE1Pn9z9e91bxxFYL9tddsUen4MjdYUetDN34ecz",
  "key43": "2iMWav48ZGcKhqz8tQRK862BTh1ZTZSoGt2hoTk2qFX4CPwPMypfHRuHx8wcgQT6y9M6aLBBeekjtpwSQbBQzUnh",
  "key44": "5RJ532zrpyvaKSYHfgvJVCJbKdV6F1jnsudM9Fqb2aD2tY1ApFiP7si7wq6tALQ4wYsiddC9axBTp3irvvwJDsLe"
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
