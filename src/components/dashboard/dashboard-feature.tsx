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
    "5CMfdHV77Qw5fuGfRuiG4tV2ocib4wXxMbx2bavFDFJNgsVB4eWK5ABt5eR79BhYb7M7Y3RDEAXW9CJytsvMzKnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnviXJf85u8jduEjzhErPUzYVaoKoY72G2uQ6vtPVMU4izZfzLdzCvnPnzjyk26wXsF2dKUMa1Qr34ZrzL6g7RB",
  "key1": "674Q9gBPn45DYj51MggQv98Mo6Xa1g9fcBeD8KCjnum8xfyXDaFkASnhAMRmXASGhe6NYpqc5o86BMcMrHrkZqK1",
  "key2": "51wFo5QLxNe7i9coqWLhgsyjA2UdseyRwPDYrAXfE9JLArYt7GiZDnzaqNEJYgVcHfYseuhECfKiJFPU3y26xXMZ",
  "key3": "CL5JNMh8RkFdbgDBoH1m3fjHMdDpNiFmR5V83JrqPRFZMMfXEz4diBtxGCGFDQKESZCubPwca57zSfyeuce9oUC",
  "key4": "5fWS6A9T63gSmo9om9Y83kjSZdKe9f1SwzV7nddXhTKoHJChTMSnjfBwMVCiZ59p7DxEbHXBf5E7vtW72FYCqJNQ",
  "key5": "4m2pWToSrHzn9vCtcHdMQk9DsqXc2CV4R5uuwUqeKMF1QwbYZi6ywotgXhWfTGB6P6VspLwpTA88qSNxqVaDG69N",
  "key6": "5UgrhDBEM1QatCg51gKPGjefFsPec7aXka5cLxaxqrjCjiN9Wxzj8cq8Atwao87MPBrjM7Rs2wK9q48PkLC9HMgy",
  "key7": "2TWC4SKkeHhHFjyRLbxLnFZg9PvvJ2tr5UJdDrAeQDWSD12FKUD2roLz3k6gS5SuUZusDpjsi6s2UFMAjaTWb1FD",
  "key8": "2j2XBVG4rxgnSM8T5HDgkBjVxgchnNnksXV2gojosyGb9hfus7JtD8moFFwRJXkTk8dx7gM1JyxBFEwUnbGnqbv6",
  "key9": "2X5DL87gzPYqdEdWLdEPEC3ZC4YhbzPuRuJSrY99DRW75WyK5gaLjnS2hfU1qE5uvcqXJUqWM1Gobe8kpxiTUkjK",
  "key10": "s1rT47zcCuvxBeRsKT9feR6tgAEax6UUP13Y1wCVGUH6yU9F52puLQq9vvkGu8S1prx3R1YmHJYH2Wtt77rPgKs",
  "key11": "5GGk7tK4wNewba65ZebrKtKRB4B5wo9o4WksNE9bDKcy5zP4ibFTY9h9HLvR7E6XbeMJy5LdNZrAUDgwR9Gi6n4",
  "key12": "57w2TnRr1ksVXaECn1epiwwDiD1MAfDX2sDGP9YJewH59KJ2sxWTtXcJwr3tvpQStfyLeYPb4GdsgaN22E1Pfiug",
  "key13": "5UMnff8mGrnjVY42QQr6S8NuJDKRopUqQNM6tJojyQWZUn1XV4ZFsgW7c9JRUt21MZ8VraTr4fBeE3kwc8dygiaG",
  "key14": "54Cm6W8dAh2Yxb842A4oDnnEm9WcHzTFZffvd54Xq3inPappBXb4ZyBFBf4RVEat2Nju6qkNFme7zbgfGM5AvXDg",
  "key15": "3paeg3WSHB3GE7h4VBWHuy8h77o46ioRfaY6Zy8WQv5qT6TgRW2LPSFirph1ezjMTbD8HcLJASECEW9kynhUdR9y",
  "key16": "3Kq2o8mG1Dy5kmd9AR1qzswKEMypgqUuwUwjTD7X6vdwhQopB2om7B97cfoPK19mn9Pe4Fi5w6NrZbZvUptkJMT4",
  "key17": "4mYPMVCkx2T8kSFptumzNJUR8VyD25Ye7JgYEiT1h5ygjp9V4cnq2HKRFKxgQyW3PaZgdAjZZX4UnsqgWAT3LyAs",
  "key18": "2gGb24c5TcH5kc6hTz8cRF9jF7zb21LdsAnsX4pF53CCMzhehspsUbn4Fd2HTZp5fgnGgWENkAwD8SJwx1P4fWdi",
  "key19": "4fS57TSneJvhL9P8sjM3UsWe37itakwpoAwCoeWoZfx37joZHuVTFGd5vxZKo6yyuUjhkPoFCCTnmFuyARwZvkpR",
  "key20": "48sRRKeC32LPKF1jGq4RnXPVeXjgiQyUR5JPuUWRmoo8ZZqiGoiQR2UDadQxoV2mw3wfHYWLHUsBqLYFUrpPGNHm",
  "key21": "2u25wGphipRKgdNdDhymA7rdA1N25CLKj1kKg7DWRaFPNG3QWvrn3rXEBVKhUVNxYJJtLwXX91sodNwRW8chUDVc",
  "key22": "5MiwtGRBwPHZQmt9wmGq8S9CRv7XcbLKGJRAqj95whd9Az9qHx2qQPgto5uD693BUt54fLTHHG5oeC8iF4fRoDBy",
  "key23": "5KXR32LyWhyBzgpPWbpobwbTnmjfCT3FDF4Z41gCm3rDVep1mP9PcaSNijt4wc9VQahqHEFZJ2nww5CEA5bhpPdw",
  "key24": "5jv19xsTiMmok9ojFycrEXHgQZUHhZiMQTHeNBoZxEan9FjXMxDshp6boDWKyvTPbD4TCDHQoUUppxFwZgZDqa7T",
  "key25": "4y6tN1p9FVJv3mrMqyZRCbkisPgUCeCX4n4S9dL4Nv4ha8ZxBW4PFKuhKRWVywTReXrKYqyAKHLgMhgA8gJAepJC",
  "key26": "Vu8QddW4m14uYdUW7PfxCnx6v9bNSjfoJJuLPdbG5LThr2GWHq5exfnhH9XJXsF8Wtc8L13rqhYyWeVWVkECbsm",
  "key27": "4jbpejaRSEJrvnvsidPA4nWijkrWZVJ4rRRu7ZuHPMXY4hZ4byAvJfyRhovZHPYUt6o9V12hAJAgA79dB5ii4wjj",
  "key28": "nGzjJhXLGFauXWWjwjnqNm6Y7UkjSrum5d13YanefkDSkUSe37eHt7vCpStXEUUSNJTR5NZU2pgKZ8tKgf75cZR",
  "key29": "56v1SqQLdhKgNJWJioATLw336F2Ti1nULPedvANm3pQavv2UwEPT7wv9SMhti2oUM3giCJfLigWnX2UyRAhPxE8o",
  "key30": "4S97Dp2YxrjNUQyFjzbEfX8qSv7VtMiQiyQM5M2itxzuuSYZDNDn3Y1DqYCcSpvECiGJTvfLQ9mRHm6qo79cUaZb",
  "key31": "3uBS2kVWDjB8CZxPakd4KninLD5K725uW5KocqdRodsNkjL3xSsbsza7pPTV2CU12NFVyi94srFsE3Uoocqc9ENe",
  "key32": "4DDoA4tBMYHGcyoGmcZmtoxbdiPKUVYFy3gXt8ApjgPFf6uWdYstUBT9rVKEDNm3dPc8TSs9CUf3nG1Jx4UgNs39",
  "key33": "4BjdzorMu3u3q5eFC18aUxKReTYjmG9okDVbSwsf7jsfrxJdUHxyh3FGwZZUvDfGcReNqegqRrY86jWiKGBmzHwS",
  "key34": "3mofxKVHB8HqzawohkQRRQqELYA5jkpPPSyHe8ke3i7rzowt9Km8uyKqeREWm4NEHGn1gGW6T5ycdfCdWpczif5U",
  "key35": "dCqnZRPQo7M5SShgWX5cbGMpgcbAq4k46gV7bTMVoH2fg8vkkQL9Wy71DLepYytvuGA57Jm43MaREYGExL6zm5V",
  "key36": "4quxa3rpq9ceppSdmXsMjE1bgGJ2SDggY5rtqYg9S6viNeZCMndUnqUGgtgjPQkyedkamhyUz4r7rxhcKDX1hR2b",
  "key37": "76D67tYm6CgZ2nWeJmmA2UrDVni6YwftcSJ9YZ24VzpfuZmqRxKemxrzs4mViB21CT5w9g6iMh7iM7k4MsR2sCh",
  "key38": "5UA59uW8DaxZ8EZHEnKvFsgqiWuwaiRyV2x7SLynfvk6yYkF5aw3Kg7nWcRskgniqBvbopPJWRmsDrfPpNhx8zpi",
  "key39": "49y6U9hdy9qaZ2kz2cvFZC9hLBkwxatNxcUBt5YC9DtxRRtY5FV9maQzLsUPzzV7wL6Bffafdf7UFNfon3PdWkKs",
  "key40": "4cmTx8PSsc4TcXT1nm1i5QP8KtvTKbe1Npz5PRpUVwjfXBSxc7mN31QH3nT9iBpw7ysL9ETUS72wjS4vCuhycBBt",
  "key41": "5YzLsKLxFsQUQhEx9eF3sZF8jHWzkzYJJ6iVkZwChQk45SkRMGsJWRAC4bJJYSr2A8hpqHvqnApsje8jPTFeDt5N",
  "key42": "44wVP7jbwrmMBFn82wT3nEqQyKRkVWrJZuJrLusVVVNBvKRXujynXGhdzkzJgL38AsbeExggsdSpoiKYkL5VFCiZ",
  "key43": "4hQkVcjmXk2Taids3CyJoK7nETu2CrKuN6fCwU4rHJmAFoUC27NxksNmoTbDJCSMuWZYxbX2tjQqmooXsCHKDsSM"
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
