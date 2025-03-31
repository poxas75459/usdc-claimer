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
    "5bTWAHKH1yh71g4YJr1DRERMpPGZqDqJz57HPLTvxoJEWrVpaoYfaedtkVotFGESvchFXcgeWUwbEHpGiEz46LJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpYvbEydvfh1pWKSDgkSmivWR9S51eePFLDJEjvXmyYiUKTfbEheVQbfX6UYnuvzzjsiu57KLdkpVBgFqUtaShr",
  "key1": "3Gmoi4mkzPCNYawqde1fpCi7sqDERZenNSrwgPY9fa21ZMtE6kaD5oyNbV6EvdjtCiTTW9sCJmZMKtZmTTmH6v2c",
  "key2": "37TfCx6A3MNkAHMM1MheKLMBmJDAEC9S96U6H3V6G1xUjH5At16RZjkKNvXhdmi5XkD8awQmR4yGHf2SVWtpKcs",
  "key3": "3piSFGRvDXoJd9NPXG7SoVJ7r68gVqk47yZjPtGvWvrpCZTryHskjQ2kv6ASVPE5yLRUeywm2UwEe9bx46qp4XxD",
  "key4": "3RKaAMhSh9USuDezuJGbRNYPbGdLXyHhUFGPmrUUoJqVQ6ggV6AjEdjQ8HzBb6drg3Hc1XQcbzzkh6rPRQDnD2qh",
  "key5": "6hJQNNuXfnPfwePBKncxHNJxbQanqHh2g8Uw74e3hTLjYNDwoPxDnfFEoetwy9GZmThfHVsE862xxZjD362JTpb",
  "key6": "2af9uqLfDfgbhEuXe5kf6bC9qZAuhDt7aKqQmtCFM4847pA2fYTeUx2nH3cPG7ReHxaqtNTsD6tQKdEuQW2W8xUy",
  "key7": "4MaxSK5mJWV75mxxqZYVTg9U8VnGsuYLuwd5v5rTvpDfwmoD4DchWM6Vvcy3RVKux6x5wTKVy577YZWe9exARw3h",
  "key8": "5wzFBrkAgN6mSZaG4d1BdJqGPUUp6jden3k89eMoV9LJU182kPkYj49jBVkfAkrnoVUYR4AefsgwHyHeVVL1ejf5",
  "key9": "ffxsh92RcPXpFghZyNrczKpjvtfrwx1EV7ZReYy1c2oX1i8bqVPWyvGLQjH3wmmQ5LysoH4JF5JFsQthdTJFV4K",
  "key10": "5KQ2Mk4kxriZm65vRRi8mbRasM8TBfWHBjE5RucoRmyrbkmTCEDDw6zPE85gPSnWPbH6NKUzaWGV2JF6YXDezxRv",
  "key11": "28DikQx8SswzvdyM6vcV38TJYJsFL55PZbxa2s6gW2BWxwUouu7YL672xfYP9Rh2wgMqHkdaTtRA2VmyUYcsz1aw",
  "key12": "36p1mmwGAeJ8PwBVPadWbLHTSuewBsRGzyGTFXVMz61eA91b9PMCHTXAUysaqP6aHDjFmiPB2pydDEnySvbDXzYh",
  "key13": "5BdRs8rXtJeamA2rQxA7UYwc6ebjfmf47G7nDiSSp13BWL4RZ8ajfacRN6oVy2cotCF44NDMEX1XLWMfND87DBqZ",
  "key14": "2x52QpUKGutSAJDLVqQ3YvnM5VRt7PyU4zBifhKrDqqQv5PZ6RcKJ1SyyHZX84ymi4MyXbyQZhGP46VcnxLKhQoR",
  "key15": "3m4JJMujABLFrxSSAmmSV4hXViH57EUq6bdyJDizzSZKp7Nn7y5oe6tWbWbTunc1kyDxXQgNN97Dtrmefgy7eram",
  "key16": "bVVCoMhxx9u3zHXWXjbCB68Ph99sX96wMdGuUwgrb4FQEBqFNFCovFnZBJL5xAVMP8qsPTcpHsGeuQz8FkLBxA2",
  "key17": "39Db7pw7Yd5YKrppMX7NJNA88sdGhKrJiqy2CfdvGYUdCZK398a9jM97GWRyq7UoS3KSQgoUgM2jc8tVaVSy8BmQ",
  "key18": "zvjGCfkQiWtoEpMhXv8KQjPpoPjpvwMTVDvB84j1ZPcxEhfpaboCBpxhmCq5CkWLBhJArjGM4QdZWJEuQG3QYBU",
  "key19": "4sLATd4KdY3TgXjhGG8j1SjizgJ2Kp2ZbZm8HBLkUarHoAt23enHM9puaqALjfdR4jmu5VCGh9xGRtAiFgRaWdyQ",
  "key20": "Gp1jMmEA5j853gshFqg5BXxDkwqS6UTdbN8H7LBLwnZrpjCU8gxXLdU1NWDmYdtZ661uPFwEb3vqvSNFJRKjEQ1",
  "key21": "5HfofGUrsqXyyQa3ML6woU6URAxigQHv5YcSns1LFnuK7K5TGL9kxFSv2NorZ25mfKha3gYE3MrgTwKDUSnQ76QS",
  "key22": "42taMDaz3dmQVamr9e2sArCoR9GWCHNYxSbJ6bXSrSPDtVqRov5EPV5EL3WBHGiEMwCbTgzW2cGTmbmyy3siusce",
  "key23": "2Wm6gUsR649CNh3aeQVxo9kEfJ5Y4XnHrAPCT4kceCysagfGwrpzTEzHkYL41kgiSU2aRCo7qNougSwhSMmckW1g",
  "key24": "2fWCXHLP3mrenDMHkHEJRdiwTGuLwVHDPFLM4byR8RGBJvRx8AfUuNMMCb2PZLZj2U97XCZGGrMz4yWNmAsUyGSk",
  "key25": "s2p5nb5uSDCWLr4cnatqFbNCHGTicTvoTbWH4bR9TwXaGBcKLkcWhpzL1WmDyE1whj3Hvi1dBZYG5AkH6Vx57bc",
  "key26": "2HYcFeW2Q4q6zqaPEujsCdEi4JhERZA5mVJTSswujX8z5TQXqVVv9MF4khxCGsoXeaniMAAbikfq6GcwpK8iApEv",
  "key27": "4kFJ7c64F9uogjrdvJXuAKbcH191157FfwDvxmrHTX1VzCctg2MQrGTcG99eSyvAcMGSuTnkaSqFCF78Bu1sdnWC",
  "key28": "21PTLBSFEaXww7yVnVTa2gzSRireVGTpFJ3GLzGqEFi15SzUhQ6UpVBsDQgYh4sHbfKH7WM2JK8sFbPUAntdC4iV",
  "key29": "25p3XWSt8MedoNSKmxQtx3rx567kvZyMsvyfhicTdBpSVemeNWHSBjuuq2eNfVMpsQoX5s6g7V8kcwJ9iRoUE89a",
  "key30": "2m7u2caz36VcjrVnGGi3TPgC9Hzz5DG8QqMfbbsKyHzQ2KwA2G7e2LzfGaK9Hy5uWgdghCrAashonmMPciKpTiJg",
  "key31": "4QPKDrvp7KH6pnEzb644d1KnLcgaroedxxeBRwrVohmn7QGcBLcbDZLWoAZETccn1aACvcRE3mWiw9hxELaCmpX8",
  "key32": "5R9tQjziUGGrzJACNf4exKAaFFV1p1aTmqeidcf1Mc44Wwj7AemAagH9FbMHUQvh4cM4ZfzVyQf4d4sqxevD9baG",
  "key33": "43whuw4ThgB9fL8YGmLPbn5QwfSJDuosK6etxtYuZ7e6fJT3GGnBeLAMEUG51VCGMcRTcgf3aV9Qqchb2E5nnxfg",
  "key34": "rsUnjkzsCbvn1EnUVsBuboJicW8nE8hybmC4yNTV7kHvn1jyNxQ8imjBxM5yxjtbe9NaeRoKVYeJvP28Exbndjq",
  "key35": "4sVDhv7A7bBohJe8ehoLBPqHQATHtdjguxTPkz2N1yXAttD89BxUY7bmY33WvZdFkQL9HfSm1U9d2xyML7dswSaU",
  "key36": "2xD2qeedbKtm9ATHVPUxoqZ9yZFYgBMHmB2MEpFpdssoVcibZz61rn4Vmjmyv46kxpce7F7ZHZBHhKVop55XcKVU",
  "key37": "2QTTnvKx7WWS8WUYaP7TkpcETWsQbpvPDh8FPeMJmePPc9ThXX4umq6FEaPRFDk59sSf48Zn4RrdsSeeXJGcBh1Z",
  "key38": "23NwUBWbh2VnxG1KJNUtcdubdQRwJSkSU9gR44Z5JMCtCH6ybsNzN5uqpsUFNtC8w2jJxeh1nsVXyKLubvxeAuXw",
  "key39": "8hGkvuKHNnkXcQUVhNzFfjAYsGv7NXM6pthcht2J6LUPAjgyBXA8qSE2EKYqbPrBW8ud9yeg42M7TbYyhVaPThB"
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
