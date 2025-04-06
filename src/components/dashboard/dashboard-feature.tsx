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
    "3D5yQTBLtp9ShCR179WGw6SHidMJbb6WbWo7ctWQ5zH74ddGjb4VscyjFirRdRB35xADkhm8fe6oDvkgMWXn9Le4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67E9H27iCxTnbZWuNgqGz3QPQ87izNbVEVPrbE3A1qyP633MFzd1RaDWnHkBE6vfCFqoGhErZVkgEh3ZLNn5bQ7D",
  "key1": "5vc3q8v96vYSo5Dx4uLYXccTY7zNUiPAAy1eENPXw7nScBkUBJ9KXerpeukfS5eJFUYCCEGshJhouoJwvDaCe57g",
  "key2": "D1TabAM4EedBoCeEUvE48fcgax1s2VaqCvGSUu17aznqtCwbfjNXpbNda4zAiFwW5cLu1AEym9nnpPwV98Qy3fS",
  "key3": "62Vb4XkdxHoNCNnfeZ8Q52fhtF3ST2q9NwEBC4H3KkNraXD4L6xrWVsgNMEi4nbhtY83yDk51bRDjcP81nqKbMfg",
  "key4": "3Fnmwc5A1DwTi9dns4e1SKMwiMk29XWBv1N6wHpFStJCTbxWHtrJrrMVF84Dr6CpAqWF3eznB5zfFA7hgneGcJbm",
  "key5": "31yBT94PosyXjUsrr9GCnMeagExDRXu3QNTzjC4AHFJ9j5a61QeQdfVwrtFAVWhPsZzfaofmiVfJc2ArxYriNaYS",
  "key6": "AMvSYisXJwrRJedr8WkxePyZVML9fFNJsWTfzLofrBWSg3xhm5z45un23oKrjMZCiJc4zWGAmC1JsFqTjbZRUT6",
  "key7": "2HeXcY6jDr2bpkAFW9XWouVzzdqetfcG1kmZZFpDbWFT58FHFirBYSEgyJ1ixBpueLyg75UtPGykW3UM2PAVwkPu",
  "key8": "4RHWXMs2F6JwwkoY9P5TMCoKB3nvfxoqfTjsqxg3JMDvV1H1bEf3gnqmAGzU1PXP9BcZkZ3FZwRBSDedpjNpvW9w",
  "key9": "36y1koSWRdZefGLgMrsH95QZkAEmqwhZ89ZTx72LgUZhjhHabbmqCUo1tMmazV7HkuwKQAoeB7HJuCUmFZDQiE8z",
  "key10": "4YoD6mdVyauP1jcYQXp7kwAGxHTYzDWhBaEFq23xb3zFM2BC1nLhV8AUktWvKCSqLyu1hJPG4UXBqDHkWPUxcBcw",
  "key11": "5qk3hjSbsqQJCoXrHW8PEN2ioqffStLecoCbgr6pNVp3w8NH88rV3UvfZMfi2viSyZkaW6ooDAJJQz1UCgakT6gK",
  "key12": "3oA1ujd9k8wLox7Ei8b3sB2qQGZgtGtEEzP32d3L87NQN3gaFjSxMkiqxhBGygnqUGUsLLbiokQYRNX23eA4GvXk",
  "key13": "2Zz4gZzb6XdoxUVZEd9ghzVayaXuj45FbJggRkM1MZBa3vo8GeC4zJEtnwbL8yLy5qji5aDScuhVmxu3qLZAy3hJ",
  "key14": "3XvywuFdqhJPTeaxXhWKwvzX66RXSaiH888JqjBv8sRyBxMWGATr9H6zkFsm42ZwtZVJfBxysUAMFdaM6bqQXq8G",
  "key15": "4zMyPZxeKeFyCk9v6827GbUYL2kBwbbZJxduWnZzhCDs9ttpo2MEuiCxhoP5iDGhuPAcEMTh9cwN5WFy5EnvyPx8",
  "key16": "yXrThngCrrQ56S1JDzWW6LjCXrQ2PnPzeVuuVZu1RLc61TLLU3QNQCX9QxAcWLMxYW4zZtij9wUgnahDL9obyyr",
  "key17": "2JW6oeyQ16CQYhvy4GmY4a3w1unVhw3qYXruCoVXLs446ianDHiN91ym6r1nT3A2GiX1BxibArwR5iF2ADnBe9S2",
  "key18": "4xQmEzoyyXARK9SatnjhnECJgaqtumzEG5yZAZq8oeoCw1hdETVi3S3eznZDv1ZigioauoZHoaaMMhBqVf4mm8U5",
  "key19": "34qeLq916LJr2q5ZkcWb3x6gRJfc7Wb4VgXRjEGkbSk3FWdss4jnHfDagNhY24uB7bLNrpRkcb5RUUX2WBuDexuE",
  "key20": "2jyXTXMa3nszKo2CMVxMnmDkCLS5LekVgifaeZmVuoHCdr5C1KVG754STmpTGF2btmdKYvKBr5Qx9JwpDSSodbFF",
  "key21": "53aKrU8xBemABiCU4xtBUNDYb5oPz3mSSsQg9ito5YeqXRy6X4WjAKsbh9UNEd4cmvhtsf9PAL2JZyEeB4A1qeyF",
  "key22": "4ZQ1UDDt6CyoBFnmmLkL8zeNbzoze5VH5jXd9Kn8jXL5E2BmTxgVcDv9BLSmSYDkvtvSPmFGeJ9wu9uwXtYvd7kW",
  "key23": "63t61LJcKU8R74FePNXosNqg2Yh7pwHTZCA1WRpvxvoN9ZBDxUv7KUP6PKTtydFvNkxqJ587bjWCogs8u46DSQty",
  "key24": "41pgABb3aN2VdttYwcEtag6fLXpz2q9q5p31eBDGPh3YqfHYhHpYxQW7DDViSuHJ3huRUx2KhKkoybWp6jeYCxEj"
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
