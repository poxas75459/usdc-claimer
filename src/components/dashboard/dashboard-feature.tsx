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
    "2sdLb8dG2VdaR2ZBschQcgyuLCQ9mazTmrf62rcHieDgUAffzMmU35Lw9W7JtgWFU9C5EMnb4JdHrQyZPeAAJMgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQimwD767CSAS7UrxCfKiRqM5J7roXkc4u8KqDNpKLtgVss9HyqXBCohcWiBJVWmmW6WaGZUf9HKKKxQActkmXs",
  "key1": "5FC2Q4rQvNcdjUbCbEo3LZ2owHKn1tCspZKEpRBNk3wkyvkeLpCBaEfG2Dgdp2MY49Px7jBiZXggnx953Rgp2AT2",
  "key2": "4UxYkTsea3Cn7N2M8ELsMcmYDhEHjkCpikE2Xz43h5pNxM4Xvfa6Hjx3XeRf2nFs7C1cUqjcMrSsEaPbbHfpXNzZ",
  "key3": "4CKwVPvWJhVQnUSywGVxHA8csaWXjRimQosdhwKidMXhMq5dPTbCcRXSiKe8UdBVsQj4xXVphitGhHqRwKLQs2qC",
  "key4": "5Gk4YZ1QguW5f774Hb8uPjjdbyTep3arb51LwrdfjvtExMyC4RMeMoEmXaug7jRfmArxnH5cpcGSEHbfjTLZ6cAn",
  "key5": "2N14kUcRE1kQm7j752RuKZXDFz19YabbQrWHmTyBN6rYCA3j5Y4NuNRbTAxx1tFbqacsdm8igtN1mhGYsxD4aGyv",
  "key6": "2BXgSryrMQ3pWvX9ujca8JtgV4tex7YGT5vBPFf57uCenpuWeSbf6XbquZ1mdGBi8cHQVnQHispdBZ4vnZRzX32Z",
  "key7": "4Fi9M4tP49by4V49igSvnoAYRiq5bs6waZZPBAn4reJ45ZYyJ18e1xjnXWt6A4BfVJG4MUqBWzRN2HYGMiCqXFNj",
  "key8": "3D435Z2ahxR3dhTvQ1oUL8eFQepovyJ7Jd1XiwarbAWvzwYyY5KbVNYH1w5D9bjvWwLi1Hje5xLwVxwXdqCpU12U",
  "key9": "51yMyE17x5rDiLmJoc6fcgwSnmtx4xp4HcUHLWx9xGrn3YN9ZAFbiiDM4e8rCy56u2Xzp9w122zxWcLEQ48b36Uh",
  "key10": "2ZRgEVgXLd3hjiKLfyv7KTCnhQwjvYBh4cRRqzvzoTCvR2p5UEhMxYMyEgfWGwRpUTXyG9bUtRniEuP1b7w7x76o",
  "key11": "2VpLAe3grVTHepkn8u4sSQhW6G3NDhGXNHqHP9aNdnzNj5Rc21dPxGgM8UBzrtBD7QkzsDb7fzFW6gzBDTNVBAw4",
  "key12": "wDTwHcJKfknV43qHfdeTjoQF1oSHT1LzmJ8wuTdwNs2AVhB1YuURCLUhF3jxnoQXtQ3QNrePLHsMd92GpQLxgye",
  "key13": "FA5yyGgT4MEgZAG5Su1wktPAZToB4AToFN1HvgRAfxL2NP4j9tJDJqGSxEq3eQbRmJgvF1StdU755ovNtuLxmLz",
  "key14": "4cqqtmr7831WLhnoAdNuhuqx4hZhMmEMqJNJta7iB6AiS7p5oRRmXRJYYqhjUVPfYgcRtR8jZZpDs1eHHXaFk2P8",
  "key15": "5HegL8Q3VHLuMo7HDYY3hiGUKUU6QWzK7xqkDD7MR8KbTzANmxCytPD5Vk4kRpvM2qFGSgSS9jT1gnRfzXPvKmvm",
  "key16": "5nziZ1aTSufEoMQpEJ9D8gdC2vG4CCg91C6qHySKeQoHWCFhMnyCCTYrKntfaXXNHhezsakCCmbW9xvYQ2mmBodH",
  "key17": "TagSYmbdjmDL6abUsirPwn8hkXchHB4rFw5nL59neNPMBvbmA8mUpKud1qHFU3hyUj1EtjYjnYuFTEy4z5cSgUR",
  "key18": "avR29FDqVdEXicr911YiXMBtByiws5DMhTnpPhUMoJ9dYkw1kbDAarfcUG3HsnqFW729LTGLXYd5mGcDhaRyQKe",
  "key19": "ARJL3cxnkEcEGwR3tAn5pVYhJhKE3ij6TSqeMXYH5MUTQZeNmBMkTS1dfus5WSfVAkJBbe8Rfvuj319PU2Y8qC1",
  "key20": "66xMaFxsEFxDE3jPNYjr6iBvphVHjntpZjBd4d2nwsWa7372VbPsbXMSk4HAaeFSGpazm9La5joihd9kxhY8qsp4",
  "key21": "jJ3XMEWuyqnE595a8t68P5R79yNHopSXQmzCqwRGdnt1hmHyLkkJvAnFQNix9pi8deqQ7uV4Lmor8JdubQrBS5S",
  "key22": "4Mdq66sYyo8xm6mdjMt8DuRidht9xD8sMzjvXc1sFTvGNiWkqNhTVST1Jji56ckHknVGse9d41KHLYgNs2Xccvq9",
  "key23": "33nPVjenFGydRaS4gGWJjorgaCgNB6ythScgaV9aDovqhPdEnVz8xe2CKhG8XrK7ptYhfgctTtb7A2hQp6FsyBXu",
  "key24": "2ejPYjUqnWmhGDZdqHP45ajgn5CJKoT7Aeoriy2dcxh62WMG8g7iCDbbd35vwq1uVMJeE73sEHiwyRYm4eJ9BHnz",
  "key25": "4P3kyc9SRCX2F4LRYXGFW8AGnJ48bUynQHpqrv2TU2x4gFHuvLF58SkhmuZ9GqB2UjWTuqoNbaDFMu1TdrDLF3PC",
  "key26": "j19i399nzspgSga9vSNiHPDPUMXGa4oXCkr6oLAieXPM4dUWdmK7WK9SpKDm2auoLmAjoMEJcPnNNSqYKrH49D2",
  "key27": "4QUStnTEEe7Z1SdhTGFsJyDjgkB5Qam2pZSqsaseGgRNjmXQg4KuMB7cQdrp5QkyKiKyXbgovAGQXXmQ5jhTASYm",
  "key28": "5Zv1NiFU8f1RkCuJWpdodeVyuPwrmU24t2udKi2pigM5kx8pYPh1fbzThyAhcAxwCeR5T7nRR3LrvJxL3u2u3C7j",
  "key29": "3est88Wt6FWppwH44WGh4AatEMaP8sR7FN8uGpttMzz21xgaWocR5ctg9naQjLdPYU6X7Cd7SVcMpRTMwyHVdooz",
  "key30": "41jEGbEcMMR4nR6tz6Xx8ABS66Yg4gYCsCzgkqxsWZaURZC55PKmAREsFKbb3og3sanefR4BH2rMfeMMK2HoEMUp",
  "key31": "4rSjsgXzr1YXS9itfkyULTk6CBBL4KbiGij1S5QeyxtBEgZZP1pYfMQmDsJdiCvJXSFdkC9t9pRyRZaWkTeHcsNb",
  "key32": "4Vr2Rrvn6Rs6fFQd918JaMP6VU3fHQm4gyK1ToNACQ7vuZCtbaQnuH1iVM4EheWE8U7hVfcKNhgSNpAtfjhjCW36",
  "key33": "32XvCeYRFN2RD1HF1j2vN7pwqXivBxTkzbbqTUwJuNPnRZMtFT9p6PrYcRF7hSZqoBhfs8BtY6YBXQHvG6YtaycX",
  "key34": "2n5tiGGeG2FSvAz1LfdKv1Xu6e7Bf3VfaHEGg8bSgtVTfHm5NGJfzH8CWbvjDXXNJBu6HaQok2PrXv81qmY8GuPt",
  "key35": "5TWy7WLKv9qwSzJdWaczvDugvFRhtMZKFfb9FBytQ7NaLfHga7io1Ywin4d9ApYL9iAJvuFXe7njAetR87abEhDf",
  "key36": "4VStUnw46M5Nygfzh25ojxsNwyCVYDGJam2Xk35f2H4SEGHu12QF923oaBtJBVHWXBZdmByzumhK3Y96KiMXoDia",
  "key37": "2JvpDUUr5U7TKTMTkecJrxyEykpHexn54uH7pDMBeAY28KMSPqvcGr8Lw8f31eVaHPA44kNCTLHq1AAciewVTqE1",
  "key38": "5LQLRcov29jLxzCH9v3Tix9pBNPQQFAt5EnYXZQ9okUudWJ5h2L3MB44h6GXdg2joKKo1h4krYh7cTSyCRBHJqXE",
  "key39": "5z6xKc6vzCpFV677i28s6TKfNMQ4QCt2mqDeCATgWwheYgq2xNJJnkJyBxdQCidxdANDFdwBksZmbjCtqBn6i8co",
  "key40": "Dm4LdRjUF3D5utpYxSKD7sv9A4Mu1t2zqkuPa4JkiHUt94RjtQ41iC55LPqL1WUERTT9VoKbbc6MFPBSuNyBxiZ",
  "key41": "2mvyy54U22ZFesBee7ZF91qhQvGyGv4JH4gU7M7sP9ouv81xs2t3TCeQp2Mn9UpNLFeuksqWYDNgmWpJc78rYGSP",
  "key42": "3tpQBbFVaM3voXt4h73iT19faHXsBJFrN9WnHW75YzoJQJtvbbpCdHY45dbvzGHSkiFWgbBeuyUoGLnuQvhmvr7s",
  "key43": "5mkWJjpPuX7pdscdrcYHfbNwnSVMNPSgPFchqbkUgk1yAxtpdr2Un13SZhHei36xEm5VqoHkG3qtV6YcPVYer2VJ",
  "key44": "59bkQ9HFWjtgxSTQaTaT1gdSErnwsju3JsbtH31nUdis27Wkcxk6K3TPEequYtZPRP9YB9dpewCc3GGdtRuQJqTC",
  "key45": "2SYt2xEaYsG6MHkw3WQstKGNqyoJqDMWr4EciJyqkpcuHK4fj9LXEar2Ry4KdWi37mEJe8RhnjFLBvfd5H6SZaUZ",
  "key46": "4a1LVfjcnXsw319jxFpaQEQgHWV4j2bbft6Syt4jz2PSWbaYYPhb6XmvfBZusRb49usFJnTGMTwVyEbr5YLyf7da",
  "key47": "4axnNHcmAh9nkVHW8HegBZgnjNKzPZjFkti67DFZi7AUb6jwwqCJ5CCfqRb9W4mZyU2B74c2gPQ3mZaBVz78weUL",
  "key48": "LgKGsavHQCiNjuxS5TpRp2HKVirRVAhV7ZBadyn2sv9hgvYbmsjRiRJ8fMgeSpzkLCAAi1VBzcaSUckqEvXpRdy"
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
