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
    "rD9MnELE4ZRiHBRbFj9Pt6nre5AhphFb19Xxy7wKthiK9KNsRjnyaDrXMGfiKEgvEb3hzxrn2vud3rJv2GPSJj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFyfDYtt8tuDuL1MxrJ5n45DzyBVzyAeY5w4zJMa2hau1dSaH9GjceAB7enKYnnFhap2N3Xo2k4N2EqCQXR81wB",
  "key1": "4M4a8S9ZYwM23nMNr7Nkxq6Py5ZPAT3WV3iFqxE35b4hiazDrEWi2rcsJivRjfYupcRNeFYtVQXdsYLkmL4XPwmJ",
  "key2": "46pDZ7hM8vb3CCsZcFzoyb4D69dG6e31RhNcURMb1KuJp8E5ukQrWUhuEru3WwNEpKX2YHjwfUwRhGnXJiUZFgzc",
  "key3": "5vMXyf7eQWRH2Jh8ggUPpRGyfRGKrAKvt9Rb19thcCpQvookuweKPVBt9h8hhMYDBD64se1zoaTem1Dq135aesvh",
  "key4": "VVjsx3v1jtpWEeEbTaE7YPtwfmDKTuzuvV4b4d7rNoacTLxue7yi97D3nnJVZtimFkD2dXh7HtwvBcu8YGkRtuX",
  "key5": "mDxvDxYYnbNdu3bpdm22BbAXHrHeGQaQPJDtj3NE9Bs52Q1zcYc4pe3B7irFfXrnfqMUK9RFXVdNcjNovh4YmRT",
  "key6": "4fFWaAXTnLdsF1WBfydkpc3DaokzEZd9w2cKuJJ5F7X6GCQq1WmAzMTXWQ6AtNupF553ZFbEVT84X1vmApFsp6iq",
  "key7": "28xoRykFmdqAdn9cgPnp8SkaiWCaQXEgFBFtHPXFfokiHhRqb63q5CeaHSwnQc1MpuDqrCftSmWg43Ffp1UgZh5j",
  "key8": "dVF3QfGVVKbGr7pvxMmVdatkNuSGU68TfiLoMBSLDRUHNoKA4twMkeU29gdj71gRXJbup5rmiAmC1cjXmBTGpc6",
  "key9": "4eW27A2T5ZcLgpmLJDcELx8kjiiiCaDGBoN6uipK7E67r8yZ6sj42XzGAi9ENiw54y3CqWNE6QUXnrGQSmrHhnX2",
  "key10": "CakupnJ5a3VZEVUry8kYir1n66dXvzGdafYcxoj263nV3VmB4YRPNeNyG99YELWeeu3QTXpHrEBZsri1snGMhBn",
  "key11": "31YC1Qz2AMGD45NtBcygEV7pDKx3ZGayRLWHcCZng35SUXzGrSModeo7gJdnMmE5u15XnnbTTEuvARnnypHnBd8U",
  "key12": "5ESYXWCFGC93DJ5HmRDaR5v5wtNvAbuZNbAVsX9VoGfFrKTVcje9bUuLcye64c2aXSibY9QVxWVv1oN4MkwFPuRe",
  "key13": "4itpLoC87YXTpXaA4oqZvebzTyFuACKq7rnFor16CYPo9b4gZHvEVt4FdXGJeR7pEy9WDiURhwCKQuoi7S9D7xys",
  "key14": "27ntSnuTAdD5ZyomTgC93owo3extZJNQAHMag2TxL5yS2qmevwkKqLQmeEXYEZ8KrMrawaBWhCYCfST1gka7E39U",
  "key15": "2SeAQNYBJeQrqN4kmx6SFpttD7kSJZh2dMwSrNzrU7z2Pb52hzM1F58xZoQdYJwoxGbg29rtJegrnUmVNCGeF9zt",
  "key16": "3z5pAPKj4rMECbfBkeazRmu8hu4hkpAgjqcqAYm87jy4smjJsFTPAtYakwX32USYH2DafqawxASZd74XVxvf71G6",
  "key17": "5KLDfRNrgwtPxDk4wqngzNsenKDBiQQGAAPHNJ4CTruvdpwwd1TT5UWqqgCQ9MkNj1r4jMWWsdgvmBLiHYfNqfkG",
  "key18": "4VYNB6ZemKKJWWJxMbp7ZGYMdSL2pXFncFnt7g82eSP2YD62JYr8LEEsng6R9iVrAnRXNTVHCc9WKFMZpvhSq2M1",
  "key19": "5m6EqgvBKVXXGvL5RGsZfpE1M1L6mo9ZsDeJRZGRHaS4dFvny4gQy7xH7iiNxKj3nvvu3quuXDNAc734xwC6caNk",
  "key20": "58x1UD8tHktYnzFg9bQhxWJXuc2c4e4kn7VZeMGLy1seqddWN7TYPfzMKLayRckZZpRZa2sfyqV8PgUKeM1FMS6F",
  "key21": "3wMWTCSEtqFbhC7PXEwqvJJQZPhyRwMcoyYSxsBV5VrPgqm3AEYuyTWE19JtMYC3j8uEfeQBXAYWehnjbBHAuuj1",
  "key22": "5EA6HiBemcskrUAHSTf7HELNL5tZxkgmoawSwmreX37mSGURWEpQ7KDRA3pz6bdQ7fFvC5g7svMnXzt4zu4v9Tsq",
  "key23": "5tCas63KDJB7MrXhuvQYeRim17s8pFQXcUzfPh6QdvymBTE9YW3fT4FWx7rER9xcGiDL91VwerR7kAmV3vsiUQuQ",
  "key24": "66MkkbuFDnEfH5cfXQXt78yByMB651ZBpU8aHpaavPjbSa87mWmNX4PFSGLtfMzw9bh7d9ANs8bcSZfTBuTyMAHh",
  "key25": "3P4RmczHUoaeWNLLdvzxnUsCT9AyZvwqVmAAA1USWjfLdXcZmpVQWLpCLDAbcwJSKw3YWaWPtTz27JKTfz3xCb3w",
  "key26": "2s5miJdQuH8DKJfeFtCLXpc94eBzeAs1x5ojekKCPQeYnprUiCnnS85U16DHJhF9dX91Yott8VTpXwMxfTBZ6Pyr",
  "key27": "4icMjvooe7LGyU8BEiFGPqD9ygvRPJnMk4bBk7HVkDAZjeuR4aC129GDD85jzzBGp7dSZ3fLJ2bkkHB5MXQFwpdJ",
  "key28": "2agoX9WkNg9bqwuAyAYVd2Hne4o8Xpie4NPuQvYetJF6FGNz8R4BuWbuoe13HqBMuv1Uosm3wZfcHEADRVcTaf4G",
  "key29": "4enuAwM3obFSUyFZtBhGVdPjVGdmSVHpGpz9qd1hmZ6YL8oSG25nYJHhdgxmVRuhg3F3NSS3DToNqSL8RdYzVbAF",
  "key30": "3csxmb8uBZnrtxvLxQ2hzuh1YVGwURrBt4hSTETQXG1WyC7pSjcchcpjApTFkCaUThstWkvGQyzAwFVMoypvqT9T",
  "key31": "22ikLbwtnR5Dbrv3wbDdrgvxLEikwEx3BsUdAwJQP4BNGuRRNDPAG5B1Ro4rRis1zpHJhcnJLrNSCW2Sudr4ygZU",
  "key32": "3pnWGTk87h4N7Ak1QJaeSXpzXFXNxqCEsw2Pmx28kyDXjaFc5GQjJEaqbxNCLiFWdAb18x3Jie7g2fkLFxBm3Xtt",
  "key33": "TPxKpEAnvWhTgYF9RMBiMpwoRPUExxhUHQiv9LDco8HRboPeFmUYMRynuQVUQRhAwRNYWna99Z5JVNA9g9RwwP3",
  "key34": "4YfvU6RkUHWvWqU6NhHmKBs9HUsZAQszGSQneMk6VueooKcASg27UBh8StbGZyvsE2jncFj8SC5XtQZhvDmYpeJN",
  "key35": "5HpZpvtZyzpQS9SLUtkNkvuPA3eTrVabJGRD9aZ7GjCDGdohAWnEi7cKGZBSmBiZ3JUj8GPb1kEetfBHhXKHdjns",
  "key36": "44XpcdFmknmNiJ4Fzno192YErqzz5MVfk8UXWS5SKvwb2sG4TNnRWeGokn1QbiLiHDJuMfxDaC39pn36bUTEqnTP",
  "key37": "v6TYzSQr2BzY3CokZGWVNVtUrX21U1zuChE49cGZ3jEWdmQeQ796FkUKcQ9xrx8QcjSZXLsswW5zhphtmXwAdyA",
  "key38": "35qCit8aQBzxTYJ6e7JcmzdvPkLomcSvrqBPbmM7EfXtLQqM8qpXft58U3BCbBjKaeTANp2k3UmDWLSBfqtTgZ7X",
  "key39": "FwMC5RutWu93Ri3f6T3worcuk4bpRrmJWL1GDwuRMrSnqevhCLf8MjWQ6QQac3KrAPNSV2irkLqgVMoyFDQawvo"
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
