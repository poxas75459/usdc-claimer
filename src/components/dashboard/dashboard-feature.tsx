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
    "prQDdQ5xNaGdsFp6dsQj4h7Nw9XTMEk3V7uEH8P7XAu49nnxN2fMfy7mxLALJbMyVVDPAdn7j8yk9g3XX96MFbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fd16pVzWT8coq4TzsPwrYUUWVmHhxgJNaiY3nZMg7dS3DgpkBSGjVfzzAdnqgXp4hq7adftZPZ64tNzPfUmyFSo",
  "key1": "MduD1CTgpRr7LuGCzdaSmCeDihZZ4URdQGrJMsTqiUp15f9WxLHLHGxizYFTsTfRt73RZAvmSZuRc9VNFSwUSYx",
  "key2": "2HSryNrK63gwHkPsE7HQw1gd1gJ2oNtFxFYXTo4JaXhEKVsRn9Eetz2wkt6X8VPHXPaVd3yK7MC2EMcfH4gdXphj",
  "key3": "22JbhaUfgN2A3hNgQNAYQ3sPbkmgF3MTKYeSJSAtzV62TjxgJYPG8nhvWLAv41VAjqZUvf1Cev2tdAsU3EFtBhGf",
  "key4": "4iYnucgZxiUetsQjWvXLxSHD4bi3HFKEGjmUYy5PXJcJeJTjBXrmUJUEvD4hGCtHSU2MhNbhMi5NAiQmW8BtQFAo",
  "key5": "4rTzrXjQmoNNG1JZYKKyUGJcFSB5HU7Bjw33AauZJowSXnozAq9BzdxUmb4Pa31vRLApVNtwTdqKMCmP9bZcurV6",
  "key6": "57jee84UXNoaEETbq7a1fBRha6TnYTeWo5crzFHP1nKjjXwRDk6G2HQKsTzNzbaYgkMXSuUpGTRxK9v4vVptTibq",
  "key7": "3hYY9toSfbNP98EUM7WE6eBq1PzFecfxnciWuuXC6NHs4MQFtQ4RXCusKKnMYsfYFJyvXXu8TtUNyxsenoqCmVhY",
  "key8": "2x8dFjGnYN94uYx73mHUUZAMKM4c8c4DU6yKkGyk5GFwTDKQWro64Bo2fhy3z82bV6eDbKtB9Ko6mQAQ3i8LbSXJ",
  "key9": "2BkkH8o29D9gMvuW3TEVGjUEyWDp7qxBxqJictfeM1ysWHVBHvRzcLgKxkFvZ4hZD3fmN75XvFni93zR3g9eMZyF",
  "key10": "2sibXHVfAHPUz4gZdzFC6gDdD51pJtWRWWUWZ8UFdmuEy1BYnF7VsM2E6znkEZg9Eb4mHS71zje41CD2S4AvdsVY",
  "key11": "5Zx1XPdNH5oAeAgGMmFCSBGMHRpK1RLpc8Exs4WL4LTr6qzcof7HH6iMMq9XzK4H8Bqto9ZjoHbPGpy7MmtJ64GV",
  "key12": "2VZv9WihMxstDBQvSR4FPNvHwq63itNyRQ4DAAHmHTJ6LPStwZ9ED9w7ZvEcuRgdPxXbw6KuZ9uDJrc5BiUwRwjk",
  "key13": "2xLnq7guePZ3kyqFtX6nRajSJNMSD9ERobtcrYawEoagJZDdRKA9Te1KLJxSy2eqPAxiVkM5PjMMGcG5Zqhn4hUJ",
  "key14": "2jWLZjsoyeizhMRcSZw2RQfCLzPHXLfJne8mEzR2dj1rqDjiZE33SBW31TGkFffAxXvmP6u7vGHBSivoTTHH94Qb",
  "key15": "2mKZvy7x94MMakZEvDPWauS9SDTLkTaZq4CdWuJ9VD32SYgY5nTG3VT92yZzRtpseow5FrQC9V5cDoirBn4b79Np",
  "key16": "3hKr5SwxaNDPXtM8GRLUZVrzNrWLDxfF6khKg84br462tebqyyqgrGcHth8H5vHTBDXc11Df3S6h7gAbTa59umR1",
  "key17": "BRw1bm8HHr9GFnaiPWc2P9j4arRjEDMwr6hekFGSGaQindavBjHPXGVt25XB4uccuyNxVqaChwPtEckmBHPiECR",
  "key18": "5C5owdPJ12BHgLYVBARMHpcv7r8PuBtYYwfS3Z4zz1X2ywZjXDBys4XxtnQQoRVXnC4D1PbjxjJ9cHRrm3dG1qpV",
  "key19": "2cNhjkHYYgbLKNCahEH14eJ7PPticGmU6UgpLxLqHS3ian3vMZEyx2LWFJEESwwujvGNMRwCm5QrPqBBovmoKnZG",
  "key20": "5DZqrkPK4ogwb8aMyJNJTbza9SNQi5LhL2SsKe7eu3geKqW2UKiTurFyNzUq3NXaM2zyRTSjHCH4EQSgDhREJMR",
  "key21": "2D4ruTHxLRs5jErJknRSWMPg7JGkGpFN4m6UbkVoq1f4jERnJ7qP5n6jZfE1XkzotpPpFphWHRfYG2nZEwvTaWgQ",
  "key22": "3NSdivhDBku4wwHjmTi7An5Li8sr2cWFojXyVY8hNT16uyTY8BrNbcgmYESr7AwX9FKPzpyeqsMnsvdx6KDDGbzr",
  "key23": "3xx22ynsDPrsw4RRMmDM1piVK8VWVZZfAttTh16R2cQkR3qqnj3bHggp5cErWPaMNVMLRsVjjTZpBiHpytNwJexS",
  "key24": "DRhWrrazkotrNAwFvEFkWPjK3y2TKRP2Sn9vWgA33HPobemeiu8sVYYpFZtqyXXqfuNcyWHmFEKycP8utCuAEre",
  "key25": "6uEBkB5as9c3V47F7T33ios9L64Yhcs3Zg8WwdGXFwMBwWvFGxAHV37EBmZimPiRUb3ogwsR9KomRpar1kJymU3",
  "key26": "38smStYcGQBmd5oLKnktM2JZhYUtbvhcW7k2ntQZ7gazxFGkXehy5yLLSfXknDFEjxbC39uTkxqXbBgcgvwsR52S",
  "key27": "ag2HUqRTLfd1djNaCVEhNwktMD8ACexhvpBceDG3ziUiAxJtERFqWbvFr3yXP2xvuuUBKY4L3ttnPbwAe3pRQcY",
  "key28": "X8Gjqm1qM6FxvuwmcoaatwmhawAmVeUwUcHhZRnbdK9cSqpoty1jr13tV4f6uFNFRcV3TkQeYhpNQi4XvYaLB3F",
  "key29": "2ANGnZiM1sbb4aarbRFxgfPBDr7Sk1pKYntUM8R6XmHRuzw3vaUENaTPU1YdV7ezykRcdF8uT8y9zU7iGxk6RhHE",
  "key30": "5abG89sG2sZHbXZ4tgPk9zgPpEaupAyGyZLAQSK8cP8SvNhGn1CSGPjhFWDwWXnU2PvVvCvPFs75Lw8i6fEuEyhD",
  "key31": "3Xzx3bCDeWE1dyFF4v8Ww3HUkePQ4aNMVME7TioELa5PuhGXPFUwyBWAjVw5anWKrRHoUWCHwVrVurKVW7bwHd5B",
  "key32": "4CjKjPnDb8U6BeccVTcuR7ZKnJQw8TbsZmRyzepqBNeacGn5D5QVkCB4yqS6Beus4EZBesyHtr2kzE3JAt6FLnpK",
  "key33": "NtwXmZyVpj7mENs1TiHvHnBYhH1scoX1y882oZfQm4TnjonYEob9JWCLqS57KensGh7od9Zgv4ABkwnjDT8mjvH",
  "key34": "5G7xfeAvYHc8ccKz32NUuij99ELKT8VCtTp6wPJ884ExRTuP61EvkNaZeJwTvMm8uE6oNce85maLobmyx3d9BmS4",
  "key35": "4Mo3oDvEZb61MXi1d6Y94r85abynRuv1dN5RtzsGoQtxNnCNfiTGVsxzyEggKn4DnZ9ihRbYHXbZSk33G9TVyTzJ",
  "key36": "2tFRRmuYPJ11o73z7jgeoiqatfRFYLHwSBLQzy8opRiUjRCxwrxUnBnYJrRmWeWVRSsYTF7V2bZmXMb3cUeroSG9",
  "key37": "uquFtUETnkWCnBKoVfzSHUQhhBE3tt9PoqqCXf6n8bjcEjHdLVGdBS19tHb4PRFmjzUSv3HiS9kz59th3PNkcWt",
  "key38": "2VmaoLN1BUARvcg9EKDorG5Nfq1rifWRiX2Gqp5YRQD1NCN44KnFt3i2ceUu3Q9b2chzThXZ74bLxHLcAgd6FoSY",
  "key39": "44XTmHmjmgDM9S5D4FXjbvhoSVMgTBvu7Ss6THQdw1wppUHz8SQZtKavmFT9Ld7UUYyCPiZdADPmBbtXqcqGg12M",
  "key40": "4Nz7UwQop86FF8z6edQaQAwB3A7tVhXfGhTgjhffH9JTPWQjtZYxx9d6KWRgWcVwmAZChajToPHaY4Uh8pTJqhde"
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
