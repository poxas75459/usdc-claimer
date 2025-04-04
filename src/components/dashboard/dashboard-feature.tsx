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
    "17rNnbQewFv5WpHE2MRLSp9PMy2Foshb4BWMgmhWd1hQ4cJEfWcrinZx6Se5BdKiXfQnU1i5YSFXEDtMsGnGDka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39nYzgG6T9uJtRM2bsKntcGPADLv8Uf8MCdXmnxA63Ba38FDPGnourDqZgJAgXa4C989CNYF4zCj8v6zDbCm1Ndy",
  "key1": "4pNRkkGWVRiwMmgKmmUQoZHFSmsGFcWET5yFgGQWTSdLPWBuCrnsS95fspjcQxbLDesGvFazp4z4RWy3qm9JpC5k",
  "key2": "weCgS8xGfNwmCaJxC47ZMRxPV8UMQ7sYfprXCxN8gUMMieR3s9bcPMd5UEah3MY4fwZC47KNNdhZqiXY16m5GYX",
  "key3": "RDuwvXLszSFwVet6CR4uEjnHTqAX28xh1SsZmnanb1Axu3tesnSDTggKS9XqyW4chMnocarXkQ54BXPoMMzJJER",
  "key4": "9JRzQrBDnV718MkxBF44qGiN6n9nusSpGAXay5sYJmbWTg56sEv7YtHeN7FwGYZUcWqb98g4jnRwFF89ziWjQiE",
  "key5": "3y6pJuHwCeyW1Fk3fMBh3k8anXGB2eegHFSqWAHkViVa2GqZA8P5SSmHfnDurq7p5R1kkSJc2biUPTB6KsQHdQvg",
  "key6": "3qjKVVThiTdjgXh5rxFm8nPQDJW1UUZAevTKH6DkRU6E7WW8HniKr6xixGyHpDWUPZ6NCh2Ty4cPLj8wuxXYb6fW",
  "key7": "2ssH687pcLZyoN7F2bK6XBrEzY4vUFmpfGEtrMk4DH95fokGUUjaR971kKiPKBwafzKd25Ar94jxEkqicNWqsGPn",
  "key8": "5CyjkEvXGhyfFEeqgMGdPrwdVwAy28NZaD5aPdqtGhVpGYEBAjfhNTRkmK8hGXQ8VoWAuESbPwAhDmL3RaC181nB",
  "key9": "25FxqHKcQ1SZ4njTAsFZJfseSm94r5hYHsA561mBnSn1R9JbxEmXs9Y7ANYjGG8Vj7xPqMuEvYU66K4DPgu8eFBQ",
  "key10": "29CUfmpBeFWdmpatvyHZnhet6Pp32V5HKw5poJ6eDjXQzQXiVR17M5hvih7Q1nFzY5R4hQhkua6o7mp6kiM1dTTR",
  "key11": "5Vq9CQenYVNCfGh4TSzhoesUxtBLrSnW5E74y53oJe4cSvXHKGwmef9bZcGcpMVMeQa3PRXNcfaqGAjzPEcJdpsW",
  "key12": "BAAVrp1ZwcmKmud6YKtLRQ4hGbGhddYc5et1m3FuDUCYmNPJPFSmEmSbwL6VMr3xYHL8SND73YoNWu4aRXPe4NG",
  "key13": "BqAwWWV3amZE76WH63QEMauYGgDG4EZEzNxgNtQfnbvsEgCQ1ZAezah9H44rF3oYphixb7bT5bRXwR6WCpTT3pu",
  "key14": "3LMv53siEwvBAnJA8VfUJVscmzSgmo5cugnzYPViR8nx7QCSdpSjhyKPMRyVHX9SrQce2DNMTXuyCS6J8ZyhpAAW",
  "key15": "3NBjyTsLwaQ5KeP1UYjwB9FQEUMwm4wN3TgKtXLMHXThqVE5pzszPfhBAvMT23TdLoTAeThDwvkYx2Kah1xadvVf",
  "key16": "3DtTvt1MpLB7BowYMpqcWbSbWs9VHtSoPDE8XYjTJcScnKpanDHijwLPULAv5mW17tepVwqP9j1AdnHMCqbSJSmq",
  "key17": "4hekArizwkTe1kricwzN9SLPnHDHXr4X3NAt8VfjxjZ1qVj78AN6usmhggNGWydiMqkB9mwzFPJndsGQzZ6cRHCw",
  "key18": "3h9nicXoVCuK9cDTtzM5vEujG1Z4mwdM1c7itKthj5kQuwwPNSPQX42m15dMpTXiLtw8BFrPD1wDBphyqCRHMgGG",
  "key19": "3ktZceqoHQi65DThsSMJLdvmLHUBDQJVWnVimpnjogQ2jmzUJx5DjR9wJL5dGe7e8q6ik8iZEVXrW3odTikZPn41",
  "key20": "5CirekhryUtfhk2dBxJznjDf18ze7Sw1EjYgGnsw2bxkrhLaWGoUkq71zW4wdKokSFmUAjkmTt53wCPcvLwCxNJA",
  "key21": "2om57Rs9feA5bQGmRargsJe8ghDBHXaLFW44ZCeveR22foLs5M12YYhZZvVmpUnVAuwGgdw7Nq6QrxEtPwhC3Zow",
  "key22": "2P4NZ4BubCqw8G7qM9KzUS43v4Bkv6NHx8snTNNNx1qx8PHMjfYki9cex2yqJvXVxEq4P8uFB41Ty4dJvmMe6sSk",
  "key23": "2GHgoHHZJgoc7aeUd6aVbpLZS4XVwg6eP9QhEtnUuxiH3GqyBWpES2pUqyYvHaXvZ7mx1ZSxpCAy4NVXoF1dpXDh",
  "key24": "4jeB1T4FrwwP2mxAXipoKTCx37x7dR1tRWKxTHomQFhS3LHRoaMWoU7AJkSvaXJPzjzLijuheSEVxFYaWis7afeW",
  "key25": "4ZUEXudkTFxbRU8U1Sxw8H5wMtYJf7QQM9AHnXZhdFFKWdjBJiytiHnF87PKdWXveTm56L9Xg9rCFQj3p3GbhCum",
  "key26": "5DSczi95XXGyBYP6StRnNL38UbtrHSMPubDU6enhcmzThw1Nuh8kL5XFvPfA5xJZuwHHP2EkNg83fRU3iPakRX7w",
  "key27": "cr5NJrgXbGf3CpVZd8Vv8TvzVXwbHE9z6CdEoJLUiao2uhrpVgnM12v3EuzLygqC5eLj7yYigoL8j8sfxDD831e",
  "key28": "3X9b53a8FXdhL4K8fZQcD84ENSo3bCebf6rEeF9oPRu4S5nFLRumjzKAYh6gT5buz9Zcx1t2pLuigR1q7y69risF",
  "key29": "641DyJiKjkdB53CPiEWCt1edZAmQAcPhE5iKnRXPnuUosDwL94yRJCC5XGF2jiuzXfbnBdg2QH4cyq9E3xkxfGQZ",
  "key30": "39V1ZrsGaMwFGtiieAF3x9yHrAs3ENqueDs4rFbc17jdUFiFGRuQSSubtB8Lzo3oLGwmk7rVFLR9WcpsxPt9y2Y4",
  "key31": "TPsmDLHfJjoMEi3Jq9x7LyMHrGBkShX7rkvJ8jWyfPYWMRSSkUR4YvnDhxAr3wZsZjnwN5yRssRWeF6KSobgf9m",
  "key32": "364njRiBRWhyuzhMUUcLEUEpSUjSLCHk58eYghSXnqrrJy3rVYczz4qPWEoiAUYi33kcWhxEZhmGyabK7zKgVDs2",
  "key33": "mWFU31hAKGYbaJLqLejyXMWeL7jDcsnwNJ13dB6Ba1dt3EcC6Kbqwow22464nz5GfoZDsgAC1eiMdHp2LoEV8a2",
  "key34": "4FMoyERQBnTWUZpy2KB42zVDktEbUAD1RyvQDkv5edEHH1LyowbEJwgx1ZSDb7bYkd1rDzAxxkzpT7xv8VZV3XD9",
  "key35": "591Tc8SY5ghGBzp2Q75amcSrAbjRmSf7QihVKstWu7JLaBRoseQJufVMLWiYSd1aJaiPoDfNuxC678vka86rkJ9Z",
  "key36": "27T6s9e7Vo1yjXwuyr4WFpPYPEeib9LBGuufFHjp4s7HognTNEgHsvZcy7JPCobsGL51M9H9i6U2viFSVCvnBC3U",
  "key37": "3zq7oXtKgwUTUFDRvrAkBbBX19EmbHTnMqT9nfPedjy8iqFy1Xcg4YBa9FR5pA3Vh4taNwsiAoZbYPMXJAVuNeNA"
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
