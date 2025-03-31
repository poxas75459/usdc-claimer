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
    "uR9BeGrXrKGXHiBTH8yUFs1rTuMBgg1mzffjPLc4NZYCFPEfNpw1EFxPsLy6ece6doVEsLofEBQVFeqYSqz6KVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKJZeAwkYjzDJQDtaYFjY1cGxbCMMX9onBMvs7Rj2NDMP7meE5pjSmFwtuKFvt5WCiqyTJfdSgPfMfXn1yPEU38",
  "key1": "44V8R5J8QJLWNn9ATMcXzuueVq2ozUgaU9skbc6DATK8c22cdAcHts9X9cjECcWtiHgyMD77zFEyrvNvgsv1fSB",
  "key2": "5grH6igoP6DGrzKLdsb1motnF9dFK6JmcXSm8n2CMep7CDL5QkWKg8FGjSnodvRE9vhi7YUuRKA1eCqKoHj8g681",
  "key3": "4cKVThcwuz3WvyKwqK5U4Ka954UTqRE3SPihbXV3uZ7BH26MbSbyySrN2tgiwsmUzqDM9nPHKQ5DAhjd8oSKHJgR",
  "key4": "5ahGsXfFde5GUievgkhfGB5njyXcbHsDBeV5Hm8PBxWYFZBNQd373raCFRiqEYq4fvSwvbwLyK5f7LXCQ3FT3KTV",
  "key5": "38exxLjuSJTydSV6gsMiHFtmdVv7hR12MM3au4aZsHopGhX2FU8XuEJbBuwGhiQNPefWkh4d1YZfBSe2eSTQU4Lx",
  "key6": "2y7VJSQpKSktxCREdyWyfhBssDH3p5smfrsJ6xTbhzEdDwFutHNPK3PoN2jNkXr3AqQnxx4iAQrh3Pnh8BHNVaGk",
  "key7": "fX9JcCLijMsjthLbxuNJofejW2VbN9329GWbGo1VZK1guThhmtNPuV8AM3AojF91QjpqcvyxM7MFrqmiLGJKQRA",
  "key8": "4mz1rNFQUFbA744BAz7S8Pxm2JgUHaeuzN3aicuFrQL5N2ppu3DD95JUdbYqt8Dg536xyJTQvuq14PzdVZwQSqEV",
  "key9": "2BAkHP9CyS8EDxWDztHeLd1s18CGWaeSNBLSMbAfU95JU4Cche4ss8fHkFeZmJdpx8UzN2tNoqKJT3GyW7saYBw5",
  "key10": "2jjiefMQjS9hRiYbaiddEfwDMzC33ZC9h7zXFf3dUkgimHjiueisVGNAvmYcBrATJjqNQbzp8AamSnuN1i9VcjUS",
  "key11": "4G2eXRc3Spu3L4EyyjA5pk1WAVk9DBYLZCL1b8brikbFuH26jVNiDdxET7DLiiVGwbmHD7461Q3T2Py6TxY9upgQ",
  "key12": "ZXn6itCmcyckc6aRj7SgHwNAn8rejsf5Sdch9NqDPKkk5g8BHoSAoTaFJRmDxjm4AeJDnrvYh5hV9tNDMm5RNxn",
  "key13": "ZnNRjFfNhinZ8AuYTEjmamc9BnXnXrE3LjJQUYTLZC9kobVs4ZV5Hc4vt2WwwhgrPESaeUxr8AnnuGLn1Hpa2VQ",
  "key14": "4TuuACfhbDWc5S7zTEfn9c4egCu8o1LwDAxUotUpLQah9N4a8ucD3UWgcZzzqxKg8PbfBK8RtiJZ8supEL3nnPGp",
  "key15": "stYuJPvz6qfKT5QUto6x4FnhfSo3ihkmzmmyvuwsYJfsfkkA1x1jqfasKWm7wvtt9xo3PCHKDv8tQoKNH8TxJVu",
  "key16": "4uMqTwW6zEnk7PD1hXyFUTvfpoJ8q1KVREPsCs4mEkEvT4hiMKf9r7ZKb8TWKdsKTY2LYGjV5G59D3zQxsLoc8r9",
  "key17": "215FZMK5A5X7v58uPHA2XWg8DHPeb6RTpNiwskNjwZ8113Rtzf3pUhh5zux8UrMBR194bwi14b1yCVXpVuxoWNxF",
  "key18": "5hk9AaEnz5vdD9UEeta6Y7YJ1zp6D26FXWMtWSWzGCPw1T3bJKBbDtzCMw8Lj4Ntnv2apYaAZMvVAFBB7vRmzYyN",
  "key19": "2Q8U15YmWPFmj8BDzSBchYQeUQNsXg3VGcTD2mDhY11ZkKM4tkNFfYv5Nx1inuKWe2eaShTrFNwPc8jScACa9f2k",
  "key20": "4yPZSpGsYUNrgX3JM7TXNVxjsGW4F7egjQ79ZxSjemtMp1NU8RguDRSo2hpvCVzi9NML16wC8DCobnTbi2AhnL1T",
  "key21": "36sUkXLb6yXuPbeyaUUD23GFDKVhhcpEt3jEcmTcifcgijVfbEcYEjtso1Wo2i6hr3yuTDpKGm3PQJ6vcJmfXMhs",
  "key22": "5wnBPCHbt4ua6wdUuiu6ym59u896EikTHNbtvvUvKQnXGRdL5JtdSKSKWnV9VcFvb2xNU1s67899sJuQYGUYYS86",
  "key23": "5kW14FWyLVri2Wzh48kEqqCYUqrndZt7qxFhTiFxr4ecBicpWLjjrTirxLEsf9XMf68VrJZtAeaApEyS7JvVvC6h",
  "key24": "TGqGhNBXAE1ZwXftcopt8RaeCnXLeeZcYvQvpG2vNJ2sQwjRDVRHUdvyv6cGfu2R5gT998jX9VuTtjLgoSs3xin",
  "key25": "4zEocvhwP78g9fxbbEkAE4HT3YFy877y6ZrGNvku1dHgi38LdBM8YoteNbzK4MdJ9eTt52LdrwhhtBpb5bCZ2yEh",
  "key26": "mX1rNQ2JJrLAX3WBSq8Jtq7xgAkc9vaVuG2EvzJbAPNF5TFS3ynZF1MLgfuadh57oiXgBQRdpcsu9yRS3ttV2ov",
  "key27": "2tDcD6UyVGkMQVpEsyaVFEQmn2RPuAGi5Gkk57EgrpHvCi4XNanPu9ntqxPw9amUMep8Xw21XHmk7Pr2mYRjYff7",
  "key28": "2FvdFwoKdt12XA8QkiGb6XfmeT3qUneacSR4GX5a8ZabMcxV1M7vgpTWg2c7vL8rB9rbQcFLTMYC8UpKR4pdjgxA"
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
