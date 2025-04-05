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
    "oPz6ey1W6jvTbeC7QSbY8t1XBKuciDVmsVU7gMSTC9q3n3CJ8nEBFK2BE55xk1R8syzgu9DVksyvZDdaAeZq1QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zW8FVE46r3Qmt6GETL7RSoKKh4U9RgVXuVynRsrsXUden76XC1CTEEjpi4XRWbDPK6Sh4vafxPWHPoD9ZkuTKJc",
  "key1": "5ZGub8jbuQjrgbRBzrPs1KWhsUZu6FbRxH7ZWbZBiBi1Zi9obpyBHmFiGcHmgAbJxWWE7GVnQ42qyhXH2dY3N2sZ",
  "key2": "56uja11XanqmGCqo4yRfoPsJh4wJpkBvHdJFY2GhTUNbAjPdA3c6uDQEfpvfTaAUhXaiGfiFMczz9FrhBgkjq3Jj",
  "key3": "M3SYBdacp7vHu9k6mjLNtuhghqxieRpBLFG9axNwGY7Grcy6dCdRT2MW8oKZyy7NtXoMN2dVe41gnUadqASShjj",
  "key4": "3A3wTHmzyehfbG7TJqa923aK58ciAigYj9Wwr76gZPFD9S2LUhBHghHDPBKzQFQHfr4uY2UBvDT5fDKThfnnFMc1",
  "key5": "5qf8RA8CaEgWrnbNoAdNfdNnmjtcBv5tPKhoo2MY1dJvzoZ6V3fgGkxj98R3zx7wS1g7EcRfkxbJr61omUL4zZBf",
  "key6": "rCMjU6XwCkqBAtStgvVwkwFmE859vA5noBqm2q86Ke91T9Zcn9sWSky6ayFRCo96SgNf2HL9qiRdeFRiYBNeQBV",
  "key7": "5KzvJ4Qk5Qez1nQGABu1yd3jmQPZwguUrLX63oCE5KdTTp5Vod39b4bPNTTmV69LsFymUsjLV1TXebgNkJGvSKmB",
  "key8": "u1QRsgnbbuLXaQofs5SLGhFWMS8ZGd9aGHnRCnD19KRUBVrEd6BGLNniLkQ921bz57z2M1GkJtN5haArVpv3nRT",
  "key9": "5WbQkuo66fr99gBdZhJ6Jit5nJJ4sbPHPySFMztevZdhxGczL1Z6xKSW7v56hvRM84HeMR9AHdQH9cqZGgGYRMy4",
  "key10": "z8EpSRUj8DNWXQ27aGf2TgtsJc7yjUXoQjJetFrvUf7H9JbeF7rCGoZJkFhPtAEEdrdD4c7rPTuHtsHkfy53J3h",
  "key11": "2wrMYgfVdMb1ubEPfsD7HqPrDrDBZryupEKCEdwVQCMCpaHjSjYwc6EkSJYC5dC3YgaXKVXQ8GDzjFaQvshm9U6R",
  "key12": "2cGo4sJir5FBzQV9f3PggY2X5uhvrq2tq5KXL8Lx5tDTpPmihcrkxua9Ve6NBLeBxCxKrRb9CGoseRiGXhe3vmk1",
  "key13": "3JDRbCJHeUAkC45avtj7u2XYgq2WHi3x7n1s4mPtDZynyYD7Bymen9jATK8GFdQQAWCQvgT5GevgHbpkb8LF8aC9",
  "key14": "5wQDFX4y2xpi5NMvQDwX8xifgNLa2u79QsfJdJdadKCJXc1oFhxqwnt3MY84EMT7ZhXVyL1B4jjnVN1di9Fjvb5R",
  "key15": "czLnQQbYmM8Bvcu3F5gtbkPWBEU9AzY7aBoYbGGzWcdmGCzeuTgkRgj7umMWy5N28FWTuxZmY58rCmYCAC7mzbu",
  "key16": "2VxH3i1CgRyR4hTqq7VechoErcs5ot9PjVBFwp7PdtxSn8Wn6VvLhTwM3hrwhuyZGjcVPWYbhrUZ5aJKcNZW6Yqy",
  "key17": "67Gj7ytqvJB1hcoLsuJALKuuShbvSYPMpNvbskwPvBUvABMsnNr9fExXakGdVuUWi1Hp48GKxVYxomUFa4yWJY89",
  "key18": "443Dfu2rmLuiMorDpVzRWLUCtJCHa4tqbTqNH6EaJZmWJgxjEmcU9PxbhoAEB6L2mKE54bjbZBq665M5AKkcC5Fq",
  "key19": "DtezW3SZYHCy88VznyM5HedaK1ywYGuFJepupvuxYddwqF9RGQvFMccT9qbgGXHKnSdyz2gbfEkbrVYodhJMqaX",
  "key20": "3LncEVDnVtg2yz4CzUcyVq4U1Yzn2avHFLziDc7XiE99GFubp97d4vcQzK3N11Ef5D1FoMyeFnzW1kASi1rmNRTU",
  "key21": "5zbQMwHkdBUN5s4gER5FfMqPTjSsXSL3Z4vkPdatkLQfTByWHEYpS1PdkYfpQQFcECWNTA7iMHMSHQ2UhcnpxYhi",
  "key22": "4JUgjTwbdugFrBLjSMCWXXWmxWfH6uo5BkYwAni7wN13NKnsmVJyRQn9CRQ7X5ctQUddZN8NM7g5B4TLe9D7HSHk",
  "key23": "5Jr9UWms3S5Q4XNT6BtLojwud3qzTXDEs7bZUPueDM3QXgBWo5sD19AcAo6LPGYHionotzLnfL2eGQZ1knsQv25i",
  "key24": "4uF8WCGgW34A1L6BpNxVeyKKNMzwWs8PzrGQyw6gBM7absERwzyYg4K66rmNj5RhG7mstXGhuaDWGhRvPWKtrJ6s",
  "key25": "5dZxz1u55SKjd2VX4npJ3kEmMZASbHnPQn1vB81yNqMJWnbqFcqwq6AGCyRRJEofyCZgWWJazkA6Jg6fkMb9p1pb",
  "key26": "5jEgY8svJHLWR5NzacKo6mfqk1KT3eRpUCAqMrTJU51nDKmJncu44St6xNWVcFqR4XiZERaCeiD51fmybt8Wm9on",
  "key27": "3o47D7YjHYwwLd3RiwGwKHuQT5Z7HspcuYzHXaeUAXE8YJg82ACGoHSkon4yBbaXqK7sog4q23f2r3kSDGoBopvD",
  "key28": "5bKi5xzDu7DxeVKP3LbUbWVJEwHK4siGACpzxr1o33jQjfqcVAWSwXtY64NRLGT3wyoM6espzETaZU85jRT3TqYm",
  "key29": "gySRRezHjkPwRWseAZqPcemVcpbVDyrqjrvTrcfRrM5Ye3g7KT9wAZop8HLZi3BaH2SwHECFTfu4m3u7yphxq9g",
  "key30": "3vyAwCEXPprSRaPvBMvYARWdF7ifd6wGJyfxWfEM3qRe69boXcfT3q2CEbm4Ejbuwa9oLWyoeJHAFcDpN9guqg7A",
  "key31": "rUM2LcNwZ8tgw7BXk9vXw7YmscDTshK7Pyy5s3RKeFTWA3KjYXkgZ5XZYMePZ9uAEGTukxzUF9cL6AmUc4iGWKB",
  "key32": "4ctC2TH2w6yAv4TaS7WQMgBJ69egnZvYJDrqNk4MdmDXdpHwANmxmzQMmKTTj5K4bHtQGcb8D6HGM1YwhzefQj5L",
  "key33": "m3rnbTY86qoiDjVsYy1oueh1DKun5eqzsMSr8CvpcNhjKwHGKPhsdcSSdDFkk8NZLcLeuCgHLiBWRiHfiRnujDi",
  "key34": "3pkQi3zPHbCiGCPiCDYSrcnjzfVszwHKgeXKA9VqfgckdrTj7givfhcVsTTM1wZB54CaCvg4ukA2uJfLft4fFr49",
  "key35": "4wH2BPLdHneCnmCzebrNH1DtRw1e9ypNUa1uQKo3ku9TD68qbYty9ss8q91U3Z5gFefvZu2jd9B1tB7AWw4qr3eV",
  "key36": "5PQsDfvEZG5DcRKckkPiTttwfqTPBMXYggSKufWmtRvGbb6RL8U19Xb3iZMENCDiUkVCq1AJp7BMNVZ4D6tp65Sx",
  "key37": "56KSkmvgM31k8pdCFBVMa4BZEBK7bYqHziqxdQ6WZVoNyYbginFBErDsDp4yCQyD9E3N1GX4RULqCGviiiQFiPTC",
  "key38": "3D7R5so7mD8hK9RQCbYWxiDKNZ7XF8gaWsZQstqx1n1ce3mvVns62ULWSmerYmkhyXWiUXhhqV1B4sa6ZqjL9MSi",
  "key39": "3SRa14RL5JRrG1vHt42SbPZkhDHDnjNsxA7EsXj3r6GhMk5aLhGC8vtmZF8nJAeW9S4HSTPa8CPASNsLqXMTN9HX",
  "key40": "3qsB5KXxwBkLBySdFTJN3XVzyZMXqFtUCWpH9aJaHFys8427BPqsk1bB1aDwQTe9j93X6UNPhEcsBq9sbD1GDfn1",
  "key41": "43gVCJ482kfCiknkumVcX6BB8Sg1HQ9KSEV3hVUThTxqcE4nfn4hjRD5dKwSNSAxqzeYQo3JfsX8i957RgmhMYyR",
  "key42": "5aG5bCEMvs37BFRpS2LQmJYQrGEVVEZLWEscWUqE1sfRfcUtAD3pRzUq8iBtgBiHqHSNv4MemCCs5uKeFkgpzbJ3"
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
