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
    "2LYh4LnUNRvXN1ef1F7UpkLw5rTwSKCiDtoeqaF9quwAd8ZD3BhdBqAL45Tg2fdjAHWTYpARAkNdN9B8j642r32z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBzSHuFrt7eFi8dXuoDeWmD4zWE3M3TTvDPvJs8N7AvMbvUTyRWsm74PyKWoVo1Yg1wu9riiXFXUVdGE5bzDHR3",
  "key1": "2R9UQoEFz9rb3wSZmYmMVqLcaZjBpjs6mTxT2c8q1ZqXvMF1YbWkM9EvcuSxvVPUT7hAbdNaTFgBTKFqYhK4raMn",
  "key2": "E9GXcoX9EY9c2j46abLLkfM191NbGjHjY4oubvUtiSf7wR4QvCzrSpa7XAPdng6pmLJ4Fep2L3mVCM8y3p4o9vh",
  "key3": "4hDnf9aJ4SogeV9b42xJqBG8c4RThTsAhd3PRNLYoMgs1k8YjWCahvduzKetmd1Wr1sfrhw5d8kXgbzve2w3m4zt",
  "key4": "2Ra693bshtHV74sJ9xCMFcrv57a9nSJhAVskvqLV5pzeDbJdHtXKawKP33eDnrs7mMT8rFvpHpi8xsRbNvEGhapP",
  "key5": "4o6XdEHb19pSntFnkCSkGeD8GKt1tAxq8vg9jnVNqhyCu6m3CjiZ8ta4f4TWUwu7VWhJeJ3Njm6Uqz8cVvZts7ie",
  "key6": "22HcKDRogzdzCDLLYRJ6RZV3MsR4m4wz5bt6nSrRby6UsUMhMafrVP8jeSb22e6txt1fvipqnqth33SeNLh4t9Pj",
  "key7": "4fM4KGJymt2Q2zjVQeuLBR8kAhUxS36mHd1ejKTpaGVdrnZVTZEeEx1gSvsLX4W2pJ9xzeN16bKjZJSavhgdxtCY",
  "key8": "2wnZzp7naMEZRKmNXLcw39kpueQ1kCX4gdMc6NiXJzJHiexJfYjk643JEiR9DucPyGeFwReHaK3bemiSBE6fRH9C",
  "key9": "xxSGYdpdkvDDX2XUxsa22XXhMKrfeG3SHLc2rdpx6YWzeebto6r6D1fQvFTGdpLRMSvsWkYq1ba9FsBboZB97xk",
  "key10": "2ewCr8YCGa4fYDiHYmEwtWjDRHQVEHPpxApUkppNWptff23aT9GYWtStA632Dn6Zp3CQJcVjW5eKxQ1Vxradg64g",
  "key11": "1nzHPvBn8eGqWip5emvMjMYaP4V4EegKjFRt4rVy4UUsPS8bmkLYKyzxpanG4s3vBwtWBqdn8NZFrTXgnvXtBoj",
  "key12": "4xJNZzWbUEHQP8d734KmKPaAs5QMaXLG2CsrzcQ8TKT48NTqURPCvX5WhCZYkNJj5g5D9Zos7qULijV9KwvQxm5G",
  "key13": "4BbUAs793Aoqkj2hk9HLEd3sxGGJpriP16ZZReyKPsDPdVXPzUMJfZinZ2pba6i1DnRek73zbDu4sGFadAyrefB8",
  "key14": "5kLtjJGQLq42KijS4PcSyy6Ag7NybxWky8vFj2vPwF2UBU8S7TGov4FjLxTvGwnaeacm6fDoETULVKMNQUwJeQC",
  "key15": "2MVxHS9ttQDppEoN3aHsEBoFMbzr1m2fqq4G7PNixDFypniEE6BFygGCtNW5Bgqe1a9jWNYu3FVXP5GQsLPBWk7m",
  "key16": "5Wud3YFzrecSWU1nymVcPd796iEYA6HYhXSkEpCExYi8rPqyRibaPuoMfB6hHk4DQNEhjYYaTmDXUDrnMvKRKVm4",
  "key17": "5D2P37mki87ePKfM8yvfjGRKWCm8CxS8zPMmEeWrjfFbVmmx3feGTKzPMexJdAuCFR3KVPcRnsc5eWvwsDjYjYXD",
  "key18": "h5pGqi8xnJUF98RV2rrvAqsLrUjAdWM4rVLxtt9NiXG5LyMDoCU32aG8TRGd9qP16DCbaQjfVxvyoD6ncgypxp4",
  "key19": "4ALpfN6fK6MChBhfei1dwsUnLT5EnYCYGykz2A3aahsYmNvQgVERkpL8B8XSbnfDt3dWer5Rbqw5yp27SxiaDauS",
  "key20": "4bcxgn4c5DHTLKCNi2eCadtyiNHuidvB6WcH1L8A7dFFX1tMrZbhLQ2FsiKGZjVyGV4q7pjFzbKAzoqqoM33Vxvx",
  "key21": "3WBmcEZzyfC7ugPQrxLFXwvGZPXWqvHSvT1R6KmrNAMhH7t2Cjv5HLUPHvbn3KfhPm3cfHQGCGFQsSShqoB9LDE2",
  "key22": "5MtgNfAHdMVzCBVhDp3iX287ZkChfVEeh8aQ9AVh2dvvjv12qwuTRTPr6fZt72MZXhjuXeqhL3i1SHK1XZQBk43W",
  "key23": "2jQYt6Pv83myj2cB1qthL5Zd44VgCDA7MhHoaAFipps8bromwMxWzbZR6sFK3xoAH1YoEGc3tyBnMNQUS6gV6Gn8",
  "key24": "5FQxWhVi1emN8oav7buzJ7rjywaGLJFChXS5WrabPvsd3wupDkZLumW6T1cX6FPKU7AJ4cWD5eWtnK7ho2G7jk9X",
  "key25": "5xePePyRyUtHHbGG4CmWAunumHMHPm6w3sne13WZeTVpZXiHkZd6inaU27gbmJodHpM9FmE3XsHQkk4ipnXaMSm4",
  "key26": "2YomqPGocE3vSx1pWqt6c1fdBvuMohK5NV5LjkvaTYjywWPKoAyYaFBYVe45XGGWQtTZBwzEATZvBEzaX7Qmn9Zj",
  "key27": "49o6PgnZB6zHDmV8ftTR5MjYBracPBDLho5tRUa8naSHvqc1QdzW54YrtTueV2pgsiyEknbNdW3sG1ixt9mPcKgp",
  "key28": "5JSvV19m2iBJa7y2xew3w8LstGRVNVg4UqR3GRs6eM8gEPWZpFVEJiqCXHvBSQyXTonry6CLwaeGcK8wFgcfcGzw",
  "key29": "3hiKpSBXxrL7PqSURR5wnyye8bcFY5xCBD8wEvjRZMXgStTQ8Qpk167BEZ2yuJRDw9ZJaNqZ9V2FWXy6gGmvpRjJ",
  "key30": "5NzJMX5E6UbaQRFgSj2mtAUGYvsq4iWJ36o4YhUzvLG9HSBQFuAGqk6WUx6A25nxyvnPkJddk9ujvT5tBm8H3GEo",
  "key31": "57mjbitRwq68Tre7bMcwwJ9om1vknmMHCiwmGFD4g9quCLr1usUUpXUJhXdia8XVada5ggsBwNES6jgv8dyAz7P2",
  "key32": "26rKpsmXDLbSN6yBjqv4XTDT8w6yP2fwcWbYjpgGgFEzudQaxoyX4okQ7aNsbYvRr6xiVvqn7G5v71AK9ZVaTWkb",
  "key33": "jVeGX4SZgCzGjaV4G66M6rYWECxE4SVXxUM3Je9q9vrCJPPJX44A5JeubrRNSKrP1dzAkxN4Ngc1Ds266qSFSs5",
  "key34": "41bMt2BJRc98UAxsbwFcZ6z7TGHQgTCKvZvsMKQMJ9p98ts9Rypwyb2LFBLK2QfDaUyTYGLDpDYJtvciKwovHhns",
  "key35": "4jakTNyrJCQwETbVYeqxpHHj9xntFfQGZAvLhnmQBBEgxZ2LsscDKjSJuEk9gRFYV7XatPAbatYK6sV2jtdNfwH9",
  "key36": "Z43b8zKLNM468BF8HEnhbJB71RwykoTV68F7yTN5N6DetYqQURYuETfvgktNSTPSBFgSc9TfRbZWoMYVXgPyiue",
  "key37": "32ow4XjXhiiC1aE88LsPwwGbytP6y4dn7jdk5qBBx1HqpJdWngPQiTLEUTuXeeB7odP8VqiiBds3TYohDTKsJDZb",
  "key38": "3NZ8VAwNszXjiyiJY65PV3p5gWR4uQWNxXP9WfJsdfkEAARW1EnEXnKc5bH54FuwZQLhbrwP8JMkZ7RVh5ZkjUsU",
  "key39": "yCMPxfvGQ7W5Dg9ddr78fgtLZkERcwLnUJsbJQFe2ecZwdzd156sEJmX6FWJErANaCPNTq8au4cSNVn6u56HqXz"
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
