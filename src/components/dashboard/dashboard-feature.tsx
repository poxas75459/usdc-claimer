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
    "5vy4Z7DkRS82V6X8P9815FTyh1fE7G87PmvqiatFzL2nRwAMTtAZSwYBWpZghrxrXk47k5p73wStqc1u8my4YhmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePXP4DhNM5wJVmP3yo9kDTPCqck4WFbeaN2kvwgpdLdUTG3HVMLn51HYUyNmsLf29ceBFUWGMiWVthCpYNWUtCG",
  "key1": "64NJi1dmeLfRoNFrhxhEJ9C3a9PHhTbqFo7cMD9iQLA4vkt3t9C5mevDT15Na14yrd6S5nQGtTrZUpdBwnBaeYTo",
  "key2": "4kmENNGSCce4rTdJKUksLYvGUSE3MvwwSEfphQjJpxUEQCrPcQG8qw6EBK1G2NoYmZjFCPcRmBQ2VYBveVvv2ig7",
  "key3": "2Daox1e5W3euL7Afa9qHfMMerXeqt3C5KzTrtZL18rMBoTmsRLHeULedjZHreXLk3DpmuYjcTunSBYKP5f8nsPZ8",
  "key4": "21VnMzeWzHbsJhWyMGob9PYVhfasEKeHQa1rnKNygkjw3kyvpE7sJ4HundFn9Eg5QNi4kkrmWFDWRmLzYfwgG54a",
  "key5": "521Egw5B1YftNf4dQa9Ptyv2FNAN82ud85Ypp6DFnXTax7PdCkGZc1RvU757HoSexnoL8BzV8imVw9rie94WmoMR",
  "key6": "5y1cmZCTv6azmKCNmxiYBmkQg4xQNVXVk8B84fBWyV4HKmvA4d8Gzy4ZrwPWWuNVxLj624xzeYEpHzVCz6wpcZWS",
  "key7": "2L11wyJN9uyma2547ZDyNRbS6fjWkZDBSrA3QFuLsUxL8bGobiQNdYUBXXmKtBN3DoaBeLb7E4hgrEqnmSvxGT4B",
  "key8": "43wLeQviUeUupJPmG5nLLiP6BVz9FxgcCpR7GkNzmS73yrRChRsMP5naZSWF9G6oKAer6DFYT46MAsVtvKPz2Q4v",
  "key9": "xEuPbFzKSSbfVweT8Kmsr2sFF7UyjXRDeHxeZQYP6NQmTg55JCdjHyRDdfTz7ANxVMZiVAWVkL7ShEeWC124HGs",
  "key10": "5QjZPh8AFjjLJAn5WdYKvCTPP6GrseRXtrrSxwH8XBXMiPFxrrRsPu1yemB6rYwcqc2uqmq4Vtz9U2tK2Y5YDLsn",
  "key11": "vEK1PzwQAnBYPuR8LTfWY27js1FT2V2zQ1ek4FnCVqpESASvdyW6GL4TkL1GTVmk657U9LkTCCSLQENjeF1duLi",
  "key12": "3KNrPJ54FgAhUyNZ8y3sC72v8mDeW39GMuUVgnYx2YPSnVCkmJMLx6N1kjvwqh9smFaN69mMxvCYtf3K9J5HFX5K",
  "key13": "2BEmx1nVFikfjcUFhjrDfpJ1B1Y8P1N5RHja5AtR47weFX6zMHNuXazQTmGz6TiA2tc1wuzM7mLs6t1hyZStfK1m",
  "key14": "3JkTY94R2pnZrFCRugBRxk1misWAz7uyw7XmZFeYXsa3nbRdnUVzaAqswUMdyThTGSSFiHwyCZjpQm4pjCmNNAB2",
  "key15": "3oyLPR5pFM3PCdqcbcxCN2WiPTqFkHMCCN3ibrJ7fSrUJDkz7Sf9FyCbgpTsoLrUbpLhfdHc5wQ285qyycZtA9H1",
  "key16": "BcGLyY1grUv4gF8g13CgiuUDG1Xqtt39drkZcd3yCKBzaAkcGKEGZTmuQAbtFaEB25t6DPiTcj6od6319B4KJBA",
  "key17": "5MJqKzLWcagdiiM2DfEzFbYvY9QFyf6GYp62iSD38D1Z6Av5U5kgXnnv58HT8k6ByntRdSteq6v2SVTcKzTD51Gw",
  "key18": "2cGRvr96Evj2F6sVXfCcR35DyBALdjyLSpdBbd7mJWsqfnuLXEsp9GaK5pgz8axssZHJrgC2uTrhi8LRL3nGv6AM",
  "key19": "5Z9odBkrRgECA4ZuJkbNhvGscVLDxqhQex2fmGc1FeTXBLP8sQwnxD3B5Wq1523WtEF3EySJvCxJqbWXzBTKhXAk",
  "key20": "5c8X6FTrxnnUq5mZvudwwnLQF4zGtsrjBCvkuSq9Gon7Hs7MzrpWi1jcSQ9QPbrFxs4127pmATrDgoJBWgZZugPY",
  "key21": "2mwDebSCL5pTBr9Fe1UQ9VaxxcG1WvbdDnEnfLEKG5TNXXsfqySMQjMXvn4jSECSjjqfPd1mbyJtiG5dSEExmJRB",
  "key22": "4J5oYoXH2PLYaEQXmJA73QULNbnB3VCnda4YgKbawbhDEv2jf9b3RcCsmFaV3DJ6kEAZcKtTtbyDwpnAAh1o3SDS",
  "key23": "4m2Fjdct7jABYMHJkmZBzToNq8GJFLpPBpbbUd8iK3Wmzz1f6nftQD7BdBm58cHTj62oETD4kESVnTsGezePF31W",
  "key24": "2YME4gE4t5tmXSTfcRZYYr17eRVQzeurDXL3WP6o1zoYBcnCnJgFEnPpw7JFBftQBBRiUQsNv3DBreaqexe2Gi1M",
  "key25": "3d2Df9Y2MgiSgrzkuwQtRFNooAXkbnam5BqXyiAAoQ1nvdk1jN1t1sGhPHLQGvCm8hQjHuiPnsiadBeKW2Ks7Kht",
  "key26": "4rgu2ELvUMxLQ6yL59me9RTK4dCF8Lw9vQwGf97DRLHZe1wgzJswV9aibMSsioYs4Pnz76LYBbRSYDKnZyuNenoe",
  "key27": "4vtgeBNx3cTG7UDbKTAx6GqYoHYMxhQ5CBSHjaKc1QPjCEGh89hv6TcsVAgrbwVfreNVBsDeSp6W3pAfewojKkFF",
  "key28": "WYXNKchpqnQuqtcBMv7QdRYPLpdanrbYcFGa3L3oaVnSLoL3uTX68SiRtntLLMYqZsDsK1h2orZ7ytjnF3F5idR"
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
