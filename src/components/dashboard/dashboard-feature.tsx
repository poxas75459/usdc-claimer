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
    "wbvCD6qrz9KMKJHWRmCvWEXZKj5Hkpe8pnaEjCMgteHuo3Brd2bpWoZc3QdwK5ws2vEJEAyADzWYKE4afAAm1TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qprZjsBP1M5hpfiUyvJVvMWLsbAMrz4mD8hYvqncLndepLSqqDsLUf2iJ5A8tP3TkFzgcMU2xi8m5iQAzYmQHv5",
  "key1": "4Dw3YXNdkeQVePDzaJevx6Hq8i5WcPftJ8A1srSV6wsa55kQNRC9X8BuasUiKvET7rziX7yTJvXUAW2pH2H9RnqR",
  "key2": "46FRrxNbtE1zficPkFz9JMqyLASM2s7QxDoUDnScF5hUi9tgWjun5FC3DXfuzncbYk6WnQrU2o8h77zgqRKb56dq",
  "key3": "3AX6CUqpsjUL6S9TX3cfGU7B71BBkj64S1DwXzobb1fD2wPSjRnxM8MdJNm1kKsg13ZoFAybd1WM6sPWzUgpm4VF",
  "key4": "5F5X4q8YiPUeTRA4rxQvD2fQKGuicBY141ohHV2EP2sKeYH7cmiEkS1kfEHfz7CYrxejNCedxqo5vWewJx47q9X7",
  "key5": "3Ucq3aKhCqaJmcqMCGMsu5tyn7gA4GEzqNhG1JseRCQNYoTLTd2Zb1qX6YFqNpZrezbfpMeq7q3YARFPiUHhY6iN",
  "key6": "24bky5ZmYjuRyvkibzeUxJ1RXAb4ZuNV5JvqqVjh85VYNPkLcWHf8ww46AMvoxE7cMDhfXZsVfcbAW3Fw11TUrp5",
  "key7": "59CSsVcrkHtSxNfmPQDZj4Hit9RSKBxvf4JXydq6TL489HKwjiiiAfncb873sMSro8tgxQbGecm8TXJpNavsvoGC",
  "key8": "3ASLMKagVh4dtnoXBmZsZB7NDCHG2xQz9tjzVdnsiGMzWMtZzkyEgY4ur8ZTMSmyQfZHrmeuNuFttFs97X7THHHb",
  "key9": "3UieydNMZvpYZAKkPHaKU87cLUTrxSNsCypAV7xEKT52yFABrHbWyNrk8GyFKjjZvuf3FskUMtTdag2CrRqU3DAe",
  "key10": "4vsnJunpXsERZZMxetyAUvX69qY4WEYSty2A27thw5AUufhygTCvpyeyLW9YfzCbYmxgP8ktkC7xvtWTAoU3kCTF",
  "key11": "qHCypZkDDykNrybND1EexUFrssNaxFFXp6DvDCkQDSoN92WpgXXDd2Ppm7kvCxT7HqXftcwSMTNLviGH6Trenvz",
  "key12": "4NhjGKcN9GBZ5hqTqJqZf5XuoBn4fsNmSCxo8TAVAgkQcraq8HHH1k1HAxcNgDxUg5zBtwcggbSzDT546AuZArua",
  "key13": "35CPgBVVqjjYCmmc6T7hdiLeeSo77FLe1xELPVoFERWJdfu9xPmvPS41dVZFNgVm8nd7UZzCBhhyhs5JWtwNyxY8",
  "key14": "3fgyjPVqzgU7B76Nzqdcxm4xBGfdnXf28Lzg9Ln5yaipbrxSCBeXppdaxgMnp5yrSCAMxmGrZLt5dBhEPkefJvQC",
  "key15": "41g6tP1iDagAgvpe92CQY4hBvEu18oymDzsaXTm2sUEfZEqFTef8r1iHYo4GdiEphcq2UMbRhYMn5Y8FvGZt2hYh",
  "key16": "3KKQzDrAh1hnjJutAuU1ihGZqomWhiVnKwbX4XaWHwJoc9H8oaTPEeumfRnQsp9Vyw35uG6yS8fjFivfXo31ExuZ",
  "key17": "e8Jgr2uUSf3Ht12MUBuARqaZyv8BZmN5P9m6GunGARRWuhLFVXY8gLbwtep33Q4mC4GtSW1WxCSQTEtJjyVQERW",
  "key18": "2s9bM3j8a1p5ETJCZcjbAuZpfoFpy9ofVUzc3wivf3tWquxPagWCr5RTJsTPdYYm9as5RXJtsQGnhShuDbqbzHCW",
  "key19": "34Wp4anUj99gjRKFKVCv84aVxpV2ehhDqCPrBuySFh9ru6VgqLaKZDreLKRbZWCqTWwxWWj56GfuWWzM2SLhHaks",
  "key20": "2i6vQ6N5oADLuRjGqjiNacRT1NePBNsREyzCxoeHuGY4G9eSR4zmV9UwtaMrKS2Vk9RV5zUEVmRP17nueekjdNyk",
  "key21": "3cZj2gtKjciY2v9jrtqDtfryHMfBiRNrpce4JJYDiptz5VSofoCR69yrNdAnog7pNEpYuh9qozAbjapq4VBB1bH3",
  "key22": "337DZHDaPXtvPGm1ChMXg9joS1FtQc1BzobibqAC8zC5XfTHpBrtUh7S3q8AME7cuRTHjsbtri4s8TyYfwEUKPA4",
  "key23": "5avdS7SzqooxZkHhgeNVXaQWKCwyu92dvrxK1LfVwjnDxC4VKYW558KrPqewhSpXDKf7QCQbLLk913LQvwNxLDdx",
  "key24": "4mzLKhVDTCvXZyrBhKvgUjCSN6Kq1bGEMTmQNmMSdfp9jtSFEWiVjg7Y1DijYsb8qbuTx7k9WmbdR1FPREZdd1Gz",
  "key25": "xqSNpgoJwStHxRbtdkahDy77JoZzQyVyQwT6C6oWquA3aE7jPMGoqdo9eQoEL69BQJFsqJ8VhVtNUpwKYqSHGo4",
  "key26": "5g4haKFwrhmfrWNtF1Hh1t1VUWDgFwawmfycZ2mfXjUnpeUazP4nZWspRreysTqHJQMKaGoKhTdGFnN43og3n9bT",
  "key27": "a1RSjA5xjy6qqax1qZkhwb1UGGmAK7oooVtA1WXWbdEtiN4AkRTWPnGz2J5CTyRPVGA56LQTqdXpidA6qZKDFaX",
  "key28": "4tHneVKduAVYavgSHBqwMKZ7SVQny3wswDdb7UkS91HVjguy167WLy3CJWK3KCYw7wNGhJ1Nqtmm5ZNTZniJ3ru",
  "key29": "3zJDt6gtKVhDymTXMgHh9v3LDBAJR2BXPMsRixPr5qwgnqx8gQjg2PtsNKPg2YNzwzoSiiQMBfDK6tYgSHfCq8E2",
  "key30": "5mjrDc2K84AkKU3W8KQmQxPwG9n31KPmVQmeDQqNpidfvkJUjTg2hEF9tZEyDy8LRJNHDTTDynvEPyDYKSDUsCXp",
  "key31": "3G4fa1KPL1H74qcfRHW2YnBwXHDtb9XGZDc1Py9CAiiXqGGrBvR8CW84xUoXXUkmAiLSW72eGaunc3KgoW6i6nMh",
  "key32": "3iMpm8GJph5sHbk21CcSKSB4Gb39RXzAAtX3W45vnZMRH8xJRFTzDMVbAVieh46rxj9tZCiKms5zXr3Kz3SpWNdA",
  "key33": "5QTyuRaZrSRMbrPaE58xA8EmvbsGuhQCxie75Ww9Q98AsxXF5WreueJNhXJgBweBBn9GNDgyVJoTfoN26Fz1fs6U",
  "key34": "2s5G6XYmhd8bTJ3JKeiKZ1YD9W1ErFVfBhKD5oKxtSVXWESaaQBMN3rpw7N5ZXcryAMKghLzithngV177o9uYd88",
  "key35": "62naW6MDTMW2FmdnWBpWHMYNuuVCp8bhGWk3xywMJ3JoW2sDyGTT6ZqzyXeXMAffLoRHTkEmoPEAaLjWGRbBvbVU",
  "key36": "4dxP2iWJerey7QaqkenVwzWT2vwkpuqh7qSxuJiuVPyWPjwUVVWYJomPVoCcXN89erj4QtZo8smRDfgzrcMYEFd5",
  "key37": "2Yeone1eCdkhNhRG5UB83La7NFDvuGimftJZm5zPkkn1Cp2MYc2NeurSTFCsnp8xjyHBaVxmr5EJkysiM2UKKtLY"
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
