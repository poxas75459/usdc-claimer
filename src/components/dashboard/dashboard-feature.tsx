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
    "2WRHRfnuDWg1xLCXX1X1QdG3pZy95DzBKASYEjJqGYuReFFPedR6LAzUj3LDDMEshPJP3gPtQ4B2rNN9RSQ7xgb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZb3rz9AFwUAquc12ACcDBUEaPBut6MfXS94murKXsqVxDgXn4BqwAdfb8GCzevZyc4pRqRWh4aaEmVAJmUGG7Y",
  "key1": "5Mcr2y4D5uHwe9S8QmE3RxFLvgc7RjqQk4pqqVPdQgToN3Ao8uakyN3TRYKx4QiPbffaAxBaKRkVx3zojZjcKdFp",
  "key2": "53WMymWwUv9U4icQPnwkoPCGU4n4TxC6htpqxFx8EZQc6H3joKnVcVYQXeYnDuvr1KBwogMgBmhZeBrLaVtJUe3h",
  "key3": "5s7FPhAkfpVoQ5Mdux3tFALC2sreW5vcttXwA58UoxhMD5b4y7uvn6iw4vxnmLWvR89dy2S2GzrftgTaK7vsvjYh",
  "key4": "4UK5595NMoKEvRij9QJjEEFbHZmeRDmqtvfYKMCJjTUA6Vf4EJxTz3uEzddu2FqiSv6cixAajnH2rXCSNGmPMmnJ",
  "key5": "5egAKQU9GdWXgD4uL29Pbvy5poTsmmQqJ6QLQN2PLEzHjUHYAYDS2ANLREP5coQRXHXuD8NsUHZW55snBRLy5stt",
  "key6": "2Gcnd2VDESSvsP343Lfiq5U8DRgEdV7SkhHhu9S9uiqQNM64Ck3ARYLnKH8o59nLJ2oryXNbXQv1TtwqzbZjvQ18",
  "key7": "5nsSN1RDsAAgCe8ompmFMEYhXT6t36UfKzG66GGZyznLx9SRiFZSn6UGHNMeGAfQaUve4d9cDrkDptfWNKANbmqa",
  "key8": "2t6hKcTnUYwfLfamuFrLSZe66jJKJ5D56r5TsrXcB4KSZGcCu8DV33iFRcRzmpYqwEkJ6ZPG5KLfv84T4eaH5g3N",
  "key9": "3WKsXL1VEwxTzKN54xazCuEBbU9STcyo9hQ2Qyjo6fCMHurYCRr52TjccQwE25iAwPfDycfFfY8sp25Vm4RPrbLf",
  "key10": "4MR7hjWYV7ZhGZZttaBQozGRspNVdEjEojRyhbktezsnzV52Ywr6tv5ZvzeCevkDHyNFWCgqM5L1pKWvbuTCkQHQ",
  "key11": "4cMeg8vYwYDjj7b6DXmzEtu3RfYmpUTrDas2mKTw3Gg6nLms7rcFprNBRTF8UErFTkieCnGZ2bddNs9DNLKyf3YT",
  "key12": "mTL8c7ASVDV8XBve9iJv2Q7R5h2xCafB4dUwjrdwK3kxfdKQSjmLFz72BXdgxJmRBQ3GpRyKcp9nfCxiW2zWVnn",
  "key13": "2EW1jjWQzH7vGnDShxsgi1M5E8mTPxaLt8XgsneuAnGiSJ4hDAhn61mmsBfJ2vLMoaDd3XPhceNGBLMBqp3QAJmj",
  "key14": "CVBmBPDPSg9BgNy4dDaq4qfVntLhFTKzNX64V1Y2MXkNk2j7DiYWZ82AjgFtLPuQYQmC3nvYHwggzr6TovuUwKy",
  "key15": "3DDaq3z4rvJTBiJ2mm27Xso9D24KD2nd195ymvzBGPM2JwyWPh4creqKvCx6KNNyi5Bepp8Zpr3ojVug4eXLXczg",
  "key16": "3ZnfvS6gtZCVRYqHcJmHtDEeywepKwrGvTNkBRVDLXw7rPhAY1HXsZz5v1mz7rP4WnrJZYKBmg5DdYpKpFCriESj",
  "key17": "2hFdLtGv5cPdXHtSFNrRTsrUEtva8YmAKtLeKCEeXZwcKnG8EjjPkgbT4nrfd8ZnyecrhD3Hwi1jn7GAmk6dFG7X",
  "key18": "29CXG542t9S9sZYekGcbwoc9N9phtKqmQSQmkThHr9kY2YP59Et4bURctwHFoqmp1C7vUduSS8hm7DPWDkcjdg6e",
  "key19": "3Lq7VTNmzVcSm3iy9ni7jwYFaNJWbGi9X6Jvs77je7jiicAcBmsG4AKrqpVgQm5DDM3WN91Cwg8tW92B5imi89PC",
  "key20": "5uKNuag4WcgoV2au3oVkZGoyDsxyHShr3MuGvKEK3SmopGqFdWNiHyfkCbPB536ZeGamB2xPS2yotNwFfwYDXZmj",
  "key21": "2dxA131zsQeTEkswHqHnUuBz3Rdt7eExN4CJXvccPUCH8bEFBvoHqZNWb2W5Lq5SMUdBnWGETmyXHjdj5taucepo",
  "key22": "37jugCPewVQCVmgeKYaZpKsnCMgpZSBfYaJBLyd4m5nrjSdSBSCK2h4AR99u3zY58TaSVPCeLCqoKURwQoyMeU5d",
  "key23": "3YDQsTYWqVDcCHpbKccJ9xUKmvmKiqj9bnykK5YufY9o8x4NyPXaJdu5Yuot8ruGkSGS47Cd2KexsghNAuMykhyS",
  "key24": "3XAxAzRJcMPpfEV7CDwdTPbYeey92PSW43GJYRHdnbefkt6H9qGZXiuufpFqW5Jn53dYCGg6Dz2rKdiULq4wWZuT",
  "key25": "4xEde2wWVZAREUBXyG3bZbooeosChreM5cvBaSf9qQSTLxKbN1sES6CLpLyNQh634HeWJEUipqzNX5k6hGwZvuHb",
  "key26": "o8LFfmxWrN2hnwuRrRsmZT46YHB81L8z58pS37XfVWRgFMSveihKL1Wbb4WnZ98JiHY5dpVNWw4Z3YNqTeAi7Vh",
  "key27": "3pvo5QoqJLNSYhGbFJDB7YVLGWMoikjxeuRjSSFjg4wuXUrLs3x1Ljz97Z6L6MFDrJc9Qem8jrdXBWtjNm9Raxr8",
  "key28": "cEJxQuwihVx7b2hxV6cYwCS2F6JRzwGTCTL7L2HuJ1tiVPtAhQScuQVCNUmqK9E1s9UsPfdyEP2Ua9ED8p5HqzT",
  "key29": "2L3rhtWk4L8U2FJGpD2wGzzSBikywaXeYhw8uUbQwXJAm5HgBWSoLmz8URjyaSgbJf6ceaCGZ2jWuT5mqe2wrUKY"
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
