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
    "49KjTj2ytLPqiFv5H33MmgQTbX8WNftJP7gQgCo1G3JtR56UsVTnjWxnKTeXzxTLCY693ne5RBKoF2qBnmaXexKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gkedyVaPhsW933Np4wvwGhpmptAQRdzWZ9GaTHDocJnp6wnLNcFAJMsCbP9PYK7bsNvmpsF2jrNZzaaPYp1qaw",
  "key1": "5kAAMffy9sF4kSBcmHtF5CJHyjsdqdgzki6y17nso7ptW7SomKK3VoRGAZZAYWDfdMbg5VnVLTzhamqzveeWDAJG",
  "key2": "554GLZDeNRDrCfvTJXWAQ7SH8VqSZaqiCa75KTW8hNNJLCn7ZgZCYP5riiXt4zH42LEDAT7uVUhM5RRKpc4ew1wM",
  "key3": "2roZv55Wch98iQAtY5oeVuw5x8T2ev32kPydwZrKtiHNssndqPFxoiWAbndeKVVZJJzRyZxcdnPpVc941d8TSoPL",
  "key4": "2qJeFwbFJLRCuGM4aiGFmkwxDvEjNFJ6meAhQ2PAKxwmi6KTdyJ1UXq8LAmDRVzWwjaWVaJkGXY3QpxKRG61Y5hc",
  "key5": "29PEie3FRyPMacs5pZi1huhbmX6PEg6SkVBu478QtRMiRuSjTrm6e19HKP9ewabSjwFZTMxui19Kho2dfhW46dRP",
  "key6": "56fi59UxW1sJoNMgR9uCLSaWUEw76AUBpm8UkzcMSKWj1cfWYgn87HMDbrMUpETmspX6qjzSAuUJqYkXEALNpoLe",
  "key7": "4d4yTEawyFjjTjVmKcJBREeE4Y9YyXHZzSPhEDrPYqnQ9NijWWrJaGAKKFNtw9wCB9Pr5otm949yJ4Y4uHjP4DmM",
  "key8": "54xfjMqAF3qCimBEG5XSjh4SFxs32MezTjDoGTBHkuWQKbSQ2uuanXdoDuHggJbTRzwmxGFUeZ3AgbTgazqr18eR",
  "key9": "3CrerkgrPRZ7DW73Ykt6AQBC3zSGWSrSfzc9LshkiAZrRc5XVnkExBh2njodFVmYdX2R2kMEZBY2y8dHfa8jZX5L",
  "key10": "Y1rpLqX5qxyGRx7oLzdbLpzbETfTok2ZFLXWKLtEmEKN88skkQHdNUtsMr7ucFaDGLmwgXTu2Ym1R19f8zLSBqv",
  "key11": "5anr24tUHpDSaE66HSRkbLN9RnEucZF8qWjY9smMZxCmUPv4AoXitBMHXo8JSkX2FnbbbppXnA2rnMm2xGvKqVHj",
  "key12": "376ZkG85Ajg8SFxoEjmfXndHUR1KQoSkufbZjeND2asCWydkSS5mqt3czWzAiGQwk3p1XEzJJWoE5esojdcaEtgo",
  "key13": "3FKdQ664gSkRJvA6eioQAAKupT73jD466ZrcCcZ7bjUM9RBW61wA6xcrHj2fuy89NCg6xfyyvpUYmv4v2XKhkwp2",
  "key14": "SvgUaC5MFmaYcyhWcKfaAFuAAFEhrA4X8ypUMouskKpFUdkgeeW2CyRCHtsJoDtrUeFKN8fJWu6bb7DCwJBC5sc",
  "key15": "2xwHAHrYdUpyCd3BiUduJezUxooQYfs28UFYaVrJUVEjsGwSNeG84BMLwtd3vLALwA2o7Z8rVrATc8EtPByJuhgi",
  "key16": "5hMB7c4zSsbdGxWRy19WFMbSWGubC1Jpt9fPVKVkmvNQaKih8S2FnpCwUFE75e4ESEB1NrCJiYtqBk9AWG7ts5K2",
  "key17": "3WKTvaooZJF18jGiBDBHvzKUVut3q1c2ZRFBWjdAsopRePCayUwG5kacJdSLvZiUShbfjenUF3yv4ymWPX9ifpPE",
  "key18": "4DzY3qcUvqoi4bmtC7zFcmX8Cehv9dFyMUiR2ZRgR2Ao3oQ7TBhZrfsfZ2wY6KsoFiFMpsfDUPTEhDPnjibHuPyX",
  "key19": "4TNYXDnwJE63SAum7Wp1njn1brUjjHHCRqXQoeUG8zySPbgx9SrWiyYeoRXxS15ZGxpubKBKvXwmegJUCaYEdvPw",
  "key20": "2bEMUFB5svq2G6HD8DDdZ9CcTb2WAE78M3v43VEN3qiGYPyLhQrm7uwJ1nJxzaPKEXxMgmgSTN99Gcew3WtrYPkg",
  "key21": "2UbUDJ4YLyvWAS1Tj1hQtRnL5zH9EggeaS6ppTu94jmkFTa7A3W9ye6rGBLAVrh32jiCfTDFAScS3v4DDVDzyFAU",
  "key22": "4dYrgy2Xh4t4GiWrsBrKhwSu6ZRFMoWNoRgcS8K6c4MdMPVhM7MubZjsQuTs1YdCiVPhx8EfWfFS8rxuyUWP6CD6",
  "key23": "T3mUooinVC5ch59L1LiJQHVRtdpzQVh6nw4YtrddNXtxpiMjSVRcvFsK8mfA9TYBWGS4tijrL4rEt7qeazTh9zV",
  "key24": "5RBKXBAuieSmkKWQax4wk6wNue5j6WpwgwrBcbLJ4ELutxo3bnqDpiqYp8jMtVdjhmsPGEkYEqdu5QBhiPwsSX5b",
  "key25": "2aAbttBjYVVMpkjQy5bza8d7p9AFZRNPD13dKrgbs1fAwbbxTrDFBHCfz561KJfZ92q4D682kDw68dGRZyPLmNfY",
  "key26": "4VFmKaX5bGGH4wVjniTaEEqfLm6knYfWLpmdyFR4Xc4ocavP2XX76VV2xRHmf6LSs1r9iSbk6YtJWkoGnpMKds25",
  "key27": "5spiLA5CqC7SkdCYFSKMHA8WCRjghUrJ7n2zu2vUhBvHYdy2an8SbgMLjqpkhTHMJit6xNhfpyCiQ9mK4fCNZeeB",
  "key28": "5N7FrTCqECfgxH38pkytkKLSKCwqnziSUvkih2NuPg8qXjFPgh8hrTn7G4kMU1jd9UPaZRPMHMoc4g3wb3S39hLh",
  "key29": "4VPdUfns4y8ojdr3NK7C3cTS6apm6y8dtLCo9bLQKFnrqR3R43hoJqjXMBWisGTFwsRQcWzGNMYjeF5PiKw7mNvq",
  "key30": "63ALwCQ9XM74Wd5HRvr6SKeN7nKPgnSLsE8eiDbKTJawfhQAfQ3F422yYH2hMGh11qsC2znRGYjVbfY9zEoSdpgb",
  "key31": "2ueZXis6g5XwzD1Hx65itLP7VXsgYL8uKBsduZREmE14tLM9yAyCvre3RsQnBgheBz7XEeQAKGj81tHAeHZFPxnH",
  "key32": "67LUEjQMh8vskeqHQJWdxERFeb8RPmgE7LkSnn9q6ZukyUMgvCjgGniSLe13jg6vCqvkJEp4gJ2EEsaJZG5C7qNB",
  "key33": "sHPuedp181Dno7m2e9aM9ZLWTj8fakU3PRcCZVhi1cUWyFkG29qL8ZwkWViM55xkvtCui1DNJykZpiMGWXxpPUX",
  "key34": "3XRz7yWXNdLda4vA4KTgAExQgJUfLMZ8Ezwgp5HsBanKQSPRXyJaAdtUDHqB5zo3An2wxNMvPGY5bn6C9T9SiGBk",
  "key35": "4urGXWaAL6zECRcBGEKQ3USPVeFwHfzv4iwYwFkWuoqWC6JAGtJCfzYd42g9A9h2NcUJpEC8nRanY4YofHGMF5gp",
  "key36": "3huaigWtpJimpXBBvaBQz8gBz4FG4Zua9NvhuUh3sGwSMbp4qPq2KccsUo9dbuEyYDRb7aqq4R7tnpvVc9FyAsMk",
  "key37": "QMxvNR7AkSUhi6ckAFgYqPQRxxjYVuGA1UhWyR5EuqcNb89Ye6uCWsA3wC6Z3yXdLPGY3B8TVHdyKrVNtZTz4oL",
  "key38": "3Y5TfF8EhGwamgLs4p2wRJkvfhKJaSDnYZLXZ6Wo2NhgHB1fss5DC9dHqofcrYeHoWeGVxNyna8hKXsaFugPiGGs",
  "key39": "SoD2EufvfWdzs9Lu6wuzK2QppJWyQrvXfF5cwWhfUbXihLSQZhvGaV8k6s8yWwzur6ga1RfrVkjYxDhDfaVhrKr",
  "key40": "2LxhbTV7bJbLPMTvvJj7rsV1mxgrx4iAkHFTj3EJUWU3KPZqTryfmXtbJ5FNCpLCgcHWoyuWWY8uf3xABZfuqL7J",
  "key41": "4VFULByFUdnrvsiVLGPvZ7EGJ53eyH8HwLUUZMcZr8MM13Rsb9ZW7wi8ZjMR6wmt15By4xKhyWaaV5hhqvQoxb2R",
  "key42": "vNHMH5UBEqkVSGRy5S5UrffE7PDvmGkE6hK4ef88V8EHFpFkh8ho54sgdhrK2kosxB59vqx2u48etn82Ftwgumx",
  "key43": "5HVJnoRiPccuQ8yhyp66u9JFTCWM8G5kvKiUBXRmHN6BWQkNAAvVU74GXsZJHZA89N84zMBsNzB55PzGEKJyTAkX",
  "key44": "4cyXdAzJKPi5GgEFbJwcyRACZfgbgzfkpSA62a9viBxAMNfCF1zzvV6dnXVi8BY4YTF73TQWXR4aPrXcCC9hSbVX",
  "key45": "eUtH7VmGbyFdgPFoAQYmPa6HjnxVYoxGWg73XkqSQH3utj8Avb1qMiTVYVMMh5WqvmcMpfqnchwRrFuoAHQQQQ6",
  "key46": "2L1UrdMxD2kTN2TYymCpMoR7FkHtDZgGceBR6mb2ihVss6qvgg2sY6LNhetjtXmFBB8CFgg7d3uo26z6CBs9b7Lu",
  "key47": "2u85fGn9nbUgW31EZwApP6F4CX4A2p7zAggkDEyEm23Gecjzdg2o7BQ9Ty9xoNc36HdijqrX8VJ1stA2GVk5dyyv"
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
