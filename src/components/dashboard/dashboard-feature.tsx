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
    "2bAHjrCiksiYaatJoRvSa9pwHTFqqcrjve39Vj7xbTXxywRjzRZsowFSMzvP61G39YeCxiRfnTNhEqph5QKF7YFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3uh1UWM23vqUzaZVxPogXgidh3k4jiicGKVewJpLr9unfA5DiEMzhN5AZexfdvTDvZU3nua9jdKW6WXV372xLt",
  "key1": "4Dxh53qQrCLUNaqrkkpDSwMgqhGScgP2RvGfCLgaBCANcnnw1dqXw3fB43LNH2QxqwTNeNnUNhxzvwetDDYbb4mF",
  "key2": "kyuXCvh5xZBpmRTAP7u8Dx6T1DNmwSHmaChrFRE9bVD29j4v7AZAH5tiAayfaQCgZPVEDyLTTJvurGAFsMHuJwt",
  "key3": "3Q9FrJbsxGgHDgiQpKyutxpL6k1YdxqSmzKBNNnCP9MfrjxZF1P44pZL2gDtiv5qiubpgfL4ugm65utyhq9AJE2a",
  "key4": "n7qwyUEYNPoDrh49AYk1roVJjDB2AmWfocsoTZRoei4YYE4rCQsiT2jZWvX5NfhpVPziwaKQp1uadWtmtumjmgd",
  "key5": "3DbAQ6G7QWrLj7Z1GWFiqhgXPWAD3Pwhg6S1TaMxgtsLNCs5dPPFkL9gBckgZHZptKZnHPiXDU2sjSkat1uj4PS7",
  "key6": "4Sinaa5HFiAPPNDCYFVQdNv89hDXM8htfcYyZf8tSQHkS5QuGrUbMhfzcU6WmWN4Cb7esptc15AW2mdzBXYPujsH",
  "key7": "5hx79wPREWeSJCTXMtsyfzu2xLXWs221977pVZDZWMBqt57f1Y1staZFHyisEip2RpfiTm95pgsADA5Qj2mQJVaM",
  "key8": "21Af4rwNBtorfY6sUcRQvfk3FhQDtESYQdCJXQAHzJ7KUeWCYiNnTSjRGNA4cGdSD1nH47ZwsWMdKBctEqfpS7R3",
  "key9": "ctVmdhEbVz3L75NonYXw1jGxT1EAhnfJcXRpSCN6QpT6NMqGvwKmGnAm6DBW7VX7gAV5FJVxJSEYR2hdeAmMvBp",
  "key10": "53mNP65S1vhZ5ggcMEjWcYnMEr13NRC3cCxXgMBgGNTrMPhPdn3XQMDvR3QLXW6owNcYvypwZXD9F6u3ozTRwm3X",
  "key11": "31oKbGC3p7M3dAx9UKdqqw4BGSSNvxAiWg1GEVgxG1McJzQpV22DcdmqJNvdADf3W3wMoV6dqtomaYEXfX3eByXY",
  "key12": "6fGMW6EpqqWqn9VvVrVKW9gYVZzmAdBTCMJxkDyT6WYn9QKhWVszZhK7VnMRC3ot9dRjiDKtJXriqeaoUd8JUUx",
  "key13": "v7TvHFv4XhzJ9cgP7AwZEnzc6uPEPQMVRWtg1s3AUc1hNQ4JpKd6o5bjpMqyH5es2JrXkkuSacT89CRDTqXyc8x",
  "key14": "gSBSEL5mDb2aSVuBKvkTDfiqgWQABosJGzoKdWQ1UeWvKyL37ihhth1giXpnBQVGhb95xsmYrxLCzv7U2tVoK7Z",
  "key15": "4UoHpUCKkL2T1oKa37Av4ADjTQxiXCTR9QkYFd5crCfaENYgBYJ3Gke3egVAv2HtkGcVALiUTKRU1uASmdznRgoP",
  "key16": "2qVx4HqJXcLmSAsaavPRrmfpeZDvgs3SipPtwo74xjnP5ENtsYCDo2Zm13Ls2gRjWcoPQpFXSAkahkJ9UKuNQ6di",
  "key17": "ef1UpuVBYYVCbroFiHbWPmFV8yKJootz8pPLgBMkbiQkeP2yDXhYfuMoMnUtn7aSf8sMGPA2WcknaQktuzichyr",
  "key18": "5HK2uyqWyz9gMRmEvCeCQYPf16weuy9DJUsTE3m6776NaAaHrpnjRLqZF7Epnfvnz3zVeRn7T4GsDpEbSLipyoHw",
  "key19": "2AggFQxotHjVmYtUTJ2Kx2ceVf4y82wbUah388UrpLK98xDPenSNQtQhnDJJFMci58f6baFoEtTxFuNvVYS5aiGz",
  "key20": "eXthjFLYMzqqrPRRWYwsUc1PFDDnSS5U48W4gSqzPYuHywR3kDSYtZ7pTtWFQQfz2UtrY7Hrs34rbwVn58PSy3p",
  "key21": "qJmkH5b7LCsMNc78HLwYEaChGKzvEmQdMB6LtEy6hXALJRTDerzUr9sXj6SpzHaC5dBVztjXr3ok4ydSdyrgSxr",
  "key22": "4HXY2VEygFLN5U51LTERpu1b3Ke2L3w2xhE3RJf5s8e1xRKHbMQNtxjbM3jzwH3QS7eCjyUH6j9oLMMWwiAFs99n",
  "key23": "2iK4Hmh4VVt4zF5Zw38RyWCVCgkZ2fNTWGa4RW8FskPXDem3BjeHFPfFprdbYaj3DzFRhYwh8sTS8N1RNUpktsUw",
  "key24": "oxPaMX1mDF2DFXWcnFw1Jao1ffovaWQwJ42GvqyWjT2f7UxRAB7MffFLgCk4KbBeQcNWLTvWACzvnMzJ2biCkjr",
  "key25": "4uGVUJGGpvFuj5xQdr9FVRJsksWrub94Av56gUWbh4osf5iaTGB1ZmderRFBAM7PmuhuNaisVPFgoVbRnp7qxs8i",
  "key26": "2vgcCpF9HVN4cTaShuZER9irgewQh6FVu776V3uTRTPFQiaeJkA6mu3guUu5YXSELfHL9kGtgiDuo4uSzJStDnfT",
  "key27": "5L2cer7b99jboFUX5YLbEV8ZxBCGHshecMki5suDVjpjTvAkx8Hy5iX5JXLkvNvASngiNb1WzXHja1zAqmfBTP5V",
  "key28": "2qAr96PCXvbihPBfG15TwPn9jaCbGVU2egWeDxcPrnvLLYtahonQjMi5DZQWENJxoZTSEWUfBTVoChfkBqedQ634",
  "key29": "2BeRooscC3RNUsvCM1Q91xKhgn3dHczxNbgzFsN9PXCvwkiSQK6ATHLPBpPz4t4jVGMdhyR9aTETo2KTKGnKnSL4",
  "key30": "3vxTeXEUWYY8JNXNUx5Q9PumYmBahVYgNYiTg8ofTBLraY1FFoW7ZUeHySpirqHPLPe5cbXdzzt6gCfYdmNpNAAd",
  "key31": "3hNqzkH45azAF7qMtf6GECsn8geQVoJmqb5sYUNBvNpbB2qeG7MZbFRgwzUaeq8zmJ5xKVvbwTYjMqbzgqVS8dhH",
  "key32": "5xMoKncbkYRNLspwsnyBXqhAnDjWKEVU8hqcfdWPe6tmiUWaA6pD3RHkka1fUW7Q1tJmNStP8z887UJZhmochQea",
  "key33": "8AbEdHdzUMeguqbRv3QEFGFGvCDcBRa6F6of7pha754wTNgSCCZR8tSgBGsz2jVGfadchTTnnWJVtfq2Ftur1Mc",
  "key34": "4MwmCft7zJbLd57MqAgm5tGzhWHRN7zkguWMorARKrR2pwdbYqx64ZQ4rEEc26TDv7n1XAMu2j7dRu5epZtWdEox",
  "key35": "5JXyzoeSKV6ccgep6DbdpcdrNiiJti5vSADmxAGpVQD8ZP8eZK76ZbMwpRvKrLpZUjYaycMqzcc4VEGH1BU4b5K2"
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
