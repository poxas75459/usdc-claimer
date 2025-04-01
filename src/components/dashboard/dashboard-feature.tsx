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
    "4RxgAEt6MjmVchBfyD2cwo34eKqd63xqY1NmB52vHw4qdu3MpGyYjxqJayMrycRM8qRAx5k3vF6mwBEjrQtAprpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLkxfduDeCU1TqhVU7Zb4WqDAW9yUGAtJLLtGsnQor9t1AxBRfPydkJ6XJ2gdptvNBfKf6XpGPnsrvawQ4pZZCK",
  "key1": "sCTCFPo4y4J4yrZbXcCuLMmdMKZrZRSb4B8N7NyLeV14Cz5xWJDsehx1jDXgqSpqv32fJuoZFtLhHpLfyz7Bw3q",
  "key2": "2MrtY7c98H2VU2LLwQJEtnCsaB5gaGA3jz65XyVsPaftVtvbU2QVHdkjNvNjzoWYmT5b6G3qsuSKGPuxijcNGQDa",
  "key3": "Tt7kjmk6vpHZpo1Nrq896r9SdBmR9dsZb2eSiQbPaqMDRqjDQSu9wtJbB9kX82R8QLLcPa3jzcKmKS2VvdapA17",
  "key4": "31jFpD4xMtLEBabRfTRrRCPUijxGeQWDyzNFeRiqkSgtbFpEWmujYrFaQ4QP6AySPLFgorb3wGoX4FSrVkcmZyT6",
  "key5": "3w1FaTAY3wmtW9kT9QS7wATjMApG6Bu16axxZ74qApYRW5QAWdDiBNcShY3KndztMPUU3yKgWWHopTJ1V1bYAJ6W",
  "key6": "3e4Pdyfg7HJTZmwCUdwJQbM53eEYvikUgXKaBEyRm5hc7i6CTbpZ2d41X9A2UckHxRsQ9eo9JKW5UHNe1Axawria",
  "key7": "3yJE2x2H8MSADsYiQz5JGBH1sqzCkJGd8zyEFLKHMKP4mtaDDQdpwKo6hcJXocRfDcRxR3UuvdZxcU69p2fvVqvq",
  "key8": "2zbP72P18yGf2yqVacozULh5KWXMUbg1keXY9W8ZWcMf5HNNt9Wg5h1LQQUfkg6EVS8cpFxzvPNKERzdjdASo7Qw",
  "key9": "3XSVh4KB3yoD8epGxBD57ZnokAZR7kMFxyiSV2xzF1bec2AHsWCBKV3vDVxSVvncXkKwo5FVozqNmi1r9QtoN2mR",
  "key10": "4a5J5SXacP9zu7cnonEsKswpN6Z4fSTR1PjM7TZTvuP8UYnJWGsfbTgHGMwj6N8QRZ7ybc8HKPJrD4SBQvXwBm6S",
  "key11": "8V7C81h52C19mmJgoLu8oDJy6a5Kf2WvPTQHSXih3RGPQzKZjomsLEfc47ioCffSdwMeU2J24K1X6BoPHYHt6uP",
  "key12": "54RWo1HjBuEyKDWUYGsEBtkmK8hcZpsDiVuKfGcgPnBX2EA7hzukcDeNhbRHZcR5dFkcb7cwT9E8nG2wJpg7BgWH",
  "key13": "3LekZK14mjMLXMUVi3tbG6keE8qCymMpjeWcrvn4UHR5ghWNBCwX8psYJydmCwVsoxKqrKcKN1njWsTUFp8chXeE",
  "key14": "3QGLJ2satzLs9ui6XDPwCtGtYxtqgcVKAFzSFBPoZsiUenkmKdViUc7feov5Ez86NtYsVQjCej24m8C6cqRW1vZB",
  "key15": "5DFew5pgs8QDYH38ZBbMoxUNhm2XnB5pk5MYET7u9kKLPxqmewmcguNWXxUDNbdsm2okqd8krP13GJ9JtXbAPnGh",
  "key16": "3Fs5xLiobcgDfJbMwdZLyYqJJ6wvvykbMPtXjpMxoRx3ggJpic1eSs8HjgYySwWHYchwsEomAC8voMYaEWGTrQEf",
  "key17": "2UYEsaxhbUjLeJoTdpgiaRMT1nV2e7Bd8NuLRRyRjQStH9p8XXnRGRJ2BaXdeMxLRV5Tbd4b8S1takxygvi8waX9",
  "key18": "4er2zxLjGbWxFYfrvuHmxtkTGjNC6pixPmW6q68i35D6hMQTouuEpxu8ivwfL7i1tjPQCDhosmq3hUciN8JUFUCE",
  "key19": "2QUyLrh8HXq1qnpdQXtb6DTKW7eRaLpTMTs3hyC4mFktv9XpGZReJTjwEcVPinUscmTM6KYVxSr2BtsV9efpYS5r",
  "key20": "237vTmPUXtZjYhyhPakUeDVzVeFDfRqeEjoJTdERH7dBansfW7DQZwuT3BAvP5MSpLLqQ5ujaongufYLooTvWvrA",
  "key21": "4rvVHo5ikuZ5gCBogr1Y3VpK9uCnrgdZPCUDrvEYtngNuEZjk79Yt1CBEdAbQug2WPhrnLAiZbLGL3ULnAU6L2sm",
  "key22": "4GXUhgYqjeTiaJwWGmo9Fyc943udoAGQvqXWitRNtb9zHFJkcoEBCrbmAxsRqovd2jPJx9WLxrjJX4RmVnzHpKoj",
  "key23": "5GH6x3qo264ZSEa2k1S5W4XdnuzM9rsekPD3G1L3ZSVnoYDygsfN5e2JhYu7iirJCC9sHZdMKc4eqZmH7RBq2bAt",
  "key24": "2ApTw7tHoSpxn7rNgKTbMv588d6NwEV3QG4k26TRW5ArwVaDPggxDjoVHFzCo3BcaE6p1pypsgWDo6vvFDdmyf3D",
  "key25": "65zEFBCFJVfesykwPZHLEStzAJPtJSfeBz1YZqc3bJJ92fgef12m1pcktZk8rsopKcAnezeMjV724ud1Qww5iZmf",
  "key26": "65DFgjCSQKGEhyx6kQbAnM3UnStHerXiQ14Nsb6N63hojCgoiBxD2DP29QGyHbw8qwq9V9tJGEefU2xnLZebFkJT",
  "key27": "PwL42F5PaxG7as64XUEhnhwGMmUtGV5tCs9LyW8xYpp1GnwuSwyGEjunM5nYGf29XcmH9itNzitEQ2j2dhFYfph",
  "key28": "4mjHZVQnJxgB8XdvwnsXs2tJ4KEnZ9Kzf6kjwGyaSf1dZKXMT85sKtmEzUBC2mdAkwpvqogtknaKgQkQfAwbFGCe",
  "key29": "4iigGLvznGo3xz6itmrq1HJoG43V4s4PA7ASaNsA2RJFxJcyo8RJycenDisRUzatcivQARG5cjYrJVYT8qP9ygE4",
  "key30": "3q3kREWEH7swhMjWmSTRiHkVgmAZT1ikY6anv174GUkCgxY3LUwVQxV6Jy1W7UqA32yiSFgMpsnC2qEePR6vzRG9",
  "key31": "i2sw5KyCNXRdufpskmgWVXXiNGsxcGNJjjhNfvKM1nAo3EZDF8nXtBggMDs4gtrnKXKzVydBpfVPdxLzrrmyPpE",
  "key32": "utzBE1b2HbSkKfKzJJXnkptxyPtpGrUd2bz1j64wyh2SN3S6LhrNCRRQv1sGcfiSdWuMrqAbjqnLEUajseysUEh",
  "key33": "21o9DdVLcPPqyjDWXEcgSx4P9td382LAMgL8t1M7fNXftjHgc8WoRED7J7rf33QouGNfDoNcJA7HA9tVfeCu3HCC",
  "key34": "54P7ANPAYV2m4oX5RfswgQRQJ18Uq6Xm5BRzagfY4P5uFXGhL3Zig322k4kxweJ5kG6uoG6emkaksQQbXupF3i5d",
  "key35": "578QgPKPLoywrvSAqYUrmj6ajLbFgUdPAZygcyGxr96F2YAaNvhTp4q6Jfxd6hgHqVD99UCjNsNACXLkHhuDMjkt",
  "key36": "3HQCjeR6G7u5CsHvWGcgGBRgCnU6Ak7DxkiGSRcFRXeAuToSGNPhm9hJtfMA14AouFKSZtFw4ZhW15WyG2eFVkBV",
  "key37": "3Kcm2tcZk4jTbrCenNAMnXFURZLWKRJR3XbvC1tF9Pvmv8GqVJnWZkKSxBqTxGEgHcWgznM3SJu8rMdQXbGiWn1S",
  "key38": "5drLFerrL5dtqEp9qo4qgoCZXEfAPJz2BqPXYD8pvmko1ci1CfCvGWkLLq1BnFZqWiMp9zyZcjWnYT5JPG6RxsCG"
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
