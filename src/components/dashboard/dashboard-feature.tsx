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
    "472crzNobeWYv1QZYAGZXsXDh36XWSrz3fakFwfdeubijwk4Ud2ZvFReCZmbsRZKVdrZabDHkbD1Zwe3FaiFgJZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8extgsDbrmZUhyvoVmSfjtQGtYK7sUPJykbifN6eqZGQboaRoVYuvVmXwVCkdQRtqjTc5HaogEx99gkgKiteHM",
  "key1": "5JCMGdeLQQa963dd3sVm2RqXYyj1ZE5NdFDr2iWgrC5Vk6iCHtkSCyrckEabNyMV4BvJZTeFZymc9z93GiR83mPm",
  "key2": "29vgSxHaZczKtnXZyZq2ijdoPQkF2rNuSDr2oSWwpEZG2rX658LKGna6TGpdDqRBdhPD8iWV2UkUGuR9ZcTsmSTK",
  "key3": "4ed7Yx7KyCgyCqJmXMEu9DMTDptKZxdmKi5Xz1KLJUeHLrGR7a5kcNWtJ3x9PaczPdWy3Gn3LUfiCLeib8Rej4VK",
  "key4": "61baerzFyX53frXFfoeLvT1TYNnLrRYZuDroJbXmPUXC7epRceVbfgFzF9HkmwQuWi4f7mP2iyd3RFHX2Cs6dGfB",
  "key5": "4htxkSBjUz8N49kNC9iEuyc17rgqM73A4NNAUzqE89op3k6jqYDANWbNSL8ZKboRXqcEciUqZLdFCq7VarbR283R",
  "key6": "54A1fzjabfczmCeHhUZ8uXmHyV2YF1VJHBcevBRQxRneJtg6hvZ7qxpNkvJ9fiNe3YfftY9aRZhXQ5LyjBHj6826",
  "key7": "5oBevuwxmJrQ85x4FNbJBWP29cY1Tj9c9nirxG2sWNCpb5N1pfUMU25a7hnXCYWfg57Cx1cvUame74W4XEVp4vZu",
  "key8": "4qjKYBcD3uTTTj9NNZuN1gDHeoFfGgYTZRB2A8bASAwTpEjMp6GDM4njiQY6Bp4h6gCcW6VwWtBXUYGSi5CkESh2",
  "key9": "4tK4XV3jp1nWneFGVDpZBJasuCTuzT1BCa9zy1bHGcfUvf5yXdPJHR6oKveuYmSronYkS1oVHbRuARRDiqF2u17L",
  "key10": "N4Q1eTbCGcZoUcDmXajzLcpu73A5FsQeeFH9MkH6XojEePPUtBkBLFH1qjR9eiDb9Mz9dYAWZDgCjsvxHGkSxWf",
  "key11": "35Gj1ujX5V1vDhLdVoj3YunLnwNcmovzqJjQdaLZJnxcANyirQ2Lb8TCgvWU9y6vDFHPtm5LVgnimzarNFbgTB4S",
  "key12": "3KfeRQ1byXeYE7LMWdJRBWYwm8Y9Z2yjSdz3Y9soBx3UCscRxAcz6gYvtZ1HQvCGPDQQrogJdPLaWm9yrM1V13En",
  "key13": "4vnucDecVYm2ExmCwuBxKgy55pt3JNcBPYusBTDBiS3eCwYtdnbyaXbXTouXsrFckVcQYm1gEHEQWkDAZcrsMqf6",
  "key14": "2iqoBx6H7JQKXTevp6rNJA59oKxNya511AvUySh9WmkJ6QRj4YgQXyJrxifsmzfjoi44VvPvHHhXwMokFWfKhboV",
  "key15": "4tu83kv4mXcVNgTrAVqRvM2khB1mt46PJHsdk66TTPAWArXfPLnQXpgvEKjkVbDrgeuy3YY1RNUpibgSVq1DPM7s",
  "key16": "62Ryh2qDXmHjRqHmbWk1k9Jn1BPWRH765ya74PiSCFDa9wWDJfXmz6ZS15ecy5qNqq33D1on5XB4shyjGEXNw3mg",
  "key17": "9syxgLiNaJVR4wK1xfLqCYnTbberBMHDM8PF2n5wTgKgHwe2pr5BHsso6NbJ1YwemHvgL3HWkxiXY5tAhoCszpP",
  "key18": "4DD1JTyHdM9ePtJ9esNbwTfvu51sNP1WNGf6vvegi4dwiYTxezqpGd4cDE9rZLdY7x1xsGLXmPauFBkrhkTgtjnK",
  "key19": "2FxLvsYYTMAwDNen6b7WMS8J4ZMhe5SUA6gduSRzTD4H1sAeTAXJoHeFVqX1qnj146tpuemLAiFMDBUzH1EBMwqU",
  "key20": "2BKJWJfqiSBp14ddobnQ8VAKxiFWPnS9f1jCoYXr9Y9EwDRryQxYoyqjHy6AAN1nFzNrCFiFFK279j4yPoaVhT4K",
  "key21": "LJuLL4ArgJAGwYUe797Zpz6TE4TsZ3hJiEyznxvnFwWeRutqt4CtTg6uVvB3NhcU6mnL4XGzEqaFZ68jcdpzMLz",
  "key22": "2WDyTxew5ai5cma68LqZbUc7LLgcJtrqVvarPqzbMv8z9hzRwfYCg1KmMowV8R2CJ6AbMhy5o7vrTzVKSGp2UpmR",
  "key23": "5SLX4bZkRCWGeWbW9NDB4nsnzpxXzhVj5moUF1uHZyMcXuMuyuTcqL8ksyJhGJ5C5aS9NpdGjMhnvxLxEUGunkna",
  "key24": "2pCMjUoKBtYkWXdiPEVqC3pCej24pRyzxJNtuobQ3qESzc8zmUaz8pAaMEBusfNFDF5JAbTHk9TnDJrbQVYoWge6",
  "key25": "3napyYHLkfUpe2zDgJfMbwrgUWVTc8NDwpw2GuQf46TvgiXB512sj4NbEu4mJNZupUYs323MKpFZJVHkZpXvEcQ9",
  "key26": "3w83GALaMjLigJ49UUdmqvS8SBe71nUfFGQ9LV4DqUkDD8JzF3UcSRYtsjVxt8eMuk6vauyM48z6fWDKtSsn1dmv",
  "key27": "4VsnzAkwGjzRcWC8743Q2fuenJmgs5YF8FKAydtqRUHDSrWK7bTMra16GrAer8hGgevhjVnxxWyKMuCuxpRcmJc9"
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
