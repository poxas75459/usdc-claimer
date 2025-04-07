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
    "4PNawEfDVDMDuzqErBKVBLmsDVqZQ36kUAWFEhsHvqv7fUiQyf7t3wtbsxSBwmGkRPUrPdGsdTPQPhqwNawKGXWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZzoVagNEPkbNbA8ZXnH6t9xVoSvM99cfaRv18RTo8J1QrM1yAap6qyxRK3xRgsYptVoX8k7GEtVCs7nLSWykpq",
  "key1": "3PavaBtdCWnK9nURwoYZpD6NrKZ8dJ4KaH1hSV23ZF7BYADub8NeQfNiCEYaXjWg5N56kaDQHmubHyaiSGLzS8s9",
  "key2": "3Xx5ZV93n9fVN2pRTMqPiVJBu9f5fkJRd5QWwcXwJfJFQnGT9cSoHcWryXphr7GVVUWWpwQENuSTr8JNmTHQ3fyS",
  "key3": "257F4hrDecdFgh4GVEx8FC3Te87H1PUDyKjCx59PsAbWZx6yZjYG4pNWAyPMwGQk41hrVcyucFnL6JW57riEub2X",
  "key4": "5iZ3GsE5j3DkUNjfYFZ5K2BoyUkmqPrmG17AupuRYYnJktRVRXPByWVwr183TBabANW1Ybzu78KY4it4CKeBS8fD",
  "key5": "2AMdrNZAgA2k4TbEYymB7mMxbews13YetWnnfWw4V6j1tiFdDXg5kWuTAY2VyudbNmDxGq1uxyBM344uSDyzPNye",
  "key6": "5w1awonHMyLCph6jAktxyYS1v7aPCvyaERsMDEJCQt3Xd5yuHzBABHsBPc8zy6UQmqB6HQBxAGdQ4KUDZUnqq3C2",
  "key7": "5wnPsgaWp9sKQaqrgCSsZEs8qaKfWTCzbMnvsEBZNjQfJC4oqr1JMjG1XT5pq8urUBrDkbezEmPDszZfGH5sEDhE",
  "key8": "3i3oxuEoSW1k1YqrFt3RnzM84jiR2RE1zJCzobM39rZ2rcb7X6ckF5DtXxF2LywvzMHdzc1pdwdMFidqmvDYxbdu",
  "key9": "63Lr4ofyFQW6zL4gbz8jjMoGYzRfRmUGh1FWGwPZZr1HRY4sMb6wbyN4ypcTJbMisKDhPLhUDsaLvHMXacNoJtMD",
  "key10": "5okJvmvBS9nQZYnd1n7fZY3XmF9WajMdA666Dj17GXFfyC22EcqvzpJ1AEDWQ3LWjq6chY6gAJPM9CFvdDoVtwmw",
  "key11": "2NJCc4AhKmRCM8KZmJmWcboPS6Xcse6ibEtSAMK5GCWdQnRaNsegRtKxsoukW3bnqPrEUeAaN9yevqif3MTaWvXr",
  "key12": "47HVuWsxGXiqqmaDfoVkAyWqFbDz8nEmbP9yC6LdUMfLwkwqWrDSdVSpJhzTmmZrcNGdkXZrKRy87fXjyGUbvQK6",
  "key13": "JNaf6XwTNYWhWWJBaSN6g8m55fuNu8xdDKiWTRwP7mkumDKv3uwHGtaWgQpYjFBbdbVBo1kZJnjJJe4bQcqu64N",
  "key14": "4H598R8byQhXodK4Eb4hq9sCj33gWrfaoBoHHHBMD14UU876qumHbe2EKmistJww7xKkQtA6iB4GWy9tWH288F3b",
  "key15": "4hCM9kGam72FSPLbfU2VkoMBGaV2TLrf9BQk4FkD2YkXzhrY6ExZonuPBesPZPJKAvYKoXP2bwonLT42ERbmTjvW",
  "key16": "4mfSHN9DdkDNdmkG8BaeCKH1kfcap22nRgoa8gvYzrZWNR9XeBCN96yPxJ8x9QjwSofuqN6cDey6FfpxSRE8NcBj",
  "key17": "45WeTBTE7Fc9ACoRnkboXkg2fUvgYFKPutrtss7oT2z19iDoZvgsQLUXHPznVNLQPQsqE57NxJ8AQC1HaLPNEzC8",
  "key18": "3FfTByMnHCJUFt84eDGQNFG7CvMgW4Yj9Jo9a3tkjTfvXTCPUxU6P4QQRsAY9hPS5AzWSw2EaAjfE3XbJ2HiQJLj",
  "key19": "3QoDJQwWtzjb5AMyS7BaNTD5VohRjFrJCPHFfx7VqfwaBrJRQP4qPXZVGU1Z3JwKKgPpUSkX3eVfqc8VjHCBwctf",
  "key20": "3jjT5W7R3i7rNPz3oymNUdX5UFEU2RYL4979ezypxmQbwGNLdWzpyMWPmv294D3YBRmh3oPWnAcZfSBmELTq8yLz",
  "key21": "39tvWuR972m4DukVSmmU7PTxeVVUCNfX8YY7sW7gaDJqvdQ7mNNNxZ5VJpPB2etkc3xX8wDFKyvudbtKNsaagrUt",
  "key22": "3idvAgSKfvEWGuTshNNiqcpLu21LyDDTZFwtoMM14xGHRfjADFdPD6e8jipKNYYKbV8PbcBro6QMZfpHjrXy7Nb9",
  "key23": "2VqBv6U2DSFFJAkjAKfFrekU389KNjDKPGkwUWX8g6Yqz4WAWeVnr2NJjtYMEKU4MoK2hbigQm84N2E7iZeh9sqK",
  "key24": "33XTU4FmLoLf3xGdm8Y6LUJPCm5Kff9Rc5joeqrfdQT39fDtr4nZFpLhepTxrQMcePzX4yXo9zygkvskKjQo8nGq"
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
