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
    "4QU8t5Y6JAXqhcewHH6Dqj5Gt7pPvgHmM44wqmvi2abuCcNmoDj6hsqWKsyJ1ZDqhjdZzcHd5nuk4hK1sZzud5Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcnGfMjHfztcSKhqwQcsTwS7gXjyBtDuCcbLzHSJP2bTXyHGJxAZd6iKJMRqvHEpyvUVFVmwfhoH7PCnY6fTWu2",
  "key1": "1Evx6A2V6CwPvvSYQFneMzv6476NdwunzmWBVWpcBXJw8dhZcfbE3QU33baXJvPMRRdWu8gwUSLxnxB4zADupjU",
  "key2": "3bE9nGYDSKrfAr1VBbT4e2eTCSUfdWFWnDUihc1U6G7mKvDdKNRvNq2t3FAyXPuTq2rtsWj1bCe4BBSnvawqVuvW",
  "key3": "4h2SXyoriuhUxuSNrCHPiaEcMCKjrtKoRjsBkx1x239AEefhCosiQFm9m7zSsxXHwQvuB1HRpMMKbCrcvsCYgz5A",
  "key4": "43TnfUg34WkDdn5kBhiXiSTxp88aTnuvrvNFX9SpRMGyyyb3MFecyg3ZnpKEwC5WcDN8EizsDPRnac2yjZacr3ea",
  "key5": "5gW556exQc4dSMkRXtVUS9tSHQhUc31pgzLGrT6rJvgcX4YyfZSfwD4BGiwQF39BeDeCDFnCL7XTzuHwSxdKp2Ja",
  "key6": "3t4ReiciGtP7z5MW2yrE9LaCpGaMpGP3ztnvheUfpc5QCXkAcinULzCQoCUrXuN93JqwaVyZeHYkMrxy74zo1V2G",
  "key7": "3gQfDmzZMUTkFCi4R5hWPiYXtLvqggAVtQJ52ZG5KtDdxuW7ktPiLZ92DgsJWNyzrbNxH3JG2DHYJu2w6FXYKwdM",
  "key8": "3VLR5Z9HhUEpTLavvfL3XB3J2gwkZEDNeuHnJH97oz8tsHHkeFJTzrM6q6nHeqV9pjfc4ccpY53mNmU27ZhDj7Rk",
  "key9": "hx7v63ExX8RmsNiyFWpHK8KiC2fEYW6LrgnPcC9JixHz8rNs2cbPaMdGuqM9sp5cvamtgri7MQ1mm55z9pnsajd",
  "key10": "65mDGXGfE6iWpbH8VTApFg6y1Qmh4iDVQEMdKeoReSisRwnquNB55pKiBwEjXMCK2c3jGUupSTQWDxGpxNbiaVLr",
  "key11": "3Tm8JVM9kLEQ1dxRXapYXaou2EyVSbpeW9s2hrZx9LNtASc38UyHeBsRarWzFUwCHqfGBYTgsi8QTBYDtNsyeXBs",
  "key12": "5gQqh6CRyiw1cedyh2V4g3bY71iWWm6kvCHtNgHJRhcsHv5K8icsVFwT2eeQxQ9pLyCXDoPjtYpTHMLzwFN9sX5w",
  "key13": "4mXwPFLEt2vreWG7DoDAyxcsStc62EkdLmTqxK3hFpJhui1whK6wBF5eXVfSp6AuZJMKhpXUD5cEK2Tt7vf23KYB",
  "key14": "5SFMksnyMkSXgeoWQtnbPJo5ozQqRKLBSzZ2tRGHnHXMGgvyde1RtQRrtE5qcz4BPcXZQjm3LrrPKUy9k4M8F7o8",
  "key15": "3DKBeQdZo9emuZG2rrWEAmt6rh8AHQnHFJ5nS9djKkzYRGubDWYo8KbxfpwVzqstweSgxKfkeK8AmqcLdSXZmytG",
  "key16": "2gLzDLmuM8LFWGq9Zsw3TkDH8R2RJmuukn18kpUrBpGxBLNTCxTeNH4HJzBSs5NUUcQzRADvYa7Sbfwm4uGCL9Fn",
  "key17": "UtMpJqnm4y6g9zgdYzyd29zmoLFh9dMnscD8CrhsNrCYU2CmFD2p7aWUemF5EE718QsdCn472N1pSKoF71Zizuh",
  "key18": "3GnhuYm8cjzLWzfijDhyfPkminWjgttCwgqtR6twrnjQFXWW49L95LAT8nkr3UL5VUxjCj1xdovwQwmirnAvZjJX",
  "key19": "ZqUspeKvCEPLWCZnoiLt2sn2TCooA7mhDh3trGonRuTVQRYHWtrREbPPYXB6Y4AxKMD96vuTtyXesp8X9Kvdnz2",
  "key20": "5yDyAFHRrn7RGtHoehAEPnpTtFz5dB28C3sUqaD8aLCpoVvmE8iA2pYXJxpDCjtJm4QrZv4QDCLcUTd3ZxmpZVZE",
  "key21": "4XcXjhczAnt8GcUK5DBae7vvKY8c3GfQZnTpkb5NMRaWd5QDopCbqzMYUwYdmz8QzDkuAE4WmhFJTULz3eEPQYuB",
  "key22": "3F7dHrCahcurfXK5cu1AH5hC6tmHX9udXV84TP11UqtbSvHStSV1rzULjDwaBNbYhAoAZXn2Us3rBMx29YsCeU8",
  "key23": "9sB7W6SWgLmSw7N1FxoCc7xmhXFpSM4FQ9JXhWiccXELLRgMYaXzmoxJ5pYNk19iuBXjfp4xrS9kVeqhpMyLr3B",
  "key24": "5Jg4rVZL9zFdEwP53szdptqBFWRrEP5Z6Nxyqb1yimTVWGseBGW8Sf6bBopu5jQEwJ88xikSwCq7bab5hcBxXR5D",
  "key25": "65dY5MPE6jX4Et4xGF3PXvbXKjxuUws9Pmwyos5VoJRsxxo5xmAfzWB4VgTooz2pDLNaZ6oSHj4DxWvhpHjyxWZh"
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
