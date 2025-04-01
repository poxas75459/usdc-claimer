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
    "3GeTJ4aUX1kVqgRwjdYgkB9MndnzUx8wskzNHaCW7DQeo8728Hi6bn1QTfn9FHPhFmmWXFdb9bbcDJUTdambTmSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMbu5CxQMUFrYr1muw2fqGdkGCWovMTMfrtf5i58BXKYHJncNqQwGBzq13sUaeJ7qCf3h8nZPYSSJieXYBxzSx2",
  "key1": "392q4ArEhGop7HhPqgMz2nKrqbJZ96mKPT27RwKE3Bgb632ZWLUMuWQd6DiDKcv7krNeS4DtPfrKz2FNm5JXuAs6",
  "key2": "3aiVQK72njfkcbUdCPBE2au3oKcWjfNaWeBH85AKXtt6EQ3mNW13HtKTXQcNRkwt8TJyUND1VS9PF5JVTE64rBrd",
  "key3": "t5wYwZgQ59akS1d47YwsG5qyJtaWWTrno6YV4RiZRpfxrw5yHCuZM6wgaUNTrvXYpfZZysRXR5mdMwsJd5XKvJz",
  "key4": "5CF4hc5rnRpaan3K6oF8naqunNEU75saHa2RcyTXsuZtnZU9ybtRQ2udTqezHnhMBscjhqSwFjytxf8KKP7cUrVy",
  "key5": "65caGteCbtGmPUxLxWECp5pfHae2zpnR4LHqGip3wW8nZKyyQ4b3FcLr41XsBLSEsN3PsvSarcGs7D3QJv72nTPc",
  "key6": "41bgPoNWyoiK6d7rZCgoPMSaA7NNUSpQutdKzjovjfnBMvccwnsUHTYL2uopRqK5yZywQ3kfnwLf6qAqhivje746",
  "key7": "4WEy92Ge2Up8sz6jHZQtywANfjai3pNwZ8xGEhidHF5xvV82n41AUiDE2youCifRNcoTPJB3zDRGapck1cfNAjYR",
  "key8": "2xHhCUiLcsyR1YUaQmDujUFEZnivZY7BDQHFo4evuEpx39GAp8zqkfBqQRG3P3xLeFoacPrfKdzCz5EireFJaykj",
  "key9": "46xXxRYAbPTcQbUQYQxfKEWPqQz7BwhbFFuD62vukHgHM9BP9pmwa1VLEu88KwiGBJXihJ45sHG3f3w3xcYzJU9y",
  "key10": "PVNaxF3A3pWEKapiuQXg4Zsr5p7jmCmMXJdfjKcSC8Gc5NqKUbFTA3qAcbHAGSegwfqX9SnTyD8x7VmE7ya75CC",
  "key11": "4eFN7SAmAoM43Fat6uQQGcXjM2AY4j5AAyEhaCaM5gS96opzd2V9LMxXBRS5ynERdZgtNcFQ3dTqQs7JK6obwHBN",
  "key12": "3Ta4V7DSj3Ska2DbJQQiwMHzyYBg3MZjB6nqeoDbSw9S5dzBHWerp5FXeW7d5qxZLGMeffQptN5RL98wmR5UQ3Eg",
  "key13": "2YneXn2sPoBvmFsikNHCt8vMTGvHDwteyp4bA7eQBb4aDCawNcJMgUs9cV4vrtbiGGirxQKWSEknZUEmZbMyPSfu",
  "key14": "h8qA4YWc7gYdt5eEw54VYZUzptK7ZyvQDphgUNr2xFmR9qb24LbQHmduEVxauNgZmyqhdyxF9B5AiEJAtNTAA7S",
  "key15": "q9VPhdRh9cNQd54VL4FouqtYdSSRqED77BT1AM8LRgetWkiLn2qwjBVcLiT4aZWj8o2vzCYtEo3GPacHmGijdEd",
  "key16": "4j9XVp6jC5C7JVPsiqvSfy6QCyvUQpMuU82xtwvv3A1toPDeTDxeJFsJuxQthPojN2YyJynYM9RUa3kDpnLttFy4",
  "key17": "66wP9NLfrGfHZ4geUnPWruJ6qLFjqVQeH6CBPbDRvpUE2mcFdmL2hXY54zAWF2d94TpGwLzoqD9HUo5Paf1qMBTq",
  "key18": "3RfGBW5XM3TEN481mLA7D25gwfxbnY2jQKeHfmVtj6XRmnWqBAp8KZ2WcNbxBs9s7gBoyYs8SQup9Fj7RfcUy1Ne",
  "key19": "5iDN1LRwLTV8T6XqdcqL1GyUcCDpNJYnZ7d7hCHU1Gpqp16NT9w8grfdEP19orod89CNnRgFJGPXLLdqfXbx6VB7",
  "key20": "NcTGU7DBY5vhYXeqTDenzhmXZgzYxSwMjqGJbN18dZsMjoafTQTubwQLaw5JdNon6UEyB7VupWxpXQ2TkLq91Xb",
  "key21": "2YE1ZrFfRupGNGuN2q2MZk6VfUXLByTsyvdrNLDErSeGc5F6WZmaP4DDYwEJ2nfrdYV9qj2EsSGvPukULj3SMRKd",
  "key22": "4pSpcWBJ4JDQ33EQzzJjCRetoVQQdco4w3ipY7EghzsAJwLevChhWW1AYbdpV78TWBeuoY4piZwpCm487HUGq1Wx",
  "key23": "3MvnBXX5SnCvGgdPZW4PCrDNG1KPDgCUnWv1FRQ9PV9uEnXVnESeUHXQC85egaD3Z29YBrhmn8FR1Ty7p52EfjQS",
  "key24": "3F1kfg4G1gQRhn8abKt9NRXbGFUTwuipzXTvbnbEFoQ6qk24bChhspjQLiixJP3pZvLHd5bXX1XEebXFNbCArM2w",
  "key25": "Sdocbd3dd4kQX2bUYLC8yYbzE78Ny6tCHTJXcJdySD5tri2R8EWiP8oLn2DCpvm4fSMDzibSNU7Bgp6d1p8qhBW",
  "key26": "3umPSqE6SovdTyspRXRvAg483d3un29iSb88gmGkKrMoKS16g1iCj6XXxFd9AbQzVSYq1WiWiimeVp7ahfM5XdF4",
  "key27": "5amRDTvQrgwkz2Vx2ZKcg1XXiTdcL1GntqNYE1akPKkvvuPM8srdwpGsbiCPFAzX7bLEyzvECMPyxAy2G44uFpgA",
  "key28": "52QxukNethz6cidF5hiq3q5EFBqXAqDtSrSvVPrGyg9FU8uCGSrkb1LBYbXMfYXiypNdN9jTisSLmyHxzxeBGThP",
  "key29": "5TKdbZCLghoWQi5vSBsL4H9xicS8NnyKqGLgj63L3UwQG9rNnCmw12CJQFKZ33FTjhGnhRe7coz7XzbwrgiXgQM7",
  "key30": "4y6PReWfcdWkw3YQQrXWgXTDgaLH8XrTT8Bpw32Ts8mgQvnhwYPgCKf8DxLid7jnCQ5gggXRxzc84LR7W1SfLwxC",
  "key31": "58pPCND64ckKaTCB7VeQXqMfjpvSTt7vraqsyLVLTdgrbWkGqwmzUYHTHMNUvERBbmD7goTTJQ6iYQmdhFYRDfN8",
  "key32": "5DxCfhBHXCievYZrAGSaQAfnnwhGz3XB4NEbnzuvxPfpDW6jhnqFnYp1SmV74ziqiT742kYYp6Ns9cZP7vquPdBe",
  "key33": "3pFXBpuFsGtbrjWwFNHYj12nWKswSf5eVC5FSHGedUwbLvACBM4p8Ah3jCXPJrdtvBDTpzrHkJe5Um7m3q5Xqx6L",
  "key34": "CDsEVNiLMz6cGgK1BoHUQkZCeLmW9PCiXsZQpLKMw7cP97Xe644c4pfUT8DHGMn6n3x5HGpAtPDkcWupjbMd37J",
  "key35": "NDVEFBsnuuVcZT3qgovnnkeBmxiJbyHwe7Z6TtwrgQDAxR3wBSESVKPFjkiwgZftBVH7wQnbcGyfWqSEHD8Rhxy",
  "key36": "3Fv4zXrdMVttVHFRrQuyrC33etnpmxuEF9F9hhbvEGy971BrZtucGrfnnCTt5zy4cGwwfdhf6VBxet5RjMTaUsLz",
  "key37": "5fCuCAb2pJhYKGfi6R2QbgkxAHwbbBWzibqE2dCrq2dbyrvtER9kVpkY1YopMzx7F5bqg9fG4s3fMHyR5YVYpapg",
  "key38": "4b9Y7t1W1aBPrm6faaEQMrkaZFcTNkYTmF6SUaWHbzjz9L1QoNJKQr7n6ncT6B2sQ184xgYGGAq1DCWNUCGrztoa",
  "key39": "5utwPCKRGPwwwEVdjLSG4Y4h9kF3H6wJJivhRhUcRaoFs2LXbN2nu1K4dtQGZ167QyjjgtjRjhDCmfwxxpfSte4p",
  "key40": "3YhXpmYuQgggPVu1PasSEiscqJq9yUoEL9fmVFv5Hjkmb4rVYH6UnCWdccdWyqZEjrVMyfXwPeatTz1KZBQ837Vu",
  "key41": "4U6YDmRGi7yx4GNYcAjkLeiYmSRpA9nhDue74XVSgCvRaqAvPR6GYsNJSLY7gg3WjH99kZhc42FxoBaajT4dippo",
  "key42": "3no59tu49GUSXuhVLZhwk6boY2AwCSkABZvcrUJDCS4i3PjY8SZTHUbCmoyrCEkYgxwyKf9vtVaecf7y2agGBipH",
  "key43": "4oUyFvkLn4rRSqiCUErfxPBuDG5YCFN7kwMvvz2uc5sYHAxNp35xhApMUGEoYD1hULtUCLw3dhTFhjXQ1EJuTjvQ",
  "key44": "5GvpHLCahcyG2Ea5te4TetyqFi2Rur9DPE45k6fvYThJqvJ5fqVaknpTkZBjKu6kWGHfYny9PJcuhqGzC3sb7ECE",
  "key45": "hcLdBhqSH92ejv55UrxLsBgHH4H49hMaBgzHDG57SceCeVLd8NYr6CeQq5Vix43tceCTVjN5n3GUMFzP5ppjj4N"
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
