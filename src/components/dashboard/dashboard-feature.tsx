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
    "2XZK8Hz877GM2MgiYMH2Gdd3VJyFqoGi4MVtUuKjgPoVxTUsUFLgS9FJafjY6PCARDiYoxWGzHRNqrh9iUd6goC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKGni2xFF1YJ8QoLq94ErWwrKAATKHMtVwY5T4me7f5ovPsWF9iUQWaA4ZQBoP2QK1wn4u6pdyeFpZ3buhd6HMF",
  "key1": "4By3wK3HSHNRehRQkoUPBzD77cZtxPTC4DetXF9QckLEPbxKr7YYPWomjAFFGKiH1BuEFybPeDXfvErNF14Yt6rK",
  "key2": "49A6YtcFCq5UmjichrBzRQv39ULzFSxKNM6wAW3xQQV4zKj7cNdBERcU35sCoqfaRMneVCJzJCqCFCP8RjLcPjsB",
  "key3": "9atLxv5XzabDYUvSTAN54hCXkz7pzhPNdB4H397CxoVv1xokL1bFPerLyJ6PCBnScj9EoXVfHDEVkeRGmSChyFH",
  "key4": "5hxPpiMPPyu3fHy9qDYSsnZqA4CMUte9fgFMDQqCJyrZctTW8f7ZGm611anuU7Cr8DEJY5TFofJ2ZCnQB2nA94Bw",
  "key5": "47MPwWdg26J7uDLSq2FJMLDkb9VyA6rtW1Y2BKxDJ1hPd8SdxHVCz9Fe3X9Kz1LJpreKwJHZGhwYMVejen2SZe9o",
  "key6": "Ngkton7mdsyAVoMPofkRXpxsojv975exX9TbUGxfve3GVUPzVZPmFeHRaf7wMQzymSp2nkuwYZ7M8AWGm6FWSmi",
  "key7": "4HewWdQdSKJynf5xS1QvVgVzpSf5U6sSQWpe7cyPHoyWkiYE7ZRwuXETumM8pbc3YJ4hwStDRYMDQYhWJFY1wDq",
  "key8": "49fJmtCTWFT3atx4ivNcCWd9AZNDvQWj4sAuLPCncyAPEEqPD5MqB6rrpiSiLuueEK9VWfD9wpRPYJKjdb8kpq2t",
  "key9": "48WzStFkEvPN7dHKRtgPhdN9UFJEiyyfW7cTjh6QqLS1V1Ue4v6buge5qNMnUHkJKhYbqUcs4q4SozBu7gnbEbsY",
  "key10": "4svZN3CjT2NXoqwxXVnjnpszKUbKopEuLaBvgm9vV3PLNWNg7RWkAzNva5LJbe4fs2Qu3wesSgFrUAdXbKghCFkj",
  "key11": "5zYt7VjEjhYcrqpkPq7mrrsJF3K4NbhCEjZatxD6DErhgq9eJD9yhwDpwLwL1WkRqZ7mGQsnB6gbTJKYyQXjZ8Qn",
  "key12": "3vtmnHcnH9n3JP9eBXV1MDY2AbHVP8cVdx9krN1AZaCRVTLwFj7EKPqFdGAecvsTTcysRMKTxGx61yqcxVuYMgjY",
  "key13": "3dNPB8NxvswLzUJ5jtwGWDyAyrVCNc3n8ew9uGQ42RnEdnTXpiGGV6GhbDvAZ5GzFp3sm9zfRoTQ5dYW88Mw8BMY",
  "key14": "2vTgSLxLXhdqv12rGPRKvjaGUG6R6ECmt5wzLQi7HhTNhzBEfFJiAo82E9bp9ytZRKVL9eUQhNq1JpgqZBBNCWab",
  "key15": "4U2LaJZURQDrnt88fMY37VHXztnLQ6aKowXcFyVaHa6yoDf666K7a66PUBBRVthDVoFHoVihWnpb1193tRq86yDL",
  "key16": "21tsVViaurnt6rLnrx7qcE5QqLgqogq8zf8XhGumntGVCgxzxBgUKfzqKz8uosezbrHB4x4Ld4R6PB1AoYsam41c",
  "key17": "5V2Ps6aGQb3JjsTX5wBmAaXLHWHMEfiChr6dLim7jdFTXfSjYdSCvgm7UZkHaxiM8cQhcuehNyjtv1voV9RED71e",
  "key18": "dga9Diege85ZNXZJjjHM2AQi5wXdKE4B4WMn29scsmjuHEHuAySHQKAyKfReL1avoo5FpVZsUg3XgWyPd2ywge8",
  "key19": "23w1SBEsGp4d6B2br3Ft86K3nZjoCFMvvQNXXByfte5XTR7fG1JotcbAKUDux54TEjBy7sgy8c12deXB1k4nxCNd",
  "key20": "4ZV2tcn2DztQayXw582e91tpWsFVhiXrTrprwzUBsw5rps66e2idNhbRYf9bMrnA893C4zerCHzyztdPpBChYjBg",
  "key21": "fm35Jto8YstrkxWjVQzCAzGnTE1b3i1c5ba4pWGVA2TA1nFjA12GUYKS2kMrauydFZDyJpqBhCqLZX5hw6T5R1A",
  "key22": "5V6XQeXvaV8VSTwpgHbKFpeRy7TE2De8YShCV5vDk7Gan12enoGjvwyWr7mktfNm3eH2ihaWJXKZoHyo4sdKfQyP",
  "key23": "5PKz4GnEy9Ndn6dH6hCBguTenrDb8AweyYX5avH52gstgjCDXzF7fPNmF9yeL2z75jXnq3yaLMQSCaw1D1Lwc9PE",
  "key24": "2dSQktY6Uq9HyzCXPS6HQrzJe4UpHjscMpJGGugnPbrabzkCw39TpeSzi4U7Z6FJABpmt3MHz1PoFUSm5Hu9uAXB",
  "key25": "3a3jhAQ7ynvBQZgWihpvKYV2oCFqxDudZDepGTeYvXpaP6UGGVFUpE9chCPVP5hArJnfmS3zjrthhrhGi1LCAv15",
  "key26": "5AKzwqR6JVCCp2gR547gvzFT9UtHBeVJJFUvdJp3tMgmAN3VNLSz9rKurRmDiSXUaUyFj5GAbsPAbkieUfdoW5j6",
  "key27": "yH4j6myZw4pFfTHY8QXVAAwUNFJ3DVNZujXPJHUYKUMsq8WLkfseSs1YNnv1WJrHcV8323y3etJYFGrFzSsVkjn",
  "key28": "5t7ShuomqXrwGWMqQ9PhwG1GzGwXPtaNssGzFz4vHLuYzgwQcA1AmYMRweF38AtTcrbPTHCD8oNwDpUcBeibXzcp",
  "key29": "58d3FLNDeatavrchpxuwDBjkpLX7VaQ7CpkooeoKgKoGkcDnrd12XdyKBcf7boF8paQCPEB2RoSJW4oyDoW4SAg5",
  "key30": "3Mi5y8wj7ULR9T1ZcHB2KCNMj2QpKuPF3SSkP2uAmdeW3e7J9mf8eYDkgGdMckeTe16QM2PX9C8rHjHrHEzrhx4y",
  "key31": "4n5kAuJyvxUP45faeLThg24GHVSg31gBSeFwGqi9rWNmZQZXpcEt6KPLKSRY9e2CfN5ojMmgvwbedd6ebWYL1yBy",
  "key32": "qwcQfr43Q4rHveXHpMxVQTRNKKHWSsKBKNBPwBfj9GueWHJctvxytTzvDsnE5c5mVibRcmHg6mciaws8fTJSF5P",
  "key33": "4koPVLPgjXdcHB1oGnNSjtwHz7CFZunoNJnFxgMBYXYiLDVZUTMcdTgHMEmmPLvj3ZB7FsBZaXFUrSn4jX4BXGJV",
  "key34": "1gfM42u5qZbhdqPkq6uDv4nj5719jUvNhfEKi24ntutk2cHq33Dy7i8DXfkT7c4BA243zeBn3cQgdsvVTDNwUbu"
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
