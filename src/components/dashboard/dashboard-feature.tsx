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
    "5AGwS9n8xkTaFo3ddTTajicZzFpnQPUMCLBaQshouBWPJcJSPwwuMTGC4d8Ro69GvVRcPH2kcbgDhgCEFiNz31uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4to9onsBMrEVYoTEA4TfMqVMNaXBwQPveDQK2TmkJpQgEHGiyXd8PcwD9APAfCMDmChHWRwaM4WE9ojnMxCLYrLC",
  "key1": "4wePvWBmANizM8MpwrApwPY3QeatHfFJpLqyjkmXGJzsBpSwwCgQrz6XLB13GvriHeSS1F3pLDhuu6Do5MSfibNE",
  "key2": "vep3PsGt8fN1PTo1T4VthrJZyz95sQPXeZz9UhL762mrwgVm1sn2VJYMHoe9zope8LKzvFLwQyx1BD9gtBMwuw2",
  "key3": "5TQN7Mj1yyCkE3K14pf1PAhp9qfX2qggs77Ne9g6peYZp7uHVtByWL9JCge65EuiubdVVtswLcWvGKJVdWFHP37a",
  "key4": "4saBRvEcdhNwDwCkVLmxE4Fko67JjpKrWupmNUAMedX8EhdKG4WRxQpMRsDfV1q32pqr9YbGPWB7VK7CPSFDnBE",
  "key5": "2aLgBH1J5adMtmA8UavgssBjtP1Z6udDqnVCqGNNtLS7T5Ds7K7HxVLpP4jMPjn5shD6mnNVKUPhXHp4TX1QNWf1",
  "key6": "5tA6MbM8wzkqeaEGLfn83j4TfbRy9Wn6kdh1pQnQW8Ki3MKDWRZZCGnwXaduUpQGP6MY5EAiqpi1DWQ6AtphbuRA",
  "key7": "58SExSfcApxHeHPLfYL7fRBwuWpjdbzQ5M29k5k6LukqRzsKZNMDogXYjRpnj9ebHvGxdvEGQx1162LJfeGqJYDS",
  "key8": "59yzL8T9GYoQs1egmoKnWD2uvW7iWeKsjjmrfADq1q4GDpSWauUzUYeCqMpWAchX5t715DVUiqnf2dWdQUwiKaGC",
  "key9": "4zyMmZhZdDrLuvzYtLWytEV2qeCK8ooJawhCe2tQeNoZfLoJQMadMopFYvM9nsN1WP1Yft8LnmwSqE2ECNGm8W2n",
  "key10": "1aqwBz3ZATsS15au2TQ2VRErSoTASKuYf3pANjzQe38PJu6vgwfCKccc9CvHyWyaENgWFNhfFByJDjhYMvGSfPP",
  "key11": "3NEtB5YxcpY4ogNfa2pJZduwHWDSDw37fdDVwygZhNGEVzKL79Mt2UnBJ55Y6M6Dmnzw9uiatEGgFLCLMXi1etQE",
  "key12": "61cUDkrqEEUdPc5GvxPcsxKiPd7EXftuovLjRgqeJNcVZTVNj3kQ9HQyajc2nESwxF6LoXMZHMkNFcrNev2Jbape",
  "key13": "52zLdCBHJ2QH9iEnAduoKTC7piqQzcK3E2et11DRtBq6CcttTrWLaGVgwJrWZvCxVib6UfQw24Hoee3zTpYqDebM",
  "key14": "5GpWsUestm3UYsvf7Y1JoYQcu6jhdMFYA4TUcTv2JDzHtMwdgHbw3dbZKtbpMCL8NvUAgxtHUrqj8AHDQuYEv8bP",
  "key15": "2BZwmVnhua3wXV4HcVUSxunm2W4LoGjetMNRPJjfiDjcuCSEJgG8Nky7uTiUqnX6FADfsNpJQm5n8uyF84PgSZ2V",
  "key16": "5kAVm6qmBH6aWCCzEGjSXEL2Vea6WUT3w2Bms1fFYVjER3eNv1ZaC6Uf81Md4FpVkVUNzMuQK5GQfwXcM39uieH9",
  "key17": "cAK2RkPGLr5Ty5MAqidZ5EL3BKzMLYPcXCc5tN33enJmu6Lphh2yc8KSGxsF4eBisAx9WAnQn41Q6xj7YauBVeS",
  "key18": "2QbAxQA97udi6G7vvfMP8PVLVTp7renWCpe4PEh5fionT9fP5yDyDAFkJMqWJ9K4bLcAM8hmSezGvaiXwqNkHqQ6",
  "key19": "2RCPzkWP6EUUUJxhng8MpdKTvmoPsUPwcqY9AvoyyfCDv65aYTFHxBDV14jp2y82yyVZ8SjR53wV2jLEhyN8ZazF",
  "key20": "3KmeSfBTGXzYzXngtuCt75m6EB8gW9i77N2knf3JBa3drwNAvBSPLWrqL3vvHYg4fCJv123jELGZrCxESUqahqUA",
  "key21": "4LqERbJCC8umssaLN6DbR98M4W8iUo4E6xmd7fQ8TLanWwMVvCPJwQNkFjHWgqWpsV66hWQxhNXnHNR9Gic4y5pB",
  "key22": "4TvkMpcCBu7QKSbZHoFgpYuCCh56rck6WvvMCuM3rGmBxEmWwYM3G4qAQzSWZJBbqPpfNBC6SSMj4sdiPActnb3H",
  "key23": "4dfrk1XdzUDtSdF7VdX7jkwuskUuN57NJCw4NyxaifLu3zAGaSZYvbzAUAUvoBMnPC6SmpXWB5qFsmLBLytFqeUZ",
  "key24": "57bjPpPhrN216zpZ7ZeuP87miNyX9xeLmugLBXcPdnD7QiiZwauRePF6YaEXsMCPTpYuFYBujAHk9KB7SgM4ZcEW",
  "key25": "5WqcJPR91eSiKEGB7JC8VMMyEYMQrgfwZtJYwQqYfFiXFDJ5dxmmTbqtzqZ4GycZhACTqPkmhjkEekwSEXRCfNaU",
  "key26": "3DSfB1yZgXnadTosdCQRdWMDAmvD9ugrTmL7WtVgew4zawsUN73V3kA76WmhVSAg2W4UhQaWgPNR5FTxtkWnuyiF",
  "key27": "33VqzUpF5S4J3CjwZoLwCstjuqVrvUCPfsmdQGZPDRzhsFsiC1WjaKFCZg22xn62Q4APSaHR41sX4fzAXdG4abJP",
  "key28": "3Ux4ibEArNkGPzWbQcQvRZWQX3gHX2e5fYu2iZs9qGAFbBFnY6wt4eEZ2ZNG1NeKWohseDiL4gSpCDrrtu4UL8Yh",
  "key29": "4CAs5hWZBJo6YmuiZNoA7gSi1wXwtfkX7iSsx8JZGxYW3ZmVvjY8i7RskUsGGPAYvkwrKfqYDEzAKL8RQSeERyaf",
  "key30": "2HB8boWkQgiA8gBoE6orEM4tLoYx7zVA6xeGWbbBGMz4LHhHkz2urUu8JmiNLsw8Q4Aa4wcAtmCXqRTduuucVEJm",
  "key31": "5NJN2GMXArYrD4gpnp1tvHXwju8DsuCXApn4WYUUBFsajDivbMSAaEduS1UdpZHGW11Rz1bMjNAqAmMmfekF5jft",
  "key32": "5Rr1sQtMTcYDFJJAaCMGu4EaM4rbmAPY5Em6yHWq8C3tWHAaWDmL2sSzFQpoZGRx9ZAxFWgseAs3w2mtBE6ttWxV",
  "key33": "4nu2MXzKrQSW1hRGyXRWMWixPkGYNSRuGP7HH5FnKmBeyR83ESEGZvy4mExBsLPFYKaQoMKA7CqFdjg1baoomnri",
  "key34": "29eejZ33Q7ebxcwEVWwKErXhVLUDxi8iZgnjfgViKrMNUiQLG8Lhp6KZUvwTJHrDdn5kzZHwG6VRHZHubZbg57i9",
  "key35": "5YzHDRhSZNBNxNmq5YiXdJkcxYBuakiMTJbHPwPnApf2Bb2rRrqYzDnokNQB9BCVE4Lp1w5A2JfZ1Si7CaNH2X1R",
  "key36": "5cBEUyywGTNygsq92horspX6U6BstFtPuTyJ6yJQrNZbV4jnQnGaAeYPWiL3qSW53NxzKVrJkfmLbGBntjRVA5dt",
  "key37": "5mx4anAmASenSSiggvY6YjiABdFukPc6GEKhxwCDBfni7gyBKr81bZvG1whv8Cb5LqPCdcDXLYr8Y7LwTteEHXdZ",
  "key38": "4vESKq5sZFa4DhHteiYzDVBgCUdbbVjAEthNr6tnGrAVSzeP7AUC4rYe3ViA6SsMchASNygqZuZcsF2mRkxfXjqW",
  "key39": "4P2HuVeZWb9EFi6q4o9t1ncEYFjZYirCtoAP5qzuR2AtXosPWpvJV7da6bWjwvgeZuFvfjaKnxeZptPeygnVFss9",
  "key40": "ypCw3CkvbmuFweuLdTT8x3ZMp2DWpJD2twHxCXbKYxPaJBxa4Xs7m2Y8XwvPnCdvAizUEYwRtuXUZ6e98YaaKGf",
  "key41": "5cnMX2mgfSSTxSwXxJmvfzpE9k4tgRW7XU37vn5P6jD3Y92bzWkgy9H3QnPiQ97aJAap1ZpSSCvDzoFMvZMYMc67",
  "key42": "4Wb3Dmsi7W8vKExQQt2uqZgNeZRjYjrWxu6aL4qt2oJdJZdp8gnSmgGeGNht8zLxH638NUc2mweJXdJnUYcbssDY",
  "key43": "4TKGAfmegZFP7t2w8555MoQt8BkuJ99kzs3DksEUpv6YjkYxfcqFPwWTsH1Xuw8SXDgvDXft9Bbom3x2VqxfpM8k",
  "key44": "39xNSzQu5ZRTE4vSwFGgUxCrMZmNPLJkRJVq1JDiw4Yaet7FprzVfemXSCLSpwCt918S2L2WrecujiUka6Ka5h68",
  "key45": "3ieuFDzXQHkEGZvxFfRBWs92zEtrkYqNcSNiFSQrXtG5GM1LwnbYDzCxMtZPoBj315zZLw7trAfyxCk4bZzySWZV",
  "key46": "3PYiEHFyasFFmBT9ebMEteGiQ1PNTqnrLK9gQ6i66pT4mFkTTtFwuDuDVWaQN2UiB8TD7xcFDymC4vYpuFMcCJqH",
  "key47": "VhjvJiCBLCXPuDZp6LbEseuHVmcR4jVXeXgjkNn3zpLkHYcUXcrwx1DkZ1z3ubpMeV7QFu9VVx3YwESSKogNx9K"
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
