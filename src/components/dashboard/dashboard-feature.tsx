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
    "49msgv1cZUymy9mX257sBiwyaXwTifWPtLw5gN6ka9rVNbsE6PAwbCkgoK7HuDfD5HUT3QGKj2T15FFyBKQzNcan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHJjjXkMWekCL7fEEzUxfs4CWDc8wTa9VdkPcpJCDeeEebyooJTQbbJ7EHgwDGzD3Jf3NsFrSdqVwnRryt9cQTg",
  "key1": "5AUztefMPq9Dg8LqyhcNktVyEYfdfPv2wVaEFe7jD8J4bMbVD4YyRbDfAykt1sV3iKWjsi9JkAsxgaQqayoJWfgb",
  "key2": "3rFE1H8ky7wrfWLhXi7JZ6up12K33wTS326JX7V4AgiXLwEiV2Dv2vk9ego3BLH53Ao1rSfJ4KTwjcKqcap4aW9M",
  "key3": "635x58cfSui5okCPUeNgJwpxqxou7amDyTG8AAo9xWP1MTLNs4EmMuegMcpFdAMhWxVuxrD2oEbpAWewuPy6X7cR",
  "key4": "2tdVqVECqDxEpULc7MAPikA4MrkPYjdKWYYa74FVq2SxZYmHqSHVbC6MMZ9TMvfmDv1ZmMM95FnwQYzojm5nFcJr",
  "key5": "3bh3BHbvS5cfbVmVvk3khtDRfJALzmeKsBHqQfecLmXhpGaMbvwCZgV2rGJ1RLnwFpub44WbSXrxL5UqTiXFtvhh",
  "key6": "59DAqDC4RZ328H9mmi2L5Zymxii1HVSuwnijCu3mBJJPGS3Ee5m19QRKm83FeAkDTruVSo5WxZ9Bvf1j6DpMTGiY",
  "key7": "3o5XFKhnqSRiVUVX5jUwgbMUXrTktSw86Dkjb651uH6s82cSVHPr8qffmZMwNqr5rkNWNKEEALNmJUNiYtf3fxDv",
  "key8": "4i4ibizz3wnisDVZBNk9v3yWtZSjg676gtgmLDycMhsam7zbYf6FRdyP7Rutp1kx3Vdm17fhfyXZtcRKgjxRycoZ",
  "key9": "ALVC6FBZedsMHNH6hGEg94K3rakExQuG6rUu7Ms8Y2i1L7PXhdfJP9Aj5C6JuCDFZvQWordkGqWoFjSAeyGkQ2d",
  "key10": "5bcwMF4QLTVEuFQKXCiZC2Qw8wDCkQWqD5u6H2PhhqBhdyxCC2ux74PBRdfZg1KZ6B2vd4GWCVAR6FTWGA2T8Sq7",
  "key11": "4JV5AQn4ibXm5vQLPjZbdrokQKGssQSkFBsaqfspr3u8SYPtA8bhRhwfW1LC7eQx1tJzgcE4h7N2yqKCZs1ETawx",
  "key12": "5yeUTjxnRXF2fwQe2ch6YBd9VXTeH3p9jN6Ck22GcACNri3dZiLsjZCef9Pdd5RzbS84zhpKhcLm2J24f7BDQaWX",
  "key13": "27yBeq7xmqN9oCu63K14PtwVsrKDfk5Jb7Pwtu2iCVNGj5cHjCi2Te1rGd2LC6ZR92uuD93ePHGnUqkcXwfjbgNS",
  "key14": "3K7rxFxsB4wjghTebo3darM17Uan6v8fnmCMyzw7LLVTmjGLw2DwwQDbapqN8spah9Jo3GwDCEwSFctA4xa54kf",
  "key15": "4AJLsN1kedkTemEXysYiCvi8ANuvKZtxm83idYLQfBzCY2JCofuskPUmHE3iAAfocZNHteysjh38pRB1VkDNNEmV",
  "key16": "4GGN1YoWM4McV8QyPU2XYXFUjdzvLkxt5nSCvC1Ehjfem2o1B8SSoRJ7KuC7azeooTERJm1tuEpo5m1zMYeGp8yS",
  "key17": "4oR1J7x99tftWdmRMhzzzL7i8DaRewpnv5idG5kPzkSLYVBvkabXVSaqMAwKnidJEjPmWiZmrRGQWkRKfrd4FEhk",
  "key18": "42vHRLUVRTJuYHD2KSDTeNMWQexL1WU6BJ1PkLhVYfz283EvBAYUphXT9mE2UDK5xJvAxgQTwoamvB8j4LeKxpBC",
  "key19": "beHxGA1XA3b7x7fNV63Aube4hRQ56K1akTRLNoks8n2WDG2Jx3AHxcuiRGdJBHhnd1MLVbrxkTm3WC65KHVsdCx",
  "key20": "BaZqSyweL3AvzqthCYHw5XEUnQLNQX7Y3UHwP8oPbeVGggcwDdboiWsSvLEegrtid528sHVBp6agEeQXeWuG8rG",
  "key21": "43aKpR8b7EM4sWJGs1agYnsUbeCq4V6ivNm2u34jfQxpMaxgRzZmz89kFvLXksanctyCirka9Uq83awoQtrUGEKy",
  "key22": "2kAs2DLguxc2KvbSKqYYac6zX1TNFGoYp849MBxMGZimbB4kxMkPZs11phCAHX6PVUMFPNpDAjiMW4uixXqLymMd",
  "key23": "zZviKmGptieXMxWrE7Dv6xFhwowHruhW8RWLPHym3ToTw2vPyHbmjdEBweBzV2KtkFw1h5Lhiw6b7w5ZMFsnJ4A",
  "key24": "5Ba9Ejx9vci5J3tkiBurcGF7EDoAcoF3p4MVLGCrxBRvhJi7e3FwgnmD2sM9Z2tHDmQcm3rjzG7VyXQ5QVGvZDYh",
  "key25": "5vJXxDoY1K8MwYoDhnSzUicvjr3jw1yhwaoAtPDdQiRG6fYjNtTiV586uBVR6F7ERzZbLsKyUx66giqnycQMZPHe",
  "key26": "4qsdkLNHwr7kvG6jFmS9bqz6tgWgUEFdYyvuZHs5LkKohwoE5oUkQkfwPDUimDHrotuLx8yuxLmn7vYB8DhRFqD3",
  "key27": "5zm8jNQYxW5WqggsGR1JuKNTToAt347fFHPMrmKQYzJg9k8k4NTF4hofiFw435CG2c4tyyQE8g9aQuCfYR1mHdWG",
  "key28": "27acjyRpVcHCjeNkq8AMK7DEVN5KZADMYpjBjvFDWvh7fVtVRN6tS37WLbfncUg7dC3GKc6FfXyJ9utP9qDiabw8",
  "key29": "5FaYFhJVD5J6xrbU8qTm6z7eHYe15eDmDPW8beWkgvXccuM21H3nEkLGJ6sppxNecpeZUBUQ9DncAG2sY99oXzB7",
  "key30": "5iRUkvxiKBG8jMAHKcVikUwKvNjyp7JxrhHCX7vqv3yV4hAeZNqbLPFeRpdUemmHD4VZiHssgVvYzZEtwBn8i2kg",
  "key31": "34LRfif7Fzw9zvJTwCVQer1K6qH5fFHuqdhbA45o4Q3WFa4GeBV36nDSUiyKZWyH4YTucAm9wUkSdXTWXfG1GDVq",
  "key32": "4rfz4JWoXUPDpBbBurzqBPzGKBG4PUBiVrGe9bxX8ancfji2JYYxd1jaNVuGPbKDGa2ZRKFRuACXdggPzsrFjTPh",
  "key33": "spzcuXUhmPLQ4j83J8nJWQ4Gy9YSgwFTjyrTUJTTkvHmByhz4yrCCtgiXp3Re5Lj4eY3KbAomVvw6G9LkhYGSxv",
  "key34": "3vyXqdRfUzwr1vmRMBCnXZFCXxJseUPAYocG38dQHC7RUkwWzuqWL5RMAmzXqN3Hb9xr8KPwvLrzTdCnk9NstXDf",
  "key35": "3oTmD9RBM3UyDMVzFTWXMWzRmaiJQDtQ99vzbq8UJkx1XnKdotwFPEQUCsRBvgE2zjvvh1NPByFjA8GTydStv4b4",
  "key36": "2a8Z9MxhTkSyB5cFSSwef7g3ZwZKoa7XS9ZJNtivwzomKou68fr7N2eGp7VDCjzYGUYHYpvjn7BdHaV5YKSRQncp",
  "key37": "5bKomK3qHKz44MW6kaxuPMBLYvk5NnYhfQv6xyPhPP8GJ2z9KdLzFsfrHANXz4kE5KvhZwdc4RfNV4gA9Kq6VzQJ",
  "key38": "4DUJ9cGdCfSbqwU2YLQBB6eLxh39Lxog65iTD14UMLJHvmTGrY7UFiAJgMa7YjVwAyiiE5Bq9tuy4Fgmzj1RaEm3"
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
