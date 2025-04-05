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
    "rWbuvVeDxcPymLdnjAVxXuVLfseSvSZDMBHftmNpGFDqy6xN9C8aq8Ui7oio3ZaYFcBa5SEYVHPh8FBtTxVjtWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FN9ceKaE5tejXWNmREz8eNnhV1irBTzv7b9nWVcKmiGWKx47sAVHpYRJeUKzoGvhsRMf7d9UoVk7cyXbhEWFPwh",
  "key1": "5KvQB2T429uFqo1kuQ9qKvTo1gEtK8BtZjYnzdwMpuPodqWr7BMNzMgySpF2LExoc2vHyYpPqy3wqqEpW3ewrkAo",
  "key2": "44zTfvBvfg1f1c9HGV3BYM9CaRGZcMrkNMUYFuu4qw2c9pYK7DR8d44MsUSW6HcTXJSsBsNWKKep1WcMVcqKZSXg",
  "key3": "9LSpdeDt53L9umLYh3DvB8V3xqnJjLdREeJTLut5MkB1gCDmQBW1FNJyivLqPCRoaP9zELS8cNEAvEWJRyajtUW",
  "key4": "47c4Y4ZoLXcJ5XK51hqTHz2RYGMC47RMrds3GakFZXrw45GQ7yUpP7xqZezF8CvexfSDDG52r2JJKcQJiwCjP9zC",
  "key5": "3urwB6NtRmjnrZ1HbFCr7hTtn8mWaSTxddeWY4G1xsDB1UPu6cW1jMEVWDkyDZuS2Qsqcn2upUVY5BPP329bqWK3",
  "key6": "51opjjbgAaNWKkJjQddW6jiYdXYqfoZbSUtiEKrgm17AZRrkQf63dbsx2xD3crEZgAnraMJJ425C1ky4BPcBxAgd",
  "key7": "56Y5TaiE6AZwDYjEm9ZQcEQVFshhsLJJRfYQs6SHidhwzKtxzMZR9BW54Y6sCePMY8QWw9ZitfnQgw9hcN3SB89s",
  "key8": "5AH5gnAYxQAhcNYSiG2ZDR1bqDp9WiKv9gJYwCbw5ZngAGWVytzvEnWBBm8okoGiHS82xGY6ZUCweWQVeLAseRig",
  "key9": "4nPpL5mmXfXmsb2skNXT8TX5VY3gudNGYdShTSAz16BJy6xX73j8CJdRjVspLzGpfYVKgoM2SgCeM75t8DVzDfHK",
  "key10": "h9TdpgxYRrcgVCcKjqruy5ScR7fQfC7bLemYogRmYKPbPKzFF4zVTttRHg1rLqnspj5F7mvNUEZYorr6WWiCGFT",
  "key11": "58BvBqznzViVzjkrMKsB9coFdXLmfqKMg2x49znjB3yz5yMu89Qk3xNPmUGvD7HnYsXtW1skCAFscCcTEvSgjQHY",
  "key12": "5p1buBzHua6bhT6Y4ErWDLrgh65YUr2xbC37Du9NXATQDjFgXoc9YkNbEn5cafrLrvQn4bSqxHam2HRTN6H3ERsR",
  "key13": "5ZfwnAgbBkLrgQjUnYpmxf12xQgL2Hsi9X4Dxk5qDYJaCBL6mUsMVwh3KFKkPHAiZYhKLaCckHpz7PhEy5EDtMmo",
  "key14": "3Z3ZFKVXTcceny8XEFkovqX5S8DzCieosdyBLS6iHtkffakYk4unnUQez8v4chZjJDSzwXzvQox1kfNq3xag2Nrx",
  "key15": "5zTPX4UMkFDjJDd8MP1sWS5amuG2drmh97LpVnvaSj92aKXwKiCkJqC1k5i2M5Zb9ACfHzVZNn3EgBvR9SGSJEmU",
  "key16": "hbvQXKPd4jbQf4J6vjA37UWf9iNQeoDwdpfP1MpECPBEfkhx7on8gbXQVALG4DVdoAhuiUw2T51NLVtShEoGkHa",
  "key17": "2hr9zbeZS7SDMpGemjhWCLg2uMxqMK6xLXgU6AsGEjj7xknZkYui7XXGJtBSWTxjAL3xATQzjUDPCxH6dSugeRvd",
  "key18": "5cqBnBFSU8j69Zc2taj5NsE88DvaxMte4kKsgVRcDQUak9nn7Du46ogopDaoKQCQwaoKCxM6VSq43NjeSBdB8XYV",
  "key19": "4QtSs31pmTQ1rTQkqZQgMpejb3vYro1bH7UYGtY3XPZgq6CicggVZcUqySW39REUckMQmT9D6UeP4jSwj3AgotF2",
  "key20": "3WNYamQb9Hi4Yv8iGZDLoGVHHuh4rRbWVTgqehzH4ysYUeSi4Dmgjr6q2a6P9DpSC1mEBeydJQnDNZscWqjD7Q38",
  "key21": "2uUBaGHvFEqe97o6AaYrrJApWJeg1VHEjrCCq7QQsf5zyy2ysCNF1PHVYecexacsFWTmYwdquAYAGGmdbHhXKfyr",
  "key22": "4vWREaRHrg7TS1ziqs9foGMgVoMrtJ28bxgsC4a2VKQ4KToFsNHn2oRjLz7W9x4HB1SN7HqPbfErQAktKziXftuL",
  "key23": "4nTAbRQg6oz5oW1Znows1eRebJQR9YxApPekM4dw6mCGGGAFs1CNAG7SCeNUNG4kvtso6rzfBqJKNqRTwHdvN6ji",
  "key24": "3gxKpYdiqFGkZrBgUL9RmdCVAE7sPvmiRiLdVWGZFWgkUDGuDxSS1TkX3nQwkKwS9WML4SavtfnKzm8bVxNVCPCm",
  "key25": "5gVLuvVhGDMdKWh5xRo3UdLHHS1LBPHYLqdnopMpir7z1LMncRN9w3mcd7EDnXkFYtwHLhvgYF4V6122HBKzf3bN",
  "key26": "5srGPZgojiXpVesjtEZeQ9AE4d8Z4aVPUPjsVWjBdjLYQTt686RfctBKNFkVA8NZudYbvdVTTytHPecuX5rW7tXW",
  "key27": "2pyPoo7fkJBvrMESGU1pd9EU2wuHTvtoxkMpuHRP5yZSHd9AV4GufxK1k2oLrtsyyW3i6FAFTryeunAGei7t4Bo7",
  "key28": "ncKgZJtB4H4TmV9hBxffUBXPZad16TjYf7dAPRLAhwYq9iczgwrLkxaG1Vs8R7w58BePv4PsMyk8z2g6Q8ofjkb",
  "key29": "5yLL1Cn1Bi6TT5ybsdn2kFFr27ncSKrmterWrE1h74Fd7ntU8EzwaDGNbk7FYJuzUxruHL5cpmpvcdjiYBCWbDpQ",
  "key30": "2bkAM3ntCNpUqDCfemsVgbCKVkhwxCzDBsraUxc5xs6QRgQKZkPANSgg3km52oFhVaHeZZBgfagWQc8UnjbEocak",
  "key31": "53at54vKyVtiiS4f9ESXDt2rYEuT9Gis9fVSfDKRUgJkGGuFpq7T3C2VQJLJB2sHsVVor2zdKLF7THpbQVkLR5pX",
  "key32": "U54izhLvoeanj2zjV7rXyPLCjannoamyhBdrY4tgionExFKMCabJf39uQoMnJZKTCd2kTzibob4ZjqQa944HwqT",
  "key33": "Sck97rA4TtLze748wXgUoddwYPyrzNHzzTbgyFXsAv4USDhHdMgULQ65DRsr6SxsuM9o1szDyQXVtofTFKEAgpn"
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
