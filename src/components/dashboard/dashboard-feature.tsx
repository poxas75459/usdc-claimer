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
    "4ZnWSVbsmMt9f3dUdEyAG6tMaJs77rb4HxBiYkJinWr7KxUDK2Kz5JwxCqrHUeQf9ahFZRSWqykLJS3jWD4MGDY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXaqFmoKP3qhm25KstzzRci7ravXLQCr9EFd7Nb6yQRpizUBrJzNXPk3j6AqrarLpPKSGxhrvLBpMBZxMSMTuJs",
  "key1": "5qKXWxY4iLS9FZuVvDgxK6MPcgQzUhxC6ejop9uAMitpY93uTsWVLCYEE9sxM7FH1frAcTn7FCnVG89kiu1Bhpkv",
  "key2": "2aBxj9wU1AsQeLGhCb6ZrWw14Vawc8NAogxx3NPmGFNkDi6fX495F3vAFNctqAxQWyMXBbUWbo2f23gazH75S8z2",
  "key3": "5buxKEtwURyBPiyGmYLBpsca8ViwSM9wZSbaY3QMcwvL7LkfWLrWxKHuoAoAHtp7DNfunq2ULkdhS7nML7K9nqB8",
  "key4": "4u5mRMJLCuAyVkxUgcw2BKnEvWs2hUm6h1bfGCrKVaDTgDJk7amc4SjHrPR2XcQ83LXDU37VtsFYSct58J78uWpV",
  "key5": "4vrsPNxqDMkvuXFCnQX7DiwraXcPiPUpcfL1PXAb2Q4nDdWEFq4bTibUMrFP5wUoCVU9Nv1yfvVkdRkhxUetmhZQ",
  "key6": "5QbobwSSkssuBtg83fWNdRpUKEriwEEcxLPwCpJrtY9UdjpXF23nYspwtmmW77xrmhkN8p2XxncLqDTkMNVHvM16",
  "key7": "3QZJ45mFaFUramE789kFAsVD4APmF4ucFmk55sE16Ax569aqj8H3duWWkJ4bQpw3wZcHg8NsLceexHZ1o4B19Egh",
  "key8": "3QyieTzTzRqJT1Y7dhNQtr2wsse3DjoESEcndAbHRtmrKfMdmdzwyRXNXTBnTC7mdMwJ7Fg38GcsCvZb9BprxmRV",
  "key9": "5Lx2w4fryiajMwCtjhARtoeoUzAjWspcRmjDohpc7H69Vf5bpb9JpvPhG7VUa2EfsbuUpcjaAwnMSLCQJH2ki1Gn",
  "key10": "418WbuG5uRhn71piceEVUXqFgz6Lhjvz36sDS3B1zfoFusEhJNfHuGaKBFwDsxQG31G6d4y1wshtWTrNmqnXkxRU",
  "key11": "23JNV8gXL1R8pSJevFRV2wqSvoFRobx6LqHZjTWBtGpHLbvbuvECt3S8JuM7b95arTc1657ontDC4vCuBdfydCgG",
  "key12": "2VpSPJABBNWHftvdHLj2fQEL1vNDfG3NcdaMbXBXWjzfmXLG6UU2C2FcmCKh8A716JSiEYbHp9RLUzeC2DskcH3C",
  "key13": "2uuAs67LPj9sSCiYj8oBD3tSkqQ7Cwnpv21uhqp3rosadfoVRsKURTZXazt7P3X5Fw6G4TParZd4wRxSC8HTFQ9u",
  "key14": "3bHPVEBFYjndggbdiBy74qzdhVyTNyKH4xWt2YjLgqHMcP4L8CoLr3vqZx1SL4ANEYGJqJrWrL3M4y433goKpAyD",
  "key15": "66zzDUzBTrJh7Y3h6U8ivuwaaCzv16WaDCWguL2VzSdbNHvpuiZ36Y77yLN41QUYyvPVm1NZG1jNF5ssdhciQq2m",
  "key16": "2Qd5L1qXc5KVQspaAsHc1qTuqkHrdJizHGkXx6hubaapykj5NbVmqYkkx7hic2Xayro6buw9ZzSanz1F22TC8wxZ",
  "key17": "vAcL3qgBzBLecjmenwdZUfzTMiY8dPkjiSm9n1v8SWZBSVjVZtWsHXbuDSCvNMmNpXiio9Gd49qnm1hU35uaCTU",
  "key18": "V9652kuvkzbQvZa4gX11puegQkwLvxAnBDxNq7PtbwZZimhDrNKSa3fiaTTYqVDppBCfd3ucn8bT8fD4AnNmc6F",
  "key19": "6181BpUjkwESR73U24Q5WBcyWHo47KmjE1Csd4Dx99LbKXmVPsEumQaFSnpVcKfg4gkwGytFmTqe7dynrDd39zPq",
  "key20": "uXwNUeXtwA4saSRTTpqK4UkjAhFMHR7qWxJ4Rw97ob2FmadPti4VPnM4HDSKs5b6AsNTmuVTWmm55eRS2A7mVgG",
  "key21": "3ST6NUyaCxRnSyTEd6SsmnsK9Ua8TUTdZQvuz5whDfp2obTVb8FwZo189Qgf5SutQ2YCiY2MgkLcrMfwLeUk8Zq7",
  "key22": "434W3GS9Zk42nR1kNz5LsMBbcfipDLuRcqU5ZYZubnV5ec5rS9LtBgTZ9mGcQio2u7PFeuJgmvVqss69vgch5NVo",
  "key23": "2bomwtMBUykGJMgQfq2Qr2FAMpqC8zz6XA4rii3AcPyYYMBEbG41jmiyARa2BfrNAfTV7tno6pehdUeiPR31JYSb",
  "key24": "4Kk8Mmi3DZY3cvHbcb8TBfEZoMkvvwu8kj2t1eAdA8SmXBKVJGKGkKRUAEg33ucshVMfGghZGbrdLUcHYSG8pMrC",
  "key25": "4gSSJ8dh1t76NsUYCuYiLN4cz1PwtkiNoQ6X4Vk1sT8dv79BvX8dGH3kMYFr5krvAyRNK5fhmTrMip74ZJifCHo2",
  "key26": "4XsJh8KY7Gavch7Mij9H5FJksG928CpLGgC6ZMnuULHV2EVrtD8K5GSayeFWG5q3eV5nRKPPiZaf2i237e8uEMm8",
  "key27": "2G5FQxgBtErZVYXvez69rNQKci3VRs4XPrdjFaGnzXjFn7NQ9YbfZBJ8kmyRKaMVVg519dJCFq7YmUUVnWjBvk87",
  "key28": "5cxcrP6yAwEggJp4xivwFNGsstx3yLxs6KaxPqVkB9YvmPDBAA1ahpjsNKfsnZeWUwv7cid9dPiyeXTLh4GvBes4",
  "key29": "3VB2HJFPaFaxrELVA5eKiyKZw5W9uNQvcMzZnAErbpBqLQ2ib5R1JvX7HTQ6XrQiCWzhZfFzU3nBs2PiS9L3rHcC",
  "key30": "5apzpQfanzrKbeJGG2NHkmXG6e4KgHiqoL9BLPKmPHBk45H94iuS8pUEaxdbRVw5NZVGjtdxoKqbc1tEtQKzgsPR",
  "key31": "2WQuJyMdppwimtJQ9oVFUKTSD9iSca68akrD58CEoi5Zj6uhxXPVuuLwotJD1YtUEszLdQ5wMmbWtuqd67smwJau",
  "key32": "4nEbJf4V5D6uDdKqzhZ9N42BuBBgrhRAQqMKQHSYLP48PbLsg6eb7Gdimsg96mzZRTkP6RNPJkRDcPG3tQiaNKJ2",
  "key33": "4HoKctGw7riErARvL3cXSek3ZU3FAsR66kqKeadHhvRmNUw2kj1iivUuP6B7kxXCBo9rG2qUgBJvFu3dddy1CpfU",
  "key34": "4GLV8hAyF2beNX2FGNHihvvPMeUuUDfbARAPZ1GK8ysDspvcRrVRLwYbWVVdmgwemgpsFqLUZ4vTQ9s9errop7jp",
  "key35": "37LkHheD7vW3hewurrjnn6GYA5ei9C3rBXLveBrSiKt41xs5fU4UdMR4m9ngBDFnzxDyDWwVV8q322nwEjD9kNqc",
  "key36": "21S4qKPGPSNEg6XMkKivENQdBbuYznmX5YUPDWMgg3xDaC3L48MXbrmRodQca3BYe5qCGFkKjdGZUVepcRdrw31H",
  "key37": "2zphyxxU8ppX1hGb53KfvAJzXjzEYYq8MfdZdHCus5Bjk33PemAkTQeMParYM7GrM92kKeHjVkzd2NyxE2rEPKWV",
  "key38": "3gPtUeWE33sYC1QC2LM1GWDbT5U49nH8VTjTdRkj5hQPRS3CTuDsdAotwTUcEL5krZYPc7bBEuuvjQP3vMbLGRVh",
  "key39": "vVnmG85vVFefGsX1GXV7hiNEczKNMxCcgf2kXShHAAYcXE9fbzn4Wsgv6UtWPcDRh9VmobDivc94F8hSn26Ua2G"
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
