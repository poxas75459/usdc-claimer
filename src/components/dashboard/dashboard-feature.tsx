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
    "RENS4FJTjZ7W5sq8afus5CurGwJyE8cP1fbTDQ5CksVNRsa2n4rDEumRRUvN1cXAG1mALMKRNwWLgnzN46ADaW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXZHUgTJpSiFPqphYQaMcpiKBxVrSscvgV7MQzahv6rQ5CN2edYZAzmvxto6gRLwdJTW8yNuQstvipm2ksVSnD4",
  "key1": "d7xpu1Ucan6QKqxabbtrU6tc72Kph5wGhE1yvU8rau7JP7hmPvxTNySJRfp7FhtM67DiyCaCnn3GkQvo4GGyekC",
  "key2": "1YDWLWh86EpfTZJuCjN7aNPPiTSHCFsTfTr5tDkzxR34qs7RzhQjffrfWRNkBc9ugNpqtEGVd1Eznda8DAdnjmW",
  "key3": "5Qq9pdFMFuGXXvVLUsEs3Z13r3Xo69ZY8cvwo5dJRbM7Y7MLhecW2QpUdDq3y3ik6et8WSArEsUCaAr862ihSaZd",
  "key4": "4LtmcmrLUEBq3Zi7jDjazNugPfRwgTWWhJZuSCAjBSxjoqaf14z4gJivKoCvsGe5Vuf5Ct3z9mTLWbC2KSv7VJsJ",
  "key5": "5Re9jMgqBmWM7P5ecapsNdbYW7Cb8LzTBgDrcF9hrwnjoAQtmwiZ76u9nQ49v2XPALhTNmYo8adt3mXnKkeTu88R",
  "key6": "49MAZsnc5h17niJLnTYaf5fqW9V1r6oaZe3kmwCwG9g7w3nUqosu3HswoQZxwEhGUeMAarZexixkhJYggrNU83PQ",
  "key7": "5SHoRHJ9YJ7rSm5kVpSMbCGy4Wo5QgLZmAsLbHqDqfrtpap9WyvEGdCWLYwQj6fSF38aNPz4bYqXmwWEx1TQiTkT",
  "key8": "VyXKsXDHmJpTnPNCMZzNRQwSHU9FJBuBaycSWd7JPeAAixGrFjfVH1TqiZ3tXgcuSSP3dM5fUfjB8mAvzppN2wS",
  "key9": "39mjoN1uuMUGgNTmPwtUFarDJCFzkz4Q2LM8csmjeYveBYPsEvjajURdEi52LFkytiVSrjNq4x5oSoJfdPKCYCi9",
  "key10": "3GLCYs39Nh9Y1JzwvdYcGyKunjk22kFNDzGyVfs2JSRnpx4wZdGVHzo9DTs6X1RHoGjUr1JqNzR9V9oenzBmB2yf",
  "key11": "367QueJeeroaKypUMrf1733kXnjpRqMhs1V6swYLEcpfqCz5kihGpnCHimfnYyN1Lh7D43TVhCbvughCzkez7mMp",
  "key12": "2So3BRs41a9F6g1ENksZ2GEKKX4bdWoe1kakoJX4ZjtzRVLsBXL8y61SHsj6haj1VoyTGUmoQYx4Nq7xeHpQiMVK",
  "key13": "2d5ijvHvPHpH8cohDuU5ktWyMiESr9r3qrnESHLgpy5vX8EYkD6SHSZqHKoijNs7kNmPjLq2drMhb7aswf7iq8B6",
  "key14": "D7MSJiHQHBRD7oRFsPrGCeWPprF2fiWYSQJqCxYMjwtydmdkiNrAqD8Tfy3kJTbMecn15PAe16UwnHqxUuivhoG",
  "key15": "5zAz23xxyxLzr4YDNX987QYMWA34GrtmjfE9g3ypAJ7uq81hPLb67pgFcX8xYQJcG6XNKP7oBL9mPgA2haCxm3yu",
  "key16": "JS6C15simpXRYhJ8Hfa1aspo4xNKTaKnCYpuT99fbzDbyC6TGYQ5DjCXvpcy4G7QWanCRyYZQafGaCSBx1p3FSk",
  "key17": "jL2CKSbWdftSQehu38exhxaicqMuBuJcA514o4cPAsorUUgqDHwB9d8U4hGHuDLbHrFxBEMbzsWgtAk2FeMz6Wa",
  "key18": "4YMWmw1uGVgnvCo2d8pcFPmdKxbsuZcfpV5WN5cy6nwQe5i4zLpqMAH5NgYwKqQs82xVMaVFEa6PoaigmiRiNM5",
  "key19": "4SRaQWe45eczJXjU7H5DDSJz13LHhDX4UAS98Q5iyA5LMuwgs1VasL4QTsS4W9Jpc45gxyw7RZJyukP9aDTFskNs",
  "key20": "24NRn7XUz3jL6a99FTigzcZpu5NtMaP2sduaLxweWirifZHYCEgQT9eF8tC74zrFzjfwrWMt8khYJH7zdvkaTceZ",
  "key21": "eKbXQHTdWVJpq8bPseQVXkKB4dPMj6okeWp8ZQ5xyMn7VRNBUm24EVGspHQRy3QAC6pnMityx6FfqbQxFmEje4s",
  "key22": "3iviFzvgRGHKeqeaLuxGqh7xoX6KVERRrHmBeG5zqppSwqSRXnU7qzwwBDxyEeA8DxU7G3PE166dNa3SV3NMmCjg",
  "key23": "G5AoEtwYakQjrfojxf8cf1jxYndrw5q9wLHGLX93NpHvnMAdw2eUnHZHPjEnuVAvVmhGJkdsxPnznaduCtUw7xt",
  "key24": "3ArcCZSioyjvQwFAKUZo31HRc4meeR6AhHYR6qAeHRQHgd2gSn3ky3pqZeZmQrNE8Z6L5gkswSixTiSiLeDyX6jE",
  "key25": "3YHud76itkEr4u9zas1dsTAhBFZeCDuAKZTZaXNM8KnkiX3qTafbK99osx2cBQwbFaxybC9iR2fpqZedra55H72q",
  "key26": "37vtD4R2g9rrktjbqNWLmSPVkXz8JGutVp5jimMq4mqbm8uhWfaxuYdGU2FDVERJdBSyL8L6KQ8m7aRJhAiQoG7q",
  "key27": "5TgfkxsE3eXGrQhKkkf3xfwnLwbL8WsyjnvX7VSscFnwjr4PKBKH98JKG2YhVdYe7PyEhXEKSZDVUPKXV5W3FReB",
  "key28": "5CudjGHhZqPBoLG4pF6A7WViKsYQvfyiAVZ4krz7pYTpvVFY1E2tcTSoGz7WMReghACA4FGziD4zfjaiVGky6ov3",
  "key29": "CaHWad5VsJjGXX9j1EnQ39JQdAGjNutn38jEKm8eZe9bo77qxARtBQiNm9wL3jvacv1PUKH1f427rFq7VLJ44EN",
  "key30": "bwbHxbWAoMVczcxDTQedHCMpnS9Cti6PTR26xH4f6VduS81Q8H5UnHoPtZD4FZS4y4brgKTBa7H6a58k14oCcjY",
  "key31": "dY2zCXrwcf1C7cbT9nM7FAPYLPsMRUroJ7xBwUsVsUxr7Bw8hdaQChmc4B4r7zNgRhyR3DkG85eCYZZFeaUmFop",
  "key32": "4UW2ijcatV3it7Yh4uctGHtKw7wQ1Q4WDXqVKArrDpQzwfgaqqvVusnypmuBExz8v2ugsYCkgbx1DqQJtsV6eW4m",
  "key33": "4h7wqGzduyYgQPNsUwrRhGhB9Lhc2cHjEeW8z67wEDmEconFC8kisrMaTTwLDtUr1bedtxCUxfUb4XsVLiquRuc7",
  "key34": "3ZvAnGj8fnUNvf4qsnmiyQS4XPdTcXBYVmmetRJBMNEYuBBnbTyiyghUVAwwhiZo2uhnis2XfQJpDfEebob8Z5LU",
  "key35": "4B44BQtYcBnYXofenuRbHrzsgSmDZ6jyNPfj94xthCg9WYyKR7y9bs5qCmXCKdd5yQ35K6zJBR6Kne3bzaL7AGJr",
  "key36": "39jPGpzMJyfvm99ayYTU4VQqpgGAQLfeMX8GRUQxvDxN7vdFLBTUkYNUZLTs43m4JNFTbdy79Zk7XjcpAviojpHy",
  "key37": "S1tMKLCthwNX8LLc5QVyFWt4xBuUGSZxuAgDi9npQrsuDJt2TAvny5CG9SQ4FB2LR4ciKMmZcekW4GDRAQmfYPk",
  "key38": "3Bi88GmXa3ybBmg6V1A9oQ8rmzedoXVW5nACDK6cU6JR3aM3PKyvRg1SJYdMaMbKz8ayxuXbmZW8khoaEx99YcrA",
  "key39": "4W8bK1i4jhs8EY1DVupcUtg2bQgAKoPVZmkNYBQD9CiJiN4jDfVJux9WGbdEbJMEB2CfmHWQhiA8p6SyQfWyJobH",
  "key40": "rx2hemjdxFMKAsQaPqYsLPnJiKmMYGmd2ovxcVxFfUaSLmct6L7rhxmKNZSMAPSrSp342S2XMXaJrBcpoR6fqU4",
  "key41": "64qaSpypD8xVnwPpX6QiGJCKGZytxy9UU1UGqzYDcGU6DYej2mpWq4BACM2Ee2BFh8s65k9XZu6iMmxswB38Kqbg"
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
