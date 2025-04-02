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
    "4fZZHF5KWSwenbTZynbcjZvghPvJLZhzdbQ7Q4WCssCYjG9Ts52bJVb96uVv5WFZxrJA2vDSxarmEpsgYDCd7XX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296BYLSTHPTG3sWZvUnn2dBchrM1d9AGavWoHFu5ge5vLCVb3EtVrF3mHVS6JR1sGNwSB8HuUKQP6nKDj8aWn8Ta",
  "key1": "35o34d2msieUvZHMStioqDTpdjJzbXWfKyHdz6ToxEVFTC2uoCX6EQRiL5A88cQWwdCdNDqHqstuTFYKa9XPFnPi",
  "key2": "2H3Kcs7khrpGXwPdiGKjyefjciUPfANScE6nfXR6TeVYc77bthVVQgqMc2VtybZ79sarGTWemzixPkEJAyiQtqR5",
  "key3": "4nPbzE8vZDJGraEcbhXwkrjT1g5xfoYNZm1yAJ7n6kJCNwbeaSLHDQ9QjB6rA3EFu4brTXSdkxLLaaETgC73NbFn",
  "key4": "2hnReydP1sJtWskABxdzYWt7gPJr73ChgYCv8tJkR2Bq8QfJqeMevxPbnSjqSAMZxyK1Tcnd4VbbKoaqWo6VduC8",
  "key5": "449C3oh8LfLQ1gtUaWPKd5Gqik1bx8VwyTqLJhEFTc6cLpyDkWgzkbLuruUqTP3amN1K6NH9ye6T9yK936GbsTXF",
  "key6": "Gg5WaU7p3Wm8EZ1oZX5PPF7EwZyV4T8VWQ47xbtrBj8sdxjAJNE6Cv9Wm3xKQwYfZBrFW6YzFjnuhhJXcC14NKV",
  "key7": "5d55wZpVDg3hgzLpx25QS48Sr58AQJt5VVUscBAj9NtXv8GtUbeVoWfsMAzwaC7UTi3tXendkeZCwjipahWm4g8Q",
  "key8": "4qPyhf2o7dFahcx8Zcct8L5FGSJ5JL2MTckbYrjjGLqW9pvQC32GmAYXNQpJLm3am3jqz6TaYgSckp6SooXxp2yS",
  "key9": "2k2SSpF9bAmQwokjWmNNuScMzyKS6s2ptVM3qSn1GYQJKYfARAEsaRXKJ9uGVbKHzUc5eDRHG3RP7rCZS4SvUa9m",
  "key10": "5Me6rDnyXquQv1imZaH1XfCim5Pjun8eBBcsbo48RwKrgUDZRTzMqgoi8ahcHtDTQ8R1hecjY9jn1b4WJd1VqgB7",
  "key11": "5CmjbDTHyU2Lwgcb6UBizTT6X2Z1peZUt74bHes9afH1GZXXtFQwdiCXBYwcoVt5TneFUhfuvKTwfxhN22BKFyEu",
  "key12": "5vB1GeC5EpfsFnc4TTecUe2s4miEb3jf2JfJRpFr8UFnUtSDsTKc52EEy5Fu7ZJe5E9cSUwtHhQ6LERj4zZtcFzt",
  "key13": "2FSAxMD7ZUX41JnKEmEFDz3avj16YXiVjWvrUsjfAC96J3dnFEkRV9csQf8YvFndiV9PBEXKv8mauaDDSBWaYmDa",
  "key14": "xcL524ZF4BZpiU4yLtMZ4BXZQePQJBMF7bEckKWoieXEnMNKzguUUzZChXfHPJHV26zkLjvMrL4FhVJ222gsjF7",
  "key15": "5BhUYsxfJiYYsffCxNLNhaXKHnKibe1m2LU6zWaZULRCyaPGubyaQkSryn7WzwKqRVX8ppvoWe69m5wcEtEp3R3x",
  "key16": "63hZzc9kk3BK38wT6heLVHwZR4wk2eDqB4uBSyytRjiHWpL1YHJZFBw7M3aKzLukFWBMaWrBNBatzNcpgtz8Radq",
  "key17": "4VDwJg21ZU9Uc3yaoCvEBuQEymtNVnyT99Uvjgbno8gzfnxWFxLpJV9MzjEkTvJuYZBM1JRd4Hzn7QFqe8WmCz59",
  "key18": "544esoKtwmPxetXgGABrTqyAxR8xD6LawHeQXjuaFxbHpjECfCjkxLrNBGndBMMM4KGdehixb8qkbCUpr9E23WS4",
  "key19": "pgwxVAeVLr217M2fknBdsSAPA8wjqcosH74XmRms9yJJ73HyhvjwRSumNBRuhh9eAiyvobVmJ47X5qr9p3A5YRr",
  "key20": "28iBoUM1aymUbuVXeMSd4wxEezZfq7r6d5rkmRmkb8BTki715NmPqEDP5T5oXvMLGYjS6mfkJ3a684GM1igiFMio",
  "key21": "3azvPKGPweg6yWZBUNj1XSNgcKE25AfLFY1Vwrs76Cky5KK6nKy2TFe4k12Zs36p9TJ2zTuceFDCJ2RPiqMdviij",
  "key22": "4EeKTArCWDbsumZdhVFsmsaSPCqSjZZk1dL2wobgtbq1aWCGCV39SuXHgkE7T72fS437MqfLZPHRLcHxotM1Y1RD",
  "key23": "3VZ9etXSDgNfQFq7jUBC72PctHeCb7qxE31cPzpgoKW7P5B5vUB79MwNvTQ8ZnrHigQvSXKGkU3xfYWfnpgm3fXb",
  "key24": "54puasLsRHDn3kj4DNCQVh8fG7Ypn3bo4rU9Uzwv2aNr39CCZJbr1kzW4CW1nCQCwsdhwmXrU52czPHrrzkyRo6x",
  "key25": "3yBHuXgkP7McCDfzjjBH6SZs3Hmzb3wMbTAvHTA8UZeMpQiQvgog3GfUBAzgk8zPFavSkFpA9EaWpKTPWN5aCKBk"
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
