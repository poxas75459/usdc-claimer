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
    "5VfYTGmtMMUstDd2jg7JkGB4hSN6vhTvf4resiBm13U1gpUs5XpGHniWEFNQ9Cxu4yggQuMmBAx6STLD1z4osrLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NyD9k17ugoSfATaDFfLBb9ESi8NGoXDAULnwW3VD1BCQGY9uwWzmuVGASUxoMvUkJ2bPsLHGGaWECGrjKVY7kXz",
  "key1": "3m58p93aKY9Uwna2dzgKpntU4NACvbjjH3FCLkJYiwpSaCN58gETwsgBt4HaRSkn7d2fNm3GtuPjZJ3WSGy6SKAd",
  "key2": "2quEPjoC5JHmX8BQa6up8UQTL4VX4zFEcNkY8wFEzPNUXkrUyphw3kEHbBUQXH63haFMEmXcVuLWFwTKP4VoxPCY",
  "key3": "4pkr7SiJ1GWXKDEV9mB87wDvZ2EhBcHoP2dGUtZnka27AnF5Gcors2iqrmpVgnEThVC5HoyoY533VKqhNxwj1eAS",
  "key4": "2HJLwLNz2eRDUw4FkTGvZq4b5GzPGQBwzqQwSrsjn7uRjmVn1xG4716wXoXU6ctau4UGTpa4fGrxo7wJGzkagKd8",
  "key5": "4AaDhgjGUP2EZ7CdT8qBM3dPyXME5np8b9tfdmZactFcYfcZ4mRMXgxvnpzytzphb5WLJzGgZ9oZPNs5UJSd1zQW",
  "key6": "JYGivR9SgHo76vhRa2GmntQfCBfmaNC4FA3bYNDpULNujM8rYU3thqnEB5HNQ4cgeGs7ioMGYZdt7PdmbCBdTHN",
  "key7": "3cnZ8AmdUpFoW4GzfwjMWfBMyt7KoapPnbazNJYij6VLkZ1GeC7tW4diMLuM3avE2F4pghWWRKTKCiecjqHXBid6",
  "key8": "3nx8w5uidSQ8S6BFx8gPCWkPrAtHTJJRTJw9GXR9AGU9UdGhxhmGbQHz8v8n6SQ5Pc8htTzyfniWCccKZqK1egJw",
  "key9": "3mrwpC3TeAUzz6UGEK3WLDmBSppHTmKEsLnybFNmmE9XBu3qVA22y4wSXFUC1oJZHsBqGkovqrixKzFnUgbhha3N",
  "key10": "5rhKYZaGJv8HkuvhbB5Ea9dB1zpgS5WcvS1FLXCPMTHGzuNMxZ6jPZCcME7KtTKMmoED3CN3ibtEo75fof8M7xE4",
  "key11": "5Yrn3UqRazju7zbomrxN3DZsft1QRjbdxjPHUCr9HMUHb8pAAQ3brkXXDC861vGnABG243nB9NqFy1rtmUCQPksg",
  "key12": "9bQ6JAmHV1xpegdd62x9TSXpTYVB25inBzNn3VjFgZxvo8pHw8FBLybzqc5QupyFfnPRMZNkSfhSA2vjPdirJuc",
  "key13": "TBADY71g1zLXC1FZTsvb9YbBFV1GM4RXYyxsRk6wBwTuCZVujL9hdqqMT8nwSjnDG1G6LPeNkYAtHfL5831YpLs",
  "key14": "3pQsan3cQLivNnwfkgsno89ucvbtCPcywv1H4uzYdEmrBFpVCts7gDFy1AKSj4VFRSWyaqHR9FMFjDLjCP83vo9V",
  "key15": "2PKedc8qNXxpbhxQrWe4MpstkGtfnp8XKykS4v2sobbjJ4wVUmMphcypjXkq1CHfNbers7uBLqZsNpa2qJu7T8ui",
  "key16": "5WGUaf9crd3ypaZ5UbDwQ1gKGPRPEvHfB9qpQyVJRWM7sjn8CvMuSc2r5LgXFNeJyoJkftBygYYwN73zcoTLcaqw",
  "key17": "5j9otVmwM8wL99DPeWgQEP5FfbNzUQrdzrJ2VpseSLb8QiYBoFgCrqFzzKAyP9N7bHwGrHNZ92G1TrGVFxtwEHmK",
  "key18": "5FMNEDoeBzHjVpxEnkHtTJyheNEuHmPL2bMMbehnj15rfuLvSZiaqk34nQCk7We3EBHjVsUxsB1ciT1oVDDe3DuJ",
  "key19": "2LCE9uMzxVzS51FbvneAqy1xrXi1tKv7pGrcumiFLBK7ot6Dwt7NdBztJfpDyNYjPw8G54exTZWZgUxYqFCqGg8Y",
  "key20": "2cTVKyurD7XkyQarMqVuSTjTEh2TaLjkdJATMMMVndAvA98cDRr9m232fM1HWph3Lu5ATWAmTgsjZnob2tJga3fc",
  "key21": "5MvdwUbAR8Q9kixdoomn8UhPh7G1ACmuGnrs1XEU8JWgMg2gGLJCDSeg3rbfGguQzmoNAiFwB5iWWmv4WnF8unrt",
  "key22": "3aZ9fuiN5P45Rpfo6GTZ7e3Eo6RzX4uNFJ1dj9fMD82R7F3qh87zMA5SicQU6AWKvBiEFxyG8iBYVQwkbSqfRPUX",
  "key23": "Z9VwncVJJoXjScnSKCFbvLCX5NgnEjhvUX5THEHqXAwk1kbgHQ6KRYA8hPJAbZufCDwfJGjpxpVzM8R6ZS41H3E",
  "key24": "4phZfmuHzuj6J7t9be8UJVp1bTsJpwzH9fAeYZRToUZGhTUGe4w4tzyAcNSbvGn2VxKviGSXCzKHM2KjdTLvFC6e",
  "key25": "5znpcUQnkRdZaRk6fuuNF1FK39zSo27gi5a3NnfHZmQmd5yVvMb2vdzWJvp2YNQSQecqD9Kp7y88GxTubQbwdyGF",
  "key26": "E3A5x3u6HVUTxS87gqGZt1D4L6agj8a3v2WyF1fWu9no66rsvKqNbaHzsYsctqEn3zvGE48vBk6Bo6gs4scpwnr",
  "key27": "4obodMNNucEriwEBzy2PekBG1MRRLHx16pgSYUE9SuxPRDjhR4Z24NSybpyaiWsyba5jMPEgv4ig41ySV4JeH392",
  "key28": "49ep28e9yUYRnZ2Aib3FWo3xXruW4JLNsbyytrJeMHrGyRsrj4Wg5LGhZJEtqA4AsXw9gySkKnoEQEYFbNGeNc99"
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
