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
    "6epjHEoPc99y4i7iDdF5HU3QYyK4zUyrj1HW97dKUPKubR6McowRMKahL5Rx5aQWkfSref5yDxHDAmzFvM2GLpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNn4zB2RrdyxBLnosSUZ8Fb5TwnvzWAxE7FS2CrzGL8VabBA18w4TVHvs3XZYxS4rYTPm5AJpra1fsqQ16RVKMu",
  "key1": "5qbjhUBRR8vEaHmwNFjJ6MqfFJ7LpZoi8TGjEGBVKYd79mjL3EJTnCnJ2U4WHLJKGgD9UhZUmDrVgH32P5M7AM5c",
  "key2": "5RSyrTYiCfmDTd2jmsZBUPsLUJEvgmhb9mFkAryGJSuN18cHGYMDykoNtRiEN1PkyLSeZLMDmbFXDsCe3rRMngsH",
  "key3": "5W3FbWoYNmC6Zi1cW6J4VDbT1sPLqL2DspuEz8Z3vznQLGp7QmAt4nwA6qRjLbd3XpVBDR354eBfgJmdGcYe3ada",
  "key4": "32sLU3MsgUrTeaFRXcTJHpFQ2aZ26cG2RVCgPUsxJuiMCEBwwLuzSFHBADevJu2ncy8LJmm6du8goXuwhqck1VCa",
  "key5": "LqbQHeb8q9FwvdanQTmGx2QnyizqM1tNfxD4grYHwYSNkqFGwTHqevC3EZ4ixTcFZUwkLxBFDGvQE8Fweb6CkKf",
  "key6": "qMt1yPDXC2Rs5nMpa69E5s6GCD4sDAeHhe12UC5hRhVcxHgen5BySTHcnvPUgakYq9YndHnLt2vAz7iQKfjD7pr",
  "key7": "4GRFNzUfSuzjnYwvGoeNi7kfwUjEgPHMTu6Tk5w2fS71pQbdnqZ3CJctAoP8jhZBDPD96yyDpogVMuTXUMYus6SR",
  "key8": "2EyUFaogLMqWkuS63JBzBsdgaNxZ8CTL68ktuhe5aWFZnZSasmneoTE4vRUrxDUoHrpguiCGyFYoKTz3GRqZYJED",
  "key9": "62iWptsE2tLdXhjdU17QDmP7ubo4WM4LBaeZ6A9PuUvb9ZkmE8WdznpoGjGkSfpirqXHiq2jjt8yaSxSsfVcn7Kq",
  "key10": "DZ3zxBFpBsQ22rDuPQDUo97EzFdkapkxWfoGBzXryXyV3QqLWFJqvzZzxwFZVjmU4B1fWVLLJhNiHUCJToJ5tag",
  "key11": "22WLruLDgM9H1gpZhGK655itHGqg6xQDQqTLMFmdQm7JLAcUttpT3vfL1He5c2Ljfvdg7eLLjQaqzSPyj1dsMCia",
  "key12": "9YzCbdQ76cAdnmLFmKXDEjxyKzNHwctNfx41e6Pqt8zhJBHQGFfqajZGaR7TqAkFRWLjLqRctKoXnkJttWqo9et",
  "key13": "EExUwT4B6f5V91eNEvghHwr5ndoiJEYM3sUkQ74f3U6Bmspifv83xFVkWjJ1ZG1LyXiyuP3WDVmbMvJEG99R53i",
  "key14": "2RdXNukK7RTyoatFm8u6SFT2LMfh8RpgKqyiwsKowMy3U38ZP923yN9Skw3MK3jphtFYTFdGT1XhhUaihs42Cnbr",
  "key15": "bvLK2uC2WYBdgk3cswHFkHyXpXLu7sFssWsTVFSzo1uiiwyVuzuSoxfrfwQZAck6D2EoCswiNMZUp38s2Ci2qxi",
  "key16": "3p9CQdV5ptvzmvPpJktJqz329RgiZvSYpeArYkYGHZmjEggXGty7NjRyL8wSCKvLhYWuvv6J7ZM7y7U8R2cibWuo",
  "key17": "3Ng48JLL9stpNUKrcpRXaa2zF3yuJktwzTMMY4RP2v6EQu4sZ1dEMPBKiwaiUeGQGWigWXDWY7xjDsV8YQbyW2KB",
  "key18": "Aar9uZtPR6hdgdK8oY5iHsg7fhQkj8iBqtgpcBE3o2THwwoGLxMuF5kqaEmUVN6tdv7c2CRzos7vvadUNFQoLPb",
  "key19": "W92LD1eCZ2RTq5TUEK1eJWzhaa7BQYjz3BnQcUAwTBBzQF5spexLoWx7Q1uccRw1HXGUnzfoQ2YssrmimjHH8XY",
  "key20": "3CfznmYfig3ow9XiV1PV7RzKsgxsrCVCeuD9TGxse2ZjXsYKCZKeLYwvbu7evadYwxdDEc1HuVbXZLHhmMtmcjhz",
  "key21": "3WMvo4z1ocNHj7CwT7JK5zZcQvoA17wyt3rC9NDjzkA9yDKNNorwkgj1aiZLfEVJTNNsVtthAHs1Cd15tzVMSiKc",
  "key22": "3cLA2iyaTMLdp3ayYeETvZxsXR9QCKDn44kxhZ8oen16NCFrJ1371PQ76K1FUfbHAiRC17bmGvVmtiGwLhcSTcLS",
  "key23": "4yeGoFAtnEk3n5SpgwpWbxjvhouncCUY5DCizmX6c4omV3K3PiUHbFgX1JJTq4KrPKjC8DNJw8uVAWobXMijmRvA",
  "key24": "2pGCuhEueKksjhSWkrgb8boncYGiuzXqUzQKDgcg14wgRsQtdx2dZvoA5yZWnkLVdyHA4xtUHGD6ZrhnqxQdvGFs",
  "key25": "52pxdDYaqELWTpFchwEsqG66Gj74DGESdYNWQmiFGG7yZ2rvqdAm97U6SE3GvKy9VThbRQQDxYNtrXo4H4kSEnx4",
  "key26": "3QSaYmuUstcWv551c1Ev24EhwZKruHK7ynmAbFJH5adsm4YtCx4aqGhZQ4xN5JDZu8btxv8YwmtULjZo2YRfHchx",
  "key27": "EV8Pp94hfWnhEAZfhc44YuivA3PPJ1XZ1gWG5GwREwubDMfZVDkGkcCkGuYfk9yooZPRRD1oHn9KByq12s7Rxy4",
  "key28": "3puhAtUcvyekCmXXBqBpDZtPf43Q9Rjmxjdjo7HhbFuofbfXUt9qwnKeL9zfeMfAt8SG9pGJzaKG1Wwq556iJLkp",
  "key29": "D1HdwETPZkbYjLvqwBszkEgr12wh6hiRE7NTTx5u1GQDUYC8xncSajvqZqLnzZnEPvfBEa3oRJfdr6E5DUt992S",
  "key30": "3vd1qrcUNw91LGZ9NgfzVFsAaphFV68q5G2zwrF3RUaNmAWbuvzRFePjHrTSx5CUp95yhbKi1Tm3jxXEiKkATXFg",
  "key31": "Fr4Smbgpuz6KqaMC9KJCM9o3jooscRV8AxdjPvRzfKXpbWYHMEWFYbTheynbe28qRigH9Z7NL2ykh7bhpeVEGjc",
  "key32": "4qP8LWpEYrMnpDYH67ir6H5U8ZHXb6ZgkCrrxAZAQZqG7XBr5UXVzvn64AEePdj487QSQSFBZ2LL5rr7FdQP6gU7",
  "key33": "A1NTRM2E1XgC64qsJuq5o59PCnkeygMKXmuzwVzbgv8UFzrMXdLq8sSvvv1CyXhG9rZatebq3Wi3X1iL39bo5jR",
  "key34": "4te9qbkgUt2KJn2eKJcrpJQJgHTV1GaqvV3oQBHRrNJxEpxZRsqtxktiyJ4vEwgaD85P2j1pfp8aABo1eW14s3aU",
  "key35": "5hgZWAPvsj8JytvfGFYh5jdA7Urc2esYAWKP9KFefdQEXEjuXDb6TB8qrtTK6vX2Nk42jh2WP74NpsdkzSFWmJ1U",
  "key36": "ugFeRDya8ACg4sPqBLjzi9mRhQbqPTSCuuy5JVHraajBv9752VAjUmUBCDHRCNYLpxph3iK56LBPDXhLsKaBtK6",
  "key37": "5SZTPyj8mNQeRYiZtgF1dJAwrHuPTqgEa7bsNLkpz6oxDN43oPJHggdZHZRZFSsm8rojE4t7W2vdDYfEEP9McJBL",
  "key38": "5i5WioFcWsSSCjpi3wYQzzhXw7y56WGqYVUwcaq1HWwXdEyGR8deVXjCaXVHXARkEqNcwG1uBDFDKyoshmQ3cY9U",
  "key39": "2S8XXe7huNN7DNWoP2h1K4qobcPL8TUT5UddFwHmtLqF495MiGxMiMzuZHPgdPRtUvwaYerLRHPQcpDGBApo2am6"
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
