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
    "4gmoA7sRtGp7XuoV6W63ZGkr6EVWVbdj9xgjvFtLx1Vz3UQiouuvKERyieBRKrS7qKRyiuTwtdYZNcq8mEchBsF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whScFHv2HxvXZ7XWBMaKgjLRLudTQYc88xH9eXKP1oNPrswecFiyv7URiMF7JKy6fXmCT1vXiC6h2Cd17YWxUUM",
  "key1": "5ywmpzohoQoDNSm6QHSYGTMhJ1zQb73YhqDhpNjU5z4m11GP4anzm2b61GFfwmZ5qWj5J4iPy1ytb98Wc6M17b7H",
  "key2": "3bRm21FCPB7fvT9g6msK5EErnNzEqVwbticHZKB1iLSneYAgxwhgyvGiHHjjRb5qee9Zr8dCTHtmGZm4L9LtyC7z",
  "key3": "3MCYa5g74GSZkKofiGun4mAPrCbSVxvZUnFkQLv2bryfc91y1t78DJt95ejxxb8gPDGyfeK5WF1zRXknfdbePuh1",
  "key4": "37qrwPdxTif3ZJu56xLXKPk84erpDUtHGrYazfc6J1Z7c1MtRS34vfax8r7SpuHMPYeX2WmeaUeyDRSdKTUL6AZh",
  "key5": "2KHhG3nxMAAcuQdNQy2jX6jF8McLqtwxwGTuuucr7Kji3VDEXhY7R31Cz1mUBqEdGaUxRBz9LPh6Dxss2sGfqoNq",
  "key6": "qqr6YAuSNdhm91yuUxo3GyeEt5C9GFbdkWiF1VhiPeTUCACKquNUYGaesSbta9Ry25MmguXSVRxFKxKFwCNKzht",
  "key7": "2ixBKe8VFXRtw5ER6SJxAdL5cHqKqr8gopifMA1JyuZcAAGNdJvtqyvZ61MHSYme3qFxpiYGTo3r5AGJPVjdS3nU",
  "key8": "51WoenF1VMLVLu3ogjoCrB6P4xBYPVexsZT5cvjjSYFsT5XZwjB1XG5dY274vBUkhaN2cg4dFXGLRTU1snVxTXm8",
  "key9": "5kWhyANf2we9SKUs6Ux5B44gvgVWxpXR6D5YHkTVEj14yHmZL3QBg7f7dqM7AdSqQaVEcpGxuhpR3Xn6cWnEe1s6",
  "key10": "nghwpEDCiAb59niiWd8k7YiEHcmLZkB5mLk32D2kjdHRz7P4hzu4HzuEydYiR28jg752xHDMpJ5gchENWYxmBaC",
  "key11": "2JNApYhykg7rLEfueTLsjCx24Amra3cAKUSJqYD2DYzPCLYsEZoNJw5kLyb9rGcwJ4JDW5EE2CfSTWyiKdi21kNe",
  "key12": "4kKKm8Y1Gnr6cYs2otaJbWBgcncoPqr16F5uVfeEN5zG3JrJFa8brTkrpGKBMBsRwYigxtonTR8a6CeGjDPecjGq",
  "key13": "VrFu8DfPNRuAtNKCj6JWP9ndKpGmPE7MUiYM8sPXUQENcxttUtTUdcCytUnckVnB7FNvW7cREwmsCUhoB7d6o3X",
  "key14": "3jLR28YJuFxUxUdwZnbSTxHteUubMYrpPrysA4nsjn84hGfkKFQoSio8qTjBfzf1SkhZjVfY68CzNQL2gw9Ubawt",
  "key15": "3amuWR68WuRSQfue8MFWcpQWsgAj1augYZ4eQjFXiavNV69kGQu3gZPCsZzf88jWrFqaLHLq5EeHaopxYQLRrV1y",
  "key16": "4K5RQpvErmDY1rvcz2Tmthj2Yy2t8EyktQQdfpMgBLWqjmRW4pn84BVnf5DY2i6QtkQXaPjAZyZj7Sz1hAJWyRNb",
  "key17": "2qWFqSfAD9SU7rH7dKcaVn8EGkb3Mv5AutvfKVp2ysgzoqK8V5hTHFCMqqWbMwmR6QLnptcbAoqPEtjut5hvrtKE",
  "key18": "5yQQ55UircErhJoDpMMesvypsdaJ8VDw2aCwpyr2rtqFtTD3PhyKU8882XeqUrWnjHA8QBQ3bp6geWqRpSyEc3RE",
  "key19": "2YmHnpYeS2HdkF5eJKf9Kf9wJvt1L49Q2rKaKYb9vfYrViuU4XuMCtRM5HDJCdbzAq95Ac7Ev9aKEfE8maueEpbs",
  "key20": "5NijpLBBHFULqSnFyp9p3qrXf6SQVHDdXmaYLcUFoL12oez5MC3K8LscP5zgD22AkC8zGMhL2yqbxjML16DhcNCX",
  "key21": "eYrV5yrRDqApwU35hjHtWEPWnGTc4AgqUsFCqQucfPvjdidYNALggVcKMn9yBksmXV5kCP5dZGVtLZj1zho2rMS",
  "key22": "3wQ3tNdb2qsgfVKqi5Ph2dSKxFEEizgn5jZvGM2MHRqrW1VsXoAWUtYSe983t4Nt9vturxMT9TPNX24c3EjBfMjy",
  "key23": "vtZHqKXw2QQSctvteQ3FJZoWEd7tj5CFUqcHf1a1XnqgHEqK7WeWEgpuD9kLkzfB3PF4UxnzdNv2LBVFLhWeAZj",
  "key24": "2dn7vMwUGGbzK7vjti2rPVaYMdCWv27m1sjmwrwvKWyT2jaJdonQetgQc33qwmjkund8xCC5gdoZsohspoFuGuRp",
  "key25": "5STkATZJAtw2ZN5wPCggosbCwktt4fzoKikrHz5j6ZuR6WrLWCrbk87HriLBDzGe6ANYXB3FwNUPv3fFGxDLs1Xr",
  "key26": "pHJGwz3d19pEqyPqz3pDaCZPwPNYzyCbb4chKpcgynPYabwkfku3MwW424tLZfQiAb3an98QbMjxTA18WtVm8Y5",
  "key27": "2o1EbG1sfs7au9PM7wgG9ZQSfJ9vLJpESSGDwXGCRWUsXnGgKnQzZmwoDA7bYFVU9tkDDC6vx5R93TzisM22fzFB",
  "key28": "4eTFTaokfhFBoQAnKZn3ih4M9QJXoiwahP5NmCpPJ6S9YAfZpeWYiT3qspB3qbGHi5yQWvmkjNaAM6ipsCYUEmCq",
  "key29": "5jnxMdA1HcYzpqgcJiH1UKVuBEYDsqpJnGsupQLaa5aactWSXEbuLdUUFD1w3Dq1uwebkL4BBjxnibSrm1gTBbkj",
  "key30": "54R5VvK64CeGuyj4F9kPkRoD8YvViTiqooNAAib8wwroGphs3koerT5o2y8L9J2cqoVoZoLoHVQR4vU9BCvXub4Y",
  "key31": "4BvJjiVkeVrR6a3Xx7wgc3WjiEEnFjmQuN9vf613QVJWH8JFqR3L8JRHxWHbaG4fQuA6996cZmn247krs7Xq5D43",
  "key32": "2HgUoNaba4hUChhT4SwWFPwnkH62ctsbzDM8GxnVsZDFc8yteoCTNBbT4esFRRy2Lb8Tfucxwj2yKKEFFqSm5Mac",
  "key33": "3XqGWq1bfTci5HmpcUsPqhvn9YkTDN9giahYqaTtuJByYQA7KYhrnVWZEwpaQvfASDoE4ksSaLTfpHQKTbMnyDK7",
  "key34": "2nk1TBJwcZR3e8HGBiL9wc4gCTyYwNJWrMTLtEsp5DAWxXZS5j3JKMXeJ4DFm3FA61XVLkN3ADKUer7FVCU6m99d",
  "key35": "WkX3QWN6afZ4xWzvmYbPmwoHxG745rcJzSLDTSf7ZHb2WaYCfbvjH4U4N1RogrXP4k7SXSdpkiEnyZBca3x95Qg",
  "key36": "29CgxdwAxf7DcqHA79KJ4TWRxP9W8hMtHQgUEANBpnQbaBGbQGk6p9tbXFNv4e4JYuUMxVinQT41KfECLBxaxWTD",
  "key37": "3bA9vAHXqsnxfWm2G2RYnDdoEPgaSnAKSxEWbtidoBGAct69SdS1xX4wcS64EqxLxTrvNPLfJTN6AU5SxAEjYtGk",
  "key38": "4JCxEJGQkwhkrg5PSSguiVYNcyJxsDE5393YupYdVcgd4TVgk2M7ai4Th92X8HwKkjz9QqCmmGfDp13D4mkBrCzB"
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
