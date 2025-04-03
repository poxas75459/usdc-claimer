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
    "56CQhttFHPB5vnntmVCFqSRCjQp95yaZDsTMF3PsTF7xBw8poMnXZVJi4Sh7uqQEZK5Rb2gk9zobhQMvqb72vwNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5baLuTKBF981VxiP3jEaYRNg5ULR9UuHByEJG4VGVFovoeryLAjvedXFke5Bbe7GQe7hx9GCUMYCvqN7kfEMbJW3",
  "key1": "3sNpHQYxdBr1BWo7y93CDctNKWnFju3Wc5rcFKWcZcEuw78TnSH76e4vbkqhMnPZgpyStTGsTbQLRJZnckXuon15",
  "key2": "3jHNP6tWRb3eMriBj3tnZFsZiDSG5EvC4XgMAz8qokoStsfoF32rhpupkUiUT514hjsDiAiXXZbUj8ABZjDepALz",
  "key3": "59AhXRam5KmrmNcbHLddPRhYYmDgzhgE6sHQNAWtxfZaGaZYeorb8JVjPTkZe9QMMV4eF23KyVJWn7ugVJGVfss",
  "key4": "4Q1maRTw7nBM1oaPpqA7kZqpcAV7qgiSwoCmbfCeLxWo4V5J18UQSrcera4rkKzrVmUm2fSdcsjx9jxCYRd4gJx5",
  "key5": "4K9FrQbab9AQjcMTPRYax1JQ8FefhbiXakHj1gJw1nvJCyG9FYayS8cftL2n5AjiprLqCjDKZqcU4UyUTofQBhwG",
  "key6": "2YWJvjwbyAAVwG55bwhNhN34iTrEHiF5N41s2Bd8jrYXY1ceksTgsAJnHaJByi9wyjGHkv7gktDLQXq3NyyBNbdV",
  "key7": "4Cw3WEyRD5oouinBqN4rTnkqW9tdXFJW9KFp6Q7KGoirByTqp9YSvmZMBvs8yCaVVNGpXuZe6Hi8M1AnBKDt9Eu9",
  "key8": "AFJGqgv45xLFt1uCdkitycvvAe8GiPLeBEv82eKvGHxjT1W1jtkFaQfvRQdutcN6xCJvcShrQRuSmgeGkvpCzPY",
  "key9": "5uG1ZGNR7nbbuKSq51FmVvmyC8GHMZU4J2gQXbm4T38FsgAk838pyTJ4Dq6fdEiusdhrgxHMbJxupCsDLTxD9wFr",
  "key10": "3JAqvi41f5ktDDdQAQxLgw6gnzMtZZcmkxkmuSwMmboQHubTqVTQHn1usRtdJNLMLHhMZujqxRw7M3dpsUGzRjTb",
  "key11": "5B9mbADZAB7iMpYyBxxVzreHJs8iuhQnJvBz2pJSuakkHWQsbaWa18kSXKDjWfEtw6ZkdZCz1McPuVjPZrRG3HfA",
  "key12": "PSo8Tp9g6QVSpz9PPFSEjkgbJ4YRZAxp65dGhHVgk2PifjiR7bmdqKTRyauvgyH6yKYSeifWQkMB1WGfomrMgSW",
  "key13": "3to5Q6zEA33aYJJ1egFm2zGteTMamhZupXSusDMmnfNYgUcprjzZqWo8GLpcENsUay8MFnXJ6Brig5aeTSwDTXas",
  "key14": "56vnbRUnp8PFXDMthJfuZ5iiUPjdhKJh63LJznF9YuyPQPrEjMVBfmSDCyBwojo6pN7td4U7Vzhjjk5QbTqi1cDi",
  "key15": "3UaNZnyCnv8dUBEuPFVgj1cUm1nbsTuFV823mhx1UGnGQAEL8GugUBn4LFxJDnzeHtMPw4UFtZ6Br8P1punb64pf",
  "key16": "8cEV9a9UZDjxc1NWSnKJNbe7d4aSfp9cMYtfE2iLiUYjYxRbrTjwYry3YrkQ7J5SbKRPDmgYwwAcQC95TYnbpVm",
  "key17": "3DLy3RjA82PQMed9JpKnjBNfKky4cDNBYLSP83e96WL93Wd3KXunWW14Rd5ZiRMuNLBggHpUd42RTK7dnCYtEUxu",
  "key18": "2PbnqYQ5zFECzJig7RGXKRvEt7wCoWUaGy12L2RES1iwgeF6dJajLDHeY5ZgGmsumbwMTAYP1soSh8dHDETw9wWU",
  "key19": "5NwTPPFcpugqrn7S1Cvq1pdVtP24bEZj31Rte6nW3EJ869SGZkcUA8bZP81ZEA64JcvQAoZ2NRN75hKh3qZ88TCR",
  "key20": "37BJE5ALqoT6gBSko8v5MnTZdfeBPfqDu35kmF7jw5qTmKWPrzmURtnm9StdUQijTr3gyjK6ZVQyNFHyvLGjiiRq",
  "key21": "cTeUEamWko3fn78fNpktkMMvLnbJ32y2AFnfaRF81LBriGsP6hu4hnjpj2GVMfRW6Xb9EfMmM7jYdr3h7Ve5DBn",
  "key22": "byZV7gzDhYXZ1dAamaRNAvq8pRRzRGjibiwRNmbXcwCPwfsdLWPW2YyyGQH2J7ZgMWjsicrg178VKfs2F3WGLet",
  "key23": "4kk1N9SxFiX1EL3xegnzeov3o54BCDgh28todxnF3iujSPLxVbLywZqaPY7ZGrJn79qhjQRzBRV4DHgVD46egBQf",
  "key24": "ZWMRmyJMSo71hNmuXwp7SNHY45sqP3CWTxrqNdKdQEuLbpkjJSWBLahhN9V2dijqjS2cZEUWCWqioFnisAXS1eR",
  "key25": "3tpuyB4nj8yapjbMp6kPMQbL6JSt11ipj1ihGFkiLEvMiXLxQuwq1U6Ff8yjYke6jpvXzbNmkZJ7fgpkNkDU3ZBE",
  "key26": "3yRiwtUivdhnko5ceM4i4mnWP9aNqxMSrhJRYBJWWm1gpdTefqGNgQyzttSJoykQvU6FzAdGZd8DEY5HNy2a3uTZ",
  "key27": "61yF23KF4igwzZMdJvQyhRU8AvezbHhESgaz6m8esK7Poed75CrDXPZCT2FekAKnX1b5VFktrVJaYJS2Jz1opTDz",
  "key28": "2DCRGkHDJEyUG5yjmw4vBZRWRUW6jQmvKvvP9Pka3bMgqm23BhnSZfGicQNNTaM8a1FSzBjC1Gurg24XcS7gnMQn",
  "key29": "5RWPPpCJS36RNLnSBHVkyNoH2CSwPuhuvTiuRAygsRrEVtifMLswMifAy3rQTvBZtKycDNB5E86JtkFmhukbHas3",
  "key30": "fkvGdaJre8T5rtSdKwBCLFb6kNML1e9dKx6qaQmdPjJSzL8fbgFwCEqp9CMjg8AQCP17EYpec1ce7kmbW5cREYx",
  "key31": "2KJW9gKbXB9w5BiVcudXJeXiNpsQXkusGuw7mwwrRgMcudZ2a5a5UN9S8i7QzCrC83z2bbM7Y33rJtx22ugFjRGw",
  "key32": "58xYTpWkQWdVDF2GkBHAyQ2rMQDWsCJ2Y2AdthLZXALQF4rZHVEgsEYEfcZF3ut8B8ZqvtLdNMqeYz4m2TCa69SC",
  "key33": "5X3ckFioPFZMo4vsmgBrgv14zLGvDzDREnVq7EFE4HWWeAa4eVWm8axumKW5D9XEadh8QSDTYizNG2eC99KGy1Lg",
  "key34": "5f76GPNfwJAoxYNzyydvHiTVkwbEg3q1ThbM2v84MoX82dgqpvy12YFibqRKF6ziZMHTdGMTA5TkmK7WLh73WmBg",
  "key35": "2GASzpGvznTT6usQ5XXAsM6Xf5mk1TcZhLRDu931GRgPcHALxqs8KftHMschLww5CfSzUg9tStCTZPAZMu2p6vGm",
  "key36": "2HYt3bG6hkEsbJG4WRT3MS1nPX59e23BWPPajfpdF6UEiNhbdfaGcmGoe3j3oXyev7wVxiKMD5EbYfs3dFJ3ehQY",
  "key37": "4i3KgRPaomWhG6zRmczCT1aWmgXF2r32DMtdDqNPFrggqKjwewNL8kpXJ98QUhjoMWgVackMpnL8Q7s5FSrFPWAN",
  "key38": "4w9tgg9afPtPj9iYGVbPmYeho7srTvSZUo5j6R1h3KrLNEt3inPWyByPeAXEWr3ZdTbos8TWd9YApzFhKqqqWQSX",
  "key39": "4WF1HAjLMe48RH3T1kGMhWfe42oqdwasWQDmJ6N6RysFDVgw8VfjzFhnyQLQpTqVSLmbqeoUjPacnHTm8chyZkzV",
  "key40": "2zxyVH6todhSjqGQgqvDB7e81QqyZyQLXd7cDFeycs1oqDZAqJtryKz1GjGZx2iE4DaPbDf8sT66YdSNUhZF7p71"
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
