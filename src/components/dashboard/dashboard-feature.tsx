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
    "2JsbVjXhB8e1XbERZ7FfCS4ScrKsxJx8o4DXryQos7DBYMFkdS6XjCVJGr612uTLjjxAqdmF3NXFbCdgcr7rarXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvysBfcAaa4PhebaLw3spXd7y9wpLmK1UU9kWiBjfGFG6aJ2yKj1gHh372tDeqqQ6qEGUi6nAsKNWQnqxLf8uHx",
  "key1": "2jwBzQp1gu82NWDGP86xuANznDQrLn4gBPyH21v5z2tqmKnpyvy6B816eCYG7vWPCnAW4YxUkrGcMgMYpcKK4RL9",
  "key2": "2auihePT3KRNVBxQk6EL7h7Eh6rC12vVC4boAThpsc8FLcFntqZkDFW4yWTXyMxHh6wVqVop6LqJMckBXDX9PAxK",
  "key3": "6zZbGMYKHs3n6qeRE5EWuAY38AuSadC6ibCoEXYvUxhuGKqNWXWuszJZgmUpTCh3pwqmzWRMy6CsLfcwtBcBGQa",
  "key4": "2YghTo2HLtSQ2MbZXi1QsG92ymKKg8jvPwPU4nM9U5Bit1YR4sp4izXhAwT3sLRZhcA9DAXRQZKph1YAC5CuYJcR",
  "key5": "52fJ3LmMGZapVZYgv5xiDYz7gQeMUh5pPSuThR8nTHFXwrmtJeD1VGVZ6qMesoVEA3Gs4AQgDvkj7zBfSJ3f6eC8",
  "key6": "5AUkXt7z7Fuq1dSa2zHhxMTJgKHAKGocPiLqyaLyzxt6wmhxwif5VKtFAn3Vj7fmrci3RJkBNx68SReTGQtp1vsp",
  "key7": "4bTbUx7rQYqcfq3ttm4u3iSCdA6XeN6q5ugv4LbcEH1uU5CyRuCTzoBKtSvU9iz9f7evD9xVeUL6gnqAjX2FfrgN",
  "key8": "5Qi6nMA9vcBZmAHzDBoWaRyoMueW46RmYJoy4Ag3wVjCzXjvKCMY7LiFZfMFEXVMgW3js8ie1MdFSd7ZTPdHkAJZ",
  "key9": "4APecLxP4d7MNyMJqWDZ8XLQF7VoKzS7SGYH2DuECABZjACUtjEttn17s7EwSY9xM6TJGEuEmWmpkBVg3feHPkMm",
  "key10": "4zPRbSLzCz92Wktfna2D8U5832xdrSWhY75ch1eZREPbkyJbCXwxUR4DaHwsWS9DQJb55rvcqP5YucwpXe3SCzUz",
  "key11": "5RtEW67TizZsphRsMSse7ge7dRgdUzcWa26mhBujHv3fvBPQv7VG3MT3Wq7jQorHttzTALWxbVSvDwjFkgGWSy6E",
  "key12": "Ps2MnDo46jTou4nhVKPwXAbW3vZbqygbxPA2aQDT5SbfoZfaGZnn5zrvVoUPJDyQQ1Qnso3ujbBSrpWu35ZmBBT",
  "key13": "4KvNDr48TNExB1XVvnfg5QgifLg7XDL7pFQmpFEKPNqYfPSiWiweEu84wNbThVhpMhsTcuweJ5W8vMNMScYneKuP",
  "key14": "5adPhvDG6cBbSnfTAvgMT9qXC4djxaSpqTE4qjGPL8qqV2cGxUtsLBSPUASF6CVf61PBNecATcwDmgg7zGpknWWf",
  "key15": "2vNojZVeNBkcHXkfK6YveKXWB146J2gBWWTrJJLqru27ze8JhrSuxDfsYYecPJMNhxBfv7zuAz9ubboux4WSxwW",
  "key16": "2m9WY19LnUnE47G8NDqDrehL6cKwUWyy3qNVRHn55PWJWUJhHg9aZ4CRmMZgv6Q3p9Ahj4ycdGMWivUbVWG8m4Dj",
  "key17": "2PujBKrpojVZhKQxwmiJJiBX4rWbvMuBPjcfSW11TFmPP5ZzyHgxoThHTbfWtghDkHTf3d1NtDFBfvpG52zPw4Es",
  "key18": "4pWrKitQUWquc1wePR9FTfKWYv4NnU38Z7WccHtuLRiLGNUh4bPdzwwgg86VwoLDTxWPS9bajVeJ3YCd5jV8s6kY",
  "key19": "t1JTQoCyDKgphmEkb49ScsR5ZxPEn9xd28qG2k5BdMPc7Qyx3rKK8j8kEk2J45PqYh2d6ARfLyWAnbz72kTe4XV",
  "key20": "9go4guK4jxRsXtj6Z35eeUtHnK8NP6SX63kjbpPv7QEtkCoUqPZjLUgrYfisX2Vd744EPD3rkkqfnn8fkqTTnnX",
  "key21": "61AYk9e31vEp2LWd49AxiT7158kQxzb73kFEuVED4tXsaxqmt3kuW2JK6BKgTdjXGkwbwbt56GZzw4NKedi8sSL8",
  "key22": "5jNyiVjh9zDFwJVPJfFPVJfBwGSY2BogqnPQzf29G2vFZFyXCNGWnGBzXeURbB18CB3Lq985eEv9A4G9wXk8bL4g",
  "key23": "5xUuNx1K8MRvnt3szmWMPAoSsykkyt4denNqWRq1xFVUycKkC3712dxaaoeATZR6XfMQEan6YpAkHotxJQBLTntF",
  "key24": "4nSYsZxyiaPYFgqPjSqFNeCwMJrr2ijB9GmKRqy9r9Wu9WpvnVZ8MNQQa6DyatqrJnxu8JHjc5JdM3Fc7HgAfSkU",
  "key25": "33iwmZ8icAvsfndZmCaJhNXdKrVyT9DyfEvtRKJMbZjh7j7KwUa1NekTdqYXuiy7Gw8PjiNL1sNuyeDV24jRhKX4",
  "key26": "5JQx4T4jRv1TJ26qcvosgTxqPgbtwW4iRNND1hFyLMxwrm561MEypdAmDSGEzAYNHXJCSApqzKTzNscB2NH3peHK"
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
