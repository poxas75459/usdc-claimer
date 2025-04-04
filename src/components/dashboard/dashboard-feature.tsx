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
    "2S1CAdk4Ei63k3Zpsa8yiodwDYbfrhcTURexVMq2RzoBaLPUPkbjiSDe4sfHB5n8ZU9XdQEojdML6PcP6vsWmgDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUChssYdEq25f4fetU5BbLmdVJQtA6Ns3pGv1JjzB8cfh7e24eybDCRgrddUQQQwLEumPVDReAvmzyyQw3sgw7j",
  "key1": "33mMiamLj4jnF1XjEPQqSweS2z9df2TtUDvwitViMwRTH4HJiTovwHtfwFJxigA41AWL7B72ynEXVsipN3F1ggQH",
  "key2": "Mg45R3L9g6PotmZjfSHKWpGFTCNXYJYc7ap3zoyLdUXbMYY8GkyXmPGDsZ263teh17JTdGhGeX6eCFCZnED5stK",
  "key3": "43CiCvqsRUatZ5WC8J9p5f5CpNAHjBR3evy9BYnraKzh77MdhVBZLte1auFhBuz5su6rZi8DgoVULN78sdwcVAni",
  "key4": "5WZcMYY86dG8LZJU8aKgJ2CUwoj9UD5WzrwPckmgYG7tC1c1WGvY11T5kG3To4hjUchauBeXyk9nQdmn4spE6DHB",
  "key5": "2v4PKh86ZMa3maHcwSYNBr2U3iAsKBW9iAhC8HNzY5VoSWFopzAyMvrJcjtmCH7o4tpviyUYoV7bjZvQukgsBHZ3",
  "key6": "2ddoMnzFapRKp9jRgV6To86sp3oxBXEgFfv4i4gjaMuqYX61wp1jFUiS5v41wM3jNpk34HzsVBKK1YriVTGXvagm",
  "key7": "4GoNLbVesHnGMVCMn7d3tmTQsPvZyjyC5TMCX5nG8884geqkhHpGFSeeDAMGsrgGnkKucssLvGrg7qmeDcxxjTFS",
  "key8": "4i7DymSst1pPXLuq4Yj3CiHRkTs4bPHD6pSTGbAQrQPLN3pWFjQcvKuiK8npAo5gHRRREn5hbUdw4gT8fRCxA1h9",
  "key9": "Dr6AsU4Q1YBfUtfjhsj8n4i366TrR7GNBQDfBrnJX8VHh8oK73MvyPgpLYzP1mFuCouYnvJVGEeFbprUJH59Yof",
  "key10": "2USLtwLdWeuavYuGwNeEaVA8EDBCoqJyXCBTeZjuGYeU1i4cwgdsQz259R33eCuLFvrfA1SjTHkCoTgoJjkxcw1p",
  "key11": "WuUHfmgv8EgBNxTvTwFhi8xWdqu2iF925XmtFwLnaCCYXByLTbBzn5agXMKhkvTecS8JTAFb62RLUNZg4WCtgKE",
  "key12": "2XoLbCsMDPUFKhUQGvYz43ry7Zsc5rn8dn9E435wjRZnXmM4dgcTxSVnFwTyyvK3AWsdqRDuQjV2XWBXVR2Dhg9q",
  "key13": "43beUZ2cZDH1gmBrae1d4sTeSGU1YFAZvgbieVq3XgYrTAjMbp8q8uFXAN8X5stEeTVVmgoUTjA9ktyis6pxW2wF",
  "key14": "rqUPr8jHqevMuLxhJMYGLKX4a6bNBmyhTPA6XLuDjW1kL9wGWBatJ95nBiZ4t9hs5dVMYAaeQ8nqW42sKyt7btU",
  "key15": "SXmW8muxuSPDw4NVbktgutTimDKDjBdVbkddT4r39FMHksZmW2USEmpPp5rqmVsW9PX8rf6RPMsJber1TjMEhGW",
  "key16": "59TpNTNvQX9FtxpQTDgsn4msgoMpG8L1JzCxfmwdGDWMrJwVecsHXW8uZavZyU49QTxXCT1YrEQDejovdPGDuvLJ",
  "key17": "4gXGoPimPqVrFnrGp11noodfc1yinuskDLSnUJTGbWxbzTaucB7AfyvySZRfFfVvnkGT2hMXCJygE3wSS3HEyziN",
  "key18": "3hUcYKseknYrY6wqjME8AJfCKTN8Uo7qL17KV6xGVLjB2vHLX7XW7vnbv6qdkCYYaRwKEXPgthr3HBtYjD1PkMgR",
  "key19": "45qKa5eVnC7GdgtYBxtNh41a7HBmMceuNqKzAjih2nEVSwLDaLHeQNHhp4kH8UvBtjRJGApHgLnpnwaPY6gSmpZz",
  "key20": "3UKvWwNdhzF7zhLwbwRtaa6L8rwHJW5HPipt3b2JQtPTe4wxAwhp4Q6oEYQGhtHA6FNoQHoeauiYC9Jgc1c2fvLQ",
  "key21": "2t1TwkUvkuxPzMmi5zib3h8JYtGSknvCcRFVfZ8E2bHh4iugaJ9Ewr1oZUfJfutiwDyTXwrj39aCgRGLAm35Hk5",
  "key22": "2mjEcXaT9Jc1zsPtBPvtqaDQEiirzpKToRwxYFoVgJfdM18apF1ceAFGjsQsMVbHxs1oKscigQySNKhVg3vHjrFx",
  "key23": "2A9DF1aABL5bYN8HCbAfijhdXHVPQcpg15kAxoWS1ZAN19WyxnEFKw2NMcxeswmhM2wpUr9weDZqoo4fuQZdCCTj",
  "key24": "RjA7tUQKfN9dTL4RrQuqBq3VY9rkHjZa22rjT1nDtqfGRmEGLQKKErC3zFxAfShyUTkAx8mXMZGmo4wSRLBYyz6",
  "key25": "4j35Ystf1kZjHnTFdqLK6kZDooG83XbaqBK1bjTCMYw5bWM6Wud2wdJbifx8nXxtAdPCPk7f1e93DRJgWVVXsM9q",
  "key26": "32NXnEfq2EKovHYt61BZvaZTWZTTJiRdW1MLEGkQMc14JuaijrCxXRY8qM6gnge1xWDDFigoaJWKaFxzy9rQijQu",
  "key27": "2Yq1pwEiCRNj8dyWX74cYqTpXcqzK8CzQ4nZbEWc6JeeLVWMLPNNAoUEEdXj8PatqhBk8rrSGmcyWQHMt4LuPAEB",
  "key28": "2ppnys3F6YKYtB8zfsPh5kTpZC2QPrYAKh6uoa6awweXo6vYjWhydtGvNmJr61Gi7tjQEBfwY8cmgND34LKSqPSf",
  "key29": "2z7gDjTXatJYpmy92UXk8oUHAuqBrVvyPWU8nBjSnahbrFoLNsKQ3AZ8jmcUHDzU6A2KyEY5oFYUDJAG7aSVHmFe",
  "key30": "dwnEkoE5No6XvyfJKjmMXEMmW9aAp9i5A4uCPPYmsdfzKcdb3mHT4AEoYrtzRHE5fXozGZSPZ4ZfAvpFu4qkNH3",
  "key31": "nsE9XSGcqAE7MukD2V67xGuWS4bdqBhC8mSmrpvpQAdXxTGfwdV6KUdRXbpGgJLMc4RwQzQTo69eYiLoZwzFBaF",
  "key32": "62hdXDY4Qh9bkdpx8vktt3ekZWv9MoApRiHr7LedRSMPHKmnrVSxms3wTxUzPg9JmVWJrm7kqiipxDaH5g3aqyWF",
  "key33": "LgnCRf2zMpdUXg5bbfSgJBuvz5Jyr2rtiK4uAnufzwWhiR9t1dVNRrgJ6cyQ8V7St21v68mfKi5ZPP9fWLLUjcx",
  "key34": "2fut4k1Gd2SbiDiHLxuBzWdhDJvDEAQkHa26DLCst3ZAYQy5oXitqCPbZK4JeXDaGbdwUdkNafnZMe7vSS5WGpas",
  "key35": "5zMoobPSwMqb8cfwA152W5JHBcT7cWfmKnUXmQzXcRr8J2M2WHjmH8xiYZBhA1SWnv2h9QieBD9SsaPVbTcZBmD9",
  "key36": "2o2MXgC7GPjTHu6hDewA2GMVaCKzboDXm1Buyb2eQTQruxsuZixLJKWuJvtEAzo8hAP9XnGbbdUdSuMBeLvTwVq3",
  "key37": "3G88sEMcnkWZNNcZHmhvi3TTKQgd5QRziv3xeQDTxcgev2TRL3yBuKtQopvvpLDVyFnsUmHgB6xvb4vsArnQu5qo",
  "key38": "3RR8RiuFe4edVh2R9VqaiaU48H4oQgK7V3u8qyYHVXg5B9jvKB2RwrJtXDHMa57iZd27gh1ZemJdZCYAWYoR2we5",
  "key39": "4JztXwnFX9AwXqgKqQ5RCLS4iZdYzMZ6eqHURMD4pUn8YHNzBpgdwnB8MZGiLLbvtvSD6X8QM3z7QoGAM2NULdw",
  "key40": "3B8YxZQadpTe7k2vWQBAeo63A8N38rciYMA4wytxy1Xp8hRm9o373GF2ZEAH2bJbkWafGBHKtb3Ws4XwRWDSmFrb",
  "key41": "rbhmoDHn8NBWsiqDvqbT9rrLiAjMHVJExYW2nannoW8fDxqT6oskwkoWgXVrucXYTzrGiY62hAYAkQvkgfVot3E",
  "key42": "3BLce1NF5uka2vUq3PnUzXNHdmHQmANS242ieLCUQApiHiayCLi7UX6qKmoAnzcpPEfTv6uDoQ1kdqztNJxsdUdf",
  "key43": "2VBqNunKEbAMwUWiDsxUM6k2ZCZTca4eMJCCEdPhuFJui1T9TqjzybHQv45WN8Mi1SYd7sQGD3Nmqbhi5RNaLSfR",
  "key44": "67LCgi4sAT9xLG9VH8xAdU4pmZs2of8ZQ36eYbPDyTqeafsN6qPNEmy2WgJL2QrGH8j6xsy2yXFkUud1uGHZovLZ",
  "key45": "2ojWGcQsSJ6ymkaBtKWZD6xjVce8Ed55sDcfQZ4E98A1hztzro3rUfTx4gmJbUDktNmKhUat9DDPckWqMSMbJjTu",
  "key46": "2eN7HPZK1U2jj4Pa5CPhh9ATPGM2BZUHkFybWRhAjauPTioJLPKto7L2nVjiyni4mkCheAXgUACGkazZPiVmamHJ",
  "key47": "4fXBTi75bbXuXHVXhrYqsY58SGhDpaQwKjLtqr5vQTbbxYC8T37vtTiFtKt3tuD4rj8NroYbxP7ZVJ2DyqgC5yRS",
  "key48": "9JvGR7Aix1SRczhVj3jMbcecrmWRkQegy5oVmm1aMNGRFdKpfGMqbNCvCGR336YLXi3d1xMzsxPtxeQzBSBBwbu",
  "key49": "XVw7FyvbVTZXuLUjc6PYtxGjwL3ygVsHhAjPng9UyKQgZadiiGf7BvvNsjd7hHu5Zr9wxxZnVYkdLVNdQiCqrZV"
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
