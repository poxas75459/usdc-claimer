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
    "5z6g2QsEYTKJbNfruExwxCCLumJLFtFAESUH2tueh7BqgmxfQ6FuCp2rQcQs3zfnQutvBZPUVXyv5hENPviNx6WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ve6FpczM3w4TdycXTDuCFbGSjrdseBpAPVNDQSH7eQ736q3JNzKEkrdQQ6AMMz6rsfCADGNAg3TTgGh3nAKjy7P",
  "key1": "5xe9E6Gbc1X9BUQdjVjbU2qcmNjTK9Y5rRwcs7T5vAeC4fVqwiBfCcRoxxaQDDix2xDgSkkZHDCza4JamNkuEkMN",
  "key2": "3M9SnMCmzyiKU9xeX1Mv8wwbzEnaHo6ZEMJW29XsFyc34nvzvkWQS1zvSrZ36Vhr4mDoRmfdmZZ5PSe73zmo1PPZ",
  "key3": "43AejuR5Bs2HpWi2n6rt73ES63Ts1DxPetw2599ju9DiZchZKryUE5hQXDLiw2mjEHML5iALUhV9CcE8V1A6dDXD",
  "key4": "5GbpSUcfV3B9eghsDhC5jbeotEdPza7WPnE5zkbXu6WdeMJrKfF1W4fLr4dMUSk7RjtnufNpB9XigCvvPvKb2Gda",
  "key5": "4X3n56SAz1L6gzwJdASyHMjjzhJQoCFxLj8rEHttx4rqeeggPWinNsQSpMmTg6nH4hhA4SipyeSxCBgPw2MXR9cX",
  "key6": "2eGhaUJD9i6aFBbN19xYEN9KyFnfqJyagcnhbodGENC4qk69qp5YsBwSKLUntLgmi1BAaPqy2NArjErrj2GDFWGK",
  "key7": "GZo3eQu4AMbK1ur9HSdvwXE712ES4qeDK6RhUfR2JwZKkLMKAeMECLqqeGHu2HZWCeaabhnn8NXfJUKcFmFCXCW",
  "key8": "3bC3mmtx5gcPuUTJuMCWHtSxsY6t11vWRB2JxrhBu6vxsDrfnArN7kGyVavW6Kn7fGg9R35F2uF2aLY2PAQWvY4P",
  "key9": "64qnRdu8Zo9DjuT2HoGiZx6x3tbUfa88nD9hXSGyS8hmsNNV3qKvMn72MLNpHbodmjC2ZgN156BRJPGqzQeYWCbF",
  "key10": "3yCvupYni8KHErW2NKZs9L3w9BsJ2j8AgpEyMYKPtZ47vZn4yrgtovVc29zsoGVZvt2tg4G2WSysgqxQgCHmFMEb",
  "key11": "57FeYJynR9S8XbB8xUnfroasVGaRcuuiznTK659XWTd8HdCSYG21TDCpRutTYehDpnbDNcurnJfpvbwvjbcRvkjC",
  "key12": "2JXsMBuFzAhTYz3kG6WMNhqtYbC7PiWNHNf8QzxYSDqcA7q6KnyWbf4qKaPiU5U1jBMhF7jTEw9WjNshhny6poFz",
  "key13": "wvmtXwk1fFmbv9FkQtL8tm8aKHhWCmVLTceAfiMrWZVsa6Ecfkh6WND6WphPHCeRkXJk3o7LfNnyiAsi94B7CfB",
  "key14": "oZNwJJutMuzWtvVb2WUS5iQsXvtvftcvNtXAkGhxbpwFanB9cMvoiVLR3Mrin635MURgzr52XF7zLJLNyAPmcNV",
  "key15": "3PBgR9wpDjVPUpmZsMMh51ctiPH2z4PD6ryuvMGt2PL9gfq34BtAgJ28TygjBReYGiEhGZvFr6UYkZmXc3vZyX9E",
  "key16": "4E77f5M5R8UP8crAVVk6dSV3NTSja1d1Nkbr1npa1GjwYhpWahHVJR1Af9HkjigSPnPUVDRp42Mthz4ED5TJrL7X",
  "key17": "4KpayM1zf8Kzd675CRwTjHXWEjvnnzEU3YQXpViPQHGrF7TQKz5s8Nx4Hm8ZrZ6ErYsWbPtNUQSo6jUATcGycMMf",
  "key18": "5QVPx3HRqybkwv6teDTrtuRUXjU5QsvFrkbzDTnRLJMAGUpMnui18CkUXy6H3rYcshFLiFDQ7svQgS4Wyz63yjc3",
  "key19": "4izyd4dLknobYHVDMeQb8rW5xseNB2Ckj3fdGC4iv1fYcUZJd8zpTvTSbaqvdz8m6J5v9U4hceXVreHavDTHRR7g",
  "key20": "3RnvT93jhZFNnef4mAorBpw6BRLMjTauR96e26BfiD86qigLHC9H1M5qEGShC3vYiKBBf2oTiMTxweA6dvESgzS5",
  "key21": "3cAqfF5Bg8U3kFR3DpJVGYgfboyPTf6zHeW1JE3Sqsm44cHuC32FVKbdX5SeVqtQJgq3b1Co37WkpfAKDfAAbr6g",
  "key22": "2TyFToxJKtKtBf8zpATFkQih2KN3ufPiBYafiiDAqT7qzfur4Wo8ueDU6N9cghJGtms1i1e689xuXcQKPQmxw7B6",
  "key23": "Yz4NuqvW7bJrp2Jzx1Q7p54wGfn84Y3cmaHnJJyVp3uimYDL6D7kXiM523kCH2qxy9qAQCho41HRfQgq9YmTCd3",
  "key24": "5iNXu9UYgPdpPP1z6ibsGtsBFbqdkYLHs3cuakN65EAg9Fc5aZjeGBLsYUoguwAKmiBiNC4mdTX4xp32PC1k78rq",
  "key25": "4jZvxBN5Vi3L4X5JSNT6Br1sCRMAZnD5WkZYr5sj2zCJeArvGASkAaTyzY3P3qR9T7YS1T8XCLjHupnQDdjCqUyb",
  "key26": "vdSqNTMFkHyEKbgcyQEQh3e8yfNdNBuVgW62peBwBDRmq3DHiNbZjze44xN25XRWJBkMYSTWWfkY4G89wmXLzyd",
  "key27": "4TNA7inwErDPiwd4n36UaLBwwFWn9H9cVqGRQWE7g1Ajw3GrvYG8oiuhfyTEaqnA5dNjbfgDJSRtHg6sC4gYTDwv",
  "key28": "JiFDRjb7SRXeRJeeoRy4gGEXb11m7X9YEWzGf32bBC9z2YtoWnrPeYaDZ1QBMJSPL8vZadfQi4pDDjQrNRdmZ4S",
  "key29": "5EchN6rnX1ktSdJCpoMg8kV8DXZ3JNcTBobw8ZjPQ8c3oWVxtzX2YeabojjjqpnNCYJHXhv5mYBsscbcB3nC9drA",
  "key30": "2yLca6d2Tefi2pZS8VK4qwBd7zc3wzz6yNpxSCJZCaRsA8VyjfbWiSuK1jNhy6ftjexs16fs2jA1o6GK3dbGM8LY",
  "key31": "ZNzP72FHoqiwyVQQirkCEJWfUsZKPdsrfN69fuV9crHoZWtmD9WhnFYgyKHCSuCuq39BhjWRU2Pt2EpiE8PBi9G",
  "key32": "3aPcHeRbHGnbB3SF9PHxztTWARvMLr4qPtHfNm9CQzkoDmp5cmBWEJyCsnLBELbojUtE8YB1SWtEgXqfMQAFEAWq",
  "key33": "5Y4NpPcnHFC8PT2rkHZeJa4ef2poQFoYwwSGPUFHSvDup2xLDYsFT6T1fGt7ETPCkao1YCRsXPFqqsDV3Cxh9mVJ",
  "key34": "2cmghMVJSjQMoUKXaxtaCH13urmEcXhfRL1axzNQYQjot9up551XYrvz4mgeSsUbwfDEE4X55PEbtoWwP2jSnVZ1",
  "key35": "44rBnxqFy2qgTSnP4MwfDDSDf738fgNJr461JWSgxbPXkkoWd1nxCdQ2kVYaFVkiP9QfZHqZQ2Bg5hKvA1hmL4Yy",
  "key36": "2eEo56GkNB5rTQHKk4oGP126cn1JnLAL7tvnBsfJGDHBxv2zyUKrjuTJd8TJEL1ZqHpgJMUm7vk8nkfoUN3do2pD"
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
