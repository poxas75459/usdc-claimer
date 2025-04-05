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
    "jvzQr8He3Y4BS7Y4Jcha2nxzY2a52eMRwwXF5tbS4CsRtuTmKbJEgNRTtihis4SF5ePgTd8U5EMyjK1ZXwjrkYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmiAS6i9xLJnuKzdtUeFPvv81BQqHFqRVJwdmPR5AvYMByPXZNcaxY5tn52d97X6foogpdPyGq42DtiFgFAGBh5",
  "key1": "2Ffdm4dgz8EuR7EzRaJxdE5ZkksrAz9yGt786qzw5srm4kzDsLgYEFodwdu5dEZkBqkBUDd3vFPZto35SZ93Zu1N",
  "key2": "5xDACtkro83E8xrKR4wdJq18ddDZQsRa4fz1fMqv4NnFDmPbdY82jdbKnhie8xseFhc8EKnobTDvf2wyz8tU1f2Z",
  "key3": "576odUxejFudpuSVY9XpxrEiwHnrbvww2J1WoiRCPSxE5XdEcwBCqfyERWHRRWKVv6K8Xq4J79hbujJ8N69YgLXu",
  "key4": "KAXSv1t8tamW54DCkw8QEe9rQYKUSmAAqtoJ1KDaapntMJShMmcPhbdMhHTG1enz7UVrNmzMc68BkMUBB5N6yS9",
  "key5": "3SLVAt7bx8pP68gmtKFUtpposFsyV5QFqzrkJ4kPAahzJYAGHaNDEWfHyrre4a35ba1aLMLaLJAuqgTfANZn8897",
  "key6": "vqVi3sbz238ngs5QnmCJttAaBZxPJRuBQRCMq6Nm1CSBVDc7UEDcGBDCzLeEsDtQLi9U9g4jsEt3eyuteBTKUhG",
  "key7": "4zjSBN6QVJESCuEFi6C8NpE2gtwfqFyQaaHhHkBzW1JfNYvStvpXT8na9TJX7zfSGMdEiTXyAKQmWKihZG8acA2V",
  "key8": "3CWrGR8ZXRHNJecTTMo3XET9t7QHq655mvVzdXB22p3Em7LDxZqeW6obZR3euCYrh1ph6zyQAwsujqMirBAjup49",
  "key9": "4VxUoiso5Yr89eQWVaVRY7gh21Y17L76T9RgYHDmjwv1kjtTcXSJnhfpCUWb9KhdvmA5GjGFaxFrFjpwd2XHgUvE",
  "key10": "3cfZLoQ4ZaHqeHtwVriKu2YzZBgbBBiK9FvWHaC1dwPzbpWoNiFEFPk6VAtD5TgNTCpR1dYJxRJtBzdZYyxYMVYE",
  "key11": "5QRgKjZjQwBUWFsisFWauQuU9yLvs5N7agD6cEs2nLScy89RhvAS3pVJhFXKDJDskMvdANJdu9vP2TWWH6txygVk",
  "key12": "5nkWDaemwRMRzYDnUskS1d9pzLnjAZFQZacPDp9tce7HgAeCReAzA4thYBMRE8EUC9W5YejLKahzB7bS8ZAYf5dG",
  "key13": "4n72fgiqpbHb8r9fHZfTg7saUAcCnpffXRNCefjdUw1fMkTYEuAsuvphVUBFurB5DrtTBvbHZLBJd3p8pS7p6uH7",
  "key14": "4n792at1L7DATLQhKEK3XjJzrCPqBAMTzw8VNeYSYVmMUiEvhC1yUiXQnHdZDp4FdoFJHQzCGNYiTUJM9XpWA2Zz",
  "key15": "2ULLjGX2KVC4jxJV9jtkjNgtMKjs9nt44DnQKdQbCw4GoLuiZKuZCJ2XcdD2QAUpBGiFdG4GJckMVW2wiVLSWChf",
  "key16": "2HWrrMzQc5Wa6u7P43chkzotoPdgodNKvJqKKusy2c72kSmrGPiVXYiCoboFJbzHUjbDeBMpiN1FFSU6LmJ6KtH6",
  "key17": "412ShGpwiHR8yBfXtKScTDpycTrcgSJR3jQQq9zK8fNVVHZrA82ypmzQdviW9YckxSg8kCXtHBAK25DYG2ofZqNV",
  "key18": "Keyi6hUMmYDyNavsWSCLAKojuHqivoEAko6MdiVbaFzEs3Tqv2kpk8QWQReNxjd1BNp2beTThnB1SusGgSgat6y",
  "key19": "5gQGkBMUyKKiEgkjszucbLMTMEgVBjB5MzqeqpeGTrB4GJBJC4oHDFMcv9shi82iQmhprXiQjJW9rBm1dsKYpfrQ",
  "key20": "21jARr8P69MgGPqYiJA4RN8pRCF7zvLnmufmhB8kYD3VHy4dUVR6d7cpSiqjfZxk3hcqKk8U5BTivNXiDMwevniS",
  "key21": "4unMPvEsm1z5YANH9H3Ajo63hijiuWZVK2zKSemjM7wkEV8mqbPZANUvHvFtnmcLSEfZ9i6Nbkq7Kgtz3ZJK91oU",
  "key22": "4S64DAqFWa9DMSHYB4eM3gaKtJTbTu34WgbvhKdR2q4HobNHjkz9hUERkXFvXM2ArTSK1AuZiQvo85C5vwjCWAES",
  "key23": "2whQsr2V7yNHhkaDpTPtdJRrDBk62aWQBfukYMMSTDmiPSuVKvioZ5WfHxuzHsJoiSBH6Sc8pGaxkqqJ7Kwfs9k3",
  "key24": "4Xtk6VAFMywwuQBc6zpcMFh5CNZGHq9p98eamb2J2iTLsx7UnJvjE6UzxWKMRKJG3xDxsFxP1Ab4hTp4SiDWdBMP",
  "key25": "5DG3PXN1z2rjq3xhUNhYDEud5YAw2TRBwj1Rcbk5ZAs5tTehgrEaiuPNAAacJDDe61wHyj5KNV5TGURav8zFnyBP",
  "key26": "5NU2UbFjDXJoEnPJxVWQmB4igvbg6aqM89ze3nqtxaVTMFQBDix2oUtL26XjrDrmVWwPwyhQUxG3KA2EVbRe1LxW",
  "key27": "2mQ995VBPrFjjPrtqHW3SRqTdSkGa3GQbWkCNybQSexMn357fYGvhivL1mw3higUkeAMvvcxdfYTxYVFJVRzzpbP",
  "key28": "xFEBpRbnv7At3h2oKESEGuhz7muM6VSBpKwdazhE5mBKk99FLXx9btLzRUcWRxcEJub7NUy1g98dHTKwtxgUo7i",
  "key29": "3QjyXWZ7pPyEidw7wWhNCYVwZRrzg7sfzU8HBaXUyCH4ueahefuCdTLcCiLndepwqm68GgtpwvyHmX1XkWqkXqn8",
  "key30": "LXy6VuZ8oZGNHNvvdNHpJR1y8a99S4tC9yqoQSdUjY25mibAGQoNv1i3XzaTRcBhtJtyFQrDLTBimjXPVHnyZ1Q",
  "key31": "4AJHUtV2LgWPFQNe7CT8MXd82PuRRYjLe4chYYFsHoq3DFhAn6GKSAnmeiEuUQXuyfcsyGX1i95syTbHxFVErkJv",
  "key32": "TaGTpRZY3QHYNbXYUFWeTxw2MPCJ7ixow9H4bi4RyBmjuj1m8CQR3oQ3R6hYmkTyPeXLozpYcMiuDtekWiNnMma",
  "key33": "3X95yDRvrjEc1NT1qCKvXrCVVXSsUrK1SYHJAuxVeLtK34tuUQpqgywfZwY7A7QeT9TPw9F5SiMXyfWxsF2Nsxr9",
  "key34": "HwP4Wo9NYc9FkXceggP2hLAkiLUB9YDqPUJW1vXs8yoQwYmSHJk3vYKiLTVkk6rKqesNUAdHnaX76dCYkeNARPq",
  "key35": "5azwHjuV23bVBQbowGjVi79HzTCzHMbWcEpf878QhZLChjEnMKdeGbS6B2opskByd9aFWvBGHPwchWiyqJAdGdvS",
  "key36": "5Gmr5BYjut3nFUz2ep5ZNURid6znbta1BVV7Gbvzqz5TdiyFztmHMeXiNnFwCaVtZB6Vp17w6MGhEvD4nbFoH2A8",
  "key37": "64orun3tqQvtbi5gJ4ebMk5UmES27JUMD65naddy4EFgpmJdfNXLobWJNajJXFxwmCCzdGJM1kqWT7mGuFQqT2Ex"
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
