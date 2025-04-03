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
    "2ph5Ljx72JyNtg2UcW1VfW7cCtuYPPQNwfdThY22oeHvSQgvzR8qQ7TBMRdX9uQgDEn1DmEeENE384Bwty6S2eeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ap2Tgc2B7LT6JygbgnrGp69LhHc5igAPydDDX7HAzFmg5kpdLJz8GwVGvLwss9W9GibwHTR7ZfQLvNSzfz9dyNk",
  "key1": "MEC44MpD4yoMJg5Rcgv2YTrr2LQQXdhEjYZwafCEXmrXJ1X3BNATFLbyebK1oZh19zovBmqkzx7oarGPjhuJSd9",
  "key2": "jKtzUUHf8obij58bFaGHd9rWQRnoNBRdSAn4HxXCCDNCcKd7AFqpxGpBzYkRa2jwrJzRUHNmRxcKS6EHYjBkvZR",
  "key3": "oHtyZxukUJsVcTtJUn3mTavqfVo7n7wvZwDQ4ugaYVeBqDwn1N6qCzDKzzxFqJCxSZMSC5ZF4r16X7QUFrttv9F",
  "key4": "5iS17gHc4GcHsRTf7ubRAvG4yzpMxhmPq96CcJ9fSLded9PrUU9QMhLXbvLU1LjDLyRiUVwrcgRVYtp2E7VTCddR",
  "key5": "8tqpyhWtbdTm87dw5tc4Av9goryb65pVu8ydTqV2L5NHusae6kcTfDZWyEjm6uaC5CqqMVNvKUBTVMnzwDpLhxE",
  "key6": "3K6Th5685Fk8pGYqzKKFGJkogmpQMkvUshSxgcomyeNQ9rGx8mfST5Pvk4PMrvH8FoNhwt4kzW2jfD4Zztqcxo28",
  "key7": "3tcZv2ZyUM2SV9xHRJt5c2zpFYJrriYJxr4icicy8DwpchHA21arEypWGS9A25fryCo9KhQuMD6YzLxNhhHu6fc4",
  "key8": "4CcKsqkcLRGrErzzHQ4C91eCuaAQPxJUohZfgPEuLWuMBX8o9UPi1VkKS2dB8cx1DvXS6jrbcFhknbi8QZqxXTR4",
  "key9": "31z9qiGBAXZn61sNPjU9ByDz37uKrDukjFSDYTXTyps8QQPmrGnRer6ZBQfuxj4yf45bjfBBjEoCM8DgFHhr7qig",
  "key10": "wdZPA9SPAq5tYXJCFUo9Wmds4YsNyAHovhMtVpkuBEUqwpvgSB1BGLiQj4orJaamWJS4wveYQxb2JNgV8pRgBoF",
  "key11": "PqTVXJWSMKj71CSsdFrdeAcNqmNpdZ2mEsrWDGV5Tergez73sBMSi2bf5ud1pNmxKXv47UTmaqCfGsz998CUWqP",
  "key12": "2YNGYHMZ6wEusE9GrVDD7sQC2jEzSG3GmZ2Mj8ZavnNX5jLi18tAcQvdWh6MSE7T8M81Q9UcG8nGQUoSgngCiGSZ",
  "key13": "4xa6eTpYf7xrXh2dmGPVB5eMmwutYizkKmrXZyQQWYrDtCVirADWYGtG5nD1FRcpCX66MquRVT6E3xB1VWKEB57c",
  "key14": "3NS2KrrH5YJnMG5FWvELwtn6sJvpvfk15UhbbrSXxYJk4mMDPBc3iMxz8hXmS4jVvEqsU4iUCUcaPgTzqQEDcNu5",
  "key15": "5RPXfQvpFsFJ8r15JAp22KseFmZ35zwR62L2ZX4HbuWbrHZZqRKNrVJAyNxzZJuekGB4Aeh7XLyLVS8Sf3gn9va4",
  "key16": "4MgF4sTAG8chu8q7YQuLBf9ByJ5bMwfauzsFBnAEXPF9wLiesaX5Mxj5f68pTBVpanYVv6UABNRx1N1WPDx44REh",
  "key17": "4SUfF9ST4ZsjqeZtxnoFKyyPBP7nH2bBbBqk3DriFTFpnwR9u5iJmkCw8yMdmwmv7dfn8xSKVnJpNRxTLNhmiPPB",
  "key18": "2KiMc3u69xT185WpKKW8Zr2s82pEwMuKpesWM9Vj8eryYEqxBBas4G5g3Xizw1fo7pr17HMJAhZM5Xyeg2QJ1ZWX",
  "key19": "5V3gGK66Z4EKSomjnpPvBS92RJSHbN8ivXeCvUU1yzCQV34ceN9iQ8HHKBJM3dWGMFQW4kCDv6xP42g3BXd34mGL",
  "key20": "jc9mEH3t79bgnHQBHNpQc2BTSfhZH6C3vHYJA915HEqv7eJi1WeNHS8tzsswuhxQd2Bnki4mjdvqnMzcyFR4aW2",
  "key21": "61a1f4cazWZCvzmcrjrxc866RqXR9eK7fRYPD1hqUM4Xf9Bh9LggGxiVirfhNLu9eyqLD3ndsfT49Ru4P1isE2W4",
  "key22": "5BosGouNUzmD7HjopXhf3oHYbPXowUggVNpC3xWtS1a72a1KdrcWFBmcMkTBQ7fqs7RzVHo1FoZmuw3aBoj2db8f",
  "key23": "4hx4418R5m81NU1g9W6Ha2pRkMmjkzGyJLLX3MQhZFdHQQdUfYBzpDaWtVi78GeHmTh2X7z37kXUrH4qPKYwNbd8",
  "key24": "3eMv5XZMyQxNsheg2ZaNZmmC2cdw7v7Vnh8LBzYo9HrkhUp84PNXknZeeS1bERmzDnuGWUaE3M2Z164RCkyPzut4",
  "key25": "379buA5Ycvsens6eRcarNexiX86tB5usXdscdbxT2xYEwsbAVmMhsxU2ZvFqEsZimc3CeFrBGcAfzkGXdDeBYmpM",
  "key26": "JN3mzpNY7C1rmbTPzYPdKYYez8ZkV2gcWxmwcGNApLXnLFNbSYPka2uyntSPmf4YThgGyQQ7dJpq7ZjYgb15Drn"
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
