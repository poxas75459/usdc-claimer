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
    "2MsJZXzkXHdvhrm8Uw7PXpx5Mmx5VhnBoGc9NEwxJFzDPFjZ19WLmeSBXWKm1ZvAD7z4MqvPjYqiynKvDTcT7nLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5uyhDuEUFumVxNLaTee5koiif2rD5m7a675uFdFdYhdLZHUSzcVZeyVbSWHenuQZQvtPVngVKAzVeQ27SBzQvs",
  "key1": "NQ9Ck46bAdXXAG4fZZHJBuDQZpWjSSACcVzBtwPynTrmAjdffYRGa8HE7yejrcocTXPZhnk6h46fVUU7XRuYzsc",
  "key2": "5rzGVgkf7F6FrHyQUxf2wcDUr45t4VnqBn8KoJfXUxLTuJTQErpJ34JwBRztGH7JBg7SmxbG7ngBVjvv8j3e7o5m",
  "key3": "45oEQHZvVGkPUZvGLbpt1J6F8fEWhrVMFwh3FKubHesiujxBcSm648Kwn3CxpM8uULiB1ZkHQsmxd7geLAcWczmv",
  "key4": "cVoaVZUdUhebqDyp7MrZTtJ9PhycahexNcGiusg8Q6JY6eQrBWzhw4QBPJttDAG7LHifWcobRBSv9W6hohqeYmW",
  "key5": "BueihqPHcfDDK5LjtvaQf6wxD15JJGnuSZS9uXJVmcNhGxNc6tWQaTV5pVwKsMC9SGdbXtgHhH8j6ksJ5Fx8eeP",
  "key6": "zJ6bPCqoC7RrMPQDZSM2ridjkUVfDVgpSBc9Pf35dRb1Yb6STXap3sxSPe2qKHsdU1BbYbsmoXWBWLBhatNPTD9",
  "key7": "5QiSy8WhAyJ26QJusEqebVQ1PkB4uJAY1PcWy441LuFi9FwjLyCP5CafB1RoZiPX2wh18LDAhVxa3xPXBk9EcVjh",
  "key8": "4Sonp5J9LnwvM1q6nTz3szv3KRcJTVWscRNZL2Wdt8Ujiqdc94D1VRLjUn8q99dUaTqvLE52cNo5TXTZr6xwHxts",
  "key9": "4V4FouykCLVtrNEBS1RjVoEjPTdV6M7WBDKYUGe7HDyrMq5M1RPyy1mKjNbpZCGtnY9YzrdMgWNGRvik1zvtsc3",
  "key10": "21QAdz5s9EHAbtmj3ZM8A8XxMBXdJfd21d27MvH2hfF6Gg8vibPAHUMVQmG4bB28rmMgNmj2XfCmUQQEZ2Z1ahuo",
  "key11": "3Z49uQCDrgroGwNoRZ4WktFzWq3SfWBUVV12S57AssbV43iS7uef8Ds6UqKo7j1NmciG67ChQjwLqVoS81XfPcba",
  "key12": "4d5U4p3qCxnPMpRUV2GKgMPe9WaCXpkM5K1aV7jndTk7k4ioYggpey8HhF5BnkNrYVezuPowcpyhxbQU2by2a9Tb",
  "key13": "42ZSwhwJFYfkoYF7ECaMnDjDSU7xUiYYdaGmrVAE7AR2NVsTp3nBeCCMCC8Gs7x9auhxUuZuMb8DgxrTqQR6uJBE",
  "key14": "3E3y5BWqjLECdqNYLDJJWnRaWN3KZiYZ5DfDYCJ9mPEApBXVb9MDiXdsJqm92cUNLzvASC7Xakp21BmNggJcFZC6",
  "key15": "3rqCrvXJajwi4RoxGLWLAXZpsogVADecXUpXjvfJzXihwTK1xM3s42uKSsB1h6ryjD3QAiurYVYA3CzFNWUrez7d",
  "key16": "63xJiDptfUhbrJ7ZEgQ9KKEegexyLNPkCGRnZAUTvmMSAtZEAmB4YCNSqyGictGTcyT5nuKp7NiEazFZocjgcfj8",
  "key17": "5nFBJkXLg28u5NWw41kCSaJy5Nb7Qze1oujmBi8khqnHkGuxJYEkJSn8eNGuYS5C6BDo73VBaezLbfSeLP4VCzSU",
  "key18": "5XZKrwzwwSwuWgtCNr443sJLbnSNe8P2H8tQE1nnVZePaJrMp5Z5x9yAEhRwmP2TXW6K95HGvvMRVZecpR7NmFqN",
  "key19": "4xmi3xNgoH1oQ8yXWntuaAkuER1J7WswrFrPwQvntmDDzk7Uua9n5ZgJrKEcFpU8g69FGs4x7DZAKfm5x5HKMHxR",
  "key20": "2zaWPno5Dxbx56c2rteyY9C6BY3KgNfUHnJNRfcvdec4pXdbK8Fo6ZXfyuSBGeRJ7oRthCbXaRYpyJUbXDWVEBSk",
  "key21": "5QkradtLfcNyUWSccaxW27ZkAt5pRo238tWsT7XU7kLL133Zt8eqCkLeRNHLMafHWU9UqU4HyZzAEUQgqKS3Lu3L",
  "key22": "2MyuHwqJ5jMRPKwoGSSGp8mVrnDMoc8gEaQUHmmdMAzNKPADGZ43JgyUyz2UCFeU7VHfNwyMhexN2EfanyegiwGs",
  "key23": "PEYBokHyWiwoGWRm2VZCWX6sEMNZiWYD2NBs4rxsUZ1LwBH7huZotbifYFv9cogDNvYcnMPZ6ArQWCCc14Y9hju",
  "key24": "2d7rYuQoSF3J1YgzGMpiNuj2jc2R4r1r15F1UAREhtUdRybWk9XsofavTgYjU8Chkowxokmx3vXYSien2nszwyWg",
  "key25": "5uPhGk4EFEZywZvgDdaeSsWNNsGVBT4pwavFs5tnZ3jUVEXJDqGSnBztdQop234WiohBGk5j5rBAAE76JhexGYX2",
  "key26": "qXFy7S8XaHDba1juTiHtRTsUQZ8ogGwGDjGrSDaCK84362USAivwv647Ey44nX5uMRL7Bbwwds1vSE1524xmLLT",
  "key27": "wfC8p6QXQtcN463NLeufwAyC4W2rjevFrF7ZmTV7rb473SJHPhHqM4puYu65BdpSJcKBNcbgqQnRp2YXNnVBFgN",
  "key28": "33tdfnUWy8cMZavAKpQkFVadQ4WEb5ubnhrYRNKePwQSerUKLaxHJtfdYchYwMbyatByTkw8JEqJxTmd1UucJHR5",
  "key29": "2aYxDAX1gNaNb6EvUdjpZRmWTZKuyz9TdDQ946V3PPCCtiQicMEbgmhjKvKdPsLyb7RMTMD7jsz1SDYQ9fimcjks",
  "key30": "4KCHTJh7CkXDM9y4Z31qbVnupytmN53q8mkeXgi2A7TDCQoq2zvPNYxC7YGYRa5nCS2EsctpXXiD113KsA2cedYm",
  "key31": "31eJbYKbVMB9MtC5usqh7prn6cmCxJDHn2cvyWhqFK69ZuYghDGBUGgVGnKBadBLz7oUXk49QySGGxRe4VXbvavP",
  "key32": "5j6YjT9vMHdngVewWqTEjQ83UfibCGnoMYkXJjc8spyfJYw1duVkTb9xiU7JE7Se4wkFqFxVhrK7oXbeYGZ4iHhi",
  "key33": "4ShGX9jzd9CZebtwGPQz5aeT84jZ4xW4DK1BZ3ksDdhacfHAqVCAcYZZzJiXqf7mRtNcgRSbYAJyvC5PFSP6fVsK",
  "key34": "4pS6VujA9WsBtxtALJL6RUa6goNSrgFdmhUowboAUNdVUEqwzc6BF5fexXU34Cxmoa5pFUJJ6BKNPFS8smstcdys",
  "key35": "26fUJ36MqrNSQVSbywFUKYggJ5yyKgNFFVsnVDUsXHTCA1Bod5mm2jXzWVgzrkYZwY9JuSP3y15hzeHrU4BtrnnG",
  "key36": "4YRwSRXFXRa2VJveSi6bmwGmy7HucRyMipB7wqnqUZhM4T3mPiXeFDH8XbMT3mVToetyRBoFqjfMAkG7yyfr3omq",
  "key37": "29oXxrN8E1JFTpcA4YzSRcpsV2QuUJYPtSHtJ8JQVeLsJvPRamtNw7rNoRYQ7BinAjKeiPDF7AQnimRuWJLy4BUo",
  "key38": "3jd34NVUDRMyxkDbioAGx1Cy621JsTRAjnm4wpXZk3zJXZ5Tmi4Ea9fAtjcA7FncPTT6hpKgdHxxnRrcuwdUxLSQ",
  "key39": "647QPzMcukA1NtPsg4py44DAZYVGc2WUJUDrTeiX3pqqDJ2t8tzMW3vJb6x5wJXFe3XCnHSstb8uamPrmvkcy6fq",
  "key40": "2o4zHBCdo3XsDE5jAN2tMcQpMTC2nauHY9j3HArbGCmZYP66y6boEyiFmupErNz9bqkEE9AjZcKubcMiRw7KK9eT"
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
