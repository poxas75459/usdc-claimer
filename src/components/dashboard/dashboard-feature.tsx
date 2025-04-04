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
    "3JKCSgMwqEELdzVSCviMm4WrjXVDAtbihuc5DTVqXDPCuwRZaViayBqxKjtWLhAFjeytRDdWPUCxpTEU5noPvh7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGND5KefcsPfHSzbGzniTn65aZLnF529fbvLgeisR66advxKVYphTBnbQiwUbqz8qrdQWrcbJWJgDirp13SuZg1",
  "key1": "2cQzvSUGSYVb8x5CouYLa4guiyVnC9mvfpgoyFNwpU49GYHe9uEgkEC6Vz4k3VGenekC8QDC7onorqE4XpmgLeak",
  "key2": "2MX6kJxYobeMuKPkoz2LEX65fMTDdp7y73dp52tyEaBnDmpDdkks55cZ4BzsRjQyKcw1w1WynXY26sW8EJVXeg1C",
  "key3": "3qmyCfhCPNJ11SXA9xdmHL3juHWA32LGBMeLtTx9HmWBxxJF7zGFVqguEoXLPWEBR3byCmuGnNSHvf5H2YfwgZLx",
  "key4": "3dEMAf9RYELvpiXY7ZBwsm8kMApw52Rge1VZdzL5PckpBRFyHA99z1bBfJcQTuhzt4xQzFaXsnWxPrirMk2zZZd7",
  "key5": "2kZuK2boWYhTYFjY34drNY5WqPgYs8beQBmnnZ54HoF87Dr5Vy5Az6rXk8EbPec1jn5ER96DcidGZF9SmTy5b3tq",
  "key6": "3ERhxwUDs9kPJzbKMPaN7cJzsqoTB3xeJ25tWsJG86SbKrwewM1rpuHdEivCctbpyDVKzdyeGHY7VLBcgb1j4AoD",
  "key7": "x1yW2mosSazEx9Gs73n4rCuWgV21BPiZ5VExWTdc3mwGYCNHC27U4V2guzbdtDsQphUTT9EjRGKBJQYoK8QHAop",
  "key8": "29cMRh1FLNEpUkSoEEZYVSvDhtgmVYxZYZeEeYYyQYfrJPvCmsQZTaUdQgQ9KRzqFWhn1KUWpUDAJ3aRNc7Bxjrx",
  "key9": "2x3XnwJcmeZemaver8WEPMLqqXsqF9W3SjBxXVGEYYJP4WEJarP9YcL96AoT4rzHwgmiJJf6qKd73jje2csHhdos",
  "key10": "222K7tY92fqQGUPQ6BDCekeGNVoVeQKtg6F5kAgasRAxYdkDA3SnGespUTCxm8j6ccPNFtNYaYftZGDtEK5gtcut",
  "key11": "3yvoEASepR3aAG8G7gkCkvDnEUHCAh7gbQdbvzzJJjVfVydL2qaeEBCEzbsR73fPnzq2wTyunwhtsHbiHx2B4d1q",
  "key12": "Yri1jH99eYeogFV5KjRLYK9AojPxQYWBRaeEh1s6dNwH1fuMN82Jf5jH67yEFPxuhbLxTethaCqdhqr6hEzz2YZ",
  "key13": "37HPAGEe2swcz1gmwMKECPs8T8GVBbzLv9Bha7wKpAZXYrr9k1o7Dx4Bvujd796eiC65nEKcGopKgkeJcUdsHTKQ",
  "key14": "JPvcWKzBYaPwn1eZufLmjB8H47mWugqMAmkdGAKpNeuoxENWpuNsqJPdiLxcatumnMAcHbcBqKHLZZHGRGPrssb",
  "key15": "WGwVSj9SfQhEKrJUMaYNpzUpBop4qNuq3zCxykqFitj9QZ9RX7WMJXx5AEpRbNa5jxbBFvFuwwUebAmZyYa1zA5",
  "key16": "mbahdenYGPVo6vpsSuxD1oeqjvPHtXcrgg8UiN6qABNPWghA7J76Z9ASxnXuxGfFnetmXFiycsS9TNsu29EWeDE",
  "key17": "5EaL5aQKDXF8Yi2C88TEW9aAtGHFrkiCdy8z5cVtTmiTcYP5n9jdWHWGPbKg5ZTJ5pZDdgY7AAnDmqc82mSpiG31",
  "key18": "4dmZh9zexnp7MLN4QvKaGS4MG1k9g3pUUK5uMuyxmuTkHrQfzRVdDheFRbq1pEvCtbnKPDQvAeAohEqjYNMLqTD2",
  "key19": "46GeT3Lr9DTBcvQBaRutxdjC1ayuHHGNzETe8hG7m7AB2Zmw5xVdgbhKqzgL5AuYnMZr9FcR2AyZJEdTcqCfSdXq",
  "key20": "5v4DU615dG6M2Z2drMCvxREmNi1kp5TeFJUEAKf35UtQ1564x8ZnypEGCpdLBHWckQYm51YJwNbw9femdnBUdFM5",
  "key21": "5Bce1ttq8jkqQrNJV7QiMqqaivXCUbVVpzRnxTKjWa5J7u26f6MLst4duhE9SXNFJVpcNGtFFt9kRC4Z2oECScXu",
  "key22": "5rcFtraMJWHQW61wBRC6Rp9DQJvf81tTXSqqV14V1GhbvcrkjfXKh11vLPxgDfVec1Uz2uzqyeX5nCGQBy3Atb6s",
  "key23": "4dGeEWZYK3g8QjJuvuQv9etFB5pN8Jwi5LnMwh9rs68WzfsmBbEPn7sEfMbhXr4HDBgZiBsMcYnAMfa1xUGA5nsG",
  "key24": "3Mfn3aHQo41zgbikUe7rx4BTtNGvoLwQh2g7ks7QqgkzGZ1R6rQJUSdsXdxKvcGuraNGtiWFr3dPEfbRXUnnrcnd",
  "key25": "5yQKe28L1DhXA9xQ9ZCKbhPkEabAz9y6MxJbF8ujThL43nhqNtsEiqKtiw4CLLgUfLCA19Qa5Tf26boAzV2TErWK",
  "key26": "5CCYHJzEujFKydF2bum3B65LoctvuexACm4xLYK2abCqvLa4fMb6KSAcTSZhLPQAvB3JCNt2RNvbwCNdpY2Xpe97",
  "key27": "5t4PD5GpoLWaiqe3HzoMMVw8YpUgXVGhvXMJFWMBXxKfV2PX2X5ZXSFRxwk4rcusUnLiGR9VAF8NrhxEz3pUwgAU",
  "key28": "PGaQpaKPt5eT2SBrQGTKs8Rea318VrtydzwxLsG49VhnJuhoX11REjSYWjasrPGvxedrbMitZLDnDqXad9xnQVT",
  "key29": "5uEkX2hQZHL8B6nXE4ZvAA6dqjYdEQh3mhCjStJSL2Z4YPGdv1iCKddQLxWtZDBgpQS3qXMPqFK5Vf9DBHoQJSsK",
  "key30": "3wV27jKbMzBha8L2AXFKZwcJCjUz3wD1CrMvHo63DKoQ5R13EvEZSeAtSymNeHzteNFBy95NKS8SWKwDKM2dH7tC",
  "key31": "2Q6ym57GvHEh3aodWwVJ7QEHaaVDuUmMri4UhwsMZWBBcunjNM4DtbjFtcuq6jxNKVDtvKWoCXFGYtUXpS9jw9Wm",
  "key32": "2DofmHeiAxPn51tBf7MTveL2ViECxkSg7ApaLQ9KJVSDTVMCm31kgaaKa3QxhMJRgdC2G2kHGXoN9KY3r2ZPKk6L",
  "key33": "3z8BjkEb3SxPo6k9bTp54CPx43KCaWR7TgBinrpM69bf3VA1dixrTjiQ5oM6guGsjkspgYM23W7GY8ySZ3UYpApN",
  "key34": "UKhTvDNWigus5bg6BPJEttjxbmjyow3VPbhAuWCS8YywAQ47AbcZN3zooERefCj3MCgRWDn699ZpkBQWJYcbS4F",
  "key35": "4Rwqw86Y9cdF8q1Hf45N6QxTuru2VM5bf9qmY5QvTWYyNM8FzWPYZEKLZnsHAYwbnEGFVFFCU64eYdyBsvHsbQJs",
  "key36": "3fqMdfw83LBpB8MLfj3X7kRyMpZLqrf4XftAKKa7rSpa5PwZVWgRnJawtBr2vYTN2PF3sfzAbZt7ZqBR5mGRDwrA",
  "key37": "5pwZCc6UG4vAHJ5ejw3RZ165RBCr1aSX2BcNJXqTvn9wsQDXRDoLDL7NNnVPw1TjHbqS55oGH6fEGZnpFp1sC234",
  "key38": "4MjAFs9aTNLGQSV3njspD2yG3XmaSVaeUhU5XDjnxhAHnwGcvstjRSqDWoTzXJ6FEokjafnoWKMyFaRWHgNTeon8",
  "key39": "2TwgrQiS8rQ8y2W8orZqF2cCinjLRxoiwWTVBxtyL61xBxWHWiVdLR4UEsQVD6zMjd5Shb9uDEmTfqDuVN6E1Vkb",
  "key40": "2YHpaXBbK8XGCLw32h5QbZamCPrsoRdVgfEWk3vJumEy65AdP4QTUVwX1vcRNuiKdTXPJTDob3pzx55fF4DL4ueG",
  "key41": "3SftQ4K47urCLDwjpQZqYjHYKzJcJWZ6iwVZ4CjWTu8MjrgHkY3QwMy6xqfxzkUTxpTMRVUB9FTANeZZoLHjHmVn",
  "key42": "5EGQruLeoG9uSfUN6b48me1ca2KE3Ro1LSzsYumL9JpBE7i3dD9397C5HZRaRnU5k75V8JDRTWauSWPRgSQXiNdD",
  "key43": "Tn37CYbqcSwdjArVWcWVRpPC1DGq3MmG7QNEKJLsYfDs4dtCCkRpgYfY3B9cSrSk6fkRL9fTPvfSdngseU7tc3z",
  "key44": "hfPmRwko3jVzfW9eZAe4KYjnSyiGzKxEAKiKXTjhRPyUsHstH3CVDJdLCR8q1N83qEqCPxuwvrLN4NDgvntLsqa",
  "key45": "4a6SHQ4yDvpjzC9PoFtvykLUYGRoBKeCJwsRGsZQ4jX7ieCLhxjiX2VVZSeMvdKHKu3TUtE7tt82NZTNchsQk8gY"
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
