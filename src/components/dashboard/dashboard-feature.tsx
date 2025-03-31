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
    "32AxZLMCu1sfCBYM9UmNywvYxNGPp1eLpwTmfob29QdqPuqLcLRVzjhZZJ1T8MTJpNUUJHP6jL3tBWbPJsKwjVtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mAtNW18konGyJw5dFKK4m53wUMWDGM2TTjmHh9XkRoMmZPm9fWNwuQweFW5c8CWB6cyoQEqjy1Q7ihDTfgFnPhu",
  "key1": "5X1mAqsf93ch2ZpveLuKx5NJfVCfrXnwrJy3CUa5UiCTsMY2T2CSmKj1885LJdbWpQ6hMJALrkPwKV1AnNSkuA1n",
  "key2": "3f4sJPzUan4ioB8bAjccBF5LWfbhpnw16xLqpHibbt1H4nzs4N7Q9QRdLhbQmtCactRnUdoCuwE8iscVCtRkpnm",
  "key3": "4T2FLEJbzKeWDXA1FxdzMZxufg3CsNaHxvwp6fTJkd8aB5RhJBnfWWQfQKCkFQzt6SEKe7xqAHdGsA1MPKea4TRy",
  "key4": "2q4LhZFZrLUiZcDpSsn4fNcwyjNYVyhJB8q8pG8USVm9ERQ92TfS1ZRXVbSRSip9q7J2atEySDkoPALd3yKrxQT7",
  "key5": "48erRonMskbhDWmZSdUjxdfFfQrrDaMUFcv9ciMCicSgLzJ8bZGUeWbYb4zF4G7esqAKh8deePzry9DCg9i67RNE",
  "key6": "3ULYagjNsMe5vH6r7ELULMYLr5K9qwq7eEMMFT8o2wxXg4kaNK4KEJbY6TC836p7BPPBXpkBSvZCzZ2UB4uFT91Y",
  "key7": "5qD21eQnbMuhCURiqmRT1cmw26LgqvrcBekeU8SVTGvJcd5j4UNsDcibtE8JiTS76rD1PU7pzFq1Ty6893C1J88Q",
  "key8": "e77ADpC1ecrQxWLXb82TygTsaE29ErAASXLMRPzk1SdocaL4YCMuPLoEbPHa3JRLRZKBYWq51PKqU4qYMouBhgK",
  "key9": "2tPwBwoKAJegskv4veTMFbLeydzrczuFCqiHX53A24j4zHrGAh1HctSJCwGKGVMSLCudMppMiPhJUvH7f3fJhBmU",
  "key10": "AA4dygNyj6wrB3k4hKdiPNDiBj9CDV93MDKJtgoX3tYoVRGc16NFmDCjRFMepokQFZ84M1hhVHG1nBWK2Muzh1U",
  "key11": "3FbNTJP3n16UDnkE9MAtPTgSeLkjcjiy8Z11pgSy2CEMB92nruXSNNSQQbXsmpqq7P5PwdJD3eernZ2B2PYdHfVC",
  "key12": "BUUMvA58rXyK7N1AyvzbXNuWQ71UcNCKPj6VSqg1K9DqNRGUrv4MPL2z2UYYdiZkvTQNCojwAWPJLwv6ZoTrTfz",
  "key13": "3gJiCNc2iJQgnKhXKbXaup7F5YYv4brQnsj2iLU9pct6ebhfY1rETQ2J3bgqexab2qF8NmYHkSAMbyJPT56igLSz",
  "key14": "3L9sfPaJL63CmzzHncYAHbWujzdyHFnZi82CKU1ZEgVRJsbgkodNE6aKYFuH9PMpVjNXKhWvFt6iSqJ1ARG4gd8s",
  "key15": "3QoUMYRAh1ga7RCpuHNjoABkrRrUVxDrMhu15c52YJrkfo15epYjc642SxoeRNTUd17Tdx6fq89B4j7oB3m6HaWq",
  "key16": "4e5dCdbGfYUwhrpbCssKcXTQ4h5h2qPo3F4Axh9Bd7urzrD5s7UuavkyiicnzoGeRyue7VvMrvr5bCNgKQREhRny",
  "key17": "2TCtMfHRAuSied1WRx3seaAC49XfmzhCTWdgcVLBptM494beN5EPJS1j2W1UgtYvNDj4rN1JsoMAbp9bRB1HjTMe",
  "key18": "26zWvYnAQzxESumNBtW8LzeGALQpeqz11eVb3VDfCzv6qjShp9TRXzSRa5MCWXBCGBtyDb4jJn4Q7K7CgSjpKXqF",
  "key19": "5r1xTv55ChJiC6dFGhqm56FTC4ivbmUjgjyf8m3haAG5ncUmXuLaYdUuVrHH29PdNSXd16e4zGmhKNMX2ed2Hkgm",
  "key20": "4voR13tRGCmXYpAiDkGdRN1s3bbiyT9LJwnUURGNTQQ3HqZMfMaF6RQtEFWK4Woy69VGuKJeQ1jS1PtuGA9Z2i7x",
  "key21": "44JAaopafe81TPg7MEftyqxviNaWZLTWTi7QQBmC6ZhL3NTHfKnhkiKNCXxpcVKzmpcM9F3wGg6VrwRvMLwraG6E",
  "key22": "59mzRVBoV65yUtCEWaLkNZhdWQsYr976yfDBaTeHxATtqPQ4xH89zRn3fPP6Nwd91uGgt5ce4ovYZDPW5bqxv48e",
  "key23": "35xZvrpUnMiCuLYAyQJqNRxCaUrdQRWQ3AiPoQuemgmRsGHcm3r2Fw5S9ohVsuCmf21YWNMob4TLjCJ8s5nRydE3",
  "key24": "4AHHKihmdtaVqEGYyG3QGYxf5ejGjtmC4doFBkv6Lnzo5wBtSt3NfLiLbr52JWqqS2nJCsfq9YrpaR3i1NfLv1t8",
  "key25": "3L58zpM6rP5TUPe17Sa7ArS56BMDh92NhLcDVNgXWd5Y6tbQqU2b4UbP6MFgwKXbaQPmH13gzTBmAEjH1M4xmsPp",
  "key26": "4hMxMBT5t5mp278E4zmsYufsj15DFpDTcjZHPVa5BgfkiyNs7JE34k8HV194v2m6iC2Gix8kp3r3Y7kV7YUg4Gic",
  "key27": "4n5GvjMoH3rRRcNfSetWK4KT4LtgPEE1h7EiPQaZe3UyYdAGxz9agphTLn41ARhtEJ1282MyWVBcVBwMoUcmpBPJ",
  "key28": "5eSunMHy34kWxHjeMYaBRFzRmDKE9NkzErGMnx8rgaMtYKr3RQJMamH4A1MsexH8ij5yTvdsFxW7gQzcLBSw94gN",
  "key29": "xGofrcj19R4Gip7CmTyiRJzKc6MM4Kn1n2p2GmhdZa1CizGDsD3oRQFN21VJoTayNHfmB6VuJPJzh4x6r3PAVu2",
  "key30": "59EC5JDX9ruJXyQeKon9fSaErkJ73EoP8F3Q2Epoi6F6iu5HVNJMEP32V1SENEAn55LLc8Vmr8N4MfkQDyu72zkE",
  "key31": "4rdsAHjY1SCLd7ib4c2U4TenLigXuWoDMNqmur48WiGBy6KcxBnfnEv3ZyhMDsacAj6ubNBFYBEo7fCuHSZ78b7u",
  "key32": "5ckJyWvT2KFjkoxq5RrTczUgZWZWfCbzUuUUPeh8HQZqCeRJowjUYAa8PZhcDgUTbnszYSS1cc7AYF3vhaFE67Js",
  "key33": "5jjH4jNzLwVxtjcoUp4DySfjke9XGBevuhbUnSLSjppNwdoG2SL8CNSfhuinqqAxQzrNxcvr8za5PbniX46waFTP",
  "key34": "5pLsSAZsZKhVkhRBou576eCsC1dsx25RaVsmNiwxzFvVGyRTH2wN3bZNWjZUgieQiLejoLU7bHDZqHN3yWKcMzdN",
  "key35": "3HjbNFmTuGguXQdt5xFeXnuSS8MMAG6PabMbDaQbya8gNVYSHp9knp4cLFRzBL3zaPnwncXW6aGeHw9PEQE124ag",
  "key36": "Tya4t3LTS2GBHEusTLrv2e95J9RxWNNYeoQhcJM6X5nuRCRYH54HyBnYswSAYANrkjgNAJgeXtPtMcc3GhvxPeL",
  "key37": "4j9fV2hgmvDGTdqYmoiX8MXGw7uMor3Ay5u1ZE1PEcJMWcodBPgxBSteSEPUQAQrmFEnBkuQM5yA1UYSXt44uEML",
  "key38": "3E4MswaVRhMQ4GkxPbBii5RMxsddjrDLmFLTdoyGuQyCWzXZZanQbes6ccKiEE1TKhtm9qCxCmjLyeyctunaVarv",
  "key39": "5vjSuQE6UAcPfa7wQSFMWB4f9krX6TzMkcPTvUxzB9eiqUfwJBNnR6PnxEfrY7krTUJwQ3WdFEn42rtX4PTrwvoV",
  "key40": "5ecPe9Bf3x4U9poKZnLgiT7XML6yL322xTnBpQBhvREM1qpYzVNUo3m7wh5gXaWriZ3CkTnrrzwWxLm4hMRQSBUc",
  "key41": "FxmMbWt4RXVBHmyCS6uYF2g4299r8VYoCkgF7ThieswCmUnQ3rgenfU9eJJRjxaaHFNLvKFGcGD4JNLuCjY6tEJ",
  "key42": "2ok4ZrGkRSTsuRsrQdshHwKx3NxoR6idQsQfNC1cZpVH5ohLmSdmZddSs8QcQujMrTFkeqMewPPTPAudEJtuv7uU",
  "key43": "3T5xqUnCqDLNagetnw5SQZeiR32P4yYUNQkUXYnxUFF49ATZgpw9xF4RcTYorRcypJSF763AKgfje6SQtHcvZMHD",
  "key44": "5zQatR4VSsjjQVGNwwWSL4JPPiq6gDdarS6r1oyp7Mtj5Un7vDgaABGuM1tT6PLVdHX6b7q7fSakFomijXz2AiDd",
  "key45": "3fjiBE5rUpJjibX152hZkmFWp28yDyJvugS87KLW31dXst8X2MAnh9oSXV7yJjK89PU8ZSEto39DQTNVgFxzEqmC",
  "key46": "2aPiYFTz8YxS7PHjhJGj4PYxJGHDa6GRu5XcYfm1qXnqkkg5oSpLDQ79ZYAdiGfDzktXmVxDbiyKjRaQ6LyHBq1Z",
  "key47": "2YDbViN7gRey8FmneXGfXvkFhLNECLd7QNxERsk9SauDNgzXuLjUDE9DMidpYgYWhBMWM82aWZ2ZoCjAW4YTDhgB",
  "key48": "3wG8ZUPsdD4KmjbqraaKo741T6paoyrSVRNMycLxtSU5f6364QZH4uYzh99yFxF7Ur2s6BmnrN4PHBHeJJZfTvbn"
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
