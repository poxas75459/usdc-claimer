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
    "5wS8wiYhU9EshJPLAiQhnrqr1VWiirLWApSkNUeNELeagvWTRikPdvyiMrq2w4zG967M1dtm3xJAxGyU8M4XVRBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EXk8NgiwU6vbjQu1fPSJLos7DeScKU4a7dEEMMtPruFyC7FiAuTU7fWGHxYCVmgthG1vyc6268nmyhMv2Eo3nWy",
  "key1": "45xCiDPR5JJh6eYcTVBTYdZ7uh8MYV6fv7FsLFCN8KcKvFTWxxvXGVV9zVQ1zSYWHDtDr7gu5WAMaLtMtStTJQQb",
  "key2": "2etw1dEjNpUw8fakpKWosTHFNHa4q8oL6iGTfLM1zT9ZRpwXQG3vW7ChFPXJptRaX7JFdzqLD2pyE9ddUcmGyFCR",
  "key3": "4HCgubwBHRw3xdc4yepoZRjKBmnFtLcvk6WKu3SUnJ3Qdr7vYrv74D6EngYqBfnHNSKQLxFoq1XfrZ8TaaDPxzoE",
  "key4": "qZvKBzFLvLPjK8nZaX2HPPiuuDv7r84DiFzCtxkeJCXGnwbSZ8qxU7vNG4bXZ8Yb3KDJU5hBkPeLMEWy1a1p7TS",
  "key5": "mJWD4YpbrCDUdaRTia2fqJsGaWrjdn2ZoW7NcmLs2d6WEASQpeeZppEXG5c9ZGvk44Ys7QmTbwHZi69VZbk8WYX",
  "key6": "4P3HKtMYx3EhbhwDGePc2uKJGkyT4GGCXv4ANUC4CmR5eNF2octcGRYdfyxkdXGYMGhiPQvbSWpH5oPkq3JCZGMo",
  "key7": "3MTHnGt9gWxZQpanGitmW5svewkrwMmx3DHwxpJcx9e7UPuTX9ij1McGY64rhJvEZUocLhuucShzFM5gZwbdQA7r",
  "key8": "2RfPGYHgWpbG6KTJeTSo4mLtVH7Aw7ZaQJWgWfj9BGihVe92fhejyjQuhop8WQFWyf726tRSBMLfGa2QZkDnuh13",
  "key9": "5EvFGrFK5u73dT8HcCPpfF8ddFjyMMmcqVrNHZq46pUXoVdz2XZUri5sLyDP5bJPs3YpdLki6iewDkeRiZvKdoAo",
  "key10": "3RNmxWc5932c6YNq7aCXa4hm76Fd8LipDwkxSrGjNCWzKbormhqqnfs1prvq42ayk7a7e2T6EPEE6LKtqNsiguKJ",
  "key11": "2JuqMDuTmfmfVy6XEumskv1GaXQX2hzjDjxJNGadLWz61z96oF827jDys5dWDV7eExX4nUPftArTafbXw6N7iQqZ",
  "key12": "4AMPeUPNQKs8CRzvJupZ3f9BaT8mVVJH9psxmGGgn3aFCmtez63xDiotJiLp67n8N8nhCf4Bz552UyAdE4FJ7NmA",
  "key13": "TFt6JAoX3KrG3oh193BxdaJNJ1wZ82RQurERCrc68SZrv4L8HjYLN2LzkJWs3xC3QvricZLBjx6AcMeMeTggshW",
  "key14": "4no9tvvucGSomPmHgWqBxbsgqkFdCMYL4KMrPFXLFzNWzGXGGNcsPjrAg2pztZKUJo6AmdkprPURqgwd4piuHUyH",
  "key15": "5cPTJQ6JNbHDeZAQLYYi8uDB6xRwuq6jVHiJ47rx5QaVsjs1FWJxkSNSik4dEbwXjXbF5rTK6hLgYD1Cgu4pXF7e",
  "key16": "3maWfapBVPQE1C55UwmbeF8cN1HEPSAiGSgVqypc7stf9dMTS5QwDxQuyh2apvrVfwvweqYSW5iA2mKWUjUaiLDV",
  "key17": "3nEK8DsCMnHYhRrXSBHCds9gD4Nijqpa4jwmoU3YdkvxJJQcp3e3HGhSqEPRMjeEoCi6PZ85wW8TsAxUqE8EwGwJ",
  "key18": "5cEU923oHm3mht1PHWwKjzCTRK4gB27YNstQzZ7zm75PYD8iomDkRL3HkdRs6JsJe76ERRE6Dz1mHKHA8PxKtAZA",
  "key19": "j4wCQJ6zrVMEohCpvfZvtpik3DriGdXH7fpLqmQJK4WNz6jdpdoMHnBCdjRuFqe4b6ouaHss7fdBSMEJyPZyYKt",
  "key20": "g6t6QQMLdaTQWzctYNSup1BSmuoi26tz8aWAbFMjpAVcYs9WgvsMR419scdCBBnNXrk6WYathLBpHFN5ajoxabW",
  "key21": "33zScjNSUk2aSzjGV242ZfzqhoLPdUth8F9nYEnfY5FBbsZkQCrorSxQ8JGHoLSnNUXQEUKXjTGToiYtkCen53pp",
  "key22": "3tPUaCVJeHukCZqAuM88U6q7KVWk1HskHbwTHBTstL1VzkzogVTPjJh1t99hVCQDtgPXH4PcBL2HeJrXGBou8oPM",
  "key23": "2S2AqdV4EdQfDDhgtobtNh47Em7Qi6mQpTR44Lx2T9fzgsfun8FTvgnyoDaBLgsoaPcEvgBxm1cvrSjT6nYqWtPb",
  "key24": "2CjyxDpvJtWRL8TawApZCBuP5TDj3FkjwDMGsSjv1Rgm2DCgFgxgpYeP3J6qvTviQ6xpfK3je1moq62m9pHi1Det"
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
