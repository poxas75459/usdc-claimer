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
    "2BK24tgDCM3cke5srEvsJJgRBifx38sFm1TriA71G9G26S4Zc6iLgkGcH1T628A2YCHyeMcysxN5LU8Djgsen8H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JK7SWzgigB3v821RqyPLfJVpzRMdk3zqox1Ehpbh35XRxuJ9ksMKkrypPropdiQzyjaytQxQXjYdSVGZy7Ja7CQ",
  "key1": "3BmJMqXzjfWDrfkBZxLeD2VmQKpxTMDvi7waHK2AKLd3K232H94oWMjM9oMMv1LMdbWaYkF52ArV8g1X83rp9FKp",
  "key2": "63H3SPZD5bzvfLs3cHHDvgoWaM5s9b1fBMHEMrSS7BcpxggWsejamU2p2u36EJ93E5cv8eF7jPVY5mD5xhRFrghv",
  "key3": "tddcvWHpZPu4DHFsj2AT3kJBxTsW78vwb7uZsidssHJeTYA9iTuLpJioiRDozD4mBvg5cq8B9ZyhqAjWHSc1w3W",
  "key4": "4WpoDmjqqtw7bV9dSUr3QTo9skpwUyMVYs2CRUJBSKrybgVxnFyTeoPjLbhzy285gyU9c4SMAoN7JnKTMvyxycKX",
  "key5": "3ZREq24P41ZiLNEFJk792QatmmHZ2bxFdEzs9qrXcZvC9YTg3tyqPdbkr3poF1tyQD36NfA5ZEsDf5xAx713qAxX",
  "key6": "2vw57i1Jh1wurMpVMpsc7zExQauovTadCsqrU7hBP7FDcRzREyvqCfX3dwD35o3DnkWfd2NEVHfyZhKPePg6Y4xE",
  "key7": "55TT6s9BVqYzWyZyuxnddfn6wQ29FVLX4c6E7QNSFvMiaP8vpn8FNBS3yMaaBVLZGhzBjHNKVr9kbkd7AhBH5gEo",
  "key8": "3yFqu51TV4h6PxVzit6wkqQdMpfacgEzVeC5AzqRTPDKNPHdtNaQNtbUgCx6Q3tmsFYgmYmmMpY5AZcDTrPKCQyo",
  "key9": "4P8VUmUCuKV1W4iToa2UJX2y7ew9z1hPRL4t1G9VTvppvfeVUcCW7zsbqztpQ46LMtq75d5HzoXkT8RMfCmQaR96",
  "key10": "419dNevXeQNBLCDFyC8PsAuEVtTpKwdoPN8E1Feai63DgUwvRrdgVhcQxye3zBATeuQTVF63siafc4iVKc78wuMu",
  "key11": "2H7H2iFFuxZWHjm4Ew71UZKP8Wahuuuntaw1LwmbKR3ARHF545Ud92qWAZm3Sm4SnCRsYSmPKtrwUpfeGdt8q9kV",
  "key12": "3zeVfioiUXbtYwC872QqBnV5wdLzNm6puTgbsLAC8aiCy7rU4hHwuq1HJ4idPU82L19NxNJgdkc1d4vu9hjm3toS",
  "key13": "4JftPJ2nLq6E8t898iankm3HwE17JkHYVxBqptPSZ5fzp7jagHZrnBgmbNVf5UYj3VWssgWxJ1yR1KiKS2RaFdgQ",
  "key14": "EsrkZ3ZLbsJSp5LJmjSEEvLXcm3Ba9y7zpNk2QZi6W9YMfeeEHikwyPhcGAokg7EWCJR4d2anTVNTFaYMJvxaLD",
  "key15": "2QqiwkntyYiHbZQeWg7JPTJQDFmZRykSKP72AoEBLvfVA8xkQGWhq8vrVR4Jvg7UdvB8hMe3fd5fpiNLJUrXy8E7",
  "key16": "5ULDNiRRNdqvqXUNHjTA9AnhLYAXs56fgQx4LQam8C7E64FnG7EBzqYRpaPH8tsA8WYt93AxLiGKPy8AgYiQRjQ3",
  "key17": "44vm9jn5kvDYUwn5DxTKoKbvCVsQMDXx1pZXRZ1asqga9LvGweAtiQ3od8jD3AFBzK7dTqBLLmLkcfDYKpSqSZXW",
  "key18": "2oQBDrNbTekaHs7Li2e7U9kfdCyaiYBUF3NqzreU8bRXXRRcT1Z8Q8CLubAxfuDHR1KjfPNBu8hWHE6RRWy58aZA",
  "key19": "2aZsFMYqi9W9j69SGqY53Ce2yd9yLmYQBkUh6SFa3i94aUNTRpakkaDSgTaXiGjcqp9qjozqzv8b3RZxMVXv6NN8",
  "key20": "2F7TWKLCgZ367e5uXnhA7ATGokUEY3j6BRafwsBSDXs9YXT4UFph49LdDjPBtNHpSL74VVcqfVpGEMdQMQkZGomL",
  "key21": "4ZvrGcQZABrBDHHiDBTekaRBTrdz89KHY7PqH984NWWBHyxH5RbLgAKaFxqV4ZeeXLXLEgPVK6VbZqp7vnmgVTWA",
  "key22": "53q3CL1mHihy5FCzLojCobGTEAiSzAozyhyDUoEW3VQzk7LusCmv5BZP7L3C2AiUvyBbSY16TANkKzEB2gFSerVk",
  "key23": "4jqPT7mh47BoCdtU3D37WNYTpGVHPyKUx6rPKgzL5HsVjXuhgmDfkizuevu1aLdWb2Wq2zdFdNgj4NA81yiK64qJ",
  "key24": "2ay8Uybgn4WbC1D8wTiM2ZqPzcdru27ZxqYAamweGfcfRgcYd1AsQXwU6wgGCpYbh1AgLgxj2wPgYsPsbrLyVcgm",
  "key25": "3q7G4Z1d8KMbkEemFSSQV25Fnmkcq3uMWmviJNgD3p2vgn9B12QjMeKfRXb1JvpJbLQ6zESuvQKKk6stUQGovezy"
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
