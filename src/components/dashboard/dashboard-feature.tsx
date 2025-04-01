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
    "5gYW1kdNe8AwG4R3nScH9FpAPkz2Xhzhm2q5bn8JEtsQ6BpaFiK8KigGoUTkmSJr7Pf8hWBp4BbNz9RNSP7Pvqz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rroHgBaLAYZP4oinzcQtnfaq4biqyznrgHDKbXm5pNMerSBu4UN1VMzLmkSDYxdpQ4o658LAm3KggbCXnK6wxfP",
  "key1": "4Zzi5QPVoZWTtYRYKAx4zCwf7qt83sJn3AMcVkTRvdGpqz5d3494PPMPpYtxrDsiTUT4H2mioydB84Q2uFQyfUpx",
  "key2": "36sidAgwNCrTQdLMTVipDiu7CcKyDjKqC1cCaBtFHrhLf6ZZ9P2NqX8RQTEfmmoLeWMuXx8YQVqJLFfyGvkiVfbG",
  "key3": "27JLrJ29X72Wqqcd9dhqpiZNjPmaF3bARMKN24KxTVdX7zhvHQXnL2TV9ynVLQYrabm1s31cP7mRPuM71qz6Guqz",
  "key4": "mwyRMBDrgTTmgS2wYjwzYXtbty6FgDL8GP5hPtL84QwEfyL6qLnGaD8BEAMcWkfATzSw4a2rGXA82oWukZiksgw",
  "key5": "4ADutfAB3xXjt7QZUSohKoJ3xWYXGgHNJd45F4nccmGuEFPre6rbNyvYB3aoBCUdns2uNckn96GPwcUHWbyjXfd7",
  "key6": "2zAadswLA43gvFhr6cwihG69FuVvnZSXwcsJGP41eNXRGkyhaVN2aEfVWcXwjr5CHJDnG4bNtCiEDBM7iBk8Zcnn",
  "key7": "4jst3pKp87KkCjkvVRGYqRPFvCmSAXfZr2hwqp9seVX3itcjEFWW8iEdxcK8j16eQz688r55t67MPeUhr5dksm8u",
  "key8": "2eN2WJrVcaYFfvcbL2nvSdfLJM78EmyYeKRnXgpgjrvJ3WLyzPb7xZyy5aPvx2Lnkr8PxfquWvZDwWSqgn8Uk6L7",
  "key9": "5r5VrsA2NgwzRkdkDBCZxh3zyJ5Ef4GCg5D92TRzdtLVy8hvXzAhE5LfHMh5nHfRs1aPzMryMJKPAiRjiWf7YFjw",
  "key10": "4WDggBsFWDhh6MGSuPYMj2EouamnkaV5qith3qq6vWHrs4RYr49cGjqNR2RwFBUj48fjJ1afKWFXraCEUipKfQHh",
  "key11": "4jamvG14iPE7VjQ21BguhRZbrs4FUxwD7HZSdvQV63ee8uLXXcKxZa16mv6TW3a1pyMhqpcXC4w398GoQxaqiTEs",
  "key12": "66udZdatj4XdZ13ym2fm4iSZn3BrMsejcLqspoQBnYK5ePyayAQWAUM1uFkKfTdPZW312tQpsuEz1YSKzNtVY2G5",
  "key13": "H35HBBUkrLDdgNFt5GaFHBDzTQUTD5zupj9WvUpciRmpeMuqe99SB13oES3eh2PJjBERFdc2TqheXdAmKL9dXWZ",
  "key14": "3DaAqPdRG8xfYTMsi2kx1jXtGeGqsb536h7dfeEEonFAjf26ARihrbZscCjtS1x26jixZGMpLhyMtQwUb5e9qm2M",
  "key15": "5eeGYtaS9hNpRcj4DRswhr7tjFgjsYFYFS6jddCwrnxmBcYDtzXJPifDiidxCU9hbXzkosBPPCYiX95ugttZsase",
  "key16": "5rLFndyRLvxCQUHvDpzfB9bCBxyAByyFii9piUXCd4VzhCgiEgWMZhffiSm5tQ17BEuwwTfoFmoUxtV9K2rfMG2N",
  "key17": "JxADqqqe7NSnpB8RNkZ8A96Y8s6G19ArEBYwTA6jxEn9o3zt5yH4wpKWfa2V1chTWA4YqLktfnFNTDDwrenyJak",
  "key18": "5Vbbh4KpH8MQ5ZzJLLvP8BXon2i4qzwhpoMANpJHLphvbuLAaF6KBQGM3umbjtTjXkznrfYQBveB5Gkm9YZozsAL",
  "key19": "2MkHY97xgQieD4sD1prFPWYddXVeysB3aNWMqbQgyVTM1rPPgpXbMbsGb69CesBBJDaBPAjgZq2UytSyWnMbSuV3",
  "key20": "5M1u1FJ3AjqatqbzeyS1TXmJVJT2V1K6jwAko1RUmTa63BFPCxxmPzvD8ViYSFEsT4dFuaqkLUReN1wpLQVKRstQ",
  "key21": "2RBHaBhVAEAQHdepXxSU7pjSQqP4yg8oxbHMpaKqqWUsBu7A15MaRyepUovzikJgewFqkmCkj8DNGsazsQYENQq8",
  "key22": "5mwSnSTjcnJNzFUdzdtTLLqM2LZZyqCQcUFteYZZ7cL8RG7nob7YRFR3yHtn12pcp9UsbAGA4UwTbu964wvVuagC",
  "key23": "5yiMNJ574ZwEnDnsqjbBuBPd7KNmiUQ81rCams43Gz8VFMHbyBzjyMeCYouxC2ZkmsA3fGsmmXeDFCgsG3mJyGku",
  "key24": "3j3FyD8u4FyGCDs9xcND8Q15K8ukxmBSMHZzXbfLWfYAJh9yACTiML1Sujp7uTzuqRZqc1Yo5dv4zTGYodbYSAXf",
  "key25": "nDP7fMSTJk3oZTFxvQVkXg4GMY5wpZjFsks2HpuiTHw9TP1ZyexzGAb66SYN4AENRHwSCUoVmMHyjErFidqafN9",
  "key26": "4MgcmYgE7Nf2DNqGQTvwbWfXTmwv5UW9aG8u3dFHUyxXC5k4LyD24cuq2TY2dzVfs3x7wSDhnZkVUSVngTjpDTpu",
  "key27": "2SZG9kmqUaBXcPZQtAM815mw5y1LFX9Lq3cTGMNyXP6KGxbH5jC55Q9VwhTLJmcTQkLZv47Qm9AyMm69Ct6Z4Tem",
  "key28": "5SbAEnmwbBMBUpqnboe7pkYW7Jg6S68PA3VXkQ7MAwxQiGTwZoCua4E1JnYhGoWZHGfNWEqGRGF2v43TwWeCVWPL",
  "key29": "1BitusVkryxhvWWs5r3WbWd2yyiNCkH6EBBUkX1rdCCpCUD5ZSTd1s763TecKUTfSfSrjtSgqJCBqLgEb8oyzvk",
  "key30": "4q1FoAW3ipLGEbhbnyZEy29K5f9zScNh4t5Qx9HWWDgkE2AF5mwD7zqc4QdyePKHzMqb7uuDXSzDK9soncTqHb61",
  "key31": "3srn4fVVCpwzyHU4b78Uc3agg7Fp9JLhp4Q1xeFMKX9Lt9p9JCWVByTn8EJVNZWy6KsFumt4EUqgWZGoL9LxiNZE",
  "key32": "4Dd9i2mYbhaBac5s4KqK33daZK5Nd3VyjU7VnUe7M6Mm2DY6u3KC9EkNdJ8sNdU4sgtRJgMhAispJcautiCvZ1UR",
  "key33": "5nMmRxRWQrkVBZNK9SKyGTZDfUGQwCK3EZnBVWvhAQqinzedcz2F2eeNWbf5vYixMMcF2KnPSqU7CgsLpmq2U2GW",
  "key34": "5tQVLLHS1b11XHZe3bPRvoSwAbUb8Qr6UoRneFCGmdWLH7r23wnK7EEwmHQRcSYRNeggKbUfGBiygFL1MESJnxX5",
  "key35": "5VPVLsBchZ6w8QcHQJkbdzc8rFwkEzLejy3Rt7otDNHjAC2z7mtRPS5KG45FJSWwogegQ3Dzv7VJS7XwuAchcmPA",
  "key36": "4m7GY8t99osimeQNG8D6gPnnWME1L2k9joc3yeuT9C9aa6xR5wY3JcrYR638nH7MLMRtkw8VXJ8HCXt4zZiWtuWv",
  "key37": "27DMQ8Xibybw9k5dreDuyzRenPbb8H24feck1nJ8ea24xmGQZ2FyCegfFC5bvTgE8g2bYeWjJPTW5Te1aF99jH8a",
  "key38": "2M3uqxM6bya8qJs775hn2fZrVt4zEQuT7HR74L7MTJcojS1WyZE7w8QQgu82gg78AFFStXDY8J7oaupyWR1nKggt",
  "key39": "2fvPVyHaGC7RDcKazmVoAUBkxTrgbFPoimimTMufVSZ6niqdYtpS5jwtXVSrYPtFcpV3FtPcBMDJtLn28djRMQeb",
  "key40": "59t7ufqWuABSEjFXpajnYTYPEqFV3TYKTwsEq9BUnKyAbao4MfLz2rUjCMXmt6zNhJ9QsduaraQnhVH6zigt2Lx3",
  "key41": "4f6Ug7yo63VFgUvegvVazLXYW4LYLfZqq5kUABvzvtYj9xB8SqWT3XYP7HL23CBF1tqdca75Zuyci28p6YjvtUrx",
  "key42": "5CuQNrhHYkc4kN9HaxuDZF4qxmXyGc3gYH1XfcbTpfa1KR5fnvczZ8NLgJybeNMamKWCB9dnyGh29aAuJ231ZYD8",
  "key43": "2TF7REkM2JreS4vDZamTrLd3VsmmxGV2Y6MUxVyBHRWg53rAsfPJW7wEks1jjaUaSg4UYKWtymwYfNLe7JvehTJq",
  "key44": "4hDFWYSkEzWh6SiR6dNmayY1CzQXFyQnXFtRznGuukBveegKDnYj3inwWMTAYwXnaLgixCvFerhMsZ67qmp8xweH",
  "key45": "t48WHtRbQqDJz724tGYdEuW1SgNz7UBgZWDyPF2JD2uNmDeWX7yW6WJqnvn2gJ1RQv77NZv14AypjHwp8UHt1Qy",
  "key46": "5QB6vc2yDUm3CFad3Wvzezw7qGMnq471UaCHdmjUvCDUXGbYzTxjZsFXuL9REUGPyQeSGbZHf9Ko6zksL71Mf37i"
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
