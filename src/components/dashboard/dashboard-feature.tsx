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
    "5vKGtjUAnB9RRMwWMmDELWGiJH6CpxUD96e9Amhy6zyGZH5ai27ZDiPqMzJmAH8s9u7SYRSeEsxAsaMVkYBmm8mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRHrCpBX3rfKYPNaa9YKNS9cML9ZEBgt1Qj4urqUtzLJNAPkTi61FkehxvmFqoLq9j6UyjA7EEBQHSVuRXrgui1",
  "key1": "2mLEAjv1chCirvFXKDw2tL6dARNruqXjvftyh84v7fRYKZFHSLStsE7vy2XPXe38uozJkqqpjYRNpPGQeG3mU221",
  "key2": "XBFXGjf2ZNb6CnN6kAKMY3tw1WZ9FmdXDZHiCsHEN8XBNzmXZud5AvWJNcducPAE9N7zYojoPT51Z7xprqnFUAU",
  "key3": "5Wi3dPwbSTvg8zJ8PNPT4Y6FN6opF75nL5irwbTHRFdvEUjm2fWNUj8rodoqccsMZrsLWUpZF1zvBim5kRkfwzmK",
  "key4": "3sZK6BHsr7Kbr1akaBEZKttVq2zEmQdLDFv1JWFw8fGGySaSvoHycTpjqXauoW8SSnpdZK8vS4SdxEdqrjTpcuWd",
  "key5": "3DySv96YWEQKuHM6ec7j9qq6Qih3dXYZHiLokwDb2yP3TurjowB6oLDLj7ZnkEnV9Loc2cfiGnCvZRr9RNYmWaft",
  "key6": "48FVvU4uPKkYjDB9nxHcWRTnDWa8hH8QUoSfiTdjFZrENGTRgrZqV7eLWR9re4XqAKA655uE4kC6wg19qzvU1LmH",
  "key7": "5pfZAofdgEAEypkfwnXW1MPANKUxdzuuRCsgtorPT6ZDjeRgxMstZf67G7rrSVvdGQHwhCakA9b4fTvVTdqTqtmV",
  "key8": "siWJqxCYKGfB9gJucmKZmeveRQQPccndFkvcZC1oFDqnZQy615XQztv4RwmwxNagp2pQfAUuyUEaNdiVNdbt7F2",
  "key9": "4aCmmyZAYJgKfmSDnzDSywPvtKxyLdoWDw7BSm2rXpfyuwoAGG2nankZwNJaP1zPFikzhDdwFpx7HxB8wvHmZiRv",
  "key10": "3TyQBeRotDL2mbUipjrfSQXysph8HdjUqECVRrfSQSb7FTjH2T1doDXRgpbkeP3x3WpK1qCXiYtE11HfQzHyGQKh",
  "key11": "5p9RvNDHiKyXMqPdRSLWUtiCZeuwCVtEJv4CkJnbSi9XrKWNGqChT3C3PRGjJ2grFRdE3rx7nxuviidioEnBkSBv",
  "key12": "5ZM7kMy7Lg66rfCMSL1kS2M2J5xa6xyVTQ1KkK9U88RtL9f9de6kTSxzJ5bgVt1xSY2pSndhEFwm8myatjny1sgN",
  "key13": "ytUcz19tPie94d8JKv1FU2vKWw3EGqguev23rgm6eZpFUnn3gocJhPFCVQV2iZzCLiktZxQWB4tQiGNJkurtdyK",
  "key14": "W5RuDKfKd4UB5Ygdw7rqdJT2rkeRsJ4m66ak43KmBvv4gaemLDqVCbfg1Vmz434AgXK1kfRySFaSzT7JkJne7qY",
  "key15": "4XoDKW4apau5LBBCefktLcds34Hn5GZWYLvR28GyQ61qozMq9JqGCu6RpKPMYSuf3ejVzfdC3DLeLBS5nRLXTwX6",
  "key16": "2uwpkKSpF6QAHY6vgBVdFMbUURkK6qLHoHWtNUDE1ENU98T1kL18U7Kw8SHKRhmFojbtApr43vpLjU8kKbHDWabi",
  "key17": "3UXuwQTHD1RcHaRgNFQ6kBsQ85nNn7DuErK5JXqkAzUUqJdramskYfRqNJNDqUPuXdx3k5n41RbkJ2wQgskPNqKT",
  "key18": "2eNBw8oFiCsywAUEgr8GSQwPPSJfWXDXWW7eEyYWnxtZR5EuJhKstv3RyyS4mU3Rnm6N7ikZLosvg7au3es49fHQ",
  "key19": "4REcbfkkdQuwtt5xNkC3GAnq6RZX6jT968y3zbJJpDdBkoE8dhodawT2AAsWY6CFjVfKSmpoTAoMoPi1pP1APybm",
  "key20": "3uEPzaCsBH92TJSCP7fZ6SPassVCkwN2ZVjcqZwBq59pUKAnCVGqwii7oz49Gq8Y1t2XyuD7iDaFHAUizwyzNYPA",
  "key21": "4QZCmJBpAeAnGwJSWWkgF7xKV9SSEnvN3gUT19vg7jtdoZviynCcEd4pbLXhEuWZnfVqwm1KMzpxZWocVpML5R3h",
  "key22": "2h8TjDoEnu57jbBCsba6bnUBDaVgSnmp7JRHGBXk9samT3exuR5KuLb7gHHTxvekjY3QvGiT8CFaWFC6kfPNPBUo",
  "key23": "4xVBNkUwNPCwrh4bWL3s2ubiHEpdknxR4beKwcgoT2qySC2P9K2u4dQaHLysB9mRp7MgAWXxCR9hUGDuE4WR1cus",
  "key24": "58C7BU66L1yZcRm6tDeZN2y9RSRKnTQS6mdW32zCcMTJrLjtnD9a44VkFNbhBKCDhrRCRh8JM4b4BAxdgKFnAjQ5",
  "key25": "7moGKqy4pAsvR11Gyxe9sV1jvoc7cPQxxMwzWk4b7L44ZWJ75XjQzi6VcRx6QWowG7zf62aH3pG3b554BZCNvFP",
  "key26": "4KWN17WirfGkhTrnEkP9aRFiueoCqQ9yc52evDtDQNSYqskHwHovnQf9oGaZLtyju5tL9WYnB3QhYL1LXhd75D4z",
  "key27": "URjmRWBTbZm7usWUywxmZx8vovUAfpAtaXAydew4HUEb65FktNNP2ji1wvWfyPU1LG35HhiDNCFxNAzdzNrCy4p",
  "key28": "5i78wqnifSoZZd1oUt84YfYcUrkTcNn3fRi9Q3LeYp5nrFFQDMn3TYEj5GQMWsuhC3FqdbnFmiue6DWzmSer9LZH",
  "key29": "5URBErMxVPo9z2eGNbJDs7moStnfewa8CM4GrF98Ev4mDikiNiddfsStqBqKCsdxZvvZV5Ewu8idP2Ew7fqH5NWE",
  "key30": "53gqS3FZmcMJJVeXe8YYvKiAfxwie6qMeLYTPrFuP6JpFnYgVJJQqDDVZdE2VMwzjTfyBBz2hZqK9hvHhs1Quf9N",
  "key31": "4WRqHmpuc2T5tu2bVGpXE3avsQm1iZMRLf74qsNBLzKh3mXWmKvq2eKzSZmTUdjKTesg6KhyUYYxEjpUHjrNEG8z",
  "key32": "GwefymxqACAZG6tK3nMxrAJT3ErKZd3aJWqQCwhtoAzAuTS9gFgs1yZunEeDntTqRr5PqqAiDQVxcVjoNuHYyEG",
  "key33": "2hFcMR2mGE5HnZ6pg7syBwVWM1ip3Lwx744sAVYXAkj8fqWYfYd23x5g7NmFEVQXW6aYTwDZfC8RFwr3rHRVy1AL",
  "key34": "4x1a2ffNz5rdsS567V8UWjPzwybrg9iJSmWkF4dvWLUPwVe2ziGAXDKwapcy1c4SeJ31sHuMUpXgHr4j2Q83GwZr",
  "key35": "3EtVMBht2Tp8nVnC2zu27xAvgotJNXp9xz27SFaKoz2aFqQnvZySABD6JikQL3EaNkSMyPtvh4KHQAniTKZnXzc9",
  "key36": "ZHsXC5yf8ybZZhqWmZYVm2nmXXBjm3MocJYon8AB3p9jDhth8k5PE6bDfYB89HPPp4pusgiDPqGDrLKpLh9YLwk",
  "key37": "52cnFzp14ySL7P3hHLuAphuPKJN6CDvopRCxwwCK4sbDyKjKtg3fH2QaxRBXnFpwcA7raraLumjq63Z5uaCgE3Vi",
  "key38": "5gpnzEBrGsWNABKAzhENLBnKQpRiGPy7UFJT5psHEucdYJxGaKkzk9N2tQbtcJB98bbDAbzEWQPpc7EBPtzxnQ8s",
  "key39": "EJdhyBZtJcArffuqSGtHqvwGmMjhYZrc4LsEt94k9Mzz25JGRN4jybezfQyty6h1uiHF6T6216ARGzTVzVMTtNg",
  "key40": "3E1f6vKocdb5vGi7T255QYzXkKZpNQzj1qnRpGCWrgoQHi9gqxQt3ddCoNYYbrJmbnvVZqgQMnQTJYF6sN7yGzyj",
  "key41": "3NDyDkiAg7c2vvPYjemkyxeMh36yg7UFYyE8bCG7uz6AY2arZEv7Lzfgkbc3ZKDfcLPdHNG5KtbayGuKo42RRT8j",
  "key42": "2x8srs26urykv5BBTAXkKCZemWQ8GgAzf5KySyvjV51D7cDYA5tYajwQJVobixn6WUUGUNnfne2HgVeoeeTrdHS6",
  "key43": "3CCghb2Bfn2iCuQwJvERs5KE3YSUsN1jK4gQqgmNuK9Gskv8h5UQsiZUq1KHvnWUxYmhTw969awxeb7GL1ycr8ci",
  "key44": "2URqfCeNQ8dNnnu9Ad29kRLLdNWPTiV4zsG8RPu2HPZYZqZNn2pd9okDFYB9d2Xe4D89M5k6i6k4RT5BeLEdX3gu"
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
