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
    "4o6fqocnN5CySNTYALdXyeKhKL7U2LwYA1LEkSW2tsUHaksLiWFtBEj2ACYi8vSpKxoF5sxwFCwqj66RkPYxwrA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3iZQd4b3FDBNoiXALrTuo7ZLsCLpwuDgypK1MMPnJA7xHBx7MwunwcrKGGPJU1XoJp6fD5oQiVvgBLET2oX6HD",
  "key1": "ipZgeFLcs5RvKP5CQSR5gv5k8THC8eNQJNh11FDwvUM17oTinSQwTfWBhTU1hLWhG33CziP3nhNAiRSG3GQdw7f",
  "key2": "xkEDkVorBPp2zfbNJH2Vek3AC9mTsq662fJpcvL38VjXVPnLwNQUBYSX1BernsRi88Dxcgb5weDWVTnpt6qcBLw",
  "key3": "55DeGgxFk2sKbkvf2PdPXjTXP4LWAdhLctEUspBPRpZQLhiXPF6kcbEFBxr4QZwsV7KG1cTsdD3WqME42GUG8cwa",
  "key4": "2AbzPqo4vjK8NZorcu8G92jNdwV31zv1FewHVuVyW3tc8fGtNxFBJPQp6MrTxDhwrzS1e7KzaZfaJcf6iMz35hDG",
  "key5": "2xXUTxWEcTCupLnSLpNKR8QouUdmyid5KCNgKEtsAdUWbAH9LUD7GH895YV8gS5pLiroU9BJrKm8S9rbkgBJDWf7",
  "key6": "4Fh6UpCai9X4kymt46gb9PEaM6q7CwMhaN5DU26y74DdpD3YRH6oG46CQb2nTD44V7MWjcrhmgqfuJHi6Lg5bYgW",
  "key7": "4JU6wEHuwWKi9LRX4mRxAnTxjsHyu4yvcUEgwStxu8bWX5ikskxqDkpVcCYaDNtakLZcb7xByP7XUNye2PE9xFRK",
  "key8": "5uVn7XG8swA21vu37Pzm4wJUZsgt4VGyw29jskwgANrdqMuMqhngMCvNtt9Au7RaH8hx7HiT3N3M9xepqZ8UyYym",
  "key9": "ZKwuxD1rm3ccmBK9C9pdFqAYK4Y2gLriEXGo4s4RfHzKhWSrDn4rPN9sNNVGwXNyPKov72DdbDR3ffa5fg7LLZX",
  "key10": "2qeShMEVnqL9U6KcuHyuVfLXAbp3xWVrYGorMmKCLeZuhpeAURNhs4CUrQPZy7BNqHPDMEDY8Dq5BUyUnj3UVCaC",
  "key11": "3gMN6YY8cQNULKZiDWG3UbBE7Kxq1NQq6hiGrrbkwPbc3RGYjn6b1VbdmcwfVbQamB4kYfvHvtqBBST2NNCWwwU",
  "key12": "26aA8hUZ1UvuFttbynomp8GLBSVtHmfdfBgNLauuXBP4EmpyJe3wAT2J2Mh7UpuvCm4HKfmKfcTRSxEwtbTixR1H",
  "key13": "bfnxj4YtPMbrRVJ9JKhUJLNcQBpvHrezPVD3VVo6r2ahfSH4pnFRmUyaVgspC7J832tNR9vdksFZuTdoMwT9hwY",
  "key14": "43AWhopNg5kpfY4nSHPh3GX6GVZ4JSnfTxi2pDrqfjVLv822jaUCZ5VRG42hamxPNjcf5uKJVRESxm7whcVES9Ur",
  "key15": "4Znqb1MipmahCn6d9fmKrUJdVZpHPa2o5QrmGXpzbFUsKxBdFdcwRHhcVCaSaDSxC5fD9ak3S9R6fKJ6RSMbjgFx",
  "key16": "2jE3LzmCVYxkU8uR9wR5rDukk7cWVQqcZcLwV1WjHN6eKT5v4VBx5zMtxgPD5n9zMuFyTcWGUGZj7EgoVTwHfETd",
  "key17": "4WKmvDvzzGLZsHMcBecTLbjFzpoAYBZcf1mPAuwS5AbzsG859t39FwX3oUyQysHrnpR49mPxvK9gUM6mgWZ8pvUP",
  "key18": "KexHkRaoCELHFsSPNvjdUDctRnUUCvPyRfwwLu7XK7RY32rAf5iN58eqNtVDrwgbQnbmHeB1xh4J6tXjY3B9xJC",
  "key19": "4yY7xTPbeZwrCDsbdF6SeMLXhjNhPEwVnUYthvdgd71YMDfAJLEne92MMHRmA9FMWHtVpKZzDidbfReoZJGTujfy",
  "key20": "z276ozLe6qpKQXbftPdyMkFuhx8DWqqgZKGQEGPMMJHyxxNLfp376QWEi6AYSKsvFr7ULfSH4y4PMphKM9PuA9v",
  "key21": "5PR7zEGMyFwGTFtfnXXWsW434kBAbWojUjmWKJZBkLcFQ1YNrBs5PPMu8uXdACUeRQXWX6kumJtYWcFxMAXvkYJa",
  "key22": "3eEAGMYdikMZAhXCkCupLaE3DCCohzdCpk4FufX95noU4Bsnp1Tps8Av6GpeWV1rnxkSCiWMxWdtKkYxAUUP28AE",
  "key23": "2XwKCWsVyTBr99ghx3xEGrxftMRPfYT7z83JsEm5meH4LaYXtE9Coe6yEgTXaoi1BFX4poVafmi9zXscu1Hf7C5a",
  "key24": "2JmLpCZmPn8vPWkxXQ4gaVpPLWS2PH1PA5b9b7xvr6hZJfbTiaoxMXy4JHd9z8pMfkyUQ86gfrcc3ArbQTHoKU4K",
  "key25": "4Fygw33qyr2v9vWtGnSpwihNZEWdy7ipwPL9vAviXXKBN72xCqd8CWKhgUvkbeTtakmPYDuYzEsL3ftUQngSo3ss",
  "key26": "BusV6MHjktMKhYJfJRkoDhkAF63UP8s43GpoMyPkia8e8Gs5YwCs7RuNA4VzDsjwVgi9oG2hqxWaB3MpSLWwL89",
  "key27": "nZc9JCGcZvD9AAnqkwouj2PmFyxv9EbTj76cBKQWLr4gNmHCy1KZkJtN8NRkbNRJTvXMKoD6gF2QHvLU6Ngs8dZ",
  "key28": "3y8PWJ8AZApkPZfm82sHpTu98GFhUEn2RbqY3BA6ZaA8DP3r2BLxqHiRsENs1nbWecZ7iqT3ZdZYHLz34tmEHWFp"
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
