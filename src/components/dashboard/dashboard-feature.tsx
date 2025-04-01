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
    "374SWjguMq8rgZrnh8SGA4vu2mA65KXyiyHyqCZn5tELwg7keJhHMtLw3B511qw3rtLXgbXG2MPH4krNnjS6amqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264zLwgLsmCM1FAg9g5MmuCMag22v4YVVj29CMBVRyCYSw6EZEvR3g428aNnhctJE5JtpUsWpk4MRgV5zuBVk1sJ",
  "key1": "62isD73uzDexWDWjQY4n5tcVeEpbJy4x2MVu9okueaRN9XzutmEPQQVCYrybrreKZPDRH33iNzq17uVPhPwdLZ8N",
  "key2": "cNqfzFAtZj2Jt2h5k27X9aHxEyw1RGd74db9cozyfyneochFnPujSw9WXEQM43JBnq1RdS8gEraotrx8Uwv7KK6",
  "key3": "2CdDNwsJaxNqhbjryeQoLNbTs4rh6VLyhMQFPh1Mo1eBgR2wqftEzfTmADWdLsoGhhBq9AVGw31FA9m8uXoWNpie",
  "key4": "2pk9ybwykads1QhZ8yGKK7WN3GXABqkauRHrs6fcq7ut8m8cCKXmJRpGMgohshcqh6wi5vhZk2nGHaDRD3AABaAo",
  "key5": "47r5yc9VAnovB7YcxppR3BQdfVtVVFheAEe2hNePX8CncJ7qYCPjjvLzxmVxkAbyjNUci9MVf3vzEN2V3iFyq9Zg",
  "key6": "ixj1LFDDQgGzRVfTGwYDbqkfEuNoPFrDubJcRmYA3CLT5RyGixaWttpFrpKztRTD7L5cYTvWLbGbiP3uSWWG4tE",
  "key7": "4z9EQw5FUkVQdEYhAbuJ2T63SSLP7qT5tXDiD1gvpbDZGBo4Ns4tmjZbUZuVrxeZvQwcNfqXq5zoCkqHcar39FnR",
  "key8": "4t31kfadahEvcbhTALdpJwpuohBs6trRTnXt3ir31v8moaFYbTHWfRVJ6RUnNBuE5THeZuD279uoqRuy6NiwgD7v",
  "key9": "3AgksDkrDuTS4yjEzDnZzSPxD2RjwQ2AuPo4fJJ3LDA9TUD91DrZAkJcVGC3rLF69CXFwpo7JruyDtaiFJ8R68qT",
  "key10": "2tnbMfTNgkQGJ5jYVHY6Ci5J17kwV1QUchJLc52Z2TWxHuLB4y5cnxH8hTT5Pjntx7u2KPALeDBZpCZEkeweWnSK",
  "key11": "5ate3CQpG9vVWhYf6AQ1ZMcsEfyfSVuYkdCWz4zhK8mg4z3RB7CyoUALb7kiaXhuDtC1zaqiWQM61srRiPADgf8H",
  "key12": "4dMZUiDK3CqvgX3Aztzy3wY2xVD7zvcUucPAeMvihNKBoCptJ7GyMGSZHicf3d1WAYnZJLdYKvJMzB1dqbV55DGU",
  "key13": "5TbZBN1am98cLY4fHE6PZKwDBFXghEYEMmrWgt6QFL7zk9JDW7Qu9iqbYqMtsKQCzh33s89xumfiNqZU3bqTF3fN",
  "key14": "4XN1XaQjG7ViEBnxUXrqXJwewN8zuYe43iSda7xq8gGj9zjvsCZgEu4n9N5JkUfZvvuLdvZyhzTekkvnB3YESvjZ",
  "key15": "3QeNLZ6SVR82A5FdjbVPaAsFyQhRooxrKy9Aa7Eg584h8NdrU4cpfEh4A5eL6FCYmpdfWrHazf8uAd79VhBAJxej",
  "key16": "5Lng6m7sgzQeFKsK3EfEXyDRjH7GcteowYxxQ3py6SmfS43HewyGPLZDs4BC98TLSDRgrwyiZFq1Uzjeci6PMKx8",
  "key17": "35WwE286YeFvDdSbGWoq3YGNhtHmhhBZzMY3t7Zg2bK83rPXQad57qBHLsGXU2PswSx5pXoUbFXntC55LgRqTNWF",
  "key18": "2rXCuiHN2oxkW6Pc6TAeP5oeDSr4C4f68oNnHpR1pMhf5nf5BsohetfEcPZ5ZmhvNuAScJG767P5nKwQ2FVnhpC2",
  "key19": "47VsXk2LggdoPTtSdGS2ch8w7u3UUubd2WFGU3AvwGCcXCRuyHAM1DsdU1TnTu1uUUaUagRRUhvwivMc94vrDQEp",
  "key20": "EGPxXp73BBuuvWnhpQ2qHx6aMqDLGyKS4JYRBN6fRTGex1cH9F62yVteYXH8Retm3V86cL4krpqqj9NTbvKZqey",
  "key21": "5k2oVzmiPq89ogDGUHJqTayLgoqzgjX15QFqE6QkcQChGAVR5SxzGYfjQAvFVG1VLM2NPHxfrqKaba8Q8TtG6NoA",
  "key22": "3xKvNSsL5smMiDJ4vBnMkirnoHcjzQj4byKdcw476qpeZTULTghWwYtQA9zz81SjrKYP6NTU3obb5uxCKqT2WNij",
  "key23": "3FQAjBA5Vy4r2R1gb6jxjq2RYQPVWH8aT69fsdF2FWM2j7kAMaL6waCtUGtCsZuwDvPtB29hVPCBJbFgRafZ1L39",
  "key24": "4wUPRVMDuxcfKAFSCj3Jc6LrbGEFJn6DeoNrRiRse4fsaEran9yy7z9M6Vnbt2etdZzSgugN3u5WAPQrvmhVwDd5",
  "key25": "5amD7ADRr3xofkCcgwyRekE5hacWK9ueuk7wLkr1ooZcWQ6KqHn2A3kHsCEjmQ5ce6K3bRrKWkWsQTVdKuoo1ctD",
  "key26": "5dTqMCryxYeb6eeA6jBrK1zZ73jmENtHszVBosB62AwbusrPKpjgGFo36FseeR5qaR3vpgdnxGxytbaUC4DBGcgk",
  "key27": "4i2Gv9VVEt1Ux5fjNFX3srY4fErGAiogDgJEQZJPSYwn974dNSy8MCX6bLt6gNbPQtRTEDsXoRTXvYy5HQgrXZCM",
  "key28": "3qvGtoMjFZBaSH9HvYjiJpxeBet6cdoiBb6h9H3g2oe9WFUewZ7AG4y1CHR6whmniUfZ84GLGRfrgYRLK4qHmztk",
  "key29": "3ib5rV2WJ5Z8ZHjQBBULUGax7p5P317qxqEsBcZHy2wMq2cJTrJn72qbJe3ESm2x3eh9ThTVVGSX3k1AFNB8tWsJ",
  "key30": "dd56NQ8P5Qm65ACdZWSg1ejDBPkNwE5g7X6aCX1LgNmSeicydNfuAufjeeHBgfws69GKFPUc2z4SmD79qN8S87k",
  "key31": "5vxwPeKLadT5YSmJ6nrA8W9XtTrM7QoJctYTuvdubDTaeZ3dgkgx132b6LwngmhJUgxA89Cs5Nre1ZsGwJJX2xik",
  "key32": "3xGyFsMj4knStVWf45iyz3qx7qiegVppRVCwJjAUd8AuzFNfUeedubL8m19NVJ9Bi7uPE8R61NnYgvCP8w51cygk"
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
