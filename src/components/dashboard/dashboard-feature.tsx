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
    "39UX4Yay7vZRUnzTRoC5XGWCspWPDtXgHD1t74K5m7DXaXqAqs2YPMUr7srvfWYJQ9qtnWaQztg66QsLeTpg6QMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZsNAHdNfMe4v4dJJcmeVGLmpgMxURLSu1hx88pFuAfa8ojGqhEmHLRRVb5TH2Xbm7tfTccAptnRSoJq7jSR7mgW",
  "key1": "4Wx1otNscGXTwWSmD256q51n4Wt6VdfMB1xxRk9Pefa11JPDPr1ejMuvpSw7jpsjSqzapGj9CNgRuyuwKBCoApWr",
  "key2": "V8zrDnczMW72aSYhc737yZbTNErxYjwj88hA3BYXoza1gWeHo1GXCUQi5NYDBsw9rHq8vuvupgw76DheFYsXhyj",
  "key3": "3DTM5CBbpN2yuUiLQvW4ZMo9Htfn3UyfLQM1QEkfrFEEwhZ7kvhLozFSVMtXq5Gt1D1JBAMvC7ufX61ByKnnMc7H",
  "key4": "5oXXgPvE12WiDzq2dVHK83W7AXNjpBRdhNpHkVu3s5rEWSPQAaHk84RjvjV3kGDQeVVof6huyuY7uGmqMnhsmRDS",
  "key5": "23hhb25Rv8GB2Zz7LEATX8P57C5Tn7dhAdd2WwFLBwqkmWQxZYKxdBseCXwfYbu2wLdevaM26mSbRLKWjE1U7fR2",
  "key6": "4pUmNuLgfkqg3u1f86L8pemKU7m2FPdsFNghdN7Me9xL5vPRkKyFtfH2y2ZBFeRv6daYH66uGata4E7kA6MUy5dW",
  "key7": "4921GjsPrqeoJxnqYKVDz5Ud3aorQaqnauF7HURJQNyixAS4CgmAATkYdtoNtqV6hoSLydcS5doc72C6W9Byda4t",
  "key8": "A7zUnTMDAWFPSzC94m8ikGB2miScQCtuTSK2qtonwPqbmvUCyKGtoL3jRhs9gEFvrUoRowsRnG7H1gjsi9LBJkD",
  "key9": "2mbiM33XwQ17RDVHYvmPdgFgb74bTs6btx8Q3Gst3hCb9NCarWuEMnEJyisNaTpScmsT1itKJopbfj9HejJsR8fz",
  "key10": "Ng1T6p3t95kg681jqfjoC9deso7VooVdokKaFGvpvx2DeuTV1sPHzJqHqESA6uGiTjPmwVTZ2tq7E9xfBxiMNRv",
  "key11": "2jMKTwVwQXFPy19gcTatdWeCFsmRngfG1mWTYT95RngPaxVcr7j6VADvGpq4BAhbiarhDwvLTSwo2Vj56ncxu4dz",
  "key12": "Kvqg6vV7Gcx6aGW1syPVcQqEGKFSs4agbGG3LPXLtmWq6nS1PL8Zoz3hT3wfUZAq5wxCBfhxVRHPXVnCnSeYFc6",
  "key13": "5xMNbp54HXEXpo7MTvp2whxRRLgzG8BwiceVBDgVzS7jz7pyoS1ZCDF6FyhCTbVNXtXc7eimpvZNpdjiiftQDE3H",
  "key14": "4tJyg1Wn1U2xwLxtmowgSMmYoTE3P4fWHurhDAx2X7VoUq7wGLjazdnFHfvxKjCzADAXYKyAzjzCrAhEDTp6F323",
  "key15": "kPsuTVVWAZmKuwUFnmGZW4gGa97XL85PAaVM9X7JmLNyg2ecbP5fHinurmo8Wmqf3S1hKzPwjCkr4TbdN56K2JD",
  "key16": "5Mh4wmKjXvEuR8d5mKxATUenfc3K2XyCGEPFjthSYwu6LapDVkiNwKGRhmTfnUg9CFQhDH9bKsCmNfL2nxT5cNfU",
  "key17": "38YmvyzE1Q46HuMBRL6uZonFVU5FZeaLqXj6WxbRd9RyxdcEv8SRN9FPKjSdSSDXR8CujAtk38HCzqbvo8ZyBp79",
  "key18": "5orGJZ4CiJLJWrp6Dzx4G9uwz9NRCTDAcqC1waAZGeBQ9uqMsc2zMqgbtnDDn6Tnzh1Av9TsdVDaavAQmLyVKaMN",
  "key19": "u3Vj5Xg3otwf81ayjmbcrwZidCbWUS5wh36h4hDimGJFBcvnECghMA8q3Ldm9gSam1RtmMkBpun6o8oTBbwDNM4",
  "key20": "3zUKdpCkSexpS6yQknttKxFMjXVXQRUFTiCkhcwvT2uD6EK3TodX1p7JrNrpJFuigBxfvjNzTyDGdz9CxQFkNJ6x",
  "key21": "268kAzECm4pCgNHTvAMDSqg2TJn3BSe5maWjafXozNo9S7uN1AaAj97RnXDQX7nVQWL66wyLPcYNM4yWwsGoLRrU",
  "key22": "4DNWvaJkcqZom3NkT6PMMMnNxHQPNQrVrWoFwy3aaqsvrCXL6p8kAHhx5uR8Yby3ATS2aVi3iPkUuNCbsnmFeJV5",
  "key23": "5ZUk8GE2bSfqatvDsqgQ7MG2rqjutym1himgVexCMkzJitNeDSfinNYqehiBPAiZzSoFFVf2Qgv6Jtp5hfAP3pMn",
  "key24": "24CYNV54U3fESuEDk4mvvY29fjvkYSP6YzhXo9EtnedCh4UudEYAg4YJJQMGoD4jDm2VXEkYoUkh3XQcgk7v1dAe",
  "key25": "4FY4t1Wrqx7eKiY62YWcZTNiRusSZfE2PUU5La2JM2cz6oHsUGezXDFnm82XgewCotmNKUdUJDHVDvHBqK89Mav8",
  "key26": "2u5y946HaMkEThpKfRU5zNRk6PtMDSCpgm4JZ1V1ppYA7E929W6UVLEd5h3LPfvGxzAHnCYBZnzSk6tB3HAxhere",
  "key27": "5eTnFr4ABdoNmg5vy6b6a1j4XVFLwJkXHtAbDT83kV9D8pS4jXVBRa83raYxo6MstkmMMbDoPfcaA8QndjdMGBAG",
  "key28": "ajoWCQq6kYi4CGpGxafVtYi4o6HicFX2bpTjHa3t2tAC36AMxNPq9VMa88pgX2vtdqppizoK2KuqSWX41dXhLwv",
  "key29": "5SZCNZFSJ8LnopoTLtgw3GEMSVgED1UNNoTgbu9zyaVwKgNonT5uKw9e7aLqDk6BaBSoYUV3cTeZqA8ybpbta7CC",
  "key30": "81W4uC5tL9iXRwuSZFjSCpE6oFxWcrcwoce2kS7ygrEXQVPK131m3P5cBuUhoY7qixV2kZnQD4p5ECJJjwyoeZJ",
  "key31": "3pjh8Gay8fypkKx3DGUSRedv9eXaRmhKSq1DzMUx9LPtKpjKDKLFBinUnSCVY3aZBBupXJRtuSqupvULZPkJfQqN",
  "key32": "4TTJKefWNHVRRJdDSEuhzA8U2iFy2LxdGNrkvqNTmx2ryYjuc2pCGLLFc8csXU5TiiUL1t4KgGbcwjPoqh1TT2c6",
  "key33": "ZqrRE8QMBPq4wQsk1PrkNCWMspMCg9VaS8EvD3fycjzVnYpEYFRECDyxFtCkyu6sT1Vya81PusuxhZTXpp8CHRi",
  "key34": "4d9qTmsLru1J3Su7mT97AHpcxaEGxrn1TyKJk9ygKzNE9UfMt8ZYb1Zdxc45KXDXrqXSTR8Rde2htPN3jxLxLW4W",
  "key35": "26i1aaanM47UcMJLdgHnfxhopvGSu72y9zq4npKfU9oFCjG5jQHm9CgNyFKW6BPiEZbhwrfFZtiTWPeaUmAjHCWy",
  "key36": "4sP5CDyZ94DWXDjfgCPfknoaerPRQVGNiKP3aMhssYSdC49Yye5yVrLvnaSfmXtfHfB7xKeRMuETS45ZzAcU3WDo",
  "key37": "5iWS67363Ay3aQtQc7xVKyTSaidSNunTP9CHLQch2RuPjZwqCJvNijXLCB1q5bN5sMcLFcJuba16taDSnzjNyM9U",
  "key38": "49gjdywvkiN8cCQDwMDppXzp1RRRVd6XdNVLE9D7MhDJUhCSsdwpTPyMU2o4TpmWT3ejPqNJ6dSNtd8YSVhj9MFV",
  "key39": "3j7G5FyrAdEzuH7c3m2GXsZm2jUJTy5RzmYWBWSUf9iJ5tKmU4rrpnp3LmaNsnbtnr8YKfuJiv8VnXipwbRM5kGv",
  "key40": "5V6WQwvTaVdu4nTAgy43mpmotcGvkwhSeNN9vNBRVBpCikUHQW751Qr7xFer55RLyvCmYELzPp3jDzFK9BiTk3tU",
  "key41": "xcR335sWvzoEFwBRwboiEo89YUERwrt8EUop5faTYwkcvaxkqRKJfSScpTFw432tw7g6zirY2DsKrTDf3fAHXko",
  "key42": "45MjszgUZKQXc3WQ8z6TRoDygedtcVfK4xP4XxJeeTJvo6Bhp4QwkYDBncpFh3ytoeNJTSijsanh6xzdtTLMbPBm",
  "key43": "62GQ9zBnQYJx58nTcCdZPCiMqYcoJBaBcwNp4LDu1BCLujpXweGkotPKMuJeer6AXbQH3mKE5sWZ9nqsNEBDQLTf",
  "key44": "4CTzfPNsTgK1XLWdmtCMZhiGSbbLL81BTgotmhAZW946V6iPEjCyLcL3cG88ypBm3jj8hRK9j35JNRjG8yYCvkyQ",
  "key45": "5F4CXmjrtCEq4odsGrb6Q9kT4ns1vtkN2JKnnkSAgrjWUv2PJ9RmzwDJsn8G5VxRwq3U4Ca7CQSEtbu1Nx3ZnQiF",
  "key46": "3k4RRMytqVFPC83y2MeVSmja2gVAt37AUvs8H3Bt6gPcXEnfCxsdtqZtaitYra2C3d4woLJFTCCqWk4z46oUJWdz",
  "key47": "2wUUfXJ5MnUapW3xWsuZBhtgKJQRVdqqodstD3jmnsaXGkTD4qzsCE1AswK6BR5jqD9BBK1ZszgEf94Kdha3HbHA",
  "key48": "4PpwrZQPLLMkEMVbTAY8cGoJGc4Gt2Jq3oXkmXmyK27zqz2n4CHj3qh3LRiTR1pTGBkFm5wtSMBUpfm2S8Wscht8",
  "key49": "3yJBDxyiE3oib8y7f7mp7yYeZvQLLCtgaHHDz3NJfVvpY9hz8tbKcgucxNqGEGZdK8HMFc1pSYWLiu6Wz6cqnXHr"
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
