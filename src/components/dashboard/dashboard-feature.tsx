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
    "43Ah8B3ZjFDbzbX9Uq1RBxWAKpBFFfixhnXVuFfFTaNK3ENrmkYuMa5cs2cmnJuKMpCC2uCVZo8kcsn9T6Kue1Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PzRLtDuuPoYzH8wutabhQb4Depv6Z8SP6nq4NnaY5MKSg4h9bC4u99qByaWbbZYjQmJ9uA273whnYrimRLv48SV",
  "key1": "oi1gqoFChX6v2n7JsUv6TUqyubWWWHSucrQi2iXC5X8RqMMuchY9VSJsLfXRNKXxgRLMxzUgDyPvMbdm8UD3ruS",
  "key2": "ycnrYH5Qut9DoVGv2NH1Ne2jc5LSYbRywHNZTr9YMa3g5LbNhd4QEc6scdWpoNL3heYMxVyLhCT21kmGoZrPN7i",
  "key3": "hc4vEuztX56HB146yQEHCHA9kCEW3dc23zvicwACRuYedd12eiM14t64L8V6qHxquPwmEjnGmuHdkE6fjaetfyJ",
  "key4": "2tVHB3V1fbycGVV8mgPF9hXHU1onaGRJdk3xbAfUcAybVPW5ZDd1ghJmevvVJRLuqg7gY7o1djhrEuTdnRhKXeak",
  "key5": "3p2VEKUmdafhhTpVE5BDqHMRmpn1TDkkhfCz3bRaQ3KiodTBjFcMgEGFv55DXu15AtxZHjuNp3xf1z6YVhHYMijP",
  "key6": "21Btx1g1TpeQjvL1eVH5KucSNgqJyw7uqPfbceTNEvSgwwo5yegvDwS9EvWgDfjCpfeWLxNcEbqp8BHsTWQnGWcZ",
  "key7": "VNC329nowKZtGoK5w8so8VkHvWUe2wXkSFJzqpFZDDeMntYRoJ489F8UAomce1NiwNDtymdGZyAtb2XfNhTAv91",
  "key8": "Gy2WAPSEewj4CyZHHLUbrzUZsMkqEsXF367LqURSHFdMgbaueForDfidBQUzykPRoDkUpTkP3c3k19spJN9Lt1b",
  "key9": "4dpgFYTFGGPDJBYL77RXcFfmAppguB9L4dPTQdbXnJp5Kz367poaRKNVhb6d1khSf64etYMDxEyE9h68zTZUMsTp",
  "key10": "mfBsFiXQZteV4Cj8QiD4ExBXqVazPPikEW9eZruWbex8Tp8tWiudGX6sQZsxXDQWiWeQBFg9GG7Fnwv2q6wXdUr",
  "key11": "4yTgtCyphKqd63Kki6EpA98BwDPuiVsbjRDgwnMqp3ynDZnPEBn5aYJNv4Abak4Fu9Qvb6TnTpuGdmXdVEP53hNs",
  "key12": "CSy5dHv7pAHbQA8FAxgWqRXpEeoD4LdkX3neLP7e7QbrSMX6Si16etvKV6T19FXi7GoarNgSCWYDxRJQgdGRRF1",
  "key13": "2tWdRMDgzeqqpqGd55KnUWsqSvdTMcdvrd9Fz2Yy6kTMZycQRKk9Juw7quuUUVBPsQjq3xuRG66bfBL59JdXV1eJ",
  "key14": "2N1y5nvk3EveQUGwjz6Tg5teeHWo1Wa6VABcB6qZXmzbLqpcmCvz7nJZSEJS5FPLjpkHeveFCSzGLPynEZuk6D6Z",
  "key15": "2E7YpHU79P9v7bigVt1yupxxUCZtjaeKAspZTMTnyoofXpe4VRwc29XeCQsRTmpoWTB7D48tyh9cFeMcUfXKsmZK",
  "key16": "5esvJESAYU9mGdwhRpKB3x6cjgHFQTQc9JWaAesPoW7zYmmuoqqk3Xh2eergynW2G1Qmu13tyXE77tAzs8raTGii",
  "key17": "3J6qea1LpBffPy934iTorARvvFgjFGvCo37fb9DrRMaDgLyxJkk8fMEztLw1q75sENGHYFxDowQCJdC8G2PacC32",
  "key18": "2XQT1P8iYcdY1UVr7zMFjQ92ZmjC8CzeBaau4PGYr7UL4fVK6kiPpzm6m1cz2TmeSekpBQSikhRUaqVcbF9KUzfw",
  "key19": "3dHcwbCkUryHEsviCkKXMGEQb642MekQkY8VmAhENLGTRwgA9LQrMErngqjuxmnsrh2TSfCRqnwNjmUmLsRPhPS3",
  "key20": "4pD3adAB4owwU4W5mT19iPbZEdwLXFETD4AeDwiJa48NWb7DLYdzJyzvz4GBw1S6z2nTENt1PBwmykLPjssfYZqq",
  "key21": "2y8vVPCBaMuLrKF5a7RZnSenDggN3eoF84NV2vafoz7zz5hB3A4TV9pkKT5aLVf47tSMr57tXHLhZX4uiNtgDCUB",
  "key22": "2Db7YvCFtXksRKFxJHQi9V4aPDhrjb7LP38hPDsRd7Xg6vgyFpjdBXY4uN3UoEs4nW6UonCeiFgnKdN56MJNdRoa",
  "key23": "2FqFKt1qCHxiCW1Xm6qCXSQeedntQbdTTVvrwWXq54DXQR7pW4FHsN99rF2VES6swrxVgzGgNjGd3tcctFaDiDnz",
  "key24": "7rCa499eqP62gq4ay7uUDgn4tzXpgJARDLVmyobyXzqGhCdpZfauVLbtQq24a7fcqJVb7Dawtk8PutCRw2eHu17",
  "key25": "21XkpktFpYvEVjz1bDjysFTJtu7xHarFunu8r7BcutnVEgDkqWEoKCLdo4E8LcLzfXJLBwxWcmSx1rQGHHzVcwAr",
  "key26": "X1qxuejWonNJkPrJPRcji1ghm2dKqeYrVyNSQsU7ttA6kH35NCBjgmCR1fbZratUbDPkJYmGhVmbsGb9eV375j2",
  "key27": "2eYBemJp1cAYmvbUaiCtHdGwDJaCsmEhHZeYUb5ZKUcDcxnvAkDVZbDz8wPEUasWTt96H3CjF8Wve4yLE9Z7qPAT",
  "key28": "4QED2iB5nB8jpKoZ9wNSG8Q4GY1bzfP6mcPqggvQNdio4YxLBRpPV1p4jq94ZpX6QA56Z7UJXfNZUg3caBAhYLPY",
  "key29": "5XFtB7bzUArEnTuthpRHnZWo1EvgxnjBvfGzoRTe3stKd5XnRpJaRUU7chSC5GVhDYFT6XrjmqDNuBWYzmgEWrgu",
  "key30": "AGFYb9Kq1BZCx9TkNC1irvzctCtvsMcBxZhhbx8syvVKfRWzapr2P7vRwH2GJH2DVZWPZ7LfkY7vGbEZtbNHix4",
  "key31": "5v2jmMsbAfSraC3Lg6onxVFLE52wZwGPEj8whNFxBBwoHb788w1GdbWYHdPDLmusNZYeCcdn9qtC1FwX9SbxPjFh",
  "key32": "5ZZmyUUmChLr2LHNkmLqtT413BsqiNzoc7Lig47EPmw8ZnqnzF8fRYyWPUJEonXNgwmjXL6e1hPGBsftjmyWxc8g",
  "key33": "494VvTWyJeKTNP49tnNKvSnHdJhHUXubrfTuUojL8QokrCchZxbFA9ZSsjrpuVaWAiJP71Gk1X4njsjDBZWNmxxx",
  "key34": "4thvdLszjEfuHDJZsWup6sph9G5sgkvSxqvvc8DB66MHVwXWkgj1evYKzov7tah3J63cFow11KE8DoGPsbXWAfsp",
  "key35": "3UAMfE2Nbtnvi3skRCKSJtpnUa3sGwGY1E4Qsi4CUvXt8n9ub3Wi1rwhEb51fk8Lx7MUGKvqqy7FwYK5tbCDsfg1",
  "key36": "BvbTrqzR6B4Hz28KFx5QDKrqkBbw3dFLjCCK6ZWM1yVZkF7rDodJMFjcWvihBHzMtmkthsE2pi3VWoPWQpyiUqh",
  "key37": "2yhduyRWRHyYQbcvtM9Xn2sXKXfSsw3MYEpmmNQo2kB3DoojKVSYF9TqjttyWDxStqbnCS7yR71nbtpi3ANU8siJ",
  "key38": "9bTpFBpLeAfPSni1EuQBsxiMaBAuLeQog8tRm8VVqaqs4KodwAsb7GGnKFt827DJCHoaYqjHxKqcqpZtd9MN6hb",
  "key39": "5hhmq9o1xoFdatPMuKstvUjCkNhQpaVVXQNVe2jcYLrY8kmbzmETDCaQZbQq3NqYiRThw4j69gbf8fdqP38JHRQY",
  "key40": "3ZxyoNNWXoSceyHJe9Q5XS5ghXE9j8VK4D8kXvMA7x7HPVwD52RucFUmfL9QEH1tA6zmAHgsyMJwEsoQTr5foNEw",
  "key41": "3rJi81KbmDdJncEHdCji1mH74R7CPUXdrXW4XGEqZkZWc6yMXaMzFZC1TgUVy2y7VP8uBF4bLzw1qYkhMqQCCT1X",
  "key42": "3jgf7eD5g7qkUKXQyugpsVUqypMzRTcbe37dsu12HQGWGAD1T3eW5akPQJJh44SRbNskBmU21DJyccSNHFypx5YV",
  "key43": "2aYnFRRKVKuwBKPbnM2cNvoH3XYmuQhumLMHcyMKfhjA2baMyt8WfGLaQs8DerYnCMX76uUJqEy67Ursn73Vxyyb",
  "key44": "2mE6sFTn6eWDmtLBxrAV1B2cJFvCRAatM8AFoyCfKct9JxMFSCz8MQGGXxcwnYe8R1C3Qf7vejbpCebqVvaPvqCN",
  "key45": "29TUXsTKpjWbgDVnSUdrzjoHkrp5kVaU7hXcoCRYf5afrZNRzEfwYeyiB8JoUCf7CxU6B4uTUr161xuPAGQbJE3D",
  "key46": "5ssTyvgSGdnhm4d35LFVyA1TDRT6sBz5G6RUbnLEAL2tPLtRpUqa8oEd96d5i1cLqPXPw48d1FUXkVA42pxiyQaR"
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
