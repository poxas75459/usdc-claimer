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
    "4CDQqjuKTJMCQ6EsBDN9ckAPhR1ApDS8x1Q3F1o4AFNDYLUARBesiXER2P7H6xGM7YC3xyD5tYY9SNy8S9WbvMhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRAhmptUWQXt461FcUnLmHZaEacFV5zBt1skf4MxetpP38r8oLVyVf96ZVU9VJGDnB56a7qM3x7bpanoRWm4FWF",
  "key1": "4oEW8uGPW4yQZKDxEPtqiYpjVDYhYBfWKH6RCPzThEa4V9axFesGxcSZKn6B4xE17XB45bjeLD3BZTufNPn8r1LA",
  "key2": "4jm16jiNskMkqChVhhsDNnxRd6dc1wA7URNFkqu6brrr7s5qs55eAzM25cCwwy6pofpudfsCQmxs1VRNCvTEJSfA",
  "key3": "3D9X22nA1LRDMqJ74pyBCDv3UUxTS5FS96RbFQr93VhQ7VdL8RkPMPQkWZv3qXqbTXjLA7J4or3m61KdQPPvFNsD",
  "key4": "4NZDk53132DJzCqk9iQLZ7hWQ7k5YTNK3JfygXn2R1pV28tg2QVicY79dTx6fTn8hr4aPPRJ5gTmjx3UcG6yuMUX",
  "key5": "3QjCj3QWf4RKkhifWLcXpJWCS1wSNTEPv6tcFvjU4usC6BBLT2NoJzhyPQ1grVpRyRoZv76ZiZvQ7gNMaC5v5Yn1",
  "key6": "4hq5kxPyBdqm6AHWCmmzxQCQC4eGk6FR2i4NFPrgjYu4VUgHTRgdBv364ghtdmLBstNdkNLncmj73ku9Jha4mkg7",
  "key7": "4yL2iGu4Xda34G3rHg59qnaXUB9ZL9WygPirxYKiDTDF2QHhiYQkri3ePs4AhmSNA5qSTznf1EV3FdCp6fUVedxa",
  "key8": "5aAg9SaJtBGeWTnVvxUhaVjHzCmovgyqs6Vom55hDB8Arj8WL3j9rqPhnwJSx9N4zoL3N6H16RTE9AWryinfgCY8",
  "key9": "4HCZZyJZNMVyZto88s9HZyZa6R7AQcFmWmfs1WAE3ZCSjLLMcW6DhCW6hsJugSuKpzVcYcQrpWacRvn9ZHR7Rw1h",
  "key10": "3e3NAfS3nExLtr7e33b9HmsAGQFW8gw32d7Dit1oQvjzmXGyvHtiEmaUJm9qAo4ZJzuCybgTsrgPW4tdXMiVUyuj",
  "key11": "5HCSpEtkr5GT1hBb9sT2SgodEXVhuLgrBQ4aRNHds4U2SqEfJD3GghRcTLyR16EiPLezbkJryfN3dZPsCwLt581D",
  "key12": "64C6GbwZm9PJkKycYBhNDxX4aaxPzyFHcarnRuFPZrVnj41zHBE72t7LeULHGjdL7uGB939kmcumh6pKFtiKLPWs",
  "key13": "5zEW5gNGt125fch1QyUhbssQjz6EYRrfLZRutCHvCQRqmm9MtNaQSE9Zu6gxPfyCEZh8qEMJTq468wQVJdcfUg4J",
  "key14": "57UV4VqFMMrFKBrTuutka1MMnsULdVn69Le4YPUSj4ekRXUHaYzrb4MY5QPLLfDC6MpTF3HuwXdQ7xGz6ThVgUaA",
  "key15": "5r47dNFSDtoQQpKgbEm5eLSzXdicNanSrTmaec52ZyniBFuikjRN8aV1PQTwwDDU61NEMhvXYKPjUeinbhVsx2WG",
  "key16": "fuu4YgEqVbqLrcTUAEp5eEoapm58sZa2L2vfXXswk8bbF9RrzQMQAhQ2zbNJAh3oVLcoePVVHjYiadBMYgAEFZK",
  "key17": "28aDdXM2qdHiSvTqfaZhzBWbRuuF8fsgmXerhNtAvBfXRvvHs5d2prgfwVEGXQsZEsj63ZEpUL9xJwdrnypyhCUj",
  "key18": "3bHBiAi8nJm3JB57ABfNaSH6Rr1FBVYYz3h7jf8t8jsGZfAAZEWAFNz2JdrGUHxraSRkzwLvVrTGWjc64t24MHU3",
  "key19": "kPdfRr9bdHt26Rxzokz47oG8e7LTNNKWDj22dzzM2Vi3qNUnhixkmtswrVZKDyM4g4Mz5KdFHw9tSDHDRKnFyLR",
  "key20": "LVBTcJhDKeaZzvykS8Qza2t3x79VA8v73PLfNGRRS5S8QQNXVxeFmB4hAeWVGQoPW4y8DSuEepnyPvPWfJv3owf",
  "key21": "3QtpDCMGrihjuwtmsfrAoiEs3QySQ4nnL3R7tHRPhGMtNmywkrDYnivXX8HJBEYn8AojMto8H2mDoM84pwDYahqY",
  "key22": "3rDrdDhSGnzZjVcY3VcSukT2gR1pq7DFW1RKZBDj4dZBMDdN5EKaM5sSzfcNrNcsDPSC4s51ZhaHRUQf4Roufkxo",
  "key23": "xCroeJ96CsHWVNs24b4ubuAmeTtMm1aezh82QcyELLgYxeX38DoAmKm2WZJ2pFFnMeomTycUihu9s68grDVmBUX",
  "key24": "sxfMaQmBAx4kiqxZ9w45gFQjbhBpxmbPangDraj8ssQWnSEakaVUPV11rSeaHHQ9MoEYWuXNuVJ5FCM9JHEeh1L",
  "key25": "5WeSidZqq62YNBnApDSv8fq4p2kqMJrM6cEJq6ZceNNEUxh2M9ffgsyX4rzbRqgAGKLZMGZsRiUVSRaWMNh7Xy5q",
  "key26": "3oNGMfWXsUNUBFvGKcuYcJcivqSJajnr6qpXZLsqkwbVLCvXpvpjPmmBpxNa7RYboLwzjrrSNNBJgofKqwG9qDxs",
  "key27": "5PNYZawneqv14cuS6EKApLaMhaHiVT1Km3dPvjkTmYAArqZoLayBx3nCh4aFPqCYs7dykjjD9UPJAdwp6yy3vMQX",
  "key28": "2Pw3DvZTuTdHpkwHcUUceBbRS2BAFS5bkuJ5dito4Fsbm3jwVuVcWNo3BzBRgPUVkUBjEHJcGVWdEXkhtm2JX4ku",
  "key29": "3isqqFFoH6uuknzANr55ubm3sxAppkozSFhSfiGMF1oNdo1qCKEPNa6WoajtCxF2XT227Vc548mPVVeyZQKdnyFc",
  "key30": "5ieFJXYGbLoT7oFEMkkWNGVE6T6G6H5N6hBRViWmSYqiWs4pouLtc6jQhfS5af1QUhAp2Zq82NWqCPuyEhASrQmD",
  "key31": "3AjYCaqJ2kvvx5Z9HCcoiERMZ4UWmJ5qXUvRjNbsrQ7nGEyFFoASnWBQF4Mo7gjawdbsAhbZTQgNW3inddpaVq8Y",
  "key32": "5Gnn6BNT6BxSGcJigBLDRSffy4Z4YFCYZtHn6pjXyuiDSu7xYx1SKD5s3re91kzokJiQufWnZzyzE2FHdBFeWb9y"
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
