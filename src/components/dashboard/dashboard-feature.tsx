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
    "3paVkEieeGXRxkPZX58Q9TP4LT7R9wyAaSYNbpQkeZ2DuBDqHSE5N843u18iAuEbfEznMV35Ai5FB6GGhEpoN9B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jK4iaX9jVhSizzCVQ8aVbvxZJtyPDtSnntng3P5rgktPoQWSNSp76nuL3eTRMD6oKaREmDDBYXqK9LcG5mkPstg",
  "key1": "4EJSTsAUrLQzjcyiEfFU4LpthKaiJEFuPw3CzCALRVcR6jhfMPgnbXNSKuJeNbKXtsaqq3NByNDjmJqbuF5UVCXt",
  "key2": "2DrqT1WS5ZgMjjrzpjWiimciah3ZuQhmA4qjthNdLbahoDnFsz4wzEP2eTNv4maw6rWKq9DpqNdHah7HSBQYDAVg",
  "key3": "5gH7GVCy7AVYZL9y5SLz4K8VJtUpZzjcshZzR9xgray3o6r4K6GzgmTszjC9tpfuMrXc63xyLreVpivzVVm7i6C7",
  "key4": "4Wxzj5QxAFcp2KDaNekJ2wKBNJzKwrsyvxvaGQK4VyaFMuEaZXunV699U2d2bHzcptdCjQpuzFajZRfBCBiJ7cwA",
  "key5": "44qQLmCKmY4BGYwqgqSGL6tHfEbFCRsAE8AUUud98Tqed1wVTQXEtXCotJR5phvfj4jKSce11mgZUBMEg14yNWf8",
  "key6": "5DCwihqV7MR3PkfxqPTEhWNeUh4rPRGr2zYXVg7RMzmDfjmpyNAL6ocRZxXDaWZDqMYCNDA7MSHrm7tRFSLCr8Co",
  "key7": "c2Aj55M6MeNd2ineshsrEWsJ8fDwQyRKeXRnZfgCw4yuZz1ViS7pqnXgVFEqcB9ienHu2vz8FepUtSMgduztc4F",
  "key8": "2RkfpDA9hPhUFUgoYXZ44CWPNYQQB9xX8zDiNprEiVv26vWfuirC8BbdvhFqL72wAxVY5CWXjVfbEp5j823Fqds3",
  "key9": "5VTLpFSfYmhH4E9AbNEBauTqc1cJx5cgiNhAKbhocy2obESHTZfb1ZVGWBQuMKhYKie5dsxwgnirLz81aWPDmZYs",
  "key10": "vubp6zPp1dL4S3Yhpcqavb9jDfbHax2RP8npVdG54S95dHxk8EXFtyYHQEEkJcqFY4yq8fbAYYKeQ9C4AR3cWr6",
  "key11": "38wduGnpc8jWGDJdKrZEs7Xd1aEUeasZXsyFHL1XQ64g1cPSytY6CwRzieNPL6CgHtgXAob7FX4t66bdTgd7Lj4c",
  "key12": "4e75bHZiA7cTAfcVH6EqnRZL2UnTz1RX7YsSW4vKiChNc2gyAJLrukyYmTf6uUWrHXe5CJzJeU41HyQoAV33af4q",
  "key13": "4J1BGSV5D9HtMrKi8qRdYGVjM6TYzCVbc5rRJ6GhVK7hdH5gdV3RcG8CwbDQqitpyzueSCKu8M4B7phXpoQQ5Qat",
  "key14": "2SMbbm5popycBX5YMAWgXX35rkPUNzNbCeCAWrFUFTFv8HubvGH4y4TiCFFEPoTrzCEhQJKxLamdoS35LsL5LzJg",
  "key15": "5BAB4CJzxuGQrzE8LcGfnn1GLBQSR8LL1zJK7E6phHyncRNj3bKrjDx7YwLgznArqZammQEbThcmadBoiYvAPKPM",
  "key16": "rH2NaiMLh75JT7HjFjnd1i4jCf3LsBJnXC3ZQZmNtufvDqrbbpycL2SVry1sWHHP5kkY2o5sRaExAqrcG4MXKsC",
  "key17": "55bEt8accRBgWRq9GDdgynpK4TTeFqF9kDSdLe3XcUu9KZeVg1hxAnCD8HxkFx3UUgWz2FZXdfj96g753dVscQEQ",
  "key18": "2GEv16yAM4cZRNgdku4nvnPoLPkxS953vyuqXXjtAdbFk9nGbUVNqDXEKsqd7zJ76YphSqb8ckMUwCT3bCubDXmt",
  "key19": "myWFoBVWsXZo9e538yDhJG9HXirxGuxzvoMchRwncmyE11ccQiJBKXFkWsEALFo8SK1LPvRm7QDK9c6zREe5GK5",
  "key20": "5vmCoG9Qhm8G8SpSPtBnTZSB5gj9FbvYsw4WXXdbeLh7rArCb7oPiD4cMueFZtbdED4Dd1um3upE5uK1yywfmWkD",
  "key21": "aupo1M81WzyEj5Lq7k9aA6fnA6HEdNuyNq3uAR1K6bD1p9Fk2Vh8j2ZBXrCcfLnh5QtfNew7SzF6UevL1ZMz9hq",
  "key22": "5j2RYVtFaXJjfFjWK7GLhePhkWzDKS8i6EvdMH296hcD49WuVKThGE2hS9M9wLQY6Zk3VR8Rj3Ac7yQfChtPd3BZ",
  "key23": "5TxbyeahdE4MEKWuCshzWHCmZ9g3QVxtJWJSGMRzyzpwFirNvP9TyPtHmBcZCvfeFYvz6fWQ6W9V2GzHJaLDYTfN",
  "key24": "3rVpLSTzej57CQTvjYvrDbcJVmJn5ZQzV1LGbd7cap8ReNMQGkbH292nKqfVfqwFb64cbRDH2hcakCpjzJ679w2T",
  "key25": "3BLZhCtai6cY46u8GJnc1cvAaEcWCNygz9yDQNexpgmyYdS3dNVzLRkgUFJYachexNbH3QnrXURWZPW9QYKWDPHz",
  "key26": "eWECJWM5ryS18gn8YV5tJTbkVFewLmRVSSmFJrEVASBvw7FDc7vawNR5bhypAHiUuyhy16n43VoroZMvBDezmXf",
  "key27": "4SKWHskwb8J6f84m4ZfwwSfQ6iJybXteLM5q7swoGNFstuNeM3oh7XZEyArW9vnZL3drv7uVCkLN2PzMdaCE9qJA",
  "key28": "2Pp9YhNSP314wL2fECNbVWP6Z2mDgVeYtDFV1WhduRmU7cvcANCe2RoR3obDbHQsohzaPfSEjCmyU99QxAPaTXtN",
  "key29": "5HkYud8MaVzeXuX9McrDxntxBQs7GxFFP21FAaH5aUtA8xiTgfruRLJmG46k5Qxmpw4EmXpcyHSsfLweNYF7cHCd",
  "key30": "63UjyyUaAWRhAFdhjaFifruPYGAbrbzy8geXRvC6gujfgDtufnfvW7N7fbubVANrFYwUCQaKWfSVAJjsii4xGtUs",
  "key31": "2Lt76QPrAB5CpFBB5QppBu285YkkDHSPNUH23EWRgVx51YEF3cp6xMbMsQ5aoD18bZp8W6GyuEXFAgohW5zNypiM",
  "key32": "2vbKycaQB3e1AotrnYhgBefLLsjegL6QxbXPRPuSBrpFaKo4ndFev4k9i7xeMKTTAf272RNUp513ycAMj3tybVQT",
  "key33": "2m3xnkhid7zL8Wm9WBFCXdEeF4FKDmPPYc8BnUw82UPFpmDWtjBDqYCzWnh1xX39XwkRwACMoGABnsQJDjzkwfyd",
  "key34": "122ov7DWivxGJMeEco2pwV8FdCLcPaksnto1jX3WusjfchgtEFXdpgaeAfCvJXp6sukEK2L4pESu42254qbyzTtn",
  "key35": "5gtmUwsDYTwNSGGwaEmwyLHphmXQhUaPitwXjBudZQCpFj7bZTTUYAFRMoJ4yCePmE22ckXZHJpixsLoYRqwS6nT"
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
