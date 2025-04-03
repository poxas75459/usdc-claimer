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
    "jePxK44ExooVQb9UhUTJ5yJVnYtR2mfQGXyasQed1WSmo12jdm5Lt6u2Jhfm1jaye3dxjrZ4bG2JtkX42gQBbsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pxu8xLShUYKpzTNzcqoM27zTTGBDW3G4tdh1spE7ctLrwxoVBZ3iZPXcUA7Fk7EerAQFfTM6fiuMgc5tBnb1osi",
  "key1": "hCygrmRPVJRpfHHPDEcsHwNLHF77EwJCbX5o8LzbT99BSkT72mD116UxtBGki3KfYe7BTqnSg32L9E4Eq5zP9Dh",
  "key2": "5XskU3Z6GnzFNPWgBzaTrhHgFZuDMAPDa3BUeXww4QGTsTkLpAwfVHtXk5ZFSgZ3g2Qu1PrqYSWXKoqZZWGJjwN9",
  "key3": "29oV33i7gYawvggXRCXVqPenPSN4rh7qWcwzNQkoNkrK9crdz3QJXzoQ1hArmUTeaBaVe7ywX3BeJzyKySouiPRP",
  "key4": "21tRLrrc9u4yHDsk1q9SYRDNi54VNXnfq1xmQQ12BeWVBdu6Ei2EZvpmRVEMVFLyjKS2dYKGihx4wPHkvCpat1h6",
  "key5": "3JLHNvpKf9XfPmaPkerETS8GrZMmd4RgfgfFesCeJqfgapV5uTA2to4gam51uu9yP6Vxk3JbprRWo1dSVhpXiFaQ",
  "key6": "uzosaepiqXbFi98BRZgTrT9KcHB1pZbfEpuQToC3tJ8hzdoBEezM1z5FZk7r5XStnThFzEvYpGiRBuKZfNJdqJH",
  "key7": "3DdDoHeyQeKg557UGfPsp3vhRCxQXBDckUnDdLsycXFx35GZMHvzGBkSRjDc2Ep6YiKMgY91GgxvhL9Mwdx46uuo",
  "key8": "46DMcvfcQrwk74hK6FiNpmfxKBXWBEBnZYWHxKUsL8jmYVWRC33AohCfsD2xsJ7dX3WRUWxwz3wtbF3yT9hyMZtX",
  "key9": "254vaUWboS4KJBGkEJjK9QfXspbQDtT4G1jZphQsQ73x26rzGyH59DEox2W8Ap8UJvrnNXZupJBhWtzSp7NxM4GB",
  "key10": "4cwcqvdQSXMsr4r7gkmk3qH4AEMpgpAekeXmaAjbJCJ6Q5QpMZPx6Aj9tzkD6W1zn57hDssJsoSXVV3tAG1djEmH",
  "key11": "5VQ3y2sea72oQdBH4riLWWhHZ37MXCJrbw3now17oQ9J3Saz9oFPsfkfNbgj9pcRUsVb1f2yFZKeWdFgcp9NhW6c",
  "key12": "2S1V4YZx49wkq4XU9XMdCi4iMnfkjSnqWPJfjTKAAf2vV8a75gm4kk6KGMdKrr4UvtNUYAKJEYK2qR3M3D3XxYDA",
  "key13": "3ejRey4mPpVWkj4qSgejemnTfTnf1i1v1mY7ARhaKgvUYKmc3MTS2ZFdhKCXiPzBshneeGJjYzVxedLHeq9ibEZH",
  "key14": "49DdMtBibnXtGkS3jH5hagpqxz9uUCD1ynvyw4sK44sf1qFLaTPxrHecQRrPN7oDJ3amBrForxT9vvb6i4GLdEYq",
  "key15": "4HfqqHTVNZjKM5mKPdXrRXPsLhMn7t8hwyuKo9oPF32yHBxE1Zaprz82sJpKFAeqqeN956X2MzmrNPq6RHADBgjp",
  "key16": "32NwAgWnYNuH7ALvYvQmSctPCyALbmtark4ubZ4THR8KWLdLafKqerJCoLJNtYWkGgf8bjdnoEWq9kn6uusJmW5g",
  "key17": "3A9VBJHrZMX3t3Hi6TLSAzwwcKt3Ze49iLDbKJaNBGTZRkBExaWyuZh3KMY7afm91iixAmcJ3FXwptNTDr15rn2u",
  "key18": "2ZXtGF1Amob1wCUYkhPBy5diUHRTHohaTX74yUW84rqySHUfcbomTiEhBoZQJPRDyadcx5TTo9csmppc1jPjDbS",
  "key19": "4mx4a8TRTLAUFkCcWtMX2KFksfm5tixXx7V68qp1ve1oy34KEyQfZm8ejAd1KuscDDtqKrG6qL9Pd3YHzpRjnFhT",
  "key20": "Tm1Xbs9r9qBcgsijUkXrSbDjEF23XpU7wkiArSQrYvYVnCSjAJTdVuETm7chAoxkji1HCutxAVznunSnVc9WFCV",
  "key21": "5HZ9qjP29dvDFqRQVPW5fQrfY6H68V42mFgZMKDwNAsFvCywcazz4apWFPovAuF5CS67HamTY9v95op3i19vnBR5",
  "key22": "3Hney8kSVpU3UEaA5oNNvzaTbEYe5QQ2ShFTsDrTzGATNwnRdrPXE55jTcbwAgUa1dtpbANnRC4PQXQqAjsiFR5Q",
  "key23": "2GsoxUGkmW8xmPY1EsMCprAfN2JJV4hhfyCsXYm1GbES97aYfcqXUSfjnTYTiW5KNDpT5NRFSsMrxc7nsaiaBPEE",
  "key24": "5mwej8ivhBpzBipwVqCRRheZYkkk6LMv19YXHNsSpBPuL993QtW86oUGcEtVL2oDySwWm5qY3hdKHpaK1mM44HzW",
  "key25": "4iSpkxkoxW9xj5MTVJNQCVThBHM2Uhiht7sfR6X2GDdPLH7C48Ht2W2qE3NPK8bM1Ldtn7cPXxBsUeCBvsLH4m9r",
  "key26": "5KJQBzsta1CEbPx1Fhs2ZKWLp4uB7T7J3JCvyvsMJbhh74JBo8BWtDzKoh6nVa7VPvPrxdN5MpuDKc556VAdvWaN",
  "key27": "P7CQKjYJ6fNwp5wKBiSxh7d1WBXenr4wnu8RdC82W37WagTsZMdgdDAFPUUp5aLigik9GN7XyoQgyhcDVKB9Fxx",
  "key28": "aJZ7fwXHRxBo8vhdaE7tRSG25iMBx1YV6wPDxym5pZ3zpLwiRcUmTUSXmAmwqmiJZSzCXhmgYg4uNYL4KF9eCT9",
  "key29": "3WswXdUQhUYfB6PUY5JhQ56FVLfEJbwmQDdwvBZJkk934FNNTkyocAVJT8fWZ4LxgzAD5xoxV43U4Pav17GWLhfD",
  "key30": "4V6pBAgqyZT3n1wLss2PEhaaf71BLhryLGFzB9vKfMX3qrYkTJyb7cWKA78mWWdSHHQHYedsAotW2VjoRaKAHuMW",
  "key31": "2fj8oRnAiSmGkzphY98wnHgxK4KFLBurLAEm7ribv5tEtZMUey6qomG9Eq7j1r6HAsaK5xXdxiEAajqp46dqMshR",
  "key32": "41gAYVU17QN5LNQDd5EpSejiLiAbGqg19pTz7K2LKJYgxCvrphCJnzXYmjFyfePBVmmM2vrfrTngsUs1EjxPUYgt",
  "key33": "5iG6NCCkJYh3BvkVQB6ErJTAfSi7Kxg1z2nQskNJNTW6MzvLPGH3P5tUKHdgxvYNAniZoShya1ARnJxnxR46eGuW",
  "key34": "3gHYR2QhN6SB3FRdqqw9v6KKnqpwKgskp8X16TD5e2Z7frhaMVYsymiBkdGxeShtCW7uyXtUzcRXszs1vKagGTph",
  "key35": "4TiZmc6p7HkoMsLbcypJpygHnqFobSSjPdrE4Y2RyDfKG8G71L9Xp2AuBVQiMLFzhcekGh54977JPHtqiXAjVVVy",
  "key36": "q84QaVBSmujE7TxeDrnBiU6Twqytopi1CEYT7JsnjsfaVKG7FxUaUA3gUPzVE3jBWU2FoS7eNiCptQmeUVD8zDp",
  "key37": "5yiUmGENpShjjaWsvJXBrVpE1R12JPkUrMhBqR15Ct9N3r3QzWyTy8cTSbqcPc1E8ctYjRncq5vnm5foQQFWKydw",
  "key38": "5vrytX61yStHsDo6zTuJ4SomvQZBHupE974kwoGiT8sBM4bbRhZjdrfbAkhngH7cEkLGdAG85w5nLp383EUQabiD",
  "key39": "3schVdMUvaD4gWoYNdhhVtbZrKJFQwH56HPoADmZ1gKtdS2A6KnX2BCMsStQggxmYsgtVCBwUzxSvS7S9KBvsuZY",
  "key40": "5SV6HzVNzBnH4tQ1au8ZP9xhsesTFkmWMQpfMtPV72UYWkcRCCPviKcwCGuZRWTz2kfjcUeWBkp1UmPmKZkM3Hhn",
  "key41": "9B3g7UtqGaKa7busoikfNUUvofxxq9P3opiy6efb3hwvZAUJTzPGhAWXQ7aKVZ7o5PJDTmYiDCbSitT5sCxHgU3",
  "key42": "iaut76W6RwH3FpZxy5a8DvKVuPdwJE62FEjg5G5w71QnRqmDzYc9TdvDCEQ6ScDEvu1AhvcGHFNgeebkjGx7wNG",
  "key43": "26Jy3CXHvrSvvGSapGk1tRKJD4M5Hk7AFvnZxoGRSy7MHZyQj2hnPAcU2PppSg4uYTtyeX7RQMbCi1NX5hEgBrno",
  "key44": "AQsHqFTdXzEkZZ5Q4bULbVZX7Qfh5RU5pCebyVsMfK432WR4Lqgvk7hAgETRc1AwAm8eJb2WqkXGCP7iXNfkBpr",
  "key45": "2Ygv36XSbXxcPBrtK6XwN8JYaFzZnb9YFhEEQLrJuCgPWyJkJq6CbryELcWj8P4pkC4fh614WTryF1wicnTwRyvY"
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
