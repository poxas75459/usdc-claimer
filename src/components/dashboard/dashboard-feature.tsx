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
    "eUKz9AjiiRetwnso91J9PiRgGEWFcbWhNjC64aszUMBc5EBehpqrX9kPcp3fQSKm7iUXhBwuG13i8XMfaepTBGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4VxxHUBBRKTHW2Pggw48oQRJpybyRiSrcg3yEHNyLsUotWPN9ayVPJCAbMxMfpmkvFdxxxeFjapXGobRfB3WbK",
  "key1": "HawvB1bJirYq6smZLUHLqBkGsnCkLwFSZP1nWaLYxMxGN3pcJowZ2NPgbJ8ZW88jyshTaNSLzfeccuWi2wvmUGH",
  "key2": "5g62xrCykc18Zej3VPGY38SsG7oYaXy5E6pTNHiYAsdLKVsZ8L55EAWWbu9V89hRxKyW3YaPyY6Wb9bkNX83siv1",
  "key3": "vdxvCr13QwAaiUEbcJUtJKrCg18ESokBNVWGjyw7iWkmom2eoTw2rD3g8wq3FFK4JnHoFhdsKDK94bWqgk3mLEX",
  "key4": "UjFyRmafSnS5sQZeScds8BhKy43twyboh83dwNYnGnkCVHXjyJ6sbRaEAaKLrp4AA9upCQZG315FCmoDTwWQZWh",
  "key5": "3jotzsrn9mwfdK6KFcnf34ZhgXv3sFitfg3FeB7taauN9pM4MrSFRdNtQW2gSh8odg6MiEUxSNLCX3w8XrRaCnd2",
  "key6": "4ifUZRMdMmH6wnJajqd2bLzhu3koWFB9B8QkMJS7mwipGwYPbCzgkvLeNMSKjsAHf8WBvgoT2rbPqN9TNg9QGtf9",
  "key7": "5zR8y4aVsPPrHtHocnjZVpVHgSujT3KaEQzuYYJWzdwsDJz8tJYbsdxF9gaQ9J5GEpih65pvATrG68rqt8Fv4Vx6",
  "key8": "NXbTePNAP6AVzM7xiYeaGU6SRNA4xxwiTVw2hF4EPwP3nkJwEHBaq4ZjQBeTpxQQteRX474e7uQfYQ8U7sLhppP",
  "key9": "51QjHxSR8VUyQ9TQAwRB63E732Pr5ShCBLZDfRKoQevJmzSv3BpcxTi12jb8kfBG2Wv4dEEz5VB8zvpztF8HMvs6",
  "key10": "4BXy2XbtuMbqinrDkqDTTzASHPiFUU7TTktmBQaFkX5MQB2tFdq3ckA5Wmdbx668ZLaG1TbA8migkGeXBjU37KMz",
  "key11": "E4fsDGXqMwE5fwCBYAqRjmAe4xrTjBG3ZKuVsPFyxmG1yN3pVQyoM8E545vRGwYFV56fWqkW5NKonYMiBiez9Xz",
  "key12": "n4Bon4yjJxGUHwe4zeQUgaeKx1cvzrK5XCtmxz5LoKtmczaSWiVCewLvKWC3rCQZq1fVQfG22rTv74mKbKE2dss",
  "key13": "2tCwMU5WmxrBh2qqNGiZjemKt4BCdUA3xur5Lh6JuAbLocvcniV5SBGScj5kbwVvRTX2r7BQpxn1WaBXzZQF5j5f",
  "key14": "4ZnUGQnipxELxedhK5ADqpVebJFmdpKLx3sVmeV86QWPUd32vacJizxgMg24jKzF3CXs5xKy1uBBs2GcMx4kinrG",
  "key15": "4xebRVEnLizeEfsZf7ucLJMimFo6FMU1PPLgyvCK44XaDGhBBdzqngQHUfXxDdkxiYFem94DhUdJyj1JFU8hfmtp",
  "key16": "3icsNZtso4j8dDrLkR8dQAu9Lw1uhekp3t8sXp4b1ZUhMnC5MLByJFkPs6FVz9F8Lpdj7zFYw1JMKoX5AtXQ6PwF",
  "key17": "5S8DfEvkSJkzvMCHQ9HW4EFbLoyDyto5WytNZ1YTpaJ1rKxx4Jwpztc1PteT6SDm7WDHR5p1o911nHdoK2xiHQJZ",
  "key18": "3QMNinenkFYqGoKmJEmkHWNqVP3PF975t3pVuJf8soFid3XiQN8ChgDzif1mLG97yZiqi6rM3eHx8kPRGM2b5e4C",
  "key19": "4o4gD5YpTt3i15ACmYD8UEcbitEt5K4HWaCgiQmzakTHcUuKr1WSYF677oPFfoYGQXpvC7SU11kegdm38tWz5Pge",
  "key20": "4uYcCTGwaxwhhUVovXgtsLMdPMkygAeKoSrkKnuJjVQqwMUTT6esn12cznJ82v8B6Hx4zGJQZ994ceuP8E2b97W7",
  "key21": "2t6nuMiSVtrDK6dcA8sjpnc8XgA91fNDZnoS35BMUekQNUxqN59GQrbU7JvmsxHmvYiZzYDPz3UayycEziGHXuiV",
  "key22": "3B1BnSNu4VUVTDGf4GdQFPkyLRTxniNX4QkbToVQzm4vLpHecmz7TCf7GzWTecnLCb1t5H9b4CUdxdGGPCUKRsSS",
  "key23": "2z5QmFMm2kWLNAYGwCST4FLHEd2B5qDMPkrri5g4i21sb9gvau3RCnLWig5q3CGLZ6mNRKaRdwzeFTGNrjDyxrUh",
  "key24": "dWwzmBJR1mJYoUaGu3HwgT2Q4ozpa4oASKT2MXWHLbjDFkK2sJ9iLw5rkcnpvy931ctrztQ6Ta6AQXGnt2Qr28X",
  "key25": "4V1ft6o4xpdLo3Z3EBgB45yzkKZ32CGtxUFcDztstKHduaRx5qDPxRmGmx7bQ1aq9gyHwY2riYgHpdih8HRt7Vfo",
  "key26": "2R8srZTsmD3iywrQfizL4oRoJXwVFkVKZdX3jod6hRePexEuT4ucfGDvTQUgi5UGGaECuqwwgzZNPaic6z9jNULB",
  "key27": "MrtxpGY6CSLBXLCWguH7AzVzt7a75NwhqRBEzvskQkWK1V5TE2u1swE56uLrkStxnLegfVQ7g1bPVojd87Msj9j",
  "key28": "4kjgD6ZfUFPba5X94M1am8yNQrHvdxt3LHQwo1psvJeyEW8mbftkbnq59a3PGKFhUynT989sYSpLXjargjkt3fb1",
  "key29": "28z3JyaKFoCeHavkZgrvrPoPkFPm3HpiQhZmxciiTESv8ZE2TjHCES6bygzDdJp32zMntMjrnQ3xxK41jibT9uNC",
  "key30": "1QAicNEdTDiZAbev7iswwL3coUoqdnWtcEiL7YrGjHBocXcHdMr7N1EDUAtUSabJHiWPrKgQvuLAiVNsUqYSDoy",
  "key31": "4RFybL2rzFSjPb19jigi4Zf1psBFad5BQF3HpNjQaDxGJANzd2hRXdwDhzTnvyNaChMZa4DKmmdfNDU4YeH5trP2",
  "key32": "uJHRGgKZh62GS5aPK4KnndKa3Tf4e4zGJP3WHqeHwTzgZv7HzrxoPs78QPAT8tdrYtN9z13zwSTCz37puA7QfQ6",
  "key33": "escZMpco9FLxvMVFaMSdy4zm12ErLjdyeGuJt1ow6eQThXDPscVZeksW6mf5HQMWTtBvW7djroDvbViR5sG3N2E",
  "key34": "5qjuxDQjckf3XXnHUzyNFZTdrUoE452oFVLtsrRYHLUtdFBC2TWFNTjqo5nAggbrSCskkRxsJSwcX6wdQyapfMFc",
  "key35": "dmYRqHUgE7bLZXY1m8DA1ZwspboEqFdP9r11jjbupToQ82cvZ6davoXDtNG6sTaVvQND7eAUe29K6f7pG7hTrh9",
  "key36": "3QjPdN1tTTPGAXJ6WqKBWrz2dKYPDWbUrfUPjCrWi5FMV4R1r4S6KSh6p3KchGancWgi58vANdVprEz9xPyWxDkM",
  "key37": "3eWsPg1ECLkhgHsT6oqPqwNBRMmzowGmnamy7MdgAhXofU7DrziHfx5dazmHWCQuAf6cEAy8g9QbGxtq2hTsi8ns",
  "key38": "4d75kKZWFPTZEcBfTbEmcHUQZ1vPGu2vpcGGvrSUvsKQGPWAC2vRmj2PXqsRqDBkcSjbv6MQAFCbkLKpuHCXPNT8",
  "key39": "5iwTd1RH2xfUPHTjMzpznDB1ugupKTfv8q5TnE3WcMPd9isVHYDecnDBNrR3Hc9TcZwFfVk5agwDaR5NoFW1oYYE",
  "key40": "t5ezKktmjXSGq1tXv2sSnQaxLQZMFTucZR3dp7ebwjA6vx6QdtMhApiPAQi6xAJxPfvtktkWQFoqtkfvUuzEPcz",
  "key41": "RMPXW4kqAxcQbFgBGnBf5nxqHT5bn3U8WLWLMTwyypGHws2Sii3F5fE4f9xyHxG4fb5P6m8kRx5bCMTnnhuqb52",
  "key42": "4b4W8XWkeeUgAg9qoRRu8NUGkuqrZx21GeHBcdTB7upWwo6vV5orZctnzMgj4cZPrHUwqjrVT5KUyYQ5nXVyA1JE",
  "key43": "47Yug2gW9cKwgKGY7ApH4g2fXdAhUYViWd2avxyurJKP5RSw93XcBRKTST4mc4ikXnNfmL814zxjihkCTmGpUWg6"
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
