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
    "21f4botSsoashafjCdSonRNgKeVjHw7tc3ddDwPzXEazpQpihzLfdrtpMrw8QL89fXBJywq7JvcYQKaADMzSVybP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiCv4QDUu4jqRJ4GHaHJdMfXK3TzydX3us9ZMfQbf4uMzdX8cFW9gcoz9HWseGmnZJVMrq1e9Lx8dzcUiWjTX5S",
  "key1": "4rTvMsFedDQk31woKhtKkNjn4LhmSMATHZqcsdhiwrgXDHji18wHPR8Q6fqK5JS1ByXVYx3VNP3KLf987JXffA9F",
  "key2": "3cd7cMH8SYsWwPdLBgU6d2zgR81xsk2tesWD57H2CLS2ttAyG1LXHLyjihpzky7vkxLVWLmxYHu7puGS3wMTa9oT",
  "key3": "48hJEGkdiwHZhCVwzinD6AbLMuR4Ejcy9BKwz1wq4Cw1EnEn3MQAaMvKjcZtfr2a219wYZxsTo7nyxWYyLZkcN4p",
  "key4": "2LmJYXkGHZeoBwWQaeMFjk7JHEo16FbB9UTpV1CgreAHhJ6EtriNbs55RMQNZ6J3BooTzCp8HxkKKbE5g7uaP3qo",
  "key5": "eeyxaKJB1LFZrQznkb4pZURXXG3Kmu5odwYoKp3ZgR8c3Qa2tewsQ4kvdz3xFVcN9GEXwixBRDc951mPzqtTTjS",
  "key6": "2xDKTW34w3WedT7qtAa5MFPbgk6iPg778rfbeSQBD1x3Q3dK4Mo794k5ttgeur9XRs6SopywGqhBU7KGbbtoG5KX",
  "key7": "2DcY421VGU67ktzUnGh4NH454fF1SXtpuTjSYqSKuVPm3wXHdnKFsQ6WrLR3jQ6BDZ5hQBcxgP4A4QeqqovVvFGS",
  "key8": "4reLC4oHvU2jqJZ7AAQoVrXqTr1B2V5ufZMTjST7XiQzWo4jimGCwYa4CrjEfwZSSp7TmPheXejsbdc9S92Rb6Kf",
  "key9": "2R2uE3G4B9dQQ7vJMEGPvmccKWat7mzjqUB52MDhp7TDXH1bs2jgDBPDYKD4KTeHH3XAc4C1oqkd74SsBPjdTmA6",
  "key10": "3BaY97eFwuyZpBBimV7YFyQm4nGqX7MWAFcmgqHnTHeG9TgCsXNzhPaP8txSvxjqmQyZhzKLervJd6ZoxiFi42tQ",
  "key11": "5uTomcGnP2s1FhtipWUee4sXC9D17xdMhAzJ2eLXLBRRDyXpw7t2S8qR4bbSRHpeywG3DnohYsT85xwK7btqyoXZ",
  "key12": "3hkdH2R6n8s6iX2EY6NcSjGPqrAm6X6YMFyKAiSymQpYHQpGyDy6hiqoNre8k2AteHBFMZdhTiQsZ6cbCbntZqZ5",
  "key13": "5VZZcFkbsATYeEs8Y17Rct8DeJFZRFdiEG6vttqDgLubF6v2PusZue9XAq5nKj7yEkx1Y5PzGByuoX1D71xWRvo4",
  "key14": "4daKivYn3k71QvAgQyfzwUJA3RpTgh5TT6ZpbyQi5ocPR6pyTCyf7JHULXZnaGVYxE2c9uKTd1ESCZDqjVaFEWsx",
  "key15": "4Z9DbPouvNC8VtrgAMYW8cuFGmGrE5dDnEzjdXuo69qThv7pXBvVFRukdwobmc79A8msSL2msTtwsgqSt3AFzwah",
  "key16": "3SKiHdZEEchLUFsS3mF29S8hW4c12bEL1zSZRumxnjULj35US6XoRpANikqdSZFBVL8HLLhvvYLqw2eY7vFEWrHs",
  "key17": "3N3hf2DhW68eWXUuaP2YAAcvz4QjwbfQKJWUpbzkGCLypyii8GSoismF4z9vM9PjLzsz2PinXahmrk54XDSZDvaF",
  "key18": "27rGkrb1YisX1NGXc1NKE7AuAsTKNp3QPY7K7EBfcVWhE1NkqyAHETZh3BDk8SPfHfsTGAqxZmzaZzAPiC4iCwgN",
  "key19": "3z6tAJjQPatUJBcKKbYMifkXqnWg3Mgr8SrzJJyR6eDQ8JTnW9shdLfUbUwaoWUhvxb8VFbUA9dDdYEQX2yZ1u9t",
  "key20": "4WMyo6mUfc8m8amwzsZKKxFN7T68JtMRzkGeZevAxSfx4jJxpFoxaU85xeT8arHoZFvtsv3bRra85KcCZKyfrD8b",
  "key21": "5Z38wqXr8Uu9Wt3dMPSBwrYTBafVnvfSQbdUFfNEUWdpo6YPcUFby3eP6RiER8hdKJHf1FnY1kiG7SyB5mfbS2MQ",
  "key22": "2LjbZ6M3911Y21jK8WcjBfHy6kHwSjKDrP94QLiqBr6Xc9w73offTb6JGUEg37a69c6oUAr5fz2RipNQehcFeKPG",
  "key23": "3UEq5FwKhRwdp5pwFaoCa4ySBKKT7DyUHU4CFCUi1KD3XPDBsCiS2gM8DfLNuTSPMqfe8eNUjh7iHVKJFmapu6ys",
  "key24": "3ETeR6zZLvKnpnH1N62yjWbag3i3Xw5KSrysZD4To9kbpGBrVzjjbzA7cjdbVDQq1CL6cWxAkTjjTwQiHBVxG2xM",
  "key25": "4D4BwsvMRMQm8y4uNAHEekooSahzv6uhGaWKtBcoQ8rEBexyDDYYAww6JLjXfbVNDAjM1vFgkh9SCE2tgsDBsdwK",
  "key26": "z3VduYP6YiwxYCsfrdxxgABD75gGC77PZaoa1rD1bdPhPCaEnSfDohqDDzuUyooaMK21QMswQfRHJ5kuLyD7hWu",
  "key27": "3ZBUESSUkuX6UQCt4sBfj7nAfYYNFtHaGs2Hx1HZjNeKyhZeNPRyyfjh33hJ43pF5q4VwUFjVSGan7RNZ3tfBHBo",
  "key28": "4mo5BDuqXo8wkevnEdeG6bQja8mgwLR9E6m6HixoUCDGe3rz234a2iRhQBwc3Nrn3mJL7hk17sxiqupfmQnZCzL9",
  "key29": "49YMdBrrRxgSQx3cMzvtJpxyFMHtCfe4CSrjPS56cnrZLUmMfJrzWPAC6yQSKCx7a1cyZtQFixzWuQ7Jw5kf5pzS",
  "key30": "2qvAudKZYXLD2dKDFTY4vT9YNXNZiTmUoZVNQDH43MpH2ENwhqHiPvmVJJQcadTFzngpWTjR2MPyurrgQkTwgBuF",
  "key31": "62XpQWPCZFeb2VcNptm1CVcBMMGSLjRQYA1P4cGRnaawaFhTq9hsvKxdEF9uykGwZiQ49s4o3gnDAu8DLnvD7cfW",
  "key32": "3wdt4kBdNwSrT1YKBy6RjtEorqUFajK5k5KHy7meHkW7EgYLvq2Sjh8Y836gsB9ChRTaRNjMQAWx96DiZ82uf74M",
  "key33": "oPQSvRTGJ5AD9JMMGJCv9xQGA5YxkETgSNnuauZjjTdPP1i4zFE6sZp1B4vESvFpvfhKWXyH8ZTcFbovM3tEQtx",
  "key34": "2u6hFqWQbkcqtfPYnrhWeCnG4xp3osxGfJYMNJapYxNBNMMTRGxVjqqiZsft78LzCxszyh5VY8MaMXYXV3gK66GD",
  "key35": "3eyHEb9kuyEup4i8gsMT2gLESCExU1m31wz18nXW71FfpWakNcySFy44LEHP6Dr1ebnuMvk4xG8PhERDwE3sUji7"
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
