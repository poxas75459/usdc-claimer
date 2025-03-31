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
    "4TF7sp8gtn8UPfiuPQPohqPafVDcWMqDvqdGzXt1YR8zPmjDejbjXW1MD23jzhcYFNpUhfh1ME2dCADPCU6Vb9aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2CMnCvNrXK6GCpkcuVicSfpkaVwZ6GCuQX68EhPxUifq8QWz71QHmE6SC62TBwQSS2v3YyrXpPTQtg95ney9Py",
  "key1": "2QAV5DHLonjsMWv7LPuyYJTev7fLy2QGCqFvVxTgn7FWjqFxaXRZCNhBeGHFwVLVrUTYkGR8NT1jbC4EcTHiYF4A",
  "key2": "5nJuRwhYTLGrfRJiqZBqoi9NDURc1LFd17Fh8GzLDNcbfVFoocFSXPsjDio1p2tSfkjzDyCZv2CyyALDY6sN3qF9",
  "key3": "3uLKyD32Q6UqHmW9Kz3CXKkm5u8qGfAaRDcqh5Axy65u1Tdb5yw12NxDQNVJrkfZLArQJWtwmYY6Lv3eiKCFkrDw",
  "key4": "4qBHo5hruwNs2anRfRCqpXLy8sosmwk2NUBTsMbczeigDH46eznRexewFqwGpdNLWFZceUfMj3UEN1YMUXgxAvRm",
  "key5": "4N25cEYndtTG4cp4cRghippDH9Lx8e1TrvUHP6ys2ZkR2oupkPfTLQkL2RC4EN2BATx7k4LagLAB7Zxn2oGtSm9u",
  "key6": "3YE8zxjAzokF2npUgMcj6LuSnWFktredGAu9V1SCT1koE1bt2VficeArTm3ESHcsSxHBTJz3rK1AQb5XjavDwUwV",
  "key7": "61e2V8eg7uvcDzD9h41PGpXJeJgH2WQE5qx1a4eCbhzLRbDNMt6vPyKXKWrkopD9YbmA1iaDanizu23LRUCBUYWd",
  "key8": "355RqaVpdPyebjzeyv4eHVJYUFRuWU4i8eGMK6tnYcEZRxhq7kxdfGHkqtC5vdjCT45xRV8JsQ4vyaa97Ko7nRFG",
  "key9": "4qF5BgvSkJGpxueAFZ66EbjunfV5N9bs1NXjX59KpnhdMjBf9rQ1wsZj2LC7fCpoaeUPhU817863KbvUDcUjSRM9",
  "key10": "4x8x79B5v9EQx1zTbc162uWGPwqxTXGZNUczrdQ1uth3PCRMXS551twNDEnyovLSVp5xijEC5TRBYhjLC7EAURzk",
  "key11": "2CwuVSyXhefyzWDZfB9iSUaqJQ4otynpNpwRcHUAZG9hXZmmueu7uyGYhfcr9Ny7bk8SQL5Y4jQAiC6RbYKtUUpr",
  "key12": "5WZwBN4Zm6ZYnpKTmZKXRvF1QvXa4cEafQZ9TgohA6LRH1pWYt6iyE8DfTZpmr9AFRK7h71wjoE2a2FnM2J2BTQc",
  "key13": "2QaRBUAs6bB7uDMM7JUcooAU2zdLG8dM9PQ2fZ3zt7JHjWx2BM1U89ajBsTLhzBQstnmmykQxL7DhxDNFd3H5Sij",
  "key14": "3ueuagG4fDY167rGfwfYnqpEP9PfGwDUEV6G9YWFz1qdBnc4QA4QsVTygWkD2MXpL4gzJqV9kiZrEBaoSqkDxfo1",
  "key15": "2nBZj4xC3Trjq5t3SoZ1CfoBQ99ayPcSsT2ZvdtXviHTzsXLPgpvDFH9abybepGfPCMNBx71mqZtsfvvqDNni6o5",
  "key16": "4wiqj9Pf43vvqjAYgMDMd6hvNi8Ww7oKTdvj54NiqXZW3AZgZNTPkcfa5UMLcGZWoQvU2eXBLWiNLUWRgAHxFEqh",
  "key17": "5Fp5uULVeZf7N3y7cpGWZwCPLhHPDWoVJw8Bvhkh5Rkgri8u6tbxGyc16Zm5UYZRGvdTUEdSJydmk51nx1B9LNgf",
  "key18": "EHC7M13KiwiPZH2jtJnbPSRdWoMbpkgZiwn6LmdDbwcgvHhfcSrkfKZ1iRjbZ2sF7Ur8vLhegY7HeXSTRvRNSqK",
  "key19": "5RmxQMhRkrHUwgE1eGuV62w27A5boz8TrcdEM1VAWMxPJ1Fsdagtxo6vMb9jWX29KLWW3bT2ggS4wh8mz83qGePq",
  "key20": "EnV4MiH5JDbm6qqVFW5LuTgRbqWGPMD6atwvdCSRicBGLgLamDN4VT9B4ZsLzYLzsPfzc3iyno3ysPBCjpTUsvm",
  "key21": "towEM2tER27rC8PtHkyRJg9MMJVxawHHgD1ZmZmdt4FS2DV3NbJqhrFFe6UMLKbHefB7xQsLizkWSvaEeqdkRKf",
  "key22": "QGKHBm1zEKKGoKWyVDQJaX6rU5LcbCh7MAn9RpfdBF5ByjkfujbNidejj26TrfaXKNc2ExYrRK6mutXUvsrUTsz",
  "key23": "3tfcrUCeVKzpBvTSnHPDHmYLXeUi31Zwjx8fP8m7arpTXkqiiiwVXVCgYaek3HcpUeDiBqr2KLLriif6Mo1RGMEU",
  "key24": "384gyh7YSBeXnk1bKz131xE6Q5ktdWEPCjewsFySA1EsHXoPjG7AKCWBZutm8aZirydpHLobwGMMiHUeJ7gR6x25",
  "key25": "VPMi3L7g3bWqPeysB7LcUXnuzSUukaggFDZhioMT2Fs3YSZeMCQMX6eYfbm88Gun23YnCKLu9pbHuGiSfA5yYBT",
  "key26": "5CNgfhDC86UiSE6M19MAtCPTYdoaxRgbWGTqv6EzZLmQyyjrBxAmkrn7yQU9ZeFcqisDFC3NhH51Na9tE9pmpLMy"
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
