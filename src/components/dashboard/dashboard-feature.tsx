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
    "4kSHPSnRyuxFJWkN8b5WkBuNPd8K3WrYpEThCv9uQkKT5HcL7FPVofxi8MewCB3fVAtxBcsxVyxMBBFL8mDwyy2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnwnuMq9YFdGGAXUVPZA9xcmTepoNv9TQjWb6VVzbr4GQbdXhfRPT811jKrGZFzuZ9fpVBBwph9N2NmwaXGcqpf",
  "key1": "3C81hAAf2bN1S3s3umXm2XppxVg7pMFhcxAB3sa8UvNz61BtDqFRQTdocTsqtALT21aykG8DjC6NfAkjaucfVxVb",
  "key2": "5ebB8KhN24htyXuT1LdTypQ8hsFzQjvKSbN2HwrtxEYbhqCdgtxJPsKpwc5wjkWV5THMBTeLoFRTW89UnXX8Vq2X",
  "key3": "5GoJe3UgDNdu9PRezRz8iGA5S3HGYxEzVoxxUpjPMPon9wSdHDTbmRLvFH8RrbEtWCbrapHPswsuvD3hH3f8LdM8",
  "key4": "2HUCNj1nwVPqugCvw9MMMuFCrquiUVK889iQsT8jet4P6w2w8R1YWbJAravDviausxtNA4x17AtfF9u3y7hTPziD",
  "key5": "3DjkVhQmhGyeA8A7rTkFSeE8gHxvKmpFPi4gmfQ6tbRwAQQEKwGBXsr8FT7tWLbEc8dha8ay8zKhYVkd8XR5pcFb",
  "key6": "STZFQjAf9WmBL4ct3QEBNfX7vvaVwN5ZQ56Jw4VgfkkU3dm4PPF4mDzn55VJPm9qxrexug6us7bBHd1GVLfMEt4",
  "key7": "5irpCtJfwVCDCvjp7dGz3WDhQMZntbzvP5Hy9wX5Fr18M2pcgJ3eGJkM8bNVtpdQS8BUc2e79JgJnf6vowCSwUX8",
  "key8": "gBdtQrpnbXvPgFQqdqURuBiEbWyYZMayuc7rgo198wNcFrptS6uJchhH4o6gGEUAki6jpiQxpPDsULUVBrivCmT",
  "key9": "2xdNxUJRKgtPM7rVDNuhyDRVKV3EPwXmkWGqti6R728K3XgDYsCWPXfuWU5qbDLwNZLQyjY8EFKussLLY6CGs4MA",
  "key10": "sBTunF1f4t6q4qLedbifgpvxQoPDdLUZa77tSGUFKYW1kzNhfhbPsdG5AhYUcWjMnkK45CL78UAgFKah9xvz9ZW",
  "key11": "3R9Dc7v5KaF7i6x3d2K2hfaS19upwFekjpaEE34kJb8nC8wacVtMWoe6NNStXgttooYWjoittcSisMb5R6ENd4Hn",
  "key12": "3J6rWAFCzfPeGCNuVGMnSdBabhKiuBVYSWSYF7CLPB9gm3pMzJKS3tUXwuGhwJwV6Y1bpCCHP1JtRFcfuPrLWi4e",
  "key13": "5ZsQergzwrdk9D2DMpvjhBBA195mfRXxNqCXRpt2zqnNW7xFv84RKSmek3dZ6h18cJuraDrmL1GXubC4kP7cQpFG",
  "key14": "3V41RgftEvGxkGRBmJs6EBqcWzmQDSV4FVznp1XZoGadWPzFzqCgY9kns1gx8T95LoHVAryocLbLx52j4dohMnKZ",
  "key15": "3Z5EFCgs58fQHgG6cYBdsiLBZAaK8DWYMSm4NbqZpj4YQqyXw9iBk74wYfLP8SjwAZ9pEQBrHeam5RMXEtHpWiea",
  "key16": "4z3LtUdZzbU8eqpjHY3eAMaqMH2CtyYeXk7RPTUmdeTkatxPMdf4QRzv83KPyAvgUhQ23uLD5oFRQp6X8TECD3vW",
  "key17": "5vod1zsN3jLdXWKu3q7bUD8KBSwQ2H11GZCF7Sx9CBczGUsVjwNwkzeU6EnJkZZeKu74iu2frTsvPdNFwJeiTQBn",
  "key18": "4K8WvmSLXDDFCJ5bFZs736jDNGgYFpq3aRSacdeTzpRnxSGaJR5Spxq8hz7gPmHDWecfv2644uVKtcWa1azYQLdm",
  "key19": "5nZ2rGQjLAxuX45MfPSZesy8LVJZ7VMVHE4MxMiY5zTZbM9DAx3MQKmvkstjqfaEvdRTQTzhKX6jqwzFhEWWNKp8",
  "key20": "48s8Y585KpJfoE8cLfHwJWCKSne5qe1artBN5g84J7SUm3fZjLfwceYwM6tLgYTV2fahPBQKbnUE7UJxnMn7WQDj",
  "key21": "5xT69VUmtWg4FHNd92K2Q3iFqE8sF5ifeww5A7WJ4i2fhqUiznuwMw55fmVdDp1cSsKAUaLBfGXVj2wXPjKRALgs",
  "key22": "36vBFaYx99BD3eEL1esHyatpHsAnsdc7YKj4Yget9F2KaQjugiPC9qHiS4kcT3i4MjySc9GrydES1eBKGJq9GJiw",
  "key23": "5cFLhZgTgvKEWkHgh9MnyxqVs8oHXrYksnyNJ89YGsiPUxJ3uJ7zFtVVR4YHe1PXQWUUfZrHnLcqRbxLCK8LNikg",
  "key24": "2UwZMncN5SqWj2cTFoSgiRH7g4nXaruYLfTatJoL5ZrJ83YznakPUBw1jeNuAZg3pCBBCpoKedRZH51Qm8oPMTHY",
  "key25": "5PMLp7JbGxZH1BqRrAtN3TePR1xaheHZQ2KMo4qR1YfAwrCyYdqmNXwoenKYMgSqVQJf5UCUHkv7aX3BGp3wMD41",
  "key26": "om2WAurrCQuMcJyVpyahLBYqEo5D7Q14aFAtLJmsYxG7aUdT1nZM1EWANqaFsqARae1iVtxHSgDDMxEwo4ZLbnw",
  "key27": "2Bec3atMVimuJmbRkLfdF9e7QnMKhSnNsCkq9ff2hiaFpAds1LUQjJiomqeRWqpQiZd3HnYxkB3bkVUDz6NYfvwg",
  "key28": "4h7nYMuDgCnYHh9PcikaV2pKhL8xJJPEkQcw8rVB1QjxZvjKTsDnk38tSKRv1tyzHcdJ1hoh7JEG7A9msszFhper",
  "key29": "3SXFFhUbnzof9RrfMZEi58mJjhRa6wiE2cc6qk5T4NwGhwVTmifhq7ShczQYPCW9mC6DPJotg93dzKeineYbT4LC",
  "key30": "4QLBcNKSMx58mpB5LEPFcyhcvwQ4Pq6kuwq96uW1Tj6Taf7W3P3VBTFXL6P2PtxBDgSvYWb792ThvA28kZNDZ267",
  "key31": "26tW1rAVvX5nuwNySqVxVQF6Gmpf4xKeBghSpH4BZ1F4NkNmQxRVSFHFiwtzHRwtAhmR5mU7A8XoVqwLC3bZNTBa",
  "key32": "43iEDAE9XGCUP2qMoeQfcDCpz6ev5zzwtp7RjMEgpNc2eyuAyAAchoRHRBH1eGPzzvmEYiikfvF1h4odVGA2uoRR"
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
