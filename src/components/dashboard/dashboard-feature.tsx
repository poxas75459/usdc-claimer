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
    "3RyGPmgEri8woZBWk5H8rkdR25jUVhwBWp3Wyrf8czEL5nSrKc525hi52rYdEaAHqtmGneXVRATpeewpwRM6iAet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkY94AD82zZTJF8s7vw6CaXRifLbVqFSMtLgbYyJh2ZoEZkrbE3p238YbjJWdKcn5MVj7WtZnJtDRg68i6yNsXc",
  "key1": "4NdZpnkqnMKxfsfsAtHxV7DT3pTjMz9GGS6F1Lwzct9CJofPLFacZsfg66Vgvtj5iM1TJuB95KRX6dpKud2Nb7Ci",
  "key2": "5z5syYKpjzsG21VaY8q2PnvfmEdhW5pXLk4EvyYqDSenCfvU7HX1Kkts4JHqGxuDMJ154YH32xCGApKpiKZYZz8X",
  "key3": "2fskjGNFfQQtkNKKP6m8cTGXZ6xRB5vkmdmnG5avFcNzBtwzX9acBF4UMDQA9cxXhQnqCoRdDYWMd2yyLa3aoK4g",
  "key4": "5PMino9NS4h6mAcVVr1BLniKBxUmXbFkP4uhGKUGDsTPGEzdrRpnwgoWLck4NmeVDoFhodh7QujTP6dUYRqCntxu",
  "key5": "25nDtwVo1rzLVFn3oHuUf1bdTNvUoou89JSWEPCgd3iKoFR9cc8tHbxSLkedGrRwfSHJo9w6JRz7WRAjt1virLGn",
  "key6": "2rCLEpJ3QnfNkmjPsvhXwCC27S1bDr55WsnDo8CjSzJDgyYWRiWCUoULxQs58a4phFKBP1tAUoWf4c3YYVedAevq",
  "key7": "61zFxvhyWsEP5aV1K3k9vRwgUo7CDNfcb2bQre3yiq8VHU7srkqrLm5ab4nVHSbo5uvUnTpHbkXLEuCuhdUnStgk",
  "key8": "4fxJNuztgUsrB3ZfnALqucFYgfiQoeUCbcXFkSuXeBxtK7EY9JfZHo5HaSND74nq9U6SskHEpTVqZwv3HVheSACA",
  "key9": "LKuhi9u41UatsKm9WjgSMTD3vQ9WJzkJXohz8MzDkQ4Cjzsds2WxWW4Ywr23g4CH2sia3LFP9FXE6bRScn4eYJq",
  "key10": "4zwbsjeKQrckfzpkh8cE9H7uyYB4y632jDuEYbEE7s7wEcHH1wrsXJ5TRFRuSjiBeJgY6p7oQ15tY442bC9Vsidj",
  "key11": "21Ls7R4DRrwzapH9kKVVme9nGY1YgVqHViqiCzfbK6UdmoWxKmqv254g1sX6n69Cvg6S3NEGbSnxXRc79h74e39u",
  "key12": "UiCsBPuzqt7pUZEBD4cXzc6dR6gMyrscBJsk5GtKbhrHDmVxQ6w21io9bRsqxHHoTqPuKoXgrQVY8CHFkRN88De",
  "key13": "6qjX1arj7jaSdAgNdyTkNXi5wnfqKEq7eHJd7j1t1VxkpS7Ed3qd9KkFZzRmoYAqJzBNBXWSKeVdotr81W5bD5n",
  "key14": "4HG3HJ4h4N7wtEcBaSDMKZ8dCTHFhUhkzXLtZWSJ19JVx3XgT8DVXDFSNx15tCKM2KLRcUN79SnpZp5mKeXmX1fv",
  "key15": "2NKvhtofVAMvFfsmgEWPaJ7bv5AYxv8LzekTT49gQyfaX8G4V5PeEvycae4drTDrWzSE4cjDdF56b2K2uSQamSGg",
  "key16": "2234K4pHAbYZgspKrrSzro4hGjnyDDhU9z93D4CAyiPKb3uPgCrbpM5vkBy4sLo2AGW4B7dmz4hbqTV2ynrYuinm",
  "key17": "2mgD7WBk22zM3MpW7TxAwQfztmJQiru19Qz6tbeofYR5qCyngecbA9uCcp5p25x37XXxS7Q7E63PfQa3tBv94FBE",
  "key18": "Xe3rLW6TrYdvSQnS3msGm5Kf5WZtfHEpvmkPkm5W59d31RUqszXm3piZLgGSDMWz7PfzhjeZMF2Kp9Rzwbv8Yty",
  "key19": "55sqYQS8MqkB5swYQZR6j49drv41BP6dxxnmhrR9WBExExNqsSyp8StKecHY11mfLLVo5tGT4wygdzddDCH6x6AE",
  "key20": "52uXNrEAAHSsfYUXNkPkmjEZ9gRCJf1FFVwzigZqGkK4JVqYuqsgykzitCmcCEvTTjgiCqQ4MdcnfpAmLjAwSiKz",
  "key21": "287Bc1xQZM7RBumXbULsLFSTMSzgjhKZHjcUzugMGEQGNxvXEfRuSgZ6DnH4XXiEfU7XAHCwnwrYGvFcCRGniuUJ",
  "key22": "3m8vCGN3qM1iWbPYU5aC9PPtTW6S1YMR3dR1q7KUD9dkF1dPxDuqysBjZFZ5G5j4aUmsRnoBDrQ1385WVW2uhxr2",
  "key23": "2c7oh5HLUfCE4K8WjJWp81VNgLAwTzA2DShbgpYMXDnM4NzWuT22sRLD1wFGM6d5myQfuVKbcbCXJX6mwsnhQMXo",
  "key24": "3SdU69sa1Na6PVFS3xnCuMQx1HtYmUQGvMfDHehx9HyVLsxLEnN84jaYmi25Wp3MFdFAahc2gvPVhJo1tf3GpE8p",
  "key25": "3bbe7mZ6JHFgFdqHybWn3nQLCp9wnjGRzowpjdf9XBdgyKUNxUnvZ2gThbcTV73xkrifDQJ5G3DqXjeLv65jFRw7",
  "key26": "2UoTKqa8nFnNTcWAS2YnAhUNoBwqidsdcDghxzp5opLZLzWP9Bm3wLTyqcDsd5xFqJJb5Gg1evpGvvW5UdFaMSYM",
  "key27": "oDF8PUByeVxvEarbhzUrA46gFfUz5Nzs3T1Z4G8U5uy3haB9s52jDqxFHZjyECQSTMTusfdYGp5R5wtUvaEJCJt",
  "key28": "3NRBDAcyJrH5ESbmRUs5nfont5mZo3W9S7Y2BeSxyB3ojqwLtrxApWAhGcApzwsVCNby9xHL2mZdppv5m3dcvph3",
  "key29": "3Ri6hnLbTmtiZ5tA1rzCwvmSREDu92xgoReUd57GMP7htMpfMY3i8xt5ri6zaLSk4W7E9ANqA8M4K5EgaE5FDQDq",
  "key30": "3cD9Fj2sTnD4HQbH3oaoc9CMeBM2T7LdGbVV8d2HmSCxGVb9PihgxqFdkmaxcgG7LVS27Fx5kfuktRq6oHNBz4uv",
  "key31": "AWfxot19DHhvvUZkDcsmzBHiCU1FJGBgRo6ExLKdxCJ1ao5rsh7eMZerpsa793YZK2py4CQrMkzyFvVmdY9BEwz",
  "key32": "gABK6YhXzFipGeuAmbF6RMqymVfRVpEDgUERdbQztyXKuwvzP6e61pnTTMWp2kJ44psPHkvrV3P1Ut9ZVMr9bds",
  "key33": "2qGa6zvAn1SvxyjqqCuxpgwjWRip9FoLRjMpGyVNc5tkNRCrk7NNLspckEfGteNnjbGuAojMkv4VM2CfdyeCMtpe",
  "key34": "2z2DUstX6Q3pSXVn4fEkcyNVWeXBh2ebPUwqmZBV3GcKtrJiMwgXaaR8f1Dw2NTzGKKAQmHdYtQLosoQhygjBKf2",
  "key35": "3yD4WAhownF1Zp77cy7M65XFFTtsSVnwP8YthfJhfq2ZxXx1NKv2Br2YiabDW5TAD58axRF7NNsg3oM2QP1NG8k5",
  "key36": "2LT2FpDi69a4NYWXeNh3jEnZqn8YVXXe262Fm1Yh5MtUMGtkLZbheQfa4PKnUnfPo6PF7uMV59zK4E5Z6ewAxztP",
  "key37": "8EC2LLr9xaNd1tU7VPN6TRJN1CGXYKE124pnomJ7cfdohm4KuMDyiw1v3BhbGvfV7xSCQWbsjuhxVwjdYUxpzZW",
  "key38": "5VcVCRsh18ZPJdtJJAhj6xuX6A8jBUp37iafzeg2Y21dmGXZgpsQYz67xX9pnGZLvuirgaA8iJPoZp1aqaUUDWcx",
  "key39": "49WPvhUwCVqsQpe87zGeSKdkf3v3zyA25ABooNK2vuGeRj74YKfaCFox4U722iwGg8LJWghpKVovTmRZyVYaCZYj",
  "key40": "5ahuTyF2vQDSmv3nUy977AjZWGuLYhHShtHkMuVQASt1h3gChbkffPJ8HoyCMeUsiu6z2zZkGUD3DbZ87h3d4bGo",
  "key41": "DKLztMyZCUu3FhtT8SqqxcvmsTYo25erjfycoFeENmkMeYsiyWKvTfCt268JLY3g6q9gBoLDZ6YKJSeirFsQdwe",
  "key42": "CbnzeC1v1wASevR7ziCMhLULH762wSZzVTm2ef8LpgLFmsTyFsiqQMpfTXBRr2Svu8XBty5iNCDoWkfRU8xAWgQ",
  "key43": "2dyJe8HnkWXrqEexnFNM4tS5ZTWbYvn18LWUQpXUrfNnSzUCNTQipzaQGTYbSYeCLqGGMXBXbcztt2dnSdn9K7Sp",
  "key44": "31hXpzVWVAKuTqJwDtja9HMAQQCrrgi8dq9kbTfxPq8wfcGKNQK9ZM4VgoPkB6eusNf1kQMcDsMWzC4JU6gjApBT",
  "key45": "64uGcDupo421qJ8KPmUx8iWBHy5evfT6R3B5LYsa3s7CWhVacYc45SpSgX9vhWnQd7XmadqgQg6EraxkUQQpohpF",
  "key46": "4qQsTTL5MgVzubYRVTyigoMThjfNMLMSZpxMGQCYKcs7Yqa5aXx51PiDAMnjW77pPNMnCJKh8ExTH2noSVuxUtZP",
  "key47": "371yYTXgvqE8ZvmP5b6ctwxWgmBU2dVCHi13r3wPXktivtTEWrNgpca6moeCMsyGJbpUNryU8597HN2AQ53vHSq4",
  "key48": "dFEdcYUCKQyyKGNGCGGcyZ7sBaPz5r5Qezbm4L6ogB8eWHDu4SN291xZfG8xCUprf21A4S1m9jpPTuiQ4AJFaAV",
  "key49": "5kLwN9y56eSKcq3nKAdbiykkHKxiNhth8PirDPQwacVayVLET9xRCF1aBhPLfTd5EU7h2s7buRCEDArf1MgNdSYx"
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
