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
    "2zN3Lat3i2AakEPnYeJmZR66mvQP8RuUurkgb9BvSEEAVFnW5S7VQ2YpTGMjj9rpwUUarosV8VQrAf2PAKyKm1d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7ttStL58jXNc9eWXqk615tLJ9qLGVEVpxNT4tkhCYLfXFWBWiLVJuHDiE6TPBpGsaYAo9z6m7YjxSf22o1Bj6Q",
  "key1": "4nDcS2BDiayVj8bzG4EKqmGMRR3srvtHG3H6MARmeWyyPZszKKVi8Wq6amC76SARSDf4RkwdcEvmfsHmzZtyNJp",
  "key2": "3K4Rgv71XrYWyG3VpvMP7BbwvfW6WeWx9DUrEohUuzHh99aC3268UPEEy5jhY4b5cKSXs3bvRdtoJoM6CbE8WeEz",
  "key3": "5AJgAcEKFr5cvPKv8HFh5GWGSL13XiLpVh1E6qmAmLQ877CphYEPdaZBStXqMik4vWbG7BAPNQaT4pJixRSGprAy",
  "key4": "4Eq3RamGFJro2RGVZrqzCkkF3J7ikVWrBaR4r9YAadPwpfzQ6zYbjFhhnftE4FCwDC4kUyVpcjidaUUhipJdq3cy",
  "key5": "2RqQoF7hJxS2FehCyrNmgDW7PVAGt4dbA39DXK5RMcREMRdLX3E6HtQfn2WndAZkAmmR9WXHjZALE89Ji2aPwrYW",
  "key6": "5kzEGik45nUaB7wbkXvzycWbpsff8L3T2eFLV2iQ5TYG47aphTVePMhMdXYdJ2thhBLHxwbzWB82xZFs6TeQEY1w",
  "key7": "2ib9LPXrvgGu1YpfsturuU8NCGzhxHDHtmnTVjxUeHpVPvzki1Fx87JYNK82eumNC6h2QomCSiTmq8fs7Gj6rx3A",
  "key8": "eDVbBVTNQERyK31kRVkEdLafyJAoSyQHjFFM6TB5NZWfbuh7j2EthwpGFnjds36jTZ5scGkGk5V4BkLYKwT2RQe",
  "key9": "4ZJ5wJtNqULvvdVQHt2dpy7ExnHJA238Rcx8TssMwUFQjFAjRv4VWRXZwdRfLLaATEkbgdLH34D266AcPrP5kxzp",
  "key10": "4DLfJ81QrzEL6G5mvVsqgfWjmku9Rzw6eLs1x4GRCUCKnXYLLawahbfk36NQquywBfMM6RWPCyMCR3qRVYViCqUL",
  "key11": "5K3tTQGhUojSFaGska1EPPFuLcnzJv5Cnxrxc65StUnsAXtWPzJDH8Sv7pN22K3Lq4gFmAYJ28t6Wac75QLnFUP",
  "key12": "3GKhgGDxf91E4y4Nmcxu9MTGmbgD7Th3t8JTJT4fKdBw5GKAzKLwZppfG5phBF7BK55ACjwsUc5hAVCiyhkKz8P1",
  "key13": "2nxjhua6HptyvbJmNixWgNcFdGXWh8U9rSskK1Lt95FjrS1FN5rsawxvRR6zuum8eRK6y9Asfu8mdEZMoWVa99BY",
  "key14": "4jUNKwQXeaPTD4Eaai1r3Qq8PedW8JAS7EcnaR637tq8YG91cG6xo3oqnMkAjc7cPzqBqEeH69pSdY7NXgAQdZFR",
  "key15": "41K7LPqrAcPk6tRav1E9bUqXRyP6Scjw9tBzDkj2Hdb76RXGRoQpwSV2uroFzuYpHBCK6yhv8f7yLHDk9KWTnAeW",
  "key16": "36xuWmFd8Wepv46u94HCV8AHC1wWmn5RPBn8ddMseBcj9jBgTnR8mHbAmNXQnnAeV68enXAYjYXia585Vf8e7VtL",
  "key17": "K8af9k2a8XAED6undCRtgZ64FQy6cfXZCAsV89h3odZrvcWxYZ2V7PwHULMNM6oLbHf8FEozwCpx3LiDGLd6Jsf",
  "key18": "oit11Gm7grSNJ555eJgoiWKngY57C79NtbFKNMugrHgfmsRXUUe172fYnJg4sgL54pAfq3aJTW5E6SenYM7h3Es",
  "key19": "33svwNcvAnm5LrLh6Dkuxh2Cp4eg7EQrWwv82sETc4utc132iNENADfygQQa3yKoacLwaqJviALdSF9zq5aeHmTn",
  "key20": "5G2ZR31kJFfWuJRWgwEL2YpRT12qtButier4SiTRxbqBJf1FD2xW9qP4fEN7hdn9BS5KQJVRsUHR6YSqtyjGTvZf",
  "key21": "5Yr2axRM6VKqbpgSg11g4w9owSR4ySyBBkWLPjyNZZjhGnKnmRRmdjHNrhXT5nEYMaasAiLM2t4JbJQzSXG9UTU8",
  "key22": "3f3W7CTxnXGpt5HjhncQJnB125D9vjemfEexEE2jZpazCY8FjMQHCYDL6orzabbyY3RANiaW9pVaJETw3CBvL1dK",
  "key23": "2nAshui7mB7LMoTwJisoxxk5DozLtVvz4iegxDNXbMGW5ae6vnQK4GDEtRkpMDJvrLe2bfZzdh7i6nCQBJY98Uac",
  "key24": "3MyETW1JT99BT5KNTgBcqHfc9QgN5sGvGiWFvyyBTbzjoPP1EXV3vD3HCrpwzKWcuBXAwuWmbR7KtGRXgNSrMN3X",
  "key25": "AKL4C5ATiZJWmjqgr5UJf3WsRNKp6eyrmLTLrGF8vg4C9RgZMS118CFFKiM42Ubbh4irUhtWXfAqVBSMRDZFXnv",
  "key26": "4uBUF1NSRD52kDnuoJDFcXY8h59DTAuaokPkTt9beAUkdcCpXRTAfbFc8oT8jGPgiqoU3XoYLV54GvYU8Qr8Mqra",
  "key27": "5wC1UYSLdQZx46aaJbm79uK9p7bCCCHr5sirRCXdrN4ntyU6wFxiYeYSg1kFNEcadshCaRSPwSDgD1EVTfdtuXBx",
  "key28": "4b4MrGqq9Mrm5WFBEuGA1uM3DLNZxqtSdS1FfeJuK1qcrwWsJXLkEo7PU5bgu8kzuu5ow9UgY1wyBoSRQ4Ki18k2",
  "key29": "4VDWYC5L5a1Bnch5ZSKDmJtjKDq6B5yXNzvGFfT5FumDWH7NDvLPouHW4X2WJjJqeszL8V65cqd82pHZjoTMCeo8",
  "key30": "4oAKG4KT9UMTFpyRvTa7PfZqHHy1UNoRv1bN697vknSPaeEgY5cyK2FfM4VRYHZTfNvCCTXLkjj5w2YxNpYCt1Hi",
  "key31": "2V5547DTkeaWFrFVmjGDtyv4xQ44W16bU5y9dUnCC91whDfBvcM3zUc3Bqn71MRRBwp2YGD5U46C1FeUyNJ7kSgy",
  "key32": "257xYqt5wDz6gnk9UVpmjofnkWReWntFbgaFp79dc7jfjP3bT7D8uokRkbHVT3jstefCvwj9DUg92puvFwA4n9n4",
  "key33": "63GTcn1UzFxkogiFPW8xP7XZfGWoZhcit9v7e6XqXFQbn1Dv8GcwMEMGZjq8XoZDxS7F4Yoo2S3WaCeSsusq46bK",
  "key34": "8JLFG5VRhm2ZoRtFCPzCA4dQN9RFSedXh8mQPLmjAbP6oqh5cQJXaNYnJEEWVenv1hk6C6ujzgiZi7pHQSeRm3n",
  "key35": "3vEMkAvu1QV1kMxRZyhtq7vuZDipMMG1AfZXsW6XK8tQMKe7danPmHiR8tCfeaEK7cKkGrcEMMsh2xWMnvvYGmpo",
  "key36": "3HchtE5uaUYQgY3Xcvb99CdQPLnC5i15avVpz2J7ohpZTGuGZg3tbBd6sK2DQiHrz322rN5KHoh15T4wXYodqttK",
  "key37": "4YtZtqTFdA6zjZ9eEt5YBADkN73uNTRDaDyNTA6xkzgCJuiKhNm8SJRXuRgQ5SZMoqnJRojP9a9GAUqKix5b8SGu",
  "key38": "3ZemhLH77TTnFz2FdEX5QS3o3rXpGvLmmGmWBYZwPncPNNsenjKbAkHgZKFY6KEBtZaimCsLhWx1kDqjFPrY1DM6",
  "key39": "376f5E5wK54NGrV4e84ZUmp4R9mAoj3GGqBKPh8a37t9c5q2qCCKCPbzyCjB9Gmub1DH5pQU8kfaKXE3A1wGCVC",
  "key40": "5nSN1PCCfCYeMgvgZDE4Nf9Nbm91fZxMWtMM45iHbfPj2yFVX7GmBN6VrdagcU2UKPzywRGSYRfpKb2FpThX4hLU",
  "key41": "5CUtwHpWcdTe9nPoxg33ZeXU6EEtd9saEQZKR98ABhfjvutUHENPpmiAxR9WuxzzxziL6jHG53YvFa1rV4Bb8u8R",
  "key42": "4D3PC7kxW8A1Qs2yoXDH2tbacWLcogNVNYMXUiAubdchDNmXyxmiMuQtd6wCoYARxZ7CbZEKdsbHR9wtRTPne9AE",
  "key43": "4Lcrogts6K2BEMdrW16GL69wBb7H4WP9xLmoPoj6nUVsQ7xVKq4sJbANf2gSkYS6LYPzriU4th37DfjbVspjMPZV",
  "key44": "5i7oWTzJTsk6FQZopkwaiqFi4QPZ3XzB6zEFkzkrXNSDiRaq7SGggVsGvgSexPwwyB32YsyfGJ2VZD76uV5cRK6h",
  "key45": "32XiB3Zz1hYYyct2QmoWWmzKGJjEs68dXxoKttZWrrPsmLY3gJC4np2H5AdCvQrsPHSnDmKpsLhaKkAsdk28NouN",
  "key46": "2ado6dNYGTTcpvA3mZXnq2dF3L1YXJ7QKMYweDCpyquJqNQuBFaF2EXFZit6A8ErjMp5FB83FA2FS4UqkviENgr9",
  "key47": "5y4rFZPvDMAhDEevapFn8rh2zR3nTrBdxQqPxviQvRbpo1juXW6YmUSu7W7ZrsY5FByfAhSWA8gC3eT7pDCDFYDC"
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
