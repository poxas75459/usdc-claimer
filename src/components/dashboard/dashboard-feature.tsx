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
    "3YHKFQaEgBL3cUor74iTzfmZUxsd9KyQys6aNSwDZoNe93PXf7PG2mLXrSzFAh8FBKoZDp7KrLs2JtcL7qMRzbeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qH4BweNLskzcN468nuKuUWwWnHEQpsnW25QdheqPr9E599kRZfE5mq7zwR62cTUwYFbkvJiKcpDxC4ghp6Uwr7R",
  "key1": "2QstbgNoGzybVk4qW5rAKNDzjr2HbhzUs9VmZx7y9nkZ7voewcCQLV6mrbKX5eYK8VqK7U1esMdZKM9oiTGhL5Lc",
  "key2": "2RPFjhL5nt9Ktw5yqBzJA3uMdCpfwYo5S3ZDHpJtG8iN1ka1pprTokhdn9AHqn4cWqaeNgVym8Ko7kUgh9LHT54S",
  "key3": "42YtPrf4nqihfyve3BWXbR9JTUGh4rkbPCY3gdShdB5TXC2n4gdYdrYQB9qEomZ4EJ4ijztKd7vFxjVYLEdHvxrE",
  "key4": "3YG6FHoCuDoLZvJAHRfXn1XPnsNn5tQGEi9ZotmvGMtiCLRqtRBiY9LAc3UdPJLojo9L16xaJVob4ZzYx7DYwZ18",
  "key5": "56QdQbwARxftAcK1xU9jBpwZUp539SYuGZRr3Gdcii4GnDQRP8mFCurvBEmRc11fe3CpoNj9nqX2wFrJQTx9yH5L",
  "key6": "gTEQ9MdbcGX8Bzr7sy1Vdd5X85CgHMLt8z1bpyKUpPw3tHytZn2kCgsRMcuhR5naCV33JvAr7WCKdCPLtpCCGeD",
  "key7": "3UjWHrLiLkRtLmymdERdefYmoUgLCZNsipJzYtAADeiHnCc4CnBD4E9Fn664728QMBFduYmGCrQ85mt4CPkCKvix",
  "key8": "w2MHpn8gLAToFiUMPpAC5spRm6E4heZVCNy3LMzaMjUtSzrFVPnAKswXvWZmNw32eyg3zjsGWJqLesTmNyXCDQf",
  "key9": "3uHDqF1XXXp6ejXkmmPVDqLc2G4XRUGoD51f2uu732rszoRwLtv3dbgmxpa1d5XcJ2hU3fKkcky3hjU3c2UPTDyP",
  "key10": "3WCWs2cAeq6CucNaF2uH7hnBhpDxKYEjnD8TTzVihCpXb5RL1xJocswa7vSvbN9B8WG4XLfJ9Qw6JrPHiw9jZHwW",
  "key11": "4zbXR7oYzMGDXj3YmNdumcNzW12jGXjFoCCd9Ppb5dopffnsNbN5s2po36qwQmezyMM4ePgqcn8umVX6CQ9t4Yv9",
  "key12": "4iY1xq6nwYsoXsbJKaKa4GqfGendoXH1tGTG41QdnSZ3snZE1jHjLa4F9EHxTcEXDa8BNdGnP39KbuJLEL71nnsY",
  "key13": "4pm5gjWihHatzSywN17pCTUpWNUuSpBo3nAZTDAYb1nfY4LMMsUydokvm8Zx8ddXHTBkJuGfYy5BQUSTVYZT1ZYp",
  "key14": "5nVS9zfN6FbbauV5uxi19kNCtEKAiY66Gfd1ffSALmD3h7Gyucm11FQCC5cW9TrSLFjH9Sap3DswQcvj5RQjX5iH",
  "key15": "2ES7Mne3vvtGX1im1ME9YmwXaz32ou2TSemqaChKVAxGZwEdAhcTYkcXAcSEhdy5zsypiseACmP8vQJMG26AKxsg",
  "key16": "MV8LUYPhquCo4QSnNTTLsdh6XVhs8Hosh7rE4v7iHntE5AeQnEsMpU3ueVH4CEXJJJeYaUX9A9FW7MbwNdHdkkC",
  "key17": "3WCb3yehJJbDt47cimGhha5eMDTn8LebADSwCLxN71X1mY5dxXrRzWfc4JNYTYi7TMgQfPfaxos46bUKmGqnAje8",
  "key18": "5rERjeMDfiEX8z2PGm9JST5gxjz8EeZi6emrYDtx3ZMkpVUiSaaNJx1TnzMxKY3NNfZo3Q9HXGVt4gqYitH1eZTE",
  "key19": "5NM8xw5pLDvkrCQXRykzTTUxF7VwkcGQiwePaET3oTRFPriaa61oZR7jHV68XDacK7DRwyT3BfEWVnZR2KFcYZA5",
  "key20": "4if6KhLGVbe83snJH4mVXy1nw4j6MW3kGatHgbUAx2BWKnPdn4DmTjcip1iuoDJTmx3Eoqxhq29w81hSbcYACXwi",
  "key21": "63BQS3PTYKaYuT45FiB3jG7CYXLdBXv8sB9PFVSyA2Jiv8HEuNKLFNvSvcUrNbdrYFq4qpuhEdqwCLgukCTrB9Mj",
  "key22": "56XgGwMkJB3djF1CyihUNLxnAz1GUTYVQMKaxHA1E6Bv9bPqvYt6FkfKWkbuges3Q6iFmL7SWTcHUTmUqHpv6iCQ",
  "key23": "5hTneAmwfedQ62bvq5thDYnCwJN2RoDjzCYWqhZbdDRyqDstEfExJZtRVsU1diVHHJi9zJfnsFJXSyuheL2DmHga",
  "key24": "4ndFv3f79kxLN9vE24XYP724RJmMNVDLMmYQpw3KFk6RTDptE6riwmgkHTSLLytyTd5f6jGD4gZPCjdRbow6nm1X",
  "key25": "664V4zGqJRMqAkWCGtsDr3SeGRPPMeVeVWi3m67JkuX1cLAxAdccRwzzFnpg3ZGsJq6HG4cdWCCH675pKkzY579N",
  "key26": "5W3x5b6eYCMjBMHmTvzJUCwBTDbjDUaMW2uvWQP29kv9jMiFq4QrVa26bYBw47uP8HAykTcPNhKrKvRD3t7V67TF",
  "key27": "ShAiH8pSm32zmJ75NpBBYttbS8sy7fcgB3MC8s53QY6kjT7DrBVTAiUB3nuoAfiBRbHAHGu4uCLsBWBuhLQX1PB",
  "key28": "Yihyu53tewdDM11anoAdKeMi7trZ1r5aQRswXedbunZcae7Th7uqPhynTtosgoz8VrLUkELqgRi13NckKUNiMTA",
  "key29": "5BPUfKB4ZVWyMx9TC1KHtw1ZpNX3Jp33DrxPLQShQtALFyKfiPL9v24RDFfnxQuaAEJxFdkiVQLTfEnSrcBeqg6r",
  "key30": "4bQukJSFfMpNdfyniDfbnS3Tev2eGDLBy5EDN1Hc2ooLJEf7JL1whUfBBaTUCbHdqY6BgFcv5oDuBRGoCfkdaNhj",
  "key31": "4YZcALzyqTSyrNsaEnPKAUFjuZ4ejjvKR7wbRX3ixKtrAtHXicmN7DighuPL5mPNdDdXmgxQSNd5aWoCxPAefeAW",
  "key32": "st1k2z7kfg8qyv9ZdC8EDLXLLbqJZFnKYrjeiay8ZxDCc2f8hqwC1Wo5jgmpgHY3vRRsis7Q6Vqw4bVxFVBJwJ9",
  "key33": "4Ym4U2b662fBsUFb5wJYpU3RVjU3SkUfc92zrPDW7VG6jpUCFyhvdJ47XVsXPGQSHhPnNXNVVMVez5smwCxgMXue",
  "key34": "23ppxWXwvsQj4JKerA7Ax2MkLtkRDVtupitxttThjcyeQvojzq7gwMU7LTjLv95wXpse4qXy7pDdkphpCjFPe2xx",
  "key35": "4ySAoSe8YgZ9MS1rY8nEF4YUPQ8Hqh9UUxUUUoEyNdXaCjNvrXv2CEuFAMrdkpiauRyY8s2UniZV3ogGkZrqvzrV",
  "key36": "2kQVaLoHnRbDuy1YG7C54MFyy2QVrXxGwcWf9zAayEjNzr6F9yY8fFprAYEWv1xmjDJw24L3DCt27E1yvMavZ8mW",
  "key37": "2YezuY2cYSaNp1BRwuRS8rukaMLk9bBw9nydtKNTQWzENBhX1wkD3fR399idpkKFExckMgQP7HLK9SmW2uXoGoe",
  "key38": "2w6iRuTTwMKgYvoCgHmkVTvhmiiyTPKDmhu8mHuB1364HTBx3pwKsXVGYopbQ613emCptcEoUDtspqGg5MpZKrVN",
  "key39": "Ty8xq4XfV5an7kMLKfZLtSMB4b57en6t1suYCdFMbFuEjjcTnD2zcw35oN74RfSAHzJaNi6NkEtWwWwZdwuoLxo",
  "key40": "29WPvEy7HNkBewcLC58WPSS1obJX7vSMCD1rAozM3WA8wDUspzzFYwpthKKPo5g7JNVDuh113EDdPuyZEJ6xxuLW",
  "key41": "p4j5W7rgk8cdToVb3TngAyqCLEXASoZscAoYMxd799FqZRJbGDG9Bx9AN5MK8wxtYDPaDqDmSHjxme6avZ7ArF4",
  "key42": "4mhZaZjQSskucMdreXTg2SvtoK8dN4NdsTdGrQjB9TygrRgHYoqrnGAkgW1yRyL2th2mww6zuLdatvqhYUx7MAs3",
  "key43": "4SwBxpGsSuhQnNyodDSPYAGJE4wEyqhCXmBCpAtJBhycjEsqt3o1hJTgZwKReiLymLZLDG7nTUbQKXfmXobGFx7f",
  "key44": "3Mo5zd3KBMz14vrZ7Ra9NKvmZzsbq1H8A8i1BGR5U6z2pbTZQrYyAWCBAYyo5nhjpvK2m7WdkAiUKkpFUJDGF88N",
  "key45": "2ZiYLLamaYZBSLsV8ov9CqE9ebmcp1Uk8DnqpzjNwK93CLDiUDvCMjyXvNwG5Tgb4w8mpx4K2FvcUuKAH1LZaVZo"
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
