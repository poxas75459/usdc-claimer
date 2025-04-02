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
    "3TWNCkDLAN4P9PihoxkwugEgsN7wAZQ3Bg3UaeRzixzCanw9XSM6D2aCpwq8Rwak4VBK8iXkCihctjsAd9rfasb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4GF376ourzQgqioN1dy5Y8srKVwvPGCBm6MjhRDuhUECbqcHj7Zxp84rXMqQhh5yz2fz3mDKqqFYnpkCjQkTEU",
  "key1": "3fPGS4aGPrFerAqDQD1cmuuuW2s3pDMSLXeQWn8pmELbNGNKuYZPwuTFKZ1UYr55ChEASjMQvY5DTsRPXofbGN2N",
  "key2": "4YxJeoW72YgQbiStvBeEy2jBrGHrqCAv2hoH5WFkSZY6emehUrxEsRQ5MSLjkKNz37hNPkH2yXdG6eSiU3YEwLhC",
  "key3": "3wX1kuhfeeBFqyKbN6M4SqxetdP8f91qtCUR9x43eEd4hpQxSPw62sG43JUmzGyX95ZsSRjRgdXueApsPqdYRHiN",
  "key4": "qz3rCJE87tft6csxA2M5rTbnY7spXxkFjHWrZrGj97YwEHkGJcQmNFidWoAJHd3awZZhgQzYDsPyC3uVKnDGQ76",
  "key5": "4PLG4yFczxshgSPSCM6xmMDb1dwSo3dB8zGKmGu9xwLMbQJWkfBgKuyUJfA61ovaocBPEBpo5HcSkcjifzfe8Gg",
  "key6": "hMJzB2x76585FNKugoQuydroK3Mp3AqJA1sitqV6sE7zR5A6DYT5twGciVoos3dDL2Huuyx8MCu5UmQi5FMT5fy",
  "key7": "48DBEaRQqYUjazUzNnWAuvT4BHfsiDiqFyNWp24bGVhkGCULx93UXH2B4apyRjrevt1SDzffBF7AP7xXFNx9FN5F",
  "key8": "38DyTxtq1ffEkuyWRDzyv5tZLbXaq5udGkmMZbMzaYvafGUSMoBcswxUyAdPe15uuFcG11PfbJwTHCM4e3rtWEze",
  "key9": "22XCxtXQg8GVWbYdtEHqLGXSUTSrWTxZJGzzT2cvyBqfexLq1uAfbPC93uTfCnsUzppehRjWoT42JNbaQTL4wMrg",
  "key10": "4hLTmC9bRzq5GDrnDUoHPGD3tspHaAtf7Jp4fpFNybcV1Vw7TwDf3mvCGiPPA2fpoBvH1CtDy5Y2HB1wt6HRSaLY",
  "key11": "3TRv3bj1RfhNjovXnR4f7xmC1XjL5v9WDhjdfTK3rRLmcRavasV2xnMLq7Xk2W413cYCHf9Bma4hWSD6Y2md541E",
  "key12": "5ZM2zzadgKVwLJMRqsL45MZnjimbGbsxYKE7SyCJexa9reXe8brYFbPi9ibSjKsz1MH39bz5vgKWxDMa7LnRMtfu",
  "key13": "4ZBnYxwtKowTjjDebbtqHrNtgRrv8aGV2tDeMoDunhgQMUjkv1CXLVM9LcLe5fSZJp51WxXBq9gN7ifEttcTa7ET",
  "key14": "2KZ6KMm9H8vSxfXvXprAsXk9ayykTwipdZC9caadbrpZzp8gKwshtG1T8MYonDvnoRUqvUQZueqnDnKk11ktGX2s",
  "key15": "2vHVy5duZLoXJkVxNkQg3qPZ6FKbNouCUpY3TyWLZHwAXs2rZ5hvqCCNd5v5FnbhuVPxz8jiYqefWNDdnUXyq7RW",
  "key16": "37R61KkNHXyV6ezY2R2ffHtTW6KcwaHVhZEotpGQ5V26sBNM2FcTK1J8gbsQtn5ykKREPLaDocy1QqSwSzeSaKu2",
  "key17": "jocEv4sT61ddx9ei38wK2oDV4tJN9mhkGSSjTKN3XRLXPTnqj7F2Hzz6BUViCGsF6ZCaboFQr4iuZiEAzQbo1P6",
  "key18": "gVAAUrgNmGFBudaqndXnb5a42pa4J1BMAv6TURPBDD4YPGKd6Hoa7EomofCbhj4yzKaBMYAsieXzFH6DEVKobCr",
  "key19": "4PbEPTLDrxJiJ85TfszDrQgGYSiX3sAAdmjLnYgTr6vD3LLtQU6u2kTuJtSCyM3fASsxVkS9zv44xxJy9aY2NTHK",
  "key20": "5NAZGj3iqQd5xXeExPyjUtaXGf3y2SYcFeEwJDtCrHaBG2HGGmTmAWiJT2wqWG6vWHSbkq9UkwY2VL6Kn9cMzoVR",
  "key21": "CwyxqN82TG54cVPpdZkxYcPjHtL1YAKPZ6Eu5WHVJ95QfuQ713fnytEC5xrvsUe891b1tck1NkJ5m6LuibE2pR2",
  "key22": "3yGL7irfAqe4Zsf8ahQv2P1J1DZygeL3C5bxqdPMQHWvroJUfvBobU1dXL5HqA5GKkra8EWHuCTeLKzfXZdGZ547",
  "key23": "4p86SjRoG6Wpxdc3k6wnnZyWJ2ULFh4JvbXknKVA8FYHdbrwAbfbcpGfxKQh1A4sGdS4gVAPvSTQi6nb2gAjDuK9",
  "key24": "V2ZMueiTNd6kamuKTZE8pkAE1uPeszKCiT19qQSLvRMFZuoQHuAXXsEDXaprACiCGXZEYZ88tdqd6HLzRFPr6Fe",
  "key25": "wDLwjW8L394VMvdvydayx8Q11gGY61gpGCR3A9VAvo832QfJiD8rpJ3GMrjGiVPUTMBPikKz5kaLH78usjqsFN4",
  "key26": "MokgXnVmdL9rTUDwESDW7s6jGWi5Bz9s26aZrri6xQeTn9zggiZ8KinEKjMJgwD2LwnbfnF8kZTun4uMKJe16sT",
  "key27": "3J9gjzXQvWNjUm39Xb6sRFy4Nu8Hzqsb857eHg8TinFzWuTYsqPcWr4N3nRW85N4PaGJc3GJzu2nypU9BYxjc96c",
  "key28": "2x9sqBZBpEx2mecCHwP2ggoWKGs19LB9GMMbMvv2QN1V7amoLg83SYwBrfLx8prbMpkqnuaUtumK9S4HvFep4XqA"
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
