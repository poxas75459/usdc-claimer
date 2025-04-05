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
    "5pgVki3Lmuc56wEh6zyT1vPkBZYDj1GnCMGS9vQkk2FrzM944sg3do1bHEpHbo7CbF4JN6tv6Q7UzoEtaCMULNvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcp2XiLV4QHgR3KgwfnYSAWUfTiPvu1pYTWLuLNTAABuRK5sLbzEgHWgFErWC6ugQus8uxWphKceewpTmEeRHFT",
  "key1": "3E13bQZQUogPmLooBd1RbNCTkXCXppDdqw14db9R2UCCvm5dUEhc6R4p545UBsCWorvKc5Kh6Hi9BCCkBnCRgBau",
  "key2": "N2nz2JKNRWZmHqyp78UxxDuP5gd4Znrnv8hspwTiTrmFkLsb9niqK3zyqrybraDnaY8FigeSuybhunPeps6TUEJ",
  "key3": "2yM1Tsbd9i29Lt7WjtGVkmLUvtmA9dduGdLi1rDsB9vcQQMtQN3ZgqkAyvypvtnu7EE1F9YA5RP5FUcEpbmv4TQt",
  "key4": "5Cmvits5q95yVkKVF1saQLU1hZeytJ5WNfSna7ZLGDdLpACYFYTreDwZNWABN6yDaBDdu2rNWaXpL9ch8zmUy626",
  "key5": "4YGD7yLAvhvLe1Qb4HvuWw8GUzH5U13gv4teAkWfjua4YQcCPpqqmxodBGCFbSUXjyrwsqS1rYG1eNA9Anu58JWr",
  "key6": "5gCsyqQMp1aCwMGfn2qxGJicwfydd6TeCjSp9fJdTDzcEnQVeKJGL5M6D3cCtSWBSF2QiDUfXJgWG6Npbj2BktMb",
  "key7": "sFF74N6zJNhwdA7xunAYkyNuENAWBMyAajY9fqZxkEsJ7mTLvL6UXphdjT3hDTFKjDazgaxtNzTDRrEHkSHLnKL",
  "key8": "3JRpKcGrUs62dvzEsWDKXfcAqVE3Wmwy3wwuK8w1A4fXzkHd7uKa2oZE42E8PjvYeLeDBAmbEBsRJS4RmpinBuj3",
  "key9": "4Fgco7ge6ScBdcMSZiigmgYQCc8uEkeumaBzX8TXjjuQBq89uCbQXvbM7ZBxsHhAPbXj8c9QKc98zmRjbKNGGbMe",
  "key10": "3zZD4VfS1TqX9RCf9RWRL23NNdP8kqAQbHykcTDgq6oWUaCj3dwpwxJznteedwsWKAi9YobyakYgfxEDKmRfxEJz",
  "key11": "5fEwZ845xxeBSqBfWJeQWGnKw3Vc7xTXr6MRMgUqBeNvQ2pnHWsaogszw92wxcXmuqCorrNRtAdWDzzwjH3N5Aet",
  "key12": "2HxBqxvHvbfcRBYGJxPHpR4rb69YubgFWmZDw134cuAQ9t3tLs3J4j6pVZuqoRV58D1uqpmjgja77N7jCcJTBojf",
  "key13": "4UCYSw6884NoZMfLENCsRSGEPorHtSeAVzNMcXVedT99jRpTR7HNp9xXVoEUrzuPBfrALLEJ1wzUmcWnASCVCRrC",
  "key14": "4sicBvCHj7mduDsa5dLXhdktWa7ENpAn6jvXAtB963YdcMXs7pHZzZ4Xon8dcaC184bsT8HJ2gwCg9XLHhAAPh36",
  "key15": "3PpuhLXtfiAR3ahpTkuv1CS2HipHraSjMMYjW8osUVj4bD6H2umUdehWHTrjJXQg6sFhoTq6e4Z6jwsqNPDSmspU",
  "key16": "gLCchVFdAKpjVK8pctvZ6WZP8nyoUTSt6XSw9wEv1ac1ZyqHPBZAq24XVPbSmb7kty4m5s7bRmgZc6UKweVrGvY",
  "key17": "5SjSEPZvpDhfsdceL9Wdvg6VKSUjEd4puMoUbqDy3BW4Mhqa2adx6XGiBZrQNobp7eJqnMMUUhSNAgKXNY8Ukjd5",
  "key18": "2WtFkBLcKPBzyBm4eaz5VN8jMmFe3mDGV8u865mGHsP4e7Zs1TrAxAhCsmz8NoLNErCKHW6YzS5QGuBAk3GPwesc",
  "key19": "3qNzrkEmYdXoZxwdoUhpUEMPcyzX8kSg4ucTooC3Fssez9yj8xRzqX9t4AtFEHgcsfUgMf11WLdFdUThWMLJLtf6",
  "key20": "5RocsnxHAHCCs9EbXyhfiHGZ5Ag6TwZPwEQtbEcUBYupULCmtKod7Ppg496pQwAMztrUxBHmK9YCYUfRJncWgyJW",
  "key21": "3g31P7apMnpPQB2cMm4u6kednDj9a8HgEUQu78VEj4kreTpDB63JKAFYyjt33NA9Ff7cTkNGHyyK655M4GDRiBXg",
  "key22": "32kAsyamFkTT7mAoVuccZ87YRQGSx2VZQ8E3ZVUMXZFRiFVj9Ch8zTxbaMq8DMCwStz1Gu2H5Xu6nZmGJZinexsK",
  "key23": "3AkBuv3TztTr218kNMR1pFkzZbWVEWu48KcWvyiDfEdAizo7cQ4d9Y3fkB6pLBPubWfiWbed9McgUG4sFd6Yo5Jm",
  "key24": "FzstTnLuyqkPN1cXKoZt3fW9xrbqfwU5mgLZZwNU5nBuHxqopqADfsvQwo4KBDbxExX7bbtH3m9iWU6SfbpeQww",
  "key25": "43nR4usyRqpUH4K8z4A41LJTvJhkWhMKwcmdvSvmRyGUfxHJ5KQgheX8gsYeQo6Ntu3RJboyxwGxkDvhCcJu7yKd",
  "key26": "5QzbwHnV1VNYi8AsZgLYv38NwLNHrgQxBP229ESgSXpMnpGHhr84iFxWtyPUnbTw86VgirQmMNmem3BWELbK4PYc"
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
