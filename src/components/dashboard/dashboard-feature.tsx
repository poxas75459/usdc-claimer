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
    "35nnUtyGskmdrETkAf3VaP5bzEuF8YuQwwXK5NBixmaLbbs924iKp96VnQ6DujqX7NHkJZ2RRoTjoqTwrzWz1m3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8sqFbBGZhHiTHx2j1XAo7bUM5g5Ar61c6AEA5nsRghZhjdmdv6XvuXGzdyG6LMmDvXTd6THGiXgQogGfPAAW3V",
  "key1": "2BZGjhshqFH8kkwVGaJsF6BrRK43iXQfUe24WWNBSq9RT8nPzep9fELsyDLBeUs43KDcbNuH923kQf9osPRsAimW",
  "key2": "GPUdZNaP54krfNXSAbHdYwSYJv4JfiHP6Gf5YLp8D3dVui4sKgLZZ2T3Y5bzbZidN9pWR4c8gFgdjoW7P9xBbpj",
  "key3": "3hrdwMdotXrYXqDsX38ftv8Yamuwzu68uudSXRy1gPdXE97Pk6z9HtebdToovxk6LsotiL3Q1acthgeuaTfivxVj",
  "key4": "2mx3BQTYaH6hZ9xwbafnjQjeMEcqwFLxhUDqDvUuf5rXgVS2Upa9PdSgkfjCRrSREvZtLj4mE2YmypyxLGNAYYX1",
  "key5": "2d7eK37MF4u2d2i15Fz4ewXjL3sUHkRy2Wk5vYhYV6FCQfJh4fRLeUTkKVF3yCoRewPaQt2VcmkMdxsNfh3paghE",
  "key6": "2iXM77HFLNswrMAeBpacm49hkn4f4GhZFmVbqs8JRjFLzRGaCoogBWzVnUoPKJ4PKb6XtZGFSUZBVpeRfGGVW8bi",
  "key7": "3qbmTZYXFh1z1MHBYMwH69TUQCySMS9ruo8N2HxqAbUDMu3H54J9anDUpELmHhb75fh1Js96EgFroqUofn9dS5FG",
  "key8": "3mDA2g51LxPsX84Z4C3Bf7vu29qDTxfC1WSwzzMMJR5ZWX3cEGi3CCFkjZMVrhxfKSQdkD9CnhWzQ6mA9QC6yAXt",
  "key9": "3yruQ8kxowniHqazh3TGVtJiQGbnr91ANxVzPeQ5DQY3YAgh4ojEMRkH8ruDxETgzWdDxeVpKFNyV2BjLSHGsqm3",
  "key10": "4rkyBG7eJGbJLT5a4YcFyhYk8wRoTe2LnF32ZrM5AMtqVNMkeh64URiiPWQrFgG8r39dRxaSZF22Y81tGTfqf5hS",
  "key11": "4qsdrAfm1crc9QDbG8NfGheh4NW95d4rTt4293XDRu8PB1GqKMn1ESSzsQ1abW6kGUm2T9RUSRhgVYhtvD5DHpbR",
  "key12": "3LgZyPchvsiCaJKVAGBbekWZtpXAKkCskcoc5ThacaMZRor3wQaRX3rtBYVvWQqQqjXU1KbdrGhxXh7wSDFbbaQe",
  "key13": "5aKaUSWXxtwSCpmTyTuMYAg8DAH4oF34yiWFnePAfECFW31NhgxWAkACWQwzSmQ7oZrmPA9YrDNFUh5ocrYGScfT",
  "key14": "4eMKeaFxHFVYu9jmNdiqNgLxgrurAokKMy5hSAxgSTGzht1o2iUc6oPufCZ7y3dpyFHzw5omg8WxV3mUTuse7z6T",
  "key15": "2JsUuC3FTjxrd4mwFALePxDMnjSdSC2BW9ycxnBExTh1BJLVqtGvdaHSc8puHTiiz9iegQwdX35vJ7F14ngzEVjv",
  "key16": "4BFm6wAVXhJsHb3LkzkpKt9kZLqmma911J4xDx9BpbnRCvM3HKonLPnpqijW96hhjT7fZjrn7jsmjLMTfa14A5R5",
  "key17": "4VRD4mA58fWrpZTHZSaLnDRXXeA5M9ExPtAqEXEsykb75hi5XpfrG8mabJ2kUmBtz5r3os8UVGyMgs6pifW1RhMJ",
  "key18": "5WLfmrvQvTW4X4knDhy2rez88bt3Nt3vprAeNmpJewxXpuNVt4ARnYfqovipneLa4Ejv82frSWm5ShhGGU1gvRg7",
  "key19": "2xxX8ZEKWzUDRwz99ei8gGecUuJVNn7V5FeoLzSRhW51ew13D9eJRxeZotjFVABkiELED9kCPy68CaByXovDjRPk",
  "key20": "4USSNihNzh7daiZy5WQTSiGefcbmLifWGBNcpCdRFbe57EisKgCcuWt6KYsMcZuNrDZSNHprWMgz9wmEhmHyvNzf",
  "key21": "3E8fSn4Sxk9VizJVdVwEeVZG464GKZm4VLzSYrQhuaJnmGhzmuxoHp7MV6SN2xGCgzPSxk887Pmk21n8VBybeeXL",
  "key22": "CJiZEryeA4EAvk2rrHWga9uKJ1xk2qKmzy51ujTWfvjFuTSuyuY9JQvg1n84XkCzH8Gw2hLZUxQ7RGJ3VRT6Rd8",
  "key23": "3wboJBspdNrR9ZD5syMoWboQL2k5qPAj5npicT11mHH9i2vvVRRrPRYCCWrHb1T2JH2SmkJkfL9yH9qzVkgFAkGo",
  "key24": "3ngRD8D7CVony9yNf5xMfXnMUxBYiwkrCKjTGDsZTonUzqwzS5dQB5SePoSRPnBCxZqJkjRxurcYgPwrVupzZxWj",
  "key25": "5dfsnWtcBFS3uq7yWcBjgNpeu8wC69HPFsYsn8cv35GaC82VnGNSayincAd7oS15tNWP35GcHx5stpznaoqeEYti",
  "key26": "2QEFonZUyryEiXe494afjmhEsN4Nzy5c6UqXYK5zgXVPAdLJxxqM6R4mF6GVcSpNkcgadqJVsFrzQwxKhbU1aG7x"
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
