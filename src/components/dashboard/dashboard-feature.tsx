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
    "5cksMfSigwVhyJKAJS67qENV17deaBFYZPSCuafDGyScsbYx7MrpXMdNhTDLU5LBtHoXbwB4eATCPJtaHA4YJiQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvBcDEpbyJ1PL5tq6A4ZYhN7wkXYRjLWsJECDsqnFrRrbt7PpEtHauU2qA7SzZ6gVijjgdZk8j18LNnsDyMBGyb",
  "key1": "4VXVdcxyHY2sfzQKYpmB4aYdymwckYiWshvD1dkkdvVLJro3pBKB7SeCpDFpBLpN69JNbY4eShoux5NuxwZBzFVi",
  "key2": "3r5HipuroGakMNUdTPSy1Psm7WirhXptqJVi8htea8FTcgpuw6CK1YQHz3xdVjDSa29hnKAcG6xj2MtxA4KkheDW",
  "key3": "fYNJL2uZiLhje6nJThnEdeGm8pjp4Jm4RhzxpExitNKCQ2QTf3wVERA6pUrgr8aKKKwngjwm2LSq64v3Nu1uL1Q",
  "key4": "2ZdrnwLKyAUhyFbXMuubnvmid9BdH1w9hs4ehj9yt6CHeJemFJWE64H1E8jcCrFumgu6QWss7piaw5Tb5rTkmwr",
  "key5": "51U27gPJCsQKqy8MVTVkVs79wuADKedsVnpiZJMQhGWz4uUEGcMhHtgSGUAWtLM4Lxi23fSV4oJRUJbkPNfWdy2N",
  "key6": "5oD3TUHJ3Kg7B1XtBr9utzPvMu2YBpxN5StiHhiAG9JqJGezAHhDa8QEdNdvbvH86KscLpFjgr5dw1SqKP3aN5DT",
  "key7": "2rpuZereZ6GwtMzYQznjbvvqXCU3B9g3tAhdkN2w9gHVxAQSGDakTQSdAgPgYmZKGr7NT2NJ9x41yfutqH2PKRBf",
  "key8": "4FXkewH6k4mmPFvfUXm4Y5fJjZYwLBv6xaJdHsnscjVHwhWfFD2FQBXaqh4X9JTgsgw5GuLuiib1Tj2yLmib2y3E",
  "key9": "2Bv6gK3ACJtaAaoAyb7F9NBLvFraEJpicUfPpSnLJibmBjVinLmsuGLb5an78ERTEZuNXZJrBonLDJBLss8eBT7N",
  "key10": "CdLGotxwD6WigCBNNNvYTW52xccA9rGiA4vKhVxXGd9Ep7XsxuMhnTFuvQQJgBeP7Am1RdaPM6SCJnzfmQYdm4H",
  "key11": "57aXrzQYjxQ11DrQtFMcj4kPDxAyqiE85xqup8zKmXL6RxSqNVppodpGZcX3kPdwm9SEK2FApvyRMWyz2MRvdq4f",
  "key12": "4hbiEDmqD1jRZmHu76sbNCcJ1rfjiniYeoL8CffXSWkh1GKer1aUNwYRUXyK7jFqn3FKPbCyMibEYAG793SvA6es",
  "key13": "wer9KCSGByncKbHQ8T1J8hu99tbzcmvSEbZv4m4Yvgqmh5wNrMN71qtGi24vg86TJP2LWw4WrkyakMC85U8LHsT",
  "key14": "4WF2aJtkj1FQdYC5DKK69Sarz6mEriT1fwECCL81mSFxXSaoB6uXtitr7vruCDoz2KnNhVPiCXR6rJ7MomFmSnR1",
  "key15": "mx5MoYRovUAavEzMuJqPvGoBZtAEHJ83yPXVe9FS9QMLMi2VvSDjSzJa8TD6fNQUHdQ3vi3uPJiw91kuGeBvRqk",
  "key16": "4Hm5AVDY9eUEyyEgskGeU1GUbX4FdTD2QNogdjETmaeL5MFTy5r6JT3zXA8BVdJbk4kjRdFwBcTnFjVdSASDmhSP",
  "key17": "3yPJyFY5dodoEa6HJjj5FGfM4a7a55RA3KNLBq2V42xGJxoUsYF6uaRtkwmhRfeo1UKZp15dEkHUK67JsBLFSA2S",
  "key18": "2WG3bspcW2XEhrcBFoJjxgD5X4yxaiouTR6njKdg8Z7qjvebeh44y4h2PZSP24oiriQZyfBqNM1V7bJyMWHyjXM6",
  "key19": "27mcZCjYvc5gucgHyksMYytLWMMQE7XwZBhkGnPnog93sKJX732p71kN5zS9XV43n3iEKY9kASESd89Qn5KuHoUv",
  "key20": "61Tq3FL33FeYmo3yUqFJpJrf2yHGgUSb6RxLykBWo9QaPgw5ZfHe25e8FvSDH3DyEQBJBxLJ1231BqgFk9qwfAbm",
  "key21": "4YpCpySQXWh81Fd4Lrg1zsPtHvxxY2ij8i5HEcwrz6NZy98tR17nXRMt7ofkCMQno6RvnbdcbSBeobN4VBiWNFXK",
  "key22": "UCrZu72viLebGJKUjJKKXVm2MCwtV2NFALcP9D8GCB4pFYr39oUHJhzpzCwptcvobco4QysLQ8tBgwmprbwrFzv",
  "key23": "4Z52HQeSLtW8VwRZcLQzXiLRYCsCxKbM3uqNhzZXpeyHxx47XYkEp8iuqzWa429A6pi8JzCrvxaGE3SiUtfodJex",
  "key24": "SrTXuP6jFHqgGZAjisSx72aFZsr2xGGhTaRumrA1Ehe9buviRRxs95z5gsoz9KbrRDaRkYevXwsqy3ikFUU1bpM"
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
