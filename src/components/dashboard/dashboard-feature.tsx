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
    "59B1HhYvbpU6qQ4i31Y1ae8Ze448RbfykryM6sKnCXg7zqvbD54CeNSZ4ZC2Wb9yDyjjyzURvXJfW1Ph2qdqGsnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNEumPaRb9Ei6tEktRc4UH5uhUbMcRf7Vpr5GxC93mr28GC3T6gp6vUsUsWepmddBM5pi17LfdMhWtQJvZm4dm9",
  "key1": "5nG4VHGTkFr3A4E53reENR568AhMDyVbawkE3ePbh4PtaAfCdeEwED447mzFuvgsoqfWk7BbhjJJQzT9d96dEqqt",
  "key2": "3zuk1p36T8YtSSCv8vGptHw89SheGpaUPUrcSYvmyF5H4ym14uUgrVMt8buyEMBjwrYEJrYQVecir6AqndrDJi8Q",
  "key3": "6G3TsaBLrdRiZ4fTahFBPwCUUBL9McARZDRVUmHD1XiZX4XcmcF3LLSsMLDNLCGaUQKuMuBGf53YLrjuSD84qrq",
  "key4": "3utkLnU474oqoDPMPAEeA6tJoHCmoNtzJhxiRNP5A4kY5FWF2FmwBAwDvXu4Rhpo2gtYfbLDt71yDzMCj5wJpWGp",
  "key5": "9fourVXo738rWJ2x4LDuxtnhA83nkLJNw9gKQLyJvApgUPVVir5oDDwimiL9KibBjZ6SKSe3bq4GX3j5xnXjLej",
  "key6": "4b5aogjUs2jjN3aU3cKanhpxpPQo1ScsMwQrfhArqJ89jMgwaAEb3AH7tMEMSFELS8q7fS4ZqSq3zhQZM1PbMfqZ",
  "key7": "Q3Zyg7cmtJLdjbo9Y1jDYDuNY547m1eVHSgbLypyU8pCR7biYD7qKXKARpJtit7fyFe14BsuXAy5pUayr38Dc5L",
  "key8": "2HqQM1fRH9p5JTqz4mbvmVeLU5i3pXyA5wLrRxRgL97bbLZzgQ8kcZUwWjV92e66nkzCAct5h7LzAuuZdCvo8kyX",
  "key9": "3HEE7XcvRJRkRfxF3Q2u1W3oSmGyYRE9q7fDoUs3V7jVwkjVQYwMB2SU5xrxkHrqxV8euTWVse1rYpSbRrNpSKEC",
  "key10": "3h26HaWi4TRisSjM34w1fNvxraXYHhJXh8XNHQBr1K1AtxoNLBFT6SRgam37WeivYGHqvzZM5ULJJHqHDgF8mZST",
  "key11": "35jjNteKNmKoWjVtdTtchUNHQc8EAcLq6MbSQVoUagcSuCoUuNW3rQRKEJGLjQUz7Kv8VSRhz9qykQTWPdLx2c75",
  "key12": "4i9YLodvzezEkchqTAm8cBgfkkdt88wskNCFhTEyZDrfD163sMcAnKqXLQ2vfgrT1p2rFkHWccRDrBW4FHGNCcEd",
  "key13": "ZuW8J5H3NuFw1sNSdrYJ5vqPMySd36RTCj73xxdW2FB1P4dSXmqjbsmyGvDTW8TQQXWBSfz1afVACp82Amzw9AY",
  "key14": "3L8rYo5h17NaVezu2jgU1pSsjuq7mn9ETa1tktsUFSfut79amaqnhZaczttEvVKoxMu88yrmV1TBiX6TmeP3n2kC",
  "key15": "5TEuDcKW7HRDHrLNyCqx8ZN87gWARmGvsNFEqBkiuPSvqbxo9S7QMikfY29uG7gr22z2Mr3D9LXXPCcUSfwNME4h",
  "key16": "5EjtY6y8J8yzRjJNRAu34vuXTJbBqNZVHoy9u4hffpF1uHYoR2rTnj9XEPWAbHX6rx16SBk32e7RDMTj4dzzie8Y",
  "key17": "28C41ikK6bsLVi6FY79u198VsBRYFqkUTbmbJTMZKvSvPeKKPGiVhE9BVTszZHrgU4z5uXAN77G2e1WoNzYMWg7D",
  "key18": "3UaqAVvcrnk9nv31JdgbDSSZzM2aLWRi8c2r6oLJmc826YHk94WcYMzKQxiuSxkawgmwWhNd6P9LtzMjwBj38uQ5",
  "key19": "5V7Gx3DfRadz7mKpfhtvLk1WtTxicuQAcQ4ae2sMxfhvBaPPmVxWRAVv2HWhDavCGYAqaRKvDbhx4NYCqeX6ufsX",
  "key20": "5Bpkb8z59hkDdDqVX1NgErCCcFya17Fag6iG4N7CVReJs5sriXWPmRy5z9RyM5CkBTbGNDq7zstdvFDMUvd5e1KB",
  "key21": "4sESoguBgiQCsYkaa1YmqUZveqxTAWkhRigcqDP1kPzsjVoitQdEn7kU4UYCjR8BEp6F8eAZMDSArni3o6ZDCmr5",
  "key22": "2MQrr7y68MNzpnht8diGKEnaCoavRXmT7LHjbVpY1PYy8BB4gVimiitmCbxdvWZSc8SXGJ6KqJJ32nwvvv3YjPtu",
  "key23": "3oBmbUWWsLQYvDyfVzwdoxPLzxhoPsqhCGFrGDYDHcpRwrvAYLZsmx5cpFvXbY26iQ5Z2GPthH2UMbgnA88CMNfz",
  "key24": "5XJix46Ufk2wsH3P2KLFbjBWuNQsqXdgfUskN3PaM3AY15VMAGsdSe1npjBV3uc5FGk8jiJrXEBCrJiz4TuWdu5a",
  "key25": "mh9Sw5fTaMhibgi1DhjD9s1mwvgVSD1g3C5wR8M2kYxhqZtVD75UdpPb75xf5s8Emo7jRjqg8QZp3DGa2ckV1j6",
  "key26": "5Fe6qhVqXJAux2UdjHem6w5e6ktxwkfYLfq9nAR1x4g2nSHwkH6BCDtzt5mxECUoAAFqu6maS98JYaPh7ZCukk1P",
  "key27": "2x1Sq5f8ogBHY1sxsHEfgo5CBchuURBVfKJvtzhcaETWxvdYunyxrczam8wfRivpMWbck8L7x2QLJj2hFUVhMMk7",
  "key28": "aZcuviKgXfo53RdXNhULg48uguDUZgX1oNf4tBQNaX47BD3YWqxNJuRDcy9nQEMhTnwiBBGMUDGEvFPD1FchRx4",
  "key29": "4Xoixr8Ez12ae7WkrGg4pUou3jJhLT1UTi1RYw5xYkBA2jqUpM1ziZPKo7g8Emka6sxaSaS2HmDRfhS8oN27XMWB",
  "key30": "21Cirx5nLR2EaG3XQb7JdAQZCHWPJ2GH1654gu9G1T7CgjhEU5VRKKB3nhj822t1e5eBbLvwsVm6CPuYB99AK8UC",
  "key31": "2U3oWbJsib5nEEFWQBnEyFQH3BktFtfLNKg4H94oLxuEaWnsLZ4jwLUf4F7UAVCEumtksvp7b1bSHXj59HJ41XMV",
  "key32": "4qjCDF1xvAiC3XkVKZAyt7KqkyWUn9Kue5kFSv1rss2uQ28rKPW2thPuHtrcgKT9koE8wbhxshe25HzF96V73Ebu",
  "key33": "61PfW6PKX39edDybEMvY9R85dj7jECqGtApSomurEE2HQmzWgzkqMdXzwMnM2gu3BKmexPm8qUNg64MXNxkJALxm",
  "key34": "3HMrudddnbcFyjReNM9wqKLRVfADzE3vKpSt1DJj9eYxnuwzF5MFSbMv7zZQMokaHgYmqeC6yaXFx5bUptURnkL6",
  "key35": "3bjmFccdv4XA6uQk7G3Xm1pyp88X4ZpwMQQE68yHFReQts6jijBUX7f48We2ASq2a8xq7TQRfb8dkpPbot2JFqHp",
  "key36": "2PLDdpVrqqrkLYYio1w8r67mMwQSG8X7GAwT7CrUA17kqLPrZASsaCYGHmRgCrjxj8sJSquzUBSyVEW4FZZRR1BZ",
  "key37": "4wtPd4Zszh5rgmYCMGBMhHyNy44L9QLcaTBCAXc2PLB5wrQqoUDMCP2yndd266JGaoiMRwp7u941TMCrQZHL4isf"
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
