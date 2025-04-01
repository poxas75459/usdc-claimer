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
    "3UHViLZACPMy6dApUPNSfmKSTHj7UmcDovFCp7fhiCdPnJHqBALbPSJPF4YCZQ2n574AydG4giLEaNNaM6iM5dWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cH3ppiVUW2SkBhacR8wTPP98KNEF35V2CLMXt1JAsgTHtqqeMoRQL34QLr8162YMX3LnHMmRcpHAUzCNMk3ZpN",
  "key1": "pkMsjFFyzexh3ewkAB1roMcBbFgG9q6kvx5RdwJJ8b3sccovt4XtKf6sdSjhJMB5sW7XPA1RUpVEXu6bLxYotC3",
  "key2": "4rTaJXCdfFEwbk1vi3WeBqHH7BGHdShNj15PaXq4HMwMnfgQQ586uBjSPaGqey56aGqGpGSQGS8rnzvjLWzwiyFR",
  "key3": "b7qTmVYria8QRhssAn9TxxhDkZ1zMN8dpaUaHK6JArvDZmSaBWepziyW3VKue9ByttnnXQgzvMQUVEzAXrivKok",
  "key4": "5fUr1J6nCDMPsmL7Tt4ziqxU1uVHqENbdRwEmJiZBTNtaxJojHf9mDQUY6wBmQiEvidmpuqdHCD4kvwyjMcNxRPY",
  "key5": "3zWXg9mWciiHeAn6VAk4g5d1Pxf4Ctyhu1Gctp6ruANKFZQCpafF9h39KcbhTXRKFB1aoZAQPn6oG8jEV2Z7L3qx",
  "key6": "5wiUWkGE7svqJBkmqVVQ39GDCGavnQsuo8zsgSuYE4WdsFkETTewbxabi4tae8wTyfj6PrwbX4rPL3hxaeP4EfZE",
  "key7": "2nAAEFmTsRrae8kRWx9qDyijTLhHDaBatENs22vdeZJeFxGv5dbGMb9FNtViiZFWK6n59mzRPrdgpK2jLg9JTBH3",
  "key8": "2v1Qyt6WC9466BAFXApJybfPvSwRYshgtMPEvRDZgynuEAzFQhdFrDFVS7zbjJHjfPx7kCSEBGxrm6B2tgjEJ4YT",
  "key9": "3SThsdpvHWgjqKdKJTggsX63HWMWLLDKSqJo62YuTvTn9j2jDGCLF4s3cS7hm1mmHQiqM6DVGqvhKL8ML4bibpyD",
  "key10": "48H1B6XbCEqCtdmTAGPjJ8ikpbCfTkrf1gXgL4BEwzrmxEEcKn33vfgBBbR2mwYfwKJusc2pPog9rNS9Ns4xNTLq",
  "key11": "2MfAugkp4rVnALe64YfjpD83Snz5CPFqcA3JagENz7XZRS7yHswdVfrxacH2Q6PuKC8BiygVfAAM93ZiSRJ2aa4q",
  "key12": "2RBRq5M88ugftCwFosGpMiiGHRBqLpbKnWwJrvNQ9gYtmcE1fchVjfhGvE7CqqxisZNMptvfk3eER1FwPk7H7uS2",
  "key13": "5C9WbqfxLPG4i9etx87ReDuvVMBk6PBosmMLiwEgVxXkeUkHTJ9VYFbbu2ezNuJFpMiHSbiKezbSHcKX3xy7wgxG",
  "key14": "5t6T4M4PbbsPTr5JAR3TZvS6vmUphtbtM9QLssmEcnjDwBMsZaaMtwBGaprccohgnj8koTUWJF9gAohUQjQS1uv",
  "key15": "5xop2b973TxvZyL6BhbPWbJix9ZJy3gRGtA4PgVMgkUFfxEGJCixXKmspc75Uk2EYAmCshpbHUK4DViDqsQiMc7u",
  "key16": "31hGrq4qsn3tRp3MoL394e2nTRpeK6xdy8iPffn5VdvJbPmM1g7mXQiqUAKQyeAfu1MM9EWJCUx7Jgoz9eKRkHU6",
  "key17": "RvQj98ArbV4hN8zWitG9xiMotCVHFp2PXBSt276rHsbSA5pX6VLgiK8UzFRez85YfyHijmBt2qtbrb1RE9eousi",
  "key18": "4s2AAy9tAMyxHCjTDwz4HzELUNFXhHHJnhGo2UuZTKbWCUPkqTG46rJB68DQvqLC3qiadU7yoMQTm5uPPhPXpBBE",
  "key19": "qKXhgthTc59KdgHQGM15Cs2iJ8N2A6A3KpAqZ7cfPqZFVey2YUvMBU7V2oYV1FS46Xn9GQap7jfRTAY4kEApYaJ",
  "key20": "4vKqujyBC29peTYtK5mCX7yGEqwoPDAJV3r7Ne7gP3gMs8rmvTvhL7PqKtQ1ysyF5RNytZnjahQt9v8LxxNzvJHJ",
  "key21": "3DGtAN6DDqXHcFwkZBQfa4RV6K5r7Ma9SrWZYfsqLD8JFJQHpqpQaGTUJW2rJNZ28LzCmmW7aynDuxJVreyperjJ",
  "key22": "5XaPviUMWsU5Xoa5JvdNKzdrwbrsXACXeSBQZsheDU5SZF87cNaMG2BDLoRHKs5JUxW3Z8cDAHEH1Ax5vpbUhgvP",
  "key23": "5bNhyAakQABbWP2f4SKdKVwzcgebSbNexPGfvYgi3J3wGiJvrvZ48gugvuBkQi7Da1XAExLjXrRMbyckteBSFLPv",
  "key24": "5Xwa9igh4pEEhCFg6yQiCBRdfF3m1SfabvUiFLeDJBEZLmfcTxXMeXFvskTwrtU1ULuSzM6PvYxWgpwJxwHxJWG2",
  "key25": "7Ropb1BhBxr2xQkm12a6fZqEMoGPczmuFuU3XRVnqpv2t226Cew1ZkneQEPQGaZsaK4j4ZUhrd6C6uTUJ1yF4wb",
  "key26": "2ZBPHMpzZ9Lq7i1yXnsBuNkyjuPefCncCj55eB9rQVtk4972yegff8UY6fMuQ6rV87Xco8bZu4LNkLxSvkvcyhWs",
  "key27": "4qvzygCUDxd4EF5miKsqhLNgRSoRDzp1JjNBGWp4YKBGq8zNQ4UxS3Beok9qXQPHoqpfXHkbHV3h45Mj8x12r6pb",
  "key28": "39KxMeQZUYb3FhturjRk2RTZ3d5kRKsaMxyBPGjNEKYg137QdJ2H5BBJHYmA3gkcqzV6hUG1AUfTKpUVLQENUdbL",
  "key29": "21qRus8RZTAT9xLP5RsgXFQmf2UDc27ittEiRkJ9oquP3krn1NgxQrEAefBg2RJei25qTpks3fCpAoHEQmh356Yh",
  "key30": "3EMZYVLDRiFis6p2pjqFjiGs5qEeHAJsnjebYcXXfq4Rrp1uuMzM3zaW72dxzTKEmmyPvNHHGVP96pbbZ2346LCn",
  "key31": "3VWj8jTCLBAqrUhUbPcYf9bbtYthpDPACw6WAvTqV3z4yv2JDwu5Dtiku983Rywqtm2na3kp88UfPfzZBDeq17eG",
  "key32": "5H56Kty82Cu9YgEiK1NG7X4wddUbCcRF4jbuzQDGqbkp5AbBs2UH5yZVVXr69AJdszgWLBSJvnPTeFoUEbcBfGA5",
  "key33": "5yAqE2f9WiVwnnKdTtwhwaFALkAwKr37qkvKtHb7z6m87cHktWhw5Eqk5T1Y6wVFbgEx6eXrnRkPoE7UC6TCJ841",
  "key34": "5onFF3gnyYicXcF3BgecYqsJcaduoGwyM2YQxnA5JtK28LvAtL94GDgpGiKTL2RSqB4CYndrK2hDkduxe79V3fnL",
  "key35": "2KL7YGVW9yJnqSYaMH5Hk3B2B1KmMBgEhYSA72FDoVNZatQR5arQNJZBbwFVZo2Bt5dhYrbtRqBihWvM1hBnvGQ",
  "key36": "5vPENUuCV5UEXPEDKVrRqxbz8wGQCyA9EBPv7Hv2EpjmZyuBApBPDGQbFhMMisz59asEv4XunbvRTXw8MjNfPUYv",
  "key37": "4shAgpUqPWMqyHWFLcHE8Caayx1QZuLugFmmXBFiKta7Mcj7AiMdq2qfzStji73ERQF5VT71USwavvNeeZh47Yu5"
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
