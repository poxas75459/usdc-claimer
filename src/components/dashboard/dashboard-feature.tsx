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
    "3drMhtswc3tvPe7pypHZXdyFx2nJ5i7xpzvZ6Fq7tMkPPu9jkMApDUxqXtLUAHY35h4q6PEF1Aw7DuJPnMxs661h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZP1dAVxrCV5Co1Rm43oqQ4ySRvAC6xZbpX85Yb3fvUNSsupg6BDNgJiiEireGz3wbZtdCa9HLxWEeQhDGpzEhkS",
  "key1": "pKLAFvd2PDYy2BwF2aUFfJ4E7rosV5gkzfWEtst14v6WFGLkwVqtPVzA9Gre532b16ap3gSmcMgFX4CfLtLUnGr",
  "key2": "2DqpuHNGveK97tCusc26kmAhq2H9AMepzeBv8Q1qP54jkRwhDb8Uu4FdmAFvdUiAjxErGoHBnA8Qjo2RziJf11xC",
  "key3": "f3mUG397ci38LFLsBajB7dwEAmjkJ9gATGbXE7yGcu7xe2twyhun3yDFVdFYG5yizfE2KhQacqHc8D3itXCnbgz",
  "key4": "5G4ktrsK3cJUxj7qHtpdhm4NJV4CQcrM14bXK86vGtrCFPbq7tAKA2WUhyCzMDQZjTT93mtLoX3VcxQeMcp5yDzy",
  "key5": "46WgLUSuq1hPjw8BGWCfRu6VrmZijK7FEx2BKfBCwC7HyR4pX3dcGEoBkTob9AeTUoKFhsLgnfGGjPdzTyBhpMUr",
  "key6": "3HrNTXhLVydWd7ALYLt2a3wK6WviDmDEhzyBX2iNK7fjoEWhzzPcHWwNnCoh44WybXi7RnoHHb6TCZiEaia6uek9",
  "key7": "3QdUCcDufPkAQDNxfdWNYvvCjhWEeW6rj4hdLekaD3obiGdy27paaC3tSMWs6LQDYGjLKYcQZicdugkacXD3qSyz",
  "key8": "4AXcTWKbJo3c7UTBpmckAiVz9HxpRYXveZJKpX5WDJNsA2Y5itTTDNH7nthzFDyZtM9D2eijW8hJeFj4obmdVqr5",
  "key9": "2upLsdrtjxgs9tAcdp1g7934Hr6Ps3oMDM6ZD7LKGP6N18mnZgDEof1NBbiPKZdNBUapoxjHtwSbNK27M8PCyAj2",
  "key10": "3K2Gor4PbMYFnmYnV4VKuYUyUCQaQ2XQz1PLrQiPNpTjhnc5SzsAMCyFLf2ibmE6WHfqZCfqrs7bJLsVKtQb8PsD",
  "key11": "32cxTTf4PgYtQZGtfRUz2PXAyiJwtzukYbvtGBoDPqsTFF7MnfZdxPgKZD9jG4k5gRQ3ZvnM4S75YxizPAYrAQhX",
  "key12": "54YzXK4CihGHDH9JxyHGzHEn63x4DNDVi3Z7RnrGMkMtzqdg3Vw6GLnNqAguArEHwnthNSwsoYfSEXpaXCPsN4HS",
  "key13": "31yRAr167hxUvWxzHkfXEarS2gYMGYJgLUMjRwFqwBwrA8yzuGLNWNmzYbuS73kNw1ymTPN8vLbzoJjPZ4FGqrEw",
  "key14": "62mqgTA1uq3VegTzKSzS4YaF5ZAVGa5eC9yp4G6orUxefEPr55xcxPKtwZ1dfnuuaHKnwAHGrpijRXdqSfmMp8qs",
  "key15": "27fdmXbURBk6vC45UKHEz99udGmAj3UrFrhi8Xtr3jSVmPcZyeF2nFMEz8PM5Q7hmgHpfGLRpEaNCgy1523UzCER",
  "key16": "3rSJ8eHKVERb8izYd2nYWt34P8eg2w9BsMzvUe2UZmozeMB5sY93S4AqZkwhipTKNmHoGRpXmGUzhK78Lk76K3j7",
  "key17": "52iQ7amKeJKaTW4GK4i4ofkeSJB82NfBZuoKDvSGJ9mYLpqaQGgqUUgUTSThahovJtHJM31iusc8iakfJk58fLz7",
  "key18": "5NohP41XnfTjYa7hPgk31YeNhECKVxgu3L7ZdB4r729vYU3fsZK1mj59JfaTSAJgoL9FVFvxUqAc5Y15AwGZGbZt",
  "key19": "27ff1bhZ8Ngos9vnu1PbWPqnAQSTGo53tGRu9EWB6DzE4vGjvuDhUkVX9sAFbnAk72puHUScDWY8EeeooRk3sLYV",
  "key20": "4hMYHeGLoegZQfy91quUKUqAhSiHdzyAcsSiSuqiMsZ8eUP2kdMCR9ZaNAgjRo1SD1dMKsTkwV3jaR6sBrwnpHRA",
  "key21": "5EVUR1QxMskhMzdzT7Tf1WGi6kehDqdtzQSH969gWqyMD824FTGiTCyvf3FfLc9wdGu3uXTbNxVBdFnuPbQJs6to",
  "key22": "PRzneUhVFBJ5ocSoRECPBRhKSGgseRt3MbXqjBVqmrCz2fymCJgabWQHKqAWzbV64TMUEU4DzSu8tVoPWxCRyiF",
  "key23": "43jeYqKvRrFtUtKpbUj5Fswe8QajKaX1q49BamjRRD31hzsfG6yqFfnM3THonBmbeR4uWmd6RtRDfS1ZtMfFkp37",
  "key24": "36cXie6QGFiWtkuNen2rt3MomJoe35AwuMxagPNyMz9182ECcmXkCgr1msJQEKXXFDGUHHQ9jV81ZGxE6o4rHJw",
  "key25": "2q4o316xJUqAZnGNSg3XREjPVo5JHzA6jtttjhPazGygH3dEP3L3VLWUKiPUWnTo852NKd53XxQ6vgvrBEHnfvEa",
  "key26": "3yKoAx8vCSviLv5fxfYykXrNqjtFGssrEaXXnGjRgf2cakKm3s6QEdWgzJnx5MDfg4nnfKEb59iuafcu8Vdi3tGf",
  "key27": "3pgQRhLiueJKwQDT3AetAtwUPZ24GnwXtJ16PFGhUo32NFgCh5vDBERXn7xs47HAPKH6goRy8gN4rtEE1Q2QBNF3",
  "key28": "39y8qepVdVAM1pmuU6AcgnoSVhkRaA2PtHwjJUYM6XrzQafG14MGdKZU5wZ3XKRmEK6dvStZuBPcUbYNXjX92qZd",
  "key29": "3UDYBesh6hvcapwZjobBcN5YksAKoLFEgDWuBdorDAiA7cHyawK3859N9DV8p3MtKerfXcmTccuehcdvtk9TbmGc",
  "key30": "M9bYs24a47zZJmpshsAgwq22U1jtyrxgxAa6gK9oyk5RFkXVTaCUBk4QKanpvNDSZDCryHaRtKN1F7UkndMopMb",
  "key31": "3yZqsQS5Pm7qdMaBvEP7pJi3cLxFFCAxT8UHCAFU55uYDbtEjRQhDRSP7qUcJve3RALZmU18ZHVnp8xJ8GqkK5qv",
  "key32": "3rXRjCPPRfyHyg8t9QyUufb984Xnt9sKkMnt5eF4RcLo757FUFAcXa8jgDqi2bbLWjJxpyyjJb5Sc8FDBmHEpNyP",
  "key33": "4BwgSyYCpTdbzzsstRxgBLk9w2VNHa9wXyPmBMx79fC41MpobSh6yX8dhXYKzTGmK2jMnHH5NmdV7L7dREg4H1e5"
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
